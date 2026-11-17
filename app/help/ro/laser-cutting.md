---
title: Trimiterea unui desen către un laser
summary: Alegeți ce face fiecare strat (tăiere, zgâriere, gravare, umplere, imagine), previzualizați mișcările capului, salvați codul G GRBL în mod laser sau trimiteți-l din browser după încadrarea lucrării.
keywords: laser, tăietor laser, gravor laser, GRBL, cod G, gravare, umplere, tramare, gravare imagine, zgâriere, tăiere, Web Serial, Linux, încadrare lucrare, putere, viteză, treceri
from: 327b3c46
---

Panoul {{ui:Laser}} transformă straturile unui desen într-un program pentru un laser care rulează GRBL (majoritatea controlerelor de diodă și CO2 pentru hobby și ateliere mici). În PartCraft, alegeți {{ui:Export}} › {{ui:Program laser…}}, apoi {{ui:Adăugare contururi dintr-un DXF…}}: conturele și găurile intră pe stratul CUT. Piesele de tablă, cu liniile de îndoire pe stratul BEND, au nevoie de nucleul exact, pe care această versiune nu îl are. Setările se salvează în fișierul piesei sau al ansamblului.

:::warning
Testați fiecare setare pe un material de probă mai întâi, purtați ochelari de protecție potriviți pentru laserul dvs., țineți capacul închis acolo unde există și nu lăsați niciodată un laser în funcțiune nesupravegheat. Valorile cu care pornește un strat sunt marcaje, nu recomandări pentru niciun material.
:::

## Alegeți ce face fiecare strat

Fiecare strat al desenului este un rând. {{ui:Face}} îl setează pe **Tăiere**, **Zgâriere**, **Gravare linii**, **Umplere forme**, **Gravare imagine** sau **Netrimis**, cu o {{ui:Putere %}}, o {{ui:Viteză mm/min}} și un număr de {{ui:Treceri}}.

- **Umplerea** arde interiorul formelor închise în linii, la {{ui:Distanță între linii}} una de alta, sub un {{ui:Unghi}}, în ambele direcții sau într-una singură, cu o depășire, astfel încât capul să fie la viteză când laserul se aprinde; hașurarea încrucișată adaugă o a doua trecere la 90°. O formă cu o gaură rămâne deschisă la gaură.
- **Gravarea imagini** transformă o imagine în puncte (Floyd–Steinberg, Atkinson, ordonat sau simplu alb-negru la un prag) sau, cu *Niveluri de gri*, într-o putere variabilă.
- Ordinea: întâi imaginile și umplerile, apoi gravarea liniilor, apoi zgârieturile, apoi tăierile, astfel încât o piesă tăiată să nu se miște în timp ce este gravată. În interiorul unui strat, traseele merg **întâi interiorul** (o gaură înaintea plăcii în care se află), cu următorul cel mai apropiat.

## Previzualizare, apoi salvare

Previzualizarea desenează ce face capul: liniile de ardere în culoare, mișcările rapide în gri și o casetă verde în jurul tot ce arde. Dedesubt sunt dimensiunea, lungimea arderii și o estimare de timp (fără accelerație; o mașină reală durează mai mult). {{ui:Salvare cod G…}} scrie codul G în mod laser GRBL: `$32=1`, `M4` (sau `M3`) cu valori S, mișcări `G0` și `G1`, `M5` la final. X0 Y0 este colțul din stânga jos al lucrării, cu excepția cazului în care alegeți originea desenului: setați acolo zero-ul de lucru al mașinii. Codul G urmează modul laser documentat al GRBL; încă nu a fost încercat pe un laser real.

## Trimitere din browser

În Chrome și Edge, {{ui:Conectare…}} vă cere să alegeți portul USB al laserului. Nimic nu se conectează și nimic nu se trimite până nu apăsați un buton. Apăsați întâi {{ui:Încadrare lucrare}}: capul trasează conturul lucrării cu laserul **oprit** (sau la puterea mică setată pentru un indicator), ca să vedeți unde va arde. Abia atunci se activează {{ui:Trimitere lucrare}}, iar ea se dezactivează din nou dacă modificați ceva. {{ui:Pauză}} ține capul pe loc, {{ui:Oprire}} îl ține pe loc, resetează controlerul (laserul se stinge) și trimite `M5`. Acolo unde lipsește Web Serial (Firefox, Safari și CadCraft Studio, a cărui vizualizare web nu îl are încă), salvați codul G și trimiteți-l cu programul propriu al laserului.

## Încă nerealizat

Formatele altor controlere (Ruida, laserele Marlin, fișierele producătorilor), tab-uri și intrări și ieșiri de tăiere, compensarea lățimii tăieturii, biblioteci de materiale, axe rotative și axa Z, alinierea cu camera.
