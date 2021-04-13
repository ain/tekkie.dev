---
layout: post
title: Karabiner key mappings on macOS Sierra
image: /assets/keyboard-maestro-icon.png
categories:
- macos
- howto
tags:
- karabiner
- macos
- mac
- sierra
- alternative
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
---
Apple's macOS Sierra broke Karabiner key mappings for programmers. Here's how to work around.<!--more-->

Common case for a developer is to have backtick, caret and possibly something else easily accessible, but while [Karabiner devs are still working on a fix for macOS Sierra](https://github.com/tekezo/Karabiner/issues/660) a workaround is needed.

Good alternative that gets the job done well, is [Keyboard Maestro](https://www.keyboardmaestro.com/main/). It's comprehensive and GUI is similar to Apple's Automator, so one can get away without coding.

My own [Keyboard Maestro macros](https://github.com/ain/keyboard-maestro-macros) consist of just 2 things (`` ` `` and `^`) for Estonian keyboard layout. Feel free to fork and adjust.
