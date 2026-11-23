---
title: Torneamento num torno
summary: Faceie, desbaste, acabe, ranhure, corte a peça, rosqueie e fure uma peça torneada, a partir do contorno que a peça forma ao girar. Ferramentas de torno, avanços por rotação, pós-processadores de torno e o que não foi comprovado.
keywords: torneamento, torno, tornear, faceamento, desbaste, acabamento, ranhura, ranhurar, cortar peça, rosca, roscar, g32, g33, g96, velocidade de corte constante, css, raio da ponta, pastilha, barra, placa, diâmetro, avanço por rotação, g71, g76
from: d8cc53b0
---

Manufatura tem sete operações para um torno. Elas funcionam em qualquer peça: o que é cortado é o **contorno que a peça forma ao girar** em torno do centro do material bruto, então uma peça que não é redonda é torneada até a forma redonda que a segura.

**Nada disto foi executado num torno.** As trajetórias são verificadas contra a geometria pelos testes; os dois pós-processadores de torno seguem os códigos documentados dos comandos. Comprove um programa no simulador do seu comando e no ar primeiro.

## Preparação

Na guia **Preparação**:

- **Eixo da ferramenta** é o eixo do eixo-árvore, o Z do torno. A frente da peça fica em +Z; a placa segura a outra extremidade.
- **Material bruto**: escolha {{ui:Cilindro}}, a barra. Seu deslocamento superior é o que o corte de facear remove.
- **Origem da peça**: um centro no topo do material bruto ou no topo do modelo põe Z0 na face da frente, o lugar habitual.
- **Comando**: {{ui:Torno estilo Fanuc (.nc)}} ou {{ui:Torno LinuxCNC (.ngc)}}. Um pós-processador de fresamento recusa um programa de torneamento e informa isso.
- **Rotação máxima do eixo-árvore**: o limite sob o qual a velocidade de corte é mantida.

{{ui:Mais}} na barra de ferramentas de Manufatura lista as sete operações de torneamento no topo da guia **Operações**. A primeira que você adicionar traz a própria ferramenta: uma **pastilha de torneamento** (raio da ponta, ângulo da pastilha, ângulo da aresta de corte) ou uma **lâmina de ranhurar** (largura, raio de canto, até onde alcança). Altere-as na guia **Ferramentas**. Os avanços são por rotação, e a rotação é uma velocidade de corte em m/min que o comando mantém conforme o diâmetro muda; dê a uma ferramenta uma rpm própria para fixar a rotação.

## As operações

| Operação | O que faz |
|---|---|
| {{ui:Face}} | Faceia a frente da barra até a peça, um passo em Z de cada vez, do lado de fora até um pouco além do centro. |
| {{ui:Desbaste}} | Passadas ao longo de Z separadas por uma **profundidade de corte**, até o contorno mais o **sobremetal**; depois uma vez ao longo do contorno para tirar os degraus. Um vale entre dois ressaltos é entrado por um mergulho de uma profundidade de corte. |
| {{ui:Acabamento}} | Uma passada ao longo do contorno, numa fração do avanço da ferramenta. |
| {{ui:Ranhura}} | Mergulha a lâmina lado a lado onde ela pode retirar mais do que o limite de material que ainda existe: as ranhuras que a pastilha de torneamento não alcançou. **De / Até Z** as restringe. |
| {{ui:Cortar peça}} | Corta a peça logo atrás da sua face traseira, até um pouco além do centro, com bicadas se você definir uma. |
| {{ui:Rosca}} | Uma rosca externa: diâmetro maior, passo, comprimento, número de passadas. Profundidade 0 significa 0.6134 × passo (uma rosca de 60°). Cada passada retira a mesma área de cavaco; passadas de mola repetem a última. |
| {{ui:Furação}} | Uma broca na linha de centro até uma profundidade, com bicadas. |

## Como a ferramenta fica fora da peça

A pastilha é tratada como o que é: seu círculo de ponta e, atrás dele, a aresta de saída, uma linha reta cujo ângulo é 180° menos o ângulo da aresta de corte e o ângulo da pastilha. Essa forma é abaixada sobre o contorno em cada ponto ao longo de Z, e a trajetória é onde ela para. Assim:

- **O raio da ponta já está na trajetória.** Os pós-processadores não gravam `G41` nem `G42`; as coordenadas são o ponto programado da ferramenta (o canto do quadrado em volta da ponta).
- A pastilha **não consegue seguir uma parede mais íngreme que a sua aresta de saída**. Uma ranhura atrás de um ressalto é deixada de lado, e a operação de acabamento informa quanto do contorno ela não conseguiu alcançar. Uma operação de {{ui:Ranhura}} resolve isso.
- O material bruto é acompanhado ao longo de Z depois de cada corte, então o desbaste não corta o ar, a ranhura encontra o que sobrou, e cada operação mostra o volume que retirou e se cortou na peça.

## Limites

- **Somente torneamento externo**: sem barra de mandrilar, sem ranhuras ou roscas internas, sem ranhuras de face.
- Um eixo-árvore, a peça presa em −Z. Sem segundo eixo-árvore, sem ferramentas motorizadas, sem eixo C nem Y, sem luneta nem movimentos de contraponta.
- As trajetórias são movimentos retos: curvas são linhas curtas dentro da tolerância (sem `G2`/`G3`), e o desbaste e as roscas são escritos passada a passada (sem ciclos `G71` nem `G76`).
- A rosca é feita por passadas retas com uma saída reta no fim; dê à rosca uma ranhura de alívio. A rosca não aparece no material bruto.
- A furação no centro não altera o modelo do material bruto.
- O porta-ferramenta, a torre e a placa não são verificados. Defina {{ui:Parar em Z}} para manter a ferramenta longe das castanhas.
- Avanços e rotações são valores iniciais, como no fresamento.
