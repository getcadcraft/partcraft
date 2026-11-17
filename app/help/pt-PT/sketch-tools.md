---
title: Splines, aparar, offset e outras ferramentas de esboço
summary: Desenhar splines por pontos de passagem e por pontos de controlo, aparar e prolongar curvas, criar um offset de uma cadeia, espelhar em torno de uma linha de eixo, acrescentar polígonos e rasgos, criar matrizes da geometria do esboço e projetar arestas da peça.
keywords: spline, ponto de passagem, ponto de controlo, b-spline, nurbs, curva, aparar, prolongar, offset, espelhar, simétrico, polígono, hexágono, rasgo, matriz, matriz linear, matriz circular, projetar, projetar aresta, incluir, converter entidades
from: 3ecb166a
---

Estas ferramentas funcionam num esboço aberto. {{ui:Spline}} e {{ui:Aparar}} estão na barra de ferramentas. As restantes estão em {{ui:Mais}}, no fim das ferramentas de esboço. Cada ferramenta corresponde a um passo de anulação, e {{key:Esc}} interrompe-a. Para as ferramentas básicas de desenho, ver [Desenhar o seu primeiro esboço](topic:sketch-basics).

## Splines

Uma spline é uma curva suave. Há dois tipos.

| Ferramenta | Tecla | Como desenhar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Clicar nos pontos por onde a curva passa. Terminar com {{key:Enter}}, {{key:Esc}}, um clique com o botão direito ou um duplo clique. Clicar de novo no primeiro ponto para fechar a spline |
| {{ui:Spline por pontos de controlo}} (em {{ui:Mais}}) | | Clicar nos pontos de controlo. A curva é puxada na direção deles, mas só toca no primeiro e no último. O polígono de controlo a tracejado é mostrado enquanto desenha e depois |

- **Os pontos são pontos de esboço.** Arraste-os, ou atribua-lhes relações e cotas como a qualquer outro ponto. O primeiro ponto de uma spline pode fazer snap à extremidade de uma linha, o que os une por uma relação coincidente.
- **Tangente numa extremidade.** Selecione uma linha, arco ou spline que encontre uma extremidade de uma spline, depois a spline, e escolha {{ui:T Tangente}}. A direção final da spline passa então a seguir a linha. Uma tangente fora das extremidades da spline é recusada: « Uma tangente a uma spline exige que a linha, o arco ou a spline encontrem uma extremidade dela. »
- **Extremidades.** Sem uma relação de tangente, as extremidades de uma spline por pontos de passagem são naturais (sem curvatura na própria extremidade). A curva é cúbica e passa por todos os pontos, com o espaçamento definido pelas distâncias entre eles.
- **As splines fechadas** formam um perfil por si. As splines abertas unem linhas e arcos num circuito fechado, como qualquer outra curva.
- Eliminar um ponto no interior de uma spline remove esse ponto e mantém a spline, enquanto tiver pelo menos dois pontos (três quando fechada).

A extrusão e a revolução criam a spline com o kernel de malha a partir de pequenos segmentos retos (curvas verdadeiras exigem um kernel exato: ainda não implementado nesta versão). A exportação DXF escreve uma spline como polilinha que fica a menos de 0.01 mm da curva, porque o DXF R12 não tem entidade spline.

## Aparar e prolongar

| Ferramenta | Tecla | Como |
|---|---|---|
| {{ui:Aparar}} | {{key:T}} | Apontar uma curva: o troço que seria removido fica a vermelho, até aos cruzamentos mais próximos. Clicar para o remover. Uma curva que não cruza nada é removida inteira |
| {{ui:Prolongar}} (em {{ui:Mais}}) | {{key:E}} | Clicar numa linha ou arco junto à extremidade para prolongar. Cresce até à próxima curva que encontrar. « Não há nada que essa extremidade alcance. » quando nada está no caminho |

Aparar e Prolongar funcionam em linhas, arcos, círculos e splines (Prolongar: linhas e arcos).

