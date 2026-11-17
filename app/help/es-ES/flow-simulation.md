---
title: Simular el flujo de un fluido (estudio de flujo)
summary: Flujo por los canales interiores de una pieza o alrededor de ella dentro de una caja: entradas, salidas, aire, agua o su propio fluido, y después velocidad y presión en un plano de corte móvil, líneas de corriente, presión superficial, caída de presión, balance de masas, arrastre y sustentación, con lo que el método laminar puede y no puede indicarle.
keywords: flujo, CFD, fluido, dinámica de fluidos computacional, simulación de flujo, aire, agua, viscosidad, densidad, número de Reynolds, laminar, turbulento, caída de presión, pérdida de carga, entrada, salida, tapa, tapón, velocidad, caudal, caudal volumétrico, litros por minuto, presión estática, líneas de corriente, plano de corte, plano de sección, arrastre, sustentación, coeficiente de arrastre, coeficiente de sustentación, área frontal, flujo externo, flujo interno, tubería, canal, colector, tobera, Boltzmann de red, residuo, convergencia
from: 7dc75f29
---

Un estudio de **Flujo** calcula cómo se mueve un fluido por los canales interiores de su pieza (**interno**) o alrededor de ella (**externo**). Por defecto es **laminar, incompresible, isotermo y newtoniano**: flujo suave de un fluido cuyas densidad y viscosidad permanecen fijas, sin calor, sin turbulencia y sin gravedad. Existe también un modelo turbulento **experimental**, solo para patrones cualitativos (véase más abajo). Trabaja sobre las caras con nombre que el núcleo de malla asigna a la pieza (véase [El núcleo de malla](topic:solid-kernels)).

Elija **Simulación** en el cuadro **Espacio de trabajo**, pulse **Nuevo estudio** si no hay ninguno y ponga **Tipo** en **Flujo (CFD)**. **Modelo de flujo** es **Laminar** (por defecto) o **Turbulento (Spalart–Allmaras, experimental)**: véase **Flujo turbulento (experimental)** más abajo. Los ajustes estructurales del estudio se conservan, así que puede volver atrás. Los ajustes de flujo se guardan en el archivo de pieza y cada cambio puede deshacerse.

## Elija el fluido y las celdas

- **Fluido**: aire o agua a 20 °C, o **Personalizado** con su propia densidad (kg/m³) y viscosidad dinámica (Pa·s). El aire usa la ley de los gases ideales y la ley de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); el agua usa los valores IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Tamaño de celda**: el espacio del fluido se llena con cubos iguales. Déjelo vacío para un tamaño automático; el panel muestra la malla. Cada abertura y cada canal deben tener **al menos 8 a 10 celdas de ancho** para obtener cifras útiles; las celdas más pequeñas son más precisas y más lentas (el doble de fino equivale a unas 16 veces el trabajo).
- **Paredes**: **Interpoladas** sigue las paredes curvas entre celdas (por defecto); **Rebote** trata las paredes como la escalera de cubos.

## Flujo dentro de la pieza

El espacio del fluido debe estar cerrado. Añada una **Entrada** y una **Salida** en el panel y, después, haga clic en sus caras en la vista:

1. **La cara plana alrededor de una abertura**: el borde en el extremo de un tubo, una cara de boca. PartCraft cierra allí el orificio de la abertura con una tapa. Todos los orificios de esa cara pertenecen a esa abertura, así que, cuando una entrada y una salida se abren en la misma cara, modele en su lugar una tapa fina sobre una de ellas.
2. **La cara interior de una tapa**: como en otras herramientas CAD, modele una placa fina (una extrusión) sobre la abertura y elija su cara que toca el fluido.

Para una entrada, indique una **velocidad** (m/s, uniforme en toda la abertura, hacia la pieza) o un **caudal volumétrico** (L/min). Para una salida, indique la **presión estática** (Pa, manométrica). Si una abertura queda abierta, o si una pared es más delgada que una celda, el interior se une con el exterior y el cálculo se detiene con «No hay un espacio de fluido cerrado».

## Flujo alrededor de la pieza

Ponga **Flujo** en **Externo**, la **Velocidad**, la dirección hacia la que fluye y hasta dónde llega la caja aguas arriba, aguas abajo y a los lados (vacío: 1, 3 y 1 veces el tamaño mayor de la pieza). La cara de la caja por la que entra el flujo es una entrada, la cara por la que sale es una salida a 0 Pa, y las caras a lo largo del flujo son deslizantes. Una caja demasiado pequeña comprime el flujo alrededor de la pieza y aumenta el arrastre. **Área de referencia** es el área que usan los coeficientes de arrastre y sustentación (vacío: el área frontal de la pieza vista en la dirección del flujo); la sustentación se mide a lo largo de +Y, salvo que elija otra dirección.

## Resolver y leer los resultados

Pulse **Resolver**. El cálculo se ejecuta en segundo plano con el número de pasos, el residuo y un gráfico del residuo; **Detener** lo termina. Se detiene cuando el residuo (cuánto cambia el campo de velocidades en cada paso) queda por debajo del objetivo y la caída de presión o el arrastre se han estabilizado. Si antes alcanza el límite de pasos, el panel indica **No convergido** en rojo: las cifras son el último estado, no una respuesta estacionaria.

