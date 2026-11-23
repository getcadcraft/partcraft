---
title: Usinagem de 4 e 5 eixos
summary: Informe ao PartCraft quais eixos rotativos a máquina tem, incline a ferramenta em qualquer operação comum, acabe uma superfície com uma fresa de ponta esférica que se inclina enquanto corta, ou gire a peça sob a ferramenta num 4º eixo. O que é gravado no G-code e o que não foi comprovado.
keywords: 5 eixos, cinco eixos, 4 eixos, quarto eixo, multieixos, multi eixos, 3+2, indexado, posicional, inclinação, ferramenta inclinada, rotativo, trunnion, mesa, cabeçote, eixo A, eixo B, eixo C, TCP, RTCP, ponto central da ferramenta, G43.4, tempo inverso, G93, cinemática, pivô, swarf, ângulo de ataque
from: c4f1c491
---

Manufatura pode manter a ferramenta em um ângulo, e pode mover os eixos rotativos enquanto corta. Três coisas fazem isso, da mais simples para a mais complexa.

**Nada disto foi executado numa máquina.** As trajetórias são verificadas contra a geometria pelos testes, e o G-code é lido de volta, mas os pós-processadores prontos seguem os códigos documentados dos comandos, não alguma máquina à nossa frente. Comprove um programa no simulador do seu comando e no ar antes que ele toque o metal.

## Os eixos rotativos da máquina

Na guia **Preparação**, {{ui:Eixos rotativos}} diz o que a máquina tem:

| Opção | A máquina |
|---|---|
| Nenhum (3 eixos) | Uma fresa simples. Qualquer operação que precise da ferramenta inclinada avisa, e o pós-processador recusa gravá-la. |
| A (gira em torno de X) | Um eixo rotativo ao longo de X: uma mesa de 4º eixo ou um indexador. A ferramenta só pode se inclinar no plano Y–Z. |
| B (gira em torno de Y) | Um eixo rotativo ao longo de Y. A ferramenta só pode se inclinar no plano X–Z. |
| A e C | Um eixo de inclinação em torno de X, apoiado ou apoiando um giro em torno de Z: uma mesa trunnion, ou um cabeçote. |
| B e C | O mesmo, com a inclinação em torno de Y. |

Depois:

- **Carregado por**: {{ui:A mesa (a peça gira)}} ou {{ui:O cabeçote (a ferramenta gira)}}. Uma mesa gira no sentido oposto para trazer a mesma face sob a ferramenta, então o sinal de cada ângulo depende disto.
- **O comando mantém a ponta da ferramenta na trajetória (TCP)**: ligado, X Y Z no programa são a ponta da ferramenta nas coordenadas da própria peça, e o comando faz o resto (os pós-processadores prontos estilo Fanuc e LinuxCNC gravam `G43.4` para o comprimento da ferramenta). Desligado, numa máquina de mesa, o PartCraft grava X Y Z conforme a mesa girada carrega a peça, em torno do **centro rotativo** que você informa (em coordenadas de trabalho; 0, 0, 0 quando a origem da peça está no centro). Uma máquina de cabeçote precisa de TCP ligado: sem ele, o programa precisaria do comprimento de pivô da máquina, que o PartCraft não conhece.
- **Limite de inclinação**: até onde o eixo de inclinação vai.

As máquinas diferem em qual sentido consideram positivo. Se um eixo girar para o lado errado na sua, mude o sinal numa cópia do pós-processador ([Pós-processadores que você pode editar](topic:post-processors)).

## Uma ferramenta inclinada para uma operação comum

Toda operação de fresamento (face, bolsão, adaptativo, contorno, furação, chanfro, paralela, crista constante, desbaste 3D, sobras) tem uma **Inclinação da ferramenta** e uma **Inclinar em direção a**: a direção da ferramenta somente para aquela operação, medida a partir do eixo de ferramenta da preparação. Isto é usinagem 3+2: os eixos rotativos vão para uma posição e ali permanecem enquanto três eixos cortam.

