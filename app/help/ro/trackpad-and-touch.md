---
title: Touchpad, ecran tactil și ecrane mici
summary: Cum rotiți, deplasați și măriți cu un touchpad Mac sau de laptop, ce funcționează pe un ecran tactil și ce are încă nevoie de tastatură, și cum se rearanjează ecranul pe un telefon sau o fereastră îngustă.
keywords: touchpad, Magic Mouse, mac, tactil, tabletă, ipad, telefon, ciupire, două degete, clic dreapta, clic secundar, gesturi, ecran mic, mobil
from: 0e764fd8
---

PartCraft este făcut pentru un mouse cu rotiță și buton din mijloc, dar un touchpad funcționează bine odată ce cunoașteți gesturile, iar un ecran tactil funcționează pentru privit piese și schițe simple.

## Touchpad

:::mac
| Pentru a | Faceți astfel |
|---|---|
| Roti piesa (3D) | Clic și tragere cu un deget (sau tragere cu trei degete, dacă ați activat tragerea cu trei degete) |
| Pan (3D) | Țineți {{key:Shift}} (sau ⌘) și faceți clic-tragere, sau clic-tragere cu două degete apăsate (o tragere cu clic secundar) |
| Rotire a piesei, prin glisare | Glisați cu două degete; cu {{key:Shift}}, glisarea face pan. Are nevoie ca **Derulare** să fie pe „Determină automat” (implicit) sau „Touchpad” |
| Zoom (3D și schiță) | Ciupire. Zoomul merge spre cursor. Cu **Derulare** pe „Rotiță mouse”, o derulare cu două degete mărește și ea |
| Clic dreapta | Clic cu două degete, sau {{key:Ctrl}}+clic |
| Pan într-o schiță | Glisare cu două degete („Determină automat” sau „Touchpad”), sau clic-tragere cu două degete apăsate. {{key:Shift}}+tragere nu face pan într-o schiță (desenează o fereastră de selecție) |
| Adăugare la o selecție într-o schiță | {{key:Shift}}+clic sau ⌘+clic |

Activați clicul secundar din **Setări sistem, Trackpad, Point & Click** dacă clicul cu două degete nu face nimic.
:::

:::windows linux
| Pentru a | Faceți astfel |
|---|---|
| Roti piesa (3D) | Apăsați touchpadul (sau atingeți și țineți) și trageți |
| Pan (3D) | Țineți {{key:Shift}} sau {{key:Ctrl}} și trageți, sau trageți cu zona butonului din dreapta apăsată |
| Rotire a piesei, prin glisare | Glisați cu două degete; cu {{key:Shift}}, glisarea face pan. Are nevoie ca **Derulare** să fie pe „Determină automat” (implicit) sau „Touchpad” |
| Zoom (3D și schiță) | Ciupire, acolo unde touchpadul o suportă. Zoomul merge spre cursor. Cu **Derulare** pe „Rotiță mouse”, o derulare cu două degete mărește |
| Clic dreapta | Atingere cu două degete, sau colțul din dreapta jos al touchpadului |
| Pan într-o schiță | Glisare cu două degete („Determină automat” sau „Touchpad”), sau tragere cu zona butonului din dreapta apăsată. {{key:Shift}}+tragere nu face pan într-o schiță |
| Adăugare la o selecție într-o schiță | {{key:Shift}}+clic sau {{key:Ctrl}}+clic |
:::

**Derulare** este în [setările PartCraft](topic:settings): „Determină automat” (implicit) tratează derularea laterală sau fină ca pe un touchpad, „Touchpad” o face mereu, „Rotiță mouse” nu o face niciodată. Ciupirea mărește în toate trei.

Tastele săgeți rotesc vederea 3D, iar {{key:Shift}} cu săgețile face pan, odată ce ați făcut clic în vedere: util pe un touchpad. {{key:Plus}} și {{key:Minus}} măresc și micșorează.

## Ecrane tactile

PartCraft citește intrarea tactilă, deci tabletele, laptopurile tactile și telefoanele funcționează, cu limite.

:::touch
**Taste tactile**

