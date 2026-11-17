---
title: Vindo de outro modelador paramétrico
summary: Como os hábitos dos modeladores paramétricos de peças para desktop correspondem ao PartCraft, e as diferenças que desorientam os utilizadores experientes na primeira hora.
keywords: mudar, migrar, familiar, gestor de operações, árvore de projeto, cota inteligente, extrusão de saliência, extrusão de corte, assistente de furos, acoplamentos, deteção de interferências, barra de reversão, gestor de propriedades, rato, diferenças
from: fbacaee1
---

Se já conhece o SolidWorks, a maioria das ideias do PartCraft será familiar: esboços nos planos Alçado, Planta e Lateral, relações e cotas inteligentes, um histórico de operações com uma barra de reversão, e montagens posicionadas por acoplamentos. A forma como se chega a elas é diferente em alguns pontos, e esta primeira versão faz menos. Esta página relaciona os seus hábitos e lista as surpresas.

## Hábitos e equivalências

| Está habituado a | No PartCraft |
|---|---|
| A árvore de projeto à esquerda | O histórico à esquerda: planos, depois operações, com os esboços recuados sob a operação que os usa |
| Planos Alçado, Planta e Lateral | Os mesmos três, pela origem. Alçado é o plano XY, Planta é XZ, Lateral é YZ; Y aponta para cima |
| Esboço sobre um plano ou face, depois o canto de confirmação para sair | {{ui:Sketch}} ({{key:S}}) sobre um plano ou face plana selecionada; {{ui:Exit}} ou {{key:Esc}} até fechar |
| Cota inteligente | {{ui:Dimension}} ({{key:D}}). Clique num ou em dois itens e depois no local onde fica o número. O sítio onde o coloca escolhe horizontal, vertical ou alinhada |
| Adicionar relações no painel de propriedades | Selecione itens e depois os botões de relação no painel da direita (Coincidente, Horizontal, Paralela, Tangente, Igual e assim por diante) |
| Relações automáticas ao esboçar | Os snaps acrescentam relações coincidentes, ponto sobre curva, horizontais e verticais |
| Cores do esboço azul / preto / vermelho | A mesma ideia: azul sub-definido, preto totalmente definido, vermelho sobre-definido. A etiqueta mostra os graus de liberdade restantes |
| Linha de eixo para revoluções | {{ui:Centerline}} ({{key:N}}); {{ui:Revolve}} usa a primeira linha de eixo, a menos que selecione outro eixo |
| Boleado de esboço | {{ui:Fillet}} ({{key:F}}) num esboço: clique no canto e escreva o raio |
| Alternar geometria de construção | {{ui:Construction}} ({{key:Q}}) |
| Saliência extrudida | {{ui:Extrude}}: Cega, Plano médio, Até face / seguinte / vértice, Deslocamento a partir da face, segunda direção, conicidade, um contorno (Selecionar regiões) |
| Corte extrudido | {{ui:Cut}}: começa como Através de tudo; mude para Cega para uma caixa |
| Saliência ou corte por revolução | {{ui:Revolve}} / {{ui:More}} › {{ui:Revolved cut}} |
| Plano / eixo / ponto de referência | {{ui:More}} › {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}} (ver [Planos, eixos e pontos de referência](topic:reference-geometry)) |
| Saliência ou corte por varrimento / loft, saída | {{ui:More}} › {{ui:Draft}} em faces planas (ver [Varrimento, loft e saída](topic:sweep-loft-draft)). {{ui:Sweep}} e {{ui:Loft}} ainda não estão implementados nesta versão (precisam de um núcleo exato) |
| Assistente de furos | {{ui:Hole}} em cada ponto de esboço solto: simples, rebaixo, escareado (90° / 82°) ou roscado ISO métrico M2–M24, passante ou cego |
| Matriz linear / circular, espelho | {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}} (operações ou o corpo inteiro) |
| Boleado e chanfro em arestas | {{ui:Fillet}} / {{ui:Chamfer}}: clique numa aresta, {{key:Shift}}+clique em mais, e depois no botão. Um raio; chanfros iguais, de duas distâncias ou de distância e ângulo. Nesta versão, apenas arestas retas entre duas faces planas, e os arredondamentos que se encontram num canto são em meia-esquadria. Arredonde ou chanfre as arestas curvas no esboço ({{ui:Fillet}} num esboço, {{key:F}}) |
| Casca | {{ui:Shell}}: clique nas faces planas a abrir e depois no botão. Uma espessura de parede |
| Abrir um ficheiro STEP | {{ui:Open}}: lido como triângulos, um corpo sólido sobre o qual construir ([Abrir um ficheiro STEP](topic:import-step)) |
| Editar operação, depois OK | Clique na operação; altere os números à direita; reconstrói-se à medida que escreve. Sem OK, sem Cancelar: use {{key:Mod+Z}} |
| Editar esboço | Faça duplo clique no esboço no histórico |
| Reconstruir | Automático após cada alteração. Não existe tecla de reconstrução |
| Suprimir / reativar | {{ui:Suppress}} / {{ui:Unsuppress}} no painel da direita |
| Arrastar a barra de reversão | {{ui:Roll back to here}} numa operação; clique em "Barra de reversão · avançar" para regressar |
| Arrastar uma operação na árvore para reordenar | {{ui:Move up}} / {{ui:Move down}} ou {{key:Alt+Up}} / {{key:Alt+Down}}; recusado com o motivo quando quebraria uma dependência |
| Editar cotas com duplo clique no modelo | Selecione a operação: as cotas do seu esboço são listadas no painel da direita |
| Acoplamentos: coincidente, concêntrico, distância, ângulo | {{ui:Joint}} ({{key:J}}): selecione uma face plana em cada peça; a junta põe-nas face a face. **Centrar em** um eixo funciona como concêntrico; **Deslocamento** como distância; **Ângulo** como ângulo |
| Componente fixo | A primeira peça é fixa; {{ui:Make it the grounded part}} altera-a |
| Inserir componente | {{ui:Add copy}}, {{ui:Duplicate}} (outra cópia) ou {{ui:Insert}} (a partir de um ficheiro de peça) |
| Editar peça na montagem | {{ui:Edit part}} e depois {{ui:Back}} |
| Deteção de interferências | {{ui:Clash}} |
| Mover um componente para ver o movimento | Arraste o cursor de ângulo ou deslocamento de uma junta de revolução ou deslizante; {{ui:Check the motion for clashes}} varre-a. Uma peça sem junta: **Mover à mão** (setas para arrastar, ou valores escritos) |
| Medir / inspecionar | {{ui:Views}} e depois {{ui:Measure}} ({{key:M}}): distâncias, ângulos, raios, áreas; {{ui:Mass properties}} |
| Vista explodida, lista de materiais (BOM) | Numa montagem sem nada selecionado: **Vistas explodidas** e **Lista de materiais** no painel da direita |
| Propriedades de massa | A caixa **Peça**: volume, área de superfície e tamanho do sólido facetado (ligeiramente baixo em peças redondas). Sem massa: ainda não há materiais |
| Guardar, Guardar como STEP | {{ui:Save}} transfere um `.partcraft.json`; {{ui:Export}} tem STL, 3MF, STEP exato (AP242 ou AP214), STEP facetado, DXF e um desenho em PDF |
| Criar um desenho a partir da peça | {{ui:Drawing}} › "Desenho": uma folha A3 automática com três vistas, isométrica, um corte de secção, um detalhe, datums, quadros de controlo de características e símbolos de acabamento. Apenas as dimensões globais são cotadas |
| Rodar com o botão do meio | **Arrastar com o botão esquerdo** roda aqui. Arrastar com o botão do meio ou o direito desloca a vista. A roda faz zoom no ponteiro |
| Orientação da vista, Normal a | Menu {{ui:Views}}; {{ui:Normal to}} para uma face, plano ou esboço selecionado |
| Ampliar para ajustar (F) | {{key:F}}, ou {{ui:Fit}} (num esboço, {{key:F}} é a ferramenta Boleado) |
| Menus de clique direito | Nenhum. Arrastar com o botão direito desloca a vista; num esboço, o clique direito termina uma cadeia de linhas |

