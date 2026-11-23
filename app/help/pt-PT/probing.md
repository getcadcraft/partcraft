---
title: Apalpação: encontrar a peça e definir a origem de trabalho
summary: Toque numa face superior, num lado, num furo ou numa saliência com um apalpador e deixe o comando mover a origem de trabalho para onde a peça está de facto, ou apenas meça. O que cada comando consegue fazer e o que não foi comprovado.
keywords: apalpação, apalpador, apalpador de contacto, toque, zerar, origem de trabalho, G54, G31, G38.2, salto, referência, encontrar centro, furo, saliência, aresta, definir zero, medir, inspeção, G10
from: 1f718b82
---

{{ui:Apalpação}} em Fabrico escreve um ciclo de apalpação no programa: o apalpador toca na peça, e o comando move a origem de trabalho (G54) pela diferença entre onde a superfície foi encontrada e onde o modelo a situa. As operações seguintes cortam então onde a peça está de facto.

**Nada disto foi executado numa máquina.** Os movimentos antes de um toque são movimentos comuns: o apalpador não é vigiado até ao próprio movimento de apalpação. Execute-o devagar, primeiro no ar, com a mão na paragem de avanço.

## Utilizar

1. No separador **Ferramentas**, a primeira operação de apalpação acrescenta um **apalpador de contacto**: o diâmetro da sua esfera e o avanço de apalpação (100 mm/min, salvo se definir outro).
2. Prima {{ui:Mais}} na barra de Fabrico, depois {{ui:Apalpação}}, e clique no que tocar. Cada escolha é um ciclo, pela ordem em que clica:

| Escolha | O ciclo | O que é definido |
|---|---|---|
| Uma face plana virada para o eixo da ferramenta | Um toque a descer | Z |
| Uma face lateral plana, perpendicular a X ou a Y | Um toque a ir contra a face, um pouco abaixo do seu topo | X ou Y |
| Um furo ou uma saliência ao longo do eixo da ferramenta | Quatro toques (+X, −X, +Y, −Y) | X e Y do seu centro |

3. **Com o resultado**: {{ui:Definir o deslocamento da origem}} ou {{ui:Só medir}}.
4. **Começar esta distância longe** e **Procurar esta distância além** são a distância da superfície esperada a que o movimento de apalpação começa, e a distância para além dela que o apalpador pode percorrer antes de o comando desistir. **Profundidade** é a distância abaixo do topo de um furo, de uma saliência ou de uma face lateral a que a esfera vai.

Coloque a operação de apalpação primeiro, antes de qualquer corte.

## O que cada comando escreve

| Comando | Toque | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, a posição guardada em `#101` a `#104` | As variáveis de origem (`#5221` a `#5223`) são movidas por encontrado − esperado. Só medir: a diferença fica em `#110` (e `#111`). |
| LinuxCNC | `G38.2`, a posição guardada em parâmetros com nome | `G10 L2 P1` com a nova origem. Só medir: uma mensagem `(DEBUG, …)`. |
| GRBL | `G38.2` | Um toque define o eixo com `G10 L20 P1`. O GRBL não tem variáveis, por isso **não consegue calcular um centro**: o ficheiro diz isso num comentário e não define nada. |

O cálculo é do pós-processador, por isso pode alterá-lo: os eventos são `probe-move` e `probe-set` ([Pós-processadores editáveis](topic:post-processors)).

## Limites

- Uma origem de trabalho (G54). Apenas faces perpendiculares aos eixos: sem ângulo, sem ciclo de canto, sem rotação do trabalho.
- Sem calibrador de ferramentas, sem verificação de ferramenta partida, sem medição de um tamanho contra uma tolerância, sem relatório.
- O fuso não é ligado para uma apalpação e a refrigeração fica desligada; nada verifica se a ferramenta no fuso é um apalpador.
- A simulação do bruto não executa um percurso de apalpação.
- A calibração própria do apalpador (desvio da esfera, deflexão da haste, direção de disparo) é do comando.
