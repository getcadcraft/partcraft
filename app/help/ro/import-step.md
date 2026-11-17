---
title: Deschiderea unui fișier STEP și lucrul pe el
summary: Aduceți un model STEP de la un furnizor sau de la alt program CAD în PartCraft ca un corp solid, ca piesă nouă sau adăugat la piesa curentă, stabiliți care este partea de sus și adăugați schițe și operații la el.
keywords: step, stp, import, deschidere step, ap203, ap214, ap242, model de furnizor, solid simplu, solid importat, axa de sus, z în sus, y în sus, triunghiuri, facetat, step de ansamblu
from: ca0eca5f
---

PartCraft deschide fișiere STEP (`.step` sau `.stp`, AP203, AP214 și AP242) ca **corpuri solide** pe care puteți desena schițe, tăia, găuri și combina cu propriile operații. Corpul nu are istoric propriu: nu puteți schimba dimensiunile cu care a fost făcut, ci doar să adăugați la el sau să tăiați din el.

Această versiune construiește fiecare piesă cu nucleul de plasă (mesh), deci un fișier STEP este **citit ca triunghiuri**: fețele plane rămân plane, iar fețele curbe (cilindri, conuri, sfere, tori, suprafețe B-spline) devin multe fațete plane mici. Volumul său se află la o fracțiune de procent de cel exact. Păstrarea exactă a fețelor curbe necesită un nucleu exact, care nu există în această versiune.

## Deschiderea unui fișier STEP

1. Alegeți {{ui:Deschidere}} sau apăsați {{key:Mod+O}} și alegeți fișierul `.step` sau `.stp`. Sau trageți fișierul pe vizualizarea 3D.
2. PartCraft citește fișierul și arată ce a găsit, de exemplu: „Fișier AP214: 1 solid, 10 fețe, citit ca triunghiuri.” Dedesubt sunt numărul de triunghiuri, orice a trebuit lăsat afară sau unit, și dacă rezultatul se închide.
3. Verificați **Sus în fișier**. Un fișier STEP își spune singur unitatea (milimetri, inci, metri…); PartCraft o convertește în milimetri, deci **Unități în fișier** arată Milimetri, „fișierul spune așa”. **Dimensiune aici** arată cât de mare va fi.
4. Alegeți {{ui:Deschidere ca corp}} pentru o piesă goală, sau {{ui:Adăugare la această piesă}} / {{ui:Piesă nouă}} când piesa are deja operații. La adăugare se întreabă ce trebuie să facă **Utilizare pentru**: adăugare, tăiere sau păstrarea doar a zonei comune.

Apare o operație **Imported1** în istoric, iar bara de stare afișează, de exemplu, „plate.step este un corp solid: 57995.937 mm³, 6 fețe plane pe care se poate desena.”

## Un ansamblu STEP

Un ansamblu intră ca **un singur corp**, cu fiecare piesă acolo unde o plasează fișierul („3 piese plasate în fișier intră unde se află”). O piesă folosită de două ori intră de două ori. Numele pieselor și arborele ansamblului nu se păstrează.

## Stabilirea direcției „sus”

Majoritatea programelor CAD folosesc Z în sus; PartCraft folosește Y în sus. Implicit, PartCraft rotește fișierul astfel încât Z să indice în sus aici. Dacă piesa apare culcată pe o latură, selectați **Imported1** și setați **Sus în fișier** la **Y în sus**. **Unități în fișier** și **Utilizare pentru** pot fi schimbate și acolo; fiecare schimbare este un pas de anulare.

## Construirea pe el

- Faceți clic pe o față plană a corpului și alegeți {{ui:Schiță pe această față}}. Fețele plane ale modelului STEP își păstrează locul când corpul este reconstruit.
- Adăugați tăieturi, găuri, proeminențe, repetiții și oglindiri ca pe orice piesă.
- Verificați dimensiunea în caseta **Piesă**: volum, arie a suprafeței, dimensiune.

Racordările, șanfrenele și scobirile în coajă au nevoie de nucleul exact, ca pe orice piesă din această versiune ([Nucleul de plasă (mesh)](topic:solid-kernels)).

## Unde se păstrează

Triunghiurile sunt stocate **în interiorul** fișierului `.partcraft.json`, deci fișierul piesei este autonom: nu mai aveți nevoie de fișierul STEP.

## Mesaje

| Mesaj | Ce înseamnă |
|---|---|
| '„part.stp” nu este un fișier STEP (nu începe cu ISO-10303-21).' | Fișierul nu este text STEP simplu. Cereți expeditorului un fișier STEP AP203, AP214 sau AP242 |
| "Fișierul STEP nu a putut fi citit: secțiunea de date lipsește sau este deteriorată." | Fișierul este tăiat sau deteriorat. Copiați-l din nou |
| "Fișierul STEP nu conține niciun corp solid sau de suprafață: nu există nimic de adus." | Fișierul conține doar desene, puncte sau date. Cereți un solid |
| "Fișierul STEP este prea mare (peste 60 MB) pentru a fi importat aici." și celelalte limite ale cititorului (intrări, fețe, triunghiuri) | Simplificați modelul la sursă sau trimiteți piesele una câte una |
| "… liniile deteriorate din fișier au fost sărite." | Unele linii nu au putut fi citite; restul a fost importat. Verificați corpul |
| "… fețele nu au putut fi transformate în triunghiuri și au fost lăsate afară." | Aceste fețe lasă goluri, pe care PartCraft încearcă să le umple; dacă corpul nu se închide, nu este adăugat |
| "… fețele de un tip care nu se citește (…) au fost sărite." | Un tip rar de suprafață. Cereți modelul cu suprafețe simple sau B-spline |
| "Nu se închide …" | Fețele nu formează un solid închis (un model de suprafață sau fețe lipsă). PartCraft arată golurile și nu adaugă nimic |

## Limite

- Fețele curbe sunt desenate și măsurate ca fațete plane, ca la orice piesă construită în această versiune. PartCraft păstrează lângă corp fețele plane, cilindrii, conurile, sferele și torii din fișier, astfel că {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} le scrie înapoi ca suprafețe adevărate, găurile ca găuri, împreună cu operațiile pe care le adăugați. Fețele date în fișier ca spline-uri, baleieri sau suprafețe de revoluție rămân fațete în export. O piesă salvată înainte de versiunea 0.9.1 nu are suprafețe păstrate: deschideți din nou fișierul STEP ca să le obțineți.
- {{ui:Export}} › {{ui:DXF al schiței sau al feței plane}} cu o față plană aleasă scrie o gaură rotundă a fișierului ca un cerc adevărat.
- Culorile, numele corpurilor, structura ansamblului și PMI (toleranțele din fișier) nu sunt citite.
- Pe lângă STEP, PartCraft deschide plase STL, OBJ și 3MF ([Deschiderea unei plase STL, OBJ sau 3MF](topic:open-meshes)) și fișiere `.3dm` ([Deschiderea unui model .3dm](topic:open-3dm-files)) ca corpuri solide. IGES și fișierele native ale altor programe nu sunt acceptate.
- O piesă cu un solid STEP importat de o versiune care avea nucleul exact păstrează textul STEP; această versiune sare peste această operație („încă nerealizat”). Deschideți din nou fișierul STEP ca să-l aduceți ca triunghiuri.
