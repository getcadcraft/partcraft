---
title: O que ainda não foi implementado
summary: Tudo o que esta versão do PartCraft ainda não faz, de varreduras com torção a exibição em polegadas, cotas de desenho e subconjuntos, com o que fazer hoje no lugar.
keywords: faltando, ainda não, limites, limitações, planejamento, kernel exato, arredondamento, chanfro, casca, varredura, loft, importação STEP, simulação, manufatura, varredura com torção, tangência final do loft, arredondamento de face, equações, polegadas, cotas de desenho, subconjuntos, nuvem, tablet, celular
from: 9b868162
---

O PartCraft está em uma versão inicial. Esta página lista o que ele ainda não faz, para que você não procure, e o que fazer hoje no lugar. Nada aqui tem data.

## Precisa de um kernel exato

Esta versão constrói todas as peças com o kernel de malha (veja [O kernel de malha](topic:solid-kernels)). Tudo abaixo precisa de um kernel de geometria exato, que esta versão ainda não tem. Peças salvas com esses recursos ainda abrem: os recursos ficam no histórico, marcados como não construídos, e são mantidos quando você salva.

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| {{ui:Arredondamento}} e {{ui:Chanfro}} em arestas redondas; arredondamentos cujo raio muda ao longo da aresta; arredondamentos mesclados suavemente onde se encontram (o kernel de malha os une em meia-esquadria) | Arredondamento e Chanfro funcionam em arestas retas entre faces planas; arredonde outros cantos no esboço antes de extrudar ({{ui:Arredondamento}} em um esboço, {{key:F}}) |
| {{ui:Casca}} abrindo faces curvas; paredes de espessuras diferentes | Abra faces planas; adicione material com extrusões onde uma parede precisar ser mais grossa |
| {{ui:Varredura}}, {{ui:Loft}}, {{ui:Saída}} em faces curvas; extrusão até uma face, a próxima face ou um vértice; extrusões com afilamento | Use extrusão ou revolução, em etapas onde for preciso; extrusão até uma profundidade que você meça |
| {{ui:Nervura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e planificações | Extrude a chapa ou o perfil da nervura |
| Superfícies: concluir uma {{ui:Forma}} na peça, {{ui:Remendo}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Costurar}}, {{ui:Espessar}}, {{ui:Superfície deslocada}}, {{ui:Estender superfície}}, {{ui:Aparar superfície}} | Não disponível |
| Vários corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Matriz por caminho}}, recursos que criam um novo corpo | Um sólido só; matrizes e espelho copiam recursos |
| Esboços, planos, eixos e pontos em faces que só um kernel exato consegue achar (uma face criada por um arredondamento, a parede de um furo, uma face de um sólido importado) | Esboce em planos base, planos de referência e nas faces planas de extrusões e revoluções |
| Um resultado de projeto generativo aberto como peça ou adicionado a ela (vira um sólido importado) | Baixe o resultado como STL ou STEP |
| Editar as faces curvas de um arquivo STEP aberto como superfícies exatas; STEP exato de faces em spline, varridas e de revolução vindas de um arquivo STEP, laterais em spline, roscas modeladas, corpos e montagens em STL / OBJ / 3MF; STEP de outros modeladores de peças | {{ui:Abrir}} lê STEP como triângulos e mantém as faces planas, cilindros, cones, esferas e toros do arquivo para a exportação ([Abrir um arquivo STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} grava cada face analítica de forma exata e as mantém como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de peças ainda grava |
| Vistas de desenho com arcos verdadeiros | Vistas e vistas em corte são desenhadas a partir das facetas |
| Volumes, áreas e distâncias exatas | {{ui:Medir}} dá os números do sólido facetado, um pouco baixos em peças redondas; uma configuração de **Curvas** mais fina os aproxima |

Algumas linhas das tabelas abaixo sugerem um destes recursos como forma de contornar outra coisa. Essas sugestões valem quando um kernel exato voltar.

## Recursos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Arredondamentos de face, arredondamentos de meia-volta completa, arredondamentos com raios definidos em pontos ao longo de uma aresta | {{ui:Arredondamento}} constante ou de raio variável linear; vários recursos de arredondamento |
| Cascas com espessuras de parede diferentes | Uma espessura de {{ui:Casca}}; adicione material com extrusões onde uma parede precisar ser mais grossa |
| {{ui:Saída}} em faces de forma livre (spline) | {{ui:Saída}} funciona em faces planas, cilíndricas e cônicas |
| Varreduras com torção, varreduras de paredes finas e de superfície; tangência final no recurso Loft; um loft com um só trilho-guia; caminhos em spline | {{ui:Varredura}} com orientação fixa ou com escala final; um loft com dois ou mais trilhos-guia: veja [Varredura, loft e saída](topic:sweep-loft-draft) |
| Nervuras a partir de arcos ou splines; nervuras crescidas quadradas ao esboço (a partir de uma vista de topo); saída em nervuras; várias nervuras de um mesmo esboço | {{ui:Nervura}} a partir de uma cadeia de linhas no próprio plano da nervura: veja [Nervuras e gussets](topic:rib) |
| "Até" uma superfície curva, "até a próxima" parando em uma face curva | Até uma face plana ou um plano de referência |
| Furos com contrafuro, roscas em polegadas e de tubo, roscas cônicas, saídas de rosca e inícios de rosca chanfrados | Rebaixo com pequena profundidade; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: veja [Roscas em eixos e furos, desenhadas ou modeladas](topic:threads) |
| Extrusões de paredes finas | Desenhe as duas paredes do perfil |
| Cópias de matriz puladas uma a uma, matrizes de preenchimento | Use recursos separados; matrizes ao longo de uma curva: {{ui:Matriz por caminho}} |
| Matrizes copiadas, espelhos, arredondamentos, chanfros, cascas e sólidos importados | Copie o esboço ou o recurso em que se baseiam, ou faça uma matriz dele |
| Tangência exata (G1) nos pontos extraordinários de uma forma; juntar os remendos de uma forma em faces maiores | Aumente o Nível da forma: os remendos aproximados ficam menores; veja [Formas livres com Forma](topic:form-surfaces) |
| Uma forma feita de várias peças fechadas separadas em um só recurso; pontes entre formas | Uma peça fechada por recurso Forma; una-as com Unir |
| Escolher corpos de superfície na visualização (exceto pontos de aparar e de remendo); arredondamentos de superfície; desaparar; remendos G2; superfícies de Gordon tangentes a vizinhas curvas (tangentes a planos e faces planas estão prontas) | Escolha-os pelo nome no painel do recurso; espesse antes, depois arredonde o sólido |
| Uma lista de corpos no histórico; deixar corpos ocultos fora das exportações | Renomeie e oculte corpos na lista de corpos do painel da peça; apague ou suprima o recurso que criou um corpo para deixá-lo de fora |
| Escala não uniforme que mantém cilindros e cones analíticos; escala não uniforme de superfícies deslocadas | {{ui:Escalar corpo}} torna as faces curvas B-splines fechadas (dentro de 0.0000004 mm); escala uniforme continua exata |
| Combinar corpos de superfície; somas de Minkowski | {{ui:Costurar}} ou {{ui:Espessar}} primeiro, depois {{ui:Combinar}} |
| Análise de tolerâncias: pilhas de cotas que fazem curvas (laços de vetores 2D e 3D), sensibilidades calculadas pela geometria, Monte Carlo com outras distribuições, tolerâncias de tamanho em cotas de esboço, tolerância bônus pela condição do material | {{ui:Acúmulo}} em uma montagem: uma direção, pior caso e RSS, tolerâncias digitadas, a partir da tolerância geral da legenda ou de quadros GD&T: veja [Acúmulo de tolerâncias](topic:tolerance-stackup) |
| Encaixe: ordem de corte e linhas de entrada, cortar arestas compartilhadas uma vez, peças que devem ficar juntas; retalhos de rolos, estoque compartilhado entre projetos | {{ui:Encaixar peças planas em chapas…}} com espaçamento, margens, giros e sentido do grão: veja [Encaixar peças planas em chapas](topic:nest-flat-parts); chapas que sobram são guardadas e usadas primeiro: veja [Guardar e reutilizar sobras](topic:nest-offcuts); planeje o corte no software da sua cortadora |
| Chapa metálica: bainhas, degraus, abas de meia-esquadria e de contorno; abas em bordas curvas ou nas faces de uma aba base dobrada; dobras esboçadas; fechamentos de canto; ferramentas de conformação; converter um sólido em chapa metálica; a planificação de uma aba base dobrada com recortes; tabelas de dobra | {{ui:Aba base}} (uma chapa ou um perfil dobrado), {{ui:Aba de aresta}} nas bordas retas de uma chapa com alívios de dobra, e a planificação com um fator K: veja [Chapa metálica](topic:sheet-metal) |
| {{ui:Análise de ângulo de saída}} em montagens; localizar a linha de partição; análise de espessura de parede | {{ui:Análise de ângulo de saída}} na peça em Projeto: veja [Verificar a saída para moldagem e fundição](topic:draft-analysis); abra cada peça de uma montagem para verificá-la |

## Esboços

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Elipses, arcos tangentes, cônicas, splines com grau definido ou com pesos (NURBS) | Splines (cúbicas), arcos e círculos com relações de Tangente |
| Um ponto sobre uma spline (uma relação), relações de curvatura (G2) | Coloque o ponto próprio da spline onde ela deve passar |
| Cópias deslocadas de splines que acompanham mudanças posteriores; deslocamentos de cadeias com cantos agudos de spline | Desloque de novo após a mudança; arredonde o canto antes |
| Cópias de matriz que continuam ligadas ao original; matrizes ao longo de uma curva | Refaça a matriz após uma mudança |
| Projetar arestas circulares de forma livre ou inclinadas; geometria projetada que acompanha a peça | Projete arestas circulares retas e paralelas, depois cote |
| Cotas dirigidas (de referência) | Leia as medidas no painel ou nos dados da peça |
| Relações colineares | Paralela com distância 0 |
| Colar em outro programa (a área de transferência do sistema) | Exporte DXF, STEP, STL ou 3MF |
| Digitar arcos, coordenadas relativas ou polares | Digite linhas e círculos; desenhe arcos com a ferramenta Arco |
| Selecionar geometria sem ponteiro | Precisa de um clique ou toque |

## Parâmetros e unidades

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Configurações que mudam materiais; uma tabela de projeto em CSV que desliga recursos | Configurações definem parâmetros e ligam e desligam recursos: veja [Configurações e tabelas de projeto](topic:design-tables); `partcraft variants` gera configurações salvas pelo nome, com os recursos desligados incluídos: veja [Crie um pacote de variantes a partir das suas configurações](topic:variant-pack) |
| Equações nos números dos painéis dos recursos mais novos (plano, varredura, saída e similares) | Escreva-as em um script ou com `partcraft set` ([Scripts e linha de comando](topic:scripts-and-cli)) |
| Uma peça mostrada em polegadas | As medidas aparecem em milímetros; digite `2in` em uma caixa de número ou em uma expressão e vira 50.8 |

## Arquivos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Editar os próprios recursos de um sólido STEP importado (ele chega sem histórico) | Adicione ou corte material com seus próprios recursos |
| Ler cores, nomes, estrutura de montagem e PMI de STEP | Não disponível |
| Exportação glTF, OBJ, IGES, Parasolid; DWG de uma peça 3D (só o pacote de variantes grava DWG: a folha de desenho) | STL ou 3MF para malhas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou arquivos próprios de outros programas (arquivos `.3dm` abrem como um corpo: [Abrir um modelo .3dm como corpo sólido](topic:open-3dm-files)) | Peça um STEP, ou uma malha STL, OBJ ou 3MF fechada: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) |
| Estrutura de montagem (uma árvore com nomes de peças) no STEP exportado | O STEP de montagem é um composto dos sólidos posicionados |
| Salvar em uma pasta de sua escolha sem a caixa de download do navegador | Ative "perguntar onde salvar" nas configurações de download do navegador |

