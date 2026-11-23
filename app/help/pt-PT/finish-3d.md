---
title: Acabamento 3D: paralelo e crista constante
summary: Acabe a superfície curva do modelo inteiro com uma fresa de topo esférico, de nariz redondo ou plana, em linhas paralelas a qualquer ângulo ou em passagens a uma distância definida, para que as cristas entre elas mantenham a altura pedida. O que os percursos garantem e o que não garantem.
keywords: acabamento 3d, acabamento, paralelo, raster, crista constante, cúspide, fresa de topo esférico, fresa de nariz redondo, superfície, tolerância, passo lateral, inclinação, bruto a deixar, fresa de queda, entalhe
from: 942d2341
---

Duas operações em Fabrico cortam a **superfície inteira do modelo** com a ferramenta mantida vertical (três eixos). Não pedem seleções: trabalham em todo o modelo visível de cima. Desbaste primeiro a peça (adaptativo ou caixa); uma passagem de acabamento sobre bruto não cortado avisa que cortaria em profundidade.

## Paralela

Linhas retas sobre o modelo ao **ângulo** definido, afastadas de um **passo lateral** (uma fração do diâmetro da ferramenta). Cada linha segue a superfície: a ponta da ferramenta fica à altura necessária para que nenhuma parte da fresa desça abaixo do modelo, e a linha é cortada mais finamente onde a superfície se curva. Com **Ziguezague** ativo, a ferramenta mantém-se em baixo entre linhas sempre que o pode fazer com segurança (verificado ao longo do movimento); caso contrário, levanta-se.

- **Tolerância**: a distância a que um troço reto de uma linha pode ficar da altura real da ponta. Usa-se metade como limite no meio de cada troço. Predefinido 0,01 mm.
- **Só onde a superfície estiver pelo menos … e no máximo … (°)**: acabar apenas zonas pouco inclinadas ou apenas as inclinadas. Onde a superfície estiver fora do intervalo, a linha é omitida e a ferramenta levanta-se.
- **Bruto a deixar**: o modelo afastado dessa distância (a fresa aumentada por ela: exato para ferramentas esféricas e de nariz redondo; uma ferramenta plana deixa pelo menos essa quantidade).
- **Fundo**: nada é cortado abaixo deste z.

## Crista constante

Passagens que mantêm entre si uma distância constante sobre a superfície, de modo que a crista (a *scallop*) deixada entre duas passagens vizinhas tenha a **altura** pedida. A distância resulta da altura e do raio da esfera: s = 2·√(2·R·h − h²), por exemplo cerca de 0,69 mm entre passagens para uma esfera Ø6 e uma crista de 0,02 mm. Uma ferramenta de nariz redondo usa o raio do seu canto. Uma fresa de topo plana é recusada: não tem crista que dimensionar.

As passagens começam **na aresta do modelo, a entrar**, ou **a partir do topo, a descer**. São curvas de nível da distância sobre a superfície (não da altura), por isso numa inclinação ficam próximas em planta e numa zona plana ficam bem afastadas. A distância é medida numa malha sobre a superfície e tem uma precisão de cerca de 1 %; a altura da crista é exata onde a superfície é plana ou suavemente curva, e aproximada onde se curva depressa. **Concordante** mantém o lado mais alto da superfície à direita da fresa.

## Qualidade dos percursos

O que os testes verificam, com fórmulas fechadas ou com uma pesquisa independente por força bruta da área de corte da ferramenta:

- A altura da ponta sob a ferramenta é exata para uma ferramenta esférica, de nariz redondo e plana, em faces, arestas e cantos da malha, e nunca fica acima da altura real; nas linhas paralelas o percurso fica dentro da tolerância, sem entalhe mais fundo do que isso.
- Os comprimentos dos percursos num plano inclinado coincidem com a fórmula fechada; as passagens de crista num plano ficam à distância pedida e a crista entre elas sai à altura pedida.
- A simulação do bruto não mostra entalhe após uma passagem e mostra as cristas que restam.

O que estes percursos não são: são passagens básicas de acabamento, e não a totalidade do que um sistema de produção oferece.

- Ainda não implementado: acabamento por linha de água (z constante), limpeza de cantos e a lápis, passagens radiais e em espiral, projeção de uma curva sobre a superfície, deteção de zonas planas, verificação de colisões do porta-ferramentas e da haste. O desbaste e a maquinação de restos são operações próprias ([Desbaste 3D e maquinação de restos](topic:rough-3d)); uma ferramenta inclinada é tratada no [acabamento de 5 eixos](topic:multi-axis#5-axis-finishing).
- O centro da ferramenta mantém-se sobre o modelo: os percursos param na aresta do modelo em vez de a ultrapassar, pelo que uma parede vertical mesmo na aresta não fica acabada até à base.
- Os recortes por baixo (undercuts) não são vistos, porque a superfície é aquilo que a ferramenta encontra de cima.
- O modelo é a malha do núcleo, pelo que os percursos seguem a malha (a sua tolerância de corda é de cerca de 0,0002 da diagonal da peça), e não a superfície exata.
- Acabar um modelo grande com uma tolerância fina gera um programa longo com muitos movimentos curtos. Verifique o resultado no simulador da sua máquina antes de cortar.
