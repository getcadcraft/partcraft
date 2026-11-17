---
title: Teclas e rato
summary: Cada atalho de teclado e ação do rato no PartCraft, agrupados pelo sítio onde funcionam: em toda a parte, copiar e colar, na peça, na vista 3D, num esboço, no histórico e numa montagem.
keywords: teclado, atalhos, teclas de atalho, teclas, rato, orbitar, rodar, deslocar, zoom, roda, clique com o botão direito, anular, refazer, guardar, abrir, escape, eliminar, tecla Alt com setas, copiar, colar, cortar, duplicar, selecionar tudo, botão do meio
from: 3a59c3a3
---

As teclas não fazem nada enquanto escreve numa caixa de um painel, exceto {{key:Mod+S}} e {{key:Mod+O}}, que funcionam sempre. As teclas de letras funcionam sem modificador.

Notas gerais sobre teclas no navegador e em teclados sem teclas de função: [Teclas, ratos e trackpads](common:keys).

## Em toda a parte

| Tecla | Ação |
|---|---|
| {{key:Mod+S}} | Guardar a peça (numa montagem: a montagem). Fecha primeiro um esboço aberto |
| {{key:Mod+O}} | Abrir um ficheiro de peça ou de montagem (pergunta primeiro se houver alterações não guardadas) |
| {{key:Mod+Z}} | Anular |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |
| {{key:F1}} | Abrir ou fechar esta ajuda (também {{ui:Ajuda}} na barra da aplicação). {{key:Esc}} também a fecha. Em muitos portáteis e teclados Mac, mantenha Fn premido |
| {{key:Ctrl+Shift+F}} | Modo de ecrã: normal, ecrã inteiro, ecrã inteiro com as barras ocultas. Control também em Mac, não ⌘ |
| {{key:Esc}} | Sair do ecrã inteiro (quando em ecrã inteiro) |
| {{key:Mod+,}} | {{ui:Definições}}, incluindo o separador PartCraft (ver [Definições do PartCraft](topic:settings)) |

Numa caixa de número de um painel, {{key:Mod+Z}} é a anulação de texto do próprio navegador. Na caixa de número sobre uma cota de esboço, anula no PartCraft.

## Copiar, colar e duplicar

Atuam sobre o que está a trabalhar: a geometria selecionada num esboço aberto, a operação selecionada no histórico ou a peça selecionada numa montagem. Pormenores em [Copiar, colar e duplicar](topic:copy-paste).

| Tecla | Ação |
|---|---|
| {{key:Mod+C}} | Copiar a seleção |
| {{key:Mod+X}} | Cortar: copia e depois elimina |
| {{key:Mod+V}} | Colar. Num esboço, a cópia segue o cursor: clique onde deve ficar |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio: mesmas coordenadas (numa montagem, o mesmo sítio) |
| {{key:Mod+D}} | Duplicar: copiar e colar num só passo, sem alterar a área de transferência |
| {{key:Mod+A}} | Selecionar tudo (num esboço) |
| {{key:Esc}} | Limpar a seleção (e cancelar uma colagem que segue o cursor) |

Numa caixa de número, estas teclas copiam e colam texto como de costume. O texto selecionado num painel é copiado pelo navegador.

## Na peça (sem esboço aberto)

| Tecla | Ação |
|---|---|
| {{key:S}} | Criar um esboço no plano ou na face plana selecionados; sem nada escolhido, escolha onde clicando |
| {{key:F}} | Ajustar a peça à vista |
| {{key:M}} | Medir, em todos os espaços de trabalho e numa montagem; {{key:Esc}} limpa as escolhas, outro {{key:Esc}} fecha a ferramenta (ver [Medir distâncias, ângulos e massa](topic:measure)) |
| {{key:X}} | Ativar ou desativar a vista de corte, em todos os espaços de trabalho e numa montagem; {{key:Esc}} fecha-a (ver [Ver o interior com uma vista de corte](topic:section-view)) |
| {{key:Delete}} | Eliminar a operação selecionada (pergunta se outras a usam) |
| {{key:0}} … {{key:9}}, {{key:.}} | Com uma operação selecionada: escreva o número principal (a profundidade de uma extrusão, o diâmetro de um furo, a contagem de uma matriz, o raio de um boleado …), depois {{key:Enter}}. {{key:Esc}} mantém o anterior |
| {{key:Backspace}} | Eliminar a operação selecionada, quando houver uma selecionada |
| {{key:Esc}} | Deixar de escolher um plano de esboço, ou limpar a seleção (incluindo arestas ou faces escolhidas com {{key:Shift}}) |

## Na vista 3D

Clique primeiro na vista para ela ter o foco do teclado.

