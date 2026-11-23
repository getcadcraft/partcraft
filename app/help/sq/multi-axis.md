---
title: Makinimi me 4 dhe 5 boshte
summary: Thuaj PartCraft cilët boshte rrotullues ka makina, pjerr veglën për çdo operacion të zakonshëm, përfundo një sipërfaqe me një freza me top që pjerret ndërsa pret, ose rrotullo pjesën nën vegël në një bosht të 4-t. Çfarë shkruhet në G-code, dhe çfarë nuk është vërtetuar.
keywords: 5 boshte, pesë boshte, 4 boshte, boshti i katërt, shumë boshte, multiaxis, 3+2, indeksuar, pozicional, pjerrje, vegël e pjerrët, rrotullues, trunnion, tavolinë, kokë, boshti A, boshti B, boshti C, TCP, RTCP, pika qendrore e veglës, G43.4, koha e kundërt, G93, kinematikë, pivot, swarf, kënd prirjeje
from: c4f1c491
---

Prodhimi mund ta mbajë veglën në një kënd, dhe mund të lëvizë boshtet rrotulluese ndërsa pret. Tre gjëra e bëjnë këtë, nga më e thjeshta te më e avancuara.

**Asgjë këtu nuk është ekzekutuar në një makinë.** Shtigjet janë kontrolluar me gjeometrinë nga testet dhe G-code lexohet përsëri, por postprocesorët e integruar ndjekin kodet e dokumentuara të kontrolleve, jo ndonjë makinë që kemi përpara. Vërteto një program në simulatorin e kontrollit tënd dhe në ajër përpara se të takojë metalin.

## Boshtet rrotulluese të makinës

Te skeda **Konfigurimi**, {{ui:Boshtet rrotulluese}} thotë çfarë ka makina:

| Zgjedhja | Makina |
|---|---|
| Asnjë (3 boshte) | Një frezë e thjeshtë. Çdo operacion që kërkon veglën të pjerrët jep paralajmërim, dhe postprocesori refuzon ta shkruajë. |
| A (rrotullohet rreth X) | Një bosht rrotullues përgjatë X: një tavolinë e boshtit të 4-t ose indeksues. Vegla mund të pjerret vetëm në planin Y–Z. |
| B (rrotullohet rreth Y) | Një bosht rrotullues përgjatë Y. Vegla mund të pjerret vetëm në planin X–Z. |
| A dhe C | Një bosht pjerrëtës rreth X i mbajtur nga, ose që mban, një rrotullim rreth Z: një tavolinë trunnion, ose një kokë. |
| B dhe C | Njëlloj me pjerrjen rreth Y. |

Pastaj:

- **Mbajtur nga**: {{ui:Tavolina (pjesa rrotullohet)}} ose {{ui:Koka (vegla rrotullohet)}}. Një tavolinë rrotullohet në drejtimin e kundërt për të sjellë të njëjtën faqe nën vegël, kështu që shenja e çdo këndi varet nga kjo.
- **Kontrolli e mban pikën e majës së veglës në shteg (TCP)**: kur është i ndezur, X Y Z në program janë maja e veglës në koordinatat e vetë pjesës dhe kontrolli bën pjesën tjetër (postprocesorët stil Fanuc dhe LinuxCNC të integruar shkruajnë `G43.4` për gjatësinë e veglës). Kur është i fikur, në një makinë me tavolinë, PartCraft shkruan X Y Z ndërsa tavolina e rrotulluar e mban pjesën, rreth **qendrës rrotulluese** që jep (në koordinatat e punës; 0, 0, 0 kur origjina e punës është në qendër). Një makinë me kokë ka nevojë që TCP të jetë i ndezur: pa të, programi do të duhej gjatësia e pivotit të makinës, të cilën PartCraft nuk e njeh.
- **Kufiri i pjerrjes**: sa larg shkon boshti pjerrës.

