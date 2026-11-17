---
title: Gerðu teikningu með útliti, snið og GD&T
summary: Opnaðu teikningarblaðið, bættu við sniði og smáatriðisútliti, settu viðmiðanir, rammastýringar og tákn fyrir yfirborðsgrófleika, veldu stærð blaðsins, fylltu út titilreitinn og útgáfureitinn og fluttu blaðið út sem PDF.
keywords: gatatafla, gataskrá, staðsetningar gata, merkimiðar, teikning, 2D teikning, blað, stærð blaðs, a4, a3, a2, a1, a0, ansi, titilreitur, útgáfa, útgáfureitur, teikningarnúmer, efni, pdf, útlit, rétthyrnd vörpun, þriðja horn, jafnskálað, snið, smáatriði, gd&t, viðmiðun, rammastýring, vikmörk, staðsetning, flatneskja, yfirborðsgrófleiki, grófleiki, prentun
from: 39e944c0
---

PartCraft býr til teikningarblað úr hlutnum: framanútlit, ofanútlit og hægra útlit í þriðja horns vörpun, jafnskálað útlit, heildarmál og titilreit á blaði frá A4 til A0 eða ANSI A til E. Ofan á það má bæta við sniði, smáatriðisútliti og GD&T táknum. Blaðið uppfærist þegar hluturinn breytist og stillingar þess eru vistaðar í hlutaskránni.

## Opnaðu teikningarblaðið

1. Smíðaðu hlutinn. (Ef ekkert er smíðað: „Smíðaðu fast efni fyrst, og gerðu síðan teikninguna af því.“)
2. Ýttu á {{ui:Teikning}} á tækjastikunni.

3D-útsýnið er leyst af hólmi af blaðinu. Tækjastikan sýnir {{ui:Viðmiðun}}, {{ui:Rammi}}, {{ui:Yfirborð}}, {{ui:Smáatriði}}, {{ui:PDF}} og {{ui:Til baka}}, og hægra spjaldið ber yfirskriftina **Teikning**. Stöðustikan segir hvernig útlitin voru gerð: „Teikning (ferlar eru teiknaðir sem flötungar). Viðmiðun, Rammi og Yfirborð setja GD&T á útlit; spjaldið stillir snið og smáatriðisútlit.“ Útlitin eru teiknuð úr flötungum möskvakjarnans, þannig að ávalar brúnir eru stuttir beinir bútar; sannir bogar krefjast nákvæms kjarna, sem þessi útgáfa hefur ekki.

Færðu þig um blaðið: snúðu hjólinu til aðdráttar, dragðu með hægri eða miðjutakkanum til að hliðra, ýttu á {{key:F}} til að passa blaðið í glugga. Með blaðið í fókus stækka {{key:Plus}} og {{key:Minus}} og {{key:Shift}} ásamt örvatökkunum hliðrar.

Ýttu á {{ui:Til baka}}, {{ui:Aftur í líkanið}} eða {{key:Esc}} (þegar ekkert er valið og ekkert verkfæri er virkt) til að fara aftur í þrívíða líkanið.

## Það sem er á blaðinu

- **Blaðið sem þú velur**, lárétt (A3 nema þú veljir annað), með ramma og **titilreit**: titill, fyrirtæki, teikningarnúmer, útgáfa, efni, teiknað / yfirfarið / samþykkt af, dagsetning, mælikvarði, stærð blaðs, „Einingar: millimetrar · þriðja horns vörpun“, og hvort útlitin eru nákvæm eða flötungar.
- **Útgáfureitur** efst í hægra horni þegar þú bætir við útgáfu.
- **Framanútlit, ofanútlit og hægra útlit**: ofanútlitið fyrir ofan framanútlitið, hægra útlitið hægra megin við það. Faldar brúnir eru strikaðar.
- **Jafnskálað útlit** þar sem rúm er fyrir það.
- **Heildarmál**: breidd og hæð á framanútlitinu, dýpt á ofanútlitinu.
- Einn **mælikvarði** fyrir aðalútlitin úr ISO-röðinni (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), valinn svo þau passi.

## Veldu stærð blaðsins

Á teikningarblaðinu, með ekkert valið, veldu {{ui:Blað}} í hægra spjaldinu: **A4, A3, A2, A1, A0** (ISO 216) eða **ANSI A, B, C, D, E** (11 × 8.5 til 44 × 34 tommur). Útlitin eru sett upp aftur í stærsta ISO-mælikvarða sem passar, þannig að stærra blað getur sýnt hlutinn stærri.

## Fylltu út titilreitinn

