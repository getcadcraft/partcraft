---
title: Spline-uri, tăiere, decalare și alte instrumente de schiță
summary: Desenați spline-uri prin puncte de trecere și prin puncte de control, tăiați și prelungiți curbe, decalați un lanț, oglindiți față de o linie de axă, adăugați poligoane și fante, repetați geometria schiței și proiectați muchiile modelului.
keywords: spline, punct de trecere, punct de control, b-spline, nurbs, curbă, tăiere, prelungire, decalare, oglindire, simetric, poligon, hexagon, fantă, repetiție, repetiție liniară, repetiție circulară, proiectare, proiecție de muchie, includere, convertire entități
from: 3ecb166a
---

Aceste instrumente funcționează într-o schiță deschisă. {{ui:Spline}} și {{ui:Tăiere}} sunt în bara de instrumente. Celelalte se află sub {{ui:Mai multe}}, la capătul instrumentelor de schiță. Fiecare instrument este un pas de anulare, iar {{key:Esc}} îl oprește. Pentru instrumentele de desenare de bază vezi [Desenați prima schiță](topic:sketch-basics).

## Spline-uri

Un spline este o curbă netedă. Există două tipuri.

| Instrument | Tastă | Cum se desenează |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Faceți clic pe punctele prin care trece curba. Încheiați cu {{key:Enter}}, {{key:Esc}}, clic dreapta sau dublu clic. Faceți clic din nou pe primul punct pentru a închide spline-ul |
| {{ui:Spline cu puncte de control}} (sub {{ui:Mai multe}}) | | Faceți clic pe punctele de control. Curba este trasă spre ele, dar atinge doar primul și ultimul punct. Poligonul de control punctat se vede în timpul desenării și după aceea |

- **Punctele sunt puncte de schiță.** Trageți-le sau dați-le relații și cote ca oricărui alt punct. Primul punct al unui spline se poate agăța de capătul unei linii, ceea ce le unește printr-o relație coincident.
- **Tangentă la un capăt.** Selectați o linie, un arc sau un spline care se întâlnește cu un capăt al unui spline, apoi spline-ul, și alegeți {{ui:T Tangent}}. Direcția capătului spline-ului urmează atunci linia. O tangentă în afara capetelor spline-ului este refuzată: „O tangentă la un spline necesită ca linia, arcul sau spline-ul să se întâlnească cu unul dintre capetele sale.”
- **Capetele.** Fără o relație de tangentă, capetele unui spline prin puncte de trecere sunt naturale (fără curbură chiar la capăt). Curba este cubică și trece prin fiecare punct, iar distanța dintre puncte îi stabilește spațierea.
- **Spline-urile închise** formează singure un profil. Spline-urile deschise unesc linii și arce într-o buclă închisă, ca orice altă curbă.
- Ștergerea unui punct dintr-un spline înlătură acel punct și păstrează spline-ul, cât timp mai are cel puțin două puncte (trei când este închis).

Extrudarea și revoluția construiesc spline-ul cu nucleul de plasă din segmente scurte drepte (curbele adevărate necesită un nucleu exact: încă nerealizat în această versiune). Exportul DXF scrie un spline ca polilinie care rămâne în 0.01 mm față de curbă, deoarece DXF R12 nu are entitate spline.

## Tăiere și prelungire

| Instrument | Tastă | Cum |
|---|---|---|
| {{ui:Tăiere}} | {{key:T}} | Indicați o curbă: porțiunea care ar fi înlăturată apare roșie, până la cele mai apropiate intersecții. Faceți clic pentru a o înlătura. O curbă care nu intersectează nimic este înlăturată în întregime |
| {{ui:Prelungire}} (sub {{ui:Mai multe}}) | {{key:E}} | Faceți clic pe o linie sau un arc aproape de capăt pentru a-l prelungi. Crește până la următoarea curbă pe care o întâlnește. „Nu există nimic de atins pentru acest capăt.” când nimic nu stă în cale |

Tăierea și prelungirea funcționează pe linii, arce, cercuri și spline-uri (prelungirea: doar linii și arce).

- Un **cerc** tăiat devine arc. Cota sa de rază sau de diametru trece pe arc.
- Tăierea mijlocului unei linii lasă două linii care rămân pe aceeași dreaptă. Tăierea mijlocului unui arc lasă două arce cu același centru și o relație egal.
- Un **spline** tăiat devine un spline cu puncte de control care urmează exact vechea curbă. O relație de tangentă la un capăt care se păstrează rămâne.
- Noul capăt se pune pe curba care l-a tăiat (pe linie, arc sau cerc, sau coincident cu capătul ei). Spline-urile nu pot ține un punct, așa că un spline care taie nu adaugă nicio relație.

