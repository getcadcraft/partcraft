---
title: Combinar, mover e escalar corpos; matrizes por caminho
summary: Crie corpos separados e depois una, corte ou intersecte-os, mova, gire, alinhe ou copie-os, escale uniformemente ou por X, Y e Z, e copie recursos ou corpos ao longo de uma curva.
keywords: corpo, corpos, multicorpo, novo corpo, combinar, booleana, unir, cortar, interseção, subtrair, união, manter ferramentas, mover corpo, copiar corpo, girar corpo, alinhar, translação, escalar, escala não uniforme, esticar, afim, matriz por caminho, matriz ao longo de curva, matriz guiada por curva
from: 6b1ea820
---

:::note
**Ainda não implementado nesta versão.** Trabalhar com vários corpos exige um kernel de geometria exato, que esta versão do PartCraft não tem: ele constrói todas as peças com o kernel de malha. [O que ainda não foi implementado](topic:not-built-yet) diz o que fazer em vez disso. O restante desta página descreve como funciona com um kernel exato.
:::

Uma peça pode conter mais de um sólido. Cada sólido separado é um **corpo**. A maioria dos recursos adiciona ou corta de cada corpo que toca; as ferramentas desta página trabalham com corpos inteiros que você escolhe. Elas ficam no menu {{ui:Mais}} do grupo Recursos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}} e {{ui:Matriz por caminho}}. Todas precisam do kernel exato (OpenCascade).

## Criar um corpo separado

Defina a **Operação** de uma extrusão ou de uma revolução como **Novo corpo** no painel da direita dela (varreduras e lofts também têm essa opção). O novo sólido permanece separado mesmo onde se sobrepõe aos outros. **Interseção** mantém apenas a sobreposição da nova forma com o que já existe.

Os corpos recebem o nome do recurso que os criou: "Extrude2". Uma cópia recebe o nome do original e do recurso que a copiou: "Extrude2, copy 1 of Move1". Os nomes permanecem os mesmos quando você altera tamanhos anteriores no histórico, de modo que os recursos que usam um corpo continuam encontrando-o. Com dois ou mais corpos, o painel da peça (clique em um espaço vazio) os lista com seus volumes.

## Renomear ou ocultar um corpo

Clique em um espaço vazio da vista para ver o painel da peça. Sua lista de corpos (mostrada quando a peça tem dois ou mais corpos) tem uma caixa de nome e um botão {{ui:Ocultar}} em cada linha.

- **Renomear:** digite um novo nome na caixa e pressione {{key:Enter}} ou clique fora. Todos os painéis passam a usá-lo: Combinar, Mover corpo, as matrizes. Apague a caixa para voltar ao nome do recurso que criou o corpo.
- **Ocultar:** clique em {{ui:Ocultar}} na linha dele. O corpo sai da vista e os cliques passam por ele, então você pode selecionar faces atrás dele. {{ui:Mostrar}} o traz de volta; {{ui:Mostrar tudo}} traz de volta todos os corpos ocultos.

Ocultar muda apenas a vista. Um corpo oculto continua sendo construído, contado no volume e nas medições, e salvo nas exportações STL, 3MF e STEP. Nomes e corpos ocultos são salvos no arquivo da peça, e cada alteração é uma etapa de {{ui:Desfazer}}.

## Combinar corpos

1. Shift+clique em uma face do corpo **alvo**, depois em uma face de cada corpo **ferramenta**.
2. Escolha {{ui:Mais}}, depois {{ui:Combinar}}.
3. No painel da direita, escolha a **Operação**:

| Operação | Resultado |
|---|---|
| Unir | O alvo e as ferramentas viram um único corpo |
| Cortar | As ferramentas são retiradas do alvo |
| Interseção | Apenas o que o alvo e todas as ferramentas têm em comum é mantido |

**Corpo alvo** é aquele que mantém seu nome. Marque ou desmarque **Corpos ferramenta**, ou use **Escolher na vista** e clique nas faces deles. **Manter os corpos ferramenta** deixa as ferramentas no lugar também (útil para um molde e seu macho). Se um corpo ferramenta já foi usado por uma operação Combinar anterior, o painel informa isso em vez de escolher outro corpo.

