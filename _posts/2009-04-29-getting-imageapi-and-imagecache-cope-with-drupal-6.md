---
layout: post
title: Getting ImageAPI and ImageCache cope with Drupal 6
date: 2009-04-29 05:18:02.000000000 +02:00
type: post
categories:
- drupal
tags:
- api
- CCK
- cms
- contentmanagement
- ImageMagick
- module
- PHP
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
last_modified_at: 2020-10-18 13:26:00 +01:00
excerpt: Setting up a gallery in Drupal may easily turn into a lot of hassle. While Drupal is one of the most flexible Content Management Systems out there, it's also one of the most complex.
---
<img class="teaser-image--left" title="Drupal" src="{{ site.baseurl }}/assets/imagecache_sample.png" alt="Drupal" width="74" height="84">Setting up a gallery in Drupal may easily turn into a lot of hassle. While Drupal is one of the most flexible Content Management Systems out there, it's also one of the most complex on top of million modules for pretty much everything including the functionality for the simple gallery.<!--more-->

## Themed gallery in Drupal

There are several combinations of modules to get a themed gallery going in Drupal 6. One such way is by using following:

- [CCK](https://drupal.org/project/cck) with [FileField](https://drupal.org/project/filefield) for creating a custom content types such as Image
- [ImageAPI](https://drupal.org/project/imageapi) with GD2 or [ImageMagick](https://imagemagick.org "ImageMagick® is a software suite to create, edit, and compose bitmap images") for raw work on images
- [ImageCache](https://drupal.org/project/imagecache "ImageCache allows you to setup presets for image processing") for processing preferences
- [Thickbox](https://drupal.org/project/thickbox "ThickBox is a webpage UI dialog widget written in JavaScript on top of the jQuery library")/Lightbox for nice inline JavaScript preview

## Problems with ImageAPI and ImageCache

The above set provides a rather flexible platform but since all modules are at different development stages, they might not work together. In the circumstances, with `ImageAPI 6.x-1.6` and `ImageCache 6.x-2.0-beta9` it's likely to throw an error:

```
imagecopyresampled(): supplied argument is not
a valid Image resource in
/home/.../sites/all/modules/imageapi/imageapi_gd.module
on line 126.
```

Same happens to the alternative ImageMagick processing.

## Workaround for ImaegAPI and ImageCache

Fortunately the workaround is rather trivial:

1. Open Drupal settings at `/sites/default/settings.php`
2. Find PHP settings block in the code around `ln 148` and paste the line `ini_set('zend.ze1_compatibility_mode', 0);` to disable PHP 4 compatibility mode.

Since FileField module sets the requirement for PHP 5 already, you don't really have to worry about the compatibility mode with Zend Engine 1 (PHP 4).

Related resources:

- [Drupal Content Management Platform](https://www.drupal.org "Drupal open source content management platform")
- <a href="http://www.lullabot.com/articles/image_and_image_exact_sizes_vs_imagefield_and_imagecache">Image and Image Exact Sizes vs. Imagefield and ImageCache</a>
- <a title="ze1-compatibility-mode" href="http://ee.php.net/manual/en/ini.core.php#ini.zend.ze1-compatibility-mode">Zend Engine 1 compatibility mode directive</a>
