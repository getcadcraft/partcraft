---
title: Campos: formas como distancias
summary: Qué es un campo (una forma guardada como la distancia a su superficie), cómo construir uno con primitivas, booleanas, celosías y superficies mínimas en un script, cómo se convierte en un cuerpo y por qué el mismo script siempre da los mismos bytes.
keywords: campo, distancia con signo, sdf, vóxel, giroide, tpms, celosía, booleana, desplazamiento, vaciado, mezcla, contorneado dual, determinista, estanco, manifold, bloque
from: faab7480
---

Un **campo** describe una forma mediante la distancia desde cualquier punto a su superficie: negativa dentro, cero en la superficie y positiva fuera. Una esfera de radio 5 es "la distancia al centro menos 5". Combinar formas es aritmética de distancias: la unión es la menor de dos, la intersección la mayor, y restar una forma de otra es la mayor entre la primera y el negativo de la segunda. Hacer crecer una forma 1 mm resta 1 a la distancia; una pared hueca es la distancia, plegada sobre sí misma.

Por eso los campos sirven bien para celosías, canales y paredes graduales: la superficie de un giroide es "la suma de senos es cero", y una pared que pasa de 1 a 3 mm a lo largo de la pieza es un número que cambia a través de la pieza.

## Del campo al cuerpo

`to_body(field, h)` muestrea el campo en una rejilla de puntos separados `h` milímetros, conservando solo los puntos cercanos a la superficie (una rejilla dispersa de bloques de 8 × 8 × 8), y construye la superficie por **contorneado dual**: un vértice por celda de superficie, colocado donde se cruzan los planos de la superficie, de modo que una arista viva sigue siendo viva dentro de un vóxel. La superficie es cerrada y cada arista la comparten exactamente dos triángulos; el informe lo indica. Un elemento más fino que unos tres vóxeles puede pellizcarse, y entonces el informe dice que el cuerpo no es un sólido cerrado en lugar de ocultarlo.

El tamaño del vóxel es la precisión: el volumen de una esfera de 25 vóxeles de diámetro está dentro de unas pocas centésimas de por ciento, y una pared solo es tan exacta como sus vóxeles. Cuanto más gruesa sea la rejilla, más rápido irá.

## Siempre los mismos bytes

Un campo no tiene reloj ni número aleatorio. El seno y el coseno de un giroide, y toda exponencial, logaritmo y potencia de la biblioteca, se calculan con aritmética elemental para que Node, Chrome, Firefox y Safari den los mismos bits; la rejilla se recorre en un orden fijo, así que el mismo script con las mismas entradas da mallas e informes idénticos byte a byte, en cualquier ordenador y con cualquier número de hilos de trabajo. Esto está probado, incluido un navegador frente a Node.

## Qué sigue

[Escriba un generador](topic:write-a-generator) construye una pieza con campos; [La biblioteca de ingeniería](topic:engineering-library) la dimensiona.
