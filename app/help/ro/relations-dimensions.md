---
title: Definirea completă a unei schițe cu relații și cote
summary: Adăugați relații din panoul din dreapta și cote cu instrumentul Cotare, citiți culorile sub-definit, complet definit și supra-definit și reparați o schiță supra-definită.
keywords: relații, constrângeri, cote, cotă inteligentă, complet definit, sub-definit, supra-definit, grade de libertate, coincident, orizontal, vertical, paralel, perpendicular, tangent, egal, concentric, mijloc, fixare, conflict, redundant
from: e76d047a
---

O schiță este **complet definită** când fiecare punct și fiecare dimensiune sunt fixate de relații și cote. O schiță complet definită se schimbă doar când modificați un număr, deci piesa se comportă previzibil când o editați mai târziu. PartCraft nu vă obligă să definiți complet o schiță, dar arată mereu cât de aproape sunteți.

## Citirea stării schiței

Starea apare în trei locuri: cipul din colțul stânga sus al vizualizării, mesajul din partea de sus a panoului din dreapta și semnul din istoric.

| Stare | Cip | Culoarea geometriei | Ce înseamnă |
|---|---|---|---|
| Sub-definită | „Sub-definită · 3 grade de libertate” | Albastru | Unele elemente geometrice se pot încă mișca. Trageți geometria albastră ca să vedeți în ce sens |
| Complet definită | „Complet definită” | Culoarea de cerneală (negru pe Hârtie, deschis pe Model) | Fiecare punct și fiecare dimensiune este fixată |
| Supra-definită | „Supra-definită” | Roșu pe relațiile implicate | Unele relații se contrazic între ele sau una este deja implicată de altele |

Geometria în construcție este gri și punctată, orice ar fi starea ei. Elementele selectate sunt portocalii. „Grad de libertate” este un sens în care ceva se poate încă mișca: un punct liber are două (stânga-dreapta și sus-jos), un cerc liber are trei (centrul și raza lui).

Legenda de sub mesajul din panoul din dreapta repetă culorile.

## Adăugarea unei cote

1. Apăsați {{key:D}} sau alegeți {{ui:Cotare}}.
2. Faceți clic pe ce măsurați:
   - **o linie**: lungimea ei;
   - **un cerc**: diametrul lui; **un arc**: raza lui;
   - **două puncte** (un capăt, un centru, un punct liber sau originea): distanța dintre ele;
   - **un punct și o linie**: distanța de la punct la linie;
   - **două linii paralele**: distanța dintre ele; **două linii sub un unghi**: unghiul dintre ele.
3. După un element, bara de stare spune „Faceți clic pe un al doilea element sau pe locul unde merge cota.” Faceți clic pe un al doilea element sau într-un spațiu gol, unde doriți numărul.
4. Se deschide o casetă cu valoarea curentă. Tastați dimensiunea și apăsați {{key:Enter}}. {{key:Esc}} păstrează valoarea măsurată.

**Unde plasați numărul decide tipul** pentru o linie înclinată sau două puncte: plasați-l deasupra sau dedesubt ca să obțineți o distanță orizontală, în stânga sau în dreapta pentru una verticală, iar în altă parte pentru distanța reală (aliniată).

Caseta acceptă numere simple în milimetri sau grade, cum ar fi `25`, `12.5` sau `1e3`. Un `⌀`, `Ø` sau `R` la început, sau `mm` ori `°` la sfârșit, sunt ignorate. Unghiurile sunt de la 0 la 180 de grade. Operațiile aritmetice, cum ar fi `20+5`, nu sunt acceptate; ca să legați o dimensiune de o variabilă sau o formulă, începeți-o cu `=`.

Ca să schimbați o cotă mai târziu, faceți dublu clic pe numărul ei din schiță sau alegeți **Editare** lângă ea în lista din panoul din dreapta.

:::tip
Puteți și să selectați mai întâi geometria (instrumentul Selectare) și să alegeți un buton de cotare din panoul din dreapta: {{ui:Distanță}}, {{ui:Distanță orizontală}}, {{ui:Distanță verticală}}, {{ui:Rază}}, {{ui:Diametru}} sau {{ui:Unghi}}. Apar doar cele care se potrivesc selecției. Așa dați unui cerc o rază în loc de diametru.
:::

## Adăugarea unei relații

Relațiile se adaugă din panoul din dreapta, nu cu un instrument.

1. Apăsați {{key:S}} pentru Selectare.
2. Faceți clic pe un element, apoi {{key:Shift}}+clic pe un al doilea, dacă relația cere două. Și originea poate fi selectată.
3. Panoul din dreapta spune „Selectat: linia l3, punctul p1” și afișează câte un buton pentru fiecare relație potrivită, cum ar fi {{ui:∥ Paralel}} sau {{ui:• Coincident}}.
4. Alegeți butonul. Schița se rezolvă imediat.

