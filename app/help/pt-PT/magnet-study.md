---
title: Estudo magnético de um esboço
summary: Transforme os perfis fechados dos esboços num modelo magnético plano (ferro, ímanes, bobinas), veja o campo e leia a força e o binário num corpo.
keywords: íman, magnético, magnetostática, campo, densidade de fluxo, força, binário, bobina, culatra, ferro, curva B-H, íman permanente, atuador, motor, solenoide, maxwell
from: 604efc3b
---

Use {{ui:Mais}} na barra de Operações › {{ui:Estudo de íman de esboços…}} numa peça que tenha esboços. Cada forma fechada nos esboços que marcar é uma região de um modelo plano; o estudo calcula o campo magnético B, a força e o binário num corpo escolhido.

## Passos

1. Desenhe os corpos como formas fechadas em esboços: uma culatra de ferro, um íman, uma bobina. Os corpos que se tocam partilham uma aresta, por isso coloque-os em esboços diferentes; os corpos separados, ou que estão um dentro do outro (uma janela numa culatra), podem partilhar um. Mantenha os esboços no mesmo plano.
2. Abra o estudo e marque os esboços a usar. Cada perfil fechado recebe uma linha, numerada. Indique o que é: {{ui:Ar}}, {{ui:Ferro}} (uma permeabilidade, ou uma curva B–H introduzida em pares de B, em tesla, e H, em A/m), um {{ui:Íman permanente}} (Br em tesla, a direção, como ângulo em relação ao eixo x do esboço, e a permeabilidade de recuo) ou uma {{ui:Bobina}} (a corrente total através do perfil, espiras vezes amperes; o sinal indica o sentido).
3. Marque {{ui:Força e binário neste corpo}} nos corpos em que os quer. Indique a profundidade da peça a partir do esboço.
4. Escolha a malha e o ar à volta do modelo e depois {{ui:Executar}}.

## O que deve ver

- A densidade de fluxo |B| sobre o modelo, do azul-escuro (baixo) ao vermelho (alto), com os perfis numerados.
- O campo mais forte e onde está, o número de triângulos e, para cada corpo marcado, a força segundo x e y e o binário em torno do seu centro, para a profundidade indicada.
- {{ui:Guardar resultados (CSV)}} escreve os números.

## Bom saber

- É um modelo plano e estacionário: tudo é por metro de profundidade, sem correntes de Foucault nem histerese, e um íman é uma reta de recuo (não pode ser desmagnetizado).
- O modelo fica numa caixa de ar cuja aresta é uma parede. Compare dois tamanhos da caixa de ar e as malhas Normal e Fina: uma força obtida a partir do campo à volta de um corpo só é tão boa como a malha aí.
- O ferro apenas com uma permeabilidade nunca satura. Quando o campo passa 2 T, o estudo assinala um ⚠ na lista de Problemas: dê ao ferro uma curva B–H. Os números de uma linha nova são exemplos (ferro μr 2000, um íman de 1.2 T), não a ficha técnica de um material.
- Um corpo precisa de espaço à volta para receber a força: se outro corpo estiver demasiado perto, o estudo indica-o.
- Uma ajuda para desenho, não uma aprovação de engenharia.

## A seguir

- [Campos magnéticos em 2D (tutorial)](topic:magnetic-fields-2d)
