---
title: Vandamál og lausnir
summary: Vandamál sem þú gætir lent í í PartCraft, allt frá því að forritið ræsist ekki til eiginleika sem mistakast, skissna sem leysast ekki, skráa sem opnast ekki og samskeyta sem haga sér illa, með skilaboðunum sem þú sérð og lagfæringunni.
keywords: vandamál, villa, hjálp, virkar ekki, mistekst, hrun, autt, webgl, webassembly, kjarni, ekki smíðað, ofskilgreint, opið snið, ekki hægt að opna, ekkert gerist, röng stefna, hægt
from: 7728542c
---

Þegar eitthvað virkar ekki, lestu **stöðustikuna** neðst fyrst: PartCraft segir þar hvers vegna það hafnaði eða hvað það býst við næst. Eiginleiki sem mistekst sýnir líka skilaboðin sín efst í hægra spjaldinu og þegar þú bendir á línu hans í sögunni.

## Forritið ræsist ekki

### „Þessi vafri getur ekki sýnt 3D (WebGL er slökkt eða vantar), svo PartCraft getur ekki keyrt hér.“

**Orsök:** vafrinn hefur 3D-grafík (WebGL) slökkta, lokaða eða ekki studda af skjákortsreklanum.

**Lagfæring:**

:::chromium
Opnaðu `chrome://settings/system` (eða `edge://settings/system` í Edge) og kveiktu á „Nota hröðun grafíkar þegar hægt er“, og endurræstu síðan vafrann. Ef hún er þegar kveikt, athugaðu `chrome://gpu` til að sjá stöðu WebGL, og uppfærðu skjákortsreklann.
:::

:::firefox
Opnaðu `about:support` og skoðaðu Graphics, WebGL. Ef það er lokað, uppfærðu skjákortsreklann. Í `about:config` verður `webgl.disabled` að vera `false`.
:::

:::safari
WebGL er alltaf kveikt í núverandi Safari. Uppfærðu macOS (Safari uppfærist með því). Ef það bilar enn, prófaðu Chrome eða Firefox á sömu Mac til að útiloka skjávélbúnaðinn.
:::

Fjarskjáborð og sumar sýndarvélar hafa ekkert WebGL. Prófaðu á tölvunni sjálfri.

### „Kjarni fasta efnisins hlóðst ekki: …“

**Orsök:** rúmfræðikjarninn (WebAssembly-forrit) náðist ekki eða ræsti ekki. Venjulega rofnaði tengingin meðan forritið hlóðst, WebAssembly er slökkt af fyrirtækjastefnu eða öryggisstillingu vafrans, eða vafrinn er mjög gamall.

**Lagfæring:** endurhlaðið síðuna meðan þú ert tengdur. Ef það heldur áfram að bila, prófaðu annan núverandi vafra. Í Firefox verður `javascript.options.wasm` í `about:config` að vera `true`. Án nettengingar hlaðast forritið og kjarni þess aðeins ef forritastikan sagði **Tilbúið án nettengingar** áður en þú misstir tenginguna ({{ui:Vista til notkunar án nettengingar}} meðan þú ert tengdur; sjá [Vinna án nettengingar](common:offline)).

### Ótengda hnappurinn segir „Gat ekki vistað“ eða „Ótengt ekki tiltækt“

**Gat ekki vistað**: sumar skrár hlóðust ekki niður. Smelltu til að reyna aftur meðan þú ert tengdur; hæg eða mæld tenging gæti þurft aðra tilraun. **Ótengt ekki tiltækt**: þessi vafragluggi getur ekki geymt afrit án nettengingar (einkagluggar og sumar stýrðar tölvur loka á það). Notaðu venjulegan glugga, eða hafðu flipann opinn.

### PartCraft er án nettengingar en úrelt

Smelltu á **Tilbúið án nettengingar** meðan þú ert tengdur og veldu {{ui:Vista aftur (sækja nýjustu útgáfu)}}.

### „Ferilsdráttur: ekki smíðaður enn. Hann þarf nákvæman kjarna, sem þessi útgáfa PartCraft hefur ekki.“

