---
title: Përcakto plotësisht një skicë me lidhje dhe përmasa
summary: Shto lidhje nga paneli i djathtë dhe përmasa me veglën Përmasë, lexo ngjyrat e gjendjes nën-përcaktuar, plotësisht të përcaktuar dhe mbi-përcaktuar, dhe rregullo një skicë që është mbi-përcaktuar.
keywords: lidhje, kufizime, përmasa, përmasë inteligjente, plotësisht e përcaktuar, nën-përcaktuar, mbi-përcaktuar, shkallë lirie, bashkëpikë, horizontale, vertikale, paralele, pingule, tangjente, baras, koncentrike, pikë mesi, fikso, konflikt, e tepërt
from: e76d047a
---

Një skicë është **plotësisht e përcaktuar** kur çdo pikë dhe çdo përmasë është e fiksuar nga lidhjet dhe përmasat. Një skicë plotësisht e përcaktuar ndryshon vetëm kur ndryshon një numër, kështu që pjesa sillet parashikueshëm kur e modifikon më vonë. PartCraft nuk të detyron ta përcaktosh plotësisht një skicë, por tregon gjithmonë sa afër je.

## Lexo gjendjen e skicës

Gjendja shfaqet në tri vende: çipi në krye majtas të pamjes, mesazhi në krye të panelit të djathtë dhe flamuri në histori.

| Gjendja | Çipi | Ngjyra e gjeometrisë | Çfarë do të thotë |
|---|---|---|---|
| Nën-përcaktuar | "Nën-përcaktuar · 3 shkallë lirie" | Blu | Disa gjeometri mund ende të lëvizin. Tërhiq gjeometrinë blu për të parë nga cila anë |
| Plotësisht e përcaktuar | "Plotësisht e përcaktuar" | Bojë (e zezë në Paper, e çelët në Model) | Çdo pikë dhe madhësi është fiksuar |
| Mbi-përcaktuar | "Mbi-përcaktuar" | E kuqe te lidhjet e përfshira | Disa lidhje bien ndesh me njëra-tjetrën, ose një është tashmë e nënkuptuar nga të tjerat |

Gjeometria e ndërtimit është gri dhe me vija të ndërprera, çfarëdo qoftë gjendja e saj. Elementët e zgjedhur janë portokalli. "Shkallë lirie" është një mënyrë që diçka mund ende të lëvizë: një pikë e lirë ka dy (majtas-djathtas dhe lart-poshtë), një rreth i lirë ka tre (qendrën dhe rrezen e tij).

Legjenda nën mesazhin në panelin e djathtë i përsërit ngjyrat.

## Shto një përmasë

1. Shtyp {{key:D}} ose zgjidh {{ui:Përmasë}}.
2. Kliko çfarë do të matësh:
   - **një vijë**: gjatësinë e saj;
   - **një rreth**: diametrin e tij; **një hark**: rrezen e tij;
   - **dy pika** (një pikë skaji, një qendër, një pikë e lirë ose origjina): distancën midis tyre;
   - **një pikë dhe një vijë**: distancën nga pika te vija;
   - **dy vija paralele**: distancën midis tyre; **dy vija me kënd**: këndin midis tyre.
3. Pas një elementi, shiriti i gjendjes thotë "Kliko një element të dytë, ose kliko ku do të vendoset përmasa." Kliko një element të dytë, ose kliko në hapësirë bosh aty ku do të të duhet numri.
4. Hapet një kuti numri me vlerën aktuale. Shkruaj madhësinë dhe shtyp {{key:Enter}}. {{key:Esc}} e mban vlerën e matur.

**Vendi ku e vendos numrin përcakton llojin** për një vijë të pjerrët ose dy pika: vendose sipër ose poshtë për të marrë një distancë horizontale, majtas ose djathtas për një distancë vertikale, dhe gjetkë për distancën e vërtetë (të drejtuar).

Kutia pranon numra të thjeshtë në milimetra ose gradë, si `25`, `12.5` ose `1e3`. Një `⌀`, `Ø` ose `R` në fillim, ose një `mm` ose `°` në fund, injorohen. Këndet janë nga 0 deri 180 gradë. Llogaritjet si `20+5` nuk pranohen; për të lidhur një madhësi me një variabël ose formulë, fillo me `=`.

Për të ndryshuar një përmasë më vonë, kliko dy herë numrin e saj në skicë, ose zgjidh **Modifiko** pranë saj në listën e panelit të djathtë.

:::tip
Mund të zgjedhësh gjeometrinë së pari (veglën Përzgjidh) dhe të zgjedhësh një buton përmasash në panelin e djathtë: {{ui:Distanca}}, {{ui:Distancë horizontale}}, {{ui:Distancë vertikale}}, {{ui:Rrezja}}, {{ui:Diametri}} ose {{ui:Këndi}}. Shfaqen vetëm ato që përshtaten me përzgjedhjen. Kjo është mënyra për t'i dhënë një rrethi një rreze në vend të diametrit.
:::

## Shto një lidhje

Lidhjet shtohen nga paneli i djathtë, jo me një vegël.

1. Shtyp {{key:S}} për Përzgjidh.
2. Kliko një element, pastaj {{key:Shift}}+kliko një të dytë nëse lidhja kërkon dy. Origjina mund të zgjidhet gjithashtu.
3. Paneli i djathtë thotë "Përzgjedhur: vija l3, pika p1" dhe shfaq një buton për çdo lidhje që përshtatet, si {{ui:∥ Paralele}} ose {{ui:• Bashkëpikë}}.
4. Zgjidh butonin. Skica zgjidhet menjëherë.

