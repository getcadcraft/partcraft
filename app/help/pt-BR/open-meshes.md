---
title: Abrir um STL, OBJ ou 3MF como corpo sólido
summary: Transforme uma malha de um escâner, de um site de impressão 3D ou de outro programa em um sólido que você pode cortar, adicionar e desenhar sobre; o que o PartCraft repara no caminho e o que ele não consegue.
keywords: stl, obj, 3mf, malha, malha para sólido, converter malha, escaneamento, estanque, reparar, furos, lacunas, unidades, eixo para cima, corpo importado, faces planas
from: 7b948471
---

PartCraft abre malhas STL, OBJ e 3MF como **corpos sólidos**. O corpo funciona como qualquer outro sólido: corte, adicione, fure, faça matriz, use em uma montagem ou para usinagem, e desenhe sobre as faces planas. Ele não tem histórico próprio: uma malha são apenas triângulos, então seus tamanhos não podem ser alterados, só ter material adicionado ou cortado.

## Abrir uma malha

1. Escolha {{ui:Abrir}} ou pressione {{key:Mod+O}}, e selecione o arquivo `.stl`, `.obj` ou `.3mf`. Ou solte-o na visualização 3D.
2. O PartCraft lê o arquivo, repara o que pode com segurança e mostra o que encontrou: quantos triângulos e pontos, cada reparo, e se a malha agora **fecha**.
3. Confira **Unidades no arquivo** e **Para cima no arquivo**. STL e OBJ não informam suas unidades, então milímetros é o palpite; um arquivo 3MF informa as suas. A linha **Tamanho aqui** mostra o tamanho do corpo com a sua escolha, então uma peça que entra 25.4 vezes menor é fácil de notar (estava em polegadas).
4. Se a peça na tela estiver vazia, escolha {{ui:Abrir como corpo}}. Se ela já tem recursos, escolha **Usar para** (adicionar à peça, cortar dela, ou manter só a sobreposição), depois {{ui:Adicionar a esta peça}}, ou {{ui:Nova peça}} para recomeçar com a malha.

Um recurso **Imported1** aparece no histórico. A barra de status diz, por exemplo: "bracket.stl é um corpo sólido: 15200.512 mm³, 14 faces planas para esboçar."

## O que o PartCraft repara

| Reparo | O que significa |
|---|---|
| Cantos duplicados unidos | Um STL repete cada canto para cada um dos seus triângulos; eles são unidos em um só ponto |
| Triângulos sem área removidos | Lascas cujos cantos ficam em uma mesma linha |
| Triângulos duplicados removidos | Um triângulo gravado duas vezes é mantido uma vez; dois virados em sentidos opostos (uma parede interna) são ambos removidos |
| Pequenas lacunas fechadas | Arestas que quase se encontram (dentro de um milésimo do tamanho da peça) são unidas |
| Furos preenchidos | Uma abertura cuja borda fica plana é preenchida, qualquer que seja o tamanho; uma empenada só quando é pequena |
| Triângulos virados para fora | Triângulos voltados para o lado errado são virados para concordar com os vizinhos, e a superfície inteira fica voltada para fora |

## Quando uma malha não fecha

Um sólido precisa de uma superfície sem aberturas. Quando o PartCraft não consegue fechar uma, a caixa de diálogo informa quantas aberturas e arestas abertas restam, e não há corpo para adicionar. Feche as aberturas no programa que criou a malha, ou exporte-a de novo como malha fechada (estanque), e abra de novo.

O PartCraft deixa uma abertura em paz quando preenchê-la poderia adivinhar errado: um furo grande e empenado, ou duas aberturas no mesmo plano (uma face em forma de anel que falta, onde preencher cada borda cobriria o furo do meio). Uma aresta compartilhada por mais de dois triângulos também é informada: essa superfície não tem um interior claro.

## Desenhar sobre as faces planas

Áreas planas feitas de muitos triângulos são unidas em uma **face plana** cada, para que um esboço possa ficar sobre elas: clique na face e escolha {{ui:Esboço nesta face}}. Uma face que for cortada ou acrescida depois continua sendo face. Áreas redondas (um furo, um arredondamento) continuam sendo triângulos: não são faces que você pode escolher, e a visualização desenha o contorno delas pelo ângulo entre os triângulos.

## Alterar depois

Selecione **Imported1** para ver o arquivo de origem, quantos triângulos ele tem e o que foi reparado. **Unidades no arquivo**, **Para cima no arquivo** e **Usar para** podem ser alterados ali; cada alteração é um passo do desfazer.

## Onde fica guardado

A malha reparada fica salva **dentro** do arquivo `.partcraft.json`, então você não precisa do arquivo da malha de novo. Um arquivo de peça com um corpo de malha é a versão 5: um PartCraft mais antigo a recusa pela versão. Uma malha de 200.000 triângulos acrescenta cerca de 1.2 MB.

## Limites

- No máximo 3 milhões de triângulos e 200 MB em um arquivo.
- Um corpo feito de uma malha é construído pelo kernel de malha. Com o kernel exato ligado (só desenvolvedores), ele avisa isso e não é construído.
- Materiais OBJ, coordenadas de textura e curvas de forma livre ficam de fora; cores, materiais e objetos de suporte 3MF também (a caixa de diálogo informa quantos objetos foram ignorados).
- O corpo é tão fino quanto a malha: um STL grosseiro dá faces redondas grosseiras. Os furos que você fizer nele são tão redondos quanto os seus próprios recursos.
