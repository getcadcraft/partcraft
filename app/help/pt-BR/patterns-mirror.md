---
title: Recursos de matriz e espelhamento
summary: Repita recursos em linha com Linear, ao redor de um eixo com Circular, e copie recursos ou o corpo inteiro por um plano com Espelhar.
keywords: matriz, matriz linear, matriz circular, matriz polar, array, espelho, simétrico, copiar recursos, círculo de furos, semente, espelhar corpo
from: 702e9edb
---

Matrizes e espelhos copiam recursos que você já criou. As cópias fazem parte do histórico: se você alterar o original, as cópias acompanham.

O que é copiado é o que o recurso faz: uma matriz de saliência adiciona material, uma matriz de corte ou de furo remove. Matrizes podem ser matrizadas e espelhadas de novo. Um sólido STEP importado também pode ser copiado; arredondamentos, chanfros e cascas não podem.

## Matriz linear

1. Selecione o recurso a copiar no histórico (por exemplo um Furo ou um Corte). Sem nada selecionado, é usado o último recurso sólido.
2. Escolha {{ui:Linear}}. Três cópias aparecem espaçadas 20 mm ao longo de X.
3. No painel da direita, defina:

| Configuração | O que faz | Padrão |
|---|---|---|
| **Recursos a copiar** | Marque cada recurso a copiar. Só são listados recursos acima da matriz | O recurso selecionado |
| **Direção** | Eixo X, eixo Y, eixo Z, uma linha ou linha de centro de qualquer esboço anterior, o eixo de uma revolução, ou uma aresta escolhida | Eixo X |
| **Espaçamento (mm)** | Distância entre vizinhos | 20 |
| **Quantidade** | Número total, **incluindo o original** (de 1 a 1000) | 3 |
| **Inverter direção** | As cópias seguem para o outro lado | Desligado |

### Usar uma aresta como direção

1. Clique em uma aresta reta da peça na vista. O painel da direita mostra **Aresta** e o comprimento dela.
2. Escolha {{ui:Linear}}: a matriz segue essa aresta.

Ou selecione a matriz, escolha uma aresta e escolha "Aresta escolhida (usar a escolhida agora)" em **Direção**. Uma aresta escolhida fica fixa no espaço: ela não acompanha alterações posteriores. Uma linha de esboço acompanha o seu esboço.

## Matriz circular

1. Selecione o recurso a copiar (por exemplo um furo perto da borda de um disco).
2. Escolha {{ui:Circular}}. Seis cópias aparecem igualmente espaçadas em toda a volta.
3. Defina:

| Configuração | O que faz | Padrão |
|---|---|---|
| **Recursos a copiar** | Igual à matriz linear | O recurso selecionado |
| **Eixo** | Eixo X, Y ou Z, uma linha de esboço, o eixo de uma revolução ou uma aresta escolhida | O eixo da última revolução, se houver; senão, o eixo Y |
| **Ângulo (°)** | 360 espaça as cópias igualmente em toda a volta. Menos as espalha nesse ângulo, com a primeira e a última nas extremidades | 360 |
| **Quantidade** | Número total, incluindo o original | 6 |
| **Inverter direção** | Gira para o outro lado | Desligado |

Os eixos do mundo passam pela origem. Para um disco que não está centrado na origem, use uma linha de centro de esboço ou o eixo de uma revolução.

### Exemplo: os oito furos de parafuso de um flange

1. Revolucione o flange (veja [Revolucionar uma peça torneada](topic:revolve)) em torno do eixo Y.
2. Esboce na face superior plana do flange, coloque um ponto no círculo de furos e crie um Furo.
3. Com o Furo selecionado, escolha {{ui:Circular}}. O eixo já é "Eixo de Revolve1".
4. Defina **Quantidade** como `8`.

## Espelhar

1. Selecione o recurso a espelhar no histórico, ou não selecione nada para espelhar **o corpo inteiro até agora**.
2. Escolha {{ui:Espelhar}}. Ele espelha pelo **Plano Direita**.

Para espelhar o corpo inteiro por uma face da peça, clique primeiro nessa face plana e depois escolha {{ui:Espelhar}}. (Clicar em uma face limpa a seleção do histórico, então isso sempre espelha o corpo inteiro.)

Configurações no painel da direita:

- **Espelhar**: marque **O corpo inteiro (até agora)**, ou desmarque e marque os recursos a copiar.
- **Plano de espelhamento**: Plano Frontal, Plano Superior, Plano Direita, a face que ele usa agora ("Uma face de Extrude1" ou "Um plano fixo"), ou "A face escolhida agora". Para espelhar recursos escolhidos por uma face: selecione o Espelhar no histórico, clique na face na vista e escolha "A face escolhida agora".

Espelhar o corpo inteiro por uma face duplica a peça, por exemplo transformando um suporte pela metade em um suporte inteiro.

## Mensagens

- "Crie um recurso para copiar primeiro." ou "Crie um sólido primeiro." Ainda não há sólido para copiar.
- "Escolha os recursos a copiar." Todas as caixas **Recursos a copiar** foram desmarcadas.
- "Extrude2 não tem sólido para copiar." Esse recurso falhou ou está suprimido.
- "Fillet1 altera as arestas ou paredes do corpo; não pode ser copiado. Copie os recursos que criam sólidos (extrusões, revoluções, furos, importações)." Arredondamentos, chanfros e cascas não podem ser matrizados nem espelhados; faça a matriz primeiro e depois o arredondamento.
- "Ainda não há corpo para espelhar."

:::note
As cópias de uma matriz não podem ser puladas uma a uma, e uma matriz não pode seguir uma curva de esboço. Matrizes e espelhos de esboço também ainda não estão implementados: desenhe a geometria repetida à mão ou com **Adicionar por coordenadas**.
:::