## Desenhos

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Cotas além das três dimensões gerais (tamanhos de furo, posições, tolerâncias de medidas) | Marque o PDF, ou exporte DXF e cote em um programa CAD 2D |
| Mais de uma vista em corte ou de detalhe; vistas alinhadas, interrompidas e auxiliares | Uma vista em corte e um detalhe por desenho |
| Texto livre, notas e tabelas na folha (além dos blocos de título e de revisão) | A nota de acabamento, ou texto acrescentado no PDF |
| Projeção de primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, layout automático, folhas paisagem A4–A0 e ANSI A–E |
| Vista em corte ao vivo: vários planos ou uma caixa de corte de uma vez, um contorno em volta do corte, salvar o corte no arquivo | Um plano por vez em {{ui:Vistas}} › {{ui:Vista em corte}}; veja [Olhe por dentro com uma vista em corte](topic:section-view) |
| Vistas de montagem com mais vistas, cotas ou balões que você possa mover | Uma vista isométrica (ou explodida) com balões automáticos e a lista de peças |
| Copiar e colar símbolos de GD&T e de acabamento | Posicione cada um com Datum, Quadro ou Acabamento |
| Manuais: arquivos STEP no {{ui:A partir de outro arquivo…}} do Illustrate, um modelo enviado diretamente do ModelCraft ou do BimCraft, imagens na qualidade do traçador de caminhos, 3D interativo dentro de um PDF | Abra o STEP em Projeto e inicie o manual com {{ui:A partir da peça aberta}}; salve o modelo como glTF (.glb); imagens PNG da visualização 3D; o arquivo 3D interativo: veja [Iniciar um manual no Illustrate](topic:illustrate) |

