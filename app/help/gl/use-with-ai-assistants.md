---
title: Usar PartCraft cun asistente de IA
summary: Deixe que o seu propio asistente de IA ou script traballe coa peza aberta: ler as súas características, parámetros e masa, cambiar un parámetro e reconstruír, executar un script, exportar e gardar. Desactivado ata que o active.
keywords: ia, asistente, axente, mcp, model context protocol, script, automatización, parámetros, propiedades de masa, stl, step, 3mf, permisos, desconectar, actividade, cartafoles
from: e66d3470
---

## Que aprenderá

Como deixar que un asistente de IA (ou un script que escribiu vostede) mire a peza que ten aberta, cambie os seus parámetros, execute un script e a exporte, e como decide o que pode tocar.

PartCraft **non ten IA propia** e non envía nada a ningures. Vostede achega o asistente: calquera programa que fale o Model Context Protocol (MCP). PartCraft só lle dá ferramentas, e vostede escolle cales.

## Activalo

1. Abra {{ui:Configuración}} (a roda na barra de aplicacións, ou {{key:Mod+,}}) e vaia á lapela {{ui:PartCraft}}.
2. Baixo {{ui:Asistentes}}, marque **Deixar que os asistentes de IA e os scripts usen PartCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer. **Ler** está marcado ao principio; marque as outras só cando as necesite.
4. Para deixar que exporte e garde nun cartafol, escolla {{ui:Engadir un cartafol…}} baixo **Cartafoles que pode usar** e seleccione o cartafol no diálogo de Studio.

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: Studio mostra o enderezo e o token para pegar no asistente. Unha lapela do navegador non pode abrir unha conexión para un asistente.

## Que lle pode pedir un asistente

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `part_describe`, `features_list` | Ler | As características en orde, co que se construíu e o que falló, o material, o volume e o tamaño do sólido |
| `params_list` | Ler | Os parámetros e cada número que unha ecuación pode controlar, cos seus valores |
| `mass_properties` | Ler | Volume, superficie, centro de masa, a inercia arredor del; a masa cando a peza ten material |
| `param_set` | Editar | Fixa un parámetro ou o número dunha característica e reconstrúe. Un paso que pode desfacer |
| `script_run` | Editar | Executa un script CraftScript, Lua ou Python do mesmo xeito que o espazo de traballo {{ui:Script}}: illado, sen ficheiros nin rede. A peza non cambia |
| `part_export` | Exportar | STL, 3MF, STEP ou OpenUSD (.usdz, .usda, .usdc), como os escriben {{ui:Ficheiro}} › {{ui:Exportar}} |
| `link_push` | Editar | Actualiza un modelo ligado desde outro programa (ver [Manter vivo un modelo .3dm](topic:live-3dm-link)) |
| `link_status` | Ler | Indica se un modelo ligado segue aí e cando se actualizou por última vez |
| `part_save` | Gardar | O propio {{ui:Gardar}} de PartCraft |
| `illustrate_export` | Exportar | Un manual do espazo de traballo {{ui:Ilustrar}} como PDF ou SVG de liñas das súas vistas, como ficheiro 3D interactivo, ou as súas instrucións como PDF ou páxina web, como os escriben os menús {{ui:Exportar}} e {{ui:Instrucións}} do espazo de traballo ([Manuais](topic:illustrate)) |

:::note
Esta versión usa o núcleo de malla: os volumes saen dos triángulos (un pouco por debaixo dun sólido curvo real), e o STEP escríbese facetado, con triángulos no lugar de superficies exactas.
:::

## Vostede segue a mandar

- **Cada cambio é un paso de desfacer**, etiquetado para o asistente, por exemplo "Asistente: fixar l = 45". Prema {{key:Mod+Z}} para desfacelo.
- **Sabe cando hai unha conexión.** Un botón na barra de aplicacións indica o asistente mentres está conectado. Prémao para ver o que pode facer, ou para **Desconectar**.
- **Actividade.** {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} lista cada chamada; {{ui:Gardar o rexistro}} garda unha copia.
- **Cartafoles.** Só le e escribe ficheiros nos cartafoles que engadiu; {{ui:Eliminar}} retira un cartafol de inmediato.

## Sen abrir PartCraft

O servidor de ficheiros de CadCraft para asistentes (`npx @getcadcraft/mcp`) e a liña de comandos `cadcraft` abren pezas `.partcraft.json` co código propio de PartCraft e o seu núcleo de malla, sen xanela: as mesmas ferramentas de lectura, a fixación de parámetros, os scripts CraftScript, as exportacións (tamén OpenUSD) e o gardado. `cadcraft convert bracket.partcraft.json bracket.stl` constrúe unha peza e a escribe desde a liña de comandos. Os manuais (`.partcraft-manual.json`) tamén se exportan alí: `illustrate_export`, ou `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (engada `--instructions` para as instrucións).

## Se algo non funciona

- **"needs the edit permission":** marque **Editar** baixo {{ui:Asistentes}} e pídalle de novo ao asistente.
- **"driven by the equation":** ese número segue un parámetro; pídalle ao asistente que fixe o parámetro.
- **O cambio foi incorrecto:** prema {{key:Mod+Z}}.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos resoltos, cada un coas ferramentas que chama.
