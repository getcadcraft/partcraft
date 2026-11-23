---
title: Torneamento num torno
summary: Facejar, desbastar, acabar, ranhurar, separar, roscar e furar uma peça torneada, a partir do contorno que a peça forma ao rodar. Ferramentas de torno, avanços por rotação, pós-processadores de torno e o que não foi comprovado.
keywords: torneamento, torno, tornear, facejamento, desbaste, acabamento, ranhura, ranhurar, separar, corte de separação, rosca, roscar, G32, G33, G96, velocidade de corte constante, CSS, raio da ponta, pastilha, barra, mandril, diâmetro, avanço por rotação, G71, G76
from: d8cc53b0
---

Fabrico tem sete operações para um torno. Funcionam em qualquer peça: o que se corta é o **contorno que a peça forma ao rodar** em torno do centro do bruto, por isso uma peça que não é redonda é reduzida à forma redonda que a sustém.

**Nada disto foi executado num torno.** Os percursos são verificados face à geometria pelos testes; os dois pós-processadores de torno seguem os códigos documentados dos comandos. Comprove primeiro um programa no simulador do seu comando e no ar.

## Preparar

No separador **Preparação**:

- **Eixo da ferramenta** é o eixo do fuso, o Z do torno. A frente da peça fica em +Z; o mandril segura a outra extremidade.
- **Bruto**: escolha {{ui:Cilindro}}, a barra. A sua folga no topo é o que o corte de facejar retira.
- **Origem de trabalho**: um centro no topo do bruto ou no topo do modelo põe Z0 na face frontal, o local habitual.
- **Comando**: {{ui:Torno tipo Fanuc (.nc)}} ou {{ui:Torno LinuxCNC (.ngc)}}. Um pós-processador de fresagem recusa um programa de torneamento e diz isso.
- **Velocidade máxima do fuso**: o limite ao qual a velocidade de corte fica mantida.

{{ui:Mais}} na barra de Fabrico lista as sete operações de torneamento no topo do separador **Operações**. A primeira que acrescentar traz a sua própria ferramenta: uma **pastilha de torneamento** (raio da ponta, ângulo da pastilha, ângulo do gume de corte) ou uma **lâmina de ranhurar** (largura, raio de canto, até onde alcança). Altere-as no separador **Ferramentas**. Os avanços são por rotação, e a velocidade é uma velocidade de corte em m/min que o comando mantém à medida que o diâmetro muda; dê a uma ferramenta uma rpm própria para fixar a velocidade.

## As operações

| Operação | O que faz |
|---|---|
| {{ui:Face}} | Faceia a frente da barra até à peça, um passo em profundidade de cada vez, do exterior até um pouco além do centro. |
| {{ui:Desbaste}} | Passagens ao longo de Z, a uma **profundidade de corte** de distância, até ao contorno mais o **bruto a deixar**; depois, uma vez ao longo do contorno para retirar os degraus. Um vale entre dois ressaltos é atacado por um mergulho de uma profundidade de corte. |
| {{ui:Acabamento}} | Uma passagem ao longo do contorno, a uma fração do avanço da ferramenta. |
| {{ui:Ranhurar}} | Mergulha a lâmina lado a lado onde pode retirar mais do que o limite de bruto que ainda lá está: as ranhuras que a pastilha de torneamento não alcançou. **De / Até Z** estreita-a. |
| {{ui:Separar}} | Corta a peça logo atrás da sua face traseira, até um pouco além do centro, com bicadas se definir uma. |
| {{ui:Rosca}} | Uma rosca exterior: diâmetro maior, passo, comprimento, número de passagens. Profundidade 0 significa 0,6134 × passo (uma rosca de 60°). Cada passagem retira a mesma área de apara; as passagens de mola repetem a última. |
| {{ui:Furação}} | Uma broca no eixo central até uma profundidade, com bicadas. |

## Como a ferramenta se mantém afastada da peça

A pastilha é tratada pelo que é: o seu círculo de ponta e, atrás dele, o bordo de fuga, uma linha reta cujo ângulo é 180° menos o ângulo do gume de corte e o ângulo da pastilha. Essa forma é baixada sobre o contorno em cada ponto ao longo de Z, e o percurso é o local onde ela assenta. Assim:

- **O raio da ponta já está no percurso.** Os pós-processadores não escrevem `G41` nem `G42`; as coordenadas são o ponto programado da ferramenta (o canto do quadrado em volta da ponta).
- A pastilha **não consegue seguir uma parede mais inclinada do que o seu bordo de fuga**. Uma ranhura atrás de um ressalto fica por fazer, e a operação de acabamento indica quanto do contorno não conseguiu alcançar. Uma operação {{ui:Ranhurar}} trata disso.
- O bruto é seguido ao longo de Z depois de cada corte, pelo que o desbaste não corta ar, a ranhura encontra o que resta, e cada operação mostra o volume que retirou e se cortou para dentro da peça.

## Limites

- **Apenas torneamento exterior**: sem barra de mandrilar, sem ranhuras ou roscas interiores, sem ranhuras de face.
- Um fuso, com a peça segura em −Z. Sem contrafuso, sem ferramentas vivas, sem eixo C nem Y, sem luneta nem movimentos de contrapunto.
- Os percursos são movimentos retos: os curvos são linhas curtas dentro da tolerância (sem `G2`/`G3`), e o desbaste e a roscagem são escritos passagem a passagem (sem ciclos `G71` nem `G76`).
- A roscagem é feita em passagens retas, com uma saída reta no fim; dê à rosca uma ranhura de alívio. A rosca não é mostrada no bruto.
- A furação no centro não altera o modelo do bruto.
- O porta-ferramentas, a torre e o mandril não são verificados. Defina **Parar em Z** para manter a ferramenta longe das garras.
- Os avanços e as velocidades são valores iniciais, como na fresagem.
