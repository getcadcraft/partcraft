---
title: Configuraciones y tablas de diseño
summary: Guarde varios tamaños y versiones de una pieza como configuraciones con nombre, guardadas en el archivo de la pieza, con las operaciones activadas o desactivadas en cada una; cámbielas con un clic, impórtelas o expórtelas como tabla de diseño CSV, o cree todas desde la línea de comandos.
keywords: tabla de diseño, configuraciones, configuración, tamaños, familia de piezas, csv, hoja de cálculo, variantes, dirigido por tabla, suprimir, suprimido, desactivar una operación, opciones, con o sin, configurador
from: 17249afb
---

Una **configuración** es un tamaño de la pieza: un conjunto con nombre de valores para sus parámetros. La pieza guarda sus configuraciones en su propio archivo, así que viajan con ella. Una **tabla de diseño** es lo mismo en forma de archivo CSV, con una fila por configuración.

Las configuraciones fijan **parámetros**, así que añada primero esos (véase [Controlar una pieza con parámetros](topic:parameters)). Una configuración guarda los parámetros que son números sencillos; los parámetros calculados a partir de otros (como `area = w * d`) se actualizan solos.

## Guardar una configuración

1. En la pestaña {{ui:Parámetros}}, fije los parámetros para un tamaño de la pieza.
2. Bajo **Configuraciones**, escriba un nombre (por ejemplo `Grande`) y pulse {{ui:Guardar valores actuales}} o Intro ({{key:Enter}}).

La nueva configuración queda marcada como **activa**. Si cambia un parámetro después, indicará **activa, cambiada desde**, para que sepa que la pieza ya no coincide con ella.

## Cambiar, actualizar, renombrar, eliminar

- {{ui:Aplicar}} fija los parámetros a los valores de esa configuración y reconstruye la pieza.
- {{ui:Actualizar}} guarda los valores actuales en esa configuración.
- Para renombrar una, escriba el nuevo nombre en su casilla y pulse {{key:Enter}}.
- {{ui:Eliminar}} quita la configuración. Los parámetros conservan sus valores.

Cada una de estas acciones es un paso: {{key:Mod+Z}} vuelve atrás. Si renombra un parámetro, todas las configuraciones siguen el nuevo nombre; si elimina una, deja de figurar en ellas.

## Activar y desactivar operaciones en una configuración

Una configuración también guarda qué operaciones están desactivadas, de modo que una pieza puede tener versiones **con** y **sin** algo: agujeros de montaje, un chaflán, un resalte.

1. Desactive la operación: haga clic en ella en el historial y luego en {{ui:Suprimir}} en {{ui:Propiedades}}.
2. Guarde la configuración como de costumbre, por ejemplo `Sin agujeros`. Su fila enumera lo que desactiva.
3. Vuelva a activar la operación ({{ui:Quitar supresión}}) y guarde otra configuración, por ejemplo `Con agujeros`.

Una vez que una configuración desactiva alguna operación, aplicar una configuración desactiva sus operaciones y **activa todas las demás**, junto con sus valores de parámetros, en un solo paso. Una configuración guardada antes de desactivar operaciones en ninguna cuenta como «todo activado». {{ui:Actualizar}} guarda las operaciones tal como están ahora, con los valores.

Una pieza cuyas configuraciones desactivan operaciones se guarda como una versión de archivo más reciente: una versión anterior de PartCraft indica que el archivo es de una versión más nueva en lugar de abrirlo sin ellas.

:::note
La tabla de diseño CSV solo contiene valores de parámetros. Importar una tabla sobre una configuración cambia sus valores y conserva las operaciones que desactiva; el `--table` de la línea de comandos solo construye los valores.
:::

La pieza se guarda con sus configuraciones y con la que estaba activa. La pieza se abre con los valores con los que se guardó.

## Importar o exportar una tabla de diseño

Una tabla de diseño es un archivo CSV con una columna por parámetro y una fila por configuración:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

La primera columna puede llamarse `name`, `config` o `configuration`; cada una de las demás debe ser el nombre de un parámetro de la pieza. Las celdas son números, con unidades si lo desea (`8in`). Una celda vacía deja ese parámetro fuera de la fila.

- {{ui:Importar CSV}} añade cada fila como una configuración. Una fila con el nombre de una configuración existente la reemplaza. Importar es un solo paso.
- {{ui:Exportar CSV}} escribe las configuraciones. Si todavía no hay ninguna, escribe una fila con los valores actuales, como punto de partida para una hoja de cálculo.

Un nombre de configuración que una hoja de cálculo leería como fórmula (que empiece por `=`, `+`, `-` o `@`) se escribe con una `'` inicial.

## Todos los tamaños a la vez

{{ui:Paquete de variantes…}} bajo **Configuraciones** crea todas las configuraciones, o unas pocas elegidas, como STEP, IFC, DWG y una vista previa en un único zip, con una tabla de sus parámetros: véase [Crear un paquete de variantes a partir de sus configuraciones](topic:variant-pack).

La herramienta de línea de comandos crea un archivo por cada fila de una tabla de diseño CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporte antes las configuraciones como CSV y, después, pase ese archivo con `--table`. Véase [Scripts y línea de comandos](topic:scripts-and-cli). Una pieza guardada como script conserva sus configuraciones en una línea `configs json …`.
