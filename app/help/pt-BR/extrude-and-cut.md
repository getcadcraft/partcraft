---
title: Extrudar uma saliência e cortar através dela
summary: Transforme um esboço em sólido com Extrudar, defina profundidades cega, de plano médio, até uma face ou em duas direções, uma conicidade ou um contorno do esboço; depois esboce em uma face e use Recortar para fazer um bolsão ou um rasgo passante.
keywords: extrudar, saliência, saliência extrudada, recortar, corte extrudado, bolsão, através de tudo, cega, plano médio, inverter, profundidade, cortar-extrudar, saliência-extrudar, saliência, até a face, até a próxima face, até o vértice, deslocamento a partir da face, direção 2, duas direções, ângulo de saída durante a extrusão, conicidade, contorno, região, contornos selecionados
from: 3b13ff10
---

{{ui:Extrudar}} empurra o perfil fechado de um esboço reto para fora do seu plano para criar material. {{ui:Recortar}} faz o mesmo, mas remove material. Por baixo, são o mesmo recurso; depois você pode trocar um pelo outro.

## Extrudar uma saliência

1. Desenhe um perfil fechado e feche o esboço (veja [Desenhar seu primeiro esboço](topic:sketch-basics)). Ele continua selecionado.
2. Escolha {{ui:Extrudar}}.

Aparece um sólido de 10 mm, "Extrude1" entra no histórico com seu esboço recuado abaixo dele, e a barra de status diz "Extrude1 adicionado. Altere os valores à direita."

**Qual esboço é usado:** o esboço que você acabou de fechar, ou o esboço selecionado no histórico. Sem nada selecionado, o PartCraft usa o esboço mais recente que ainda não é usado por nenhum recurso. Se não houver nenhum: "Crie um esboço primeiro: escolha um plano, Esboço, desenhe um perfil fechado, Sair."

### Definir a profundidade e a direção

No painel direito:

| Configuração | Opções | Padrão |
|---|---|---|
| **Operação** | Saliência (adicionar material), Recortar (remover material), Interseção (manter a sobreposição), Novo corpo (ainda não implementado nesta versão: precisa de um kernel exato) | Saliência |
| **Fim** | Cega (uma profundidade), Plano médio (nos dois sentidos), Através de tudo, Até face ou plano, Até a próxima face, Até o vértice, Deslocamento da face | Cega |
| **Profundidade (mm)** | Qualquer medida acima de zero (exibida para Cega e Plano médio) | 10 |
| **Inverter direção** | Cresce para o outro lado do plano do esboço (não exibido para Plano médio) | Desligado |

Digite um número e pressione {{key:Enter}} ou {{key:Tab}}: a peça é reconstruída na hora. **Plano médio** coloca metade da profundidade de cada lado do esboço.

### Até uma face, a próxima face ou um vértice

Ainda não implementado nesta versão: todo fim "até" precisa de um kernel exato, e o recurso informa "Extrusão até uma face, a próxima face ou um vértice: ainda não implementado (precisa de um kernel exato)." Use uma profundidade Cega que você meça. Com um kernel exato, os fins funcionam assim:

- **Até face ou plano**: **Até** aceita uma face plana (Selecionar, depois clique nela) ou um plano de referência. Uma face paralela ao esboço dá uma profundidade exata; uma face inclinada corta o fim na inclinação. Se a face estiver atrás do esboço: "… Tente Inverter direção."
- **Até a próxima face**: para na primeira face plana do corpo que a extrusão encontra (faces curvas não são aceitas aqui: o programa informa isso).
- **Até o vértice**: para na altura de um vértice (clique perto da extremidade de uma aresta) ou de um recurso de ponto.
- **Deslocamento da face**: como Até face, parando a **Deslocamento (mm)** antes dela (medida perpendicular à face).

### Duas direções, conicidade, um contorno

