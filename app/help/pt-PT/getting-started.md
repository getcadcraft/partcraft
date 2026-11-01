---
title: Começar com o PartCraft
summary: O que o PartCraft faz hoje, o que o seu navegador precisa e uma primeira peça em dez minutos, do esboço ao ficheiro guardado.
keywords: início, primeira execução, início rápido, introdução, tutorial, primeira peça, placa, paramétrico, modelador de peças
from: 5f0a668d
---

O PartCraft é a aplicação de peças e montagens paramétricas da família CadCraft. Desenha um esboço 2D, fixa-o com relações e cotas, transforma-o num sólido com operações como extrusão, revolução e furo, e muda qualquer número mais tarde: a peça reconstrói-se a partir do seu histórico. Depois as peças vão para montagens, onde as juntas as colocam e lhe deixam verificar o movimento.

O que esta versão faz:

| Tarefa | O que obtém |
|---|---|
| Esboços | Linhas, retângulos, círculos, arcos, pontos e linhas de eixo, com relações e cotas, e um estado em direto: subdefinido, totalmente definido ou sobredefinido |
| Operações de sólido | Extrusão, corte, revolução, corte por revolução, furos simples e escareados, matrizes lineares e circulares, simetria, boleados e chanfres em arestas retas entre faces planas, e cascas e ângulos de saída em faces planas. Varrimentos, loft e as outras operações que precisam de um kernel exato ainda não estão implementados nesta versão: veja [O que ainda não está implementado](topic:not-built-yet) |
| Histórico | Editar os números de qualquer operação, suprimir, reverter, reordenar e eliminar, com anulação |
| Montagens | Peças unidas por juntas rígidas, de rotação e deslizantes, uma verificação de conflitos e uma verificação de movimento |
| Desenhos | Uma folha A3 com três vistas, uma isométrica, um corte, uma vista de pormenor, dimensões globais, referências, quadros de controlo de caraterísticas e símbolos de acabamento de superfície, exportada como PDF |
| Ficheiros | Os seus próprios ficheiros de peça e montagem; STL, 3MF, STEP facetado, DXF e PDF à saída |

Tudo corre no navegador, no seu computador. **Nada é carregado para um servidor.** Veja [Ficheiros: abrir, guardar e exportar](topic:files) para saber para onde vão os ficheiros.

## O que precisa

- Um Chrome, Edge, Firefox ou Safari atual com **WebGL** (gráficos 3D) e **WebAssembly** ativados. Ambos estão ativados por predefinição. A geometria sólida é construída por um kernel de malha WebAssembly que é carregado com a aplicação: veja [O kernel de malha](topic:solid-kernels).
- Um rato é o mais fácil. Um trackpad funciona, e os ecrãs táteis funcionam para visualizar e para esboços simples: veja [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).
- Um ecrã com pelo menos 1280 píxeis de largura mostra a barra de ferramentas inteira numa só linha. As janelas mais estreitas deslocam a barra de ferramentas para o lado; num telemóvel os painéis abrem-se como folhas a partir de uma barra no fundo.

Mais sobre navegadores: [Navegadores e computadores](common:browsers).

:::note
O PartCraft corre no navegador, e no computador dentro do CadCraft Studio. Guardar na nuvem ainda não está disponível: abre as peças a partir do seu computador e guarda-as de volta nele como ficheiros.
:::

## Abrir o PartCraft

1. Abra o PartCraft.
2. Aguarde enquanto o ecrã diz «A carregar o kernel de sólidos…». Isto demora um momento na primeira vez.
3. Vê uma vista 3D vazia com três planos base, o histórico à esquerda («Peça1», depois Plano frontal, Plano superior, Plano direito) e uma caixa na vista com o título «Começar uma peça».
4. O ícone perto da extremidade direita da barra de estado diz «Kernel de malha»: nesta versão o PartCraft constrói todas as peças com o kernel de malha, pelo que as faces redondas são facetas planas. Pode começar a modelar de imediato.

