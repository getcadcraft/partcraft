---
title: Opna STEP-skrá og byggja á henni
summary: Færðu STEP-líkan frá birgi eða öðru CAD-forriti inn í PartCraft sem fastan efnishlut, sem nýjan hluta eða bætt við þann sem fyrir er, stilltu hvaða leið er upp og bættu við skissum og eiginleikum á hann.
keywords: step, stp, innflutningur, opna step, ap203, ap214, ap242, birgjalíkan, óvirkt fast efni, innflutt fast efni, upp-ás, z upp, y upp, þríhyrningar, fasettur, samsetningar-step
from: ca0eca5f
---

PartCraft opnar STEP-skrár (`.step` eða `.stp`, AP203, AP214 og AP242) sem **fasta efnishluti** sem þú getur skissað á, skorið, borað í og sameinað eigin eiginleikum. Hluturinn hefur enga sögu sjálfur: þú getur ekki breytt málunum sem hann var gerður með, aðeins bætt við hann eða skorið úr honum.

Þessi útgáfa smíðar alla hluti með möskvakjarnanum, þannig að STEP-skrá er **lesin sem þríhyrningar**: flatir fletir haldast flatir, en bogaðir fletir (strokkar, keilur, kúlur, tórusar, B-spline-yfirborð) verða að mörgum smáum flötum. Rúmmál hennar er innan brots úr prósenti af hinu nákvæma. Til að halda bogaðum flötum nákvæmum þarf nákvæman kjarna, sem er ekki í þessari útgáfu.

## Opna STEP-skrá

1. Veldu {{ui:Opna}} eða ýttu á {{key:Mod+O}}, og veldu `.step`- eða `.stp`-skrána. Eða slepptu henni á þrívíddarsýnina.
2. PartCraft les skrána og sýnir hvað hún fann, til dæmis: „AP214-skrá: 1 fast efni, 10 fletir, lesin sem þríhyrningar.“ Fyrir neðan eru fjöldi þríhyrninga, allt sem þurfti að sleppa eða sameina, og hvort niðurstaðan lokast.
3. Athugaðu **Upp í skránni**. STEP-skrá segir sína eigin einingu (millimetrar, tommur, metrar…); PartCraft breytir henni í millimetra, þannig að **Einingar í skránni** sýnir Millimetrar, „skráin segir það“. **Stærð hér** sýnir hversu stór hann verður.
4. Veldu {{ui:Opna sem hlut}} fyrir tóman hluta, eða {{ui:Bæta við þennan hluta}} / {{ui:Nýr hluti}} þegar hluturinn er þegar með eiginleika. Bæting spyr hvað eigi að **Nota til**: bæta við, skera eða halda aðeins sköruninni.

Eiginleikinn **Imported1** birtist í sögunni og stöðustikan segir til dæmis: „plate.step er fastur efnishluti: 57995.937 mm³, 6 flatir fletir til að skissa á.“

## Samsetning í STEP

Samsetning kemur inn sem **einn hlutur** með öllum hlutum þar sem skráin setur þá („3 hlutar settir í skrána koma inn þar sem þeir standa“). Hlutur sem er notaður tvisvar kemur inn tvisvar. Heiti hlutanna og tré samsetningarinnar haldast ekki.

## Stilltu hvaða leið er upp

Flest CAD-forrit nota Z upp; PartCraft notar Y upp. Sjálfgefið snýr PartCraft skránni þannig að Z vísi upp hér. Ef hluturinn kemur liggjandi á hliðinni skaltu velja **Imported1** og stilla **Upp í skránni** á **Y upp**. **Einingar í skránni** og **Nota til** er líka hægt að breyta þar; hver breyting er eitt skref í afturköllun.

## Byggja á honum

- Smelltu á flatan flöt á hlutnum og veldu {{ui:Skissa á þessum fleti}}. Flatir fletir STEP-líkansins halda stöðu sinni þegar hluturinn er byggður upp aftur.
- Bættu við skurðum, götum, upphækkunum, mynstrum og speglunum eins og á öðrum hlutum.
- Athugaðu stærð hans í reitnum **Hlutur**: rúmmál, yfirborðsflatarmál, stærð.

