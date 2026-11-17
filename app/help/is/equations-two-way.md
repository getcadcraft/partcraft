---
title: Jöfnur í báðar áttir
summary: Breyttu breytu og hluturinn fylgir; skrifaðu nýja stærð í drifna tölu og PartCraft reiknar út breytuna þar að baki, og spyr hvaða breyta ef nokkrar gætu breyst.
keywords: jöfnur, leysa afturábak, drifin vídd, tvíátta, öfugt, markleit, breytur, tengd gildi, hvaða breyta
from: 82dc0269
---

Jafna eins og **Extrude1 depth = thick + extra** virkar í báðar áttir.

## Áfram: breyttu breytunni

Á flipanum {{ui:Breytur}}, breyttu `thick` úr 20 í 30. Dýpt Extrude1 verður 30 + extra, og hluturinn smíðast aftur.

## Afturábak: breyttu drifnu tölunni

1. Smelltu á „Extrude1“ í sögunni. Reiturinn **Dýpt (mm)** sýnir **ƒ**: jafna drífur hana.
2. Skrifaðu stærðina sem þú vilt, til dæmis `40`, og ýttu á {{key:Enter}}.

PartCraft leysir fyrir breytuna á bak við jöfnuna, í eins mörgum skrefum og þarf (`depth = hub_h`, `hub_h = disc_t + 50`: að skrifa hæð breytir `disc_t`). Stöðustikan segir hvað breyttist, til dæmis að extra fór úr 5 í 15.

Þegar tvær eða fleiri breytur drífa töluna spyr reitur **Hvaða breyta á að breytast?** og listar þær. Smelltu á eina; hinar halda gildum sínum. {{ui:Hætta við}} breytir engu.

Sama virkar í skissu: tvísmelltu á drifið mál, skrifaðu gildi og ýttu á {{key:Enter}}. Það virkar líka í dálkinum **Gildi** í breytutöflunni, fyrir breytu sem er sjálf segð.

## Þegar það getur ekki

- Tala sem verður að vera heil (fjöldi í mynstri) eða halda sig innan marka (horn allt að 360°) er hafnað áður en nokkuð breytist.
- Jafna með föstum tölum einum (`=40`) hefur enga breytu til að breyta: talan sem þú skrifar kemur í staðinn.
- Ef ekkert gildi breytunnar gefur þá stærð sem þú skrifaðir segir stöðustikan það og ekkert breytist.
- Skissa sem ekki er hægt að leysa með nýja gildinu heldur fyrri gildum sínum, og stöðustikan nefnir skissuna.

Sérhver breyting, í hvora áttina sem er, er eitt skref fyrir {{key:Mod+Z}} og {{key:Mod+Y}}.
