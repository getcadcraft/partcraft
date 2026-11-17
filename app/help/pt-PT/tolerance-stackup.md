---
title: Cadeias de tolerâncias
summary: Escolha uma cadeia de faces através das peças de uma montagem e veja quanto pode variar a folga na sua extremidade, no pior caso e em RSS, com as dimensões que mais importam ordenadas em primeiro lugar.
keywords: cadeia de tolerâncias, análise de tolerâncias, cadeia de tolerância, cadeia de cotas, ciclo, folga, folga mínima, pior caso, rss, raiz da soma dos quadrados, tolerância estatística, contribuintes, sensibilidade, gd&t, tolerância geral, iso 2768
from: cbdb3159
---

Uma **cadeia de tolerâncias** soma as dimensões ao longo de uma cadeia através de várias peças, para ver quanto um resultado (normalmente uma folga) pode variar quando cada peça é feita em qualquer ponto dentro das suas tolerâncias.

## Escolher a cadeia

1. Abra uma montagem e escolha {{ui:Cadeia de tolerâncias}} no grupo Montagem. Abre-se um cartão sobre a vista.
2. Escolha ao longo de quê a cadeia é medida: X, Y ou Z da montagem, ou {{ui:A normal da primeira face}}.
3. Prima {{ui:Selecionar a cadeia}} e clique nas faces que a cadeia atravessa, **pela ordem**: comece num lado da folga, passe pelas peças e termine no outro lado da folga.
4. Prima {{ui:Concluir}} ou {{key:Enter}}. {{key:Backspace}} retira o último clique; {{key:Esc}} cancela.

Dois cliques na mesma peça criam a dimensão dessa peça (a sua distância ao longo da cadeia). Um clique noutra peça cria uma **interface** entre elas, onde as peças se tocam; não tem tolerância, a não ser que escreva uma. Os elos somam ou subtraem conforme o sentido da cadeia, e fecham o ciclo: a folga nominal é a que o modelo mostra.

Pode também {{ui:Adicionar um elo}} à mão e escrever o seu nominal, a sua tolerância e se soma (+) ou subtrai (−).

## Dar a cada elo a sua tolerância

Cada elo tem um desvio **superior** e um **inferior** (por exemplo +0.1 e −0.05). **Tolerância de** preenche-os a partir da peça:

- **Tolerância geral**: o campo de Tolerância da legenda da peça (ver [Desenho para PDF](topic:drawing-pdf)), quando lê ±0.1, +0.2/-0.1 ou ISO 2768-f, -m, -c ou -v (tolerâncias lineares ISO 2768-1, conforme o tamanho do elo). A tolerância geral de uma peça é usada logo que a cadeia é escolhida.
- **GD&T**: qualquer quadro de controlo no desenho da peça. As zonas de posição, perfil e batimento dão ± metade da tolerância. Uma tolerância de orientação ou de forma fica normalmente dentro da tolerância dimensional já existente: acrescente-a apenas onde a cadeia encontra a superfície controlada. Com Ⓜ ou Ⓛ a zona é tomada no seu tamanho indicado; a tolerância de bónus não é contada.
- **Escrita**: quaisquer números que escreva.

## Ler os resultados

- **Folga, nominal** e, quando as tolerâncias são desiguais, **Folga, média**: +0.2/−0 e +0/−0.1 deslocam o meio do intervalo.
- **Pior caso**: todas as tolerâncias no seu limite ao mesmo tempo. A folga nunca pode ficar fora disto.
- **RSS** (raiz da soma dos quadrados): cada tolerância tomada como três desvios-padrão de uma dispersão normal, somada como a raiz quadrada da soma dos seus quadrados. A maioria das montagens fica bem dentro do pior caso; esta é a estimativa usual para peças fabricadas em série.
- Indique Folga mínima e Folga máxima para ver se o pior caso fica sempre dentro, e quantas montagens em um milhão o RSS prevê fora.
- A coluna **#** ordena os elos pela sua **parte** no RSS: aperte os primeiros para obter a maior diferença.

{{ui:Guardar CSV}} escreve os elos, as suas partes e os resultados. As cadeias ficam guardadas no ficheiro da montagem, e cada alteração conta como um passo para {{key:Mod+Z}}.

:::note
Uma cadeia de tolerâncias tem uma só direção. Não segue ângulos nem voltas ao longo da cadeia, e não lê tolerâncias dimensionais dos esboços: indique-as como tolerâncias escritas ou através da legenda.
:::
