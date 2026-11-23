---
title: Apalpação: encontrar a peça e definir a origem da peça
summary: Toque uma face superior, um lado, um furo ou uma saliência com um apalpador e deixe o comando mover a origem da peça para onde a peça realmente está, ou apenas meça. O que cada comando pode fazer e o que não foi comprovado.
keywords: apalpação, apalpador, apalpador de toque, zerar por toque, origem da peça, g54, g31, g38.2, pular, referência, encontrar centro, furo, saliência, aresta, zerar, medir, inspeção, g10
from: 1f718b82
---

{{ui:Apalpação}} em Manufatura grava um ciclo de apalpação no programa: o apalpador toca a peça, e o comando move a origem da peça (G54) pela diferença entre onde a superfície foi encontrada e onde o modelo diz que ela está. As operações seguintes então cortam onde a peça realmente está.

**Nada disto foi executado numa máquina.** Os movimentos antes de um toque são movimentos comuns: o apalpador não é observado até o próprio movimento de apalpação. Execute devagar, no ar primeiro, com a mão no botão de parada de avanço.

## Como usar

1. Na guia **Ferramentas**, a primeira operação de apalpação adiciona um **apalpador de toque**: seu diâmetro de esfera e o avanço de apalpação (100 mm/min, a menos que você defina outro).
2. Pressione {{ui:Mais}} na barra de ferramentas de Manufatura, depois {{ui:Apalpação}}, e clique no que tocar. Cada clique é um ciclo, na ordem em que você clica:

| Clique em | O ciclo | O que é definido |
|---|---|---|
| Uma face plana voltada para o eixo da ferramenta | Um toque descendo | Z |
| Uma face lateral plana perpendicular a X ou a Y | Um toque indo na direção da face, um pouco abaixo do seu topo | X ou Y |
| Um furo ou uma saliência ao longo do eixo da ferramenta | Quatro toques (+X, −X, +Y, −Y) | X e Y do seu centro |

3. **Com o resultado**: {{ui:Definir a origem da peça}} ou {{ui:Apenas medir}}.
4. **Começar esta distância longe** e **Procurar esta distância além** são a distância da superfície esperada em que o movimento de apalpação começa, e até onde além dela o apalpador pode ir antes que o comando desista. **Profundidade** é quão abaixo do topo de um furo, de uma saliência ou de uma face lateral a esfera vai.

Coloque a operação de apalpação primeiro, antes de qualquer corte.

## O que cada comando grava

| Comando | Toque | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, a posição guardada em `#101` a `#104` | As variáveis de origem (`#5221` a `#5223`) são movidas por encontrado − esperado. Apenas medir: a diferença fica em `#110` (e `#111`). |
| LinuxCNC | `G38.2`, a posição guardada em parâmetros nomeados | `G10 L2 P1` com a nova origem. Apenas medir: uma mensagem `(DEBUG, …)`. |
| GRBL | `G38.2` | Um toque define o eixo com `G10 L20 P1`. O GRBL não tem variáveis, então **não consegue calcular um centro**: o arquivo informa isso num comentário e não define nada. |

A aritmética é do pós-processador, então você pode alterá-la: os eventos são `probe-move` e `probe-set` ([Pós-processadores que você pode editar](topic:post-processors)).

## Limites

- Uma origem da peça (G54). Faces perpendiculares aos eixos apenas: sem ângulo, sem ciclo de canto, sem rotação da peça.
- Sem ajustador de ferramenta, sem verificação de ferramenta quebrada, sem medir uma dimensão contra uma tolerância, sem relatório.
- O eixo-árvore não é ligado para um apalpador e o refrigerante permanece desligado; nada verifica se a ferramenta no eixo-árvore é um apalpador.
- A simulação de material bruto não executa um percurso de apalpação.
- A calibração do próprio apalpador (deslocamento da esfera, deflexão da haste, direção de disparo) é do comando.
