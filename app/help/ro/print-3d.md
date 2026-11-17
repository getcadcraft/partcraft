---
title: Pregătirea unei piese pentru imprimare 3D
summary: Verificați că o piesă sau un ansamblu este închis, că încape în patul imprimantei și stă pe o bază, apoi descărcați-l ca STL sau 3MF pentru programul de feliere.
keywords: imprimare 3D, imprimantă, imprimare, program de feliere, slicer, stl, 3mf, etanș, închis, varietate, pat, dimensiune pat, placă de imprimare, porțiune în consolă, suporturi, bază, milimetri, export, filete, joc
from: 90d81dff
---

Un program de feliere are nevoie de o formă închisă: fără găuri, cu fiecare față orientată spre exterior și fără să treacă prin ea însăși. Piesele construite în PartCraft sunt închise prin construcție, deci verificarea arată mai ales dimensiunea, dacă piesa încape în patul imprimantei, dacă stă pe o față plană și cât din ea iese în consolă.

## Verificare și descărcare

1. Opțional, o singură dată: setați patul imprimantei în {{ui:Setări}} › PartCraft › **Imprimantă 3D**: lățime, adâncime și înălțime în milimetri. Lăsați-le goale pentru a sări peste verificarea aceasta.
2. Alegeți {{ui:Export}}, apoi {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}.

   Dialogul afișează „Gata de imprimat” sau „Nu este gata de imprimat”, listează ce nu este în regulă și dă dimensiunea pe pat (X × Y × Z, în milimetri), volumul și numărul de triunghiuri.

3. Faceți clic pe {{ui:Descărcare 3MF}} sau {{ui:Descărcare STL}}. Fișierul este același cu {{ui:Export}} › {{ui:3MF, pentru imprimare 3D}} sau {{ui:STL, pentru imprimare 3D}}.

În cazul unui ansamblu, verificarea și fișierele iau întregul ansamblu, fiecare copie în poziția în care este plasată.

Piesa este verificată așa cum o scrie exportul: ce indică în sus în PartCraft (perpendicular pe planul Top) indică în sus pe pat. O piesă schițată pe planul Top stă plată.

## Ce poate spune dialogul

**Nu este gata de imprimat** (un program de feliere o poate refuza sau o poate imprima greșit): găuri (muchii cu o față doar pe o parte), muchii comune a trei sau mai multor fețe, fețe orientate în sens opus, un corp întors pe dos sau un corp care trece prin el însuși. O piesă construită în PartCraft nu ar trebui să arate niciuna dintre acestea; dacă apare vreuna, vedeți [Depanare](topic:troubleshooting).

**Avertismente** (se imprimă, dar uitați-vă mai întâi):

- **Mai mare decât patul imprimantei**, chiar și rotită cu 90° pe el.
- **Nimic nu stă plat jos**: rotiți piesa în programul de feliere astfel încât o față să se sprijine pe pat, altfel va avea nevoie de suporturi sau de un radier.
- **Se înclină cu mai mult de 45° față de verticală**: aceste fețe au nevoie de suport, stând așa cum este. O altă poziție poate necesita mai puțin.
- **Corpurile separate se suprapun** sau **se ating față în față**: programele de feliere le unesc de obicei. {{ui:Combinare}} din Operații › {{ui:Mai multe}} le unește într-un singur corp. Vedeți [Corpuri](topic:bodies).
- **Mai mic de 1 mm pe o dimensiune**: verificați dimensiunile piesei.

## Filete care se imprimă

Un filet modelat se imprimă ca un filet real. Dați-i un **Joc** pentru ca un șurub imprimat să intre într-o piuliță imprimată: vedeți [Filete](topic:threads).

## Netezirea suprafețelor rotunde

STL și 3MF sunt făcute din triunghiuri. Pentru fețe rotunde mai netede, faceți clic pe spațiul gol, astfel încât să nu fie nimic selectat, și setați **Curbe** la **Fină (128 pe rotație)** sau **Foarte fină (256 pe rotație)** în panoul din dreapta, înainte de export. Mai multe triunghiuri înseamnă fișiere mai mari.

## Mai mare, mai mică sau în bucăți

- **Export › Scalare pentru imprimare (STL sau 3MF)…** salvează piesa scalată pe fiecare axă, fără a o modifica: un **adaos de contracție** în procente (dimensiune × (1 + s), sau dimensiunea exactă ÷ (1 − s)) pentru un model de turnare, sau factori simpli, față de mijloc, de colțul cel mai de jos, de mijlocul de jos sau de origine.
- **Export › Împărțire pentru imprimare (o arhivă zip cu piese)…** taie o piesă prea mare pentru imprimantă în bucăți care încap fiecare în patul indicat, unite prin știfturi, pene, cozi de rândunică, găuri pentru știfturi sau buzunare pentru magneți (cu jocul setat), fiecare bucată și fiecare îmbinare fiind numerotate. Salvează bucățile ca STL sau 3MF într-o arhivă zip, împreună cu o fișă de asamblare. Piesa în sine nu se modifică.

## Neverificat

Grosimea peretelui, detaliile mai mici decât duza imprimantei și felul în care programul de feliere plasează suporturile. Programul de feliere le arată pe acestea.
