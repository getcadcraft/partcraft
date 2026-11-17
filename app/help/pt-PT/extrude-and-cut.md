---
title: Extrudir uma saliência e cortar através dela
summary: Transforme um esboço num sólido com Extrudir, defina profundidades Cega, Plano médio, Até ou em duas direções, uma conicidade, ou um contorno do esboço, depois desenhe um esboço numa face e Cortar uma cavidade ou uma ranhura passante.
keywords: extrudir, saliência, saliência extrudida, cortar, corte extrudido, cavidade, através de tudo, cega, plano médio, inverter, profundidade, cortar por extrusão, saliência por extrusão, bloco, até à face, até à face seguinte, até ao vértice, offset a partir da superfície, direção 2, duas direções, ângulo de saída ao extrudir, conicidade, contorno, região, contornos selecionados
from: 3b13ff10
---

{{ui:Extrudir}} empurra o perfil fechado de um esboço, em linha reta para fora do seu plano, para criar material. {{ui:Cortar}} faz o mesmo, mas remove material. As duas são a mesma operação por baixo; pode passar de uma para a outra mais tarde.

## Extrudir uma saliência

1. Desenhe um perfil fechado e feche o esboço (veja [Desenhar o seu primeiro esboço](topic:sketch-basics)). Continua selecionado.
2. Escolha {{ui:Extrudir}}.

Surge um sólido de 10 mm, "Extrudir1" junta-se ao histórico com o seu esboço recuado por baixo dele, e a barra de estado diz "Extrudir1 adicionado. Altere os seus valores à direita."

**Que esboço é usado:** o esboço que acabou de fechar, ou o esboço selecionado no histórico. Sem nada selecionado, o PartCraft usa o esboço mais recente que nenhuma operação utiliza ainda. Se não houver nenhum: "Crie primeiro um esboço: escolha um plano, Esboço, desenhe um perfil fechado, Sair."

### Definir a profundidade e a direção

No painel da direita:

| Definição | Opções | Predefinido |
|---|---|---|
| **Operação** | Saliência (adicionar material), Corte (remover material), Interseção (manter a sobreposição), Corpo novo (ainda não implementado nesta versão: precisa de um kernel exato) | Saliência |
| **Fim** | Cega (uma profundidade), Plano médio (nos dois sentidos), Através de tudo, Até face ou plano, Até à face seguinte, Até ao vértice, Offset a partir da face | Cega |
| **Profundidade (mm)** | Qualquer valor acima de zero (mostrado para Cega e Plano médio) | 10 |
| **Inverter direção** | Cresce para o outro lado do plano do esboço (não mostrado para Plano médio) | Desligado |

Escreva um número e prima {{key:Enter}} ou {{key:Tab}}: a peça reconstrói-se de imediato. **Plano médio** coloca metade da profundidade de cada lado do esboço.

### Até uma face, à face seguinte ou a um vértice

Ainda não implementado nesta versão: cada extremo "Até" precisa de um kernel exato, e a operação indica "Extrudir até uma face, à face seguinte ou a um vértice: ainda não implementado (precisa de um kernel exato)." Use uma profundidade Cega que meça. Com um kernel exato, os extremos funcionam assim:

- **Até face ou plano**: **Até** aceita uma face plana (escolha e depois clique nela) ou um plano de referência. Uma face paralela ao esboço dá uma profundidade exata; uma face inclinada corta o extremo no declive. Se a face estiver atrás do esboço: "… Experimente Inverter direção."
- **Até à face seguinte**: para na primeira face plana do corpo que a extrusão encontra (faces curvas não são suportadas aqui: a aplicação di-lo).
- **Até ao vértice**: para ao nível de um vértice (clique perto da extremidade de uma aresta) ou de uma característica de ponto.
- **Offset a partir da face**: como Até face ou plano, parando **Offset (mm)** antes dela (medido perpendicularmente à face).

### Duas direções, conicidade, um contorno

