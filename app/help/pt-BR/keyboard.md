---
title: Teclas e mouse
summary: Todo atalho de teclado e ação do mouse no PartCraft, agrupados por onde funcionam: em qualquer lugar, copiar e colar, na peça, na vista 3D, em um esboço, no histórico e em uma montagem.
keywords: teclado, atalhos, teclas de atalho, teclas, mouse, orbitar, girar, pan, zoom, roda, clique com o botão direito, desfazer, refazer, salvar, abrir, escape, excluir, alt seta, copiar, colar, recortar, duplicar, selecionar tudo, botão do meio
from: 3a59c3a3
---

As teclas não funcionam enquanto você digita em uma caixa de um painel, exceto {{key:Mod+S}} e {{key:Mod+O}}, que sempre funcionam. As teclas de letra funcionam sem modificador.

Notas gerais sobre teclas no navegador e em teclados sem teclas de função: [Teclas, mouses e trackpads](common:keys).

## Em qualquer lugar

| Tecla | Ação |
|---|---|
| {{key:Mod+S}} | Salvar a peça (em uma montagem: a montagem). Fecha antes um esboço aberto |
| {{key:Mod+O}} | Abrir um arquivo de peça ou montagem (pergunta antes se houver alterações não salvas) |
| {{key:Mod+Z}} | Desfazer |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |
| {{key:F1}} | Abrir ou fechar esta ajuda (também {{ui:Help}} na barra do aplicativo). {{key:Esc}} também fecha. Em muitos notebooks e teclados de Mac, mantenha Fn pressionada |
| {{key:Ctrl+Shift+F}} | Modo de tela: normal, tela cheia, tela cheia com as barras ocultas. Control também no Mac, não ⌘ |
| {{key:Esc}} | Sair da tela cheia (quando estiver em tela cheia) |
| {{key:Mod+,}} | Configurações, incluindo a guia PartCraft (veja [Configurações do PartCraft](topic:settings)) |

Na caixa de número de um painel, {{key:Mod+Z}} é o desfazer de texto do próprio navegador. Na caixa de número sobre uma cota de esboço, ele desfaz no PartCraft.

## Copiar, colar e duplicar

Elas atuam sobre o que você está editando: a geometria selecionada em um esboço aberto, o recurso selecionado no histórico ou a peça selecionada em uma montagem. Detalhes em [Copiar, colar e duplicar](topic:copy-paste).

| Tecla | Ação |
|---|---|
| {{key:Mod+C}} | Copiar a seleção |
| {{key:Mod+X}} | Recortar: copiar e depois excluir |
| {{key:Mod+V}} | Colar. Em um esboço, a cópia segue o ponteiro: clique onde ela deve ir |
| {{key:Mod+Shift+V}} | Colar no mesmo local: mesmas coordenadas (em uma montagem, o mesmo lugar) |
| {{key:Mod+D}} | Duplicar: copiar e colar em um único passo, sem alterar a área de transferência |
| {{key:Mod+A}} | Selecionar tudo (em um esboço) |
| {{key:Esc}} | Limpar a seleção (e cancelar uma colagem que segue o ponteiro) |

Na caixa de número, essas teclas copiam e colam texto como de costume. O texto selecionado em um painel é copiado pelo navegador.

## Na peça (sem esboço aberto)

| Tecla | Ação |
|---|---|
| {{key:S}} | Esboçar no plano ou na face plana selecionada; sem nada escolhido, escolha onde clicando |
| {{key:F}} | Ajustar a peça à vista |
| {{key:M}} | Medir, em todos os espaços de trabalho e em uma montagem; {{key:Esc}} limpa as escolhas, {{key:Esc}} de novo fecha (veja [Medir distâncias, ângulos e massa](topic:measure)) |
| {{key:X}} | Vista de corte ligada ou desligada, em todos os espaços de trabalho e em uma montagem; {{key:Esc}} fecha (veja [Ver o interior com uma vista de corte](topic:section-view)) |
| {{key:Delete}} | Excluir o recurso selecionado (pergunta se outros o usam) |
| {{key:0}} … {{key:9}}, {{key:.}} | Com um recurso selecionado: digite o seu número principal (a profundidade de uma extrusão, o diâmetro de um furo, a quantidade de uma matriz, o raio de um arredondamento …), depois {{key:Enter}}. {{key:Esc}} mantém o antigo |
| {{key:Backspace}} | Excluir o recurso selecionado, quando houver um selecionado |
| {{key:Esc}} | Parar de escolher um plano de esboço, ou limpar a seleção (incluindo arestas ou faces escolhidas com {{key:Shift}}) |

## Na vista 3D

Clique primeiro na vista para que ela tenha o foco do teclado.

