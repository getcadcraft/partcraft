---
title: Móta form út frá álagi (myndun hönnunar)
summary: Veldu flötina sem eru haldnir og álagðir, svæði sem skulu haldast og svæði sem skulu haldast auð, markrúmmál og efni, og búðu til niðurstöður: stífustu formin sem fundust fyrir hvert rúmmál, athuguð aftur sem föst efni, borin saman í töflu og sótt sem STL, STEP eða nýr hluti.
keywords: myndun hönnunar, bestun topology, topology optimisation, SIMP, léttleiki, grind, lífrænt form, niðurstöður, bera saman, massi, rúmmálshlutfall, varðveita, halda inni, hindrun, halda auðu, hönnunarrými, lágmarksstærð bita, STL, þrívíddarprentun
from: 5b91fa8e
---

Myndun hönnunar-vinnusvæðið fjarlægir efni sem álagið þarf ekki. Þú segir hvar hluturinn er haldinn og álagður, hvað skal haldast og hvað skal haldast auð; PartCraft finnur stífasta formið fyrir hvert markrúmmál (**bestun á topology**), athugar hvert þeirra aftur sem fast efni með raunverulegu efni, og sýnir niðurstöðurnar hlið við hlið. Það vinnur á nafngreindum flötum sem möskvakjarninn gefur hlutnum (sjá [Möskvakjarninn](topic:solid-kernels)).

Veldu **Myndun hönnunar** í **Vinnusvæði**-reitnum. Hlutnum þínum er ekki breytt; rannsóknin er vistuð inni í hlutaskránni.

## Settu upp rannsókn

1. Ýttu á **Ný rannsókn** í hægra spjaldinu.
2. **Rými**: *Hluturinn eins og hann er* fjarlægir efni úr hlutnum þínum; *Kassi utan um hlutinn* myndar form inni í kassa stærri en hlutinn um **Bil í kassa**.
3. **Stærð frumu**: skildu hana eftir auða fyrir sjálfvirka stærð (um 8.000 teningar), eða sláðu inn tölu. Fínni stærðir gefa fínni form en taka lengri tíma.
4. **Lágmarksstangir**: stangir sem eru þynnri en um tvöfalt þetta myndast ekki. Autt þýðir einn og hálfur teningur.
5. Hakaðu við eitt til sex **Markrúmmál** (hlutfall hönnunarrýmisins sem formið mátti fylla) og eitt til fjögur **Efni**. Hvert rúmmál er búið til einu sinni; hvert efni er athugað á því formi (stífasta formið fer ekki eftir efninu, en massi þess, álag og öryggisstuðull gera það).

## Markmið

- {{ui:Fest}}: smelltu á flatina sem eru haldnir. **Núningslaus flötur** úr **Bæta við**-listanum í spjaldinu heldur fleti aðeins þvert yfir sjálfan sig (notaðu hann fyrir samhverfuplön).
- {{ui:Kraftur}}: smelltu á álagða fleti, sláðu síðan inn heildarkraftinn og veldu stefnu hans í spjaldinu. **Þrýstingur** er í **Bæta við**-listanum.
- {{ui:Varðveita}}: smelltu á fleti sem umhverfið þeirra skal haldast fast, og stilltu hversu djúpt (**Halda föstu innan**) — til dæmis um boltagöt. Fletir sem þú festir eða hleður eru alltaf haldnir.
- {{ui:Hindrun}}: smelltu á fleti sem umhverfið þeirra skal haldast tómt, og stilltu hversu langt (**Halda tómu innan**) — rými fyrir ás eða verkfæri.

Ýttu á **Lokið við val** eða {{key:Esc}} eftir að hafa smellt á fleti. Grænir og rauðir litir sýna svæðin.

## Búðu til og berðu saman

Ýttu á {{ui:Búa til}}. Spjaldið sýnir framvindu og tímann sem eftir er; **Stöðva** hættir við. Hver niðurstaða birtist í **Niðurstöður**-töflunni: markrúmmál, efni, **massi**, **mesta álag**, **mesta færsla** og **öryggisstuðull** (flæðimörk ÷ álag), allt úr endurreikningi lokaða formsins sem fasts efnis úr teningum með raunverulegu efninu.

Veldu niðurstöðu til að sjá hana í sýninni (hluturinn er falinn; hakaðu við **Sýna hlutinn í gegnum hana** til að sjá bæði). Fyrir neðan töfluna: hversu margar ítrekanir það tók og hvort það féll saman, stífleiki þess sem fast efni miðað við eigin tölu bestunarforritsins, og yfirborð þess.

## Notaðu niðurstöðu

- **STL**: lokað þríhyrningsnet, tilbúið til þrívíddarprentunar.
- **STEP (þríhyrnt)**: sama yfirborð sem STEP-fast efni úr flötum fleti.
- **Ný hlutaskrá**: PartCraft-hluti þar sem eini eiginleikinn er niðurstaðan sem innflutt fast efni. Opnaðu hana til að teikna á hana, skera göt eða athuga í Hermun. Hún er þríhyrnd (þúsundir flatra fleta), ekki breytanlegt form.
- **Bæta við þennan hlut** tengir niðurstöðuna við hlutinn; það er virkt aðeins fyrir kassahönnunarrými (þegar hluturinn sjálfur er rýmið, liggur niðurstaðan inni í hlutnum).

**Ný hlutaskrá** og **Bæta við þennan hlut** eru ekki enn tiltæk í þessari útgáfu: niðurstaðan verður innflutt fast efni, sem þarf nákvæman kjarna. STL- og STEP (þríhyrnt) niðurhölin virka.

## Hversu mikið á að treysta þessu

- Það bestar **stífleika** fyrir gefið rúmmál. Engin álagsmörk og engar framleiðslureglur (yfirhengi, fræsistefnur, lágmarksstærðir gata) eru enn til staðar: athugaðu valda niðurstöðu í [Hermun](topic:simulation) og aðlagaðu.
- Þunnar stangir sem eru einn eða tveir teningar á breidd eru nálganir: notaðu minni stærð frumu fyrir grannar hluti.
- Aðferðin er SIMP með þéttleikasíu, þröskuldsvörpun og bestunarviðmiðsuppfærslum; tilkynnt álag og beygja er af niðurstöðunni sem teningum, sem er heiðarlegt en grófgert við skarpa horn.

## Tengt

- [Athugaðu álag og beygju (Hermun)](topic:simulation)
- [Útflutningur til prentunar, STEP og DXF](topic:export-files)
- [Það sem er ekki enn tiltækt](topic:not-built-yet)
