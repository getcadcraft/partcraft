---
title: Novedades de la 0.9 (anteriores)
summary: PartCraft 0.9 agrega redondeos entre caras y engrosamiento en sólidos, ensamblajes de miles de piezas, una bóveda de Documentos con revisiones, un complemento Solid FEM de tensión, diez métodos de arco, tamaños de perfiles británicos, una etapa de Impresión y complementos de impresión en resina.
keywords: novedades 0.9, versión anterior, novedades, notas de versión, registro de cambios, 0.9, redondeo entre caras, bola rodante, redondeo de varias aristas, engrosar, sólido desde superficies, cáscara step, sólido iges, redondeos de escaneo, ensamblaje grande, visualización liviana, 20000 piezas, documentos, bóveda, sacar, revisión, lanzamiento, dónde se usa, enlace rhino, grasshopper, 3dm, cursores, piso de fábrica, cola de trabajos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfiles de acero británicos, libro azul, etapa de impresión, resina, goo, ctb, cama, desplegar, novedades, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar al editar, romper, qué se rompe primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, fair, casco, zebra, engineer, generador, cuerpo generado, boceto desde una foto, escala para impresión, dividir para impresión, contracción, hojas anidadas, g-code, dibujo, cotar agujeros, asistente, mcp, idiomas, filas de la barra
from: 1dafd7c8
---

Esto es lo que cambió en PartCraft 0.9, comparado con 0.8.1. Las superficies libres ahora se cierran en sólidos, los ensamblajes de miles de piezas siguen siendo utilizables, una bóveda de Documentos guarda las revisiones, y un complemento Solid FEM revisa la tensión en una pieza. Cada punto dice dónde encontrarlo.

## Novedades de la 0.9.1

