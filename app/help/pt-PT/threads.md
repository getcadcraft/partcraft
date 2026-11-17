---
title: Roscas em veios e furos, desenhadas ou modeladas
summary: Aplique uma rosca métrica ISO ou trapezoidal em qualquer face redonda, num veio ou num furo. Mantenha-a cosmética para desenhos, ou modele a rosca helicoidal real para impressão 3D, com uma folga para que as peças impressas encaixem.
keywords: rosca, roscas, rosca modelada, helicoidal, hélice, parafuso, porca, aperto, veio, furo, rosca externa, rosca interna, rosca cosmética, rosca métrica, trapezoidal, acme, fuso de avanço, Tr16x4, M10, impressão 3D, imprimir, folga, encaixe, rosca à esquerda, roscado
from: 4f6401cc
---

{{ui:Rosca}} põe uma rosca nas faces redondas: o exterior de um veio (uma rosca externa) ou o interior de um furo (uma rosca interna). O PartCraft distingue-as pela face.

Uma rosca é **cosmética** ao início: a face fica lisa, a vista desenha a rosca como círculos tracejados e a folha de desenho anota-a, por exemplo "M10×1.5 - 6g, rosca com 20 de comprimento". Marque **Modelada** para cortar a rosca helicoidal real na peça, para impressão 3D ou para um modelo que tenha de parecer correto.

## Rosquear um veio ou um furo

1. Construa o veio ou o furo com o tamanho da rosca: um veio Ø10 para um parafuso M10, ou um furo Ø8.5 (a broca de macho) para uma porca M10.
2. Clique na face redonda e escolha {{ui:Mais}} › {{ui:Rosca}}. Sem face redonda selecionada, o PartCraft pede que clique nas faces e depois em {{ui:Concluir}}.
3. No painel direito, verifique o **Tamanho**. **Ajustar à face** escolhe o tamanho sozinho: para um veio, o tamanho cujo diâmetro maior é o do veio; para um furo, o tamanho cujo diâmetro menor ele encaixa.

A rosca começa na extremidade aberta da face, onde a peça não continua ao longo do eixo: a extremidade livre de um veio, a boca de um furo. **Começar na outra extremidade** inverte isso.

## Definições

| Definição | Opções | Predefinição |
|---|---|---|
| **Forma** | Métrica ISO (60°), M1.6 a M64 de passo grosso; trapezoidal (Tr, 30°), Tr8×1.5 a Tr60×9 | Métrica ISO |
| **Tamanho** | Ajustar à face, ou um tamanho da lista | Ajustar à face |
| **Toda a face** | Desmarque para indicar um **Comprimento (mm)**, medido a partir do início | Marcado |
| **Começar na outra extremidade** | A rosca percorre a face a partir da outra extremidade | Desligado |
| **Sentido** | Rosca à direita ou à esquerda | À direita |
| **Modelada** | Corta a rosca helicoidal real | Desligado |
| **Folga (mm)** | Mostrado quando Modelada está marcada: quanto mais pequena fica a rosca de um veio, e quanto maior fica a de um furo, em toda a volta | 0.1 |

Um tamanho que não convém à face é criado mesmo assim, cortado à face, e o painel indica-o, por exemplo "Um veio Ø12 mm não é o Ø10 mm de M10". Várias faces podem partilhar uma só operação de Rosca; com **Ajustar à face**, cada uma recebe o seu tamanho.

## Roscas modeladas para impressão 3D

Uma rosca modelada segue o perfil básico padrão: ISO 68-1 para roscas métricas (cristas e fundos planos, flancos de 60°), ISO 2901 para as trapezoidais (flancos de 30°). A **Folga** desloca todo o perfil para dentro (um veio) ou para fora (um furo) para que as peças impressas se enrosquem:

- **0.1 a 0.2 mm** serve a maioria das impressoras. Imprima primeiro um parafuso e uma porca de teste.
- **0** é o perfil padrão, para peças maquinadas ou para verificar um encaixe.

Um parafuso e uma porca com a mesma folga nunca se tocam ao longo dos flancos: a distância entre eles é o dobro da folga, em toda a volta.

:::tip
Os passos finos imprimem mal: M3 e inferiores, ou um passo abaixo de 0.5 mm, estão perto do que um bico de 0.4 mm consegue desenhar. Modele roscas maiores, e use um inserto termoaplicado ou um furo roscado com macho para as pequenas.
:::

Uma rosca modelada faz parte do sólido: as exportações STL, 3MF e STEP levam-na, e Medir também a mede. Torna a peça mais lenta de reconstruir: uma rosca M10 com 20 de comprimento tem cerca de 150,000 triângulos.

## Furos roscados

Um furo **Roscado (ISO métrico)** tem também um interruptor **Modelada**, com a mesma **Folga**. Ver [Furar furos e rebaixos em pontos do esboço](topic:holes).

## Quando uma rosca não se constrói

- "Uma rosca vai numa face redonda (um cilindro): um veio ou um furo." A face escolhida é plana ou curva de outra forma.
- "Nenhum tamanho padrão encaixa numa face redonda de Ø0.6 mm: escolha um tamanho." Ajustar à face não encontrou nada a menos de 12 % da face. Escolha um **Tamanho**, ou altere a face.
- "Uma face em que esta rosca estava desapareceu (…). Escolha-a de novo." Uma alteração anterior removeu a face. Clique em {{ui:Escolher faces}} e clique de novo na face.

:::note
As roscas em polegadas (UNC, UNF), as roscas de tubo, as roscas cónicas, as saídas de rosca e os inícios de rosca com chanfro ainda não estão implementados. O núcleo exato mostra uma rosca modelada como cosmética.
:::
