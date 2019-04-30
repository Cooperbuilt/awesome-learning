---
title: Session 1 Types and Equality in JavaScript
template: "lesson"
draft: false
slug: "/courses/Data-Types/Types-And-Equality"
category: "JS Fundamentals"
tags:
  - "Types"
  - "Coercion"
  - "Equality"
  - "Comparisons"
  - "Debugging"
  - "Refactoring"
description: "
By the end of this session you will learn about all of the available 'Types' in
the language and the differences between == (loose equality) and === (strict equality) operators. 
We will also learn the important differences between
_Primitive_ and _Object_ types and how type coercion works."
exerciseLinks: https://codesandbox.io/s/y3y2jnkl6j?fontsize=14&module=%2Fsrc%2Fexercises%2F1-types.test.js&previewwindow=tests 
timeToCompletion: "1-3 hours"
videoLink: "youtube.com"
readingLinks: 
  - link: "www.google.com"
    description: "this is google.com"
  - link: "www.amazon.com"
    description: "this is amazon man"
---



## Pre-Session Learning Materials (required)
Before your session begins, watch these videos to get an idea of what you will be working on.

<iframe width="560" height="315" src="https://www.youtube.com/embed/808eYu9B9Yw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kVOmc7NK1M0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Pre-read Materials (bonus)
We've curated these resources to give you greater depth on these subjects. **Don't feel like you have to 
read them all.** 

Taking the time to go through all of these resources will definitely put you on the 
road to expert-level knowledge in this subject matter.

#### JavaScript Data Types MDN
- (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

    The _dry_ but to the point MDN documentation is always our go-to reading
    material! See the links below if you prefer a something with more "flair".
    
#### Equality comparisons and sameness, MDN
- (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

    Excellent set of material on Equality from MDN, as always. The "Loose
    Equality" and "Strict Equality" sections are important for our session, the
    rest is useful but not necessary. Some interesting links to the JavaScript
    specification if you're up for a more academic explanation!

#### JavaScript values: not everything is an object - Dr. Alex, R. Phd
- (http://2ality.com/2011/03/javascript-values-not-everything-is.html)

    Dr. Alex always has good in-depth content for JavaScript, this blog post on
    types is no different, it's quick and to the point. Some of the later parts
    of this blog will be helpful in the following sessions as well. Checkout the
    "Related Content" section if you'd like to explore further.

#### Chapter 1: Types, Types & Grammar - YDKJ
- (https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

    An entire chapter on Types from "You Don't Know JavaScript" (a book worth
    reading). You can skim through it, but it might be worth reading through it
    once in a while. This is also a great reference.

#### Chapter 4: Coercion, Types & Grammar - YDKJ
- (https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

    Great stuff from "You Don't Know JavaScript" book. Very detailed and very
    long. You could skim through most of it, but make sure to read
    [this section on implicit coercion](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#implicit-coercion).
    Only one section "Converting Values" is important for the purpose of this
    session. The other material is useful and maybe a good opportunity for a
    deeper dive on your own time.

## Pre-read Quizzes
Test your knowledge on the pre-reads!

Types:    
-   https://docs.google.com/forms/d/e/1FAIpQLSc2kysfdkDnQzzn-wipQ79-HTt65TSLlroq6s83AyF3hlWbUg/viewform

Equality:    
-   https://docs.google.com/forms/d/e/1FAIpQLSf5W-QZ6NXP6wG-7eP86TmOG0zsLxFtCDNxzaM087JxpMwk3Q/viewform

---


## Exercises

-   [CodeSandbox for Exercises, with co-located solutions.](https://codesandbox.io/s/y3y2jnkl6j?fontsize=14&module=%2Fsrc%2Fexercises%2F1-types.test.js&previewwindow=tests )

---

## Post Session Survey

-   https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform
