---
title: Búa til verkferla og G-kóða (Framleiðsla)
summary: Settu upp hráefni og vinnuuppruna, veldu verkfæri, bættu við flöt-, vasa-, útlínu-, bora- og skábrúnaaðgerðum með því að velja fleti, kláraðu allt líkanið í 3D (samsíða og scallop), hermdu efnið á móti líkaninu fyrir skurði og hringtíma, og sæktu G-kóða úr einu af þremur innbyggðu úttökunum eða einu sem þú breytir sjálfur.
keywords: nákvæmt STEP, STEP fyrir verkstæðið, vinnuhnit, CAM-afhending, samsíða, scallop, 3D-frágangur, frágangur, kúlufræsi, verkfærasafn, breyta úttaki, sérsniðið úttak, úttaksritill, aðlögun, aðlöguð hreinsun, stöðug þátttaka, trochoidal, hsm, hraðfræsing, framleiðsla, CAM, verkferill, G-kóði, NC, CNC, fræsing, vasi, útlína, prófíll, andlitsfræsing, bora, peck, G83, G81, G73, skábrúna, hráefni, vinnuhliðrun, G54, úttaksvinnsla, GRBL, LinuxCNC, fóðrun og hraðar, herming, skurður, hringtími
from: beeb29aa
---

Vinnusvæðið **Framleiðsla** breytir hlutanum í verkferla fyrir 3-ása fræsivél og skrifar þá sem G-kóða. Flestar aðgerðir eru **2.5-ása**: verkfærið helst lóðrétt, veggir skornir beint niður og gólf slétt. **Samsíða** og **Scallop** klára bogadregna fleti í 3D (sjá [3D-frágang](topic:finish-3d)); verkfærið helst samt lóðrétt (þrír ásar, enginn halli). Það vinnur á nefndum flötum sem möskvakjarninn gefur hlutnum (sjá [Möskvakjarninn](topic:solid-kernels)).

Tilraunasmíð: athugaðu sérhverja áætlun í eigin hermi stjórnbúnaðarins, og keyrðu hana fyrst í loftinu fyrir ofan efnið.

## Uppsetning

1. Veldu **Framleiðsla** í vinnusvæðisvalinu, síðan {{ui:Ný uppsetning}}.
2. Á flipanum **Uppsetning** veldu:
   - **Ás verkfærisins (+Z)**: í hvaða átt verkfærið bendir inn í hlutinn. Heimur +Y (upp í PartCraft) er sjálfgefið; X vélarinnar er þá X heimsins og Y vélarinnar er −Z heimsins.
   - **Vinnuuppruni (G54)**: horn eða miðja hráefnisins, efst eða neðst, efsta miðja líkansins, eða uppruni líkansins.
   - **Hráefni**: kassi eða sívalningur, annaðhvort líkanið plús mörk (hliðar, efst, neðst) eða föst stærð.
   - **Efnisgerð** (setur upphaflega fóðrun og hraða), **úttakið** (stjórnbúnaðinn), hámarkshraða snældu vélarinnar, hraðhreyfingu og tíma verkfæraskipta, kælivökva og númer áætlunarinnar.

## Verkfæri

Flipinn **Verkfæri** geymir safnið: flatar, kúlu- og hálfkúlufræsar, borar, skábrúnafræsar og andlitsfræsar, sérhver með T-númeri, þvermáli, tönnum og tannlengd (auk hornradíus, odds- eða skáhorns þar sem við á).

Verkfærin mín má vista í vafranum og flytja á milli tölva sem skrá: sjá [Verkfærasafnið](topic:tool-library).

Snældhraði og fóðrun koma úr efninu: n = 1000 × skurðarhraði / (π × þvermál), fóðrun = n × tennur × spánarálag (borar: n × fóðrun á snúning). Tölurnar eru varkár upphafsgildi úr birtum sviðum, ekki stillt fyrir vélina þína; sláðu inn skurðarhraða, spánarálag, snúninga eða fóðrun frá framleiðanda verkfærsins til að yfirskrifa þau. Þegar hraðinn fer yfir hámarkshraða vélarinnar er hann haldið þar og fóðrunin fylgir, og heldur spánarálaginu.

## Bæta við aðgerðum

Hver tækjastikuhnappur bætir við aðgerð og, þar sem hún þarf rúmfræði, byrjar val: smelltu á fleti eða brúnir í sýninni (smelltu aftur til að sleppa einum), og síðan {{ui:Lokið við val}} eða {{key:Esc}}.

