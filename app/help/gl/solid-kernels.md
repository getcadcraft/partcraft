---
title: O núcleo de malla
summary: Esta versión de PartCraft constrúe cada peza cun núcleo de malla que funciona no seu navegador. Que significa para as formas redondas, os volumes e os ficheiros, como saber que funciona e que elementos esperan por un núcleo exacto.
keywords: núcleo, malla, manifold, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, non construído, sen conexión, webassembly
from: f931645c
---

Un núcleo xeométrico é o motor que converte o historial nun sólido. Esta versión de PartCraft ten un: o **núcleo de malla** (manifold-3d). Funciona no seu ordenador como un pequeno programa WebAssembly e está listo un momento despois de abrir a aplicación. Non se envía nada da súa peza a ningún lugar.

| | Núcleo de malla |
|---|---|
| Formas redondas | Facetas planas. A opción **Curvas** do panel da peza fixa o detalle |
| Volumes e superficies | Do sólido facetado, algo baixos nas pezas redondas |
| Esbozos, extrusión, corte, revolución, buratos, patróns, espello, planos de referencia | Si |
| Redondeo e Chanfro | Nas arestas rectas entre caras planas; os redondeos que se encontran van a inglete |
| Vaciado e Desmoldeo | O vaciado abre as caras planas (espesor de parede exacto); o Desmoldeo inclina as caras planas |
| Exportacións | STL, 3MF, STEP (exacto: as caras redondas escríbense nas súas superficies reais; ou facetado), PDF de debuxo e DXF |
| Vistas de debuxo | Debuxadas a partir das facetas, incluídas as vistas en sección |
| Caras e arestas | Nomeadas e coñecidas por tipo (plana, cilindro, cono, esfera, toro; recta, círculo), tomadas dos esbozos: usan as os espazos de traballo Simulación, Xerativo e Fabricación, Medir, a escolla de elementos e a táboa de buratos |

A etiqueta preto do extremo dereito da barra de estado di **Núcleo de malla** mentres constrúe a peza.

## O que espera por un núcleo exacto

Un núcleo exacto (B-rep) conserva círculos, cilindros e conos verdadeiros, e sobre el constrúense redondeos suaves en calquera aresta, barridos, lofts, superficies, chapa metálica, nervios, varios corpos e a importación STEP con caras curvas conservadas de xeito exacto. (A exportación STEP exacta non espera por el: o núcleo de malla coñece a superficie real de cada cara a partir do esbozo, e a exportación escríbeas.) As primeiras compilacións de laboratorio de PartCraft usaban OpenCascade para iso. A súa licenza (a LGPL) non encaixa nesta versión, na que todas as aplicacións son Apache-2.0 e só usan bibliotecas con licenza permisiva, así que non se inclúe. Non hai ningunha data prevista.

Ata entón eses elementos din **Aínda non construído** cando os escolle: a barra de estado dá o motivo, e as indicacións dos seus botóns rematan con "aínda non construído (necesita un núcleo exacto)". [O que aínda non está construído](topic:not-built-yet) enumera cada un e o que facer en vez diso.

Unha peza feita con eles nunha compilación anterior segue abríndose. Eses elementos quedan no historial marcados como non construídos (pase o punteiro sobre un para ver o motivo), o resto da peza constrúese e, ao gardar, consérvanse sen cambios.

## Caras redondas e curvas

O núcleo de malla debuxa un círculo como un polígono. A opción **Curvas** do panel da peza fixa cantos lados ten un círculo completo; máis lados ven máis suaves e miden máis preto do valor real, pero tardan máis en construírse. Os volumes, as superficies e as distancias de {{ui:Measure}} son do sólido facetado: nun burato ou nun resalte son un pouco menores que os da forma redonda.

## En liña e sen conexión

O núcleo de malla forma parte da descarga da propia aplicación. Para traballar sen conexión, garde PartCraft para uso sen conexión mentres está en liña: escolla {{ui:Save for offline}} na barra da aplicación e espere ata que diga **Listo para usar sen conexión**. Detalles: [Traballo sen conexión](common:offline).