Rúnanir, skálanir og skeljar þurfa nákvæma kjarnann, eins og á hverjum hluta í þessari útgáfu ([Möskvakjarninn](topic:solid-kernels)).

## Hvar hún er geymd

Þríhyrningarnir eru geymdir **inni í** `.partcraft.json`-skránni, þannig að hlutaskráin er sjálfstæð: þú þarft ekki STEP-skrána aftur.

## Skilaboð

| Skilaboð | Hvað þau þýða |
|---|---|
| „part.stp er ekki STEP-skrá (hún byrjar ekki á ISO-10303-21).“ | Skráin er ekki hreinn STEP-texti. Biddu sendandann um STEP-skrá af gerðinni AP203, AP214 eða AP242 |
| „STEP-skrána var ekki hægt að lesa: gagnahlutinn vantar eða er skemmdur.“ | Skráin er skorin af eða skemmd. Afritaðu hana aftur |
| „STEP-skráin geymir ekkert fast efni eða yfirborðshlut: ekkert er hægt að flytja inn.“ | Skráin geymir aðeins teikningar, punkta eða gögn. Biddu um fast efni |
| „Þessi STEP-skrá er of stór (yfir 60 MB) til að flytja inn hér.“ og önnur mörk lesarans (færslur, fletir, þríhyrningar) | Einfaldaðu líkanið við upprunann, eða sendu hluta eitt og eitt |
| „… skemmdum línum í skránni var sleppt.“ | Sumum línum var ekki hægt að lesa; hitt kom inn. Athugaðu hlutinn |
| „… fletir gátu ekki orðið að þríhyrningum og voru skildir eftir.“ | Þeir skilja eftir göt, sem PartCraft reynir að fylla; ef hluturinn lokast er hann ekki bættur við |
| „… fletir af gerð sem er ekki lesin (…) var sleppt.“ | Sjaldgæf yfirborðsgerð. Biddu um líkanið með einföldum eða B-spline-yfirborðum |
| „Hann lokast ekki …“ | Fletirnir mynda ekki lokað fast efni (yfirborðslíkan, eða fletir skildir eftir). PartCraft sýnir opin svæðin og bætir engu við |

## Takmarkanir

- Bogaðir fletir eru teiknaðir og mældir sem flatar skífur, eins og á hverjum hluta sem þessi útgáfa smíðar. PartCraft heldur flötum skráarinnar, flötum, strokkum, keilum, kúlum og tórusum með hlutnum, þannig að {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar þá aftur sem sönn yfirborð, göt sem göt, ásamt eiginleikunum sem þú bætir við. Fletir sem skráin gefur sem splínur, skriðfleti eða snúningsfleti haldast sem flatar skífur í útflutningnum. Hlutur sem var vistaður fyrir 0.9.1 hefur engin vistuð yfirborð: opnaðu STEP-skrána aftur til að fá þau.
- {{ui:Flytja út}} › {{ui:DXF af skissunni eða sléttum fleti}} með völdum flötum skrifar kringlótt gat skráarinnar sem sannan hring.
- Litir, heiti hluta, uppbygging samsetningar og PMI (vikmörk í skránni) eru ekki lesin.
- Auk STEP opnar PartCraft STL-, OBJ- og 3MF-möskva ([Opna STL-, OBJ- eða 3MF-skrá](topic:open-meshes)) og `.3dm`-skrár ([Opna .3dm-líkan](topic:open-3dm-files)) sem fasta efnishluti. IGES og innfæddar skrár annarra forrita eru ekki studdar.
- Hlutur með STEP-föstu efni sem var fluttur inn í smíði sem hafði nákvæma kjarnann geymir STEP-textann; þessi útgáfa sleppir þeim eiginleika („ekki smíðað“). Opnaðu STEP-skrána aftur til að flytja hana inn sem þríhyrninga.
