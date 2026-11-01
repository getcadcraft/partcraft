---
title: Archivos: abrir, guardar y exportar
summary: Los archivos de pieza y de ensamblaje que PartCraft abre y guarda, cada formato de exportación y lo que conserva, adónde van los archivos y qué cambia sin conexión o entre navegadores.
keywords: abrir, guardar, exportar, descargar, archivo, partcraft.json, archivo de ensamblaje, stl, 3mf, step, dxf, pdf, dónde están mis archivos, sin conexión, guardar como
from: c15c2c48
---

PartCraft trabaja con archivos de su ordenador. Nunca sube una pieza, y no interviene ninguna cuenta ni almacenamiento en la nube. Todavía no se puede guardar en la nube.

## Qué abre PartCraft

| Archivo | Extensión | Cómo |
|---|---|---|
| Una pieza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, o suéltelo sobre la vista 3D |
| Un ensamblaje de PartCraft | `.partcraft-asm.json` | Igual: PartCraft reconoce de qué tipo es |
| Un sólido STEP | `.step`, `.stp` | Un cuerpo sólido leído como triángulos: [Abra un archivo STEP y construya sobre él](topic:import-step) |

Las mallas STL, OBJ y 3MF también se abren como cuerpos sólidos ([Abra un STL, OBJ o 3MF](topic:open-meshes)), y lo mismo los archivos `.3dm` ([Abra un modelo .3dm](topic:open-3dm-files)). No se pueden abrir DXF, IGES ni los archivos de pieza propios de otros programas (consulte [Lo que aún no está construido](topic:not-built-yet)).

Reglas al abrir:

- El nombre de un archivo de pieza o de ensamblaje debe terminar en `.json`, y el archivo debe pesar menos de 50 MB.
- Los archivos se comprueban antes de mostrar nada. Un archivo dañado o editado se rechaza con un motivo claro, por ejemplo "This is not a PartCraft file."
- Un archivo guardado por un PartCraft más reciente se rechaza: "This file was saved by a newer PartCraft (file version 3); this one reads version 2." Los archivos más antiguos se abren.
- Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

## Guardar

{{ui:Guardar}} o {{key:Mod+S}} guarda lo que hay en pantalla:

- En una pieza: `<nombre de la pieza>.partcraft.json`, el historial completo (croquis, relaciones, cotas, operaciones, la posición de retroceso), las notas de sección, detalle y GD&T de la hoja de plano, y el texto completo de cualquier sólido STEP importado en una versión anterior. Las operaciones que esta versión no puede construir se guardan sin cambios. El sólido en sí no se almacena; PartCraft lo reconstruye a partir del historial al abrir el archivo.
- En un ensamblaje: `<nombre del ensamblaje>.partcraft-asm.json`, con **todas las piezas dentro**. Un solo archivo lleva el ensamblaje entero, así que puede enviarlo por sí solo.

Guardar es una **descarga**. Su navegador coloca el archivo en su carpeta de descargas, o le pregunta dónde ponerlo si lo ha configurado así. Si guarda de nuevo se crea otra descarga; el navegador puede llamarla `Part1 (1).partcraft.json` en lugar de sustituir la anterior. Cambie el nombre de los archivos o muévalos en {{pick:mac=Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} como prefiera.

Los caracteres distintos de letras, dígitos, espacios, `_`, `.` y `-` en el nombre de la pieza pasan a ser `_` en el nombre del archivo.

:::tip
La mayoría de los navegadores tienen un ajuste para preguntar dónde guardar cada descarga. Actívelo si quiere una opción "Guardar como" cada vez: en Chrome y Edge está en Descargas, dentro de los ajustes; en Firefox, en General, Archivos y aplicaciones; en Safari, en General, Ubicación de descarga de archivos.
:::

Más sobre adónde van las descargas y cómo mantener los archivos a salvo: [Adónde van sus archivos](common:your-files).

## Exportar

El menú {{ui:Exportar}} escribe otros formatos. Cada uno es una descarga, con el nombre de la pieza.

| Elemento del menú | Archivo | Qué contiene |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<nombre>.stl` | STL binario de los triángulos del sólido, milímetros, **Z arriba** |
| {{ui:3MF, para impresión 3D}} | `<nombre>.3mf` | 3MF con el sólido como un único objeto, milímetros, **Z arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<nombre>.step` | Aún no construido en esta versión (atenuado): necesita un kernel exacto |
| {{ui:STEP AP214 (sólido exacto)}} | `<nombre>.step` | Aún no construido en esta versión (atenuado) |
| {{ui:STEP (facetado, núcleo de malla)}} | `<nombre>.step` | Un sólido hecho de caras planas a partir de la malla: **las superficies redondas son muchas facetas planas pequeñas**. Milímetros, en los ejes propios de PartCraft (Y arriba). El STEP que debe usar para otros programas CAD en esta versión |
| {{ui:DXF del croquis o de la cara plana}} | `<nombre> - <croquis>.dxf` o `<nombre> - face.dxf` | DXF R12. Un croquis: líneas, arcos, círculos y puntos en las coordenadas propias del croquis, en las capas PROFILE, CONSTRUCTION y POINTS. Una cara plana seleccionada: sus contornos como polilíneas cerradas (las aristas redondas, como sus facetas) |
| {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}} | `<nombre> - drawing.pdf` | La hoja de plano A3: tres vistas, isométrica, sección y detalle si se han definido, dimensiones generales, símbolos GD&T, cajetín |