| Aðgerð | Velja | Hvað hún gerir |
|---|---|---|
| {{ui:Flötur}} | ekkert | Zig-zag-umferðir yfir allt hráefnið, út fyrir jaðra þess, niður í efsta flöt líkansins |
| {{ui:Vasi}} | flatan gólffleti, kringlótt gat, eða lokaða keðju brúna | Hreinsar svæðið í jöfnunarumferðum innan frá og út, á hverju dýptarskrefi; eyjur (fletir sem standa upp innan gólfsins) eru skildar eftir; gólf sem er opið allt í kring (ekkert hærra fyrir utan það) er hreinsað út að jaðri hráefnisins |
| {{ui:Aðlögun}} | sama og Vasi | Hreinsar sama svæði í umferðum sem hver skera ákveðna breidd (**Þátttaka**, hluti af þvermálinu), svo skerinn taki aldrei fulla breidd rifu, jafnvel í hornum; hann fer inn með spíral og klárar veggina á hverju stigi. Þröngir skurðir leyfa dýpra skref og meiri fóðrun |
| {{ui:Útlína}} | flatan flöt (útlínu hans), kringlóttan flöt, eða brúnir | Fylgir útlínunni offset um radíus verkfærisins, utan eða innan, með innleiðslu- og útleiðslubogum og valfrjálsum flipum |
| {{ui:Bora}} | göt (smelltu á vegg holunnar eða brún hennar) | Borar hvert gat með föstum hring: skref-bor (G83), bor (G81) eða spanbrot (G73); eða gefðu þvermál til að bora öll göt af þeirri stærð |
| {{ui:Skábrúna}} | útlínu eða brúnir flatar | Lætur skábrúnafræsi keyra eftir brúninni svo hann skeri þá breidd sem þú stillir |
| {{ui:Samsíða}} | ekkert (allt líkanið) | 3D-frágangur í samsíða línum í hvaða horni sem er, eftir yfirborðinu með kúlu-, hálfkúlu- eða flatfræsi. Sjá [3D-frágang](topic:finish-3d) |
| {{ui:Scallop}} | ekkert (allt líkanið) | 3D-frágangur í umferðum í fastri fjarlægð yfir yfirborðið, svo hryggurinn milli þeirra hafi þá hæð sem þú biður um |

Veldu aðgerð í listanum til að breyta verkfærinu hennar, hæðum (öryggi, inndráttur, fóðurhæð, efst, neðst), skrefi niður, skrefi til hliðar, efninu sem skilið er eftir, frágangsumferð, innleiðslu (spíral, halli eða stungun), fræsingu með klifri, flipum eða hringrás. {{ui:Upp}} og {{ui:Niður}} raða upp á nýtt, {{ui:Bæla}} sleppir henni, {{ui:Eyða}} fjarlægir hana. Allt er í afturköllunarsögunni og vistað í hlutaskránni.

Skrefið til hliðar í vasa er í mesta lagi helmingur þvermáls verkfærisins, svo sérhver punktur gólfsins liggi innan eins radíus verkfæris frá umferð. Innri horn halda radíus verkfærisins.

**Aðlöguð hreinsun** heldur þátttöku skerans nærri einu gildi. Þátttaka 0.15 af þvermálinu er þátttökuhorn um 46°: bogi brúnar skerans í efninu. Útlínuvasi skerur aftur á móti fulla breidd í fyrstu umferð og vefst lengra um í hverju innra horni. Milli umferða helst verkfærið niðri þar sem það fer í gegnum skorið loft, og lyftist og fer niður í skornu lofti annars staðar. Umferðirnar eru reiknaðar á fínu neti yfir svæðið (reitir um tólfta hluta radíus verkfærisins), svo þátttakan getur orðið allt að einum reit breiðari en stillt er; veggirnir eru kláraðir nákvæmlega. Stórt opið svæði gerir langa áætlun með mörgum stuttum hreyfingum.

## Herma

Verkferlar eru gerðir aftur eftir sérhverja breytingu (hlutarins líka). {{ui:Herma}} sýnir einnig efnið sem eftir er eftir alla áætlunina. Spjaldið sýnir:

- **Hringtími**: fóðrunarhreyfingar á sinni fóðrun, hraðhreyfingar sem beinar línur á hraðhreyfingarhraða uppsetningarinnar, plús tíma verkfæraskipta. Raunvélar hraðast, svo þær taka lengri tíma.
- **Skurðir**: staðir þar sem verkfærið fór meira en 0.02 mm undir yfirborði hlutarins. Rauð merki sýna þá í sýninni.
- **Efni sem eftir er á hlutnum**.

Efnið er hæðarkort af efstu hliðinni (Z-kort), svo það getur ekki sýnt undirskurði. Dragðu **Spilun** til að færa verkfærið eftir áætluninni. Í sýninni eru fóðrunarhreyfingar heilar og hraðhreyfingar strikaðar, með einum lit fyrir hverja aðgerð.

