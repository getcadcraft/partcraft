---
title: Mantener vivo un modelo .3dm
summary: Cambie un modelo en el programa que lo creó y vea cómo sigue el cuerpo de PartCraft, desde Rhino 8 o una definición de Grasshopper, con sus operaciones reconstruidas sobre la nueva forma.
keywords: rhino, grasshopper, enlace en vivo, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, enviar, cuerpo importado
from: cf4dc9b2
---

Siga dando forma al modelo allí donde lo modela, y mecanícelo, compruébelo y documéntelo aquí. Cada cambio en el otro programa sustituye un cuerpo importado en PartCraft, y las operaciones posteriores se reconstruyen sobre la nueva forma.

:::note
El enlace necesita **CadCraft Studio** en el mismo ordenador. Una pestaña del navegador no puede establecer la conexión. Nada pasa por internet: el script se comunica con Studio en la dirección propia de este ordenador, con un token.
:::

:::warning
Este enlace se ha probado con el escritor de archivos del script y con un sustituto del otro programa, pero todavía no dentro de Rhino ni de Grasshopper. Si algo falla allí, indíquenos qué mensaje mostraba.
:::

## Configuración

1. En Studio, abra PartCraft. En {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen PartCraft** y después **Editar**.
2. En Studio, elija {{ui:Conectar un asistente}}. Muestra la dirección y el token que pegará más abajo.
3. Descargue el script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Ejecute `cadcraft_link.py` en el editor de scripts de Rhino (Python 3 en Rhino 8).
2. La primera vez, pegue la dirección y el token. Se guardan en `.cadcraft-link.json` en su carpeta personal, nunca en el modelo. Studio genera un token nuevo cada vez que se inicia, así que el script vuelve a preguntar entonces.

Vuelva a ejecutar el script para detenerlo.

## Desde Grasshopper

Ejecute el script una vez en Rhino primero, para que se guarden la dirección y el token.

1. Añada un componente Script (Python 3) y pegue en él todo el contenido de `cadcraft_link.py`.
2. Asígnele estas entradas: `G` (la geometría, con acceso a lista), `N` (un nombre, opcional), `On` (un interruptor booleano) y `Target` (opcional: `model` o `part`, si ambas aplicaciones están abiertas).
3. Ponga `On` en verdadero.

Cada cálculo envía `G` y sustituye lo que el componente envió la vez anterior.

## Cómo funciona aquí

- **Un cuerpo.** Todo lo visible en el modelo se convierte en una sola operación importada, igual que al [abrir un archivo .3dm](topic:open-3dm-files).
- **Tiene que cerrarse.** PartCraft rellena los agujeros pequeños y las aberturas planas, e indica al otro programa cuántos ha rellenado. Si el modelo sigue sin cerrarse, PartCraft conserva el cuerpo que tenía y la barra de estado lo indica. El siguiente cambio que cierre el modelo lo actualiza.
- **Termine lo que está haciendo.** En un croquis o en un dibujo, las actualizaciones se rechazan y se vuelven a intentar; llegan en cuanto vuelve al modelo.
- **Deshacer.** Las actualizaciones separadas menos de dos segundos comparten un solo paso de deshacer.
- **Guardar.** El archivo de la pieza conserva el enlace. Vuelva a ejecutar el script tras reabrirlo, y la misma operación se actualizará.

**Solo en un sentido.** Los cambios aquí no vuelven al otro programa.

## Si algo sale mal

- **"Ninguna ventana de ModelCraft o PartCraft lo permite":** haga el paso 1 de la configuración.
- **"Studio rechazó el token":** Studio se ha reiniciado. Copie el nuevo token y vuelva a ejecutar el script. Para Grasshopper, ejecútelo antes en Rhino.
- **"No se puede conectar con CadCraft Studio":** Studio no está en marcha, o la dirección ha cambiado.
