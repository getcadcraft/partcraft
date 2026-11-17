---
title: Utilitzar PartCraft amb un assistent d'IA
summary: Permeteu que el vostre assistent d'IA o script treballi amb la peça oberta: llegir-ne les operacions, els paràmetres i la massa, canviar un paràmetre i reconstruir-la, executar un script, exportar i desar. Desactivat fins que l'activeu.
keywords: ia, assistent, agent, mcp, model context protocol, script, automatització, paràmetres, propietats de massa, stl, step, 3mf, permisos, desconnectar, activitat, carpetes
from: e66d3470
---

## Què aprendreu

Com permetre que un assistent d'IA (o un script que hàgiu escrit) miri la peça que teniu oberta, n'canviï els paràmetres, n'executi un script i l'exporti, i com decidiu què pot tocar.

PartCraft **no té IA pròpia** i no envia res enlloc. Hi poseu l'assistent: qualsevol programa que parli el Model Context Protocol (MCP). PartCraft només li ofereix eines, i vosaltres en trieu quines.

## Com activar-ho

1. Obriu {{ui:Configuració}} (l'engranatge de la barra d'aplicació, o {{key:Mod+,}}) i aneu a la pestanya {{ui:PartCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Deixa que els assistents d'IA i els scripts usin PartCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer. **Lectura** ve marcada inicialment; marqueu la resta només quan les necessiteu.
4. Per deixar-lo exportar i desar en una carpeta, trieu {{ui:Afegeix una carpeta…}} sota **Carpetes que pot usar** i seleccioneu la carpeta al diàleg de Studio.

Els assistents es connecten a través de **CadCraft Studio** al vostre ordinador: Studio mostra l'adreça i el token que cal enganxar a l'assistent. Una pestanya del navegador no pot obrir una connexió per a un assistent.

## Què pot demanar un assistent

| Eina | Permís | Què fa |
|---|---|---|
| `part_describe`, `features_list` | Lectura | Les operacions en ordre, amb el que s'ha construït i el que ha fallat, el material, el volum i la mida del sòlid |
| `params_list` | Lectura | Els paràmetres i tots els números que una equació pot controlar, amb els seus valors |
| `mass_properties` | Lectura | Volum, àrea, centre de massa i la inèrcia respecte d'aquest; la massa quan la peça té material |
| `param_set` | Edició | Estableix un paràmetre o el número d'una operació i reconstrueix. Un sol pas que podeu desfer |
| `script_run` | Edició | Executa un script CraftScript, Lua o Python com ho fa l'espai de treball {{ui:Script}}: aïllat, sense fitxers ni xarxa. La peça no canvia |
| `part_export` | Exportació | STL, 3MF, STEP o OpenUSD (.usdz, .usda, .usdc), tal com ho escriuen {{ui:Fitxer}} › {{ui:Exporta}} |
| `link_push` | Edició | Actualitza un model enllaçat des d'un altre programa (vegeu [Manté viu un model .3dm](topic:live-3dm-link)) |
| `link_status` | Lectura | Indica si un model enllaçat encara hi és i quan es va actualitzar per última vegada |
| `part_save` | Desament | El {{ui:Desa}} propi de PartCraft |
| `illustrate_export` | Exportació | Un manual de l'espai de treball {{ui:Il·lustra}} com a PDF o dibuix de línies SVG de les seves vistes, com a fitxer 3D interactiu, o les seves instruccions com a PDF o pàgina web, tal com ho escriuen els menús {{ui:Exporta}} i {{ui:Instruccions}} de l'espai de treball ([Manuals](topic:illustrate)) |

:::note
Aquesta versió fa servir el nucli de malla: els volums surten dels triangles (una mica per sota d'un sòlid corbat real), i el STEP s'escriu facetat, amb triangles en lloc de superfícies exactes.
:::

## Vosaltres teniu el control

- **Cada canvi és un sol pas de desfer**, amb l'etiqueta de l'assistent, per exemple "Assistent: estableix l = 45". Premeu {{key:Mod+Z}} per desfer-lo.
- **Sabeu quan n'hi ha un de connectat.** Un botó de la barra d'aplicació n'indica el nom mentre és connectat. Feu-hi clic per veure què pot fer, o per **Desconnectar-lo**.
- **Activitat.** {{ui:Configuració}} › {{ui:PartCraft}} › {{ui:Assistents}} › {{ui:Activitat}} llista cada crida; {{ui:Desa el registre}} en guarda una còpia.
- **Carpetes.** Només llegeix i escriu fitxers a les carpetes que heu afegit; {{ui:Treu}} n'elimina una a l'instant.

## Sense obrir PartCraft

El servidor de fitxers de CadCraft per a assistents (`npx @getcadcraft/mcp`) i la línia d'ordres `cadcraft` obren peces `.partcraft.json` amb el mateix codi i nucli de malla de PartCraft, sense finestra: les mateixes eines de lectura, l'establiment de paràmetres, els scripts CraftScript, les exportacions (també OpenUSD) i el desament. `cadcraft convert bracket.partcraft.json bracket.stl` construeix una peça i l'escriu des de la línia d'ordres. Els manuals (`.partcraft-manual.json`) també s'exporten des d'allà: `illustrate_export`, o `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (afegiu `--instructions` per a les instruccions).

## Si alguna cosa no funciona

- **"needs the edit permission":** marqueu **Edició** sota {{ui:Assistents}} i torneu a demanar-ho. (Traducció del missatge: "necessita el permís d'edició".)
- **"driven by the equation":** aquest número segueix un paràmetre; demaneu a l'assistent que estableixi el paràmetre.
- **El canvi no era correcte:** premeu {{key:Mod+Z}}.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
