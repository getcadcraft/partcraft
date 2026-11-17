---
title: Alterar uma peça através do seu histórico
summary: Editar operações e esboços depois de criados, suprimir, reverter, inserir operações mais acima, reordenar, renomear e eliminar, e anular qualquer uma destas ações.
keywords: histórico, árvore de operações, árvore de desenho, editar operação, editar esboço, suprimir, reativar, reverter, avançar, reordenar, mover operação, eliminar, renomear, anular, refazer, reconstruir, regenerar, pai, filho, peça grande, muitas operações, reconstrução lenta, 750 operações
from: 6f75aef4
---

Uma peça no PartCraft é o seu histórico: a lista de planos, esboços e operações à esquerda. O PartCraft reconstrói o sólido a partir do topo dessa lista sempre que algo muda. Alterar um número no início da lista altera tudo o que foi construído sobre ele.

## Editar uma operação

1. Clique na operação no histórico (ou no esboço recuado por baixo dela).
2. Altere as suas definições no painel da direita. Cada alteração reconstrói a peça de imediato.

Não há OK nem Cancelar: cada alteração fica aplicada. Se não gostar, prima {{key:Mod+Z}}.

## Alterar as arestas ou faces que um boleado, chanfre ou casca utiliza

Faça duplo clique na operação no histórico, ou selecione-a e escolha {{ui:Escolher arestas}} (ou {{ui:Escolher faces}}). Clique em arestas ou faces para as acrescentar ou retirar, e depois {{ui:Concluir}} ou {{key:Esc}}. Veja [Boleado, chanfre e casca](topic:fillet-chamfer-shell).

## Editar um esboço

1. Faça duplo clique no esboço no histórico, ou selecione-o e escolha {{ui:Editar esboço}} no painel da direita (ou {{ui:Esboço}} na barra de ferramentas).
2. A peça volta ao estado em que estava quando o esboço foi feito: as operações seguintes ficam ocultas enquanto edita.
3. Altere a geometria, as relações ou as cotas.
4. Feche o esboço. A peça inteira é reconstruída com a alteração.

Para alterar apenas uma medida, não precisa de abrir o esboço. Selecione a operação ou o esboço e altere o número em **Cotas do esboço** (ou **Cotas de comando**) no painel da direita. Veja [Alterar medidas sem abrir o esboço](topic:change-sizes).

## Quando uma operação falha

Se uma alteração tornar uma operação impossível, o PartCraft constrói tudo o resto e assinala o problema:

- a operação mostra **⚠ erro** no histórico, e a respetiva mensagem fica no topo do painel da direita (passe o rato sobre a linha para a ler também);
- as operações que dependem dela mostram **⚠ não construída**, com « Precisa de Extrude2, que está a falhar. »;
- o indicador da barra de estado diz « 1 operação com falha ».

Corrija a causa (ou anule a alteração), e a peça volta a construir-se. As mensagens mais comuns e o que fazer estão em [Resolução de problemas](topic:troubleshooting).

## Suprimir uma operação

Suprimir desliga uma operação sem a eliminar: útil para experimentar uma peça sem um furo ou uma matriz.

1. Selecione a operação.
2. Escolha {{ui:Suprimir}}. A respetiva linha mostra **desligada**. As operações que dependem dela também não são construídas.
3. Escolha {{ui:Reativar}} para a ligar de novo.

## Reverter

Reverter constrói a peça apenas até um certo ponto, para a poder ver como estava, ou para acrescentar uma operação mais atrás no histórico.

1. Selecione uma operação e escolha {{ui:Reverter até aqui}}. Essa operação e todas as que estão abaixo dela ficam a cinzento e não são construídas. Uma linha **Barra de reversão · avançar** marca o ponto.
2. Qualquer operação que acrescente agora fica **na barra**, antes das que estão a cinzento.
3. Clique em **Barra de reversão · avançar** para voltar a construir tudo.

A posição de reversão fica guardada no ficheiro.

## Reordenar operações

1. Selecione a operação.
2. Escolha {{ui:Mover para cima}} ou {{ui:Mover para baixo}}, ou, com a linha do histórico em foco, prima {{key:Alt+Up}} ou {{key:Alt+Down}}.

Uma operação nunca pode subir acima de algo que utiliza. O botão fica a cinzento, e ao passar o rato por cima (ou ao tentar a tecla) aparece o motivo, por exemplo: « Extrude2 utiliza Sketch2, por isso Sketch2 tem de vir primeiro. »

O que uma operação utiliza: o seu esboço; a face em que o esboço assenta; as operações que uma matriz ou um espelho copiam; uma linha de esboço ou uma revolução usada como direção ou eixo.

## Eliminar uma operação

1. Selecione a operação e escolha {{ui:Eliminar}} no painel da direita ou na barra de ferramentas, ou prima {{key:Delete}}.
2. Se outras operações a utilizarem, o PartCraft pergunta: « Extrude3, Hole1 utilizam Extrude1 e também serão eliminadas. » Escolha {{ui:Eliminar tudo}} ou {{ui:Cancelar}}.

Eliminar uma operação não elimina o respetivo esboço: o esboço volta a aparecer na vista como esboço não utilizado, pronto para outra operação. Elimine o esboço à parte se não precisar dele.

## Renomear

Selecione a operação e escreva um novo **Nome** na parte inferior do painel da direita (até 60 caracteres). O nome da própria peça está no painel da direita quando nada estiver selecionado.

## Peças com centenas de operações

Uma peça com centenas de operações foi testada com 750. O PartCraft guarda o sólido que tinha a meio do histórico, por isso uma alteração no fim do histórico reconstrói apenas as operações que vêm depois dela; uma alteração perto do topo reconstrói tudo o que foi construído sobre ela, o que demora mais. Anular e refazer reconstroem apenas a partir do ponto em que os dois estados diferem. Para trabalhar mais depressa numa peça grande, reverta até ao ponto onde está a trabalhar (veja Reverter acima) ou suprima o que não precisa neste momento. Vários cortes e saliências que não se tocam são aplicados em conjunto, por isso uma peça feita de muitos furos e saliências separados constrói-se mais depressa do que o número de operações sugere.

Uma peça grande é reconstruída em segundo plano: o indicador de construção, em baixo, mostra **A reconstruir…** com o progresso atual, e a vista, os painéis e os menus continuam a funcionar enquanto decorre. A peça no ecrã é a última construída até a nova estar pronta. Se alterar algo de novo enquanto reconstrói, o PartCraft constrói a versão mais recente e descarta a que estava em curso. Uma peça pequena continua a ser reconstruída de imediato.

## Anular e refazer

- {{key:Mod+Z}} ou {{ui:Anular}} anula a última alteração: uma operação, uma definição, uma edição de esboço, um arrastamento. A barra de estado indica o que foi, por exemplo « Anulado: alterar cota. »
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ou {{ui:Refazer}} refaz essa alteração.
- O PartCraft guarda os últimos 200 passos (uma peça tão grande que 200 cópias ocupariam muita memória guarda menos, mas nunca menos do que os 20 mais recentes). As alterações na folha de desenho (um corte, um símbolo GD&T movido) estão na mesma lista. Abrir um ficheiro ou iniciar uma nova peça limpa esta lista.

:::mac
No Mac, use ⇧⌘Z para refazer. No Safari, ⌘Y pode abrir o histórico do navegador.
:::
