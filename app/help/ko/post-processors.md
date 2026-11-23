---
title: 편집 가능한 포스트 프로세서
summary: 포스트는 도구 경로를 제어기용 G코드로 바꾸는 짧은 텍스트 파일입니다. 내장 포스트 하나를 복사해 필요한 줄(줄 번호, 공구 교환, 원점 이동, 종료 코드)을 바꾸고, 입력하는 동안 쓰이는 G코드를 확인하며, 파트와 함께 보관하십시오.
keywords: 포스트, 포스트 프로세서, 포스트프로세서, G-code, NC, GRBL, LinuxCNC, 포스트 편집, 사용자 지정 포스트, cpost, 공구 교환, M6, G43, 고정 사이클, 줄 번호, 모달, 이벤트, 변수
from: c78d0cae
---

같은 도구 경로라도 제어기마다 다르게 써야 합니다. 줄 번호가 있거나 없거나, `M6` 또는 일시 정지, `G28` 또는 `G53`, `M30` 또는 `M2`. **포스트**는 그 방법을 말하는 짧은 텍스트입니다. PartCraft의 내장 포스트 세 가지(Fanuc 방식, GRBL, LinuxCNC)는 이 형식으로 작성되어 있으므로, 직접 만든 포스트는 그중 하나를 복사해서 시작할 수 있습니다.

절삭 전에 기계 자체의 시뮬레이터에서 출력을 확인하고, 먼저 소재 위 허공에서 실행하십시오. 내장 포스트는 이 형식이 생기기 전에 쓰던 것과 바이트 단위로 같은 출력을 씁니다(테스트는 수백 개 프로그램에서 출력을 비교합니다). 그러나 여기 있는 어떤 것도 귀하의 기계에서 검증된 것은 아니며, 바꾼 포스트는 사용자가 직접 검증해야 합니다.

## 포스트 만들기

제조에서 **포스트** 아래:

- 내장 제어기의 {{ui:Edit post…}}는 그 **사용자 복사본**을 엽니다. 직접 만든 포스트에서는 그 포스트를 엽니다.
- {{ui:New post…}}는 모든 이벤트가 들어 있는 작은 빈 포스트에서 시작합니다.
- {{ui:Import post file…}}는 `.cpost` 텍스트 파일을 읽습니다(편집기의 **파일로 저장…**에서 얻는 파일).

편집기는 입력하는 동안 텍스트, 읽힘 여부(및 잘못된 줄)를 알려 주는 줄, 포스트가 쓰는 G코드를 보여 줍니다. **다음으로 미리 보기**에서 모든 이벤트를 실행하는 작은 샘플 프로그램이나 이 파트의 프로그램을 고릅니다. {{ui:Save}}는 포스트를 파트 파일에 보관하고(최대 20개) 제어기로 선택합니다. 포스트는 파트와 함께 이동합니다. 다른 파트에서 쓰려면 파일로 저장한 뒤 그곳에서 가져오십시오.

## 포스트의 모습

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

`//`로 시작하는 줄과 빈 줄은 무시됩니다. 맨 위에 설정이 오고, 그다음 이벤트마다 `on <event>` 블록이 오며 `end`로 닫습니다. 빼 놓은 이벤트는 아무것도 쓰지 않습니다.

| 설정 | 의미 |
|---|---|
| `post <id>` | 포스트의 ID: 문자, 숫자, `-`와 `_` |
| `name <text>` | 제어기 목록에 표시되는 이름 |
| `extension <ext>` | 파일 확장자: nc, ngc, tap 등 |
| `line-numbers 10` / `off` | 모든 `emit` 줄에 `N10`, `N20` …을 붙이거나, 없음 |
| `decimal-point yes` / `no` | `10`이 아니라 `10.`(주석에는 소수점이 붙지 않음) |
| `canned-cycles yes` / `no` | `no`: 구멍은 그것을 나타내는 G0/G1 이동으로 씁니다 |
| `modal <group> <words>` | 그룹의 단어(`modal motion G0 G1 G2 G3`)는 바뀔 때만 씁니다 |

## 이벤트

프로그램은 다음 순서로 실행됩니다: `start`; 그다음 각 작업마다 `operation`, `tool-change`(공구가 바뀔 때), `spindle`(속도가 바뀔 때), `approach`(첫 급속 이동 전, 첫 점까지의 이동), `coolant-on`, 그리고 그 이동은 `rapid`, `feed`, `arc`로, 각 고정 사이클은 `cycle-start`, 구멍마다 `cycle-hole` 하나, `cycle-end`로 실행됩니다. 마지막으로 `end`.

세 축을 넘는 것을 위한 추가 이벤트입니다(해당 이벤트가 없는 포스트는 그런 프로그램을 거부하고 부족한 이벤트를 알려 줍니다):

