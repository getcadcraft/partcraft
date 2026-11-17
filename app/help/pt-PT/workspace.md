---
title: O ecrã do PartCraft
summary: Uma visita a todas as barras e painéis: a barra de ferramentas e como muda, o histórico, os dados da peça, a vista 3D, o painel de propriedades e a barra de estado.
keywords: ecrã, disposição, barra de ferramentas, histórico, árvore de operações, propriedades, painel, barra de estado, interface, ui, visita, ecrã inteiro
from: 5b5bb843
---

O ecrã tem cinco partes: a barra de ferramentas no topo, o histórico à esquerda, a vista 3D ao centro, o painel de propriedades à direita e a barra de estado em baixo. Acima de todas fica a barra da aplicação CadCraft.

## A barra da aplicação

A barra fina no topo pertence ao site da CadCraft, não ao próprio PartCraft. Mostra o nome da aplicação e onde corre, um menu de versões, **Acerca do PartCraft**, o botão de modo de ecrã e o interruptor de tema Papel / Modelo.

- **Papel** são linhas escuras numa folha clara. **Modelo** são linhas claras num fundo escuro. As cores do esboço seguem o tema.
- {{ui:Definições}} (a engrenagem, ou {{key:Mod+,}}) tem um separador {{ui:PartCraft}}: que botão do rato roda a vista, roda do rato ou trackpad, e relações durante o esboço. Ver [Definições do PartCraft](topic:settings).
- O botão de modo de ecrã, ou {{key:Ctrl+Shift+F}}, percorre o normal, o ecrã inteiro e o ecrã inteiro com as barras ocultas. Com as barras ocultas, mova o ponteiro para a margem superior (ou toque aí) para as trazer de volta. {{key:Esc}} volta ao normal. Esta tecla é {{key:Ctrl+Shift+F}} também num Mac, e não ⌘.

## A barra de ferramentas

A barra de ferramentas está agrupada. Muda conforme o que está a fazer, para caber numa linha:

| Grupo | Botões | Mostrado |
|---|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Exportar}} (um menu) | Sempre |
| Esboço | {{ui:Esboço}} | Quando nenhum esboço está aberto |
| Esboço | {{ui:Sair}}, {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Ponto}}, {{ui:Linha de eixo}}, {{ui:Boleado}}, {{ui:Cota}}, {{ui:Construção}} | Só enquanto um esboço está aberto |
| Operações | {{ui:Extrudir}}, {{ui:Cortar}}, {{ui:Revolução}}, {{ui:Furo}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Espelhar}}, {{ui:Boleado}}, {{ui:Chanfre}}, {{ui:Casca}}, {{ui:Mais}} (um menu: corte por revolução, Plano, Eixo, Ponto, {{ui:Varrimento}}, {{ui:Loft}}, Ângulo de saída) | Na peça, não enquanto um esboço ou a folha de desenho está aberto. Boleado e Chanfre funcionam em arestas retas entre duas faces planas; Casca e Ângulo de saída em faces planas. Varrimento e Loft ainda não estão implementados nesta versão (precisam de um núcleo exato); clicar num deles indica-o |
| Operações | {{ui:Concluir}} | Só enquanto escolhe arestas ou faces para um boleado, chanfre, casca ou ângulo de saída |
| Desenho | {{ui:Desenho}} | Na peça (utilizável quando a peça tiver um sólido) |
| Desenho | {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Pormenor}}, {{ui:PDF}}, {{ui:Voltar}} | Só na folha de desenho |
| Montagem | {{ui:Montagem}} | Na peça (utilizável quando a peça tiver um sólido) |
| Montagem | {{ui:Acrescentar cópia}}, {{ui:Inserir}}, {{ui:Junta}}, {{ui:Conflitos}}, {{ui:Editar peça}}, {{ui:Fechar}} | Só numa montagem |
| Montagem | {{ui:Voltar}} | Enquanto edita uma peça a partir de uma montagem |
| Editar | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} (um menu: Cortar, Copiar, Colar, Colar no mesmo sítio, Duplicar, Eliminar, Selecionar tudo, Limpar seleção) | Sempre; cada item atua sobre o esboço, o histórico ou a montagem em que está |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (um menu: Medir, Propriedades de massa, Secção, Ângulo de saída, Zebra, Curvatura, {{ui:Planos base}}, depois Isométrica, Frente, Trás, Cima, Baixo, Direita, Esquerda) | Sempre |

Passe com o ponteiro sobre um botão para ver o que faz e a sua tecla. Um botão a cinzento não pode ser usado de momento: por exemplo, os botões de operações enquanto um esboço está aberto, ou {{ui:Junta}} antes de a montagem ter duas peças.

O menu {{ui:Mais}} do grupo Editar lista cada ação de edição com a sua tecla. Aquilo sobre que copiar e colar atuam depende do sítio onde está; ver [Copiar, colar e duplicar](topic:copy-paste). A dica de um item a cinzento indica porque não pode atuar de momento.

