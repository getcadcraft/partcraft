---
title: Formas livres com Forma e operações de superfície
summary: Empurre e puxe uma gaiola de controlo lisa no espaço de trabalho Forma, vinque arestas, use simetria, verifique-a e acabe-a num sólido ou superfície exata; depois aplique remendo, loft, coser, espessar, deslocar, estender e aparar superfícies em Design. O que é exato e o que é aproximado.
keywords: forma, forma livre, T-spline, subdivisão, Catmull-Clark, gaiola, quadball, vinco, simetria, zebra, curvatura, superfície, remendo, preencher, superfície de loft, coser, espessar, superfície de deslocamento, estender, aparar
from: 0d326ef4
---

:::note
**Ainda não implementado nesta versão.** Concluir uma forma na peça e as operações de superfície exigem um kernel geométrico exato, que esta versão do PartCraft não tem: constrói todas as peças com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) explica o que fazer em alternativa. O resto desta página descreve-as tal como funcionam com um kernel exato.
:::

O espaço de trabalho **Forma** cria formas orgânicas. Edita uma **gaiola**, uma malha grosseira de cantos, arestas e faces. A forma é a superfície lisa que a gaiola controla (a sua superfície limite de Catmull–Clark), por isso mover um canto curva suavemente a superfície à sua volta. Quando estiver bem, **{{ui:Acabamento}}** adiciona-a ao histórico da peça como uma operação *Forma*, e o kernel exato transforma-a em superfícies B-spline verdadeiras. Pode depois arredondá-la, cortá-la, uni-la a outras operações e exportá-la como STEP.

Escolha **Forma** na lista **Área de trabalho** à esquerda da barra de ferramentas.

## Iniciar uma gaiola

1. Defina **Tamanho** e **Divisões** no painel direito. Divisões é o número de faces em cada lado.
2. Clique em {{ui:Paralelepípedo}}, {{ui:Quadball}} ou {{ui:Plano}} na barra de ferramentas. O painel também tem **Cilindro**, **Toro** e **Faces por cliques**.

- Um **quadball** é uma gaiola em caixa ajustada para que os seus pontos de canto fiquem sobre uma esfera. Entre esses pontos, a superfície fica um pouco dentro da esfera: cerca de 0.4 % de volume a menos com 2 divisões.
- Um **plano** é aberto, por isso torna-se um corpo de superfície (ver « Operações de superfície em Design » abaixo).
- **Faces por cliques**: clique em 4 pontos no plano superior (do chão) ou nos cantos da gaiola para criar uma face. As faces que partilham cantos ligam-se. Prima {{key:Enter}} após 3 pontos para um triângulo, ou {{key:Esc}} para parar.

A gaiola inacabada fica guardada com o ficheiro da peça, pelo que pode fechar o ficheiro e continuar mais tarde.

## Selecionar e mover

- Clique num canto, numa aresta ou numa face da gaiola. {{key:Shift}}+clique acrescenta ou retira itens. {{key:Esc}} limpa a seleção.
- Um gizmo aparece no meio da seleção. Arraste uma seta para mover ao longo dela, ou um quadrado para mover nesse plano. Prima {{key:W}} para mover, {{key:E}} para rodar e {{key:R}} para escalar, ou use os botões do painel. {{ui:Gizmo}} na barra de ferramentas percorre-os.
- **Queda suave** (mm) também puxa os cantos dentro dessa distância, desvanecendo suavemente até zero na extremidade dessa distância.
- Cada arrasto é um único passo de anulação: {{key:Ctrl+Z}} e {{key:Ctrl+Y}} funcionam como de costume.

## Alterar a gaiola

Os botões **Modificar** do painel atuam sobre a seleção:

| Botão | O que faz |
|---|---|
| {{ui:Extrudir}} | As faces escolhidas afastam-se pela **Distância de extrusão**, segundo as suas normais, com novas faces laterais. As arestas abertas escolhidas criam novas faces para fora. |
| {{ui:Anel de arestas}} / Inserir anel de arestas | Divide o anel de faces de quatro lados que atravessa a aresta escolhida, a meio caminho. Mais anéis dão curvas mais apertadas. |
| Inserir ponto | Adiciona um canto a meio da aresta escolhida. |
| Subdividir | Divide cada face escolhida em faces de quatro lados em torno do seu centro. |
| Ponte | Une duas faces escolhidas, ou duas aberturas (escolha uma aresta aberta em cada), com um tubo de faces. Ambas precisam do mesmo número de arestas. |
| Preencher furo | Fecha a abertura através da aresta aberta escolhida com uma face. |
| Soldar | Funde os cantos escolhidos num só, no seu meio. |
| Aplanar | Move os cantos escolhidos para o plano que melhor se ajusta a eles. |
| Eliminar | Remove as faces escolhidas, as arestas (duas faces fundem-se) ou os cantos. |

## Arestas vincadas, simetria e visualização

