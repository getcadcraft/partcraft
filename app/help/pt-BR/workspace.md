---
title: A tela do PartCraft
summary: Um tour por cada barra e painel: a barra de ferramentas e como ela muda, o histórico, os dados da peça, a vista 3D, o painel de propriedades e a barra de status.
keywords: tela, layout, barra de ferramentas, histórico, árvore de recursos, propriedades, painel, barra de status, interface, ui, tour, tela cheia
from: 5b5bb843
---

A tela tem cinco partes: a barra de ferramentas no topo, o histórico à esquerda, a vista 3D no centro, o painel de propriedades à direita e a barra de status na parte inferior. Acima de todas fica a barra do aplicativo CadCraft.

## A barra do aplicativo

A barra fina no topo pertence ao site da CadCraft, não ao próprio PartCraft. Ela mostra o nome do aplicativo e onde ele roda, um menu de versão, **Sobre o PartCraft**, o botão de modo de tela e a chave de tema Papel / Modelo.

- **Papel** são linhas escuras em uma folha clara. **Modelo** são linhas claras em um fundo escuro. As cores do esboço seguem o tema.
- {{ui:Configurações}} (a engrenagem, ou {{key:Mod+,}}) tem uma guia {{ui:PartCraft}}: qual botão do mouse gira a vista, roda do mouse ou trackpad, e as relações durante o esboço. Veja [Configurações do PartCraft](topic:settings).
- O botão de modo de tela, ou {{key:Ctrl+Shift+F}}, alterna entre normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, leve o ponteiro até a borda superior (ou toque ali) para trazê-las de volta. {{key:Esc}} volta ao normal. Esta tecla é {{key:Ctrl+Shift+F}} também no Mac, não ⌘.

## A barra de ferramentas

A barra de ferramentas é agrupada. Ela muda conforme o que você está fazendo, para caber em uma linha:

| Grupo | Botões | Exibido |
|---|---|---|
| Arquivo | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Salvar}}, {{ui:Exportar}} (um menu) | Sempre |
| Esboço | {{ui:Esboço}} | Quando nenhum esboço está aberto |
| Esboço | {{ui:Sair}}, {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Ponto}}, {{ui:Linha de centro}}, {{ui:Arredondamento}}, {{ui:Cota}}, {{ui:Construção}} | Somente com um esboço aberto |
| Recursos | {{ui:Extrudar}}, {{ui:Recortar}}, {{ui:Revolução}}, {{ui:Furo}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Espelhar}}, {{ui:Arredondamento}}, {{ui:Chanfro}}, {{ui:Casca}}, {{ui:Mais}} (um menu: Corte por revolução, Plano, Eixo, Ponto, Varredura, Loft, Ângulo de saída) | Na peça, não enquanto um esboço ou o desenho está aberto. Arredondamento e Chanfro funcionam em arestas retas entre duas faces planas; Casca e Ângulo de saída em faces planas. Varredura e Loft ainda não estão implementados nesta versão (exigem um kernel exato); ao clicar em um deles, isso é informado |
| Recursos | {{ui:Concluir}} | Somente enquanto você seleciona arestas ou faces para um arredondamento, chanfro, casca ou ângulo de saída |
| Desenho | {{ui:Desenho}} | Na peça (utilizável quando a peça tiver um sólido) |
| Desenho | {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Detalhe}}, {{ui:PDF}}, {{ui:Voltar}} | Somente na folha de desenho |
| Montagem | {{ui:Montagem}} | Na peça (utilizável quando a peça tiver um sólido) |
| Montagem | {{ui:Adicionar cópia}}, {{ui:Inserir}}, {{ui:Junta}}, {{ui:Colisão}}, {{ui:Editar peça}}, {{ui:Fechar}} | Somente em uma montagem |
| Montagem | {{ui:Voltar}} | Enquanto você edita uma peça a partir de uma montagem |
| Editar | {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} (um menu: Recortar, Copiar, Colar, Colar no mesmo local, Duplicar, Excluir, Selecionar tudo, Limpar seleção) | Sempre; cada item age sobre o esboço, o histórico ou a montagem em que você está |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (um menu: Medir, Propriedades de massa, Seção, Ângulo de saída, Zebra, Curvatura, {{ui:Planos base}}, depois Isométrica, Frontal, Traseira, Superior, Inferior, Direita, Esquerda) | Sempre |

Passe o ponteiro sobre um botão para ver o que ele faz e a tecla de atalho dele. Um botão em cinza não pode ser usado agora: por exemplo, os botões de recurso enquanto um esboço está aberto, ou {{ui:Junta}} antes de a montagem ter duas peças.

O menu {{ui:Mais}} do grupo Editar lista cada ação de edição com a sua tecla. O alvo de copiar e colar depende de onde você está; veja [Copiar, colar e duplicar](topic:copy-paste). A dica de um item em cinza informa por que ele não pode agir agora.

