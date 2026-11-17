---
title: Lo que todavía no está disponible
summary: Todo lo que esta versión de PartCraft aún no hace, desde los barridos con torsión hasta la visualización en pulgadas, las cotas de dibujo y los subensamblajes, con lo que puede hacer hoy en su lugar.
keywords: no disponible, pendiente, límites, limitaciones, hoja de ruta, núcleo exacto, redondeo, chaflán, vaciado, barrido, solevación, importación STEP, simulación, fabricación, barrido con torsión, tangencia en el extremo de solevación, redondeo de cara, ecuaciones, pulgadas, cotas de dibujo, subensamblajes, nube, tableta, teléfono
from: 9b868162
---

PartCraft está en una versión temprana. Esta página indica lo que todavía no hace, para que no lo busque, y lo que puede hacer hoy en su lugar. Nada de esto tiene fecha.

## Necesita un núcleo exacto

Esta versión construye todas las piezas con el núcleo de mallas (véase [El núcleo de mallas](topic:solid-kernels)). Todo lo siguiente necesita un núcleo de geometría exacto, que esta versión todavía no tiene. Las piezas guardadas con estas funciones se siguen abriendo: las funciones permanecen en el historial, marcadas como no construidas, y se conservan al guardar.

| Todavía no disponible | En su lugar, hoy |
|---|---|
| {{ui:Fillet}} y {{ui:Chamfer}} en aristas redondeadas; redondeos cuyo radio cambia a lo largo de la arista; redondeos que se enlazan suavemente donde se encuentran (el núcleo de mallas los corta a inglete) | {{ui:Fillet}} y {{ui:Chamfer}} funcionan en aristas rectas entre caras planas; redondee las otras esquinas en el croquis antes de extruir ({{ui:Fillet}} en un croquis, {{key:F}}) |
| {{ui:Shell}} sobre caras curvas; paredes de grosores distintos | Abrir caras planas; añadir material con extrusiones donde una pared deba ser más gruesa |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} sobre caras curvas; extruir hasta una cara, la siguiente cara o un vértice; extrusiones con conicidad | Extruir o girar, por pasos cuando haga falta; extruir a una profundidad que mida |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} y patrones planos | Extruir la chapa o el perfil del nervio |
| Superficies: terminar una {{ui:Form}} en la pieza, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | No disponible |
| Varios cuerpos: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, elementos que crean un cuerpo nuevo | Un solo sólido; los patrones y las simetrías son elementos de copia |
| Croquis, planos, ejes y puntos sobre caras que solo un núcleo exacto puede encontrar (una cara hecha por un redondeo, la pared de un agujero, una cara de un sólido importado) | Croquis en los planos base, planos de referencia y las caras planas de extrusiones y revoluciones |
| Un resultado de diseño generativo abierto como pieza o añadido a una (pasa a ser un sólido importado) | Descargue el resultado como STL o STEP |
| Editar las caras curvas de un archivo STEP abierto como superficies exactas; STEP exacto de caras de spline, barridas y de revolución de un archivo STEP; lados de spline; roscas modeladas; cuerpos STL / OBJ / 3MF y ensamblajes; STEP de otros modeladores de piezas | {{ui:Open}} lee STEP como triángulos y conserva las caras planas, cilindros, conos, esferas y toros del archivo para la exportación ([Abrir un archivo STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} escribe cada cara analítica exactamente y las mantiene como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); la macro para otro modelador de piezas sigue escribiendo lo de siempre |
| Arcos verdaderos en las vistas de dibujo | Las vistas y las vistas de sección se dibujan a partir de las facetas |
| Volúmenes, áreas y distancias exactas | {{ui:Measure}} da los números del sólido facetado, algo bajos en piezas redondas; un ajuste de **Curvas** más fino los acerca |

Algunas filas de las tablas siguientes sugieren una de estas funciones como solución alternativa a otra cosa. Esas sugerencias se aplicarán cuando vuelva el núcleo exacto.

