---
title: 3D-grófvinnsla og leifarvinnsla
summary: Hreinsaðu hráefnið umhverfis allt líkanið lag fyrir lag með flötum, bull-nose- eða kúlufingurfræsi og skildu eftir efni fyrir frágang, og láttu síðan minna verkfæri skera aðeins þar sem það fyrra skildi eftir efni. Hvað slóðirnar tryggja og hvað ekki.
keywords: 3d-grófvinnsla, grófvinnsla, grófa, leifarvinnsla, efni eftir, skrefdýpt, lög, z-lag, waterline, rampur, stunga, ofskurður, minna verkfæri
from: 29ddc266
---

Tvær aðgerðir í Manufacture, undir {{ui:Meira}} á tækjastikunni sinni, hreinsa efni af **öllu líkaninu** í 3D, með verkfærinu haldið lóðréttu (eða eftir eigin [stefnu verkfæris](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) aðgerðarinnar). Þær taka engin val.

## 3D-grófvinnsla

{{ui:3D grófvinnsla}} fer niður frá efsta punkti hráefnisins eina **skrefdýpt** í einu. Á hverju lagi hreinsar hún allt sem verkfærið nær án þess að snerta líkanið: beinar raðir í **skrefi á milli** (hluti af þvermáli verkfærisins), síðan einu sinni í kringum brún þess sem það má ná, þannig að veggir eru raktir en ekki skildir eftir sem röð þrepa í grunnmynd.

- **Efni eftir**: hversu langt verkfærið heldur sig frá líkaninu alls staðar, fyrir frágangsumferðina (sjálfgefið 0,5 mm).
- **Lag við hvern flatan flöt**: aukalag í hæð hvers flatar flatar líkansins (auk efnis eftir), þannig að gólf sé ekki skilið eftir næstum heila skrefdýpt á hæð.
- **Hunsa efni þynnra en**: efni sem er þynnra en þetta, upp eða til hliðar, er ekki þess virði að fara umferð fyrir (0,05 mm fyrir grófvinnslu, 0,5 mm fyrir leifarvinnslu, svo að hárfínt efni sem situr eftir meðfram vegg sendi ekki minna verkfærið hringinn um alla veggi).
- **Botn**: ekkert er skorið neðar en þessi hæð. Tómt þýðir botn líkansins.

Hún byrjar frá hráefninu **eins og aðgerðirnar á undan skildu það eftir**: eftir flötunarumferð sker hún ekki loftið þar sem flötunarfræsinn hefur farið.

Niðurkoma: þar sem verkfærið myndi mæta efni á leiðinni niður rampar það eftir eigin umferð í **hallahorninu**, fram og til baka yfir mest tvö þvermál verkfæris. Umferð sem er of stutt fyrir það er stungin beint niður á **stunguhraða**; aðgerðin telur þær og varar við því, því verkfæri sem sker ekki á miðjunni ætti ekki að gera það.

## Leifarvinnsla

{{ui:Leifar}} er sama aðferð fyrir **minna verkfæri eftir stærra**. Hún les hermunina á hráefninu og sker aðeins þar sem efni stendur enn: í innri hornum sem stærra verkfærið komst ekki í, rifum sem það passaði ekki í, þrepum sem það skildi eftir í hallandi fleti. Alls staðar annars staðar gerir hún ekkert, þannig að slóð hennar er lítill hluti af því sem sama verkfæri myndi taka á nýju hráefni.

Settu hana á eftir grófvinnsluaðgerðinni og veldu minna verkfærið. Hún þarf hermunina á hráefninu af aðgerðunum á undan, sem vinnusvæðið keyrir alltaf.

## Hversu góðar slóðirnar eru

- **Enginn ofskurður.** Staðsetningar verkfærisins eru reiknaðar á neti, með skerann aðeins stærri en hann er (um 1,4 netreiti til hliðar, og um efnið eftir), þannig að hvar sem hann stendur sé hann laus frá líkaninu. Prófin athuga hvern skurðpunkt gegn nákvæma verkfærinu á nákvæma netinu, og hermun hráefnisins eftir hverja keyrslu: enginn ofskurður, engin hraðhreyfing í gegnum efni.
- **Verðið fyrir það**: veggir skilja eftir aðeins meira en efni eftir, allt að þeirri upphæð sem birt er sem „Auka efni á veggjum“ á aðgerðinni (um 0,5 mm fyrir Ø6 verkfæri, minna fyrir minna verkfæri). Frágangsumferðin tekur það.

Þessar slóðir eru ekki:

- Raðirnar eru beinar línur, ekki útlínur af lögun hlutans né jafnfjarlægðarlínur fyrir stöðugt þátttökuhorn. Þær gera fleiri lyftingar og loftfærslur en útlínu- eða aðlögunaraðferð myndi gera, og fyrsta röðin í hverju lagi sker alla breidd verkfærisins. Fyrir vasa með flötum botni er [Aðlögun](topic:manufacture) betri grófvinnsla.
- Skaft og haldari verkfærisins eru ekki athuguð. Viðvörun birtist þegar skurðurinn er dýpri en rásarlengdin.
- Undirskurðir sjást ekki: líkanið er það sem verkfærið mætir þegar það kemur niður eftir ásnum sínum. Til að grófa hlið þarf aðra aðgerð með [hallandi stefnu verkfæris](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Leifarvinnsla þekkir hráefnið aðeins eins vel og net hermunarinnar (0,1 til 2 mm reitir, eftir stærð hlutans).
- Á stórum hluta er forritið langt (yfir 100.000 hreyfingar fyrir 200 mm flans með Ø6 verkfæri) og tekur um eina mínútu að reikna, og sérhver breyting í vinnusvæðinu reiknar allt forritið aftur. Notaðu stærsta verkfæri sem passar í grófvinnsluna.
- Athugaðu úttakið í hermi vélarinnar áður en skorið er.
