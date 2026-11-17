---
title: Planet e referimit, boshtet dhe pikat
summary: Bëj plane të zhvendosura nga një faqe, me një kënd, përmes tre pikave, në mes, tangjente me një cilindër, pingul me një brinjë ose përmes një brinjeje dhe një pike; boshte; pika në mesin e brinjëve, në kryqëzime dhe në qoshet e planeve; skicoje mbi to dhe përdori si boshte rrotullimi, drejtime modelimi dhe plane pasqyrimi.
keywords: datum, midis objekteve, pikë mesi, pikë kryqëzimi, plan përmes brinjës dhe pikës, plan referimi, plan pune, plan ndërtimi, plan i zhvendosur, plan me kënd, plan mesi, plan tangjent, bosht referimi, bosht ndërtimi, pikë referimi, pikë pune, skicë mbi plan
from: e7eb6fc1
---

Gjeometria e referimit është skela mbi të cilën ndërton veçoritë: një **plan** për të skicuar aty ku nuk ka faqe, një **bosht** për të rrotulluar ose modeluar rreth tij, një **pikë** për ta ndalur një ekstrudim. Nuk ka material të vetin. Planet shfaqen në pamje si katror të zbehtë, boshtet si vija me pika, pikat si kryqe të vogla; të tria bashkohen në histori dhe ndjekin atë nga u bënë kur ndryshon një madhësi më lart.

Janë në menunë {{ui:Më shumë}} të grupit Veçori: {{ui:Plani}}, {{ui:Boshti}}, {{ui:Pikë}}.

## Bëj një plan

1. Kliko një faqe të sheshtë, ose një plan bazë në histori, për të nisur prej tij (opsionale).
2. Zgjidh {{ui:Më shumë}}, pastaj {{ui:Plani}}. Fillon si plan i zhvendosur 20 % të madhësisë së pjesës larg asaj që zgjodhe (ose nga plani i sipërm).
3. Në panelin e djathtë zgjidh **Llojin** dhe referencat e tij:

| Lloji | Referencat | Numrat |
|---|---|---|
| Zhvendosur nga një plan ose faqe | **Nga plani** | **Distanca (mm)**, negative për anën tjetër |
| Me kënd, përmes një brinjeje ose boshti | **Nga plani**, **Rrotullo rreth** (një bosht botëror, një veçori boshti, ose një brinjë e drejtë e zgjedhur) | **Këndi (°)** |
| Përmes tre pikave | **Pika 1**, **Pika 2**, **Pika 3** | — |
| Plan mesi midis dy | **Plani i parë**, **Plani i dytë** (paralele: në gjysmë; takohen: plani që e ndan këndin në dy) | — |
| Tangjent me një cilindër | **Cilindri** (një faqe cilindrike), **Pika më e afërt** (cila anë) | — |
| Pingul me një brinjë, në një pikë | **Brinja**, **Në pikë** (plani kalon nga pika e brinjës më të afërt me të, dhe përmes pikës gjithashtu) | — |
| Përmes një brinjeje dhe një pike | **Brinjë e drejtë** (ose bosht), **Përmes pikës** | — |
| Pingul me një brinjë në mesin e saj | **Brinja** (në gjysmë të gjatësisë së saj, pingul me të aty), ose pa brinjë **Pika 1** dhe **Pika 2** (plani në gjysmë midis tyre) | — |

Çdo referencë ka një buton **Përzgjidh**: zgjidhe, pastaj kliko në pamje. Një vend për plan pranon një plan bazë, një plan referimi ose një faqe të sheshtë; një vend për pikë pranon skajin e një brinjeje (kliko afër atij skaji), një veçori pike ose një vend mbi një faqe; një vend për brinjë pranon një brinjë. {{key:Esc}} anulon një zgjedhje. **Kthe normalen** e kthen planin përmbys (ana nga ku shikon një skicë mbi të).

