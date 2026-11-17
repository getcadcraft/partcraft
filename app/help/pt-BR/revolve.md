---
title: Revolucionar uma peça torneada
summary: Esboce meio perfil ao lado de uma linha de centro, revolucione-o até formar uma peça redonda, escolha o eixo e o ângulo, e use um corte por revolução para ranhuras.
keywords: revolucionar, saliência por revolução, corte por revolução, peça torneada, torno, eixo, linha de centro, ranhura, ângulo, corte rápido
from: 593b6929
---

{{ui:Revolução}} gira um perfil em torno de um eixo, como uma peça feita no torno: eixos, polias, flanges, botões. {{ui:Corte por revolução}} (no menu {{ui:Mais}} do grupo Recursos) gira um perfil para remover material, para ranhuras e rebaixos.

## Revolucionar um eixo escalonado

1. Esboce no **Plano Frontal**.
2. Pressione {{key:N}} para {{ui:Linha de centro}}. Comece na origem e clique em um ponto reto para a direita, por exemplo a 100 mm. Este é o eixo. Ele fica tracejado: geometria de construção não faz parte do perfil.
3. Pressione {{key:L}} para Linha. Desenhe o **meio** perfil acima da linha de centro como um laço fechado: comece na linha de centro, suba, avance, volte à linha de centro e siga por ela até o início. As pontas precisam se encontrar: o laço precisa estar fechado.
4. Cote os raios (alturas acima da linha de centro) e os comprimentos. Uma altura de 10 acima da linha de centro gera um diâmetro de 20.
5. Escolha {{ui:Sair}}.
6. Escolha {{ui:Revolução}}. O eixo aparece, com uma volta completa.

O perfil deve ficar de um lado do eixo. Se cruzar: "O perfil cruza o eixo. Mantenha-o de um lado da linha de centro." Uma aresta do perfil pode estar sobre o eixo.

## Configurações

| Configuração | O que faz | Padrão |
|---|---|---|
| **Operação** | Saliência (adiciona material), Corte (remove material), Interseção (mantém a sobreposição) ou Novo corpo | Saliência para {{ui:Revolução}}, Corte para {{ui:Mais}} › {{ui:Corte por revolução}} |
| **Ângulo (°)** | Quanto girar, de um valor pouco acima de 0 até 360 | 360 |
| **Eixo** | A primeira linha de centro, ou qualquer linha ou linha de centro do esboço, listada como "Linha de centro 1 (l1)" ou "Linha 3 (l3)" | Primeira linha de centro |

Um ângulo parcial gera uma cunha, girada a partir do plano do esboço em um sentido.

Se o esboço não tiver linha de centro e você deixar **Eixo** em Primeira linha de centro: "Desenhe uma linha de centro (uma linha de construção) no esboço para revolucionar em torno dela." Você também pode escolher uma linha sólida do perfil como eixo.

## Cortar uma ranhura

1. Com o eixo criado, abra um novo esboço no **Plano Frontal** (o mesmo plano do esboço do eixo).
2. Desenhe uma linha de centro sobre o mesmo eixo: comece na origem e mantenha-a nivelada para que ganhe um H, ou digite-a com **Adicionar por coordenadas** (por exemplo de `0, 0` até `100, 0`). Um novo esboço não encaixa nas linhas de outro esboço.
3. Desenhe um pequeno retângulo fechado que sobreponha a borda do eixo onde a ranhura vai.
4. Escolha {{ui:Sair}}, depois {{ui:Mais}} › {{ui:Corte por revolução}}.

## Faces revolucionadas em montagens

Uma revolução tem um eixo que outros recursos e montagens podem usar:

- uma **Matriz circular** usa o eixo da última revolução por padrão (veja [Recursos de matriz e espelhamento](topic:patterns-mirror));
- em uma montagem, uma junta entre faces feitas por revoluções começa como junta **de revolução**, e **Centralizar em** oferece "Eixo de Revolve1" (veja [Criar uma montagem](topic:build-assembly)).

## Curvas verdadeiras e facetas

O PartCraft cria uma revolução com o kernel de malha (o indicador da barra de status diz "Kernel de malha"): formas redondas são facetas planas, 64 por volta por padrão, e os volumes ficam um pouco abaixo do valor verdadeiro (cerca de 0.16 % com 64). A vista e as exportações STL, 3MF e STEP são feitas dessas facetas: defina **Curvas** (clique em um espaço vazio e depois no painel da direita) como Fina (128) ou Muito fina (256) para faces mais lisas. Cilindros, cones e toros verdadeiros precisam de um kernel exato: ainda não implementados nesta versão. Veja [O kernel de malha](topic:solid-kernels).
