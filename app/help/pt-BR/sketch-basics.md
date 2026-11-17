---
title: Desenhar o primeiro esboço
summary: Abra um esboço em um plano ou em uma face plana, desenhe linhas, retângulos, círculos, arcos, pontos e linhas de centro, arredonde um canto, selecione, arraste e exclua.
keywords: esboço, desenhar, linha, retângulo, círculo, arco, ponto, linha de centro, construção, arredondamento, arredondamento de esboço, arredondar canto, snap, selecionar, janela, arrastar, perfil
from: 28be7436
---

Todo sólido começa como um esboço: um desenho plano sobre um plano. Este passo a passo cobre as ferramentas de desenho. Para prender o esboço com relações e cotas, veja [Definir totalmente um esboço](topic:relations-dimensions).

## Iniciar um esboço

Você pode esboçar em um plano de base ou em qualquer face plana da peça.

1. Escolha onde esboçar:
   - um plano de base: clique em **Plano frontal**, **Plano superior** ou **Plano direito** no histórico, ou clique no plano na vista;
   - uma face plana: clique na face na vista. A face inteira fica destacada.
2. Escolha {{ui:Esboço}} na barra de ferramentas ou pressione {{key:S}}. (Com uma face escolhida, você também pode escolher {{ui:Esboço nesta face}} no painel direito; com um plano, {{ui:Esboçar nele}}.)

A vista fica de frente para o plano, as ferramentas de esboço aparecem na barra de ferramentas e a ferramenta Linha fica pronta. Se você pressionar {{ui:Esboço}} sem nada escolhido, os planos de base aparecem e a barra de status diz "Clique em um plano ou em uma face plana para esboçar. Esc interrompe."

:::note
Uma face curva não pode ter um esboço: "Esta face é curva. Escolha uma face plana ou um plano para esboçar."
:::

**Um esboço em uma face acompanha essa face.** Se a face foi criada por uma aresta de esboço ou pela extremidade de uma extrusão, o novo esboço se move quando o recurso muda (uma cavidade mais funda leva junto o esboço do seu fundo). Se o painel disser que a face está "Fixa onde foi escolhida", o esboço permanece onde a face está agora.

## As ferramentas de desenho

Cada ferramenta tem um botão na barra e uma tecla. Escolha o mesmo botão de novo, pressione {{key:S}} ou pressione {{key:Esc}} para voltar a Selecionar.

