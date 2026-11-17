---
title: Hvað er nýtt í 0.9
summary: PartCraft 0.9 bætir við fyllingum milli flata og þykknun í fasta hluti, samsetningum með þúsundum hluta, Skjalahvelfingu með útgáfum, Solid FEM-viðbót fyrir álag, tíu bogaaðferðum, breskum stálstærðum, Prentstigi og viðbótum fyrir kvoðuprentun.
keywords: hvað er nýtt, release notes, útgáfuskýringar, breytingaskrá, 0.9, fylling milli flata, rúllandi kúla, rúna nokkrar brúnir, þykkna, fastur hluti úr yfirborði, step skel, iges fastur hluti, skanna rúnur, stór samsetning, léttbirting, 20000 hlutar, skjöl, hvelfing, útskrá, útgáfa, hvar notað, rhino-tenging, grasshopper, 3dm, bendlar, verksmiðjugólf, verkaröð, solid fem, endanleg þáttaaðferð, von mises, eigintíðni, bogaaðferðir, 3-punkta bogi, breskir stálprófílar, blað, prentstig, kvoða, goo, ctb, bekkur, leggja flatt, hvað er nýtt, breytingaskrá, 0.8, 0.8.1, útgáfa, nýir eiginleikar, lifandi greining, uppfæra meðan breytt er, brjóttu hann, hvað gefur sig fyrst, hleðsluþáttur, ólínulegt, flæði, plastísk aflögun, snerting, calculix, hreyfirannsókn, bil, yfirborð, nurbs, slétta, skrokkur, samræma, sebra, verkfræðingur, rafall, mynd í skissu, skala fyrir prentun, skipta fyrir prentun, rýrnun, hreiðraðar plötur, g-kóði, teikning, mál á götum, aðstoðarmaður, mcp, tungumál, línur tækjastikunnar
from: 96d9fbfa
---

Þetta er það sem breyttist í PartCraft 0.9, miðað við 0.8.1. Frjáls form lokast nú í fasta hluti, samsetningar með þúsundum hluta haldast nothæfar, Skjalahvelfing geymir útgáfur, og Solid FEM-viðbót athugar álag í hluta. Hvert atriði segir hvar það er að finna.

## Nýtt í 0.9.1

