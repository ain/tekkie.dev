---
layout: post
title: Gmail isn't there for business users, yet
date: 2009-02-08 03:55:42.000000000 +01:00
type: post
categories:
- web2
tags:
- AppleMail
- GMail
- Google
author:
  display_name: Ain Tohvri
  first_name: Ain
  last_name: Tohvri
  twitter: tekkie
permalink: /web-20/:title
excerpt: Gmail, world's leading free webmail by Google is the best product of the kind on the market today, but when it comes to corporate requirements, it fails in some aspects.
last_modified_at: 2020-10-18 14:12:00 +01:00
---
<img class="teaser-image--left" title="Gmail" src="{{ site.baseurl }}/assets/gmail-icon50.gif" alt="Gmail" width="129" height="94" />Gmail, world's leading free webmail by Google is undisputedly the best product of the kind on the market today, yet again, once it comes to corporate requirements, it fails in a number of aspects.

Even though Google Apps provides a fine way to get your company's addresses hosted freely on a reliable Google IMAP server, Web 2  webmail suite may not satisfy you entirely in terms of replacing the desktop application.<!--more-->

Here's the list of things that you'll be missing in Gmail:

## Multiple signatures

In Gmail you can set your <strong>default signature for all outgoing emails</strong>. There's no way to switch between the different signatures, e.g. for the multilingual correspondence or different addresses/roles.

There's a suggestion to use [Canned responses from Google Labs](http://gmailblog.blogspot.com/2008/10/new-in-labs-canned-responses.html) requiring you to load predefined Canned response with a desired signature for each and every email. Somewhat inconvenient.

## Digital signing and encryption

If you need to digitally sign or encrypt your email, you are in trouble. Not only that you can't digitally sign your email, Gmail is not capable of verifying email signed and sent to you by others. Signature file will appear as a regular attachment.

Because there's no native support for s/mime or pgp keys in Gmail, the only option is to use Firefox with [Greasemonkey Add-on](https://addons.mozilla.org/en-US/firefox/addon/748). It lets you sign the email but you are stuck with Firefox and will have to pray for the Greasemonkey developers to keep up with Mozilla's updates.

Google's own browser, [Google Chrome](https://addons.mozilla.org/en-US/firefox/addon/748), does not support Firefox Add-ons.

## New email alerts

For this Google has Gmail Notifier browser plugin, but here's the question: why do you need a desktop application for webmail if you can have a whole email client running instead?

Performance-wise Notifier has a huge delay. It checks for new mail every 10 minutes by default and it can't be adjusted not at least in the latest version for the Mac. Unacceptable, especially if compared to Apple Mail which is instant on IMAP. Also, Notifier consumes as much memory as does [Transmit](https://www.panic.com/transmit), leading FTP client for Mac.

__UPDATE__: Gmail notifications have been incorporated in the web app, see [Change email notifications](https://support.google.com/mail/answer/1075549?hl=en&visit_id=637386206863484989-584562971&rd=1).
