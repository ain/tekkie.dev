---
layout: post
title: macOS pasteboard fix for Vim on tmux
image: /assets/tmux-icon.png
categories:
- macos
- howto
tags:
- macos
- sierra
- protip
- devtools
- vim
- tmux
- bash
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
---
tmux and Vim make a great development platform with a little help and fine-tuning, e.g. for copying out of Vim.<!--more-->

macOS Sierra release messed up the usual copy sequence from Vim (running inside tmux) by which you'd create Visual selection and go `:w !pbcopy` to write that selection to OS pasteboard.

To fix, there's some great work put into [tmux-pasteboard](https://github.com/ChrisJohnsen/tmux-MacOSX-pasteboard) that solves the problem in 2 simple steps:

1. Install `tmux-pasteboard` with

        $ port install tmux-pasteboard

    on MacPorts or

        $ brew install reattach-to-user-namespace

     on HomeBrew.

2. Configure tmux to work with it on your preferred shell (in this case bash) by adding this line to `~/.tmux.conf`:

        set-option -g default-command "reattach-to-user-namespace -l bash"

Enjoy the pasteboard!
