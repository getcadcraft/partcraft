---
title: Superfícies através de uma rede de curvas (superfície de Gordon)
summary: Crie uma única superfície suave através de uma grelha de curvas de perfil e de guia desenhadas em esboços ou tiradas de arestas do modelo, feche-a num sólido quando os perfis forem fechados, e veja o que é exato, o que é ajustado e as mensagens quando uma rede não encaixa.
keywords: tangente, G1, tangência, continuidade tangencial, plano de simetria, superfície de Gordon, rede de curvas, superfície de fronteira, superfície de rede, perfis, guias, curvas-guia, loft com guias, trilhos-guia, pele, transfinito, Coons, superfície B-spline, superfície livre
from: ada3cb8b
---

:::note
**Ainda não implementado nesta versão.** A superfície de Gordon precisa de um kernel geométrico exato, que esta versão do PartCraft não tem: constrói todas as peças com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) explica o que fazer em alternativa. O resto desta página descreve-a tal como funciona com um kernel exato.
:::

Uma **superfície de Gordon** é uma única superfície que passa por cada curva de uma rede: um conjunto de **perfis** que correm num sentido e um conjunto de **guias** que correm no outro, cruzando-se como os fios de uma rede. É a forma de moldar um casco, um guarda-lamas ou uma pega a partir de algumas curvas de secção que controla diretamente. Precisa do **kernel exato** (ver [O kernel de malha](topic:solid-kernels)).

## Desenhar a rede

1. Desenhe os **perfis**: duas ou mais curvas a correr lado a lado, por exemplo secções em planos paralelos. Linhas, arcos, círculos e splines funcionam, e uma cadeia de curvas unidas de ponta a ponta conta como uma só curva.
2. Desenhe as **guias**: duas ou mais curvas a atravessar os perfis. Cada guia tem de cruzar cada perfil uma vez, e cada perfil cada guia uma vez.
3. Faça com que as curvas se encontrem de facto. Desenhe o esboço de uma guia de modo que a sua curva passe pelos pontos dos perfis (encaixe em pontos projetados, ou escreva as coordenadas). A rede aceita falhas até à **Tolerância** (0.01 mm para começar).

Um esboço pode conter várias curvas: cada cadeia separada é a sua própria curva. Assim, pode desenhar todas as guias num só esboço no plano superior, por exemplo.

## Criar a superfície

1. Escolha {{ui:Mais}} no grupo Operações, depois {{ui:Superfície de Gordon}}.
2. O PartCraft pega nos esboços que ninguém usa ainda: os que estão em planos paralelos ao primeiro tornam-se **perfis**, os restantes **guias**. Verifique a lista à direita e defina cada esboço como **Perfis**, **Guias** ou **Não usado**.
3. Para usar arestas da peça, clique em **Escolher arestas como perfis** (ou **como guias**), clique nas arestas na vista e depois prima {{key:Esc}}.

O resultado é um **corpo de superfície**. {{ui:Espessar}} transforma-o num sólido, {{ui:Coser}} cose-o a outras superfícies, e {{ui:Aparar superfície}} corta-o.

### Fechar num sólido

Quando os perfis são curvas fechadas (círculos, splines fechadas, cadeias fechadas) e o primeiro e o último perfil ficam cada um plano num plano, marque **Fechar em sólido**. As extremidades são tapadas com faces planas e a forma fechada une-se, corta, interseta ou torna-se um corpo novo como qualquer outra operação. É assim que cria um loft que segue curvas-guia. O mesmo funciona com guias fechadas.

## Tangente a um plano ao longo de uma aresta

Uma superfície de Gordon passa pelas suas curvas, mas por si só não acompanha a inclinação do que encontra. Para que saia de uma aresta **tangente** a um plano (G1), como um plano de simetria, de modo que a cópia espelhada se una sem uma dobra, ou uma face plana de onde cresce:

1. Selecione a operação Gordon. Em **Tangente a**, escolha um plano em {{ui:Adicionar um plano…}} (Frontal, Superior, Direito ou um plano de referência), ou escolha uma face plana na vista e prima {{ui:Adicionar a face plana escolhida}}.
2. O PartCraft encontra a curva de fronteira da rede que está nesse plano, e a superfície sai dela tangente ao plano.

Se um plano contiver duas curvas de fronteira (um piso sob as duas extremidades), adicione-o duas vezes: cada cópia toma a seguinte. Até quatro planos, um por aresta.

O relatório indica ao longo de qual curva cada plano tornou a superfície tangente e o ângulo mais acentuado com que a superfície encontrava esse plano antes. As guias que já saem dessa curva tangentes ao plano são seguidas exatamente. As guias que se afastam dela são dobradas numa faixa estreita junto à aresta, e o valor « segue cada curva dentro de » do relatório indica quanto: desenhe as guias que saem da aresta planas para um ajuste exato.

## O que é exato e o que é ajustado

O painel indica qual destes se aplica, e o quanto a superfície se afasta das suas curvas.

- **Exato**: quando todas as curvas são polinomiais (linhas, splines e cadeias delas) e as guias cruzam todos os perfis com os mesmos parâmetros, a superfície é exatamente a superfície de Gordon dessas curvas. Uma rede de curvas iso cortada de uma superfície bicúbica devolve essa superfície, e quatro linhas retas dão um remendo plano ou torcido (bilinear).
- **Ajustado**: arcos, círculos e arestas da peça não são polinomiais, e as curvas que se cruzam em parâmetros diferentes têm de ser re-temporizadas para que os cruzamentos se alinhem. Essas curvas são ajustadas por B-splines cúbicas dentro de uma décima milionésima do tamanho da rede (cerca de 0.00001 mm para uma peça de 100 mm). Um remendo cilíndrico feito de arcos e linhas fica dentro de 0.00001 mm do cilindro verdadeiro.

Entre as curvas, a superfície é o que o método der: os perfis misturados transversalmente, mais as guias misturadas transversalmente, menos a mistura dos seus pontos de cruzamento. É suave em toda a parte, exceto onde uma curva tem um canto vivo. Onde duas superfícies de Gordon partilham uma curva de fronteira, encontram-se aresta com aresta (G0), não tangentes.

## Quando uma rede não encaixa

| Mensagem | O que fazer |
|---|---|
| « … não se encontram: passam a 0.4 mm de distância » | Faça com que esse perfil e essa guia se cruzem, ou aumente a Tolerância |
| « … encontra … 2 vezes » | Uma guia só pode cruzar cada perfil uma vez: divida uma curva com laço, ou use menos perfis |
| « … numa ordem diferente » ou « dobra-se sobre si própria » | Duas guias cruzam-se (ou dois perfis). As famílias têm de correr lado a lado |
| « pelo menos dois perfis e duas guias » | Adicione curvas, ou defina mais esboços como Perfis ou Guias |
| « misturam curvas abertas e fechadas » | Torne todos os perfis abertos ou todos fechados (o mesmo para as guias) |
| « Uma extremidade … não é plana, por isso não pode ser tapada » | Desenhe o primeiro e o último perfil fechados, cada um num plano, ou deixe Fechar em sólido desligado |

## Limites

- Uma face B-spline por rede: sem tangência G1 ou G2 com superfícies vizinhas.
- A costura de uma rede fechada, na primeira guia, é unida aresta com aresta mas não tangente.
- A própria operação Loft não tem trilhos-guia; use antes uma superfície de Gordon fechada num sólido.
- Curvas muito sinuosas, ou cruzamentos espaçados de modo muito irregular ao longo de uma curva em comparação com outra, podem precisar de demasiados pontos para ajustar; a operação indica-o.