- **Plano de corte**: velocidad o presión estática en un plano que atraviesa el modelo; elija su normal (X, Y o Z) y arrastre el control deslizante para moverlo. Pase el cursor sobre él para leer los valores.
- **Líneas de corriente**: desde las entradas (interno) o desde un rastrillo de puntos a lo largo del extremo de entrada de la caja, en el plano de corte (externo).
- **Pieza**: sólida, transparente (para ver el plano en su interior), presión superficial u oculta.
- **Tabla**: número de Reynolds, caída de presión (presión estática media en las entradas menos la de las salidas), el caudal y la presión media de cada abertura, la fuerza sobre la pieza, arrastre y sustentación con sus coeficientes y el área de referencia (externo), el balance de masas (entrada frente a salida), la malla y el solucionador.

## Flujo turbulento (experimental)

**Modelo de flujo › Turbulento (Spalart–Allmaras, experimental)** resuelve el flujo turbulento promediado en el tiempo (RANS estacionario): el modelo Spalart–Allmaras da una viscosidad de remolino en cada celda, y las celdas junto a las paredes usan la ley de la pared de Spalding en lugar de resolver allí la capa delgada. Es totalmente turbulento en todas partes (sin regiones laminares ni transición).

**No superó sus comprobaciones de precisión.** El panel, los resultados y la tabla lo indican en cada estudio turbulento, y la advertencia no puede cerrarse. Úselo para **patrones de flujo cualitativos**, es decir, dónde el flujo se separa, recircula o se acelera, **no para cifras de diseño**.

| Comprobación | Referencia | Resultado |
|---|---|---|
| Fricción en canal plano, primera celda en y⁺ 49 / 98 | Correlación de Dean | +3.3 % / +4.7 % |
| Canal con pared resuelta (y⁺ ≈ 3), Re_τ 180: velocidad media | DNS de Moser, Kim y Mansour | −1 % |
| Canal plano, y⁺ 7–15 o 190–380 | Correlación de Dean | +9 a +22 % |
| Fricción en tubería a través de las celdas cúbicas, totalmente desarrollada, de 10 a 30 celdas de ancho | Colebrook | De 30 a 34 % demasiado alta |
| Reenganche del flujo tras un escalón hacia atrás, de 6 a 14 celdas por altura de escalón | Driver y Seegmiller, 6.26 alturas de escalón | De 21 a 39 % demasiado corta |

Los resultados mejoran solo lentamente con celdas más finas. Tras resolver, la tabla muestra el **y⁺ de la primera celda** (mínimo, medio y máximo sobre las celdas de pared) y avisa fuera del intervalo comprobado de 1 a 400; apunte a unos 30 a 300. **Tiempo de cálculo:** los tamaños automáticos de celda están pensados para unos pocos minutos en como mucho un núcleo de un portátil (el panel muestra el peor caso para la malla y el límite de pasos; una tubería pequeña se estabiliza en menos de 20 segundos). Reducir a la mitad el tamaño de celda cuesta unas 16 veces más tiempo. Las fuerzas sobre la pieza proceden de un balance de momento sobre las aberturas o la caja.

**Trabajo realizado hasta ahora:** las celdas de pared ahora ajustan su propia tensión cortante a la ley de pared, lo que redujo los errores de tubería y escalón a las cifras anteriores sin cambiar los resultados del canal plano. No fue suficiente para cifras de diseño. El siguiente paso son celdas más finas cerca de las paredes.

## Qué puede y qué no puede indicarle

- **El modelo laminar** es solo laminar. En tuberías el flujo se vuelve turbulento por encima de un número de Reynolds de unos 2,000 a 4,000; tras cuerpos romos la estela empieza a desprender vórtices por encima de unos 50. El panel avisa en estos puntos. Un resultado laminar para flujo turbulento subestima la caída de presión y calcula mal el arrastre. El modelo turbulento experimental (arriba) cubre el flujo turbulento de forma cualitativa; sus cifras aún no son fiables.
- **Método:** el método de Boltzmann de red (D3Q19, colisión de dos tiempos de relajación) ejecutado hasta un estado estacionario. Dentro es ligeramente compresible; PartCraft mantiene los cambios de densidad en unos pocos por ciento. Si el flujo es demasiado rápido para las celdas, se niega a iniciarse e indica cuánto deben reducirse las celdas.
- **Contrastado con:** flujo de Hagen–Poiseuille en una tubería a través de una pieza (gradiente de presión dentro del 1 % con 20 celdas de ancho), la cavidad con tapa móvil de Ghia et al. (dentro del 0.75 % de la velocidad de la tapa) y el caso de prueba del cilindro de Schäfer–Turek (arrastre dentro del 1 % con 10 celdas por diámetro).
- No se modela: transferencia de calor, turbulencia con precisión de diseño (el modelo turbulento es experimental), superficies libres, cavitación, gravedad, piezas móviles, fluidos no newtonianos, paredes rugosas. Versión de laboratorio: compruebe los resultados importantes por otro medio.
