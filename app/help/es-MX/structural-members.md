---
title: Marcos con perfiles de acero
summary: Coloque perfiles de acero a lo largo de las líneas de uno o más croquis para formar un marco soldado: esquinas a inglete o a tope, miembros recortados para encajar donde se encuentran, tapas de extremo, cartabones y una lista de corte con longitudes y ángulos de extremo.
keywords: estructura soldada, miembro estructural, marco, marco de acero, tubo, tubo cuadrado, hss, rhs, shs, tubería, chs, ala ancha, viga i, viga w, ipe, hea, heb, canal, upn, ángulo, inglete, unión a tope, recorte de encaje, tapa de extremo, cartabón, lista de corte
from: 59071e5a
---

Un **miembro estructural** coloca un perfil de acero a lo largo de cada línea de los croquis que elija. Dibuje el marco como líneas (cada línea es un miembro), luego elija el perfil: los miembros se construyen, sus esquinas se recortan y alargan, y una lista de corte indica cuánto cortar cada pieza y con qué ángulo.

## Hacer un marco

1. Dibuje el marco como líneas en un croquis, por ejemplo un rectángulo en el plano superior. Las líneas marcadas como construcción se dejan fuera.
2. Con el croquis seleccionado, elija {{ui:Más}} › {{ui:Miembro estructural}}. Cada línea del croquis recibe un miembro.
3. En el panel, elija la **Familia** y el **Tamaño** del perfil. Las familias son las tablas AISC (W, S, C, L, tubos HSS, Tubería) y EN 10365 (IPE, HEA, HEB, UPN).

### Un marco en 3D

Las líneas de varios croquis forman un solo marco: un rectángulo superior dibujado en un plano elevado, y las patas dibujadas en planos verticales, se encuentran en sus extremos en 3D. Bajo **A lo largo de las líneas de** en el panel, marque cada croquis cuyas líneas siguen los miembros. Los extremos que coinciden dentro de un micrómetro se unen.

## Colocar el perfil sobre su línea

- **Girar (°)** gira el perfil alrededor de su línea. Una viga se mantiene con su altura vertical (en un miembro vertical, su altura apunta hacia el frente).
- **Sobre la línea** elige qué punto del perfil queda sobre la línea: el centro, una esquina o el punto medio de un lado del contorno del perfil. "Centro inferior" coloca un marco encima del plano del croquis en lugar de atravesarlo.

## Esquinas y uniones

| Dónde se encuentran los miembros | Qué ocurre |
|---|---|
| Dos miembros de extremo a extremo, **Esquinas: A inglete** | Ambos se cortan en el plano a mitad de camino entre ellos, como un marco de cuadro |
| Dos miembros de extremo a extremo, **Esquinas: A tope** | El primer miembro continúa hasta la cara lejana del segundo; el segundo se corta a escuadra contra la cara cercana del primero |
| Un miembro termina en el centro de otro (una T) | Se corta para encajar contra el exterior del otro miembro |
| Tres o más terminan en un punto | El primero continúa a escuadra más allá de los demás; los demás se cortan para encajar contra él |

El primer miembro es el de la línea que va primero: las líneas conservan el orden en que se dibujaron, croquis por croquis, en el orden en que se marcaron.

## Tapas de extremo y cartabones

- **Tapas de extremo** cierran cada extremo libre con una placa del contorno del perfil, del espesor que usted defina, fuera del extremo.
- **Cartabones** colocan una placa triangular en cada esquina donde dos miembros se encuentran en ángulo: **Tamaño del cartabón** a lo largo de cada miembro desde la esquina, **Espesor del cartabón** a través, centrado en el plano de la esquina.

## La lista de corte

El panel enumera cada pieza, agrupando las piezas idénticas: el perfil, la longitud (de punto largo a punto largo, como se marca para la sierra), cómo se corta cada extremo (a escuadra, con un ángulo respecto de la escuadra, o cortado para encajar), y a qué miembros pertenecen. Las tapas de extremo y los cartabones se enumeran con sus tamaños. {{ui:Guardar la lista de corte (CSV)}} la guarda para una hoja de cálculo.

Un miembro cortado para encajar contra un tubo de esquinas redondeadas entra un poco en el radio de esquina de ese tubo, así que su longitud de punto largo es unos milímetros mayor que la separación entre las caras.

## Límites

- Los miembros siguen sólo líneas rectas; los arcos y splines del croquis se dejan fuera.
- Las uniones se cortan, no se sueldan: no se dibujan cordones de soldadura, y el marco es un solo sólido.
- Los perfiles se dibujan con las dimensiones de la tabla: perfiles W con su redondeo de raíz, S y canales con alas paralelas, tubos con radios de esquina; los agujeros, las preparaciones de extremo y las separaciones de soldadura no se hacen por usted.
- Los miembros estructurales los construye el núcleo de malla. Con el núcleo exacto activado (sólo desarrolladores), lo indican y no se construyen.
