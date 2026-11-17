---
title: Stillingar og hönnunartöflur
summary: Geymdu nokkrar stærðir og útgáfur af sama hlutanum sem nefndar stillingar vistaðar í hlutaskránni, með eiginleikum kveiktum eða slökktum í hverri, skiptu á milli þeirra með einum smelli, fluttu þær inn eða út sem CSV-hönnunartöflu, eða smíðaðu þær allar af skipanalínunni.
keywords: hönnunartafla, stillingar, stærðir, hlutafjölskylda, csv, töflureiknir, afbrigði, töfludrifið, bæla, bæld, slökkva á eiginleika, valkostir, með eða án, stillari
from: 17249afb
---

**Stilling** er ein stærð hlutans: nefnt safn gilda fyrir breytur hans. Hlutinn geymir stillingar sínar í eigin skrá, þannig að þær fylgja honum. **Hönnunartafla** er það sama og CSV-skrá, ein röð fyrir hverja stillingu.

Stillingar setja **breytur**, þannig að bættu þeim við fyrst (sjá [Stýrðu hluta með breytum](topic:parameters)). Stilling geymir þær breytur sem eru venjulegar tölur; breytur sem eru reiknaðar út frá öðrum (eins og `area = w * d`) fylgja sjálfkrafa.

## Vistaðu stillingu

1. Á flipanum {{ui:Breytur}} stillirðu breyturnar fyrir eina stærð hlutans.
2. Undir **Stillingar** skrifarðu nafn (til dæmis `Stórt`) og ýtir á {{ui:Vista núverandi gildi}} eða {{key:Enter}}.

Nýja stillingin er merkt **virk**. Breyttu breytu síðar og hún segir **virk, breytt síðan**, svo þú veist að hluturinn passar ekki lengur við hana.

## Skiptu, uppfærðu, endurnefndu, eyddu

- {{ui:Nota}} setur breyturnar á gildi stillingarinnar og endurbyggir hlutinn.
- {{ui:Uppfæra}} vistar núverandi gildi í stillinguna.
- Til að endurnefna hana, skrifaðu nýja nafnið í reitinn hennar og ýttu á {{key:Enter}}.
- {{ui:Eyða}} fjarlægir stillinguna. Breyturnar halda gildunum sínum.

Hvert þessara er eitt skref: {{key:Mod+Z}} fer til baka. Ef þú endurnefnir breytu fylgja allar stillingar nýja heitinu; ef þú eyðir einni, dettur hún út úr þeim.

## Kveiktu og slökktu á eiginleikum í stillingu

Stilling geymir líka hvaða eiginleikar eru slökktir, þannig að einn hluti getur haft útgáfur **með** og **án** einhvers: festigöt, skásnið, upphækkun.

1. Slökktu á eiginleikanum: smelltu á hann í sögunni, og síðan á {{ui:Bæla}} í {{ui:Eiginleikar}}.
2. Vistaðu stillinguna eins og venjulega, til dæmis `Engin göt`. Röð hennar telur upp það sem hún slekkur á.
3. Kveiktu aftur á eiginleikanum ({{ui:Hætta við bælingu}}) og vistaðu aðra stillingu, til dæmis `Með götum`.

Um leið og einhver stilling hefur slökkt á eiginleika, slekkur það að nota stillingu á eiginleikum hennar og kveikir á öllum öðrum eiginleikum, ásamt gildum breytanna, í einu skrefi. Stilling sem var vistuð áður en eiginleikar voru slökktir í neinni af þeim telst „allt á“. {{ui:Uppfæra}} vistar eiginleikana eins og þeir eru núna, ásamt gildunum.

Hluti þar sem stillingar slökkva á eiginleikum er vistaður sem nýrri skráarútgáfa: eldri PartCraft segir að skráin sé frá nýrri útgáfu í stað þess að opna hana án þeirra.

:::note
CSV-hönnunartaflan geymir aðeins gildi breytna. Innflutningur töflu yfir stillingu breytir gildum hennar og heldur eiginleikunum sem hún slekkur á; `--table`-skipunin á skipanalínunni smíðar aðeins gildin.
:::

Hlutaskráin er vistuð með stillingunum og þeirri sem var virk. Hlutinn opnast með þeim gildum sem hann var vistaður með.

## Fluttu hönnunartöflu inn eða út

Hönnunartafla er CSV-skrá með dálk fyrir hverja breytu og röð fyrir hverja stillingu:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Fyrsti dálkurinn má heita `name`, `config` eða `configuration`; allir aðrir dálkar verða að vera heiti breytu hlutans. Reitirnir eru tölur, með einingum ef vill (`8in`). Tómur reitur sleppir þeirri breytu úr röðinni.

- {{ui:Flytja inn CSV}} bætir hverri röð við sem stillingu. Röð með heiti á þegar til stillingu kemur í stað hennar. Innflutningur er eitt skref.
- {{ui:Flytja út CSV}} skrifar stillingarnar út. Þegar engar eru til skrifar það eina röð með núverandi gildum, sem upphafspunkt fyrir töflureikni.

Stillingarheiti sem töflureiknir læsi sem formúlu (byrjar á `=`, `+`, `-` eða `@`) er skrifað með `'` fremst.

## Allar stærðir í einu

{{ui:Útfærslupakki…}} undir **Stillingar** smíðar allar stillingar, eða valdar fáar, sem STEP, IFC, DWG og forskoðun í einni zip-skrá, með töflu yfir breytur þeirra: sjá [Gerðu útfærslupakka úr stillingunum þínum](topic:variant-pack).

Skipanalínutólið smíðar eina skrá fyrir hverja röð í CSV-hönnunartöflu:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Flyttu stillingarnar fyrst út sem CSV, og sendu síðan þá skrá með `--table`. Sjá [Skriftur og skipanalínan](topic:scripts-and-cli). Hlutur vistaður sem skrift geymir stillingar sínar í `configs json …`-línu.
