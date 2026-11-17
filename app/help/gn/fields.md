---
title: Campos: formas como distancias
summary: Qué es un campo (una forma guardada como la distancia a su superficie), cómo construir uno con primitivas, booleanas, retículas y superficies mínimas en un script, cómo pasa a ser un cuerpo, y por qué el mismo script siempre da los mismos bytes.
keywords: campo, distancia con signo, sdf, vóxel, giroide, tpms, retícula, booleana, desfase, cáscara, mezcla, contorneo dual, determinista, hermético, variedad, ladrillo
from: faab7480
---

Un **campo** describe una forma por la distancia desde cualquier punto a su superficie: negativa adentro, cero sobre la superficie, positiva afuera. Una esfera de radio 5 es "la distancia al centro menos 5". Combinar formas es aritmética de distancias: la unión es la menor de dos, la intersección la mayor, y restar una forma de otra es la mayor entre la primera y menos la segunda. Agrandar una forma 1 mm resta 1 a la distancia; una pared hueca es la distancia, doblada.

Por eso los campos sirven para retículas, canales y paredes graduadas: la superficie de un giroide es "la suma de senos es cero", y una pared que se engrosa de 1 a 3 mm a lo largo de la pieza es un número que cambia en la pieza.

## De campo a cuerpo

`to_body(field, h)` muestrea el campo en una grilla de puntos separados `h` milímetros, quedándose sólo con los puntos cerca de la superficie (una grilla dispersa de ladrillos de 8 × 8 × 8), y construye la superficie por **contorneo dual**: un vértice por celda de superficie, puesto donde se cruzan los planos de la superficie, así que una arista afilada queda afilada dentro de un vóxel. La superficie es cerrada y cada arista la comparten exactamente dos triángulos; el informe lo dice. Un elemento más fino que unos tres vóxeles puede pellizcarse, y entonces el informe dice que el cuerpo no es un sólido cerrado en lugar de ocultarlo.

El tamaño del vóxel es la precisión: el volumen de una esfera de 25 vóxeles de diámetro está a unas pocas centésimas de por ciento; una pared es tan exacta como sus vóxeles. Cuanto más gruesa la grilla, más rápido va.

## Siempre los mismos bytes

Un campo no tiene reloj ni número aleatorio. El seno y el coseno de un giroide, y cada exponencial, logaritmo y potencia de la biblioteca, se calculan con aritmética simple para que Node, Chrome, Firefox y Safari den los mismos bits; la grilla se recorre en un orden fijo, así que el mismo script con las mismas entradas da mallas e informes de datos idénticos byte a byte, en cualquier computadora y con cualquier número de hilos de trabajo. Eso está probado, incluido un navegador contra Node.

## Adónde seguir

[Escribir un generador](topic:write-a-generator) construye una pieza con campos; [La biblioteca de ingeniería](topic:engineering-library) la dimensiona.
