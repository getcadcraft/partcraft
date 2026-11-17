---
title: Novidades na 0.9
summary: O PartCraft 0.9 acrescenta arredondamentos entre faces e espessamento em sólidos, montagens com milhares de peças, um cofre de Documentos com revisões, um add-on Solid FEM para tensões, dez métodos de arco, perfis de aço do Reino Unido, uma fase de Impressão e add-ons de impressão em resina.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, 0.9, arredondamento entre faces, bola rolante, arredondar várias arestas, espessar, sólido a partir de superfícies, step shell, iges sólido, arredondamentos em digitalizações, montagem grande, visualização simplificada, 20000 peças, documentos, cofre, revisão, lançamento, onde é usado, ligação Rhino, grasshopper, 3dm, cursores, chão de fábrica, fila de trabalhos, solid fem, elementos finitos, von mises, frequência natural, métodos de arco, arco de 3 pontos, perfis de aço do Reino Unido, fase de impressão, resina, goo, ctb, base, planificar, novidades, notas de lançamento, alterações, 0.8, 0.8.1, versão, novas funcionalidades, análise em direto, atualizar ao editar, partir, o que parte primeiro, fator de carga, não linear, cedência, deformação plástica, contacto, calculix, estudo de movimento, folga, superfícies, nurbs, suavizar, casco, zebra, engenheiro, gerador, corpo gerado, esboço a partir de uma foto, escalar para impressão, dividir para impressão, retração, nesting, g-code, desenho, cotar furos, assistente, mcp, idiomas, barras de ferramentas
from: 96d9fbfa
---

O que mudou no PartCraft 0.9, em comparação com a 0.8.1. As superfícies livres fecham-se agora em sólidos, as montagens com milhares de peças continuam utilizáveis, um cofre de Documentos guarda as revisões, e um add-on Solid FEM verifica a tensão numa peça. Cada item indica onde o encontrar.

## Novo na 0.9.1

