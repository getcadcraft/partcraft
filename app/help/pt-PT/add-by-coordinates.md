---
title: Adicionar geometria ao esboço introduzindo coordenadas
summary: Com Adicionar por coordenadas, no painel do esboço, coloque linhas, linhas de eixo, retângulos, círculos e pontos em posições exatas, apenas com o teclado.
keywords: coordenadas, entrada escrita, entrada por teclado, entrada numérica, posição exata, x y, coordenadas absolutas, acessibilidade, sem rato
from: 5e6c1656
---

Quando os valores são conhecidos, escrevê-los é mais rápido do que clicar e cotar. **Adicionar por coordenadas** fica no painel da direita sempre que um esboço está aberto. Também permite criar um esboço sem qualquer apontador.

As coordenadas estão em milímetros, nos eixos próprios do esboço: x para a direita e y para cima, quando se olha para o esboço, com (0, 0) na origem (o círculo vermelho com uma cruz).

## Adicionar uma forma

1. Abra um esboço (ver [Desenhar o primeiro esboço](topic:sketch-basics)).
2. No painel da direita, desloque-se até **Adicionar por coordenadas**.
3. Escolha a forma em **Adicionar**: Linha, Linha de eixo, Retângulo, Círculo ou Ponto.
4. Preencha as caixas:

| Forma | Caixas |
|---|---|
| Linha | **De x, y** e **Até x, y** |
| Linha de eixo | **De x, y** e **Até x, y** |
| Retângulo | **Canto x, y** e **Canto oposto x, y** |
| Círculo | **Centro x, y** e **Raio** |
| Ponto | **Em x, y** |

5. Escolha {{ui:Add}}, ou prima {{key:Enter}} em qualquer caixa.

A forma aparece e a barra de estado indica, por exemplo, "Adicionado um retângulo." As caixas ficam vazias, prontas para a seguinte. Cada adição conta como um passo de anulação.

Escreva um par como dois números separados por vírgula ou espaço: `0, 0`, `25 -10` ou `12.5,40`. Números negativos e decimais são aceites. Um raio tem de ser superior a zero. Se algo não for lido como número, a barra de estado indica: 'Escreva as coordenadas como "x, y" e um raio superior a zero.'

## Exemplo: contorno de uma placa com ranhuras, escrito

1. Abra um esboço no plano Lateral.
2. **Adicionar**: Retângulo. **Canto x, y**: `-50, -30`. **Canto oposto x, y**: `50, 30`. {{key:Enter}}.
3. **Adicionar**: Círculo. **Centro x, y**: `-30, 0`. **Raio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Raio**: `5`. {{key:Enter}}.
5. Escolha {{ui:Exit sketch}} e depois {{ui:Extrude}}: uma placa de 100 × 60 com dois furos de 10 mm.

## A geometria escrita fica posicionada, não fixada

As coordenadas escritas colocam a geometria no sítio certo, mas **não são relações**. As formas ficam a azul (sub-definidas) e podem mover-se se as arrastar ou se alterar outra cota:

- um retângulo escrito traz os seus próprios cantos, relações horizontais e verticais, como um desenhado, mas nada o liga à origem;
- uma linha escrita não tem relação horizontal nem vertical, mesmo que tenha escrito uma linha horizontal;
- o centro de um círculo escrito fica livre.

Para tornar o esboço totalmente definido, acrescente cotas e relações depois (ver [Definir totalmente um esboço](topic:relations-dimensions)). Por exemplo, selecione um canto do retângulo e a origem e escolha {{ui:• Coincident}}, ou cote os centros dos círculos a partir da origem.

:::note
Sem apontador, é possível chegar até aqui: desloque-se para uma linha de plano no histórico com {{key:Tab}} e as teclas de seta, prima {{key:Enter}} para a selecionar, prima {{key:S}} para esboçar, acrescente formas aqui e chegue a **Editar** ao lado de cada cota e a {{ui:Exit sketch}} com {{key:Tab}}. Selecionar geometria, e portanto acrescentar relações ou novas cotas, ainda exige um clique ou um toque nesta versão.
:::

## Limites

- Arcos ainda não podem ser escritos. Desenhe-os com a ferramenta Arco, ou escreva um círculo e use relações.
- Não existem coordenadas relativas (a partir do último ponto) nem polares (comprimento e ângulo) nesta caixa.
- A geometria escrita não faz snap a pontos existentes. Escreva as mesmas coordenadas de um ponto existente e depois acrescente uma relação {{ui:• Coincident}} entre eles, se tiverem de ficar unidos.
