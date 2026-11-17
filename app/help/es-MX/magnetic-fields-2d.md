---
title: Campos magnéticos en 2-D (tutorial)
summary: Calcule el campo magnético de un electroimán o de un imán permanente con la biblioteca de análisis: ejecute los ejemplos, lea la densidad de flujo, el campo en el entrehierro, la inductancia y la atracción, cambie el diseño y construya su propio modelo de bobinas, imanes y hierro.
keywords: magnético, magnetostática, campo magnético, densidad de flujo, tesla, electroimán, solenoide, bobina, amperio-vuelta, núcleo de hierro, entrehierro, permeabilidad, inductancia, fuerza magnética, reluctancia, circuito magnético, potencial vectorial, electromagnetismo, elementos finitos, fem, motor, actuador, transformador, magnetostatic2d, imán permanente, neodimio, ndfeb, ferrita, remanencia, punto de trabajo, retroceso, fuga, imán de sujeción
from: 215f6601
---

La biblioteca de análisis de PartCraft puede calcular el campo magnético de bobinas y hierro en 2-D: una sección transversal de algo largo y de igual sección a lo largo, como un electroimán, un núcleo de transformador, una barra colectora o la sección de un motor. Este tutorial ejecuta el ejemplo de electroimán de la biblioteca, lee lo que dice, lo cambia, muestra cómo modelar su propia forma y luego agrega un imán permanente.

Usa el espacio de trabajo Script y la [biblioteca de análisis](topic:craftscript-library). No necesita conocer el lenguaje CraftScript para seguirlo; el ejemplo dice qué hace cada línea.

## Qué se modela

Un núcleo de hierro en forma de C, de 100 × 80 mm por fuera y 20 mm de espesor, con un entrehierro de 2 mm en su pierna derecha. Una bobina de 100 vueltas con 10 A (1000 amperios-vuelta) está enrollada en su pierna izquierda. Todo es largo en la dirección que sale de la pantalla, así que las respuestas son **por metro de profundidad**: multiplique por la profundidad real para un imán real.

`magnetostatic2d`, de la biblioteca, resuelve el potencial vectorial magnético en una cuadrícula de cuadros de 1 mm dentro de una caja de aire alrededor del imán, y luego calcula la densidad de flujo **B** (en tesla) a partir de él.

## Ejecute el ejemplo

1. Elija **Script** en el cuadro **Espacio de trabajo**, a la izquierda de la barra de herramientas.
2. Abra la pestaña **Biblioteca** del panel de script y luego **Ejemplos** › **Electroimán: campo, entrehierro, inductancia**.
3. Haga clic en {{ui:Abrir (solo lectura)}} y luego pulse {{key:F5}}.

En uno o dos segundos el lienzo muestra la densidad de flujo, y la consola imprime:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

El gráfico bajo el lienzo es la densidad de flujo vertical B_y a lo largo de la línea media del núcleo, de izquierda a derecha: unos −0.55 T en la pierna izquierda (el flujo baja por ella), casi nada en la ventana, y +0.55 T en la pierna derecha y a través del entrehierro (el flujo regresa hacia arriba). El mismo flujo pasa por el hierro y por el entrehierro, así que las dos piernas y el entrehierro muestran casi el mismo valor.

## Lea los resultados

- **El campo en el entrehierro** es 0.543 T. Un cálculo a mano trata el núcleo como un solo circuito magnético, B = μ0 N I / (g + l / μr), donde g es el entrehierro, l la longitud del camino por el hierro y μr la permeabilidad relativa del hierro; da 0.552 T. El campo es un poco menor porque el flujo se abomba alrededor del entrehierro (efecto de borde) y parte del flujo toma un atajo a través de la ventana (fuga). Con un entrehierro menor o una cuadrícula más fina, las dos cifras se acercan.
- **La inductancia** de la bobina de 100 vueltas es 0.154 H por metro de profundidad, a partir de la energía almacenada en el campo. La fórmula del circuito da menos (0.110 H/m) porque cuenta solo el flujo que pasa por el entrehierro, no el que se escapa junto a él.
- **La atracción** que cierra el entrehierro es B² w / (2 μ0) para una cara de entrehierro de ancho w: unos 2300 N por metro, o 117 N para un imán de 50 mm de profundidad.
- **El pico** de 1.97 T está en las esquinas interiores de la ventana, donde el flujo gira bruscamente. El modelo trata el hierro como lineal; el acero eléctrico real se satura alrededor de 1.5 a 2 T, así que trate los valores superiores a eso como una advertencia, no como una respuesta.

:::note
Las pruebas de la biblioteca ejecutan este ejemplo y verifican el campo del entrehierro contra la fórmula del circuito magnético en cada cambio de PartCraft. El método, sus referencias y sus otras verificaciones (un solenoide largo, un solenoide con núcleo de hierro) están en el encabezado de `magnetostatic2d`: haga clic en él en la biblioteca.
:::

## Cambie el diseño

1. Haga clic en {{ui:Crear una copia}} sobre el script de solo lectura. La copia se guarda con su pieza.
2. Cambie un valor cerca del inicio y pulse {{key:F5}} de nuevo. Pruebe:
   - `g = 0.001;`: la mitad del entrehierro. El campo en el entrehierro casi se duplica, y también la atracción (va con B²).
   - `mur = 200;`: un núcleo peor. Más amperios-vuelta se gastan en el hierro.
   - `N = 200;`: el doble de vueltas. El doble de campo y cuatro veces la inductancia.
   - `h = 0.0005;`: una cuadrícula más fina. Respuestas más cercanas, unas cuatro veces el tiempo.

