---
title: Preparar uma peça para impressão 3D
summary: Verifique que uma peça ou montagem está fechada, cabe na impressora e assenta numa base, e depois transfira-a como STL ou 3MF para o fatiador.
keywords: impressão 3D, impressora, imprimir, fatiador, stl, 3mf, estanque, fechado, manifold, mesa, tamanho da mesa, placa de construção, balanço, suportes, base, milímetros, exportar, roscas, folga
from: 90d81dff
---

Um fatiador precisa de uma forma fechada: sem aberturas, com todas as faces voltadas para fora e sem se atravessar a si própria. As peças que o PartCraft constrói são fechadas por construção, por isso a verificação diz sobretudo o tamanho, se a peça cabe na mesa da impressora, se assenta numa face plana e quanto da peça fica em balanço.

## Verificar e transferir

1. Opcional, uma vez: defina a mesa da impressora em {{ui:Definições}} › PartCraft › **Impressora 3D**: largura, profundidade e altura em milímetros. Deixe-as vazias para não fazer essa verificação.
2. Escolha {{ui:Exportar}}, depois {{ui:Verificar para impressão 3D (STL ou 3MF)…}}.

   O diálogo indica "Pronto para imprimir" ou "Não pronto para imprimir", lista o que está errado e dá o tamanho na mesa (X × Y × Z, em milímetros), o volume e o número de triângulos.

3. Clique em {{ui:Transferir 3MF}} ou {{ui:Transferir STL}}. O ficheiro é o mesmo que {{ui:Exportar}} › {{ui:3MF, para impressão 3D}} ou {{ui:STL, para impressão 3D}}.

Numa montagem, a verificação e os ficheiros abrangem a montagem inteira, com todas as cópias onde estão colocadas.

A peça é verificada na posição em que a exportação a escreve: o que aponta para cima no PartCraft (perpendicular ao plano superior) aponta para cima na mesa. Uma peça esboçada no plano superior fica deitada.

## O que o diálogo pode indicar

**Não pronto para imprimir** (um fatiador pode recusá-la ou imprimi-la mal): aberturas (arestas com uma face de um só lado), arestas partilhadas por três ou mais faces, faces voltadas em sentidos opostos, um corpo do avesso, ou um corpo que se atravessa a si próprio. Uma peça construída no PartCraft nunca deveria mostrar isto; se mostrar, veja [Resolução de problemas](topic:troubleshooting).

**Avisos** (imprime, mas veja primeiro):

- **Maior do que a mesa da impressora**, mesmo rodada 90° sobre ela.
- **Nada assenta plano na base**: rode a peça no fatiador para que uma face assente na mesa, ou precisará de suportes ou de uma jangada.
- **Inclina-se mais de 45° em relação à vertical**: essas faces precisam de suporte, na posição em que está. Outra posição pode precisar de menos.
- **Corpos separados sobrepostos** ou **em contacto face a face**: os fatiadores costumam fundi-los. {{ui:Combinar}} em Operações › {{ui:Mais}} junta-os num só corpo. Veja [Corpos](topic:bodies).
- **Com menos de 1 mm numa dimensão**: verifique as dimensões da peça.

## Roscas que se imprimem

Uma rosca modelada imprime-se como uma rosca real. Dê-lhe alguma **Folga** para que um parafuso impresso entre numa porca impressa: veja [Roscas](topic:threads).

## Faces redondas lisas

O STL e o 3MF são feitos de triângulos. Para faces redondas mais lisas, clique num espaço vazio para não ter nada selecionado e defina **Curvas** como **Fina (128 por volta)** ou **Muito fina (256 por volta)** no painel direito, antes de exportar. Mais triângulos dão ficheiros maiores.

## Maior, mais pequena ou em partes

- **Exportar › Escala para impressão (STL ou 3MF)…** guarda a peça à escala por eixo sem a alterar: uma **margem de contração** em percentagem (tamanho × (1 + s), ou o tamanho exato ÷ (1 − s)) para um modelo de fundição, ou simples fatores, em relação ao centro, ao canto inferior, ao centro da base ou à origem.
- **Exportar › Dividir para impressão (um zip de partes)…** corta uma peça grande demais para a impressora em partes que cabem, cada uma, na mesa indicada, unidas por pinos, chavetas, rabos-de-andorinha, furos de cavilha ou cavidades para ímanes (com a folga que definir). Numera cada parte e cada junta, e guarda as partes como STL ou 3MF num zip com uma folha de montagem. A peça em si não muda.

## Não verificado

Espessura de parede, detalhes menores do que o bico consegue desenhar, e a forma como o fatiador coloca os suportes. O seu fatiador mostra isso.
