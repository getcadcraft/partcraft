---
title: Vindo de outro modelador paramétrico
summary: Como os hábitos dos modeladores paramétricos de peças para desktop correspondem ao PartCraft, e as diferenças que pegam os usuários experientes na primeira hora.
keywords: migração, migrar, familiar, gerenciador de recursos, árvore de projeto, cota inteligente, extrusão de saliência, extrusão de corte, assistente de furos, acoplamentos, detecção de interferência, barra de reversão, gerenciador de propriedades, mouse, diferenças
from: fbacaee1
---

Se você projeta peças no SolidWorks, a maioria das ideias do PartCraft vai parecer familiar: esboços nos planos Frontal, Superior e Direito, relações e cotas inteligentes, um histórico de recursos com uma barra de reversão, e montagens posicionadas por acoplamentos. A forma de chegar a eles é diferente em alguns pontos, e esta primeira versão faz menos. Esta página relaciona seus hábitos e lista as surpresas.

## Hábitos, mapeados

| Você está acostumado a | No PartCraft |
|---|---|
| A árvore de projeto à esquerda | O histórico à esquerda: planos primeiro, depois recursos, com esboços recuados sob o recurso que os usa |
| Planos Frontal, Superior e Direito | Os mesmos três, pela origem. Frontal é o plano XY, Superior é XZ, Direito é YZ; Y aponta para cima |
| Esboço em um plano ou face, depois o canto de confirmação para sair | {{ui:Esboço}} ({{key:S}}) em um plano selecionado ou face plana; {{ui:Sair}} ou {{key:Esc}} até que ele feche |
| Cota inteligente | {{ui:Cota}} ({{key:D}}). Clique em um ou dois itens, depois onde o número vai. Onde você o coloca define se é horizontal, vertical ou alinhada |
| Adicionar relações no painel de propriedades | Selecione os itens, depois os botões de relação no painel da direita (Coincidente, Horizontal, Paralela, Tangente, Igual e assim por diante) |
| Relações automáticas ao esboçar | Os snaps adicionam relações de coincidência, ponto sobre curva, horizontal e vertical |
| Cores azul / preto / vermelho do esboço | A mesma ideia: azul subdefinido, preto totalmente definido, vermelho superdefinido. O indicador mostra os graus de liberdade restantes |
| Linha de centro para revoluções | {{ui:Linha de centro}} ({{key:N}}); {{ui:Revolução}} usa a primeira linha de centro, a menos que você escolha outro eixo |
| Arredondamento de esboço | {{ui:Arredondamento}} ({{key:F}}) em um esboço: clique no canto, digite o raio |
| Alternador de geometria de construção | {{ui:Construção}} ({{key:Q}}) |
| Saliência por extrusão | {{ui:Extrudar}}: Cego, Plano médio, Até face / seguinte / vértice, Deslocamento a partir da face, segunda direção, conicidade, um contorno (Escolher regiões) |
| Corte por extrusão | {{ui:Recortar}}: começa como Através de tudo; mude para Cego para um bolsão |
| Saliência / corte por revolução | {{ui:Revolução}} / {{ui:Mais}} › {{ui:Corte por revolução}} |
| Plano / eixo / ponto de referência | {{ui:Mais}} › {{ui:Plano}}, {{ui:Eixo}}, {{ui:Ponto}} (veja [Planos, eixos e pontos de referência](topic:reference-geometry)) |
| Saliência ou corte varrido / por loft, saída | {{ui:Mais}} › {{ui:Saída}} em faces planas (veja [Varredura, loft e saída](topic:sweep-loft-draft)). {{ui:Varredura}} e {{ui:Loft}} ainda não foram implementados nesta versão (precisam de um kernel exato) |
| Assistente de furos | {{ui:Furo}} em cada ponto solto do esboço: simples, rebaixo, escareado (90° / 82°) ou rosqueado ISO métrico M2–M24, passante ou cego |
| Padrão linear / circular, espelho | {{ui:Linear}}, {{ui:Circular}}, {{ui:Espelhar}} (recursos ou o corpo inteiro) |
| Arredondamento e chanfro em arestas | {{ui:Arredondamento}} / {{ui:Chanfro}}: clique em uma aresta, {{key:Shift}}+clique em mais, depois no botão. Um raio; chanfros iguais, de duas distâncias ou de distância e ângulo. Nesta versão, apenas arestas retas entre duas faces planas, e arredondamentos que se encontram em um canto são chanfrados em meia-esquadria. Arredonde ou chanfre arestas curvas no esboço ({{ui:Arredondamento}} em um esboço, {{key:F}}) |
| Casca | {{ui:Casca}}: clique nas faces planas que serão abertas, depois no botão. Uma espessura de parede |
| Abrir um arquivo STEP | {{ui:Abrir}}: lido como triângulos, um corpo sólido sobre o qual construir ([Abrir um arquivo STEP](topic:import-step)) |
| Editar recurso, depois OK | Clique no recurso; altere os números à direita; ele é reconstruído enquanto você digita. Não há OK nem Cancelar: use {{key:Mod+Z}} |
| Editar esboço | Dê duplo clique no esboço no histórico |
| Reconstruir | Automático após cada alteração. Não há tecla de reconstrução |
| Suprimir / reativar | {{ui:Suprimir}} / {{ui:Reativar}} no painel da direita |
| Arrastar a barra de reversão | {{ui:Reverter até aqui}} em um recurso; clique em "Barra de reversão · avançar" para voltar |
| Arrastar um recurso na árvore para reordenar | {{ui:Mover para cima}} / {{ui:Mover para baixo}} ou {{key:Alt+Up}} / {{key:Alt+Down}}; recusado com o motivo quando quebraria uma dependência |
| Editar cotas dando duplo clique no modelo | Selecione o recurso: as cotas do esboço dele são listadas no painel da direita |
| Acoplamentos: coincidente, concêntrico, distância, ângulo | {{ui:Junta}} ({{key:J}}): escolha uma face plana em cada peça; a junta as coloca face a face. **Centralizar em** um eixo funciona como concêntrico; **Deslocamento** como distância; **Ângulo** como ângulo |
| Componente fixo | A primeira peça é fixa; {{ui:Tornar esta a peça fixa}} muda isso |
| Inserir componente | {{ui:Adicionar cópia}} ou {{ui:Duplicar}} (outra cópia) ou {{ui:Inserir}} (de um arquivo de peça) |
| Editar peça na montagem | {{ui:Editar peça}}, depois {{ui:Voltar}} |
| Detecção de interferência | {{ui:Colisão}} |
| Mover um componente para ver o movimento | Arraste o controle deslizante de ângulo ou deslocamento de uma junta de revolução ou deslizante; {{ui:Verificar o movimento quanto a colisões}} o varre. Uma peça sem junta: **Mover manualmente** (setas para arrastar, ou valores digitados) |
| Medir / inspecionar | {{ui:Vistas}}, depois {{ui:Medir}} ({{key:M}}): distâncias, ângulos, raios, áreas; {{ui:Propriedades de massa}} |
| Vista explodida, lista de materiais | Em uma montagem com nada selecionado: **Vistas explodidas** e **Lista de materiais** no painel da direita |
| Propriedades de massa | A caixa **Peça**: volume, área de superfície, tamanho, do sólido facetado (um pouco baixo em peças redondas). Sem massa: ainda não há materiais |
| Salvar, Salvar como STEP | {{ui:Salvar}} baixa um `.partcraft.json`; {{ui:Exportar}} tem STL, 3MF, STEP exato (AP242 ou AP214), STEP facetado, DXF e um desenho em PDF |
| Criar um desenho a partir da peça | {{ui:Desenho}}: uma folha A3 automática com três vistas, isométrica, um corte, um detalhe, datums, quadros de controle de tolerância geométrica e símbolos de acabamento superficial. Apenas dimensões gerais são cotadas |
| Arrastar com o botão do meio para girar | **Arrastar com o botão esquerdo** gira aqui. Arrastar com o botão do meio ou direito faz pan. A roda dá zoom no ponteiro |
| Orientação da vista, Normal a | Menu {{ui:Vistas}}; {{ui:Normal a}} para uma face, plano ou esboço escolhido |
| Zoom para ajustar (F) | {{key:F}}, ou {{ui:Ajustar}} (em um esboço, {{key:F}} é a ferramenta Arredondamento) |
| Menus de clique com o botão direito | Nenhum. Arrastar com o botão direito faz pan; em um esboço, clicar com o botão direito encerra uma sequência de linhas |

