---
title: Generar trayectorias y código G (Fabricación)
summary: Configure el material en bruto y un origen de trabajo, elija herramientas, añada operaciones de cara, cajera, contorno, taladrado y chaflán eligiendo caras, acabe toda la pieza en 3D (paralela, festón), simule el material en bruto frente al modelo para detectar rebajes y el tiempo de ciclo, y descargue el código G desde uno de los tres posprocesadores integrados o desde uno que usted mismo edite.
keywords: STEP exacto, STEP para el taller, coordenadas de trabajo, entrega a CAM, paralelo, festón, acabado 3d, acabado, fresa de punta esférica, biblioteca de herramientas, editar posprocesador, posprocesador personalizado, editor de posprocesadores, adaptativo, desbaste adaptativo, compromiso constante, trocoidal, HSM, mecanizado a alta velocidad, fabricación, CAM, trayectoria, código G, NC, CNC, fresadora, fresado, cajera, contorno, perfil, refrentado, taladro, picoteo, G83, G81, G73, chaflán, material en bruto, desfase de origen, G54, posprocesador, GRBL, LinuxCNC, avances y velocidades, simulación, rebaje, tiempo de ciclo
from: f8a03be8
---

El espacio de trabajo Fabricación convierte la pieza en trayectorias y las escribe como código G. La mayoría de las operaciones son fresado de **2.5 ejes**: la herramienta permanece vertical, las paredes se cortan en línea recta hacia abajo y los fondos, planos. **Desbaste 3D** y **Restos** desbastan piezas curvas en 3D ([Desbaste 3D y mecanizado de restos](topic:rough-3d)); **Paralela** y **Festón** las acaban ([Acabado 3D](topic:finish-3d)). En una máquina con ejes rotativos, cualquier operación puede tener la herramienta inclinada, y dos operaciones mueven los ejes rotativos durante el corte ([Mecanizado de 4 y 5 ejes](topic:multi-axis)). Hay operaciones para torno ([Torneado en torno](topic:turning)) y para palpador de contacto ([Palpado](topic:probing)). Trabaja sobre las caras con nombre que el núcleo de malla da a la pieza (véase [El núcleo de malla](topic:solid-kernels)).

Versión de laboratorio: compruebe cada programa en el simulador de su control y pruébelo primero en el aire, por encima del material en bruto.

## Configuración

1. Elija **Fabricación** en el selector de espacios de trabajo y, a continuación, {{ui:Configuración nueva}}.
2. En la pestaña **Configuración** elija:
   - **Eje de herramienta (+Z)**: hacia dónde apunta la herramienta dentro de la pieza. El +Y del mundo (la vertical de PartCraft) es el valor por defecto; el X de la máquina es entonces el X del mundo y el Y de la máquina es el −Z del mundo.
   - **Origen de trabajo (G54)**: una esquina o el centro del material en bruto, superior o inferior, el centro superior del modelo o el origen del modelo.
   - **Material en bruto**: un bloque o un cilindro, bien el modelo más los desplazamientos (laterales, superior, inferior), bien un tamaño fijo.
   - **Material** (fija los avances y velocidades iniciales), el **posprocesador** (control), la velocidad máxima del husillo de la máquina, la velocidad de avance rápido y el tiempo de cambio de herramienta, el refrigerante y el número de programa.

## Herramientas

La pestaña **Herramientas** contiene la biblioteca: fresas planas, de punta esférica y de radio de esquina, brocas, fresas de chaflán y fresas de refrentar, cada una con un número T, diámetro, número de filos y longitud de la parte acanalada (además del radio de esquina, el ángulo de punta o el ángulo de chaflán cuando corresponda).

Mis herramientas pueden guardarse en el navegador y trasladarse entre ordenadores como archivo: véase [La biblioteca de herramientas](topic:tool-library).

La velocidad del husillo y el avance se obtienen del material: n = 1000 × velocidad de corte / (π × diámetro), avance = n × filos × carga de viruta (brocas: n × avance por vuelta). Los valores son de partida conservadores tomados de rangos publicados, no ajustados a su máquina; escriba la velocidad de corte, la carga de viruta, las rpm o el avance de su fabricante de herramientas para sustituirlos. Cuando la velocidad supera el máximo de la máquina, se mantiene en ese máximo y el avance se ajusta en consecuencia, conservando la carga de viruta.

## Añadir operaciones

Cada botón de la barra de herramientas añade una operación y, cuando necesita geometría, inicia la selección: haga clic en caras o aristas en la vista (vuelva a hacer clic para quitar una), y a continuación {{ui:Terminar selección}} o {{key:Esc}}.