- **Segunda direção** (Cega): também extrude a **Segunda profundidade (mm)** para o outro lado do esboço.
- **Conicidade (°)**: as laterais se inclinam para dentro conforme avançam (negativo: para fora), como um ângulo de saída; só uma direção. Ainda não implementado nesta versão (precisa de um kernel exato): deixe em 0.
- **Regiões**: **Selecionar regiões**, depois clique dentro dos laços a extrudar; só essas regiões são usadas (um círculo dentro de um quadrado: clique dentro do círculo para um cilindro, entre eles para uma chapa com furo). **Todas** volta a todos os laços.

Abaixo desses, **Cotas do esboço** lista as cotas de controle do esboço, para você alterar as medidas do perfil sem abrir o esboço.

:::note
**Através de tudo serve somente para cortes.** Uma saliência definida como Através de tudo falha com "Através de tudo serve para cortes. Use uma profundidade para uma saliência." Ao trocar um recurso de Recortar de volta para Saliência, Através de tudo muda para Cega automaticamente.
:::

## Recortar um bolsão

1. Clique na face plana onde quer recortar. Ela fica destacada, e o painel direito mostra **Face**.
2. Escolha {{ui:Esboço nesta face}} (ou {{ui:Esboço}} na barra de ferramentas).
3. Desenhe o contorno do bolsão, por exemplo um retângulo, e cote-o.
4. Escolha {{ui:Sair}}.
5. Escolha {{ui:Recortar}}. Ele começa como **Através de tudo**: remove material atravessando a peça inteira.
6. Para um bolsão, defina **Fim** como **Cega (uma profundidade)** e digite a **Profundidade (mm)**.

Um corte entra no material, afastando-se da face onde você esboçou. Se a barra de status disser "Não há nada para cortar deste lado do esboço. Tente a outra direção.", marque **Inverter direção**.

Um esboço no fundo do bolsão acompanha o fundo: altere a profundidade do bolsão e o esboço se move junto.

## Puxar ou empurrar uma face inteira

Para fazer uma face sair mais ou afundar, não é preciso desenhar seu contorno. Clique na face plana e depois, no painel direito:

- {{ui:Extrudar a partir dela}} puxa a face para fora: o PartCraft adiciona um esboço na face com o contorno dela (furos na face continuam furos) e uma Extrusão de 10 mm.
- {{ui:Cortar nela}} empurra a face para dentro: o mesmo esboço e um Corte até a metade da peça.

As duas são um único passo: {{key:Mod+Z}} desfaz o esboço e o recurso juntos. O novo recurso fica selecionado, então digite um número logo em seguida e pressione {{key:Enter}} para definir a profundidade. O contorno é copiado como linhas e arcos fixos: ele não acompanha alterações posteriores na face. Se parte do contorno não puder ser copiada (uma curva de forma livre), o esboço abre com o que pôde ser copiado; conclua-o, depois escolha {{ui:Sair}} e {{ui:Extrudar}} ou {{ui:Recortar}}.

## Perfis com ilhas

Um esboço pode ter vários laços fechados. Laços lado a lado viram saliências separadas (ou cortes); um laço dentro de outro vira um furo na saliência. Por exemplo, um retângulo com dois círculos dentro é extrudado como uma chapa com dois furos.

Para usar somente alguns laços, selecione-os com **Regiões** (acima); outro recurso pode usar os outros laços do mesmo esboço.

## Editar depois

- Clique em "Extrude1" no histórico para trazer de volta suas configurações.
- Clique duas vezes no esboço dele (recuado abaixo dele) para abrir o esboço; feche-o para reconstruir.
- Veja [Alterar uma peça pelo seu histórico](topic:edit-history) para suprimir, reverter, reordenar e excluir.

## Mensagens comuns

| Mensagem | O que fazer |
|---|---|
| "O esboço não tem perfil fechado para extrudar." | O esboço não tem um laço fechado de linhas sólidas. Feche as lacunas, ou volte as linhas de construção com {{key:Q}} |
| "O perfil está aberto: uma extremidade em (x, y) não está unida a nada." | Abra o esboço e una essa extremidade à linha seguinte |
| "Ainda não há nada para cortar." | Um corte precisa de um sólido para cortar. Crie primeiro uma saliência |
| "Não sobra nada da peça depois disso." | O corte removeu tudo. Verifique o tamanho e a direção dele |

Mais em [Solução de problemas](topic:troubleshooting).
