---
title: Documentos y revisiones (la bóveda)
summary: Un recorrido paso a paso por un trabajo real. Ponga bajo control una carpeta de piezas y ensamblajes, reserve y modifique una pieza, entréguela con una nota, libérela, vea qué la usa y la lista de materiales, qué ve otra persona mientras está bloqueada y cómo funciona con carpetas en la nube.
keywords: bóveda, documentos, recorrido, tutorial, reservar, entregar, revisión, liberar, aprobar, bloquear, historial, dónde se usa, lista de materiales, bom, ensamblaje, carpeta en la nube, carpeta del proyecto, dos personas, carpeta compartida
from: 0a5e6983
---

## Qué hará

Usted es Ana, y trabaja en la Clínica Riverside con una colega, Ben. Las piezas y los ensamblajes del proyecto están en una carpeta a la que ambos tienen acceso (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a una revisión liberada **A**, se habrá modificado de nuevo como **B.1**, habrá visto quién hizo cada cosa y habrá visto lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: no hay servidor y no se sube nada (una carpeta en la nube es la excepción, vea el último paso). Para ver todos los botones y reglas en un solo lugar, consulte el tema *Documentos: reserva, revisiones y liberación* en su aplicación, donde lo tenga.

## 1. Configure la carpeta del proyecto

1. Elija {{ui:Documentos…}} en el grupo **Archivo** de la barra de herramientas.
2. Elija {{ui:Elegir la carpeta del proyecto}} y seleccione la carpeta que contiene las piezas y los ensamblajes del proyecto. (Las carpetas de proyecto funcionan en Studio y en navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores, el panel lo indica.)
3. Elija {{ui:Cambiar}} junto a **Usted:** y escriba su nombre, `Ana` (si lo pide, también el nombre de esta computadora). El panel ahora dice *Usted: Ana en* y su computadora. Su nombre aparece en todo lo que haga.
4. Elija {{ui:Crear una bóveda en esta carpeta}} y escriba el nombre del proyecto, `Clínica Riverside`. El panel dice *Bóveda iniciada para Clínica Riverside.*

## 2. Ponga un archivo bajo control

1. Abra **Archivos fuera de la bóveda** y elija {{ui:Agregar}} junto a `plates/Bracket.partcraft.json`.
2. Aparece en **Archivos en la bóveda** con la revisión **A.1**, estado **En progreso**. A.1 es su primera copia; la bóveda guarda una copia de cada revisión.

## 3. Reserve, modifique y entregue

1. Elija {{ui:Abrir}} junto a `plates/Bracket.partcraft.json`. La pieza se abre en PartCraft y el panel se cierra para que pueda verla. Vuelva a abrir el panel desde {{ui:Documentos…}}.
2. Vuelva a abrir el panel y elija {{ui:Reservar}}. La fila ahora dice **Reservado por usted**. Se creó un archivo de bloqueo en `.ccvault/locks`; nadie más puede reservar este archivo hasta que usted lo entregue.
3. Modifique la pieza: edite una cota, agregue un agujero. Guardar se rechaza a menos que el archivo esté reservado por usted, y el panel dice por qué. Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Entregar}} y escriba qué cambió (`Moví la puerta`). El panel dice *Entregado como A.2*. El archivo de la carpeta del proyecto es ahora la pieza que tenía abierta, y el bloqueo desaparece. Entregar sin cambios conserva la revisión.

Si cambia de opinión, {{ui:Deshacer la reserva}} devuelve el archivo sin una nueva revisión.

## 4. Revise y libere

1. Elija {{ui:Enviar a revisión}}. El estado pasa a **Para revisión** y el archivo queda de solo lectura.
2. Antes de aprobar, elija {{ui:Ajustes del proyecto}} y enumere quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que quien aprueba debe ser distinto del autor. Elija {{ui:Guardar ajustes}}. Ahora la bóveda misma rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Aprobar}} y escribe el nombre de quien aprueba. El estado pasa a **Liberado** y la revisión a **A**, con *aprobado por* y el nombre. Un archivo liberado es de solo lectura. {{ui:Devolver}} lo habría regresado a En progreso, con un motivo.