| Tecla | Ação |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Girar a vista 15 graus |
| {{key:Shift+Left}} e as outras setas | Pan |
| {{key:Plus}} ou {{key:=}} | Zoom de aproximação |
| {{key:Minus}} | Zoom de afastamento |

| Mouse | Ação |
|---|---|
| Arrastar com o botão esquerdo | Girar (orbitar) a vista |
| Arrastar com o botão direito ou do meio | Pan |
| {{key:Shift}}, {{key:Ctrl}} ou ⌘ mantida ao arrastar com o botão esquerdo | Pan |
| Rolar a roda | Zoom no ponteiro (afastando-se de você, aproxima) |
| Gesto de dois dedos no trackpad | Girar a vista; com {{key:Shift}}, pan. Pinça dá zoom. Definido por **Rolagem** em [Configurações do PartCraft](topic:settings) |

Com **Girar a vista: botão do meio** em [Configurações do PartCraft](topic:settings), o botão do meio gira a vista, {{key:Shift}} com o botão do meio ou o botão direito faz pan, e o botão esquerdo apenas escolhe.
| Clique | Escolher uma face (ela fica destacada inteira), uma aresta ou um plano |
| {{key:Shift}}+clique em uma aresta ou face | Juntar várias arestas ou faces |
| Clicar em espaço vazio | Limpar a escolha |

## Ao escolher arestas ou faces para um arredondamento, chanfro ou casca


| Tecla ou mouse | Ação |
|---|---|
| Clicar em uma aresta ou face | Adicionar, ou remover se ela já estiver na seleção |
| {{key:Esc}} ou {{key:Enter}} | Concluir a escolha (igual a {{ui:Done}}) |
| {{key:F}} | Ajustar |
| Teclas de seta, com a vista em foco | Girar; com {{key:Shift}}, pan |

## Na folha de desenho

| Tecla | Ação |
|---|---|
| {{key:F}} | Ajustar a folha |
| {{key:Plus}} / {{key:Minus}} | Zoom (com a folha em foco) |
| {{key:Shift+Left}} e as outras setas | Pan (com a folha em foco) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Deslocar o símbolo GD&T selecionado 1 mm |
| {{key:Delete}} ou {{key:Backspace}} | Excluir o símbolo selecionado |
| {{key:Esc}} | Parar de posicionar um símbolo; senão desmarcar; senão voltar ao modelo |

| Mouse | Ação |
|---|---|
| Clicar em uma vista, com Datum, Moldura, Acabamento ou Detalhe escolhido | Posicioná-lo ali (encaixa na linha mais próxima) |
| Clicar em um símbolo | Selecioná-lo |
| Arrastar um símbolo | Movê-lo (a linha de chamada permanece no seu ponto) |
| Rolar a roda | Zoom no ponteiro |
| Arrastar com o botão direito ou do meio | Pan |

## Em um esboço

| Tecla | Ação |
|---|---|
| {{key:L}} | Linha |
| {{key:R}} | Retângulo |
| {{key:C}} | Círculo |
| {{key:A}} | Arco (centro, início, fim) |
| {{key:P}} | Ponto |
| {{key:N}} | Linha de centro |
| {{key:F}} | Concordar um canto |
| {{key:D}} | Cota |
| {{key:B}} | Spline (pontos de ajuste) |
| {{key:T}} | Aparar |
| {{key:E}} | Estender |
| {{key:O}} | Deslocar ({{key:B}} durante o deslocamento: dos dois lados) |
| {{key:M}} | Espelhar |
| {{key:S}} | Selecionar |
| {{key:Q}} | Alternar as curvas selecionadas para construção e de volta |
| {{key:Enter}} | Terminar uma cadeia de linhas ou uma spline |
| {{key:Delete}} ou {{key:Backspace}} | Excluir a seleção |
| {{key:Mod+A}} | Selecionar tudo no esboço |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiar, recortar, colar geometria (a colagem segue o ponteiro) |
| {{key:Mod+Shift+V}} | Colar nas mesmas coordenadas |
| {{key:Mod+D}} | Duplicar a seleção e posicioná-la com um clique |
| {{key:Esc}} | Voltar um passo: cancela a caixa de número ou uma colagem, termina a cadeia de linhas, volta a Selecionar, limpa a seleção e então fecha o esboço |

| Mouse | Ação |
|---|---|
| Clicar | Posicionar pontos com uma ferramenta de desenho; selecionar com Selecionar |
| {{key:Shift}}+clique | Adicionar à seleção ou tirar dela ({{key:Ctrl}}+clique no Windows e Linux, ⌘+clique em Mac, fazem o mesmo) |
| Arrastar em espaço vazio (Selecionar) | Janela: seleciona tudo que está totalmente dentro |
| Arrastar um ponto, uma linha ou a borda de um círculo (Selecionar) | Mover; as relações se mantêm |
| Arrastar o número de uma cota (Selecionar) | Mover o rótulo |
| Clicar duas vezes em uma cota | Alterar o valor dela |
| Clicar duas vezes ou clicar com o botão direito ao desenhar linhas | Terminar a cadeia |
| Arrastar com o botão direito ou do meio | Pan |
| Rolar a roda | Zoom no ponteiro |