- **Exportación STEP exacta.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} y {{ui:STEP AP214 (exact solid)}} ahora funcionan. Agujeros, resaltos, redondeos, conos, esferas y toros se escriben en sus superficies verdaderas, con círculos verdaderos como aristas, así otro programa CAD o CAM puede reconocer un agujero como agujero. Los lados en spline, las roscas modeladas y las mallas importadas siguen siendo facetas planas dentro del mismo sólido. Ver [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exacto sale.** Un archivo STEP que abrís conserva sus propias caras planas, cilindros, conos, esferas y toros, así {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} los vuelve a escribir como superficies verdaderas en lugar de facetas: una viga de un proveedor con agujeros para bulones sale con las mismas caras con que entró, más lo que le cortaste. Las caras en spline, barridas y giradas del archivo siguen siendo facetas, y lo mismo los cuerpos de STL, OBJ y 3MF. Abrí otra vez el archivo STEP de una pieza guardada antes. Ver [Abrir un archivo STEP y construir sobre él](topic:import-step).
- **Círculos verdaderos en el DXF de cara.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} con una cara plana elegida ahora escribe los agujeros redondos como círculos, con el centro y el radio propios del agujero, para una mesa láser, de plasma o de chorro de agua. Las otras aristas redondas siguen siendo facetas.
- **STEP exacto para el taller.** En {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} escribe la pieza con su origen en el origen de trabajo de la preparación y Z a lo largo del eje de herramienta, las coordenadas que usa el G-code. Ver [Hacer trayectorias y G-code](topic:manufacture#exact-step-for-the-shop).

## Novedades

### Superficies y sólidos

- **Redondeo entre caras.** Elegí {{ui:Surfaces}} en el cuadro {{ui:Workspace}}, después {{ui:Fillet between faces}}. Elegí las dos caras de un mismo sólido, escribí el radio (y {{ui:Radius at the end (mm, 0 = the same)}} para un radio que cambia a lo largo de la arista). La línea de resultado dice cuánto se aleja el redondeo de la bola rodante ideal, y un radio que no encaja se rechaza nombrando la cara. {{ui:Fillet several edges}} redondea muchas aristas en un paso; marcá {{ui:Corners (sphere patch where three meet)}} para una esquina esférica donde se juntan tres aristas redondeadas de caras planas. Ver [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **Engrosar en un sólido.** {{ui:Thicken into a solid}} en el mismo espacio da a una superficie un espesor; {{ui:Other side}} lo hace crecer hacia el otro lado. Un pliegue o un cruce consigo misma se rechaza nombrando la superficie y el lugar.
- **Sólidos desde superficies.** Las superficies recortadas se pueden unir con unión, restar e intersecar, y se incorporan a la pieza como un solo paso de deshacer. STEP escribe un sólido como una cáscara cerrada y IGES como un sólido; los dos se leen de nuevo como sólido. Si las caras no coinciden arista por arista, el archivo guarda caras separadas y la barra de estado lo dice. Los sólidos también se pueden hacer en el editor de nodos; ver [Editor de nodos](topic:nodes).
- **Redondeos de borde y variables en escaneos.** Cuando ajustás superficies a un escaneo, también se buscan redondeos de borde (toros) y redondeos de radio variable a lo largo de una arista bastante recta, y se listan con su radio. Solo se probó con escaneos simulados.

### Ensamblajes, documentos y enlaces

- **Ensamblajes grandes.** Las piezas que son copias comparten una malla, y {{ui:Views}} › {{ui:Lightweight display}} dibuja cajas para que la vista siga moviéndose (se activa sola en ensamblajes muy grandes; la selección y las uniones siguen usando las piezas reales). El árbol de piezas muestra sus primeras filas y un botón {{ui:Show 700 more}} para el resto. Los archivos de ensamblaje pueden tener hasta 50.000 instancias y 100.000 uniones. Ver [Armar un ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documents…}} en el grupo **Archivo** abre un diálogo sobre una carpeta de proyecto: sacar y devolver, letras de revisión, estados (en curso, para revisión, liberado, obsoleto), historial, dónde se usa y lista de materiales. Ver [Documentos y revisiones (la bóveda)](topic:documents-walkthrough).
- **Enlace en vivo con Rhino.** Un script, `cadcraft_link.py`, observa un documento de Rhino o Grasshopper y envía a PartCraft solo lo que cambió, donde una función importada se reconstruye con la nueva forma. Es en un solo sentido y necesita Studio. Ver [Enlace en vivo con .3dm](topic:live-3dm-link).
- **Ver los cursores de los demás.** En una sesión compartida, el cursor de cada persona se muestra con su nombre y la función que tiene seleccionada. Ver [Trabajar en vivo con otros](topic:work-live).
- **Piso de fábrica.** Activá el complemento Piso de fábrica en {{ui:Settings}} › {{ui:Add-ons}}. Después de postprocesar un programa en {{ui:Manufacture}}, su pestaña puede {{ui:Add to the factory job queue}} o {{ui:Save as a job file}}. Nunca envía ni arranca una máquina.

### Análisis y piezas

- **Complemento Solid FEM.** Activá {{ui:Solid FEM}} en {{ui:Settings}} › {{ui:Add-ons}} (está desactivado hasta que lo hagas) y aparece una pestaña {{ui:Solid FEM}} en el panel derecho. {{ui:Mesh the part}}, elegí caras fijas y cargas en la vista 3D, {{ui:Solve}}, y dibujá el desplazamiento, la tensión de von Mises o una forma modal con {{ui:Show on the model}}. Ver [Solid FEM: control de tensión](topic:solid-fem-check).
- **Arco en bocetos, de diez maneras.** La flecha junto a {{ui:Arc}} en la barra de bocetos lista 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length y Continue. Ver [Dibujar un arco por diez métodos](topic:sketch-arc-methods).
- **Perfiles de acero británicos.** Los elementos soldados pueden usar 976 perfiles UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escribí un tamaño como `305x165x40 UB`. Ver [Miembros estructurales](topic:structural-members).

### Impresión

- **Etapa de impresión.** El botón {{ui:Print stage}} de la barra (complemento 3D Print, activado por defecto) pone los cuerpos de tu pieza sobre una cama punteada: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, y después {{ui:Send to 3D printer}} por USB, Klipper (Moonraker), OctoPrint o PrusaLink. Nada se envía hasta que confirmes, y tu pieza nunca se cambia. Para un archivo STL o 3MF en cambio, ver [Preparar una pieza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Settings}} › {{ui:Add-ons}}, todos apagados hasta que los actives: un laminador de resina, una prueba de exposición y los formatos de archivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB y Anycubic. El laminado corre en un hilo de trabajo, así la página sigue respondiendo.

## En todas las aplicaciones

