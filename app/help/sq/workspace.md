---
title: Ekrani i PartCraft
summary: Një turne i çdo shiriti dhe paneli: shiriti i veglave dhe si ndryshon, historia, faktet e pjesës, pamja 3D, paneli i vetive dhe shiriti i statusit.
keywords: ekran, paraqitje, shiriti i veglave, histori, pema e veçorive, veti, panel, shiriti i statusit, ndërfaqe, ui, turne, ekran i plotë
from: 5b5bb843
---

Ekrani ka pesë pjesë: shiriti i veglave lart, historia majtas, pamja 3D në mes, paneli i vetive djathtas dhe shiriti i statusit poshtë. Mbi të gjitha qëndron shiriti i aplikacionit CadCraft.

## Shiriti i aplikacionit

Shiriti i hollë në krye i përket sitit CadCraft, jo vetë PartCraft. Shfaq emrin e aplikacionit dhe ku ekzekutohet, një menu versionesh, **Rreth PartCraft**, butonin e mënyrës së ekranit dhe ndërruesin e temës **Letër** / **Model**.

- **Letër** është me vija të errëta në fletë të çelët. **Model** është me vija të çelëta në sfond të errët. Ngjyrat e skicave ndjekin temën.
- {{ui:Cilësimet}} (ingranazhi, ose {{key:Mod+,}}) ka një skedë {{ui:PartCraft}}: cili buton i mausit e rrotullon pamjen, rrota e mausit ose prekja e tabletës, dhe marrëdhëniet gjatë skicimit. Shih [Cilësimet e PartCraft](topic:settings).
- Butoni i mënyrës së ekranit, ose {{key:Ctrl+Shift+F}}, kalon nëpër normal, ekran i plotë dhe ekran i plotë me shiritat e fshehur. Me shiritat e fshehur, lëviz treguesin në skajin e sipërm (ose prek atje) për t'i sjellë përsëri. {{key:Esc}} kthehet në normal. Ky tast është {{key:Ctrl+Shift+F}} edhe në Mac, jo ⌘.

## Shiriti i veglave

Shiriti i veglave është i grupuar. Ndryshon me atë që po bën, që të përshtatet në një rresht:

| Grupi | Butonat | Shfaqet |
|---|---|---|
| Skedari | {{ui:E re}}, {{ui:Hap}}, {{ui:Ruaj}}, {{ui:Eksporto}} (një menu) | Gjithmonë |
| Skica | {{ui:Skica}} | Kur nuk është hapur skicë |
| Skica | {{ui:Dil}}, {{ui:Vija}}, {{ui:Drejtkëndësh}}, {{ui:Rreth}}, {{ui:Hark}}, {{ui:Pikë}}, {{ui:Vija qendrore}}, {{ui:Rrumbullim}}, {{ui:Përmasë}}, {{ui:Ndërtim}} | Vetëm kur është hapur një skicë |
| Veçoritë | {{ui:Ekstrudo}}, {{ui:Prit}}, {{ui:Rrotullo}}, {{ui:Vrimë}}, {{ui:Lineare}}, {{ui:Rrethore}}, {{ui:Pasqyrimi}}, {{ui:Rrumbullim}}, {{ui:Qoshim}}, {{ui:Zbraz}}, {{ui:Më shumë}} (një menu: Prerje e rrotulluar, Plan, Bosht, Pikë, Shtrirje, Ndërlidhje, Draft) | Mbi pjesën, jo kur është hapur skica ose vizatimi. Rrumbullimi dhe qoshimi funksionojnë në brinjë të drejta mes dy faqesh të sheshta; Zbraz dhe Draft në faqe të sheshta. Shtrirja dhe Ndërlidhja s'janë ndërtuar ende në këtë version (u duhet një kernel i saktë); klikimi në një prej tyre e thotë këtë |
| Veçoritë | {{ui:U krye}} | Vetëm kur zgjedh brinjë ose faqe për rrumbullim, qoshim, zbrazje ose draft |
| Vizatimi | {{ui:Vizatimi}} | Mbi pjesën (përdorshëm pasi pjesa të ketë një solid) |
| Vizatimi | {{ui:Datum}}, {{ui:Kornizë}}, {{ui:Përfundimi}}, {{ui:Detaj}}, {{ui:PDF}}, {{ui:Kthehu}} | Vetëm në fletën e vizatimit |
| Montimi | {{ui:Montimi}} | Mbi pjesën (përdorshëm pasi pjesa të ketë një solid) |
| Montimi | {{ui:Shto kopje}}, {{ui:Fut}}, {{ui:Lidhja}}, {{ui:Përplasje}}, {{ui:Redakto pjesën}}, {{ui:Mbyll}} | Vetëm në një montim |
| Montimi | {{ui:Kthehu}} | Ndërsa redakton një pjesë nga një montim |
| Redakto | {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Më shumë}} (një menu: Prit, Kopjo, Ngjit, Ngjit në vend, Dyfisho, Fshi, Përzgjidh të gjitha, Mos përzgjidh asgjë) | Gjithmonë; çdo element vepron mbi skicën, historinë ose montimin ku je |
| Pamja | {{ui:Përshtat}}, {{ui:Normale me}}, {{ui:Pamjet}} (një menu: Matja, Vetitë e masës, Prerja, Draft, Zebra, Lakimi, {{ui:Planet bazë}}, pastaj Izometrike, Përpara, Prapa, Sipër, Poshtë, Djathtas, Majtas) | Gjithmonë |

