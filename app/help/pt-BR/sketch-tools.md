---
title: Splines, aparar, deslocar e outras ferramentas de esboço
summary: Desenhe splines por pontos de ajuste e por pontos de controle, apare e estenda curvas, desloque uma cadeia, espelhe em torno de uma linha de centro, adicione polígonos e rasgos, crie matrizes de geometria de esboço e projete arestas do modelo.
keywords: spline, ponto de ajuste, ponto de controle, b-spline, nurbs, curva, aparar, estender, deslocar, espelhar, simétrica, polígono, hexágono, rasgo, matriz, matriz linear, matriz circular, projetar, projetar aresta, incluir, converter entidades
from: 3ecb166a
---

Estas ferramentas funcionam em um esboço aberto. {{ui:Spline}} e {{ui:Aparar}} estão na barra de ferramentas. As demais ficam em {{ui:Mais}}, no fim das ferramentas de esboço. Cada ferramenta é um passo de desfazer, e {{key:Esc}} a interrompe. Para as ferramentas básicas de desenho, veja [Desenhar o primeiro esboço](topic:sketch-basics).

## Splines

Uma spline é uma curva suave. Há dois tipos.

| Ferramenta | Tecla | Como desenhar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Clique nos pontos por onde a curva passa. Termine com {{key:Enter}}, {{key:Esc}}, clique com o botão direito ou clique duas vezes. Clique no primeiro ponto de novo para fechar a spline |
| {{ui:Spline por pontos de controle}} (em {{ui:Mais}}) | | Clique nos pontos de controle. A curva é puxada na direção deles, mas toca apenas o primeiro e o último. O polígono de controle tracejado aparece enquanto você desenha e depois |

- **Os pontos são pontos de esboço.** Arraste-os ou dê a eles relações e cotas como a qualquer outro ponto. O primeiro ponto de uma spline pode encaixar na extremidade de uma linha, o que a une com uma relação coincidente.
- **Tangente em uma extremidade.** Selecione uma linha, arco ou spline que encontra uma extremidade da spline, depois a spline, e escolha {{ui:T Tangente}}. A direção da extremidade da spline então segue a linha. Uma tangente fora das extremidades da spline é recusada: "Uma tangente a uma spline exige que a linha, o arco ou a spline encontre uma de suas extremidades."
- **Extremidades.** Sem uma relação de tangente, as extremidades de uma spline por pontos de ajuste são naturais (sem curvatura na ponta). A curva é cúbica e passa por todos os pontos, com o espaçamento definido pelas distâncias entre os pontos.
- **Splines fechadas** formam um perfil por conta própria. Splines abertas unem linhas e arcos em um laço fechado como qualquer outra curva.
- Excluir um ponto dentro de uma spline remove esse ponto e mantém a spline, enquanto ela tiver pelo menos dois pontos (três quando fechada).

Extrusão e revolução constroem a spline com o kernel de malha a partir de pequenos trechos retos (curvas verdadeiras exigem um kernel exato: ainda não implementado nesta versão). A exportação DXF grava uma spline como polilinha que fica a até 0.01 mm da curva, porque o DXF R12 não tem entidade spline.

## Aparar e estender

| Ferramenta | Tecla | Como |
|---|---|---|
| {{ui:Aparar}} | {{key:T}} | Aponte para uma curva: o trecho que seria removido fica vermelho, até os cruzamentos mais próximos. Clique para removê-lo. Uma curva que não cruza nada é removida inteira |
| {{ui:Estender}} (em {{ui:Mais}}) | {{key:E}} | Clique em uma linha ou arco perto da extremidade para estendê-lo. Ele cresce até a próxima curva que encontrar. "Não há nada que essa extremidade alcance." quando nada está no caminho |

Aparar e Estender funcionam em linhas, arcos, círculos e splines (Estender: linhas e arcos).

