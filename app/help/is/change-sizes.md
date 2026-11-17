---
title: Breyttu stærðum án þess að opna skissuna
summary: Stýrðu hluta með tölunum í hægra spjaldinu: víddum skissa, dýpt, fjölda og hornum, hvernig á að skipuleggja hlut svo réttu tölurnar stýri honum, og hvar breytur og jöfnur taka við.
keywords: breytur, stýrivíddir, hönnunarásetningur, breyta stærð, jöfnur, alþjóðlegar breytur, hönnunartafla, stillingar, stærðarbreyting, breyta vídd
from: c2ae1a32
---

Sérhver stærð í PartCraft-hluta er tala sem þú getur breytt síðar: víddirnar í skissum hans og stillingar eiginleika hans. Þú þarft ekki að opna skissu til að breyta víddum hennar.

## Breyttu skissuvídd úr spjaldinu

1. Smelltu á eiginleika í sögunni, til dæmis „Extrude1“.
2. Undir eigin stillingum útdráttarins listar **Skissuvíddir (Sketch1)** hverja vídd skissunnar: „Fjarlægð“, „Þvermál“, „Horn (°)“ og svo framvegis.
3. Sláðu inn nýtt gildi í einum reit og ýttu á {{key:Enter}} eða {{key:Tab}}.

Skissan leysist með nýja gildinu og allur hlutinn er endursmíðaður. Ef þú velur skissuna sjálfa sést sami listi sem **Stýrivíddir**.

Radíus eða þvermál verður að vera meira en núll, og horn er á bilinu 0 til 180 gráður; stöðustikan segir til um það ef ekki.

:::tip
Hvaða reitur er hvað? Reitirnir eru skráðir í þeirri röð sem víddirnar voru búnar til. Ef þú ert ekki viss skaltu opna skissuna (tvísmella á hana), tvísmella á víddina á teikniflötinum og breyta henni þar.
:::

## Sláðu inn aðaltöluna strax

Veldu eiginleika í sögunni (eða bættu honum við) og sláðu inn tölu: hún fer í aðalreit eiginleikans, þann sem þú breytir oftast (**Dýpt** útdráttar, **Horn** snúnings, **Þvermál** gats, **Fjöldi** mynsturs, **Radíus** ávölunar, veggur skeljar). Ýttu á {{key:Enter}} til að setja hana, eða {{key:Esc}} til að halda gamla gildinu. Þegar þú bætir útdrætti við segir stöðustikan það: „Extrude1 bætt við. Breyttu tölunum hægra megin, eða sláðu inn tölu núna fyrir dýpt hans.“

## Breyttu tölunni í sögunni

Hver röð eiginleika í sögunni sýnir aðaltöluna sína við hlið heitisins: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Tvísmelltu á töluna (eða veldu röðina og ýttu á {{key:F2}}) og reitur opnast þar. Sláðu inn nýja gildið og ýttu á {{key:Enter}}; {{key:Esc}} heldur því gamla. Það virkar nákvæmlega eins og reitur eiginleikans hægra megin: sömu mörk, `=` til að slá inn jöfnu eins og `=width/2`, og eitt skref í afturköllun.

Á útdrætti, gati eða mynstri opnar tvísmellur hvar sem er á röðinni reitinn. Á ávölun, skábrún, skel, halla eða þræði opnar tvísmellur á heitið því að velja brúnir eða fleti, svo tvísmelltu á töluna sjálfa. Skissur hafa enga tölu í röðinni: tvísmellur opnar skissuna.

## Dragðu hana í sýninni

Veldu útdrátt í sögunni (eða smelltu á hann í sýninni og síðan á röð hans) og appelsínugul ör stendur á endafletinum hans, með dýptinni í reit við hliðina á henni. Dragðu örina: hluturinn fylgir þér meðan þú dregur, og þegar þú sleppir er nýja dýptin sett sem eitt skref ({{key:Mod+Z}} skilar henni). Ýttu á {{key:Esc}} meðan þú dregur til að fara aftur þangað sem þú byrjaðir. Dýptin hreyfist í skrefum sem eru tíundi hluti stærðarinnar: 1 mm á 25 mm útdrætti, 0.1 mm á 3 mm útdrætti.

Snúningur fær bogna ör við enda snúningsins: dragðu hana um ásinn til að breyta horninu, í heilum gráðum frá 1° til 360°.

Eða smelltu í reitinn við hliðina á örinni, sláðu inn gildi (eða `=` og jöfnu) og ýttu á {{key:Enter}}. Það er engin ör á útdrætti sem fer **Í gegnum allt** eða upp að fleti, né á gildi sem jafna stýrir: breyttu þeim hægra megin.

## Tölurnar sem stýra hlutnum

| Hvar | Það sem þú getur breytt |
|---|---|
| Skissa | Hver vídd: lengdir, fjarlægðir, radíusar, þvermál, horn |
| Útdráttur og úrtak | Dýpt, lokaskilyrði, stefna, útstæð eða úrtak |
| Snúningur og snúið úrtak | Horn, ás, útstæð eða úrtak |
| Gat | Þvermál, dýpt, í gegnum allt, þvermál og dýpt mótsökkunar |
| Ávöl, skábrún, skel | Radíus, fjarlægð, veggþykkt og stefna, og hvaða brúnir eða fletir |
| Línulegt og hringlaga | Fjöldi, bil eða horn, stefna eða ás |
| Hluti | Ferlar (hversu fínlega kringlótt form eru fleygð í fleti) |
| Teikning | Hvar snið sker, stærð og mælikvarði smáatriða, GD&T-gildi |

## Skipuleggðu hlutinn svo réttu tölurnar stýri honum

Tölurnar sem þú gefur eru þær sem þú getur breytt. Nokkrar venjur gera síðari breytingar skynsamlegar:

- **Víddaðu það sem skiptir máli fyrir verkið.** Ef gat á að vera 15 mm frá brún, víddaðu það frá þeirri brún, ekki frá upphafspunktinum.
- **Skilgreindu skissur að fullu.** Þá færist aðeins það sem það á að færa (sjá [Skilgreindu skissu að fullu](topic:relations-dimensions)).
- **Notaðu tengsl fyrir ásetninginn.** Jafnt á tveimur götum þýðir að eitt þvermál stýrir báðum. Samhverf form: settu upphafspunktinn á miðlínuna, eða notaðu Miðpunkt.
- **Teiknaðu á fleti sem eiginleikar bjuggu til.** Skissa á endafleti útdráttar færist þegar dýptin breytist.
- **Notaðu mynstur í stað afritunar.** Eitt gat mynstrað átta sinnum hefur eitt þvermál til að breyta.

## Lengra en stakar tölur

- **Ein tala sem stýrir mörgum:** notaðu breytur og jöfnur: [Stýrðu hluta með breytum](topic:parameters).
- **Nokkrar stærðir af sama hlut:** vistaðu hverja sem [stillingu](topic:design-tables); þær eru geymdar í hlutaskránni.
- **Reikningur í talnareit:** sláðu inn `=40/2` eða `=width / 2`. Það býr til jöfnu; sjá [Jöfnur í báðar áttir](topic:equations-two-way).
- **Tommueiningar:** hluturinn sýnir millimetra. Í talnareit með `=`, eða í breytu, er `2in` breytt í 50.8.

Sjá [Það sem er ekki smíðað enn](topic:not-built-yet).