## Funciones

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Redondeos de caras, redondeos de radio completo, redondeos con radios fijados en puntos a lo largo de una arista | {{ui:Fillet}} de radio constante o variable lineal; varios elementos de redondeo |
| Vaciados con espesores de pared distintos | Un solo espesor de {{ui:Shell}}; añada material con extrusiones donde una pared deba ser más gruesa |
| Ángulo de salida en caras de forma libre (spline) | {{ui:Draft}} funciona en caras planas, cilíndricas y cónicas |
| Barridos con torsión, barridos de pared fina y de superficie; tangencia en el extremo del elemento Solevación; una solevación con un solo carril guía; trayectorias de spline | {{ui:Sweep}} con orientación fija o una escala en el extremo; una solevación con dos o más carriles guía: véase [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft) |
| Nervios a partir de arcos o splines; nervios crecidos en cuadrado con el croquis (desde una vista superior); ángulo de salida en nervios; varios nervios a partir de un solo croquis | {{ui:Rib}} a partir de una cadena de líneas en el plano propio del nervio: véase [Nervios y escuadras](topic:rib) |
| «Hasta» una superficie curva, «hasta el siguiente» que se detiene en una cara curva | Hasta una cara plana o un plano de referencia |
| Agujeros con contrataladro, roscas de pulgada y de tubería, roscas cónicas, salidas de rosca y comienzos de rosca achaflanados | Cajera con una profundidad pequeña; roscas métricas ISO y trapeciales, cosméticas o modeladas: véase [Roscas en ejes y taladros, dibujadas o modeladas](topic:threads) |
| Extrusiones de elemento fino | Dibuje ambas paredes del perfil |
| Copias de patrón saltadas una a una, patrones de relleno | Use elementos separados; patrones a lo largo de una curva: {{ui:Path pattern}} |
| Copiar patrones, simetrías, redondeos, chaflanes, vaciados y sólidos importados | Copie el croquis o el elemento sobre el que están construidos, o haga un patrón con él |
| Tangencia exacta (G1) en los puntos extraordinarios de una forma; unir los parches de una forma en caras más grandes | Suba el Nivel de la forma: los parches aproximados se hacen más pequeños; véase [Formas libres con Forma](topic:form-surfaces) |
| Una forma formada por varias piezas cerradas separadas en un mismo elemento; puentes entre formas | Una pieza cerrada por elemento Forma; únalas con Unir |
| Elegir cuerpos de superficie en la vista (salvo los puntos de recorte y de parche); redondeos de superficies; anular el recorte; parches G2; superficies de Gordon tangentes a vecinas curvas (las tangentes a planos y caras planas sí están construidas) | Elíjalos por nombre en el panel del elemento; engrosar primero y luego redondear el sólido |
| Una lista de cuerpos en el historial; dejar cuerpos ocultos fuera de las exportaciones | Cambie el nombre y oculte cuerpos en la lista de cuerpos del panel de la pieza; elimine o suprima el elemento que creó un cuerpo para dejarlo fuera |
| Escala no uniforme que mantiene cilindros y conos analíticos; escala no uniforme de superficies desfasadas | {{ui:Scale body}} hace que las caras curvas pasen a B-splines cerradas (dentro de 0.0000004 mm); una escala uniforme sigue siendo exacta |
| Combinar cuerpos de superficie; sumas de Minkowski | {{ui:Stitch}} o {{ui:Thicken}} primero, luego {{ui:Combine}} |
| Análisis de tolerancias: cadenas que giran esquinas (lazos vectoriales 2D y 3D), sensibilidades calculadas a partir de la geometría, Monte Carlo con otras distribuciones, tolerancias de tamaño en cotas de croquis, tolerancia de bonificación por condición del material | {{ui:Stack-up}} en un ensamblaje: una dirección, peor caso y RSS, tolerancias escritas, a partir de la tolerancia general del cajetín o de los marcos GD&T: véase [Cadenas de tolerancias](topic:tolerance-stackup) |
| Anidado: orden de corte y entradas de corte, cortar los bordes compartidos una sola vez, piezas que deben mantenerse juntas; retales de rollos, existencias compartidas entre proyectos | {{ui:Nest flat parts on sheets…}} con separación, márgenes, giros y dirección de fibra: véase [Anidar piezas planas en láminas](topic:nest-flat-parts); las láminas sobrantes se conservan y se usan primero: véase [Conservar y reutilizar sobrantes](topic:nest-offcuts); planifique el corte en el software de su máquina de corte |
| Chapa: dobleces, escalones, pestañas a inglete y de contorno; pestañas en aristas curvas o en las caras de una brida base doblada; dobleces dibujados en croquis; cierres de esquina; herramientas de conformado; convertir un sólido en chapa; el patrón plano de una brida base doblada con cortes; tablas de doblado | {{ui:Base flange}} (una placa o un perfil doblado), {{ui:Edge flange}} en las aristas rectas de una placa con alivios de doblado, y el patrón plano con un factor K: véase [Chapa metálica](topic:sheet-metal) |
| Análisis de ángulo de salida en ensamblajes; localizar la línea de partición; análisis del espesor de pared | {{ui:Draft analysis}} en la pieza, en Diseño: véase [Comprobar el ángulo de salida para moldeo y fundición](topic:draft-analysis); abra cada pieza de un ensamblaje para comprobarla |

