---
title: Revisar este marco
summary: Tomar los miembros de acero de una estructura soldada (una base, un soporte, un marco de tubos y perfiles), apoyar el equipo sobre sus pies y los apoyos sobre el piso, y ver cuánto se usa cada miembro y cada soldadura según AISC 360-16 o EN 1993. Una ayuda hasta que un ingeniero la haya revisado.
keywords: marco, estructura soldada, base, base de bomba, miembro estructural, soldadura, soldaduras, revisar, AISC 360, EN 1993, utilización, apoyo, equipo, carga, perfil hueco, HSS, RHS, CHS, ingeniero
from: 032e34ee
---

{{ui:Check this frame}} toma los miembros rectos de acero de una estructura soldada, arma un marco con ellos, lo resuelve bajo el peso del acero y del equipo que le pongas encima, y prueba cada miembro y cada soldadura donde se unen los miembros. Una corrida, una tabla.

:::warning
Es una **ayuda hasta que un ingeniero la haya revisado**. No es un sello, y un resultado aprobado no es un diseño. Usa las líneas de centro de los miembros tal como están dibujadas, considera que cada unión está soldada en todo el perímetro de la sección, toma la pierna del filete desde la pared de la sección (hasta 8 mm) salvo que la fijes, y no revisa bulones, placas, placas base, anclajes, apoyo, cizallamiento en bloque, fatiga ni izado.
:::

## Cómo se corre

1. Dibujá los miembros con {{ui:Structural member}} (las secciones salen de la tabla de secciones).
2. Abrí {{ui:Views}} › {{ui:Check this frame}}. Decí dónde se apoya el marco (un **apoyo** en cada pie: articulado, empotrado o de rodillo; {{ui:Pinned supports at the feet}} pone uno en cada extremo de miembro más bajo) y qué se apoya sobre él (**equipo**: masa, centro de gravedad, los puntos donde se atornilla, y un empuje horizontal opcional).
3. Elegí el código: **ASCE 7 + AISC 360-16** o **EN 1990 + EN 1993**. Fijá el grado del acero y, para AISC, la resistencia del metal de aporte de la soldadura (482,6 MPa es E70).
4. Apretá {{ui:Check}}. {{ui:Save the report as CSV}} escribe cada tabla, con la línea de no revisado primero.

El marco se lee en milímetros con el eje vertical de la pieza hacia arriba. Los apoyos y los puntos del equipo se escriben como x y z en el mismo marco, con z la altura.

Un extremo de miembro que cae en el medio de otro miembro lo parte en ese punto, igual que un pie o un punto de atornillado sobre la línea de un miembro. Un peso se reparte entre los puntos de atornillado como cuerpo rígido; un centro de gravedad fuera de los pies, o una fuerza de izado en un pie, se informa, nunca se oculta.

## Qué obtenés

- El elemento más usado y si algo falla. Los elementos que la revisión no puede juzgar (una sección que no está en la tabla, un acero sin factor en el código) se cuentan y se nombran, nunca se cuentan como aprobados.
- Una fila por miembro y por grupo de soldaduras: cuánto se usa, la verificación que gobierna y su cláusula, y la combinación de cargas que gobernó.
- Las mismas tablas en el informe.

## Qué se revisa

Secciones huecas (RHS, SHS, CHS, caño) y secciones en I para tracción, compresión, flexión, corte y su interacción; soldaduras de filete y de penetración total por el método vectorial elástico. Las paredes compactas se revisan solo a flexión en secciones huecas; las paredes esbeltas se informan como no revisadas. Algunas constantes se escribieron a partir de las normas y todavía no se compararon con una copia impresa; el informe lista cada fuente.

Ver [Marcos con secciones de acero](topic:structural-members) para dibujar los miembros y su lista de corte.
