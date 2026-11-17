---
title: Pieza ojepatrón parámetro-kuéra rupi
summary: Emboguapy tamaño ojeguerekoháicha (ancho, espesor, perno tamaño), oñemboguerekõ opa feature número térã bosquejo cota = ndive ha opa pieza peteĩ tabla rupi ombohasa.
keywords: parámetros, dónde se usa, usado por, variables globales, variables, ecuaciones, intención de diseño, cotas impulsoras, enlace, expresión, fórmula, nombrar cota, valores enlazados
from: 58c646ea
---

Parámetro ha'e número ojerérava, ejemplo `width = 120` térã `margin = bolt * 1.5`. Profundidad, agujero diámetro, patrón cantidad térã bosquejo cota ndive oñemboguerekõ, ha parámetro ombohasa jave opa ombohasa peteĩ jey. Upéicha pieza-pe diseño intención oñeñongatu, nde akãme'ẽ-pe ndahaʼéi.

## Agregar parámetro-kuéra

1. Derecha panel-pe, eiporavo pestaña {{ui:Parámetros}}.
2. **Variables** rupi, "name" caja-pe emoĩ réra, ejemplo `width`.
3. Upe ramo caja-pe emoĩ valor, ejemplo `120`, ha emoñe'ẽ {{key:Enter}} (térã eiporavo {{ui:Agregar}}).

Valor ha'e número térã ambue parámetro-kuéra expresión: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. **Valor** columna ohechauka mba'e resultado. Réra ojepyrũ letra térã `_` ndive, ha letra, número ha `_` oguereko añónte; función ha unidad réra (`sin`, `mm`, `pi`) ndojeguerohory, ha bucle ojapo `a = b` ha `b = a` jave ndojejoaiméi.

## Mba'e número parámetro-pe oñemboguerekõ

1. Historia-pe eiporavo feature, ejemplo "Extrude1". Ajustes ohechauka {{ui:Propiedades}} pestaña-pe.
2. Número caja-pe, ejemplo **Profundidad (mm)**, emoĩ `=` ha expresión: `=thick` térã `=width / 4`.
3. Emoñe'ẽ {{key:Enter}}.

Caja ohechauka resultado ha **ƒ** botón oñemoĩ réra ryepýpe. Ohecha chupe ecuación ohechauka. Bosquejo cota-kuéra upéicha oñemboguerekõ, ambos **Cotas de bosquejo** lista-pe feature-pe ha bosquejo abierto cota caja-pe (doble clic cota-pe, emoĩ `=width`, emoñe'ẽ {{key:Enter}}).

Número oñemboguerekõ ha'e: extrusión profundidad, revolución ángulo, agujero diámetro, profundidad ha contrabore tamaño, patrón cantidad, espaciado ha ángulo, redondeo radio, chaflán distancia, carcasa espesor de pared, opa bosquejo cota ha pyahu feature-kuéra tamaño (segunda profundidad, taper, avellanado, referencia plano distancia, ángulo de desmoldeo ha ambue).

## Parámetro ojeambue

{{ui:Parámetros}} pestaña-pe, **Expresión** columna-pe emoĩ valor térã expresión ha emoñe'ẽ {{key:Enter}}. Opa oñemboguerekóva ojeambue ha pieza oñemboguapy peteĩ paso-pe: {{key:Mod+Z}} oñemboguete.

Número peẽ ambuégui ojeambue jave, ecuaciones ohechauka [Ecuaciones ambos sentidos](topic:equations-two-way).

## Ohechauka mávapa parámetro oñeporu

{{ui:Parámetros}} pestaña-pe, peteĩ-peteĩ parámetro mboyve línea ohechauka mba'e oñeporúva:

- número ohejáva, ejemplo **Extrude1 profundidad** térã **Sketch1 D2 (distancia)**. Eiporavo peteĩ feature selecciona ha propiedades ohechauka;
- número ohejáva **ambue** parámetro-kuéra rupi, ejemplo **Hole1 diámetro (h, d rupi)** `d = h + 2` ha `h = w / 2` jave;
- **parámetro** kuéra oñeporúva expresión-pe, **configuración** kuéra oñemoĩva, ha **script** kuéra oñeleéva (ehecha [Escribir y ejecutar scripts](topic:craftscript)).

"Ndojeporúi góuri." ohechauka ndaipóri oñeporúva: ndepená ojejepe'a peteĩ jey ndepáporíri.

## Desvincular, renombrar, eliminar

- **Número desvincular:** eiporavo **ƒ** botón térã {{ui:Desvincular}} **Ecuaciones** lista-pe. Valor rekovérõ oñemanterne ha ndaipóri parámetro oñemboguetéva.
- **Parámetro renombrar:** **Nombre** caja-pe emoĩ réra pyahu. Opa oñeporúva expresión oñemoambue.
- **Parámetro eliminar:** fila-pe × eiporavo. Peteĩ oñeporúramo, PartCraft ndejerovia ojejapo jeýpa oguereko valor ndoĩva expresión-kuéra-pe.
- **Feature eliminar** oñemboguete númererõ ecuación-kuéra; barra estado ohechauka mávape.

:::note
Parámetro-kuéra oñeñongatu `.partcraft.json` archivo-pe (archivo versión 3 rupi). Parámetro'ỹ pieza upéicha oñeñongatu jepe ojapo ramo.
:::

## Expresiones

| Ehai | Ohechauka |
|---|---|
| `120`, `12.5`, `1e3` | número (milímetro térã ángulo grado) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | ambue unidad tamaño, milímetro-pe oñemoambue |
| `30deg`, `0.5rad` | ángulo, grado-pe oñemoambue |
| `+ - * / %` ha `^` | aritmética; `^` potencia, `-2^2` ha'e −4 |
| `sin cos tan asin acos atan atan2` | trigonometría grado-pe |
| `sqrt pow exp ln log abs sign` | ambue función |
| `ceil floor int round(x, digits) min max` | redondeo ha límite |
| `if(test, a, b)` ndive `< <= > >= == !=` | elección: `if(bolt >= 16, 6, 8)` |
| `pi` | 3,14159… |

Réra mbohasa ojehecha: `Width` ha `width` mokõi parámetro.

Ehecha avei [Configuraciones y tablas de diseño](topic:design-tables) ha [Scripts y línea de comandos](topic:scripts-and-cli).