- Um **círculo** aparado passa a arco. A sua cota de raio ou de diâmetro passa para o arco.
- Aparar o meio de uma linha deixa duas linhas que continuam na mesma reta. Aparar o meio de um arco deixa dois arcos com o mesmo centro e uma relação igual.
- Uma **spline** aparada passa a spline por pontos de controlo que segue exatamente a curva antiga. Uma relação de tangente numa extremidade que se mantenha continua.
- A nova extremidade fica sobre a curva que a cortou (na linha, arco ou círculo, ou coincidente com a sua extremidade). As splines não podem reter um ponto, pelo que uma spline que corta não acrescenta nenhuma relação.

**As relações que deixam de se aplicar são removidas**, e a barra de estado indica quantas. Por exemplo, uma cota de comprimento numa linha aparada é removida, mas as relações horizontais ou paralelas mantêm-se.

## Offset

1. Escolher {{ui:Offset}} em {{ui:Mais}} ou premir {{key:O}}.
2. Clicar numa linha, arco, círculo ou spline. Toda a sua cadeia fica realçada: todas as curvas unidas ponta a ponta, até um ponto onde se encontrem três ou mais. Para criar offset apenas de parte de uma cadeia, selecione primeiro essas curvas, depois escolha Offset e clique numa delas.
3. Mover o ponteiro para o lado onde fica a cópia. Uma pré-visualização a tracejado segue-o. Premir {{key:B}} para os dois lados.
4. Clicar, escrever a distância e premir {{key:Enter}}.

As linhas e os arcos têm offset exato. Os cantos são prolongados ou aparados até se encontrarem. A cópia tem uma cota **Offset**, e as restantes peças seguem-na: faça duplo clique na cota para alterar a cópia inteira. Uma distância grande demais para a cadeia é recusada, por exemplo: « Essa distância é grande demais para esta cadeia: um dos lados ficaria do avesso. »

Uma **spline** tem offset através de uma nova spline por pontos de passagem a menos de 0.001 mm do offset real. Esta cópia fica fixa: não segue alterações posteriores e não tem cota de Offset. Uma spline numa cadeia exige junções suaves (tangentes) nas suas extremidades.

## Espelhar

1. Com a ferramenta Selecionar, escolha o que espelhar.
2. Escolher {{ui:Espelhar}} em {{ui:Mais}} ou premir {{key:M}}.
3. Clicar na linha ou na linha de eixo em relação à qual se espelha.

Cada ponto espelhado recebe uma relação **Simétrico** com o original, pelo que a cópia segue quando o original muda. Os pontos situados sobre a linha de espelhamento são partilhados, e os círculos espelhados recebem uma relação **Igual**. Se nada estava selecionado, clique nos itens a espelhar, prima {{key:Enter}} e depois clique na linha de espelhamento.

## Polígonos e rasgos

| Ferramenta | Como |
|---|---|
| {{ui:Polígono}} | Clicar no centro, depois num canto, e depois escrever o número de lados (3 a 64). Os lados são iguais e os cantos ficam sobre um círculo de construção. Cotar o círculo para dimensionar o polígono |
| {{ui:Rasgo}} | Clicar no centro de uma extremidade, depois no centro da outra, e depois clicar para definir a largura. Duas linhas, tangentes a dois semicírculos iguais |

## Matrizes de esboço

Selecione primeiro a geometria e depois:

- {{ui:Matriz linear}}: clicar num ponto inicial, depois no local da primeira cópia, e depois escrever o número de cópias (incluindo o original).
- {{ui:Matriz circular}}: clicar no centro, depois escrever o número de cópias, distribuídas de forma uniforme por uma volta completa.

As cópias levam consigo as relações entre a geometria selecionada (uma matriz circular deixa de fora as horizontais e verticais). As cópias não estão ligadas ao original: se alterar uma, as outras mantêm-se como estão.

## Projetar arestas da peça

1. Escolher {{ui:Projetar aresta}} em {{ui:Mais}}.
2. Clicar numa aresta reta ou circular da peça situada por trás do esboço.

A aresta é copiada exatamente para o plano do esboço e fica fixa (relação Fixar). Não segue alterações posteriores à peça. Premir {{key:Q}} para a tornar geometria de construção. Um círculo inclinado em relação ao plano do esboço projetar-se-ia numa elipse, pelo que é recusado. O mesmo acontece com arestas de forma livre e com arestas que apontam diretamente para fora do esboço. Projetar exige um kernel exato: ainda não está implementado nesta versão.
