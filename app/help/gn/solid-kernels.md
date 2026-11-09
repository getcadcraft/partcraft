---
title: El núcleo de malla
summary: Esta versión de PartCraft construye cada pieza con un núcleo de malla que corre en tu navegador. Qué significa para las superficies redondas, los volúmenes y los archivos, cómo saber que funciona, y qué funciones esperan un núcleo exacto.
keywords: núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no hecho, sin conexión, webassembly
from: 68d32d16
---

Un núcleo geométrico es el motor que convierte tu historial en un sólido. Esta versión de PartCraft tiene uno: el **núcleo de malla** (manifold-3d). Corre en tu computadora como un pequeño programa WebAssembly y está listo un momento después de abrir la app. Nada de tu pieza se envía a ningún lado.

| | Núcleo de malla |
|---|---|
| Formas redondas | Facetas planas. **Curvas** en el panel de la pieza define qué tan finas son |
| Volúmenes y áreas | Del sólido facetado, algo bajos en piezas redondas |
| Bocetos, extruir, cortar, revolucionar, agujeros, patrones, espejo, planos de referencia | Sí |
| Redondeo y chaflán | En bordes rectos entre caras planas; los redondeos que se encuentran se cortan a inglete |
| Cáscara e inclinación | La cáscara abre caras planas (espesor de pared exacto); la inclinación inclina caras planas |
| Exportaciones | STL, 3MF, STEP (facetado), PDF de plano y DXF |
| Vistas de plano | Dibujadas desde las facetas, incluidas las vistas de corte |
| Caras y bordes | Con nombre y reconocidos por tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomados de los bocetos: los espacios de trabajo Simulación, Generativo y Fabricación, Medir, la selección y la tabla de agujeros los usan |

El chip cerca del extremo derecho de la barra de estado dice **Núcleo de malla** mientras construye tu pieza.

## Lo que espera un núcleo exacto

Un núcleo exacto (B-rep) conserva círculos, cilindros y conos reales, y redondeos suaves en cualquier borde. Barridos, lofts, superficies, chapa, nervios, varios cuerpos, importación STEP y exportación STEP exacta se construyen sobre uno. Versiones de laboratorio anteriores de PartCraft usaban OpenCascade para eso. Su licencia (LGPL) no encaja con esta versión, donde cada app es Apache-2.0 y usa solo bibliotecas con licencia permisiva, así que no está incluido. Nada de esto tiene fecha.

Hasta entonces esas funciones dicen **Todavía no hecho** cuando las elegís: la barra de estado da el motivo, y las descripciones de sus botones terminan con "todavía no está hecho (necesita un núcleo exacto)". [Lo que todavía no está hecho](topic:not-built-yet) enumera cada una con lo que conviene hacer en su lugar.

Una pieza hecha con ellas en una versión anterior se sigue abriendo. Esas funciones quedan en el historial marcadas como no hechas (pasá el puntero sobre una para ver el motivo), el resto de la pieza se construye, y guardar las mantiene sin cambios.

## Caras redondas y Curvas

El núcleo de malla dibuja un círculo como un polígono. **Curvas** en el panel de la pieza define cuántos lados tiene un círculo completo; más lados se ven más suaves y miden más cerca del valor real, pero tardan más en construirse. Los volúmenes, áreas y distancias de {{ui:Medir}} son de este sólido facetado: para un agujero o un saliente son un poco más chicos que los de la forma redonda.

## En línea y sin conexión

El núcleo de malla es parte de la descarga propia de la app. Para trabajar sin conexión, guardá PartCraft para uso sin conexión mientras estás en línea: elegí {{ui:Guardar para usar sin conexión}} en la barra de la app y esperá hasta que diga **Listo sin conexión**. Detalles: [Trabajar sin conexión](common:offline).
