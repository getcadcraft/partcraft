---
title: Raða flötum hlutum á plötur
summary: Raðaðu flötum hlutum á plötur eða rúllu með sem minnstum afgangi eins og PartCraft getur fundið, aldrei nær hver öðrum en það bil sem þú gefur upp, og vistaðu skipulagið sem DXF fyrir leysi, plasma, vatnsskurð eða fræsara.
keywords: raðning, raða, blað, plata, rúlla, leysir, plasma, vatnsskurður, fræsari, skurður, nýting, efnisnotkun, afgangur, úrgangur, bil, skurðarbreidd, kornastefna, valsstefna, dxf, flatt snið, útlínur
from: 8dcce1a6
---

**Raðning** setur marga flata hluti á blað þannig að sem minnst efni verði eftir. PartCraft raðar hlutunum einum í einu, hverjum þar sem styttst er notuð lengd blaðsins, reynir nokkrar raðanir og lýkur á nokkrum sekúndum, og geymir þá bestu. Hlutar geta legið í götum hvers annars og í holrúmi á L eða U.

## Opna hana

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} opnar hana með flötu sniði hlutarins eða — í samsetningu — með flötu sniði sérhvers plötuhluta, eins mörg og eintökin eru.
- Á plötuhluta: {{ui:Lay flat}} og síðan {{ui:Nest on sheets…}} undir flata sniðinu.
- {{ui:Add outlines from a DXF…}} bætir öllum lokuðum útlínum í DXF-skrá við sem hlutum: teikningu úr CadCraft vistaðri sem DXF, eða skrá úr hugbúnaði skurðarvélarinnar. Útlína innan annarrar er gat í henni. Línur og bogar sem tengjast enda við enda teljast ein útlína. Skrár í tommum, sentímetrum eða metrum eru breyttar í millimetra.

:::note
Að fletja út plötuvinnu þarf nákvæman rúmfræðikjarna (sjá [Plötuvinna](topic:sheet-metal)). Útlínur úr DXF-skrá virka alltaf.
:::

## Stilla

Fyrir hvern hlut gefur þú upp **hversu marga** þú þarft og **kornastefnu** hans: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} fyrir burstað eða valsað blað sem þarf að liggja í eina átt, eða {{ui:Across the sheet}}.

Undir **Blöð**:

- **Lager**: {{ui:Plates}} af ákveðinni lengd og breidd (og hversu margar þú átt; 0 = eins margar og þarf), eða {{ui:A roll}} af ákveðinni breidd, eins löng og þarf.
- **Jaðarbil** er haldið autt við hvern jaðar blaðsins (fyrir klemmur, eða ójafnan jaðar).
- **Bil milli hluta** er minnsta fjarlægð milli tveggja skurðalína: að minnsta kosti skurðarbreidd vélarinnar, auk þess sem efnið krefst.
- **Snúningar**: hornin sem hlutur má snúast í, á 90° fresti sjálfgefið. Færri snúningar keyra hraðar; fleiri geta nýtt blaðið betur.
- **Hlutum má snúa við** leyfir að hlutur sé lagður á hvolf. Slökktu á því fyrir plötuvinnu: flatt snið sem er lagt á hvolf beygist í hina áttina.

Ýttu á {{ui:Nest}}. Forskoðunin sýnir sérhvert blað; upplýsingarnar segja hversu margar plötur (eða hversu mikið af rúllunni) var notað og hversu mikið af efninu hlutirnir taka. Allt sem komst ekki fyrir er nefnt.

## Vista það

{{ui:Save DXF}} skrifar skipulagið sem DXF (R12, millimetrar), eitt blað undir öðru: útlínur blaðanna á laginu SHEET, hlutarnir á PARTS (bogar haldast sem bogar), og nafn hvers hluta á LABELS.

:::tip
Að blanda nokkrum hlutum gefur yfirleitt betri röðun en margar eintök af einum: litlir hlutir fylla bilin milli stórra.
:::

## Skera blöðin (G-kóði)

**Flytja út › Raðað blöð í G-kóða** les raðaða DXF-skrá (þessa, eða blöð Cabinets-viðbótarinnar í CadCraft) og býr til eitt forrit fyrir hvert blað í gegnum þann eftirvinnsluhnykil (post) sem þú velur: göt og úrskurðir fyrst, síðan útlínurnar, þar sem hver skurður er á geisla verkfærisins utan við hlutinn, í gegnum blaðið og 1 mm til viðbótar, með flipum ef þú biður um þá. Listinn yfir eftirvinnsluhnykla er innbyggðu hnykklarnir auk þinna eigin úr Manufacture-rannsókninni. Athugaðu sérhvert forrit í hermi áður en þú keyrir það: borun og holrúm eru ekki gerð.

## Hvað skal athuga

PartCraft athugar sérhvert skipulag aftur á réttu formunum (ekki á netinu sem það leitaði í): engir tveir hlutir nær en bilið, ekkert í jöðrunum. Það skipuleggur ekki skurðinn: innhlaup, skurðarröðin, að skera sameiginlega jaðra einu sinni og að halda eftir afgangsblaðinu er hlutverk hugbúnaðar skurðarvélarinnar. Athugaðu DXF-skrána þar áður en þú sker.
