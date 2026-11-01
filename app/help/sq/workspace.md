---
title: Ekrani i PartCraft
summary: Një shëtitje në çdo shirit dhe panel: shiriti i veglave dhe si ndryshon, historia, faktet e pjesës, pamja 3D, paneli i vetive dhe shiriti i statusit.
keywords: ekran, paraqitje, shiriti i veglave, histori, pemë veçorish, veti, panel, shiriti i statusit, ndërfaqe, ui, shëtitje, ekran i plotë
from: 7394fc49
---

Ekrani ka pesë pjesë: shiriti i veglave përgjatë krye, historia në të majtë, pamja 3D në mes, paneli i vetive në të djathtë dhe shiriti i statusit përgjatë fundit. Mbi të gjitha qëndron shiriti i aplikacionit CadCraft.

## Shiriti i aplikacionit

Shiriti i hollë në majë i përket faqes CadCraft, jo vetë PartCraft. Shfaq emrin e aplikacionit dhe ku funksionon, një menu versionesh, **About PartCraft**, butonin e mënyrës së ekranit dhe ndërruesin e temës Paper / Model.

- **Paper** janë vija të errëta mbi një fletë të çelët. **Model** janë vija të çelëta mbi sfond të errët. Ngjyrat e skicës ndjekin temën.
- {{ui:Cilësimet}} (ingranazhi, ose {{key:Mod+,}}) ka një skedë {{ui:PartCraft}}: cili buton i miut e kthen pamjen, rrota e miut ose trackpad-i, dhe lidhjet gjatë skicimit. Shih [Cilësimet e PartCraft](topic:settings).
- Butoni i mënyrës së ekranit, ose {{key:Ctrl+Shift+F}}, kalon mes normal, ekran i plotë, dhe ekran i plotë me shiritat e fshehur. Me shiritat e fshehur, lëvizni treguesin te skaji i sipërm (ose prekni atje) për t'i sjellë përsëri. {{key:Esc}} kthen në normal. Ky çelës është {{key:Ctrl+Shift+F}} edhe në Mac, jo ⌘.

## Shiriti i veglave

Shiriti i veglave është i grupuar. Ndryshon me atë që po bëni, kështu që përshtatet në një rresht:

| Grupi | Butonat | Shfaqet |
|---|---|---|
| Skedar | {{ui:E re}}, {{ui:Hap}}, {{ui:Ruaj}}, {{ui:Eksporto}} (një menu) | Gjithmonë |
| Skicë | {{ui:Skica}} | Kur nuk është e hapur asnjë skicë |
| Skicë | {{ui:Dil}}, {{ui:Vijë}}, {{ui:Drejtkëndësh}}, {{ui:Rreth}}, {{ui:Pikë}}, {{ui:Vija qendrore}}, {{ui:Rrumbullakim}}, {{ui:Përmasë}}, {{ui:Ndërtim}} | Vetëm ndërsa është e hapur një skicë |
| Veçori | {{ui:Ekstrudo}}, {{ui:Prerje}}, {{ui:Rrotullo}}, {{ui:Vrimë}}, {{ui:Lineare}}, {{ui:Rrethore}}, {{ui:Pasqyrimi}}, {{ui:Rrumbullakim}}, {{ui:Qoshim}}, {{ui:Zbraz}}, {{ui:Më shumë}} (një menu: Prerje e rrotulluar, Rrafsh, Bosht, Pikë, Tërheqje përgjatë, Lidhje profilesh, Draft) | Mbi pjesën, jo ndërsa është e hapur një skicë ose vizatimi. Rrumbullakimi dhe qoshimi funksionojnë në brinjë të drejta ndërmjet dy faqeve të sheshta; Zbraz dhe Draft në faqe të sheshta. Tërheqja përgjatë dhe lidhja e profileve nuk janë ndërtuar ende në këtë version (kërkojnë një kernel të saktë); klikimi në njërën e thotë këtë |
| Veçori | {{ui:U krye}} | Vetëm ndërsa zgjidhni brinjë ose faqe për një rrumbullakim, qoshim, zbrazje ose draft |
| Vizatim | {{ui:Vizatimi}} | Mbi pjesën (përdorshme pasi pjesa të ketë një trup të ngurtë) |
| Vizatim | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Kthehu}} | Vetëm mbi fletën e vizatimit |
| Montim | {{ui:Montimi}} | Mbi pjesën (përdorshme pasi pjesa të ketë një trup të ngurtë) |
| Montim | {{ui:Shto kopje}}, {{ui:Fut}}, {{ui:Lidhja}}, {{ui:Përplasje}}, {{ui:Redakto pjesën}}, {{ui:Mbyll}} | Vetëm në një montim |
| Montim | {{ui:Kthehu}} | Ndërsa redaktoni një pjesë nga një montim |
| Redakto | {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Më shumë}} (një menu: Prit, Kopjo, Ngjit, Ngjit në vend, Dyfisho, Fshi, Përzgjidh të gjitha, Mos përzgjidh asnjë) | Gjithmonë; çdo artikull vepron mbi skicën, historinë ose montimin ku jeni |
| Pamje | {{ui:Përshtat}}, {{ui:Normale me}}, {{ui:Pamjet}} (një menu: Matje, Vetitë e masës, Prerja, Draft, Zebra, Lakueshmëria, {{ui:Planet bazë}}, pastaj Izometrike, Përpara, Pas, Sipër, Poshtë, Djathtas, Majtas) | Gjithmonë |

