---
title: Patrones y simetrías de operaciones
summary: Repita operaciones en fila con Lineal, en círculo alrededor de un eje con Circular, y copie operaciones o el cuerpo completo a través de un plano con Simetría.
keywords: patrón, patrón lineal, patrón circular, matriz polar, matriz, simetría, simétrico, copiar operaciones, círculo de pernos, semilla, simetría de cuerpo
from: 702e9edb
---

Los patrones y las simetrías copian operaciones que ya construyó. Las copias forman parte del historial: si cambia el original, las copias lo siguen.

Lo que se copia es lo que hace la operación: un patrón de saliente añade material; un patrón de corte o de agujero lo quita. Los patrones se pueden volver a repetir y simetrizar. Un sólido STEP importado también se puede copiar; los redondeos, chaflanes y vaciados no.

## Patrón lineal

1. Seleccione en el historial la operación a copiar (por ejemplo, un Agujero o un Corte). Si no hay nada seleccionado, se usa la última operación de sólido.
2. Elija {{ui:Lineal}}. Aparecen tres copias separadas 20 mm a lo largo de X.
3. En el panel derecho, configure:

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Operaciones a copiar** | Marque cada operación a copiar. Solo aparecen las operaciones por encima del patrón | La operación seleccionada |
| **Dirección** | Eje X, eje Y, eje Z, una línea o línea constructiva de cualquier croquis anterior, el eje de una revolución, o una arista elegida | Eje X |
| **Separación (mm)** | Distancia entre vecinos | 20 |
| **Cantidad** | Número total, **incluido el original** (1 a 1000) | 3 |
| **Invertir dirección** | Las copias van en el sentido contrario | Desactivado |

### Usar una arista como dirección

1. Haga clic en una arista recta de la pieza en la vista. El panel derecho dice **Arista** y muestra su longitud.
2. Elija {{ui:Lineal}}: el patrón sigue esa arista.

O bien, seleccione el patrón, elija una arista y seleccione "Arista elegida (usar la que se eligió ahora)" en **Dirección**. Una arista elegida queda fija en el espacio: no sigue los cambios posteriores. Una línea de croquis sí sigue a su croquis.

## Patrón circular

1. Seleccione la operación a copiar (por ejemplo, un agujero cerca del borde de un disco).
2. Elija {{ui:Circular}}. Aparecen seis copias igualmente espaciadas alrededor.
3. Configure:

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Operaciones a copiar** | Igual que en Lineal | La operación seleccionada |
| **Eje** | Eje X, Y o Z, una línea de croquis, el eje de una revolución o una arista elegida | El eje de la última revolución si existe; si no, el eje Y |
| **Ángulo (°)** | 360 reparte las copias igualmente en todo el giro. Un valor menor las reparte en ese ángulo, con la primera y la última en los extremos | 360 |
| **Cantidad** | Número total, incluido el original | 6 |
| **Invertir dirección** | Gira en el sentido contrario | Desactivado |

Los ejes del mundo pasan por el origen. Para un disco que no esté centrado en el origen, use una línea constructiva del croquis o el eje de una revolución.

### Ejemplo: los ocho agujeros de perno de una brida

1. Haga una revolución de la brida (vea [Pieza torneada por revolución](topic:revolve)) alrededor del eje Y.
2. Croquice en la cara superior plana de la brida, coloque un punto sobre la circunferencia de los pernos y cree un Agujero.
3. Con el Agujero seleccionado, elija {{ui:Circular}}. El eje ya es "Eje de Revolve1".
4. Establezca **Cantidad** en `8`.

## Simetría

1. Seleccione en el historial la operación a simetrizar, o no seleccione nada para simetrizar **todo el cuerpo tal como está construido hasta ahora**.
2. Elija {{ui:Simetría}}. Se simetriza respecto al **Plano derecho**.

Para simetrizar todo el cuerpo respecto a una cara de la pieza, haga clic primero en esa cara plana y luego elija {{ui:Simetría}}. (Hacer clic en una cara borra la selección del historial, así que esto siempre simetriza todo el cuerpo.)

Ajustes en el panel derecho:

- **Simetría**: marque **El cuerpo completo (tal como está construido hasta ahora)**, o desmárquelo y marque las operaciones a copiar.
- **Plano de simetría**: Plano frontal, Plano superior, Plano derecho, la cara que usa ahora ("Una cara de Extrude1" o "Un plano fijo"), o "La cara elegida ahora". Para simetrizar operaciones elegidas respecto a una cara: seleccione la Simetría en el historial, haga clic en la cara en la vista y elija "La cara elegida ahora".

Simetrizar todo el cuerpo respecto a una cara duplica la pieza; por ejemplo, convierte un soporte medio en uno completo.

## Mensajes

- "Construya primero una operación para copiar." o "Construya primero un sólido." Todavía no hay nada sólido que copiar.
- "Elija las operaciones a copiar." Se desmarcó todo el cuadro **Operaciones a copiar**.
- "Extrude2 no tiene ningún sólido que copiar." Esa operación falló o está suprimida.
- "Fillet1 modifica las aristas o las paredes del cuerpo; no se puede copiar. Copie las operaciones que crean sólidos (extrusiones, revoluciones, agujeros, importaciones)." Los redondeos, chaflanes y vaciados no se pueden repetir ni simetrizar: haga primero el patrón y luego el redondeo.
- "Todavía no hay cuerpo que simetrizar."

:::note
Las copias de un patrón no se pueden omitir una por una, y un patrón no puede seguir una curva de croquis. Los patrones y simetrías de croquis tampoco están disponibles todavía: dibuje a mano la geometría repetida del croquis o use **Añadir por coordenadas**.
:::
