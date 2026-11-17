---
title: 스크립트와 명령행
summary: 파트 전체를 읽을 수 있는 텍스트로 쓰는 PartCraft 스크립트 형식(.pcscript)과, 화면 없이 파트를 만들고, 변경하고, 롤백하고, 검사하는 partcraft 명령행 도구를 설명합니다.
keywords: 스크립트, pcscript, 텍스트, 명령행, cli, 터미널, 일괄 처리, 자동화, 검사, lint, 빌드, 내보내기, 버전 관리, diff, 파라미터 스크립트
from: c56df222
---

신중한 모델링은 버튼 조작보다 원칙을 지키는 일에 가깝습니다. 텍스트로 작성된 파트는 읽고, 검토하고, 줄 단위로 비교하고, 스크립트로 다시 빌드할 수 있습니다. PartCraft는 양방향을 지원합니다. 모든 파트를 스크립트로 쓸 수 있고, 스크립트로 파트를 만들 수 있습니다.

## 앱에서

{{ui:Parameters}} 탭의 **스크립트** 아래에서:

- {{ui:Save as script}} 명령은 열려 있는 파트를 `<이름>.pcscript` 파일로 다운로드합니다.
- {{ui:Open script}} 명령은 `.pcscript` 파일로 파트를 만듭니다. 오류는 줄 번호와 함께 보고되며, 아무것도 대체되지 않습니다.

## 스크립트 형식

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

규칙은 다음과 같습니다:

- 왼쪽 가장자리에서 시작하는 줄은 문장을 시작합니다: `pcscript`, `part`, `param`, 피처 유형(`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` 및 최신 유형)과 그 뒤의 이름, 또는 `rollback <feature>`.
- 들여쓴 줄은 위 문장의 설정입니다. 설정만 단독으로 쓴 경우(`through`, `reverse`, `suppressed`)는 "예"를 뜻합니다.
- 숫자 설정은 숫자이거나, `=`와 식입니다. 식을 쓰면 방정식이 됩니다: `depth = thick`.
- 스케치에서 `on`은 평면을 지정합니다(`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`). 기하 요소는 `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>`(반시계 방향) 또는 `spline <name> fit|control <points>`로 씁니다. 구속 관계는 종류와 연결하는 이름으로 씁니다(`O`는 원점). 치수는 값 또는 `= 식`으로 끝납니다.
- 기하 요소나 관계 줄의 선택 설정은 줄 끝에 대괄호로 쓰며 `;`로 구분합니다: `[construction]`, `[side -1; label 5, 3]`.
- `#`는 주석을 시작합니다(줄 시작 또는 공백 뒤). 공백이 있는 이름은 "큰따옴표"로 묶습니다.
- 피처 ID는 쓰인 순서대로 f1부터 셉니다. 모서리와 면 참조는 이를 사용합니다. 예: `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- 형식에 대응하는 단어가 없는 설정은 `json`과 값으로 씁니다. 그 값은 그대로 읽혀 돌아옵니다.

앱에서 저장한 스크립트에는 모든 설정이 포함되므로, 같은 파트로 열립니다. 가져온 STEP 솔리드는 앱에서 저장할 때 스크립트 안에 기록되고, 명령행에서는 `step-file`로 지정된 별도의 `.step` 파일로 기록됩니다.

## 명령행 도구

이 도구는 Node.js 24가 설치된 컴퓨터에서 CadCraft 소스 사본으로 실행합니다: `node tools/partcraft-cli/partcraft.mjs <command>`. 개발자용 도구이며 앱과 같은 모듈을 사용합니다. 파트는 `.partcraft.json` 파일 또는 `.pcscript` 스크립트입니다.

| 명령 | 기능 |
|---|---|
| `info <part>` | 피처, 파라미터, 롤백 막대, 만들어진 솔리드의 부피와 크기 |
| `params <part>` | 모든 파라미터와 방정식 및 그 값 |
| `set <part> width=150 Base.depth==thick` | 순방향: 파라미터 변경, 숫자 연결(`==` 또는 식), 일반 숫자 설정 |
| `drive <part> Base.depth=12` | 역방향: 구동되는 숫자 뒤의 파라미터 계산(`--prefer width`로 선택) |
| `build <part> --out x.step` | `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` 또는 매크로(`.swb`)로 저장 |
| `build <part> --table sizes.csv --out-dir sizes` | 설계 테이블 행마다 파일 하나 |
| `variants <part> --out-dir d` 또는 `--zip f.zip` | 모든 구성을 STEP, IFC, DWG와 미리 보기, 변형 테이블, 라이브러리 항목으로 저장(`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); [변형 팩 만들기](topic:variant-pack) 참조 |
| `script <in.pcscript> -o part.json` | 스크립트에서 파트로 |
| `to-script <part> -o part.pcscript` | 파트에서 스크립트로 |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | 파일의 롤백 막대 이동 |
| `check <part> [--strict]` | 아래의 원칙 검사 |

`build`는 `--set name=value`(이번 빌드에만 적용)와 `--upto <feature>`도 받습니다. 모든 명령은 `--json`을 받습니다. 종료 코드: 0 정상, 1 문제 발견, 2 명령 입력 오류. 스크립트는 제자리에서 다시 쓰지 않으므로, 변경된 사본을 저장하려면 `-o`를 지정하십시오.

## 검사

`check`는 파트를 나중에 변경하기 어렵게 만드는 요소를 보고합니다:

| 발견 항목 | 분류 |
|---|---|
| 과잉 정의된 스케치(상충하거나 반복된 관계) | 오류 |
| 빌드되지 않는 피처 | 오류 |
| 오류가 있는 파라미터나 방정식, 또는 서로 참조하는 파라미터 | 오류 |
| 자유도와 함께 정의가 부족한 스케치 | 경고 |
| 어떤 파라미터도 구동하지 않는, 피처와 치수에 직접 입력된 숫자 | 경고 |
| 아무도 쓰지 않는 파라미터 | 경고 |
| 억제된 피처, 또는 끝에 있지 않은 롤백 막대 | 경고 |

`--strict`를 쓰면 모든 경고가 오류로 바뀌므로, 완전히 구동되지 않은 파트를 거부하는 빌드 스크립트를 만들 수 있습니다.

:::note
`.swb` 매크로 출력은 대부분의 작업장에서 쓰는 파트 모델러용입니다. 그 프로그램 안에서 실행하면 그곳에 파트를 만듭니다. 여기서는 그 프로그램에서 실행해 보지 않았습니다(당사 서버에서는 사용할 수 없음). 따라서 시험되지 않은 것으로 취급하십시오.
:::
