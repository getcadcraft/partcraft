---
title: Novidades da versão 0.9 (anteriores)
summary: O PartCraft 0.9 acrescenta boleados entre faces e espessamento em sólidos, conjuntos com milhares de peças, um cofre de Documentos com revisões, um suplemento Solid FEM de tensão, dez métodos de arco, secções de aço do Reino Unido, uma fase de Impressão e suplementos de impressão em resina.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, notas de versão, registo de alterações, 0.9, boleado entre faces, esfera rolante, boleado de várias arestas, espessar, sólido a partir de superfícies, STEP shell, sólido IGES, boleados em digitalizações, conjunto grande, visualização simplificada, 20000 peças, documentos, cofre, reservar, revisão, lançamento, onde é usado, ligação Rhino, grasshopper, 3dm, cursores, chão de fábrica, fila de trabalhos, solid fem, elementos finitos, von mises, frequência natural, métodos de arco, arco de 3 pontos, secções de aço do Reino Unido, fase de impressão, resina, goo, ctb, base, planificar, novidades, registo de alterações, 0.8, 0.8.1, versão, novas funcionalidades, análise em tempo real, atualizar enquanto edita, rotura, o que cede primeiro, fator de carga, não linear, cedência, deformação plástica, contacto, calculix, estudo de movimento, folga, superfícies, nurbs, alisar, casco, zebra, engenheiro, gerador, corpo gerado, esboço a partir de uma foto, escalar para impressão, dividir para impressão, retração, chapas de nesting, g-code, desenho, cotar furos, assistente, mcp, idiomas, linhas da barra de ferramentas
from: 1dafd7c8
---

Isto é o que mudou no PartCraft 0.9, em comparação com a 0.8.1. As superfícies de forma livre fecham-se agora em sólidos, os conjuntos com milhares de peças continuam utilizáveis, um cofre de Documentos guarda revisões, e um suplemento Solid FEM verifica a tensão numa peça. Cada item indica onde o encontrar.

## Novo na 0.9.1

