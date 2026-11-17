---
title: Bëj shtigje veglash dhe G-code (Prodhimi)
summary: Cakto materialin dhe origjinën e punës, zgjidh veglat, shto operacione faqeje, xhepi, konture, shpuarjeje dhe qoshimi duke zgjedhur sipërfaqe, mbaro të gjithë modelin në 3D (paralele, scallop), simulo stokun kundrejt modelit për gërryerje dhe kohë cikli, dhe shkarko G-code nga një nga tre postprocesorët e integruar ose një që redakton vetë.
keywords: STEP i saktë, STEP për punëtorinë, koordinata pune, dorëzim CAM, paralele, scallop, përfundim 3D, përfundim, frezë me majë topi, bibliotekë veglash, redakto postin, postprocesor me porosi, redaktuesi i postit, adaptiv, pastrim adaptiv, angazhim konstant, trokoidal, hsm, makinim me shpejtësi të lartë, prodhim, CAM, shtigje veglash, G-code, NC, CNC, frezë, frezim, xhep, kontur, profil, sipërfaqe, shpuarje, peck, G83, G81, G73, qoshim, stok, ofset pune, G54, postprocesor, GRBL, LinuxCNC, ushqime dhe shpejtësi, simulim, gërryerje, kohë cikli
from: beeb29aa
---

Hapësira e punës Prodhimi e kthen pjesën në shtigje veglash për një makinë frezimi me tre boshte dhe i shkruan si G-code. Shumica e operacioneve janë **2.5-bosht**: vegla mbetet vertikale, muret priten drejt poshtë dhe dyshemetë janë të sheshta. **Paralele** dhe **Scallop** përfundojnë sipërfaqe të lakuara në 3D (shih [Përfundimi 3D](topic:finish-3d)); vegla gjithsesi mbetet vertikale (tre boshte, pa pjerrësi). Punon mbi sipërfaqet e emërtuara që bërthama e rrjetës i jep pjesës (shih [Bërthama e rrjetës](topic:solid-kernels)).

Version laboratori: kontrollo çdo program në simulatorin e vet të kontrollit, dhe ekzekuto së pari në ajër, mbi stok.

## Konfiguro

1. Zgjidh **Prodhimi** te ndërruesi i hapësirës së punës, pastaj {{ui:Konfigurim i ri}}.
2. Te skeda **Konfigurimi**, zgjidh:
   - **Boshti i veglës (+Z)**: nga cili drejtim vegla hyn në pjesë. Bota +Y (lart e PartCraft) është parazgjedhja; X e makinës është atëherë X e botës dhe Y e makinës është −Z e botës.
   - **Origjina e punës (G54)**: një cep ose qendër e stokut, lart ose poshtë, qendra e sipërme e modelit, ose origjina e modelit.
   - **Stoku**: një kuti ose një cilindër, ose modeli plus ofsete (anët, lart, poshtë) ose një madhësi fikse.
   - **Materiali** (cakton ushqimet dhe shpejtësitë fillestare), **postprocesori** (kontrolli), shpejtësia maksimale e boshtit të makinës, shpejtësia e shpejtë dhe koha e ndërrimit të veglës, lëngu ftohës dhe numri i programit.

## Veglat

Skeda **Veglat** mban bibliotekën: freza të sheshta, me majë topi dhe me majë rrumbullakuar, burghie, freza qoshimi dhe freza sipërfaqeje, secila me një numër T, diametër, brinjë dhe gjatësi brinjeje (plus rreze këndi, kënd pike ose qoshimi aty ku zbatohen).

Veglat e mia mund të ruhen në shfletues dhe të zhvendosen midis kompjuterëve si skedar: shih [Biblioteka e veglave](topic:tool-library).

Shpejtësia e boshtit dhe ushqimi vijnë nga materiali: n = 1000 × shpejtësia e prerjes / (π × diametri), ushqimi = n × brinjë × ngarkesa e çipit (burghie: n × ushqimi për rrotullim). Numrat janë vlera fillestare të kujdesshme nga intervale të publikuara, jo të përshtatura për makinën tënde; shkruaj shpejtësinë e prerjes, ngarkesën e çipit, rpm ose ushqimin e prodhuesit të veglës për t'i anashkaluar. Kur shpejtësia kalon maksimumin e makinës, mbahet aty dhe ushqimi ndjek, duke ruajtur ngarkesën e çipit.

## Shto operacione

Çdo buton i shiritit shton një operacion dhe, aty ku kërkon gjeometri, fillon zgjedhjen: kliko sipërfaqe ose skaje në pamje (kliko përsëri për të hequr një), pastaj {{ui:Përfundo përzgjedhjen}} ose {{key:Esc}}.

