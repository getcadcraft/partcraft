---
title: Mga post processor na maaari mong i-edit
summary: Ang post ay maikling text file na ginagawang G-code ang toolpath para sa iyong control. Kopyahin ang isa sa mga built-in na post, palitan ang mga linyang kailangan mo (numero ng linya, pagpalit ng tool, home moves, end code), tingnan ang G-code na isinusulat nito habang nagta-type ka, at itago ito kasama ng part.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, i-edit ang post, custom post, cpost, pagpalit ng tool, M6, G43, canned cycle, numero ng linya, modal, event, variable
from: 36ab8a38
---

Ang parehong toolpath ay kailangang isulat nang magkakaiba para sa magkakaibang control: may numero ng linya o wala, `M6` o pause, `G28` o `G53`, `M30` o `M2`. Ang **post** ang maikling text na nagsasabi kung paano. Nakasulat sa format na ito ang tatlong built-in na post ng PartCraft (Fanuc-style, GRBL at LinuxCNC), kaya ang sarili mong post ay puwedeng magsimula bilang kopya ng isa sa mga ito.

Suriin ang output sa simulator ng sarili mong makina bago mag-cut, at patakbuhin muna ito sa ere sa ibabaw ng stock. Eksaktong isinusulat ng mga built-in na post ang isinulat nila bago umiral ang format na ito (ikinukumpara ng mga test ang output nila byte for byte sa daan-daang programa), pero walang napatunayan dito sa makina mo, at ang post na binago mo ay ikaw ang dapat magpatunay.

## Gumawa ng isa

Sa Manufacture, sa ilalim ng **Post**:

- Ang {{ui:Edit post…}} sa isang built-in na control ay nagbubukas ng **sarili mong kopya** nito. Sa sarili mong post, binubuksan nito ang mismong post na iyon.
- Ang {{ui:New post…}} ay nagsisimula sa maliit at blangkong post na may bawat event sa loob.
- Ang {{ui:Import post file…}} ay nagbabasa ng `.cpost` text file (ang file na makukuha mo mula sa **Save as a file…** sa editor).

Ipinapakita ng editor ang text, isang linya na nagsasabi kung nababasa ito (at aling linya ang mali), at ang G-code na isinusulat ng post habang nagta-type ka. Pumipili ang **Preview with** ng maliit na sample program na tumatakbo sa bawat event, o ang sarili mong programa ng part na ito. Ang {{ui:Save}} ay nagtatago ng post sa file ng part (hanggang 20 post) at pinipili ito bilang control. Kasama ng part ang mga post; para magamit ang isa sa ibang part, i-save ito bilang file at i-import doon.

## Ano ang itsura ng post

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Ang mga linyang nagsisimula sa `//` at ang mga blangkong linya ay binabalewala. Sa itaas ang mga setting; pagkatapos ay isang bloke na `on <event>` para sa bawat event, na isinasara ng `end`. Ang event na hindi mo isinama ay walang isinusulat.

| Setting | Kahulugan |
|---|---|
| `post <id>` | Ang id ng post: mga letra, digit, `-` at `_` |
| `name <text>` | Ang ipinapakita sa listahan ng Control |
| `extension <ext>` | Ang file extension: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … sa bawat linyang `emit`, o wala |
| `decimal-point yes` / `no` | `10.` sa halip na `10` (hindi kailanman may tuldok ang mga comment) |
| `canned-cycles yes` / `no` | `no`: ang mga butas ay isinusulat bilang mga G0/G1 move na kinakatawan nila |
| `modal <group> <words>` | Mga salita ng isang grupo (`modal motion G0 G1 G2 G3`) na isinusulat lamang kapag nagbago |

## Mga event

Tumatakbo ang mga ito ayon sa ganitong pagkakasunod para sa isang programa: `start`; pagkatapos, para sa bawat operation, `operation`, `tool-change` (kapag nagbago ang tool), `spindle` (kapag nagbago ang bilis), `approach` (ang galaw papunta sa unang point, bago ang unang rapid), `coolant-on`, pagkatapos ang mga galaw nito bilang `rapid`, `feed` at `arc`, at ang bawat canned cycle bilang `cycle-start`, isang `cycle-hole` para sa bawat butas, at `cycle-end`; sa huli, `end`.

Magagamit ng bawat event ang mga variable ng sarili nitong uri ng galaw, na isinusulat bilang `{name}`: ang programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), ang stock (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), ang tool (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), ang operation (`op.name`, `op.type`), `rpm`, ang point ng isang galaw (`x`, `y`, `z`, `f`, at `moved`: true kapag nagbago ang isang axis), mga arc (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) at mga butas (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Ipinapakita ng listahan ng **Events and variables** sa editor kung aling event ang nakakakita ng alin. State na maaari mong basahin at itakda: `cool`, `offset`, at `at.x`, `at.y`, `at.z`, `at.f` (ang mga huling halagang naisulat).

## Mga statement

| Statement | Ano ang ginagawa |
|---|---|
| `raw TEXT` | Isang linyang eksaktong ita-type (walang numero ng linya) |
| `comment TEXT` | `(TEXT)` na inalis ang hindi-ASCII at mga bracket |
| `emit WORD WORD …` | Isang linya ng mga salita; ang mga salitang lumalabas na walang laman ay inaalis; walang salita, walang linya |
| `word WORD …` | Nagdaragdag ng mga salita sa linyang ginagawa; ang simpleng `emit` ang nagtatapos dito |
| `if EXPR` … `else` … `end` | Mga kondisyon: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, kung wala ay b) |
| `for tool in tools` … `end` | Isang beses para sa bawat tool na ginagamit ng programa |
| `set NAME EXPR` | Nag-aalala ng halaga (`set offset tool.number`) |
| `reset NAME …` | Kinakalimutan ang modal na salita (isang grupo, isang address letter tulad ng `Z`, o `at.z`) |
| `do rapid X Y Z` | Pinapatakbo ang event na `rapid` para sa isang point |

Ang salita ay typed text na may mga butas na `{variable|filter}`. Ang mga filter ay `upper`, `lower`, `pad:N` (zero fill), `cut:N` (unang N karakter), `safe` (ASCII na ligtas sa comment) at `int`. Ang salitang nagtatapos sa `~` ay **modal**: isinusulat lamang ito kapag iba sa huling naisulat (`G1~`, `X{x}~`). Ang salitang nagtatapos sa `~!` ay laging isinusulat at naaalala pa rin. Ang pangalang hindi variable ay simpleng text (`G81`, `mist`). Ginagawang 0.001 mm ang pag-round ng mga numero at isinusulat nang walang trailing zero.

## Ano ang hindi kayang gawin ng post

Ang post ang nagpapasya lamang kung paano isusulat ang mga galaw, wala nang iba. Hindi nito kayang baguhin ang toolpath, ayusin ang pagkakasunod ng operations, hatiin ang arc, magdagdag ng axis, malaman ang travel o kinematics ng makina mo, o magsagawa ng arithmetic sa coordinates (walang `+`). Hindi pa naitatayo ang probing, tool-life at subprogram cycles, output ng 4th at 5th axis, at lathe codes. Hindi maaaring i-load ang `.cps`-style na post file mula sa ibang programa: ibang format ito, at mas simple.
