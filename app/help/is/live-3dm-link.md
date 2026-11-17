---
title: Halda .3dm-líkani lifandi
summary: Breyttu líkani í forritinu sem bjó það til og fylgstu með því að hluti PartCraft fylgi, úr Rhino 8 eða Grasshopper-skilgreiningu, með eiginleikunum þínum endurbyggðum á nýju formi.
keywords: rhino, grasshopper, lifandi tenging, lifandi samband, 3dm, nurbs, parametrískt, tenging, samstilling, skrift, ýta, innfluttur hluti
from: cf4dc9b2
---

Haltu áfram að móta líkanið þar sem þú mótar það, og vinnðu, athugaðu og skjalfestu það hér. Hver breyting í hinu forritinu kemur í stað eins innflutts hluta í PartCraft, og eiginleikarnir á eftir honum endurbyggjast á nýja forminu.

:::note
Tengingin þarf **CadCraft Studio** á sömu tölvu. Vafraflipi getur ekki tekið tenginguna. Ekkert fer um internetið: skriftan talar við Studio á vistfangi þessarar tölvu sjálfrar, með auðkenni (token).
:::

:::warning
Þessi tenging hefur verið prófuð með skráaskrifara skriftunnar og staðgengli fyrir hitt forritið, ekki enn innan Rhino eða Grasshopper sjálfra. Ef eitthvað bregst þar, segðu okkur hvað það sagði.
:::

## Setja upp

1. Í Studio, opnaðu PartCraft. Í {{ui:Stillingar}} › {{ui:PartCraft}} › {{ui:Aðstoðarmenn}}, hakaðu við **Leyfa AI-aðstoðarmönnum og skriftum að nota PartCraft**, og síðan **Breyta**.
2. Í Studio, veldu {{ui:Tengja aðstoðarmann}}. Þar birtist vistfangið og auðkennið sem þú límir inn hér að neðan.
3. Sæktu skriftuna: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Frá Rhino

1. Keyrðu `cadcraft_link.py` í skrifturitli Rhino (Python 3 í Rhino 8).
2. Í fyrsta skipti, límdu inn vistfangið og auðkennið. Þau eru geymd í `.cadcraft-link.json` í heimamöppunni þinni, aldrei í líkaninu. Studio býr til nýtt auðkenni í hvert skipti sem það ræsist, svo skriftan spyr aftur þá.

Keyrðu skriftuna aftur til að stöðva hana.

## Frá Grasshopper

Keyrðu skriftuna einu sinni í Rhino fyrst, svo vistfangið og auðkennið séu vistuð.

1. Bættu við Script-íhlut (Python 3) og límdu alla `cadcraft_link.py` í hann.
2. Gefðu honum þessi inntök: `G` (rúmfræðin, með listaaðgangi), `N` (heiti, valfrjálst), `On` (boolean-rofi) og `Target` (valfrjálst: `model` eða `part`, ef bæði forritin eru opin).
3. Stilltu `On` á satt.

Sérhver útreikningur sendir `G` yfir og kemur í stað þess sem íhluturinn sendi síðast.

## Hvernig þetta virkar hér

- **Einn hluti.** Allt sem sést í líkaninu verður einn innfluttur eiginleiki, eins og þegar þú [opnar .3dm-skrá](topic:open-3dm-files).
- **Það þarf að lokast.** PartCraft fyllir litla holur og flata opnun, og hinu forritinu er sagt hversu margar. Ef líkanið lokast enn ekki, heldur PartCraft hlutnum sem það hafði og stöðustikan segir það. Næsta breyting sem lokast uppfærir hann.
- **Ljúktu því sem þú ert að gera.** Í skissu eða teikningu er uppfærslum hafnað og reynt aftur; þær koma þegar þú ert kominn aftur í líkanið.
- **Afturköllun.** Uppfærslur innan tveggja sekúndna frá hvor annarri deila einu afturkallsskrefi.
- **Vistun.** Hlutaskráin geymir tenginguna. Keyrðu skriftuna aftur eftir að þú opnar hana aftur, og sami eiginleiki uppfærist.

**Ein leið aðeins.** Breytingar hér fara ekki aftur í hitt forritið.

## Ef eitthvað fer úrskeiðis

- „Enginn ModelCraft- eða PartCraft-gluggi leyfir það“: gerðu skref 1 í uppsetningunni.
- „Studio hafnaði auðkenninu“: Studio hefur endurræst. Afritaðu nýja auðkennið og keyrðu skriftuna aftur. Fyrir Grasshopper, keyrðu hana í Rhino fyrst.
- „Næ ekki sambandi við CadCraft Studio“: Studio keyrir ekki, eða vistfangið hefur breyst.