- **Exportação STEP exata.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} funcionam agora. Furos, saliências, boleados, cones, esferas e toros são escritos nas suas superfícies verdadeiras, com círculos verdadeiros como arestas, para que outro programa CAD ou CAM possa reconhecer um furo como furo. Lados em spline, roscas modeladas e malhas importadas continuam a ser facetas planas no mesmo sólido. Ver [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exato sai.** Um ficheiro STEP aberto mantém as suas próprias faces planas, cilindros, cones, esferas e toros, por isso {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve-os de volta como superfícies verdadeiras em vez de facetas: uma viga de fornecedor com furos de parafuso sai com as mesmas faces com que entrou, mais o que lhe cortou. As faces em spline, varridas e reviradas do ficheiro continuam a ser facetas, o mesmo acontecendo com os corpos de STL, OBJ e 3MF. Abra de novo o ficheiro STEP de uma peça guardada antes. Ver [Abrir um ficheiro STEP e construir sobre ele](topic:import-step).
- **Círculos verdadeiros no DXF de faces.** {{ui:Exportar}} › {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida escreve agora os furos redondos como círculos, com o centro e o raio próprios do furo, para uma mesa de laser, plasma ou jato de água. As outras arestas redondas continuam a ser facetas.
- **STEP exato para a oficina.** Em {{ui:Fabrico}}, {{ui:STEP exato (coordenadas de trabalho)}} escreve a peça com a origem na origem de trabalho da preparação e Z ao longo do eixo da ferramenta, as coordenadas que o G-code usa. Ver [Criar percursos e G-code](topic:manufacture#exact-step-for-the-shop).

## Novo

### Superfícies e sólidos

- **Boleado entre faces.** Escolha {{ui:Superfícies}} na caixa {{ui:Área de trabalho}}, depois {{ui:Boleado entre faces}}. Escolha as duas faces de um sólido e escreva o raio ({{ui:Raio na extremidade (mm, 0 = o mesmo)}} para um raio que muda ao longo da aresta). A linha de resultado diz quão longe o boleado fica da esfera rolante ideal, e um raio que não encaixa é recusado com a face indicada. {{ui:Boleado de várias arestas}} arredonda muitas arestas num só passo; marque {{ui:Cantos (retalho esférico onde se encontram três)}} para um canto esférico onde se encontram três arestas boleadas de faces planas. Ver [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Espessar num sólido.** {{ui:Dar espessura para obter um sólido}} no mesmo espaço de trabalho dá a uma superfície uma espessura; {{ui:Outro lado}} aumenta-a para o outro lado. Uma dobra ou um cruzamento consigo própria é recusado, com a superfície e o local indicados.
- **Sólidos a partir de superfícies.** As superfícies aparadas podem ser unidas por união, subtração e interseção, e incorporadas na peça como um só passo de anulação. O STEP escreve um sólido como uma casca fechada e o IGES como um sólido; ambos voltam a ler-se como sólido. Se as faces não emparelharem aresta a aresta, o ficheiro recebe faces separadas e a linha de estado diz isso. Os sólidos também podem ser criados no editor de nós; ver [Editor de nós](topic:nodes).
- **Boleados de contorno e variáveis em digitalizações.** Ao ajustar superfícies a uma digitalização, são também procurados boleados de aro (toros) e boleados de raio variável ao longo de uma aresta bastante reta, e são listados com o seu raio. Só foi testado com digitalizações inventadas.

### Conjuntos, documentos e ligações

- **Conjuntos grandes.** As peças que são cópias partilham uma malha, e {{ui:Vistas}} › {{ui:Visualização simplificada}} desenha caixas para que a vista continue a mover-se (liga-se sozinha em conjuntos muito grandes; a escolha e as juntas continuam a usar as peças reais). A árvore de peças mostra as primeiras linhas e um botão {{ui:Mostrar mais 700}} para o resto. Os ficheiros de conjunto podem ter até 50 000 instâncias e 100 000 juntas. Ver [Construir um conjunto](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} no grupo **Ficheiro** abre uma caixa sobre uma pasta de projeto: reservar e entregar, letras de revisão, estados (em trabalho, para revisão, lançado, obsoleto), histórico, onde é usado e lista de materiais. Ver [Documentos e revisões (o cofre)](topic:documents-walkthrough).
- **Ligação Rhino em tempo real.** Um script, `cadcraft_link.py`, observa um documento Rhino ou Grasshopper e envia para o PartCraft apenas o que mudou, onde uma funcionalidade importada se reconstrói com a nova forma. É num só sentido e precisa do Studio. Ver [Ligação .3dm em tempo real](topic:live-3dm-link).
- **Ver os cursores uns dos outros.** Numa sessão partilhada, o cursor de cada pessoa mostra-se com o seu nome e a funcionalidade que selecionou. Ver [Trabalhar em tempo real com outros](topic:work-live).
- **Chão de fábrica.** Ative o suplemento Chão de fábrica em {{ui:Definições}} › {{ui:Suplementos}}. Depois de pós-processar um programa em {{ui:Fabrico}}, o seu separador pode {{ui:Adicionar à fila de trabalhos do chão de fábrica}} ou {{ui:Guardar como ficheiro de trabalho}}. Nunca envia nem inicia uma máquina.

### Análise e peças

- **Suplemento Solid FEM.** Ative {{ui:Solid FEM}} em {{ui:Definições}} › {{ui:Suplementos}} (fica desligado até o ativar) e surge um separador {{ui:Solid FEM}} no painel direito. {{ui:Malhar a peça}}, escolha faces fixas e cargas na vista 3D, {{ui:Resolver}}, e desenhe o deslocamento, a tensão de von Mises ou uma forma modal com {{ui:Mostrar no modelo}}. Ver [Solid FEM: verificação de tensão](topic:solid-fem-check).
- **Arco em esboços, de dez formas.** A seta junto a {{ui:Arco}} na barra de ferramentas do esboço lista: 3 pontos, Início Centro Fim, Início Centro Ângulo, Início Centro Comprimento, Início Fim Ângulo, Início Fim Direção, Início Fim Raio, Centro Início Fim, Centro Início Ângulo, Centro Início Comprimento e Continuar. Ver [Desenhar um arco por dez métodos](topic:sketch-arc-methods).
- **Secções de aço do Reino Unido.** As peças soldadas podem usar 976 secções UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escreva um tamanho como `305x165x40 UB`. Ver [Perfis estruturais](topic:structural-members).

### Impressão

- **Fase de impressão.** O botão {{ui:Fase de impressão}} na barra de ferramentas (suplemento 3D Print, ligado por omissão) coloca os corpos da sua peça numa base tracejada: {{ui:Planificar}}, {{ui:Rodar 90°}}, {{ui:Dispor na base}}, {{ui:Ajustar tudo à base}}, {{ui:Pré-visualizar camadas}}, e depois {{ui:Enviar para impressora 3D}} por USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Nada é enviado até confirmar, e a sua peça nunca é alterada. Para um ficheiro STL ou 3MF, ver [Preparar uma peça para impressão 3D](topic:print-3d).
- **Impressão em resina.** Suplementos em {{ui:Definições}} › {{ui:Suplementos}}, todos desligados até os ativar: um fatiador de resina, um teste de exposição, e os formatos de ficheiro Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. A fatiagem corre numa thread de trabalho, para que a página continue reativa.

## Em todas as aplicações

- Cada sugestão que aparece ao passar o rato é uma dica Bootstrap.
- A dica inicial tem um botão de fecho; fica fechada.
- Uma linha de separadores de painel que não cabe desliza para os lados em vez de ser cortada.
- O separador do navegador mostra o nome do documento aberto antes de PartCraft | CadCraft.
- {{ui:Definições}} mostra a {{ui:Disposição}} do espaço de trabalho como lista pendente de opções, e a caixa de idioma lista todos os idiomas da versão.
- Peso e Temperatura são tipos de unidade nas definições de Unidades.

## Corrigido

- O menu Arco do esboço lista agora todos os métodos.
- O título da barra de suplementos e do separador do navegador foi corrigido em 2026-11-09.

## Limites assumidos

- O STEP exato foi lido de volta no OpenCascade (sólidos válidos, volumes iguais aos calculados à mão). Ainda não foi aberto em todos os programas CAD ou CAM, e um conjunto não é escrito como STEP exato.
- Nada foi impresso numa impressora real. A fatiagem, o G-code e os ficheiros de resina foram lidos de volta pelos nossos próprios programas ou por uma impressora de substituição; nenhum dos formatos de resina foi carregado numa impressora, e os tamanhos e exposições das impressoras são pontos de partida.
- O Solid FEM é linear, isotrópico e elástico, com um material por peça, sem contacto, cedência nem encurvadura. A tensão em faces fixas e cantos vivos depende da malha. É um auxiliar de verificação, não revisto por um engenheiro.
- Os tempos de conjuntos grandes vêm de um servidor sem GPU; um quadro com detalhe total de 20 000 peças ainda leva segundos aí.
- Os boleados funcionam em pares de faces; não há mistura geral de vértices nem boleado entre faces que não se tocam.
- A ligação Rhino nunca correu dentro do Rhino ou do Grasshopper reais. O Documentos foi testado por dois programas numa pasta, não por duas pessoas numa partilha de rede.
- O ajuste de superfícies a uma digitalização real ainda não teve a sua verificação manual. As línguas além do inglês são rascunhos automáticos.
- Os instaladores do Windows não têm assinatura de código, e a imagem de disco do macOS não está notarizada. Ver [Resolução de problemas](topic:troubleshooting).

As alterações anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).

## Anterior: 0.8 e 0.8.1

Isto é o que mudou no PartCraft 0.8 e 0.8.1, em comparação com a 0.7. A simulação responde enquanto edita e indica o que cede primeiro, os conjuntos passam a ter estudos de movimento, e novos espaços de trabalho criam superfícies de forma livre e peças dimensionadas pela física. A 0.8.1 é uma pequena versão de correções.

### Novo

**Simulação**

- **Atualizar enquanto edito.** Marque {{ui:Atualizar enquanto edito}} no bloco Resolver e as respostas acompanham as suas alterações. Mude uma cota, uma carga ou o material e uma resposta rápida, feita com elementos quatro vezes maiores, aparece de imediato; quando parar durante cerca de um segundo, a própria resposta refinada do estudo substitui-a. Os resultados indicam qual das duas está a ver. Numa consola de aço, a resposta rápida ficou dentro de 1 % na deformação e cerca de 4 % na tensão, face à refinada. Ver [Verificar tensão e deformação](topic:simulation#update-while-you-edit-live).
- **O que cede primeiro.** Para um estudo estático ou de encurvadura, {{ui:O que cede primeiro?}} no bloco **Levar à rotura** escala as cargas até a peça ceder. Lista, do pior para o melhor, o fator de carga até à primeira cedência (com um marcador vermelho onde a tensão atinge o pico) e o fator de carga até à encurvadura. Um fator abaixo de 1 significa que a peça já cede tal como está carregada, e o painel Problemas mostra um erro. Os fatores vêm de um estudo linear, por isso valem o que ele valer. Ver [Verificar tensão e deformação](topic:simulation#find-out-what-breaks-first-break-it).
- **Cedência e contacto.** Dois tipos de estudo a mais: um não linear, em que o material segue a sua reta até à tensão de cedência e depois um declive mais suave, com a deformação plástica desenhada; e um de contacto, em que peças separadas se empurram (sem atrito) ou ficam presas (ligadas). Um passo de carga que não se estabiliza, ou peças que se enterram demasiado umas nas outras, aparecem no painel Problemas. O atrito, o deslizamento grande, as grandes rotações, as grandes deformações e a fadiga não são resolvidos. Ver [Verificar tensão e deformação](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ficheiros para CalculiX.** {{ui:Exportar}} › {{ui:Ficheiro CalculiX (.inp)}} guarda o estudo para o CalculiX, um programa à parte que se instala e executa por conta própria; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lê o seu ficheiro de resultados de volta para a mesma malha. O PartCraft nunca inicia esse programa, e avisa se a peça mudou desde que o ficheiro foi guardado.

**Conjuntos**

- **Estudos de movimento.** {{ui:Conjunto}} › {{ui:Movimento}} conduz o valor de uma junta ao longo de um tempo que indica (velocidade constante, suavizada, sinusoidal, ou ida e volta), coloca o conjunto em cada passo com as suas juntas e malhas fechadas, e indica quais as peças que chocam e a que distância ficam umas das outras. {{ui:Adicionar um ponto}} desenha a posição, a velocidade e a aceleração de um ponto, o valor da junta e a folga em função do tempo; {{ui:Guardar CSV}} e {{ui:Guardar gráfico}} escrevem-nos para ficheiro. Após {{ui:Executar}}, a barra de passos da execução move o conjunto para qualquer passo. As definições do estudo são guardadas no ficheiro do conjunto. A velocidade e a aceleração vêm das posições registadas, por isso use mais passos se um pico agudo aparecer demasiado baixo. Ver [Verificar um conjunto quanto a choques e movimento](topic:check-assembly#a-motion-study).

**Superfícies e peças a partir da física**

- **Um espaço de trabalho de Superfícies.** Escolha {{ui:Superfícies}} na caixa {{ui:Área de trabalho}} para curvas e superfícies NURBS ao lado da peça: {{ui:Curva}}, {{ui:Loft}}, {{ui:Varrimento}}, {{ui:Semelhança}} e {{ui:Zebra}}, com a continuidade (G0, G1 ou G2) medida sobre as superfícies exatas, e uma aresta pior do que o pedido listada em Problemas com uma correção de Semelhança. {{ui:Alisar}} mede as linhas do casco quanto a inflexões e saltos de curvatura, e reconstrói as irregulares dentro da sua tolerância. As superfícies são guardadas no ficheiro da peça e não alteram as funcionalidades da peça. Ver [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **O espaço de trabalho Engenheiro.** Escolha {{ui:Engenheiro}} no comutador de espaços de trabalho, escolha um gerador e clique em {{ui:Novo}}: um script dimensiona uma peça a partir daquilo que deve fazer (aquecer para mover, caudais, pressão, material, processo de impressão) com fórmulas clássicas, e constrói-a; depois devolve os números que usou com as suas fontes, as suas verificações de fabrico e os ficheiros para as ferramentas de análise. As mesmas entradas dão a mesma peça em qualquer computador. O gerador fica guardado na peça, e abrir uma peça nunca executa um script. Ver [Peças a partir da física: geradores](topic:engineer-generators) e [Escrever um gerador](topic:write-a-generator).

**Esboço, desenhos e fabrico**

- **Um esboço a partir de uma foto.** {{ui:Operações}} › {{ui:Mais}} › {{ui:Esboço a partir de uma foto…}} traça uma imagem de uma peça plana sobre um fundo liso (contorno e furos) ou um desenho a caneta em linhas, arcos e círculos. Indica um comprimento, verifica a pré-visualização e cria o esboço. Ver [Noções básicas de esboço](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar e dividir para impressão.** {{ui:Exportar}} › {{ui:Escalar para impressão (STL ou 3MF)…}} escala por eixo sem alterar a peça, por exemplo para uma margem de retração. {{ui:Exportar}} › {{ui:Dividir para impressão (um zip de peças)…}} corta uma peça grande demais para a sua base em peças numeradas, unidas por pinos, chavetas, rabos de andorinha, furos de cavilha ou cavidades de íman. Ver [Imprimir em 3D](topic:print-3d).
- **Chapas de nesting para G-code.** {{ui:Exportar}} › {{ui:Chapas de nesting para G-code}} lê um DXF com nesting e cria um programa por chapa, através do pós-processador que escolher: primeiro os furos e recortes, depois os contornos. Não planeia entradas, a ordem de corte nem as arestas partilhadas. Ver [Dispor peças planas em chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desenhos que fazem mais sozinhos.** {{ui:Folha}} › {{ui:Automático}} escolhe a menor folha de tamanho A que contém as vistas à maior escala normalizada até 1:1. {{ui:Cotar os furos}} põe uma marca de centro em cada furo, uma chamada por tamanho e as posições a partir do canto inferior esquerdo da vista. Ver [Criar um desenho](topic:drawing-pdf).

**Em todas as aplicações**

- **Idiomas.** As aplicações chegam em 54 idiomas. Os que vão além do inglês são rascunhos automáticos até um falante nativo os rever.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe Quebrar (como antes), 2 linhas ou 1 linha; uma barra que não cabe desliza para os lados. A faixa de Funcionalidades do PartCraft mostra a ferramenta mais usada em grande e esconde as variantes atrás de um botão dividido.
- **Ligar a sua IA.** O Studio é o centro para ligar um assistente próprio às oito aplicações, com permissão só de leitura, de sugestão ou de edição por aplicação. Um assistente ligado pode dimensionar uma peça a partir de uma frase, como um suporte para uma carga, mostrar o seu raciocínio e todas as verificações, e construí-la; indica o que não verificou (concentração de tensão, fadiga, fluência em plásticos). Ver [Usar o PartCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Congelamento do cursor em ecrã inteiro.** A escolha ao passar o rato passa agora por um limitador. A causa é a nossa melhor leitura e não foi confirmada com quem a reportou.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem mudar de idioma enquanto correm; antes, eram apenas em inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.

### Ainda não nesta versão

- Ligar a sua IA não está concluído: a ligação com um clique dentro do Studio, o conector alojado para IA no navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não estão prometidos. O Studio não tem IA própria.
- O Studio não tem assinatura de código: o Windows pode avisar, e o macOS pede clique com o botão direito e depois Abrir. Ver [Resolução de problemas](topic:troubleshooting).
- As cadeias de tolerâncias continuam a ser numa só direção: ver [Cadeias de tolerâncias](topic:tolerance-stackup).
- O resto está listado em [O que ainda não está implementado](topic:not-built-yet).

As alterações anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).
