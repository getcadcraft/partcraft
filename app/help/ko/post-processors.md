---
title: 편집할 수 있는 포스트
summary: 포스트는 공구 경로를 제어 장치용 G-code로 바꾸는 짧은 텍스트 파일입니다. 기본 제공 포스트 하나를 복사하고, 필요한 줄(줄 번호, 공구 교환, 원점 복귀 이동, 종료 코드)을 바꾼 다음, 입력하는 동안 작성되는 G-code를 확인하고 부품과 함께 보관하십시오.
keywords: 포스트, 포스트 프로세서, 포스트프로세서, G-code, NC, GRBL, LinuxCNC, 포스트 편집, 사용자 포스트, cpost, 공구 교환, M6, G43, 고정 사이클, 줄 번호, 모달, 이벤트, 변수
from: 36ab8a38
---

같은 공구 경로라도 제어 장치마다 다르게 써야 합니다. 줄 번호 사용 여부, 공구 교환 방식(`M6` 또는 일시 정지), 원점 복귀(`G28` 또는 `G53`), 프로그램 종료(`M30` 또는 `M2`)가 다릅니다. **포스트**는 그 방법을 정하는 짧은 텍스트입니다. PartCraft의 기본 제공 포스트 세 가지(Fanuc 스타일, GRBL, LinuxCNC)도 이 형식으로 작성되어 있으므로, 직접 만드는 포스트는 그중 하나를 복사해서 시작할 수 있습니다.

절삭하기 전에 기계 자체의 시뮬레이터에서 출력을 확인하고, 먼저 소재 위 허공에서 실행하십시오. 기본 제공 포스트는 이 형식이 생기기 전과 정확히 같은 내용을 출력합니다(테스트에서 수백 개의 프로그램 출력을 바이트 단위로 비교합니다). 하지만 여기의 어떤 내용도 사용자의 기계에서 검증된 것은 아니며, 변경한 포스트는 사용자가 직접 검증해야 합니다.

## 만들기

가공 작업 공간의 **포스트** 아래에서:

- 기본 제공 제어 장치에서 {{ui:포스트 편집…}} 선택: 자신만의 **복사본**이 열립니다. 직접 만든 포스트에서 선택하면 해당 포스트가 열립니다.
- {{ui:새 포스트…}} 선택: 모든 이벤트가 들어 있는 작은 빈 포스트에서 시작합니다.
- {{ui:포스트 파일 가져오기…}} 선택: 편집기의 **파일로 저장…**에서 얻은 `.cpost` 텍스트 파일을 읽습니다.

편집기에는 입력하는 대로 텍스트, 읽을 수 있는지(그리고 잘못된 줄)를 알려 주는 줄, 그리고 포스트가 작성하는 G-code가 표시됩니다. **미리 보기 기준**에서는 모든 이벤트를 실행하는 작은 샘플 프로그램이나 이 부품 자체의 프로그램을 고릅니다. {{ui:저장}}: 포스트를 부품 파일에 보관하고(최대 20개), 이를 제어 장치로 선택합니다. 포스트는 부품과 함께 이동합니다. 다른 부품에서 쓰려면 파일로 저장한 다음 그 부품에서 가져오십시오.

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

`//`로 시작하는 줄과 빈 줄은 무시됩니다. 맨 위에는 설정이 오고, 그다음 이벤트마다 `on <event>` 블록이 하나씩 있으며, 각 블록의 끝은 `end`입니다. 빼 둔 이벤트는 아무것도 쓰지 않습니다.

| 설정 | 의미 |
|---|---|
| `post <id>` | 포스트 ID: 글자, 숫자, `-`, `_` |
| `name <text>` | 제어 장치 목록에 표시되는 이름 |
| `extension <ext>` | 파일 확장자: nc, ngc, tap … |
| `line-numbers 10` / `off` | 모든 `emit` 줄에 `N10`, `N20` … 번호를 붙이거나, 번호 없음 |
| `decimal-point yes` / `no` | `10` 대신 `10.` (주석에는 소수점이 들어가지 않음) |
| `canned-cycles yes` / `no` | `no`이면 구멍이 나타내는 G0/G1 이동으로 씁니다 |
| `modal <group> <words>` | 그룹의 단어(`modal motion G0 G1 G2 G3`)를 값이 바뀔 때만 씁니다 |

