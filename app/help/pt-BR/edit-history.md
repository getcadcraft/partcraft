---
title: Alterar uma peça pelo seu histórico
summary: Edite recursos e esboços depois do fato, suprima, reverta, insira recursos antes, reordene, renomeie e exclua, e desfaça qualquer uma dessas ações.
keywords: histórico, árvore de recursos, árvore de projeto, editar recurso, editar esboço, suprimir, reativar, reversão, reverter, avançar, reordenar, mover recurso, excluir, renomear, desfazer, refazer, reconstruir, regenerar, pai filho, peça grande, muitos recursos, reconstrução lenta, 750 recursos
from: 6f75aef4
---

Uma peça do PartCraft é o seu histórico: a lista de planos, esboços e recursos à esquerda. O PartCraft reconstrói o sólido a partir do topo dessa lista sempre que algo muda. Alterar um número no início da lista altera tudo o que foi construído sobre ele.

## Editar um recurso

1. Clique no recurso no histórico (ou no esboço recuado abaixo dele).
2. Altere as configurações no painel direito. Cada alteração reconstrói imediatamente.

Não há OK nem Cancelar: cada alteração é aplicada. Se não gostar, pressione {{key:Mod+Z}}.

## Alterar quais arestas ou faces um arredondamento, chanfro ou casca usa

Clique duas vezes no recurso no histórico, ou selecione-o e escolha {{ui:Selecionar arestas}} (ou {{ui:Selecionar faces}}). Clique em arestas ou faces para adicioná-las ou removê-las e, depois, {{ui:Concluir}} ou {{key:Esc}}. Veja [Arredondar, chanfrar e criar casca](topic:fillet-chamfer-shell).

## Editar um esboço

1. Clique duas vezes no esboço no histórico, ou selecione-o e escolha {{ui:Editar esboço}} no painel direito (ou {{ui:Esboço}} na barra de ferramentas).
2. A peça volta ao estado em que estava quando o esboço foi feito: os recursos posteriores ficam ocultos enquanto você edita.
3. Altere a geometria, as relações ou as cotas.
4. Feche o esboço. A peça inteira é reconstruída com a alteração.

Para alterar apenas uma medida, não é preciso abrir o esboço. Selecione o recurso ou o esboço e altere o número em **Cotas do esboço** (ou **Cotas de controle**) no painel direito. Veja [Alterar medidas sem abrir o esboço](topic:change-sizes).

## Quando um recurso falha

Se uma alteração torna um recurso impossível, o PartCraft constrói todo o resto e marca o problema:

- o recurso mostra **⚠ erro** no histórico, e a mensagem aparece no topo do painel direito dele (passe o mouse sobre a linha para lê-la também);
- os recursos que dependem dele mostram **⚠ não construído**, com "Precisa de Extrude2, que está falhando.";
- o indicador na barra de status diz "1 recurso falhando".

Corrija a causa (ou desfaça), e a peça volta a ser construída. Mensagens comuns e o que fazer estão em [Solução de problemas](topic:troubleshooting).

## Suprimir um recurso

Suprimir desliga um recurso sem excluí-lo: útil para testar uma peça sem um furo ou um padrão.

1. Selecione o recurso.
2. Escolha {{ui:Suprimir}}. A linha dele mostra **desligado**. Os recursos que dependem dele também não são construídos.
3. Escolha {{ui:Reativar}} para ligá-lo novamente.

## Reverter

Reverter constrói a peça apenas até um ponto, para que você a veja como estava ou adicione um recurso antes no histórico.

1. Selecione um recurso e escolha {{ui:Reverter até aqui}}. Esse recurso e todos os abaixo dele ficam em cinza e não são construídos. Uma linha **Barra de reversão · avançar** marca o ponto.
2. Qualquer recurso que você adicionar agora entra **na barra**, antes dos recursos em cinza.
3. Clique em **Barra de reversão · avançar** para construir tudo novamente.

A posição de reversão é salva no arquivo.

## Reordenar recursos

1. Selecione o recurso.
2. Escolha {{ui:Mover para cima}} ou {{ui:Mover para baixo}}, ou, com a linha do histórico em foco, pressione {{key:Alt+Up}} ou {{key:Alt+Down}}.

Um recurso nunca pode subir acima de algo que ele usa. O botão fica em cinza, e passar o mouse sobre ele (ou tentar a tecla) mostra o motivo, por exemplo "Extrude2 usa Sketch2, então Sketch2 precisa vir primeiro."

O que um recurso usa: seu esboço; a face sobre a qual o esboço está; os recursos que um padrão ou espelho copia; uma linha do esboço ou uma revolução usada como direção ou eixo.

## Excluir um recurso

1. Selecione o recurso e escolha {{ui:Excluir}} no painel direito ou na barra de ferramentas, ou pressione {{key:Delete}}.
2. Se outros recursos o usarem, o PartCraft pergunta: "Extrude3, Hole1 usam Extrude1 e também serão excluídos." Escolha {{ui:Excluir tudo}} ou {{ui:Cancelar}}.

Excluir um recurso não exclui o esboço dele: o esboço reaparece na vista como um esboço não usado, pronto para outro recurso. Exclua o esboço separadamente se não precisar dele.

## Renomear

Selecione o recurso e digite um novo **Nome** na parte inferior do painel direito (até 60 caracteres). O nome da própria peça aparece no painel direito quando nada está selecionado.

## Peças com centenas de recursos

Uma peça com centenas de recursos é testada com 750. O PartCraft mantém o sólido que tinha no meio do histórico, então uma alteração no fim do histórico reconstrói apenas os recursos posteriores a ela; uma alteração perto do topo reconstrói tudo o que foi construído sobre ela, o que leva mais tempo. Desfazer e refazer reconstroem apenas a partir do ponto em que os dois estados diferem. Para trabalhar mais rápido em uma peça grande, reverta até o ponto em que você está trabalhando (veja Reverter acima) ou suprima o que não precisa por enquanto. Vários cortes e saliências que não se tocam são aplicados juntos, então uma peça feita de muitos furos e saliências separados é construída mais rápido do que o número de recursos sugere.

Uma peça grande é reconstruída em segundo plano: o indicador na parte inferior diz **Reconstruindo…** com o progresso, e a vista, os painéis e os menus continuam funcionando enquanto ela é reconstruída. A peça na tela é a última que foi construída até que a nova esteja pronta. Se você alterar algo novamente durante a reconstrução, o PartCraft constrói a versão mais recente e descarta a que estava em andamento. Uma peça pequena ainda é reconstruída imediatamente.

## Desfazer e refazer

- {{key:Mod+Z}} ou {{ui:Desfazer}} desfaz a última alteração: um recurso, uma configuração, uma edição de esboço, um arrasto. A barra de status informa qual foi, por exemplo "Desfeito: alterar cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ou {{ui:Refazer}} refaz a alteração.
- O PartCraft mantém os últimos 200 passos (uma peça tão grande que 200 cópias usariam muita memória mantém menos, nunca menos que os 20 mais recentes). Alterações na folha de desenho (uma seção, um símbolo GD&T movido) estão na mesma lista. Abrir um arquivo ou iniciar uma nova peça limpa a lista.

:::mac
No Mac, use ⇧⌘Z para refazer. No Safari, ⌘Y pode abrir o histórico do navegador em vez disso.
:::
