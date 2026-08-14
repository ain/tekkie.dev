---
layout: post
title: Safari 5 is a disappointment
date: 2010-06-13 15:41:46.000000000 +02:00
categories:
- browsers
tags:
- Safari
- Apple
- browser
- WebKit
- WebKit2
- webdev
author:
  name: Ain Tohvri
  twitter: tekkie
excerpt: It really must be the most leaking browser platform there is. In this regard Safari 5 is no different from Safari 4 and all the fancy features that were added don't make up for the memory failures.
last_modified_at: 2026-08-15 00:45:00 +01:00
---
<img class="teaser-image--left" title="Safari" src="{{ site.baseurl }}/assets/Safari.png" alt="Safari">Pretty much everyone who has ever used Safari knows well that this platform is the top dog when it comes to eating up memory. Say what you will, but it really must be the most leaking browser platform there is. In this regard Safari 5 is no different from Safari 4 and all the fancy features that were added don't make up for the memory failures.<!--more-->

If you already know what's new in Safari 5, <a title="Disadvantages of Safari 5" href="#safari5-cons">proceed to the cons</a>.

## Pros

### Reader

This new feature is particularly good in cases in which the site doesn't provide a print stylesheet and you'd like to have a nice, simple print-out. For an article on a blog, it would look like this:

<a title="A blog article in Safari 5 Reader" href="/assets/uploads/2010/06/A-blog-article-in-Safari-5-Reader.png" target="_blank"><img class="alignnone size-medium wp-image-942" title="A blog article in Safari 5 Reader" src="{{ site.baseurl }}/assets/A-blog-article-in-Safari-5-Reader-300x280.png" alt="A blog article in Safari 5 Reader" width="180" height="168" /></a>

### Tab Undo

If you accidentally closed a tab and would like to get it back, <em>Cmd + Z</em> will help you out.

### Pop-ups to tabs

With websites still using the <code>target="_blank"</code> attribute of anchors to pop up new windows, it makes absolute sense to convert all these pop-ups to tabs like other browsers have done for quite some time now. Under <strong>Preferences</strong> &gt; <strong>Tabs</strong> &gt; <strong>Open pages in tabs instead of windows</strong> you now have the option.

### Improved address field

The address field now makes suggestions, as other browsers (Firefox) did ages ago.

<a title="Improved address field in Safari 5" href="/assets/uploads/2010/06/Suggestive-address-bar-in-Safari-5.png" target="_blank"><img class="alignnone size-medium wp-image-951" title="Suggestive address bar in Safari 5" src="{{ site.baseurl }}/assets/Suggestive-address-bar-in-Safari-5-300x41.png" alt="Suggestive address bar in Safari 5" width="300" height="41" /></a>

### Alternative search engines

It's not certain if the competition from Android is to blame, but Yahoo and Bing search engines have appeared in Safari 5:

<a title="Yahoo and Bing search engines in Safari 5" href="/assets/uploads/2010/06/Yahoo-and-Bing-added-to-Safari-5.png" target="_blank"><img style="border: 0px initial initial;" title="Yahoo and Bing added to Safari 5" src="{{ site.baseurl }}/assets/Yahoo-and-Bing-added-to-Safari-5.png" alt="Yahoo and Bing added to Safari 5" width="139" height="122" /></a>


### Speed

Safari's speed has improved quite a lot. Whilst Apple's speed charts are regularly arguable, it's indeed faster than the latest Google Chrome 5 for Mac. Mozilla's Firefox doesn't even come close, not to mention Internet Explorer, which has been excluded from various browser speed charts altogether.

### Security

As we know, the only browser that didn't get hacked at Pwn2Own was Google Chrome. Safari was 2nd to fall after Internet Explorer despite the fact that it shares the same WebKit rendering engine with Chrome, but obviously a security layer has little to do with the engine. Apple claims to have patched lots of related security issues.

### Simplified extensions framework

