---
title: Trackpad, toque e telas pequenas
summary: Como girar, deslocar e dar zoom com o trackpad de um Mac ou laptop, o que funciona em uma tela de toque e o que ainda precisa de teclado, e como a tela se reorganiza em um celular ou janela estreita.
keywords: trackpad, touchpad, magic mouse, mac, toque, tablet, ipad, celular, pinça, dois dedos, clique com o botão direito, clique secundário, gestos, tela pequena, móvel
from: 0e764fd8
---

O PartCraft é feito para um mouse com roda e botão do meio, mas um trackpad funciona bem depois que você conhece os gestos, e uma tela de toque serve para olhar peças e fazer esboços simples.

## Trackpad

:::mac
| Para | Faça isto |
|---|---|
| Girar a peça (3D) | Clique e arraste com um dedo (ou arraste com três dedos, se você ativou o arrastar com três dedos) |
| Deslocar (3D) | Segure {{key:Shift}} (ou ⌘) e clique e arraste, ou clique e arraste com dois dedos pressionados (um arrastar com clique secundário) |
| Girar a peça, deslizando | Deslize com dois dedos; com {{key:Shift}}, o deslize desloca. Precisa de **Rolagem** em "Detectar automaticamente" (o início) ou "Trackpad" |
| Zoom (3D e esboço) | Pinça. O zoom vai em direção ao ponteiro. Com **Rolagem** em "Roda do mouse", uma rolagem com dois dedos também faz zoom |
| Clique com o botão direito | Clique com dois dedos, ou {{key:Ctrl}}+clique |
| Deslocar em um esboço | Deslize com dois dedos ("Detectar automaticamente" ou "Trackpad"), ou clique e arraste com dois dedos pressionados. {{key:Shift}}+arrastar não desloca em um esboço (ele desenha uma janela de seleção) |
| Adicionar à seleção em um esboço | {{key:Shift}}+clique ou ⌘+clique |

Ative o clique secundário em **Ajustes do Sistema**, Trackpad, Apontar e clicar, se o clique com dois dedos não fizer nada.
:::

:::windows linux
| Para | Faça isto |
|---|---|
| Girar a peça (3D) | Pressione o touchpad (ou toque e segure) e arraste |
| Deslocar (3D) | Segure {{key:Shift}} ou {{key:Ctrl}} e arraste, ou arraste com a área do botão direito pressionada |
| Girar a peça, deslizando | Deslize com dois dedos; com {{key:Shift}}, o deslize desloca. Precisa de **Rolagem** em "Detectar automaticamente" (o início) ou "Trackpad" |
| Zoom (3D e esboço) | Pinça onde o touchpad oferecer suporte. O zoom vai em direção ao ponteiro. Com **Rolagem** em "Roda do mouse", uma rolagem com dois dedos faz zoom |
| Clique com o botão direito | Toque com dois dedos, ou no canto inferior direito do touchpad |
| Deslocar em um esboço | Deslize com dois dedos ("Detectar automaticamente" ou "Trackpad"), ou arraste com a área do botão direito pressionada. {{key:Shift}}+arrastar não desloca em um esboço |
| Adicionar à seleção em um esboço | {{key:Shift}}+clique ou {{key:Ctrl}}+clique |
:::

**Rolagem** está em [Configurações do PartCraft](topic:settings): "Detectar automaticamente" (o início) trata rolagem lateral ou fina como trackpad, "Trackpad" sempre faz isso, "Roda do mouse" nunca faz. Uma pinça dá zoom nos três.

As teclas de seta giram a vista 3D, e {{key:Shift}} com as setas desloca, depois que você clicou na vista: útil em um trackpad. {{key:Plus}} e {{key:Minus}} dão zoom.

## Telas de toque

O PartCraft lê entrada por toque, então tablets, laptops com toque e celulares funcionam, com limites.

:::touch
**Teclas de toque**

Quando você toca na tela, uma pequena barra aparece no canto inferior direito da vista com as teclas que o dedo não tem. Ela some quando você usa um mouse.

- {{ui:Esc}}: a tecla Esc. Cancela o que você começou ou volta um passo, exatamente como a tecla.
- {{ui:Adicionar}} (em um esboço, com Selecionar): enquanto está ligada, cada toque adiciona um item à seleção ou o retira, como {{key:Shift}}+clique. Toque de novo para voltar a um item por vez.
- {{ui:Concluir}} (enquanto você desenha uma cadeia de linhas, uma spline ou um polígono): finaliza, como um clique com o botão direito.

Manter o dedo parado por cerca de meio segundo faz o mesmo que um toque: com uma ferramenta de desenho, finaliza o que você desenha, e com Selecionar adiciona o item sob o dedo à seleção ou o retira. Pontos e linhas são mais fáceis de acertar com o dedo: o PartCraft procura cerca de duas vezes mais longe em torno de um toque do que em torno de um clique.

**Na vista 3D**

- Um dedo: gira a peça.
- Dois dedos: pinça para dar zoom, e afastá-los juntos para deslocar.
- Toque: seleciona uma face, uma aresta ou um plano. Não há destaque ao passar o ponteiro antes de tocar.

**Em um esboço**

- Toque com uma ferramenta de desenho para colocar cada ponto: toque no início, depois toque no fim. O encaixe acontece onde você tira o dedo.
- Dois dedos fazem pinça e deslocam. Colocar um segundo dedo cancela um arrasto que o primeiro começou.
- Para encerrar uma cadeia de linhas, toque em {{ui:Concluir}}, mantenha o dedo parado, ou toque em {{ui:Linha}} de novo (ou em outra ferramenta) na barra de ferramentas.
- Com Selecionar, toque para selecionar; arraste um ponto ou uma linha para movê-los; arraste em um espaço vazio para uma janela. Um segundo toque substitui a seleção, a menos que {{ui:Adicionar}} esteja ligado (ou você mantenha o dedo parado no segundo item).
- Para alterar uma cota, use **Editar** ao lado dela no painel direito.

**A folha de desenho**

Toque para colocar e selecionar símbolos, e arraste um símbolo para movê-lo. Faça pinça para dar zoom, mova dois dedos para deslocar, ou arraste um dedo sobre o papel vazio. Um segundo dedo interrompe um símbolo que você estava arrastando, e ele volta.

**O que ainda precisa de teclado**

- Digitar números: o teclado da tela aparece em caixas de número e campos de cota.
- Atalhos de teclado para ferramentas: use a barra de ferramentas.
:::

## Telas pequenas e celulares

- A partir de 1280 pixels de largura, a barra de ferramentas cabe em uma linha.
- Entre cerca de 760 e 1100 pixels, os painéis laterais ficam mais estreitos.
- Abaixo de cerca de 760 pixels (um celular, ou uma janela estreita), a tela se empilha: barra de ferramentas (deslize-a para o lado para mais botões), a vista 3D, a barra de status, depois o painel de propriedades e o histórico. Role a página para chegar aos painéis.
- Os menus ({{ui:Exportar}}, {{ui:Vistas}}) abrem ocupando a largura da tela.

:::note
No iPhone não há modo de tela cheia no navegador; {{key:Ctrl+Shift+F}} e o botão de modo de tela alternam apenas entre o normal e as barras ocultas.
:::

Um celular serve para abrir uma peça, girá-la e conferir seus dados. A modelagem de verdade precisa de uma tela maior e de um mouse ou trackpad.

## Navegadores

Os navegadores atuais Chrome, Edge, Firefox e Safari executam o PartCraft no Windows, macOS e Linux, e em tablets e celulares, desde que WebGL e WebAssembly estejam disponíveis. Veja [Navegadores e computadores](common:browsers).