- Um **círculo** aparado vira um arco. Sua cota de raio ou diâmetro passa para o arco.
- Aparar o meio de uma linha deixa duas linhas que continuam na mesma reta. Aparar o meio de um arco deixa dois arcos com o mesmo centro e uma relação Igual.
- Uma **spline** aparada vira uma spline por pontos de controle que segue exatamente a curva antiga. Uma relação de tangente em uma extremidade mantida permanece.
- A nova extremidade é colocada sobre a curva que a cortou (sobre a linha, arco ou círculo, ou coincidente com a extremidade dela). Splines não podem reter um ponto, então uma spline que corta não adiciona relação.

**Relações que deixaram de caber são removidas**, e a barra de status informa quantas. Por exemplo, uma cota de comprimento em uma linha aparada é removida, mas as relações horizontais ou paralelas permanecem.

## Deslocar

1. Escolha {{ui:Deslocar}} em {{ui:Mais}} ou pressione {{key:O}}.
2. Clique em uma linha, arco, círculo ou spline. Toda a sua cadeia fica destacada: todas as curvas unidas ponta a ponta, até um ponto onde três ou mais se encontram. Para deslocar apenas parte de uma cadeia, selecione essas curvas primeiro, depois escolha Deslocar e clique em uma delas.
3. Mova o ponteiro para o lado onde a cópia vai. Uma prévia tracejada acompanha. Pressione {{key:B}} para os dois lados.
4. Clique, digite a distância e pressione {{key:Enter}}.

Linhas e arcos são deslocados com exatidão. Os cantos são estendidos ou aparados até se encontrarem. A cópia tem uma cota de **Deslocar**, e as outras peças a seguem: dê duplo clique na cota para mudar a cópia inteira. Uma distância grande demais para a cadeia é recusada, por exemplo: "Essa distância é grande demais para esta cadeia: um dos lados se inverteria."

Uma **spline** é deslocada por uma nova spline por pontos de ajuste, a até 0.001 mm da verdadeira curva deslocada. Esta cópia é fixa: não segue mudanças posteriores e não tem cota de Deslocar. Uma spline em uma cadeia precisa de junções suaves (tangentes) nas extremidades.

## Espelhar

1. Com Selecionar, escolha o que espelhar.
2. Escolha {{ui:Espelhar}} em {{ui:Mais}} ou pressione {{key:M}}.
3. Clique na linha ou linha de centro em torno da qual espelhar.

Cada ponto espelhado recebe uma relação **Simétrica** com o original, então a cópia acompanha quando o original muda. Pontos que estão sobre a linha de espelho são compartilhados, e círculos espelhados recebem uma relação Igual. Se nada foi selecionado, clique nos itens a espelhar, pressione {{key:Enter}} e depois clique na linha de espelho.

## Polígonos e rasgos

| Ferramenta | Como |
|---|---|
| {{ui:Polígono}} | Clique no centro, depois em um canto, e digite o número de lados (de 3 a 64). Os lados são iguais e os cantos ficam sobre um círculo de construção. Cote o círculo para dimensionar o polígono |
| {{ui:Rasgo}} | Clique no centro de uma extremidade, depois no centro da outra, depois clique para definir a largura. Duas linhas, tangentes a dois semicírculos iguais |

## Matrizes de esboço

Selecione primeiro a geometria e depois:

- {{ui:Matriz linear}}: clique em um ponto inicial, depois onde a primeira cópia vai, e digite o número de cópias (incluindo o original).
- {{ui:Matriz circular}}: clique no centro, depois digite o número de cópias, distribuídas igualmente em uma volta completa.

As cópias levam consigo as relações entre a geometria selecionada (uma matriz circular deixa de fora as horizontais e verticais). As cópias não são ligadas ao original: se você mudar uma, as outras permanecem como estão.

## Projetar arestas da peça

1. Escolha {{ui:Projetar aresta}} em {{ui:Mais}}.
2. Clique em uma aresta reta ou circular da peça atrás do esboço.

A aresta é copiada exatamente para o plano do esboço e fica fixa (relação Fixa). Ela não segue mudanças posteriores na peça. Pressione {{key:Q}} para torná-la geometria de construção. Um círculo inclinado em relação ao plano do esboço seria projetado como elipse, então é recusado. Também são recusadas arestas de forma livre e arestas que apontam diretamente para fora do esboço. Projetar exige um kernel exato: ainda não implementado nesta versão.
