---
title: Definir totalmente um esboço com relações e cotas
summary: Adicione relações pelo painel direito e cotas com a ferramenta Cota, leia as cores de subdefinido, totalmente definido e superdefinido, e corrija um esboço superdefinido.
keywords: relações, restrições, cotas, cota inteligente, totalmente definido, subdefinido, superdefinido, graus de liberdade, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concêntrica, ponto médio, fixar, conflito, redundante
from: e76d047a
---

Um esboço está **totalmente definido** quando todo ponto e toda medida são fixados por relações e cotas. Um esboço totalmente definido muda apenas quando você altera um número, então a peça se comporta de forma previsível quando você a editar depois. O PartCraft não obriga você a definir totalmente um esboço, mas sempre mostra o quão perto você está.

## Ler o estado do esboço

O estado aparece em três lugares: o indicador no canto superior esquerdo da vista, a mensagem no topo do painel direito e a marca no histórico.

| Estado | Indicador | Cor da geometria | O que significa |
|---|---|---|---|
| Subdefinido | "Subdefinido · 3 graus de liberdade" | Azul | Parte da geometria ainda pode se mover. Arraste a geometria azul para ver para que lado |
| Totalmente definido | "Totalmente definido" | Tinta (preta no tema Papel, clara no tema Modelo) | Todo ponto e toda medida estão fixados |
| Superdefinido | "Superdefinido" | Vermelho nas relações envolvidas | Algumas relações se contradizem, ou uma já está implícita pelas outras |

A geometria de construção fica cinza e tracejada, qualquer que seja o seu estado. Itens selecionados ficam laranja. Um "grau de liberdade" é uma forma como algo ainda pode se mover: um ponto livre tem dois (esquerda-direita e cima-baixo), um círculo livre tem três (seu centro e seu raio).

A legenda abaixo da mensagem no painel direito repete as cores.

## Adicionar uma cota

1. Pressione {{key:D}} ou escolha {{ui:Cota}}.
2. Clique no que medir:
   - **uma linha**: seu comprimento;
   - **um círculo**: seu diâmetro; **um arco**: seu raio;
   - **dois pontos** (um ponto final, um centro, um ponto solto ou a origem): a distância entre eles;
   - **um ponto e uma linha**: a distância do ponto até a linha;
   - **duas linhas paralelas**: a distância entre elas; **duas linhas em ângulo**: o ângulo entre elas.
3. Depois de um item, a barra de status diz "Clique em um segundo item ou clique onde a cota vai." Clique em um segundo item, ou clique em um espaço vazio onde você quer o número.
4. Uma caixa de número abre com o valor atual. Digite a medida e pressione {{key:Enter}}. {{key:Esc}} mantém o valor medido.

**Onde você posiciona o número define o tipo** para uma linha inclinada ou dois pontos: posicione acima ou abaixo para obter uma distância horizontal, à esquerda ou à direita para obter uma distância vertical, e em outro lugar para a distância verdadeira (alinhada).

A caixa aceita números simples em milímetros ou graus, como `25`, `12.5` ou `1e3`. Um `⌀`, `Ø` ou `R` no início, ou `mm` ou `°` no fim, são ignorados. Ângulos vão de 0 a 180 graus. Aritmética como `20+5` não é aceita; para vincular uma medida a uma variável ou fórmula, comece-a com `=`.

Para alterar uma cota depois, clique duas vezes no número dela no esboço, ou escolha **Editar** ao lado dela na lista do painel direito.

:::tip
Você também pode selecionar a geometria primeiro (ferramenta Selecionar) e escolher um botão de cota no painel direito: {{ui:Distância}}, {{ui:Distância horizontal}}, {{ui:Distância vertical}}, {{ui:Raio}}, {{ui:Diâmetro}} ou {{ui:Ângulo}}. Apenas os que se aplicam à seleção são mostrados. Assim você dá a um círculo um raio em vez de um diâmetro.
:::

## Adicionar uma relação

As relações são adicionadas pelo painel direito, não com uma ferramenta.

1. Pressione {{key:S}} para Selecionar.
2. Clique em um item e, depois, {{key:Shift}}+clique em um segundo, se a relação precisar de dois. A origem também pode ser selecionada.
3. O painel direito diz "Selecionado: linha l3, ponto p1" e mostra um botão para cada relação que se encaixa, como {{ui:∥ Paralela}} ou {{ui:• Coincidente}}.
4. Escolha o botão. O esboço é resolvido imediatamente.

