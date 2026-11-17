---
title: Fazer trajetórias e G-code (Fabricação)
summary: Defina o material bruto e uma origem de trabalho, escolha as ferramentas, adicione operações de faceamento, bolsão, contorno, furação e chanfro escolhendo faces, termine o modelo inteiro em 3D (paralela, crista constante), simule o material bruto contra o modelo para achar entalhes e tempo de ciclo, e baixe o G-code de um dos três pós-processadores integrados ou de um que você edite.
keywords: passo exato, step para a oficina, coordenadas de trabalho, passagem para CAM, paralela, crista constante, acabamento 3D, acabamento, fresa de ponta esférica, biblioteca de ferramentas, editar pós-processador, pós-processador personalizado, editor de pós-processador, adaptativo, desbaste adaptativo, engajamento constante, trocoidal, hsm, usinagem em alta velocidade, fabricação, CAM, trajetória, G-code, NC, CNC, fresadora, fresamento, bolsão, contorno, perfil, faceamento, furação, bicada, G83, G81, G73, chanfro, material bruto, deslocamento de trabalho, G54, pós-processador, GRBL, LinuxCNC, avanços e velocidades, simulação, entalhe, tempo de ciclo
from: beeb29aa
---

O espaço de trabalho Fabricação transforma a peça em trajetórias para uma fresadora de 3 eixos e as grava como G-code. A maioria das operações é **2.5 eixos**: a ferramenta fica vertical, as paredes são cortadas retas para baixo e os fundos ficam planos. **Paralela** e **Crista constante** acabam superfícies curvas em 3D (veja [Acabamento 3D](topic:finish-3d)); a ferramenta continua vertical (três eixos, sem inclinação). Ele trabalha nas faces nomeadas que o kernel de malha dá à peça (veja [O kernel de malha](topic:solid-kernels)).

Versão de laboratório: confira cada programa no simulador do próprio comando, e execute-o no ar acima do material bruto primeiro.

## Preparar

1. Escolha **Fabricação** no seletor de área de trabalho, depois {{ui:New setup}}.
2. Na guia **Preparação**, escolha:
   - **Eixo da ferramenta (+Z)**: para que lado a ferramenta aponta para dentro da peça. O +Y do mundo (o "para cima" do PartCraft) é o padrão; o X da máquina é então o X do mundo, e o Y da máquina é −Z do mundo.
   - **Origem de trabalho (G54)**: um canto ou centro do material bruto, topo ou base, o centro superior do modelo, ou a origem do modelo.
   - **Material bruto**: uma caixa ou um cilindro, seja o modelo mais folgas (lados, topo, base) ou um tamanho fixo.
   - **Material** (define as velocidades e os avanços iniciais), o **pós-processador** (controle), a rotação máxima do eixo-árvore da máquina, a taxa de avanço rápido e o tempo de troca de ferramenta, a refrigeração e o número do programa.

## Ferramentas

A guia **Ferramentas** guarda a biblioteca: fresas de topo plano, esférica e de canto arredondado, brocas, fresas de chanfro e fresas de facear, cada uma com um número T, diâmetro, número de gumes e comprimento do canal (além do raio de canto, do ângulo de ponta ou de chanfro, onde se aplicam).

Minhas ferramentas podem ser salvas no navegador e levadas entre computadores como um arquivo: veja [A biblioteca de ferramentas](topic:tool-library).

A rotação do eixo-árvore e o avanço vêm do material: n = 1000 × velocidade de corte / (π × diâmetro), avanço = n × gumes × carga de cavaco (brocas: n × avanço por rotação). Os números são valores iniciais conservadores, tirados de faixas publicadas, não ajustados para a sua máquina; digite a velocidade de corte, a carga de cavaco, as rpm ou o avanço do fabricante da sua ferramenta para substituí-los. Quando a rotação passa da máxima da máquina, ela fica limitada nesse valor e o avanço acompanha, mantendo a carga de cavaco.

## Adicionar operações

Cada botão da barra de ferramentas adiciona uma operação e, quando ela precisa de geometria, começa a escolher: clique em faces ou arestas na vista (clique de novo para tirar uma), depois {{ui:Done picking}} ou {{key:Esc}}.

