---
title: Primii pași cu PartCraft
summary: Ce face PartCraft azi, ce are nevoie browserul și o primă piesă în zece minute, de la schiță până la fișierul salvat.
keywords: start, prima rulare, pornire rapidă, introducere, tutorial, prima piesă, placă, parametric, modelator de piese
from: 5f0a668d
---

PartCraft este aplicația parametrică pentru piese și ansambluri din familia CadCraft. Se desenează o schiță 2D, se fixează cu relații și cote, se transformă într-un solid cu operații precum extrudare, revoluție și gaură, iar orice număr poate fi schimbat mai târziu: piesa se reconstruiește din istoricul său. Piesele intră apoi în ansambluri, unde articulațiile le așază și permit verificarea mișcării.

Ce face această versiune:

| Sarcină | Ce se obține |
|---|---|
| Schițe | Linii, dreptunghiuri, cercuri, arce, puncte și linii de axă, cu relații și cote și o stare live: insuficient definită, complet definită sau supradefinită |
| Operații pe solid | Extrudare, decupare, revoluție, decupare prin revoluție, găuri simple și lamate, repetiții liniare și circulare, oglindire, racordări și șanfrene pe muchii drepte între fețe plane, și scobire în coajă și înclinări pe fețe plane. Baleierea, loftul și celelalte operații care au nevoie de un nucleu exact nu sunt încă realizate în această versiune: vezi [Ce este încă nerealizat](topic:not-built-yet) |
| Istoric | Editarea oricărui număr al unei operații, suprimare, derulare, reordonare și ștergere, cu anulare |
| Ansambluri | Piese unite prin articulații rigide, de rotație și de glisare, o verificare a conflictelor și o verificare a mișcării |
| Desene | O foaie A3 cu trei vederi, o izometrie, o secțiune, o vedere de detaliu, dimensiuni de gabarit, repere, cadre de toleranță geometrică și simboluri de stare a suprafeței, exportată ca PDF |
| Fișiere | Fișiere proprii de piesă și ansamblu; ieșiri STL, 3MF, STEP cu fațete, DXF și PDF |

Totul rulează în browser, pe calculator. **Nu se încarcă nimic.** Pentru unde ajung fișierele, vezi [Fișiere: deschidere, salvare și exportare](topic:files).

## Ce este necesar

- Un Chrome, Edge, Firefox sau Safari actual, cu **WebGL** (grafică 3D) și **WebAssembly** activate. Ambele sunt active implicit. Geometria solidă este construită de un nucleu de plasă WebAssembly care se încarcă odată cu aplicația: vezi [Nucleul de plasă](topic:solid-kernels).
- Mouse-ul este cel mai simplu. Touchpad-ul funcționează, iar ecranele tactile funcționează pentru vizualizare și schițe simple: vezi [Touchpad, atingere și ecrane mici](topic:trackpad-and-touch).
- Un ecran de cel puțin 1280 de pixeli lățime arată toată bara de instrumente pe un rând. Ferestrele mai înguste derulează bara lateral; pe telefon, panourile se deschid ca foi dintr-o bară de jos.

Mai multe despre browsere: [Browsere și calculatoare](common:browsers).

:::note
PartCraft rulează în browser și, pe desktop, în interiorul CadCraft Studio. Salvarea în cloud nu este disponibilă încă: piesele se deschid de pe calculator și se salvează înapoi ca fișiere.
:::

## Deschiderea PartCraft

1. Deschideți PartCraft.
2. Așteptați până ecranul scrie „Se încarcă nucleul solid…”. Asta durează puțin prima dată.
3. Se vede o vizualizare 3D goală cu trei plane de bază, istoricul din stânga („Part1”, apoi Planul din față, Planul de sus, Planul din dreapta) și o casetă în vizualizare cu titlul „Începeți o piesă”.
4. Indicatorul de lângă capătul din dreapta al barei de stare scrie „Nucleu de plasă”: PartCraft construiește fiecare piesă cu nucleul de plasă în această versiune, deci fețele rotunde sunt fațete plane. Modelarea poate începe imediat.

