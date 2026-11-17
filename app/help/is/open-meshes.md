---
title: Opnaðu STL, OBJ eða 3MF sem fasta líkama
summary: Breyttu möskva úr skanna, þrívíddarprentunarvef eða öðru forriti í fast efni sem þú getur skorið, bætt við og skissað á; hverju PartCraft lagfærir á leiðinni og hverju það getur ekki lagfært.
keywords: stl, obj, 3mf, möskvi, möskvi í fast efni, breyta möskva, skönnun, vatnsþéttur, lagfæring, göt, bil, einingar, upp-ás, innfluttur líkami, flatir fletir
from: 7b948471
---

PartCraft opnar STL-, OBJ- og 3MF-möskva sem **fasta líkama**. Líkaminn virkar eins og hvert annað fast efni: skera hann, bæta við hann, bora í hann, gera mynstur úr honum, nota hann í samsetningu eða fyrir vinnslu, og skissa á flata fleti hans. Hann hefur enga sögu sjálfur: möskvi er aðeins þríhyrningar, þannig að stærðum hans er ekki hægt að breyta, aðeins bæta við hann eða skera úr honum.

## Opna möskva

1. Veldu {{ui:Open}} eða ýttu á {{key:Mod+O}}, og veldu `.stl`-, `.obj`- eða `.3mf`-skrána. Eða slepptu henni á þrívíddarsýnina.
2. PartCraft les hana, lagfærir það sem það getur örugglega og sýnir það sem það fann: hversu marga þríhyrninga og punkta, hverja lagfæringu, og hvort möskvinn nú **lokast**.
3. Athugaðu **Einingar í skránni** og **Upp í skránni**. STL og OBJ segja ekki til um einingar sínar, þannig að millimetrar eru ágiskunin; 3MF-skrá segir sjálf til um það. Línan **Stærð hér** sýnir stærð líkamans með valinu þínu, þannig að hluti sem kemur 25.4 sinnum of lítill er auðvelt að sjá (hann var í tommum).
4. Ef hluturinn á skjánum er tómur, veldu {{ui:Open as a body}}. Ef hann hefur þegar þætti, veldu **Nota það til** (bæta við hlutinn, skera úr honum, eða halda aðeins sköruninni), og síðan {{ui:Add to this part}}, eða {{ui:New part}} til að byrja upp á nýtt með möskvanum.

Þáttur **Imported1** birtist í sögunni. Stöðustikan segir til dæmis: „bracket.stl er fast líkami: 15200.512 mm³, 14 flatir fletir til að skissa á.“

## Það sem PartCraft lagfærir

| Lagfæring | Hvað það þýðir |
|---|---|
| Tvöföld horn sameinuð | STL endurtekur hvert horn fyrir hvern þríhyrning sinn; þau eru sameinuð í einn punkt |
| Þríhyrningar án flatarmáls fjarlægðir | Mjóir þríhyrningar sem horn liggja á einni línu |
| Tvöfaldir þríhyrningar fjarlægðir | Þríhyrningur skrifaður tvisvar er geymdur einu sinni; tveir sem snúa hvor á móti öðrum (innveggur) eru báðir fjarlægðir |
| Lítil bil lokuð | Jaðrar sem næstum mætast (innan þúsundasta af stærð hlutarins) eru sameinaðir |
| Göt fyllt | Op sem jaðar liggur flatur er fyllt hver sem stærðin er; skekkt op aðeins þegar það er lítið |
| Þríhyrningar snúnir út á við | Þríhyrningar sem snúa vitlaust eru snúnir til samræmis við nágranna sína, og allt yfirborðið snýr út |

## Þegar möskvi lokast ekki

Fast efni þarf yfirborð án opa. Þegar PartCraft getur ekki lokað því segir glugginn hversu mörg op og opnir jaðrar eru eftir, og enginn líkami er til að bæta við. Lokaðu opunum í forritinu sem bjó til möskvann, eða fluttu hann út aftur sem lokaðan (vatnsþéttan) möskva, og opnaðu hann aftur.

PartCraft lætur op vera þegar fylling þess gæti giskað vitlaust: stórt skekkt gat, eða tvö op í sama plani (hringlaga flötur sem vantar, þar sem fylling hvers jaðars myndi hylja gatið í miðjunni). Jaðar sem deilt er af fleiri en tveimur þríhyrningum er líka tilkynntur: slíkt yfirborð hefur ekki eina skýra innri hlið.

## Skissa á flata fletina

Flatir fletir úr mörgum þríhyrningum eru sameinaðir í einn **flatan flöt** hver, þannig að skissa geti legið á þeim: smelltu á flötinn og veldu {{ui:Sketch on this face}}. Flötur sem er skorinn eða bætt við síðar helst flötur. Kringlótt svæði (gat, ávala) haldast þríhyrningar: þau eru ekki fletir sem þú getur valið, og sýnin dregur útlínu þeirra út frá horninu á milli þríhyrninga.

## Breyta því síðar

Veldu **Imported1** til að sjá skrána sem það kom úr, hversu marga þríhyrninga það hefur og hvað var lagfært. **Einingar í skránni**, **Upp í skránni** og **Nota það til** má breyta þar; hver breyting er eitt skref í afturköllun.

## Hvar það er geymt

Lagfærði möskvinn er geymdur **inni í** `.partcraft.json`-skránni, þannig að þú þarft ekki möskvaskrána aftur. Hlutaskrá með möskvalíkama er útgáfa 5: eldri PartCraft hafnar henni eftir útgáfunúmeri. Möskvi með 200.000 þríhyrningum bætir við um 1.2 MB.

## Takmörk

- Mest 3 milljónir þríhyrninga og 200 MB í einni skrá.
- Líkami úr möskva er smíðaður af möskvakjarnanum. Með nákvæma kjarnanum kveiktum (aðeins forritarar) segir hann það og er ekki smíðaður.
- Efni OBJ, áferðarhnit og frjálsir ferlar eru skilin eftir; litir, efni og stuðningshlutir 3MF eru skildir eftir (glugginn segir hversu mörgum hlutum var sleppt).
- Líkaminn er jafn fínn og möskvinn: gróf STL gefur grófa kringlótta fleti. Göt sem þú borar í hann eru jafn kringlótt og þínir eigin þættir.
