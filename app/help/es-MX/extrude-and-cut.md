---
title: Extruir un saliente y cortarlo a través
summary: Convierta un croquis en un sólido con Extruir. Ajuste la profundidad ciega, de plano medio, hasta una superficie o en dos direcciones, una conicidad o un solo contorno del croquis. Luego haga un croquis sobre una cara y use Cortar para una cajera o una ranura pasante.
keywords: extruir, saliente, saliente extruido, cortar, corte extruido, cajera, pasar por todo, ciega, plano medio, invertir, profundidad, cortar-extruir, saliente-extruir, placa, hasta cara, hasta la siguiente cara, hasta vértice, desfase desde superficie, dirección 2, dos direcciones, ángulo de salida al extruir, conicidad, contorno, región, contornos seleccionados
from: 3b13ff10
---

{{ui:Extruir}} empuja el perfil cerrado de un croquis en línea recta fuera de su plano para crear material. {{ui:Cortar}} hace lo mismo, pero quita material. Ambas son la misma operación por dentro; puede cambiar una a la otra más tarde.

## Extruir un saliente

1. Dibuje un perfil cerrado y cierre el croquis (vea [Dibuje su primer croquis](topic:sketch-basics)). Queda seleccionado.
2. Elija {{ui:Extruir}}.

Aparece un sólido de 10 mm, "Extrude1" se une al historial con su croquis sangrado debajo, y la barra de estado dice "Extrude1 agregado. Cambie sus números en el panel derecho."

**Qué croquis se usa:** el croquis que acaba de cerrar, o el croquis seleccionado en el historial. Sin nada seleccionado, PartCraft toma el croquis más reciente que todavía no usa ninguna operación. Si no hay ninguno: "Haga primero un croquis: elija un plano, Croquis, dibuje un perfil cerrado, Salir."

### Ajustar la profundidad y la dirección

En el panel derecho:

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Operación** | Saliente (agrega material), Corte (quita material), Intersecar (conserva el solape), Nuevo cuerpo (todavía no está construido en esta versión: necesita un núcleo exacto) | Saliente |
| **Fin** | Ciega (una profundidad), Plano medio (en ambos sentidos), Pasar por todo, Hasta cara o plano, Hasta la siguiente cara, Hasta vértice, Desfase desde la cara | Ciega |
| **Profundidad (mm)** | Cualquier medida mayor que cero (se muestra en Ciega y Plano medio) | 10 |
| **Invertir dirección** | Crece hacia el otro lado del plano del croquis (no se muestra en Plano medio) | Desactivado |

Escriba un número y pulse {{key:Enter}} o {{key:Tab}}: la pieza se reconstruye de inmediato. **Plano medio** pone la mitad de la profundidad a cada lado del plano del croquis.

### Hasta una cara, la siguiente cara o un vértice

Todavía no está construido en esta versión: cada fin "hasta" necesita un núcleo exacto, y la operación dice "Extruir hasta una cara, la siguiente cara o un vértice: todavía no construido (necesita un núcleo exacto)." Use una profundidad ciega que usted mida. Con un núcleo exacto, los fines funcionan así:

- **Hasta cara o plano**: **Hasta** toma una cara plana (Seleccionar, luego haga clic en ella) o un plano de referencia. Una cara paralela al croquis da una profundidad exacta; una inclinada corta el fin sobre la pendiente. Si la cara queda detrás del croquis: "… Pruebe Invertir dirección."
- **Hasta la siguiente cara**: se detiene en la primera cara plana del cuerpo que encuentre la extrusión (aquí no se admiten caras curvas, y lo indica).
- **Hasta vértice**: se detiene al nivel de un vértice (haga clic cerca del extremo de una arista) o de una operación de punto.
- **Desfase desde la cara**: como Hasta cara o plano, pero se detiene **Desfase (mm)** antes de la cara (medido perpendicular a ella).

### Dos direcciones, conicidad, un contorno

