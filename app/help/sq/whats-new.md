---
title: Çfarë është e re në 0.8 dhe 0.8.1
summary: PartCraft 0.8 shton analizë të drejtpërdrejtë ndërsa redakton, kontrollin çfarë thyhet e para, studime rrjedhjeje dhe kontakti me skedarë deck për një zgjidhës të jashtëm, studime lëvizjeje për montimet, hapësirën e punës Sipërfaqet për sipërfaqe të lira, pjesë të përmasuara nga fizika në hapësirën e punës Inxhinieri, skicë nga një foto, eksportime për printim, fletë të vendosura në G-code dhe vizatime që përmasojnë vrimat e tyre. 0.8.1 ndreq një ngrirje të kursorit në ekran të plotë.
keywords: çfarë është e re, what's new, shënimet e versionit, regjistri i ndryshimeve, ndryshimet, 0.8, 0.8.1, version, veçori të reja, analizë e drejtpërdrejtë, përditësim gjatë redaktimit, thyeje, çfarë thyhet e para, faktori i ngarkesës, jolineare, rrjedhje, deformim plastik, kontakt, calculix, studim lëvizjeje, hapësirë e lirë, sipërfaqet, nurbs, lëmo, kaskë, zebra, inxhinieri, gjenerator, trup i gjeneruar, skicë nga një foto, shkallë për printim, ndarje për printim, tkurrje, fletë të vendosura, g-code, vizatim, përmaso vrimat, asistent, mcp, gjuhët, rreshtat e shiritit të veglave
from: 62e4dce2
---

Ky është ndryshimi në PartCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Simulimi u përgjigjet ndërsa redakton dhe të tregon çfarë thyhet e para, montimet marrin studime lëvizjeje, dhe hapësirat e reja të punës bëjnë sipërfaqe të lira dhe pjesë të përmasuara nga fizika. 0.8.1 është një version i vogël ndreqjesh.

## E re

### Simulimi

