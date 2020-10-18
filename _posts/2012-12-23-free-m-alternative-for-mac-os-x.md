---
layout: post
title: free -m alternative for Mac OS X
date: 2012-12-23 00:01:13.000000000 +01:00
type: post
categories:
- macos
tags:
- bash
- Mac OS X
- memory
- nix
- Ruby
- snippet
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt_separator: <!-- more -->
permalink: /mac-os/:title
last_modified_at: 2020-10-18 21:29:00 +01:00
---
On Linux console it's easy to get free memory with `free -m`. On Mac the utility is not directly available. The alternative is to fetch it from `vm_stat`.<!-- more -->

There's a great small Ruby script to do the job and display free memory in a simplistic form with a command `free` in a following few steps:

1. Download the [free-memory.rb](https://gist.github.com/4360607 "Ruby script to display free memory in Terminal") script ([direct download link](https://gist.github.com/4360607/download "free-memory.rb download"))
2. Copy it to a folder on your Mac, e.g. to `/Applications/Utilities`
3. Create an alias for a free command by editing the bash profile in Terminal:

        $ nano ~/.bash_login

    At the end of the file, add

        alias free='ruby /Applications/Utilities/free-memory.rb'

   Make the change available

        $ source ~/.bash_login

You're done. Type `free` and you'll see something like `3.98G of 8.19G free`.
