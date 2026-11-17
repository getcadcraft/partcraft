---
title: 일러스트레이트에서 설명서 시작하기
summary: 일러스트레이트 작업 공간은 설계로부터 설명서를 만듭니다. 뷰, 풍선과 부품표가 있는 분해 선 그림, 단계별 작업 지침, 애니메이션, 고객이 CAD 없이 열 수 있는 3D 파일을 제공합니다. 설명서는 독립된 파일입니다.
keywords: 일러스트레이트, 설명서, 기술 일러스트, 문서, 분해 뷰, 부품표, 작업 지침, partcraft-manual
from: e447e0ab
---

**{{ui:Illustrate}}**는 설계 외에 사람들이 필요로 하는 문서를 만드는 작업 공간입니다. 풍선과 부품표가 있는 분해 뷰, 설명서용 선 그림, 단계별 작업 지침, 애니메이션, 고객이 CAD 없이 열 수 있는 3D 파일을 만듭니다. 도구 모음 맨 앞의 {{ui:Workspace}} 전환기에서 {{ui:Illustrate}}를 고르세요.

**설명서**는 독립된 파일입니다 (`<name>.partcraft-manual.json`). 모든 파트의 형상 복사본, 제품 트리, 파트 속성과 원본을 가리키는 링크를 저장하므로, 설계가 계속 바뀌는 동안에도 설명서를 작업할 수 있습니다. 설계가 바뀌면 [설계에서 업데이트](topic:illustrate-update)로 변경 사항을 가져옵니다.

## 시작하기

{{ui:Manual}} 그룹의 {{ui:New}}를 클릭한 다음 다음 중 하나를 고르세요.

- {{ui:From the open part}}: 설계에서 열려 있는 파트.
- {{ui:From the open assembly}}: 어셈블리가 열려 있으면 대신 표시됩니다. 그 파트, 위치, 품번, 재료와 분해 뷰를 함께 가져옵니다.
- {{ui:From an assembly file…}}: 저장된 `.partcraft-asm.json` 파일. PartCraft가 먼저 파트를 만듭니다.
- {{ui:From another file…}}: glTF (.glb, .gltf), OBJ, STL 또는 3MF. 파일의 트리와 이름을 유지하며, 같은 파트가 두 번 놓인 경우 (같은 형상이 두 번 배치됨) 수량이 있는 파트 하나가 됩니다. STL과 OBJ 파일은 단위를 알려 주지 않으므로 묻습니다. STL 파일은 Z 위쪽으로 읽고, glTF와 3MF는 자체 방향을 알려 줍니다.

설명서가 열려 있는 동안 일러스트레이트는 설명서 자체의 파트 복사본을 보여 줍니다. 설계에서 열려 있던 파트나 어셈블리는 설계로 돌아갈 때까지 숨겨집니다.

## 저장과 열기

설명서 그룹의 {{ui:Save}}는 설명서를 저장합니다 (단축키 {{key:Mod+S}}). {{ui:Open}}는 설명서를 엽니다. 일러스트레이트에서의 모든 변경은 설명서 고유의 기록에서 한 단계입니다. {{ui:Undo}}와 {{ui:Redo}}는 일러스트레이트가 열려 있는 동안 설명서에 작용합니다.

## 아직 만들지 않은 기능

- STEP 파일은 아직 {{ui:From another file…}}에서 열 수 없습니다. 대신 설계에서 STEP을 열고 (솔리드 바디로 가져옵니다: [STEP 파일 열기](topic:import-step) 참조), 설명서는 {{ui:From the open part}} 항목으로 시작하거나 glTF, 3MF, OBJ 또는 STL로 저장하세요.
- ModelCraft와 BimCraft는 아직 모델을 일러스트레이트에 직접 넘길 수 없습니다. glTF (.glb)로 저장한 다음 {{ui:From another file…}} 항목을 사용하세요.

다음: [뷰와 모양](topic:illustrate-views).