Makinat ndryshojnë në atë që konsiderojnë pozitive. Nëse një bosht rrotullohet në drejtimin e gabuar në tënden, ndrysho shenjën në një kopje të postprocesorit ([Postprocesorët që mund t'i redaktosh](topic:post-processors)).

## Një vegël e pjerrët për një operacion të zakonshëm

Çdo operacion frezimi (faqe, xhep, adaptiv, kontur, shpuarje, qoshim, paralele, scallop, trashje 3D, mbetje) ka një **Pjerrja e veglës** dhe **Pjerr drejt**: drejtimin e veglës vetëm për atë operacion, të matur nga boshti i veglës së konfigurimit. Kjo është makinim 3+2: boshtet rrotulluese shkojnë në një pozicion dhe qëndrojnë aty ndërsa tre boshte presin.

- Shkruaj dy këndet, ose shtyp {{ui:Vegla pingul me një sipërfaqe}} dhe kliko një faqe të sheshtë: vegla do të tregojë drejt saj.
- Zgjidh faqet dhe skajet e operacionit si zakonisht. Çfarë numërohet si dysheme ose vrimë vlerësohet përgjatë veglës së pjerrët.
- Blloku për atë drejtim është kutia që mban materialin e tornuar, kështu që lartësitë dhe hapësirat janë të sigurta nga ai anë.

Në G-code, përpara operacionit vegla ngrihet, boshtet rrotulluese rrotullohen, dhe vegla zbret mbi pikën e saj të parë. Në një makinë me tavolinë pa TCP, harqet mbeten harqe dhe ciklet e shpuarjes mbeten cikle (kornizës së shkruar i rrotullohet vetëm rreth Z). Me TCP në një plan të pjerrët, harqet bëhen vija të shkurtra dhe ciklet lëvizjet që përfaqësojnë.

Simulimi i materialit e ekzekuton një drejtim të pjerrët **veçmas**: tregon çfarë pret ai operacion nga i gjithë materiali i parë nga ana e tij, dhe gjen gërvishtje aty, por prerjet e bëra nga drejtime të tjera nuk bartën.

## Përfundimi 5 boshte

{{ui:Më shumë}} në shiritin e Prodhimit lista këtë operacion dhe tjetrin në krye të skedës **Operacionet**.

{{ui:5 boshte}} është [kalimi paralel i përfundimit](topic:finish-3d) me një **freza me top që pjerret ndërsa shkon**. Një top pret me një sferë, dhe sfera është e njëjtë në çdo drejtim që pjerret vegla rreth qendrës së saj, kështu që topi ndjek saktësisht shtegun që do të japë kalimi me 3 boshte dhe vetëm drejtimi i veglës ndryshon:

- **Drejt sipërfaqes**: 1 = pingul me sipërfaqen, 0 = vertikalisht, çdo vlerë midis tyre.
- **Pjerr përpara**: gradë përgjatë drejtimit të prerjes, që qendra e palëvizshme e topit të mos jetë ajo që pret.
- **Pjerrja më e madhe**: vegla nuk pjerret kurrë më tej nga boshti i konfigurimit se kjo.

Aty ku bishti do të preket me modelin, pjerrja hiqet mbrapsht derisa të lirohet, dhe operacioni thotë në sa pika ndodh. Çdo kalim hyhet dhe lihet me një ngritje të drejtë.

## Përfundimi rrotullues (boshti i 4-t)

{{ui:Rrotullues}} është për një pjesë e mbajtur përgjatë **X të punës** në një bosht rrotullues. Pjesa rrotullohet dhe një freza me top, gjithmonë e drejtuar nga boshti, ndjek sipërfaqen e saj:

- **Kalimet**: {{ui:Përgjatë boshtit}} (vija përgjatë X, një hap anësor rrotullimi larg njëra-tjetrës) ose {{ui:Rreth pjesës}} (unaza, një hap anësor X larg njëra-tjetrës).
- **Boshti te Y / Z**: ku është boshti. Bosh do të thotë mesi i materialit. Në një makinë me tavolinë pa TCP kjo duhet të jetë qendra rrotulluese në Konfigurim; operacioni paralajmëron kur nuk është.
- **Nga / Deri X** dhe **Nga / Deri kënd**: pjesa e gjatësisë dhe e rrotullimit për t'u prerë.

Lartësia e topit mbi boshtin në çdo pikë është rënia e saktë e një sfere mbi rrjetin e pjesës, nga ai anë.

## Kufijtë

- Përfundimi 5 boshte dhe ai rrotullues pranon vetëm një **freza me top**. Nuk ka prerje me anën e veglës (ana e veglës në një mur të drejtë), nuk ka vija rrjedhëse përgjatë drejtimeve të vetë sipërfaqes, nuk ka trashje me shumë boshte dhe nuk ka zgjedhje automatike të pjerrjes për të shmangur përplasjen.
- Shtigjet 5 boshte dhe rrotulluese **nuk kalojnë** nëpër simulimin e materialit, i cili është një hartë lartësish dhe nuk mund të mbajë një prerje të pjerrët.
- Bishti kontrollohet te përfundimi 5 boshte kundrejt modelit të shikuar nga lart; mbajtësi, boshti dhe vetë makina nuk kontrollohen askund.
- Përfundimi rrotullues pret vetëm atë që vegla mund ta shohë duke parë boshtin.
- Përfundimi 5 boshte duhet një minutë ose më shumë për t'u llogaritur në një pjesë të madhe: bishti kontrollohet në çdo pikë të çdo kalimi.
- Kur boshtet rrotulluese lëvizin bashkë me ata linearë dhe TCP është i fikur, postprocesorët e integruar shkruajnë avancimin si kohë e kundërt (`G93`), pastaj kthehen në `G94`.
- Nuk shkruhet asnjë kod plani pune i pjerrët (`G68.2` dhe të ngjashme), dhe nuk njihen kufij specifikë të makinës, shpalosje ose zona përplasjeje.