Dacă vizualizarea spune că browserul nu poate afișa 3D, sau nucleul nu s-a încărcat, vezi [Depanare](topic:troubleshooting#the-app-does-not-start).

## Prima piesă: o placă cu o gaură

Se realizează o placă de 60 × 40 mm, groasă de 10 mm, cu o gaură de 6 mm străbătută. Unitățile sunt milimetri.

### Schițarea conturului

1. Faceți clic pe **Planul din față** în istoricul din stânga. Planul se evidențiază în vizualizare.
2. Alegeți {{ui:Sketch}} din bara de instrumente sau apăsați {{key:S}}. Vizualizarea se orientează drept spre plan, iar instrumentul Linie este activ.
3. Apăsați {{key:R}} pentru instrumentul Dreptunghi.
4. Mutați cursorul pe origine (cercul mic roșu cu cruce). Un pătrat mic arată că se agață. Faceți clic.
5. Mutați în sus și la dreapta și faceți clic din nou. Există un dreptunghi. Liniile sale sunt albastre: albastrul înseamnă că se pot încă mișca.

### Stabilirea dimensiunilor

1. Apăsați {{key:D}} pentru instrumentul Cotare.
2. Faceți clic pe linia de sus, apoi clic puțin deasupra ei. Se deschide o casetă cu lungimea curentă.
3. Tastați `60` și apăsați {{key:Enter}}. Dreptunghiul devine lat de 60 mm.
4. Faceți clic pe linia din stânga, apoi clic puțin la stânga ei. Tastați `40` și apăsați {{key:Enter}}.

Indicatorul din colțul stânga sus al vizualizării scrie acum **Complet definită**, iar liniile trec la culoarea de contur (neagră pe tema Hârtie, deschisă pe tema Model). Fiecare punct și dimensiune este fixat.

:::tip
Dacă dreptunghiul a fost început departe de origine, indicatorul spune în continuare „Insuficient definită · 2 grade de libertate”. Apăsați {{key:S}} pentru Selectare, faceți clic pe un colț, {{key:Shift}}+clic pe origine, apoi alegeți {{ui:• Coincident}} în panoul din dreapta.
:::

### Extrudarea

1. Alegeți {{ui:Exit}} din bara de instrumente sau apăsați {{key:Esc}} până se închide schița (de obicei de două ori).
2. Alegeți {{ui:Extrude}}. Apare un solid de 10 mm. „Extrude1” se adaugă la istoric, cu „Sketch1” indentat sub el.
3. Panoul din dreapta arată setările extrudării. Pentru a schimba grosimea, tastați un număr nou în **Adâncime (mm)** și apăsați {{key:Enter}} sau {{key:Tab}}. Piesa se reconstruiește imediat.

### Adăugarea gaurii

1. Faceți clic pe fața plană mare din fața plăcii (capătul extrudării). Toată fața se evidențiază, iar panoul din dreapta scrie **Față**.
2. Alegeți {{ui:Sketch on this face}} în panoul din dreapta.
3. Apăsați {{key:P}} pentru instrumentul Punct și faceți clic lângă mijlocul feței.
4. Alegeți {{ui:Exit}}.
5. Alegeți {{ui:Hole}}. O gaură de 6 mm trece prin placă. Schimbați **Diametru (mm)** în panoul din dreapta, dacă doriți.

Caseta **Piesă** din stânga jos arată acum un volum, aria suprafeței, dimensiunea (60 × 40 × 10 mm) și „Găuri străpunse: 1”.

### Salvarea

1. Apăsați {{key:Mod+S}} sau alegeți {{ui:Save}}.
2. Browserul descarcă `Part1.partcraft.json` în dosarul de descărcări. Fișierul conține întregul istoric: deschideți-l din nou cu {{ui:Open}} pentru a continua modificările.

Pentru a redenumi piesa mai întâi, faceți clic pe spațiul gol din vizualizare, ca să nu fie selectat nimic, apoi tastați un **Nume** nou în panoul din dreapta.

## Ce urmează

- [Desenarea primei schițe](topic:sketch-basics) și [Fixarea completă a unei schițe](topic:relations-dimensions) explică schițatorul pe larg.
- [Modificarea unei piese prin istoricul său](topic:edit-history) arată cum se editează ce ați construit.
- [Rotunjire, teșire și golire](topic:fillet-chamfer-shell) și [Realizarea unui desen](topic:drawing-pdf) finalizează piesa. [Ce este încă nerealizat](topic:not-built-yet) enumeră ce nu face această versiune, cum ar fi baleierile și loftul.
- [Venind de la alt modelator parametric](topic:coming-from) listează obișnuințele care funcționează altfel aici.
- [Taste și mouse](topic:keyboard) este lista completă a comenzilor rapide.
- [Utilizarea acestui ajutor](common:help).
