---
title: Iniciar un manual en Ilustrar
summary: El espacio de trabajo Ilustrar crea manuales a partir de su diseño: vistas, dibujos explosionados de líneas con globos y una lista de piezas, instrucciones paso a paso, animaciones y un archivo 3D que un cliente puede abrir sin CAD. Un manual es un archivo propio.
keywords: ilustrar, manual, ilustración técnica, documentación, vista explosionada, lista de piezas, instrucciones, partcraft-manual
from: e447e0ab
---

**Ilustrar** es el espacio de trabajo para los documentos que se necesitan alrededor de un diseño: vistas explosionadas con globos y una lista de piezas, ilustraciones de dibujo de líneas para manuales, instrucciones paso a paso, animaciones y un archivo 3D que un cliente puede abrir sin CAD. Elija {{ui:Ilustrar}} en el selector {{ui:Espacio de trabajo}} al inicio de la barra de herramientas.

Un **manual** es un archivo propio (`<nombre>.partcraft-manual.json`). Guarda una copia de la forma de cada pieza, el árbol de productos y las propiedades de las piezas, y un vínculo a su origen, así que puede trabajar en el manual mientras el diseño sigue avanzando. Cuando el diseño cambia, [Actualizar con el diseño](topic:illustrate-update) incorpora los cambios.

## Iniciar uno

Haga clic en {{ui:Nuevo}} en el grupo {{ui:Manual}}, luego:

- {{ui:Con la pieza abierta}}: la pieza abierta en Diseño.
- {{ui:Con el ensamble abierto}}: se muestra en su lugar cuando hay un ensamble abierto; sus piezas, sus posiciones, números de pieza, materiales y vistas explosionadas se incluyen.
- {{ui:Con un archivo de ensamble…}}: un `.partcraft-asm.json` guardado; PartCraft construye primero sus piezas.
- {{ui:Con otro archivo…}}: glTF (.glb, .gltf), OBJ, STL o 3MF. Se conservan el árbol y los nombres del archivo, y las copias de una misma pieza (la misma forma colocada dos veces) se convierten en una pieza con cantidad. Los archivos STL y OBJ no indican su unidad, así que se le pregunta. Los archivos STL se leen con Z hacia arriba; glTF y 3MF indican el suyo.

Mientras un manual está abierto, Ilustrar muestra la copia propia del manual de las piezas; la pieza o el ensamble abierto en Diseño queda oculto hasta que regrese a Diseño.

## Guardar y abrir

{{ui:Guardar}} en el grupo {{ui:Manual}} (o {{key:Mod+S}}) guarda el manual; {{ui:Abrir}} abre uno. Cada cambio en Ilustrar es un paso del historial propio del manual: {{ui:Deshacer}} y {{ui:Rehacer}} actúan sobre el manual mientras Ilustrar está abierto.

## Aún no disponible

- Los archivos STEP todavía no se abren en {{ui:Con otro archivo…}}. Abra el STEP en Diseño (entra como cuerpo sólido; vea [Abrir un archivo STEP](topic:import-step)) e inicie el manual con {{ui:Con la pieza abierta}}, o guárdelo como glTF, 3MF, OBJ o STL.
- ModelCraft y BimCraft todavía no pueden enviar un modelo directamente a Ilustrar: guárdelo como glTF (.glb) y use {{ui:Con otro archivo…}}.

Siguiente: [Vistas y aspectos](topic:illustrate-views).
