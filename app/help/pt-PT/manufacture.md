---
title: Criar percursos e G-code (Fabrico)
summary: Definir o bruto e uma origem de trabalho, escolher ferramentas, acrescentar operações de face, caixa, contorno, furação e chanfro escolhendo faces, acabar o modelo inteiro em 3D (paralelo, crista constante), simular o bruto contra o modelo para detetar entalhes e o tempo de ciclo, e transferir G-code de um dos três pós-processadores incorporados ou de um pós-processador editado pelo próprio.
keywords: step exato, step para a oficina, coordenadas de trabalho, entrega cam, paralela, crista constante, acabamento 3d, acabamento, fresa de topo esférico, biblioteca de ferramentas, editar pós-processador, pós-processador personalizado, editor de pós-processadores, adaptativo, limpeza adaptativa, engajamento constante, trocoidal, hsm, maquinação em alta velocidade, fabrico, CAM, percurso da ferramenta, G-code, NC, CNC, fresadora, fresagem, caixa, contorno, perfil, facejamento, furação, bicada, G83, G81, G73, chanfro, bruto, deslocamento da origem, G54, pós-processador, GRBL, LinuxCNC, avanços e velocidades, simulação, entalhe, tempo de ciclo
from: f8a03be8
---

O espaço de trabalho Fabrico transforma a peça em percursos da ferramenta e escreve-os como G-code. A maioria das operações são fresagens de **2,5 eixos**: a ferramenta mantém-se vertical, as paredes são cortadas em linha reta para baixo e os fundos são planos. **Desbaste 3D** e **Restos** desbastam peças curvas em 3D ([Desbaste 3D e maquinação de restos](topic:rough-3d)); **Paralela** e **Crista constante** acabam-nas ([Acabamento 3D](topic:finish-3d)). Numa máquina com eixos rotativos, qualquer operação pode ter a ferramenta inclinada, e duas operações movem os eixos rotativos durante o corte ([Maquinação de 4 e 5 eixos](topic:multi-axis)). Há operações para torno ([Torneamento num torno](topic:turning)) e para um apalpador ([Apalpação](topic:probing)). Trabalha sobre as faces com nome que o núcleo de malha dá à peça (ver [O núcleo de malha](topic:solid-kernels)).

Versão de laboratório: verifique cada programa no simulador do seu comando, e execute-o primeiro no ar, acima do bruto.

## Preparar

1. Escolha **Fabrico** no comutador de espaços de trabalho e depois {{ui:Nova preparação}}.
2. No separador **Preparação** escolha:
   - **Eixo da ferramenta (+Z)**: para que lado a ferramenta aponta para dentro da peça. O +Y mundial (o "cima" do PartCraft) é o predefinido; o X da máquina é então o X mundial, e o Y da máquina é −Z mundial.
   - **Origem de trabalho (G54)**: um canto ou o centro do bruto, topo ou base, o centro superior do modelo ou a origem do modelo.
   - **Bruto**: uma caixa ou um cilindro, quer o modelo mais as folgas (lados, topo, base), quer um tamanho fixo.
   - **Material** (define os avanços e velocidades iniciais), o **pós-processador** (comando), a velocidade máxima do fuso da máquina, a taxa de avanço rápido e o tempo de troca de ferramenta, a refrigeração e o número do programa.

## Ferramentas

O separador **Ferramentas** contém a biblioteca: fresas de topo planas, esféricas e de nariz redondo, brocas, fresas de chanfrar e fresas de facejar, cada uma com um número T, diâmetro, número de gumes e comprimento de gume (além do raio de canto, do ângulo da ponta ou do ângulo do chanfro, onde se aplicam).

As minhas ferramentas podem ser guardadas no navegador e transferidas entre computadores como um ficheiro: ver [A biblioteca de ferramentas](topic:tool-library).

A velocidade do fuso e o avanço vêm do material: n = 1000 × velocidade de corte / (π × diâmetro), avanço = n × gumes × carga por dente (brocas: n × avanço por rotação). Os valores são pontos de partida conservadores, tirados de intervalos publicados, não ajustados à sua máquina; escreva a velocidade de corte, a carga por dente, as rpm ou o avanço indicados pelo fabricante da ferramenta para os substituir. Quando a velocidade ultrapassa a máxima da máquina, fica limitada a esse valor e o avanço acompanha-a, mantendo a carga por dente.

## Acrescentar operações

Cada botão da barra de ferramentas acrescenta uma operação e, quando precisa de geometria, começa a escolher: clique em faces ou arestas na vista (clique de novo para largar uma), depois {{ui:Concluir escolha}} ou {{key:Esc}}.

