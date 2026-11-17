---
title: Relações e cotas do esboço
summary: Todas as relações e cotas de um esboço do PartCraft, o que selecionar para cada uma, seu símbolo e como se comporta na resolução.
keywords: relações, restrições, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concêntrica, ponto médio, fixar, distância, distância horizontal, distância vertical, raio, diâmetro, ângulo, símbolos, glifos
from: 9831e7be
---

Relações fixam como a geometria se posiciona em relação a outra geometria. Cotas fixam tamanhos. Para adicionar uma relação, selecione os itens com a ferramenta Selecionar ({{key:S}}) e escolha o botão dela no painel direito; para adicionar uma cota, use a ferramenta Cota ({{key:D}}) ou os botões de cota no painel direito. Como trabalhar com elas: [Definir totalmente um esboço](topic:relations-dimensions).

"Curva" abaixo significa um círculo ou um arco. A origem conta como um ponto.

## Relações

| Botão | Símbolo | Selecione | Efeito |
|---|---|---|---|
| {{ui:• Coincidente}} | • (mostrado só quando selecionado ou com problema) | Dois pontos | Os pontos se encontram |
| {{ui:• Coincidente}} | • | Um ponto e uma linha | O ponto fica sobre a linha (ou sobre o seu prolongamento) |
| {{ui:• Coincidente}} | • | Um ponto e uma curva | O ponto fica sobre o círculo ou arco |
| {{ui:H Horizontal}} | H | Uma linha, ou dois pontos | A linha fica nivelada, ou os dois pontos ficam na mesma altura |
| {{ui:V Vertical}} | V | Uma linha, ou dois pontos | A linha fica em pé, ou os pontos ficam um sobre o outro |
| {{ui:∥ Paralela}} | ∥ | Duas linhas | As linhas seguem na mesma direção |
| {{ui:⊥ Perpendicular}} | ⊥ | Duas linhas | As linhas se encontram em ângulo reto |
| {{ui:T Tangente}} | T | Uma linha e uma curva | A linha toca a curva sem cruzá-la |
| {{ui:T Tangente}} | T | Duas curvas | Elas se tocam, por fora ou por dentro, como desenhadas |
| {{ui:T Tangente}} | T | Uma spline e uma linha, arco ou spline que encontra uma de suas extremidades | A spline sai dessa extremidade na direção da outra curva |
| {{ui:= Igual}} | = | Duas linhas | Mesmo comprimento |
| {{ui:= Igual}} | = | Duas curvas | Mesmo raio |
| {{ui:◎ Concêntrica}} | ◎ | Duas curvas | Mesmo centro |
| {{ui:◎ Concêntrica}} | ◎ | Um ponto e uma curva | O ponto fica no centro da curva |
| {{ui:M Ponto médio}} | M | Um ponto e uma linha | O ponto fica no meio da linha |
| {{ui:↔ Simétrica}} | ↔ | Dois pontos e uma linha | Os pontos são imagens espelhadas em relação à linha (Espelhar adiciona estas) |
| {{ui:⚓ Fixa}} | ⚓ | Um ponto, uma linha, uma curva ou uma spline | Mantém exatamente onde está agora (uma spline: os seus pontos) |

Linhas aqui incluem linhas de centro. O desenho adiciona algumas relações para você: encaixar em um ponto o torna coincidente, encaixar em uma curva coloca o ponto sobre ela, linhas quase niveladas ou verticais recebem H ou V, e um retângulo vem com seus quatro cantos unidos, dois H e dois V.

**Fixar** é uma forma rápida de impedir que algo se mova, mas a peça então não pode acompanhar uma mudança de cota em outro lugar. Prefira cotas em relação à origem.

## Cotas

| Botão | Selecione | Mede | Mostrado como |
|---|---|---|---|
| {{ui:Distância}} | Uma linha | Seu comprimento | Distância 40 |
| {{ui:Distância}} | Dois pontos | A distância reta entre eles | Distância 40 |
| {{ui:Distância}} | Um ponto e uma linha | A distância do ponto até a linha, em ângulo reto com ela | Distância 40 |
| {{ui:Distância}} | Duas linhas paralelas | A folga entre elas | Distância 40 |
| {{ui:Distância horizontal}} | Dois pontos, ou uma linha | Apenas a distância esquerda-direita | Distância horizontal 40 |
| {{ui:Distância vertical}} | Dois pontos, ou uma linha | Apenas a distância cima-baixo | Distância vertical 40 |
| {{ui:Raio}} | Um círculo ou arco | Seu raio | Raio R10 |
| {{ui:Diâmetro}} | Um círculo ou arco | Seu diâmetro | Diâmetro ⌀20 |
| {{ui:Ângulo}} | Duas linhas que não são paralelas | O ângulo entre elas, de 0 a 180 graus | Ângulo 30° |

Com a ferramenta Cota, a PartCraft escolhe o tipo a partir do que você clica e de onde posiciona o número:

| Você clica | Você obtém |
|---|---|
| Uma linha | Seu comprimento; para uma linha inclinada, horizontal se o número ficar acima ou abaixo dela, vertical se ficar ao lado |
| Um círculo | Diâmetro |
| Um arco | Raio |
| Dois pontos | Distância; horizontal ou vertical como para uma linha inclinada |
| Um ponto e uma linha | Distância do ponto até a linha |
| Duas linhas | Ângulo, ou a distância se forem paralelas |
| Um ponto e um círculo | Nada: "Esses itens não podem ser cotados juntos." Cote até o ponto central do círculo |

**Deslocamento** (mostrado como distância) é feito pela ferramenta Deslocar: ela mantém uma linha copiada paralela àquela distância, ou um arco ou círculo copiado concêntrico, com raio maior ou menor nessa medida. As outras peças do mesmo deslocamento recebem uma relação **O** e seguem a única cota de Deslocar. Veja [Splines, aparar, deslocar e outras ferramentas de esboço](topic:sketch-tools).

Valores de cota são em milímetros (ou graus), nunca negativos. Raio e diâmetro devem ser maiores que zero. O valor 0 é permitido para distâncias: dois pontos a 0 de distância são coincidentes.

## Como a resolução se comporta

- **Menor movimento.** Quando um valor muda, o solver move a geometria o mínimo possível. Uma linha cujo comprimento muda cresce igualmente nas duas pontas se nenhuma delas estiver presa.
- **Sem inversão.** Distâncias de um ponto a uma linha, distâncias horizontais e verticais, ângulos e tangência lembram de que lado foram feitos. Mudar um valor nunca inverte a geometria para o outro lado.
- **Conflitos não mexem em nada.** Se relações se contradizem, o esboço permanece exatamente como estava e as conflitantes ficam vermelhas.
- **Relações redundantes** (já implicadas por outras) são indicadas na barra de status ("já está implícita. Exclua-a.") e o recurso ainda é construído, com um aviso.
- **Juntas tangentes.** Onde um arco de arredondamento encontra suas linhas em um ponto final comum, a tangência é resolvida de forma que permanece bem definida ali, então arredondamentos de esboço não aparecem como superdefinidos.

## Ainda não disponível

Relações colineares, coradiais e de perfuração; um ponto sobre uma spline; cotas de referência (acionadas); cotas de coordenada e de comprimento de arco; equações entre cotas. Use Paralela mais uma distância 0 para linhas colineares.