| Operación | Selección | Qué hace |
|---|---|---|
| {{ui:Cara}} | nada | Pasadas en zigzag sobre todo el material en bruto, más allá de sus bordes, hasta la parte superior del modelo |
| {{ui:Cajera}} | una cara plana de fondo, un agujero redondo o una cadena cerrada de aristas | Desbasta la zona con pasadas de desfase de dentro a fuera, en cada paso de profundidad; se dejan las islas (caras que sobresalen dentro del fondo); un fondo abierto por todos lados (sin nada más alto por fuera) se desbasta hasta el borde del material en bruto |
| {{ui:Adaptativo}} | lo mismo que Cajera | Desbasta la misma zona con pasadas que cortan cada una un ancho fijo (**Compromiso**, una fracción del diámetro), de modo que la fresa nunca toma una ranura de ancho completo, ni siquiera en las esquinas; entra en hélice y acaba las paredes en cada nivel. Los cortes estrechos permiten una profundidad de paso mayor y un avance más alto |
| {{ui:Contorno}} | una cara plana (su contorno), una cara redonda o aristas | Sigue el contorno desplazado por el radio de la herramienta, por fuera o por dentro, con arcos de entrada y salida y pestañas opcionales |
| {{ui:Taladrado}} | agujeros (haga clic en la pared o en el borde de un agujero) | Taladra cada agujero con un ciclo fijo: picoteo (G83), taladrado (G81) o rotura de viruta (G73); o indique un diámetro para taladrar todos los agujeros de ese tamaño |
| {{ui:Chaflán}} | el contorno o las aristas de una cara | Recorre la arista con una fresa de chaflán para que corte el ancho que fije |
| {{ui:Paralela}} | nada (todo el modelo) | Acabado 3D en líneas paralelas a cualquier ángulo, siguiendo la superficie con una fresa de punta esférica, de radio de esquina o plana. Véase [Acabado 3D](topic:finish-3d) |
| {{ui:Festón}} | nada (todo el modelo) | Acabado 3D en pasadas separadas una distancia fija sobre la superficie, de modo que la cresta entre ellas tenga la altura que pida |

Seleccione una operación en la lista para cambiar su herramienta, sus alturas (libre, retirada, altura de avance, superior, inferior), la profundidad de paso, el paso lateral, el material a dejar, la pasada de acabado, la entrada (hélice, rampa o inmersión), el fresado en concordancia, las pestañas o el ciclo. {{ui:Subir}} y {{ui:Bajar}} reordenan, {{ui:Suprimir}} la deja fuera y {{ui:Eliminar}} la quita. Todo queda en el historial de deshacer y se guarda en el archivo de la pieza.

El paso lateral de una cajera es como máximo la mitad del diámetro de la herramienta, de modo que cada punto de su fondo queda a menos de un radio de herramienta de una pasada. Las esquinas interiores conservan el radio de la herramienta.

El **desbaste adaptativo** mantiene el compromiso de la fresa cerca de un valor. Un compromiso de 0.15 del diámetro corresponde a un ángulo de compromiso de unos 46°: el arco del filo de la fresa en el material. Una cajera desplazada, en cambio, corta a ancho completo en su primera pasada y da más vueltas en cada esquina interior. Entre pasadas, la herramienta permanece en contacto donde se mueve por aire ya cortado, y se levanta y vuelve a bajar en el aire ya cortado en el resto de los casos. Las pasadas se calculan sobre una malla fina de la zona (celdas de alrededor de una doceava parte del radio de la herramienta), así que el compromiso puede superar en hasta una celda el valor fijado; las paredes se acaban con exactitud. Una zona grande y abierta produce un programa largo con muchos movimientos cortos.

## Simular

Las trayectorias se vuelven a generar tras cada cambio (también las de la pieza). {{ui:Simular}} muestra además el material que queda tras todo el programa. El panel muestra:

- **Tiempo de ciclo**: los movimientos de trabajo a su avance, los rápidos como líneas rectas a la velocidad de avance rápido de la configuración, más el tiempo de cambio de herramienta. Las máquinas reales aceleran, así que tardan más.
- **Rebajes**: puntos donde la herramienta bajó más de 0.02 mm por debajo de la superficie de la pieza. Marcas en rojo los muestran en la vista.
- **Material que queda en la pieza**.

El material en bruto es un mapa de alturas de la parte superior (un mapa Z), así que no puede mostrar socavados. Arrastre **Reproducción** para mover la herramienta a lo largo del programa. En la vista, los movimientos de trabajo son continuos y los rápidos discontinuos, con un color por operación.

