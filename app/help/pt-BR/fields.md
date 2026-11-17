---
title: "Campos: formas como distâncias"
summary: O que é um campo (uma forma guardada como a distância até a sua superfície), como criar um a partir de primitivas, booleanas, treliças e superfícies mínimas em um script, como ele vira um corpo e por que o mesmo script sempre gera os mesmos bytes.
keywords: campo, distância com sinal, sdf, voxel, giroide, tpms, treliça, booleana, deslocamento, casca, mesclagem, dual contouring, determinístico, estanque, manifold, bloco
from: faab7480
---

Um **campo** descreve uma forma pela distância de qualquer ponto até a sua superfície: negativa dentro, zero na superfície, positiva fora. Uma esfera de raio 5 é "a distância até o centro menos 5". Combinar formas é aritmética sobre distâncias: a união é a menor de duas, a interseção é a maior, e subtrair uma forma de outra é a maior entre a primeira e o negativo da segunda. Aumentar uma forma em 1 mm subtrai 1 da distância; uma parede oca é a distância, dobrada sobre si mesma.

Por isso os campos são bons para treliças, canais e paredes com gradação: a superfície de um giroide é "a soma dos senos é zero", e uma parede que engrossa de 1 a 3 mm ao longo da peça é um número que muda ao longo da peça.

## Do campo ao corpo

`to_body(field, h)` amostra o campo em uma grade de pontos distantes `h` milímetros entre si, mantendo apenas os pontos próximos à superfície (uma grade esparsa de blocos 8 × 8 × 8), e constrói a superfície por **dual contouring**: um vértice por célula da superfície, posicionado onde os planos da superfície se encontram, de modo que uma aresta viva continua viva dentro de um voxel. A superfície é fechada e cada aresta é compartilhada por exatamente dois triângulos; o relatório informa isso. Um recurso mais fino que cerca de três voxels pode se estreitar, e então o relatório diz que o corpo não é um sólido fechado, em vez de esconder isso.

O tamanho do voxel é a precisão: o volume de uma esfera com 25 voxels de largura fica a menos de alguns centésimos por cento do valor real; uma parede só é tão exata quanto os seus voxels. Quanto mais grossa a grade, mais rápido ela roda.

## Sempre os mesmos bytes

Um campo não tem relógio nem número aleatório. O seno e o cosseno de um giroide, e toda exponencial, logaritmo e potência da biblioteca, são calculados com aritmética simples para que Node, Chrome, Firefox e Safari dêem os mesmos bits; a grade é percorrida em ordem fixa, então o mesmo script com as mesmas entradas gera malhas e fichas de dados idênticos byte a byte, em qualquer computador e com qualquer número de threads de trabalho. Isso é testado, inclusive um navegador contra o Node.

## Próximos passos

[Escrever um gerador](topic:write-a-generator) cria uma peça com campos; [A biblioteca de engenharia](topic:engineering-library) dimensiona a peça.
