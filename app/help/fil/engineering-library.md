---
title: Ang engineering library
summary: Mga textbook formula bilang mababasang script, sa SI units, bawat resulta ay may pinagmulan: daloy sa pipe at channel, heat transfer at heat exchanger, pressure parts, gas dynamics, properties ng tubig at hangin, materyal, at mga unit na sinusuri. Para saan ang bawat isa at saan ito humihinto.
keywords: engineering, library, units, Darcy-Weisbach, Colebrook, Reynolds, friction factor, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, fin, Barlow, Lame, nozzle, isentropic, Mach, choked flow, water, air, properties, material, sources, tubig, hangin, materyal, pinagmulan
from: 786ef967
---

Ang engineering library ay set ng mga script sa library ng Script workspace (`craftlib/eng`). Bawat isa ay function na mababasa mo mula itaas hanggang ibaba, na may header na nagbibigay ng **method**, **units**, **limits**, **references** nito at isang **check** na may worked number. Gumagamit sila ng SI units sa buong bahagi, at nagbabalik ng dami na may dalang **unit** at **source**, kaya maipapakita ng data sheet kung saan galing ang bawat numero.

## Mga unit na sinusuri

`to_si(10, 'bar', 'Pa')` ay nagko-convert ng value at tumatanggi sa unit na sumusukat ng ibang bagay (haba kung saan kailangan ang pressure). Pareho ang gawi ng `from_si`, `unit_convert(1, 'bar', 'psi')`, at `unit_kind('W/(m K)')` ("thermal conductivity"). Ang `temp_k(25, 'C')` at `temp_from_k` ay nagko-convert ng temperatura, na may offset.

## Properties

- `fluid('water', T)` at `fluid('air', T, p)`: density, viscosity, conductivity, specific heat, Prandtl number. Tubig 0 hanggang 100 °C, hangin 250 hanggang 600 K; sa labas niyan, humihinto ito sa halip na mag-extrapolate.
- `material('ss304')`: Young's modulus, Poisson's ratio, density, yield, conductivity, specific heat, expansion: mga halagang room-temperature mula sa parehong data sheet ng Simulation. Gumagamit ang totoong disenyo ng certified figures ng supplier. Hindi pa nagagawa ang mga temperature curve.

## Daloy sa mga pipe at channel

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, saka ang Colebrook equation para sa turbulent flow; ang saklaw na 2300 hanggang 4000 ay walang maaasahang formula at sinasabi ito), `darcy_weisbach`, `minor_loss`, `pipe_flow` (round pipe, lahat nang sabay), at `rect_channel` (laminar rectangular duct sa pamamagitan ng Shah and London fit).

## Heat transfer

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (pumipili ng laminar o turbulent at pinangalanan ang correlation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness`, at `ntu_for` (ang effectiveness-NTU relation para sa counterflow, parallel, shell-and-tube, crossflow, at isang nagbabagong stream), at `hx_size` (ang UA size na kailangan ng duty; sinasabi nito kung gaano kalaki ang posible kapag hindi matutugunan ang duty).

## Pressure parts

`allowable_stress` (yield hati sa safety factor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, sa hoop o shear criterion), at `wall_sphere`. Ito ay textbook margins, **hindi pressure-vessel code calculation**: walang corrosion allowance, joint efficiency, o code factor.

## Gas dynamics

`isentropic` (ang mga ratio sa isang Mach number), `mach_from_area`, `choked_flow`, `throat_area`, at `exit_mach`, para sa perfect gas na walang friction, init, o shock.

## Suriin ang resulta

`check_stress`, `check_thermal`, at `check_flow` ay nagpapatakbo ng sariling stress, conduction, at flow solver ng PartCraft sa generated part mula sa script, at binabasa pabalik ang maximum stress at displacement, ang mga temperatura at heat flow, at ang permeability ng channel network. Wala silang binabago sa mga solver. Gumagamit ng voxel ang stress at temperature check, kaya ang curved face ay parang hagdan at ang stress sa matalas na panloob na sulok o sa ilalim ng point load ay nakadepende sa laki ng voxel.
