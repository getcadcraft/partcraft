---
title: Simular el flujo de un fluido (estudio de flujo)
summary: Flujo por los canales dentro de una pieza o alrededor de ella en una caja: entradas, salidas, aire, agua o su propio fluido, y luego velocidad y presión en un plano de corte móvil, líneas de corriente, presión superficial, caída de presión, balance de masa, arrastre y sustentación, con lo que el método laminar puede y no puede indicarle.
keywords: flujo, CFD, fluido, dinámica de fluidos computacional, simulación de flujo, aire, agua, viscosidad, densidad, número de Reynolds, laminar, turbulento, caída de presión, pérdida de carga, entrada, salida, tapa, tapón, velocidad, caudal, caudal volumétrico, litros por minuto, presión estática, líneas de corriente, plano de corte, plano de sección, arrastre, sustentación, coeficiente de arrastre, coeficiente de sustentación, área frontal, flujo externo, flujo interno, tubería, canal, colector, boquilla, Boltzmann de red, residuo, convergencia
from: 7dc75f29
---

Un estudio de **Flujo** calcula cómo se mueve un fluido por los canales dentro de su pieza (**interno**) o alrededor de ella (**externo**). De forma predeterminada es **laminar, incompresible, isotérmico y newtoniano**: flujo suave de un fluido cuya densidad y viscosidad permanecen fijas, sin calor, sin turbulencia y sin gravedad. También hay un modelo turbulento **experimental**, solo para patrones cualitativos (véase más abajo). Trabaja sobre las caras con nombre que el núcleo de malla asigna a la pieza (véase [El núcleo de malla](topic:solid-kernels)).

Elija **Simulación** en el cuadro **Espacio de trabajo**, pulse **Nuevo estudio** si no hay ninguno y establezca **Tipo** en **Flujo (CFD)**. **Modelo de flujo** es **Laminar** (el predeterminado) o **Turbulento (Spalart–Allmaras, experimental)**: véase **Flujo turbulento (experimental)** más abajo. Los ajustes estructurales del estudio se conservan, así que puede volver atrás. Los ajustes de flujo se guardan en el archivo de la pieza y cada cambio se puede deshacer.

## Elija el fluido y las celdas

- **Fluido**: aire o agua a 20 °C, o **Personalizado** con su propia densidad (kg/m³) y viscosidad dinámica (Pa·s). El aire usa la ley de los gases ideales y la ley de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); el agua usa los valores IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Tamaño de celda**: el espacio del fluido se llena con cubos iguales. Déjelo vacío para un tamaño automático; el panel muestra la malla. Cada abertura y cada canal debe medir **al menos de 8 a 10 celdas de ancho** para obtener números útiles; las celdas más pequeñas son más precisas y más lentas (el doble de fino equivale a unas 16 veces el trabajo).
- **Paredes**: **Interpolado** sigue las paredes curvas entre celdas (el predeterminado); **Rebote** trata las paredes como la escalera de cubos.

## Flujo dentro de la pieza

El espacio del fluido debe estar cerrado. Agregue una **Entrada** y una **Salida** en el panel y luego haga clic en sus caras en la vista:

1. **La cara plana alrededor de una abertura**: el borde en el extremo de un tubo o una cara de conexión. PartCraft cierra ahí el orificio de la abertura con una tapa. Todos los orificios de esa cara pertenecen a esa abertura, así que cuando una entrada y una salida se abren en la misma cara, modele en su lugar una tapa delgada sobre una de ellas.
2. **La cara interior de una tapa**: como en otras herramientas CAD, modele una placa delgada (una extrusión) sobre la abertura y elija la cara que toca el fluido.

Para una entrada establezca una **velocidad** (m/s, uniforme en toda la abertura, hacia la pieza) o un **caudal volumétrico** (L/min). Para una salida establezca la **presión estática** (Pa, manométrica). Si una abertura queda abierta, o una pared es más delgada que una celda, el interior se une con el exterior y la resolución se detiene con el mensaje "No hay espacio de fluido cerrado".

## Flujo alrededor de la pieza

Establezca **Flujo** en **Externo**, la **Velocidad**, la dirección hacia la que fluye, y hasta dónde llega la caja aguas arriba, aguas abajo y a los lados (vacío: 1, 3 y 1 veces el tamaño mayor de la pieza). La cara de la caja por donde entra el flujo es una entrada, la cara por donde sale es una salida a 0 Pa, y las caras a lo largo del flujo son deslizantes. Una caja demasiado pequeña comprime el flujo alrededor de la pieza y aumenta el arrastre. **Área de referencia** es el área que usan los coeficientes de arrastre y sustentación (vacío: el área frontal de la pieza vista a lo largo del flujo); la sustentación se mide a lo largo de +Y, salvo que elija otra dirección.

## Resolver y leer los resultados

Pulse **Resolver**. La resolución se ejecuta en segundo plano con el número de pasos, el residuo y un gráfico del residuo; **Detener** la termina. Se detiene cuando el residuo (cuánto cambia el campo de velocidades por paso) está por debajo de la meta y la caída de presión o el arrastre se han estabilizado. Si alcanza primero el límite de pasos, el panel muestra **No convergido** en rojo: los números son el último estado, no una respuesta estable.

