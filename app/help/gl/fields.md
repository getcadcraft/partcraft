---
title: Campos: formas como distancias
summary: Que é un campo (unha forma almacenada como a distancia á súa superficie), como construír un a partir de primitivas, operacións booleanas, retículas e superficies mínimas nun script, como se converte nun corpo e por que o mesmo script sempre dá os mesmos bytes.
keywords: campo, distancia con signo, sdf, vóxel, xiroide, tpms, retícula, booleana, desprazamento, casca, mestura, dual contouring, determinista, hermético, variedade, bloque
from: faab7480
---

Un **campo** describe unha forma pola distancia dende calquera punto á súa superficie: negativa dentro, cero na superficie, positiva fóra. Unha esfera de raio 5 é "a distancia ao centro menos 5". Combinar formas é aritmética sobre distancias: a unión é a menor de dúas, a intersección a maior, e restar unha forma doutra é a maior entre a primeira e menos a segunda. Facer crecer unha forma 1 mm resta 1 á distancia; unha parede oca é a distancia, dobrada.

Por iso os campos son bos para retículas, canles e paredes graduadas: a superficie dun xiroide é "a suma de senos é cero", e unha parede que engrosa de 1 a 3 mm ao longo da peza é un número que cambia ao longo da peza.

## Do campo ao corpo

`to_body(field, h)` toma mostras do campo nunha cuadrícula de puntos separados `h` milímetros, conservando só os puntos próximos á superficie (unha cuadrícula dispersa de bloques de 8 × 8 × 8), e constrúe a superficie por **dual contouring**: un vértice por cela da superficie, colocado onde se cruzan os planos da superficie, para que unha aresta viva siga viva dentro dun vóxel. A superficie é pechada e cada aresta é compartida por exactamente dous triángulos; o informe dío. Un elemento máis fino que uns tres vóxeles pode estrangularse, e entón o informe indica que o corpo non é un sólido pechado en vez de ocultalo.

O tamaño do vóxel é a precisión: o volume dunha esfera de 25 vóxeles de diámetro está a menos de algunhas centésimas de por cento, e unha parede só é tan fiel como os seus vóxeles. Canto máis groso sexa o cuadriculado, máis rápido vai.

## Sempre os mesmos bytes

Un campo non ten reloxo nin número aleatorio. O seno e o coseno dun xiroide, e cada exponencial, logaritmo e potencia da biblioteca, calcúlanse con aritmética simple para que Node, Chrome, Firefox e Safari dean os mesmos bits; a cuadrícula recórrese nunha orde fixa, así que o mesmo script cos mesmos datos dá mallas e follas de datos idénticas byte a byte, en calquera computador e con calquera número de fíos de traballo. Isto está probado, incluído un navegador fronte a Node.

## Onde seguir

[Escribir un xerador](topic:write-a-generator) constrúe unha peza con campos; [A biblioteca de enxeñaría](topic:engineering-library) dimensiónaa.