Kaloje miun mbi një buton për të parë çfarë bën dhe tastin e tij. Një buton i zbehur s'mund të përdoret tani: për shembull butonat e veçorive ndërsa është hapur një skicë, ose {{ui:Lidhja}} para se montimi të ketë dy pjesë.

Menuja {{ui:Më shumë}} te grupi Redakto liston çdo veprim redaktimi me tastin e tij. Çfarë vepron kopjimi dhe ngjitja varet nga ku je; shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste). Një artikull i zbehur e thotë në tooltip pse s'mund të veprojë tani.

Menuja {{ui:Eksporto}} mban {{ui:STL, për printim 3D}}, {{ui:3MF, për printim 3D}}, {{ui:STEP AP242 (trup i saktë i ngurtë)}}, {{ui:STEP AP214 (trup i saktë i ngurtë)}}, {{ui:STEP (me facetë, kernel rrjeti)}}, {{ui:STEP AP214 (me facetë, kernel rrjeti)}}, {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} dhe {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}}. Artikujt STEP të saktë shkruajnë sipërfaqet e rrumbullakëta në sipërfaqet e tyre të vërteta; ata me facetë i shkruajnë si facetë të sheshta.

## Historia (majtas)

Paneli në të majtë është historia e veçorive të pjesës, lista që PartCraft ri-ndërton nga lart poshtë.

- Titulli është emri i pjesës ("Part1" derisa ta riemërtosh).
- **Plani Përpara**, **Plani Sipër** dhe **Plani Djathtas** vijnë të parët. Kliko një prej tyre për ta zgjedhur; ndriçohet në pamje.
- Më poshtë janë veçoritë e tua sipas radhës që u bënë. Një skicë që përdor një veçori shfaqet me shtytje nën atë veçori.
- Një flamur në fund të një rreshti të thotë gjendjen e tij:

| Flamuri | Kuptimi |
|---|---|
| (asgjë) | E ndërtuar, dhe një skicë është plotësisht e përcaktuar |
| − | Një skicë që është nën-përcaktuar (mund të lëvizë akoma) |
| + | Një skicë që është mbi-përcaktuar |
| ⚠ | E ndërtuar, me paralajmërim (qëndro mbi të për ta lexuar) |
| ⚠ gabim | Veçoria dështoi. Qëndro mbi të për të lexuar pse, ose kliko |
| ⚠ nuk u ndërtua | Veçoria ka nevojë për një tjetër që dështoi ose është fikur |
| fikur | E pezulluar |

- Çdo veçori shfaq numrin e saj kryesor pas emrit, si "25 mm" për një Ekstrudim ose "Ø6.6 thru" për një vrimë. Kliko dy herë numrin, ose shtyp {{key:F2}} në rresht, për ta ndryshuar aty. Shih [Ndrysho madhësitë](topic:change-sizes).
- Kliko një veçori për ta redaktuar djathtas. Kliko dy herë një skicë për ta hapur.
- Kur kthehesh prapa, një rresht **Shiriti i kthimit prapa · kthimi përpara** shfaqet në listë. Veçoritë poshtë tij janë të zbehura dhe s'janë të ndërtuara.
- Me një rresht të fokusuar, {{key:Up}} dhe {{key:Down}} lëvizin mes rreshtave, dhe {{key:Alt+Up}} / {{key:Alt+Down}} lëvizin vetë veçorinë, aty ku lejon historia.

