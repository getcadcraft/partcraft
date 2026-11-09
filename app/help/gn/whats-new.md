---
title: Novedades en 0.8 y 0.8.1
summary: PartCraft 0.8 agrega análisis en vivo mientras editás, una comprobación de Qué se rompe primero, estudios de fluencia y contacto con archivos deck para un solver externo, estudios de movimiento para conjuntos, un espacio de trabajo Superficies para superficies de forma libre, piezas dimensionadas desde la física en el espacio de trabajo Ingeniero, boceto desde una foto, exportaciones para impresión, hojas anidadas a G-code y planos que acotan sus agujeros. 0.8.1 corrige un congelamiento del cursor en pantalla completa.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras se edita, qué se rompe primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, fair, hull, zebra, ingeniero, generador, pieza generada, boceto desde una foto, escala para impresión, dividir para impresión, contracción, hojas anidadas, g-code, plano, acotar agujeros, asistente, mcp, idiomas, filas de la barra
from: 62e4dce2
---

Esto es lo que cambió en PartCraft 0.8 y 0.8.1, comparado con 0.7. La simulación responde mientras editás y te dice qué se rompe primero, los conjuntos tienen estudios de movimiento, y los nuevos espacios de trabajo hacen superficies de forma libre y piezas dimensionadas desde la física. 0.8.1 es una versión chica de corrección.

## Nuevo

### Simulación

