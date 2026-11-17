---
title: Copiar, colar e duplicar
summary: Copiar geometria de esboço, operações e peças de montagem; colar onde clicar ou no mesmo sítio; duplicar num só passo; e o que vem com uma cópia e o que não vem.
keywords: copiar, colar, cortar, duplicar, área de transferência, colar no mesmo sítio, selecionar tudo, limpar seleção, eliminar, ctrl c, ctrl v, ctrl d, instância, componente, copiar esboço, copiar operação, copiar peça
from: 611307d7
---

O grupo {{ui:Edit}} da barra de ferramentas inclui {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} e um menu {{ui:More}} com {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} e {{ui:Select none}}, cada um com a sua tecla. O que copiam depende de onde está: a geometria num esboço aberto, uma operação no histórico, ou uma peça numa montagem.

Um item a cinzento não pode atuar neste momento. Pouse o ponteiro sobre ele: a sua dica indica o motivo, por exemplo "Selecione primeiro a geometria do esboço" ou "A área de transferência contém Sketch2 e Extrude2: as operações colam-se no histórico, por isso saia primeiro do esboço".

| Ação | Tecla | Num esboço | No histórico | Numa montagem |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Os pontos e curvas selecionados | O esboço, extrusão, revolução ou furo selecionado (com o seu esboço) | A peça selecionada |
| Cortar | {{key:Mod+X}} | Copiar e, depois, eliminá-los | Copiar e, depois, eliminar a operação | Copiar e, depois, remover a peça |
| Colar | {{key:Mod+V}} | A cópia segue o ponteiro; clique onde deve ir | Acrescenta a cópia no fim do histórico | Uma nova cópia ao lado das outras peças |
| Colar no mesmo sítio | {{key:Mod+Shift+V}} | Nas mesmas coordenadas | Igual a Colar | No mesmo sítio da peça copiada |
| Duplicar | {{key:Mod+D}} | Copia e move num só gesto; a área de transferência fica intacta | Uma segunda cópia logo a seguir à sua | Uma segunda cópia ao lado das outras peças |
| Eliminar | {{key:Delete}} | A seleção | A operação (pergunta se outras a usam) | A peça ou a junta |
| Selecionar tudo | {{key:Mod+A}} | Tudo no esboço | Não disponível | Não disponível |
| Limpar seleção | {{key:Esc}} | Limpa a seleção | Limpa a seleção e as escolhas | Limpa a seleção |

Cada colagem, duplicação e corte é um passo na lista de anulação: {{key:Mod+Z}} anula-o, {{key:Mod+Y}} repõe-no.

## Num esboço

1. Selecione o que copiar: clique, {{key:Shift}}+clique para mais, arraste uma janela, ou prima {{key:Mod+A}} para tudo.
2. Prima {{key:Mod+C}} ou escolha {{ui:Copy}}. A barra de estado indica o que foi copiado.
3. Prima {{key:Mod+V}} ou escolha {{ui:Paste}}. Uma cópia a tracejado segue o ponteiro, seguro pelo seu centro. Faz snap a pontos: para pôr o centro de um círculo copiado num ponto, clique nesse ponto.
4. Clique onde deve ir. A geometria colada mantém-se selecionada, pelo que pode arrastá-la ou acrescentar-lhe relações de imediato. {{key:Esc}} cancela a colagem.

O que vem com a cópia:

- Uma linha, círculo ou arco copiado traz consigo os seus próprios pontos extremos e centro.
- As relações e cotas **entre itens copiados** vêm consigo: um retângulo copiado continua a ser um retângulo, com as suas medidas.
- As relações **com geometria que não copiou**, e com a origem, são eliminadas. A barra de estado conta-as: "2 relações com geometria fora da cópia não serão incluídas". Assim, uma cópia colada fica livre para se mover até a ligar com relações ou cotas.
- Um ponto fixo mantém-se fixo, na sua nova posição.

{{ui:Paste in place}} põe a cópia exatamente nas coordenadas do original, neste esboço ou noutro: útil para trazer um perfil de um esboço para outro. No mesmo esboço, a cópia fica por cima do original; arraste-a para longe.

{{ui:Duplicate}} ({{key:Mod+D}}) copia a seleção e começa a colocá-la de imediato, sem tocar no que está na área de transferência.

:::tip
Para repetir um centro de furo ou uma ranhura várias vezes, copie-o uma vez e cole-o várias vezes: cada {{key:Mod+V}} começa uma nova cópia que segue o ponteiro.
:::

## No histórico

1. Clique num esboço, extrusão, revolução ou furo no histórico.
2. {{key:Mod+C}} copia-o. Uma operação baseada em esboço é copiada juntamente com o seu esboço.
3. {{key:Mod+V}} acrescenta a cópia no fim do histórico (na barra de reversão, se tiver revertido), com novos nomes como Sketch3 e Extrude2.

A cópia fica no mesmo plano ou face do original, pelo que se constrói por cima dele e a peça tem o mesmo aspeto. Para mover a cópia, selecione o novo esboço e altere o seu plano no painel da direita, ou abra-o e arraste ou volte a cotar o perfil.

- Colar numa **outra peça**: abra essa peça e prima {{key:Mod+V}}. Quando o esboço da cópia estava numa face que essa peça não tem, fica no plano Alçado, e a barra de estado indica-o.
- {{ui:Duplicate}} faz copiar e colar num só passo, dentro da mesma peça.
- {{ui:Cut}} copia a operação e, depois, elimina-a (pergunta primeiro se outras operações a usam).

Matrizes, espelhos, boleados, chanfros, cascas e sólidos importados não podem ser copiados: dependem de arestas, faces ou operações selecionadas nesta peça. Copie antes o esboço ou a operação em que se baseiam, ou crie uma matriz com {{ui:Linear}} ou {{ui:Circular}}.

## Numa montagem

1. Clique numa peça na vista ou na lista à esquerda.
2. Escolha {{ui:Duplicate}} ({{key:Mod+D}}), ou {{key:Mod+C}} e depois {{key:Mod+V}}.

A nova cópia é a **mesma peça**: se editar uma, todas as cópias mudam. Aparece a 20 mm à direita de tudo o que já está na montagem, orientada da mesma forma que a cópia, e aí permanece até que uma junta a posicione. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) coloca-a exatamente onde está a peça copiada; una-a com uma junta para a mover (o deslocamento de uma junta deslizante empurra-a ao longo do eixo).

Colar uma peça copiada de outra montagem traz a peça consigo, tal como {{ui:Insert}} a partir do seu ficheiro. {{ui:Add copy}} no grupo Montagem faz o mesmo que {{ui:Duplicate}}, e funciona com nada selecionado (copia a última peça).

## A área de transferência

- É a área de transferência própria do PartCraft, e não a do computador: não pode colar geometria do PartCraft noutro programa, nem texto nas vistas do PartCraft.
- Fica guardada neste navegador, pelo que outro separador do PartCraft pode colar o que copiou. É lida de volta e verificada como um ficheiro aberto; o que estiver danificado ou for de outra versão é recusado.
- Uma peça com um ficheiro STEP importado grande pode ser demasiado grande para o navegador guardar: nesse caso só cola neste separador.
- Numa caixa de número ou na pesquisa da ajuda, {{key:Mod+C}} e {{key:Mod+V}} copiam e colam texto como de costume.

Na folha de desenho, copiar e colar ainda não estão disponíveis; {{ui:Delete}} e {{ui:Select none}} atuam sobre o símbolo selecionado. Ver [Ainda não implementado](topic:not-built-yet).
