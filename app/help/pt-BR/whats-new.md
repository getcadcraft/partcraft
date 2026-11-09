---
title: Novidades na 0.8 e 0.8.1
summary: O PartCraft 0.8 adiciona análise ao vivo enquanto você edita, uma verificação de O que quebra primeiro, estudos de escoamento e contato com arquivos de deck para um solver externo, estudos de movimento para montagens, um ambiente Superfícies para superfícies de forma livre, peças dimensionadas pela física no ambiente Engenheiro, esboço a partir de uma foto, exportações para impressão, chapas encaixadas para G-code e desenhos que cotam seus furos. A 0.8.1 corrige um travamento do cursor em tela cheia.
keywords: novidades, o que há de novo, notas de versão, registro de alterações, alterações, 0.8, 0.8.1, versão, novos recursos, análise ao vivo, atualizar enquanto edita, quebrar, o que quebra primeiro, fator de carga, não linear, escoamento, deformação plástica, contato, calculix, estudo de movimento, folga, superfícies, nurbs, suavizar, casco, zebra, engenheiro, gerador, corpo gerado, esboço a partir de uma foto, escala para impressão, dividir para impressão, retração, chapas encaixadas, g-code, desenho, cotar furos, assistente, mcp, idiomas, linhas da barra de ferramentas
from: 62e4dce2
---

Eis o que mudou no PartCraft 0.8 e 0.8.1, em comparação com a 0.7. A simulação responde enquanto você edita e informa o que quebra primeiro, as montagens ganham estudos de movimento, e os novos ambientes criam superfícies de forma livre e peças dimensionadas pela física. A 0.8.1 é uma pequena versão de correção.

## Novo

### Simulação

