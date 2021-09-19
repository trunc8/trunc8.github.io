---
layout: post
title:  "Paper Review: Detection  and  Tracking  of  2D  Geometric  Obstacles  from  LRF  Data"
date:   2021-01-14 20:00:00 +0530
blurb: ""
og_image: /assets/img/content/obstacle-detector/Banner.png
category: paper-reviews
---

<img src="{{ "/assets/img/content/obstacle-detector/Banner.png" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### In One Line
This paper[^1] attempts to solve the correspondence and the update problem while tracking 2D obstacles.


### Background on some Terminology
1. **Mixed pixels**: A "mixed pixel" results from the fact that individual areas consisting of different features or classes may be below (are smaller than) the resolution of the sensor. The resulting spectral content is then a composite or weighted average of the spectral responses from each internal class
2. **Iterative End Point Fit algorithm**: An algorithm that decimates a curve composed of line segments to a similar curve with fewer points. The steps are succinctly listed in the Wikipedia page[^2]


### Obstacle Detection
1. Grouping: Provide a collection of point subsets representing possibly separate objects
2. Splitting: Examine possibility of splitting into separate objects using Iterative End Point Fit algorithm
3. Segmentation: Represent the point subset by a line segment model using total least squares regression
4. Merging segments: Find pairs of segments that potentially comprise a single object. This is checked in two parts:
    - Connectivity test: If both segments are close to each other.
    - Spread test: If both segments are collinear.  
The extracted segments constitute set L
5. Extracting circles: Consider the line segment to be the base of an equilateral triangle and draw its circumcircle. It the resulting is less than user-defined threshold, the circle is added to the set C


### Obstacle Tracking
This is applied only to circular obstacles  
1. Correspondence problem: We want to know which obstacles at sample k-1 correspond to which at sample k. The Hungarian method[^3] is used to solve this assignment problem.
    - If new obstacle has no corresponding old obstacle, it is marked as untracked
    - If there is one-to-one correspondence, the new obstacle is marked as tracked
    - The remaining cases involve obstacle fusion and fission and the new obstacles are marked as tracked
2. Update problem: For each obstacle marked as tracked, we create a separate Kalman filter and a counter. The counter is decremented at every time sample. If the corresponding obstacle is detected at the current time sample, the counter is restarted. This enables us to preserve the obstacle even if it is occluded temporarily. If the counter reaches zero, the obstacle is deemed out-dated and discarded


### References

[^1]: [M. Przybyła, "Detection and tracking of 2D geometric obstacles from LRF data," 2017 11th International Workshop on Robot Motion and Control (RoMoCo), 2017, pp. 135-141, doi: 10.1109/RoMoCo.2017.8003904.](https://ieeexplore.ieee.org/document/8003904)
[^2]: [Ramer–Douglas–Peucker Algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm#Algorithm)  
[^3]: [Hungarian Method](https://www.geeksforgeeks.org/hungarian-algorithm-assignment-problem-set-1-introduction/)
