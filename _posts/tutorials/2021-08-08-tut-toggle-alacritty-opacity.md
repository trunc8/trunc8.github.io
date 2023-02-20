---
layout: post
title:  "Tutorial: Key-binding to toggle Alacritty background opacity"
date:   2021-08-08 09:56:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: tutorials
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Demo
Pressing `Super+Shift+a`:

![Transparent]({{ "/assets/img/content/tut-toggle-alacritty/transparent.png" | absolute_url }}){:width="500px"}

Pressing `Super+Shift+a` again:

![Opaque]({{ "/assets/img/content/tut-toggle-alacritty/opaque.png" | absolute_url }}){:width="500px"}

### Steps
#### ~/bin/toggle_alacritty_opacity
```sh
#!/usr/bin/env bash

## If alacritty.yml does not exist, raise an alert
[[ ! -f ~/.config/alacritty/alacritty.yml ]] && \
    notify-send "alacritty.yml does not exist" && exit 0

## Fetch background_opacity from alacritty.yml
opacity=$(awk '$1 == "background_opacity:" {print $2; exit}' \
    ~/.config/alacritty/alacritty.yml)

## Assign toggle opacity value
case $opacity in
  1)
    toggle_opacity=0.8
    ;;
  *)
    toggle_opacity=1
    ;;
esac

## Replace opacity value in alacritty.yml
sed -i -- "s/background_opacity: $opacity/background_opacity: $toggle_opacity/" \
    ~/.config/alacritty/alacritty.yml
```

> Make the above script executable

#### Append to ~/.config/i3/config
```sh
## Toggling alacritty opacity in i3 (inside ~/bin)
bindsym $mod+Shift+a exec --no-startup-id toggle_alacritty_opacity
```

#### Ensure below line is present in ~/.zshrc or ~/.bashrc
```sh
## In order to use the executable scripts inside ~/bin directly
export PATH=$HOME/bin:$PATH
```

Finally, ensure that *live_config_reload* is enabled in alacritty.yml