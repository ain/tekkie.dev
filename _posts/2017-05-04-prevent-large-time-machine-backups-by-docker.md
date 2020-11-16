---
layout: post
title: Prevent large Time Machine backups by Docker
image: /assets/docker-logo.png
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
last_modified_at: 2020-11-16 23:31:00 +01:00
---
If Time Machine regularly does its automated backups, transferring 10+ GB of hidden Docker data over WiFi will hurt productivity.<!--more-->

## Exclude Docker from Time Machine

Robust solution is to exclude Docker's data paths from backups in `System Preferences > Time Machine > Options...`.

Depending on what kind of Docker setup it is, one (or both) of the following paths should be added to excluded paths in Time Machine options:

- Docker Machine

        ~/.docker

- Docker Desktop (formerly Docker for Mac)

        ~/Library/Containers/com.docker.docker/Data

## Backup gains from Docker containers

For many developers the idea to exclude Docker from Time Machine backups will result in a sizable backup reduction:

```
$ du -h ~/.docker
 ...
 20G	/Users/ain/.docker
$ du -h ~/Library/Containers/com.docker.docker/Data
 ...
 50G	/Users/ain/Library/Containers/com.docker.docker/Data
```
