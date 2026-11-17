---
title: A biblioteca de enxeñaría
summary: Fórmulas de manual como scripts lexibles, en unidades SI, con cada resultado e a súa fonte: fluxo en tubos e canles, transferencia de calor e intercambiadores, partes sometidas a presión, dinámica de gases, propiedades da auga e do aire, materiais e unidades comprobadas. Para que serve cada unha e onde deixa de servir.
keywords: enxeñaría, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, factor de fricción, Dittus-Boelter, Gnielinski, NTU, efectividade, LMTD, aleta, Barlow, Lamé, boquilla, isentrópico, Mach, fluxo bloqueado, auga, aire, propiedades, material, fontes
from: 786ef967
---

A biblioteca de enxeñaría é un conxunto de scripts na biblioteca do espazo de traballo Script (`craftlib/eng`). Cada un é unha función que se pode ler de arriba abaixo, cunha cabeceira que indica o seu **método**, as súas **unidades**, os seus **límites**, as súas **referencias** e unha **comprobación** cun número traballado. Usan unidades SI en todo e devolven cantidades que levan unha **unidade** e unha **fonte**, así que unha folla de datos pode imprimir de onde vén cada número.

## Unidades comprobadas

`to_si(10, 'bar', 'Pa')` converte un valor e rexeita unha unidade que mide outra cousa (unha lonxitude onde se espera unha presión). `from_si`, `unit_convert(1, 'bar', 'psi')` e `unit_kind('W/(m K)')` («condutividade térmica») funcionan igual. `temp_k(25, 'C')` e `temp_from_k` converten temperaturas, que teñen un desfase.

## Propiedades

- `fluid('water', T)` e `fluid('air', T, p)`: densidade, viscosidade, condutividade, calor específico, número de Prandtl. Auga de 0 a 100 °C, aire de 250 a 600 K; fóra desas faixas para, en vez de extrapolar.
- `material('ss304')`: módulo de Young, coeficiente de Poisson, densidade, límite elástico, condutividade, calor específico, dilatación: valores a temperatura ambiente das mesmas follas de datos que Simulación. Un deseño real usa as cifras certificadas do fornecedor. As curvas de temperatura aínda non están creadas.

## Fluxo en tubos e canles

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, despois a ecuación de Colebrook para o fluxo turbulento; o intervalo de 2300 a 4000 non ten unha fórmula fiable, e así o indica), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubo redondo, todo á vez) e `rect_channel` (conductos rectangulares laminares polo axuste de Shah e London).

## Transferencia de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (escolle laminar ou turbulento e nomea a correlación), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` e `ntu_for` (as relacións de efectividade-NTU para contracorrente, paralelo, carcasa e tubos, corrente cruzada e unha soa corrente que cambia) e `hx_size` (o tamaño UA que precisa unha carga; indica canto é posible cando a carga non se pode cumprir).

## Partes sometidas a presión

`allowable_stress` (límite elástico dividido por un coeficiente de seguridade), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, co criterio de tensión circunferencial ou de cortante) e `wall_sphere`. Son marxes de manual, **non un cálculo de código de recipientes a presión**: sen marxe de corrosión, eficiencia de unión nin factores de código.

## Dinámica de gases

`isentropic` (as razóns a un número de Mach), `mach_from_area`, `choked_flow`, `throat_area` e `exit_mach`, para un gas perfecto sen fricción, calor nin ondas de choque.

## Comprobar o resultado

`check_stress`, `check_thermal` e `check_flow` executan os resolvedores propios de PartCraft de tensión, condución e fluxo sobre unha peza xerada desde o script, e len de volta a tensión e o desprazamento máximos, as temperaturas e o fluxo de calor, e a permeabilidade dunha rede de canles. Non cambian nada nos resolvedores. As comprobacións de tensión e temperatura usan voxels, así que unha cara curva é unha escaleira, e a tensión nunha esquina interior aguda ou baixo unha carga puntual depende do tamaño do voxel.
