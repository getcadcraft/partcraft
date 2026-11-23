---
title: Hacer trayectorias y G-code (Fabricación)
summary: Preparar material bruto y origen de trabajo, elegir herramientas, agregar operaciones de cara, pocket, contorno, taladro y chaflán eligiendo caras, acabar todo el modelo en 3D (paralela, scallop), simular el material contra el modelo por cortes excesivos y tiempo de ciclo, y descargar G-code desde uno de los tres postprocesadores integrados o uno que editás vos.
keywords: exact step, step para taller, coordenadas de trabajo, entrega cam, paralela, scallop, acabado 3d, acabado, punta esférica, biblioteca de herramientas, editar post, post personalizado, editor de post, adaptativo, desbaste adaptativo, compromiso constante, trocoidal, hsm, mecanizado a alta velocidad, fabricación, CAM, trayectoria, G-code, NC, CNC, fresadora, fresado, pocket, contorno, perfil, refrentado, taladro, picoteo, G83, G81, G73, chaflán, material bruto, desplazamiento de trabajo, G54, postprocesador, GRBL, LinuxCNC, avances y velocidades, simulación, corte excesivo, tiempo de ciclo
from: f8a03be8
---

El espacio de Fabricación convierte la pieza en trayectorias y las escribe como G-code. La mayoría de las operaciones son fresado **2,5 ejes**: la herramienta queda vertical, las paredes se cortan rectas hacia abajo y los fondos planos. **3D desbaste** y **Resto** desbastan piezas curvas en 3D ([3D desbaste y mecanizado de resto](topic:rough-3d)); **Paralela** y **Scallop** las acaban ([acabado 3D](topic:finish-3d)). En una máquina con ejes rotativos cualquier operación puede llevar herramienta inclinada, y dos operaciones mueven los ejes rotativos mientras cortan ([mecanizado 4 y 5 ejes](topic:multi-axis)). Hay operaciones para torno ([Torneado](topic:turning)) y para palpador ([Palpado](topic:probing)). Trabaja sobre las caras nombradas que da el kernel de malla a la pieza (ver [El kernel de malla](topic:solid-kernels)).

Versión de laboratorio: revisá cada programa en el simulador propio del control, y primero corrélo en el aire sobre el material.

## Preparación

1. Elegí **Fabricación** en el selector de espacio de trabajo y después {{ui:New setup}}.
2. En la pestaña **Setup** elegí:
   - **Eje de herramienta (+Z)**: hacia dónde apunta la herramienta dentro de la pieza. +Y del mundo (arriba de PartCraft) es lo predeterminado; entonces X de máquina es X del mundo e Y de máquina es −Z del mundo.
   - **Origen de trabajo (G54)**: una esquina o centro del material, arriba o abajo, el centro superior del modelo, o el origen del modelo.
   - **Material bruto**: caja o cilindro, sea el modelo más desplazamientos (lados, arriba, abajo) o tamaño fijo.
   - **Material** (fija los avances y velocidades iniciales), el **postprocesador** (control), la velocidad máxima del husillo de la máquina, la velocidad de avance rápido y el tiempo de cambio de herramienta, refrigerante y número de programa.

## Herramientas

La pestaña **Tools** tiene la biblioteca: fresas planas, de punta esférica y punta redonda, brocas, fresas de chaflán y fresas de refrentar, cada una con número T, diámetro, filos y largo de filo (además radio de esquina, ángulo de punta o de chaflán donde corresponda).

Mis herramientas se pueden guardar en el navegador y pasar entre computadoras como archivo: ver [La biblioteca de herramientas](topic:tool-library).

La velocidad del husillo y el avance salen del material: n = 1000 × velocidad de corte / (π × diámetro), avance = n × filos × carga de viruta (brocas: n × avance por vuelta). Los números son valores iniciales conservadores de rangos publicados, no ajustados a tu máquina; escribí la velocidad de corte, carga de viruta, rpm o avance de tu fabricante de herramientas para cambiarlos. Cuando la velocidad supera el máximo de la máquina, queda fijada allí y el avance la sigue, manteniendo la carga de viruta.

## Agregar operaciones

Cada botón de la barra agrega una operación y, si necesita geometría, empieza a elegir: hacé clic en caras o aristas de la vista (otro clic la quita), después {{ui:Done picking}} o {{key:Esc}}.

