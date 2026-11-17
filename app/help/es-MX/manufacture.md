---
title: Crear trayectorias y código G (Manufactura)
summary: Configure el material en bruto y un origen de trabajo, elija herramientas, agregue operaciones de cara, cajera, contorno, taladrado y chaflán designando caras, termine todo el modelo en 3D (paralela, festón), simule el material en bruto contra el modelo para detectar cortes excesivos y tiempo de ciclo, y descargue el código G desde uno de los tres posprocesadores integrados o desde uno que usted edite.
keywords: step exacto, step para el taller, coordenadas de trabajo, entrega a CAM, paralela, festón, acabado 3D, acabado, fresa de punta esférica, biblioteca de herramientas, editar posprocesador, posprocesador personalizado, editor de posprocesador, adaptativo, desbaste adaptativo, compromiso constante, trocoidal, hsm, mecanizado a alta velocidad, manufactura, CAM, trayectoria, código G, NC, CNC, fresadora, fresado, cajera, contorno, perfil, refrentado, taladro, picoteo, G83, G81, G73, chaflán, material en bruto, desfase de trabajo, G54, posprocesador, GRBL, LinuxCNC, avances y velocidades, simulación, corte excesivo, tiempo de ciclo
from: beeb29aa
---

El espacio de trabajo Manufactura convierte la pieza en trayectorias para una fresadora de 3 ejes y las escribe como código G. La mayoría de las operaciones son de **2.5 ejes**: la herramienta se mantiene vertical, las paredes se cortan rectas hacia abajo y los fondos son planos. **Paralela** y **Festón** terminan superficies curvas en 3D (vea [Acabado 3D](topic:finish-3d)); la herramienta sigue vertical (tres ejes, sin inclinación). Trabaja sobre las caras nombradas que el núcleo de malla da a la pieza (vea [El núcleo de malla](topic:solid-kernels)).

Versión de laboratorio: revise cada programa en el simulador propio de su control, y ejecútelo primero en el aire sobre el material en bruto.

## Configurar

1. Elija **Manufactura** en el selector de espacios de trabajo y luego {{ui:Configuración nueva}}.
2. En la pestaña **Configuración** elija:
   - **Eje de herramienta (+Z)**: hacia dónde apunta la herramienta dentro de la pieza. Por defecto es +Y del mundo (arriba en PartCraft); la X de la máquina es entonces la X del mundo, y la Y de la máquina es −Z del mundo.
   - **Origen de trabajo (G54)**: una esquina o el centro del material en bruto, arriba o abajo, el centro superior del modelo o el origen del modelo.
   - **Material en bruto**: una caja o un cilindro, ya sea el modelo más desfases (lados, arriba, abajo) o un tamaño fijo.
   - **Material** (fija los avances y velocidades iniciales), el **posprocesador** (control), la velocidad máxima del husillo de la máquina, la velocidad de avance rápido, el tiempo de cambio de herramienta, el refrigerante y el número de programa.

## Herramientas

La pestaña **Herramientas** contiene la biblioteca: fresas de extremo planas, esféricas y de radio de esquina, brocas, fresas para chaflán y fresas de refrentado, cada una con un número T, diámetro, número de filos y longitud de filo (más radio de esquina, ángulo de punta o de chaflán donde aplique).

Mis herramientas se pueden guardar en el navegador y pasar entre computadoras como archivo: vea [La biblioteca de herramientas](topic:tool-library).

La velocidad del husillo y el avance salen del material: n = 1000 × velocidad de corte / (π × diámetro), avance = n × filos × carga de viruta (brocas: n × avance por revolución). Los números son valores iniciales conservadores de rangos publicados, no ajustados para su máquina; escriba la velocidad de corte, la carga de viruta, las rpm o el avance de su fabricante de herramientas para reemplazarlos. Cuando la velocidad supera el máximo de la máquina se mantiene allí y el avance la sigue, conservando la carga de viruta.

## Agregar operaciones

Cada botón de la barra agrega una operación y, si necesita geometría, empieza a designar: haga clic en caras o aristas en la vista (vuelva a hacer clic para quitar una) y luego {{ui:Terminar selección}} o {{key:Esc}}.

