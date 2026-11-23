---
title: Maquinação de 4 e 5 eixos
summary: Indique ao PartCraft quais os eixos rotativos da máquina, incline a ferramenta em qualquer operação corrente, acabe uma superfície com uma fresa esférica que se inclina ao cortar, ou rode a peça sob a ferramenta num 4.º eixo. O que é escrito no G-code e o que não foi comprovado.
keywords: 5 eixos, cinco eixos, 4 eixos, quarto eixo, multieixo, multi eixo, 3+2, indexado, posicional, inclinação, ferramenta inclinada, rotativo, trunnion, mesa, cabeça, eixo A, eixo B, eixo C, TCP, RTCP, ponto central da ferramenta, G43.4, tempo inverso, G93, cinemática, pivô, corte de flanco, ângulo de avanço
from: c4f1c491
---

Fabrico pode manter a ferramenta num ângulo, e pode mover os eixos rotativos enquanto corta. Três coisas o fazem, da mais simples para a mais complexa.

**Nada disto foi executado numa máquina.** Os percursos são verificados face à geometria pelos testes, e o G-code é lido de volta, mas os pós-processadores incorporados seguem os códigos documentados dos comandos, e não uma máquina concreta à nossa frente. Comprove um programa no simulador do seu comando e no ar, antes de tocar em metal.

## Os eixos rotativos da máquina

No separador **Preparação**, {{ui:Eixos rotativos}} indica o que a máquina tem:

| Escolha | A máquina |
|---|---|
| Nenhum (3 eixos) | Uma fresadora simples. Qualquer operação que precise de ferramenta inclinada avisa, e o pós-processador recusa escrevê-la. |
| A (roda em torno de X) | Um eixo rotativo ao longo de X: uma mesa de 4.º eixo ou um indexador. A ferramenta só pode inclinar no plano Y–Z. |
| B (roda em torno de Y) | Um eixo rotativo ao longo de Y. A ferramenta só pode inclinar no plano X–Z. |
| A e C | Um eixo de inclinação em torno de X, suportado por uma rotação em torno de Z, ou a suportá-la: uma mesa basculante, ou uma cabeça. |
| B e C | O mesmo, com a inclinação em torno de Y. |

Depois:

- **Suportado por**: {{ui:A mesa (a peça roda)}} ou {{ui:A cabeça (a ferramenta roda)}}. Uma mesa roda no sentido oposto para trazer a mesma face sob a ferramenta, por isso o sinal de cada ângulo depende disto.
- **O comando mantém a ponta da ferramenta no trajeto (TCP)**: com TCP ativo, X Y Z no programa são a ponta da ferramenta nas coordenadas próprias da peça, e o comando faz o resto (os pós-processadores de estilo Fanuc e LinuxCNC escrevem `G43.4` para o comprimento da ferramenta). Desativado, numa máquina de mesa, o PartCraft escreve X Y Z tal como a mesa rodada transporta a peça, em torno do **centro de rotação** que indicar (em coordenadas de trabalho; 0, 0, 0 quando a origem de trabalho está no centro). Uma máquina de cabeça precisa de TCP ativo: sem ele, o programa precisaria do comprimento de pivô da máquina, que o PartCraft não conhece.
- **Limite de inclinação**: até onde vai o eixo de inclinação.

As máquinas diferem no sentido que consideram positivo. Se um eixo rodar no sentido errado na sua, altere o sinal numa cópia do pós-processador (ver [Pós-processadores editáveis](topic:post-processors)).

## Uma ferramenta inclinada numa operação corrente

Cada operação de fresagem (facejar, caixa, adaptativo, contorno, furação, chanfro, paralela, crista constante, desbaste 3D, restos) tem uma **Inclinação da ferramenta** e **Inclinar para**: a direção da ferramenta apenas para essa operação, medida a partir do eixo da ferramenta da preparação. Isto é maquinação 3+2: os eixos rotativos vão a uma posição e lá ficam enquanto três eixos cortam.

