---
title: Abrir um modelo .3dm como corpo sólido
summary: Traga as malhas, polissuperfícies e blocos de um arquivo .3dm para o PartCraft como um corpo sólido que você pode cortar, adicionar e desenhar sobre; de onde vêm os triângulos e o que fica de fora.
keywords: 3dm, nurbs, polissuperfície, brep, superfícies, malha de renderização, extrusão, blocos, importar, malha para sólido, unidades, corpo importado
from: 8ae9571b
---

O PartCraft abre arquivos `.3dm` como **corpos sólidos**, do mesmo jeito que abre uma [malha STL, OBJ ou 3MF](topic:open-meshes). O corpo funciona como qualquer outro sólido: corte, adicione, fure, faça matriz e desenhe sobre as faces planas. Ele não tem histórico próprio.

## Abrir o arquivo

1. Escolha {{ui:Abrir}} ou pressione {{key:Mod+O}}, e selecione o arquivo `.3dm`. Ou solte-o na visualização 3D.
2. O PartCraft lê o arquivo e mostra o que encontrou: quantos objetos com faces entram, quantas faces vieram das malhas salvas no arquivo e quantas o PartCraft triangulou, cada reparo, e se o resultado **fecha**.
3. Confira **Unidades no arquivo** (o arquivo informa as suas; uma unidade que o PartCraft não lista, como jardas, é convertida para milímetros) e **Para cima no arquivo**.
4. Escolha {{ui:Abrir como corpo}}, ou **Usar para** e {{ui:Adicionar a esta peça}} quando a peça já tem recursos.

## De onde vêm os triângulos

O PartCraft cria corpos a partir de triângulos nesta versão, então cada superfície do arquivo vira pequenas faces planas. Para cada face de uma polissuperfície (e de cada extrusão), ele usa a **malha de renderização salva no arquivo** quando existe; senão, **a gera sozinho** (planos, superfícies NURBS, superfícies de revolução, curvas extrudadas e extrusões, aparadas pelas suas arestas). Faces de uma mesma polissuperfície compartilham seus pontos de aresta, então uma polissuperfície fechada entra fechada. Uma face de um tipo de superfície que o PartCraft ainda não lê fica de fora, e a caixa de diálogo informa quantas e de que tipo; o resultado geralmente não fecha.

## Tudo no arquivo vira um corpo

Cada malha, polissuperfície e extrusão visível, e cada posicionamento de um bloco, entra em **um** corpo, onde o arquivo o coloca. Objetos ocultos, ou em uma camada desligada, ficam de fora. Quando o arquivo tem vários sólidos separados, o corpo tem várias peças: abra cada um a partir do próprio arquivo se quiser que sejam corpos separados.

## O que fica de fora (e é informado)

Curvas, pontos, nuvens de pontos, textos, cotas, hachuras e luzes ficam de fora: um corpo recebe só faces. Também ficam de fora objetos SubD (transforme-os em malhas ou polissuperfícies no programa que criou o arquivo antes), blocos vinculados a outros arquivos, e cores, camadas e nomes (os corpos do PartCraft não têm nenhum próprio aqui).

## Quando não fecha

Polissuperfícies e superfícies abertas (uma única superfície aparada, uma forma com uma face faltando) não têm interior, então não podem ser um sólido. A caixa de diálogo informa quantas aberturas restam e não adiciona nada. Una ou feche a forma no programa que a criou, salve e abra de novo. Veja [Quando uma malha não fecha](topic:open-meshes#when-a-mesh-does-not-close).
