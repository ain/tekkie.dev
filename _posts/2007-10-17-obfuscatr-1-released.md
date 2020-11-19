---
layout: post
title: obfuscatr 1 released
date: 2007-10-17 23:20:37.000000000 +02:00
type: post
categories:
  - macos
tags:
  - obfuscatr
  - widget
  - macosx
author:
  name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
permalink: /mac-os/:title
excerpt_separator: <!--more-->
last_modified_at: 2020-11-19 22:21:00 +01:00
---
[obfuscatr](https://obfuscatr.flashbit.net) is the email address obfuscator. Its purpose is to obfuscate the email address in a way it couldn't be reached by the bots crawling the web for emails.<!--more-->

> **DISCLAIMER**: obfuscatr has been discontinued. Support for widgets was removed in macOS Catalina.[^1]

By the latest studies over 97% of the spam is sent to addresses that have been posted on public websites. Such addresses are naked.

_Naked email_ stands for an email that is readable by various bots, including Googlebot. So email harvesting bots, that grab the email for a spammer, don't even have to reach the site the email resides but rather get it from Google.

A lot of people prevent that by posting their email addresses like me [at] mydomain.com or just replace the @ sign with a graphic. Does it help? Well, if it's a bot, automated tool relying on programming, would it be that hard to modify its search criteria to also match the addresses formatted as me [at] mydomain.com? Please also note that spamming has a fully commercial background these days.

But let's think different. Any web developer familiar with Search Engine Optimization techniques should know that Googlebot doesn't fancy client-side scripting, e.g. Javascript. So any content that is being rendered client-side would be skipped by Googlebot. That is exactly a half of what obfuscatr does to an email — it provides you with a script that is rendered client-side. Another half consists of hexadecimal encoding.

To use obfuscatr just paste or type in your email, click 'Obfuscate!' and it will generate you a code that you can use on a web  without exposing the email. To a visitor it will look proper. To a bot — not really.

obfuscatr is available as a [Dashboard widget](https://obfuscatr.flashbit.net/download.html) for Mac OS X users. Users on other platforms can [obfuscate emails online](https://obfuscatr.flashbit.net/obfuscate.html).

[^1]:[Apple will permanently remove Dashboard in macOS Catalina](https://www.theverge.com/2019/6/4/18652971/apple-macos-catalina-dashboard-widgets-removed-feature)
