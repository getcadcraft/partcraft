---
title: O que ainda não foi implementado
summary: Tudo o que esta versão do PartCraft ainda não faz, de varreduras torcidas a exibição em polegadas, cotas de desenho e subconjuntos, com o que fazer hoje no lugar.
keywords: faltando, ainda não, limites, limitações, roteiro, núcleo exato, arredondamento, chanfro, casca, varredura, loft, importação STEP, simulação, manufatura, varredura torcida, tangência final do loft, arredondamento de face, equações, polegadas, cotas de desenho, subconjuntos, nuvem, tablet, celular
from: 97b10a29
---

O PartCraft é uma versão inicial. Esta página lista o que ele ainda não faz, para que você não procure por isso, e o que fazer hoje no lugar. Nada aqui tem data prevista.

## Precisa de um núcleo exato

Esta versão constrói toda peça com o núcleo de malha (veja [O núcleo de malha](topic:solid-kernels)). Tudo o que está abaixo precisa de um núcleo de geometria exata, que esta versão ainda não tem. Peças salvas com esses recursos ainda abrem: os recursos permanecem no histórico, marcados como não implementados, e são mantidos ao salvar.

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| {{ui:Arredondamento}} e {{ui:Chanfro}} em arestas arredondadas; arredondamentos cujo raio muda ao longo da aresta; arredondamentos mesclados suavemente onde se encontram (o núcleo de malha os corta em meia-esquadria) | Arredondamento e Chanfro funcionam em arestas retas entre faces planas; arredonde outros cantos no esboço antes de extrudar ({{ui:Arredondamento}} num esboço, {{key:F}}) |
| {{ui:Casca}} abrindo faces curvas; paredes de espessuras diferentes | Abra faces planas; acrescente material com extrusões onde uma parede deve ser mais grossa |
| {{ui:Varredura}}, {{ui:Loft}}, {{ui:Saída}} em faces curvas; extrudar até uma face, a face seguinte ou um vértice; extrusões cônicas | Extrude ou revolva, em etapas quando necessário; extrude até uma profundidade que você meça |
| {{ui:Nervura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e planificações | Extrude a chapa ou o perfil da nervura |
| Superfícies: acabar uma {{ui:Forma}} na peça, {{ui:Remendo}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Costurar}}, {{ui:Espessar}}, {{ui:Superfície deslocada}}, {{ui:Estender superfície}}, {{ui:Aparar superfície}} | Não disponível |
| Vários corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Matriz por caminho}}, recursos que criam um novo corpo | Um sólido; matrizes e espelhamentos copiam recursos |
| Esboços, planos, eixos e pontos em faces que só um núcleo exato consegue encontrar (uma face feita por um arredondamento, a parede de um furo, uma face de um sólido importado) | Esboce em planos base, planos de referência e nas faces planas de extrusões e revoluções |
| Um resultado de projeto generativo aberto como peça ou acrescentado a ela (ele vira um sólido importado) | Baixe o resultado como STL ou STEP |
| Editar as faces curvas de um arquivo STEP aberto como superfícies exatas; STEP exato de faces em spline, varridas e de revolução de um arquivo STEP; laterais em spline; roscas modeladas; corpos STL / OBJ / 3MF e montagens; STEP para outros modeladores de peças | {{ui:Abrir}} lê o STEP como triângulos e mantém as faces planas, cilindros, cones, esferas e toros do arquivo para a exportação ([Abrir um arquivo STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} grava exatamente cada face analítica e mantém essas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de peças continua gravando |
| Arcos verdadeiros em vistas de desenho | Vistas e vistas em corte são desenhadas a partir das facetas |
| Volumes, áreas e distâncias exatos | {{ui:Medir}} dá os números do sólido facetado, um pouco baixos em peças redondas; uma configuração de **Curvas** mais fina os aproxima |

Algumas linhas das tabelas abaixo sugerem um desses recursos como solução alternativa para outra coisa. Essas sugestões valem quando um núcleo exato estiver de volta.

## Recursos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Arredondamentos de face, arredondamentos de meia-volta completa, arredondamentos com raios definidos em pontos ao longo de uma aresta | {{ui:Arredondamento}} de raio constante ou linearmente variável; vários recursos de arredondamento |
| Cascas com espessuras de parede diferentes | Uma única espessura de {{ui:Casca}}; acrescente material com extrusões onde uma parede deve ser mais grossa |
| Saída em faces de forma livre (spline) | {{ui:Saída}} funciona em faces planas, cilíndricas e cônicas |
| Varreduras torcidas, varreduras de parede fina e de superfície; tangência final no recurso Loft; um loft com uma guia; caminhos em spline | {{ui:Varredura}} com orientação fixa ou uma escala final; um loft com duas ou mais guias: veja [Varredura, loft e saída](topic:sweep-loft-draft) |
| Nervuras a partir de arcos ou splines; nervuras crescidas em esquadro com o esboço (a partir de uma vista de topo); saída em nervuras; várias nervuras de um mesmo esboço | {{ui:Nervura}} a partir de uma cadeia de linhas no próprio plano da nervura: veja [Nervuras e chapas de ligação](topic:rib) |
| "Até" uma superfície curva, "até o próximo" parando numa face curva | Até uma face plana ou um plano de referência |
| Furos com contrafuro, roscas em polegadas e de tubo, roscas cônicas, saídas de rosca e inícios de rosca chanfrados | Rebaixo de pequena profundidade; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: veja [Roscas em eixos e furos, desenhadas ou modeladas](topic:threads) |
| Extrusões de recurso fino | Desenhe as duas paredes do perfil |
| Cópias de matriz puladas uma a uma; matrizes de preenchimento | Use recursos separados; matrizes ao longo de uma curva: {{ui:Matriz por caminho}} |
| Copiar matrizes, espelhamentos, arredondamentos, chanfros, cascas e sólidos importados | Copie o esboço ou o recurso sobre o qual são construídos, ou faça uma matriz dele |
| Tangência exata (G1) nos pontos singulares de uma forma; fundir os remendos de uma forma em faces maiores | Aumente o Nível da forma: os remendos aproximados ficam menores; veja [Formas de forma livre com Forma](topic:form-surfaces) |
| Uma forma feita de várias peças fechadas separadas num só recurso; pontes entre formas | Uma peça fechada por recurso de Forma; una-as com Juntar |
| Selecionar corpos de superfície na vista (exceto pontos de aparar e de remendo); arredondamentos de superfície; desfazer aparação; remendos G2; superfícies de Gordon tangentes a vizinhas curvas (tangentes a planos e faces planas já existem) | Escolha-os pelo nome no painel do recurso; espesse primeiro e depois arredonde o sólido |
| Uma lista de corpos no histórico; deixar corpos ocultos fora das exportações | Renomeie e oculte corpos na lista de corpos do painel da peça; exclua ou suprima o recurso que criou um corpo para deixá-lo de fora |
| Uma escala não uniforme que mantenha cilindros e cones analíticos; escala não uniforme de superfícies deslocadas | {{ui:Escalar corpo}} torna as faces curvas em B-splines fechadas (dentro de 0.0000004 mm); uma escala uniforme continua exata |
| Combinar corpos de superfície; somas de Minkowski | Primeiro {{ui:Costurar}} ou {{ui:Espessar}}, depois {{ui:Combinar}} |
| Análise de tolerâncias: acúmulos que fazem curvas (laços vetoriais 2D e 3D), sensibilidades calculadas a partir da geometria, Monte Carlo com outras distribuições, tolerâncias de dimensão em cotas de esboço, tolerância bônus pela condição do material | {{ui:Acúmulo}} numa montagem: uma direção, pior caso e RSS, tolerâncias digitadas, a partir da tolerância geral da legenda ou de quadros GD&T: veja [Acúmulos de tolerância](topic:tolerance-stackup) |
| Encaixe: ordem de corte e entradas, corte de arestas compartilhadas uma só vez, peças que devem ficar juntas; sobras de bobinas, material compartilhado entre projetos | {{ui:Encaixar peças planas em chapas…}} com espaçamento, margens, giros e sentido de laminação: veja [Encaixar peças planas em chapas](topic:nest-flat-parts); chapas que sobram são guardadas e usadas primeiro: veja [Guardar e reutilizar retalhos](topic:nest-offcuts); planeje o corte no software da sua cortadeira |
| Chapa metálica: bordas dobradas, degraus, abas de meia-esquadria e de contorno; abas em arestas curvas ou nas faces de uma aba base dobrada; dobras desenhadas no esboço; fechamentos de canto; ferramentas de conformação; conversão de um sólido em chapa; a planificação de uma aba base dobrada com recortes; tabelas de dobra | {{ui:Aba base}} (uma chapa ou um perfil dobrado), {{ui:Aba de aresta}} nas arestas retas de uma chapa, com alívios de dobra, e a planificação com fator K: veja [Chapa metálica](topic:sheet-metal) |
| Análise de ângulo de saída em montagens; localizar a linha de partição; análise de espessura de parede | {{ui:Análise de ângulo de saída}} na peça, no Design: veja [Verificar ângulo de saída para moldagem e fundição](topic:draft-analysis); abra cada peça de uma montagem para verificá-la |

## Esboços

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Elipses, arcos tangentes, cônicas, splines com grau ou pesos definidos (NURBS) | Splines (cúbicas), arcos e círculos com relações de tangência |
| Um ponto sobre uma spline (uma relação), relações de curvatura (G2) | Coloque um ponto da própria spline onde ela deve passar |
| Cópias deslocadas de splines que acompanham alterações posteriores; deslocamentos de cadeias com cantos vivos em spline | Desloque de novo depois da alteração; arredonde o canto antes |
| Cópias de matriz que permanecem ligadas ao original; matrizes ao longo de uma curva | Refaça a matriz após uma alteração |
| Projetar arestas circulares de forma livre ou inclinadas; geometria projetada que acompanha a peça | Projete arestas circulares retas e paralelas e depois cote |
| Cotas dirigidas (de referência) | Leia as medidas no painel ou nos dados da peça |
| Relações colineares | Paralela com distância 0 |
| Colar em outro programa (a área de transferência do sistema) | Exporte DXF, STEP, STL ou 3MF |
| Digitar arcos, coordenadas relativas ou polares | Digite linhas e círculos; desenhe arcos com a ferramenta {{ui:Arco}} |
| Selecionar geometria sem um ponteiro | Precisa de um clique ou de um toque |

## Parâmetros e unidades

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Configurações que mudam materiais; uma tabela de projeto CSV que desliga recursos | As configurações definem parâmetros e ligam e desligam recursos: veja [Configurações e tabelas de projeto](topic:design-tables); `partcraft variants` cria configurações salvas pelo nome, inclusive com recursos desligados: veja [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack) |
| Equações nos números dos painéis próprios dos recursos mais novos (plano, varredura, saída e similares) | Escreva-as num script ou com `partcraft set` ([Scripts e a linha de comando](topic:scripts-and-cli)) |
| Uma peça exibida em polegadas | As medidas aparecem em milímetros; digite `2in` numa caixa numérica ou numa expressão e ela vira 50.8 |

## Arquivos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Editar os recursos próprios de um sólido STEP importado (ele chega sem histórico) | Acrescente ou corte material com recursos seus |
| Ler cores, nomes, estrutura de montagem e PMI de um STEP | Não disponível |
| Exportação em glTF, OBJ, IGES, Parasolid; DWG de uma peça 3D (só o pacote de variantes grava um DWG: a folha de desenho) | STL ou 3MF para malhas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou arquivos próprios de outros programas (arquivos `.3dm` abrem como um corpo: [Abrir um modelo .3dm como corpo sólido](topic:open-3dm-files)) | Peça um STEP, ou uma malha STL, OBJ ou 3MF fechada: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) |
| Estrutura de montagem (uma árvore com nomes de peças) no STEP exportado | O STEP de montagem é um composto único dos sólidos posicionados |
| Salvar numa pasta à sua escolha sem o download do navegador | Ative "perguntar onde salvar" nas configurações de download do navegador |

