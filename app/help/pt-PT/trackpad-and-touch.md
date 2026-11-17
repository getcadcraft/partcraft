---
title: Trackpad, toque e ecrãs pequenos
summary: Como rodar, deslocar a vista e aplicar zoom com um trackpad de Mac ou de portátil, o que funciona num ecrã tátil e o que ainda precisa de um teclado, e como o ecrã se reorganiza num telemóvel ou numa janela estreita.
keywords: trackpad, touchpad, magic mouse, mac, toque, tablet, ipad, telemóvel, pinça, dois dedos, clique com o botão direito, clique secundário, gestos, ecrã pequeno, móvel
from: 0e764fd8
---

O PartCraft foi feito para um rato com roda e botão central, mas um trackpad funciona bem depois de conhecer os gestos, e um ecrã tátil serve para ver peças e fazer esboços simples.

## Trackpad

:::mac
| Para | Faça isto |
|---|---|
| Rodar a peça (3D) | Clique e arraste com um dedo (ou arraste com três dedos, se tiver ativado o arrastar com três dedos) |
| Deslocar a vista (3D) | Mantenha {{key:Shift}} (ou ⌘) e clique-arraste, ou clique-arraste com dois dedos pressionados (um arrastar com clique secundário) |
| Rodar a peça, deslizando | Deslize com dois dedos; com {{key:Shift}}, o deslize desloca a vista. Precisa de **Deslocamento** em "Detetar automaticamente" (o início) ou "Trackpad" |
| Zoom (3D e esboço) | Pinça. O zoom vai na direção do ponteiro. Com **Deslocamento** em "Roda do rato", um deslize de dois dedos também faz zoom |
| Clique com o botão direito | Clique com dois dedos, ou {{key:Ctrl}}+clique |
| Deslocar a vista num esboço | Deslize com dois dedos ("Detetar automaticamente" ou "Trackpad"), ou clique-arraste com dois dedos pressionados. {{key:Shift}}+arrastar não desloca a vista num esboço (desenha uma janela de seleção) |
| Acrescentar à seleção num esboço | {{key:Shift}}+clique ou ⌘+clique |

Ative o clique secundário em **Definições do Sistema**, **Trackpad**, **Apontar e clicar**, se o clique com dois dedos não fizer nada.
:::

:::windows linux
| Para | Faça isto |
|---|---|
| Rodar a peça (3D) | Prima o touchpad (ou toque e mantenha) e arraste |
| Deslocar a vista (3D) | Mantenha {{key:Shift}} ou {{key:Ctrl}} e arraste, ou arraste com a área do botão direito pressionada |
| Rodar a peça, deslizando | Deslize com dois dedos; com {{key:Shift}}, o deslize desloca a vista. Precisa de **Deslocamento** em "Detetar automaticamente" (o início) ou "Trackpad" |
| Zoom (3D e esboço) | Pinça onde o touchpad a suportar. O zoom vai na direção do ponteiro. Com **Deslocamento** em "Roda do rato", um deslize de dois dedos faz zoom |
| Clique com o botão direito | Toque com dois dedos, ou no canto inferior direito do touchpad |
| Deslocar a vista num esboço | Deslize com dois dedos ("Detetar automaticamente" ou "Trackpad"), ou arraste com a área do botão direito pressionada. {{key:Shift}}+arrastar não desloca a vista num esboço |
| Acrescentar à seleção num esboço | {{key:Shift}}+clique ou {{key:Ctrl}}+clique |
:::

**Deslocamento** está nas [Definições do PartCraft](topic:settings): "Detetar automaticamente" (o início) trata o deslocamento lateral ou de grão fino como um trackpad, "Trackpad" trata sempre assim, "Roda do rato" nunca. A pinça faz zoom nos três.

As teclas de seta rodam a vista 3D, e {{key:Shift}} com as setas desloca a vista, depois de ter clicado na vista: útil num trackpad. {{key:Plus}} e {{key:Minus}} fazem zoom.

## Ecrãs táteis

O PartCraft lê o toque, por isso tablets, portáteis com ecrã tátil e telemóveis funcionam, com limites.

