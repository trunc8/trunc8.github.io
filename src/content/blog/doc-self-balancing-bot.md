---
title: "Project Documentation: Two-Wheeled Self-Balancing Bot"
pubDate: 2020-12-15
description: "Demonstrating the inverted pendulum problem using a two-wheeled bot with gyroscope and accelerometer input"
ogImage: /img/content/self-balancing-bot/Banner.jpg
theme: "Motion Planning & Navigation"
tags: []
mathjax: false
draft: true
---

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
![Top view](/img/content/self-balancing-bot/top_setup.jpg)
![Front view](/img/content/self-balancing-bot/front_setup.jpg)


### Preliminaries/Learning

##### Circuit diagram
![Circuit](/img/content/self-balancing-bot/circuit.jpg)

##### Control equations
![Controls](/img/content/self-balancing-bot/maths.jpg)

##### Used an SMPS for the first time
![SMPS](/img/content/self-balancing-bot/smps.jpg)


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
