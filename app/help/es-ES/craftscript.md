---
title: Escribir y ejecutar scripts (espacio de trabajo Script)
summary: El espacio de trabajo Script paso a paso: escriba un script de CraftScript o Lua, ejecútelo con F5, lea la consola, guarde resultados en las variables para el siguiente script, muestre mallas, campos y gráficos, detenga una ejecución y guarde los scripts con la pieza.
keywords: script, scripting, script mientras modela, desacoplar, segunda pantalla, segundo monitor, param, params, parámetros en scripts, CraftScript, Lua, código, programa, editor, consola, REPL, línea de comandos, ejecutar, F5, ejecutar selección, detener, variables, espacio de trabajo, gráfico, campo, malla, leyenda, subpantalla, análisis, automatización, matriz, numérico
from: d0003e89
---

**Vista previa.** El scripting es nuevo en PartCraft 0.3 y se encuentra en vista previa: el lenguaje, la biblioteca y la forma de guardar los scripts pueden cambiar, y los scripts escritos ahora podrían necesitar pequeños ajustes más adelante. Díganos qué falla.

El espacio de trabajo Script ejecuta sus propios cálculos junto a la pieza: sumas pequeñas, análisis completos o los scripts de la [biblioteca de análisis](topic:craftscript-library). Los scripts se escriben en **CraftScript** (un lenguaje matricial muy parecido a MATLAB, véase [El lenguaje CraftScript](topic:craftscript-language)), en **Lua** (véase [Scripts en Lua](topic:craftscript-lua)) o en **Python** (véase [Scripts en Python](topic:craftscript-python)).

Elija **Script** en el cuadro **Espacio de trabajo** a la izquierda de la barra de herramientas. La pieza no cambia. El panel derecho se convierte en el panel de scripts (más ancho de lo habitual; arrastre su borde para cambiarlo, o muévalo a una segunda pantalla con su menú {{ui:⋯}}, véase [Organizar los paneles](common:arrange-panels)).

## Escribir un script mientras modela

No tiene que salir del espacio de trabajo Diseño para escribir un script. En Diseño, la pestaña {{ui:Script}} del panel derecho contiene el mismo editor, la misma consola, las mismas variables y la misma biblioteca, con los mismos scripts. El árbol de historial y la vista siguen funcionando: haga clic en una operación para seleccionarla, haga doble clic en un boceto para editarlo, gire la vista, y luego vuelva a la pestaña {{ui:Script}} y pulse {{key:F5}}.

Lo que un script **muestra** (mallas, campos, gráficos, tablas) no se dibuja sobre su modelo en Diseño: la consola lo indica, y el espacio de trabajo Script lo tiene todo cuando cambia a él.

{{ui:Desacoplar}}, junto a {{ui:Ejecutar}}, mueve todo el panel a una ventana propia, por ejemplo a una segunda pantalla, de modo que el editor y la vista completa queden uno al lado del otro. {{ui:Volver a colocar}} lo vuelve a acoplar. Véase [Organizar los paneles](common:arrange-panels).

## Ejecutar su primer script

1. Escriba en el editor, por ejemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pulse {{key:F5}} (o {{ui:Ejecutar}}). La consola bajo el editor muestra lo que imprimió el script y «Hecho en … s». El gráfico aparece en las **subpantallas** a lo largo de la parte inferior de la vista 3D.
3. Una línea sin punto y coma muestra su valor, como en MATLAB: `a = 3` muestra `a = 3`; `a = 3;` no muestra nada.
4. Para ejecutar solo parte de un script, seleccione las líneas y pulse {{key:Mod+Enter}} ({{ui:Selección}}). Sin nada seleccionado, ejecuta la línea donde está el cursor.
5. La línea del final de la consola (tras `>>`) ejecuta una sentencia al pulsar Intro ({{key:Enter}}). {{key:Up}} y {{key:Down}} recuperan líneas anteriores.

## Buscar, plegar y completar

- **Buscar y reemplazar.** Pulse {{key:Mod+F}} (o {{key:Mod+H}} para reemplazar también). Se abre una barra encima del código: escriba lo que busca; las coincidencias se resaltan y el contador indica dónde está. Los botones junto al cuadro distinguen mayúsculas (**Aa**), buscan solo palabras completas (**W**) y usan una expresión regular (**.\***; en el reemplazo, `$1` devuelve lo que capturó el primer grupo). {{ui:Reemplazar}} sustituye la coincidencia actual; {{ui:Todas}} sustituye todas las coincidencias como un solo paso de {{key:Mod+Z}}.
- **Plegado.** Haga clic en el ▾ junto a un número de línea, o pulse {{key:Mod+Shift+[}} con el cursor en una línea `function`, `if`, `for`, `while`, `switch` o `try` (Lua: `function`, `do`, `if`, `repeat`), para ocultar sus líneas interiores; la línea indica cuántas son. ▸ o {{key:Mod+Shift+]}} la abre de nuevo. Plegar solo oculta líneas: Ejecutar, Guardar, copiar y los números de línea siguen contando todas las líneas, y escribir en una línea plegada la abre antes.
- **Completado.** Escriba dos letras de un nombre, o pulse {{key:Mod+Space}}: aparece una lista con las variables que tiene, las funciones del lenguaje (con sus argumentos), las palabras clave y los nombres ya usados en el script. Elija con las flechas y pulse Intro ({{key:Enter}}) o {{key:Tab}}.

## Cuando algo sale mal

