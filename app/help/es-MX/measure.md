---
title: Medir distancias, ángulos y masa
summary: Haga clic en dos cosas en la vista para obtener la distancia mínima, el ángulo y ΔX ΔY ΔZ; lea la longitud de una arista, el diámetro de un agujero, el área de una cara o las coordenadas de un punto; obtenga volumen, masa, centro de masa e inercia de una pieza o de un ensamblaje.
keywords: medir, distancia, distancia mínima, ángulo, longitud, radio, diámetro, área, coordenadas, delta, inspeccionar, propiedades físicas, masa, peso, centro de masa, inercia, momento de inercia, densidad, material
from: 20bda0b7
---

**Medir** funciona sobre el modelo en todos los espacios de trabajo (Diseño, Forma, Simulación, Generativo, Manufactura) y en un ensamblaje. Está en el menú {{ui:Vistas}} del grupo {{ui:Vista}}, o pulse {{key:M}}. Se abre una tarjeta sobre la esquina superior izquierda de la vista.

## Medir una cosa

Haga clic en un vértice, una arista o una cara. La tarjeta muestra:

- **Un punto** (un vértice, el punto medio de una arista o el centro de un círculo): sus X, Y, Z.
- **Una arista**: recta, circular o curva, y su longitud; en un círculo, también el radio, el diámetro y el centro.
- **Una cara**: plana, cilíndrica, cónica, etc., y su área; la normal de una cara plana; el radio y el diámetro de un cilindro (el tamaño de un agujero). Las áreas son de las facetas que construye el núcleo de malla.
- **El cuerpo completo**: mantenga {{key:Shift}} y haga clic en la pieza. Obtiene su volumen, área, masa e inercia (vea abajo).

El puntero se ajusta a vértices, puntos medios de aristas y centros de círculos dentro de 10 píxeles; un pequeño punto azul muestra el ajuste antes de hacer clic. Para designar el centro de un agujero, apunte al centro del agujero; para designar su borde (el círculo), apunte al borde.

## Medir entre dos cosas

Haga clic en un segundo elemento. La tarjeta agrega:

- **Distancia mínima** y los dos puntos más cercanos, dibujados en la vista con una línea entre ellos.
- **ΔX, ΔY, ΔZ** desde el primer punto más cercano hasta el segundo.
- **Ángulo** entre dos caras planas (entre sus normales, 0–180°), entre dos aristas rectas o ejes (0–90°), o entre una arista y una cara.
- **Separación entre los planos** para dos caras planas paralelas, **Centro a centro** para dos círculos o agujeros, y **Eje a eje** para dos agujeros o cilindros paralelos.

Un tercer clic inicia un nuevo par. {{key:Esc}} borra las selecciones; {{key:Esc}} de nuevo (o {{ui:Cerrar}}) cierra Medir. {{ui:Copiar}} pone los resultados en el portapapeles como texto separado por tabulaciones, listo para pegar en una hoja de cálculo.

### Qué tan exacto es

PartCraft construye la pieza con el núcleo de malla, así que las distancias se calculan sobre las facetas de la malla, y la tarjeta dice **aproximado: de las facetas**: correcto para caras planas y entre vértices, levemente impreciso para superficies curvas. Un ajuste de **Curvas** más fino las acerca. Medir de forma exacta sobre las superficies verdaderas requiere un núcleo exacto: aún no implementado en esta versión.

## Propiedades físicas

Elija {{ui:Propiedades físicas}} en la tarjeta o en el menú {{ui:Vistas}}. En una pieza, elija un **Material** en la tarjeta (acero, aluminio, plásticos y otros con sus densidades habituales). En un ensamblaje, cada pieza usa el material fijado en sus propiedades (seleccione la pieza y luego **Material**), y el resultado es para todas las piezas juntas.

La tarjeta muestra masa, volumen, área, centro de masa, el tensor de inercia (Ixx, Iyy, Izz y los productos Ixy, Iyz, Ixz, en kg·mm², alrededor del centro de masa según los ejes del mundo) y los momentos principales. Sin material muestra lo mismo por unidad de densidad (mm⁵) y sin masa.

Los números son exactos para el sólido teselado que construye el núcleo de malla (las superficies curvas como facetas), así que una pieza redonda sale un poco baja, y la tarjeta lo indica. Las densidades de material son valores típicos de manuales; una aleación o un grado real puede diferir unos pocos por ciento.

## Límites

- Los ajustes pueden encontrar un punto oculto detrás de otra geometría; verifique que la tarjeta muestre lo que quiso.
- Medir se cierra al abrir un croquis o la hoja de dibujo, o al cambiar de espacio de trabajo.
