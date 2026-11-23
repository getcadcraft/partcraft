---
title: Novedades en 0.9 (anteriores)
summary: PartCraft 0.9 agrega redondeos entre caras y engrosamiento en sólidos, ensamblajes de miles de piezas, una bóveda de documentos con revisiones, un complemento Solid FEM de esfuerzos, diez métodos de arco, perfiles de acero del Reino Unido, una etapa de impresión y complementos de impresión en resina.
keywords: novedades 0.9, versión anterior, novedades, notas de la versión, registro de cambios, 0.9, redondeo entre caras, bola rodante, redondeo de varias aristas, engrosar, sólido desde superficies, step shell, sólido iges, redondeos en escaneos, ensamblaje grande, visualización ligera, 20000 piezas, documentos, bóveda, registrar salida, revisión, liberación, dónde se usa, enlace con Rhino, grasshopper, 3dm, cursores, piso de fábrica, cola de trabajos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfiles de acero del Reino Unido, libro azul, etapa de impresión, resina, goo, ctb, base, desplegar, novedades, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras edita, romper, qué se rompe primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, alisar, casco, cebra, ingeniería, generador, cuerpo generado, croquis desde una foto, escalar para impresión, dividir para impresión, contracción, láminas anidadas, código g, dibujo, acotar agujeros, asistente, mcp, idiomas, filas de la barra de herramientas
from: 1dafd7c8
---

Esto es lo que cambió en PartCraft 0.9, en comparación con 0.8.1. Las superficies de forma libre ahora se cierran en sólidos, los ensamblajes de miles de piezas siguen siendo utilizables, una bóveda de Documentos conserva las revisiones, y un complemento Solid FEM revisa el esfuerzo en una pieza. Cada elemento indica dónde encontrarlo.

## Novedades en 0.9.1

- **Exportación de STEP exacto.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} ya funcionan. Los agujeros, resaltos, redondeos, conos, esferas y toros se escriben en sus superficies verdaderas con círculos verdaderos como aristas, para que otro programa CAD o CAM pueda reconocer un agujero como agujero. Los lados de spline, las roscas modeladas y las mallas importadas siguen siendo facetas planas dentro del mismo sólido. Vea [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP de entrada, STEP exacto de salida.** Un archivo STEP que abre conserva sus propias caras planas, cilindros, conos, esferas y toros, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} los escribe de vuelta como superficies verdaderas en lugar de facetas: una viga de un proveedor con agujeros para tornillos sale con las mismas caras con las que entró, más lo que usted le haya cortado. Las caras spline, barridas y revolucionadas del archivo siguen siendo facetas, y lo mismo los cuerpos de STL, OBJ y 3MF. Vuelva a abrir el archivo STEP para una pieza guardada antes. Vea [Abrir un archivo STEP y construir sobre él](topic:import-step).
- **Círculos verdaderos en el DXF de cara.** {{ui:Exportar}} › {{ui:DXF del croquis o de la cara plana}} con una cara plana seleccionada ahora escribe los agujeros redondos como círculos, con el centro y el radio propios del agujero, para una mesa de láser, plasma o chorro de agua. Las demás aristas redondas siguen siendo facetas.
- **STEP exacto para el taller.** En {{ui:Fabricación}}, {{ui:STEP exacto (coordenadas de trabajo)}} escribe la pieza con su origen en el origen de trabajo de la configuración y Z a lo largo del eje de la herramienta, las coordenadas que usa el código G. Vea [Crear trayectorias y código G](topic:manufacture#exact-step-for-the-shop).

## Novedades

### Superficies y sólidos

- **Redondeo entre caras.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} y luego {{ui:Fillet between faces}}. Seleccione las dos caras de un sólido y escriba el radio (y {{ui:Radio en el extremo (mm, 0 = igual)}} para un radio que cambie a lo largo de la arista). La línea de resultado indica qué tan lejos está el redondeo de la bola rodante ideal, y un radio que no encaja se rechaza indicando la cara. {{ui:Redondear varias aristas}} redondea muchas aristas en un paso; marque {{ui:Esquinas (parche esférico donde se encuentran tres)}} para una esquina esférica donde se encuentran tres aristas redondeadas de caras planas. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Engrosar en un sólido.** {{ui:Dar espesor para crear un sólido}} en el mismo espacio de trabajo da a una superficie un espesor; {{ui:Otro lado}} lo hace crecer en sentido contrario. Un doblez o un cruce consigo misma se rechaza indicando la superficie y el lugar.
- **Sólidos desde superficies.** Las superficies recortadas pueden unirse con unión, restar e intersecar, y se integran a la pieza como un solo paso de deshacer. STEP escribe un sólido como un solo caparazón cerrado e IGES como un solo sólido; ambos se leen de vuelta como sólido. Si las caras no coinciden arista por arista, el archivo recibe caras separadas y la línea de estado lo indica. Los sólidos también pueden crearse en el editor de nodos; vea [Editor de nodos](topic:nodes).
- **Redondeos de borde y variables en escaneos.** Al ajustar superficies a un escaneo, también se buscan redondeos de borde (toros) y redondeos de radio variable a lo largo de una arista bastante recta, y se listan con su radio. Solo se ha probado con escaneos de prueba construidos.

