---
title: Superfícies por uma rede de curvas (superfície de Gordon)
summary: Crie uma superfície suave através de uma grade de curvas de perfil e de guia desenhadas em esboços ou tiradas de arestas do modelo, feche-a como sólido quando os perfis forem fechados, e veja o que é exato, o que é ajustado e as mensagens quando uma rede não encaixa.
keywords: tangente, G1, tangência, continuidade tangente, plano de espelhamento, superfície de Gordon, rede de curvas, superfície de contorno, superfície de rede, superfície em rede, perfis, guias, curvas-guia, loft com guias, trilhos-guia, casca, transfinita, Coons, superfície B-spline, superfície livre
from: ada3cb8b
---

:::note
**Ainda não implementado nesta versão.** A superfície de Gordon precisa de um kernel geométrico exato, que esta versão do PartCraft não tem: ele constrói cada peça com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) explica o que fazer no lugar. O restante desta página descreve como ela funciona com um kernel exato.
:::

Uma **superfície de Gordon** é uma única superfície que passa por cada curva de uma rede: um conjunto de **perfis** correndo em uma direção e um conjunto de **guias** correndo na outra, cruzando-se como os fios de uma rede. É assim que você modela um casco, um para-lama ou uma alça a partir de algumas curvas de seção que controla diretamente. Ela precisa do **kernel exato** (veja [O kernel de malha](topic:solid-kernels)).

## Desenhe a rede

1. Desenhe os **perfis**: duas ou mais curvas correndo lado a lado, por exemplo seções em planos paralelos. Linhas, arcos, círculos e splines funcionam, e uma cadeia de curvas unidas ponta a ponta conta como uma única curva.
2. Desenhe as **guias**: duas ou mais curvas correndo transversalmente aos perfis. Cada guia precisa cruzar cada perfil uma vez, e cada perfil cruzar cada guia uma vez.
3. Faça as curvas realmente se encontrarem. Desenhe o esboço de uma guia de modo que sua curva passe pelos pontos dos perfis (faça snap nos pontos projetados, ou digite as coordenadas). A rede aceita lacunas até a **Tolerância** (0.01 mm para começar).

Um esboço pode conter várias curvas: cada cadeia separada nele é sua própria curva. Assim, você pode desenhar todas as guias em um único esboço no plano superior, por exemplo.

## Crie a superfície

1. Escolha {{ui:Mais}} no grupo Recursos e depois {{ui:Superfície de Gordon}}.
2. O PartCraft pega os esboços que ninguém usa ainda: os que estão em planos paralelos ao primeiro se tornam **perfis**, os outros **guias**. Confira a lista à direita e defina cada esboço como **Perfis**, **Guias** ou **Não usado**.
3. Para usar arestas da peça, clique em **Escolher arestas como perfis** (ou **como guias**), clique nas arestas na vista e depois pressione Esc.

O resultado é um **corpo de superfície**. {{ui:Espessar}} o transforma em sólido, {{ui:Costurar}} o une a outras superfícies, e {{ui:Aparar superfície}} o corta.

### Feche como sólido

Quando os perfis forem curvas fechadas (círculos, splines fechadas, cadeias fechadas) e o primeiro e o último perfil estiverem cada um em um plano plano, marque **Fechar em sólido**. As extremidades são tampadas com faces planas e a forma fechada se une, corta, intersecta ou se torna um novo corpo como qualquer outro recurso. É assim que você faz um loft que segue curvas-guia. O mesmo funciona com guias fechadas.

## Tangente a um plano ao longo de uma aresta

Uma superfície de Gordon passa por suas curvas, mas sozinha não acompanha a inclinação do que encontra. Para fazê-la sair de uma aresta **tangente** a um plano (G1), como um plano de espelhamento, para que a cópia espelhada se una sem uma dobra, ou uma face plana da qual ela cresce:

1. Selecione o recurso Gordon. Em **Tangente a**, escolha um plano em {{ui:Adicionar um plano…}} (Frontal, Superior, Direito ou um plano de referência), ou escolha uma face plana na vista e pressione {{ui:Adicionar a face plana selecionada}}.
2. O PartCraft encontra a curva de contorno da rede que está nesse plano, e a superfície sai dela tangente ao plano.

Se um plano tiver duas curvas de contorno (um piso sob as duas extremidades), adicione-o duas vezes: cada cópia pega a próxima. Até quatro planos, um por aresta.

O relatório informa ao longo de qual curva cada plano tornou a superfície tangente e o ângulo mais íngreme com que a superfície encontrou esse plano antes. Guias que já saem dessa curva tangentes ao plano são seguidas exatamente. Guias que se afastam dela são curvadas em uma faixa estreita perto da aresta, e o valor "segue cada curva dentro de" do relatório diz o quanto: desenhe as guias saindo da aresta planas para um ajuste exato.

## O que é exato e o que é ajustado

O painel informa qual destes se aplica e o quanto a superfície se afasta das suas curvas.

- **Exato**: quando cada curva é polinomial (linhas, splines e cadeias delas) e as guias cruzam todos os perfis nos mesmos parâmetros, a superfície é exatamente a superfície de Gordon dessas curvas. Uma rede de curvas isoparamétricas cortadas de uma superfície bicúbica devolve essa superfície, e quatro linhas retas dão um retalho plano ou torcido (bilinear).
- **Ajustado**: arcos, círculos e arestas da peça não são polinomiais, e curvas que se cruzam em parâmetros diferentes precisam ser recalibradas para que os cruzamentos se alinhem. Essas curvas são ajustadas por B-splines cúbicas dentro de uma décima milionésima do tamanho da rede (cerca de 0.00001 mm para uma peça de 100 mm). Um retalho de cilindro feito de arcos e linhas permanece dentro de 0.00001 mm do cilindro verdadeiro.

Entre as curvas, a superfície é o que o método der: os perfis mesclados transversalmente, mais as guias mescladas transversalmente, menos a mescla dos seus pontos de cruzamento. Ela é suave em toda parte, exceto onde uma curva tem um canto vivo. Onde duas superfícies de Gordon compartilham uma curva de contorno, elas se encontram aresta com aresta (G0), não tangentes.

## Quando uma rede não encaixa

| Mensagem | O que fazer |
|---|---|
| "… não se encontram: passam a 0.4 mm de distância" | Faça aquele perfil e aquela guia se cruzarem, ou aumente a Tolerância |
| "… encontra … 2 vezes" | Uma guia pode cruzar cada perfil apenas uma vez: divida uma curva com laço, ou use menos perfis |
| "… em uma ordem diferente" ou "dobra sobre si mesma" | Duas guias se cruzam (ou dois perfis). As famílias precisam correr lado a lado |
| "pelo menos dois perfis e duas guias" | Adicione curvas, ou defina mais esboços como Perfis ou Guias |
| "misturam curvas abertas e fechadas" | Torne todos os perfis abertos ou todos fechados (o mesmo para as guias) |
| "Uma extremidade … não é plana, então não pode ser tampada" | Desenhe o primeiro e o último perfil fechados, cada um em um plano, ou deixe Fechar em sólido desmarcado |

## Limites

- Uma face B-spline por rede: sem tangência G1 ou G2 com superfícies vizinhas.
- A costura de uma rede fechada, na primeira guia, é unida aresta com aresta, mas não é tangente.
- O recurso Loft em si não tem trilhos-guia; use uma superfície de Gordon fechada como sólido.
- Curvas muito onduladas, ou cruzamentos espaçados de forma muito desigual ao longo de uma curva em comparação com outra, podem precisar de pontos demais para se ajustar; o recurso então informa isso.