- Digite os dois ângulos, ou pressione {{ui:Ferramenta perpendicular a uma face}} e clique numa face plana: a ferramenta apontará diretamente para ela.
- Escolha as faces e arestas da operação como de costume. O que conta como fundo ou furo é julgado ao longo da ferramenta inclinada.
- O material bruto para essa direção é a caixa que contém o material bruto girado, então as alturas e folgas são seguras daquele lado.

No G-code, antes da operação a ferramenta sobe, os eixos rotativos giram e a ferramenta desce sobre o seu primeiro ponto. Numa máquina de mesa sem TCP, arcos continuam arcos e ciclos de furação fixos continuam ciclos (o referencial gravado é apenas girado em torno de Z). Com TCP num plano inclinado, arcos se tornam linhas curtas e ciclos se tornam os movimentos que representam.

A simulação de material bruto executa uma direção inclinada **por conta própria**: mostra o que essa operação corta de todo o material bruto visto daquele lado, e encontra entalhes ali, mas os cortes feitos de outras direções não são transportados.

## Acabamento de 5 eixos

{{ui:Mais}} na barra de ferramentas de Manufatura lista esta operação e a seguinte no topo da guia **Operações**.

{{ui:5 eixos}} é a [passada de acabamento paralela](topic:finish-3d) com uma **fresa de ponta esférica que se inclina enquanto avança**. Uma esfera corta com a sua superfície, e a esfera é a mesma qualquer que seja a inclinação da ferramenta em torno do seu centro; assim, a esfera segue exatamente o caminho que a passada de 3 eixos daria, e só muda a direção da ferramenta:

- **Em direção à superfície**: 1 = perpendicular à superfície, 0 = na vertical, qualquer valor entre.
- **Inclinar à frente**: graus na direção do corte, de modo que o centro parado da esfera não seja o que corta.
- **Inclinação máxima**: a ferramenta nunca se inclina além disto em relação ao eixo da preparação.

Onde a haste tocaria o modelo, a inclinação é recuada até que se afaste, e a operação informa em quantos pontos isso ocorreu. Cada passada é entrada e saída por um levantamento reto.

## Acabamento rotativo (4º eixo)

{{ui:Rotativo}} serve para uma peça presa ao longo de **X da peça** em um eixo rotativo. A peça gira e uma fresa de ponta esférica, sempre apontando para o eixo, segue a superfície dela:

- **Passadas**: {{ui:Ao longo do eixo}} (linhas ao longo de X, separadas por um passo lateral de giro) ou {{ui:Em volta da peça}} (anéis, separados por um passo lateral em X).
- **Eixo em Y / Z**: onde está o eixo. Vazio significa o meio do material bruto. Numa máquina de mesa sem TCP, isso deve ser o centro rotativo da Preparação; a operação avisa quando não é.
- **De / Até X** e **De / Até ângulo**: a parte do comprimento e do giro a cortar.

A altura da esfera acima do eixo em cada ponto é a queda exata de uma esfera sobre a malha da peça, a partir daquele lado.

## Limites

- Acabamento de 5 eixos e rotativo aceitam **somente fresa de ponta esférica**. Não há usinagem com a lateral da ferramenta (swarf, o lado da ferramenta numa parede reglada), nem linhas de fluxo ao longo das direções próprias de uma superfície, nem desbaste de vários eixos, nem escolha automática da inclinação para evitar colisão.
- Trajetórias de 5 eixos e rotativas **não passam pela simulação de material bruto**, que é um mapa de alturas e não consegue representar um corte inclinado.
- A haste é verificada no acabamento de 5 eixos contra o modelo visto de cima; o porta-ferramenta, o eixo-árvore e a própria máquina não são verificados em nenhum lugar.
- O acabamento rotativo corta apenas o que a ferramenta consegue ver olhando para o eixo.
- O acabamento de 5 eixos leva um minuto ou mais para ser calculado numa peça grande: a haste é verificada em cada ponto de cada passada.
- Quando os eixos rotativos se movem junto com os lineares e o TCP está desligado, os pós-processadores prontos gravam o avanço em tempo inverso (`G93`), e depois voltam a `G94`.
- Nenhum código de plano de trabalho inclinado (`G68.2` e similares) é gravado, e não se conhecem limites específicos da máquina, desenrolamento nem zonas de colisão.
