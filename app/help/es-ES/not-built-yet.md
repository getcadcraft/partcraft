---
title: Lo que todavía no está implementado
summary: Todo lo que esta versión de PartCraft todavía no hace, desde barridos con torsión hasta la visualización en pulgadas, pasando por cotas de dibujo y subensamblajes, con lo que puede hacer hoy en su lugar.
keywords: no disponible, todavía no, límites, limitaciones, hoja de ruta, núcleo exacto, redondeo, chaflán, vaciado, barrido, solevación, importar STEP, simulación, fabricación, barrido con torsión, tangencia final en solevación, redondeo de cara, ecuaciones, pulgadas, cotas de dibujo, subensamblajes, nube, tableta, teléfono
from: 97b10a29
---

PartCraft es una versión temprana. Esta página enumera lo que todavía no hace, para que no lo busque, y lo que puede hacer hoy en su lugar. Nada de lo que aparece aquí tiene fecha.

## Necesita un núcleo exacto

Esta versión construye todas las piezas con el núcleo de malla (véase [El núcleo de malla](topic:solid-kernels)). Todo lo que sigue necesita un núcleo de geometría exacto, que esta versión todavía no tiene. Las piezas guardadas con estas funciones siguen abriéndose: las operaciones permanecen en el historial, marcadas como no implementadas, y se conservan al guardar.

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| {{ui:Redondeo}} y {{ui:Chaflán}} en aristas redondeadas; redondeos cuyo radio cambia a lo largo de la arista; redondeos enlazados suavemente donde se encuentran (el núcleo de malla los corta a inglete) | Redondeo y Chaflán funcionan en aristas rectas entre caras planas; redondee las demás esquinas en el croquis antes de extruir ({{ui:Redondeo}} en un croquis, {{key:F}}) |
| {{ui:Vaciado}} que abre caras curvas; paredes de distinto espesor | Abra caras planas; añada material con extrusiones donde una pared deba ser más gruesa |
| {{ui:Barrido}}, {{ui:Solevación}}, {{ui:Ángulo de salida}} sobre caras curvas; extruir hasta una cara, la siguiente cara o un vértice; extrusiones cónicas | Extruya o revolucione, en pasos si hace falta; extruya hasta una profundidad que usted mida |
| {{ui:Nervio}}, {{ui:Brida base}}, {{ui:Brida de arista}} y desarrollos planos | Extruya la chapa o el perfil del nervio |
| Superficies: acabar una {{ui:Forma}} dentro de la pieza, {{ui:Parche}}, {{ui:Superficie solevada}}, {{ui:Superficie de Gordon}}, {{ui:Coser}}, {{ui:Engrosar}}, {{ui:Superficie desfasada}}, {{ui:Alargar superficie}}, {{ui:Recortar superficie}} | No disponible |
| Varios cuerpos: {{ui:Combinar}}, {{ui:Mover cuerpo}}, {{ui:Escalar cuerpo}}, {{ui:Matriz por trayecto}}, operaciones que crean un cuerpo nuevo | Un solo sólido; matrices y simetrías como operaciones de copia |
| Croquis, planos, ejes y puntos sobre caras que solo un núcleo exacto puede encontrar (una cara hecha por un redondeo, la pared de un agujero, una cara de un sólido importado) | Croquis sobre planos base, planos de referencia y las caras planas de extrusiones y revoluciones |
| Un resultado de diseño generativo abierto como pieza o añadido a ella (pasa a ser un sólido importado) | Descargue el resultado como STL o STEP |
| Editar las caras curvas de un archivo STEP abierto como superficies exactas; STEP exacto de caras de spline, barridas y revolucionadas desde un archivo STEP, caras laterales de spline, roscas modeladas, cuerpos y ensamblajes STL / OBJ / 3MF; STEP para otros modeladores de piezas | {{ui:Abrir}} lee STEP como triángulos y conserva las caras planas, cilindros, conos, esferas y toros del archivo para la exportación ([Abrir un archivo STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe exactamente cada cara analítica y mantiene esas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); la macro para otro modelador de piezas sigue escribiendo el archivo |
| Arcos verdaderos en las vistas de dibujo | Las vistas y las vistas de sección se dibujan a partir de las facetas |
| Volúmenes, áreas y distancias exactas | {{ui:Medir}} da los valores del sólido facetado, algo bajos en piezas redondas; un ajuste más fino de **Curvas** los acerca |

Algunas filas de las tablas siguientes sugieren una de estas funciones como alternativa a otra cosa. Esas sugerencias se aplican cuando vuelva un núcleo exacto.

## Operaciones

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Redondeos de cara, redondeos de semicírculo completo, redondeos con radios fijados en puntos a lo largo de una arista | {{ui:Redondeo}} de radio constante o variable lineal; varias operaciones de redondeo |
| Vaciados con paredes de distinto espesor | Un solo espesor de {{ui:Vaciado}}; añada material con extrusiones donde una pared deba ser más gruesa |
| Ángulo de salida en caras de forma libre (spline) | {{ui:Ángulo de salida}} funciona en caras planas, cilíndricas y cónicas |
| Barridos con torsión, barridos de pared fina y de superficie; tangencia final en la operación de solevación; una solevación con un solo carril guía; trayectorias de spline | {{ui:Barrido}} con orientación fija o con escala final; una solevación con dos o más carriles guía: véase [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft) |
| Nervios a partir de arcos o splines; nervios que crecen en escuadra con el croquis (desde una vista superior); ángulo de salida en nervios; varios nervios a partir de un mismo croquis | {{ui:Nervio}} a partir de una cadena de líneas en el propio plano del nervio: véase [Nervios y escuadras](topic:rib) |
| «Hasta» una superficie curva, «hasta la siguiente» que se detiene en una cara curva | Hasta una cara plana o un plano de referencia |
| Agujeros contrataladrados, roscas de pulgada y de tubería, roscas cónicas, salidas de rosca y entradas de rosca achaflanadas | Avellanado con poca profundidad; roscas métricas ISO y trapeciales, cosméticas o modeladas: véase [Roscas en ejes y agujeros, dibujadas o modeladas](topic:threads) |
| Extrusiones de elementos delgados | Dibuje ambas paredes del perfil |
| Copias de matriz omitidas una a una, matrices de relleno | Use operaciones separadas; matrices a lo largo de una curva: {{ui:Matriz por trayecto}} |
| Copia de matrices, simetrías, redondeos, chaflanes, vaciados y sólidos importados | Copie el croquis o la operación sobre la que están construidos, o haga una matriz con ellos |
| Tangencia exacta (G1) en los puntos singulares de una forma; unir los parches de una forma en caras mayores | Suba el **Nivel** de la forma: los parches aproximados se hacen más pequeños; véase [Formas libres con Forma](topic:form-surfaces) |
| Una forma compuesta de varias piezas cerradas separadas en una misma operación; puentes entre formas | Una pieza cerrada por operación Forma; únalas con {{ui:Unir}} |
| Seleccionar cuerpos de superficie en la vista (salvo los puntos de recorte y de parche); redondeos de superficie; anular el recorte; parches G2; superficies de Gordon tangentes a vecinas curvas (la tangencia a planos y caras planas sí está implementada) | Elíjalos por nombre en el panel de la operación; dé espesor primero y después redondee el sólido |
| Una lista de cuerpos en el historial; excluir los cuerpos ocultos de las exportaciones | Renombre y oculte cuerpos en la lista de cuerpos del panel de la pieza; elimine o suprima la operación que creó un cuerpo para dejarlo fuera |
| Un escalado no uniforme que mantenga los cilindros y conos analíticos; escalado no uniforme de superficies desfasadas | {{ui:Escalar cuerpo}} hace que las caras curvas sean B-splines cerradas (dentro de 0.0000004 mm); un escalado uniforme sigue siendo exacto |
| Combinar cuerpos de superficie; sumas de Minkowski | Primero {{ui:Coser}} o {{ui:Engrosar}}, después {{ui:Combinar}} |
| Análisis de tolerancias: cadenas de tolerancias que giran esquinas (lazos vectoriales 2D y 3D), sensibilidades calculadas a partir de la geometría, Monte Carlo con otras distribuciones, tolerancias de tamaño en cotas de croquis, tolerancia adicional por condición del material | {{ui:Cadena de tolerancias}} en un ensamblaje: una dirección, caso peor y RSS, tolerancias escritas a mano, de la tolerancia general del cajetín o de los marcos GD&T: véase [Cadenas de tolerancias](topic:tolerance-stackup) |
| Anidado: orden de corte y entradas de corte, cortar las aristas compartidas una sola vez, piezas que deben mantenerse juntas; retales de rollos, material compartido entre proyectos | {{ui:Anidar piezas planas en láminas…}} con separación, márgenes, giros y dirección de fibra: véase [Anidar piezas planas en láminas](topic:nest-flat-parts); las chapas sobrantes se guardan y se usan primero: véase [Guardar y reutilizar recortes](topic:nest-offcuts); planifique el corte en el software de su cortadora |
| Chapa: dobladillos, escalones, bridas a inglete y de contorno; bridas en aristas curvas o en las caras de una brida base doblada; pliegues dibujados en croquis; cierres de esquina; herramientas de conformado; conversión de un sólido a chapa; el desarrollo plano de una brida base doblada con cortes; tablas de plegado | {{ui:Brida base}} (una chapa o un perfil doblado), {{ui:Brida de arista}} en las aristas rectas de una chapa con alivios de pliegue, y el desarrollo plano con factor K: véase [Chapa](topic:sheet-metal) |
| Análisis de ángulo de salida en ensamblajes; búsqueda de la línea de partición; análisis del espesor de pared | {{ui:Análisis de ángulo de salida}} sobre la pieza en Diseño: véase [Comprobar el ángulo de salida para moldeo y fundición](topic:draft-analysis); abra cada pieza de un ensamblaje para comprobarla |

## Croquis

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Elipses, arcos tangentes, cónicas, splines con grado o pesos fijados (NURBS) | Splines (cúbicas), arcos y círculos con relaciones de tangencia |
| Un punto sobre una spline (una relación), relaciones de curvatura (G2) | Coloque el punto propio de la spline donde deba pasar |
| Copias desfasadas de splines que siguen cambios posteriores; desfases de cadenas con esquinas agudas de spline | Vuelva a desfasar después del cambio; redondee antes la esquina |
| Copias de matriz que siguen vinculadas al original; matrices a lo largo de una curva | Vuelva a crear la matriz tras un cambio |
| Proyectar aristas circulares de forma libre o inclinadas; geometría proyectada que sigue a la pieza | Proyecte aristas circulares rectas y paralelas, y después acótelas |
| Cotas conducidas (de referencia) | Lea las medidas en el panel o en los datos de la pieza |
| Relaciones colineales | Paralelo con una distancia de 0 |
| Pegar en otro programa (el portapapeles del sistema) | Exporte DXF, STEP, STL o 3MF |
| Escribir arcos, coordenadas relativas o polares | Escriba líneas y círculos; dibuje arcos con la herramienta {{ui:Arco}} |
| Seleccionar geometría sin puntero | Necesita un clic o un toque |

## Parámetros y unidades

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Configuraciones que cambian materiales; una tabla de diseño CSV que desactiva operaciones | Las configuraciones fijan parámetros y activan o desactivan operaciones: véase [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` crea configuraciones guardadas por nombre, incluidas las operaciones desactivadas: véase [Crear un paquete de variantes a partir de sus configuraciones](topic:variant-pack) |
| Ecuaciones en los números de los paneles propios de las operaciones más nuevas (plano, barrido, ángulo de salida y similares) | Escríbalas en un script o con `partcraft set` ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Una pieza mostrada en pulgadas | Las medidas se muestran en milímetros; escriba `2in` en un campo numérico o en una expresión y se convierte en 50.8 |

## Archivos

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Editar las operaciones propias de un sólido STEP importado (llega sin historial) | Añada o quite material con sus propias operaciones |
| Leer colores, nombres, estructura de ensamblaje y PMI desde STEP | No disponible |
| Exportación a glTF, OBJ, IGES, Parasolid; DWG de una pieza 3D (solo el paquete de variantes escribe un DWG: la hoja de dibujo) | STL o 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF u otros archivos propios de programas (los archivos `.3dm` se abren como un cuerpo: [Abrir un modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | Pida STEP, o una malla STL, OBJ o 3MF cerrada: [Abrir un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura del ensamblaje (un árbol con los nombres de las piezas) en STEP exportado | El STEP de ensamblaje es un compuesto de los sólidos colocados |
| Guardar en una carpeta elegida sin la descarga del navegador | Active «preguntar dónde guardar» en la configuración de descargas del navegador |

## Dibujos

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Cotas más allá de las tres dimensiones generales (medidas de agujeros, posiciones, tolerancias de medidas) | Anote el PDF, o exporte DXF y acótelo en un programa de CAD 2D |
| Más de una sección o detalle; vistas alineadas, parciales y auxiliares | Una sección y un detalle por dibujo |
| Texto libre, notas y tablas en la hoja (salvo los cajetines de título y de revisión) | La nota de acabado, o texto añadido en el PDF |
| Proyección del primer diedro, vistas móviles, hojas verticales | Tercer diedro, disposición automática, hojas apaisadas A4–A0 y ANSI A–E |
| Vista de sección en vivo: varios planos o una caja de sección a la vez, un contorno alrededor del corte, guardar la sección en el archivo | Un plano cada vez desde {{ui:Vistas}} › {{ui:Vista de sección}}; véase [Ver el interior con una vista de sección](topic:section-view) |
| Planos de ensamblaje con más vistas, cotas o globos que pueda mover | Una vista isométrica (o despiezada) con globos automáticos y la lista de piezas |
| Copiar y pegar símbolos GD&T y de acabado | Coloque cada uno con Referencia, Marco o Acabado |
| Manuales: archivos STEP en {{ui:Desde otro archivo…}} de Illustrate, un modelo entregado directamente desde ModelCraft o BimCraft, imágenes con la calidad del trazador de trayectorias, 3D interactivo dentro de un PDF | Abra el STEP en Diseño y empiece el manual con {{ui:Desde la pieza abierta}}; guarde el modelo como glTF (.glb); imágenes PNG de la vista 3D; el archivo 3D interactivo: véase [Iniciar un manual en Illustrate](topic:illustrate) |

## Ensamblajes

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Uniones de engranaje, cremallera, leva y tornillo; una rótula limitada a un cono; uniones en caras curvas o entre puntos | Uniones rígidas, de revolución, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura sobre caras planas, cada valor con sus propios límites: véase [Crear un ensamblaje](topic:build-assembly) |
| Pasos de despiece que giran piezas, y arrastrar piezas que colocan las uniones | Pasos de despiece rectos; quite una unión para mover una pieza a mano |
| Subensamblajes | Un solo nivel de piezas |
| Engranajes, levas, contacto | No disponible |

## Fabricación

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Desbaste adaptativo 3D y desbaste por desfase en 3D; acabado a z constante, con lápiz, radial y en espiral; pasadas adaptativas escritas como arcos | Desbaste 3D en filas rectas y mecanizado de restos: véase [Desbaste 3D y mecanizado de restos](topic:rough-3d); acabado Paralela y Festón: véase [Acabado 3D](topic:finish-3d); cara, cajera, adaptativo 2D, contorno, taladrado y chaflán de 2.5 ejes: véase [Generar trayectorias y código G](topic:manufacture) |
| Corte de flanco (swarf), trayectorias de desbaste de líneas de flujo y multieje, códigos de plano de trabajo inclinado (G68.2), comprobaciones de colisión del portaherramientas y de la máquina; simulación de cortes de 5 ejes y rotativos | Herramienta inclinada en cualquier operación, acabado de 5 ejes con fresa de punta esférica y acabado rotativo de cuarto eje: véase [Mecanizado de 4 y 5 ejes](topic:multi-axis) |
| Mandrinado y roscas interiores en torno, ciclos G71/G76, arcos en trayectorias de torneado, herramientas motorizadas, un contrahusillo | Torneado exterior: refrentar, desbastar, acabar, ranurar, tronzar, roscar, taladrar en centro: véase [Torneado en torno](topic:turning) |
| Palpado de un ángulo o una esquina, un preajustador de herramientas, medir una medida frente a una tolerancia | Palpado de una cara, un lateral, un agujero o un resalto para fijar el desfase de origen: véase [Palpado](topic:probing) |
| Comprobaciones de colisión del portaherramientas y del vástago | Vigile los avisos de longitud de estría y compruebe en el simulador de su control |
| Vida útil de la herramienta y ciclos de subprograma en un posprocesador; carga de archivos de posprocesador de otros programas | Escriba o cambie un posprocesador en el formato propio de PartCraft: véase [Posprocesadores que puede editar](topic:post-processors) |
| Código G en pulgadas (G20) | Solo milímetros (G21) |

## Simulación y diseño generativo

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Estudios no lineales: plastificación, grandes deformaciones, contacto entre piezas, fatiga | Estático lineal y frecuencias naturales: véase [Comprobar tensión y deformación](topic:simulation); mantenga el coeficiente de seguridad bien por encima de 1 |
| Pandeo no lineal (imperfecciones, postpandeo, salto de estabilidad) | Factores de carga de pandeo lineal con un margen amplio: véase [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiales dependientes de la temperatura, inercia en la tensión térmica (ondas de choque térmico) | Radiación al entorno, tensión térmica estacionaria o cuasiestática en el tiempo, propiedades constantes: véase [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Refinado automático para calor transitorio y estudios con carga térmica; hacer la malla más gruesa donde el error es pequeño; un objetivo sobre una magnitud local (la tensión máxima en un punto) | **Refinar automáticamente** para estudios estáticos, de pandeo, de frecuencias naturales y térmicos estacionarios, sobre el error de toda la pieza: véase [Comprobar tensión y deformación](topic:simulation); de lo contrario, reduzca el tamaño del elemento |
| Cargas de rodamientos y tornillos, fuerzas remotas, momentos, resortes, desplazamientos impuestos | Fuerzas y presiones en caras, gravedad; caras fijas y sin fricción |
| Simulación de ensamblajes; materiales que varían según la dirección (capas impresas, compuestos) | Una pieza, un material isótropo |
| Varios hilos de cálculo para estudios tetraédricos, transmisión de calor y diseño generativo; cualquier hilo en una página que no esté aislada de orígenes cruzados | Los estudios voxel, de pandeo, de tensión en el tiempo y de flujo laminar usan los hilos donde lo permita la página: véase [Configuración de PartCraft](topic:settings) |
| Flujo turbulento con precisión de diseño (el modelo Spalart–Allmaras está incluido como experimental: fricción en tubería un 30 a 34 % alta, reatamiento tras escalón hacia atrás un 21 a 39 % corto; previsto: celdas más finas cerca de las paredes), calor en el flujo, flujo no estacionario (con precisión temporal), superficies libres, fluidos no newtonianos, piezas en rotación | Flujo laminar, estacionario e isotermo de un fluido newtoniano, o el modelo turbulento experimental para patrones cualitativos: véase [Simular el flujo de fluidos](topic:flow-simulation); el panel avisa cuando el número de Reynolds supera el régimen laminar |
| Límites de tensión y reglas de fabricación (voladizos, direcciones de fresado) en el diseño generativo; varios materiales en una forma | La forma más rígida para un volumen; compruebe el resultado en Simulación: véase [Generar una forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido editable (suave, paramétrico) | STL, STEP facetado o una pieza con el resultado como sólido importado facetado |
| Diseño de máquinas eléctricas: un rotor girando en un estator, par frente al ángulo, acero en saturación, imanes que pierden fuerza más allá de su codo, corrientes parásitas y pérdidas en hierro y cobre; campos magnéticos en 3D o sobre mallas curvas | Magnetostática 2D lineal sobre una malla en la biblioteca de análisis: bobinas, hierro, imanes permanentes sobre su recta de desmagnetización, entrehierros, inductancia y fuerza de atracción: véase [Campos magnéticos en 2D](topic:magnetic-fields-2d) |

## Scripts

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Ayuda al pasar el ratón, puntos de interrupción y paso a paso en el editor de scripts | Buscar, plegar y completar ya están disponibles (véase [Escribir y ejecutar scripts](topic:craftscript)); para el resto, su propio editor: {{ui:Guardar}} y {{ui:Abrir}} del grupo Script mueven los scripts hacia dentro y hacia fuera; las funciones integradas se enumeran en [El lenguaje CraftScript](topic:craftscript-language) |
| Puntos de interrupción y paso a paso por un script | `disp` y `fprintf` por el camino; {{key:Mod+Enter}} ejecuta unas pocas líneas seleccionadas cada vez |
| Campos y gráficas que muestra un script y se dibujan en el espacio de trabajo Diseño; scripts que cambian los parámetros de la pieza | Se muestran en el espacio de trabajo Script; los scripts leen parámetros con `param` (véase [Escribir y ejecutar scripts](topic:craftscript)), y los cambian en la pestaña {{ui:Parámetros}} |
| Imágenes y tablas junto a gráficas; editar una gráfica (zoom, límites de ejes) antes de guardarla | Lado a lado muestra las gráficas; guarde una gráfica como PNG, SVG o CSV y termínela en otro programa |
| numpy y otros paquetes de Python; Python sin conexión; plegado de Python en el editor; Pascal Script | La biblioteca estándar de Python, CraftScript y Lua: véase [Scripts en Python](topic:craftscript-python) |
| Pasar funciones de Lua a funciones integradas; llamar a una función de biblioteca desde Lua por un nombre construido mientras se ejecuta el script | Escriba el nombre de la función de biblioteca en el script (`cs.static_tet(…)`), o llámela desde un script de CraftScript |

## La aplicación

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Guardado en la nube, compartir e historial de versiones | No disponible todavía. Guarde los archivos en su ordenador y mantenga las versiones con nombre |
| PartCraft como aplicación instalada en iPad y iPhone | Use PartCraft en el navegador del dispositivo; en Android y en el escritorio también funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuales (clic derecho) | Barra de herramientas y panel derecho |
| Trabajar totalmente sin conexión desde un inicio limpio | Solo cuando la aplicación se ha guardado para uso sin conexión: véase [Trabajar sin conexión](common:offline) |

Comunique lo que más echa en falta a través de la página de soporte del sitio: determina lo que viene después.

## Engineer (generadores y campos)

| No implementado todavía | Qué hacer hoy en su lugar |
|---|---|
| Cabezales, bocas y accesorios en el intercambiador de calor generado; curvas de temperatura para la resistencia del material; pérdidas en té en el colector | Los generadores construyen el núcleo y los tubos; añada los accesorios en Diseño; use las cifras del material a temperatura ambiente con un coeficiente de seguridad |
| Añadir generadores desde el directorio de complementos con un clic | {{ui:Abrir}} en el espacio de trabajo Engineer añade un generador desde un archivo |
| Un archivo de campo más fino que el tamaño de vóxel propio del generador; leer archivos `.vdb` | Guarde un campo más fino desde un script; `.vdb` solo se escribe, no se lee |
| Cálculos según códigos de recipientes a presión | Las fórmulas de pared fina y de pared gruesa de los libros de texto, con el coeficiente de seguridad que elija; no es un margen de código |
| Generadores para las otras aplicaciones | Solo PartCraft en esta versión |
