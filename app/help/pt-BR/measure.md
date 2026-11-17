---
title: Medir distâncias, ângulos e massa
summary: Clique em duas coisas na vista para a distância mínima, o ângulo e ΔX ΔY ΔZ; leia o comprimento de uma aresta, o diâmetro de um furo, a área de uma face ou as coordenadas de um ponto; obtenha volume, massa, centro de massa e inércia de uma peça ou montagem.
keywords: medir, distância, distância mínima, ângulo, comprimento, raio, diâmetro, área, coordenadas, delta, inspecionar, propriedades de massa, massa, peso, centro de massa, inércia, momento de inércia, densidade, material
from: 20bda0b7
---

**Medir** funciona no modelo em todos os espaços de trabalho (Projeto, Forma, Simulação, Generativo, Fabricação) e em uma montagem. Fica no menu {{ui:Views}} do grupo {{ui:View}}, ou pressione {{key:M}}. Um cartão abre sobre o canto superior esquerdo da vista.

## Medir uma coisa

Clique em um vértice, uma aresta ou uma face. O cartão mostra:

- **Um ponto** (um vértice, um ponto médio de aresta ou o centro de um círculo): seus X, Y, Z.
- **Uma aresta**: reta, círculo ou curva, e seu comprimento; para um círculo, também o raio, o diâmetro e o centro.
- **Uma face**: plana, cilindro, cone e assim por diante, e sua área; a normal de uma face plana; o raio e o diâmetro de um cilindro (o tamanho de um furo). As áreas são das facetas que o kernel de malha constrói.
- **O corpo inteiro**: segure {{key:Shift}} e clique na peça. Você obtém seu volume, área, massa e inércia (veja abaixo).

O ponteiro se prende a vértices, pontos médios de arestas e centros de círculos a 10 pixels; um pequeno ponto azul mostra o encaixe antes do clique. Para escolher o centro de um furo, aponte para o meio do furo; para escolher a borda dele (o círculo), aponte para a borda.

## Medir entre duas coisas

Clique em um segundo item. O cartão acrescenta:

- **Distância mínima** e os dois pontos mais próximos, desenhados na vista com uma linha entre eles.
- **ΔX, ΔY, ΔZ** do primeiro ponto mais próximo ao segundo.
- **Ângulo** entre duas faces planas (entre suas normais, 0–180°), entre duas arestas ou eixos retos (0–90°), ou entre uma aresta e uma face.
- **Distância entre os planos** para duas faces planas paralelas, **Centro a centro** para dois círculos ou furos, **Eixo a eixo** para dois furos ou cilindros paralelos.

Um terceiro clique começa um novo par. {{key:Esc}} limpa as escolhas; {{key:Esc}} de novo (ou {{ui:Close}}) fecha Medir. {{ui:Copy}} coloca os resultados na área de transferência como texto separado por tabulações, pronto para colar em uma planilha.

### Quão exato é

O PartCraft constrói a peça com o kernel de malha, então as distâncias são calculadas sobre as facetas da malha, e o cartão diz **aproximado: das facetas**: correto para faces planas e entre vértices, levemente impreciso para superfícies curvas. Uma configuração **Curvas** mais fina as aproxima. Medir com exatidão sobre as superfícies verdadeiras exige um kernel exato: ainda não implementado nesta versão.

## Propriedades de massa

Escolha {{ui:Mass properties}} no cartão ou no menu {{ui:Views}}. Em uma peça, escolha um **Material** no cartão (aço, alumínio, plásticos e outros, com suas densidades usuais). Em uma montagem, cada peça usa o material definido em suas propriedades (selecione a peça, depois **Material**), e o resultado vale para todas as peças juntas.

O cartão mostra massa, volume, área, centro de massa, o tensor de inércia (Ixx, Iyy, Izz e os produtos Ixy, Iyz, Ixz, em kg·mm², em torno do centro de massa nos eixos do mundo) e os momentos principais. Sem material, ele mostra o mesmo valor por unidade de densidade (mm⁵) e nenhuma massa.

Os números são exatos para o sólido em malha que o kernel de malha constrói (faces curvas como facetas), então uma peça redonda sai um pouco baixa, e o cartão diz isso. As densidades dos materiais são valores típicos de manual; uma liga ou um grau real pode diferir em alguns por cento.

## Limites

- Encaixes podem achar um ponto escondido atrás de outra geometria; confira se o cartão mostra o que você quis.
- Medir é fechado quando você abre um esboço ou a folha de desenho, ou muda de espaço de trabalho.
