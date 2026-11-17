---
title: Crear trayectorias y G-code (Fabricación)
summary: Defina el material en bruto y un origen de trabajo, elija herramientas, añada operaciones de cara, cajera, contorno, taladrado y chaflán eligiendo caras, acabe el modelo completo en 3D (paralelo, festón), simule el material en bruto frente al modelo para detectar sobrecortes y el tiempo de ciclo, y descargue el G-code de uno de los tres posprocesadores integrados o de uno que edite usted mismo.
keywords: step exacto, step para el taller, coordenadas de trabajo, entrega a CAM, paralelo, festón, acabado 3D, acabado, fresa de punta esférica, biblioteca de herramientas, editar posprocesador, posprocesador personalizado, editor de posprocesador, adaptativo, desbaste adaptativo, compromiso constante, trocoidal, hsm, mecanizado a alta velocidad, fabricación, CAM, trayectoria, G-code, NC, CNC, fresadora, fresado, cajera, contorno, perfil, refrentado, taladro, picoteo, G83, G81, G73, chaflán, material en bruto, desfase de origen, G54, posprocesador, GRBL, LinuxCNC, avances y velocidades, simulación, sobrecorte, tiempo de ciclo
from: beeb29aa
---

El espacio de trabajo Fabricación convierte la pieza en trayectorias para una fresadora de 3 ejes y las escribe como G-code. La mayoría de las operaciones son de **2.5 ejes**: la herramienta permanece vertical, las paredes se cortan rectas hacia abajo y los fondos son planos. **Paralelo** y **Festón** acaban superficies curvas en 3D (véase [Acabado 3D](topic:finish-3d)); la herramienta sigue vertical (tres ejes, sin inclinación). Trabaja sobre las caras con nombre que da a la pieza el núcleo de malla (véase [El núcleo de malla](topic:solid-kernels)).

Versión de laboratorio: compruebe cada programa en el simulador de su propio control, y ejecútelo primero en el aire, sobre el material en bruto.

## Preparación

1. Elija **Fabricación** en el selector de espacios de trabajo y después {{ui:Configuración nueva}}.
2. En la pestaña **Preparación** elija:
   - **Eje de herramienta (+Z)**: hacia dónde apunta la herramienta dentro de la pieza. El Y del mundo positivo (arriba en PartCraft) es el predeterminado; entonces la X de la máquina es la X del mundo, y la Y de la máquina es −Z del mundo.
   - **Origen de trabajo (G54)**: una esquina o el centro del material en bruto, arriba o abajo, el centro superior del modelo o el origen del modelo.
   - **Material en bruto**: una caja o un cilindro, ya sea el modelo más sus desplazamientos (laterales, superior, inferior) o un tamaño fijo.
   - **Material** (fija los avances y velocidades iniciales), el **posprocesador** (control), la velocidad máxima del husillo de la máquina, la velocidad de avance rápido y el tiempo de cambio de herramienta, la refrigeración y el número de programa.

## Herramientas

La pestaña **Herramientas** contiene la biblioteca: fresas de extremo planas, esféricas y redondeadas, brocas, fresas de chaflán y fresas de refrentado, cada una con un número T, diámetro, número de filos y longitud de filo (además del radio de esquina, o el ángulo de punta o de chaflán, cuando corresponda).

Mis herramientas pueden guardarse en el navegador y trasladarse entre ordenadores como archivo: véase [La biblioteca de herramientas](topic:tool-library).

La velocidad del husillo y el avance vienen del material: n = 1000 × velocidad de corte / (π × diámetro), avance = n × filos × carga de viruta (brocas: n × avance por revolución). Son valores de partida conservadores, tomados de rangos publicados, no ajustados a su máquina; escriba la velocidad de corte, la carga de viruta, las rpm o el avance de su fabricante de herramientas para sustituirlos. Cuando la velocidad supera la máxima de la máquina, se mantiene en ese límite y el avance la sigue, conservando la carga de viruta.

## Añadir operaciones

Cada botón de la barra añade una operación y, cuando necesita geometría, empieza la selección: haga clic en caras o aristas de la vista (vuelva a hacer clic para quitar una) y después en {{ui:Terminar selección}} o {{key:Esc}}.

