---
title: Përfundimi 3D: paralel dhe scallop
summary: Përfundo tërë sipërfaqen e lakuar të modelit me një frezë me majë sferike, me majë të gjerë ose të sheshtë, në vija paralele me çdo kënd ose në kalime të larguara një distancë të caktuar, në mënyrë që kreshtat ndërmjet tyre të mbajnë lartësinë që kërkon. Çfarë garantojnë shtegjet, dhe çfarë jo.
keywords: përfundim 3D, përfundim, paralel, raster, scallop, scallop konstant, cusp, frezë me majë sferike, frezë me majë të gjerë, sipërfaqe, toleranca, hapi, për t'u lënë, pjerrësi, materiali për t'u lënë, drop cutter, gërryerje
from: e1587d0a
---

Dy operacione në Manufacture e presin **tërë sipërfaqen e modelit** me veglën të mbajtur vertikalisht (tre boshte). Ato nuk marrin zgjedhje: punojnë mbi gjithë pjesën e modelit që mund të shihet nga lart. Gërryej më parë pjesën (adaptive ose pocket); një kalim përfundimtar mbi material të papërpunuar paralajmëron se do të presë thellë.

## Paralel

Vija të drejta përgjatë modelit në **këndin** që cakton, të larguara **hapin** (një pjesë e diametrit të veglës). Çdo vijë ndjek sipërfaqen: maja e veglës është aty ku duhet të jetë që asnjë pjesë e prerësit të mos shkojë nën model, dhe vija priten më të imëta kudo ku sipërfaqja përkulet. Me **Zig-zag** të ndezur, vegla mbetet poshtë ndërmjet vijave aty ku mund ta bëjë këtë në mënyrë të sigurt (kontrollohet përgjatë lëvizjes); përndryshe ngrihet.

- **Toleranca**: sa mund të largohet një pjesë e drejtë e një vije nga lartësia e vërtetë e majës (gjysma e tij përdoret si kufi në mes të çdo pjese). Parazgjedhja 0,01 mm.
- **Vetëm aty ku sipërfaqja është të paktën … dhe më së shumti … (°)**: përfundo vetëm zona të sheshta ose vetëm ato të pjerrëta. Aty ku sipërfaqja është jashtë intervalit, vija lihet jashtë dhe vegla ngrihet.
- **Materiali për t'u lënë**: modeli i zhvendosur për atë distancë (prerësi i zmadhuar me të: i saktë për veglat me majë sferike dhe me majë të gjerë; një vegël e sheshtë lë të paktën aq).
- **Fundi**: asgjë nuk pritet nën këtë z.

## Scallop

Kalime që mbajnë një distancë konstante mbi sipërfaqe nga njëra-tjetra, kështu që kreshta (scallop) që mbetet ndërmjet dy kalimeve fqinje ka **lartësinë** që kërkon. Distanca rrjedh nga lartësia dhe rrezja e sferës: s = 2·√(2·R·h − h²), për shembull rreth 0,69 mm ndërmjet kalimeve për një sferë Ø6 dhe një kreshtë 0,02 mm. Një vegël me majë të gjerë përdor rrezen e këndit të saj. Një frezë e sheshtë refuzohet: nuk ka kreshtë për ta përcaktuar.

Kalimet fillojnë **nga skaji i modelit, duke hyrë brenda** ose **nga maja e tij, duke zbritur**. Ato janë kontura të distancës mbi sipërfaqe (jo të lartësisë), kështu që në një pjerrësi janë afër në plan, dhe në një sipërfaqe të sheshtë janë të larguara gjerësisht. Distanca matet në një rrjetë mbi sipërfaqe dhe është e saktë deri në rreth 1 %; lartësia e kreshtës është e saktë aty ku sipërfaqja është e sheshtë ose e përkulur butë, dhe e përafërt aty ku përkulet shpejt. **Ngjitje** e mban anën më të lartë të sipërfaqes në të djathtën e prerësit.

## Sa të mira janë shtegjet

Çfarë kontrollojnë testet, me formula të mbyllura ose një kërkim të pavarur brutal të gjurmës së prerësit:

- Lartësia e majës nën vegël është e saktë për një vegël me majë sferike, me majë të gjerë dhe të sheshtë mbi faqe, brinjë dhe qoshe të rrjetës, dhe nuk është kurrë mbi lartësinë e vërtetë; për vija paralele shtegu qëndron brenda tolerancës së saj, pa asnjë gërryerje më të thellë se kaq.
- Gjatësitë e shtegut mbi një plan të pjerrët përputhen me formulën e mbyllur; kalimet scallop mbi një plan janë në distancën e kërkuar dhe kreshta ndërmjet tyre del në lartësinë e kërkuar.
- Simulimi i materialit nuk tregon gërryerje pas një kalimi dhe tregon kreshtat që mbeten.

Çfarë nuk janë këto shtigje: janë kalime bazë përfundimtare, jo i gjithë ai që ofron një sistem prodhimi.

- Nuk janë ndërtuar ende: vijë me z konstant (waterline), pastrimi i lapsit dhe i qoshes, kalimet radiale dhe spirale, projektimi i një kurbe mbi sipërfaqe, zbulimi i zonave të sheshta, makinimi i mbetjes, kontrollet e përplasjes së mbajtësit dhe të shaftit, dhe çdo prirje e veglës.
- Qendra e veglës mbetet mbi model: shtigjet ndalen në skajin e modelit në vend që të vazhdojnë jashtë tij, kështu që një mur vertikal pikërisht në skaj nuk përfundohet deri te baza e tij.
- Nënprerjet nuk shihen (sipërfaqja është ajo që vegla takon nga lart).
- Modeli është rrjeta nga kerneli, kështu që shtigjet ndjekin rrjetën (toleranca e saj e kordës është rreth 0,0002 e diagonales së pjesës), jo sipërfaqen e saktë.
- Përfundimi i një modeli të madh me tolerancë të imët prodhon një program të gjatë me shumë lëvizje të shkurtra. Kontrollo daljen në simulatorin e makinës tënde përpara prerjes.
