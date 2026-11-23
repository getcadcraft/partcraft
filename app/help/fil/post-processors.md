---
title: Post processor na maaari mong i-edit
summary: Ang post ay maikling text file na nagpapalit ng toolpath sa G-code para sa control mo. Kopyahin ang isa sa mga built-in na post, baguhin ang mga linyang kailangan mo (line number, tool change, home move, end code), tingnan ang G-code na isinusulat nito habang nagta-type ka, at panatilihin ito kasama ng piyesa.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, edit post, custom post, cpost, tool change, M6, G43, canned cycle, line numbers, modal, event, variable
from: c78d0cae
---

Iba-iba ang pagkakasulat ng parehong toolpath para sa iba't ibang control: may line number o wala, `M6` o pause, `G28` o `G53`, `M30` o `M2`. Ang **post** ay ang maikling text na nagsasabi kung paano. Nakasulat sa format na ito ang tatlong built-in na post ng PartCraft (Fanuc-style, GRBL at LinuxCNC), kaya ang sarili mong post ay puwedeng magsimula bilang kopya ng isa sa mga ito.

Suriin ang output sa sarili mong simulator ng makina bago pumutol, at patakbuhin ito sa hangin sa ibabaw ng stock muna. Isinusulat ng mga built-in na post nang eksakto ang isinulat nila bago nagkaroon ng format na ito (inihahambing ng mga test ang output nila nang byte-for-byte sa daan-daang program), pero walang napatunayan dito sa makina mo, at ikaw ang dapat magpatunay sa post na binago mo.

## Make one

Sa Manufacture, sa ilalim ng **Post**:

- {{ui:Edit post…}} sa built-in na control ay nagbubukas ng **sarili mong kopya** nito. Sa isa sa sarili mong post, binubuksan nito ang post na iyon.
- {{ui:New post…}} ay nagsisimula sa maliit na blangkong post na may bawat event dito.
- {{ui:Import post file…}} ay bumabasa ng `.cpost` na text file (ang file na nakukuha mo sa **Save as a file…** sa editor).

Ipinapakita ng editor ang text, isang linyang nagsasabi kung nababasa ito (at aling linya ang mali), at ang G-code na isinusulat ng post, habang nagta-type ka. Pinipili ng **Preview with** ang maliit na sample program na tumatakbo sa bawat event, o ang sarili ng program ng piyesang ito. Pinananatili ng {{ui:Save}} ang post sa file ng piyesa (hanggang 20 post) at pinipili ito bilang control. Kasama ng piyesa ang mga post; para magamit ito sa ibang piyesa, i-save ito bilang file at i-import doon.

## What a post looks like

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

Binabalewala ang mga linyang nagsisimula sa `//` at ang mga blangkong linya. Nasa itaas ang mga setting; pagkatapos ay isang `on <event>` block para sa bawat event, na isinasara ng `end`. Ang event na hindi mo isinama ay walang isinusulat.

| Setting | Kahulugan |
|---|---|
| `post <id>` | Ang id ng post: mga letra, digit, `-` at `_` |
| `name <text>` | Ang ipinapakita ng Control list |
| `extension <ext>` | Ang file extension: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … sa bawat `emit` na linya, o wala |
| `decimal-point yes` / `no` | `10.` sa halip na `10` (hindi kailanman nagdadala ng tuldok ang mga komento) |
| `canned-cycles yes` / `no` | `no`: isinusulat ang mga butas bilang G0/G1 na galaw na kinakatawan ng mga ito |
| `modal <group> <words>` | Mga salita ng isang group (`modal motion G0 G1 G2 G3`) na isinusulat lamang kapag nagbago |

## Events

Tumatakbo ang mga ito sa ganitong pagkakasunod para sa isang program: `start`; pagkatapos, para sa bawat operation, `operation`, `tool-change` (kapag nagbago ang tool), `spindle` (kapag nagbago ang bilis), `approach` (ang galaw paakyat sa unang punto, bago ang unang rapid), `coolant-on`, pagkatapos ay ang mga galaw nito bilang `rapid`, `feed` at `arc`, at ang bawat canned cycle bilang `cycle-start`, isang `cycle-hole` bawat butas at `cycle-end`; sa huli, `end`.

Mas maraming event, para sa lumalampas sa tatlong axis (tinatanggihan ng post na walang event ang ganitong programa at pinangalanan ang event na kulang nito):

