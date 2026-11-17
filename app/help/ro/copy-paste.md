---
title: Copiere, lipire și duplicare
summary: Copiați geometria de schiță, operațiile și piesele din ansamblu; lipiți acolo unde dați clic sau în aceeași poziție; duplicați într-un singur pas; și ce vine odată cu o copie și ce nu.
keywords: copiere, lipire, decupare, duplicare, clipboard, lipire în aceeași poziție, selectare totală, anularea selecției, ștergere, ctrl c, ctrl v, ctrl d, instanță, componentă, copiere schiță, copiere operație, copiere piesă
from: 611307d7
---

Grupul {{ui:Editare}} din bara de instrumente conține {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}} și un meniu {{ui:Mai multe}} cu {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}} și {{ui:Anularea selecției}}, fiecare cu tasta sa. Ce copiază depinde de locul în care vă aflați: geometrie într-o schiță deschisă, o operație în istoric sau o piesă într-un ansamblu.

Un element estompat nu poate acționa acum. Treceți peste el: sfatul său spune de ce, de exemplu „Selectați mai întâi geometria schiței” sau „Clipboard-ul conține Sketch2 și Extrude2: operațiile se lipesc în istoric, deci ieșiți mai întâi din schiță”.

| Acțiune | Tastă | Într-o schiță | În istoric | Într-un ansamblu |
|---|---|---|---|---|
| Copiere | {{key:Mod+C}} | Punctele și curbele selectate | Schița, extrudarea, revoluția sau gaura selectată (împreună cu schița sa) | Piesa selectată |
| Decupare | {{key:Mod+X}} | Copiere, apoi ștergere | Copiere, apoi ștergerea operației | Copiere, apoi eliminarea piesei |
| Lipire | {{key:Mod+V}} | Copia urmează indicatorul; dați clic unde trebuie să ajungă | Adaugă copia la sfârșitul istoricului | O copie nouă lângă celelalte piese |
| Lipire în aceeași poziție | {{key:Mod+Shift+V}} | La aceleași coordonate | La fel ca Lipire | În aceeași poziție cu piesa copiată |
| Duplicare | {{key:Mod+D}} | Copiere și mutare dintr-o dată; clipboard-ul rămâne neatins | O a doua copie imediat după cea selectată | O a doua copie lângă celelalte piese |
| Ștergere | {{key:Delete}} | Selecția | Operația (întreabă dacă o folosesc altele) | Piesa sau articulația |
| Selectare totală | {{key:Mod+A}} | Tot din schiță | Indisponibil | Indisponibil |
| Anularea selecției | {{key:Esc}} | Golește selecția | Golește selecția și alegerile | Golește selecția |

Fiecare lipire, duplicare și decupare este un pas în lista de anulare: {{key:Mod+Z}} îl anulează, {{key:Mod+Y}} îl readuce.

## Într-o schiță

1. Selectați ce doriți să copiați: dați clic pe el, {{key:Shift}}+clic pentru mai multe, trageți o fereastră sau apăsați {{key:Mod+A}} pentru tot.
2. Apăsați {{key:Mod+C}} sau alegeți {{ui:Copiere}}. Bara de stare spune ce a fost copiat.
3. Apăsați {{key:Mod+V}} sau alegeți {{ui:Lipire}}. O copie punctată urmează indicatorul, ținută de mijlocul ei. Se agață de puncte: puneți centrul unui cerc copiat pe un punct dând clic pe acel punct.
4. Dați clic unde trebuie să ajungă. Geometria lipită rămâne selectată, astfel încât o puteți trage sau adăuga relații imediat. {{key:Esc}} anulează lipirea.

Ce vine odată cu copia:

- O linie, un cerc sau un arc copiat aduce cu sine propriile capete și centrul.
- Relațiile și cotele **între elementele copiate** vin odată cu ele: un dreptunghi copiat rămâne dreptunghi, cu dimensiunile sale.
- Relațiile **către geometria pe care nu ați copiat-o** și către origine sunt eliminate. Bara de stare le numără: „2 relations to geometry outside the copy will not come along” („2 relații către geometria din afara copiei nu vor veni odată cu ea”). Deci o copie lipită poate fi mutată liber până o legați prin relații sau cote.
- Un punct fix rămâne fix, în noua sa poziție.

