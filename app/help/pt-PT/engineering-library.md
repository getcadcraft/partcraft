---
title: A biblioteca de engenharia
summary: Fórmulas de manuais como scripts legíveis, em unidades SI, com cada resultado e a sua fonte: escoamento em tubos e canais, transferência de calor e permutadores, peças sob pressão, dinâmica dos gases, propriedades da água e do ar, materiais, e unidades verificadas. Para que serve cada uma e onde deixa de servir.
keywords: engenharia, biblioteca, unidades, Darcy-Weisbach, Colebrook, Reynolds, fator de atrito, Dittus-Boelter, Gnielinski, NTU, eficácia, LMTD, aleta, Barlow, Lamé, bocal, isentrópico, Mach, escoamento bloqueado, água, ar, propriedades, material, fontes
from: 786ef967
---

A biblioteca de engenharia é um conjunto de scripts na biblioteca da área de trabalho Script (`craftlib/eng`). Cada um é uma função que se lê de cima a baixo, com um cabeçalho que indica o seu **método**, as suas **unidades**, os seus **limites**, as suas **referências** e uma **verificação** com um exemplo resolvido. Usam unidades SI em todo o lado e devolvem grandezas que levam uma **unidade** e uma **fonte**, para que uma folha de dados possa indicar de onde vem cada número.

## Unidades verificadas

`to_si(10, 'bar', 'Pa')` converte um valor e recusa uma unidade que meça outra coisa (um comprimento quando se espera uma pressão). `from_si`, `unit_convert(1, 'bar', 'psi')` e `unit_kind('W/(m K)')` (« condutividade térmica ») funcionam da mesma forma. `temp_k(25, 'C')` e `temp_from_k` convertem temperaturas, que têm um deslocamento.

## Propriedades

- `fluid('water', T)` e `fluid('air', T, p)`: massa volúmica, viscosidade, condutividade, calor específico, número de Prandtl. Água de 0 a 100 °C, ar de 250 a 600 K; fora desse intervalo, para em vez de extrapolar.
- `material('ss304')`: módulo de Young, coeficiente de Poisson, massa volúmica, tensão de cedência, condutividade, calor específico, dilatação: valores à temperatura ambiente das mesmas folhas de dados que a Simulação. Um projeto real usa os valores certificados do fornecedor. As curvas de temperatura ainda não estão implementadas.

## Escoamento em tubos e canais

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar e depois a equação de Colebrook para o escoamento turbulento; o intervalo de 2300 a 4000 não tem uma fórmula fiável, e o programa diz isso), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubo redondo, tudo de uma vez) e `rect_channel` (condutas retangulares laminares pelo ajuste de Shah e London).

## Transferência de calor

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (escolhe o laminar ou o turbulento e indica a correlação), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` e `ntu_for` (as relações de eficácia-NTU para contracorrente, correntes paralelas, carcaça e tubos, correntes cruzadas e uma única corrente variável) e `hx_size` (o tamanho UA que uma carga térmica exige; indica quanto é possível quando a carga não pode ser cumprida).

## Peças sob pressão

`allowable_stress` (cedência a dividir por um coeficiente de segurança), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pelo critério da tensão circunferencial ou de corte) e `wall_sphere`. São margens de manual, **não um cálculo de um código de vasos de pressão**: sem margem para corrosão, eficiência de junta ou fatores de código.

## Dinâmica dos gases

`isentropic` (as razões a um número de Mach), `mach_from_area`, `choked_flow`, `throat_area` e `exit_mach`, para um gás perfeito sem atrito, calor nem choques.

## Verificar o resultado

`check_stress`, `check_thermal` e `check_flow` executam os próprios resolvedores de tensão, condução e escoamento do PartCraft sobre uma peça gerada a partir do script, e leem a tensão e o deslocamento máximos, as temperaturas e o fluxo de calor, e a permeabilidade de uma rede de canais. Não alteram nada nos resolvedores. As verificações de tensão e de temperatura usam voxels, pelo que uma face curva é uma escada, e a tensão num canto interior vivo ou sob uma carga pontual depende do tamanho do voxel.
