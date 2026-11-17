---
title: Lua 스크립트
summary: Lua 5.4로 스크립트 작업 공간의 스크립트를 작성합니다: 내장 함수의 cs 테이블, 인덱싱과 산술이 가능한 값으로서의 배열, 공유 작업 공간 ws, 출력과 결과 표시, 그리고 꺼진 기능.
keywords: Lua, Lua 5.4, 스크립트, 언어, cs 테이블, ws, 작업 공간, userdata, 텐서, 배열, 행렬, print, display, 샌드박스
from: 82c668b3
---

Lua는 [스크립트 작업 공간](topic:craftscript)의 두 번째 언어입니다. 편집기 위의 언어 상자에서 **Lua**를 선택하십시오(`.lua` 파일은 자동으로 Lua에서 열립니다). Lua와 CraftScript는 같은 변수와 같은 내장 함수를 공유하므로, Lua 스크립트는 CraftScript 스크립트에서 만든 것을 사용할 수 있고 그 반대도 가능합니다.

## 기본 사항

```
-- 모든 내장 함수는 cs 테이블에 있습니다
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1부터 시작(CraftScript와 같음)
print(K(1, 1), #K)             -- 원소 하나; 원소의 개수

-- 작업 공간: 모든 스크립트가 보는 같은 변수
ws.total = K(1, 1) * 2
print(ws.total)

-- 함수 하나에서 여러 결과 받기
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)`는 내장 함수를 호출하고 첫 번째 결과를 반환합니다. `cs.call(name, n, …)`은 `n`개의 결과를 반환합니다.
- `cs.tensor({1, 2, 3})`는 행을, `cs.tensor({{1, 2}, {3, 4}})`는 행렬을 만듭니다.
- 배열, 희소 행렬, 메시, 필드는 메서드를 가진 값입니다: `t(i, j)` 또는 `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()`(전치), `t:totable()`. `+ - * / ^`의 의미는 CraftScript에서와 같습니다(`*`는 행렬 곱). `t:times(u)`는 원소별로 곱합니다.
- 1×1 배열인 숫자는 일반 Lua 숫자로 전달됩니다.
- `ws.name`으로 공유 작업 공간을 읽고 쓸 수 있습니다. 스크립트가 남긴 전역 변수도 실행이 끝나면 그곳에 저장됩니다.
- `print(…)`는 콘솔에 씁니다. `cs.show(f)`, `cs.plot(y)` 및 기타 표시 함수는 CraftScript에서와 같이 작동합니다.

## 해석 라이브러리 호출하기

해석 라이브러리의 함수(라이브러리 탭)와 파트 자체 스크립트가 정의한 CraftScript 함수도 마찬가지로 `cs`를 통해 호출합니다:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- 두 개의 출력
```

이 함수들은 스크립트가 시작되기 전에 찾아지므로, 스크립트에 이름을 그대로 쓰십시오: `cs.static_tet(` 또는 `cs.call('static_tet', …)`. 스크립트 실행 중에 조합된 이름은 내장 함수에만 도달합니다. `cs.struct({ … })`로 만든 구조체는 CraftScript 구조체이고, 이들의 Lua 목록(`{ cs.struct(…), … }`)은 셀입니다. 라이브러리 설정이 기대하는 형태가 이것입니다. 라이브러리 함수 안에서 문제가 생기면 메시지에 함수 이름과 줄이 표시되고, 이를 호출한 사용자의 줄을 가리킵니다.

## 비활성화된 기능

스크립트는 파일, 네트워크, 페이지에 접근할 수 없습니다. `io`, `os`(시계 제외), `require`, `dofile`, `loadfile`, `debug`는 제거되어 있습니다. 데이터를 가져오려면 스크립트 작업 공간의 {{ui:Open}} 및 변수를 사용하십시오. 단계 한도와 중지는 CraftScript에서와 같이 작동합니다.