:::note
{{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} todavía no están construidos en esta versión: use {{ui:STEP (facetado, núcleo de malla)}}. Tiene la forma y el volumen correctos, pero cada cara redonda son muchas facetas planas, de modo que otros programas no pueden seleccionar un taladro como cilindro. Si le importa, ajuste antes **Curvas** a un valor más fino.
:::

- Las exportaciones son de la pieza en pantalla. La exportación está desactivada en un ensamblaje; todavía no hay exportación de ensamblajes.
- STL, 3MF, el STEP facetado y el DXF de cara siempre se componen de facetas. El ajuste **Curvas** (en el panel derecho sin nada seleccionado) fija su finura, de 32 a 256 facetas por vuelta. Elija Fino o Muy fino antes de exportar STL o 3MF para una impresión suave.
- El plano en PDF usa la fuente Helvetica integrada del lector. Los caracteres que no puede mostrar se imprimen como "?".

Paso a paso: [Exporte para imprimir, STEP y DXF](topic:export-files) y [Haga una hoja de plano](topic:drawing-pdf).

## Trabajo sin guardar

- PartCraft guarda una copia de recuperación de la pieza o del ensamblaje abiertos en este navegador un momento después de cada cambio, de modo que un fallo o una pestaña cerrada no lo pierdan: la próxima vez que abra PartCraft preguntará "¿Recuperar su trabajo?". No es un guardado: guarde en un archivo para conservar su trabajo. Consulte [Recupere el trabajo sin guardar](common:recover).
- Si intenta cerrar la pestaña o recargar con cambios sin guardar, el navegador pregunta "¿Salir del sitio?". Ese cuadro es del propio navegador; PartCraft no puede cambiar su texto.
- {{ui:Nuevo}}, {{ui:Abrir}} y cerrar un ensamblaje preguntan antes de descartar cambios sin guardar.

## Con y sin conexión

Todo ocurre en su ordenador: el kernel de malla (un programa WebAssembly) se descarga con la aplicación y construye la geometría localmente, y los archivos se leen de su disco y se escriben en él. Ningún dato de la pieza viaja por la red. Consulte [El kernel de malla](topic:solid-kernels).

Para trabajar sin ninguna conexión, guarde PartCraft para uso sin conexión mientras está conectado: elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y espere mientras cuenta ("Guardando 40 de 212") hasta que diga **Listo sin conexión**. La copia guardada incluye la biblioteca 3D y el kernel de malla, así que después el modelado, el guardado, todas las exportaciones y los planos funcionan sin conexión. Si dice **No se pudo guardar**, púlselo para intentarlo de nuevo con conexión; **Sin conexión no disponible** significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunos equipos gestionados). Con la copia guardada, al pulsar **Listo sin conexión** se ofrecen {{ui:Guardar de nuevo (obtener la versión más reciente)}} y {{ui:Quitar la copia sin conexión}}. Detalles: [Trabajar sin conexión](common:offline).

:::online
Está conectado. Aunque no haya guardado para uso sin conexión, una vez que PartCraft se ha cargado y el indicador de la barra de estado dice "Kernel de malla", puede seguir trabajando si se corta la conexión. Solo no recargue la página hasta volver a estar conectado.
:::

:::offline
Está sin conexión. Si PartCraft ya está abierto, siga trabajando; guardar y exportar siguen funcionando. Si la barra de la aplicación dice **Listo sin conexión**, PartCraft también se abre desde cero sin conexión; si no, no recargue esta pestaña.
:::

## Diferencias entre navegadores

- **Descargas.** Cada navegador tiene su propia carpeta de descargas y su propia forma de preguntar. Si un navegador pregunta si este sitio puede descargar archivos, permítalo, o no podrá guardar ni exportar.
- **Arrastrar y soltar** un archivo sobre la vista funciona en Chrome, Edge, Firefox y Safari.
- **Archivos desde un móvil o una tableta.** En iPhone y iPad, Abrir muestra la aplicación Archivos; los archivos guardados van a Archivos, Descargas. En Android van a la carpeta Descargas.

El contenido de los archivos no difiere entre navegadores ni sistemas operativos.
