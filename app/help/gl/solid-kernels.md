---
title: O núcleo de malla
summary: Esta versión de PartCraft constrúe cada peza cun núcleo de malla que funciona no navegador. Que significa para as caras redondas, volumes e ficheiros, como saber que funciona, e que elementos esperan un núcleo exacto.
keywords: núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, non construído, sen conexión, webassembly
from: 68d32d16
---

Un núcleo de xeometría é o motor que converte o seu historial nun sólido. Esta versión de PartCraft ten un: o **núcleo de malla** (manifold-3d). Funciona no seu ordenador como un pequeno programa WebAssembly e está listo un momento despois de abrir a aplicación. Nada da súa peza se envía a ningún lugar.

| | Núcleo de malla |
|---|---|
| Formas redondas | Facetas planas. **Curvas** no panel da peza fixa a finura |
| Volumes e superficies | Do sólido facetado, algo baixos nas pezas redondas |
| Esbozos, extruír, cortar, revolución, buratos, patróns, espellar, planos de referencia | Si |
| Redondeo e Chaflán | En arestas rectas entre caras planas; os redondeos que se atopan rematan en inglete |
| Casca e Desmoldeo | Casca abre caras planas (espesor de parede exacto); Desmoldeo inclina caras planas |
| Exportacións | STL, 3MF, STEP (facetado), PDF de debuxo e DXF |
| Vistas de debuxo | Debuxadas a partir das facetas, incluídas as vistas de sección |
| Caras e arestas | Con nome e coñecidas por tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomadas dos esbozos: os espazos de traballo Simulación, Xerativo e Fabricación, Medir, a selección e a táboa de buratos usan estas |

A etiqueta preto do extremo dereito da barra de estado di **Núcleo de malla** mentres constrúe a peza.

## O que espera por un núcleo exacto

Un núcleo exacto (B-rep) conserva círculos, cilindros e conos verdadeiros, e redondeos suaves en calquera aresta; sobre el constrúense barridos, uniones de perfís, superficies, chapa metálica, nervaduras, varios corpos, importación STEP e exportación STEP exacta. As versións de laboratorio anteriores de PartCraft usaban OpenCascade para iso. A súa licenza (a LGPL) non encaixa nesta publicación, na que cada aplicación é Apache-2.0 e usa só bibliotecas de licenza permisiva, así que non se inclúe. Aquí non hai data prevista.

Ata entón, eses elementos din **Aínda non construído** ao elixilos: a barra de estado dá o motivo, e as indicacións dos seus botóns rematan en "aínda non construído (necesita un núcleo exacto)". [Que aínda non está construído](topic:not-built-yet) enumera cada un con que facer no seu lugar.

Unha peza feita con eles nunha versión anterior segue abríndose. Eses elementos quedan no historial marcados como non construídos (pase o punteiro sobre un para ver o motivo), o resto da peza constrúese, e o gardado consérvaos sen cambios.

## Caras redondas e Curvas

O núcleo de malla debuxa un círculo como un polígono. **Curvas** no panel da peza fixa cantos lados ten un círculo completo; máis lados ven máis suaves e miden máis preto do valor verdadeiro, pero tardan máis en construírse. Os volumes, as superficies e as distancias de {{ui:Medir}} son deste sólido facetado: nun burato ou unha protuberancia son un pouco menores que os da forma redonda.

## En liña e sen conexión

O núcleo de malla forma parte da descarga propia da aplicación. Para traballar sen conexión, garde PartCraft para uso sen conexión mentres está en liña: escolla {{ui:Gardar para usar sen conexión}} na barra da aplicación e espere ata que diga **Preparado para uso sen conexión**. Detalles: [Traballar sen conexión](common:offline).
