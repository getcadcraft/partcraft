---
title: Përfundimi 3D: paralele dhe scallop
summary: Përfundo të gjithë sipërfaqen e lakuar të modelit me një freza me top, të rrumbullakët ose të sheshtë, në vija paralele me çdo kënd ose në kalime të ndara me një distancë të caktuar, në mënyrë që kreshtat midis tyre të mbajnë lartësinë që kërkon. Çfarë garantojnë shtigjet dhe çfarë nuk garantojnë.
keywords: përfundim 3D, përfundim, paralele, raster, scallop, scallop konstant, kreshtë, top, hundë sferike, hundë e rrumbullakët, sipërfaqe, toleranca, hap anësor, pjerrësi, material për t'u lënë, freza e rënies, gërvishtje
from: 942d2341
---

Dy operacione në Prodhimi presin **të gjithë sipërfaqen e modelit** me veglën të mbajtur vertikalisht (tre boshte). Nuk kërkojnë përzgjedhje: punojnë në gjithë pjesën e modelit që mund të shihet nga lart. Para së gjithash prit pjesën (adaptiv ose xhep); një kalim përfundimi mbi material të pa prerë do të paralajmërojë se do të presë thellë.

## Paralele

Vija të drejta mbi model në **këndin** që cakton, larg njëra-tjetrës për **hapin anësor** (një pjesë e diametrit të veglës). Çdo vijë ndjek sipërfaqen: maja e veglës është aq e lartë sa duhet, që asnjë pjesë e frezës të mos zbresë nën model, dhe vija pritet më hollë kudo ku sipërfaqja përkulet. Me **Zig-zag** të ndezur, vegla mbetet poshtë midis vijave aty ku mund ta bëjë këtë me siguri (kontrollohet përgjatë lëvizjes); përndryshe ngrihet.

- **Toleranca**: sa mund të largohet një pjesë e drejtë e vijës nga lartësia e vërtetë e majës (gjysma e saj përdoret si kufi në mesin e çdo pjese). Parazgjedhja 0,01 mm.
- **Vetëm aty ku sipërfaqja është të paktën … dhe të shumtën … (°)**: përfundo vetëm zonat e sheshta ose vetëm ato të pjerrëta. Aty ku sipërfaqja del jashtë intervalit, vija lihet jashtë dhe vegla ngrihet.
- **Material për t'u lënë**: modeli i zhvendosur me atë distancë (freza e rritur me të: e saktë për veglat me top dhe të rrumbullakët; një vegël e sheshtë lë të paktën aq).
- **Fundi**: asgjë nuk pritet nën këtë z.

## Scallop

Kalime që mbajnë një distancë konstante mbi sipërfaqe nga njëra-tjetra, në mënyrë që kreshta (scallop-i) që mbetet midis dy kalimeve fqinje të ketë **lartësinë** që kërkon. Distanca del nga lartësia dhe rrezja e topit: s = 2·√(2·R·h − h²), p.sh. rreth 0,69 mm midis kalimeve për një top Ø6 dhe një kreshtë 0,02 mm. Një vegël me hundë të rrumbullakët përdor rrezen e qoshes së saj. Një frezë e sheshtë refuzohet: nuk ka kreshtë për të caktuar madhësinë.

Kalimet nisin **nga skaji i modelit, duke hyrë brenda**, ose **nga maja e tij, duke zbritur**. Ato janë konturet e distancës mbi sipërfaqe (jo të lartësisë), kështu që në një pjerrësi janë afër në plan dhe në një sipërfaqe të sheshtë janë larg njëra-tjetrës. Distanca matet në një rrjet mbi sipërfaqe dhe është e saktë deri në rreth 1 %; lartësia e kreshtës është e saktë aty ku sipërfaqja është e sheshtë ose lehtë e lakuar, dhe e përafërt aty ku ajo lakohet shpejt. **Ngjitja** mban anën më të lartë të sipërfaqes në të djathtë të frezës.

## Sa të mira janë shtigjet

Çfarë kontrollojnë testet, me formula të mbyllura ose me një kërkim të pavarur me forcë brutale të gjurmës së frezës:

- Lartësia e majës nën vegël është e saktë për një vegël me top, të rrumbullakët dhe të sheshtë mbi faqe, skaje dhe qoshe të rrjetit, dhe nuk është kurrë më e lartë se lartësia e vërtetë; për vijat paralele shtegu qëndron brenda tolerancës së saj, pa asnjë gërvishtje më të thellë se kjo.
- Gjatësitë e shtegut mbi një plan të pjerrët përputhen me formulën e mbyllur; kalimet scallop në një plan janë në distancën e kërkuar nga njëra-tjetra dhe kreshta midis tyre del në lartësinë e kërkuar.
- Simulimi i materialit nuk tregon gërvishtje pas një kalimi dhe tregon kreshtat që mbeten.

Çfarë nuk janë këto shtigje: janë kalime themelore përfundimi, jo i gjithë ajo që ofron një sistem prodhimi.

- Nuk janë ndërtuar: përfundimi me vijë uji (z konstant), pastrimi me laps dhe qoshe, kalimet radiale dhe spirale, projektimi i një kurbe mbi sipërfaqe, zbulimi i sipërfaqeve të sheshta, kontrollet e përplasjes së mbajtësit dhe të bishtit. Trashja dhe makinimi i mbetjes janë operacione të veta ([Trashja 3D dhe makinimi i mbetjes](topic:rough-3d)); një vegël që pjerret është [përfundimi 5 boshte](topic:multi-axis#5-axis-finishing).
- Qendra e veglës mbetet mbi model: shtigjet ndalen te skaji i modelit në vend që të kalojnë përtej tij, kështu që një mur vertikal pikërisht në skaj nuk përfundohet deri te këmba e tij.
- Nuk shihen nën-prerjet (sipërfaqja është ajo që vegla takon nga lart).
- Modeli është rrjeti nga kerneli, kështu që shtigjet ndjekin rrjetin (toleranca e tij e kordës është rreth 0,0002 e diagonales së pjesës), jo sipërfaqen e saktë.
- Përfundimi i një modeli të madh me tolerancë të hollë krijon një program të gjatë me shumë lëvizje të shkurtra. Kontrollo daljen në simulatorin e makinës tënde para prerjes.