- Cada pista al pasar el puntero es un tooltip de Bootstrap.
- La pista de inicio tiene un botón de cerrar; se queda cerrada.
- Una fila de pestañas del panel que no entra se desplaza hacia los costados en vez de cortarse.
- La pestaña del navegador muestra el nombre del documento abierto antes de PartCraft | CadCraft.
- {{ui:Settings}} muestra la {{ui:Layout}} del espacio de trabajo como lista desplegable de opciones, y la casilla de idioma lista todos los idiomas que tiene la versión.
- Peso y Temperatura son tipos de unidad en la configuración de Unidades.

## Corregido

- El menú Arco del boceto ahora lista todos los métodos.
- La barra de complementos y el título de la pestaña del navegador se corrigieron el 2026-11-09.

## Límites sinceros

- STEP exacto se leyó de nuevo en OpenCascade (sólidos válidos, volúmenes iguales a los calculados a mano). Todavía no se abrió en todos los programas CAD o CAM, y un ensamblaje no se escribe como STEP exacto.
- Nada se imprimió en una impresora real. Laminado, G-code y archivos de resina fueron leídos por nuestros propios programas o por una impresora de prueba; ninguno de los formatos de resina se cargó en una impresora, y los tamaños y exposiciones de impresora son puntos de partida.
- Solid FEM es lineal, isótropo y elástico, un material por pieza, sin contacto, fluencia ni pandeo. La tensión en caras fijas y esquinas agudas depende de la malla. Es una ayuda para revisar, no revisada por un ingeniero.
- Los tiempos de ensamblajes grandes vienen de un servidor sin GPU; un cuadro de 20.000 piezas a detalle completo todavía tarda segundos allí.
- Los redondeos funcionan sobre pares de caras; no hay mezcla general de vértices ni redondeo entre caras que no se tocan.
- El enlace con Rhino nunca se ejecutó dentro de Rhino o Grasshopper reales. Documentos fue probado por dos programas sobre una carpeta, no por dos personas en una red compartida.
- El ajuste de superficies a un escaneo real no tuvo su revisión a mano. Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código, y la imagen de disco de macOS no está notarizada. Ver [Solución de problemas](topic:troubleshooting).

Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en PartCraft 0.8 y 0.8.1, comparado con 0.7. La simulación responde mientras editás y dice qué se rompe primero, los ensamblajes tienen estudios de movimiento, y los espacios nuevos hacen superficies libres y piezas dimensionadas por física. 0.8.1 es una versión chica de corrección.

### Novedades

**Simulación**

