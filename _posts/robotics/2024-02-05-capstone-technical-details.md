---
layout: post
title:  "MRSD Capstone: Technical Details"
date:   2024-02-05 00:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: robotics
draft: False
---

<!-- <img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/> -->
<iframe width="600" height="350"
src="https://www.youtube.com/embed/Q_JxZE6QCvg?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br />
<br />


### Use Case
First responder personnel (FPR) receives a disaster alert for trapped victims in a building, but unsafe conditions prevent entry due to unknown hazard spreads (e.g., fire/radiation). DarkBot enters the cluttered area with narrow pathways, performing exploration, reconstructing a 3D map, and marking survivors on the map. Collected information by DarkBot is sent back to FRPs, providing indoor structure insights and victim location

### TARE Planner
The system performs area coverage to locate humans based on TARE planner. Conducts mapping and localization within unknown environments. Inputs include robot pose, Velodyne point cloud data, and terrain maps. Output is the subsequent waypoint that the robot must visit next. Solves the problem as a Traveling Salesman Problem (TSP), with an A* path between consecutive viewpoints and refines it for smoother robot navigation

### Position Controller
Aligns itself with the active waypoint and proceeds toward it. Leverages the robot's omni-directional motion capability. Proportional controller outperformed more complex local planners across various scenarios

### Safety Protocols
Robot halts if the planner uncertainty exceeds threshold or if requested command velocity is deemed unsafe. High-frequency command "permission to move" is sent from the operator, the robot pauses if loses connection

### Hardware Challenges
- Networking issues
- Superodometry state estimation flying away due to hardware issue
- Network latency while running NMPC controller
- Transfer working code from x86 to ARM computer

### MMPUG Stack
- `registered_scan` (Fuse lidar and IMU)
- `terrain_map` (Terrain Analysis)
- `state_estimation` (Superodometry)

### Joint Level Controller
Non-linear model predictive controller (NMPC) designed to convert the center of mass trajectory into precise joint states. Responding swiftly to environmental disturbances, the joint controller solves a high-frequency whole-body optimization problem, generating accurate joint torques as output. Leveraging the SQP algorithm from ETH Zurich's OCS2 package, the optimization process ensures efficient and effective problem-solving.



Notes
---
Devised non-linear model predictive control tracked using reactive whole-body control and deployed to quadruped. Implemented safety features for disaster sites & demonstrated on-demand temporary takeover by safety operator. Integrated localization (Superodometry), controller (custom), and exploration (TARE Planner) sub-systems. Demonstrated robust exploration at 16.5 m2/min coverage rate of unknown, cluttered room with trapped humans