| Operação | Escolha | O que faz |
|---|---|---|
| {{ui:Face}} | nada | Passagens em ziguezague sobre todo o bruto, para além das suas arestas, até ao topo do modelo |
| {{ui:Caixa}} | uma face de fundo plana, um furo redondo ou uma cadeia fechada de arestas | Limpa a região com passagens de deslocamento de dentro para fora, a cada passo em profundidade; as ilhas (faces que se erguem dentro do fundo) ficam por cortar; um fundo aberto em todo o contorno (nada mais alto fora dele) é limpo até à aresta do bruto |
| {{ui:Adaptativo}} | o mesmo que Caixa | Limpa a mesma região em passagens que cortam cada uma uma largura definida (**Engajamento**, uma fração do diâmetro), para que a fresa nunca faça uma ranhura de largura total, mesmo nos cantos; entra por hélice e acaba as paredes em cada nível. Cortes estreitos permitem um passo em profundidade maior e um avanço mais alto |
| {{ui:Contorno}} | uma face plana (o seu contorno), uma face redonda ou arestas | Segue o contorno deslocado do raio da ferramenta, para fora ou para dentro, com arcos de entrada e saída e patilhas opcionais |
| {{ui:Furação}} | furos (clique na parede ou no bordo de um furo) | Fura cada furo com um ciclo fixo: bicada (G83), furação (G81) ou quebra de apara (G73); ou indique um diâmetro para furar todos os furos desse tamanho |
| {{ui:Chanfre}} | o contorno ou as arestas de uma face | Passa uma fresa de chanfrar ao longo da aresta, de modo a cortar a largura definida |
| {{ui:Paralela}} | nada (o modelo inteiro) | Acabamento 3D em linhas paralelas a qualquer ângulo, seguindo a superfície com uma fresa esférica, de nariz redondo ou plana. Ver [Acabamento 3D](topic:finish-3d) |
| {{ui:Crista constante}} | nada (o modelo inteiro) | Acabamento 3D em passagens a uma distância definida sobre a superfície, para que a crista entre elas tenha a altura pedida |

Selecione uma operação na lista para alterar a sua ferramenta, alturas (folga, retração, altura de avanço, topo, fundo), passo em profundidade, passo lateral, bruto a deixar, passagem de acabamento, entrada (hélice, rampa ou mergulho), fresagem em concordância, patilhas ou ciclo. {{ui:Subir}} e {{ui:Descer}} reordenam; {{ui:Suprimir}} deixa-a de fora; {{ui:Eliminar}} remove-a. Tudo fica no histórico de anulações e é guardado no ficheiro da peça.

O passo lateral de uma caixa é no máximo metade do diâmetro da ferramenta, para que cada ponto do seu fundo fique a um raio de ferramenta de uma passagem. Os cantos interiores mantêm o raio da ferramenta.

A **limpeza adaptativa** mantém o engajamento da fresa perto de um valor. Um engajamento de 0,15 do diâmetro corresponde a um ângulo de engajamento de cerca de 46°: o arco do bordo da fresa no material. Um deslocamento de caixa, em contrapartida, corta a largura total na primeira passagem e enrola-se mais em cada canto interior. Entre passagens, a ferramenta mantém-se em baixo onde se move por ar já cortado, e levanta-se e desce em ar cortado noutros pontos. As passagens são calculadas numa malha fina sobre a região (células de cerca de um doze avos do raio da ferramenta), por isso o engajamento pode exceder o valor definido em até uma célula; as paredes são acabadas com exatidão. Uma região aberta e grande gera um programa longo com muitos movimentos curtos.

## Simular

Os percursos são refeitos após cada alteração (também a da peça). {{ui:Simular}} mostra ainda o bruto que resta após o programa inteiro. O painel mostra:

- **Tempo de ciclo**: os movimentos de avanço à sua velocidade, os rápidos como linhas retas à taxa de avanço rápido da preparação, mais o tempo de troca de ferramenta. As máquinas reais aceleram, por isso demoram mais.
- **Entalhes**: locais onde a ferramenta foi mais de 0,02 mm abaixo da superfície da peça. Marcas vermelhas mostram-nos na vista.
- **Bruto que resta na peça**.

O bruto é um mapa de alturas do topo (um mapa Z), por isso não mostra recortes por baixo. Arraste a **Reprodução** para mover a ferramenta ao longo do programa. Na vista, os movimentos de avanço são contínuos e os rápidos tracejados, com uma cor por operação.

