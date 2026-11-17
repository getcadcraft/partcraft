---
title: Documentos y revisiones (el almacén)
summary: Un recorrido paso a paso por un trabajo real: poner bajo control una carpeta de proyecto con piezas y ensamblajes, extraer una pieza, modificarla, devolverla con una nota, liberarla, ver qué la usa y la lista de materiales, qué ve un segundo usuario mientras está bloqueada y cómo funciona con carpetas en la nube.
keywords: almacén, documentos, recorrido, tutorial, extraer, devolver, revisión, liberar, aprobar, bloquear, historial, dónde se usa, lista de materiales, bom, ensamblaje, carpeta en la nube, carpeta de proyecto, dos personas, carpeta compartida
from: 0a5e6983
---

## Qué va a hacer

Usted es Ana, y trabaja en la Clínica Riverside junto con un compañero, Ben. Las piezas y ensamblajes del proyecto están en una carpeta a la que ustedes dos tienen acceso (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a la revisión liberada **A**, se habrá modificado de nuevo como **B.1**, habrá visto quién hizo cada cosa y habrá visto lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: no hay servidor y no se sube nada (una carpeta en la nube es la excepción, véase el último paso). Para ver todos los botones y reglas en un solo lugar, consulte el tema *Documentos: extracción, revisiones y liberación* en su aplicación.

## 1. Configurar la carpeta del proyecto

1. Elija {{ui:Documents…}} en el grupo **Archivo** de la barra de herramientas.
2. Elija {{ui:Choose the project folder}} y seleccione la carpeta que contiene las piezas y ensamblajes del proyecto. (Las carpetas de proyecto funcionan en Studio y en los navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores el panel lo indica.)
3. Elija {{ui:Change}} junto a **Usted:** y escriba su nombre, `Ana` (si lo pide, también el nombre de este equipo). El panel muestra ahora *Usted: Ana en* y su equipo. Su nombre aparece en todo lo que haga.
4. Elija {{ui:Start a vault in this folder}} y escriba el nombre del proyecto, `Riverside clinic`. El panel indica *Almacén iniciado para Riverside clinic.*

## 2. Poner un archivo bajo control

1. Abra **Archivos que no están en el almacén** y elija {{ui:Add}} junto a `plates/Bracket.partcraft.json`.
2. Aparecerá en **Archivos en el almacén** con la revisión **A.1** y el estado **En curso**. A.1 es su primera copia; el almacén guarda una copia de cada revisión.

## 3. Extraer, modificar y devolver

1. Elija {{ui:Open}} junto a `plates/Bracket.partcraft.json`. La pieza se abre en PartCraft y el panel se cierra para que pueda verla. Vuelva a abrir el panel desde {{ui:Documents…}}.
2. Vuelva a abrir el panel y elija {{ui:Check out}}. La fila dirá **Extraído por usted**. Se ha creado un archivo de bloqueo en `.ccvault/locks`; nadie más podrá extraer este archivo hasta que usted lo devuelva.
3. Modifique la pieza: edite una cota o añada un agujero. Guardar se rechaza salvo que el archivo esté extraído a su nombre, y lo indica; Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Check in}} y escriba qué ha cambiado (`Moved the door`). El panel indica *devuelto como A.2*. El archivo de la carpeta del proyecto es ahora la pieza que tenía abierta, y el bloqueo desaparece. Si devuelve el archivo sin cambios, la revisión se mantiene.

Si cambia de opinión, {{ui:Undo check-out}} devuelve el archivo sin crear una nueva revisión.

## 4. Revisar y liberar

1. Elija {{ui:Send for review}}. El estado pasa a **Para revisión** y el archivo queda de solo lectura.
2. Antes de aprobar, elija {{ui:Project settings}} y escriba quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que el aprobador debe ser una persona distinta del autor. Elija {{ui:Save settings}}. A partir de ese momento, el propio almacén rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Approve}} y escribe el nombre del aprobador. El estado pasa a **Liberado** y la revisión pasa a ser **A**, con *aprobado por* y el nombre. Un archivo liberado es de solo lectura. {{ui:Send back}} lo habría devuelto a En curso, indicando el motivo.

