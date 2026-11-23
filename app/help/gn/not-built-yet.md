---
title: Lo que todavía no está hecho
summary: Todo lo que esta versión de PartCraft todavía no hace, desde barridos con torsión hasta visualización en pulgadas, cotas de dibujo y subensamblajes, con lo que conviene hacer en su lugar hoy.
keywords: faltante, todavía no, límites, limitaciones, hoja de ruta, kernel exacto, redondeo, chaflán, cáscara, barrido, loft, importar step, simulación, fabricación, barrido con torsión, tangencia final de loft, redondeo de cara, ecuaciones, pulgadas, cotas de dibujo, subensamblajes, nube, tableta, teléfono
from: 97b10a29
---

PartCraft es una versión temprana. Esta página lista lo que todavía no hace, para que no lo busques, y lo que conviene hacer en su lugar hoy. Nada de esto tiene fecha.

## Necesita un kernel exacto

Esta versión construye cada pieza con el kernel de malla (ver [El kernel de malla](topic:solid-kernels)). Todo lo de abajo necesita un kernel de geometría exacta, que esta versión todavía no tiene. Las piezas guardadas con estas funciones se siguen abriendo: las funciones quedan en el historial, marcadas como no construidas, y se conservan al guardar.

| Todavía no | En su lugar, hoy |
|---|---|
| {{ui:Fillet}} y {{ui:Chamfer}} en aristas redondas; redondeos con radio que cambia a lo largo de la arista; redondeos que se unen suavemente donde se encuentran (el kernel de malla los corta a inglete) | Fillet y Chamfer funcionan en aristas rectas entre caras planas; redondeá las otras esquinas en el boceto antes de extruir ({{ui:Fillet}} en un boceto, {{key:F}}) |
| {{ui:Shell}} abriendo caras curvas; paredes de distinto espesor | Abrí caras planas; agregá material con extrusiones donde una pared deba ser más gruesa |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} sobre caras curvas; extruir hasta una cara, la siguiente cara o un vértice; extrusiones cónicas | Extruí o girá, en pasos donde haga falta; extruí a una profundidad que hayas medido |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} y patrones planos | Extruí la placa o el perfil de la nervadura |
| Superficies: terminar una {{ui:Form}} dentro de la pieza, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | No disponible |
| Varios cuerpos: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, funciones que crean un cuerpo nuevo | Un solo sólido; los patrones y las copias espejo son funciones de copia |
| Bocetos, planos, ejes y puntos sobre caras que solo un kernel exacto puede hallar (una cara hecha por un redondeo, la pared de un agujero, una cara de un sólido importado) | Bocetá sobre planos base, planos de referencia y las caras planas de extrusiones y giros |
| Un resultado de diseño generativo abierto como pieza o agregado a una (pasa a ser un sólido importado) | Descargá el resultado como STL o STEP |
| Editar las caras curvas de un archivo STEP abierto como superficies exactas; STEP exacto de caras en spline, barridas y giradas de un archivo STEP; lados en spline; roscas modeladas; cuerpos STL / OBJ / 3MF y ensamblajes; STEP para otros modeladores de piezas | {{ui:Open}} lee STEP como triángulos y conserva las caras planas, cilindros, conos, esferas y toros del archivo para la exportación ([Abrir un archivo STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} escribe cada cara analítica de forma exacta y mantiene esas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); la macro para otro modelador de piezas todavía escribe |
| Arcos verdaderos en vistas de dibujo | Las vistas y los cortes se dibujan desde las facetas |
| Volúmenes, áreas y distancias exactos | {{ui:Measure}} da los números del sólido facetado, algo bajos en piezas redondas; una configuración de **Curvas** más fina los acerca |

Algunas filas de las tablas siguientes sugieren una de estas funciones como forma de resolver otra cosa. Esas sugerencias se aplican cuando vuelva un kernel exacto.

## Funciones

