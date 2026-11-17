---
title: Fer forats i rebaixos als punts d'un croquis
summary: Poseu punts en un croquis sobre una cara, feu forats simples, rebaixats, avellanats o roscats (mètrics ISO) a cada punt, definiu el diàmetre i la profunditat, i arregleu els forats que es fan en la direcció equivocada.
keywords: forat, assistent de forats, trepant, rosca modelada, impressió 3D, rebaix, cbore, avellanat, csink, roscat, rosca, diàmetre de trepant, rosca mètrica, M6, passant de tot, forat cec, forat de cargol, punts, centres de forat
from: 8e1eef83
---

{{ui:Hole}} fa un forat a cada punt solt d'un croquis. Un punt solt és un punt fet amb l'eina Punt, no pas l'extrem d'una línia ni el centre d'un cercle.

## Feu forats en una cara

1. Feu clic a la cara plana on voleu fer el forat, i després trieu {{ui:Sketch on this face}}.
2. Premeu {{key:P}} i feu clic on va cada forat. Doneu cotes als punts des de les arestes o des de l'origen si la seva posició importa (vegeu [Definiu totalment un croquis](topic:relations-dimensions)).
3. Trieu {{ui:Exit}}.
4. Trieu {{ui:Hole}}.

Els forats travessen la peça, de 6 mm d'amplada. El panell de la dreta mostra **Forats**: quants se n'han fet, "un per punt del croquis".

**Un sol forat, ràpid:** feu clic a la cara plana on va el forat i trieu {{ui:Hole here}} al panell de la dreta. PartCraft afegeix un croquis a la cara amb un punt on heu fet clic i un Forat que travessa la peça, en un sol pas. Escriviu un número de seguida i premeu {{key:Enter}} per al seu diàmetre. Per situar-lo exactament, obriu el nou croquis i doneu-li una cota al punt.

**Quin croquis s'utilitza:** el que acabeu de tancar o el seleccionat; altrament, el croquis no utilitzat més recent que tingui punts solts. Si no n'hi ha cap: "Feu primer un croquis amb punts on van els forats (Croquis en una cara, després Punt)."

## Configuració

| Paràmetre | Opcions | Per defecte |
|---|---|---|
| **Tipus** | Simple, Rebaixat, Avellanat, Roscat (mètric ISO) | Simple |
| **Diàmetre (mm)** | El diàmetre del forat | 6 |
| **Passant de tot** | Marcat: travessa tota la peça. Desmarqueu-lo per a un forat cec | Marcat |
| **Profunditat (mm)** | Es mostra quan Passant de tot està desmarcat | 10 |
| **Diàmetre del rebaix ⌀** | Es mostra per a Rebaixat: el diàmetre del rebaix més ample | 11 |
| **Profunditat del rebaix** | Es mostra per a Rebaixat | 6 |
| **Inverteix la direcció** | Perfora cap a l'altre costat del pla del croquis | Desactivat |

Els forats perforen el material, en angle recte amb el pla del croquis. La profunditat d'un forat cec es mesura des del pla del croquis; el seu fons és pla.

## Un forat de cargol rebaixat

1. Feu els forats com s'ha indicat més amunt.
2. Definiu **Tipus** a **Rebaixat**.
3. Definiu **Diàmetre (mm)** a `6.6` (joc per a un cargol M6), **Diàmetre del rebaix ⌀** a `11` i **Profunditat del rebaix** a `6.5`.

El rebaix ha de ser més ample que el forat ("El rebaix ha de ser més ample que el forat.") i, per a un forat cec, menys profund que el forat ("El rebaix ha de ser menys profund que el forat.").

## Un cercle de cargols

Per a forats repartits uniformement al voltant d'un centre, feu **un** forat i fes-ne un patró: seleccioneu la característica Forat i després trieu {{ui:Circular}} (vegeu [Característiques de patró i simetria](topic:patterns-mirror)). El patró segueix quan canvieu la mida del forat.

## Quan els forats van en la direcció equivocada

- "No hi ha res on perforar en aquest costat del croquis. Proveu d'invertir la direcció." El croquis és a l'altre costat del material. Marqueu **Inverteix la direcció**.
- "Poseu punts del croquis on van els forats (eina Punt), després feu el forat." El croquis no té punts solts. Els extrems de les línies i els centres dels cercles no compten.
- "Encara no hi ha res per perforar." Un forat necessita un sòlid. Feu-ne primer un cos sortint.

## Forats en conjunts

Cada forat té un eix. En un conjunt, **Centra a** pot posar una unió a l'eix d'un forat, enumerat com "Forat1, forat 2", perquè una peça de pern o de cargol s'alineï amb ell. Vegeu [Construir un conjunt](topic:build-assembly).

## Forats avellanats

Definiu **Tipus** a **Avellanat**, després **Diàmetre de l'avellanat ⌀** (a la superfície) i **Angle de l'avellanat**: 90° (cargols de cap pla ISO mètrics) o 82° (cargols en polzades). Preneu el diàmetre de l'avellanat de les dades del fabricant del cargol (una mica més que el diàmetre del cap del cargol). La cara del con s'anomena "avellanat" als panells.

## Forats roscats

Definiu **Tipus** a **Roscat (mètric ISO)** i trieu la **Rosca**, de M2 a M24 de pas gruixut. El forat es fa amb la mida de trepant de rosca de la taula següent (diàmetre nominal menys pas, fins a la sèrie de trepants, tal com la norma ISO 2306 indica per a una rosca 6H); la casella **Diàmetre (mm)** no s'utilitza. Per a un forat cec, **Profunditat de la rosca (mm)** defineix fins a quina profunditat arriba la rosca.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pas | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Diàmetre del trepant ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

La rosca és **cosmètica** al principi: el model té el forat perforat, la vista dibuixa el diàmetre major de la rosca com a cercles de traç discontinu, i el full del dibuix porta la indicació com a nota, com "4× M8×1.25 - 6H, rosca passant". STEP només exporta el forat perforat.

Marqueu **Modelada** per tallar la rosca helicoidal real dins del forat, per a la impressió 3D. **Joc (mm)** la fa tant més gran per tot el voltant, de manera que un pern imprès encaixa: 0.1 a 0.2 mm va bé per a la majoria d'impressores. La indicació llavors acaba amb "(modelada)". Vegeu [Rosques en eixos i perforacions, dibuixades o modelades](topic:threads), que també posa rosques en eixos.

:::note
Els forats contraperforats, les rosques en polzades i les rosques de canonada encara no estan implementats.
:::
