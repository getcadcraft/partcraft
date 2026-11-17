---
title: Undirbúa hlut fyrir þrívíddarprentun
summary: Athugaðu að hlutur eða samsetning sé lokuð, passi í prentarann þinn og standi á grunni, og sæktu hana síðan sem STL eða 3MF fyrir sneiðarann þinn.
keywords: þrívídd, þrívíddarprentun, prentari, prenta, sneiðari, stl, 3mf, vatnsþéttur, lokaður, samfelldur, prentbeð, stærð prentbeðs, prentplata, útskagi, stoðir, grunnur, millimetrar, útflutningur, gengjur, bil
from: 90d81dff
---

Sneiðari þarf lokaða lögun: engin göt, hvert flötur snýr út og ekkert gengur í gegnum sjálft sig. Hlutar sem PartCraft býr til eru lokaðir frá upphafi, þannig að athugunin segir þér aðallega stærðina, hvort hluturinn passi á prentbeð prentarans, hvort hann standi á flötum fleti og hversu mikið af honum skagar út.

## Athuga og sækja

1. Valfrjálst, einu sinni: stilltu prentbeð prentarans í {{ui:Stillingar}} › PartCraft › **Þrívíddarprentari**: breidd, dýpt og hæð í millimetrum. Skildu þá eftir auða til að sleppa þeirri athugun.
2. Veldu {{ui:Flytja út}}, og síðan {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}.

   Glugginn segir „Tilbúið til prentunar“ eða „Ekki tilbúið til prentunar“, telur upp allt sem er að, og gefur stærðina á prentbeðinu (X × Y × Z, í millimetrum), rúmmálið og fjölda þríhyrninga.

3. Smelltu á {{ui:Sækja 3MF}} eða {{ui:Sækja STL}}. Skráin er sú sama og {{ui:Flytja út}} › {{ui:3MF, fyrir þrívíddarprentun}} eða {{ui:STL, fyrir þrívíddarprentun}}.

Í samsetningu tekur athugunin og skrárnar alla samsetninguna, sérhvert eintak þar sem það er sett.

Hluturinn er athugaður eins og útflutningurinn skrifar hann: það sem vísar upp í PartCraft (hornrétt á Efriplan) vísar upp á prentbeðinu. Hluti sem er skissaður á Efriplan liggur flatur.

## Það sem glugginn getur sagt

**Ekki tilbúið til prentunar** (sneiðari gæti neitað honum eða prentað hann vitlaust): göt (brúnir með fleti aðeins öðrum megin), brúnir sem deilast af þremur fleti eða fleiri, fletir sem snúa gagnstæðar áttir, rúmtak snúið við, eða rúmtak sem gengur í gegnum sjálft sig. Hlutur sem er byggður í PartCraft ætti aldrei að sýna þetta; ef hann gerir það, sjá [Úrræðaleit](topic:troubleshooting).

**Aðvaranir** (hann prentast, en skoðaðu hann fyrst):

- **Stærri en prentbeð prentarans**, jafnvel þótt hann sé snúinn 90° á beðinu.
- **Ekkert liggur flatt að neðan**: snúðu hlutnum í sneiðaranum þannig að flötur hvíli á beðinu, annars þarf stoðir eða undirlag.
- **Hallar meira en 45° frá lóðréttu**: þessir fletir þurfa stuðning eins og hann stendur. Önnur stefna gæti þurft minna.
- **Aðskilin rúmtök skarast** eða **mætast flöt á flöt**: sneiðarar sameina þau yfirleitt. {{ui:Sameina}} í Eiginleikar › {{ui:Meira}} sameinar þau í eitt rúmtak. Sjá [Rúmtök](topic:bodies).
- **Undir 1 mm þvert yfir**: athugaðu stærðir hlutarins.

## Gengjur sem prentast

Mótuð gengja prentast sem raunveruleg gengja. Gefðu henni **Bil** svo prentaður bolti passi í prentaða rær: sjá [Gengjur](topic:threads).

## Slétt kringlótt yfirborð

STL og 3MF eru gerð úr þríhyrningum. Fyrir sléttari kringlótta fleti smellir þú á tómt rými svo ekkert sé valið og stillir **Sveigjur** á **Fínt (128 á hring)** eða **Mjög fínt (256 á hring)** í hægra spjaldinu áður en þú flytur út. Fleiri þríhyrningar gera stærri skrár.

## Stærra, minna eða í hlutum

- **Flytja út › Skala fyrir prentun (STL eða 3MF)…** vistar hlutinn skalaðan eftir ásum án þess að breyta honum: **rýrnunarsvigrúm** í prósentum (stærð × (1 + s), eða nákvæm stærð ÷ (1 − s)) fyrir steypumót, eða einfaldir stuðlar, um miðjuna, neðsta hornið, miðju botnsins eða upprunann.
- **Flytja út › Skipta fyrir prentun (zip með hlutum)…** sker hlut sem er of stór fyrir prentarann í hluta sem passa hver á það prentbeð sem þú gefur upp, tengdir með pinnum, lyklum, svölunarsamskeytum, dýlagötum eða segulvösum (með bilinu sem þú stillir), hver hluti og hvert samskeyti er númerað, og hlutarnir eru vistaðir sem STL eða 3MF í zip-skrá með samsetningarblaði. Hluturinn sjálfur breytist ekki.

## Ekki athugað

Veggþykkt, smáatriði sem stúturinn þinn getur ekki teiknað, og hvernig sneiðarinn setur stoðir. Sneiðarinn þinn sýnir það.
