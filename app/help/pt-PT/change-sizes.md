---
title: Alterar dimensões sem abrir o esboço
summary: Controlar uma peça a partir dos números do painel da direita: cotas de esboço, profundidades, quantidades e ângulos; como planear uma peça para que os números certos a controlem; e onde os parâmetros e as equações assumem o controlo.
keywords: parâmetros, cotas motrizes, intenção de projeto, alterar dimensão, equações, variáveis globais, tabela de projeto, configurações, redimensionar, modificar cota
from: c2ae1a32
---

Cada dimensão de uma peça do PartCraft é um número que pode alterar mais tarde: as cotas dos seus esboços e as definições das suas operações. Não é preciso abrir um esboço para alterar as respetivas cotas.

## Alterar uma cota de esboço a partir do painel

1. Clique numa operação no histórico, por exemplo "Extrude1".
2. Em definições da própria extrusão, **Cotas do esboço (Sketch1)** lista todas as cotas do seu esboço: "Distância", "Diâmetro", "Ângulo (°)" e assim por diante.
3. Escreva um novo valor numa caixa e prima {{key:Enter}} ou {{key:Tab}}.

O esboço resolve-se com o novo valor e a peça inteira é reconstruída. Ao selecionar o próprio esboço, aparece a mesma lista em **Cotas motrizes**.

Um raio ou um diâmetro tem de ser superior a zero, e um ângulo está entre 0 e 180 graus; a barra de estado indica-o caso contrário.

:::tip
Qual é cada caixa? As caixas são listadas pela ordem em que as cotas foram criadas. Se não tiver a certeza, abra o esboço (faça duplo clique nele), faça duplo clique na cota na área de desenho e altere-a aí.
:::

## Escrever já o número principal

Selecione uma operação no histórico (ou acabe de a adicionar) e escreva um número: este vai para a caixa principal da operação, aquela que mais altera (a **Profundidade** de uma extrusão, o **Ângulo** de uma revolução, o **Diâmetro** de um furo, a **Quantidade** de uma matriz, o **Raio** de um boleado, a parede de uma casca). Prima {{key:Enter}} para o definir, ou {{key:Esc}} para manter o anterior. Ao adicionar uma extrusão, a barra de estado indica: "Extrude1 adicionado. Altere os seus números à direita, ou escreva já um número para a sua profundidade."

## Alterar o número no histórico

Cada linha de operação no histórico mostra o seu número principal ao lado do nome: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Faça duplo clique no número (ou selecione a linha e prima {{key:F2}}) e abre-se uma caixa ali mesmo. Escreva o novo valor e prima {{key:Enter}}; {{key:Esc}} mantém o anterior. Funciona exatamente como a caixa da operação à direita: os mesmos limites, `=` para escrever uma equação como `=width/2`, e um passo de anulação.

Numa extrusão, num furo ou numa matriz, um duplo clique em qualquer ponto da linha abre a caixa. Num boleado, chanfre, casca, saída ou rosca, um duplo clique no nome continua a levar à seleção das arestas ou faces, pelo que deve fazer duplo clique no próprio número. Os esboços não têm número na linha: um duplo clique abre o esboço.

## Arrastar na vista

Selecione uma extrusão no histórico (ou clique nela na vista e depois na sua linha) e uma seta laranja fica sobre a sua face final, com a profundidade numa caixa ao lado. Arraste a seta: a peça acompanha o movimento e, ao soltar, o novo valor de profundidade é definido num único passo ({{key:Mod+Z}} repõe o anterior). Prima {{key:Esc}} durante o arrasto para voltar ao ponto de partida. A profundidade avança em incrementos de um décimo do seu tamanho: 1 mm numa extrusão de 25 mm, 0.1 mm numa de 3 mm.

Uma revolução tem uma seta curva na extremidade da sua rotação: arraste-a em torno do eixo para alterar o ângulo, em graus inteiros de 1° a 360°.

Ou clique na caixa ao lado da seta, escreva um valor (ou `=` e uma equação) e prima {{key:Enter}}. Não existe seta numa extrusão que vá **Através de tudo** ou até uma face, nem num valor que uma equação controle: altere-os à direita.

## Os números que controlam uma peça

| Onde | O que pode alterar |
|---|---|
| Esboço | Todas as cotas: comprimentos, distâncias, raios, diâmetros, ângulos |
| Extrudir e Cortar | Profundidade, condição de fim, direção, saliência ou corte |
| Revolução e corte por revolução | Ângulo, eixo, saliência ou corte |
| Furo | Diâmetro, profundidade, através de tudo, diâmetro e profundidade do rebaixo |
| Boleado, Chanfre, Casca | Raio, distância, espessura e direção da parede, e quais as arestas ou faces |
| Linear e Circular | Quantidade, espaçamento ou ângulo, direção ou eixo |
| Peça | Curvas (quão finamente as formas redondas são facetadas) |
| Desenho | Onde o corte de secção atravessa, o tamanho e a escala do detalhe, valores de GD&T |

## Planear a peça para que os números certos a controlem

Os números que indica são os que pode alterar. Alguns hábitos fazem com que as alterações posteriores se comportem bem:

- **Cote o que importa para o trabalho.** Se um furo tiver de ficar a 15 mm de uma aresta, cote-o a partir dessa aresta, e não a partir da origem.
- **Defina totalmente os esboços.** Assim, uma alteração move apenas o que deve (ver [Definir totalmente um esboço](topic:relations-dimensions)).
- **Use relações para a intenção.** Igual em dois furos significa que um só diâmetro controla ambos. Formas simétricas: coloque a origem na linha de eixo, ou use Ponto médio.
- **Esboce sobre faces criadas por operações.** Um esboço na face final de uma extrusão move-se quando a profundidade muda.
- **Use matrizes em vez de copiar.** Um furo repetido oito vezes numa matriz tem um só diâmetro para alterar.

## Para além de números isolados

- **Um número a controlar vários:** use parâmetros e equações: [Controlar uma peça com parâmetros](topic:parameters).
- **Vários tamanhos de uma peça:** guarde cada um como uma [configuração](topic:design-tables); ficam guardados no ficheiro da peça.
- **Aritmética numa caixa de número:** escreva `=40/2` ou `=width / 2`. Isso cria uma equação; ver [Equações nos dois sentidos](topic:equations-two-way).
- **Unidades em polegadas:** a peça mostra milímetros. Numa caixa de número com `=`, ou num parâmetro, `2in` converte-se em 50.8.

Ver [O que ainda não está implementado](topic:not-built-yet).
