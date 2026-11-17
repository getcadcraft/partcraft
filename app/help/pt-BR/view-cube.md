---
title: O cubo de vista
summary: Clique em uma face, aresta ou canto do cubo no canto da vista para olhar dali, arraste-o para orbitar, gire o anel da bússola, percorra as vistas de face e volte à vista inicial.
keywords: cubo de vista, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, superior, frontal, direita, isométrica, canto, aresta, órbita, girar vista, ícone de eixos, indicador de canto, navegação
from: afc33dc7
---

O cubo de vista fica no canto superior direito da vista 3D (não durante o esboço nem na folha de desenho). Ele gira com a vista, então sempre mostra para onde você está olhando: {{ui:Superior}} é o lado +Y da peça (o plano Superior), {{ui:Frontal}} o lado +Z (o plano Frontal fica voltado para você quando você olha para ele), {{ui:Direita}} o lado +X. Ele fica transparente até você apontar para ele.

## Olhar de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A peça sob o ponteiro acende: o meio de uma face, uma aresta (acende nas duas faces que ela une) ou um canto (nas três faces).
2. Clique nele. A vista gira para olhar dali, mantendo o mesmo centro e zoom.

Há 26 pontos para clicar: 6 faces ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Voltar}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista de três quartos; uma aresta fica no meio caminho entre duas faces.

Clicar em {{ui:Frontal}}, {{ui:Superior}} ou {{ui:Direita}} dá as mesmas vistas de {{ui:Vistas}} na barra de ferramentas, sem o zoom para ajustar.

## Orbitar arrastando o cubo

Arraste o cubo para girar a vista, da mesma forma que orbitar na própria vista. Um arraste nunca é tomado como clique, então você pode pegar o cubo em qualquer ponto.

## O anel da bússola

O anel abaixo do cubo traz N, L, S e O.

- **Arraste o anel** para girar o modelo em torno do eixo vertical, como se estivesse sobre uma mesa giratória. O anel acompanha o ponteiro.
- **Clique em uma letra** para olhar desse lado, mantendo a inclinação com que você olha para baixo. Em uma vista de cima, a letra que você clicar vai para a parte inferior da tela.

## Vistas de frente para a face: setas

Quando você olha diretamente para uma face, pequenas setas aparecem ao redor do cubo:

- Os quatro **triângulos** trazem para a frente a face daquele lado: o triângulo acima do cubo mostra a face que estava no topo, e assim por diante.
- As duas **setas curvas** no canto superior direito giram a imagem em um quarto de volta no sentido horário ou anti-horário, sem mudar a face que você olha. Use-as para girar uma planta de modo que uma parede longa fique atravessando a tela.

## Vista inicial

O botão de casa no canto superior esquerdo do cubo volta à vista de três quartos e ajusta a peça na tela. {{key:Home}} faz o mesmo enquanto o cubo tiver o foco do teclado.

## Com o teclado

Use {{key:Tab}} para chegar ao cubo e depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe um lado, aresta ou canto ao redor do cubo, em passos de um oitavo de volta (leitores de tela informam qual) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Superior}} ou até {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir do escolhido |
| {{key:Shift+left}} / {{key:Shift+right}} | gira a vista em um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas pressionadas no cubo ficam com o cubo: elas não acionam as ferramentas do PartCraft.

## Ícone de eixos ou nada

Abra {{ui:Configurações}} ({{key:Mod+,}}), a guia {{ui:PartCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vista}} (o inicial), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X vermelho, Y verde, Z azul) ou {{ui:Nenhum}}. Este navegador lembra a escolha. Veja [Configurações do PartCraft](topic:settings#corner-indicator).

:::note
O cubo mostra a peça como o PartCraft a constrói: Y para cima, então o {{ui:Superior}} do cubo é o plano Superior. As letras da bússola servem apenas para girar; uma peça não tem norte.
:::
