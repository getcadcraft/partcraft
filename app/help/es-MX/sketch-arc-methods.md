---
title: Dibujar un arco con diez métodos
summary: Elija cómo se describe un arco (tres puntos, inicio y fin con un radio, centro e inicio con un ángulo, y más), haga clic o escriba los valores, y continúe desde la última línea o arco.
keywords: arco, arco de 3 puntos, arco de tres puntos, inicio centro fin, inicio fin radio, arco tangente, continuar, cuerda, ángulo incluido, arco de croquis, métodos de arco
from: 647f7dce
---

## Lo que hará

Dibuje un arco en un croquis con el método que corresponda a lo que sabe: tres puntos sobre él, su centro, su radio, el ángulo que barre o la dirección en que sale. Los valores pueden hacerse con clic o escribirse.

## Pasos

1. Abra un croquis (vea [Conceptos básicos de croquis](topic:sketch-basics)).
2. En la barra de herramientas del croquis, abra la lista junto a {{ui:Arc}} y elija un método, por ejemplo {{ui:Arc: Start, End, Radius}}. Los métodos son: 3 puntos; inicio, centro, fin; inicio, centro, ángulo; inicio, centro, longitud; inicio, fin, ángulo; inicio, fin, dirección; inicio, fin, radio; centro, inicio, fin; centro, inicio, ángulo; centro, inicio, longitud; y continuar.
3. Siga la barra de estado, que indica el método y dice qué dar a continuación: haga clic en el punto de inicio, el punto central, un segundo punto sobre el arco o el punto final.
4. Cuando el aviso diga "o escriba", escriba un número y pulse {{key:Enter}}: el ángulo incluido en grados (negativo es en sentido horario), la longitud de la cuerda, la dirección tangente inicial en grados, o el radio (negativo es el recorrido más largo).
5. El arco se dibuja. {{ui:Arc: Continue}} inicia el siguiente arco desde el extremo de la última línea o arco.

## Notas

- Los arcos conservan su centro, inicio y fin, así que las relaciones y cotas funcionan sobre ellos como antes.
- La barra de estado rechaza entradas imposibles y dice por qué, por ejemplo tres puntos alineados, o un radio demasiado pequeño para llegar entre los dos puntos extremos.
- {{ui:Arc: Continue}} sin nada dibujado dice "Nada desde dónde continuar: dibuje primero una línea o un arco."
