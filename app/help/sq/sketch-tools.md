---
title: Spline, shkurtim, ofset dhe mjete të tjera skice
summary: Vizato spline me pika përshtatjeje dhe me pika kontrolli, shkurto dhe zgjat kurbat, ofseto një zinxhir, pasqyro rreth një vije qendrore, shto shumëkëndësha dhe slote, modelo gjeometrinë e skicës dhe projekto skajet e modelit.
keywords: spline, pikë përshtatjeje, pikë kontrolli, b-spline, nurbs, kurbë, shkurto, zgjat, ofset, pasqyro, simetrik, shumëkëndësh, gjashtëkëndësh, slot, model, model linear, model rrethor, projekto, projekto skajin, përfshi, konverto entitetet
from: 3ecb166a
---

Këto mjete funksionojnë në një skicë të hapur. {{ui:Spline}} dhe {{ui:Shkurto}} janë në shiritin e veglave. Të tjerët janë nën {{ui:Më shumë}} në fund të mjeteve të skicës. Çdo mjet është një hap anulimi, dhe {{key:Esc}} e ndal. Për mjetet bazë të vizatimit shih [Vizato skicën e parë](topic:sketch-basics).

## Spline-et

Një spline është një kurbë e lëmuar. Ka dy lloje.

| Mjeti | Tasti | Si të vizatosh |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kliko pikat nëpër të cilat kalon kurba. Mbyll me {{key:Enter}}, {{key:Esc}}, një klik me butonin e djathtë ose një klik të dyfishtë. Kliko pikën e parë përsëri për ta mbyllur spline-in |
| {{ui:Spline me pika kontrolli}} (nën {{ui:Më shumë}}) | | Kliko pikat e kontrollit. Kurba tërhiqet drejt tyre por prek vetëm të parën dhe të fundit. Poligoni me pika i kontrollit shfaqet ndërsa vizaton dhe më pas |

- **Pikat janë pika skice.** Zvarrit ato, ose jepu atyre lidhje dhe përmasa si çdo pikë tjetër. Pika e parë e një spline-i mund të ngjitet te fundi i një vije, gjë që i bashkon me një lidhje bashkë.
- **Tangjente te një skaj.** Përzgjidh një vijë, hark ose spline që takon njërin skaj të një spline-i, pastaj spline-in, dhe zgjidh {{ui:T Tangjente}}. Drejtimi i skajit të spline-it ndjek atëherë vijën. Një tangjente larg skajeve të spline-it refuzohet: "Një tangjente me një spline kërkon që vija, harku ose spline-i të takojë një nga skajet e tij."
- **Skajet.** Pa një lidhje tangjente, skajet e një spline-i me pika përshtatjeje janë natyrale (pa lakim në skajin e vetë). Kurba është kubike dhe kalon nëpër çdo pikë, me hapësirën e saj të caktuar nga distancat midis pikave.
- **Spline-et e mbyllura** formojnë vetë një profil. Spline-et e hapura bashkojnë vija dhe harqe në një lak të mbyllur si çdo kurbë tjetër.
- Fshirja e një pike brenda një spline-i heq atë pikë dhe e mban spline-in, për sa kohë ka të paktën dy pika (tre kur është e mbyllur).

Ekstrudimi dhe rrotullimi ndërtojnë spline-in me kernel rrjeti nga copa të shkurtra të drejta (kurbat e vërteta kanë nevojë për një kernel të saktë: ende nuk është ndërtuar në këtë version). Eksporti DXF e shkruan një spline si polivijë që qëndron brenda 0.01 mm nga kurba, sepse DXF R12 nuk ka entitet spline.

## Shkurto dhe zgjat

| Mjeti | Tasti | Si |
|---|---|---|
| {{ui:Shkurto}} | {{key:T}} | Tregoje një kurbe: pjesa që do të largohet shfaqet e kuqe, deri te kryqëzimet më të afërta. Kliko për ta hequr. Një kurbë që nuk kryqëzon asgjë hiqet e tërë |
| {{ui:Zgjat}} (nën {{ui:Më shumë}}) | {{key:E}} | Kliko një vijë ose hark pranë fundit për ta zgjatur. Ai rritet deri te kurba e radhës që takon. "Nuk ka asgjë që ky skaj të arrijë." kur nuk ka asgjë në rrugë |

Shkurto dhe Zgjat funksionojnë mbi vija, harqe, rrethe dhe spline-e (Zgjat: vija dhe harqe).

- Një **rreth** i shkurtuar bëhet hark. Përmasa e tij e rrezes ose diametrit kalon te harku.
- Shkurtimi i mesit të një vije lë dy vija që qëndrojnë në të njëjtën vijë të drejtë. Shkurtimi i mesit të një harku lë dy harqe me të njëjtën qendër dhe një lidhje të barabartë.
- Një **spline** i shkurtuar bëhet një spline me pika kontrolli që ndjek saktësisht kurbën e vjetër. Një lidhje tangjente te një skaj që mbahet, mbetet.
- Skaji i ri vendoset mbi kurbën që e preu (mbi vijën, harkun ose rrethin, ose bashkë me skajin e tij). Spline-et nuk mund të mbajnë një pikë, kështu një spline që pret nuk shton lidhje.

