---
title: Começar com o PartCraft
summary: O que o PartCraft faz hoje, o que o seu navegador precisa, e uma primeira peça em dez minutos, desde o esboço até ao ficheiro guardado.
keywords: começar, primeira execução, início rápido, introdução, tutorial, primeira peça, placa, paramétrico, modelador de peças
from: 7d43283f
---

O PartCraft é a aplicação de peças e montagens paramétricas da família CadCraft. Desenha um esboço 2D, fixa-o com relações e cotas, transforma-o num sólido com operações como extrudir, revolução e furo, e altera qualquer número mais tarde: a peça reconstrói-se a partir do seu histórico. As peças depois entram em montagens, onde as uniões as posicionam e permitem verificar o movimento.

O que esta versão faz:

| Tarefa | O que obtém |
|---|---|
| Esboços | Linhas, retângulos, círculos, arcos, pontos e linhas de eixo, com relações e cotas, e um estado ativo: sub-definido, totalmente definido ou sobre-definido |
| Operações sólidas | Extrudir, cortar, revolução, corte por revolução, furos simples e com rebaixo, padrões lineares e circulares, espelho, arredondamentos e chanfros em arestas retas entre faces planas, e cascas e ângulos de saída em faces planas. Varrimentos, lofts e as outras operações que precisam de um kernel exato ainda não estão implementados nesta versão: ver [O que ainda não está implementado](topic:not-built-yet) |
| Histórico | Editar os números de qualquer operação, suprimir, recuar, reordenar e eliminar, com anulação |
| Montagens | Peças unidas por uniões rígidas, de revolução e deslizantes, uma verificação de interferências e uma verificação de movimento |
| Desenhos | Uma folha A3 com três vistas, uma isométrica, um corte, uma vista de detalhe, dimensões globais, referências, quadros de controlo de tolerâncias e símbolos de acabamento de superfície, exportada como PDF |
| Ficheiros | Os seus próprios ficheiros de peça e montagem; saída em STL, 3MF, STEP exato, DXF e PDF |

Tudo funciona no seu navegador, no seu computador. **Nada é enviado.** Veja [Ficheiros: abrir, guardar e exportar](topic:files) para saber para onde vão os ficheiros.

## O que precisa

- Um Chrome, Edge, Firefox ou Safari atual com **WebGL** (gráficos 3D) e **WebAssembly** ativados. Ambos estão ativos por predefinição. A geometria sólida é construída por um kernel de malha em WebAssembly que é carregado com a aplicação: ver [O kernel de malha](topic:solid-kernels).
- Um rato é o mais fácil. Um trackpad funciona, e ecrãs táteis funcionam para ver e para esboços simples: ver [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).
- Um ecrã com pelo menos 1280 pixels de largura mostra a barra de ferramentas inteira numa só linha. Janelas mais estreitas fazem deslocar a barra na horizontal; num telemóvel, os painéis abrem como folhas a partir de uma barra na parte inferior.

Mais sobre navegadores: [Navegadores e computadores](common:browsers).

:::note
O PartCraft funciona no navegador e, no ambiente de trabalho, dentro do CadCraft Studio. O armazenamento na nuvem ainda não está disponível: abre as peças a partir do seu computador e guarda-as de volta como ficheiros.
:::

## Abrir o PartCraft

1. Abra o PartCraft.
2. Aguarde enquanto o ecrã mostra « A carregar o kernel sólido… ». Isto demora um momento na primeira vez.
3. Vê uma vista 3D vazia com três planos base, o histórico à esquerda (« Part1 », depois Plano frontal, Plano superior, Plano direito) e uma caixa na vista com o título « Iniciar uma peça ».
4. O indicador perto da extremidade direita da barra de estado diz « Kernel de malha »: o PartCraft constrói todas as peças com o kernel de malha nesta versão, por isso as superfícies redondas são facetas planas. Pode começar a modelar de imediato.

