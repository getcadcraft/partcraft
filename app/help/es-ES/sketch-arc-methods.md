---
title: Dibujar un arco con diez métodos
summary: Elija cómo se describe un arco (tres puntos, inicio y final con radio, centro e inicio con un ángulo, y más), haga clic o escriba los valores, y continúe desde la última línea o arco.
keywords: arco, arco de 3 puntos, arco de tres puntos, inicio centro final, inicio final radio, arco tangente, continuar, cuerda, ángulo incluido, arco de boceto, métodos de arco
from: 647f7dce
---

## Lo que hará

Dibuje un arco en un boceto con el método que corresponda a lo que sabe: tres puntos sobre él, su centro, su radio, el ángulo que barre o la dirección en que sale. Los valores se pueden hacer clic o escribir.

## Pasos

1. Abra un boceto (consulte [Fundamentos del boceto](topic:sketch-basics)).
2. En la barra de herramientas del boceto, abra la lista junto a {{ui:Arco}} y elija un método, por ejemplo {{ui:Arco: inicio, final, radio}}. Los métodos son: 3 puntos; Inicio, Centro, Final; Inicio, Centro, Ángulo; Inicio, Centro, Longitud; Inicio, Final, Ángulo; Inicio, Final, Dirección; Inicio, Final, Radio; Centro, Inicio, Final; Centro, Inicio, Ángulo; Centro, Inicio, Longitud; y Continuar.
3. Siga la barra de estado, que nombra el método e indica qué dar a continuación: haga clic en el punto inicial, el punto central, un segundo punto del arco o el punto final.
4. Cuando la indicación diga "o escriba", escriba un número y pulse {{key:Enter}}: el ángulo incluido en grados (negativo es horario), la longitud de la cuerda, la dirección tangente inicial en grados, o el radio (negativo es el camino más largo).
5. Se dibuja el arco. {{ui:Arco: continuar}} inicia el siguiente arco desde el final de la última línea o arco.

## Notas

- Los arcos conservan su centro, inicio y final, así que las relaciones y cotas funcionan sobre ellos como antes.
- La barra de estado rechaza las entradas imposibles y dice por qué, por ejemplo tres puntos alineados, o un radio demasiado pequeño para llegar entre los dos puntos extremos.
- {{ui:Arco: continuar}} sin nada dibujado dice "Nada desde lo que continuar: dibuje antes una línea o un arco."
