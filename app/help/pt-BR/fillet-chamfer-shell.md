---
title: Arredondar, chanfrar e esvaziar com Arredondamento, Chanfro e Casca
summary: Selecione arestas e adicione arredondamentos de raio constante ou variável e chanfros de distância igual, de duas distâncias ou de distância e ângulo; esvazie uma peça com Casca selecionando as faces a abrir, altere quais arestas ou faces um recurso usa e corrija as falhas comuns.
keywords: arredondamento, arredondar, mesclagem, chanfro, chanfrar, casca, esvaziar, espessura da parede, arestas, faces, selecionar arestas, shift clique, face aberta, kernel exato, kernel de malha, não implementado
from: e41c1c12
---

:::note
**Nesta versão** o PartCraft constrói arredondamentos e chanfros com o kernel de malha, somente em **arestas retas entre duas faces planas**: arestas de caixas e as arestas retas de extrusões e cortes, em cantos externos ou internos (um canto interno recebe material). Bordas redondas, como as bordas de furos, e um raio que muda ao longo da aresta ainda não são implementados. Onde duas arestas arredondadas se encontram em um canto, os arredondamentos são unidos em meia-esquadria (formam uma quina viva), não mesclados. **Casca** também funciona, construída pelo kernel de malha: abre somente faces planas, cascas com espessuras de parede diferentes ainda não são implementadas, e é lenta em peças com muitas faces redondas. Veja [O que ainda não foi implementado](topic:not-built-yet).
:::

{{ui:Arredondamento}} arredonda arestas, {{ui:Chanfro}} as chanfra e {{ui:Casca}} esvazia a peça. Os três trabalham nas arestas e faces do sólido e são construídos pelo kernel de malha. Suas curvas são facetadas como toda face redonda (**Curvas** define o quão fina é); as faces redondas são cilindros que você pode selecionar e medir (veja [O kernel de malha](topic:solid-kernels)).

## Arredondar ou chanfrar arestas

### Selecione as arestas primeiro

1. Clique em uma aresta da peça. A aresta inteira fica destacada, e o painel direito mostra **Aresta**: seu tipo (Reta, Círculo ou arco, Curva), comprimento e as faces entre as quais ela está.
2. Para adicionar mais arestas, use {{key:Shift}}+clique nelas. Cada uma fica marcada; use {{key:Shift}}+clique em uma aresta marcada para retirá-la. O título do painel as conta ("4 arestas") e a barra de status diz "4 arestas selecionadas. Arredondamento ou Chanfro as arredonda; Shift+clique seleciona mais, Esc limpa."
3. Escolha {{ui:Arredondamento}} ou {{ui:Chanfro}} na barra de ferramentas, ou os mesmos botões no painel direito.

O recurso é adicionado com todas as arestas selecionadas: um arredondamento de 2 mm, ou um chanfro de 1 mm. A barra de status diz, por exemplo, "Fillet1 adicionado (4 arestas). Altere o tamanho à direita; Selecionar arestas altera quais."

### Ou adicione o recurso primeiro

1. Sem nada selecionado, escolha {{ui:Arredondamento}} ou {{ui:Chanfro}}.
2. O PartCraft entra no modo de seleção: o título do painel direito diz "Fillet1: selecionando", a peça aparece como estava antes do arredondamento (o painel informa isso), e a barra de ferramentas mostra {{ui:Concluir}}.
3. Clique em cada aresta para adicioná-la; clique de novo para retirá-la. A barra de status as conta.
4. Escolha {{ui:Concluir}} (ou {{ui:Concluir seleção}} no painel), ou pressione {{key:Esc}} ou {{key:Enter}}.

### Configurações

| Configuração | Arredondamento | Chanfro |
|---|---|---|
| Tamanho | **Raio (mm)**, padrão 2 | **Distância (mm)** a partir da aresta nas duas faces, padrão 1 |
| **Arestas** | Quantas | Quantas |

A lista abaixo nomeia cada aresta pelas duas faces que ela une, como "Aresta 1: Extrude1 end face × Extrude1 side". **Remover** retira uma. {{ui:Selecionar arestas}} volta ao modo de seleção. Clicar duas vezes no recurso no histórico faz o mesmo.

As arestas são lembradas pelas duas faces que unem, então continuam na aresta certa quando você altera uma cota anterior no histórico.

### Arredondamentos variáveis e tipos de chanfro

- **Raio variável** (arredondamento): ainda não implementado nesta versão ("Um arredondamento cujo raio muda ao longo da aresta: ainda não implementado (precisa de um kernel exato). Defina um único raio."). Com um kernel exato: marque a opção e defina o **Raio final (mm)**. O raio muda linearmente do **Raio** em uma extremidade de cada aresta até o **Raio final** na outra; **Trocar as extremidades** inverte isso.
- **Tipo** (chanfro): **Distância igual**, **Duas distâncias** (uma **Segunda distância** na outra face) ou **Distância e ângulo** (a distância em uma face, o chanfro no **Ângulo (°)** em relação a essa face). **Inverter lados** coloca a primeira distância na outra face.

## Criar uma casca na peça

