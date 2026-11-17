---
title: Archivos: abrir, guardar y exportar
summary: Los archivos de pieza y conjunto que PartCraft abre y guarda, cada formato de exportación y lo que conserva, dónde van los archivos y qué cambia sin conexión o entre navegadores.
keywords: abrir, guardar, exportar, descargar, archivo, partcraft.json, archivo de conjunto, stl, 3mf, step, dxf, pdf, dónde están mis archivos, sin conexión, guardar como
from: e5fbc7e3
---

PartCraft trabaja con archivos de su ordenador. Nunca sube una pieza, y no hay cuenta ni almacenamiento en la nube. El guardado en la nube todavía no está disponible.

## Lo que PartCraft abre

| Archivo | Extensión | Cómo |
|---|---|---|
| Una pieza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, o suéltela sobre la vista 3D |
| Un conjunto de PartCraft | `.partcraft-asm.json` | Igual: PartCraft reconoce de qué tipo es |
| Un sólido STEP | `.step`, `.stp` | Un cuerpo sólido leído como triángulos: [Abra un archivo STEP y construya sobre él](topic:import-step) |

Las mallas STL, OBJ y 3MF también se abren como cuerpos sólidos ([Abra un STL, OBJ o 3MF](topic:open-meshes)), y lo mismo los archivos `.3dm` ([Abra un modelo .3dm](topic:open-3dm-files)). Los archivos DXF, IGES y los archivos de pieza propios de otros programas no se pueden abrir (consulte [Lo que todavía no está disponible](topic:not-built-yet)).

Reglas al abrir:

- El nombre de un archivo de pieza o de conjunto debe terminar en `.json`, y el archivo debe pesar menos de 50 MB.
- Los archivos se comprueban antes de mostrar nada. Un archivo dañado o editado se rechaza con un motivo claro, por ejemplo "Este no es un archivo de PartCraft."
- Un archivo guardado por un PartCraft más nuevo se rechaza: "Este archivo se guardó con un PartCraft más nuevo (versión de archivo 3); esta versión lee la versión 2." Los archivos antiguos se abren.
- Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta antes: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

## Guardar

{{ui:Guardar}} o {{key:Mod+S}} guarda lo que hay en pantalla:

- En una pieza: `<part name>.partcraft.json`, con el historial completo (croquis, relaciones, cotas, elementos y posición de retroceso), la sección, los detalles y las notas GD&T de la hoja de dibujo, y el texto completo de cualquier sólido STEP importado en una versión anterior. Los elementos que esta versión no puede construir se guardan sin cambios. El sólido en sí no se guarda: PartCraft lo reconstruye a partir del historial al abrir el archivo.
- En un conjunto: `<assembly name>.partcraft-asm.json`, con **cada pieza dentro**. Un solo archivo contiene el conjunto completo, así que puede enviarlo por separado.

Guardar es una **descarga**. Su navegador pone el archivo en su carpeta de descargas, o pregunta dónde guardarlo si lo configuró así. Guardar de nuevo crea una nueva descarga; el navegador puede nombrarla `Part1 (1).partcraft.json` en lugar de reemplazar la anterior. Renombre o mueva los archivos en {{pick:mac=Finder|windows=Explorador de archivos|linux=su gestor de archivos}} como prefiera.

Los caracteres distintos de letras, dígitos, espacios, `_`, `.` y `-` del nombre de la pieza se convierten en `_` en el nombre del archivo.

:::tip
La mayoría de los navegadores tienen un ajuste para preguntar dónde guardar cada descarga. Actívelo si quiere elegir "Guardar como" cada vez: en Chrome y Edge está en Descargas dentro de la configuración; en Firefox, en General, Archivos y aplicaciones; en Safari, en General, Ubicación de descarga de archivos.
:::

Más sobre dónde van las descargas y cómo mantener los archivos a salvo: [Dónde están sus archivos](common:your-files).

## Exportar

El menú {{ui:Exportar}} escribe otros formatos. Cada uno es una descarga, con el nombre de la pieza.

| Elemento del menú | Archivo | Qué contiene |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<name>.stl` | STL binario de los triángulos del sólido, en milímetros, **Z hacia arriba** |
| {{ui:3MF, para impresión 3D}} | `<name>.3mf` | 3MF con el sólido como un objeto, en milímetros, **Z hacia arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<name>.step` | Un sólido exacto, en milímetros, Z hacia arriba: caras redondas como cilindros, conos, esferas y toros verdaderos. El STEP para otros programas CAD y CAM |
| {{ui:STEP AP214 (sólido exacto)}} | `<name>.step` | El mismo sólido exacto en el esquema AP214 más antiguo |
| {{ui:STEP (facetado, núcleo de malla)}} | `<name>.step` | Un sólido de caras planas a partir de la malla: **las superficies redondas son muchas facetas planas pequeñas**. En milímetros, en los ejes propios de PartCraft (Y hacia arriba). Para un programa que rechaza el archivo exacto |
| {{ui:DXF del croquis o de la cara plana}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Un croquis: líneas, arcos, círculos y puntos en las coordenadas propias del croquis, en las capas PROFILE, CONSTRUCTION y POINTS. Una cara plana seleccionada: sus contornos como polilíneas cerradas (aristas redondas como sus facetas) |
| {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}} | `<name> - drawing.pdf` | La hoja de dibujo A3: tres vistas, isométrica, sección y detalle si se han definido, tamaños totales, símbolos GD&T y cajetín |

