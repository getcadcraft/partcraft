---
title: Obrir una peça estàndard
summary: Començar una peça a partir d'un cargol, una femella, una volandera, un passador, un coixinet o una clau dimensionats segons el seu estàndard, amb cada mida de la taula de l'estàndard com a configuració.
keywords: peça estàndard, peces estàndard, cargol, hexagonal, femella, volandera, passador, clavilla, coixinet, coixinet de boles, clau, clau paral·lela, subjecció, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, plantilla, biblioteca
from: b9e2811f
---

PartCraft obre peces mecàniques habituals ja fetes: les dimensions surten de les taules dels estàndards, i cada mida de la taula és una configuració a la qual podeu canviar.

## Obrir-ne una

1. Feu clic a {{ui:Peça estàndard}} al grup {{ui:Fitxer}}.
2. A {{ui:Peça}}, trieu el tipus, per exemple {{ui:Cargol de cap hexagonal (ISO 4017)}}.
3. A {{ui:Mida}}, trieu la mida, per exemple `M10 × 40`.
4. Feu clic a {{ui:Obre}}.

La peça s'obre com una peça nova, sense desar. Deseu-la per conservar-la ({{key:Mod+S}}).

| Peça | Estàndard | Paràmetres |
|---|---|---|
| Cargol de cap hexagonal, perno hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (polzades) | `d` mida de rosca, `s` distància entre cares, `k` alçada del cap, `l` longitud |
| Femella hexagonal | ISO 4032, ASME B18.2.2 (polzades) | `d`, `s`, `height` |
| Volandera plana | ISO 7089 | `d1` interior, `d2` exterior, `h` gruix |
| Passador paral·lel | ISO 2338 | `d`, `l` |
| Coixinet rígid de boles | ISO 15 | `d` diàmetre interior, `D` exterior, `B` amplada |
| Clau paral·lela | DIN 6885-1, forma A | `b` amplada, `h` alçada, `l` longitud |

## Canviar la mida

Cada mida és una configuració (vegeu [Configuracions i taules de disseny](topic:design-tables)): obriu {{ui:Paràmetres}} i trieu-ne una altra, o canvieu un paràmetre, com `l` per a un cargol més llarg, i deseu-la com a configuració pròpia.

## Què es modela

- Cargols i pernos: el cap hexagonal i una tija llisa. Femelles: l'hexàgon amb un forat de la mida nominal de la rosca. Les rosques no es modelen; afegiu-ne una amb {{ui:Rosca}} si la necessiteu (vegeu [Rosques](topic:threads)).
- Passadors: un cilindre llis; els xamfrans de l'extrem s'han deixat fora.
- Coixinets: només la envolupant exterior (un anell del diàmetre interior, el diàmetre exterior i l'amplada), que és el que cal per col·locar-ne un.
- Claus: la clau d'extrem arrodonit.

El material de la peça és acer, de manera que el panell de massa mostra el seu pes. Els engranatges encara no hi són: PartCraft no té una operació de dents, i un disc no és un engranatge. CadCraft dibuixa engranatges segons la convenció de dibuix, i la biblioteca els té com a plànols.
