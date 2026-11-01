---
title: Skedarët: hapja, ruajtja dhe eksportimi
summary: Skedarët e pjesëve dhe montimeve që PartCraft i hap dhe i ruan, çdo format eksporti dhe ç'mban ai, ku shkojnë skedarët, dhe çfarë ndryshon jashtë linje ose midis shfletuesve.
keywords: hap, ruaj, eksporto, shkarko, skedar, partcraft.json, skedar montimi, stl, 3mf, step, dxf, pdf, ku janë skedarët e mi, jashtë linje, ruaj si
from: c15c2c48
---

PartCraft punon me skedarë në kompjuterin tuaj. Nuk ngarkon kurrë një pjesë, dhe nuk përfshihet asnjë llogari ose hapësirë ruajtjeje në re. Ruajtja në re nuk është e disponueshme ende.

## Çfarë hap PartCraft

| Skedari | Zgjatimi | Si |
|---|---|---|
| Një pjesë PartCraft | `.partcraft.json` | {{ui:Hap}}, {{key:Mod+O}}, ose lëshoje mbi pamjen 3D |
| Një montim PartCraft | `.partcraft-asm.json` | Njësoj: PartCraft e dallon se cili lloj është |
| Një trup i ngurtë STEP | `.step`, `.stp` | Një trup i ngurtë i lexuar si trekëndësha: [Hap një skedar STEP dhe ndërto mbi të](topic:import-step) |

