---
title: Escribir y ejecutar scripts (espacio de trabajo Script)
summary: El espacio de trabajo Script paso a paso: escriba un script de CraftScript o Lua, ejecútelo con F5, lea la consola, guarde resultados en las variables para el siguiente script, muestre mallas, campos y gráficos, detenga una ejecución y guarde los scripts con la pieza
keywords: script, scripting, programar mientras modela, desacoplar, segunda pantalla, segundo monitor, param, params, parámetros en scripts, CraftScript, Lua, código, programa, editor, consola, REPL, línea de comandos, ejecutar, F5, ejecutar selección, detener, variables, espacio de trabajo, gráfico, campo, malla, leyenda, subpantalla, análisis, automatización, matriz, numérico
from: d0003e89
---

**Vista previa.** El scripting es nuevo en PartCraft 0.3 y está en vista previa: el lenguaje, la biblioteca y la forma en que se guardan los scripts todavía pueden cambiar, y los scripts escritos ahora quizá necesiten pequeños ajustes después. Avísenos qué se rompe.

El espacio de trabajo Script ejecuta sus propios cálculos junto a la pieza: sumas pequeñas, análisis completos o los scripts de la [biblioteca de análisis](topic:craftscript-library). Los scripts se escriben en **CraftScript** (un lenguaje de matrices muy parecido a MATLAB, vea [El lenguaje CraftScript](topic:craftscript-language)), en **Lua** (vea [Scripts en Lua](topic:craftscript-lua)) o en **Python** (vea [Scripts en Python](topic:craftscript-python)).

Elija **Script** en la caja **Espacio de trabajo**, a la izquierda de la barra de herramientas. La pieza no cambia. El panel derecho se convierte en el panel de scripts (más ancho de lo normal; arrastre su borde para cambiarlo, o muévalo a una segunda pantalla con su menú {{ui:⋯}}, vea [Acomodar los paneles](common:arrange-panels)).

## Escriba un script mientras modela

No tiene que salir del espacio de trabajo Diseño para escribir un script. En Diseño, la pestaña {{ui:Script}} del panel derecho contiene el mismo editor, la misma consola, las mismas variables y la misma biblioteca, con los mismos scripts. El árbol de operaciones y la vista siguen funcionando: haga clic en una operación para seleccionarla, haga doble clic en un croquis para editarlo, gire la vista, y luego regrese a la pestaña {{ui:Script}} y pulse {{key:F5}}.

Lo que un script **muestra** (mallas, campos, gráficos, tablas) no se dibuja sobre su modelo en Diseño: la consola lo indica, y el espacio de trabajo Script lo tiene todo cuando cambia a él.

{{ui:Desacoplar}}, junto a {{ui:Ejecutar}}, mueve todo el panel a una ventana propia, por ejemplo a una segunda pantalla, para que el editor y la vista completa queden lado a lado. {{ui:Volver a colocar}} lo vuelve a acoplar. Vea [Acomodar los paneles](common:arrange-panels).

## Ejecute su primer script

1. Escriba en el editor, por ejemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pulse {{key:F5}} (o {{ui:Ejecutar}}). La consola bajo el editor muestra lo que imprimió el script, y "Terminado en … s". El gráfico aparece en las **subpantallas** a lo largo de la parte inferior de la vista 3D.
3. Una línea sin punto y coma muestra su valor, como en MATLAB: `a = 3` muestra `a = 3`; `a = 3;` no muestra nada.
4. Para ejecutar solo parte de un script, seleccione las líneas y pulse {{key:Mod+Enter}} ({{ui:Selección}}). Si no hay nada seleccionado, se ejecuta la línea donde está el cursor.
5. La línea al final de la consola (después de `>>`) ejecuta una instrucción al pulsar {{key:Enter}}. {{key:Up}} y {{key:Down}} traen de vuelta las líneas anteriores.

## Buscar, plegar y completar

- **Buscar y reemplazar.** Pulse {{key:Mod+F}} (o {{key:Mod+H}} para reemplazar también). Se abre una barra sobre el código: escriba lo que busca; las coincidencias se resaltan y el contador indica en cuál está. Los botones junto al cuadro distinguen mayúsculas (**Aa**), buscan solo palabras completas (**W**) y usan una expresión regular (**.\***; en el reemplazo, `$1` pone lo que capturó el primer grupo). {{ui:Reemplazar}} sustituye la coincidencia actual, y {{ui:Todas}} reemplaza cada coincidencia como un solo paso de {{key:Mod+Z}}.
- **Plegado.** Haga clic en el ▾ junto a un número de línea, o pulse {{key:Mod+Shift+[}} con el cursor en una línea `function`, `if`, `for`, `while`, `switch` o `try` (Lua: `function`, `do`, `if`, `repeat`), para ocultar sus líneas internas; la línea indica cuántas son. ▸ o {{key:Mod+Shift+]}} la vuelve a abrir. El plegado solo oculta líneas: {{ui:Ejecutar}}, {{ui:Guardar}}, copiar y los números de línea siguen contando todas las líneas, y escribir en una línea plegada la abre primero.
- **Completado.** Escriba dos letras de un nombre, o pulse {{key:Mod+Space}}: aparece una lista con las variables que tiene, las funciones del lenguaje (con sus argumentos), las palabras clave y los nombres ya usados en el script. Elija con las flechas y pulse {{key:Enter}} o {{key:Tab}}.

## Cuando algo sale mal