## Desenhos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Cotas além das três dimensões gerais (medidas de furos, posições, tolerâncias de medidas) | Marque o PDF, ou exporte DXF e cote num programa CAD 2D |
| Mais de um corte ou detalhe; vistas alinhadas, interrompidas e auxiliares | Um corte e um detalhe por desenho |
| Texto livre, notas e tabelas na folha (além dos blocos de legenda e de revisão) | A nota de acabamento, ou texto acrescentado no PDF |
| Projeção do primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, layout automático, folhas em paisagem A4–A0 e ANSI A–E |
| Vista de corte ao vivo: vários planos ou uma caixa de corte de uma vez, um contorno em volta do corte, salvar o corte no arquivo | Um plano por vez, em {{ui:Vistas}} › {{ui:Vista em corte}}; veja [Olhar por dentro com uma vista em corte](topic:section-view) |
| Desenhos de montagem com mais vistas, cotas ou balões que você possa mover | Uma vista isométrica (ou explodida) com balões automáticos e a lista de peças |
| Copiar e colar símbolos de GD&T e de acabamento | Posicione cada um com Referência, Quadro ou {{ui:Acabamento}} |
| Manuais: arquivos STEP em {{ui:A partir de outro arquivo…}} do Illustrate, um modelo entregue direto do ModelCraft ou do BimCraft, imagens na qualidade do traçador de caminhos, 3D interativo dentro de um PDF | Abra o STEP no Design e inicie o manual com {{ui:A partir da peça aberta}}; salve o modelo como glTF (.glb); imagens PNG da vista 3D; o arquivo 3D interativo: veja [Iniciar um manual no Illustrate](topic:illustrate) |

