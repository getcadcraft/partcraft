---
title: Novedades de la versión 0.9 (anteriores)
summary: PartCraft 0.9 añade redondeos entre caras y dar espesor para crear sólidos, ensamblajes de miles de piezas, un almacén de documentos con revisiones, un complemento FEM sólido de tensión, diez métodos de arco, perfiles de acero del Reino Unido, una etapa de impresión y complementos de impresión en resina.
keywords: novedades 0.9, versión anterior, novedades, notas de la versión, registro de cambios, 0.9, redondeo entre caras, bola rodante, redondear varias aristas, dar espesor, sólido desde superficies, STEP, IGES, redondeos en escaneados, ensamblaje grande, visualización ligera, 20000 piezas, documentos, almacén, extraer, revisión, liberado, dónde se usa, enlace Rhino, Grasshopper, 3dm, cursores, planta de fabricación, cola de trabajos, FEM sólido, elementos finitos, von Mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfiles de acero del Reino Unido, libro azul, etapa de impresión, resina, goo, ctb, plataforma, plano, novedades, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras edita, romperlo, qué cede primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, NURBS, alisar, casco, cebra, engineer, generador, cuerpo generado, croquis desde una foto, escalar para imprimir, dividir para imprimir, contracción, láminas anidadas, código G, dibujo, cotas de agujeros, asistente, mcp, idiomas, filas de barra de herramientas
from: 1dafd7c8
---

Estos son los cambios de PartCraft 0.9 respecto a la 0.8.1. Las superficies de forma libre ahora se cierran en sólidos, los ensamblajes de miles de piezas siguen siendo utilizables, un almacén de Documentos conserva las revisiones y un complemento FEM sólido comprueba la tensión en una pieza. Cada elemento indica dónde encontrarlo.

## Novedades en la 0.9.1

- **Exportación de STEP exacto.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} ya funcionan. Los agujeros, resaltos, redondeos, conos, esferas y toros se escriben sobre sus superficies verdaderas con círculos verdaderos como aristas, de modo que otro programa de CAD o CAM puede reconocer un agujero como agujero. Los laterales de spline, las roscas modeladas y las mallas importadas siguen siendo facetas planas dentro del mismo sólido. Véase [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP de entrada, STEP exacto de salida.** Un archivo STEP que abre conserva sus propias caras planas, cilindros, conos, esferas y toros, de modo que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} los escribe de nuevo como superficies verdaderas en lugar de facetas: una viga de un proveedor con agujeros para tornillos sale con las mismas caras con las que entró, más lo que usted le haya cortado. Las caras de spline, barridas y revolucionadas del archivo siguen siendo facetas, y lo mismo ocurre con los cuerpos de STL, OBJ y 3MF. Vuelva a abrir el archivo STEP para una pieza guardada antes. Véase [Abrir un archivo STEP y construir sobre él](topic:import-step).
- **Círculos verdaderos en el DXF de la cara.** {{ui:Exportar}} › {{ui:DXF del croquis o de la cara plana}} con una cara plana seleccionada ahora escribe los agujeros redondos como círculos, con el centro y el radio propios del agujero, para una mesa de láser, plasma o chorro de agua. Las demás aristas redondas siguen siendo facetas.
- **STEP exacto para el taller.** En {{ui:Fabricación}}, {{ui:STEP exacto (coordenadas de trabajo)}} escribe la pieza con su origen en el origen de trabajo de la configuración y Z a lo largo del eje de herramienta, las coordenadas que usa el código G. Véase [Generar trayectorias y código G](topic:manufacture#exact-step-for-the-shop).

## Novedades

### Superficies y sólidos

- **Redondeo entre caras.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} y, a continuación, {{ui:Redondeo entre caras}}. Seleccione las dos caras de un mismo sólido, escriba el radio (y {{ui:Radio en el extremo (mm, 0 = igual)}} para un radio que cambie a lo largo de la arista). La línea de resultado indica cuánto se aleja el redondeo de la bola rodante ideal, y un radio que no encaja se rechaza indicando la cara. {{ui:Redondear varias aristas}} redondea muchas aristas en un solo paso; marque {{ui:Esquinas (parche esférico donde se encuentran tres)}} para una esquina esférica donde se encuentran tres aristas redondeadas de caras planas. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Dar espesor para crear un sólido.** {{ui:Dar espesor para crear un sólido}} en el mismo espacio de trabajo da a una superficie un espesor; {{ui:Otro lado}} lo crece en sentido contrario. Un pliegue o un cruce consigo misma se rechaza indicando la superficie y el lugar.
- **Sólidos a partir de superficies.** Las superficies recortadas pueden unirse con unión, restar e intersecar, e incorporarse a la pieza como un solo paso de deshacer. STEP escribe un sólido como una sola cáscara cerrada e IGES como un solo sólido; ambos se leen de vuelta como sólido. Si las caras no casan arista a arista, el archivo recibe caras separadas y la línea de estado lo indica. Los sólidos también pueden crearse en el editor de nodos; véase [Editor de nodos](topic:nodes).
- **Redondeos de borde y variables en escaneados.** Al ajustar superficies a un escaneado, también se buscan redondeos de borde (toros) y redondeos de radio variable a lo largo de una arista bastante recta, y se enumeran con su radio. Solo se ha probado con escaneados simulados.