| Ferramenta | Tecla | Como desenhar |
|---|---|---|
| {{ui:Linha}} | {{key:L}} | Clique no início e depois em cada próximo ponto. As linhas se encadeiam, uma ponta na outra. Termine a cadeia com {{key:Esc}}, {{key:Enter}}, clique com o botão direito ou clique duas vezes. Clicar em um ponto existente também a encerra |
| {{ui:Retângulo}} | {{key:R}} | Clique em um canto e depois no canto oposto. Você obtém quatro linhas unidas nos cantos, duas horizontais e duas verticais |
| {{ui:Círculo}} | {{key:C}} | Clique no centro e depois em um ponto do círculo |
| {{ui:Arco}} | {{key:A}} | Clique no centro, depois no início e depois no fim. O arco segue o sentido em que você move o ponteiro em volta do centro |
| {{ui:Ponto}} | {{key:P}} | Clique. Um ponto isolado marca um centro de furo para {{ui:Furo}} |
| {{ui:Linha de centro}} | {{key:N}} | Como uma linha, um segmento por vez. Desenhada tracejada; é geometria de construção, usada como eixo de revolução ou como referência |
| {{ui:Arredondamento}} | {{key:F}} | Clique em um canto onde duas linhas se encontram, digite o raio e pressione {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Clique nos pontos por onde a curva passa; {{key:Enter}} termina, e um clique no primeiro ponto a fecha. Veja [Splines, aparar, deslocar e outras ferramentas de esboço](topic:sketch-tools) |
| {{ui:Aparar}} | {{key:T}} | Clique no trecho de uma curva a remover, até os cruzamentos mais próximos |
| {{ui:Cota}} | {{key:D}} | Veja [Definir totalmente um esboço](topic:relations-dimensions) |

Enquanto você desenha, uma pequena caixa ao lado do ponteiro mostra o comprimento, o tamanho, o diâmetro ou o raio.

### Digitar a medida enquanto desenha

Depois do primeiro clique de uma linha, retângulo, círculo ou arco, você pode digitar a medida em vez de clicar. Digitar um número abre a caixa ao lado do ponteiro com esse número:

| Ferramenta | Caixas ({{key:Tab}} vai para a próxima) | O que acontece com {{key:Enter}} |
|---|---|---|
| {{ui:Linha}}, {{ui:Linha de centro}} | Comprimento, depois Ângulo (°) a partir do eixo X do esboço | A linha é desenhada com esse comprimento, na direção do ponteiro ou no ângulo digitado; a cadeia continua a partir da sua extremidade |
| {{ui:Retângulo}} | Largura, depois Altura | O retângulo é desenhado a partir do primeiro canto na direção do ponteiro; uma medida que você não digitou vem do ponteiro |
| {{ui:Círculo}} | Diâmetro | O círculo é desenhado com esse diâmetro |
| {{ui:Arco}} | Raio após o centro, depois Ângulo do arco (°) após o início | O início fica a essa distância do centro; depois o arco avança essa medida em volta, no sentido em que você moveu o ponteiro |

Cada medida digitada vira uma **cota de controle** na mesma etapa, então o esboço sai dimensionado: {{key:Mod+Z}} desfaz a forma e as cotas juntas. Clicar em vez de pressionar {{key:Enter}} mantém o que você digitou e tira o restante do clique. {{key:Esc}} fecha a caixa e volta ao ponteiro.

Desative isso em {{ui:Configurações}} › {{ui:PartCraft}} › **Cota ao desenhar** se você quiser desenhar apenas com cliques. Veja [Configurações do PartCraft](topic:settings).

{{ui:Mais}}, no fim das ferramentas de esboço, reúne a spline por pontos de controle, {{ui:Estender}}, {{ui:Deslocar}}, {{ui:Espelhar}}, {{ui:Polígono}}, {{ui:Rasgo}}, as matrizes de esboço e {{ui:Projetar aresta}}: veja [Splines, aparar, deslocar e outras ferramentas de esboço](topic:sketch-tools).

### Encaixe (snap)

O snap adiciona relações para você, para que o esboço continue unido quando se move:

- Em uma **extremidade ou na origem**, aparece um pequeno quadrado. O novo ponto fica coincidente com ele.
- Em uma **linha, círculo ou arco**, aparece uma pequena cruz. O novo ponto é colocado sobre essa curva.
- Uma linha a até 3 graus da horizontal ou da vertical se alinha a ela e recebe uma relação horizontal ou vertical. A etiqueta mostra "H" ou "V".

Para evitar um snap, aproxime a vista para clicar mais longe do ponto ou da curva.

## Arredondar um canto

1. Pressione {{key:F}} ou escolha {{ui:Arredondamento}}.
2. Clique no ponto de canto onde duas linhas se encontram.
3. Abre-se uma caixa com um raio sugerido. Digite o raio e pressione {{key:Enter}}.

As duas linhas são aparadas e unidas por um arco tangente com uma cota de raio. Mensagens que você pode ver: "Um arredondamento precisa de um canto onde exatamente duas linhas se encontram." e "Esse raio é grande demais para estas linhas."

:::tip
Um arredondamento de esboço arredonda um canto do perfil, então a extrusão recebe arestas verticais arredondadas. Para arredondar arestas do próprio sólido (por exemplo, as arestas superiores de uma chapa), use o recurso {{ui:Arredondamento}} na peça: veja [Arredondar, chanfrar e criar casca](topic:fillet-chamfer-shell). No esboço, o Arredondamento da barra é a ferramenta de esboço; na peça, é o recurso.
:::

## Geometria de construção

Linhas, círculos e arcos de construção são tracejados e cinza. Eles guiam o esboço, mas não fazem parte do perfil que é extrudado ou revolucionado.

1. Selecione as linhas, círculos ou arcos.
2. Pressione {{key:Q}} ou escolha {{ui:Construção}}. Pressione de novo para voltar ao normal.

## Selecionar, arrastar e excluir

Pressione {{key:S}} (ou {{key:Esc}} até nenhuma ferramenta estar ativa) para Selecionar.

- Clique em um ponto, linha, círculo, arco, símbolo de relação ou cota para selecioná-lo. {{key:Shift}}+clique adiciona à seleção ou retira. No Windows e no Linux, {{key:Ctrl}}+clique faz o mesmo; no Mac, ⌘+clique.
- Arraste sobre um espaço vazio para criar uma janela: tudo totalmente dentro dela é selecionado.
- Arraste um ponto ou uma linha para movê-lo. O solver mantém todas as relações e cotas enquanto se move, então apenas a geometria livre se move. Arraste a borda de um círculo para mudar o raio.
- Arraste o número de uma cota para mover o rótulo.
- Pressione {{key:Delete}} ou {{key:Backspace}}, ou escolha {{ui:Excluir}} no painel direito, para excluir a seleção. Excluir geometria exclui as relações nela.

## Zoom e pan no esboço

- Gire a roda para dar zoom no ponteiro.
- Arraste com o botão do meio ou o direito para fazer pan.
- {{ui:Ajustar}} na barra de ferramentas ou no painel direito ajusta o esboço na vista. No esboço, a tecla {{key:F}} é a ferramenta Arredondamento, não Ajustar.

## Fechar o esboço

Escolha {{ui:Sair}} na barra de ferramentas ou {{ui:Sair do esboço}} no painel direito, ou pressione {{key:Esc}} até o esboço fechar. Cada {{key:Esc}} primeiro cancela o que está em andamento, depois volta a Selecionar, depois limpa a seleção, e o próximo fecha o esboço.

O esboço continua selecionado, então a próxima {{ui:Extrudar}} ou {{ui:Revolução}} o usa.

## O que faz um bom perfil

{{ui:Extrudar}} e {{ui:Revolução}} usam **todo laço fechado** do sólido do esboço (linhas, círculos, arcos e splines que não são de construção). Laços dentro de laços viram furos.

- Cada extremidade deve encontrar exatamente outra extremidade. "O perfil está aberto: uma extremidade em (12.5, 40) não está unida a nada." indica o lugar.
- Três extremidades não podem se encontrar em um mesmo ponto: "O perfil se ramifica em (0, 20): mais de duas extremidades se encontram ali."
- Pontos e geometria de construção são ignorados pelo perfil.

Próximo: [Definir totalmente um esboço com relações e cotas](topic:relations-dimensions).

## Um esboço a partir de uma foto

**Recursos › Mais › Esboço a partir de uma foto…** (ou o grupo Esboço na faixa da árvore de recursos) traça uma imagem de uma peça plana sobre um fundo liso (o contorno e os furos) ou um desenho à caneta, transformando-o em um esboço de linhas, arcos e círculos. Informe uma medida (a largura, a altura ou o lado mais longo) para que o esboço tenha o tamanho certo, confira no preview o que foi encontrado e escolha **Criar o esboço**; ele também pode extrudá-lo, no mesmo passo de desfazer. O traçado é feito neste computador. Os raios dos cantos saem com cerca de 5 %, detalhes de um ou dois pixels se perdem, e uma foto tirada inclinada ou com sombras sobre a peça não é endireitada: fotografe a peça de frente, com luz uniforme.