| Operación | Elegir | Qué hace |
|---|---|---|
| {{ui:Face}} | nada | Pasadas en zigzag sobre todo el material, más allá de sus bordes, hasta la cara superior del modelo |
| {{ui:Pocket}} | una cara plana de fondo, un agujero redondo o una cadena cerrada de aristas | Limpia la región con pasadas de desplazamiento de adentro hacia afuera, en cada paso de profundidad; las islas (caras que se levantan dentro del fondo) quedan; un fondo abierto por todos lados (nada más alto afuera) se limpia hasta el borde del material |
| {{ui:Adaptive}} | igual que Pocket | Limpia la misma región en pasadas que cortan un ancho fijo (**Compromiso**, fracción del diámetro), así la fresa nunca toma una ranura de ancho completo, ni siquiera en esquinas; entra en hélice y acaba las paredes en cada nivel. Cortes angostos permiten paso más profundo y avance más alto |
| {{ui:Contour}} | una cara plana (su contorno), una cara redonda o aristas | Sigue el contorno desplazado por el radio de la herramienta, afuera o adentro, con arcos de entrada y salida y lengüetas opcionales |
| {{ui:Drill}} | agujeros (hacé clic en la pared o en el borde de un agujero) | Taladra cada agujero con un ciclo fijo: picoteo (G83), taladrado (G81) o rotura de viruta (G73); o dá un diámetro para taladrar cada agujero de esa medida |
| {{ui:Chamfer}} | el contorno de una cara o sus aristas | Pasa una fresa de chaflán por la arista para cortar el ancho que fijaste |
| {{ui:Parallel}} | nada (todo el modelo) | Acabado 3D en líneas paralelas a cualquier ángulo, siguiendo la superficie con fresa de punta esférica, redonda o plana. Ver [Acabado 3D](topic:finish-3d) |
| {{ui:Scallop}} | nada (todo el modelo) | Acabado 3D en pasadas a una distancia fija sobre la superficie, para que la cresta entre ellas tenga la altura pedida |

Elegí una operación en la lista para cambiar su herramienta, alturas (libramiento, retroceso, altura de avance, arriba, abajo), profundidad por pasada, paso lateral, material a dejar, pasada de acabado, entrada (hélice, rampa o inmersión), fresado en concordancia, lengüetas o ciclo. {{ui:Up}} y {{ui:Down}} reordenan, {{ui:Suppress}} la deja fuera, {{ui:Delete}} la quita. Todo queda en el historial de deshacer y se guarda en el archivo de la pieza.

El paso lateral de un pocket es como máximo la mitad del diámetro de la herramienta, así cada punto de su fondo queda dentro de un radio de herramienta de alguna pasada. Las esquinas interiores conservan el radio de la herramienta.

**Desbaste adaptativo** mantiene el compromiso de la fresa cerca de un valor. Un compromiso de 0,15 del diámetro es un ángulo de compromiso de unos 46°: el arco del borde de la fresa dentro del material. Un pocket con desplazamiento, en cambio, corta ancho completo en su primera pasada y da más vueltas en cada esquina interior. Entre pasadas la herramienta queda abajo donde se mueve por aire ya cortado, y sube y baja en aire cortado en otros lugares. Las pasadas se calculan sobre una cuadrícula fina de la región (celdas de un doceavo del radio de la herramienta), así el compromiso puede superar hasta una celda lo fijado; las paredes se acaban exactas. Una región grande y abierta hace un programa largo con muchos movimientos cortos.

## Simular

Las trayectorias se rehacen después de cada cambio (también las de la pieza). {{ui:Simulate}} muestra además el material que queda después de todo el programa. El panel muestra:

- **Tiempo de ciclo**: los movimientos de corte a su avance, los rápidos como líneas rectas a la velocidad de avance rápido de la preparación, más el tiempo de cambio de herramienta. Las máquinas reales aceleran, así que tardan más.
- **Cortes excesivos**: lugares donde la herramienta bajó más de 0,02 mm bajo la superficie de la pieza. Marcas rojas los muestran en la vista.
- **Material que queda en la pieza**.

El material es un mapa de alturas de la parte superior (mapa Z), así que no puede mostrar socavaduras. Arrastrá **Reproducción** para mover la herramienta a lo largo del programa. En la vista, los movimientos de corte son sólidos y los rápidos punteados, un color por operación.