## Montagens

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Juntas de engrenagem, cremalheira, came e parafuso; uma junta esférica limitada a um cone; juntas em faces curvas ou entre pontos | Juntas rígidas, rotativas, deslizantes, cilíndricas, planas, esféricas e de pino em ranhura, em faces planas, cada valor com seus próprios limites: veja [Criar uma montagem](topic:build-assembly) |
| Passos de explosão que giram peças, e arrastar peças que as juntas posicionam | Passos de explosão retos; remova uma junta para mover uma peça à mão |
| Subconjuntos | Um só nível de peças |
| Engrenagens, cames, contato | Não disponível |

## Manufatura

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Desbaste adaptativo 3D e desbaste por deslocamento em 3D; acabamento por cota constante (waterline), de lápis, radial e em espiral; passadas adaptativas gravadas como arcos | Desbaste 3D em linhas retas e usinagem de sobras: veja [Desbaste 3D e usinagem de sobras](topic:rough-3d); acabamento Paralela e Crista constante: veja [Acabamento 3D](topic:finish-3d); face, bolsão, adaptativo 2D, contorno, furação e chanfro de 2.5 eixos: veja [Gerar trajetórias e G-code](topic:manufacture) |
| Usinagem com a lateral da ferramenta (swarf), trajetórias de desbaste em linhas de fluxo e de vários eixos, códigos de plano de trabalho inclinado (G68.2), verificações de colisão do porta-ferramenta e da máquina; uma simulação de cortes de 5 eixos e rotativos | Uma ferramenta inclinada em qualquer operação, acabamento de 5 eixos com fresa de ponta esférica e acabamento rotativo de 4º eixo: veja [Usinagem de 4 e 5 eixos](topic:multi-axis) |
| Mandrilamento e roscas internas num torno, ciclos G71/G76, arcos em trajetórias de torneamento, ferramentas motorizadas, um segundo eixo-árvore | Torneamento externo: faceamento, desbaste, acabamento, ranhura, cortar peça, rosca, furação no centro: veja [Torneamento](topic:turning) |
| Apalpar um ângulo ou um canto, um ajustador de ferramenta, medir uma dimensão contra uma tolerância | Apalpar uma face, um lado, um furo ou uma saliência para definir a origem da peça: veja [Apalpação](topic:probing) |
| Verificações de colisão do porta-ferramenta e da haste | Acompanhe os avisos de comprimento de canal e verifique no simulador do seu comando |
| Vida útil da ferramenta e ciclos de subprograma num pós-processador; carregar arquivos de pós-processador de outros programas | Escreva ou altere um pós-processador no formato próprio do PartCraft: veja [Pós-processadores que você pode editar](topic:post-processors) |
| G-code em polegadas (G20) | Somente milímetros (G21) |

