---
title: Dispunere piese plate pe foi
summary: Dispuneți piese plate pe plăci sau pe un rulou cu cât mai puține pierderi posibil, niciodată mai aproape decât distanța pe care o dați, și salvați dispunerea ca DXF pentru laser, plasmă, jet de apă sau router.
keywords: dispunere, dispunere optimă, foaie, placă, rulou, laser, plasmă, jet de apă, router, tăiere, randament, utilizare material, deșeu, pierderi, distanță, lățimea tăieturii, fibră, direcția de laminare, dxf, desfășurare plană, contururi
from: 8dcce1a6
---

**Dispunerea** plasează multe piese plate pe o foaie, astfel încât să rămână cât mai puțin material. PartCraft așază piesele una câte una, fiecare acolo unde lungimea folosită a foii rămâne cea mai scurtă, încearcă mai multe ordini și rotiri în câteva secunde și păstrează cea mai bună. Piesele pot sta în găurile altora și în interiorul unui L sau al unui U.

## Deschidere

- {{ui:Export}} › {{ui:Dispunere piese plate pe foi…}} o deschide cu desfășurarea piesei sau — într-un ansamblu — cu desfășurarea fiecărei piese din tablă, câte exemplare există.
- La o piesă din tablă, {{ui:Desfășurare}} și apoi {{ui:Dispunere pe foi…}} sub desfășurare.
- {{ui:Adăugare contururi dintr-un DXF…}} adaugă fiecare contur închis dintr-un fișier DXF ca piesă: un desen din CadCraft salvat ca DXF sau un fișier din software-ul propriu al mașinii de tăiere. Un contur aflat în interiorul altuia este o gaură în el. Liniile și arcele care se unesc cap la cap contează ca un singur contur. Fișierele în inch, centimetri sau metri sunt transformate în milimetri.

:::note
Desfășurarea tablei are nevoie de un nucleu de geometrie exactă (vezi [Tablă](topic:sheet-metal)). Conturile dintr-un fișier DXF funcționează întotdeauna.
:::

## Configurare

Pentru fiecare piesă indicați **câte** bucăți aveți nevoie și **fibra**: {{ui:Orice direcție}}, {{ui:De-a lungul foii (cum e desenat)}} pentru tablă periată sau laminată care trebuie să meargă într-un singur sens, sau {{ui:Transversal pe foaie}}.

Sub **Foi**:

- **Stoc**: {{ui:Plăci}} de o lungime și o lățime date (și câte aveți; 0 = câte sunt necesare), sau {{ui:Un rulou}} de o lățime dată, cât este necesar.
- **Margine față de bord** se păstrează liberă la fiecare margine a foii (pentru cleme sau o margine neregulată).
- **Spațiu între piese** este cea mai mică distanță între două linii de tăiere: cel puțin lățimea tăieturii mașinii de tăiere, plus ce cere materialul.
- **Rotiri**: unghiurile la care poate fi rotită o piesă, din 90° în 90° implicit. Mai puține rotiri se calculează mai repede; mai multe pot folosi mai bine foaia.
- **Piesele pot fi întoarse** permite așezarea unei piese cu fața în jos. Lăsați-o dezactivată pentru tablă: o desfășurare întoarsă se îndoaie în sens invers.

Apăsați {{ui:Dispunere}}. Previzualizarea arată fiecare foaie; informațiile spun câte plăci (sau cât din rulou) a folosit și cât din material ocupă piesele. Piesele care nu au încăput sunt indicate pe nume.

## Salvare

{{ui:Salvare DXF}} scrie dispunerea ca DXF (R12, milimetri), câte o foaie sub alta: contururile foilor pe stratul SHEET, piesele pe PARTS (arcele rămân arce), numele fiecărei piese pe LABELS.

:::tip
Amestecarea mai multor piese dispune de obicei mai bine decât mai multe exemplare ale aceleiași piese: piesele mici umplu golurile dintre cele mari.
:::

## Tăierea foilor (G-code)

**Export › Foi dispuse în G-code** citește un DXF cu dispunere (acesta sau foile suplimentului Cabinets din CadCraft) și creează câte un program pentru fiecare foaie prin postprocesorul ales: mai întâi găurile și decupările, apoi conturele, fiecare tăiere la raza sculei în afara piesei, prin foaie și încă 1 mm, cu punți dacă le cereți. Lista de postprocesoare cuprinde cele integrate plus cele proprii studiului de fabricație. Verificați fiecare program într-un simulator înainte de rulare: găurirea și buzunarele nu sunt create.

## Ce să verificați

PartCraft verifică din nou fiecare dispunere pe formele reale (nu pe grila în care a căutat): nicio pereche de piese nu este mai aproape decât distanța dintre ele, nimic nu intră în margini. Nu planifică tăierea: intrările de tăiere, ordinea tăierii, tăierea unei muchii comune o singură dată și păstrarea foii rămase sunt treaba software-ului mașinii de tăiere. Verificați DXF-ul acolo înainte de tăiere.
