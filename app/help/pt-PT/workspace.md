---
title: O ecrã do PartCraft
summary: Uma visita a todas as barras e painéis: a barra de ferramentas e como muda, o histórico, os dados da peça, a vista 3D, o painel de propriedades e a barra de estado.
keywords: ecrã, esquema, barra de ferramentas, histórico, árvore de operações, propriedades, painel, barra de estado, interface, ui, visita, ecrã inteiro
from: 7394fc49
---

O ecrã tem cinco partes: a barra de ferramentas ao longo do topo, o histórico à esquerda, a vista 3D ao meio, o painel de propriedades à direita e a barra de estado ao longo do fundo. Por cima de todas está a barra da aplicação CadCraft.

## A barra da aplicação

A barra fina no topo pertence ao site CadCraft, não ao PartCraft em si. Mostra o nome da aplicação e onde corre, um menu de versões, **Sobre o PartCraft**, o botão do modo de ecrã e o interruptor de tema Papel / Modelo.

- **Papel** são linhas escuras numa folha clara. **Modelo** são linhas claras sobre um fundo escuro. As cores dos esboços seguem o tema.
- {{ui:Definições}} (a roda dentada, ou {{key:Mod+,}}) tem um separador {{ui:PartCraft}}: que botão do rato roda a vista, roda do rato ou trackpad, e relações durante o esboço. Veja [Definições do PartCraft](topic:settings).
- O botão do modo de ecrã, ou {{key:Ctrl+Shift+F}}, percorre normal, ecrã inteiro e ecrã inteiro com as barras ocultas. Com as barras ocultas, mova o ponteiro para a margem superior (ou toque aí) para as trazer de volta. {{key:Esc}} volta ao normal. Esta tecla é {{key:Ctrl+Shift+F}} também num Mac, não ⌘.

## A barra de ferramentas

A barra de ferramentas está agrupada. Muda consoante o que está a fazer, para caber numa só linha:

| Grupo | Botões | Mostrado |
|---|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Exportar}} (um menu) | Sempre |
| Esboço | {{ui:Esboço}} | Quando nenhum esboço está aberto |
| Esboço | {{ui:Sair}}, {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Ponto}}, {{ui:Linha de eixo}}, {{ui:Concordância}}, {{ui:Cota}}, {{ui:Construção}} | Só enquanto um esboço está aberto |
| Operações | {{ui:Extrudir}}, {{ui:Corte}}, {{ui:Revolução}}, {{ui:Furo}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Simetria}}, {{ui:Boleado}}, {{ui:Chanfre}}, {{ui:Casca}}, {{ui:Mais}} (um menu: Corte por revolução, Plano, Eixo, Ponto, Varrimento, Loft, Ângulo de saída) | Na peça, não enquanto um esboço ou o desenho está aberto. Boleado e Chanfre atuam em arestas retas entre duas faces planas; Casca e Ângulo de saída em faces planas. Varrimento e Loft ainda não estão implementados nesta versão (precisam de um kernel exato); clicar num di-lo |
| Operações | {{ui:Concluir}} | Só enquanto escolhe arestas ou faces para um boleado, chanfre, casca ou ângulo de saída |
| Desenho | {{ui:Desenho}} | Na peça (utilizável quando a peça tem um sólido) |
| Desenho | {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Pormenor}}, {{ui:PDF}}, {{ui:Voltar}} | Só na folha de desenho |
| Montagem | {{ui:Montagem}} | Na peça (utilizável quando a peça tem um sólido) |
| Montagem | {{ui:Acrescentar cópia}}, {{ui:Inserir}}, {{ui:Junta}}, {{ui:Conflitos}}, {{ui:Editar peça}}, {{ui:Fechar}} | Só numa montagem |
| Montagem | {{ui:Voltar}} | Enquanto edita uma peça a partir de uma montagem |
| Editar | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} (um menu: Cortar, Copiar, Colar, Colar no mesmo sítio, Duplicar, Eliminar, Selecionar tudo, Limpar seleção) | Sempre; cada item atua no esboço, no histórico ou na montagem em que está |
| Ver | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (um menu: Medir, Propriedades de massa, Secção, Ângulo de saída, Zebra, Curvatura, {{ui:Planos base}}, depois Isométrica, Frente, Trás, Topo, Baixo, Direita, Esquerda) | Sempre |

Pare o ponteiro sobre um botão para ver o que faz e a sua tecla. Um botão esbatido não pode ser usado neste momento: por exemplo os botões de operações enquanto um esboço está aberto, ou {{ui:Junta}} antes de a montagem ter duas peças.

O menu {{ui:Mais}} do grupo Editar lista cada ação de edição com a sua tecla. Aquilo em que copiar e colar atuam depende de onde está; veja [Copiar, colar e duplicar](topic:copy-paste). A sugestão de um item esbatido diz porque é que ele não pode atuar agora.

