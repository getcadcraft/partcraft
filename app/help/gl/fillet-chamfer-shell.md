---
title: Redondear, biselar e ocar con Redondeo, Chaflán e Casca
summary: Seleccione arestas e engada redondeos de raio constante ou variable e chafláns de distancia igual, de dúas distancias ou de distancia e ángulo; oque unha peza con Casca seleccionando as caras que se abren, cambie que arestas ou caras usa un elemento e resolva os fallos habituais.
keywords: redondeo, redondear, mesturar, chaflán, biselar, casca, ocar, grosor da parede, arestas, caras, seleccionar arestas, shift clic, cara aberta, núcleo exacto, núcleo de malla, non construído
from: e41c1c12
---

:::note
**Nesta versión** PartCraft constrúe redondeos e chafláns co núcleo de malla, só sobre **arestas rectas entre dúas caras planas**: arestas de caixas e arestas rectas de extrusións e cortes, esquinas exteriores ou interiores (unha esquina interior engade material). As arestas redondas, como os bordos de orificios, e un raio que cambia ao longo da aresta aínda non se constrúen. Onde dúas arestas redondeadas se atopan nunha esquina, os redondeos fanse en inglete (xúntanse nunha dobra viva), non se mesturan. **Casca** tamén funciona, construída polo núcleo de malla: só abre caras planas, as cascas con grosores de parede distintos aínda non se constrúen, e vai lenta en pezas con moitas caras redondas. Consulte [O que aínda non se constrúe](topic:not-built-yet).
:::

{{ui:Redondeo}} redondea arestas, {{ui:Chaflán}} as biselo e {{ui:Casca}} oca a peza. Os tres traballan sobre as arestas e caras do sólido e constrúeos o núcleo de malla. Os seus redondeos son facetados como toda cara redonda (**Curvas** determina a finura); as caras redondas son cilindros que se poden seleccionar e medir (consulte [O núcleo de malla](topic:solid-kernels)).

## Redondear ou biselar arestas

### Seleccione primeiro as arestas

1. Prema unha aresta da peza. A aresta enteira ilumínase e o panel dereito indica **Aresta**: o seu tipo (Recta, Círculo ou arco, Curva), a lonxitude e as caras entre as que está.
2. Para engadir máis arestas, prema con {{key:Shift}}+clic sobre elas. Cada unha márcase; prema con {{key:Shift}}+clic nunha aresta marcada para quitala. O título do panel conta as arestas ("4 arestas") e a barra de estado indica "4 arestas seleccionadas. Redondeo ou Chaflán as redondean; Shift+clic selecciona máis, Esc borra."
3. Escolla {{ui:Redondeo}} ou {{ui:Chaflán}} na barra de ferramentas, ou os mesmos botóns no panel dereito.

O elemento engádese con todas as arestas seleccionadas: un redondeo de 2 mm, ou un chaflán de 1 mm. A barra de estado indica, por exemplo, "Fillet1 engadido (4 arestas). Cambie o seu tamaño á dereita; Seleccionar arestas cambia cales."

### Ou engada primeiro o elemento

1. Sen seleccionar nada, escolla {{ui:Redondeo}} ou {{ui:Chaflán}}.
2. PartCraft pasa a seleccionar: o título do panel dereito indica "Fillet1: seleccionando", a peza móstrase como estaba antes do redondeo (o panel indícao) e a barra de ferramentas mostra {{ui:Feito}}.
3. Prema cada aresta para engadila; prémao de novo para quitala. A barra de estado cóntaas.
4. Escolla {{ui:Feito}} (ou {{ui:Selección feita}} no panel), ou prema {{key:Esc}} ou {{key:Enter}}.

### Axustes

| Axuste | Redondeo | Chaflán |
|---|---|---|
| Tamaño | **Raio (mm)**, predeterminado 2 | **Distancia (mm)** desde a aresta en ambas caras, predeterminado 1 |
| **Arestas** | Cantas | Cantas |

A lista de abaixo nomea cada aresta polas dúas caras que une, como "Aresta 1: Extrude1 end face × Extrude1 side". **Quitar** elimina unha. {{ui:Seleccionar arestas}} volve á selección. Facer dobre clic no elemento do historial fai o mesmo.

As arestas recórdanse polas dúas caras que unen, así que seguen na aresta correcta cando cambia unha cota anterior no historial.

### Redondeos variables e tipos de chaflán

- **Raio variable** (redondeo): aínda non se constrúe nesta versión ("Un redondeo cuxo raio cambia ao longo da aresta: aínda non se constrúe (necesita un núcleo exacto). Dé un só raio."). Cun núcleo exacto: marque a opción e estableza o **Raio final (mm)**. O raio cambia de forma lineal desde o **Raio** nun extremo de cada aresta ata o **Raio final** no outro; **Trocar os extremos** dá a volta.
- **Tipo** (chaflán): **Distancia igual**, **Dúas distancias** (unha **Segunda distancia** na outra cara) ou **Distancia e ángulo** (a distancia nunha cara, o bisel co **Ángulo (°)** respecto a esa cara). **Inverter lados** pon a primeira distancia na outra cara.

## Ocar unha peza