## Simulação e projeto generativo

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Estudos não lineares: escoamento, grandes deflexões, contato entre peças, fadiga | Estático linear e frequências naturais: veja [Verificar tensão e deflexão](topic:simulation); mantenha o fator de segurança bem acima de 1 |
| Flambagem não linear (imperfeições, pós-flambagem, salto de estabilidade) | Fatores de carga de flambagem lineares com uma margem generosa: veja [Calor, tensão térmica e flambagem](topic:thermal-and-buckling) |
| Radiação entre faces (fatores de visão), resistência de contato, materiais dependentes da temperatura, inércia na tensão térmica (ondas de choque térmico) | Radiação para o entorno, tensão térmica estacionária ou quase estática ao longo do tempo, propriedades constantes: veja [Calor, tensão térmica e flambagem](topic:thermal-and-buckling) |
| Refinamento automático para calor transitório e estudos com carga térmica; malha mais grossa onde o erro é pequeno; uma meta sobre uma grandeza local (a tensão de pico em um ponto) | **Refinar automaticamente** para estudos estáticos, de flambagem, de frequência natural e térmicos estacionários, sobre o erro na peça inteira: veja [Verificar tensão e deflexão](topic:simulation); caso contrário, reduza o tamanho do elemento |
| Cargas de mancal e de parafuso, forças remotas, momentos, molas, deslocamentos prescritos | Forças e pressões em faces, gravidade; faces fixas e sem atrito |
| Simulação de montagens; materiais que variam conforme a direção (camadas impressas, compósitos) | Uma peça, um material isotrópico |
| Várias threads do solucionador para estudos tetraédricos, transferência de calor e projeto generativo; quaisquer threads numa página sem isolamento de origem cruzada | Estudos de voxel, flambagem, tensão ao longo do tempo e escoamento laminar usam as threads onde a página permitir: veja [Configurações do PartCraft](topic:settings) |
| Escoamento turbulento com precisão de projeto (o modelo Spalart–Allmaras está incluído como experimental: atrito em tubo 30 a 34 % acima, recolamento após degrau 21 a 39 % abaixo; previsto: células mais finas perto das paredes), calor no escoamento, escoamento não estacionário (com precisão temporal), superfícies livres, fluidos não newtonianos, peças em rotação | Laminar, estacionário e isotérmico de um fluido newtoniano, ou o modelo turbulento experimental para padrões qualitativos: veja [Simular escoamento de fluidos](topic:flow-simulation); o painel avisa quando o número de Reynolds passa do laminar |
| Limites de tensão e regras de fabricação (balanços, direções de fresamento) no projeto generativo; vários materiais numa forma | Forma mais rígida para um volume; verifique o resultado na Simulação: veja [Fazer crescer uma forma a partir de cargas](topic:generative-design) |
| Um resultado como sólido editável (suave, paramétrico) | STL, STEP facetado, ou uma peça com o resultado como sólido facetado importado |
| Projeto de máquinas elétricas: um rotor girando num estator, torque em função do ângulo, aço em saturação, ímãs que perdem força após o joelho, correntes parasitas e perdas no ferro e no cobre; campos magnéticos em 3D ou em malhas curvas | Magnetostática linear 2D numa grade na biblioteca de análise: bobinas, ferro, ímãs permanentes na sua reta de recuo, entreferros, indutância e força de atração: veja [Campos magnéticos em 2D](topic:magnetic-fields-2d) |

