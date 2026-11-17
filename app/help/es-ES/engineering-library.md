---
title: La biblioteca de ingeniería
summary: Fórmulas de libros de texto como scripts legibles, en unidades SI, con cada resultado y su origen: flujo en tuberías y canales, transmisión de calor e intercambiadores, elementos sometidos a presión, dinámica de gases, propiedades del agua y del aire, materiales y unidades comprobadas. Para qué sirve cada una y dónde deja de ser válida.
keywords: ingeniería, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, factor de fricción, Dittus-Boelter, Gnielinski, NTU, efectividad, LMTD, aleta, Barlow, Lamé, boquilla, isentrópico, Mach, flujo bloqueado, agua, aire, propiedades, material, fuentes
from: 786ef967
---

La biblioteca de ingeniería es un conjunto de scripts en la biblioteca del espacio de trabajo Script (`craftlib/eng`). Cada uno es una función que puede leer de arriba abajo, con una cabecera que indica su **método**, sus **unidades**, sus **límites**, sus **referencias** y una **comprobación** con un número resuelto. Usan unidades SI en todo momento y devuelven magnitudes que llevan una **unidad** y una **fuente**, de modo que una hoja de datos puede imprimir de dónde procede cada número.

## Unidades comprobadas

`to_si(10, 'bar', 'Pa')` convierte un valor y rechaza una unidad que mide otra cosa (una longitud donde se espera una presión). `from_si`, `unit_convert(1, 'bar', 'psi')` y `unit_kind('W/(m K)')` («conductividad térmica») funcionan igual. `temp_k(25, 'C')` y `temp_from_k` convierten temperaturas, que tienen un desplazamiento.

## Propiedades

- `fluid('water', T)` y `fluid('air', T, p)`: densidad, viscosidad, conductividad, calor específico, número de Prandtl. Agua de 0 a 100 °C, aire de 250 a 600 K; fuera de ese rango se detiene en lugar de extrapolar.
- `material('ss304')`: módulo de Young, coeficiente de Poisson, densidad, límite elástico, conductividad, calor específico, dilatación: valores a temperatura ambiente de las mismas hojas de datos que Simulación. Un diseño real usa las cifras certificadas del proveedor. Las curvas de temperatura todavía no están disponibles.

## Flujo en tuberías y canales

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, y después la ecuación de Colebrook para flujo turbulento; el rango de 2300 a 4000 no tiene una fórmula fiable y así se indica), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubería circular, todo a la vez) y `rect_channel` (conductos rectangulares laminares según el ajuste de Shah y London).

## Transmisión de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (elige laminar o turbulento y nombra la correlación), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` y `ntu_for` (las relaciones de efectividad-NTU para contracorriente, paralelo, carcasa y tubos, flujo cruzado y una corriente única que cambia) y `hx_size` (el tamaño UA que necesita una carga; indica cuánto es posible cuando la carga no se puede cumplir).

## Elementos sometidos a presión

`allowable_stress` (límite elástico dividido por un coeficiente de seguridad), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, según el criterio de la tensión circunferencial o de cortadura) y `wall_sphere`. Son márgenes de libro de texto, **no un cálculo según un código de recipientes a presión**: no incluyen sobreespesor por corrosión, eficiencia de unión ni coeficientes de código.

## Dinámica de gases

`isentropic` (las relaciones a un número de Mach), `mach_from_area`, `choked_flow`, `throat_area` y `exit_mach`, para un gas perfecto sin fricción, calor ni ondas de choque.

## Comprobar el resultado

`check_stress`, `check_thermal` y `check_flow` ejecutan los propios solvers de PartCraft de tensión, conducción y flujo sobre una pieza generada desde el script, y devuelven la tensión y el desplazamiento máximos, las temperaturas y el flujo de calor, y la permeabilidad de una red de canales. No modifican los solvers. Las comprobaciones de tensión y temperatura usan voxels, de modo que una cara curva es una escalera y la tensión en una esquina interior aguda o bajo una carga puntual depende del tamaño del voxel.