Fullu skilaboðin eru „<Heiti>: ekki smíðað enn. Hann þarf nákvæman kjarna, sem þessi útgáfa PartCraft hefur ekki. Hjálp › Hvað er ekki smíðað enn segir hvað skal gera í staðinn.“ Þú sérð þau þegar þú velur Ferilsdrátt, Brú milli sniða, Rif, flans úr plötu, yfirborðseiginleika, Sameina, Færa hlut, Skala hlut eða Brautarmynstur, og fyrir það sem aðeins nákvæmur kjarni getur smíðað. Ekkert er að vafranum þínum eða hlutnum þínum: þessi útgáfa PartCraft smíðar alla hluti með möskvakjarnanum. Sjá [Hvað er ekki smíðað enn](topic:not-built-yet) fyrir það sem á að gera í staðinn, og [Möskvakjarnann](topic:solid-kernels).

### „Hleður rúmfræðikjarnanum…“ hverfur ekki

Bíddu aðeins á hægri tengingu: kjarninn og 3D-safnið eru sótt í fyrsta sinn. Endurhlaðið síðan þá. Ef síðan sjálf sýnir villu, sjá að ofan.

## Ekkert gerist þegar ég ýti á takka

- Takkar virka ekki meðan bendillinn er í reit í spjaldi. Smelltu í 3D-sýnina eða ýttu á {{key:Esc}} eftir innslátt (eða {{key:Tab}} út).
- Örvatakkarnir og {{key:Plus}}/{{key:Minus}} snúa og stækka og minnka aðdráttinn í sýninni aðeins eftir að þú smellir í sýnina.
- Samtal er opið: svaraðu því fyrst.
- Í skissu er {{key:F}} ávölunartólið, ekki {{ui:Passa}}. Notaðu {{ui:Passa}}-hnappinn.

## Tækjastikuhnappur er grár

- Eiginleikahnappar eru gráir meðan skissa er opin. Lokaðu skissunni fyrst.
- Skissuverkfæri virka aðeins í skissu.
- {{ui:Afturkalla}} og {{ui:Endurgera}} eru gráir þegar ekkert er til að afturkalla eða endurgera.
- {{ui:Samsetning}} þarf hlut með föstu efni. {{ui:Tengill}} þarf tvo hluti í samsetningunni. {{ui:Breyta hlut}} þarf valinn hlut.
- {{ui:STEP AP242 (nákvæmt fast efni)}} og {{ui:STEP AP214 (nákvæmt fast efni)}} eru gráir í samsetningu: fluttu út hvern hlut fyrir sig. Annað forrit hafnar nákvæmu skránni: prófaðu {{ui:STEP AP214 (nákvæmt fast efni)}}, síðan {{ui:STEP (facetað, möskvakjarni)}}, og láttu okkur vita í gegnum {{ui:Hjálp}} › {{ui:Tilkynna vandamál}}.
- {{ui:Ferilsdráttur}}, {{ui:Brú milli sniða}} og aðrir eiginleikar sem þurfa nákvæman kjarna eru ekki gráir: þeir eru áfram smellanlegir, ábendingar þeirra enda á „ekki smíðað enn (þarf nákvæman kjarna)“, og smellur á einn þeirra segir það í stöðustikunni. Sjá [Hvað er ekki smíðað enn](topic:not-built-yet).
- {{ui:Teikning}} þarf hlut með föstu efni og er grá meðan skissa er opin.
- {{ui:Flytja út}}-atriði eru grá í samsetningu: samsetningar er ekki hægt að flytja út enn. Lokaðu henni, eða breyttu hlut, til að flytja út.

## Skissuvandamál

### Skissan leyfir mér ekki að bæta við tengslum

„Ekkert tengsl passa við þetta val. Veldu einn eða tvo hluti (Shift+smellur bætir við).“ Tengslin þurfa annað val. Sjá [Tengsl og víddir skissu](topic:sketch-relations) fyrir hvað hvert þeirra þarf.

### „Ofskilgreint: … getur ekki allt staðist. Afturkallaðu, eða eyddu einu þeirra.“

**Orsök:** nýja tengslið eða víddin stangast á við þau sem fyrir eru. Skissan hreyfðist ekki.

**Lagfæring:** {{key:Mod+Z}}, eða eyddu einu af rauðu atriðunum í lista hægra spjaldsins (veldu **Eyða** við hliðina á því).

### „Ofskilgreint: … er þegar gefið. Eyddu því.“

