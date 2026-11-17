---
title: Roscas em eixos e furos, desenhadas ou modeladas
summary: Aplique uma rosca métrica ISO ou trapezoidal em qualquer face redonda, um eixo ou um furo. Mantenha-a cosmética para desenhos, ou modele a rosca helicoidal real para impressão 3D, com uma folga para que as peças impressas encaixem.
keywords: rosca, roscas, rosca modelada, rosca helicoidal, hélice, parafuso, porca, eixo, furo, rosca externa, rosca interna, rosca cosmética, rosca métrica, trapezoidal, acme, fuso de avanço, Tr16x4, M10, impressão 3D, imprimir, folga, ajuste, mão esquerda, roscado
from: 4f6401cc
---

{{ui:Rosca}} aplica roscas em faces redondas: o exterior de um eixo (uma rosca externa) ou o interior de um furo (uma rosca interna). O PartCraft identifica qual é pela face.

Uma rosca é **cosmética** no início: a face permanece lisa, a vista desenha a rosca como círculos tracejados e a folha de desenho a anota, como "M10×1.5 - 6g, rosca com 20 de comprimento". Marque **Modelada** para cortar a rosca helicoidal real na peça, para impressão 3D ou para um modelo que precisa parecer correto.

## Rosquear um eixo ou um furo

1. Faça o eixo ou o furo no tamanho da rosca: um eixo Ø10 para um parafuso M10, ou um furo Ø8.5 (a broca de rosca) para uma porca M10.
2. Clique na face redonda, depois escolha {{ui:Mais}} › {{ui:Rosca}}. Sem face redonda selecionada, o PartCraft pede que você clique nas faces e depois em {{ui:Concluir}}.
3. No painel direito, verifique o **Tamanho**. **Ajustar à face** escolhe o tamanho sozinho: para um eixo, o tamanho cujo diâmetro maior é o do eixo; para um furo, o tamanho cujo diâmetro menor ele encaixa.

A rosca começa na extremidade aberta da face, onde a peça não continua ao longo do eixo: a extremidade livre de um eixo, a boca de um furo. **Começar na outra extremidade** inverte isso.

## Configurações

| Configuração | Opções | Padrão |
|---|---|---|
| **Forma** | ISO métrica (60°), M1.6 a M64 grossa; trapezoidal (Tr, 30°), Tr8×1.5 a Tr60×9 | ISO métrica |
| **Tamanho** | Ajustar à face, ou um tamanho da lista | Ajustar à face |
| **Toda a face** | Desmarque para informar um **Comprimento (mm)**, medido a partir do início | Marcado |
| **Começar na outra extremidade** | A rosca percorre a face a partir da outra extremidade | Desligado |
| **Sentido** | Direita ou esquerda | Direita |
| **Modelada** | Corta a rosca helicoidal real | Desligado |
| **Folga (mm)** | Mostrada quando Modelada está marcada: quanto menor a rosca de um eixo, e quanto maior a de um furo, em toda a volta | 0.1 |

Um tamanho que não se adequa à face é criado mesmo assim, cortado na face, e o painel informa isso, como "Um eixo de Ø12 mm não é o Ø10 mm do M10". Várias faces podem compartilhar um recurso Rosca; com **Ajustar à face**, cada uma recebe seu próprio tamanho.

## Roscas modeladas para impressão 3D

Uma rosca modelada segue o perfil básico padrão: ISO 68-1 para roscas métricas (cristas e raízes planas, flancos de 60°), ISO 2901 para as trapezoidais (flancos de 30°). A **Folga** desloca todo o perfil para dentro (um eixo) ou para fora (um furo), para que as peças impressas se encaixem:

- **0.1 a 0.2 mm** serve para a maioria das impressoras. Imprima um parafuso e uma porca de teste primeiro.
- **0** é o perfil padrão, para peças usinadas ou para verificar um ajuste.

Um parafuso e uma porca com a mesma folga nunca se tocam ao longo de seus flancos: a distância entre eles é o dobro da folga, em toda a volta.

:::tip
Passos finos imprimem mal: M3 e menores, ou um passo abaixo de 0.5 mm, estão no limite do que um bico de 0.4 mm consegue desenhar. Modele roscas maiores, e use um inserto termofixado ou um furo roscado para as pequenas.
:::

Uma rosca modelada faz parte do sólido: as exportações STL, 3MF e STEP a incluem, e {{ui:Medir}} a mede. Ela deixa a peça mais pesada para reconstruir: uma rosca M10 de 20 de comprimento tem cerca de 150,000 triângulos.

## Furos roscados

Um furo **Roscado (ISO métrica)** também tem a chave **Modelada**, com a mesma **Folga**. Veja [Furar furos e rebaixos em pontos de esboço](topic:holes).

## Quando uma rosca não é criada

- "Uma rosca vai em uma face redonda (um cilindro): um eixo ou um furo." A face selecionada é plana ou curva de outra forma.
- "Nenhum tamanho padrão se encaixa em uma face redonda de Ø0.6 mm: escolha um tamanho." Ajustar à face não encontrou nada dentro de 12 % da face. Escolha um **Tamanho**, ou mude a face.
- "Uma face em que esta rosca estava sumiu (…). Selecione-a de novo." Uma alteração anterior removeu a face. Clique em {{ui:Selecionar faces}} e clique na face de novo.

:::note
Roscas em polegadas (UNC, UNF), roscas de tubulação, roscas cônicas, saídas de rosca e inícios de rosca chanfrados ainda não estão implementados. O kernel exato mostra uma rosca modelada como cosmética.
:::
