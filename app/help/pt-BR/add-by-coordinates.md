---
title: Adicionar geometria de esboço digitando coordenadas
summary: Use Adicionar por coordenadas no painel de esboço para posicionar linhas, linhas de centro, retângulos, círculos e pontos em posições exatas, somente com o teclado.
keywords: coordenadas, entrada digitada, entrada pelo teclado, entrada numérica, posição exata, x y, coordenadas absolutas, acessibilidade, sem mouse
from: 5e6c1656
---

Quando você conhece os números, digitá-los é mais rápido do que clicar e cotar. **Adicionar por coordenadas** fica no painel da direita sempre que um esboço está aberto. Ele também permite montar um esboço sem nenhum ponteiro.

As coordenadas estão em milímetros, nos eixos próprios do esboço: x para a direita e y para cima, vistos de frente para o esboço, com (0, 0) na origem (o círculo vermelho com uma cruz).

## Adicionar uma forma

1. Abra um esboço (veja [Desenhe seu primeiro esboço](topic:sketch-basics)).
2. No painel da direita, role até **Adicionar por coordenadas**.
3. Escolha a forma em **Adicionar**: Linha, Linha de centro, Retângulo, Círculo ou Ponto.
4. Preencha as caixas:

| Forma | Caixas |
|---|---|
| Linha | **De x, y** e **Até x, y** |
| Linha de centro | **De x, y** e **Até x, y** |
| Retângulo | **Canto x, y** e **Canto oposto x, y** |
| Círculo | **Centro x, y** e **Raio** |
| Ponto | **Em x, y** |

5. Escolha {{ui:Adicionar}}, ou pressione {{key:Enter}} em qualquer caixa.

A forma aparece e a barra de status diz, por exemplo, "Retângulo adicionado." As caixas são esvaziadas, prontas para a próxima. Cada adição é uma etapa de desfazer.

Digite um par como dois números separados por vírgula ou espaço: `0, 0`, `25 -10` ou `12.5,40`. Números negativos e decimais são aceitos. Um raio precisa ser maior que zero. Se algo não for lido como número, a barra de status diz: 'Digite as coordenadas como "x, y" e um raio maior que zero.'

## Exemplo: contorno de uma chapa com ranhura, digitado

1. Abra um esboço em **Plano Frontal**.
2. **Adicionar**: Retângulo. **Canto x, y**: `-50, -30`. **Canto oposto x, y**: `50, 30`. {{key:Enter}}.
3. **Adicionar**: Círculo. **Centro x, y**: `-30, 0`. **Raio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Raio**: `5`. {{key:Enter}}.
5. Escolha {{ui:Sair do esboço}}, depois {{ui:Extrudar}}: uma chapa de 100 × 60 com dois furos de 10 mm.

## Geometria digitada é posicionada, não presa

Coordenadas digitadas colocam a geometria no lugar certo, mas elas **não são relações**. As formas continuam azuis (subdefinidas) e podem se mover se você as arrastar ou alterar outra cota:

- um retângulo digitado vem com seus próprios cantos e relações horizontal e vertical, como um desenhado, mas nada o prende à origem;
- uma linha digitada não tem relação horizontal ou vertical, mesmo que você tenha digitado uma linha nivelada;
- o centro de um círculo digitado fica livre.

Para tornar o esboço totalmente definido, adicione cotas e relações depois (veja [Defina totalmente um esboço](topic:relations-dimensions)). Por exemplo, selecione um canto do retângulo e a origem e escolha {{ui:• Coincidente}}, ou cote os centros dos círculos a partir da origem.

:::note
Sem um ponteiro, você consegue chegar até aqui: mova para uma linha de plano no histórico com {{key:Tab}} e as setas, pressione {{key:Enter}} para selecioná-la, pressione {{key:S}} para esboçar, adicione formas aqui e chegue a **Editar** ao lado de cada cota e a {{ui:Sair do esboço}} com {{key:Tab}}. Selecionar geometria, e portanto adicionar relações ou novas cotas, ainda precisa de um clique ou toque nesta versão.
:::

## Limites

- Arcos ainda não podem ser digitados. Desenhe-os com a ferramenta Arco, ou digite um círculo e use relações.
- Não há coordenadas relativas (a partir do último ponto) nem coordenadas polares (comprimento e ângulo) nesta caixa.
- Geometria digitada não faz snap em pontos existentes. Digite as mesmas coordenadas de um ponto existente e depois adicione uma relação {{ui:• Coincidente}} entre eles se precisarem ficar unidos.
