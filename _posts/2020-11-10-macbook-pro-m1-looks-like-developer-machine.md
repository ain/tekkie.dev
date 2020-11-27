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
last_modified_at: 2020-11-14 14:08:00 +01:00
---
Apple's new MacBook Pro delivers more than the new M1 chip. Something good is back for the developers.<!--more-->

## MacBook Pro's keyboard

Having tested the first MacBook Pro with Touch Bar back in 2017, it felt like [MacBook was dropping developers](/apple/macbook/macbook-is-dropping-developers). Some essential ergonomics got disrupted esp. for the Vim-based devs.

Today, not only has Apple made a prominent switch to their own M1 chips and tripled the performance[^1][^2] by doing so, they've also brought back the `Esc` key. Did Apple's designers listen to the critique? Perhaps.

<img src="/assets/macbook-pro-m1-escape-key.jpg" alt="New MacBook Pro M1 with Esc key" width="375" height="207">

## Docker Desktop

### Docker and Apple Silicon

Following the M1 chip launch, Docker announced that they're not quite there yet to support Docker Desktop on macOS Big Sur:

> Although Apple has released Rosetta 2 to help move applications over to the new M1 chips, this does not get us all the way with Docker Desktop. Under the hood of Docker Desktop, we run a virtual machine, to achieve this on Apple’s new hardware we need to move onto Apple’s new hypervisor framework.[^3]

As it stands Apple Silicon support is in active progress[^4] and first sightings of Docker Desktop on Apple Silicon have also been made:

<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Full productivity restored on Apple Silicon <a href="https://t.co/eHltmYz4eF">pic.twitter.com/eHltmYz4eF</a></p>&mdash; Dave Scott (@mugofsoup) <a href="https://twitter.com/mugofsoup/status/1332382741892124675?ref_src=twsrc%5Etfw">November 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Whether or not the new version also improves [Docker performance on macOS](/devops/docker-performance-on-mac) remains to be seen.

### Docker Desktop, Big Sur and Intel

Docker Desktop runs fine on old Intel-based MacBook Pros with macOS Big Sur. There's no noticeable performance drop.

Important to add that version `2.4.2.0` from Docker's edge channel features `gRPC FUSE` for file sharing and is considerably faster than the legacy `osxfs`, also on Big Sur.

## MacBook Pro M1 for developers

Lack of Docker Desktop support will not see too many MacBook Pro M1 based developers anytime soon, but it could serve as a very performant platform for a developer who does not need the mesh of microservices set up locally.

[^1]:[MacBook Pro M1](https://www.apple.com/macbook-pro-13/)
[^2]:[Apple Silicon M1 Chip in MacBook Air Outperforms High-End 16-Inch MacBook Pro](https://www.macrumors.com/2020/11/11/m1-macbook-air-first-benchmark/)
[^3]:[Apple Silicon M1 Chips and Docker](https://www.docker.com/blog/apple-silicon-m1-chips-and-docker/)
[^4]:[Docker fails to launch on Apple Silicon](https://github.com/docker/for-mac/issues/4733)
