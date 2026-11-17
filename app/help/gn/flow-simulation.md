---
title: Simulación de flujo de fluido (Estudio Flow)
summary: Flujo de fluido por los canales dentro de una pieza o alrededor de ella en una caja: entradas, salidas, aire, agua o tu propio fluido; después velocidad y presión en un plano de corte móvil, líneas de corriente, presión en la superficie, caída de presión, balance de masa, arrastre y sustentación, y lo que el método laminar puede y no puede indicarte.
keywords: flujo, CFD, fluido, dinámica de fluidos computacional, simulación de flujo, aire, agua, viscosidad, densidad, número de Reynolds, laminar, turbulento, caída de presión, pérdida de carga, entrada, salida, tapa, tapón, velocidad, caudal, caudal volumétrico, litros por minuto, presión estática, líneas de corriente, plano de corte, plano de sección, arrastre, sustentación, coeficiente de arrastre, coeficiente de sustentación, área frontal, flujo externo, flujo interno, caño, canal, colector, tobera, Boltzmann de red, residuo, convergencia
from: 7dc75f29
---

Un estudio **Flow** ohechauka mba'éichapa oguata fluido pe canal omoĩva pieza ryepýpe (**interno**) térã pieza hetisépe (**externo**). Por defecto ojapo **laminar, incompresible, isotérmico y Newtoniano**: flujo suave de fluido cuya densidad ha viscosidad oñemopyendýva, ndaipóri calor, turbulencia ni gravedad. Oĩ avei un modelo turbulento **experimental**, solo para patrones cualitativos (ver abajo). Funciona sobre las caras nombradas que el [kernel de malla](topic:solid-kernels) da a la pieza.

Elegí **Simulación** en la caja **Espacio de trabajo**, apretá **Nuevo estudio** si no hay ninguno, y poné **Tipo** en **Flow (CFD)**. **Modelo de flujo** es **Laminar** (el predeterminado) o **Turbulento (Spalart–Allmaras, experimental)**: ver **Flujo turbulento (experimental)** más abajo. Los ajustes estructurales del estudio se mantienen, así que podés volver atrás. Los ajustes de flujo se guardan en el archivo de la pieza y cada cambio puede deshacerse.

## Elegí el fluido y las celdas

- **Fluido**: aire o agua a 20 °C, o **Personalizado** con tu propia densidad (kg/m³) y viscosidad dinámica (Pa·s). El aire usa la ley de los gases ideales y la ley de Sutherland (1,204 kg/m³, 1,813 × 10⁻⁵ Pa·s); el agua usa los valores IAPWS (998,21 kg/m³, 1,0016 mPa·s).
- **Tamaño de celda**: el espacio del fluido se llena con cubos iguales. Dejalo vacío para un tamaño automático; el panel muestra la grilla. Cada abertura y canal debería tener **al menos 8 a 10 celdas de ancho** para números útiles; las celdas más chicas son más precisas y más lentas (el doble de fina equivale a unas 16 veces el trabajo).
- **Paredes**: **Interpolado** sigue las paredes curvas entre celdas (el predeterminado); **Rebote** trata las paredes como escalera de cubos.

## Flujo dentro de la pieza

El espacio del fluido debe estar cerrado. Agregá una **Entrada** y una **Salida** en el panel, y después hacé clic en sus caras dentro de la vista:

1. **La cara plana alrededor de una abertura** — el borde en el extremo de un caño, una cara de puerto. PartCraft cierra allí el agujero de la abertura con una tapa. Todos los agujeros de esa cara pertenecen a esa abertura, así que cuando una entrada y una salida se abren en la misma cara, modelá en cambio una tapa delgada sobre una de ellas.
2. **La cara interna de una tapa** — como en otras herramientas CAD: modelá una placa delgada (una extruir) sobre la abertura y elegí su cara que toca el fluido.

Para una entrada poné una **velocidad** (m/s, uniforme en toda la abertura, hacia la pieza) o un **caudal volumétrico** (L/min). Para una salida poné la **presión estática** (Pa, manométrica). Si una abertura queda abierta, o una pared es más delgada que una celda, el interior se une con el exterior y la resolución se detiene con "No closed fluid space" (Ningún espacio de fluido cerrado).

## Flujo alrededor de la pieza

Poné **Flujo** en **Externo**, la **Velocidad**, la dirección hacia la que fluye, y cuánto llega la caja aguas arriba, aguas abajo y hacia los lados (vacío: 1, 3 y 1 veces el tamaño mayor de la pieza). La cara de la caja por donde entra el flujo es una entrada, la cara por donde sale es una salida a 0 Pa, y las caras a lo largo del flujo son deslizantes. Una caja demasiado chica aprieta el flujo alrededor de la pieza y aumenta el arrastre. **Área de referencia** es el área que usan los coeficientes de arrastre y sustentación (vacío: el área frontal de la pieza vista a lo largo del flujo); la sustentación se mide a lo largo de +Y salvo que elijas otra dirección.

## Resolver y leer los resultados

