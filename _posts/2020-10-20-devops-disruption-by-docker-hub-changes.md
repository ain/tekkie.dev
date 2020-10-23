---
layout: post
title: Avoid DevOps disruption by Docker Hub changes
image: /assets/docker-logo.png
og_image: /assets/container-ship--1200x630.jpg
og_image_alt: Containers
categories:
  - devops
  - docker
tags:
  - docker
  - devops
hashtags:
  - docker
  - devops
  - circleci
  - github
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2020-10-23 16:06:00 +01:00
---
Docker will start rate-limiting image pulls from Docker Hub on November 1st, potentially halting a fair number of CI/CD pipelines.<!--more-->

## Docker dealing with network egress

> Roughly 30% of all downloads on Docker Hub come from only 1% of anonymous users

Not only has it a price tag, but it surely affects the overall performance of the world's largest container registry[^1] as well.

## New subscription plans

To control the unfair share of network egress, the structure of the subscription plans has been announced as follows:

- Free plan – anonymous users: 100 pulls per 6 hours
- Free plan – authenticated users: 200 pulls per 6 hours
- Pro plan – unlimited
- Team plan – unlimited

## Docker Hub pull authentication

In most development teams 100 pulls per 6 hours is very likely to be insufficient, especially in teams that rely on Continuous Deployment.

Nevertheless, many teams would also find 200 pulls in 6 hours sufficient, meaning that authenticating the pulls would do.

### Docker auth on CircleCI

Job setup on CircleCI[^2] is straightforward:

```yaml
jobs:
  build:
    docker:
      - image: acme-private/private-image:321
        auth:
          username: my-docker-hub-user
          password: $DOCKER_HUB_PASSWORD
```

#### Pull rate limit for CircleCI images

Many developers use pre-built CircleCI Docker images[^3] (e.g. `circleci/ruby`) to leverage CircleCI's caching. Pulls are therefore much faster.

It's relevant to keep in mind that __all CircleCI images count towards Docker Hub's pull rate limit__ as well.

### Docker auth on GitHub Actions

Workflow step configuration on GitHub Actions leverages `docker/login-action`:

```yaml
steps:
  - name: Login to Docker Hub
    uses: docker/login-action@v1
    with:
      username: {% raw %}${{ secrets.DOCKER_HUB_USERNAME }}{% endraw %}
      password: {% raw %}${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}{% endraw %}
```

[^1]: [Scaling Docker to Serve Millions More Developers: Network Egress](https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/)
[^2]: [Using Docker Authenticated Pulls](https://circleci.com/docs/2.0/private-images/)
[^3]: [Pre-Built CircleCI Docker Images](https://circleci.com/docs/2.0/circleci-images/)