## Montagens

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Juntas de engrenagem, de cremalheira, de came e de parafuso; junta esférica limitada a um cone; juntas em faces curvas ou entre pontos | Juntas rígida, de revolução, deslizante, cilíndrica, plana, esférica e de pino em ranhura, em faces planas, cada valor com seus próprios limites: veja [Montar uma montagem](topic:build-assembly) |
| Etapas de explosão que giram peças, e arrastar peças que as juntas posicionam | Etapas de explosão retas; remova uma junta para mover uma peça à mão |
| Subconjuntos | Só um nível de peças |
| Engrenagens, cames, contato | Não disponível |

## Fabricação

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Desbaste 3D de faces curvas, desbaste adaptativo 3D, usinagem de restos; acabamento waterline, pencil, radial e em espiral; passes adaptativos escritos como arcos | Face, bolsão, adaptativo 2D, contorno, furação e chanfro em 2.5 eixos: veja [Fazer trajetórias e G-code](topic:manufacture); acabamento Parallel e Scallop do modelo inteiro: veja [Acabamento 3D](topic:finish-3d) |
| Trajetórias de 4 e 5 eixos, torneamento, sondagem | Configure um lado por vez com o eixo da ferramenta na aba Configuração |
| Verificação de colisão do porta-ferramenta e da haste | Observe os avisos de comprimento de canal e confira no simulador do comando da sua máquina |
| Sondagem, ciclos de vida da ferramenta e subprogramas; códigos de eixos 4 e 5 e de torno em um pós-processador; carregar arquivos de pós-processador de outros programas | Escreva ou altere um pós-processador no formato próprio do PartCraft: veja [Pós-processadores que você pode editar](topic:post-processors) |
| G-code em polegadas (G20) | Só milímetros (G21) |

