---
title: 생성기 작성
summary: 생성기는 입력을 선언하는 주석 줄이 있는 CraftScript, Lua 또는 Python 스크립트입니다. 입력이 양식이 되는 방법, 스크립트가 남겨야 하는 값(body, sheet, problems), 작은 완전한 예제, 스크립트를 생성기로 여는 방법을 설명합니다.
keywords: 생성기, 작성, 스크립트, craftscript, 머리글, 입력, @input, @generator, body, 시트, problems, to_body, mfg_check, 데이터 시트, 예제, 격자, 필드
from: ed8a5ed8
---

생성기는 맨 위에 주석 몇 줄이 있는 일반 스크립트([CraftScript](topic:craftscript), Lua 또는 Python)입니다. PartCraft는 주석을 읽어 양식을 만들고, 스크립트는 이미 설정된 변수로 입력값을 읽습니다.

## 머리글

다음 내용을 주석 줄에 넣으십시오(CraftScript에서는 `%`, Lua에서는 `--`, Python에서는 `#`):

```
% @generator 열교환기
% @input mdot: kg/s = 0.2 [0.01 .. 10] "질량 유량"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "표면"
% @input solid: = true
% @input note: = "text"
```

입력은 `name: unit = default` 형식이며, 선택적으로 범위 `[min .. max]`(숫자 값은 이 범위 안에 유지됨), 선택 목록 `{a, b, c}`, 따옴표로 묶은 라벨을 지정할 수 있습니다. 단위는 양식의 표시용 라벨일 뿐입니다: **값은 항상 그 단위로 전달됩니다**. 따라서 SI 단위가 필요한 스크립트는 값을 변환해야 합니다. `to_si(value, 'kg/s', 'kg/s')`는 단위가 의도한 대로인지도 확인합니다. 이름은 문자, 숫자, 밑줄로 구성됩니다. 예약된 이름: `body`, `sheet`, `problems`.

## 스크립트가 남기는 값

| 변수 | 내용 |
|---|---|
| `body` | **필수.** 보통 `[body, info] = to_body(field, h)`에서 얻은 표면 메시입니다. 실행이 끝나면 복구되고 검사됩니다. |
| `sheet` | 선택 사항. 각 필드가 숫자 또는 텍스트인 구조체이거나, `value`, `unit`, `ref`, `note` 필드를 가진 구조체입니다. 데이터 시트가 됩니다. |
| `problems` | 선택 사항. `mfg_check(field, 'sls', struct(), h)`의 `problems` 셀 또는 직접 작성한 항목입니다. 검사와 문제 목록으로 전달됩니다. |

## 완전한 간단한 예제

```
% 벽이 있는 속이 빈 정육면체.
% @generator 속이 빈 정육면체
% @input side: mm = 12 [4 .. 40] "측면"
% @input wall: mm = 1.5 [0.5 .. 5] "벽"
% @input h: mm = 0.5 [0.25 .. 2] "복셀 크기"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', '메시 기준');
```

닫힌 상자가 만들어지며, 검사에서는 분말 공정에 대해 밀폐된 내부를 오류로 보고합니다. 복셀 크기 `h`: 원하는 가장 얇은 벽의 3분의 1 이하로 설정하십시오. 벽이 약 3개 복셀보다 얇으면 신뢰할 수 없습니다.

## 필드

기본 형상: `field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve`(프로파일로 만든 회전체), `tpms`(자이로이드, 슈바르츠 P, 다이아몬드 곡면. 셀 크기와 벽 두께를 부품 전체에 걸쳐 바꿀 수 있음), `lattice` 및 `lattice_beams`, `along`(경로를 따라 만든 둥근 채널), 불리언 연산 `field_union`, `field_intersect`, `field_subtract`, 부드러운 `field_blend`, 그리고 `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)`는 점에서의 부호 있는 거리를 줍니다(내부는 음수). `field_voxel`: 솔버용 복셀을 만듭니다. [필드](topic:fields)에서 필드가 무엇인지 설명합니다.

알아두면 좋은 제한 사항: 시트 벽이 셀 크기의 약 4분의 1보다 두꺼우면 채널이 막힙니다. 약 3개 복셀보다 얇은 형상은 찌그러질 수 있습니다. `along` 함수는 둥근 원뿔을 이어 붙이므로, 반지름이 빠르게 변하면 볼록한 부분이 생깁니다(프로파일에는 `field_revolve`를 사용하십시오).

## 스크립트를 생성기로 열기

{{ui:엔지니어}} 작업 공간에서 {{ui:열기}} 버튼을 누르고 파일을 선택하십시오. `@generator` 또는 `@input` 줄이 없으면 스크립트를 열 수 없습니다. 설정할 입력이 없기 때문입니다. 생성기는 이 브라우저에 최대 20개까지 보관되며, {{ui:제거}}를 누르면 삭제됩니다. 이 생성기로 시작한 바디에는 스크립트 사본이 담기므로, 파트는 원본 스크립트에 의존하지 않습니다.

파일 하나에 여러 생성기를 담을 수도 있습니다. JSON 묶음 형식은 다음과 같습니다: `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
