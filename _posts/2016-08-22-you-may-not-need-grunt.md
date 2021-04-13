---
layout: post
title: You may not need Grunt
image: /assets/grunt-logo.png
categories:
- javascript
- node
tags:
- javascript
- nodejs
- grunt
- npm
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
---
Grunt is a JavaScript task runner and it's great at what it does. Even so, depending on a project, you can also do without it.<!--more-->

Instead of Grunt, NPM scripts can be used directly in `package.json`, close to the original Node.js module.

### Example: SCSS compilation

### Grunt task

`Gruntfile.js`:

```javascript
'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    }
  });
  grunt.registerTask('default', ['sass']);
};
```

To run compilation:

```
$ grunt
```

### NPM script

In `package.json`:

```json
"scripts": {
  "sass": "node_modules/node-sass/bin/node-sass main.scss main.css"
}
```

To run:

```
$ npm run sass
```

### The pros and cons of Grunt

#### Pros

- No considerable learning curve
- Easy to create and maintain
- Performant single-shot tasks
- Readability

#### Cons

- Not all Node modules have Grunt wrappers
- Competition from Gulp has hit Grunt community causing some modules to become outdated
- Performance loss on watch tasks involving several Grunt tasks
- Bugs introduced by Grunt wrapper's abstraction

### Conclusion

There are right tools for every purpose and the reasoning should depend on the particular project.

Projects where bleeding edge Node modules are to be used in performant environment, NPM scripts will be more effective. Complex builds requiring tasks loaded with options, and concurrency, Grunt is a better choice to maintain.

I put NPM scripts to good use in [smartbanner.js](https://github.com/ain/smartbanner.js/blob/918049219a39bd1e9d6b139a6019d7ca58f2ef17/package.json#L37-L51 "ECMAScript 6 based component for customisable smart app banners"), ES6 customisable smart app banner component for iOS and Android.