Nëse asnjë lidhje nuk përshtatet, paneli thotë "Asnjë lidhje nuk përshtatet me këtë përzgjedhje. Zgjidh një ose dy elementë (Shift+kliko shton)."

Lista e plotë e lidhjeve, çfarë kërkon secila dhe çfarë bën, është te [Lidhjet dhe përmasat e skicës](topic:sketch-relations).

Lidhjet shfaqen në skicë si simbole të vogla pranë gjeometrisë (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Pikat e bashkëpikës fshihen përveç rastit kur gjeometria është e zgjedhur ose lidhja ka probleme. Kliko një simbol për të zgjedhur lidhjen.

## Një shembull i plotë: profil mbajtëse në formë L

1. Skicoje mbi **Planin e përparmë**. Me veglën Vijë, nis nga origjina dhe kliko gjashtë qoshe të një L, duke përfunduar përsëri në origjinë. Zinxhiri mbaron vetvetiu kur kliko pikën e parë.
2. Vijat e vizatuara afër horizontales ose vertikales kanë tashmë lidhjet H dhe V, përveç të fundit: një vijë që mbaron në një pikë ekzistuese nuk merr lidhje automatike. Shtyp {{key:S}}, kliko vijën e fundit dhe zgjidh {{ui:V Vertikale}} në panelin e djathtë. Çipi thotë "Nën-përcaktuar · 4 shkallë lirie".
3. Shtyp {{key:D}}. Kliko vijën e poshtme, kliko poshtë saj, shkruaj `80`, {{key:Enter}}.
4. Kliko vijën e majtë, kliko majtas saj, shkruaj `60`, {{key:Enter}}.
5. Vendos përmasën `20` për vijën e shkurtër të sipërme dhe `45` për vijën vertikale të brendshme në të njëjtën mënyrë.
6. Çipi tani thotë **Plotësisht e përcaktuar** dhe e gjithë L kthehet në bojë.

## Rregullo një skicë mbi-përcaktuar

Kur një lidhje ose përmasë e re bie ndesh me të tjerat, PartCraft nuk lëviz asgjë. Gjeometria mbetet saktësisht siç ishte, lidhjet e përfshira bëhen të kuqe dhe shiriti i gjendjes i emëron:

- "Mbi-përcaktuar: Horizontale, Distanca 40 nuk mund të plotësohen të gjitha. Zhbëj, ose fshi njërën prej tyre." Lidhjet bien ndesh.
- "Mbi-përcaktuar: Paralele është tashmë e nënkuptuar. Fshije." Lidhja nuk shton asgjë: të tjerat e detyrojnë tashmë. (Anët e një drejtkëndëshi, për shembull, janë tashmë paralele.)

Për ta rregulluar:

1. Shtyp {{key:Mod+Z}} për të zhbërë ndryshimin e fundit, ose
2. Gjej elementin e kuq në listën **Lidhjet dhe përmasat** në panelin e djathtë (një grup që e mban është i hapur dhe i kuq) dhe zgjidh **Fshi** pranë tij. Mund të klikosh gjithashtu simbolin ose numrin e tij në skicë dhe të shtypësh {{key:Delete}}.

:::note
Nuk ka përmasa "të drejtuara" (referencë) në këtë version. Një përmasë që do të raportonte vetëm një madhësi që lidhjet e tjera e fiksojnë tashmë trajtohet si mbi-përcaktuar. Lexo madhësitë në panel: zgjidh një vijë dhe shiko butonat e Përmasës, ose kontrollo faktet e pjesës pasi të ekstrudosh.
:::

Një skicë mbi-përcaktuar me një konflikt të vërtetë e bën veçorinë që e përdor të dështojë ("Mbi-përcaktuar: 1 lidhje nuk mund të plotësohet."), dhe historia e shënon **⚠ gabim**. Një skicë që është vetëm e tepërt ndërtohet ende, me një ⚠ paralajmërim.

## Tërhiq për të gjetur çfarë është e lirë

Te Përzgjidh, tërhiq çdo pikë ose vijë blu. Zgjidhësi e lëviz sa më pak të jetë e mundur duke mbajtur çdo lidhje. Nëse tërheqja do të prishte një lidhje, gjeometria kthehet mbrapsht. Kjo është mënyra më e shpejtë për të parë cila përmasë mungon ende.

## Lista e lidhjeve

Kur nuk ka asgjë të zgjedhur, paneli i djathtë liston **Lidhjet dhe përmasat**. Çdo rresht ka:

- **Modifiko** (vetëm për përmasat): hap kutinë e numrit;
- **Përzgjidh**: e zgjedh në skicë;
- **Fshi**: e heq.

Lidhjet e një lloji që shfaqen më shumë se një herë ndajnë një rresht të vetëm, si "Bashkëpikë × 5" për një drejtkëndësh të lidhur me origjinën. Kliko rreshtin për ta hapur: çdo lidhje listohet sipas asaj që lidh ("pika p2, pika p4"), me **Përzgjidh** dhe **Fshi** të vetë. Vetë rreshti ka:

- **Përzgjidh**: i zgjedh të gjitha në skicë;
- **Fshi të gjitha**: i heq të gjitha me një hap ({{key:Mod+Z}} i sjell përsëri).

Një grup që mban një lidhje mbi-përcaktuar hapet vetvetiu, me emrin e tij të kuq. Përmasat listohen gjithmonë një për rresht, me vlerat e tyre.

Kur gjeometria është e zgjedhur, lista shfaq vetëm **Lidhjet në përzgjedhje**.
