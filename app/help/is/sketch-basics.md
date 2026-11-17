---
title: Teiknaðu þína fyrstu skissu
summary: Opnaðu skissu á grunnfleti eða sléttum fleti, teiknaðu línur, rétthyrninga, hringi, boga, punkta og miðlínur, ávalaðu horn, veldu, dragðu og eyddu.
keywords: skissa, teikna, lína, rétthyrningur, hringur, bogi, punktur, miðlína, hjálparrúmfræði, ávala, skissuávali, ávala horn, smella, velja, gluggi, draga, snið
from: 28be7436
---

Sérhver fastur hlutur byrjar sem skissa: flöt teikning á grunnfleti. Þessi leiðsögn fjallar um teikniverkfærin. Að festa skissuna með tengslum og málsetningum er í [Skilgreindu skissu til fulls](topic:relations-dimensions).

## Byrjaðu skissu

Þú getur skissað á grunnfleti eða á hvaða sléttum fleti hlutarins sem er.

1. Veldu hvar skissa skal:
   - grunnflöt: smelltu á **Framflötur**, **Efriflötur** eða **Hægri flötur** í sögunni, eða smelltu á fletinn í sýninni;
   - sléttan flöt: smelltu á flötinn í sýninni. Allur flöturinn lýsist upp.
2. Veldu {{ui:Skissa}} í verkfæraslánni eða ýttu á {{key:S}}. (Ef flötur er valinn er einnig hægt að velja {{ui:Skissa á þessum fleti}} í hægra spjaldinu; ef grunnflötur er valinn, {{ui:Skissa á því}}.)

Sýnin snýr beint að fletinum, skissuverkfærin birtast í verkfæraslánni og {{ui:Lína}}-verkfærið er tilbúið. Ef þú ýtir á {{ui:Skissa}} án þess að velja neitt birtast grunnfletirnir og stöðustikan segir: „Smelltu á grunnflöt eða sléttan flöt til að skissa á. {{key:Esc}} hættir.“

:::note
Bogadreginn flötur getur ekki haldið skissu: „Flöturinn er bogadreginn. Veldu sléttan flöt eða grunnflöt til að skissa á.“
:::

**Skissa á fleti fylgir þeim fleti.** Ef flöturinn varð til við brún skissu eða enda útdráttar færist nýja skissan þegar eiginleikinn breytist (dýpri úrtaka tekur skissuna á botni sínum með sér). Ef spjaldið segir að flöturinn sé „Fastur þar sem valið var“, helst skissan þar sem flöturinn er núna.

## Teikniverkfærin

Hvert verkfæri hefur hnapp í verkfæraslánni og flýtilykil. Veldu sama hnapp aftur, ýttu á {{key:S}} eða ýttu á {{key:Esc}} til að fara aftur í {{ui:Velja}}.

| Verkfæri | Lykill | Hvernig á að teikna |
|---|---|---|
| {{ui:Lína}} | {{key:L}} | Smelltu á upphafspunktinn og síðan á hvern næsta punkt. Línur tengjast enda við enda. Ljúktu keðjunni með {{key:Esc}}, {{key:Enter}}, hægrismelli eða tvísmelli. Smellur á punkt sem fyrir er lýkur henni líka |
| {{ui:Rétthyrningur}} | {{key:R}} | Smelltu á eitt horn og síðan á hið gagnstæða horn. Þú færð fjórar línur tengdar í hornunum, tvær láréttar og tvær lóðréttar |
| {{ui:Hringur}} | {{key:C}} | Smelltu á miðjuna og síðan á punkt á hringnum |
| {{ui:Bogi}} | {{key:A}} | Smelltu á miðjuna, síðan á upphafið og síðan á endann. Bogi fer í þá átt sem þú hreyfir bendilinn um miðjuna |
| {{ui:Punktur}} | {{key:P}} | Smelltu. Punktur einn sér merkir miðju gats fyrir {{ui:Gat}} |
| {{ui:Miðlína}} | {{key:N}} | Eins og lína, einn hluti í einu. Teiknuð strikuð; þetta er hjálparrúmfræði, notuð sem snúningsás eða viðmið |
| {{ui:Ávala}} | {{key:F}} | Smelltu á horn þar sem tvær línur mætast, sláðu inn radíus og ýttu á {{key:Enter}} |
| {{ui:Sveigð lína}} | {{key:B}} | Smelltu á punktana sem ferillinn fer í gegnum; {{key:Enter}} lýkur, smellur á fyrsta punktinn lokar henni. Sjá [Sveigðar línur, stytting, jöfnfæra og önnur skissuverkfæri](topic:sketch-tools) |
| {{ui:Stytta}} | {{key:T}} | Smelltu á þann hluta ferils sem á að fjarlægja, upp að næstu skurðpunktum |
| {{ui:Málsetning}} | {{key:D}} | Sjá [Skilgreindu skissu til fulls](topic:relations-dimensions) |

