---
layout: post
title:  "Tutorial: Toggle Dunst notification indicator in i3blocks"
date:   2021-07-29 13:15:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: tutorials
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Background
I use i3 window manager in Ubuntu 20.04 with Dunst notification daemon. I wished to achieve a simple "toggle notifications" functionality with a status indicator in the i3blocks bar.

Solutions on the internet pointed to using `dunstctl`, which posed multiple problems to me:

- Not available as an apt repository. I went forth and built the source code of the [Dunst project](https://github.com/dunst-project/dunst)
- Got stuck with [this issue](https://github.com/dunst-project/dunst/issues/748) opened on their official repository

I didn't want to get to the bottom of the issue, so I discarded `dunstctl` and implemented the hacky suggestion mentioned in [this comment](https://github.com/dunst-project/dunst/issues/216#issuecomment-421033384) on a different issue.


### Demo
Pressing `Super+F1`:

![Disabled]({{ "/assets/img/content/tut-dunst-toggle/disabled.png" | absolute_url }})

Pressing `Super+F1` again:

![Enabled]({{ "/assets/img/content/tut-dunst-toggle/enabled.png" | absolute_url }})

### Solution

The core of this solution is that notifications can be toggled using `notify-send "DUNST_COMMAND_TOGGLE"`.

My complete [i3 config dotfiles](https://github.com/trunc8/dotfiles/tree/master/.config/i3) are available on GitHub. The relevant changes have been higlighted below.

#### ~/bin/toggle_dunst_pause
```sh
#!/usr/bin/env bash

pause_status_file="/tmp/dunst-pause-status"

# pause=0 means not paused
# pause=1 means pause enabled
pause=$([[ -f "$pause_status_file" ]] && cat $pause_status_file)

toggle_pause=$((1-pause))

echo $toggle_pause > $pause_status_file

notify-send "DUNST_COMMAND_TOGGLE"
```

#### ~/.config/i3/scripts/dunst_status
```sh
#!/usr/bin/env bash

pause_status_file="/tmp/dunst-pause-status"

# pause=0 means not paused
# pause=1 means pause enabled
pause=$([[ -f "$pause_status_file" ]] && cat $pause_status_file)

# dunst_status=0 means dunst disabled
# dunst_status=1 means dunst enabled
dunst_status=$((1-pause))

## Toggle dunst's state icon
case $dunst_status in
    0)
    echo " <PASTE FROM FONTAWESOME: BELL_SLASH ICON> "
    echo
    echo \#F47174;
    ;;
    1)
    echo " <PASTE FROM FONTAWESOME: BELL ICON> "
    echo
    echo \#aaaaaa;
    ;;
esac

exit 0;
```
> Make both of the above scripts executable

#### Append to ~/.config/i3/i3blocks.conf
```rust
[dunst_status]
interval=1
```

#### Append to ~/.config/i3/config
```sh
## Toggling dunst notifications in i3 (inside ~/bin)
bindsym $mod+F1 exec --no-startup-id toggle_dunst_pause
```

#### Ensure below line is present in ~/.zshrc or ~/.bashrc
```sh
## In order to use the executable scripts inside ~/bin directly
export PATH=$HOME/bin:$PATH
```
