---
title: Modelo .3dm tiempo real-pe
summary: Modelo ojapo ambue programa-pe ha PartCraft cuerpo ojeheka, Rhino 8 térã Grasshopper definición-gui, elemento ojehechaukáva forma ipyahúva.
keywords: rhino, grasshopper, live link, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, enviar, cuerpo importado
from: cf4dc9b2
---

Modelo ojapo ojehecha ojapóva programa-pe, ha máquina, verificación ha documentación PartCraft-pe ojapo. Ambue programa-pe cambio peteĩ importado cuerpo PartCraft-pe ojeikytĩ, ha upe rire elemento forma pyahúpe ojapo.

:::note
Enlace oiko **CadCraft Studio** peteĩ computadora-pe. Navegador ñe'ẽ ndaipóri konexión. Ndaipóri internet-pe ojeikuaa: script Studio-pe ojeikuaa computadora ijyvy dirección-pe, token ndive.
:::

:::warning
Enlace ojapo script archivo escritor ha ambue programa-gui ojeporuvaekue, Rhino térã Grasshopper ijyvy-pe ndojapói'ỹ. Oiko mba'e ojapo ojapo jave, ñandéve ñe'ẽ.
:::

## Ojapo

1. Studio-pe, PartCraft ojehai. {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}-pe, tilda **Let AI assistants and scripts use PartCraft**, upéi **Edit**.
2. Studio-pe, {{ui:Connect an assistant}} ojapo. Dirección ha token ojehechauka, ko'ápe ojapo oñemoĩ.
3. Script ojepapa: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino-gui

1. `cadcraft_link.py` Rhino script editor-pe ojapo (Rhino 8-pe Python 3).
2. Ñepyrũ vez-pe, dirección ha token omoĩ. Ha'e `.cadcraft-link.json` archivo-pe tuichaiterei ña guarda, ko'ẽ'ỹ modelo-pe. Studio peteĩ token ojapo cada ñepyrũ jave, upéi script ojeporandu.

Ojapo ojehai jevy script ojapo ndaipóri.

## Grasshopper-gui

Rhino-pe script peteĩ vez ojapo ántes, dirección ha token guarda.

1. Script componente (Python 3) omoĩ ha `cadcraft_link.py` tuichaiterei omoĩ.
2. Ko entrada omoĩ: `G` (geometría, lista acceso ndive), `N` (nombre, opcional), `On` (booleano toggle), ha `Target` (opcional: `model` térã `part`, programa mokõi ojeikuaa jave).
3. `On` true-pe omoĩ.

Opa solve `G` ojapo ha upe mba'e ojapo último vez ojeity.

## Ko'ápe mba'éicha ojapo

- **Peteĩ cuerpo.** Modelo-pe ojehechauka opa peteĩ importado elemento ojapo, [.3dm archivo ojeipe](topic:open-3dm-files) ojapo jave.
- **Ojejuhu tenonderã.** PartCraft oñemboty hyapu orificio ha plano abertura, ambue programa-pe mboyve ojapo. Modelo ndojejuhu'ỹ jave, PartCraft ojeikuaa cuerpo ha estado barra-pe ojehechauka. Upe ojejuhu jave ojeity.
- **Ojapo ko'ẽ ojapo.** Boceto térã plano-pe, ojeity ojapo'ỹ ha upéi ojapo; modelo-pe ojapo jave oikuaa.
- **Deshacer.** Dos segundo-pe ojeity peteĩ deshacer paso-pe.
- **Guardar.** Pieza archivo enlace oñongatu. Ojeipe rire script ojapo, upe elemento ojeity.

**Peteĩ tape anivé.** Ko-pe mba'e ojeity ambue programa-pe ndojehecha'ỹ.

## Ojapo'ỹ jave mba'e rehe

- **"No ModelCraft or PartCraft window allows it":** ojapo setup paso 1.
- **"Studio refused the token":** Studio ojepyrũ. Token pyahu kopia ha script ojapo. Grasshopper-pe Rhino-pe ántes ojapo.
- **"Cannot reach CadCraft Studio":** Studio ndojapói térã dirección ojeity.