- Un error indica el problema y su línea: la línea se marca en rojo en el editor, y **Línea n** en la consola lo lleva hasta ella.
- Un bucle que no termina: pulse {{ui:Detener}} (barra de herramientas o panel). El script se detiene de inmediato; las variables conservan los valores que tenían antes de esa ejecución.
- Cada ejecución también tiene un presupuesto de pasos (2 mil millones de pasos por omisión; cámbielo en **Opciones de ejecución** del panel). Una ejecución que lo rebasa se detiene con un mensaje.

## Las variables pasan de un script a otro

Cada variable de nivel superior que crea un script llega a la pestaña **Variables** (nombre, tipo, tamaño, valor más pequeño y más grande) y se conserva para el siguiente script, en cualquiera de los dos lenguajes. Así es como un script hace la malla, el siguiente resuelve y un tercero grafica.

- Haga clic en una variable para mostrarla: mallas, campos y modelos en la vista 3D, y arreglos como tabla (más un gráfico de línea para un vector o un mapa de colores para una matriz) en las subpantallas.
- {{ui:Guardar como JSON}}, {{ui:Guardar como CSV}} (una tabla de números) y {{ui:Guardar como HDF5}} la descargan; {{ui:Eliminar}} la quita; {{ui:Borrar todo}} vacía el espacio de trabajo.
- Marque **Guardar las variables con la pieza** para conservarlas en el archivo de la pieza (hasta 32 MB; las más grandes se quedan solo para esta visita). Al abrir una pieza así, el panel ofrece cargarlas.

## Mallas, campos y gráficos

- `show(m)` dibuja una malla; `show(f)` colorea un campo sobre su malla con una leyenda. La lista **Mostrados**, en la parte superior izquierda de la vista, oculta ({{ui:ojo}}) o quita cada elemento, y oculta o muestra la pieza misma. Bajo la leyenda, escriba un rango (**Desde**, **hasta**) o pulse {{ui:Auto}}; un campo vectorial o de esfuerzo también ofrece qué componente mostrar.
- `show(f, 'deform', u, 'scale', 50)` dibuja la malla desplazada por un campo de desplazamiento `u`, ampliada 50 veces (sin `scale`, unos 8 % del tamaño del modelo).
- Haga clic en una malla mostrada: el nodo más cercano, el elemento y los valores del campo en ese punto aparecen en las subpantallas (**Seleccionado**).
- `plot`, `imagesc` y `table` ponen un gráfico de línea, un mapa de colores de un arreglo 2-D o una tabla en las subpantallas. Un gráfico con el mismo `'id'` (o título) que uno anterior lo reemplaza, así que un ciclo puede actualizar un solo gráfico de convergencia; `'append', true` agrega una curva a él. {{ui:Borrar selección}} vacía las subpantallas; la flecha las pliega.
- Con dos o más gráficos, {{ui:Lado a lado}} los muestra todos a la vez (los seis más nuevos); al hacer clic en la pestaña de una tabla o de una imagen, se muestra solo esa de nuevo.
- Cada gráfico tiene debajo {{ui:PNG}}, {{ui:SVG}} y {{ui:CSV}}. PNG y SVG lo imprimen sobre blanco, en los colores de papel, sin importar el tema (PNG de 1600 × 1000 píxeles; SVG escala sin perder nitidez); CSV guarda sus números con todos los dígitos: una columna de x y una columna por curva cuando las curvas comparten x; si no, una fila por punto con el nombre de la curva.
- {{key:F}} o {{ui:Ajustar}} ajusta la vista a lo que se muestra.

## Archivos

- {{ui:Abrir}} en el grupo Script (o suelte archivos sobre la vista o el panel): los archivos `.craft`, `.lua` y `.py` se abren como scripts nuevos (no se ejecutan); los archivos de datos (STL, OBJ, CSV, JSON, NPY, HDF5) se cargan en las variables con su nombre de archivo.
- {{ui:Guardar}} en el grupo Script descarga el script actual como archivo.
- {{ui:Nuevo}} en el grupo Script (o {{ui:+}} junto a las pestañas) inicia otro script. Haga doble clic en una pestaña para cambiarle el nombre; su {{ui:×}} la quita (puede deshacerlo).

## Lea los parámetros de la pieza

Un script lee los parámetros de la pieza (vea [Controle una pieza con parámetros](topic:parameters)) por nombre:

```
w = param('width');     % el valor de un parámetro, en mm (o grados, o un número simple)
p = params();           % todos, como estructura: p.width, p.height
```

En Lua y Python son `cs.param('width')` y `cs.params()`. Los scripts solo leen parámetros: cámbielos en la pestaña {{ui:Parámetros}}. Bajo la pestaña del script, una línea enumera los parámetros que lee con `param('…')` y marca los que la pieza no tiene; la pestaña {{ui:Parámetros}} enumera el script bajo cada uno. Un nombre armado mientras el script se ejecuta, como `param(name)`, no aparece en la lista.

## Los scripts se guardan en la pieza

Cada script de las pestañas se guarda en la pieza, así que {{ui:Guardar}} en el grupo Archivo los guarda con ella, y los cambios se pueden deshacer. Abrir una pieza **nunca ejecuta sus scripts**: la consola indica cuántos trae, y se ejecutan solo cuando pulsa {{ui:Ejecutar}}. Una pieza de otra persona puede traer cualquier script: léalo antes de ejecutarlo. Los scripts se ejecutan en segundo plano en esta computadora, sin acceso a la red, y no pueden tocar la página.

## Relacionados

- [El lenguaje CraftScript](topic:craftscript-language)
- [Scripts en Lua](topic:craftscript-lua)
- [Scripts en Python](topic:craftscript-python)
- [La biblioteca de análisis](topic:craftscript-library)
- [Escriba su propio análisis](topic:craftscript-own-analysis)
