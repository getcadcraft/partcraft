---
title: Lidhjet dhe përmasat e skicës
summary: Çdo lidhje dhe përmasë që ka një skicë PartCraft, çfarë të përzgjedhësh për secilën, simboli i saj dhe si sillet gjatë zgjidhjes.
keywords: lidhje, kufizime, bashkë, horizontale, vertikale, paralele, pingule, tangjente, e barabartë, koncentrike, mesi, fikso, distancë, distancë horizontale, distancë vertikale, rreze, diametër, kënd, simbole, glife
from: 9831e7be
---

Lidhjet përcaktojnë se si ndodhet gjeometria në raport me gjeometrinë tjetër. Përmasat përcaktojnë madhësitë. Për të shtuar një lidhje, përzgjidh elementët me mjetin Përzgjidh ({{key:S}}) dhe zgjidh butonin e saj në panelin e djathtë; për të shtuar një përmasë, përdor mjetin Përmasë ({{key:D}}) ose butonat e përmasës në panelin e djathtë. Si të punosh me to: [Përcakto plotësisht një skicë](topic:relations-dimensions).

"Kurbë" më poshtë do të thotë rreth ose hark. Origjina llogaritet si pikë.

## Lidhjet

| Butoni | Simboli | Përzgjidh | Efekti |
|---|---|---|---|
| {{ui:• Bashkë}} | • (shfaqet vetëm kur është e përzgjedhur ose në problem) | Dy pika | Pikat takohen |
| {{ui:• Bashkë}} | • | Një pikë dhe një vijë | Pika shtrihet mbi vijë (ose zgjatimin e saj) |
| {{ui:• Bashkë}} | • | Një pikë dhe një kurbë | Pika shtrihet mbi rreth ose hark |
| {{ui:H Horizontale}} | H | Një vijë, ose dy pika | Vija është horizontale, ose dy pikat janë në të njëjtin lartësi |
| {{ui:V Vertikale}} | V | Një vijë, ose dy pika | Vija është vertikale, ose pikat janë njëra mbi tjetrën |
| {{ui:∥ Paralele}} | ∥ | Dy vija | Vijat kanë të njëjtin drejtim |
| {{ui:⊥ Pingule}} | ⊥ | Dy vija | Vijat takohen në kënd të drejtë |
| {{ui:T Tangjente}} | T | Një vijë dhe një kurbë | Vija prek kurbën pa e kryqëzuar |
| {{ui:T Tangjente}} | T | Dy kurba | Ato prekin, nga jashtë ose nga brenda, sipas vizatimit |
| {{ui:T Tangjente}} | T | Një spline dhe një vijë, hark ose spline që takon një nga skajet e tij | Spline-i del nga ai skaj në drejtimin e kurbës tjetër |
| {{ui:= E barabartë}} | = | Dy vija | Të njëjtën gjatësi |
| {{ui:= E barabartë}} | = | Dy kurba | Të njëjtën rreze |
| {{ui:◎ Koncentrike}} | ◎ | Dy kurba | Të njëjtën qendër |
| {{ui:◎ Koncentrike}} | ◎ | Një pikë dhe një kurbë | Pika ndodhet në qendrën e kurbës |
| {{ui:M Mesi}} | M | Një pikë dhe një vijë | Pika ndodhet në mesin e vijës |
| {{ui:↔ Simetrike}} | ↔ | Dy pika dhe një vijë | Pikat janë pasqyrime të njëra-tjetrës rreth vijës ({{ui:Pasqyrimi}} i shton këto) |
| {{ui:⚓ Fikso}} | ⚓ | Një pikë, një vijë, një kurbë ose një spline | E mban saktësisht aty ku është tani (një spline: pikat e tij) |

Vijat këtu përfshijnë edhe vijat qendrore. Vizatimi shton disa lidhje për ty: ngjitja te një pikë e bën atë bashkë, ngjitja te një kurbë e vendos pikën mbi të, vijat pothuajse horizontale ose vertikale marrin H ose V, dhe një drejtkëndësh vjen me katër qoshet e tij të lidhura, dy H dhe dy V.

**Fikso** është një mënyrë e shpejtë për të ndaluar lëvizjen e diçkaje, por pjesa atëherë nuk mund ta ndjekë një ndryshim përmase gjetkë. Prefero përmasat ndaj origjinës.

## Përmasat

