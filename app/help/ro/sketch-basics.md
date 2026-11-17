---
title: Desenați prima schiță
summary: Deschideți o schiță pe un plan sau pe o față plană, desenați linii, dreptunghiuri, cercuri, arce, puncte și linii de axă, rotunjiți un colț, selectați, trageți și ștergeți.
keywords: schiță, desen, linie, dreptunghi, cerc, arc, punct, linie de axă, construcție, racordare, racordare schiță, rotunjire colț, agățare, selectare, fereastră, tragere, profil
from: 28be7436
---

Fiecare solid începe ca o schiță: un desen plan pe un plan. Acest ghid acoperă instrumentele de desenare. Fixarea schiței cu relații și cote este descrisă în [Definirea completă a unei schițe](topic:relations-dimensions).

## Pornirea unei schițe

Puteți desena schița pe un plan de bază sau pe orice față plană a piesei.

1. Alegeți unde să desenați schița:
   - un plan de bază: faceți clic pe **planul Front**, **planul Top** sau **planul Right** din istoric, sau faceți clic pe plan în vizualizare;
   - o față plană: faceți clic pe față în vizualizare. Toată fața se evidențiază.
2. Alegeți {{ui:Schiță}} din bara de instrumente sau apăsați {{key:S}}. (Cu o față selectată puteți alege și {{ui:Schiță pe această față}} din panoul din dreapta; cu un plan, {{ui:Schiță pe el}}.)

Vizualizarea se orientează perpendicular pe plan, instrumentele de schiță apar în bara de instrumente, iar instrumentul Linie este gata. Dacă apăsați {{ui:Schiță}} fără nimic selectat, planurile de bază se afișează, iar bara de stare spune „Faceți clic pe un plan sau pe o față plană pentru a desena schița. Esc oprește.”

:::note
Pe o față curbă nu se poate desena o schiță: „Fața este curbă. Selectați o față plană sau un plan pentru a desena schița.”
:::

**O schiță pe o față urmează fața respectivă.** Dacă fața a fost creată de o muchie de schiță sau de capătul unei extrudări, noua schiță se mută când se modifică operația (un buzunar mai adânc preia cu el schița de pe fundul său). Dacă panoul spune că fața este „Fixată unde a fost selectată”, schița rămâne acolo unde se află acum fața.

## Instrumentele de desenare

Fiecare instrument are un buton în bara de instrumente și o tastă. Alegeți din nou același buton, apăsați {{key:S}} sau apăsați {{key:Esc}} pentru a reveni la Selectare.