O menu {{ui:Exportar}} tem {{ui:STL, para impressão 3D}}, {{ui:3MF, para impressão 3D}}, {{ui:STEP AP242 (sólido exato)}}, {{ui:STEP AP214 (sólido exato)}}, {{ui:STEP (facetado, kernel de malha)}}, {{ui:STEP AP214 (facetado, kernel de malha)}}, {{ui:DXF do esboço ou da face plana}} e {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}}. Os itens de STEP exato gravam faces redondas em suas superfícies verdadeiras; os facetados as gravam como facetas planas.

## O histórico (à esquerda)

O painel à esquerda é o histórico de recursos da peça, a lista que o PartCraft reconstrói de cima para baixo.

- O título é o nome da peça ("Part1" até você renomeá-la).
- **Plano Frontal**, **Plano Superior** e **Plano Direito** vêm primeiro. Clique em um deles para selecioná-lo; ele fica destacado na vista.
- Abaixo deles ficam os seus recursos na ordem em que foram criados. Um esboço usado por um recurso fica recuado sob esse recurso.
- Uma marca no fim da linha informa o estado dela:

| Marca | Significado |
|---|---|
| (nenhuma) | Construído, e o esboço está totalmente definido |
| − | Um esboço subdefinido (ainda pode se mover) |
| + | Um esboço superdefinido |
| ⚠ | Construído, com um aviso (passe o ponteiro para ler) |
| ⚠ erro | O recurso falhou. Passe o ponteiro para ler o motivo, ou clique nele |
| ⚠ não construído | O recurso precisa de outro que falhou ou está desligado |
| desligado | Suprimido |

- Cada recurso mostra o seu número principal depois do nome, como "25 mm" para uma Extrusão ou "Ø6.6 thru" para um furo. Clique duas vezes no número, ou pressione {{key:F2}} na linha, para alterá-lo ali mesmo. Veja [Alterar medidas](topic:change-sizes).
- Clique em um recurso para editá-lo à direita. Clique duas vezes em um esboço para abri-lo.
- Ao reverter, uma linha **Barra de reversão · avançar** fica na lista. Os recursos abaixo dela ficam em cinza e não são construídos.
- Com uma linha selecionada, {{key:Up}} e {{key:Down}} movem entre as linhas, e {{key:Alt+Up}} / {{key:Alt+Down}} movem o próprio recurso, quando o histórico permite.

Em uma montagem, o mesmo painel lista **Peças** (a primeira fica marcada como "fixada") e **Juntas**.

### Dados da peça

