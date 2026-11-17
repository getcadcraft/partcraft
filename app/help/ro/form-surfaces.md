---
title: Forme libere cu Formă și caracteristici de suprafață
summary: Împingeți și trageți o cușcă de control netedă în spațiul de lucru Formă, ascuțiți muchii, folosiți simetria, verificați-o și finisați-o într-un solid sau o suprafață exactă, apoi petece, lofturi, cusături, îngroșări, decalări, extinderi și tăieri de suprafețe în Proiectare. Ce este exact și ce este aproximat.
keywords: formă, formă liberă, t-spline, subdiviziune, catmull-clark, cușcă, quadball, muchie ascuțită, îndoitură, simetrie, zebră, curbură, suprafață, petec, umplere, suprafață loft, cusătură, coasere, îngroșare, decalare suprafață, extindere, tăiere
from: 0d326ef4
---

:::note
**Încă nerealizat în această versiune.** Finisarea unei forme în piesă și caracteristicile de suprafață necesită un nucleu geometric exact, pe care această versiune a PartCraft nu îl are: construiește fiecare piesă cu nucleul de plasă. [Ce este încă nerealizat](topic:not-built-yet) spune ce să faceți în loc. Restul paginii descrie aceste lucruri așa cum funcționează cu un nucleu exact.
:::

Spațiul de lucru **Formă** creează forme organice. Editați o **cușcă**, o plasă grosieră de colțuri, muchii și fețe. Forma este suprafața netedă controlată de cușcă (suprafața-limită Catmull–Clark), deci mutarea unui colț încovoaie suprafața ușor în jurul lui. Când arată bine, **Finisaj** adaugă forma în istoricul piesei ca operație *Formă*, iar nucleul exact o transformă în suprafețe B-spline adevărate. Apoi o puteți rotunji, tăia, uni cu alte operații și exporta ca STEP.

Alegeți **Formă** din lista **Spațiu de lucru** din stânga barei de instrumente.

## Începeți o cușcă

1. Setați **Dimensiune** și **Diviziuni** în panoul din dreapta. Diviziunile sunt câte fețe are fiecare latură.
2. Faceți clic pe {{ui:Cutie}}, {{ui:Quadball}} sau {{ui:Plan}} în bara de instrumente. Panoul are și **Cilindru**, **Tor** și **Fețe prin clicuri**.

- Un **quadball** este o cușcă cu cutie potrivită astfel încât punctele de colț să stea pe o sferă. Între aceste puncte suprafața stă puțin în interiorul sferei: circa 0.4 % mai puțin volum la 2 diviziuni.
- Un **plan** este deschis, deci devine un corp de suprafață (vezi „Caracteristici de suprafață în Proiectare” mai jos).
- **Fețe prin clicuri**: faceți clic pe 4 puncte din planul de sol (de jos) sau pe colțurile cuștii ca să creați o față. Fețele care au colțuri comune se unesc. Apăsați {{key:Enter}} după 3 puncte pentru un triunghi sau {{key:Esc}} ca să opriți.

Cușca nefinisată se salvează împreună cu fișierul piesei, astfel încât puteți închide fișierul și continua mai târziu.

## Selectați și mutați

- Faceți clic pe un colț, o muchie sau o față a cuștii. {{key:Shift}}+clic adaugă sau scoate elemente. {{key:Esc}} anulează selecția.
- Un gizmo apare în mijlocul selecției. Trageți o săgeată ca să mutați pe direcția ei, sau un pătrat ca să mutați în planul respectiv. Apăsați {{key:W}} pentru mutare, {{key:E}} pentru rotire și {{key:R}} pentru scalare, sau folosiți butoanele din panou. {{ui:Gizmo}} din bara de instrumente trece prin ele.
- **Atenuare moale** (mm) atrage și colțurile aflate la o distanță dată, estompându-se treptat până la zero la marginea acestei distanțe.
- Fiecare tragere este un singur pas de anulare: {{key:Ctrl+Z}} și {{key:Ctrl+Y}} funcționează ca de obicei.

## Modificați cușca

Butoanele **Modificare** din panou lucrează pe selecție:

| Buton | Ce face |
|---|---|
| {{ui:Extrudare}} | Fețele alese se mută în afară cu **Distanța de extrudare**, de-a lungul normalelor lor, cu fețe laterale noi. Muchiile deschise alese cresc fețe noi spre exterior. |
| {{ui:Buclă de muchii}} / Inserare buclă de muchii | Împarte inelul de fețe cu patru laturi care trece prin muchia aleasă, la jumătatea drumului. Mai multe bucle dau curbe mai strânse. |
| Inserare punct | Adaugă un colț la mijlocul muchiei alese. |
| Subdivizare | Împarte fiecare față aleasă în fețe cu patru laturi în jurul centrului ei. |
| Punte | Unește două fețe alese sau două deschideri (alegeți câte o muchie deschisă pe fiecare) cu un tub de fețe. Ambele necesită același număr de muchii. |
| Umplere gaură | Închide deschiderea prin muchia deschisă aleasă cu o singură față. |
| Unire | Unește colțurile alese într-unul singur, la mijlocul lor. |
| Aplatizare | Mută colțurile alese pe planul care se potrivește cel mai bine cu ele. |
| Ștergere | Șterge fețele, muchiile (două fețe se unesc) sau colțurile alese. |

