---
title: Færðu hluti til og frá öðrum hlutamótunarforritum
summary: Sendu hlut til annars hlutamótunarforrits sem fjölva sem smíðar hann aftur með lifandi eiginleikatré. Nefnt STEP og opnun eiginleikalistans sem annað mótunarforrit skrifaði út eru ekki smíðuð enn í þessari útgáfu.
keywords: fjölvi, ekki smíðað, swb, vba, eiginleikatré, hringferð, flytja út fjölva, cadcraft-sw.json, nefnt step, ap214, alþjóðlegar breytur, jöfnur, innfæddur hlutur
from: 97ca61da
---

PartCraft skiptir hlutum við SolidWorks í báðar áttir, án skráarsniðs sem enginn annar getur lesið:

- **Út:** fjölvi (`.swb`, venjulegur texti) sem SolidWorks keyrir til að smíða hlutinn sjálfan, eiginleika fyrir eiginleika, með skissum sínum, tengslum, málsetningum, alþjóðlegum breytum og jöfnum. Þú færð innfæddan hlut með lifandi eiginleikatré, ekki dautt fast efni.
- **Til baka:** fjölvi sem þú keyrir inni í SolidWorks skrifar eiginleika og jöfnur hlutarins í skrána `.cadcraft-sw.json`. Opnun þeirrar skráar í PartCraft er ekki smíðuð enn í þessari útgáfu (hún þarfnast nákvæms kjarna).

:::warning
Ekkert af þessu hefur enn verið prófað í SolidWorks. SolidWorks keyrir aðeins á Windows með leyfi, og PartCraft hefur aldrei keyrt þessi fjölva í því. Fjölvunum var skrifað eftir API-skjölum SolidWorks og uppbygging þeirra athuguð hér. Búast má við að þurfa að tilkynna vandamál; skráin sem fjölvinn skrifar segir hvaða skref mistókst.
:::

PartCraft getur ekki skrifað `.sldprt`-skrá: það snið er lokað. Fjölvinn er leiðin til að fá innfæddan hlut.

## Senda hlut sem fjölva

1. Opnaðu hlutinn.
2. Veldu {{ui:Flytja út}}, síðan {{ui:Fjölva fyrir SolidWorks (.swb)}}. PartCraft sækir `<part>.swb`; stöðustikan segir að hún hafi verið „skrifuð án nákvæms kjarna“.
3. Samtal segir til um hversu marga eiginleika, alþjóðlegar breytur og jöfnur fjölvinn smíðar, og listar allt sem hann sleppir. Ekkert STEP fylgir með í þessari útgáfu: notaðu {{ui:Flytja út}}, síðan {{ui:STEP (facetað, möskvakjarni)}} ef þú þarft eina.
4. Í SolidWorks velurðu **Tools > Macro > Run**, veldur `.swb`-skrána og bíðrð. Hann býr til nýjan hlut úr sjálfgefna hlutasniðmátinu þínu, stillir millimetra og smíðar sérhvern eiginleika.
5. Í lokin segir skilaboð hversu mörg skref voru kláruð, hversu mörg mistókust og hversu mörg pössuðu við búk PartCraft. Full atburðaskrá, `<part> macro log.txt`, er skrifuð við hlið fjölvans.

Það sem fjölvinn smíðar:

| PartCraft | Í nýja hlutnum |
|---|---|
| Skissa á Framflöt, Efriflöt eða Hægri flöt | Skissa á þeim fleti, með línum, bogum, hringjum, punktum, tengslum og málsetningum (nefnd eins og í PartCraft, til dæmis `k7`) |
| Skissa á fleti | Skissa á sama fleti, valið með punkti á honum |
| Skissa á föstum fleti | Viðmiðsflötur í gegnum þrjá punkta, og skissan á honum |
| Útdráttur, skurður (blindur, í gegnum allt, miðflötur, tvær áttir, skálaga) | Boss-extrude eða cut-extrude |
| Snúningur, snúinn skurður | Snúningur um sömu miðlínu |
| Gat (einfalt, counterbore, countersink, skrúfgengt) | Einn eða tveir skurðir með eigin skissum (skrúfgengt gat er borað í borstærð fyrir gengjuna; enginn skrúfgangur) |
| Línulegt og hringlaga mynstur, spegling | Línulegt mynstur, hringlaga mynstur, spegling (eiginleikar eða búkurinn) |
| Ávala, skáskurður, skel | Ávala, skáskurður og skel á sömu brúnum og flötum, valið með punktum |
| Breytur og jöfnur | Alþjóðlegar breytur og jöfnur á endurnefndu málsetningunum |
| Bældir eiginleikar, afturrúllustikan | Bældir á sama hátt; afturrúllustikan á sama stað |

