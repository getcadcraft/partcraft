---
title: Nós: criar um modelo conectando
summary: Conecte números a pontos, pontos a curvas e curvas a superfícies. Altere um número e tudo o que depende dele é refeito. Cada nó também é uma linha de CraftScript, e o grafo fica salvo no arquivo.
keywords: nós, editor de nós, programação visual, paramétrico, grafo, fios, portas, forma livre, nurbs, loft, extrusão, revolução, círculo, curva, superfície, série, intervalo, aleatório, lista, script, craftscript, grasshopper
from: 3a4625de
---

O editor de **Nós** cria geometria conectando caixas. Cada caixa (um nó) faz uma pequena tarefa: criar um número, um ponto, um círculo, um loft. Você liga o resultado de um à entrada do próximo, e o modelo acompanha quando você altera um número no início.

Abra pela lista da área de trabalho: {{ui:Nós}}. Ele abre a janela do editor. Uma peça que já tem um grafo o mostra ao abrir a área de trabalho. É uma janela sobre a visualização 3D: arraste a barra de título para mover e o canto para redimensionar.

## Conectar

1. Escolha um nó na lista à esquerda (digite na caixa de busca para filtrar; <kbd>Enter</kbd> adiciona a primeira correspondência). Ele aparece no meio da tela.
2. Arraste de um ponto de **saída** redondo à direita de um nó até um ponto de **entrada** redondo à esquerda de outro. O ponto fica verde quando encaixa e vermelho quando não; aponte para ele para ver o motivo.
3. Uma entrada sem nada conectado mostra uma caixa para um valor digitado. Digite um número e pressione <kbd>Tab</kbd>: o resultado é refeito.
4. O pequeno círculo na barra de título de um nó é o seu **olho**. Um nó com o olho ligado é desenhado na visualização 3D: como linhas para curvas, sombreado para superfícies, pontos para pontos.

Arraste um nó pela barra de título. Arraste o fundo para mover a tela e role a roda para dar zoom. <kbd>Delete</kbd> remove o nó selecionado. {{ui:Organizar}} dispõe os nós em colunas, {{ui:Ajustar}} traz todos para a vista, e {{ui:Desfazer}} e {{ui:Refazer}} percorrem as suas edições.

## Tipos e unidades

As portas têm um tipo: número, sim/não, ponto, vetor, curva, superfície, malha, sólido, ou "geometria" para qualquer um desses. Um ponto pode alimentar uma entrada de vetor e vice-versa. Os números têm unidade: um **comprimento** é em milímetros e um **ângulo** é em graus. Um comprimento não pode alimentar um ângulo, e um comprimento vezes um comprimento (uma área) é recusado, então uma ligação errada é bloqueada no momento em que você a faz.

Um ponto quadrado é uma **lista**. Quando uma lista chega a uma entrada de valor único, o nó roda uma vez para cada item, e o resultado vira uma lista. A lista menor repete o último item. Por exemplo, uma **Série** de alturas ligada a **Mover** cria uma pilha de cópias.

## Sólidos e booleanas como nós

O grupo **Sólidos** cria corpos fechados a partir das mesmas superfícies exatas do painel Superfícies: **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** (tamanhos em mm), **União**, **Subtrair** e **Interseção** (o segundo sólido vem do primeiro; a tolerância é o quanto os triângulos do motor de sólidos podem ficar das superfícies exatas), **Arredondamento entre faces** (as faces pelo seu número no sólido, 1 para a primeira; um raio e, acima de 0, um raio no fim), **Volume do sólido** (mm³) e **Sólido para malha** (para ver ou incorporar). Um sólido tem seu próprio tipo de porta: um ponto ou um número não pode ser ligado a uma entrada de sólido, e o ponto fica vermelho. Os nós de booleana e de arredondamento usam o motor de sólidos do próprio programa, carregado na primeira vez que o editor abre.

## Erros

Um nó que não consegue fazer sua tarefa diz o motivo sob o nome, em vermelho ("O raio deve ser maior que zero."), e os nós depois dele esperam. A mesma mensagem aparece como um problema no painel Problemas, para você encontrá-la por lá.

## Cada nó é uma linha de script

Pressione {{ui:Script}} para ver o grafo como CraftScript: uma linha por nó, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e pressione {{ui:Criar o grafo a partir deste script}} para trazê-lo de volta como grafo. As mesmas funções `nd_` funcionam em um CraftScript no PartCraft, então um grafo pode ser executado, usado em laços ou testado ali. Números aleatórios sempre recebem uma **semente**, então o mesmo grafo dá o mesmo resultado em qualquer computador.

## Salvo com o arquivo

O grafo é salvo no arquivo da peça (não no histórico; por isso o Desfazer do editor é independente). Os nós criam curvas, superfícies e malhas ao lado do sólido: eles não alteram os recursos da peça.
