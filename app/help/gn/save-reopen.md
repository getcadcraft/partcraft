---
title: Guardar, reabrir y seguir trabajando
summary: Guardar piezas y conjuntos en la computadora, ponerles nombre, reabrirlos con botón, tecla o arrastrando, conservar versiones y evitar perder trabajo en una pestaña del navegador.
keywords: guardar, abrir, reabrir, cargar, descargar, versiones, copia de seguridad, renombrar, nombre de archivo, trabajo perdido, salir del sitio, partcraft.json, partcraft-asm.json, pieza nueva
from: c18a5abc
---

PartCraft no guarda nada entre visitas. La pieza vive en la pestaña del navegador hasta que se guarda como archivo, y vuelve cuando se abre ese archivo.

## Guardar una pieza

1. Ponga nombre a la pieza: haga clic en un espacio vacío de la vista para que no haya nada seleccionado, luego escriba el **Nombre** en el panel derecho y presione {{key:Enter}}. El encabezado del historial cambia para coincidir.
2. Presione {{key:Mod+S}} o elija {{ui:Guardar}}.
3. El navegador descarga `<nombre>.partcraft.json`. La barra de estado dice "Guardado Bracket.partcraft.json (el historial completo; ábralo de nuevo aquí para seguir editando)."

Si hay un boceto abierto, al guardar primero se cierra.

El archivo contiene cada boceto, relación, cota y elemento, además de los elementos suprimidos, la posición de retroceso, la configuración de la hoja de plano, las notas GD&T y el texto completo de cualquier sólido STEP importado. La lista de deshacer no se guarda.

## Guardar un conjunto

En un conjunto, el mismo {{ui:Guardar}} o {{key:Mod+S}} descarga `<nombre del conjunto>.partcraft-asm.json`. Cada pieza queda guardada dentro: no necesita los archivos de pieza por separado para reabrirlo.

Mientras edita una pieza desde dentro de un conjunto, {{key:Mod+S}} guarda esa pieza sola como `.partcraft.json`. Elija primero {{ui:Atrás}} y luego guarde, para guardar todo el conjunto.

## Reabrir

Cualquiera de estas opciones:

- elija {{ui:Abrir}} o presione {{key:Mod+O}}, y luego seleccione el archivo;
- arrastre el archivo desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}} hasta la vista 3D (aparece "Suelte una pieza de PartCraft para abrirla").

PartCraft distingue piezas de conjuntos por su contenido, así que ambos se abren de la misma forma. Un archivo `.step` o `.stp` se abre como sólido importado: vea [Abrir un archivo STEP y seguir construyendo](topic:import-step). La barra de estado lo confirma: "Abierto Bracket.partcraft.json: 7 elementos." o "Abierto Hinge.partcraft-asm.json: 3 piezas, 2 uniones."

Si la pieza en pantalla tiene cambios sin guardar, PartCraft primero pregunta: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

:::warning
Cierre un conjunto ({{ui:Cerrar}}) antes de abrir un archivo de pieza. Si abre una pieza mientras un conjunto está en pantalla, la pieza se carga detrás del conjunto y solo la verá al cerrarlo. Abrir un archivo de conjunto también reemplaza un conjunto sin guardar sin preguntar, así que guárdelo primero.
:::

## Empezar de nuevo

{{ui:Nuevo}} inicia una "Part1" vacía. Pregunta primero si hay cambios sin guardar, y cierra un conjunto abierto (preguntando si no está guardado).

## Conservar versiones

Cada guardado es una nueva descarga, así que puede conservar versiones simplemente guardando los archivos:

- Ponga una versión o fecha en el nombre antes de guardar: "Bracket rev B".
- Su navegador puede agregar " (1)", " (2)" cuando ya existe un archivo con el mismo nombre en la carpeta de descargas. El más nuevo es el de número más alto, o verifique la fecha en {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}}.
- Mueva los archivos terminados de la carpeta de descargas a la carpeta de su proyecto.

Vea [Dónde van sus archivos](common:your-files) para saber dónde van las descargas en cada sistema.

## No perder trabajo

- Guarde antes de cerrar la pestaña, recargar la página o dejar la computadora en reposo por mucho tiempo. El navegador pregunta "¿Salir del sitio?" si intenta cerrar con cambios sin guardar, pero un fallo o una laptop cerrada no da ningún aviso.
- Las ventanas privadas o de incógnito funcionan, pero nada más cambia: el archivo sigue siendo la única copia.
- El guardado en la nube y el historial de versiones todavía no están disponibles.
