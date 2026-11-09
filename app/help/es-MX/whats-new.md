---
title: Novedades en 0.8 y 0.8.1
summary: PartCraft 0.8 agrega análisis en vivo mientras edita, una comprobación de ¿Qué se rompe primero?, estudios de fluencia y de contacto con archivos de entrada para un solver externo, estudios de movimiento para ensamblajes, un espacio de trabajo de Superficies para superficies de forma libre, piezas dimensionadas a partir de la física en el espacio de trabajo de Ingeniería, croquis desde una foto, exportaciones para imprimir, hojas anidadas a código G y dibujos que acotan sus agujeros. 0.8.1 corrige un bloqueo del cursor en pantalla completa.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras edita, romperla, qué se rompe primero, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, alisar, casco, cebra, ingeniería, generador, cuerpo generado, croquis desde una foto, escalar para imprimir, dividir para imprimir, contracción, hojas anidadas, código g, dibujo, acotar agujeros, asistente, mcp, idiomas, filas de la barra de herramientas
from: 62e4dce2
---

Esto es lo que cambió en PartCraft 0.8 y 0.8.1, en comparación con la 0.7. La simulación responde mientras edita y le indica qué se rompe primero, los ensamblajes obtienen estudios de movimiento, y los nuevos espacios de trabajo crean superficies de forma libre y piezas dimensionadas a partir de la física. 0.8.1 es una versión pequeña de correcciones.

## Nuevo

### Simulación

