---
title: El kernel de malla
summary: Esta versión de PartCraft construye toda pieza con un kernel de malla que se ejecuta en su navegador. Qué significa para las caras redondas, los volúmenes y los archivos, cómo saber que funciona y qué operaciones esperan un kernel exacto.
keywords: kernel, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no construido, sin conexión, webassembly
from: 68d32d16
---

Un kernel de geometría es el motor que convierte su historial en un sólido. Esta versión de PartCraft tiene uno: el **kernel de malla** (manifold-3d). Se ejecuta en su computadora como un pequeño programa de WebAssembly y está listo un momento después de abrir la aplicación. Nada de su pieza se envía a ningún lado.

| | Kernel de malla |
|---|---|
| Formas redondas | Facetas planas. **Curvas** en el panel de la pieza define qué tan finas son |
| Volúmenes y áreas | Del sólido facetado, un poco bajos en piezas redondas |
| Croquis, extruir, cortar, revolución, taladros, matrices, simetría, planos de referencia | Sí |
| Redondeo y Chaflán | En aristas rectas entre caras planas; los redondeos que se encuentran se cortan a inglete |
| Vaciado y Ángulo de salida | El vaciado abre caras planas (grosor de pared exacto); el ángulo de salida inclina caras planas |
| Exportaciones | STL, 3MF, STEP (facetado), PDF y DXF del plano |
| Vistas del plano | Dibujadas a partir de las facetas, incluidas las vistas de sección |
| Caras y aristas | Con nombre y de tipo conocido (plana, cilindro, cono, esfera, toroide; recta, círculo), tomados de los croquis: los espacios de trabajo de Simulación, Generativo y Manufactura, Medir, la selección y la tabla de taladros los usan |

El indicador cercano al extremo derecho de la barra de estado dice **Kernel de malla** mientras construye su pieza.

## Lo que espera un kernel exacto

Un kernel exacto (B-rep) conserva círculos, cilindros y conos verdaderos, y redondeos suaves en cualquier arista; los barridos, las solevaciones, las superficies, la chapa metálica, las nervaduras, los varios cuerpos, la importación de STEP y la exportación exacta de STEP se apoyan en uno. Las versiones anteriores de PartCraft en el laboratorio usaban OpenCascade para eso. Su licencia (LGPL) no encaja con esta versión, en la que todas las aplicaciones son Apache-2.0 y solo usan bibliotecas con licencias permisivas, así que no se incluye. Nada de esto tiene fecha.

Mientras tanto, esas operaciones dicen **Aún no se construye** cuando las elige: la barra de estado da el motivo, y los textos de ayuda de sus botones terminan con "aún no se construye (necesita un kernel exacto)". [Lo que aún no está construido](topic:not-built-yet) enumera cada una con lo que puede hacer en su lugar.

Una pieza hecha con ellas en una versión anterior se sigue abriendo. Esas operaciones permanecen en el historial marcadas como sin construir (pase el puntero sobre una para ver el motivo), el resto de la pieza se construye y al guardar se conservan sin cambios.

## Caras redondas y Curvas

El kernel de malla dibuja un círculo como un polígono. **Curvas** en el panel de la pieza define cuántos lados tiene un círculo completo; más lados se ven más suaves y miden más cerca del valor verdadero, y tardan más en construirse. Los volúmenes, áreas y distancias de {{ui:Medir}} son de este sólido facetado: para un taladro o un saliente son un poco menores que los de la forma redonda.

## Con y sin conexión

El kernel de malla forma parte de la descarga de la propia aplicación. Para trabajar sin conexión, guarde PartCraft para usarlo sin conexión mientras está conectado: elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación y espere hasta que diga **Lista sin conexión**. Detalles: [Trabajar sin conexión](common:offline).