**Orsök:** tengslið bætir engu við: önnur þegar þvinga það (til dæmis Samsíða á tvær hliðar rétthyrnings, eða vídd sem er þegar föst). Það eru engar drifnar víddir í þessari smíð.

**Lagfæring:** eyddu því. Eiginleikinn smíðast samt, með viðvörun.

### „Ekki er hægt að setja þessi atriði í vídd saman.“

Þú smelltir til dæmis á punkt og hring. Settu vídd á miðpunkt hringsins í staðinn.

### „Ávöl þarf horn þar sem nákvæmlega tvær línur mætast.“ / „Radíusinn er of stór fyrir þessar línur.“

Smelltu nákvæmlega á hornpunkt tveggja heilla lína. Notaðu minni radíus en stutta línan leyfir.

### Rúmfræðin hoppar til baka þegar ég dreg hana

Dragið myndi rjúfa tengsl eða vídd, svo PartCraft setur hana til baka. Aðeins blá (vanskilgreind) rúmfræði má færa.

### „Þessi skissa getur ekki opnast: Þarf Extrude2, sem mistekst.“

Skissan liggur á fleti eiginleika sem ekki er smíðaður. Lagaðu þann eiginleika fyrst, eða afvirkjaðu hann, eða farðu áfram í söguna.

## Vandamál með eiginleika

