---
title: Archivos: abrir, guardar y exportar
summary: Los archivos de pieza y montaje que PartCraft abre y guarda, cada formato de exportación y lo que conserva, dónde quedan los archivos, y qué cambia sin conexión o entre navegadores.
keywords: abrir, guardar, exportar, descargar, archivo, partcraft.json, archivo de montaje, stl, 3mf, step, dxf, pdf, dónde están mis archivos, sin conexión, guardar como
from: e5fbc7e3
---

PartCraft trabaja con archivos en tu computadora. Nunca sube una pieza, y no hay cuenta ni almacenamiento en la nube. El guardado en la nube todavía no está disponible.

## Lo que PartCraft abre

| Archivo | Extensión | Cómo |
|---|---|---|
| Una pieza de PartCraft | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, o soltala sobre la vista 3D |
| Un montaje de PartCraft | `.partcraft-asm.json` | Igual: PartCraft reconoce qué tipo es |
| Un sólido STEP | `.step`, `.stp` | Un cuerpo sólido leído como triángulos: [Abrir un archivo STEP y construir sobre él](topic:import-step) |

Las mallas STL, OBJ y 3MF también se abren como cuerpos sólidos ([Abrir un STL, OBJ o 3MF](topic:open-meshes)), y lo mismo los archivos `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)). DXF, IGES y los archivos propios de otros programas no se pueden abrir (ver [Lo que todavía no está hecho](topic:not-built-yet)).

Reglas al abrir:

- El nombre de un archivo de pieza o montaje debe terminar en `.json`, y el archivo debe pesar menos de 50 MB.
- Los archivos se verifican antes de mostrarse. Un archivo dañado o editado se rechaza con un motivo claro, por ejemplo "This is not a PartCraft file."
- Un archivo guardado por un PartCraft más nuevo se rechaza: "This file was saved by a newer PartCraft (file version 3); this one reads version 2." Los archivos más viejos sí se abren.
- Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta antes: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

## Guardar

{{ui:Save}} o {{key:Mod+S}} guarda lo que está en pantalla:

- En una pieza: `<nombre de la pieza>.partcraft.json`, el historial completo (bocetos, relaciones, cotas, elementos, la posición de retroceso), las notas de sección, detalle y GD&T de la hoja del plano, y el texto completo de cualquier sólido STEP importado en una versión anterior. Los elementos que esta versión no puede construir se guardan sin cambios. El sólido en sí no se guarda; PartCraft lo reconstruye desde el historial cuando se abre el archivo.
- En un montaje: `<nombre del montaje>.partcraft-asm.json`, con **cada pieza adentro**. Un solo archivo lleva todo el montaje, así que lo podés mandar solo.

Guardar es una **descarga**. Tu navegador pone el archivo en su carpeta de descargas, o pregunta dónde ponerlo si lo configuraste así. Guardar otra vez crea una nueva descarga; el navegador puede llamarla `Part1 (1).partcraft.json` en lugar de reemplazar la anterior. Renombrá o mové archivos en {{pick:mac=Finder|windows=File Explorer|linux=tu administrador de archivos}} como quieras.

Los caracteres distintos de letras, dígitos, espacios, `_`, `.` y `-` en el nombre de la pieza se convierten en `_` en el nombre del archivo.

:::tip
La mayoría de los navegadores tienen un ajuste para preguntar dónde guardar cada descarga. Activalo si querés elegir "Guardar como" cada vez: en Chrome y Edge está en Descargas dentro de la configuración; en Firefox, en General, Archivos y aplicaciones; en Safari, en General, ubicación de descarga de archivos.
:::

Más sobre adónde van las descargas y cómo mantener los archivos a salvo: [Dónde quedan tus archivos](common:your-files).

## Exportar

El menú {{ui:Export}} escribe otros formatos. Cada uno es una descarga, con el nombre de la pieza.

| Elemento de menú | Archivo | Qué contiene |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<nombre>.stl` | STL binario de los triángulos del sólido, en milímetros, **Z up** |
| {{ui:3MF, for 3D printing}} | `<nombre>.3mf` | 3MF con el sólido como un objeto, en milímetros, **Z up** |
| {{ui:STEP AP242 (exact solid)}} | `<nombre>.step` | Un sólido exacto, en milímetros, Z up: caras redondas como cilindros, conos, esferas y toros verdaderos. El STEP para otros programas de CAD y CAM |
| {{ui:STEP AP214 (exact solid)}} | `<nombre>.step` | El mismo sólido exacto en el esquema AP214 más viejo |
| {{ui:STEP (faceted, mesh kernel)}} | `<nombre>.step` | Un sólido de caras planas de la malla: **las superficies redondas son muchas facetas planas chicas**. En milímetros, en los ejes propios de PartCraft (Y up). Para un programa que rechaza el archivo exacto |
| {{ui:DXF of the sketch or flat face}} | `<nombre> - <boceto>.dxf` o `<nombre> - face.dxf` | DXF R12. Un boceto: líneas, arcos, círculos y puntos en las coordenadas del boceto, en las capas PROFILE, CONSTRUCTION y POINTS. Una cara plana elegida: sus contornos como polilíneas cerradas (bordes redondos como sus facetas) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<nombre> - drawing.pdf` | La hoja de plano A3: tres vistas, isométrica, corte y detalle si están definidos, tamaños generales, símbolos GD&T, cuadro de título |

:::note
{{ui:STEP AP242 (exact solid)}} escribe agujeros, salientes, redondeos, conos, esferas y toros en sus superficies verdaderas, así otro programa puede elegir un agujero como cilindro; **Curves** no lo cambia. Los lados spline, las roscas modeladas y las mallas importadas no tienen superficie exacta y quedan como facetas planas dentro del mismo sólido; la barra de estado dice cuántas. {{ui:STEP (faceted, mesh kernel)}} escribe cada cara redonda como facetas.
:::

- Las exportaciones son de la pieza en pantalla. La exportación está desactivada en un montaje; todavía no hay exportación de montaje.
- STL, 3MF, el STEP facetado y el DXF de cara siempre están hechos de facetas. El ajuste **Curves** (en el panel derecho con nada seleccionado) define qué tan finas son, de 32 a 256 facetas por vuelta. Elegí Fine o Very fine antes de exportar STL o 3MF para una impresión suave.
- El plano PDF usa la fuente Helvetica integrada del lector. Los caracteres que no puede mostrar se imprimen como "?".

Paso a paso: [Exportación para impresión, STEP y DXF](topic:export-files) y [Hacer una hoja de plano](topic:drawing-pdf).

## Trabajo sin guardar

- PartCraft guarda una copia de recuperación de la pieza o montaje abierto en este navegador poco después de cada cambio, así que un fallo o una pestaña cerrada no pierden nada: la próxima vez que abras PartCraft pregunta "Recover your work?". No es un guardado: guardá en un archivo para conservar tu trabajo. Ver [Recuperar trabajo sin guardar](common:recover).
- Si intentás cerrar la pestaña o recargar con cambios sin guardar, el navegador pregunta "Leave site?". Es el cuadro propio del navegador; PartCraft no puede cambiar su texto.
- {{ui:New}}, {{ui:Open}} y cerrar un montaje preguntan antes de descartar cambios sin guardar.

## En línea y sin conexión

Todo ocurre en tu computadora: el núcleo de malla (un programa WebAssembly) se descarga con la aplicación y construye la geometría localmente, y los archivos se leen y escriben en tu disco. Ningún dato de pieza sale por la red. Ver [El núcleo de malla](topic:solid-kernels).

Para trabajar sin conexión, guardá PartCraft para uso sin conexión mientras estás en línea: elegí {{ui:Save for offline}} en la barra de la aplicación y esperá mientras cuenta ("Saving 40 of 212") hasta que diga **Offline ready**. La copia guardada incluye la biblioteca 3D y el núcleo de malla, así que después el modelado, el guardado, cada exportación y los planos funcionan sin conexión. Si dice **Could not save**, hacé clic para intentar de nuevo estando en línea; **Offline not available** significa que esta ventana del navegador no puede guardar una copia (ventanas privadas y algunas computadoras administradas). Con la copia guardada, al hacer clic en **Offline ready** se ofrecen {{ui:Save again (get the newest version)}} y {{ui:Remove the offline copy}}. Detalles: [Trabajar sin conexión](common:offline).

:::online
Estás en línea. Aunque no hayas guardado para uso sin conexión, una vez que PartCraft cargó y la etiqueta de la barra de estado dice "Mesh kernel", podés seguir trabajando si se corta la conexión. Sólo no recargues la página hasta volver a estar en línea.
:::

:::offline
Estás sin conexión. Si PartCraft ya está abierto, seguí trabajando; guardar y exportar siguen funcionando. Si la barra de la aplicación dice **Offline ready**, PartCraft también se abre desde cero sin conexión; si no, no recargues esta pestaña.
:::

## Diferencias entre navegadores

- **Descargas.** Cada navegador tiene su propia carpeta de descargas y su propia forma de preguntar. Si un navegador pregunta si este sitio puede descargar archivos, permitilo, o guardar y exportar no van a funcionar.
- **Arrastrar y soltar** un archivo sobre la vista funciona en Chrome, Edge, Firefox y Safari.
- **Archivos desde un teléfono o tableta.** En iPhone y iPad, Abrir muestra la app Archivos; los archivos guardados van a Archivos, Descargas. En Android van a la carpeta Descargas.

No hay diferencia en lo que contienen los archivos entre navegadores o sistemas operativos.
