---
title: Kontrollo këtë kornizë
summary: Merr anëtarët prej çeliku të një saldimi (një slitë, një stendë, një kornizë tubash dhe profilesh), vendos pajisjet mbi këmbët dhe mbështetëset në dysheme, dhe shiko sa përdoret secili anëtar dhe çdo saldim sipas AISC 360-16 ose EN 1993. Një ndihmës derisa një inxhinier ta ketë rishikuar.
keywords: kornizë, saldim, slitë, slitë pompe, element strukturor, saldime, kontrollo, AISC 360, EN 1993, shfrytëzim, mbështetëse, pajisje, ngarkesë, profil i zbrazët, HSS, RHS, CHS, inxhinier
from: 032e34ee
---

{{ui:Kontrollo këtë kornizë}} merr anëtarët e drejtë prej çeliku të një saldimi, ndërton një kornizë prej tyre, e zgjidh nën peshën e çelikut dhe të pajisjeve që vendos mbi të, dhe teston çdo anëtar dhe çdo saldim aty ku anëtarët takohen. Një ekzekutim, një tabelë.

:::warning
Është një **ndihmës derisa një inxhinier ta ketë rishikuar**. Nuk është vulë, dhe kalimi nuk është projekt. Përdor vijat qendrore të anëtarëve siç janë vizatuar, trajton çdo bashkim si të saldosur rreth gjithë seksionit, merr këmbën e filetës nga muri i seksionit (deri 8 mm) përveç nëse e cakton, dhe nuk kontrollon bulonat, pllakat, pllakat bazë, ankorimet, mbajtjen, prerjen e bllokut, lodhjen ose ngritjen.
:::

## Ekzekuto

1. Vizato anëtarët me {{ui:Element strukturor}} (seksionet vijnë nga tabela e seksioneve).
2. Hap {{ui:Pamjet}} › {{ui:Kontrollo këtë kornizë}}. Thuaj ku qëndron korniza (një **mbështetëse** te çdo këmbë: me menteshë, e fiksuar ose me rul; {{ui:Mbështetëse me menteshë te këmbët}} vendos një në çdo skaj anëtari më të ulët) dhe çfarë qëndron mbi të (**pajisje**: masë, qendra e gravitetit, pikat ku vidhet poshtë, dhe një shtytje horizontale opsionale).
3. Zgjidh kodin: **ASCE 7 + AISC 360-16** ose **EN 1990 + EN 1993**. Cakto klasën e çelikut dhe, për AISC, forcën e metalit të saldimit (482,6 MPa është E70).
4. Shtyp {{ui:Kontrollo}}. {{ui:Ruaj raportin si CSV}} shkruan çdo tabelë, me rreshtin "nuk është rishikuar" të parin.

Korniza lexohet në milimetra me boshtin vertikal të pjesës lart. Mbështetëset dhe pikat e pajisjeve shkruhen si x y z në të njëjtin sistem, me z lartësinë.

Një skaj anëtari që bie mbi mesin e një anëtari tjetër e ndan atë aty, sikurse një këmbë ose një pikë vidhjeje mbi vijën e një anëtari. Një peshë ndahet mbi pikat e vidhjes si trup i ngurtë; një qendër gravitetit jashtë këmbëve, ose një forcë ngritjeje te një këmbë, thuhet, kurrë nuk fshihet.

## Çfarë merr

- Artikulli më i përdorur dhe nëse diçka dështon. Artikujt që kontrolli nuk mund t'i gjykojë (një seksion që nuk është në tabelë, një çelik pa faktor në kod) numërohen dhe emërohen, kurrë të numëruar si të kaluar.
- Një rresht për çdo anëtar dhe grup saldimi: sa përdoret, kontrolli dhe klauzola që mbizotëron, dhe kombinimi i ngarkesave që mbizotëron.
- Të njëjtat tabela në raport.

## Çfarë kontrollohet

Seksione të zbrazëta (RHS, SHS, CHS, tub) dhe seksione I për tërheqje, shtypje, përkulje, prerje dhe ndërveprimin e tyre; saldime filete dhe me penetrim të plotë me metodën elastike vektoriale. Muret kompakte vetëm në përkulje për seksionet e zbrazëta; muret e holla thuhen si të pakontrolluara. Disa konstante janë shkruar nga standardet dhe nuk janë krahasuar ende me një kopje të printuar; raporti liston burimin e secilës.

Shih [Kornizat nga seksionet e çelikut](topic:structural-members) për vizatimin e anëtarëve dhe listën e prerjeve.
