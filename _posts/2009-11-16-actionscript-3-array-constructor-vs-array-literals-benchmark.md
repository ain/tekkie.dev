---
layout: post
title: ActionScript 3 Array constructor vs Array literals benchmark
date: 2009-11-16 01:40:13.000000000 +01:00
type: post
categories:
- flash
- as
tags:
- ActionScript
- FlashDev
- AS3
- optimisation
- optimization
- performance
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
redirect_from:
- /flash/as/actionscript-3-array
last_modified_at: 2020-10-18 12:36:00 +01:00
---
By the latest Coding Convention of ActionScript 3, the usage of the Array constructor is only encouraged for size allocation, e.g. `var myArr:Array = new Array(2);` for an array with 2 elements in it. In all other cases literals should be used, e.g. `var myArr:Array = [];`<!--more-->

Performance-wise this makes a lot of sense with up to 3 times of the speed difference:

<img class="alignnone size-full wp-image-548" title="new Array vs Array literals benchmark" src="{{ site.baseurl }}/assets/new-Array-vs-Array-literals-benchmark.png" alt="new Array vs Array literals benchmark" width="424" height="358" />

The above chart displays 3 different tests through 1 000 000 iterations all confirming that Array literals are a lot faster in the circumstances.

So for creating an `Array`, use `var myArr:Array = [];` instead of `var myArr:Array = new Array();`.
