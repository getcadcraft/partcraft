---
title: Mæla vegalengdir, horn og massa
summary: Smelltu á tvo hluti í sýninni fyrir minnstu fjarlægð, horn og ΔX ΔY ΔZ; lestu lengd brúnar, þvermál gats, flatarmál flatar eða hnit punkts; fáðu rúmmál, massa, massamiðju og tregðu hluta eða samsetningar.
keywords: mæla, fjarlægð, minnsta fjarlægð, horn, lengd, radíus, þvermál, flatarmál, hnit, delta, skoða, massaeiginleikar, massi, þyngd, massamiðja, tregða, tregðuvægi, eðlismassi, efni
from: 20bda0b7
---

**Mæla** virkar á líkaninu í öllum vinnusvæðum (Hönnun, Form, Herming, Generative, Framleiðsla) og í samsetningu. Hún er í hópnum **Sýn**, í valmyndinni {{ui:Sýn}}, eða ýttu á {{key:M}}. Kort opnast yfir efra vinstra horn sýnarinnar.

## Mæla eitt atriði

Smelltu á hornpunkt, brún eða flöt. Kortið sýnir:

- **Punkt** (hornpunkt, miðpunkt brúnar eða miðju hrings): X, Y, Z hans.
- **Brún**: bein, hringur eða ferill, og lengd hennar; fyrir hring einnig radíus, þvermál og miðju.
- **Flöt**: flöt, sívalningur, keila og svo framvegis, og flatarmál hennar; eðlileg stefna flatar; radíus og þvermál sívalnings (stærð gats). Flatarmál eru af facettunum sem möskvakjarninn býr til.
- **Allur hluturinn**: haltu inni {{key:Shift}} og smelltu á hlutann. Þú færð rúmmál hans, flatarmál, massa og tregðu (sjá neðar).

Bendillinn festist við hornpunkta, miðpunkta brúna og miðjur hringja innan 10 pixla; lítill blár punktur sýnir festinguna áður en þú smellir. Til að velja miðju gats, bentu á miðju holunnar; til að velja brún þess (hringinn), bentu á brúnina.

## Mæla á milli tveggja atriða

Smelltu á annað atriði. Kortið bætir við:

- **Minnstu fjarlægð** og tveimur nálægustu punktunum, teiknuðum í sýninni með línu á milli.
- **ΔX, ΔY, ΔZ** frá fyrsta nálægasta punkti að öðrum.
- **Horn** milli tveggja flatra fleta (milli eðlilegra þeirra, 0–180°), milli tveggja beinna brúna eða ása (0–90°), eða milli brúnar og flatar.
- **Bil milli flatanna** fyrir tvo samsíða flata fleti, **Miðja í miðju** fyrir tvo hringi eða göt, **Ás í ás** fyrir tvö samsíða göt eða sívalninga.

Þriðji smellurinn byrjar nýtt par. {{key:Esc}} hreinsar valin; {{key:Esc}} aftur (eða {{ui:Loka}}) lokar Mæla. {{ui:Afrita}} setur niðurstöðurnar á klippiborðið sem texta aðskilinn með flipum, tilbúinn til að líma í töflureikni.

### Hversu nákvæmt það er

PartCraft smíðar hlutinn með möskvakjarnanum, svo fjarlægðir eru reiknaðar á facettum möskvans, og kortið segir **áætlað: af facettum**: rétt fyrir flatar fleti og milli hornpunkta, aðeins skakkt fyrir bogadregna. Fínni stillingin **Ferlar** færir þá nær. Nákvæm mæling á raunverulegum yfirborðum krefst nákvæms kjarna: ekki smíðað í þessari útgáfu.

## Massaeiginleikar

Veldu {{ui:Massaeiginleikar}} í kortinu eða í valmyndinni {{ui:Sýn}}. Á hluta velurðu **Efnisgerð** í kortinu (stál, ál, plast og fleiri með venjulegan eðlismassa þeirra). Í samsetningu notar hver hluti efnið sem stillt er í eiginleikum hans (veldu hlutann, síðan **Efni**), og niðurstaðan er fyrir alla hlutana saman.

Kortið sýnir massa, rúmmál, flatarmál, massamiðju, tregðutensorinn (Ixx, Iyy, Izz og margfeldin Ixy, Iyz, Ixz, í kg·mm², um massamiðju meðfram ásum heimsins) og höfuðvægin. Án efnis sýnir það það sama á hverja einingu eðlismassa (mm⁵) og engan massa.

Tölurnar eru nákvæmar fyrir fasta efnið sem möskvakjarninn byggir (bogadregnir fletir sem facettur), svo sívalur hluti kemur örlítið lágur, og kortið segir það. Eðlismassi efna er dæmigert gildi úr handbókum; raunveruleg málmblanda eða gæðaflokkur getur verið frábrugðinn um nokkur prósent.

## Takmarkanir

- Smellir geta fundið punkt sem er falinn á bak við aðra rúmfræði; athugaðu að kortið sýni það sem þú ætlaðir.
- Mæla lokast þegar þú opnar skissu eða teikniblaðið, eða skiptir um vinnusvæði.