Meðan þú teiknar sýnir lítill reitur við bendilinn lengdina, stærðina, þvermálið eða radíusinn.

### Sláðu inn stærðina meðan þú teiknar

Eftir fyrsta smell á línu, rétthyrning, hring eða boga geturðu slegið inn stærðina í stað þess að smella hana. Ef þú slærð inn tölu opnast reiturinn við bendilinn með henni í:

| Verkfæri | Reitir ({{key:Tab}} færir í þann næsta) | Hvað gerist við {{key:Enter}} |
|---|---|---|
| {{ui:Lína}}, {{ui:Miðlína}} | Lengd, síðan Horn (°) frá X-ás skissunnar | Línan er teiknuð þessi löng, í átt að bendlinum eða í slegnu horni; keðjan heldur áfram frá endanum |
| {{ui:Rétthyrningur}} | Breidd, síðan Hæð | Rétthyrningurinn er teiknaður frá fyrsta horninu í átt að bendlinum; stærð sem þú slóst ekki inn kemur frá bendlinum |
| {{ui:Hringur}} | Þvermál | Hringurinn er teiknaður með því þvermáli |
| {{ui:Bogi}} | Radíus eftir miðjuna, síðan Hornið (°) eftir upphafið | Upphafið er í þeirri fjarlægð frá miðjunni; síðan fer bogin þá vegalengd um, í þá átt sem þú hreyfðir bendilinn |

Sérhver stærð sem þú slóst inn verður að **drífandi málsetningu** í sama skrefi, þannig að skissan kemur fullmáluð út: {{key:Mod+Z}} tekur burt lögunina og málsetningar hennar saman. Ef þú smellir í stað þess að ýta á {{key:Enter}} heldur það sem þú slóst inn og tekur afganginn úr smellinum. {{key:Esc}} lokar reitnum og fer aftur í bendilinn.

Slökktu á þessu í {{ui:Stillingar}} › {{ui:PartCraft}} › **Málsetja meðan teiknað er** ef þú vilt aðeins teikna með smellum. Sjá [Stillingar PartCraft](topic:settings).

{{ui:Meira}}, aftast í skissuverkfærunum, geymir sveigju með stjórnpunktum, {{ui:Framlengja}}, {{ui:Jafnfæra}}, {{ui:Spegling}}, {{ui:Marghyrningur}}, {{ui:Rifa}}, skissumynstur og {{ui:Varpa brún}}: sjá [Sveigðar línur, stytting, jöfnfæra og önnur skissuverkfæri](topic:sketch-tools).

### Smellifesting

Smellifesting bætir tengslum við fyrir þig, þannig að skissan helst tengd þegar hún hreyfist:

- Á **endapunkti eða upphafi** birtist lítill ferningur. Nýi punkturinn fellur saman við hann.
- Á **línu, hring eða boga** birtist lítill kross. Nýi punkturinn er settur á ferilinn.
- Lína innan 3 gráða frá láréttri eða lóðréttri smellur í hana og fær lárétt eða lóðrétt tengsl. Merkið sýnir „H“ eða „V“.

Til að forðast smellifestingu skaltu auka aðdrátt þannig að þú smellir lengra frá punktinum eða ferlinum.

## Ávalaðu horn

1. Ýttu á {{key:F}} eða veldu {{ui:Ávala}}.
2. Smelltu á hornpunktinn þar sem tvær línur mætast.
3. Reitur opnast með uppástungu um radíus. Sláðu inn radíusinn og ýttu á {{key:Enter}}.

Báðar línurnar eru styttar og tengdar með snertiboga með radíusmálsetningu. Skilaboð sem þú gætir séð: „Ávala þarf horn þar sem nákvæmlega tvær línur mætast.“ og „Þessi radíus er of stór fyrir þessar línur.“

