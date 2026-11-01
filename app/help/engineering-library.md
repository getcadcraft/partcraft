---
title: The engineering library
summary: Textbook formulas as readable scripts, in SI units, every result with its source: pipe and channel flow, heat transfer and heat exchangers, pressure parts, gas dynamics, water and air properties, materials, and units that are checked. What each is good for and where it stops.
section: tasks
order: 152
keywords: engineering, library, units, Darcy-Weisbach, Colebrook, Reynolds, friction factor, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, fin, Barlow, Lame, nozzle, isentropic, Mach, choked flow, water, air, properties, material, sources
---

The engineering library is a set of scripts in the Script workspace's library (`craftlib/eng`). Each one is a function you can read from top to bottom, with a header that gives its **method**, its **units**, its **limits**, its **references** and a **check** with a worked number. They use SI units throughout and return quantities that carry a **unit** and a **source**, so a data sheet can print where every number came from.

## Units that are checked

`to_si(10, 'bar', 'Pa')` converts a value and refuses a unit that measures something else (a length where a pressure is expected). `from_si`, `unit_convert(1, 'bar', 'psi')` and `unit_kind('W/(m K)')` ("thermal conductivity") work the same way. `temp_k(25, 'C')` and `temp_from_k` convert temperatures, which have an offset.

## Properties

- `fluid('water', T)` and `fluid('air', T, p)`: density, viscosity, conductivity, specific heat, Prandtl number. Water 0 to 100 °C, air 250 to 600 K; outside that it stops instead of extrapolating.
- `material('ss304')`: Young's modulus, Poisson's ratio, density, yield, conductivity, specific heat, expansion: room-temperature values from the same data sheets as Simulation. A real design uses the supplier's certified figures. Temperature curves are not built yet.

## Flow in pipes and channels

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, then the Colebrook equation for turbulent flow; the 2300 to 4000 range has no reliable formula and says so), `darcy_weisbach`, `minor_loss`, `pipe_flow` (round pipe, everything at once) and `rect_channel` (laminar rectangular ducts by the Shah and London fit).

## Heat transfer

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (picks laminar or turbulent and names the correlation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` and `ntu_for` (the effectiveness-NTU relations for counterflow, parallel, shell-and-tube, crossflow and a single changing stream) and `hx_size` (the size UA a duty needs; it says how much is possible when the duty cannot be met).

## Pressure parts

`allowable_stress` (yield over a safety factor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, on the hoop or the shear criterion) and `wall_sphere`. These are textbook margins, **not a pressure-vessel code calculation**: no corrosion allowance, joint efficiency or code factors.

## Gas dynamics

`isentropic` (the ratios at a Mach number), `mach_from_area`, `choked_flow`, `throat_area` and `exit_mach`, for a perfect gas without friction, heat or shocks.

## Check the result

`check_stress`, `check_thermal` and `check_flow` run PartCraft's own stress, conduction and flow solvers on a generated part from the script and read back the maximum stress and displacement, the temperatures and heat flow, and the permeability of a channel network. They change nothing in the solvers. The stress and temperature checks use voxels, so a curved face is a staircase and the stress at a sharp inner corner or under a point load depends on the voxel size.
