---
title: Definir totalmente um esboço com relações e cotas
summary: Adicionar relações pelo painel da direita e cotas com a ferramenta Cota, ler as cores de subdefinido, totalmente definido e sobredefinido, e corrigir um esboço sobredefinido.
keywords: relações, restrições, cotas, cota inteligente, totalmente definido, subdefinido, sobredefinido, graus de liberdade, coincidente, horizontal, vertical, paralelo, perpendicular, tangente, igual, concêntrico, ponto médio, fixar, conflito, redundante
from: e76d047a
---

Um esboço fica **totalmente definido** quando todos os pontos e todas as medidas estão fixados por relações e cotas. Um esboço totalmente definido só muda quando altera um número, para que a peça se comporte de forma previsível ao ser editada mais tarde. O PartCraft não o obriga a definir totalmente um esboço, mas mostra sempre o quão perto está.

## Ler o estado do esboço

O estado aparece em três locais: o indicador no canto superior esquerdo da vista, a mensagem no topo do painel da direita e a bandeira no histórico.

| Estado | Indicador | Cor da geometria | O que significa |
|---|---|---|---|
| Subdefinido | "Subdefinido · 3 graus de liberdade" | Azul | Alguma geometria ainda se pode mover. Arraste a geometria azul para ver em que sentido |
| Totalmente definido | "Totalmente definido" | Tinta (preto em Papel, claro em Modelo) | Todos os pontos e medidas estão fixados |
| Sobredefinido | "Sobredefinido" | Vermelho nas relações envolvidas | Algumas relações contradizem-se, ou uma já está implícita nas outras |

A geometria de construção é cinzenta e tracejada, seja qual for o estado. Os itens selecionados são laranja. Um « grau de liberdade » é uma forma de algo ainda se poder mover: um ponto livre tem dois (esquerda-direita e cima-baixo), um círculo livre tem três (o seu centro e o seu raio).

A legenda por baixo da mensagem no painel da direita repete as cores.

## Adicionar uma cota

1. Prima {{key:D}} ou escolha {{ui:Cota}}.
2. Clique no que quer medir:
   - **uma linha**: o seu comprimento;
   - **um círculo**: o seu diâmetro; **um arco**: o seu raio;
   - **dois pontos** (um ponto final, um centro, um ponto solto ou a origem): a distância entre eles;
   - **um ponto e uma linha**: a distância do ponto à linha;
   - **duas linhas paralelas**: a distância entre elas; **duas linhas com um ângulo**: o ângulo entre elas.
3. Depois de um item, a barra de estado diz « Clique num segundo item, ou clique onde a cota deve ficar. » Clique num segundo item ou num espaço vazio onde quer o número.
4. Abre-se uma caixa numérica com o valor atual. Escreva a medida e prima {{key:Enter}}. {{key:Esc}} mantém o valor medido.

**O sítio onde coloca o número define o tipo** para uma linha inclinada ou dois pontos: coloque-o acima ou abaixo para obter uma distância horizontal, à esquerda ou à direita para obter uma distância vertical, e noutro sítio para a distância verdadeira (alinhada).

A caixa aceita números simples em milímetros ou graus, como `25`, `12.5` ou `1e3`. Um `⌀`, `Ø` ou `R` no início, ou `mm` ou `°` no fim, são ignorados. Os ângulos vão de 0 a 180 graus. Cálculos como `20+5` não são aceites; para ligar uma medida a uma variável ou fórmula, comece-a com `=`.

Para alterar uma cota mais tarde, faça duplo clique no seu número no esboço, ou escolha **Editar** ao lado dela na lista do painel da direita.

:::tip
Também pode selecionar primeiro a geometria (ferramenta Selecionar) e escolher um botão de cota no painel da direita: {{ui:Distância}}, {{ui:Distância horizontal}}, {{ui:Distância vertical}}, {{ui:Raio}}, {{ui:Diâmetro}} ou {{ui:Ângulo}}. Só aparecem os que se ajustam à seleção. É esta a forma de dar a um círculo um raio em vez de um diâmetro.
:::

## Adicionar uma relação

As relações são adicionadas a partir do painel da direita, não com uma ferramenta.

1. Prima {{key:S}} para Selecionar.
2. Clique num item e depois {{key:Shift}}+clique num segundo, se a relação precisar de dois. A origem também pode ser selecionada.
3. O painel da direita diz « Selecionado: linha l3, ponto p1 » e mostra um botão para cada relação que se ajusta, como {{ui:∥ Paralela}} ou {{ui:• Coincidente}}.
4. Escolha o botão. O esboço é resolvido de imediato.

