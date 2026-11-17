---
title: Piezas a partir de la física: generadores
summary: El espacio de trabajo Engineer y la operación Cuerpo generado: elija un generador, defina sus datos de entrada (caudal, presión, temperaturas, material, impresora) y obtenga una pieza dimensionada con fórmulas de libros de texto, con su hoja de datos, sus comprobaciones de fabricación y archivos para herramientas de análisis. Los mismos datos de entrada siempre dan la misma pieza.
keywords: engineer, generador, cuerpo generado, física, reglas, intercambiador de calor, colector, boquilla, retículo, giroide, hoja de datos, datos de entrada, determinista, mismos datos mismo resultado, comprobaciones de fabricación, impresión 3D, lecho de polvo
from: 5a387dc0
---

Un **generador** es un script que dimensiona una pieza a partir de sus requisitos y la construye. Un generador de intercambiadores de calor toma el calor que hay que transferir, los dos caudales y sus temperaturas, la presión y el material; calcula el tamaño que debe tener el núcleo y el espesor de su pared, lo construye y le indica los números que ha usado y de dónde procede cada uno. Si cambia un dato de entrada, la pieza lo sigue.

El resultado es un cuerpo normal dentro de la pieza: aparece en la lista de operaciones, se puede imprimir y exportar. El propio generador también se guarda en la pieza, de modo que un archivo se abre en cualquier equipo sin tener instalado el generador, y **abrir una pieza nunca ejecuta un script**.

## Crear un cuerpo

1. Elija el espacio de trabajo {{ui:Engineer}} en el selector.
2. Elija un generador de la lista (los que incluye PartCraft, y después los que haya abierto desde un archivo) y haga clic en {{ui:New}}.
3. El script se ejecuta. Cuando termina, el cuerpo aparece en la vista y el panel muestra sus datos de entrada, su **hoja de datos** y sus **comprobaciones**.

También puede añadirlo desde Diseño: {{ui:Operaciones}} › {{ui:Más}} › {{ui:Cuerpo generado}}.

## Modificarlo

Si cambia cualquier dato de entrada, el cuerpo se vuelve a crear poco después de dejar de escribir. El panel indica cuál de estas tres situaciones es la correcta:

- **Actualizado**: el cuerpo coincide con el script y sus datos de entrada.
- **Los datos de entrada han cambiado**: el cuerpo de la pieza procede de los datos anteriores; se está volviendo a crear, o pulse {{ui:Run}}.
- **Sin ejecutar** o **La última ejecución falló**: se muestra un error del script con su línea.

{{ui:Stop}} termina una ejecución que tarda demasiado. Deshacer retrocede un paso cada vez: una ejecución es un paso, un dato de entrada es un paso.

## La hoja de datos

Cada número que calcula el generador aparece en la lista con su **unidad** y **de dónde procede** (una ecuación de libro de texto, una norma, una hoja de datos del fabricante). Nada es una constante oculta. La hoja forma parte del archivo, de modo que es la misma en el siguiente equipo. [Exportar datos](topic:data-out) explica cómo guardarla como JSON o PDF.

## Las comprobaciones

Un generador puede comprobar su propia pieza frente a un proceso de impresión: paredes y huecos más finos de lo que admite el proceso, piezas sueltas, cavidades que atrapan polvo o resina, agujeros demasiado estrechos para despejarlos y voladizos que necesitan soporte. Los resultados aparecen en el panel y en la lista de {{ui:Problemas}} (el botón ⚠), y se guardan con la pieza.

Las cifras de cada proceso son los valores redondos que dan las guías públicas de diseño para el proceso en general (FDM, SLA, SLS, lecho de polvo metálico). **No son la especificación de su máquina**: sustitúyalas por las cifras de su taller antes de confiar en una comprobación. La comprobación trabaja sobre una rejilla de voxels, de modo que es precisa hasta un voxel: una pared se indica solo cuando es más fina que el límite en más de un voxel.

## Qué incluye

| Generador | Qué crea |
|---|---|
| Bloque de giroide | Un bloque relleno con una lámina de giroide, Schwarz P o diamante: el retículo más sencillo |
| Intercambiador de calor de giroide | El núcleo de un intercambiador de dos fluidos, dimensionado a partir de la carga por el método de efectividad-NTU, con su pared según la presión; puede comprobar la pérdida de presión con un estudio de flujo en una celda |
| Colector de distribución | Un cabezal y ramales, cada tubo dimensionado según el caudal que transporta |
| Viga reticular graduada | Un retículo cuya pared se engrosa donde una optimización topológica indica que hace falta material |

Todos son primeras estimaciones basadas en fórmulas de libros de texto. [La biblioteca de ingeniería](topic:engineering-library) enumera las fórmulas y sus límites. Ejecute Simulación, Térmico o Flujo sobre el resultado antes de confiar en él.

## Controles de exportación

Los generadores y las hojas de datos de Engineer llevan un aviso sobre controles de exportación y sanciones. Léalo en [Engineer y controles de exportación](topic:engineer-export-notice); también aparece al pie de cada hoja de datos.

## Todavía no disponible

- Cabezales, puertos y accesorios en el núcleo del intercambiador de calor: solo está el núcleo.
- Curvas de temperatura de la resistencia de los materiales: los materiales están a temperatura ambiente.
- Pérdidas en tes y reparto del caudal entre salidas en el colector.
- Añadir generadores desde el directorio de complementos con un solo clic; al abrir un archivo se añade uno a este navegador.
- Generadores para las otras aplicaciones.
