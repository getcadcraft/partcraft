---
title: Përgatit një pjesë për printim 3D
summary: Kontrollo që një pjesë ose montim është i mbyllur, përshtatet në printerin tënd dhe qëndron mbi një bazë, pastaj shkarkoje si STL ose 3MF për slicer-in tënd.
keywords: printim 3d, printim 3d, printer, print, slicer, stl, 3mf, i mbyllur plotësisht, i mbyllur, manifold, shtrat, madhësia e shtratit, pllaka e ndërtimit, mbivendosje, mbështetëse, bazë, milimetra, eksport, filetat, hapësirë
from: 90d81dff
---

Një slicer ka nevojë për një formë të mbyllur: pa vrima, çdo faqe që shikon jashtë, asgjë që nuk kalon përmes vetes. Pjesët që PartCraft ndërton janë të mbyllura nga vetë ndërtimi, prandaj kontrolli kryesisht të tregon madhësinë, nëse pjesa përshtatet në shtratin e printerit tënd, nëse qëndron mbi një faqe të sheshtë, dhe sa del jashtë.

## Kontrollo dhe shkarko

1. Opsionale, një herë: cakto shtratin e printerit tënd te {{ui:Settings}} › PartCraft › **Printeri 3D**: gjerësinë, thellësinë dhe lartësinë në milimetra. Lëri bosh për ta anashkaluar atë kontroll.
2. Zgjidh {{ui:Export}}, pastaj {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dialogu thotë "Gati për printim" ose "Jo gati për printim", liston çdo gabim, dhe jep madhësinë në shtrat (X × Y × Z, në milimetra), vëllimin dhe numrin e trekëndëshave.

3. Kliko {{ui:Download 3MF}} ose {{ui:Download STL}}. Skedari është i njëjtë me {{ui:Export}} › {{ui:3MF, for 3D printing}} ose {{ui:STL, for 3D printing}}.

Në një montim, kontrolli dhe skedarët marrin të gjithë montimin, çdo kopje aty ku është vendosur.

Pjesa kontrollohet duke qëndruar ashtu si e shkruan eksporti: ajo që tregon lart në PartCraft (pingul me planin e sipërm) tregon lart në shtrat. Një pjesë e skicuar në planin e sipërm qëndron e sheshtë.

## Çfarë mund të thotë dialogu

**Jo gati për printim** (një slicer mund ta refuzojë ose ta printojë gabim): vrima (brinjë me një faqe vetëm në njërën anë), brinjë të ndara nga tre ose më shumë faqe, faqe që shikojnë në drejtime të kundërta, një trup i kthyer nga brenda, ose një trup që kalon përmes vetes. Një pjesë e ndërtuar në PartCraft nuk duhet kurrë t'i shfaqë këto; nëse e bën, shih [Zgjidhja e problemeve](topic:troubleshooting).

**Paralajmërime** (printohet, por hidh një sy më parë):

- **Më e madhe se shtrati i printerit**, edhe e rrotulluar 90° mbi të.
- **Asgjë nuk qëndron e sheshtë në fund**: rrotullo pjesën në slicer-in tënd që një faqe të prehet mbi shtrat, përndryshe do të kërkojë mbështetëse ose një raft.
- **Del jashtë më shumë se 45° nga vertikalja**: ato faqe kanë nevojë për mbështetje duke qëndruar ashtu si është. Një mënyrë tjetër ngritjeje mund të kërkojë më pak.
- **Trupat e veçantë mbivendosen** ose **takohen faqe më faqe**: slicer-at zakonisht i bashkojnë. {{ui:Combine}} te Veçori › {{ui:More}} i bashkon në një trup. Shih [Trupat](topic:bodies).
- **Nën 1 mm në gjerësi**: kontrollo madhësitë e pjesës.

## Filetat që printohen

Një fileto e modeluar printohet si fileto e vërtetë. Jepi disa **Hapësirë** që një bulon i printuar të hyjë në një arrë të printuar: shih [Filetat](topic:threads).

## Sipërfaqe të rrumbullakta të lëmuara

STL dhe 3MF janë të bëra nga trekëndësha. Për sipërfaqe të rrumbullakta më të lëmuara, kliko hapësirën bosh që asgjë të mos jetë e përzgjedhur dhe cakto **Kurbat** në **Të imëta (128 për rrotullim)** ose **Shumë të imëta (256 për rrotullim)** në panelin e djathtë përpara eksportit. Më shumë trekëndësha bëjnë skedarë më të mëdhenj.

## Më e madhe, më e vogël ose në copa

- **Eksporto › Shkallo për printim (STL ose 3MF)…** ruan pjesën e shkallëzuar sipas çdo boshti pa e ndryshuar: një **lejim tkurrjeje** në përqind (madhësia × (1 + s), ose madhësia e saktë ÷ (1 − s)) për një model derdhjeje, ose faktorë të thjeshtë, rreth mesit, të qoshes më të ulët, mesit të fundit ose origjinës.
- **Eksporto › Ndaj për printim (një zip me copa)…** pret një pjesë shumë të madhe për printerin tënd në copa që përshtaten secila në shtratin që jep, të lidhura me kunja, çelësa, bisht-dhie, vrima kunjash ose xhepa magnetësh (me hapësirën që cakton), çdo copë dhe lidhje numërohet, dhe i ruan copat si STL ose 3MF në një zip me një fletë montimi. Vetë pjesa nuk ndryshon.

## Nuk kontrollohet

Trashësia e mureve, detajet më të vogla se duza jote mund të vizatojë, dhe si do të vendosë slicer-i mbështetëset. Slicer-i yt i tregon ato.