| Instrument | Tastă | Cum se desenează |
|---|---|---|
| {{ui:Linie}} | {{key:L}} | Faceți clic pe început, apoi pe fiecare punct următor. Liniile se înlănțuie cap la cap. Încheiați lanțul cu {{key:Esc}}, {{key:Enter}}, clic dreapta sau dublu clic. Un clic pe un punct existent încheie și el lanțul |
| {{ui:Dreptunghi}} | {{key:R}} | Faceți clic pe un colț, apoi pe colțul opus. Obțineți patru linii unite în colțuri, două orizontale și două verticale |
| {{ui:Cerc}} | {{key:C}} | Faceți clic pe centru, apoi pe un punct al cercului |
| {{ui:Arc}} | {{key:A}} | Faceți clic pe centru, apoi pe început, apoi pe sfârșit. Arcul merge în direcția în care mutați indicatorul în jurul centrului |
| {{ui:Punct}} | {{key:P}} | Faceți clic. Un punct singur marchează centrul unei găuri pentru {{ui:Gaură}} |
| {{ui:Linie de axă}} | {{key:N}} | Ca o linie, câte un segment pe rând. Se desenează punctat; este geometrie de construcție, folosită ca axă de revoluție sau ca referință |
| {{ui:Racordare}} | {{key:F}} | Faceți clic pe un colț în care se întâlnesc două linii, introduceți raza, apăsați {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Faceți clic pe punctele prin care trece curba; {{key:Enter}} încheie, iar un clic pe primul punct o închide. Vezi [Spline-uri, tăiere, decalare și alte instrumente de schiță](topic:sketch-tools) |
| {{ui:Tăiere}} | {{key:T}} | Faceți clic pe porțiunea de curbă de înlăturat, până la cele mai apropiate intersecții |
| {{ui:Cotare}} | {{key:D}} | Vezi [Definirea completă a unei schițe](topic:relations-dimensions) |

În timpul desenării, o casetă mică lângă indicator arată lungimea, dimensiunea, diametrul sau raza.

### Introduceți dimensiunea în timpul desenării

După primul clic al unei linii, dreptunghi, cerc sau arc, puteți introduce dimensiunea în loc să o faceți prin clic. Tastarea unui număr deschide lângă indicator caseta cu acel număr:

| Instrument | Casete ({{key:Tab}} trece la următoarea) | Ce se întâmplă la {{key:Enter}} |
|---|---|---|
| {{ui:Linie}}, {{ui:Linie de axă}} | Lungime, apoi Unghi (°) față de axa X a schiței | Linia se desenează de lungimea aceasta, spre indicator sau la unghiul introdus; lanțul continuă de la capătul ei |
| {{ui:Dreptunghi}} | Lățime, apoi Înălțime | Dreptunghiul se desenează din primul colț spre indicator; o dimensiune care nu a fost introdusă vine din indicator |
| {{ui:Cerc}} | Diametru | Cercul se desenează la acest diametru |
| {{ui:Arc}} | Rază după centru, apoi Unghi arc (°) după început | Începutul se află la această distanță de centru; apoi arcul merge atâta în jur, în direcția în care ați mutat indicatorul |

Fiecare dimensiune introdusă devine o **cotă de comandă** în același pas, astfel încât schița rezultă dimensionată: {{key:Mod+Z}} înlătură forma și cotele ei împreună. Un clic în loc de {{key:Enter}} păstrează ce ați introdus și ia restul din clic. {{key:Esc}} închide caseta și revine la indicator.

Dezactivați-l din {{ui:Setări}} › {{ui:PartCraft}} › **Cotare în timpul desenării** dacă doriți să desenați doar prin clicuri. Vezi [Setările PartCraft](topic:settings).

{{ui:Mai multe}}, la capătul instrumentelor de schiță, conține spline-ul cu puncte de control, {{ui:Prelungire}}, {{ui:Decalare}}, {{ui:Oglindire}}, {{ui:Poligon}}, {{ui:Fantă}}, repetițiile de schiță și {{ui:Proiecție de muchie}}: vezi [Spline-uri, tăiere, decalare și alte instrumente de schiță](topic:sketch-tools).

### Agățarea

Agățarea adaugă relații automat, astfel încât schița rămâne unită când se mișcă:

- Pe un **capăt sau pe origine** apare un mic pătrat. Punctul nou devine coincident cu acesta.
- Pe o **linie, cerc sau arc** apare o mică cruce. Punctul nou se așează pe acea curbă.
- O linie aflată la cel mult 3 grade de orizontală sau verticală se agață de ea și primește o relație orizontală sau verticală. Eticheta arată „H” sau „V”.

Pentru a evita agățarea, măriți imaginea, astfel încât clicul să fie mai departe de punct sau de curbă.

## Rotunjirea unui colț

1. Apăsați {{key:F}} sau alegeți {{ui:Racordare}}.
2. Faceți clic pe punctul de colț în care se întâlnesc două linii.
3. Se deschide o casetă cu o rază sugerată. Introduceți raza și apăsați {{key:Enter}}.

Ambele linii sunt tăiate și unite printr-un arc tangent cu o cotă de rază. Mesaje pe care le puteți vedea: „Racordarea are nevoie de un colț în care se întâlnesc exact două linii.” și „Raza este prea mare pentru aceste linii.”

:::tip
Racordarea unei schițe rotunjește un colț al profilului, astfel încât extrudarea primește muchii verticale rotunjite. Pentru a rotunji muchiile solidului în sine (de exemplu muchiile de sus ale unei plăci), folosiți în schimb operația {{ui:Racordare}} pe piesă: vezi [Rotunjire, teșire și golire](topic:fillet-chamfer-shell). Într-o schiță, Racordare din bara de instrumente este instrumentul de schiță; pe piesă, este operația.
:::

## Geometrie de construcție

Liniile, cercurile și arcele de construcție sunt punctate și gri. Ele ghidează schița, dar nu fac parte din profilul care este extrudat sau rotit.

1. Selectați liniile, cercurile sau arcele.
2. Apăsați {{key:Q}} sau alegeți {{ui:Construcție}}. Apăsați din nou pentru a le reveni.

## Selectare, tragere și ștergere

Apăsați {{key:S}} (sau {{key:Esc}} până când niciun instrument nu este activ) pentru Selectare.

- Faceți clic pe un punct, o linie, un cerc, un arc, un simbol de relație sau o cotă pentru a-l selecta. {{key:Shift}}+clic adaugă la selecție sau scoate din ea. Pe Windows și Linux, {{key:Ctrl}}+clic face același lucru; pe Mac, ⌘+clic.
- Trageți pe spațiu gol pentru a desena o fereastră: tot ce se află complet în interiorul ei este selectat.
- Trageți un punct sau o linie pentru a o muta. Solverul păstrează fiecare relație și cotă în timpul mișcării, astfel încât se mișcă doar geometria liberă. Trageți marginea unui cerc pentru a schimba raza acestuia.
- Trageți numărul unei cote pentru a muta eticheta.
- Apăsați {{key:Delete}} sau {{key:Backspace}}, ori alegeți {{ui:Ștergere}} în panoul din dreapta, pentru a șterge selecția. Ștergerea geometriei șterge și relațiile din ea.

## Zoom și panoramare în schiță

- Derulați rotița pentru a face zoom la indicator.
- Trageți cu butonul din mijloc sau cel din dreapta pentru a panorama.
- {{ui:Potrivire}} din bara de instrumente sau din panoul din dreapta încadrează schița în vizualizare. Într-o schiță, tasta {{key:F}} este instrumentul Racordare, nu Potrivire.

## Închiderea schiței

Alegeți {{ui:Ieșire}} din bara de instrumente sau {{ui:Ieșire din schiță}} din panoul din dreapta, ori apăsați {{key:Esc}} până se închide schița. Fiecare {{key:Esc}} anulează mai întâi ce este în curs, apoi revine la Selectare, apoi golește selecția, iar următorul închide schița.

Schița rămâne selectată, astfel încât următoarea {{ui:Extrudare}} sau {{ui:Revoluție}} o folosește.

## Ce face un profil bun

{{ui:Extrudare}} și {{ui:Revoluție}} folosesc **fiecare buclă închisă** formată din liniile, cercurile, arcele și spline-urile solide (non-construcție) ale schiței. Buclele din interiorul altor bucle devin găuri.

- Fiecare capăt trebuie să se întâlnească exact cu un alt capăt. „Profilul este deschis: un capăt la (12.5, 40) nu este unit cu nimic.” indică locul.
- Niciun trei capete nu pot ajunge într-un singur punct: „Profilul se ramifică la (0, 20): acolo se întâlnesc mai mult de două capete.”
- Punctele și geometria de construcție sunt ignorate de profil.

Pasul următor: [Definirea completă a unei schițe cu relații și cote](topic:relations-dimensions).

## O schiță dintr-o fotografie

**Operații › Mai multe › Schiță dintr-o fotografie…** (sau grupul Schiță din panglica arborelui de operații) trasează o imagine a unei piese plane pe un fond simplu — conturul și găurile sale — sau un desen cu pixul într-o schiță de linii, arce și cercuri. Indicați o lungime (lățimea, înălțimea sau cea mai lungă latură), astfel încât schița să aibă dimensiunea corectă, verificați ce a găsit în previzualizare și alegeți **Creați schița**; poate să o și extrudeze, în același pas de anulare. Se trasează pe acest calculator. Razele colțurilor revin în limita a circa 5 %, detaliile de un pixel sau două se pierd, iar o fotografie făcută înclinat sau cu umbre peste piesă nu este redresată: fotografiați piesa perpendicular, cu lumină uniformă.
