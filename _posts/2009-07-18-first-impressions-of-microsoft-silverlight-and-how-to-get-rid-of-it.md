---
layout: post
title: "Microsoft Silverlight: what it was, whether you need it, and how to remove it"
date: 2009-07-18 19:07:44.000000000 +02:00
categories:
- ria
tags:
- Microsoft
- plugin
- Silverlight
author:
  name: Ain Tohvri
  twitter: tekkie
permalink: /rich-internet-applications/first-impressions-of-microsoft-silverlight-and-how-to-get-rid-of-it
excerpt_separator: <!--more-->
last_modified_at: 2026-08-17 01:33:00 +01:00
notice_text: "See [Silverlight removal steps for macOS](#how-to-uninstall-silverlight-on-mac)."
notice_date: 2026-08-17
---
Those who remember Adobe Flash Platform would know that it allowed running complex applications inside the browser, across platforms. Silverlight was Microsoft's answer for a competitive RIA platform.<!--more-->

## What was Microsoft Silverlight?

Silverlight was a browser plugin similar to Flash Plugin. You could get the package from their website that would then install the browser plugin. Some would argue that the plugin never really matured as it only worked on a number of browsers and failed on Safari:

<a title="Why should you install anything from a site that has flaws?" href="/assets/uploads/2009/07/Why-should-you-install-anything-from-a-site-that-has-flaws.png"><img title="Why should you install anything from a site that has flaws?" src="{{ site.baseurl }}/assets/Why-should-you-install-anything-from-a-site-that-has-flaws-150x101.png" alt="Why should you install anything from a site that has flaws?" width="150" height="101" /></a>

## What did Microsoft Silverlight do?

Similarly to Flash, it allowed rich content through the plugin. A web page embedded the Silverlight component that used the underlying Silverlight plugin to render the content and its interaction.

## Is Microsoft Silverlight necessary?

The websites that leveraged Silverlight content were not many and when tumbling upon a site that had such Silverlight content, you had to be prepared to get a pop-up like this one:

![Silverlight has expired!]({{ site.baseurl }}/assets/Silverlight-has-expired.png)

Compared to the upgrade policies of Flash Platform, this was a familiar Microsoft approach: configuration over convention with confirmation messages, checkbox toggles and so on.

## Is Silverlight still used?

No. Silverlight was discontinued in late 2021. Chrome removed its support in 2015, Firefox in 2017.

## How to uninstall Silverlight on Mac?

Silverlight installed from a PKG file without any references or documentation on how to uninstall it. Not only did the documentation lack coverage for uninstallaton, the little documentation that was there also didn't work on Safari.

In my case, and after some digging, the following steps worked to uninstall Silverlight:

1. Open *Terminal* from *Applications > Utilities*
2. Copy and paste the following lines to *Terminal*, one by one (and hit Enter in between):

   ```bash
    sudo rm -rf "/Library/Internet Plug-Ins/Silverlight.plugin"
    rm -rf ~/"Library/Internet Plug-Ins/Silverlight.plugin"
    sudo rm -rf "/Library/Application Support/Microsoft/Silverlight"
    rm -rf ~/"Library/Application Support/Microsoft/Silverlight"
   ```

3. Restart the browser(s)

*[RIA]: Rich Internet Application