:::tip
Skissuávali ávalar horn á sniðinu, þannig að útdrátturinn fær ávalar lóðréttar brúnir. Til að ávala brúnir sjálfs fasta hlutarins (til dæmis efri brúnir plötu) skaltu nota eiginleikann {{ui:Ávala}} á hlutnum: sjá [Ávala, skáskera og holgera](topic:fillet-chamfer-shell). Í skissu er {{ui:Ávala}} í verkfæraslánni skissuverkfærið; á hlutnum er það eiginleiki.
:::

## Hjálparrúmfræði

Hjálparlínur, hringir og bogar eru strikaðir og gráir. Þær leiða skissuna en eru ekki hluti af sniðinu sem er dregið út eða snúið.

1. Veldu línurnar, hringina eða bogana.
2. Ýttu á {{key:Q}} eða veldu {{ui:Hjálparrúmfræði}}. Ýttu aftur til að skipta þeim aftur.

## Velja, draga og eyða

Ýttu á {{key:S}} (eða {{key:Esc}} þar til ekkert verkfæri er virkt) fyrir {{ui:Velja}}.

- Smelltu á punkt, línu, hring, boga, tengslatákn eða málsetningu til að velja hann. {{key:Shift}}+smellur bætir við valið eða tekur úr því. Á Windows og Linux gerir {{key:Ctrl}}+smellur það sama; á Mac, ⌘+smellur.
- Dragðu á autt svæði til að teikna glugga: allt sem er alveg innan hans er valið.
- Dragðu punkt eða línu til að færa hana. Lausnarinn heldur hverju tengslum og málsetningu meðan á hreyfingu stendur, þannig að aðeins frjáls rúmfræði hreyfist. Dragðu brún hrings til að breyta radíusnum.
- Dragðu tölu málsetningar til að færa merkið.
- Ýttu á {{key:Delete}} eða {{key:Backspace}}, eða veldu {{ui:Eyða}} í hægra spjaldinu, til að eyða valinu. Þegar rúmfræði er eytt eyðast tengslin á henni líka.

## Aðdráttur og hliðrun í skissu

- Snúðu hjólinu til að auka eða minnka aðdrátt við bendilinn.
- Dragðu með miðju- eða hægri hnappi til að hliðra.
- {{ui:Passa}} í verkfæraslánni eða hægra spjaldinu passar skissuna í sýnina. Í skissu er {{key:F}}-takkinn Ávala-verkfærið, ekki Passa.

## Loka skissunni

Veldu {{ui:Hætta}} í verkfæraslánni eða {{ui:Hætta í skissu}} í hægra spjaldinu, eða ýttu á {{key:Esc}} þar til skissan lokast. Hver {{key:Esc}} hættir fyrst við það sem er í gangi, fer síðan í {{ui:Velja}}, afvelur síðan, og sá næsti lokar skissunni.

Skissan helst valin, þannig að næsti {{ui:Útdráttur}} eða {{ui:Snúningur}} notar hana.

## Hvað gerir gott snið

{{ui:Útdráttur}} og {{ui:Snúningur}} nota **sérhverja lokaða lykkju** úr heilum (ekki hjálpar-) línum, hringjum, bogum og sveigðum línum skissunnar. Lykkjur innan lykkja verða að götum.

- Sérhver endi verður að mætast nákvæmlega einum öðrum enda. „Sniðið er opið: endi við (12.5, 40) er ekki tengdur neinu.“ nefnir staðinn.
- Engir þrír endar mega mætast í einum punkti: „Sniðið greinist við (0, 20): fleiri en tveir endar mætast þar.“
- Punktar og hjálparrúmfræði eru hunsuð af sniðinu.

Næst: [Skilgreindu skissu til fulls með tengslum og málsetningum](topic:relations-dimensions).

## Skissa úr ljósmynd

**Eiginleikar › Meira › Skissa úr ljósmynd…** (eða skissuhópurinn á eiginleikatré-slánni) rekur mynd af flötum hlut á sléttum grunni — útlínur hans og göt — eða pennateikningu yfir í skissu úr línum, bogum og hringjum. Gefðu upp eina lengd (breiddina, hæðina eða lengstu hliðina) svo skissan fái rétta stærð, athugaðu það sem fannst í forskoðuninni og veldu **Búa til skissuna**; hún getur einnig dregið hana út í sama afturköllunarskrefi. Hún er rakin á þessari tölvu. Ávalir horna koma til baka innan um 5 %, smáatriði upp á einn eða tvo pixla glatast, og ljósmynd tekin á skábraut eða með skuggum yfir hlutnum er ekki rétt af: taktu mynd af hlutnum beint framan frá, í jöfnu ljósi.
