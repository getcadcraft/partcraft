---
title: Nýtt í 0.8 og 0.8.1
summary: PartCraft 0.8 bætir við lifandi greiningu meðan þú breytir, athugun á því hvað gefur sig fyrst, flæði- og snertirannsóknum með skrám fyrir ytri lausnara, hreyfirannsóknum fyrir samsetningar, vinnusvæði fyrir frjáls yfirborð, hlutum stærðum út frá eðlisfræði í Verkfræðingur-vinnusvæðinu, skissu úr mynd, útflutningi fyrir prentun, röðuðum plötum í G-kóða og teikningum sem málsetja göt sín. 0.8.1 lagar frostun bendils í fullum skjá.
keywords: hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, lifandi greining, uppfæra á meðan breytt er, hvað gefur sig fyrst, álagsstuðull, ólínulegt, flæði, plastísk álagning, snerting, calculix, hreyfirannsókn, úthreinsun, yfirborð, nurbs, slétta, hull, sebra, verkfræðingur, rafall, rafaður hluti, skissa úr mynd, mælikvarði fyrir prentun, skipta fyrir prentun, rýrnun, raðaðar plötur, g-kóði, teikning, málsetja göt, aðstoðarmaður, mcp, tungumál, línur tækjastikunnar
from: 62e4dce2
---

Þetta er það sem breyttist í PartCraft 0.8 og 0.8.1, borið saman við 0.7. Hermunin svarar meðan þú breytir og segir þér hvað gefur sig fyrst, samsetningar fá hreyfirannsóknir, og ný vinnusvæði búa til frjáls yfirborð og hluti stærða út frá eðlisfræði. 0.8.1 er lítil lagfæringarútgáfa.

## Nýtt

### Hermun

