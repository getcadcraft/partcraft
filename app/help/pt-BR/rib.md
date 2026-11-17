---
title: Nervuras e chapas de ligação
summary: Reforce uma peça com uma nervura desenhada como uma linha: ela preenche da linha até as paredes, com uma espessura definida através do plano do esboço, do lado que você escolher.
keywords: nervura, chapa de ligação, alma, enrijecedor, escora, suporte, apoio de canto, parede fina, reforçar
from: 5c218881
---

:::note
**Ainda não implementado nesta versão.** A nervura precisa de um kernel de geometria exato, que esta versão do PartCraft não tem: ela cria todas as peças com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) diz o que fazer no lugar. O restante desta página descreve como ela funciona com um kernel exato.
:::

Uma **nervura** (ou chapa de ligação) é uma parede fina que enrijece uma peça, como o triângulo dentro do canto de um suporte em L. Você desenha apenas a borda livre dela: o PartCraft preenche o espaço entre essa linha e as paredes. Ela precisa do **kernel exato** (veja [O kernel de malha](topic:solid-kernels)).

## Adicionar uma nervura

1. Crie um plano no meio do lugar onde a nervura vai (para um suporte em L de 40 de profundidade, um plano 20 à frente do seu esboço: veja [Planos, eixos e pontos de referência](topic:reference-geometry)).
2. Esboce nele **uma linha** de parede a parede, ou algumas linhas em sequência para uma borda de nervura dobrada. A linha pode parar antes das paredes: as pontas são prolongadas até encontrá-las.
3. Selecione o esboço e escolha {{ui:Mais}} › {{ui:Nervura}}.

A nervura preenche da linha até as paredes, do lado voltado para o meio da peça, então uma chapa de ligação cai no canto interno. Se esse lado estiver aberto e o outro fechado, o PartCraft o inverte para você e informa isso.

## Configurações

- **Espessura (mm)** é a espessura da nervura através do plano do esboço. Ela pode ser controlada por um parâmetro.
- **Espessura** (a escolha abaixo dela): **Centralizada no plano do esboço**, **À frente do plano** (ao longo da sua normal) ou **Atrás do plano**.
- **Inverter** preenche o outro lado da linha.

## Mensagens

- **Deste lado, a borda da nervura nunca encontra o corpo** — nada se fecha no espaço desse lado: marque ou desmarque **Inverter**, ou mova a linha para que paredes a limitem.
- **Uma nervura precisa de uma cadeia aberta de linhas no seu esboço** — o esboço tem uma forma fechada, um arco ou uma spline, ou linhas que não se unem ponta a ponta.
- **A borda da nervura passa dentro do corpo ali** — a linha está dentro do sólido; desenhe-a no espaço livre entre as paredes.