**Relațiile care nu mai se potrivesc sunt înlăturate**, iar bara de stare arată câte. De exemplu, o cotă de lungime pe o linie tăiată este înlăturată, dar relațiile orizontale sau paralele rămân.

## Decalare

1. Alegeți {{ui:Decalare}} sub {{ui:Mai multe}} sau apăsați {{key:O}}.
2. Faceți clic pe o linie, un arc, un cerc sau un spline. Întreg lanțul său se evidențiază: toate curbele unite cap la cap, până la un punct în care se întâlnesc trei sau mai multe. Pentru a decala doar o parte a unui lanț, selectați mai întâi acele curbe, apoi alegeți Decalare și faceți clic pe una dintre ele.
3. Mutați indicatorul spre latura pe care merge copia. Urmează o previzualizare punctată. Apăsați {{key:B}} pentru ambele laturi.
4. Faceți clic, introduceți distanța și apăsați {{key:Enter}}.

Liniile și arcele sunt decalate exact. Colțurile sunt prelungite sau tăiate până se întâlnesc. Copia are o singură cotă **Decalare**, iar celelalte piese o urmează: faceți dublu clic pe cotă pentru a modifica întreaga copie. O distanță prea mare pentru lanț este refuzată, de exemplu „Această distanță este prea mare pentru acest lanț: o latură s-ar întoarce pe dos.”

Un **spline** este decalat printr-un nou spline prin puncte de trecere, în 0.001 mm față de decalarea reală. Această copie este fixă: nu urmează modificările ulterioare și nu are cotă de decalare. Un spline dintr-un lanț are nevoie de îmbinări netede (tangente) la capete.

## Oglindire

1. Cu Selectare activ, alegeți ce să oglindiți.
2. Alegeți {{ui:Oglindire}} sub {{ui:Mai multe}} sau apăsați {{key:M}}.
3. Faceți clic pe linia sau linia de axă față de care se oglindește.

Fiecare punct oglindit primește o relație **Simetric** cu originalul, astfel încât copia urmează când se modifică originalul. Punctele aflate pe linia de oglindire sunt comune, iar cercurile oglindite primesc o relație Egal. Dacă nu era selectat nimic, faceți clic pe elementele de oglindit, apăsați {{key:Enter}}, apoi faceți clic pe linia de oglindire.

## Poligoane și fante

| Instrument | Cum |
|---|---|
| {{ui:Poligon}} | Faceți clic pe centru, apoi pe un colț, apoi introduceți numărul de laturi (de la 3 la 64). Laturile sunt egale, iar colțurile se află pe un cerc de construcție. Cotați cercul pentru a dimensiona poligonul |
| {{ui:Fantă}} | Faceți clic pe centrul unui capăt, apoi pe centrul celuilalt capăt, apoi faceți clic pentru a stabili lățimea. Două linii, tangente la două semicercuri egale |

## Repetiții de schiță

Selectați mai întâi geometria, apoi:

- {{ui:Repetiție liniară}}: faceți clic pe un punct de start, apoi pe locul unde merge prima copie, apoi introduceți numărul de copii (inclusiv originalul).
- {{ui:Repetiție circulară}}: faceți clic pe centru, apoi introduceți numărul de copii, distribuite uniform pe un cerc complet.

Copiile preiau relațiile dintre geometria selectată (o repetiție circulară exclude relațiile orizontale și verticale). Copiile nu sunt legate de original: modificați una, iar celelalte rămân neschimbate.

## Proiectarea muchiilor piesei

1. Alegeți {{ui:Proiecție de muchie}} sub {{ui:Mai multe}}.
2. Faceți clic pe o muchie dreaptă sau circulară a piesei din spatele schiței.

Muchia este copiată exact pe planul schiței și fixată (relația Fixare). Nu urmează modificările ulterioare ale piesei. Apăsați {{key:Q}} pentru a o face geometrie de construcție. Un cerc înclinat față de planul schiței s-ar proiecta într-o elipsă, deci este refuzat. La fel și muchiile de formă liberă și muchiile care ies drept din schiță. Proiectarea necesită un nucleu exact: încă nerealizată în această versiune.
