---
title: Primeiros passos com o PartCraft
summary: O que o PartCraft faz hoje, o que seu navegador precisa e uma primeira peça em dez minutos, do esboço ao arquivo salvo.
keywords: início, primeiro uso, início rápido, introdução, tutorial, primeira peça, placa, paramétrico, modelador de peças
from: 5f0a668d
---

O PartCraft é o aplicativo de peças e montagens paramétricas da família CadCraft. Você desenha um esboço 2D, fixa o esboço com relações e cotas, transforma o esboço em sólido com recursos como extrusão, revolução e furo, e depois pode mudar qualquer número: a peça é reconstruída a partir do histórico. As peças vão para montagens, onde as juntas as posicionam e permitem verificar o movimento.

O que esta versão faz:

| Tarefa | O que você obtém |
|---|---|
| Esboços | Linhas, retângulos, círculos, arcos, pontos e linhas de centro, com relações e cotas, e um estado ao vivo: subdefinido, totalmente definido ou sobredefinido |
| Recursos sólidos | Extrusão, corte, revolução, corte por revolução, furos simples e escareados, matrizes lineares e circulares, espelhamento, arredondamentos e chanfros em arestas retas entre faces planas, e cascas e ângulos de saída em faces planas. Varreduras, lofts e os demais recursos que precisam de um kernel exato ainda não estão implementados nesta versão: veja [O que ainda não está implementado](topic:not-built-yet) |
| Histórico | Editar os números de qualquer recurso, suprimir, reverter, reordenar e excluir, com desfazer |
| Montagens | Peças unidas por juntas rígidas, de revolução e deslizantes, uma verificação de colisão e uma verificação de movimento |
| Desenhos | Uma folha A3 com três vistas, uma isométrica, um corte, uma vista de detalhe, medidas gerais, referências, quadros de controle de características e símbolos de acabamento de superfície, exportada em PDF |
| Arquivos | Arquivos próprios de peça e de montagem; saída em STL, 3MF, STEP facetado, DXF e PDF |

Tudo roda no seu navegador, no seu computador. **Nada é enviado.** Veja [Arquivos: abrir, salvar e exportar](topic:files) para saber para onde vão os arquivos.

## O que você precisa

- Um Chrome, Edge, Firefox ou Safari atual, com **WebGL** (gráficos 3D) e **WebAssembly** ativados. Os dois vêm ativados por padrão. A geometria dos sólidos é construída por um kernel de malha em WebAssembly que carrega junto com o aplicativo: veja [O kernel de malha](topic:solid-kernels).
- Um mouse é o mais fácil. Um trackpad funciona, e telas sensíveis ao toque servem para visualizar e fazer esboços simples: veja [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).
- Uma tela com pelo menos 1280 pixels de largura mostra a barra de ferramentas inteira em uma linha. Janelas mais estreitas rolam a barra de ferramentas para o lado; no celular, os painéis abrem como folhas a partir de uma barra na parte de baixo.

Mais sobre navegadores: [Navegadores e computadores](common:browsers).

:::note
O PartCraft roda no navegador e, no desktop, dentro do CadCraft Studio. O salvamento na nuvem ainda não está disponível: você abre as peças do seu computador e as salva de volta nele como arquivos.
:::

## Abra o PartCraft

1. Abra o PartCraft.
2. Aguarde enquanto a tela mostra "Carregando o kernel de sólidos…". Na primeira vez, isso leva um instante.
3. Você vê uma vista 3D vazia com três planos base, o histórico à esquerda ("Peça1", depois Plano frontal, Plano superior, Plano direito) e uma caixa na vista com o título "Comece uma peça".
4. O indicador perto da extremidade direita da barra de status diz "Kernel de malha": nesta versão, o PartCraft constrói toda peça com o kernel de malha, então as faces redondas são facetas planas. Você já pode começar a modelar.