| Tecla | Ação |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Rodar a vista 15 graus |
| {{key:Shift+Left}} e as outras setas | Deslocar a vista (pan) |
| {{key:Plus}} ou {{key:=}} | Aproximar |
| {{key:Minus}} | Afastar |

| Rato | Ação |
|---|---|
| Arrastar com o botão esquerdo | Rodar (orbitar) a vista |
| Arrastar com o botão direito ou do meio | Deslocar a vista (pan) |
| Manter {{key:Shift}}, {{key:Ctrl}} ou ⌘ premido ao arrastar com o botão esquerdo | Deslocar a vista (pan) |
| Rodar a roda do rato | Zoom no cursor (afastando-se de si aproxima) |
| Deslizar com dois dedos no trackpad | Rodar a vista; com {{key:Shift}}, deslocar. Pinça dá zoom. Definido por **Deslocamento** em [Definições do PartCraft](topic:settings) |

Com **Rodar a vista: botão do meio** em [Definições do PartCraft](topic:settings), o botão do meio roda a vista, {{key:Shift}} com o botão do meio ou com o botão direito desloca, e o botão esquerdo só escolhe.
| Clicar | Escolher uma face (fica realçada por inteiro), uma aresta ou um plano |
| {{key:Shift}}+clique numa aresta ou face | Juntar várias arestas ou faces |
| Clicar em espaço vazio | Limpar a escolha |

## Ao escolher arestas ou faces para um boleado, chanfre ou casca


| Tecla ou rato | Ação |
|---|---|
| Clicar numa aresta ou face | Adicionar, ou retirar se já estiver escolhida |
| {{key:Esc}} ou {{key:Enter}} | Concluir a escolha (igual a {{ui:Concluir}}) |
| {{key:F}} | Ajustar |
| Setas, com a vista em foco | Rodar; com {{key:Shift}}, deslocar |

## Na folha de desenho

| Tecla | Ação |
|---|---|
| {{key:F}} | Ajustar a folha |
| {{key:Plus}} / {{key:Minus}} | Aproximar / afastar (com a folha em foco) |
| {{key:Shift+Left}} e as outras setas | Deslocar a vista (com a folha em foco) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Deslocar o símbolo GD&T selecionado 1 mm |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar o símbolo selecionado |
| {{key:Esc}} | Deixar de colocar um símbolo; senão, desselecionar; senão, voltar ao modelo |

| Rato | Ação |
|---|---|
| Clicar numa vista, com Datum, Moldura, Acabamento ou Pormenor escolhido | Colocar aí (ajusta-se à linha mais próxima) |
| Clicar num símbolo | Selecioná-lo |
| Arrastar um símbolo | Mover (a linha de chamada fica no ponto) |
| Rodar a roda do rato | Zoom no cursor |
| Arrastar com o botão direito ou do meio | Deslocar a vista (pan) |

## Num esboço

| Tecla | Ação |
|---|---|
| {{key:L}} | Linha |
| {{key:R}} | Retângulo |
| {{key:C}} | Círculo |
| {{key:A}} | Arco (centro, início, fim) |
| {{key:P}} | Ponto |
| {{key:N}} | Linha de eixo |
| {{key:F}} | Concordância de um canto |
| {{key:D}} | Cota |
| {{key:B}} | Spline (pontos de ajuste) |
| {{key:T}} | Aparar |
| {{key:E}} | Prolongar |
| {{key:O}} | Offset ({{key:B}} durante o offset: nos dois lados) |
| {{key:M}} | Espelhar |
| {{key:S}} | Selecionar |
| {{key:Q}} | Passar as curvas selecionadas a construção e vice-versa |
| {{key:Enter}} | Terminar uma cadeia de linhas ou um spline |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar a seleção |
| {{key:Mod+A}} | Selecionar tudo no esboço |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiar, cortar, colar geometria (a colagem segue o cursor) |
| {{key:Mod+Shift+V}} | Colar nas mesmas coordenadas |
| {{key:Mod+D}} | Duplicar a seleção e colocá-la com um clique |
| {{key:Esc}} | Recuar um passo: cancela a caixa de número ou uma colagem, termina a cadeia de linhas, volta a Selecionar, limpa a seleção e, por fim, fecha o esboço |

| Rato | Ação |
|---|---|
| Clicar | Colocar pontos com uma ferramenta de desenho; selecionar com Selecionar |
| {{key:Shift}}+clique | Acrescentar ou retirar da seleção ({{key:Ctrl}}+clique no Windows e no Linux, ⌘+clique num Mac, fazem o mesmo) |
| Arrastar em espaço vazio (Selecionar) | Janela: seleciona tudo o que fica totalmente dentro |
| Arrastar um ponto, uma linha ou a aresta de um círculo (Selecionar) | Mover; as relações mantêm-se |
| Arrastar o número de uma cota (Selecionar) | Mover a etiqueta |
| Duplo clique numa cota | Alterar o valor |
| Duplo clique ou clique com o botão direito ao desenhar linhas | Terminar a cadeia |
| Arrastar com o botão direito ou do meio | Deslocar a vista (pan) |
| Rodar a roda do rato | Zoom no cursor |

