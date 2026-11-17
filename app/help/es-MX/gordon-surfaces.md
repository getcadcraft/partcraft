---
title: Superficies a partir de una red de curvas (superficie de Gordon)
summary: Cree una superficie suave a través de una cuadrícula de curvas de perfil y de guía dibujadas en croquis o tomadas de aristas del modelo, ciérrela como sólido cuando los perfiles son cerrados, y vea qué es exacto, qué es ajustado y los mensajes cuando una red no encaja.
keywords: tangente, G1, tangencia, continuidad tangente, plano de simetría, superficie de Gordon, red de curvas, superficie de frontera, superficie de red, perfiles, guías, curvas guía, solevación con guías, rieles guía, piel, transfinita, Coons, superficie B-spline, superficie libre
from: ada3cb8b
---

:::note
**Todavía no incluido en esta versión.** La superficie de Gordon necesita un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye cada pieza con el núcleo de malla. [Lo que aún no está incluido](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página la describe tal como funciona con un núcleo exacto.
:::

Una **superficie de Gordon** es una sola superficie que pasa por cada curva de una red: un conjunto de **perfiles** que van en una dirección y un conjunto de **guías** que van en la otra, cruzándose como los hilos de una red. Así se da forma a un casco, un guardabarros o una manija a partir de unas pocas curvas de sección que usted controla directamente. Necesita el **núcleo exacto** (véase [El núcleo de malla](topic:solid-kernels)).

## Dibujar la red

1. Dibuje los **perfiles**: dos o más curvas que van lado a lado, por ejemplo secciones en planos paralelos. Funcionan líneas, arcos, círculos y splines, y una cadena de curvas unidas de extremo a extremo cuenta como una sola curva.
2. Dibuje las **guías**: dos o más curvas que cruzan los perfiles. Cada guía debe cruzar cada perfil una vez, y cada perfil cada guía una vez.
3. Haga que las curvas realmente se encuentren. Dibuje el croquis de una guía de modo que su curva pase por los puntos de los perfiles (ajústese a los puntos proyectados, o escriba las coordenadas). La red acepta huecos de hasta la **Tolerancia** (0.01 mm para empezar).

Un croquis puede contener varias curvas: cada cadena separada dentro de él es su propia curva. Así puede dibujar todas las guías en un solo croquis sobre el plano superior, por ejemplo.


## Crear la superficie

1. Elija {{ui:Más}} en el grupo Operaciones y luego {{ui:Superficie de Gordon}}.
2. PartCraft toma los croquis que nadie usa todavía: los que están en planos paralelos al primero se convierten en **perfiles**, los demás en **guías**. Revise la lista a la derecha y establezca cada croquis en **Perfiles**, **Guías** o **No usado**.
3. Para usar aristas de la pieza, haga clic en **Elegir aristas como perfiles** (o **como guías**), haga clic en las aristas en la vista y luego pulse Esc.

El resultado es un **cuerpo de superficie**. {{ui:Engrosar}} lo convierte en sólido, {{ui:Coser}} lo cose a otras superficies, y {{ui:Recortar superficie}} lo corta.

### Cerrarla como sólido

Cuando los perfiles son curvas cerradas (círculos, splines cerrados, cadenas cerradas) y el primer y el último perfil están cada uno planos en un plano, marque **Cerrar como sólido**. Los extremos se tapan con caras planas y la forma cerrada se une, corta, interseca o se convierte en un cuerpo nuevo como cualquier otra operación. Así se hace una solevación que sigue curvas guía. Lo mismo funciona con guías cerradas.

## Tangente a un plano a lo largo de una arista

Una superficie de Gordon pasa por sus curvas, pero por sí sola no coincide con la pendiente de lo que toca. Para que salga de una arista **tangente** a un plano (G1), como un plano de simetría, de modo que la copia reflejada se una sin pliegue, o una cara plana de la que crece:

1. Seleccione la operación de Gordon. En **Tangente a**, elija un plano en {{ui:Agregar un plano…}} (Frontal, Superior, Derecho o un plano de referencia), o elija una cara plana en la vista y pulse {{ui:Agregar la cara plana seleccionada}}.
2. PartCraft encuentra la curva de frontera de la red que está en ese plano, y la superficie sale de ella tangente al plano.

Si un plano contiene dos curvas de frontera (un piso bajo ambos extremos), agréguelo dos veces: cada copia toma la siguiente. Hasta cuatro planos, uno por arista.

El informe dice a lo largo de qué curva hizo tangente cada plano y el ángulo más pronunciado con el que la superficie llegaba a ese plano antes. Las guías que ya salen de esa curva tangentes al plano se siguen con exactitud. Las guías que se alejan de ella se doblan en una franja estrecha cerca de la arista, y la cifra "sigue cada curva dentro de" del informe indica cuánto: dibuje las guías que salen de la arista planas para un ajuste exacto.

## Qué es exacto y qué es ajustado

El panel indica cuál de estos casos se aplica, y cuánto se aleja la superficie de sus curvas.

- **Exacto**: cuando cada curva es polinomial (líneas, splines y cadenas de ellos) y las guías cruzan todos los perfiles en los mismos parámetros, la superficie es exactamente la superficie de Gordon de esas curvas. Una red de curvas iso cortada de una superficie bicúbica devuelve esa superficie, y cuatro líneas rectas dan un parche plano o retorcido (bilineal).
- **Ajustado**: los arcos, círculos y aristas de la pieza no son polinomiales, y las curvas que se cruzan con parámetros distintos deben re-parametrizarse para que los cruces coincidan. Esas curvas se ajustan con B-splines cúbicos dentro de una diezmillonésima del tamaño de la red (unos 0.00001 mm para una pieza de 100 mm). Un parche de cilindro hecho de arcos y líneas se mantiene dentro de 0.00001 mm del cilindro verdadero.

Entre las curvas, la superficie es lo que dé el método: los perfiles mezclados a través, más las guías mezcladas a través, menos la mezcla de sus puntos de cruce. Es suave en todas partes, salvo donde una curva tiene una esquina aguda. Cuando dos superficies de Gordon comparten una curva de frontera, se unen de borde a borde (G0), no en tangencia.

## Cuando una red no encaja

| Mensaje | Qué hacer |
|---|---|
| "… no se encuentran: pasan a 0.4 mm de distancia" | Haga que ese perfil y esa guía se crucen, o suba la Tolerancia |
| "… se encuentra … 2 veces" | Una guía puede cruzar cada perfil solo una vez: divida una curva en bucle, o use menos perfiles |
| "… en un orden distinto" o "se pliega sobre sí misma" | Dos guías se cruzan entre sí (o dos perfiles). Las familias deben ir lado a lado |
| "al menos dos perfiles y dos guías" | Agregue curvas, o establezca más croquis en Perfiles o Guías |
| "mezcla curvas abiertas y cerradas" | Haga todos los perfiles abiertos o todos cerrados (lo mismo para las guías) |
| "Un extremo … no es plano, así que no puede taparse" | Dibuje el primer y el último perfil cerrado cada uno en un plano, o deje Cerrar como sólido desactivado |

## Límites

- Un parche B-spline por red: no hay tangencia G1 ni G2 con superficies vecinas.
- La costura de una red cerrada, en la primera guía, se une de borde a borde pero no en tangencia.
- La operación Solevación en sí no tiene rieles guía; use en su lugar una superficie de Gordon cerrada como sólido.
- Las curvas muy onduladas, o cruces espaciados de forma muy desigual a lo largo de una curva en comparación con otra, pueden necesitar demasiados puntos para ajustarse; en ese caso la operación lo indica.
