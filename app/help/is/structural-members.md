---
title: Rammar úr stálprófílum
summary: Settu stálprófíla eftir línum einnar eða fleiri skissa til að búa til soðinn ramma: mítruð eða stúfuð horn, hlutar skornir til að passa þar sem þeir mætast, endalok, styrkjaplötur og skurðarlisti með lengdum og endahornum.
keywords: burðarhluti, rammi, stálrammi, rör, ferhyrnt rör, hss, rhs, shs, pípa, chs, breiður flans, i-bita, w-bita, ipe, hea, heb, rás, upn, horn, mítra, stúfur, stúfsamskeyti, skorin, endalok, styrkjaplata, skurðarlisti
from: 59071e5a
---

**Burðarhluti** setur stálprófíl eftir sérhverri línu skissanna sem þú velur. Teiknaðu rammann sem línur (hver lína er einn hluti), veldu síðan prófílinn: hlutirnir eru smíðaðir, hornin þeirra stytt og framlengd, og skurðarlisti segir hversu langt á að skera hvert stykki og í hvaða horni.

## Búðu til ramma

1. Teiknaðu rammann sem línur í skissu, til dæmis rétthyrning á efri fleti. Línur merktar sem hjálparrúmfræði eru skildar eftir.
2. Með skissunni valdri, veldu {{ui:Meira}} › {{ui:Burðarhluti}}. Sérhver lína skissunnar fær hluta.
3. Í spjaldinu velurðu **Gerð** og {{ui:Stærð}} prófílsins. Gerðirnar eru AISC-töflurnar (W, S, C, L, HSS-rör, Pipe) og EN 10365 (IPE, HEA, HEB, UPN).

### Rammi í þrívídd

Línur úr nokkrum skissum mynda einn ramma: efri rétthyrningur skissaður á flöt fyrir ofan, og fætur skissaðir á lóðrétta fleti, mætast í endum sínum í þrívídd. Undir **Eftir línum** í spjaldinu merkirðu við hverja skissu sem línur hlutanna fylgja. Endar sem mætast innan míkrómetra eru tengdir.

## Stilltu prófílinn á línuna sína

- **Snúa (°)** snýr prófílnum um línuna sína. Bjálki stendur með dýptina upprétta (á lóðrétt hluta vísar dýptin fram á við).
- **Á línunni** velur hvaða punktur prófílsins situr á línunni: miðjan, eða horn eða miðja hliðar á útlínu prófílsins. „Bottom middle“ setur ramma ofan á skissuflötinn í stað þess að fara í gegnum hann.

## Horn og samskeyti

| Hvar hlutir mætast | Hvað gerist |
|---|---|
| Tveir hlutir enda við enda, **Corners: Mitred** | Báðir eru skornir á fletinum mitt á milli þeirra, eins og myndarammi |
| Tveir hlutir enda við enda, **Corners: Butt** | Fyrsti hluturinn gengur áfram að fjarlæga fleti annars; annar hluturinn er skorinn beint við nærri flöt fyrsta |
| Hlutur endar á miðju annars (T) | Hann er skorinn til að passa upp að ytra byrði hins hlutarins |
| Þrír eða fleiri enda í einum punkti | Sá fyrsti gengur beint áfram framhjá hinum; hinir eru skornir til að passa upp að honum |

Fyrsti hlutinn er sá sem lína hans kemur fyrst: línur halda þeirri röð sem þær voru teiknaðar í, skissu fyrir skissu í þeirri röð sem skissurnar voru merktar.

## Endalok og styrkjaplötur

- **Endalok** loka hverjum lausum enda með plötu í útlínu prófílsins, þeirri þykkt sem þú stillir, utan við endann.
- **Styrkjaplötur** setja þríhyrningslaga plötu í hvert horn þar sem tveir hlutir mætast í horni: **Stærð styrkjaplötu** eftir hverjum hlut frá horninu, **Þykkt styrkjaplötu** þvert á, miðjusett á fleti hornsins.

## Skurðarlistinn

Spjaldið listar hvert stykki, með eins stykkjum flokkuðum saman: prófílnum, lengdinni (langur punktur að löngum punkti, eins og þú myndir merkja fyrir sögina), hvernig hver endi er skorinn (beint, horn frá beinni línu, eða skorið til að passa), og hvaða hlutar þau eru. Endalok og styrkjaplötur eru skráð með stærðum sínum. {{ui:Vista skurðarlistann (CSV)}} vistar hann fyrir töflureikni.

Hlutur sem er skorinn til að passa upp að rör með ávölum hornum nær örlítið inn í radíus horns þess rörs, þannig að lengd hans milli langra punkta er nokkrum millimetrum meiri en bilið milli flatanna.

## Takmarkanir

- Hlutar fylgja aðeins beinum línum; bogar og sveigðar línur í skissunni eru skildar eftir.
- Samskeytin eru skorin, ekki soðin: engar suðuperlur eru teiknaðar, og rammurinn er einn fastur hlutur.
- Prófílarnir eru teiknaðir út frá málum töflunnar: W-prófílar með rótarávölun sinni, S-prófílar og rásir með samsíða flönsum, rör með horn-radíusum; göt, endaundirbúningur og suðubil eru ekki búin til fyrir þig.
- Burðarhlutar eru smíðaðir af möskvakjarnanum. Með nákvæma kjarnann kveiktan (aðeins forritarar) segja þeir það og eru ekki smíðaðir.