- **Atualizar enquanto eu edito.** Marque {{ui:Atualizar enquanto eu edito}} no bloco Resolver e as respostas acompanham as suas edições. Altere uma cota, uma carga ou o material e uma resposta rápida, feita com elementos quatro vezes maiores, aparece de imediato; quando você para por cerca de um segundo, a resposta refinada do próprio estudo substitui a anterior. Os resultados indicam qual das duas você está vendo. Em uma viga em balanço de aço, a resposta rápida ficou a 1 % da refinada na deflexão e a cerca de 4 % na tensão. Veja [Verificar tensão e deflexão](topic:simulation#update-while-you-edit-live).
- **O que quebra primeiro.** Para um estudo estático ou de flambagem, {{ui:O que quebra primeiro?}} no bloco **Teste de ruptura** escala as cargas até a peça ceder. Ele lista, do pior para o melhor, o fator de carga até o primeiro escoamento (com um marcador vermelho onde a tensão atinge o pico) e o fator de carga até a flambagem. Um fator abaixo de 1 significa que a peça já cede com o carregamento aplicado, e o painel Problemas mostra um erro. Os fatores vêm de um estudo linear, por isso só são tão bons quanto ele. Veja [Verificar tensão e deflexão](topic:simulation#find-out-what-breaks-first-break-it).
- **Escoamento e contato.** Mais dois tipos de estudo: um não linear, em que o material segue sua reta até a tensão de escoamento e depois uma inclinação mais suave, com a deformação plástica plotada; e um de contato, em que peças separadas se empurram (sem atrito) ou permanecem presas (ligadas). Uma etapa de carga que não consegue se estabilizar, ou peças que afundam demais uma na outra, aparecem no painel Problemas. Atrito, grande deslizamento, grandes rotações, grandes deflexões e fadiga não são resolvidos. Veja [Verificar tensão e deflexão](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks para CalculiX.** {{ui:Exportar}} › {{ui:Deck do CalculiX (.inp)}} salva o estudo para o CalculiX, um programa separado que você instala e executa por conta própria; {{ui:Exportar}} › {{ui:Resultados do CalculiX (.frd)}} lê o arquivo de resultados dele de volta na mesma malha. O PartCraft nunca inicia esse programa e avisa quando a peça mudou desde que o deck foi salvo.

### Montagens

- **Estudos de movimento.** {{ui:Montagem}} › {{ui:Movimento}} controla o valor de uma junta ao longo de um tempo que você define (velocidade constante, suavizada, senoidal ou de ida e volta), posiciona a montagem em cada etapa com as suas juntas e malhas fechadas, e informa quais colisões ocorrem e o quanto as peças se aproximam. {{ui:Adicionar um ponto}} plota a posição, a velocidade e a aceleração de um ponto, o valor da junta e a folga ao longo do tempo; {{ui:Salvar CSV}} e {{ui:Salvar gráfico}} gravam esses dados. Depois de {{ui:Executar}}, a barra de execução Passo a passo move a montagem para qualquer etapa. As configurações do estudo são salvas no arquivo da montagem. Velocidade e aceleração são calculadas a partir das posições registradas, por isso use mais etapas se um pico acentuado aparecer subestimado. Veja [Verificar uma montagem quanto a colisões e movimento](topic:check-assembly#a-motion-study).

### Superfícies e peças a partir da física

- **Um ambiente Superfícies.** Escolha {{ui:Superfícies}} na caixa {{ui:Ambiente}} para curvas e superfícies NURBS ao lado da peça: {{ui:Curva}}, {{ui:Loft}}, {{ui:Varredura}}, {{ui:Casar}} e {{ui:Zebra}}, com continuidade (G0, G1 ou G2) medida nas superfícies exatas, e uma aresta pior do que você pediu listada em Problemas com uma correção de {{ui:Casar}}. {{ui:Suavizar}} mede linhas de casco quanto a inflexões e saltos de curvatura e refaz as irregulares dentro da sua tolerância. As superfícies são salvas no arquivo da peça e não alteram os recursos da peça. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **O ambiente Engenheiro.** Escolha {{ui:Engenheiro}} no seletor de ambiente, escolha um gerador e clique em {{ui:Novo}}: um script dimensiona uma peça a partir do que ela precisa fazer (calor para mover, vazões, pressão, material, processo de impressão) com fórmulas de livros didáticos e a constrói; depois devolve os números usados com as suas fontes, as verificações de fabricação e arquivos para ferramentas de análise. As mesmas entradas geram a mesma peça em qualquer computador. O gerador fica guardado na peça, e abrir uma peça nunca executa um script. Veja [Peças a partir da física: geradores](topic:engineer-generators) e [Escrever um gerador](topic:write-a-generator).

### Esboço, desenhos e fabricação

- **Um esboço a partir de uma foto.** {{ui:Recursos}} › {{ui:Mais}} › {{ui:Esboço a partir de uma foto…}} traça uma imagem de uma peça plana sobre um fundo liso (contorno e furos) ou um desenho a caneta em linhas, arcos e círculos. Você informa uma medida, confere a pré-visualização e cria o esboço. Veja [Noções básicas de esboço](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala e divisão para impressão.** {{ui:Exportar}} › {{ui:Escalar para impressão (STL ou 3MF)…}} escala por eixo sem alterar a peça, por exemplo para compensar uma retração. {{ui:Exportar}} › {{ui:Dividir para impressão (um zip de peças)…}} corta uma peça grande demais para a sua mesa de impressão em peças numeradas, unidas por pinos, chavetas, rabos de andorinha, furos de cavilha ou cavidades para ímãs. Veja [Imprimir em 3D](topic:print-3d).
- **Chapas encaixadas para G-code.** {{ui:Exportar}} › {{ui:Chapas encaixadas para G-code}} lê um DXF encaixado e gera um programa por chapa pelo pós-processador que você escolher: furos e recortes primeiro, depois os contornos. Ele não planeja entradas de corte, a ordem de corte nem as arestas compartilhadas. Veja [Encaixar peças planas em chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desenhos que fazem mais sozinhos.** {{ui:Folha}} › {{ui:Automático}} escolhe a menor folha de tamanho A que comporta as vistas, na maior escala padrão até 1:1. {{ui:Cotar os furos}} coloca uma marca de centro em cada furo, uma chamada por tamanho e as posições a partir do canto inferior esquerdo da vista. Veja [Criar um desenho](topic:drawing-pdf).

### Em todos os aplicativos

- **Idiomas.** Os aplicativos estão disponíveis em 54 idiomas. Os que não são o inglês são rascunhos de máquina até que um falante nativo os revise.
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe Quebrar linha (como antes), 2 linhas ou 1 linha; uma barra que não cabe rola para os lados. A faixa de opções de Recursos do PartCraft mostra a ferramenta mais usada em destaque e agrupa as variantes atrás de um botão dividido.
- **Conecte a sua IA.** O Studio é o hub para conectar um assistente próprio a todos os oito aplicativos, com permissão somente leitura, sugerir ou editar em cada aplicativo. Um assistente conectado pode dimensionar uma peça a partir de uma frase, como um suporte para uma carga, mostrar o seu raciocínio e cada verificação, e construí-la; ele informa o que não verificou (concentração de tensão, fadiga, fluência em plásticos). Veja [Usar o PartCraft com um assistente de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Congelamento do cursor em tela cheia.** A seleção ao passar o mouse agora tem limite de frequência. A causa é a nossa melhor leitura e não foi confirmada com a pessoa que relatou o problema.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem trocar de idioma durante a execução; antes, eram somente em inglês. Isso ainda não foi testado em todas as plataformas: nos avise se o idioma não mudar.

## Ainda não disponível nesta versão

- Conectar a sua IA ainda não está concluído: a conexão com um clique dentro do Studio, o conector hospedado para IA em navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não são prometidos. O Studio não tem IA própria.
- O Studio não tem assinatura de código: o Windows pode exibir um aviso, e o macOS pede clique com o botão direito e depois Abrir. Veja [Solução de problemas](topic:troubleshooting).
- As cadeias de tolerância ainda vão em uma só direção: veja [Cadeias de tolerância](topic:tolerance-stackup).
- O restante está listado em [O que ainda não foi implementado](topic:not-built-yet).

Mudanças anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).