Kaloni mbi një buton për të parë ç'bën dhe shkurtoren e tij. Një buton i zbehur nuk mund të përdoret tani: për shembull butonat e veçorive ndërsa është e hapur një skicë, ose {{ui:Lidhja}} përpara se montimi të ketë dy pjesë.

Menuja {{ui:Më shumë}} në grupin Redakto liston çdo veprim redaktimi me shkurtoren e tij. Ç'veprojnë kopjo dhe ngjit varet nga vendi ku jeni; shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste). Tooltip-i i një artikulli të zbehur thotë pse nuk mund të veprojë tani.

Menuja {{ui:Eksporto}} përmban {{ui:STL, për printim 3D}}, {{ui:3MF, për printim 3D}}, {{ui:STEP AP242 (trup i saktë i ngurtë)}}, {{ui:STEP AP214 (trup i saktë i ngurtë)}}, {{ui:STEP (me facetë, kernel rrjeti)}}, {{ui:STEP AP214 (me facetë, kernel rrjete)}}, {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} dhe {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}}. Dy artikujt e saktë STEP janë të zbehur: nuk janë ndërtuar ende në këtë version, kështu që përdorni {{ui:STEP (me facetë, kernel rrjeti)}}.

## Historia (majtas)

Paneli në të majtë është historia e veçorive të pjesës, lista që PartCraft e rindërton nga lart poshtë.

- Titulli është emri i pjesës ("Part1" derisa ta riemërtoni).
- **Rrafshi i përparmë**, **Rrafshi i sipërm** dhe **Rrafshi i djathtë** vijnë të parat. Klikoni një për ta zgjedhur; ai thekselohet në pamje.
- Më poshtë janë veçoritë tuaja sipas radhës ku u bënë. Një skicë që përdor një veçori zhvendoset nën atë veçori.
- Një shenjë në skajin e djathtë të një rreshti ju tregon gjendjen e tij:

| Shenja | Kuptimi |
|---|---|
| (asnjë) | Ndërtuar, dhe një skicë është plotësisht e përcaktuar |
| − | Një skicë nën-përcaktuar (mund të lëvizë ende) |
| + | Një skicë mbi-përcaktuar |
| ⚠ | Ndërtuar, me një paralajmërim (kaloni mbi të për ta lexuar) |
| ⚠ gabim | Veçoria dështoi. Kaloni mbi të ose klikoni për të parë arsyen |
| ⚠ nuk është ndërtuar | Veçoria kërkon një tjetër që dështoi ose është fikur |
| fikur | Pezulluar |

- Çdo veçori tregon numrin e saj kryesor pas emrit, si "25 mm" për një Ekstrudo ose "Ø6.6 thru" për një vrimë. Klikoni dy herë numrin, ose shtypni {{key:F2}} te rreshti, për ta ndryshuar aty. Shih [Ndrysho madhësitë](topic:change-sizes).
- Klikoni një veçori për ta redaktuar në të djathtë. Klikoni dy herë një skicë për ta hapur.
- Kur kthehet mbrapsht, një rresht **Shiriti i kthimit · rikthehu përpara** shfaqet në listë. Veçoritë poshtë tij janë të zbehura dhe nuk janë ndërtuar.
- Me një rresht të fokusuar, {{key:Up}} dhe {{key:Down}} lëvizin mes rreshtave, dhe {{key:Alt+Up}} / {{key:Alt+Down}} lëvizin vetë veçorinë, aty ku historia e lejon.

