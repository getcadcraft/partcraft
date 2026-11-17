---
title: Tengsl og málsetningar skissu
summary: Hvert tengsl og hver málsetning sem PartCraft-skissa hefur, hvað á að velja fyrir hvert, táknið og hvernig það hegðar sér við lausn.
keywords: tengsl, þvinganir, samfall, lárétt, lóðrétt, samsíða, hornrétt, snertill, jafn, sammiðja, miðpunktur, festa, fjarlægð, lárétt fjarlægð, lóðrétt fjarlægð, radíus, þvermál, horn, tákn, merki
from: 9831e7be
---

Tengsl festa hvernig rúmfræði liggur miðað við aðra rúmfræði. Málsetningar festa stærðir. Til að bæta við tengslum velurðu hluti með verkfærinu {{ui:Velja}} ({{key:S}}) og velur hnappinn þess í hægra spjaldinu; til að bæta við málsetningu notarðu verkfærið Málsetning ({{key:D}}) eða málsetningahnappana í hægra spjaldinu. Hvernig vinna skal með þau: [Skilgreindu skissu til fulls](topic:relations-dimensions).

„Ferill“ hér að neðan merkir hring eða boga. Upphafið telst sem punktur.

## Tengsl

| Hnappur | Tákn | Veldu | Áhrif |
|---|---|---|---|
| {{ui:• Samfall}} | • (sýnilegt aðeins þegar valið eða í vanda) | Tveir punktar | Punktarnir mætast |
| {{ui:• Samfall}} | • | Punktur og lína | Punkturinn liggur á línunni (eða framlengingu hennar) |
| {{ui:• Samfall}} | • | Punktur og ferill | Punkturinn liggur á hringnum eða boganum |
| {{ui:H Lárétt}} | H | Lína, eða tveir punktar | Línan er lárétt, eða punktarnir eru í sömu hæð |
| {{ui:V Lóðrétt}} | V | Lína, eða tveir punktar | Línan er lóðrétt, eða punktarnir eru hver fyrir ofan annan |
| {{ui:∥ Samsíða}} | ∥ | Tvær línur | Línurnar stefna í sömu átt |
| {{ui:⊥ Hornrétt}} | ⊥ | Tvær línur | Línurnar mætast í rétt horni |
| {{ui:T Snertill}} | T | Lína og ferill | Línan snertir ferilinn án þess að skera hann |
| {{ui:T Snertill}} | T | Tveir ferlar | Þeir snertast, utan eða innan, eins og teiknað var |
| {{ui:T Snertill}} | T | Sveigð lína og lína, bogi eða sveigð lína sem mætir öðrum enda hennar | Sveigða línan fer frá þeim enda í stefnu hins ferilsins |
| {{ui:= Jafn}} | = | Tvær línur | Sama lengd |
| {{ui:= Jafn}} | = | Tveir ferlar | Sami radíus |
| {{ui:◎ Sammiðja}} | ◎ | Tveir ferlar | Sama miðja |
| {{ui:◎ Sammiðja}} | ◎ | Punktur og ferill | Punkturinn situr í miðju ferilsins |
| {{ui:M Miðpunktur}} | M | Punktur og lína | Punkturinn situr á miðju línunnar |
| {{ui:↔ Samhverft}} | ↔ | Tveir punktar og lína | Punktarnir eru speglamyndir um línuna ({{ui:Spegling}} bætir þessu við) |
| {{ui:⚓ Festa}} | ⚓ | Punktur, lína, ferill eða sveigð lína | Heldur því nákvæmlega þar sem það er núna (sveigð lína: punktum hennar) |

Línur hér fela í sér miðlínur. Teikning bætir við sumum tengslum fyrir þig: smellur á punkt gerir hann samfallandi, smellur á feril setur punktinn á hann, næstum láréttar eða lóðréttar línur fá H eða V, og rétthyrningur kemur með hornin fjögur tengd, tvö H og tvö V.

**Festa** er fljótleg leið til að stöðva hreyfingu, en hluturinn getur þá ekki fylgt breytingu á málsetningu annars staðar. Veldu frekar málsetningar miðað við upphafið.

## Málsetningar

