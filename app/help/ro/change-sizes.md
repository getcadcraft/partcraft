---
title: Modificarea dimensiunilor fără deschiderea schiței
summary: Acționați o piesă din cifrele panoului din dreapta: cotele schiței, adâncimile, numărul și unghiurile, cum să planificați o piesă astfel încât cifrele potrivite să o controleze și unde preiau controlul parametrii și ecuațiile.
keywords: parametri, cote de acționare, intenție de proiectare, modificare dimensiune, ecuații, variabile globale, tabel de proiectare, configurații, redimensionare, modificare cotă
from: c2ae1a32
---

Fiecare dimensiune dintr-o piesă PartCraft este un număr pe care îl puteți modifica ulterior: cotele din schițele sale și setările operațiilor sale. Nu trebuie să deschideți o schiță pentru a-i modifica cotele.

## Modificarea unei cote de schiță din panou

1. Dați clic pe o operație din istoric, de exemplu „Extrude1”.
2. Sub setările proprii ale extrudării, **Cotele schiței (Sketch1)** listează fiecare cotă a schiței sale: „Distanță”, „Diametru”, „Unghi (°)” și așa mai departe.
3. Tastați o valoare nouă într-un câmp și apăsați {{key:Enter}} sau {{key:Tab}}.

Schița se rezolvă cu noua valoare, iar întreaga piesă se reconstruiește. Selectarea schiței în sine afișează aceeași listă ca **Cote de acționare**.

O rază sau un diametru trebuie să fie mai mare decât zero, iar un unghi este între 0 și 180 de grade; bara de stare o spune dacă nu este așa.

:::tip
Care câmp este care? Câmpurile sunt listate în ordinea în care au fost făcute cotele. Dacă nu sunteți sigur, deschideți schița (dublu clic pe ea), faceți dublu clic pe cotă în zona de desen și modificați-o acolo.
:::

## Tastarea imediată a cifrei principale

Selectați o operație în istoric (sau adăugați-o pur și simplu) și tastați un număr: acesta intră în câmpul principal al operației, cel pe care îl modificați cel mai des (**Adâncime** la o extrudare, **Unghi** la o revoluție, **Diametru** la o gaură, **Număr** la o repetiție, **Rază** la o racordare, grosimea peretelui la o scobire în coajă). Apăsați {{key:Enter}} pentru a-l seta sau {{key:Esc}} pentru a păstra valoarea veche. Adăugarea unei extrudări o spune în bara de stare: „Extrude1 adăugată. Modificați cifrele din dreapta sau tastați acum un număr pentru adâncimea ei.”

## Modificarea cifrei din istoric

Rândul fiecărei operații din istoric afișează cifra sa principală alături de nume: „Extrude1 25 mm”, „Hole1 Ø6.6 thru”, „Fillet1 R2”, „LPattern1 4 × 20 mm”. Faceți dublu clic pe cifră (sau selectați rândul și apăsați {{key:F2}}) și se deschide chiar acolo un câmp. Tastați noua valoare și apăsați {{key:Enter}}; {{key:Esc}} păstrează valoarea veche. Funcționează exact ca fiind câmpul operației din dreapta: aceleași limite, `=` pentru a tasta o ecuație precum `=width/2` și un singur pas de anulare.

La o extrudare, o gaură sau o repetiție, un dublu clic oriunde pe rând deschide câmpul. La o racordare, un șanfren, o scobire în coajă, o înclinare sau un filet, un dublu clic pe nume duce încă la alegerea muchiilor sau a fețelor, deci faceți dublu clic pe cifra în sine. Schițele nu au cifră în rând: un dublu clic deschide schița.

## Tragerea în vedere

Selectați o extrudare în istoric (sau dați clic pe ea în vedere, apoi pe rândul ei) și o săgeată portocalie stă pe fața ei de capăt, cu adâncimea într-un câmp alăturat. Trageți săgeata: piesa urmează tragerea, iar eliberarea stabilește noua adâncime ca un singur pas ({{key:Mod+Z}} o readuce). Apăsați {{key:Esc}} în timpul tragerii pentru a reveni de unde ați pornit. Adâncimea se mișcă în pași de o zecime din mărimea sa: 1 mm la o extrudare de 25 mm, 0.1 mm la una de 3 mm.

O revoluție primește o săgeată curbă la capătul rotirii sale: trageți-o în jurul axei pentru a modifica unghiul, în grade întregi, de la 1° la 360°.

Sau dați clic în câmpul de lângă săgeată, tastați o valoare (sau `=` și o ecuație) și apăsați {{key:Enter}}. Nu există săgeată la o extrudare care merge **Prin toată grosimea** sau până la o față, sau la o valoare controlată de o ecuație: modificați-le din dreapta.

## Cifrele care controlează o piesă

| Unde | Ce puteți modifica |
|---|---|
| Schiță | Fiecare cotă: lungimi, distanțe, raze, diametre, unghiuri |
| Extrudare și Decupare | Adâncime, condiția de capăt, direcția, adaos sau tăiere |
| Revoluție și Tăiere prin revoluție | Unghi, axă, adaos sau tăiere |
| Gaură | Diametru, adâncime, prin toată grosimea, diametrul și adâncimea lamajului |
| Racordare, Șanfren, Scobire în coajă | Rază, distanță, grosimea și direcția peretelui și ce muchii sau fețe |
| Liniară și Circulară | Număr, pas sau unghi, direcție sau axă |
| Piesă | Curbe (cât de fin sunt facetate formele rotunde) |
| Desen | Unde taie secțiunea, mărimea și scara detaliului, valorile GD&T |

## Planificați piesa astfel încât cifrele potrivite s-o controleze

Cifrele pe care le dați sunt cele pe care le puteți modifica. Câteva obiceiuri fac ca modificările ulterioare să se comporte corect:

- **Cotați ce contează pentru lucrare.** Dacă o gaură trebuie să rămână la 15 mm de o muchie, cotați-o față de acea muchie, nu față de origine.
- **Definiți complet schițele.** Atunci o modificare mută doar ceea ce trebuie (vezi [Definirea completă a unei schițe](topic:relations-dimensions)).
- **Folosiți relații pentru intenție.** Egal pe două găuri înseamnă că un singur diametru le controlează pe amândouă. Forme simetrice: puneți originea pe linia de axă sau folosiți Mijloc.
- **Schițați pe fețe create prin operații.** O schiță pe fața de capăt a unei extrudări se mută când se modifică adâncimea.
- **Folosiți repetiții în loc de copiere.** O gaură repetată de opt ori are un singur diametru de modificat.

## Dincolo de cifrele singulare

- **O cifră care controlează mai multe:** folosiți parametri și ecuații: [Acționarea unei piese cu parametri](topic:parameters).
- **Mai multe dimensiuni ale aceleiași piese:** salvați fiecare ca [configurație](topic:design-tables); acestea sunt păstrate în fișierul piesei.
- **Aritmetică într-un câmp numeric:** tastați `=40/2` sau `=width / 2`. Aceasta creează o ecuație; vezi [Ecuațiile în ambele sensuri](topic:equations-two-way).
- **Unități în inci:** piesa afișează milimetri. Într-un câmp numeric cu `=`, sau într-un parametru, `2in` se transformă în 50.8.

Vezi [Ce nu este realizat încă](topic:not-built-yet).
