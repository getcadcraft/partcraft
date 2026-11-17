---
title: Medir distâncias, ângulos e massa
summary: Clique em dois elementos na vista para obter a distância mínima, o ângulo e ΔX ΔY ΔZ; leia o comprimento de uma aresta, o diâmetro de um furo, a área de uma face ou as coordenadas de um ponto; obtenha o volume, a massa, o centro de massa e a inércia de uma peça ou de uma montagem.
keywords: medir, distância, distância mínima, ângulo, comprimento, raio, diâmetro, área, coordenadas, delta, inspecionar, propriedades de massa, massa, peso, centro de massa, inércia, momento de inércia, densidade, material
from: 20bda0b7
---

**Medir** funciona sobre o modelo em todos os espaços de trabalho (Projeto, Forma, Simulação, Generativo, Maquinação) e numa montagem. Está no menu {{ui:Vistas}} do grupo **Ver**, ou prima {{key:M}}. Abre-se um cartão sobre o canto superior esquerdo da vista.

## Medir um elemento

Clique num vértice, numa aresta ou numa face. O cartão mostra:

- **Um ponto** (um vértice, o ponto médio de uma aresta ou o centro de um círculo): os valores X, Y, Z.
- **Uma aresta**: reta, círculo ou curva, e o respetivo comprimento; para um círculo, também o raio, o diâmetro e o centro.
- **Uma face**: plana, cilindro, cone e assim por diante, e a área; a normal de uma face plana; o raio e o diâmetro de um cilindro (o tamanho de um furo). As áreas são calculadas sobre as facetas que o kernel de malha constrói.
- **O corpo inteiro**: mantenha {{key:Shift}} premido e clique na peça. Obtém o volume, a área, a massa e a inércia (ver abaixo).

O cursor ajusta-se a vértices, pontos médios de arestas e centros de círculos a 10 pixels; um pequeno ponto azul mostra o ajuste antes de clicar. Para escolher o centro de um furo, aponte para o meio do furo; para escolher o respetivo bordo (o círculo), aponte para o bordo.

## Medir entre dois elementos

Clique num segundo item. O cartão acrescenta:

- **Distância mínima** e os dois pontos mais próximos, desenhados na vista com uma linha entre eles.
- **ΔX, ΔY, ΔZ** do primeiro ponto mais próximo ao segundo.
- **Ângulo** entre duas faces planas (entre as respetivas normais, 0–180°), entre duas arestas retas ou eixos (0–90°), ou entre uma aresta e uma face.
- **Distância entre os planos** para duas faces planas paralelas, **Centro a centro** para dois círculos ou furos, **Eixo a eixo** para dois furos ou cilindros paralelos.

Um terceiro clique inicia um novo par. {{key:Esc}} limpa as escolhas; {{key:Esc}} de novo (ou {{ui:Fechar}}) fecha Medir. {{ui:Copiar}} coloca os resultados na área de transferência como texto separado por tabulações, pronto a colar numa folha de cálculo.

### Grau de precisão

O PartCraft constrói a peça com o kernel de malha, por isso as distâncias são calculadas sobre as facetas da malha e o cartão indica **aproximado: pelas facetas**: correto para faces planas e entre vértices, ligeiramente impreciso para as curvas. Uma definição **Curvas** mais fina aproxima-as. A medição exata sobre as superfícies verdadeiras precisa de um kernel exato: ainda não implementado nesta versão.

## Propriedades de massa

Escolha {{ui:Propriedades de massa}} no cartão ou no menu {{ui:Vistas}}. Numa peça, escolha um **Material** no cartão (aço, alumínio, plásticos e outros com as respetivas densidades habituais). Numa montagem, cada peça usa o material definido nas suas propriedades (selecione a peça e depois **Material**), e o resultado é para todas as peças em conjunto.

O cartão mostra a massa, o volume, a área, o centro de massa, o tensor de inércia (Ixx, Iyy, Izz e os produtos Ixy, Iyz, Ixz, em kg·mm², em torno do centro de massa segundo os eixos do mundo) e os momentos principais. Sem material, mostra o mesmo por unidade de densidade (mm⁵) e nenhuma massa.

Os números são exatos para o sólido tesselado que o kernel de malha constrói (faces curvas como facetas), por isso uma peça redonda sai um pouco baixa, e o cartão indica-o. As densidades dos materiais são valores típicos de manuais; uma liga ou qualidade real pode diferir em alguns por cento.

## Limites

- Os ajustes podem encontrar um ponto escondido atrás de outra geometria; confirme que o cartão mostra o que pretendia.
- Medir fecha-se ao abrir um esboço ou a folha de desenho, ou ao mudar de espaço de trabalho.
