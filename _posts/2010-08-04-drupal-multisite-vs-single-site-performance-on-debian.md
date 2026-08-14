---
layout: post
title: Drupal multisite vs single site performance on Debian
date: 2010-08-04 19:47:21.000000000 +02:00
categories:
- drupal
tags:
- benchmark
- Drupal
- performance
- webdev
author:
  name: Ain Tohvri
  twitter: tekkie
excerpt_separator: <!--more-->
last_modified_at: 2026-08-14 23:28:00 +01:00
notice_date: 2026-08-14
notice_text: Debian 5 "Lenny" support ended in 2012 and Drupal 6 was EOL-ed in 2016.
---
The following benchmark proves that a traditional single site Drupal setup isn't any faster than its multisite counterpart.<!--more-->
Tested setups:

1. __Single site__ installation of __Drupal 6.17__ from Drupal.org
2. __Multisite__ installation of __Drupal 6.6__ from Debian Lenny. Although there's a version difference and Debian's release lags behind by a number of versions, it has the latest security patches applied.</li>

Benchmark data by ApacheBench as per commands:

1. `ab -n 100 -c 10 http://drupal_single_site_address.tld`
2. `ab -n 100 -c 10 http://drupal_multisite_address.tld`

## Clean setup without any custom modules/themes

### Multisite

```
Concurrency Level:      10
**Time taken for tests:   18.719 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      630476 bytes
HTML transferred:       567868 bytes
<strong>Requests per second:    5.34 [#/sec] (mean)</strong>
Time per request:       1871.879 [ms] (mean)
Time per request:       187.188 [ms] (mean, across all concurrent requests)
Transfer rate:          32.89 [Kbytes/sec] received
```

### Single site

```
Concurrency Level:      10
**Time taken for tests:   18.819 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      613100 bytes
HTML transferred:       552900 bytes
Requests per second:    5.31 [#/sec] (mean)
Time per request:       1881.890 [ms] (mean)
Time per request:       188.189 [ms] (mean, across all concurrent requests)
Transfer rate:          31.82 [Kbytes/sec] received
```

## Setup with Views, IMCE and jQuery Update enabled

### Multisite

```
Concurrency Level:      10
**Time taken for tests:   18.185 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      625200 bytes
HTML transferred:       565000 bytes
**Requests per second:    5.50 [#/sec] (mean)**
Time per request:       1818.453 [ms] (mean)
Time per request:       181.845 [ms] (mean, across all concurrent requests)
Transfer rate:          33.58 [Kbytes/sec] received
```

### Single site

```
Concurrency Level:      10
**Time taken for tests:   19.715 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      627644 bytes
HTML transferred:       566842 bytes
**Requests per second:    5.07 [#/sec] (mean)**
Time per request:       1971.458 [ms] (mean)
Time per request:       197.146 [ms] (mean, across all concurrent requests)
Transfer rate:          31.09 [Kbytes/sec] received
```

## Setup with modules and a custom theme

### Multisite

```
Concurrency Level:      10
**Time taken for tests:   21.767 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      891500 bytes
HTML transferred:       833500 bytes
**Requests per second:    4.59 [#/sec] (mean)**
Time per request:       2176.653 [ms] (mean)
Time per request:       217.665 [ms] (mean, across all concurrent requests)
Transfer rate:          40.00 [Kbytes/sec] received
```

### Single site

```
Concurrency Level:      10
**Time taken for tests:   22.031 seconds**
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      874400 bytes
HTML transferred:       816400 bytes
**Requests per second:    4.54 [#/sec] (mean)**
Time per request:       2203.097 [ms] (mean)
Time per request:       220.310 [ms] (mean, across all concurrent requests)
Transfer rate:          38.76 [Kbytes/sec] received
```

## Conclusion

Given the above data, it's pretty safe to say that both installations run equally well and the multisite setup isn't any worse at all. It could also be said that a native Debian setup of Drupal (`apt-get install drupal6`) is optimised enough to perform slightly better.

### Other Drupal-related articles and resources

- [Getting ImageAPI and ImageCache cope with Drupal 6](/drupal/getting-imageapi-and-imagecache-cope-with-drupal-6)
- [How to run a site with gzip compression and why it matters](/research/how-to-run-a-site-with-gzip-compression-and-why-it-matters)
- [How to increase the performance of your Drupal site](http://drupal.org/node/2601">Server tuning considerations){:rel="nofollow external"}
