---
title: Nervuras e chapas de gousset
summary: Reforce uma peça com uma nervura desenhada como uma linha: preenche desde a linha até às paredes, numa espessura definida através do plano do esboço, do lado que escolher.
keywords: nervura, chapa de gousset, alma, reforço, escora, suporte, suporte de canto, parede fina, reforçar
from: 5c218881
---

:::note
**Ainda não implementado nesta versão.** A nervura precisa de um kernel de geometria exato, que esta versão do PartCraft não tem: constrói todas as peças com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) diz o que fazer em vez disso. O resto desta página descreve-a como funciona com um kernel exato.
:::

Uma **nervura** (ou chapa de gousset) é uma parede fina que reforça uma peça, como o triângulo dentro do canto de um suporte em L. Desenha apenas a sua aresta livre: o PartCraft preenche o espaço entre essa linha e as paredes. Precisa do **kernel exato** (ver [O kernel de malha](topic:solid-kernels)).

## Adicionar uma nervura

1. Crie um plano a meio do sítio onde vai a nervura (para um suporte em L com 40 de profundidade, um plano 20 à frente do seu esboço: ver [Planos, eixos e pontos de referência](topic:reference-geometry)).
2. Esboce nele **uma linha** de parede a parede, ou algumas linhas seguidas para uma aresta de nervura dobrada. A linha pode parar antes das paredes: as suas extremidades prolongam-se até as encontrarem.
3. Selecione o esboço e escolha {{ui:Mais}} › {{ui:Nervura}}.

A nervura preenche desde a linha até às paredes, do lado virado para o meio da peça, de modo que a chapa de gousset fica no canto interior. Se esse lado estiver aberto e o outro fechado, o PartCraft inverte-o por si e indica-o.

## Definições

- **Espessura (mm)** é a espessura da nervura através do plano do esboço. Pode ser controlada por um parâmetro.
- **Espessura** (a escolha abaixo): **Centrada no plano do esboço**, **À frente do plano** (ao longo da sua normal) ou **Atrás do plano**.
- **Inverter** preenche o outro lado da linha.

## Mensagens

- **Deste lado, a aresta da nervura nunca encontra o corpo** — nada fecha o espaço desse lado: marque ou desmarque **Inverter**, ou mova a linha para que as paredes a limitem.
- **Uma nervura precisa de uma cadeia aberta de linhas no seu esboço** — o esboço tem uma forma fechada, um arco ou uma spline, ou linhas que não se unem ponta com ponta.
- **A aresta da nervura passa dentro do corpo ali** — a linha está dentro do sólido; desenhe-a no espaço aberto entre as paredes.
