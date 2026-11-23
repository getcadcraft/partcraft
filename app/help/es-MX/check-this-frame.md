---
title: Revisar esta estructura
summary: Tome los miembros de acero de una estructura soldada (una base, un soporte, un bastidor de tubos y perfiles), coloque el equipo sobre sus patas y los apoyos sobre el piso, y vea cuánto se usa de cada miembro y de cada soldadura según AISC 360-16 o EN 1993. Es una ayuda hasta que un ingeniero la revise.
keywords: bastidor, estructura soldada, base, base de bomba, miembro estructural, soldadura, soldaduras, revisar, AISC 360, EN 1993, utilización, uso, apoyo, equipo, carga, perfil hueco, HSS, RHS, CHS, ingeniero
from: 032e34ee
---

{{ui:Revisar esta estructura}} toma los miembros rectos de acero de una estructura soldada, arma un bastidor con ellos, lo resuelve bajo el peso del acero y del equipo que coloque sobre él, y prueba cada miembro y cada soldadura donde se unen los miembros. Una corrida, una tabla.

:::warning
Es una **ayuda hasta que un ingeniero la revise**. No es un sello, y que pase no es un diseño. Usa las líneas centrales de los miembros tal como están dibujados, considera que cada unión está soldada en todo el perímetro de la sección, toma la pierna del filete desde la pared de la sección (hasta 8 mm) salvo que usted la defina, y no revisa tornillos, placas, placas base, anclajes, aplastamiento, cortante en bloque, fatiga ni izaje.
:::

## Ejecución

1. Dibuje los miembros con {{ui:Miembro estructural}} (los perfiles salen de la tabla de perfiles).
2. Abra {{ui:Vistas}} › {{ui:Revisar esta estructura}}. Indique dónde se apoya el bastidor (un **apoyo** en cada pie: articulado, empotrado o de rodillo; {{ui:Apoyos articulados en los pies}} pone uno en cada extremo inferior de miembro) y qué descansa sobre él (**equipo**: masa, centro de gravedad, los puntos donde se atornilla, y un empuje horizontal opcional).
3. Elija el código: **ASCE 7 + AISC 360-16** o **EN 1990 + EN 1993**. Defina el grado del acero y, para AISC, la resistencia del metal de aporte (482.6 MPa es E70).
4. Pulse {{ui:Revisar}}. {{ui:Guardar el informe como CSV}} escribe cada tabla, con primero la línea de no revisado.

El bastidor se lee en milímetros con el eje vertical de la pieza hacia arriba. Los puntos de apoyo y de equipo se escriben como x y z en el mismo sistema, con z como la altura.

Un extremo de miembro que cae en el centro de otro miembro lo divide en ese punto, igual que un pie o un punto de atornillado sobre la línea de un miembro. Un peso se reparte entre los puntos de atornillado como cuerpo rígido; un centro de gravedad fuera de los pies, o una fuerza de izaje en un pie, se indica, nunca se oculta.

## Qué obtiene

- El elemento más utilizado y si algo falla. Los elementos que la revisión no puede juzgar (un perfil que no está en la tabla, un acero sin factor en el código) se cuentan y se nombran, nunca se cuentan como aprobados.
- Una fila por miembro y por grupo de soldaduras: cuánto se usa, la revisión y la cláusula que gobierna, y la combinación de cargas que gobernó.
- Las mismas tablas en el informe.

## Qué se revisa

Perfiles huecos (RHS, SHS, CHS, tubo) y perfiles I para tensión, compresión, flexión, cortante y su interacción; soldaduras de filete y de penetración completa por el método vectorial elástico. Paredes compactas en flexión solo para perfiles huecos; las paredes esbeltas se indican como no revisadas. Algunas constantes se tomaron de las normas y todavía no se han comparado con una copia impresa; el informe enumera cada fuente.

Vea [Bastidores con perfiles de acero](topic:structural-members) para dibujar los miembros y su lista de corte.
