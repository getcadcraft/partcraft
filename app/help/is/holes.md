---
title: Bora göt og skeggholur á skissupunktum
summary: Settu punkta í skissu á flöt, búðu til einföld, skeggjuð, sökkvuð eða þráðuð (ISO-metrísk) göt á sérhverjum punkti, stilltu þvermál og dýpt, og lagaðu göt sem bora í ranga átt.
keywords: gat, gatahjálp, bora, líkanaður þráður, þrívíddarprentun, skeggholu, cbore, sökkvun, csink, þráðað gat, þráður, tappabor, metrískur þráður, M6, í gegnum allt, blint gat, boltagat, punktar, miðjur gata
from: 8e1eef83
---

{{ui:Gat}} borar eitt gat á hvern lausan punkt í skissu. Laus punktur er sá sem gerður er með punktverkfærinu, ekki endi línu eða miðja hrings.

## Boraðu göt í flöt

1. Smelltu á flata flötinn sem þú vilt bora í, og veldu síðan {{ui:Skissa á þessum fleti}}.
2. Ýttu á {{key:P}} og smelltu þar sem hvert gat á að vera. Málsettu punktana frá brúnunum eða upphafspunktinum ef staða þeirra skiptir máli (sjá [Fullskilgreindu skissu](topic:relations-dimensions)).
3. Veldu {{ui:Hætta}}.
4. Veldu {{ui:Gat}}.

Göt fara í gegnum hlutann, 6 mm í þvermál. Hægra spjaldið sýnir **Göt**: hversu mörg voru gerð, „eitt á hvern skissupunkt“.

**Eitt gat, fljótt:** smelltu á flata flötinn þar sem gatið á að vera og veldu {{ui:Gat hér}} í hægra spjaldinu. PartCraft bætir við skissu á fletinum með einum punkti þar sem þú smelltir og gati í gegnum hlutann, í einu skrefi. Skrifaðu tölu strax og ýttu á {{key:Enter}} fyrir þvermálið. Til að staðsetja það nákvæmlega skaltu opna nýju skissuna og málsetja punktinn.

**Hvaða skissa er notuð:** skissan sem þú varst að loka eða sú sem er valin; annars nýjasta ónotaða skissan sem hefur lausa punkta. Ef engin er til: „Búðu fyrst til skissu með punktum þar sem göt eiga að vera (Skissa á fleti, síðan Punktur)“.

## Stillingar

| Stilling | Valkostir | Sjálfgefið |
|---|---|---|
| **Gerð** | Einfalt, Skeggholu, Sökkvað, Þráðað (ISO-metrískt) | Einfalt |
| **Þvermál (mm)** | Þvermál gatsins | 6 |
| **Í gegnum allt** | Hakað: alveg í gegnum hlutann. Afhakaðu fyrir blint gat | Hakað |
| **Dýpt (mm)** | Birtist þegar Í gegnum allt er afhakað | 10 |
| **Skeggþvermál ⌀** | Birtist fyrir Skeggholu: þvermál breiðari uppsetningarinnar | 11 |
| **Skeggdýpt** | Birtist fyrir Skeggholu | 6 |
| **Snúa stefnu** | Borar til hinnar hliðar skissuplansins | Slökkt |

Göt bora inn í efnið, hornrétt á skissuplanið. Dýpt blinds gats er mæld frá skissuplaninu; botn þess er flatur.

## Skeggholu fyrir boltagat

1. Gerðu götin eins og að ofan.
2. Stilltu **Gerð** á **Skeggholu**.
3. Stilltu **Þvermál (mm)** á `6.6` (rými fyrir M6-bolta), **Skeggþvermál ⌀** á `11` og **Skeggdýpt** á `6.5`.

Skeggholan verður að vera breiðari en gatið („The counterbore must be wider than the hole.“) og, fyrir blint gat, grynnri en það („The counterbore must be shallower than the hole.“).

## Boltahringur

Fyrir göt sem eru jafnt dreifð í kringum miðju, gerðu **eitt** gat og mynstraðu það: veldu gateiginleikann og veldu síðan {{ui:Hringlaga}} (sjá [Mynstur og spegling](topic:patterns-mirror)). Mynstrið fylgir þegar þú breytir stærð gatsins.

## Þegar göt fara í ranga átt

- „Það er ekkert til að bora í þeim megin skissunnar. Prófaðu að snúa stefnunni.“ Skissan liggur hinum megin við efnið. Hakaðu við **Snúa stefnu**.
- „Settu skissupunkta þar sem götin eiga að vera (punktverkfærið), og búðu síðan til gatið.“ Skissan hefur enga lausa punkta. Endar lína og miðjur hringja telja ekki.
- „Það er ekkert til að bora í ennþá.“ Gat þarf fast efni. Búðu fyrst til upphleyping.

## Göt í samsetningum

Sérhvert gat hefur ás. Í samsetningu getur **Miðja á** sett tengingu á ás gats, skráð sem „Gat1, gat 2“, þannig að pinni eða bolti í hluta samræmist því. Sjá [Byggðu samsetningu](topic:build-assembly).

## Sökkvuð göt

Stilltu **Gerð** á **Sökkvað**, og síðan **Sökkvaþvermál ⌀** (við yfirborðið) og **Sökkvahorn**: 90° (ISO-metrískar skrúfur með flötum haus) eða 82° (tommuskrúfur). Taktu sökkvaþvermálið úr gögnum skrúfuframleiðandans (aðeins meira en þvermál skrúfuhaussins). Flötur keilunnar heitir „sökkvun“ í spjöldunum.

## Þráðuð göt

Stilltu **Gerð** á **Þráðað (ISO-metrískt)** og veldu **Þráð**, M2 til M24 grófan. Gatið er borað í tappaborastærðinni úr töflunni hér að neðan (nafnþvermál mínus halli, samkvæmt borröðinni eins og ISO 2306 gefur til kynna fyrir 6H-þráð); reiturinn **Þvermál (mm)** er ekki notaður. Fyrir blint gat setur **Dýpt þráðar (mm)** hversu djúpt þráðurinn nær.

| Þráður | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Halli | 0,4 | 0,45 | 0,5 | 0,7 | 0,8 | 1 | 1,25 | 1,5 | 1,75 | 2 | 2 | 2,5 | 2,5 | 2,5 | 3 |
| Tappaborþvermál ⌀ | 1,6 | 2,05 | 2,5 | 3,3 | 4,2 | 5 | 6,8 | 8,5 | 10,2 | 12 | 14 | 15,5 | 17,5 | 19,5 | 21 |

Þráðurinn er í fyrstu **sjónrænn**: líkanið hefur borað gatið, sýnin teiknar stóra þvermál þráðarins sem strikaða hringi, og teikningablaðið ber skýringuna sem athugasemd, svo sem „4× M8×1.25 - 6H, þráður í gegn“. STEP flytur aðeins út borað gatið.

Merktu við **Líkanaður** til að skera raunverulegan skrúfþráð inn í gatið, til þrívíddarprentunar. **Rými (mm)** gerir það svo miklu stærra á alla kanta, svo prentaður bolti passi: 0,1 til 0,2 mm hentar flestum prenturum. Skýringin endar þá á „(líkanaður)“. Sjá [Þræðir á ásum og borum, teiknaðir eða líkanaðir](topic:threads), sem setur þræði einnig á ása.

:::note
Göt sem eru borin úr tveimur áttum, tommuþræðir og pípuþræðir eru ekki enn tiltækir.
:::
