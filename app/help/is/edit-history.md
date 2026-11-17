---
title: Breyta hluta í gegnum söguna
summary: Breyttu eiginleikum og skissum eftir á, bældu, rúllaðu til baka, settu eiginleika fyrr inn, raðaðu upp á nýtt, endurnefndu og eyddu, og afturkallaðu hvað sem er af því.
keywords: saga, eiginleikatré, hönnunartré, breyta eiginleika, breyta skissu, bæla, hætta við bælingu, rúlla til baka, rúlla áfram, raða, færa eiginleika, eyða, endurnefna, afturkalla, endurgera, endurbyggja, endurreikna, foreldri, barn, stór hluti, margir eiginleikar, hæg endurbygging, 750 eiginleikar
from: 6f75aef4
---

Hluti í PartCraft er sagan hans: listinn yfir plön, skissur og eiginleika vinstra megin. PartCraft endurbyggir fastann frá efsta hluta listans í hvert skipti sem eitthvað breytist. Ef þú breytir tölu framarlega í listanum breytist allt sem byggt er á henni.

## Breyta eiginleika

1. Smelltu á eiginleikann í sögunni (eða skissuna sem er inndregin undir honum).
2. Breyttu stillingum hans í hægra spjaldinu. Hver breyting endurbyggir strax.

Það er enginn Í lagi eða Hætta við: hver breyting er tekin gild. Ef þér líkar hún ekki skaltu ýta á {{key:Mod+Z}}.

## Breyta því hvaða brúnir eða fletir ávöl, skábrún eða skel notar

Tvísmelltu á eiginleikann í sögunni, eða veldu hann og veldu {{ui:Pick edges}} (eða {{ui:Pick faces}}). Smelltu á brúnir eða fleti til að bæta þeim við eða taka þá út, og veldu síðan {{ui:Done}} eða {{key:Esc}}. Sjá [Ávöl, skábrún og hol](topic:fillet-chamfer-shell).

## Breyta skissu

1. Tvísmelltu á skissuna í sögunni, eða veldu hana og veldu {{ui:Edit sketch}} í hægra spjaldinu (eða {{ui:Sketch}} á tækjastikunni).
2. Hlutinn fer aftur í það horf sem hann var í þegar skissan var gerð: eiginleikar á eftir henni eru faldir meðan þú breytir.
3. Breyttu rúmfræðinni, tengslunum eða málsetningunum.
4. Lokaðu skissunni. Allur hlutinn endurbyggist með breytingunni.

Til að breyta aðeins stærð þarftu ekki að opna skissuna. Veldu eiginleikann eða skissuna og breyttu tölunni undir **Málsetningar skissu** (eða **Stýrandi málsetningar**) í hægra spjaldinu. Sjá [Breyta stærðum án þess að opna skissuna](topic:change-sizes).

## Þegar eiginleiki bilar

Ef breyting gerir eiginleika ómögulegan byggir PartCraft allt annað og merkir vandamálið:

- eiginleikinn sýnir **⚠ villa** í sögunni, og skilaboðin eru efst í hægra spjaldinu hans (færðu bendilinn yfir röðina til að lesa þau líka);
- eiginleikar sem þurfa hann sýna **⚠ ekki byggt**, með „Þarfnast Extrude2, sem er að bila.“;
- stöðumerkið í stöðustikunni segir „1 eiginleiki bilar“.

Lagfærðu orsökina (eða afturkallaðu), og hluturinn byggist aftur. Algeng skilaboð og hvað skal gera við þau eru í [Úrræðaleit](topic:troubleshooting).

## Bæla eiginleika

Bæling slekkur á eiginleika án þess að eyða honum: gagnlegt til að prófa hlut án gats eða mynsturs.

1. Veldu eiginleikann.
2. Veldu {{ui:Suppress}}. Röðin hans sýnir **slökkt**. Eiginleikar sem þurfa hann eru ekki byggðir heldur.
3. Veldu {{ui:Unsuppress}} til að kveikja á honum aftur.

## Rúlla til baka

Að rúlla til baka byggir hlutinn aðeins upp að ákveðnum stað, svo þú getir séð hann eins og hann var, eða bætt eiginleika framar í sögunni.

