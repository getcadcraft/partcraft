---
title: Primii pași cu PartCraft
summary: Ce face PartCraft astăzi, ce are nevoie browserul și o primă piesă în zece minute, de la schiță până la fișierul salvat.
keywords: pornire, prima rulare, pornire rapidă, introducere, tutorial, prima piesă, placă, parametric, modelator de piese
from: 7d43283f
---

PartCraft este aplicația parametrică pentru piese și ansambluri din familia CadCraft. Desenați o schiță 2D, o fixați cu relații și cote, o transformați într-un solid cu operații precum extrudare, revoluție și gaură și puteți modifica oricând orice număr: piesa se reconstruiește din istoricul ei. Piesele intră apoi în ansambluri, unde îmbinările le așază și permit verificarea mișcării.

Ce face această versiune:

| Sarcină | Ce obțineți |
|---|---|
| Schițe | Linii, dreptunghiuri, cercuri, arce, puncte și linii de axă, cu relații și cote și o stare în timp real: subdefinită, complet definită sau supradefinită |
| Operații solide | Extrudare, decupare, revoluție, decupare prin revoluție, găuri simple și lamate, modele liniare și circulare, oglindire, rotunjiri și teșiri pe muchii drepte între fețe plane, precum și cochilii și înclinări pe fețe plane. Baleierile, lofturile și celelalte operații care necesită un nucleu exact nu sunt încă realizate în această versiune: vezi [Ce este încă nerealizat](topic:not-built-yet) |
| Istoric | Editați numerele oricărei operații, suprimați, reveniți, reordonați și ștergeți, cu anulare |
| Ansambluri | Piese unite prin îmbinări rigide, de rotație și glisante, o verificare a coliziunilor și una a mișcării |
| Desene | O foaie A3 cu trei vederi, o izometrie, o secțiune, o vedere de detaliu, dimensiuni de gabarit, referințe, cadre de toleranțe geometrice și simboluri de rugozitate a suprafeței, exportate ca PDF |
| Fișiere | Fișiere proprii de piesă și ansamblu; ieșiri STL, 3MF, STEP exact, DXF și PDF |

Totul rulează în browser, pe calculator. **Nu se încarcă nimic.** Vezi [Fișiere: deschidere, salvare și export](topic:files) pentru locul în care ajung fișierele.

## Ce aveți nevoie

- Un Chrome, Edge, Firefox sau Safari actual, cu **WebGL** (grafică 3D) și **WebAssembly** activate. Ambele sunt active implicit. Geometria solidă este construită de un nucleu de plasă WebAssembly care se încarcă odată cu aplicația: vezi [Nucleul de plasă](topic:solid-kernels).
- Mouse-ul este cel mai simplu. Trackpad-ul funcționează, iar ecranele tactile funcționează pentru vizualizare și schițe simple: vezi [Trackpad, atingere și ecrane mici](topic:trackpad-and-touch).
- Un ecran de cel puțin 1280 de pixeli lățime arată toată bara de instrumente pe un singur rând. Ferestrele mai înguste derulează bara lateral; pe telefon, panourile se deschid ca foi dintr-o bară de jos.

Despre browsere: [Browsere și calculatoare](common:browsers).

:::note
PartCraft rulează în browser și, pe desktop, în interiorul CadCraft Studio. Salvarea în cloud nu este disponibilă încă: deschideți piesele de pe calculator și le salvați înapoi ca fișiere.
:::

## Deschiderea PartCraft

1. Deschideți PartCraft.
2. Așteptați până ecranul afișează „Se încarcă nucleul solid…”. Prima dată durează puțin.
3. Vedeți o vedere 3D goală cu trei plane de bază, istoricul din stânga („Part1”, apoi Planul frontal, Planul de sus, Planul din dreapta) și o casetă din vedere cu titlul „Începeți o piesă”.
4. Cipul de lângă capătul din dreapta al barei de stare spune „Nucleu de plasă”: în această versiune PartCraft construiește fiecare piesă cu nucleul de plasă, deci fețele rotunde sunt fațete plane. Puteți începe să modelați imediat.

