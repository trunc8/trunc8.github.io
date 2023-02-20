---
layout: post
title:  "Unitree High-Level Command in Simulation"
date:   2023-02-16 00:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: robotics
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

# Trail

### Unitree_ros issues: High level mode not available
- [When high level mode will be available in gazebo? #5](https://github.com/unitreerobotics/unitree_ros/issues/5)
- [Minimal example ROS driver #8](https://github.com/unitreerobotics/unitree_ros/issues/8)

The last link is useful. There are two directions from here:

- MYBOTSHOP branch
- MAVProxyUser branch


### MYBOTSHOP Branch
- [MYBOTSHOP/mbs_unitree_ros](https://github.com/MYBOTSHOP/mbs_unitree_ros) has gone 404. They have converted the repository into private. The repository was public at least till Feb 2021.
- MYBOTSHOP forked [unitree_ros](https://github.com/MYBOTSHOP/unitree_ros) 3 years ago. They probably carried out their development inside `mbs_unitree_ros`
- They're now selling the code: [Quadruped Robotics.de](https://www.quadruped.de/QUADRUPED-Go1) with a dedicated [forum](https://forum.mybotshop.de/t/unitree-a1-move-base-navigation-parameters/271) and also a [Userguide for ROS and A1](https://www.mybotshop.de/Datasheet/QUADRUPED_A1_Guide.pdf)
- But the internet never forgets. I found their older code repository on one of the distributor networks. This is up for further testing now.

### MAVProxyUser Branch
- His repository [YushuTechUnitreeGo1](https://github.com/MAVProxyUser/YushuTechUnitreeGo1) is legendary. He ripped the Go1 robot apart and penetrated any backdoor in the robot that you could possibly imagine.
- The README contains all that you need to know. The most relevant takeaway for me is that Unitree Go1 uses MIT Cheetah software code. So I will be looking deeper into that code.
- There's some pretty tarnishing information about Unitree Robotics in his notes. The TL;DR is that Unitree used and sold MIT Cheetah hardware and code without attribution till they were called out by hackers like him.


### Some other random links
- https://github.com/hanliumaozhi/unitree-a1-sim
