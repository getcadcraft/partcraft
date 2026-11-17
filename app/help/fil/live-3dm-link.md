---
title: Panatilihing live ang .3dm model
summary: Baguhin ang model sa program na gumawa nito at panoorin ang body ng PartCraft na sumusunod, mula sa Rhino 8 o isang Grasshopper definition, na may mga feature mong binuo muli sa bagong hugis.
keywords: rhino, grasshopper, live link, live connection, 3dm, nurbs, parametric, link, sync, script, push, imported body
from: cf4dc9b2
---

Ipagpatuloy ang paghubog ng model kung saan mo ito minomodelo, at i-machine, i-check at idokumento ito dito. Bawat pagbabago sa kabilang program ay pumapalit sa isang imported body sa PartCraft, at ang mga feature pagkatapos nito ay muling bubuuin sa bagong hugis.

:::note
Kailangan ng link ang **CadCraft Studio** sa parehong computer. Hindi makakakonekta ang browser tab. Walang dumadaan sa internet: nakikipag-usap ang script sa Studio sa sariling address ng computer na ito, gamit ang token.
:::

:::warning
Nasubukan na ang link na ito gamit ang file writer ng script at isang pamalit sa kabilang program, hindi pa sa loob mismo ng Rhino o Grasshopper. Kung may pumalya roon, sabihin sa amin ang sinabi nito.
:::

## Itakda ito

1. Sa Studio, buksan ang PartCraft. Sa {{ui:Mga setting}} › {{ui:PartCraft}} › {{ui:Mga Assistant}}, lagyan ng tsek ang **Payagan ang AI assistant at script na gamitin ang PartCraft**, saka **I-edit**.
2. Sa Studio, piliin ang {{ui:Kumonekta ng assistant}}. Ipinapakita nito ang address at ang token na ipe-paste mo sa ibaba.
3. I-download ang script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Mula sa Rhino

1. I-run ang `cadcraft_link.py` sa script editor ng Rhino (Python 3 sa Rhino 8).
2. Sa unang pagkakataon, i-paste ang address at ang token. Naka-save ang mga ito sa `.cadcraft-link.json` sa home folder mo, hindi kailanman sa model. Gumagawa ang Studio ng bagong token sa bawat pagsisimula nito, kaya magtatanong ulit ang script sa mga oras na iyon.

Patakbuhin ulit ang script para huminto.

## Mula sa Grasshopper

I-run muna ang script nang isang beses sa Rhino, para ma-save ang address at token.

1. Magdagdag ng Script component (Python 3) at i-paste ang buong `cadcraft_link.py` dito.
2. Bigyan ito ng mga input na ito: `G` (ang geometry, na may list access), `N` (pangalan, opsyonal), `On` (boolean toggle), at `Target` (opsyonal: `model` o `part`, kung parehong bukas ang dalawang app).
3. Itakda ang `On` sa true.

Sa bawat solve, ipinapadala ang `G` at pinapalitan ang ipinadala ng component noong huli.

## Paano ito gumagana dito

- **Isang body.** Ang lahat ng nakikita sa model ay nagiging isang imported feature, gaya ng kapag [nagbukas ka ng .3dm file](topic:open-3dm-files).
- **Dapat magsara ito.** Pinupunan ng PartCraft ang maliliit na hole at flat na bukana, at sinasabihan ang kabilang program kung ilan ang mga ito. Kung hindi pa rin nagsasara ang model, pinananatili ng PartCraft ang body na mayroon ito, at sinasabi ito ng status bar. Ina-update nito ang body sa susunod na pagbabagong magsasara.
- **Tapusin ang ginagawa mo.** Sa sketch o drawing, tinatanggihan ang mga update at sinusubukan ulit; darating ang mga ito kapag bumalik ka na sa model.
- **Undo.** Ang mga update na magkakasunod sa loob ng dalawang segundo ay nasa iisang undo step.
- **Save.** Pinananatili ng piyesa file ang link. I-run ulit ang script pagkatapos mo itong buksan muli, at mag-u-update ang parehong feature.

**Isang direksyon lang.** Ang mga pagbabago rito ay hindi bumabalik sa kabilang program.

## Kung may mali

- **"Walang ModelCraft o PartCraft window ang pumapayag":** gawin ang hakbang 1 ng setup.
- **"Tinanggihan ng Studio ang token":** nag-restart ang Studio. Kopyahin ang bagong token at i-run ulit ang script. Para sa Grasshopper, i-run muna ito sa Rhino.
- **"Hindi maabot ang CadCraft Studio":** hindi tumatakbo ang Studio, o nagbago na ang address.