- **Përditëso ndërsa redaktoj.** Vër shenjë te {{ui:Përditëso ndërsa redaktoj}} te blloku Zgjidh dhe përgjigjet ndjekin ndryshimet e tua. Ndrysho një përmasë, një ngarkesë ose materialin dhe një përgjigje e shpejtë, e bërë me elemente katër herë më të mëdhenj, shfaqet menjëherë; kur ndalon për rreth një sekondë, përgjigja e rafinuar e vetë studimit zëvendëson atë. Rezultatet tregojnë cilën nga të dyjat po shikon. Te një konsol çeliku, përgjigja e shpejtë ishte brenda 1 % për lakimin dhe rreth 4 % për stresin, krahasuar me atë të rafinuar. Shih [Kontrollo stresin dhe lakimin](topic:simulation#update-while-you-edit-live).
- **Çfarë thyhet e para.** Për një studim statik ose kthimi, {{ui:What breaks first?}} te blloku **Thyeje** i shkallëzon ngarkesat deri sa pjesa të dorëzohet. Lista, nga më e keqja te më pak e keqja, tregon faktorin e ngarkesës deri te rrjedhja e parë (me një shenjë të kuqe aty ku stresi arrin kulmin) dhe faktorin e ngarkesës deri te kthimi. Një faktor nën 1 do të thotë se pjesa tashmë dorëzohet me ngarkesën e vendosur, dhe Problemet shfaq një gabim. Faktorët vijnë nga një studim linear, kështu që janë aq të saktë sa është ai. Shih [Kontrollo stresin dhe lakimin](topic:simulation#find-out-what-breaks-first-break-it).
- **Rrjedhja dhe kontakti.** Dy lloje të tjera studimi: një jolinear, ku materiali ndjek vijën e tij të drejtë deri te stresi i rrjedhjes dhe më pas një pjerrësi më të sheshtë, me deformimin plastik të vizatuar; dhe një kontakt, ku copa të ndara shtyjnë njëra-tjetrën (pa fërkim) ose qëndrojnë të ngjitura (të lidhura). Një hap ngarkese që nuk mund të stabilizohet, ose copa që futen shumë thellë njëra në tjetrën, shfaqen në panelin Problemet. Fërkimi, rrëshqitja e madhe, rrotullimet e mëdha, lakimet e mëdha dhe lodhja nuk zgjidhen. Shih [Kontrollo stresin dhe lakimin](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Skedarë deck për CalculiX.** {{ui:Eksporto}} › {{ui:CalculiX deck (.inp)}} e ruan studimin për CalculiX, një program të veçantë që e instalon dhe e ekzekuton vetë; {{ui:Eksporto}} › {{ui:CalculiX results (.frd)}} e lexon skedarin e tij të rezultateve përsëri mbi të njëjtin rrjet. PartCraft kurrë nuk e nis atë program, dhe e thotë këtë nëse pjesa u ndryshua pasi skedari deck u ruajt.

### Montimet

- **Studime lëvizjeje.** {{ui:Montimi}} › {{ui:Lëvizja}} e drejton vlerën e një lidhjeje sipas një kohe që ti e jep (shpejtësi konstante, e butësuar, sinus, ose shkon e kthehet), e vendos montimin në çdo hap me lidhjet dhe unazat e mbyllura të tij, dhe raporton cilat copa përplasen dhe sa afër vijnë. {{ui:Shto një pikë}} vizaton pozicionin, shpejtësinë dhe nxitimin e një pike, vlerën e lidhjes dhe hapësirën e lirë në varësi të kohës; {{ui:Ruaj CSV}} dhe {{ui:Ruaj grafikun}} i shkruajnë ato jashtë. Pas {{ui:Ekzeko}}, shiriti Hap përmes ekzekutimit e zhvendos montimin në çdo hap. Cilësimet e studimit ruhen në skedarin e montimit. Shpejtësia dhe nxitimi vijnë nga pozicionet e regjistruara, kështu që përdor më shumë hapa nëse një majë e mprehtë del e ulët. Shih [Kontrollo një montim për përplasje dhe lëvizje](topic:check-assembly#a-motion-study).

### Sipërfaqet dhe pjesët nga fizika

- **Hapësira e punës Sipërfaqet.** Zgjidh {{ui:Sipërfaqet}} te kutia {{ui:Hapësira e punës}} për kurba dhe sipërfaqe NURBS pranë pjesës: {{ui:Kurbë}}, {{ui:Ndërlidhja}}, {{ui:Shtrirja}}, {{ui:Përputh}} dhe {{ui:Zebra}}, me vazhdimësinë (G0, G1 ose G2) të matur mbi sipërfaqet e sakta dhe një skaj më të keq se kërkove të listuar në Problemet me një ndreqje Përputh. {{ui:Lëmo}} mat vijat e kasës për pikat e infleksionit dhe kërcimet e lakimit, dhe i rindërton ato të pa lëmuara brenda tolerancës tënde. Sipërfaqet ruhen në skedarin e pjesës dhe nuk ndryshojnë veçoritë e pjesës. Shih [Sipërfaqe të lira (NURBS)](topic:nurbs-surfaces).
- **Hapësira e punës Inxhinieri.** Zgjidh {{ui:Inxhinieri}} te ndërruesi i hapësirës së punës, zgjidh një gjenerator dhe kliko {{ui:E re}}: një skriptë përmason një pjesë sipas asaj që duhet të bëjë (nxehje për lëvizje, rrjedhje, presion, material, proces printimi) me formula librash shkollore, dhe e ndërton atë, pastaj kthen numrat që përdori me burimet e tyre, kontrollet e prodhimit të saj dhe skedarë për mjete analize. Të njëjtat të dhëna japin të njëjtën pjesë në çdo kompjuter. Gjeneratori mbahet në pjesë, dhe hapja e një pjese nuk ekzekuton kurrë një skriptë. Shih [Pjesë nga fizika: gjeneratorët](topic:engineer-generators) dhe [Shkruaj një gjenerator](topic:write-a-generator).

### Skicimi, vizatimet dhe prodhimi

- **Një skicë nga një foto.** {{ui:Veçori}} › {{ui:Më shumë}} › {{ui:Skicë nga një foto…}} gjurmon një foto të një pjese të sheshtë mbi një sfond të thjeshtë (kontur dhe vrima) ose një vizatim me stilolaps në vija, harqe dhe rrathë. Jep një gjatësi, kontrollo pamjen paraprake dhe bëje skicën. Shih [Bazat e skicimit](topic:sketch-basics#a-sketch-from-a-photo).
- **Shkallëzimi dhe ndarja për printim.** {{ui:Eksporto}} › {{ui:Shkallë për printim (STL ose 3MF)…}} shkallëzon sipas çdo boshti pa e ndryshuar pjesën, për shembull me një lejë tkurrjeje. {{ui:Eksporto}} › {{ui:Ndaj për printim (zip me copa)…}} pret një pjesë shumë të madhe për tavolinën tënde në copa të numëruara të bashkuara me kunja, çelësa, bisht rondinë, vrima kunjash ose xhepa magnetësh. Shih [Printimi 3D](topic:print-3d).
- **Fletë të vendosura në G-code.** {{ui:Eksporto}} › {{ui:Fletët e vendosura në G-code}} lexon një DXF të vendosur dhe bën një program për çdo fletë, përmes postprocesorit që zgjedh: fillimisht vrimat dhe prerjet, pastaj konturet. Nuk planifikon hyrjet, renditjen e prerjes ose skajet e përbashkëta. Shih [Vendos pjesë të sheshta në fletë](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Vizatime që bëjnë më shumë vetë.** {{ui:Fleta}} › {{ui:Automatik}} zgjedh fletën më të vogël të madhësisë A që mban pamjet me shkallën standarde më të madhe deri 1:1. {{ui:Përmaso vrimat}} vendos një shenjë qendre në çdo vrimë, një thirrje për çdo madhësi dhe pozicionet nga qoshja e poshtme majtas e pamjes. Shih [Bëj një vizatim](topic:drawing-pdf).

### Në çdo aplikacion

- **Gjuhët.** Aplikacionet vijnë në 54 gjuhë. Ato përtej anglishtes janë përkthime paraprake me makinë deri sa t'i lexojë një folës amtare.
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh Mbështjellje (si më parë), 2 rreshta ose 1 rresht; një shirit që nuk përshtatet lëviz anash. Shiriti i veçorive të PartCraft shfaq veglën më të përdorur të madhe dhe fsheh variantet pas një butoni të ndarë.
- **Lidh AI-n tënd.** Studio është qendra për lidhjen e një asistenti tëndin me të tetë aplikacionet, me leje vetëm lexim, sugjerim ose redaktim për çdo aplikacion. Një asistent i lidhur mund të përmasojë një pjesë nga një fjali, si një mbajtëse për një ngarkesë, të tregojë punën e vet dhe çdo kontroll, dhe ta ndërtojë; raporton atë që nuk kontrolloi (përqendrimin e stresit, lodhjen, zvarritjen në plastikë). Shih [Përdor PartCraft me një asistent AI](topic:use-with-ai-assistants).

## Ndrequr në 0.8.1

- **Ngrirja e kursorit në ekran të plotë.** Zgjedhja me kalim mbi objekt tani kufizohet. Shkaku është leximi ynë më i mirë dhe nuk u konfirmua me personin që e raportoi.
- **Gjuha gjatë ekzekutimit.** Studio dhe edicionet e paketuara mund ta ndërrojnë gjuhën gjatë ekzekutimit; më parë ishin vetëm në anglisht. Kjo nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.

## Jo në këtë version ende

- Lidhja e AI-t nuk është e përfunduar: lidhja me një klik brenda Studio, lidhësi i hostuar për AI-n e shfletuesit, çelësi yt API brenda Studio dhe paketa e publikuar MCP nuk premtohen. Studio nuk ka AI të vetën.
- Studio nuk është e nënshkruar me kod: Windows mund të paralajmërojë, dhe macOS kërkon klik me butonin e djathtë e pastaj Hap. Shih [Zgjidhja e problemeve](topic:troubleshooting).
- Grumbullimet e tolerancave janë ende vetëm në një drejtim: shih [Grumbullimet e tolerancave](topic:tolerance-stackup).
- Pjesa tjetër është e listuar te [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

Ndryshimet e mëparshme janë te [Çfarë është e re në 0.7](topic:whats-new-0-7).
