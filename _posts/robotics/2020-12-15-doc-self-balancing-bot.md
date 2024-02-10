---
layout: post
title:  "Project Documentation: Two-Wheeled Self-Balancing Bot"
date:   2020-12-15 12:00:00 +0530
blurb: ""
og_image: /assets/img/content/self-balancing-bot/Banner.jpg
category: robotics
---

<img src="{{ "/assets/img/content/self-balancing-bot/Banner.jpg" | absolute_url }}" alt="self-balancing-bot-doc" class="post-pic" width=300/>
<br />
<br />

### Problem Definition
Demonstrate the inverted pendulum problem using a two-wheeled bot and input from gyroscope+accelerometer module


### Components
- MPU 6050
- Arduino Uno
- 2 x N20 12V 120 RPM Micro Metal Gear Motor With Encoder
- 2 x 3PI miniQ Car wheel Tyre 44mm N20 DC Gear Motor Wheel
- Motor driver L298
- Phone box as chassis
- SMPS Power Supply


### Setup picture
![Top view]({{ "/assets/img/content/self-balancing-bot/top_setup.jpg" | absolute_url }}){:width="300px"}
![Front view]({{ "/assets/img/content/self-balancing-bot/front_setup.jpg" | absolute_url }}){:width="300px"}


### Preliminaries/Learning

##### Circuit diagram
![Circuit]({{ "/assets/img/content/self-balancing-bot/circuit.jpg" | absolute_url }}){:width="600px" height="400px"}

##### Control equations
![Controls]({{ "/assets/img/content/self-balancing-bot/maths.jpg" | absolute_url }}){:width="600px" height="600px"}

##### Used an SMPS for the first time
![SMPS]({{ "/assets/img/content/self-balancing-bot/smps.jpg" | absolute_url }}){:width="400px" height="600px"}


### Videos

#### Single motor feedback to tilt
[Link](https://drive.google.com/uc?export=view&id=1txB1wECq1SekcQoCvZviClIgD5hpdTyJ)

#### High Kp dance
[Link](https://drive.google.com/uc?export=view&id=10bm4_1NTQzhSNADEQV_8h9a8oLu4mA-Y)

#### Cord (Arduino powered through USB cable)
[Link](https://drive.google.com/uc?export=view&id=1ph00gV7dFbrdqpeK0FsKof0Ds0b58oQw)

#### Final Demo: Cordless (Arduino powered by SMPS)
<iframe width="560" height="315"
src="https://www.youtube.com/embed/zCnvgg1dpSY?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br />


### Other Learnings
- Calibrating MPU 6050
- Register level programming
