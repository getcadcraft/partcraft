---
title: Opnaðu staðlaðan hlut
summary: Byrjaðu hlut út frá bolta, skrúfu, rói, skífu, pinna, legu eða lykli stærðarmerktum eftir staðlinum, með hverri stærð úr töflu staðalsins sem stillingu.
keywords: staðlaður hlutur, staðlaðir hlutir, bolti, skrúfa, sexhyrningur, ró, skífa, pinni, dorn, lega, kúlulega, lykill, samsíða lykill, festing, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, sniðmát, safn
from: b9e2811f
---

PartCraft opnar algenga vélræna hluti tilbúna: málin koma úr töflum staðlanna, og sérhver stærð í töflunni er stilling sem þú getur skipt yfir í.

## Opnaðu einn

1. Smelltu á {{ui:Staðlaður hlutur}} í skráarhópnum.
2. Í {{ui:Hlutur}} velurðu gerðina, til dæmis {{ui:Skrúfa með sexhyrningshaus (ISO 4017)}}.
3. Í {{ui:Stærð}} velurðu stærðina, til dæmis `M10 × 40`.
4. Smelltu á {{ui:Opna}}.

Hlutinn opnast sem nýr, óvistaður hlutur. Vistaðu hann til að halda honum ({{key:Mod+S}}).

| Hlutur | Staðall | Breytur |
|---|---|---|
| Skrúfa með sexhyrningshaus, sexkantsbolti | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` gangastærð, `s` breidd milli flata, `k` hæð hauss, `l` lengd |
| Sexkantsró | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Slétt skífa | ISO 7089 | `d1` innan, `d2` utan, `h` þykkt |
| Samsíða pinni | ISO 2338 | `d`, `l` |
| Djúprennuleg kúlulega | ISO 15 | `d` gat, `D` utanmál, `B` breidd |
| Samsíða lykill | DIN 6885-1, form A | `b` breidd, `h` hæð, `l` lengd |

## Breyttu stærðinni

Sérhver stærð er stilling (sjá [Stillingar og hönnunartöflur](topic:design-tables)): opnaðu {{ui:Breytur}} og veldu aðra, eða breyttu breytu, til dæmis `l` fyrir lengri skrúfu, og vistaðu hana sem þína eigin stillingu.

## Það sem er líkanað

- Skrúfur og boltar: sexhyrningshausinn og slétt skaft. Rær: sexhyrningurinn með gati í nafnstærð gangsins. Gangar eru ekki líkanaðir; bættu við einum með {{ui:Skrúfgangur}} ef þú þarft hann (sjá [Skrúfgangar](topic:threads)).
- Pinnar: slétt sívalningur; endaskáskurðir eru skildir eftir.
- Legur: aðeins ytri umlykjandi form (hringur með gatinu, ytra þvermáli og breidd), en það er það sem þú þarft til að staðsetja eina.
- Lyklar: lykillinn með ávölum endum.

Efni hlutarins er stál, þannig að massaspjaldið sýnir þyngd hans. Gírar eru ekki hér enn: PartCraft hefur enga tannaeiginleika, og diskur er ekki gír. CadCraft teiknar gíra samkvæmt teikningarvenjum, og safnið hefur þá sem teikningar.
