---
title: Bastidores con perfiles de acero
summary: Coloque perfiles de acero a lo largo de las líneas de uno o más croquis para formar un bastidor soldado: esquinas a inglete o a tope, piezas recortadas a medida donde se encuentran, tapas de extremo, cartelas y una lista de corte con longitudes y ángulos de extremo.
keywords: conjunto soldado, elemento estructural, bastidor, bastidor de acero, tubo, tubo cuadrado, hss, rhs, shs, tubo redondo, chs, perfil de alas anchas, perfil en I, viga w, ipe, hea, heb, canal, upn, ángulo, inglete, unión a tope, recorte, tapa de extremo, cartela, lista de corte
from: 59071e5a
---

Un **Elemento estructural** coloca un perfil de acero a lo largo de cada línea de los croquis que elija. Dibuje el bastidor como líneas (cada línea es un elemento) y luego elija el perfil: los elementos se construyen, sus esquinas se recortan y alargan, y una lista de corte indica la longitud de cada pieza y el ángulo al que se corta.

## Crear un bastidor

1. Dibuje el bastidor como líneas en un croquis, por ejemplo un rectángulo en el plano superior. Las líneas marcadas como construcción se omiten.
2. Con el croquis seleccionado, elija {{ui:Más}} › {{ui:Elemento estructural}}. Cada línea del croquis recibe un elemento.
3. En el panel, elija la **Familia** y el **Formato** del perfil. Las familias son las tablas AISC (W, S, C, L, tubos HSS, Pipe) y EN 10365 (IPE, HEA, HEB, UPN).

### Un bastidor en 3D

Las líneas de varios croquis forman un solo bastidor: un rectángulo superior dibujado en un plano elevado, y las patas dibujadas en planos verticales, se unen por sus extremos en 3D. Bajo **A lo largo de las líneas de** en el panel, marque cada croquis cuyas líneas siguen los elementos. Los extremos que coinciden dentro de un micrómetro se unen.

## Colocar el perfil sobre su línea

- **Girar (°)** gira el perfil alrededor de su línea. Una viga se coloca con su altura vertical (en un elemento vertical, su altura apunta hacia delante).
- **Sobre la línea** elige qué punto del perfil queda sobre la línea: el centro, o una esquina o el punto medio de un lado del contorno del perfil. "Centro inferior" coloca un bastidor encima del plano del croquis en lugar de atravesarlo.

## Esquinas y uniones

| Donde se encuentran los elementos | Qué ocurre |
|---|---|
| Dos elementos extremo con extremo, **Esquinas: A inglete** | Ambos se cortan en el plano a medio camino entre ellos, como un marco de cuadro |
| Dos elementos extremo con extremo, **Esquinas: A tope** | El primero continúa hasta la cara lejana del segundo; el segundo se corta a escuadra en la cara cercana del primero |
| Un elemento termina en el centro de otro (una T) | Se corta para encajar contra el exterior del otro elemento |
| Tres o más terminan en un punto | El primero continúa a escuadra más allá de los demás; los demás se cortan para encajar contra él |

El primer elemento es el que tiene primero su línea: las líneas conservan el orden en que se dibujaron, croquis por croquis, en el orden en que se marcaron los croquis.

## Tapas de extremo y cartelas

- **Tapas de extremo** cierran cada extremo libre con una placa del contorno del perfil, del espesor que indique, por fuera del extremo.
- **Cartelas** colocan una placa triangular en cada esquina donde dos elementos se unen formando un ángulo: **Tamaño de cartela** a lo largo de cada elemento desde la esquina, **Espesor de cartela** transversalmente, centrada en el plano de la esquina.

## La lista de corte

El panel enumera cada pieza, agrupando las piezas idénticas: el perfil, la longitud (de punta larga a punta larga, como se marca para la sierra), cómo se corta cada extremo (a escuadra, con un ángulo respecto a la escuadra o recortado para encajar), y a qué elementos pertenecen. Las tapas de extremo y las cartelas aparecen con sus tamaños. {{ui:Guardar la lista de corte (CSV)}} la guarda para una hoja de cálculo.

Un elemento recortado para encajar contra un tubo de esquinas redondeadas entra un poco en el radio de esa esquina, así que su longitud de punta larga es unos pocos milímetros mayor que la separación entre las caras.

## Límites

- Los elementos siguen solo líneas rectas; los arcos y las splines del croquis se omiten.
- Las uniones se cortan, no se sueldan: no se dibujan cordones de soldadura, y el bastidor es un solo sólido.
- Los perfiles se dibujan a partir de las dimensiones de la tabla: los perfiles W con su redondeo de raíz, los S y los canales con alas paralelas, los tubos con radios de esquina; los taladros, las preparaciones de extremos y las separaciones de soldadura no se generan por usted.
- Los elementos estructurales los construye el núcleo de malla. Con el núcleo exacto activado (solo desarrolladores), lo indican y no se construyen.
