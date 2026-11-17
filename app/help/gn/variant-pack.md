---
title: Ojapo paquete de variantes configuraciones-gui
summary: Ojapo cada configuración pieza-pe, walo peteĩ mokõi, peteĩ jey-pe STEP, IFC, DWG ha peteĩ vista previa cada umi, tabla parámetro-gui ha pieza elemento biblioteca-pe variantes-ndive.
keywords: paquete de variantes, variantes, configuraciones, familia de piezas, exportación por lotes, cada tamaño, step, ifc, dwg, vista previa, tabla, csv, json, biblioteca, configurador, configurador de producto, catálogo, item json
from: 9a6db99f
---

## Mba'e ejapóta

Eguereko **cada tamaño pieza-pe jeytépe**: peteĩ archivo STEP, IFC ha DWG, ha imagen cada configuración-pe, tabla ohechauka mba'éichapa peteĩ-peteĩ, ha elemento biblioteca oñemoĩ umi variante peteĩ página-pe.

Pe pieza ha **configuraciones** oiko rire ([Configuraciones ha tablas de diseño](topic:design-tables)). Configuración ojepe'a elemento, ejemplo placa umi agujero ndive ha ndaipo, oĩ ha'e hembiapo variante.

## Tapykue

1. Ejeʼe pieza. Pestaña {{ui:Parámetros}}-pe, eheka **Configuraciones**.
2. Emarka {{ui:Paquete de variantes…}}.
3. Emarka configuraciones ojapóva (opa marcado) ha archivo oñeguardáva: STEP, IFC, DWG, vista previa ha elemento biblioteca.
4. Emarka {{ui:Ojapo paquete}}. Estado línea ohechauka variantes ojapo jave; nde pieza ndojambuéi.
5. Peteĩ zip oñemboguejy: `<pieza> variantes.zip`.

## Mba'e oĩ zip-pe

| Archivo | Mba'épa hague |
|---|---|
| `<nombre>.step` | Configuración STEP sólido-pe. |
| `<nombre>.ifc` | IFC4, peteĩ elemento ojapóva cuerpo ndive ha pieza parámetro propiedades-pe; valor configuración hendápe. |
| `<nombre>.dwg` | Frente, superior, derecha ha isométrica vista plano hoja-pe tamaño tuichaiterei. |
| `<nombre>.svg` | Isométrica línea imagen. |
| `variants.csv`, `variants.json` | Parámetro tabla: cada variante id, nombre ha parámetro valor, elemento ojapo'ỹva, archivo, volumen ha tamaño. |
| `<pieza>.item.json` | Pieza peteĩ elemento biblioteca-pe variantes ndive (ehecha umi ñemboʼe). |
| `README.txt` | Mba'e ojapo, ñemboʼe, ha mba'e ndojapói. |

Archivo oñemboguejy configuración-pe. Configuración ndojapóiva (elemento ndaikatúi ojapo valor ojojoaʼỹva) ndoúi archivo ha tabla-pe, README-pe ha zip oñeguardaʼỹ rire mensaje-pe ojeʼe; ambue oñemoʼã.

## Ojojoaʼỹva

- **STEP** exacto oĩ tuichaiterei build-pe núcleo exacto oiporu jave. Ndaipóri, STEP facetado (triángulo plano), README ohechauka.
- **DWG** ha plano hoja, ndaha'éi 3D modelo. Línea oñemboguejy malla-gui, upévare curva borde ha heta línea pyʼỹi.
- **Elemento biblioteca** oguereko cuerpo peteĩ ha huella peteĩ variante-pe, biblioteca ejes-pe: Z arriba, frente −Y rehe, inserción punto mbytépe espalda abajo. Plano ha cada variante rectángulo. Elemento 8 MB peve; variante pesado ha caja tamaño-pe ojejapo, README ohechauka cuánto.
- Pieza configuración activa ha elemento variante defecto.
- Puertos (cañerías ha conductos conexión punto) ndojejapói PartCraft-pe.

## Variantes biblioteca página-pe

Emboguejy `<pieza>.item.json` **Biblioteca › Subir** sitio-pe. Ejeʼe categoría, licencia ha nde crédito, ha oñemoĩ Biblioteca elemento variantes ndive. BimCraft-pe, oñemoĩ jave ohenói mba'e variante, ha Cambiar ambue ohechauka. Página umi visitante oiporu opcionesgui, 3D ohecha ha variante oguahẽ, **vista previa del personal** ko momento: ndaipóri público-pe.

## Línea comando-gui

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` configuraciones héra, `--formats` oiporu `step`, `ifc`, `dwg`, `preview`; `--no-item` elemento biblioteca ndoikéi. Carpeta, zip térã umi mokõi ojapo, ha 1 oguejy variante ndojapóiva jave. Ehecha [Scripts ha línea comando](topic:scripts-and-cli).