| Operación | Selección | Qué hace |
|---|---|---|
| {{ui:Cara}} | nada | Pasadas en zigzag sobre todo el material en bruto, más allá de sus bordes, hasta la parte superior del modelo |
| {{ui:Cajera}} | una cara plana de fondo, un agujero redondo o una cadena cerrada de aristas | Vacía la región con pasadas de desfase de dentro hacia fuera, en cada paso de profundidad; las islas (caras que se elevan dentro del fondo) se dejan; un fondo abierto por todos lados (sin nada más alto fuera) se vacía hasta el borde del material en bruto |
| {{ui:Adaptativo}} | lo mismo que Cajera | Vacía la misma región en pasadas que cortan un ancho fijo (**Compromiso**, una fracción del diámetro), de modo que la fresa nunca toma una ranura de ancho completo, ni siquiera en las esquinas; entra por hélice y acaba las paredes en cada nivel. Los cortes estrechos permiten una profundidad de paso mayor y un avance más alto |
| {{ui:Contorno}} | una cara plana (su contorno), una cara redonda o aristas | Sigue el contorno desplazado por el radio de la herramienta, por fuera o por dentro, con arcos de entrada y salida y, si se desea, pestañas |
| {{ui:Taladrado}} | agujeros (haga clic en la pared o en el borde de un agujero) | Taladra cada agujero con un ciclo fijo: picoteo (G83), taladrado (G81) o rotura de viruta (G73); o indique un diámetro para taladrar todos los agujeros de esa medida |
| {{ui:Chaflán}} | el contorno de una cara o sus aristas | Pasa una fresa de chaflán a lo largo de la arista para que corte el ancho que fije |
| {{ui:Paralelo}} | nada (todo el modelo) | Acabado 3D en líneas paralelas a cualquier ángulo, siguiendo la superficie con una fresa de punta esférica, redondeada o plana. Véase [Acabado 3D](topic:finish-3d) |
| {{ui:Festón}} | nada (todo el modelo) | Acabado 3D en pasadas separadas una distancia fija sobre la superficie, de modo que la cresta entre ellas tenga la altura que pida |

Seleccione una operación en la lista para cambiar su herramienta, sus alturas (seguridad, retracción, altura de avance, superior, inferior), la profundidad de paso, el paso lateral, la sobremedida, la pasada de acabado, la entrada (hélice, rampa o inmersión), el fresado en concordancia, las pestañas o el ciclo. {{ui:Subir}} y {{ui:Bajar}} reordenan, {{ui:Suprimir}} la deja fuera y {{ui:Eliminar}} la quita. Todo está en el historial de deshacer y se guarda en el archivo de la pieza.

El paso lateral de una cajera es como máximo la mitad del diámetro de la herramienta, así que cada punto de su fondo queda a menos de un radio de herramienta de una pasada. Las esquinas interiores conservan el radio de la herramienta.

**El desbaste adaptativo** mantiene el compromiso de la fresa cerca de un valor. Un compromiso de 0.15 del diámetro equivale a un ángulo de compromiso de unos 46°: el arco del borde de la fresa dentro del material. Una cajera desplazada, en cambio, corta el ancho completo en su primera pasada y se envuelve más en cada esquina interior. Entre pasadas, la herramienta permanece abajo donde se mueve por aire ya cortado, y sube y baja en aire cortado en el resto. Las pasadas se calculan en una malla fina sobre la región (celdas de aproximadamente una doceava parte del radio de la herramienta), así que el compromiso puede superar lo fijado hasta en una celda de ancho; las paredes se acaban exactamente. Una región grande y abierta produce un programa largo con muchos movimientos cortos.

## Simular

Las trayectorias se vuelven a calcular tras cada cambio (también las de la pieza). {{ui:Simular}} muestra además el material que queda tras todo el programa. El panel muestra:

- **Tiempo de ciclo**: los movimientos de avance a su avance, los rápidos como líneas rectas a la velocidad de avance rápido de la preparación, más el tiempo de cambio de herramienta. Las máquinas reales aceleran, así que tardan más.
- **Sobrecortes**: lugares donde la herramienta bajó más de 0.02 mm por debajo de la superficie de la pieza. Las marcas rojas los muestran en la vista.
- **Material que queda sobre la pieza**.