Odată ce atingeți ecranul, apare o bară mică în colțul din dreapta jos al vederii, cu tastele care lipsesc unui deget. Dispare când folosiți un mouse.

- {{ui:Esc}}: tasta Esc. Anulează ce ați început sau dă un pas înapoi, exact ca tasta.
- {{ui:Adăugare}} (într-o schiță, cu Selectare): cât timp este pornit, fiecare atingere adaugă un element la selecție sau îl scoate, ca {{key:Shift}}+clic. Atingeți-l din nou ca să reveniți la câte un element.
- {{ui:Gata}} (cât desenați un lanț de linii, un spline sau un poligon): îl termină, ca un clic dreapta.

Țineți degetul nemișcat aproximativ o jumătate de secundă face același lucru pentru o singură atingere: cu un instrument de desen termină ce desenați, iar cu Selectare adaugă elementul de sub deget la selecție sau îl scoate. Punctele și liniile sunt mai ușor de atins cu degetul: PartCraft caută de aproximativ două ori mai departe în jurul unei atingeri decât în jurul unui clic.

**În vederea 3D**

- Un deget: rotește piesa.
- Două degete: ciupire pentru zoom, mișcare împreună pentru pan.
- Atingere: alegeți o față, o muchie sau un plan. Nu există evidențiere la cursor înainte de atingere.

**Într-o schiță**

- Atingeți cu un instrument de desen ca să plasați fiecare punct: atingeți începutul, apoi sfârșitul. Fixarea se face unde ridicați degetul.
- Două degete ciupesc și fac pan. Punerea unui al doilea deget anulează o tragere pe care a început-o primul deget.
- Ca să încheiați un lanț de linii, atingeți {{ui:Gata}}, țineți degetul nemișcat sau atingeți din nou {{ui:Linie}} (sau alt instrument) din bara de instrumente.
- Cu Selectare, atingeți ca să selectați; trageți un punct sau o linie ca să le mutați; trageți pe spațiu gol pentru o fereastră. O a doua atingere înlocuiește selecția, dacă {{ui:Adăugare}} nu este pornit (sau țineți degetul nemișcat pe al doilea element).
- Ca să schimbați o cotă, folosiți **Editare** de lângă ea în panoul din dreapta.

**Foaia de desen**

Atingeți ca să plasați și să selectați simboluri și trageți un simbol ca să-l mutați. Ciupiți ca să măriți, mutați două degete ca să faceți pan sau trageți cu un deget peste hârtia goală. Un al doilea deget oprește un simbol pe care îl trageați, iar acesta revine.

**Ce încă are nevoie de tastatură**

- Introducerea numerelor: tastatura ecranului apare în casetele de numere și în câmpurile de cote.
- Scurtături de tastatură pentru instrumente: folosiți bara de instrumente.
:::

## Ecrane mici și telefoane

- La 1280 pixeli sau mai mult, bara de instrumente încape pe un rând.
- Între aproximativ 760 și 1100 pixeli, panourile laterale devin mai înguste.
- Sub aproximativ 760 pixeli (un telefon sau o fereastră îngustă), ecranul se așază în stivă: bara de instrumente (glisați-o lateral pentru mai multe butoane), vederea 3D, bara de stare, apoi panoul de proprietăți și istoricul. Derulați pagina ca să ajungeți la panouri.
- Meniurile ({{ui:Export}}, {{ui:Vederi}}) se deschid pe toată lățimea ecranului.

:::note
Pe iPhone nu există modul ecran complet în browser; {{key:Ctrl+Shift+F}} și butonul de mod ecran comută doar între normal și barele ascunse.
:::

Un telefon este bun pentru a deschide o piesă, a o roti și a verifica datele ei. Modelarea reală are nevoie de un ecran mai mare și de un mouse sau de un touchpad.

## Browsere

Chrome, Edge, Firefox și Safari actuale rulează PartCraft pe Windows, macOS și Linux, și pe tablete și telefoane, cât timp WebGL și WebAssembly sunt disponibile. Vezi [Browsere și calculatoare](common:browsers).