Se a vista disser que o navegador não consegue mostrar 3D, ou que o kernel não carregou, veja [Solução de problemas](topic:troubleshooting#the-app-does-not-start).

## Sua primeira peça: uma placa com um furo

Você vai fazer uma placa de 60 × 40 mm, com 10 mm de espessura, com um furo de 6 mm passando por ela. As unidades são milímetros.

### Esboce o contorno

1. Clique em **Plano frontal** no histórico à esquerda. O plano fica destacado na vista.
2. Escolha {{ui:Esboço}} na barra de ferramentas, ou pressione {{key:S}}. A vista gira para olhar de frente para o plano, e a ferramenta Linha fica ativa.
3. Pressione {{key:R}} para a ferramenta Retângulo.
4. Leve o ponteiro até a origem (o pequeno círculo vermelho com uma cruz). Um quadradinho mostra que há snap. Clique.
5. Mova para cima e para a direita e clique de novo. Você tem um retângulo. Suas linhas são azuis: azul significa que elas ainda podem se mover.

### Dê as medidas

1. Pressione {{key:D}} para a ferramenta Cota.
2. Clique na linha de cima e depois clique um pouco acima dela. Uma caixa de número abre com o comprimento atual.
3. Digite `60` e pressione {{key:Enter}}. O retângulo passa a ter 60 mm de largura.
4. Clique na linha da esquerda e depois clique um pouco à esquerda dela. Digite `40` e pressione {{key:Enter}}.

O indicador no canto superior esquerdo da vista agora diz **Totalmente definido** e as linhas ficam na cor da tinta (preta no tema Papel, clara no tema Modelo). Todo ponto e toda medida estão fixos.

:::tip
Se você começou o retângulo longe da origem, o indicador continua dizendo "Subdefinido · 2 graus de liberdade". Pressione {{key:S}} para Selecionar, clique em um canto, clique na origem com {{key:Shift}} e escolha {{ui:Coincidente}} no painel direito.
:::

### Extrusão da placa

1. Escolha {{ui:Sair}} na barra de ferramentas, ou pressione {{key:Esc}} até o esboço fechar (normalmente duas vezes).
2. Escolha {{ui:Extrudar}}. Um sólido de 10 mm aparece. "Extrusão1" é adicionada ao histórico, com "Esboço1" recuado embaixo dela.
3. O painel direito mostra os ajustes da extrusão. Para mudar a espessura, digite um número novo em **Profundidade (mm)** e pressione {{key:Enter}} ou {{key:Tab}}. A peça é reconstruída na hora.

### Adicione o furo

1. Clique na face plana grande na frente da placa (a extremidade da extrusão). A face inteira fica destacada e o painel direito mostra **Face**.
2. Escolha {{ui:Esboço nesta face}} no painel direito.
3. Pressione {{key:P}} para a ferramenta Ponto e clique perto do meio da face.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Furo}}. Um furo de 6 mm atravessa a placa. Mude **Diâmetro (mm)** no painel direito se quiser.

A caixa **Peça** no canto inferior esquerdo agora mostra um volume, uma área de superfície, o tamanho (60 × 40 × 10 mm) e "Furos passantes: 1".

### Salve

1. Pressione {{key:Mod+S}} ou escolha {{ui:Salvar}}.
2. Seu navegador baixa `Peça1.partcraft.json` para a pasta de downloads. O arquivo guarda o histórico inteiro: abra-o de novo com {{ui:Abrir}} para continuar editando.

Para renomear a peça antes, clique em um espaço vazio da vista para que nada fique selecionado e digite um novo **Nome** no painel direito.

## Para onde ir depois

- [Desenhe seu primeiro esboço](topic:sketch-basics) e [Defina totalmente um esboço](topic:relations-dimensions) explicam o esboço direito.
- [Altere uma peça pelo histórico](topic:edit-history) mostra como editar o que você construiu.
- [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell) e [Faça um desenho](topic:drawing-pdf) terminam a peça. [O que ainda não está implementado](topic:not-built-yet) lista o que esta versão não faz, como varreduras e lofts.
- [Vindo de outro modelador paramétrico](topic:coming-from) lista os hábitos que funcionam de outro jeito aqui.
- [Teclas e mouse](topic:keyboard) é a lista completa de atalhos.
- [Como usar esta ajuda](common:help).
