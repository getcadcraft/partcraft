---
title: Lámina metálica: pestañas y patrón plano
summary: Empiece una pieza de lámina metálica desde un croquis (una placa plana o un perfil doblado), defina una sola vez su espesor, radio de doblez y factor K, doble pestañas desde sus aristas con alivios de doblez, y despliéguela como DXF para corte.
keywords: patrón plano, desplegar, desarrollo, longitud desarrollada, tolerancia de doblez, línea de doblez, dxf para láser, corte láser, lámina metálica, pestaña base, pestaña de arista, pestaña, doblar, radio de doblez, factor k, k-factor, espesor, calibre, alivio, alivio de doblez, canal, soporte, carcasa, lámina doblada
from: 144bd0f6
---

:::note
**Todavía no construido en esta versión.** La lámina metálica necesita un núcleo de geometría exacta, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está construido](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Las piezas de lámina metálica empiezan con una **Pestaña base**. Define la lámina para toda la pieza: su **espesor**, el **radio de doblez interior** y el **factor K**. Cada **Pestaña de arista** que venga después se dobla con esos mismos valores, así la pieza sigue siendo una sola lámina que puede desplegarse. Ambas necesitan el **núcleo exacto** (vea [El núcleo de malla](topic:solid-kernels)).

## Empiece con una pestaña base

1. Dibuje un croquis. Use un **perfil cerrado** para una placa plana (un rectángulo, o cualquier contorno cerrado con agujeros). Use **una cadena abierta de líneas** para una lámina doblada, como una L, una U o una Z dibujada como la vista de canto de la lámina.
2. Seleccione el croquis en el historial de operaciones.
3. Abra {{ui:More}} en el grupo Operaciones y elija {{ui:Base flange}}.

En el panel de la derecha:

- **Espesor (mm)** es el calibre de la lámina.
- **Radio de doblez (mm)** es el radio interior de cada doblez. 0 da una esquina interior afilada; el exterior igual se curva con un radio igual al espesor.
- **Factor K** indica dónde está la capa neutra dentro de la lámina, de 0 (la cara interior) a 0.5 (el medio). Determina cuánto mide la lámina al desplegarla. 0.44 es el valor predeterminado; su taller o su proveedor de material pueden darle el suyo.
- **Profundidad (mm)** es cuánto se extiende un perfil doblado fuera del plano del croquis. Una placa la ignora.
- **Espesor fuera de los dobleces**: un perfil abierto es una cara de la lámina. Por defecto, el espesor va en el interior del primer doblez, así que las líneas que dibujó son el exterior del canal. Marque la casilla para poner las líneas en el interior. El resultado es el mismo sin importar desde qué extremo dibujó.

Cada esquina de una cadena abierta se vuelve un doblez. Una línea demasiado corta para sostener sus dobleces lo indica, con la longitud que necesita.

## Doble una pestaña de arista

1. Haga clic en un borde recto de la cara superior o inferior de la lámina (los bordes largos, no los delgados).
2. Elija {{ui:More}} › {{ui:Edge flange}}. Si no hay una arista seleccionada, PartCraft espera a que haga clic en una; Esc cancela.

La pestaña se dobla hacia arriba desde la cara de esa arista, alrededor del radio interior de la lámina, y luego sigue recta. En el panel:

- **Ángulo (°)** es cuánto se dobla, de 1 a 180. 90 es una pestaña cuadrada.
- **Longitud (mm)** es la pata recta después del doblez.
- **Doblar en sentido contrario** la dobla desde la otra cara (hacia abajo en vez de hacia arriba).
- **Desfase al inicio** y **Desfase al final** acortan la pestaña desde cada extremo de la arista.
- **Alivio de doblez**: cuando un extremo tiene desfase, se corta una ranura en la lámina junto a él para que el doblez no desgarre el metal allí. **Ancho del alivio** define el ancho de la ranura; su profundidad es el radio de doblez más el espesor. Elija **Ninguno** para dejar la esquina sin cortar.

Para cambiar la arista después, pulse {{ui:Pick}} en el panel y haga clic en otra.

:::tip
Use parámetros para el espesor y el radio (vea [Parámetros y ecuaciones](topic:parameters)), así un cambio de calibre actualiza todas las pestañas a la vez.
:::

## Desplegarla

Ambos paneles terminan con **Patrón plano**. Pulse {{ui:Lay flat}}:

- Una vista previa muestra la lámina desplegada, con la línea central de cada doblez en trazos.
- **Tamaño** y **Área** son los del desarrollo plano.
- Cada doblez aparece en la lista con su dirección (**arriba** o **abajo**, visto desde el lado del croquis de la pestaña base), su ángulo y su radio interior.

Cada doblez toma la longitud de la capa neutra de la lámina a través de él, la **tolerancia de doblez**: ángulo (en radianes) × (radio interior + factor K × espesor). Así, un doblez de 90° de una lámina de 2 mm con radio de 2 mm y factor K 0.44 agrega 4.52 mm de lámina plana.

En una placa plana, los agujeros, cortes y alivios de doblez se muestran en el desarrollo donde realmente están, incluidos los agujeros que atraviesan una pestaña.

Para cortar varias piezas, pulse {{ui:Nest on sheets…}} bajo el patrón plano: vea [Anide piezas planas en láminas](topic:nest-flat-parts). Una pestaña base doblada se despliega como un solo rectángulo: su longitud desarrollada × su profundidad, con una línea de doblez por esquina.

{{ui:Save DXF}} guarda el patrón plano para láser, punzonadora o chorro de agua, en milímetros:

- el contorno en la capa **OUTLINE**, como líneas, arcos y círculos;
- las líneas de doblez en la capa **BEND**, en trazos;
- una nota en cada doblez en la capa **BEND_NOTES**, como "UP 90° R2".

Si cambia algo, el desarrollo desaparece; pulse {{ui:Lay flat}} de nuevo para obtener el nuevo.

:::note
Verifique el factor K con su taller antes de cortar: la longitud del desarrollo depende de él, y varía según el material, el espesor y las herramientas.
:::

## Mensajes

- **La lámina metálica necesita una pestaña base antes** — se agregó una pestaña de arista antes de cualquier pestaña base. Muévala debajo de una, o agregue primero una pestaña base.
- **Una pestaña de arista necesita una arista recta** — las pestañas solo se doblan a lo largo de líneas; las aristas curvas todavía no pueden recibir una.
- **Esa arista no está en una cara del espesor de la lámina** — la arista pertenece a una cara que no es la superior ni la inferior de la lámina (por ejemplo, la pared de un agujero). Seleccione una arista de la cara superior o inferior.
- **Los desfases no dejan nada de la arista** — los dos desfases suman toda la arista o más.
- **Las pestañas de arista en una pestaña base doblada todavía no pueden desplegarse** — empiece desde una placa plana y doble todo hacia arriba con pestañas de arista, que sí se despliegan.
- **Los cortes y agujeros hechos después de una pestaña base doblada todavía no aparecen en su desarrollo** — el desarrollo de un perfil doblado es solo su rectángulo desarrollado.
