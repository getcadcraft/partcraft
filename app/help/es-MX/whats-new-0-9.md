---
title: Novedades de la versión 0.9
summary: PartCraft 0.9 agrega redondeos entre caras y engrosamiento en sólidos, ensamblajes de miles de piezas, una bóveda de Documentos con revisiones, un complemento Solid FEM de esfuerzos, diez métodos de arco, perfiles de acero del Reino Unido, una Etapa de impresión y complementos de impresión con resina.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, redondeo entre caras, bola rodante, redondeo de varias aristas, engrosar, sólido desde superficies, step shell, sólido iges, redondeos en escaneos, ensamblaje grande, visualización ligera, 20000 piezas, documentos, bóveda, sacar, devolver, revisión, dónde se usa, vínculo Rhino, grasshopper, 3dm, cursores, piso de fábrica, cola de trabajos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfiles de acero del Reino Unido, etapa de impresión, resina, goo, ctb, base, desplegar, superficies, nurbs, alisar, casco, cebra, ingeniero, generador, cuerpo generado, croquis desde una foto, escalar para imprimir, dividir para imprimir, contracción, láminas anidadas, g-code, dibujo, acotar agujeros, asistente, mcp, idiomas, filas de la barra de herramientas
from: 96d9fbfa
---

Esto es lo que cambió en PartCraft 0.9, comparado con 0.8.1. Las superficies de forma libre ahora se cierran como sólidos, los ensamblajes de miles de piezas siguen siendo utilizables, una bóveda de Documentos conserva las revisiones, y un complemento Solid FEM revisa los esfuerzos en una pieza. Cada punto indica dónde encontrarlo.

## Nuevo en 0.9.1

- **Exportación STEP exacta.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} ahora funcionan. Los agujeros, protuberancias, redondeos, conos, esferas y toros se escriben sobre sus superficies verdaderas, con círculos verdaderos como aristas, para que otro programa CAD o CAM pueda reconocer un agujero como agujero. Las caras de splines, las roscas modeladas y las mallas importadas siguen siendo facetas planas dentro del mismo sólido. Vea [Exportación para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP entra, STEP exacto sale.** Un archivo STEP que abre conserva sus propias caras planas, cilindros, conos, esferas y toros, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} los escribe de vuelta como superficies verdaderas en lugar de facetas: una viga de un proveedor con agujeros para pernos sale con las mismas caras con las que entró, más lo que usted le haya cortado. Las caras de spline, barridas y de revolución del archivo siguen siendo facetas, y también los cuerpos provenientes de STL, OBJ y 3MF. Vuelva a abrir el archivo STEP para una pieza guardada antes. Vea [Abrir un archivo STEP y construir sobre él](topic:import-step).
- **Círculos verdaderos en el DXF de la cara.** {{ui:Exportar}} › {{ui:DXF del croquis o de la cara plana}} con una cara plana elegida ahora escribe los agujeros redondos como círculos, con el propio centro y radio del agujero, para una mesa de láser, plasma o chorro de agua. Las demás aristas redondas siguen siendo facetas.
- **STEP exacto para el taller.** En {{ui:Fabricación}}, {{ui:STEP exacto (coordenadas de trabajo)}} escribe la pieza con su origen en el origen de trabajo de la preparación y Z a lo largo del eje de la herramienta, las coordenadas que usa el código G. Vea [Crear trayectorias y código G](topic:manufacture#exact-step-for-the-shop).

## Nuevo

### Superficies y sólidos

- **Redondeo entre caras.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}}, luego {{ui:Fillet between faces}}. Elija las dos caras de un sólido y escriba el radio ({{ui:Radio en el extremo (mm, 0 = igual)}} para un radio que cambia a lo largo de la arista). La línea de resultado indica qué tan lejos está el redondeo de la bola rodante ideal, y un radio que no encaja se rechaza indicando la cara. {{ui:Fillet several edges}} redondea muchas aristas en un paso; marque {{ui:Corners (sphere patch where three meet)}} para una esquina esférica donde se juntan tres aristas redondeadas de caras planas. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Engrosar en un sólido.** {{ui:Dar espesor para crear un sólido}} en el mismo espacio de trabajo da a una superficie un espesor; {{ui:Otro lado}} la crece hacia el otro lado. Un pliegue o un cruce consigo misma se rechaza indicando la superficie y el lugar.
- **Sólidos desde superficies.** Las superficies recortadas pueden unirse con unión, restar e intersecar, y se incorporan a la pieza como un solo paso de deshacer. STEP escribe un sólido como un solo caparazón cerrado, e IGES como un solo sólido; ambos se leen de vuelta como sólido. Si las caras no se empatan arista por arista, el archivo recibe caras separadas y la línea de estado lo indica. También pueden crearse sólidos en el editor de nodos; vea [Editor de nodos](topic:nodes).
- **Redondeos de borde y de radio variable en escaneos.** Cuando ajusta superficies a un escaneo, también se buscan redondeos de borde (toros) y redondeos de radio variable a lo largo de una arista bastante recta, y se listan con su radio. Se probó solo con escaneos de prueba.