## Simulação e projeto generativo

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Estudos não lineares: escoamento, grandes deflexões, contato entre peças, fadiga | Estática linear e frequências naturais: veja [Verificar tensão e deflexão](topic:simulation); mantenha o fator de segurança bem acima de 1 |
| Flambagem não linear (imperfeições, pós-flambagem, salto de estado) | Fatores de carga de flambagem linear com uma boa margem: veja [Calor, tensão térmica e flambagem](topic:thermal-and-buckling) |
| Radiação entre faces (fatores de forma), resistência de contato, materiais com propriedades dependentes da temperatura, inércia na tensão térmica (ondas de choque térmico) | Radiação para o entorno, tensão térmica estática ou quase estática ao longo do tempo, propriedades constantes: veja [Calor, tensão térmica e flambagem](topic:thermal-and-buckling) |
| Refinamento automático para calor transitório e estudos com carga térmica; deixar a malha mais grossa onde o erro é pequeno; uma meta em uma grandeza local (a tensão máxima em um ponto) | **Refinar automaticamente** para estudos estáticos, de flambagem, de frequências naturais e térmicos em regime, sobre o erro na peça toda: veja [Verificar tensão e deflexão](topic:simulation); caso contrário, reduza o tamanho do elemento |
| Cargas em rolamentos e parafusos, forças remotas, momentos, molas, deslocamentos prescritos | Forças e pressões em faces, gravidade; faces fixas e sem atrito |
| Simulação de montagens; materiais que variam com a direção (camadas impressas, compósitos) | Uma peça, um material isotrópico |
| Vários threads do solver para estudos tetraédricos, transferência de calor e projeto generativo; qualquer thread em uma página que não é isolada de origem cruzada | Estudos voxel, flambagem, tensão ao longo do tempo e escoamento laminar usam threads quando a página permite: veja [Configurações do PartCraft](topic:settings) |
| Escoamento turbulento com precisão de projeto (o modelo Spalart–Allmaras entra como experimental: atrito em tubo 30 a 34 % acima, recolamento após degrau traseiro 21 a 39 % curto; previsto: células mais finas perto das paredes), calor no escoamento, escoamento não estacionário (com precisão temporal), superfícies livres, fluidos não newtonianos, peças em rotação | Escoamento laminar, permanente e isotérmico de fluido newtoniano, ou o modelo turbulento experimental para padrões qualitativos: veja [Simular escoamento de fluido](topic:flow-simulation); o painel avisa quando o número de Reynolds passa do laminar |
| Limites de tensão e regras de fabricação (balanços, direções de fresagem) no projeto generativo; vários materiais em uma forma | Forma mais rígida para um volume; verifique o resultado na Simulação: veja [Crie uma forma a partir de cargas](topic:generative-design) |
| Um resultado como sólido editável (suave, paramétrico) | STL, STEP facetado ou uma peça com o resultado como sólido importado facetado |
| Projeto de máquina elétrica: um rotor girando dentro de um estator, torque contra ângulo, aço saturando, ímãs que perdem força após o joelho, correntes parasitas e perdas no ferro e no cobre; campos magnéticos em 3D ou em malhas curvas | Magnetostática 2D linear em uma grade na biblioteca de análise: bobinas, ferro, ímãs permanentes na linha de recuo, entreferros, indutância e força de atração: veja [Campos magnéticos em 2D](topic:magnetic-fields-2d) |