## Croquis

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Elipses, arcos tangentes, cónicas, splines con grado o pesos fijados (NURBS) | Splines (cúbicas), arcos y círculos con relaciones de Tangente |
| Un punto sobre una spline (una relación), relaciones de curvatura (G2) | Coloque un punto propio de la spline donde deba pasar |
| Copias de desfase de splines que siguen los cambios posteriores; desfases de cadenas con esquinas de spline agudas | Vuelva a desfasar tras el cambio; redondee antes la esquina |
| Copias de patrón que siguen enlazadas al original; patrones a lo largo de una curva | Vuelva a hacer el patrón tras un cambio |
| Proyectar aristas circulares de forma libre o inclinadas; geometría proyectada que sigue a la pieza | Proyecte aristas circulares rectas y paralelas, y luego acote |
| Cotas de referencia (conducidas) | Lea las medidas del panel o de los datos de la pieza |
| Relaciones de colinealidad | Paralelas con distancia 0 |
| Pegar en otro programa (el portapapeles del sistema) | Exporte DXF, STEP, STL o 3MF |
| Escribir arcos, coordenadas relativas o polares | Escriba líneas y círculos; dibuje arcos con la herramienta Arco |
| Seleccionar geometría sin puntero | Necesita un clic o un toque |

## Parámetros y unidades

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Configuraciones que cambian materiales; una tabla de diseño en CSV que desactiva elementos | Las configuraciones fijan parámetros y activan o desactivan elementos: véase [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` construye configuraciones guardadas por nombre, con los elementos desactivados incluidos: véase [Crear un paquete de variantes a partir de sus configuraciones](topic:variant-pack) |
| Ecuaciones en los números de los paneles de los elementos más nuevos (plano, barrido, ángulo de salida y similares) | Escríbalas en un script o con `partcraft set` ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Una pieza mostrada en pulgadas | Las medidas se muestran en milímetros; escriba `2in` en un cuadro numérico o en una expresión y se convierte en 50.8 |

## Archivos

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Editar los elementos propios de un sólido STEP importado (llega sin historial) | Añada o quite material con sus propios elementos |
| Leer colores, nombres, estructura de ensamblaje y PMI de STEP | No disponible |
| Exportación a glTF, OBJ, IGES, Parasolid; DWG de una pieza 3D (solo el paquete de variantes escribe un DWG: la hoja de dibujo) | STL o 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF u otros archivos propios de otros programas (los archivos `.3dm` se abren como un cuerpo: [Abrir un modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | Pida STEP, o una malla STL, OBJ o 3MF cerrada: [Abrir un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de ensamblaje (un árbol con nombres de piezas) en el STEP exportado | El STEP de ensamblaje es un compuesto de los sólidos colocados |
| Guardar en una carpeta de su elección sin la descarga del navegador | Active «preguntar dónde guardar» en la configuración de descargas del navegador |

## Dibujos

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Cotas más allá de las tres medidas generales (tamaños de agujeros, posiciones, tolerancias de medidas) | Anote el PDF, o exporte DXF y acótelo en un programa CAD 2D |
| Más de una sección o un detalle; vistas alineadas, interrumpidas o auxiliares | Una sección y un detalle por dibujo |
| Texto libre, notas y tablas en la hoja (aparte de los cajetines de título y de revisión) | La nota de acabado, o texto añadido en el PDF |
| Proyección del primer diedro, vistas móviles, hojas verticales | Tercer diedro, disposición automática, hojas apaisadas A4–A0 y ANSI A–E |
| Vista de sección en vivo: varios planos o una caja de sección a la vez, un contorno alrededor del corte, guardar la sección en el archivo | Un plano cada vez desde {{ui:Views}} › {{ui:Section view}}; véase [Mire dentro con una vista de sección](topic:section-view) |
| Dibujos de ensamblaje con más vistas, cotas o globos que pueda mover | Una vista isométrica (o explosionada) con globos automáticos y la lista de piezas |
| Copiar y pegar símbolos GD&T y de acabado | Coloque cada uno con Datum, Marco o Acabado |
| Manuales: archivos STEP en {{ui:From another file…}} de Illustrate, un modelo enviado directamente desde ModelCraft o BimCraft, imágenes con la calidad del trazado de rayos, 3D interactivo dentro de un PDF | Abra el STEP en Diseño y empiece el manual con {{ui:From the open part}}; guarde el modelo como glTF (.glb); imágenes PNG de la vista 3D; el archivo 3D interactivo: véase [Empezar un manual en Illustrate](topic:illustrate) |

## Ensamblajes

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Juntas de engranaje, de cremallera, de leva y de tornillo; una junta de rótula limitada a un cono; juntas en caras curvas o entre puntos | Juntas rígidas, de revolución, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura en caras planas, cada valor con sus propios límites: véase [Construir un ensamblaje](topic:build-assembly) |
| Pasos de explosión que giran piezas, y arrastrar piezas que colocan las juntas | Pasos de explosión rectos; quite una junta para mover una pieza a mano |
| Subensamblajes | Un solo nivel de piezas |
| Engranajes, levas, contacto | No disponible |

## Fabricación

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Desbaste 3D de caras curvas, mecanizado adaptativo 3D, mecanizado de restos; acabado de contorno por cotas, de lápiz, radial y en espiral; pasadas adaptativas escritas como arcos | Cara, cajera, adaptativo 2D, contorno, taladro y chaflán de 2,5 ejes: véase [Crear trayectorias y G-code](topic:manufacture); acabado Parallel y Scallop de todo el modelo: véase [Acabado 3D](topic:finish-3d) |
| Trayectorias de 4 y 5 ejes, torneado, palpado | Prepare un lado cada vez con el eje de herramienta en la pestaña Setup |
| Comprobaciones de colisión de portaherramientas y mango | Observe los avisos de longitud de estrías y compruébelo en el simulador de su control |
| Palpado, ciclos de vida de herramienta y de subprogramas; códigos de 4.º y 5.º eje y de torno en un postprocesador; cargar archivos de postprocesador de otros programas | Escriba o modifique un postprocesador en el formato propio de PartCraft: véase [Postprocesadores que puede editar](topic:post-processors) |
| G-code en pulgadas (G20) | Solo milímetros (G21) |

## Simulación y diseño generativo

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Estudios no lineales: fluencia, grandes deformaciones, contacto entre piezas, fatiga | Estático lineal y frecuencias naturales: véase [Compruebe tensión y deformación](topic:simulation); mantenga el coeficiente de seguridad bien por encima de 1 |
| Pandeo no lineal (imperfecciones, postpandeo, salto brusco) | Factores de carga de pandeo lineal con un margen amplio: véase [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiales dependientes de la temperatura, inercia en la tensión térmica (ondas de choque térmico) | Radiación al entorno, tensión térmica estacionaria o cuasiestática en el tiempo, propiedades constantes: véase [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Refinamiento automático para calor transitorio y estudios con carga térmica; hacer la malla más gruesa donde el error es pequeño; un objetivo sobre una magnitud local (la tensión máxima en un punto) | **Refinar automáticamente** para estudios estáticos, de pandeo, de frecuencias naturales y térmicos estacionarios, sobre el error de toda la pieza: véase [Compruebe tensión y deformación](topic:simulation); en otro caso, reduzca el tamaño del elemento |
| Cargas de rodamiento y de tornillo, fuerzas remotas, momentos, muelles, desplazamientos prescritos | Fuerzas y presiones en caras, gravedad; caras fijas y sin fricción |
| Simulación de ensamblajes; materiales que varían según la dirección (capas impresas, compuestos) | Una pieza, un material isótropo |
| Varios hilos de cálculo para estudios tetraédricos, transmisión de calor y diseño generativo; cualquier hilo en una página que no esté aislada de origen cruzado | Los estudios voxel, de pandeo, de tensión en el tiempo y de flujo laminar usan los hilos donde la página lo permite: véase [Ajustes de PartCraft](topic:settings) |
| Flujo turbulento con precisión de diseño (el modelo Spalart–Allmaras está incluido como experimental: fricción en tubería 30 a 34 % alta, reengancho tras escalón hacia atrás 21 a 39 % corto; previsto: celdas más finas junto a las paredes), calor en el flujo, flujo no estacionario (con precisión temporal), superficies libres, fluidos no newtonianos, piezas giratorias | Flujo laminar, estacionario e isotermo de un fluido newtoniano, o el modelo turbulento experimental para patrones cualitativos: véase [Simular el flujo de fluidos](topic:flow-simulation); el panel avisa cuando el número de Reynolds supera el régimen laminar |
| Límites de tensión y reglas de fabricación (voladizos, direcciones de fresado) en diseño generativo; varios materiales en una forma | La forma más rígida para un volumen; compruebe el resultado en Simulación: véase [Generar una forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido paramétrico editable (suave) | STL, STEP facetado, o una pieza con el resultado como sólido importado facetado |
| Diseño de máquinas eléctricas: un rotor girando en un estátor, par frente al ángulo, acero en saturación, imanes que pierden fuerza tras su codo, corrientes de Foucault y pérdidas de hierro y cobre; campos magnéticos en 3-D o en mallas curvas | Magnetostática lineal en 2-D sobre una malla en la biblioteca de análisis: bobinas, hierro, imanes permanentes sobre su recta de retroceso, entrehierros, inductancia y atracción: véase [Campos magnéticos en 2-D](topic:magnetic-fields-2d) |

## Scripts

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Ayuda al pasar el cursor, puntos de interrupción y paso a paso en el editor de scripts | Buscar, plegar y completar están disponibles (véase [Escribir y ejecutar scripts](topic:craftscript)); para el resto, su propio editor: {{ui:Save}} y {{ui:Open}} del grupo Script llevan scripts dentro y fuera; las funciones integradas se listan en [El lenguaje CraftScript](topic:craftscript-language) |
| Puntos de interrupción y ejecución paso a paso de un script | `disp` y `fprintf` por el camino; {{key:Mod+Enter}} ejecuta unas pocas líneas seleccionadas a la vez |
| Campos y gráficos que un script muestra dibujados en el espacio de trabajo de Diseño; scripts que cambian los parámetros de la pieza | Se muestran en el espacio de trabajo de Script; los scripts leen parámetros con `param` (véase [Escribir y ejecutar scripts](topic:craftscript)) y los cambian en la pestaña {{ui:Parameters}} |
| Imágenes y tablas junto a gráficos; editar un gráfico (zoom, límites de ejes) antes de guardarlo | Lado a lado muestra los gráficos; guarde un gráfico como PNG, SVG o CSV y termínelo en otro lugar |
| numpy y otros paquetes de Python; Python sin conexión; plegar Python en el editor; Pascal Script | La biblioteca estándar de Python, CraftScript y Lua: véase [Scripts en Python](topic:craftscript-python) |
| Pasar funciones de Lua a funciones integradas; llamar a una función de biblioteca desde Lua por un nombre construido mientras se ejecuta el script | Escriba el nombre de la función de biblioteca en el script (`cs.static_tet(…)`), o llámela desde un script de CraftScript |

## La aplicación

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Guardado en la nube, compartir e historial de versiones | No disponible todavía. Guarde los archivos en su ordenador y conserve las versiones con un nombre |
| PartCraft como aplicación instalada en iPad e iPhone | Use PartCraft en el navegador del dispositivo; en Android y en el escritorio también funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuales (clic derecho) | Barra de herramientas y panel derecho |
| Trabajar totalmente sin conexión desde un inicio limpio | Solo cuando la aplicación se ha guardado para uso sin conexión: véase [Trabajar sin conexión](common:offline) |

Indique lo que más le falte a través de la página de soporte del sitio: orienta lo que viene después.

## Engineer (generadores y campos)

| Todavía no disponible | En su lugar, hoy |
|---|---|
| Cabezales, puertos y accesorios en el intercambiador de calor generado; curvas de temperatura para la resistencia del material; pérdidas en las tes del colector | Los generadores construyen el núcleo y los tubos; añada los accesorios en Diseño; use las cifras de temperatura ambiente del material con un coeficiente de seguridad |
| Añadir generadores desde el directorio de complementos con un clic | {{ui:Open}} en el espacio de trabajo Engineer añade un generador desde un archivo |
| Un archivo de campo más fino que el tamaño de vóxel propio del generador; leer archivos `.vdb` | Guarde un campo más fino desde un script; `.vdb` se escribe, no se lee |
| Cálculos de códigos de recipientes a presión | Las fórmulas clásicas de pared fina y de pared gruesa, con el coeficiente de seguridad que elija; no es un margen de código |
| Generadores para las otras aplicaciones | Solo PartCraft en esta versión |