:::tip
Se já conhece o SolidWorks, escolha o estilo de menu {{ui:Feature tree}} em {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}: um friso com os separadores Operações, Esboço, Superfícies, Avaliar, Desenho, Montagem e Vista; o botão do meio orbita, {{key:Shift}} e o botão do meio deslocam a vista, e o botão esquerdo apenas seleciona. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse).
:::

## Diferenças que desorientam as pessoas

**O esboço inteiro é o perfil.** Extrudir e Revolução usam todos os circuitos fechados do esboço. Não pode selecionar uma região ou um contorno de um esboço para uma operação. Use um esboço por operação.

**Qual esboço uma operação usa.** Uma operação usa o esboço que acabou de fechar ou o selecionado no histórico. Sem nada selecionado, usa o esboço mais recente que nenhuma operação utilize ainda. Se obtiver o errado, selecione o esboço certo e escolha a operação outra vez.

**As alterações aplicam-se à medida que escreve.** Não existe uma caixa de diálogo de operação com OK e Cancelar. Cada número reconstrói a peça de imediato, e {{key:Mod+Z}} é o caminho de volta. A lista de anulação abrange, por igual, as edições de esboços, as operações e as definições.

**A sobre-definição nunca é aceite em silêncio.** Não há cotas referenciadas (de referência). Uma cota que as outras relações já fixam é indicada como sobre-definida ("já está implícita. Elimine-a."). Uma cota em conflito deixa a geometria intacta e fica vermelha. Elimine uma, ou anule.