1. Veldu eiginleika og veldu {{ui:Roll back to here}}. Sá eiginleiki og allir fyrir neðan hann verða gráir og ekki byggðir. Röð merkt **Rúllustika · rúlla áfram** sýnir staðinn.
2. Eiginleiki sem þú bætir við núna fer **við stikuna**, fyrir framan þá gráu.
3. Smelltu á **Rúllustika · rúlla áfram** til að byggja allt aftur.

Staða afturrúllunnar er vistuð í skránni.

## Raða eiginleikum upp á nýtt

1. Veldu eiginleikann.
2. Veldu {{ui:Move up}} eða {{ui:Move down}}, eða, með röðina í sögunni valda, ýttu á {{key:Alt+Up}} eða {{key:Alt+Down}}.

Eiginleiki getur aldrei farið fyrir ofan það sem hann notar. Hnappurinn er grár, og ef þú færir bendilinn yfir hann (eða prófar takkann) kemur ástæðan fram, til dæmis „Extrude2 notar Sketch2, svo Sketch2 þarf að koma fyrst.“

Það sem eiginleiki notar: skissu sína; flötinn sem skissan liggur á; eiginleikana sem mynstur eða spegling afritar; skissulínu eða snúning sem er notuð sem stefna eða ás.

## Eyða eiginleika

1. Veldu eiginleikann og veldu {{ui:Delete}} í hægra spjaldinu eða á tækjastikunni, eða ýttu á {{key:Delete}}.
2. Ef aðrir eiginleikar nota hann spyr PartCraft: „Extrude3, Hole1 nota Extrude1 og verða líka eydd.“ Veldu {{ui:Delete all}} eða {{ui:Cancel}}.

Að eyða eiginleika eyðir ekki skissunni hans: skissan birtist í sýninni sem ónotuð skissa, tilbúin fyrir annan eiginleika. Eyddu skissunni sérstaklega ef þú þarft hennar ekki.

## Endurnefna

Veldu eiginleikann og skrifaðu nýtt **Heiti** neðst í hægra spjaldinu (allt að 60 stafir). Nafn hlutarins sjálfs er í hægra spjaldinu þegar ekkert er valið.

## Hlutir með hundruðum eiginleika

Hluti með hundruðum eiginleika er prófaður við 750. PartCraft geymir fastann sem hann hafði á miðri leið í sögunni, svo breyting neðarlega í sögunni endurbyggir aðeins eiginleikana á eftir henni. Breyting nálægt toppi endurbyggir allt sem byggt er á henni, og það tekur lengst. Afturköllun og endurgerð endurbyggja aðeins frá þeim stað þar sem stöðurnar tvær eru ólíkar. Til að vinna hraðar í stórum hluta skaltu rúlla til baka þangað sem þú vinnur (sjá Rúlla til baka hér að ofan) eða bæla það sem þú þarft ekki í bili. Nokkrir skurðir og upphleyptir hlutar sem snerta ekki hver annan eru settir á saman, svo hlutur úr mörgum aðskildum götum og upphleyptum hlutum byggist hraðar en fjöldi eiginleika gefur til kynna.

Stór hluti endurbyggist í bakgrunni: byggingarmerkið neðst segir **Endurbyggi…** ásamt því hversu langt er komið, og sýnin, spjöldin og valmyndirnar virka áfram meðan á því stendur. Hluturinn á skjánum er síðasti byggði hluturinn þar til sá nýi er tilbúinn. Ef þú breytir einhverju aftur meðan hann endurbyggist byggir PartCraft nýjustu útgáfuna og hendir þeirri sem var í vinnslu. Lítill hlutur endurbyggist strax.

## Afturkalla og endurgera

- {{key:Mod+Z}} eða {{ui:Undo}} afturkallar síðustu breytingu: eiginleika, stillingu, skissubreytingu eða dragningu. Stöðustikan segir hvað það var, til dæmis „Afturkallaði breytingu á málsetningu.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} eða {{ui:Redo}} endurgerir hana.
- PartCraft geymir síðustu 200 skrefin (hluti svo stór að 200 afrit myndu nota mikið minni geymir færri, en aldrei færri en 20 nýjustu). Breytingar á teikniblaðinu (snið, færður GD&T-táknur) eru á sama lista. Opnun skráar eða nýr hluti hreinsar listann.

:::mac
Á Mac notarðu ⇧⌘Z til að endurgera. Í Safari gæti ⌘Y opnað feril vafrans í staðinn.
:::
