---
title: Combinar, mover e escalar corpos; patróns de traxectoria
summary: Cree corpos separados e logo únaos, córtelos ou intersecándoos, móvaos, xírelos, aliñeos ou cópieos, escálelos de xeito uniforme ou por X, Y e Z, e copie elementos ou corpos ao longo dunha curva.
keywords: corpo, corpos, multicorpo, corpo novo, combinar, booleana, unir, cortar, intersecar, restar, unión, manter ferramentas, mover corpo, copiar corpo, xirar corpo, aliñar, trasladar, escalar, escala non uniforme, estirar, afín, patrón de traxectoria, patrón ao longo dunha curva, matriz ao longo dunha traxectoria
from: 6b1ea820
---

:::note
**Non construído aínda nesta versión.** Traballar con varios corpos precisa un núcleo xeométrico exacto, que esta versión de PartCraft non ten: constrúe todas as pezas co núcleo de malla. [O que aínda non está construído](topic:not-built-yet) explica o que facer no seu lugar. O resto desta páxina descrebe o funcionamento cun núcleo exacto.
:::

Unha peza pode conter máis dun sólido. Cada sólido separado é un **corpo**. A maioría dos elementos engaden ou cortan de cada corpo que tocan; as ferramentas desta páxina traballan con corpos completos que vostede escolle. Están no menú {{ui:Máis}} do grupo Elementos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}} e {{ui:Patrón de traxectoria}}. Todas precisan o núcleo exacto (OpenCascade).

## Facer un corpo separado

Estableza a **Operación** dunha extrusión ou dunha revolución como **Corpo novo** no seu panel dereito (os barridos e as uniones de perfís tamén o teñen). O sólido novo queda separado aínda onde solape cos demais. **Intersecar** conserva só a superposición da forma nova co que xa hai.

Os corpos reciben o nome do elemento que os creou: « Extrude2 ». Unha copia recibe o nome do orixinal e do elemento que a copiou: « Extrude2, copy 1 of Move1 ». Os nomes non cambian ao modificar as medidas anteriores, así que os elementos que usan un corpo seguen atopándoo. Con dous ou máis corpos, o panel da peza (prema un espazo baleiro) lístaos cos seus volumes.

## Cambiar o nome ou ocultar un corpo

Prema un espazo baleiro na vista para ver o panel da peza. A súa lista de corpos (que se mostra cando a peza ten dous ou máis) ten unha caixa de nome e un botón {{ui:Ocultar}} en cada fila.

- **Cambiar o nome:** escriba un nome novo na caixa e prema {{key:Enter}} ou faga clic fóra. Todos os paneis o usan entón: Combinar, Mover corpo, os patróns. Borre a caixa para volver ao nome do elemento que creou o corpo.
- **Ocultar:** prema {{ui:Ocultar}} na súa fila. O corpo sae da vista e os clics pasan a través del, así que pode escoller caras que queden detrás. {{ui:Mostrar}} o devolve; {{ui:Mostrar todos}} devolve todos os corpos ocultos.

Ocultar só cambia a vista. Un corpo oculto segue construído, conta no volume e nas medicións, e gárdase nas exportacións STL, 3MF e STEP. Os nomes e os corpos ocultos gárdanse no ficheiro da peza, e cada cambio é un paso de {{ui:Desfacer}}.

## Combinar corpos

1. {{key:Shift}}+clic nunha cara do **corpo destino**, e despois nunha cara de cada **corpo ferramenta**.
2. Escolla {{ui:Máis}} e despois {{ui:Combinar}}.
3. No panel dereito escolla a **Operación**:

| Operación | Resultado |
|---|---|
| Unir | O destino e as ferramentas fanse un só corpo |
| Cortar | As ferramentas se retiran do destino |
| Intersecar | Só se conserva o que comparten o destino e todas as ferramentas |

O **corpo destino** é o que conserva o seu nome. Marque ou desmarque os **Corpos ferramenta**, ou use **Escoller na vista** e prema as súas caras. **Manter os corpos ferramenta** deixa as ferramentas no seu sitio tamén (útil para un molde e o seu núcleo). Se un corpo ferramenta xa foi usado por un Combinar anterior, o panel avísao en lugar de escoller outro corpo.

