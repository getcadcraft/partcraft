---
title: "Acabamento 3D: paralelo e scallop"
summary: Dê acabamento na superfície curva inteira do modelo com uma fresa de ponta esférica, de canto arredondado ou plana, em linhas paralelas em qualquer ângulo ou em passes a uma distância definida, para que as cristas entre eles mantenham a altura que você pedir. O que os caminhos garantem e o que não garantem.
keywords: acabamento 3d, acabamento, paralelo, raster, scallop, scallop constante, cúspide, ponta esférica, canto arredondado, superfície, tolerância, passo lateral, inclinação, material a deixar, drop cutter, sulcamento, colisão
from: e1587d0a
---

Duas operações em Manufatura usam a **superfície inteira do modelo** com a ferramenta mantida vertical (três eixos). Elas não pedem seleções: trabalham em todo o modelo que pode ser visto de cima. Desbaste a peça primeiro (adaptativo ou bolsão); uma passada de acabamento sobre material não usinado avisa que cortaria fundo.

## Paralelo

Linhas retas sobre o modelo no **ângulo** que você definir, separadas pelo **passo lateral** (uma fração do diâmetro da ferramenta). Cada linha segue a superfície: a ponta da ferramenta fica na altura necessária para que nenhuma parte da fresa desça abaixo do modelo, e a linha é cortada mais finamente onde a superfície se curva. Com **Zig-zag** ligado, a ferramenta permanece em contato entre as linhas onde isso pode ser feito com segurança (verificado ao longo do movimento); caso contrário, ela sobe.

- **Tolerância**: quanto um trecho reto de uma linha pode se afastar da altura real da ponta (metade dela é usada como limite no meio de cada trecho). Padrão 0.01 mm.
- **Somente onde a superfície estiver entre … e no máximo … (°)**: dê acabamento só em áreas rasas ou só em áreas íngremes. Onde a superfície estiver fora da faixa, a linha é omitida e a ferramenta sobe.
- **Material a deixar**: o modelo deslocado por essa distância (a fresa aumentada por ela: exato para ferramentas de ponta esférica e de canto arredondado; uma ferramenta plana deixa pelo menos essa quantidade).
- **Fundo**: nada é cortado abaixo deste z.

## Scallop

Passes que mantêm entre si uma distância constante sobre a superfície, para que a crista (o scallop) deixada entre dois passes vizinhos tenha a **altura** que você pedir. A distância sai da altura e do raio da ponta esférica: s = 2·√(2·R·h − h²), por exemplo cerca de 0.69 mm entre passes para uma esfera Ø6 e uma crista de 0.02 mm. Uma ferramenta de canto arredondado usa seu raio de canto. Uma fresa plana de topo é recusada: ela não tem crista para dimensionar.

Os passes começam **pela borda do modelo, para dentro** ou **pelo seu topo, para baixo**. São contornos da distância sobre a superfície (não da altura), então em uma inclinação ficam próximos em planta e em uma área plana ficam bem afastados. A distância é medida em uma grade sobre a superfície e tem precisão de cerca de 1 %; a altura da crista é exata onde a superfície é plana ou suavemente curva, e aproximada onde ela se curva rapidamente. **Concordante** mantém o lado mais alto da superfície à direita da fresa.

## Qualidade dos caminhos

O que os testes verificam, com fórmulas fechadas ou com uma busca independente por força bruta na área de contato da fresa:

- A altura da ponta sob a ferramenta é exata para uma ferramenta de ponta esférica, de canto arredondado e plana em faces, arestas e cantos da malha, e nunca fica acima da altura real; para linhas paralelas, o caminho permanece dentro da tolerância, sem sulcamento mais fundo que isso.
- Os comprimentos de caminho em um plano inclinado concordam com a fórmula fechada; os passes scallop em um plano ficam à distância pedida e a crista entre eles sai na altura pedida.
- A simulação do material não mostra sulcamento depois de um passe e mostra as cristas que restam.

O que esses caminhos não são: são passes básicos de acabamento, não o conjunto completo do que um sistema de produção oferece.

- Não implementados: contorno de nível (z constante), limpeza de cantos e de lápis, passes radiais e espirais, projeção de uma curva sobre a superfície, detecção de áreas planas, usinagem de resto, verificação de colisão do porta-ferramenta e da haste, e qualquer inclinação da ferramenta.
- O centro da ferramenta fica sobre o modelo: os caminhos param na borda do modelo em vez de passar dela, então uma parede vertical bem na borda não é acabada até o pé dela.
- Contrarrebaixos não são vistos (a superfície é o que a ferramenta encontra vindo de cima).
- O modelo é a malha do kernel, então os caminhos seguem a malha (sua tolerância de corda é cerca de 0.0002 da diagonal da peça), não a superfície exata.
- Dar acabamento a um modelo grande com tolerância fina gera um programa longo, com muitos movimentos curtos. Verifique a saída no simulador da sua máquina antes de usinar.