- {{ui:Vincar}} torna as arestas escolhidas vivas. **Peso do vinco** 10 é totalmente vivo. Um peso menor mantém a aresta viva durante esse número de passos de refinamento e depois suaviza, o que dá uma curva apertada em vez de uma dobra dura. **Desvincar** volta a suavizá-las. **Vértice vivo** fixa um canto para que a superfície passe por ele com um ponto.
- **Simetria** espelha a gaiola segundo X, Y ou Z = 0. Mantém o lado positivo, espelha-o e une as duas metades. Depois, uma edição de um dos lados aplica-se aos dois. Os cantos no plano de simetria mantêm-se nele.
- {{ui:Visualização}} alterna entre **Suave** (a superfície que a operação terá) e **Caixa** (as próprias faces da gaiola).
- **Análise**: as **listras zebra** refletem uma luz listrada a partir da vista atual. Curvam-se suavemente sobre uma superfície lisa e quebram-se num vinco. A **curvatura média** sombreia as áreas convexas a vermelho, as côncavas a azul e as planas a branco. É medida na malha apresentada com a fórmula da cotangente, por isso é um guia, não uma medição.

## Verificar e acabar

- **Verificar exato** converte a gaiola no kernel exato sem alterar a sua peça. Indica quantos remendos B-spline a gaiola cria, quantos são exatos, e se o resultado é um sólido fechado e válido, bem como o seu volume.
- {{ui:Acabamento}} adiciona uma operação *Forma* ao histórico, ou atualiza a forma que estava a editar, e leva-o de volta a Design. Uma gaiola fechada torna-se um sólido. A sua **Operação** no painel de Design pode ser Novo corpo, Unir, Cortar ou Interseção. Uma gaiola aberta torna-se um corpo de superfície.
- Para alterar uma forma mais tarde, selecione-a no histórico e clique em **Editar em Forma**. O corpo construído fica oculto enquanto edita a sua gaiola.
- **Descartar** deita a gaiola fora sem tocar no histórico.

## O que é exato e o que é aproximado

Cada face de quatro lados da gaiola, refinada quando necessário, torna-se um remendo B-spline bicúbico.

- Quando todos os cantos de uma face são *regulares* (quatro arestas encontram-se dentro da superfície, ou três numa aresta aberta ou ao longo de um vinco), o remendo é **exatamente** a superfície de subdivisão. Os testes verificam isto até 1e-9 mm.
- Em redor de um **ponto extraordinário** (três, cinco ou mais arestas a encontrarem-se, um canto de uma face de três ou cinco lados, ou a extremidade de um vinco) não existe um remendo polinomial exato. Aí o remendo assume o ponto exato e o plano tangente nesse canto e as curvas de aresta dos vizinhos, pelo que os remendos continuam a encontrar-se sem falha. A continuidade tangencial nas arestas que se encontram nesse ponto é aproximada. O painel Forma e o painel da operação indicam o maior ângulo, normalmente inferior a 2°. Um **Nível** mais alto no painel da operação torna estes remendos mais pequenos e mais próximos.
- Os vincos são arestas reais do sólido, por isso pode arredondá-las.
- Cada remendo é a sua própria face, por isso uma forma tem muitas faces e são desenhadas linhas entre elas.

## Operações de superfície em Design

Os comandos de superfície estão no menu {{ui:Mais}} de Design, entre as operações. Precisam do kernel exato. Os corpos de superfície são desenhados transparentes a azul. Não fazem parte do sólido até os espessar ou coser.

| Comando | O que faz |
|---|---|
| Remendo | Preenche um circuito fechado de arestas. Primeiro, {{key:Shift}}+clique nas arestas do sólido, ou selecione um corpo de superfície para preencher a sua abertura. **Tangente (G1)** faz com que o remendo se una a essa superfície suavemente. |
| {{ui:Superfície de Gordon}} / superfície de loft | Uma superfície através de uma cadeia de curvas por esboço (aberta ou fechada), pela ordem do histórico. |
| {{ui:Coser}} | Cose corpos de superfície ao longo das arestas partilhadas. Se fecharem, o resultado é um sólido, com uma Operação como as outras operações. |
| {{ui:Espessar}} | Dá a um corpo de superfície uma espessura: ao longo da sua normal, contra ela, ou metade para cada lado. O resultado é um sólido. |
| Superfície de deslocamento | Uma cópia de um corpo de superfície movida ao longo das suas normais. O original mantém-se. |
| Estender superfície | Aumenta uma superfície de uma face para além das arestas escolhidas. |
| {{ui:Aparar superfície}} | Corta um corpo de superfície onde outro corpo de superfície, ou o sólido, o atravessa. Clique em **Escolher um ponto na peça** para escolher que parte manter, ou mantenha tudo o resto. |

{{ui:Coser}}, {{ui:Espessar}}, Estender e {{ui:Aparar superfície}} consomem o corpo de superfície de partida. As operações seguintes usam o novo.

Limitações atuais: formas com várias peças fechadas separadas não se convertem num só sólido; as áreas regulares não são fundidas em superfícies maiores; e ver [O que ainda não está implementado](topic:not-built-yet).