**Lidhjet që nuk përshtaten më hiqen**, dhe shiriti i gjendjes thotë sa janë. Për shembull, një përmasë gjatësie mbi një vijë të shkurtuar hiqet, por lidhjet horizontale ose paralele mbeten.

## Ofset

1. Zgjidh {{ui:Ofset}} nën {{ui:Më shumë}} ose shtyp {{key:O}}.
2. Kliko një vijë, hark, rreth ose spline. I gjithë zinxhiri i tij theksohet: të gjitha kurbat e lidhura njëra pas tjetrës, deri te një pikë ku takohen tre ose më shumë. Për të ofsetuar vetëm një pjesë të zinxhirit, përzgjidh fillimisht ato kurba, pastaj zgjidh Ofset dhe kliko njërën prej tyre.
3. Lëviz treguesin në anën ku shkon kopja. Pas tij ndjek një pamje paraprake me pika. Shtyp {{key:B}} për të dy anët.
4. Kliko, shkruaj distancën dhe shtyp {{key:Enter}}.

Vijat dhe harqet ofsetohen saktësisht. Qoshet zgjaten ose shkurtohen derisa takohen. Kopja ka një përmasë të vetme **Ofset**, dhe pjesët e tjera e ndjekin: kliko dy herë përmasën për të ndryshuar tërë kopjen. Një distancë shumë e madhe për zinxhirin refuzohet, për shembull "Ajo distancë është shumë e madhe për këtë zinxhir: një anë do të kthehej brenda jashtë."

Një **spline** ofsetohet nga një spline i ri me pika përshtatjeje brenda 0.001 mm nga ofseti i vërtetë. Kjo kopje është e fiksuar: nuk ndjek ndryshimet e mëvonshme, dhe nuk ka përmasë Ofset. Një spline në një zinxhir ka nevojë për bashkime të lëmuara (tangjente) në skajet e tij.

## Pasqyrimi

1. Me Përzgjidh, zgjidh çfarë do të pasqyrosh.
2. Zgjidh {{ui:Pasqyrimi}} nën {{ui:Më shumë}} ose shtyp {{key:M}}.
3. Kliko vijën ose vijën qendrore rreth së cilës do të pasqyrosh.

Çdo pikë e pasqyruar merr një lidhje **Simetrike** me origjinalen, kështu kopja ndjek kur ndryshon origjinali. Pikat që shtrihen mbi vijën e pasqyrimit ndahen, dhe rrethet e pasqyruara marrin një lidhje E barabartë. Nëse s'ka asgjë të përzgjedhur, kliko elementët për t'i pasqyruar, shtyp {{key:Enter}}, pastaj kliko vijën e pasqyrimit.

## Shumëkëndësha dhe slote

| Mjeti | Si |
|---|---|
| {{ui:Shumëkëndësh}} | Kliko qendrën, pastaj një qoshe, pastaj shkruaj numrin e anëve (3 deri 64). Anët janë të barabarta dhe qoshet shtrihen mbi një rreth ndërtimi. Përmaso rrethin për të caktuar madhësinë e shumëkëndëshit |
| {{ui:Slot}} | Kliko qendrën e njërit skaj, pastaj qendrën e skajit tjetër, pastaj kliko për të caktuar gjerësinë. Dy vija, tangjente me dy gjysmërrathë të barabartë |

## Modelet e skicës

Përzgjidh fillimisht gjeometrinë, pastaj:

- {{ui:Model linear}}: kliko një pikë fillimi, pastaj ku shkon kopja e parë, pastaj shkruaj numrin e kopjeve (duke përfshirë origjinalin).
- {{ui:Model rrethor}}: kliko qendrën, pastaj shkruaj numrin e kopjeve, të shpërndara në mënyrë të barabartë në një rrotullim të plotë.

Kopjet marrin me vete lidhjet midis gjeometrisë së përzgjedhur (një model rrethor lë jashtë ato horizontale dhe vertikale). Kopjet nuk janë të lidhura me origjinalin: ndrysho një, dhe të tjerat mbeten ashtu si janë.

## Projekto skajet e pjesës

1. Zgjidh {{ui:Projekto skajin}} nën {{ui:Më shumë}}.
2. Kliko një skaj të drejtë ose rrethor të pjesës që është pas skicës.

Skaji kopjohet saktësisht mbi planimetrinë e skicës dhe fiksohet (lidhja Fikso). Nuk ndjek ndryshimet e mëvonshme të pjesës. Shtyp {{key:Q}} për ta bërë gjeometri ndërtimi. Një rreth i pjerrët ndaj planimetrisë së skicës do të projektohej në elips, kështu refuzohet. Po ashtu refuzohen skajet e lira dhe skajet që dalin drejt e nga skica. Projektimi kërkon një kernel të saktë: ende nuk është ndërtuar në këtë version.
