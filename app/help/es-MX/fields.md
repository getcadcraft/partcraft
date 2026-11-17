---
title: Campos: formas como distancias
summary: Qué es un campo (una forma guardada como la distancia a su superficie), cómo crear uno con primitivas, booleanas, retículas y superficies mínimas en un script, cómo se convierte en un cuerpo, y por qué el mismo script siempre da los mismos bytes.
keywords: campo, distancia con signo, sdf, vóxel, giroide, tpms, retícula, booleana, desfase, vaciado, mezcla, contorneo dual, determinista, hermético, variedad, bloque
from: faab7480
---

Un **campo** describe una forma mediante la distancia desde cualquier punto hasta su superficie: negativa dentro, cero sobre la superficie y positiva fuera. Una esfera de radio 5 es "la distancia al centro menos 5". Combinar formas es aritmética de distancias: la unión es la menor de las dos, la intersección es la mayor, y restar una forma de otra es la mayor entre la primera y menos la segunda. Hacer crecer una forma 1 mm resta 1 a la distancia; una pared hueca es la distancia, doblada sobre sí misma.

Por eso los campos sirven para retículas, canales y paredes graduadas: la superficie de un giroide es "la suma de senos es cero", y una pared que se engrosa de 1 a 3 mm a lo largo de la pieza es un número que cambia a través de la pieza.

## De campo a cuerpo

`to_body(field, h)` muestrea el campo en una malla de puntos separados `h` milímetros, conservando solo los puntos cerca de la superficie (una malla dispersa de bloques de 8 × 8 × 8), y construye la superficie por **contorneo dual**: un vértice por cada celda de la superficie, colocado donde se cruzan los planos de la superficie, de modo que una arista viva sigue siendo viva con una precisión de un vóxel. La superficie está cerrada y cada arista la comparten exactamente dos triángulos; el informe lo indica. Una característica más delgada que unos tres vóxeles puede estrangularse, y entonces el informe dice que el cuerpo no es un sólido cerrado, en lugar de ocultarlo.

El tamaño del vóxel es la precisión: el volumen de una esfera de 25 vóxeles de diámetro queda dentro de unas pocas centésimas por ciento, y una pared solo es tan exacta como sus vóxeles. Cuanto más gruesa la malla, más rápido va.

## Siempre los mismos bytes

Un campo no tiene reloj ni número aleatorio. El seno y el coseno de un giroide, y cada exponencial, logaritmo y potencia de la biblioteca, se calculan con aritmética básica para que Node, Chrome, Firefox y Safari den los mismos bits. La malla se recorre en un orden fijo, así que el mismo script con las mismas entradas da mallas e informes de datos idénticos byte a byte, en cualquier computadora y con cualquier número de hilos de trabajo. Está probado, incluido un navegador frente a Node.

## Dónde seguir

[Escriba un generador](topic:write-a-generator) construye una pieza con campos; [La biblioteca de ingeniería](topic:engineering-library) la dimensiona.
