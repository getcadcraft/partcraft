---
title: Torneado nun torno
summary: Refrente, desbaste, acabado, ranurado, separación, roscado e taladrado dunha peza torneada, a partir do perfil que a peza forma ao xirar. Ferramentas de torno, avances por volta, posts de torno e o que non foi probado.
keywords: torneado, torno, tornear, refrentado, desbaste, acabado, ranura, ranurado, separación, separar, rosca, roscado, g32, g33, g96, velocidade de corte constante, css, raio da punta, plaquita, barra, plato, diámetro, avance por volta, g71, g76
from: d8cc53b0
---

Fabricación ten sete operacións para torno. Serven para calquera peza: o que se corta é o **perfil que a peza forma ao xirar** arredor do centro do material en bruto, así que unha peza que non é redonda se torna ata a forma redonda que a sostén.

**Nada disto foi executado nun torno.** As traxectorias están comprobadas contra a xeometría polas probas; os dous posts de torno seguen os códigos documentados dos controis. Probe un programa no simulador do propio control e no aire primeiro.

## Preparación

Na lapela **Preparación**:

- **Eixo da ferramenta** é o eixo do cabezal, o Z do torno. A parte frontal da peza está en +Z; o plato suxeita o outro extremo.
- **Material en bruto**: escolla {{ui:Cilindro}}, a barra. O seu desprazamento superior é o que retira a operación de refrentado.
- **Orixe de traballo**: un centro no alto do material ou no alto do modelo pon Z0 na cara frontal, o lugar habitual.
- **Control**: {{ui:Torno tipo Fanuc (.nc)}} ou {{ui:Torno LinuxCNC (.ngc)}}. Un post de fresado rexeita un programa de torno e di iso.
- **Velocidade máxima do cabezal**: o límite ao que se mantén a velocidade de superficie.

{{ui:Máis}} na barra de Fabricación lista as sete operacións de torneado na parte superior da lapela **Operacións**. A primeira que engada trae a súa propia ferramenta: unha **plaquita de torneado** (raio da punta, ángulo da plaquita, ángulo da aresta de corte) ou unha **coitela de ranurar** (ancho, raio de esquina, ata onde chega). Cámbieas na lapela **Ferramentas**. Os avances son por volta, e a velocidade é unha velocidade de superficie en m/min que o control mantén ao cambiar o diámetro; dé a unha ferramenta unhas rpm propias para fixar a velocidade.

## As operacións

| Operación | Que fai |
|---|---|
| {{ui:Cara}} | Refrenta a fronte da barra ata a peza, dun paso de profundidade cada vez, de fóra ata pasado o centro. |
| {{ui:Desbaste}} | Pasadas ao longo de Z separadas unha **profundidade de corte**, ata o perfil máis o **material a deixar**; logo unha vez ao longo do perfil para quitar os escalóns. Un val entre dous resaltos entra cun mergullo dunha profundidade de corte. |
| {{ui:Acabado}} | Unha pasada ao longo do perfil a unha fracción do avance da ferramenta. |
| {{ui:Ranura}} | Mergulla a coitela lado a lado onde pode tomar máis do límite de material que aínda queda: as ranuras que a plaquita de torneado non podía alcanzar. **De / a Z** estréchao. |
| {{ui:Separar}} | Corta a peza xusto detrás da súa cara posterior, ata un pouco pasado o centro, con picotazos se fixa un. |
| {{ui:Rosca}} | Unha rosca exterior: diámetro maior, paso, lonxitude, número de pasadas. Profundidade 0 significa 0,6134 × paso (unha rosca de 60°). Cada pasada toma a mesma área de viruta; as pasadas de axuste repiten a última. |
| {{ui:Taladrado}} | Un taladro no eixo central ata unha profundidade, con picotazos. |

## Como se mantén a ferramenta lonxe da peza

A plaquita trátase polo que é: o seu círculo de punta, e detrás del o bordo de saída, unha liña recta cuxo ángulo é 180° menos o ángulo da aresta de corte e o ángulo da plaquita. Esa forma baixa sobre o perfil en cada punto ao longo de Z, e a traxectoria é onde se detén. Así:

- **O raio da punta xa está na traxectoria.** Os posts non escriben `G41` nin `G42`; as coordenadas son o punto programado da ferramenta (a esquina do cadrado arredor da punta).
- A plaquita **non pode seguir unha parede máis inclinada có seu bordo de saída**. Unha ranura detrás dun resalto déixase en paz, e a operación de acabado di canto do perfil non pode alcanzar. Unha operación {{ui:Ranura}} o recolle.
- O material séguese ao longo de Z despois de cada corte, así que o desbaste non corta aire, o ranurado atopa o que queda, e cada operación amosa o volume que retirou e se cortou na peza.

## Límites

- **Só torneado exterior**: sen barra de mandrinar, sen ranuras ou roscas interiores, sen ranuras de cara.
- Un só cabezal, a peza suxeita en −Z. Sen subhusillo, sen ferramentas vivas, sen eixe C nin Y, sen luneta fixa nin movementos de contrapunto.
- As traxectorias son movementos rectos: as curvas son liñas curtas dentro da tolerancia (sen `G2`/`G3`), e o desbaste e o roscado escríbense pasada a pasada (sen ciclos `G71` nin `G76`).
- O roscado son pasadas rectas cun retorno recto ao final: dé á rosca unha ranura de alivio. A rosca non se amosa no material.
- O taladrado no centro non cambia o modelo do material.
- Non se comprobán o portaferramentas, a torreta nin o plato. Use ****Parar en Z**** para manter a ferramenta lonxe das mordazas.
- Os avances e as velocidades son valores de partida, como no fresado.
