---
title: Prelucrare pe 4 și 5 axe
summary: Spuneți PartCraft ce axe rotative are mașina, înclinați scula pentru orice operație obișnuită, finisați o suprafață cu o freză cu capăt sferic care se înclină în timpul tăierii sau rotiți piesa sub sculă pe o a 4-a axă. Ce se scrie în codul G și ce nu a fost verificat.
keywords: 5 axe, cinci axe, 4 axe, a patra axă, multi axe, multiaxă, 3+2, indexat, pozițional, înclinare, sculă înclinată, rotativ, trunion, masă, cap, axa A, axa B, axa C, TCP, RTCP, punct central al sculei, G43.4, timp invers, G93, cinematică, pivot, swarf, unghi de atac
from: c4f1c491
---

Fabricația poate ține scula sub un unghi și poate muta axele rotative în timpul tăierii. Trei lucruri o fac, de la cel mai simplu în sus.

**Nimic de aici nu a fost rulat pe o mașină.** Traseele sunt verificate față de geometrie prin teste, iar codul G este citit înapoi, dar posturile încorporate urmează codurile documentate ale comenzilor, nu o mașină anume. Verificați programul în simulatorul propriu al comenzii și în aer, înainte să ajungă pe metal.

## Axele rotative ale mașinii

Pe fila **Configurare**, {{ui:Axe rotative}} spune ce are mașina:

| Alegere | Mașina |
|---|---|
| Niciuna (3 axe) | O freză simplă. Orice operație care cere scula înclinată avertizează, iar postul refuză s-o scrie. |
| A (se rotește în jurul lui X) | O axă rotativă de-a lungul lui X: o masă cu a 4-a axă sau un indexor. Scula se poate înclina doar în planul Y–Z. |
| B (se rotește în jurul lui Y) | O axă rotativă de-a lungul lui Y. Scula se poate înclina doar în planul X–Z. |
| A și C | O axă de înclinare în jurul lui X, purtată de sau purtând o rotire în jurul lui Z: o masă cu trunion sau un cap. |
| B și C | Același lucru, cu înclinarea în jurul lui Y. |

Apoi:

- **Purtată de**: {{ui:Masa (piesa se rotește)}} sau {{ui:Capul (scula se rotește)}}. O masă se rotește în sens opus ca să aducă aceeași față sub sculă, deci semnul fiecărui unghi urmează din asta.
- **Comanda păstrează vârful sculei pe traseu (TCP)**: pornit, X Y Z din program sunt vârful sculei în coordonatele proprii ale piesei, iar comanda face restul (posturile în stil Fanuc și LinuxCNC încorporate scriu `G43.4` pentru lungimea sculei). Oprit, pe o mașină cu masă, PartCraft scrie X Y Z pe măsură ce masa rotită poartă piesa, în jurul **centrului de rotație** pe care îl dați (în coordonate de lucru; 0, 0, 0 când originea de lucru este în centru). O mașină cu cap are nevoie de TCP pornit: fără el, programul ar avea nevoie de lungimea pivotului mașinii, pe care PartCraft nu o cunoaște.
- **Limita de înclinare**: cât de departe merge axa de înclinare.

Mașinile diferă prin sensul în care numără ca pozitiv. Dacă o axă se rotește în sens greșit pe mașina respectivă, schimbați semnul într-o copie a postului ([Postprocesoare editabile](topic:post-processors)).

## O sculă înclinată pentru o operație obișnuită

Fiecare operație de frezare (față, buzunar, adaptiv, contur, găurire, șanfren, paralel, scallop, degroșare 3D, restul) are **Înclinarea sculei** și **Înclinare spre**: direcția sculei pentru acea operație singură, măsurată de la axa sculei din configurare. Aceasta este prelucrare 3+2: axele rotative merg într-o poziție și rămân acolo, în timp ce trei axe taie.

- Scrieți cele două unghiuri sau apăsați {{ui:Scula perpendicular pe o față}} și faceți clic pe o față plană: scula va arăta drept spre ea.
- Selectați fețele și muchiile operației ca de obicei. Ce contează ca fund sau gaură se judecă de-a lungul sculei înclinate.
- Semifabricatul pentru acea direcție este cutia care cuprinde semifabricatul rotit, deci înălțimile și distanțele de siguranță sunt sigure din acea parte.