Skedarët STL, OBJ dhe 3MF hapen gjithashtu si trupa të ngurtë ([Hap një STL, OBJ ose 3MF](topic:open-meshes)), dhe po kështu skedarët `.3dm` ([Hap një model .3dm](topic:open-3dm-files)). Skedarët DXF, IGES dhe skedarët e pjesëve të programeve të tjera nuk mund të hapen (shih [Ç'nuk është ndërtuar ende](topic:not-built-yet)).

Rregulla kur hapni:

- Emri i një skedari pjese ose montimi duhet të mbarojë me `.json`, dhe skedari duhet të jetë nën 50 MB.
- Skedarët kontrollohen para se të shfaqet ndonjë gjë. Një skedar i dëmtuar ose i ndryshuar refuzohet me një arsye të thjeshtë, për shembull "Ky nuk është skedar PartCraft."
- Një skedar i ruajtur nga një PartCraft më i ri refuzohet: "Ky skedar u ruajt nga një PartCraft më i ri (versioni i skedarit 3); ky lexon versionin 2." Skedarët më të vjetër hapen.
- Nëse pjesa në ekran ka ndryshime të pa ruajtura, PartCraft pyet së pari: {{ui:Anulo}}, {{ui:Hidh tej ndryshimet}} ose {{ui:Ruaj më parë}}.

## Ruajtja

{{ui:Ruaj}} ose {{key:Mod+S}} ruan atë që është në ekran:

- Te një pjesë: `<emri i pjesës>.partcraft.json`, me historinë e plotë (skicat, lidhjet, përmasat, veçoritë, pozicioni i kthimit), seksionin, detajet dhe shënimet GD&T të fletës së vizatimit, dhe tekstin e plotë të çdo trupi të ngurtë STEP të importuar në një version më të hershëm. Veçoritë që ky version nuk mund t'i ndërtojë ruhen të pandryshuara. Vetë trupi i ngurtë nuk ruhet; PartCraft e rindërton nga historia kur hapet skedari.
- Te një montim: `<emri i montimit>.partcraft-asm.json`, me **çdo pjesë brenda tij**. Një skedar mban të gjithë montimin, kështu që mund ta dërgoni vetëm.

Ruajtja është një **shkarkim**. Shfletuesi e vendos skedarin në dosjen e tij të shkarkimeve, ose pyet se ku ta vendosë nëse e keni caktuar ta bëjë këtë. Ruajtja përsëri krijon një shkarkim të ri; shfletuesi mund ta emërtojë `Part1 (1).partcraft.json` në vend që ta zëvendësojë të vjetrin. Riemërtoni ose zhvendosni skedarët në {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} sipas dëshirës.

Karakteret përveç shkronjave, shifrave, hapësirave, `_`, `.` dhe `-` në emrin e pjesës bëhen `_` në emrin e skedarit.

:::tip
Shumica e shfletuesve kanë një cilësim që pyet se ku të ruhet çdo shkarkim. Aktivizojeni nëse dëshironi një zgjedhje "Ruaj si" çdo herë: në Chrome dhe Edge është nën Downloads te cilësimet; në Firefox nën General, Files and Applications; në Safari nën General, File download location.
:::

Më shumë për vendet ku shkojnë shkarkimet dhe si t'i mbani skedarët të sigurt: [Ku shkojnë skedarët tuaj](common:your-files).

## Eksportimi

Menuja {{ui:Eksporto}} shkruan formate të tjera. Secili është një shkarkim, i emërtuar sipas pjesës.

| Artikulli i menusë | Skedari | Ç'mban |
|---|---|---|
| {{ui:STL, për printim 3D}} | `<name>.stl` | STL binar i trekëndëshave të trupit të ngurtë, në milimetra, **Z lart** |
| {{ui:3MF, për printim 3D}} | `<name>.3mf` | 3MF me trupin e ngurtë si një objekt, në milimetra, **Z lart** |
| {{ui:STEP AP242 (trup i saktë i ngurtë)}} | `<name>.step` | Nuk është ndërtuar ende në këtë version (i zbehur): i nevojitet një kernel i saktë |
| {{ui:STEP AP214 (trup i saktë i ngurtë)}} | `<name>.step` | Nuk është ndërtuar ende në këtë version (i zbehur) |
| {{ui:STEP (me facetë, kernel rrjeti)}} | `<name>.step` | Një trup i ngurtë i bërë nga faqe të sheshta nga rrjeti: **sipërfaqet e rrumbullakëta janë shumë facetë të vogla të sheshta**. Në milimetra, në boshtet e vetë PartCraft (Y lart). STEP që duhet përdorur për programe të tjera CAD në këtë version |
| {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} | `<name> - <sketch>.dxf` ose `<name> - face.dxf` | DXF R12. Një skicë: vija, harqe, rrathë dhe pika në koordinatat e vetë skicës, në shtresat PROFILE, CONSTRUCTION dhe POINTS. Një faqe e sheshtë e zgjedhur: konturet e saj si polivijë të mbyllura (brinjët e rrumbullakëta si facetat e tyre) |
| {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}} | `<name> - drawing.pdf` | Fleta e vizatimit A3: tri pamje, izometrike, prerja dhe detaji nëse janë vendosur, përmasat e përgjithshme, simbolet GD&T, blloku i titullit |

:::note
{{ui:STEP AP242 (trup i saktë i ngurtë)}} dhe {{ui:STEP AP214 (trup i saktë i ngurtë)}} nuk janë ndërtuar ende në këtë version: përdorni {{ui:STEP (me facetë, kernel rrjeti)}}. Ai ka formën dhe vëllimin e duhur, por çdo sipërfaqe e rrumbullakët është shumë facetë të sheshta, kështu që programet e tjera nuk mund të zgjedhin një vrimë si cilindër. Vendosni më parë **Kurbat** më të hollë nëse kjo ka rëndësi.
:::

- Eksportet janë të pjesës që është në ekran. Eksportimi është i fikur në një montim; nuk ka ende eksport montimi.
- STL, 3MF, STEP me facetë dhe DXF i faqes janë gjithmonë të bëra nga facetë. Cilësimi **Kurbat** (në panelin e djathtë kur nuk është zgjedhur asgjë) cakton sa të hollë janë, nga 32 deri në 256 facetë për rreth. Zgjidhni I hollë ose Shumë i hollë përpara se të eksportoni STL ose 3MF për një printim të lëmuar.
- Vizatimi PDF përdor fontin e integruar Helvetica të lexuesit. Karakteret që nuk mund t'i shfaqë shtypen si "?".

Hap pas hapi: [Eksporto për printim, STEP dhe DXF](topic:export-files) dhe [Bëj një fletë vizatimi](topic:drawing-pdf).

## Punë e pa ruajtur

- PartCraft mban një kopje rimëkëmbjeje të pjesës ose montimit të hapur në këtë shfletues pak pas çdo ndryshimi, kështu që një përplasje ose një skedë e mbyllur nuk e humb punën: herën tjetër që hapni PartCraft pyet "Rikthej punën tuaj?". Kjo nuk është ruajtje: ruajeni në një skedar për ta mbajtur punën. Shih [Rikthe punën e pa ruajtur](common:recover).
- Nëse provoni të mbyllni skedën ose ta rifreskoni me ndryshime të pa ruajtura, shfletuesi pyet "Të largohem nga faqja?". Ajo është kutia e vetë shfletuesit; PartCraft nuk mund ta ndryshojë tekstin e saj.
- {{ui:E re}}, {{ui:Hap}} dhe mbyllja e një montimi pyesin para se të hedhin tej ndryshimet e pa ruajtura.

## Në linjë dhe jashtë linje

Gjithçka ndodh në kompjuterin tuaj: kerneli i rrjetës (një program WebAssembly) shkarkohet me aplikacionin dhe ndërton gjeometrinë lokalisht, dhe skedarët lexohen dhe shkruhen nga disku juaj. Asnjë e dhënë pjese nuk kalon nëpër rrjet. Shih [Kerneli i rrjetës](topic:solid-kernels).

Për të punuar pa asnjë lidhje, ruajeni PartCraft për përdorim jashtë linje ndërkohë që jeni në linjë: zgjidhni {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit dhe prisni derisa të numërojë ("Duke ruajtur 40 nga 212") deri sa të thotë **Gati jashtë linje**. Kopja e ruajtur përfshin bibliotekën 3D dhe kernelin e rrjetës, kështu që më pas modelimi, ruajtja, çdo eksport dhe vizatimet funksionojnë të gjitha jashtë linje. Nëse thotë **Nuk u ruajt**, klikojeni për ta provuar përsëri ndërkohë që jeni në linjë; **Jashtë linje nuk është e disponueshme** do të thotë se kjo dritare shfletuesi nuk mund të mbajë një kopje (dritaret private dhe disa kompjuterë të menaxhuar). Me kopjen e ruajtur, klikimi në **Gati jashtë linje** ofron {{ui:Ruaje përsëri (merr versionin më të ri)}} dhe {{ui:Hiq kopjen jashtë linje}}. Detaje: [Puna jashtë linje](common:offline).

:::online
Jeni në linjë. Edhe pa e ruajtur për përdorim jashtë linje, pasi PartCraft të jetë ngarkuar dhe çipi i shiritit të statusit të thotë "Mesh kernel", mund të vazhdoni punën nëse lidhja ndërpritet. Mos e rifreskoni faqen derisa të jeni sërish në linjë.
:::

:::offline
Jeni jashtë linje. Nëse PartCraft është tashmë i hapur, vazhdoni punën; ruajtja dhe eksportimi funksionojnë ende. Nëse shiriti i aplikacionit thotë **Gati jashtë linje**, PartCraft hapet edhe nga e para pa lidhje; përndryshe mos e rifreskoni këtë skedë.
:::

## Dallimet midis shfletuesve

- **Shkarkimet.** Çdo shfletues ka dosjen e vet të shkarkimeve dhe mënyrën e vet të pyetjes. Nëse një shfletues pyet nëse kjo faqe lejohet të shkarkojë skedarë, lejojeni, përndryshe ruajtja dhe eksportimi nuk mund të funksionojnë.
- **Zvarritja dhe lëshimi** i një skedari mbi pamje funksionon në Chrome, Edge, Firefox dhe Safari.
- **Skedarët nga telefoni ose tableti.** Në iPhone dhe iPad, Hap shfaq aplikacionin Files; skedarët e ruajtur shkojnë te Files, Downloads. Në Android shkojnë në dosjen Downloads.

Nuk ka asnjë dallim në atë që përmbajnë skedarët midis shfletuesve ose sistemeve operative.
