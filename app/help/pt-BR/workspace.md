---
title: A tela do PartCraft
summary: Um passeio por todas as barras e painéis: a barra de ferramentas e como ela muda, o histórico, os dados da peça, a vista 3D, o painel de propriedades e a barra de status.
keywords: tela, layout, barra de ferramentas, histórico, árvore de recursos, propriedades, painel, barra de status, interface, ui, passeio, tela cheia
from: 7394fc49
---

A tela tem cinco partes: a barra de ferramentas no alto, o histórico à esquerda, a vista 3D no meio, o painel de propriedades à direita e a barra de status ao longo da parte de baixo. Acima de todas fica a barra de aplicativos do CadCraft.

## A barra de aplicativos

A barra fina no topo pertence ao site do CadCraft, não ao PartCraft em si. Ela mostra o nome do aplicativo e onde ele roda, um menu de versão, **Sobre o PartCraft**, o botão de modo de tela e a chave de tema Papel / Modelo.

- **Papel** são linhas escuras sobre uma folha clara. **Modelo** são linhas claras sobre um fundo escuro. As cores do esboço seguem o tema.
- {{ui:Configurações}} (a engrenagem, ou {{key:Mod+,}}) tem uma guia {{ui:PartCraft}}: qual botão do mouse gira a vista, roda do mouse ou trackpad, e relações durante o esboço. Veja [Configurações do PartCraft](topic:settings).
- O botão de modo de tela, ou {{key:Ctrl+Shift+F}}, alterna entre normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, leve o ponteiro até a borda de cima (ou toque ali) para trazê-las de volta. {{key:Esc}} volta ao normal. Essa tecla é {{key:Ctrl+Shift+F}} também no Mac, não ⌘.

## A barra de ferramentas

A barra de ferramentas é agrupada. Ela muda conforme o que você está fazendo, para caber em uma linha:

| Grupo | Botões | Exibido |
|---|---|---|
| Arquivo | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Salvar}}, {{ui:Exportar}} (um menu) | Sempre |
| Esboço | {{ui:Esboço}} | Quando nenhum esboço está aberto |
| Esboço | {{ui:Sair}}, {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Ponto}}, {{ui:Linha de centro}}, {{ui:Concordância}}, {{ui:Cota}}, {{ui:Construção}} | Somente com um esboço aberto |
| Recursos | {{ui:Extrudar}}, {{ui:Corte}}, {{ui:Revolução}}, {{ui:Furo}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Espelhar}}, {{ui:Arredondar}}, {{ui:Chanfro}}, {{ui:Casca}}, {{ui:Mais}} (um menu: Corte por revolução, Plano, Eixo, Ponto, Varredura, Loft, Ângulo de saída) | Na peça, não com um esboço ou o desenho aberto. Arredondamento e Chanfro funcionam em arestas retas entre duas faces planas; Casca e Ângulo de saída em faces planas. Varredura e Loft ainda não estão implementados nesta versão (precisam de um kernel exato); ao clicar em um, ele avisa |
| Recursos | {{ui:Concluir}} | Somente enquanto você seleciona arestas ou faces para um arredondamento, chanfro, casca ou ângulo de saída |
| Desenho | {{ui:Desenho}} | Na peça (utilizável quando a peça tem um sólido) |
| Desenho | {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Detalhe}}, {{ui:PDF}}, {{ui:Voltar}} | Somente na folha de desenho |
| Montagem | {{ui:Montagem}} | Na peça (utilizável quando a peça tem um sólido) |
| Montagem | {{ui:Adicionar cópia}}, {{ui:Inserir}}, {{ui:Junta}}, {{ui:Colisão}}, {{ui:Editar peça}}, {{ui:Fechar}} | Somente em uma montagem |
| Montagem | {{ui:Voltar}} | Enquanto você edita uma peça a partir de uma montagem |
| Editar | {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} (um menu: Recortar, Copiar, Colar, Colar no mesmo local, Duplicar, Excluir, Selecionar tudo, Limpar seleção) | Sempre; cada item age sobre o esboço, o histórico ou a montagem em que você está |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (um menu: Medir, Propriedades de massa, Corte, Ângulo de saída, Zebra, Curvatura, {{ui:Planos base}}, depois Isométrica, Frontal, Posterior, Superior, Inferior, Direita, Esquerda) | Sempre |

Passe o ponteiro sobre um botão para ver o que ele faz e a tecla dele. Um botão esmaecido não pode ser usado agora: por exemplo, os botões de recurso com um esboço aberto, ou {{ui:Junta}} antes de a montagem ter duas peças.

O menu {{ui:Mais}} do grupo Editar lista cada ação de edição com a sua tecla. Aquilo em que copiar e colar agem depende de onde você está; veja [Copiar, colar e duplicar](topic:copy-paste). A dica de um item esmaecido diz por que ele não pode agir agora.

