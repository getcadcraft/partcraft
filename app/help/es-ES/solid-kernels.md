---
title: El kernel de malla
summary: Esta versión de PartCraft construye todas las piezas con un kernel de malla que se ejecuta en su navegador. Qué significa para las caras redondas, los volúmenes y los archivos, cómo saber que funciona y qué operaciones esperan a un kernel exacto.
keywords: kernel, núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no construido, sin conexión, webassembly
from: 68d32d16
---

Un kernel geométrico es el motor que convierte su historial en un sólido. Esta versión de PartCraft tiene uno: el **kernel de malla** (manifold-3d). Se ejecuta en su ordenador como un pequeño programa WebAssembly y está listo un momento después de abrir la aplicación. Nada de su pieza se envía a ninguna parte.

| | Kernel de malla |
|---|---|
| Formas redondas | Facetas planas. **Curvas** en el panel de la pieza ajusta su finura |
| Volúmenes y áreas | Del sólido facetado, algo bajos en piezas redondas |
| Croquis, extrusión, corte, revolución, taladros, matrices, simetría, planos de referencia | Sí |
| Redondeo y chaflán | En aristas rectas entre caras planas; los redondeos que se encuentran se ingletan |
| Vaciado y desmoldeo | El vaciado abre caras planas (espesor de pared exacto); el desmoldeo inclina caras planas |
| Exportaciones | STL, 3MF, STEP (facetado), PDF de plano y DXF |
| Vistas del plano | Dibujadas a partir de las facetas, incluidas las vistas en sección |
| Caras y aristas | Con nombre y conocidas por su tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomadas de los croquis: los espacios de trabajo de simulación, generativo y fabricación, Medir, la selección y la tabla de taladros las usan |

El indicador cercano al extremo derecho de la barra de estado dice **Kernel de malla** mientras construye su pieza.

## Lo que espera a un kernel exacto

Un kernel exacto (B-rep) conserva círculos, cilindros y conos verdaderos, y sobre él se construyen redondeos suaves en cualquier arista, barridos, transiciones, superficies, chapa metálica, nervios, varios cuerpos, importación de STEP y exportación exacta de STEP. Las versiones anteriores de laboratorio de PartCraft usaban OpenCascade para eso. Su licencia (la LGPL) no encaja con esta versión, en la que todas las aplicaciones son Apache-2.0 y solo usan bibliotecas con licencias permisivas, así que no se incluye. Nada de esto tiene fecha.

Hasta entonces esas operaciones dicen **Aún no construido** cuando las elige: la barra de estado da el motivo, y las descripciones emergentes de sus botones terminan con "aún no construido (necesita un kernel exacto)". [Lo que aún no está construido](topic:not-built-yet) enumera cada una con lo que puede hacer en su lugar.

Una pieza hecha con ellas en una versión anterior sigue abriéndose. Esas operaciones permanecen en el historial marcadas como no construidas (sitúe el puntero sobre una para ver el motivo), el resto de la pieza se construye y al guardar se conservan sin cambios.

## Caras redondas y Curvas

El kernel de malla dibuja un círculo como un polígono. **Curvas** en el panel de la pieza fija cuántos lados tiene un círculo completo; con más lados se ve más suave y se mide más cerca del valor real, y tarda más en construirse. Los volúmenes, las áreas y las distancias de {{ui:Medir}} son los de este sólido facetado: para un taladro o un saliente son algo menores que los de la forma redonda.

## Con y sin conexión

El kernel de malla forma parte de la descarga de la propia aplicación. Para trabajar sin conexión, guarde PartCraft para uso sin conexión mientras está conectado: elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y espere hasta que diga **Listo sin conexión**. Detalles: [Trabajar sin conexión](common:offline).
