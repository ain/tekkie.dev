---
layout: post
title: Jekyll HTTP response handling with Cloudflare Workers
image: /assets/cloudflare-fast-and-safe-icon.png
og_image: /assets/cloudflare--1200x630.png
og_image_alt: Cloudflare
categories:
  - devops
tags:
  - jekyll
  - devops
  - cloudflare workers
hashtags:
  - jekyll
  - devops
  - webdev
author:
  login: ain
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2021-04-13 23:26:00 +01:00
---
Jekyll is great at speed, which is why it's used for GitHub Pages, but it's not as flexible to maintain.<!--more-->

## Hacked Wordpress

Some years ago this very blog got hacked. It was on Wordpress. Code was injected to all PHP and HTML headers, hundreds of spam posts were created. These posts made it to sitemap and got indexed on Google. The blog was dead. Epic failure.

## Introducing DevOps

After some try 'n cry development the issue got fixed by a migration from Wordpress to Jekyll. The blog entered DevOps era with automatic publishing on GitHub Pages.

The remaining issue was the indexed spam content on Google.

## Configuring Jekyll

GitHub Pages ships with a sensible set of Jekyll plugins[^1]. One such example is `jekyll-redirect-from`[^2], that can be used to resolve Google's 404 Crawl Errors by redirecting content.

Even so, forwarding 404s raised by missing spam content does not make sense. `410 Gone` would be a more appropriate response, but there's no obvious way in Jekyll.

## Enter Cloudflare

Cloudflare is great. Its free option can be used with GitHub Pages for TLS termination, caching, page rules. The latter can do redirects, but not `410`.

### Cloudflare Workers

Cloudflare Workers[^3] is a relatively new feature that allows running code at the edge. It's running V8 for JavaScript instead of the standard VCL. Anyone with some basic JavaScript knowledge can create a custom response condition.

### JavaScript for 410 response

Since all the spam URLs had a common pattern, e.g. `/eoti4/<dashed keywords>` or `/nhuenh/<dashed keywords>`, it took just 17 lines of JavaScript on Cloudflare Workers Editor to respond with 410 on all the spammy endpoints:

```javascript
addEventListener('fetch', event => {
  event.respondWith(fetchAndLog(event.request));
})

async function fetchAndLog(request) {
  if (/\/(eoti4|nhuenh|nhueto|nhuegp|wish9y|nhsbsb|nhuekz)/g.test(request.url)) {
    return new Response("Page is gone.", {
      status: 410,
      statusText: "Gone"
    });
  }
  return fetch(request);
}
```

[^1]: [Default Jekyll plugins on GitHub Pages](https://help.github.com/articles/configuring-jekyll-plugins/#default-plugins)
[^2]: [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) - Seamlessly specify multiple redirections URLs for your pages and posts
[^3]: [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/) - Run code at the edge, deliver powerful web extensibility

*[TLS]: Transport Layer Security, a cryptographic protocol for secure Internet communication
*[VCL]: Varnish Configuration Language, a domain-specific language used for configuring the Varnish
