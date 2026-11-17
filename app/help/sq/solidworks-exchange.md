---
title: Zhvendos pjesët drejt dhe nga modelues të tjerë pjesësh
summary: Dërgo një pjesë te një modelues tjetër pjesësh si një makro që e ndërton përsëri me një pemë veçorish të gjallë. STEP i emërtuar dhe hapja e listës së veçorive që shkroi një modelues tjetër nuk janë ndërtuar ende në këtë version.
keywords: makro, nuk është ndërtuar, swb, vba, pema e veçorive, udhëtim i plotë, eksporto makron, cadcraft-sw.json, step i emërtuar, ap214, variabla globale, ekuacione, pjesë vendase
from: 97ca61da
---

PartCraft shkëmben pjesë me SolidWorks në të dy drejtimet, pa një format skedari që askush tjetër nuk mund ta lexojë:

- **Jashtë:** një makro (`.swb`, tekst i thjeshtë) që SolidWorks e ekzekuton për të ndërtuar vetë pjesën, veçori pas veçorie, me skicat, lidhjet, përmasat, variablat globale dhe ekuacionet e saj. Merr një pjesë vendase me një pemë veçorish të gjallë, jo një trup të vdekur.
- **Kthimi:** një makro që ekzekuton brenda SolidWorks shkruan veçoritë dhe ekuacionet e pjesës në një skedar `.cadcraft-sw.json`. Hapja e atij skedari në PartCraft nuk është ndërtuar ende në këtë version (kërkon një kernel të saktë).

:::warning
Asnjë nga kjo nuk është testuar ende në SolidWorks. SolidWorks punon vetëm në Windows me licencë, dhe PartCraft kurrë nuk i ka ekzekutuar këto makro në të. Makrot u shkruan nga dokumentacioni i API-t të SolidWorks dhe u kontrolluan për strukturë këtu. Prit të hasësh probleme; regjistri që shkruan makroja tregon cili hap dështoi.
:::

PartCraft nuk mund të shkruajë një skedar `.sldprt`: ai format është i mbyllur. Makroja është mënyra për të marrë një pjesë vendase.

## Dërgo një pjesë si makro

1. Hap pjesën.
2. Zgjidh {{ui:Eksporto}}, pastaj {{ui:Makro për SolidWorks (.swb)}}. PartCraft shkarkon `<part>.swb`; shiriti i gjendjes thotë se u shkruajt "pa kernelin e saktë".
3. Një dialog thotë sa veçori, variabla globale dhe ekuacione ndërton makroja, dhe liston çdo gjë që la jashtë. Asnjë STEP nuk shkon pranë saj në këtë version: përdor {{ui:Eksporto}}, pastaj {{ui:STEP (me facetë, kernel rrjeti)}} nëse të duhet një.
4. Në SolidWorks, zgjidh **Tools > Macro > Run**, zgjidh skedarin `.swb` dhe prit. Ai krijon një pjesë të re nga shablloni yt parazgjedhur i pjesës, vendos milimetrat dhe ndërton çdo veçori.
5. Në fund një mesazh thotë sa hapa u kryen, sa dështuan dhe sa u përputhën me trupin e PartCraft. Regjistri i plotë, `<part> macro log.txt`, shkruhet pranë makros.

Çfarë ndërton makroja:

| PartCraft | Në pjesën e re |
|---|---|
| Skicë mbi planimetrinë Front, Top ose Right | Një skicë mbi atë planimetri, me vijat, harqet, rrethet, pikat, lidhjet dhe përmasat e saj (të emërtuara si në PartCraft, si `k7`) |
| Skicë mbi një sipërfaqe | Një skicë mbi të njëjtën sipërfaqe, e zgjedhur nga një pikë mbi të |
| Skicë mbi një planimetri të fiksuar | Një planimetri referimi nëpër tri pika, dhe skica mbi të |
| Ekstrudo, prer (pa depërtim, përgjatë gjithë, në mes të planimetrisë, dy drejtime, konik) | boss-extrude ose cut-extrude |
| Rrotullo, prerje e rrotulluar | Rrotullim rreth së njëjtës vije qendrore |
| Vrimë (e thjeshtë, me zgavër, me konik, e filetuar) | Një ose dy prerje me skicat e tyre (një vrimë e filetuar është vrima e zhvidhimit; pa filetim) |
| Model linear dhe rrethor, pasqyrim | Model linear, model rrethor, pasqyrim (veçori ose trupi) |
| Rrumbullakim, pjerrësim, guaskë | Rrumbullakim, pjerrësim dhe guaskë mbi të njëjtat skaje dhe sipërfaqe, të zgjedhura nga pika |
| Parametrat dhe ekuacionet | Variabla globale dhe ekuacione mbi përmasat e riemërtuara |
| Veçori të pezulluara, shiriti i kthimit mbrapa | Të pezulluara në të njëjtën mënyrë; shiriti i kthimit mbrapa në të njëjtin vend |

