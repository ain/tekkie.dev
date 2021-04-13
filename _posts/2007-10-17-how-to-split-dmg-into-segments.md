---
layout: post
title: How to split DMG into segments
date: 2007-10-17 11:10:55.000000000 +02:00
type: post
categories:
- macos
tags:
- DMG
- hdiutil
- image
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
permalink: /mac-os/:title
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
image: /assets/disk-utility-icon-150x140.png
---
Uploading a disk image may in some cases be quite troublesome, e.g. uploading to .Mac simply because you can't resume the upload if it fails. A way around would be to upload in segments.<!--more-->

## What is hdiutil?

There are number of tools that can split your image (DMG, CDR, etc.) into pieces. Some of them work, some don't but the most bulletproof way is to do it in Terminal, i.e. `Applications > Utilities > Terminal`.

There's a tool on Mac that does pretty much everything concerning the disks called `hdiutil`. It can attach, detach (eject), verify, mount, unmount and segment a volume to name a few. To use this tool you have just got to type in a command. For a start you may want to get a view on `hdiutil`'s features by typing `hdiutil help`. Hit Enter to execute a command.

## How to segment the disk image?

To segment an image (e.g. DMG) you could use a command:

    $ hdiutil segment -o mydvd -segmentSize 100M /Users/[your Mac username]/Desktop/dvdimage.dmg

The command would create segments (mydvd.002.dmgpart, mydvd.003.dmgpart, etc.) in your Home folder of an image named `dvdimage.dmg` on your desktop.

`-o mydvd` stands for the prefix that is used to name the segments. Segment size would be 100MB as defined by the `segmentSize` parameter. If you'd want the segment size to be 500KB you could just use 500k instead of 100M. Alternatively you could also split your image by the number of segments. In that case you should replace `-segmentSize 100M` with `-segmentCount 5`. This would split your image into 5 segments.

Good thing about it is that you don't even have to rejoin these segments later. You can just click the first segment (in above example it would be `mydvd.dmg`) so Mac will verify the image and attach the DMG as it usually does. You can also use Disk Utility (`Applications > Utilities > Disk Utility`) to burn the image by using its first segment.

### Related posts

- [Creating a convenient DMG image for your pictures](/mac-os/creating-a-convenient-dmg-image-for-your-pictures)
- [How to password protect DMG disk image](/mac-os/how-to-password-protect-dmg-disk-image)
