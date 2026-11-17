---
title: Começar com o PartCraft
summary: O que o PartCraft faz hoje, o que seu navegador precisa e uma primeira peça em dez minutos, do esboço ao arquivo salvo.
keywords: começar, primeira execução, início rápido, introdução, tutorial, primeira peça, placa, paramétrico, modelador de peças
from: 7d43283f
---

O PartCraft é o aplicativo de peças paramétricas e montagens da família CadCraft. Você desenha um esboço 2D, o prende com relações e cotas, transforma-o em um sólido com recursos como extrudar, revolucionar e furo, e altera qualquer número depois: a peça é reconstruída a partir do seu histórico. As peças então vão para montagens, onde as juntas as posicionam e permitem verificar o movimento.

O que esta versão faz:

| Função | O que você obtém |
|---|---|
| Esboços | Linhas, retângulos, círculos, arcos, pontos e linhas de centro, com relações e cotas, e um estado ao vivo: subdefinido, totalmente definido ou superdefinido |
| Recursos sólidos | Extrudar, cortar, revolucionar, corte por revolução, furos simples e com rebaixo, matrizes lineares e circulares, espelhar, arredondamentos e chanfros em arestas retas entre faces planas, e cascas e ângulos de saída em faces planas. Varreduras, lofts e os outros recursos que precisam de um kernel exato ainda não estão implementados nesta versão: veja [O que ainda não está implementado](topic:not-built-yet) |
| Histórico | Edite os números de qualquer recurso, suprima, reverta, reordene e exclua, com desfazer |
| Montagens | Peças unidas por juntas rígidas, de revolução e deslizantes, uma verificação de interferência e uma verificação de movimento |
| Desenhos | Uma folha A3 com três vistas, uma isométrica, um corte, uma vista de detalhe, dimensões gerais, referências, quadros de tolerância geométrica e símbolos de acabamento superficial, exportados como PDF |
| Arquivos | Seus próprios arquivos de peça e montagem; saída em STL, 3MF, STEP exato, DXF e PDF |

Tudo roda no seu navegador, no seu computador. **Nada é enviado.** Veja [Arquivos: abrir, salvar e exportar](topic:files) para saber para onde os arquivos vão.

## O que você precisa

- Um Chrome, Edge, Firefox ou Safari atual com **WebGL** (gráficos 3D) e **WebAssembly** ativados. Ambos já vêm ativados por padrão. A geometria sólida é construída por um kernel de malha em WebAssembly que é carregado junto com o aplicativo: veja [O kernel de malha](topic:solid-kernels).
- Um mouse é o mais fácil. Um trackpad funciona, e telas sensíveis ao toque funcionam para visualizar e fazer esboços simples: veja [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).
- Uma tela com pelo menos 1280 pixels de largura mostra a barra de ferramentas inteira em uma linha. Janelas mais estreitas rolam a barra de ferramentas para os lados; em um celular, os painéis se abrem como folhas a partir de uma barra na parte inferior.

Mais sobre navegadores: [Navegadores e computadores](common:browsers).

:::note
O PartCraft roda no navegador e, no desktop, dentro do CadCraft Studio. O salvamento na nuvem ainda não está disponível: você abre as peças do seu computador e as salva de volta nele como arquivos.
:::

## Abra o PartCraft

1. Abra o PartCraft.
2. Aguarde enquanto a tela mostra "Carregando o kernel de sólidos…". Isso leva um momento na primeira vez.
3. Você vê uma vista 3D vazia com três planos de base, o histórico à esquerda ("Part1", depois Plano frontal, Plano superior, Plano direito) e uma caixa na vista com o título "Iniciar uma peça".
4. O chip perto da extremidade direita da barra de status diz "Kernel de malha": o PartCraft constrói cada peça com o kernel de malha nesta versão, então as superfícies redondas são facetas planas. Você pode começar a modelar imediatamente.

