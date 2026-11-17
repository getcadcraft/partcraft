---
title: Acúmulos de tolerância
summary: Escolha uma cadeia de faces através das peças de uma montagem e veja o quanto a folga na sua extremidade pode variar, pior caso e RSS, com as cotas que mais importam listadas primeiro.
keywords: acúmulo de tolerância, acúmulo, análise de tolerância, cadeia de tolerância, cadeia de cotas, circuito, folga, pior caso, rss, raiz da soma dos quadrados, tolerância estatística, contribuintes, sensibilidade, gd&t, tolerância geral, iso 2768
from: cbdb3159
---

Um **acúmulo** soma as cotas ao longo de uma cadeia através de várias peças para ver o quanto um resultado — geralmente uma folga — pode variar quando cada peça é feita em qualquer lugar dentro das suas tolerâncias.

## Selecionar a cadeia

1. Abra uma montagem e escolha {{ui:Acúmulo}} no grupo Montagem. Um cartão abre sobre a vista.
2. Escolha ao longo de quê a cadeia é medida: X, Y ou Z da montagem, ou {{ui:A normal da primeira face}}.
3. Pressione {{ui:Selecionar a cadeia}} e clique nas faces pelas quais a cadeia passa, **em ordem**: comece em um lado da folga, passe pelas peças e termine no outro lado da folga.
4. Pressione {{ui:Concluir}} ou Enter. Backspace desfaz o último clique; Esc cancela.

Dois cliques na mesma peça formam a cota dessa peça (sua distância ao longo da cadeia). Um clique em outra peça cria uma **interface** entre elas, onde as peças se encontram; ela não tem tolerância, a menos que você digite uma. Os elos somam ou subtraem conforme o sentido da cadeia, e fecham o circuito: a folga nominal é o que o modelo mostra.

Você também pode {{ui:Adicionar um elo}} manualmente e digitar seu nominal, sua tolerância e se ele soma (+) ou subtrai (−).

## Dar a cada elo sua tolerância

Cada elo tem um desvio **superior** e um **inferior** (por exemplo +0.1 e −0.05). **Tolerância de** os preenche a partir da peça:

- **Tolerância geral**: o campo Tolerância do bloco de título da peça (veja [Desenho para PDF](topic:drawing-pdf)), quando ele mostra ±0.1, +0.2/-0.1 ou ISO 2768-f, -m, -c ou -v (tolerâncias lineares ISO 2768-1, conforme o tamanho do elo). A tolerância geral de uma peça é usada logo que a cadeia é selecionada.
- **GD&T**: qualquer quadro de controle de característica no desenho da peça. Zonas de posição, perfil e batimento dão ± metade da tolerância. Uma tolerância de orientação ou forma geralmente já está dentro da tolerância de tamanho: adicione-a apenas onde a cadeia encontra a superfície controlada. Com Ⓜ ou Ⓛ a zona é tomada no tamanho declarado; a tolerância de bônus não é contada.
- **Digitada**: quaisquer números que você digitar.

## Ler os resultados

- **Folga, nominal** e, quando as tolerâncias são desiguais, **Folga, média**: +0.2/−0 e +0/−0.1 deslocam o meio da faixa.
- **Pior caso**: todas as tolerâncias em seu limite ao mesmo tempo. A folga nunca pode ficar fora disso.
- **RSS** (raiz da soma dos quadrados): cada tolerância tomada como três desvios padrão de uma dispersão normal, somada como a raiz quadrada da soma de seus quadrados. A maioria das montagens fica bem dentro do pior caso; esta é a estimativa usual para peças fabricadas em série.
- Informe **Folga mínima** e **Folga máxima** para ver se o pior caso sempre permanece dentro, e quantas montagens em um milhão o RSS espera fora.
- A coluna **#** ordena os elos pela sua **participação** no RSS: aperte os primeiros para fazer a maior diferença.

{{ui:Salvar CSV}} grava os elos, suas participações e os resultados. Os acúmulos são salvos no arquivo da montagem, e cada alteração é um passo para {{key:Mod+Z}}.

:::note
Um acúmulo é em uma direção. Ele não acompanha ângulos nem curvas ao longo da cadeia, e não lê tolerâncias de tamanho dos esboços: informe-as como tolerâncias digitadas ou pelo bloco de título.
:::