- **STEP exato na exportação.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} funcionam agora. Furos, saliências, arredondamentos, cones, esferas e toros são escritos nas suas superfícies verdadeiras, com círculos verdadeiros como arestas, para que outro programa de CAD ou CAM possa reconhecer um furo como furo. Os lados em spline, as roscas modeladas e as malhas importadas continuam como facetas planas no mesmo sólido. Ver [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exato sai.** Um ficheiro STEP que abre mantém as suas próprias faces planas, cilindros, cones, esferas e toros, pelo que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} os escreve de volta como superfícies verdadeiras em vez de facetas: uma viga de um fornecedor com furos de parafusos sai com as mesmas faces com que entrou, mais o que lhe cortou. As faces em spline, varridas e de revolução do ficheiro continuam como facetas, e o mesmo acontece com corpos vindos de STL, OBJ e 3MF. Abra de novo o ficheiro STEP para uma peça guardada antes. Ver [Abrir um ficheiro STEP e construir sobre ele](topic:import-step).
- **Círculos verdadeiros no DXF de faces.** {{ui:Exportar}} › {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida escreve agora os furos redondos como círculos, com o centro e o raio do próprio furo, para uma mesa de laser, plasma ou jato de água. As outras arestas redondas continuam como facetas.
- **STEP exato para a oficina.** Em {{ui:Fabrico}}, {{ui:STEP exato (coordenadas de trabalho)}} escreve a peça com a sua origem na origem de trabalho da preparação e Z ao longo do eixo da ferramenta, as coordenadas que o G-code usa. Ver [Criar trajetórias e G-code](topic:manufacture#exact-step-for-the-shop).

## Novo

### Superfícies e sólidos

- **Arredondamento entre faces.** Escolha {{ui:Superfícies}} na caixa {{ui:Área de trabalho}}, depois {{ui:Boleado entre faces}}. Escolha as duas faces de um sólido e escreva o raio (e {{ui:Raio na extremidade (mm, 0 = o mesmo)}} para um raio que muda ao longo da aresta). A linha de resultado indica quão longe o arredondamento está da bola rolante ideal, e um raio que não cabe é recusado com a face indicada. {{ui:Boleado de várias arestas}} arredonda muitas arestas num só passo; marque {{ui:Cantos (retalho esférico onde se encontram três)}} para um canto esférico onde se encontram três arestas arredondadas de faces planas. Ver [Superfícies livres (NURBS)](topic:nurbs-surfaces).
- **Dar espessura para obter um sólido.** {{ui:Dar espessura para obter um sólido}} na mesma área de trabalho dá uma espessura a uma superfície; {{ui:Outro lado}} a faz crescer para o outro lado. Uma dobra ou um cruzamento consigo própria é recusado, com a superfície e o local indicados.
- **Sólidos a partir de superfícies.** As superfícies recortadas podem ser unidas com união, subtração e interseção e incorporadas na peça como um só passo de anulação. O STEP escreve um sólido como uma casca fechada e o IGES como um sólido; ambos voltam a ler-se como sólido. Se as faces não coincidirem aresta a aresta, o ficheiro recebe faces separadas e a barra de estado indica-o. Os sólidos também podem ser criados no editor de nós; ver [Editor de nós](topic:nodes).
- **Arredondamentos de cantos e variáveis em digitalizações.** Ao ajustar superfícies a uma digitalização, arredondamentos de canto (toros) e arredondamentos de raio variável ao longo de uma aresta razoavelmente reta também são procurados e listados com o seu raio. Foi testado apenas com digitalizações fictícias.

### Montagens, documentos e ligações

- **Montagens grandes.** As peças que são cópias partilham uma malha, e {{ui:Vistas}} › {{ui:Visualização simplificada}} desenha caixas para que a vista continue a mover-se (liga-se sozinha em montagens muito grandes; a seleção e as juntas continuam a usar as peças reais). A árvore de peças mostra as primeiras linhas e um botão {{ui:Mostrar mais 700}} para o resto. Os ficheiros de montagem podem conter até 50 000 instâncias e 100 000 juntas. Ver [Criar uma montagem](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} no grupo **Ficheiro** abre uma caixa de diálogo sobre uma pasta de projeto: retirar e devolver, letras de revisão, estados (em curso, para revisão, libertado, obsoleto), histórico, onde é usado e lista de materiais. Ver [Documentos e revisões (o cofre)](topic:documents-walkthrough).
- **Ligação Rhino em direto.** Um script, `cadcraft_link.py`, vigia um documento do Rhino ou do Grasshopper e envia para o PartCraft apenas o que mudou, onde uma operação importada se reconstrói com a nova forma. É num só sentido e precisa do Studio. Ver [Ligação .3dm em direto](topic:live-3dm-link).
- **Ver os cursores uns dos outros.** Numa sessão partilhada, o cursor de cada pessoa aparece com o seu nome e a operação que tem selecionada. Ver [Trabalhar em direto com outros](topic:work-live).
- **Chão de fábrica.** Ative o add-on Chão de fábrica em {{ui:Definições}} › {{ui:Suplementos}}. Depois de publicar um programa em {{ui:Fabrico}}, o seu separador pode {{ui:Adicionar à fila de trabalhos do chão de fábrica}} ou {{ui:Guardar como ficheiro de trabalho}}. Nunca envia nem inicia uma máquina.

### Análise e peças

- **Add-on Solid FEM.** Ative {{ui:Solid FEM}} em {{ui:Definições}} › {{ui:Suplementos}} (fica desativado até o fazer) e surge um separador {{ui:Solid FEM}} no painel direito. {{ui:Criar malha da peça}}, escolha faces fixas e cargas na vista 3D, {{ui:Resolver}}, e desenhe o deslocamento, a tensão de von Mises ou uma forma modal com {{ui:Mostrar no modelo}}. Ver [Solid FEM: uma verificação de tensão](topic:solid-fem-check).
- **Arco em esboços, de dez formas.** A seta ao lado de {{ui:Arco}} na barra de esboço lista 3 pontos, Início Centro Fim, Início Centro Ângulo, Início Centro Comprimento, Início Fim Ângulo, Início Fim Direção, Início Fim Raio, Centro Início Fim, Centro Início Ângulo, Centro Início Comprimento e Continuar. Ver [Desenhar um arco por dez métodos](topic:sketch-arc-methods).
- **Perfis de aço do Reino Unido.** As estruturas soldadas podem usar 976 perfis UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escreva um tamanho como `305x165x40 UB`. Ver [Perfis estruturais](topic:structural-members).

### Impressão

- **Fase de impressão.** O botão {{ui:Fase de impressão}} na barra de ferramentas (add-on Impressão 3D, ligado por predefinição) coloca os corpos da sua peça numa base tracejada: {{ui:Planificar}}, {{ui:Rodar 90°}}, {{ui:Dispor na base}}, {{ui:Ajustar tudo na base}}, {{ui:Pré-visualizar camadas}}, e depois {{ui:Enviar para impressora 3D}} por USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Nada é enviado até confirmar, e a peça nunca é alterada. Para um ficheiro STL ou 3MF, ver [Preparar uma peça para impressão 3D](topic:print-3d).
- **Impressão em resina.** Add-ons em {{ui:Definições}} › {{ui:Suplementos}}, todos desligados até os ativar: um fatiador de resina, um teste de exposição, e os formatos de ficheiro Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. A fatiagem corre numa thread de trabalho, pelo que a página continua responsiva.

## Em todas as aplicações

- Cada dica ao passar o ponteiro é uma dica Bootstrap.
- A dica inicial tem um botão de fecho; fica fechada.
- Uma linha de separadores de um painel que não cabe desliza na horizontal em vez de ficar cortada.
- O separador do navegador mostra o nome do documento aberto antes de PartCraft | CadCraft.
- {{ui:Definições}} mostra a {{ui:Disposição}} da área de trabalho como uma lista de opções, e a caixa de idiomas lista todos os idiomas que a versão tem.
- Peso e Temperatura são tipos de unidade nas definições de Unidades.

## Corrigido

- O menu Arco do esboço lista agora todos os métodos.
- O título do add-on na barra de ferramentas e do separador do navegador foram corrigidos em 2026-11-09.

## Limites honestos

- O STEP exato foi lido de volta no OpenCascade (sólidos válidos, volumes iguais aos calculados à mão). Ainda não foi aberto em todos os programas de CAD ou CAM, e uma montagem não é escrita como STEP exato.
- Nada foi impresso numa impressora real. A fatiagem, o G-code e os ficheiros de resina foram lidos de volta pelos nossos próprios programas ou por uma impressora de substituição; nenhum dos formatos de resina foi carregado numa impressora, e os tamanhos e exposições das impressoras são pontos de partida.
- O Solid FEM é linear, isotrópico e elástico, com um material por peça, sem contacto, cedência ou encurvadura. A tensão em faces fixas e cantos vivos depende da malha. É um auxiliar de verificação, não revisto por um engenheiro.
- Os tempos de montagens grandes vêm de um servidor sem GPU; uma imagem em detalhe completo de 20 000 peças ainda demora segundos aí.
- Os arredondamentos funcionam em pares de faces; não há mistura de vértice geral nem arredondamento entre faces que não se tocam.
- A ligação Rhino nunca correu dentro do Rhino ou do Grasshopper reais. O Documentos foi testado por dois programas numa mesma pasta, não por duas pessoas numa partilha de rede.
- O ajuste de superfícies a uma digitalização real ainda não teve a sua verificação manual. As línguas além do inglês são rascunhos automáticos.
- Os instaladores do Windows não têm assinatura de código, e a imagem de disco do macOS não está notarizada. Ver [Resolução de problemas](topic:troubleshooting).

As alterações anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 e 0.8.1

Estas são as alterações do PartCraft 0.8 e 0.8.1, em comparação com a 0.7. A simulação responde enquanto edita e indica o que parte primeiro, as montagens recebem estudos de movimento, e novas áreas de trabalho criam superfícies livres e peças dimensionadas pela física. A 0.8.1 é uma pequena versão de correções.

### Novo

**Simulação**

- **Atualizar ao editar.** Marque {{ui:Atualizar ao editar}} no bloco Resolver e as respostas acompanham as suas edições. Altere uma dimensão, uma carga ou o material e uma resposta rápida, feita com elementos quatro vezes maiores, aparece de imediato; quando parar cerca de um segundo, a própria resposta refinada do estudo substitui-a. Os resultados indicam qual das duas está a ver. Numa consola de aço, a resposta rápida ficou a menos de 1 % na deflexão e a cerca de 4 % na tensão da refinada. Ver [Verificar tensão e deflexão](topic:simulation#update-while-you-edit-live).
- **O que parte primeiro.** Para um estudo estático ou de encurvadura, {{ui:O que cede primeiro?}} no bloco **Partir** escala as cargas até a peça ceder. Lista, do pior para o melhor, o fator de carga até à cedência (com um marcador vermelho onde a tensão atinge o pico) e o fator de carga até à encurvadura. Um fator abaixo de 1 significa que a peça já cede tal como carregada, e Problemas mostra um erro. Os fatores vêm de um estudo linear, por isso valem o que ele vale. Ver [Verificar tensão e deflexão](topic:simulation#find-out-what-breaks-first-break-it).
- **Cedência e contacto.** Mais dois tipos de estudo: um não linear em que o material segue a sua reta até à tensão de cedência e depois uma inclinação mais suave, com a deformação plástica representada, e um de contacto em que peças separadas se empurram (sem atrito) ou ficam presas (ligadas). Um passo de carga que não se estabiliza, ou peças que se enterram demasiado umas nas outras, aparecem no painel Problemas. O atrito, o deslizamento grande, as rotações grandes, as deflexões grandes e a fadiga não são resolvidos. Ver [Verificar tensão e deflexão](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks para o CalculiX.** {{ui:Exportar}} › {{ui:Deck CalculiX (.inp)}} guarda o estudo para o CalculiX, um programa à parte que instala e executa você próprio; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lê o seu ficheiro de resultados de volta para a mesma malha. O PartCraft nunca inicia esse programa, e avisa se a peça mudou desde que o deck foi guardado.

**Montagens**

- **Estudos de movimento.** {{ui:Montagem}} › {{ui:Movimento}} conduz o valor de uma junta ao longo de um tempo que dá (velocidade constante, suavizada, sinusoidal, ou ida e volta), posiciona a montagem em cada passo com as suas juntas e circuitos fechados, e indica que peças colidem e quão perto ficam. {{ui:Acrescentar um ponto}} representa a posição, a velocidade e a aceleração de um ponto, o valor da junta e a folga ao longo do tempo; {{ui:Guardar CSV}} e {{ui:Guardar gráfico}} escrevem-nos. Depois de {{ui:Executar}}, o Avançar pela corrida move a montagem para qualquer passo. As definições do estudo são guardadas no ficheiro da montagem. A velocidade e a aceleração vêm das posições registadas, pelo que deve usar mais passos se um pico acentuado aparecer baixo. Ver [Verificar colisões e movimento de uma montagem](topic:check-assembly#a-motion-study).

**Superfícies e peças a partir da física**

- **Uma área de trabalho Superfícies.** Escolha {{ui:Superfícies}} na caixa {{ui:Área de trabalho}} para curvas e superfícies NURBS ao lado da peça: {{ui:Curva}}, {{ui:Loft}}, {{ui:Varrimento}}, {{ui:Semelhança}} e {{ui:Zebra}}, com continuidade (G0, G1 ou G2) medida nas superfícies exatas, e uma aresta pior do que pediu listada em Problemas com uma correção de Semelhança. {{ui:Alisar}} mede linhas de casco à procura de inflexões e saltos de curvatura, e reconstrói as que não são suaves dentro da tolerância. As superfícies são guardadas no ficheiro da peça e não alteram as operações da peça. Ver [Superfícies livres (NURBS)](topic:nurbs-surfaces).
- **A área de trabalho Engenheiro.** Escolha {{ui:Engenheiro}} na caixa de áreas de trabalho, escolha um gerador e clique em {{ui:Novo}}: um script dimensiona uma peça a partir do que deve fazer (aquecer para mover, caudais, pressão, material, processo de impressão) com fórmulas de manual e constrói-a, depois devolve os números que usou com as suas fontes, as suas verificações de fabrico e ficheiros para ferramentas de análise. As mesmas entradas dão a mesma peça em qualquer computador. O gerador fica guardado na peça, e abrir uma peça nunca executa um script. Ver [Peças a partir da física: geradores](topic:engineer-generators) e [Escrever um gerador](topic:write-a-generator).

**Esboços, desenhos e fabrico**

- **Um esboço a partir de uma foto.** {{ui:Operações}} › {{ui:Mais}} › {{ui:Esboço a partir de uma foto…}} traça uma imagem de uma peça plana sobre um fundo liso (contorno e furos) ou um desenho a caneta em linhas, arcos e círculos. Dá um comprimento, verifica a pré-visualização e cria o esboço. Ver [Noções básicas de esboço](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar e dividir para impressão.** {{ui:Exportar}} › {{ui:Escalar para impressão (STL ou 3MF)…}} escala por eixo sem alterar a peça, por exemplo para uma margem de retração. {{ui:Exportar}} › {{ui:Dividir para impressão (um zip de peças)…}} corta uma peça grande demais para a sua base em peças numeradas unidas por pinos, chavetas, rabos de andorinha, furos de cavilhas ou bolsas de ímanes. Ver [Imprimir em 3D](topic:print-3d).
- **Nesting para G-code.** {{ui:Exportar}} › {{ui:Chapas de nesting para G-code}} lê um DXF em nesting e cria um programa por chapa através do pós-processador que escolher: primeiro os furos e recortes, depois os contornos. Não planeia entradas, a ordem de corte nem arestas partilhadas. Ver [Nesting de peças planas em chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desenhos que fazem mais sozinhos.** {{ui:Folha}} › {{ui:Automático}} escolhe a folha A menor que cabe as vistas à maior escala padrão até 1:1. {{ui:Cotar os furos}} põe uma marca de centro em cada furo, uma chamada por tamanho e as posições a partir do canto inferior esquerdo da vista. Ver [Criar um desenho](topic:drawing-pdf).

**Em todas as aplicações**

- **Idiomas.** As aplicações existem em 54 idiomas. Os restantes além do inglês são rascunhos automáticos até um falante nativo os rever.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe Quebrar (como antes), 2 linhas ou 1 linha; uma barra que não cabe desliza na horizontal. A faixa de Operações do PartCraft mostra a ferramenta mais usada em tamanho grande e esconde as variantes atrás de um botão dividido.
- **Ligue a sua IA.** O Studio é o centro para ligar um assistente de IA seu a todas as oito aplicações, com permissão de só leitura, sugestão ou edição por aplicação. Um assistente ligado pode dimensionar uma peça a partir de uma frase, como um suporte para uma carga, mostrar o seu raciocínio e todas as verificações, e construí-la; indica o que não verificou (concentração de tensão, fadiga, fluência em plásticos). Ver [Usar o PartCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Bloqueio do cursor em ecrã completo.** A seleção ao passar o ponteiro é agora limitada na taxa. A causa é a nossa melhor leitura e não foi confirmada com a pessoa que a reportou.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem mudar de idioma enquanto correm; antes, eram apenas em inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.

### Ainda não nesta versão

- A ligação da sua IA não está concluída: a ligação com um clique dentro do Studio, o conector alojado para IA de navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não estão prometidos. O Studio não tem IA própria.
- O Studio não tem assinatura de código: o Windows pode avisar, e o macOS pede clique com o botão direito e depois Abrir. Ver [Resolução de problemas](topic:troubleshooting).
- Os encabeçamentos de perfis continuam com uma só direção: ver [Tolerâncias em cadeia](topic:tolerance-stackup).
- O resto está listado em [O que ainda não está implementado](topic:not-built-yet).

As alterações anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).