## Scripts

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Ajuda ao passar o mouse, pontos de parada e passo a passo no editor de script | Localizar, recolher e completar estão prontos (veja [Escrever e executar scripts](topic:craftscript)); para o resto, use seu próprio editor: {{ui:Salvar}} e {{ui:Abrir}} no grupo Script movem scripts para dentro e para fora; as funções integradas estão listadas em [A linguagem CraftScript](topic:craftscript-language) |
| Pontos de parada e passo a passo em um script | `disp` e `fprintf` ao longo do caminho; {{key:Mod+Enter}} executa algumas linhas selecionadas por vez |
| Campos e gráficos que um script mostra desenhados na área de trabalho Projeto; scripts que alteram os parâmetros da peça | Eles aparecem na área de trabalho Script; scripts leem parâmetros com `param` (veja [Escrever e executar scripts](topic:craftscript)) e os alteram na aba {{ui:Parâmetros}} |
| Imagens e tabelas lado a lado com gráficos; editar um gráfico (zoom, limites de eixo) antes de salvá-lo | Lado a lado mostra os gráficos; salve um gráfico como PNG, SVG ou CSV e finalize em outro lugar |
| numpy e outros pacotes Python; Python offline; dobrar Python no editor; Pascal Script | Biblioteca padrão do Python, CraftScript e Lua: veja [Scripts em Python](topic:craftscript-python) |
| Passar funções Lua para funções integradas; chamar uma função de biblioteca a partir de Lua por um nome criado durante a execução do script | Escreva o nome da função de biblioteca no script (`cs.static_tet(…)`), ou chame-a a partir de um script CraftScript |

## O aplicativo

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Salvamento na nuvem, compartilhamento e histórico de versões | Ainda não disponível. Salve os arquivos no seu computador e mantenha versões pelo nome |
| PartCraft como aplicativo instalado no iPad e no iPhone | Use o PartCraft no navegador do dispositivo; no Android e no desktop ele também roda no CadCraft Studio (getcadcraft.com/download) |
| Menus de contexto (clique com o botão direito) | Barra de ferramentas e painel direito |
| Trabalho totalmente offline a partir de um início novo | Só quando o app foi salvo para uso offline: veja [Trabalhar offline](common:offline) |

Informe o que você mais sente falta pela página de suporte do site: ela define o que vem em seguida.

## Engenheiro (geradores e campos)

| Ainda não implementado | Em vez disso, hoje |
|---|---|
| Coletores, bocais e conexões no trocador de calor gerado; curvas de temperatura para a resistência do material; perdas em tê no coletor | Os geradores criam o núcleo e os tubos; adicione acessórios em Projeto; use os valores do material em temperatura ambiente com um fator de segurança |
| Adicionar geradores do diretório de complementos com um clique | {{ui:Abrir}} na área de trabalho Engenheiro adiciona um gerador a partir de um arquivo |
| Um arquivo de campo mais fino que o tamanho de voxel do próprio gerador; ler arquivos `.vdb` | Salve um campo mais fino a partir de um script; `.vdb` é gravado, não lido |
| Cálculos de código para vasos de pressão | As fórmulas clássicas de parede fina e de parede grossa, com o fator de segurança que você escolher; não é uma margem de norma |
| Geradores para os outros aplicativos | Só o PartCraft nesta versão |
