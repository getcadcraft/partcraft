---
title: Abrir um STL, OBJ ou 3MF como corpo sólido
summary: Transforme uma malha de um scanner, de um site de impressão 3D ou de outro programa num sólido que pode cortar, acrescentar e sobre o qual pode esboçar; o que a PartCraft repara pelo caminho e o que não consegue reparar.
keywords: stl, obj, 3mf, malha, malha para sólido, converter malha, scan, estanque, reparar, furos, falhas, unidades, eixo para cima, corpo importado, faces planas
from: 7b948471
---

A PartCraft abre malhas STL, OBJ e 3MF como **corpos sólidos**. O corpo funciona como qualquer outro sólido: pode cortá-lo, acrescentar-lhe material, furá-lo, fazer matrizes, usá-lo numa montagem ou para maquinação, e esboçar nas suas faces planas. Não tem histórico próprio: uma malha é apenas triângulos, pelo que as suas dimensões não podem ser alteradas, só acrescentadas ou cortadas.

## Abrir uma malha

1. Escolha {{ui:Abrir}} ou prima {{key:Mod+O}}, e escolha o ficheiro `.stl`, `.obj` ou `.3mf`. Ou largue-o na vista 3D.
2. A PartCraft lê-o, repara o que consegue reparar com segurança e mostra o que encontrou: quantos triângulos e pontos, cada reparação, e se a malha agora **fecha**.
3. Verifique as **Unidades no ficheiro** e o **Para cima no ficheiro**. Os STL e OBJ não indicam as suas unidades, pelo que os milímetros são uma suposição; um ficheiro 3MF indica as suas próprias. A linha **Tamanho aqui** mostra o tamanho do corpo com a sua escolha, pelo que uma peça que chega 25,4 vezes mais pequena é fácil de detetar (estava em polegadas).
4. Se a peça no ecrã estiver vazia, escolha {{ui:Abrir como corpo}}. Se já tiver operações, escolha **Usar para** (acrescentar à peça, cortar dela, ou manter só a sobreposição), depois {{ui:Acrescentar a esta peça}}, ou {{ui:Nova peça}} para recomeçar com a malha.

Uma operação **Imported1** aparece no histórico. A barra de estado diz, por exemplo, "bracket.stl é um corpo sólido: 15200.512 mm³, 14 faces planas para esboçar".

## O que a PartCraft repara

| Reparação | O que significa |
|---|---|
| Cantos duplicados unidos | Um STL repete cada canto para cada um dos seus triângulos; são unidos num só ponto |
| Triângulos sem área removidos | Lascas cujos cantos estão numa mesma linha |
| Triângulos duplicados removidos | Um triângulo escrito duas vezes é mantido uma só; dois virados em sentidos opostos (uma parede interior) são ambos removidos |
| Pequenas falhas fechadas | Arestas que quase se encontram (dentro de uma milésima do tamanho da peça) são unidas |
| Furos preenchidos | Uma abertura cujo bordo fica plano é preenchida, seja qual for o tamanho; uma abertura empenada só quando é pequena |
| Triângulos virados para fora | Triângulos virados no sentido errado são rodados para concordar com os vizinhos, e a superfície inteira fica virada para fora |

## Quando uma malha não fecha

Um sólido precisa de uma superfície sem aberturas. Quando a PartCraft não consegue fechá-la, o diálogo indica quantas aberturas e arestas abertas restam, e não há corpo para acrescentar. Feche as aberturas no programa que criou a malha, ou exporte-a de novo como malha fechada (estanque), e volte a abri-la.

A PartCraft deixa uma abertura por preencher quando preenchê-la poderia adivinhar mal: um furo grande e empenado, ou duas aberturas no mesmo plano (uma face em anel que está em falta, em que preencher cada bordo cobriria o furo do meio). Uma aresta partilhada por mais de dois triângulos também é indicada: uma superfície assim não tem um interior claro.

## Esboçar nas suas faces planas

As zonas planas feitas de muitos triângulos são fundidas numa **face plana** cada uma, para que um esboço possa assentar nelas: clique na face e escolha {{ui:Esboço nesta face}}. Uma face que seja cortada ou à qual se acrescente material mais tarde continua a ser uma face. As zonas redondas (um furo, um boleado) continuam a ser triângulos: não são faces que possa escolher, e a vista desenha o seu contorno a partir do ângulo entre triângulos.

## Alterar mais tarde

Escolha **Imported1** para ver o ficheiro de origem, quantos triângulos tem e o que foi reparado. **Unidades no ficheiro**, **Para cima no ficheiro** e **Usar para** podem ser alterados aí; cada alteração é um passo de anulação.

## Onde fica guardado

A malha reparada fica guardada **dentro** do ficheiro `.partcraft.json`, pelo que já não precisa do ficheiro da malha. Um ficheiro de peça com um corpo de malha é a versão 5: uma PartCraft mais antiga recusa-o pela versão. Uma malha de 200 000 triângulos acrescenta cerca de 1,2 MB.

## Limites

- No máximo 3 milhões de triângulos e 200 MB num só ficheiro.
- Um corpo feito a partir de uma malha é construído pelo núcleo de malha. Com o núcleo exato ativo (só para programadores), a PartCraft indica-o e não o constrói.
- Materiais OBJ, coordenadas de textura e curvas de forma livre ficam de fora; cores, materiais e objetos de suporte de 3MF ficam de fora (o diálogo indica quantos objetos foram ignorados).
- O corpo é tão fino como a malha: um STL grosseiro dá faces redondas grosseiras. Os furos que fizer nele são tão redondos como as suas próprias operações.
