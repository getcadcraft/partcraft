---
title: Varredura, loft e ângulo de saída
summary: Faça a varredura de um perfil fechado ao longo de um caminho de curvas de esboço ou arestas do modelo, faça loft através de seções em planos diferentes e adicione ângulo de saída às faces; com as opções, os resultados exatos e as mensagens.
keywords: varredura, saliência varrida, corte varrido, tubo, caminho, loft, saliência em loft, mesclar seções, regrado, ângulo de saída, afunilar faces, plano neutro, direção de desmoldagem, molde
from: 9d637981
---

:::note
**Nesta versão** varredura e loft ainda não estão implementados: eles precisam de um kernel de geometria exato, que esta versão do PartCraft não tem. [O que ainda não está implementado](topic:not-built-yet) explica o que fazer em vez disso; as seções Varredura e Loft descrevem como eles funcionam com um kernel exato. **Saída** funciona em faces planas: o kernel de malha a constrói, com o mesmo resultado que um kernel exato daria.
:::

Os três estão no menu {{ui:Mais}} do grupo Recursos (veja [O kernel de malha](topic:solid-kernels)). Cada um pode unir material, cortá-lo, manter apenas a sobreposição (**Interseção**) ou criar um **Novo corpo** (varredura e loft: **Operação** no painel).

## Varredura

Uma varredura move um perfil fechado ao longo de um caminho: tubos, alças, molas de arame, trilhos.

1. Desenhe o **caminho** em um esboço: linhas e arcos unidos ponta a ponta (ou use arestas do modelo, abaixo).
2. Desenhe o **perfil** em outro esboço cujo plano passe por uma extremidade do caminho, por exemplo um círculo no plano superior no início de um caminho desenhado no plano frontal.
3. Selecione o esboço do perfil e escolha {{ui:Mais}}, depois {{ui:Varredura}}. O esboço diferente mais recente se torna o caminho.

No painel:

| Configuração | O que faz |
|---|---|
| **Caminho** | Marque os esboços que formam o caminho (vários esboços se unem ponta a ponta em um caminho 3D); **Selecionar arestas do modelo** adiciona arestas da peça |
| **Orientação** | Seguir o caminho (padrão), Frenet, Fixa (as seções permanecem paralelas ao perfil), Manter uma direção, Ao longo de uma curva-guia |
| **Escala final** | O perfil cresce ou diminui linearmente até este tamanho no fim (1 = constante) |

Cantos vivos no caminho são emendados em meia esquadria. Um círculo de raio 5 varrido ao longo de uma linha de 100 mm é um cilindro de exatamente 2500π mm³; ao longo de um quarto de arco de raio 50, um quarto de toro de 625π² mm³.

## Loft

Um loft mescla duas ou mais seções em planos diferentes.

1. Desenhe cada seção no seu próprio esboço (um contorno fechado cada), sobre planos de base, planos de referência (veja [Planos, eixos e pontos de referência](topic:reference-geometry)) ou faces.
2. Escolha {{ui:Mais}}, depois {{ui:Loft}}. Cada esboço de um único contorno não usado se torna uma seção, na ordem do histórico.

O painel lista as seções em ordem (**Subir** reordena, **Remover** descarta uma); **Adicionar um esboço** adiciona outro, **Selecionar uma face** adiciona uma face plana da peça. **Regrado** cria faces planas entre seções em vez de uma mescla suave. Entre dois quadrados, ambos são o mesmo tronco de pirâmide (um quadrado de 40 mm para um de 20 mm ao longo de 30 mm: exatamente 28000 mm³).

Seções com números diferentes de lados (um quadrado para um triângulo) são casadas pelo OpenCascade, que pode torcer as faces laterais; a função avisa você. Desenhe seções com o mesmo número de lados, começando de cantos correspondentes, para o resultado mais limpo.

### Trilhos-guia

Trilhos-guia são curvas que as laterais do loft devem seguir da primeira seção até a última, para um abaulamento, uma cintura ou um alargamento que você desenha.

1. Desenhe dois ou mais trilhos: curvas abertas (linhas, arcos, splines) que vão da primeira seção até a última e cruzam cada seção uma vez. Um esboço pode conter vários trilhos: cada cadeia separada nele é seu próprio trilho. Desenhe um trilho de modo que ele realmente encontre cada seção: prenda suas extremidades aos pontos das seções.
2. No painel Loft, em **Trilhos-guia**, marque os esboços que os contêm, ou clique em {{ui:Selecionar arestas do modelo como trilhos}} e clique nas arestas da peça (Esc encerra).

Com trilhos, o loft é uma superfície de Gordon através das seções e dos trilhos (veja [Superfícies através de uma rede de curvas](topic:gordon-surfaces)), fechada com faces planas nas duas extremidades para formar um sólido. O painel informa quão de perto ela os segue. Cada seção deve então ser um esboço (um ponto ou uma face não pode receber um trilho), e **Regrado** não se aplica. Um trilho que erra uma seção por mais de 0.01 mm é recusado, com a diferença.

Verificado: dois círculos (20 mm e 10 mm de diâmetro, distantes 40 mm) com quatro trilhos retos dão o volume do tronco de cone com erro menor que 0.000002 %; arcos que abaulam 5 mm dão um barril que segue cada trilho com erro menor que 0.00001 mm.

## Saída

O ângulo de saída inclina faces para que uma peça saia de um molde.

1. Escolha {{ui:Mais}}, depois {{ui:Saída}} (ou primeiro {{key:Shift}}+clique nas faces). Sem nada selecionado você está no modo de seleção: clique em cada face a inclinar e depois em {{ui:Concluir}}.
2. Defina **Ângulo (°)**, o **Plano neutro** (onde as faces mantêm seu tamanho) e a **Direção de desmoldagem** (a normal do plano neutro por padrão).

Um ângulo positivo inclina a face para dentro, ao longo da direção de desmoldagem, e remove material; um negativo o adiciona. O plano neutro começa como o plano Superior. Nesta versão só faces planas podem receber ângulo de saída: um cilindro, cone ou face de forma livre exibe "Saída: nesta versão, apenas faces planas (o kernel de malha a constrói)." Os quatro lados de um bloco de 100 × 100 × 50 com saída de 5° em torno da base tornam-se um tronco de pirâmide de exatamente h/3·(a² + b² + ab), com b = a − 2h·tan 5°.

## Mensagens

| Mensagem | O que fazer |
|---|---|
| "O plano do perfil precisa passar por uma extremidade do caminho …" | Mova o esboço do perfil para o início (ou fim) do caminho |
| "O caminho tem uma falha: suas curvas não se unem ponta a ponta …" | Una as curvas do caminho; em esboços separados suas extremidades devem coincidir exatamente |
| "Uma seção de loft precisa de exatamente um contorno fechado" | Divida o esboço ou remova o contorno extra |
| "… não pode receber saída em torno deste plano neutro …" | A face é paralela ao plano neutro ou não o encontra |
| "Saída: nesta versão, apenas faces planas (o kernel de malha a constrói)." | Uma face selecionada é curva. Remova-a; aplique saída apenas a faces planas |

:::note
Ainda não implementado: varreduras torcidas, varreduras de paredes finas e de superfície, trilhos-guia de loft e tangência na extremidade, saída em cilindros, cones e faces de forma livre.
:::
