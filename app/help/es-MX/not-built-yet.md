---
title: Lo que aún no está construido
summary: Todo lo que esta versión de PartCraft todavía no hace, desde barridos con torsión hasta visualización en pulgadas, cotas de dibujo y subensamblajes, con lo que puede hacer hoy en su lugar.
keywords: faltante, aún no, límites, limitaciones, hoja de ruta, núcleo exacto, redondeo, chaflán, vaciado, barrido, solevación, importar STEP, simulación, fabricación, barrido con torsión, tangencia final de solevación, redondeo de cara, ecuaciones, pulgadas, cotas de dibujo, subensamblajes, nube, tableta, teléfono
from: 97b10a29
---

PartCraft es una versión temprana. Esta página enumera lo que todavía no hace, para que no lo busque, y lo que puede hacer hoy en su lugar. Nada de lo que aparece aquí tiene fecha.

## Requiere un núcleo exacto

Esta versión construye cada pieza con el núcleo de malla (vea [El núcleo de malla](topic:solid-kernels)). Todo lo que sigue necesita un núcleo de geometría exacta, que esta versión todavía no tiene. Las piezas guardadas con estas operaciones siguen abriéndose: las operaciones se conservan en el historial, marcadas como no construidas, y se mantienen al guardar.

| No construido aún | En su lugar, hoy |
|---|---|
| {{ui:Redondeo}} y {{ui:Chaflán}} en aristas redondas; redondeos cuyo radio cambia a lo largo de la arista; redondeos que se unen suavemente donde se encuentran (el núcleo de malla los corta a inglete) | Redondeo y Chaflán funcionan en aristas rectas entre caras planas; redondee las otras esquinas en el croquis antes de extruir ({{ui:Redondeo}} en un croquis, {{key:F}}) |
| {{ui:Vaciado}} que abre caras curvas; paredes de distinto espesor | Abra caras planas; agregue material con extrusiones donde una pared deba ser más gruesa |
| {{ui:Barrido}}, {{ui:Solevación}}, {{ui:Ángulo de salida}} en caras curvas; extruir hasta una cara, la siguiente cara o un vértice; extrusiones cónicas | Extruya o revolucione, por pasos donde haga falta; extruya a una profundidad que usted mida |
| {{ui:Nervio}}, {{ui:Brida base}}, {{ui:Brida de arista}} y desarrollos planos | Extruya la placa o el perfil del nervio |
| Superficies: terminar una {{ui:Forma}} dentro de la pieza, {{ui:Parche}}, {{ui:Superficie solevada}}, {{ui:Superficie de Gordon}}, {{ui:Coser}}, {{ui:Engrosar}}, {{ui:Superficie desfasada}}, {{ui:Alargar superficie}}, {{ui:Recortar superficie}} | No disponible |
| Varios cuerpos: {{ui:Combinar}}, {{ui:Mover cuerpo}}, {{ui:Escalar cuerpo}}, {{ui:Matriz por trayecto}}, operaciones que crean un cuerpo nuevo | Un solo sólido; matrices y copias por simetría de operaciones |
| Croquis, planos, ejes y puntos en caras que solo un núcleo exacto puede encontrar (una cara hecha por un redondeo, la pared de un agujero, una cara de un sólido importado) | Haga croquis en planos base, planos de referencia y en las caras planas de extrusiones y revoluciones |
| Un resultado de diseño generativo abierto como pieza o agregado a una (se convierte en un sólido importado) | Descargue el resultado como STL o STEP |
| Editar como superficies exactas las caras curvas de un archivo STEP abierto; STEP exacto de caras spline, barridas y revolucionadas de un archivo STEP, lados de spline, roscas modeladas, cuerpos STL / OBJ / 3MF y ensamblajes; STEP para otros modeladores de piezas | {{ui:Abrir}} lee STEP como triángulos y conserva para la exportación las caras planas, cilindros, conos, esferas y toros del archivo ([Abrir un archivo STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe exactamente cada cara analítica y mantiene estas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); la macro para otro modelador de piezas todavía escribe |
| Arcos verdaderos en vistas de dibujo | Las vistas y las vistas de sección se dibujan a partir de las facetas |
| Volúmenes, áreas y distancias exactos | {{ui:Medir}} da los valores del sólido facetado, algo bajos en piezas redondas; un ajuste más fino de **Curvas** los acerca más |

Algunas filas de las tablas siguientes sugieren una de estas operaciones como alternativa a otra cosa. Esas sugerencias se aplican cuando regrese un núcleo exacto.

## Operaciones

| No construido aún | En su lugar, hoy |
|---|---|
| Redondeos de cara, redondeos de semicírculo completo, redondeos con radios fijados en puntos a lo largo de una arista | {{ui:Redondeo}} constante o de radio variable lineal; varias operaciones de redondeo |
| Vaciados con espesores de pared distintos | Un solo espesor de {{ui:Vaciado}}; agregue material con extrusiones donde una pared deba ser más gruesa |
| Ángulo de salida en caras de forma libre (spline) | {{ui:Ángulo de salida}} funciona en caras planas, cilíndricas y cónicas |
| Barridos con torsión, barridos de pared delgada y de superficie; tangencia final en la operación Solevación; una solevación con un riel guía; trayectorias spline | {{ui:Barrido}} con orientación fija o una escala final; una solevación con dos o más rieles guía: vea [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft) |
| Nervios a partir de arcos o splines; nervios crecidos en escuadra con el croquis (desde una vista superior); ángulo de salida en nervios; varios nervios de un solo croquis | {{ui:Nervio}} a partir de una cadena de líneas en el plano propio del nervio: vea [Nervios y escuadras](topic:rib) |
| "Hasta" una superficie curva, "hasta la siguiente" que se detiene en una cara curva | Hasta una cara plana o un plano de referencia |
| Agujeros de contrabarrenado, roscas en pulgadas y de tubería, roscas cónicas, salidas de rosca e inicios de rosca achaflanados | Contrabarrenado de poca profundidad; roscas métricas ISO y trapeciales, cosméticas o modeladas: vea [Roscas en ejes y barrenos, dibujadas o modeladas](topic:threads) |
| Extrusiones de operación delgada | Dibuje ambas paredes del perfil |
| Copias de matriz omitidas una por una, matrices de relleno | Use operaciones separadas; matrices a lo largo de una curva: {{ui:Matriz por trayecto}} |
| Copiar matrices, simetrías, redondeos, chaflanes, vaciados y sólidos importados | Copie el croquis o la operación en que se basan, o haga una matriz de ella |
| Tangencia exacta (G1) en los puntos extraordinarios de una forma; unir los parches de una forma en caras más grandes | Suba el Nivel de la forma: los parches aproximados se hacen más pequeños; vea [Formas de forma libre con Forma](topic:form-surfaces) |
| Una forma hecha de varias piezas cerradas separadas en una sola operación; puentes entre formas | Una pieza cerrada por operación Forma; únalas con Unir |
| Seleccionar cuerpos de superficie en la vista (salvo puntos de recorte y de parche); redondeos de superficie; quitar recorte; parches G2; superficies de Gordon tangentes a vecinas curvas (la tangencia a planos y caras planas sí está construida) | Elíjalos por nombre en el panel de la operación; dé espesor primero y luego redondee el sólido |
| Una lista de cuerpos en el historial; dejar fuera de las exportaciones los cuerpos ocultos | Renombre y oculte cuerpos en la lista de cuerpos del panel de la pieza; elimine o suprima la operación que creó un cuerpo para dejarlo fuera |
| Una escala no uniforme que mantiene analíticos los cilindros y conos; escala no uniforme de superficies desfasadas | {{ui:Escalar cuerpo}} hace que las caras curvas se conviertan en B-splines cercanas (dentro de 0.0000004 mm); una escala uniforme sigue siendo exacta |
| Combinar cuerpos de superficie; sumas de Minkowski | Primero {{ui:Coser}} o {{ui:Engrosar}}, luego {{ui:Combinar}} |
| Análisis de tolerancias: cadenas de tolerancias que giran esquinas (lazos vectoriales 2D y 3D), sensibilidades calculadas a partir de la geometría, Monte Carlo con otras distribuciones, tolerancias de tamaño en cotas de croquis, tolerancia adicional por condición de material | {{ui:Cadena de tolerancias}} en un ensamblaje: una dirección, peor caso y RSS, tolerancias escritas, a partir de la tolerancia general del cajetín o de marcos GD&T: vea [Cadenas de tolerancias](topic:tolerance-stackup) |
| Anidado: orden de corte y entradas, corte de aristas compartidas una sola vez, piezas que deben mantenerse juntas; retazos de rollos, material compartido entre proyectos | {{ui:Anidar piezas planas en láminas…}} con separación, márgenes, giros y veta: vea [Anidar piezas planas en láminas](topic:nest-flat-parts); las placas sobrantes se guardan y se usan primero: vea [Guardar y reutilizar recortes](topic:nest-offcuts); planifique el corte en el software de su cortadora |
| Chapa metálica: dobladillos, escalones, bridas a inglete y de contorno; bridas en aristas curvas o en las caras de una brida base doblada; dobleces dibujados en croquis; cierres de esquina; herramientas de conformado; conversión de un sólido a chapa; el desarrollo de una brida base doblada con cortes; tablas de doblez | {{ui:Brida base}} (una placa o un perfil doblado), {{ui:Brida de arista}} en las aristas rectas de una placa con alivios de doblez, y el desarrollo plano con un factor K: vea [Chapa metálica](topic:sheet-metal) |
| {{ui:Análisis de ángulo de salida}} en ensamblajes; encontrar la línea de partición; análisis de espesor de pared | {{ui:Análisis de ángulo de salida}} sobre la pieza en Diseño: vea [Revisar el ángulo de salida para moldeo y fundición](topic:draft-analysis); abra cada pieza de un ensamblaje para revisarla |

## Croquis

| No construido aún | En su lugar, hoy |
|---|---|
| Elipses, arcos tangentes, cónicas, splines con grado o pesos fijos (NURBS) | Splines (cúbicos), arcos y círculos con relaciones de Tangente |
| Un punto sobre un spline (una relación), relaciones de curvatura (G2) | Coloque un punto propio del spline donde deba pasar |
| Copias desfasadas de splines que sigan cambios posteriores; desfases de cadenas con esquinas agudas de spline | Vuelva a desfasar después del cambio; redondee primero la esquina |
| Copias de matriz que sigan vinculadas al original; matrices a lo largo de una curva | Vuelva a hacer la matriz después de un cambio |
| Proyectar aristas circulares de forma libre o inclinadas; geometría proyectada que siga a la pieza | Proyecte aristas circulares rectas y paralelas, y luego acótelas |
| Cotas controladas (de referencia) | Lea las medidas en el panel o en los datos de la pieza |
| Relaciones colineales | Paralela con distancia 0 |
| Pegar en otro programa (el portapapeles del sistema) | Exporte DXF, STEP, STL o 3MF |
| Escribir arcos, coordenadas relativas o polares | Escriba líneas y círculos; dibuje arcos con la herramienta Arco |
| Seleccionar geometría sin puntero | Requiere un clic o un toque |

## Parámetros y unidades

| No construido aún | En su lugar, hoy |
|---|---|
| Configuraciones que cambian materiales; una tabla de diseño CSV que desactiva operaciones | Las configuraciones fijan parámetros y activan o desactivan operaciones: vea [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` crea configuraciones guardadas por nombre, incluidas las operaciones desactivadas: vea [Crear un paquete de variantes con sus configuraciones](topic:variant-pack) |
| Ecuaciones en los números de los paneles propios de las operaciones más nuevas (plano, barrido, ángulo de salida y similares) | Escríbalas en un script o con `partcraft set` ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Una pieza mostrada en pulgadas | Las medidas se muestran en milímetros; escriba `2in` en un cuadro numérico o en una expresión y se convertirá en 50.8 |

## Archivos

| No construido aún | En su lugar, hoy |
|---|---|
| Editar las operaciones propias de un sólido STEP importado (llega sin historial) | Agregue o quite material con sus propias operaciones |
| Leer colores, nombres, estructura de ensamblaje y PMI de STEP | No disponible |
| Exportar glTF, OBJ, IGES, Parasolid; DWG de una pieza 3D (solo el paquete de variantes escribe un DWG: la hoja de dibujo) | STL o 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF o archivos propios de otros programas (los archivos `.3dm` se abren como un cuerpo: [Abrir un modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | Pida STEP, o una malla STL, OBJ o 3MF cerrada: [Abrir un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de ensamblaje (un árbol con nombres de piezas) en STEP exportado | El STEP de ensamblaje es un solo compuesto de los sólidos colocados |
| Guardar en una carpeta de su elección sin la descarga del navegador | Active "preguntar dónde guardar" en la configuración de descargas del navegador |

## Dibujos

| No construido aún | En su lugar, hoy |
|---|---|
| Cotas más allá de las tres medidas generales (tamaños de agujeros, posiciones, tolerancias de medidas) | Marque el PDF, o exporte DXF y acótelo en un programa CAD 2D |
| Más de una sección o detalle; vistas alineadas, parciales y auxiliares | Una sección y un detalle por dibujo |
| Texto libre, notas y tablas en la hoja (aparte de los cajetines de título y de revisión) | La nota de acabado, o texto agregado en el PDF |
| Proyección de primer diedro, vistas móviles, hojas en vertical | Tercer diedro, distribución automática, hojas horizontales A4–A0 y ANSI A–E |
| Vista de sección en vivo: varios planos o una caja de sección a la vez, un contorno alrededor del corte, guardar la sección en el archivo | Un plano a la vez desde {{ui:Vistas}} › {{ui:Vista de sección}}; vea [Mirar dentro con una vista de sección](topic:section-view) |
| Dibujos de ensamblaje con más vistas, cotas o globos que pueda mover | Una vista isométrica (o explosionada) con globos automáticos y la lista de piezas |
| Copiar y pegar símbolos GD&T y de acabado | Coloque cada uno con Datum, Marco o Acabado |
| Manuales: archivos STEP en {{ui:Con otro archivo…}} de Illustrate, un modelo entregado directamente desde ModelCraft o BimCraft, imágenes con la calidad del trazador de rayos, 3D interactivo dentro de un PDF | Abra el STEP en Diseño e inicie el manual con {{ui:Con la pieza abierta}}; guarde el modelo como glTF (.glb); imágenes PNG de la vista 3D; el archivo 3D interactivo: vea [Iniciar un manual en Illustrate](topic:illustrate) |

## Ensamblajes

| No construido aún | En su lugar, hoy |
|---|---|
| Uniones de engranaje, cremallera, leva y tornillo; una unión de rótula limitada a un cono; uniones en caras curvas o entre puntos | Uniones rígidas, de revolución, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura en caras planas, cada valor con sus propios límites: vea [Armar un ensamblaje](topic:build-assembly) |
| Pasos de explosión que giran piezas, y arrastrar piezas que colocan las uniones | Pasos de explosión rectos; quite una unión para mover una pieza a mano |
| Subensamblajes | Un solo nivel de piezas |
| Engranajes, levas, contacto | No disponible |

## Fabricación

| No construido aún | En su lugar, hoy |
|---|---|
| Desbaste adaptativo 3D y desbaste con desfase en 3D; acabado por nivel constante (waterline), a lápiz, radial y en espiral; pasadas adaptativas escritas como arcos | Desbaste 3D en filas rectas y mecanizado de resto: vea [Desbaste 3D y mecanizado de resto](topic:rough-3d); acabado Paralela y Festón: vea [Acabado 3D](topic:finish-3d); cara, cajera, adaptativo 2D, contorno, taladrado y chaflán de 2.5 ejes: vea [Crear trayectorias y código G](topic:manufacture) |
| Corte de flanco (swarf), trayectorias de líneas de flujo y de desbaste multieje, códigos de plano de trabajo inclinado (G68.2), comprobaciones de colisión del portaherramientas y de la máquina; una simulación de cortes de 5 ejes y rotatorios | Una herramienta inclinada para cualquier operación, acabado de 5 ejes con fresa de punta esférica y acabado rotatorio de 4.º eje: vea [Mecanizado de 4 y 5 ejes](topic:multi-axis) |
| Mandrinado y roscas interiores en torno, ciclos G71/G76, arcos en trayectorias de torneado, herramientas motorizadas, un contrahusillo | Torneado exterior: cara, desbastar, acabado, ranurar, tronzar, rosca, taladrado sobre el centro: vea [Torneado en torno](topic:turning) |
| Palpado de un ángulo o de una esquina, un preajustador de herramientas, medir una medida contra una tolerancia | Palpar una cara, un lado, un agujero o un resalto para establecer el desfase de trabajo: vea [Palpado](topic:probing) |
| Comprobaciones de colisión del portaherramientas y del vástago | Atienda las advertencias de longitud de filo y revise en el simulador de su control |
| Ciclos de vida de herramienta y de subprogramas en un posprocesador; cargar archivos de posprocesador de otros programas | Escriba o cambie un posprocesador en el formato propio de PartCraft: vea [Posprocesadores que puede editar](topic:post-processors) |
| Código G en pulgadas (G20) | Solo milímetros (G21) |

## Simulación y diseño generativo

| No construido aún | En su lugar, hoy |
|---|---|
| Estudios no lineales: fluencia, grandes deflexiones, contacto entre piezas, fatiga | Estático lineal y frecuencias naturales: vea [Revisar esfuerzo y deflexión](topic:simulation); mantenga el factor de seguridad bien por encima de 1 |
| Pandeo no lineal (imperfecciones, postpandeo, salto brusco) | Factores de carga de pandeo lineales con un margen amplio: vea [Calor, esfuerzo térmico y pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de vista), resistencia de contacto, materiales dependientes de la temperatura, inercia en el esfuerzo térmico (ondas de choque térmico) | Radiación hacia el entorno, esfuerzo térmico estacionario o cuasiestático en el tiempo, propiedades constantes: vea [Calor, esfuerzo térmico y pandeo](topic:thermal-and-buckling) |
| Refinamiento automático para calor transitorio y estudios con carga térmica; hacer la malla más gruesa donde el error es pequeño; un objetivo sobre una cantidad local (el esfuerzo máximo en un punto) | **Refinar automáticamente** para estudios estáticos, de pandeo, de frecuencia natural y térmicos estacionarios, sobre el error de toda la pieza: vea [Revisar esfuerzo y deflexión](topic:simulation); de lo contrario, reduzca el tamaño del elemento |
| Cargas en cojinetes y pernos, fuerzas remotas, momentos, resortes, desplazamientos prescritos | Fuerzas y presiones en caras, gravedad; caras fijas y sin fricción |
| Simulación de ensamblajes; materiales que varían según la dirección (capas impresas, compuestos) | Una pieza, un material isótropo |
| Varios hilos del solucionador para estudios tetraédricos, transferencia de calor y diseño generativo; cualquier hilo en una página sin aislamiento de origen cruzado | Los estudios de vóxeles, pandeo, esfuerzo en el tiempo y flujo laminar usan los hilos donde la página lo permite: vea [Configuración de PartCraft](topic:settings) |
| Flujo turbulento con precisión de diseño (el modelo Spalart–Allmaras está incluido como experimental: fricción en tubería de 30 a 34 % alta, reconexión del escalón hacia atrás de 21 a 39 % corta; planeado: celdas más finas cerca de las paredes), calor en el flujo, flujo no estacionario (con precisión temporal), superficies libres, fluidos no newtonianos, piezas giratorias | Flujo laminar, estacionario e isotérmico de un fluido newtoniano, o el modelo turbulento experimental para patrones cualitativos: vea [Simular flujo de fluidos](topic:flow-simulation); el panel avisa cuando el número de Reynolds supera el régimen laminar |
| Límites de esfuerzo y reglas de fabricación (voladizos, direcciones de fresado) en diseño generativo; varios materiales en una forma | La forma más rígida para un volumen; revise el resultado en Simulación: vea [Crear una forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido editable (liso, paramétrico) | STL, STEP facetado o una pieza con el resultado como sólido facetado importado |
| Diseño de máquinas eléctricas: un rotor girando en un estator, par contra ángulo, acero saturante, imanes que pierden fuerza pasado su codo, corrientes de Foucault y pérdidas de hierro y cobre; campos magnéticos en 3-D o en mallas curvas | Magnetostática 2-D lineal sobre una malla en la biblioteca de análisis: bobinas, hierro, imanes permanentes sobre su línea de recuperación, entrehierros, inductancia y atracción: vea [Campos magnéticos en 2-D](topic:magnetic-fields-2d) |

## Scripts

| No construido aún | En su lugar, hoy |
|---|---|
| Ayuda al pasar el cursor, puntos de interrupción y paso a paso en el editor de scripts | Buscar, plegar y completar ya están (vea [Escribir y ejecutar scripts](topic:craftscript)); para lo demás, use su propio editor: {{ui:Guardar}} y {{ui:Abrir}} en el grupo Script mueven scripts hacia dentro y hacia fuera; las funciones integradas aparecen en [El lenguaje CraftScript](topic:craftscript-language) |
| Puntos de interrupción y paso a paso por un script | `disp` y `fprintf` en el camino; {{key:Mod+Enter}} ejecuta unas cuantas líneas seleccionadas a la vez |
| Campos y gráficas que un script muestra dibujados en el espacio de Diseño; scripts que cambian los parámetros de la pieza | Se muestran en el espacio de Script; los scripts leen parámetros con `param` (vea [Escribir y ejecutar scripts](topic:craftscript)) y los cambian en la pestaña {{ui:Parámetros}} |
| Imágenes y tablas junto a gráficas; editar una gráfica (zoom, límites de ejes) antes de guardarla | Lado a lado muestra las gráficas; guarde una gráfica como PNG, SVG o CSV y termínela en otro lugar |
| numpy y otros paquetes de Python; Python sin conexión; plegar Python en el editor; Pascal Script | La biblioteca estándar de Python, CraftScript y Lua: vea [Scripts en Python](topic:craftscript-python) |
| Pasar funciones de Lua a funciones integradas; llamar una función de biblioteca desde Lua por un nombre construido mientras corre el script | Escriba el nombre de la función de biblioteca en el script (`cs.static_tet(…)`), o llámela desde un script de CraftScript |

## La aplicación

| No construido aún | En su lugar, hoy |
|---|---|
| Guardado en la nube, compartir e historial de versiones | Todavía no disponible. Guarde los archivos en su computadora y conserve las versiones por nombre |
| PartCraft como aplicación instalada en iPad e iPhone | Use PartCraft en el navegador del dispositivo; en Android y en escritorio también funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuales (clic derecho) | Barra de herramientas y panel derecho |
| Trabajar completamente sin conexión desde un inicio limpio | Solo cuando la aplicación se haya guardado para uso sin conexión: vea [Trabajar sin conexión](common:offline) |

Informe lo que más le haga falta a través de la página de soporte del sitio: eso define lo que sigue.

## Ingeniería (generadores y campos)

| No construido aún | En su lugar, hoy |
|---|---|
| Cabezales, puertos y accesorios en el intercambiador de calor generado; curvas de temperatura para la resistencia del material; pérdidas en te en el múltiple | Los generadores construyen el núcleo y los tubos; agregue accesorios en Diseño; use los valores del material a temperatura ambiente con un factor de seguridad |
| Agregar generadores desde el directorio de complementos con un clic | {{ui:Abrir}} en el espacio de trabajo Ingeniería agrega un generador desde un archivo |
| Un archivo de campo más fino que el tamaño de vóxel propio del generador; leer archivos `.vdb` | Guarde un campo más fino desde un script; `.vdb` se escribe, no se lee |
| Cálculos de código para recipientes a presión | Las fórmulas de libro de pared delgada y de pared gruesa, con el factor de seguridad que elija; no es un margen de código |
| Generadores para las otras aplicaciones | Solo PartCraft en esta versión |
