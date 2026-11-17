---
title: El núcleo de malla
summary: Esta versión de PartCraft construye cada pieza con un núcleo de malla que se ejecuta en su navegador. Qué significa para las caras redondas, los volúmenes y los archivos, cómo saber que funciona y qué funciones esperan a un núcleo exacto.
keywords: núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no incluido, sin conexión, webassembly
from: f931645c
---

Un núcleo de geometría es el motor que convierte su historial en un sólido. Esta versión de PartCraft tiene uno: el **núcleo de malla** (manifold-3d). Se ejecuta en su equipo como un pequeño programa WebAssembly y está listo un momento después de abrir la aplicación. Nada de su pieza se envía a ningún sitio.

| | Núcleo de malla |
|---|---|
| Formas redondas | Caras planas facetadas. **Curvas** en el panel de la pieza define su finura |
| Volúmenes y áreas | Del sólido facetado, algo bajos en piezas redondas |
| Croquis, extrusión, corte, revolución, taladros, matrices, simetría, planos de referencia | Sí |
| Redondeo y chaflán | En aristas rectas entre caras planas; los redondeos que se encuentran quedan a inglete |
| Vaciado y desmoldeo | El vaciado abre caras planas (espesor de pared exacto); el desmoldeo inclina caras planas |
| Exportaciones | STL, 3MF, STEP (exacto: las caras redondas se escriben en sus superficies verdaderas; o facetado), PDF y DXF de dibujo |
| Vistas de dibujo | Se dibujan a partir de las facetas, incluidas las vistas de sección |
| Caras y aristas | Con nombre y clasificadas por tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomadas de los croquis: los espacios de trabajo Simulación, Generativo y Fabricación, Medir, la selección y la tabla de taladros las usan |

La etiqueta cerca del extremo derecho de la barra de estado dice **Núcleo de malla** mientras se construye su pieza.

## Lo que espera a un núcleo exacto

Un núcleo exacto (B-rep) conserva círculos, cilindros y conos verdaderos, y redondeos suaves en cualquier arista. Los barridos, recubrimientos, superficies, chapa metálica, nervios, varios cuerpos y la importación STEP con caras curvas conservadas de forma exacta se construyen sobre él. (La exportación STEP exacta no depende de él: el núcleo de malla conoce la superficie verdadera de cada cara a partir del croquis, y la exportación la escribe.) Las versiones de laboratorio anteriores de PartCraft usaban OpenCascade para ello. Su licencia (LGPL) no encaja con esta versión, donde todas las aplicaciones son Apache-2.0 y solo usan bibliotecas con licencia permisiva, así que no está incluido. Esto no tiene fecha prevista.

Hasta entonces, esas funciones muestran **No incluido todavía** al elegirlas: la barra de estado indica el motivo, y las descripciones de sus botones terminan con «no incluido todavía (necesita un núcleo exacto)». [Qué no está incluido todavía](topic:not-built-yet) lista cada una con lo que debe hacer en su lugar.

Una pieza hecha con ellas en una versión anterior se sigue abriendo. Esas funciones permanecen en el historial marcadas como no incluidas (sitúe el puntero sobre una para ver el motivo), el resto de la pieza se construye y, al guardar, se conservan sin cambios.

## Caras redondas y Curvas

El núcleo de malla dibuja un círculo como un polígono. **Curvas** en el panel de la pieza define cuántos lados tiene una circunferencia completa; más lados se ven más suaves y miden más cerca del valor verdadero, pero tardan más en construirse. Los volúmenes, áreas y distancias de {{ui:Medir}} son del sólido facetado: en un agujero o un resalte son un poco menores que los de la forma redonda.

## En línea y sin conexión

El núcleo de malla forma parte de la descarga de la propia aplicación. Para trabajar sin conexión, guarde PartCraft para uso sin conexión mientras esté en línea: elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y espere hasta que indique **Listo sin conexión**. Detalles: [Trabajar sin conexión](common:offline).
