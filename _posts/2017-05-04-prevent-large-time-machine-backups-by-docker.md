---
layout: post
title: Prevent large Time Machine backups by Docker
image: docker-logo.png
categories:
  - docker
tags:
  - docker
  - devops
  - timemachine
  - time
  - machine
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2020-10-17 00:20:30 +01:00
---
If Time Machine regularly does its automated backups, transferring 10+ GB of hidden Docker data over WiFi each time, it will hurt productivity.<!--more-->

Standard solution is to exclude Docker data paths from backups. Depending on what kind of Docker setup it is, one (or both) of the following paths should be added to excluded paths in Time Machine options:

- Docker Machine

        ~/.docker

- Docker for Mac

        ~/Library/Containers/com.docker.docker/Data