Abaixo do histórico, a caixa **Peça** lista o **Volume**, a **Área da superfície**, o **Tamanho (X × Y × Z)**, os **Furos passantes**, os **Corpos**, os **Triângulos**, o número de **Recursos** e quantos estão **Com falha**. Volumes e áreas são do sólido facetado construído pelo kernel de malha, um pouco abaixo do valor real para formas redondas (veja [Recursos e suas opções](topic:features#curves-resolution)).

Em uma montagem, a caixa tem o título **Montagem**: Peças, Instâncias, Juntas, Não unidas e Interferência.

## A vista 3D (no centro)

A vista mostra o sólido, os planos base e qualquer esboço ainda não usado por um recurso.

Os planos base são desenhados por inteiro enquanto a peça está vazia. Quando ela tem um sólido, eles recuam: desenhados em tom suave, para não cobrir a peça, e os cliques passam por eles até a peça. Voltam por inteiro enquanto você escolhe onde esboçar ({{ui:Esboço}} sem nada selecionado) e quando você seleciona um no histórico. {{ui:Vistas}} › {{ui:Planos base}} os oculta por completo; eles continuam aparecendo enquanto você escolhe onde esboçar. O PartCraft lembra dessa escolha.

- Arraste para girar a peça, arraste com o botão direito ou com o botão do meio para deslocar a vista, e role a roda para dar zoom no ponto do ponteiro. Detalhes em [Teclas e mouse](topic:keyboard).
- Passe o ponteiro sobre uma face, aresta ou plano para vê-lo acender. Clique para selecioná-lo. Faces são destacadas inteiras, e arestas são desenhadas e selecionadas inteiras. {{key:Shift}}+clique reúne várias arestas ou faces. Elas permanecem marcadas.
- O cubo de vista no canto superior direito gira com a peça: clique em uma face, aresta ou canto para olhar dali, arraste-o para girar, e o botão de casa volta ao início. Veja [O cubo de vista](topic:view-cube).
- Uma Extrusão selecionada mostra uma seta laranja na sua face final, e uma Revolução mostra uma seta curva no fim da volta: arraste-a para alterar a profundidade ou o ângulo, ou digite na caixa ao lado. Veja [Alterar medidas](topic:change-sizes#drag-it-in-the-view).
- Quando a peça está vazia, uma caixa com o título **Começar uma peça** lista os primeiros passos.
- Solte um arquivo `.partcraft.json` ou `.partcraft-asm.json` em qualquer lugar da vista para abri-lo. Um arquivo `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` solto ali abre como corpo sólido.

### Enquanto você seleciona arestas ou faces

Depois de {{ui:Arredondamento}}, {{ui:Chanfro}} ou {{ui:Casca}} sem nada selecionado (ou {{ui:Selecionar arestas}} em um desses recursos), a peça aparece como era antes desse recurso. Clique em arestas ou faces para incluí-las ou removê-las; as marcas mostram o que está incluído. {{ui:Concluir}} ou {{key:Esc}} termina. Veja [Arredondar, chanfrar e criar casca](topic:fillet-chamfer-shell).

### Na folha de desenho

{{ui:Desenho}} substitui a vista 3D pela folha de desenho A3. A roda dá zoom, arrastar com o botão direito ou do meio desloca a vista, e {{key:F}} ajusta. Veja [Fazer um desenho](topic:drawing-pdf).

### Com um esboço aberto

A vista gira para olhar diretamente para o plano do esboço, e uma camada de esboço 2D aparece por cima. A peça mostra somente os recursos feitos antes deste esboço. Uma faixa no canto superior esquerdo mostra o indicador de estado do esboço ("Totalmente definido", "Subdefinido · 3 graus de liberdade" e assim por diante) e o seu nome, como "Sketch2 em uma face de Extrude1".

## O painel de propriedades (à direita)

O painel à direita mostra o que estiver selecionado, e o título dele informa o que é:

- **Peça** (nada selecionado): o **Nome** da peça e a configuração **Curvas**.
- Um plano: um botão {{ui:Esboçar nele}}.
- Uma **Face**: o tipo dela (face plana, cilindro com seu raio e eixo, cone, esfera ou toro), a área, qual recurso a criou e, para uma face plana, {{ui:Esboçar nesta face}}, {{ui:Normal a}}, {{ui:Exportar face como DXF}}, {{ui:Extrudar a partir dela}}, {{ui:Cortar nela}} e {{ui:Furo aqui}} (veja [Puxar ou empurrar uma face inteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uma **Aresta**: o tipo dela (reta, um círculo com centro e raio, ou uma curva), o comprimento e as duas faces entre as quais ela está (como "face final de Extrude1 e lateral de Extrude1"), com os botões {{ui:Arredondamento}} e {{ui:Chanfro}}.
- Várias arestas ou faces selecionadas com {{key:Shift}}: quantas são, com {{ui:Arredondamento}} e {{ui:Chanfro}} para arestas, e {{ui:Limpar}}.
- Um recurso: seus números e opções, as cotas do seu esboço, depois {{ui:Suprimir}}, {{ui:Reverter até aqui}}, {{ui:Mover para cima}}, {{ui:Mover para baixo}}, {{ui:Excluir}} e o seu **Nome**.
- Um esboço aberto: o estado dele, as relações que você pode adicionar à seleção, a lista de relações e cotas, **Adicionar por coordenadas**, e {{ui:Sair do esboço}}, {{ui:Ajustar}} e {{ui:Exportar como DXF}}.
- Na folha de desenho: as configurações de corte e de detalhe, ou o símbolo GD&T selecionado.
- Em uma montagem: a montagem, a peça selecionada ou a junta selecionada.

Cada caixa de número tem efeito quando você pressiona {{key:Enter}} ou {{key:Tab}}, ou clica fora. A peça é reconstruída de imediato; não há botão OK. Use {{key:Mod+Z}} para voltar.

## A barra de status (inferior)

- À esquerda, as coordenadas do ponteiro no esboço (somente enquanto um esboço estiver aberto).
- No meio, as mensagens: o que fazer em seguida e por que algo foi recusado. Leia-a quando nada parecer acontecer.
- Perto da direita, o indicador do kernel: sempre "Kernel de malha" nesta versão. Passe o ponteiro sobre ele para saber o que isso significa. Veja [O kernel de malha](topic:solid-kernels).
- À direita, um indicador: "Reconstruindo…" enquanto a peça é reconstruída, depois "Reconstruído em … ms" quando tudo está bem, ou "1 recurso com falha". Em uma montagem, mostra "Posicionado em … ms" ou conta os problemas de junta.

Veja também [Iniciar um manual no Illustrate](topic:illustrate): o ambiente que cria manuais de montagem a partir das suas peças e montagens.

## Em uma tela estreita

Até 760 pixels de largura, como em um celular, a vista mantém a tela: a barra de ferramentas é uma linha que rola para o lado, e os painéis abrem como folhas a partir de uma barra na parte inferior. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} a coloca na parte inferior. Veja [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).
