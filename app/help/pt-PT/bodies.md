---
title: Combinar, mover e escalar corpos; matrizes por trajetória
summary: Criar corpos separados e, depois, uni-los, cortá-los ou intersetá-los; mover, rodar, alinhar ou copiar corpos; escalá-los de forma uniforme ou por X, Y e Z; e copiar operações ou corpos ao longo de uma curva.
keywords: corpo, corpos, multicorpo, novo corpo, combinar, booleana, unir, cortar, intersetar, subtrair, união, manter ferramentas, mover corpo, copiar corpo, rodar corpo, alinhar, translação, escalar, escala não uniforme, esticar, afim, matriz por trajetória, matriz ao longo de curva, matriz ao longo de trajeto, matriz guiada por curva
from: 6b1ea820
---

:::note
**Ainda não implementado nesta versão.** Trabalhar com vários corpos exige um núcleo de geometria exato, que esta versão do PartCraft não tem: constrói todas as peças com o núcleo de malha. [O que ainda não está implementado](topic:not-built-yet) indica o que fazer em alternativa. O resto desta página descreve o funcionamento com um núcleo exato.
:::

Uma peça pode ter mais do que um sólido. Cada sólido separado é um **corpo**. A maioria das operações acrescenta ou retira material a todos os corpos que toca; as ferramentas desta página atuam sobre corpos inteiros que escolhe. Estão no menu {{ui:More}} do grupo Operações: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}} e {{ui:Path pattern}}. Todas precisam do núcleo exato (OpenCascade).

## Criar um corpo separado

Defina a **Operação** de uma extrusão ou de uma revolução como **Novo corpo** no seu painel da direita (varrimentos e lofts também a têm). O novo sólido mantém-se separado mesmo onde se sobrepõe aos outros. **Intersetar** mantém apenas a sobreposição da nova forma com o que já existe.

Os corpos recebem o nome da operação que os criou: "Extrude2". Uma cópia recebe o nome do original e da operação que a copiou: "Extrude2, cópia 1 de Move1". Os nomes mantêm-se quando altera dimensões a montante, pelo que as operações que usam um corpo continuam a encontrá-lo. Com dois ou mais corpos, o painel da peça (clique num espaço vazio) lista-os com os respetivos volumes.

## Renomear ou ocultar um corpo

Clique num espaço vazio da vista para ver o painel da peça. A sua lista de corpos (mostrada quando a peça tem dois ou mais corpos) tem uma caixa de nome e um botão {{ui:Hide}} em cada linha.

- **Renomear:** escreva um novo nome na caixa e prima {{key:Enter}} ou clique fora. Todos os painéis passam a usá-lo: Combinar, Mover corpo, as matrizes. Limpe a caixa para voltar ao nome da operação que criou o corpo.
- **Ocultar:** clique em {{ui:Hide}} na sua linha. O corpo sai da vista e os cliques atravessam-no, pelo que pode selecionar faces que estejam atrás. {{ui:Show}} repõe-no; {{ui:Show all}} repõe todos os corpos ocultos.

Ocultar altera apenas a vista. Um corpo oculto continua a ser construído, conta no volume e nas medições, e é gravado nas exportações STL, 3MF e STEP. Os nomes e os corpos ocultos são guardados no ficheiro da peça, e cada alteração é um passo de {{ui:Undo}}.

## Combinar corpos

1. Shift+clique numa face do corpo **alvo** e depois numa face de cada corpo **ferramenta**.
2. Escolha {{ui:More}} e depois {{ui:Combine}}.
3. No painel da direita, escolha a **Operação**:

| Operação | Resultado |
|---|---|
| Unir | O alvo e as ferramentas passam a ser um só corpo |
| Cortar | As ferramentas são retiradas do alvo |
| Intersetar | Mantém-se apenas o que o alvo e todas as ferramentas partilham |

O **Corpo alvo** é o que mantém o seu nome. Marque ou desmarque os **Corpos ferramenta**, ou use **Selecionar na vista** e clique nas respetivas faces. **Manter os corpos ferramenta** deixa também as ferramentas no lugar (útil para um molde e o seu macho). Se um corpo ferramenta já tiver sido consumido por uma operação Combinar anterior, o painel indica-o em vez de selecionar outro corpo.