## Muchii ascuțite, simetrie și afișare

- {{ui:Îndoire}} face muchiile alese ascuțite. **Greutatea îndoiturii** 10 este complet ascuțită. O greutate mai mică rămâne ascuțită pentru atâția pași de rafinare și apoi se înmoaie, ceea ce dă un rotunjiment strâns în loc de o îndoitură tare. **Netezire** le face din nou netede. **Vârf ascuțit** fixează un colț astfel încât suprafața să treacă prin el cu un punct.
- **Simetrie** oglindește cușca față de X, Y sau Z = 0. Păstrează partea pozitivă, o oglindește și unește cele două jumătăți. După aceea, o modificare pe oricare parte se face pe ambele. Colțurile din planul de oglindire rămân în el.
- {{ui:Afișare}} comută între **Netedă** (suprafața pe care o va avea operația) și **Cutie** (chiar fețele cuștii).
- **Analiză**: **Dungi zebră** reflectă o lumină cu dungi din vederea curentă. Se curbează lin pe o suprafață netedă și se rup la o îndoitură. **Curbura medie** colorează zonele convexe în roșu, cele concave în albastru și cele plane în alb. Se măsoară pe plasa afișată, cu formula cotangentei, deci este un ghid, nu o măsurătoare.

## Verificare și finisare

- **Verificare exactă** convertește cușca în nucleul exact fără să schimbe piesa. Raportează câte petece B-spline face cușca, câte sunt exacte și dacă rezultatul este un solid închis și valid, plus volumul lui.
- {{ui:Finisaj}} adaugă o operație *Formă* în istoric sau actualizează forma pe care o editați și vă duce înapoi la Proiectare. O cușcă închisă devine solid. **Operația** ei din panoul Proiectare poate fi Corp nou, Unire, Tăiere sau Intersecție. O cușcă deschisă devine un corp de suprafață.
- Ca să schimbați o formă mai târziu, selectați-o în istoric și apăsați **Editare în Formă**. Corpul construit se ascunde cât timp îi editați cușca.
- **Renunțare** aruncă cușca fără să atingă istoricul.

## Ce este exact și ce este aproximat

Fiecare față cu patru laturi a cuștii, rafinată când este nevoie, devine un petec B-spline bicubic.

- Acolo unde fiecare colț al unei fețe este *regulat* (patru muchii se întâlnesc în interiorul suprafeței, sau trei pe o muchie deschisă ori de-a lungul unei îndoituri), petecul este **exact** suprafața de subdiviziune. Testele verifică asta până la 1e-9 mm.
- În jurul unui **punct extraordinar** (trei, cinci sau mai multe muchii care se întâlnesc, un colț al unei fețe cu trei sau cinci laturi, sau capătul unei îndoituri) nu există un petec polinomial exact. Acolo, petecul ia punctul exact și planul tangent din acel colț și curbele muchiilor vecinilor, astfel încât petecele se întâlnesc tot fără gol. Continuitatea tangentă de-a lungul muchiilor care se întâlnesc în punct este aproximativă. Panoul Formă și panoul operației dau cel mai mare unghi, de obicei sub 2°. Un **Nivel** mai mare în panoul operației face aceste petece mai mici și mai apropiate.
- Muchiile ascuțite sunt muchii reale ale solidului, deci le puteți rotunji.
- Fiecare petec este propria lui față, deci o formă are multe fețe, iar între ele se trasează linii.

## Caracteristici de suprafață în Proiectare

Comenzile pentru suprafață sunt în meniul {{ui:Mai multe}} din Proiectare, sub operații. Au nevoie de nucleul exact. Corpurile de suprafață se desenează transparente, în albastru. Nu fac parte din solid până nu le îngroșați sau le cusăturați.

| Comandă | Ce face |
|---|---|
| Petec | Umple o buclă închisă de muchii. Mai întâi {{key:Shift}}+clic pe muchiile solidului, sau selectați un corp de suprafață ca să-i umpleți deschiderea. **Tangent (G1)** face ca petecul să se îmbine lin cu acea suprafață. |
| Suprafață loft | O suprafață printr-un lanț de curbe pe schiță (deschis sau închis), în ordinea istoricului. |
| Cusătură | Coase corpuri de suprafață de-a lungul muchiilor comune. Dacă se închid, rezultatul este un solid, cu o **Operație** ca alte operații. |
| Îngroșare | Dă unui corp de suprafață grosime: de-a lungul normalei lui, împotriva ei sau jumătate în fiecare sens. Rezultatul este un solid. |
| Decalare suprafață | O copie a unui corp de suprafață mutată de-a lungul normalelor sale. Originalul rămâne. |
| Extindere suprafață | Crește o suprafață cu o față peste muchiile alese. |
| Tăiere suprafață | Taie un corp de suprafață acolo unde îl traversează alt corp de suprafață sau solidul. Faceți clic pe **Alegeți un punct pe bucată** ca să alegeți ce bucată să păstrați, sau păstrați tot restul. |

Cusătura, Îngroșarea, Extinderea și Tăierea consumă corpul de suprafață din care pornesc. Operațiile ulterioare folosesc cel nou.

Limite acum: formele cu mai multe bucăți închise separate nu se convertesc într-un singur solid; zonele regulate nu se unesc în suprafețe mai mari; și vezi [Ce este încă nerealizat](topic:not-built-yet).
