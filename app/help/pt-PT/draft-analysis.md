---
title: Verificar o ângulo de saída para moldagem e fundição
summary: Colore a peça pelo seu ângulo de saída em relação à direção de extração de um molde, mostra que faces saem, quais precisam de mais ângulo de saída e quais saem pela outra metade, com a parte da área de cada uma.
keywords: análise de ângulo de saída, ângulo de saída, conicidade, molde, moldagem, fundição sob pressão, moldagem por injeção, direção de extração, linha de apartação, contra-saída, libertação, verificar ângulo de saída
from: 6a106f83
---

Peças feitas num molde, numa matriz ou numa fundição em areia precisam de **ângulo de saída**: paredes ligeiramente inclinadas para que a peça deslize para fora. A {{ui:Análise de ângulo de saída}} colore cada face conforme a sua inclinação em relação à direção em que o molde abre (a **extração**).

## Ativar

1. No espaço de trabalho Design, abra {{ui:Vistas}} e escolha {{ui:Análise de ângulo de saída}}.
2. Defina **Extração**: a direção em que o molde abre, ao longo de X, Y ou Z em qualquer dos sentidos, ou **Perpendicular a uma face escolhida**: carregue em {{ui:Escolher uma face}} e clique numa face plana da peça.
3. Defina **Ângulo de saída mínimo**, em graus: a inclinação mínima que o seu processo exige (muitas vezes 1° a 3°).

A peça fica colorida:

| Cor | Significa |
|---|---|
| Verde: **Ângulo de saída positivo** | Inclinada para a extração pelo menos no mínimo: sai desta metade do molde |
| Ocre: **Precisa de ângulo de saída** | Dentro do mínimo em qualquer sentido, como uma parede vertical: acrescente ângulo de saída aqui |
| Vermelho: **Ângulo de saída negativo** | Inclinada no sentido contrário à extração pelo menos no mínimo: sai pela outra metade, ou é uma contra-saída se a peça tiver de sair de uma só metade |

A parte da área da superfície da peça de cada classe é mostrada ao lado dela. **Inverter a extração** olha a partir da outra metade do molde: verde e vermelho trocam.

As faces curvas são avaliadas ponto a ponto, pelo que um cilindro deitado transversalmente à extração mostra uma faixa que precisa de ângulo de saída ao longo dos seus lados.

As cores acompanham a peça à medida que a altera. {{key:Esc}} ou {{ui:Fechar}} desliga a análise; nada fica guardado na peça.

:::tip
Para acrescentar ângulo de saída, use a operação {{ui:Saída}} nas faces ocre (ver [Varrimento, loft e ângulo de saída](topic:sweep-loft-draft)) e verifique de novo.
:::