- **Plano de corte**: velocidad o presión estática en un plano a través del modelo; elija su normal (X, Y o Z) y arrastre el control deslizante para moverlo. Pase el cursor sobre él para leer los valores.
- **Líneas de corriente**: desde las entradas (interno) o desde un rastrillo a lo largo del extremo de entrada de la caja, en el plano de corte (externo).
- **Pieza**: sólida, transparente (para ver el plano por dentro), presión superficial u oculta.
- **Tabla**: número de Reynolds, caída de presión (presión estática media en las entradas menos la de las salidas), el flujo y la presión media de cada abertura, la fuerza sobre la pieza, el arrastre y la sustentación con sus coeficientes y área de referencia (externo), el balance de masa (entrada frente a salida), la malla y el solucionador.

## Flujo turbulento (experimental)

**Modelo de flujo › Turbulento (Spalart–Allmaras, experimental)** resuelve el flujo turbulento promediado en el tiempo (RANS estacionario): el modelo Spalart–Allmaras da una viscosidad de remolino en cada celda, y las celdas junto a las paredes usan la ley de pared de Spalding en lugar de resolver la capa delgada allí. Es totalmente turbulento en todas partes (no hay regiones laminares ni transición).

**No superó sus comprobaciones de precisión.** El panel, los resultados y la tabla lo indican en cada estudio turbulento, y la advertencia no se puede cerrar. Úselo para **patrones de flujo cualitativos** (donde el flujo se separa, recircula o se acelera), **no para cifras de diseño**.

| Comprobación | Referencia | Resultado |
|---|---|---|
| Fricción en canal plano, primera celda en y⁺ 49 / 98 | Correlación de Dean | +3.3 % / +4.7 % |
| Canal con pared resuelta (y⁺ ≈ 3), Re_τ 180: velocidad media | DNS de Moser, Kim y Mansour | −1 % |
| Canal plano, y⁺ 7–15 o 190–380 | Correlación de Dean | +9 a +22 % |
| Fricción en tubería a través de las celdas cúbicas, completamente desarrollada, de 10 a 30 celdas de ancho | Colebrook | 30 a 34 % demasiado alta |
| Reatamiento detrás de un escalón hacia atrás, de 6 a 14 celdas por altura de escalón | Driver y Seegmiller, 6.26 alturas de escalón | 21 a 39 % demasiado corta |

Los resultados mejoran solo lentamente con celdas más finas. Tras resolver, la tabla muestra la **y⁺ de la primera celda** (mínimo, media y máximo en las celdas de pared) y advierte fuera del rango comprobado de 1 a 400; apunte a unos 30 a 300. **Tiempo de ejecución:** las celdas automáticas se dimensionan para unos pocos minutos en un núcleo de portátil como mucho (el panel muestra el peor caso para la malla y el límite de pasos; una tubería pequeña se estabiliza en menos de 20 segundos). Reducir a la mitad el tamaño de celda cuesta unas 16 veces más tiempo. Las fuerzas sobre la pieza provienen de un balance de cantidad de movimiento sobre las aberturas o sobre la caja.

**Trabajo realizado hasta ahora:** las celdas de pared ahora igualan su esfuerzo cortante propio a la ley de pared, lo que redujo los errores de la tubería y del escalón a las cifras anteriores sin cambiar los resultados del canal plano. Eso no bastó para cifras de diseño. El siguiente paso es usar celdas más finas cerca de las paredes.

## Qué puede y qué no puede indicarle

- **El modelo laminar** es solo laminar. En tuberías el flujo se vuelve turbulento por encima de un número de Reynolds de unos 2,000 a 4,000; detrás de cuerpos romos la estela empieza a desprender vórtices por encima de unos 50. El panel advierte en esos puntos. Un resultado laminar para flujo turbulento subestima la caída de presión y calcula mal el arrastre. El modelo turbulento experimental (arriba) cubre el flujo turbulento de forma cualitativa; sus cifras aún no son fiables.
- **Método:** el método de Boltzmann en red (D3Q19, colisión de dos tiempos de relajación) ejecutado hasta un estado estacionario. Es ligeramente compresible en el interior; PartCraft mantiene los cambios de densidad en unos pocos por ciento. Si el flujo es demasiado rápido para las celdas, la resolución no arranca y le indica cuánto más pequeñas deben ser las celdas.
- **Verificado contra:** el flujo de Hagen–Poiseuille en una tubería a través de una pieza (gradiente de presión dentro del 1 % con 20 celdas de ancho), la cavidad con tapa móvil de Ghia et al. (dentro del 0.75 % de la velocidad de la tapa) y el caso de referencia del cilindro de Schäfer–Turek (arrastre dentro del 1 % con 10 celdas por diámetro).
- No se modelan: transferencia de calor, turbulencia con precisión de diseño (el modelo turbulento es experimental), superficies libres, cavitación, gravedad, piezas en movimiento, fluidos no newtonianos ni paredes rugosas. Versión de laboratorio: verifique los resultados importantes por otro medio.