## 이벤트

프로그램은 다음 순서로 이벤트가 실행됩니다: `start`, 그다음 각 작업마다 `operation`, 공구가 바뀔 때 `tool-change`, 속도가 바뀔 때 `spindle`, 첫 번째 급속 이동 전에 첫 점까지 가는 이동인 `approach`, 그리고 `coolant-on`. 이후 작업의 이동은 `rapid`, `feed`, `arc` 이벤트로 실행되고, 각 고정 사이클은 `cycle-start`, 구멍마다 `cycle-hole` 하나, `cycle-end` 순으로 실행됩니다. 마지막은 `end`입니다.

각 이벤트는 자신의 이동 종류에 맞는 변수를 `{name}` 형태로 쓸 수 있습니다: 프로그램(`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), 소재(`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), 공구(`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), 작업(`op.name`, `op.type`), `rpm`, 이동 점(`x`, `y`, `z`, `f`, 그리고 축이 바뀌면 참인 `moved`), 호(`arc.g` 2 또는 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`), 구멍(`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). 편집기의 **이벤트 및 변수** 목록에서 어떤 이벤트가 어떤 변수를 보는지 확인할 수 있습니다. 읽고 설정할 수 있는 상태는 `cool`, `offset`, 그리고 `at.x`, `at.y`, `at.z`, `at.f`(마지막으로 쓴 값)입니다.

## 문

| 문 | 역할 |
|---|---|
| `raw TEXT` | 입력한 그대로의 줄 (줄 번호 없음) |
| `comment TEXT` | `(TEXT)`, 비ASCII 문자와 괄호는 제거됨 |
| `emit WORD WORD …` | 단어로 이루어진 줄. 빈 단어는 빠짐; 단어가 없으면 줄도 없음 |
| `word WORD …` | 만드는 중인 줄에 단어 추가; 단독 `emit`은 줄을 끝냄 |
| `if EXPR` … `else` … `end` | 조건: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, 아니면 b) |
| `for tool in tools` … `end` | 프로그램이 쓰는 공구마다 한 번씩 |
| `set NAME EXPR` | 값을 기억(`set offset tool.number`) |
| `reset NAME …` | 모달 단어를 잊음(그룹, `Z` 같은 주소 문자, 또는 `at.z`) |
| `do rapid X Y Z` | 점에 대해 `rapid` 이벤트를 실행 |

단어는 `{variable|filter}` 구멍이 있는 텍스트입니다. 필터는 `upper`, `lower`, `pad:N`(0으로 채움), `cut:N`(처음 N글자), `safe`(주석에 안전한 ASCII), `int`입니다. 끝이 `~`인 단어는 **모달**입니다. 마지막으로 쓴 값과 다를 때만 씁니다(`G1~`, `X{x}~`). 끝이 `~!`인 단어는 매번 쓰고 기억도 합니다. 변수가 아닌 이름은 일반 텍스트입니다(`G81`, `mist`). 숫자는 0.001 mm까지 반올림되며, 끝의 0 없이 씁니다.

## 포스트가 할 수 없는 일

포스트는 이동을 어떻게 쓸지만 정합니다. 그 밖의 일은 하지 않습니다. 공구 경로를 바꾸거나, 작업 순서를 정하거나, 호를 나누거나, 축을 추가하거나, 기계의 이동 범위나 기구학을 알거나, 좌표에 산술을 할 수는 없습니다(`+`가 없습니다). 프로빙, 공구 수명 및 하위 프로그램 사이클, 4축 및 5축 출력, 선반 코드는 아직 만들지 않았습니다. 다른 프로그램의 `.cps` 형식 포스트 파일은 불러올 수 없습니다. 이 형식은 다른, 더 단순한 형식입니다.