Dacă vederea spune că browserul nu poate afișa 3D sau că nucleul nu s-a încărcat, vezi [Depanare](topic:troubleshooting#the-app-does-not-start).

## Prima piesă: o placă cu o gaură

Veți realiza o placă de 60 × 40 mm, groasă de 10 mm, cu o gaură de 6 mm prin ea. Unitățile sunt milimetri.

### Schițarea conturului

1. Faceți clic pe **Planul frontal** în istoricul din stânga. Planul se evidențiază în vedere.
2. Alegeți {{ui:Schiță}} din bara de instrumente sau apăsați {{key:S}}. Vederea se orientează drept spre plan, iar unealta Linie este activă.
3. Apăsați {{key:R}} pentru unealta Dreptunghi.
4. Mutați cursorul pe origine (cercul mic roșu cu o cruce). Un pătrățel mic arată că se agață. Faceți clic.
5. Mutați în sus și la dreapta și faceți clic din nou. Aveți un dreptunghi. Liniile sale sunt albastre: albastrul înseamnă că se mai pot mișca.

### Dați-i dimensiuni

1. Apăsați {{key:D}} pentru unealta Cotă.
2. Faceți clic pe linia de sus, apoi clic puțin deasupra ei. Se deschide o casetă cu numărul, cu lungimea curentă.
3. Scrieți `60` și apăsați {{key:Enter}}. Dreptunghiul devine lat de 60 mm.
4. Faceți clic pe linia din stânga, apoi clic puțin în stânga ei. Scrieți `40` și apăsați {{key:Enter}}.

Cipul din colțul stânga sus al vederii spune acum **Complet definită**, iar liniile devin în culoarea de bază (negru pe tema Paper, deschis pe tema Model). Fiecare punct și fiecare dimensiune sunt fixate.

:::tip
Dacă ați început dreptunghiul departe de origine, cipul spune în continuare „Subdefinită · 2 grade de libertate”. Apăsați {{key:S}} pentru Selectare, faceți clic pe un colț, {{key:Shift}}+clic pe origine, apoi alegeți {{ui:• Coincident}} în panoul din dreapta.
:::

### Extrudați-o

1. Alegeți {{ui:Ieșire}} din bara de instrumente sau apăsați {{key:Esc}} până se închide schița (de obicei de două ori).
2. Alegeți {{ui:Extrudare}}. Apare un solid de 10 mm. „Extrude1” se adaugă în istoric, cu „Sketch1” indentată sub el.
3. Panoul din dreapta arată setările extrudării. Ca să schimbați grosimea, scrieți un număr nou în **Adâncime (mm)** și apăsați {{key:Enter}} sau {{key:Tab}}. Piesa se reconstruiește imediat.

### Adăugați gaura

1. Faceți clic pe fața plană mare din fața plăcii (capătul extrudării). Toată fața se evidențiază, iar panoul din dreapta spune **Față**.
2. Alegeți {{ui:Schiță pe această față}} în panoul din dreapta.
3. Apăsați {{key:P}} pentru unealta Punct și faceți clic lângă mijlocul feței.
4. Alegeți {{ui:Ieșire}}.
5. Alegeți {{ui:Gaură}}. O gaură de 6 mm trece prin placă. Modificați **Diametru (mm)** în panoul din dreapta dacă doriți.

Caseta **Piesă** din stânga jos arată acum un volum, o arie a suprafeței, dimensiunea (60 × 40 × 10 mm) și „Găuri străbătute: 1”.

### Salvați-o

1. Apăsați {{key:Mod+S}} sau alegeți {{ui:Salvare}}.
2. Browserul descarcă `Part1.partcraft.json` în folderul de descărcări. Fișierul conține întregul istoric: deschideți-l din nou cu {{ui:Deschidere}} ca să continuați editarea.

Ca să redenumiți mai întâi piesa, faceți clic pe spațiul gol din vedere, ca să nu fie selectat nimic, și scrieți un **Nume** nou în panoul din dreapta.

## Unde mergeți mai departe

- [Desenați prima schiță](topic:sketch-basics) și [Definiți complet o schiță](topic:relations-dimensions) explică pe larg schițatorul.
- [Schimbați o piesă prin istoricul ei](topic:edit-history) arată cum editați ce ați construit.
- [Rotunjiți, teșiți și goliți](topic:fillet-chamfer-shell) și [Realizați un desen](topic:drawing-pdf) finisează piesa. [Ce este încă nerealizat](topic:not-built-yet) listează ce nu face această versiune, cum ar fi baleierile și lofturile.
- [Venind de la alt modelator parametric](topic:coming-from) listează obiceiurile care funcționează altfel aici.
- [Taste și mouse](topic:keyboard) este lista completă de scurtături.
- [Utilizarea acestui ajutor](common:help).
