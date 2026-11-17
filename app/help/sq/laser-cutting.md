---
title: Dërgo një vizatim te një lazer
summary: Zgjidh çfarë bën secila shtresë (prerje, gërvishtje, gravim, mbushje, fotografi), shiko paraprakisht lëvizjet e kokës, ruaj G-code GRBL për modalitetin lazer, ose dërgoje nga shfletuesi pasi të kornizohet puna.
keywords: lazer, prerës lazeri, gravues lazeri, GRBL, G-code, gravim, mbushje, dither, gravim fotografie, gërvishtje, prerje, Web Serial, Linux, kornizo punën, fuqia, shpejtësia, kalimet
from: 327b3c46
---

Paneli {{ui:Lazer}} i kthen shtresat e një vizatimi në një program për një lazer që punon me GRBL (shumica e kontrolluesve hobi dhe të punishteve të vogla, me diodë dhe CO2). Në PartCraft, zgjidh {{ui:Eksporto}} › {{ui:Program lazeri…}}, pastaj {{ui:Shto kontura nga një DXF…}}: konturat dhe vrimat hyjnë në shtresën CUT. Shabllonet e sheshta të pjesëve prej lamine (me vijat e përkuljes në shtresën BEND) kërkojnë bërthamën e saktë, që kjo version nuk e ka. Cilësimet ruhen në skedarin e pjesës ose montimit.

:::warning
Provo çdo cilësim fillimisht mbi mbeturina, vishu syze mbrojtëse që përshtaten me lazerin tënd, mbaje kapakun mbyllur aty ku ka, dhe mos e lër kurrë lazerin që punon pa mbikëqyrje. Numrat me të cilët fillon një shtresë janë vende-mbajtëse, jo rekomandime për asnjë material.
:::

## Zgjidh çfarë bën secila shtresë

Çdo shtresë e vizatimit është një rresht. {{ui:Bën}} e vendos në **Prit**, **Gërvisht**, **Gravo vijat**, **Mbush format**, **Gravo fotografinë** ose **Nuk dërgohet**, me një {{ui:Fuqia %}}, një {{ui:Shpejtësia mm/min}} dhe një numër {{ui:Kalime}}.

- **Mbush format** djeg brendësinë e formave të mbyllura me vija, {{ui:Hapësira e vijave}} larg njëra-tjetrës, në një {{ui:Këndi}}, në të dy drejtimet ose në një; me një kalim të tepërt, që koka të jetë me shpejtësi kur lazeri ndizet. Kryqëzimi shton një kalim të dytë në 90°. Një formë me vrimë mbetet e hapur te vrima.
- **Gravo fotografinë** e kthen një fotografi në pika (Floyd–Steinberg, Atkinson, të renditura, ose thjesht bardhë e zi me një prag) ose, me *Nivelet e gri*, në fuqi të ndryshueshme.
- Rendi: fotografitë dhe mbushjet së pari, pastaj gravimi i vijave, pastaj gërvishtjet, pastaj prerjet, që një pjesë e prera të mos lëvizë ndërsa gravohet. Brenda një shtrese shtigjet kalojnë **së pari nga brenda** (një vrimë para pllakës ku ndodhet), më i afërti i radhës.

## Shiko paraprakisht, pastaj ruaj

Shiko paraprake tregon çfarë bën koka: vijat që djegin me ngjyrë, lëvizjet e shpejta me gri, dhe një kuti jeshile rreth gjithçkaje që digjet. Poshtë saj janë madhësia, gjatësia e djegies dhe një vlerësim kohe (pa përshpejtim; një makinë reale merr më shumë kohë). {{ui:Ruaj G-code…}} shkruan G-code të modalitetit lazer të GRBL: `$32=1`, `M4` (ose `M3`) me vlerat S, lëvizjet `G0` dhe `G1`, `M5` në fund. X0 Y0 është këndi i poshtëm majtas i punës, përveç nëse zgjedh origjinën e vizatimit: vendose zeron e punës së makinës tënde atje. G-code ndjek modalitetin e dokumentuar të lazerit të GRBL; nuk është provuar ende në një lazer real.

## Dërgo nga shfletuesi

Në Chrome dhe Edge, {{ui:Lidh…}} të kërkon të zgjedhësh portën USB të lazerit. Asgjë nuk lidhet ose dërgohet para se të shtypësh një buton. Shtyp {{ui:Kornizo punën}} së pari: koka e ndjek kutinë e punës me lazerin **të fikur** (ose me fuqinë e ulët që ke vendosur për treguesin), që të shohësh ku do të digjet. Vetëm atëherë aktivizohet {{ui:Dërgo punën}}, dhe fiket përsëri nëse ndryshon diçka. {{ui:Pauzë}} e mban kokën, {{ui:Ndalo}} e mban gjithashtu, rivendos kontrolluesin (lazeri fiket) dhe dërgon `M5`. Aty ku mungon Web Serial (Firefox, Safari dhe CadCraft Studio, pamja e web-it të së cilës nuk e ka ende), ruaj G-code dhe dërgoje me programin e vet të lazerit.

## Ende të pandërtuara

Formatet e kontrolluesve të tjerë (Ruida, lazerë Marlin, skedarë të prodhuesve), skedat dhe hyrjet, ofseti i prerjes (kerf), bibliotekat e materialeve, boshtet rrotulluese dhe Z, shtrimi me kamerë.
