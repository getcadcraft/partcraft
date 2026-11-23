---
title: Mecanizado de 4 e 5 eixos
summary: Indique a PartCraft que eixos rotativos ten a máquina, incline a ferramenta para calquera operación ordinaria, acabe unha superficie cunha fresa de punta esférica que se inclina ao cortar, ou xire a peza baixo a ferramenta nun 4º eixo. O que se escribe no G-code e o que non está probado.
keywords: 5 eixos, cinco eixos, 4 eixos, cuarto eixo, multieixo, multi eixo, 3+2, indexado, posicional, inclinación, ferramenta inclinada, rotativo, trunnion, mesa, cabezal, eixo a, eixo b, eixo c, tcp, rtcp, punto central da ferramenta, g43.4, tempo inverso, g93, cinemática, pivote, swarf, ángulo de avance
from: c4f1c491
---

Fabricación pode manter a ferramenta nun ángulo, e pode mover os eixos rotativos mentres corta. Tres cousas o fan, desde a máis simple á máis avanzada.

**Nada disto foi executado nunha máquina.** As traxectorias están comprobadas contra a xeometría polas probas e o G-code lese de volta, pero os posts integrados seguen os códigos documentados dos controis, non unha máquina concreta. Probe un programa no simulador do propio control e no aire antes de que toque o metal.

## Os eixos rotativos da máquina

Na lapela **Preparación**, {{ui:Eixos rotativos}} indica que ten a máquina:

| Opción | A máquina |
|---|---|
| Ningún (3 eixos) | Unha fresadora simple. Calquera operación que precise a ferramenta inclinada avisa, e o post non a escribe. |
| A (xira arredor de X) | Un eixo rotativo ao longo de X: unha mesa de 4º eixo ou un indexador. A ferramenta só pode inclinarse no plano Y–Z. |
| B (xira arredor de Y) | Un eixo rotativo ao longo de Y. A ferramenta só pode inclinarse no plano X–Z. |
| A e C | Un eixo de inclinación arredor de X montado sobre, ou que porta, un xiro arredor de Z: unha mesa basculante ou un cabezal. |
| B e C | O mesmo, con inclinación arredor de Y. |

Despois:

- **Montado en**: {{ui:A mesa (a peza xira)}} ou {{ui:O cabezal (a ferramenta xira)}}. Unha mesa xira no sentido contrario para levar a mesma cara baixo a ferramenta, así que o signo de cada ángulo depende desta opción.
- **O control mantén a punta da ferramenta na traxectoria (TCP)**: con activado, X Y Z do programa son a punta da ferramenta nas coordenadas propias da peza e o control fai o resto (os posts integrados estilo Fanuc e LinuxCNC escriben `G43.4` para a lonxitude da ferramenta). Desactivado, nunha máquina de mesa, PartCraft escribe X Y Z como a mesa xirada leva a peza, arredor do **centro de rotación** que dea (en coordenadas de traballo; 0, 0, 0 cando a orixe de traballo está no centro). Unha máquina de cabezal precisa TCP activado: sen el, o programa necesitaría a lonxitude de pivote da máquina, que PartCraft non coñece.
- **Límite de inclinación**: canto se separa o eixo de inclinación.

As máquinas difiren en cal é o sentido positivo. Se un eixo xira ao revés na súa, cambie o signo nunha copia do post ([Post-procesadores editables](topic:post-processors)).

## Unha ferramenta inclinada para unha operación ordinaria

Cada operación de fresado (cara, cavidade, adaptativo, contorno, taladrado, chaflán, paralela, scallop, {{ui:Desbaste 3D}}, {{ui:Restos}}) ten unha **Inclinación da ferramenta** e **Inclinar cara a**: a dirección da ferramenta só para esa operación, medida desde o eixo de ferramenta da preparación. Isto é mecanizado 3+2: os eixos rotativos van a unha posición e quédanse aí mentres tres eixos cortan.

