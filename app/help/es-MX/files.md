---
title: Archivos: abrir, guardar y exportar
summary: Los archivos de pieza y de ensamblaje que PartCraft abre y guarda, cada formato de exportación y lo que conserva, adónde van los archivos y qué cambia sin conexión o entre navegadores.
keywords: abrir, guardar, exportar, descargar, archivo, partcraft.json, archivo de ensamblaje, stl, 3mf, step, dxf, pdf, dónde están mis archivos, sin conexión, guardar como
from: c15c2c48
---

PartCraft trabaja con archivos en su computadora. Nunca sube una pieza, y no interviene ninguna cuenta ni almacenamiento en la nube. El guardado en la nube aún no está disponible.

## Lo que PartCraft abre

| Archivo | Extensión | Cómo |
|---|---|---|
| Una pieza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, o suéltela sobre la vista 3D |
| Un ensamblaje de PartCraft | `.partcraft-asm.json` | Igual: PartCraft distingue de qué tipo es |
| Un sólido STEP | `.step`, `.stp` | Un cuerpo sólido leído como triángulos: [Abra un archivo STEP y construya sobre él](topic:import-step) |

Las mallas STL, OBJ y 3MF también se abren como cuerpos sólidos ([Abra un STL, OBJ o 3MF](topic:open-meshes)), igual que los archivos `.3dm` ([Abra un modelo .3dm](topic:open-3dm-files)). DXF, IGES y los archivos de pieza propios de otros programas no se pueden abrir (vea [Lo que aún no está construido](topic:not-built-yet)).

Reglas al abrir:

- El nombre de un archivo de pieza o de ensamblaje debe terminar en `.json`, y el archivo debe pesar menos de 50 MB.
- Los archivos se revisan antes de mostrar nada. Un archivo dañado o editado se rechaza con un motivo claro, por ejemplo "Este no es un archivo de PartCraft."
- Un archivo guardado por un PartCraft más nuevo se rechaza: "Este archivo lo guardó un PartCraft más nuevo (versión de archivo 3); este lee la versión 2." Los archivos más antiguos se abren.
- Si la pieza en pantalla tiene cambios sin guardar, PartCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

## Guardar

{{ui:Guardar}} o {{key:Mod+S}} guarda lo que hay en pantalla:

- En una pieza: `<nombre de la pieza>.partcraft.json`, con el historial completo (croquis, relaciones, cotas, operaciones, la posición de retroceso), la sección, el detalle y las notas GD&T de la hoja del plano, y el texto completo de cualquier sólido STEP importado en una versión anterior. Las operaciones que esta versión no puede construir se guardan sin cambios. El sólido en sí no se almacena; PartCraft lo reconstruye a partir del historial cuando se abre el archivo.
- En un ensamblaje: `<nombre del ensamblaje>.partcraft-asm.json`, con **todas las piezas dentro**. Un solo archivo lleva todo el ensamblaje, así que puede enviarlo por sí solo.

Guardar es una **descarga**. Su navegador pone el archivo en su carpeta de descargas, o pregunta dónde ponerlo si así lo configuró. Si guarda de nuevo se hace una descarga nueva; el navegador puede llamarla `Pieza1 (1).partcraft.json` en lugar de reemplazar la anterior. Cambie el nombre o mueva los archivos en {{pick:mac=Finder|windows=el Explorador de archivos|linux=su administrador de archivos}} como prefiera.

Los caracteres distintos de letras, dígitos, espacios, `_`, `.` y `-` en el nombre de la pieza se convierten en `_` en el nombre del archivo.

:::tip
La mayoría de los navegadores tienen una opción para preguntar dónde guardar cada descarga. Actívela si quiere una opción de "Guardar como" cada vez: en Chrome y Edge está en Descargas, dentro de la configuración; en Firefox, en General, Archivos y aplicaciones; en Safari, en General, Ubicación de descarga de archivos.
:::

Más sobre adónde van las descargas y cómo mantener seguros sus archivos: [Adónde van sus archivos](common:your-files).

## Exportar

El menú {{ui:Exportar}} escribe otros formatos. Cada uno es una descarga, con el nombre de la pieza.