| Skilaboð | Orsök | Lagfæring |
|---|---|---|
| „Búðu til skissu fyrst: veldu plan, Skissa, teiknaðu lokað snið, Hætta.“ | Engin ónotuð skissa með línum, og engin valin | Teiknaðu skissu, eða veldu skissuna sem á að nota í sögunni |
| „Skissan hefur ekkert lokað snið til að toga út.“ (eða „til að snúa“) | Engin lokuð lykkja úr heilum línum | Lokaðu bilunum; skiptu hjálparlínum aftur með {{key:Q}} |
| „Sniðið er opið: endi við (x, y) er ekki tengdur neinu.“ | Bil á þeim punkti | Opnaðu skissuna, dragðu endann á nágrannann svo hann smellist |
| „Sniðið greinist við (x, y): fleiri en tveir endar mætast.“ | Þrjár eða fleiri línur mætast á einum punkti | Eyddu aukalínunni, eða breyttu henni í hjálparlínu |
| „Lokuð lykkja þarf að minnsta kosti þrjár hliðar eða feril.“ | Tvær línur fram og til baka | Teiknaðu lykkjuna aftur |
| „Í gegnum allt er fyrir skurði. Notaðu dýpt fyrir upphleðslu.“ | Upphleðsla stillt á Í gegnum allt | Stilltu Endi á Blind eða Miðplan |
| „Það er ekkert til að skera á þessari hlið skissunnar. Prófaðu hina stefnuna.“ | Skurðurinn vísar frá efninu | Hakaðu við Snúa stefnu |
| „Það er ekkert til að skera ennþá.“ / „Það er ekkert til að bora ennþá.“ | Ekkert fast efni á undan þessum eiginleika | Búðu fyrst til upphleðslu, eða færðu eiginleikann neðar |
| „Teiknaðu miðlínu (hjálparlínu) í skissunni til að snúa um.“ | Snúningur án ássins | Bættu við miðlínu, eða veldu línu í Ás |
| „Sniðið sker ásinn. Haltu því öðru megin við miðlínuna.“ | Snið beggja vegna ássins | Teiknaðu hálfa sniðið aftur |
| „Settu skissupunkta þar sem götin eiga að vera (Punkt-verkfærið), og búðu síðan til gatið.“ | Engir lausir punktar í skissunni | Bættu við punktum með {{key:P}} |
| „Skúffan verður að vera breiðari en gatið.“ | Ø skúffu ekki stærra en Þvermál | Gerðu skúffuna breiðari |
| „Skúffan verður að vera grynnri en gatið.“ | Skúffa dýpri en blint gat | Gerðu hana grynnri, eða gatið dýpra |
| „Veldu eiginleikana sem á að afrita.“ | Mynstur eða spegill án þess að neitt sé hakað | Hakaðu við eiginleika undir Eiginleikar til afritunar |
| „Extrude2 hefur ekkert fast efni til að afrita.“ | Afritaði eiginleikinn mistókst eða er óvirkur | Lagaðu hann eða virkjaðu |
| „Þarf Sketch3, sem mistekst.“ | Eiginleiki sem hann treystir á er ekki smíðaður | Lagaðu eiginleikann sem nefndur er |
| „Flöturinn sem hann liggur á er horfinn (Extrude1 er ekki smíðaður).“ | Flötur skissunnar er ekki lengur til | Lagaðu þann eiginleika, eða eyddu skissunni og teiknaðu hana aftur |
| „Ekkert er eftir af hlutnum eftir þetta.“ | Skurður fjarlægði allt efni | Athugaðu stærð og stefnu skurðarins |
| „Rúmfræðikjarninn gat ekki smíðað þetta (…).“ eða „Rúmfræðikjarninn gat ekki sameinað þetta hlutnum.“ | Kjarninn hafnaði rúmfræðinni | Afturkallaðu, eða breyttu stærðunum lítillega; fletir sem snertast nákvæmlega geta valdið því |
| „Ferilsdráttur: ekki smíðaður enn. Hann þarf nákvæman kjarna, sem þessi útgáfa PartCraft hefur ekki.“ (einnig Brú milli sniða, Rif og hinir) | Eiginleiki sem var smíðaður í eldri útgáfu og aðeins nákvæmur kjarni getur smíðað. Hann er áfram í sögunni og vistast aftur óbreyttur | Afvirkjaðu eða eyddu honum; sjá [Hvað er ekki smíðað enn](topic:not-built-yet) fyrir það sem á að gera í staðinn |
| „5 mm ávöl passar ekki hér (…).“ / „2 mm skástinga …“ | Stærðin er of stór fyrir flöt við hlið brúnarinnar, eða hornið er ekki hægt að blanda | Minni stærð, eða færri brúnir í hverjum eiginleika |
| „Ávöl: í þessari útgáfu aðeins beinar brúnir milli tveggja sléttra flata (möskvakjarninn smíðar þær). Ávalaðu eða skástingdu bogadregnar brúnir í skissunni.“ (einnig Skástinga) | Valin brún er ávöl, eins og jaðar gats, eða liggur á bogadregnum fleti | {{ui:Velja brúnir}} og fjarlægðu hana; ávalaðu eða skástingdu það horn í skissunni í staðinn |
| „Ávöl sem breytist eftir brúninni: ekki smíðuð enn (þarf nákvæman kjarna). Gefðu henni einn radíus.“ | **Breytilegur radíus** er hakaður | Taktu hakið af og gefðu einn radíus |
| „Ávöl með möskvakjarnanum: þar sem ávölaðar brúnir mætast eru þær skáskornar, ekki blandaðar.“ (⚠, viðvörun) | Valdar brúnir mætast á horni; ávölin mætast þar í skarpri brún | Ekkert að laga: hluturinn er smíðaður. Ávalaðu færri brúnir ef brúnin skiptir máli |
| „Brún sem hann ávalar er horfin: brúnin milli Extrude1 og Cut2.“ | Fyrri breyting fjarlægði brúnina | {{ui:Velja brúnir}}, fjarlægðu rauðu brúnina og veldu nýju |
| „Veldu brúnirnar í sýninni og bættu þeim síðan við.“ | Ávölun eða skástinga hefur engar brúnir | {{ui:Velja brúnir}} |
| „Veldu fleti til að fjarlægja (opna), og skelðu síðan.“ | Skelin hefur enga opna fleti | {{ui:Velja fleti}} |
| „Skelin gat ekki verið gerð með þessari þykkt (…).“ | Veggurinn er þykkari en þunnur hluti líkansins eða radíus ávölunar | Þynnri veggur, eða stærri ávalir |
| „Skel: í þessari útgáfu opnar hún aðeins slétta fleti (möskvakjarninn smíðar hana).“ | Opinn flötur er bogadreginn | {{ui:Velja fleti}} og fjarlægðu hann; opnaðu aðeins slétta fleti |
| „Halli: í þessari útgáfu aðeins sléttir fletir (möskvakjarninn smíðar hann).“ | Flötur sem er hallaður er strokkur, keila eða frjáls flötur | Fjarlægðu hann; hallaðu aðeins sléttum fleti |
| „Flöturinn sem hann opnar er horfinn (…).“ | Fyrri breyting fjarlægði flötinn | {{ui:Velja fleti}} aftur |
| „Fillet1 breytir brúnum eða veggjum hlutarins; ekki er hægt að afrita hann. …“ | Mynstur eða spegill afritar ávölun, skástingu eða skel | Afhakaðu hann; myndaðu skurðina fyrst, síðan ávölunina |
| „Hann liggur á fleti sem aðeins nákvæmur kjarni getur fundið: ekki smíðað enn í þessari útgáfu.“ | Skissa á fleti sem möskvakjarninn finnur ekki, eins og sú sem var gerð í eldri útgáfu | Teiknaðu á grunnplan eða flatan flöt útdráttar og staðsettu hana með víddum |
| „Hann notar flöt eða brún á fasta efninu, sem aðeins nákvæmur kjarni getur fundið: ekki smíðað enn í þessari útgáfu.“ | Viðmiðunarplan, ás eða punktur á fleti eða brún fasta efnisins | Búðu hann til úr grunnplönum, skissupunktum eða hnitum í staðinn |
| „Útdráttur upp að fleti, næsta fleti eða hnúti: ekki smíðað enn (þarf nákvæman kjarna).“ / „Mjókkun: ekki smíðuð enn (þarf nákvæman kjarna).“ | Endaskilyrði eða mjókkun sem aðeins nákvæmur kjarni smíðar | Notaðu Blind- eða Miðplan-dýpt sem þú mælir; hafðu Mjókkun í 0 |

