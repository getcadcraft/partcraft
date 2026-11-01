---
title: Nucleul de plasă
summary: Această versiune a PartCraft construiește fiecare piesă cu un nucleu de plasă care rulează în browser. Ce înseamnă asta pentru fețele rotunde, volume și fișiere, cum se vede că funcționează și ce funcții așteaptă un nucleu exact.
keywords: nucleu, plasă, manifold, exact, b-rep, cu fațete, curbe, opencascade, occt, racordarea necesită exact, nerealizat, offline, webassembly
from: 68d32d16
---

Un nucleu geometric este motorul care transformă istoricul într-un solid. Această versiune a PartCraft are unul: **nucleul de plasă** (manifold-3d). Rulează pe calculator ca un mic program WebAssembly și este gata cu puțin după deschiderea aplicației. Nimic din piesă nu este trimis nicăieri.

| | Nucleu de plasă |
|---|---|
| Forme rotunde | Fațete plane. **Curbe** din panoul piesei stabilește cât de fine sunt |
| Volume și arii | Ale solidului cu fațete, puțin mai mici la piesele rotunde |
| Schițe, extrudare, decupare, revoluție, găuri, repetiții, oglindire, plane de referință | Da |
| Racordare și teșire | Pe muchii drepte între fețe plane; racordările care se întâlnesc sunt tăiate la unghi |
| Scobire și înclinare | Scobirea deschide fețele plane (grosime exactă a peretelui); Înclinarea înclină fețele plane |
| Exporturi | STL, 3MF, STEP (cu fațete), PDF al desenului și DXF |
| Vederi de desen | Desenate din fațete, inclusiv vederile în secțiune |
| Fețe și muchii | Denumite și recunoscute după tip (plană, cilindru, con, sferă, tor; dreaptă, cerc), luate din schițe: spațiile de lucru Simulare, Generativ și Fabricație, Măsurare, selecția și tabelul găurilor le folosesc |

Indicatorul din dreapta barei de stare scrie **Nucleu de plasă** cât timp construiește piesa.

## Ce așteaptă un nucleu exact

Un nucleu exact (B-rep) păstrează cercuri, cilindri și conuri adevărate și racordări netede pe orice muchie, baleieri, lofturi, suprafețe, tablă, nervuri, mai multe corpuri, import STEP și export STEP exact sunt construite pe unul. Versiunile de laborator anterioare ale PartCraft foloseau OpenCascade pentru asta. Licența sa (LGPL) nu se potrivește acestei versiuni, în care fiecare aplicație este Apache-2.0 și folosește doar biblioteci cu licență permisivă, așa că nu este inclusă. Nu există încă o dată.

Până atunci, aceste funcții spun **Încă nerealizat** atunci când sunt alese: bara de stare dă motivul, iar sfaturile butoanelor se termină cu „încă nerealizat (are nevoie de un nucleu exact)”. [Ce este încă nerealizat](topic:not-built-yet) enumeră fiecare, cu ce să se facă în loc.

O piesă realizată cu ele într-o versiune anterioară tot se deschide. Aceste funcții rămân în istoric marcate ca nerealizate (motivul apare la trecerea cursorului peste ele), restul piesei se construiește, iar salvarea le păstrează neschimbate.

## Fețe rotunde și Curbe

Nucleul de plasă desenează un cerc ca poligon. **Curbe** din panoul piesei stabilește câte laturi primește un cerc întreg; mai multe laturi arată mai netede și se apropie mai mult de valoarea reală, dar durează mai mult la construire. Volumele, ariile și distanțele din {{ui:Measure}} sunt ale acestui solid cu fațete: pentru o gaură sau o proeminență, sunt puțin mai mici decât ale formei rotunde.

## Online și offline

Nucleul de plasă face parte din descărcarea aplicației. Pentru a lucra fără conexiune, salvați PartCraft pentru utilizare offline cât sunteți online: alegeți {{ui:Save for offline}} din bara aplicației și așteptați până scrie **Pregătit pentru offline**. Detalii: [Lucrul offline](common:offline).
