---
title: Nga një modelues tjetër parametrik
summary: Si zakonet e modeluesve parametrikë të desktopit përkthehen në PartCraft, dhe dallimet që i zënë në befasi përdoruesit me përvojë gjatë orës së parë.
keywords: kalim, migrim, i njohur, menaxher veçorish, pema e projektimit, përmasë inteligjente, ekstrudim boss, ekstrudim prerës, magjistari i vrimave, lidhje, zbulim ndërhyrjesh, shirit kthimi, menaxher vetish, mouse, dallime
from: fbacaee1
---

Nëse projekton pjesë në SolidWorks, shumica e idesë së PartCraft do të të duken të njohura: skica mbi planet Front, Top dhe Right, lidhje dhe përmasa inteligjente, një histori veçorish me një shirit kthimi, dhe montime të vendosura me lidhje. Mënyra si arrihen ndryshon në disa pika, dhe ky version i parë bën më pak. Kjo faqe përkthen zakonet e tua dhe liston befasitë.

## Zakonet, të përkthyera

| Je mësuar me | Në PartCraft |
|---|---|
| Pema e projektimit në të majtë | Historia në të majtë: planet, pastaj veçoritë, skicat e zhvendosura nën veçorinë që i përdor |
| Planet Front, Top dhe Right | Të njëjtët tre, përmes origjinës. Front është plani XY, Top është XZ, Right është YZ; Y drejt lart |
| Skicë mbi një plan ose sipërfaqe, pastaj këndi i konfirmimit për të dalë | {{ui:Skica}} ({{key:S}}) mbi një plan ose sipërfaqe të sheshtë të zgjedhur; {{ui:Dil}} ose {{key:Esc}} derisa mbyllet |
| Përmasë inteligjente | {{ui:Përmasë}} ({{key:D}}). Kliko një ose dy elemente, pastaj vendin ku shkon numri. Vendi ku e vendos zgjedh horizontale, vertikale ose të rreshtuar |
| Shto lidhje në panelin e vetive | Zgjidh elementet, pastaj butonat e lidhjeve në panelin e djathtë (Bashkëvendosur, Horizontale, Paralele, Tangjente, Barabarte e kështu me radhë) |
| Lidhje automatike gjatë skicimit | Kapjet shtojnë lidhje bashkëvendosjeje, pikë-mbi-kurbë, horizontale dhe vertikale |
| Ngjyrat e skicës blu / e zezë / e kuqe | I njëjti ide: blu nën-përcaktuar, e zezë plotësisht e përcaktuar, e kuqe mbi-përcaktuar. Çipi shfaq shkallët e lirisë që mbeten |
| Vija qendrore për rrotullime | {{ui:Vija qendrore}} ({{key:N}}); {{ui:Rrotullo}} përdor vijën e parë qendrore, përveç nëse zgjedh një bosht tjetër |
| Rrumbullakim skice | {{ui:Rrumbullakim}} ({{key:F}}) në një skicë: kliko cepin, shkruaj rrezen |
| Ndërrimi i gjeometrisë ndihmëse | {{ui:Ndërtim}} ({{key:Q}}) |
| Shtesë (boss) ekstrudimi | {{ui:Ekstrudo}}: Blind, Mes-plan, Deri te sipërfaqja / tjetra / kulmi, Zhvendosja nga sipërfaqja, drejtimi i dytë, pjerrësia, një kontur (Zgjidh rajonet) |
| Prerje ekstrudimi | {{ui:Prit}}: fillon si Përmes gjithë; kalo në Blind për një xhep |
| Shtesë / prerje rrotulluese | {{ui:Rrotullo}} / {{ui:Më shumë}} › {{ui:Prerje e rrotulluar}} |
| Plan / bosht / pikë referuese | {{ui:Më shumë}} › {{ui:Plani}}, {{ui:Boshti}}, {{ui:Pikë}} (shih [Planet, boshtet dhe pikat referuese](topic:reference-geometry)) |
| Shtesë ose prerje me shtrirje / ndërlidhje, pjerrësi | {{ui:Më shumë}} › {{ui:Draft}} mbi sipërfaqe të sheshta (shih [Shtrirja, ndërlidhja dhe pjerrësia](topic:sweep-loft-draft)). {{ui:Shtrirja}} dhe {{ui:Ndërlidhja}} nuk janë ndërtuar ende në këtë version (kërkojnë një kernel të saktë) |
| Magjistari i vrimave | {{ui:Vrimë}} në çdo pikë skice të lirë: e thjeshtë, numërim, zhytje konike (90° / 82°) ose fill metrik ISO të prerë M2–M24, përmes ose me thellësi |
| Model linear / rrethor, pasqyrim | {{ui:Lineare}}, {{ui:Rrethore}}, {{ui:Pasqyrimi}} (veçoritë ose i gjithë trupi) |
| Rrumbullakim dhe pjerrësi në brinjë | {{ui:Rrumbullakim}} / {{ui:Pjerrësi}}: kliko një brinjë, {{key:Shift}}+klik për të tjera, pastaj butoni. Një rreze; pjerrësi të barabarta, me dy distanca ose distancë-kënd. Në këtë version vetëm brinjë të drejta midis dy sipërfaqeve të sheshta, dhe rrumbullakimet që takohen në një cep prerën me kthim. Rrumbullakoni ose skajoni brinjët e lakuara në skicë ({{ui:Rrumbullakim}} në një skicë, {{key:F}}) |
| Zbraz | {{ui:Zbraz}}: kliko sipërfaqet e sheshta për t'u hapur, pastaj butonin. Një trashësi muri |
| Hap një skedar STEP | {{ui:Hap}}: lexohet si trekëndësha, një trup solid për të ndërtuar mbi të ([Hap një skedar STEP](topic:import-step)) |
| Redakto veçorinë, pastaj OK | Kliko veçorinë; ndrysho numrat djathtas; rindërtohet ndërsa shkruan. Nuk ka OK, nuk ka Anulo: përdor {{key:Mod+Z}} |
| Redakto skicën | Kliko dy herë skicën në histori |
| Rindërto | Automatik pas çdo ndryshimi. Nuk ka tast rindërtimi |
| Pezullo / riaktivizo | {{ui:Pezullo}} / {{ui:Riaktivizo}} në panelin e djathtë |
| Zvarrit shiritin e kthimit | {{ui:Kthehu deri këtu}} te një veçori; kliko "Shiriti i kthimit · vazhdo përpara" për t'u kthyer |
| Zvarrit një veçori në pemë për ta riorganizuar | {{ui:Zhvendos lart}} / {{ui:Zhvendos poshtë}} ose {{key:Alt+Up}} / {{key:Alt+Down}}; refuzohet me arsyen kur do të prishte një varësi |
| Ndrysho përmasat duke klikuar dy herë mbi model | Zgjidh veçorinë: përmasat e skicës së saj listohen në panelin e djathtë |
| Lidhje: bashkëvendosje, koncentrike, distancë, kënd | {{ui:Lidhja}} ({{key:J}}): zgjidh një sipërfaqe të sheshtë për secilën pjesë; lidhja i vendos faqe më faqe. **Qendra në** një bosht vepron si koncentrike; **Zhvendosja** si distancë; **Kënd** si kënd |
| Pjesë e fiksuar | Pjesa e parë është e fiksuar; {{ui:Bëje pjesën e fiksuar}} e ndryshon |
| Fut komponent | {{ui:Shto kopje}} ose {{ui:Dyfisho}} (një kopje tjetër) ose {{ui:Fut}} (nga një skedar pjese) |
| Redakto pjesën në montim | {{ui:Redakto pjesën}}, pastaj {{ui:Kthehu}} |
| Zbulim ndërhyrjesh | {{ui:Përplasje}} |
| Lëvizja e një komponenti për të parë lëvizjen | Tërhiq rrëshqitësin e këndit ose zhvendosjes së një lidhjeje rrotulluese ose rrëshqitëse; {{ui:Kontrollo lëvizjen për përplasje}} e skanon. Një pjesë pa lidhje: **Zhvendos me dorë** (shigjeta për tërheqje, ose vlera të shkruara) |
| Matje / inspektim | {{ui:Pamjet}}, pastaj {{ui:Matje}} ({{key:M}}): distanca, kënde, rreze, sipërfaqe; {{ui:Veti masore}} |
| Pamje e shpërthyer, tabela e materialeve | Në një montim pa asgjë të zgjedhur: **Pamjet e shpërthyera** dhe **Tabela e materialeve** në panelin e djathtë |
| Vetitë masore | Kutia **Pjesa**: vëllimi, sipërfaqja, madhësia, e solidit të fasetuar (pak më e ulët te format e rrumbullakëta). Pa masë: nuk ka materiale ende |
| Ruaj, Ruaj si STEP | {{ui:Ruaj}} shkarkon një `.partcraft.json`; {{ui:Eksporto}} ka STL, 3MF, STEP të saktë (AP242 ose AP214), STEP të fasetuar, DXF dhe një vizatim PDF |
| Bëj një vizatim nga pjesa | {{ui:Vizatimi}}: një fletë automatike A3 me tre pamje, izometrike, një prerje, një detaj, referenca, kornizat e kontrollit të gjeometrisë dhe simbolet e përfundimit. Vetëm përmasat e përgjithshme vihen |
| Tërhiq me butonin e mesit për të rrotulluar | **Tërhiq me të majtën** rrotullon këtu. Tërhiq me butonin e mesit ose të djathtë për të lëvizur. Rrota zmadhon te treguesi |
| Orientimi i pamjes, Normale me | Menuja {{ui:Pamjet}}; {{ui:Normale me}} për një sipërfaqe, plan ose skicë të zgjedhur |
| Zmadho për t'u përshtatur (F) | {{key:F}}, ose {{ui:Përshtat}} (në një skicë, {{key:F}} është veglë Rrumbullakim) |
| Menutë e klikimit të djathtë | Asnjë. Tërhiq me të djathtën për të lëvizur; në një skicë, klikimi i djathtë mbyll një zinxhir vijash |