Með **Sýna hermt efni** kveikt er efnið litað gegn líkaninu, reit fyrir reit: **grænt** þar sem það er á líkaninu (innan 0.02 mm), **rautt** þar sem verkfærið skar inn í líkanið, og þar sem efni er eftir á líkaninu **gult** fyrir þunna húð, **appelsínugult** fyrir meira, sem dofnar í **grátt** óskorins efnis við 1 mm eða meira. Litirnir eru gerðir aftur með hverri breytingu, úr sama hæðarkorti og tölurnar í spjaldinu, svo grænt og rautt stemma við línuna Skurðir. Skábrúna skerst inn í líkanið af ásetningi og sýnir rautt meðfram brún sinni.

## Skrifaðu út G-kóðann

Veldu stjórnbúnaðinn undir **Úttak** og ýttu á {{ui:Sækja G-kóða}} (eða {{ui:Úttak}} á tækjastikunni):

| Stjórnbúnaður | Skrá | Athugasemdir |
|---|---|---|
| Fanuc-líkur ISO | .nc | %, O-númer, línunúmer, T M6 með G43 H, fastar hringrásir |
| GRBL | .nc | Enginn verkfæraskiptir eða fastar hringrásir: verkfæraskipti stöðva með M0, bora er skrifuð sem venjulegar hreyfingar |
| LinuxCNC | .ngc | T M6 með G43 H, fastar hringrásir, M2 |
| Þinn eigin | hvaða sem er | Úttak sem þú skrifaðir eða breyttir: {{ui:Breyta eftirvinnslu…}}, {{ui:Ný eftirvinnsla…}}, {{ui:Flytja inn eftirvinnsluskrá…}} |

Sérhver skrá byrjar á athugasemdum um forritið, hráefnið, vinnuuppruna og verkfærin. Hnit eru í millimetrum með 3 aukastöfum. {{ui:Toolpath CSV}} og {{ui:Toolpath JSON}} flytja út hreyfingarnar sjálfar.

**Athugaðu úttakið í eigin hermi vélarinnar áður en þú skerð, og keyrðu það fyrst í loftinu fyrir ofan efnið.** Innbyggðu úttökin þrjú eru upphafspunktar sem fylgja skjalfestri hegðun stjórnbúnaðanna; þau hafa ekki verið sönnuð á neinni tiltekinni vél. Úttak sem þú breytir er þitt að sanna. Hvernig á að skrifa eitt: [Úttaksvinnsla](topic:post-processors).

## Nákvæmt STEP fyrir verkstæðið

Undir G-kóðahnöppunum á flipanum **Aðgerðir** sækir {{ui:Nákvæmt STEP (vinnuhnit)}} skrána `<part>-work.step`: hlutinn sem nákvæmt fast efni (sannir sívalningar fyrir göt og upphækkanir, sannir hringir fyrir brúnir þeirra) með uppruna sinn í vinnuuppruna þessarar uppsetningar og Z meðfram ási verkfærisins. Þetta eru hnitin sem G-kóðinn notar, svo CAM-forrit verkstæðisins eða skoðunarforrit þess stillir líkanið upp við áætlunina án þess að færa það. Skráin geymir aðeins hlutinn, ekki hráefnið eða verkferlana.

{{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar sama fasta efnið í eigin stöðu hlutarins (Z upp): sjá [Flytja út til prentunar, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Takmarkanir

- Vasar, útlínur, borun og skábrúnir eru 2.5-ása. Bogadregnir fletir má klára í 3D ([samsíða og scallop](topic:finish-3d)) en ekki gróftaka í 3D (keila er skilin eftir sem þrep þar til þú klárar hana), og það er engin hvílandi vinnsla. Aðlöguð hreinsun er 2D (flöt gólf).
- Aðeins þrír ásar: enginn halli, engin rennismíði, engin skoðun.
- Haldarar og skaft eru ekki athuguð fyrir árekstra; viðvörun birtist þegar skurður er dýpri en tannlengdin.
- Fóðrun og hraðar eru upphafsgildi. Úttak er texti sem þú getur breytt, en það ákveður aðeins hvernig hreyfingarnar eru skrifaðar; það getur ekki breytt verkferlinum, bætt við ásum eða vitað um vélina þína ([Úttaksvinnsla](topic:post-processors) listar hvað það getur ekki gert).

## Sendu áætlunina í vél

Í CadCraft Studio á skjáborðinu, með vél sem sett er upp í Studio, birtist **Senda í vél…** við hliðina á **Sækja G-kóða** og hleður sama forriti upp í vélina á netinu þínu. Því er aldrei ræst úr PartCraft: ræstu það við vélina þegar hún er tilbúin. Í vafra er hnappurinn ekki sýndur (vefsíða nær ekki í vél á netinu þínu): sæktu forritið í staðinn.