| Operación | Designar | Qué hace |
|---|---|---|
| {{ui:Cara}} | nada | Pasadas en zigzag sobre todo el material en bruto, más allá de sus bordes, hasta la parte superior del modelo |
| {{ui:Cajera}} | un fondo plano, un agujero redondo o una cadena cerrada de aristas | Desbasta la región con pasadas de desfase de adentro hacia afuera, en cada profundidad; las islas (caras que se levantan dentro del fondo) se dejan; un fondo abierto por todos lados (nada más alto por fuera) se desbasta hasta el borde del material en bruto |
| {{ui:Adaptativo}} | igual que Cajera | Desbasta la misma región en pasadas que cortan cada una un ancho fijo (**Compromiso**, una fracción del diámetro), de modo que la fresa nunca toma una ranura de ancho completo, ni siquiera en las esquinas; entra en hélice y termina las paredes en cada nivel. Los cortes estrechos permiten una profundidad de paso mayor y un avance más alto |
| {{ui:Contorno}} | una cara plana (su contorno), una cara redonda o aristas | Sigue el contorno desplazado por el radio de la herramienta, por fuera o por dentro, con arcos de entrada y salida y lengüetas opcionales |
| {{ui:Taladrado}} | agujeros (haga clic en la pared o en el borde de un agujero) | Taladra cada agujero con un ciclo fijo: picoteo (G83), taladrado (G81) o rotura de viruta (G73); o indique un diámetro para taladrar todos los agujeros de ese tamaño |
| {{ui:Chaflán}} | el contorno o las aristas de una cara | Recorre la arista con una fresa de chaflán para que corte el ancho que defina |
| {{ui:Paralela}} | nada (todo el modelo) | Acabado 3D en líneas paralelas a cualquier ángulo, siguiendo la superficie con una fresa esférica, de radio de esquina o plana. Vea [Acabado 3D](topic:finish-3d) |
| {{ui:Festón}} | nada (todo el modelo) | Acabado 3D en pasadas separadas una distancia fija sobre la superficie, de modo que la cresta entre ellas tenga la altura que pida |

Seleccione una operación en la lista para cambiar su herramienta, sus alturas (seguridad, retracción, altura de avance, superior, inferior), la profundidad de paso, el paso lateral, el sobrematerial, la pasada de acabado, la entrada (hélice, rampa o inmersión), el fresado en concordancia, las lengüetas o el ciclo. {{ui:Subir}} y {{ui:Bajar}} reordenan, {{ui:Suprimir}} la deja fuera y {{ui:Eliminar}} la quita. Todo está en el historial de deshacer y se guarda en el archivo de la pieza.

El paso lateral de una cajera es como máximo la mitad del diámetro de la herramienta, así que cada punto de su fondo queda a menos de un radio de herramienta de alguna pasada. Las esquinas interiores conservan el radio de la herramienta.

**Desbaste adaptativo** mantiene el compromiso de la fresa cerca de un valor. Un compromiso de 0.15 del diámetro equivale a un ángulo de compromiso de unos 46°: el arco del filo de la fresa dentro del material. Una cajera desplazada, en cambio, corta de ancho completo en su primera pasada y da más vueltas en cada esquina interior. Entre pasadas la herramienta permanece abajo donde se mueve por aire ya cortado, y sube y baja en el aire cortado en los demás casos. Las pasadas se calculan en una cuadrícula fina sobre la región (celdas de una doceava parte del radio de la herramienta), así que el compromiso puede superar en una celda lo fijado; las paredes se terminan con exactitud. Una región grande y abierta produce un programa largo con muchos movimientos cortos.

## Simular

Las trayectorias se vuelven a generar después de cada cambio (las de la pieza también). {{ui:Simular}} además muestra el material en bruto que queda después de todo el programa. El panel muestra:

- **Tiempo de ciclo**: los movimientos de avance a su avance, los rápidos como líneas rectas a la velocidad de avance rápido de la configuración, más el tiempo de cambio de herramienta. Las máquinas reales aceleran, así que tardan más.
- **Cortes excesivos**: lugares donde la herramienta bajó más de 0.02 mm por debajo de la superficie de la pieza. Las marcas rojas los muestran en la vista.
- **Material que queda en la pieza**.

