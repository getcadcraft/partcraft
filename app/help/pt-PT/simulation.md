---
title: Verificar tensão e deflexão (Simulação)
summary: Escolha um material, fixe faces, adicione forças, pressões ou o peso próprio da peça, resolva e leia no modelo a tensão de von Mises, o deslocamento, o coeficiente de segurança, as reações e as frequências naturais, com o que o método pode e não pode dizer.
keywords: simulação, FEA, análise em direto, atualizar ao editar, partir, o que cede primeiro, fator de carga, não linear, plasticidade, cedência, deformação plástica, bilinear, contacto, par de contacto, penalização, colado, contacto sem atrito, CalculiX, .inp, .frd, elementos finitos, tensão, deformação, von Mises, deslocamento, deflexão, coeficiente de segurança, fator de segurança, cedência, reação, carga, força, pressão, gravidade, peso próprio, fixo, sem atrito, apoio, restrição, material, aço, alumínio, titânio, ABS, PLA, nylon, frequência natural, modal, vibração, malha, tamanho do elemento, tetraédrico, tetraedros, malha tetraédrica, voxel, qualidade da malha, tensão principal, deformação equivalente, estimativa de erro, superfícies curvas, furos, concordâncias, adaptativo, refinamento adaptativo, refinamento automático, h-adaptativo, convergência, convergência de malha, superfície exata, esfera, cone, toro, spline, forma livre
from: 6f2fdec1
---

O espaço de trabalho Simulação responde à pergunta «vai dobrar ou partir sob esta carga?» para a peça que está a modelar. É um estudo **estático linear** (pequenas deflexões, o material permanece elástico) ou um estudo de **frequência natural**, resolvido numa malha de tetraedros quadráticos que segue as faces da peça (ou, se escolher, de pequenos cubos iguais). Funciona nas faces nomeadas que o núcleo de malha dá à peça (veja [O núcleo de malha](topic:solid-kernels)).

Escolha **Simulação** na caixa **Área de trabalho**, à esquerda da barra de ferramentas. A sua peça não é alterada; o estudo fica guardado dentro do ficheiro da peça, e cada alteração a ele pode ser anulada.

## Configurar um estudo

1. Prima **Novo estudo** no painel da direita.
2. Escolha o **Material**. O painel mostra a rigidez (E), o coeficiente de Poisson, a densidade e a tensão de cedência. Os valores são figuras típicas de manual; os valores certificados do seu fornecedor podem ser diferentes.
3. Escolha a **Malha**:
   - **Tetraédrica (precisa)**, a predefinida: tetraedros de 10 nós cujas faces exteriores ficam sobre as faces da peça, com arestas curvas em furos, concordâncias e outras faces redondas. Os nós em faces planas, cilíndricas, cónicas, esféricas e toroidais, em faces de revolução e de extrusão e em faces de forma livre (B-spline) ficam sobre a superfície exata; qualquer outro tipo de face segue a sua malha de visualização, e a tabela de resultados indica quantas faces o fizeram. A malha torna-se mais fina por si própria perto de faces curvas, paredes finas e arestas vivas.
   - **Cubos voxel (rápido)**: a peça preenchida com cubos iguais. Rápido, mas as faces curvas tornam-se degraus. Os estudos guardados antes de existir a malha tetraédrica mantêm este modo.
4. Deixe o **Tamanho do elemento** vazio para um tamanho automático (cerca de 12 000 tetraedros, ou 20 000 cubos), ou escreva um valor em milímetros. O painel mostra aproximadamente quantos elementos isso faz, antes de acrescentar os pontos mais finos. Com tetraedros, **Elementos mais pequenos em faces curvas** (ativo por predefinição) refina furos e concordâncias, onde a tensão costuma atingir o pico.

### Refinar automaticamente

Com tetraedros, um estudo estático ou de encurvadura (sem carga térmica), um estudo de frequência natural e um estudo térmico estacionário oferecem **Refinar automaticamente (adaptativo)**. Marque a opção e defina:

- **Erro alvo (%)**: a resolução para quando o erro estimado fica abaixo deste valor (1 % para começar).
- **Mais passagens**: o número máximo de resoluções que pode executar (5 para começar, no máximo 10).

Cada passagem resolve, encontra os elementos com maior erro estimado, divide-os (e os vizinhos necessários para manter a malha inteira) e resolve de novo. Os novos nós em faces curvas vão para a superfície exata. Os resultados mostram então uma tabela e um gráfico com, para cada passagem, os elementos, as incógnitas, o erro estimado, a tensão máxima (ou a temperatura) e o deslocamento (ou o fluxo de calor), e uma linha a dizer porque parou: o alvo foi atingido, as passagens acabaram, a malha seguinte seria grande demais, ou uma passagem falhou (vê-se então a última passagem válida).

Leia a estimativa como uma estimativa. Esta (Zienkiewicz–Zhu, que, comparada com respostas exatas, lê cerca de 0.6 a 0.95 do erro real) mede o erro em **toda a peça**, por isso um pico de tensão num furo ou numa concordância costuma continuar um pouco errado quando a estimativa parece pequena: para uma concentração de tensões, defina o alvo abaixo de 1 % e observe o pico estabilizar de passagem para passagem. Num canto interior vivo ou na aresta de uma face fixa, a tensão real é infinita, por isso a estimativa nunca lá chega: as passagens acabam em vez disso.

**Frequências naturais e encurvadura.** Num estudo de frequência natural, a estimativa cobre cada modo pedido, cada um contado do mesmo modo; a tabela e o gráfico seguem as duas primeiras frequências. Numa peça só com faces planas, uma frequência só pode descer de passagem para passagem (cada malha mantém a anterior); as faces curvas também se aproximam da sua forma real, o que pode mover uma frequência um pouco para qualquer dos lados. Para a encurvadura, a estimativa cobre a pré-tensão e os modos de encurvadura, e a tabela segue os fatores de carga. Verificado numa barra de aço de 100 × 10 × 10 mm: a primeira frequência estabiliza de 812.4 para 811.9 Hz em quatro passagens, 0.4 % abaixo de Euler–Bernoulli (que ignora o corte), e o fator de carga da coluna dentro de 0.5 % de Euler.

## Fixar e carregar

Cada estudo precisa de pelo menos um apoio e, para a tensão, de uma carga.

1. Prima {{ui:Fixa}} na barra de ferramentas. O novo apoio fica selecionado e à espera de faces: clique nas faces que ficam imóveis (clique de novo numa face para a retirar). Prima **Concluir escolha** ou {{key:Esc}} quando acabar. Cones azuis marcam as faces fixas.
2. Prima {{ui:Força}} e clique nas faces onde a força atua. No painel, escreva a **Força total** em newtons e escolha a sua **Direção**: para dentro da face, ou ao longo de um eixo. A força é repartida pelas faces escolhidas segundo a área. Setas laranja mostram-na.
3. Prima {{ui:Pressão}} para uma pressão em MPa (N/mm²) que empurra para dentro das faces escolhidas; uma pressão negativa puxa.

Mais tipos estão na lista **Adicionar** do painel: uma **Face sem atrito** (a face pode deslizar sobre si própria, mas não se afastar dela; use-a para planos de simetria e apoios lisos) e **Gravidade** (o peso próprio da peça, 9.81 m/s², na direção que escolher).

Um apoio que deixa a peça livre para deslizar ou rodar é recusado, indicando qual o movimento que fica livre.

## Resolver e ler os resultados

Prima {{ui:Resolver}}. O trabalho corre em segundo plano; **Parar** cancela-o. Depois:

- A peça é colorida pela **tensão de von Mises**; escolha **Deslocamento** ou **Coeficiente de segurança** em **Mostrar**. A legenda indica a escala.
- Aponte para a peça para ler os valores sob o ponteiro.
- Marque **Forma deformada** para ver a peça dobrada (o movimento é ampliado pela **Escala**; o real é o da tabela).
- A tabela indica a maior tensão e onde está, o maior deslocamento, o menor **coeficiente de segurança** (tensão de cedência ÷ tensão de von Mises; abaixo de 1 o material cede), a carga aplicada, as **reações** nos apoios (que equilibram a carga) e a malha usada.

Para **frequências naturais**, escolha esse **Tipo**, defina quantos **Modos** e resolva. Cada modo mostra a sua frequência e forma (as formas são escaladas para 1 no seu maior movimento).

Se alterar a peça, os resultados ficam marcados como desatualizados: resolva de novo.

## Cedência e contacto (estudos não lineares)

Dois tipos de estudo vão além de «o material permanece elástico»:

- **Não linear (o material cede)** segue a reta do material até à sua tensão de cedência, depois uma inclinação mais plana (**Inclinação após cedência**, 1 % de E se ficar vazio). A carga avança em **Passos de carga**; um passo que não estabiliza é dividido ao meio automaticamente. Os resultados acrescentam **Deformação plástica** aos gráficos e indicam quanta carga foi suportada. Se um passo ainda não estabilizar, o estudo para no último passo válido, e o painel ⚠ Problemas diz onde: a peça esgotou a resistência ali (um colapso), ou os passos são grandes demais.
- **Contacto entre peças** permite que peças separadas da mesma peça se empurrem. Adicione um **Par de contacto**, escolha as faces do lado A (as que pressionam) com {{ui:Escolher faces}} e depois o lado B com {{ui:Escolher as faces do lado B}}. As peças **sem atrito** empurram, deslizam e separam-se; as peças **coladas** ficam presas. Cada peça é malhada por si, por isso uma pequena folga entre elas é aceitável. O contacto é um método de penalização: as peças penetram ligeiramente umas nas outras (o **fator de penalização** × E ÷ tamanho do elemento define a rigidez do contacto). A tabela mostra a penetração mais profunda, e o painel Problemas avisa quando é superior a 1 % do tamanho do elemento: aumente o fator ou use elementos mais pequenos.

Os dois usam a malha tetraédrica. O atrito, o deslizamento grande e as grandes rotações não são resolvidos aqui.

## Executar no CalculiX

**Exportar › Deck CalculiX (.inp)** (ou {{ui:Guardar um deck CalculiX (.inp)}} no painel) guarda o estudo como ficheiro de entrada para o CalculiX, um programa separado que instala e executa por sua conta: a mesma malha, material, apoios, cargas e pares de contacto, em mm, N e MPa. Execute-o e depois **Exportar › Resultados CalculiX (.frd)** lê o seu ficheiro de resultados de volta para a mesma malha, e mostra o deslocamento (e a tensão de von Mises quando o ficheiro tem tensões). Se alterou a peça ou o tamanho do elemento entretanto, a malha já não é a mesma e o PartCraft indica-o: guarde um novo deck.

## Até onde confiar

O PartCraft verifica o seu solucionador contra fórmulas manuais (a deflexão na ponta de uma consola PL³/3EI dentro de 1 %, o alongamento de uma barra PL/AE exatamente, a primeira frequência de uma consola dentro de 3 %, a tensão em torno de um furo numa placa). Ainda assim, tenha em conta estes limites:

- **A malha.** Com tetraedros, o PartCraft verifica a deflexão e a tensão de flexão de uma consola (dentro de 0.3 %), a tensão num furo de uma placa (Kt, dentro de cerca de 1 %), um tubo grosso sob pressão (Lamé, dentro de 0.3 %) e a primeira frequência (dentro de 0.4 %). A tabela mostra a **qualidade da malha** (os menores e maiores ângulos entre faces dos elementos; abaixo de cerca de 10° um elemento é fraco) e um **erro estimado de tensão**: se for superior a alguns por cento, resolva de novo com um tamanho de elemento menor, ou deixe que **Refinar automaticamente** o faça. Numa placa com furo e numa barra com dois entalhes de aresta, o refinamento automático ficou a 1 % do Kt do manual com cerca de um sexto das incógnitas que tornar a malha inteira mais fina exigiria. Com cubos voxel, um furo ou uma concordância é uma escada com o tamanho do cubo, por isso a tensão ali é grosseira.
- **Cantos interiores vivos e arestas de faces fixas não têm pico de tensão real.** O valor ali continua a crescer à medida que os elementos ficam mais pequenos. Leia as tensões um pouco afastadas desses sítios, ou arredonde o canto no modelo.
- **Resultados a ler.** Além da tensão de von Mises, do deslocamento e do coeficiente de segurança, um estudo tetraédrico mostra a **tensão principal máxima e mínima** (tração e compressão) e a **deformação equivalente**. Marque **Mostrar malha** para ver os elementos.
- **Os estudos estáticos são lineares e elásticos.** Para cedência e contacto, use os tipos de estudo não lineares acima; as grandes deflexões e a fadiga não são resolvidas. Calor, tensão térmica e encurvadura linear são tipos de estudo próprios: veja [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling).
- **Todos os materiais são iguais em todas as direções.** Os plásticos impressos em 3D são mais fracos através das suas camadas, muitas vezes em um terço ou mais.
- Isto é uma versão de laboratório: verifique por outro meio as peças que importam.

## Atualizar enquanto edita (Live)

Marque **Atualizar enquanto edito** no bloco Resolver, e as respostas da Simulação seguem as suas edições. Altere uma cota, uma carga, o material ou o ambiente, e aparece de imediato uma **resposta rápida**, feita com elementos quatro vezes maiores do que os do estudo; quando parar um momento (cerca de um segundo), a **resposta refinada** do próprio estudo substitui-a. Os resultados indicam qual está a ver («Resposta rápida» ou «Resposta refinada») e o tamanho do elemento. A resposta rápida serve para a direção e a ordem de grandeza: numa consola de aço ficou dentro de 1 % na deflexão e cerca de 4 % na tensão, em relação à refinada. Confie na refinada para os números que vai usar. Os estudos estáticos, de frequência natural, térmicos e de encurvadura funcionam assim; Live é uma definição de visualização e não fica guardado na peça. Uma resolução premida manualmente mantém-se como está até à próxima edição.

## Descobrir o que cede primeiro (Testar rotura)

Para um estudo estático ou de encurvadura, prima **O que cede primeiro?** no bloco **Testar rotura**. O PartCraft escala as cargas do estudo (forças, pressões e peso em conjunto) até a peça ceder, e lista, do pior para o melhor, **o fator de carga até à primeira cedência** (o fator sobre as cargas de hoje em que a maior tensão de von Mises atinge a cedência do material, com um marcador vermelho onde acontece) e **o fator de carga até à encurvadura** para os mesmos apoios e cargas. Um fator de 4.3 significa que a peça suporta 4.3 vezes a sua carga antes de ceder; **um fator abaixo de 1 significa que já cede tal como está carregada**, e isso aparece na lista de Problemas como erro (a constatação mais fraca é mostrada como nota, mesmo quando tudo cumpre). Os fatores vêm de um estudo linear em tetraedros ao seu tamanho de elemento, por isso valem o que esse estudo vale: a tensão numa face fixa ou num canto vivo não tem pico real (veja acima), e o fator de cedência estará do lado cauteloso ali. O seu assistente pode executar a mesma verificação com a ferramenta `break_run`.

## Relacionados

- [Calor, tensão térmica e encurvadura](topic:thermal-and-buckling)
- [Gerar uma forma a partir de cargas (Generativo)](topic:generative-design)
- [Medir distâncias, ângulos e massa](topic:measure)
- [O que ainda não está implementado](topic:not-built-yet)