| Event | Kailan | Mga variable nito |
|---|---|---|
| `index` | Bago ang operation na iba ang direksyon ng tool sa huli, at bago ang unang operation sa makinang may rotary axes | `rot.a`, `rot.b`, `rot.c` (ang mga posisyong pupuntahan; walang laman para sa axis na wala sa makina), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Ang mga galaw ng operation na gumagalaw ang rotary axes habang pumuputol | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes kapag dapat baliktarin ang oras ng feed), `invf` (1/minuto) |
| `rotary-end` | Pagkatapos ng ganoong operation | |
| `probe-move` | Galaw na humihinto kapag tumama ang probe | `x`, `y`, `z`, `f`, `probe.n` (1 hanggang 4), `probe.axis` (x, y o z), `probe.k` (1, 2 o 3) |
| `probe-set` | Pagkatapos ng mga touch ng isang probing cycle | `probe.kind` (`"z"`, `"x"`, `"y"` o `centre`), `probe.action` (`set` o `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Isang threading move sa lathe | `x`, `z`, `thread.lead` |

Ganoon din para sa bawat event: `kin` (none, a, b, ac, bc), `rotary` at `tcp` (yes o no, mula sa makinang nasa Setup), `pivot.x`, `pivot.y`, `pivot.z`, ang `op.tilt` at `op.turn` ng operation, at sa lathe ang `spin.mode` (css o rpm), `spin.css`, `spin.max` at `tool.nose`. Nawawala sa linya ang letter word na walang laman ang value, tulad ng `A{rot.a}` sa makinang walang A axis. Ihambing ang x, y at z bilang text sa loob ng quotes (`if probe.kind == "z"`): kapag walang quotes, ang mga ito ay coordinate ng galaw.

Dalawa pang linya sa itaas ng post ang nagpapagawa rito bilang lathe post: `machine lathe` (X at Z lamang ang isinusulat nito, at tinatanggihan ang milling path, gaya ng pagtanggi ng milling post sa turning path) at `lathe-x diameter` o `lathe-x radius`.

Maaaring gamitin ng bawat event ang mga variable ng sarili nitong uri ng galaw, nakasulat bilang `{name}`: ang program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), ang stock (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), ang tool (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), ang operation (`op.name`, `op.type`), `rpm`, ang punto ng galaw (`x`, `y`, `z`, `f`, at `moved`: true kapag may nagbagong axis), mga arko (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) at mga butas (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Ipinapakita ng listahan ng **Events and variables** sa editor kung aling event ang nakakakita ng alin. Estadong mababasa at maitatakda mo: `cool`, `offset`, at `at.x`, `at.y`, `at.z`, `at.f` (ang huling mga value na naisulat).

## Statements

| Statement | Ano ang ginagawa |
|---|---|
| `raw TEXT` | Isang linyang eksaktong ganoon ang type (walang line number) |
| `comment TEXT` | `(TEXT)` na inaalis ang non-ASCII at mga bracket |
| `emit WORD WORD …` | Isang linya ng mga salita; ang mga salitang nagiging walang laman ay inaalis; walang salita, walang linya |
| `word WORD …` | Nagdaragdag ng salita sa linyang binubuo; ang bare na `emit` ang nagtatapos dito |
| `if EXPR` … `else` … `end` | Mga kondisyon: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, kung hindi ay b) |
| `for tool in tools` … `end` | Isang beses para sa bawat tool na ginagamit ng program |
| `set NAME EXPR` | Tandaan ang isang value (`set offset tool.number`) |
| `reset NAME …` | Kalimutan ang modal na salita (isang group, isang address letter tulad ng `Z`, o `at.z`) |
| `do rapid X Y Z` | Patakbuhin ang `rapid` event para sa isang punto |

Ang salita ay typed na text na may mga butas na `{variable|filter}`. Ang mga filter ay `upper`, `lower`, `pad:N` (zero fill), `cut:N` (unang N karakter), `safe` (ASCII na ligtas sa komento) at `int`. Ang salitang nagtatapos sa `~` ay **modal**: isinusulat lamang ito kapag iba sa huling naisulat (`G1~`, `X{x}~`). Ang salitang nagtatapos sa `~!` ay isinusulat sa bawat pagkakataon at naaalala pa rin. Ang pangalang hindi variable ay simpleng text (`G81`, `mist`). Ang mga numero ay ni-round sa 0.001 mm at isinusulat nang walang trailing zero.

## What a post cannot do

Tinutukoy lamang nito kung paano isinusulat ang mga galaw, wala nang iba. Hindi nito kayang baguhin ang toolpath, ayusin ang pagkakasunod ng operation, hatiin ang arko, magdagdag ng axis, malaman ang saklaw ng paglalakbay o kinematics ng makina mo, o gumawa ng aritmetika sa coordinate (walang `+`). Ang mismong posisyon ng rotary ay galing sa makinang inilarawan sa Setup, hindi sa post: maaaring baguhin ng post ang sign o letter nila, pero hindi ang kinematics. Hindi pa naitatayo ang tool-life at subprogram cycle. Hindi maa-load ang `.cps`-style na post file mula sa ibang program: ibang format ito, mas simple.