:::tip
Nëse duart të njohin SolidWorks, zgjidh stilin e menusë {{ui:Pema e veçorive}} te {{ui:Cilësimet}} › {{ui:PartCraft}} › {{ui:Menutë, tastet dhe miu}}: një shirit me skeda Veçori, Skicë, Sipërfaqe, Vlerësim, Vizatim, Montim dhe Pamje, butoni i mesit rrotullon, {{key:Shift}} dhe butoni i mesit lëvizin, dhe butoni i majtë vetëm zgjedh. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).
:::

## Dallime që të zënë në befasi

**I gjithë skica është profili.** Ekstrudimi dhe Rrotullimi përdorin çdo lak të mbyllur në skicë. Nuk mund të zgjedhësh një rajon ose një kontur të vetëm të një skice për një veçori. Përdor një skicë për çdo veçori.

**Cilën skicë merr një veçori.** Një veçori përdor skicën që sapo mbylle ose atë të zgjedhur në histori. Pa asgjë të zgjedhur merr skicën më të re që asnjë veçori nuk e përdor ende. Nëse merr atë të gabuar, zgjidh skicën e duhur dhe zgjidh përsëri veçorinë.

**Ndryshimet zbatohen ndërsa shkruan.** Nuk ka dialog veçorie me OK dhe Anulo. Çdo numër rindërtohet menjëherë, dhe {{key:Mod+Z}} është rruga e kthimit. Lista e zhbërjeve mbulon redaktimet e skicës, veçoritë dhe cilësimet njësoj.

