---
title: 4- og 5-ása vinnsla
summary: Segðu PartCraft hvaða snúningsása vélin hefur, hallaðu verkfærinu fyrir hverja venjulega aðgerð, frágangaðu yfirborð með kúlufingurfræsi sem hallar meðan hann sker, eða snúðu hlutanum undir verkfærinu á 4. ási. Hvað er skrifað í G-kóðann og hvað hefur ekki verið sannað.
keywords: 5 ása, fimm ása, 4 ása, fjórði ás, fjölása, multiaxis, 3+2, vísað, staðsetning, halli, hallandi verkfæri, snúningur, trunnion, borð, haus, a-ás, b-ás, c-ás, tcp, rtcp, verkfærismiðja, g43.4, andhverfur tími, g93, kinematics, snúningspunktur, swarf, leiðarhorn
from: c4f1c491
---

Manufacture getur haldið verkfærinu í horni, og getur fært snúningsásana meðan skorið er. Þrjár leiðir gera það, frá einfaldastu og upp.

**Ekkert hér hefur verið keyrt á vél.** Slóðirnar eru prófaðar gegn rúmfræðinni með prófunum og G-kóðinn er lesinn til baka, en innbyggðu úttökin fylgja skjalfestum kóðum stjórnbúnaðanna, ekki neinni vél fyrir framan okkur. Sannaðu forritið í hermi stjórnbúnaðarins þíns og í lausu lofti áður en það mætir málmi.

## Snúningsásar vélarinnar

Á flipanum **Uppsetning** segir {{ui:Snúningsásar}} hvað vélin hefur:

| Val | Vélin |
|---|---|
| Ekkert (3 ásar) | Venjuleg fræsivél. Sérhver aðgerð sem þarf hallað verkfæri varar við, og úttakið neitar að skrifa hana. |
| A (snýst um X) | Einn snúningsás eftir X: 4. ásborð eða vísari. Verkfærið getur hallað aðeins í Y–Z plani. |
| B (snýst um Y) | Einn snúningsás eftir Y. Verkfærið getur hallað aðeins í X–Z plani. |
| A og C | Hallandi ás um X sem ber, eða er borinn af, snúningi um Z: trunnion-borð eða haus. |
| B og C | Það sama með hallann um Y. |

Síðan:

- **Borið af**: {{ui:Borðið (hluturinn snýst)}} eða {{ui:Hausinn (verkfærið snýst)}}. Borð snýst í öfuga átt til að koma sama fleti undir verkfærið, þannig að formerki allra horna fylgir þessu vali.
- **Stjórnbúnaðurinn heldur oddi verkfærisins á slóðinni (TCP)**: þegar kveikt, eru X Y Z í forritinu oddur verkfærisins í hnitum hlutans sjálfs, og stjórnbúnaðurinn sér um afganginn (innbyggðu Fanuc-stíls- og LinuxCNC-úttökin skrifa `G43.4` fyrir lengd verkfærisins). Þegar slökkt, á borðvél, skrifar PartCraft X Y Z eins og snúið borðið ber hlutann, um **snúningsmiðjuna** sem þú gefur (í vinnuhnitum; 0, 0, 0 þegar vinnuuppruninn er á miðjunni). Hausvél þarf TCP kveikt: án þess þyrfti forritið lengd snúningspunkts vélarinnar, sem PartCraft þekkir ekki.
- **Hallamörk**: hversu langt hallandi ásinn fer.

Vélar eru mismunandi í því hvaða átt teljast jákvæðar. Ef ás snýst öfugt á þinni vél, breyttu formerkinu í afriti af úttakinu ([Úttök sem þú getur breytt](topic:post-processors)).

## Hallandi verkfæri fyrir venjulega aðgerð

Sérhver fræsiaðgerð ({{ui:Flötur}}, {{ui:Vasi}}, {{ui:Aðlögun}}, {{ui:Útlína}}, {{ui:Bora}}, {{ui:Skábrún}}, {{ui:Samsíða}}, Scallop, {{ui:3D grófvinnsla}}, {{ui:Leifar}}) hefur **Halli verkfæris** og **Halli í átt að**: stefnu verkfærisins fyrir þessa aðgerð eina, mælda frá verkfærisás uppsetningarinnar. Þetta er 3+2 vinnsla: snúningsásarnir fara í stöðu og haldast þar meðan þrír ásar skera.