## Bendingavandamál

- „Þessi flötur er bogadreginn. Veldu sléttan flöt eða plan til að teikna á.“ Skissur þurfa sléttan flöt. Teiknaðu á grunnplan og staðsettu skissuna með víddum í staðinn.
- Flötur segir „Fast þar sem valið“: hann var ekki búinn til af skissubrún (til dæmis flötur af afriti úr mynstri), svo skissa á honum helst kyrr þegar hluturinn breytist.
- Brúnir eru erfiðar að hitta: aðdráttur inn. Brún vinnur yfir fletinum við hlið hennar þegar bendillinn er beint á henni.

## Skráavandamál

| Skilaboð | Lagfæring |
|---|---|
| 'PartCraft opnar eigin .partcraft.json-skrár, útflutning úr CadCraft-fjölvanum fyrir SolidWorks (.cadcraft-sw.json) og STEP-skrár. „bracket.igs“ er ekkert af þessu.' | Aðeins þessar skrár eru þekktar (og STL-, OBJ- og 3MF-möskvar og `.3dm`-skrár) |
| '„part.stp“ er ekki STEP-skrá (hún byrjar ekki á ISO-10303-21).' | Skráin er ekki STEP-texti |
| „Sú STEP-skrá er of stór (yfir 60 MB) til að flytja inn hér.“ | Einfaldaðu hana við upprunann |
| „Sú skrá er of stór til að vera PartCraft-hlutur.“ á þinni eigin vistuðu skrá | Stórt STEP-fast efni sem var flutt inn í eldri útgáfu gerði hlutaskrána yfir 50 MB. Notaðu eldra afrit án þess |
| „Sú skrá er of stór til að vera PartCraft-hlutur.“ | Skráin er yfir 50 MB; hún er ekki PartCraft-skrá |
| „Þetta er ekki PartCraft-skrá (hún er ekki JSON).“ / „Þetta er ekki PartCraft-skrá.“ | Skráin er skemmd eða tilheyrir öðru forriti |
| „Þessi skrá var vistuð af nýrri PartCraft (skráarútgáfa …); þessi les útgáfu …“ | Opnaðu hana í nýrri PartCraft |
| „Extrude2: dýptin er röng.“ (eða annað gildi) | Skránni var breytt með hendi eða hún skemmdist. Notaðu eldra afrit |
| Innsetning í samsetningu segir „Part1.partcraft.json hefur ekkert fast efni til að setja inn.“ | Hlutaskráin hefur ekkert fast efni. Opnaðu hana, búðu til fast efni, vistaðu og settu inn aftur |

**Vistaða skráin mín er ekki þar sem ég bjóst við.** Vistun er niðurhal: leitaðu í niðurhalsmöppu vafrans þíns, eða opnaðu niðurhalslistann af tækjastiku vafrans. Sjá [Hvar skrárnar þínar fara](common:your-files).

