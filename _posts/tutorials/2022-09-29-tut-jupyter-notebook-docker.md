---
layout: post
title:  "Tutorial: Jupyter Notebook inside Docker container"
date:   2022-09-29 10:08:00 -0400
blurb: ""
og_image: /assets/img/content/tut-jupyter/Banner.png
category: tutorials
---

<img src="{{ "/assets/img/content/tut-jupyter/Banner.png" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Motivation
- Currently on Ubuntu 22.04 where Python 3.10 is default
- For my Computer Vision assignment, `torch==1.8.1` and `torchvision==0.9.1` are required which are available with older versions of python
- Installing older versions of python and managing pip was a mess!
- I timeshifted back to a week ago and coded up the below Dockerfile

### Steps
1. [Install Docker](https://docs.docker.com/engine/install/)
1. `mkdir ~/Pydockerfiles && cd ~/Pydockerfiles`
1. `touch Dockerfile`
1. `touch run`
1. `touch requirements.txt`
1. Populate `requirements.txt` if you have any reference list
1. `chmod +x run`
1. Populate the two created files (code given below)
1. `./run`
1. The notebook server link should open in the browser if all went well

#### Dockerfile
```docker
FROM python:3.8-slim-buster

WORKDIR /home

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install jupyter notebook
RUN apt-get update && apt-get install -y python3-opencv

CMD jupyter notebook --ip 0.0.0.0 --no-browser --allow-root
```

#### run
```sh
#!/bin/sh

docker build --tag python-docker .

docker run -it \
      --rm \
      -p 8888:8888 \
      --name py-doc \
      -v ~/{WORK_DIRECTORY_PATH}:/home/{WORK_DIRECTORY_NAME} \
      python-docker
```

### References
- Base for the initial Dockerfile: [Medium article](https://medium.com/fintechexplained/running-python-in-docker-container-58cda726d574)
- Getting jupyter notebook: [LinkedIn article](https://www.linkedin.com/pulse/running-jupyter-notebook-docker-container-faraz-ali/)
- Accessing jupyter notebook via Docker: [Stackoverflow post](https://stackoverflow.com/a/48986548)
- Issue with cv2- `ImportError: libGL.so.1: cannot open shared object file: No such file or directory`: [Stackoverflow post](https://stackoverflow.com/a/66473309)
- If you need to export notebook to pdf: [Nbconvert Readthedocs](https://nbconvert.readthedocs.io/en/latest/install.html#installing-tex)