- Escriba os dous ángulos, ou prema en {{ui:Ferramenta perpendicular a unha cara}} e prema nunha cara plana: a ferramenta apuntará directamente a ela.
- Seleccione as caras e arestas da operación como de costume. O que conta como fondo ou burato xúlgase ao longo da ferramenta inclinada.
- O material en bruto para esa dirección é a caixa que contén o material xirado, así que as alturas e as holguras son seguras desde ese lado.

No G-code, antes da operación a ferramenta sobe, os eixos rotativos xiran, e a ferramenta baixa sobre o seu primeiro punto. Nunha máquina de mesa sen TCP, os arcos seguen sendo arcos e os ciclos fixos de taladrado seguen sendo ciclos (só se xira o marco escrito arredor de Z). Con TCP nun plano inclinado, os arcos pasan a ser liñas curtas e os ciclos, os movementos que representan.

A simulación do material executa unha dirección inclinada **por separado**: amosa o que corta esa operación desde todo o material visto de lado, e atopa rascaduras aí, pero os cortes feitos desde outras direccións non se transfiren.

## Acabado de 5 eixos

{{ui:Máis}} na barra de Fabricación lista esta operación e a seguinte na parte superior da lapela **Operacións**.

{{ui:5 eixos}} é a [pasada de acabado paralela](topic:finish-3d) cunha **fresa de punta esférica que se inclina segundo avanza**. Unha bola corta cunha esfera, e a esfera é a mesma sexa cal sexa o xeito en que a ferramenta se incline arredor do seu centro, así que a bola segue exactamente a traxectoria que daría a pasada de 3 eixos e só cambia a dirección da ferramenta:

- **Cara á superficie**: 1 = perpendicular á superficie, 0 = vertical, calquera valor entre eles.
- **Inclinar adiante**: graos na dirección do corte, para que o centro quieto da bola non sexa o que corta.
- **Inclinación máxima**: a ferramenta nunca se inclina máis que isto respecto do eixo da preparación.

Onde o vástago tocaría o modelo, a inclinación recórtase ata que quede libre, e a operación di en cantos puntos pasa. Cada pasada se entra e se deixa cunha elevación recta.

## Acabado rotativo (4º eixo)

{{ui:Rotativo}} é para unha peza suxeita ao longo de **X do traballo** nun eixo rotativo. A peza xira e unha fresa de punta esférica, sempre apuntando ao eixo, segue a súa superficie:

- **Pasadas**: {{ui:Ao longo do eixe}} (liñas ao longo de X, separadas un paso lateral de xiro) ou {{ui:Arredor da peza}} (aneis, separados un paso lateral de X).
- **Eixe en Y / Z**: onde está o eixe. Baleiro significa o centro do material en bruto. Nunha máquina de mesa sen TCP debe ser o centro de rotación da Preparación; a operación avisa cando non o é.
- **De / a X** e **De / a ángulo**: a parte da lonxitude e do xiro que se corta.

A altura da bola sobre o eixe en cada punto é a caída exacta dunha esfera sobre a malla da peza, desde ese lado.

## Límites

- O acabado de 5 eixos e o rotativo só admiten unha **fresa de punta esférica**. Non hai corte de swarf (o lado da ferramenta nunha parede reglada), non hai liñas de fluxo ao longo das direccións propias dunha superficie, non hai desbaste multieixo e non se escolle automaticamente a inclinación para evitar unha colisión.
- As traxectorias de 5 eixos e rotativas **non se executan pola simulación do material**, que é un mapa de alturas e non pode conter un corte inclinado.
- O vástago compróbase no acabado de 5 eixos contra o modelo visto desde arriba; o portaferramentas, o cabezal e a propia máquina non se comprobán en ningún sitio.
- O acabado rotativo só corta o que a ferramenta ve mirando ao eixo.
- O acabado de 5 eixos tarda un minuto ou máis en calcularse nunha peza grande: o vástago compróbase en cada punto de cada pasada.
- Cando os eixos rotativos se moven xunto cos lineais e o TCP está desactivado, os posts integrados escriben o avance como tempo inverso (`G93`) e logo volven a `G94`.
- Non se escribe ningún código de plano de traballo inclinado (`G68.2` e similares), e non se coñecen límites específicos da máquina, desenrolado nin zonas de colisión.
