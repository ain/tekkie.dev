---
layout: post
title: Getting indexed without waiting for the crawler
categories:
  - rust
tags:
  - indexnow
  - seo
  - sitemap
  - cli
  - google
  - bing
  - developer
author:
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
---
Publishing is only half of the job. A post that nobody can find might as well not exist, and for a static site the gap between deploying a page and a search engine noticing it is entirely out of your hands. Both Google and Bing offer APIs to close that gap by pushing URLs at them directly — and both are fiddly enough that hardly anyone bothers. [indeks](https://crates.io/crates/indeks){:rel="nofollow external"} is a small Rust CLI that does the bothering for you.
<!--more-->

## Waiting versus telling

The conventional route is passive. You publish a sitemap, you reference it in `robots.txt`, you register it in Search Console, and then you wait for a crawler to come round. On a site that changes a few times a year that is perfectly adequate. On one that changes weekly, the lag is irritating: you have fixed a typo in a heading, or corrected something factually wrong, and the version the world sees is the old one for days.

Crawl budget is the underlying constraint. Search engines allocate a finite amount of attention per host and spend it according to how often a site has historically changed. A small site that publishes rarely gets visited rarely, which is precisely the site whose occasional new page most needs announcing.

The active route is to tell the engine yourself. Two protocols cover most of the ground:

- **IndexNow** — an open protocol, originally from Microsoft, now with several participants sharing submissions among them. You POST a list of URLs with a key.
- **Google Indexing API** — Google's own endpoint, authenticated with a service account tied to a verified property.

## What indeks does

`indeks` is a single command that takes URLs, sitemaps, or both, and submits them to one of those two engines. It is written in Rust, needs 1.88 or newer, and builds the usual way:

```bash
cargo build --release
```

The binary lands in `target/release/indeks`. The shape of an invocation is:

```text
indeks <google|bing> [--url <URL>]... [--sitemap <SITEMAP>]... --credentials <TOKEN_OR_PATH> [--dry-run] [--verbose]
```

The first positional argument picks the engine — `google` for the Indexing API, `bing` for IndexNow — and one is required. Everything else is a flag.

## Feeding it URLs

`--url` takes a single absolute `http` or `https` URL. `--sitemap` takes a sitemap, which may be a remote URL, a local file path, or a `file://` URL — useful when you want to submit a sitemap your build just generated but has not deployed yet.

Both are repeatable and can be mixed freely, so long as at least one is present:

```bash
indeks bing --url https://example.com/a \
            --sitemap tests/fixtures/sitemap.xml \
            --sitemap https://example.com/sitemap.xml \
            --credentials abcdef0123456789
```

A URL that turns up more than once — passed twice, or passed directly and also present in a sitemap — is submitted once. That matters more than it sounds, because Google's daily quota counts requests, not distinct URLs.

Sitemap parsing is deliberately strict. A sitemap must be valid XML in the [sitemaps.org](https://www.sitemaps.org/protocol.html){:rel="nofollow external"} format with at least one `urlset > url > loc`, and every `loc` an absolute `http` or `https` URL.

## Failing before the network

The feature I find myself using most is `--dry-run`, which validates everything and contacts nothing:

```text
$ indeks bing --url https://example.com/a \
              --sitemap tests/fixtures/sitemap.xml \
              --credentials abcdef0123456789 \
              --dry-run
Dry run: no external system will be contacted.
Engine: Bing IndexNow
Credentials: token

URLs (1):
  https://example.com/a

Sitemaps (1):
  tests/fixtures/sitemap.xml — local file, 3 URLs
    https://example.com/
    https://example.com/about
    https://example.com/contact

Input is valid. Remove --dry-run to submit.
```

Local sitemaps are read and fully parsed during a dry run; remote ones are not fetched, so only the URL itself is checked. You see the expansion before committing to it.

Validation reports every problem at once rather than one per run, which is the difference between one round trip and four:

```text
$ indeks google --url /relative --sitemap ftp://x.example --credentials ./nope.json
error: --url /relative: not an absolute URL
error: --sitemap ftp://x.example: scheme `ftp` is not supported; use http, https or a file path
error: --credentials ./nope.json: no such file
```

`--credentials` is required even with `--dry-run`, which looks pedantic until you consider that a pre-flight check passing on input that a real run would reject is worth nothing. A credentials file is read and its JSON parsed during a dry run, since neither step touches the network.

## Credentials, per engine

For **Google**, the credential is either a service-account JSON file or a bare OAuth access token. The service account must be an owner of the property in Search Console and the Indexing API must be enabled for its project — a 403 tells you which.

For **Bing**, the credential is an IndexNow key: 8–128 characters of `a-z`, `A-Z`, `0-9` or `-`, passed directly or held in a JSON file as a `key` field:

```json
{ "key": "abcdef0123456789" }
```

IndexNow also requires that key to be readable at `https://<host>/<key>.txt` for every host you submit. `indeks` cannot do that for you, but a 403 names the exact URL the file has to appear at — the single most common way to get this wrong. URLs are grouped by host, since one request may only carry one, and each host's batch is sent separately, so one host failing does not stop the others.

## Quotas, and what a 429 actually means

This is where the tool earns its keep. Google applies two limits per Cloud project:

| Quota | Default |
|:---|:---|
| Publish requests per day | 200, resetting at midnight Pacific |
| Requests per minute, all endpoints | 380 |

A 429 names which one ran out, and `indeks` reads that instead of guessing. If it is the daily limit, waiting cannot help before midnight Pacific, so the run stops immediately and the remaining URLs are reported as not attempted. If it is the per-minute limit — or a 429 naming no metric at all — the limit clears on its own, so the request is retried with a doubling backoff of 10s, 20s and 40s, honouring `Retry-After` when the server sends one. Only if it still fails does the run stop.

Treating those two cases identically is the obvious implementation and the wrong one: it either burns forty seconds waiting for a limit that resets tomorrow, or gives up on one that would have cleared by itself.

## Output you can paste into a bug report

By default, success logs a response code and a URL, and failure logs the code and the error:

```sh
$ indeks bing --url https://example.com/a --credentials abcdef0123456789
[403] https://example.com/a: the key was not accepted; it must be readable at https://example.com/abcdef0123456789.txt
1 of 1 URLs were not accepted

Please consider using `--verbose` to find out more
```

`--verbose` logs connection setup, TLS negotiation, headers, bodies and timings.

Verbose output is designed to be pasteable as-is. The `Authorization` header is always redacted. So if you do find a bug, feel free to [report a new issue](https://github.com/ain/indeks/issues/new)!

Exit codes are conventional:

- `0` when everything was submitted or a dry run passed
- `1` when input was fine but submission failed
- `2` for invalid arguments or an unreadable sitemap

Enough to branch on in a deploy script.

## Getting it

`indeks` is on [crates.io](https://crates.io/crates/indeks){:rel="nofollow external"} and the source is on [GitHub](https://github.com/ain/indeks){:rel="nofollow external"}, released under GPL-3.0-only. It is roughly 2,400 lines of Rust on the 2024 edition, and the test suite reaches nothing outside the machine it runs on.

*[CLI]: Command Line Interface
*[API]: Application Programming Interface
*[APIs]: Application Programming Interfaces
*[JSON]: JavaScript Object Notation
*[TLS]: Transport Layer Security
*[XML]: Extensible Markup Language
*[URL]: Uniform Resource Locator
*[POST]: HTTP POST request method
