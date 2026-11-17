---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que combine com o seu jeito de trabalhar, dê a qualquer comando a sua própria tecla, mova comandos entre as guias da faixa de opções e defina o que a roda e cada botão do mouse fazem na vista 3D.
keywords: estilo de menu, menus, faixa de opções, barra de ferramentas, árvore de recursos, atalhos de teclado, teclas de atalho, teclas, personalizar, redefinir, mouse, roda, inverter, direção do zoom, botão do meio, orbitar, pan, exportar, importar, trocar, familiar
from: 8445b06c
---

Os comandos do PartCraft são os mesmos, qualquer que seja o caminho por onde você os acessa. Um **estilo de menu** decide apenas onde eles ficam na tela, como são chamados ali e quais teclas os executam. Escolha um em {{ui:Settings}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}; a mudança é imediata, e este navegador a lembra.

## Os dois estilos

| Estilo | O que você obtém |
|---|---|
| {{ui:PartCraft}} | A barra de ferramentas própria do PartCraft: o seletor de área de trabalho, Arquivo, Esboço, Recursos, Desenho, Montagem, Editar e Exibir. Teclas {{key:S}} esboço, {{key:F}} ajustar, {{key:M}} medir, {{key:X}} vista de corte. O começo. |
| {{ui:Feature tree}} | Uma faixa de opções organizada como os programas de CAD mecânico baseado em recursos organizam as suas: um menu {{ui:File}} (com todas as exportações), botões rápidos e as guias {{ui:Features}}, {{ui:Sketch}}, {{ui:Surfaces}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (as áreas de trabalho e suas ferramentas), {{ui:Illustrate}} (as ferramentas manuais da área de trabalho Ilustrar; elas mudam para Ilustrar primeiro) e {{ui:View}}. {{ui:Features}} começa com {{ui:Sketch}}, já que uma peça começa com um esboço. Teclas extras: {{key:E}} extrusão, {{key:H}} furo, e {{key:V}} seguido de uma letra para uma vista: {{key:V}} {{key:F}} frente, {{key:V}} {{key:B}} trás, {{key:V}} {{key:T}} topo, {{key:V}} {{key:O}} base, {{key:V}} {{key:R}} direita, {{key:V}} {{key:L}} esquerda, {{key:V}} {{key:I}} isométrica, {{key:V}} {{key:N}} normal a. Na vista 3D, o botão do meio orbita, {{key:Shift}} com o botão do meio e o botão direito fazem pan, e o botão esquerdo apenas escolhe. |

Todo estilo mantém {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} e {{key:Mod+A}}.

Uma ferramenta de outra área de trabalho muda para ela primeiro; uma ferramenta de Projeto escolhida em outra área de trabalho volta primeiro para Projeto. Ferramentas de esboço esperam por um esboço, as de desenho pela folha de desenho, e as de montagem por uma montagem: a barra de status diz o que fazer primeiro.

:::tip
Dentro de um esboço, na folha de desenho, em uma montagem e nas outras áreas de trabalho, as letras mantêm o próprio significado ali ({{key:L}} linha, {{key:R}} retângulo, {{key:J}} junta …) em todos os estilos. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm os seus. Uma tecla do layout próprio do PartCraft que o seu estilo deu a outro comando não faz nada, e a barra de status diz para onde foi o seu comando.
:::

## Faça o seu próprio

1. Escolha o estilo mais próximo do que você quer, depois clique em {{ui:Customize…}}.
2. Em {{ui:Keys and menus}}, encontre um comando (a caixa de busca ajuda). {{ui:Add a key}} e pressione a tecla, ou duas teclas em sequência. Clique em uma tecla para removê-la.
3. Com a faixa de opções, {{ui:Where it sits}} move o comando para outra guia e painel, para o menu {{ui:File}}, ou para {{ui:Keys only}}.
4. Em {{ui:Mouse}}, defina a roda, os botões que fazem pan em um esboço e o que cada botão faz na vista 3D.
5. Dê um nome e clique em {{ui:Save}}.

Salvar um estilo embutido cria a sua própria cópia ("Minha Árvore de recursos"); o embutido nunca muda. Uma tecla dada a dois comandos, ou uma que impediria digitar uma tecla de duas letras, aparece em vermelho e precisa ser corrigida antes de salvar.

## Mouse

- **Roda do mouse**: {{ui:Scroll up zooms in}} (o começo) ou {{ui:Scroll up zooms out}}, e a velocidade. O pinça no trackpad sempre dá zoom no sentido em que os dedos se movem.
- **Pan no esboço com**: o botão do meio, o botão direito, ou ambos. Um clique com o botão direito em um esboço ainda encerra a etapa da ferramenta.
- **Arrastar na vista 3D**: {{ui:Próprio de cada vista}} mantém a configuração do PartCraft ({{ui:Settings}} › {{ui:PartCraft}}: o esquerdo orbita, ou o do meio orbita). Ou defina cada botão para orbitar, fazer pan, dar zoom ou nada; {{key:Shift}} com o botão de orbitar faz pan. Um clique sem arrastar ainda escolhe.

## Leve com você

{{ui:Export}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Import…}} adiciona um, vindo de outro computador ou de um colega. Um arquivo importado só pode apontar para os comandos do próprio PartCraft: o que for outro é deixado de fora e contado na barra de status. {{ui:Delete this style}} remove um estilo seu.

:::note
Estas configurações ficam neste navegador. {{ui:Use this style in every app}}, sob os cartões de estilo, faz com que todo app abra no estilo correspondente (a barra de ferramentas própria, ou uma faixa de opções), com as alterações feitas em cada app. Escolher outro estilo em um app muda apenas esse app.
:::

Relacionado: [Teclas e mouse](topic:keyboard) · [Configurações do PartCraft](topic:settings) · [Vindo de outro modelador paramétrico](topic:coming-from)