O menu {{ui:Exportar}} contém {{ui:STL, para impressão 3D}}, {{ui:3MF, para impressão 3D}}, {{ui:STEP AP242 (sólido exato)}}, {{ui:STEP AP214 (sólido exato)}}, {{ui:STEP (facetado, kernel de malha)}}, {{ui:STEP AP214 (facetado, kernel de malha)}}, {{ui:DXF do esboço ou da face plana}} e {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}}. Os dois itens de STEP exato ficam esmaecidos: eles ainda não estão implementados nesta versão, então use {{ui:STEP (facetado, kernel de malha)}}.

## O histórico (à esquerda)

O painel da esquerda é o histórico de recursos da peça, a lista que o PartCraft reconstrói de cima para baixo.

- O título é o nome da peça ("Peça1" até você renomeá-la).
- **Plano frontal**, **Plano superior** e **Plano direito** vêm primeiro. Clique em um para selecioná-lo; ele fica destacado na vista.
- Abaixo deles estão os seus recursos na ordem em que foram feitos. Um esboço usado por um recurso fica recuado embaixo desse recurso.
- Uma marca na extremidade direita de uma linha mostra o estado dela:

| Marca | Significado |
|---|---|
| (nenhuma) | Construído, e um esboço totalmente definido |
| − | Um esboço subdefinido (ele ainda pode se mover) |
| + | Um esboço sobredefinido |
| ⚠ | Construído, com um aviso (passe o ponteiro para ler) |
| ⚠ erro | O recurso falhou. Passe o ponteiro para ler o motivo, ou clique nele |
| ⚠ não construído | O recurso precisa de outro que falhou ou está desligado |
| desl. | Suprimido |

- Cada recurso mostra o seu número principal depois do nome, como "25 mm" para uma Extrusão ou "Ø6.6 passante" para um furo. Clique duas vezes no número, ou pressione {{key:F2}} na linha, para alterá-lo ali mesmo. Veja [Alterar medidas](topic:change-sizes).
- Clique em um recurso para editá-lo à direita. Clique duas vezes em um esboço para abri-lo.
- Quando você reverte, uma linha **Barra de reversão · avançar** aparece na lista. Os recursos abaixo dela ficam esmaecidos e não construídos.
- Com uma linha em foco, {{key:Up}} e {{key:Down}} movem entre as linhas, e {{key:Alt+Up}} / {{key:Alt+Down}} movem o próprio recurso, onde o histórico permitir.

Em uma montagem, o mesmo painel lista **Peças** (a primeira é marcada como "fixa") e **Juntas**.

### Dados da peça

