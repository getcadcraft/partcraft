---
title: Bëj shtigjet e veglës dhe G-code (Prodhimi)
summary: Cakto bllokun e materialit dhe një origjinë pune, zgjidh veglat, shto operacione faqeje, xhepi, konture, shpuarjeje dhe qoshimi duke zgjedhur faqe, përfundo gjithë modelin në 3D (paralele, scallop), simulo bllokun kundrejt modelit për gërvishtje dhe kohë cikli, dhe shkarko G-code nga një nga tre postprocesorët e integruar ose një që redakton vetë.
keywords: step i saktë, step për punëtorinë, koordinatat e punës, dorëzim CAM, paralele, scallop, përfundim 3D, përfundim, hundë sferike, bibliotekë veglash, redakto postprocesorin, postprocesor i personalizuar, redaktori i postprocesorit, adaptiv, pastrim adaptiv, angazhim konstant, trokoidal, hsm, prerje me shpejtësi të lartë, prodhim, CAM, shteg i veglës, G-code, NC, CNC, freza, frezim, xhep, kontur, profil, sipërfaqësim, shpuarje, zhytje me hapa, G83, G81, G73, qoshim, material, zhvendosje pune, G54, postprocesor, GRBL, LinuxCNC, avancime dhe shpejtësi, simulim, gërvishtje, koha e ciklit
from: f8a03be8
---

Hapësira e Prodhimit e kthen pjesën në shtigje veglash dhe i shkruan si G-code. Shumica e operacioneve janë frezim **2,5 boshte**: vegla mbetet vertikale, muret priten drejt poshtë dhe dyshemetë janë të sheshta. **Trashja 3D** dhe **Mbetja** pastrojnë pjesët e lakuara në 3D ([Trashja 3D dhe makinimi i mbetjes](topic:rough-3d)); **Paralele** dhe **Scallop** i përfundojnë ([Përfundimi 3D](topic:finish-3d)). Në një makinë me boshte rrotulluese çdo operacion mund të ketë një vegël të pjerrët, dhe dy operacione lëvizin boshtet rrotulluese gjatë prerjes ([Makinimi me 4 dhe 5 boshte](topic:multi-axis)). Ka operacione për torno ([Tornimi](topic:turning)) dhe për një sondë prekëse ([Sondimi](topic:probing)). Punon mbi sipërfaqet e emërtuara që kerneli i rrjetit i jep pjesës (shih [Kerneli i rrjetit](topic:solid-kernels)).

Version laboratorik: kontrollo çdo program në simulatorin e vetë kontrollit tënd dhe ekzekuto fillimisht në ajër, mbi materialin.

## Konfigurimi

1. Zgjidh **Prodhimi** te ndërruesi i hapësirës së punës, pastaj {{ui:Konfigurim i ri}}.
2. Te skeda **Konfigurimi** zgjidh:
   - **Boshti i veglës (+Z)**: nga cila anë vegla hyn në pjesë. +Y botërore (lart i PartCraft) është parazgjedhja; X i makinës është atëherë X botërore dhe Y i makinës është −Z botërore.
   - **Origjina e punës (G54)**: një cep ose qendër e materialit, lart ose poshtë, qendra lart e modelit, ose origjina e modelit.
   - **Blloku i materialit**: një kuti ose cilindër, ose modeli plus shtesat (anët, lart, poshtë), ose një madhësi fikse.
   - **Materiali** (cakton avancimet dhe shpejtësitë fillestare), **postprocesori** (kontrolli), shpejtësia maksimale e boshtit të makinës, shpejtësia e lëvizjes së shpejtë, koha e ndërrimit të veglës, lëngu i ftohjes dhe numri i programit.

## Veglat

Skeda **Veglat** mban bibliotekën: frezat e sheshta, me top dhe të rrumbullakëta, burgjitë, frezat e qoshimit dhe frezat e sipërfaqes, secila me një numër T, diametër, brinjë dhe gjatësi brinjësh (plus rreze qoshe, kënd maje ose qoshimi aty ku zbatohen).

