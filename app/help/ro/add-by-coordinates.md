---
title: Adăugarea geometriei de schiță prin tastarea coordonatelor
summary: Folosiți Adăugare după coordonate din panoul schiței pentru a plasa linii, linii de axă, dreptunghiuri, cercuri și puncte în poziții exacte, doar cu tastatura.
keywords: coordonate, introducere tastată, introducere de la tastatură, introducere numerică, poziție exactă, x y, coordonate absolute, accesibilitate, fără mouse
from: 5e6c1656
---

Când cunoașteți valorile, tastarea lor este mai rapidă decât clicul și cotarea. **Adăugare după coordonate** se află în panoul din dreapta ori de câte ori este deschisă o schiță. Permite și construirea unei schițe fără niciun dispozitiv de indicare.

Coordonatele sunt în milimetri, pe axele proprii ale schiței: x spre dreapta și y în sus, privind schița, cu (0, 0) în origine (cercul roșu cu o cruce).

## Adăugarea unei forme

1. Deschideți o schiță (vezi [Desenarea primei schițe](topic:sketch-basics)).
2. În panoul din dreapta, derulați până la **Adăugare după coordonate**.
3. Alegeți forma din **Adăugare**: Linie, Linie de axă, Dreptunghi, Cerc sau Punct.
4. Completați câmpurile:

| Formă | Câmpuri |
|---|---|
| Linie | **De la x, y** și **Până la x, y** |
| Linie de axă | **De la x, y** și **Până la x, y** |
| Dreptunghi | **Colț x, y** și **Colț opus x, y** |
| Cerc | **Centru x, y** și **Rază** |
| Punct | **În x, y** |

5. Alegeți {{ui:Adăugare}}, sau apăsați {{key:Enter}} în orice câmp.

Forma apare, iar bara de stare afișează, de exemplu, „Dreptunghi adăugat.” Câmpurile se golesc, pregătite pentru următoarea formă. Fiecare adăugare este un singur pas de anulare.

Introduceți o pereche ca două numere separate printr-o virgulă sau un spațiu: `0, 0`, `25 -10` sau `12.5,40`. Numerele negative și zecimalele sunt acceptate. O rază trebuie să fie mai mare decât zero. Dacă ceva nu se citește ca număr, bara de stare afișează: „Introduceți coordonatele ca «x, y» și o rază mai mare decât zero.”

## Exemplu: conturul unei plăci cu fantă, tastat

1. Deschideți o schiță pe **Planul Front**.
2. **Adăugare**: Dreptunghi. **Colț x, y**: `-50, -30`. **Colț opus x, y**: `50, 30`. {{key:Enter}}.
3. **Adăugare**: Cerc. **Centru x, y**: `-30, 0`. **Rază**: `5`. {{key:Enter}}.
4. **Centru x, y**: `30, 0`. **Rază**: `5`. {{key:Enter}}.
5. Alegeți {{ui:Ieșire din schiță}}, apoi {{ui:Extrudare}}: o placă de 100 × 60 cu două găuri de 10 mm.

## Geometria tastată este plasată, dar nu este fixată

Coordonatele tastate plasează geometria în poziția corectă, dar **nu sunt relații**. Formele rămân albastre (sub-definite) și s-ar putea deplasa dacă le trageți sau dacă modificați altă cotă:

- un dreptunghi tastat vine cu propriile relații de colț, orizontale și verticale, ca unul desenat, dar nimic nu îl leagă de origine;
- o linie tastată nu are relație orizontală sau verticală, chiar dacă ați tastat o linie orizontală;
- centrul unui cerc tastat este liber.

Pentru ca schița să fie complet definită, adăugați ulterior cote și relații (vezi [Definirea completă a unei schițe](topic:relations-dimensions)). De exemplu, selectați un colț de dreptunghi și originea și alegeți {{ui:• Coincident}}, sau cotați centrele cercurilor față de origine.

:::note
Fără dispozitiv de indicare puteți ajunge până aici: treceți la un rând de plan din istoric cu {{key:Tab}} și tastele cu săgeți, apăsați {{key:Enter}} pentru a-l selecta, apăsați {{key:S}} pentru a schița, adăugați forme aici și ajungeți la **Editare** de lângă fiecare cotă și la {{ui:Ieșire din schiță}} cu {{key:Tab}}. Selectarea geometriei, deci și adăugarea de relații sau de cote noi, necesită încă un clic sau o atingere în această versiune.
:::

## Limitări

- Arcele nu pot fi tastate încă. Desenați-le cu unealta Arc sau tastați un cerc și folosiți relații.
- În acest câmp nu există coordonate relative (față de ultimul punct) sau coordonate polare (lungime și unghi).
- Geometria tastată nu se agață de punctele existente. Tastați aceleași coordonate ca ale unui punct existent, apoi adăugați o relație {{ui:• Coincident}} între ele dacă trebuie să rămână unite.
