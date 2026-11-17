---
title: Rularea de pe o unitate USB
summary: Ce scriu uneltele de inginerie și unde, astfel încât CadCraft Studio să poată rula de pe un stick USB sau dintr-un dosar oarecare, fără program de instalare și fără drepturi de administrator: setări, generatoare, memorii cache și fișiere de piese și ce rămâne pe stick.
keywords: usb, portabil, fără program de instalare, administrator, admin, setări, dosar de date, generatoare, unde se scriu fișierele, offline, confidențialitate, acces la gazdă
from: 263efc79
---

Uneltele de inginerie (generatoarele, biblioteca de inginerie, verificările și fișierele de date) nu au nevoie de **drepturi de administrator** și de **program de instalare**. Scriu doar ce este listat aici și nimic altceva.

| Ce | Unde este păstrat |
|---|---|
| Piesele tale, cu corpurile generate, fișele de date și verificările | Fișierul de piesă pe care îl salvezi (`.partcraft.json`), acolo unde îl salvezi. |
| Generatoarele deschise din fișiere | În spațiul de stocare al aplicației: stocarea locală a browserului într-o pagină web și dosarul `data` de lângă program în Studio portabil. Cel mult 20. |
| Setările (dimensiunile voxelilor pe care le setezi, firele de execuție ale solverului, aranjarea) | Același spațiu de stocare al aplicației. |
| Fișe de date, câmpuri, plase | Doar acolo unde le salvezi: descărcarea merge unde alegi tu. |

Uneltele **nu fac apeluri de rețea proprii**: generatoarele livrate sunt fișiere din dosarul aplicației, biblioteca și verificările rulează pe calculatorul tău, într-un proces de lucru care nu poate ajunge la rețea, iar datele de inginerie (proprietățile apei și ale aerului, materialele) sunt în interiorul aplicației. Un generator deschis dintr-un fișier este citit pe calculatorul tău și nu merge nicăieri.

## Arhiva portabilă Windows și Linux

Studio portabil pentru Windows își păstrează setările, memoriile cache și suplimentele într-un dosar `data` lângă program. AppImage pentru Linux le păstrează lângă el dacă alături există un fișier numit `portable`; fără acest fișier folosește dosarul tău de bază. Nu există o formă portabilă pentru Mac: sistemul împiedică o aplicație descărcată să scrie lângă ea. Notele portabile ale shell-ului (din ajutorul `Studio`) enumeră ce scrie programul.

## Acces la gazdă

Nimic de aici nu cere acces la gazdă. Imprimantele, mașinile cu port serial și dispozitivele USB sunt separate: cer acces atunci când o lucrare are nevoie de ele, o dată pentru fiecare dispozitiv, iar generatoarele sau verificările nu le ating deloc.
