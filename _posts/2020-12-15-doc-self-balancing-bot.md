---
layout: post
title:  "Project Documentation: Two-Wheeled Self-Balancing Bot"
date:   2020-12-15 12:00:00
blurb: ""
og_image: https://drive.google.com/uc?export=view&id=1rcNvNYsFVB1gD53sSZDeMY9jsPG_-MVd
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
![Setup](https://drive.google.com/uc?export=view&id=1rcNvNYsFVB1gD53sSZDeMY9jsPG_-MVd){:width="300px"}
<br />
![Top view](https://drive.google.com/uc?export=view&id=1mP7h74WsNAFpZM_YsvvMDWKt1dw0facA){:width="300px"}
![Front view](https://drive.google.com/uc?export=view&id=1bg_S1AHhZK-gHUshxIrYfyenvD8KdMCe){:width="300px"}


### Preliminaries/Learning

##### Circuit diagram
![Circuit](https://drive.google.com/uc?export=view&id=1cDbWtCxjrUfJVoNLGPj99qQ5-iv488So){:width="600px" height="400px"}

##### Control equations
![Controls](https://drive.google.com/uc?export=view&id=1dBBVt9U_n886CcJT5n7GS9cWwQJgQz5Y){:width="600px" height="600px"}

##### Used an SMPS for the first time
![SMPS](https://drive.google.com/uc?export=view&id=1GmDltEXaGWgTUilP63WYu0Hzm2IvS-mo){:width="400px" height="600px"}


### Videos

*Note: Webpage takes too long to load when videos are embedded. Thus, links of the videos have been posted here*

##### Single motor feedback to tilt
[Link](https://drive.google.com/uc?export=view&id=1txB1wECq1SekcQoCvZviClIgD5hpdTyJ)

##### High Kp dance
[Link](https://drive.google.com/uc?export=view&id=10bm4_1NTQzhSNADEQV_8h9a8oLu4mA-Y)

##### Cord (Arduino powered through USB cable)
[Link](https://drive.google.com/uc?export=view&id=1ph00gV7dFbrdqpeK0FsKof0Ds0b58oQw)

##### Final Demo: Cordless (Arduino powered by SMPS)
[Link](https://drive.google.com/uc?export=view&id=11Vv4a78ACT_ELX9CO-pQlDlRg6kWfgtv)


### Other Learnings
- Calibrating MPU 6050
- Register level programming