| Elemento del menú | Archivo | Qué contiene |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<nombre>.stl` | STL binario de los triángulos del sólido, en milímetros, **Z hacia arriba** |
| {{ui:3MF, para impresión 3D}} | `<nombre>.3mf` | 3MF con el sólido como un solo objeto, en milímetros, **Z hacia arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<nombre>.step` | Aún no se construye en esta versión (atenuado): necesita un kernel exacto |
| {{ui:STEP AP214 (sólido exacto)}} | `<nombre>.step` | Aún no se construye en esta versión (atenuado) |
| {{ui:STEP (facetado, núcleo de malla)}} | `<nombre>.step` | Un sólido hecho de caras planas de la malla: **las superficies redondas son muchas facetas planas pequeñas**. Milímetros, en los ejes propios de PartCraft (Y hacia arriba). El STEP que debe usar con otros programas CAD en esta versión |
| {{ui:DXF del croquis o de la cara plana}} | `<nombre> - <croquis>.dxf` o `<nombre> - face.dxf` | DXF R12. De un croquis: líneas, arcos, círculos y puntos en las coordenadas del propio croquis, en las capas PROFILE, CONSTRUCTION y POINTS. De una cara plana seleccionada: sus contornos como polilíneas cerradas (las aristas redondas como sus facetas) |
| {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}} | `<nombre> - drawing.pdf` | La hoja de plano A3: tres vistas, isométrica, sección y detalle si se definieron, medidas generales, símbolos GD&T, cuadro de rotulación |

:::note
{{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} aún no se construyen en esta versión: use {{ui:STEP (facetado, núcleo de malla)}}. Tiene la forma y el volumen correctos, pero cada cara redonda son muchas facetas planas, así que otros programas no pueden seleccionar un taladro como cilindro. Si eso le importa, defina primero **Curvas** más fino.
:::

- Las exportaciones son de la pieza en pantalla. La exportación está desactivada en un ensamblaje; todavía no hay exportación de ensamblajes.
- El STL, el 3MF, el STEP facetado y el DXF de cara siempre se componen de facetas. El ajuste **Curvas** (en el panel derecho sin nada seleccionado) define qué tan finas son, de 32 a 256 facetas por vuelta. Elija Fina o Muy fina antes de exportar STL o 3MF para una impresión suave.
- El plano en PDF usa la fuente Helvetica integrada del lector. Los caracteres que no puede mostrar se imprimen como "?".

Paso a paso: [Exporte para impresión, STEP y DXF](topic:export-files) y [Cree una hoja de plano](topic:drawing-pdf).

## Trabajo sin guardar

- PartCraft guarda una copia de recuperación de la pieza o del ensamblaje abierto en este navegador un momento después de cada cambio, de modo que una falla o una pestaña cerrada no lo pierdan: la próxima vez que abra PartCraft preguntará "¿Recuperar su trabajo?". No es un guardado: guarde en un archivo para conservar su trabajo. Vea [Recupere trabajo sin guardar](common:recover).
- Si intenta cerrar la pestaña o recargar con cambios sin guardar, el navegador pregunta "¿Salir del sitio?". Es el cuadro propio del navegador; PartCraft no puede cambiar su texto.
- {{ui:Nuevo}}, {{ui:Abrir}} y cerrar un ensamblaje preguntan antes de descartar cambios sin guardar.

## Con y sin conexión

Todo sucede en su computadora: el kernel de malla (un programa de WebAssembly) se descarga con la aplicación y construye la geometría localmente, y los archivos se leen y se escriben en su disco. Ningún dato de la pieza viaja por la red. Vea [El kernel de malla](topic:solid-kernels).

Para trabajar sin ninguna conexión, guarde PartCraft para usarlo sin conexión mientras está conectado: elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación y espere mientras cuenta ("Guardando 40 de 212") hasta que diga **Lista sin conexión**. La copia guardada incluye la biblioteca 3D y el kernel de malla, así que después el modelado, el guardado, todas las exportaciones y los planos funcionan sin conexión. Si dice **No se pudo guardar**, haga clic para intentarlo de nuevo con conexión; **Sin conexión no disponible** significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunas computadoras administradas). Con la copia guardada, al hacer clic en **Lista sin conexión** se ofrecen {{ui:Guardar de nuevo (obtener la versión más reciente)}} y {{ui:Quitar la copia sin conexión}}. Detalles: [Trabajar sin conexión](common:offline).

:::online
Tiene conexión. Aunque no guarde para usar sin conexión, una vez que PartCraft se haya cargado y el indicador de la barra de estado diga "Kernel de malla", puede seguir trabajando si se corta la conexión. Solo no recargue la página hasta que vuelva a haber conexión.
:::

:::offline
No tiene conexión. Si PartCraft ya está abierto, siga trabajando; guardar y exportar siguen funcionando. Si la barra de la aplicación dice **Lista sin conexión**, PartCraft también abre desde cero sin conexión; de lo contrario no recargue esta pestaña.
:::

## Diferencias entre navegadores

- **Descargas.** Cada navegador tiene su propia carpeta de descargas y su propia forma de preguntar. Si un navegador pregunta si este sitio puede descargar archivos, permítalo, o no podrá guardar ni exportar.
- **Arrastrar y soltar** un archivo sobre la vista funciona en Chrome, Edge, Firefox y Safari.
- **Archivos desde un teléfono o tableta.** En iPhone y iPad, Abrir muestra la app Archivos; los archivos guardados van a Archivos, Descargas. En Android van a la carpeta Descargas.

No hay diferencia en lo que contienen los archivos entre navegadores o sistemas operativos.
