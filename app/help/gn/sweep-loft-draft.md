---
title: Barrido, loft ha desmoldeo
summary: Barrido ojapo perfil cerrado trayectoria rupi curvas de boceto térã aristas del modelo rupi, loft ojapo secciones planos diferentes rupi, ha desmoldeo caras rehe; opciones, resultados exactos ha mensajes ndive.
keywords: barrido, cuerpo barrido, corte barrido, caño, trayectoria, loft, cuerpo loft, secciones de mezcla, reglado, desmoldeo, ángulo de desmoldeo, caras cónicas, plano neutro, dirección de tiro, moldeo
from: 9d637981
---

:::note
**Ko versión-pe** barrido ha loft ndaipóri ojapo: necesita núcleo geométrico exacto, ha PartCraft ko versión-pe ndoguerekoi chupe. [Lo todavía ndojapóiva](topic:not-built-yet) he'ẽ mboriahu ojapo; Barrido ha Loft secciones ojehecha umi núcleo exacto ndive. **Desmoldeo oñemoĩ porã** caras planas rehe: núcleo de malla ojapo, núcleo exacto ndive mbohapy resultado.
:::

Mbohapy ojoguĩ menú {{ui:Más}} grupo Elementos-gui (ver [El núcleo de malla](topic:solid-kernels)). Cada peteĩ ohupyty material, térã ojehepyme, térã **Intersección** rupi superposición ohendu, térã **Cuerpo nuevo** ojapo. (Barrido ha loft: **Operación** panel-pe.)

## Barrido

Barrido omove perfil cerrado trayectoria rupi: caños, mangos, alambre resortes, rieles.

