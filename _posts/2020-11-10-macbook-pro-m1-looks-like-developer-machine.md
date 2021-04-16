---
layout: post
title: MacBook Pro M1 looks like a developer machine
image: /assets/macbook-pro-m1-escape-key.jpg
categories:
  - apple
  - macbook
tags:
  - macbookpro
  - docker
  - developer
  - touchbar
  - apple
author:
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-16 22:08:00 +01:00
---
Apple's new MacBook Pro delivers more than the new M1 chip. Something good is back for the developers.<!--more-->

## MacBook Pro's keyboard

Having tested the first MacBook Pro with Touch Bar back in 2017, it felt like [MacBook was dropping developers](/apple/macbook/macbook-is-dropping-developers). Some essential ergonomics got disrupted esp. for the Vim-based devs.

Today, not only has Apple made a prominent switch to their own M1 chips and tripled the performance[^1][^2] by doing so, they've also brought back the `Esc` key. Did Apple's designers listen to the critique? Perhaps.

<img src="/assets/macbook-pro-m1-escape-key.jpg" alt="New MacBook Pro M1 with Esc key" width="375" height="207">

## Docker Desktop

### Docker and Apple Silicon

Official support for M1 chip is there in Docker Desktop `3.3.1`[^3].

Unfortunately no improvement in [Docker performance on macOS](/devops/docker-performance-on-mac) has been reported.

### Docker Desktop, Big Sur and Intel

Docker Desktop runs fine on old Intel-based MacBook Pros with macOS Big Sur. There's no performance drop.

Since the performance bottleneck for Docker on macOS is the file system, it is important to note that all versions since `2.4.2.0` feature `gRPC FUSE` for file sharing and are considerably faster than the legacy `osxfs`, also on Big Sur.

## MacBook Pro M1 for developers

With Docker Desktop supporting MacBook Pro M1, it surely serves as a very performant platform for developers who need the mesh of microservices set up locally.

[^1]:[MacBook Pro M1](https://www.apple.com/macbook-pro-13/)
[^2]:[Apple Silicon M1 Chip in MacBook Air Outperforms High-End 16-Inch MacBook Pro](https://www.macrumors.com/2020/11/11/m1-macbook-air-first-benchmark/)
[^3]:[Released: Docker Desktop for Mac [Apple Silicon]](https://www.docker.com/blog/released-docker-desktop-for-mac-apple-silicon/)
