---
title: El núcleo de malla
summary: Esta versión de PartCraft construye cada pieza con un núcleo de malla que se ejecuta en su navegador. Qué significa para las formas redondas, los volúmenes y los archivos, cómo saber que funciona y qué funciones esperan un núcleo exacto.
keywords: núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no implementado, sin conexión, webassembly
from: f931645c
---

Un núcleo geométrico es el motor que convierte su historial en un sólido. Esta versión de PartCraft tiene uno: el **núcleo de malla** (manifold-3d). Se ejecuta en su equipo como un pequeño programa WebAssembly y está listo un momento después de abrir la aplicación. Nada de su pieza se envía a ningún lugar.

| | Núcleo de malla |
|---|---|
| Formas redondas | Caras planas. **Curvas** en el panel de la pieza define su finura |
| Volúmenes y áreas | Del sólido facetado, un poco bajos en piezas redondas |
| Croquis, extruir, cortar, revolucionar, agujeros, matrices, simetría, planos de referencia | Sí |
| Redondeo y chaflán | En aristas rectas entre caras planas; los redondeos que se encuentran se cortan a inglete |
| Vaciado y ángulo de salida | El vaciado abre caras planas (espesor de pared exacto); el ángulo de salida inclina caras planas |
| Exportaciones | STL, 3MF, STEP (exacto: las caras redondas se escriben con sus superficies verdaderas; o facetado), PDF de dibujo y DXF |
| Vistas de dibujo | Dibujadas a partir de las facetas, incluidas las vistas de sección |
| Caras y aristas | Con nombre y clasificadas por tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomadas de los croquis: los espacios de trabajo Simulación, Generativo y Fabricación, Medir, la selección y la tabla de agujeros las usan |

La etiqueta cerca del extremo derecho de la barra de estado dice **Núcleo de malla** mientras construye su pieza.

## Lo que espera un núcleo exacto

Un núcleo exacto (B-rep) conserva círculos, cilindros y conos verdaderos, y redondeos suaves en cualquier arista. Sobre él se construyen los barridos, las solevaciones, las superficies, la chapa metálica, los nervios, los varios cuerpos y la importación STEP con caras curvas conservadas de forma exacta. (La exportación STEP exacta no espera: el núcleo de malla conoce la superficie verdadera de cada cara a partir del croquis, y la exportación la escribe.) Las versiones de laboratorio anteriores de PartCraft usaban OpenCascade para eso. Su licencia (LGPL) no encaja con esta versión, donde cada aplicación es Apache-2.0 y sólo usa bibliotecas con licencia permisiva, así que no está incluida. Nada de esto tiene fecha prevista.

Mientras tanto, esas funciones dicen **Todavía no implementado** cuando las elige: la barra de estado indica el motivo, y las descripciones de sus botones terminan con "todavía no implementado (requiere un núcleo exacto)". [Lo que todavía no está implementado](topic:not-built-yet) enumera cada una con lo que debe hacer en su lugar.

Una pieza hecha con ellas en una versión anterior se sigue abriendo. Esas funciones permanecen en el historial marcadas como no implementadas (pase el cursor sobre una para ver el motivo), el resto de la pieza se construye, y al guardar se conservan sin cambios.

## Caras redondas y Curvas

El núcleo de malla dibuja un círculo como un polígono. **Curvas** en el panel de la pieza define cuántos lados tiene una circunferencia completa; más lados se ven más suaves y se acercan más al valor verdadero, pero tardan más en construirse. Los volúmenes, áreas y distancias de {{ui:Medir}} son del sólido facetado: en un agujero o en un saliente son un poco menores que los de la forma redonda.

## En línea y sin conexión

El núcleo de malla forma parte de la descarga propia de la aplicación. Para trabajar sin conexión, guarde PartCraft para uso sin conexión mientras esté en línea: elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación y espere hasta que diga **Listo sin conexión**. Detalles: [Trabajar sin conexión](common:offline).
