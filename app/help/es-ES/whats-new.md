---
title: Novedades en 0.8 y 0.8.1
summary: PartCraft 0.8 añade análisis en vivo mientras edita, una comprobación de qué cede primero, estudios no lineales de fluencia y de contacto con archivos de entrada para un solucionador externo, estudios de movimiento para ensamblajes, un espacio de trabajo de Superficies para superficies de forma libre, piezas dimensionadas a partir de la física en el espacio de trabajo Ingeniería, croquis desde una foto, exportaciones para imprimir, chapas anidadas a código G y dibujos que acotan sus agujeros. 0.8.1 corrige una congelación del cursor a pantalla completa.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar al editar, romper, qué cede primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, alisar, casco, cebra, ingeniería, generador, cuerpo generado, croquis desde una foto, escalar para imprimir, dividir para imprimir, contracción, chapas anidadas, g-code, dibujo, acotar agujeros, asistente, mcp, idiomas, filas de la barra de herramientas
from: 62e4dce2
---

Esto es lo que ha cambiado en PartCraft 0.8 y 0.8.1, en comparación con la 0.7. La simulación responde mientras edita y le indica qué cede primero, los ensamblajes obtienen estudios de movimiento, y los nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. 0.8.1 es una versión pequeña de corrección.

## Novedades

### Simulación