- **Segunda direção** (Cega): extrui também **Segunda profundidade (mm)** para o outro lado do esboço.
- **Conicidade (°)**: as laterais inclinam-se à medida que avançam (negativo: para fora), como um ângulo de saída; apenas numa direção. Ainda não implementado nesta versão (precisa de um kernel exato): deixe em 0.
- **Regiões**: **Escolher regiões**, depois clique dentro dos laços a extrudir; só essas regiões são usadas (um círculo dentro de um quadrado: clique dentro do círculo para um cilindro, entre os dois para uma placa com furo). **Todas** volta a usar todos os laços.

Abaixo destas, **Cotas do esboço** lista as cotas de comando do esboço, para alterar as dimensões do perfil sem abrir o esboço.

:::note
**Através de tudo só é para cortes.** Uma saliência definida como Através de tudo falha com "Através de tudo é para cortes. Use uma profundidade para uma saliência." Passar uma operação de Corte de volta para Saliência altera Através de tudo para Cega por si.
:::

## Cortar uma cavidade

1. Clique na face plana onde quer cortar. Fica realçada, e o painel da direita diz **Face**.
2. Escolha {{ui:Esboço nesta face}} (ou {{ui:Esboço}} na barra de ferramentas).
3. Desenhe o contorno da cavidade, por exemplo um retângulo, e cote-o.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Cortar}}. Começa como **Através de tudo**: remove material através de toda a peça.
6. Para uma cavidade, defina **Fim** como **Cega (uma profundidade)** e escreva a **Profundidade (mm)**.

Um corte entra no material, afastando-se da face onde desenhou o esboço. Se a barra de estado disser "Não há nada para cortar desse lado do esboço. Experimente o outro sentido.", marque **Inverter direção**.

Um esboço no fundo da cavidade acompanha o fundo: altere a profundidade da cavidade e o esboço move-se com ela.

## Puxar ou empurrar uma face inteira

Para fazer uma face sobressair ou afundar mais, não precisa de desenhar o seu contorno. Clique na face plana e depois, no painel da direita:

- {{ui:Extrudir a partir dela}} puxa a face para fora: o PartCraft acrescenta um esboço sobre a face com o seu contorno (os furos na face continuam a ser furos) e uma operação Extrudir de 10 mm.
- {{ui:Cortar nela}} empurra a face para dentro: o mesmo esboço e um Corte a meio caminho da peça.

Ambos são um só passo: {{key:Mod+Z}} remove o esboço e a operação em conjunto. A nova operação fica selecionada, por isso escreva um número logo a seguir e prima {{key:Enter}} para a sua profundidade. O contorno é copiado como linhas e arcos fixos: não acompanha alterações posteriores à face. Se parte do contorno não puder ser copiada (uma curva de forma livre), o esboço abre com o que pôde ser copiado; termine-o, depois escolha {{ui:Sair}} e {{ui:Extrudir}} ou {{ui:Cortar}}.

## Perfis com ilhas

Um esboço pode ter vários laços fechados. Laços lado a lado tornam-se saliências separadas (ou cortes); um laço dentro de outro torna-se um furo através da saliência. Por exemplo, um retângulo com dois círculos dentro é extrudido como uma placa com dois furos.

Para usar apenas alguns laços, escolha-os com **Regiões** (acima); outra operação pode usar os outros laços do mesmo esboço.

## Editar mais tarde

- Clique em "Extrudir1" no histórico para voltar às suas definições.
- Faça duplo clique no seu esboço (recuado por baixo dela) para o abrir; feche-o para reconstruir.
- Veja [Alterar uma peça através do seu histórico](topic:edit-history) para suprimir, reverter, reordenar e eliminar.

## Mensagens comuns

| Mensagem | O que fazer |
|---|---|
| "O esboço não tem nenhum perfil fechado para extrudir." | O esboço não tem nenhum laço fechado de linhas sólidas. Feche as falhas, ou volte a alternar as linhas de construção com {{key:Q}} |
| "O perfil está aberto: uma extremidade em (x, y) não está ligada a nada." | Abra o esboço e ligue essa extremidade à linha seguinte |
| "Ainda não há nada para cortar." | Um corte precisa de um sólido para cortar. Crie primeiro uma saliência |
| "Não resta nada da peça depois disto." | O corte removeu tudo. Verifique o seu tamanho e direção |

Mais em [Resolução de problemas](topic:troubleshooting).
