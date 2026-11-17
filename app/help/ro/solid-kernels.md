---
title: Nucleul de plasă
summary: Această versiune a PartCraft construiește fiecare piesă cu un nucleu de plasă care rulează în browser. Ce înseamnă aceasta pentru suprafețele rotunde, volume și fișiere, cum se vede că funcționează și ce operații așteaptă un nucleu exact.
keywords: nucleu, plasă, manifold, exact, b-rep, facetat, curbe, opencascade, occt, racordare necesită exact, nerealizat, offline, webassembly
from: f931645c
---

Un nucleu geometric este motorul care transformă istoricul într-un solid. Această versiune a PartCraft are unul: **nucleul de plasă** (manifold-3d). Rulează pe calculator ca un mic program WebAssembly și este gata la scurt timp după deschiderea aplicației. Nimic din piesă nu este trimis nicăieri.

| | Nucleu de plasă |
|---|---|
| Forme rotunde | Fațete plane. Setarea **Curbe** din panoul piesei stabilește cât de fine sunt |
| Volume și arii | Ale solidului facetat, puțin mai mici la piesele rotunde |
| Schițe, extrudare, tăiere, revoluție, găuri, repetiții, oglindire, plane de referință | Da |
| Racordare și Șanfren | Pe muchii drepte între fețe plane; racordările care se întâlnesc sunt retezate la unghi |
| Scobire în coajă și Înclinare | Scobirea în coajă deschide fețele plane (grosime exactă a peretelui); Înclinarea înclină fețele plane |
| Exporturi | STL, 3MF, STEP (exact: fețele rotunde scrise pe suprafețele lor reale; sau facetat), PDF și DXF de desen |
| Vizualizări de desen | Desenate din fațete, inclusiv vederile în secțiune |
| Fețe și muchii | Denumite și recunoscute după tip (plană, cilindru, con, sferă, tor; dreaptă, cerc), preluate din schițe: spațiile de lucru Simulare, Generativ și Fabricație, {{ui:Măsurare}}, selectarea și tabelul de găuri le folosesc |

Cipul de lângă capătul din dreapta al barei de stare afișează **Nucleu de plasă** cât timp construiește piesa.

## Ce așteaptă un nucleu exact

Un nucleu exact (B-rep) păstrează cercuri, cilindri și conuri reale, racordări netede pe orice muchie, baleieri, lofturi, suprafețe, tablă, nervuri, mai multe corpuri și importul STEP cu fețe curbe păstrate exacte: toate se construiesc pe unul. (Exportul STEP exact nu așteaptă după el: nucleul de plasă cunoaște suprafața reală a fiecărei fețe din schiță, iar exportul o scrie.) Versiunile de laborator anterioare ale PartCraft foloseau OpenCascade pentru aceasta. Licența sa (LGPL) nu se potrivește cu această versiune, în care fiecare aplicație este Apache-2.0 și folosește doar biblioteci cu licență permisivă, așa că nu este inclusă. Pentru nimic de aici nu există dată.

Până atunci, aceste operații afișează **Încă nerealizat** atunci când le alegeți: bara de stare dă motivul, iar sfaturile butoanelor lor se termină cu „încă nerealizat (necesită un nucleu exact)”. [Ce nu este încă realizat](topic:not-built-yet) enumeră fiecare operație și ce să faceți în loc.

O piesă realizată cu ele într-o versiune anterioară se deschide în continuare. Acele operații rămân în istoric marcate ca nerealizate (treceți cu indicatorul peste una pentru motiv), restul piesei se construiește, iar salvarea le păstrează neschimbate.

## Suprafețe rotunde și Curbe

Nucleul de plasă desenează un cerc ca poligon. **Curbe** din panoul piesei stabilește câte laturi primește un cerc complet; mai multe laturi arată mai netede și se apropie mai mult de valoarea reală, dar durează mai mult la construcție. Volumele, ariile și distanțele din {{ui:Măsurare}} sunt ale acestui solid facetat: pentru o gaură sau o proeminență sunt puțin mai mici decât ale formei rotunde.

## Online și offline

Nucleul de plasă face parte din descărcarea aplicației. Pentru a lucra fără conexiune, salvați PartCraft pentru utilizare offline cât timp sunteți online: alegeți {{ui:Salvare pentru offline}} în bara aplicației și așteptați până apare **Pregătit pentru offline**. Detalii: [Lucrul offline](common:offline).