### Ensamblajes, documentos y enlaces

- **Ensamblajes grandes.** Las piezas que son copias comparten una malla, y {{ui:Vistas}} › {{ui:Visualización ligera}} dibuja cajas para que la vista siga fluyendo (se activa sola en ensamblajes muy grandes; la selección y las uniones siguen usando las piezas reales). El árbol de piezas muestra sus primeras filas y un botón {{ui:Mostrar 700 más}} para el resto. Los archivos de ensamblaje pueden contener hasta 50,000 instancias y 100,000 uniones. Véase [Crear un ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} en el grupo **Archivo** abre un cuadro de diálogo sobre una carpeta de proyecto: extraer y reincorporar, letras de revisión, estados (en trabajo, para revisión, liberado, obsoleto), historial, dónde se usa y lista de materiales. Véase [Documentos y revisiones (el almacén)](topic:documents-walkthrough).
- **Enlace en vivo con Rhino.** Un solo script, `cadcraft_link.py`, vigila un documento de Rhino o Grasshopper y envía a PartCraft solo lo que ha cambiado; allí, una operación importada se reconstruye con la nueva forma. Es unidireccional y necesita Studio. Véase [Enlace en vivo de .3dm](topic:live-3dm-link).
- **Ver los cursores de los demás.** En una sesión compartida, el cursor de cada persona se muestra con su nombre y la operación que ha seleccionado. Véase [Trabajar en vivo con otros](topic:work-live).
- **Planta de fabricación.** Active el complemento Planta de fabricación en {{ui:Configuración}} › {{ui:Complementos}}. Tras postprocesar un programa en {{ui:Fabricación}}, su pestaña puede {{ui:Añadir a la cola de trabajos de taller}} o {{ui:Guardar como archivo de trabajo}}. Nunca envía ni arranca una máquina.

### Análisis y piezas

- **Complemento FEM sólido.** Active {{ui:Solid FEM}} en {{ui:Configuración}} › {{ui:Complementos}} (está desactivado hasta que lo haga) y aparece una pestaña {{ui:Solid FEM}} en el panel derecho. {{ui:Mallar la pieza}}, seleccione caras fijas y cargas en la vista 3D, {{ui:Resolver}}, y dibuje el desplazamiento, la tensión de von Mises o una forma modal con {{ui:Mostrar en el modelo}}. Véase [Solid FEM: una comprobación de tensión](topic:solid-fem-check).
- **Arco en croquis, de diez maneras.** La flecha junto a {{ui:Arco}} en la barra de croquis enumera: 3 puntos, Inicio Centro Fin, Inicio Centro Ángulo, Inicio Centro Longitud, Inicio Fin Ángulo, Inicio Fin Dirección, Inicio Fin Radio, Centro Inicio Fin, Centro Inicio Ángulo, Centro Inicio Longitud y Continuar. Véase [Dibujar un arco con diez métodos](topic:sketch-arc-methods).
- **Medidas de acero del Reino Unido.** Las estructuras soldadas pueden usar 976 perfiles británicos (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba una medida como `305x165x40 UB`. Véase [Elementos estructurales](topic:structural-members).

### Impresión

- **Etapa de impresión.** El botón {{ui:Etapa de impresión}} de la barra de herramientas (complemento 3D Print, activado por defecto) coloca los cuerpos de su pieza sobre una plataforma de trazos: {{ui:Desplegar}}, {{ui:Girar 90°}}, {{ui:Disponer en la plataforma}}, {{ui:Ajustar todo en la plataforma}}, {{ui:Vista previa de capas}}, y después {{ui:Enviar a impresora 3D}} por USB, Klipper (Moonraker), OctoPrint o PrusaLink. No se envía nada hasta que confirme, y su pieza nunca se modifica. Para un archivo STL o 3MF, véase [Preparar una pieza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Configuración}} › {{ui:Complementos}}, todos desactivados hasta que los active: un laminador para resina, una prueba de exposición y los formatos de archivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB y Anycubic. El laminado se ejecuta en un hilo de trabajo, así que la página sigue respondiendo.

