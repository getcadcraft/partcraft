---
title: Nodos, construir un modelo conectando
summary: Conecte números con puntos, puntos con curvas y curvas con superficies. Si cambia un número, todo lo que depende de él se reconstruye. Cada nodo es también una línea de CraftScript, y el grafo se guarda en el archivo.
keywords: nodos, editor de nodos, modelado visual, paramétrico, grafo, conexiones, puertos, forma libre, freeform, NURBS, solevación, extrusión, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, CraftScript, grasshopper
from: 3a4625de
---

El editor de **Nodos** construye geometría conectando cajas entre sí. Cada caja (un nodo) hace una tarea pequeña: crear un número, un punto, un círculo, una solevación. Conecte el resultado de uno a la entrada del siguiente, y el modelo sigue los cambios cuando modifica un número al principio.

Ábralo desde la lista de espacios de trabajo: {{ui:Nodes}}. Se abre la ventana del editor. Una pieza que ya tiene un grafo lo muestra al abrir el espacio de trabajo. Es una ventana sobre la vista 3D: arrastre su barra de título para moverla, y su esquina para cambiar el tamaño.

## Conexiones

1. Elija un nodo de la lista de la izquierda (escriba en el cuadro de búsqueda para acotarla; <kbd>Intro</kbd> añade la primera coincidencia). Aparece en el centro del lienzo.
2. Arrastre desde un punto de **salida** redondo, a la derecha de un nodo, hasta un punto de **entrada** redondo, a la izquierda de otro. El punto se pone verde cuando encaja y rojo cuando no; sitúe el puntero sobre él para ver el motivo.
3. Una entrada sin nada conectado muestra una casilla para un valor escrito. Escriba un número y pulse <kbd>Tab</kbd>: el resultado se reconstruye.
4. El pequeño círculo de la barra de título de un nodo es su **ojo**. Un nodo con el ojo activado se dibuja en la vista 3D: como líneas para las curvas, sombreado para las superficies y puntos para los puntos.

Arrastre un nodo por su barra de título. Arrastre el fondo para desplazar la vista; gire la rueda para acercar o alejar. <kbd>Delete</kbd> elimina el nodo seleccionado. {{ui:Tidy}} ordena los nodos en columnas, {{ui:Fit}} los trae todos a la vista, y {{ui:Undo}} y {{ui:Redo}} recorren sus cambios.

## Tipos y unidades

Los puertos tienen un tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido, o «geometría» para cualquiera de ellos. Un punto puede alimentar una entrada de vector y viceversa. Los números llevan unidad: una **longitud** va en milímetros y un **ángulo** en grados. Una longitud no puede alimentar un ángulo, y una longitud por otra longitud (un área) se rechaza, así que una conexión errónea se detiene en el momento de hacerla.

Un punto cuadrado es una **lista**. Cuando una lista llega a una entrada de valor único, el nodo se ejecuta una vez por cada elemento, y su resultado es una lista. La lista más corta repite su último elemento. Por ejemplo, una **Serie** de alturas conectada a **Mover** produce una pila de copias.

## Sólidos y operaciones booleanas como nodos

El grupo **Sólidos** crea cuerpos cerrados a partir de las mismas superficies exactas que el panel **Superficies**: **Caja sólida**, **Cilindro sólido** y **Esfera sólida** (tamaños en mm), **Unión**, **Restar** e **Intersecar** (el segundo sólido se toma del primero; la tolerancia es lo lejos que pueden estar los triángulos del motor de sólidos de las superficies exactas), **Redondeo entre caras** (las caras por su número en el sólido, 1 para la primera; un radio y, si es mayor que 0, un radio al final), **Volumen del sólido** (mm³) y **Sólido a malla** (para verlo o fijarlo en la pieza). Un sólido tiene su propio tipo de puerto: un punto o un número no pueden conectarse a una entrada de sólido, y el punto queda rojo. Los nodos booleanos y de redondeo usan el motor de sólidos propio del programa, que se carga la primera vez que se abre el editor.

## Errores

Un nodo que no puede hacer su tarea indica el motivo bajo su nombre, en rojo («El radio debe ser mayor que cero.»), y los nodos posteriores esperan. El mismo mensaje aparece como un Problema en el panel Problemas, así que puede localizarlo desde allí.

## Cada nodo es una línea de script

Pulse {{ui:Script}} para ver el grafo como CraftScript: una línea por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite el texto y pulse {{ui:Make the graph from this script}} para devolverlo a grafo. Las mismas funciones `nd_` funcionan en un CraftScript de PartCraft, de modo que un grafo puede ejecutarse, repetirse o probarse allí. Los números aleatorios siempre reciben una **semilla**, así que el mismo grafo da el mismo resultado en cualquier ordenador.

## Guardado con el archivo

El grafo se guarda en el archivo de la pieza (no en el historial, así que el Deshacer del editor es independiente). Los nodos crean curvas, superficies y mallas junto al sólido: no modifican los elementos de la pieza.
