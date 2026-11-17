---
title: Cadenas de tolerancias
summary: Elija una cadena de caras a través de las piezas de un ensamblaje y vea cuánto puede variar la holgura en su extremo, en el caso más desfavorable y en RSS, con las dimensiones que más influyen ordenadas primero.
keywords: cadena de tolerancias, análisis de tolerancias, cadena de cotas, lazo, holgura, juego, caso más desfavorable, rss, raíz de la suma de cuadrados, tolerancias estadísticas, contribuyentes, sensibilidad, gd&t, tolerancia general, iso 2768
from: cbdb3159
---

Una **cadena de tolerancias** suma las dimensiones a lo largo de una cadena a través de varias piezas para ver cuánto puede variar un resultado (normalmente una holgura) cuando cada pieza se fabrica en cualquier punto dentro de sus tolerancias.

## Elegir la cadena

1. Abra un ensamblaje y elija {{ui:Cadena de tolerancias}} en el grupo Ensamblaje. Se abre una tarjeta sobre la vista.
2. Elija a lo largo de qué se mide la cadena: X, Y o Z del ensamblaje, o {{ui:La normal de la primera cara}}.
3. Pulse {{ui:Elegir la cadena}} y haga clic en las caras por las que pasa la cadena, **en orden**: empiece en un lado de la holgura, atraviese las piezas y termine en el otro lado de la holgura.
4. Pulse {{ui:Listo}} o {{key:Enter}}. {{key:Backspace}} retira el último clic; {{key:Esc}} cancela.

Dos clics en la misma pieza forman la dimensión de esa pieza (su distancia a lo largo de la cadena). Un clic en otra pieza crea una **interfaz** entre ellas, donde las piezas se tocan; no tiene tolerancia salvo que escriba una. Los eslabones suman o restan según el sentido de la cadena, y cierran el lazo: la holgura nominal es lo que muestra el modelo.

También puede {{ui:Agregar un eslabón}} a mano e introducir su nominal, su tolerancia y si suma (+) o resta (−).

## Dar a cada eslabón su tolerancia

Cada eslabón tiene una desviación **superior** y una **inferior** (por ejemplo +0.1 y −0.05). **Tolerancia desde** las rellena a partir de la pieza:

- **Tolerancia general**: el campo Tolerancia del cajetín de la pieza (vea [Dibujo a PDF](topic:drawing-pdf)), cuando indica ±0.1, +0.2/-0.1 o ISO 2768-f, -m, -c o -v (tolerancias lineales ISO 2768-1, según el tamaño del eslabón). La tolerancia general de una pieza se usa de inmediato al elegir la cadena.
- **GD&T**: cualquier marco de control de forma en el dibujo de la pieza. Las zonas de posición, perfil y batido dan ± la mitad de la tolerancia. Una tolerancia de orientación o de forma suele estar dentro de la tolerancia de tamaño ya existente: añádala solo donde la cadena toca la superficie controlada. Con Ⓜ o Ⓛ la zona se toma en su tamaño indicado; la tolerancia de bonificación no se cuenta.
- **Escrita**: cualquier número que escriba.

## Leer los resultados

- **Holgura, nominal** y, cuando las tolerancias son desiguales, **Holgura, media**: +0.2/−0 y +0/−0.1 desplazan el centro del rango.
- **Caso más desfavorable**: cada tolerancia en su límite a la vez. La holgura nunca puede salir de este rango.
- **RSS** (raíz de la suma de cuadrados): cada tolerancia se toma como tres desviaciones típicas de una dispersión normal, y se suma como la raíz cuadrada de la suma de sus cuadrados. La mayoría de los ensamblajes quedan muy dentro del caso más desfavorable; esta es la estimación habitual para piezas fabricadas en serie.
- Indique **Holgura al menos** y **Holgura como máximo** para ver si el caso más desfavorable siempre se queda dentro, y cuántos ensamblajes de cada millón prevé el RSS fuera de rango.
- La columna **#** ordena los eslabones por su **peso** en el RSS: ajuste primero los primeros para lograr la mayor diferencia.

{{ui:Guardar CSV}} escribe los eslabones, sus pesos y los resultados. Las cadenas de tolerancias se guardan en el archivo del ensamblaje, y cada cambio es un paso para {{key:Mod+Z}}.

:::note
Una cadena de tolerancias tiene una sola dirección. No sigue ángulos ni giros a lo largo de la cadena, y no lee las tolerancias de tamaño de los bocetos: indíquelas como tolerancias escritas o mediante el cajetín.
:::
