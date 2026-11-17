---
title: Nós: construir um modelo por ligação
summary: Ligue números a pontos, pontos a curvas e curvas a superfícies. Altere um número e tudo o que depende dele é refeito. Cada nó é também uma linha de CraftScript, e o grafo fica guardado no ficheiro.
keywords: nós, editor de nós, programação visual, paramétrico, grafo, fios, portas, forma livre, freeform, nurbs, loft, extrusão, revolução, círculo, curva, superfície, série, intervalo, aleatório, lista, script, craftscript, grasshopper
from: 3a4625de
---

O editor de **Nós** constrói geometria ligando caixas entre si. Cada caixa (um nó) faz uma pequena tarefa: criar um número, um ponto, um círculo, um loft. Liga o resultado de uma à entrada da seguinte, e o modelo acompanha quando altera um número no início.

Abra-o a partir da lista de áreas de trabalho: {{ui:Nós}}. Abre a janela do editor. Uma peça que já tenha um grafo mostra-o ao abrir a área de trabalho. É uma janela sobreposta à vista 3D: arraste a barra de título para a mover, arraste o canto para a redimensionar.

## Ligações

1. Escolha um nó na lista à esquerda (escreva na caixa de pesquisa para a restringir; <kbd>Enter</kbd> acrescenta a primeira correspondência). O nó aparece no meio da área de desenho.
2. Arraste de um ponto de **saída** redondo, à direita de um nó, para um ponto de **entrada** redondo, à esquerda de outro. O ponto fica verde quando encaixa e vermelho quando não encaixa; aponte-o para ver o motivo.
3. Uma entrada sem nada ligado mostra uma caixa para um valor escrito. Escreva um número e prima <kbd>Tab</kbd>: o resultado é refeito.
4. O pequeno círculo na barra de título de um nó é o seu **olho**. Um nó com o olho ligado é desenhado na vista 3D: como linhas para as curvas, sombreado para as superfícies, pontos para os pontos.

Arraste um nó pela barra de título. Arraste o fundo para deslocar a vista, e rode a roda do rato para ampliar. <kbd>Delete</kbd> remove o nó selecionado. {{ui:Arrumar}} dispõe os nós em colunas, {{ui:Ajustar}} traz todos para a vista, e {{ui:Anular}} e {{ui:Refazer}} percorrem as suas edições.

## Tipos e unidades

As portas têm um tipo: número, sim/não, ponto, vetor, curva, superfície, malha, sólido, ou "geometria" para qualquer um destes. Um ponto pode alimentar uma entrada de vetor, e vice-versa. Os números levam uma unidade: um **comprimento** está em milímetros e um **ângulo** em graus. Um comprimento não pode alimentar um ângulo, e um comprimento vezes um comprimento (uma área) é recusado, pelo que uma ligação errada é impedida no momento em que é feita.

Um ponto quadrado é uma **lista**. Quando uma lista chega a uma entrada de valor único, o nó corre uma vez para cada item, e o seu resultado passa a ser uma lista. A lista mais curta repete o último item. Por exemplo, uma **Série** de alturas ligada a **Mover** cria uma pilha de cópias.

## Sólidos e booleanos como nós

O grupo **Sólidos** cria corpos fechados a partir das mesmas superfícies exatas do painel Superfícies: **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** (dimensões em mm), **União**, **Subtrair** e **Interseção** (o segundo sólido é tirado do primeiro; a tolerância é o afastamento máximo que os triângulos do motor de sólidos podem ter das superfícies exatas), **Boleado entre faces** (as faces pelo seu número no sólido, 1 para a primeira; um raio e, acima de 0, um raio no fim), **Volume do sólido** (mm³) e **Sólido para malha** (para ver ou fixar). Um sólido tem o seu próprio tipo de porta: um ponto ou um número não podem ser ligados a uma entrada de sólido, e o ponto fica vermelho. Os nós booleanos e de boleado usam o motor de sólidos do próprio programa, carregado na primeira vez que o editor abre.

## Erros

Um nó que não consegue fazer o seu trabalho diz porquê, sob o nome, a vermelho ("O raio tem de ser superior a zero."), e os nós seguintes aguardam. A mesma mensagem aparece como um problema no painel Problemas, para o encontrar a partir daí.

## Cada nó é uma linha de script

Prima {{ui:Script}} para ver o grafo como CraftScript: uma linha por nó, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e prima {{ui:Criar o grafo a partir deste script}} para o trazer de volta a grafo. As mesmas funções `nd_` funcionam num CraftScript na PartCraft, pelo que um grafo pode ser executado, repetido ou testado aí. Os números aleatórios levam sempre uma **semente**, para que o mesmo grafo dê o mesmo resultado em qualquer computador.

## Guardado com o ficheiro

O grafo fica guardado no ficheiro da peça (não no histórico, pelo que o Anular do editor é próprio). Os nós criam curvas, superfícies e malhas ao lado do sólido: não alteram as operações da peça.
