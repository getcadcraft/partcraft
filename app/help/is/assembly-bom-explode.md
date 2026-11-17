---
title: Stykjalisti, sundurtekin sýn og hreyfing hluta
summary: Gefðu hlutum í samsetningu númer, lýsingu og efni, lestu og sæktu efnislistann, búðu til sundurtekna sýn með skrefum eða sjálfvirkt, færðu hluta sem eru ekki tengdir með hendi, settu takmörk á tengla og fluttu alla samsetninguna út sem STL, 3MF eða efnislista.
keywords: efnislisti, stykjalisti, hlutanúmer, efni, eðlismassi, csv, sundurtekin sýn, sundurtaka, fella saman, slóðalínur, færa hlut, draga, stýritól, færa, snúa, takmörk tengils, útflutningur samsetningar, skref samsetningar, teikning samsetningar, blöðrur
from: ebc9f6f3
---

Þessi verkfæri eru í hægra spjaldinu á samsetningu (sjá [Byggðu samsetningu](topic:build-assembly)).

## Eiginleikar hluta

Veldu hlut í listanum vinstra megin. Undir **Eiginleikar hlutar** stillirðu:

- **Hlutanúmer** (allt að 40 stafir) og **Lýsing** (allt að 200).
- **Efni**: algengt efni með sínum eðlismassa, eða **Sérsniðinn eðlismassi…** til að slá hann inn í g/cm³. Spjaldið sýnir þá massa hlutarins.

Eiginleikar tilheyra hlutnum, þannig að öll afrit hans deila þeim. Þeir eru vistaðir í samsetningarskránni.

## Efnislisti

Með engu valið ({{key:Esc}}) sýnir spjaldið **Efnislista**: eina röð fyrir hvern hlut með hlutnúmeri, magni (hversu mörg afrit), hlutanúmeri, heiti, efni og massa. Hlutanúmer fylgja þeirri röð sem hlutirnir birtast fyrst í listanum. Massi notar rúmmál hvers hluta (af þríhyrningslíkaninu sem möskvakjarninn byggir, aðeins of lágt á kringlóttum hlutum) og efni hans. Hluti án efnis hefur engan massa, og þá er engin samtala.

{{ui:Sækja CSV}} vistar listann sem CSV-skrá (eða **Flytja út › Efnislisti (CSV)**). Hún opnast í hvaða töflureikni sem er. Texti sem byrjar á = eða + fær fráhvarfsmerki (') fremst, svo töflureiknir keyri hann ekki sem formúlu.

## Sundurtekin sýn

Sundurtekin sýn dregur hlutina í sundur fyrir myndir. Hún breytir aldrei tengingum eða raunverulegri staðsetningu hlutanna: vistun, árekstrapróf og útflutningar nota raunverulegar staðsetningar.

1. Með engu valið, veldu {{ui:Ný sýn}} undir **Sundurtekin sýn**.
2. Undir **Bæta við skrefi** hakarðu við hlutina sem skrefið færir, velur **Stefnu** (+X … −Z, normal á fleti sem þú smellir á, eða **Dragðu ör í sýninni**) og **Fjarlægð**, og síðan {{ui:Bæta við skrefi}}. Með **Draga** dregurðu örina og sleppir: skrefið fær þá stefnu og fjarlægð sem þú dróst.
3. Bættu við fleiri skrefum. Þau spilast hvert á eftir öðru.
4. Dragðu sleðann á milli **Sett saman** og **Sundurtekið** til að hreyfa sýnina. Strikaðar slóðalínur liggja frá stöðu hvers hluta í hvílu að þeirri stöðu sem hann er í núna.

{{ui:Sjálfvirkt (geislalaga)}} færir alla hluta nema jarðtengda frá miðju samsetningarinnar. {{ui:Sjálfvirkt (tengingar)}} færir hvern tengdan hluta (ásamt öllu sem er tengt undir honum) út eftir normal á fleti tengilsins. Þú getur geymt nokkrar nefndar sýnir; veldu eina í **Sýn**, eða **Sett saman** til að setja hlutina aftur á sinn stað. Sýnir eru vistaðar í samsetningarskránni.

## Færðu hlut með hendi

Aðeins hlutur án tengils við jarðtengda hlutinn færist með hendi (jarðtengdi hluturinn er fastur; tenglar staðsetja hina). Veldu hann og undir **Færa með hendi**:

- Sláðu inn **ΔX, ΔY, ΔZ** og veldu {{ui:Færa}}, eða veldu ás og **Horn** og {{ui:Snúa}} (um miðju hlutarins).
- {{ui:Draga til að færa}} sýnir örvar á hlutnum: dragðu ör til að færa eftir þeim ás, eða ferning til að færa í fleti. {{ui:Draga til að snúa}} sýnir hringi til að snúa honum. Hvert drag er eitt skref í afturköllun. {{key:Esc}} felur örvarnar.

## Takmörk tengla

Veldu tengil sem hreyfist og undir **Takmörk** hakarðu við **Halda … innan takmarka** fyrir þau gildi sem þú vilt, og stillir síðan **Lágmark** og **Hámark**. Hvert gildi er haldið innan eigin takmarka, sleði þess nær aðeins yfir það bil, og {{ui:Athuga hreyfinguna fyrir árekstra}} fer aðeins á milli þeirra. Sívalningstengill getur takmarkað horn sitt, færslu eða bæði. Ef þú breytir gerð tengils falla úr takmörk á gildum sem nýja gerðin hefur ekki.

## Flyttu alla samsetninguna út

Í samsetningu skrifar valmyndin **Flytja út** alla samsetninguna með hverjum hlut þar sem hann er staðsettur:

- **STEP AP242 / AP214** og **Teikning (PDF)** eru ekki smíðuð enn í þessari útgáfu: þau þurfa nákvæman kjarna og eru því grá. Fluttu í staðinn út STEP hvers hlutar (nákvæmt þrívíddarform) frá hlutnum sjálfum.
- **STL**: einn möskvi af öllum hlutum. **3MF**: hver hlutur einu sinni, staðsettur einu sinni fyrir hvert afrit.
- **Efnislisti (CSV)**.

## Takmarkanir

- Teikning samsetningar og STEP-skrá samsetningar eru ekki smíðaðar enn í þessari útgáfu (þær þurfa nákvæman kjarna). Sundurtekin sýn er ætluð fyrir myndir á skjá.
