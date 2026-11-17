---
title: Elementos de matriz y simetría
summary: Repita elementos en fila con Lineal, gírelos alrededor de un eje con Circular y copie elementos o el cuerpo entero a través de un plano con Simetría.
keywords: matriz, matriz lineal, matriz circular, matriz polar, simetría, simétrico, copiar elementos, círculo de agujeros, semilla, simetría del cuerpo
from: 702e9edb
---

Las matrices y las simetrías copian elementos que ya ha construido. Las copias forman parte del historial: si cambia el original, las copias lo siguen.

Lo que se copia es lo que hace el elemento: una matriz de saliente añade material; una matriz de corte o de agujeros lo quita. Se puede volver a aplicar una matriz o una simetría sobre una matriz o una simetría. Un sólido STEP importado también puede copiarse; los redondeos, los chaflanes y los vaciados no.

## Matriz lineal

1. Seleccione en el historial el elemento que desea copiar (por ejemplo, un agujero o un corte). Si no hay nada seleccionado, se usa el último elemento sólido.
2. Elija {{ui:Lineal}}. Aparecen tres copias separadas 20 mm a lo largo de X.
3. En el panel derecho, configure:

| Ajuste | Qué hace | Por defecto |
|---|---|---|
| **Elementos a copiar** | Marque cada elemento que desea copiar. Solo aparecen los elementos situados por encima de la matriz | El elemento seleccionado |
| **Dirección** | Eje X, eje Y, eje Z, una recta o una línea constructiva de cualquier croquis anterior, el eje de una revolución o una arista elegida | Eje X |
| **Separación (mm)** | Distancia entre vecinos | 20 |
| **Número** | Total, **incluido el original** (de 1 a 1000) | 3 |
| **Invertir dirección** | Las copias van en el sentido contrario | Desactivado |

### Usar una arista como dirección

1. Haga clic en una arista recta de la pieza en la vista. El panel derecho indica **Arista** y muestra su longitud.
2. Elija {{ui:Lineal}}: la matriz sigue esa arista.

O bien, seleccione la matriz, elija una arista y elija "Arista elegida (usar la elegida ahora)" en **Dirección**. Una arista elegida queda fija en el espacio y no sigue los cambios posteriores. Una línea de croquis sigue a su croquis.

## Matriz circular

1. Seleccione el elemento que desea copiar (por ejemplo, un agujero cerca del borde de un disco).
2. Elija {{ui:Circular}}. Aparecen seis copias repartidas por igual en toda la circunferencia.
3. Configure:

| Ajuste | Qué hace | Por defecto |
|---|---|---|
| **Elementos a copiar** | Igual que en la matriz lineal | El elemento seleccionado |
| **Eje** | Eje X, Y o Z, una línea de croquis, el eje de una revolución o una arista elegida | El eje de la última revolución si existe; si no, el eje Y |
| **Ángulo (°)** | 360 reparte las copias por igual en todo el giro. Un valor menor las reparte en ese ángulo, con la primera y la última en los extremos | 360 |
| **Número** | Total, incluido el original | 6 |
| **Invertir dirección** | Gira en el sentido contrario | Desactivado |

Los ejes del mundo pasan por el origen. Para un disco no centrado en el origen, use una línea constructiva del croquis o el eje de una revolución.

### Ejemplo: los ocho agujeros de una brida

1. Revolucione la brida (véase [Revolucionar una pieza torneada](topic:revolve)) alrededor del eje Y.
2. Haga un croquis sobre la cara superior plana de la brida, coloque un punto en la circunferencia de los agujeros y cree un agujero.
3. Con el agujero seleccionado, elija {{ui:Circular}}. El eje ya es "Eje de Revolve1".
4. Ponga **Número** en `8`.

## Simetría

1. Seleccione en el historial el elemento que desea simetrizar, o no seleccione nada para simetrizar **el cuerpo entero tal como está construido hasta ahora**.
2. Elija {{ui:Simetría}}. Simetriza respecto al **plano Derecha**.

Para simetrizar el cuerpo entero respecto a una cara de la pieza, haga clic primero en esa cara plana y después elija {{ui:Simetría}}. (Al hacer clic en una cara se borra la selección del historial, así que esto siempre simetriza el cuerpo entero).

Ajustes en el panel derecho:

- **Simetría**: marque **El cuerpo entero (tal como está construido hasta ahora)**, o desmárquelo y marque los elementos a copiar.
- **Plano de simetría**: plano Alzado, plano Planta, plano Derecha, la cara que usa ahora ("Una cara de Extrude1" o "Un plano fijo"), o "La cara elegida ahora". Para simetrizar elementos elegidos respecto a una cara: seleccione la Simetría en el historial, haga clic en la cara en la vista y elija "La cara elegida ahora".

Simetrizar el cuerpo entero respecto a una cara duplica la pieza, por ejemplo, convierte un soporte medio en uno completo.

## Mensajes

- "Cree primero un elemento para copiar." o "Cree primero un sólido." Todavía no hay nada sólido que copiar.
- "Elija los elementos a copiar." Se han desmarcado todas las casillas de **Elementos a copiar**.
- "Extrude2 no tiene ningún sólido que copiar." Ese elemento ha fallado o está suprimido.
- "Fillet1 cambia las aristas o las paredes del cuerpo; no se puede copiar. Copie los elementos que crean sólidos (extrusiones, revoluciones, agujeros, importaciones)." Los redondeos, los chaflanes y los vaciados no se pueden matrizar ni simetrizar: haga primero la matriz y después el redondeo.
- "Todavía no hay ningún cuerpo que simetrizar."

:::note
Las copias de una matriz no se pueden omitir una a una, y una matriz no puede seguir una curva de croquis. Las matrices y simetrías de croquis tampoco están construidas todavía: dibuje la geometría repetida del croquis a mano o con **Añadir por coordenadas**.
:::
