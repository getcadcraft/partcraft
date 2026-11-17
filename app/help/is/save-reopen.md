---
title: Vista, opna aftur og halda áfram
summary: Vistaðu hluti og samsetningar á tölvuna þína, nefndu þá, opnaðu þá aftur með hnappi, flýtilykli eða með því að draga, haltu utan um útgáfur og forðastu að tapa vinnu í vafraflipa.
keywords: vista, opna, opna aftur, hlaða, niðurhal, útgáfur, öryggisafrit, endurnefna, skráarnafn, týnd vinna, yfirgefa síðu, partcraft.json, partcraft-asm.json, nýr hlutur
from: c18a5abc
---

PartCraft geymir ekkert á milli heimsókna. Hluturinn þinn lifir í vafraflipanum þar til þú vistar hann sem skrá, og kemur aftur þegar þú opnar þá skrá.

## Vista hlut

1. Nefndu hlutinn: smelltu á autt svæði í sýninni svo ekkert sé valið, skrifaðu **Nafn** í hægra spjaldið og ýttu á {{key:Enter}}. Fyrirsögn ferilskrárinnar breytist til samræmis.
2. Ýttu á {{key:Mod+S}} eða veldu {{ui:Vista}}.
3. Vafrinn sækir `<name>.partcraft.json`. Stöðustikan segir „Vistað Bracket.partcraft.json (öll ferilskráin; opnaðu hana hér til að halda áfram að breyta).“

Ef skissa er opin lokast hún fyrst þegar þú vistar.

Skráin geymir allar skissur, tengsl, víddir og eiginleika, auk óvirkra eiginleika, stöðu afturrúllunarstikunnar, stillingar teikniblaðsins og GD&T-athugasemdirnar, og allan texta hvers innflutts STEP-massa. Afturkallalistinn þinn er ekki vistaður.

## Vista samsetningu

Í samsetningu sækir sama {{ui:Vista}} eða {{key:Mod+S}} skrána `<assembly name>.partcraft-asm.json`. Sérhver hlutur er geymdur inni í henni: þú þarft ekki sérstakar hlutaskrár til að opna hana aftur.

Á meðan þú breytir hluta innan úr samsetningu vistar {{key:Mod+S}} þann hluta einan sem `.partcraft.json`. Veldu fyrst {{ui:Til baka}} og vistaðu síðan til að vista alla samsetninguna.

## Opna aftur

Eitthvað af þessu:

- veldu {{ui:Opna}} eða ýttu á {{key:Mod+O}}, og veldu skrána;
- dragðu skrána frá {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}} yfir þrívíddarsýnina („Slepptu PartCraft-hlut til að opna hann“ birtist).

PartCraft greinir hluti frá samsetningum eftir innihaldinu, þannig að bæði opnast á sama hátt. `.step`- eða `.stp`-skrá opnast sem innfluttur massi: sjá [Opna STEP-skrá og byggja ofan á hana](topic:import-step). Stöðustikan staðfestir: „Opnað Bracket.partcraft.json: 7 eiginleikar.“ eða „Opnað Hinge.partcraft-asm.json: 3 hlutir, 2 liðir.“

Ef hluturinn á skjánum hefur óvistaðar breytingar spyr PartCraft fyrst: {{ui:Hætta við}}, {{ui:Henda breytingum}} eða {{ui:Vista fyrst}}.

:::warning
Lokaðu samsetningu ({{ui:Loka}}) áður en þú opnar hlutaskrá. Ef þú opnar hlut á meðan samsetning er á skjánum hleðst hluturinn á bak við samsetninguna og þú sérð hann ekki fyrr en þú lokar henni. Að opna samsetningarskrá skiptir líka út óvistaðri samsetningu án þess að spyrja, svo vistaðu hana fyrst.
:::

## Byrja upp á nýtt

{{ui:Nýtt}} býr til tóman „Part1“. Það spyr fyrst ef óvistaðar breytingar eru til staðar, og lokar opinni samsetningu (og spyr ef hún er óvistuð).

## Halda útgáfum

Sérhver vistun er nýtt niðurhal, þannig að þú getur haldið útgáfum einfaldlega með því að geyma skrárnar:

- Settu útgáfu eða dagsetningu í nafnið áður en þú vistar: „Bracket rev B“.
- Vafrinn þinn gæti bætt við „ (1)“, „ (2)“ þegar skrá með sama nafni er þegar í niðurhalsmöppunni. Sú nýjasta er sú með hæstu töluna, eða athugaðu dagsetninguna í {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}}.
- Færðu fullgerðar skrár úr niðurhalsmöppunni í verkefnamöppuna þína.

Sjá [Hvar skrárnar þínar fara](common:your-files) um hvar niðurhöl fara á hverju kerfi.

## Ekki tapa vinnu

- Vistaðu áður en þú lokar flipanum, endurhleður síðuna eða lætur tölvuna sofa í langan tíma. Vafrinn spyr „Yfirgefa síðu?“ ef þú reynir að loka með óvistuðum breytingum, en hrun eða lokuð fartölva gefur enga viðvörun.
- Einkagluggar eða huliðsgluggar virka, en annað er ekki öðruvísi: skráin er samt eina eintakið.
- Skýjavistun og útgáfusaga eru ekki tiltæk enn.
