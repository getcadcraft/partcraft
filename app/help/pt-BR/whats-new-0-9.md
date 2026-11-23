---
title: Novidades na versão 0.9 (anteriores)
summary: O PartCraft 0.9 acrescenta arredondamentos entre faces e espessamento em sólidos, montagens com milhares de peças, um cofre de Documentos com revisões, um complemento Solid FEM de tensão, dez métodos de arco, tamanhos de perfis do Reino Unido, uma etapa de Impressão e complementos de impressão em resina.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, notas de versão, registro de alterações, 0.9, arredondamento entre faces, esfera rolante, arredondar várias arestas, espessar, sólido a partir de superfícies, casca STEP, sólido IGES, arredondamentos em digitalizações, montagem grande, exibição leve, 20000 peças, documentos, cofre, check out, revisão, versão, onde é usado, link Rhino, Grasshopper, 3dm, cursores, chão de fábrica, fila de trabalhos, solid fem, elementos finitos, von mises, frequência natural, métodos de arco, arco de 3 pontos, perfis de aço do Reino Unido, etapa de impressão, resina, goo, ctb, mesa, planificar, 0.8, 0.8.1, versão, novos recursos, análise ao vivo, atualizar enquanto edita, o que quebra, fator de carga, não linear, escoamento, deformação plástica, contato, calculix, estudo de movimento, folga, superfícies, nurbs, suavizar, casco, zebra, engineer, gerador, corpo gerado, esboço a partir de uma foto, escala para impressão, dividir para impressão, contração, folhas encaixadas, G-code, desenho, cotar furos, assistente, mcp, idiomas, linhas da barra de ferramentas
from: 1dafd7c8
---

Isto é o que mudou no PartCraft 0.9, em comparação com a 0.8.1. Superfícies de forma livre agora se fecham em sólidos, montagens com milhares de peças continuam utilizáveis, um cofre de Documentos guarda revisões, e um complemento Solid FEM verifica a tensão numa peça. Cada item diz onde encontrá-lo.

## Novidades na 0.9.1

