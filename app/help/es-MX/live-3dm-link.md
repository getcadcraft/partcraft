---
title: Mantener un modelo .3dm en vivo
summary: Cambie un modelo en el programa que lo creó y vea cómo el cuerpo de PartCraft lo sigue, desde Rhino 8 o una definición de Grasshopper, con sus operaciones reconstruidas sobre la nueva forma.
keywords: rhino, grasshopper, enlace en vivo, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, enviar, cuerpo importado
from: cf4dc9b2
---

Siga dando forma al modelo donde lo modela, y fabrique, revise y documente aquí. Cada cambio en el otro programa reemplaza un cuerpo importado en PartCraft, y las operaciones posteriores se reconstruyen sobre la nueva forma.

:::note
El enlace necesita **CadCraft Studio** en la misma computadora. Una pestaña del navegador no puede establecer la conexión. Nada viaja por internet: el script se comunica con Studio en la dirección propia de esta computadora, con un token.
:::

:::warning
Este enlace se ha probado con el escritor de archivos del script y con un sustituto del otro programa, pero aún no dentro de Rhino ni de Grasshopper. Si algo falla allí, díganos qué mensaje mostró.
:::

## Configurarlo

1. En Studio, abra PartCraft. En {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen PartCraft** y luego **Editar**.
2. En Studio, elija {{ui:Conectar un asistente}}. Muestra la dirección y el token que pegará más abajo.
3. Descargue el script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Ejecute `cadcraft_link.py` en el editor de scripts de Rhino (Python 3 en Rhino 8).
2. La primera vez, pegue la dirección y el token. Se guardan en `.cadcraft-link.json` en su carpeta personal, nunca en el modelo. Studio crea un token nuevo cada vez que se inicia, así que el script vuelve a pedirlo entonces.

Ejecute el script de nuevo para detenerlo.

## Desde Grasshopper

Ejecute el script una vez en Rhino primero, para que se guarden la dirección y el token.

1. Agregue un componente Script (Python 3) y pegue en él todo el contenido de `cadcraft_link.py`.
2. Dele estas entradas: `G` (la geometría, con acceso de lista), `N` (un nombre, opcional), `On` (un interruptor booleano) y `Target` (opcional: `model` o `part`, si ambas aplicaciones están abiertas).
3. Ponga `On` en verdadero.

Cada solución envía `G` y reemplaza lo que el componente envió la vez anterior.

## Cómo funciona aquí

- **Un solo cuerpo.** Todo lo visible en el modelo se convierte en una operación importada, como al [abrir un archivo .3dm](topic:open-3dm-files).
- **Debe cerrar.** PartCraft rellena agujeros pequeños y aberturas planas, y al otro programa se le informa cuántos. Si el modelo aún no cierra, PartCraft conserva el cuerpo que tenía y la barra de estado lo indica. El siguiente cambio que cierre lo actualiza.
- **Termine lo que está haciendo.** En un croquis o en un dibujo, las actualizaciones se rechazan y se intentan de nuevo; llegan cuando vuelve al modelo.
- **Deshacer.** Las actualizaciones separadas por menos de dos segundos comparten un paso de deshacer.
- **Guardar.** El archivo de la pieza conserva el enlace. Ejecute el script de nuevo después de reabrirlo, y la misma operación se actualiza.

**Solo en un sentido.** Los cambios aquí no regresan al otro programa.

## Si algo sale mal

- **"Ninguna ventana de ModelCraft o PartCraft lo permite":** haga el paso 1 de la configuración.
- **"Studio rechazó el token":** Studio se reinició. Copie el token nuevo y ejecute el script de nuevo. Para Grasshopper, ejecútelo primero en Rhino.
- **"No se puede conectar con CadCraft Studio":** Studio no está en ejecución, o la dirección cambió.
