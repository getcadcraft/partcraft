---
title: Búa til slóðir og G-kóða (Manufacture)
summary: Stilltu hráefni og vinnuuppruna, veldu verkfæri, bættu við flöt-, vasa-, útlínu-, bor- og skábrúnaaðgerðum með því að velja fleti, frágangaðu allt líkanið í 3D (samsíða, scallop), hermdu hráefnið gegn líkaninu fyrir ofskurð og vinnslutíma, og sæktu G-kóða frá einu af þremur innbyggðum úttökum eða úttaki sem þú breytir sjálfur.
keywords: nákvæmt step, step fyrir verkstæðið, vinnuhnit, cam-afhending, samsíða, scallop, 3d-frágangur, frágangur, kúlufingurfræsir, verkfærasafn, breyta úttaki, sérsniðið úttak, úttaksritill, aðlögun, aðlögunarefnistaka, stöðugt þátttökuhorn, trochoidal, hsm, hraðfræsing, manufacture, CAM, slóð, G-kóði, NC, CNC, fræsir, fræsing, vasi, útlína, prófíll, flötun, bor, peck, G83, G81, G73, skábrún, hráefni, vinnufærsla, G54, úttak, GRBL, LinuxCNC, fóðrun og snúningshraði, hermun, ofskurður, hringtími
from: f8a03be8
---

Manufacture-vinnusvæðið breytir hlutanum í slóðir og skrifar þær sem G-kóða. Flestar aðgerðir eru **2,5-ása** fræsing: verkfærið er lóðrétt, veggir eru skornir beint niður og gólf eru flöt. **3D grófvinnsla** og **Leifar** grófa bogna hluta í 3D ([3D-grófvinnsla og leifarvinnsla](topic:rough-3d)); **Samsíða** og **Scallop** klára þá ([3D-frágangur](topic:finish-3d)). Á vél með snúningsásum getur hvaða aðgerð sem er haft hallað verkfæri, og tvær aðgerðir færa snúningsásana meðan skorið er ([4- og 5-ása vinnsla](topic:multi-axis)). Til eru aðgerðir fyrir rennibekk ([Rennsli í rennibekk](topic:turning)) og fyrir snertiskynjara ([Snertiskynjun](topic:probing)). Hún vinnur á nafngreindu flötunum sem netkjarninn gefur hlutanum (sjá [Netkjarninn](topic:solid-kernels)).

Tilraunaútgáfa: athugaðu hvert forrit í hermi stjórnbúnaðarins og keyrðu það fyrst í lausu lofti yfir hráefninu.

## Uppsetning

1. Veldu **Framleiðsla** í vinnusvæðisskiptinum, og síðan {{ui:Ný uppsetning}}.
2. Á flipanum **Uppsetning** veldu:
   - **Verkfærisás (+Z)**: í hvaða átt verkfærið bendir inn í hlutann. Heimur +Y (upp í PartCraft) er sjálfgefið; þá er X vélarinnar X heimsins og Y vélarinnar er −Z heimsins.
   - **Vinnuuppruni (G54)**: horn eða miðja hráefnisins, efst eða neðst, efsta miðja líkansins eða uppruni líkansins.
   - **Hráefni**: kassi eða strokkur, annaðhvort líkanið plús viðbætur (hliðar, efst, neðst) eða föst stærð.
   - **Efni** (setur upphafsgildi fyrir fóðrun og snúningshraða), **Úttak** (stjórnbúnaðurinn), hámarkssnúningshraði spindils vélarinnar, hraðhreyfingarhraði og tími verkfærisskiptingar, kæling og númer forritsins.

## Verkfæri

Flipinn **Verkfæri** geymir safnið: flatir, kúlu- og bull-nose-fingurfræsar, borar, skábrúnafræsar og andlitsfræsar, hver með T-númeri, þvermáli, rásafjölda og rásarlengd (auk hornradíuss, odds- eða skáhorns þar sem við á).

Verkfærin mín má vista í vafranum og flytja á milli tölva sem skrá: sjá [Verkfærasafnið](topic:tool-library).

Snúningshraði spindils og fóðrun koma frá efninu: n = 1000 × skurðarhraði / (π × þvermál), fóðrun = n × rásafjöldi × spónþykkt (borar: n × fóður á snúning). Tölurnar eru varkár upphafsgildi úr birtum bilum, ekki stilltar fyrir vélina þína; skrifaðu skurðarhraða, spónþykkt, snúninga á mínútu eða fóður framleiðanda verkfæranna þinna til að yfirskrifa þau. Þegar hraðinn fer yfir hámarkshraða vélarinnar er hann settur þar og fóðrunin fylgir, þannig að spónþykktin haldist.

## Bæta við aðgerðum

Hver tækjastikuhnappur bætir við aðgerð og, þar sem hún þarf rúmfræði, byrjar val: smelltu á fleti eða brúnir í skjánum (smelltu aftur til að sleppa einum), og síðan {{ui:Lokið við val}} eða {{key:Esc}}.

