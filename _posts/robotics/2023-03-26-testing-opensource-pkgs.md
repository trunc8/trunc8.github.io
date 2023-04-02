---
layout: post
title:  "Familiarizing with Opensource Robotics Packages (Running Post)"
date:   2023-03-26 00:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: robotics
draft: False
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

There are two tracks of self-development I have in mind:

- **Familiarizing with famous opensource robotic packages** --- This is to know what's the best out there by running their example demonstrations, even if I don't get the maths yet
- **Making a library of my own implementations** --- This is to re-invent the wheels by consolidating the maths and my intuition, attempting to bridge the gap of what I know and what's out there

This blog attempts to journal my odyssey through the first track.

```sh
# First time setup steps
# I will keep referring to ROOT_DIR in the rest of the post
ROOT_DIR=<ASSIGN PREFERRED ROOT DIRECTORY ADDRESS HERE>
cd $ROOT_DIR
mkdir -p opensource_ws/src
cd opensource_ws

# Install catkin-tools: https://catkin-tools.readthedocs.io/en/latest/installing.html
catkin init
catkin build
```

#### Table of Contents
1. [Kindr](#kindr)
1. [Grid Map](#grid-map)
1. [Elevation Mapping](#elevation-mapping)
1. [Legged Control](#legged-control)
1. [Acknowledgements](#acknowledgements)


## Kindr
*Summary:* The [kindr](https://github.com/anybotics/kindr) package provides interfaces to standard mathematical quantities encountered in kinematics and dynamics for robotics.

*Latest as of:* Mar 26, 2023

### Compilation Steps
```sh
cd $ROOT_DIR
cd opensource_ws/src
git clone https://github.com/ANYbotics/kindr.git
catkin build kindr
```

### Simpletest package
[trunc8/kindr_simpletest](https://github.com/trunc8/kindr_simpletest)

---

## Grid Map
*Summary:* The [grid_map](https://github.com/ANYbotics/grid_map) is intended for 2.5-dimensional grid mapping, i.e., heightmaps. It is intended to be used as a local data map and it uses a circular buffer to shift the data as the robot moves.

*Latest as of:* Mar 26, 2023

### Compilation Steps
```sh
cd $ROOT_DIR
cd opensource_ws/src
git clone https://github.com/ANYbotics/grid_map.git
catkin build grid_map
```

*Interesting aside here:* The `grid_map` package is a metapackage. The other packages like `grid_map_core` and `grid_map_octomap` are where the actual code is implemented. So what's the difference between a package and a metapackage? I answer it in a [short blog post]({{ site.baseurl }}{% link _posts/robotics/2023-03-27-metapackage.md %}).

### Simpletest package
[trunc8/grid_map_simpletest](https://github.com/trunc8/grid_map_simpletest)

Learned a new aspect of ROS CMakeLists.txt while writing the above simpletest. The `grid_map` library source code is not accessible even if you include the relevant package names. You have to link to the library using the following code --

```cmake
target_link_libraries(${PROJECT_NAME}_node
  ${catkin_LIBRARIES}
)
```

I created this grid map after figuring out the APIs from `grid_map` source code ---

![RViz Demo](/assets/img/content/testing-opensource/grid_map_simpletest.png)

---

## Elevation Mapping
*Summary:* The [elevation_mapping](https://github.com/ANYbotics/elevation_mapping) package creates a local heightmap around the robot. It needs to be provided with range sensor data and robot pose estimation.

*Latest as of:* Mar 28, 2023

### Compilation Steps
- Environment: ROS Noetic
- Packages that I cloned and built in the same workspace: 
    + [kindr](https://github.com/anybotics/kindr)
    + [kindr_ros](https://github.com/anybotics/kindr_ros)
    + [message_logger](https://github.com/ANYbotics/message_logger)
    + [grid_map](https://github.com/ANYbotics/grid_map)
    + *(optional)* [turtlebot3_simulations](https://github.com/ROBOTIS-GIT/turtlebot3_simulations)
    + *(optional)* [turtlebot3](https://github.com/ROBOTIS-GIT/turtlebot3)
    + *(optional)* [point_cloud_io](https://github.com/ANYbotics/point_cloud_io.git)

```sh
cd $ROOT_DIR
cd opensource_ws/src
git clone https://github.com/ANYbotics/grid_map.git
catkin build grid_map
```

*Aside --- I tried building it on ROS Melodic as well. Melodic fixes below:*

- https://github.com/ANYbotics/grid_map/issues/292: Replace `filter_base.hpp` with `filter_base.h`, `filter_chain.hpp` with `filter_chain.h`
- https://github.com/ANYbotics/grid_map/issues/355 They have fixed things in Noetic, not in Melodic. Ended up commenting out the line:
    ```makefile
    # find_package(TBB 2020.1 EXACT REQUIRED)
    ```
- https://github.com/ANYbotics/elevation_mapping/issues/151They seem to have fixed this in Noetic, not in Melodic. Changed `PCL_MAKE_ALIGNED_OPERATOR_NEW` to `EIGEN_MAKE_ALIGNED_OPERATOR_NEW` in elevation_mapping package `PointXYZRGBConfidenceRatio.hpp`.

### Simpletest package
[trunc8/elevation_mapping_simpletest](https://github.com/trunc8/elevation_mapping_simpletest)

---

## Legged Control
*Summary:* The [legged_control](https://github.com/qiayuanliao/legged_control) package is a legged robot control stack based on NMPC (Nonlinear Model Predictive Control) and WBC (Whole Body Controller).

*Latest as of:* Apr 01, 2023

### Compilation Steps
- Environment: ROS Noetic
- Packages that I cloned and built in the same workspace:
    + [ocs2](https://github.com/leggedrobotics/ocs2)
    + [pinocchio](https://github.com/leggedrobotics/pinocchio.git)
    + [hpp-fcl](https://github.com/leggedrobotics/hpp-fcl.git)
    + [ocs2_robotic_assets](https://github.com/leggedrobotics/ocs2_robotic_assets.git)
- Apt installed
    + liburdfdom-dev liboctomap-dev libassimp-dev

```sh
cd $ROOT_DIR
cd opensource_ws/src
mkdir legged_control_pkgs && cd legged_control_pkgs

# Clone legged_control
git clone git@github.com:qiayuanliao/legged_control.git
# Clone OCS2
git clone git@github.com:leggedrobotics/ocs2.git
# Clone pinocchio
git clone --recurse-submodules https://github.com/leggedrobotics/pinocchio.git
# Clone hpp-fcl
git clone --recurse-submodules https://github.com/leggedrobotics/hpp-fcl.git
# Clone ocs2_robotic_assets
git clone https://github.com/leggedrobotics/ocs2_robotic_assets.git
# Install dependencies
sudo apt install liburdfdom-dev liboctomap-dev libassimp-dev

catkin config -DCMAKE_BUILD_TYPE=RelWithDebInfo
catkin build ocs2_legged_robot_ros ocs2_self_collision_visualization
```

### Simpletest
```sh
source $ROOT_DIR/devel/setup.zsh
roslaunch ocs2_legged_robot_ros legged_robot_ddp.launch
```

---

## Acknowledgements