## Mover ou copiar un corpo

1. Escolla {{ui:Máis}} e despois {{ui:Mover corpo}}. O corpo máis novo vén marcado; marque os que quere mover.
2. Escolla o tipo de **Movemento**:

| Movemento | Que define |
|---|---|
| Trasladar | **ΔX**, **ΔY**, **ΔZ** en milímetros |
| Punto a punto | **Desde** e **Ata**: prema preto do extremo dunha aresta, dun elemento de punto ou dun punto dunha cara |
| Xirar arredor dun eixo | **Eixo** (X, Y, Z, un elemento de eixo, ou **Escoller**: unha aresta recta, un círculo ou un cilindro) e **Ángulo (°)** |
| Aliñar unha cara a unha cara ou a un plano | **Cara a mover** (unha cara plana do corpo) e **Sobre** (unha cara plana ou un plano) |

Aliñar xira o corpo para que a súa cara quede sobre a outra cara, cara a cara, e logo o desprazan só ao longo da normal desa cara. **Mesma dirección** xírao no sentido contrario. **Copiar** conserva o orixinal e engade a copia movida como corpo novo.

## Escalar un corpo

1. Escolla {{ui:Máis}} e despois {{ui:Escalar corpo}}, e marque os corpos.
2. Escriba unha **Escala**, ou desmarque **Uniforme** e escriba **Escala X**, **Escala Y** e **Escala Z** (ao longo dos eixos do mundo).
3. **Arredor de** é o punto que queda no seu sitio: o centro da caixa dos corpos, ou un punto que escolla.

Unha escala uniforme é exacta. Unha escala non uniforme converte os círculos en elipses: un cilindro pasa a ser un cilindro elíptico, que ningunha superficie analítica pode manter. Así, as caras curvas pasan a ser superficies B-spline que se manteñen a menos de 0,0000004 mm da forma exacta; as caras planas e as arestas rectas seguen exactas. O panel indica o que pasou. Os factores de escala teñen que ser maiores que cero (para espellar use {{ui:Espellar}} no seu lugar).

## Copiar ao longo dunha traxectoria

1. Seleccione o elemento que quere copiar no historial, ou non seleccione nada para copiar o corpo máis novo.
2. Escolla {{ui:Máis}} e despois {{ui:Patrón de traxectoria}}. O esbozo máis novo sen usar tómase como traxectoria.
3. No panel dereito estableza:

| Axuste | Que fai |
|---|---|
| **Copiar** | Corpos (cada copia un corpo novo) ou Elementos (unidos ou cortados como o orixinal) |
| **Traxectoria** | Marque esbozos, ou **Escoller arestas do modelo**; as partes teñen que unirse de extremo a extremo |
| **Cantidade** | Total, incluído o orixinal |
| **Espazamento** | Igual (repartido ata o final dunha traxectoria aberta, ou por toda a pechada) ou unha distancia fixa |
| **Orientación** | Seguir a traxectoria (cada copia xírase con ela) ou Fixa (as copias quedan paralelas) |
| **Inverter o sentido** | Vai no sentido contrario pola traxectoria |

As copias comezan onde a traxectoria pasa máis preto do orixinal e distribúense por lonxitude ao longo da curva.

Os patróns {{ui:Lineal}} e {{ui:Circular}} tamén poden copiar corpos: marque **Copiar corpos** no seu panel e escolla os corpos; cada copia é un corpo novo.

## Límites

- Os corpos precisan o núcleo exacto; o núcleo de malla mantén un só sólido e indícao.
- Unha escala non uniforme converte as caras curvas en aproximacións B-spline próximas (vexa arriba), non en cilindros ou conos exactos; as superficies de desprazamento aínda non se poden escalar así.
- Seguir a traxectoria nunha curva 3D que se retorce leva a copia sen retorcela; nas traxectorias planas o xiro é exacto.
- Combinar traballa só con sólidos. Os corpos de superficie únense con {{ui:Coser}}.

Vexa tamén [Planos, eixos e puntos de referencia](topic:reference-geometry) para puntos e planos « entre obxectos », e [Elementos de patrón e espello](topic:patterns-mirror).
