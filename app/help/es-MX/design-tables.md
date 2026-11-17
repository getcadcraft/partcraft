---
title: Configuraciones y tablas de diseño
summary: Guarde varios tamaños y versiones de una pieza como configuraciones con nombre, guardadas en el archivo de la pieza, con las operaciones activadas o desactivadas en cada una; cambie entre ellas con un clic, traiga o saque tablas de diseño en CSV, o genérelas todas desde la línea de comandos
keywords: tabla de diseño, configuraciones, configuración, tamaños, familia de piezas, csv, hoja de cálculo, variantes, dirigido por tabla, familia de piezas, suprimir, suprimida, desactivar una operación, opciones, con o sin, configurador
from: 17249afb
---

Una **configuración** es un tamaño de la pieza: un conjunto con nombre de valores para sus parámetros. La pieza guarda sus configuraciones en su propio archivo, así que viajan con ella. Una **tabla de diseño** es lo mismo en un archivo CSV, con una fila por configuración.

Las configuraciones fijan **parámetros**, así que agregue esos primero (vea [Controle una pieza con parámetros](topic:parameters)). Una configuración guarda los parámetros que son números simples; los parámetros calculados a partir de otros (como `area = w * d`) se siguen solos.

## Guarde una configuración

1. En la pestaña {{ui:Parámetros}}, fije los parámetros para un tamaño de la pieza.
2. Bajo **Configuraciones**, escriba un nombre (por ejemplo `Grande`) y pulse {{ui:Guardar valores actuales}} o {{key:Enter}}.

La nueva configuración queda marcada como **activa**. Si cambia un parámetro después, dirá **activa, cambiada desde**, para que sepa que la pieza ya no coincide con ella.

## Cambie, actualice, renombre, elimine

- {{ui:Aplicar}} pone los parámetros con los valores de esa configuración y reconstruye la pieza.
- {{ui:Actualizar}} guarda los valores actuales en esa configuración.
- Para renombrar una, escriba el nuevo nombre en su casilla y pulse {{key:Enter}}.
- {{ui:Eliminar}} quita la configuración. Los parámetros conservan sus valores.

Cada una de estas acciones es un solo paso: {{key:Mod+Z}} regresa. Si renombra un parámetro, todas las configuraciones siguen el nuevo nombre; si elimina una, sale de ellas.

## Active y desactive operaciones en una configuración

Una configuración también guarda qué operaciones están desactivadas, así que una pieza puede tener versiones **con** y **sin** algo: agujeros de montaje, un chaflán, un saliente.

1. Desactive la operación: haga clic en ella en el historial y luego en {{ui:Suprimir}} en {{ui:Propiedades}}.
2. Guarde la configuración como de costumbre, por ejemplo `Sin agujeros`. Su fila enumera lo que desactiva.
3. Vuelva a activar la operación ({{ui:Desactivar supresión}}) y guarde otra configuración, por ejemplo `Con agujeros`.

En cuanto una configuración desactiva una operación, aplicar una configuración desactiva sus operaciones y **activa todas las demás**, junto con sus valores de parámetros, en un solo paso. Una configuración guardada antes de desactivar operaciones en cualquiera cuenta como "todo activado". {{ui:Actualizar}} guarda las operaciones tal como están ahora, con los valores.

Una pieza cuyas configuraciones desactivan operaciones se guarda como una versión de archivo más nueva: un PartCraft anterior dice que el archivo es de una versión más nueva en lugar de abrirlo sin ellas.

:::note
La tabla de diseño en CSV solo lleva valores de parámetros. Importar una tabla sobre una configuración cambia sus valores y conserva las operaciones que desactiva; la opción `--table` de la línea de comandos construye solo los valores.
:::

El archivo de la pieza se guarda con las configuraciones y con la que estaba activa. La pieza se abre con los valores con los que se guardó.

## Traiga o saque una tabla de diseño

Una tabla de diseño es un archivo CSV con una columna por parámetro y una fila por configuración:

```
name,width,thick,bolt
pequeña,100,6,6.6
mediana,140,8,8.5
grande,200,12,13
```

La primera columna puede llamarse `name`, `config` o `configuration`; cada una de las demás debe ser el nombre de un parámetro de la pieza. Las celdas son números, con unidades si lo desea (`8in`). Una celda vacía deja ese parámetro fuera de la fila.

- {{ui:Importar CSV}} agrega cada fila como una configuración. Una fila con el nombre de una configuración existente la reemplaza. Importar es un solo paso.
- {{ui:Exportar CSV}} escribe las configuraciones. Si todavía no hay ninguna, escribe una fila con los valores actuales, como punto de partida para una hoja de cálculo.

Un nombre de configuración que una hoja de cálculo leería como fórmula (que empiece con `=`, `+`, `-` o `@`) se escribe con un `'` al inicio.

## Todos los tamaños a la vez

{{ui:Paquete de variantes…}} bajo **Configuraciones** construye todas las configuraciones, o unas cuantas elegidas, como STEP, IFC, DWG y una vista previa en un zip, con una tabla de sus parámetros: vea [Haga un paquete de variantes con sus configuraciones](topic:variant-pack).

La herramienta de línea de comandos construye un archivo por cada fila de una tabla de diseño en CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporte primero las configuraciones como CSV, y luego pase ese archivo con `--table`. Vea [Scripts y línea de comandos](topic:scripts-and-cli). Una pieza guardada como script conserva sus configuraciones en una línea `configs json …`.