Se a vista disser que o navegador não consegue mostrar 3D, ou que o kernel não carregou, veja [Solução de problemas](topic:troubleshooting#the-app-does-not-start).

## Sua primeira peça: uma placa com um furo

Você fará uma placa de 60 × 40 mm, com 10 mm de espessura, com um furo de 6 mm atravessando-a. As unidades são milímetros.

### Desenhe o contorno

1. Clique em **Plano frontal** no histórico à esquerda. O plano fica destacado na vista.
2. Escolha {{ui:Esboço}} na barra de ferramentas, ou pressione {{key:S}}. A vista se volta para olhar diretamente para o plano, e a ferramenta Linha fica ativa.
3. Pressione {{key:R}} para a ferramenta Retângulo.
4. Mova o ponteiro sobre a origem (o pequeno círculo vermelho com uma cruz). Um pequeno quadrado mostra que ele faz snap. Clique.
5. Mova para cima e para a direita e clique de novo. Você tem um retângulo. Suas linhas são azuis: azul significa que elas ainda podem se mover.

### Dê medidas

1. Pressione {{key:D}} para a ferramenta Cota.
2. Clique na linha superior e depois clique um pouco acima dela. Uma caixa numérica abre com o comprimento atual.
3. Digite `60` e pressione {{key:Enter}}. O retângulo muda para 60 mm de largura.
4. Clique na linha da esquerda e depois clique um pouco à esquerda dela. Digite `40` e pressione {{key:Enter}}.

O chip no canto superior esquerdo da vista agora diz **Totalmente definido** e as linhas viram tinta (preta no tema Papel, clara no tema Modelo). Cada ponto e medida está fixo.

:::tip
Se você começou o retângulo longe da origem, o chip ainda diz "Subdefinido · 2 graus de liberdade". Pressione {{key:S}} para Selecionar, clique em um canto, {{key:Shift}}+clique na origem e depois escolha {{ui:• Coincidente}} no painel direito.
:::

### Extrude

1. Escolha {{ui:Sair}} na barra de ferramentas, ou pressione {{key:Esc}} até o esboço fechar (geralmente duas vezes).
2. Escolha {{ui:Extrudar}}. Um sólido de 10 mm aparece. "Extrude1" é adicionado ao histórico, com "Sketch1" recuado abaixo dele.
3. O painel direito mostra as configurações da extrusão. Para alterar a espessura, digite um novo número em **Profundidade (mm)** e pressione {{key:Enter}} ou {{key:Tab}}. A peça é reconstruída imediatamente.

### Adicione o furo

1. Clique na grande face plana na frente da placa (a extremidade da extrusão). A face inteira fica destacada e o painel direito diz **Face**.
2. Escolha {{ui:Esboço nesta face}} no painel direito.
3. Pressione {{key:P}} para a ferramenta Ponto e clique perto do meio da face.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Furo}}. Um furo de 6 mm atravessa a placa. Altere **Diâmetro (mm)** no painel direito se quiser.

A caixa **Peça** no canto inferior esquerdo agora mostra um volume, uma área de superfície, o tamanho (60 × 40 × 10 mm) e "Furos passantes: 1".

### Salve

1. Pressione {{key:Mod+S}} ou escolha {{ui:Salvar}}.
2. Seu navegador baixa `Part1.partcraft.json` para a pasta de downloads. O arquivo contém o histórico inteiro: abra-o de novo com {{ui:Abrir}} para continuar editando.

Para renomear a peça primeiro, clique em um espaço vazio na vista para que nada fique selecionado e digite um novo **Nome** no painel direito.

## Para onde ir depois

- [Desenhe seu primeiro esboço](topic:sketch-basics) e [Defina totalmente um esboço](topic:relations-dimensions) explicam o editor de esboços em detalhe.
- [Altere uma peça pelo seu histórico](topic:edit-history) mostra como editar o que você construiu.
- [Arredonde, chanfre e esvazie](topic:fillet-chamfer-shell) e [Faça um desenho](topic:drawing-pdf) finalizam a peça. [O que ainda não está implementado](topic:not-built-yet) lista o que esta versão não faz, como varreduras e lofts.
- [Vindo de outro modelador paramétrico](topic:coming-from) lista os hábitos que funcionam de forma diferente aqui.
- [Teclas e mouse](topic:keyboard) é a lista completa de atalhos.
- [Usando esta ajuda](common:help).