**Os varrimentos e os lofts ainda não estão implementados; boleados, chanfros, cascas e saídas têm limitações.** Esta versão do PartCraft constrói todas as peças com um núcleo de malha; a etiqueta da barra de estado indica sempre "Núcleo de malha". Os boleados e chanfros funcionam em arestas retas entre duas faces planas, e onde os arredondamentos se encontram num canto são em meia-esquadria, e não suavizados. As cascas abrem-se e as saídas inclinam-se, apenas em faces planas. As operações que precisam de um núcleo exato continuam clicáveis, mas indicam "ainda não implementado" quando escolhidas. Ver [O núcleo de malha](topic:solid-kernels) e [O que ainda não está implementado](topic:not-built-yet).

**Dois botões chamados Boleado.** Num esboço, {{ui:Fillet}} ({{key:F}}) arredonda um canto do esboço. Na peça, o {{ui:Fillet}} do grupo Operações arredonda arestas sólidas (arestas retas entre faces planas nesta versão). Não existe varrimento nem loft nesta versão: ver [O que ainda não está implementado](topic:not-built-yet).

**Os furos precisam de pontos soltos.** {{ui:Hole}} perfura em pontos criados com a ferramenta {{ui:Point}}. Centros de círculos e extremidades de linhas não contam.

**Através de tudo só serve para cortes.** Uma saliência precisa de uma profundidade. Ainda não existem condições de fim "até vértice / superfície / seguinte".

**O sólido é facetado.** O núcleo de malha constrói as faces redondas a partir de facetas planas, pelo que a vista, os volumes e as exportações STL e 3MF são feitos delas: **Curvas** no painel da peça torna-as mais finas. A exportação STEP exata não é: escreve as faces redondas nas suas superfícies verdadeiras.

**Apenas milímetros.** Ainda não existe uma definição em polegadas. Multiplique as medidas em polegadas por 25.4 ao escrevê-las.

**Y aponta para cima.** O plano Alçado vira-se para si e a Planta olha para a peça de cima, como espera, mas o eixo vertical do mundo é Y. As exportações STL, 3MF e STEP exato são rodadas para Z para cima; o STEP facetado mantém Y para cima.

**Os acoplamentos são faces, não pares de geometria.** Uma junta começa sempre por duas faces planas postas face a face. Para um pino num furo, selecione a face plana à volta do furo e o ombro do pino, e depois defina **Centrar em** para o eixo do furo e o eixo de revolução do pino. As peças que as juntas não alcançam mantêm-se onde foram inseridas; não as pode arrastar. As juntas num circuito não são resolvidas.

**Guardar é uma transferência.** Não existe um ficheiro que se sobrescreva continuamente. Cada gravação é um novo ficheiro na sua pasta de transferências. Dê primeiro um nome à peça e guarde os seus ficheiros numa pasta de projeto.

**Sem menus de contexto, sem separadores de gestor de comandos.** Tudo está na barra de ferramentas e no painel da direita, e a barra de ferramentas muda conforme o que está a fazer: as ferramentas de esboço surgem apenas num esboço, e as de montagem apenas numa montagem.

**As teclas são letras isoladas dentro de um esboço.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} e {{key:S}} selecionam ferramentas sem modificador. Ver [Teclas e rato](topic:keyboard).
