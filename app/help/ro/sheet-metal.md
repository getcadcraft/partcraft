---
title: Tablă: flanșe și modelul desfășurat
summary: Porniți o piesă din tablă dintr-o schiță (o placă plată sau un profil îndoit), setați o dată grosimea, raza de îndoire și factorul K, îndoiți flanșe în sus din marginile sale cu degajări de îndoire, apoi desfășurați-o plat ca DXF pentru tăiere.
keywords: model desfășurat, desfășurare, dezvoltare, lungime desfășurată, adaos de îndoire, linie de îndoire, dxf pentru laser, tăiere cu laser, tablă, flanșă de bază, flanșă de muchie, flanșă, îndoire, rază de îndoire, factor k, k-factor, grosime, calibru, degajare, degajare de îndoire, canal, consolă, carcasă, tablă îndoită
from: 144bd0f6
---

:::note
**Încă nerealizat în această versiune.** Tabla are nevoie de un nucleu geometric exact, pe care această versiune a PartCraft nu îl are: construiește fiecare piesă cu nucleul de plasă. [Ce este încă nerealizat](topic:not-built-yet) spune ce să faceți în schimb. Restul paginii descrie cum funcționează cu un nucleu exact.
:::

Piesele din tablă încep cu o **Flanșă de bază**. Ea stabilește foaia pentru întreaga piesă: **grosimea** sa, **raza interioară de îndoire** și **factorul K**. Fiecare **Flanșă de muchie** de după ea se îndoaie cu aceleași valori, astfel încât piesa rămâne o singură foaie care poate fi desfășurată. Ambele au nevoie de **nucleul exact** (vezi [Nucleul de plasă](topic:solid-kernels)).

## Începerea cu o flanșă de bază

1. Desenați o schiță. Folosiți un **profil închis** pentru o placă plată (un dreptunghi sau orice contur închis cu găuri). Folosiți **un singur lanț deschis de linii** pentru o foaie îndoită, cum ar fi un L, un U sau un Z desenat ca vedere de muchie a foii.
2. Selectați schița în istoricul operațiilor.
3. Deschideți {{ui:Mai multe}} din grupul Operații și alegeți {{ui:Flanșă de bază}}.

În panoul din dreapta:

- **Grosime (mm)** este calibrul foii.
- **Rază de îndoire (mm)** este raza interioară a fiecărei îndoiri. 0 dă un colț interior ascuțit; exteriorul se curbează în continuare cu o rază egală cu o grosime.
- **Factorul K** arată unde se află stratul neutru în interiorul foii, de la 0 (fața interioară) la 0,5 (mijlocul). El decide cât de lungă este foaia când este întinsă plat. 0,44 este implicit; atelierul sau furnizorul de material vă poate da pe al lor.
- **Adâncime (mm)** este cât de departe iese un profil îndoit din planul schiței. O placă o ignoră.
- **Grosimea în afara îndoirilor**: un profil deschis este o față a foii. Implicit, grosimea merge pe interiorul primei îndoiri, așa că liniile pe care le-ați desenat sunt exteriorul canalului. Bifați ca să puneți liniile pe interior. Rezultatul este același indiferent de capătul de la care ați desenat.

Fiecare colț al unui lanț deschis devine o îndoire. O linie prea scurtă ca să-și țină îndoirile o spune, cu lungimea de care are nevoie.

## Îndoirea unei flanșe de muchie

1. Faceți clic pe o muchie dreaptă a feței de sus sau de jos a foii (muchiile lungi, nu cele subțiri).
2. Alegeți {{ui:Mai multe}} › {{ui:Flanșă de muchie}}. Fără nicio muchie aleasă, PartCraft așteaptă să faceți clic pe una; Esc anulează.

Flanșa se îndoaie în sus de la fața acelei muchii, în jurul razei interioare a foii, apoi continuă drept. În panou:

- **Unghi (°)** este cât de mult se îndoaie, de la 1 la 180. 90 este o flanșă pătrată.
- **Lungime (mm)** este piciorul drept de după îndoire.
- **Îndoire în sens invers** o îndoaie din cealaltă față (în jos în loc de în sus).
- **Decalaj la început** și **Decalaj la sfârșit** scurtează flanșa de la fiecare capăt al muchiei.
- **Degajare de îndoire**: când un capăt are decalaj, se taie în foaie o fantă alăturată, ca îndoirea să nu rupă metalul acolo. **Lățime degajare** setează lățimea fantei; adâncimea sa este raza de îndoire plus grosimea. Alegeți **Niciuna** ca să lăsați colțul netăiat.

Ca să schimbați ulterior muchia, apăsați {{ui:Alegere}} în panou și faceți clic pe alta.

:::tip
Folosiți parametri pentru grosime și rază (vezi [Parametri și ecuații](topic:parameters)), ca o schimbare de calibru să actualizeze toate flanșele deodată.
:::

## Desfășurarea

Ambele panouri se termină cu **Model desfășurat**. Apăsați {{ui:Desfășurare}}:

- O previzualizare arată foaia desfășurată, cu linia de centru a fiecărei îndoiri punctată.
- **Dimensiune** și **Arie** sunt cele ale semifabricatului plat.
- Fiecare îndoire este listată cu direcția sa (**în sus** sau **în jos**, văzută din partea schiței flanșei de bază), unghi și rază interioară.

Fiecare îndoire ia lungimea stratului neutru al foii prin ea, **adaosul de îndoire**: unghi (în radiani) × (rază interioară + factor K × grosime). Deci o îndoire de 90° a unei foi de 2 mm cu rază de 2 mm și factor K 0,44 adaugă 4,52 mm de tablă plată.

Pe o placă plată, găurile, tăieturile și degajările de îndoire apar în desfășurare exact unde sunt, inclusiv găurile prin o flanșă.

Ca să tăiați mai multe, apăsați {{ui:Dispunere pe foi…}} sub modelul desfășurat: vezi [Dispunerea pieselor plate pe foi](topic:nest-flat-parts). O flanșă de bază îndoită se desfășoară ca un singur dreptunghi: lungimea sa desfășurată × adâncimea sa, cu o linie de îndoire pentru fiecare colț.

{{ui:Salvare DXF}} salvează modelul desfășurat pentru un laser, o presă sau un jet de apă, în milimetri:

- conturul pe stratul **OUTLINE**, ca linii, arce și cercuri;
- liniile de îndoire pe stratul **BEND**, punctate;
- o notă pentru fiecare îndoire pe stratul **BEND_NOTES**, cum ar fi „UP 90° R2”.

Schimbați orice și desfășurarea dispare; apăsați din nou {{ui:Desfășurare}} pentru una nouă.

:::note
Verificați factorul K cu atelierul înainte de tăiere: lungimea desfășurată depinde de el și variază cu materialul, grosimea și sculele.
:::

## Mesaje

- **Tabla are nevoie de o flanșă de bază înaintea ei** — o flanșă de muchie a fost adăugată înainte de orice flanșă de bază. Mutați-o sub una, sau adăugați mai întâi o flanșă de bază.
- **O flanșă de muchie are nevoie de o muchie dreaptă** — flanșele se îndoaie doar de-a lungul liniilor; muchiile curbe nu pot primi încă una.
- **Muchia aceea nu se află pe o față a grosimii foii** — muchia aparține unei fețe care nu este partea de sus sau de jos a foii (de exemplu peretele unei găuri). Alegeți o muchie a feței de sus sau de jos.
- **Decalajele nu lasă nimic din muchie** — cele două decalaje adunate dau întreaga muchie sau mai mult.
- **Flanșele de muchie pe o flanșă de bază îndoită nu pot fi desfășurate încă** — porniți de la o placă plată și îndoiți totul cu flanșe de muchie, care se desfac.
- **Tăieturile și găurile făcute după o flanșă de bază îndoită nu apar încă în desfășurarea ei** — desfășurarea unui profil îndoit este doar dreptunghiul său desfășurat.
