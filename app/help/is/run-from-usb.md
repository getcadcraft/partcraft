---
title: Keyra af USB-drifi
summary: Hvað verkfærin skrifa og hvar, svo að CadCraft Studio geti keyrt af USB-lykli eða úr hvaða möppu sem er án uppsetningar og án stjórnandaréttinda: stillingar, rafalar, skyndiminni og hlutaskrár, og hvað verður eftir á lyklinum.
keywords: usb, flytjanlegt, án uppsetningar, stjórnandi, admin, stillingar, gagnamappa, rafalar, hvar skrár eru skrifaðar, án nettengingar, persónuvernd, aðgangur að tölvu
from: 263efc79
---

Verkfærin fyrir verkfræði (rafalar, verkfræðisafnið, athuganir og gagnaskrár) þurfa **engin stjórnandaréttindi** og **enga uppsetningu**. Þau skrifa aðeins það sem er talið upp hér, og ekkert annað.

| Hvað | Hvar það er geymt |
|---|---|
| Hlutirnir þínir, með rafföldu hlutunum, gagnablöðum og athugunum | Hlutaskráin sem þú vistar (`.partcraft.json`), þar sem þú vistar hana. |
| Rafalar sem þú opnaðir úr skrám | Í eigin geymslu forritsins: staðbundin geymsla vafrans í vefsíðu, og `data`-mappan við hliðina á forritinu í flytjanlegu Studio-útgáfunni. Í mesta lagi 20. |
| Stillingar (voxel-stærðir sem þú stillir, þræðir lausnara, útlitið) | Sama geymsla forritsins. |
| Gagnablöð, reitir, möskvar | Aðeins þar sem þú vistar þau: niðurhalið fer þangað sem þú velur. |

Verkfærin gera **engin eigin netköll**: rafalarnir sem fylgja eru skrár í eigin möppu forritsins, safnið og athuganirnar keyra á tölvunni þinni í vinnsluferli (worker) sem hefur ekki aðgang að netinu, og verkfræðigögnin (eiginleikar vatns og lofts, efni) eru innan í forritinu. Rafall sem þú opnar úr skrá er lesinn á tölvunni þinni og fer hvergi annað.

## Flytjanlegt Windows-zip og Linux

Flytjanlega Studio-útgáfan fyrir Windows geymir stillingar, skyndiminni og viðbætur sínar í `data`-möppu við hliðina á forritinu. Linux AppImage geymir þær við hliðina á sjálfu sér þegar skrá sem heitir `portable` er þar við hlið; án hennar notar það heimamöppuna þína. Það er engin flytjanleg útgáfa fyrir Mac: kerfið kemur í veg fyrir að forrit sem var sótt skrifi við hliðina á sjálfu sér. Flytjanlegar athugasemdir skeljarinnar sjálfrar (hjálp `Studio`) segja hvað forritið skrifar.

## Aðgangur að tölvu

Ekkert hér biður um aðgang að tölvu. Prentarar, raðtengdar vélar og USB-tæki eru aðskilin: þau biðja þegar verk þarf á þeim að halda, einu sinni fyrir hvert tæki, og ekkert í rafölunum eða athugununum snertir þau.