| 이벤트 | 시점 | 변수 |
|---|---|---|
| `index` | 공구 방향이 마지막 것과 다른 작업 전, 그리고 회전축이 있는 기계의 첫 작업 전 | `rot.a`, `rot.b`, `rot.c`(갈 위치; 기계에 없는 축은 비어 있음), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | 절삭 중에 회전축이 움직이는 작업의 이동 | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse`(이송이 역시간이어야 하면 yes), `invf`(1/분) |
| `rotary-end` | 그러한 작업 뒤 | |
| `probe-move` | 프로브가 닿으면 멈추는 이동 | `x`, `y`, `z`, `f`, `probe.n`(1~4), `probe.axis`(x, y 또는 z), `probe.k`(1, 2 또는 3) |
| `probe-set` | 한 프로빙 사이클의 터치 뒤 | `probe.kind`(`"z"`, `"x"`, `"y"` 또는 `centre`), `probe.action`(`set` 또는 `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | 선반의 나사 이동 | `x`, `z`, `thread.lead` |

모든 이벤트에 공통: `kin`(none, a, b, ac, bc), `rotary`와 `tcp`(yes 또는 no, 셋업의 기계에서), `pivot.x`, `pivot.y`, `pivot.z`, 작업의 `op.tilt`와 `op.turn`, 선반에서는 `spin.mode`(css 또는 rpm), `spin.css`, `spin.max`, `tool.nose`. 값이 비어 있는 문자 단어(예: A축이 없는 기계의 `A{rot.a}`)는 줄에서 빠집니다. x, y, z를 따옴표 안의 텍스트로 비교하십시오(`if probe.kind == "z"`). 따옴표 없이 쓰면 그것은 이동의 좌표입니다.

포스트 맨 위의 두 줄은 선반 포스트로 만듭니다: `machine lathe`(이 경우 X와 Z만 쓰며, 밀링 포스트가 선삭 경로를 거부하듯 밀링 경로를 거부합니다)와 `lathe-x diameter` 또는 `lathe-x radius`.

각 이벤트는 자신의 종류의 이동 변수를 `{name}` 형태로 쓸 수 있습니다. 프로그램(`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), 소재(`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), 도구(`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), 작업(`op.name`, `op.type`), `rpm`, 이동 점(`x`, `y`, `z`, `f`, 그리고 축이 바뀌었으면 참인 `moved`), 호(`arc.g` 2 또는 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`), 구멍(`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). 편집기의 **이벤트와 변수** 목록은 어떤 이벤트가 무엇을 보는지 보여 줍니다. 읽고 설정할 수 있는 상태: `cool`, `offset`, 그리고 `at.x`, `at.y`, `at.z`, `at.f`(마지막으로 쓴 값).

## 문장

| 문장 | 기능 |
|---|---|
| `raw TEXT` | 입력한 그대로의 줄(줄 번호 없음) |
| `comment TEXT` | `(TEXT)`, ASCII가 아닌 문자와 괄호는 제거 |
| `emit WORD WORD …` | 단어들의 줄. 비어 나오는 단어는 빠지며, 단어가 없으면 줄도 없음 |
| `word WORD …` | 만들고 있는 줄에 단어 추가. 빈 `emit`이 줄을 끝냄 |
| `if EXPR` … `else` … `end` | 조건: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b`(a, 아니면 b) |
| `for tool in tools` … `end` | 프로그램이 쓰는 도구마다 한 번씩 |
| `set NAME EXPR` | 값을 기억(`set offset tool.number`) |
| `reset NAME …` | 모달 단어를 잊음(그룹, `Z` 같은 주소 문자, 또는 `at.z`) |
| `do rapid X Y Z` | 한 점에 대해 `rapid` 이벤트 실행 |

단어는 `{variable|filter}` 구멍이 있는 입력 텍스트입니다. 필터는 `upper`, `lower`, `pad:N`(0 채우기), `cut:N`(앞 N글자), `safe`(주석에 안전한 ASCII), `int`입니다. `~`로 끝나는 단어는 **모달**입니다. 마지막으로 쓴 것과 다를 때만 씁니다(`G1~`, `X{x}~`). `~!`로 끝나는 단어는 매번 쓰며 여전히 기억됩니다. 변수가 아닌 이름은 일반 텍스트입니다(`G81`, `mist`). 숫자는 0.001 mm로 반올림하며 끝의 0 없이 씁니다.

## 포스트가 할 수 없는 것

포스트는 이동이 어떻게 쓰일지만 결정하며, 그 이상은 하지 않습니다. 도구 경로를 바꿀 수 없고, 작업 순서를 바꿀 수 없으며, 호를 나눌 수 없고, 축을 추가할 수 없으며, 기계의 이동 범위나 기구학을 알 수 없고, 좌표에 대한 산술을 할 수 없습니다(`+`가 없습니다). 회전 위치 자체는 포스트가 아니라 셋업에 설명된 기계에서 옵니다. 포스트는 그 부호나 문자는 바꿀 수 있지만 기구학은 바꿀 수 없습니다. 공구 수명과 서브프로그램 사이클은 구현되어 있지 않습니다. 다른 프로그램의 `.cps` 방식 포스트 파일은 불러올 수 없습니다. 이것은 다르고 더 단순한 형식입니다.
