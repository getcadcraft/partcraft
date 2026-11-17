---
title: Franges zebra i curvatura
summary: Comproveu com de suaument s'uneixen les cares de qualsevol peça, amb franges zebra que segueixen la vista o un mapa de colors de la curvatura mitjana, des del menú Vistes.
keywords: zebra, franges zebra, línies de reflexió, curvatura, mapa de curvatura, curvatura mitjana, qualitat de superfície, continuïtat, tangent, g1, g2, suau, plec, línies de ressaltat
from: 78fed4c3
---

Dues ullades ràpides a com de suaus són les cares d'una peça, en qualsevol peça de l'espai de treball Disseny (l'espai de treball Forma té la seva pròpia eina, per a la forma que esteu editant: vegeu [Formes lliures amb Forma](topic:form-surfaces)).

## Franges zebra

Obriu {{ui:Vistes}} i trieu {{ui:Franges zebra}}. La peça mostra el reflex d'una llum amb franges, com ho faria una superfície polida:

- On dues cares s'uneixen **tangencialment** (un arrodoniment sobre una cara plana, una superfície Gordon suau), les franges continuen per la unió amb un revolt.
- On es troben en un **plec**, les franges es trenquen i salten.
- Quan la curvatura també coincideix (G2), les franges flueixen sense ni tan sols un trencament.

Gireu la vista (arrossegueu, o una cara del cub de vista): les franges es tornen a dibuixar des de la nova direcció. **Franges** fixa quantes n'hi ha.

## Curvatura

Trieu {{ui:Curvatura}} al mateix menú. La peça es pinta segons la seva **curvatura mitjana**: blau on és còncava, pàl·lid on és plana, vermell on és convexa. La targeta indica a quina curvatura els colors arriben a la intensitat màxima, en 1/mm i com a radi. Les arestes vives compten com a molt corbes, per això es veuen fortament; mireu les cares entre elles.

## La targeta

Totes dues obren la targeta d'anàlisi a la part inferior esquerra de la vista, que també conté l'[anàlisi del desmotllament](topic:draft-analysis). Canvieu entre elles amb **Mostra**. Tornar a triar l'opció que ja és oberta a {{ui:Vistes}}, {{ui:Tanca}} o {{key:Esc}} la desactiva. Els colors segueixen la peça quan la canvieu; no es desa res a la peça.
