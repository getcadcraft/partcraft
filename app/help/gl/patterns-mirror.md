---
title: Patróns e espellos
summary: Repita elementos en fila con Lineal, xire ao redor dun eixe con Circular e copie elementos ou o corpo completo a través dun plano con Espellar.
keywords: patrón, patrón lineal, patrón circular, matriz polar, matriz, espello, simétrico, copiar elementos, círculo de parafusos, semente, espellar corpo
from: 702e9edb
---

Os patróns e os espellos copian elementos que xa construíu. As copias forman parte do historial: se cambia o orixinal, as copias seguen o cambio.

O que se copia é o que fai o elemento: un patrón de saínte engade material, e un patrón de corte ou de furado quítao. Os patróns pódense volver facer patrón e espellar. Pódese copiar tamén un sólido STEP importado; os redondeos, os chafráns e os vaciados non.

## Patrón lineal

1. Seleccione o elemento a copiar no historial (por exemplo un Furado ou un Corte). Sen nada seleccionado, úsase o último elemento sólido.
2. Escolla {{ui:Lineal}}. Aparecen tres copias separadas 20 mm ao longo de X.
3. No panel dereito, estableza:

| Axuste | Función | Predeterminado |
|---|---|---|
| **Elementos para copiar** | Marque cada elemento a copiar. Só se listan os elementos por enriba do patrón | O elemento seleccionado |
| **Dirección** | Eixe X, eixe Y, eixe Z, unha liña ou liña de centro de calquera esbozo anterior, o eixe dunha revolución ou unha aresta escollida | Eixe X |
| **Espazamento (mm)** | Distancia entre veciños | 20 |
| **Número** | Total, **incluído o orixinal** (de 1 a 1000) | 3 |
| **Inverter dirección** | As copias van no sentido contrario | Desactivado |

### Usar unha aresta como dirección

1. Faga clic nunha aresta recta da peza na vista. O panel dereito di **Aresta** e mostra a súa lonxitude.
2. Escolla {{ui:Lineal}}: o patrón segue esa aresta.

Ou seleccione o patrón, escolla unha aresta e escolla «Aresta escollida (usar a escollida agora)» en **Dirección**. Unha aresta escollida queda fixa no espazo e non segue os cambios posteriores. Unha liña de esbozo sí segue o seu esbozo.

## Patrón circular

1. Seleccione o elemento a copiar (por exemplo un furado preto do bordo dun disco).
2. Escolla {{ui:Circular}}. Aparecen seis copias igualmente espazadas en toda a volta.
3. Estableza:

| Axuste | Función | Predeterminado |
|---|---|---|
| **Elementos para copiar** | Como no patrón lineal | O elemento seleccionado |
| **Eixe** | Eixe X, Y ou Z, unha liña de esbozo, o eixe dunha revolución ou unha aresta escollida | O eixe da última revolución, se existe; se non, o eixe Y |
| **Ángulo (°)** | 360 espazan as copias igualmente en toda a volta. Un valor menor repárteas por ese ángulo, a primeira e a última nos extremos | 360 |
| **Número** | Total, incluído o orixinal | 6 |
| **Inverter dirección** | Xira no sentido contrario | Desactivado |

Os eixes do mundo pasan pola orixe. Para un disco que non está centrado na orixe, use unha liña de centro dun esbozo ou o eixe dunha revolución.

### Exemplo: os oito furados de parafuso dunha flanxe

1. Revolucione a flanxe (vexa [Revolución dunha peza torneada](topic:revolve)) ao redor do eixe Y.
2. Debuxe sobre a cara superior plana da flanxe, coloque un punto no círculo de parafusos e faga un Furado.
3. Con o Furado seleccionado, escolla {{ui:Circular}}. O eixe xa é «Eixo de Revolve1».
4. Estableza **Número** en `8`.

## Espellar

1. Seleccione o elemento a espellar no historial, ou non seleccione nada para espellar **o corpo completo tal como está construído ata agora**.
2. Escolla {{ui:Espellar}}. Espella a través do **Plano Dereito**.

Para espellar o corpo completo a través dunha cara da peza, faga clic antes nesa cara plana e despois escolla {{ui:Espellar}}. (Facer clic nunha cara borra a selección do historial, así que isto espella sempre o corpo completo.)

Axustes no panel dereito:

- **Espellar**: marque **O corpo completo (tal como está construído ata agora)**, ou desmárqueo e marque os elementos a copiar.
- **Plano de espello**: Plano Frontal, Plano Superior, Plano Dereito, a cara que usa agora («Unha cara de Extrude1» ou «Un plano fixo»), ou «A cara escollida agora». Para espellar elementos escollidos a través dunha cara: seleccione o Espellar no historial, faga clic na cara na vista e escolla «A cara escollida agora».

Espellar o corpo completo a través dunha cara duplica a peza; por exemplo, converte unha escuadra media nunha completa.

## Mensaxes

- «Constrúa primeiro un elemento para copiar.» ou «Constrúa primeiro un sólido.» Aínda non hai nada sólido que copiar.
- «Escolla os elementos a copiar.» Todas as caixas **Elementos para copiar** están desmarcadas.
- «Extrude2 non ten sólido que copiar.» Ese elemento fallou ou está suprimido.
- «Fillet1 cambia as arestas ou as paredes do corpo; non se pode copiar. Copie os elementos que crean sólidos (extrusións, revolucións, furados, importacións).» Os redondeos, os chafráns e os vaciados non se poden facer patrón nin espellar: faga primeiro o patrón e despois o redondeo.
- «Aínda non hai corpo que espellar.»

:::note
As copias dun patrón non se poden saltar unha a unha, e un patrón non pode seguir unha curva de esbozo. Os patróns e espellos de esbozo tampouco están construídos aínda: debuxe a xeometría repetida do esbozo a man ou con **Engadir por coordenadas**.
:::
