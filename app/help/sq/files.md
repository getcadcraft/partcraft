---
title: Skedarët: hap, ruaj dhe eksporto
summary: Skedarët e pjesëve dhe montimeve që PartCraft hap dhe ruan, çdo format eksporti dhe atë që ruan, ku shkojnë skedarët, dhe çfarë ndryshon jashtë linje ose midis shfletuesve.
keywords: hap, ruaj, eksporto, shkarko, skedar, partcraft.json, skedar montimi, stl, 3mf, step, dxf, pdf, ku janë skedarët e mi, jashtë linje, ruaj si
from: e5fbc7e3
---

PartCraft punon me skedarë në kompjuterin tënd. Nuk ngarkon kurrë një pjesë, dhe nuk ka llogari ose hapësirë në re. Ruajtja në re nuk është e disponueshme ende.

## Çfarë hap PartCraft

| Skedari | Zgjerimi | Si |
|---|---|---|
| Një pjesë PartCraft | `.partcraft.json` | {{ui:Hap}}, {{key:Mod+O}}, ose lëshoje mbi pamjen 3D |
| Një montim PartCraft | `.partcraft-asm.json` | Njëlloj: PartCraft e njeh cilin lloj është |
| Një trup STEP | `.step`, `.stp` | Një trup i ngurtë i lexuar si trekëndësha: [Hap një skedar STEP dhe ndërto mbi të](topic:import-step) |

Rrjetat STL, OBJ dhe 3MF hapen gjithashtu si trupa të ngurtë ([Hap një STL, OBJ ose 3MF](topic:open-meshes)), dhe ashtu hapen edhe skedarët `.3dm` ([Hap një model .3dm](topic:open-3dm-files)). DXF, IGES dhe skedarët e pjesëve të programeve të tjera nuk mund të hapen (shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet)).

Rregulla kur hapet:

- Emri i një skedari pjese ose montimi duhet të mbarojë me `.json`, dhe skedari duhet të jetë nën 50 MB.
- Skedarët kontrollohen përpara se të shfaqet ndonjë gjë. Një skedar i dëmtuar ose i modifikuar refuzohet me një arsye të thjeshtë, për shembull "Ky nuk është skedar PartCraft."
- Një skedar i ruajtur nga një PartCraft më i ri refuzohet: "Ky skedar u ruajt nga një PartCraft më i ri (versioni i skedarit 3); ky lexon versionin 2." Skedarët më të vjetër hapen.
- Nëse pjesa në ekran ka ndryshime të pa ruajtura, PartCraft pyet më parë: {{ui:Anulo}}, {{ui:Hidh tej ndryshimet}} ose {{ui:Ruaj më parë}}.

## Ruajtja

{{ui:Ruaj}} ose {{key:Mod+S}} ruan atë që është në ekran:

- Te një pjesë: `<emri i pjesës>.partcraft.json`, historiku i plotë (skicat, lidhjet, përmasat, veçoritë, pozicioni i kthimit), shënimet e prerjes, detajit dhe GD&T të fletës së vizatimit, dhe teksti i plotë i çdo trupi STEP të importuar në një version të mëparshëm. Veçoritë që ky version nuk mund t'i ndërtojë ruhen pa ndryshim. Vetë trupi nuk ruhet; PartCraft e rindërton nga historiku kur hapet skedari.
- Te një montim: `<emri i montimit>.partcraft-asm.json`, me **çdo pjesë brenda tij**. Një skedar mban gjithë montimin, kështu që mund ta dërgosh vetëm.

Ruajtja është një **shkarkim**. Shfletuesi e vendos skedarin në dosjen e shkarkimeve, ose pyet ku ta vendosë nëse e ke vendosur ta pyesë. Ruajtja përsëri krijon një shkarkim të ri; shfletuesi mund ta emërtojë `Part1 (1).partcraft.json` në vend që ta zëvendësojë të vjetrin. Riemërto ose zhvendos skedarët në {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} sipas dëshirës.

Karakteret që nuk janë shkronja, shifra, hapësira, `_`, `.` dhe `-` në emrin e pjesës bëhen `_` në emrin e skedarit.