### Na caixa de número

| Tecla | Ação |
|---|---|
| {{key:Enter}} | Aplicar o valor |
| {{key:Esc}} | Fechar sem alterar |

Clicar fora também aplica o valor.

## No histórico

| Tecla | Ação |
|---|---|
| {{key:Tab}} | Chegar à lista |
| {{key:Up}} / {{key:Down}} | Mover entre as linhas |
| {{key:Enter}} ou {{key:Space}} | Selecionar a linha |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Subir ou descer o recurso selecionado, quando o histórico permitir |
| {{key:F2}} | Alterar o número principal do recurso na sua linha; {{key:Enter}} o define, {{key:Esc}} mantém o antigo |

| Mouse | Ação |
|---|---|
| Clicar | Selecionar um plano ou recurso |
| Clicar duas vezes em um esboço | Abri-lo |
| Clicar duas vezes no número de um recurso | Alterá-lo na linha |

## Em uma montagem

| Tecla | Ação |
|---|---|
| {{key:J}} | Iniciar uma junta: depois clique em uma face plana em cada uma de duas peças |
| {{key:F}} | Ajustar |
| {{key:Esc}} | Cancelar a junta iniciada, ou limpar a seleção |
| {{key:Delete}} | Remover a peça ou junta selecionada |
| {{key:Backspace}} | Remover a peça ou junta selecionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Desfazer e refazer na lista própria da montagem |
| {{key:Mod+D}} | Duplicar a peça selecionada (a mesma peça, ao lado das outras) |
| {{key:Mod+C}}, depois {{key:Mod+V}} ou {{key:Mod+Shift+V}} | Copiar uma peça e colá-la ao lado das outras ou no mesmo local |

Mouse na vista: como na vista 3D acima. Clique em uma peça para selecioná-la. Clique duas vezes em uma peça na lista para editá-la.

## No espaço de trabalho Script

| Tecla | Ação |
|---|---|
| {{key:F5}} | Executar o script (no editor, no painel ou na vista) |
| {{key:Mod+Enter}} | Executar as linhas selecionadas, ou a linha onde está o cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Recuar / reduzir o recuo das linhas selecionadas. Para sair do editor pelo teclado, pressione {{key:Esc}} e depois {{key:Tab}} |
| {{key:Mod+/}} | Comentar as linhas selecionadas, ou descomentá-las |
| {{key:Mod+F}} / {{key:Mod+H}} | Localizar / localizar e substituir no script; {{key:Enter}} ou {{key:F3}} vai à próxima ocorrência, {{key:Shift+Enter}} ou {{key:Shift+F3}} à anterior, {{key:Esc}} fecha |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Recolher / expandir o bloco onde está o cursor (uma função, if, for, while … end) |
| {{key:Mod+Space}} | Listar sugestões para o nome que você está digitando (abre também após duas letras); {{key:Up}} / {{key:Down}} escolhem, {{key:Enter}} ou {{key:Tab}} aceita uma, {{key:Esc}} fecha |
| {{key:Enter}} na linha abaixo do console | Executar essa instrução; {{key:Up}} e {{key:Down}} trazem as anteriores |
| {{key:F}} | Ajustar a vista ao que os scripts mostram |

Veja [Escrever e executar scripts](topic:craftscript).

## Atalhos que o navegador pode usar

- {{key:Mod+Y}} no Safari pode abrir o histórico: use {{key:Mod+Shift+Z}} para refazer.
- {{key:Mod+D}} é a tecla de favoritos do navegador: o PartCraft a usa enquanto o aplicativo estiver em foco, e a deixa de lado enquanto você digita em uma caixa.
- {{key:F11}} e {{key:Mod+Plus}} / {{key:Mod+Minus}} são a tela cheia e o zoom de página do navegador, não do PartCraft. Use {{key:Ctrl+Shift+F}} para tela cheia e a roda para o modelo.
- Teclas de função em muitos notebooks e Macs precisam da tecla Fn: pressione Fn+{{key:F1}} para a ajuda, ou use o botão {{ui:Help}}.

Gestos de toque e trackpad: [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).

## Onde fica o Mover

{{ui:Move}} fica no menu {{ui:More}} do grupo Recursos, como {{ui:Move body}}, na caixa {{ui:Move}} onde você digita ΔX, ΔY e ΔZ, e como setas {{ui:Drag to move}} na peça.
