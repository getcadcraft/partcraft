---
title: Superficies a partir de una red de curvas (superficie de Gordon)
summary: Hacer una superficie suave a través de una cuadrícula de curvas de perfil y de guía dibujadas en bocetos o tomadas de aristas del modelo; cerrarla a un sólido cuando los perfiles son cerrados, y qué es exacto, qué está ajustado, y los mensajes cuando una red no encaja.
keywords: tangente, g1, tangencia, continuidad tangencial, plano de simetría, superficie de Gordon, red de curvas, superficie de contorno, superficie de red, superficie de red, perfiles, guías, curvas guía, loft con guías, rieles guía, piel, transfinito, coons, superficie B-spline, superficie libre
from: ada3cb8b
---

:::note
**Todavía no construido en esta versión.** La superficie de Gordon necesita un kernel geométrico exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el kernel de malla. [Lo que todavía no está construido](topic:not-built-yet) explica qué hacer en cambio. El resto de esta página la describe como funciona con un kernel exacto.
:::

Una **superficie de Gordon** es una sola superficie que pasa por cada curva de una red: un conjunto de **perfiles** que van en una dirección y un conjunto de **guías** que van en la otra, cruzándose como los hilos de una red. Así se da forma a un casco, un guardabarros o un mango a partir de unas pocas curvas de sección que controlás directamente. Necesita el **kernel exacto** (ver [El kernel de malla](topic:solid-kernels)).

## Dibujá la red

1. Dibujá los **perfiles**: dos o más curvas que van una al lado de la otra, por ejemplo secciones en planos paralelos. Líneas, arcos, círculos y splines funcionan, y una cadena de curvas unidas de extremo a extremo cuenta como una sola curva.
2. Dibujá las **guías**: dos o más curvas que cruzan los perfiles. Cada guía tiene que cruzar cada perfil una vez, y cada perfil cada guía una vez.
3. Hacé que las curvas realmente se encuentren. Dibujá el boceto de una guía de modo que su curva pase por los puntos de los perfiles (ajustá a los puntos proyectados, o escribí las coordenadas). La red acepta huecos de hasta la **Tolerancia** (0,01 mm para empezar).

Un boceto puede contener varias curvas: cada cadena separada dentro de él es su propia curva. Así podés dibujar todas las guías en un solo boceto sobre el plano superior, por ejemplo.

## Hacer la superficie

1. Elegí {{ui:Más}} en el grupo Funciones, y después {{ui:Superficie de Gordon}}.
2. PartCraft toma los bocetos que nadie usa todavía: los que están en planos paralelos al primero se vuelven **perfiles**, los demás **guías**. Revisá la lista a la derecha y poné cada boceto en **Perfiles**, **Guías** o **No usado**.
3. Para usar aristas de la pieza, hacé clic en **Elegir aristas como perfiles** (o **como guías**), hacé clic en las aristas en la vista, y después apretá Esc.

El resultado es un **cuerpo de superficie**. {{ui:Engrosar}} lo convierte en un sólido, {{ui:Coser}} lo cose a otras superficies, y {{ui:Recortar superficie}} lo corta.

### Cerrarla a un sólido

Cuando los perfiles son curvas cerradas (círculos, splines cerrados, cadenas cerradas) y el primer y el último perfil están cada uno planos en un plano, marcá **Cerrar a un sólido**. Los extremos se cubren con caras planas y la forma cerrada se une, corta, intersecta o se convierte en un cuerpo nuevo como cualquier otra función. Así se hace un loft que sigue curvas guía. Lo mismo funciona con guías cerradas.

## Tangente a un plano a lo largo de una arista

Una superficie de Gordon pasa por sus curvas, pero por sí sola no coincide con la pendiente de lo que toca. Para hacer que deje una arista **tangente** a un plano (G1), como un plano de simetría, de modo que la copia reflejada se una sin pliegue, o una cara plana de la que crece:

1. Seleccioná la función Gordon. Bajo **Tangente a**, elegí un plano en {{ui:Agregar un plano…}} (Frontal, Superior, Derecho o un plano de referencia), o elegí una cara plana en la vista y apretá {{ui:Agregar la cara plana elegida}}.
2. PartCraft encuentra la curva de borde de la red que está en ese plano, y la superficie sale de ella tangente al plano.

Si un plano contiene dos curvas de borde (un piso bajo ambos extremos), agregalo dos veces: cada copia toma la siguiente. Hasta cuatro planos, uno por arista.

El informe dice a lo largo de qué curva hizo tangente cada plano y el ángulo más empinado con que la superficie llegaba a ese plano antes. Las guías que ya salen de esa curva tangentes al plano se siguen exactamente. Las guías que se alejan trepando se doblan en una banda estrecha cerca del borde, y la cifra "sigue cada curva dentro de" del informe dice cuánto: dibujá las guías que salen del borde planas para un ajuste exacto.

## Qué es exacto y qué está ajustado

El panel indica cuál de estas aplica y cuánto se aparta la superficie de tus curvas.

- **Exacto**: cuando cada curva es polinómica (líneas, splines y cadenas de ellos) y las guías cruzan todos los perfiles en los mismos parámetros, la superficie es exactamente la superficie de Gordon de esas curvas. Una red de curvas iso cortadas de una superficie bicúbica devuelve esa superficie, y cuatro líneas rectas dan un parche plano o retorcido (bilineal).
- **Ajustado**: los arcos, círculos y aristas de la pieza no son polinómicos, y las curvas que se cruzan con parámetros distintos hay que re-temporizarlas para que los cruces coincidan. Esas curvas se ajustan con B-splines cúbicos dentro de una diezmillonésima parte del tamaño de la red (unos 0,00001 mm para una pieza de 100 mm). Un parche de cilindro hecho de arcos y líneas se mantiene dentro de 0,00001 mm del cilindro verdadero.

Entre las curvas, la superficie es lo que dé el método: los perfiles mezclados a través, más las guías mezcladas a través, menos la mezcla de sus puntos de cruce. Es suave en todas partes salvo donde una curva tiene una esquina aguda. Donde dos superficies de Gordon comparten una curva de borde, se encuentran arista con arista (G0), no tangentes.

## Cuando una red no encaja

| Mensaje | Qué hacer |
|---|---|
| "… no se encuentran: pasan a 0,4 mm de distancia" | Hacé que ese perfil y esa guía se crucen, o subí la Tolerancia |
| "… se encuentra … 2 veces" | Una guía puede cruzar cada perfil solo una vez: dividí una curva que da vueltas, o usá menos perfiles |
| "… en un orden distinto" o "se pliega sobre sí misma" | Dos guías se cruzan entre sí (o dos perfiles). Las familias tienen que correr una al lado de la otra |
| "al menos dos perfiles y dos guías" | Agregá curvas, o poné más bocetos en Perfiles o Guías |
| "mezclan curvas abiertas y cerradas" | Hacé todos los perfiles abiertos o todos cerrados (lo mismo para las guías) |
| "Un extremo … no es plano, así que no puede taparse" | Dibujá el primer y el último perfil cerrado cada uno en un plano, o dejá Cerrar a un sólido desmarcado |

## Límites

- Un parche B-spline por red: sin tangencia G1 ni G2 a superficies vecinas.
- La costura de una red cerrada, en la primera guía, se une arista con arista pero no es tangente.
- La función Loft en sí no tiene rieles guía; usá en cambio una superficie de Gordon cerrada a un sólido.
- Las curvas muy ondulantes, o cruces espaciados de forma muy irregular a lo largo de una curva comparada con otra, pueden necesitar demasiados puntos para ajustarse; la función lo indica.
