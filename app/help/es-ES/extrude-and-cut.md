---
title: Extruir una saliente y cortar a través de ella
summary: Convierta un croquis en un sólido con Extruir, ajuste profundidades ciega, plano medio, hasta o en dos direcciones, una conicidad o un solo contorno del croquis, y luego croquice sobre una cara y use Cortar para una cajera o una ranura pasante.
keywords: extruir, saliente, saliente extruida, cortar, corte extruido, cajera, a través de todo, ciega, plano medio, invertir, profundidad, corte-extruir, saliente-extruir, macizo, hasta cara, hasta la siguiente, hasta vértice, desplazamiento desde superficie, dirección 2, dos direcciones, desmoldeo al extruir, conicidad, contorno, región, contornos seleccionados
from: 3b13ff10
---

{{ui:Extruir}} empuja el perfil cerrado de un croquis en línea recta fuera de su plano para crear material. {{ui:Cortar}} hace lo mismo pero quita material. Ambos son el mismo elemento por debajo; más adelante puede cambiar uno por otro.

## Extruir una saliente

1. Dibuje un perfil cerrado y cierre el croquis (consulte [Dibuje su primer croquis](topic:sketch-basics)). Sigue seleccionado.
2. Elija {{ui:Extruir}}.

Aparece un sólido de 10 mm, "Extrude1" se une al historial con su croquis sangrado debajo, y la barra de estado indica "Extrude1 añadido. Cambie sus valores en el panel derecho."

**Qué croquis se usa:** el croquis que acaba de cerrar, o el croquis seleccionado en el historial. Si no hay nada seleccionado, PartCraft toma el croquis más reciente que todavía no usa ningún elemento. Si no hay ninguno: "Cree primero un croquis: elija un plano, Croquis, dibuje un perfil cerrado y Salir."

### Establecer la profundidad y la dirección

En el panel derecho:

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Operación** | Saliente (añadir material), Corte (quitar material), Intersección (conservar el solapamiento), Nuevo cuerpo (todavía no disponible en esta versión: necesita un núcleo exacto) | Saliente |
| **Fin** | Ciega (una profundidad), Plano medio (en ambos sentidos), A través de todo, Hasta cara o plano, Hasta la siguiente cara, Hasta vértice, Desplazamiento desde cara | Ciega |
| **Profundidad (mm)** | Cualquier medida mayor que cero (se muestra para Ciega y Plano medio) | 10 |
| **Invertir dirección** | Crece hacia el otro lado del plano del croquis (no se muestra en Plano medio) | Desactivado |

Escriba un número y pulse {{key:Enter}} o {{key:Tab}}: la pieza se reconstruye de inmediato. **Plano medio** pone la mitad de la profundidad a cada lado del croquis.

### Hasta una cara, la siguiente cara o un vértice

No disponible todavía en esta versión: cada final "hasta" necesita un núcleo exacto, y el elemento indica "Extruir hasta una cara, la siguiente cara o un vértice: todavía no disponible (necesita un núcleo exacto)." Use una profundidad Ciega que mida usted. Con un núcleo exacto, los finales funcionan así:

- **Hasta cara o plano**: **Hasta** toma una cara plana (Seleccionar, y luego haga clic en ella) o un plano de referencia. Una cara paralela al croquis da una profundidad exacta; una inclinada corta el final en la pendiente. Si la cara está detrás del croquis: "… Pruebe Invertir dirección."
- **Hasta la siguiente cara**: se detiene en la primera cara plana del cuerpo que encuentra la extrusión (las caras curvas no se admiten aquí: se indica).
- **Hasta vértice**: se detiene a la altura de un vértice (haga clic cerca del extremo de una arista) o de un elemento de punto.
- **Desplazamiento desde cara**: como Hasta cara, deteniéndose a **Desplazamiento (mm)** antes de ella (medido perpendicularmente a la cara).

### Dos direcciones, conicidad, un contorno

