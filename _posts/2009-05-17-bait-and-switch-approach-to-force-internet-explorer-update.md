---
layout: post
title: Bait-and-switch approach to force Internet Explorer update
date: 2009-05-17 16:47:21.000000000 +02:00
type: post
categories:
- browsers
tags:
- IE
- IE8
- Microsoft
- update
- upgrade
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
last_modified_at: 2021-04-13 23:26:00 +01:00
excerpt_separator: <!--more-->
---
Somewhat an interesting discussion took off on Twitter between me (@tekkie) and Jason Young of award-winning @virion_ca about the _IE6 Update technique_. While the goal of such a technique looks decent, it's mainly of benefit to developers.<!--more-->

What IE6 Update basically does, is to fake the Microsoft-like notification bar on top of the body of the page:

<a title="IE6 Update in effect" href="/assets/uploads/2009/05/ie6-update-notification.png"><img class="alignnone size-full wp-image-440" title="IE6 Update notification" src="{{ site.baseurl }}/assets/ie6-update-notification.png" alt="IE6 Update notification" width="274" height="187" /></a>

Firstly it may seem like a nice way to convert people from Internet Explorer 6 to whatever there is that is recent from Microsoft, but as Jason quite rightly put it, how transparent is the whole thing? So we end up asking:

## Is IE6 Update safe?

It is. By clicking on the bar, user will be taken to the home page of Internet Explorer. That's all it does. Its JavaScript code is transparent and human-readable, it's GPL-licenced software as originally coded by Jakob Westhoff for Activebar2.

## Is it right to force people to new platforms over the dev effort?

IE6 means no support for 24-bit PNG and for many CSS directives that come in handy on other platforms. It's a terrible browser and you'd spend hours on workarounds for IE6 that you could otherwise spend on providing better content to the well-equipped audiences. And it's insecure, open to flaws, worms and all sorts of baddies out there.

Even so, user retains the right to deny the bar. It's not forced directly.

## Is it ethical to throw a bait to unaware users to convert them?

Probably not. Users will have no idea it's a fake bar. A good fake though, maybe even something that Microsoft should trigger themselves? Actually they have, in a way, because [IE8 is available through Automatic Update](/browsers/microsoft-to-push-ie8-into-automatic-update).

All in all developers make the web and interact with their users, recommending stuff, leading them to directions. It's really up to every developer to consider what's best for their audience, but progress through technology is still inevitable. Vorsprung durch Technik.

Related articles:

- [Microsoft to push IE8 into Automatic Update](/browsers/microsoft-to-push-ie8-into-automatic-update)
- [Internet Explorer dumping CSS hacks to comply with standards](/browsers/internet-explorer-dumping-css-hacks-to-comply-with-standards)
- [First browser to pass Acid3 web standards test](/browsers/first-browser-to-pass-acid3-web-standards-test)
- [Internet Explorer 8 to pass Acid2](/browsers/internet-explorer-8-to-pass-acid2)
- [Testing standards compliance of Microsoft Outlook 2007](/open-standards/testing-standards-compliance-of-microsoft-outlook-2007)
- [WebKit is leading the run for CSS3](/browsers/webkit-is-leading-the-run-for-css3)
