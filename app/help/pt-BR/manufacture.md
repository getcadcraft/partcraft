---
title: Gerar trajetórias e G-code (Manufatura)
summary: Defina o material bruto e uma origem da peça, escolha ferramentas, adicione operações de face, bolsão, contorno, furação e chanfro selecionando faces, acabe o modelo inteiro em 3D (paralela, crista constante), simule o material bruto contra o modelo para detectar entalhes e tempo de ciclo, e baixe o G-code de um dos três pós-processadores prontos ou de um que você mesmo edite.
keywords: STEP exato, STEP para a oficina, coordenadas de trabalho, entrega ao CAM, paralela, crista constante, acabamento 3D, acabamento, ponta esférica, biblioteca de ferramentas, editar pós-processador, pós-processador personalizado, editor de pós-processador, adaptativo, desbaste adaptativo, engajamento constante, trocoidal, hsm, usinagem em alta velocidade, manufatura, CAM, trajetória, G-code, NC, CNC, fresa, fresamento, bolsão, contorno, perfil, faceamento, furação, bicadas, G83, G81, G73, chanfro, material bruto, origem da peça, G54, pós-processador, GRBL, LinuxCNC, avanços e rotações, simulação, entalhe, tempo de ciclo
from: f8a03be8
---

A área de trabalho Manufatura transforma a peça em trajetórias e as grava como G-code. A maioria das operações é fresamento de **2.5 eixos**: a ferramenta fica na vertical, as paredes são cortadas retas para baixo e os fundos, planos. **{{ui:Desbaste 3D}}** e **{{ui:Sobras}}** desbastam peças curvas em 3D ([Desbaste 3D e usinagem de sobras](topic:rough-3d)); **{{ui:Paralela}}** e **{{ui:Crista constante}}** as acabam ([Acabamento 3D](topic:finish-3d)). Numa máquina com eixos rotativos, qualquer operação pode ter a ferramenta inclinada, e duas operações movem os eixos rotativos durante o corte ([Usinagem de 4 e 5 eixos](topic:multi-axis)). Há operações para torno ([Torneamento](topic:turning)) e para apalpador ([Apalpação](topic:probing)). Ela trabalha nas faces nomeadas que o núcleo de malha dá à peça (veja [O núcleo de malha](topic:solid-kernels)).

Esta versão é de laboratório: confira cada programa no simulador do seu próprio comando e execute-o no ar, acima do material bruto, antes de qualquer corte.

## Preparação

1. Escolha **Manufatura** no seletor de área de trabalho e depois {{ui:Nova preparação}}.
2. Na guia **Preparação**, escolha:
   - **Eixo da ferramenta (+Z)**: para que lado a ferramenta aponta para dentro da peça. +Y do mundo (o "para cima" do PartCraft) é o padrão; o X da máquina é então o X do mundo, e o Y da máquina é o −Z do mundo.
   - **Origem da peça (G54)**: um canto ou centro do material bruto, topo ou base, o centro do topo do modelo, ou a origem do modelo.
   - **Material bruto**: um bloco ou um cilindro, seja o modelo mais as folgas (laterais, topo, base), seja um tamanho fixo.
   - **Material** (define os avanços e rotações iniciais), o **pós-processador** (comando), a rotação máxima do eixo-árvore da máquina, o avanço rápido e o tempo de troca de ferramenta, o refrigerante e o número do programa.

## Ferramentas

A guia **Ferramentas** guarda a biblioteca: fresas de topo plano, esférica e de ponta arredondada, brocas, fresas de chanfro e fresas de facear, cada uma com um número T, diâmetro, canais e comprimento do canal (além do raio de canto, do ângulo de ponta ou do ângulo do chanfro, onde se aplicarem).

Minhas ferramentas podem ser salvas no navegador e transferidas entre computadores como arquivo: veja [A biblioteca de ferramentas](topic:tool-library).

A rotação do eixo-árvore e o avanço vêm do material: n = 1000 × velocidade de corte / (π × diâmetro), avanço = n × canais × carga de cavaco (brocas: n × avanço por rotação). Os números são valores iniciais conservadores, tirados de faixas publicadas, não ajustados para a sua máquina; digite a velocidade de corte, a carga de cavaco, a rotação ou o avanço do fabricante da sua ferramenta para substituí-los. Quando a rotação passa do máximo da máquina, ela é mantida ali e o avanço acompanha, preservando a carga de cavaco.

## Adicionar operações

Cada botão da barra de ferramentas adiciona uma operação e, quando ela precisa de geometria, começa a seleção: clique em faces ou arestas na vista (clique de novo para soltar uma), depois {{ui:Concluir seleção}} ou {{key:Esc}}.