- **Exportação STEP exata.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} agora funcionam. Furos, saliências, arredondamentos, cones, esferas e toros são gravados nas suas superfícies verdadeiras, com círculos verdadeiros como arestas, de modo que outro programa CAD ou CAM possa reconhecer um furo como furo. Arestas em spline, roscas modeladas e malhas importadas continuam como facetas planas no mesmo sólido. Veja [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exato sai.** Um arquivo STEP que você abre mantém suas próprias faces planas, cilindros, cones, esferas e toros, então {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} os grava de volta como superfícies verdadeiras, e não como facetas: um perfil de fornecedor com furos de parafuso sai com as mesmas faces com que entrou, mais o que você cortar nele. Faces em spline, varridas e de revolução do arquivo continuam como facetas, e assim também os corpos de STL, OBJ e 3MF. Abra de novo o arquivo STEP de uma peça salva antes. Veja [Abrir um arquivo STEP e construir sobre ele](topic:import-step).
- **Círculos verdadeiros no DXF da face.** {{ui:Exportar}} › {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida agora grava os furos redondos como círculos, com o próprio centro e raio do furo, para uma mesa de laser, plasma ou jato d'água. Outras arestas redondas continuam como facetas.
- **STEP exato para a oficina.** Em {{ui:Manufatura}}, {{ui:STEP exato (coordenadas de trabalho)}} grava a peça com a origem na origem da peça da preparação e Z ao longo do eixo da ferramenta, as coordenadas que o G-code usa. Veja [Gerar trajetórias e G-code](topic:manufacture#exact-step-for-the-shop).

## Novidades

### Superfícies e sólidos

- **Concordância entre faces.** Escolha {{ui:Superfícies}} na caixa {{ui:Ambiente}} e depois {{ui:Concordância entre faces}}. Escolha as duas faces de um sólido e digite o raio (e {{ui:Raio na extremidade (mm, 0 = o mesmo)}} para um raio que muda ao longo da aresta). A linha de resultado diz quanto a concordância se afasta da esfera rolante ideal, e um raio que não cabe é recusado com a face nomeada. {{ui:Concordância de várias arestas}} arredonda muitas arestas de uma só vez; marque {{ui:Cantos (retalho esférico onde três se encontram)}} para um canto esférico onde se encontram três arestas arredondadas de faces planas. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Espessar para formar um sólido.** {{ui:Dar espessura para formar um sólido}} no mesmo ambiente dá espessura a uma superfície; {{ui:Outro lado}} a faz crescer para o outro lado. Uma dobra ou um cruzamento consigo mesma é recusado, com a superfície e o local nomeados.
- **Sólidos a partir de superfícies.** Superfícies aparadas podem ser unidas por união, subtração e interseção e incorporadas à peça como um único passo de desfazer. O STEP grava um sólido como um casco fechado e o IGES como um sólido; ambos voltam como sólido. Se as faces não casarem aresta por aresta, o arquivo recebe faces separadas e a barra de status informa isso. Sólidos também podem ser criados no editor de nós; veja [Editor de nós](topic:nodes).
- **Arredondamentos de aro e de raio variável em digitalizações.** Ao ajustar superfícies a uma digitalização, arredondamentos de aro (toros) e arredondamentos de raio variável ao longo de uma aresta razoavelmente reta também são procurados e listados com seu raio. Foi testado somente em digitalizações simuladas.

### Montagens, documentos e links

- **Montagens grandes.** Peças que são cópias compartilham uma malha, e {{ui:Vistas}} › {{ui:Exibição leve}} desenha caixas para que a vista continue se movendo (ela liga sozinha em montagens muito grandes; a seleção e as juntas ainda usam as peças reais). A árvore de peças mostra suas primeiras linhas e um botão {{ui:Mostrar mais 700}} para o restante. Arquivos de montagem podem conter até 50.000 instâncias e 100.000 juntas. Veja [Criar uma montagem](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} no grupo **Arquivo** abre uma caixa de diálogo sobre uma pasta de projeto: fazer check out e check in, letras de revisão, estados (em andamento, para revisão, liberado, obsoleto), histórico, onde é usado e lista de materiais. Veja [Documentos e revisões (o cofre)](topic:documents-walkthrough).
- **Link ao vivo com o Rhino.** Um único script, `cadcraft_link.py`, observa um documento do Rhino ou do Grasshopper e envia para o PartCraft somente o que mudou; ali, um recurso importado é reconstruído com a nova forma. É de uma só via e precisa do Studio. Veja [Link 3dm ao vivo](topic:live-3dm-link).
- **Veja os cursores uns dos outros.** Numa sessão compartilhada, o cursor de cada pessoa aparece com seu nome e com o recurso que ela selecionou. Veja [Trabalhar ao vivo com outras pessoas](topic:work-live).
- **Chão de fábrica.** Ative o complemento Chão de fábrica em {{ui:Configurações}} › {{ui:Complementos}}. Depois que você envia um programa em {{ui:Manufatura}}, a guia dele pode {{ui:Adicionar à fila de trabalhos da fábrica}} ou {{ui:Salvar como arquivo de trabalho}}. Ele nunca envia nem inicia uma máquina.

### Análise e peças

- **Complemento Solid FEM.** Ative {{ui:Solid FEM}} em {{ui:Configurações}} › {{ui:Complementos}} (ele fica desligado até você ativá-lo) e uma guia {{ui:Solid FEM}} aparece no painel direito. {{ui:Malhar a peça}}, escolha faces fixas e cargas na vista 3D, {{ui:Resolver}}, e desenhe o deslocamento, a tensão de von Mises ou uma forma modal com {{ui:Mostrar no modelo}}. Veja [Solid FEM: uma verificação de tensão](topic:solid-fem-check).
- **Arco nos esboços, de dez formas.** A seta ao lado de {{ui:Arco}} na barra de ferramentas do esboço lista: 3 pontos, Início Centro Fim, Início Centro Ângulo, Início Centro Comprimento, Início Fim Ângulo, Início Fim Direção, Início Fim Raio, Centro Início Fim, Centro Início Ângulo, Centro Início Comprimento e Continuar. Veja [Desenhar um arco por dez métodos](topic:sketch-arc-methods).
- **Perfis de aço do Reino Unido.** Perfis soldados podem usar 976 seções britânicas (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); digite um tamanho como `305x165x40 UB`. Veja [Perfis estruturais](topic:structural-members).

### Impressão

- **Etapa de impressão.** O botão {{ui:Etapa de impressão}} na barra de ferramentas (complemento Impressão 3D, ativado por padrão) coloca os corpos da sua peça numa mesa tracejada: {{ui:Planificar}}, {{ui:Girar 90°}}, {{ui:Organizar na mesa}}, {{ui:Ajustar tudo na mesa}}, {{ui:Visualizar camadas}}, depois {{ui:Enviar para a impressora 3D}} por USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Nada é enviado até você confirmar, e sua peça nunca é alterada. Para um arquivo STL ou 3MF, veja [Preparar uma peça para impressão 3D](topic:print-3d).
- **Impressão em resina.** Complementos em {{ui:Configurações}} › {{ui:Complementos}}, todos desligados até você ativá-los: um fatiador de resina, um teste de exposição e formatos de arquivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. O fatiamento roda numa thread de trabalho, então a página continua respondendo.

## Em todos os aplicativos

- Cada dica ao passar o mouse é uma dica do Bootstrap.
- A dica inicial tem um botão de fechar; ela permanece fechada.
- Uma linha de guias do painel que não cabe rola para os lados em vez de ser cortada.
- A aba do navegador mostra o nome do documento aberto antes de PartCraft | CadCraft.
- {{ui:Configurações}} mostra o {{ui:Layout}} do ambiente como uma lista suspensa de opções, e a caixa de idioma lista todos os idiomas que a versão tem.
- Peso e Temperatura são tipos de unidade nas configurações de Unidades.

## Corrigido

- O menu Arco do esboço agora lista todos os métodos.
- A barra de complementos e o título da aba do navegador foram corrigidos em 2026-11-09.

## Limites declarados

- O STEP exato foi lido de volta no OpenCascade (sólidos válidos, volumes iguais aos calculados à mão). Ainda não foi aberto em todos os programas CAD ou CAM, e uma montagem não é gravada como STEP exato.
- Nada foi impresso numa impressora real. Fatiamento, G-code e arquivos de resina foram lidos de volta por nossos próprios programas ou por uma impressora substituta; nenhum dos formatos de resina foi carregado numa impressora, e os tamanhos e exposições das impressoras são pontos de partida.
- O Solid FEM é linear, isotrópico e elástico, com um material por peça, sem contato, escoamento ou flambagem. A tensão em faces fixas e cantos vivos depende da malha. É um auxílio de verificação, não revisado por um engenheiro.
- Os tempos de montagens grandes vêm de um servidor sem GPU; um quadro de detalhe completo de 20.000 peças ainda leva segundos ali.
- As concordâncias funcionam em pares de faces; não há mistura geral de vértices nem concordância entre faces que não se tocam.
- O link com o Rhino nunca rodou dentro do Rhino ou do Grasshopper reais. O Documentos foi testado por dois programas numa mesma pasta, não por duas pessoas numa rede compartilhada.
- O ajuste de superfícies a uma digitalização real não teve sua verificação manual. Idiomas além do inglês são rascunhos de máquina.
- Os instaladores do Windows não têm assinatura de código, e a imagem de disco do macOS não é notarizada. Veja [Solução de problemas](topic:troubleshooting).

Alterações anteriores estão em [Novidades na versão 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 e 0.8.1

Isto é o que mudou no PartCraft 0.8 e 0.8.1, em comparação com a 0.7. A simulação responde enquanto você edita e informa o que quebra primeiro, montagens ganham estudos de movimento, e novos ambientes tornam superfícies de forma livre e peças dimensionadas pela física. A 0.8.1 é uma pequena versão de correção.

### Novidades

**Simulação**

- **Atualizar enquanto edito.** Marque {{ui:Atualizar enquanto eu edito}} no bloco Resolver e as respostas acompanham suas edições. Mude uma cota, uma carga ou o material e uma resposta rápida, feita com elementos quatro vezes maiores, aparece de imediato; quando você para por cerca de um segundo, a resposta refinada própria do estudo substitui a rápida. Os resultados informam qual delas você está vendo. Numa viga em balanço de aço, a resposta rápida ficou a 1 % da refinada na deflexão e a cerca de 4 % na tensão. Veja [Verificar tensão e deflexão](topic:simulation#update-while-you-edit-live).
- **O que quebra primeiro.** Para um estudo estático ou de flambagem, {{ui:O que quebra primeiro?}} no bloco Quebrar escala as cargas até a peça ceder. Ele lista, do pior para o melhor, o fator de carga até o primeiro escoamento (com um marcador vermelho onde a tensão atinge o pico) e o fator de carga até a flambagem. Um fator abaixo de 1 significa que a peça já cede com a carga atual, e Problemas mostra um erro. Os fatores vêm de um estudo linear, então são tão bons quanto ele. Veja [Verificar tensão e deflexão](topic:simulation#find-out-what-breaks-first-break-it).
- **Escoamento e contato.** Mais dois tipos de estudo: um não linear, em que o material segue sua reta até a tensão de escoamento e depois uma inclinação mais suave, com a deformação plástica plotada; e um de contato, em que peças separadas empurram umas às outras (sem atrito) ou ficam presas (coladas). Um passo de carga que não se estabiliza, ou peças que afundam demais umas nas outras, aparecem no painel Problemas. Atrito, grandes deslizamentos, grandes rotações, grandes deflexões e fadiga não são resolvidos. Veja [Verificar tensão e deflexão](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Modelos para o CalculiX.** {{ui:Exportar}} › {{ui:Modelo CalculiX (.inp)}} salva o estudo para o CalculiX, um programa separado que você instala e executa por conta própria; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lê o arquivo de resultados dele de volta na mesma malha. O PartCraft nunca inicia esse programa, e avisa quando a peça mudou desde que o modelo foi salvo.

**Montagens**

- **Estudos de movimento.** {{ui:Montagem}} › {{ui:Movimento}} comanda o valor de uma junta ao longo de um tempo que você define (velocidade constante, suavizada, senoidal ou ida e volta), posiciona a montagem em cada passo com suas juntas e laços fechados, e informa o que colide e o quanto as peças se aproximam. {{ui:Adicionar um ponto}} plota a posição, a velocidade e a aceleração de um ponto, o valor da junta e a folga em função do tempo; {{ui:Salvar CSV}} e {{ui:Salvar gráfico}} os gravam. Após {{ui:Executar}}, a barra Avançar pela execução move a montagem para qualquer passo. As configurações do estudo são salvas no arquivo da montagem. Velocidade e aceleração vêm das posições registradas, então use mais passos se um pico agudo aparecer baixo. Veja [Verificar uma montagem quanto a colisões e movimento](topic:check-assembly#a-motion-study).

**Superfícies e peças a partir da física**

- **Um ambiente de Superfícies.** Escolha {{ui:Superfícies}} na caixa {{ui:Ambiente}} para curvas e superfícies NURBS ao lado da peça: {{ui:Curva}}, {{ui:Loft}}, {{ui:Varredura}}, {{ui:Casar}} e {{ui:Zebra}}, com continuidade (G0, G1 ou G2) medida nas superfícies exatas, e uma aresta pior do que você pediu listada em Problemas com uma correção de Casar. {{ui:Suavizar}} mede linhas de casco para inflexões e saltos de curvatura e reconstrói as irregulares dentro da sua tolerância. As superfícies são salvas no arquivo da peça e não alteram os recursos dela. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **O ambiente Engineer.** Escolha {{ui:Engineer}} na troca de ambientes, escolha um gerador e clique em {{ui:Novo}}: um script dimensiona uma peça a partir do que ela precisa fazer (aquecer para mover, fluxos, pressão, material, processo de impressão) com fórmulas clássicas e a constrói; depois devolve os números usados com suas fontes, suas verificações de fabricação e arquivos para ferramentas de análise. As mesmas entradas dão a mesma peça em qualquer computador. O gerador fica guardado na peça, e abrir uma peça nunca executa um script. Veja [Peças a partir da física: geradores](topic:engineer-generators) e [Escrever um gerador](topic:write-a-generator).

**Esboços, desenhos e fabricação**

- **Um esboço a partir de uma foto.** {{ui:Recursos}} › {{ui:Mais}} › {{ui:Esboço a partir de uma foto…}} traça uma imagem de uma peça plana sobre um fundo liso (contorno e furos) ou um desenho a caneta em linhas, arcos e círculos. Você informa uma medida, confere a prévia e cria o esboço. Veja [Noções básicas de esboço](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala e divisão para impressão.** {{ui:Exportar}} › {{ui:Escalar para impressão (STL ou 3MF)…}} escala por eixo sem alterar a peça, por exemplo para uma folga de contração. {{ui:Exportar}} › {{ui:Dividir para impressão (um zip de peças)…}} corta uma peça grande demais para a sua mesa em peças numeradas, unidas por pinos, chavetas, rabos de andorinha, furos de cavilha ou cavidades para ímãs. Veja [Imprimir em 3D](topic:print-3d).
- **Folhas encaixadas para G-code.** {{ui:Exportar}} › {{ui:Folhas encaixadas para G-code}} lê um DXF encaixado e gera um programa por folha pelo pós-processador que você escolher: furos e recortes primeiro, depois os contornos. Ele não planeja entradas, a ordem de corte nem arestas compartilhadas. Veja [Encaixar peças planas em chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desenhos que fazem mais sozinhos.** {{ui:Folha}} › {{ui:Automático}} escolhe a menor folha de tamanho A que comporta as vistas na maior escala padrão até 1:1. {{ui:Cotar os furos}} põe uma marca de centro em cada furo, uma chamada por tamanho e as posições a partir do canto inferior esquerdo da vista. Veja [Criar um desenho](topic:drawing-pdf).

**Em todos os aplicativos**

- **Idiomas.** Os aplicativos vêm em 54 idiomas. Os que vão além do inglês são rascunhos de máquina até que um falante nativo os leia.
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe Quebrar (como antes), 2 linhas ou 1 linha; uma barra que não cabe rola para os lados. A faixa de recursos do PartCraft mostra a ferramenta mais usada em destaque e agrupa as variantes atrás de um botão dividido.
- **Conecte sua IA.** O Studio é o centro para conectar um assistente próprio a todos os oito aplicativos, com permissão somente de leitura, de sugestão ou de edição por aplicativo. Um assistente conectado pode dimensionar uma peça a partir de uma frase, como um suporte para uma carga, mostrar seu raciocínio e cada verificação, e construí-la; ele informa o que não verificou (concentração de tensão, fadiga, fluência em plásticos). Veja [Usar o PartCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Congelamento do cursor em tela cheia.** O destaque ao passar o mouse agora é limitado. A causa é a nossa melhor leitura e não foi confirmada com a pessoa que relatou.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem trocar de idioma enquanto rodam; antes, eram somente em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.

### Ainda não nesta versão

- Conectar sua IA não está pronto: a conexão em um clique dentro do Studio, o conector hospedado para IA de navegador, sua própria chave de API dentro do Studio e o pacote MCP publicado não são prometidos. O Studio não tem IA própria.
- O Studio não tem assinatura de código: o Windows pode avisar, e o macOS pede clique com o botão direito e depois Abrir. Veja [Solução de problemas](topic:troubleshooting).
- Os acúmulos de tolerância ainda têm uma direção: veja [Acúmulos de tolerância](topic:tolerance-stackup).
- O restante está listado em [O que ainda não foi implementado](topic:not-built-yet).

Alterações anteriores estão em [Novidades na versão 0.7](topic:whats-new-0-7).
