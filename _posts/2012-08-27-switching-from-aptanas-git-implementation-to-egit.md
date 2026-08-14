---
layout: post
title: Switching from Aptana's Git implementation to eGit
date: 2012-08-27 00:04:30.000000000 +02:00
image: /assets/Aptana.png
type: post
categories:
- devtools
- eclipse
- aptana
tags:
- Aptana
- eGit
- Git
- GitHub
- How-to
- howto
author:
  name: Ain Tohvri
  twitter: tekkie
permalink: /developer-tools/eclipse/aptana/:title
excerpt: By default Aptana is configured to work with its own Git implementation meaning that whenever you add a Git repository and import it to the workspace, the default Aptana Git functionality is available in the project. The problem is, it doesn't always deliver, e.g. for GitHub, nor is it visually as complete and readable.
last_modified_at: 2026-08-14 20:13:00 +01:00
notice_date: 2026-08-14
notice_text: Aptana Studio has been effectively unmaintained since 2018. If you landed here because Aptana's Git support is misbehaving (Aptana CRC Git errors), an honest answer in 2026 would be to try [Claude Code](https://claude.ai/referral/_TgNbve-4Q){:rel="external nofollow"}.
---
<img class="teaser-image--left" title="Aptana" src="{{ site.baseurl }}/assets/Aptana.png" alt="Aptana" width="104" height="104">By default Aptana is configured to work with its own Git implementation meaning that whenever you add a Git repository and import it to the workspace, the default Aptana Git functionality is available in the project. The problem is, it doesn't always deliver, e.g. for GitHub, nor is it visually as complete and readable.

The alternative is the more comprehensive eGit plugin for Eclipse. To switch over to eGit, just tick off __Preferences > Team > Git > Automatically attach our git support to projects added that have git repositories__.

This feature landed in Aptana Studio 3 in 2011.
