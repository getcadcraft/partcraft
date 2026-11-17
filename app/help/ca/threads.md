---
title: Rosques en eixos i forats, dibuixades o modelades
summary: Poseu una rosca mètrica ISO o trapezoïdal a qualsevol cara rodona, un eix o un forat. Mantingueu-la cosmètica per als plànols, o modeleu la rosca helicoïdal real per a impressió 3D, amb una folgança perquè les peces impreses encaixin.
keywords: rosca, rosques, rosca modelada, helicoïdal, hèlix, cargol, perno, eix, forat, rosca externa, rosca interna, rosca cosmètica, rosca mètrica, trapezoïdal, acme, cargol de conducció, Tr16x4, M10, impressió 3D, imprimir, folgança, ajust, mà esquerra, roscat
from: 4f6401cc
---

{{ui:Rosca}} posa una rosca a les cares rodones: l'exterior d'un eix (una rosca externa) o l'interior d'un forat (una rosca interna). PartCraft ho distingeix per la cara.

Una rosca és **cosmètica** al principi: la cara queda llisa, la vista dibuixa la rosca com a cercles discontinus i el full del plànol la indica, com ara "M10×1.5 - 6g, rosca de 20 de llargada". Marqueu **Modelada** per tallar la rosca helicoïdal real a la peça, per a impressió 3D o un model que ha de tenir bon aspecte.

## Rosquem un eix o un forat

1. Feu l'eix o el forat a la mida de la rosca: un eix de Ø10 per a un perno M10, o un forat de Ø8.5 (la broca de roscar) per a una femella M10.
2. Feu clic a la cara rodona i trieu {{ui:Més}} › {{ui:Rosca}}. Sense cap cara rodona seleccionada, PartCraft us demana que feu clic a les cares i després a {{ui:Fet}}.
3. Al tauler de la dreta, comproveu la **Mida**. **Ajusta a la cara** tria la mida per si mateixa: per a un eix, la mida el diàmetre major de la qual és el de l'eix; per a un forat, la mida el diàmetre menor de la qual s'hi ajusta.

La rosca comença a l'extrem obert de la cara, on la peça no continua al llarg de l'eix: l'extrem lliure d'un eix, la boca d'un forat. **Comença per l'altre extrem** ho inverteix.

## Opcions

| Paràmetre | Opcions | Per defecte |
|---|---|---|
| **Forma** | ISO mètrica (60°), M1.6 a M64 de pas gruixut; trapezoïdal (Tr, 30°), Tr8×1.5 a Tr60×9 | ISO mètrica |
| **Mida** | Ajusta a la cara, o una mida de la llista | Ajusta a la cara |
| **Tota la cara** | Desmarqueu-la per indicar una **Longitud (mm)**, mesurada des de l'inici | Marcat |
| **Comença per l'altre extrem** | La rosca va de l'altre extrem de la cara | Desactivat |
| **Sentit** | Mà dreta o mà esquerra | Mà dreta |
| **Modelada** | Talla la rosca helicoïdal real | Desactivat |
| **Folgança (mm)** | Es mostra quan Modelada està marcada: quant més petita és la rosca d'un eix, i quant més gran la d'un forat, per tot el contorn | 0.1 |

Una mida que no escau a la cara es construeix igualment, tallada a la cara, i el tauler ho indica, com ara "Un eix de Ø12 mm no és Ø10 mm de M10". Diverses cares poden compartir una mateixa operació de Rosca; amb **Ajusta a la cara**, cadascuna té la seva pròpia mida.

## Rosques modelades per a impressió 3D

Una rosca modelada segueix el perfil bàsic estàndard: ISO 68-1 per a les mètriques (crestes i arrels planes, flancs de 60°), ISO 2901 per a les trapezoïdals (flancs de 30°). La **Folgança** desplaça tot el perfil cap a dins (un eix) o cap a fora (un forat) perquè les peces impreses s'enrosquin:

- **0.1 a 0.2 mm** va bé per a la majoria d'impressores. Imprimiu primer un perno i una femella de prova.
- **0** és el perfil estàndard, per a peces mecanitzades o per comprovar un ajust.

Un perno i una femella amb la mateixa folgança mai no es toquen pels flancs: la separació entre ells és el doble de la folgança, per tot el contorn.

:::tip
Els passos fins són difícils d'imprimir: M3 i inferiors, o un pas per sota de 0.5 mm, és proper al que pot dibuixar un broquet de 0.4 mm. Modeleu rosques més grans, i useu un inserit de fixació per calor o un forat roscat per a les petites.
:::

Una rosca modelada forma part del sòlid: les exportacions STL, 3MF i STEP la porten, i Mesura la mesura. Fa la peça més pesada de reconstruir: una rosca M10 de 20 de llarg són uns 150.000 triangles.

## Forats roscats

Un forat **Roscat (ISO mètric)** també té un interruptor **Modelada**, amb la mateixa **Folgança**. Vegeu [Fer forats i avellanats als punts de croquis](topic:holes).

## Quan una rosca no es construeix

- "Una rosca va sobre una cara rodona (un cilindre): un eix o un forat." La cara triada és plana o corba d'una altra manera.
- "Cap mida estàndard no encaixa amb una cara rodona de Ø0.6 mm: trieu una mida." Ajusta a la cara no ha trobat res dins d'un 12 % de la cara. Trieu una **Mida**, o canvieu la cara.
- "Una cara en què aquesta rosca s'apoiava ha desaparegut (…). Torneu a seleccionar-la." Un canvi anterior ha eliminat la cara. Feu clic a {{ui:Selecciona cares}} i torneu a fer clic a la cara.

:::note
Les rosques en polzades (UNC, UNF), les rosques de canonada, les rosques còniques, les sortides de rosca i els inicis de rosca amb xamfrà encara no estan implementats. El nucli exacte mostra una rosca modelada com a cosmètica.
:::