Se a vista disser que o navegador não consegue mostrar 3D, ou que o kernel não carregou, veja [Resolução de problemas](topic:troubleshooting#the-app-does-not-start).

## A sua primeira peça: uma placa com um furo

Vai fazer uma placa de 60 × 40 mm, com 10 mm de espessura, com um furo de 6 mm de lado a lado. As unidades são milímetros.

### Esboçar o contorno

1. Clique em **Plano frontal** no histórico à esquerda. O plano fica realçado na vista.
2. Escolha {{ui:Esboço}} na barra de ferramentas, ou prima {{key:S}}. A vista roda para olhar diretamente para o plano, e a ferramenta Linha fica ativa.
3. Prima {{key:R}} para a ferramenta Retângulo.
4. Mova o ponteiro para a origem (o pequeno círculo vermelho com uma cruz). Um pequeno quadrado mostra que faz snap. Clique.
5. Mova para cima e para a direita e clique de novo. Tem um retângulo. As suas linhas são azuis: azul significa que ainda se podem mover.

### Dar-lhe tamanhos

1. Prima {{key:D}} para a ferramenta Cota.
2. Clique na linha de cima e depois um pouco acima dela. Abre-se uma caixa de número com o comprimento atual.
3. Escreva `60` e prima {{key:Enter}}. O retângulo passa a ter 60 mm de largura.
4. Clique na linha da esquerda e depois um pouco à esquerda dela. Escreva `40` e prima {{key:Enter}}.

O ícone no canto superior esquerdo da vista diz agora **Totalmente definido** e as linhas passam a tinta (preto no tema Papel, claro no tema Modelo). Cada ponto e cada tamanho está fixo.

:::tip
Se começou o retângulo longe da origem, o ícone continua a dizer «Subdefinido · 2 graus de liberdade». Prima {{key:S}} para Selecionar, clique num canto, {{key:Shift}}+clique na origem e depois escolha {{ui:• Coincidente}} no painel da direita.
:::

### Extrudi-la

1. Escolha {{ui:Sair}} na barra de ferramentas, ou prima {{key:Esc}} até o esboço fechar (normalmente duas vezes).
2. Escolha {{ui:Extrudir}}. Aparece um sólido de 10 mm. «Extrusão1» é acrescentada ao histórico, com «Esboço1» recuado por baixo.
3. O painel da direita mostra as definições da extrusão. Para mudar a espessura, escreva um número novo em **Profundidade (mm)** e prima {{key:Enter}} ou {{key:Tab}}. A peça reconstrói-se de imediato.

### Acrescentar o furo

1. Clique na face plana grande à frente da placa (o topo da extrusão). A face inteira fica realçada e o painel da direita diz **Face**.
2. Escolha {{ui:Esboço nesta face}} no painel da direita.
3. Prima {{key:P}} para a ferramenta Ponto e clique perto do meio da face.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Furo}}. Um furo de 6 mm atravessa a placa. Mude o **Diâmetro (mm)** no painel da direita se quiser.

A caixa **Peça** em baixo à esquerda mostra agora um volume, uma área de superfície, o tamanho (60 × 40 × 10 mm) e «Furos passantes: 1».

### Guardá-la

1. Prima {{key:Mod+S}} ou escolha {{ui:Guardar}}.
2. O navegador transfere `Peça1.partcraft.json` para a sua pasta de transferências. O ficheiro contém o histórico inteiro: abra-o de novo com {{ui:Abrir}} para continuar a editar.

Para mudar primeiro o nome da peça, clique num espaço vazio da vista para que nada fique selecionado e escreva um **Nome** novo no painel da direita.

## Para onde ir a seguir

- [Desenhar o seu primeiro esboço](topic:sketch-basics) e [Definir totalmente um esboço](topic:relations-dimensions) explicam o esboçador como deve ser.
- [Alterar uma peça através do histórico](topic:edit-history) mostra como editar o que construiu.
- [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell) e [Fazer um desenho](topic:drawing-pdf) terminam a peça. [O que ainda não está implementado](topic:not-built-yet) lista o que esta versão não faz, como varrimentos e loft.
- [Se vem de outro modelador paramétrico](topic:coming-from) lista os hábitos que aqui funcionam de outra maneira.
- [Teclas e rato](topic:keyboard) é a lista completa de atalhos.
- [Utilizar esta ajuda](common:help).
