---
title: Solid FEM: kontroll i sforcimit të një pjese
summary: Aktivizo shtojcën Solid FEM, rrjetëzo një pjesë, zgjidh sipërfaqet e fiksuara dhe një ngarkesë në pamjen 3D, zgjidh, dhe lexo zhvendosjen dhe sforcimin von Mises mbi model.
keywords: solid fem, elementë të fundëm, fea, sforcim, von mises, zhvendosje, sipërfaqe e fiksuar, ngarkesë, presion, gravitet, frekuencë natyrore, formë mode, rrjet, shtojcë
from: 8b7e6ba2
---

## Çfarë do të bësh

Kontrollo një trup të ngurtë nën një ngarkesë: ku lëviz dhe ku është sforcimi më i lartë. Studimi është linear dhe elastik, kështu është një ndihmës kontrolli; inxhinieri yt rishikon rezultatet.

## Hapat

1. Zgjidh {{ui:Cilësimet}} › {{ui:Shtojcat}} dhe aktivizo {{ui:Solid FEM}} (është i fikur derisa ta bësh). Hap skedën {{ui:Solid FEM}} në panelin e djathtë.
2. Nën {{ui:Materiali}} zgjidh një, ose {{ui:Me porosi}} dhe shkruaj raportin e Poisson-it, densitetin dhe sforcimin e rrjedhjes.
3. Shtyp {{ui:Shto sipërfaqe të fiksuara}}, kliko sipërfaqet që mbahen në pamjen 3D, pastaj shtyp {{ui:Përfundo përzgjedhjen}}.
4. Shto një ngarkesë me {{ui:Shto forcë}}, {{ui:Shto presion}} ose {{ui:Shto gravitet}} dhe zgjidh sipërfaqet e saj në të njëjtën mënyrë.
5. Shtyp {{ui:Rrjetëzo pjesën}}, pastaj {{ui:Zgjidh}}. Zgjidh {{ui:Frekuencat natyrore}} nën {{ui:Studimi}} më parë, nëse do frekuenca.
6. Lexo {{ui:Rezultatet}} dhe {{ui:Paralajmërimet}}, pastaj shtyp {{ui:Shfaq mbi model}} për të vizatuar sforcimin von Mises, zhvendosjen ose formën e modit; {{ui:Hiq grafikun}} e heq atë.

## Shënime

- Faqja zgjidh deri në një numër të caktuar elementësh; rreshti i gjendjes thotë kur madhësia e elementit është shumë e imët.
- Sforcimi te sipërfaqet e fiksuara, pikat e ngarkesës dhe qoshet e mprehta rritet ndërsa rrjeti imtësohet. Imtëso dhe krahaso përpara se të mbështetesh te një kulm.
- Çdo ndryshim është një hap anulimi, dhe cilësimet ruhen në skedarin e pjesës.
- Për studimet e rrjedhjes dhe kontaktit shih [Kontrollo sforcimin dhe lakimin](topic:simulation).