Con **Mostrar el material simulado** activado, el material se colorea contra el modelo, celda por celda: **verde** donde está sobre el modelo (dentro de 0,02 mm), **rojo** donde la herramienta entró en el modelo, y donde queda material sobre el modelo **amarillo** para una capa delgada, **naranja** para más, pasando al **gris** del material sin cortar a 1 mm o más. Los colores se rehacen con cada cambio, desde el mismo mapa de alturas que los números del panel, así verde y rojo coinciden con la línea de Cortes excesivos. Un chaflán entra en el modelo a propósito y muestra rojo a lo largo de su borde.

## Postprocesar el G-code

Elegí el control en **Post** y apretá {{ui:Download G-code}} (o {{ui:Post}} en la barra):

| Control | Archivo | Notas |
|---|---|---|
| Estilo Fanuc ISO | .nc | %, número O, números de línea, T M6 con G43 H, ciclos fijos |
| GRBL | .nc | Sin cambiador de herramienta ni ciclos fijos: un cambio de herramienta se pausa con M0, el taladrado se escribe como movimientos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fijos, M2 |
| Torno estilo Fanuc | .nc | Para programas de torneado: X como diámetro, avance por vuelta, G96 bajo un límite G50, roscado G32 |
| Torno LinuxCNC | .ngc | Para programas de torneado: diámetros G7, G95, G96, roscado G33; no escribe movimiento de referencia |
| Propio | cualquiera | Un postprocesador que escribiste o cambiaste: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Cada archivo empieza con comentarios del programa, material, desplazamiento de trabajo y herramientas. Las coordenadas están en milímetros con 3 decimales. {{ui:Toolpath CSV}} y {{ui:Toolpath JSON}} exportan los movimientos en sí.

**Revisá la salida en el simulador propio de tu máquina antes de cortar, y corrélo primero en el aire sobre el material.** Los tres postprocesadores integrados son puntos de partida que siguen el comportamiento documentado de los controles; no fueron probados en ninguna máquina en particular. Un postprocesador que cambiás es tuyo para probarlo. Cómo escribir uno: [Postprocesadores](topic:post-processors).

## Exact STEP para el taller

Debajo de los botones de G-code, en la pestaña **Operations**, {{ui:Exact STEP (work coordinates)}} descarga `<part>-work.step`: la pieza como sólido exacto (cilindros verdaderos para agujeros y resaltos, círculos verdaderos para sus aristas), con el origen en el origen de trabajo de esta preparación y Z a lo largo del eje de herramienta. Esas son las coordenadas que usa el G-code, así el programa CAM o verificador del taller alinea el modelo con el programa sin moverlo. El archivo tiene solo la pieza, no el material ni las trayectorias.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} escribe el mismo sólido en la posición propia de la pieza (Z arriba): ver [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- Pockets, contornos, taladrado y chaflanes son de 2,5 ejes. Las piezas curvas se desbastan y acaban en 3D con sus propias operaciones ([3D desbaste y mecanizado de resto](topic:rough-3d), [acabado 3D](topic:finish-3d)). El desbaste adaptativo es 2D (fondos planos).
- Herramientas inclinadas, acabado de 5 ejes y de 4º eje, torneado y palpado existen, cada uno con límites propios, y **ninguno se ejecutó todavía en una máquina**: ver [mecanizado 4 y 5 ejes](topic:multi-axis), [Torneado](topic:turning) y [Palpado](topic:probing).
- Portaherramientas y mangos no se revisan por colisión; aparece un aviso cuando un corte es más profundo que el largo de filo.
- Avances y velocidades son valores iniciales. Un postprocesador es un texto que podés editar, pero solo decide cómo se escriben los movimientos; no puede cambiar la trayectoria, agregar ejes ni conocer tu máquina ([Postprocesadores](topic:post-processors) lista lo que no puede hacer).

## Enviar el programa a una máquina

En CadCraft Studio de escritorio, con una máquina configurada en Studio, **Enviar a una máquina…** aparece junto a **Download G-code** y sube el mismo programa a la máquina en tu red. Nunca se inicia desde PartCraft: arrancalo en la máquina cuando esté claro. En el navegador el botón no se muestra (una página web no puede llegar a una máquina de tu red): descargá el programa.
