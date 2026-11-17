---
title: Arredondar, chanfrar e ocar com Boleado, Chanfre e Casca
summary: Escolha arestas e acrescente boleados de raio constante ou variável e chanfres de distância igual, de duas distâncias ou de distância e ângulo; ocar uma peça com Casca, escolhendo as faces a abrir; altere que arestas ou faces uma operação usa, e corrija as falhas habituais.
keywords: boleado, arredondar, mistura, chanfre, chanfrar, casca, ocar, espessura da parede, arestas, faces, escolher arestas, Shift+clique, face aberta, kernel exato, kernel de malha, não implementado
from: e41c1c12
---

:::note
**Nesta versão** o PartCraft constrói boleados e chanfres com o kernel de malha, apenas em **arestas retas entre duas faces planas**: arestas de caixas e as arestas retas de extrusões e cortes, em cantos exteriores ou interiores (um canto interior acrescenta material). Arestas redondas, como os rebordos de furos, e um raio que muda ao longo da aresta ainda não são construídos. Onde duas arestas arredondadas se encontram num canto, os arredondamentos ficam em meia-esquadria (encontram-se numa vinca viva), não suavizados. **Casca** também funciona, construída pelo kernel de malha: só abre faces planas, cascas com espessuras de parede diferentes ainda não são construídas, e é lenta em peças com muitas faces redondas. Veja [O que ainda não está implementado](topic:not-built-yet).
:::

{{ui:Boleado}} arredonda arestas, {{ui:Chanfre}} chanfra-as e {{ui:Casca}} oca a peça. Os três atuam sobre as arestas e faces do sólido e são construídos pelo kernel de malha. Os seus arredondamentos são facetados como todas as faces redondas (**Curvas** define o grau de finura); as faces redondas são cilindros que pode escolher e medir (veja [O kernel de malha](topic:solid-kernels)).

## Boleado ou chanfre de arestas

### Escolher primeiro as arestas

1. Clique numa aresta da peça. A aresta inteira fica realçada, e o painel da direita diz **Aresta**: o seu tipo (Reta, Círculo ou arco, Curva), o comprimento e as faces entre as quais está.
2. Para acrescentar mais arestas, faça {{key:Shift}}+clique nelas. Cada uma fica marcada; faça {{key:Shift}}+clique numa aresta marcada para a retirar. O cabeçalho do painel conta-as ("4 arestas") e a barra de estado diz "4 arestas escolhidas. Boleado ou Chanfre arredonda-as; Shift+clique escolhe mais, Esc limpa."
3. Escolha {{ui:Boleado}} ou {{ui:Chanfre}} na barra de ferramentas, ou os mesmos botões no painel da direita.

A operação é adicionada com todas as arestas escolhidas: um arredondamento de 2 mm, ou um chanfre de 1 mm. A barra de estado diz, por exemplo, "Boleado1 adicionado (4 arestas). Altere o seu tamanho à direita; Escolher arestas altera quais."

### Ou adicionar primeiro a operação

1. Sem nada escolhido, escolha {{ui:Boleado}} ou {{ui:Chanfre}}.
2. O PartCraft entra no modo de escolha: o cabeçalho do painel da direita diz "Boleado1: a escolher", a peça aparece como estava antes do boleado (o painel indica-o), e a barra de ferramentas mostra {{ui:Concluir}}.
3. Clique em cada aresta para a acrescentar; clique outra vez para a retirar. A barra de estado conta-as.
4. Escolha {{ui:Concluir}} (ou {{ui:Concluir escolha}} no painel), ou prima {{key:Esc}} ou {{key:Enter}}.

### Definições

| Definição | Boleado | Chanfre |
|---|---|---|
| Tamanho | **Raio (mm)**, predefinido 2 | **Distância (mm)** recuada a partir da aresta nas duas faces, predefinido 1 |
| **Arestas** | Quantas | Quantas |

A lista abaixo indica cada aresta pelas duas faces que une, como "Aresta 1: face final de Extrudir1 × lateral de Extrudir1". **Remover** retira uma. {{ui:Escolher arestas}} volta à escolha. Fazer duplo clique na operação no histórico faz o mesmo.

As arestas são lembradas pelas duas faces que unem, por isso continuam na aresta certa quando altera uma cota anterior no histórico.

### Boleados variáveis e tipos de chanfre

- **Raio variável** (boleado): ainda não implementado nesta versão ("Um boleado cujo raio muda ao longo da aresta: ainda não implementado (precisa de um kernel exato). Dê-lhe um só raio."). Com um kernel exato: marque e defina **Raio final (mm)**. O raio muda linearmente do **Raio** numa extremidade de cada aresta até **Raio final** na outra; **Trocar as extremidades** inverte.
- **Tipo** (chanfre): **Distância igual**, **Duas distâncias** (uma **Segunda distância** na outra face) ou **Distância e ângulo** (a distância numa face, o bisel no **Ângulo (°)** dessa face). **Inverter lados** coloca a primeira distância na outra face.

## Ocar uma peça com Casca

