---
title: Barrido, solevación y ángulo de salida
summary: Recorra un perfil cerrado a lo largo de una trayectoria de curvas de boceto o aristas del modelo, cree una solevación entre secciones en planos distintos y añada ángulo de salida a las caras; con las opciones, los resultados exactos y los mensajes.
keywords: barrido, cuerpo de barrido, corte por barrido, tubo, trayectoria, solevación, cuerpo de solevación, mezclar secciones, reglado, ángulo de salida, inclinación, caras cónicas, plano neutro, dirección de tiro, moldeo
from: 9d637981
---

:::note
**En esta versión** el barrido y la solevación todavía no están construidos: necesitan un núcleo geométrico exacto, que esta versión de PartCraft no tiene. [Qué aún no está construido](topic:not-built-yet) explica qué hacer en su lugar; las secciones Barrido y Solevación las describen tal como funcionan con un núcleo exacto. **El ángulo de salida funciona** en caras planas: el núcleo de malla lo construye, con el mismo resultado que da un núcleo exacto.
:::

Las tres están en el menú {{ui:Más}} del grupo Elementos (vea [El núcleo de malla](topic:solid-kernels)). Cada una puede unir material, cortarlo, conservar solo la zona común (**Intersecar**) o crear un **Cuerpo nuevo** (barrido y solevación: **Operación** en el panel).

## Barrido

Un barrido mueve un perfil cerrado a lo largo de una trayectoria: tubos, asas, muelles de alambre, guías.

1. Dibuje la **trayectoria** en un boceto: líneas y arcos unidos de extremo a extremo (o use aristas del modelo, más abajo).
2. Dibuje el **perfil** en otro boceto cuyo plano pase por un extremo de la trayectoria; por ejemplo, un círculo en el plano superior al inicio de una trayectoria dibujada en el plano de alzado.
3. Seleccione el boceto del perfil y elija {{ui:Más}} y después {{ui:Barrido}}. El boceto distinto más reciente se convierte en la trayectoria.

En el panel:

| Ajuste | Qué hace |
|---|---|
| **Trayectoria** | Marque los bocetos que forman la trayectoria (varios bocetos se unen de extremo a extremo en una única trayectoria 3D); **Seleccionar aristas del modelo** añade aristas de la pieza |
| **Orientación** | Seguir la trayectoria (predeterminado), Frenet, Fija (las secciones se mantienen paralelas al perfil), Mantener una dirección, Siguiendo una curva guía |
| **Escala final** | El perfil crece o se reduce linealmente hasta este tamaño al final (1 = constante) |

Las esquinas vivas de la trayectoria se unen a inglete. Un círculo de radio 5 barrido a lo largo de una línea de 100 mm es un cilindro de exactamente 2500π mm³; a lo largo de un cuarto de arco de radio 50, un cuarto de toro de 625π² mm³.

## Solevación

Una solevación une con suavidad dos o más secciones situadas en planos distintos.

1. Dibuje cada sección en su propio boceto (un bucle cerrado en cada uno), sobre planos base, planos de referencia (vea [Planos, ejes y puntos de referencia](topic:reference-geometry)) o caras.
2. Elija {{ui:Más}} y después {{ui:Solevación}}. Cada boceto de un solo bucle que no se haya usado se convierte en una sección, en orden de historial.

El panel enumera las secciones en orden (**Subir** reordena, **Quitar** elimina una); **Añadir un boceto** añade otro, y **Seleccionar una cara** añade una cara plana de la pieza. **Reglado** crea caras planas entre secciones en lugar de una fusión suave. Entre dos cuadrados, ambas opciones dan el mismo tronco de pirámide (un cuadrado de 40 mm a uno de 20 mm en 30 mm: exactamente 28000 mm³).

Las secciones con distinto número de lados (un cuadrado a un triángulo) las empareja OpenCascade, que puede retorcer las caras laterales; la función avisa. Dibuje las secciones con el mismo número de lados, empezando por esquinas equivalentes, para obtener el resultado más limpio.

### Carriles guía

Los carriles guía son curvas que los lados de la solevación deben seguir de la primera sección a la última, para un abombamiento, una estrechez o un ensanchamiento que usted mismo dibuja.

1. Dibuje dos o más carriles: curvas abiertas (líneas, arcos, splines) que vayan de la primera sección a la última y crucen cada sección una vez. Un solo boceto puede contener varios carriles: cada cadena separada es un carril propio. Dibuje cada carril de forma que realmente toque cada sección: ajuste sus extremos a los puntos de las secciones.
2. En el panel de Solevación, en **Carriles guía**, marque los bocetos que los contienen, o haga clic en {{ui:Seleccionar aristas del modelo como guías}} y haga clic en las aristas de la pieza ({{key:Esc}} termina).

Con carriles, la solevación es una superficie de Gordon que pasa por las secciones y los carriles (vea [Superficies a través de una red de curvas](topic:gordon-surfaces)), cerrada plana en ambos extremos para formar un sólido. El panel indica con qué precisión la sigue. Entonces, cada sección debe ser un boceto (un punto o una cara no pueden tomar un carril), y **Reglado** no se aplica. Un carril que se aleja de una sección más de 0.01 mm se rechaza, indicando la separación.

Comprobado: dos círculos (de 20 mm y 10 mm de diámetro, separados 40 mm) con cuatro carriles rectos dan el volumen del tronco de cono con un error inferior a 0.000002 %; arcos que abomban 5 mm dan un barril que sigue cada carril con un error de 0.00001 mm.

## Ángulo de salida

El ángulo de salida inclina las caras para que una pieza salga de un molde.

1. Elija {{ui:Más}} y después {{ui:Ángulo de salida}} (o mantenga pulsado {{key:Shift}} y haga clic antes en las caras). Sin nada seleccionado, está en modo de selección: haga clic en cada cara que desee inclinar y después en {{ui:Listo}}.
2. Ajuste **Ángulo (°)**, el **Plano neutro** (donde las caras mantienen su tamaño) y la **Dirección de tiro** (por defecto, la normal del plano neutro).

Un ángulo positivo inclina la cara hacia dentro a lo largo de la dirección de tiro y quita material; uno negativo lo añade. El plano neutro empieza en el plano superior. En esta versión solo se pueden inclinar caras planas: un cilindro, un cono o una cara de superficie libre muestra el mensaje "Ángulo de salida: en esta versión solo caras planas (la construye el núcleo de malla)." Los cuatro lados de un bloque de 100 × 100 × 50 inclinado 5° alrededor de su base se convierten en un tronco de volumen exacto h/3·(a² + b² + ab), con b = a − 2h·tan 5°.

## Mensajes

| Mensaje | Qué hacer |
|---|---|
| "El plano del perfil tiene que pasar por un extremo de la trayectoria …" | Mueva el boceto del perfil al inicio (o al final) de la trayectoria |
| "La trayectoria tiene un hueco: sus curvas no se unen de extremo a extremo …" | Una las curvas de la trayectoria; en bocetos separados, sus extremos deben coincidir exactamente |
| "Una sección de solevación necesita exactamente un bucle cerrado" | Divida el boceto o quite el bucle sobrante |
| "… no se puede inclinar respecto a este plano neutro …" | La cara es paralela al plano neutro o no lo toca |
| "Ángulo de salida: en esta versión solo caras planas (la construye el núcleo de malla)." | Una cara elegida es curva. Quítela; incline solo caras planas |

:::note
No construido todavía: barridos con torsión, barridos de pared fina y de superficie, carriles guía de solevación y tangencia final, ángulo de salida en cilindros, conos y caras de superficie libre.
:::