## Mover ou copiar um corpo

1. Escolha {{ui:Mais}}, depois {{ui:Mover corpo}}. O corpo mais recente fica marcado; marque os que quer mover.
2. Escolha o tipo de **Movimento**:

| Movimento | O que você define |
|---|---|
| Translação | **ΔX**, **ΔY**, **ΔZ** em milímetros |
| Ponto a ponto | **De** e **Até**: clique perto da extremidade de uma aresta, em um recurso de ponto ou em um ponto de uma face |
| Girar em torno de um eixo | **Eixo** (X, Y, Z, um recurso de eixo, ou **Escolher**: uma aresta reta, um círculo ou um cilindro) e **Ângulo (°)** |
| Alinhar uma face a outra face ou plano | **Face a mover** (uma face plana do corpo), **Sobre** (uma face plana ou um plano) |

Alinhar vira o corpo para que a face dele fique sobre a outra face, face a face, e depois o desliza apenas ao longo da normal dessa face. **Mesmo sentido** o vira no outro sentido. **Copiar** mantém o original e adiciona a cópia movida como um novo corpo.

## Escalar um corpo

1. Escolha {{ui:Mais}}, depois {{ui:Escalar corpo}}, e marque os corpos.
2. Digite uma **Escala**, ou desmarque **Uniforme** e digite **Escala X**, **Escala Y** e **Escala Z** (ao longo dos eixos do mundo).
3. **Em torno de** é o ponto que permanece fixo: o centro da caixa dos corpos, ou um ponto que você escolher.

Uma escala uniforme é exata. Uma escala não uniforme transforma círculos em elipses: um cilindro vira um cilindro elíptico, que nenhuma superfície analítica representa, então as faces curvas se tornam superfícies B-spline que ficam a até 0.0000004 mm da forma exata; faces planas e arestas retas continuam exatas. O painel informa o que aconteceu. Os fatores de escala devem ser maiores que zero (para espelhar, use {{ui:Espelhar}}).

## Copiar ao longo de um caminho

1. Selecione o recurso a copiar no histórico, ou deixe nada selecionado para copiar o corpo mais recente.
2. Escolha {{ui:Mais}}, depois {{ui:Matriz por caminho}}. O esboço mais recente não usado é tomado como caminho.
3. No painel da direita, defina:

| Configuração | O que faz |
|---|---|
| **Copiar** | Corpos (cada cópia um novo corpo) ou Recursos (unidos ou cortados como o original) |
| **Caminho** | Marque esboços, ou **Escolher arestas do modelo**; as partes devem se unir ponta a ponta |
| **Contagem** | Número total, incluindo o original |
| **Espaçamento** | Igual (distribuído até o fim de um caminho aberto, ou por todo o contorno de um fechado) ou uma distância definida |
| **Orientação** | Seguir o caminho (cada cópia gira com ele) ou Fixa (as cópias ficam paralelas) |
| **Inverter sentido** | Percorre o caminho no sentido contrário |

As cópias começam onde o caminho passa mais perto do original e são espaçadas pelo comprimento ao longo da curva.

Matrizes linear e circular também podem copiar corpos: marque **Copiar corpos** no painel delas e escolha os corpos; cada cópia é um novo corpo.

## Limites

- Os corpos precisam do kernel exato; o kernel de malha mantém um sólido e informa isso.
- Uma escala não uniforme transforma faces curvas em aproximações B-spline próximas (veja acima), não em cilindros ou cones exatos; superfícies de deslocamento ainda não podem ser escaladas dessa forma.
- Seguir o caminho em uma curva 3D torcida leva a cópia sem torcê-la; em caminhos planos a volta é exata.
- Combinar funciona apenas com sólidos. Corpos de superfície são unidos com {{ui:Costurar}}.

Veja também [Planos, eixos e pontos de referência](topic:reference-geometry) para pontos e planos "entre objetos", e [Recursos de matriz e espelhamento](topic:patterns-mirror).