- **Actualizar mientras edito.** Marcá {{ui:Update while I edit}} en el bloque Solve y las respuestas siguen a tus cambios. Cambiá una cota, una carga o el material y aparece de inmediato una respuesta rápida, hecha con elementos cuatro veces más grandes; cuando te detenés un segundo, la respuesta refinada propia del estudio reemplaza a la rápida. Los resultados dicen cuál estás viendo. En una viga de acero en voladizo, la respuesta rápida estuvo dentro del 1 % en deflexión y cerca del 4 % en tensión respecto de la refinada. Ver [Verificar tensión y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Para un estudio estático o de pandeo, {{ui:What breaks first?}} en el bloque **Break it** escala las cargas hasta que la pieza cede. Lista, de peor a mejor, el factor de carga hasta la primera fluencia (con una marca roja donde pica la tensión) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede tal como está cargada, y Problemas muestra un error. Los factores salen de un estudio lineal, así que valen lo que valga ese estudio. Ver [Verificar tensión y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal en el que el material sigue su recta hasta la tensión de fluencia y después una pendiente más plana, con la deformación plástica graficada; y uno de contacto en el que piezas separadas se empujan entre sí (sin fricción) o quedan pegadas (unidas). Un paso de carga que no se asienta, o piezas que se hunden demasiado entre sí, aparecen en el panel de Problemas. La fricción, los grandes deslizamientos, las grandes rotaciones, las grandes deflexiones y la fatiga no se resuelven. Ver [Verificar tensión y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Modelos para CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} guarda el estudio para CalculiX, un programa aparte que instalás y ejecutás vos; {{ui:Export}} › {{ui:CalculiX results (.frd)}} lee de nuevo su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa, y avisa si la pieza cambió desde que se guardó el modelo.

**Ensamblajes**

- **Estudios de movimiento.** {{ui:Assembly}} › {{ui:Motion}} mueve el valor de una unión a lo largo de un tiempo que indicás (velocidad constante, suavizada, senoidal, o ida y vuelta), ubica el ensamblaje en cada paso con sus uniones y lazos cerrados, e informa qué choca y qué tan cerca quedan las piezas. {{ui:Add a point}} grafica la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura contra el tiempo; {{ui:Save CSV}} y {{ui:Save plot}} los escriben. Después de {{ui:Run}}, la barra Step through the run lleva el ensamblaje a cualquier paso. La configuración del estudio se guarda en el archivo de ensamblaje. La velocidad y la aceleración salen de las posiciones registradas, así que usá más pasos si un pico agudo sale bajo. Ver [Revisar un ensamblaje por choques y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas desde la física**

- **Un espacio de Superficies.** Elegí {{ui:Surfaces}} en el cuadro {{ui:Workspace}} para curvas y superficies NURBS junto a la pieza: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} y {{ui:Zebra}}, con la continuidad (G0, G1 o G2) medida sobre las superficies exactas, y una arista peor de lo pedido listada en Problemas con una corrección de Match. {{ui:Fair}} mide las líneas del casco para buscar inflexiones y saltos de curvatura, y rehace las no suaves dentro de tu tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian las funciones de la pieza. Ver [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **El espacio Engineer.** Elegí {{ui:Engineer}} en el selector de espacio de trabajo, elegí un generador y hacé clic en {{ui:New}}: un script dimensiona una pieza según lo que tiene que hacer (transferir calor, caudales, presión, material, proceso de impresión) con fórmulas clásicas y la construye, después devuelve los números que usó con sus fuentes, sus controles de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier computadora. El generador queda guardado en la pieza, y abrir una pieza nunca ejecuta un script. Ver [Piezas desde la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

**Bocetos, dibujos y fabricación**

- **Un boceto desde una foto.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} traza una imagen de una pieza plana sobre fondo liso (contorno y agujeros) o un dibujo a lápiz en líneas, arcos y círculos. Das una sola medida, revisás la vista previa y creás el boceto. Ver [Fundamentos de bocetos](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala y división para impresión.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para compensar la contracción. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} corta una pieza demasiado grande para tu cama en piezas numeradas unidas con clavijas, chavetas, colas de milano, agujeros de espiga o cavidades para imanes. Ver [Imprimir en 3D](topic:print-3d).
- **Hojas anidadas a G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} lee un DXF anidado y hace un programa por hoja con el postprocesador que elijas: primero agujeros y recortes, después los contornos. No planifica entradas de corte, orden de corte ni bordes compartidos. Ver [Anidar piezas planas en hojas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más solos.** {{ui:Sheet}} › {{ui:Automatic}} elige la hoja tamaño A más chica que contiene las vistas a la mayor escala estándar hasta 1:1. {{ui:Dimension the holes}} pone una marca de centro en cada agujero, un llamado por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Ver [Hacer un dibujo](topic:drawing-pdf).

**En todas las aplicaciones**

- **Idiomas.** Las aplicaciones vienen en 54 idiomas. Los que no son inglés son borradores de máquina hasta que un hablante nativo los lea.
- **Filas de la barra.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} elige Wrap (como antes), 2 filas o 1 fila; una barra que no entra se desplaza hacia los costados. La cinta de Elementos de PartCraft muestra en grande la herramienta más usada y esconde las variantes detrás de un botón dividido.
- **Conectá tu IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar por aplicación. Un asistente conectado puede dimensionar una pieza desde una frase, como una escuadra para una carga, mostrar su trabajo y cada control, y construirla; informa lo que no revisó (concentración de tensión, fatiga, fluencia en plásticos). Ver [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Congelamiento del cursor a pantalla completa.** El pick al pasar el puntero ahora tiene límite de frecuencia. La causa es nuestra mejor lectura y no se confirmó con la persona que lo reportó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras corren; antes eran solo en inglés. Esto todavía no se probó en todas las plataformas: avisanos si el idioma no cambia.

### No está todavía en esta versión

- Conectá tu IA no está terminado: la conexión de un clic dentro de Studio, el conector alojado para IA del navegador, tu propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos. Studio no tiene IA propia.
- Studio no tiene firma de código: Windows puede advertir, y macOS pide clic derecho y después Abrir. Ver [Solución de problemas](topic:troubleshooting).
- Las cadenas de tolerancias siguen siendo de una dirección: ver [Cadenas de tolerancias](topic:tolerance-stackup).
- Lo demás está en [Lo que todavía no está hecho](topic:not-built-yet).

Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).
