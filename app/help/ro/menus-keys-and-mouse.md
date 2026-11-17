---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu care se potrivește modului în care lucrați deja, dați oricărei comenzi tasta proprie, mutați comenzile între filele panglicii și stabiliți ce fac rotița și fiecare buton al mouse-ului în vederea 3D.
keywords: stil de meniu, meniuri, panglică, bară de instrumente, arbore de operații, scurtături de tastatură, taste rapide, taste, personalizare, reatribuire, mouse, rotiță, inversare, sens de zoom, buton din mijloc, orbitare, pan, export, import, comutare, familiar
from: 8445b06c
---

Comenzile PartCraft sunt aceleași, indiferent de calea prin care le atingeți. Un **stil de meniu** decide doar unde stau pe ecran, cum se numesc acolo și ce taste le pornesc. Alegeți unul în {{ui:Setări}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Meniuri, taste și mouse}}; schimbarea are efect imediat, iar acest browser o reține.

## Cele două stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:PartCraft}} | Bara de instrumente proprie a PartCraft: comutatorul de spații de lucru, {{ui:Fișier}}, Schiță, {{ui:Operații}}, Desen, {{ui:Ansamblu}}, Editare și {{ui:Vizualizare}}. Tastele {{key:S}} schiță, {{key:F}} potrivire, {{key:M}} măsurare, {{key:X}} vizualizare în secțiune. Punctul de plecare. |
| {{ui:Arborele operațiilor}} | O panglică aranjată ca în programele CAD mecanice bazate pe operații: un meniu {{ui:Fișier}} (cu toate exporturile), butoane rapide și filele {{ui:Operații}}, {{ui:Schiță}}, {{ui:Suprafețe}}, {{ui:Evaluare}}, {{ui:Desen}}, {{ui:Ansamblu}}, {{ui:Studii}} (spațiile de lucru și uneltele lor), {{ui:Ilustrare}} (uneltele manuale ale spațiului de lucru Ilustrare; uneltele lui comută mai întâi pe Ilustrare) și {{ui:Vizualizare}}. {{ui:Operații}} începe cu {{ui:Schiță}}, deoarece o piesă începe dintr-o schiță. Taste suplimentare: {{key:E}} extrudare, {{key:H}} gaură, iar {{key:V}} urmat de o literă pentru o vedere: {{key:V}} {{key:F}} față, {{key:V}} {{key:B}} spate, {{key:V}} {{key:T}} sus, {{key:V}} {{key:O}} jos, {{key:V}} {{key:R}} dreapta, {{key:V}} {{key:L}} stânga, {{key:V}} {{key:I}} izometrie, {{key:V}} {{key:N}} normală la. În vederea 3D, butonul din mijloc face orbitare, {{key:Shift}} cu butonul din mijloc face pan, butonul drept face pan, iar butonul stâng doar alege. |

Fiecare stil păstrează {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} și {{key:Mod+A}}.

O unealtă dintr-un alt spațiu de lucru comută mai întâi la el; o unealtă de Design aleasă într-un alt spațiu de lucru revine mai întâi la Design. Uneltele de schiță așteaptă o schiță, cele de desen așteaptă foaia de desen, cele de ansamblu așteaptă un ansamblu: bara de stare spune ce trebuie făcut mai întâi.

:::tip
Într-o schiță, pe foaia de desen, într-un ansamblu și în celelalte spații de lucru, literele își păstrează sensul de acolo ({{key:L}} linie, {{key:R}} dreptunghi, {{key:J}} articulație …) în fiecare stil. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și săgețile își păstrează întotdeauna sensul. O tastă din aranjamentul propriu al PartCraft, pe care stilul dvs. a dat-o altei comenzi, nu face nimic, iar bara de stare spune unde a ajuns comanda ei.
:::

## Personalizați-l

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Personalizare…}}.
2. Pe {{ui:Taste și meniuri}}, găsiți o comandă (caseta de căutare ajută). {{ui:Adăugare tastă}} și apăsați tasta sau două taste la rând. Faceți clic pe o tastă ca s-o scoateți.
3. Cu panglica, {{ui:Unde se află}} mută comanda pe altă filă și panou, în meniul {{ui:Fișier}} sau la {{ui:Doar taste}}.
4. Pe {{ui:Mouse}}, setați rotița, butoanele care fac pan într-o schiță și ce face fiecare buton în vederea 3D.
5. Dați-i un nume și faceți clic pe {{ui:Salvare}}.

Salvarea unui stil integrat creează propria dvs. copie („Arborele meu de operații”); cel integrat nu se schimbă niciodată. O tastă dată la două comenzi, sau una care ar rula înainte ca o combinație de două litere să poată fi tastată, apare în roșu și trebuie reparată înainte de salvare.

## Mouse

- **Rotița mouse-ului**: {{ui:Derularea în sus mărește}} (punctul de plecare) sau {{ui:Derularea în sus micșorează}}, și cât de repede. Ciupirea cu trackpad-ul mărește mereu în sensul în care se mișcă degetele.
- **Pan în schiță cu**: butonul din mijloc, butonul drept sau amândouă. Un clic drept într-o schiță încheie tot pasul uneltei.
- **Trageți în vederea 3D**: {{ui:Propriul fiecărei vederi}} păstrează setarea PartCraft ({{ui:Setări}} › {{ui:PartCraft}}: stânga orbitează sau mijlocul orbitează). Sau setați fiecare buton să orbiteze, să facă pan, să mărească sau nimic; {{key:Shift}} cu butonul de orbitare face pan. Un clic fără tragere alege în continuare.

## Transferul stilurilor

{{ui:Export}} salvează stilul folosit ca un fișier mic `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile proprii ale PartCraft: orice altceva din el este lăsat afară și numărat în bara de stare. {{ui:Ștergeți acest stil}} elimină unul de-al dvs.

:::note
Aceste setări rămân în acest browser. {{ui:Folosește acest stil în toate aplicațiile}} de sub cardurile de stil face ca fiecare aplicație să se deschidă în stilul ei corespunzător (propria bară de instrumente sau o panglică), cu modificările făcute în fiecare aplicație. Alegerea altui stil într-o aplicație schimbă doar acea aplicație.
:::

Înrudite: [Taste și mouse](topic:keyboard) · [Setările PartCraft](topic:settings) · [Venind de la un alt modelator parametric](topic:coming-from)