| Operação | Seleção | O que faz |
|---|---|---|
| {{ui:Face}} | nada | Passes em zigue-zague sobre todo o material bruto, passando de suas bordas, até o topo do modelo |
| {{ui:Bolsão}} | uma face plana de fundo, um furo redondo ou uma cadeia fechada de arestas | Limpa a região em passadas de deslocamento de dentro para fora, a cada passo em Z; ilhas (faces que se erguem dentro do fundo) são deixadas; um fundo aberto por todos os lados (nada mais alto fora dele) é limpo até a borda do material bruto |
| {{ui:Adaptativo}} | o mesmo que Bolsão | Limpa a mesma região em passadas que cortam cada uma uma largura definida (**Engajamento**, uma fração do diâmetro), de modo que a fresa nunca faça um rasgo de largura total, nem nos cantos; entra por hélice e acaba as paredes em cada nível. Cortes estreitos permitem um passo em Z mais profundo e um avanço maior |
| {{ui:Contorno}} | uma face plana (o seu contorno), uma face redonda ou arestas | Segue o contorno deslocado pelo raio da ferramenta, por fora ou por dentro, com arcos de entrada e de saída e amarras opcionais |
| {{ui:Furação}} | furos (clique na parede de um furo ou na sua borda) | Fura cada furo com um ciclo fixo: com bicadas (G83), furação (G81) ou quebra de cavaco (G73); ou informe um diâmetro para furar todos os furos desse tamanho |
| {{ui:Chanfro}} | o contorno ou as arestas de uma face | Passa uma fresa de chanfro ao longo da aresta para que ela corte a largura que você definir |
| {{ui:Paralela}} | nada (o modelo inteiro) | Acabamento 3D em linhas paralelas em qualquer ângulo, seguindo a superfície com uma fresa de ponta esférica, arredondada ou plana. Veja [Acabamento 3D](topic:finish-3d) |
| {{ui:Crista constante}} | nada (o modelo inteiro) | Acabamento 3D em passadas a uma distância definida sobre a superfície, de modo que a crista entre elas tenha a altura pedida |

Selecione uma operação na lista para mudar a ferramenta, as alturas (folga, recuo, altura de avanço, topo, fundo), o passo em Z, o passo lateral, o sobremetal, a passada de acabamento, a entrada (hélice, rampa ou mergulho), o fresamento concordante, as amarras ou o ciclo. {{ui:Subir}} e {{ui:Descer}} reordenam, {{ui:Suprimir}} a deixa de fora, {{ui:Excluir}} a remove. Tudo fica no histórico de desfazer e é salvo no arquivo da peça.

O passo lateral de um bolsão é no máximo a metade do diâmetro da ferramenta, de modo que cada ponto do seu fundo fica a um raio da ferramenta de alguma passada. Cantos internos mantêm o raio da ferramenta.

**O desbaste adaptativo** mantém o engajamento da fresa próximo de um valor. Um engajamento de 0.15 do diâmetro corresponde a um ângulo de engajamento de cerca de 46°: o arco da aresta da fresa dentro do material. Um bolsão com deslocamento, em contraste, corta a largura total na primeira passada e dá mais voltas em cada canto interno. Entre as passadas, a ferramenta permanece em contato onde se move por ar já cortado, e sobe e desce no ar em outros lugares. As passadas são calculadas numa grade fina sobre a região (células de cerca de um doze avos do raio da ferramenta), então o engajamento pode ficar até cerca de uma célula mais largo que o definido; as paredes são acabadas exatamente. Uma região aberta e grande gera um programa longo, com muitos movimentos curtos.

## Simular

As trajetórias são refeitas após cada mudança (a da peça também). {{ui:Simular}} mostra ainda o material que sobra depois do programa inteiro. O painel mostra:

- **Tempo de ciclo**: movimentos de corte no seu avanço, avanços rápidos como linhas retas na taxa rápida da preparação, mais o tempo de troca de ferramenta. Máquinas reais aceleram, então levam mais tempo.
- **Entalhes**: pontos onde a ferramenta foi mais de 0.02 mm abaixo da superfície da peça. Marcas vermelhas os mostram na vista.
- **Material restante na peça**.

O material bruto é um mapa de alturas do topo (um mapa Z), então não pode mostrar contrasulcos. Arraste a **Reprodução** para mover a ferramenta ao longo do programa. Na vista, os movimentos de corte são contínuos e os avanços rápidos são tracejados, com uma cor por operação.

Com **Mostrar o material bruto simulado** ativado, o material bruto é colorido em relação ao modelo, célula por célula: **verde** onde está sobre o modelo (dentro de 0.02 mm), **vermelho** onde a ferramenta cortou para dentro do modelo, e onde sobra material sobre o modelo, **amarelo** para uma película fina, **laranja** para mais, desvanecendo até o **cinza** do material não usinado a 1 mm ou mais. As cores são refeitas a cada mudança, a partir do mesmo mapa de alturas dos números do painel, então o verde e o vermelho concordam com a linha Entalhes. Um chanfro corta o modelo de propósito e mostra vermelho ao longo da sua aresta.

## Pós-processar o G-code

Escolha o comando em {{ui:Pós-processador}} e pressione **Baixar G-code** (ou {{ui:Pós-processador}} na barra de ferramentas):

| Comando | Arquivo | Observações |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de linha, T M6 com G43 H, ciclos fixos |
| GRBL | .nc | Sem trocador de ferramentas nem ciclos fixos: uma troca de ferramenta pausa com M0; a furação é escrita como movimentos simples |
| LinuxCNC | .ngc | T M6 com G43 H, ciclos fixos, M2 |
| Torno estilo Fanuc | .nc | Para programas de torneamento: X como diâmetro, avanço por rotação, G96 sob um limite G50, roscamento G32 |
| Torno LinuxCNC | .ngc | Para programas de torneamento: diâmetros em G7, G95, G96, roscamento G33; não escreve movimento de referência |
| Próprio | qualquer | Um pós-processador que você escreveu ou alterou: {{ui:Editar pós-processador…}}, {{ui:Novo pós-processador…}}, {{ui:Importar arquivo de pós-processador…}} |

Cada arquivo começa com comentários sobre o programa, o material bruto, a origem da peça e as ferramentas. As coordenadas são em milímetros, com 3 casas decimais. {{ui:CSV da trajetória}} e {{ui:JSON da trajetória}} exportam os próprios movimentos.

**Verifique a saída no simulador da sua máquina antes de usinar, e execute-a no ar, acima do material bruto, primeiro.** Os três pós-processadores prontos são pontos de partida que seguem o comportamento documentado dos comandos; eles não foram comprovados em nenhuma máquina específica. Um pós-processador que você altera é de sua responsabilidade comprovar. Como escrever um: [Pós-processadores](topic:post-processors).

## STEP exato para a oficina

Abaixo dos botões de G-code, na guia **Operações**, {{ui:STEP exato (coordenadas de trabalho)}} baixa `<peça>-work.step`: a peça como sólido exato (cilindros verdadeiros para furos e saliências, círculos verdadeiros para as arestas deles), com a origem na origem da peça desta preparação e Z ao longo do eixo da ferramenta. Essas são as coordenadas que o G-code usa, então o programa CAM ou o verificador da oficina alinha o modelo com o programa sem movê-lo. O arquivo contém só a peça, não o material bruto nem as trajetórias.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} grava o mesmo sólido na posição própria da peça (Z para cima): veja [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Bolsões, contornos, furações e chanfros são de 2.5 eixos. Peças curvas são desbastadas e acabadas em 3D pelas suas próprias operações ([Desbaste 3D e usinagem de sobras](topic:rough-3d), [Acabamento 3D](topic:finish-3d)). O desbaste adaptativo é 2D (fundos planos).
- Ferramentas inclinadas, acabamento de 5 eixos e de 4º eixo, torneamento e apalpação existem, cada um com limites próprios, e **nenhum deles foi executado numa máquina**: veja [Usinagem de 4 e 5 eixos](topic:multi-axis), [Torneamento](topic:turning) e [Apalpação](topic:probing).
- Porta-ferramentas e hastes não são verificados quanto a colisões; um aviso aparece quando um corte é mais profundo que o comprimento do canal.
- Avanços e rotações são valores iniciais. Um pós-processador é um texto que você pode editar, mas ele só decide como os movimentos são escritos; não pode mudar a trajetória, acrescentar eixos nem conhecer a sua máquina ([Pós-processadores](topic:post-processors) lista o que ele não pode fazer).

## Enviar o programa para uma máquina

No CadCraft Studio no computador, com uma máquina configurada no Studio, **Enviar para uma máquina…** aparece ao lado de **Baixar G-code** e envia o mesmo programa para a máquina na sua rede. Ele nunca é iniciado pelo PartCraft: inicie-o na máquina quando estiver tudo claro. No navegador o botão não aparece (uma página web não alcança uma máquina na sua rede): baixe o programa.
