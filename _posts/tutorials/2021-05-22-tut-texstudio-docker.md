---
layout: post
title:  "Tutorial: TeXstudio inside Docker container"
date:   2021-05-22 19:15:00 +0530
blurb: ""
og_image: /assets/img/content/tut-texstudio/Banner.png
category: tutorials
---

<img src="{{ "/assets/img/content/tut-texstudio/Banner.png" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Motivation
- Overleaf's compilation time is too slow. I switched to TeXLive+TeXstudio and loved it
- On installing `texlive-fonts-extra`, I was afflicted by fonts conflict with `fonts-font-awesome` that render the cool icons on my [i3 taskbar](/2021/03/10/first-linux-rice)
- [Asked it](https://askubuntu.com/questions/1339453/installing-texlive-fonts-extra-messing-up-i3s-font-awesome-icons) on AskUbuntu. I was able to solve it, albeit unsatisfactorily, and answered it too
- Font Awesome icons in the text editor were still messed up. Enter, Docker

### Steps
1. [Install Docker](https://docs.docker.com/engine/install/)
1. `mkdir ~/texstudio-docker && cd ~/texstudio-docker`
1. `touch Dockerfile`
1. `touch start_texstudio.sh`
1. `chmod +x start_texstudio.sh`
1. Populate the two created files (code given below)
1. `./start_texstudio.sh`
1. TeXstudio's GUI should appear if all went well

#### Dockerfile
```docker
FROM ubuntu:focal

# setup timezone
RUN echo 'Etc/UTC' > /etc/timezone && \
    ln -s /usr/share/zoneinfo/Etc/UTC /etc/localtime && \
    apt-get update && \
    apt-get install -q -y --no-install-recommends tzdata && \
    rm -rf /var/lib/apt/lists/*

# install packages
RUN apt-get update \
    && apt-get install -y texlive-latex-extra texlive-fonts-extra texstudio cm-super \
    && apt-get clean

RUN apt-get install -y sudo \
    && apt-get clean

# Replace 1000 with your user / group id
RUN export uid=1000 gid=1000 && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:${gid}:Developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:${gid} -R /home/developer && mkdir -p /home/developer/workspace

USER developer
ENV HOME /home/developer

WORKDIR /home/developer/workspace
```

#### start_texstudio.sh
```sh
#!/bin/sh
docker build -t tex_image .

docker run -it \
  --rm \
  -v $PWD:/home/developer/workspace \
  -v /tmp/.X11-unix/:/tmp/.X11-unix \
  -e DISPLAY=$DISPLAY \
  tex_image texstudio
```

### How to use
- Copy directories containing TeX scripts into `~/texstudio-docker`. These can now be found from within TeXstudio's GUI
- The next time you want to open TeXstudio, `cd ~/texstudio-docker && ./start_texstudio.sh`
- If you require additional packages for TeXLive, add it to the Dockerfile and run the shell script again