## En todas las aplicaciones

- Cada indicación al pasar el ratón es un tooltip de Bootstrap.
- El consejo de inicio tiene un botón de cierre; permanece cerrado.
- La fila de pestañas de un panel que no cabe se desplaza lateralmente en lugar de cortarse.
- La pestaña del navegador muestra el nombre del documento abierto antes de PartCraft | CadCraft.
- {{ui:Configuración}} muestra la {{ui:Disposición}} del espacio de trabajo como lista desplegable de opciones, y el cuadro de idioma enumera todos los idiomas de la versión.
- Peso y Temperatura son tipos de unidad en la configuración de Unidades.

## Corregido

- El menú Arco del croquis ahora enumera todos los métodos.
- La barra de herramientas de complementos y el título de la pestaña del navegador se corrigieron el 2026-11-09.

## Límites reconocidos

- El STEP exacto se ha leído de vuelta en OpenCascade (sólidos válidos, volúmenes iguales a los calculados a mano). Todavía no se ha abierto en todos los programas de CAD o CAM, y un ensamblaje no se escribe como STEP exacto.
- Nada se ha impreso en una impresora real. El laminado, el código G y los archivos de resina se han leído de vuelta con nuestros propios programas o con una impresora sustituta; ninguno de los formatos de resina se ha cargado en una impresora, y los tamaños y exposiciones de las impresoras son puntos de partida.
- Solid FEM es lineal, isótropo y elástico, con un material por pieza, sin contacto, fluencia ni pandeo. La tensión en caras fijas y esquinas vivas depende de la malla. Es una ayuda para comprobar, no revisada por un ingeniero.
- Los tiempos de ensamblajes grandes proceden de un servidor sin GPU; un fotograma con todo el detalle de 20,000 piezas tarda todavía segundos allí.
- Los redondeos funcionan por parejas de caras; no hay mezcla general en vértices ni redondeo entre caras que no se encuentran.
- El enlace con Rhino nunca se ha ejecutado dentro de Rhino o Grasshopper reales. Documentos se probó con dos programas sobre una carpeta, no con dos personas en una carpeta de red.
- El ajuste de superficies a un escaneado real no ha tenido su revisión manual. Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no están firmados digitalmente, y la imagen de disco de macOS no está notarizada. Véase [Solución de problemas](topic:troubleshooting).

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 y 0.8.1

Estos son los cambios de PartCraft 0.8 y 0.8.1 respecto a la 0.7. La simulación responde mientras edita y le indica qué cede primero, los ensamblajes reciben estudios de movimiento, y los nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. La 0.8.1 es una pequeña versión de corrección.

### Novedades

**Simulación**