- **Segunda dirección** (Ciega): también extruye **Segunda profundidad (mm)** hacia el otro lado del croquis.
- **Conicidad (°)**: los lados se inclinan a medida que avanzan (negativo: hacia fuera), como un desmoldeo; solo en una dirección. No disponible todavía en esta versión (necesita un núcleo exacto): déjela en 0.
- **Regiones**: **Seleccionar regiones**, y luego haga clic dentro de los bucles que quiera extruir; solo se usan esas regiones (un círculo dentro de un cuadrado: haga clic dentro del círculo para un cilindro, o entre ambos para una placa con agujero). **Todas** vuelve a cada bucle.

Debajo de estos, **Cotas del croquis** lista las cotas de control del croquis, para que pueda cambiar los tamaños del perfil sin abrir el croquis.

:::note
**A través de todo solo es para cortes.** Una saliente con A través de todo falla con "A través de todo es para cortes. Use una profundidad para una saliente." Al cambiar un elemento de Corte a Saliente, A través de todo pasa automáticamente a Ciega.
:::

## Cortar una cajera

1. Haga clic en la cara plana en la que quiere cortar. Se resalta y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} (o {{ui:Croquis}} en la barra de herramientas).
3. Dibuje el contorno de la cajera, por ejemplo un rectángulo, y acótelo.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Cortar}}. Empieza como **A través de todo**: quita material en todo el espesor de la pieza.
6. Para una cajera, ponga **Fin** en **Ciega (una profundidad)** y escriba la **Profundidad (mm)**.

Un corte entra en el material, alejándose de la cara en la que se dibujó el croquis. Si la barra de estado dice "No hay nada que cortar en ese lado del croquis. Pruebe la otra dirección.", marque **Invertir dirección**.

Un croquis en el fondo de la cajera sigue al fondo: si cambia la profundidad de la cajera, el croquis se mueve con ella.

## Tirar o empujar una cara completa

Para hacer que una cara sobresalga más o se hunda, no necesita dibujar su contorno. Haga clic en la cara plana y, en el panel derecho:

- {{ui:Extruir desde ella}} saca la cara: PartCraft añade un croquis en la cara con su contorno (los agujeros de la cara siguen siendo agujeros) y una extrusión de 10 mm.
- {{ui:Cortar en ella}} empuja la cara hacia dentro: el mismo croquis y un corte hasta la mitad de la pieza.

Ambas son un solo paso: {{key:Mod+Z}} elimina el croquis y el elemento a la vez. El nuevo elemento queda seleccionado, así que escriba un número de inmediato y pulse {{key:Enter}} para su profundidad. El contorno se copia como líneas y arcos fijos: no sigue los cambios posteriores de la cara. Si parte del contorno no se puede copiar (una curva de forma libre), el croquis se abre con lo que sí se pudo copiar; termínelo, y luego elija {{ui:Salir}} y {{ui:Extruir}} o {{ui:Cortar}}.

## Perfiles con islas

Un croquis puede tener varios bucles cerrados. Los bucles contiguos se convierten en salientes (o cortes) separadas; un bucle dentro de otro se convierte en un agujero a través de la saliente. Por ejemplo, un rectángulo con dos círculos dentro se extruye como una placa con dos agujeros.

Para usar solo algunos bucles, selecciónelos con **Regiones** (arriba); otro elemento puede usar los demás bucles del mismo croquis.

## Editarlo después

- Haga clic en "Extrude1" en el historial para recuperar sus ajustes.
- Haga doble clic en su croquis (sangrado debajo) para abrirlo; ciérrelo para reconstruir.
- Consulte [Cambie una pieza a través de su historial](topic:edit-history) para suprimir, retroceder, reordenar y eliminar.

## Mensajes habituales

| Mensaje | Qué hacer |
|---|---|
| "The sketch has no closed profile to extrude." | El croquis no tiene ningún bucle cerrado de líneas sólidas. Cierre los huecos, o vuelva a convertir las líneas de construcción con {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Abra el croquis y una ese extremo con la línea siguiente |
| "There is nothing to cut yet." | Un corte necesita un sólido que cortar. Haga antes una saliente |
| "Nothing is left of the part after this." | El corte eliminó todo. Revise su tamaño y su dirección |

Más en [Solución de problemas](topic:troubleshooting).
