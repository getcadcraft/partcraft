---
title: Varrimento, loft e ângulo de saída
summary: Varra um perfil fechado ao longo de um caminho de curvas de esboço ou arestas do modelo, faça um loft através de secções em planos diferentes e acrescente saída às faces; com as opções, os resultados exatos e as mensagens.
keywords: varrimento, saliência por varrimento, corte por varrimento, tubo, caminho, loft, saliência em loft, secções de mistura, regrado, ângulo de saída, saída, faces afuniladas, plano neutro, direção de extração, moldagem
from: 9d637981
---

:::note
**Nesta versão** o varrimento e o loft ainda não estão implementados: precisam de um núcleo de geometria exato, que esta versão do PartCraft não tem. [O que ainda não está implementado](topic:not-built-yet) diz o que fazer em vez disso; as secções Varrimento e Loft descrevem-nos tal como funcionam com um núcleo exato. **A saída funciona** em faces planas: o núcleo de malha constrói-a, com o mesmo resultado que um núcleo exato dá.
:::

Os três estão no menu {{ui:Mais}} do grupo Operações (ver [O núcleo de malha](topic:solid-kernels)). Cada um pode juntar material, cortá-lo, manter apenas a sobreposição (**Interseção**) ou criar um **Novo corpo** (varrimento e loft: **Operação** no painel).

## Varrimento

Um varrimento move um perfil fechado ao longo de um caminho: tubos, pegas, molas de arame, carris.

1. Desenhe o **caminho** num esboço: linhas e arcos unidos extremidade com extremidade (ou use arestas do modelo, abaixo).
2. Desenhe o **perfil** noutro esboço cujo plano passe por uma extremidade do caminho, por exemplo um círculo no plano superior, no início de um caminho desenhado no plano frontal.
3. Selecione o esboço do perfil e escolha {{ui:Mais}} e depois {{ui:Varrimento}}. O esboço mais recente, diferente, torna-se o caminho.

No painel:

| Definição | O que faz |
|---|---|
| **Caminho** | Marque os esboços que formam o caminho (vários esboços unem-se extremidade com extremidade num só caminho 3D); **Escolher arestas do modelo** acrescenta arestas da peça |
| **Orientação** | Seguir o caminho (predefinido), Frenet, Fixa (as secções mantêm-se paralelas ao perfil), Manter uma direção, Ao longo de uma curva-guia |
| **Escala final** | O perfil cresce ou diminui linearmente até este tamanho no fim (1 = constante) |

Os cantos vivos no caminho são cortados em meia-esquadria. Um círculo de raio 5 varrido ao longo de uma linha de 100 mm é um cilindro de exatamente 2500π mm³; ao longo de um quarto de arco de raio 50, um quarto de toro de 625π² mm³.

## Loft

Um loft mistura-se através de duas ou mais secções em planos diferentes.

1. Desenhe cada secção no seu próprio esboço (um contorno fechado cada), em planos de base, planos de referência (ver [Planos, eixos e pontos de referência](topic:reference-geometry)) ou faces.
2. Escolha {{ui:Mais}} e depois {{ui:Loft}}. Cada esboço de um só contorno que ainda não foi usado torna-se uma secção, pela ordem do histórico.

O painel lista as secções por ordem (**Subir** reordena, **Remover** retira uma); **Adicionar um esboço** acrescenta outro, **Escolher uma face** acrescenta uma face plana da peça. **Regrado** cria faces planas entre secções em vez de uma mistura suave. Entre dois quadrados, o resultado é o mesmo tronco (de um quadrado de 40 mm para um de 20 mm ao longo de 30 mm: exatamente 28000 mm³).

Secções com números de lados diferentes (um quadrado para um triângulo) são emparelhadas pelo OpenCascade, que pode torcer as faces laterais; a operação avisa. Desenhe secções com o mesmo número de lados, começando em cantos correspondentes, para o resultado mais limpo.

### Curvas-guia

As curvas-guia são curvas que as laterais do loft têm de seguir da primeira secção até à última, para uma abaulação, uma cintura ou um alargamento que desenhe.

1. Desenhe duas ou mais curvas-guia: curvas abertas (linhas, arcos, splines) que vão da primeira secção até à última e cruzam cada secção uma vez. Um esboço pode conter várias curvas: cada cadeia separada é a sua própria curva-guia. Desenhe uma curva-guia de modo a encontrar realmente cada secção: prenda as suas extremidades aos pontos das secções.
2. No painel do Loft, em **Curvas-guia**, marque os esboços que as contêm, ou clique em {{ui:Escolher arestas do modelo como curvas-guia}} e clique em arestas da peça ({{key:Esc}} termina).

Com curvas-guia, o loft é uma superfície Gordon através das secções e das curvas-guia (ver [Superfícies através de uma rede de curvas](topic:gordon-surfaces)), fechada planamente nas duas extremidades num sólido. O painel indica quão de perto as segue. Cada secção tem então de ser um esboço (um ponto ou uma face não pode receber uma curva-guia), e **Regrado** não se aplica. Uma curva-guia que falhe uma secção em mais de 0.01 mm é recusada, com a diferença indicada.

Verificado: duas circunferências (20 mm e 10 mm de diâmetro, com 40 mm entre elas) com quatro curvas-guia retas dão o volume do tronco de cone com um erro de 0.000002 %; arcos que abaulam 5 mm dão um barril que segue cada curva-guia dentro de 0.00001 mm.

## Saída

A saída inclina as faces para que uma peça saia de um molde.

1. Escolha {{ui:Mais}} e depois {{ui:Saída}} (ou primeiro {{key:Shift}}+clique nas faces). Sem nada escolhido, está em modo de escolha: clique em cada face a inclinar e depois em {{ui:Concluir}}.
2. Defina o **Ângulo (°)**, o **Plano neutro** (onde as faces mantêm o seu tamanho) e a **Direção de extração** (a normal do plano neutro, por predefinição).

Um ângulo positivo inclina a face para dentro, na direção de extração, e remove material; um negativo acrescenta-o. O plano neutro começa como o plano superior. Nesta versão só se pode aplicar saída a faces planas: um cilindro, um cone ou uma face de forma livre dá a mensagem «Saída: nesta versão, apenas faces planas (o núcleo de malha a constrói).». Os quatro lados de um bloco de 100 × 100 × 50 com saída de 5° em torno da base tornam-se um tronco de exatamente h/3·(a² + b² + ab), com b = a − 2h·tan 5°.

## Mensagens

| Mensagem | O que fazer |
|---|---|
| "O plano do perfil tem de passar por uma extremidade do caminho …" | Mova o esboço do perfil para o início (ou fim) do caminho |
| "O caminho tem uma falha: as suas curvas não se unem extremidade com extremidade …" | Una as curvas do caminho; em esboços separados, as extremidades têm de coincidir exatamente |
| "Uma secção de loft precisa de exatamente um contorno fechado" | Divida o esboço, ou elimine o contorno extra |
| "… não pode ter saída em relação a este plano neutro …" | A face é paralela ao plano neutro ou não o encontra |
| "Saída: nesta versão, apenas faces planas (o núcleo de malha a constrói)." | Uma face escolhida é curva. Remova-a; aplique saída apenas a faces planas |

:::note
Ainda não implementado: varrimentos torcidos, varrimentos de parede fina e de superfície, curvas-guia e tangência final do loft, saída em cilindros, cones e faces de forma livre.
:::
