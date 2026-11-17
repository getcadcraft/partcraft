---
title: Verificar ângulo de saída para moldagem e fundição
summary: Colora a peça pelo seu ângulo de saída em relação à direção de extração de um molde, veja quais faces saem livres, quais precisam de mais ângulo e quais saem pela outra metade, com a parcela da área de cada uma.
keywords: análise de ângulo de saída, ângulo de saída, conicidade, molde, moldagem por injeção, fundição sob pressão, direção de extração, linha de partição, contrasalência, desmoldagem, verificar ângulo de saída
from: 6a106f83
---

Peças feitas em molde, matriz ou fundição em areia precisam de **ângulo de saída**: paredes levemente inclinadas para que a peça deslize para fora. A **análise de ângulo de saída** colore cada face conforme o quanto ela se inclina em relação à direção em que o molde abre (a **extração**).

## Ativar

1. No espaço de trabalho Design, abra {{ui:Vistas}} e escolha {{ui:Análise de ângulo de saída}}.
2. Defina **Extração**: a direção em que o molde abre, ao longo de X, Y ou Z em qualquer sentido, ou **Perpendicular a uma face selecionada**: pressione {{ui:Selecionar uma face}} e clique em uma face plana da peça.
3. Defina **Ângulo de saída mínimo**, em graus: a menor inclinação que o seu processo exige (muitas vezes de 1° a 3°).

A peça é colorida assim:

| Cor | Significa |
|---|---|
| Verde: **Ângulo de saída positivo** | Inclinada em direção à extração com pelo menos o mínimo: sai por esta metade do molde |
| Ocre: **Precisa de ângulo de saída** | Dentro do mínimo em qualquer sentido, como uma parede vertical: adicione ângulo de saída aqui |
| Vermelho: **Ângulo de saída negativo** | Inclinada para longe da extração com pelo menos o mínimo: sai pela outra metade do molde, ou é uma contrasalência se a peça deve sair por uma metade só |

A parcela da área superficial da peça de cada classe é mostrada ao lado dela. **Inverter a extração** observa a partir da outra metade do molde: verde e vermelho trocam de lugar.

Faces curvas são avaliadas ponto a ponto, então um cilindro posicionado transversalmente à extração mostra uma faixa que precisa de ângulo de saída ao longo das laterais.

As cores acompanham a peça conforme você a altera. {{key:Esc}} ou {{ui:Fechar}} desliga a análise; nada é salvo na peça.

:::tip
Para adicionar ângulo de saída, use o recurso {{ui:Ângulo de saída}} nas faces ocre (veja [Varredura, loft e ângulo de saída](topic:sweep-loft-draft)) e depois verifique novamente.
:::
