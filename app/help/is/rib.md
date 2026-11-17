---
title: Stoðrif og hornstyrkingar
summary: Styrktu hlut með rifi sem er teiknað sem ein lína: það fyllir svæðið frá línunni að veggjunum, með ákveðinni þykkt þvert á skissuplanið, þeim megin sem þú velur.
keywords: rif, hornstyrking, vefur, stífa, stoð, festing, hornstuðningur, þunnur veggur, styrkja
from: 5c218881
---

:::note
**Ekki byggt enn í þessari útgáfu.** Rif þarf nákvæman rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki: hún byggir alla hluti með möskvakjarnanum. [Hvað er ekki byggt enn](topic:not-built-yet) segir hvað á að gera í staðinn. Restin af þessari síðu lýsir því eins og það virkar með nákvæmum kjarna.
:::

Eitt **rif** (eða hornstyrking) er þunnur veggur sem styrkir hlut, eins og þríhyrningurinn inni í horni L-festingar. Þú teiknar aðeins frjálsu brúnina: PartCraft fyllir bilið á milli þeirrar línu og veggjanna. Það þarf **nákvæma kjarnann** (sjá [Möskvakjarninn](topic:solid-kernels)).

## Bæta við rifi

1. Búðu til plan í miðjunni þar sem rifið á að vera (fyrir L-festingu 40 djúpa, plan 20 framan við skissu hennar: sjá [Viðmiðunarplön, ásar og punktar](topic:reference-geometry)).
2. Skissaðu á það **eina línu** frá vegg til veggs, eða nokkrar línur enda við enda fyrir bogna rifbrún. Línan má stoppa stutt frá veggjunum: endar hennar eru framlengdir þar til þeir mæta þeim.
3. Veldu skissuna og veldu {{ui:Meira}} › {{ui:Rif}}.

Rifið fyllir frá línunni að veggjunum þeim megin sem snýr að miðju hlutarins, þannig að hornstyrking lendir í innra horninu. Ef sú hlið er opin og hin lokuð snýr PartCraft henni við og segir þér það.

## Stillingar

- **Þykkt (mm)** er þykkt rifsins þvert á skissuplanið. Hún getur verið stjórnað af breytu.
- **Þykkt** (valið fyrir neðan): **Miðjað á skissuplanið**, **Fyrir framan planið** (eftir normali þess) eða **Aftan við planið**.
- **Snúa við** fyllir hina hlið línunnar.

## Skilaboð

- **Á þessari hlið mætir brún rifsins aldrei hlutnum**: ekkert lokast í rýminu þeim megin. Hakaðu við eða afhakaðu **Snúa við**, eða færðu línuna þannig að veggir takmarki hana.
- **Rif þarf eina opna keðju af línum í skissu sinni**: skissan hefur lokaða lögun, boga eða splínu, eða línur sem tengjast ekki enda við enda.
- **Brún rifsins liggur inni í hlutnum á þeim stað**: línan liggur inni í fasta hlutanum; teiknaðu hana í opna rýminu milli veggjanna.
