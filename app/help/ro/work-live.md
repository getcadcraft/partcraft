---
title: Modelarea unei piese împreună cu Live TeamWork
summary: Ce se schimbă în PartCraft cât timp se lucrează într-o sesiune Live TeamWork din CadCraft Studio: arborele comun de funcții, fiecare fereastră construiește același solid, anularea proprie și alăturarea dintr-un browser din aceeași rețea.
keywords: live, live teamwork, studio live, împreună, colaborare, sesiune, partajare live, alăturare, arbore de funcții, istoric, reconstruire, cursor, indicator, a se vedea reciproc, nume, culoare, selecție, anulare, gazdă
from: 1809b96c
---

## Ce veți învăța

Ce se întâmplă cu o piesă când mai mulți oameni o modelează în același timp. CadCraft Studio pornește și alătură sesiunea Live TeamWork (Partajare, Alăturare); această pagină este despre piesa în sine.

## Toți modelează în același timp

Toți lucrează pe același arbore de funcții: schițe, extrudări, găuri, repetiții, racordări, parametri. Modificările proprii apar imediat; ale celorlalți apar puțin după ce le fac. Doar arborele circulă: fiecare fereastră construiește singură solidul, iar nucleul PartCraft construiește același solid din același arbore în fiecare fereastră.

- **Două persoane schimbă o funcție:** setările diferite (una adâncimea, alta condiția de capăt) se păstrează amândouă; aceeași setare rămâne la modificarea mai târzie.
- **O schiță** circulă integral: când două persoane editează aceeași schiță în același timp, câștigă editarea mai târzie. Stabiliți de comun acord cine desenează ce schiță.
- **O funcție construită pe ceva șters chiar acum de cineva** (o extrudare a unei schițe eliminate, o gaură pe o față eliminată) este anulată, iar bara de stare spune de ce.
- **Reordonarea arborelui** este verificată: dacă două persoane trag funcții în același moment, a doua mutare este anulată.

## Fiecare îi vede pe ceilalți

Fiecare participant din sesiune are o culoare proprie. Vedeți săgeata fiecăruia în culoarea lui, cu numele alături, pe fața spre care indică. Când are o funcție selectată în arbore, numele funcției apare după al lui.

Indicatoarele, numele și selecțiile există doar pe durata sesiunii: nu se salvează niciodată în fișier și nu intră niciodată în anularea cuiva. Alunecă spre locul fiecăruia, așa că rămân fluide chiar și pe o conexiune lentă.

## Anularea anulează doar munca proprie

{{key:Mod+Z}} anulează ultima editare proprie și lasă neatinse ale celorlalți. Dacă de atunci cineva a schimbat același lucru, nu se anulează nimic, iar bara de stare spune cine.

## Alăturarea dintr-un browser

Un coleg fără Studio poate scana imaginea de sub codul gazdei cu un telefon, o tabletă sau un calculator din aceeași rețea. PartCraft se deschide în browser, se umple cu piesa gazdei odată ce gazda îl admite, și o construiește. Un link de invitație permite alăturarea din altă rețea: gazda are nevoie de un loc (utilizator) Team Cloud Plan pentru aplicație, ceilalți se alătură gratuit, iar linkul funcționează doar cât timp sesiunea gazdei este deschisă.

## Când se încheie sesiunea

Doar gazda salvează piesa. Ceilalți păstrează o copie nesalvată: salvați-o dacă doriți să o păstrați.

:::note
Ansamblurile nu se partajează încă într-o sesiune: deschideți piesa propriu-zisă ca s-o lucrați împreună.
:::