Eftir hvern fastan eiginleika ber fjölvinn saman rúmmál og stærð búksins við PartCraft. Þegar þau eru ólík snýr hann átt þess eiginleika einu sinni við og athugar aftur; ef það er ekki betra snýr hann henni til baka og skrifar "Check" í skrána.

### Það sem er skilið eftir

Samtalið og efst í fjölvanum er listi yfir allt sem ekki var flutt yfir, með ástæðunni. Eins og er eru það: innfluttir föst efni (settu STEP inn í staðinn), sweep, loft, halli, viðmiðsásar og punktar, endaskilyrði „up to“, útdráttur aðeins hluta útlína, og allt sem byggir á þeim. Sveigðar línur verða að ferlum í gegnum punktana sínum. Þessi útgáfa hefur engan nákvæman kjarna, þannig að skissur á fleti og eiginleikar sem velja brúnir eða fleti eru einnig skildir eftir.

## Senda nefnt STEP

Ekki smíðað enn í þessari útgáfu: {{ui:STEP fyrir SolidWorks (nefnt, AP214)}} þarfnast nákvæms kjarna, og þegar það er valið segir „STEP fyrir SolidWorks: ekki smíðað enn. …“. Með nákvæmum kjarna ber skráin nafn hlutarins, millimetra og lit hlutarins, og stendur Y upp, eins og SolidWorks sýnir hluti (venjulegur {{ui:STEP AP214 (nákvæmt fast efni)}}-útflutningur stendur Z upp). Stafir með broddum missa þá í nafninu, og aðrir stafir utan venjulegs ASCII verða að `_`.

## Færa hlut til baka

Opnun skrárinnar í PartCraft (skref 3) er ekki smíðuð enn í þessari útgáfu: hún segir „Opnun SolidWorks-útflutnings: ekki smíðað enn. …“. Teikniforritið CadCraft opnar samt skrána og tekur skissurnar úr henni.

1. Veldu {{ui:Skrá}} > {{ui:Flytja út}} > {{ui:Fjölvi til að flytja hluti til baka (.swb)}} til að sækja `CadCraftExport.swb` og settu hana við hlið hlutanna þinna.
2. Í SolidWorks, opnaðu hlutinn, veldu **Tools > Macro > Run** og veldu `CadCraftExport.swb`. Hann skrifar `<part>.cadcraft-sw.json` við hlið hlutarins og breytir engu í honum.
3. Í PartCraft velurðu {{ui:Opna}} og velur þá skrá, eða slepptu henni á þrívíddarsýnina.
4. Með nákvæmum kjarna smíðar PartCraft hlutinn aftur eiginleika fyrir eiginleika og sýnir hvað það gerði: til dæmis „5 af 5 eiginleikum fluttir yfir úr SolidWorks (Flange.SLDPRT)“, hvern eiginleika sem það gat ekki flutt („Ekki flutt yfir: Sweep1 (Sweep).“) og hvort rúmmálið passar við það sem SolidWorks skrifaði.
5. Vistaðu hann sem PartCraft-hlut með {{ui:Vista}}.

Skissur lenda á grunnfleti þegar þær eru á slíkum, á samsvarandi sléttum fleti hlutarins þegar hann er til staðar (þannig að þær fylgja síðari breytingum), og annars á föstum fleti. Brúnir og fletir ávala, skáskurða og skela eru fundnir út frá punktum og geymdir sem nefndar tilvísanir. Alþjóðlegar breytur verða að breytum (nöfn með bilum fá undirstrik: „Bolt count“ verður `Bolt_count`) og jöfnur verða að jöfnum á sömu málsetningum. Ekkert er giskað: það sem hefur enga hliðstæðu er skráð.

Teikniforritið CadCraft opnar sömu skrána og tekur skissurnar úr henni.

:::note
Sniðið er `cadcraft-sw-export` útgáfa 1, venjulegt JSON í millimetrum og gráðum. Skrá frá nýrri fjölva, eða skrá sem er ekki gild, er hafnað með ástæðunni.
:::