| Hnappur | Veldu | Mælir | Birtist sem |
|---|---|---|---|
| {{ui:Fjarlægð}} | Lína | Lengd hennar | Fjarlægð 40 |
| {{ui:Fjarlægð}} | Tveir punktar | Beina fjarlægð á milli þeirra | Fjarlægð 40 |
| {{ui:Fjarlægð}} | Punktur og lína | Fjarlægðina frá punktinum að línunni, hornrétt á hana | Fjarlægð 40 |
| {{ui:Fjarlægð}} | Tvær samsíða línur | Bilið á milli þeirra | Fjarlægð 40 |
| {{ui:Lárétt fjarlægð}} | Tveir punktar, eða lína | Aðeins fjarlægðina vinstri-hægri | Lárétt fjarlægð 40 |
| {{ui:Lóðrétt fjarlægð}} | Tveir punktar, eða lína | Aðeins fjarlægðina upp-niður | Lóðrétt fjarlægð 40 |
| {{ui:Radíus}} | Hringur eða bogi | Radíus hans | Radíus R10 |
| {{ui:Þvermál}} | Hringur eða bogi | Þvermál hans | Þvermál ⌀20 |
| {{ui:Horn}} | Tvær línur sem eru ekki samsíða | Hornið á milli þeirra, 0 til 180 gráður | Horn 30° |

Með málsetningarverkfærinu velur PartCraft gerðina út frá því sem þú smellir á og hvar þú setur töluna:

| Þú smellir á | Þú færð |
|---|---|
| Eina línu | Lengd hennar; fyrir skáhalla línu, lárétta ef talan er fyrir ofan eða neðan hana, lóðrétta ef hún er til hliðar |
| Einn hring | Þvermál |
| Einn boga | Radíus |
| Tvo punkta | Fjarlægð; lárétt eða lóðrétt eins og fyrir skáhalla línu |
| Punkt og línu | Fjarlægð frá punktinum að línunni |
| Tvær línur | Horn, eða fjarlægð ef þær eru samsíða |
| Punkt og hring | Ekkert: „Ekki er hægt að málsetja þessa hluti saman.“ Málsettu í staðinn að miðjupunkti hringsins |

**Jafnfæra** (birt sem fjarlægð) verður til með verkfærinu {{ui:Jafnfæra}}: það heldur afrituðri línu samsíða í þeirri fjarlægð, eða afrituðum boga eða hring sammiðja með radíus sem er jafn mikið stærri eða minni. Hinir hlutar sömu jafnfæru bera **O**-tengsl og fylgja einni málsetningu Jafnfæru. Sjá [Sveigðar línur, stytting, jöfnfæra og önnur skissuverkfæri](topic:sketch-tools).

Gildi málsetninga eru í millimetrum (eða gráðum), aldrei neikvæð. Radíus og þvermál verða að vera meiri en núll. Gildið 0 er leyfilegt fyrir fjarlægðir: tveir punktar í 0 fjarlægð eru samfallandi.

## Hvernig lausnin hegðar sér

- **Minnsta hreyfing.** Þegar gildi breytist færir lausnarinn rúmfræðina eins lítið og hægt er. Lína sem breytir lengd sinni stækkar jafnt í báða enda ef ekkert heldur í annan endann.
- **Engin umsnúning.** Fjarlægðir frá punkti að línu, lárétta og lóðrétta fjarlægð, horn og snertingar muna hvorum megin þær voru gerðar. Breyting á gildi snýr aldrei rúmfræðinni yfir á hina hliðina.
- **Árekstrar hreyfa ekki við neinu.** Ef tengsl stangast á helst skissan nákvæmlega eins og hún var og stangandi tengslin verða rauð.
- **Óþarfa tengsl** (leidd af öðrum) eru nefnd í stöðustikunni („er þegar leitt af öðrum tengslum. Eyddu því.“) og eiginleikinn er samt smíðaður, með viðvörun.
- **Snertiliðir.** Þar sem ávalaboga mætir línum sínum í sameiginlegum endapunkti er snertingin leyst á þann hátt að hún helst vel skilgreind þar, þannig að skissuávalar lesast ekki sem ofskilgreindir.

## Ekki tiltækt enn

Tengsl um sömu línu, sama geisla og gegnumstungu; punktur á sveigðri línu; drifnar (viðmiðs-) málsetningar; hnitmálsetningar og lengdarbogamálsetningar; jöfnur milli málsetninga. Notaðu Samsíða ásamt 0 fjarlægð fyrir línur á sömu línu.
