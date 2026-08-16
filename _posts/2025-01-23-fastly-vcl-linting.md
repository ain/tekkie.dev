---
layout: post
title: Linting Fastly VCL with Falco GitHub Action
image: /assets/falco.png
categories:
  - devops
tags:
  - fastly
  - varnish
  - developer
  - falco
  - edge computing
  - cdn
author:
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2025-01-23 21:26:00 +01:00
---
When pushing VCL files to Fastly, a missing semicolon or comma can lead to a failure. The configuration will fail to activate, you have to check why and what errored. Typos happen. It's linter's job to catch them and let us fail fast.
<!--more-->

## Fastly VCL

Fastly is one of the world's leading CDNs and Edge Computing platforms that helps to accelerate a fairly big chunk of today's internet. From eCommerce to streaming solutions, if they're performing well, they're likely to have been built around Fastly[^1].

What makes Fastly great is its flexibility powered by the possibility to use custom Varnish configuration files (VCLs) to route traffic, alter and handle requests, or even compute at the edge. All close to the end user.

## Falco VCL parser

[Falco](https://github.com/ysugimoto/falco){:rel="nofollow external"} is an Open Source VCL parser that is built against Fastly's implementation of Varnish.

It has a comprehensive set of features one of which is dedicated to linting Fastly VCL.

## Linting VCL with Falco GitHub Action

In order to automate the linting of Fastly VCL, I've built the [Falco GitHub Action](https://github.com/ain/falco-github-action){:rel="nofollow external"}.

Everyone who has worked with CI/CD pipelines on GitHub before, the configuration of the Falco GitHub Action is trivial and self-explanatory. You define the includes used by the VCL file in `options` and the VCL file to lint in `target`:

```vcl
- name: Lint VCL
  uses: ain/falco-github-action@v1
  with:
    subcommand: lint
    options: "-v -I test/vcl/includes"
    target: test/vcl/valid_with_include.vcl
```

ATTN: you can also lint ACL files! Linting has a lot of value against a missing comma or invalid CIDR notation in those big dictionaries with thousands of IP ranges.

[^1]:[Fastly Customer Stories](https://www.fastly.com/customers){:rel="nofollow external"}
*[CDNs]: Content Delivery Networks
*[CI/CD]: Continuous Integration/Continous Deployment
*[ACL]: Access Control List
*[VCL]: Varnish Configuration Language
*[CIDR]: Classless Inter-Domain Routing
