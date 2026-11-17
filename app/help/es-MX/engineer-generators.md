---
title: Piezas a partir de la física: generadores
summary: El espacio de trabajo Ingeniería y la operación Cuerpo generado. Elija un generador, defina sus entradas (caudal, presión, temperaturas, material, impresora) y obtenga una pieza dimensionada con fórmulas de libro de texto, con su ficha de datos, sus verificaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas siempre dan la misma pieza.
keywords: ingeniería, generador, cuerpo generado, física, reglas, intercambiador de calor, múltiple, boquilla, celosía, giroide, ficha de datos, entradas, determinista, mismas entradas misma pieza, verificaciones de fabricación, impresión 3D, lecho de polvo
from: 5a387dc0
---

Un **generador** es un script que dimensiona una pieza a partir de sus requisitos y la construye. Un generador de intercambiador de calor toma el calor que hay que transferir, los dos caudales y sus temperaturas, la presión y el material; calcula qué tan grande debe ser el núcleo y qué tan gruesa su pared, lo construye, y le indica los números que usó y de dónde salió cada uno. Cambie una entrada y la pieza la sigue.

El resultado es un cuerpo normal dentro de la pieza: está en la lista de operaciones, se imprime y se exporta. El generador en sí también se guarda en la pieza, así que un archivo se abre en cualquier computadora sin tener instalado el generador, y **abrir una pieza nunca ejecuta un script**.

## Cree un cuerpo

1. Elija el espacio de trabajo {{ui:Ingeniería}} en el selector.
2. Elija un generador de la lista (los que vienen con PartCraft, y después los que haya abierto desde un archivo) y haga clic en {{ui:Nuevo}}.
3. El script se ejecuta. Al terminar, el cuerpo aparece en la vista y el panel muestra sus entradas, su **ficha de datos** y sus **verificaciones**.

También puede agregar uno desde Diseño: {{ui:Operaciones}} › {{ui:Más}} › {{ui:Cuerpo generado}}.

## Modifíquelo

Cambie cualquier entrada y el cuerpo se vuelve a generar un momento después de dejar de escribir. El panel indica cuál de tres situaciones es la verdadera:

- **Actualizado**: el cuerpo coincide con el script y sus entradas.
- **Las entradas cambiaron**: el cuerpo de la pieza proviene de las entradas anteriores; se está generando de nuevo, o presione {{ui:Ejecutar}}.
- **Aún no se ha ejecutado** o **La última ejecución falló**: se muestra un error del script con su línea.

{{ui:Detener}} termina una ejecución que tarda demasiado. Deshacer retrocede un paso a la vez: una ejecución es un paso, una entrada es un paso.

## La ficha de datos

Cada número que calculó el generador aparece con su **unidad** y **de dónde viene** (una ecuación de libro de texto, una norma, una ficha técnica). Nada es una constante oculta. La ficha forma parte del archivo, así que es la misma en la siguiente computadora. [Salida de datos](topic:data-out) explica cómo guardarla como JSON o PDF.

## Las verificaciones

Un generador puede verificar su propia pieza contra un proceso de impresión: paredes y huecos más delgados de lo que el proceso soporta, piezas sueltas, cavidades que atrapan polvo o resina, agujeros demasiado estrechos para despejarlos y voladizos que necesitan soporte. Los hallazgos aparecen en el panel y en la lista de {{ui:Problemas}} (el botón ⚠), y se guardan con la pieza.

Las cifras de proceso son los números redondos que dan las guías de diseño públicas para el proceso en general (FDM, SLA, SLS, lecho de polvo metálico). **No son la especificación de su máquina**: reemplácelas por las cifras de su taller antes de confiar en una verificación. La verificación trabaja sobre una malla de vóxeles, así que es precisa hasta cerca de un vóxel: una pared se reporta solo cuando es más delgada que el límite por más de un vóxel.

## Lo que incluye

| Generador | Lo que crea |
|---|---|
| Bloque de giroide | Un bloque lleno de una lámina de giroide, Schwarz P o diamante: la celosía más simple |
| Intercambiador de calor de giroide | El núcleo de un intercambiador de dos fluidos, dimensionado a partir de la carga con el método de efectividad-NTU, con su pared según la presión; puede verificar la caída de presión con un estudio de flujo en una celda |
| Múltiple de distribución | Un cabezal y ramales, cada tubo dimensionado según el flujo que transporta |
| Viga de celosía graduada | Una celosía cuya pared se engrosa donde una optimización topológica indica que se necesita material |

Todos son primeras estimaciones basadas en fórmulas de libro de texto. [La biblioteca de ingeniería](topic:engineering-library) enumera las fórmulas y sus límites. Ejecute Simulación, Térmica o Flujo sobre el resultado antes de confiar en él.

## Controles de exportación

Los generadores y las fichas de datos de Ingeniería llevan un aviso sobre controles de exportación y sanciones. Léalo en [Controles de exportación de Ingeniería](topic:engineer-export-notice); también aparece al pie de cada ficha de datos.

## Aún no construido

- Cabezales, puertos y accesorios en el núcleo del intercambiador de calor: es solo el núcleo.
- Curvas de temperatura para la resistencia de los materiales: los materiales están a temperatura ambiente.
- Pérdidas en tes y reparto del flujo entre salidas en el múltiple.
- Agregar generadores desde el directorio de complementos con un clic; al abrir un archivo se agrega uno a este navegador.
- Generadores para las otras aplicaciones.
