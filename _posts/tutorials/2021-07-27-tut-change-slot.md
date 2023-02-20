---
layout: post
title:  "Tutorial: Revive Android device booted into wrong partition slot"
date:   2021-07-27 18:45:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: tutorials
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />


### Background
I use a rooted Android device to enjoy several upsides in device capabilities. I occasionally run into trouble with OS upgrades though.


#### Procedure for installing upgrades
1. Download and install the System Updates
2. Press "Install" in Magisk
3. Choose "Install to Inactive Slot (After OTA)"
4. "Reboot"


### Problem
Occasionally I perform the Magisk steps too soon after the System Updates only finish downloading and aren't installed completely. The device obliges and boots into the inactive partition slot, and enters a bootloop or asks you to wipe the data. 


### Solution
Connect Android device to Linux system via USB cable and run following commands in the terminal
```sh
sudo apt install android-tools-adb
sudo apt install android-tools-fastboot
fastboot devices
fastboot getvar current-slot
fastboot --set-active=b
# If current-slot is "b", set active slot to be "a"
```
