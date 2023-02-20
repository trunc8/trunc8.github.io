---
layout: post
title:  "Tutorial: Fixing xmodmap in Ubuntu 22.04 via terminal"
date:   2022-09-17 12:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: tutorials
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />


I fixed the `xmodmap` issue in my system after a month and life already feels so much better. `xmodmap` is used to re-map keyboard bindings. And shortcuts associated with these key-bindings are what make the i3-wm system very special. (Error Resolution is at the end)

### My Re-Mapped Key-Bindings
#### Caps Lock key functions as an Escape key
My usage of Esc is extensive because I use vim key-bindings in my terminal (zsh), my lock, shut down, log out... options are accessed by Super+Esc. Also vimium bindings in chrome, rofi, etc. Always keep needing the Esc key.

#### Right Alt key functions as Right Super key
In combination with Esc key (above) as well as for workspace switching, screenshot, etc. Many of my custom shortcuts are linked to Super key.

### Error Resolution
The xmodmap issue started after switching from Ubuntu 20.04 to 22.04. This is because Ubuntu made Wayland server the default in 22.04 from the earlier X server in 20.04.

Steps to resolve this:

1. `sudo nano /etc/gdm3/custom.conf`
2. Uncomment `WaylandEnable=false`
3. Restart. And lo! X server commands should begin working.

### Bonus
One of the commands you can try out is below
```sh
xmodmap -e "clear lock" #disable caps lock switch
xmodmap -e "keysym Caps_Lock = Escape" #set caps_lock as escape
```

Add this to your `~/.config/i3/config` or `~/.*shrc` to automatically remap at every boot.


### References
- Why it happened: [https://askubuntu.com/questions/1403490/xmodmap-doesnt-work-anymore-after-upgrading-to-22-04](https://askubuntu.com/questions/1403490/xmodmap-doesnt-work-anymore-after-upgrading-to-22-04)
- And after a good deal of self-debugging, helped me locate the file to be modified: [https://askubuntu.com/a/1413490](hhttps://askubuntu.com/a/1413490)