Com **Mostrar o bruto simulado** ativo, o bruto é colorido em relação ao modelo, célula a célula: **verde** onde está sobre o modelo (dentro de 0,02 mm), **vermelho** onde a ferramenta cortou o modelo, e onde resta bruto sobre o modelo **amarelo** para uma película fina, **laranja** para mais, desvanecendo até ao **cinzento** do bruto não cortado a 1 mm ou mais. As cores são refeitas a cada alteração, a partir do mesmo mapa de alturas dos números do painel, por isso o verde e o vermelho coincidem com a linha Entalhes. Um chanfro corta o modelo de propósito e mostra vermelho ao longo da sua aresta.

## Pós-processar o G-code

Escolha o comando em **{{ui:Pós-processador}}** e prima {{ui:Transferir G-code}} (ou {{ui:Pós-processador}} na barra de ferramentas):

| Comando | Ficheiro | Notas |
|---|---|---|
| Estilo Fanuc ISO | .nc | %, número O, números de linha, T M6 com G43 H, ciclos fixos |
| GRBL | .nc | Sem trocador de ferramentas nem ciclos fixos: uma troca de ferramenta pausa com M0; a furação é escrita como movimentos simples |
| LinuxCNC | .ngc | T M6 com G43 H, ciclos fixos, M2 |
| Torno estilo Fanuc | .nc | Para programas de torneamento: X como diâmetro, avanço por rotação, G96 sob um limite G50, roscagem G32 |
| Torno LinuxCNC | .ngc | Para programas de torneamento: diâmetros G7, G95, G96, roscagem G33; não escreve movimento de referenciação |
| Próprio | qualquer | Um pós-processador que escreveu ou alterou: {{ui:Editar pós-processador…}}, {{ui:Novo pós-processador…}}, {{ui:Importar ficheiro de pós-processador…}} |

Cada ficheiro começa com comentários sobre o programa, o bruto, a origem de trabalho e as ferramentas. As coordenadas estão em milímetros, com 3 casas decimais. {{ui:CSV do percurso}} e {{ui:JSON do percurso}} exportam os próprios movimentos.

**Verifique o resultado no simulador da sua máquina antes de cortar, e execute-o primeiro no ar, acima do bruto.** Os três pós-processadores incorporados são pontos de partida que seguem o comportamento documentado dos comandos; não foram comprovados em nenhuma máquina específica. Cabe a quem alterar um pós-processador comprová-lo. Como escrever um: [Pós-processadores editáveis](topic:post-processors).

## STEP exato para a oficina

Por baixo dos botões de G-code no separador **Operações**, {{ui:STEP exato (coordenadas de trabalho)}} transfere `<peça>-work.step`: a peça como sólido exato (cilindros verdadeiros para furos e saliências, círculos verdadeiros para as suas arestas), com a origem na origem de trabalho desta preparação e Z ao longo do eixo da ferramenta. Essas são as coordenadas que o G-code usa, por isso o programa CAM ou o verificador de uma oficina alinha o modelo com o programa sem o mover. O ficheiro contém apenas a peça, não o bruto nem os percursos.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve o mesmo sólido na posição própria da peça (Z para cima): ver [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Caixas, contornos, furação e chanfros são de 2,5 eixos. As peças curvas são desbastadas e acabadas em 3D pelas suas próprias operações ([Desbaste 3D e maquinação de restos](topic:rough-3d), [Acabamento 3D](topic:finish-3d)). A limpeza adaptativa é 2D (fundos planos).
- Ferramentas inclinadas, acabamento de 5 eixos e de 4.º eixo, torneamento e apalpação existem, cada um com limites próprios, e **nenhum foi executado numa máquina**: ver [Maquinação de 4 e 5 eixos](topic:multi-axis), [Torneamento num torno](topic:turning) e [Apalpação](topic:probing).
- Porta-ferramentas e hastes não são verificados quanto a colisões; surge um aviso quando um corte é mais fundo do que o comprimento do gume.
- Os avanços e as velocidades são valores iniciais. Um pós-processador é texto editável, mas apenas decide como os movimentos são escritos: não pode alterar o percurso, acrescentar eixos nem conhecer a sua máquina ([Pós-processadores editáveis](topic:post-processors) lista o que não pode fazer).

## Enviar o programa para uma máquina

No CadCraft Studio no computador, com uma máquina configurada no Studio, **Enviar para uma máquina…** aparece ao lado de **Transferir G-code** e carrega o mesmo programa para a máquina na sua rede. Nunca é iniciado a partir do PartCraft: inicie-o na própria máquina quando estiver claro. Num navegador o botão não é apresentado (uma página web não alcança uma máquina na rede): transfira o programa.