Just shortly after Safari 5 launch, quite a few new extensions were announced by 3rd parties, e.g. Send to Tweetie and Send to LittleSnapper.

### Improved HTML5 support

The important remark here is that HTML5 is something that is there thanks to the WebKit community, not Apple alone. The general crowd may be under the impression that Apple is the only HTML5 forerunner there is, but quite frankly, WebKit contribution is by Apple, Google, RIM, Nokia, Igalia and a number of open-source enthusiasts altogether.

## Cons
{: #safari5-cons}

### No WebKit2

Still the same terrible memory management.

Since the current memory management in Safari is simply horrific and it hasn't improved, WebKit2 is something that should have been there in Safari 5. WebKit2 is a new API layer for WebKit designed from the ground up to support a split process model, very much like Google has in Chrome but at the core of it.

__Greater speed is great, but has no use if the application is leaking__ and it is leaking quite badly. WebKit2 would have resolved it, but now it's open for even more memory to enter the black hole.

__To prove the point__, here's the case just a day after running Safari 5 for production use: at approximately 300 MB of memory usage, Safari was left running and the Mac was put to sleep. The active tab of the browser had <a href="https://www.fifa.com/" rel="nofollow external">the front page of FIFA</a> running with extensive jQuery, stuff that Apple actively promotes instead of the Flash Platform. After some 12 hours it was barely possible to wake the Mac up. Once it recovered, the reason for the hang revealed itself - Safari had eaten up all free memory:

<a target="_blank" title="Activity Monitor with Safari 5 leaking" href="/assets/uploads/2010/06/114331246.png"><img class="alignnone size-medium wp-image-953" title="Activity Monitor with Safari 5 leaking" src="{{ site.baseurl }}/assets/114331246-300x53.png" alt="Activity Monitor with Safari 5 leaking" width="300" height="53" /></a>

### Google cloud still broken

Last month a few reports entered WebKit Bugzilla claiming that Google Analytics (<a title="REGRESSION: Google Analytics broken, reports an error when trying to view a site" href="https://bugs.webkit.org/show_bug.cgi?id=39023">bug no. 39023</a>) and Google Wave (<a title="REGRESSION (r56295): Can't create a new wave on Google Wave" href="https://bugs.webkit.org/show_bug.cgi?id=39249">bug no. 39249</a>) were broken. Reviewers at WebKit soon acknowledged the issues were already addressed and patched. __None of these patches related to Google made it into Safari 5__.

With Safari 5 Apple went down the path of adding new features without patching what critically affects <abbr style="border-bottom-width: 1px; border-bottom-style: dashed; border-bottom-color: #cccccc; cursor: help;" title="User eXperience">UX</abbr>/workflow of many. Not a worthy approach by any software development standard.

<p id="update-google-cloud-fixed" class="attention"><strong>UPDATE 16.06.2010</strong>: fixes to the above-mentioned Google cloud bugs have landed in Mac OS 10.6.4 update and the latest WebKit nightly.</p>

Related resources:

- <a href="https://www.apple.com/safari/">Safari</a>
- <a title="WebKit2 is a new API layer for WebKit designed from the ground up to support a split process model" href="https://trac.webkit.org/wiki/WebKit2" rel="nofollow external">WebKit2</a> rendering engine

Related articles:

- <a href="/browsers/w3c-selectors-api-now-in-webkit">W3C Selectors API now in WebKit</a>
- <a title="WebKit adds getElementsByClassName" href="/browsers/webkit-adds-getelementsbyclassname">WebKit adds getElementsByClassName</a>
- <a href="/css/css-transitions">CSS transitions in WebKit</a>
- <a href="/css/css3-transforms-in-webkit">CSS3 transforms in WebKit</a>
- <a href="/browsers/safari-has-made-it-to-5">Safari has made it to 5%</a>
- <a href="/browsers/webkit-is-leading-the-run-for-css3">WebKit is leading the run for CSS3</a>