Reitirnir **Titilreitur** í hægra spjaldinu fara beint á blaðið: {{ui:Titill}}, {{ui:Teikningarnúmer}}, {{ui:Útgáfa}}, {{ui:Fyrirtæki}}, {{ui:Teiknað af}}, {{ui:Yfirfarið af}}, {{ui:Samþykkt af}}, {{ui:Dagsetning}} (ár-mánuður-dagur), {{ui:Almennt vikmörk}} og {{ui:Yfirborð}} (síðustu tvö prentast rétt fyrir ofan titilreitinn). Skrifaðu í reit og ýttu á {{key:Enter}} eða smelltu annars staðar. Tómur reitur skilur klefann eftir auðan, nema:

- **Titill** sýnir nafn hlutarins þar til þú skrifar annað.
- **Dagsetning** sýnir daginn í dag þar til þú skrifar annað.
- **Útgáfa** sýnir nýjustu útgáfuna í listanum þar til þú skrifar annað.

**Efni** kemur frá hlutnum: smelltu á tómt svæði í líkaninu og veldu síðan {{ui:Efni}} í hlutspjaldinu. Sama efni gefur massaeiginleikum Measure eðlismassa sinn.

## Bættu við útgáfum

Undir **Útgáfur**, ýttu á {{ui:Bæta við útgáfu}}. Hver ný röð fær næsta staf (A, B, C …, eftir Z kemur AA) og dagsetningu dagsins í dag. Skrifaðu hvað breyttist og hver gerði breytinguna. {{ui:Eyða}} fjarlægir röð. Útgáfureitinn efst í hægra horni blaðsins sýnir þær, elstu fyrst, allt að 20.

Stærð blaðs, titilreitur, útgáfur og efni eru vistuð í hlutaskránni, og hver breyting er eitt skref í {{ui:Afturkalla}}.

## Bættu við sniðsútliti

Hlutnum er skorið með plani og skurðurinn er skyggður. Eins og hin útlitin er sniðið teiknað úr flötungum, þannig að ávalar brúnir eru stuttir beinir bútar.

1. Í hægra spjaldinu, stilltu **Snið A-A** á **Af framanútlitinu**, **Af ofanútlitinu** eða **Af hægra útlitinu**.
2. Sniðið birtist á blaðinu, skyggt þar sem skurðurinn fer í gegnum efni, með skurðarlínunni og „A“ örvunum sínum á útlitinu sem það er tekið af.
3. Stilltu **Skurður við (mm)** til að færa skurðarplanið. Það byrjar í miðju hlutarins.

Stilltu **Snið A-A** aftur á **Ekkert** til að fjarlægja það.

## Bættu við smáatriðisútliti

1. Stilltu **Smáatriði B** á útlitið sem á að stækka (eða ýttu á {{ui:Smáatriði}} á tækjastikunni).
2. Smelltu á miðju svæðisins sem á að stækka, á því útliti. Hringur merktur „B“ markar það, og stækkaða **Smáatriði B** birtist á blaðinu með eigin mælikvarða, til dæmis „Smáatriði B (2:1)“.
3. Stilltu **Radíus smáatriða (mm)** fyrir stærð hringsins og **Mælikvarði smáatriða** fyrir stækkunina: 2, 4, 5 eða 10 × blaðið.

Smáatriði má taka af framan-, ofan-, hægra eða sniðsútliti, ekki af jafnskálaða útlitinu. Ef ekki er pláss fyrir öll útlitin segir spjaldið: „Ekkert pláss á blaðinu fyrir: smáatriði. Gerðu smáatriðið minna eða slepptu útliti.“

## Bættu við gatatöflu

Gatatafla skráir göt hlutarins með staðsetningum sínum, til bors eða CNC: veldu **Gatatafla** › **Af ofanútlitinu** (eða framan, eða hægra) á spjaldinu.

- Sérhvert gat sem sést beint í gegnum það útlit fær merki við hlið sér: **A1**, **A2** … fyrir fyrstu stærð, **B1** … fyrir þá næstu.
- Taflan skráir hvert merki, **X** og **Y** þess í millimetrum, og stærð þess: „Ø14 GEGNUM“, „Ø6.6 × 10 DJÚPT“, sökkun eða niðursökkun, eða gengjuvísun fyrir gengjað gat.
- X og Y eru mæld frá neðra vinstra horni útlínu útlitsins, merkt **X0 Y0** á blaðinu.
- Göt sem myndast af mynstrum eru talin með. Göt sem eru ekki hornrétt á útlitið eru talin í spjaldinu og sleppt úr töflunni.

Taflan fer á autt svæði á blaðinu og í PDF-ið.

## Settu GD&T og tákn fyrir yfirborðsgrófleika

1. Ýttu á {{ui:Viðmiðun}}, {{ui:Rammi}} (rammastýring) eða {{ui:Yfirborð}} (tákn fyrir yfirborðsgrófleika).
2. Smelltu á punktinn á útliti þar sem það festist. Það smellur á næstu teiknuðu línu innan 2.5 mm.
3. Táknið birtist með leiðara, valið, og hægra spjaldið sýnir stillingar þess.

