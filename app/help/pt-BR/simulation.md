---
title: Verificar tensão e deflexão (Simulação)
summary: Escolha um material, fixe faces, adicione forças, pressões ou o peso próprio da peça, resolva e leia a tensão de von Mises, o deslocamento, o fator de segurança, as reações e as frequências naturais no modelo, com o que o método pode e o que não pode dizer.
keywords: simulação, FEA, análise ao vivo, atualizar durante a edição, quebrar, o que quebra primeiro, fator de carga, não linear, plasticidade, escoamento, deformação plástica, bilinear, contato, par de contato, penalidade, colado, contato sem atrito, CalculiX, .inp, .frd, elementos finitos, tensão, deformação, von Mises, deslocamento, deflexão, fator de segurança, reação, carga, força, pressão, gravidade, peso próprio, fixo, sem atrito, apoio, restrição, material, aço, alumínio, titânio, ABS, PLA, náilon, frequência natural, modal, vibração, malha, tamanho do elemento, tetraédrico, tetraedros, malha de tetraedros, voxel, qualidade da malha, tensão principal, deformação equivalente, estimativa de erro, faces curvas, furos, concordâncias, adaptativo, refinamento adaptativo, refinamento automático, h-adaptativo, convergência, convergência de malha, superfície exata, esfera, cone, toro, spline, forma livre
from: 6f2fdec1
---

O espaço de trabalho Simulação responde "isso vai dobrar ou quebrar sob esta carga?" para a peça que você está modelando. É um estudo **estático linear** (pequenas deflexões, o material permanece elástico) ou um estudo de **frequência natural**, resolvido em uma malha de tetraedros quadráticos que segue as faces da peça (ou, se você preferir, de pequenos cubos iguais). Ele funciona nas faces nomeadas que o núcleo de malha atribui à peça (veja [O núcleo de malha](topic:solid-kernels)).

Escolha **Simulação** na caixa **Área de trabalho**, à esquerda da barra de ferramentas. Sua peça não é alterada; o estudo é salvo dentro do arquivo da peça, e cada alteração nele pode ser desfeita.

## Configurar um estudo

1. Pressione **Novo estudo** no painel da direita.
2. Escolha o **Material**. O painel mostra sua rigidez (E), o coeficiente de Poisson, a densidade e a tensão de escoamento. Os valores são típicos de manuais; os valores certificados do seu fornecedor podem ser diferentes.
3. Escolha a **Malha**:
   - **Tetraédrica (precisa)**, a padrão: tetraedros de 10 nós cujas faces externas ficam sobre as faces da peça, com arestas curvas em furos, concordâncias e outras faces arredondadas. Os nós em faces planas, cilíndricas, cônicas, esféricas e toroidais, em faces de revolução e extrudadas e em faces de forma livre (B-spline) ficam sobre a superfície exata; qualquer outro tipo de face segue sua malha de exibição, e a tabela de resultados informa quantas faces fizeram isso. A malha fica mais fina automaticamente perto de faces curvas, paredes finas e arestas vivas.
   - **Cubos de voxel (rápida)**: a peça preenchida com cubos iguais. Rápida, mas faces curvas viram degraus. Estudos salvos antes de existir a malha tetraédrica continuam com ela.
4. Deixe o **Tamanho do elemento** vazio para um tamanho automático (cerca de 12,000 tetraedros, ou 20,000 cubos), ou digite um em milímetros. O painel mostra aproximadamente quantos elementos isso gera antes de acrescentar os pontos mais finos. Com tetraedros, **Elementos menores em faces curvas** (ligado por padrão) refina furos e concordâncias, onde a tensão costuma atingir o pico.

### Refinar automaticamente

Com tetraedros, um estudo estático ou de flambagem (sem carga térmica), um estudo de frequência natural e um estudo térmico estacionário oferecem **Refinar automaticamente (adaptativo)**. Marque e defina:

- **Erro alvo (%)**: a resolução para quando o erro estimado fica abaixo dele (1 % para começar).
- **Mais passadas**: o máximo de resoluções que pode executar (5 para começar, no máximo 10).

Cada passada resolve, encontra os elementos com maior erro estimado, os divide (e tantos vizinhos quanto forem necessários para manter a malha íntegra) e resolve de novo. Novos nós em faces curvas vão para a superfície exata. Os resultados mostram então uma tabela e um gráfico com, para cada passada, os elementos, as incógnitas, o erro estimado, a tensão de pico (ou temperatura), o deslocamento (ou fluxo de calor) e uma linha dizendo por que parou: o alvo foi atingido, as passadas acabaram, a próxima malha seria grande demais, ou uma passada falhou (você então vê a última passada boa).

Leia a estimativa como uma estimativa. Ao comparar com respostas exatas, ela indica cerca de 0.6 a 0.95 do erro verdadeiro (Zienkiewicz–Zhu). Ela mede o erro em **toda a peça**, então uma tensão de pico em um furo ou em uma concordância costuma ainda estar um pouco errada quando a estimativa parece pequena: para uma concentração de tensão, defina o alvo abaixo de 1 % e acompanhe o pico se estabilizar de passada em passada. Em um canto interno vivo ou na borda de uma face fixa, a tensão verdadeira é infinita, então a estimativa nunca chega lá: as passadas simplesmente acabam.

**Frequências naturais e flambagem.** Para um estudo de frequência natural, a estimativa cobre cada modo que você pediu, cada um contado igualmente; a tabela e o gráfico seguem as duas primeiras frequências. Em uma peça com apenas faces planas, uma frequência só pode diminuir de passada para passada (cada malha mantém a anterior); faces curvas também se aproximam de sua forma verdadeira, o que pode mover uma frequência um pouco para cima ou para baixo. Para flambagem, a estimativa cobre a pré-tensão e os modos de flambagem, e a tabela segue os fatores de carga. Verificado em uma barra de aço de 100 × 10 × 10 mm: a primeira frequência estabiliza de 812.4 para 811.9 Hz em quatro passadas, 0.4 % abaixo de Euler–Bernoulli (que ignora o cisalhamento), e o fator de carga da coluna fica dentro de 0.5 % de Euler.

## Fixar e carregar

Todo estudo precisa de pelo menos um apoio e, para tensão, uma carga.

1. Pressione {{ui:Fixed}} na barra de ferramentas. O novo apoio fica selecionado e aguarda faces: clique nas faces que ficam imóveis (clique de novo em uma face para removê-la). Pressione **Concluir seleção** ou {{key:Esc}} ao terminar. Cones azuis marcam as faces fixas.
2. Pressione {{ui:Force}} e clique nas faces sobre as quais a força atua. No painel, digite a **Força total** em newtons e escolha sua **Direção**: para dentro da face, ou ao longo de um eixo. A força é repartida entre as faces selecionadas pela área. Setas laranjas a mostram.
3. Pressione {{ui:Pressure}} para uma pressão em MPa (N/mm²) empurrando para dentro das faces selecionadas; uma pressão negativa puxa.

Mais tipos estão na lista **Adicionar** do painel: uma **Face sem atrito** (a face pode deslizar sobre si mesma, mas não se afastar dela; use-a para planos de simetria e apoios lisos) e **Gravidade** (o peso próprio da peça, 9.81 m/s², na direção que você escolher).

Um apoio que deixa a peça livre para deslizar ou girar é recusado, com a indicação do movimento que restou livre.

## Resolver e ler os resultados

Pressione {{ui:Solve}}. O trabalho roda em segundo plano; **Parar** cancela. Então:

- A peça é colorida pela **tensão de von Mises**; escolha **Deslocamento** ou **Fator de segurança** em **Exibir**. A legenda mostra a escala.
- Aponte para a peça para ler os valores sob o ponteiro.
- Marque **Forma deformada** para ver a peça dobrada (o movimento é ampliado pela **Escala**; o real está na tabela).
- A tabela lista a maior tensão e onde ela está, o maior deslocamento, o menor **fator de segurança** (tensão de escoamento ÷ tensão de von Mises; abaixo de 1 o material escoa), a carga aplicada, as **reações** nos apoios (elas equilibram a carga) e a malha usada.

Para **frequências naturais**, escolha esse **Tipo**, defina quantos **Modos** e resolva. Cada modo mostra sua frequência e formato (as formas são escaladas para 1 no maior movimento).

Se você alterar a peça, os resultados são marcados como desatualizados: resolva de novo.

## Escoamento e contato (estudos não lineares)

Dois outros tipos de estudo vão além de "o material permanece elástico":

- **Não linear (o material escoa)** segue a reta do material até sua tensão de escoamento, depois uma inclinação mais suave (**Inclinação após o escoamento**, 1 % de E quando deixado em branco). A carga avança em **Passos de carga**; um passo que não se estabiliza é dividido ao meio automaticamente. Os resultados acrescentam **Deformação plástica** aos gráficos e informam quanto da carga foi suportada. Se um passo ainda não se estabilizar, o estudo para no último passo bom e o painel ⚠ Problemas indica onde: a peça esgotou sua resistência ali (um colapso), ou os passos são grandes demais.
- **Contato entre peças** permite que peças separadas da peça se empurrem. Adicione um **Par de contato**, selecione as faces do lado A (as que pressionam) com {{ui:Pick faces}}, depois as do lado B com {{ui:Pick side B faces}}. Peças **sem atrito** empurram, deslizam e se separam; peças **coladas** ficam presas. Cada peça é malhada separadamente, então uma pequena folga entre elas é aceitável. O contato é um método de penalidade: as peças afundam levemente uma na outra (o **fator de penalidade** × E ÷ tamanho do elemento define a rigidez do contato). A tabela mostra o maior afundamento, e o painel de Problemas avisa quando ele passa de 1 % do tamanho do elemento: aumente o fator ou use elementos menores.

Ambos usam a malha tetraédrica. Atrito, deslizamento grande e rotações grandes não são resolvidos aqui.

## Rodar no CalculiX

**Exportar › Deck do CalculiX (.inp)** (ou {{ui:Save a CalculiX deck (.inp)}} no painel) salva o estudo como um arquivo de entrada para o CalculiX, um programa separado que você instala e roda por conta própria: a mesma malha, material, apoios, cargas e pares de contato, em mm, N e MPa. Rode-o; depois, **Exportar › Resultados do CalculiX (.frd)** lê o arquivo de resultados de volta sobre a mesma malha e mostra o deslocamento (e a tensão de von Mises quando o arquivo tiver tensões). Se você alterou a peça ou o tamanho do elemento no meio do caminho, a malha não é mais a mesma e o PartCraft avisa: salve um novo deck.

## Quanto confiar nele

O PartCraft confere seu solucionador com fórmulas manuais (a deflexão da ponta de uma viga em balanço PL³/3EI dentro de 1 %, o alongamento de uma barra PL/AE exatamente, a primeira frequência de uma viga em balanço dentro de 3 %, a tensão em torno de um furo em uma placa). Ainda assim, tenha estes limites em mente:

- **A malha.** Com tetraedros, o PartCraft confere a deflexão e a tensão de flexão de uma viga em balanço (dentro de 0.3 %), a tensão em um furo de placa (Kt, dentro de cerca de 1 %), um tubo espesso sob pressão (Lamé, dentro de 0.3 %) e a primeira frequência (dentro de 0.4 %). A tabela mostra a **qualidade da malha** (os menores e maiores ângulos entre faces de elementos; abaixo de cerca de 10° um elemento é ruim) e um **erro estimado de tensão**: se for mais de alguns por cento, resolva de novo com um tamanho de elemento menor, ou deixe **Refinar automaticamente** fazer isso. Em uma placa com furo e uma barra com dois entalhes laterais, o refinamento automático ficou dentro de 1 % do Kt do livro com cerca de um sexto das incógnitas que tornar toda a malha mais fina exigia. Com cubos de voxel, um furo ou uma concordância é uma escada no tamanho do cubo, então a tensão ali é grosseira.
- **Cantos internos vivos e bordas de faces fixas não têm pico de tensão verdadeiro.** O valor ali continua crescendo à medida que os elementos ficam menores. Leia as tensões um pouco afastadas desses lugares, ou arredonde o canto no modelo.
- **Resultados para ler.** Além da tensão de von Mises, do deslocamento e do fator de segurança, um estudo tetraédrico mostra a **tensão principal máxima e mínima** (tração e compressão) e a **deformação equivalente**. Marque **Mostrar malha** para ver os elementos.
- **Estudos estáticos são lineares e elásticos.** Para escoamento e contato use os tipos de estudo não lineares acima; grandes deflexões e fadiga não são resolvidas. Calor, tensão térmica e flambagem linear são tipos de estudo próprios: veja [Calor, tensão térmica e flambagem](topic:thermal-and-buckling).
- **Todo material é igual em todas as direções.** Plásticos impressos em 3D são mais fracos entre suas camadas, muitas vezes em um terço ou mais.
- Esta é uma versão de laboratório: verifique por outro meio as peças que importam.

## Atualizar durante a edição (Live)

Marque **Atualizar durante a edição** no bloco Resolver e as respostas da Simulação acompanham suas edições. Altere uma cota, uma carga, o material ou o ambiente, e uma **resposta rápida** aparece de imediato, feita com elementos quatro vezes maiores que os do estudo; quando você para por um momento (um segundo, aproximadamente), a **resposta refinada** do próprio estudo substitui a rápida. Os resultados informam qual você está vendo ("Resposta rápida" ou "Resposta refinada") e o tamanho do elemento. A resposta rápida serve para direção e ordem de grandeza: em uma viga em balanço de aço, ela ficou dentro de 1 % na deflexão e cerca de 4 % na tensão em relação à refinada. Confie na refinada para os números que você vai usar. Estudos estáticos, de frequência natural, térmicos e de flambagem funcionam assim; Live é uma configuração de visualização e não é salva na peça. Uma resolução que você dispara manualmente permanece como está até a próxima edição.

## Descobrir o que quebra primeiro (Quebrar)

Para um estudo estático ou de flambagem, pressione **O que quebra primeiro?** no bloco **Quebrar**. O PartCraft escala as cargas do estudo (forças, pressões e peso juntos) até a peça ceder e lista, do pior para o melhor, **o fator de carga até o primeiro escoamento** (o fator sobre as cargas de hoje em que a maior tensão de von Mises atinge a tensão de escoamento do material, com um marcador vermelho onde isso acontece) e **o fator de carga até a flambagem** para os mesmos apoios e cargas. Um fator de 4.3 significa que a peça suporta 4.3 vezes sua carga antes de escoar; **um fator abaixo de 1 significa que ela já cede carregada assim**, e isso aparece na lista de Problemas como erro (o achado mais fraco aparece como nota, mesmo quando tudo está bem). Os fatores vêm de um estudo linear em tetraedros no seu tamanho de elemento, então valem o que esse estudo vale: a tensão em uma face fixa ou em um canto vivo não tem pico verdadeiro (veja acima), e o fator de escoamento ficará do lado conservador ali. Seu assistente pode executar a mesma verificação com a ferramenta `break_run`.

## Relacionados

- [Calor, tensão térmica e flambagem](topic:thermal-and-buckling)
- [Crescer uma forma a partir de cargas (Generativo)](topic:generative-design)
- [Medir distâncias, ângulos e massa](topic:measure)
- [O que ainda não está implementado](topic:not-built-yet)