El material en bruto es un mapa de alturas de la parte superior (un mapa Z), así que no puede mostrar socavados. Arrastre **Reproducción** para mover la herramienta a lo largo del programa. En la vista, los movimientos de avance son sólidos y los rápidos discontinuos, con un color por operación.

Con **Mostrar el material simulado** activado, el material se colorea contra el modelo, celda por celda: **verde** donde está sobre el modelo (dentro de 0.02 mm), **rojo** donde la herramienta entró en el modelo y, donde queda material sobre el modelo, **amarillo** para una capa delgada, **naranja** para más, pasando al **gris** del material sin cortar a 1 mm o más. Los colores se vuelven a generar con cada cambio, a partir del mismo mapa de alturas que los números del panel, así que el verde y el rojo coinciden con la línea Cortes excesivos. Un chaflán corta el modelo a propósito y muestra rojo a lo largo de su borde.

## Posprocesar el código G

Elija el control en **Posprocesador** y pulse {{ui:Descargar código G}} (o {{ui:Posprocesador}} en la barra):

| Control | Archivo | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de línea, T M6 con G43 H, ciclos fijos |
| GRBL | .nc | Sin cambiador de herramienta ni ciclos fijos: un cambio de herramienta se detiene con M0, y el taladrado se escribe como movimientos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fijos, M2 |
| Personalizado | cualquiera | Un posprocesador que usted escribió o cambió: {{ui:Editar post…}}, {{ui:Post nuevo…}}, {{ui:Importar archivo de post…}} |

Cada archivo empieza con comentarios del programa, el material en bruto, el desfase de trabajo y las herramientas. Las coordenadas van en milímetros con 3 decimales. {{ui:Trayectoria CSV}} y {{ui:Trayectoria JSON}} exportan los movimientos mismos.

**Revise la salida en el simulador de su máquina antes de cortar, y ejecútela primero en el aire sobre el material en bruto.** Los tres posprocesadores integrados son puntos de partida que siguen el comportamiento documentado de los controles; no se han probado en ninguna máquina en particular. Un posprocesador que usted cambie es suyo para probarlo. Cómo escribir uno: [Posprocesadores](topic:post-processors).

## STEP exacto para el taller

Debajo de los botones de código G, en la pestaña **Operaciones**, {{ui:STEP exacto (coordenadas de trabajo)}} descarga `<pieza>-work.step`: la pieza como sólido exacto (cilindros verdaderos para agujeros y resaltes, círculos verdaderos para sus aristas), con su origen en el origen de trabajo de esta configuración y Z a lo largo del eje de la herramienta. Esas son las coordenadas que usa el código G, así que el programa CAM o el verificador del taller alinea el modelo con el programa sin moverlo. El archivo contiene solo la pieza, no el material en bruto ni las trayectorias.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe el mismo sólido en la posición propia de la pieza (Z hacia arriba): vea [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- Cajeras, contornos, taladrado y chaflanes son de 2.5 ejes. Las caras curvas pueden terminarse en 3D ([paralela y festón](topic:finish-3d)), pero no desbastarse en 3D (un cono queda en escalones hasta que lo termine), y no hay mecanizado de restos. El desbaste adaptativo es 2D (fondos planos).
- Solo tres ejes: sin inclinación, sin torneado, sin inspección.
- Los portaherramientas y los vástagos no se verifican contra colisiones; aparece una advertencia cuando un corte es más profundo que la longitud del filo.
- Los avances y velocidades son valores iniciales. Un posprocesador es texto que puede editar, pero solo decide cómo se escriben los movimientos; no puede cambiar la trayectoria, agregar ejes ni conocer su máquina ([Posprocesadores](topic:post-processors) enumera lo que no puede hacer).

## Enviar el programa a una máquina

En CadCraft Studio de escritorio, con una máquina configurada en Studio, **Enviar a una máquina…** aparece junto a **Descargar código G** y sube el mismo programa a la máquina de su red. Nunca se inicia desde PartCraft: arránquelo en la máquina cuando esté claro. En un navegador no se muestra el botón (una página web no puede acceder a una máquina de su red): descargue el programa en su lugar.
