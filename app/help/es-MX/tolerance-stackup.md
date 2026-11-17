---
title: Cadenas de tolerancias
summary: Elija una cadena de caras a través de las piezas de un ensamblaje y vea cuánto puede variar la separación al final, en el peor caso y en RSS, con las dimensiones que más importan ordenadas primero.
keywords: cadena de tolerancias, stackup, análisis de tolerancias, cadena de tolerancias, cadena de cotas, lazo, separación, holgura, peor caso, rss, suma cuadrática de raíces, tolerancia estadística, contribuyentes, sensibilidad, gd&t, tolerancia general, iso 2768
from: cbdb3159
---

Una **cadena de tolerancias** suma las dimensiones a lo largo de una cadena a través de varias piezas para ver cuánto puede variar un resultado, normalmente una separación, cuando cada pieza se fabrica en cualquier punto dentro de sus tolerancias.

## Elija la cadena

1. Abra un ensamblaje y elija {{ui:Cadena de tolerancias}} en el grupo Ensamblaje. Se abre una tarjeta sobre la vista.
2. Elija a lo largo de qué se mide la cadena: X, Y o Z del ensamblaje, o {{ui:La normal de la primera cara}}.
3. Presione {{ui:Elegir la cadena}} y haga clic en las caras que atraviesa la cadena, **en orden**: empiece en un lado de la separación, pase por las piezas y termine en el otro lado de la separación.
4. Presione {{ui:Listo}} o {{key:Enter}}. Backspace quita el último clic; Esc cancela.

Dos clics en la misma pieza definen la dimensión de esa pieza (su distancia a lo largo de la cadena). Un clic en otra pieza crea una **interfaz** entre ellas, donde se tocan las piezas; no tiene tolerancia a menos que escriba una. Los eslabones suman o restan según el sentido de la cadena, y cierran el lazo: la separación nominal es lo que muestra el modelo.

También puede {{ui:Agregar un eslabón}} a mano y escribir su nominal, su tolerancia y si suma (+) o resta (−).

## Dé a cada eslabón su tolerancia

Cada eslabón tiene una desviación **superior** y una **inferior** (por ejemplo +0.1 y −0.05). **Tolerancia desde** las llena a partir de la pieza:

- **Tolerancia general**: el campo Tolerancia del cuadro de rótulo de la pieza (vea [Dibujo a PDF](topic:drawing-pdf)), cuando dice ±0.1, +0.2/-0.1 o ISO 2768-f, -m, -c o -v (tolerancias lineales ISO 2768-1, según el tamaño del eslabón). La tolerancia general de una pieza se usa de inmediato al elegir la cadena.
- **GD&T**: cualquier marco de control de elemento en el dibujo de la pieza. Las zonas de posición, perfil y descentramiento dan ± la mitad de la tolerancia. Una tolerancia de orientación o de forma normalmente queda dentro de la tolerancia de tamaño ya existente: agréguela solo donde la cadena toca la superficie controlada. Con Ⓜ o Ⓛ la zona se toma en su tamaño indicado; la tolerancia de bonificación no se cuenta.
- **Escrita**: cualquier número que escriba.

## Lea los resultados

- **Separación, nominal** y, cuando las tolerancias son desiguales, **Separación, media**: +0.2/−0 y +0/−0.1 desplazan el centro del rango.
- **Peor caso**: cada tolerancia en su límite al mismo tiempo. La separación nunca puede quedar fuera de este rango.
- **RSS** (suma cuadrática de raíces): cada tolerancia se toma como tres desviaciones estándar de una dispersión normal, y se suma como la raíz cuadrada de la suma de sus cuadrados. La mayoría de los ensamblajes quedan bien dentro del peor caso; esta es la estimación usual para piezas fabricadas en serie.
- Dé **Separación al menos** y **Separación a lo más** para ver si el peor caso siempre queda dentro, y cuántos ensamblajes por cada millón espera RSS fuera de rango.
- La columna **#** ordena los eslabones por su **parte** del RSS: ajuste primero los primeros para lograr la mayor diferencia.

{{ui:Guardar CSV}} escribe los eslabones, sus partes y los resultados. Las cadenas se guardan en el archivo del ensamblaje, y cada cambio es un solo paso para {{key:Mod+Z}}.

:::note
Una cadena de tolerancias tiene una sola dirección. No sigue ángulos ni giros a lo largo de la cadena, y no lee tolerancias de tamaño de los croquis: indíquelas como tolerancias escritas o mediante el cuadro de rótulo.
:::
