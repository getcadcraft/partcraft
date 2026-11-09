---
title: Novidades na versão 0.8 e 0.8.1
summary: O PartCraft 0.8 acrescenta análise em tempo real enquanto edita, a verificação O que cede primeiro?, estudos de cedência e de contacto com ficheiros de entrada para um solucionador externo, estudos de movimento para montagens, um espaço de trabalho Superfícies para superfícies de forma livre, peças dimensionadas a partir da física no espaço de trabalho Engenharia, esboço a partir de uma foto, exportações para impressão, chapas de nesting para G-code e desenhos que cotam os furos. A 0.8.1 corrige um bloqueio do cursor em ecrã inteiro.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, análise em tempo real, atualizar ao editar, partir, o que cede primeiro, fator de carga, não linear, cedência, deformação plástica, contacto, calculix, estudo de movimento, folga, superfícies, nurbs, alisar, casco, zebra, engenharia, gerador, corpo gerado, esboço a partir de uma foto, escalar para impressão, dividir para impressão, retração, chapas de nesting, g-code, desenho, cotar furos, assistente, mcp, idiomas, linhas da barra de ferramentas
from: 62e4dce2
---

Eis o que mudou no PartCraft 0.8 e 0.8.1, em comparação com a 0.7. A simulação responde enquanto edita e indica o que cede primeiro, as montagens passam a ter estudos de movimento, e os novos espaços de trabalho criam superfícies de forma livre e peças dimensionadas a partir da física. A 0.8.1 é uma pequena versão de correções.

## Novo

### Simulação