### Ensamblajes, documentos y vínculos

- **Ensamblajes grandes.** Las piezas que son copias comparten una sola malla, y {{ui:Vistas}} › {{ui:Visualización ligera}} dibuja cajas para que la vista siga fluida (se activa sola en ensamblajes muy grandes; la selección y las uniones siguen usando las piezas reales). El árbol de piezas muestra sus primeras filas y un botón {{ui:Mostrar 700 más}} para las demás. Los archivos de ensamblaje pueden contener hasta 50,000 instancias y 100,000 uniones. Vea [Armar un ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} en el grupo **Archivo** abre un cuadro sobre una carpeta de proyecto: registrar salida y registrar entrada, letras de revisión, estados (en curso, para revisión, liberado, obsoleto), historial, dónde se usa y lista de materiales. Vea [Documentos y revisiones (la bóveda)](topic:documents-walkthrough).
- **Enlace en vivo con Rhino.** Un solo script, `cadcraft_link.py`, vigila un documento de Rhino o de Grasshopper y envía a PartCraft solo lo que cambió, donde una operación importada se reconstruye con la nueva forma. Es en un solo sentido y necesita Studio. Vea [Enlace en vivo de .3dm](topic:live-3dm-link).
- **Ver los cursores de los demás.** En una sesión compartida, el cursor de cada persona se muestra con su nombre y la operación que tiene seleccionada. Vea [Trabajar en vivo con otros](topic:work-live).
- **Piso de fábrica.** Active el complemento Piso de fábrica en {{ui:Configuración}} › {{ui:Complementos}}. Después de generar un programa en {{ui:Fabricación}}, su pestaña puede {{ui:Agregar a la cola de trabajos de fábrica}} o {{ui:Guardar como archivo de trabajo}}. Nunca envía ni arranca una máquina.

### Análisis y piezas

- **Complemento Solid FEM.** Active {{ui:Solid FEM}} en {{ui:Configuración}} › {{ui:Complementos}} (está desactivado hasta que lo haga) y aparece una pestaña {{ui:Solid FEM}} en el panel derecho. {{ui:Mallar la pieza}}, seleccione caras fijas y cargas en la vista 3D, {{ui:Resolver}}, y dibuje el desplazamiento, el esfuerzo de von Mises o una forma modal con {{ui:Mostrar en el modelo}}. Vea [Solid FEM: revisión de esfuerzo](topic:solid-fem-check).
- **Arco en croquis, de diez formas.** La flecha junto a {{ui:Arco}} en la barra de croquis enumera 3 puntos, Inicio Centro Fin, Inicio Centro Ángulo, Inicio Centro Longitud, Inicio Fin Ángulo, Inicio Fin Dirección, Inicio Fin Radio, Centro Inicio Fin, Centro Inicio Ángulo, Centro Inicio Longitud y Continuar. Vea [Dibujar un arco con diez métodos](topic:sketch-arc-methods).
- **Medidas de acero del Reino Unido.** Las estructuras soldadas pueden usar 976 perfiles del Reino Unido (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba una medida como `305x165x40 UB`. Vea [Miembros estructurales](topic:structural-members).

### Impresión

- **Etapa de impresión.** El botón {{ui:Etapa de impresión}} de la barra de herramientas (complemento Impresión 3D, activado por defecto) coloca los cuerpos de su pieza sobre una base punteada: {{ui:Desplegar}}, {{ui:Girar 90°}}, {{ui:Organizar en la base}}, {{ui:Ajustar todo en la base}}, {{ui:Vista previa de capas}}, y luego {{ui:Enviar a impresora 3D}} por USB, Klipper (Moonraker), OctoPrint o PrusaLink. No se envía nada hasta que confirme, y su pieza nunca se modifica. Para un archivo STL o 3MF, vea [Preparar una pieza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Configuración}} › {{ui:Complementos}}, todos desactivados hasta que los active: un laminador para resina, una prueba de exposición, y los formatos de archivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB y Anycubic. El laminado se ejecuta en un hilo de trabajo, así que la página sigue respondiendo.

