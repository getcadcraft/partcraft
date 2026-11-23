---
title: Sondimi: gjej pjesën dhe cakto zhvendosjen e punës
summary: Prek një faqe të sipërme, një anë, një vrimë ose një bos me një sondë dhe lëre kontrollin të lëvizë zhvendosjen e punës aty ku pjesa është vërtet, ose vetëm mat. Çfarë mund të bëjë secili kontroll, dhe çfarë nuk është vërtetuar.
keywords: sondë, sondimi, sondë prekëse, prekje për zero, zhvendosja e punës, g54, g31, g38.2, kalim, referencë, gjej qendrën, vrimë, bos, skaj, cakto zero, mat, inspektim, g10
from: 1f718b82
---

{{ui:Sondë}} te Prodhimi shkruan një cikël sondimi në program: sonda prek pjesën dhe kontrolli lëviz zhvendosjen e punës (G54) me diferencën midis vendit ku u gjet sipërfaqja dhe vendit ku e thotë modeli. Operacionet e mëpasshme pastaj presin aty ku pjesa është vërtet.

**Asgjë këtu nuk është ekzekutuar në një makinë.** Lëvizjet para një prekjeje janë lëvizje të zakonshme: sonda nuk shikohet deri te lëvizja e vetë sondimit. Ekzekuto ngadalë, në ajër fillimisht, me dorën në ndalim avancimi.

## Përdorimi

1. Te skeda **Veglat**, operacioni i parë i sondimit shton një **sondë prekëse**: diametrin e topit të saj dhe avancimin e sondimit (100 mm/min nëse nuk cakton një tjetër).
2. Shtyp {{ui:Më shumë}} në shiritin e Prodhimit, pastaj {{ui:Sondë}}, dhe kliko çfarë të preket. Çdo përzgjedhje është një cikël, sipas renditjes së klikimeve:

| Përzgjedhja | Cikli | Çfarë caktohet |
|---|---|---|
| Një faqe e sheshtë që shikon lart boshtin e veglës | Një prekje duke zbritur | Z |
| Një faqe anësore e sheshtë pingul me X ose me Y | Një prekje drejt faqes, pak poshtë majës së saj | X ose Y |
| Një vrimë ose bos përgjatë boshtit të veglës | Katër prekje (+X, −X, +Y, −Y) | X dhe Y të qendrës së saj |

3. **Me rezultatin**: {{ui:Cakto zhvendosjen e punës}} ose {{ui:Vetëm matje}}.
4. **Fillo nga kjo distancë** dhe **Kërko kjo distancë përtej** janë sa larg nga sipërfaqja e pritur fillon lëvizja e sondimit dhe sa përtej saj mund të udhëtojë sonda para se kontrolli të heqë dorë. **Thellësia** është sa poshtë majës së një vrime, bosi ose anës së sheshtë shkon topi.

Vendos operacionin e sondimit të parë, përpara se çdo gjë të presë.

## Çfarë shkruan çdo kontroll

| Kontrolli | Prekja | Rezultati |
|---|---|---|
| Stil Fanuc | `G31`, pozicioni i mbajtur në `#101` deri `#104` | Variablat e zhvendosjes (`#5221` deri `#5223`) zhvendosen me gjetur − pritur. Vetëm matje: diferenca mbetet në `#110` (dhe `#111`). |
| LinuxCNC | `G38.2`, pozicioni i mbajtur në parametra të emërtuar | `G10 L2 P1` me zhvendosjen e re. Vetëm matje: një mesazh `(DEBUG, …)`. |
| GRBL | `G38.2` | Një prekje cakton boshtin me `G10 L20 P1`. GRBL nuk ka variabla, kështu që **nuk mund të gjejë një qendër**: skedari e thotë këtë në një koment dhe nuk cakton asgjë. |

Aritmetika është e postprocesorit, kështu që mund ta ndryshosh: ngjarjet janë `probe-move` dhe `probe-set` ([Postprocesorët që mund t'i redaktosh](topic:post-processors)).

## Kufijtë

- Një zhvendosje pune (G54). Vetëm faqe pingul me boshtet: pa kënd, pa cikël qoshe, pa rrotullim të punës.
- Nuk ka vegël caktimi, nuk ka kontroll për veglë të thyer, nuk ka matje të një madhësie kundrejt një tolerance, nuk ka raport.
- Boshti nuk nis për një sondë dhe lëngu i ftohjes mbetet i fikur; asgjë nuk kontrollon nëse vegla në bosh është një sondë.
- Simulimi i materialit nuk ekzekuton një shteg sondimi.
- Kalibrimi i vetë sondës (ofseti i topit, devijimi i stilit, drejtimi i gatillimit) është i kontrollit.