**Mbi-përcaktimi nuk lejohet kurrë të qëndrojë në heshtje.** Nuk ka përmasa të drejtuara (referencë). Një përmasë që lidhjet e tjera e përcaktojnë tashmë raportohet si mbi-përcaktuar ("është tashmë e nënkuptuar. Fshije."). Një përmasë në konflikt e lë gjeometrinë të paprekur dhe bëhet e kuqe. Fshije një, ose zhbëje.

**Sipërfaqet dhe ndërlidhjet nuk janë ndërtuar ende; rrumbullakimet, pjerrësitë, zbrazjet dhe draft-et kanë kufizime.** Ky version i PartCraft ndërton çdo pjesë me kernelin e rrjetës; çipi i shiritit të statusit thotë gjithmonë "Kerneli i rrjetës". Rrumbullakimet dhe pjerrësitë punojnë mbi brinjë të drejta midis dy sipërfaqeve të sheshta, dhe aty ku rrumbullakimet takohen në një cep, ato prihen, jo përzihen. Zbrazjet hapen, dhe draft-et ndryshojnë pjerrësinë, vetëm te sipërfaqet e sheshta. Veçoritë që kërkojnë një kernel të saktë mbeten të klikueshme, por thonë "nuk është ndërtuar ende" kur zgjidhen. Shih [Kerneli i rrjetës](topic:solid-kernels) dhe [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

**Dy butona të quajtur Rrumbullakim.** Në një skicë, {{ui:Rrumbullakim}} ({{key:F}}) rrumbullakos një cep skice. Në pjesë, {{ui:Rrumbullakim}} te grupi Veçori rrumbullakos brinjët e solidit (brinjë të drejta midis sipërfaqeve të sheshta në këtë version). Nuk ka shtrirje ose ndërlidhje në këtë version: shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

**Vrimat kërkojnë pika të lira.** {{ui:Vrimë}} shpon në pika të bëra me veglën Pikë. Qendrat e rretheve dhe skajet e vijave nuk numërohen.

**Përmes gjithë është vetëm për prerje.** Një shtesë kërkon një thellësi. Nuk ka ende kushte fundi si "deri te kulmi / sipërfaqja / tjetra".

**Solidi është i fasetuar.** Kerneli i rrjetës ndërton sipërfaqe të rrumbullakëta nga faceta të sheshta, kështu që pamja, vëllimet, eksportet STL dhe 3MF janë të gjitha prej tyre: **Kurbat** te paneli i pjesës e bën më të imët. Eksporti i saktë STEP nuk është: ai shkruan sipërfaqe të rrumbullakëta mbi sipërfaqet e tyre të vërteta.

**Vetëm milimetra.** Nuk ka ende cilësim inç. Shumëzo madhësitë në inç me 25.4 kur i shkruan.

**Y është lart.** Plani Front të shikon ty dhe Top shikon nga lart mbi pjesën, siç pret, por boshti lart i botës është Y. Eksportet STL, 3MF dhe STEP të saktë kthehen me Z lart; STEP i fasetuar mban Y lart.

**Lidhjet janë sipërfaqe, jo çifte gjeometrish.** Një lidhje gjithmonë nis nga dy sipërfaqe të sheshta të vendosura faqe më faqe. Për një kunj në një vrimë, zgjidh sipërfaqen e sheshtë përreth vrimës dhe shpatullën e kunjit, pastaj vendos **Qendra në** në boshtin e vrimës dhe boshtin e rrotullimit të kunjit. Pjesët që lidhjet nuk i arrijnë mbeten aty ku u futën; nuk mund t'i tërheqësh. Lidhjet në një unazë nuk zgjidhen.

**Ruajtja është një shkarkim.** Nuk ka skedar që e mban duke e mbishkruar vazhdimisht. Çdo ruajtje është një skedar i ri në dosjen e shkarkimeve. Emëro pjesën së pari, dhe mbaj skedarët në një dosje projekti.

**Nuk ka menu kontekstuale, nuk ka skeda menaxheri komandash.** Gjithçka është në shiritin e veglave dhe panelin e djathtë, dhe shiriti i veglave ndryshon sipas asaj që po bën: veglat e skicës shfaqen vetëm në një skicë, veglat e montimit vetëm në një montim.

**Tastet janë shkronja të vetme brenda një skice.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} dhe {{key:S}} zgjedhin vegla pa modifikues. Shih [Tastet dhe miu](topic:keyboard).
