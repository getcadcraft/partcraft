---
title: Velde: vorms as afstande
summary: Wat 'n veld is (’n vorm wat as die afstand tot sy oppervlak gestoor word), hoe om een uit primitiewe vorms, booleaanse bewerkings, roosters en minimale oppervlakke in 'n skrif te bou, hoe dit 'n liggaam word, en waarom dieselfde skrif altyd dieselfde grepe gee.
keywords: veld, geteikende afstand, sdf, voxel, gyroid, tpms, rooster, boolean, verskuiwing, dop, vermenging, dubbele kontourering, deterministies, geslote, manifold, blokkie
from: faab7480
---

'n **Veld** beskryf 'n vorm deur die afstand van enige punt tot sy oppervlak: negatief binne, nul op die oppervlak, positief buite. 'n Sfeer met radius 5 is "die afstand tot die middelpunt minus 5". Vorms kombineer is rekenkunde op afstande: die unie is die kleinste van twee, die snyding die grootste, en om een vorm van 'n ander af te trek, is die grootste van die eerste en die negatiewe van die tweede. Om 'n vorm met 1 mm te laat groei, trek 1 van die afstand af; 'n holle wand is die afstand, teruggevou.

Dis waarom velde goed is vir roosters, kanale en geleidelike mure: die oppervlak van 'n gyroid is "die sinussom is nul", en 'n wand wat van 1 tot 3 mm oor die onderdeel verdik, is 'n getal wat oor die onderdeel verander.

## Van veld na liggaam

`to_body(field, h)` steek die veld op 'n rooster van punte `h` millimeter uitmekaar, hou net die punte naby die oppervlak (’n yl rooster van 8 × 8 × 8 blokkies), en bou die oppervlak deur **dubbele kontourering**: een hoekpunt per oppervlakselle, geplaas waar die oppervlakvlakke ontmoet, sodat 'n skerp rand skerp bly tot binne een voxel. Die oppervlak is geslote en elke rand word deur presies twee driehoeke gedeel; die verslag sê so. 'n Kenmerk dunner as ongeveer drie voxels kan saamtrek, en dan sê die verslag die liggaam is nie 'n geslote soliede nie, eerder as om dit weg te steek.

Die voxelgrootte is die akkuraatheid: die volume van 'n sfeer 25 voxels breed is binne 'n paar honderdstes van 'n persent, en 'n wand is net so waar as sy voxels. Hoe growwer die rooster, hoe vinniger gaan dit.

## Altyd dieselfde grepe

'n Veld het geen klok en geen ewekansige getal nie. Die sinus en kosinus van 'n gyroid, en elke eksponensiële, logaritme en mag in die biblioteek, word uit gewone rekenkunde bereken sodat Node, Chrome, Firefox en Safari dieselfde bisse gee. Die rooster word in 'n vaste volgorde deurloop, so dieselfde skrif met dieselfde insette gee greep-identiese maas en datablaaie, op enige rekenaar en oor enige aantal werkdrade. Dit word getoets, insluitend 'n blaaier teen Node.

## Waarheen nou

[Skryf 'n generator](topic:write-a-generator) bou 'n onderdeel met velde; [Die ingenieursbiblioteek](topic:engineering-library) bepaal die afmetings daarvan.
