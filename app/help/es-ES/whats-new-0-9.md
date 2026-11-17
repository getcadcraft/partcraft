---
title: Novedades de la 0.9
summary: PartCraft 0.9 añade redondeos entre caras y espesores hasta sólidos, ensamblajes de miles de piezas, una bóveda de Documentos con revisiones, un complemento Solid FEM de tensiones, diez métodos de arco, perfiles de acero del Reino Unido, una fase de impresión y complementos de impresión en resina.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, redondeo entre caras, bola rodante, redondear varias aristas, espesor, sólido a partir de superficies, step shell, iges solid, redondeos en escaneos, ensamblaje grande, visualización ligera, 20000 piezas, documentos, bóveda, retirar, devolver, revisión, versión, dónde se usa, enlace con Rhino, grasshopper, 3dm, cursores, planta de fabricación, cola de trabajos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfiles de acero del Reino Unido, fase de impresión, resina, goo, ctb, base, desplegar, novedades, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras edita, romperlo, qué cede primero, factor de carga, no lineal, límite elástico, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, alisar, casco, cebra, ingeniero, generador, cuerpo generado, croquis desde una foto, escalar para impresión, dividir para impresión, contracción, láminas anidadas, g-code, dibujo, acotar agujeros, asistente, mcp, idiomas, filas de la barra de herramientas
from: 96d9fbfa
---

Estos son los cambios de PartCraft 0.9 respecto a la 0.8.1. Las superficies de forma libre ahora se cierran en sólidos, los ensamblajes de miles de piezas siguen siendo utilizables, una bóveda de Documentos guarda las revisiones, y un complemento Solid FEM comprueba la tensión en una pieza. Cada elemento indica dónde encontrarlo.

## Novedades en la 0.9.1