- Un error indica el problema y su línea: la línea se marca en rojo en el editor, y **Línea n** en la consola le lleva hasta ella.
- Un bucle que nunca termina: pulse {{ui:Detener}} (barra de herramientas o panel). El script se detiene de inmediato; las variables conservan los valores que tenían antes de esa ejecución.
- Cada ejecución también tiene un presupuesto de pasos (2000 millones de pasos por defecto; cámbielo en **Opciones de ejecución** del panel). Una ejecución que lo supera se detiene con un mensaje.

## Las variables pasan de un script a otro

Cada variable de nivel superior que crea un script pasa a la pestaña **Variables** (nombre, tipo, tamaño, valor más pequeño y más grande) y se mantiene allí para el siguiente script, en cualquiera de los dos lenguajes. Así, un script genera la malla, el siguiente resuelve y un tercero dibuja.

- Haga clic en una variable para mostrarla: mallas, campos y modelos en la vista 3D; arrays como tabla (más un gráfico de líneas para un vector o un mapa de color para una matriz) en las subpantallas.
- {{ui:Guardar como JSON}}, {{ui:Guardar como CSV}} (una tabla de números) y {{ui:Guardar como HDF5}} la descargan; {{ui:Eliminar}} la quita; {{ui:Borrar todo}} vacía el espacio de trabajo.
- Marque **Guardar las variables con la pieza** para conservarlas en el archivo de la pieza (hasta 32 MB; las más grandes se quedan solo para esta visita). Al abrir una pieza así, el panel ofrece cargarlas.

## Mallas, campos y gráficos

- `show(m)` dibuja una malla; `show(f)` colorea un campo sobre su malla con una leyenda. La lista **Mostrados**, arriba a la izquierda de la vista, oculta ({{ui:ojo}}) o quita cada elemento, y oculta o muestra la propia pieza. Debajo de la leyenda, escriba un rango (**De**, **a**) o pulse {{ui:Auto}}; un campo de vector o de tensión también ofrece qué componente mostrar.
- `show(f, 'deform', u, 'scale', 50)` dibuja la malla desplazada por un campo de desplazamientos `u`, ampliada 50 veces (sin `scale`, unos 8 % del tamaño del modelo).
- Haga clic en una malla mostrada: el nodo más cercano, el elemento y los valores del campo allí aparecen en las subpantallas (**Seleccionado**).
- `plot`, `imagesc` y `table` colocan un gráfico de líneas, un mapa de color de un array 2D o una tabla en las subpantallas. Un gráfico con el mismo `'id'` (o título) que uno anterior lo reemplaza, así que un bucle puede actualizar un solo gráfico de convergencia; `'append', true` añade una curva. {{ui:Borrar selección}} vacía las subpantallas; la flecha las pliega.
- Con dos o más gráficos, {{ui:Lado a lado}} los muestra todos a la vez (los seis más recientes); al hacer clic en la pestaña de una tabla o de una imagen se vuelve a mostrar solo esa.
- Cada gráfico tiene debajo {{ui:PNG}}, {{ui:SVG}} y {{ui:CSV}}. PNG y SVG lo imprimen sobre blanco con los colores de papel, sea cual sea el tema (PNG de 1600 × 1000 píxeles; SVG escala sin emborronarse); CSV guarda sus números con todas las cifras: una columna de x y una columna por curva cuando las curvas comparten x, y si no, una fila por punto con el nombre de la curva.
- {{key:F}} o {{ui:Ajustar}} ajusta la vista a lo que se muestra.

## Archivos

- {{ui:Abrir}} en el grupo Script (o suelte archivos sobre la vista o el panel): los archivos `.craft`, `.lua` y `.py` se abren como nuevos scripts (no se ejecutan); los archivos de datos (STL, OBJ, CSV, JSON, NPY, HDF5) se cargan en las variables con su nombre de archivo.
- {{ui:Guardar}} en el grupo Script descarga el script actual como archivo.
- {{ui:Nuevo}} en el grupo Script (o {{ui:+}} junto a las pestañas) inicia otro script. Haga doble clic en una pestaña para cambiarle el nombre; su {{ui:×}} lo elimina (puede deshacerlo).

## Leer los parámetros de la pieza

Un script lee los parámetros de la pieza (véase [Controlar una pieza con parámetros](topic:parameters)) por su nombre:

```
w = param('width');     % el valor de un parámetro, en mm (o en grados, o un número sencillo)
p = params();           % todos ellos, como estructura: p.width, p.height
```

En Lua y en Python son `cs.param('width')` y `cs.params()`. Los scripts solo leen parámetros: cámbielos en la pestaña {{ui:Parámetros}}. Bajo la pestaña del script, una línea enumera los parámetros que lee con `param('…')` y marca los que la pieza no tiene; la pestaña {{ui:Parámetros}} enumera el script bajo cada uno. Un nombre construido mientras el script se ejecuta, como `param(name)`, no aparece en la lista.

## Los scripts se guardan en la pieza

Cada script de las pestañas se guarda en la pieza, así que {{ui:Guardar}} en el grupo Archivo lo guarda con ella, y los cambios en ellos pueden deshacerse. Abrir una pieza **nunca ejecuta sus scripts**: la consola indica cuántos contiene, y se ejecutan solo al pulsar Ejecutar. Una pieza de otra persona puede contener cualquier script: léalo antes de ejecutarlo. Los scripts se ejecutan en segundo plano en este equipo, sin acceso a la red, y no pueden tocar la página.

## Relacionado

- [El lenguaje CraftScript](topic:craftscript-language)
- [Scripts en Lua](topic:craftscript-lua)
- [Scripts en Python](topic:craftscript-python)
- [La biblioteca de análisis](topic:craftscript-library)
- [Escribir un análisis propio](topic:craftscript-own-analysis)
