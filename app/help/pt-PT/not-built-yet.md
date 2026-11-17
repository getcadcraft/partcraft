---
title: O que ainda não está implementado
summary: Tudo o que esta versão da PartCraft ainda não faz, desde varrimentos com torção até à visualização em polegadas, cotas de desenho e subconjuntos, com o que fazer em alternativa hoje.
keywords: em falta, ainda não, limites, limitações, roadmap, núcleo exato, boleado, chanfre, casca, varrimento, loft, importação STEP, simulação, manufatura, varrimento com torção, tangência final do loft, boleado de faces, equações, polegadas, cotas de desenho, subconjuntos, nuvem, tablet, telemóvel
from: 9b868162
---

A PartCraft é uma versão inicial. Esta página indica o que ainda não faz, para que não o procure, e o que fazer em alternativa hoje. Nada aqui tem data.

## Precisa de um núcleo exato

Esta versão constrói todas as peças com o núcleo de malha (ver [O núcleo de malha](topic:solid-kernels)). Tudo o que está abaixo precisa de um núcleo de geometria exato, que esta versão ainda não tem. As peças guardadas com estas operações continuam a abrir: as operações ficam no histórico, marcadas como não implementadas, e são mantidas ao guardar.

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| {{ui:Boleado}} e {{ui:Chanfre}} em arestas redondas; boleados cujo raio varia ao longo da aresta; arredondamentos suavizados onde se encontram (o núcleo de malha os corta em meia-esquadria) | Boleado e Chanfre funcionam em arestas retas entre faces planas; arredonde os outros cantos no esboço antes de extrudir ({{ui:Boleado}} num esboço, {{key:F}}) |
| {{ui:Casca}} com faces curvas abertas; paredes de espessuras diferentes | Abra faces planas; acrescente material com extrusões onde uma parede tenha de ser mais espessa |
| {{ui:Varrimento}}, {{ui:Loft}}, {{ui:Saída}} em faces curvas; extrusão até uma face, à face seguinte ou a um vértice; extrusões cónicas | Extrusão ou revolução, em passos quando necessário; extrusão até uma profundidade que mede |
| {{ui:Nervura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e planificações | Extrusão da chapa ou do perfil da nervura |
| Superfícies: concluir uma {{ui:Forma}} na peça, {{ui:Remendo}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Coser}}, {{ui:Espessar}}, {{ui:Superfície de offset}}, {{ui:Prolongar superfície}}, {{ui:Aparar superfície}} | Não disponível |
| Vários corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Matriz por trajetória}}, operações que criam um novo corpo | Um só sólido; as matrizes e a simetria copiam operações |
| Esboços, planos, eixos e pontos sobre faces que só um núcleo exato consegue encontrar (uma face criada por um boleado, a parede de um furo, uma face de um sólido importado) | Esboce sobre planos de base, planos de referência e as faces planas de extrusões e revoluções |
| Um resultado de design generativo aberto como peça ou acrescentado a uma peça (passa a ser um sólido importado) | Transfira o resultado como STL ou STEP |
| Editar as faces curvas de um ficheiro STEP aberto como superfícies exatas; STEP exato de faces em spline, varridas e de revolução vindas de um ficheiro STEP, lados em spline, roscas modeladas, corpos e montagens em STL / OBJ / 3MF; STEP de outros modeladores de peças | {{ui:Abrir}} lê o STEP como triângulos e mantém as faces planas, cilindros, cones, esferas e toros do ficheiro para a exportação ([Abrir um ficheiro STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve cada face analítica de forma exata e mantém-nas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de peças continua a escrever |
| Arcos verdadeiros nas vistas de desenho | As vistas e as vistas em corte são desenhadas a partir das facetas |
| Volumes, áreas e distâncias exatas | {{ui:Medir}} dá os números do sólido de facetas, um pouco baixos em peças redondas; uma definição de **Curvas** mais fina aproxima-os |

Algumas linhas das tabelas abaixo sugerem uma destas operações como forma de contornar outra coisa. Essas sugestões aplicam-se quando o núcleo exato voltar.

## Operações

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Boleados de faces, boleados de meia-volta completa, boleados com raios definidos em pontos ao longo de uma aresta | {{ui:Boleado}} constante ou variável linear; várias operações de boleado |
| Cascas com espessuras de parede diferentes | Uma só espessura de {{ui:Casca}}; acrescente material com extrusões onde uma parede tenha de ser mais espessa |
| Saída em faces de forma livre (spline) | {{ui:Saída}} funciona em faces planas, cilíndricas e cónicas |
| Varrimentos com torção, varrimentos de parede fina e de superfície; tangência final na operação Loft; um loft com um só trilho-guia; trajetórias em spline | {{ui:Varrimento}} com orientação fixa ou uma escala final: ver [Varrimento, loft e saída](topic:sweep-loft-draft) |
| Nervuras a partir de arcos ou splines; nervuras crescidas em quadrado relativamente ao esboço (a partir de uma vista de topo); saída em nervuras; várias nervuras a partir de um só esboço | {{ui:Nervura}} a partir de uma cadeia de linhas no próprio plano da nervura: ver [Nervuras e cantoneiras](topic:rib) |
| "Até" uma superfície curva, "até ao seguinte" a parar numa face curva | Até uma face plana ou um plano de referência |
| Furos com contrafuro, roscas de polegada e de tubo, roscas cónicas, saídas de rosca e inícios de rosca chanfrados | Escareado com uma profundidade pequena; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: ver [Roscas em veios e furos, desenhadas ou modeladas](topic:threads) |
| Extrusões de elemento fino | Desenhe as duas paredes do perfil |
| Cópias de matriz saltadas uma a uma, matrizes de preenchimento | Use operações separadas; matrizes ao longo de uma curva: {{ui:Matriz por trajetória}} |
| Copiar matrizes, simetrias, boleados, chanfros, cascas e sólidos importados | Copie o esboço ou a operação em que assentam, ou faça uma matriz deles |
| Tangência exata (G1) nos pontos extraordinários de uma forma; fundir os remendos de uma forma em faces maiores | Aumente o Nível da forma: os remendos aproximados ficam menores; ver [Formas de forma livre com Forma](topic:form-surfaces) |
| Uma forma feita de várias peças fechadas separadas numa só operação; pontes entre formas | Uma peça fechada por operação Forma; una-as com Juntar |
| Escolher corpos de superfície na vista (exceto os pontos de aparo e de remendo); boleados de superfície; desaparar; remendos G2; superfícies de Gordon tangentes a vizinhas curvas (tangentes a planos e faces planas estão implementadas) | Escolha-os pelo nome no painel da operação; espessar primeiro, depois boleie o sólido |
| Uma lista de corpos no histórico; deixar corpos ocultos de fora das exportações | Mude o nome e oculte corpos na lista de corpos do painel da peça; elimine ou suprima a operação que criou um corpo para o deixar de fora |
| Uma escala não uniforme que mantenha cilindros e cones analíticos; escala não uniforme de superfícies de offset | {{ui:Escalar corpo}} torna as faces curvas em B-splines fechados (dentro de 0,0000004 mm); uma escala uniforme continua exata |
| Combinar corpos de superfície; somas de Minkowski | Primeiro {{ui:Coser}} ou {{ui:Espessar}}, depois {{ui:Combinar}} |
| Análise de tolerâncias: cadeias de tolerâncias que fazem curvas (ciclos de vetores 2D e 3D), sensibilidades calculadas a partir da geometria, Monte Carlo com outras distribuições, tolerâncias de dimensão em cotas de esboço, tolerância de bónus a partir da condição do material | {{ui:Cadeia de tolerâncias}} numa montagem: uma direção, pior caso e RSS, tolerâncias escritas, a partir da tolerância geral da legenda ou de quadros GD&T: ver [Cadeias de tolerâncias](topic:tolerance-stackup) |
| Nesting: ordem de corte e entradas de corte, corte de arestas comuns uma só vez, peças que têm de ficar juntas; sobras de rolos, stock partilhado entre projetos | {{ui:Nesting de peças planas em chapas…}} com espaçamento, margens, rotações e fio: ver [Nesting de peças planas em chapas](topic:nest-flat-parts); as chapas que sobram ficam guardadas e são usadas primeiro: ver [Guardar e reutilizar sobras](topic:nest-offcuts); planeie o corte no software próprio da máquina de corte |
| Chapa metálica: rebordos, saltos, flanges de meia-esquadria e de contorno; flanges em arestas curvas ou nas faces de uma aba base dobrada; dobras esboçadas; fechos de canto; ferramentas de conformação; conversão de um sólido em chapa metálica; a planificação de uma aba base dobrada com recortes; tabelas de dobra | {{ui:Aba base}} (uma chapa ou um perfil dobrado), {{ui:Aba de aresta}} em arestas retas de uma chapa, com alívios de dobra, e a planificação com um fator K: ver [Chapa metálica](topic:sheet-metal) |
| Análise de ângulo de saída em montagens; encontrar a linha de apartamento; análise de espessura de parede | {{ui:Análise de ângulo de saída}} na peça, em Design: ver [Verificar o ângulo de saída para moldagem e fundição](topic:draft-analysis); abra cada peça de uma montagem para a verificar |

## Esboços

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Elipses, arcos tangentes, cónicas, splines com um grau definido ou pesos (NURBS) | Splines (cúbicas), arcos e círculos com relações de Tangente |
| Um ponto numa spline (uma relação), relações de curvatura (G2) | Coloque o ponto próprio da spline onde ela tem de passar |
| Cópias por deslocamento de splines que acompanhem alterações posteriores; deslocamentos de cadeias com cantos vivos em spline | Desloque de novo depois da alteração; arredonde o canto primeiro |
| Cópias de matriz que fiquem ligadas ao original; matrizes ao longo de uma curva | Volte a fazer a matriz depois de uma alteração |
| Projetar arestas circulares de forma livre ou inclinadas, geometria projetada que acompanhe a peça | Projete arestas circulares retas e paralelas, depois cote |
| Cotas acionadas (de referência) | Leia as dimensões no painel ou nos dados da peça |
| Relações colineares | Paralelo com distância 0 |
| Colar noutro programa (a área de transferência do sistema) | Exporte DXF, STEP, STL ou 3MF |
| Escrever arcos, coordenadas relativas ou polares | Escreva linhas e círculos; desenhe arcos com a ferramenta Arco |
| Selecionar geometria sem um ponteiro | Precisa de um clique ou de um toque |

## Parâmetros e unidades

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Configurações que alterem materiais; uma tabela de desenho em CSV que desligue operações | As configurações definem parâmetros e ligam e desligam operações: ver [Configurações e tabelas de desenho](topic:design-tables); `partcraft variants` cria configurações guardadas pelo nome, com as operações desligadas incluídas: ver [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack) |
| Equações nos números dos painéis das operações mais recentes (plano, varrimento, saída e semelhantes) | Escreva-as num script ou com `partcraft set` ([Scripts e linha de comandos](topic:scripts-and-cli)) |
| Uma peça mostrada em polegadas | As dimensões são mostradas em milímetros; escreva `2in` numa caixa de número ou numa expressão e passa a 50.8 |

## Ficheiros

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Editar as operações próprias de um sólido STEP importado (chega sem histórico) | Acrescente ou retire material com as suas próprias operações |
| Ler cores, nomes, estrutura de montagem e PMI a partir de STEP | Não disponível |
| Exportação de glTF, OBJ, IGES, Parasolid; DWG de uma peça 3D (só o pacote de variantes escreve DWG: a folha de desenho) | STL ou 3MF para malhas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou ficheiros próprios de outros programas (os ficheiros `.3dm` abrem como um corpo: [Abrir um modelo .3dm como corpo sólido](topic:open-3dm-files)) | Peça STEP, ou uma malha STL, OBJ ou 3MF fechada: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) |
| Estrutura de montagem (uma árvore com os nomes das peças) no STEP exportado | O STEP de montagem é um composto dos sólidos colocados |
| Guardar numa pasta à sua escolha sem a transferência do navegador | Ligue a opção "perguntar onde guardar" nas definições de transferência do navegador |

## Desenhos

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Cotas para além das três dimensões globais (dimensões de furos, posições, tolerâncias de dimensões) | Anote o PDF, ou exporte DXF e cote-o num programa de CAD 2D |
| Mais de um corte ou detalhe; vistas alinhadas, interrompidas e auxiliares | Um corte e um detalhe por desenho |
| Texto livre, notas e tabelas na folha (além dos blocos de título e de revisão) | A nota de acabamento, ou texto acrescentado no PDF |
| Projeção no primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, disposição automática, folhas na horizontal A4–A0 e ANSI A–E |
| Vista em corte ao vivo: vários planos ou uma caixa de corte de uma vez, um contorno à volta do corte, gravar o corte no ficheiro | Um plano de cada vez a partir de {{ui:Vistas}} › {{ui:Vista em corte}}; ver [Ver o interior com uma vista em corte](topic:section-view) |
| Desenhos de montagem com mais vistas, cotas ou balões que possa mover | Uma vista isométrica (ou explodida) com balões automáticos e a lista de peças |
| Copiar e colar símbolos GD&T e de acabamento | Coloque cada um com Datum, Quadro ou Acabamento |
| Manuais: ficheiros STEP em {{ui:A partir de outro ficheiro…}} do Illustrate, um modelo enviado diretamente do ModelCraft ou do BimCraft, imagens com a qualidade do traçador de caminhos, 3D interativo dentro de um PDF | Abra o STEP em Design e inicie o manual com {{ui:A partir da peça aberta}}; guarde o modelo como glTF (.glb); imagens PNG da vista 3D; o ficheiro 3D interativo: ver [Iniciar um manual no Illustrate](topic:illustrate) |

## Montagens

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Juntas de engrenagem, cremalheira, came e parafuso; uma junta esférica limitada a um cone; juntas em faces curvas ou entre pontos | Juntas rígidas, de revolução, deslizantes, cilíndricas, planas, esféricas e de pino em ranhura em faces planas, cada valor com os seus próprios limites: ver [Construir uma montagem](topic:build-assembly) |
| Passos de explosão que rodam peças, e arrastar peças que as juntas posicionam | Passos de explosão retos; remova uma junta para mover uma peça à mão |
| Subconjuntos | Um só nível de peças |
| Engrenagens, cames, contacto | Não disponível |

## Manufatura

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Desbaste 3D de faces curvas, desbaste adaptativo 3D, maquinação de restos; acabamento por linha de nível, lápis, radial e espiral; passagens adaptativas escritas como arcos | Face, bolsa, adaptativo 2D, contorno, furação e chanfro de 2,5 eixos: ver [Criar trajetórias e G-code](topic:manufacture); acabamento Paralelo e Vieira do modelo inteiro: ver [Acabamento 3D](topic:finish-3d) |
| Trajetórias de 4 e 5 eixos, torneamento, sondagem | Prepare um lado de cada vez, com o eixo da ferramenta no separador Preparação |
| Verificações de colisão do porta-ferramentas e do cabo | Atenda aos avisos de comprimento de canal e verifique no simulador do seu comando |
| Sondagem, ciclos de vida da ferramenta e de subprogramas, códigos de 4.º e 5.º eixo e de torno num pós-processador; carregar ficheiros de pós-processador de outros programas | Escreva ou altere um pós-processador no formato próprio da PartCraft: ver [Pós-processadores que pode editar](topic:post-processors) |
| G-code em polegadas (G20) | Só milímetros (G21) |

## Simulação e design generativo

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Estudos não lineares: cedência, grandes deformações, contacto entre peças, fadiga | Estática linear e frequências naturais: ver [Verificar tensão e deformação](topic:simulation); mantenha o coeficiente de segurança bem acima de 1 |
| Encurvadura não linear (imperfeições, pós-encurvadura, salto) | Fatores de carga de encurvadura lineares com uma margem generosa: ver [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling) |
| Radiação entre faces (fatores de forma), resistência de contacto, materiais dependentes da temperatura, inércia na tensão térmica (ondas de choque térmico) | Radiação para o meio envolvente, tensão térmica estacionária ou quase estática ao longo do tempo, propriedades constantes: ver [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling) |
| Refinamento automático para calor transitório e estudos com carga térmica; tornar a malha mais grosseira onde o erro é pequeno; um objetivo sobre uma grandeza local (a tensão máxima num ponto) | **Refinar automaticamente** para estudos estáticos, de encurvadura, de frequências naturais e térmicos estacionários, sobre o erro na peça inteira: ver [Verificar tensão e deformação](topic:simulation); caso contrário, reduza o tamanho do elemento |
| Cargas em apoios e parafusos, forças remotas, momentos, molas, deslocamentos impostos | Forças e pressões em faces, gravidade; faces fixas e sem atrito |
| Simulação de montagens; materiais que variam com a direção (camadas impressas, compósitos) | Uma peça, um material isotrópico |
| Vários fios de execução para estudos tetraédricos, transferência de calor e design generativo; quaisquer fios numa página que não esteja isolada de origem cruzada | Estudos de voxels, encurvadura, tensão ao longo do tempo e escoamento laminar usam os fios onde a página o permita: ver [Definições da PartCraft](topic:settings) |
| Escoamento turbulento com precisão de projeto (o modelo Spalart–Allmaras está incluído como experimental: atrito em tubos 30 a 34 % acima, recolamento após degrau para trás 21 a 39 % abaixo; previsto: células mais finas junto às paredes), calor no escoamento, escoamento não estacionário (com precisão temporal), superfícies livres, fluidos não newtonianos, peças em rotação | Escoamento laminar, estacionário, isotérmico de um fluido newtoniano, ou o modelo turbulento experimental para padrões qualitativos: ver [Simular o escoamento de fluidos](topic:flow-simulation); o painel avisa quando o número de Reynolds passa do regime laminar |
| Limites de tensão e regras de fabrico (saliências, direções de fresagem) no design generativo; vários materiais numa só forma | A forma mais rígida para um volume; verifique o resultado na Simulação: ver [Fazer crescer uma forma a partir de cargas](topic:generative-design) |
| Um resultado como sólido editável (suave, paramétrico) | STL, STEP de facetas ou uma peça com o resultado como sólido importado de facetas |
| Projeto de máquinas elétricas: um rotor a rodar num estator, binário em função do ângulo, aço saturado, ímanes que perdem força após o joelho, correntes de Foucault e perdas no ferro e no cobre; campos magnéticos em 3D ou em malhas curvas | Magnetostática bidimensional linear numa grelha na biblioteca de análise: bobinas, ferro, ímanes permanentes na sua linha de recuo, entreferros, indutância e força de atração: ver [Campos magnéticos em 2D](topic:magnetic-fields-2d) |

## Scripts

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Ajuda ao passar o rato, pontos de paragem e execução passo a passo no editor de scripts | Localizar, dobrar e completar já existem (ver [Escrever e executar scripts](topic:craftscript)); para o resto, use o seu próprio editor: {{ui:Guardar}} e {{ui:Abrir}} no grupo Script movem scripts para dentro e para fora; as funções incorporadas estão listadas em [A linguagem CraftScript](topic:craftscript-language) |
| Pontos de paragem e execução passo a passo de um script | `disp` e `fprintf` pelo caminho; {{key:Mod+Enter}} corre algumas linhas selecionadas de cada vez |
| Campos e gráficos que um script mostra desenhados na área de trabalho Design; scripts que alteram os parâmetros da peça | Mostram-se na área de trabalho Script; os scripts leem parâmetros com `param` (ver [Escrever e executar scripts](topic:craftscript)) e alteram-nos no separador {{ui:Parâmetros}} |
| Imagens e tabelas lado a lado com gráficos; editar um gráfico (zoom, limites de eixos) antes de o guardar | Lado a lado mostra os gráficos; guarde um gráfico como PNG, SVG ou CSV e acabe-o noutro lado |
| numpy e outros pacotes Python; Python offline; dobrar Python no editor; Pascal Script | A biblioteca padrão de Python, CraftScript e Lua: ver [Scripts em Python](topic:craftscript-python) |
| Passar funções Lua a funções incorporadas; chamar uma função de biblioteca a partir de Lua por um nome criado enquanto o script corre | Escreva o nome da função de biblioteca no script (`cs.static_tet(…)`), ou chame-a a partir de um script CraftScript |

## A aplicação

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Guardar, partilhar e histórico de versões na nuvem | Ainda não disponível. Guarde os ficheiros no seu computador e mantenha as versões pelo nome |
| A PartCraft como aplicação instalada no iPad e no iPhone | Use a PartCraft no navegador do dispositivo; em Android e no computador também funciona na CadCraft Studio (getcadcraft.com/download) |
| Menus de contexto (botão direito) | Barra de ferramentas e painel direito |
| Trabalhar totalmente offline desde o início | Apenas depois de a aplicação ter sido guardada para uso offline: ver [Trabalhar offline](common:offline) |

Indique, na página de suporte do site, o que mais lhe faz falta: isso orienta o que vem a seguir.

## Engenheiro (geradores e campos)

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Coletores, bocais e acessórios no permutador de calor gerado; curvas de temperatura para a resistência do material; perdas em tê no coletor | Os geradores criam o núcleo e os tubos; acrescente acessórios em Design; use os valores do material à temperatura ambiente com um coeficiente de segurança |
| Acrescentar geradores a partir do diretório de complementos com um clique | {{ui:Abrir}} na área de trabalho Engenheiro acrescenta um gerador a partir de um ficheiro |
| Um ficheiro de campo mais fino do que o tamanho de voxel do próprio gerador; ler ficheiros `.vdb` | Guarde um campo mais fino a partir de um script; `.vdb` é escrito, não lido |
| Cálculos de vasos de pressão segundo norma | As fórmulas clássicas de parede fina e de parede grossa, com o coeficiente de segurança que escolher; não uma margem normativa |
| Geradores para as outras aplicações | Só a PartCraft nesta versão |
