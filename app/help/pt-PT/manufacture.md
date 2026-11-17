---
title: Criar percursos e G-code (Maquinação)
summary: Defina o bruto e uma origem de trabalho, escolha as ferramentas, acrescente operações de facejamento, caixa, contorno, furo e chanfre escolhendo faces, acabe o modelo completo em 3D (paralelo, crista constante), simule o bruto contra o modelo para detetar sobrecortes e o tempo de ciclo, e transfira o G-code de um dos três pós-processadores incorporados ou de um que edite.
keywords: STEP exato, STEP para a oficina, coordenadas de trabalho, passagem para CAM, paralelo, crista constante, acabamento 3D, acabamento, fresa de ponta esférica, biblioteca de ferramentas, editar pós-processador, pós-processador personalizado, editor de pós-processador, adaptativo, desbaste adaptativo, engajamento constante, trocoidal, HSM, maquinação em alta velocidade, maquinação, CAM, percurso da ferramenta, G-code, NC, CNC, fresadora, fresagem, caixa, contorno, perfil, facejamento, furo, peck, G83, G81, G73, chanfre, bruto, deslocamento de origem, G54, pós-processador, GRBL, LinuxCNC, avanços e rotações, simulação, sobrecorte, tempo de ciclo
from: beeb29aa
---

O espaço de trabalho Maquinação transforma a peça em percursos para uma fresadora de 3 eixos e escreve-os como G-code. A maioria das operações é **2.5 eixos**: a ferramenta mantém-se vertical, as paredes são cortadas direitas para baixo e os fundos são planos. **Paralela** e **Crista constante** acabam superfícies curvas em 3D (ver [Acabamento 3D](topic:finish-3d)); a ferramenta continua vertical (três eixos, sem inclinação). Trabalha sobre as faces nomeadas que o kernel de malha dá à peça (ver [O kernel de malha](topic:solid-kernels)).

Versão de laboratório: verifique cada programa no simulador do próprio controlo, e execute-o primeiro no ar, acima do bruto.

## Configurar

1. Escolha **Maquinação** no seletor de espaços de trabalho e depois {{ui:Nova preparação}}.
2. No separador **Preparação** escolha:
   - **Eixo da ferramenta (+Z)**: o sentido em que a ferramenta aponta para a peça. O +Y do mundo (o «para cima» do PartCraft) é o predefinido; o X da máquina é então o X do mundo e o Y da máquina é o −Z do mundo.
   - **Origem de trabalho (G54)**: um canto ou centro do bruto, topo ou base, o centro superior do modelo ou a origem do modelo.
   - **Bruto**: um paralelepípedo ou um cilindro, quer o modelo mais desvios (lados, topo, base) quer um tamanho fixo.
   - **Material** (define os avanços e rotações iniciais), o **pós-processador** (controlo), a rotação máxima do fuso da máquina, a velocidade de avanço rápido, o tempo de troca de ferramenta, o refrigerante e o número do programa.

## Ferramentas

O separador **Ferramentas** contém a biblioteca: fresas de topo planas, esféricas e de raio de canto, brocas, fresas de chanfrar e fresas de facejar, cada uma com um número T, diâmetro, número de gumes e comprimento de gume (além do raio de canto, do ângulo da ponta ou do chanfre, onde se aplicam).

As ferramentas próprias podem ser guardadas no navegador e transferidas entre computadores como ficheiro: ver [A biblioteca de ferramentas](topic:tool-library).

A rotação do fuso e o avanço vêm do material: n = 1000 × velocidade de corte / (π × diâmetro), avanço = n × gumes × avanço por dente (brocas: n × avanço por rotação). Os números são valores iniciais conservadores, de intervalos publicados, e não ajustados à máquina; escreva a velocidade de corte, o avanço por dente, as rpm ou o avanço do fabricante da ferramenta para os substituir. Quando a rotação ultrapassa o máximo da máquina, fica limitada a esse valor e o avanço acompanha-a, mantendo o avanço por dente.

## Acrescentar operações

Cada botão da barra de ferramentas acrescenta uma operação e, quando precisa de geometria, começa a escolher: clique em faces ou arestas na vista (clique de novo para retirar uma), e depois {{ui:Concluir escolha}} ou {{key:Esc}}.

