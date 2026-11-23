---
title: "Palpació: trobar la peça i fixar el desplaçament de treball"
summary: Toqueu una cara superior, un costat, un forat o un cap amb un palpador i deixeu que el control mogui el desplaçament de treball fins on és realment la peça, o només mesureu. Què pot fer cada control, i què no s'ha provat.
keywords: palpador, palpació, palpador de contacte, palpar, desplaçament de treball, g54, g31, g38.2, salt, referència, trobar el centre, forat, cap, cantó, mesura, inspecció, g10
from: 1f718b82
---

{{ui:Palpació}} a Fabricació escriu un cicle de palpació al programa: el palpador toca la peça, i el control mou el desplaçament de treball (G54) per la diferència entre on s'ha trobat la superfície i on diu el model que és. Les operacions posteriors tallen aleshores on és realment la peça.

**Res d'això no s'ha executat en una màquina.** Els moviments abans d'un toc són moviments ordinaris: el palpador no es vigila fins al moviment de palpació mateix. Executeu-lo lentament, primer a l'aire, amb la mà sobre la retenció d'avanç.

## Utilitzar-la

1. A la pestanya **Eines**, la primera operació de palpació afegeix un **palpador de contacte**: el diàmetre de la seva bola i l'avanç de palpació (100 mm/min tret que n'indiqueu un).
2. Premeu {{ui:Més}} a la barra d'eines de Fabricació, després {{ui:Palpació}}, i feu clic en el que cal tocar. Cada selecció és un cicle, en l'ordre en què feu clic:

| Selecció | Cicle | Què es fixa |
|---|---|---|
| Una cara plana que mira cap a l'eix de l'eina | Un toc baixant | Z |
| Una cara lateral plana perpendicular a X o a Y | Un toc cap a la cara, una mica per sota de la seva part superior | X o Y |
| Un forat o una protuberància al llarg de l'eix de l'eina | Quatre tocs (+X, −X, +Y, −Y) | X i Y del seu centre |

3. **Amb el resultat**: {{ui:Fixa el desplaçament de treball}} o {{ui:Només mesura}}.
4. **Comença a aquesta distància** i **Cerca fins a aquesta distància més enllà** indiquen a quina distància de la superfície esperada comença el moviment de palpació i fins on més enllà pot recórrer el palpador abans que el control es rendeixi. **Profunditat** és la distància per sota de la part superior d'un forat, d'una protuberància o d'una cara lateral on va la bola.

Poseu l'operació de palpació la primera, abans que res talli.

## Què escriu cada control

| Control | Toc | Resultat |
|---|---|---|
| Estil Fanuc | `G31`, la posició guardada a `#101` a `#104` | Les variables de desplaçament (`#5221` a `#5223`) es mouen per trobat − esperat. Només mesura: la diferència queda a `#110` (i `#111`). |
| LinuxCNC | `G38.2`, la posició guardada en paràmetres amb nom | `G10 L2 P1` amb el nou desplaçament. Només mesura: un missatge `(DEBUG, …)`. |
| GRBL | `G38.2` | Un toc fixa l'eix amb `G10 L20 P1`. GRBL no té variables, de manera que **no pot calcular un centre**: el fitxer ho indica en un comentari i no fixa res. |

El càlcul és del postprocessador, de manera que el podeu canviar: els esdeveniments són `probe-move` i `probe-set` ([Postprocessadors que podeu editar](topic:post-processors)).

## Límits

- Un sol desplaçament de treball (G54). Només cares perpendiculars als eixos: sense angle, sense cicle de cantonada, sense rotació del treball.
- Sense preajustador d'eines, sense comprovació d'eina trencada, sense mesurar una mida contra una tolerància, sense informe.
- El husos no s'inicia per a un palpador i el refrigerant es manté apagat; res no comprova que l'eina del husos sigui un palpador.
- La simulació del material no executa una trajectòria de palpació.
- La calibració pròpia del palpador (desplaçament de la bola, deflexió de la sonda, direcció de disparament) és la del control.