În codul G, înainte de operație scula se ridică, axele rotative se rotesc, iar scula coboară peste primul ei punct. Pe o mașină cu masă fără TCP, arcele rămân arce, iar ciclurile fixe de găurire rămân cicluri (cadrul scris este doar rotit în jurul lui Z). Cu TCP într-un plan înclinat, arcele devin linii scurte, iar ciclurile devin deplasările pe care le reprezintă.

Simularea stocului rulează o direcție înclinată **separat**: arată ce taie operația respectivă din întregul semifabricat, văzut din latura ei, și găsește acolo adâncituri, dar tăieturile făcute din alte direcții nu sunt preluate.

## Finisare pe 5 axe

{{ui:Mai multe}} din bara Fabricație listează această operație și pe următoarea, în partea de sus a filei **Operații**.

{{ui:5 axe}} este [trecerea de finisare paralelă](topic:finish-3d) cu o **freză cu capăt sferic care se înclină pe parcurs**. O bilă taie cu o sferă, iar sfera este aceeași oricum s-ar înclina scula în jurul centrului ei, deci bila urmează exact traseul pe care l-ar da trecerea pe 3 axe, și se schimbă doar direcția sculei:

- **Spre suprafață**: 1 = perpendicular pe suprafață, 0 = vertical, orice între ele.
- **Înclinare înainte**: grade de-a lungul direcției tăierii, astfel încât centrul fix al bilei să nu fie cel care taie.
- **Înclinarea maximă**: scula nu se înclină niciodată mai departe de axa configurării decât atât.

Acolo unde coada sculei ar atinge modelul, înclinarea se trage înapoi până se eliberează, iar operația spune în câte puncte s-a întâmplat. Fiecare trecere intră și iese printr-o ridicare dreaptă.

## Finisare rotativă (a 4-a axă)

{{ui:Rotativ}} este pentru o piesă ținută de-a lungul **lui X de lucru** pe o axă rotativă. Piesa se rotește, iar o freză cu capăt sferic, îndreptată mereu spre axă, urmează suprafața ei:

- **Treceri**: {{ui:De-a lungul axei}} (linii de-a lungul lui X, la un pas lateral de rotație distanță) sau {{ui:În jurul piesei}} (inele, la un pas lateral de X distanță).
- **Axa la Y / Z**: unde este axa. Gol înseamnă mijlocul semifabricatului. Pe o mașină cu masă fără TCP trebuie să fie centrul de rotație din Configurare; operația avertizează când nu este.
- **De la / Până la X** și **De la / Până la unghi**: partea din lungime și din rotație de tăiat.

Înălțimea bilei deasupra axei în fiecare punct este căderea exactă a unei sfere pe plasa piesei, din acea latură.

## Limite

- Finisarea pe 5 axe și cea rotativă iau **doar o freză cu capăt sferic**. Nu există tăiere pe bandă (latura sculei pe un perete drept), nici linii de curgere de-a lungul direcțiilor proprii ale unei suprafețe, nici degroșare pe mai multe axe și nici o alegere automată a înclinării pentru a evita o coliziune.
- Traseele pe 5 axe și cele rotative **nu trec prin simularea stocului**, care este o hartă a înălțimilor și nu poate ține o tăietură înclinată.
- Coada sculei este verificată la finisarea pe 5 axe față de model văzut de sus; portsculul, arborele și mașina în sine nu sunt verificate nicăieri.
- Finisarea rotativă taie doar ce vede scula privind spre axă.
- Finisarea pe 5 axe durează un minut sau mai mult ca să se calculeze pe o piesă mare: coada sculei este verificată în fiecare punct al fiecărei treceri.
- Când axele rotative se mișcă împreună cu cele liniare și TCP este oprit, posturile încorporate scriu avansul ca timp invers (`G93`), apoi revin la `G94`.
- Nu se scrie niciun cod de plan de lucru înclinat (`G68.2` și altele) și nu se cunosc limite specifice mașinii, derulare sau zone de coliziune.
