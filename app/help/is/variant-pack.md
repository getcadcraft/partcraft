---
title: Gera útfærslupakka úr útfærslum þínum
summary: Byggja allar útfærslur hlutar, eða valdar fáar, í einu lagi sem STEP, IFC, DWG og forskoðun hverja, með töflu yfir breytur þeirra og hlutann sem eitt safnatriði með útfærslum sínum.
keywords: útfærslupakki, útfærslur, útfærsluvalkostir, fjölskylda hluta, hópútflutningur, allar stærðir, step, ifc, dwg, forskoðun, tafla, csv, json, safn, stillir, vörulisti, safnliður json
from: 9a6db99f
---

## Hvað þú gerir

Afhentu **allar stærðir hlutar í einu**: eina STEP-, IFC- og DWG-skrá og mynd fyrir hverja útfærslu, töflu sem segir hvað hver þeirra er, og safnlið sem setur þær allar á eina síðu.

Þú þarft fyrst hlut með **útfærslum** (sjá [Útfærslur og hönnunartöflur](topic:design-tables)). Útfærsla sem slekkur á eiginleika, eins og plata með og án gata, verður sín eigin útfærsla.

## Skref

1. Opnaðu hlutinn. Á flipanum {{ui:Breytur}} finndu **Útfærslur**.
2. Smelltu á {{ui:Útfærslupakki…}}.
3. Hakaðu við útfærslurnar sem á að byggja (allar eru hakaðar) og skrárnar sem á að skrifa: STEP, IFC, DWG, forskoðun og safnliðinn.
4. Smelltu á {{ui:Búa til pakkann}}. Stöðulínan telur útfærslurnar þegar þær eru byggðar; hlutinn þinn breytist ekki.
5. Ein zip-skrá sækist: `<part> variants.zip`.

## Hvað er í zip-skránni

| Skrá | Hvað hún er |
|---|---|
| `<name>.step` | Útfærslan sem STEP-fasthluti. |
| `<name>.ifc` | IFC4, eitt frumefni með byggða fasthlutanum og breytur hlutans sem eiginleika; gildið er útfærslunnar eigið. |
| `<name>.dwg` | Fram-, topp-, hægri- og jafnásýn sem teikniblað í fullri stærð. |
| `<name>.svg` | Jafnásmynd af henni sem línumynd. |
| `variants.csv`, `variants.json` | Breytutaflan: auðkenni, heiti og gildi hverrar breytu fyrir hverja útfærslu, eiginleikarnir sem hún slekkur á, skrár hennar, rúmmál og stærð. |
| `<part>.item.json` | Hlutinn sem eitt safnatriði með útfærslum sínum (sjá hér að neðan). |
| `README.txt` | Hvað var búið til, athugasemdirnar hér að neðan og það sem ekki var byggt. |

Skrárnar fá nafn eftir útfærslunni. Útfærsla sem tekst ekki að byggja (eiginleiki sem ekki er hægt að gera með þessum gildum) er sleppt úr skrám og töflunni, skráð í `README.txt` og í skilaboðum eftir að zip-skráin er vistuð; hinar eru samt skrifaðar.

## Gott að vita

- **STEP** er nákvæmt þegar nákvæmi kjarninn er virkur í útgáfunni þinni. Án hans er STEP facetað (flatir þríhyrningar), og README segir það.
- **DWG** er teikniblaðið, ekki þrívíddarlíkan. Línurnar koma úr möskvanum, svo bogin brún er margar stuttar línur.
- **Safnliðurinn** geymir einn fasthluta og eitt grunnflatarmál fyrir hverja útfærslu, í eigin ásum safnsins: Z upp, framhliðin í −Y, og innsetningarpunkturinn á miðri bakhliðinni neðst. Grunnmyndin er rétthyrningur hverrar útfærslu utan um hana. Safnliður er takmarkaður við 8 MB, svo mjög þung útfærsla verður kassi af sinni stærð og README segir hversu margar.
- Virka útfærsla hlutans er sjálfgefin útfærsla safnliðarins.
- Tengipunktar (tengipunktar fyrir pípur og loftstokka) eru ekki stilltir úr PartCraft.

## Setja útfærslurnar á síðu safnsins

Hladdu upp `<part>.item.json` undir **Safn › Hlaða upp** á vefsvæðinu. Veldu flokk, leyfi og heimildarlínu þína, og hann verður safnliður með útfærslum sínum. Í BimCraft spyr staðsetning hans hvaða útfærslu á að nota, og **Skipta** býður hinum. Síðan þar sem gestir velja valkosti, sjá þrívíddina og sækja útfærslu er í bili **forskoðun fyrir starfsfólk**: hún er ekki opin almenningi enn.

## Úr skipanalínunni

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nefnir útfærslurnar, `--formats` tekur hvaða af `step`, `ifc`, `dwg`, `preview`, og `--no-item` sleppir safnliðnum. Hún skrifar möppu, zip-skrá eða hvort tveggja og hættir með kóðann 1 þegar útfærsla gat ekki verið byggð. Sjá [Skriftur og skipanalínan](topic:scripts-and-cli).