- **STEP exacto al exportar.** {{ui:Export}} (Exportar) › {{ui:STEP AP242 (exact solid)}} (STEP AP242 (sólido exacto)) y {{ui:STEP AP214 (exact solid)}} (STEP AP214 (sólido exacto)) ya funcionan. Los agujeros, resaltes, redondeos, conos, esferas y toros se escriben sobre sus superficies verdaderas, con círculos verdaderos como aristas, de modo que otro programa CAD o CAM puede reconocer un agujero como agujero. Los lados de spline, las roscas modeladas y las mallas importadas siguen siendo caras facetadas dentro del mismo sólido. Véase [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exacto sale.** Un archivo STEP que abre conserva sus propias caras planas, cilindros, conos, esferas y toros, así que {{ui:Export}} (Exportar) › {{ui:STEP AP242 (exact solid)}} (STEP AP242 (sólido exacto)) las vuelve a escribir como superficies verdaderas en lugar de facetas: una viga de un proveedor con agujeros de tornillo sale con las mismas caras con las que entró, más lo que usted le haya cortado. Las caras spline, barridas y de revolución del archivo siguen siendo facetas, y lo mismo ocurre con los cuerpos procedentes de STL, OBJ y 3MF. Vuelva a abrir el archivo STEP para una pieza guardada antes. Véase [Abrir un archivo STEP y construir sobre él](topic:import-step).
- **Círculos verdaderos en el DXF de la cara.** {{ui:Export}} (Exportar) › {{ui:DXF of the sketch or flat face}} (DXF del croquis o de la cara plana) con una cara plana seleccionada ahora escribe los agujeros redondos como círculos, con el propio centro y radio del agujero, para una mesa de láser, plasma o chorro de agua. Las demás aristas redondas siguen siendo facetas.
- **STEP exacto para el taller.** En {{ui:Manufacture}} (Fabricación), {{ui:Exact STEP (work coordinates)}} (STEP exacto (coordenadas de trabajo)) escribe la pieza con su origen en el origen de trabajo de la preparación y Z a lo largo del eje de la herramienta, las coordenadas que usa el código G. Véase [Crear trayectorias y código G](topic:manufacture#exact-step-for-the-shop).

## Novedades

### Superficies y sólidos

- **Redondeo entre caras.** Elija {{ui:Surfaces}} (Superficies) en el cuadro de {{ui:Workspace}} (Espacio de trabajo), y luego {{ui:Fillet between faces}} (Redondeo entre caras). Elija las dos caras de un mismo sólido y escriba el radio ({{ui:Radius at the end (mm, 0 = the same)}} (Radio en el extremo (mm, 0 = igual)) para un radio que cambie a lo largo de la arista). El mensaje de resultado indica cuánto se aleja el redondeo de la bola rodante ideal, y un radio que no encaja se rechaza indicando la cara. {{ui:Fillet several edges}} (Redondear varias aristas) redondea muchas aristas de una vez; marque {{ui:Corners (sphere patch where three meet)}} (Esquinas (parche esférico donde se encuentran tres)) para una esquina esférica donde se encuentran tres aristas redondeadas de caras planas. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Dar espesor para crear un sólido.** {{ui:Thicken into a solid}} (Dar espesor para crear un sólido) en el mismo espacio de trabajo da a una superficie un espesor; {{ui:Other side}} (Otro lado) lo amplía hacia el otro lado. Un pliegue o un cruce consigo misma se rechaza indicando la superficie y el lugar.
- **Sólidos a partir de superficies.** Las superficies recortadas pueden unirse con unión, resta e intersección, y se incorporan a la pieza como un único paso de deshacer. STEP escribe un sólido como una cáscara cerrada, e IGES como un único sólido; ambos se leen de nuevo como sólido. Si las caras no casan arista a arista, el archivo recibe caras separadas y la barra de estado lo indica. También se pueden crear sólidos en el editor de nodos; véase [Editor de nodos](topic:nodes).
- **Redondeos de borde y variables en escaneos.** Al ajustar superficies a un escaneo, también se buscan redondeos de borde (toros) y redondeos de radio variable a lo largo de una arista bastante recta, y se listan con su radio. Solo se ha probado con escaneos inventados.

### Ensamblajes, documentos y enlaces

- **Ensamblajes grandes.** Las piezas que son copias comparten una misma malla, y {{ui:Views}} (Vistas) › {{ui:Lightweight display}} (Visualización ligera) dibuja cajas para que la vista siga fluida (se activa sola en ensamblajes muy grandes; la selección y las uniones siguen usando las piezas reales). El árbol de piezas muestra sus primeras filas y un botón {{ui:Show 700 more}} (Mostrar 700 más) para el resto. Los archivos de ensamblaje pueden contener hasta 50 000 instancias y 100 000 uniones. Véase [Construir un ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documents…}} (Documentos…) en el grupo **File** (Archivo) abre un cuadro de diálogo sobre una carpeta de proyecto: retirar y devolver, letras de revisión, estados (en trabajo, para revisión, liberado, obsoleto), historial, dónde se usa y lista de materiales. Véase [Documentos y revisiones (la bóveda)](topic:documents-walkthrough).
- **Enlace en vivo con Rhino.** Un script, `cadcraft_link.py`, vigila un documento de Rhino o Grasshopper y envía a PartCraft solo lo que cambió; allí, una operación importada se reconstruye con la nueva forma. Es unidireccional y necesita Studio. Véase [Enlace en vivo con .3dm](topic:live-3dm-link).
- **Ver los cursores de los demás.** En una sesión compartida, el cursor de cada persona aparece con su nombre y la operación que tiene seleccionada. Véase [Trabajar en vivo con otros](topic:work-live).
- **Planta de fabricación.** Active el complemento Planta de fabricación en {{ui:Settings}} (Configuración) › {{ui:Add-ons}} (Complementos). Tras enviar un programa en {{ui:Manufacture}} (Fabricación), su pestaña puede {{ui:Add to the factory job queue}} (Añadir a la cola de trabajos de la planta) o {{ui:Save as a job file}} (Guardar como archivo de trabajo). Nunca envía ni arranca una máquina.

### Análisis y piezas

- **Complemento Solid FEM.** Active {{ui:Solid FEM}} en {{ui:Settings}} (Configuración) › {{ui:Add-ons}} (Complementos) (está desactivado hasta que lo haga) y aparecerá una pestaña {{ui:Solid FEM}} en el panel derecho. {{ui:Mesh the part}} (Generar la malla de la pieza), elija caras fijas y cargas en la vista 3D, {{ui:Solve}} (Resolver), y dibuje el desplazamiento, la tensión de von Mises o una forma modal con {{ui:Show on the model}} (Mostrar en el modelo). Véase [Solid FEM: una comprobación de tensiones](topic:solid-fem-check).
- **Arco en croquis, de diez maneras.** La flecha junto a {{ui:Arc}} (Arco) en la barra de croquis enumera los métodos: 3 puntos, inicio, centro, fin; inicio, centro, ángulo; inicio, centro, longitud; inicio, fin, ángulo; inicio, fin, dirección; inicio, fin, radio; centro, inicio, fin; centro, inicio, ángulo; centro, inicio, longitud; y continuar. Véase [Dibujar un arco con diez métodos](topic:sketch-arc-methods).
- **Perfiles de acero del Reino Unido.** Los elementos estructurales pueden usar 976 perfiles británicos (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba una medida como `305x165x40 UB`. Véase [Elementos estructurales](topic:structural-members).

### Impresión

- **Fase de impresión.** El botón {{ui:Print stage}} (Fase de impresión) de la barra de herramientas (complemento 3D Print, activado por defecto) coloca los cuerpos de su pieza sobre una base de trazos: {{ui:Lay flat}} (Desplegar), {{ui:Turn 90°}} (Girar 90°), {{ui:Arrange on the bed}} (Organizar sobre la base), {{ui:Fit all on the bed}} (Ajustar todo a la base), {{ui:Preview layers}} (Vista previa de capas), y luego {{ui:Send to 3D printer}} (Enviar a la impresora 3D) por USB, Klipper (Moonraker), OctoPrint o PrusaLink. No se envía nada hasta que usted lo confirme, y su pieza nunca se cambia. Para un archivo STL o 3MF en su lugar, véase [Preparar una pieza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Settings}} (Configuración) › {{ui:Add-ons}} (Complementos), todos desactivados hasta que los active: un laminador para resina, una prueba de exposición, y los formatos de archivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB y Anycubic. El laminado se ejecuta en un hilo de trabajo, así que la página sigue respondiendo.

## En todas las aplicaciones

- Cada sugerencia al pasar el puntero es un globo de Bootstrap.
- La sugerencia de inicio tiene un botón de cierre; permanece cerrada.
- Una fila de pestañas del panel que no cabe se desplaza lateralmente en lugar de cortarse.
- La pestaña del navegador muestra el nombre del documento abierto antes de PartCraft | CadCraft.
- {{ui:Settings}} (Configuración) muestra la {{ui:Layout}} (Disposición) del espacio de trabajo como lista desplegable de opciones, y el cuadro de idioma enumera cada idioma que tiene la versión.
- El peso y la temperatura son tipos de unidad en los ajustes de Unidades.

## Corregido

- El menú Arco del croquis ahora enumera todos los métodos.
- La barra de herramientas de complementos y el título de la pestaña del navegador se corrigieron el 2026-11-09.

## Límites sinceros

- El STEP exacto se volvió a leer en OpenCascade (sólidos válidos, volúmenes iguales a los calculados a mano). Todavía no se ha abierto en todos los programas CAD o CAM, y un ensamblaje no se escribe como STEP exacto.
- Nada se ha impreso en una impresora real. El laminado, el código G y los archivos de resina se leyeron con nuestros propios programas o con una impresora de sustitución; ninguno de los formatos de resina se ha cargado en una impresora, y los tamaños y exposiciones de impresora son puntos de partida.
- Solid FEM es lineal, isótropo y elástico, con un material por pieza, sin contacto, fluencia ni pandeo. La tensión en caras fijas y esquinas agudas depende de la malla. Es una ayuda de comprobación, no revisada por un ingeniero.
- Los tiempos de los ensamblajes grandes proceden de un servidor sin GPU; un fotograma con detalle completo de 20 000 piezas aún tarda segundos allí.
- Los redondeos funcionan con pares de caras; no hay mezcla general de vértices ni redondeo entre caras que no se tocan.
- El enlace con Rhino nunca se ha ejecutado dentro de Rhino o Grasshopper reales. Documentos se probó con dos programas sobre una misma carpeta, no con dos personas en una unidad de red.
- El ajuste de superficies a un escaneo real todavía no ha pasado su revisión manual. Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código, y la imagen de disco de macOS no está notarizada. Véase [Solución de problemas](topic:troubleshooting).

Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en PartCraft 0.8 y 0.8.1 respecto a la 0.7. La simulación responde mientras edita y le dice qué cede primero, los ensamblajes obtienen estudios de movimiento, y nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. La 0.8.1 es una versión pequeña de correcciones.

### Novedades

**Simulación**

- **Actualizar mientras edito.** Marque {{ui:Update while I edit}} (Actualizar mientras edito) en el bloque {{ui:Solve}} (Resolver) y las respuestas siguen sus cambios. Cambie una cota, una carga o el material y aparece al momento una respuesta rápida, calculada con elementos cuatro veces más grandes; cuando se detiene un segundo, la respuesta refinada propia del estudio la sustituye. Los resultados indican cuál está viendo. En una viga en voladizo de acero, la respuesta rápida estaba dentro del 1 % en flecha y en torno al 4 % en tensión respecto a la refinada. Véase [Comprobar tensión y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué cede primero.** En un estudio estático o de pandeo, {{ui:What breaks first?}} (¿Qué cede primero?) en el bloque **Break it** (Romper) escala las cargas hasta que la pieza cede. Enumera, de peor a mejor, el factor de carga hasta la primera fluencia (con un marcador rojo donde se concentra la tensión) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede tal como está cargada, y Problemas muestra un error. Los factores proceden de un estudio lineal, así que valen lo que valga este. Véase [Comprobar tensión y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal, en el que el material sigue su recta hasta la tensión de fluencia y luego una pendiente más plana, con la deformación plástica representada; y uno de contacto, en el que piezas separadas se empujan (sin fricción) o quedan pegadas (unidas). Un paso de carga que no se estabiliza, o piezas que se hunden demasiado unas en otras, aparecen en el panel de Problemas. No se resuelven la fricción, el deslizamiento grande, las rotaciones grandes, las deflexiones grandes ni la fatiga. Véase [Comprobar tensión y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos de entrada para CalculiX.** {{ui:Export}} (Exportar) › {{ui:CalculiX deck (.inp)}} (Archivo de entrada CalculiX (.inp)) guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta; {{ui:Export}} (Exportar) › {{ui:CalculiX results (.frd)}} (Resultados CalculiX (.frd)) lee su archivo de resultados de vuelta sobre la misma malla. PartCraft nunca inicia ese programa, y avisa si la pieza cambió desde que se guardó el archivo de entrada.

**Ensamblajes**

- **Estudios de movimiento.** {{ui:Assembly}} (Ensamblaje) › {{ui:Motion}} (Movimiento) acciona el valor de una unión a lo largo de un tiempo que usted indica (velocidad constante, suavizada, senoidal, o ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y lazos cerrados, e informa de qué choca y a qué distancia se acercan las piezas. {{ui:Add a point}} (Añadir un punto) representa la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura frente al tiempo; {{ui:Save CSV}} (Guardar CSV) y {{ui:Save plot}} (Guardar gráfica) los escriben. Tras {{ui:Run}} (Ejecutar), la opción Avanzar en la barra de ejecución lleva el ensamblaje a cualquier paso. Los ajustes del estudio se guardan en el archivo del ensamblaje. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que use más pasos si un pico agudo sale bajo. Véase [Comprobar un ensamblaje en busca de choques y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas a partir de la física**

- **Un espacio de trabajo Superficies.** Elija {{ui:Surfaces}} (Superficies) en el cuadro de {{ui:Workspace}} (Espacio de trabajo) para curvas y superficies NURBS junto a la pieza: {{ui:Curve}} (Curva), {{ui:Loft}} (Solevación), {{ui:Sweep}} (Barrido), {{ui:Match}} (Igualar) y {{ui:Zebra}} (Cebra), con continuidad (G0, G1 o G2) medida en las superficies exactas, y un borde peor de lo que pidió se enumera en Problemas con una corrección de Igualar. {{ui:Fair}} (Alisar) mide líneas de casco para buscar inflexiones y saltos de curvatura, y reconstruye las que no son lisas dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian sus operaciones. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniero.** Elija {{ui:Engineer}} (Ingeniero) en el selector de espacios de trabajo, elija un generador y haga clic en {{ui:New}} (Nuevo): un script dimensiona una pieza a partir de lo que debe hacer (calentar para mover, caudales, presión, material, proceso de impresión) con fórmulas de libro de texto y la construye; después devuelve los números que usó con sus fuentes, sus comprobaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier equipo. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Véase [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

**Croquis, dibujos y fabricación**

- **Un croquis a partir de una foto.** {{ui:Features}} (Operaciones) › {{ui:More}} (Más) › {{ui:Sketch from a photo…}} (Croquis desde una foto…) traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a pluma en líneas, arcos y círculos. Usted da una sola medida, revisa la vista previa y crea el croquis. Véase [Fundamentos del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar y dividir para impresión.** {{ui:Export}} (Exportar) › {{ui:Scale for printing (STL or 3MF)…}} (Escalar para imprimir (STL o 3MF)…) escala por eje sin cambiar la pieza, por ejemplo con una tolerancia de contracción. {{ui:Export}} (Exportar) › {{ui:Split for printing (a zip of pieces)…}} (Dividir para imprimir (un zip de piezas)…) corta una pieza demasiado grande para su base en piezas numeradas unidas con clavijas, llaves, colas de milano, agujeros de espiga o cavidades para imanes. Véase [Imprimir en 3D](topic:print-3d).
- **Láminas anidadas a código G.** {{ui:Export}} (Exportar) › {{ui:Nested sheets to G-code}} (Láminas anidadas a código G) lee un DXF anidado y genera un programa por lámina mediante el posprocesador que elija: primero agujeros y recortes, luego los contornos. No planifica las entradas de corte, el orden de corte ni los bordes compartidos. Véase [Anidar piezas planas en láminas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Sheet}} (Hoja) › {{ui:Automatic}} (Automático) elige la hoja de tamaño A más pequeña que contiene las vistas, a la mayor escala estándar hasta 1:1. {{ui:Dimension the holes}} (Acotar los agujeros) pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Véase [Hacer un dibujo](topic:drawing-pdf).

**En todas las aplicaciones**

- **Idiomas.** Las aplicaciones tienen 54 idiomas. Los distintos del inglés son borradores de máquina hasta que un hablante nativo los lea.
- **Filas de la barra de herramientas.** {{ui:Settings}} (Configuración) › {{ui:General}} › {{ui:Toolbar rows}} (Filas de la barra de herramientas) elige Ajustar (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza lateralmente. La cinta de operaciones de PartCraft muestra en grande la herramienta más usada y oculta las variantes tras un botón dividido.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar en cada una. Un asistente conectado puede dimensionar una pieza a partir de una frase, como un soporte para una carga, mostrar su razonamiento y todas las comprobaciones, y construirla; informa de lo que no comprobó (concentración de tensiones, fatiga, fluencia en plásticos). Véase [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Congelación del cursor a pantalla completa.** La selección al pasar el puntero ahora tiene un límite de frecuencia. La causa es nuestra mejor lectura y no se confirmó con la persona que la notificó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Esto aún no se ha probado en todas las plataformas: díganos si el idioma no cambia.

### No incluido todavía en esta versión

- Conectar su IA no está terminado: la conexión con un clic dentro de Studio, el conector alojado para IA de navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos. Studio no tiene IA propia.
- Studio no tiene firma de código: Windows puede avisar, y macOS pide clic con el botón derecho y luego Abrir. Véase [Solución de problemas](topic:troubleshooting).
- Las cadenas de tolerancias siguen siendo de una sola dirección: véase [Cadenas de tolerancias](topic:tolerance-stackup).
- Lo demás figura en [Lo que aún no está hecho](topic:not-built-yet).

Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).