Dacă nicio relație nu se potrivește, panoul spune „Nicio relație nu se potrivește acestei selecții. Selectați unul sau două elemente (Shift+clic adaugă).”

Lista completă a relațiilor, ce cere fiecare și ce face, este în [Relații și cote de schiță](topic:sketch-relations).

Relațiile apar în schiță ca simboluri mici lângă geometrie (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Simbolurile de coincidență sunt ascunse, dacă geometria nu este selectată sau relația nu are probleme. Faceți clic pe un simbol ca să selectați relația.

## Un exemplu: profil de consolă în L

1. Schițați pe **Planul frontal**. Cu instrumentul Linie, porniți din origine și faceți clic pe șase colțuri ale unui L, terminând din nou în origine. Lanțul se încheie singur când faceți clic pe primul punct.
2. Liniile trasate aproape orizontal sau vertical au deja relațiile H și V, cu excepția ultimei: o linie care se termină într-un punct existent nu primește automat o relație. Apăsați {{key:S}}, faceți clic pe ultima linie și alegeți {{ui:V Vertical}} din panoul din dreapta. Cipul spune „Sub-definită · 4 grade de libertate”.
3. Apăsați {{key:D}}. Faceți clic pe linia de jos, faceți clic dedesubt, tastați `80`, {{key:Enter}}.
4. Faceți clic pe linia din stânga, faceți clic în stânga ei, tastați `60`, {{key:Enter}}.
5. Cotați scurta linie de sus cu `20` și linia verticală interioară cu `45`, în același mod.
6. Cipul spune acum **Complet definită**, iar tot L-ul devine negru.

## Repararea unei schițe supra-definite

Când o relație sau o cotă nouă contrazice celelalte, PartCraft nu mută nimic. Geometria rămâne exact cum era, relațiile implicate devin roșii, iar bara de stare le numește:

- „Supra-definită: Orizontal, Distanță 40 nu pot fi toate îndeplinite. Anulați sau ștergeți una dintre ele.” Relațiile se contrazic.
- „Supra-definită: Paralel este deja implicată. Ștergeți-o.” Relația nu adaugă nimic: celelalte o impun deja. (Laturile unui dreptunghi sunt deja paralele, de exemplu.)

Pentru a o repara:

1. Apăsați {{key:Mod+Z}} ca să anulați ultima modificare, sau
2. Găsiți elementul roșu din lista **Relații și cote** din panoul din dreapta (grupul care îl conține este deschis și roșu) și alegeți **Ștergere** lângă el. Puteți și să faceți clic pe simbolul sau numărul lui din schiță și să apăsați {{key:Delete}}.

:::note
În această versiune nu există cote „conduse” (de referință). O cotă care ar raporta doar o dimensiune deja fixată de celelalte relații este tratată ca supra-definită. Citiți dimensiunile în panou: selectați o linie și priviți butoanele de cotare, sau verificați datele piesei după extrudare.
:::

O schiță supra-definită cu un conflict real face ca operația care o folosește să eșueze („Supra-definită: 1 relație nu poate fi îndeplinită integral.”), iar istoricul o marchează cu **⚠ eroare**. O schiță doar redundantă se construiește în continuare, cu un avertisment ⚠.

## Trageți pentru a găsi ce este liber

În Selectare, trageți orice punct sau linie albastră. Solverul o mută cât mai puțin, păstrând fiecare relație. Dacă o tragere ar strica o relație, geometria revine în loc. Aceasta este cea mai rapidă cale de a vedea ce cotă lipsește.

## Lista relațiilor

Când nu este selectat nimic, panoul din dreapta listează **Relații și cote**. Fiecare rând are:

- **Editare** (doar pentru cote): deschide caseta cu număr;
- **Selectare**: o selectează în schiță;
- **Ștergere**: o elimină.

Relațiile de un fel care apar de mai multe ori împart un singur rând, cum ar fi „Coincident × 5” pentru un dreptunghi legat de origine. Faceți clic pe rând ca să-l deschideți: fiecare relație este listată prin ce leagă („punctul p2, punctul p4”), cu propriile **Selectare** și **Ștergere**. Rândul în sine are:

- **Selectare**: le selectează pe toate în schiță;
- **Ștergere totală**: le elimină pe toate dintr-o dată ({{key:Mod+Z}} le aduce înapoi).

Un grup care conține o relație supra-definită se deschide singur, cu numele lui în roșu. Cotele sunt listate mereu câte una pe rând, cu valorile lor.

Cu geometrie selectată, lista arată doar **Relațiile selecției**.