Në këtë version, një vend që kërkon një brinjë ose një faqe cilindrike (Tangjent me një cilindër dhe vendet e brinjës) përgjigjet "nuk është ndërtuar ende": përdor pika ose një bosht në vend të tyre.

## Skicoje mbi një plan

Përzgjidhe planin (në histori ose duke klikuar katrorin e tij në pamje) dhe zgjidh {{ui:Skica}}, ose **Skicoje mbi të** në panelin e tij. Skica ndjek planin: nëse ndryshon distancën e planit, skica dhe çdo veçori mbi të lëvizin gjithashtu.

## Boshte dhe pika

- {{ui:Boshti}}: përmes dy pikave, boshti i një cilindri ose koni, aty ku takohen dy plane, përgjatë një brinjeje të drejtë (ose boshtit të një brinjeje rrethore), ose pingul me një faqe përmes një pike.
- {{ui:Pikë}}: në koordinata, në një kulm ose pikë skice, ose në qendrën e një brinjeje rrethore, plus pikat "midis objekteve":

| Lloji i pikës | Referencat |
|---|---|
| Mesi i një brinjeje (ose midis dy pikave) | **Brinja** (në gjysmë të gjatësisë së saj, edhe për harqe dhe kurba), ose pa brinjë **Pika 1** dhe **Pika 2** |
| Ku një brinjë ose bosht takon një faqe ose plan | **Brinja** (e drejtë ose e kurbuar) ose një bosht, dhe **Takon planin** (një plan ose faqe e sheshtë) ose **Ose një faqe** (një faqe e sheshtë ose një cilindër). Një rreth kryqëzon një plan dy herë dhe një vijë kalon përmes një cilindri dy herë: **Kryqëzimi tjetër** zgjedh të dytin |
| Ku takohen tre plane | **Plani i parë**, **Plani i dytë** dhe **Plani i tretë** (plane ose faqe të sheshta) |

Secila dështon me një mesazh të thjeshtë kur referencat e saj nuk përshtaten: një vijë paralele me planin, një vijë që humb cilindrin, një brinjë që nuk arrin planin, tre plane që nuk takohen në një pikë, ose një pikë mbi vijën me të cilën duhet të fiksohet një plan.

Përdori në veçori të tjera:

| Ku | Si |
|---|---|
| Rrotullim | **Boshti**: zgjidh veçorinë e boshtit nga lista (duhet të shtrihet në planin e skicës) |
| Model rrethor | **Boshti**: veçoria e boshtit |
| Model linear | **Drejtimi**: një veçori boshti, ose një plan (normalja e tij) |
| Pasqyrim | **Plani i pasqyrimit**: një plan referimi |
| Ekstrudim | **Fundi**: Deri te faqja ose plani, Deri te kulmi (një veçori pike). Nuk është ndërtuar ende në këtë version (kërkon një kernel të saktë) |
| Draft | **Plani neutral** |

## Kur një referencë zhduket

Një plan i bërë nga një faqe që nuk ekziston më dështon me një mesazh që e emëron, si "Faqja mbi të cilën ndodhet është zhdukur nga Extrude1." Nuk zhvendoset kurrë te një faqe tjetër. Skicat dhe veçoritë mbi të shënohen si "nuk është ndërtuar" derisa të zgjedhësh një referencë të re; pjesa tjetër e pjesës mbetet siç ishte.

:::note
Ky version ndërton çdo pjesë me kernelin e rrjetës, që krijon plane, boshte dhe pika nga planet bazë, faqet e sheshta të krijuara nga një Ekstrudim ose Rrotullim, pikat e skicës, koordinatat dhe veçoritë e tjera të referimit. Çdo gjë që kërkon një brinjë, skajin e një brinjeje ose një faqe të lakuar, kërkon një kernel të saktë: nuk është ndërtuar ende në këtë version ("Përdor një faqe ose brinjë të trupit të ngurtë, që vetëm një kernel i saktë mund ta gjejë: nuk është ndërtuar ende në këtë version.").
:::