| Operação | Escolher | O que faz |
|---|---|---|
| {{ui:Face}} | nada | Passes em zigue-zague sobre todo o material bruto, além das bordas, até o topo do modelo |
| {{ui:Pocket}} | uma face plana de fundo, um furo redondo ou uma cadeia fechada de arestas | Desbasta a região em passes de deslocamento de dentro para fora, a cada passo em profundidade; ilhas (faces que sobem dentro do fundo) ficam; um fundo aberto em volta (nada mais alto fora dele) é desbastado até a borda do material bruto |
| {{ui:Adaptive}} | o mesmo que {{ui:Pocket}} | Desbasta a mesma região em passes que cortam uma largura definida (**Engajamento**, uma fração do diâmetro), de modo que a fresa nunca pega um canal de largura total, nem nos cantos; entra por uma hélice e acaba as paredes em cada nível. Cortes estreitos permitem um passo em profundidade maior e um avanço mais alto |
| {{ui:Contour}} | uma face plana (o seu contorno), uma face redonda ou arestas | Segue o contorno deslocado do raio da ferramenta, por fora ou por dentro, com arcos de entrada e de saída e abas opcionais |
| {{ui:Drill}} | furos (clique na parede ou na borda de um furo) | Fura cada furo com um ciclo fixo: bicada (G83), furação (G81) ou quebra de cavaco (G73); ou informe um diâmetro para furar todos os furos desse tamanho |
| {{ui:Chamfer}} | o contorno de uma face ou arestas | Passa uma fresa de chanfro ao longo da aresta, para que ela corte a largura que você definiu |
| {{ui:Parallel}} | nada (o modelo inteiro) | Acabamento 3D em linhas paralelas em qualquer ângulo, seguindo a superfície com uma fresa esférica, de canto arredondado ou de topo plano. Veja [Acabamento 3D](topic:finish-3d) |
| {{ui:Scallop}} | nada (o modelo inteiro) | Acabamento 3D em passes separados por uma distância definida sobre a superfície, de modo que a crista entre eles tenha a altura que você pedir |

Selecione uma operação na lista para alterar a ferramenta, as alturas (folga, retração, altura de avanço, topo, base), o passo em profundidade, o passo lateral, o material a deixar, o passe de acabamento, a entrada (hélice, rampa ou mergulho), a fresagem concordante, as abas ou o ciclo. {{ui:Up}} e {{ui:Down}} reordenam, {{ui:Suppress}} a deixa de fora, {{ui:Delete}} a remove. Tudo fica no histórico de desfazer e é salvo no arquivo da peça.

O passo lateral de um bolsão é no máximo a metade do diâmetro da ferramenta, então cada ponto do seu fundo fica a um raio de ferramenta de algum passe. Cantos internos mantêm o raio da ferramenta.

**Desbaste adaptativo** mantém o engajamento da fresa perto de um valor. Um engajamento de 0.15 do diâmetro é um ângulo de engajamento de cerca de 46°: o arco da borda da fresa no material. Um bolsão deslocado, por outro lado, corta a largura total no primeiro passe e dá a volta mais em todo canto interno. Entre os passes a ferramenta fica abaixada onde se move por ar já cortado, e sobe e desce no ar cortado em outros lugares. Os passes são calculados em uma grade fina sobre a região (células de cerca de um doze avos do raio da ferramenta), então o engajamento pode ficar até cerca de uma célula mais largo que o definido; as paredes são acabadas com exatidão. Uma região aberta grande gera um programa longo, com muitos movimentos curtos.

## Simular

As trajetórias são refeitas após toda alteração (a da peça também). {{ui:Simulate}} também mostra o material bruto que sobra depois de todo o programa. O painel mostra:

- **Tempo de ciclo**: movimentos de avanço na velocidade de avanço, avanços rápidos como linhas retas na taxa de avanço rápido da preparação, mais o tempo de troca de ferramenta. Máquinas reais aceleram, então levam mais tempo.
- **Entalhes**: lugares onde a ferramenta foi mais de 0.02 mm abaixo da superfície da peça. Marcas vermelhas os mostram na vista.
- **Material que sobra na peça**.

