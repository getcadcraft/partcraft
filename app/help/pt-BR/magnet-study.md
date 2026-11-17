---
title: Estudo magnético de um esboço
summary: Transforme os perfis fechados dos seus esboços em um modelo magnético plano (ferro, ímãs, bobinas), veja o campo e leia a força e o torque em um corpo.
keywords: ímã, magnético, magnetostático, campo, densidade de fluxo, força, torque, bobina, culatra, ferro, curva B-H, ímã permanente, atuador, motor, solenoide, maxwell
from: 604efc3b
---

Use {{ui:More}} na barra de ferramentas Recursos › {{ui:Magnet study of sketches…}} em uma peça que tenha esboços. Cada forma fechada nos esboços que você marcar é uma região de um modelo plano; o estudo calcula o campo magnético B, a força e o torque em um corpo que você escolher.

## Passos

1. Desenhe os corpos como formas fechadas em esboços: uma culatra de ferro, um ímã, uma bobina. Corpos que se tocam compartilham uma aresta, então coloque-os em esboços diferentes; corpos separados, ou um dentro do outro (uma janela em uma culatra), podem ficar no mesmo esboço. Mantenha os esboços no mesmo plano.
2. Abra o estudo e marque os esboços a usar. Cada perfil fechado ganha uma linha, numerada. Diga o que ele é: {{ui:Air}}, {{ui:Iron}} (uma permeabilidade, ou uma curva B–H digitada como pares de B em tesla e H em A/m), um {{ui:Permanent magnet}} (Br em tesla, sua direção como ângulo a partir do eixo x do esboço, e sua permeabilidade de recuo) ou uma {{ui:Coil}} (a corrente total através do seu perfil, espiras vezes ampères; o sinal indica em que sentido ela circula).
3. Marque {{ui:Force and torque on this body}} para os corpos em que você os quer. Informe a profundidade da peça para fora do esboço.
4. Escolha a malha e o ar em volta do modelo, depois {{ui:Run}}.

## O que você deve ver

- A densidade de fluxo |B| sobre o modelo, do azul-escuro (baixa) ao vermelho (alta), com os perfis numerados.
- O campo mais forte e onde ele está, o número de triângulos e, para cada corpo que você marcou, a força em x e em y e o torque em torno do centro dele, para a profundidade que você informou.
- {{ui:Save results (CSV)}} grava os números.

## Bom saber

- É um modelo plano e estável: tudo é por metro de profundidade, sem correntes parasitas nem histerese, e um ímã é uma reta de recuo (não pode ser desmagnetizado).
- O modelo fica em uma caixa de ar cuja borda é uma parede. Compare dois tamanhos da caixa de ar e as malhas Normal e Fina: uma força calculada a partir do campo em volta de um corpo só é tão boa quanto a malha ali.
- Ferro apenas com permeabilidade nunca satura. Quando o campo passa de 2 T, o estudo mostra um ⚠ na lista de Problemas: dê ao ferro uma curva B–H. Os números de uma linha nova são exemplos (ferro μr 2000, um ímã de 1.2 T), não dados de uma ficha técnica de material.
- Um corpo precisa de espaço ao redor para receber a força: se outro corpo estiver perto demais, o estudo avisa.
- É uma ferramenta de apoio ao desenho, não uma aprovação de engenharia.

## Próximo

- [Campos magnéticos em 2-D (tutorial)](topic:magnetic-fields-2d)
