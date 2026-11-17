---
title: Usar PartCraft con un asistente de IA
summary: Deje que su propio asistente de IA o un script trabaje con la pieza abierta: leer sus operaciones, parámetros y masa, cambiar un parámetro y reconstruir, ejecutar un script, exportar y guardar. Desactivado hasta que lo active.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, parámetros, propiedades de masa, stl, step, 3mf, permisos, desconectar, actividad, carpetas
from: e66d3470
---

## Qué aprenderá

Cómo permitir que un asistente de IA (o un script que haya escrito usted) examine la pieza abierta, cambie sus parámetros, ejecute un script y la exporte, y cómo decide qué puede tocar.

PartCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). PartCraft solo le proporciona herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Configuración}} (el engranaje de la barra de aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:PartCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen PartCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer. **Leer** viene marcado al principio; marque las demás solo cuando las necesite.
4. Para permitir que exporte y guarde en una carpeta, elija {{ui:Añadir una carpeta…}} en **Carpetas que puede usar** y seleccione la carpeta en el diálogo de Studio.

Los asistentes se conectan a través de **CadCraft Studio** en su equipo: Studio muestra la dirección y el token que debe pegar en el asistente. Una pestaña del navegador no puede abrir una conexión para un asistente.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `part_describe`, `features_list` | Leer | Las operaciones en orden con lo que se construyó y lo que falló, el material, el volumen y el tamaño del sólido |
| `params_list` | Leer | Los parámetros y cada número que puede gobernar una ecuación, con sus valores |
| `mass_properties` | Leer | Volumen, área, centro de masa, la inercia respecto a él; la masa cuando la pieza tiene material |
| `param_set` | Editar | Fija un parámetro o el número de una operación y reconstruye. Un paso que se puede deshacer |
| `script_run` | Editar | Ejecuta un script CraftScript, Lua o Python como lo hace el espacio de trabajo {{ui:Script}}: aislado, sin archivos ni red. La pieza no cambia |
| `part_export` | Exportar | STL, 3MF, STEP u OpenUSD (.usdz, .usda, .usdc), tal como los escribe {{ui:File}} › {{ui:Exportar}} |
| `link_push` | Editar | Actualiza un modelo vinculado desde otro programa (véase [Mantener un modelo .3dm en vivo](topic:live-3dm-link)) |
| `link_status` | Leer | Indica si un modelo vinculado sigue ahí y cuándo se actualizó por última vez |
| `part_save` | Guardar | El {{ui:Save}} propio de PartCraft |
| `illustrate_export` | Exportar | Un manual del espacio de trabajo {{ui:Illustrate}} como PDF o dibujo de líneas SVG de sus vistas, como archivo 3D interactivo, o sus instrucciones como PDF o página web, tal como lo escriben los menús {{ui:Exportar}} e {{ui:Instructions}} del espacio de trabajo ([Manuales](topic:illustrate)) |

:::note
Esta versión usa el núcleo de malla: los volúmenes se obtienen de los triángulos (algo menos que un sólido curvo real), y el STEP se escribe facetado, con triángulos en lugar de superficies exactas.
:::

## Usted mantiene el control

- **Cada cambio es un solo paso de deshacer**, etiquetado para el asistente, por ejemplo "Asistente: fijar l = 45". Pulse {{key:Mod+Z}} para deshacerlo.
- **Sabe cuándo hay uno conectado.** Un botón de la barra de aplicación indica el asistente mientras está conectado. Haga clic en él para ver lo que puede hacer o para **Desconectar**.
- **Actividad.** {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada; {{ui:Guardar el registro}} conserva una copia.
- **Carpetas.** Solo lee y escribe archivos en las carpetas que añadió; {{ui:Quitar}} retira una carpeta de inmediato.

## Sin abrir PartCraft

El servidor de archivos de CadCraft para asistentes (`npx @getcadcraft/mcp`) y la línea de comandos `cadcraft` abren piezas `.partcraft.json` con el propio código de PartCraft y su núcleo de malla, sin ventana: las mismas herramientas de lectura, fijar parámetros, scripts de CraftScript, exportaciones (también OpenUSD) y guardado. `cadcraft convert bracket.partcraft.json bracket.stl` construye una pieza y la escribe desde la línea de comandos. Los manuales (`.partcraft-manual.json`) también se exportan allí: `illustrate_export`, o `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (añada `--instructions` para las instrucciones).

## Si algo no funciona

- **"needs the edit permission":** marque **Editar** en {{ui:Asistentes}} y vuelva a pedirlo.
- **"driven by the equation":** ese número sigue a un parámetro; pida al asistente que fije el parámetro en su lugar.
- **Su cambio fue incorrecto:** pulse {{key:Mod+Z}}.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