Se nenhuma relação se encaixar, o painel diz "Nenhuma relação se encaixa nesta seleção. Selecione um ou dois itens (Shift+clique adiciona)."

A lista completa de relações, o que cada uma precisa e o que faz está em [Relações e cotas de esboço](topic:sketch-relations).

As relações aparecem no esboço como pequenos símbolos ao lado da geometria (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Os pontos de coincidência ficam ocultos, a menos que a geometria esteja selecionada ou a relação esteja com problema. Clique em um símbolo para selecionar a relação.

## Exemplo prático: um perfil de suporte em L

1. Esboce no **Plano frontal**. Com a ferramenta Linha, comece na origem e clique em seis cantos de um L, terminando de novo na origem. A cadeia termina sozinha quando você clica no primeiro ponto.
2. Linhas desenhadas próximas da horizontal ou da vertical já têm as relações H e V, exceto a última: uma linha que termina em um ponto existente não recebe relação automática. Pressione {{key:S}}, clique nessa última linha e escolha {{ui:V Vertical}} no painel direito. O indicador diz "Subdefinido · 4 graus de liberdade".
3. Pressione {{key:D}}. Clique na linha inferior, clique abaixo dela, digite `80` e pressione {{key:Enter}}.
4. Clique na linha da esquerda, clique à esquerda dela, digite `60` e pressione {{key:Enter}}.
5. Cote a linha curta superior com `20` e a linha vertical interna com `45`, do mesmo modo.
6. O indicador agora diz **Totalmente definido** e todo o L fica em tinta.

## Corrigir um esboço superdefinido

Quando uma nova relação ou cota contradiz as outras, o PartCraft não move nada. A geometria permanece exatamente como estava, as relações envolvidas ficam vermelhas e a barra de status as nomeia:

- "Superdefinido: Horizontal, Distância 40 não podem ser atendidas ao mesmo tempo. Desfaça, ou exclua uma delas." As relações estão em conflito.
- "Superdefinido: Paralela já está implícita. Exclua-a." A relação não acrescenta nada: as outras já a impõem. (Os lados de um retângulo, por exemplo, já são paralelos.)

Para corrigir:

1. Pressione {{key:Mod+Z}} para desfazer a última alteração, ou
2. Encontre o item vermelho na lista **Relações e cotas** no painel direito (um grupo que o contém fica aberto e em vermelho) e escolha **Excluir** ao lado dele. Você também pode clicar no símbolo ou número dele no esboço e pressionar {{key:Delete}}.

:::note
Não há cotas de referência nesta versão. Uma cota que apenas informaria uma medida já fixada pelas outras relações é tratada como superdefinida. Leia as medidas no painel: selecione uma linha e veja os botões de Cota, ou confira os dados da peça depois de extrudar.
:::

Um esboço superdefinido com um conflito real faz o recurso que o usa falhar ("Superdefinido: 1 relação não pode ser atendida.") e o histórico marca **⚠ erro**. Um esboço apenas redundante ainda é construído, com um aviso ⚠.

## Arraste para encontrar o que está livre

Em Selecionar, arraste qualquer ponto ou linha azul. O resolvedor move-o o mínimo possível, mantendo todas as relações. Se um arrasto quebrar uma relação, a geometria volta ao lugar. Esta é a forma mais rápida de ver qual cota ainda falta.

## A lista de relações

Com nada selecionado, o painel direito lista **Relações e cotas**. Cada linha tem:

- **Editar** (só cotas): abre a caixa de número;
- **Selecionar**: seleciona-a no esboço;
- **Excluir**: remove-a.

Relações de um mesmo tipo que aparecem mais de uma vez compartilham uma linha, como "Coincidente × 5" para um retângulo preso à origem. Clique na linha para abri-la: cada relação aparece listada pelo que liga ("ponto p2, ponto p4"), com seus próprios **Selecionar** e **Excluir**. A própria linha tem:

- **Selecionar**: seleciona todas no esboço;
- **Excluir tudo**: remove todas de uma vez ({{key:Mod+Z}} as traz de volta).

Um grupo que contém uma relação superdefinida abre sozinho, com o nome em vermelho. As cotas aparecem sempre uma por linha, com seus valores.

Com geometria selecionada, a lista mostra apenas as **Relações na seleção**.
