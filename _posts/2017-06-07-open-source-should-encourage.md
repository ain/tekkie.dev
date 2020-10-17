---
layout: post
title: Open Source should encourage contributors
image: gplv3.png
categories:
  - opensource
tags:
  - opensource
  - community
  - software
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2020-10-17 00:20:00 +01:00
---
As a maintainer, __you can not afford to lose contributors__, esp. if your day job is not <abbr title="Free and Open Source Software">FOSS</abbr> and you're not Linus Torvalds.<!--more-->

There's a serious problem with documentation in Open Source. 60% of contributors rarely or never contribute documentation<sup>[1](#github-open-source-survey)</sup>. It kills adoption. Negative interactions over dismissive responses, conflicts, unexplained rejections of Pull Requests etc. amount to around 50% of experiences. It kills contributions.

Every project has and will receive flawed Pull Requests. Things that can not be merged over its quality, missing specs or bloat. All fair reasons. What matters is how that Code Review reveals these shortcomings. __Interaction quality matters__. Instead of closing the Pull Request right off, you can change its course. Explain the shortcomings politely, propose, and, in case of something being overlooked, lead a contributor to work on documentation instead. Explaining the situation may take maintainer 5 minutes more than the actual implementation would, but it will engage the contributor. People will see that Pull Request merged and continue on a positive note.

To illustrate the scenario, [smartbanner.js](https://github.com/ain/smartbanner.js) received [#51](https://github.com/ain/smartbanner.js/pull/51) recently where the contributor was not aware that his implementation duplicates already existing functionality. The easiest would have been to close the <abbr title="Pull Request">PR</abbr> with one-liner tip that would have explained it. Instead, I requested changes in Code Review, explaining the situation and referring to the need of documentation update. That PR was merged today with a valuable documentation update.

<small><a name="github-open-source-survey">1</a>: [Open Source Survey 2017](http://opensourcesurvey.org/2017)</small>