- Skrifaðu hornin tvö, eða ýttu á {{ui:Verkfæri hornrétt á flöt}} og smelltu á flatan flöt: verkfærið mun benda beint á hann.
- Veldu fleti og brúnir aðgerðarinnar eins og venjulega. Það sem telst gólf eða gat er metið eftir hallandi verkfærinu.
- Hráefnið í þessari stefnu er kassinn sem heldur snúna hráefninu, þannig að hæðir og fjarlægðir eru öruggar frá þeirri hlið.

Í G-kóðanum fer verkfærið upp áður en aðgerðin hefst, snúningsásarnir snúast, og verkfærið kemur niður yfir fyrsta punktinn sinn. Á borðvél án TCP haldast bogar bogar og föst borunarlota haldast lota (skrifaði rammin er aðeins snúinn um Z). Með TCP í hallandi plani verða bogar stuttar línur og lotur þær hreyfingar sem þær standa fyrir.

Hermun hráefnisins keyrir hallandi stefnu **sjálfstætt**: hún sýnir hvað þessi aðgerð sker úr öllu hráefninu séð frá hliðinni hennar og finnur ofskurði þar, en skurðir frá öðrum stefnum eru ekki færðir yfir.

## 5-ása frágangur

{{ui:Meira}} á Manufacture-tækjastikunni listar þessa aðgerð og þá næstu efst á flipanum **Aðgerðir**.

{{ui:5 ása}} er [samsíða frágangsumferðin](topic:finish-3d) með **kúlufingurfræsi sem hallar meðan hann vinnur**. Kúla sker með kúlu, og kúlan er sú sama hver sem hallinn er um miðju sína, þannig að kúlan fylgir nákvæmlega þeirri slóð sem 3-ása umferðin gefur og það eina sem breytist er stefna verkfærisins:

- **Í átt að yfirborðinu**: 1 = hornrétt á yfirborðið, 0 = upprétt, eitthvað þar á milli.
- **Halla fram**: gráður eftir stefnu skurðarins, þannig að kyrr miðja kúlunnar sé ekki það sem sker.
- **Mesti halli**: verkfærið hallar aldrei lengra en þetta frá verkfærisás uppsetningarinnar.

Á stöðum þar sem skaftið myndi snerta líkanið er hallinn minnkaður þar til það er laust, og aðgerðin segir á hversu mörgum punktum það gerðist. Hver umferð er tekin inn og út með beinni lyftingu.

## Snúningsfrágangur (4. ás)

{{ui:Snúningur}} er fyrir hlut sem er haldinn eftir **X vinnunnar** á snúningsási. Hluturinn snýst og kúlufingurfræsir, sem bendir alltaf á ásinn, fylgir yfirborði hans:

- **Umferðir**: {{ui:Eftir ásnum}} (línur eftir X, eitt skref á milli snúninga) eða {{ui:Umhverfis hlutinn}} (hringir, eitt skref á milli X).
- **Ás á Y / Z**: hvar ásinn er. Tómt þýðir miðja hráefnisins. Á borðvél án TCP verður þetta að vera snúningsmiðjan í uppsetningu; aðgerðin varar við þegar svo er ekki.
- **Frá / Til X** og **Frá / Til horn**: sá hluti lengdarinnar og snúningsins sem skera á.

Hæð kúlunnar yfir ásnum á sérhverjum punkti er nákvæmt fall kúlu á netinu af hlutanum, frá þeirri hlið.

## Takmarkanir

- 5-ása og snúningsfrágangur taka **kúlufingurfræsi** eingöngu. Engin swarf-skurður (hlið verkfærisins á beinum vegg), engar flæðilínur eftir eigin stefnum yfirborðs, engin fjölása-grófvinnsla og ekkert sjálfvirkt val á halla til að forðast árekstur.
- 5-ása og snúningsslóðir eru **ekki keyrðar í gegnum hermun hráefnisins**, sem er hæðarkort og getur ekki haldið hallandi skurði.
- Skaftið er athugað í 5-ása frágangi gegn líkaninu séð að ofan; haldarinn, spindillinn og vélin sjálf eru hvergi athuguð.
- Snúningsfrágangur sker aðeins það sem verkfærið sér þegar það horfir á ásinn.
- 5-ása frágangur tekur mínútu eða meira að reikna á stórum hluta: skaftið er athugað í sérhverjum punkti sérhverrar umferðar.
- Þegar snúningsásarnir hreyfast með línulegu ásunum og TCP er slökkt, skrifa innbyggðu úttökin fóðrunina sem andhverfan tíma (`G93`), og fara svo aftur í `G94`.
- Engir kóðar fyrir hallandi vinnuplan (`G68.2` og þess háttar) eru skrifaðir, og engin vélarsértæk mörk, afvinding né árekstrarsvæði eru þekkt.
