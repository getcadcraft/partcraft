---
title: Maak 'n standaardonderdeel oop
summary: Begin 'n onderdeel vanaf 'n bout, skroef, moer, sluitring, pen, lager of sleutel wat volgens sy standaard bemaat is, met elke grootte van die standaard se tabel as 'n konfigurasie.
keywords: standaardonderdeel, standaardonderdele, bout, skroef, seskant, moer, sluitring, pen, dopelpen, lager, rollager, sleutel, parallelle sleutel, vasmaker, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, sjabloon, biblioteek
from: b9e2811f
---

PartCraft maak algemene meganiese onderdele klaar gemaak oop: die afmetings kom uit die standaarde se tabelle, en elke grootte in die tabel is 'n konfigurasie waarna jy kan oorskakel.

## Maak een oop

1. Klik {{ui:Standaardonderdeel}} in die Lêer-groep.
2. In {{ui:Onderdeel}}, kies die soort, byvoorbeeld {{ui:Seskantkopskroef (ISO 4017)}}.
3. In {{ui:Grootte}}, kies die grootte, byvoorbeeld `M10 × 40`.
4. Klik {{ui:Maak oop}}.

Die onderdeel maak oop as 'n nuwe, ongestoorde onderdeel. Stoor dit om dit te hou ({{key:Mod+S}}).

| Onderdeel | Standaard | Parameters |
|---|---|---|
| Seskantkopskroef, seskantbout | ISO 4017, ISO 4014, ASME B18.2.1 (duim) | `d` draadgrootte, `s` oor platte, `k` kophoogte, `l` lengte |
| Seskantmoer | ISO 4032, ASME B18.2.2 (duim) | `d`, `s`, `height` |
| Gewone sluitring | ISO 7089 | `d1` binne, `d2` buite, `h` dikte |
| Parallelle pen | ISO 2338 | `d`, `l` |
| Diepgroef-kogellager | ISO 15 | `d` boring, `D` buite, `B` breedte |
| Parallelle sleutel | DIN 6885-1, vorm A | `b` breedte, `h` hoogte, `l` lengte |

## Verander die grootte

Elke grootte is 'n konfigurasie (sien [Konfigurasies en ontwerptabelle](topic:design-tables)): maak {{ui:Parameters}} oop en kies 'n ander een, of verander 'n parameter, soos `l` vir 'n langer skroef, en stoor dit as 'n eie konfigurasie.

## Wat gemodelleer word

- Skroewe en boute: die seskantkop en 'n gewone skag. Moere: die seskant met 'n gat van die draad se nominale grootte. Drade word nie gemodelleer nie; voeg een by met {{ui:Draad}} as jy dit nodig het (sien [Drade](topic:threads)).
- Penne: 'n gewone silinder; die eindskuinsings word uitgelaat.
- Lagers: slegs die buitenste omhulsel ('n ring van die boring, die buitedeursnee en die breedte), wat jy nodig het om een te plaas.
- Sleutels: die sleutel met ronde punte.

Die onderdeel se materiaal is staal, so die massapaneel wys sy gewig. Ratte is nog nie hier nie: PartCraft het geen tandkenmerk nie, en 'n skyf is nie 'n rat nie. CadCraft teken ratte volgens die tekenkonvensie, en die biblioteek het hulle as tekeninge.