- **Actualizar mientras edito.** Marque {{ui:Actualizar mientras edito}} en el bloque Resolver y las respuestas seguirán sus cambios. Cambie una cota, una carga o el material y aparece de inmediato una respuesta rápida, hecha con elementos cuatro veces más grandes; cuando se detiene alrededor de un segundo, la respuesta refinada propia del estudio reemplaza a la anterior. Los resultados indican cuál está viendo. En una ménsula en voladizo de acero, la respuesta rápida estuvo dentro del 1 % en deflexión y cerca del 4 % en esfuerzo respecto de la refinada. Vea [Revise esfuerzo y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Para un estudio estático o de pandeo, {{ui:¿Qué se rompe primero?}} en el bloque **Romperla** escala las cargas hasta que la pieza cede. Enumera, primero el peor, el factor de carga para la primera fluencia (con un marcador rojo donde el esfuerzo alcanza su pico) y el factor de carga para el pandeo. Un factor menor que 1 significa que la pieza ya cede con la carga aplicada, y Problemas muestra un error. Los factores provienen de un estudio lineal, así que valen lo que valga ese estudio. Vea [Revise esfuerzo y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia y contacto.** Dos tipos de estudio más: uno no lineal, en el que el material sigue su línea recta hasta el esfuerzo de fluencia y luego una pendiente más plana, con la deformación plástica graficada; y uno de contacto, en el que piezas separadas se empujan entre sí (sin fricción) o quedan adheridas (unidas). Un paso de carga que no logra asentarse, o piezas que se hunden demasiado unas en otras, aparecen en el panel Problemas. No se resuelven la fricción, el deslizamiento grande, las rotaciones grandes, las deflexiones grandes ni la fatiga. Vea [Revise esfuerzo y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Archivos para CalculiX.** {{ui:Exportar}} › {{ui:Archivo de entrada de CalculiX (.inp)}} guarda el estudio para CalculiX, un programa aparte que usted instala y ejecuta por su cuenta; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} lee de regreso su archivo de resultados sobre la misma malla. PartCraft nunca inicia ese programa, y avisa si la pieza cambió desde que se guardó el archivo de entrada.

### Ensamblajes

- **Estudios de movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} lleva el valor de una junta a lo largo de un tiempo que usted indique (velocidad constante, suavizada, senoidal, o ida y vuelta), coloca el ensamblaje en cada paso con sus juntas y lazos cerrados, e informa qué interfiere y qué tan cerca llegan las piezas. {{ui:Agregar un punto}} grafica contra el tiempo la posición, la velocidad y la aceleración de un punto, además del valor de la junta y la holgura; {{ui:Guardar CSV}} y {{ui:Guardar gráfica}} los escriben. Después de {{ui:Ejecutar}}, el control Paso a paso de la barra de ejecución mueve el ensamblaje a cualquier paso. La configuración del estudio se guarda en el archivo del ensamblaje. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que use más pasos si un pico agudo se lee bajo. Vea [Revise un ensamblaje en busca de interferencias y movimiento](topic:check-assembly#a-motion-study).

### Superficies y piezas a partir de la física

- **Un espacio de trabajo de Superficies.** Elija {{ui:Superficies}} en el cuadro {{ui:Espacio de trabajo}} para tener curvas y superficies NURBS junto a la pieza: {{ui:Curva}}, {{ui:Solevación}}, {{ui:Barrido}}, {{ui:Ajustar}} y {{ui:Cebra}}, con la continuidad (G0, G1 o G2) medida sobre las superficies exactas y una arista que sea peor de lo que pidió, listada en Problemas con una corrección de Ajustar. {{ui:Alisar}} mide las líneas de casco en busca de inflexiones y saltos de curvatura, y reconstruye las que no son fluidas dentro de su tolerancia. Las superficies se guardan en el archivo de la pieza y no cambian las operaciones de la pieza. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **El espacio de trabajo Ingeniería.** Elija {{ui:Ingeniería}} en el selector de espacios de trabajo, seleccione un generador y haga clic en {{ui:Nuevo}}: un script dimensiona una pieza según lo que debe hacer (calor a transferir, flujos, presión, material, proceso de impresión) con fórmulas de libro de texto, la construye y luego entrega los números que usó con sus fuentes, sus verificaciones de fabricación y archivos para herramientas de análisis. Las mismas entradas dan la misma pieza en cualquier computadora. El generador se conserva en la pieza, y abrir una pieza nunca ejecuta un script. Vea [Piezas a partir de la física: generadores](topic:engineer-generators) y [Escribir un generador](topic:write-a-generator).

### Croquis, dibujos y fabricación

- **Un croquis desde una foto.** {{ui:Operaciones}} › {{ui:Más}} › {{ui:Croquis desde una foto…}} traza una imagen de una pieza plana sobre un fondo liso (contorno y agujeros) o un dibujo a tinta, en líneas, arcos y círculos. Usted da una longitud, revisa la vista previa y genera el croquis. Vea [Nociones básicas de croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar y dividir para imprimir.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL o 3MF)…}} escala por eje sin cambiar la pieza, por ejemplo para compensar una contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de piezas)…}} corta una pieza demasiado grande para su cama de impresión en piezas numeradas unidas con clavijas, cuñas, colas de milano, agujeros para espigas o cavidades para imanes. Vea [Imprimir en 3D](topic:print-3d).
- **Hojas anidadas a código G.** {{ui:Exportar}} › {{ui:Láminas anidadas a código G}} lee un DXF anidado y genera un programa por hoja mediante el postprocesador que elija: primero agujeros y recortes, luego los contornos. No planifica las entradas de corte, el orden de corte ni las aristas compartidas. Vea [Anidar piezas planas en hojas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibujos que hacen más por sí mismos.** {{ui:Hoja}} › {{ui:Automático}} elige la hoja tamaño A más pequeña que contiene las vistas, a la escala estándar más grande hasta 1:1. {{ui:Acotar los agujeros}} pone una marca de centro en cada agujero, una llamada por tamaño y las posiciones desde la esquina inferior izquierda de la vista. Vea [Crear un dibujo](topic:drawing-pdf).

### En todas las aplicaciones

- **Idiomas.** Las aplicaciones están disponibles en 54 idiomas. Los que no son el inglés son borradores de máquina hasta que un hablante nativo los revise.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige Envolver (como antes), 2 filas o 1 fila; una barra que no cabe se desplaza a los lados. La cinta de Operaciones de PartCraft muestra en grande la herramienta más usada y oculta las variantes tras un botón dividido.
- **Conecte su IA.** Studio es el centro para conectar un asistente propio a las ocho aplicaciones, con permiso de solo lectura, sugerir o editar por aplicación. Un asistente conectado puede dimensionar una pieza a partir de una frase, como un soporte para una carga, mostrar su procedimiento y cada verificación, y construirla; informa lo que no verificó (concentración de esfuerzos, fatiga, termofluencia en plásticos). Vea [Use PartCraft con un asistente de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Bloqueo del cursor en pantalla completa.** La selección al pasar el cursor ahora está limitada en frecuencia. La causa es nuestra mejor lectura y no fue confirmada con la persona que la reportó.
- **Idioma durante la ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes, solo estaban en inglés. Esto todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

## Aún no incluido en esta versión

- Conectar su IA no está terminado: la conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos. Studio no tiene IA propia.
- Studio no tiene firma de código: Windows puede advertir, y macOS pide hacer clic derecho y luego Abrir. Vea [Solución de problemas](topic:troubleshooting).
- Las cadenas de tolerancias siguen siendo de una sola dirección: vea [Cadenas de tolerancias](topic:tolerance-stackup).
- Lo demás está listado en [Lo que aún no está construido](topic:not-built-yet).

Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