## En todas las aplicaciones

- Cada indicación al pasar el cursor es un tooltip de Bootstrap.
- El consejo de inicio tiene un botón de cierre; permanece cerrado.
- Una fila de pestañas de un panel que no cabe se desplaza hacia los lados en lugar de recortarse.
- La pestaña del navegador muestra el nombre del documento abierto antes de PartCraft | CadCraft.
- {{ui:Configuración}} muestra la {{ui:Disposición}} del espacio de trabajo como lista desplegable de opciones, y el cuadro de idioma enumera todos los idiomas que tiene la versión.
- Peso y Temperatura son tipos de unidad en la configuración de Unidades.

## Corregido

- El menú Arco del croquis ahora enumera todos los métodos.
- La barra de herramientas de complementos y el título de la pestaña del navegador se corrigieron el 2026-11-09.

## Límites de la versión

- El STEP exacto se leyó de vuelta en OpenCascade (sólidos válidos, volúmenes iguales a los calculados a mano). Todavía no se ha abierto en todos los programas CAD o CAM, y un ensamblaje no se escribe como STEP exacto.
- Nada se ha impreso en una impresora real. El laminado, el código G y los archivos de resina se leyeron de vuelta con nuestros propios programas o con una impresora de prueba; ninguno de los formatos de resina se cargó en una impresora, y los tamaños de impresora y las exposiciones son puntos de partida.
- Solid FEM es lineal, isótropo y elástico, con un material por pieza, sin contacto, fluencia ni pandeo. El esfuerzo en caras fijas y en esquinas agudas depende de la malla. Es una ayuda de revisión, no revisada por un ingeniero.
- Los tiempos de ensamblajes grandes provienen de un servidor sin GPU; un cuadro de detalle completo de 20,000 piezas todavía tarda segundos allí.
- Los redondeos funcionan en pares de caras; no hay mezcla general en vértices ni redondeo entre caras que no se encuentran.
- El enlace con Rhino nunca se ha ejecutado dentro de Rhino o Grasshopper reales. Documentos se probó con dos programas sobre una carpeta, no con dos personas en una carpeta de red.
- El ajuste de superficies a un escaneo real no ha tenido su revisión manual. Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no están firmados digitalmente, y la imagen de disco de macOS no está notarizada. Vea [Solución de problemas](topic:troubleshooting).

