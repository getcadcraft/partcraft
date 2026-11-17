---
title: Campos magnéticos en 2D (tutorial)
summary: Calcule el campo magnético de un electroimán o de un imán permanente con la biblioteca de análisis: ejecute los ejemplos, lea la densidad de flujo, el campo en el entrehierro, la inductancia y la atracción, cambie el diseño y construya su propio modelo de bobinas, imanes y hierro.
keywords: magnético, magnetostática, campo magnético, densidad de flujo, tesla, electroimán, solenoide, bobina, amperios-vuelta, núcleo de hierro, entrehierro, permeabilidad, inductancia, fuerza magnética, reluctancia, circuito magnético, potencial vectorial, electromagnetismo, elementos finitos, fem, motor, actuador, transformador, magnetostatic2d, imán permanente, neodimio, ndfeb, ferrita, remanencia, punto de trabajo, retroceso, fuga, imán de sujeción
from: 215f6601
---

La biblioteca de análisis de PartCraft puede calcular el campo magnético de bobinas y hierro en 2D: una sección transversal de algo largo y constante a lo largo de su longitud, como un electroimán, el núcleo de un transformador, una barra conductora o la sección de un motor. Este tutorial ejecuta el ejemplo de electroimán de la biblioteca, lee lo que dice, lo modifica, muestra cómo modelar su propia forma y después añade un imán permanente.

Usa el espacio de trabajo Script y la [biblioteca de análisis](topic:craftscript-library). No necesita conocer el lenguaje CraftScript para seguirlo; el ejemplo explica qué hace cada línea.

## Qué se modela

Un núcleo de hierro en forma de C, de 100 × 80 mm por fuera y 20 mm de grosor, con un entrehierro de 2 mm en su pierna derecha. Una bobina de 100 vueltas con 10 A (1000 amperios-vuelta) está arrollada en su pierna izquierda. Todo es largo en la dirección que sale de la pantalla, así que los resultados son **por metro de profundidad**: multiplíquelos por la profundidad real para un imán real.

La función `magnetostatic2d` de la biblioteca resuelve el potencial vectorial magnético en una malla de cuadrados de 1 mm dentro de una caja de aire alrededor del imán, y después calcula la densidad de flujo **B** (en teslas) a partir de él.

## Ejecute el ejemplo

1. Elija **Script** en el cuadro **Espacio de trabajo**, a la izquierda de la barra de herramientas.
2. Abra la pestaña **Biblioteca** del panel de scripts y después **Ejemplos** › **Electroimán: campo, entrehierro, inductancia**.
3. Haga clic en {{ui:Abrir (solo lectura)}} y pulse {{key:F5}}.

En uno o dos segundos el lienzo muestra la densidad de flujo, y la consola imprime:

```
B en el entrehierro 0.5427 T; circuito magnético 0.5516 T (-1.6 %: efecto de borde y fuga)
inductancia 0.1539 H por metro de profundidad; el circuito da 0.1103 H/m, sin contar el flujo que se escapa junto al entrehierro
energía almacenada 7.694 J/m; |B| alcanza 1.97 T en las esquinas interiores de la ventana (el acero real se saturaría allí)
atracción a través del entrehierro unos 2343 N por metro de profundidad (117.2 N para 50 mm de profundidad)
```

El gráfico bajo el lienzo es la densidad de flujo vertical B_y a lo largo de la línea central del núcleo, de izquierda a derecha: unos −0.55 T en la pierna izquierda (el flujo baja por ella), casi nada en la ventana, y +0.55 T en la pierna derecha y a través del entrehierro (el flujo vuelve hacia arriba). El mismo flujo pasa por el hierro y por el entrehierro, así que las dos piernas y el entrehierro muestran un valor casi igual.

## Lea los resultados

