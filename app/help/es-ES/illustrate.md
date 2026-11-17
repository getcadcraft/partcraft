---
title: Iniciar un manual en Illustrate
summary: El espacio de trabajo Illustrate crea manuales a partir de su diseño: vistas, dibujos explosionados con globos y lista de piezas, instrucciones paso a paso, animaciones y un archivo 3D que un cliente puede abrir sin CAD. Un manual es un archivo propio.
keywords: illustrate, manual, ilustración técnica, documentación, vista explosionada, lista de piezas, instrucciones, partcraft-manual
from: e447e0ab
---

**Illustrate** es el espacio de trabajo para los documentos que necesita alrededor de un diseño: vistas explosionadas con globos y una lista de piezas, ilustraciones en dibujo lineal para manuales, instrucciones paso a paso, animaciones y un archivo 3D que un cliente puede abrir sin CAD. Elija {{ui:Illustrate}} en el selector de {{ui:Espacio de trabajo}}, al inicio de la barra de herramientas.

Un **manual** es un archivo propio (`<nombre>.partcraft-manual.json`). Guarda una copia de la forma de cada pieza, el árbol del producto y las propiedades de las piezas, y un enlace al lugar de origen, de modo que puede trabajar en el manual mientras el diseño sigue avanzando. Cuando cambie el diseño, [Actualizar desde el diseño](topic:illustrate-update) incorpora los cambios.

## Iniciar uno

Haga clic en {{ui:Nuevo}} en el grupo {{ui:Manual}} y después elija:

- {{ui:Desde la pieza abierta}}: la pieza abierta en Diseño.
- {{ui:Desde el ensamblaje abierto}}: aparece en su lugar cuando hay un ensamblaje abierto; sus piezas, sus posiciones, números de pieza, materiales y vistas explosionadas se incluyen.
- {{ui:Desde un archivo de ensamblaje…}}: un `.partcraft-asm.json` guardado; PartCraft crea primero sus piezas.
- {{ui:Desde otro archivo…}}: glTF (.glb, .gltf), OBJ, STL o 3MF. Se conservan el árbol y los nombres del archivo, y las copias de una misma pieza (la misma forma colocada dos veces) se convierten en una sola pieza con una cantidad. Los archivos STL y OBJ no indican su unidad, así que se le pregunta. Los archivos STL se leen con Z hacia arriba; glTF y 3MF indican el suyo.

Mientras un manual está abierto, Illustrate muestra la copia propia del manual de las piezas; la pieza o el ensamblaje abiertos en Diseño quedan ocultos hasta que vuelva a Diseño.

## Guardar y abrir

{{ui:Guardar}} en el grupo {{ui:Manual}} (o {{key:Mod+S}}) guarda el manual; {{ui:Abrir}} abre uno. Cada cambio en Illustrate es un paso del historial propio del manual: {{ui:Deshacer}} y {{ui:Rehacer}} actúan sobre el manual mientras Illustrate está abierto.

## Aún no disponible

- Los archivos STEP todavía no se abren en {{ui:Desde otro archivo…}}. Abra el STEP en Diseño (entra como cuerpo sólido: vea [Abrir un archivo STEP](topic:import-step)) e inicie el manual con {{ui:Desde la pieza abierta}}, o guárdelo como glTF, 3MF, OBJ o STL.
- ModelCraft y BimCraft todavía no pueden pasar un modelo directamente a Illustrate: guárdelo como glTF (.glb) y use {{ui:Desde otro archivo…}}.

Siguiente: [Vistas y aspectos](topic:illustrate-views).