| Aðgerð | Val | Hvað hún gerir |
|---|---|---|
| {{ui:Flötur}} | ekkert | Zig-zag-umferðir yfir allt hráefnið, framhjá jöðrum þess, niður að efsta punkti líkansins |
| {{ui:Vasi}} | flötur með flötum botni, kringlótt gat eða lokuð keðja brúna | Hreinsar svæðið í útfærðum umferðum innan frá og út, við hvert skref niður; eyjar (fletir sem standa upp inni í botninum) eru látnar vera; botn sem er opinn allan hringinn (ekkert hærra utan hans) er hreinsaður út að jaðri hráefnisins |
| {{ui:Aðlögun}} | sama og Vasi | Hreinsar sama svæði í umferðum sem skera hver ákveðna breidd (**Þátttaka**, hluti af þvermáli), þannig að skerinn tekur aldrei fulla breidd rifu, jafnvel í hornum; hann fer inn með skrúfulínu og klárar veggina á hverri hæð. Grannir skurðir leyfa dýpri skref og hærri fóðrun |
| {{ui:Útlína}} | flötur með flötum botni (útlínan), kringlóttur flötur eða brúnir | Fylgir útlínunni útfærðri um radíus verkfærisins, utan eða innan, með inn- og útleiðandi bogum og valkvæðum flipum |
| {{ui:Bora}} | göt (smelltu á vegg holunnar eða jaðar hennar) | Borar hvert gat með fastri lotu: stuttum stungum (G83), borun (G81) eða spónbroti (G73); eða gefðu þvermál til að bora öll göt af þeirri stærð |
| {{ui:Skábrún}} | útlína flatar eða brúnir | Keyrir skábrúnafræsara eftir brúninni svo hann sker þá breidd sem þú stillir |
| {{ui:Samsíða}} | ekkert (allt líkanið) | 3D-frágangur í samsíða línum í hvaða horni sem er, fylgir yfirborðinu með kúlu-, bull-nose- eða flötum fingurfræsi. Sjá [3D-frágang](topic:finish-3d) |
| {{ui:Scallop}} | ekkert (allt líkanið) | 3D-frágangur í umferðum sem eru ákveðna fjarlægð hver frá annarri yfir yfirborðið, svo að hryggurinn á milli þeirra hafi þá hæð sem þú biður um |

Veldu aðgerð í listanum til að breyta verkfærinu, hæðum (öryggisfjarlægð, inndráttur, fóðrunarhæð, efst, botn), skrefdýpt, skrefi á milli, efni eftir, frágangsumferð, inngangi (skrúfa, rampur eða stunga), klifurfræsingu, flipum eða lotu. {{ui:Upp}} og {{ui:Niður}} raða, {{ui:Bæla}} sleppir henni, {{ui:Eyða}} fjarlægir hana. Allt er í afturköllunarsögunni og vistað í hlutaskránni.

Skref á milli í vasa er mest hálft þvermál verkfærisins, þannig að sérhver punktur botnsins er innan eins verkfæraradíuss frá umferð. Innri horn halda radíus verkfærisins.

**Aðlögun í hreinsun** heldur þátttöku skerans nálægt einu gildi. Þátttaka 0,15 af þvermáli er þátttökuhorn um 46°: boginn á brún skerans í efninu. Útfærður vasi sker aftur á móti fulla breidd í fyrstu umferð og vefst lengra um í sérhverju innra horni. Milli umferða helst verkfærið niðri þar sem það fer um skorið loft, og lyftist og sígur í skornu lofti annars staðar. Umferðirnar eru reiknaðar á fínu neti yfir svæðið (reitir um tólfta hluta af verkfæraradíusnum), þannig að þátttakan getur orðið allt að einum reit breiðari en stillt; veggirnir eru kláraðir nákvæmlega. Stórt opið svæði gerir langt forrit með mörgum stuttum hreyfingum.

## Hermun

Slóðir eru gerðar aftur eftir hverja breytingu (líka þá hluta). {{ui:Herma}} sýnir einnig hráefnið sem eftir er eftir allt forritið. Spjaldið sýnir:

- **Hringtími**: fóðrunarhreyfingar á sínum fóðrunarhraða, hraðhreyfingar sem beinar línur á hraðhreyfingarhraða uppsetningarinnar, auk tíma verkfærisskiptingar. Raunvélar taka lengri tíma því þær hraðast upp.
- **Ofskurðir**: staðir þar sem verkfærið fór meira en 0,02 mm undir yfirborði hlutans. Rauð merki sýna þá í skjánum.
- **Efni eftir á hlutanum**.

Hráefnið er hæðarkort af efsta punkti (Z-kort), þannig að það getur ekki sýnt undirskurði. Dragðu **Spilun** til að færa verkfærið eftir forritinu. Í skjánum eru fóðrunarhreyfingar heilar og hraðhreyfingar strikaðar, með einum lit fyrir hverja aðgerð.

