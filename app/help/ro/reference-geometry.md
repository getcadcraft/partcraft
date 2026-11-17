---
title: Planuri de referință, axe și puncte
summary: Creați plane decalate față de o față, înclinate, prin trei puncte, la mijloc, tangente la un cilindru, perpendiculare pe o muchie sau prin o muchie și un punct; axe; puncte la mijlocul muchiilor, la intersecții și la colțurile planelor; schițați pe ele și folosiți-le drept axe de revoluție, direcții de repetiție și plane de oglindire.
keywords: datum, între obiecte, mijloc, punct de intersecție, plan prin muchie și punct, plan de referință, plan de lucru, plan de construcție, plan datum, plan decalat, plan înclinat, plan median, plan tangent, axă de referință, axă de construcție, axă datum, punct de referință, punct de lucru, schiță pe plan
from: e7eb6fc1
---

Geometria de referință este schela pe care construiți operațiile: un **plan** pe care să schițați acolo unde nu există nicio față, o **axă** în jurul căreia să rotiți sau să repetați, un **punct** la care să opriți o extrudare. Nu are material propriu. Planele apar în vizualizare ca pătrate deschise, axele ca linii întrerupte, punctele ca mici cruci; toate trei intră în istoric și urmează ce au fost făcute din ele când modificați o dimensiune din amonte.

Sunt în meniul {{ui:Mai multe}} al grupului Operații: {{ui:Plan}}, {{ui:Axă}}, {{ui:Punct}}.

## Crearea unui plan

1. Faceți clic pe o față plană sau pe un plan de bază din istoric, ca să porniți de la el (opțional).
2. Alegeți {{ui:Mai multe}}, apoi {{ui:Plan}}. Începe ca plan decalat la 20 % din dimensiunea piesei față de ce ați ales (sau față de planul de sus).
3. În panoul din dreapta alegeți **Tip** și referințele lui:

| Tip | Referințe | Valori numerice |
|---|---|---|
| Decalat față de un plan sau o față | **Din plan** | **Distanță (mm)**, negativă pentru cealaltă parte |
| Înclinat, prin o muchie sau o axă | **Din plan**, **Rotire în jurul** (o axă globală, o operație de tip axă sau o muchie dreaptă aleasă) | **Unghi (°)** |
| Prin trei puncte | **Punctul 1**, **Punctul 2**, **Punctul 3** | — |
| Plan median între două | **Primul plan**, **Al doilea plan** (paralele: la jumătatea distanței; concurente: planul care împarte unghiul în două) | — |
| Tangent la un cilindru | **Cilindru** (o față cilindrică), **Punct apropiat** (ce parte) | — |
| Perpendicular pe o muchie, într-un punct | **Muchie**, **În punct** (planul trece prin punctul muchiei cel mai apropiat de el și prin punctul respectiv) | — |
| Prin o muchie și un punct | **Muchie dreaptă** (sau o axă), **Prin punct** | — |
| Perpendicular pe o muchie, la mijloc | **Muchie** (la jumătatea ei, perpendicular pe ea), sau, fără muchie, **Punctul 1** și **Punctul 2** (planul la jumătatea distanței dintre ele) | — |

Fiecare referință are un buton **Alegere**: apăsați-l, apoi faceți clic în vizualizare. Un loc pentru plan primește un plan de bază, un plan de referință sau o față plană; un loc pentru punct primește capătul unei muchii (faceți clic aproape de acel capăt), o operație de tip punct sau un loc de pe o față; un loc pentru muchie primește o muchie. {{key:Esc}} anulează o alegere. **Inversare normală** întoarce planul (în ce sens este orientată o schiță pe el).

În această versiune, un loc care cere o muchie sau o față cilindrică (Tangent la un cilindru și locurile Muchie) răspunde „încă nerealizat”: folosiți în schimb puncte sau o axă.

## Schițarea pe un plan

Selectați planul (în istoric sau făcând clic pe pătratul lui din vizualizare) și alegeți {{ui:Schiță}}, sau **Schiță pe el** în panoul lui. Schița urmează planul: dacă schimbați distanța planului, se mută și schița și fiecare operație de pe ea.

## Axe și puncte

- {{ui:Axă}}: prin două puncte, axa unui cilindru sau a unui con, acolo unde se întâlnesc două plane, de-a lungul unei muchii drepte (sau a axei unei muchii circulare), ori perpendicular pe o față prin un punct.
- {{ui:Punct}}: la coordonate, într-un vârf sau punct de schiță, sau în centrul unei muchii circulare, plus punctele „între obiecte”:

| Tip de punct | Referințe |
|---|---|
| Mijlocul unei muchii (sau între două puncte) | **Muchie** (la jumătatea lungimii ei, valabil și pentru arce și curbe), sau, fără muchie, **Punctul 1** și **Punctul 2** |
| Unde o muchie sau o axă întâlnește o față sau un plan | **Muchie** (dreaptă sau curbă) sau o axă, și **Întâlnește planul** (un plan sau o față plană) sau **Sau o față** (o față plană sau un cilindru). Un cerc taie un plan de două ori, iar o linie trece printr-un cilindru de două ori: **Cealaltă intersecție** ia a doua |
| Unde se întâlnesc trei plane | **Primul**, **Al doilea** și **Al treilea plan** (plane sau fețe plane) |

Fiecare eșuează cu un mesaj simplu când referințele nu se potrivesc: o linie paralelă cu planul, o linie care ratează cilindrul, o muchie care nu ajunge la plan, trei plane care nu se întâlnesc într-un singur punct, un punct pe linia pe care ar trebui să o fixeze un plan.

Folosiți-le în alte operații:

| Unde | Cum |
|---|---|
| Rotire | **Axă**: alegeți operația de tip axă din listă (trebuie să fie în planul schiței) |
| Repetiție circulară | **Axă**: operația de tip axă |
| Repetiție liniară | **Direcție**: o operație de tip axă sau un plan (normala lui) |
| Oglindire | **Plan de oglindire**: un plan de referință |
| Extrudare | **Capăt**: Până la o față sau plan, Până la vârf (o operație de tip punct). Încă nerealizat în această versiune (are nevoie de un nucleu exact) |
| Înclinare | **Plan neutru** |

## Când o referință dispare

Un plan făcut dintr-o față care nu mai există eșuează cu un mesaj care o numește, de exemplu „Fața pe care stă a dispărut din Extrude1.” Nu este mutat niciodată pe o altă față. Schițele și operațiile de pe el sunt marcate „nerealizat” până alegeți o referință nouă; restul piesei rămâne neschimbat.

:::note
În această versiune, fiecare piesă se construiește cu nucleul pe plase, care creează plane, axe și puncte din planuri de bază, fețe plane făcute de o Extrudare sau Revoluție, puncte de schiță, coordonate și alte operații de referință. Orice cere o muchie, capătul unei muchii sau o față curbă are nevoie de un nucleu exact: încă nerealizat în această versiune („Folosește o față sau o muchie a solidului, pe care doar un nucleu exact o poate găsi: încă nerealizat în această versiune.”).
:::
