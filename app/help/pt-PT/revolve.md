---
title: Revolver uma peça torneada
summary: Esboce meio perfil ao lado de uma linha de eixo, revolva-o para uma peça redonda, escolha o eixo e o ângulo, e use um corte por revolução para ranhuras.
keywords: revolução, saliência por revolução, corte por revolução, peça torneada, torno, veio, eixo, linha de eixo, ranhura, ângulo, corte de revolução
from: 593b6929
---

{{ui:Revolução}} faz girar um perfil em torno de um eixo, como uma peça feita num torno: veios, polias, flanges, manípulos. Corte por revolução (no menu {{ui:Mais}} do grupo Operações) faz girar um perfil para remover material, para ranhuras e recessos.

## Revolver um veio escalonado

1. Esboce no **Plano frontal**.
2. Prima {{key:N}} para {{ui:Linha de eixo}}. Comece na origem e clique num ponto em linha reta para a direita, por exemplo a 100 mm. Este é o eixo. Fica tracejado: a geometria de construção não faz parte do perfil.
3. Prima {{key:L}} para Linha. Desenhe o **meio** perfil acima da linha de eixo como um circuito fechado: comece na linha de eixo, suba, avance, e volte para baixo até à linha de eixo, depois ao longo dela até ao início. As extremidades têm de se encontrar: o circuito tem de estar fechado.
4. Cote os raios (alturas acima da linha de eixo) e os comprimentos. Uma altura de 10 acima da linha de eixo dá um diâmetro de 20.
5. Escolha {{ui:Sair}}.
6. Escolha {{ui:Revolução}}. O veio aparece, com uma volta completa.

O perfil tem de ficar de um só lado do eixo. Se o cruzar: "O perfil cruza o eixo. Mantenha-o de um só lado da linha de eixo." Uma aresta do perfil pode ficar sobre o eixo.

## Definições

| Definição | O que faz | Predefinido |
|---|---|---|
| **Operação** | Saliência (adicionar material), Corte (remover material), Interseção (manter a sobreposição) ou Novo corpo | Saliência para {{ui:Revolução}}, Corte para {{ui:Mais}} › {{ui:Corte por revolução}} |
| **Ângulo (°)** | Quanto girar, de pouco acima de 0 até 360 | 360 |
| **Eixo** | A primeira linha de eixo, ou qualquer linha ou linha de eixo do esboço, listada como "Linha de eixo 1 (l1)" ou "Linha 3 (l3)" | A primeira linha de eixo |

Um ângulo parcial faz uma cunha, girada a partir do plano do esboço num sentido.

Se o esboço não tiver linha de eixo e deixar **Eixo** em Primeira linha de eixo: "Desenhe uma linha de eixo (uma linha de construção) no esboço para revolver em torno dela." Também pode escolher uma linha sólida do perfil como eixo.

## Cortar uma ranhura

1. Com o veio construído, abra um novo esboço no **Plano frontal** (o mesmo plano do esboço do veio).
2. Desenhe uma linha de eixo sobre o mesmo eixo: comece-a na origem e mantenha-a nivelada para ganhar um H, ou escreva-a com **Adicionar por coordenadas** (por exemplo, de `0, 0` a `100, 0`). Um novo esboço não se pode encaixar nas linhas de outro esboço.
3. Desenhe um pequeno retângulo fechado que se sobreponha à aresta do veio onde vai a ranhura.
4. Escolha {{ui:Sair}}, depois {{ui:Mais}} › {{ui:Corte por revolução}}.

## Faces de revolução em montagens

Uma revolução tem um eixo que outras operações e montagens podem usar:

- uma matriz **Circular** usa por predefinição o eixo da última revolução (ver [Operações de matriz e espelho](topic:patterns-mirror));
- numa montagem, uma junta entre faces criadas por revoluções começa como uma junta **de revolução**, e **Centrar em** oferece "Axis of Revolve1" (ver [Construir uma montagem](topic:build-assembly)).

## Curvas verdadeiras e facetas

O PartCraft constrói uma revolução com o kernel de malha (a etiqueta da barra de estado diz "Kernel de malha"): as formas redondas são facetas planas, 64 por volta por predefinição, e os volumes ficam ligeiramente abaixo do valor verdadeiro (cerca de 0.16 % a 64). A vista e as exportações STL, 3MF e STEP são feitas dessas facetas: defina **Curvas** (clique num espaço vazio, depois no painel direito) para Fina (128) ou Muito fina (256), para superfícies mais lisas. Cilindros, cones e toros verdadeiros precisam de um kernel exato: ainda não implementado nesta versão. Veja [O kernel de malha](topic:solid-kernels).
