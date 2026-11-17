---
title: Preparar uma peça para impressão 3D
summary: Verifique se uma peça ou montagem está fechada, cabe na sua impressora e fica apoiada em uma base; depois baixe-a como STL ou 3MF para o seu fatiador.
keywords: impressão 3D, impressora 3D, imprimir, fatiador, stl, 3mf, estanque, fechado, manifold, mesa, tamanho da mesa, plataforma de impressão, balanço, suportes, base, milímetros, exportar, roscas, folga
from: 90d81dff
---

Um fatiador precisa de uma forma fechada: sem furos, com cada face apontando para fora e sem nada atravessando a si mesmo. As peças que o PartCraft cria já são fechadas por construção, então a verificação diz principalmente o tamanho, se a peça cabe na mesa da sua impressora, se ela se apoia em uma face plana e quanto dela fica em balanço.

## Verificar e baixar

1. Opcional, uma vez: defina a mesa da sua impressora em {{ui:Configurações}} › PartCraft › **Impressora 3D**: largura, profundidade e altura em milímetros. Deixe em branco para pular essa verificação.
2. Escolha {{ui:Exportar}}, depois {{ui:Verificar para impressão 3D (STL ou 3MF)…}}.

   A caixa de diálogo diz "Pronto para impressão" ou "Não pronto para impressão", lista o que está errado e informa o tamanho na mesa (X × Y × Z, em milímetros), o volume e o número de triângulos.

3. Clique em {{ui:Baixar 3MF}} ou {{ui:Baixar STL}}. O arquivo é o mesmo de {{ui:Exportar}} › {{ui:3MF, para impressão 3D}} ou {{ui:STL, para impressão 3D}}.

Em uma montagem, a verificação e os arquivos consideram a montagem inteira, cada cópia onde ela está posicionada.

A peça é verificada em pé, como a exportação a grava: o que aponta para cima no PartCraft (perpendicular ao Plano Superior) aponta para cima na mesa. Uma peça esboçada no Plano Superior fica deitada.

## O que a caixa de diálogo pode informar

**Não pronto para impressão** (um fatiador pode recusá-la ou imprimi-la errado): furos (arestas com uma face de um lado só), arestas compartilhadas por três ou mais faces, faces voltadas em sentidos opostos, um corpo invertido ou um corpo que atravessa a si mesmo. Uma peça criada no PartCraft nunca deveria mostrar isso; se mostrar, veja [Solução de problemas](topic:troubleshooting).

**Avisos** (ela imprime, mas dê uma olhada antes):

- **Maior que a mesa da sua impressora**, mesmo girada 90° sobre ela.
- **Nada fica plano na parte de baixo**: gire a peça no fatiador para que uma face repouse na mesa, senão ela precisará de suportes ou de uma base (raft).
- **Inclina-se mais de 45° em relação à vertical**: essas faces precisam de suporte na posição em que estão. Outra posição pode precisar de menos.
- **Corpos separados se sobrepõem** ou **se encostam face a face**: fatiadores costumam uni-los. {{ui:Combinar}} em Recursos › Mais os une em um só corpo. Veja [Corpos](topic:bodies).
- **Menor que 1 mm em alguma dimensão**: confira as medidas da peça.

## Roscas que imprimem

Uma rosca modelada imprime como uma rosca real. Dê a ela alguma **Folga** para que um parafuso impresso entre em uma porca impressa: veja [Roscas](topic:threads).

## Suavizar faces arredondadas

STL e 3MF são feitos de triângulos. Para faces arredondadas mais lisas, clique em um espaço vazio para não selecionar nada e defina **Curvas** como **Fina (128 por volta)** ou **Muito fina (256 por volta)** no painel da direita antes de exportar. Mais triângulos geram arquivos maiores.

## Maior, menor ou em partes

- **Exportar › Escala para impressão (STL ou 3MF)…** salva a peça com escala por eixo, sem alterá-la: uma **margem de contração** em percentual (tamanho × (1 + s), ou o tamanho exato ÷ (1 − s)) para um modelo de fundição, ou fatores simples, em torno do centro, do canto mais baixo, do centro da base ou da origem.
- **Exportar › Dividir para impressão (um zip de peças)…** corta uma peça grande demais para a sua impressora em partes que cabem, cada uma, na mesa que você informar. As partes são unidas por pinos, chavetas, rabos de andorinha, furos de cavilha ou cavidades para ímãs (com a folga que você definir); cada parte e cada junta são numeradas. As partes são salvas como STL ou 3MF em um zip, com uma folha de montagem. A peça em si não muda.

## Não verificado

Espessura de parede, detalhes menores do que o seu bico consegue desenhar e como o fatiador posicionará os suportes. O seu fatiador mostra isso.
