---
title: La biblioteca de ingeniería
summary: Fórmulas de libro de texto como scripts legibles, en unidades SI, con cada resultado y su fuente: flujo en tuberías y canales, transferencia de calor e intercambiadores de calor, piezas a presión, dinámica de gases, propiedades del agua y del aire, materiales y unidades verificadas. Para qué sirve cada una y dónde deja de ser válida.
keywords: ingeniería, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, factor de fricción, Dittus-Boelter, Gnielinski, NTU, efectividad, LMTD, aleta, Barlow, Lamé, tobera, isentrópico, Mach, flujo bloqueado, agua, aire, propiedades, material, fuentes
from: 786ef967
---

La biblioteca de ingeniería es un conjunto de scripts en la biblioteca del espacio de trabajo Script (`craftlib/eng`). Cada uno es una función que puede leer de arriba abajo, con un encabezado que indica su **método**, sus **unidades**, sus **límites**, sus **referencias** y una **verificación** con un número resuelto. Usan unidades SI en todo y devuelven cantidades que llevan una **unidad** y una **fuente**, así que una ficha de datos puede imprimir de dónde sale cada número.

## Unidades verificadas

`to_si(10, 'bar', 'Pa')` convierte un valor y rechaza una unidad que mida otra cosa (una longitud donde se espera una presión). `from_si`, `unit_convert(1, 'bar', 'psi')` y `unit_kind('W/(m K)')` ("conductividad térmica") funcionan igual. `temp_k(25, 'C')` y `temp_from_k` convierten temperaturas, que tienen un desfase.

## Propiedades

- `fluid('water', T)` y `fluid('air', T, p)`: densidad, viscosidad, conductividad, calor específico, número de Prandtl. Agua de 0 a 100 °C, aire de 250 a 600 K; fuera de ese rango se detiene en lugar de extrapolar.
- `material('ss304')`: módulo de Young, razón de Poisson, densidad, límite de fluencia, conductividad, calor específico, dilatación: valores a temperatura ambiente de las mismas fichas técnicas que usa Simulación. Un diseño real usa las cifras certificadas del proveedor. Las curvas de temperatura aún no están construidas.

## Flujo en tuberías y canales

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, luego la ecuación de Colebrook para flujo turbulento; el rango de 2300 a 4000 no tiene una fórmula confiable y lo indica), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubería circular, todo a la vez) y `rect_channel` (conductos rectangulares laminares por el ajuste de Shah y London).

## Transferencia de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (elige laminar o turbulento y nombra la correlación), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` y `ntu_for` (las relaciones de efectividad-NTU para contraflujo, flujo paralelo, carcasa y tubos, flujo cruzado y una sola corriente que cambia), y `hx_size` (el tamaño UA que necesita una carga; indica cuánto es posible cuando la carga no puede cumplirse).

## Piezas a presión

`allowable_stress` (límite de fluencia entre un factor de seguridad), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, con el criterio de esfuerzo circunferencial o de cortante) y `wall_sphere`. Son márgenes de libro de texto, **no un cálculo según código de recipientes a presión**: no incluyen margen de corrosión, eficiencia de junta ni factores de código.

## Dinámica de gases

`isentropic` (las razones a un número de Mach), `mach_from_area`, `choked_flow`, `throat_area` y `exit_mach`, para un gas perfecto sin fricción, calor ni ondas de choque.

## Verifique el resultado

`check_stress`, `check_thermal` y `check_flow` ejecutan los propios solucionadores de esfuerzo, conducción y flujo de PartCraft sobre una pieza generada desde el script, y leen de vuelta el esfuerzo y el desplazamiento máximos, las temperaturas y el flujo de calor, y la permeabilidad de una red de canales. No cambian nada en los solucionadores. Las verificaciones de esfuerzo y temperatura usan vóxeles, así que una cara curva es una escalera, y el esfuerzo en una esquina interior aguda o bajo una carga puntual depende del tamaño del vóxel.
