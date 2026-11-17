---
title: Menus, teclas e rato
summary: Escolha um estilo de menu que corresponda à forma como já trabalha, atribua a qualquer comando uma tecla própria, mova comandos entre separadores do friso e defina o que a roda e cada botão do rato fazem na vista 3D.
keywords: estilo de menu, menus, friso, barra de ferramentas, árvore de operações, atalhos de teclado, teclas de atalho, teclas, personalizar, reatribuir, rato, roda, inverter, sentido do zoom, botão do meio, orbitar, deslocar, exportar, importar, alternar, familiar
from: 8445b06c
---

Os comandos do PartCraft são os mesmos, seja qual for o caminho para lá chegar. Um **estilo de menu** decide apenas onde ficam no ecrã, como se chamam ali e que teclas os executam. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador recorda-a.

## Os dois estilos

| Estilo | O que obtém |
|---|---|
| {{ui:PartCraft}} | A barra de ferramentas própria do PartCraft: o seletor de espaços de trabalho, Ficheiro, Esboço, Operações, Desenho, Montagem, Editar e Ver. Teclas {{key:S}} esboço, {{key:F}} ajustar, {{key:M}} medir, {{key:X}} vista de corte. O ponto de partida. |
| {{ui:Árvore de operações}} | Um friso organizado como os programas de CAD mecânico baseados em operações o organizam: um menu {{ui:Ficheiro}} (com todas as exportações), botões rápidos e os separadores {{ui:Operações}}, {{ui:Esboço}}, {{ui:Superfícies}}, {{ui:Avaliar}}, {{ui:Desenho}}, {{ui:Montagem}}, {{ui:Estudos}} (os espaços de trabalho e as suas ferramentas), {{ui:Ilustrar}} (as ferramentas manuais do espaço Ilustrar; as suas ferramentas passam primeiro para Ilustrar) e {{ui:Ver}}. {{ui:Operações}} começa com {{ui:Esboço}}, já que uma peça começa com um esboço. Teclas extra: {{key:E}} extrudir, {{key:H}} furo, e {{key:V}} seguido de uma letra para uma vista: {{key:V}} {{key:F}} frente, {{key:V}} {{key:B}} trás, {{key:V}} {{key:T}} topo, {{key:V}} {{key:O}} base, {{key:V}} {{key:R}} direita, {{key:V}} {{key:L}} esquerda, {{key:V}} {{key:I}} isométrica, {{key:V}} {{key:N}} normal a. Na vista 3D, o botão do meio orbita, {{key:Shift}} com o botão do meio desloca, o botão direito desloca e o botão esquerdo apenas escolhe. |

Todos os estilos mantêm {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} e {{key:Mod+A}}.

Uma ferramenta de outro espaço de trabalho muda primeiro para esse espaço; uma ferramenta de Projeto escolhida noutro espaço de trabalho volta primeiro ao Projeto. As ferramentas de esboço esperam por um esboço, as de desenho pela folha de desenho, as de montagem por uma montagem: a barra de estado indica o que fazer primeiro.

:::tip
Dentro de um esboço, na folha de desenho, numa montagem e nos outros espaços de trabalho, as letras mantêm lá o seu significado ({{key:L}} linha, {{key:R}} retângulo, {{key:J}} junta …) em todos os estilos. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre os seus. Uma tecla da disposição própria do PartCraft que o estilo escolhido atribuiu a outro comando não faz nada, e a barra de estado indica para onde foi o comando.
:::

## Personalizar

1. Escolha o estilo mais próximo do que pretende e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). Clique em {{ui:Adicionar uma tecla}} e prima a tecla, ou duas teclas seguidas. Clique numa tecla para a retirar.
3. No friso, {{ui:Onde fica}} move o comando para outro separador e painel, para o menu {{ui:Ficheiro}}, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda, os botões que deslocam um esboço, e o que cada botão faz na vista 3D.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria uma cópia própria («A minha árvore de operações»); o incorporado nunca muda. Uma tecla atribuída a dois comandos, ou uma que executaria antes de se poder escrever uma tecla de duas letras, aparece a vermelho e tem de ser corrigida antes de guardar.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o ponto de partida) ou {{ui:Rodar para cima afasta}}, e a rapidez. Uma pinça no trackpad faz sempre zoom no sentido em que os dedos se movem.
- **Deslocar o esboço com**: o botão do meio, o botão direito, ou ambos. Um clique com o botão direito num esboço continua a terminar o passo da ferramenta.
- **Arrastar na vista 3D**: {{ui:Próprio de cada vista}} mantém a definição do PartCraft ({{ui:Definições}} › {{ui:PartCraft}}: o botão esquerdo orbita, ou o botão do meio orbita). Ou defina cada botão para orbitar, deslocar, dar zoom ou nada; {{key:Shift}} com o botão de orbitar desloca. Um clique sem arrastar continua a escolher.

## Levar para outro computador

{{ui:Exportar}} guarda o estilo em uso como um pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, de outro computador ou de um colega. Um ficheiro importado só pode apontar para os comandos do próprio PartCraft: o que lá houver de outro tipo fica de fora e é contado na barra de estado. {{ui:Eliminar este estilo}} remove um estilo próprio.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}} sob os cartões de estilo faz com que todas as aplicações abram no estilo correspondente (a própria barra de ferramentas, ou um friso), com as alterações feitas em cada aplicação. Escolher outro estilo numa aplicação altera apenas essa aplicação.
:::

Relacionados: [Teclas e rato](topic:keyboard) · [Definições do PartCraft](topic:settings) · [Vindo de outro modelador paramétrico](topic:coming-from)