| Operacioni | Zgjedh | Çfarë bën |
|---|---|---|
| {{ui:Faqe}} | asgjë | Kalime zig-zag mbi tërë stokun, përtej skajeve të tij, poshtë deri te maja e modelit |
| {{ui:Xhep}} | një sipërfaqe e sheshtë dyshemeje, një vrimë e rrumbullakët, ose një zinxhir i mbyllur skajesh | Pastron rajonin me kalime ofseti nga brenda-jashtë, në çdo hap zbritjeje; ishujt (sipërfaqet që ngrihen brenda dyshemesë) lihen; një dyshemé e hapur nga të gjitha anët (asgjë më e lartë jashtë saj) pastrohet deri te skaji i stokut |
| {{ui:Adaptiv}} | njëlloj si Xhep | Pastron të njëjtin rajon me kalime që presin çdo herë një gjerësi të caktuar (**Angazhimi**, një pjesë e diametrit), që freza të mos presë kurrë një prerje me gjerësi të plotë, edhe në qoshe; hyn me spirale dhe i përfundon muret në çdo nivel. Prerjet e ngushta lejojnë një zbritje më të thellë dhe një ushqim më të lartë |
| {{ui:Izoipsë}} | një sipërfaqe e sheshtë (kontura e saj), një sipërfaqe e rrumbullakët, ose skaje | Ndjek konturën e ofsetuar me rrezen e veglës, jashtë ose brenda, me harqe hyrjeje dhe daljeje dhe skeda opsionale |
| {{ui:Shpuarje}} | vrima (kliko murin ose buzën e vrimës) | Shpon çdo vrimë me një cikël të gatshëm: peck (G83), shpuarje (G81) ose thyerje çipi (G73); ose jep një diametër për të shpuar çdo vrimë të atij madhësie |
| {{ui:Qoshim}} | kontura ose skajet e një sipërfaqeje | Kalon një frezë qoshimi përgjatë skajit që të presë gjerësinë që ke vendosur |
| {{ui:Paralele}} | asgjë (tërë modeli) | Përfundim 3D me vija paralele në çdo kënd, duke ndjekur sipërfaqen me një frezë me majë topi, me majë rrumbullakuar ose të sheshtë. Shih [Përfundimi 3D](topic:finish-3d) |
| {{ui:Scallop}} | asgjë (tërë modeli) | Përfundim 3D me kalime në një distancë të caktuar njëra nga tjetra mbi sipërfaqe, që kreshta mes tyre të ketë lartësinë që kërkon |

Zgjidh një operacion në listë për të ndryshuar veglën, lartësitë (lirimi, tërheqja, lartësia e ushqimit, maja, poshtë), zbritjen, hapin ndërmjet kalimeve, stokun që lihet, kalimin e përfundimit, hyrjen (spirale, rampë ose zhytje), frezimin me ngjitje, skedat ose ciklin. {{ui:Lart}} dhe {{ui:Poshtë}} e rirenditin, {{ui:Pezullo}} e lë jashtë, {{ui:Fshi}} e heq. Çdo gjë është në historikun e zhbërjes dhe ruhet në skedarin e pjesës.

Hapi ndërmjet kalimeve të një xhepi është më së shumti gjysma e diametrit të veglës, kështu që çdo pikë e dyshemesë së tij është brenda një rreze të veglës nga një kalim. Qoshet e brendshme e mbajnë rrezen e veglës.

**Pastrimi adaptiv** e mban angazhimin e frezës afër një vlere. Një angazhim prej 0.15 të diametrit është një kënd angazhimi rreth 46°: harku i skajit të frezës në material. Një xhep ofseti, në krahasim, pret gjerësi të plotë në kalimin e parë dhe rrotullohet më shumë në çdo qoshe të brendshme. Midis kalimeve vegla qëndron poshtë aty ku lëviz përmes ajrit të prerë, dhe ngrihet e zbret në ajrin e prerë në pjesët e tjera. Kalimet llogariten në një rrjetë të imët mbi rajonin (qelizat rreth një të dymbëdhjetën e rrezes së veglës), kështu që angazhimi mund të shkojë deri rreth një qelizë më i gjerë se sa është vendosur; muret përfundohen saktësisht. Një rajon i madh i hapur bën një program të gjatë me shumë lëvizje të shkurtra.

## Simulo

Shtigjet e veglave rigjenerohen pas çdo ndryshimi (edhe ai i pjesës). {{ui:Simulo}} shfaq edhe stokun që mbetet pas gjithë programit. Paneli tregon:

- **Koha e ciklit**: lëvizjet me ushqim me ushqimin e tyre, lëvizjet e shpejta si vija të drejta me shpejtësinë e shpejtë të konfigurimit, plus koha e ndërrimit të veglës. Makinat reale përshpejtohen, kështu që marrin më shumë kohë.
- **Gërryerjet**: vende ku vegla shkoi më shumë se 0.02 mm poshtë sipërfaqes së pjesës. Shenjat e kuqe i tregojnë në pamje.
- **Stoku i mbetur në pjesë**.

Stoku është një hartë lartësish e sipërfaqes (një Z-hartë), kështu që nuk mund të tregojë nënprerje. Tërhiq **Luajtja** për të lëvizur veglën përgjatë programit. Në pamje, lëvizjet me ushqim janë të plota dhe ato të shpejta me viza, me një ngjyrë për operacion.