:::tip
Shumica e shfletuesve kanë një cilësim për të pyetur ku të ruhet çdo shkarkim. Aktivizoje nëse dëshiron një zgjedhje "Ruaj si" çdo herë: në Chrome dhe Edge është te Shkarkimet në cilësimet; në Firefox te Të përgjithshme, Files and Applications; në Safari te Të përgjithshme, File download location.
:::

Më shumë për vendin ku shkojnë shkarkimet dhe si t'i mbash skedarët të sigurt: [Ku shkojnë skedarët e tu](common:your-files).

## Eksportimi

Menyja {{ui:Eksporto}} shkruan formate të tjera. Çdo eksport është një shkarkim, i emërtuar sipas pjesës.

| Zëri i menusë | Skedari | Çfarë përmban |
|---|---|---|
| {{ui:STL, për printim 3D}} | `<emri>.stl` | STL binar i trekëndëshave të trupit, milimetra, **Z lart** |
| {{ui:3MF, për printim 3D}} | `<emri>.3mf` | 3MF me trupin si një objekt të vetëm, milimetra, **Z lart** |
| {{ui:STEP AP242 (trup i saktë i ngurtë)}} | `<emri>.step` | Një trup i saktë, milimetra, Z lart: sipërfaqe të rrumbullakëta si cilindra, konë, sfera dhe torë të vërtetë. STEP që përdoret për programe të tjera CAD dhe CAM |
| {{ui:STEP AP214 (trup i saktë i ngurtë)}} | `<emri>.step` | I njëjti trup i saktë në skemën më të vjetër AP214 |
| {{ui:STEP (me facetë, kernel rrjeti)}} | `<emri>.step` | Një trup i bërë nga sipërfaqe të sheshta nga rrjeti: **sipërfaqet e rrumbullakëta janë shumë facetë të vogla të sheshta**. Milimetra, në boshtet e vetë PartCraft (Y lart). Për një program që refuzon skedarin e saktë |
| {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} | `<emri> - <skica>.dxf` ose `<emri> - face.dxf` | DXF R12. Një skicë: vija, harqe, rrathë dhe pika në koordinatat e vetë skicës, në shtresat PROFILE, CONSTRUCTION dhe POINTS. Një faqe e sheshtë e zgjedhur: konturet e saj si polivijë të mbyllura (skajet e rrumbullakëta si facetat e tyre) |
| {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}} | `<emri> - drawing.pdf` | Fleta e vizatimit A3: tre pamje, izometrike, prerja dhe detaji nëse janë vendosur, përmasat e përgjithshme, simbolet GD&T, blloku i titullit |

:::note
{{ui:STEP AP242 (trup i saktë i ngurtë)}} shkruan vrimat, përforcimet, rrumbullakimet, konet, sferat dhe torët në sipërfaqet e tyre të vërteta, kështu që një program tjetër mund të zgjedhë një vrimë si cilindër; **Kurbat** nuk e ndryshon. Anët spline, filetimet e modeluara dhe rrjetat e importuara nuk kanë sipërfaqe të saktë dhe mbeten facetë të sheshta në të njëjtin trup; shiriti i statusit tregon sa janë. {{ui:STEP (me facetë, kernel rrjeti)}} shkruan çdo sipërfaqe të rrumbullakët si facetë.
:::

- Eksportet janë të pjesës që është në ekran. Eksporti është i fikur në një montim; ende nuk ka eksport montimi.
- STL, 3MF, STEP me facetë dhe DXF i faqes janë gjithmonë të përbërë nga facetë. Cilësimi **Kurbat** (në panelin e djathtë kur nuk është zgjedhur asgjë) përcakton sa të imëta janë, nga 32 deri në 256 facetë për rrotullim. Zgjidh E imët ose Shumë e imët para se të eksportosh STL ose 3MF për një printim të lëmuar.
- Vizatimi PDF përdor fontin e integruar Helvetica të lexuesit. Karakteret që nuk mund t'i shfaqë shtypen si "?".