1. Clique na face plana que deve ficar aberta, por exemplo a tampa de uma caixa. Ou use {{key:Shift}}+clique em várias faces.
2. Escolha {{ui:Casca}} na barra de ferramentas, ou {{ui:Casca, abrindo esta face}} no painel da face.

A peça vira uma parede de 2 mm com as faces selecionadas abertas. Configurações:

| Configuração | O que faz | Padrão |
|---|---|---|
| **Parede (mm)** | A espessura da parede | 2 |
| **Paredes crescem para fora (as faces ficam por dentro)** | Marcado: as paredes são acrescentadas por fora, então o interior mantém o tamanho da peça | Desligado: as paredes vão para dentro e o exterior mantém seu tamanho |
| **Faces abertas** | Quantas faces são removidas | (vazio) |

Para dentro, as paredes têm exatamente a espessura da parede: cantos externos continuam vivos, cantos internos ficam arredondados (raio = a parede), e um furo que atravessa a peça ganha um tubo de parede ao redor. Para fora, as paredes são acrescentadas por fora da superfície original, que passa a ser o oco, e as arestas externas ficam arredondadas. As faces internas recebem o nome das faces de que são deslocadas, então você pode selecioná-las.

Só faces planas podem ser abertas: selecionar uma curva exibe "Casca: nesta versão, ela abre apenas faces planas (o kernel de malha a constrói)." Uma casca é lenta em peças com muitas faces redondas (vários segundos por mil triângulos): use uma configuração de **Curvas** mais grossa enquanto projeta.

{{ui:Selecionar faces}} altera quais faces ficam abertas, do mesmo modo que selecionar arestas. A lista nomeia cada uma, como "Face 1: Extrude1 end face". Não é permitida uma casca sem faces abertas: "Selecione as faces a remover (abertas) e depois crie a casca."

## A ordem importa

Os recursos são construídos de cima para baixo. Um arredondamento antes de uma casca é esvaziado junto com a peça, então o interior também recebe cantos arredondados. Um arredondamento depois de uma casca arredonda somente as arestas que você selecionar. Mova recursos com {{ui:Mover para cima}} e {{ui:Mover para baixo}} (veja [Alterar uma peça pelo seu histórico](topic:edit-history)).

Padrões e espelhos não podem copiar um arredondamento, chanfro ou casca: "Fillet1 altera as arestas ou paredes do corpo; ele não pode ser copiado. Copie os recursos que criam sólidos (extrusões, revoluções, furos, importações)." Faça o padrão dos furos ou cortes primeiro, depois arredonde as arestas de todas as cópias em um único arredondamento.

## Quando falha

| Mensagem | O que fazer |
|---|---|
| "Um arredondamento de 5 mm não cabe aqui (é grande demais para uma face ao lado de uma das arestas, ou as arestas se encontram em um canto que o kernel não consegue mesclar)." | Use um raio menor, ou arredonde menos arestas por vez (vários recursos de arredondamento, o menor por último) |
| "Uma aresta que ele arredonda desapareceu: a aresta entre Extrude1 e Cut2." | Uma alteração anterior removeu essa aresta. Escolha {{ui:Selecionar arestas}}, remova a aresta vermelha e selecione a nova |
| "A casca não pôde ser criada com esta espessura (…)." | A parede é mais grossa que uma parte estreita do modelo, ou que o raio de um arredondamento. Deixe a parede mais fina, ou os arredondamentos maiores que a parede |
| "Essa face não tem um nome que o histórico consiga seguir; selecione outra." | Selecione uma face criada por um recurso (a maioria das faces é assim) |
| "Arredondamento: nesta versão, só arestas retas entre duas faces planas (o kernel de malha as constrói). Arredonde ou chanfre as arestas curvas no esboço." (também Chanfro) | Uma aresta selecionada é redonda, como a borda de um furo, ou está em uma face curva. Remova-a com {{ui:Selecionar arestas}} e arredonde ou chanfre esse canto no esboço |
| "Um arredondamento cujo raio muda ao longo da aresta: ainda não implementado (precisa de um kernel exato). Defina um único raio." | Desmarque **Raio variável** |
| "Arredondamento pelo kernel de malha: onde arestas arredondadas se encontram, elas são unidas em meia-esquadria, não mescladas." (⚠ no histórico) | Um aviso, não um erro: a peça é construída. As arestas selecionadas se encontram em um canto, e os arredondamentos se unem ali em uma quina viva. Arredonde menos arestas, ou aceite a quina |
| "Casca: nesta versão, ela abre apenas faces planas (o kernel de malha a constrói)." | Uma face aberta é curva. Use {{ui:Selecionar faces}} e remova-a; abra somente faces planas |

## Limites

Nesta versão, arredondamentos e chanfros funcionam somente em arestas retas entre duas faces planas, com um único raio, e arredondamentos que se encontram em um canto são unidos em meia-esquadria. Cascas abrem apenas faces planas. Com um kernel exato, um arredondamento variável muda linearmente ao longo de cada aresta (uma lei por recurso; sem raio definido em pontos ao longo dela). Arredondamentos de face, arredondamentos de volta completa e cascas com espessuras de parede diferentes ainda não são implementados.