:::touch
**Teclas de toque**

Assim que tocar no ecrã, aparece uma pequena barra no canto inferior direito da vista com as teclas que um dedo não tem. Desaparece quando usar um rato.

- {{ui:Esc}}: a tecla Esc. Cancela o que começou ou volta atrás, exatamente como a tecla.
- {{ui:Adicionar}} (num esboço, com Selecionar): enquanto estiver ativa, cada toque acrescenta um item à seleção ou retira-o, como {{key:Shift}}+clique. Toque de novo para voltar a um item de cada vez.
- {{ui:Concluir}} (enquanto desenha uma cadeia de linhas, uma spline ou um polígono): termina-a, como um clique com o botão direito.

Manter o dedo parado durante cerca de meio segundo faz o mesmo que um toque: com uma ferramenta de desenho termina o que está a desenhar, e com Selecionar acrescenta à seleção o item sob o dedo ou retira-o. Pontos e linhas são mais fáceis de atingir com um dedo: o PartCraft procura cerca do dobro da distância à volta de um toque, comparado com um clique.

**Na vista 3D**

- Um dedo: roda a peça.
- Dois dedos: pinçar para aplicar zoom, mover juntos para deslocar a vista.
- Toque: escolhe uma face, uma aresta ou um plano. Não há destaque ao passar o ponteiro antes de tocar.

**Num esboço**

- Toque com uma ferramenta de desenho para colocar cada ponto: toque no início e depois no fim. O encaixe acontece onde levanta o dedo.
- Dois dedos pinçam e deslocam a vista. Pousar um segundo dedo cancela um arrastamento que o primeiro começou.
- Para terminar uma cadeia de linhas, toque em {{ui:Concluir}}, mantenha o dedo parado, ou toque de novo em {{ui:Linha}} (ou noutra ferramenta) na barra de ferramentas.
- Com Selecionar, toque para selecionar; arraste um ponto ou uma linha para o mover; arraste sobre espaço vazio para uma janela. Um segundo toque substitui a seleção, a não ser que {{ui:Adicionar}} esteja ativo (ou mantenha o dedo parado no segundo item).
- Para alterar uma cota, use **Editar** ao lado dela no painel direito.

**A folha de desenho**

Toque para colocar e selecionar símbolos, e arraste um símbolo para o mover. Pince para aplicar zoom, mova dois dedos para deslocar a vista, ou arraste um dedo sobre papel vazio. Um segundo dedo para um símbolo que estava a arrastar, e este regressa à posição anterior.

**O que ainda precisa de teclado**

- Escrever números: o teclado do ecrã aparece nas caixas de números e nos campos de cotas.
- Atalhos de teclado para ferramentas: use a barra de ferramentas.
:::

## Ecrãs pequenos e telemóveis

- A partir de 1280 píxeis de largura, a barra de ferramentas cabe numa só linha.
- Entre cerca de 760 e 1100 píxeis, os painéis laterais ficam mais estreitos.
- Abaixo de cerca de 760 píxeis (um telemóvel, ou uma janela estreita), o ecrã fica empilhado: barra de ferramentas (deslize-a para o lado para mais botões), a vista 3D, a barra de estado, depois o painel de propriedades e o histórico. Desloque a página para chegar aos painéis.
- Os menus ({{ui:Exportar}}, {{ui:Vistas}}) abrem em toda a largura do ecrã.

:::note
No iPhone não existe modo de ecrã inteiro no navegador; {{key:Ctrl+Shift+F}} e o botão de modo de ecrã alternam apenas entre o normal e com as barras ocultas.
:::

Um telemóvel serve para abrir uma peça, rodá-la e verificar os seus dados. A modelação a sério precisa de um ecrã maior e de um rato ou trackpad.

## Navegadores

Os navegadores atuais Chrome, Edge, Firefox e Safari executam o PartCraft em Windows, macOS e Linux, e em tablets e telemóveis, desde que WebGL e WebAssembly estejam disponíveis. Ver [Navegadores e computadores](common:browsers).
