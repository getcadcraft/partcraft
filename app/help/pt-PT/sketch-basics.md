---
title: Desenhar o seu primeiro esboço
summary: Abrir um esboço num plano ou numa face plana, desenhar linhas, retângulos, círculos, arcos, pontos e linhas de eixo, arredondar um canto, selecionar, arrastar e eliminar.
keywords: esboço, desenhar, linha, retângulo, círculo, arco, ponto, linha de eixo, construção, boleado, boleado de esboço, arredondar canto, snap, selecionar, janela, arrastar, perfil
from: 28be7436
---

Cada sólido começa como um esboço: um desenho plano sobre um plano. Este guia percorre as ferramentas de desenho. Para fixar o esboço com relações e cotas, veja [Definir totalmente um esboço](topic:relations-dimensions).

## Iniciar um esboço

Pode fazer esboços sobre um plano de base ou sobre qualquer face plana da peça.

1. Escolher onde esboçar:
   - um plano de base: clicar em **Plano frontal**, **Plano superior** ou **Plano direito** no histórico, ou clicar no plano na vista;
   - uma face plana: clicar na face na vista. A face inteira fica realçada.
2. Escolher {{ui:Esboço}} na barra de ferramentas ou premir {{key:S}}. (Com uma face escolhida, pode também escolher {{ui:Esboço nesta face}} no painel da direita; com um plano, {{ui:Esboçar nele}}.)

A vista fica de frente para o plano, as ferramentas de esboço aparecem na barra de ferramentas, e a ferramenta {{ui:Linha}} fica pronta. Se premir {{ui:Esboço}} sem nada escolhido, os planos de base são mostrados e a barra de estado indica « Clicar num plano ou numa face plana para esboçar. Esc interrompe. »

:::note
Uma face curva não pode conter um esboço: « Esta face é curva. Escolha uma face plana ou um plano para esboçar. »
:::

**Um esboço numa face segue essa face.** Se a face foi criada por uma aresta de esboço ou pelo fim de uma extrusão, o novo esboço move-se quando a operação muda (uma caixa mais funda leva consigo o esboço do seu fundo). Se o painel indicar que a face está « Fixa onde foi escolhida », o esboço fica onde a face está agora.

## As ferramentas de desenho

Cada ferramenta tem um botão na barra de ferramentas e uma tecla. Escolher de novo o mesmo botão, premir {{key:S}}, ou premir {{key:Esc}} para voltar a Selecionar.

