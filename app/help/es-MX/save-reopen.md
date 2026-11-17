---
title: Guardar, volver a abrir y seguir trabajando
summary: Guarde piezas y ensamblajes en su computadora, asígneles nombre, vuelva a abrirlos con un botón, una tecla o arrastrándolos, conserve versiones y evite perder trabajo en una pestaña del navegador.
keywords: guardar, abrir, volver a abrir, cargar, descargar, versiones, respaldo, renombrar, nombre de archivo, trabajo perdido, salir del sitio, partcraft.json, partcraft-asm.json, nueva pieza
from: c18a5abc
---

PartCraft no conserva nada entre visitas. Su pieza vive en la pestaña del navegador hasta que la guarda como archivo, y regresa cuando abre ese archivo.

## Guardar una pieza

1. Asigne un nombre a la pieza: haga clic en un espacio vacío de la vista para que no quede nada seleccionado, escriba el **Nombre** en el panel derecho y pulse {{key:Enter}}. El encabezado del historial cambia para coincidir.
2. Pulse {{key:Mod+S}} o elija {{ui:Save}}.
3. El navegador descarga `<nombre>.partcraft.json`. La barra de estado dice: "Guardado Bracket.partcraft.json (el historial completo; ábralo aquí de nuevo para seguir editando)."

Si hay un croquis abierto, al guardar primero se cierra.

El archivo contiene todos los croquis, relaciones, cotas y operaciones, además de las operaciones suprimidas, la posición de retroceso, la configuración de la hoja de dibujo y las notas GD&T, y el texto completo de cualquier sólido STEP importado. Su lista de deshacer no se guarda.

## Guardar un ensamblaje

En un ensamblaje, {{ui:Save}} o {{key:Mod+S}} descargan `<nombre del ensamblaje>.partcraft-asm.json`. Cada pieza se guarda dentro de él: no necesita los archivos de pieza por separado para volver a abrirlo.

Mientras edita una pieza desde dentro de un ensamblaje, {{key:Mod+S}} guarda esa pieza por sí sola como `.partcraft.json`. Elija primero {{ui:Back}} y luego guarde, para guardar el ensamblaje completo.

## Volver a abrir

Cualquiera de estas opciones:

- elija {{ui:Open}} o pulse {{key:Mod+O}}, y luego seleccione el archivo;
- arrastre el archivo desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}} hasta la vista 3D (aparece "Suelte una pieza de PartCraft para abrirla").

PartCraft distingue las piezas de los ensamblajes por lo que contienen, así que ambos se abren igual. Un archivo `.step` o `.stp` se abre como un sólido importado: vea [Abra un archivo STEP y construya sobre él](topic:import-step). La barra de estado lo confirma: "Abierto Bracket.partcraft.json: 7 operaciones." o "Abierto Hinge.partcraft-asm.json: 3 piezas, 2 uniones."

Si la pieza en pantalla tiene cambios sin guardar, PartCraft primero pregunta: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

:::warning
Cierre un ensamblaje ({{ui:Close}}) antes de abrir un archivo de pieza. Si abre una pieza mientras hay un ensamblaje en pantalla, la pieza se carga detrás del ensamblaje y solo la verá al cerrarlo. Además, abrir un archivo de ensamblaje reemplaza un ensamblaje sin guardar sin preguntar, así que guárdelo primero.
:::

## Empezar de nuevo

{{ui:New}} inicia una "Part1" vacía. Primero pregunta si hay cambios sin guardar, y cierra un ensamblaje abierto (preguntando si está sin guardar).

## Conservar versiones

Cada guardado es una nueva descarga, así que puede conservar versiones simplemente conservando los archivos:

- Ponga una versión o una fecha en el nombre antes de guardar: "Bracket rev B".
- Su navegador puede agregar " (1)", " (2)" cuando ya exista en la carpeta de descargas un archivo con el mismo nombre. La más reciente es la de número más alto, o revise la fecha en {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}}.
- Mueva los archivos terminados de la carpeta de descargas a la carpeta de su proyecto.

Vea [Dónde van sus archivos](common:your-files) para saber adónde van las descargas en cada sistema.

## No pierda trabajo

- Guarde antes de cerrar la pestaña, recargar la página o dejar la computadora en reposo por mucho tiempo. El navegador pregunta "¿Salir del sitio?" si intenta cerrar con cambios sin guardar, pero un fallo o una computadora portátil cerrada no da ninguna advertencia.
- Las ventanas privadas o de incógnito funcionan, pero nada más cambia: el archivo sigue siendo la única copia.
- El guardado en la nube y el historial de versiones todavía no están disponibles.
