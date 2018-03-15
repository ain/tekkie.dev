---
layout: post
title: Stable Docker image to run JIRA
image: jira-icon.png
og_image: jira--1200x630.png
og_image_alt: JIRA
categories:
  - devops
tags:
  - jira
  - devops
  - docker
author:
  login: ain
  name: Ain Tohvri
excerpt_separator: <!--more-->
---
JIRA is one of the best Agile issue tracking tools out there, but choosing the right Docker image to run it is tricky.<!--more-->

Docker Hub lists more than 1 000 images for JIRA. Fortunately only a few have considerable number of stars which allows cutting it down to 2:

1. [cptactionhank/atlassian-jira-software](https://hub.docker.com/r/cptactionhank/atlassian-jira-software/)
2. [blacklabelops/jira](https://hub.docker.com/r/blacklabelops/jira/)

When running JIRA behind HAProxy that terminates SSL, e.g. @LetsEncrypt, `cptactionhank/atlassian-jira-software` turned out to be painful. JIRA does a lot of AJAX action, considerable number of XHR requests broke over SSL termination, rendering this image unusable.

In comparison, `blacklabelops/jira` ran out of the box with the following Docker Compose configuration:

```yaml
version: '2'
services:
  web:
    image: 'blacklabelops/jira:7.5.0'
    hostname: '<jira host>'
    restart: always
    ports:
      - '8080:8080'
    links:
      - db
    volumes:
      - ./jira:/var/atlassian/jira
    environment:
      JIRA_DATABASE_URL: 'mysql://<database user>@db/<database name>'
      JIRA_DB_PASSWORD: '<database password>'
      JIRA_PROXY_NAME: '<jira host>'
      JIRA_PROXY_PORT: '443'
      JIRA_PROXY_SCHEME: 'https'
      DOCKER_WAIT_HOST: 'db'
      DOCKER_WAIT_PORT: '3306'
    logging:
      driver: json-file
      options:
        max-size: 10m
  db:
    image: mariadb:10.1
    environment:
      MYSQL_DATABASE: '<database name>'
      MYSQL_USER: '<database user>'
      MYSQL_PASSWORD: '<database password>'
      MYSQL_ROOT_PASSWORD: '<database root password>'
    volumes:
      - ./data:/var/lib/mysql
    logging:
      driver: json-file
      options:
        max-size: 10m
    restart: always
    command: mysqld --character-set-server=utf8 --collation-server=utf8_bin
```
