---
title: Rennsli í rennibekk
summary: Flötun, grófvinnsla, frágangur, rauf, afskurður, skrúfgangur og borun á snúnum hluta, út frá útlínunni sem hluturinn myndar þegar hann snýst. Rennibekkjaverkfæri, fóðrun á snúning, úttök fyrir rennibekk og hvað ekki hefur verið sannað.
keywords: rennsli, rennibekkur, renna, flötun, grófvinnsla, frágangur, rauf, raufun, afskurður, skurður af, skrúfgangur, threading, g32, g33, g96, fastur yfirborðshraði, css, nefradíus, skerinnlegg, stöng, klló, þvermál, fóðrun á snúning, g71, g76
from: d8cc53b0
---

Manufacture hefur sjö aðgerðir fyrir rennibekk. Þær virka á hvaða hluta sem er: það sem er skorið er **útlínan sem hluturinn myndar þegar hann snýst** um miðju hráefnisins, þannig að hluti sem er ekki kringlóttur er rennur niður í kringlótta lögunina sem heldur honum.

**Ekkert hér hefur verið keyrt í rennibekk.** Slóðirnar eru prófaðar gegn rúmfræðinni með prófunum; báðir úttaksmöguleikarnir fyrir rennibekk fylgja skjalfestum kóðum stjórnbúnaðanna. Sannaðu forritið í hermi stjórnbúnaðarins og í lausu lofti fyrst.

## Uppsetning

Á flipanum **Uppsetning**:

- **Verkfærisás** er ás spindilsins, Z rennibekksins. Framhlið hlutans er á +Z; klóin heldur hinum endanum.
- **Hráefni**: veldu {{ui:Strokkur}}, stöngina. Efsta frávikið er það sem flötunarskurðurinn fjarlægir.
- **Vinnuuppruni**: miðja efsta punkts hráefnis eða líkans setur Z0 á framhliðina, venjulegasti staðurinn.
- **Stjórnbúnaður**: {{ui:Rennibekkur af Fanuc-gerð (.nc)}} eða {{ui:LinuxCNC rennibekkur (.ngc)}}. Fræsiúttak hafnar rennsliforriti og segir það.
- **Hámarkssnúningshraði spindils**: mörkin sem yfirborðshraðinn er haldinn undir.

{{ui:Meira}} á Manufacture-tækjastikunni setur sjö rennsliaðgerðirnar efst á flipanum **Aðgerðir**. Fyrsta aðgerðin sem þú bætir við kemur með eigið verkfæri: **skerinnlegg** (nefradíus, innleggshorn, skurðarhorn) eða **raufarblað** (breidd, hornradíus, hversu djúpt það nær). Breyttu þeim á flipanum **Verkfæri**. Fóðrun er á snúning, og hraðinn er yfirborðshraði í m/mín sem stjórnbúnaðurinn heldur þegar þvermálið breytist; gefðu verkfæri eigin snúninga á mínútu til að festa hraðann í staðinn.

## Aðgerðirnar

| Aðgerð | Hvað hún gerir |
|---|---|
| {{ui:Flötur}} | Sléttar framhlið stangarinnar niður að hlutanum, eina skrefdýpt í einu, frá ytri brún að rétt framhjá miðju. |
| {{ui:Grófvinnsla}} | Umferðir eftir Z með **skurðdýpt** á milli, niður að útlínunni plús **efni eftir**; síðan einu sinni eftir útlínunni til að taka þrepin burt. Dalur á milli tveggja axla er tekinn með stungu á einni skurðdýpt. |
| {{ui:Yfirborð}} | Ein umferð eftir útlínunni á broti af fóðrun verkfærisins. |
| {{ui:Rauf}} | Stingur blaðinu hlið við hlið þar sem það getur tekið meira en mörkin á efni sem er enn til staðar: raufirnar sem skerinnlegg náði ekki til. **Frá / Til Z** þrengja hana. |
| {{ui:Skilja frá}} | Sker hlutann af rétt fyrir aftan bakhliðina, niður að rétt framhjá miðju, með pecks ef þú stillir einn. |
| {{ui:Skrúfgangur}} | Ytri skrúfgangur: ytra þvermál, skref, lengd, fjöldi umferða. Dýpt 0 þýðir 0,6134 × skref (60° skrúfgangur). Hver umferð tekur sama flatarmál spóns; fjaðurumferðir endurtaka þá síðustu. |
| {{ui:Bora}} | Bor á miðlínu að dýpt, með pecks. |

## Hvernig verkfærið er haldið frá hlutanum

Innleggið er meðhöndlað eins og það er: nefhringur þess, og fyrir aftan hann hliðarbrúnin, bein lína sem myndar horn sem er 180° mínus skurðarhornið og innleggshornið. Sú lögun er lækkuð á útlínuna í sérhverjum punkti eftir Z, og slóðin er þar sem hún stöðvast. Þannig að:

- **Nefradíusinn er þegar í slóðinni.** Úttökin skrifa ekki `G41` né `G42`; hnitin eru forritaður punktur verkfærisins (hornið á ferningnum utan um nefið).
- Innleggið **getur ekki fylgt vegg sem er brattari en hliðarbrún þess**. Rauf fyrir aftan öxl er látin vera, og frágangsaðgerðin segir hversu mikið af útlínunni hún náði ekki til. Aðgerð {{ui:Rauf}} tekur það.
- Efnið er rakið eftir Z eftir hvern skurð, þannig að grófvinnsla sker ekki loftið, raufun finnur það sem eftir er, og hver aðgerð sýnir rúmmálið sem hún fjarlægði og hvort hún skar inn í hlutann.

## Takmarkanir

- **Aðeins ytri rennsli**: enginn borstangir, engar innri raufar eða skrúfgangar, engar andlitsraufar.
- Einn spindill, hluturinn haldinn á −Z. Enginn undirspindill, engin lifandi verkfæri, enginn C- eða Y-ás, engar hreyfingar á stöðugum stuðningi eða undirtakara.
- Slóðir eru beinar hreyfingar: bogar eru stuttar línur innan vikmarka (enginn `G2`/`G3`), og grófvinnsla og skrúfgangur eru skrifuð umferð fyrir umferð (engar `G71` eða `G76` lotur).
- Skrúfgangur er beinar umferðir með beinni útdrætti í lokin; gefðu skrúfganginum léttiraufir. Skrúfgangurinn birtist ekki í hráefninu.
- Borun á miðju breytir ekki hráefnislíkaninu.
- Haldari, turn og klóin eru ekki athuguð. Settu **Stoppa við Z** til að halda verkfærinu frá kjöftunum.
- Fóðrun og snúningshraði eru upphafsgildi, eins og í fræsingu.
