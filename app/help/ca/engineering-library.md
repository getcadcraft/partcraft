---
title: La biblioteca d'enginyeria
summary: Fórmules de llibre de text com a scripts llegibles, en unitats SI, amb cada resultat acompanyat de la seva font: flux en canonades i canals, transmissió de calor i intercanviadors, parts a pressió, dinàmica de gasos, propietats de l'aigua i de l'aire, materials, i unitats que es comproven. Per a què serveix cadascuna i on s'acaba.
keywords: enginyeria, biblioteca, unitats, Darcy-Weisbach, Colebrook, Reynolds, factor de fricció, Dittus-Boelter, Gnielinski, NTU, efectivitat, LMTD, aleta, Barlow, Lamé, broquet, isentròpic, Mach, flux ofegat, aigua, aire, propietats, material, fonts
from: 786ef967
---

La biblioteca d'enginyeria és un conjunt de scripts a la biblioteca de l'espai de treball Script (`craftlib/eng`). Cadascun és una funció que podeu llegir de dalt a baix, amb una capçalera que dóna el seu **mètode**, les seves **unitats**, els seus **límits**, les seves **referències** i una **comprovació** amb un número treballat. Usen unitats SI en tot i retornen magnituds que porten una **unitat** i una **font**, de manera que un full de dades pot imprimir d'on surt cada número.

## Unitats comprovades

`to_si(10, 'bar', 'Pa')` converteix un valor i rebutja una unitat que mesura una altra cosa (una longitud quan s'espera una pressió). `from_si`, `unit_convert(1, 'bar', 'psi')` i `unit_kind('W/(m K)')` («conductivitat tèrmica») funcionen igual. `temp_k(25, 'C')` i `temp_from_k` converteixen temperatures, que tenen un desplaçament.

## Propietats

- `fluid('water', T)` i `fluid('air', T, p)`: densitat, viscositat, conductivitat, calor específica, número de Prandtl. Aigua de 0 a 100 °C, aire de 250 a 600 K; fora d'aquest rang s'atura en lloc d'extrapolar.
- `material('ss304')`: mòdul de Young, coeficient de Poisson, densitat, límit elàstic, conductivitat, calor específica, dilatació: valors a temperatura ambient dels mateixos fulls de dades que Simulació. Un disseny real usa les xifres certificades del proveïdor. Les corbes de temperatura encara no estan implementades.

## Flux en canonades i canals

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, després l'equació de Colebrook per al flux turbulent; el rang de 2300 a 4000 no té cap fórmula fiable, i ho diu), `darcy_weisbach`, `minor_loss`, `pipe_flow` (canonada rodona, tot alhora) i `rect_channel` (conductes rectangulars laminars amb l'ajust de Shah i London).

## Transmissió de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (tria laminar o turbulent i en nomena la correlació), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` i `ntu_for` (les relacions d'efectivitat-NTU per a contracorrent, paral·lel, carcassa i tubs, flux creuat i un únic corrent que canvia) i `hx_size` (la mida UA que necessita una càrrega; diu quant és possible quan la càrrega no es pot complir).

## Parts a pressió

`allowable_stress` (límit elàstic dividit per un factor de seguretat), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pel criteri de la tensió circumferencial o de cisallament) i `wall_sphere`. Són marges de llibre de text, **no un càlcul de codi per a recipients a pressió**: sense marge de corrosió, eficiència d'unió ni factors de codi.

## Dinàmica de gasos

`isentropic` (les raons a un número de Mach), `mach_from_area`, `choked_flow`, `throat_area` i `exit_mach`, per a un gas perfecte sense fricció, calor ni xocs.

## Comproveu el resultat

`check_stress`, `check_thermal` i `check_flow` executen els propis solucionadors de tensió, conducció i flux de PartCraft sobre una peça generada des de l'script, i llegeixen la tensió i el desplaçament màxims, les temperatures i el flux de calor, i la permeabilitat d'una xarxa de canals. No canvien res als solucionadors. Les comprovacions de tensió i de temperatura usen vòxels, de manera que una cara corba és escalonada, i la tensió en un angle interior viu o sota una càrrega puntual depèn de la mida del vòxel.
