---
title: Dibujar un arco por diez métodos
summary: Elegir cómo se describe un arco (tres puntos, inicio y fin con radio, centro e inicio con ángulo, y más), hacer clic o escribir los valores, y continuar desde la última línea o arco.
keywords: arco, arco de 3 puntos, arco de tres puntos, inicio centro fin, inicio fin radio, arco tangente, continuar, cuerda, ángulo incluido, arco de boceto, métodos de arco
from: 647f7dce
---

## Lo que hará

Dibuje un arco en un boceto con el método que corresponda a lo que se conoce: tres puntos sobre él, su centro, su radio, el ángulo que barre o la dirección en que sale. Los valores se pueden elegir con clic o escribirlos.

## Pasos

1. Abra un boceto (vea [Fundamentos del bosquejo](topic:sketch-basics)).
2. En la barra de herramientas del boceto, abra la lista junto a {{ui:Arco}} y elija un método, por ejemplo {{ui:Arco: Inicio, Fin, Radio}}. Los métodos son 3 puntos; Inicio, Centro, Fin; Inicio, Centro, Ángulo; Inicio, Centro, Longitud; Inicio, Fin, Ángulo; Inicio, Fin, Dirección; Inicio, Fin, Radio; Centro, Inicio, Fin; Centro, Inicio, Ángulo; Centro, Inicio, Longitud; y Continuar.
3. Siga la barra de estado, que nombra el método e indica qué dar a continuación: haga clic en el punto de inicio, el punto central, un segundo punto del arco o el punto final.
4. Donde el aviso dice "o escriba", escriba un número y presione {{key:Enter}}: el ángulo incluido en grados (negativo es en sentido horario), la longitud de la cuerda, la dirección tangente inicial en grados, o el radio (negativo es el camino más largo).
5. El arco queda dibujado. {{ui:Arco: Continuar}} inicia el siguiente arco desde el extremo de la última línea o arco.

## Notas

- Los arcos conservan su centro, inicio y fin, así que las relaciones y cotas funcionan sobre ellos como antes.
- La barra de estado rechaza entradas imposibles y dice por qué, por ejemplo tres puntos en línea, o un radio demasiado pequeño para llegar entre los dos extremos.
- {{ui:Arco: Continuar}} sin nada dibujado dice "Nada desde donde continuar: dibuje primero una línea o un arco."