- Escreva os dois ângulos, ou prima {{ui:Ferramenta perpendicular a uma face}} e clique numa face plana: a ferramenta apontará diretamente para ela.
- Escolha as faces e arestas da operação como de costume. O que conta como fundo ou furo é julgado ao longo da ferramenta inclinada.
- O bruto para essa direção é a caixa que contém o bruto rodado, para que alturas e folgas sejam seguras desse lado.

No G-code, antes da operação a ferramenta sobe, os eixos rotativos rodam, e a ferramenta desce sobre o seu primeiro ponto. Numa máquina de mesa sem TCP, os arcos continuam arcos e os ciclos de furação fixos continuam ciclos (o referencial escrito só é rodado em torno de Z). Com TCP num plano inclinado, os arcos tornam-se linhas curtas e os ciclos, os movimentos que representam.

A simulação do bruto corre uma direção inclinada **por si só**: mostra o que essa operação corta do bruto inteiro visto desse lado, e encontra entalhes aí, mas os cortes feitos a partir de outras direções não são transportados.

## Acabamento de 5 eixos

{{ui:Mais}} na barra de ferramentas de Fabrico lista esta operação e a seguinte no topo do separador **Operações**.

{{ui:5 eixos}} é a [passagem de acabamento paralela](topic:finish-3d) com uma **fresa esférica que se inclina ao avançar**. A esfera corta com uma superfície esférica, e a esfera é a mesma qualquer que seja o lado para que a ferramenta se incline em torno do seu centro; assim, a esfera segue exatamente o trajeto que a passagem de 3 eixos daria, e só muda a direção da ferramenta:

- **Para a superfície**: 1 = perpendicular à superfície, 0 = vertical, qualquer valor entre eles.
- **Inclinação para a frente**: graus ao longo da direção do corte, para que o centro parado da esfera não seja o que corta.
- **Inclinação máxima**: a ferramenta nunca se inclina mais do que isto em relação ao eixo da preparação.

Onde a haste tocaria no modelo, a inclinação é reduzida até libertar, e a operação indica em quantos pontos isso acontece. Cada passagem é iniciada e terminada por um levantamento retilíneo.

## Acabamento rotativo (4.º eixo)

{{ui:Rotativo}} serve para uma peça presa ao longo do **X de trabalho** num eixo rotativo. A peça roda e uma fresa esférica, sempre apontada ao eixo, segue a sua superfície:

- **Passagens**: {{ui:Ao longo do eixo}} (linhas ao longo de X, afastadas de um passo lateral de rotação) ou {{ui:À volta da peça}} (anéis, afastados de um passo lateral de X).
- **Eixo em Y / Z**: onde está o eixo. Vazio significa o meio do bruto. Numa máquina de mesa sem TCP, isto tem de ser o centro de rotação da Preparação; a operação avisa quando não é.
- **De / Até X** e **De / Até ângulo**: a parte do comprimento e da rotação a cortar.

A altura da esfera acima do eixo, em cada ponto, é a queda exata de uma esfera sobre a malha da peça, desse lado.

## Limites

- O acabamento de 5 eixos e o rotativo aceitam **apenas uma fresa esférica**. Não há corte de flanco (o lado da ferramenta numa parede reglada), nem linhas de fluxo ao longo das direções próprias de uma superfície, nem desbaste multieixo, nem escolha automática da inclinação para evitar colisões.
- Os percursos de 5 eixos e rotativos **não passam pela simulação do bruto**, que é um mapa de alturas e não consegue conter um corte inclinado.
- A haste é verificada no acabamento de 5 eixos contra o modelo visto de cima; o porta-ferramentas, o fuso e a própria máquina não são verificados em lado nenhum.
- O acabamento rotativo corta apenas o que a ferramenta consegue ver olhando para o eixo.
- Um acabamento de 5 eixos demora um minuto ou mais a calcular numa peça grande: a haste é verificada em cada ponto de cada passagem.
- Quando os eixos rotativos se movem com os lineares e o TCP está desativado, os pós-processadores incorporados escrevem o avanço em tempo inverso (`G93`) e depois voltam a `G94`.
- Não é escrito nenhum código de plano de trabalho inclinado (`G68.2` e semelhantes), e não são conhecidos limites específicos da máquina, desenrolamentos nem zonas de colisão.