Embaixo do histórico, a caixa **Peça** lista o **Volume**, a **Área de superfície**, o **Tamanho (X × Y × Z)**, os **Furos passantes**, os **Corpos**, os **Triângulos** do sólido, o número de **Recursos** e quantos estão **Com falha**. Volumes e áreas são do sólido facetado construído pelo kernel de malha, um pouco abaixo do valor verdadeiro para formas redondas (veja [Recursos e suas opções](topic:features#curves-resolution)).

Em uma montagem, a caixa tem o título **Montagem**: Peças, Instâncias, Juntas, Sem junta e Interferência.

## A vista 3D (no meio)

A vista mostra o sólido, os planos base e qualquer esboço ainda não usado por um recurso.

Os planos base são desenhados por inteiro enquanto a peça está vazia. Quando ela tem um sólido, eles recuam: ficam desenhados esmaecidos, para não cobrir a peça, e os cliques passam por eles até a peça. Eles voltam por inteiro enquanto você escolhe onde esboçar ({{ui:Esboço}} sem nada selecionado) e quando você seleciona um no histórico. {{ui:Vistas}} › {{ui:Planos base}} os oculta por completo; eles ainda aparecem enquanto você escolhe onde esboçar. O PartCraft lembra dessa escolha.

- Arraste para girar a peça, arraste com o botão direito ou do meio para fazer pan, role a roda para dar zoom no ponteiro. Detalhes em [Teclas e mouse](topic:keyboard).
- Passe o ponteiro sobre uma face, aresta ou plano para vê-lo acender. Clique para selecioná-lo. As faces ficam destacadas por inteiro e as arestas são desenhadas e selecionadas por inteiro. {{key:Shift}}+clique reúne várias arestas ou faces. Elas continuam marcadas.
- O cubo de vista no canto superior direito gira com a peça: clique em uma face, aresta ou canto para olhar de lá, arraste-o para girar, o botão da casa volta ao início. Veja [O cubo de vista](topic:view-cube).
- Uma Extrusão selecionada mostra uma seta laranja na face final, uma Revolução uma seta curva no fim do giro: arraste a seta para mudar a profundidade ou o ângulo, ou digite na caixa ao lado. Veja [Alterar medidas](topic:change-sizes#drag-it-in-the-view).
- Quando a peça está vazia, uma caixa com o título **Comece uma peça** lista os primeiros passos.
- Solte um arquivo `.partcraft.json` ou `.partcraft-asm.json` em qualquer lugar da vista para abri-lo. Um arquivo `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` solto ali abre como corpo sólido.

### Enquanto você seleciona arestas ou faces

Depois de {{ui:Arredondar}}, {{ui:Chanfro}} ou {{ui:Casca}} sem nada selecionado (ou {{ui:Selecionar arestas}} em um desses recursos), a peça aparece como era antes desse recurso. Clique em arestas ou faces para adicioná-las ou retirá-las; as marcas mostram o que está incluído. {{ui:Concluir}} ou {{key:Esc}} termina. Veja [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell).

### Na folha de desenho

{{ui:Desenho}} substitui a vista 3D pela folha de desenho A3. A roda dá zoom, arrastar com o botão direito ou do meio faz pan, {{key:F}} ajusta. Veja [Faça um desenho](topic:drawing-pdf).

### Enquanto um esboço está aberto

A vista gira para olhar de frente para o plano do esboço e uma camada de esboço 2D aparece por cima. A peça mostra apenas os recursos feitos antes deste esboço. Uma faixa no canto superior esquerdo mostra o indicador de estado do esboço ("Totalmente definido", "Subdefinido · 3 graus de liberdade" e assim por diante) e o nome dele, como "Esboço2 em uma face de Extrusão1".

## O painel de propriedades (à direita)

O painel da direita mostra o que estiver selecionado, e o título dele dá o nome:

- **Peça** (nada selecionado): o **Nome** da peça e o ajuste **Curvas**.
- Um plano: um botão {{ui:Esboçar nele}}.
- Uma **Face**: de que tipo ela é (Face plana, Cilindro com seu raio e eixo, Cone, Esfera ou Toro), sua área, que recurso a fez, e para uma face plana {{ui:Esboço nesta face}}, {{ui:Normal a}}, {{ui:Exportar face como DXF}}, {{ui:Extrudar a partir dela}}, {{ui:Cortar nela}} e {{ui:Furo aqui}} (veja [Puxar ou empurrar uma face inteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uma **Aresta**: seu tipo (reta, um círculo com seu centro e raio, ou uma curva), seu comprimento e as duas faces entre as quais ela fica (como "face final de Extrusão1 e lateral de Extrusão1"), com os botões {{ui:Arredondar}} e {{ui:Chanfro}}.
- Várias arestas ou faces selecionadas com {{key:Shift}}: quantas, com {{ui:Arredondar}} e {{ui:Chanfro}} para arestas, e {{ui:Limpar}}.
- Um recurso: seus números e opções, as cotas do esboço dele, depois {{ui:Suprimir}}, {{ui:Reverter até aqui}}, {{ui:Mover para cima}}, {{ui:Mover para baixo}}, {{ui:Excluir}} e o seu **Nome**.
- Um esboço aberto: seu estado, as relações que você pode adicionar à seleção, a lista de relações e cotas, **Adicionar por coordenadas**, e {{ui:Sair do esboço}}, {{ui:Ajustar}} e {{ui:Exportar como DXF}}.
- Na folha de desenho: os ajustes de corte e detalhe, ou o símbolo de GD&T selecionado.
- Em uma montagem: a montagem, a peça selecionada ou a junta selecionada.

Toda caixa de número tem efeito quando você pressiona {{key:Enter}} ou {{key:Tab}}, ou clica fora. A peça é reconstruída na hora; não há botão OK. Use {{key:Mod+Z}} para voltar.

## A barra de status (embaixo)

- À esquerda, as coordenadas do ponteiro no esboço (somente com um esboço aberto).
- No meio, mensagens: o que fazer em seguida e por que algo foi recusado. Leia-a quando nada parecer acontecer.
- Perto da direita, o indicador do kernel: sempre "Kernel de malha" nesta versão. Passe o ponteiro para ver o que isso significa. Veja [O kernel de malha](topic:solid-kernels).
- À direita, um indicador: "Reconstruindo…" enquanto a peça é reconstruída, depois "Reconstruída em … ms" quando tudo vai bem, ou "1 recurso com falha". Em uma montagem, ele diz "Posicionada em … ms" ou conta os problemas de junta.

Veja também [Comece um manual no Illustrate](topic:illustrate): o ambiente que faz manuais de montagem a partir das suas peças e montagens.

## Em uma tela estreita

Até 760 pixels de largura, como em um celular, a vista ocupa a tela: a barra de ferramentas é uma linha que rola para o lado, e os painéis abrem como folhas a partir de uma barra na parte de baixo. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} a coloca embaixo. Veja [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).
