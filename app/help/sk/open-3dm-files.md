---
title: Otvorenie modelu .3dm ako telesa
summary: Preneste siete, polyplochy a bloky zo súboru .3dm do PartCraft ako jedno teleso, ktoré môžete rezať, dopĺňať a kresliť naň náčrt; odkiaľ pochádzajú trojuholníky a čo sa vynechá.
keywords: 3dm, nurbs, polyplocha, brep, plochy, sieť na vykreslenie, vytiahnutie, bloky, import, sieť na teleso, jednotky, importované teleso
from: 8ae9571b
---

PartCraft otvára súbory `.3dm` ako **telesá**, rovnako ako otvára [sieť STL, OBJ alebo 3MF](topic:open-meshes). Teleso funguje ako každé iné teleso: rezať, dopĺňať, vŕtať, vzorovať a kresliť náčrt na jeho ploché plochy. Nemá vlastnú históriu.

## Otvorenie súboru

1. Vyberte {{ui:Otvoriť}} alebo stlačte {{key:Mod+O}} a vyberte súbor `.3dm`. Alebo ho pustite do 3D pohľadu.
2. PartCraft ho načíta a ukáže, čo našiel: koľko objektov s plochami sa načíta, koľko plôch pochádza zo sietí uložených v súbore a koľko ich PartCraft rozdelil na trojuholníky, každú opravu a či výsledok sa **uzatvára**.
3. Skontrolujte **Jednotky v súbore** (súbor ich uvádza sám; jednotka, ktorú PartCraft nepozná, napríklad yardy, sa prevedie na milimetre) a **Smer hore v súbore**.
4. Vyberte {{ui:Otvoriť ako teleso}} alebo **Použiť na** a {{ui:Pridať do tejto súčiastky}}, keď súčiastka už má prvky.

## Odkiaľ pochádzajú trojuholníky

PartCraft v tejto verzii vytvára telesá z trojuholníkov, takže každá plocha v súbore sa stane malými rovinnými plochami. Pre každú plochu polyplochy (a každé vytiahnutie) použije **uloženú sieť na vykreslenie** zo súboru, ak tam je, inak plochu **sám rozdelí na trojuholníky** (roviny, NURBS plochy, plochy rotácie, vytiahnuté krivky a vytiahnutia, orezané ich hranami). Plochy jednej polyplochy zdieľajú body svojich hrán, takže uzavretá polyplocha sa načíta ako uzavretá. Plocha druhu, ktorý PartCraft zatiaľ nečíta, sa vynechá a dialóg povie, koľko ich bolo a akého druhu; výsledok potom zväčša nie je uzavretý.

## Všetko v súbore sa stane jedným telesom

Každá viditeľná sieť, polyplocha a vytiahnutie a každé umiestnenie bloku sa dostane do **jedného** telesa tam, kde ich súbor umiestňuje. Skryté objekty alebo objekty na vypnutej hladine sa vynechajú. Ak súbor obsahuje viac samostatných telies, teleso má viac kusov: ak chcete mať každé ako samostatné teleso, otvorte každé z vlastného súboru.

## Čo sa vynechá (a povie sa to)

Krivky, body, mračná bodov, text, kóty, šrafovania a svetlá sa vynechajú: teleso berie len plochy. Rovnako SubD objekty (najprv ich v programe, ktorý súbor vytvoril, premeňte na siete alebo polyplochy), bloky prepojené z iných súborov a farby, hladiny a názvy (telesá PartCraft tu žiadne vlastné nemajú).

## Keď sa neuzatvára

Otvorené polyplochy a plochy (jedna orezaná plocha, tvar s chýbajúcou plochou) nemajú vnútro, takže nemôžu byť teleso. Dialóg povie, koľko otvorov zostáva, a nič nepridá. Tvar uzavrite alebo zaslepte v programe, ktorý ho vytvoril, uložte a znovu otvorte. Pozri [Keď sa sieť neuzatvára](topic:open-meshes#when-a-mesh-does-not-close).