Hap pas hapi: [Eksportimi për printim, STEP dhe DXF](topic:export-files) dhe [Bëj një fletë vizatimi](topic:drawing-pdf).

## Puna e pa ruajtur

- PartCraft mban një kopje rimëkëmbjeje të pjesës ose montimit të hapur në këtë shfletues pak pas çdo ndryshimi, që një rrëzim ose një skedë e mbyllur të mos e humbasë: herës tjetër që hap PartCraft pyet "Rikthe punën tënde?". Kjo nuk është ruajtje: ruaje në një skedar për ta mbajtur punën tënde. Shih [Rikthe punën e pa ruajtur](common:recover).
- Nëse provon ta mbyllësh skedën ose ta rifreskosh me ndryshime të pa ruajtura, shfletuesi pyet "Leave site?". Ai është kutia e vetë shfletuesit; PartCraft nuk mund ta ndryshojë tekstin e saj.
- {{ui:E re}}, {{ui:Hap}} dhe mbyllja e një montimi pyesin para se të hedhin ndryshimet e pa ruajtura.

## Online dhe jashtë linje

Gjithçka ndodh në kompjuterin tënd: kerneli i rrjetit (një program WebAssembly) shkarkohet bashkë me aplikacionin dhe ndërton gjeometrinë lokalisht, dhe skedarët lexohen dhe shkruhen në diskun tënd. Asnjë të dhënë pjese nuk kalon nëpër rrjet. Shih [Kerneli i rrjetit](topic:solid-kernels).

Për të punuar pa asnjë lidhje, ruaje PartCraft për përdorim jashtë linje ndërsa je online: zgjidh {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit dhe prit ndërsa numëron ("Duke ruajtur 40 nga 212") derisa thotë **Gati jashtë linje**. Kopja e ruajtur përfshin bibliotekën 3D dhe kernelin e rrjetit, kështu që më pas modelimi, ruajtja, çdo eksport dhe vizatimet funksionojnë të gjitha jashtë linje. Nëse thotë **Nuk u ruajt**, kliko për ta provuar përsëri ndërsa je online; **Nuk ofrohet jashtë linje** do të thotë që kjo dritare shfletuesi nuk mund të mbajë një kopje (dritaret private dhe disa kompjuterë të menaxhuar). Me kopjen e ruajtur, kur kliko **Gati jashtë linje** ofrohen {{ui:Ruaje përsëri (merr versionin më të ri)}} dhe {{ui:Hiq kopjen jashtë linje}}. Detajet: [Puna jashtë linje](common:offline).

:::online
Je online. Edhe pa ruajtur për përdorim jashtë linje, pasi PartCraft është ngarkuar dhe çipi i shiritit të statusit thotë "Kerneli i rrjetit", mund të vazhdosh punën nëse lidhja pritet. Thjesht mos e rifresko faqen derisa të kthehesh online.
:::

:::offline
Je jashtë linje. Nëse PartCraft është hapur tashmë, vazhdo punën; ruajtja dhe eksportimi funksionojnë ende. Nëse shiriti i aplikacionit thotë **Gati jashtë linje**, PartCraft hapet edhe nga zero pa lidhje; ndryshe mos e rifresko këtë skedë.
:::

## Ndryshime midis shfletuesve

- **Shkarkimet.** Çdo shfletues ka dosjen e vet të shkarkimeve dhe mënyrën e vet të pyetjes. Nëse një shfletues pyet nëse kjo faqe lejohet të shkarkojë skedarë, lejoje, ose ruajtja dhe eksportimi nuk mund të funksionojnë.
- **Tërhiqe dhe lësho** një skedar mbi pamjen funksionon në Chrome, Edge, Firefox dhe Safari.
- **Skedarët nga një telefon ose tablet.** Në iPhone dhe iPad, Hap shfaq aplikacionin Files; skedarët e ruajtur shkojnë te Files, Downloads. Në Android shkojnë në dosjen Downloads.

Nuk ka dallim në atë që përmbajnë skedarët midis shfletuesve ose sistemeve operative.
