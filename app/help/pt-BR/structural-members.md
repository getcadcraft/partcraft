---
title: Quadros com perfis de aço
summary: Coloque perfis de aço ao longo das linhas de um ou mais esboços para formar um quadro soldado: cantos em meia-esquadria ou de topo, barras cortadas para encaixar onde se encontram, tampas de extremidade, chapas de ligação e uma lista de corte com comprimentos e ângulos das extremidades.
keywords: estrutura soldada, perfil estrutural, quadro, quadro de aço, tubo, tubo quadrado, hss, rhs, shs, tubo redondo, chs, perfil de abas largas, perfil I, w, ipe, hea, heb, perfil U, cantoneira, meia-esquadria, topo, rebaixo, tampa de extremidade, chapa de ligação, lista de corte
from: 59071e5a
---

Um **Perfil estrutural** coloca um perfil de aço ao longo de cada linha dos esboços escolhidos. Desenhe o quadro como linhas (cada linha é uma barra), depois escolha o perfil: as barras são construídas, seus cantos aparados e estendidos, e uma lista de corte informa o comprimento de cada peça e o ângulo do corte.

## Fazer um quadro

1. Desenhe o quadro como linhas em um esboço, por exemplo um retângulo no plano superior. Linhas marcadas como construção ficam de fora.
2. Com o esboço selecionado, escolha {{ui:Mais}} › {{ui:Perfil estrutural}}. Cada linha do esboço recebe uma barra.
3. No painel, escolha a **Família** e o **Tamanho** do perfil. As famílias são as tabelas AISC (W, S, C, L, tubos HSS, Tubo) e EN 10365 (IPE, HEA, HEB, UPN).

### Um quadro em 3D

Linhas de vários esboços formam um quadro: um retângulo superior esboçado em um plano acima, e as pernas esboçadas em planos que ficam em pé, se encontram pelas extremidades em 3D. Em **Ao longo das linhas de** no painel, marque cada esboço cujas linhas as barras seguem. Extremidades que se encontram a menos de um micrômetro são unidas.

## Definir o perfil na sua linha

- **Girar (°)** gira o perfil em torno da sua linha. Uma viga fica em pé com sua altura para cima (em uma barra vertical, a altura aponta para a frente).
- **Na linha** escolhe qual ponto do perfil fica sobre a linha: o centro, ou um canto ou o meio de um lado do contorno do perfil. "Meio inferior" coloca um quadro sobre o plano do esboço, em vez de atravessá-lo.

## Cantos e junções

| Onde as barras se encontram | O que acontece |
|---|---|
| Duas barras ponta a ponta, **Cantos: Meia-esquadria** | As duas são cortadas no plano a meio caminho entre elas, como uma moldura de quadro |
| Duas barras ponta a ponta, **Cantos: Topo** | A primeira segue até a face distante da segunda; a segunda é cortada reta na face próxima da primeira |
| Uma barra termina no meio de outra (um T) | Ela é cortada para encostar na parte externa da outra barra |
| Três ou mais terminam em um ponto | A primeira segue reta passando pelas outras; as outras são cortadas para encostar nela |

A primeira barra é aquela cuja linha vem primeiro: as linhas mantêm a ordem em que foram desenhadas, esboço por esboço, na ordem em que os esboços foram marcados.

## Tampas de extremidade e chapas de ligação

- **Tampas de extremidade** fecham cada extremidade livre com uma placa do contorno do perfil, com a espessura que você define, por fora da extremidade.
- **Chapas de ligação** colocam uma placa triangular em cada canto onde duas barras se encontram em ângulo: **Tamanho da chapa de ligação** ao longo de cada barra a partir do canto, **Espessura da chapa de ligação** através, centrada no plano do canto.

## A lista de corte

O painel lista cada peça, com as peças idênticas agrupadas: o perfil, o comprimento (ponta longa a ponta longa, como você marcaria para a serra), como cada extremidade é cortada (reta, em um ângulo em relação à reta, ou cortada para encaixar) e quais barras elas são. Tampas de extremidade e chapas de ligação aparecem com seus tamanhos. {{ui:Salvar a lista de corte (CSV)}} a salva para uma planilha.

Uma barra cortada para encaixar em um tubo de cantos arredondados avança um pouco no raio do canto desse tubo, então seu comprimento de ponta longa é alguns milímetros maior que a distância entre as faces.

## Limites

- As barras seguem apenas linhas retas; arcos e splines no esboço ficam de fora.
- As junções são cortadas, não soldadas: nenhum cordão de solda é desenhado, e o quadro é um sólido único.
- Os perfis são desenhados a partir das dimensões das tabelas: perfis W com seu filete de raiz, perfis S e U com abas paralelas, tubos com raios de canto; furos, preparações de extremidade e folgas de solda não são feitos para você.
- Os perfis estruturais são construídos pelo kernel de malha. Com o kernel exato ativado (somente desenvolvedores), eles avisam e não são construídos.
