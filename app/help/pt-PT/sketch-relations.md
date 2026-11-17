---
title: Relações e cotas do esboço
summary: Todas as relações e cotas que um esboço do PartCraft tem, o que selecionar para cada uma, o seu símbolo e como se comporta ao resolver.
keywords: relações, restrições, coincidente, horizontal, vertical, paralelo, perpendicular, tangente, igual, concêntrico, ponto médio, fixar, distância, distância horizontal, distância vertical, raio, diâmetro, ângulo, símbolos, glifos
from: 9831e7be
---

As relações fixam a posição da geometria em relação a outra geometria. As cotas fixam tamanhos. Para acrescentar uma relação, selecione os itens com a ferramenta Selecionar ({{key:S}}) e escolha o seu botão no painel da direita; para acrescentar uma cota, use a ferramenta Cota ({{key:D}}) ou os botões de cota no painel da direita. Como trabalhar com elas: [Definir totalmente um esboço](topic:relations-dimensions).

«Curva» abaixo significa um círculo ou um arco. A origem conta como ponto.

## Relações

| Botão | Símbolo | Selecionar | Efeito |
|---|---|---|---|
| {{ui:• Coincidente}} | • (mostrado apenas quando selecionado ou em conflito) | Dois pontos | Os pontos coincidem |
| {{ui:• Coincidente}} | • | Um ponto e uma linha | O ponto fica sobre a linha (ou sobre o seu prolongamento) |
| {{ui:• Coincidente}} | • | Um ponto e uma curva | O ponto fica sobre o círculo ou arco |
| {{ui:H Horizontal}} | H | Uma linha, ou dois pontos | A linha fica nivelada, ou os dois pontos ficam à mesma altura |
| {{ui:V Vertical}} | V | Uma linha, ou dois pontos | A linha fica na vertical, ou os pontos ficam um por cima do outro |
| {{ui:∥ Paralelo}} | ∥ | Duas linhas | As linhas têm a mesma direção |
| {{ui:⊥ Perpendicular}} | ⊥ | Duas linhas | As linhas encontram-se em ângulo reto |
| {{ui:T Tangente}} | T | Uma linha e uma curva | A linha toca a curva sem a cruzar |
| {{ui:T Tangente}} | T | Duas curvas | Tocam-se, por fora ou por dentro, conforme desenhadas |
| {{ui:T Tangente}} | T | Uma spline e uma linha, arco ou spline que encontre uma das suas extremidades | A spline sai dessa extremidade na direção da outra curva |
| {{ui:= Igual}} | = | Duas linhas | Mesmo comprimento |
| {{ui:= Igual}} | = | Duas curvas | Mesmo raio |
| {{ui:◎ Concêntrico}} | ◎ | Duas curvas | Mesmo centro |
| {{ui:◎ Concêntrico}} | ◎ | Um ponto e uma curva | O ponto fica no centro da curva |
| {{ui:M Ponto médio}} | M | Um ponto e uma linha | O ponto fica no meio da linha |
| {{ui:↔ Simétrico}} | ↔ | Dois pontos e uma linha | Os pontos são imagens espelhadas em relação à linha (Espelhar acrescenta estas) |
| {{ui:⚓ Fixar}} | ⚓ | Um ponto, uma linha, uma curva ou uma spline | Mantém-no exatamente onde está agora (uma spline: os seus pontos) |

Aqui, as linhas incluem as linhas de eixo. Ao desenhar, algumas relações são acrescentadas automaticamente: o snap a um ponto torna-o coincidente, o snap a uma curva coloca o ponto sobre ela, as linhas quase niveladas ou verticais recebem H ou V, e um retângulo vem com os quatro cantos unidos, dois H e dois V.

**Fixar** é uma forma rápida de impedir que algo se mova, mas a peça deixa então de acompanhar uma alteração de cota noutro sítio. Prefira cotas em relação à origem.

## Cotas

| Botão | Selecionar | Mede | Apresentada como |
|---|---|---|---|
| {{ui:Distância}} | Uma linha | O seu comprimento | Distância 40 |
| {{ui:Distância}} | Dois pontos | A distância em linha reta entre eles | Distância 40 |
| {{ui:Distância}} | Um ponto e uma linha | A distância do ponto à linha, perpendicular a ela | Distância 40 |
| {{ui:Distância}} | Duas linhas paralelas | A distância entre elas | Distância 40 |
| {{ui:Distância horizontal}} | Dois pontos, ou uma linha | Apenas a distância esquerda-direita | Distância horizontal 40 |
| {{ui:Distância vertical}} | Dois pontos, ou uma linha | Apenas a distância cima-baixo | Distância vertical 40 |
| {{ui:Raio}} | Um círculo ou arco | O seu raio | Raio R10 |
| {{ui:Diâmetro}} | Um círculo ou arco | O seu diâmetro | Diâmetro ⌀20 |
| {{ui:Ângulo}} | Duas linhas que não sejam paralelas | O ângulo entre elas, de 0 a 180 graus | Ângulo 30° |

Com a ferramenta Cota, o PartCraft escolhe o tipo a partir do que clica e de onde coloca o número:

| Clica em | Obtém |
|---|---|
| Uma linha | O seu comprimento; numa linha inclinada, horizontal se o número ficar acima ou abaixo dela, vertical se ficar ao lado |
| Um círculo | Diâmetro |
| Um arco | Raio |
| Dois pontos | Distância; horizontal ou vertical, como numa linha inclinada |
| Um ponto e uma linha | Distância do ponto à linha |
| Duas linhas | Ângulo, ou a distância se forem paralelas |
| Um ponto e um círculo | Nada: « Estes itens não podem ser cotados em conjunto. » Em vez disso, cote até ao ponto central do círculo |

O **Offset** (apresentado como distância) é criado pela ferramenta Offset: mantém uma linha copiada paralela a essa distância, ou um arco ou círculo copiado concêntrico com um raio maior ou menor nessa medida. As restantes peças do mesmo offset têm uma relação **O** e seguem a única cota de Offset. Ver [Splines, aparar, offset e outras ferramentas de esboço](topic:sketch-tools).

Os valores de cota são em milímetros (ou graus), nunca negativos. O raio e o diâmetro têm de ser superiores a zero. Um valor de 0 é aceite para distâncias: dois pontos a 0 de distância são coincidentes.

## Como o solucionador se comporta

- **Menor movimento.** Quando um valor muda, o solucionador move a geometria o menos possível. Uma linha cujo comprimento muda cresce igualmente nas duas extremidades se nenhuma delas estiver presa.
- **Sem inversões.** As distâncias de um ponto a uma linha, as distâncias horizontais e verticais, os ângulos e a tangência memorizam de que lado foram feitos. Alterar um valor nunca inverte a geometria para o outro lado.
- **Os conflitos não mexem em nada.** Se as relações se contradisserem, o esboço fica exatamente como estava e as relações em conflito ficam a vermelho.
- **Relações redundantes** (já implicadas por outras) são indicadas na barra de estado (« já está implícita. Elimine-a. ») e a operação é criada na mesma, com um aviso.
- **Junções tangentes.** Onde um arco de boleado encontra as suas linhas num ponto final comum, a tangência é resolvida de uma forma que fica bem definida nesse ponto, para que os boleados de esboço não sejam lidos como sobredefinidos.

## Ainda não disponível

Relações colineares, coradiais e de perfuração; um ponto sobre uma spline; cotas comandadas (de referência); cotas de ordenada e de comprimento de arco; equações entre cotas. Para linhas colineares, use Paralelo mais uma distância de 0.
