---
title: Acabamento 3D: paralelo e escama
summary: Acabe toda a superfície curva do modelo com uma fresa de ponta esférica, de nariz redondo ou plana, em linhas paralelas a qualquer ângulo ou em passagens afastadas de uma distância definida, para que as cristas entre elas mantenham a altura pedida. O que os percursos garantem e o que não garantem.
keywords: acabamento 3D, acabamento, paralelo, varrimento, escama, escama constante, cúspide, fresa de ponta esférica, nariz redondo, superfície, tolerância, passo lateral, inclinação, material a deixar, cortador de queda, entalhe
from: e1587d0a
---

Duas operações na área de trabalho Manufacture cortam a **superfície inteira do modelo**, com a ferramenta mantida vertical (três eixos). Não pedem escolhas: trabalham em todo o modelo que é visível de cima. Desbaste a peça primeiro (desbaste adaptativo ou por caixa); uma passagem de acabamento sobre material não cortado avisa que cortaria fundo.

## Paralelo

Linhas retas atravessam o modelo ao **ângulo** que definir, a um **passo lateral** de distância uma da outra (uma fração do diâmetro da ferramenta). Cada linha segue a superfície: a ponta da ferramenta fica tão alta quanto tem de ficar para que nenhuma parte da fresa desça abaixo do modelo, e a linha é cortada mais finamente onde a superfície se dobra. Com **Ziguezague** ativo, a ferramenta mantém-se em baixo entre as linhas onde pode fazê-lo em segurança (verificado ao longo do movimento); caso contrário, levanta-se.

- **Tolerância**: quão longe um troço reto de uma linha pode estar da altura verdadeira da ponta (metade dela é usada como limite no meio de cada troço). Predefinido 0.01 mm.
- **Só onde a superfície está pelo menos em … e no máximo em … (°)**: acabar apenas as áreas pouco inclinadas, ou apenas as íngremes. Onde a superfície está fora do intervalo, a linha é omitida e a ferramenta levanta-se.
- **Material a deixar**: o modelo deslocado dessa distância (a ferramenta aumentada por ela: exato para ferramentas de ponta esférica e de nariz redondo; uma ferramenta plana deixa pelo menos essa quantidade).
- **Fundo**: nada é cortado abaixo deste z.

## Escama

Passagens que mantêm uma distância constante sobre a superfície entre si, de modo que a crista (a escama) deixada entre duas passagens vizinhas tenha a **altura** que pedir. A distância resulta da altura e do raio da esfera: s = 2·√(2·R·h − h²); por exemplo, cerca de 0.69 mm entre passagens para uma esfera Ø6 e uma crista de 0.02 mm. Uma ferramenta de nariz redondo usa o raio do seu canto. Uma fresa de topo plana é recusada: não tem crista para dimensionar.

As passagens começam **a partir da aresta do modelo, para dentro**, ou **a partir do topo do modelo, para baixo**. São contornos da distância sobre a superfície (não da altura), por isso num declive ficam próximas em planta, e numa plana ficam muito afastadas. A distância é medida numa grelha sobre a superfície e tem precisão de cerca de 1 %; a altura da crista é exata onde a superfície é plana ou suavemente curva, e aproximada onde curva depressa. **Concordante** mantém o lado mais alto da superfície do lado direito da ferramenta.

## Como são os percursos

O que os testes verificam, com fórmulas fechadas ou com uma pesquisa por força bruta independente da área de corte da ferramenta:

- A altura da ponta sob a ferramenta é exata para uma ferramenta esférica, de nariz redondo e plana, em faces, arestas e cantos da malha, e nunca fica acima da altura verdadeira; nas linhas paralelas, o percurso fica dentro da tolerância, sem nenhum entalhe mais fundo do que isso.
- Os comprimentos dos percursos num plano inclinado concordam com a fórmula fechada; as passagens de escama num plano ficam à distância pedida, e a crista entre elas sai com a altura pedida.
- A simulação do material não mostra nenhum entalhe depois de uma passagem, e mostra as cristas que restam.

O que estes percursos não são: são passagens básicas de acabamento, não o conjunto do que um sistema de produção oferece.

- Não implementado: linha de nível (z constante), limpeza de cantos e em lápis, passagens radiais e em espiral, projeção de uma curva sobre a superfície, deteção de áreas planas, maquinação do material restante, verificação de colisões com o porta-ferramenta e a haste, e qualquer inclinação da ferramenta.
- O centro da ferramenta mantém-se sobre o modelo: os percursos param na aresta do modelo em vez de continuarem para fora dele, por isso uma parede vertical mesmo na aresta não é acabada até à base.
- Os contrasalientes não são vistos (a superfície é o que a ferramenta encontra de cima).
- O modelo é a malha do kernel, por isso os percursos seguem a malha (a sua tolerância de corda é cerca de 0.0002 da diagonal da peça), e não a superfície exata.
- Acabar um modelo grande com uma tolerância fina produz um programa longo, com muitos movimentos curtos. Verifique o resultado no simulador da sua máquina antes de cortar.