- **Actualizar mientras edito.** Marque {{ui:Actualizar mientras edito}} en el bloque Resolver y las respuestas seguirán sus cambios. Cambie una cota, una carga o el material y aparece de inmediato una respuesta rápida, calculada con elementos cuatro veces mayores; cuando se detiene durante un segundo aproximadamente, la respuesta refinada del propio estudio sustituye a la anterior. Los resultados indican cuál está viendo. En un voladizo de acero, la respuesta rápida estuvo dentro de un 1 % en la flecha y en torno a un 4 % en la tensión respecto a la refinada. Consulte [Compruebe la tensión y la flecha](topic:simulation#update-while-you-edit-live).
- **Qué cede primero.** En un estudio estático o de pandeo, {{ui:¿Qué cede primero?}} en el bloque **Romper** escala las cargas hasta que la pieza cede. Enumera, del peor al mejor, el factor de carga hasta la primera fluencia (con un marcador rojo donde culmina la tensión) y el factor de carga hasta el pandeo. Un factor menor que 1 significa que la pieza ya cede con la carga aplicada, y Problemas muestra un error. Los factores proceden de un estudio lineal, así que su fiabilidad es la de este. Consulte [Compruebe la tensión y la flecha](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal, en el que el material sigue su recta hasta la tensión de fluencia y luego una pendiente más plana, con la deformación plástica representada; y uno de contacto, en el que piezas separadas se empujan entre sí (sin fricción) o permanecen adheridas (unidas). Un paso de carga que no logra estabilizarse, o piezas que se hunden demasiado unas en otras, aparecen en el panel Problemas. No se resuelven la fricción, el deslizamiento grande, los giros grandes, las deflexiones grandes ni la fatiga. Consulte [Compruebe la tensión y la flecha](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos de entrada para CalculiX.** {{ui:Exportar}} › {{ui:Archivo de entrada de CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta por su cuenta; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} lee de nuevo su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa y avisa si la pieza cambió desde que se guardó el archivo de entrada.

### Ensamblajes

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} mueve el valor de una junta a lo largo de un tiempo que usted indique (velocidad constante, suavizada, sinusoidal o de ida y vuelta), coloca el ensamblaje en cada paso con sus juntas y lazos cerrados, e informa de qué interferencias hay y a qué distancia llegan las piezas. {{ui:Añadir un punto}} representa en el tiempo la posición, la velocidad y la aceleración de un punto, el valor de la junta y la holgura; {{ui:Guardar CSV}} y {{ui:Guardar gráfica}} los escriben en archivo. Tras {{ui:Ejecutar}}, la barra de ejecución paso a paso lleva el ensamblaje a cualquier paso. Los ajustes del estudio se guardan en el archivo del ensamblaje. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que use más pasos si un pico agudo sale bajo. Consulte [Comprobar un ensamblaje por interferencias y movimiento](topic:check-assembly#a-motion-study).

### Superficies y piezas a partir de la física

- **Un espacio de trabajo de Superficies.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} para curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Solevación}}, {{ui:Barrido}}, {{ui:Igualar}} y {{ui:Cebra}}, con la continuidad (G0, G1 o G2) medida sobre las superficies exactas y un borde peor de lo que pidió, listado en Problemas con una corrección de Igualar. {{ui:Alisar}} mide las líneas de casco para buscar inflexiones y saltos de curvatura, y rehace las no alisadas dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian sus operaciones. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniería.** Elija {{ui:Ingeniería}} en el selector de espacios de trabajo, escoja un generador y pulse {{ui:Nuevo}}: un script dimensiona una pieza a partir de lo que debe hacer (calor para mover, caudales, presión, material, proceso de impresión) con fórmulas de manual, la construye y luego devuelve los valores que usó con sus fuentes, sus comprobaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier equipo. El generador se guarda en la pieza, y abrir una pieza nunca ejecuta un script. Consulte [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

### Croquis, dibujos y fabricación

- **Un croquis desde una foto.** {{ui:Operaciones}} › {{ui:Más}} › {{ui:Croquis desde una foto…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a tinta en líneas, arcos y círculos. Indique una longitud, revise la vista previa y cree el croquis. Consulte [Fundamentos del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala y división para imprimir.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL o 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para una holgura de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de piezas)…}} corta una pieza demasiado grande para la mesa de impresión en piezas numeradas unidas con clavijas, chavetas, colas de milano, agujeros para espigas o cajas para imanes. Consulte [Imprimir en 3D](topic:print-3d).
- **Chapas anidadas a código G.** {{ui:Exportar}} › {{ui:Chapas anidadas a código G}} lee un DXF anidado y genera un programa por chapa mediante el postprocesador que elija: primero los agujeros y recortes, luego los contornos. No planifica las entradas, el orden de corte ni los bordes compartidos. Consulte [Anidar piezas planas en chapas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja de tamaño A más pequeña que contiene las vistas a la mayor escala estándar hasta 1:1. {{ui:Acotar los agujeros}} pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Consulte [Hacer un dibujo](topic:drawing-pdf).

### En todas las aplicaciones

- **Idiomas.** Las aplicaciones están disponibles en 54 idiomas. Los que no son el inglés son borradores automáticos hasta que un hablante nativo los revise.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige Ajustar (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza lateralmente. La cinta de Operaciones de PartCraft muestra la herramienta más usada en grande y oculta las variantes tras un botón dividido.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar por aplicación. Un asistente conectado puede dimensionar una pieza a partir de una frase, como una escuadra para una carga, mostrar su trabajo y cada comprobación, y construirla; informa de lo que no comprobó (concentración de tensiones, fatiga, fluencia lenta en plásticos). Consulte [Usar PartCraft con un asistente de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Congelación del cursor a pantalla completa.** La selección al pasar el cursor tiene ahora un límite de frecuencia. La causa es nuestra mejor lectura y no se confirmó con la persona que la notificó.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Esto aún no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

## Todavía no incluido en esta versión

- Conectar su IA no está terminado: no se prometen la conexión en un clic dentro de Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio ni el paquete MCP publicado. Studio no tiene IA propia.
- Studio no está firmado digitalmente: Windows puede avisar, y macOS pide clic derecho y luego Abrir. Consulte [Solución de problemas](topic:troubleshooting).
- Las acumulaciones de tolerancias siguen siendo de una sola dirección: consulte [Acumulaciones de tolerancias](topic:tolerance-stackup).
- El resto está listado en [Lo que aún no está hecho](topic:not-built-yet).

Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
