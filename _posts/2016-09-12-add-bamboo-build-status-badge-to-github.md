---
layout: post
title: Add Bamboo build status badge to Github
image: Octocat.png
categories:
- devops
- howto
tags:
- continuosintegration
- continuousdelivery
- bamboo
- github
- howto
author:
  login: ain
  name: Ain Tohvri
excerpt_separator: <!--more-->
---
Finally there's a Bamboo plugin that resolves one of the integration problems between Bamboo and Github.<!--more-->

[Build Status Tracker for Bamboo](https://marketplace.atlassian.com/plugins/com.wittified.bamboo.embedded-build-status/server/overview) plugin not only provides a build success or failure badge, but also deployment status(es) for the environment(s), e.g. staging:

![Application build and deployment badges](/assets/backend-application-build-and-deployment-statuses-medium.png){: class='post-image post-image--rounded'}

The only configuration needed on Bamboo, under _Status Icons_ tab of Plan configuration, is _Permissions_ checkbox:

![Bamboo build status tracker configuration](/assets/bamboo-build-status-tracker-configuration-medium.png){: class='post-image post-image--rounded'}

Other than that, it's just copying the Markdown code into README to get the badges going.

Big ups to the team at Wittified for the plugin!
