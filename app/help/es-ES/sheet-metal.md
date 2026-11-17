---
title: Chapa metálica: bridas y patrón plano
summary: Empiece una pieza de chapa metálica desde un boceto (una placa plana o un perfil doblado), defina una vez su espesor, su radio de doblez y su factor K, doble bridas desde sus aristas con alivios de doblez, y despliéguela como DXF para cortarla.
keywords: patrón plano, desplegar, desarrollo, longitud desarrollada, tolerancia de doblez, línea de doblez, dxf para láser, corte láser, chapa metálica, brida base, brida de arista, brida, doblez, radio de doblez, factor K, factor k, espesor, galga, alivio, alivio de doblez, canal, soporte, carcasa, chapa doblada
from: 144bd0f6
---

:::note
**Todavía no construido en esta versión.** La chapa metálica necesita un núcleo de geometría exacta, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está construido](topic:not-built-yet) indica qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Las piezas de chapa metálica empiezan con una **Brida base**. Define la lámina de toda la pieza: su **espesor**, el **radio de doblez interior** y el **factor K**. Cada **Brida de arista** posterior se dobla con esos mismos valores, así que la pieza sigue siendo una sola lámina que se puede desplegar. Ambas necesitan el **núcleo exacto** (consulte [El núcleo de malla](topic:solid-kernels)).

## Empezar con una brida base

1. Dibuje un boceto. Use un **perfil cerrado** para una placa plana (un rectángulo, o cualquier contorno cerrado con agujeros). Use **una cadena abierta de líneas** para una chapa doblada, como una L, una U o una Z dibujada como vista de canto de la lámina.
2. Seleccione el boceto en el historial de elementos.
3. Abra {{ui:Más}} en el grupo Elementos y elija {{ui:Brida base}}.

En el panel de la derecha:

- **Espesor (mm)** es el calibre de la lámina.
- **Radio de doblez (mm)** es el radio interior de cada doblez. 0 da una esquina interior en ángulo vivo; el exterior sigue girando con un radio igual a un espesor.
- **Factor K** indica dónde está la capa neutra dentro de la lámina, de 0 (la cara interior) a 0.5 (el centro). Determina cuánto mide la lámina desplegada. 0.44 es el valor predeterminado; su taller o su proveedor de material pueden darle el suyo.
- **Profundidad (mm)** es cuánto se extiende un perfil doblado fuera del plano del boceto. Una placa la ignora.
- **Espesor fuera de los dobleces**: un perfil abierto es una cara de la lámina. Por defecto, el espesor va por dentro del primer doblez, así que las líneas que dibujó son el exterior del canal. Márquelo para poner las líneas por dentro. El resultado es el mismo desde el extremo por el que empezó a dibujar.

Cada esquina de una cadena abierta se convierte en un doblez. Una línea demasiado corta para sostener sus dobleces lo indica, con la longitud que necesita.

## Doblar una brida de arista

1. Haga clic en una arista recta de la cara superior o inferior de la lámina (las aristas largas, no las finas).
2. Elija {{ui:Más}} › {{ui:Brida de arista}}. Si no hay ninguna arista elegida, PartCraft espera a que haga clic en una; Esc cancela.

La brida se dobla hacia arriba desde la cara de esa arista, alrededor del radio interior de la lámina, y luego sigue recta. En el panel:

- **Ángulo (°)** es cuánto se dobla, de 1 a 180. 90 es una brida cuadrada.
- **Longitud (mm)** es el tramo recto tras el doblez.
- **Doblar en sentido contrario** la dobla desde la otra cara (hacia abajo en vez de hacia arriba).
- **Desplazamiento al inicio** y **Desplazamiento al final** acortan la brida desde cada extremo de la arista.
- **Alivio de doblez**: cuando un extremo tiene desplazamiento, se corta una ranura en la lámina junto a él para que el doblez no rasgue el metal allí. **Ancho del alivio** define el ancho de la ranura; su profundidad es el radio de doblez más el espesor. Elija **Ninguno** para dejar la esquina sin cortar.

Para cambiar la arista más tarde, pulse {{ui:Seleccionar}} en el panel y haga clic en otra.

:::tip
Use parámetros para el espesor y el radio (consulte [Parámetros y ecuaciones](topic:parameters)), para que un cambio de calibre actualice todas las bridas a la vez.
:::

## Desplegarla

Ambos paneles terminan con **Patrón plano**. Pulse {{ui:Desplegar}}:

- Una vista previa muestra la lámina desplegada, con la línea central de cada doblez en trazos.
- **Tamaño** y **Área** son los de la pieza plana en bruto.
- Cada doblez aparece en la lista con su dirección (**arriba** o **abajo**, visto desde el lado del boceto de la brida base), su ángulo y su radio interior.

Cada doblez ocupa la longitud de la capa neutra de la lámina a través de él, la **tolerancia de doblez**: ángulo (en radianes) × (radio interior + factor K × espesor). Así, un doblez de 90° en una lámina de 2 mm con radio 2 mm y factor K 0.44 añade 4.52 mm de lámina plana.

En una placa plana, los agujeros, cortes y alivios de doblez aparecen en el plano donde están de verdad, incluidos los agujeros que atraviesan una brida.

Para cortar muchas piezas, pulse {{ui:Anidar en láminas…}} bajo el patrón plano: consulte [Anidar piezas planas en láminas](topic:nest-flat-parts). Una brida base doblada se traza como un solo rectángulo: su longitud desarrollada × su profundidad, con una línea de doblez por esquina.

{{ui:Guardar DXF}} guarda el patrón plano para una láser, una punzonadora o un chorro de agua, en milímetros:

- el contorno en la capa **OUTLINE**, como líneas, arcos y círculos;
- las líneas de doblez en la capa **BEND**, a trazos;
- una nota en cada doblez en la capa **BEND_NOTES**, como "UP 90° R2".

Cualquier cambio elimina el plano; pulse {{ui:Desplegar}} de nuevo para obtener el nuevo.

:::note
Compruebe el factor K con su taller antes de cortar: la longitud del plano depende de él, y varía con el material, el espesor y la herramienta.
:::

## Mensajes

- **La chapa metálica necesita antes una brida base** — se añadió una brida de arista antes de cualquier brida base. Muévala debajo de una, o añada primero una brida base.
- **Una brida de arista necesita una arista recta** — las bridas solo se doblan a lo largo de líneas; las aristas curvas todavía no admiten una.
- **Esa arista no está en una cara del espesor de la lámina** — la arista pertenece a una cara que no es la superior ni la inferior de la lámina (por ejemplo, la pared de un agujero). Seleccione una arista de la cara superior o inferior.
- **Los desplazamientos no dejan nada de la arista** — los dos desplazamientos suman toda la arista o más.
- **Las bridas de arista de una brida base doblada todavía no se pueden desplegar** — empiece desde una placa plana y doble todo hacia arriba con bridas de arista, que sí se despliegan.
- **Los cortes y agujeros hechos después de una brida base doblada todavía no aparecen en su patrón plano** — el plano de un perfil doblado es solo su rectángulo desarrollado.