Con **Mostrar el material simulado** activado, el material se colorea frente al modelo, celda a celda: **verde** donde está sobre el modelo (dentro de 0.02 mm), **rojo** donde la herramienta ha cortado en el modelo, y donde queda material sobre el modelo, **amarillo** para una capa fina, **naranja** para más, pasando al **gris** del material sin mecanizar a partir de 1 mm. Los colores se vuelven a generar con cada cambio, a partir del mismo mapa de alturas que los números del panel, así que el verde y el rojo coinciden con la línea de Rebajes. Un chaflán corta el modelo a propósito y muestra rojo a lo largo de su arista.

## Postprocesar el código G

Elija el control en **Posprocesador** y pulse {{ui:Descargar código G}} (o {{ui:Posprocesador}} en la barra de herramientas):

| Control | Archivo | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de línea, T M6 con G43 H, ciclos fijos |
| GRBL | .nc | Sin cambiador de herramienta ni ciclos fijos: un cambio de herramienta se detiene con M0, y el taladrado se escribe como movimientos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fijos, M2 |
| Torno estilo Fanuc | .nc | Para programas de torneado: X como diámetro, avance por vuelta, G96 con límite G50, roscado G32 |
| Torno LinuxCNC | .ngc | Para programas de torneado: diámetros G7, G95, G96, roscado G33; no escribe movimiento de referencia |
| Propio | cualquiera | Un posprocesador que usted escribió o cambió: {{ui:Editar posprocesador…}}, {{ui:Nuevo posprocesador…}}, {{ui:Importar archivo de posprocesador…}} |

Cada archivo empieza con comentarios sobre el programa, el material en bruto, el desfase de origen y las herramientas. Las coordenadas están en milímetros con 3 decimales. {{ui:Trayectoria CSV}} y {{ui:Trayectoria JSON}} exportan los propios movimientos.

**Compruebe la salida en el simulador de su máquina antes de mecanizar, y pruébela primero en el aire, por encima del material en bruto.** Los tres posprocesadores integrados son puntos de partida que siguen el comportamiento documentado de los controles; no se han probado en ninguna máquina concreta. Un posprocesador que usted cambie es responsabilidad suya demostrarlo. Cómo escribir uno: [Posprocesadores](topic:post-processors).

## STEP exacto para el taller

Debajo de los botones de código G de la pestaña **Operaciones**, {{ui:STEP exacto (coordenadas de trabajo)}} descarga `<part>-work.step`: la pieza como sólido exacto (cilindros verdaderos para agujeros y resaltos, círculos verdaderos para sus aristas), con su origen en el origen de trabajo de esta configuración y Z a lo largo del eje de herramienta. Esas son las coordenadas que usa el código G, de modo que el programa CAM o el verificador propio del taller alinea el modelo con el programa sin moverlo. El archivo contiene solo la pieza, no el material en bruto ni las trayectorias.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe el mismo sólido en la posición propia de la pieza (Z hacia arriba): véase [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- Las cajeras, los contornos, el taladrado y los chaflanes son de 2.5 ejes. Las piezas curvas se desbastan y acaban en 3D con sus propias operaciones ([Desbaste 3D y mecanizado de restos](topic:rough-3d), [Acabado 3D](topic:finish-3d)). El desbaste adaptativo es 2D (fondos planos).
- Las herramientas inclinadas, el acabado de 5 ejes y de cuarto eje, el torneado y el palpado están disponibles, cada uno con sus propios límites, y **ninguno se ha ejecutado en una máquina**: véase [Mecanizado de 4 y 5 ejes](topic:multi-axis), [Torneado en torno](topic:turning) y [Palpado](topic:probing).
- Los portaherramientas y los vástagos no se comprueban por colisiones; aparece un aviso cuando un corte es más profundo que la longitud de la parte acanalada.
- Los avances y las velocidades son valores de partida. Un posprocesador es texto que puede editar, pero solo decide cómo se escriben los movimientos; no puede cambiar la trayectoria, añadir ejes ni conocer su máquina ([Posprocesadores](topic:post-processors) enumera lo que no puede hacer).

## Enviar el programa a una máquina

En CadCraft Studio de escritorio, con una máquina configurada en Studio, **Enviar a una máquina…** aparece junto a **Descargar código G** y sube el mismo programa a la máquina de su red. Nunca se inicia desde PartCraft: arránquelo en la máquina cuando esté despejada. En un navegador el botón no se muestra (una página web no puede acceder a una máquina de su red): descargue el programa en su lugar.