### Na caixa de número

| Tecla | Ação |
|---|---|
| {{key:Enter}} | Aplicar o valor |
| {{key:Esc}} | Fechar sem alterar |

Clicar fora também aplica o valor.

## Na lista do histórico

| Tecla | Ação |
|---|---|
| {{key:Tab}} | Chegar à lista |
| {{key:Up}} / {{key:Down}} | Mudar de linha |
| {{key:Enter}} ou {{key:Space}} | Selecionar a linha |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Subir ou descer a operação selecionada, onde o histórico o permitir |
| {{key:F2}} | Alterar, na própria linha, o número principal da operação; {{key:Enter}} aplica-o, {{key:Esc}} mantém o anterior |

| Rato | Ação |
|---|---|
| Clicar | Selecionar um plano ou uma operação |
| Duplo clique num esboço | Abri-lo |
| Duplo clique no número de uma operação | Alterá-lo na linha |

## Numa montagem

| Tecla | Ação |
|---|---|
| {{key:J}} | Iniciar uma junta: depois clique numa face plana de cada uma de duas peças |
| {{key:F}} | Ajustar |
| {{key:Esc}} | Cancelar a junta iniciada, ou limpar a seleção |
| {{key:Delete}} | Remover a peça ou a junta selecionada |
| {{key:Backspace}} | Remover a peça ou a junta selecionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Anular e refazer na lista própria da montagem |
| {{key:Mod+D}} | Duplicar a peça selecionada (a mesma peça, ao lado das outras) |
| {{key:Mod+C}}, depois {{key:Mod+V}} ou {{key:Mod+Shift+V}} | Copiar uma peça, colá-la ao lado das outras ou no mesmo sítio |

Rato na vista: como na vista 3D acima. Clique numa peça para a selecionar. Faça duplo clique numa peça na lista para a editar.

## No espaço de trabalho Script

| Tecla | Ação |
|---|---|
| {{key:F5}} | Executar o script (no editor, no painel ou na vista) |
| {{key:Mod+Enter}} | Executar as linhas selecionadas, ou a linha onde está o cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Indentar / desindentar as linhas selecionadas. Para sair do editor com o teclado, prima {{key:Esc}} e depois {{key:Tab}} |
| {{key:Mod+/}} | Comentar as linhas selecionadas, ou descomentá-las |
| {{key:Mod+F}} / {{key:Mod+H}} | Procurar / procurar e substituir no script; {{key:Enter}} ou {{key:F3}} ocorrência seguinte, {{key:Shift+Enter}} ou {{key:Shift+F3}} anterior, {{key:Esc}} fecha |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Recolher / expandir o bloco onde está o cursor (uma função, if, for, while … end) |
| {{key:Mod+Space}} | Listar sugestões para o nome que está a escrever (abre também após duas letras); {{key:Up}} / {{key:Down}} escolhem, {{key:Enter}} ou {{key:Tab}} aceita uma, {{key:Esc}} fecha |
| {{key:Enter}} na linha abaixo da consola | Executar essa instrução; {{key:Up}} e {{key:Down}} trazem de volta as anteriores |
| {{key:F}} | Ajustar a vista ao que os scripts mostram |

Ver [Escrever e executar scripts](topic:craftscript).

## Atalhos que o navegador pode usar

- {{key:Mod+Y}} no Safari pode abrir o histórico: use {{key:Mod+Shift+Z}} para refazer.
- {{key:Mod+D}} é a tecla de marcadores do navegador: o PartCraft usa-a enquanto a aplicação tem o foco, e deixa-a em paz enquanto escreve numa caixa.
- {{key:F11}} e {{key:Mod+Plus}} / {{key:Mod+Minus}} são o ecrã inteiro e o zoom de página do navegador, não do PartCraft. Use {{key:Ctrl+Shift+F}} para o ecrã inteiro e a roda do rato para o modelo.
- As teclas de função em muitos portáteis e Macs precisam da tecla Fn: prima Fn+{{key:F1}} para ajuda, ou use o botão {{ui:Ajuda}}.

Gestos de toque e trackpad: [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).

## Onde está Mover

O comando Mover está no menu {{ui:Mais}} do grupo Operações, como {{ui:Mover corpo}}, na caixa {{ui:Mover}} onde escreve ΔX, ΔY e ΔZ, e como setas {{ui:Arrastar para mover}} na peça.
