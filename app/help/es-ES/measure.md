---
title: Medir distancias, ángulos y masa
summary: Haga clic en dos elementos de la vista para obtener la distancia mínima, el ángulo y ΔX ΔY ΔZ; lea la longitud de una arista, el diámetro de un agujero, el área de una cara o las coordenadas de un punto; obtenga el volumen, la masa, el centro de masas y la inercia de una pieza o de un ensamblaje.
keywords: medir, distancia, distancia mínima, ángulo, longitud, radio, diámetro, área, coordenadas, delta, inspeccionar, propiedades físicas, masa, peso, centro de masas, inercia, momento de inercia, densidad, material
from: 20bda0b7
---

**Medir** funciona sobre el modelo en todos los espacios de trabajo (Diseño, Forma, Simulación, Generativo, Fabricación) y en un ensamblaje. Está en el menú {{ui:Vistas}} del grupo **Vista**, o pulse {{key:M}}. Se abre una tarjeta sobre la esquina superior izquierda de la vista.

## Medir un elemento

Haga clic en un vértice, una arista o una cara. La tarjeta muestra:

- **Un punto** (un vértice, el punto medio de una arista o el centro de un círculo): sus X, Y, Z.
- **Una arista**: recta, circular o curva, y su longitud; para un círculo, también el radio, el diámetro y el centro.
- **Una cara**: plana, cilíndrica, cónica, etc., y su área; la normal de una cara plana; el radio y el diámetro de un cilindro (el tamaño de un agujero). Las áreas son de las facetas que construye el núcleo de malla.
- **El cuerpo completo**: mantenga {{key:Shift}} y haga clic en la pieza. Obtiene su volumen, área, masa e inercia (véase más abajo).

El puntero se ajusta a vértices, puntos medios de aristas y centros de círculos a 10 píxeles; un pequeño punto azul muestra el ajuste antes de hacer clic. Para elegir el centro de un agujero, sitúe el puntero en el centro del agujero; para elegir su borde (el círculo), sitúe el puntero en el borde.

## Medir entre dos elementos

Haga clic en un segundo elemento. La tarjeta añade:

- **Distancia mínima** y los dos puntos más cercanos, dibujados en la vista con una línea entre ellos.
- **ΔX, ΔY, ΔZ** desde el primer punto más cercano hasta el segundo.
- **Ángulo** entre dos caras planas (entre sus normales, 0–180°), entre dos aristas o ejes rectos (0–90°), o entre una arista y una cara.
- **Separación entre los planos** de dos caras planas paralelas, **Centro a centro** para dos círculos o agujeros, **Eje a eje** para dos agujeros o cilindros paralelos.

Un tercer clic inicia un nuevo par. {{key:Esc}} borra las selecciones; {{key:Esc}} de nuevo (o {{ui:Cerrar}}) cierra Medir. {{ui:Copiar}} pone los resultados en el portapapeles como texto separado por tabuladores, listo para pegar en una hoja de cálculo.

### Precisión

PartCraft construye la pieza con el núcleo de malla, así que las distancias se calculan sobre las facetas de la malla, y la tarjeta indica **aproximado: de las facetas**. Es correcto para caras planas y entre vértices, y algo impreciso para las superficies curvas. Un ajuste de **Curvas** más fino las acerca. Medir con exactitud sobre las superficies reales requiere un núcleo exacto, que aún no está implementado en esta versión.

## Propiedades físicas

Elija {{ui:Propiedades físicas}} en la tarjeta o en el menú {{ui:Vistas}}. En una pieza, elija un **Material** en la tarjeta (acero, aluminio, plásticos y otros, con sus densidades habituales). En un ensamblaje, cada pieza usa el material fijado en sus propiedades (seleccione la pieza y después **Material**), y el resultado es para todas las piezas en conjunto.

La tarjeta muestra la masa, el volumen, el área, el centro de masas, el tensor de inercia (Ixx, Iyy, Izz y los productos Ixy, Iyz, Ixz, en kg·mm², respecto al centro de masas según los ejes del mundo) y los momentos principales. Sin material, muestra lo mismo por unidad de densidad (mm⁵) y no muestra masa.

Los números son exactos para el sólido teselado que construye el núcleo de malla (las caras curvas como facetas), así que una pieza redonda sale algo baja, y la tarjeta lo indica. Las densidades de los materiales son valores típicos de manuales; una aleación o un grado concretos pueden diferir en unos pocos por ciento.

## Límites

- Los ajustes pueden encontrar un punto oculto tras otra geometría; compruebe que la tarjeta muestra lo que quería.
- Medir se cierra al abrir un croquis o la hoja de dibujo, o al cambiar de espacio de trabajo.
