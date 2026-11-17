---
title: Biblioteca de ingeniería
summary: Fórmulas de libro legibles como scripts, SI unidad, cada resultado fuente ndive: caño ha canal flujo, transferencia de calor ha intercambiadores, piezas a presión, dinámica de gases, propiedades agua ha aire, materiales, ha unidades verificadas. Mba'épa ojeporu ha mo'ã oipe'a.
keywords: ingeniería, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, factor de fricción, Dittus-Boelter, Gnielinski, NTU, efectividad, LMTD, aleta, Barlow, Lamé, boquilla, isentrópico, Mach, flujo bloqueado, agua, aire, propiedades, material, fuentes
from: 786ef967
---

Biblioteca de ingeniería scripts conjunto ha, Script espacio de trabajo biblioteca-pe (`craftlib/eng`). Cada uno función ha, arriba gui abajo legible, encabezado **método**, **unidades**, **límites**, **referencias** ha **verificación** número trabajado ndive ohechauka. SI unidad opa-pe ojeporu, cantidad **unidad** ha **fuente** ndive devuelve, hoja de datos mbaʼéichapa ojekuaa opa número ohechauka.

## Unidades verificadas

`to_si(10, 'bar', 'Pa')` valor ojemoambue ha unidad refrenda (largo presión-pe mbovy'ỹ ojeporu). `from_si`, `unit_convert(1, 'bar', 'psi')` ha `unit_kind('W/(m K)')` ("conductividad térmica") mismo. `temp_k(25, 'C')` ha `temp_from_k` temperatura ojemoambue, desplazamiento ojeikuaa.

## Propiedades

- `fluid('water', T)` ha `fluid('air', T, p)`: densidad, viscosidad, conductividad, calor específico, número de Prandtl. Agua 0 gui 100 °C, aire 250 gui 600 K; mboyve ko'ã ndovaeri hasa, extrapolación ndojejapói.
- `material('ss304')`: módulo de Young, relación de Poisson, densidad, fluencia, conductividad, calor específico, dilatación: temperatura ambiente valores simulación hoja de datos mismo. Pieza real proveedor certificado cifra ojeporu. Temperatura curvas ndaipóri.

## Flujo caños ha canales

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, upéi turbulento Colebrook ecuación; 2300 gui 4000 rango fórmula confiable ndaipóri, ha'e ohechauka), `darcy_weisbach`, `minor_loss`, `pipe_flow` (caño redondo, opa mboyve) ha `rect_channel` (conducto rectangular laminar Shah ha London ajuste rehe).

## Transferencia de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (laminar térã turbulento elige ha correlación ohechauka), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ha `ntu_for` (efectividad-NTU relación contraflujo, paralelo, carcasa y tubo, flujo cruzado ha flujo cambiante único) ha `hx_size` (carga necesita tamaño UA; carga ndovaeri ojeikuaa posible cuánto ohechauka).

## Piezas a presión

`allowable_stress` (fluencia dividida seguridad factor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, aro térã corte criterio rehe) ha `wall_sphere`. Ko'ã libro margen, **ndaha'éi recipiente a presión código cálculo**: ndaipóri corrosión margen, junta eficiencia térã código factor.

## Dinámica de gases

`isentropic` (Mach número relación), `mach_from_area`, `choked_flow`, `throat_area` ha `exit_mach`, gas perfecto fricción, calor térã choque ndaipóri.

## Resultado verificación

`check_stress`, `check_thermal` ha `check_flow` PartCraft tensión, conducción ha flujo solver script generado pieza-pe ojeporu ha tensión máxima, desplazamiento, temperatura, calor flujo ha canal red permeabilidad ohechauka. Solver-pe ndojejapói cambio. Tensión ha temperatura verificación voxel ojeporu, upévare curva cara escalera ha agudo esquina tensión punto carga voxel tamaño rehe.