Se nenhuma relação se ajustar, o painel diz « Nenhuma relação se ajusta a esta seleção. Selecione um ou dois itens (Shift+clique acrescenta). »

A lista completa das relações, o que cada uma precisa e o que faz está em [Relações e cotas de esboço](topic:sketch-relations).

As relações aparecem no esboço como pequenos símbolos junto à geometria (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Os pontos de coincidência ficam ocultos, a não ser que a geometria esteja selecionada ou a relação tenha um problema. Clique num símbolo para selecionar a relação.

## Um exemplo prático: um perfil de suporte em L

1. Faça um esboço sobre o **Plano frontal**. Com a ferramenta Linha, comece na origem e clique em seis cantos de um L, terminando de novo na origem. A cadeia termina sozinha quando clica no primeiro ponto.
2. As linhas desenhadas quase na horizontal ou na vertical já têm as relações H e V automaticamente, exceto a última: uma linha que termina num ponto existente não recebe relação automática. Prima {{key:S}}, clique nessa última linha e escolha **V Vertical** no painel da direita. O indicador diz « Subdefinido · 4 graus de liberdade ».
3. Prima {{key:D}}. Clique na linha inferior, clique abaixo dela, escreva `80` e prima {{key:Enter}}.
4. Clique na linha da esquerda, clique à esquerda dela, escreva `60` e prima {{key:Enter}}.
5. Cote a linha superior curta com `20` e a linha vertical interior com `45`, da mesma forma.
6. O indicador diz agora **Totalmente definido** e todo o L fica a tinta.

## Corrigir um esboço sobredefinido

Quando uma nova relação ou cota contradiz as outras, o PartCraft não move nada. A geometria mantém-se exatamente como estava, as relações envolvidas ficam vermelhas e a barra de estado identifica-as:

- « Sobredefinido: Horizontal, Distância 40 não podem ser cumpridas em simultâneo. Anule, ou elimine uma delas. » As relações estão em conflito.
- « Sobredefinido: Paralela já está implícita. Elimine-a. » A relação não acrescenta nada: as outras já a impõem. (Por exemplo, os lados de um retângulo já são paralelos.)

Para corrigir:

1. Prima {{key:Mod+Z}} para anular a última alteração, ou
2. Encontre o item vermelho na lista **Relações e cotas** do painel da direita (um grupo que o contém fica aberto e a vermelho) e escolha **Eliminar** ao lado dele. Também pode clicar no seu símbolo ou número no esboço e premir {{key:Delete}}.

:::note
Nesta versão não existem cotas de referência (orientadas). Uma cota que apenas indicaria uma medida já fixada pelas outras relações é tratada como sobredefinida. Leia as medidas no painel: selecione uma linha e veja os botões de Cota, ou verifique os dados da peça depois de extrudir.
:::

Um esboço sobredefinido com um conflito real faz falhar a operação que o utiliza (« Sobredefinido: 1 relação não pode ser cumprida. »), e o histórico assinala-a com **⚠ erro**. Um esboço apenas redundante continua a ser construído, com um aviso ⚠.

## Arrastar para encontrar o que está livre

Na ferramenta Selecionar, arraste qualquer ponto ou linha azul. O solucionador move-o o menos possível, mantendo todas as relações. Se um arrastamento fosse quebrar uma relação, a geometria volta atrás de imediato. Esta é a forma mais rápida de ver que cota ainda falta.

## A lista de relações

Sem nada selecionado, o painel da direita lista **Relações e cotas**. Cada linha tem:

- **Editar** (apenas cotas): abre a caixa numérica;
- **Selecionar**: seleciona-a no esboço;
- **Eliminar**: remove-a.

As relações do mesmo tipo que aparecem mais de uma vez partilham uma linha, como « Coincidente × 5 » para um retângulo ligado à origem. Clique na linha para a abrir: cada relação é listada pelo que liga (« ponto p2, ponto p4 ») com os seus próprios **Selecionar** e **Eliminar**. A própria linha tem:

- **Selecionar**: seleciona todas no esboço;
- **Eliminar tudo**: remove todas de uma vez ({{key:Mod+Z}} as repõe).

Um grupo que contém uma relação sobredefinida abre-se sozinho, com o nome a vermelho. As cotas são sempre listadas uma por linha, com os respetivos valores.

Com geometria selecionada, a lista mostra apenas as **Relações na seleção**.
