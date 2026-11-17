---
title: Formatos de ficheiro
summary: Cada ficheiro que PartCraft le e escribe, con extensións, unidades, eixos e o que conserva ou perde cada un.
keywords: formatos, tipos de ficheiro, extensións, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malla, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unidades, z cara arriba
from: 4d0ecbee
---

| Formato | Extensión | Abrir | Gardar ou exportar | Unidades | Eixo cara arriba | Conserva |
|---|---|---|---|---|---|---|
| Peza de PartCraft | `.partcraft.json` | Si | {{ui:Gardar}} | mm | Y | O historial completo: esbozos, relacións, cotas, elementos, supresión, retroceso, axuste de curvas, axustes do debuxo e GD&T, texto STEP importado nunha versión anterior |
| Conxunto de PartCraft | `.partcraft-asm.json` | Si | {{ui:Gardar}} nun conxunto | mm | Y | Cada peza (incluída), as copias e as súas posicións, as uniones |
| STL (binario ou texto) | `.stl` | Si, como corpo sólido: [Abrir un STL, OBJ ou 3MF](topic:open-meshes) | {{ui:STL, para impresión 3D}} | mm (pregúntase ao abrir) | Z | Só os triángulos do sólido |
| 3MF | `.3mf` | Si, como corpo sólido | {{ui:3MF, para impresión 3D}} | mm (indicado no ficheiro) | Z | O sólido como un único obxecto de malla |
| OBJ | `.obj` | Si, como corpo sólido (só caras) | Non | pregúntase ao abrir | Z ou Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Si, como corpo sólido lido como triángulos (as caras curvas debuxanse como facetas; as caras planas, cilindros, cones, esferas e toros do ficheiro consérvanse para a exportación exacta): [Abrir un ficheiro STEP](topic:import-step) | | mm (segundo a unidade do ficheiro) | Z, ou Y se o indica | Os sólidos e corpos de superficie, conxuntos con cada peza no seu sitio; sen cores, nomes, árbore do conxunto nin PMI |
| `.3dm` | `.3dm` | Si, como un corpo sólido a partir das súas mallas e superficies (mallas de render gardadas, se non, teselado): [Abrir un modelo .3dm](topic:open-3dm-files) | | Segundo a unidade do ficheiro | Z, ou Y se o indica | Mallas, polisuperficies, extrusións e colocacións de bloques como un corpo; sen curvas, cores, capas nin nomes |
| STEP AP242, exacto | `.step` | | {{ui:STEP AP242 (sólido exacto)}} | mm | Z | Un sólido exacto: caras planas, cilindros, cones, esferas e toros nas súas superficies verdadeiras, círculos e liñas verdadeiros como arestas; os lados en spline, as roscas modeladas, os corpos de ficheiros de malla e as caras spline dun ficheiro STEP quedan como facetas. O STEP para usar noutros programas de CAD e CAM |
| STEP AP214, exacto | `.step` | | {{ui:STEP AP214 (sólido exacto)}} | mm | Z | O mesmo sólido exacto no esquema AP214 máis antigo, para programas que só len ese |
| STEP AP242, facetado | `.step` | | {{ui:STEP (facetado, núcleo de malla)}} | mm | Y | Un sólido pechado de caras planas: as superficies redondas como facetas. Para un programa que rexeita o ficheiro exacto |
| STEP AP214, facetado | `.step` | | {{ui:STEP AP214 (facetado, núcleo de malla)}} | mm | Y | O mesmo sólido no esquema AP214 máis antigo, para programas que só len ese |
| Paquete USD | `.usdz` | Non | {{ui:Paquete USD (.usdz)}} | m | Z | O sólido co seu material, volume e masa; un conxunto con cada peza unha vez e cada copia colocada: [Exportar como USD](topic:usd) |
| IFC 4 | `.ifc` | Non | {{ui:IFC 4 (con todas as propiedades)}} | mm | Z | A forma como triángulos, o material, cada parámetro, o cadro de rótulo, as cantidades; as pezas dun conxunto como tipos e as súas copias colocadas |
| DXF R12, esbozo | `.dxf` | Non | {{ui:DXF do esbozo ou da cara plana}} cun esbozo seleccionado | mm | x, y propios do esbozo | Liñas, arcos e círculos verdadeiros, puntos; capas PROFILE, CONSTRUCTION, POINTS |
| DXF R12, cara | `.dxf` | Non | {{ui:DXF do esbozo ou da cara plana}} cunha cara plana seleccionada | mm | x, y propios da cara | Os contornos da cara: os orificios redondos como círculos verdadeiros, o resto como polilíneas pechadas (as arestas redondas como facetas) |
| Debuxo PDF | `.pdf` | Non | {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}} | mm nunha folla A3 | | Vistas de alzado, planta, dereita, isométrica, sección e detalle debuxadas a partir de facetas, liñas ocultas, dimensións totais, símbolos GD&T, cadro de rótulo |

## Os ficheiros de PartCraft

Ambos son texto simple (JSON). O sólido nunca se almacena: PartCraft reconstrúeo a partir do historial, así que os ficheiros quedan pequenos e sempre coinciden co historial.

- Cada ficheiro ten un número de versión. Esta versión escribe cada ficheiro de peza coa versión máis baixa que contén o que usa (de 2 a 5; un corpo feito dunha malla necesita a 5) e abre todas as versións anteriores. Un ficheiro dun PartCraft máis novo recházase cunha mensaxe que indica ambas as versións.
- Cada valor compróbase ao abrir un ficheiro. Os nomes perden os caracteres de control; os números fóra de rango, as referencias a elementos que faltan e os tipos de elemento descoñecidos recházanse cun motivo simple.
- Non edite estes ficheiros a man salvo que coñeza o formato. Un ficheiro que non pase as comprobacións non se abrirá.
- Unha peza cun sólido STEP grande importado nunha versión anterior pode superar os 50 MB, o máximo que PartCraft abre como ficheiro de peza (consulte [Solución de problemas](topic:troubleshooting#file-problems)).

## Facetas e exactitude

STL e 3MF están sempre formados por facetas, segundo o axuste **Curvas**, e tamén o DXF de cara, salvo nos orificios redondos, que son círculos verdadeiros. O DXF de esbozo ten arcos e círculos verdadeiros, porque procede directamente do esbozo. Esta versión constrúe todas as pezas co núcleo de malla, así que as vistas do debuxo (incluídas as seccións) tamén son de facetas. A exportación STEP exacta é a excepción: o núcleo coñece a superficie verdadeira de cada cara a partir do esbozo (ou do ficheiro STEP do que se abriu un corpo), así que as caras redondas escríbense como cilindros, cones, esferas e toros verdadeiros, sexa cal sexa o valor de **Curvas** (consulte [Exportar para impresión, STEP e DXF](topic:export-files#for-other-cad-programs-step)).

## Non admitido nesta versión

| Formato | Estado |
|---|---|
| glTF, IGES, Parasolid, ACIS (entrada ou saída); exportación OBJ | Non construído |
| DWG | Escríbeo só [o paquete de variantes](topic:variant-pack), como folla de debuxo de cada configuración. Non se le, e non hai outra exportación. Exporte DXF; todos os programas de CAD abren DXF R12 |
| STEP de conxunto e o debuxo dun conxunto | Aínda non construído. Exporte cada peza como STEP exacto; STL, 3MF e a lista de materiais exportan desde un conxunto |
| Ficheiros nativos de pezas e conxuntos doutros programas (salvo `.3dm`, que se abre como un corpo) | Non construído |

Consulte [O que aínda non se constrúe](topic:not-built-yet).