| Butoni | Përzgjidh | Mat | Shfaqet si |
|---|---|---|---|
| {{ui:Distanca}} | Një vijë | Gjatësinë e saj | Distanca 40 |
| {{ui:Distanca}} | Dy pika | Distancën e drejtë midis tyre | Distanca 40 |
| {{ui:Distanca}} | Një pikë dhe një vijë | Distancën nga pika te vija, pingul me të | Distanca 40 |
| {{ui:Distanca}} | Dy vija paralele | Hapësirën midis tyre | Distanca 40 |
| {{ui:Distancë horizontale}} | Dy pika, ose një vijë | Vetëm distancën majtas-djathtas | Distancë horizontale 40 |
| {{ui:Distancë vertikale}} | Dy pika, ose një vijë | Vetëm distancën lart-poshtë | Distancë vertikale 40 |
| {{ui:Rrezja}} | Një rreth ose hark | Rrezen e tij | Rrezja R10 |
| {{ui:Diametri}} | Një rreth ose hark | Diametrin e tij | Diametri ⌀20 |
| {{ui:Këndi}} | Dy vija që nuk janë paralele | Këndin midis tyre, 0 deri 180 gradë | Këndi 30° |

Me mjetin Përmasë, PartCraft zgjedh llojin sipas asaj që klikon dhe ku vendos numrin:

| Ti klikon | Merr |
|---|---|
| Një vijë | Gjatësinë e saj; për një vijë të pjerrët, horizontale nëse numri shkon mbi ose nën të, vertikale nëse shkon anash |
| Një rreth | Diametrin |
| Një hark | Rrezen |
| Dy pika | Distancën; horizontale ose vertikale si për një vijë të pjerrët |
| Një pikë dhe një vijë | Distancën nga pika te vija |
| Dy vija | Këndin, ose distancën nëse janë paralele |
| Një pikë dhe një rreth | Asgjë: "Ato elemente nuk mund të përmasohen së bashku." Përmaso në vend të kësaj pikën e qendrës së rrethit |

**Ofseti** (shfaqet si distanca) bëhet nga mjeti Ofset: mban një vijë të kopjuar paralele në atë distancë, ose një hark ose rreth të kopjuar koncentrik me një rreze po aq më të madhe ose më të vogël. Pjesët e tjera të të njëjtit ofset mbajnë një lidhje **O** dhe ndjekin përmasën e vetme të Ofsetit. Shih [Spline, shkurtim, ofset dhe mjete të tjera skice](topic:sketch-tools).

Vlerat e përmasave janë milimetra (ose gradë), kurrë negative. Rrezja dhe diametri duhet të jenë më të mëdha se zero. Një vlerë 0 lejohet për distancat: dy pika 0 larg njëra-tjetrës janë bashkë.

## Si sillet zgjidhja

- **Lëvizja më e vogël.** Kur ndryshon një vlerë, zgjidhësi zhvendos gjeometrinë sa më pak që të jetë e mundur. Një vijë gjatësia e së cilës ndryshon rritet në mënyrë të barabartë në të dy skajet nëse asnjë nuk mbahet.
- **Pa përmbysje.** Distancat nga një pikë te një vijë, distancat horizontale dhe vertikale, këndet dhe tangjenca mbajnë mend në cilën anë u bënë. Ndryshimi i një vlere kurrë nuk e përmbys gjeometrinë në anën tjetër.
- **Konfliktet lënë gjërat si janë.** Nëse lidhjet kundërshtojnë njëra-tjetrën, skica mbetet saktësisht si ishte dhe ato në konflikt bëhen të kuqe.
- **Lidhjet e tepërta** (të nënkuptuara nga të tjerat) emërtohen në shiritin e gjendjes ("është tashmë e nënkuptuar. Fshije.") dhe veçoria ndërtohet akoma, me një paralajmërim.
- **Bashkimet tangjente.** Aty ku një hark rrumbullakimi takon vijat e tij në një pikë fundi të përbashkët, tangjenca zgjidhet në një formë që mbetet e përcaktuar mirë aty, kështu rrumbullakimet e skicës nuk lexohen si të mbi-përcaktuara.

## Ende nuk është e disponueshme

Lidhjet kolineare, koradiale dhe të përshkuara; një pikë mbi një spline; përmasat e kontrolluara (referencë); përmasat ordinate dhe të gjatësisë së harkut; ekuacione midis përmasave. Për vijat kolineare përdor Paralele plus një distancë 0.