Veglat e mia mund të ruhen në shfletues dhe të zhvendosen midis kompjuterave si skedar: shih [Biblioteka e veglave](topic:tool-library).

Shpejtësia e boshtit dhe avancimi vijnë nga materiali: n = 1000 × shpejtësia e prerjes / (π × diametri), avancimi = n × brinjë × ngarkesa e çipit (burgji: n × avancimi për rrotullim). Vlerat janë pika nisjeje të kujdesshme nga intervalet e publikuara, jo të akorduara për makinën tënde; shkruaj shpejtësinë e prerjes, ngarkesën e çipit, rpm ose avancimin e prodhuesit të veglës për t'i mbivendosur. Kur shpejtësia kalon maksimumin e makinës, mbahet aty dhe avancimi ndjek, duke ruajtur ngarkesën e çipit.

## Shto operacione

Çdo buton i shiritit të veglave shton një operacion dhe, aty ku ai kërkon gjeometri, fillon përzgjedhjen: kliko faqet ose skajet në pamje (kliko përsëri për të hequr një të tillë), pastaj {{ui:Përfundo përzgjedhjen}} ose {{key:Esc}}.

| Operacioni | Përzgjedhja | Çfarë bën |
|---|---|---|
| {{ui:Faqe}} | asgjë | Kalime në zig-zag mbi gjithë materialin, përtej skajeve të tij, deri lart te maja e modelit |
| {{ui:Xhep}} | një faqe e sheshtë dyshemeje, një vrimë e rrumbullakët, ose një zinxhir i mbyllur skajesh | Pastron zonën me kalime ofseti nga brenda nga jashtë, në çdo hap zbritjeje; ishujt (faqet që ngrihen brenda dyshemesë) lihen; një dysheme e hapur nga të gjitha anët (asgjë më e lartë jashtë saj) pastrohet deri te skaji i materialit |
| {{ui:Adaptiv}} | e njëjta si Xhep | Pastron të njëjtën zonë me kalime që presin secila një gjerësi të caktuar (**Angazhimi**, një pjesë e diametrit), kështu që freza nuk merr kurrë një çarje me gjerësi të plotë, madje as në qoshe; hyn me një spirale dhe përfundon muret në çdo nivel. Prerjet e holla lejojnë një hap zbritjeje më të thellë dhe një avancim më të lartë |
| {{ui:Izoipsë}} | një faqe e sheshtë (kontura e saj), një faqe e rrumbullakët, ose skaje | Ndjek konturin e ofsetuar me rrezen e veglës, jashtë ose brenda, me harqe hyrjeje dhe daljeje dhe lidhëse opsionale |
| {{ui:Shpuarje}} | vrima (kliko murin ose buzën e një vrime) | Shpon çdo vrimë me një cikël të fiksuar: zhytje me hapa (G83), shpuarje (G81) ose thyerje çipi (G73); ose jep një diametër për të shpuar çdo vrimë të atij madhësie |
| {{ui:Qoshim}} | kontura ose skajet e një faqeje | Ecën një freza qoshimi përgjatë skajit në mënyrë që të presë gjerësinë që cakton |
| {{ui:Paralele}} | asgjë (gjithë modeli) | Përfundim 3D në vija paralele me çdo kënd, duke ndjekur sipërfaqen me një freza me top, të rrumbullakët ose të sheshtë. Shih [Përfundimi 3D](topic:finish-3d) |
| {{ui:Scallop}} | asgjë (gjithë modeli) | Përfundim 3D në kalime që janë larg njëri-tjetrit me një distancë të caktuar mbi sipërfaqe, kështu që kreshta midis tyre ka lartësinë që kërkon |