Þegar **Sýna hermda hráefnið** er kveikt er hráefnið litað eftir líkaninu, reit fyrir reit: **grænt** þar sem það er á líkaninu (innan 0,02 mm), **rautt** þar sem verkfærið skar inn í líkanið, og þar sem efni er eftir á líkaninu **gult** fyrir þunna húð, **appelsínugult** fyrir meira, sem dofnar í **grátt** óskorins hráefnis við 1 mm eða meira. Litirnir eru gerðir aftur við hverja breytingu, úr sama hæðarkorti og tölurnar í spjaldinu, þannig að grænt og rautt stemma við línuna Ofskurðir. Skábrún sker inn í líkanið viljandi og sýnir rautt meðfram brún sinni.

## Úttak G-kóðans

Veldu stjórnbúnaðinn undir **Úttak** og ýttu á {{ui:Sækja G-kóða}} (eða {{ui:Úttak}} á tækjastikunni):

| Stjórnbúnaður | Skrá | Athugasemdir |
|---|---|---|
| Fanuc-stíll ISO | .nc | %, O-númer, línunúmer, T M6 með G43 H, fastar lotur |
| GRBL | .nc | Engin verkfærisskipti né fastar lotur: verkfærisskipti stoppa með M0, borun er skrifuð sem venjulegar hreyfingar |
| LinuxCNC | .ngc | T M6 með G43 H, fastar lotur, M2 |
| Fanuc-stíll rennibekkur | .nc | Fyrir rennsliforrit: X sem þvermál, fóðrun á snúning, G96 undir G50-mörkum, G32 skrúfgangur |
| LinuxCNC rennibekkur | .ngc | Fyrir rennsliforrit: G7 þvermál, G95, G96, G33 skrúfgangur; skrifar enga heimkeyrslu |
| Þitt eigið | hvaða sem er | Úttak sem þú skrifaðir eða breyttir: {{ui:Breyta eftirvinnslu…}}, {{ui:Ný eftirvinnsla…}}, {{ui:Flytja inn eftirvinnsluskrá…}} |

Sérhver skrá byrjar á athugasemdum um forritið, hráefnið, vinnufærsluna og verkfærin. Hnit eru í millimetrum með 3 aukastöfum. {{ui:Verkfæraslóð (CSV)}} og {{ui:Verkfæraslóð (JSON)}} flytja út hreyfingarnar sjálfar.

**Athugaðu úttakið í hermi vélarinnar áður en skorið er, og keyrðu það í lausu lofti yfir hráefninu fyrst.** Innbyggðu úttökin þrjú eru upphafspunktar sem fylgja skjalfestri hegðun stjórnbúnaðanna; ekki hefur verið sannað að þau virki á neinni tiltekinni vél. Úttak sem þú breytir er þitt að sanna. Hvernig skrifa skal eitt: [Úttök sem þú getur breytt](topic:post-processors).

## Nákvæmt STEP fyrir verkstæðið

Undir G-kóðahnöppunum á flipanum **Aðgerðir** sækir {{ui:Nákvæmt STEP (vinnuhnit)}} skrána `<part>-work.step`: hlutinn sem nákvæmt fast efni (sannir strokkar fyrir göt og upphækkanir, sannir hringir fyrir brúnir þeirra) með uppruna sinn í vinnuuppruna þessarar uppsetningar og Z eftir verkfærisásnum. Þetta eru hnitin sem G-kóðinn notar, þannig að eigið CAM-forrit eða skoðunartæki verkstæðisins raðar líkaninu upp við forritið án þess að færa það. Skráin inniheldur aðeins hlutinn, ekki hráefnið né slóðirnar.

{{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar sama efni á eigin stað hlutarins (Z upp): sjá [Flytja út til prentunar, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Takmarkanir

- Vasar, útlínur, borun og skábrúnir eru 2,5-ása. Bogna hluta er grófað og klárað í 3D með eigin aðgerðum ([3D-grófvinnsla og leifarvinnsla](topic:rough-3d), [3D-frágangur](topic:finish-3d)). {{ui:Aðlögun}} í hreinsun er 2D (flöt gólf).
- Hallandi verkfæri, 5-ása og 4. ássfrágangur, rennsli og snertiskynjun eru til staðar, hvert með sínum takmörkunum, og **ekkert af þeim hefur verið keyrt á vél**: sjá [4- og 5-ása vinnsla](topic:multi-axis), [Rennsli í rennibekk](topic:turning) og [Snertiskynjun](topic:probing).
- Haldarar og skaft eru ekki athuguð fyrir árekstri; viðvörun birtist þegar skurður er dýpri en rásarlengd verkfærisins.
- Fóðrun og snúningshraði eru upphafsgildi. Úttak er texti sem þú getur breytt, en það ræður aðeins því hvernig hreyfingarnar eru skrifaðar; það getur ekki breytt slóðinni, bætt við ásum né vitað um vélina þína ([Úttak sem þú getur breytt](topic:post-processors) lýsir því sem það getur ekki).

## Senda forritið í vél

Í CadCraft Studio á skjáborðinu, með vél sett upp í Studio, birtist **Senda í vél…** við hlið **Sækja G-kóða** og sendir sama forrit í vélina á netinu þínu. Það er aldrei ræst úr PartCraft: ræstu það við vélina þegar ljóst er. Í vafra birtist hnappurinn ekki (vefsíða nær ekki í vél á netinu þínu): sæktu forritið í staðinn.