El material en bruto es un mapa de alturas de la parte superior (un mapa Z), así que no puede mostrar socavados. Arrastre **Reproducción** para mover la herramienta a lo largo del programa. En la vista, los movimientos de avance son continuos y los rápidos discontinuos, con un color por operación.

Con **Mostrar el material simulado** activado, el material se colorea frente al modelo, celda a celda: **verde** donde coincide con el modelo (a 0.02 mm), **rojo** donde la herramienta entró en el modelo, y, donde queda material sobre el modelo, **amarillo** para una capa fina y **naranja** para más, con una transición hasta el **gris** del material sin cortar a 1 mm o más. Los colores se vuelven a calcular con cada cambio, a partir del mismo mapa de alturas que los números del panel, así que el verde y el rojo coinciden con la línea de Sobrecortes. Un chaflán corta el modelo a propósito y muestra rojo a lo largo de su borde.

## Generar el G-code

Elija el control en **Posprocesador** y pulse {{ui:Descargar código G}} (o {{ui:Posprocesador}} en la barra):

| Control | Archivo | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de línea, T M6 con G43 H, ciclos fijos |
| GRBL | .nc | Sin cambiador de herramientas ni ciclos fijos: un cambio de herramienta hace una pausa con M0, y el taladrado se escribe como movimientos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fijos, M2 |
| El suyo | cualquiera | Un posprocesador que escribió o cambió: {{ui:Editar posprocesador…}}, {{ui:Nuevo posprocesador…}}, {{ui:Importar archivo de posprocesador…}} |

Cada archivo empieza con comentarios sobre el programa, el material en bruto, el desfase de origen y las herramientas. Las coordenadas están en milímetros con 3 decimales. {{ui:Trayectoria CSV}} y {{ui:Trayectoria JSON}} exportan los movimientos en sí.

**Compruebe la salida en el simulador de su propia máquina antes de mecanizar, y ejecútela primero en el aire, sobre el material en bruto.** Los tres posprocesadores integrados son puntos de partida que siguen el comportamiento documentado de los controles; no se han demostrado en ninguna máquina concreta. Un posprocesador que usted cambie es responsabilidad suya demostrarlo. Cómo escribir uno: [Posprocesadores](topic:post-processors).

## STEP exacto para el taller

Debajo de los botones de G-code, en la pestaña **Operaciones**, {{ui:STEP exacto (coordenadas de trabajo)}} descarga `<pieza>-work.step`: la pieza como sólido exacto (cilindros reales para agujeros y resaltes, círculos reales en sus aristas), con su origen en el origen de trabajo de esta preparación y Z a lo largo del eje de herramienta. Son las coordenadas que usa el G-code, así que el programa CAM o el verificador del taller alinea el modelo con el programa sin moverlo. El archivo contiene solo la pieza, no el material en bruto ni las trayectorias.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe el mismo sólido en la posición propia de la pieza (Z hacia arriba): véase [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- Las cajeras, los contornos, los taladrados y los chaflanes son de 2.5 ejes. Las caras curvas pueden acabarse en 3D ([paralelo y festón](topic:finish-3d)), pero no desbastarse en 3D (un cono queda en escalones hasta que lo acabe), y no hay mecanizado de restos. El desbaste adaptativo es 2D (fondos planos).
- Solo tres ejes: sin inclinación, sin torneado, sin inspección.
- Los portaherramientas y los vástagos no se comprueban contra colisiones; aparece un aviso cuando un corte es más profundo que la longitud del filo.
- Los avances y velocidades son valores de partida. Un posprocesador es texto que puede editar, pero solo decide cómo se escriben los movimientos; no puede cambiar la trayectoria, añadir ejes ni conocer su máquina ([Posprocesadores](topic:post-processors) enumera lo que no puede hacer).

## Enviar el programa a una máquina

En CadCraft Studio de escritorio, con una máquina configurada en Studio, **Enviar a una máquina…** aparece junto a **Descargar código G** y sube el mismo programa a la máquina de su red. Nunca se inicia desde PartCraft: arránquelo en la máquina cuando esté claro. En un navegador el botón no se muestra (una página web no puede acceder a una máquina de su red): descargue el programa en su lugar.
