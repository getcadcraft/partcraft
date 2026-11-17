---
title: Calor, esfuerzo térmico y pandeo
summary: Calcule las temperaturas de una pieza a partir de temperaturas fijas, flujo de calor, potencia térmica, convección y radiación (en régimen permanente o a lo largo del tiempo), cargue un estudio de esfuerzo con un aumento de temperatura, y calcule la carga a la que una pieza esbelta se pandea, con lo que cada método puede y no puede indicarle.
keywords: térmico, transferencia de calor, calor, temperatura, conducción, convección, coeficiente de película, radiación, emisividad, flujo de calor, potencia de calor, generación de calor, disipador, transitorio, tiempo, enfriamiento, calentamiento, Crank-Nicolson, Euler implícito, balance de calor, esfuerzo térmico, esfuerzo térmico en el tiempo, esfuerzo térmico transitorio, temple, choque térmico, historial de esfuerzos, tiempo más crítico, dilatación térmica, coeficiente de dilatación, pandeo, pandeo de Euler, factor de carga, carga crítica, columna, esbelta, valor propio
from: 1a1b7545
---

Estos estudios están en el espacio de trabajo Simulación, junto con el esfuerzo estático y las frecuencias naturales (vea [Revisar esfuerzo y deflexión](topic:simulation)). Elíjalos en el cuadro **Tipo** del panel. Usan la misma malla de cubos pequeños y la misma lista de materiales; cada material de la biblioteca tiene una conductividad térmica, un calor específico y un coeficiente de dilatación (valores típicos de manuales, que se muestran bajo **Propiedades**).

## Térmico: ¿a dónde va el calor?

1. Elija **Térmico (transferencia de calor)** como **Tipo**.
2. Agregue condiciones térmicas desde la lista **Agregar** del panel, y luego haga clic en sus caras (como con apoyos y cargas):
   - **Temperatura fija**: la cara se mantiene a una temperatura, en °C.
   - **Flujo de calor**: W/m² que entran a la cara (negativo sale). Actúa sobre el área real de la cara, incluso donde los cubos forman un escalón.
   - **Potencia de calor**: un total en vatios, repartido entre las caras elegidas según su área. Úselo para un calentador o un chip de potencia conocida.
   - **Convección**: aire o líquido a una temperatura se lleva el calor a h W/(m²·K). Valores típicos de h: aire en reposo 5–10, un ventilador 25–100, agua 500–10,000. PartCraft no calcula h: en este estudio no hay flujo de fluido.
   - **Radiación**: la cara irradia hacia el entorno a una temperatura, con una emisividad de 0 a 1. Se **linealiza** (la radiación se escribe como un coeficiente que depende de la temperatura y se vuelve a resolver hasta estabilizarse) y solo va hacia el entorno: las caras no intercambian calor entre sí.
3. **Generación de calor** (W/m³) calienta toda la pieza desde adentro, por ejemplo una pieza resistiva.
4. Presione **Resolver**. La pieza se colorea según la temperatura; elija **Flujo de calor** en **Mostrar** para ver por dónde fluye el calor. Señale la pieza para leer ambos.

El flujo de calor en régimen permanente necesita un destino: al menos una temperatura fija, convección o radiación. Una pieza que solo recibe calor no tiene estado permanente; hágala transitoria en su lugar.

La tabla muestra la temperatura mínima y máxima y dónde están, el mayor flujo de calor, y el **balance de calor**: el calor que entra o sale de cada condición (una temperatura fija cuenta lo que debe aportar o absorber), el calor generado, los totales de entrada y salida, y el **desbalance**. El desbalance debe ser una fracción mínima del calor que entra; uno grande significa que el resultado no es confiable.

### A lo largo del tiempo (transitorio)

Marque **Transitorio** y defina una **Temperatura inicial** (toda la pieza empieza ahí), un **Lapso de tiempo** y un número de **Pasos de tiempo**. **Euler implícito** es robusto; **Crank–Nicolson** es más exacto con los mismos pasos, pero puede oscilar después de un cambio súbito. Después de resolver, arrastre el control deslizante **Tiempo** para ver las temperaturas en cada momento (la escala de color se mantiene igual para todos los momentos). El balance de calor incluye entonces el calor almacenado.

## Esfuerzo térmico: ¿qué hace un cambio de temperatura a la pieza?

En un estudio de **Esfuerzo estático** (o **Pandeo**), defina **Carga térmica**:

- **Cambio uniforme de temperatura**: toda la pieza se calienta (o se enfría, con un número negativo) esa cantidad de kelvin.
- **Temperaturas de condiciones térmicas**: agregue condiciones térmicas al mismo estudio; primero se resuelven las temperaturas permanentes en la misma malla, luego la pieza se dilata α·(T − la **temperatura libre de esfuerzo**).
- **Temperaturas a lo largo del tiempo (corrida transitoria)**: agregue condiciones térmicas y luego defina una **Temperatura inicial**, **Lapso de tiempo**, **Pasos de tiempo** y **Método de paso temporal**, como en un estudio térmico transitorio. Las temperaturas se resuelven a lo largo del tiempo en la misma malla (cubos o tetraedros), y una solución estática con las temperaturas de cada momento da el esfuerzo de ese momento. **Esfuerzo en**:
  - **El momento más crítico** (el inicio): **Resoluciones de esfuerzo** reparte momentos uniformemente en la corrida, incluido el inicio (21 a menos que cambie el valor, con un máximo de 51). Los resultados se abren en el momento con el mayor esfuerzo de von Mises; la tabla lo indica, un pequeño gráfico muestra el esfuerzo máximo contra el tiempo, y el control **Tiempo** muestra el esfuerzo en cada momento resuelto (la escala de color es la del momento más crítico).
  - **Un tiempo elegido**: un solo momento, el paso de tiempo más cercano al **Tiempo (s)** que dé. Un estudio de pandeo siempre toma un tiempo elegido (el final de la corrida, a menos que defina uno).

Una pieza templada (sumergida de caliente a fría) o calentada súbitamente se esfuerza más mientras el interior y la superficie difieren más: a menudo justo al inicio. Una temperatura sostenida se aplica desde el primer instante, como un cambio súbito, así que el esfuerzo en el inicio exacto depende del tamaño del elemento (solo unos pocos elementos ven el cambio). Léalo como "muy alto", y observe los siguientes momentos del control deslizante para ver valores que la malla sí resuelve. El esfuerzo es casi estático: sin inercia ni vibración por el cambio súbito.

Una pieza libre de crecer no tiene esfuerzo térmico: sujétela lo justo para que no se mueva (por ejemplo, tres caras sin fricción en ángulo recto). Sujeta entre dos muros rígidos se comprime: una barra de acero calentada 50 K entre muros rígidos soporta unos 117 MPa. Las cargas térmicas se equilibran por sí mismas, así que las reacciones aún se equilibran solo con las cargas mecánicas.

## Pandeo: ¿cuándo cede una pieza esbelta?

1. Elija **Pandeo (lineal)** como **Tipo**, y agregue apoyos y cargas como en un estudio estático.
2. Defina **Factores de carga a encontrar** (cuántos modos de pandeo).
3. Presione **Resolver**. Cada modo tiene un **factor de carga**: el múltiplo de sus cargas al que la pieza ideal se pandea. Un factor de carga de 3 significa tres veces sus cargas; **un factor de carga menor que 1 significa que se pandea bajo las cargas aplicadas**. La tabla también indica la carga total en cada factor. La forma del modo muestra cómo se pandea (su tamaño no significa nada).

**El pandeo lineal sobreestima la carga real de pandeo.** Supone una pieza perfecta: perfectamente recta, sin esfuerzo residual y elástica. Las piezas reales tienen pequeñas imperfecciones y pueden ceder primero, y las cáscaras de pared delgada pueden pandearse con una fracción del valor lineal. Use un margen amplio, y trate un factor de carga cercano o menor que 3 en una cáscara delgada como una advertencia.

## Qué tan confiable es

PartCraft verifica estos solucionadores contra fórmulas a mano: una barra entre dos temperaturas (exacta), una aleta de enfriamiento (dentro de 0.3 K), un bloque que se calienta solo (exacto), un cubo que se enfría con el tiempo (dentro de 0.1 % con Crank–Nicolson), una barra calentada súbitamente en un extremo, una barra libre calentada (sin esfuerzo, ΔL = αLΔT), una barra sujeta entre muros (σ = −EαΔT), una placa templada con el tiempo contra la solución clásica en serie (dentro de 1 % en cubos, 2.1 % en tetraedros en el centro de la placa; 0.5 % en su superficie), el último momento de una corrida larga contra el esfuerzo térmico permanente (igual hasta una millonésima), y columnas de Euler (dentro de 1 % empotrada-libre, 1.5 % articulada-articulada). Tenga en cuenta:

- **Valores de material constantes.** La conductividad, el calor específico y la dilatación no cambian con la temperatura aquí; a unos cientos de grados pueden cambiar 10–30 %. La rigidez tampoco cambia.
- **El esfuerzo a lo largo del tiempo es casi estático y elástico**: cada momento es una solución estática (sin inercia), y no hay fluencia, así que un temple que cedería la superficie muestra en cambio un esfuerzo por encima del límite de fluencia.
- **Los coeficientes de convección son su entrada**, no se calculan a partir de un flujo de aire o de agua.
- **Sin resistencia de contacto**: la pieza es un solo sólido.
- **Solo pandeo lineal**: sin imperfecciones, sin fluencia, sin comportamiento después del pandeo.
- El escalonado de los cubos y las esquinas interiores agudas afectan los esfuerzos térmicos igual que a otros esfuerzos (vea [Revisar esfuerzo y deflexión](topic:simulation)).
- Esta es una versión de laboratorio: verifique por otro medio las piezas que importan.

## Relacionados

- [Revisar esfuerzo y deflexión (Simulación)](topic:simulation)
- [Qué aún no está construido](topic:not-built-yet)