| Todavía no | En su lugar, hoy |
|---|---|
| Redondeos de cara, redondeos completos, redondeos con radios fijados en puntos a lo largo de una arista | {{ui:Fillet}} constante o variable lineal; varias funciones de redondeo |
| Cáscaras con distintos espesores de pared | Un solo espesor de {{ui:Shell}}; agregá material con extrusiones donde una pared deba ser más gruesa |
| Desmoldeo en caras libres (spline) | {{ui:Draft}} funciona en caras planas, cilíndricas y cónicas |
| Barridos con torsión, barridos de pared delgada y de superficie; tangencia final en la función Loft; un loft con una sola guía; trayectorias en spline | {{ui:Sweep}} con orientación fija o escala final; un loft con dos o más guías: ver [Barrido, loft y desmoldeo](topic:sweep-loft-draft) |
| Nervaduras desde arcos o splines; nervaduras crecidas en escuadra con el boceto (desde una vista superior); desmoldeo en nervaduras; varias nervaduras de un mismo boceto | {{ui:Rib}} desde una cadena de líneas en el plano propio de la nervadura: ver [Nervaduras y escuadras](topic:rib) |
| "Hasta" una superficie curva, "hasta el siguiente" que se detiene en una cara curva | Hasta una cara plana o un plano de referencia |
| Agujeros avellanados doble, roscas en pulgadas y de tubo, roscas cónicas, finales de rosca y comienzos de rosca achaflanados | Avellanado con poca profundidad; roscas métricas ISO y trapeciales, cosméticas o modeladas: ver [Roscas en ejes y agujeros, dibujadas o modeladas](topic:threads) |
| Extrusiones de elemento delgado | Dibujá ambas paredes del perfil |
| Copias de patrón saltadas una por una, patrones de relleno | Usá funciones separadas; patrones a lo largo de una curva: {{ui:Path pattern}} |
| Copiar patrones, espejos, redondeos, chaflanes, cáscaras y sólidos importados | Copiá el boceto o la función sobre la que se construyen, o hacele un patrón |
| Tangencia exacta (G1) en los puntos extraordinarios de una forma; unir los parches de una forma en caras más grandes | Subí el Nivel de la forma: los parches aproximados se achican; ver [Formas libres con Form](topic:form-surfaces) |
| Una forma hecha de varias piezas cerradas separadas en una función; puentes entre formas | Una pieza cerrada por función Form; unilas con Join |
| Elegir cuerpos de superficie en la vista (salvo puntos de recorte y parche); redondeos de superficie; destrimar; parches G2; superficies Gordon tangentes a vecinos curvos (tangentes a planos y caras planas sí están) | Elegilas por nombre en el panel de la función; primero dales espesor, después redondeá el sólido |
| Una lista de cuerpos en el historial; dejar cuerpos ocultos fuera de las exportaciones | Renombrá y ocultá cuerpos en la lista de cuerpos del panel de la pieza; borrá o suprimí la función que creó un cuerpo para dejarlo afuera |
| Una escala no uniforme que mantenga cilindros y conos analíticos; escala no uniforme de superficies desplazadas | {{ui:Scale body}} hace que las caras curvas se cierren como B-splines (dentro de 0,0000004 mm); una escala uniforme se mantiene exacta |
| Combinar cuerpos de superficie; sumas de Minkowski | Primero {{ui:Stitch}} o {{ui:Thicken}}, después {{ui:Combine}} |
| Análisis de tolerancias: cadenas de cotas que doblan esquinas (lazos vectoriales 2D y 3D), sensibilidades calculadas desde la geometría, Monte Carlo con otras distribuciones, tolerancias de tamaño en cotas de boceto, tolerancia de bonificación por condición del material | {{ui:Stack-up}} en un ensamblaje: una dirección, peor caso y RSS, tolerancias escritas a mano, desde la tolerancia general del cajetín o desde marcos GD&T: ver [Cadenas de tolerancias](topic:tolerance-stackup) |
| Anidado: orden de corte y entradas de corte, cortar bordes compartidos una vez, piezas que deben mantenerse juntas; sobrantes de rollos, material compartido entre proyectos | {{ui:Nest flat parts on sheets…}} con separación, márgenes, giros y dirección de fibra: ver [Anidar piezas planas en hojas](topic:nest-flat-parts); las placas sobrantes se guardan y se usan primero: ver [Guardar y reutilizar recortes](topic:nest-offcuts); planificá el corte en el software de tu cortadora |
| Chapa metálica: dobladillos, quiebres, pestañas de inglete y de contorno; pestañas en bordes curvos o en las caras de una pestaña base doblada; dobleces dibujados en boceto; cierres de esquina; herramientas de conformado; convertir un sólido en chapa; el plano de una pestaña base doblada con cortes; tablas de doblez | {{ui:Base flange}} (una placa o un perfil doblado), {{ui:Edge flange}} en bordes rectos de una placa con alivios de doblez, y el patrón plano con factor K: ver [Chapa metálica](topic:sheet-metal) |
| Análisis de desmoldeo en ensamblajes; hallar la línea de partición; análisis de espesor de pared | {{ui:Draft analysis}} sobre la pieza en Diseño: ver [Revisar desmoldeo para moldeo y fundición](topic:draft-analysis); abrí cada pieza de un ensamblaje para revisarla |

