---
title: 공학 라이브러리
summary: SI 단위로 된, 읽기 쉬운 스크립트 형태의 교과서 공식입니다. 모든 결과에 출처가 있습니다. 배관과 채널의 유동, 열전달과 열교환기, 압력 부품, 기체 역학, 물과 공기의 물성, 재료, 그리고 검사되는 단위를 다룹니다. 각 항목의 용도와 한계를 설명합니다.
keywords: 공학, 라이브러리, 단위, Darcy-Weisbach, Colebrook, Reynolds, 마찰 계수, Dittus-Boelter, Gnielinski, NTU, 효율, LMTD, 핀, Barlow, Lamé, 노즐, 등엔트로피, Mach, 초킹 유동, 물, 공기, 물성, 재료, 출처
from: 786ef967
---

공학 라이브러리는 스크립트 작업 공간의 라이브러리(`craftlib/eng`)에 있는 스크립트 모음입니다. 각 스크립트는 위에서 아래로 읽을 수 있는 함수이며, 그 앞에 **방법**, **단위**, **한계**, **참고 문헌**, 그리고 계산된 예가 있는 **검사**를 밝힌 머리말이 있습니다. 전체적으로 SI 단위를 사용하며, 단위와 **출처**를 가진 값을 반환하므로 데이터 시트에 각 수치의 출처를 표시할 수 있습니다.

## 검사되는 단위

`to_si(10, 'bar', 'Pa')`는 값을 변환하며, 압력이 필요한 자리에 길이처럼 다른 것을 측정하는 단위는 거부합니다. `from_si`, `unit_convert(1, 'bar', 'psi')`, `unit_kind('W/(m K)')`("열전도율")도 같은 방식으로 동작합니다. `temp_k(25, 'C')` 및 `temp_from_k`는 오프셋이 있는 온도를 변환합니다.

## 물성

- `fluid('water', T)`와 `fluid('air', T, p)`: 밀도, 점도, 열전도율, 비열, 프란틀 수. 물은 0~100 °C, 공기는 250~600 K 범위입니다. 그 범위를 벗어나면 외삽하지 않고 멈춥니다.
- `material('ss304')`: 영률, 푸아송 비, 밀도, 항복점, 열전도율, 비열, 열팽창. 시뮬레이션과 같은 데이터 시트의 상온 값입니다. 실제 설계에서는 공급업체의 인증된 수치를 사용하십시오. 온도 곡선은 아직 만들지 않았습니다.

## 배관과 채널의 유동

`reynolds`, `hydraulic_diameter`, `friction_factor`(층류를 먼저 계산하고, 난류에는 콜브룩 방정식을 사용합니다. 2300~4000 범위에는 신뢰할 만한 공식이 없으며 그렇다고 밝힙니다), `darcy_weisbach`, `minor_loss`, `pipe_flow`(원형 배관, 모든 것을 한 번에), `rect_channel`(Shah와 London 근사에 따른 직사각 덕트의 층류).

## 열전달

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube`(층류 또는 난류를 선택하고 사용한 상관식을 명시합니다), `htc`, `fin_efficiency`, `lmtd`, `effectiveness`, 및 `ntu_for`(대향류, 병류, 셸앤튜브, 직교류, 단일 변화 유체의 효율-NTU 관계), `hx_size`(작업에 필요한 UA 크기입니다. 작업을 만족할 수 없으면 가능한 최대치를 알려 줍니다).

## 압력 부품

`allowable_stress`(항복점을 안전율로 나눈 값), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder`(라메, 원주 방향 또는 전단 기준), `wall_sphere`. 이것들은 교과서 여유값이며 **압력 용기 규격 계산이 아닙니다**. 부식 여유, 이음 효율, 규격 계수가 없습니다.

## 기체 역학

`isentropic`(마하 수에서의 비율), `mach_from_area`, `choked_flow`, `throat_area` 및 `exit_mach`는 마찰, 열, 충격파가 없는 완전 기체용입니다.

## 결과 확인

`check_stress`, `check_thermal`, `check_flow`는 스크립트에서 만든 생성 부품에 대해 PartCraft 자체의 응력, 전도, 유동 솔버를 실행하고, 최대 응력과 변위, 온도와 열유량, 채널 네트워크의 투과율을 읽어 옵니다. 솔버 자체는 변경하지 않습니다. 응력과 온도 검사는 복셀을 사용하므로 곡면은 계단 모양이 되며, 날카로운 내부 모서리나 점하중 아래의 응력은 복셀 크기에 따라 달라집니다.