- **Segunda dirección** (Ciega): también extruye **Segunda profundidad (mm)** hacia el otro lado del croquis.
- **Conicidad (°)**: las caras se inclinan al avanzar (negativo: hacia afuera), como un ángulo de salida; solo en una dirección. Todavía no está construido en esta versión (necesita un núcleo exacto): déjelo en 0.
- **Regiones**: **Seleccionar regiones**, luego haga clic dentro de los contornos que quiere extruir; solo se usan esas regiones (un círculo dentro de un cuadrado: haga clic dentro del círculo para un cilindro, o entre ambos para una placa con agujero). **Todas** vuelve a todos los contornos.

Debajo de estos, **Cotas del croquis** muestra las cotas de control del croquis, para que pueda cambiar los tamaños del perfil sin abrir el croquis.

:::note
**Pasar por todo es solo para cortes.** Un saliente con Pasar por todo falla con "Pasar por todo es para cortes. Use una profundidad para un saliente." Si cambia una operación de Corte a Saliente, Pasar por todo cambia a Ciega por usted.
:::

## Cortar una cajera

1. Haga clic en la cara plana donde quiere cortar. Se resalta, y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} (o {{ui:Croquis}} en la barra de herramientas).
3. Dibuje el contorno de la cajera, por ejemplo un rectángulo, y acótelo.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Cortar}}. Empieza como **Pasar por todo**: quita material a través de toda la pieza.
6. Para una cajera, ponga **Fin** en **Ciega (una profundidad)** y escriba la **Profundidad (mm)**.

Un corte entra en el material, alejándose de la cara donde dibujó el croquis. Si la barra de estado dice "No hay nada que cortar a ese lado del croquis. Pruebe el otro sentido.", marque **Invertir dirección**.

Un croquis en el fondo de la cajera sigue al fondo: si cambia la profundidad de la cajera, el croquis se mueve con ella.

## Empujar o tirar de una cara completa

Para que una cara sobresalga más o se hunda, no necesita dibujar su contorno. Haga clic en la cara plana y, luego, en el panel derecho:

- {{ui:Extruir desde ella}} saca la cara: PartCraft agrega un croquis sobre la cara con su contorno (los agujeros de la cara siguen siendo agujeros) y una extrusión de 10 mm.
- {{ui:Cortar en ella}} empuja la cara hacia dentro: el mismo croquis y un corte hasta la mitad de la pieza.

Ambas son un solo paso: {{key:Mod+Z}} quita el croquis y la operación juntos. La nueva operación queda seleccionada, así que escriba un número de inmediato y pulse {{key:Enter}} para su profundidad. El contorno se copia como líneas y arcos fijos: no sigue los cambios posteriores de la cara. Si parte del contorno no se puede copiar (una curva libre), el croquis se abre con lo que sí se pudo copiar. Termínelo, luego elija {{ui:Salir}} y {{ui:Extruir}} o {{ui:Cortar}}.

## Perfiles con islas

Un croquis puede tener varios contornos cerrados. Los contornos lado a lado se vuelven salientes (o cortes) separados; un contorno dentro de otro se vuelve un agujero a través del saliente. Por ejemplo, un rectángulo con dos círculos dentro se extruye como una placa con dos agujeros.

Para usar solo algunos contornos, selecciónelos con **Regiones** (arriba); otra operación puede usar los demás contornos del mismo croquis.

## Editarlo después

- Haga clic en "Extrude1" en el historial para volver a sus ajustes.
- Haga doble clic en su croquis (sangrado debajo) para abrirlo; ciérrelo para reconstruir.
- Vea [Cambie una pieza mediante su historial](topic:edit-history) para suprimir, retroceder, reordenar y borrar.

## Mensajes comunes

| Mensaje | Qué hacer |
|---|---|
| "El croquis no tiene ningún perfil cerrado para extruir." | El croquis no tiene un contorno cerrado de líneas sólidas. Cierre los huecos, o cambie de nuevo las líneas de construcción con {{key:Q}} |
| "El perfil está abierto: un extremo en (x, y) no está unido a nada." | Abra el croquis y una ese extremo a la línea siguiente |
| "No hay nada que cortar todavía." | Un corte necesita un sólido que cortar. Haga primero un saliente |
| "No queda nada de la pieza después de esto." | El corte quitó todo. Revise su tamaño y su dirección |

Más en [Solución de problemas](topic:troubleshooting).
