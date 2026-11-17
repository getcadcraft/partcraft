---
title: Kontrolin ang part gamit ang parameters
summary: Pangalanan ang mga sukat na mahalaga (lapad, kapal, laki ng bolt), i-link ang anumang numero ng feature o sketch dimension dito gamit ang =, at baguhin ang buong part mula sa isang talahanayan.
keywords: parameters, where used, used by, global variables, variables, equations, design intent, driving dimensions, link, expression, formula, name a dimension, linked values
from: 58c646ea
---

Ang parameter ay pinangalanang numero, gaya ng `width = 120` o `margin = bolt * 1.5`. I-link ang depth, diameter ng butas, bilang ng pattern o sketch dimension dito, at kapag binago ang parameter, nagbabago ang lahat ng ito sa iisang hakbang. Ganito mo pinapanatili ang design intent sa part, sa halip na sa isip mo lang.

## Magdagdag ng parameters

1. Sa kanang panel, i-click ang tab na {{ui:Parameters}}.
2. Sa ilalim ng **Variables**, mag-type ng pangalan sa "name" box, halimbawa `width`.
3. I-type ang halaga nito sa susunod na box, halimbawa `120`, at pindutin ang {{key:Enter}} (o i-click ang {{ui:Idagdag}}).

Ang halaga ay maaaring numero o expression ng ibang parameter: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Ipinapakita ng **Value** column kung ano ang kinalabasan nito. Nagsisimula ang pangalan sa letra o `_` at binubuo lamang ng letra, digit at `_`; tinatanggihan ang mga pangalan ng function at unit (`sin`, `mm`, `pi`), at tinatanggihan din ang loop gaya ng `a = b` kapag `b = a`.

## I-link ang numero sa parameter

1. I-click ang feature sa history, halimbawa ang "Extrude1". Lumilitaw ang mga setting nito sa tab na {{ui:Properties}}.
2. Sa number box, gaya ng **Depth (mm)**, i-type ang `=` at ang expression: `=thick` o `=width / 4`.
3. Pindutin ang {{key:Enter}}.

Ipinapakita na ng box ang resulta, at lumilitaw ang button na **ƒ** sa tabi ng label nito. Itutok dito ang cursor para makita ang equation. Ganito rin ang paggana ng sketch dimensions, sa **Sketch dimensions** list ng feature at sa dimension box ng bukas na sketch (i-double-click ang dimension, i-type ang `=width`, at pindutin ang {{key:Enter}}).

Mga numerong puwede mong i-link: extrude depth, revolve angle, diameter at lalim ng butas, laki ng counterbore at depth, bilang ng pattern, espasyo at anggulo nito, fillet radius, chamfer distance, kapal ng pader ng shell, bawat sketch dimension, at ang mga sukat ng mas bagong feature (second depth, taper, countersink, distansya ng reference plane, draft angle at iba pa).

## Baguhin ang parameter

Sa tab na {{ui:Parameters}}, mag-type ng bagong halaga o expression sa **Expression** column at pindutin ang {{key:Enter}}. Nagbabago ang lahat ng naka-link dito at muling bumubuo ang part, bilang isang hakbang: binabawi ito ng {{key:Mod+Z}}.

Para baguhin ang numero mula sa kabilang dulo, tingnan ang [Equations sa magkabilang direksyon](topic:equations-two-way).

## Tingnan kung saan ginagamit ang parameter

Sa ilalim ng bawat parameter sa tab na {{ui:Parameters}}, may linyang nagsasabi kung ano ang gumagamit nito:

- ang mga numerong pinapatakbo nito, gaya ng **Extrude1 depth** o **Sketch1 D2 (distance)**. I-click ang isa para piliin ang feature nito at ipakita ang mga property nito;
- ang mga numerong pinapatakbo nito **sa pamamagitan ng** ibang parameter, gaya ng **Hole1 diameter (through h, d)** kapag `d = h + 2` at `h = w / 2`;
- ang mga **parameter** na gumagamit nito sa expression nila, ang mga **configuration** na nagtatakda nito, at ang mga **script** na bumabasa nito (tingnan ang [Sumulat at magpatakbo ng script](topic:craftscript)).

Ang "Not used yet." ay nangangahulugang walang gumagamit nito: maaari mo itong burahin nang hindi nagtatanong.

## I-unlink, i-rename, burahin

- **I-unlink ang numero:** i-click ang button nitong **ƒ**, o ang {{ui:Alisin ang koneksyon}} sa **Equations** list. Pinapanatili nito ang kasalukuyang halaga, at wala nang parameter na nagbabago rito.
- **I-rename ang parameter:** mag-type ng bagong pangalan sa **Name** box nito. Muling isinusulat ang bawat expression na gumagamit nito.
- **Burahin ang parameter:** i-click ang × sa row nito. Kapag may gumagamit nito, nagtatanong ang PartCraft kung isusulat muna ang kasalukuyang halaga nito sa mga expression na iyon.
- **Ang pagbura ng feature** ay nag-aalis ng equations ng mga numero nito; sinasabi ng status bar kung alin.

:::note
Naka-save ang parameters sa `.partcraft.json` file (bilang file version 3). Ang part na walang parameter ay naka-save nang eksaktong gaya ng dati.
:::

## Mga expression

| Isulat | Ibig sabihin |
|---|---|
| `120`, `12.5`, `1e3` | isang numero (millimeters, o degrees para sa anggulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | haba sa ibang unit, ginagawang millimeters |
| `30deg`, `0.5rad` | anggulo, ginagawang degrees |
| `+ - * / %` at `^` | aritmetika; ang `^` ay power, ang `-2^2` ay −4 |
| `sin cos tan asin acos atan atan2` | trigonometry sa degrees |
| `sqrt pow exp ln log abs sign` | iba pang function |
| `ceil floor int round(x, digits) min max` | pag-round at limits |
| `if(test, a, b)` na may `< <= > >= == !=` | pagpili: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Case sensitive ang mga pangalan: `Width` at `width` ay dalawang magkaibang parameter.

Tingnan din ang [Configurations at design tables](topic:design-tables) at [Mga script at command line](topic:scripts-and-cli).