1. Prema a cara plana que quere deixar aberta, por exemplo a parte superior dunha caixa. Ou prema con {{key:Shift}}+clic varias caras.
2. Escolla {{ui:Casca}} na barra de ferramentas, ou {{ui:Casca, abrindo esta cara}} no panel da cara.

A peza convértese nunha parede de 2 mm coas caras seleccionadas abertas. Axustes:

| Axuste | Función | Predeterminado |
|---|---|---|
| **Parede (mm)** | O grosor da parede | 2 |
| **As paredes crecen cara a fóra (as caras quedan dentro)** | Marcado: as paredes engádense por fóra, así que o interior conserva o tamaño da peza | Desactivado: as paredes van cara a dentro e o exterior conserva o seu tamaño |
| **Caras abertas** | Cantas caras se eliminan | |

Cara a dentro, as paredes miden exactamente o grosor da parede: as esquinas exteriores quedan vivas, as interiores redondeadas (raio = a parede), e un orificio que atravesa a peza recibe un tubo de parede ao seu arredor. Cara a fóra, as paredes engádense por fóra da superficie orixinal, que pasa a ser o oco, e as arestas exteriores redondeanse. As caras interiores reciben o nome das caras que desprazan, así que pode seleccionalas.

Só se poden abrir caras planas: ao seleccionar unha curva indica "Casca: nesta versión só abre caras planas (constrúeo o núcleo de malla)." Unha casca vai lenta en pezas con moitas caras redondas (varios segundos por cada mil triángulos): use un axuste **Curvas** máis groso mentres deseña.

{{ui:Seleccionar caras}} cambia cales caras están abertas, do mesmo xeito que ao seleccionar arestas. A lista nomea cada unha, como "Face 1: Extrude1 end face". Non se permite unha casca sen caras abertas: "Seleccione as caras que quitar (abrir) e logo ocar."

## A orde importa

Os elementos constrúense de arriba abaixo. Un redondeo antes dunha casca ocase coa peza, así que o interior tamén recibe esquinas redondeadas. Un redondeo despois dunha casca redondea só as arestas que seleccione. Mova os elementos con {{ui:Subir}} e {{ui:Baixar}} (consulte [Cambiar unha peza mediante o seu historial](topic:edit-history)).

Os patróns e os espellos non poden copiar un redondeo, chaflán ou casca: "Fillet1 cambia as arestas ou paredes do corpo; non se pode copiar. Copie os elementos que crean sólidos (extrusións, revolucións, orificios, importacións)." Cree primeiro o patrón dos orificios ou cortes, despois redondee todas as arestas das copias nun só redondeo.

## Cando falla

| Mensaxe | Que facer |
|---|---|
| "Un redondeo de 5 mm non cabe aquí (é demasiado grande para unha cara xunto a unha das arestas, ou as arestas se xuntan nunha esquina que o núcleo non pode mesturar)." | Use un raio menor, ou redondee menos arestas de cada vez (varios elementos de redondeo, o máis pequeno o último) |
| "Desapareceu unha aresta que redondea: a aresta entre Extrude1 e Cut2." | Un cambio anterior eliminou esa aresta. Escolla {{ui:Seleccionar arestas}}, quite a aresta en vermello e seleccione a nova |
| "A casca non se puido facer con este grosor (…)." | A parede é máis grosa que unha zona estreita do modelo, ou que o raio dun redondeo. Faga a parede máis fina, ou os redondeos máis grandes que a parede |
| "Esa cara non ten un nome que o historial poida seguir; seleccione outra." | Seleccione unha cara creada por un elemento (a maioría das caras son así) |
| "Redondeo: nesta versión só arestas rectas entre dúas caras planas (constrúeas o núcleo de malla). Redondee ou bisele as arestas curvas no esbozo." (tamén Chaflán) | Unha aresta seleccionada é redonda, como un bordo de orificio, ou está nunha cara curva. Quítea con {{ui:Seleccionar arestas}}, e redondee ou bisele esa esquina no esbozo |
| "Un redondeo cuxo raio cambia ao longo da aresta: aínda non se constrúe (necesita un núcleo exacto). Dé un só raio." | Desmarque **Raio variable** |
| "Redondeo co núcleo de malla: onde se atopan as arestas redondeadas, fanse en inglete, non se mesturan." (⚠ no historial) | Un aviso, non un erro: a peza está construída. As arestas seleccionadas atópanse nunha esquina, e os redondeos xúntanse alí nunha dobra viva. Redondee menos arestas, ou acepte a dobra |
| "Casca: nesta versión só abre caras planas (constrúeo o núcleo de malla)." | Unha cara aberta é curva. {{ui:Seleccionar caras}} e quítea; abra só caras planas |

## Límites

Nesta versión os redondeos e chafláns funcionan só sobre arestas rectas entre dúas caras planas, cun só raio, e os redondeos que se atopan nunha esquina fanse en inglete. As cascas só abren caras planas. Cun núcleo exacto, un redondeo variable cambia de forma lineal ao longo de cada aresta (unha lei por elemento; sen raio fixado en puntos ao longo dela). Os redondeos de caras, os redondeos completos e as cascas con grosores de parede distintos aínda non se constrúen.
