---
title: Nervuri și guseuri
summary: Întăriți o piesă cu o nervură desenată ca o singură linie: se umple de la linie până la pereți, pe o grosime setată peste planul schiței, de partea aleasă.
keywords: nervură, guseu, inimă, rigidizare, contravântuire, consolă, suport de colț, perete subțire, întărire
from: 5c218881
---

:::note
**Încă nerealizat în această versiune.** Nervura are nevoie de un nucleu geometric exact, pe care această versiune a PartCraft nu îl are: construiește fiecare piesă cu nucleul mesh. [Ce nu este realizat încă](topic:not-built-yet) spune ce să faceți în loc. Restul paginii descrie cum funcționează cu un nucleu exact.
:::

O **nervură** (sau guseu) este un perete subțire care întărește o piesă, cum este triunghiul din colțul unei console în L. Desenați doar muchia ei liberă: PartCraft umple spațiul dintre acea linie și pereți. Are nevoie de **nucleul exact** (vedeți [Nucleul de plasă (mesh)](topic:solid-kernels)).

## Adăugați o nervură

1. Creați un plan prin mijlocul locului unde merge nervura (pentru o consolă în L adâncă de 40, un plan la 20 în fața schiței sale: vedeți [Plane, axe și puncte de referință](topic:reference-geometry)).
2. Schițați pe el **o linie** de la perete la perete — sau câteva linii cap la cap pentru o muchie de nervură îndoită. Linia poate rămâne scurtă de pereți: capetele ei sunt prelungite până când îi ating.
3. Selectați schița și alegeți {{ui:Mai multe}} › {{ui:Nervură}}.

Nervura umple de la linie până la pereți, pe partea spre mijlocul piesei, astfel încât un guseu ajunge în colțul interior. Dacă acea parte este deschisă și cealaltă este închisă, PartCraft o întoarce și o anunță.

## Setări

- **Grosime (mm)** este grosimea nervurii peste planul schiței. Poate fi controlată de un parametru.
- **Grosime** (alegerea de sub ea): **Centrată pe planul schiței**, **În fața planului** (pe normală) sau **În spatele planului**.
- **Inversare** umple cealaltă parte a liniei.

## Mesaje

- **Pe această parte, muchia nervurii nu întâlnește niciodată corpul** — nimic nu se închide în spațiul de pe această parte: bifați sau debifați **Inversare** ori mutați linia astfel încât pereții să o limiteze.
- **O nervură are nevoie de un lanț deschis de linii în schiță** — schița are o formă închisă, un arc sau o spline, ori linii care nu se unesc cap la cap.
- **Muchia nervurii trece prin interiorul corpului acolo** — linia se află în interiorul solidului; desenați-o în spațiul liber dintre pereți.
