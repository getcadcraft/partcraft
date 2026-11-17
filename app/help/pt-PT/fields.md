---
title: Campos: formas como distâncias
summary: O que é um campo (uma forma guardada como a distância à sua superfície), como criar um a partir de primitivas, booleanas, reticulados e superfícies mínimas num script, como se torna um corpo, e porque é que o mesmo script dá sempre os mesmos bytes.
keywords: campo, distância com sinal, sdf, voxel, giroide, tpms, reticulado, booleana, offset, casca, mistura, contorno dual, determinístico, estanque, variedade, bloco
from: faab7480
---

Um **campo** descreve uma forma pela distância de qualquer ponto à sua superfície: negativa dentro, zero na superfície, positiva fora. Uma esfera de raio 5 é "a distância ao centro menos 5". Combinar formas é aritmética sobre distâncias: a união é a menor das duas, a interseção é a maior, e subtrair uma forma a outra é a maior entre a primeira e a menos a segunda. Aumentar uma forma em 1 mm subtrai 1 à distância; uma parede oca é a distância, dobrada sobre si mesma.

É por isso que os campos são bons para reticulados, canais e paredes com espessura variável: a superfície de um giroide é "a soma dos senos é zero", e uma parede que engrossa de 1 a 3 mm ao longo da peça é um número que muda ao longo da peça.

## Do campo ao corpo

`to_body(field, h)` amostra o campo numa grelha de pontos afastados `h` milímetros, guardando apenas os pontos perto da superfície (uma grelha esparsa de blocos de 8 × 8 × 8), e constrói a superfície por **contorno dual**: um vértice por célula da superfície, colocado onde os planos da superfície se encontram, de modo que uma aresta viva fica viva até um voxel. A superfície é fechada e cada aresta é partilhada exatamente por dois triângulos; o relatório indica-o. Uma peça mais fina do que cerca de três voxels pode estrangular-se, e então o relatório diz que o corpo não é um sólido fechado, em vez de o esconder.

O tamanho do voxel define a precisão: o volume de uma esfera com 25 voxels de diâmetro fica dentro de algumas centésimas de por cento, e uma parede só é tão exata quanto os seus voxels. Quanto mais grosseira a grelha, mais depressa corre.

## Sempre os mesmos bytes

Um campo não tem relógio nem número aleatório. O seno e o cosseno de um giroide, e cada exponencial, logaritmo e potência da biblioteca, são calculados a partir de aritmética simples, para que o Node, o Chrome, o Firefox e o Safari dêem os mesmos bits; a grelha é percorrida por uma ordem fixa. Por isso, o mesmo script com as mesmas entradas dá malhas e folhas de dados idênticas byte a byte, em qualquer computador e com qualquer número de threads de trabalho. Isto está testado, incluindo um navegador contra o Node.

## Próximos passos

[Escrever um gerador](topic:write-a-generator) cria uma peça com campos; [A biblioteca de engenharia](topic:engineering-library) dimensiona-a.
