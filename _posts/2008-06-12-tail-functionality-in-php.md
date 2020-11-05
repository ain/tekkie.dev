---
layout: post
title: tail functionality in PHP
date: 2008-06-12 02:48:38.000000000 +02:00
type: post
categories:
- php
tags:
- php tail -f
- php tail log file
- php
- tail
hashtags:
- php
- tail
- log
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt: PHP code snippet that makes it easier to display most recent entries in a heavy text file, e.g. Apache log.
last_modified_at: 2020-10-20 22:39:00 +01:00
---
<img class="teaser-image--left" title="PHP: Hypertext Preprocessor" src="{{ site.baseurl }}/assets/php-med-trans.png" alt="PHP: Hypertext Preprocessor" width="95" height="51" /> This little PHP code snippet could come in handy for those in a need to display most recent entries in a considerably heavy text file, e.g. Apache log.<!--more-->

In UNIX environments there's <a href="http://www.freebsd.org/cgi/man.cgi?query=tail">`tail`</a>, that does the trick of displaying last few lines in a text file, e.g.

```
$ tail -n 10 /home/clients/tekkie.dev/logs/default-error.log
```

for the last 10 lines of Apache error log. On the remote server this kind of tool is the subject of <abbr title="Secure Shell">SSH</abbr> access or the possibility of using `proc_open` or `exec` functions of PHP to call tail. Mostly, esp. on the virtual servers, this is not the case.

The above reasoning is exactly why this code is a handy tool:
<script src="https://gist.github.com/1894692.js?file=log.php"></script>

[Download the code](https://gist.github.com/ain/1894692/archive/00b11f87fc36510b4f1c1bad28ad92ae45f54704.zip)

