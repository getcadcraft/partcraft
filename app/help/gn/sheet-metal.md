---
title: Chapa: bridas y el patrón plano
summary: Iniciar una pieza de chapa desde un boceto (una placa plana o un perfil doblado), fijar su espesor, radio de doblez y factor K una sola vez, doblar bridas hacia arriba desde sus aristas con alivios de doblez, y desplegarla como DXF para cortar.
keywords: patrón plano, desarrollo, desarrollo plano, longitud desarrollada, tolerancia de doblez, línea de doblez, dxf para láser, corte láser, chapa, brida base, brida de arista, brida, doblez, radio de doblez, factor K, factor k, espesor, calibre, alivio, alivio de doblez, canal, soporte, carcasa, chapa doblada
from: 144bd0f6
---

:::note
**No construido todavía en esta versión.** La chapa necesita un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está construido](topic:not-built-yet) dice qué hacer en su lugar. El resto de esta página lo describe tal como funciona con un núcleo exacto.
:::

Las piezas de chapa empiezan con una **Brida base**. Define la lámina para toda la pieza: su **espesor**, el **radio interior de doblez** y el **factor K**. Cada **Brida de arista** posterior se dobla con esos mismos valores, así la pieza sigue siendo una sola lámina que puede desplegarse. Ambas necesitan el **núcleo exacto** (vea [El núcleo de malla](topic:solid-kernels)).

## Empezar con una brida base

1. Dibuje un boceto. Use un **perfil cerrado** para una placa plana (un rectángulo, o cualquier contorno cerrado con agujeros). Use **una cadena abierta de líneas** para una lámina doblada, como una L, una U o una Z dibujada como vista de canto de la lámina.
2. Seleccione el boceto en el historial de elementos.
3. Abra {{ui:Más}} en el grupo Elementos y elija {{ui:Brida base}}.

En el panel de la derecha:

- **Espesor (mm)** es el calibre de la lámina.
- **Radio de doblez (mm)** es el radio interior de cada doblez. 0 da una esquina interior afilada; el exterior igual se curva con un radio igual al espesor.
- **Factor K** indica dónde está la capa neutra dentro de la lámina, de 0 (la cara interior) a 0,5 (el medio). Decide cuánto mide la lámina al desplegarla. 0,44 es el valor predeterminado; su taller o proveedor de material puede darle el suyo.
- **Profundidad (mm)** es cuánto se extiende un perfil doblado fuera del plano del boceto. Una placa lo ignora.
- **Espesor fuera de los dobleces**: un perfil abierto es una cara de la lámina. Por defecto el espesor va en la cara interior del primer doblez, así que las líneas dibujadas son el exterior del canal. Marque la opción para poner las líneas en el interior. El resultado es el mismo sin importar por qué extremo se dibujó.

Cada esquina de una cadena abierta se vuelve un doblez. Una línea demasiado corta para sostener sus dobleces lo indica, con la longitud que necesita.

## Doblar una brida de arista

1. Haga clic en una arista recta de la cara superior o inferior de la lámina (las aristas largas, no las delgadas).
2. Elija {{ui:Más}} › {{ui:Brida de arista}}. Si no se eligió ninguna arista, PartCraft espera a que haga clic en una; Esc cancela.

La brida se dobla hacia arriba desde la cara de esa arista alrededor del radio interior de la lámina, y luego sigue recta. En el panel:

- **Ángulo (°)** es cuánto se dobla, de 1 a 180. 90 es una brida cuadrada.
- **Longitud (mm)** es el tramo recto después del doblez.
- **Doblar al otro lado** la dobla desde la otra cara (hacia abajo en lugar de hacia arriba).
- **Desplazamiento al inicio** y **Desplazamiento al final** acortan la brida desde cada extremo de la arista.
- **Alivio de doblez**: cuando un extremo tiene desplazamiento, se corta una ranura en la lámina junto a él para que el doblez no rasgue el metal allí. **Ancho del alivio** fija el ancho de la ranura; su profundidad es el radio de doblez más el espesor. Elija **Ninguno** para dejar la esquina sin cortar.

Para cambiar la arista después, presione {{ui:Elegir}} en el panel y haga clic en otra.

:::tip
Use parámetros para el espesor y el radio (vea [Parámetros y ecuaciones](topic:parameters)) para que un cambio de calibre actualice todas las bridas a la vez.
:::

## Desplegar

Ambos paneles terminan con **Patrón plano**. Presione {{ui:Desplegar}}:

- Una vista previa muestra la lámina desplegada, con la línea central de cada doblez punteada.
- **Tamaño** y **Área** son los del blanco plano.
- Cada doblez aparece en la lista con su dirección (**arriba** o **abajo**, visto desde el lado del boceto de la brida base), ángulo y radio interior.

Cada doblez toma la longitud de la capa neutra de la lámina a través de él, la **tolerancia de doblez**: ángulo (en radianes) × (radio interior + factor K × espesor). Así, un doblez de 90° de una lámina de 2 mm con radio de 2 mm y factor K 0,44 agrega 4,52 mm de lámina plana.

En una placa plana, los agujeros, cortes y alivios de doblez se muestran en el plano donde realmente están, incluidos los agujeros que atraviesan una brida.

Para cortar muchas piezas, presione {{ui:Anidar en hojas…}} bajo el patrón plano: vea [Anidar piezas planas en hojas](topic:nest-flat-parts). Una brida base doblada se despliega como un rectángulo: su longitud desarrollada × su profundidad, con una línea de doblez por esquina.

{{ui:Guardar DXF}} guarda el patrón plano para un láser, punzonadora o chorro de agua, en milímetros:

- el contorno en la capa **OUTLINE**, como líneas, arcos y círculos;
- las líneas de doblez en la capa **BEND**, punteadas;
- una nota en cada doblez en la capa **BEND_NOTES**, como "UP 90° R2".

Si cambia cualquier cosa, el plano desaparece; presione {{ui:Desplegar}} de nuevo para obtener el nuevo.

:::note
Verifique el factor K con su taller antes de cortar: la longitud del plano depende de él, y varía según el material, el espesor y las herramientas.
:::

## Mensajes

- **La chapa necesita una brida base antes** — se agregó una brida de arista antes de cualquier brida base. Muévala debajo de una, o agregue primero una brida base.
- **Una brida de arista necesita una arista recta** — las bridas solo se doblan a lo largo de líneas; las aristas curvas todavía no admiten una.
- **Esa arista no está en una cara del espesor de la lámina** — la arista pertenece a una cara que no es la superior ni la inferior de la lámina (por ejemplo, la pared de un agujero). Elija una arista de la cara superior o inferior.
- **Los desplazamientos no dejan nada de la arista** — los dos desplazamientos suman toda la arista o más.
- **Las bridas de arista sobre una brida base doblada todavía no se pueden desplegar** — empiece desde una placa plana y doble todo con bridas de arista, que sí se despliegan.
- **Los cortes y agujeros hechos después de una brida base doblada todavía no se muestran en su plano** — el plano de un perfil doblado es solo su rectángulo desarrollado.
