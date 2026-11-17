---
title: Crear un paquete de variantes a partir de sus configuraciones
summary: Construya todas las configuraciones de una pieza, o unas pocas elegidas, de una vez como STEP, IFC, DWG y una vista previa de cada una, con una tabla de sus parámetros y la pieza como un elemento de biblioteca con sus variantes.
keywords: paquete de variantes, variantes, configuraciones, familia de piezas, exportación por lotes, cada tamaño, step, ifc, dwg, vista previa, tabla, csv, json, biblioteca, configurador, configurador de producto, catálogo, json de elemento
from: 9a6db99f
---

## Qué hará

Entregue **cada tamaño de una pieza a la vez**: un archivo STEP, IFC y DWG y una imagen por cada configuración, una tabla que indica qué es cada una, y un elemento de biblioteca que reúne todas en una misma página.

Necesita antes una pieza con **configuraciones** (véase [Configuraciones y tablas de diseño](topic:design-tables)). Una configuración que desactiva una operación, como una placa con y sin agujeros, se convierte en una variante propia.

## Pasos

1. Abra la pieza. En la pestaña {{ui:Parameters}} (Parámetros), busque **Configuraciones**.
2. Haga clic en {{ui:Variant pack…}} (Paquete de variantes…).
3. Marque las configuraciones que construir (todas vienen marcadas) y los archivos que escribir: STEP, IFC, DWG, una vista previa y el elemento de biblioteca.
4. Haga clic en {{ui:Make the pack}} (Crear el paquete). La barra de estado cuenta las variantes a medida que se construyen; su pieza no cambia.
5. Se descarga un zip: `<part> variants.zip`.

## Qué contiene el zip

| Archivo | Qué es |
|---|---|
| `<name>.step` | La configuración como sólido STEP. |
| `<name>.ifc` | IFC4, un elemento con el cuerpo construido y los parámetros de la pieza como propiedades; el valor es el propio de esa configuración. |
| `<name>.dwg` | Las vistas frontal, superior, derecha e isométrica como hoja de dibujo a tamaño real. |
| `<name>.svg` | Un dibujo de líneas isométrico de ella. |
| `variants.csv`, `variants.json` | La tabla de parámetros: el id, el nombre y el valor de cada parámetro de cada variante, las operaciones que desactiva, sus archivos, su volumen y su tamaño. |
| `<part>.item.json` | La pieza como un elemento de biblioteca con sus variantes (véase más abajo). |
| `README.txt` | Lo que se ha creado, las notas siguientes y lo que no se pudo construir. |

Los archivos se nombran según la configuración. Una configuración que no se puede construir (una operación que no admite esos valores) se deja fuera de los archivos y de la tabla, aparece en el README y en un mensaje tras guardar el zip; las demás se escriben igualmente.

## Conviene saber

- **STEP** es exacto cuando el núcleo exacto está activo en su versión. Sin él, el STEP es facetado (triángulos planos), y el README lo indica.
- **DWG** es la hoja de dibujo, no un modelo 3D. Sus líneas proceden de la malla, así que un borde curvo son muchas líneas cortas.
- **El elemento de biblioteca** contiene un cuerpo y una huella por variante, en los ejes de la biblioteca: Z hacia arriba, el frente hacia −Y, y el punto de inserción en el centro de la parte trasera, abajo. La planta es el rectángulo envolvente de cada variante. Un elemento está limitado a 8 MB, así que una variante muy pesada se convierte en una caja de su tamaño, y el README indica cuántas ocurren.
- La configuración activa de la pieza es la variante predeterminada del elemento.
- Los puertos (puntos de conexión para tuberías y conductos) no se fijan desde PartCraft.

## Poner las variantes en una página de biblioteca

Suba `<part>.item.json` en **Biblioteca › Subir** del sitio. Elija su categoría, su licencia y su línea de crédito, y se convertirá en un elemento de la Biblioteca con sus variantes. En BimCraft, al colocarlo se pregunta qué variante, y Intercambiar ofrece las demás. La página donde los visitantes eligen opciones, ven el 3D y descargan una variante es, por ahora, una **vista previa para el personal**: todavía no está abierta al público.

## Desde la línea de comandos

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nombra las configuraciones, `--formats` admite cualquiera de `step`, `ifc`, `dwg`, `preview`, y `--no-item` omite el elemento de biblioteca. Escribe una carpeta, un zip o ambos, y termina con código 1 cuando una variante no pudo construirse. Véase [Scripts y línea de comandos](topic:scripts-and-cli).