| Operação | Escolha | O que faz |
|---|---|---|
| {{ui:Face}} | nada | Passagens em ziguezague sobre todo o bruto, para além das arestas, até ao topo do modelo |
| {{ui:Caixa}} | uma face plana de fundo, um furo redondo ou uma cadeia fechada de arestas | Limpa a região em passagens de offset de dentro para fora, em cada descida; as ilhas (faces que se erguem dentro do fundo) são deixadas; um fundo aberto em toda a volta (nada mais alto fora dele) é limpo até à aresta do bruto |
| {{ui:Adaptativo}} | o mesmo que Caixa | Limpa a mesma região em passagens que cortam cada uma uma largura definida (**Engajamento**, uma fração do diâmetro), de modo que a fresa nunca faz uma ranhura de largura total, nem nos cantos; entra em hélice e acaba as paredes em cada nível. Cortes estreitos permitem uma descida mais profunda e um avanço mais alto |
| {{ui:Contorno}} | uma face plana (o respetivo contorno), uma face redonda ou arestas | Segue o contorno deslocado pelo raio da ferramenta, por fora ou por dentro, com arcos de entrada e de saída e micro-ligações opcionais |
| {{ui:Furação}} | furos (clique na parede ou no bordo de um furo) | Fura cada furo com um ciclo fixo: peck (G83), furar (G81) ou quebra de apara (G73); ou indique um diâmetro para furar todos os furos desse tamanho |
| {{ui:Chanfre}} | o contorno de uma face ou arestas | Percorre a aresta com uma fresa de chanfrar, de modo que corta a largura definida |
| {{ui:Paralela}} | nada (o modelo inteiro) | Acabamento 3D em linhas paralelas a qualquer ângulo, seguindo a superfície com uma fresa de ponta esférica, de raio de canto ou plana. Ver [Acabamento 3D](topic:finish-3d) |
| {{ui:Crista constante}} | nada (o modelo inteiro) | Acabamento 3D em passagens a uma distância definida sobre a superfície, de modo que a crista entre elas tenha a altura pedida |

Escolha uma operação na lista para alterar a sua ferramenta, alturas (folga, recuo, altura de avanço, topo, base), descida, passo lateral, sobremedida a deixar, passagem de acabamento, entrada (hélice, rampa ou mergulho), fresagem em concordância, micro-ligações ou ciclo. {{ui:Subir}} e {{ui:Descer}} reordenam, {{ui:Suprimir}} deixa-a de fora, {{ui:Eliminar}} remove-a. Tudo fica no histórico de anulação e é guardado no ficheiro da peça.

O passo lateral de uma caixa é no máximo metade do diâmetro da ferramenta, para que cada ponto do fundo fique a um raio da ferramenta de uma passagem. Os cantos internos mantêm o raio da ferramenta.

**O desbaste adaptativo** mantém o engajamento da fresa próximo de um valor. Um engajamento de 0.15 do diâmetro corresponde a um ângulo de engajamento de cerca de 46°: o arco da aresta da fresa no material. Uma caixa com deslocamento, em contrapartida, corta toda a largura na primeira passagem e enrola-se mais em todos os cantos internos. Entre passagens, a ferramenta fica em baixo onde se move por ar já cortado, e levanta-se e desce noutros pontos em ar cortado. As passagens são calculadas numa malha fina sobre a região (células de cerca de um doze avos do raio da ferramenta), por isso o engajamento pode chegar até cerca de uma célula mais largo do que o definido; as paredes são acabadas com exatidão. Uma região aberta grande faz um programa longo com muitos movimentos curtos.

## Simular

Os percursos da ferramenta são calculados de novo após cada alteração (também os da peça). {{ui:Simular}} mostra ainda o bruto que sobra no fim do programa inteiro. O painel mostra:

- **Tempo de ciclo**: movimentos de avanço ao avanço indicado, movimentos rápidos como linhas retas à velocidade rápida da preparação, mais o tempo de troca de ferramenta. As máquinas reais aceleram, por isso demoram mais.
- **Sobrecortes**: locais onde a ferramenta foi mais de 0.02 mm abaixo da superfície da peça. Marcas vermelhas mostram-nos na vista.
- **Bruto que sobra na peça**.