- **Atualizar enquanto edito.** Marque {{ui:Atualizar enquanto edito}} no bloco Resolver e as respostas acompanham as suas alterações. Altere uma cota, uma carga ou o material e aparece logo uma resposta rápida, feita com elementos quatro vezes maiores; quando parar durante cerca de um segundo, a resposta refinada do próprio estudo substitui a rápida. Os resultados indicam qual das duas está a ver. Numa viga em consola de aço, a resposta rápida ficou dentro de 1 % na flecha e cerca de 4 % na tensão em relação à refinada. Veja [Verificar tensão e flecha](topic:simulation#update-while-you-edit-live).
- **O que cede primeiro.** Num estudo estático ou de encurvadura, {{ui:O que cede primeiro?}} no bloco **Partir** aumenta as cargas até a peça ceder. Lista, do pior para o melhor, o fator de carga até à cedência inicial (com um marcador vermelho onde a tensão atinge o pico) e o fator de carga até à encurvadura. Um fator abaixo de 1 significa que a peça já cede tal como está carregada, e o painel Problemas mostra um erro. Os fatores vêm de um estudo linear, por isso valem o que ele valer. Veja [Verificar tensão e flecha](topic:simulation#find-out-what-breaks-first-break-it).
- **Cedência e contacto.** Mais dois tipos de estudo: um não linear, em que o material segue a sua reta até à tensão de cedência e depois uma inclinação mais suave, com a deformação plástica representada; e um de contacto, em que peças separadas empurram umas às outras (sem atrito) ou ficam presas (ligadas). Um passo de carga que não consegue estabilizar, ou peças que se enterram demasiado umas nas outras, aparecem no painel Problemas. O atrito, o deslizamento de grande amplitude, as grandes rotações, as grandes flechas e a fadiga não são resolvidos. Veja [Verificar tensão e flecha](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ficheiros para CalculiX.** {{ui:Exportar}} › {{ui:Ficheiro de entrada CalculiX (.inp)}} guarda o estudo para o CalculiX, um programa à parte que instala e executa por si próprio; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lê de volta o ficheiro de resultados para a mesma malha. O PartCraft nunca inicia esse programa, e avisa se a peça tiver mudado desde que o ficheiro de entrada foi guardado.

### Montagens

- **Estudos de movimento.** {{ui:Montagem}} › {{ui:Movimento}} faz variar o valor de uma junta ao longo do tempo que indicar (velocidade constante, suavizada, sinusoidal ou ida e volta), coloca a montagem em cada passo com as suas juntas e ciclos fechados, e indica que peças colidem e a que distância se aproximam. {{ui:Adicionar um ponto}} traça a posição, a velocidade e a aceleração de um ponto, o valor da junta e a folga em função do tempo; {{ui:Guardar CSV}} e {{ui:Guardar gráfico}} gravam-nos. Depois de {{ui:Executar}}, a barra de passos da execução move a montagem para qualquer passo. As definições do estudo ficam guardadas no ficheiro da montagem. A velocidade e a aceleração vêm das posições registadas, por isso use mais passos se um pico agudo sair subestimado. Veja [Verificar uma montagem quanto a colisões e movimento](topic:check-assembly#a-motion-study).

### Superfícies e peças a partir da física

- **Um espaço de trabalho Superfícies.** Escolha {{ui:Superfícies}} na caixa {{ui:Área de trabalho}} para curvas e superfícies NURBS ao lado da peça: {{ui:Curva}}, {{ui:Loft}}, {{ui:Varrimento}}, {{ui:Semelhança}} e {{ui:Zebra}}, com a continuidade (G0, G1 ou G2) medida nas superfícies exatas, e uma aresta pior do que pediu listada em Problemas com uma correção de Semelhança. {{ui:Alisar}} mede as linhas do casco quanto a inflexões e saltos de curvatura e refaz as irregulares dentro da sua tolerância. As superfícies ficam guardadas no ficheiro da peça e não alteram as operações da peça. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **O espaço de trabalho Engenharia.** Escolha {{ui:Engenharia}} no seletor de espaço de trabalho, escolha um gerador e clique em {{ui:Novo}}: um script dimensiona uma peça a partir do que ela tem de fazer (aquecer para mover, caudais, pressão, material, processo de impressão) com fórmulas de manual e constrói-a; depois devolve os valores que usou, com as respetivas fontes, as suas verificações de fabrico e ficheiros para ferramentas de análise. As mesmas entradas dão a mesma peça em qualquer computador. O gerador fica guardado na peça, e abrir uma peça nunca executa um script. Veja [Peças a partir da física: geradores](topic:engineer-generators) e [Escrever um gerador](topic:write-a-generator).

### Esboço, desenhos e fabrico

- **Um esboço a partir de uma foto.** {{ui:Operações}} › {{ui:Mais}} › {{ui:Esboço a partir de uma foto…}} transforma uma imagem de uma peça plana sobre um fundo liso (contorno e furos) ou um desenho a caneta em linhas, arcos e círculos. Indica uma medida, confirma a pré-visualização e cria o esboço. Veja [Noções básicas de esboço](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala e divisão para impressão.** {{ui:Exportar}} › {{ui:Escalar para impressão (STL ou 3MF)…}} escala por eixo sem alterar a peça, por exemplo para compensar a retração. {{ui:Exportar}} › {{ui:Dividir para impressão (um zip de peças)…}} corta uma peça demasiado grande para a sua mesa em peças numeradas, unidas por pinos, chavetas, rabos de andorinha, furos para cavilhas ou cavidades para ímanes. Veja [Imprimir em 3D](topic:print-3d).
- **Chapas de nesting para G-code.** {{ui:Exportar}} › {{ui:Chapas de nesting para G-code}} lê um DXF já com nesting e gera um programa por chapa através do pós-processador que escolher: primeiro os furos e recortes, depois os contornos. Não planeia as entradas de corte, a ordem de corte nem as arestas partilhadas. Veja [Dispor peças planas em chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desenhos que fazem mais por si.** {{ui:Folha}} › {{ui:Automático}} escolhe a folha de formato A mais pequena que contém as vistas, à maior escala normalizada até 1:1. {{ui:Cotar os furos}} põe uma marca de centro em cada furo, uma chamada por tamanho e as posições a partir do canto inferior esquerdo da vista. Veja [Fazer um desenho](topic:drawing-pdf).

### Em todas as aplicações

- **Idiomas.** As aplicações chegam em 54 idiomas. Os que não são o inglês são rascunhos de máquina até um falante nativo os rever.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe Quebrar (como antes), 2 linhas ou 1 linha; uma barra que não caiba desliza lateralmente. O friso de operações do PartCraft mostra a ferramenta mais usada em tamanho grande e esconde as variantes atrás de um botão dividido.
- **Ligar a sua IA.** O Studio é o hub para ligar um assistente próprio a todas as oito aplicações, com permissão só de leitura, de sugestão ou de edição em cada aplicação. Um assistente ligado pode dimensionar uma peça a partir de uma frase, como um suporte para uma carga, mostrar o seu raciocínio e todas as verificações, e construí-la; indica o que não verificou (concentração de tensões, fadiga, fluência em plásticos). Veja [Usar o PartCraft com um assistente de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Bloqueio do cursor em ecrã inteiro.** A seleção ao passar o rato passa agora a ser limitada na frequência. A causa é a nossa melhor interpretação e não foi confirmada com quem a reportou.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem mudar de idioma durante a execução; antes, só tinham inglês. Isto ainda não foi testado em todas as plataformas: indique-nos se o idioma não mudar.

## Ainda não nesta versão

- Ligar a sua IA ainda não está concluído: a ligação com um clique dentro do Studio, o conector alojado para IA no navegador, a sua própria chave de API no Studio e o pacote MCP publicado não estão prometidos. O Studio não tem IA própria.
- O Studio não tem assinatura de código: o Windows pode avisar, e o macOS pede clicar com o botão direito e depois Abrir. Veja [Resolução de problemas](topic:troubleshooting).
- As somas de tolerâncias continuam numa só direção: veja [Somas de tolerâncias](topic:tolerance-stackup).
- O restante está listado em [O que ainda não está implementado](topic:not-built-yet).

As alterações anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).