- **Uppfæra á meðan ég breyti.** Hakaðu við {{ui:Uppfæra á meðan ég breyti}} í Lausn-blokkinni og svörin fylgja breytingum þínum. Breyttu vídd, álagi eða efni og fljótlegt svar, reiknað með fjórfalt stærri þáttum, birtist strax; þegar þú hættir í um eina sekúndu kemur eigin fínstillta niðurstaða rannsóknarinnar í staðinn. Niðurstöðurnar segja þér hvort er verið að skoða. Á stálfasta bita var fljótlega svarið innan 1 % á bognun og um 4 % á álagi miðað við fínstilltu niðurstöðuna. Sjá [Athuga álag og bognun](topic:simulation#update-while-you-edit-live).
- **Hvað gefur sig fyrst.** Fyrir stöðu- eða knékkjarrannsókn skalar {{ui:Hvað gefur sig fyrst?}} í **Brjóta það**-blokkinni álagið þar til hlutinn gefur sig. Hann telur upp, verstan fyrst, álagsstuðulinn að fyrstu flæði (með rauðu merki þar sem álagið nær hámarki) og álagsstuðulinn að knékkjun. Stuðull undir 1 þýðir að hlutinn gefur þegar sig eins og hann er hlaðinn, og Vandamál sýnir villu. Stuðlarnir koma úr línulegri rannsókn, svo þeir eru ekki betri en hún. Sjá [Athuga álag og bognun](topic:simulation#find-out-what-breaks-first-break-it).
- **Flæði og snerting.** Tvær rannsóknagerðir til viðbótar: ólínuleg þar sem efnið fylgir beinni línu sinni upp að flæðimörkum og síðan flatari halla, með plastískri álagningu teiknaðri, og snertirannsókn þar sem aðskildir hlutar þrýsta hver á annan (núningslaust) eða haldast fastir (tengdir). Álagsskref sem nær ekki jafnvægi, eða hlutar sem síga of langt inn hver í annan, birtast í Vandamál-spjaldinu. Núningur, stórt rennsli, stórir snúningar, stórar bognanir og þreyta eru ekki reiknuð. Sjá [Athuga álag og bognun](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Skrár fyrir CalculiX.** {{ui:Flytja út}} › {{ui:CalculiX-skrá (.inp)}} vistar rannsóknina fyrir CalculiX, sérstakt forrit sem þú setur upp og keyrir sjálfur; {{ui:Flytja út}} › {{ui:CalculiX-niðurstöður (.frd)}} les niðurstöðuskrá þess aftur á sama möskva. PartCraft keyrir aldrei það forrit, og segir það ef hluturinn breyttist eftir að skráin var vistuð.

### Samsetningar

- **Hreyfirannsóknir.** {{ui:Samsetning}} › {{ui:Hreyfing}} keyrir gildi eins tengils yfir tíma sem þú gefur upp (stöðugur hraði, mjúkt, sinus, eða út og til baka), staðsetur samsetninguna á hverju skrefi með tenglum sínum og lokuðum lykkjum, og skýrir frá því hvað rekst á og hversu nálægt hlutar koma. {{ui:Bæta við punkti}} teiknar stöðu punkts, hraða og hröðun, gildi tengilsins og úthreinsunina á móti tíma; {{ui:Vista CSV}} og {{ui:Vista graf}} skrifa þau út. Eftir {{ui:Keyra}} færir skrefastikan í keyrslustikunni samsetninguna á hvaða skref sem er. Stillingar rannsóknarinnar eru vistaðar í samsetningarskránni. Hraði og hröðun koma úr skráðum staðsetningum, svo notaðu fleiri skref ef skarpur toppur birtist of lágur. Sjá [Athuga samsetningu fyrir árekstra og hreyfingu](topic:check-assembly#a-motion-study).

### Yfirborð og hlutir út frá eðlisfræði

- **Yfirborð-vinnusvæði.** Veldu {{ui:Yfirborð}} í {{ui:Vinnusvæði}}-boxinu fyrir NURBS-ferla og -yfirborð við hliðina á hlutanum: {{ui:Ferill}}, {{ui:Brú milli sniða}}, {{ui:Ferilsdráttur}}, {{ui:Samræma}} og {{ui:Sebra}}, með samfellu (G0, G1 eða G2) mælda á nákvæmu yfirborðunum og brún sem er verri en þú baðst um er skráð í Vandamál með lagfæringu fyrir Samræma. {{ui:Slétta}} mælir skrokklínur fyrir beygjum og stökkum í krappi og endurbyggir þær óslétt innan þíns vikmarks. Yfirborð eru vistuð í hlutaskránni og breyta ekki eiginleikum hlutarins. Sjá [Frjáls yfirborð (NURBS)](topic:nurbs-surfaces).
- **Verkfræðingur-vinnusvæðið.** Veldu {{ui:Verkfræðingur}} í vinnusvæðavalinu, veldu rafal og smelltu á {{ui:Nýtt}}: handrit mælir út hlut út frá því sem hann á að gera (hiti til að færa, flæði, þrýstingur, efni, prentunarferli) með reiknisformúlum úr kennslubókum og smíðar hann, og skilar svo tölunum sem það notaði ásamt heimildum þeirra, framleiðsluathugunum sínum og skrám fyrir greiningarforrit. Sömu inntök gefa sama hlut á hvaða tölvu sem er. Rafallinn er geymdur í hlutnum og opnun hluta keyrir aldrei handrit. Sjá [Hlutir út frá eðlisfræði: rafallar](topic:engineer-generators) og [Skrifaðu rafal](topic:write-a-generator).

### Skissun, teikningar og smíði

- **Skissa úr mynd.** {{ui:Eiginleikar}} › {{ui:Meira}} › {{ui:Skissa út frá mynd…}} rekur mynd af flötum hlut á einföldum grunni (útlínur og göt) eða pennateikningu í línur, boga og hringi. Þú gefur eina lengd, athugar forskoðunina og býrð til skissuna. Sjá [Grunnatriði skissu](topic:sketch-basics#a-sketch-from-a-photo).
- **Mælikvarði og skipting fyrir prentun.** {{ui:Flytja út}} › {{ui:Mælikvarði fyrir prentun (STL eða 3MF)…}} skalar eftir ásum án þess að breyta hlutnum, til dæmis um rýrnunarvik. {{ui:Flytja út}} › {{ui:Skipta fyrir prentun (zip-skrá með bitum)…}} sker hlut sem er of stór fyrir prentbeðið þitt í númeraða búta sem tengjast með pinnum, lyklum, svölubindingum, dúbbagötum eða seglavösum. Sjá [Prenta í þrívídd](topic:print-3d).
- **Raðaðar plötur í G-kóða.** {{ui:Flytja út}} › {{ui:Raðaðar plötur í G-kóða}} les raðaða DXF-skrá og býr til eitt forrit á hverja plötu gegnum eftirvinnsluna sem þú velur: göt og úrklippur fyrst, síðan útlínurnar. Það skipuleggur ekki innleiðslulínur, skurðröð eða sameiginlegar brúnir. Sjá [Raða flötum hlutum á plötur](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Teikningar sem gera meira sjálfar.** {{ui:Blað}} › {{ui:Sjálfvirkt}} velur minnsta A-stærðarblaðið sem heldur útlitunum á stærsta staðlaða mælikvarða allt að 1:1. {{ui:Málsetja götin}} setur miðjumerki á hvert gat, eina tilvísun á hverja stærð og staðsetningarnar frá neðra vinstra horni útlitsins. Sjá [Gerðu teikningu](topic:drawing-pdf).

### Í öllum forritum

- **Tungumál.** Forritin koma á 54 tungumálum. Þau sem eru utan ensku eru vélþýddar drög þar til móðurmálshafi hefur lesið þau.
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} velur Vefja (eins og áður), 2 línur eða 1 línu; stika sem passar ekki skrunar til hliðar. Eiginleikaborði PartCraft sýnir mest notaða verkfærið stórt og felur afbrigðin á bak við skiptihnapp.
- **Tengdu gervigreindina þína.** Studio er miðstöðin til að tengja aðstoðarmann af þínum eigin við allt forritin átta, með lesaðgangi, tillögum eða breytingaleyfi fyrir hvert forrit. Tengdur aðstoðarmaður getur mælt út hlut út frá setningu, til dæmis festingu fyrir álag, sýnt útreikninga sína og allar athuganir og smíðað hann; hann segir frá því sem hann athugaði ekki (spennuhnúta, þreytu, skrið í plasti). Sjá [Notaðu PartCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants).

## Lagað í 0.8.1

- **Frostun bendils í fullum skjá.** Hover-valið er takmarkað núna. Orsökin er besta túlkun okkar og var ekki staðfest með þeim sem tilkynnti hana.
- **Tungumál í keyrslu.** Studio og pökkuðu útgáfurnar geta skipt um tungumál meðan þær keyra; áður voru þær aðeins á ensku. Þetta er ekki enn prófað á öllum stýrikerfum: láttu okkur vita ef tungumálið breytist ekki.

## Ekki í þessari útgáfu enn

- Tengdu gervigreindina þína er ekki fullgerð: tenging með einum smelli innan Studio, hýsti tengillinn fyrir gervigreind í vafra, þinn eigin API-lykill inni í Studio og útgefni MCP-pakkinn eru ekki lofuð. Studio hefur enga gervigreind sjálft.
- Studio er ekki kóðaundirritað: Windows gæti varað við, og macOS biður um hægrismell og síðan Opna. Sjá [Úrræðaleit](topic:troubleshooting).
- Vikmarkastaflar eru enn í eina átt: sjá [Vikmarkastaflar](topic:tolerance-stackup).
- Restin er skráð í [Það sem er ekki tilbúið enn](topic:not-built-yet).

Eldri breytingar eru í [Nýtt í 0.7](topic:whats-new-0-7).
