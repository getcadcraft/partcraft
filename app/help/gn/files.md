---
title: Archivos: abrir, guardar y exportar
summary: Los archivos de pieza y de conjunto que PartCraft abre y guarda, cada formato de exportación y lo que conserva, dónde van los archivos y qué cambia sin conexión o entre navegadores.
keywords: abrir, guardar, exportar, descargar, archivo, partcraft.json, archivo de conjunto, stl, 3mf, step, dxf, pdf, dónde están mis archivos, sin conexión, guardar como
from: c15c2c48
---

PartCraft trabaja con archivos de tu computadora. Nunca sube una pieza, y no hay cuenta ni almacenamiento en la nube. El guardado en la nube todavía no está disponible.

## Qué abre PartCraft

| Archivo | Extensión | Cómo |
|---|---|---|
| Una pieza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, o soltarla sobre la vista 3D |
| Un conjunto de PartCraft | `.partcraft-asm.json` | Igual: PartCraft reconoce de qué tipo es |
| Un sólido STEP | `.step`, `.stp` | Un cuerpo sólido leído como triángulos: [Abrir un archivo STEP y seguir construyendo](topic:import-step) |

Las mallas STL, OBJ y 3MF también se abren como cuerpos sólidos ([Abrir un STL, OBJ o 3MF](topic:open-meshes)), y lo mismo con los archivos `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)). Los DXF, IGES y los archivos de pieza propios de otros programas no se pueden abrir (ver [Lo que todavía no está hecho](topic:not-built-yet)).

Reglas al abrir:

- El nombre de un archivo de pieza o de conjunto debe terminar en `.json`, y el archivo debe pesar menos de 50 MB.
- Los archivos se revisan antes de mostrar nada. Un archivo dañado o editado se rechaza con un motivo claro, por ejemplo "Esto no es un archivo de PartCraft."
- Un archivo guardado con un PartCraft más nuevo se rechaza: "Este archivo fue guardado con un PartCraft más nuevo (versión de archivo 3); esta versión lee la versión 2." Los archivos más viejos sí se abren.
- Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

## Guardar

{{ui:Guardar}} o {{key:Mod+S}} guarda lo que está en pantalla:

- En una pieza: `<part name>.partcraft.json`, el historial completo (bocetos, relaciones, cotas, elementos, la posición de retroceso), la sección, los detalles y las notas GD&T de la hoja del plano, y el texto completo de cualquier sólido STEP importado en una versión anterior. Los elementos que esta versión no puede construir se guardan sin cambios. El sólido en sí no se guarda; PartCraft lo reconstruye desde el historial cuando se abre el archivo.
- En un conjunto: `<assembly name>.partcraft-asm.json`, con **cada pieza adentro**. Un solo archivo lleva todo el conjunto, así que lo podés enviar solo.

Guardar es una **descarga**. Tu navegador pone el archivo en su carpeta de descargas, o pregunta dónde ponerlo si lo configuraste así. Guardar otra vez crea una descarga nueva; el navegador puede ponerle `Part1 (1).partcraft.json` en lugar de reemplazar el anterior. Renombrá o mové los archivos en {{pick:mac=Finder|windows=Explorador de archivos|linux=tu administrador de archivos}} como quieras.

Los caracteres del nombre de la pieza que no sean letras, números, espacios, `_`, `.` y `-` se cambian por `_` en el nombre del archivo.

:::tip
La mayoría de los navegadores tienen una opción para preguntar dónde guardar cada descarga. Activála si querés elegir "Guardar como" cada vez: en Chrome y Edge está en Descargas, dentro de la configuración; en Firefox, en General, Archivos y aplicaciones; en Safari, en General, Ubicación de descarga de archivos.
:::

Más sobre dónde van las descargas y cómo mantener los archivos seguros: [Dónde están tus archivos](common:your-files).

## Exportar

El menú {{ui:Exportar}} escribe otros formatos. Cada uno es una descarga, con el nombre de la pieza.

| Elemento del menú | Archivo | Qué contiene |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<name>.stl` | STL binario de los triángulos del sólido, en milímetros, **Z hacia arriba** |
| {{ui:3MF, para impresión 3D}} | `<name>.3mf` | 3MF con el sólido como un único objeto, en milímetros, **Z hacia arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<name>.step` | Todavía no está hecho en esta versión (en gris): necesita un núcleo exacto |
| {{ui:STEP AP214 (sólido exacto)}} | `<name>.step` | Todavía no está hecho en esta versión (en gris) |
| {{ui:STEP (facetado, núcleo de malla)}} | `<name>.step` | Un sólido hecho de caras planas a partir de la malla: **las superficies redondas son muchas facetas pequeñas**. En milímetros, en los ejes propios de PartCraft (Y hacia arriba). Es el STEP que se usa para otros programas CAD en esta versión |
| {{ui:DXF del boceto o de la cara plana}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Un boceto: líneas, arcos, círculos y puntos en las coordenadas propias del boceto, en las capas PROFILE, CONSTRUCTION y POINTS. Una cara plana elegida: sus contornos como polilíneas cerradas (los bordes redondos como sus facetas) |
| {{ui:Plano (PDF): vistas, corte, detalle, GD&T}} | `<name> - drawing.pdf` | La hoja de plano A3: tres vistas, isométrica, corte y detalle si están configurados, medidas generales, símbolos GD&T y cajetín |

:::note
{{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} todavía no están hechos en esta versión: usá {{ui:STEP (facetado, núcleo de malla)}}. Tiene la forma y el volumen correctos, pero cada cara redonda son muchas caras planas, así que otros programas no pueden elegir un agujero como cilindro. Si eso importa, configurá antes **Curvas** más fina.
:::

- Las exportaciones son de la pieza que está en pantalla. La exportación está apagada en un conjunto; todavía no hay exportación de conjuntos.
- STL, 3MF, el STEP facetado y el DXF de una cara siempre están hechos de facetas. La configuración **Curvas** (en el panel derecho, sin nada seleccionado) define qué tan finas son, de 32 a 256 facetas por vuelta. Elegí Fina o Muy fina antes de exportar STL o 3MF para una impresión suave.
- El plano PDF usa la fuente Helvetica integrada del lector. Los caracteres que no puede mostrar se imprimen como "?".

Paso a paso: [Exportar para impresión, STEP y DXF](topic:export-files) y [Hacer una hoja de plano](topic:drawing-pdf).

## Trabajo sin guardar

- PartCraft guarda una copia de recuperación de la pieza o del conjunto abierto en este navegador poco después de cada cambio, así que un cierre inesperado o una pestaña cerrada no pierden el trabajo: la próxima vez que abras PartCraft pregunta "¿Recuperar tu trabajo?". Eso no es un guardado: guardá en un archivo para conservar tu trabajo. Ver [Recuperar trabajo sin guardar](common:recover).
- Si intentás cerrar la pestaña o recargarla con cambios sin guardar, el navegador pregunta "¿Salir del sitio?". Ese es el cuadro propio del navegador; PartCraft no puede cambiar su texto.
- {{ui:Nuevo}}, {{ui:Abrir}} y cerrar un conjunto preguntan antes de descartar cambios sin guardar.

## En línea y sin conexión

Todo sucede en tu computadora: el núcleo de malla (un programa WebAssembly) se descarga junto con la app y construye la geometría localmente, y los archivos se leen y se escriben en tu disco. Ningún dato de la pieza sale por la red. Ver [El núcleo de malla](topic:solid-kernels).

Para trabajar sin ninguna conexión, guardá PartCraft para uso sin conexión mientras estás en línea: elegí {{ui:Guardar para usar sin conexión}} en la barra de la app y esperá mientras cuenta ("Guardando 40 de 212") hasta que diga **Listo sin conexión**. La copia guardada incluye la biblioteca 3D y el núcleo de malla, así que después modelar, guardar, todas las exportaciones y los planos funcionan sin conexión. Si dice **No se pudo guardar**, hacé clic para intentarlo otra vez estando en línea; **Sin conexión no disponible** significa que esta ventana del navegador no puede guardar una copia (las ventanas privadas y algunas computadoras administradas). Con la copia guardada, al hacer clic en **Listo sin conexión** se ofrecen {{ui:Guardar otra vez (obtener la versión más nueva)}} y {{ui:Quitar la copia sin conexión}}. Detalles: [Trabajar sin conexión](common:offline).

:::online
Estás en línea. Aunque no hayas guardado para uso sin conexión, una vez que PartCraft cargó y el chip de la barra de estado dice "Núcleo de malla", podés seguir trabajando si se corta la conexión. Solo no recargues la página hasta volver a estar en línea.
:::

:::offline
Estás sin conexión. Si PartCraft ya está abierto, seguí trabajando: guardar y exportar siguen funcionando. Si la barra de la app dice **Listo sin conexión**, PartCraft también se abre desde cero sin conexión; si no, no recargues esta pestaña.
:::

## Diferencias entre navegadores

- **Descargas.** Cada navegador tiene su propia carpeta de descargas y su propia forma de preguntar. Si un navegador pregunta si este sitio puede descargar archivos, permitilo, o guardar y exportar no van a funcionar.
- **Arrastrar y soltar** un archivo sobre la vista funciona en Chrome, Edge, Firefox y Safari.
- **Archivos desde un teléfono o una tableta.** En iPhone y iPad, Abrir muestra la app Archivos; los archivos guardados van a Archivos, en Descargas. En Android van a la carpeta Descargas.

No hay diferencia en lo que contienen los archivos entre navegadores o sistemas operativos.