### Ensamblajes, documentos y vínculos

- **Ensamblajes grandes.** Las piezas que son copias comparten una malla, y {{ui:Vistas}} › {{ui:Visualización ligera}} dibuja cajas para que la vista siga moviéndose (se activa sola en ensamblajes muy grandes; la selección y las uniones siguen usando las piezas reales). El árbol de piezas muestra sus primeras filas y un botón {{ui:Mostrar 700 más}} para el resto. Los archivos de ensamblaje pueden tener hasta 50,000 instancias y 100,000 uniones. Vea [Construir un ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} en el grupo **Archivo** abre un diálogo sobre una carpeta de proyecto: sacar y devolver, letras de revisión, estados (en proceso, para revisión, liberado, obsoleto), historial, dónde se usa y lista de materiales. Vea [Documentos y revisiones (la bóveda)](topic:documents-walkthrough).
- **Vínculo en vivo con Rhino.** Un script, `cadcraft_link.py`, vigila un documento de Rhino o Grasshopper y envía a PartCraft solo lo que cambió; una operación importada se reconstruye con la nueva forma. Es de una sola vía y necesita Studio. Vea [Vínculo .3dm en vivo](topic:live-3dm-link).
- **Vea los cursores de los demás.** En una sesión compartida, el cursor de cada persona se muestra con su nombre y la operación que tiene seleccionada. Vea [Trabajar en vivo con otros](topic:work-live).
- **Piso de fábrica.** Active el complemento Piso de fábrica en {{ui:Configuración}} › {{ui:Complementos}}. Después de publicar un programa en {{ui:Fabricación}}, su pestaña puede {{ui:Agregar a la cola de trabajos de fábrica}} o {{ui:Guardar como archivo de trabajo}}. Nunca envía ni arranca una máquina.

### Análisis y piezas

- **Complemento Solid FEM.** Active {{ui:Solid FEM}} en {{ui:Configuración}} › {{ui:Complementos}} (está desactivado hasta que lo haga) y aparece una pestaña {{ui:Solid FEM}} en el panel derecho. {{ui:Mallar la pieza}}, elija caras fijas y cargas en la vista 3D, {{ui:Resolver}}, y dibuje el desplazamiento, el esfuerzo de von Mises o una forma modal con {{ui:Mostrar en el modelo}}. Vea [Solid FEM: revisión de esfuerzos](topic:solid-fem-check).
- **Arco en croquis, de diez formas.** La flecha junto a {{ui:Arco}} en la barra de croquis lista: 3 puntos, Inicio Centro Fin, Inicio Centro Ángulo, Inicio Centro Longitud, Inicio Fin Ángulo, Inicio Fin Dirección, Inicio Fin Radio, Centro Inicio Fin, Centro Inicio Ángulo, Centro Inicio Longitud y Continuar. Vea [Dibujar un arco por diez métodos](topic:sketch-arc-methods).
- **Perfiles de acero del Reino Unido.** Los miembros estructurales pueden usar 976 perfiles UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba una medida como `305x165x40 UB`. Vea [Miembros estructurales](topic:structural-members).

### Impresión

- **Etapa de impresión.** El botón {{ui:Etapa de impresión}} en la barra de herramientas (complemento 3D Print, activado por defecto) coloca los cuerpos de su pieza en una base punteada: {{ui:Desplegar}}, {{ui:Girar 90°}}, {{ui:Acomodar en la base}}, {{ui:Ajustar todo en la base}}, {{ui:Vista previa de capas}}, y luego {{ui:Enviar a impresora 3D}} por USB, Klipper (Moonraker), OctoPrint o PrusaLink. No se envía nada hasta que usted confirme, y su pieza nunca cambia. Para un archivo STL o 3MF en su lugar, vea [Preparar una pieza para impresión 3D](topic:print-3d).
- **Impresión con resina.** Complementos en {{ui:Configuración}} › {{ui:Complementos}}, todos desactivados hasta que los active: un laminador de resina, una prueba de exposición, y los formatos de archivo Elegoo GOO, SL1, Chitubox CBDDLP/CTB y Anycubic. El laminado corre en un hilo de trabajo, así que la página sigue respondiendo.

