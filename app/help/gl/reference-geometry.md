---
title: Planos, eixos e puntos de referencia
summary: Crear planos desprazados dunha cara, en ángulo, por tres puntos, a medio camiño, tanxentes a un cilindro, perpendiculares a unha aresta ou por unha aresta e un punto; eixos; puntos no medio das arestas, cruzamentos e esquinas de planos; esbozar sobre eles e usalos como eixos de revolución, direccións de patrón e planos de espello.
keywords: datum, entre obxectos, punto medio, punto de interseccion, plano por aresta e punto, plano de referencia, plano de traballo, plano de construción, plano datum, plano desprazado, plano en ángulo, plano medio, plano tanxente, eixo de referencia, eixo de construción, eixo datum, punto de referencia, punto de traballo, esbozar sobre plano
from: e7eb6fc1
---

A xeometría de referencia é o andamio sobre o que constrúe as características: un **plano** onde esbozar cando non hai cara, un **eixo** arredor do que revolucionar ou facer un patrón, un **punto** onde parar unha extrusión. Non ten material propio. Os planos aparecen na vista como cadrados pálidos, os eixos como liñas de trazos e os puntos como pequenas cruces; os tres únense ao historial e seguen o que os orixinou cando cambia un tamaño anterior.

Están no menú {{ui:Máis}} do grupo Elementos: {{ui:Plano}}, {{ui:Eixo}}, {{ui:Punto}}.

## Crear un plano

1. Prema unha cara plana, ou un plano base do historial, para partir del (opcional).
2. Escolla {{ui:Máis}} e despois {{ui:Plano}}. Comeza como un plano desprazado a 20 % do tamaño da peza de distancia do que seleccionou (ou do plano superior).
3. No panel dereito escolla o **Tipo** e as súas referencias:

| Tipo | Referencias | Números |
|---|---|---|
| Desprazado dun plano ou cara | **Desde o plano** | **Distancia (mm)**, negativa para o outro lado |
| En ángulo, por unha aresta ou eixo | **Desde o plano**, **Xirar arredor de** (un eixo do mundo, unha característica de eixo ou unha aresta recta seleccionada) | **Ángulo (°)** |
| Por tres puntos | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Plano medio entre dous | **Primeiro plano**, **Segundo plano** (paralelos: a medio camiño; cruzados: o plano que divide o ángulo en dous) | — |
| Tanxente a un cilindro | **Cilindro** (unha cara cilíndrica), **Punto próximo** (de que lado) | — |
| Perpendicular a unha aresta, nun punto | **Aresta**, **No punto** (o plano pasa polo punto da aresta máis próximo a el, e tamén polo punto) | — |
| Por unha aresta e un punto | **Aresta recta** (ou un eixo), **Punto de paso** | — |
| Perpendicular a unha aresta no seu medio | **Aresta** (a medio camiño ao longo dela, perpendicular nese punto), ou sen aresta **Punto 1** e **Punto 2** (o plano a medio camiño entre eles) | — |

Cada referencia ten un botón **Seleccionar**: prémao e logo prema na vista. Un oco de plano admite un plano base, un plano de referencia ou unha cara plana; un oco de punto admite o extremo dunha aresta (prema preto dese extremo), unha característica de punto ou un punto sobre unha cara; un oco de aresta admite unha aresta. {{key:Esc}} cancela a selección. **Inverter a normal** dálle a volta ao plano (en que sentido mira un esbozo sobre el).

Nesta versión, un oco que precisa unha aresta ou unha cara cilíndrica (Tanxente a un cilindro e os ocos de Aresta) responde "aínda sen construír": use puntos ou un eixo.

## Esbozar sobre un plano

Seleccione o plano (no historial ou premendo o seu cadrado na vista) e escolla {{ui:Esbozo}}, ou **Esbozar sobre el** no seu panel. O esbozo segue o plano: se cambia a distancia do plano, o esbozo e todas as características sobre el tamén se desprazan.

## Eixos e puntos

- {{ui:Eixo}}: por dous puntos, o eixo dun cilindro ou cono, onde se cruzan dous planos, ao longo dunha aresta recta (ou o eixo dunha aresta circular), ou perpendicular a unha cara por un punto.
- {{ui:Punto}}: en coordenadas, nun vértice ou punto de esbozo, ou no centro dunha aresta circular, e tamén os puntos "entre obxectos":

| Tipo de punto | Referencias |
|---|---|
| Medio dunha aresta (ou entre dous puntos) | **Aresta** (a medio camiño da súa lonxitude, tamén para arcos e curvas), ou sen aresta **Punto 1** e **Punto 2** |
| Onde unha aresta ou eixo cruza unha cara ou plano | **Aresta** (recta ou curva) ou un eixo, e **Corta o plano** (un plano ou cara plana) ou **Ou unha cara** (unha cara plana ou un cilindro). Un círculo cruza un plano dúas veces e unha liña atravesa un cilindro dúas veces: **O outro cruzamento** toma o segundo |
| Onde se cruzan tres planos | **Primeiro**, **Segundo** e **Terceiro plano** (planos ou caras planas) |

Cada un falla cunha mensaxe simple cando as referencias non encaixan: unha liña paralela ao plano, unha liña que non alcanza o cilindro, unha aresta que non chega ao plano, tres planos que non se cruzan nun só punto, ou un punto sobre a liña que debería fixar un plano.

Úsaos noutras características:

| Onde | Como |
|---|---|
| Revolución | **Eixo**: escolla a característica de eixo da lista (debe estar no plano do esbozo) |
| Patrón circular | **Eixo**: a característica de eixo |
| Patrón lineal | **Dirección**: unha característica de eixo, ou un plano (a súa normal) |
| Espello | **Plano de espello**: un plano de referencia |
| Extrusión | **Fin**: Ata cara ou plano, Ata vértice (unha característica de punto). Sen construír nesta versión (precisa un núcleo exacto) |
| Desmoldeo | **Plano neutro** |

## Cando falta unha referencia

Un plano feito a partir dunha cara que xa non existe falla cunha mensaxe que a nomea, como "A cara sobre a que se asenta xa non existe en Extrude1." Nunca se move a outra cara. Os esbozos e características sobre el márcanse como "sen construír" ata que escolla unha nova referencia; o resto da peza queda como estaba.

:::note
Esta versión constrúe todas as pezas co núcleo de malla, que crea planos, eixos e puntos a partir de planos base, caras planas feitas por unha extrusión ou revolución, puntos de esbozo, coordenadas e outras características de referencia. Calquera cousa que precise unha aresta, o extremo dunha aresta ou unha cara curva necesita un núcleo exacto: non se constrúe nesta versión ("Usa unha cara ou aresta do sólido, que só un núcleo exacto pode atopar: aínda sen construír nesta versión.").
:::