El nombre del aprobador es el que se escribe en el panel; es un registro de quién dio la conformidad, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:New revision}}. Queda reservada para la siguiente letra.
2. Modifíquelo y después elija {{ui:Check in}}. La revisión será **B.1**, en curso. Libérela de la misma forma y pasará a ser **B**. {{ui:Undo check-out}} antes de la primera devolución la deja en **A**.

Las letras de revisión siguen el orden A, B … Z, AA, AB. Si su norma omite algunas letras, el ajuste del proyecto *Usar la secuencia de ASME Y14.35* omite I, O, Q, S, X y Z en las siguientes revisiones.

## 6. Ver qué ha ocurrido

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:History}}**: cada evento, del más reciente al más antiguo, con quién, en qué equipo y cuándo: *Devuelto A.2* por Ana, *Liberado* por Ben, etc.
- **{{ui:Revisions}}**: la tabla de revisiones: cada revisión guardada, con su fecha, quién la devolvió, la nota y quién la aprobó. El almacén guarda una copia de cada una en `.ccvault/revs`.
- **{{ui:Uses}}**: las piezas de un ensamblaje.
- **{{ui:Used by}}**: Usado por enumera todos los ensamblajes del almacén que contienen esta pieza: si modifica un soporte, sabe qué ensamblajes revisar.

## Ensamblajes: qué usan y la lista de materiales

Coloque un ensamblaje (`.partcraft.json`, guardado desde el modo Ensamblaje) en la carpeta y añádalo. Elija su nombre: **Usa** enumera las piezas que contiene, con la revisión y el estado de cada una; **Usado por** en una pieza enumera todos los ensamblajes que la contienen. {{ui:Bill of materials (CSV)}} guarda la lista completa de piezas, nivel por nivel, con cantidades, revisiones y estados, para una hoja de cálculo. Si modifica un soporte, **Usado por** le indica qué ensamblajes revisar.

## 7. Qué ve Ben mientras usted tiene el archivo

Ahora extraiga de nuevo el archivo y pida a Ben que abra la misma carpeta de proyecto en su equipo y que abra el panel. En la fila del archivo verá **Extraído por Ana en** su equipo **desde** la hora, y no verá el botón {{ui:Check out}}. Si intenta extraerlo de todos modos, el almacén lo rechaza: el bloqueo es un archivo que el sistema no crea dos veces, de modo que dos personas no pueden tener el archivo a la vez, ni siquiera en el mismo instante, cuando la carpeta está en disco en Studio. (En un navegador, la carpeta solo ofrece una garantía de mejor esfuerzo, y el panel lo indica en **Carpeta**.)

Si Ana está ausente y Ben necesita el archivo, {{ui:Break check-out}} lo libera. Debe escribir un motivo; se registra en el historial junto con la extracción a la que afecta. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una extracción anterior al límite de antigüedad (14 días por defecto) aparece marcada como *mucho tiempo*. Tras la ruptura, la devolución tardía de Ana se rechaza, de modo que ninguno de los dos puede sobrescribir el trabajo del otro.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta de proyecto que se guarda en el almacenamiento en la nube de su equipo, de modo que el equipo no necesita una unidad compartida. En Studio, con la sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta en la nube}} junto a {{ui:Choose the project folder}}. Elíjalo y seleccione la carpeta, que aparece como espacio de trabajo / carpeta. El propietario del espacio de trabajo crea primero la carpeta, y el almacenamiento en la nube del equipo debe estar activo. Todo lo anterior funciona igual; el servidor crea el bloqueo, que es estricto entre personas. Si no ha iniciado sesión, el panel se lo indica. En una pestaña normal del navegador no se ofrece el botón de la nube; use Studio.

## Pruébelo

Siga los ocho pasos anteriores con una copia de un archivo real. Para los pasos de dos personas necesita a otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad incluye una comprobación que pregunta exactamente esto y recoge los resultados.
