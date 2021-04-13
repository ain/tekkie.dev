---
layout: post
title: tail functionality in PHP
image: /assets/php-med-trans.png
date: 2008-06-12 02:48:38.000000000 +02:00
type: post
categories:
- php
tags:
- php tail
- tail php
- tail
hashtags:
- php
- webdev
- devops
author:
  name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt: PHP code snippet that makes it easier to display most recent entries in a heavy text file, e.g. Apache log.
last_modified_at: 2021-04-13 23:26:00 +01:00
---
<img class="teaser-image--left" title="PHP: Hypertext Preprocessor" src="{{ site.baseurl }}/assets/php-med-trans.png" alt="PHP: Hypertext Preprocessor" width="95" height="51" /> This little PHP code snippet could come in handy for those in a need to display most recent entries in a considerably heavy text file, e.g. Apache log.<!--more-->

## tail in nix

In UNIX and UNIX-like environments there's a command called `tail`[^1], that does the trick of displaying last few lines in a text file, e.g.

```
$ tail -n 10 /home/clients/tekkie.dev/logs/default-error.log
```

for the last 10 lines of Apache error log. On the remote server this kind of tool is the subject of <abbr title="Secure Shell">SSH</abbr> access or the possibility of using `proc_open` or `exec` functions of PHP to call `tail`. Mostly, esp. on the virtual servers, this is not the case.

## tail in PHP

The above reasoning is exactly why this tail PHP code is a handy tool:

{% gist 1894692  %}

[Download php tail](https://gist.github.com/ain/1894692/download)

[^1]: [tail: FreeBSD General Commands Manual](https://www.freebsd.org/cgi/man.cgi?query=tail)
