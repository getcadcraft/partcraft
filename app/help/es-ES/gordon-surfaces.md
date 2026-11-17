---
title: Superficies a través de una red de curvas (superficie de Gordon)
summary: Cree una única superficie suave a través de una cuadrícula de curvas de perfil y de guía dibujadas en croquis o tomadas de aristas del modelo; ciérrela a un sólido cuando los perfiles sean cerrados, y qué es exacto, qué se ajusta y los mensajes cuando una red no encaja.
keywords: tangente, G1, tangencia, continuidad tangente, plano de simetría, superficie de Gordon, red de curvas, superficie de frontera, superficie reticular, superficie de red, perfiles, guías, curvas guía, loft con guías, carriles guía, piel, transfinita, Coons, superficie B-spline, superficie libre
from: ada3cb8b
---

:::note
**Aún no disponible en esta versión.** La superficie de Gordon necesita un núcleo geométrico exacto, que esta versión de PartCraft no tiene: construye cada pieza con el núcleo de malla. [Lo que aún no está disponible](topic:not-built-yet) indica qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Una **superficie de Gordon** es una sola superficie que pasa por cada curva de una red: un conjunto de **perfiles** en un sentido y un conjunto de **guías** en el otro, que se cruzan como los hilos de una red. Así se da forma a un casco, un guardabarros o un mango a partir de unas pocas curvas de sección que usted controla directamente. Necesita el **núcleo exacto** (véase [El núcleo de malla](topic:solid-kernels)).

## Dibujar la red

1. Dibuje los **perfiles**: dos o más curvas paralelas, por ejemplo secciones en planos paralelos. Líneas, arcos, círculos y splines funcionan, y una cadena de curvas unidas de extremo a extremo cuenta como una sola curva.
2. Dibuje las **guías**: dos o más curvas que atraviesan los perfiles. Cada guía debe cruzar cada perfil una vez, y cada perfil cada guía una vez.
3. Haga que las curvas se encuentren de verdad. Dibuje el croquis de una guía de modo que su curva pase por los puntos de los perfiles (ajuste a puntos proyectados, o escriba las coordenadas). La red admite huecos de hasta la **Tolerancia** (0.01 mm para empezar).

Un croquis puede contener varias curvas: cada cadena separada en él es su propia curva. Así puede dibujar todas las guías en un solo croquis sobre el plano superior, por ejemplo.

## Crear la superficie

1. Elija {{ui:Más}} en el grupo Características, y después {{ui:Superficie de Gordon}}.
2. PartCraft toma los croquis que nadie usa todavía: los que están en planos paralelos al primero pasan a ser **perfiles**, los demás **guías**. Revise la lista de la derecha y ponga cada croquis en **Perfiles**, **Guías** o **No usado**.
3. Para usar aristas de la pieza, haga clic en **Elegir aristas como perfiles** (o **como guías**), haga clic en las aristas de la vista y pulse Esc.

El resultado es un **cuerpo de superficie**. {{ui:Engrosar}} lo convierte en un sólido, {{ui:Coser}} lo cose a otras superficies y {{ui:Recortar superficie}} lo corta.

### Cerrarla a un sólido

Cuando los perfiles son curvas cerradas (círculos, splines cerrados, cadenas cerradas) y el primero y el último perfil están cada uno en un plano, marque **Cerrar a un sólido**. Los extremos se tapan con caras planas y la forma cerrada se une, corta, interseca o pasa a ser un cuerpo nuevo como cualquier otra característica. Así se hace un loft que sigue curvas guía. Lo mismo funciona con guías cerradas.

## Tangente a un plano a lo largo de una arista

Una superficie de Gordon pasa por sus curvas, pero por sí sola no coincide con la pendiente de lo que toca. Para que salga de una arista **tangente** a un plano (G1), como un plano de simetría, de modo que la copia reflejada se una sin pliegue, o una cara plana de la que crece:

1. Seleccione la característica Gordon. Bajo **Tangente a**, elija un plano en {{ui:Añadir un plano…}} (Alzado, Superior, Derecho o un plano de referencia), o elija una cara plana en la vista y pulse {{ui:Añadir la cara plana seleccionada}}.
2. PartCraft encuentra la curva de contorno de la red que está en ese plano, y la superficie sale tangente al plano.

Si un plano contiene dos curvas de contorno (un suelo bajo ambos extremos), añádalo dos veces: cada copia toma la siguiente. Hasta cuatro planos, uno por arista.

El informe indica a lo largo de qué curva hizo tangente cada plano y el ángulo más pronunciado con el que la superficie llegaba antes a ese plano. Las guías que ya salen tangentes al plano por esa curva se siguen exactamente. Las guías que se alejan de ella se doblan en una banda estrecha cerca de la arista, y la cifra «sigue cada curva dentro de» del informe indica cuánto: dibuje las guías que salen de la arista planas para un ajuste exacto.

## Qué es exacto y qué se ajusta

El panel indica cuál de estos casos se aplica, y cuánto se aparta la superficie de sus curvas.

- **Exacto**: cuando cada curva es polinómica (líneas, splines y cadenas de ellas) y las guías cruzan todos los perfiles en los mismos parámetros, la superficie es exactamente la superficie de Gordon de esas curvas. Una red de curvas isoparamétricas cortada de una superficie bicúbica devuelve esa superficie, y cuatro líneas rectas dan un parche plano o retorcido (bilineal).
- **Ajustado**: los arcos, círculos y aristas de la pieza no son polinómicos, y las curvas que se cruzan en parámetros distintos deben reajustarse para que los cruces coincidan. Esas curvas se ajustan con B-splines cúbicos dentro de una diezmillonésima parte del tamaño de la red (unos 0.00001 mm para una pieza de 100 mm). Un parche cilíndrico hecho de arcos y líneas se mantiene dentro de 0.00001 mm del cilindro real.

Entre las curvas, la superficie es lo que da el método: los perfiles mezclados en sentido transversal, más las guías mezcladas en sentido transversal, menos la mezcla de sus puntos de cruce. Es suave en todas partes salvo donde una curva tiene una esquina aguda. Cuando dos superficies de Gordon comparten una curva de contorno, se unen arista con arista (G0), no tangentes.

## Cuando una red no encaja

| Mensaje | Qué hacer |
|---|---|
| «… no se encuentran: pasan a 0.4 mm de distancia» | Haga que ese perfil y esa guía se crucen, o suba la Tolerancia |
| «… se encuentra … 2 veces» | Una guía solo puede cruzar cada perfil una vez: divida una curva con bucle, o use menos perfiles |
| «… en un orden distinto» o «se pliega sobre sí misma» | Dos guías se cruzan entre sí (o dos perfiles). Las familias deben ir una junto a otra |
| «al menos dos perfiles y dos guías» | Añada curvas, o ponga más croquis en Perfiles o Guías |
| «mezcla curvas abiertas y cerradas» | Haga todos los perfiles abiertos o todos cerrados (lo mismo para las guías) |
| «Un extremo … no es plano, así que no puede taparse» | Dibuje el primer y el último perfil cerrado cada uno en un plano, o deje desmarcado Cerrar a un sólido |

## Límites

- Una cara B-spline por red: sin tangencia G1 ni G2 con superficies vecinas.
- La costura de una red cerrada, en la primera guía, se une arista con arista pero no es tangente.
- La propia característica Loft no tiene carriles guía; use en su lugar una superficie de Gordon cerrada a un sólido.
- Las curvas muy onduladas, o cruces espaciados muy irregularmente a lo largo de una curva en comparación con otra, pueden necesitar demasiados puntos para ajustarse; en ese caso, la característica lo indicará.
