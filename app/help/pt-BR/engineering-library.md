---
title: A biblioteca de engenharia
summary: Fórmulas de livro-texto como scripts legíveis, em unidades SI, com cada resultado acompanhado da sua fonte: escoamento em tubos e canais, transferência de calor e trocadores de calor, peças sob pressão, dinâmica dos gases, propriedades da água e do ar, materiais e unidades verificadas. Para que serve cada uma e onde ela para.
keywords: engenharia, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, fator de atrito, Dittus-Boelter, Gnielinski, NTU, eficácia, DMLT, LMTD, aleta, Barlow, Lamé, bocal, isentrópico, Mach, escoamento bloqueado, água, ar, propriedades, material, fontes
from: 786ef967
---

A biblioteca de engenharia é um conjunto de scripts na biblioteca do espaço de trabalho Script (`craftlib/eng`). Cada um é uma função que você pode ler de cima a baixo, com um cabeçalho que informa o seu **método**, as suas **unidades**, os seus **limites**, as suas **referências** e uma **verificação** com um número resolvido. Elas usam unidades SI em todo o conjunto e devolvem grandezas que carregam uma **unidade** e uma **fonte**, para que uma folha de dados possa mostrar de onde vem cada número.

## Unidades verificadas

`to_si(10, 'bar', 'Pa')` converte um valor e recusa uma unidade que mede outra grandeza (um comprimento onde se espera uma pressão). `from_si`, `unit_convert(1, 'bar', 'psi')` e `unit_kind('W/(m K)')` ("condutividade térmica") funcionam da mesma forma. `temp_k(25, 'C')` e `temp_from_k` convertem temperaturas, que têm um deslocamento de zero.

## Propriedades

- `fluid('water', T)` e `fluid('air', T, p)`: massa específica, viscosidade, condutividade, calor específico, número de Prandtl. Água de 0 a 100 °C, ar de 250 a 600 K; fora disso, a função para em vez de extrapolar.
- `material('ss304')`: módulo de Young, coeficiente de Poisson, massa específica, escoamento, condutividade, calor específico, dilatação: valores em temperatura ambiente das mesmas folhas de dados da Simulação. Um projeto real usa os valores certificados do fornecedor. Curvas de temperatura ainda não foram implementadas.

## Escoamento em tubos e canais

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar; para escoamento turbulento, a equação de Colebrook; a faixa de 2300 a 4000 não tem fórmula confiável e isso é informado), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubo circular, tudo de uma vez) e `rect_channel` (dutos retangulares laminares pelo ajuste de Shah e London).

## Transferência de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (escolhe laminar ou turbulento e indica a correlação), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` e `ntu_for` (as relações de eficácia-NTU para contracorrente, paralelo, casco e tubos, correntes cruzadas e um único fluxo variável) e `hx_size` (o tamanho UA que uma carga exige; informa quanto é possível quando a carga não pode ser atendida).

## Peças sob pressão

`allowable_stress` (escoamento dividido por um fator de segurança), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pelo critério da tensão circunferencial ou de cisalhamento) e `wall_sphere`. São margens de livro-texto, **não um cálculo de norma para vasos de pressão**: sem sobrespessura de corrosão, eficiência de junta ou fatores de norma.

## Dinâmica dos gases

`isentropic` (as razões em um número de Mach), `mach_from_area`, `choked_flow`, `throat_area` e `exit_mach`, para um gás perfeito sem atrito, calor ou choques.

## Verificar o resultado

`check_stress`, `check_thermal` e `check_flow` executam os próprios solvers de tensão, condução e escoamento do PartCraft sobre uma peça gerada pelo script e leem a tensão e o deslocamento máximos, as temperaturas e o fluxo de calor, e a permeabilidade de uma rede de canais. Não alteram nada nos solvers. As verificações de tensão e temperatura usam voxels, então uma face curva vira uma escada, e a tensão em um canto interno vivo ou sob uma carga pontual depende do tamanho do voxel.