## En todas las aplicaciones

- Cada sugerencia al pasar el puntero es un tooltip de Bootstrap.
- El consejo de inicio tiene un botón de cierre; permanece cerrado.
- Una fila de pestañas de un panel que no cabe se desplaza hacia los lados en lugar de cortarse.
- La pestaña del navegador muestra el nombre del documento abierto antes de PartCraft | CadCraft.
- {{ui:Configuración}} muestra el {{ui:Diseño}} del espacio de trabajo como lista desplegable de opciones, y el cuadro de {{ui:Lenguaje}} enumera cada idioma que incluye la versión.
- El peso y la temperatura son tipos de unidad en la configuración de {{ui:Unidades}}.

## Corregido

- El menú Arco del croquis ahora enumera cada método.
- La barra de complementos y el título de la pestaña del navegador se corrigieron el 2026-11-09.

## Límites reconocidos

- STEP exacto se leyó de vuelta en OpenCascade (sólidos válidos, volúmenes iguales a los calculados a mano). Aún no se ha abierto en todos los programas CAD o CAM, y un ensamblaje no se escribe como STEP exacto.
- Nada se ha impreso en una impresora real. Laminado, código G y archivos de resina se leyeron con nuestros propios programas o con una impresora de prueba; ninguno de los formatos de resina se cargó en una impresora, y los tamaños de impresora y las exposiciones son puntos de partida.
- Solid FEM es lineal, isótropo y elástico, con un material por pieza, sin contacto, fluencia ni pandeo. El esfuerzo en caras fijas y en esquinas agudas depende de la malla. Es una ayuda para revisar, no revisada por un ingeniero.
- Los tiempos de ensamblajes grandes vienen de un servidor sin GPU; una vista de detalle completo de 20,000 piezas todavía tarda segundos allí.
- Los redondeos funcionan en pares de caras; no hay mezcla general de vértices ni redondeo entre caras que no se tocan.
- El vínculo con Rhino nunca se ha ejecutado dentro de Rhino o Grasshopper reales. Documentos se probó con dos programas en una carpeta, no con dos personas en una red compartida.
- El ajuste de superficies a un escaneo real todavía no ha tenido su revisión manual. Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código, y la imagen de disco de macOS no está notarizada. Vea [Solución de problemas](topic:troubleshooting).

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en PartCraft 0.8 y 0.8.1, comparado con 0.7. La simulación responde mientras edita y le dice qué se rompe primero, los ensamblajes obtienen estudios de movimiento, y nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. 0.8.1 es una versión pequeña de correcciones.

### Nuevo

**Simulación**

