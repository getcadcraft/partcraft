---
title: Senda teikningu í leysi
summary: Veldu hvað hvert lag gerir (skera, rispa, grafa, fylla, mynd), forskoðaðu hreyfingar haussins, vistaðu GRBL-leysistillingar G-kóða, eða sendu úr vafranum eftir að hafa rammað verkið.
keywords: leysir, leysiskurður, leysigrafari, GRBL, G-kóði, grafa, fylla, dithering, myndgröftur, rispa, skera, Web Serial, Linux, ramma verkið, afl, hraði, umferðir
from: 327b3c46
---

Spjaldið {{ui:Leysir}} breytir lögum teikningar í forrit fyrir leysi sem keyrir GRBL (flesta áhugamanna- og smáverkstæðis díóðu- og CO2-stýringa). Í PartCraft velurðu {{ui:Flytja út}} › {{ui:Leysiforrit…}}, síðan {{ui:Bæta við útlínum úr DXF…}}: útlínurnar og götin koma inn á lagið CUT. Flatar myndir af plötuhlutum (með beygjulínum á laginu BEND) þurfa nákvæman kjarna, sem þessi útgáfa hefur ekki. Stillingarnar eru vistaðar í hluta- eða samsetningarskránni.

:::warning
Prófaðu sérhverja stillingu á afklippu fyrst, notaðu hlífðargleraugu sem passa við leysinn þinn, hafðu lokið lokað þar sem það er, og skildu aldrei kveikt leysi eftir eftirlitslaust. Tölurnar sem lag byrjar með eru bráðabirgðagildi, ekki ráðleggingar fyrir nein efni.
:::

## Veldu hvað hvert lag gerir

Sérhvert lag teikningarinnar er röð. {{ui:Gerir}} stillir það á **Skera**, **Rispa**, **Grafa línur**, **Fylla form**, **Grafa mynd** eða **Ekki sent**, með {{ui:Afl %}}, {{ui:Hraði mm/mín}} og fjölda {{ui:Umferðir}}.

- **Fylla** brennir innan lokaðra forma í línum, {{ui:Línubil}} í sundur, í {{ui:Horn}}, í báðar áttir eða eina, með yfirkeyrslu svo hausinn sé á hraða þegar leysirinn kviknar; krosslögn bætir við annarri umferð í 90°. Form með gati helst opið við gatið.
- **Grafa mynd** breytir mynd í punkta (Floyd–Steinberg, Atkinson, raðað, eða hrein svart-hvít með þröskuldi) eða, með *Grey levels*, í breytilegt afl.
- Röð: myndir og fyllingar fyrst, síðan línugröftur, síðan rispur, síðan skurðir, svo hluti sem er skorinn út hreyfist ekki meðan hann er grafinn. Innan eins lags fara slóðirnar **innan-fyrst** (gat á undan plötunni sem það er í), næsta fyrst.

## Forskoðaðu, síðan vistaðu

Forskoðunin sýnir hvað hausinn gerir: brennandi línur í lit, hraðar hreyfingar í gráu, og grænan kassa utan um allt sem brennur. Fyrir neðan hana eru stærðin, brennslulengdin og tímaáætlun (án hröðunar; raunvél tekur lengri tíma). {{ui:Vista G-kóða…}} skrifar GRBL-leysistillinga G-kóða: `$32=1`, `M4` (eða `M3`) með S-gildum, `G0` og `G1` hreyfingar, `M5` í lokin. X0 Y0 er neðra vinstra horn verksins nema þú veljir upphaf teikningarinnar: stilltu núllpunkt vélarinnar þar. G-kóðinn fylgir GRBL-leysistillingu eins og hún er skjalfest; hann hefur ekki verið prófaður á raunverulegum leysi enn.

## Senda úr vafranum

Í Chrome og Edge spyr {{ui:Tengjast…}} þig um USB-tengi leysisins. Ekkert tengist eða sendist fyrr en ýtt er á hnapp. Ýttu fyrst á {{ui:Ramma verkið}}: hausinn rekur kassa verksins með leysinn **slökktan** (eða á lágu afli sem þú stillir fyrir bendil), svo þú sjáir hvar brennt verður. Fyrst þá kviknar á {{ui:Senda verk}}, og hann slekkur sjálfur á sér ef þú breytir einhverju. {{ui:Hlé}} heldur hausnum, {{ui:Stöðva}} heldur honum líka, endurstillir stýringuna (leysirinn slekkur) og sendir `M5`. Þar sem Web Serial vantar (Firefox, Safari og CadCraft Studio, en vefskoðari þess hefur hann ekki enn) vistaðu G-kóðann og sendu hann með eigin forriti leysisins.

## Ekki smíðað enn

Önnur snið stýringa (Ruida, Marlin-leysar, sérsnið framleiðenda), flipar og innleiðslulínur, bilsjöfnun (kerf), efnissöfn, snúnings- og Z-ásar, myndajöfnun.