O menu {{ui:Exportar}} tem {{ui:STL, para impressão 3D}}, {{ui:3MF, para impressão 3D}}, {{ui:STEP AP242 (sólido exato)}}, {{ui:STEP AP214 (sólido exato)}}, {{ui:STEP (facetado, kernel de malha)}}, {{ui:STEP AP214 (facetado, kernel de malha)}}, {{ui:DXF do esboço ou da face plana}} e {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}}. Os itens de STEP exato escrevem as faces redondas nas suas superfícies verdadeiras; os facetados escrevem-nas como facetas planas.

## O histórico (à esquerda)

O painel à esquerda é o histórico de operações da peça, a lista que o PartCraft reconstrói de cima para baixo.

- O cabeçalho é o nome da peça ("Part1" até lhe mudar o nome).
- **Plano Frente**, **Plano Cima** e **Plano Direita** vêm primeiro. Clique num para o selecionar; fica realçado na vista.
- Por baixo deles ficam as suas operações pela ordem em que foram feitas. Um esboço que uma operação usa fica recuado por baixo dessa operação.
- Uma bandeira na extremidade direita de uma linha indica o seu estado:

| Bandeira | Significado |
|---|---|
| (nenhuma) | Construída, e o esboço está totalmente definido |
| − | Um esboço com definição insuficiente (ainda pode mover-se) |
| + | Um esboço sobredefinido |
| ⚠ | Construída, com um aviso (passe o ponteiro para o ler) |
| ⚠ erro | A operação falhou. Passe o ponteiro para ler porquê, ou clique nela |
| ⚠ não construída | A operação precisa de outra que falhou ou está desligada |
| desligada | Suprimida |

- Cada operação mostra o seu número principal a seguir ao nome, como "25 mm" para uma extrusão ou "Ø6.6 thru" para um furo. Clique duas vezes no número, ou prima {{key:F2}} na linha, para o alterar ali mesmo. Ver [Alterar tamanhos](topic:change-sizes).
- Clique numa operação para a editar à direita. Clique duas vezes num esboço para o abrir.
- Ao recuar, uma linha **Barra de recuo · avançar** fica na lista. As operações abaixo dela ficam a cinzento e não construídas.
- Com uma linha em foco, {{key:Up}} e {{key:Down}} movem-se entre linhas, e {{key:Alt+Up}} / {{key:Alt+Down}} movem a própria operação, quando o histórico o permite.

Numa montagem, o mesmo painel lista em vez disso as **Peças** (a primeira está marcada como "fixa") e as **Juntas**.

### Dados da peça

