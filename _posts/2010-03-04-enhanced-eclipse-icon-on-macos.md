---
layout: post
title: Enhanced Eclipse icon on macOS
date: 2010-03-04 19:26:59.000000000 +01:00
type: post
categories:
- macos
tags:
- Eclipse
- icon
- macOS
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
permalink: /macos/:title
excerpt_separator: <!--more-->
redirect_from:
- /tag/ui
- /mac-os/enhance-the-ugly-eclipse-icon-on-your-dock
last_modified_at: 2021-04-14 00:38:00 +01:00
image: /assets/Eclipse-cobranail-Dock-icon.png
---
As many Open Source Software packages lack design appeal, it's sometimes cool to change how one or the other application looks on macOS Dock.<!--more-->

## macOS application bundle

All macOS applications are organised into a conventional folder structure, a bundle. That makes an icon easy to access and change.

## Eclipse icon

Eclipse, a popular programming IDE, has used a rather conservative design throughout the years. To improve and update the Eclipse icon, here's a way to swap ![old Eclipse icon](/assets/Eclipse-original-icon.png) for ![new Eclipse icon](/assets/Eclipse-cobranail-icon.png):

1. Choose a `*.icns` icon you'd like to use, e.g. [click here to download the above icon](/assets/uploads/2010/03/Eclipse-icons-pack.zip) (582 KB)
2. Locate your Eclipse installation folder, e.g. `Applications/eclipse`
3. Right-click Eclipse application in that folder
4. Choose _Show Package Contents_
5. In the opened Finder window navigate to _Contents > Resources_
6. Replace the default `Eclipse.icns` file with the one in the icons pack you downloaded in Step 1
7. That's it! Enjoy the new Eclipse icon!

## New Eclipse icon on Dock

On Snow Leopard the Dock should now look like this:

![Eclipse cobranail Dock icon](/assets/Eclipse-cobranail-Dock-icon.png)