Se a vista disser que o navegador não consegue mostrar 3D, ou se o kernel não carregou, veja [Resolução de problemas](topic:troubleshooting#the-app-does-not-start).

## A sua primeira peça: uma placa com um furo

Vai fazer uma placa de 60 × 40 mm, com 10 mm de espessura, com um furo de 6 mm que a atravessa. As unidades são milímetros.

### Esboçar o contorno

1. Clique em **Plano frontal** no histórico à esquerda. O plano fica realçado na vista.
2. Escolha {{ui:Esboço}} na barra de ferramentas, ou prima {{key:S}}. A vista volta-se para olhar diretamente para o plano, e a ferramenta Linha fica ativa.
3. Prima {{key:R}} para a ferramenta Retângulo.
4. Mova o ponteiro para a origem (o pequeno círculo vermelho com uma cruz). Um pequeno quadrado mostra que encaixa. Clique.
5. Mova para cima e para a direita e clique de novo. Tem um retângulo. As suas linhas são azuis: azul significa que ainda se podem mover.

### Dar-lhe medidas

1. Prima {{key:D}} para a ferramenta Cota.
2. Clique na linha superior e depois um pouco acima dela. Abre-se uma caixa de número com o comprimento atual.
3. Escreva `60` e prima {{key:Enter}}. O retângulo passa a ter 60 mm de largura.
4. Clique na linha esquerda e depois um pouco à esquerda dela. Escreva `40` e prima {{key:Enter}}.

O indicador no canto superior esquerdo da vista diz agora **Totalmente definido** e as linhas passam a tinta (preto no tema Papel, claro no tema Modelo). Todos os pontos e medidas estão fixos.

:::tip
Se começou o retângulo afastado da origem, o indicador continua a dizer « Sub-definido · 2 graus de liberdade ». Prima {{key:S}} para Selecionar, clique num canto, {{key:Shift}}+clique na origem, e depois escolha {{ui:• Coincidente}} no painel direito.
:::

### Extrudir

1. Escolha {{ui:Sair}} na barra de ferramentas, ou prima {{key:Esc}} até o esboço fechar (normalmente duas vezes).
2. Escolha {{ui:Extrudir}}. Aparece um sólido de 10 mm. « Extrude1 » é adicionado ao histórico, com « Sketch1 » recuado por baixo.
3. O painel direito mostra as definições da extrusão. Para alterar a espessura, escreva um novo número em **Profundidade (mm)** e prima {{key:Enter}} ou {{key:Tab}}. A peça reconstrói-se de imediato.

### Acrescentar o furo

1. Clique na grande face plana à frente da placa (a extremidade da extrusão). A face inteira fica realçada e o painel direito diz **Face**.
2. Escolha {{ui:Esboço nesta face}} no painel direito.
3. Prima {{key:P}} para a ferramenta Ponto e clique perto do centro da face.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Furo}}. Um furo de 6 mm atravessa a placa. Altere **Diâmetro (mm)** no painel direito se quiser.

A caixa **Peça** no canto inferior esquerdo indica agora um volume, uma área de superfície, o tamanho (60 × 40 × 10 mm) e « Furos passantes: 1 ».

### Guardar

1. Prima {{key:Mod+S}} ou escolha {{ui:Guardar}}.
2. O navegador transfere `Part1.partcraft.json` para a pasta de transferências. O ficheiro contém todo o histórico: abra-o de novo com {{ui:Abrir}} para continuar a editar.

Para mudar primeiro o nome da peça, clique num espaço vazio na vista para que nada fique selecionado e escreva um novo **Nome** no painel direito.

## Para onde ir a seguir

- [Desenhar o seu primeiro esboço](topic:sketch-basics) e [Definir totalmente um esboço](topic:relations-dimensions) explicam o esboçador a fundo.
- [Alterar uma peça através do seu histórico](topic:edit-history) mostra como editar o que construiu.
- [Arredondar, chanfrar e ocar](topic:fillet-chamfer-shell) e [Fazer um desenho](topic:drawing-pdf) concluem a peça. [O que ainda não está implementado](topic:not-built-yet) lista o que esta versão não faz, como varrimentos e lofts.
- [Vindo de outro modelador paramétrico](topic:coming-from) lista os hábitos que funcionam de forma diferente aqui.
- [Teclas e rato](topic:keyboard) é a lista completa de atalhos.
- [Como usar esta ajuda](common:help).