{{ui:Lipire în aceeași poziție}} pune copia exact pe coordonatele originalului, în această schiță sau în alta: util pentru a aduce un profil dintr-o schiță în alta. În aceeași schiță, copia se află peste original; trageți-o în altă parte.

{{ui:Duplicare}} ({{key:Mod+D}}) copiază selecția și începe imediat să o plaseze, fără să atingă ce se află în clipboard.

:::tip
Pentru a repeta centrul unei găuri sau un canal de mai multe ori, copiați-l o dată și lipiți-l de mai multe ori: fiecare {{key:Mod+V}} începe o copie nouă care urmează indicatorul.
:::

## În istoric

1. Dați clic pe o schiță, o extrudare, o revoluție sau o gaură în istoric.
2. {{key:Mod+C}} o copiază. O operație bazată pe schiță este copiată împreună cu schița sa.
3. {{key:Mod+V}} adaugă copia la sfârșitul istoricului (la bara de derulare, dacă ați derulat înapoi), cu nume noi precum Sketch3 și Extrude2.

Copia se află pe același plan sau aceeași față ca originalul, deci se construiește peste el, iar piesa arată la fel. Selectați noua schiță și schimbați-i planul în panoul din dreapta, sau deschideți-o și trageți sau recotați profilul, pentru a muta copia.

- Lipire în **altă piesă**: deschideți acea piesă și apăsați {{key:Mod+V}}. Dacă schița copiei era pe o față pe care piesa nu o are, ea ajunge pe planul Front, iar bara de stare o spune.
- {{ui:Duplicare}} face copierea și lipirea într-un singur pas, în aceeași piesă.
- {{ui:Decupare}} copiază operația, apoi o șterge (întrebând mai întâi dacă alte operații o folosesc).

Repetițiile, oglindirile, racordările, șanfrenele, scobirile în coajă și solidele importate nu pot fi copiate: ele depind de muchii, fețe sau operații alese în această piesă. Copiați în schimb schița sau operația pe care sunt construite sau repetați-o cu {{ui:Liniară}} sau {{ui:Circulară}}.

## Într-un ansamblu

1. Dați clic pe o piesă din vedere sau din lista din stânga.
2. Alegeți {{ui:Duplicare}} ({{key:Mod+D}}), sau {{key:Mod+C}} apoi {{key:Mod+V}}.

Noua copie este **aceeași piesă**: modificați una și se schimbă fiecare copie. Ea apare cu 20 mm în dreapta a tot ce există deja în ansamblu, orientată la fel ca piesa copiată, și rămâne acolo până când o articulație o plasează. {{ui:Lipire în aceeași poziție}} ({{key:Mod+Shift+V}}) o pune exact unde se află piesa copiată; uniți-o cu o articulație pentru a o muta (decalajul unei articulații glisante o împinge de-a lungul ei).

Lipirea unei piese copiate dintr-un alt ansamblu aduce piesa cu ea, la fel ca {{ui:Inserare}} din fișierul ei. {{ui:Adăugare copie}} din grupul Ansamblu face același lucru ca {{ui:Duplicare}} și funcționează fără nimic selectat (copiază ultima piesă).

## Clipboard-ul

- Este clipboard-ul propriu al PartCraft, nu al calculatorului: nu puteți lipi geometrie PartCraft într-un alt program sau text în vederile PartCraft.
- Este păstrat în acest browser, astfel încât un alt tab PartCraft poate lipi ce ați copiat. Este citit și verificat ca un fișier deschis; orice este deteriorat sau provine dintr-o altă versiune este refuzat.
- O piesă cu un fișier STEP importat mare poate fi prea mare pentru browser ca să o păstreze: atunci se lipește doar în acest tab.
- Într-un câmp numeric sau în căutarea din ajutor, {{key:Mod+C}} și {{key:Mod+V}} copiază și lipesc text ca de obicei.

Pe foaia de desen, copierea și lipirea nu sunt încă disponibile; {{ui:Ștergere}} și {{ui:Anularea selecției}} funcționează pe simbolul selectat. Vezi [Încă nerealizat](topic:not-built-yet).
