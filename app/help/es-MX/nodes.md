---
title: Nodos: construir un modelo conectando
summary: Conecte números con puntos, puntos con curvas y curvas con superficies. Si cambia un número, todo lo que depende de él se reconstruye. Cada nodo también es una línea de CraftScript, y el grafo se guarda en el archivo.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, puertos, forma libre, nurbs, solevación, extruir, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 3a4625de
---

El editor de **Nodos** construye geometría conectando cajas entre sí. Cada caja (un nodo) hace una tarea pequeña: crear un número, un punto, un círculo, una solevación. Usted conecta el resultado de una con la entrada de la siguiente, y el modelo sigue los cambios cuando modifica un número al inicio.

Ábralo desde la lista del espacio de trabajo: {{ui:Nodes}}. Se abre la ventana del editor. Una pieza que ya tiene un grafo lo muestra al abrir el espacio de trabajo. Es una ventana sobre la vista 3D: arrastre su barra de título para moverla y su esquina para cambiar el tamaño.

## Conectar

1. Elija un nodo de la lista de la izquierda (escriba en el cuadro de búsqueda para filtrar; <kbd>Enter</kbd> agrega la primera coincidencia). Aparece en el centro del lienzo.
2. Arrastre desde un punto **de salida** redondo a la derecha de un nodo hasta un punto **de entrada** redondo a la izquierda de otro. El punto se pone verde cuando encaja y rojo cuando no; señálelo para ver el motivo.
3. Una entrada sin conexión muestra un cuadro para un valor escrito. Escriba un número y pulse <kbd>Tab</kbd>: el resultado se reconstruye.
4. El pequeño círculo de la barra de título de un nodo es su **ojo**. Un nodo con el ojo activado se dibuja en la vista 3D: como líneas para las curvas, sombreado para las superficies y puntos para los puntos.

Arrastre un nodo por su barra de título. Arrastre el fondo para desplazar la vista, y gire la rueda para acercar. <kbd>Delete</kbd> elimina el nodo seleccionado. {{ui:Tidy}} ordena los nodos en columnas, {{ui:Fit}} los trae a la vista, y {{ui:Undo}} y {{ui:Redo}} recorren sus ediciones.

## Tipos y unidades

Los puertos tienen un tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido, o «geometría» para cualquiera de ellos. Un punto puede alimentar una entrada de vector, y viceversa. Los números llevan una unidad: una **longitud** está en milímetros y un **ángulo** en grados. Una longitud no puede alimentar un ángulo, y una longitud por una longitud (un área) se rechaza, así que un cable incorrecto se bloquea al crearlo.

Un punto cuadrado es una **lista**. Cuando una lista llega a una entrada de valor único, el nodo se ejecuta una vez por cada elemento, y su resultado pasa a ser una lista. La lista más corta repite su último elemento. Por ejemplo, una **Serie** de alturas conectada a **Mover** produce una pila de copias.

## Sólidos y booleanas como nodos

El grupo **Sólidos** crea cuerpos cerrados a partir de las mismas superficies exactas del panel Superficies: **Sólido caja**, **Sólido cilindro** y **Sólido esfera** (tamaños en mm), **Unión**, **Restar** e **Intersecar** (el segundo sólido se toma del primero; la tolerancia es qué tan lejos pueden estar los triángulos del motor de sólidos de las superficies exactas), **Redondeo entre caras** (las caras por su número dentro del sólido, 1 para la primera; un radio y, por encima de 0, un radio al final), **Volumen del sólido** (mm³) y **Sólido a malla** (para verlo o incorporarlo). Un sólido tiene su propio tipo de puerto: un punto o un número no pueden conectarse a una entrada de sólido, y el punto queda rojo. Los nodos de operaciones booleanas y de redondeo usan el motor de sólidos propio del programa, que se carga la primera vez que se abre el editor.

## Errores

Un nodo que no puede hacer su tarea indica el motivo bajo su nombre, en rojo («El radio debe ser mayor que cero.»), y los nodos siguientes esperan. El mismo mensaje aparece como un problema en el panel Problemas, así que puede localizarlo desde allí.

## Cada nodo es una línea de script

Pulse {{ui:Script}} para ver el grafo como CraftScript: una línea por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite el texto y pulse {{ui:Make the graph from this script}} para devolverlo a forma de grafo. Las mismas funciones `nd_` funcionan en un CraftScript de PartCraft, así que un grafo puede ejecutarse, repetirse o probarse allí. Los números aleatorios siempre requieren una **semilla**, de modo que el mismo grafo da el mismo resultado en cualquier computadora.

## Guardado con el archivo

El grafo se guarda en el archivo de la pieza (no en el historial, así que Deshacer del editor es independiente). Los nodos crean curvas, superficies y mallas junto al sólido: no cambian las operaciones de la pieza.