Zgjidh një operacion në listë për të ndryshuar veglën, lartësitë (heqjen, tërheqjen, lartësinë e avancimit, majën, fundin), hapin e zbritjes, hapin anësor, materialin për t'u lënë, kalimin e përfundimit, hyrjen (spirale, rampë ose zhytje), frezimin ngjitës, lidhëset ose ciklin. {{ui:Lart}} dhe {{ui:Poshtë}} rirenditin, {{ui:Pezullo}} e lë jashtë, {{ui:Fshi}} e heq. Gjithçka është në historikun e zhbërjes dhe ruhet në skedarin e pjesës.

Hapi anësor i një xhepi është më së shumti gjysma e diametrit të veglës, kështu që çdo pikë e dyshemesë së tij është brenda një rreze vegle nga një kalim. Qoshet e brendshme e mbajnë rrezen e veglës.

**Pastrimi adaptiv** e mban angazhimin e frezës afër një vlere. Një angazhim 0,15 i diametrit është një kënd angazhimi prej rreth 46°: harku i skajit të frezës në material. Një xhep me ofset, në krahasim, pret gjerësi të plotë në kalimin e parë dhe rrotullohet më tej në çdo qoshe të brendshme. Midis kalimeve vegla mbetet poshtë aty ku lëviz nëpër ajër të prerë, dhe ngrihet e zbret aty ku lëviz në ajër të pa prerë. Kalimet llogariten në një rrjet të imët mbi zonën (qelizat rreth një të dymbëdhjetën e rrezes së veglës), kështu që angazhimi mund të kalojë deri në rreth një qelizë më gjerë se ç'u vendos; muret përfundohen saktë. Një zonë e madhe e hapur bën një program të gjatë me shumë lëvizje të shkurtra.

## Simulo

Shtigjet e veglës rillogariten pas çdo ndryshimi (edhe ai i pjesës). {{ui:Simulo}} gjithashtu shfaq materialin e mbetur pas gjithë programit. Paneli tregon:

- **Koha e ciklit**: lëvizjet me avancim me avancimin e tyre, lëvizjet e shpejta si vija të drejta me shpejtësinë e lëvizjes së shpejtë të konfigurimit, plus koha e ndërrimit të veglës. Makinat e vërteta përshpejtohen, kështu që marrin më shumë kohë.
- **Gërvishtje**: vende ku vegla shkoi më shumë se 0,02 mm poshtë sipërfaqes së pjesës. Shenjat e kuqe i tregojnë ato në pamje.
- **Material i mbetur në pjesë**.

Materiali është një hartë lartësish nga lart (një hartë Z), kështu që nuk mund të tregojë nën-prerje. Tërhiq **Riprodhimi** për të lëvizur veglën përgjatë programit. Në pamje, lëvizjet me avancim janë të plota dhe ato të shpejta me viza, me një ngjyrë për operacion.

Me **Shfaq bllokun e simuluar** të ndezur, materiali ngjyroset krahas modelit, qelizë pas qelizë: **jeshile** aty ku është mbi modelin (brenda 0,02 mm), **e kuqe** aty ku vegla preu në model, dhe aty ku mbetet material mbi model **e verdhë** për një lëkurë të hollë, **portokalli** për më shumë, duke zbehur në **gri** të materialit të pa prerë në 1 mm ose më shumë. Ngjyrat rillogariten me çdo ndryshim, nga e njëjta hartë lartësish si numrat në panel, kështu që jeshilja dhe e kuqja përputhen me rreshtin Gërvishtje. Një qoshim pret në model me qëllim dhe shfaq të kuqe përgjatë skajit të tij.

## Postimi i G-code

Zgjidh kontrollin nën **Postprocesori** dhe shtyp {{ui:Shkarko G-code}} (ose {{ui:Postprocesori}} në shirit):

