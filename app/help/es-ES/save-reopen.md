---
title: Guardar, volver a abrir y seguir trabajando
summary: Guarde piezas y ensamblajes en su equipo, póngales nombre, vuelva a abrirlos con un botón, una tecla o arrastrándolos, conserve versiones y evite perder trabajo en una pestaña del navegador.
keywords: guardar, abrir, volver a abrir, cargar, descargar, versiones, copia de seguridad, renombrar, nombre de archivo, trabajo perdido, salir del sitio, partcraft.json, partcraft-asm.json, nueva pieza
from: c18a5abc
---

PartCraft no guarda nada entre visitas. Su pieza vive en la pestaña del navegador hasta que la guarda como archivo, y vuelve cuando abre ese archivo.

## Guardar una pieza

1. Ponga nombre a la pieza: haga clic en un espacio vacío de la vista para que nada esté seleccionado, escriba el **Nombre** en el panel derecho y pulse {{key:Enter}}. El encabezado del historial cambia para coincidir.
2. Pulse {{key:Mod+S}} o elija {{ui:Guardar}}.
3. El navegador descarga `<nombre>.partcraft.json`. La barra de estado indica: "Guardado Bracket.partcraft.json (el historial completo; ábralo aquí para seguir editando)."

Si hay un boceto abierto, al guardar se cierra primero.

El archivo contiene todos los bocetos, relaciones, cotas y elementos, además de los elementos suprimidos, la posición de la barra de retroceso, los ajustes de la hoja de dibujo y las notas GD&T, y el texto completo de cualquier sólido STEP importado. La lista de deshacer no se guarda.

## Guardar un ensamblaje

En un ensamblaje, {{ui:Guardar}} o {{key:Mod+S}} descargan `<nombre del ensamblaje>.partcraft-asm.json`. Cada pieza se guarda dentro de él: no necesita los archivos de pieza por separado para volver a abrirlo.

Mientras edita una pieza desde dentro de un ensamblaje, {{key:Mod+S}} guarda solo esa pieza como `.partcraft.json`. Elija primero {{ui:Volver}} y después guarde para guardar todo el ensamblaje.

## Volver a abrir

Cualquiera de estas opciones:

- elija {{ui:Abrir}} o pulse {{key:Mod+O}}, y después seleccione el archivo;
- arrastre el archivo desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su gestor de archivos}} hasta la vista 3D (aparece "Suelte una pieza de PartCraft para abrirla").

PartCraft distingue las piezas de los ensamblajes por su contenido, así que ambos se abren de la misma forma. Un archivo `.step` o `.stp` se abre como sólido importado: consulte [Abrir un archivo STEP y construir sobre él](topic:import-step). La barra de estado lo confirma: "Abierto Bracket.partcraft.json: 7 elementos." o "Abierto Hinge.partcraft-asm.json: 3 piezas, 2 uniones."

Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

:::warning
Cierre un ensamblaje ({{ui:Cerrar}}) antes de abrir un archivo de pieza. Si abre una pieza mientras hay un ensamblaje en pantalla, la pieza se carga detrás del ensamblaje y solo la verá al cerrarlo. Abrir un archivo de ensamblaje también sustituye un ensamblaje sin guardar sin preguntar, así que guárdelo primero.
:::

## Empezar de nuevo

{{ui:Nuevo}} crea una "Part1" vacía. Pregunta antes si hay cambios sin guardar, y cierra un ensamblaje abierto (preguntando si no está guardado).

## Conservar versiones

Cada guardado es una nueva descarga, así que puede conservar versiones simplemente conservando los archivos:

- Ponga una versión o una fecha en el nombre antes de guardar: "Bracket rev B".
- Su navegador puede añadir " (1)", " (2)" cuando ya hay un archivo con el mismo nombre en la carpeta de descargas. El más reciente es el de número mayor, o compruebe la fecha en {{pick:mac=Finder|windows=Explorador de archivos|linux=su gestor de archivos}}.
- Mueva los archivos terminados de la carpeta de descargas a la carpeta de su proyecto.

Consulte [Dónde van sus archivos](common:your-files) para saber adónde van las descargas en cada sistema.

## No pierda trabajo

- Guarde antes de cerrar la pestaña, recargar la página o dejar que el equipo entre en reposo durante mucho tiempo. El navegador pregunta "¿Salir del sitio?" si intenta cerrar con cambios sin guardar, pero un fallo o un portátil cerrado no avisan.
- Las ventanas privadas o de incógnito funcionan, pero nada más cambia: el archivo sigue siendo la única copia.
- El guardado en la nube y el historial de versiones todavía no están disponibles.
