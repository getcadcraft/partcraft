---
title: Planos, eixos e pontos de referência
summary: Criar planos deslocados de uma face, com um ângulo, por três pontos, a meio caminho, tangentes a um cilindro, perpendiculares a uma aresta ou por uma aresta e um ponto; eixos; pontos a meio de arestas, em cruzamentos e em cantos de planos; esboçar sobre eles e usá-los como eixos de revolução, direções de matriz e planos de espelho.
keywords: datum, entre objetos, ponto médio, ponto de interseção, plano por aresta e ponto, plano de referência, plano de trabalho, plano de construção, plano datum, plano deslocado, plano com ângulo, plano médio, plano tangente, eixo de referência, eixo de construção, eixo datum, ponto de referência, ponto de trabalho, esboçar sobre plano
from: e7eb6fc1
---

A geometria de referência é a estrutura de apoio sobre a qual constrói as operações: um **plano** onde esboçar quando não existe nenhuma face, um **eixo** para criar uma revolução ou uma matriz em torno dele, um **ponto** onde parar uma extrusão. Não tem material próprio. Os planos aparecem na vista como quadrados claros, os eixos como linhas tracejadas e os pontos como pequenas cruzes; os três entram no histórico e seguem aquilo a partir do qual foram criados quando altera uma medida a montante.

Estão no menu {{ui:Mais}} do grupo Operações: {{ui:Plano}}, {{ui:Eixo}}, {{ui:Ponto}}.

## Criar um plano

1. Clique numa face plana, ou num plano base do histórico, para partir dele (opcional).
2. Escolha {{ui:Mais}} e depois {{ui:Plano}}. Começa como um plano deslocado a 20 % do tamanho da peça em relação ao que escolheu (ou em relação ao plano superior).
3. No painel da direita escolha o **Tipo** e as suas referências:

| Tipo | Referências | Valores |
|---|---|---|
| Deslocado de um plano ou face | **De plano** | **Distância (mm)**, negativa para o outro lado |
| Com um ângulo, por uma aresta ou eixo | **De plano**, **Rodar em torno de** (um eixo do mundo, uma operação de eixo ou uma aresta reta escolhida) | **Ângulo (°)** |
| Por três pontos | **Ponto 1**, **Ponto 2**, **Ponto 3** | — |
| Plano médio entre dois | **Primeiro plano**, **Segundo plano** (paralelos: a meio caminho; concorrentes: o plano que divide o ângulo ao meio) | — |
| Tangente a um cilindro | **Cilindro** (uma face cilíndrica), **Ponto próximo** (de que lado) | — |
| Perpendicular a uma aresta, num ponto | **Aresta**, **No ponto** (o plano passa pelo ponto da aresta mais próximo dele, e também pelo ponto) | — |
| Por uma aresta e um ponto | **Aresta reta** (ou um eixo), **Ponto de passagem** | — |
| Perpendicular a uma aresta no seu meio | **Aresta** (a meio dela, perpendicular aí), ou, sem aresta, **Ponto 1** e **Ponto 2** (o plano a meio caminho entre eles) | — |

Cada referência tem um botão **Escolher**: clique nele e depois na vista. Um campo de plano aceita um plano base, um plano de referência ou uma face plana; um campo de ponto aceita a extremidade de uma aresta (clique perto dessa extremidade), uma operação de ponto ou um sítio numa face; um campo de aresta aceita uma aresta. {{key:Esc}} cancela a escolha. **Inverter a normal** vira o plano ao contrário (o lado para onde fica virado um esboço nele).

Nesta versão, um campo que precisa de uma aresta ou de uma face cilíndrica (Tangente a um cilindro e os campos de Aresta) responde « ainda não implementado »: use antes pontos ou um eixo.

## Esboçar sobre um plano

Selecione o plano (no histórico ou clicando no seu quadrado na vista) e escolha {{ui:Esboço}}, ou **Esboçar sobre ele** no respetivo painel. O esboço acompanha o plano: se alterar a distância do plano, o esboço e todas as operações nele também se deslocam.

## Eixos e pontos

- {{ui:Eixo}}: por dois pontos, o eixo de um cilindro ou de um cone, onde dois planos se cruzam, ao longo de uma aresta reta (ou o eixo de uma aresta circular), ou perpendicular a uma face por um ponto.
- {{ui:Ponto}}: em coordenadas, num vértice ou ponto de esboço, ou no centro de uma aresta circular, além dos pontos « entre objetos »:

| Tipo de ponto | Referências |
|---|---|
| Meio de uma aresta (ou entre dois pontos) | **Aresta** (a meio do seu comprimento, também para arcos e curvas), ou, sem aresta, **Ponto 1** e **Ponto 2** |
| Onde uma aresta ou eixo encontra uma face ou plano | **Aresta** (reta ou curva) ou um eixo, e **Encontra o plano** (um plano ou face plana) ou **Ou uma face** (uma face plana ou um cilindro). Um círculo cruza um plano duas vezes e uma linha atravessa um cilindro duas vezes: **O outro cruzamento** escolhe o segundo |
| Onde três planos se encontram | **Primeiro**, **Segundo** e **Terceiro plano** (planos ou faces planas) |

Cada um falha com uma mensagem simples quando as referências não encaixam: uma linha paralela ao plano, uma linha que não toca o cilindro, uma aresta que não chega ao plano, três planos que não se encontram num só ponto, ou um ponto na linha com que devia fixar um plano.

Use-os noutras operações:

| Onde | Como |
|---|---|
| Revolução | **Eixo**: escolha a operação de eixo na lista (tem de estar no plano do esboço) |
| Matriz circular | **Eixo**: a operação de eixo |
| Matriz linear | **Direção**: uma operação de eixo, ou um plano (a sua normal) |
| Espelho | **Plano de espelho**: um plano de referência |
| Extrusão | **Fim**: Até face ou plano, Até vértice (uma operação de ponto). Ainda não implementado nesta versão (precisa de um núcleo exato) |
| Ângulo de saída | **Plano neutro** |

## Quando uma referência desaparece

Um plano feito a partir de uma face que já não existe falha com uma mensagem que a identifica, por exemplo: « A face em que assenta desapareceu de Extrude1. » Nunca é transferido para outra face. Os esboços e operações nele ficam marcados como « não construídos » até escolher uma nova referência; o resto da peça mantém-se como estava.

:::note
Nesta versão, todas as peças são construídas com o núcleo de malha, que cria planos, eixos e pontos a partir de planos base, faces planas criadas por uma Extrusão ou Revolução, pontos de esboço, coordenadas e outras operações de referência. Tudo o que precisa de uma aresta, da extremidade de uma aresta ou de uma face curva precisa de um núcleo exato: ainda não implementado nesta versão (« Usa uma face ou aresta do sólido, que só um núcleo exato consegue encontrar: ainda não implementado nesta versão. »).
:::