:::note
{{ui:STEP AP242 (sólido exacto)}} escribe agujeros, resaltes, redondeos, conos, esferas y toros en sus superficies verdaderas, de modo que otro programa puede seleccionar un agujero como cilindro; **Curvas** no lo cambia. Los lados de spline, las roscas modeladas y las mallas importadas no tienen superficie exacta y siguen siendo facetas planas dentro del mismo sólido; la barra de estado indica cuántas. {{ui:STEP (facetado, núcleo de malla)}} escribe cada cara redonda como facetas.
:::

- Las exportaciones son de la pieza en pantalla. La exportación está desactivada en un conjunto; todavía no hay exportación de conjuntos.
- STL, 3MF, el STEP facetado y el DXF de cara plana siempre están formados por facetas. El ajuste **Curvas** (en el panel derecho sin nada seleccionado) define su finura, de 32 a 256 facetas por vuelta. Elija Fina o Muy fina antes de exportar STL o 3MF para una impresión suave.
- El dibujo PDF usa la fuente Helvetica integrada del lector. Los caracteres que no puede mostrar se imprimen como "?".

Paso a paso: [Exporte para impresión, STEP y DXF](topic:export-files) y [Haga una hoja de dibujo](topic:drawing-pdf).

## Trabajo sin guardar

- PartCraft guarda una copia de recuperación de la pieza o del conjunto abierto en este navegador poco después de cada cambio, así que un fallo o una pestaña cerrada no pierden el trabajo: la próxima vez que abra PartCraft preguntará "¿Recuperar su trabajo?". No es un guardado: guarde en un archivo para conservar su trabajo. Consulte [Recupere trabajo sin guardar](common:recover).
- Si intenta cerrar la pestaña o recargar con cambios sin guardar, el navegador pregunta "¿Salir del sitio?". Es el cuadro propio del navegador; PartCraft no puede cambiar su texto.
- {{ui:Nuevo}}, {{ui:Abrir}} y cerrar un conjunto piden confirmación antes de descartar cambios sin guardar.

## En línea y sin conexión

Todo ocurre en su equipo: el núcleo de malla (un programa WebAssembly) se descarga con la aplicación y construye la geometría localmente, y los archivos se leen y escriben en su disco. Ningún dato de la pieza sale por la red. Consulte [El núcleo de malla](topic:solid-kernels).

Para trabajar sin ninguna conexión, guarde PartCraft para uso sin conexión mientras esté en línea: elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y espere mientras cuenta ("Guardando 40 de 212") hasta que indique **Listo sin conexión**. La copia guardada incluye la biblioteca 3D y el núcleo de malla, así que después funcionan el modelado, el guardado, todas las exportaciones y los dibujos sin conexión. Si indica **No se pudo guardar**, haga clic para intentarlo de nuevo en línea; **Uso sin conexión no disponible** significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunos equipos administrados). Con la copia guardada, al hacer clic en **Listo sin conexión** se ofrecen {{ui:Guardar de nuevo (obtener la versión más reciente)}} y {{ui:Quitar la copia sin conexión}}. Detalles: [Trabajar sin conexión](common:offline).

:::online
Está en línea. Incluso sin guardar para uso sin conexión, una vez cargado PartCraft y mostrando el indicador de la barra de estado "Núcleo de malla", puede seguir trabajando si se corta la conexión. Simplemente no recargue la página hasta que vuelva a estar en línea.
:::

:::offline
Está sin conexión. Si PartCraft ya está abierto, siga trabajando; guardar y exportar siguen funcionando. Si la barra de la aplicación indica **Listo sin conexión**, PartCraft también se abre desde cero sin conexión; si no, no recargue esta pestaña.
:::

## Diferencias entre navegadores

- **Descargas.** Cada navegador tiene su propia carpeta de descargas y su propia forma de preguntar. Si un navegador pregunta si este sitio puede descargar archivos, permítalo, o guardar y exportar no funcionarán.
- **Arrastrar y soltar** un archivo sobre la vista funciona en Chrome, Edge, Firefox y Safari.
- **Archivos desde un teléfono o tableta.** En iPhone y iPad, Abrir muestra la app Archivos; los archivos guardados van a Archivos, Descargas. En Android van a la carpeta Descargas.

No hay diferencia en lo que contienen los archivos entre navegadores o sistemas operativos.
