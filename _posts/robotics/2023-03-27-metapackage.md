---
layout: post
title:  "Metapackage vs Package"
date:   2023-03-27 00:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: robotics
draft: False
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

A metapackage is a package of packages. It does not contain code or physically contain the other packages. It is just a convenience tool. If a group of packages *should* be together, that information can be added inside a metapackage. So you can `apt install` or `catkin build` only the metapackage's name and the coherent group of packages will all be built together.

While populating the `package.xml`, I realized that you should avoid putting only the metapackage name, and put the actual list of packages instead. Else, `catkin build` throws a warning, for example --
> WARNING: package "grid_map_simpletest" should not depend on metapackage "grid_map" but on its packages instead

### Reference
- [ROS Answer by gvdhoorn](https://answers.ros.org/question/256493/what-is-the-benefit-of-metapackages/)