Në një montim, i njëjti panel liston **Pjesët** (e para është shënuar "e mbështetur") dhe **Lidhjet** në vend të kësaj.

### Faktet e pjesës

Nën histori, kutia **Pjesa** liston **Vëllimin**, **Sipërfaqen**, **Madhësinë (X × Y × Z)**, **Vrimat kalimtare**, **Trupat**, **Trekëndëshat**, numrin e **Veçorive** dhe sa prej tyre **Dështojnë**. Vëllimet dhe sipërfaqet janë të trupit me facetë të ndërtuar nga kerneli i rrjetës, pak nën vlerën e vërtetë për format e rrumbullakëta (shih [Veçoritë dhe opsionet e tyre](topic:features#curves-resolution)).

Në një montim kutia titullohet **Montim**: Pjesë, Instanca, Lidhje, Pa lidhur dhe Ndërhyrje.

## Pamja 3D (në mes)

Pamja shfaq trupin e ngurtë, rrafshet bazë dhe çdo skicë që nuk është përdorur ende nga një veçori.

Rrafshet bazë vizatohen plotësisht ndërsa pjesa është bosh. Kur ka një trup të ngurtë, ato tërhiqen prapa: vizatohen të zbehta, që të mos mbulojnë pjesën, dhe klikimet kalojnë nëpër to te pjesa. Kthehen të plota ndërsa zgjidhni ku të skiconi ({{ui:Skica}} pa asgjë të zgjedhur) dhe kur zgjidhni një në histori. {{ui:Pamjet}} › {{ui:Planet bazë}} i fsheh krejtësisht; ato shfaqen ende ndërsa zgjidhni ku të skiconi. PartCraft e mban mend atë zgjedhje.

- Tërheqni për të rrotulluar pjesën, tërhiqni me të djathtën ose me mesin për ta lëvizur, rrotulloni rrotën për të zmadhuar te treguesi. Detajet te [Tastet dhe miu](topic:keyboard).
- Kaloni mbi një faqe, brinjë ose plan për ta parë të ndriçohet. Klikoni për ta zgjedhur. Faqet thekselohen të tëra dhe brinjët vizatohen dhe zgjidhen të tëra. {{key:Shift}}+klikim mbledh disa brinjë ose faqe. Ato mbeten të shënuara.
- Kubi i pamjes në skajin e sipërm të djathtë kthehet me pjesën: klikoni një faqe, brinjë ose qoshe për të parë nga aty, tërhiqeni për ta rrotulluar, butoni shtëpi kthehet te fillimi. Shih [Kubi i pamjes](topic:view-cube).
- Një {{ui:Ekstrudo}} i zgjedhur tregon një shigjetë portokalli mbi faqen e tij fundore, një {{ui:Rrotullo}} një shigjetë të lakuar në fund të rrotullimit të tij: tërhiqeni për të ndryshuar thellësinë ose këndin, ose shkruani në kutinë pranë tij. Shih [Ndrysho madhësitë](topic:change-sizes#drag-it-in-the-view).
- Kur një pjesë është bosh, një kuti me titull **Nis një pjesë** liston hapat e parë.
- Lëshoni një skedar `.partcraft.json` ose `.partcraft-asm.json` kudo mbi pamje për ta hapur. Një skedar `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ose `.3dm` i lëshuar aty hapet si trup i ngurtë.

### Ndërsa zgjidhni brinjë ose faqe

Pas {{ui:Rrumbullakim}}, {{ui:Qoshim}} ose {{ui:Zbraz}} pa asgjë të zgjedhur (ose {{ui:Përzgjidh brinjët}} te një veçori e tillë), pjesa shfaqet siç ishte para asaj veçorie. Klikoni brinjët ose faqet për të shtuar ose hequr; shenjat e tyre tregojnë çfarë është brenda. {{ui:U krye}} ose {{key:Esc}} e mbaron. Shih [Rrumbullakim, qoshim dhe zbrazje](topic:fillet-chamfer-shell).

### Në fletën e vizatimit

{{ui:Vizatimi}} zëvendëson pamjen 3D me fletën A3 të vizatimit. Rrota zmadhon, tërheqja me të djathtën ose me mesin lëviz, {{key:F}} përshtat. Shih [Bëj një vizatim](topic:drawing-pdf).

### Ndërsa është e hapur një skicë

Pamja kthehet drejt e nga plani i skicës dhe një shtresë 2D e skicës shfaqet mbi të. Pjesa tregon vetëm veçoritë e bëra përpara kësaj skice. Një shirit në skajin e sipërm majtas tregon çipin e gjendjes së skicës ("Plotësisht e përcaktuar", "Nën-përcaktuar · 3 shkallë lirie" e kështu me radhë) dhe emrin e saj, si "Sketch2 on a face of Extrude1".

## Paneli i vetive (djathtas)

Paneli në të djathtë shfaq çfarë është zgjedhur, dhe titulli i tij e emëron:

- **Pjesa** (asgjë e zgjedhur): **Emri** i pjesës dhe cilësimi **Kurbat**.
- Një plan: një buton {{ui:Skicë mbi të}}.
- Një **Faqe**: çfarë lloji është (Faqe e sheshtë, Cilindër me rrezen dhe boshtin e tij, Kon, Sferë ose Torus), sipërfaqja e saj, cila veçori e bëri, dhe për një faqe të sheshtë {{ui:Skicë mbi këtë faqe}}, {{ui:Normale me}}, {{ui:Eksporto faqen si DXF}}, {{ui:Nxirr prej saj}}, {{ui:Pritu brenda saj}} dhe {{ui:Vrimë këtu}} (shih [Tërhiq ose shtyj një faqe të tërë](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Një **Brinjë**: lloji i saj (e drejtë, një rreth me qendrën dhe rrezen e tij, ose një kurbë), gjatësia e saj dhe dy faqet ndërmjet të cilave shtrihet (si "faqja e fundit e Extrude1 dhe ana e Extrude1"), me butonat {{ui:Rrumbullakim}} dhe {{ui:Qoshim}}.
- Disa brinjë ose faqe të zgjedhura me {{key:Shift}}: sa janë, me {{ui:Rrumbullakim}} dhe {{ui:Qoshim}} për brinjët, dhe {{ui:Pastro}}.
- Një veçori: numrat dhe opsionet e saj, përmasat e skicës së saj, pastaj {{ui:Pezullo}}, {{ui:Kthehu deri këtu}}, {{ui:Zhvendos lart}}, {{ui:Zhvendos poshtë}}, {{ui:Fshi}} dhe **Emri** i saj.
- Një skicë e hapur: gjendja e saj, lidhjet që mund t'i shtoni zgjedhjes, lista e lidhjeve dhe përmasave, **Shto me koordinata**, dhe {{ui:Dil nga skica}}, {{ui:Përshtat}} dhe {{ui:Eksporto si DXF}}.
- Mbi fletën e vizatimit: cilësimet e prerjes dhe detajit, ose simboli GD&T i zgjedhur.
- Në një montim: montimi, pjesa e zgjedhur, ose lidhja e zgjedhur.

Çdo kuti numri vepron kur shtypni {{key:Enter}} ose {{key:Tab}}, ose kur klikoni jashtë. Pjesa rindërtohet menjëherë; nuk ka buton OK. Përdorni {{key:Mod+Z}} për t'u kthyer.

## Shiriti i statusit (poshtë)

- Majtas, koordinatat e treguesit në skicë (vetëm ndërsa është e hapur një skicë).
- Në mes, mesazhet: çfarë të bëni më pas, dhe pse diçka u refuzua. Lexojeni kur duket se asgjë nuk ndodh.
- Afër të djathtës, çipi i kernelit: gjithmonë "Mesh kernel" në këtë version. Kaloni mbi të për të parë ç'do të thotë. Shih [Kerneli i rrjetës](topic:solid-kernels).
- Në të djathtë, një çip: "Duke rindërtuar…" ndërsa pjesa rindërtohet, pastaj "U rindërtua në … ms" kur gjithçka është në rregull, ose "1 veçori që dështon". Në një montim thotë "U vendos në … ms" ose numëron problemet e lidhjeve.

Shih gjithashtu [Nis një manual në Illustrate](topic:illustrate): hapësirën e punës që bën manuale montimi nga pjesët dhe montimet tuaja.

## Në ekran të ngushtë

Deri në 760 pixel gjerësi, si në telefon, pamja e ruan ekranin: shiriti i veglave është një rresht që lëvizet anash, dhe panelet hapen si fletë nga një shirit në fund. {{ui:Veglat}} fsheh shiritin e veglave, dhe {{ui:Lëviz}} e vendos në fund. Shih [Trackpad, prekja dhe ekranet e vegjël](topic:trackpad-and-touch).