- **El campo en el entrehierro** es 0.543 T. Un cálculo a mano trata el núcleo como un único circuito magnético, B = μ0 N I / (g + l / μr), donde g es el entrehierro, l la longitud del camino por el hierro y μr la permeabilidad relativa del hierro; da 0.552 T. El campo es algo menor que el cálculo a mano porque el flujo se abomba alrededor del entrehierro (efecto de borde) y parte del flujo toma un atajo a través de la ventana (fuga). Con un entrehierro menor o una malla más fina, los dos valores se acercan.
- **La inductancia** de la bobina de 100 vueltas es 0.154 H por metro de profundidad, a partir de la energía almacenada en el campo. La fórmula del circuito da menos (0.110 H/m) porque cuenta solo el flujo que atraviesa el entrehierro, no el flujo que se escapa junto a él.
- **La atracción** que cierra el entrehierro es B² w / (2 μ0) para una cara de entrehierro de anchura w: unos 2300 N por metro, o 117 N para un imán de 50 mm de profundidad.
- **El pico** de 1.97 T está en las esquinas interiores de la ventana, donde el flujo gira bruscamente. El modelo trata el hierro como lineal; el acero eléctrico real se satura hacia 1.5 a 2 T, así que trate los valores por encima de eso como una advertencia, no como una respuesta.

:::note
Las pruebas propias de la biblioteca ejecutan este ejemplo y comprueban el campo en el entrehierro frente a la fórmula del circuito magnético en cada cambio de PartCraft. El método, sus referencias y sus demás comprobaciones (un solenoide largo, un solenoide con núcleo de hierro) están en el encabezado de `magnetostatic2d`: haga clic en él en la biblioteca.
:::

## Cambie el diseño

1. Haga clic en {{ui:Crear una copia}} encima del script de solo lectura. La copia se guarda con su pieza.
2. Cambie un valor cerca del principio y pulse {{key:F5}} de nuevo. Pruebe:
   - `g = 0.001;` — la mitad del entrehierro: el campo en el entrehierro casi se duplica, y también la atracción (va con B²).
   - `mur = 200;` — un núcleo peor: más amperios-vuelta se gastan en el hierro.
   - `N = 200;` — el doble de vueltas: el doble de campo, cuatro veces la inductancia.
   - `h = 0.0005;` — una malla más fina: resultados más cercanos, unas cuatro veces más de tiempo.

Cada ejecución sustituye el lienzo. Las variables que creó el script (como `Bgap`, `L`, `F`) permanecen en la lista **Variables** para sus propios cálculos.

## Modele su propia forma

El ejemplo construye todo a partir de tres listas, con un valor por cada cuadrado de la malla, que puede hacer para cualquier forma dibujada con líneas rectas siguiendo la malla:

- **Dónde está el hierro:** `iron` es verdadero en los cuadrados dentro del núcleo. El ejemplo lo construye con rectángulos: `frame & ~window & ~gap` significa «en el marco, no en la ventana, no en el entrehierro».
- **La permeabilidad:** `1 + (mur - 1) * iron` vale 1 en el aire y `mur` en el hierro. Dé a varios materiales sus propios valores del mismo modo.
- **La corriente:** `J` es la densidad de corriente en amperios por metro cuadrado, positiva hacia fuera de la pantalla y negativa hacia dentro. Una bobina tiene dos lados con signos opuestos; el ejemplo calcula `J0` para que un lado lleve N I.

Después, `r = magnetostatic2d(m, permeability, J)` lo resuelve. `r.B` es la densidad de flujo en cada cuadrado (dos columnas, x e y), `r.Bmag` su tamaño y `r.energy` la energía almacenada por metro. `plot(x, y)` dibuja una línea.

La biblioteca trabaja en metros, y la vista en milímetros, así que un campo mostrado tal cual se dibujaría mil veces más pequeño. El ejemplo lo muestra sobre una copia de la malla en milímetros (`mm = quadGrid(…)`, y después `show(field(mm, …))`): copie esas dos líneas.

