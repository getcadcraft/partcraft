---
title: Eiporu PartCraft asistente de IA-gui
summary: Eikuaauka asistente de IA-gui walo script, oñemba'apo pieza ojeĩva: umi elemento, parámetro ha masa ojehechaukáva, peteĩ parámetro ojambue ha oñemoĩ jey, script oñemoĩ, exportar ha guardar. Nahániri ojapo peve ndojeporúi.
keywords: ai, asistente, agente, mcp, model context protocol, script, automatización, parámetros, propiedades de masa, stl, step, 3mf, permisos, desconectar, actividad, carpetas
from: e66d3470
---

## Mba'e ikatu ereikuaa

Mba'éichapa asistente de IA (térã script ndéva ojapóva) ikatu ohecha pieza ojeporúva, ojambue hese parámetro, oñemoĩ script ha oexporta, ha mba'éichapa eiporu ndéve mba'e ikatu oñemba'apo.

PartCraft-pe **ndaiporúi IA hendápe** ha ndaiméi ojeʼe mba'eve. Nde reikuaa asistente: mba'eve Model Context Protocol (MCP) oipuru. PartCraft omeʼẽ hese tembiporu, ha nde ere mba'épa ikatu.

## Ojapo jepe

1. Ejeʼe {{ui:Configuración}} (engranaje app bar-pe, térã {{key:Mod+,}}) ha eho {{ui:PartCraft}} pestaña-pe.
2. {{ui:Asistentes}} rapykue, emarka **Dejar que asistentes de IA ha scripts usen PartCraft**. Ojejapo ndajeporúi peve.
3. Eeʼẽ mba'épa ikatu ojapo. **Leer** ojejapo ojepyhyvétape; ambue marka tekotevẽ rire.
4. Oexporta ha oguardá carpeta-pe, ejeʼe {{ui:Agregar una carpeta…}} **Carpetas que puede usar** rapykue ha eiporu Studio-pe carpeta.

Asistente oñeʼẽ **CadCraft Studio** ndejedápe: Studio ohechauka dirección ha token ojojoaʼỹva asistente-pe. Navegador pestaña ndaikatúi oipysyrõ asistente-pe.

## Mba'e ikatu asistente oñeʼẽ

| Tembiporu | Permiso | Mba'épa ojapo |
|---|---|---|
| `part_describe`, `features_list` | Leer | Umi elemento tekoháme oñemoĩva ojapo ha mba'e oiko ha mba'e ndoikóiva, material, sólido volumen ha tamaño |
| `params_list` | Leer | Parámetro ha umi número ecuación ikatu omba'apo, valor ndive |
| `mass_properties` | Leer | Volumen, superficie, masa centro, inercia hese; masa pieza-pe material oĩrõ |
| `param_set` | Editar | Ojambue parámetro térã elemento número ha ojapo jey. Peteĩ paso ohejýva ejerrevoséva |
| `script_run` | Editar | Oñemoĩ CraftScript, Lua térã Python script, {{ui:Script}} espacio de trabajo-pe ojapóicha: cerrado, archivo ha red ndaipuruvéi. Pieza ndojambuéi |
| `part_export` | Exportar | STL, 3MF, STEP térã OpenUSD (.usdz, .usda, .usdc), {{ui:Archivo}} › {{ui:Exportar}} ojapóicha |
| `link_push` | Editar | Oñemoʼã modelo ambue programa-gui ojoaʼỹva (ehecha [Mantené modelo .3dm vivo](topic:live-3dm-link)) |
| `link_status` | Leer | Ohechauka modelo ojoaʼỹva oĩ piko ha mboyve oñemoʼã jave |
| `part_save` | Guardar | PartCraft-pe ojapo {{ui:Guardar}} |
| `illustrate_export` | Exportar | Manual {{ui:Illustrate}} espacio de trabajo-gui PDF térã SVG línea dibujo umi vista-gui, térã 3D archivo interactivo, térã instrucciones PDF térã web página-pe, {{ui:Exportar}} ha {{ui:Instrucciones}} menú ojapóicha ([Manuales](topic:illustrate)) |

:::note
Ko build-pe malla núcleo oiporu: volumen oúva triángulo-gui (curva sólido rehe apenas kuarahy'ỹva), ha STEP oñemoĩ facetado, triángulo-pe superficie exacta ndive.
:::

## Nde oiko tekoháme

- **Cada ojambue peteĩ jey ojejapo**, asistente-pe marka, ejemplo "Asistente: set l = 45". Eiporu {{key:Mod+Z}} ojejapo ndaipóriri.
- **Reikuaa oñeʼẽ rire.** App bar-pe botón ohechauka asistente oñeʼẽ rire. Ejeʼe mba'épa ikatu oiporu, térã **Desconectar** ndaʼéi.
- **Actividad.** {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} omoʼã mbohapy kuatia; {{ui:Guardar el registro}} ojapo copia.
- **Carpetas.** Oikuaa ha ojapo archivo ere carpeta-pe nde añadi'ỹva; {{ui:Quitar}} ojeʼe hese ohechakuaaha.

## PartCraft ndaikeʼíva ojapo

Asistente-pe `npx @getcadcraft/mcp` ha `cadcraft` comando-pe ikatu oiporu `.partcraft.json` pieza, PartCraft-pe ndaipuruvéi ventana: umi tembiporu ojehecháva, parámetro ojambue, CraftScript script, exportación (OpenUSD jepe) ha guardar. `cadcraft convert bracket.partcraft.json bracket.stl` ojapo pieza ha ojapo STL-pe comando línea-gui. Manual (`.partcraft-manual.json`) oexporta upégui: `illustrate_export`, térã `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (`--instructions` ere instrucciones-pe).

## Mba'e ndaiporãiva

- **"needs the edit permission":** emarka **Editar** {{ui:Asistentes}} rapykue, ejerure jey.
- **"driven by the equation":** número ko ecuación rapykue; ejerure asistente-pe parámetro ojambue.
- **Ojambue oiko vai:** eiporu {{key:Mod+Z}}.

## Ambue ehecha

- [Recetas para asistentes de IA](common:assistants-recipes): ehechakuaaha ejemplo, cada peteĩ tembiporu ojeporúva.
