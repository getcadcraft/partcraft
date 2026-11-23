---
title: Hvað er nýtt í 0.9 (eldra)
summary: PartCraft 0.9 bætir við ávölum milli flata og þykknun í fasthluta, samsetningum með þúsundum hluta, Skjalahvelfingu með útgáfum, Solid FEM styrkviðbót, tíu bogaaðferðum, breskum stálstærðum, prentstigi og viðbótum fyrir kvoðuprentun.
keywords: hvað er nýtt 0.9, eldri útgáfa, hvað er nýtt, útgáfuskýringar, breytingaskrá, 0.9, ávala milli flata, rúllandi kúla, ávala nokkrar brúnir, þykkva, fast efni úr flötum, STEP-skel, IGES-fasthlutur, skannaðar ávölur, stór samsetning, létt birting, 20000 hlutir, skjöl, hvelfing, útskráning, útgáfa, hvar notað, Rhino-tengill, grasshopper, 3dm, bendlar, verkstæðisgólf, verkröð, solid fem, endanlegt element, von Mises, eigintíðni, bogaaðferðir, 3 punkta bogi, breskir stálsniðar, blá bók, prentstig, kvoða, goo, ctb, bekkur, fletja út, hvað gefur sig fyrst, uppfæra á meðan ég breyti, brotálag, ólínulegt, flotmark, plastísk aflögun, snerting, calculix, hreyfirannsókn, úthreinsun, yfirborð, nurbs, slétta, hull, zebra, verkfræði, rafali, búinn líkami, skissa úr mynd, skölun fyrir prentun, skipting fyrir prentun, rýrnun, hreiðraðar plötur, G-kóði, teikning, mála göt, aðstoðarmaður, mcp, tungumál, tækjastikuraðir
from: 1dafd7c8
---

Þetta er það sem breyttist í PartCraft 0.9, samanborið við 0.8.1. Bogin yfirborð lokast nú í fasthluta, samsetningar með þúsundum hluta haldast nothæfar, Skjalahvelfing geymir útgáfur, og Solid FEM-viðbót athugar spennu í hluta. Hvert atriði segir hvar það er að finna.

## Nýtt í 0.9.1

