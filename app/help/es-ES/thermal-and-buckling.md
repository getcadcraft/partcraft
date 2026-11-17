---
title: Calor, tensión térmica y pandeo
summary: Calcule las temperaturas de una pieza a partir de temperaturas fijas, flujo de calor, potencia térmica, convección y radiación (en régimen estacionario o a lo largo del tiempo), cargue un estudio de tensión con una subida de temperatura, y halle la carga a la que una pieza esbelta pandea, con lo que cada método puede y no puede indicar.
keywords: térmico, transferencia de calor, calor, temperatura, conducción, convección, coeficiente de película, radiación, emisividad, flujo de calor, potencia térmica, generación de calor, disipador, transitorio, tiempo, enfriamiento, calentamiento, Crank–Nicolson, Euler implícito, balance de calor, tensión térmica, tensión térmica en el tiempo, tensión térmica transitoria, temple, choque térmico, historial de tensión, instante más desfavorable, dilatación térmica, coeficiente de dilatación, pandeo, pandeo de Euler, factor de carga, carga crítica, columna, esbelta, autovalor
from: 1a1b7545
---

Estos estudios están en el espacio de trabajo Simulación, junto a la tensión estática y las frecuencias naturales (vea [Compruebe la tensión y la deformación](topic:simulation)). Elíjalos en el cuadro **Tipo** del panel. Usan la misma malla de cubos pequeños y la misma lista de materiales; todos los materiales de la biblioteca tienen una conductividad térmica, un calor específico y un coeficiente de dilatación (valores típicos de manuales, que se muestran en **Propiedades**).

## Térmico: ¿adónde va el calor?

1. Elija **Térmico (transferencia de calor)** como **Tipo**.
2. Añada condiciones térmicas desde la lista {{ui:Añadir}} del panel, y haga clic después en sus caras (como con apoyos y cargas):
   - **Temperatura fija**: la cara se mantiene a una temperatura, en °C.
   - **Flujo de calor**: W/m² que entran en la cara (negativo, sale). Actúa sobre el área real de la cara, incluso donde los cubos forman una escalera.
   - **Potencia térmica**: un total en vatios, repartido entre las caras elegidas según su área. Úselo para una resistencia calefactora o un chip de potencia conocida.
   - **Convección**: aire o líquido a una temperatura se lleva el calor a h W/(m²·K). Valores típicos de h: aire en calma 5–10, un ventilador 25–100, agua 500–10,000. PartCraft no calcula h: en este estudio no hay flujo de fluido.
   - **Radiación**: la cara irradia hacia el entorno a una temperatura, con una emisividad de 0 a 1. Se **linealiza** (la radiación se escribe como un coeficiente que depende de la temperatura y se vuelve a resolver hasta que se estabiliza) y solo va hacia el entorno: las caras no intercambian calor entre sí.
3. La **generación de calor** (W/m³) calienta toda la pieza desde dentro, por ejemplo una pieza resistiva.
4. Pulse **Resolver**. La pieza se colorea según la temperatura; elija **Flujo de calor** en {{ui:Mostrar}} para ver hacia dónde fluye el calor. Señale la pieza para leer ambos.

El flujo de calor estacionario necesita un lugar al que ir el calor: al menos una temperatura fija, convección o radiación. Una pieza que solo recibe calor no tiene estado estacionario; conviértala en transitoria.

La tabla muestra la temperatura mínima y máxima y dónde están, el mayor flujo de calor, y el **balance de calor**: el calor que entra o sale por cada condición (una temperatura fija cuenta lo que debe aportar o absorber), el calor generado, los totales de entrada y salida, y el **desequilibrio**. El desequilibrio debe ser una fracción mínima del calor que entra; uno grande indica que el resultado no es fiable.

### A lo largo del tiempo (transitorio)

Marque **Transitorio** y dé una **Temperatura inicial** (toda la pieza empieza ahí), un **Intervalo de tiempo** y un número de **Pasos de tiempo**. **Euler implícito** es robusto; **Crank–Nicolson** es más precisa con los mismos pasos, pero puede oscilar tras un cambio brusco. Tras resolver, arrastre el control deslizante **Tiempo** para ver las temperaturas en cada instante (la escala de colores se mantiene igual en todos los instantes). El balance de calor incluye entonces el calor almacenado.

## Tensión térmica: ¿qué le hace a la pieza un cambio de temperatura?

En un estudio de **Tensión estática** (o **Pandeo**), defina la **Carga térmica**:

- **Cambio de temperatura uniforme**: toda la pieza se calienta (o se enfría, con un número negativo) esos kelvin.
- **Temperaturas de las condiciones térmicas**: añada condiciones térmicas al mismo estudio; primero se resuelven las temperaturas estacionarias en la misma malla, y después la pieza se dilata α·(T − la **temperatura sin tensión**).
- **Temperaturas a lo largo del tiempo (cálculo transitorio)**: añada condiciones térmicas y después dé una **Temperatura inicial**, un **Intervalo de tiempo**, **Pasos de tiempo** y **Avance temporal**, como en un estudio térmico transitorio. Las temperaturas se resuelven en el tiempo en la misma malla (cubos o tetraedros), y una resolución estática sobre las temperaturas de cada instante da la tensión de ese instante. **Tensión en**:
  - **El instante más desfavorable** (el inicial): **Cálculos de tensión** reparte instantes uniformemente a lo largo del cálculo, incluido el inicial (21 por defecto, como máximo 51). Los resultados se abren en el instante con mayor tensión de von Mises; la tabla lo indica, un pequeño gráfico muestra la tensión máxima frente al tiempo, y el control deslizante **Tiempo** muestra la tensión en cada instante resuelto (la escala de colores sigue la del instante más desfavorable).
  - **Un tiempo elegido**: un instante, el paso de tiempo más cercano al **Tiempo (s)** que dé. Un estudio de pandeo siempre toma un tiempo elegido (el final del cálculo, salvo que indique otro).

Una pieza templada (sumergida de caliente en frío) o calentada de golpe está más tensionada cuando el interior y la superficie difieren más: a menudo justo al principio. Una temperatura mantenida se aplica desde el primer instante, como un cambio brusco, así que la tensión en el inicio depende del tamaño del elemento (solo algunos elementos ven el cambio). Léala como "muy alta", y mire los siguientes instantes del control deslizante para valores que la malla sí resuelve. La tensión es casi estática: sin inercia ni vibración por el cambio brusco.

Una pieza que puede dilatarse libremente no tiene tensión térmica: sujétela lo justo para que no se mueva (por ejemplo, tres caras sin fricción en ángulo recto). Sujeta entre dos paredes se comprime: una barra de acero calentada 50 K entre paredes rígidas soporta unos 117 MPa. Las cargas térmicas se equilibran por sí solas, así que las reacciones solo equilibran las cargas mecánicas.

## Pandeo: ¿cuándo cede una pieza esbelta?

1. Elija **Pandeo (lineal)** como **Tipo**, y añada apoyos y cargas como en un estudio estático.
2. Defina **Factores de carga a buscar** (cuántos modos de pandeo).
3. Pulse **Resolver**. Cada modo tiene un **factor de carga**: el múltiplo de sus cargas al que la pieza ideal pandea. Un factor de carga de 3 significa tres veces sus cargas; **un factor de carga inferior a 1 significa que pandea con las cargas que aplicó**. La tabla también da la carga total en cada factor. La forma del modo muestra cómo pandea (su tamaño no significa nada).

**El pandeo lineal sobrestima la carga de pandeo real.** Supone una pieza perfecta: perfectamente recta, sin tensiones residuales y elástica. Las piezas reales tienen pequeñas imperfecciones y pueden ceder antes, y las cáscaras de pared fina pueden pandear con una fracción del valor lineal. Use un margen amplio, y considere una advertencia un factor de carga cercano a 3 o inferior en una cáscara fina.

## Hasta qué punto fiarse

PartCraft contrasta estos solucionadores con fórmulas de cálculo a mano: una barra entre dos temperaturas (exacta), una aleta de refrigeración (dentro de 0.3 K), una placa que se calienta sola (exacta), un cubo que se enfría con el tiempo (dentro del 0.1 % con Crank–Nicolson), una barra calentada de golpe por un extremo, una barra libre calentada (sin tensión, ΔL = αLΔT), una barra sujeta entre paredes (σ = −EαΔT), una placa templada con el tiempo frente a la solución clásica en serie (dentro del 1 % en cubos, 2.1 % en tetraedros en el centro de la placa; 0.5 % en su superficie), el último instante de un cálculo largo frente a la tensión térmica estacionaria (la misma hasta una millonésima), y columnas de Euler (dentro del 1 % empotrada–libre, 1.5 % articulada–articulada). Tenga en cuenta:

- **Valores de material constantes.** La conductividad, el calor específico y la dilatación no cambian con la temperatura aquí; a unos cientos de grados pueden variar un 10–30 %. Tampoco cambia la rigidez.
- **La tensión a lo largo del tiempo es casi estática y elástica**: cada instante es un cálculo estático (sin inercia), y no hay fluencia, así que un temple que haría ceder la superficie muestra en cambio una tensión por encima del límite elástico.
- **Los coeficientes de convección son sus datos**, no se calculan a partir de un flujo de aire o de agua.
- **Sin resistencia de contacto**: la pieza es un único sólido.
- **Solo pandeo lineal**: sin imperfecciones, sin fluencia, sin comportamiento después del pandeo.
- El escalonado de los cubos y las esquinas interiores agudas afectan a las tensiones térmicas igual que a otras tensiones (vea [Compruebe la tensión y la deformación](topic:simulation)).
- Esta es una versión de laboratorio: compruebe las piezas importantes de otra forma.

## Relacionados

- [Compruebe la tensión y la deformación (Simulación)](topic:simulation)
- [Qué aún no está construido](topic:not-built-yet)