1. Clique na face plana a deixar aberta, por exemplo a face de cima de uma caixa. Ou faça {{key:Shift}}+clique em várias faces.
2. Escolha {{ui:Casca}} na barra de ferramentas, ou {{ui:Casca, a abrir esta face}} no painel da face.

A peça fica com uma parede de 2 mm, com as faces escolhidas abertas. Definições:

| Definição | O que faz | Predefinido |
|---|---|---|
| **Parede (mm)** | A espessura da parede | 2 |
| **As paredes crescem para fora (as faces ficam por dentro)** | Marcado: as paredes são acrescentadas por fora, por isso o interior mantém o tamanho da peça | Desligado: as paredes vão para dentro e o exterior mantém o seu tamanho |
| **Faces abertas** | Quantas faces são removidas | |

Para dentro, as paredes têm exatamente a espessura da parede: os cantos exteriores ficam vivos, os cantos interiores saem arredondados (raio = a parede), e um furo através da peça recebe um tubo de parede à sua volta. Para fora, as paredes são acrescentadas fora da superfície original, que passa a ser o oco, e as arestas exteriores saem arredondadas. As faces interiores têm o nome das faces que deslocam, por isso pode escolhê-las.

Só faces planas podem ser abertas: escolher uma curva indica "Casca: nesta versão abre apenas faces planas (o kernel de malha a constrói)." Uma casca é lenta em peças com muitas faces redondas (vários segundos por cada mil triângulos): use uma definição **Curvas** mais grosseira enquanto desenha.

{{ui:Escolher faces}} altera as faces abertas, do mesmo modo que escolher arestas. A lista indica cada uma, como "Face 1: face final de Extrudir1". Uma casca sem faces abertas não é permitida: "Escolha as faces a remover (abertas) e só então aplique a casca."

## A ordem importa

As operações constroem-se de cima para baixo. Um boleado antes de uma casca é aplicado com a peça, por isso o interior também fica com cantos arredondados. Um boleado depois de uma casca arredonda apenas as arestas que escolher. Mova as operações com {{ui:Mover para cima}} e {{ui:Mover para baixo}} (veja [Alterar uma peça através do seu histórico](topic:edit-history)).

Matrizes e espelhos não podem copiar um boleado, chanfre ou casca: "Boleado1 altera as arestas ou paredes do corpo; não pode ser copiado. Copie as operações que criam sólidos (extrusões, revoluções, furos, importações)." Crie primeiro a matriz dos furos ou cortes e depois arredonde, de uma só vez, as arestas de todas as cópias num só boleado.

## Quando falha

| Mensagem | O que fazer |
|---|---|
| "Um arredondamento de 5 mm não cabe aqui (é demasiado grande para uma face junto a uma das arestas, ou as arestas se encontram num canto que o kernel não consegue suavizar)." | Use um raio menor, ou arredonde menos arestas de cada vez (várias operações de boleado, a mais pequena por último) |
| "Uma aresta que arredonda desapareceu: a aresta entre Extrudir1 e Cortar2." | Uma alteração anterior eliminou essa aresta. Escolha {{ui:Escolher arestas}}, retire a aresta a vermelho e escolha a nova |
| "A casca não pôde ser feita com esta espessura (…)." | A parede é mais grossa do que uma zona estreita do modelo, ou do que o raio de um boleado. Torne a parede mais fina, ou os boleados maiores do que a parede |
| "Essa face não tem nome que o histórico consiga seguir; escolha outra." | Escolha uma face criada por uma operação (a maioria das faces) |
| "Boleado: nesta versão apenas arestas retas entre duas faces planas (o kernel de malha as constrói). Arredonde ou chanfre as arestas curvas no esboço." (também Chanfre) | Uma aresta escolhida é redonda, como um rebordo de furo, ou está numa face curva. Retire-a com {{ui:Escolher arestas}}, e arredonde ou chanfre esse canto no esboço |
| "Um boleado cujo raio muda ao longo da aresta: ainda não implementado (precisa de um kernel exato). Dê-lhe um só raio." | Desmarque **Raio variável** |
| "Boleado pelo kernel de malha: onde as arestas arredondadas se encontram, ficam em meia-esquadria, não suavizadas." (⚠ no histórico) | Um aviso, não um erro: a peça é construída. As arestas escolhidas encontram-se num canto, e os arredondamentos juntam-se aí numa vinca viva. Arredonde menos arestas, ou aceite a vinca |
| "Casca: nesta versão abre apenas faces planas (o kernel de malha a constrói)." | Uma face aberta é curva. Use {{ui:Escolher faces}} e retire-a; abra apenas faces planas |

## Limites

Nesta versão, boleados e chanfres funcionam apenas em arestas retas entre duas faces planas, com um raio, e os arredondamentos que se encontram num canto ficam em meia-esquadria. As cascas abrem apenas faces planas. Com um kernel exato, um boleado variável muda linearmente ao longo de cada aresta (uma lei por operação; sem raio definido em pontos ao longo dela). Boleados de faces, boleados completos e cascas com espessuras de parede diferentes ainda não são construídos.
