---
layout: post
title:  "Finding intuitive sense in controls jargons"
date:   2021-12-25 00:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: robotics
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />


### Listing the jargons
- [x] $H_2$ control
- [ ] Full state feedback (aka Pole placement)
- [ ] Controllability; Observability; controller canonical form; observer canonical form
- [ ] Duality
- [x] Classical v/s Modern control
- [x] Optimal control
- [x] Cost-to-go function
- [x] Ricatti Equation
- [x] LQR (Linear Quadratic Regulator)
- [x] LQE (Linear Quadratic Estimator), LQG (Linear Quadratic Gaussian), Separation Principle
- [x] MPC (Model Predictive Control), GPC (Global Predictive Control), DMC (Dynamic Matrix Control)
- [x] System Identification
- [x] Underactuation
- [ ] ZMP (Zero Moment Point)
- [x] Admittance v/s Impedance control
- [ ] Backstepping control
- [ ] HZD (Hybrid Zero Dynamics)
- [x] Model-free control
- [ ] Jacobian


---

<br/>

#### $H_2$ control
- Consists of internally stabilizing the control system while minimizing the $H_2$ norm of its transfer function
- The $H_2$ norm of a stable system $H$ is the root-mean-square of the impulse response of the system


#### Classical v/s Modern Control

Classical | Modern
--- | ---
Uses the Laplace transform to change an Ordinary Differential Equation (ODE) in the time domain into a regular algebraic polynomial in the frequency domain. Once a given system has been converted into the frequency domain it can be manipulated with greater ease. | Instead of changing domains to avoid the complexities of time-domain ODE mathematics, converts the differential equations into a system of lower-order time domain equations called state equations, which can then be manipulated using techniques from linear algebra.
{:.styled-table}

<br/>
TL;DR: Modern control theory uses state space model.


#### Optimal Control
Optimal control is the process of determining control and state trajectories for a dynamic system over a period of time to minimise cost.


#### Cost-to-go function
From Boreilly's MPC book, the cost over the horizon $j$ to $N$ is

$$J_{j\rightarrow N} (x_j , u_j, u_{j+1}, . . . , u_{N−1}) = p(x_N ) + \sum_{k=j}^{N-1} q(x_k, u_k)$$

The cost-to-go function emphasizes the cost of final state and cost of journey to that state. In comparison, an objective function can be more general (e.g. just cost of final state).


#### Ricatti Equation
Any first-order ordinary differential equation that is quadratic in the unknown function. That is, of the form-

$$
y^{\prime}(x)=q_{0}(x)+q_{1}(x) y(x)+q_{2}(x) y^{2}(x)
$$

In continuous time, called Ricatti Differential Equation. In discrete time, called Ricatti Difference Equation.

The steady-state (non-dynamic) version of the matrix version of Ricatti Equation is referred to as the algebraic Riccati equation. It arises in the context of infinite-horizon optimal control problems in continuous time (CARE: Continuous-time Algebraic Ricatti Equation)-

$$
A^{T} P+P A-P B R^{-1} B^{T} P+Q=0
$$

or discrete time (DARE: Discrete-time Algebraic Ricatti Equation)-

$$
P=A^{T} P A-\left(A^{T} P B\right)\left(R+B^{T} P B\right)^{-1}\left(B^{T} P A\right)+Q
$$

#### LQR
- The case where the system dynamics are described by a set of linear differential equations and the cost is described by a quadratic function is called the LQ problem. LQ usually refers to LQR
- One of the main results in the theory is that the solution is provided by the LQR (linear–quadratic regulator)
- LQR is the best possible controller under some assumptions

$$
\min _{u(\cdot)} \int_{0}^{T}\left(x^{T} Q x+u^{T} R u\right) d t+x(T)^{T} Q_{f} x(T)
$$

$$\begin{array}{ll}\text { subject to } & \dot{x}=A x+B u \\ & y=x \\ & x(0)-\text { Given }\end{array}$$

