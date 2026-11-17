---
title: Skrúfgangar á ásum og borgötum, teiknaðir eða líkanaðir
summary: Settu ISO-metrískan eða trapisulaga skrúfgang á hvaða kringlótta flöt sem er, ás eða borgat. Hafðu hann útlitslegan fyrir teikningar, eða líkaðu raunverulegan þyrilskrúfgang fyrir þrívíddarprentun, með bili svo prentaðir hlutir passi saman.
keywords: skrúfgangur, skrúfgangar, líkanaður skrúfgangur, þyrill, skrúfa, bolti, hneta, ás, borgat, ytri skrúfgangur, innri skrúfgangur, útlitslegur skrúfgangur, metrískur skrúfgangur, trapisulaga, acme, leiðarskrúfa, Tr16x4, M10, þrívíddarprentun, prentun, bil, passun, vinstri snúningur, skrúfað gat
from: 4f6401cc
---

{{ui:Skrúfgangur}} setur skrúfgang á kringlótta fleti: utan á ási (ytri skrúfgangur) eða innan í borgati (innri skrúfgangur). PartCraft segir hvort er hvað út frá fletinum.

Skrúfgangur er **útlitslegur** í fyrstu: flöturinn helst sléttur, skoðunin teiknar skrúfganginn sem strikaða hringi og teikniblaðið skráir hann, til dæmis „M10×1.5 - 6g, skrúfgangur 20 langur“. Hakaðu við **Líkanaður** til að skera raunverulegan þyrilskrúfgang inn í hlutinn, fyrir þrívíddarprentun eða líkan sem verður að líta rétt út.

## Skrúfgangur á ás eða borgat

1. Smíðaðu ásinn eða borgatið í stærð skrúfgangsins: Ø10 ás fyrir M10 bolta, eða Ø8.5 borgat (forborunin) fyrir M10 hnetu.
2. Smelltu á kringlótta flötinn og veldu {{ui:Meira}} › {{ui:Skrúfgangur}}. Ef enginn kringlóttur flötur er valinn biður PartCraft þig um að smella á fletina og síðan {{ui:Lokið}}.
3. Í hægra spjaldinu skaltu athuga **Stærð**. **Passa við flötinn** velur stærðina sjálft: fyrir ás þá stærð sem hefur sama ytra þvermál og ásinn; fyrir borgat þá stærð sem innra þvermál þess passar við.

Skrúfgangurinn byrjar við opna enda flatarins, þar sem hluturinn heldur ekki áfram eftir ásnum: frjálsi endi áss, munni borgats. **Byrja við hinn endann** snýr því við.

## Stillingar

| Stilling | Val | Sjálfgefið |
|---|---|---|
| **Form** | ISO-metrískt (60°), M1.6 til M64 gróft; trapisulaga (Tr, 30°), Tr8×1.5 til Tr60×9 | ISO-metrískt |
| **Stærð** | Passa við flötinn, eða ein stærð af listanum | Passa við flötinn |
| **Allur flöturinn** | Taktu hakið af til að gefa **Lengd (mm)**, mælda frá upphafi | Hakað |
| **Byrja við hinn endann** | Skrúfgangurinn fer frá hinum enda flatarins | Slökkt |
| **Snúningsstefna** | Hægri eða vinstri snúningur | Hægri |
| **Líkanaður** | Skera raunverulegan þyrilskrúfgang | Slökkt |
| **Bil (mm)** | Birtist þegar Líkanaður er hakaður: hversu minni skrúfgangur ássins er, og hversu stærri skrúfgangur borgatsins er, allt í kring | 0.1 |

Stærð sem hentar ekki flötinum er smíðuð samt, skorin að fletinum, og spjaldið segir frá því, til dæmis „Ø12 mm ás er ekki M10 (Ø10 mm)“. Nokkrir fletir geta deilt einum skrúfgangseiginleika; með **Passa við flötinn** fær hver þeirra sína stærð.

## Líkanaðir skrúfgangar fyrir þrívíddarprentun

Líkanaður skrúfgangur fylgir staðlaða grunnsniðinu: ISO 68-1 fyrir metrísk (flatir toppar og rætur, 60° hliðar), ISO 2901 fyrir trapisulaga (30° hliðar). **Bilið** færir allt sniðið inn (ás) eða út (borgat) svo prentaðir hlutir skrúfist saman:

- **0.1 til 0.2 mm** hentar flestum prenturum. Prentaðu fyrst prufubolta og prufuhnetu.
- **0** er staðlaða sniðið, fyrir hluti sem eru rennismíðaðir eða til að athuga passun.

Bolti og hneta með sama bili snertast aldrei eftir hliðum sínum: bilið milli þeirra er tvöfalt bilið, allt í kring.

:::tip
Fínar tónhæðir prentast illa: M3 og minni, eða tónhæð undir 0.5 mm, er nálægt því sem 0.4 mm stútur getur teiknað. Líkaðu stærri skrúfganga og notaðu hitaþétt innlegg eða skrúfuð göt fyrir þá minni.
:::

Líkanaður skrúfgangur er hluti af fasta efninu: STL-, 3MF- og STEP-útflutningur ber hann, og Mæling mælir hann. Hann gerir hlutinn þyngri að endurreikna: M10 skrúfgangur 20 langur er um 150,000 þríhyrningar.

## Skrúfuð göt

Skrúfað gat (**Skrúfað (ISO-metrískt)**) er með **Líkanaður**-rofa líka, með sama **Bili**. Sjá [Bora göt og skúffur við skissupunkta](topic:holes).

## Þegar skrúfgangur smíðast ekki

- „Skrúfgangur fer á kringlóttan flöt (strokk): ás eða borgat.“ Flöturinn sem var valinn er flatur eða bogadreginn á annan hátt.
- „Engin staðalstærð passar við kringlótta flötinn Ø0.6 mm: veldu stærð.“ Passa við flötinn fann ekkert innan 12 % af fletinum. Veldu **Stærð**, eða breyttu fletinum.
- „Flöturinn sem þessi skrúfgangur var á er horfinn (…). Veldu hann aftur.“ Fyrri breyting fjarlægði flötinn. Smelltu á {{ui:Velja fleti}} og smelltu á flötinn aftur.

:::note
Tommuskrúfgangar (UNC, UNF), pípuskrúfgangar, keilulaga skrúfgangar, skrúfgangsútlok og skálaðir upphafsendar skrúfgangs eru ekki smíðaðir enn. Nákvæmi kjarninn sýnir líkanaðan skrúfgang sem útlitslegan.
:::