O bruto é um mapa de alturas do topo (um mapa Z), por isso não pode mostrar rebaixos. Arraste **Reprodução** para mover a ferramenta ao longo do programa. Na vista, os movimentos de avanço são contínuos e os rápidos a tracejado, com uma cor por operação.

Com **Mostrar o bruto simulado** ativo, o bruto é colorido em relação ao modelo, célula a célula: **verde** onde está sobre o modelo (dentro de 0.02 mm), **vermelho** onde a ferramenta cortou o modelo, e onde sobra bruto sobre o modelo **amarelo** para uma película fina, **laranja** para mais, transitando para o **cinzento** do bruto não cortado a 1 mm ou mais. As cores são recalculadas a cada alteração, a partir do mesmo mapa de alturas dos números do painel, por isso o verde e o vermelho coincidem com a linha Sobrecortes. Um chanfre corta o modelo de propósito e mostra vermelho ao longo da respetiva aresta.

## Pós-processar o G-code

Escolha o controlo em **Pós-processador** e prima {{ui:Transferir G-code}} (ou {{ui:Pós-processador}} na barra de ferramentas):

| Controlo | Ficheiro | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de linha, T M6 com G43 H, ciclos fixos |
| GRBL | .nc | Sem trocador de ferramentas nem ciclos fixos: uma troca de ferramenta para com M0, e a furação é escrita como movimentos simples |
| LinuxCNC | .ngc | T M6 com G43 H, ciclos fixos, M2 |
| Próprio | qualquer | Um pós-processador que escreveu ou alterou: {{ui:Editar pós-processador…}}, {{ui:Novo pós-processador…}}, {{ui:Importar ficheiro de pós-processador…}} |

Cada ficheiro começa com comentários sobre o programa, o bruto, o deslocamento de origem e as ferramentas. As coordenadas estão em milímetros, com 3 casas decimais. {{ui:CSV do percurso}} e {{ui:JSON do percurso}} exportam os próprios movimentos.

**Verifique o resultado no simulador da própria máquina antes de cortar, e execute-o primeiro no ar, acima do bruto.** Os três pós-processadores incorporados são pontos de partida que seguem o comportamento documentado dos controlos; não foram provados em nenhuma máquina em particular. Um pós-processador alterado cabe a quem o altera provar. Como escrever um: [Pós-processadores](topic:post-processors).

## STEP exato para a oficina

Por baixo dos botões de G-code no separador **Operações**, {{ui:STEP exato (coordenadas de trabalho)}} transfere `<part>-work.step`: a peça como sólido exato (cilindros verdadeiros para furos e saliências, círculos verdadeiros para as respetivas arestas) com a origem na origem de trabalho desta preparação e Z ao longo do eixo da ferramenta. São as coordenadas que o G-code usa, por isso o programa CAM da própria oficina ou o verificador alinha o modelo com o programa sem o mover. O ficheiro contém apenas a peça, não o bruto nem os percursos da ferramenta.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve o mesmo sólido na posição própria da peça (Z para cima): ver [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Caixas, contornos, furação e chanfros são de 2.5 eixos. As faces curvas podem ser acabadas em 3D ([paralela e crista constante](topic:finish-3d)), mas não desbastadas em 3D (um cone fica em degraus até o acabar), e não há maquinação de restos. O desbaste adaptativo é 2D (fundos planos).
- Apenas três eixos: sem inclinação, sem torneamento, sem inspeção.
- Porta-ferramentas e hastes não são verificados quanto a colisões; aparece um aviso quando um corte é mais profundo do que o comprimento do gume.
- Avanços e rotações são valores iniciais. Um pós-processador é texto que se pode editar, mas apenas decide como os movimentos são escritos; não pode alterar o percurso da ferramenta, acrescentar eixos nem conhecer a máquina ([Pós-processadores](topic:post-processors) lista o que não consegue fazer).

## Enviar o programa para uma máquina

No CadCraft Studio para computador, com uma máquina configurada no Studio, **Enviar para uma máquina…** aparece ao lado de **Transferir G-code** e carrega o mesmo programa para a máquina na rede. Nunca é iniciado a partir do PartCraft: inicie-o na máquina quando estiver livre. Num navegador o botão não aparece (uma página web não consegue chegar a uma máquina da rede): transfira o programa em vez disso.