- **Actualizar mientras edito.** Marque {{ui:Actualizar mientras edito}} en el bloque {{ui:Resolver}} y las respuestas seguirán sus cambios. Cambie una cota, una carga o el material y aparecerá de inmediato una respuesta rápida, obtenida con elementos cuatro veces mayores; cuando se detenga durante un segundo aproximadamente, la respuesta refinada propia del estudio la sustituye. Los resultados indican cuál está viendo. En una viga en voladizo de acero, la respuesta rápida estuvo dentro del 1 % en la flecha y en torno al 4 % en la tensión respecto de la refinada. Véase [Comprobar tensión y deformación](topic:simulation#update-while-you-edit-live).
- **Qué cede primero.** En un estudio estático o de pandeo, {{ui:¿Qué cede primero?}} en el bloque **Romperlo** escala las cargas hasta que la pieza cede. Enumera, de peor a mejor, el factor de carga hasta la primera fluencia (con un marcador rojo donde se concentra la tensión) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede con la carga aplicada, y Problemas muestra un error. Los factores provienen de un estudio lineal, así que solo son tan buenos como él. Véase [Comprobar tensión y deformación](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastificación y contacto.** Dos tipos de estudio más: uno no lineal, en el que el material sigue su recta hasta la tensión de fluencia y después una pendiente más plana, con la deformación plástica representada; y uno de contacto, en el que piezas separadas se empujan entre sí (sin fricción) o quedan pegadas (unidas). Un paso de carga que no se estabiliza, o piezas que se hunden demasiado unas en otras, aparecen en el panel de Problemas. La fricción, el deslizamiento grande, los grandes giros, las grandes deformaciones y la fatiga no se resuelven. Véase [Comprobar tensión y deformación](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos para CalculiX.** {{ui:Exportar}} › {{ui:Archivo CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lee de vuelta su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa, y lo indica si la pieza cambió desde que se guardó el archivo.

**Ensamblajes**

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} mueve el valor de una unión durante un tiempo que usted indique (velocidad constante, suavizada, senoidal, o de ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y lazos cerrados, e informa de qué choca y de lo cerca que llegan las piezas. {{ui:Añadir un punto}} representa la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura frente al tiempo; {{ui:Guardar CSV}} y {{ui:Guardar gráfica}} los escriben. Tras {{ui:Ejecutar}}, la barra de ejecución, con Paso a paso, lleva el ensamblaje a cualquier paso. Los ajustes del estudio se guardan en el archivo del ensamblaje. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que use más pasos si un pico agudo sale bajo. Véase [Comprobar un ensamblaje por interferencias y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas a partir de la física**

- **Un espacio de trabajo Superficies.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} para curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Solevación}}, {{ui:Barrido}}, {{ui:Igualar}} y {{ui:Cebra}}, con la continuidad (G0, G1 o G2) medida sobre las superficies exactas y una arista peor de lo pedido listada en Problemas con una corrección de Igualar. {{ui:Alisar}} mide las líneas de casco para detectar inflexiones y saltos de curvatura, y reconstruye las que no son fluidas dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian las operaciones de la pieza. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Engineer.** Elija {{ui:Engineer}} en el selector de espacios de trabajo, elija un generador y pulse {{ui:Nuevo}}: un script dimensiona una pieza a partir de lo que debe hacer (calor que transferir, caudales, presión, material, proceso de impresión) con fórmulas de libro de texto y la construye, y después devuelve los números que usó con sus fuentes, sus comprobaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier ordenador. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Véase [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

**Croquis, dibujos y fabricación**

- **Un croquis a partir de una foto.** {{ui:Operaciones}} › {{ui:Más}} › {{ui:Croquis desde una foto…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a pluma en líneas, arcos y círculos. Usted indica una longitud, comprueba la vista previa y crea el croquis. Véase [Fundamentos del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar y dividir para imprimir.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL o 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para compensar la contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de piezas)…}} corta una pieza demasiado grande para su plataforma en trozos numerados unidos por clavijas, chavetas, colas de milano, agujeros de espiga o alojamientos para imanes. Véase [Imprimir en 3D](topic:print-3d).
- **Láminas anidadas a código G.** {{ui:Exportar}} › {{ui:Chapas anidadas a código G}} lee un DXF anidado y genera un programa por lámina a través del posprocesador que elija: primero agujeros y recortes, después los contornos. No planifica las entradas de corte, el orden de corte ni las aristas compartidas. Véase [Anidar piezas planas en láminas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja de tamaño A más pequeña que contiene las vistas a la mayor escala normalizada hasta 1:1. {{ui:Acotar los agujeros}} coloca una marca de centro en cada agujero, un globo por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Véase [Crear un dibujo](topic:drawing-pdf).

**En todas las aplicaciones**

- **Idiomas.** Las aplicaciones están disponibles en 54 idiomas. Los que no son el inglés son borradores de máquina hasta que los lea un hablante nativo.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige Ajustar (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza lateralmente. La cinta de Operaciones de PartCraft muestra la herramienta más usada en grande y agrupa las variantes tras un botón desplegable.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, de sugerencia o de edición por aplicación. Un asistente conectado puede dimensionar una pieza a partir de una frase, como un soporte para una carga, mostrar su desarrollo y todas las comprobaciones, y construirla; informa de lo que no comprobó (concentración de tensiones, fatiga, fluencia en plásticos). Véase [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Bloqueo del cursor a pantalla completa.** La selección al pasar el ratón ahora está limitada. La causa es nuestra mejor interpretación y no se confirmó con la persona que lo notificó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: infórmenos si el idioma no cambia.

### Todavía no en esta versión

- Conectar su IA no está terminado: no se prometen la conexión con un clic dentro de Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio ni el paquete MCP publicado. Studio no tiene IA propia.
- Studio no está firmado digitalmente: Windows puede avisar, y macOS pide hacer clic derecho y después Abrir. Véase [Solución de problemas](topic:troubleshooting).
- Las cadenas de tolerancias siguen siendo de una sola dirección: véase [Cadenas de tolerancias](topic:tolerance-stackup).
- El resto aparece en [Lo que todavía no está implementado](topic:not-built-yet).

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