Dragðu tákn til að færa það; leiðari þess helst á punktinum. Með tákn valið hreyfa örvatakkarnir það um 1 mm. {{key:Delete}} eða {{key:Backspace}} (eða {{ui:Eyða}} í spjaldinu) fjarlægir það; {{ui:Lokið}} eða {{key:Esc}} afvelur það. Sérhver breyting er á afturköllunarlistanum.

### Viðmiðun

**Stafur**: A til Z, án I, O og Q (þær líkjast 1, 0 og O). Hver ný viðmiðun fær næsta laus staf.

### Rammastýring

| Stilling | Val |
|---|---|
| **Vikmörk** | Beinleiki, Flatneskja, Hringlaga, Sívalningsleiki, Snið línu, Snið yfirborðs, Hornréttleiki, Hallaleiki, Samsíðuleiki, Staðsetning, Samása og Samhverfa (bæði felld út í Y14.5-2018, og merkt sem slík), Hringlaga slag, Heildarslag |
| **Svæði (mm)** | Gildi vikmarkanna, sjálfgefið 0.1 |
| **Þvermálssvæði (⌀)** | Fyrir einkenni með sívalningslaga svæði; sjálfgefið á fyrir Staðsetningu |
| **Efni** | RFS (ekkert), MMC (Ⓜ), LMC (Ⓛ), þar sem einkennið leyfir það |
| **Aðalviðmiðun / Aukaviðmiðun / Þriðja viðmiðun** | Allt að þrír viðmiðunarstafir, hver með **… breyti** (MMB, LMB) þar sem leyfilegt er |

PartCraft athugar rammann samkvæmt reglum ASME Y14.5 og segir efst í spjaldinu hvað er rangt, til dæmis „Flatneskja er lögunarvikmörk: hún tekur ekki viðmiðunartilvísanir.“ eða „Staðsetning þarf að minnsta kosti eina viðmiðunartilvísun.“ Línan **Lesið** lýsir rammanum með orðum.

### Yfirborðsgrófleiki

| Stilling | Val | Sjálfgefið |
|---|---|---|
| **Ra (µm)** | Meðalgrófleiki | 1.6 |
| **Ferli** | hvaða ferli sem er, vélunnið, ekkert efni fjarlægt | vélunnið |
| **Athugasemd** | Allt að 40 stafir, svo sem stefna áferðar eða ferli | |

Með ekkert valið sýnir spjaldið **Athugasemdir á blaðinu**, hvor með **Velja**.

## Flyttu út PDF

Ýttu á {{ui:PDF}} á tækjastikunni, {{ui:Flytja út PDF}} í spjaldinu, eða {{ui:Flytja út}}, og síðan {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}} úr líkaninu. PDF-skráin hleðst niður sem `<part name> - drawing.pdf`, og stöðustikan telur upp hvað er á henni.

Prentaðu hana með „Raunstærð“ á pappír af stærð blaðsins til að halda mælikvarðanum réttum.

## Takmarkanir

| Ekki smíðað enn | Gerðu þetta í dag |
|---|---|
| Mál önnur en þrjú heildarmál | Bættu þeim við á PDF með merkingarforriti, eða fluttu út skissu eða flöt sem DXF og málsettu hana í 2D CAD-forriti |
| Fleiri en eitt snið eða smáatriði; útbrotin, hjálparútlit og varpaðir útlit | Ekki í boði |
| Fyrsta horns vörpun, hreyfanleg útlit, lóðrétt blöð | Þriðja horn, sjálfvirk uppsetning, lárétt |
| Frjálsir textareitir og töflur á blaðinu (önnur en titil- og útgáfureitir) | Notaðu athugasemd um yfirborð, eða bættu texta við PDF-ið |
| Teikningar af samsetningum | Ekki í boði |

Stafir utan vestur-evrópska stafasettsins prentast sem „?“ (PDF-ið notar innbyggt Helvetica letur lesandans). GD&T táknin eru teiknuð sem línur, þannig að þau prentast í hvaða lesanda sem er.

## Láttu blaðið sjá um það

- **Blað › Sjálfvirkt** velur pappírinn fyrir þig: stærsta staðlaða mælikvarða upp í 1:1, á minnsta A-stærðarblaðinu sem heldur útlitunum í þeim mælikvarða (listinn sýnir hvaða blað var valið).
- **Málsetja götin** málsetur götin á útlitinu sem sér flest þeirra beint: miðmerki á hverju, eina vísun fyrir hverja stærð („2× Ø6 GEGNUM“ með leiðara), og staðsetningar þeirra mældar frá neðra vinstra horni útlitsins. Heildarbreidd, hæð og dýpt eru alltaf til staðar.
