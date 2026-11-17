---
title: Verificarea înclinării pentru matrițare și turnare
summary: Colorați piesa după unghiul ei de înclinare față de direcția de tragere a unei matrițe. Vedeți ce fețe se demulează, care au nevoie de mai multă înclinare și care se demulează din cealaltă jumătate, cu partea fiecăreia din suprafață.
keywords: analiza înclinării, înclinare, conicitate, matriță, matrițare, turnare sub presiune, direcție de tragere, linie de separare, contrapantă, demulare, verificare înclinare
from: 6a106f83
---

Piesele fabricate într-o matriță, într-o matriță de turnare sub presiune sau într-o turnare în nisip au nevoie de **înclinare**: pereți înclinați puțin, astfel încât piesa să alunece afară. **Analiza înclinării** colorează fiecare față după cât de mult se înclină față de direcția în care se deschide matrița (**tragerea**).

## Activare

1. În spațiul de lucru Design, deschideți {{ui:Vederi}} și alegeți {{ui:Analiza înclinării}}.
2. Setați **Tragere**: direcția în care se deschide matrița, pe X, Y sau Z în oricare sens, sau **Perpendicular pe o față aleasă**. În acest caz apăsați {{ui:Alegere față}} și faceți clic pe o față plană a piesei.
3. Setați **Înclinare minimă**, în grade: cea mai mică înclinare de care are nevoie procesul (adesea 1° până la 3°).

Piesa este colorată astfel:

| Culoare | Înseamnă |
|---|---|
| Verde: **Înclinare pozitivă** | Înclinată spre tragere cu cel puțin minimul: se demulează din această jumătate a matriței |
| Ocru: **Necesită înclinare** | În limita minimului în ambele sensuri, cum este un perete vertical: adăugați înclinare aici |
| Roșu: **Înclinare negativă** | Înclinată în sens opus tragerii cu cel puțin minimul: se demulează din cealaltă jumătate sau este o contrapantă, dacă piesa trebuie scoasă dintr-o singură jumătate |

Partea din suprafața totală a piesei, pentru fiecare clasă, este afișată lângă ea. **Inversarea tragerii** privește din cealaltă jumătate a matriței: verdele și roșul își schimbă locul.

Fețele curbe sunt evaluate punct cu punct, astfel încât un cilindru așezat transversal pe tragere arată o bandă care necesită înclinare pe laterale.

Culorile urmează piesa pe măsură ce o modificați. {{key:Esc}} sau {{ui:Închidere}} oprește analiza; nimic nu se salvează în piesă.

:::tip
Pentru a adăuga înclinare, folosiți operația {{ui:Înclinare}} pe fețele ocru (vezi [Baleiere, loft și înclinare](topic:sweep-loft-draft)), apoi verificați din nou.
:::