**Ég opnaði hluta en samsetningin er enn á skjánum.** Hlutinn hlóðst á bak við samsetninguna. Veldu {{ui:Loka}} til að loka samsetningunni og sjá hlutinn. Lokaðu samsetningum áður en þú opnar hlutaskrár.

## Teikniblaðsvandamál

| Skilaboð | Lagfæring |
|---|---|
| „Búðu fyrst til fast efni, og gerðu síðan teikningu af því.“ | Smíðaðu hlutinn fyrst |
| „Ekkert pláss á blaðinu fyrir: smáatriði. Gerðu smáatriðið minna eða fjarlægðu sýn.“ | Minni **Radíus smáatriðis** eða **Mælikvarði smáatriðis**, eða fjarlægðu sniðið |
| „Smáatriði er tekið úr fram-, efri-, hægri- eða sniðsýninni.“ | Smelltu á eina af þessum sýnum |
| „Smelltu á eina af sýnunum.“ | Smellurinn var á auðu blaði |
| „Staðsetning þarf að minnsta kosti eina gagnaviðmiðun.“ og aðrar rammaskilaboð | Stilltu gagnaviðmiðin sem spjaldið biður um, eða veldu annað einkenni |
| „Teikningasýnirnar gátu ekki verið gerðar: …“ | Afturkallaðu síðustu breytingu. Ef það heldur áfram, vistaðu, endurhlaðu og opnaðu hlutinn aftur |

## Samsetningarvandamál

| Skilaboð | Lagfæring |
|---|---|
| „Smíðaðu fast efni fyrst, og settu það síðan í samsetningu.“ | Hluturinn hefur ekkert fast efni enn |
| „Settu annan hlut inn fyrst (Bæta við afriti, Setja inn, eða Breyta › Tvöfalda).“ | Tengill þarf tvo hluti |
| „Veldu flöt á öðrum hlut.“ | Báðir fletir tengils verða að vera á mismunandi hlutum |
| „Sá flötur er bogadreginn. Veldu sléttan flöt …“ | Tenglar byrja á sléttum flötum. Notaðu síðan **Miðja á** fyrir gat eða snúningsás |
| „Bracket2 er ekki tengdur við jarðtengda hlutinn, svo hann stendur þar sem hann var settur.“ | Bættu við tengli frá honum á hlut sem er staðsettur |
| „Revolute3 lokar lykkju sem getur ekki lokast: hún er 2.000 mm af.“ … | Hlutirnir geta ekki allir mæst: athugaðu lengdirnar, fletina sem hver tengill notar, fráviksin og mörkin í lykkjunni; eða fjarlægðu einn tengil úr lykkjunni |
| „Flöturinn sem þessi tengill notar er horfinn af Bracket.“ / „Ásinn sem þessi tengill notar er horfinn af Bracket.“ | Hlutnum var breytt. Fjarlægðu tengilinn og búðu hann til aftur |
| „Ásinn liggur meðfram fletinum, svo hann getur ekki ákveðið miðju tengilsins.“ | Veldu ás sem sker flötinn, eða „Upphafspunkt flatarins“ |
| „Samsetning heldur að minnsta kosti einum hluta. Lokaðu henni í staðinn.“ | Notaðu {{ui:Loka}} |

**Hlutarnir eru tengdir en á röngum stað.** Stilltu **Miðja á** fyrir báðar hliðar tengilsins á gatið eða snúningsásana sem eiga að standa í röð, og stilltu síðan **Horn (°)** og **Frávik (mm)**.

## Þetta er hægt

- Stilltu **Feril** á Venjulegt eða Gróft meðan þú módelar; skiptu yfir í Fínt áður en þú flytur út.
- Stór fjöldi mynstureintaka (hundruð afrita) tekur tíma að endurreikna við hverja breytingu. Afvirkjaðu mynstrið meðan þú vinnur í öðrum eiginleikum.
- Árekstrarathugun og hreyfiathugun bera saman hvert par af hlutum; stórar samsetningar taka lengri tíma.
- Lokaðu öðrum þungum flipum. PartCraft keyrir á örgjörva og skjákorti tölvunnar þinnar.

## Enn fastur

Vistaðu skrána fyrst ({{key:Mod+S}}), endurhlaðið síðan síðuna og opnaðu hana aftur. Ef eiginleiki mistekst enn, veldu hann, lestu skilaboðin hans og prófaðu {{key:Mod+Z}} aftur að síðasta góða ástandi.
