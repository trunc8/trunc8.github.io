---
layout: post
title:  "Tutorial: Getting shell-escape in TeXStudio to use python pygments"
date:   2023-10-24 23:48:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: CATEGORY
draft: True
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

In TeXStudio, click on the following menu

> Options > Configure TeXStudio > Commands

And add:

`pdflatex -synctex=1 -interaction=nonstopmode --shell-escape %.tex`


### Reference
https://tex.stackexchange.com/questions/99475/how-to-invoke-latex-with-the-shell-escape-flag-in-texstudio-former-texmakerx