Apretá **Resolver**. La resolución corre en segundo plano con el número de pasos, el residuo y un gráfico del residuo; **Detener** la termina. Se detiene cuando el residuo (cuánto cambia todavía el campo de velocidad por paso) está por debajo del objetivo y la caída de presión o el arrastre se estabilizaron. Si llega primero al límite de pasos, el panel dice **No convergió** en rojo: los números son el último estado, no una respuesta estable.

- **Plano de corte**: velocidad o presión estática sobre un plano a través del modelo; elegí su normal (X, Y o Z) y arrastrá el control deslizante para moverlo. Pasá el puntero por encima para leer los valores.
- **Líneas de corriente**: desde las entradas (interno) o desde un peine a lo ancho del extremo de entrada de la caja, dentro del plano de corte (externo).
- **Pieza**: sólida, transparente (para ver el plano dentro), presión en la superficie, u oculta.
- **Tabla**: número de Reynolds, caída de presión (presión estática media en las entradas menos la de las salidas), el caudal y la presión media de cada abertura, la fuerza sobre la pieza, arrastre y sustentación con sus coeficientes y área de referencia (externo), el balance de masa (entrada contra salida), la malla y el resolutor.

## Flujo turbulento (experimental)

**Modelo de flujo › Turbulento (Spalart–Allmaras, experimental)** resuelve el flujo turbulento promediado en el tiempo (RANS estacionario): el modelo de Spalart–Allmaras da una viscosidad de remolino en cada celda, y las celdas junto a las paredes usan la ley de pared de Spalding en lugar de resolver la capa delgada allí. Es totalmente turbulento en todas partes (sin regiones laminares, sin transición).

**No pasó sus controles de precisión.** El panel, los resultados y la tabla lo dicen en cada estudio turbulento, y la advertencia no puede cerrarse. Usalo para **patrones de flujo cualitativos** — dónde el flujo se separa, recircula o acelera — **no para números de diseño**.

| Control | Referencia | Resultado |
|---|---|---|
| Fricción en canal plano, primera celda en y⁺ 49 / 98 | Correlación de Dean | +3,3 % / +4,7 % |
| Canal con pared resuelta (y⁺ ≈ 3), Re_τ 180: velocidad media | DNS de Moser, Kim y Mansour | −1 % |
| Canal plano, y⁺ 7–15 o 190–380 | Correlación de Dean | +9 a +22 % |
| Fricción en tubo a través de las celdas cúbicas, totalmente desarrollado, 10–30 celdas de ancho | Colebrook | 30 a 34 % demasiado alto |
| Reattachment tras un escalón hacia atrás, 6–14 celdas por altura de escalón | Driver y Seegmiller, 6,26 alturas de escalón | 21 a 39 % demasiado corto |

Los resultados mejoran solo lentamente con celdas más finas. Después de resolver, la tabla muestra la **y⁺ de la primera celda** (mín., media y máx. sobre las celdas de pared) y advierte fuera del rango verificado de 1 a 400; apuntá a unos 30 a 300. **Tiempo de cálculo:** las celdas automáticas están dimensionadas para unos pocos minutos en un núcleo de una laptop como máximo (el panel muestra el peor caso para la grilla y el límite de pasos; un tubo chico se estabiliza en menos de 20 segundos). Reducir a la mitad el tamaño de celda cuesta unas 16 veces más de tiempo. Las fuerzas sobre la pieza salen de un balance de momento sobre las aberturas o la caja.

**Trabajo hecho hasta ahora:** las celdas de pared ahora igualan su propio esfuerzo cortante a la ley de pared, lo que bajó los errores del tubo y del escalón a las cifras de arriba sin cambiar los resultados del canal plano. Eso no alcanzó para números de diseño. El próximo paso es celdas más finas cerca de las paredes.

## Qué puede y qué no puede indicarte

- **El modelo laminar** es solo laminar. En los tubos el flujo se vuelve turbulento por encima de un número de Reynolds de unos 2.000 a 4.000; detrás de cuerpos romos la estela empieza a desprender vórtices por encima de unos 50. El panel avisa en estos puntos. Un resultado laminar para flujo turbulento subestima la caída de presión y calcula mal el arrastre. El modelo turbulento experimental (arriba) cubre el flujo turbulento de forma cualitativa; sus números todavía no son confiables.
- **Método:** el método de Boltzmann en red (D3Q19, colisión de dos tiempos de relajación) llevado a un estado estacionario. Dentro es levemente compresible; PartCraft mantiene los cambios de densidad en unos pocos por ciento. Si el flujo es demasiado rápido para las celdas, no arranca y dice cuánto más chicas deben ser las celdas.
- **Verificado contra:** flujo de Hagen–Poiseuille en un tubo a través de una pieza (gradiente de presión dentro del 1 % con 20 celdas de ancho), la cavidad con tapa de Ghia et al. (dentro del 0,75 % de la velocidad de la tapa) y el benchmark del cilindro de Schäfer–Turek (arrastre dentro del 1 % con 10 celdas por diámetro).
- No modelado: transferencia de calor, turbulencia con precisión de diseño (el modelo turbulento es experimental), superficies libres, cavitación, gravedad, piezas en movimiento, fluidos no newtonianos, paredes rugosas. Compilación de laboratorio: verificá los resultados importantes de otra manera.
