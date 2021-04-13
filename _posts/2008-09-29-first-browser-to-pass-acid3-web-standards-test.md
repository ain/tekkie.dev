---
layout: post
title: First browser to pass Acid3 web standards test
date: 2008-09-29 13:27:28.000000000 +02:00
type: post
categories:
- browsers
tags:
- Acid3
- standards
- WebKit
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
redirect_from:
- /tag/acid3
last_modified_at: 2021-04-13 23:26:00 +01:00
---
On Friday WebKit team announced their open source browser engine entirely passes Acid3 test by Web Standards Project.

Acid3 is a test page that checks how well a web browser follows certain web standards, especially relating to the Document Object Model (DOM) and JavaScript.<!--more-->

## What does Acid3-compliance entail?

Acid3 compliance means passing all 100 subtests which form into 6 groups:

1. DOM Traversal, DOM Range, HTTP
2. DOM2 Core and DOM2 Events
3. DOM2 Views, DOM2 Style, CSS 3 selectors and Media Queries
4. Behavior of HTML tables and forms when manipulated by script and DOM2 HTML
5. Tests from the Acid3 Competition (SVG, HTML, SMIL, Unicode, etc.)
6. ECMAScript

## Acid3 test against WebKit

In respect to the above, the test procedure is illustrated by the coloured rectangles:

1. 1-5 subtests passed: Black rectangle.
2. 6-10 subtests passed: Grey rectangle.
3. 11-15 subtests passed: Silver rectangle.
4. All 16 subtests passed: Coloured rectangle (red, orange, yellow, lime, blue, purple - for each of the six rectangles, respectively).

For the latest WebKit nightly, the test completes as following:

<a href="/assets/uploads/2008/09/picture-2.png" rel="lightbox" title="WebKit passing Acid3"><img src="{{ site.baseurl }}/assets/picture-2-300x203.png" alt="" title="WebKit passing Acid3" width="300" height="203" class="alignnone size-medium wp-image-194" /></a>

## Acid3 test against other browsers

Other pioneering browser engines, namely Gecko and Opera, are a bit behind on this with around 90% of the test passed. The latest Opera 9.60 Beta scores 85 of 100:

<a href="/assets/uploads/2008/09/picture-1.png" rel="lightbox" name="opera-960-beta-acid3-result" title="Opera Acid3 test result"><img src="{{ site.baseurl }}/assets/picture-1-300x227.png" alt="" title="Opera Acid3 test result" width="300" height="227" class="alignnone size-medium wp-image-195" /></a>

News comes as in a sequence of recent developments from WebKit most interesting of which have added a lot of new [CSS3](/css).

[Download the latest WebKit nightly](https://webkit.org/downloads/)