El nombre de quien aprueba es el que se escribe en el panel; es un registro de quién dio su visto bueno, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:Nueva revisión}}. Usted lo reserva para la siguiente letra.
2. Modifíquelo y luego elija {{ui:Entregar}}. La revisión es **B.1**, en progreso. Libérela de la misma forma y pasará a ser **B**. {{ui:Deshacer la reserva}} antes de la primera entrega lo deja en **A**.

Las letras de revisión van A, B … Z, AA, AB. Si su norma omite algunas letras, el ajuste del proyecto *Usar la secuencia de ASME Y14.35* omite I, O, Q, S, X y Z en las siguientes revisiones.

## 6. Vea lo que pasó

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:Historial}}**: cada evento, del más reciente al más antiguo, con quién, en qué computadora y cuándo: *Entregado A.2* por Ana, *Liberado* por Ben, etcétera.
- **{{ui:Revisiones}}**: la tabla de revisiones: cada revisión guardada, con su fecha, quién la entregó, la nota y quién la aprobó. La bóveda guarda una copia de cada una en `.ccvault/revs`.
- **{{ui:Usa}}**: las piezas de un ensamblaje.
- **{{ui:Lo usan}}**: enumera cada ensamblaje de la bóveda que contiene esta pieza. Si modifica un soporte, sabe qué ensamblajes revisar.

## Ensamblajes: qué usan y la lista de materiales

Ponga un ensamblaje (`.partcraft.json`, guardado desde el modo Ensamblaje) en la carpeta y agréguelo. Elija su nombre: **Usa** enumera las piezas que contiene, con la revisión y el estado de cada una; **Lo usan** en una pieza enumera cada ensamblaje que la contiene. {{ui:Lista de materiales (CSV)}} guarda la lista completa de piezas, nivel por nivel, con cantidades, revisiones y estados, para una hoja de cálculo. Si modifica un soporte, **Lo usan** le indica qué ensamblajes revisar.

## 7. Lo que ve Ben mientras usted tiene el archivo

Ahora reserve el archivo de nuevo, y pida a Ben que abra la misma carpeta del proyecto en su computadora y que abra el panel. En la fila del archivo ve **Reservado por Ana en** la computadora de ella **desde** la hora, y no aparece el botón {{ui:Reservar}}. Si intenta de todos modos, la bóveda lo rechaza: el bloqueo es un archivo que el sistema no crea dos veces, así que dos personas no pueden tener el archivo a la vez, ni siquiera en el mismo instante, cuando la carpeta está en disco en Studio. (En un navegador, la carpeta solo permite un esfuerzo razonable, y el panel lo indica en **Carpeta**.)

Si Ana está fuera y Ben necesita el archivo, {{ui:Romper la reserva}} lo libera. Debe escribir un motivo; queda en el registro junto con de quién era la reserva. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una reserva más antigua que el límite de vigencia (14 días por defecto) se marca como *mucho tiempo*. Después de romper la reserva, la entrega tardía de Ana se rechaza, así que ustedes dos no pueden sobrescribirse mutuamente.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta del proyecto guardada en el almacenamiento en la nube de su equipo, así que el equipo no necesita una unidad compartida. En Studio, con sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta en la nube}} junto a {{ui:Elegir la carpeta del proyecto}}. Elíjala y seleccione la carpeta, que aparece como espacio de trabajo / carpeta. Un propietario del espacio de trabajo crea la carpeta primero, y el almacenamiento en la nube del equipo debe estar activo. Todo lo anterior funciona igual; el servidor hace el bloqueo, que es estricto entre personas. Si no ha iniciado sesión, el panel le pide que inicie sesión. En una pestaña de navegador común no se ofrece el botón de la nube; use Studio.

## Pruébelo

Haga los ocho pasos anteriores con una copia de un archivo real. Para los pasos de dos personas necesita otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad tiene una verificación que pide exactamente esto, y recibe resultados.