O menu {{ui:Exportar}} contém {{ui:STL, para impressão 3D}}, {{ui:3MF, para impressão 3D}}, {{ui:STEP AP242 (sólido exato)}}, {{ui:STEP AP214 (sólido exato)}}, {{ui:STEP (facetado, kernel de malha)}}, {{ui:STEP AP214 (facetado, kernel de malha)}}, {{ui:DXF do esboço ou da face plana}} e {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}}. Os dois itens STEP exatos estão esbatidos: ainda não estão implementados nesta versão, por isso use {{ui:STEP (facetado, kernel de malha)}}.

## O histórico (à esquerda)

O painel da esquerda é o histórico de operações da peça, a lista a partir da qual o PartCraft reconstrói de cima para baixo.

- O título é o nome da peça («Peça1» até lhe mudar o nome).
- **Plano frontal**, **Plano superior** e **Plano direito** vêm primeiro. Clique num para o selecionar; fica realçado na vista.
- Por baixo deles estão as suas operações pela ordem em que foram feitas. Um esboço que uma operação usa aparece recuado por baixo dessa operação.
- Uma marca na extremidade direita de uma linha diz o seu estado:

| Marca | Significado |
|---|---|
| (nenhuma) | Construída, e um esboço totalmente definido |
| − | Um esboço subdefinido (ainda se pode mover) |
| + | Um esboço sobredefinido |
| ⚠ | Construída, com um aviso (pare o ponteiro para o ler) |
| ⚠ erro | A operação falhou. Pare o ponteiro para ler porquê, ou clique nela |
| ⚠ não construída | A operação precisa de outra que falhou ou está desativada |
| desativada | Suprimida |

- Cada operação mostra o seu número principal a seguir ao nome, como «25 mm» para uma Extrusão ou «Ø6.6 thru» para um furo. Faça duplo clique no número, ou prima {{key:F2}} na linha, para o alterar logo ali. Veja [Alterar tamanhos](topic:change-sizes).
- Clique numa operação para a editar à direita. Faça duplo clique num esboço para o abrir.
- Quando reverte, uma linha **Barra de recuo · avançar** fica na lista. As operações abaixo dela ficam esbatidas e não são construídas.
- Com uma linha em foco, {{key:Up}} e {{key:Down}} movem entre linhas, e {{key:Alt+Up}} / {{key:Alt+Down}} movem a própria operação, onde o histórico o permitir.

Numa montagem o mesmo painel lista **Peças** (a primeira é marcada «fixa») e **Juntas**.

### Dados da peça