- **Actualizar mientras edito.** Marcá {{ui:Actualizar mientras edito}} en el bloque Resolver y las respuestas siguen tus cambios. Cambiá una cota, una carga o el material y aparece enseguida una respuesta rápida, hecha con elementos cuatro veces más grandes; cuando te detenés cerca de un segundo, la respuesta refinada propia del estudio reemplaza a la rápida. Los resultados dicen cuál estás viendo. En una viga en voladizo de acero, la respuesta rápida quedó dentro del 1 % en deflexión y cerca del 4 % en tensión respecto de la refinada. Ver [Revisar tensión y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Para un estudio estático o de pandeo, {{ui:¿Mba'e ojehasa primero?}} en el bloque **Romper** escala las cargas hasta que la pieza cede. Lista, de peor a mejor, el factor de carga hasta la primera fluencia (con un marcador rojo donde se concentra la tensión) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede tal como está cargada, y el panel Problemas muestra un error. Los factores salen de un estudio lineal, así que valen tanto como él. Ver [Revisar tensión y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal, donde el material sigue su recta hasta la tensión de fluencia y luego una pendiente más plana, con la deformación plástica graficada; y uno de contacto, donde piezas separadas se empujan entre sí (sin fricción) o quedan pegadas (unidas). Un paso de carga que no logra asentarse, o piezas que se hunden demasiado una en otra, aparecen en el panel Problemas. La fricción, el deslizamiento grande, las rotaciones grandes, las deflexiones grandes y la fatiga no se resuelven. Ver [Revisar tensión y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos deck para CalculiX.** {{ui:Exportar}} › {{ui:Deck de CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que instalás y ejecutás vos; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} lee su archivo de resultados de vuelta sobre la misma malla. PartCraft nunca inicia ese programa, y avisa si la pieza cambió desde que se guardó el deck.

### Conjuntos

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} mueve el valor de una unión a lo largo de un tiempo que indicás (velocidad constante, suavizada, senoidal, o ida y vuelta), ubica el conjunto en cada paso con sus uniones y lazos cerrados, e informa qué interfiere y qué tan cerca quedan las piezas. {{ui:Agregar un punto}} grafica la posición, la velocidad y la aceleración de un punto, el valor de la unión y la holgura en función del tiempo; {{ui:Guardar CSV}} y {{ui:Guardar gráfico}} los escriben. Después de {{ui:Ejecutar}}, el control Paso de la barra de ejecución mueve el conjunto a cualquier paso. La configuración del estudio se guarda en el archivo del conjunto. La velocidad y la aceleración salen de las posiciones registradas, así que usá más pasos si un pico agudo se lee bajo. Ver [Comprobar un conjunto por interferencias y movimiento](topic:check-assembly#a-motion-study).

### Superficies y piezas desde la física

- **Un espacio de trabajo Superficies.** Elegí {{ui:Superficies}} en la caja {{ui:Espacio de trabajo}} para curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Loft}}, {{ui:Barrido}}, {{ui:Match}} y {{ui:Zebra}}, con continuidad (G0, G1 o G2) medida sobre las superficies exactas, y un borde peor de lo que pediste se lista en Problemas con un arreglo de Match. {{ui:Fair}} mide las líneas de casco para hallar puntos de inflexión y saltos de curvatura, y reconstruye las que no son suaves dentro de tu tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian los elementos de la pieza. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniero.** Elegí {{ui:Ingeniero}} en el selector de espacios de trabajo, elegí un generador y hacé clic en {{ui:Nuevo}}: un script dimensiona una pieza según lo que debe hacer (calor para mover, caudales, presión, material, proceso de impresión) con fórmulas de libro de texto, la construye y luego devuelve los números que usó con sus fuentes, sus controles de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier computadora. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Ver [Piezas desde la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

### Bocetos, planos y fabricación

- **Un boceto desde una foto.** {{ui:Elementos}} › {{ui:Más}} › {{ui:Sketch foto-gui…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a lápiz, en líneas, arcos y círculos. Indicás una medida, revisás la vista previa y hacés el boceto. Ver [Bases de bocetos](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala y división para impresión.** {{ui:Exportar}} › {{ui:Escala impresión-pe (STL térã 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para compensar una contracción. {{ui:Exportar}} › {{ui:Dividir impresión-pe (zip piezas-gui)…}} corta una pieza demasiado grande para tu cama en piezas numeradas, unidas con clavijas, cuñas, colas de milano, agujeros de espiga o bolsillos para imanes. Ver [Imprimir en 3D](topic:print-3d).
- **Hojas anidadas a G-code.** {{ui:Exportar}} › {{ui:Hojas anidadas a G-code}} lee un DXF anidado y hace un programa por hoja a través del postprocesador que elijas: primero agujeros y recortes, luego los contornos. No planifica entradas, el orden de corte ni los bordes compartidos. Ver [Anidar piezas planas en hojas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Planos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja de tamaño A más chica que contiene las vistas, a la escala estándar más grande hasta 1:1. {{ui:Dimensionar agujeros}} pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Ver [Hacer un plano](topic:drawing-pdf).

### En todas las apps

- **Idiomas.** Las apps vienen en 54 idiomas. Los que no son inglés son borradores de máquina hasta que un hablante nativo los lea.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} elige Ajustar (como antes), 2 filas o 1 fila; una barra que no entra se desplaza hacia los costados. La cinta de Elementos de PartCraft muestra la herramienta más usada en grande y guarda las variantes detrás de un botón dividido.
- **Conectá tu IA.** Studio es el centro para conectar un asistente propio a las ocho apps, con permiso de solo lectura, de sugerencia o de edición por app. Un asistente conectado puede dimensionar una pieza a partir de una frase, como un soporte para una carga, mostrar su trabajo y cada control, y construirla; informa lo que no revisó (concentración de tensiones, fatiga, fluencia en plásticos). Ver [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Congelamiento del cursor en pantalla completa.** La selección al pasar el puntero ahora tiene límite de frecuencia. La causa es nuestra mejor lectura y no fue confirmada con la persona que lo reportó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras corren; antes eran solo en inglés. Esto todavía no se probó en todas las plataformas: avisanos si el idioma no cambia.

## Todavía no en esta versión

- Conectá tu IA no está terminado: la conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, tu propia clave API dentro de Studio y el paquete MCP publicado no están prometidos. Studio no tiene IA propia.
- Studio no tiene firma de código: Windows puede advertir, y macOS pide clic derecho y luego Abrir. Ver [Solución de problemas](topic:troubleshooting).
- Los apilados de tolerancias siguen siendo de una sola dirección: ver [Apilados de tolerancia](topic:tolerance-stackup).
- Lo demás figura en [Lo que todavía no está hecho](topic:not-built-yet).

Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