:::tip
Se suas mãos conhecem o SolidWorks, escolha o estilo de menu {{ui:Árvore de recursos}} em {{ui:Configurações}} › {{ui:PartCraft}} › {{ui:Menus, teclas e mouse}}: uma faixa de opções com as abas Recursos, Esboço, Superfícies, Avaliar, Desenho, Montagem e Vista; o botão do meio orbita, {{key:Shift}} e o botão do meio fazem pan, e o botão esquerdo apenas escolhe. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).
:::

## Diferenças que pegam as pessoas

**O esboço inteiro é o perfil.** Extrusão e Revolução usam todos os laços fechados do esboço. Você não pode escolher uma região ou um contorno de um esboço para um recurso. Use um esboço por recurso.

**Qual esboço um recurso usa.** Um recurso usa o esboço que você acabou de fechar ou o selecionado no histórico. Sem nada selecionado, ele usa o esboço mais recente que nenhum recurso usa ainda. Se pegar o errado, selecione o esboço certo e escolha o recurso novamente.

**As alterações valem enquanto você digita.** Não há caixa de diálogo de recurso com OK e Cancelar. Cada número reconstrói de imediato, e {{key:Mod+Z}} é o caminho de volta. A lista de desfazer cobre alterações de esboço, recursos e configurações igualmente.

