---
title: Estudo magnético dun esbozo
summary: Converta os perfís pechados dos seus esbozos nun modelo magnético plano (ferro, imáns, bobinas), vexa o campo, e lea a forza e o par sobre un corpo.
keywords: imán, magnético, magnetostático, campo, densidade de fluxo, forza, par, bobina, culatra, ferro, curva B-H, imán permanente, actuador, motor, solenoide, maxwell
from: 604efc3b
---

Use {{ui:More}} na barra de Elementos › {{ui:Magnet study of sketches…}} sobre unha peza que teña esbozos. Cada forma pechada dos esbozos que marque é unha rexión dun modelo plano; o estudo calcula o campo magnético B, a forza e o par sobre un corpo que escolla.

## Pasos

1. Debuxe os corpos como formas pechadas en esbozos: unha culatra de ferro, un imán, unha bobina. Os corpos que se tocan comparten unha aresta, así que poñaos en esbozos diferentes; os corpos separados, ou que están un dentro doutro (unha xanela nunha culatra), poden compartir un. Manteña os esbozos no mesmo plano.
2. Abra o estudo e marque os esbozos que vai usar. Cada perfil pechado recibe unha fila, numerada. Diga o que é: {{ui:Air}}, {{ui:Iron}} (unha permeabilidade, ou unha curva B–H escrita como pares de B en tesla e H en A/m), un {{ui:Permanent magnet}} (Br en tesla, a súa dirección como ángulo desde o eixo x do esbozo, e a súa permeabilidade de recuo) ou unha {{ui:Coil}} (a corrente total que atravesa o seu perfil, voltas por amperios; o signo indica en que sentido circula).
3. Marque {{ui:Force and torque on this body}} para os corpos que queira. Indique a profundidade da peza fóra do esbozo.
4. Escolla a malla e o aire ao redor do modelo, e despois {{ui:Run}}.

## O que debería ver

- A densidade de fluxo |B| sobre o modelo, de azul escuro (baixa) a vermello (alta), cos perfís numerados.
- O campo máis forte e onde está, o número de triángulos, e para cada corpo marcado a forza en x e en y e o par ao redor do seu centro, para a profundidade que indicou.
- {{ui:Save results (CSV)}} escribe os números.

## Cousas que convén saber

- É un modelo plano e estacionario: todo está por metro de profundidade, sen correntes de Foucault nin histérese, e un imán é unha recta de recuo recta (non se pode desmagnetizar).
- O modelo está nunha caixa de aire cuxa aresta é unha parede. Compare dous tamaños da caixa de aire, e as mallas Normal e Fina: unha forza calculada a partir do campo ao redor dun corpo só é tan boa como a malla alí.
- O ferro só con permeabilidade nunca se satura. Cando o campo supera 2 T, o estudo pon un ⚠ na lista de Problemas: dálle ao ferro unha curva B–H. Os números dunha fila nova son exemplos (ferro μr 2000, un imán de 1,2 T), non datos dunha ficha técnica de material.
- Un corpo necesita espazo ao seu redor para recibir a forza: se outro corpo está demasiado preto, o estudo infórmao.
- É unha axuda para o debuxo, non unha aprobación de enxeñaría.

## Seguinte

- [Campos magnéticos en 2-D (tutorial)](topic:magnetic-fields-2d)