Cada ejecución reemplaza el lienzo. Las variables que crea el script (como `Bgap`, `L`, `F`) permanecen en la lista **Variables** para sus propios cálculos.

## Modele su propia forma

El ejemplo construye todo a partir de tres listas, con un valor por cada cuadro de la cuadrícula, que puede hacer para cualquier forma dibujada con líneas rectas sobre la cuadrícula:

- **Dónde está el hierro:** `iron` es verdadero para los cuadros dentro del núcleo. El ejemplo lo construye con rectángulos: `frame & ~window & ~gap` significa "en el marco, no en la ventana, no en el entrehierro".
- **La permeabilidad:** `1 + (mur - 1) * iron` es 1 en el aire y `mur` en el hierro. Dé a varios materiales sus propios valores de la misma forma.
- **La corriente:** `J` es la densidad de corriente en amperios por metro cuadrado, positiva hacia fuera de la pantalla y negativa hacia dentro. Una bobina tiene dos lados con signos opuestos; el ejemplo calcula `J0` para que un lado lleve N I.

Luego `r = magnetostatic2d(m, permeability, J)` lo resuelve. `r.B` es la densidad de flujo en cada cuadro (dos columnas, x e y), `r.Bmag` su tamaño y `r.energy` la energía almacenada por metro. `plot(x, y)` dibuja una línea.

La biblioteca trabaja en metros y la vista en milímetros, así que un campo mostrado tal cual se dibujaría mil veces más pequeño. El ejemplo lo muestra en una copia de la cuadrícula en milímetros (`mm = quadGrid(…)`, luego `show(field(mm, …))`): copie esas dos líneas.

Por defecto, el borde de la caja retiene el campo: no sale flujo. Haga la caja de al menos dos o tres veces el tamaño del imán para que esto no comprima el campo. Para un imán simétrico puede modelar la mitad: el encabezado de `magnetostatic2d` indica qué condición de borde usar en una línea de simetría.

## Imanes permanentes

El segundo ejemplo, **Ejemplos** › **Imán permanente en un núcleo de hierro: punto de trabajo, fuga, atracción**, es el mismo núcleo sin la bobina y con una rebanada de 10 mm de la pierna izquierda reemplazada por un imán, magnetizado hacia arriba. Ejecútelo con {{key:F5}}. Imprime:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **El punto de trabajo.** Un imán se describe por su **remanencia** Br (el campo que conserva cuando se cortocircuita con hierro: unos 1.2 T para un imán de NdFeB sinterizado, 0.4 T para ferrita) y por su permeabilidad de retroceso (unos 1.05 y 1.1). Al abrir un entrehierro, baja por su recta de retroceso: aquí hasta 1.04 T, con H apuntando contra B dentro de él.
- **Fuga.** El cálculo a mano sin fuga da 0.97 T en el entrehierro; el modelo da 0.68 T. Un imán impulsa su flujo con un empuje fuerte sobre una longitud corta, así que mucho regresa directamente a través de la ventana en lugar de pasar por el entrehierro. El factor de fuga indica cuánto: 1.53 aquí. Ponga `g = 0;` para un cierre de hierro: el imán entonces trabaja dentro de medio por ciento del cálculo a mano.
- **Imanes en su propio modelo.** Dé a `magnetostatic2d` los imanes como `struct('Br', Br)`, donde `Br` tiene una fila por cuadro de la cuadrícula con la remanencia en x e y en tesla (cero fuera de los imanes), y dé a los cuadros de imán su permeabilidad de retroceso en la lista de permeabilidades:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T hacia arriba en los cuadros donde mag es verdadero
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para un imán magnetizado en un ángulo, ponga `Br·cos(ángulo)` y `Br·sin(ángulo)` en las dos columnas; para un anillo magnetizado hacia afuera, calcule la dirección de cada cuadro según su posición. `r.H` da la intensidad de campo H en cada cuadro.

El modelo mantiene un imán sobre su recta de retroceso, sin importar cuánto se le exija. Un imán real llevado más allá de su codo (por un entrehierro grande, una bobina fuerte o el calor) pierde parte de su fuerza para siempre; verifique el punto de trabajo con la curva del fabricante para el grado y la temperatura.

La biblioteca verifica los imanes contra dos resultados a mano: un imán redondo en aire abierto (dentro, B = Br / (1 + μr)) y un imán cerrado por una culata de hierro (el circuito magnético), ambos dentro del 1 %.

## Lo que aún no hace

- **Saturación.** El hierro es lineal: el doble de corriente, el doble de campo, sin límite.
- **Desmagnetización.** Los imanes se mantienen sobre su recta de retroceso (vea arriba).
- **Corrientes parásitas** y **pérdidas** (pérdidas en el hierro, pérdidas en el cobre).
- **Partes móviles y par.** Ningún rotor girando dentro de un estátor, ningún par contra el ángulo.
- **Formas redondas.** La cuadrícula está hecha de cuadros iguales, así que los contornos curvos salen escalonados.
- **3-D.** Todo es una sección transversal de algo largo.

El diseño de motores (un rotor giratorio, par y pérdidas en 2-D) se estudia para una versión futura. Vea [Aún no implementado](topic:not-built-yet).
