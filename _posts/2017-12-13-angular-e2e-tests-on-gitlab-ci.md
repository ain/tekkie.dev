---
layout: post
title: How to run AngularJS end-to-end tests on GitLab CI
image: angularjs-icon.png
og_image: angularjs-logo--1200x630.png
og_image_alt: AngularJS
categories:
  - devops
tags:
  - opensource
  - gitlab
  - e2e
  - angular
  - devops
author:
  login: ain
  name: Ain Tohvri
excerpt_separator: <!--more-->
---
AngularJS-based applications are meant to be developed in test-driven manner, but how to run e2e tests in browser on GitLab CI?<!--more-->

End-to-end tests for AngularJS run TypeScript specs on Protractor in real browser as if user would interact with software.

## The problem

How to launch an actual browser on CI with just command line at our disposal?

## The plan

- Run Xvfb (X virtual framebuffer)
- Launch all AngularJS tests on Xvfb display with headless Chrome

## The solution

### Protractor configuration

``` javascript
// protractor.conf.js

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // spec paths
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
```

### GitLab CI configuration

```yaml
# .gitlab-ci.yml

image: node:8

stages:
  - test
  - build

test:
  stage: test
  before_script:
    # Add Google Chrome to aptitude's (package manager) sources
    - echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee -a /etc/apt/sources.list
    # Fetch Chrome's PGP keys for secure installation
    - wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    # Update aptitude's package sources
    - apt-get -qq update -y
    # Install latest Chrome stable, Xvfb packages
    - apt-get -qq install -y google-chrome-stable xvfb gtk2-engines-pixbuf xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable imagemagick x11-apps default-jre
    # Launch Xvfb
    - Xvfb :0 -ac -screen 0 1024x768x24 &
    # Export display for Chrome
    - export DISPLAY=:99
    # Install AngularJS CLI exclusively
    # Add --unsafe-perm to resolve problems with node-gyp infinite loop on Docker
    - npm install --silent --unsafe-perm -g @angular/cli@1.1.2
    # Install remaining project dependencies
    - npm install --silent
    # Download Selenium server JAR, drivers for Chrome
    - node ./node_modules/.bin/webdriver-manager update
  script:
    - ng test --single-run --progress false
    - ng e2e --progress false

build:
  stage: build
  before_script:
    - npm install --silent --unsafe-perm -g @angular/cli@1.1.2
    - npm install --silent
  script:
    - ng build --prod --progress false
  artifacts:
    paths:
      - dist/
  only:
    - master
```