1. Ojapo **trayectoria** peteĩ boceto-pe: líneas ha arcos extremo rupi ojoaju (térã eiporu aristas del modelo, ha'e aravo).
2. Ojapo **perfil** ambue boceto-pe, cuyo plano trayectoria peteĩ extremo rupi oho, por ejemplo círculo plano superior-pe trayectoria inicio-pe, plano frontal-pe ojapo.
3. Eiporavo perfil boceto ha emoĩ {{ui:Más}}, upe rire {{ui:Barrido}}. Boceto oikóva ambue de'ỹva trayectoria oñemoĩ.

Panel-pe:

| Ajuste | Mba'épa ohupyty |
|---|---|
| **Trayectoria** | Eiporavo bocetos oĩva trayectoria (heta boceto extremo rupi ojoaju peteĩ trayectoria 3D-pe); **Elegir aristas del modelo** pieza aristas oñemoĩ |
| **Orientación** | Trayectoria rehe (predeterminado), Frenet, Fija (seccionés perfil ndive paralelas), Mantene peteĩ dirección, Curva guía rehe |
| **Escala final** | Perfil ojeipe'a térã ojeipe'a lineal tamaño-gui fin-pe (1 = ko'ẽ) |

Trayectoria esquina filosa ojerokẽ inglete rupi. Círculo radio 5 línea 100 mm rehe barrido cilindro de exactamente 2500π mm³; radio 50 cuarto arco rehe, cuarto toro 625π² mm³.

## Loft

Loft mezcla dos térã heta seccion planos diferentes rupi.

1. Ojapo peteĩ peteĩ sección boceto-pe (peteĩ bucle cerrado), planos base-pe, planos de referencia-pe (ver [Planos, ejes y puntos de referencia](topic:reference-geometry)) térã caras-pe.
2. Eiporavo {{ui:Más}}, upe rire {{ui:Loft}}. Boceto de peteĩ bucle ndojeporúiva ojapo seccion, historia orden-pe.

Panel ohechauka seccionés orden-pe (**Arriba** ohendu, **Quitar** peteĩ ojejoavy); **Agregar un boceto** ambue ohupyty, **Seleccionar una cara** pieza cara plana ohupyty. **Reglado** seccionés ryépe caras planas ojapo, mezcla porã'ỹ. Cuadrado 40 mm ha cuadrado 20 mm ryépe 30 mm altura: exactamente 28000 mm³ tronco.

Seccionés lados heta'ỹva (cuadrado triángulo-pe) OpenCascade ojoaju, caras laterales ojeity ikatu; función aviso. Ojapo seccionés lados igual, esquinas ojoguáva ndive, hag'ue resultado porã.

### Rieles guía

Rieles guía curvas, loft lados primera sección-gui última-peve ojeheja hag'ue, panza, cintura térã ensanche ro'ojapo.

1. Ojapo mokõi térã más riel: curvas abiertas (líneas, arcos, splines) primera sección-gui última-peve oho, sección peteĩ jey ojoaju. Boceto peteĩ-pe heta riel oikove; cadena separada peteĩ peteĩ riel. Ojapo riel ojoaju porã sección ndive: extremo puntos ndive ojoaju.
2. Panel Loft-pe, **Rieles guía** rembe, marcá bocetos oguerekóva térã emboguejy {{ui:Elegir aristas del modelo como guías}} ha emboguejy pieza aristas rehe ({{key:Esc}} ojeporu).

Rieles ndive loft ha Gordon superficie seccionés ha rieles ryépe (ver [Superficies a través de una red de curvas](topic:gordon-surfaces)), extremo plano rehe ojoaju sólido-pe. Panel ohechauka mávapa ojoaju porã. Cada sección boceto ojapova (punto térã cara ndojoapýi riel); **Reglado** ndoĩ. Riel 0.01 mm-gui mamo sección ndojepeteĩ, brecha ohechauka.

Comprobado: círculos mokõi (20 mm ha 10 mm 40 mm ryépe) rieles recto irundy ndive, cono tronco volumen 0.000002 % ryépe; arcos 5 mm sobresalen barril, riel 0.00001 mm ryépe.

## Desmoldeo

Desmoldeo caras ojapo, pieza molde-gui oho hag'ue.

1. Eiporavo {{ui:Más}}, upe rire {{ui:Desmoldeo}} (térã {{key:Shift}} ha clic caras rehe mboyve). Mba'eve ndaiporavói, modo selección-pe: clic cada cara rehe, upe rire {{ui:Listo}}.
2. Fija **Ángulo (°)**, **Plano neutro** (cara tamaño oiko), ha **Dirección de tiro** (predeterminado plano neutro normal).

Ángulo positivo cara tiro rupi adentro mboguejy, material ohejapo; negativo ohupyty. Plano neutro Plano superior-gui oñepyrũ. Ko versión-pe caras planas añoite ojeporu desmoldeo; cilindro, cono térã cara libre ohechauka "Desmoldeo: ko versión-pe caras planas añoite (núcleo de malla ojapo)." Bloque 100 × 100 × 50 irundy lados 5° base rehe: tronco exactamente h/3·(a² + b² + ab), b = a − 2h·tan 5°.

## Mensajes

| Mensaje | Mba'éichapa ejapo |
|---|---|
| "El plano del perfil tiene que pasar por un extremo de la trayectoria …" | Perfil boceto trayectoria inicio (térã fin) rehe mboguejy |
| "La trayectoria tiene un hueco: sus curvas no se unen de extremo a extremo …" | Trayectoria curvas ojoaju; bocetos separados extremo exactamente ojoaju |
| "Una sección de loft necesita exactamente un bucle cerrado" | Boceto ojehea térã bucle de más ojejoavy |
| "… no puede desmoldearse respecto de este plano neutro …" | Cara paralela plano neutro-gui térã ndojoai |
| "Desmoldeo: ko versión-pe caras planas añoite (núcleo de malla ojapo)." | Cara elegida curva. Ojejoavy; caras planas añoite desmoldeá |

:::note
**Todavía ndojapóiva:** barrido torcido, barrido pared delgada ha superficie, rieles guía loft ha tangencia extremo, desmoldeo cilindro, cono ha caras libres.
:::