## Scripts

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Ajuda ao passar o mouse, pontos de parada e passo a passo no editor de scripts | Localizar, recolher e completar estão disponíveis (veja [Escrever e executar scripts](topic:craftscript)); para o resto, use seu próprio editor: {{ui:Salvar}} e {{ui:Abrir}} no grupo Script movem scripts para dentro e para fora; as funções integradas estão listadas em [A linguagem CraftScript](topic:craftscript-language) |
| Pontos de parada e passo a passo num script | `disp` e `fprintf` pelo caminho; {{key:Mod+Enter}} executa algumas linhas selecionadas por vez |
| Campos e gráficos que um script mostra desenhados na área de trabalho Design; scripts que alteram os parâmetros da peça | Eles aparecem na área de trabalho Script; scripts leem parâmetros com `param` (veja [Escrever e executar scripts](topic:craftscript)) e os alteram na guia {{ui:Parâmetros}} |
| Imagens e tabelas lado a lado com gráficos; editar um gráfico (zoom, limites dos eixos) antes de salvá-lo | Lado a lado mostra os gráficos; salve um gráfico como PNG, SVG ou CSV e finalize-o em outro lugar |
| numpy e outros pacotes Python; Python offline; recolher Python no editor; Pascal Script | A biblioteca padrão do Python, CraftScript e Lua: veja [Scripts em Python](topic:craftscript-python) |
| Passar funções Lua a funções integradas; chamar uma função de biblioteca a partir do Lua por um nome montado enquanto o script roda | Escreva o nome da função de biblioteca no script (`cs.static_tet(…)`), ou chame-a a partir de um script CraftScript |