## Mover ou copiar um corpo

1. Escolha {{ui:More}} e depois {{ui:Move body}}. O corpo mais recente vem marcado; marque os que quer mover.
2. Escolha o tipo de **Mover**:

| Mover | O que define |
|---|---|
| Transladar | **ΔX**, **ΔY**, **ΔZ** em milímetros |
| Ponto a ponto | **De** e **Até**: clique perto da extremidade de uma aresta, numa operação de ponto ou num local de uma face |
| Rodar em torno de um eixo | **Eixo** (X, Y, Z, uma operação de eixo, ou **Selecionar**: uma aresta reta, um círculo ou um cilindro) e **Ângulo (°)** |
| Alinhar uma face a uma face ou plano | **Face a mover** (uma face plana do corpo), **Sobre** (uma face plana ou um plano) |

Alinhar roda o corpo para que a sua face assente na outra face, face a face, e depois desliza-o apenas ao longo da normal dessa face. **Mesmo sentido** roda-o no sentido inverso. **Copiar** mantém o original e acrescenta a cópia movida como novo corpo.

## Escalar um corpo

1. Escolha {{ui:More}} e depois {{ui:Scale body}}, e marque os corpos.
2. Escreva uma **Escala**, ou desmarque **Uniforme** e escreva **Escala X**, **Escala Y** e **Escala Z** (segundo os eixos do mundo).
3. **Em torno de** é o ponto que se mantém fixo: o centro da caixa dos corpos, ou um ponto que selecione.

Uma escala uniforme é exata. Uma escala não uniforme transforma círculos em elipses: um cilindro passa a ser um cilindro elíptico, que nenhuma superfície analítica consegue representar. Por isso, as faces curvas passam a ser superfícies B-spline que ficam a menos de 0.0000004 mm da forma exata; as faces planas e as arestas retas mantêm-se exatas. O painel indica o que aconteceu. Os fatores de escala têm de ser superiores a zero (para espelhar, use {{ui:Mirror}} › "Espelhar").

## Copiar ao longo de um trajeto

1. Selecione no histórico a operação a copiar, ou deixe tudo desselecionado para copiar o corpo mais recente.
2. Escolha {{ui:More}} e depois {{ui:Path pattern}}. O esboço não utilizado mais recente é tomado como trajeto.
3. No painel da direita, defina:

| Definição | O que faz |
|---|---|
| **Copiar** | Corpos (cada cópia é um novo corpo) ou Operações (unidas ou cortadas como o original) |
| **Trajeto** | Marque esboços, ou **Selecionar arestas do modelo**; as partes têm de se unir ponta a ponta |
| **Quantidade** | Total, incluindo o original |
| **Espaçamento** | Igual (distribuído até ao fim de um trajeto aberto, ou por todo um trajeto fechado) ou uma distância definida |
| **Orientação** | Seguir o trajeto (cada cópia roda com ele) ou Fixa (as cópias mantêm-se paralelas) |
| **Inverter sentido** | Seguir no sentido contrário ao longo do trajeto |

As cópias começam onde o trajeto passa mais perto do original e são espaçadas pelo comprimento ao longo da curva.

As matrizes lineares e circulares também podem copiar corpos: marque **Copiar corpos** no respetivo painel e escolha os corpos; cada cópia é um novo corpo.

## Limites

- Os corpos precisam do núcleo exato; o núcleo de malha mantém um só sólido e indica-o.
- Uma escala não uniforme transforma as faces curvas em aproximações B-spline próximas (ver acima), e não em cilindros ou cones exatos; as superfícies de deslocamento ainda não podem ser escaladas dessa forma.
- Seguir o trajeto numa curva 3D que se torce transporta a cópia sem a torcer; em trajetos planos, a rotação é exata.
- Combinar funciona apenas com sólidos. Os corpos de superfície são unidos com {{ui:Stitch}} › "Coser".

Ver também [Planos, eixos e pontos de referência](topic:reference-geometry) para pontos e planos "entre objetos", e [Operações de matriz e espelhamento](topic:patterns-mirror).
