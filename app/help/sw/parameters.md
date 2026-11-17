---
title: Endesha sehemu kwa vigezo
summary: Taja ukubwa unaojali (upana, unene, ukubwa wa bolti), unganisha namba yoyote ya kipengele au kipimo cha mchoro kwao kwa =, na ubadilishe sehemu nzima kutoka jedwali moja.
keywords: vigezo, mahali vinapotumika, vinavyotumiwa na, vigezo vya kimataifa, vigeu, milinganyo, nia ya usanifu, vipimo vinavyoendesha, kuunganisha, usemi, fomula, kutaja kipimo, thamani zilizounganishwa
from: 58c646ea
---

Kigezo ni namba yenye jina, kama `width = 120` au `margin = bolt * 1.5`. Unganisha kina, kipenyo cha shimo, idadi ya mfumo au kipimo cha mchoro kwake, na kubadilisha kigezo kunabadilisha zote kwa hatua moja. Hivi ndivyo unavyohifadhi nia ya usanifu ndani ya sehemu badala ya kichwani mwako.

## Ongeza vigezo

1. Kwenye paneli ya kulia, bofya kichupo cha {{ui:Parameters}}.
2. Chini ya **Vigeu**, andika jina kwenye kisanduku cha "jina", kwa mfano `width`.
3. Andika thamani yake kwenye kisanduku kinachofuata, kwa mfano `120`, kisha bonyeza {{key:Enter}} (au bofya {{ui:Add}}).

Thamani inaweza kuwa namba au usemi wa vigezo vingine: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Safu ya **Thamani** inaonyesha matokeo yake. Jina huanza na herufi au `_` na lina herufi, tarakimu na `_` pekee; majina ya kazi na vitengo (`sin`, `mm`, `pi`) hukataliwa, na vilevile mzunguko kama `a = b` pamoja na `b = a`.

## Unganisha namba na kigezo

1. Bofya kipengele kwenye historia, kwa mfano "Extrude1". Mipangilio yake huonyeshwa kwenye kichupo cha {{ui:Properties}}.
2. Kwenye kisanduku cha namba, kama **Kina (mm)**, andika `=` na usemi: `=thick` au `=width / 4`.
3. Bonyeza {{key:Enter}}.

Kisanduku sasa kinaonyesha matokeo, na kitufe **ƒ** huonekana karibu na lebo yake. Elekeza juu yake kuona mlinganyo. Vipimo vya michoro hufanya kazi kwa njia ile ile, katika orodha ya **Vipimo vya mchoro** ya kipengele na kwenye kisanduku cha kipimo cha mchoro uliofunguliwa (bofya mara mbili kipimo, andika `=width`, bonyeza {{key:Enter}}).

Namba unazoweza kuunganisha: kina cha extrude, pembe ya revolve, kipenyo cha shimo, kina na ukubwa wa counterbore, idadi ya mfumo, nafasi na pembe, radius ya fillet, umbali wa chamfer, unene wa ukuta wa shell, kila kipimo cha mchoro, na ukubwa wa vipengele vipya zaidi (kina cha pili, taper, countersink, umbali wa ndege ya marejeo, pembe ya draft na nyinginezo).

## Badilisha kigezo

Kwenye kichupo cha {{ui:Parameters}}, andika thamani mpya au usemi kwenye safu ya **Expression** na bonyeza {{key:Enter}}. Kila kilichounganishwa nacho kinabadilika na sehemu inajengwa upya, kama hatua moja: {{key:Mod+Z}} inaitengua.

Ili kubadilisha namba kutoka upande mwingine, angalia [Milinganyo pande zote mbili](topic:equations-two-way).

## Tazama kigezo kinatumika wapi

Chini ya kila kigezo kwenye kichupo cha {{ui:Parameters}}, mstari unaeleza kinachokitumia:

- namba zinazoendeshwa nacho, kama **Extrude1 depth** au **Sketch1 D2 (distance)**. Bofya moja kuchagua kipengele chake na kuonyesha mipangilio yake;
- namba zinazoendeshwa **kupitia** vigezo vingine, kama **Hole1 diameter (through h, d)** wakati `d = h + 2` na `h = w / 2`;
- **vigezo** ambavyo misemo yake vinakitumia, **usanidi** unaokiweka, na **scripts** zinazokisoma (angalia [Andika na endesha scripts](topic:craftscript)).

"Bado hakitumiki." inamaanisha hakuna kinachokitumia: unaweza kukifuta bila kuulizwa.

## Ondoa kiungo, badilisha jina, futa

- **Ondoa kiungo cha namba:** bofya kitufe chake **ƒ**, au {{ui:Unlink}} kwenye orodha ya **Milinganyo**. Inabaki na thamani yake ya sasa, na hakuna kigezo kinachoibadilisha tena.
- **Badilisha jina la kigezo:** andika jina jipya kwenye kisanduku chake cha **Jina**. Kila usemi unaokitumia unaandikwa upya.
- **Futa kigezo:** bofya × kwenye safu yake. Kikitumiwa na kitu, PartCraft inauliza kama iandike thamani yake ya sasa kwenye misemo hiyo kwanza.
- **Kufuta kipengele** huondoa milinganyo ya namba zake; upau wa hali unasema ipi.

:::note
Vigezo huhifadhiwa kwenye faili la `.partcraft.json` (kama toleo la faili 3). Sehemu isiyo na vigezo huhifadhiwa kama hapo awali.
:::

## Misemo

| Andika | Maana yake |
|---|---|
| `120`, `12.5`, `1e3` | namba (milimita, au digrii kwa pembe) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | urefu kwa vitengo vingine, unaogeuzwa kuwa milimita |
| `30deg`, `0.5rad` | pembe, inayogeuzwa kuwa digrii |
| `+ - * / %` na `^` | hesabu; `^` ni nguvu, `-2^2` ni −4 |
| `sin cos tan asin acos atan atan2` | trigonometria kwa digrii |
| `sqrt pow exp ln log abs sign` | kazi nyingine |
| `ceil floor int round(x, digits) min max` | kuzungusha na mipaka |
| `if(test, a, b)` na `< <= > >= == !=` | chaguo: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Herufi kubwa na ndogo zinajali majina: `Width` na `width` ni vigezo viwili.

Angalia pia [Usanidi na jedwali za usanifu](topic:design-tables) na [Scripts na mstari wa amri](topic:scripts-and-cli).
