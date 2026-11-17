---
title: Debuxar un arco por dez métodos
summary: Escolle como se describe un arco (tres puntos, inicio e fin con raio, centro e inicio con ángulo, e máis), fai clic ou escribe os valores, e continúa desde a última liña ou arco.
keywords: arco, arco de tres puntos, arco de 3 puntos, inicio centro fin, inicio fin raio, arco tanxente, continuar, corda, ángulo incluído, arco de esbozo, métodos de arco
from: 647f7dce
---

## O que farás

Debuxa un arco nun esbozo co método que coincida co que sabes: tres puntos sobre el, o seu centro, o seu raio, o ángulo que barre ou a dirección na que sae. Os valores pódense facer clic ou escribir.

## Pasos

1. Abre un esbozo (ver [Básico do esbozo](topic:sketch-basics)).
2. Na barra de ferramentas do esbozo, abre a lista xunto a {{ui:Arco}} e escolle un método, por exemplo {{ui:Arco: inicio, fin, radio}}. Os métodos son 3 puntos; Inicio, centro, fin; Inicio, centro, ángulo; Inicio, centro, lonxitude; Inicio, fin, ángulo; Inicio, fin, dirección; Inicio, fin, radio; Centro, inicio, fin; Centro, inicio, ángulo; Centro, inicio, lonxitude; e Continuar.
3. Segue a barra de estado, que nomea o método e indica o que dar despois: fai clic no punto de inicio, no punto central, nun segundo punto do arco ou no punto final.
4. Onde a indicación diga "ou escribe", escribe un número e preme {{key:Enter}}: o ángulo incluído en graos (negativo é en sentido horario), a lonxitude da corda, a dirección tanxente de inicio en graos, ou o raio (negativo é o camiño máis longo).
5. O arco debúxase. {{ui:Arco: continuar}} inicia o seguinte arco desde o final da última liña ou arco.

## Notas

- Os arcos conservan o seu centro, inicio e fin, así que as relacións e cotas funcionan sobre eles como antes.
- A barra de estado rexeita as entradas imposibles e di por que, por exemplo tres puntos nunha liña, ou un raio demasiado pequeno para chegar entre os dous puntos extremos.
- {{ui:Arco: continuar}} sen nada debuxado di "Nada desde o que continuar: debuxa primeiro unha liña ou un arco."