$x$ is system state, $y$ is output, $u$ is input  
Optimal controller is of the form $u(t) = K.x(t)$  
where $K$ is obtained from the Ricatti Equation

- Difficulty in finding the right weighting factors limits the application of the LQR based controller synthesis


#### LQE, LQG and Separation Principle
- LQE (Linear–quadratic estimator) is the best possible estimator under some assumptions. Under the assumption of Gaussian noise, we can use the Kalman filter as our LQE
- LQG (Linear–quadratic–Gaussian) just means using LQR and LQE at the same time
- Concerns linear systems driven by additive white Gaussian noise
- Simply a combination of a Kalman filter (a linear–quadratic state estimator (LQE)) together with a linear–quadratic regulator (LQR).
- The "separation principle" states that the state estimator and the state feedback can be designed independently

$$
\min _{u(\cdot)} \mathbb{E}\left[\int_{0}^{T}\left(x^{T} Q x+u^{T} R u\right) d t+x(T)^{T} Q_{f} x(T)\right]
$$

$$\begin{array}{ll}\text { subject to } & \dot{x}=A x+B u+w \\ & y=C x+v \\ & x(0)-\text { Given } \\ & v, w-\text { Gaussian noises }\end{array}$$

$x$ is system state, $y$ is output, $u$ is input  
Optimal controller is of the form $u(t) = K.x'(t)$  
where $K$ is obtained from the Ricatti Equation and  
$x'$ is estimate of the state  
Due to random noise the state $x$ is not directly observed. Thus, estimate of the state $x'$ is obtained from the output $y$ using a Kalman filter


#### MPC
- Model predictive controllers rely on dynamic models of the process, most often linear empirical models obtained by system identification.
- The main advantage of MPC is the fact that it allows the current timeslot to be optimized, while keeping future timeslots in account.
- This is achieved by optimizing a finite time-horizon, but only implementing the current timeslot and then optimizing again, repeatedly.
- Generalized predictive control (GPC) and dynamic matrix control (DMC) are classical examples of MPC.


#### System Identification
- The field of system identification uses statistical methods to build mathematical models of dynamical systems from measured data.

- Model predictive control determines the next action indirectly. The term “model” is referencing to a forward model which doesn't provide the correct action but simulates a scenario. A forward model is equal to a physics engine used in game programming. The model takes an input and calculates the future state of the system.

- The reason why dedicated forward models are constructed, is because it allows one to divide the overall control process. The first question is how to predict future states of the system. That means, to simulate a plant over a timespan for different input values. And the second task is to search for a sequence of input values which brings the plant into a goal state. This is called predictive control.

- The forward model is the most important aspect of a MPC-controller. It has to be created before the solver can be realized. If it's unclear what the behavior of a system is, it's not possible to search for meaningful actions. The workflow for creating a forward model is called system identification. The idea is to formalize a system in a set of equations which will behave like the original system. The error between the real system and the forward model can be measured.


#### MPC v/s LQR

MPC | LQR
--- | ---
Optimizes in a receding time window | Optimizes across the entire time window (horizon)
A new solution is computed often | Uses the same single (optimal) solution for the whole time horizon
{:.styled-table}

<br/>


#### How are MPC/LQR related to Optimal control?
Model predictive control and linear-quadratic regulators are both expressions of optimal control, with different schemes of setting up optimization costs.


#### Underactuation
Technical term used in robotics and control theory to describe mechanical systems that cannot be commanded to follow arbitrary trajectories in configuration space.q


#### Admittance v/s Impedance control

Admittance control | Impedance control
--- | ---
Controls motion after a force is measured | Controls force after motion or deviation from a set point is measured
{:.styled-table}

<br/>


#### Model-free control
- Needed when the system is highly non-linear and/or time-varying. Getting a global model is very difficult.
- The opposite would be when we're able to model the system.
