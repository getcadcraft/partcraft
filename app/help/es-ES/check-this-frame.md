---
title: Comprobar este bastidor
summary: Tome las piezas de acero de una estructura soldada (una bancada, un soporte, un bastidor de tubos y perfiles), apoye el equipo sobre sus pies y los apoyos sobre el suelo, y vea qué parte de cada pieza y de cada soldadura se usa según AISC 360-16 o EN 1993. Una ayuda hasta que un ingeniero la haya revisado.
keywords: bastidor, estructura soldada, bancada, bancada de bomba, elemento estructural, soldadura, soldaduras, comprobar, AISC 360, EN 1993, utilización, apoyo, equipo, carga, perfil hueco, HSS, RHS, CHS, ingeniero
from: 032e34ee
---

{{ui:Comprobar este bastidor}} toma las piezas rectas de acero de una estructura soldada, construye un bastidor con ellas, lo resuelve bajo el peso del acero y del equipo que coloque sobre él, y comprueba cada pieza y cada soldadura donde se unen. Una ejecución, una tabla.

:::warning
Es una **ayuda hasta que un ingeniero lo haya revisado**. No es un sello de aprobación, y superar la comprobación no es un diseño. Usa las líneas de centro de las piezas tal como están dibujadas, considera que cada unión está soldada en todo su perímetro, toma el cateto del filete desde la pared del perfil (hasta 8 mm) salvo que usted lo indique, y no comprueba tornillos, chapas, placas base, anclajes, aplastamiento, cortante de bloque, fatiga ni izado.
:::

## Ejecución

1. Dibuje las piezas con {{ui:Elemento estructural}} (los perfiles proceden de la tabla de perfiles).
2. Abra {{ui:Vistas}} › {{ui:Comprobar este bastidor}}. Indique dónde se apoya el bastidor (un **apoyo** en cada pie: articulado, empotrado o de rodillos; {{ui:Apoyos articulados en los pies}} coloca uno en cada extremo inferior de pieza) y qué se apoya en él (**equipo**: masa, centro de gravedad, los puntos donde se atornilla al suelo, y un empuje horizontal opcional).
3. Elija la norma: **ASCE 7 + AISC 360-16** o **EN 1990 + EN 1993**. Indique el grado del acero y, para AISC, la resistencia del metal de aportación (482.6 MPa corresponde a E70).
4. Pulse {{ui:Comprobar}}. {{ui:Guardar el informe como CSV}} escribe todas las tablas, con la línea de no revisado en primer lugar.

El bastidor se lee en milímetros con el eje vertical de la pieza hacia arriba. Los puntos de apoyo y de equipo se escriben como x y z en el mismo sistema, siendo z la altura.

Un extremo de pieza que cae sobre la mitad de otra pieza la divide en ese punto, igual que un pie o un punto de atornillado sobre la línea de una pieza. Un peso se reparte entre los puntos de atornillado como sólido rígido; un centro de gravedad fuera de los pies, o una fuerza de elevación en un pie, se indica, nunca se oculta.

## Qué obtiene

- El elemento más utilizado y si algo falla. Los elementos que la comprobación no puede juzgar (un perfil que no está en la tabla, un acero sin factor en la norma) se cuentan y se nombran, nunca se cuentan como aprobados.
- Una fila por pieza y por grupo de soldaduras: cuánto se usa, la comprobación y la cláusula que gobiernan, y la combinación de cargas que lo determina.
- Las mismas tablas en el informe.

## Qué se comprueba

Perfiles huecos (RHS, SHS, CHS, tubo) y perfiles en I para tracción, compresión, flexión, cortante y su interacción; soldaduras de filete y de penetración total por el método vectorial elástico. Las paredes compactas solo en flexión para perfiles huecos; las paredes esbeltas se indican como no comprobadas. Algunas constantes se tomaron de las normas y todavía no se han comparado con una copia impresa; el informe enumera cada fuente.

Véase [Bastidores a partir de perfiles de acero](topic:structural-members) para dibujar las piezas y su lista de corte.