**Superdefinição nunca fica tranquila.** Não há cotas de referência (dirigidas). Uma cota que as outras relações já fixam é informada como superdefinida ("já está implícita. Exclua-a."). Uma cota conflitante deixa a geometria intocada e fica vermelha. Exclua uma, ou desfaça.

**Varreduras e lofts ainda não foram implementados; arredondamentos, chanfros, cascas e saídas têm limites.** Esta versão do PartCraft constrói todas as peças com um kernel de malha; o indicador da barra de status sempre diz "Kernel de malha". Arredondamentos e chanfros funcionam em arestas retas entre duas faces planas, e onde arredondamentos se encontram em um canto eles são chanfrados em meia-esquadria, não mesclados. Cascas abrem, e saídas inclinam apenas faces planas. Recursos que precisam de um kernel exato permanecem clicáveis, mas dizem "ainda não implementado" quando escolhidos. Veja [O kernel de malha](topic:solid-kernels) e [O que ainda não foi implementado](topic:not-built-yet).

**Dois botões chamados Arredondamento.** Em um esboço, {{ui:Arredondamento}} ({{key:F}}) arredonda um canto do esboço. Na peça, o {{ui:Arredondamento}} do grupo Recursos arredonda arestas sólidas (arestas retas entre faces planas nesta versão). Não há varredura nem loft nesta versão: veja [O que ainda não foi implementado](topic:not-built-yet).

**Furos precisam de pontos soltos.** {{ui:Furo}} fura em pontos feitos com a ferramenta Ponto. Centros de círculos e extremidades de linhas não contam.

**Através de tudo é só para cortes.** Uma saliência precisa de uma profundidade. Ainda não há condições de término como "até vértice / superfície / seguinte".

**O sólido é facetado.** O kernel de malha constrói faces redondas a partir de facetas planas, então a vista, os volumes, as exportações STL e 3MF são todos feitos delas: **Curvas** no painel da peça as deixa mais finas. A exportação STEP exata não: ela escreve faces redondas em suas superfícies verdadeiras.

**Apenas milímetros.** Ainda não há configuração de polegadas. Multiplique tamanhos em polegadas por 25.4 ao digitá-los.

**Y aponta para cima.** O plano Frontal fica voltado para você e o Superior olha a peça de cima, como você espera, mas o eixo "para cima" do mundo é Y. As exportações STL, 3MF e STEP exata são giradas para Z para cima; o STEP facetado mantém Y para cima.

**Acoplamentos são faces, não pares de geometria.** Uma junta sempre começa de duas faces planas postas face a face. Para um pino em um furo, escolha a face plana ao redor do furo e o ressalto do pino, depois defina **Centralizar em** como o eixo do furo e o eixo de revolução do pino. Peças que não são alcançadas por juntas permanecem onde foram inseridas; você não pode arrastá-las. Juntas em um laço não são resolvidas.

**Salvar é um download.** Não há um arquivo que você sobrescreve sempre. Cada salvamento é um novo arquivo na sua pasta de downloads. Dê um nome à peça primeiro e mantenha seus arquivos em uma pasta de projeto.

**Sem menus de contexto, sem abas do gerenciador de comandos.** Tudo fica na barra de ferramentas e no painel da direita, e a barra de ferramentas muda conforme o que você faz: as ferramentas de esboço aparecem apenas em um esboço, e as de montagem apenas em uma montagem.

**As teclas são letras únicas dentro de um esboço.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} e {{key:S}} escolhem ferramentas sem modificador. Veja [Teclas e mouse](topic:keyboard).