Por baixo do histórico, a caixa **Peça** lista o **Volume**, a **Área de superfície**, o **Tamanho (X × Y × Z)**, os **Furos passantes**, os **Corpos**, os **Triângulos**, o número de **Operações** e quantas estão a **Falhar**. Os volumes e áreas são do sólido facetado construído pelo núcleo de malha, um pouco abaixo do valor verdadeiro para formas redondas (ver [Operações e as suas opções](topic:features#curves-resolution)).

Numa montagem, a caixa tem o cabeçalho **Montagem**: Peças, Instâncias, Juntas, Não unidas e Interferência.

## A vista 3D (ao centro)

A vista mostra o sólido, os planos base e qualquer esboço ainda não usado por uma operação.

Os planos base são desenhados por inteiro enquanto a peça está vazia. Quando tem um sólido, recuam: desenhados ténues, para não taparem a peça, e os cliques passam através deles até à peça. Voltam por inteiro enquanto escolhe onde esboçar ({{ui:Esboço}} sem nada selecionado) e quando seleciona um no histórico. {{ui:Vistas}} › {{ui:Planos base}} oculta-os por completo; continuam visíveis enquanto escolhe onde esboçar. O PartCraft guarda essa escolha.

- Arraste para rodar a peça, arraste com o botão direito ou o do meio para deslocar a vista, e rode a roda para aproximar no ponteiro. Pormenores em [Teclas e rato](topic:keyboard).
- Passe com o ponteiro sobre uma face, aresta ou plano para o ver acender. Clique para o escolher. As faces realçam-se por inteiro e as arestas são desenhadas e escolhidas por inteiro. {{key:Shift}}+clique reúne várias arestas ou faces. Ficam marcadas.
- O cubo de vistas no canto superior direito roda com a peça: clique numa face, aresta ou canto para olhar a partir daí, arraste-o para rodar, e o botão da casa volta ao início. Ver [O cubo de vistas](topic:view-cube).
- Uma extrusão selecionada mostra uma seta laranja na face final, uma revolução uma seta curva no fim da sua volta: arraste-a para alterar a profundidade ou o ângulo, ou escreva na caixa ao lado. Ver [Alterar tamanhos](topic:change-sizes#drag-it-in-the-view).
- Quando uma peça está vazia, uma caixa com o cabeçalho **Iniciar uma peça** lista os primeiros passos.
- Largue um ficheiro `.partcraft.json` ou `.partcraft-asm.json` em qualquer ponto da vista para o abrir. Um ficheiro `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` largado aí abre-se como corpo sólido.

### Enquanto escolhe arestas ou faces

Depois de {{ui:Boleado}}, {{ui:Chanfre}} ou {{ui:Casca}} sem nada escolhido (ou {{ui:Escolher arestas}} numa dessas operações), a peça mostra-se como estava antes dessa operação. Clique em arestas ou faces para as acrescentar ou retirar; as suas marcas indicam o que está incluído. {{ui:Concluir}} ou {{key:Esc}} termina. Ver [Arredondar, chanfrar e ocar](topic:fillet-chamfer-shell).

### Na folha de desenho

{{ui:Desenho}} substitui a vista 3D pela folha de desenho A3. A roda faz zoom, arrastar com o botão direito ou do meio desloca a vista, e {{key:F}} ajusta. Ver [Criar um desenho](topic:drawing-pdf).

### Enquanto um esboço está aberto

A vista roda para olhar diretamente para o plano do esboço e surge por cima uma camada de esboço 2D. A peça mostra apenas as operações feitas antes deste esboço. Uma faixa no canto superior esquerdo mostra o indicador de estado do esboço ("Totalmente definido", "Definição insuficiente · 3 graus de liberdade" e assim por diante) e o seu nome, como "Sketch2 numa face de Extrude1".

## O painel de propriedades (à direita)

O painel à direita mostra o que estiver selecionado, e o seu cabeçalho indica-o:

- **Peça** (nada selecionado): o **Nome** da peça e a definição **Curvas**.
- Um plano: um botão {{ui:Esboçar nele}}.
- Uma **Face**: o seu tipo (Face plana, Cilindro com o seu raio e eixo, Cone, Esfera ou Toro), a sua área, a operação que a fez, e, para uma face plana, {{ui:Esboçar nesta face}}, {{ui:Normal a}}, {{ui:Exportar face como DXF}}, {{ui:Extrudir a partir dela}}, {{ui:Cortar nela}} e {{ui:Furo aqui}} (ver [Puxar ou empurrar uma face inteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uma **Aresta**: o seu tipo (reta, um círculo com o seu centro e raio, ou uma curva), o seu comprimento e as duas faces entre as quais está (como "face final de Extrude1 e lateral de Extrude1"), com os botões {{ui:Boleado}} e {{ui:Chanfre}}.
- Várias arestas ou faces escolhidas com {{key:Shift}}: quantas são, com {{ui:Boleado}} e {{ui:Chanfre}} para arestas, e {{ui:Limpar}}.
- Uma operação: os seus números e opções, as cotas do seu esboço, depois {{ui:Suprimir}}, {{ui:Reverter até aqui}}, {{ui:Mover para cima}}, {{ui:Mover para baixo}}, {{ui:Eliminar}} e o seu **Nome**.
- Um esboço aberto: o seu estado, as relações que pode acrescentar à seleção, a lista de relações e cotas, **Acrescentar por coordenadas**, e {{ui:Sair do esboço}}, {{ui:Ajustar}} e {{ui:Exportar como DXF}}.
- Na folha de desenho: as definições de corte e pormenor, ou o símbolo GD&T selecionado.
- Numa montagem: a montagem, a peça selecionada, ou a junta selecionada.

Cada caixa de número tem efeito quando prime {{key:Enter}} ou {{key:Tab}}, ou clica fora. A peça reconstrói-se de imediato; não há botão OK. Use {{key:Mod+Z}} para voltar atrás.

## A barra de estado (em baixo)

- À esquerda, as coordenadas do ponteiro no esboço (apenas enquanto um esboço está aberto).
- No meio, mensagens: o que fazer a seguir, e porque algo foi recusado. Leia-a quando parecer que nada acontece.
- Perto da direita, o indicador do núcleo: sempre "Núcleo de malha" nesta versão. Passe o ponteiro para ver o que isso significa. Ver [O núcleo de malha](topic:solid-kernels).
- À direita, um indicador: "A reconstruir…" enquanto a peça reconstrói, depois "Reconstruído em … ms" quando tudo está bem, ou "1 operação a falhar". Numa montagem diz "Posicionado em … ms" ou conta problemas de juntas.

Ver também [Iniciar um manual em Ilustrar](topic:illustrate): a área de trabalho que cria manuais de montagem a partir das suas peças e montagens.

## Em ecrã estreito

Até 760 píxeis de largura, como num telemóvel, a vista mantém o ecrã: a barra de ferramentas é uma linha que desliza na horizontal, e os painéis abrem-se como folhas a partir de uma barra em baixo. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} coloca-a em baixo. Ver [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).
