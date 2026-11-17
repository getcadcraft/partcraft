---
title: Copiar, colar e duplicar
summary: Copie geometria de esboço, recursos e peças de montagem; cole onde você clicar ou no mesmo lugar; duplique em um passo; e veja o que vai junto com uma cópia e o que não vai.
keywords: copiar, colar, recortar, duplicar, área de transferência, colar no mesmo local, selecionar tudo, limpar seleção, excluir, ctrl c, ctrl v, ctrl d, instância, componente, copiar esboço, copiar recurso, copiar peça
from: 611307d7
---

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e um menu {{ui:Mais}} com {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com sua tecla. O que eles copiam depende de onde você está: geometria em um esboço aberto, um recurso no histórico ou uma peça em uma montagem.

Um item esmaecido não pode agir agora. Passe o cursor sobre ele: a dica diz por quê, por exemplo "Selecione primeiro a geometria do esboço" ou "A área de transferência tem Sketch2 e Extrude2: recursos são colados no histórico, então saia do esboço primeiro".

| Ação | Tecla | Em um esboço | No histórico | Em uma montagem |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Os pontos e curvas selecionados | O esboço, extrusão, revolução ou furo selecionado (com seu esboço) | A peça selecionada |
| Recortar | {{key:Mod+X}} | Copia e depois exclui | Copia e depois exclui o recurso | Copia e depois remove a peça |
| Colar | {{key:Mod+V}} | A cópia segue o ponteiro; clique onde ela deve ir | Adiciona a cópia ao fim do histórico | Uma nova cópia ao lado das outras peças |
| Colar no mesmo local | {{key:Mod+Shift+V}} | Nas mesmas coordenadas | Igual a Colar | No mesmo lugar da peça copiada |
| Duplicar | {{key:Mod+D}} | Copia e move de uma vez; a área de transferência fica intocada | Uma segunda cópia logo após você | Uma segunda cópia ao lado das outras peças |
| Excluir | {{key:Delete}} | A seleção | O recurso (pergunta se outros o usam) | A peça ou junta |
| Selecionar tudo | {{key:Mod+A}} | Tudo no esboço | Não disponível | Não disponível |
| Limpar seleção | {{key:Esc}} | Limpa a seleção | Limpa a seleção e as escolhas | Limpa a seleção |

Toda colagem, duplicação e recorte é uma etapa na lista de desfazer: {{key:Mod+Z}} a desfaz, {{key:Mod+Y}} a refaz.

## Em um esboço

1. Selecione o que copiar: clique nele, {{key:Shift}}+clique para mais, arraste uma janela, ou pressione {{key:Mod+A}} para tudo.
2. Pressione {{key:Mod+C}} ou escolha {{ui:Copiar}}. A barra de status diz o que foi copiado.
3. Pressione {{key:Mod+V}} ou escolha {{ui:Colar}}. Uma cópia tracejada segue o ponteiro, presa pelo centro. Ela faz snap em pontos: coloque o centro de um círculo copiado sobre um ponto clicando nesse ponto.
4. Clique onde ela deve ir. A geometria colada permanece selecionada, então você pode arrastá-la ou adicionar relações a ela imediatamente. {{key:Esc}} cancela a colagem.

O que vai junto:

- Uma linha, círculo ou arco copiado traz seus próprios pontos finais e centro.
- Relações e cotas **entre itens copiados** vêm junto: um retângulo copiado continua sendo um retângulo, com suas medidas.
- Relações **com geometria que você não copiou**, e com a origem, são descartadas. A barra de status conta-as: "2 relações com geometria fora da cópia não virão junto". Assim, uma cópia colada fica livre para mover até você amarrá-la com relações ou cotas.
- Um ponto fixo continua fixo, na nova posição.

{{ui:Colar no mesmo local}} põe a cópia exatamente nas coordenadas do original, neste esboço ou em outro: útil para trazer um perfil de um esboço para outro. No mesmo esboço, a cópia fica sobre o original; arraste-a para longe.

{{ui:Duplicar}} ({{key:Mod+D}}) copia a seleção e começa a posicioná-la de imediato, sem tocar no que está na área de transferência.

:::tip
Para repetir um centro de furo ou um rasgo várias vezes, copie uma vez e cole várias vezes: cada {{key:Mod+V}} inicia uma nova cópia que segue o ponteiro.
:::

## No histórico

1. Clique em um esboço, uma extrusão, uma revolução ou um furo no histórico.
2. {{key:Mod+C}} o copia. Um recurso baseado em esboço é copiado junto com seu esboço.
3. {{key:Mod+V}} adiciona a cópia ao fim do histórico (na barra de reversão, se você tiver revertido), com novos nomes como Sketch3 e Extrude2.

A cópia fica no mesmo plano ou face do original, então ela é construída sobre ele e a peça parece a mesma. Selecione o novo esboço e altere o plano dele no painel da direita, ou abra-o e arraste ou recote o perfil, para mover a cópia.

- Colar em **outra peça**: abra essa peça e pressione {{key:Mod+V}}. Quando o esboço da cópia estava em uma face que essa peça não tem, ele vai para o plano Frontal, e a barra de status informa isso.
- {{ui:Duplicar}} faz copiar e colar em um passo só, dentro da mesma peça.
- {{ui:Recortar}} copia o recurso e depois o exclui (perguntando antes se outros recursos o usam).

Padrões, espelhos, arredondamentos, chanfros, cascas e sólidos importados não podem ser copiados: eles dependem de arestas, faces ou recursos escolhidos nesta peça. Copie o esboço ou o recurso em que eles se baseiam, ou crie um padrão deles com {{ui:Linear}} ou {{ui:Circular}}.

## Em uma montagem

1. Clique em uma peça na vista ou na lista à esquerda.
2. Escolha {{ui:Duplicar}} ({{key:Mod+D}}), ou {{key:Mod+C}} e depois {{key:Mod+V}}.

A nova cópia é a **mesma peça**: edite uma e todas as cópias mudam. Ela aparece 20 mm à direita de tudo o que já está na montagem, girada do mesmo jeito que a cópia, e permanece lá até que uma junta a posicione. {{ui:Colar no mesmo local}} ({{key:Mod+Shift+V}}) a coloca exatamente onde está a peça copiada; una-a para movê-la (o deslocamento de uma junta deslizante a empurra ao longo dela).

Colar uma peça copiada de outra montagem traz a peça junto, da mesma forma que {{ui:Inserir}} a partir do arquivo dela. {{ui:Adicionar cópia}} no grupo Montagem faz o mesmo que {{ui:Duplicar}}, e funciona com nada selecionado (copia a última peça).

## A área de transferência

- É a área de transferência própria do PartCraft, não a do computador: você não pode colar geometria do PartCraft em outro programa, nem texto nas vistas do PartCraft.
- Ela é mantida neste navegador, então outra aba do PartCraft pode colar o que você copiou. Ela é lida de volta e verificada como um arquivo aberto; qualquer coisa danificada ou de outra versão é recusada.
- Uma peça com um arquivo STEP importado grande pode ser grande demais para o navegador manter: nesse caso, ela só cola nesta aba.
- Em uma caixa de número ou na busca da ajuda, {{key:Mod+C}} e {{key:Mod+V}} copiam e colam texto como de costume.

Na folha de desenho, copiar e colar ainda não estão disponíveis; {{ui:Excluir}} e {{ui:Limpar seleção}} funcionam no símbolo selecionado. Veja [O que ainda não foi implementado](topic:not-built-yet).
