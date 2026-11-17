---
title: Altere tamanhos sem abrir o esboço
summary: Controle uma peça pelos números no painel da direita: cotas de esboço, profundidades, contagens e ângulos; como planejar a peça para que os números certos a controlem; e onde parâmetros e equações assumem o controle.
keywords: parâmetros, cotas de controle, intenção de projeto, alterar tamanho, equações, variáveis globais, tabela de projeto, configurações, redimensionar, modificar cota
from: c2ae1a32
---

Todo tamanho em uma peça do PartCraft é um número que você pode alterar depois: as cotas dos seus esboços e as configurações dos seus recursos. Você não precisa abrir um esboço para alterar as cotas dele.

## Alterar uma cota de esboço pelo painel

1. Clique em um recurso no histórico, por exemplo "Extrude1".
2. Em **Cotas do esboço (Sketch1)**, abaixo das configurações da própria extrusão, estão todas as cotas do esboço: "Distância", "Diâmetro", "Ângulo (°)" e assim por diante.
3. Digite um novo valor em uma caixa e pressione {{key:Enter}} ou {{key:Tab}}.

O esboço é resolvido com o novo valor, e a peça inteira é reconstruída. Selecionar o próprio esboço mostra a mesma lista como **Cotas de controle**.

Um raio ou diâmetro deve ser maior que zero, e um ângulo fica entre 0 e 180 graus; a barra de status informa se não for.

:::tip
Qual caixa é qual? As caixas são listadas na ordem em que as cotas foram criadas. Se não tiver certeza, abra o esboço (dê duplo clique nele), dê duplo clique na cota na área de desenho e altere-a lá.
:::

## Digite o número principal de imediato

Selecione um recurso no histórico (ou apenas adicione-o) e digite um número: ele vai para a caixa principal do recurso, a que você mais altera (a **Profundidade** de uma extrusão, o **Ângulo** de uma revolução, o **Diâmetro** de um furo, a **Contagem** de uma matriz, o **Raio** de um arredondamento, a espessura da parede de uma casca). Pressione {{key:Enter}} para defini-lo, ou {{key:Esc}} para manter o anterior. Ao adicionar uma extrusão, a barra de status informa: "Recurso Extrude1 adicionado. Altere seus números à direita ou digite agora um número para a profundidade."

## Altere o número no histórico

A linha de cada recurso no histórico mostra seu número principal ao lado do nome: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dê duplo clique no número (ou selecione a linha e pressione {{key:F2}}) e uma caixa se abre ali mesmo. Digite o novo valor e pressione {{key:Enter}}; {{key:Esc}} mantém o antigo. Funciona exatamente como a caixa do recurso à direita: os mesmos limites, `=` para digitar uma equação como `=width/2`, e uma etapa para desfazer.

Em uma extrusão, um furo ou uma matriz, um duplo clique em qualquer lugar da linha abre a caixa. Em um arredondamento, chanfro, casca, saída ou rosca, um duplo clique no nome ainda leva a escolher as arestas ou faces; então dê duplo clique no próprio número. Esboços não têm número na linha: um duplo clique abre o esboço.

## Arraste na vista

Selecione uma extrusão no histórico (ou clique nela na vista e depois na linha dela) e uma seta laranja fica sobre a face final, com a profundidade em uma caixa ao lado. Arraste a seta: a peça acompanha o arraste, e soltar define a nova profundidade como uma etapa ({{key:Mod+Z}} a desfaz). Pressione {{key:Esc}} enquanto arrasta para voltar ao ponto inicial. A profundidade avança em passos de um décimo do seu tamanho: 1 mm em uma extrusão de 25 mm, 0.1 mm em uma de 3 mm.

Uma revolução ganha uma seta curva na extremidade de seu giro: arraste-a em torno do eixo para alterar o ângulo, em graus inteiros de 1° a 360°.

Ou clique na caixa ao lado da seta, digite um valor (ou `=` e uma equação) e pressione {{key:Enter}}. Não há seta em uma extrusão **Através de tudo** ou até uma face, nem em um valor controlado por uma equação: altere esses na direita.

## Os números que controlam uma peça

| Onde | O que você pode alterar |
|---|---|
| Esboço | Todas as cotas: comprimentos, distâncias, raios, diâmetros, ângulos |
| Extrusão e corte | Profundidade, condição de término, direção, sólido ou corte |
| Revolução e corte por revolução | Ângulo, eixo, sólido ou corte |
| Furo | Diâmetro, profundidade, através de tudo, diâmetro e profundidade do rebaixo |
| Arredondamento, chanfro, casca | Raio, distância, espessura da parede e direção, e quais arestas ou faces |
| Linear e Circular | Contagem, espaçamento ou ângulo, direção ou eixo |
| Peça | Curvas (quão finamente as formas redondas são facetadas) |
| Desenho | Onde o corte da seção passa, tamanho e escala do detalhe, valores de GD&T |

## Planeje a peça para que os números certos a controlem

Os números que você informa são os que você pode alterar. Alguns hábitos fazem as mudanças posteriores se comportarem:

- **Cote o que importa para o trabalho.** Se um furo deve ficar a 15 mm de uma aresta, cote-o a partir dessa aresta, não da origem.
- **Defina totalmente os esboços.** Assim, uma alteração move apenas o que deve (veja [Defina totalmente um esboço](topic:relations-dimensions)).
- **Use relações para a intenção.** Igual em dois furos significa que um único diâmetro controla ambos. Formas simétricas: coloque a origem na linha de centro, ou use Ponto médio.
- **Esboce sobre faces criadas por recursos.** Um esboço na face final de uma extrusão se move quando a profundidade muda.
- **Use matriz em vez de copiar.** Um furo replicado oito vezes em matriz tem um só diâmetro para alterar.

## Além de números isolados

- **Um número controlando vários:** use parâmetros e equações: [Controle uma peça com parâmetros](topic:parameters).
- **Vários tamanhos de uma mesma peça:** salve cada um como uma [configuração](topic:design-tables); elas são mantidas no arquivo da peça.
- **Aritmética em uma caixa de número:** digite `=40/2` ou `=width / 2`. Isso cria uma equação; veja [Equações nos dois sentidos](topic:equations-two-way).
- **Unidades em polegadas:** a peça mostra milímetros. Em uma caixa de número com `=`, ou em um parâmetro, `2in` vira 50.8.

Veja [O que ainda não foi implementado](topic:not-built-yet).
