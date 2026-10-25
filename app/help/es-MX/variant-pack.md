---
title: Crear un paquete de variantes a partir de sus configuraciones
summary: Genere todas las configuraciones de una pieza, o algunas elegidas, de una sola vez como STEP, IFC, DWG y una vista previa de cada una, con una tabla de sus parámetros y la pieza como un solo elemento de biblioteca con sus variantes.
keywords: paquete de variantes, variantes, configuraciones, familia de piezas, exportación por lotes, todas las medidas, step, ifc, dwg, vista previa, tabla, csv, json, biblioteca, configurador, configurador de producto, catálogo, item json
from: 27d66138
---

## Qué hará

Entregue **todas las medidas de una pieza a la vez**: un archivo STEP, IFC y DWG y una imagen por cada configuración, una tabla que dice qué es cada una y un elemento de biblioteca que las reúne en una sola página.

Primero necesita una pieza con **configuraciones** (vea [Configuraciones y tablas de diseño](topic:design-tables)). Una configuración que desactiva una operación, como una placa con y sin orificios, se convierte en su propia variante.

## Pasos

1. Abra la pieza. En la pestaña {{ui:Parámetros}}, busque **Configuraciones**.
2. Haga clic en {{ui:Paquete de variantes…}}.
3. Marque las configuraciones que se generarán (todas vienen marcadas) y los archivos que se escribirán: STEP, IFC, DWG, una vista previa y el elemento de biblioteca.
4. Haga clic en {{ui:Crear el paquete}}. La línea de estado cuenta las variantes a medida que se generan; su pieza no cambia.
5. Se descarga un zip: `<pieza> variants.zip`.

## Qué hay en el zip

| Archivo | Qué es |
|---|---|
| `<nombre>.step` | La configuración como sólido STEP. |
| `<nombre>.ifc` | IFC4, un elemento con el cuerpo generado y los parámetros de la pieza como propiedades; el valor es el propio de esa configuración. |
| `<nombre>.dwg` | Las vistas frontal, superior, derecha e isométrica como hoja de dibujo a tamaño real. |
| `<nombre>.svg` | Una imagen isométrica de líneas. |
| `variants.csv`, `variants.json` | La tabla de parámetros: id, nombre y valor de cada parámetro de cada variante, las operaciones que desactiva, sus archivos, su volumen y su tamaño. |
| `<pieza>.item.json` | La pieza como un solo elemento de biblioteca con sus variantes (vea abajo). |
| `README.txt` | Qué se hizo, las notas siguientes y lo que no se generó. |

Los archivos llevan el nombre de la configuración. Una configuración que no se puede generar (una operación que no puede hacerse con esos valores) queda fuera de los archivos y de la tabla, se menciona en el README y en un mensaje después de guardar el zip; las demás se escriben igualmente.

## Conviene saber

- **STEP** es exacto cuando el núcleo exacto está activo en su versión. Sin él, el STEP es facetado (triángulos planos) y el README lo dice.
- **DWG** es la hoja de dibujo, no un modelo 3D. Sus líneas salen de la malla, así que una arista curva son muchas líneas cortas.
- **El elemento de biblioteca** lleva un cuerpo y una huella por variante, en los ejes de la biblioteca: Z hacia arriba, el frente hacia −Y y el punto de inserción en el centro de la parte posterior, abajo. La planta es el rectángulo envolvente de cada variante. Un elemento está limitado a 8 MB, así que una variante muy pesada se convierte en una caja de su tamaño y el README dice cuántas.
- La configuración activa de la pieza es la variante predeterminada del elemento.
- Los puertos (puntos de conexión de tuberías y ductos) no se definen desde PartCraft.

## Poner las variantes en una página de biblioteca

Suba `<pieza>.item.json` en **Biblioteca › Subir**, en el sitio. Elija su categoría, licencia y línea de crédito, y se convierte en un elemento de LibraryCraft con sus variantes. En BimCraft, al colocarlo se pregunta qué variante, y Cambiar ofrece las demás. La página donde los visitantes eligen opciones, ven el 3D y descargan una variante es por ahora una **vista previa para el personal**: todavía no está abierta al público.

## Desde la línea de comandos

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nombra las configuraciones, `--formats` cualquiera de `step`, `ifc`, `dwg`, `preview`, y `--no-item` omite el elemento de biblioteca. Escribe una carpeta, un zip o ambos y termina con código 1 si alguna variante no pudo generarse. Vea [Scripts y línea de comandos](topic:scripts-and-cli).
