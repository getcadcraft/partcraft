---
title: Acabamento 3D: paralela e crista constante
summary: Acabe toda a superfície curva do modelo com fresa de ponta esférica, de ponta arredondada ou plana, em linhas paralelas em qualquer ângulo ou em passadas a uma distância fixa, para que as cristas entre elas mantenham a altura pedida. O que as trajetórias garantem e o que não garantem.
keywords: acabamento 3D, acabamento, paralela, raster, crista constante, cúspide, ponta esférica, ponta arredondada, superfície, tolerância, passo lateral, inclinação, sobremetal, cortador de queda, entalhe
from: 942d2341
---

Duas operações em Manufatura cortam **toda a superfície do modelo** com a ferramenta mantida na vertical (três eixos). Elas não pedem seleção: trabalham em todo o modelo que pode ser visto de cima. Desbaste a peça primeiro (Adaptativo ou Bolsão); um acabamento sobre material não usinado avisa que cortaria fundo.

## Paralela

Linhas retas sobre o modelo no **ângulo** definido, separadas por **passo lateral** (uma fração do diâmetro da ferramenta). Cada linha segue a superfície: a ponta da ferramenta fica na altura necessária para que nenhuma parte da fresa fique abaixo do modelo, e a linha é cortada mais finamente onde a superfície se curva. Com **Zig-zag** ativo, a ferramenta permanece em contato entre as linhas onde isso for seguro (verificado ao longo do movimento); caso contrário, ela sobe.

- **Tolerância**: quanto um trecho reto de uma linha pode se afastar da altura real da ponta (metade dela é usada como limite no meio de cada trecho). Padrão 0.01 mm.
- **Somente onde a superfície está entre … e no máximo … (°)**: usina apenas áreas rasas ou apenas íngremes. Onde a superfície estiver fora do intervalo, a linha é omitida e a ferramenta sobe.
- **Sobremetal**: o modelo deslocado por essa distância (a fresa aumentada por ela: exato para ferramentas de ponta esférica e arredondada; uma ferramenta plana deixa pelo menos essa quantidade).
- **Fundo**: nada é cortado abaixo desta altura z.

## Crista constante

Passadas que mantêm entre si uma distância constante sobre a superfície, de modo que a crista (a cúspide) deixada entre duas passadas vizinhas tenha a **altura** pedida. A distância decorre da altura e do raio da esfera: s = 2·√(2·R·h − h²); por exemplo, cerca de 0.69 mm entre passadas para uma esfera Ø6 e uma crista de 0.02 mm. Uma ferramenta de ponta arredondada usa o raio do seu canto. Uma fresa plana é recusada: não tem crista a dimensionar.

As passadas começam **pela borda do modelo, indo para dentro**, ou **pelo topo do modelo, descendo**. São curvas de igual distância sobre a superfície (não de altura); por isso, numa inclinação elas ficam próximas em planta e, num plano, bem afastadas. A distância é medida numa grade sobre a superfície e tem precisão de cerca de 1 %; a altura da crista é exata onde a superfície é plana ou suavemente curva, e aproximada onde ela se curva rapidamente. **Concordante** mantém o lado mais alto da superfície à direita da fresa.

## Quão boas são as trajetórias

O que os testes verificam, com fórmulas fechadas ou com uma busca independente por força bruta da área de contato da fresa:

- A altura da ponta sob a ferramenta é exata para uma ferramenta esférica, de ponta arredondada e plana, em faces, arestas e cantos da malha, e nunca fica acima da altura real; nas linhas paralelas, a trajetória permanece dentro da tolerância, sem entalhe mais profundo que ela.
- Os comprimentos das trajetórias num plano inclinado concordam com a fórmula fechada; as passadas de crista num plano estão na distância pedida, e a crista entre elas sai na altura pedida.
- A simulação de material bruto não mostra entalhe depois de uma passada e mostra as cristas que restam.

O que estas trajetórias não são: são passadas básicas de acabamento, e não tudo o que um sistema de produção oferece.

- Não implementado: acabamento por cota constante (waterline), limpeza com lápis e de cantos, passadas radiais e em espiral, projeção de uma curva sobre a superfície, detecção de áreas planas, verificações de colisão do porta-ferramenta e da haste. Desbaste e usinagem de sobras são operações próprias ([Desbaste 3D e usinagem de sobras](topic:rough-3d)); uma ferramenta inclinada é o [acabamento de 5 eixos](topic:multi-axis#5-axis-finishing).
- O centro da ferramenta permanece sobre o modelo: as trajetórias param na borda do modelo em vez de sair dela; por isso, uma parede vertical exatamente na borda não é acabada até o pé.
- Contrasulcos não são vistos (a superfície é o que a ferramenta encontra vindo de cima).
- O modelo é a malha do núcleo, então as trajetórias seguem a malha (sua tolerância de corda é cerca de 0.0002 da diagonal da peça), não a superfície exata.
- Acabar um modelo grande com tolerância fina gera um programa longo, com muitos movimentos curtos. Verifique a saída no simulador da sua máquina antes de usinar.
