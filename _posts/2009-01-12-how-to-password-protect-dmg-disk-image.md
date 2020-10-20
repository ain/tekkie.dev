---
layout: post
title: How to password protect DMG disk image
date: 2009-01-12 02:37:23.000000000 +01:00
type: post
categories:
- macos
tags:
- DiskImage
- DiskUtility
- DMG
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
last_modified_at: 2020-10-20 22:45:00 +01:00
permalink: /mac-os/:title
excerpt: Sometimes you need to share sensitive data securely. One possibility would be to use password protected packing like ZIP or RAR, but DMG may be slightly more convenient on Mac.
---
<img style="max-width:64px; max-height:64px;" src="{{ site.baseurl }}/assets/folder_locked.png" alt="Locked folder" title="Locked folder" width="128" height="128" class="teaser-image--left"> There are times you need to share some sensitive data with associates or mates that you don't want to share to anyone else or leave any possibilities for others to open and read/copy. One possibility would be to use password protected packing like ZIP or RAR, but DMG may be slightly more convenient on Mac.

As in the previous [DMG-related articles](#related-posts) Disk Utility comes in handy. You can find Disk Utility under `Applications > Utilities`.

On the toolbar of Disk Utility, there's icon for the New Image, clicking on which produces the dialogue box:

<a href="/assets/uploads/2009/01/picture-9.png"><img class="alignnone size-thumbnail wp-image-247" title="New Image dialogue in Disk Utility" src="{{ site.baseurl }}/assets/picture-9-150x125.png" alt="New Image dialogue in Disk Utility" width="150" height="125" /></a>

As we go through the entries, the specs for the new password protected DMG disk image are following:

1. __Save As__ sets the file name of the image file, e.g. `My private data.dmg`.
2. __Where__ sets the location of the image file.
3. __Volume name__ sets the name of the volume as it would appear in Finder later<img style="padding:10px 0px 10px 0px;" title="DMG volume name in Finder" src="{{ site.baseurl }}/assets/picture-10.png" alt="DMG volume name in Finder" width="175" height="107">
4. __Volume size__ sets the estimated size of the DMG file. If you are going to share stuff, you probably know what would the maximum size be. For the document files you'd be safe with 10 MB.
5. __Volume Format__ is the disk format for the image that you may safely leave untouched.
6. __Encryption__ refers to the file encryption strength as we set the password. 256-bit AES encryption would make a nice choice here.
7. __Partitions__ would be fine with Single partition.
8. __Image Format__ is best to remain at read/write in order to enable later changes, e.g. if you need to add files into the image in future.

With everything filled in, hitting the Create button will create the image file at your given location and prompt you for the password:

<a href="/assets/uploads/2009/01/picture-11.png"><img class="alignnone size-thumbnail wp-image-249" title="Password prompt of the Disk Utility" src="{{ site.baseurl }}/assets/picture-11-150x116.png" alt="Password prompt of the Disk Utility" width="150" height="116" /></a>

Make sure to __uncheck__ the __Remember password in my keychain__ checkbox if you are willing to be prompted for the password at all times, even on your own machine. Otherwise, if anyone opens the DMG file on the machine it was created on, they would not be prompted for the password because it would be pulled off the Keychain automatically.

As you have created the DMG file, you can open it and drag your sensitive files to it in Finder. Once you have completed, make sure to unmount the image from the eject button by the image name <img title="Eject volume button in Finder" src="{{ site.baseurl }}/assets/picture-12.png" alt="Eject volume button in Finder" width="23" height="20" /> .

### Related posts

- [Creating a convenient DMG image for your pictures](/mac-os/creating-a-convenient-dmg-image-for-your-pictures "Permanent Link to Creating a convenient DMG image for your pictures")
- [How to split DMG into segments](/mac-os/how-to-split-dmg-into-segments)