Në një montim, i njëjti panel liston **Pjesët** (e para shënohet "e mbështetur") dhe **Lidhjet** në vend të tyre.

### Fakte të pjesës

Nën historinë, kutia **Pjesa** liston **Vëllimin**, **Sipërfaqen**, **Madhësinë (X × Y × Z)**, **Vrimat e kalueshme**, **Trupat**, **Trekëndëshat**, numrin e **Veçorive** dhe sa janë **Të dështuara**. Vëllimet dhe sipërfaqet janë të solidit me facetë të ndërtuar nga kerneli i rrjetit, pak më pak se vlera e vërtetë për format e rrumbullakëta (shih [Veçoritë dhe opsionet e tyre](topic:features#curves-resolution)).

Në një montim kutia titullohet **Montimi**: Pjesët, Instancat, Lidhjet, Pa lidhur dhe Ndërhyrja.

## Pamja 3D (mes)

Pamja tregon solidin, planet bazë dhe çdo skicë që nuk është përdorur ende nga një veçori.

Planet bazë vizatohen plotësisht derisa pjesa është bosh. Kur ka një solid ato tërhiqen prapa: vizatohen të zbehta, që të mos mbulojnë pjesën, dhe klikimet kalojnë nëpër to te pjesa. Kthehen plotësisht ndërsa zgjedh ku të skicosh ({{ui:Skica}} pa asgjë të zgjedhur) dhe kur zgjedh një prej tyre në histori. {{ui:Pamjet}} › {{ui:Planet bazë}} i fsheh krejt; ato shfaqen akoma ndërsa zgjedh ku të skicosh. PartCraft e mban mend këtë zgjedhje.

- Tërhiq për të rrotulluar pjesën, tërhiq me butonin e djathtë ose të mesit për ta zhvendosur, dhe rrotullo rrotën për të zmadhuar te treguesi. Detaje në [Tastet dhe miu](topic:keyboard).
- Qëndro mbi një faqe, brinjë ose plan për ta parë të ndriçohet. Kliko për ta zgjedhur. Faqet ndriçohen të tëra dhe brinjët vizatohen e zgjidhen të tëra. {{key:Shift}}+klikimi mbledh disa brinjë ose faqe. Ato mbeten të shënuara.
- Kubi i pamjes në skajin e sipërm djathtas kthehet me pjesën: kliko një faqe, brinjë ose qoshe për të parë nga atje, tërhiqe për ta rrotulluar, butoni me shtëpi kthehet në fillim. Shih [Kubi i pamjes](topic:view-cube).
- Një Ekstrudim i zgjedhur tregon një shigjetë portokalli në faqen e tij të fundit, një Rrotullim një shigjetë të lakuar në fund të rrotullimit të tij: tërhiqe për të ndryshuar thellësinë ose këndin, ose shkruaj në kutinë pranë saj. Shih [Ndrysho madhësitë](topic:change-sizes#drag-it-in-the-view).
- Kur një pjesë është bosh, një kuti me titull **Nis një pjesë** liston hapat e parë.
- Lësho një skedar `.partcraft.json` ose `.partcraft-asm.json` kudo në pamje për ta hapur. Një skedar `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ose `.3dm` i lëshuar aty hapet si trup i ngurtë.

### Ndërsa zgjedh brinjë ose faqe

Pas {{ui:Rrumbullim}}, {{ui:Qoshim}} ose {{ui:Zbraz}} pa asgjë të zgjedhur (ose {{ui:Përzgjidh brinjët}} te një veçori e tillë) pjesa shfaqet siç ishte para asaj veçorie. Kliko brinjë ose faqe për t'i shtuar ose hequr; shenjat e tyre tregojnë çfarë është brenda. {{ui:U krye}} ose {{key:Esc}} mbaron. Shih [Rrumbullo, qoshoro dhe zbraz](topic:fillet-chamfer-shell).

### Në fletën e vizatimit

{{ui:Vizatimi}} zëvendëson pamjen 3D me fletën e vizatimit A3. Rrota zmadhon, tërheqja me butonin e djathtë ose të mesit lëviz, {{key:F}} përshtat. Shih [Bëj një vizatim](topic:drawing-pdf).

### Ndërsa është hapur një skicë

Pamja kthehet për të parë drejt e planin e skicës dhe një shtresë 2D skice shfaqet mbi të. Pjesa shfaq vetëm veçoritë e bëra para kësaj skice. Një shirit lart majtas tregon çipin e gjendjes së skicës ("E plotësisht e përcaktuar", "Nën-përcaktuar · 3 shkallë lirie" dhe kështu me radhë) dhe emrin e saj, si "Sketch2 në një faqe të Extrude1".

## Paneli i vetive (djathtas)

Paneli djathtas tregon çfarë është zgjedhur, dhe titulli i tij e emëron:

- **Pjesa** (asgjë nuk është zgjedhur): **Emri** i pjesës dhe cilësimi **Kurbat**.
- Një plan: një buton {{ui:Skicë mbi të}}.
- Një **Faqe**: çfarë lloji është (Faqe e sheshtë, Cilindër me rrezen dhe boshtin e tij, Kon, Sferë ose Torus), sipërfaqja e saj, cila veçori e bëri, dhe për një faqe të sheshtë {{ui:Skicë mbi këtë faqe}}, {{ui:Normale me}}, {{ui:Eksporto faqen si DXF}}, {{ui:Nxirr prej saj}}, {{ui:Pritu brenda saj}} dhe {{ui:Vrimë këtu}} (shih [Tërhiq ose shtyj një faqe të tërë](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Një **Brinjë**: lloji i saj (e drejtë, një rreth me qendrën dhe rrezen e tij, ose një kurbë), gjatësia e saj dhe dy faqet mes të cilave ndodhet (si "Extrude1 faqja e fundit dhe Extrude1 ana"), me butonat {{ui:Rrumbullim}} dhe {{ui:Qoshim}}.
- Disa brinjë ose faqe të zgjedhura me {{key:Shift}}: sa janë, me {{ui:Rrumbullim}} dhe {{ui:Qoshim}} për brinjë, dhe {{ui:Pastro}}.
- Një **veçori**: numrat dhe opsionet e saj, dimensionet e skicës së saj, pastaj {{ui:Pezullo}}, {{ui:Kthehu deri këtu}}, {{ui:Zhvendos lart}}, {{ui:Zhvendos poshtë}}, {{ui:Fshi}} dhe **Emrin** e saj.
- Një skicë e hapur: gjendja, marrëdhëniet që mund t'i shtosh përzgjedhjes, lista e marrëdhënieve dhe dimensioneve, **Shto sipas koordinatave**, dhe {{ui:Dil nga skica}}, {{ui:Përshtat}} dhe {{ui:Eksporto si DXF}}.
- Në fletën e vizatimit: cilësimet e prerjes dhe detajit, ose simboli i zgjedhur GD&T.
- Në një montim: montimi, pjesa e zgjedhur, ose lidhja e zgjedhur.

Çdo kuti numri vepron kur shtyp {{key:Enter}} ose {{key:Tab}}, ose kliko jashtë. Pjesa ri-ndërtohet menjëherë; nuk ka buton OK. Përdor {{key:Mod+Z}} për t'u kthyer.

## Shiriti i statusit (poshtë)

- Majtas, koordinatat e treguesit në skicë (vetëm kur është hapur një skicë).
- Në mes, mesazhet: çfarë të bësh më pas dhe pse diçka u refuzua. Lexoje kur s'duket se ndodh gjë.
- Afër djathtas, çipi i kernelit: gjithmonë "Kernel rrjeti" në këtë version. Qëndro mbi të për të parë çfarë do të thotë. Shih [Kerneli i rrjetit](topic:solid-kernels).
- Djathtas, një çip: "Po ri-ndërtohet…" ndërsa pjesa ri-ndërtohet, pastaj "U ri-ndërtua brenda … ms" kur gjithçka është në rregull, ose "1 veçori që dështon". Në një montim thotë "U vendos brenda … ms" ose numëron problemet e lidhjeve.

Shih edhe [Fillo një manual në Ilustro](topic:illustrate): hapësirën e punës që bën manuale montimesh nga pjesët dhe montimet e tua.

## Në një ekran të ngushtë

Deri në 760 pixel gjerësi, si në një telefon, pamja mban ekranin: shiriti i veglave është një rresht që lëviz anash, dhe panelet hapen si fletë nga një shirit poshtë. {{ui:Mjete}} fsheh shiritin e veglave dhe {{ui:Zhvendos}} e vendos poshtë. Shih [Gjurmimi, prekja dhe ekranet e vegjël](topic:trackpad-and-touch).