Por defecto, el borde de la caja confina el campo: no sale flujo de ella. Haga la caja al menos dos o tres veces mayor que el imán, para que esto no comprima el campo. Para un imán simétrico puede modelar solo la mitad: el encabezado de `magnetostatic2d` indica qué condición de borde usar en una línea de simetría.

## Imanes permanentes

El segundo ejemplo, **Ejemplos** › **Imán permanente en un núcleo de hierro: punto de trabajo, fuga, atracción**, es el mismo núcleo sin la bobina y con una sección de 10 mm de la pierna izquierda sustituida por un imán, imantado hacia arriba. Ejecútelo con {{key:F5}}. Imprime:

```
el imán trabaja con B = 1.036 T, H = -124 kA/m (sobre su recta de retroceso B = Br + μ0 μr H)
B en el entrehierro 0.6778 T; el circuito magnético sin fuga 0.9692 T (-30.1 %)
factor de fuga 1.53: del flujo que sale del imán, el 65 % cruza el entrehierro entre las caras polares
atracción a través del entrehierro unos 3656 N por metro de profundidad (182.8 N para 50 mm de profundidad)
```

- **El punto de trabajo.** Un imán se describe por su **remanencia** Br (el campo que conserva cuando está cortocircuitado por hierro: unos 1.2 T para un imán de NdFeB sinterizado, 0.4 T para ferrita) y su permeabilidad de retroceso (unos 1.05 y 1.1). Al abrir un entrehierro, el imán baja por su recta de retroceso: aquí hasta 1.04 T, con H apuntando contra B dentro de él.
- **Fuga.** El cálculo a mano sin fuga da 0.97 T en el entrehierro; el modelo da 0.68 T. Un imán impulsa su flujo con un empuje fuerte sobre una longitud corta, así que gran parte vuelve directamente a través de la ventana en lugar de pasar por el entrehierro. El factor de fuga indica cuánto: aquí 1.53. Ponga `g = 0;` para un cierre de hierro sin entrehierro: el imán entonces trabaja a menos de medio por ciento del cálculo a mano.
- **Imanes en su propio modelo.** Dé a `magnetostatic2d` los imanes como `struct('Br', Br)`, donde `Br` tiene una fila por cada cuadrado de la malla con la remanencia según x e y en teslas (cero fuera de los imanes), y dé a los cuadrados de imán su permeabilidad de retroceso en la lista de permeabilidades:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T hacia arriba en los cuadrados donde mag es verdadero
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para un imán imantado con un ángulo, ponga `Br·cos(angle)` y `Br·sin(angle)` en las dos columnas; para un anillo imantado hacia fuera, calcule la dirección de cada cuadrado a partir de su posición. `r.H` da la intensidad de campo H en cada cuadrado.

El modelo mantiene un imán sobre su recta de retroceso, por fuerte que sea el impulso que reciba. Un imán real impulsado más allá de su codo (por un entrehierro grande, una bobina fuerte o el calor) pierde parte de su fuerza de forma permanente; compruebe el punto de trabajo con la curva del fabricante para el grado y la temperatura.

Las pruebas de la biblioteca comparan los imanes con dos resultados calculados a mano: un imán redondo en aire libre (dentro de él, B = Br / (1 + μr)) y un imán cerrado por un cierre de hierro (el circuito magnético), ambos dentro del 1 %.

## Lo que aún no hace

- **Saturación.** El hierro es lineal: el doble de corriente, el doble de campo, sin límite.
- **Desmagnetización.** Los imanes permanecen sobre su recta de retroceso (véase arriba).
- **Corrientes de Foucault** y **pérdidas** (pérdidas en el hierro, pérdidas en el cobre).
- **Piezas móviles y par.** No hay rotor girando en un estátor, ni par en función del ángulo.
- **Formas redondas.** La malla está hecha de cuadrados iguales, así que los contornos curvos salen escalonados.
- **3D.** Todo es una sección transversal de algo largo.

El diseño de motores (un rotor giratorio, par y pérdidas en 2D) se estudia para una versión posterior. Véase [Pendiente de implementar](topic:not-built-yet).
