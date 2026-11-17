---
title: Draai 'n gedraaide onderdeel
summary: Skets die helfte van 'n profiel langs 'n middellyn, draai dit in 'n ronde onderdeel, kies die as en hoek, en gebruik 'n gedraaide snit vir groewe.
keywords: draai, gedraaide boss, gedraaide snit, gedraaide onderdeel, draaibank, as, middellyn, groef, hoek, draaisnit
from: 593b6929
---

{{ui:Draai om}} draai 'n profiel om 'n as, soos 'n onderdeel wat op 'n draaibank gemaak is: asse, katrolle, flense, knoppe. **Gedraaide snit** (in die Kenmerke-groep se {{ui:Meer}}-kieslys) draai 'n profiel om materiaal te verwyder, vir groewe en holtes.

## Draai 'n trapsgewyse as

1. Skets op **Voorvlak**.
2. Druk {{key:N}} vir {{ui:Middellyn}}. Begin by die oorsprong en klik 'n punt reguit regs, byvoorbeeld 100 mm langs. Dit is die as. Dit is gestippel: konstruksiegeometrie is nie deel van die profiel nie.
3. Druk {{key:L}} vir Lyn. Teken die **halwe** profiel bo die middellyn as een geslote lus: begin op die middellyn, gaan op, stap langs, en kom terug af na die middellyn, en dan langs dit terug na die begin. Die punte moet aansluit: die lus moet geslote wees.
4. Gee die radiusse (hoogtes bo die middellyn) en die lengtes 'n maat. 'n Hoogte van 10 bo die middellyn maak 'n deursnee van 20.
5. Kies {{ui:Verlaat}}.
6. Kies {{ui:Draai om}}. Die as verskyn, 'n volle omwenteling.

Die profiel moet aan een kant van die as bly. As dit kruis: "Die profiel kruis die as. Hou dit aan een kant van die middellyn." 'n Profielkant mag op die as lê.

## Instellings

| Instelling | Wat dit doen | Verstek |
|---|---|---|
| **Bewerking** | Boss (voeg materiaal by), Snit (verwyder materiaal), Snyding (hou die oorvleueling) of Nuwe liggaam | Boss vir {{ui:Draai om}}, Snit vir {{ui:Meer}} › {{ui:Gedraaide snit}} |
| **Hoek (°)** | Hoe ver om te draai, van net bo 0 tot 360 | 360 |
| **As** | Eerste middellyn, of enige lyn of middellyn in die skets, gelys as "Centerline 1 (l1)" of "Line 3 (l3)" | Eerste middellyn |

'n Gedeeltelike hoek maak 'n wig, gedraai vanaf die skets se vlak in een rigting.

As die skets geen middellyn het en jy laat **As** op Eerste middellyn: "Teken 'n middellyn (...)" in die skets om om te draai. Jy kan ook 'n soliede lyn van die profiel as die as kies.

## Snit 'n groef

1. Met die as gebou, open 'n nuwe skets op **Voorvlak** (dieselfde vlak as die as se skets).
2. Teken 'n middellyn langs dieselfde as: begin dit by die oorsprong en hou dit plat sodat dit 'n H kry, of tik dit met **Voeg by volgens koördinate** (byvoorbeeld van `0, 0` tot `100, 0`). 'n Nuwe skets kan nie aan ander skets se lyne vasmaak nie.
3. Teken 'n klein geslote reghoek wat die as se kant oorvleuel waar die groef gaan.
4. Kies {{ui:Verlaat}}, dan {{ui:Meer}} › {{ui:Gedraaide snit}}.

## Gedraaide vlakke in samestellings

'n Draai het 'n as wat ander kenmerke en samestellings kan gebruik:

- 'n **Sirkulêre** patroon gebruik standaard die laaste draai se as (sien [Patroon- en spieëlkenmerke](topic:patterns-mirror));
- in 'n samestelling begin 'n skarnier tussen vlakke wat deur draaiings gemaak is as 'n **draai-skarnier**, en **Sentreer op** bied "Axis of Revolve1" aan (sien [Bou 'n samestelling](topic:build-assembly)).

## Ware krommes en fasette

PartCraft bou 'n draai met die meshkern (die statusbalk-kaartjie sê "Mesh kernel"): ronde vorms is plat fasette, standaard 64 per omwenteling, en volumes is 'n bietjie onder die ware waarde (ongeveer 0.16 % by 64). Die aansig en STL-, 3MF- en STEP-uitvoere bestaan uit daardie fasette: stel **Krommes** (klik op leë ruimte, en dan die regterpaneel) op Fyn (128) of Baie fyn (256) vir gladder. Ware silinders, keëls en torusse benodig 'n presiese kern: nog nie gebou in hierdie weergawe nie. Sien [Die meshkern](topic:solid-kernels).