Me **Shfaq stokun e simuluar** të ndezur, stoku ngjyroset kundrejt modelit, qelizë pas qelizës: **jeshile** aty ku është mbi modelin (brenda 0.02 mm), **e kuqe** aty ku vegla preu në model, dhe aty ku stoku mbetet mbi modelin **e verdhë** për një shtresë të hollë, **portokalli** për më shumë, duke u shuar në **gri** të stokut të papreruar në 1 mm ose më shumë. Ngjyrat rigjenerohen me çdo ndryshim, nga e njëjta hartë lartësish si numrat në panel, kështu që jeshilja dhe e kuqja përputhen me rreshtin Gërryerje. Një qoshim pret qëllimisht në model dhe tregon të kuqe përgjatë skajit të tij.

## Postimi i G-code

Zgjidh kontrollin te **Postprocesori** dhe shtyp {{ui:Shkarko G-code}} (ose {{ui:Postprocesori}} në shirit):

| Kontrolli | Skedari | Shënime |
|---|---|---|
| Fanuc-style ISO | .nc | %, numër O, numra rreshtash, T M6 me G43 H, cikle të gatshme |
| GRBL | .nc | Pa ndërrues vegle ose cikle të gatshme: një ndërrim veglë ndalon me M0, shpuarja shkruhet si lëvizje të thjeshta |
| LinuxCNC | .ngc | T M6 me G43 H, cikle të gatshme, M2 |
| Të tuajin | çfarëdo | Një postprocesor që ke shkruar ose ndryshuar: {{ui:Redakto postprocesorin…}}, {{ui:Postprocesor i ri…}}, {{ui:Importo skedarin e postprocesorit…}} |

Çdo skedar fillon me komente për programin, stokun, ofsetin e punës dhe veglat. Koordinatat janë në milimetra me 3 decimale. {{ui:CSV i shtigjeve}} dhe {{ui:JSON i shtigjeve}} eksportojnë vetë lëvizjet.

**Kontrollo daljen në simulatorin e vet të makinës para prerjes, dhe ekzekuto së pari në ajër, mbi stok.** Tre postprocesorët e integruar janë pika fillimi që ndjekin sjelljen e dokumentuar të kontrolleve; nuk janë provuar në asnjë makinë të caktuar. Një postprocesor që ndryshon është përgjegjësia jote për ta provuar. Si të shkruhet një: [Postprocesorët](topic:post-processors).

## STEP i saktë për punëtorinë

Nën butonat G-code në skedën **Operacionet**, {{ui:STEP i saktë (koordinatat e punës)}} shkarkon `<part>-work.step`: pjesa si trup i saktë (cilindra të vërtetë për vrima dhe bosa, rrathë të vërtetë për skajet e tyre) me origjinën e saj te origjina e punës të këtij konfigurimi dhe Z sipas boshtit të veglës. Këto janë koordinatat që përdor G-code, kështu që programi CAM i punëtorisë ose kontrolluesi i saj e vendos modelin në linjë me programin pa e lëvizur. Skedari përmban vetëm pjesën, jo stokun ose shtigjet e veglave.

{{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} shkruan të njëjtin trup në pozicionin e vet të pjesës (Z lart): shih [Eksporto për printim, STEP dhe DXF](topic:export-files#for-other-cad-programs-step).

## Kufijtë

- Xhepat, konturat, shpuarja dhe qoshimet janë 2.5-bosht. Sipërfaqet e lakuara mund të përfundohen në 3D ([paralele dhe scallop](topic:finish-3d)), por jo të ashpërsohen në 3D (një konus lihet si shkallë deri sa ta përfundosh), dhe nuk ka makinim për pjesët e mbetura. Pastrimi adaptiv është 2D (dyshemé të sheshta).
- Vetëm tre boshte: pa pjerrësi, pa tornim, pa inspektim.
- Mbajtësit dhe bishtat nuk kontrollohen për përplasje; shfaqet një paralajmërim kur një prerje është më e thellë se gjatësia e brinjës.
- Ushqimet dhe shpejtësitë janë vlera fillestare. Një postprocesor është tekst që mund ta redaktosh, por vetëm vendos si shkruhen lëvizjet; nuk mund të ndryshojë shtegun e veglës, të shtojë boshte ose të njohë makinën tënde ([Postprocesorët](topic:post-processors) liston çfarë nuk mundet).

## Dërgo programin te një makinë

Në CadCraft Studio në desktop, me një makinë të konfiguruar në Studio, **Dërgo te një makinë…** shfaqet pranë **Shkarko G-code** dhe ngarkon të njëjtin program te makina në rrjetin tënd. Nuk nisët kurrë nga PartCraft: nise te makina kur është e qartë. Në shfletues butoni nuk shfaqet (një faqe web nuk mund të arrijë një makinë në rrjetin tënd): shkarko programin në vend të kësaj.