Los cambios anteriores están en [Novedades en la versión 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en PartCraft 0.8 y 0.8.1, en comparación con 0.7. La simulación responde mientras edita y le indica qué se rompe primero, los ensamblajes obtienen estudios de movimiento, y nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. 0.8.1 es una pequeña versión de correcciones.

### Novedades

**Simulación**

- **Actualizar mientras edito.** Marque {{ui:Actualizar mientras edito}} en el bloque Resolver y las respuestas siguen sus cambios. Cambie una cota, una carga o el material y aparece de inmediato una respuesta rápida, hecha con elementos cuatro veces más grandes; cuando se detiene durante alrededor de un segundo, la respuesta refinada del propio estudio la reemplaza. Los resultados indican cuál está viendo. En un voladizo de acero, la respuesta rápida estuvo dentro de 1 % en deflexión y alrededor de 4 % en esfuerzo de la refinada. Vea [Revisar esfuerzo y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Para un estudio estático o de pandeo, {{ui:¿Qué se rompe primero?}} en el bloque Romper escala las cargas hasta que la pieza cede. Enumera, del peor al mejor, el factor de carga a la primera fluencia (con una marca roja donde el esfuerzo es máximo) y el factor de carga al pandeo. Un factor menor que 1 significa que la pieza ya cede con la carga aplicada, y Problemas muestra un error. Los factores provienen de un estudio lineal, así que valen lo que valga ese estudio. Vea [Revisar esfuerzo y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal, en el que el material sigue su recta hasta el esfuerzo de fluencia y luego una pendiente más plana, con la deformación plástica graficada; y uno de contacto, en el que piezas separadas se empujan entre sí (sin fricción) o quedan pegadas (unidas). Un paso de carga que no logra asentarse, o piezas que se hunden demasiado unas en otras, aparecen en el panel de Problemas. La fricción, el deslizamiento grande, las rotaciones grandes, las deflexiones grandes y la fatiga no se resuelven. Vea [Revisar esfuerzo y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos para CalculiX.** {{ui:Exportar}} › {{ui:Archivo de entrada de CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} lee de vuelta su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa, y lo indica si la pieza cambió desde que se guardó el archivo.

**Ensamblajes**

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} impulsa el valor de una unión durante un tiempo que usted indique (velocidad constante, suavizada, senoidal, o ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y lazos cerrados, e informa qué interfiere y qué tan cerca quedan las piezas. {{ui:Añadir un punto}} grafica la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura contra el tiempo; {{ui:Guardar CSV}} y {{ui:Guardar gráfica}} las escriben. Después de {{ui:Ejecutar}}, la barra de pasos de la ejecución mueve el ensamblaje a cualquier paso. La configuración del estudio se guarda en el archivo del ensamblaje. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que use más pasos si un pico agudo se lee bajo. Vea [Revisar un ensamblaje por interferencias y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas a partir de la física**

- **Un espacio de trabajo de Superficies.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} para curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Solevación}}, {{ui:Barrido}}, {{ui:Ajustar}} y {{ui:Cebra}}, con continuidad (G0, G1 o G2) medida sobre las superficies exactas, y una arista peor de lo que pidió se lista en Problemas con una corrección de Ajustar. {{ui:Alisar}} mide las líneas de casco para encontrar inflexiones y saltos de curvatura, y reconstruye las no suaves dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian las operaciones de la pieza. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniería.** Elija {{ui:Ingeniería}} en el selector de espacios de trabajo, seleccione un generador y haga clic en {{ui:Nuevo}}: un script dimensiona una pieza según lo que debe hacer (calor para mover, flujos, presión, material, proceso de impresión) con fórmulas de libro, la construye, y luego devuelve los números que usó con sus fuentes, sus revisiones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier computadora. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Vea [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

**Croquis, dibujos y fabricación**

- **Un croquis desde una foto.** {{ui:Operaciones}} › {{ui:Más}} › {{ui:Croquis desde una foto…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a pluma en líneas, arcos y círculos. Usted da una longitud, revisa la vista previa y crea el croquis. Vea [Fundamentos del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar y dividir para impresión.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL o 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo con una tolerancia de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de piezas)…}} corta una pieza demasiado grande para su base en piezas numeradas unidas con clavijas, llaves, colas de milano, agujeros de espiga o cavidades para imanes. Vea [Imprimir en 3D](topic:print-3d).
- **Láminas anidadas a código G.** {{ui:Exportar}} › {{ui:Láminas anidadas a código G}} lee un DXF anidado y genera un programa por lámina a través del posprocesador que elija: primero los agujeros y recortes, luego los contornos. No planifica las entradas, el orden de corte ni las aristas compartidas. Vea [Anidar piezas planas en láminas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja tamaño A más pequeña que contiene las vistas a la escala estándar más grande hasta 1:1. {{ui:Acotar los agujeros}} pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Vea [Crear un dibujo](topic:drawing-pdf).

**En todas las aplicaciones**

- **Idiomas.** Las aplicaciones están disponibles en 54 idiomas. Los que van más allá del inglés son borradores de máquina hasta que los lea un hablante nativo.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige Ajustar (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza hacia los lados. La cinta de Operaciones de PartCraft muestra la herramienta más usada en grande y oculta las variantes tras un botón dividido.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar por aplicación. Un asistente conectado puede dimensionar una pieza a partir de una frase, como un soporte para una carga, mostrar su procedimiento y cada revisión, y construirla; informa lo que no revisó (concentración de esfuerzos, fatiga, fluencia lenta en plásticos). Vea [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Congelamiento del cursor en pantalla completa.** La selección al pasar el cursor ahora tiene un límite de frecuencia. La causa es nuestra mejor lectura y no se confirmó con la persona que la reportó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

### Todavía no en esta versión

- Conectar su IA no está terminado: no se prometen la conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio ni el paquete MCP publicado. Studio no tiene IA propia.
- Studio no está firmado digitalmente: Windows puede advertir, y macOS pide hacer clic derecho y luego Abrir. Vea [Solución de problemas](topic:troubleshooting).
- Las cadenas de tolerancias todavía son de una dirección: vea [Cadenas de tolerancias](topic:tolerance-stackup).
- Lo demás está en [Lo que aún no está construido](topic:not-built-yet).

Los cambios anteriores están en [Novedades en la versión 0.7](topic:whats-new-0-7).
