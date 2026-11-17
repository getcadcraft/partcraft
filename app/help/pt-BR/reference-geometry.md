---
title: Planos, eixos e pontos de referência
summary: Crie planos deslocados de uma face, em ângulo, por três pontos, no meio, tangentes a um cilindro, perpendiculares a uma aresta ou por uma aresta e um ponto; eixos; pontos nos meios de arestas, cruzamentos e cantos de planos; esboce sobre eles e use-os como eixos de revolução, direções de matriz e planos de espelho.
keywords: referência, entre objetos, ponto médio, ponto de interseção, plano pela aresta e ponto, plano de referência, plano de trabalho, plano de construção, plano deslocado, plano em ângulo, plano médio, plano tangente, eixo de referência, eixo de construção, ponto de referência, ponto de trabalho, esboçar sobre plano
from: e7eb6fc1
---

A geometria de referência é o andaime sobre o qual você constrói os recursos: um **plano** para esboçar onde não há face, um **eixo** para revolucionar ou criar padrões em torno dele, um **ponto** para parar uma extrusão. Ela não tem material próprio. Planos aparecem na vista como quadrados claros, eixos como linhas tracejadas, pontos como pequenas cruzes; os três entram no histórico e acompanham o que os originou quando você altera uma medida anterior.

Eles estão no menu {{ui:Mais}} do grupo Recursos: {{ui:Plano}}, {{ui:Eixo}}, {{ui:Ponto}}.

## Criar um plano

1. Clique em uma face plana, ou em um plano base no histórico, para começar a partir dele (opcional).
2. Escolha {{ui:Mais}} e depois {{ui:Plano}}. Ele começa como um plano deslocado de 20 % do tamanho da peça em relação ao que você escolheu (ou ao plano superior).
3. No painel direito, escolha o **Tipo** e suas referências:

| Tipo | Referências | Números |
|---|---|---|
| Deslocado de um plano ou face | **Do plano** | **Distância (mm)**, negativa para o outro lado |
| Em ângulo, por uma aresta ou eixo | **Do plano**, **Girar em torno de** (um eixo do mundo, um recurso de eixo ou uma aresta reta escolhida) | **Ângulo (°)** |
| Por três pontos | **Ponto 1**, **Ponto 2**, **Ponto 3** | — |
| Plano médio entre dois | **Primeiro plano**, **Segundo plano** (paralelos: a meio caminho; concorrentes: o plano que divide o ângulo ao meio) | — |
| Tangente a um cilindro | **Cilindro** (uma face cilíndrica), **Ponto próximo** (de que lado) | — |
| Perpendicular a uma aresta, em um ponto | **Aresta**, **No ponto** (o plano passa pelo ponto da aresta mais próximo dele, e pelo ponto também) | — |
| Por uma aresta e um ponto | **Aresta reta** (ou um eixo), **Pelo ponto** | — |
| Perpendicular a uma aresta no seu meio | **Aresta** (a meio caminho ao longo dela, perpendicular ali), ou, sem aresta, **Ponto 1** e **Ponto 2** (o plano a meio caminho entre eles) | — |

Cada referência tem um botão **Selecionar**: escolha-o e clique na vista. Um espaço de plano aceita um plano base, um plano de referência ou uma face plana; um espaço de ponto aceita a extremidade de uma aresta (clique perto dessa extremidade), um recurso de ponto ou um local em uma face; um espaço de aresta aceita uma aresta. {{key:Esc}} cancela uma seleção. **Inverter a normal** vira o plano (de que lado um esboço nele fica voltado).

Nesta versão, um espaço que precisa de uma aresta ou de uma face cilíndrica (Tangente a um cilindro e os espaços de Aresta) responde "ainda não implementado": use pontos ou um eixo.

## Esboçar sobre um plano

Selecione o plano (no histórico ou clicando no seu quadrado na vista) e escolha {{ui:Esboço}}, ou **Esboçar sobre ele** no painel dele. O esboço segue o plano: se você alterar a distância do plano, o esboço e todos os recursos nele também se movem.

## Eixos e pontos

- {{ui:Eixo}}: por dois pontos, o eixo de um cilindro ou cone, onde dois planos se encontram, ao longo de uma aresta reta (ou o eixo de uma aresta circular), ou perpendicular a uma face por um ponto.
- {{ui:Ponto}}: em coordenadas, em um vértice ou ponto de esboço, ou no centro de uma aresta circular, além dos pontos "entre objetos":

| Tipo de ponto | Referências |
|---|---|
| Meio de uma aresta (ou entre dois pontos) | **Aresta** (a meio caminho do seu comprimento, também para arcos e curvas), ou, sem aresta, **Ponto 1** e **Ponto 2** |
| Onde uma aresta ou eixo encontra uma face ou plano | **Aresta** (reta ou curva) ou um eixo, e **Encontra o plano** (um plano ou face plana) ou **Ou uma face** (uma face plana ou um cilindro). Um círculo cruza um plano duas vezes, e uma linha atravessa um cilindro duas vezes: **O outro cruzamento** escolhe o segundo |
| Onde três planos se encontram | **Primeiro**, **Segundo** e **Terceiro plano** (planos ou faces planas) |

Cada um falha com uma mensagem simples quando suas referências não se encaixam: uma linha paralela ao plano, uma linha que não atinge o cilindro, uma aresta que não alcança o plano, três planos que não se encontram em um único ponto, um ponto sobre a linha que deveria fixar um plano.

Use-os em outros recursos:

| Onde | Como |
|---|---|
| Revolução | **Eixo**: escolha o recurso de eixo na lista (ele deve estar no plano do esboço) |
| Matriz circular | **Eixo**: o recurso de eixo |
| Matriz linear | **Direção**: um recurso de eixo, ou um plano (sua normal) |
| Espelhar | **Plano de espelho**: um plano de referência |
| Extrusão | **Fim**: Até face ou plano, Até vértice (um recurso de ponto). Ainda não implementado nesta versão (precisa de um núcleo exato) |
| Ângulo de saída | **Plano neutro** |

## Quando uma referência desaparece

Um plano feito de uma face que não existe mais falha com uma mensagem que a nomeia, como "A face em que ele se apoia não existe mais em Extrude1." Ele nunca é movido para outra face. Os esboços e recursos nele são marcados como "não construídos" até que você escolha uma nova referência; o restante da peça permanece como estava.

:::note
Esta versão constrói todas as peças com o núcleo de malha, que cria planos, eixos e pontos a partir de planos base, faces planas criadas por uma Extrusão ou Revolução, pontos de esboço, coordenadas e outros recursos de referência. Qualquer coisa que precise de uma aresta, da extremidade de uma aresta ou de uma face curva precisa de um núcleo exato: ainda não implementado nesta versão ("Usa uma face ou aresta do sólido, que só um núcleo exato consegue encontrar: ainda não implementado nesta versão.").
:::
