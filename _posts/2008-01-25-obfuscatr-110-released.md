---
layout: post
title: obfuscatr 1.1.0 released
date: 2008-01-25 11:14:40.000000000 +01:00
type: post
categories:
  - macos
tags:
  - macosx
  - obfuscatr
  - widget
author:
  name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
permalink: /mac-os/:title
excerpt_separator: <!--more-->
last_modified_at: 2020-11-19 22:45:00 +01:00
---
New version of [obfuscatr](https://obfuscatr.flashbit.net) introduces support for Mac OS X Leopard.<!--more-->

> **DISCLAIMER**: Apple discontinued Dashboard in macOS Catalina. obfuscatr widget can not be installed on newer macOS versions.[^1]

The email obfuscation widget has improved on 2 things:

- It now supports Leopard
- Obfuscation that depended on JavaScript is now optional.

The last feature was actually proposed by obfuscatr users who stated not to have JavaScript available at all times and therefore proposed using a rather different method of obfuscating an email, e.g.:

```html
<a a href="mailto:%6d%79%40%65%6d%61%69%6c%2e%63%6f%6d">Mail me</a>
```

To get a code like that you'll now have to uncheck JavaScript obfuscation on the back side of the widget so you'll be given the weird `%23%12...` string that you can use to paste into your email link(s).

![obfuscatr 1.1.0 screenshot](/assets/obfuscatr_screenshot.png)

[Download obfuscatr Dashboard widget](https://obfuscatr.flashbit.net/download.html)

[^1]:[Apple will permanently remove Dashboard in macOS Catalina](https://www.theverge.com/2019/6/4/18652971/apple-macos-catalina-dashboard-widgets-removed-feature)
