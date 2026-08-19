---
layout: post
title: How to start an ordered list at a specific number
date: 2009-09-07 15:51:03.000000000 +02:00
categories:
- css
tags:
- CSS
- CSS21
- CSS3
- HTML
- w3c
author:
  name: Ain Tohvri
  twitter: tekkie
last_modified_at: 2021-04-13 23:26:00 +01:00
excerpt_separator: <!--more-->
permalink: /css/replacement-for-deprecated-ol-li-start-value-html-attributes
---
As by the HTML 4.01 specification, all [attribute definitions of lists](http://www.w3.org/TR/1999/REC-html401-19991224/struct/lists.html#h-10.2 "W3C: Unordered lists (UL), ordered lists (OL), and list items (LI)"){:rel="nofollow external"}, such as ordered lists and unordered lists, are deprecated, meaning that you can't make a list purely in HTML that would skip some numbers, e.g. 1, 2, 3, 5 skipping 4. Previously you could use `start` or `value` attribute to set a value for the list item. Now, as the attributes have became deprecated, any self-respecting coder would expect CSS to kick in with the alternative. Unfortunately, this is not the case.<!--more-->

Now, in more detail, the goal would be to get a list that looks like this:

<img class="alignnone size-full wp-image-526" title="Ordered list skipping values" src="{{ site.baseurl }}/assets/Ordered-list-skipping-values.png" alt="Ordered list skipping values" width="260" height="102" />

So let's turn to CSS 2.1 specs for help. Currently, what lists have, is this:

- list-style (shorthand)
- list-style-image
- list-style-position
- list-style-type

Pretty simple and no replacement for the start/value attributes. So a fully valid HTML 4 / CSS 2.1 approach leaves us with the possible workaround:

```html
<ol>
  <li>Winner</li>
  <li>Runner-up</li>
  <li>Chap who came 3rd</li>
  <li style="list-style-type: none;">Another chap who shares the 3rd place</li>
  <li>A bloke who came 5th</li>
</ol>
```

Which would render like this:

<ol>
<li>Winner</li>
<li>Runner-up</li>
<li>Chap who came 3rd</li>
<li style="list-style-type: none;">Another chap who shares the 3rd place</li>
<li>A bloke who came 5th</li>
</ol>

The above is fine, it works, but code-wise it's not quite right. There's still no 4 in the list, but it's not showing.

Unfortunately there's no straightforward replacement mechanism in CSS 3 either. Similarly, there's no solution for the legal lists.

Let's hope W3C will revise it at some point.

References:

- [CSS 2.1 full property table](http://www.w3.org/TR/CSS21/propidx.html){:rel="nofollow external"}
- [HTML 4.01 Index of Elements](http://www.w3.org/TR/1999/REC-html401-19991224/index/elements.html){:rel="nofollow external"}
- [CSS 3 lists module](http://www.w3.org/TR/css3-lists/){:rel="nofollow external"}

*[CSS]: Cascading Style Sheets