| Kontrolli | Skedari | Shënime |
|---|---|---|
| ISO stil Fanuc | .nc | %, numër O, numra rreshtash, T M6 me G43 H, cikle të fiksuara |
| GRBL | .nc | Pa ndërrues veglash dhe pa cikle të fiksuara: një ndërrim veglash ndalon me M0, shpuarja shkruhet si lëvizje të thjeshta |
| LinuxCNC | .ngc | T M6 me G43 H, cikle të fiksuara, M2 |
| Torno stil Fanuc | .nc | Për programe tornimi: X si diametër, avancim për rrotullim, G96 nën një kufi G50, filetim G32 |
| Torno LinuxCNC | .ngc | Për programe tornimi: diametra G7, G95, G96, filetim G33; nuk shkruan lëvizje referimi |
| Yti | çdo | Një postprocesor që ke shkruar ose ndryshuar: {{ui:Redakto postprocesorin…}}, {{ui:Postprocesor i ri…}}, {{ui:Importo skedarin e postprocesorit…}} |

Çdo skedar fillon me komente për programin, materialin, zhvendosjen e punës dhe veglat. Koordinatat janë në milimetra me 3 decimale. {{ui:CSV i shtigjeve}} dhe {{ui:JSON i shtigjeve}} eksportojnë vetë lëvizjet.

**Kontrollo daljen në simulatorin e makinës tënde para prerjes, dhe ekzekuto fillimisht në ajër, mbi materialin.** Tre postprocesorët e integruar janë pika nisjeje që ndjekin sjelljen e dokumentuar të kontrolleve; nuk janë vërtetuar në asnjë makinë të caktuar. Një postprocesor që ndryshon është yti për ta vërtetuar. Si ta shkruash: [Postprocesorët](topic:post-processors).

## STEP i saktë për punëtorinë

Nën butonat G-code te skeda **Operacionet**, {{ui:STEP i saktë (koordinatat e punës)}} shkarkon `<part>-work.step`: pjesën si trup të saktë (cilindra të vërtetë për vrimat dhe bosat, rrethe të vërtetë për skajet e tyre) me origjinën e saj në origjinën e punës të këtij konfigurimi dhe Z sipas boshtit të veglës. Këto janë koordinatat që përdor G-code, kështu që programi CAM ose kontrolluesi i punëtorisë e vendos modelin në vend me programin pa e zhvendosur. Skedari përmban vetëm pjesën, jo materialin ose shtigjet.

{{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} shkruan të njëjtin trup në pozicionin e vet të pjesës (Z lart): shih [Eksporto për printim, STEP dhe DXF](topic:export-files#for-other-cad-programs-step).

## Kufizimet

- Xhepet, konturet, shpuarja dhe qoshimet janë 2,5 boshte. Pjesët e lakuara trashen dhe përfundohen në 3D nga operacionet e veta ([Trashja 3D dhe makinimi i mbetjes](topic:rough-3d), [Përfundimi 3D](topic:finish-3d)). Pastrimi adaptiv është 2D (dyshemetë të sheshta).
- Veglat e pjerrëta, përfundimi me 5 dhe me 4 boshte, tornimi dhe sondimi ekzistojnë, secili me kufizimet e veta, dhe **asnjëri prej tyre nuk është ekzekutuar në një makinë**: shih [Makinimi me 4 dhe 5 boshte](topic:multi-axis), [Tornimi](topic:turning) dhe [Sondimi](topic:probing).
- Mbajtësit dhe bishtat nuk kontrollohen për përplasje; shfaqet një paralajmërim kur një prerje është më e thellë se gjatësia e brinjës.
- Avancimet dhe shpejtësitë janë vlera fillestare. Një postprocesor është tekst që mund ta redaktosh, por vetëm përcakton si shkruhen lëvizjet; nuk mund të ndryshojë shtegun, të shtojë boshte ose të njohë makinën tënde ([Postprocesorët](topic:post-processors) liston çfarë nuk mund të bëjë).

## Dërgo programin te një makinë

Në CadCraft Studio në desktop, me një makinë të konfiguruar në Studio, **Dërgo te një makinë…** shfaqet pranë **Shkarko G-code** dhe ngarkon të njëjtin program te makina në rrjetin tënd. Nuk nisët kurrë nga PartCraft: nise te makina kur është e qartë. Në shfletues butoni nuk shfaqet (një faqe interneti nuk mund të arrijë një makinë në rrjetin tënd): shkarko programin.