- **Nákvæmur STEP-útflutningur.** {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} og {{ui:STEP AP214 (nákvæmt fast efni)}} virka nú. Göt, upphækkanir, ávalur, keilur, kúlur og tórus eru skrifuð á sönnum yfirborðum með sönnum hringjum sem brúnir, þannig að annað CAD- eða CAM-forrit getur tekið gat sem gat. Splines-hliðar, mótaðir þræðir og innfluttir möskvar haldast flatir þríhyrningar í sama fasthluta. Sjá [Útflutningur til prentunar, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP inn, nákvæmt STEP út.** STEP-skrá sem þú opnar heldur eigin flötum, strokkum, keilum, kúlum og torum, þannig að {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar þá aftur sem sanna yfirborð í stað þríhyrninga: bjálki frá birgja með boltagötum fer út með sömu fleti og hann kom inn með, auk þess sem þú skarst í hann. Splines-, sveigðir og snúnir fletir skráarinnar haldast þríhyrningar, og það sama gildir um líkama úr STL, OBJ og 3MF. Opnaðu STEP-skrána aftur fyrir hluta sem var vistaður áður. Sjá [Opna STEP-skrá og byggja á henni](topic:import-step).
- **Sannir hringir í DXF fyrir fletina.** {{ui:Flytja út}} › {{ui:DXF af skissunni eða sléttum fleti}} með völdum sléttum fleti skrifar nú kringluð göt sem hringi, með eigin miðju og radíus holunnar, fyrir laser-, plasma- eða vatnsskurðarborð. Aðrar kringlóttar brúnir eru enn þríhyrningar.
- **Nákvæmt STEP fyrir verkstæðið.** Í {{ui:Framleiðsla}} skrifar {{ui:Nákvæmt STEP (vinnuhnit)}} hlutann með uppruna sínum í vinnuuppruna uppsetningarinnar og Z eftir verkfærisásnum, en það eru hnitin sem G-kóðinn notar. Sjá [Búa til slóðir og G-kóða](topic:manufacture#exact-step-for-the-shop).

## Nýtt

### Yfirborð og fasthlutar

- **Ávala milli flata.** Veldu {{ui:Yfirborð}} í reitnum {{ui:Vinnusvæði}}, síðan {{ui:Rúnun milli flata}}. Veldu tvo fleti eins fasthluta, sláðu inn radíusinn (og {{ui:Radíus í enda (mm, 0 = sami)}} fyrir radíus sem breytist eftir brúninni). Niðurstöðulínan segir hversu langt ávalan er frá hugsjónarkúlurúllunni, og radíus sem passar ekki er hafnaður með nafngreindum fleti. {{ui:Rúna nokkrar brúnir}} rúnar margar brúnir í einu skrefi; hakaðu við {{ui:Horn (kúluflatarbútur þar sem þrír mætast)}} fyrir kúluhorn þar sem þrjár ávalaðar brúnir sléttra flata mætast. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Þykkva í fasthluta.** {{ui:Þykkva í fasthluta}} í sama vinnusvæði gefur yfirborði þykkt; {{ui:Hin hliðin}} stækkar það hina leiðina. Fellingu eða sjálfsskurði er hafnað með yfirborðinu og staðnum nefndum.
- **Fasthlutar úr yfirborðum.** Afmörkuð yfirborð má sameina með sameiningu, frádrætti og skurði og setja inn í hlutann sem eitt afturkallsskref. STEP skrifar fasthluta sem eina lokaða skel og IGES sem einn fasthluta; báðir lesast aftur sem fasthlutar. Ef flötin para ekki saman brún fyrir brún fær skráin aðskilda fleti og stöðulínan segir það. Fasthluta má einnig búa til í hnútaritlinum; sjá [Hnútaritill](topic:nodes).
- **Ávalar og breytilegar ávölur í skönnunum.** Þegar þú fellir yfirborð að skönnun eru leitaðar líka rúnaðar ávalar (tórus) og ávalar með breytilegum radíus eftir nokkurn veginn beinni brún, og þær eru taldar upp með radíus sínum. Það er prófað aðeins á tilbúnum skönnunum.

### Samsetningar, skjöl og tenglar

- **Stórar samsetningar.** Hlutar sem eru afrit deila einum möskva, og {{ui:Sýn}} › {{ui:Létt birting}} teiknar kassa svo að sýnin haldist á hreyfingu (það kveikir af sjálfu sér á mjög stórum samsetningum; val og liðir nota enn raunhlutana). Hlutatréð sýnir fyrstu raðirnar og hnappinn {{ui:Sýna 700 í viðbót}} fyrir restina. Samsetningarskrár mega hafa allt að 50.000 tilvik og 100.000 liði. Sjá [Smíðaðu samsetningu](topic:build-assembly).
- **Skjöl.** {{ui:Skjöl…}} í **Skrá**-hópnum opnar glugga yfir verkefnamöppu: útskráning og innskráning, endurskoðunarstafir, stöður (í vinnslu, til yfirferðar, gefið út, úrelt), saga, hvar notað og efnisyfirlit. Sjá [Skjöl og endurskoðanir (hvelfingin)](topic:documents-walkthrough).
- **Lifandi Rhino-tengill.** Eitt handrit, `cadcraft_link.py`, fylgist með Rhino- eða Grasshopper-skjali og sendir aðeins það sem breyttist inn í PartCraft, þar sem innflutt eiginleiki byggist upp á nýju lögunina. Hann virkar í eina átt og þarf Studio. Sjá [Lifandi .3dm-tengill](topic:live-3dm-link).
- **Sjáðu bendla hvers annars.** Í sameiginlegri lotu sést bendill hvers og eins með nafni sínu og eiginleikanum sem hann hefur valið. Sjá [Vinna lifandi með öðrum](topic:work-live).
- **Verkstæðisgólfið.** Kveiktu á viðbótinni Verkstæðisgólf í {{ui:Stillingar}} › {{ui:Viðbætur}}. Eftir að þú sendir forrit úr {{ui:Framleiðsla}} getur flipinn þess {{ui:Bæta í verkröð verkstæðisins}} eða {{ui:Vista sem verkskrá}}. Það sendir aldrei og ræsir aldrei vél.

### Greining og hlutar

- **Solid FEM-viðbót.** Kveiktu á {{ui:Solid FEM}} í {{ui:Stillingar}} › {{ui:Viðbætur}} (hún er slökkt þar til þú gerir það) og flipi {{ui:Solid FEM}} birtist í hægra spjaldinu. {{ui:Möskva hlutinn}}, veldu fasta fleti og álag í 3D-sýninni, {{ui:Leysa}}, og teiknaðu tilfærslu, von Mises-spennu eða formgerð með {{ui:Sýna á líkaninu}}. Sjá [Solid FEM: spennuathugun](topic:solid-fem-check).
- **Bogi í skissum, á tíu vegu.** Örin við hliðina á {{ui:Bogi}} í skissutækjastikunni sýnir 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length og Continue. Sjá [Teiknaðu boga á tíu vegu](topic:sketch-arc-methods).
- **Breskar stálstærðir.** Burðarhlutir geta notað 976 breska snið (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); sláðu inn stærð eins og `305x165x40 UB`. Sjá [Burðarhlutar](topic:structural-members).

### Prentun

- **Prentstig.** Hnappurinn {{ui:Prentstig}} á tækjastikunni (viðbótin 3D-prentun, kveikt sjálfgefið) setur líkama hlutans á strikaðan bekk: {{ui:Fletja út}}, {{ui:Snúa 90°}}, {{ui:Raða á bekkinn}}, {{ui:Passa allt á bekkinn}}, {{ui:Forskoða lög}}, síðan {{ui:Senda í þrívíddarprentara}} yfir USB, Klipper (Moonraker), OctoPrint eða PrusaLink. Ekkert er sent fyrr en þú staðfestir, og hlutnum þínum er aldrei breytt. Fyrir STL- eða 3MF-skrá í staðinn, sjá [Undirbúðu hluta fyrir þrívíddarprentun](topic:print-3d).
- **Kvoðuprentun.** Viðbætur í {{ui:Stillingar}} › {{ui:Viðbætur}}, allar slökktar þar til þú kveikir á þeim: kvoðusneiðari, lýsingarpróf, og skráarsnið Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Sneiðing keyrir á vinnuþræði, þannig að síðan svarar áfram.

## Í öllum forritum

- Sérhver vísbending við bendil er Bootstrap-verkfæraábending.
- Upphafsábendingin hefur lokunarhnapp; hún helst lokuð.
- Röð flipa spjalds sem passar ekki skrunar til hliðar í stað þess að vera skorin af.
- Vafraflipinn sýnir nafn opna skjalsins á undan PartCraft | CadCraft.
- {{ui:Stillingar}} sýnir vinnusvæðis{{ui:Skipulag}} sem fellilista með valkostum, og tungumálareiturinn listar hvert tungumál sem smíðin hefur.
- Þyngd og hitastig eru einingategundir í einingastillingunum.

## Lagfært

- Örvalmyndin Bogi í skissu sýnir nú hverja aðferð.
- Viðbótartækjastikan og titill vafraflipans voru lagfærð 2026-11-09.

## Heiðarleg takmörk

- Nákvæmt STEP var lesið til baka í OpenCascade (gildir fasthlutar, rúmmál jöfn þeim sem reiknuð voru í höndunum). Það hefur ekki enn verið opnað í hverju einasta CAD- eða CAM-forriti, og samsetning er ekki skrifuð sem nákvæmt STEP.
- Ekkert hefur verið prentað á alvöru prentara. Sneiðing, G-kóði og kvoðuskrár voru lesnar til baka af okkar eigin forritum eða staðgengilsprentara; ekkert af kvoðusniðunum hefur verið hlaðið á prentara, og prentarastærðir og lýsingar eru upphafsgildi.
- Solid FEM er línulegt, samsætið og teygjanlegt, eitt efni á hvern hluta, án snertingar, afmyndunar eða knekkingar. Spenna við föst fleti og skörp horn fer eftir möskvanum. Það er hjálpartæki til athugunar, ekki yfirfarið af verkfræðingi.
- Tímamælingar stórra samsetninga koma frá þjóni án GPU; full-smáatriða rammi með 20.000 hlutum tekur samt sekúndur þar.
- Ávalar virka á pörum flata; það er engin almenn hornsamruni og engin ávala milli flata sem mætast ekki.
- Rhino-tengillinn hefur aldrei keyrt inni í alvöru Rhino eða Grasshopper. Skjöl voru prófuð af tveimur forritum á einni möppu, ekki af tveimur manneskjum á netdrifi.
- Að fella yfirborð að alvöru skönnun hefur ekki fengið handprófun. Tungumál önnur en enska eru vélræn drög.
- Windows-uppsetningarforrit eru ekki kóðaundirrituð og macOS-diskmyndin er ekki staðfest af Apple. Sjá [Bilanaleit](topic:troubleshooting).

Eldri breytingar eru í [Hvað er nýtt í 0.7](topic:whats-new-0-7).

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í PartCraft 0.8 og 0.8.1, samanborið við 0.7. Hermunin svarar á meðan þú breytir og segir þér hvað gefur sig fyrst, samsetningar fá hreyfirannsóknir, og nýju vinnusvæðin smíða bogin yfirborð og hluta stærða út frá eðlisfræði. 0.8.1 er lítil lagfæringarútgáfa.

### Nýtt

**Hermun**

- **Uppfæra á meðan ég breyti.** Hakaðu við {{ui:Uppfæra á meðan ég breyti}} í Leysa-blokkinni og svörin fylgja breytingum þínum. Breyttu mál, álagi eða efni og fljótlegt svar, reiknað með þáttum fjórum sinnum stærri, birtist þegar í stað; þegar þú stoppar í um sekúndu kemur hin nákvæma, betrumbætta lausn rannsóknarinnar í staðinn. Niðurstöðurnar segja hvort þú horfir á. Á stálbita með einum enda var fljótlega svarið innan 1 % í aflögun og um 4 % í spennu miðað við betrumbætta svarið. Sjá [Athugaðu spennu og aflögun](topic:simulation#update-while-you-edit-live).
- **Hvað gefur sig fyrst.** Fyrir stöðug- eða knekkingarrannsókn skalar {{ui:Hvað gefur sig fyrst?}} í **Brjóttu það**-blokkinni álagið þar til hluturinn gefur sig. Hún listar, verst fyrst, brotálagsstuðulinn að fyrstu afmyndun (með rauðu merki þar sem spennan toppar) og knekkingarstuðulinn. Stuðull undir 1 þýðir að hluturinn gefur þegar sig undir álaginu, og Vandamál sýnir villu. Stuðlarnir koma úr línulegri rannsókn, þannig að þeir eru jafn góðir og hún. Sjá [Athugaðu spennu og aflögun](topic:simulation#find-out-what-breaks-first-break-it).
- **Afmyndun og snerting.** Tvær rannsóknagerðir í viðbót: ólínuleg þar sem efnið fylgir beinu línu sinni upp að flotmarki og síðan flatari halla, með plastískri aflögun teiknaðri; og snertirannsókn þar sem aðskildir hlutar þrýsta hver á annan (núningslaust) eða haldast fastir (bundið). Álagsþrep sem getur ekki sest, eða hlutar sem sökkva of langt hver í annan, birtast í Vandamálaspjaldinu. Núningur, stór renna, stórir snúningar, stórar aflögun og þreyta eru ekki leyst. Sjá [Athugaðu spennu og aflögun](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Hönnun fyrir CalculiX.** {{ui:Flytja út}} › {{ui:CalculiX-hönnun (.inp)}} vistar rannsóknina fyrir CalculiX, sérstakt forrit sem þú setur upp og keyrir sjálfur; {{ui:Flytja út}} › {{ui:CalculiX-niðurstöður (.frd)}} les niðurstöðuskrána þess til baka á sama möskva. PartCraft ræsir aldrei það forrit, og það segir frá því ef hluturinn breyttist eftir að hönnunin var vistuð.

**Samsetningar**

- **Hreyfirannsóknir.** {{ui:Samsetning}} › {{ui:Hreyfing}} keyrir gildi eins liðs yfir tíma sem þú gefur (fasta hraða, mýktan, sínus eða út og til baka), setur samsetninguna í hvert skref með liðum sínum og lokuðum lykkjum, og segir hvað rekst á og hversu nálægt hlutar koma. {{ui:Bæta við punkti}} teiknar stöðu punkts, hraða og hröðun, gildi liðarins og úthreinsun gegn tíma; {{ui:Vista CSV}} og {{ui:Vista graf}} skrifa þau út. Eftir {{ui:Keyra}} færir Skrefin í keyrslustikunni samsetninguna á hvaða skref sem er. Stillingar rannsóknarinnar eru vistaðar í samsetningarskránni. Hraði og hröðun koma úr skráðum stöðum, þannig að notaðu fleiri skref ef skarpur toppur birtist of lágur. Sjá [Athugaðu samsetningu fyrir árekstra og hreyfingu](topic:check-assembly#a-motion-study).

**Yfirborð og hlutar úr eðlisfræði**

- **Yfirborðsvinnusvæði.** Veldu {{ui:Yfirborð}} í reitnum {{ui:Vinnusvæði}} fyrir NURBS-ferla og -yfirborð við hliðina á hlutanum: {{ui:Ferill}}, {{ui:Brú milli sniða}}, {{ui:Ferilsdráttur}}, {{ui:Samræma}} og {{ui:Sebra}}, með samfellu (G0, G1 eða G2) mældri á nákvæmu yfirborðunum og brún sem er verri en þú baðst um skráð í Vandamál með Samræmingarlagfæringu. {{ui:Slétta}} mælir sveigjulínur fyrir beygjupunkta og breytingar á sveigju og endurbyggir þá ósléttu innan vikmarka þinna. Yfirborð eru vistuð í hlutaskránni og breyta ekki eiginleikum hlutans. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Verkfræðivinnusvæðið.** Veldu {{ui:Verkfræði}} í vinnusvæðisskiptinum, veldu rafal og smelltu á {{ui:Nýtt}}: handrit ákvarðar stærð hluta út frá því sem hann á að gera (hita til að flytja, flæði, þrýsting, efni, prentunaraðferð) með kennslubókaformúlum og smíðar hann, skilar síðan tölunum sem það notaði með heimildum sínum, framleiðsluathugunum sínum og skrám fyrir greiningartól. Sömu inntök gefa sama hlut á hvaða tölvu sem er. Rafallinn er geymdur í hlutanum, og það að opna hluta keyrir aldrei handrit. Sjá [Hlutar úr eðlisfræði: rafalar](topic:engineer-generators) og [Skrifaðu rafal](topic:write-a-generator).

**Skissur, teikningar og smíði**

- **Skissa úr mynd.** {{ui:Eiginleikar}} › {{ui:Meira}} › {{ui:Skissa út frá mynd…}} rekur mynd af flötum hlut á sléttum grunni (útlína og göt) eða pennateikningu í línur, boga og hringi. Þú gefur eina lengd, athugar forskoðunina og býrð til skissuna. Sjá [Grunnatriði skissunar](topic:sketch-basics#a-sketch-from-a-photo).
- **Skölun og skipting fyrir prentun.** {{ui:Flytja út}} › {{ui:Skölun fyrir prentun (STL eða 3MF)…}} skalar eftir ásum án þess að breyta hlutnum, til dæmis fyrir rýrnunarsvigrúm. {{ui:Flytja út}} › {{ui:Skipting fyrir prentun (zip-skrá með bitum)…}} sker hlut sem er of stór fyrir bekkinn þinn í númeruð stykki tengd með pinnum, lyklum, svölubönd, dorna-götum eða seguls-vösum. Sjá [Prentaðu í þrívídd](topic:print-3d).
- **Hreiðraðar plötur í G-kóða.** {{ui:Flytja út}} › {{ui:Raðaðar plötur í G-kóða}} les hreiðraða DXF-skrá og gerir eitt forrit fyrir hverja plötu í gegnum úttakið sem þú velur: göt og útskurðir fyrst, síðan útlínurnar. Það skipuleggur ekki innleiðslur, skurðarröð né sameiginlegar brúnir. Sjá [Raða flötum hlutum á plötur](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Teikningar sem gera meira sjálfar.** {{ui:Blað}} › {{ui:Sjálfvirkt}} velur minnsta A-stærðarblað sem heldur skoðununum í stærsta staðlaða kvarða upp í 1:1. {{ui:Málsetja götin}} setur miðmerki á hvert gat, eina tilvísun fyrir hverja stærð og staðsetningar frá neðra vinstra horni skoðunarinnar. Sjá [Gerðu teikningu](topic:drawing-pdf).

**Í öllum forritum**

- **Tungumál.** Forritin koma á 54 tungumálum. Þau sem eru utan ensku eru vélræn drög þar til móðurmálsmaður hefur lesið þau.
- **Raðir á tækjastiku.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} velur Vefja (eins og áður), 2 raðir eða 1 röð; stika sem passar ekki skrunar til hliðar. Eiginleikaborði PartCraft sýnir mest notaða verkfærið stórt og felur afbrigðin á bak við skiptihnapp.
- **Tengdu gervigreindina þína.** Studio er miðstöðin til að tengja aðstoðarmann af þínu eigin til allra átta forritanna, með lesrétt, tillögu- eða breytingarheimild fyrir hvert forrit. Tengdur aðstoðarmaður getur mátað hlut út frá setningu, eins og festingu fyrir álag, sýnt vinnu sína og allar athuganir, og smíðað hann; hann segir frá því sem hann athugaði ekki (spennuþéttni, þreytu, skrið í plastefnum). Sjá [Notaðu PartCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

### Lagfært í 0.8.1

- **Fullskjár bendill frýs.** Bendilsval er nú stillt. Orsökin er besta túlkun okkar og var ekki staðfest með þeim sem tilkynnti hana.
- **Tungumál við keyrslu.** Studio og pakkaðar útgáfur geta skipt um tungumál meðan þær keyra; áður voru þær aðeins á ensku. Þetta er ekki enn prófað á öllum stýrikerfum: segðu okkur ef tungumálið breytist ekki.

### Ekki í þessari útgáfu enn

- Tengdu gervigreindina þína er ekki tilbúin: tenging með einum smelli inni í Studio, hýsti tengillinn fyrir gervigreind í vafra, þinn eigin API-lykill inni í Studio og birti MCP-pakkinn eru ekki lofuð. Studio hefur enga gervigreind sjálf.
- Studio er ekki kóðaundirrituð: Windows gæti varað við, og macOS biður um hægri smell og síðan Opna. Sjá [Bilanaleit](topic:troubleshooting).
- Vikmarkskeðjur eru enn í einni stefnu: sjá [Vikmarkskeðjur](topic:tolerance-stackup).
- Það sem eftir er er skráð í [Það sem er ekki smíðað enn](topic:not-built-yet).

Eldri breytingar eru í [Hvað er nýtt í 0.7](topic:whats-new-0-7).