| Ferramenta | Tecla | Como desenhar |
|---|---|---|
| {{ui:Linha}} | {{key:L}} | Clicar no início e depois em cada ponto seguinte. As linhas encadeiam-se ponta a ponta. Terminar a cadeia com {{key:Esc}}, {{key:Enter}}, um clique com o botão direito ou um duplo clique. Clicar num ponto existente também a termina |
| {{ui:Retângulo}} | {{key:R}} | Clicar num canto e depois no canto oposto. Obtém quatro linhas unidas nos cantos, duas horizontais e duas verticais |
| {{ui:Círculo}} | {{key:C}} | Clicar no centro e depois num ponto na circunferência |
| {{ui:Arco}} | {{key:A}} | Clicar no centro, depois no início e depois no fim. O arco segue o sentido em que move o ponteiro em torno do centro |
| {{ui:Ponto}} | {{key:P}} | Clicar. Um ponto isolado marca um centro de furo para {{ui:Furo}} |
| {{ui:Linha de eixo}} | {{key:N}} | Como uma linha, um segmento de cada vez. Desenhada a tracejado; é geometria de construção, usada como eixo de revolução ou referência |
| {{ui:Boleado}} | {{key:F}} | Clicar num canto onde se encontram duas linhas, escrever o raio, premir {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Clicar nos pontos por onde a curva passa; {{key:Enter}} termina, um clique no primeiro ponto fecha-a. Ver [Splines, aparar, offset e outras ferramentas de esboço](topic:sketch-tools) |
| {{ui:Aparar}} | {{key:T}} | Clicar no troço de uma curva a remover, até aos cruzamentos mais próximos |
| {{ui:Cota}} | {{key:D}} | Ver [Definir totalmente um esboço](topic:relations-dimensions) |

Enquanto desenha, uma pequena caixa junto ao ponteiro mostra o comprimento, o tamanho, o diâmetro ou o raio.

### Escrever a medida enquanto desenha

Depois do primeiro clique de uma linha, retângulo, círculo ou arco, pode escrever a medida em vez de a clicar. Escrever um número abre a caixa junto ao ponteiro com esse número:

| Ferramenta | Campos ({{key:Tab}} passa ao seguinte) | O que acontece em {{key:Enter}} |
|---|---|---|
| {{ui:Linha}}, {{ui:Linha de eixo}} | Comprimento, depois Ângulo (°) a partir do eixo X do esboço | A linha é desenhada com esse comprimento, na direção do ponteiro ou com o ângulo escrito; a cadeia continua a partir da sua extremidade |
| {{ui:Retângulo}} | Largura, depois Altura | O retângulo é desenhado a partir do primeiro canto na direção do ponteiro; uma medida que não escreveu vem do ponteiro |
| {{ui:Círculo}} | Diâmetro | O círculo é desenhado com esse diâmetro |
| {{ui:Arco}} | Raio depois do centro, depois Ângulo do arco (°) depois do início | O início fica a essa distância do centro; depois o arco percorre essa amplitude, no sentido em que moveu o ponteiro |

Cada medida escrita torna-se uma **cota de comando** no mesmo passo, pelo que o esboço fica cotado: {{key:Mod+Z}} remove a forma e as suas cotas em conjunto. Clicar em vez de premir {{key:Enter}} mantém o que escreveu e obtém o resto do clique. {{key:Esc}} fecha a caixa e volta ao ponteiro.

Desative isto em {{ui:Definições}} › {{ui:PartCraft}} › **Cotar ao desenhar** se quiser desenhar apenas com cliques. Ver [Definições do PartCraft](topic:settings).

{{ui:Mais}}, no fim das ferramentas de esboço, reúne a spline por pontos de controlo, Prolongar, Offset, Espelhar, Polígono, Rasgo, as matrizes de esboço e Projetar aresta: ver [Splines, aparar, offset e outras ferramentas de esboço](topic:sketch-tools).

### Snap

O snap acrescenta relações automaticamente, para que o esboço se mantenha unido ao mover-se:

- Num **ponto final ou na origem**, surge um pequeno quadrado. O novo ponto fica coincidente com ele.
- Numa **linha, círculo ou arco**, surge uma pequena cruz. O novo ponto fica colocado sobre essa curva.
- Uma linha a menos de 3 graus da horizontal ou da vertical fica alinhada e recebe uma relação horizontal ou vertical. A etiqueta mostra « H » ou « V ».

Para evitar um snap, aproxime a vista para clicar mais longe do ponto ou da curva.

## Arredondar um canto

1. Premir {{key:F}} ou escolher {{ui:Boleado}}.
2. Clicar no ponto de canto onde se encontram duas linhas.
3. Abre-se uma caixa com um raio sugerido. Escrever o raio e premir {{key:Enter}}.

Ambas as linhas são aparadas e unidas por um arco tangente com uma cota de raio. Mensagens que pode ver: « Um boleado precisa de um canto onde se encontrem exatamente duas linhas. » e « Este raio é demasiado grande para estas linhas. »

:::tip
Um boleado de esboço arredonda um canto do perfil, pelo que a extrusão fica com arestas verticais arredondadas. Para arredondar as arestas do próprio sólido (por exemplo, as arestas superiores de uma chapa), use antes a operação {{ui:Boleado}} na peça: ver [Arredondar, chanfrar e criar casca](topic:fillet-chamfer-shell). Num esboço, o Boleado da barra de ferramentas é a ferramenta de esboço; na peça, é a operação.
:::

## Geometria de construção

Linhas, círculos e arcos de construção são a tracejado e cinzentos. Orientam o esboço, mas não fazem parte do perfil que é extrudido ou objeto de revolução.

1. Selecionar as linhas, círculos ou arcos.
2. Premir {{key:Q}} ou escolher {{ui:Construção}}. Premir de novo para os voltar ao normal.

## Selecionar, arrastar e eliminar

Premir {{key:S}} (ou {{key:Esc}} até não haver ferramenta ativa) para Selecionar.

- Clicar num ponto, linha, círculo, arco, símbolo de relação ou cota para o selecionar. {{key:Shift}}+clique acrescenta à seleção ou retira. No Windows e no Linux, {{key:Ctrl}}+clique faz o mesmo; num Mac, ⌘+clique.
- Arrastar num espaço vazio para desenhar uma janela: fica selecionado tudo o que estiver totalmente dentro dela.
- Arrastar um ponto ou uma linha para o mover. O solucionador mantém todas as relações e cotas ao mover, pelo que só se move a geometria livre. Arrastar o contorno de um círculo para alterar o seu raio.
- Arrastar o número de uma cota para mover a etiqueta.
- Premir {{key:Delete}} ou {{key:Backspace}}, ou escolher {{ui:Eliminar}} no painel da direita, para eliminar a seleção. Eliminar geometria elimina as relações que lhe estão associadas.

## Ampliar e deslocar a vista no esboço

- Rodar a roda do rato para fazer zoom no ponteiro.
- Arrastar com o botão do meio ou o direito para deslocar a vista.
- {{ui:Ajustar}} na barra de ferramentas ou no painel da direita ajusta o esboço à vista. Num esboço, a tecla {{key:F}} é a ferramenta Boleado, não Ajustar.

## Fechar o esboço

Escolher {{ui:Sair}} na barra de ferramentas ou {{ui:Sair do esboço}} no painel da direita, ou premir {{key:Esc}} até o esboço fechar. Cada {{key:Esc}} cancela primeiro o que está em curso, depois volta a Selecionar, depois limpa a seleção, e o seguinte fecha o esboço.

O esboço continua selecionado, pelo que a próxima {{ui:Extrudir}} ou {{ui:Revolução}} o usa.

## O que faz um bom perfil

{{ui:Extrudir}} e {{ui:Revolução}} usam **todos os circuitos fechados** das linhas, círculos, arcos e splines do esboço, exceto os de construção. Circuitos dentro de circuitos tornam-se furos.

- Cada extremidade tem de encontrar exatamente outra extremidade. « O perfil está aberto: uma extremidade em (12.5, 40) não está unida a nada. » indica o local.
- Não podem encontrar-se três extremidades num mesmo ponto: « O perfil ramifica-se em (0, 20): encontram-se ali mais de duas extremidades. »
- Os pontos e a geometria de construção são ignorados pelo perfil.

Seguinte: [Definir totalmente um esboço com relações e cotas](topic:relations-dimensions).

## Um esboço a partir de uma fotografia

**Operações › Mais › Esboço a partir de uma fotografia…** (ou o grupo Esboço no friso da árvore de operações) traça uma imagem de uma peça plana sobre um fundo liso — o seu contorno e os seus furos — ou um desenho à caneta, num esboço de linhas, arcos e círculos. Indique um comprimento (a largura, a altura ou o lado mais comprido) para que o esboço tenha o tamanho certo, verifique o que encontrou na pré-visualização e escolha **Criar o esboço**; pode também extrudi-lo, no mesmo passo de anulação. O processamento faz-se neste computador. Os raios dos cantos saem com uma margem de cerca de 5 %, perdem-se detalhes de um ou dois pixels, e uma fotografia tirada de lado ou com sombras sobre a peça não é endireitada: fotografe a peça de frente, com luz uniforme.