## O aplicativo

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Salvamento na nuvem, compartilhamento e histórico de versões | Ainda não disponível. Salve os arquivos no seu computador e mantenha versões pelo nome |
| PartCraft como aplicativo instalado no iPad e no iPhone | Use o PartCraft no navegador do dispositivo; no Android e no computador ele também roda no CadCraft Studio (getcadcraft.com/download) |
| Menus de contexto (botão direito) | Barra de ferramentas e painel direito |
| Trabalhar totalmente offline desde o início | Somente quando o aplicativo tiver sido salvo para uso offline: veja [Trabalhar offline](common:offline) |

Informe o que mais lhe faz falta pela página de suporte do site: ela define o que vem depois.

## Engineer (geradores e campos)

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Coletores, bocais e conexões no trocador de calor gerado; curvas de temperatura para resistência do material; perdas em tê no coletor de distribuição | Os geradores constroem o núcleo e os tubos; acrescente conexões no Design; use os valores do material à temperatura ambiente com um fator de segurança |
| Adicionar geradores do diretório de complementos com um clique | {{ui:Abrir}} na área de trabalho Engineer adiciona um gerador a partir de um arquivo |
| Um arquivo de campo mais fino que o tamanho de voxel do próprio gerador; ler arquivos `.vdb` | Salve um campo mais fino a partir de um script; `.vdb` é gravado, não lido |
| Cálculos de código para vasos de pressão | As fórmulas clássicas de parede fina e de parede grossa, com o fator de segurança que você escolher; não é uma margem de norma |
| Geradores para os outros aplicativos | Somente o PartCraft nesta versão |
