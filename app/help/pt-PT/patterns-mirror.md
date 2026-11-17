---
title: Operações de matriz e espelho
summary: Repita operações em linha com Linear, à volta de um eixo com Circular, e copie operações ou o corpo inteiro através de um plano com Espelhar.
keywords: matriz, matriz linear, matriz circular, matriz polar, array, espelhar, simétrico, copiar operações, círculo de furos, semente, espelhar corpo
from: 702e9edb
---

As matrizes e os espelhos copiam operações que já construiu. As cópias fazem parte do histórico: se alterar a original, as cópias acompanham a alteração.

O que é copiado é aquilo que a operação faz: uma matriz de saliência acrescenta material, uma matriz de corte ou de furo remove-o. As matrizes podem voltar a ser matrizadas e espelhadas. Um sólido STEP importado também pode ser copiado; boleados, chanfres e cascas não.

## Matriz linear

1. Selecione no histórico a operação a copiar (por exemplo, um Furo ou um Corte). Sem nada selecionado, usa-se a última operação sólida.
2. Escolha {{ui:Linear}}. Aparecem três cópias afastadas 20 mm ao longo de X.
3. No painel direito, defina:

| Definição | O que faz | Predefinido |
|---|---|---|
| **Operações a copiar** | Marque todas as operações a copiar. Só são listadas as operações acima da matriz | A operação selecionada |
| **Direção** | Eixo X, eixo Y, eixo Z, uma linha ou linha de eixo de qualquer esboço anterior, o eixo de uma revolução, ou uma aresta escolhida | Eixo X |
| **Espaçamento (mm)** | Distância entre vizinhos | 20 |
| **Número** | Total, **incluindo a original** (de 1 a 1000) | 3 |
| **Inverter direção** | As cópias seguem para o outro lado | Desligado |

### Usar uma aresta como direção

1. Clique numa aresta reta da peça na vista. O painel direito indica **Aresta** e mostra o seu comprimento.
2. Escolha {{ui:Linear}}: a matriz segue essa aresta.

Ou selecione a matriz, escolha uma aresta e escolha "Aresta escolhida (usar a escolhida agora)" em **Direção**. Uma aresta escolhida fica fixa no espaço: não acompanha alterações posteriores. Uma linha de esboço segue o seu esboço.

## Matriz circular

1. Selecione a operação a copiar (por exemplo, um furo perto da borda de um disco).
2. Escolha {{ui:Circular}}. Aparecem seis cópias igualmente espaçadas em toda a volta.
3. Defina:

| Definição | O que faz | Predefinido |
|---|---|---|
| **Operações a copiar** | Como em Linear | A operação selecionada |
| **Eixo** | Eixo X, Y ou Z, uma linha de esboço, o eixo de uma revolução, ou uma aresta escolhida | O eixo da última revolução, se existir; senão, o eixo Y |
| **Ângulo (°)** | 360 espaça as cópias igualmente em toda a volta. Um valor menor espalha-as por esse ângulo, com a primeira e a última nas extremidades | 360 |
| **Número** | Total, incluindo a original | 6 |
| **Inverter direção** | Roda para o outro lado | Desligado |

Os eixos globais passam pela origem. Para um disco não centrado na origem, use uma linha de eixo de esboço ou o eixo de uma revolução.

### Exemplo: os oito furos de parafuso de uma flange

1. Faça a revolução da flange (ver [Revolver uma peça torneada](topic:revolve)) em torno do eixo Y.
2. Esboce na face superior plana da flange, coloque um ponto no círculo de furos e crie um Furo.
3. Com o Furo selecionado, escolha {{ui:Circular}}. O eixo já está definido como "Axis of Revolve1".
4. Defina **Número** como `8`.

## Espelhar

1. Selecione no histórico a operação a espelhar, ou não selecione nada para espelhar **o corpo inteiro tal como está construído até agora**.
2. Escolha {{ui:Mirror}}. Espelha em relação ao **Plano direito**.

Para espelhar o corpo inteiro em relação a uma face da peça, clique primeiro nessa face plana e depois escolha {{ui:Mirror}}. (Clicar numa face limpa a seleção do histórico, por isso isto espelha sempre o corpo inteiro.)

Definições no painel direito:

- **Espelhar**: marque **O corpo inteiro (tal como está construído até agora)**, ou desmarque e marque as operações a copiar.
- **Plano de espelhamento**: Plano frontal, Plano superior, Plano direito, a face que usa agora ("Uma face de Extrude1" ou "Um plano fixo"), ou "A face escolhida agora". Para espelhar operações escolhidas em relação a uma face: selecione o Espelhar no histórico, clique na face na vista e escolha "A face escolhida agora".

Espelhar o corpo inteiro em relação a uma face duplica a peça: por exemplo, transforma um suporte de metade numa peça completa.

## Mensagens

- "Construa primeiro uma operação para copiar." ou "Construa primeiro um sólido." Ainda não há nada sólido para copiar.
- "Escolha as operações a copiar." Todas as caixas **Operações a copiar** ficam desmarcadas.
- "Extrude2 não tem sólido para copiar." Essa operação falhou ou está suprimida.
- "Fillet1 altera as arestas ou as paredes do corpo; não pode ser copiada. Copie as operações que criam sólidos (extrusões, revoluções, furos, importações)." Boleados, chanfres e cascas não podem ser matrizados nem espelhados; faça primeiro a matriz e depois o boleado.
- "Ainda não há corpo para espelhar."

:::note
As cópias de uma matriz não podem ser saltadas uma a uma, e uma matriz não pode seguir uma curva de esboço. As matrizes e os espelhos de esboço também ainda não estão implementados: desenhe a geometria repetida do esboço à mão ou com **Adicionar por coordenadas**.
:::
