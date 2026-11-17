---
title: Stýrðu hluta með breytum
summary: Nefndu stærðirnar sem skipta máli (breidd, þykkt, boltastærð), tengdu hvaða númer þáttar eða mál í skissu sem er við þær með =, og breyttu öllum hlutanum úr einni töflu.
keywords: breytur, hvar notað, notað af, alþjóðlegar breytur, jöfnur, hönnunarásetning, stýrimál, tenging, tjáning, formúla, nefna mál, tengd gildi
from: 58c646ea
---

Breyta er nefnd tala, til dæmis `width = 120` eða `margin = bolt * 1.5`. Tengdu dýpt, þvermál gats, fjölda mynsturs eða mál í skissu við hana, og breyting á breytunni breytir þeim öllum í einu skrefi. Þannig geymir þú hönnunarásetninguna í hlutanum í stað þess að geyma hana í höfðinu á þér.

## Bæta við breytum

1. Í hægra spjaldinu, smelltu á {{ui:Parameters}}-flipann.
2. Undir **Breytur** sláðu inn heiti í reitinn „heiti“, til dæmis `width`.
3. Sláðu inn gildið í næsta reit, til dæmis `120`, og ýttu á {{key:Enter}} (eða smelltu á {{ui:Add}}).

Gildi getur verið tala eða tjáning af öðrum breytum: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Dálkurinn **Gildi** sýnir hvað það reiknast til. Heiti byrjar á bókstaf eða `_` og hefur aðeins bókstafi, tölustafi og `_`; heiti falla og eininga (`sin`, `mm`, `pi`) eru hafnað, og það sama gildir um lykkju eins og `a = b` með `b = a`.

## Tengdu tölu við breytu

1. Smelltu á þátt í sögunni, til dæmis „Extrude1“. Stillingar hans birtast á {{ui:Properties}}-flipanum.
2. Í talnareit, eins og **Dýpt (mm)**, sláðu inn `=` og tjáningu: `=thick` eða `=width / 4`.
3. Ýttu á {{key:Enter}}.

Reiturinn sýnir nú útkomuna, og **ƒ**-hnappur birtist við hliðina á heitinu hans. Bentu á hann til að sjá jöfnuna. Mál í skissu virka eins, bæði í listanum **Skissumál** á þætti og í málreit opinnar skissu (tvísmelltu á mál, sláðu inn `=width`, ýttu á {{key:Enter}}).

Tölur sem þú getur tengt: dýpt útdráttar, snúningshorn, þvermál gats, dýpt og gagnsökkunarstærðir, fjöldi mynsturs, bil og horn mynsturs, radíus ávölu, fjarlægð skábrúnar, veggþykkt skeljar, öll mál í skissu, og stærðir nýrri þátta (önnur dýpt, halli, skálun, fjarlægð viðmiðunarplans, hallahorn og fleiri).

## Breyta breytu

Á {{ui:Parameters}}-flipanum, sláðu inn nýtt gildi eða tjáningu í dálkinn **Tjáning** og ýttu á {{key:Enter}}. Allt sem er tengt henni breytist og hluturinn endurbyggist í einu skrefi: {{key:Mod+Z}} afturkallar það.

Til að breyta tölu frá hinum endanum, sjá [Jöfnur í báðar áttir](topic:equations-two-way).

## Sjáðu hvar breyta er notuð

Undir hverri breytu á {{ui:Parameters}}-flipanum segir lína hvað notar hana:

- tölurnar sem hún stjórnar, eins og **Extrude1 depth** eða **Sketch1 D2 (distance)**. Smelltu á eina til að velja þáttinn og sýna eiginleika hans;
- tölurnar sem hún stjórnar **í gegnum** aðrar breytur, eins og **Hole1 diameter (through h, d)** þegar `d = h + 2` og `h = w / 2`;
- **breyturnar** sem nota hana í tjáningum sínum, **uppsetningarnar** sem stilla hana, og **skriftirnar** sem lesa hana (sjá [Skrifaðu og keyrðu skriftir](topic:craftscript)).

„Ekki notuð enn.“ þýðir að ekkert notar hana: þú getur eytt henni án þess að spyrja.

:::note
Breytur eru vistaðar í `.partcraft.json`-skránni (sem skráarútgáfa 3). Hluti án breytna er vistaður nákvæmlega eins og áður.
:::

## Aftengja, endurnefna, eyða

- **Aftengja tölu:** smelltu á **ƒ**-hnappinn hennar, eða {{ui:Unlink}} í listanum **Jöfnur**. Hún heldur núverandi gildi og engin breyta breytir henni framar.
- **Endurnefna breytu:** sláðu inn nýtt heiti í **Heiti**-reitinn hennar. Sérhver tjáning sem notar hana er endurskrifuð.
- **Eyða breytu:** smelltu á × á röðinni hennar. Ef eitthvað notar hana spyr PartCraft hvort skrifa eigi núverandi gildi hennar inn í þær tjáningar fyrst.
- **Eyðing þáttar** fjarlægir jöfnur talna hans; stöðustikan segir hverjar.

## Tjáningar

| Skrifaðu | Þýðir |
|---|---|
| `120`, `12.5`, `1e3` | tala (millimetrar, eða gráður fyrir horn) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | lengd í öðrum einingum, breytt í millimetra |
| `30deg`, `0.5rad` | horn, breytt í gráður |
| `+ - * / %` og `^` | reikningur; `^` er veldi, `-2^2` er −4 |
| `sin cos tan asin acos atan atan2` | hornaföll í gráðum |
| `sqrt pow exp ln log abs sign` | önnur föll |
| `ceil floor int round(x, digits) min max` | námundun og mörk |
| `if(test, a, b)` með `< <= > >= == !=` | val: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Heiti eru há- og lágstafanæm: `Width` og `width` eru tvær breytur.

Sjá einnig [Uppsetningar og hönnunartöflur](topic:design-tables) og [Skriftir og skipanalína](topic:scripts-and-cli).