## Bocetos

| Todavía no | En su lugar, hoy |
|---|---|
| Elipses, arcos tangentes, cónicas, splines con grado o pesos fijados (NURBS) | Splines (cúbicos), arcos y círculos con relaciones de Tangente |
| Un punto sobre un spline (una relación), relaciones de curvatura (G2) | Poné el punto propio del spline donde tiene que pasar |
| Copias desplazadas de splines que siguen cambios posteriores; desplazamientos de cadenas con esquinas agudas en spline | Desplazá otra vez después del cambio; redondeá antes la esquina |
| Copias de patrón que quedan vinculadas al original; patrones a lo largo de una curva | Volvé a hacer el patrón después de un cambio |
| Proyectar aristas circulares libres o inclinadas, geometría proyectada que sigue a la pieza | Proyectá aristas circulares rectas y paralelas, y después cotá |
| Cotas conducidas (de referencia) | Leé las medidas del panel o de los datos de la pieza |
| Relaciones colineales | Paralela con distancia 0 |
| Pegar en otro programa (portapapeles del sistema) | Exportá DXF, STEP, STL o 3MF |
| Escribir arcos, coordenadas relativas o polares | Escribí líneas y círculos; dibujá arcos con la herramienta Arc |
| Seleccionar geometría sin puntero | Necesita un clic o un toque |

## Parámetros y unidades

