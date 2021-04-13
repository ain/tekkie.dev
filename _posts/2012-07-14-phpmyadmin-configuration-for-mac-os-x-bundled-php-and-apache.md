---
layout: post
title: phpMyAdmin configuration for macOS-bundled PHP and Apache
image: /assets/php-med-trans.png
date: 2012-07-14 20:06:12.000000000 +02:00
type: post
categories:
- php
tags:
- LAMP
- phpMyAdmin
- webdev
author:
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
---
If you're not into using XAMPP/MAMP for your local development sandbox and you'd like to go with the stack that comes preinstalled on a Mac, you could have trouble configuring phpMyAdmin.<!--more-->

For a successful phpMyAdmin configuration the usual requirements are that you have a fast and easy way to access the databases meaning no login. Below is the configuration that delivers it:

{% gist 3112087 %}
