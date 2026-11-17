---
title: Estruturas a partir de perfis de aço
summary: Colocar perfis de aço ao longo das linhas de um ou mais esboços para criar uma estrutura soldada: cantos a meia-esquadria ou de topo, barras cortadas à medida onde se encontram, tampas de extremidade, cartelas e uma lista de corte com comprimentos e ângulos das extremidades.
keywords: construção soldada, perfil estrutural, estrutura, estrutura de aço, tubo, tubo quadrado, hss, rhs, shs, tubo redondo, chs, perfil de abas largas, viga em I, w beam, ipe, hea, heb, canal, upn, cantoneira, meia-esquadria, mitra, junta de topo, recorte, tampa de extremidade, cartela, lista de corte
from: 59071e5a
---

Um **Perfil estrutural** coloca um perfil de aço ao longo de cada linha dos esboços que escolher. Desenhe a estrutura como linhas (cada linha é uma barra) e depois escolha o perfil: as barras são construídas, os seus cantos aparados e prolongados, e uma lista de corte indica o comprimento de cada peça a cortar e com que ângulo.

## Criar uma estrutura

1. Desenhar a estrutura como linhas num esboço, por exemplo um retângulo no plano superior. As linhas marcadas como construção ficam de fora.
2. Com o esboço selecionado, escolher {{ui:Mais}} › {{ui:Perfil estrutural}}. Cada linha do esboço recebe uma barra.
3. No painel, escolher a **Família** e o **Formato** do perfil. As famílias são as tabelas AISC (W, S, C, L, tubos HSS, tubo) e EN 10365 (IPE, HEA, HEB, UPN).

### Uma estrutura em 3D

As linhas de vários esboços formam uma só estrutura: um retângulo superior desenhado num plano acima, e os pés desenhados em planos verticais, encontram-se pelas extremidades em 3D. Em **Ao longo das linhas de** no painel, marque cada esboço cujas linhas as barras seguem. As extremidades que se encontram a menos de um micrómetro ficam unidas.

## Definir o perfil sobre a sua linha

- **Rodar (°)** roda o perfil em torno da sua linha. Uma viga fica com a altura na vertical (numa barra vertical, a altura aponta para a frente).
- **Sobre a linha** escolhe qual o ponto do perfil que fica sobre a linha: o centro, ou um canto ou o meio de um lado do contorno do perfil. « Meio inferior » coloca a estrutura por cima do plano do esboço, e não a atravessar.

## Cantos e junções

| Onde as barras se encontram | O que acontece |
|---|---|
| Duas barras ponta a ponta, **Cantos: Meia-esquadria** | Ambas são cortadas no plano a meio caminho entre elas, como uma moldura |
| Duas barras ponta a ponta, **Cantos: Topo** | A primeira barra prolonga-se até à face distante da segunda; a segunda é cortada a esquadro na face próxima da primeira |
| Uma barra termina no meio de outra (um T) | É cortada para encaixar contra o exterior da outra barra |
| Três ou mais terminam num ponto | A primeira prolonga-se a esquadro para além das outras; as outras são cortadas para encaixar contra ela |

A primeira barra é a que tem a linha que vem primeiro: as linhas mantêm a ordem em que foram desenhadas, esboço a esboço, pela ordem em que os esboços foram marcados.

## Tampas de extremidade e cartelas

- **Tampas de extremidade** fecham cada extremidade livre com uma chapa com o contorno do perfil, com a espessura que definir, para lá da extremidade.
- **Cartelas** colocam uma chapa triangular em cada canto onde duas barras se encontram em ângulo: **Dimensão da cartela** ao longo de cada barra a partir do canto, **Espessura da cartela** transversalmente, centrada no plano do canto.

## A lista de corte

O painel lista cada peça, com as peças iguais agrupadas: o perfil, o comprimento (ponto longo a ponto longo, como se marcaria para a serra), como cada extremidade é cortada (a esquadro, com um ângulo em relação ao esquadro, ou cortada para encaixar) e a que barras pertencem. As tampas de extremidade e as cartelas aparecem na lista com as suas dimensões. {{ui:Guardar a lista de corte (CSV)}} guarda-a para uma folha de cálculo.

Uma barra cortada para encaixar num tubo de cantos arredondados entra um pouco no raio de canto desse tubo, pelo que o seu comprimento de ponto longo é alguns milímetros superior ao vão entre as faces.

## Limitações

- As barras seguem apenas linhas retas; arcos e splines no esboço ficam de fora.
- As junções são cortadas, não soldadas: não são desenhados cordões de soldadura, e a estrutura é um só sólido.
- Os perfis são desenhados a partir das dimensões da tabela: perfis W com o seu boleado de raiz, perfis S e canais com abas paralelas, tubos com raios de canto; furos, preparações das extremidades e folgas de soldadura não são feitos por si.
- Os perfis estruturais são construídos pelo kernel de malha. Com o kernel exato ativo (apenas programadores), indicam-no e não são construídos.