- **Actualizar mientras edito.** Marque {{ui:Actualizar mientras edito}} en el bloque Resolver y las respuestas siguen sus ediciones. Cambie una cota, una carga o el material y aparece de inmediato una respuesta rápida, hecha con elementos cuatro veces más grandes; cuando se detiene un segundo aproximadamente, la propia respuesta refinada del estudio la reemplaza. Los resultados indican cuál está viendo. En un voladizo de acero, la respuesta rápida estuvo dentro de 1 % en deflexión y cerca de 4 % en esfuerzo de la refinada. Vea [Revisar esfuerzo y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Para un estudio estático o de pandeo, {{ui:¿Qué se rompe primero?}} en el bloque **Romperlo** escala las cargas hasta que la pieza cede. Lista, de peor a mejor, el factor de carga hasta la primera fluencia (con un marcador rojo donde el esfuerzo llega al máximo) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede con la carga aplicada, y Problemas muestra un error. Los factores salen de un estudio lineal, así que son tan buenos como él. Vea [Revisar esfuerzo y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal en el que el material sigue su recta hasta el esfuerzo de fluencia y luego una pendiente más plana, con la deformación plástica graficada; y uno de contacto en el que piezas separadas se empujan entre sí (sin fricción) o quedan pegadas (unidas). Un paso de carga que no se estabiliza, o piezas que se hunden demasiado unas en otras, aparecen en el panel de Problemas. La fricción, el gran deslizamiento, las grandes rotaciones, las grandes deflexiones y la fatiga no se resuelven. Vea [Revisar esfuerzo y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos de entrada para CalculiX.** {{ui:Exportar}} › {{ui:Archivo de entrada de CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta por su cuenta; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} lee de vuelta su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa, y avisa si la pieza cambió desde que se guardó el archivo de entrada.

**Ensamblajes**

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} mueve el valor de una unión durante un tiempo que usted indique (velocidad constante, suavizada, senoidal, o ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y lazos cerrados, e informa qué choca y qué tan cerca están las piezas. {{ui:Agregar un punto}} grafica la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura contra el tiempo; {{ui:Guardar CSV}} y {{ui:Guardar gráfica}} los escriben. Después de {{ui:Ejecutar}}, el control Paso en la barra de ejecución mueve el ensamblaje a cualquier paso. La configuración del estudio se guarda en el archivo del ensamblaje. Velocidad y aceleración salen de las posiciones registradas, así que use más pasos si un pico agudo se lee bajo. Vea [Revisar un ensamblaje por interferencias y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas a partir de la física**

- **Un espacio de trabajo de Superficies.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} para curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Solevación}}, {{ui:Barrido}}, {{ui:Ajustar}} y {{ui:Cebra}}, con continuidad (G0, G1 o G2) medida sobre las superficies exactas, y una arista peor de lo que pidió listada en Problemas con una corrección de Ajustar. {{ui:Alisar}} mide las líneas de casco para encontrar inflexiones y saltos de curvatura, y reconstruye las no suaves dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian sus operaciones. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniero.** Elija {{ui:Ingeniero}} en el selector de espacio de trabajo, elija un generador y haga clic en {{ui:Nuevo}}: un script dimensiona una pieza a partir de lo que debe hacer (calentar para mover, flujos, presión, material, proceso de impresión) con fórmulas de libro de texto, y la construye; luego devuelve los números que usó con sus fuentes, sus verificaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier computadora. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Vea [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

**Croquis, planos y fabricación**

- **Un croquis a partir de una foto.** {{ui:Operaciones}} › {{ui:Más}} › {{ui:Croquis desde una foto…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a pluma en líneas, arcos y círculos. Usted da una sola medida, revisa la vista previa y crea el croquis. Vea [Conceptos básicos de croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar y dividir para imprimir.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL o 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para una tolerancia de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de piezas)…}} corta una pieza más grande que su base en piezas numeradas unidas con clavijas, cuñas, colas de milano, agujeros de pasador o cavidades para imán. Vea [Imprimir en 3D](topic:print-3d).
- **Láminas anidadas a código G.** {{ui:Exportar}} › {{ui:Láminas anidadas a código G}} lee un DXF anidado y crea un programa por lámina mediante el post que usted elija: primero agujeros y recortes, luego los contornos. No planea entradas, el orden de corte ni aristas compartidas. Vea [Anidar piezas planas en láminas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja tamaño A más pequeña que contenga las vistas a la escala estándar más grande hasta 1:1. {{ui:Acotar los agujeros}} pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Vea [Hacer un dibujo](topic:drawing-pdf).

**En todas las aplicaciones**

- **Idiomas.** Las aplicaciones están disponibles en 54 idiomas. Los que van más allá del inglés son borradores de máquina hasta que un hablante nativo los lea.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige Envolver (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza hacia los lados. La cinta de Operaciones de PartCraft muestra la herramienta más usada en grande y oculta las variantes tras un botón dividido.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar por aplicación. Un asistente conectado puede dimensionar una pieza a partir de una oración, como un soporte para una carga, mostrar su trabajo y cada verificación, y construirla; informa lo que no revisó (concentración de esfuerzos, fatiga, fluencia lenta en plásticos). Vea [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Congelamiento del cursor en pantalla completa.** La selección al pasar el puntero ahora tiene límite de frecuencia. La causa es nuestra mejor lectura y no fue confirmada con la persona que la reportó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes eran solo en inglés. Esto todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

### Todavía no incluido en esta versión

- Conectar su IA no está terminado: la conexión de un clic dentro de Studio, el conector alojado para IA de navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos. Studio no tiene IA propia.
- Studio no tiene firma de código: Windows puede advertir, y macOS pide clic derecho y luego Abrir. Vea [Solución de problemas](topic:troubleshooting).
- Las pilas de tolerancias siguen siendo de una sola dirección: vea [Pilas de tolerancias](topic:tolerance-stackup).
- Lo demás está en [Lo que aún no está construido](topic:not-built-yet).

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