Pas çdo veçorie të ngurtë makroja krahason vëllimin dhe madhësinë e trupit me ato të PartCraft. Kur ndryshojnë, e kthen drejtimin e asaj veçorie një herë dhe kontrollon përsëri; nëse nuk është më mirë, e kthen mbrapsht dhe shkruan "Check" në regjistër.

### Çfarë lihet jashtë

Dialogu dhe maja e makros listojnë çdo gjë që nuk është bartur, me arsyen. Sot kjo përfshin: trupat e importuar (fut STEP në vend të tyre), sweep, loft, draft, boshtet dhe pikat e referencës, kushtet e fundit "deri te", ekstrudimin vetëm të disa konturave, dhe çdo gjë që varet nga to. Spline-et bëhen kurba që kalojnë nëpër pikat e tyre. Kjo version nuk ka kernel të saktë, kështu skicat mbi sipërfaqe dhe veçoritë që zgjedhin skaje ose sipërfaqe lihen jashtë gjithashtu.

## Dërgo një STEP të emërtuar

Nuk është ndërtuar ende në këtë version: {{ui:STEP për SolidWorks (me emër, AP214)}} kërkon një kernel të saktë, dhe zgjedhja e tij thotë "STEP për SolidWorks: nuk është ndërtuar ende. …". Me një kernel të saktë, skedari mban emrin e pjesës, milimetrat dhe ngjyrën e pjesës, dhe e vendos Y-in lart, ashtu si SolidWorks shfaq pjesët (eksporti i thjeshtë {{ui:STEP AP214 (trup i saktë i ngurtë)}} e vendos Z-në lart). Shkronjat me theks humbin theksin në emër, dhe karakteret e tjera jashtë ASCII-t e thjeshtë bëhen `_`.

## Ktheje një pjesë mbrapsht

Hapja e skedarit në PartCraft (hapi 3) nuk është ndërtuar ende në këtë version: thotë "Hapja e një eksporti SolidWorks: nuk është ndërtuar ende. …". Aplikacioni i vizatimit CadCraft hap ende skedarin dhe merr skicat e tij.

1. Zgjidh {{ui:Skedari}} > {{ui:Eksporto}} > {{ui:Makro eksporti për të sjellë pjesët mbrapsht (.swb)}} për të shkarkuar `CadCraftExport.swb`, dhe vendose pranë pjesëve të tua.
2. Në SolidWorks, hap pjesën, zgjidh **Tools > Macro > Run** dhe zgjidh `CadCraftExport.swb`. Ai shkruan `<part>.cadcraft-sw.json` pranë pjesës dhe nuk ndryshon asgjë në të.
3. Në PartCraft, zgjidh {{ui:Hap}} dhe zgjidh atë skedar, ose lësho atë mbi pamjen 3D.
4. Me një kernel të saktë, PartCraft e ndërton përsëri pjesën veçori pas veçorie dhe shfaq çfarë bëri: për shembull "5 nga 5 veçori u bartën nga SolidWorks (Flange.SLDPRT)", çdo veçori që nuk mundi ta bartë ("Nuk u bart: Sweep1 (Sweep).") dhe nëse vëllimi përputhet me atë që shkroi SolidWorks.
5. Ruaje si pjesë PartCraft me {{ui:Ruaj}}.

Skicat vendosen mbi një planimetri bazë kur ndodhen mbi një të tillë, mbi sipërfaqen e sheshtë përkatëse të pjesës kur ka një të tillë (që kështu të ndjekin ndryshimet e mëvonshme), dhe ndryshe mbi një planimetri të fiksuar. Skajet dhe sipërfaqet e rrumbullakimeve, pjerrësimeve dhe guaskave gjenden nga pikat dhe mbahen si referenca të emërtuara. Variablat globale bëhen parametra (emrat me hapësira marrin nëntëvija: "Bolt count" bëhet `Bolt_count`) dhe ekuacionet bëhen ekuacione mbi të njëjtat përmasa. Asgjë nuk merret me supozim: çdo gjë që nuk ka kundërpjesë listohet.

Aplikacioni i vizatimit CadCraft hap të njëjtin skedar dhe merr skicat e tij.

:::note
Formati është `cadcraft-sw-export` version 1, JSON i thjeshtë në milimetra dhe gradë. Një skedar nga një makro më e re, ose një që nuk është i vlefshëm, refuzohet me arsyen.
:::
