---
title: Lanțuri de toleranțe
summary: Alegeți un lanț de fețe prin piesele unui ansamblu și vedeți cât poate varia jocul de la capătul lui, în cazul cel mai nefavorabil și RSS, cu cotele cele mai importante ordonate primele.
keywords: lanț de toleranțe, stack-up, analiză de toleranțe, lanț de cote, buclă, joc, cazul cel mai nefavorabil, rss, suma pătratică a rădăcinilor, toleranțare statistică, contribuitori, sensibilitate, gd&t, toleranță generală, iso 2768
from: cbdb3159
---

Un **lanț de toleranțe** adună cotele de-a lungul unui lanț prin mai multe piese, ca să vadă cât poate varia un rezultat — de obicei un joc — când fiecare piesă este făcută oriunde în interiorul toleranțelor sale.

## Alegerea lanțului

1. Deschideți un ansamblu și alegeți {{ui:Stack-up}} din grupul Ansamblu. Se deschide un card peste vedere.
2. Alegeți pe ce direcție se măsoară lanțul: X, Y sau Z al ansamblului, sau {{ui:Normala primei fețe}}.
3. Apăsați {{ui:Alegeți lanțul}} și faceți clic pe fețele prin care trece lanțul, **în ordine**: începeți de pe o parte a jocului, treceți prin piese și terminați de cealaltă parte a jocului.
4. Apăsați {{ui:Gata}} sau Enter. Backspace anulează ultimul clic; Esc renunță.

Două clicuri pe aceeași piesă fac cota acelei piese (distanța ei de-a lungul lanțului). Un clic pe altă piesă face o **interfață** între ele, acolo unde piesele se ating; nu are toleranță decât dacă tastați una. Legăturile adună sau scad după cum trece lanțul și închid bucla: jocul nominal este cel pe care îl arată modelul.

Puteți și să {{ui:Adăugare legătură}} manual și să tastați nominalul ei, toleranța și dacă adună (+) sau scade (−).

## Dați fiecărei legături toleranța ei

Fiecare legătură are o abatere **superioară** și una **inferioară** (de exemplu +0.1 și −0.05). **Toleranța de la** le completează din piesă:

- **Toleranță generală**: câmpul Toleranță din blocul de titlu al piesei (vezi [Desen în PDF](topic:drawing-pdf)), când citește ±0.1, +0.2/-0.1 sau ISO 2768-f, -m, -c sau -v (toleranțe liniare ISO 2768-1, după dimensiunea legăturii). Toleranța generală a unei piese se folosește imediat când este ales lanțul.
- **GD&T**: orice cadru de control al unei caracteristici de pe desenul piesei. Zonele de poziție, profil și bătaie dau ± jumătate din toleranță. O toleranță de orientare sau de formă se află de obicei deja în toleranța de dimensiune: adăugați-o doar acolo unde lanțul întâlnește suprafața controlată. Cu Ⓜ sau Ⓛ, zona se ia la dimensiunea declarată; toleranța bonus nu se numără.
- **Tastată**: orice numere tastate.

## Citirea rezultatelor

- **Joc, nominal** și, când toleranțele sunt inegale, **Joc, mediu** — +0.2/−0 și +0/−0.1 mută mijlocul intervalului.
- **Cazul cel mai nefavorabil**: fiecare toleranță la limita ei în același timp. Jocul nu poate fi niciodată în afara acestuia.
- **RSS** (rădăcina pătrată a sumei pătratelor): fiecare toleranță este luată ca trei abateri standard ale unei împrăștieri normale, adunate ca rădăcina pătrată a sumei pătratelor lor. Majoritatea ansamblurilor rămân bine în cazul cel mai nefavorabil; aceasta este estimarea obișnuită pentru piese făcute în serie.
- Dați **Joc cel puțin** și **Joc cel mult** pentru a vedea dacă cazul cel mai nefavorabil rămâne mereu în interior și câte ansambluri dintr-un milion sunt așteptate în afară, conform RSS.
- Coloana **#** ordonează legăturile după **proporția** lor din RSS: strângeți primele pentru cea mai mare diferență.

{{ui:Salvare CSV}} scrie legăturile, proporțiile lor și rezultatele. Lanțurile sunt salvate în fișierul ansamblului, iar fiecare modificare este un singur pas pentru {{key:Mod+Z}}.

:::note
Un lanț de toleranțe este pe o singură direcție. Nu urmărește unghiuri sau viraje de-a lungul lanțului și nu citește toleranțele de dimensiune din schițe: dați-le ca toleranțe tastate sau prin blocul de titlu.
:::
