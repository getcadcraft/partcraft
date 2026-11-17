---
title: Usar PartCraft con un asistente de IA
summary: Deje que su propio asistente de IA o script trabaje con la pieza abierta: leer sus operaciones, parámetros y masa, cambiar un parámetro y reconstruir, ejecutar un script, exportar y guardar. Desactivado hasta que lo active.
keywords: ia, asistente, agente, mcp, protocolo de contexto de modelo, script, automatización, parámetros, propiedades de masa, stl, step, 3mf, permisos, desconectar, actividad, carpetas
from: e66d3470
---

## Lo que aprenderá

Cómo permitir que un asistente de IA (o un script que usted escribió) revise la pieza que tiene abierta, cambie sus parámetros, ejecute un script y la exporte, y cómo decide lo que puede tocar.

PartCraft **no tiene IA propia** y no envía nada a ningún lugar. Usted aporta el asistente: cualquier programa que hable el protocolo de contexto de modelo (MCP). PartCraft solo le da herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Configuración}} (el engrane de la barra de aplicaciones, o {{key:Mod+,}}) y vaya a la pestaña {{ui:PartCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen PartCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer. **Leer** viene marcado al inicio; marque las demás solo cuando las necesite.
4. Para permitir que exporte y guarde en una carpeta, elija {{ui:Agregar una carpeta…}} en **Carpetas que puede usar** y seleccione la carpeta en el diálogo de Studio.

Los asistentes se conectan a través de **CadCraft Studio** en su computadora: Studio muestra la dirección y el token que debe pegar en el asistente. Una pestaña del navegador no puede abrir una conexión para un asistente.

## Qué puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `part_describe`, `features_list` | Leer | Las operaciones en orden con lo que se construyó y lo que falló, el material, el volumen y el tamaño del sólido |
| `params_list` | Leer | Los parámetros y cada número que una ecuación puede controlar, con sus valores |
| `mass_properties` | Leer | Volumen, área, centro de masa, la inercia respecto a él; la masa cuando la pieza tiene material |
| `param_set` | Editar | Establece un parámetro o el número de una operación y reconstruye. Un paso que puede deshacer |
| `script_run` | Editar | Ejecuta un script de CraftScript, Lua o Python como lo hace el espacio de trabajo {{ui:Script}}: aislado, sin archivos ni red. La pieza no cambia |
| `part_export` | Exportar | STL, 3MF, STEP u OpenUSD (.usdz, .usda, .usdc), como lo escriben {{ui:Archivo}} › {{ui:Exportar}} |
| `link_push` | Editar | Actualiza un modelo vinculado desde otro programa (vea [Mantener un modelo .3dm en vivo](topic:live-3dm-link)) |
| `link_status` | Leer | Indica si un modelo vinculado sigue ahí y cuándo se actualizó por última vez |
| `part_save` | Guardar | El {{ui:Guardar}} propio de PartCraft |
| `illustrate_export` | Exportar | Un manual del espacio de trabajo {{ui:Ilustrar}} como PDF o SVG de línea de sus vistas, como archivo 3D interactivo, o sus instrucciones como PDF o página web, como lo escriben los menús {{ui:Exportar}} e {{ui:Instrucciones}} del espacio de trabajo ([Manuales](topic:illustrate)) |

:::note
Esta versión usa el núcleo de malla: los volúmenes salen de los triángulos (algo menos que un sólido curvo real), y STEP se escribe facetado, con triángulos en lugar de superficies exactas.
:::

## Usted sigue al mando

- **Cada cambio es un solo paso de deshacer**, etiquetado para el asistente, por ejemplo "Asistente: establecer l = 45". Pulse {{key:Mod+Z}} para revertirlo.
- **Usted sabe cuándo hay uno conectado.** Un botón en la barra de aplicaciones indica el asistente mientras está conectado. Haga clic para ver lo que puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} lista cada llamada; {{ui:Guardar el registro}} guarda una copia.
- **Carpetas.** Solo lee y escribe archivos en las carpetas que usted agregó; {{ui:Quitar}} retira una carpeta de inmediato.

## Sin abrir PartCraft

El servidor de archivos de CadCraft para asistentes (`npx @getcadcraft/mcp`) y la línea de comandos `cadcraft` abren piezas `.partcraft.json` con el propio código de PartCraft y su núcleo de malla, sin ventana: las mismas herramientas de lectura, establecer parámetros, scripts de CraftScript, exportaciones (también OpenUSD) y guardar. `cadcraft convert bracket.partcraft.json bracket.stl` construye una pieza y la escribe desde la línea de comandos. Los manuales (`.partcraft-manual.json`) también se exportan ahí: `illustrate_export`, o `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (agregue `--instructions` para las instrucciones).

## Si algo no funciona

- **"requiere el permiso de edición":** marque **Editar** en {{ui:Asistentes}} y vuelva a pedirlo.
- **"controlado por la ecuación":** ese número sigue a un parámetro; pida al asistente que establezca el parámetro en su lugar.
- **Su cambio fue incorrecto:** pulse {{key:Mod+Z}}.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
