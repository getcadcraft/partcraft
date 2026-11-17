---
title: Revoluția unei piese strunjite
summary: Schițați jumătate dintr-un profil lângă o linie de axă, revolvați-l într-o piesă rotundă, alegeți axa și unghiul și folosiți o tăiere prin revoluție pentru canale.
keywords: revoluție, proeminență prin revoluție, tăiere prin revoluție, piesă strunjită, strung, arbore, axă, linie de axă, canal, unghi, tăiere revoluție
from: 593b6929
---

{{ui:Revoluție}} rotește un profil în jurul unei axe, ca o piesă făcută la strung: arbori, scripeți, flanșe, butoane. Tăiere prin revoluție (în meniul {{ui:Mai multe}} din grupul Operații) rotește un profil pentru a scoate material, pentru canale și adâncituri.

## Revoluția unui arbore în trepte

1. Schițați pe **Planul Front**.
2. Apăsați {{key:N}} pentru {{ui:Linie de axă}}. Porniți din origine și faceți clic pe un punct drept spre dreapta, de exemplu la 100 mm. Aceasta este axa. Este întreruptă: geometria de construcție nu face parte din profil.
3. Apăsați {{key:L}} pentru Linie. Desenați **jumătatea** profilului deasupra liniei de axă ca o buclă închisă: porniți de pe linia de axă, urcați, faceți un pas de-a lungul și reveniți jos pe linia de axă, apoi de-a lungul ei până la început. Capetele trebuie să se întâlnească: bucla trebuie să fie închisă.
4. Cotați razele (înălțimile deasupra liniei de axă) și lungimile. O înălțime de 10 deasupra liniei de axă face un diametru de 20.
5. Alegeți {{ui:Ieșire}}.
6. Alegeți {{ui:Revoluție}}. Arborele apare, o rotație completă.

Profilul trebuie să rămână pe o singură parte a axei. Dacă o traversează: „Profilul traversează axa. Păstrați-l pe o parte a liniei de axă.” O muchie de profil poate sta pe axă.

## Setări

| Setare | Ce face | Implicit |
|---|---|---|
| **Operație** | Proeminență (adaugă material), Tăiere (scoate material), Intersecție (păstrează suprapunerea) sau Corp nou | Proeminență pentru {{ui:Revoluție}}, Tăiere pentru {{ui:Mai multe}} › {{ui:Tăiere prin revoluție}} |
| **Unghi (°)** | Cât de mult se rotește, de la puțin peste 0 până la 360 | 360 |
| **Axă** | Prima linie de axă sau orice linie sau linie de axă din schiță, listată ca „Linia de axă 1 (l1)” sau „Linia 3 (l3)” | Prima linie de axă |

Un unghi parțial face o pană, rotită din planul schiței într-un singur sens.

Dacă schița nu are linie de axă și lăsați **Axă** la Prima linie de axă: „Desenați o linie de axă (o linie de construcție) în schiță pentru a revolva în jurul ei.” Puteți alege și o linie plină a profilului ca axă.

## Tăiați un canal

1. Cu arborele construit, deschideți o schiță nouă pe **Planul Front** (același plan ca schița arborelui).
2. Desenați o linie de axă pe aceeași axă: porniți-o din origine și păstrați-o orizontală, astfel încât să primească un H, sau tastați-o cu **Adăugare prin coordonate** (de exemplu de la `0, 0` la `100, 0`). O schiță nouă nu se poate agăța de liniile altei schițe.
3. Desenați un mic dreptunghi închis care se suprapune peste muchia arborelui acolo unde trece canalul.
4. Alegeți {{ui:Ieșire}}, apoi {{ui:Mai multe}} › {{ui:Tăiere prin revoluție}}.

## Fețele revoluției în ansambluri

O revoluție are o axă pe care o pot folosi alte elemente și ansambluri:

- o repetiție **Circulară** folosește implicit axa ultimei revoluții (vedeți [Repetiții și oglindiri de elemente](topic:patterns-mirror));
- într-un ansamblu, o îmbinare între fețe făcute prin revoluții începe ca o îmbinare de rotație, iar **Centrare pe** oferă „Axa de la Revolve1” (vedeți [Construirea unui ansamblu](topic:build-assembly)).

## Curbe adevărate și fațete

PartCraft construiește o revoluție cu nucleul mesh (cipul din bara de stare spune „Nucleu mesh”): formele rotunde sunt fațete plane, câte 64 pe rotație implicit, iar volumele sunt puțin sub valoarea adevărată (cam 0.16 % la 64). Vizualizarea, exporturile STL, 3MF și STEP sunt făcute din aceste fațete: setați **Curbe** (faceți clic pe spațiul gol, apoi în panoul din dreapta) la Fină (128) sau Foarte fină (256) pentru unele mai netede. Cilindrii, conurile și torii adevărați au nevoie de un nucleu exact: încă nerealizat în această versiune. Vedeți [Nucleul de plasă (mesh)](topic:solid-kernels).