- **Nákvæmt STEP-útflutningur.** {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} og {{ui:STEP AP214 (nákvæmt fast efni)}} virka nú. Göt, upphækkanir, ávalir, keilur, kúlur og tórusar eru skrifuð á sönnum yfirborðum sínum með sönnum hringjum sem brúnum, svo annað CAD- eða CAM-forrit geti valið gat sem gat. Splæsihliðar, mótaðir þræðir og innfluttir möskvar haldast flatir facetar í sama fasta hlutanum. Sjá [Útflutningur fyrir prentun, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP inn, nákvæmt STEP út.** STEP-skrá sem þú opnar heldur sínum eigin flötu fletum, strokkum, keilum, kúlum og tórusum, svo {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar þá aftur sem sönn yfirborð í stað facetra: bjálki birgis með boltagötum fer út með sömu fleti og hann kom inn með, auk þess sem þú skarst í hann. Splæsi-, sveigðir og snúnir fletir skráarinnar haldast facetar, og það sama gildir um hluti úr STL-, OBJ- og 3MF-skrám. Opnaðu STEP-skrána aftur fyrir hluta sem var vistaður áður. Sjá [Opna STEP-skrá og byggja á henni](topic:import-step).
- **Sannir hringir í DXF fyrir flöt.** {{ui:Flytja út}} › {{ui:DXF af skissunni eða sléttum fleti}} með völdum flötum fleti skrifar nú kringluleg göt sem hringi, með eigin miðju og radíus gatsins, fyrir leysi-, plasma- eða vatnsskurðarborð. Aðrar kringlóttar brúnir eru enn facetar.
- **Nákvæmt STEP fyrir verkstæðið.** Í {{ui:Framleiðsla}} skrifar {{ui:Nákvæmt STEP (vinnuhnit)}} hlutann með uppruna sínum í vinnuuppruna uppsetningarinnar og Z eftir verkfæraásnum, þeim hnitum sem G-kóðinn notar. Sjá [Búa til verkferla og G-kóða](topic:manufacture#exact-step-for-the-shop).

## Nýtt

### Yfirborð og fastir hlutir

- **Fylling milli flata.** Veldu {{ui:Yfirborð}} í {{ui:Vinnusvæði}}-boxinu, og svo {{ui:Rúnun milli flata}}. Veldu tvo fleti eins fasta hlutar, skrifaðu radíusinn (og {{ui:Radíus í enda (mm, 0 = sami)}} fyrir radíus sem breytist eftir brúninni). Niðurstöðulínan segir hversu langt fyllingin er frá hugsjónar veltandi kúlu, og radíus sem passar ekki er hafnaður með nafngreindum fleti. {{ui:Rúna nokkrar brúnir}} rúnar margar brúnir í einu skrefi; hakaðu við {{ui:Horn (kúluflatarbútur þar sem þrír mætast)}} fyrir kúluhorn þar sem þrjár ávalar brúnir flata flata mætast. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Þykknun í fastan hluta.** {{ui:Þykkva í fasthluta}} í sama vinnusvæði gefur yfirborði þykkt; {{ui:Hin hliðin}} stækkar það hina leiðina. Felling eða sjálfskurður er hafnaður með yfirborðinu og staðnum nafngreindum.
- **Fastir hlutir úr yfirborðum.** Afmörkuð yfirborð má tengja með sameiningu, frádrætti og skurði og baka inn í hlutann sem eitt afturköllunarskref. STEP skrifar fastan hluta sem eina lokaða skel og IGES sem eitt fast efni; báðir lesast aftur sem fastir hlutar. Ef fletirnir passa ekki brún fyrir brún fær skráin aðskilda fleti og stöðulínan segir það. Hluta má líka búa til í hnútaritlinum; sjá [Hnútaritill](topic:nodes).
- **Kantfyllingar og breytilegar fyllingar í skönnunum.** Þegar þú fellir yfirborð að skönnun er leitað að kantfyllingum (tórusum) og fyllingum með breytilegum radíus eftir frekar beinni brún, og þær eru taldar upp með radíus sínum. Það er prófað aðeins á tilbúnum skönnunum.

### Samsetningar, skjöl og tengingar

- **Stórar samsetningar.** Hlutar sem eru afrit deila einum möskva, og {{ui:Sýn}} › {{ui:Létt birting}} teiknar kassa svo sýnin haldist hreyfanleg (kveikir sjálfkrafa á fyrir mjög stórar samsetningar; val og liðir nota enn raunverulegu hlutina). Hlutatréð sýnir fyrstu raðirnar og hnappinn {{ui:Sýna 700 í viðbót}} fyrir hitt. Samsetningarskrár mega hafa allt að 50.000 tilvik og 100.000 liði. Sjá [Byggja samsetningu](topic:build-assembly).
- **Skjöl.** {{ui:Skjöl…}} í hópnum **Skrá** opnar glugga yfir verkefnamöppu: útskráningu og innskráningu, útgáfustafi, stöður (vinna í gangi, til yfirferðar, gefið út, úrelt), sögu, hvar notað og efnisyfirlit. Sjá [Skjöl og útgáfur (hvelfingin)](topic:documents-walkthrough).
- **Lifandi Rhino-tenging.** Eitt skrifta, `cadcraft_link.py`, fylgist með Rhino- eða Grasshopper-skjali og ýtir aðeins því sem breyttist inn í PartCraft, þar sem innflutti eiginleikinn endurbyggist á nýja forminu. Hún er í eina átt og þarf Studio. Sjá [Lifandi .3dm-tenging](topic:live-3dm-link).
- **Sjáðu bendla hvers annars.** Í sameiginlegri lotu sést bendill hvers og eins með nafni hans og eiginleikanum sem hann hefur valið. Sjá [Vinna lifandi með öðrum](topic:work-live).
- **Verksmiðjugólf.** Kveiktu á viðbótinni Verksmiðjugólf í {{ui:Stillingar}} › {{ui:Viðbætur}}. Eftir að þú sendir forrit í {{ui:Framleiðsla}} getur flipi þess {{ui:Bæta í verkaröð verksmiðjunnar}} eða {{ui:Vista sem verkskrá}}. Hún sendir aldrei né ræsir vél.

### Greining og hlutar

- **Solid FEM-viðbót.** Kveiktu á {{ui:Solid FEM}} í {{ui:Stillingar}} › {{ui:Viðbætur}} (hún er slökkt þar til þú gerir það) og flipi {{ui:Solid FEM}} birtist í hægra spjaldinu. {{ui:Möskva hlutann}}, veldu fasta fleti og álag í þrívíddarsýninni, {{ui:Leysa}}, og teiknaðu tilfærslu, von Mises-spennu eða mótunarform með {{ui:Sýna á líkaninu}}. Sjá [Solid FEM: spennuathugun](topic:solid-fem-check).
- **Bogi í skissum, á tíu vegu.** Örin við hliðina á {{ui:Bogi}} í skissutækjastikunni listar 3-punkta, Byrjun-miðja-endir, Byrjun-miðja-horn, Byrjun-miðja-lengd, Byrjun-endir-horn, Byrjun-endir-stefna, Byrjun-endir-radíus, Miðja-byrjun-endir, Miðja-byrjun-horn, Miðja-byrjun-lengd og Halda áfram. Sjá [Teikna boga á tíu vegu](topic:sketch-arc-methods).
- **Breskar stálstærðir.** Burðarhlutar geta notað 976 breska prófíla (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skrifaðu stærð eins og `305x165x40 UB`. Sjá [Burðarhlutar](topic:structural-members).

### Prentun

- **Prentstig.** Hnappurinn {{ui:Prentstig}} á tækjastikunni (viðbót 3D Print, kveikt sjálfgefið) setur hluta þinn á strikaðan bekk: {{ui:Fletja út}}, {{ui:Snúa 90°}}, {{ui:Raða á bekkinn}}, {{ui:Passa allt á bekkinn}}, {{ui:Forskoða lög}}, og svo {{ui:Senda í þrívíddarprentara}} um USB, Klipper (Moonraker), OctoPrint eða PrusaLink. Ekkert er sent fyrr en þú staðfestir, og hlutinn þinn breytist aldrei. Fyrir STL- eða 3MF-skrá í staðinn, sjá [Undirbúa hluta fyrir þrívíddarprentun](topic:print-3d).
- **Kvoðuprentun.** Viðbætur í {{ui:Stillingar}} › {{ui:Viðbætur}}, allar slökktar þar til þú kveikir á þeim: kvoðusneiðari, lýsingarpróf, og skráarsnið Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Sneiðing keyrir á þráði í vinnslu, svo síðan helst svarandi.

## Í öllum forritum

- Sérhver ábending sem birtist við bendingu er Bootstrap-ábending.
- Byrjunarábendingin hefur lokunarhnapp; hún helst lokuð.
- Röð flipa í spjaldi sem passar ekki skrunar til hliðar í stað þess að vera skorin af.
- Vafraflipinn sýnir heiti opna skjalsins á undan PartCraft | CadCraft.
- {{ui:Stillingar}} sýnir {{ui:Útlit}} vinnusvæðisins sem fellivalmynd, og tungumálareiturinn listar öll tungumál útgáfunnar.
- Þyngd og hitastig eru einingategundir í einingastillingunum.

## Lagað

- Valmynd sketch-boga listar nú hverja aðferð.
- Viðbótatækjastikan og heiti vafraflipans voru löguð 2026-11-09.

## Heiðarleg takmörk

- Nákvæmt STEP var lesið aftur í OpenCascade (gild föst efni, rúmmál jöfn þeim sem reiknuð voru með hendi). Það hefur ekki verið opnað enn í hverju CAD- eða CAM-forriti, og samsetning er ekki skrifuð sem nákvæmt STEP.
- Ekkert hefur verið prentað á raunverulegan prentara. Sneiðing, G-kóði og kvoðuskrár voru lesnar aftur af eigin forritum okkar eða staðgengils-prentara; ekkert kvoðusniðanna hefur verið hlaðið á prentara, og stærðir prentara og lýsingar eru upphafsgildi.
- Solid FEM er línulegt, samsætið og teygjanlegt, með einu efni á hvern hlut, og án snertingar, eftirgjafar eða bognunar. Spenna við fast fleti og skarpa horn fer eftir möskvanum. Það er athugunartæki, ekki yfirfarið af verkfræðingi.
- Tímasetningar stórra samsetninga koma frá þjóni án GPU; full-smáatriða rammi af 20.000 hlutum tekur samt sekúndur þar.
- Fyllingar virka á pörum flata; það er enginn almennur hornblöndunarhnútur og engin fylling milli flata sem mætast ekki.
- Rhino-tengingin hefur aldrei verið keyrð inni í raunverulegu Rhino eða Grasshopper. Skjöl voru prófuð af tveimur forritum á einni möppu, ekki af tveimur fólki á netdrifi.
- Að fella yfirborð að raunverulegri skönnun hefur ekki fengið handprófun. Tungumál önnur en enska eru vélræn drög.
- Gluggar fyrir Windows eru ekki kóðaundirritaðir, og macOS-diskmyndin er ekki staðfest af Apple. Sjá [Bilanaleit](topic:troubleshooting).

Eldri breytingar eru í [Hvað er nýtt í 0.7](topic:whats-new-0-7).

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í PartCraft 0.8 og 0.8.1, miðað við 0.7. Hermunin svarar meðan þú breytir og segir hvað brotnar fyrst, samsetningar fá hreyfirannsóknir, og nýju vinnusvæðin gera frjáls yfirborð og hluti stærðaða eftir eðlisfræði. 0.8.1 er lítil lagfæringarútgáfa.

### Nýtt

**Hermun**

- **Uppfæra meðan ég breyti.** Hakaðu við {{ui:Uppfæra á meðan ég breyti}} í Leysa-blokkinni og svörin fylgja breytingum þínum. Breyttu máli, álagi eða efni og fljótlegt svar, reiknað með þáttum fjórum sinnum stærri, birtist strax; þegar þú hættir í um eina sekúndu kemur eigin fínkvarðaða svar rannsóknarinnar í staðinn. Niðurstöðurnar segja hvort þú sért að horfa á hvort. Á stálbita með einum enda var fljótlega svarið innan 1% á færslu og um 4% á spennu miðað við fínkvarðaða svarið. Sjá [Athuga spennu og færslu](topic:simulation#update-while-you-edit-live).
- **Hvað brotnar fyrst.** Fyrir kyrrstöðu- eða knékkjarannsókn skalar {{ui:Hvað gefur sig fyrst?}} í **Brjóttu hann**-blokkinni álagið þar til hluturinn gefur sig. Hún listar, verstu fyrst, álagsþáttinn að fyrsta flæði (með rauðu merki þar sem spennan nær hámarki) og álagsþáttinn að knékkjun. Þáttur undir 1 þýðir að hluturinn gefur sig þegar hann er hlaðinn, og Vandamál sýnir villu. Þættirnir koma úr línulegri rannsókn, svo þeir eru aðeins eins góðir og hún. Sjá [Athuga spennu og færslu](topic:simulation#find-out-what-breaks-first-break-it).
- **Flæði og snerting.** Tvær rannsóknartegundir í viðbót: ólínuleg þar sem efnið fylgir beinni línu sinni upp að flæðispennu og svo flatari halla, með plastískri aflögun teiknaðri, og snertirannsókn þar sem aðskildir hlutar ýta hver á annan (núningslaust) eða haldast fastir (límdir). Hleðsluskref sem nær ekki jafnvægi, eða hlutar sem sökkva of langt hver í annan, birtast í Vandamálaspjaldinu. Núningur, stór rennsli, stórir snúningar, stórar beygjur og þreyta eru ekki leyst. Sjá [Athuga spennu og færslu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Útflutningur fyrir CalculiX.** {{ui:Flytja út}} › {{ui:CalculiX-skrá (.inp)}} vistar rannsóknina fyrir CalculiX, sérstakt forrit sem þú setur upp og keyrir sjálf(ur); {{ui:Flytja út}} › {{ui:CalculiX-niðurstöður (.frd)}} les niðurstöðuskrá þess aftur á sama möskva. PartCraft ræsir aldrei það forrit, og það segir frá því ef hluturinn breyttist eftir að skráin var vistuð.

**Samsetningar**

- **Hreyfirannsóknir.** {{ui:Samsetning}} › {{ui:Hreyfing}} keyrir gildi eins liðs yfir tíma sem þú gefur (fastur hraði, mjúkt, sinus, eða út og til baka), setur samsetninguna á hvert skref með liðum sínum og lykkjum, og skýrir frá því hvað rekst á og hversu nálægt hlutar koma. {{ui:Bæta við punkti}} teiknar stöðu punkts, hraða og hröðun, gildi liðsins og bilið á móti tíma; {{ui:Vista CSV}} og {{ui:Vista graf}} skrifa þau út. Eftir {{ui:Keyra}} færir Skref í gegnum keyrslustikuna samsetninguna á hvaða skref sem er. Stillingar rannsóknarinnar vistast í samsetningarskránni. Hraði og hröðun koma úr skráðum stöðum, svo notaðu fleiri skref ef skarpur toppur birtist lágur. Sjá [Athuga samsetningu með árekstrum og hreyfingu](topic:check-assembly#a-motion-study).

**Frjáls yfirborð og hlutar úr eðlisfræði**

- **Yfirborðsvinnusvæði.** Veldu {{ui:Yfirborð}} í {{ui:Vinnusvæði}}-boxinu fyrir NURBS-ferla og yfirborð við hliðina á hlutanum: {{ui:Ferill}}, {{ui:Brú milli sniða}}, {{ui:Ferilsdráttur}}, {{ui:Samræma}} og {{ui:Sebra}}, með samfellu (G0, G1 eða G2) mældri á nákvæmu yfirborðunum og brún sem er verri en þú baðst um skráð í Vandamálum með Samræmingarlagfæringu. {{ui:Slétta}} mælir skrokklínur fyrir beygjupunkta og stökk í sveigju og endurbyggir þá óslétt innan skekkjumarka þinna. Yfirborð eru vistuð í hlutaskránni og breyta ekki eiginleikum hlutarins. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Verkfræðingsvinnusvæðið.** Veldu {{ui:Verkfræðingur}} í vinnusvæðisvalinu, veldu rafal og smelltu á {{ui:Nýtt}}: skrifta stærir hlut eftir því sem hann á að gera (hitun til að færa, rennsli, þrýstingur, efni, prentunaraðferð) með kennslubókarformúlum og byggir hann, og skilar svo tölunum sem hún notaði með heimildum sínum, framleiðsluathugunum sínum og skrám fyrir greiningartól. Sömu inntök gefa sama hlut á hvaða tölvu sem er. Rafallinn er geymdur í hlutnum, og að opna hlut keyrir aldrei skriftu. Sjá [Hlutar úr eðlisfræði: rafala](topic:engineer-generators) og [Skrifa rafal](topic:write-a-generator).

**Skissur, teikningar og framleiðsla**

- **Skissa úr mynd.** {{ui:Eiginleikar}} › {{ui:Meira}} › {{ui:Skissa út frá mynd…}} rekur mynd af flatri hlut á sléttum grunni (útlína og göt) eða pennateikningu í línur, boga og hringi. Þú gefur eina lengd, skoðar forskoðunina og býrð til skissuna. Sjá [Grunnatriði skissu](topic:sketch-basics#a-sketch-from-a-photo).
- **Mælikvarði og skipting fyrir prentun.** {{ui:Flytja út}} › {{ui:Stækka eða minnka fyrir prentun (STL eða 3MF)…}} skalar eftir ásum án þess að breyta hlutnum, til dæmis fyrir rýrnunarsvigrúm. {{ui:Flytja út}} › {{ui:Skipta fyrir prentun (zip-skrá með bitum)…}} sker hlut sem er of stór fyrir bekkinn þinn í númeruð stykki tengd með pinnum, lyklum, svölunum, tappagötum eða seguljómhólfum. Sjá [Prenta í þrívídd](topic:print-3d).
- **Raðaðar plötur í G-kóða.** {{ui:Flytja út}} › {{ui:Raðaðar plötur í G-kóða}} les raðað DXF og býr til eitt forrit á plötu í gegnum eftirvinnsluna sem þú velur: göt og úrskurði fyrst, svo útlínurnar. Það skipuleggur ekki inngangsskurði, skurðaröð eða sameiginlegar brúnir. Sjá [Raða flötum hlutum á plötur](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Teikningar sem gera meira sjálfar.** {{ui:Blað}} › {{ui:Sjálfvirkt}} velur minnsta A-blað sem heldur sýnunum á stærsta staðlaða mælikvarða upp í 1:1. {{ui:Málsetja götin}} setur miðjumerki á hvert gat, eina tilvísun fyrir hverja stærð og staðsetningarnar frá neðra vinstra horni sýnarinnar. Sjá [Gera teikningu](topic:drawing-pdf).

**Í öllum forritum**

- **Tungumál.** Forritin koma á 54 tungumálum. Þau sem eru önnur en enska eru vélræn drög þar til móðurmálsmaður hefur lesið þau.
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} velur Vefja (eins og áður), 2 línur eða 1 línu; stika sem passar ekki skrunar til hliðar. Eiginleikaborðið í PartCraft sýnir mest notaða tólið stórt og felur afbrigði á bak við skiptihnapp.
- **Tengdu gervigreindina þína.** Studio er miðstöð til að tengja þinn eigin aðstoðarmann við öll átta forritin, með lesheimild, tillögu- eða breytingaheimild í hverju forriti. Tengdur aðstoðarmaður getur stært hlut út frá setningu, svo sem festingu fyrir álag, sýnt útreikninga sína og allar athuganir, og smíðað hann; hann skýrir frá því sem hann athugaði ekki (spennustyrk, þreytu, skrið í plasti). Sjá [Nota PartCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

### Lagað í 0.8.1

- **Frysting í fullskjáham.** Forskoðunarvalið er nú stillt. Orsökin er besta mat okkar og var ekki staðfest með þeim sem tilkynnti hana.
- **Tungumál við keyrslu.** Studio og pakkaútgáfurnar geta skipt um tungumál meðan þær keyra; áður voru þær aðeins á ensku. Þetta er ekki enn prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.

### Ekki í þessari útgáfu enn

- Tengdu gervigreindina þína er ekki fullbúin: tenging með einum smelli í Studio, hýsti tengillinn fyrir gervigreind í vafra, eigin API-lykill í Studio og birti MCP-pakkinn eru ekki lofuð. Studio hefur enga eigin gervigreind.
- Studio er ekki kóðaundirritað: Windows gæti varað við og macOS biður um hægrismell og svo Opna. Sjá [Bilanaleit](topic:troubleshooting).
- Vikmarkasamlagning er enn í eina átt: sjá [Vikmarkasamlagning](topic:tolerance-stackup).
- Restin er talin upp í [Hvað er ekki byggt enn](topic:not-built-yet).

Eldri breytingar eru í [Hvað er nýtt í 0.7](topic:whats-new-0-7).