| Todavía no | En su lugar, hoy |
|---|---|
| Configuraciones que cambian materiales; una tabla de diseño CSV que apaga funciones | Las configuraciones fijan parámetros y encienden o apagan funciones: ver [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` crea variantes guardadas por nombre, con funciones apagadas incluidas: ver [Hacer un paquete de variantes desde tus configuraciones](topic:variant-pack) |
| Ecuaciones en los números de los paneles propios de las funciones más nuevas (plano, barrido, desmoldeo y similares) | Escribilas en un script o con `partcraft set` ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Una pieza mostrada en pulgadas | Los tamaños se muestran en milímetros; escribí `2in` en una casilla numérica o en una expresión y pasa a 50,8 |

## Archivos

| Todavía no | En su lugar, hoy |
|---|---|
| Editar las funciones propias de un sólido STEP importado (llega sin historial) | Agregá o quitá material con tus propias funciones |
| Leer colores, nombres, estructura de ensamblaje y PMI de STEP | No disponible |
| Exportar glTF, OBJ, IGES, Parasolid; DWG de una pieza 3D (solo el paquete de variantes escribe DWG: la hoja de dibujo) | STL o 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF u otros archivos propios de otros programas (los archivos `.3dm` se abren como un cuerpo: [Abrir un modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | Pedí STEP, o una malla STL, OBJ o 3MF cerrada: [Abrir un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de ensamblaje (un árbol con nombres de piezas) en el STEP exportado | El STEP de ensamblaje es un compuesto de los sólidos ubicados |
| Guardar en una carpeta de tu elección sin la descarga del navegador | Activá "preguntar dónde guardar" en la configuración de descargas del navegador |

## Dibujos

| Todavía no | En su lugar, hoy |
|---|---|
| Cotas más allá de las tres medidas generales (tamaños de agujeros, posiciones, tolerancias de tamaños) | Marcá el PDF, o exportá DXF y cotá en un programa CAD 2D |
| Más de un corte o un detalle; vistas alineadas, rotas y auxiliares | Un corte y un detalle por dibujo |
| Texto libre, notas y tablas en la hoja (salvo los bloques de título y de revisión) | La nota de acabado, o texto agregado en el PDF |
| Proyección de primer diedro, vistas en movimiento, hojas verticales | Tercer diedro, distribución automática, hojas horizontales A4–A0 y ANSI A–E |
| Vista de corte en vivo: varios planos o una caja de corte a la vez, un contorno alrededor del corte, guardar el corte en el archivo | Un plano por vez desde {{ui:Views}} › {{ui:Section view}}; ver [Ver el interior con una vista de corte](topic:section-view) |
| Dibujos de ensamblaje con más vistas, cotas o globos que puedas mover | Una vista isométrica (o explosionada) con globos automáticos y la lista de piezas |
| Copiar y pegar símbolos GD&T y de acabado | Colocá cada uno con Datum, Frame o Finish |
| Manuales: archivos STEP en {{ui:From another file…}} de Illustrate, un modelo enviado directo desde ModelCraft o BimCraft, imágenes con la calidad del trazador de rayos, 3D interactivo dentro de un PDF | Abrí el STEP en Diseño e iniciá el manual {{ui:From the open part}}; guardá el modelo como glTF (.glb); imágenes PNG de la vista 3D; el archivo 3D interactivo: ver [Empezar un manual en Illustrate](topic:illustrate) |

## Ensamblajes

| Todavía no | En su lugar, hoy |
|---|---|
| Uniones de engranaje, cremallera, leva y tornillo; una unión de rótula limitada a un cono; uniones en caras curvas o entre puntos | Uniones rígida, de revolución, deslizante, cilíndrica, plana, de rótula y de pasador en ranura en caras planas, cada valor con sus propios límites: ver [Armar un ensamblaje](topic:build-assembly) |
| Pasos de explosión que giran piezas, y arrastrar piezas que las uniones ubican | Pasos de explosión rectos; quitá una unión para mover una pieza a mano |
| Subensamblajes | Un solo nivel de piezas |
| Engranajes, levas, contacto | No disponible |

## Fabricación

| Todavía no | En su lugar, hoy |
|---|---|
| Desbaste adaptativo 3D y desbaste por desplazamiento en 3D; acabado de línea de agua (z constante), lápiz, radial y espiral; pasadas adaptativas escritas como arcos | Desbaste 3D en filas rectas y mecanizado de resto: ver [3D desbaste y mecanizado de resto](topic:rough-3d); acabado Paralela y Scallop: ver [Acabado 3D](topic:finish-3d); cara, pocket, adaptativo 2D, contorno, taladrado y chaflán de 2,5 ejes: ver [Hacer trayectorias y G-code](topic:manufacture) |
| Corte de viruta lateral (swarf), trayectorias de líneas de flujo y de desbaste multieje, códigos de plano de trabajo inclinado (G68.2), control de colisión del portaherramientas y de la máquina; simulación de cortes de 5 ejes y rotativos | Una herramienta inclinada para cualquier operación, acabado de 5 ejes con fresa de punta esférica y acabado rotativo de 4º eje: ver [Mecanizado de 4 y 5 ejes](topic:multi-axis) |
| Mandrinado y roscas interiores en torno, ciclos G71/G76, arcos en trayectorias de torneado, herramientas motrices, subhusillo | Torneado exterior: refrentado, desbaste, acabado, ranurado, tronzado, rosca y taladrado sobre centro: ver [Torneado en torno](topic:turning) |
| Palpar un ángulo o una esquina, un calibrador de herramientas, medir un tamaño contra una tolerancia | Palpar una cara, un lado, un agujero o un resalto para fijar el desplazamiento de trabajo: ver [Palpado](topic:probing) |
| Controles de colisión de portaherramientas y mango | Mirá los avisos de largo de filo y revisá en el simulador de tu control |
| Cálculo de vida de herramienta y ciclos de subprogramas en un postprocesador; cargar archivos de postprocesador de otros programas | Escribí o cambiá un postprocesador en el formato propio de PartCraft: ver [Postprocesadores que podés editar](topic:post-processors) |
| G-code en pulgadas (G20) | Solo milímetros (G21) |

## Simulación y diseño generativo

| Todavía no | En su lugar, hoy |
|---|---|
| Estudios no lineales: fluencia, grandes deflexiones, contacto entre piezas, fatiga | Estático lineal y frecuencias naturales: ver [Verificar tensión y deflexión](topic:simulation); mantené el factor de seguridad bien por encima de 1 |
| Pandeo no lineal (imperfecciones, postpandeo, salto brusco) | Factores de carga de pandeo lineales con un margen generoso: ver [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiales que dependen de la temperatura, inercia en la tensión térmica (ondas de choque térmico) | Radiación hacia el entorno, tensión térmica estacionaria o cuasi estática en el tiempo, propiedades constantes: ver [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Refinamiento automático para calor transitorio y estudios con carga térmica; hacer la malla más gruesa donde el error es pequeño; un objetivo sobre una cantidad local (la tensión máxima en un punto) | **Refinar automáticamente** para estudios estáticos, de pandeo, de frecuencia natural y térmicos estacionarios, sobre el error de toda la pieza: ver [Verificar tensión y deflexión](topic:simulation); si no, bajá el tamaño del elemento |
| Cargas de cojinete y de perno, fuerzas remotas, momentos, resortes, desplazamientos prescritos | Fuerzas y presiones sobre caras, gravedad; caras fijas y sin fricción |
| Simulación de ensamblajes; materiales que cambian según la dirección (capas impresas, compuestos) | Una pieza, un material isótropo |
| Varios hilos del solver para estudios tetraédricos, transferencia de calor y diseño generativo; cualquier hilo en una página que no está aislada entre orígenes | Los estudios voxel, el pandeo, la tensión en el tiempo y el flujo laminar usan los hilos donde la página lo permite: ver [Configuración de PartCraft](topic:settings) |
| Flujo turbulento con precisión de diseño (el modelo Spalart–Allmaras está como experimental: fricción en tubo 30 a 34 % alta, reconexión tras escalón 21 a 39 % corta; previsto: celdas más finas cerca de las paredes), calor en el flujo, flujo no estacionario (con tiempo exacto), superficies libres, fluidos no newtonianos, piezas en rotación | Flujo laminar, estacionario, isotérmico de un fluido newtoniano, o el modelo turbulento experimental para patrones cualitativos: ver [Simular flujo de fluidos](topic:flow-simulation); el panel avisa cuando el número de Reynolds supera el laminar |
| Límites de tensión y reglas de fabricación (voladizos, direcciones de fresado) en diseño generativo; varios materiales en una forma | La forma más rígida para un volumen; revisá el resultado en Simulación: ver [Crecer una forma desde cargas](topic:generative-design) |
| Un resultado como sólido editable (suave, paramétrico) | STL, STEP facetado o una pieza con el resultado como sólido importado facetado |
| Máquina eléctrica: un rotor girando en un estator, par contra ángulo, acero saturado, imanes que pierden fuerza más allá de su codo, corrientes parásitas y pérdidas de hierro y cobre; campos magnéticos en 3D o en mallas curvas | Magnetostática 2D lineal sobre una cuadrícula en la biblioteca de análisis: bobinas, hierro, imanes permanentes sobre su línea de retroceso, entrehierros, inductancia y atracción: ver [Campos magnéticos en 2D](topic:magnetic-fields-2d) |

## Scripts

| Todavía no | En su lugar, hoy |
|---|---|
| Ayuda al pasar el puntero, puntos de ruptura y paso a paso en el editor de scripts | Buscar, plegar y completar sí están (ver [Escribir y ejecutar scripts](topic:craftscript)); para el resto, tu editor propio: {{ui:Save}} y {{ui:Open}} en el grupo Script mueven scripts hacia adentro y hacia afuera; las funciones integradas están listadas en [El lenguaje CraftScript](topic:craftscript-language) |
| Puntos de ruptura y paso a paso por un script | `disp` y `fprintf` en el camino; {{key:Mod+Enter}} ejecuta unas pocas líneas seleccionadas por vez |
| Campos y gráficos que muestra un script, dibujados en el espacio de Diseño; scripts que cambian los parámetros de la pieza | Se muestran en el espacio de Script; los scripts leen parámetros con `param` (ver [Escribir y ejecutar scripts](topic:craftscript)) y los cambian en la pestaña {{ui:Parameters}} |
| Imágenes y tablas junto a gráficos; editar un gráfico (zoom, límites de ejes) antes de guardarlo | Lado a lado muestra los gráficos; guardá un gráfico como PNG, SVG o CSV y terminalo en otro lado |
| numpy y otros paquetes de Python; Python sin conexión; plegar Python en el editor; Pascal Script | La biblioteca estándar de Python, CraftScript y Lua: ver [Scripts en Python](topic:craftscript-python) |
| Pasar funciones de Lua a funciones integradas; llamar una función de biblioteca desde Lua por un nombre armado mientras corre el script | Escribí el nombre de la función de biblioteca en el script (`cs.static_tet(…)`), o llamala desde un script de CraftScript |

## La aplicación

| Todavía no | En su lugar, hoy |
|---|---|
| Guardado en la nube, compartir e historial de versiones | Todavía no disponible. Guardá los archivos en tu computadora y guardá las versiones con nombre |
| PartCraft como aplicación instalada en iPad e iPhone | Usá PartCraft en el navegador del dispositivo; en Android y en escritorio también funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuales (clic derecho) | Barra de herramientas y panel derecho |
| Trabajar del todo sin conexión desde un inicio limpio | Solo cuando la aplicación se guardó para uso sin conexión: ver [Trabajar sin conexión](common:offline) |

Contanos lo que más te falta por el sitio de soporte: eso define lo que sigue.

## Engineer (generadores y campos)

| Todavía no | En su lugar, hoy |
|---|---|
| Cabezales, puertos y accesorios en el intercambiador de calor generado; curvas de temperatura para la resistencia del material; pérdidas en tees del colector | Los generadores construyen el núcleo y los tubos; agregá accesorios en Diseño; usá los valores del material a temperatura ambiente con un factor de seguridad |
| Agregar generadores desde el directorio de complementos con un solo clic | {{ui:Open}} en el espacio Engineer agrega un generador desde un archivo |
| Un archivo de campo más fino que el tamaño de voxel propio del generador; leer archivos `.vdb` | Guardá un campo más fino desde un script; `.vdb` se escribe, no se lee |
| Cálculos de código de recipientes a presión | Las fórmulas clásicas de pared delgada y de pared gruesa, con el factor de seguridad que elijas; no es un margen de código |
| Generadores para las otras aplicaciones | Solo PartCraft en esta versión |