Por baixo do histórico, a caixa **Peça** lista o **Volume** do sólido, a **Área de superfície**, as **Dimensões (X × Y × Z)**, os **Furos passantes**, os **Corpos**, os **Triângulos**, o número de **Operações** e quantas estão **A falhar**. Os volumes e áreas são do sólido facetado construído pelo kernel de malha, um pouco abaixo do valor verdadeiro para formas redondas (veja [Operações e as suas opções](topic:features#curves-resolution)).

Numa montagem a caixa tem o título **Montagem**: Peças, Instâncias, Juntas, Não ligadas e Interferência.

## A vista 3D (ao meio)

A vista mostra o sólido, os planos base e qualquer esboço ainda não usado por uma operação.

Os planos base são desenhados por inteiro enquanto a peça está vazia. Quando tem um sólido, recuam: ficam desenhados ténues, para não cobrirem a peça, e os cliques atravessam-nos até à peça. Voltam por inteiro enquanto escolhe onde esboçar ({{ui:Esboço}} sem nada escolhido) e quando seleciona um no histórico. {{ui:Vistas}} › {{ui:Planos base}} oculta-os por completo; continuam a aparecer enquanto escolhe onde esboçar. O PartCraft recorda essa escolha.

- Arraste para rodar a peça, arraste com o botão direito ou do meio para deslocar, rode a roda para fazer zoom no ponteiro. Pormenores em [Teclas e rato](topic:keyboard).
- Pare o ponteiro sobre uma face, aresta ou plano para o ver acender-se. Clique para o escolher. As faces ficam realçadas por inteiro e as arestas são desenhadas e escolhidas por inteiro. {{key:Shift}}+clique reúne várias arestas ou faces. Ficam marcadas.
- O cubo de vistas no canto superior direito roda com a peça: clique numa face, aresta ou canto para olhar a partir daí, arraste-o para rodar, o botão da casa volta ao início. Veja [O cubo de vistas](topic:view-cube).
- Uma Extrusão selecionada mostra uma seta cor de laranja na sua face final, uma Revolução uma seta curva no fim da sua rotação: arraste-a para mudar a profundidade ou o ângulo, ou escreva na caixa ao lado. Veja [Alterar tamanhos](topic:change-sizes#drag-it-in-the-view).
- Quando uma peça está vazia, uma caixa com o título **Começar uma peça** lista os primeiros passos.
- Largue um ficheiro `.partcraft.json` ou `.partcraft-asm.json` em qualquer ponto da vista para o abrir. Um ficheiro `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` largado aí abre-se como corpo sólido.

### Enquanto escolhe arestas ou faces

Depois de {{ui:Boleado}}, {{ui:Chanfre}} ou {{ui:Casca}} sem nada escolhido (ou {{ui:Escolher arestas}} numa dessas operações), a peça aparece como estava antes dessa operação. Clique em arestas ou faces para as acrescentar ou largar; as suas marcas mostram o que está incluído. {{ui:Concluir}} ou {{key:Esc}} termina. Veja [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell).

### Na folha de desenho

{{ui:Desenho}} substitui a vista 3D pela folha de desenho A3. A roda faz zoom, arrastar com o botão direito ou do meio desloca, {{key:F}} ajusta. Veja [Fazer um desenho](topic:drawing-pdf).

### Enquanto um esboço está aberto

A vista roda para olhar diretamente para o plano do esboço e uma camada de esboço 2D aparece por cima. A peça mostra apenas as operações feitas antes deste esboço. Uma faixa no canto superior esquerdo mostra o ícone de estado do esboço («Totalmente definido», «Subdefinido · 3 graus de liberdade» e assim por diante) e o seu nome, como «Esboço2 numa face de Extrusão1».

## O painel de propriedades (à direita)

O painel da direita mostra o que estiver selecionado, e o seu título nomeia-o:

- **Peça** (nada selecionado): o **Nome** da peça e a definição **Curvas**.
- Um plano: um botão {{ui:Esboçar nele}}.
- Uma **Face**: de que tipo é (Face plana, Cilindro com o seu raio e eixo, Cone, Esfera ou Toro), a sua área, que operação a fez e, para uma face plana, {{ui:Esboço nesta face}}, {{ui:Normal a}}, {{ui:Exportar face como DXF}}, {{ui:Extrudir a partir dela}}, {{ui:Cortar nela}} e {{ui:Furo aqui}} (veja [Puxar ou empurrar uma face inteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uma **Aresta**: o seu tipo (reta, um círculo com o seu centro e raio, ou uma curva), o seu comprimento e as duas faces entre as quais está (como «face final da Extrusão1 e lado da Extrusão1»), com botões {{ui:Boleado}} e {{ui:Chanfre}}.
- Várias arestas ou faces escolhidas com {{key:Shift}}: quantas, com {{ui:Boleado}} e {{ui:Chanfre}} para arestas, e {{ui:Limpar}}.
- Uma operação: os seus números e opções, as cotas do seu esboço, depois {{ui:Suprimir}}, {{ui:Reverter até aqui}}, {{ui:Subir}}, {{ui:Descer}}, {{ui:Eliminar}} e o seu **Nome**.
- Um esboço aberto: o seu estado, as relações que pode acrescentar à seleção, a lista de relações e cotas, **Acrescentar por coordenadas**, e {{ui:Sair do esboço}}, {{ui:Ajustar}} e {{ui:Exportar como DXF}}.
- Na folha de desenho: as definições de corte e de pormenor, ou o símbolo GD&T selecionado.
- Numa montagem: a montagem, a peça selecionada ou a junta selecionada.

Cada caixa de número entra em vigor quando prime {{key:Enter}} ou {{key:Tab}}, ou clica fora. A peça reconstrói-se de imediato; não há botão OK. Use {{key:Mod+Z}} para voltar atrás.

## A barra de estado (em baixo)

- À esquerda, as coordenadas do ponteiro no esboço (só enquanto um esboço está aberto).
- Ao meio, mensagens: o que fazer a seguir e porque é que algo foi recusado. Leia-a quando nada parece acontecer.
- Perto da direita, o ícone do kernel: sempre «Kernel de malha» nesta versão. Pare o ponteiro sobre ele para ver o que significa. Veja [O kernel de malha](topic:solid-kernels).
- À direita, um ícone: «A reconstruir…» enquanto a peça se reconstrói, depois «Reconstruído em … ms» quando está tudo bem, ou «1 operação a falhar». Numa montagem diz «Posicionada em … ms» ou conta os problemas de juntas.

Veja também [Começar um manual em Ilustrar](topic:illustrate): a área de trabalho que faz manuais de montagem a partir das suas peças e montagens.

## Num ecrã estreito

Até 760 píxeis de largura, como num telemóvel, a vista fica com o ecrã: a barra de ferramentas é uma só linha que se desloca para o lado, e os painéis abrem-se como folhas a partir de uma barra no fundo. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} coloca-a em baixo. Veja [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).
