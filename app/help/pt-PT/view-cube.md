---
title: O cubo de vistas
summary: Clique numa face, aresta ou canto do cubo no canto da vista para olhar a partir daí, arraste-o para orbitar, rode o anel da bússola, avance à volta de uma vista de frente e volte ao início.
keywords: cubo de vistas, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, cima, frente, direita, iso, canto, aresta, orbitar, rodar vista, ícone de eixos, indicador de canto, navegação
from: afc33dc7
---

O cubo de vistas fica no canto superior direito da vista 3D (não durante o esboço nem na folha de desenho). Roda com a vista, por isso mostra sempre para onde está a olhar: {{ui:Cima}} é o lado +Y da peça (o plano Cima), {{ui:Frente}} o lado +Z (o plano Frente fica virado para o observador quando olha para ele), {{ui:Direita}} o lado +X. Fica transparente até apontar para ele.

## Olhar de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A parte da peça sob o cursor acende-se: o centro de uma face, uma aresta (acende nas duas faces que a partilham) ou um canto (nas três faces).
2. Clique nele. A vista roda para olhar a partir daí, mantendo o mesmo centro e zoom.

Há 26 sítios onde clicar: 6 faces ({{ui:Cima}}, {{ui:Baixo}}, {{ui:Frente}}, {{ui:Trás}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista de três quartos; uma aresta olha a meio caminho entre duas faces.

Clicar em {{ui:Frente}}, {{ui:Cima}} ou {{ui:Direita}} dá as mesmas vistas que {{ui:Vistas}} na barra de ferramentas, sem o zoom de ajuste.

## Orbitar arrastando o cubo

Arraste o cubo para rodar a vista, como orbitar na própria vista. Um arrasto nunca é tomado como clique, por isso pode pegar no cubo em qualquer ponto.

## O anel da bússola

O anel por baixo do cubo tem N, E, S e O.

- **Arraste o anel** para rodar o modelo em torno do eixo vertical, como se estivesse numa plataforma giratória. O anel segue o cursor.
- **Clique numa letra** para olhar desse lado, mantendo o ângulo de inclinação para baixo. Numa vista de cima a direito, a letra em que clicou vai para a parte inferior do ecrã.

## Vistas de frente: setas

Quando olha diretamente para uma face, aparecem setas pequenas à volta do cubo:

- Os quatro **triângulos** levam a face desse lado para a frente: o triângulo acima do cubo mostra a face que estava no topo, e assim por diante.
- As duas **setas curvas** no canto superior direito rodam a imagem um quarto de volta no sentido horário ou anti-horário, sem mudar a face que olha. Use-as para rodar uma planta de modo que uma parede comprida atravesse o ecrã.

## Início

O botão da casa no canto superior esquerdo do cubo volta à vista de três quartos e ajusta a peça à vista. {{key:Home}} faz o mesmo quando o cubo tem o foco do teclado.

## Com o teclado

Prima {{key:Tab}} até ao cubo e depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe uma face, aresta ou canto à volta do cubo, em passos de um oitavo de volta (os leitores de ecrã dizem qual) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Cima}} ou até {{ui:Baixo}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir do escolhido |
| {{key:Shift+left}} / {{key:Shift+right}} | roda a vista um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas premidas no cubo ficam no cubo: não iniciam as ferramentas do PartCraft.

## Ícone de eixos ou nada

Abra {{ui:Definições}} ({{key:Mod+,}}), o separador {{ui:PartCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vistas}} (o predefinido), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X vermelho, Y verde, Z azul) ou {{ui:Nenhum}}. Este navegador memoriza a escolha. Ver [Definições do PartCraft](topic:settings#corner-indicator).

:::note
O cubo mostra a peça como o PartCraft a constrói: Y para cima, por isso o {{ui:Cima}} do cubo é o plano Cima. As letras da bússola servem apenas para rodar; uma peça não tem norte.
:::
