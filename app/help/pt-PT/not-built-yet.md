---
title: O que ainda não está implementado
summary: Tudo o que esta versão do PartCraft ainda não faz, desde varrimentos torcidos até à visualização em polegadas, cotas de desenho e subconjuntos, com o que fazer hoje em alternativa.
keywords: em falta, ainda não, limites, limitações, roteiro, núcleo exato, boleado, chanfro, casca, varrimento, loft, importação STEP, simulação, fabrico, varrimento torcido, tangência final do loft, boleado de face, equações, polegadas, cotas de desenho, subconjuntos, nuvem, tablet, telemóvel
from: 97b10a29
---

O PartCraft é uma versão inicial. Esta página lista o que ainda não faz, para que não o procure, e o que fazer hoje em alternativa. Nada aqui tem data.

## Precisa de um núcleo exato

Esta versão constrói cada peça com o núcleo de malha (ver [O núcleo de malha](topic:solid-kernels)). Tudo o que segue precisa de um núcleo de geometria exata, que esta versão ainda não tem. As peças guardadas com estas funcionalidades continuam a abrir: as funcionalidades ficam no histórico, marcadas como não implementadas, e são mantidas ao guardar.

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| {{ui:Boleado}} e {{ui:Chanfre}} em arestas redondas; boleados cujo raio muda ao longo da aresta; arredondamentos ligados suavemente onde se encontram (o núcleo de malha os corta em meia-esquadria) | Boleado e Chanfro funcionam em arestas retas entre faces planas; arredonde os outros cantos no esboço antes de extrudir ({{ui:Boleado}} num esboço, {{key:F}}) |
| {{ui:Casca}} a abrir faces curvas; paredes de espessuras diferentes | Abrir faces planas; acrescentar material com extrusões onde uma parede deve ser mais espessa |
| {{ui:Varrimento}}, {{ui:Loft}}, {{ui:Saída}} em faces curvas; extrudir até uma face, a face seguinte ou um vértice; extrusões com conicidade | Extrudir ou revolver, em degraus onde for preciso; extrudir até uma profundidade que meça |
| {{ui:Nervura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e planificações | Extrudir a chapa ou o perfil da nervura |
| Superfícies: concluir uma {{ui:Forma}} na peça, {{ui:Remendo}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Coser}}, {{ui:Espessar}}, {{ui:Superfície de offset}}, {{ui:Prolongar superfície}}, {{ui:Aparar superfície}} | Não disponível |
| Vários corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Matriz por trajetória}}, funcionalidades que criam um novo corpo | Um sólido; padrões e funcionalidades de espelho que copiam |
| Esboços, planos, eixos e pontos em faces que só um núcleo exato consegue encontrar (uma face feita por um boleado, a parede de um furo, uma face de um sólido importado) | Esboce em planos base, planos de referência e nas faces planas de extrusões e revoluções |
| Um resultado de design generativo aberto como peça ou acrescentado a ela (passa a ser um sólido importado) | Transfira o resultado em STL ou STEP |
| Editar as faces curvas de um ficheiro STEP aberto como superfícies exatas; STEP exato de faces em spline, varridas e reviradas de um ficheiro STEP; lados em spline, roscas modeladas, corpos STL / OBJ / 3MF e conjuntos; STEP para outros modeladores de peças | {{ui:Abrir}} lê o STEP como triângulos e mantém as faces planas, cilindros, cones, esferas e toros do ficheiro para a exportação ([Abrir um ficheiro STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve cada face analítica com exatidão e mantém essas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de peças continua a escrever |
| Arcos verdadeiros nas vistas de desenho | As vistas e as vistas de corte são desenhadas a partir das facetas |
| Volumes, áreas e distâncias exatos | {{ui:Medir}} dá os números do sólido facetado, um pouco baixos em peças redondas; uma definição **Curvas** mais fina aproxima-os |

Algumas linhas das tabelas abaixo sugerem uma destas funcionalidades como solução para outra coisa. Essas sugestões aplicam-se quando o núcleo exato voltar.

## Funcionalidades

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Boleados de face, boleados de raio completo, boleados com raios definidos em pontos ao longo de uma aresta | {{ui:Boleado}} constante ou com variação linear; várias funcionalidades de boleado |
| Cascas com espessuras de parede diferentes | Uma espessura de {{ui:Casca}}; acrescentar material com extrusões onde uma parede deve ser mais grossa |
| Saída em faces de forma livre (spline) | {{ui:Saída}} funciona em faces planas, cilíndricas e cónicas |
| Varrimentos torcidos, varrimentos de parede fina e de superfície; tangência final na funcionalidade Loft; um loft com um só trilho-guia; trajetórias em spline | {{ui:Varrimento}} com orientação fixa ou escala final; um loft com dois ou mais trilhos-guia: ver [Varrimento, loft e saída](topic:sweep-loft-draft) |
| Nervuras a partir de arcos ou splines; nervuras cresçidas quadradas ao esboço (a partir de uma vista de topo); saída em nervuras; várias nervuras de um só esboço | {{ui:Nervura}} a partir de uma cadeia de linhas no plano da própria nervura: ver [Nervuras e reforços](topic:rib) |
| "Até" uma superfície curva, "até ao seguinte" a parar numa face curva | Até uma face plana ou um plano de referência |
| Furos com contrafuro, roscas em polegadas e de tubo, roscas cónicas, saídas de rosca e inícios de rosca chanfrados | Escareado com pouca profundidade; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: ver [Roscas em veios e furos, desenhadas ou modeladas](topic:threads) |
| Extrusões de funcionalidade fina | Desenhe os dois lados do perfil |
| Cópias de padrão saltadas uma a uma, padrões de preenchimento | Use funcionalidades separadas; padrões ao longo de uma curva: {{ui:Matriz por trajetória}} |
| Cópias de padrão, espelhos, boleados, chanfros, cascas e sólidos importados | Copie o esboço ou a funcionalidade em que assentam, ou crie-lhes um padrão |
| Tangência exata (G1) nos pontos extraordinários de uma {{ui:Forma}}; fusão dos retalhos de uma forma em faces maiores | Aumente o Nível da forma: os retalhos aproximados ficam mais pequenos; ver [Formas livres com Forma](topic:form-surfaces) |
| Uma forma feita de várias peças fechadas separadas numa só funcionalidade; pontes entre formas | Uma peça fechada por funcionalidade Forma; una-as com Juntar |
| Escolher corpos de superfície na vista (exceto os pontos de aparar e de remendo); boleados de superfície; desaparar (untrim); remendos G2; superfícies de Gordon tangentes a vizinhas curvas (tangentes a planos e faces planas estão implementadas) | Escolha-os pelo nome no painel da funcionalidade; espesse primeiro e depois boleie o sólido |
| Uma lista de corpos no histórico; deixar fora das exportações os corpos ocultos | Mude o nome e oculte os corpos na lista de corpos do painel da peça; elimine ou suprima a funcionalidade que criou um corpo para o deixar de fora |
| Uma escala não uniforme que mantenha cilindros e cones analíticos; escala não uniforme de superfícies de offset | {{ui:Escalar corpo}} torna as faces curvas B-splines fechadas (dentro de 0,0000004 mm); uma escala uniforme mantém-se exata |
| Combinar corpos de superfície; somas de Minkowski | {{ui:Coser}} ou {{ui:Espessar}} primeiro, depois {{ui:Combinar}} |
| Análise de tolerâncias: cadeias de tolerâncias que fazem curvas (ciclos vetoriais 2D e 3D), sensibilidades calculadas a partir da geometria, Monte Carlo com outras distribuições, tolerâncias de tamanho em cotas de esboço, tolerância de bónus pela condição do material | {{ui:Cadeia de tolerâncias}} num conjunto: uma direção, pior caso e RSS, tolerâncias escritas, a partir da tolerância geral da legenda ou de quadros GD&T: ver [Cadeias de tolerâncias](topic:tolerance-stackup) |
| Nesting: ordem de corte e entradas, corte de arestas partilhadas uma só vez, peças que têm de ficar juntas; restos de rolos, bruto partilhado entre projetos | {{ui:Nesting de peças planas em chapas…}} com espaçamento, margens, rotações e fio: ver [Dispor peças planas em chapas](topic:nest-flat-parts); os retalhos de chapa são guardados e usados primeiro: ver [Guardar e reutilizar retalhos](topic:nest-offcuts); planeie o corte no software da sua máquina de corte |
| Chapa metálica: bordas dobradas, degraus, abas de meia-esquadria e de contorno; abas em arestas curvas ou nas faces de uma aba base dobrada; dobras desenhadas no esboço; fechos de canto; ferramentas de conformação; converter um sólido em chapa metálica; a planificação de uma aba base dobrada com recortes; tabelas de dobra | {{ui:Aba base}} (uma chapa ou um perfil dobrado), {{ui:Aba de aresta}} nas arestas retas de uma chapa, com alívios de dobra, e a planificação com um fator K: ver [Chapa metálica](topic:sheet-metal) |
| {{ui:Análise de ângulo de saída}} em conjuntos; localizar a linha de partição; análise de espessura de parede | {{ui:Análise de ângulo de saída}} na peça em Design: ver [Verificar a saída para moldagem e fundição](topic:draft-analysis); abra cada peça de um conjunto para a verificar |

## Esboços

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Elipses, arcos tangentes, cónicas, splines com grau fixo ou pesos (NURBS) | Splines (cúbicas), arcos e círculos com relações de tangente |
| Um ponto numa spline (uma relação), relações de curvatura (G2) | Coloque o ponto próprio da spline onde ela deve passar |
| Cópias de deslocamento de splines que acompanham alterações posteriores; deslocamentos de cadeias com cantos vivos de spline | Desloque de novo após a alteração; arredonde primeiro o canto |
| Cópias de padrão que se mantêm ligadas ao original; padrões ao longo de uma curva | Crie o padrão de novo após uma alteração |
| Projeção de arestas circulares de forma livre ou inclinadas; geometria projetada que acompanha a peça | Projete arestas circulares retas e paralelas, depois cote |
| Cotas conduzidas (de referência) | Leia as medidas no painel ou nos dados da peça |
| Relações colineares | Paralela com distância 0 |
| Colar noutro programa (área de transferência do sistema) | Exporte DXF, STEP, STL ou 3MF |
| Escrever arcos, coordenadas relativas ou polares | Escreva linhas e círculos; desenhe arcos com a ferramenta {{ui:Arco}} |
| Selecionar geometria sem um ponteiro | Precisa de um clique ou de um toque |

## Parâmetros e unidades

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Configurações que alteram materiais; uma tabela de desenho em CSV que desliga funcionalidades | As configurações definem parâmetros e ligam e desligam funcionalidades: ver [Configurações e tabelas de desenho](topic:design-tables); `partcraft variants` cria configurações guardadas pelo nome, com as funcionalidades desligadas incluídas: ver [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack) |
| Equações nos números dos painéis das funcionalidades mais recentes (plano, varrimento, saída e semelhantes) | Escreva-as num script ou com `partcraft set` ([Scripts e linha de comandos](topic:scripts-and-cli)) |
| Uma peça mostrada em polegadas | As medidas aparecem em milímetros; escreva `2in` numa caixa numérica ou numa expressão e passa a 50.8 |

## Ficheiros

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Editar as funcionalidades próprias de um sólido STEP importado (chega sem histórico) | Acrescente ou corte material com funcionalidades suas |
| Ler cores, nomes, estrutura de conjunto e PMI a partir de STEP | Não disponível |
| Exportação glTF, OBJ, IGES, Parasolid; DWG de uma peça 3D (só o pacote de variantes escreve DWG: a folha de desenho) | STL ou 3MF para malhas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou ficheiros próprios de outros programas (os ficheiros `.3dm` abrem como um corpo: [Abrir um modelo .3dm como sólido](topic:open-3dm-files)) | Peça STEP, ou uma malha STL, OBJ ou 3MF fechada: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) |
| Estrutura do conjunto (uma árvore com nomes de peças) no STEP exportado | O STEP do conjunto é um composto dos sólidos posicionados |
| Guardar numa pasta à sua escolha sem a transferência do navegador | Ative "perguntar onde guardar" nas definições de transferência do navegador |

## Desenhos

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Cotas para além das três dimensões globais (medidas de furos, posições, tolerâncias de medidas) | Anote o PDF, ou exporte DXF e cote-o num programa CAD 2D |
| Mais de uma vista de corte ou de detalhe; vistas alinhadas, interrompidas e auxiliares | Uma vista de corte e um detalhe por desenho |
| Texto livre, notas e tabelas na folha (além dos blocos de título e de revisão) | A nota de acabamento, ou texto acrescentado no PDF |
| Projeção de primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, disposição automática, folhas em paisagem A4–A0 e ANSI A–E |
| Vista de corte ao vivo: vários planos ou uma caixa de corte de cada vez, um contorno à volta do corte, guardar o corte no ficheiro | Um plano de cada vez em {{ui:Vistas}} › {{ui:Vista em corte}}; ver [Ver o interior com uma vista de corte](topic:section-view) |
| Desenhos de conjunto com mais vistas, cotas ou balões que se possam mover | Uma vista isométrica (ou explodida) com balões automáticos e a lista de peças |
| Copiar e colar símbolos GD&T e de acabamento | Coloque cada um com {{ui:Datum}}, {{ui:Quadro}} ou {{ui:Acabamento}} |
| Manuais: ficheiros STEP em {{ui:A partir de outro ficheiro…}} do Illustrate, um modelo passado diretamente do ModelCraft ou do BimCraft, imagens com a qualidade do traçador de caminhos, 3D interativo dentro de um PDF | Abra o STEP em Design e inicie o manual com {{ui:A partir da peça aberta}}; guarde o modelo como glTF (.glb); imagens PNG da vista 3D; o ficheiro 3D interativo: ver [Iniciar um manual no Illustrate](topic:illustrate) |

## Conjuntos

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Juntas de engrenagem, cremalheira, came e parafuso; uma junta esférica limitada a um cone; juntas em faces curvas ou entre pontos | Juntas rígidas, de revolução, de deslizamento, cilíndricas, planas, esféricas e de pino em ranhura, em faces planas, cada valor com os seus próprios limites: ver [Construir um conjunto](topic:build-assembly) |
| Passos de explosão que rodam peças, e arrastar peças que as juntas posicionam | Passos de explosão retos; remova uma junta para mover uma peça à mão |
| Subconjuntos | Um só nível de peças |
| Engrenagens, cames, contacto | Não disponível |

## Fabrico

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Limpeza adaptativa 3D e desbaste de deslocamento em 3D; acabamento por linha de água, a lápis, radial e em espiral; passagens adaptativas escritas como arcos | Desbaste 3D em filas retas e maquinação de restos: ver [Desbaste 3D e maquinação de restos](topic:rough-3d); acabamento {{ui:Paralela}} e {{ui:Crista constante}}: ver [Acabamento 3D](topic:finish-3d); facejar, caixa, adaptativo 2D, contorno, furação e chanfro de 2,5 eixos: ver [Criar percursos e G-code](topic:manufacture) |
| Corte de flanco (swarf), trajetórias de linhas de fluxo e de desbaste multieixo, códigos de plano de trabalho inclinado (G68.2), verificações de colisão do porta-ferramentas e da máquina; uma simulação de cortes de 5 eixos e rotativos | Uma ferramenta inclinada para qualquer operação, acabamento de 5 eixos com fresa esférica e acabamento rotativo de 4.º eixo: ver [Maquinação de 4 e 5 eixos](topic:multi-axis) |
| Mandrilagem e roscas interiores num torno, ciclos G71/G76, arcos em trajetos de torneamento, ferramentas vivas, um subfuso | Torneamento exterior: facejar, desbastar, acabar, ranhurar, separar, roscar, furar no centro: ver [Torneamento num torno](topic:turning) |
| Apalpar um ângulo ou um canto, um calibrador de ferramentas, medir uma medida contra uma tolerância | Apalpar uma face, um lado, um furo ou uma saliência para definir a origem de trabalho: ver [Apalpação](topic:probing) |
| Verificações de colisão do porta-ferramentas e da haste | Observe os avisos de comprimento de gume e verifique no simulador do seu comando |
| Vida útil da ferramenta e ciclos de subprogramas num pós-processador; carregar ficheiros de pós-processador de outros programas | Escreva ou altere um pós-processador no formato próprio do PartCraft: ver [Pós-processadores editáveis](topic:post-processors) |
| G-code em polegadas (G20) | Apenas milímetros (G21) |

## Simulação e design generativo

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Estudos não lineares: cedência, grandes deformações, contacto entre peças, fadiga | Estática linear e frequências naturais: ver [Verificar tensão e deformação](topic:simulation); mantenha o fator de segurança bem acima de 1 |
| Encurvadura não linear (imperfeições, pós-encurvadura, salto) | Fatores de carga de encurvadura lineares com uma margem generosa: ver [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling) |
| Radiação entre faces (fatores de forma), resistência de contacto, materiais dependentes da temperatura, inércia em tensão térmica (ondas de choque térmico) | Radiação para o meio envolvente, tensão térmica estacionária ou quase estática ao longo do tempo, propriedades constantes: ver [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling) |
| Refinamento automático para calor transitório e estudos com carga térmica; tornar a malha mais grosseira onde o erro é pequeno; um alvo numa grandeza local (a tensão de pico num ponto) | **Refinar automaticamente** para estudos estáticos, de encurvadura, de frequências naturais e térmicos estacionários, sobre o erro em toda a peça: ver [Verificar tensão e deformação](topic:simulation); caso contrário, reduza o tamanho do elemento |
| Cargas de rolamentos e de parafusos, forças remotas, momentos, molas, deslocamentos impostos | Forças e pressões em faces, gravidade; faces fixas e sem atrito |
| Simulação de conjuntos; materiais que variam com a direção (camadas impressas, compósitos) | Uma peça, um material isotrópico |
| Várias threads de solver para estudos tetraédricos, transferência de calor e design generativo; threads em qualquer página que não esteja isolada entre origens | Estudos de voxels, encurvadura, tensão ao longo do tempo e escoamento laminar usam as threads onde a página o permite: ver [Definições do PartCraft](topic:settings) |
| Escoamento turbulento com precisão de projeto (o modelo Spalart–Allmaras está incluído como experimental: atrito em tubos 30 a 34 % alto, recolamento após degrau 21 a 39 % curto; planeado: células mais finas junto às paredes), calor no escoamento, escoamento não estacionário com precisão temporal, superfícies livres, fluidos não newtonianos, peças em rotação | Escoamento laminar, estacionário e isotérmico de um fluido newtoniano, ou o modelo turbulento experimental para padrões qualitativos: ver [Simular escoamento de fluidos](topic:flow-simulation); o painel avisa quando o número de Reynolds ultrapassa o regime laminar |
| Limites de tensão e regras de fabrico (saliências, direções de fresagem) no design generativo; vários materiais numa forma | Forma mais rígida para um volume; verifique o resultado na Simulação: ver [Gerar uma forma a partir de cargas](topic:generative-design) |
| Um resultado como sólido editável (suave, paramétrico) | STL, STEP facetado ou uma peça com o resultado como sólido importado facetado |
| Projeto de máquinas elétricas: um rotor a rodar num estator, binário em função do ângulo, aço saturante, ímanes que perdem força para lá do joelho, correntes de Foucault e perdas no ferro e no cobre; campos magnéticos em 3D ou em malhas curvas | Magnetostática 2D linear numa grelha na biblioteca de análise: bobinas, ferro, ímanes permanentes na sua linha de recuo, entreferros, indutância e atração: ver [Campos magnéticos em 2D](topic:magnetic-fields-2d) |

## Scripts

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Ajuda ao passar o rato, pontos de interrupção e passo a passo no editor de scripts | Localizar, dobrar e completar estão incluídos (ver [Escrever e executar scripts](topic:craftscript)); no resto, use o seu próprio editor: {{ui:Guardar}} e {{ui:Abrir}} no grupo Script movem scripts para dentro e para fora; as funções incorporadas estão listadas em [A linguagem CraftScript](topic:craftscript-language) |
| Pontos de interrupção e passo a passo num script | `disp` e `fprintf` pelo caminho; {{key:Mod+Enter}} executa algumas linhas selecionadas de cada vez |
| Campos e gráficos que um script mostra, desenhados no espaço de trabalho Design; scripts que alteram os parâmetros da peça | Mostram-se no espaço de trabalho Script; os scripts leem parâmetros com `param` (ver [Escrever e executar scripts](topic:craftscript)) e alteram-nos no separador {{ui:Parâmetros}} |
| Imagens e tabelas lado a lado com gráficos; editar um gráfico (zoom, limites de eixos) antes de o guardar | Lado a lado mostra os gráficos; guarde um gráfico em PNG, SVG ou CSV e acabe-o noutro lugar |
| numpy e outros pacotes Python; Python offline; dobrar Python no editor; Pascal Script | A biblioteca padrão de Python, CraftScript e Lua: ver [Scripts em Python](topic:craftscript-python) |
| Passar funções Lua a funções incorporadas; chamar uma função de biblioteca a partir de Lua por um nome criado durante a execução do script | Escreva o nome da função de biblioteca no script (`cs.static_tet(…)`), ou chame-a a partir de um script CraftScript |

## A aplicação

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Guardar na nuvem, partilhar e histórico de versões | Ainda não disponível. Guarde os ficheiros no computador e mantenha versões pelo nome |
| PartCraft como aplicação instalada no iPad e iPhone | Use o PartCraft no navegador do dispositivo; em Android e no computador também funciona no CadCraft Studio (getcadcraft.com/download) |
| Menus de contexto (botão direito) | Barra de ferramentas e painel direito |
| Trabalhar totalmente offline a partir de um arranque limpo | Só quando a aplicação tiver sido guardada para uso offline: ver [Trabalhar offline](common:offline) |

Comunique a falta que mais sente através da página de suporte do site: isso orienta o que vem a seguir.

## Engenheiro (geradores e campos)

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Cabeçotes, portas e acessórios no permutador de calor gerado; curvas de temperatura para a resistência do material; perdas de tês no coletor | Os geradores criam o núcleo e os tubos; acrescente acessórios em Design; use os valores do material à temperatura ambiente com um fator de segurança |
| Acrescentar geradores do diretório de suplementos com um clique | {{ui:Abrir}} no espaço de trabalho Engenheiro acrescenta um gerador a partir de um ficheiro |
| Um ficheiro de campo mais fino do que o tamanho de voxel do próprio gerador; ler ficheiros `.vdb` | Guarde um campo mais fino a partir de um script; `.vdb` é escrito, não lido |
| Cálculos de vasos de pressão | As fórmulas clássicas de parede fina e de parede grossa, com o fator de segurança escolhido; não é uma margem de norma |
| Geradores para as outras aplicações | Apenas PartCraft nesta versão |