O material bruto é um mapa de alturas do topo (um mapa Z), então não pode mostrar contrarrebaixos. Arraste **Reprodução** para mover a ferramenta ao longo do programa. Na vista, os movimentos de avanço são sólidos e os avanços rápidos são tracejados, com uma cor por operação.

Com **Mostrar o material bruto simulado** ligado, o material bruto é colorido em relação ao modelo, célula por célula: **verde** onde está sobre o modelo (dentro de 0.02 mm), **vermelho** onde a ferramenta cortou o modelo, e onde sobra material sobre o modelo, **amarelo** para uma película fina, **laranja** para mais, desvanecendo até o **cinza** do material não cortado a 1 mm ou mais. As cores são refeitas a cada alteração, a partir do mesmo mapa de alturas dos números do painel, então o verde e o vermelho concordam com a linha Entalhes. Um chanfro corta o modelo de propósito e mostra vermelho na sua borda.

## Pós-processar o G-code

Escolha o controle em **Pós-processador** e pressione {{ui:Download G-code}} (ou {{ui:Post}} na barra de ferramentas):

| Controle | Arquivo | Observações |
|---|---|---|
| Estilo Fanuc ISO | .nc | %, número O, números de linha, T M6 com G43 H, ciclos fixos |
| GRBL | .nc | Sem trocador de ferramenta nem ciclos fixos: uma troca de ferramenta pausa com M0, e a furação é escrita como movimentos simples |
| LinuxCNC | .ngc | T M6 com G43 H, ciclos fixos, M2 |
| Personalizado | qualquer | Um pós-processador que você escreveu ou alterou: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Todo arquivo começa com comentários do programa, do material bruto, do deslocamento de trabalho e das ferramentas. As coordenadas são em milímetros, com 3 casas decimais. {{ui:Toolpath CSV}} e {{ui:Toolpath JSON}} exportam os próprios movimentos.

**Confira a saída no simulador da sua máquina antes de cortar, e execute-a no ar acima do material bruto primeiro.** Os três pós-processadores integrados são pontos de partida que seguem o comportamento documentado dos controles; eles não foram provados em nenhuma máquina específica. Um pós-processador que você altera é de sua responsabilidade provar. Como escrever um: [Pós-processadores](topic:post-processors).

## STEP exato para a oficina

Abaixo dos botões de G-code na guia **Operações**, {{ui:Exact STEP (work coordinates)}} baixa `<peça>-work.step`: a peça como um sólido exato (cilindros verdadeiros para furos e saliências, círculos verdadeiros para as bordas deles), com a origem na origem de trabalho desta preparação e Z ao longo do eixo da ferramenta. São as coordenadas que o G-code usa, então o programa CAM ou o verificador da oficina alinha o modelo ao programa sem movê-lo. O arquivo contém só a peça, sem o material bruto nem as trajetórias.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} grava o mesmo sólido na posição própria da peça (Z para cima): veja [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Bolsões, contornos, furação e chanfros são de 2.5 eixos. Faces curvas podem ser acabadas em 3D ([paralela e crista constante](topic:finish-3d)), mas não desbastadas em 3D (um cone fica em degraus até você acabá-lo), e não há usinagem de resto. O desbaste adaptativo é 2D (fundos planos).
- Só três eixos: sem inclinação, sem torneamento, sem inspeção.
- Porta-ferramentas e hastes não são verificados quanto a colisões; um aviso aparece quando um corte é mais profundo que o comprimento do canal.
- Avanços e velocidades são valores iniciais. Um pós-processador é um texto que você pode editar, mas ele só decide como os movimentos são escritos; não pode alterar a trajetória, acrescentar eixos nem conhecer a sua máquina ([Pós-processadores](topic:post-processors) lista o que ele não pode fazer).

## Enviar o programa para uma máquina

No CadCraft Studio na área de trabalho, com uma máquina configurada no Studio, **Enviar para uma máquina…** aparece ao lado de **Baixar G-code** e envia o mesmo programa para a máquina na sua rede. Ele nunca é iniciado pelo PartCraft: inicie-o na máquina quando estiver tudo claro. Em um navegador o botão não aparece (uma página web não alcança uma máquina na sua rede): baixe o programa.
