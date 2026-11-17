---
title: Barrido, solevación y ángulo de salida
summary: Haga un barrido de un perfil cerrado a lo largo de una trayectoria de curvas de croquis o aristas del modelo, solevar a través de secciones en planos distintos y agregar ángulo de salida a las caras; con las opciones, los resultados exactos y los mensajes.
keywords: barrido, saliente por barrido, corte por barrido, tubo, trayectoria, solevación, saliente por solevación, mezclar secciones, reglado, ángulo de salida, caras cónicas, plano neutro, dirección de extracción, moldeo
from: 9d637981
---

:::note
**En esta versión** el barrido y la solevación todavía no están construidos: necesitan un núcleo geométrico exacto, que esta versión de PartCraft no tiene. [Qué aún no está construido](topic:not-built-yet) indica qué hacer en su lugar; las secciones Barrido y Solevación describen cómo funcionan con un núcleo exacto. **El ángulo de salida sí funciona** en caras planas: el núcleo de malla lo construye, con el mismo resultado que daría un núcleo exacto.
:::

Las tres están en el menú {{ui:Más}} del grupo Operaciones (vea [El núcleo de malla](topic:solid-kernels)). Cada una puede agregar material, cortarlo, conservar solo la zona común (**Intersección**) o crear un **Cuerpo nuevo** (barrido y solevación: **Operación** en el panel).

## Barrido

Un barrido desplaza un perfil cerrado a lo largo de una trayectoria: tubos, asas, resortes de alambre, guías.

1. Dibuje la **trayectoria** en un croquis: líneas y arcos unidos de extremo a extremo (o use aristas del modelo, más abajo).
2. Dibuje el **perfil** en otro croquis cuyo plano pase por un extremo de la trayectoria, por ejemplo un círculo en el plano superior al inicio de una trayectoria dibujada en el plano frontal.
3. Seleccione el croquis del perfil y elija {{ui:Más}}, luego {{ui:Barrido}}. El croquis distinto más reciente se convierte en la trayectoria.

En el panel:

| Ajuste | Qué hace |
|---|---|
| **Trayectoria** | Marque los croquis que forman la trayectoria (varios croquis se unen de extremo a extremo en una sola trayectoria 3D); **Seleccionar aristas del modelo** agrega aristas de la pieza |
| **Orientación** | Seguir la trayectoria (predeterminado), Frenet, Fija (las secciones siguen paralelas al perfil), Mantener una dirección, Sobre una curva guía |
| **Escala final** | El perfil crece o se reduce de forma lineal hasta este tamaño al final (1 = constante) |

Las esquinas vivas de la trayectoria se biselan a inglete. Un círculo de radio 5 barrido a lo largo de una línea de 100 mm es un cilindro de exactamente 2500π mm³; a lo largo de un arco de cuarto de círculo de radio 50, un cuarto de toro de 625π² mm³.

## Solevación

Una solevación mezcla dos o más secciones en planos distintos.

1. Dibuje cada sección en su propio croquis (un solo contorno cerrado en cada uno), sobre planos base, planos de referencia (vea [Planos, ejes y puntos de referencia](topic:reference-geometry)) o caras.
2. Elija {{ui:Más}} y luego {{ui:Solevación}}. Cada croquis de un solo contorno que no esté usado se convierte en sección, en el orden del historial.

El panel enumera las secciones en orden (**Subir** reordena, **Quitar** elimina una); **Agregar un croquis** agrega otro, **Seleccionar una cara** agrega una cara plana de la pieza. **Reglado** crea caras planas entre secciones en lugar de una mezcla suave. Entre dos cuadrados, ambos son el mismo tronco de pirámide (de un cuadrado de 40 mm a uno de 20 mm en 30 mm: exactamente 28000 mm³).

Las secciones con distinto número de lados (un cuadrado y un triángulo) las empareja OpenCascade, lo que puede torcer las caras laterales; el sistema lo advierte. Dibuje las secciones con el mismo número de lados, empezando desde esquinas correspondientes, para obtener el resultado más limpio.

### Guías

Las guías son curvas que los lados de la solevación deben seguir desde la primera sección hasta la última, para un abultamiento, una cintura o un ensanchamiento que dibuje usted mismo.

1. Dibuje dos o más guías: curvas abiertas (líneas, arcos, splines) que vayan de la primera sección a la última y crucen cada sección una vez. Un croquis puede contener varias guías: cada cadena separada dentro de él es su propia guía. Dibuje una guía de modo que realmente toque cada sección: enganche sus extremos a los puntos de las secciones.
2. En el panel de Solevación, bajo **Guías**, marque los croquis que las contienen, o haga clic en {{ui:Seleccionar aristas del modelo como guías}} y haga clic en aristas de la pieza ({{key:Esc}} termina).

Con guías, la solevación es una superficie de Gordon que pasa por las secciones y las guías (vea [Superficies a través de una red de curvas](topic:gordon-surfaces)), cerrada plana en ambos extremos para formar un sólido. El panel indica qué tan de cerca las sigue. Entonces cada sección debe ser un croquis (un punto o una cara no puede recibir una guía), y **Reglado** no aplica. Una guía que no toque una sección por más de 0.01 mm se rechaza, indicando la separación.

Verificado: dos círculos (de 20 mm y 10 mm de diámetro separados 40 mm) con cuatro guías rectas dan el volumen del tronco de cono con un error de 0.000002 %; arcos que se abomban 5 mm dan un barril que sigue cada guía dentro de 0.00001 mm.

## Ángulo de salida

El ángulo de salida inclina las caras para que una pieza salga de un molde.

1. Elija {{ui:Más}} y luego {{ui:Ángulo de salida}} (o primero {{key:Shift}}+clic en caras). Sin nada seleccionado, está en modo de selección: haga clic en cada cara que desea inclinar y luego en {{ui:Listo}}.
2. Defina **Ángulo (°)**, el **Plano neutro** (donde las caras conservan su tamaño) y la **Dirección de extracción** (por defecto, la normal del plano neutro).

Un ángulo positivo inclina la cara hacia adentro a lo largo de la extracción y quita material; uno negativo lo agrega. El plano neutro inicia como el plano Superior. En esta versión solo se pueden inclinar caras planas: un cilindro, cono o cara libre muestra "Ángulo de salida: en esta versión solo caras planas (el núcleo de malla lo construye)." Los cuatro lados de un bloque de 100 × 100 × 50 inclinado 5° alrededor de su base se convierten en un tronco de pirámide de exactamente h/3·(a² + b² + ab), con b = a − 2h·tan 5°.

## Mensajes

| Mensaje | Qué hacer |
|---|---|
| "El plano del perfil tiene que pasar por un extremo de la trayectoria …" | Mueva el croquis del perfil al inicio (o al final) de la trayectoria |
| "La trayectoria tiene un hueco: sus curvas no se unen de extremo a extremo …" | Una las curvas de la trayectoria; en croquis separados sus extremos deben coincidir exactamente |
| "Una sección de solevación necesita exactamente un contorno cerrado" | Divida el croquis o quite el contorno extra |
| "… no se puede aplicar ángulo de salida sobre este plano neutro …" | La cara es paralela al plano neutro o no lo toca |
| "Ángulo de salida: en esta versión solo caras planas (el núcleo de malla lo construye)." | Una cara elegida es curva. Quítela; aplique ángulo de salida solo a caras planas |

:::note
No construido aún: barridos con torsión, barridos de pared delgada y de superficie, guías de solevación y tangencia en el extremo, ángulo de salida en cilindros, conos y caras libres.
:::
