---
title: Yfirborð gegnum netkerfi ferla (Gordon-yfirborð)
summary: Búðu til eitt slétt yfirborð gegnum net sniðferla og leiðarferla sem teiknaðir eru í skissum eða teknir úr brúnum líkansins, lokaðu því í fast efni þegar sniðin eru lokuð, og hvað er nákvæmt, hvað er passað, og skilaboðin þegar netkerfi passar ekki.
keywords: snertilína, g1, snertiskilyrði, samfelld snerting, speglunarplan, gordon-yfirborð, ferlanet, mörk-yfirborð, netyfirborð, sniðferlar, leiðarferlar, leiðarlínur, lóftun með leiðum, leiðarteinar, húð, transfinite, coons, b-spline-yfirborð, frjálst yfirborð
from: ada3cb8b
---

:::note
**Ekki enn tiltækt í þessari útgáfu.** Gordon-yfirborðið þarf nákvæman rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki: hún smíðar alla hluti með möskvakjarnanum. [Það sem er ekki enn tiltækt](topic:not-built-yet) segir hvað skal gera í staðinn. Restin af þessari síðu lýsir því eins og það virkar með nákvæmum kjarna.
:::

**Gordon-yfirborð** er eitt yfirborð sem fer í gegnum hverja ferillínu netkerfis: sett af **sniðum** sem liggja í aðra áttina og sett af **leiðum** sem liggja í hina, þvert á hvort annað eins og þræðir í neti. Þannig mótar þú skrokk, bretti eða handfang úr nokkrum sniðlínum sem þú stjórnar beint. Það þarf **nákvæma kjarnann** (sjá [Möskvakjarninn](topic:solid-kernels)).

## Teiknaðu netkerfið

1. Teiknaðu **sniðin**: tvær eða fleiri línur sem liggja hlið við hlið, til dæmis snið á samsíða planum. Línur, bogar, hringir og splines virka allir, og keðja af línum sem tengdar eru enda við enda telst ein lína.
2. Teiknaðu **leiðirnar**: tvær eða fleiri línur sem liggja þvert yfir sniðin. Hver leið þarf að skerast hvert snið einu sinni, og hvert snið hverja leið einu sinni.
3. Láttu línurnar mætast í alvöru. Teiknaðu skissu leiðarinnar þannig að ferill hennar fari í gegnum punkta sniðanna (smelltu á vörpuð punkta, eða sláðu inn hnit). Netkerfið tekur við bilum allt að **Þoli** (0,01 mm til að byrja með).

Ein skissa getur haldið nokkrum línum: hver aðskilin keðja í henni er sín eigin lína. Þú getur því teiknað allar leiðirnar í einni skissu á efra planinu, til dæmis.

## Búðu til yfirborðið

1. Veldu {{ui:Meira}} í Eiginleikahópnum, og síðan {{ui:Gordon-yfirborð}}.
2. PartCraft tekur þær skissur sem enginn notar enn: þær á planum samsíða því fyrsta verða **snið**, hinar **leiðir**. Athugaðu listann hægra megin og stilltu hverja skissu á **Snið**, **Leiðir** eða **Ekki notað**.
3. Til að nota brúnir hlutarins, smelltu á **Velja brúnir sem snið** (eða **sem leiðir**), smelltu á brúnirnar í sýninni og ýttu síðan á Esc.

Niðurstaðan er **yfirborðshlutur**. {{ui:Þykkva}} breytir honum í fast efni, {{ui:Sauma}} saumar hann við önnur yfirborð, og {{ui:Stytta yfirborð}} sker hann.

### Lokaðu í fast efni

Þegar sniðin eru lokaðar línur (hringir, lokaðir splines, lokaðar keðjur) og fyrsta og síðasta sniðið liggja hvort um sig flöt í plani, merktu við **Loka í fast efni**. Endarnir eru þaktir flötum fleti og lokaða formið tengist, sker, skerst eða verður nýr hluti eins og hver annar eiginleiki. Þannig býrð þú til lóftun sem fylgir leiðarlínum. Það virkar einnig með lokuðum leiðum.

## Snertilegt plani við brún

Gordon-yfirborð fer í gegnum línur sínar, en eitt og sér passar það ekki halla þess sem það mætir. Til að láta það yfirgefa brún **snertilegt** við plan (G1), svo sem speglunarplan, þannig að speglaða afritið tengist án brots, eða flatan flöt sem það vex út úr:

1. Veldu Gordon-eiginleikann. Undir **Snertilegt við** skaltu velja plan í {{ui:Bæta við plani…}} (Fram, Efst, Hægri eða viðmiðunarplan), eða velja flatan flöt í sýninni og ýta á {{ui:Bæta við valda sléttu fleti}}.
2. PartCraft finnur mörkferilinn í netkerfinu sem liggur í því plani, og yfirborðið yfirgefur hann snertilegt við planið.

Ef plan á tvo mörkferla (gólf undir báðum endum), bættu því við tvisvar: hvert afrit tekur þann næsta. Allt að fjögur plön, eitt á hverja brún.

Skýrslan segir eftir hvaða ferli hvert plan gerði yfirborðið snertilegt og brattasta hornið sem yfirborðið mætti planinu í áður. Leiðir sem þegar yfirgefa þann feril snertilega við planið eru fylgdar nákvæmlega. Leiðir sem klífa burt frá honum eru beygðar í mjóu belti nálægt brúninni, og tala skýrslunnar „fylgir hverri línu innan“ segir hversu mikið: teiknaðu leiðirnar sem yfirgefa brúnina flatar til að fá nákvæma passun.

## Hvað er nákvæmt og hvað er passað

Spjaldið segir hvaða af þessu gildir, og hversu mikið yfirborðið víkur frá línum þínum.

- **Nákvæmt**: þegar sérhver lína er margliða (línur, splines og keðjur af þeim) og leiðirnar skera öll sniðin á sömu breytum, er yfirborðið nákvæmlega Gordon-yfirborð þeirra lína. Netkerfi samsíða lína sem skornar eru úr tvíkúbísku yfirborði skilar því yfirborði aftur, og fjórar beinar línur gefa flatan eða snúinn (tvílínulegan) plástur.
- **Passað**: bogar, hringir og brúnir hlutarins eru ekki margliður, og línur sem skerast á mismunandi breytum þarf að endurstilla svo skurðpunktarnir passi. Þær línur eru passaðar með kúbískum B-splines innan einnar tíu-milljónustu af stærð netkerfisins (um 0,00001 mm fyrir 100 mm hlut). Sívalningsplástur úr bogum og línum er innan 0,00001 mm frá hinum sanna sívalningi.

Á milli línanna er yfirborðið það sem aðferðin gefur: sniðin blönduð yfir, plús leiðirnar blandaðar yfir, mínus blöndun skurðpunktanna. Það er slétt alls staðar nema þar sem ferill hefur skarpt horn. Þar sem tvö Gordon-yfirborð deila mörkferli mætast þau brún við brún (G0), ekki snertilega.

## Þegar netkerfi passar ekki

| Skilaboð | Hvað skal gera |
|---|---|
| „… mætast ekki: þau eru 0,4 mm í sundur“ | Láttu það snið og þá leið skerast, eða hækkaðu Þolið |
| „… mætir … 2 sinnum“ | Leið má aðeins skera hvert snið einu sinni: skiptu lykkjandi ferli, eða notaðu færri snið |
| „… í annarri röð“ eða „brettist yfir sjálft sig“ | Tvær leiðir skerast (eða tvö snið). Ættirnar verða að liggja hlið við hlið |
| „að minnsta kosti tvö snið og tvær leiðir“ | Bættu við línum, eða stilltu fleiri skissur á Snið eða Leiðir |
| „blanda opnum og lokuðum línum“ | Gerðu öll sniðin opin eða öll lokuð (það sama gildir um leiðirnar) |
| „Endi … er ekki flatur, svo ekki er hægt að loka honum“ | Teiknaðu fyrsta og síðasta lokaða sniðið hvort í sínu plani, eða láttu Loka í fast efni vera óvirkt |

## Takmarkanir

- Eitt B-spline-flötur á hvert netkerfi: ekkert G1 eða G2 snertiskilyrði við nágrannayfirborð.
- Saumur lokaðs netkerfis, við fyrstu leiðina, er tengdur brún við brún en ekki snertilegur.
- Sjálf lóftunin hefur engar leiðarteina; notaðu Gordon-yfirborð lokað í fast efni í staðinn.
- Mjög bugðóttar línur, eða skurðpunktar sem eru mjög ójafnt dreifðir eftir einni línu miðað við aðra, geta þurft of marga punkta til að passa; eiginleikinn segir það þá.
