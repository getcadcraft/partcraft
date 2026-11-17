---
title: Lo que aún no está disponible
summary: Todo lo que esta versión de PartCraft aún no hace, desde barridos con torsión hasta la visualización en pulgadas, cotas de dibujo y subensamblajes, con lo que puede hacer hoy en su lugar.
keywords: faltante, aún no, límites, limitaciones, hoja de ruta, núcleo exacto, redondeo, chaflán, vaciado, barrido, solevación, importar STEP, simulación, manufactura, barrido con torsión, tangencia final de solevación, redondeo de cara, ecuaciones, pulgadas, cotas de dibujo, subensamblajes, nube, tableta, teléfono
from: 9b868162
---

PartCraft es una versión temprana. Esta página indica lo que todavía no hace, para que no lo busque, y qué hacer en su lugar hoy. Nada de esto tiene fecha.

## Requiere un núcleo exacto

Esta versión construye cada pieza con el núcleo de malla (véase [El núcleo de malla](topic:solid-kernels)). Todo lo siguiente necesita un núcleo geométrico exacto, que esta versión aún no tiene. Las piezas guardadas con estas funciones se siguen abriendo: las funciones permanecen en el historial, marcadas como no construidas, y se conservan al guardar.

| Aún no disponible | En su lugar, hoy |
|---|---|
| {{ui:Fillet}} y {{ui:Chamfer}} en aristas redondeadas; redondeos cuyo radio cambia a lo largo de la arista; redondeos que se funden suavemente donde se encuentran (el núcleo de malla los corta a inglete) | Redondeo y Chaflán funcionan en aristas rectas entre caras planas; redondee las otras esquinas en el croquis antes de extruir ({{ui:Fillet}} en un croquis, {{key:F}}) |
| {{ui:Shell}} que abre caras curvas; paredes de espesores distintos | Abra caras planas; agregue material con extrusiones donde una pared deba ser más gruesa |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} en caras curvas; extruir hasta una cara, hasta la siguiente cara o hasta un vértice; extrusiones con conicidad | Extruya o revolucione, por pasos donde haga falta; extruya a una profundidad que usted mida |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} y patrones planos | Extruya la placa o el perfil del nervio |
| Superficies: terminar una {{ui:Form}} en la pieza, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | No disponible |
| Varios cuerpos: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, operaciones que crean un cuerpo nuevo | Un solo sólido; los patrones y la simetría copian operaciones |
| Croquis, planos, ejes y puntos sobre caras que solo un núcleo exacto puede encontrar (una cara hecha por un redondeo, la pared de un agujero, una cara de un sólido importado) | Croquis sobre planos base, planos de referencia y las caras planas de extrusiones y revoluciones |
| Un resultado de diseño generativo abierto como pieza o agregado a ella (se convierte en un sólido importado) | Descargue el resultado como STL o STEP |
| Editar las caras curvas de un archivo STEP abierto como superficies exactas; STEP exacto de caras de spline, barridas y revolucionadas desde un archivo STEP, costados de spline, roscas modeladas, cuerpos STL / OBJ / 3MF y ensamblajes; STEP de otros modeladores de piezas | {{ui:Open}} lee STEP como triángulos y conserva las caras planas, cilindros, conos, esferas y toros del archivo para la exportación ([Abrir un archivo STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} escribe todas las caras analíticas con exactitud y las conserva como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); la macro para otro modelador de piezas aún escribe |
| Arcos verdaderos en vistas de dibujo | Las vistas y las vistas de sección se dibujan a partir de las facetas |
| Volúmenes, áreas y distancias exactas | {{ui:Measure}} da los números del sólido facetado, algo bajos en piezas redondas; un ajuste de **Curvas** más fino los acerca |

Algunas filas de las tablas siguientes sugieren una de estas funciones como alternativa a otra cosa. Esas sugerencias aplican cuando vuelva el núcleo exacto.

## Operaciones

| Aún no disponible | En su lugar, hoy |
|---|---|
| Redondeos de caras, redondeos completos, redondeos con radios fijados en puntos a lo largo de una arista | {{ui:Fillet}} constante o variable lineal; varias operaciones de redondeo |
| Vaciados con espesores de pared distintos | Un solo espesor de {{ui:Shell}}; agregue material con extrusiones donde una pared deba ser más gruesa |
| Ángulo de salida en caras de forma libre (spline) | {{ui:Draft}} funciona en caras planas, cilíndricas y cónicas |
| Barridos con torsión, barridos de pared delgada y de superficie; tangencia final en la operación Solevación; una solevación con un solo riel guía; trayectorias de spline | {{ui:Sweep}} con orientación fija o con una escala final; una solevación con dos o más rieles guía: véase [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft) |
| Nervios desde arcos o splines; nervios crecidos cuadrados al croquis (desde una vista superior); ángulo de salida en nervios; varios nervios desde un mismo croquis | {{ui:Rib}} desde una cadena de líneas en el plano propio del nervio: véase [Nervios y escuadras](topic:rib) |
| «Hasta» una superficie curva, «hasta el siguiente» que se detiene en una cara curva | Hasta una cara plana o un plano de referencia |
| Agujeros avellanados por taladro, roscas en pulgadas y de tubería, roscas cónicas, salidas de rosca y comienzos de rosca achaflanados | Avellanado con una profundidad pequeña; roscas métricas ISO y trapezoidales, cosméticas o modeladas: véase [Roscas en ejes y barrenos, dibujadas o modeladas](topic:threads) |
| Extrusiones de elemento delgado | Dibuje ambas paredes del perfil |
| Copias de patrón omitidas una por una, patrones de relleno | Use operaciones separadas; patrones a lo largo de una curva: {{ui:Path pattern}} |
| Copias de patrones, simetrías, redondeos, chaflanes, vaciados y sólidos importados | Copie el croquis o la operación en que se basan, o hágales un patrón |
| Tangencia exacta (G1) en los puntos extraordinarios de una forma; unir los parches de una forma en caras más grandes | Suba el Nivel de la forma: los parches aproximados se hacen más pequeños; véase [Formas libres con Form](topic:form-surfaces) |
| Una forma hecha de varias piezas cerradas separadas en una sola operación; puentes entre formas | Una pieza cerrada por operación Form; únalas con Unir |
| Elegir cuerpos de superficie en la vista (salvo los puntos de recorte y de parche); redondeos de superficie; deshacer un recorte; parches G2; superficies de Gordon tangentes a vecinas curvas (las tangentes a planos y caras planas sí están) | Elíjalos por nombre en el panel de la operación; engruese primero y luego redondee el sólido |
| Una lista de cuerpos en el historial; dejar cuerpos ocultos fuera de las exportaciones | Cambie el nombre y oculte cuerpos en la lista de cuerpos del panel de la pieza; elimine o suprima la operación que creó un cuerpo para dejarlo fuera |
| Un escalado no uniforme que mantenga los cilindros y conos analíticos; escalado no uniforme de superficies desfasadas | {{ui:Scale body}} hace que las caras curvas sean B-splines cerradas (dentro de 0.0000004 mm); un escalado uniforme sigue siendo exacto |
| Combinar cuerpos de superficie; sumas de Minkowski | Primero {{ui:Stitch}} o {{ui:Thicken}}, luego {{ui:Combine}} |
| Análisis de tolerancias: cadenas que giran en esquinas (bucles vectoriales 2D y 3D), sensibilidades calculadas a partir de la geometría, Monte Carlo con otras distribuciones, tolerancias de tamaño en cotas de croquis, tolerancia de bonificación por condición de material | {{ui:Stack-up}} en un ensamblaje: una dirección, peor caso y RSS, tolerancias escritas, desde la tolerancia general del cajetín o desde marcos GD&T: véase [Cadenas de tolerancias](topic:tolerance-stackup) |
| Anidado: orden de corte y entradas, cortar bordes compartidos una sola vez, piezas que deben mantenerse juntas; retazos de rollos, existencias compartidas entre proyectos | {{ui:Nest flat parts on sheets…}} con separación, márgenes, giros y fibra: véase [Anidar piezas planas en láminas](topic:nest-flat-parts); las láminas sobrantes se conservan y se usan primero: véase [Conservar y reutilizar retazos](topic:nest-offcuts); planifique el corte en el software de su cortadora |
| Chapa metálica: dobladillos, quiebres, pestañas a inglete y de contorno; pestañas en bordes curvos o en las caras de una brida base doblada; dobleces dibujados en croquis; cierres de esquina; herramientas de conformado; convertir un sólido en chapa; el plano de una brida base doblada con cortes; tablas de doblado | {{ui:Base flange}} (una placa o un perfil doblado), {{ui:Edge flange}} en los bordes rectos de una placa con alivios de doblez, y el patrón plano con factor K: véase [Chapa metálica](topic:sheet-metal) |
| Análisis de ángulo de salida en ensamblajes; hallar la línea de partición; análisis de espesor de pared | {{ui:Draft analysis}} en la pieza, en Diseño: véase [Revisar el ángulo de salida para moldeo y fundición](topic:draft-analysis); abra cada pieza de un ensamblaje para revisarla |

## Croquis

| Aún no disponible | En su lugar, hoy |
|---|---|
| Elipses, arcos tangentes, cónicas, splines con grado fijo o con pesos (NURBS) | Splines (cúbicos), arcos y círculos con relaciones Tangente |
| Un punto sobre una spline (una relación), relaciones de curvatura (G2) | Coloque un punto propio de la spline donde deba pasar |
| Copias desfasadas de splines que sigan cambios posteriores; desfases de cadenas con esquinas agudas de spline | Desfase de nuevo después del cambio; redondee primero la esquina |
| Copias de patrón que sigan vinculadas al original; patrones a lo largo de una curva | Vuelva a hacer el patrón después de un cambio |
| Proyectar aristas circulares de forma libre o inclinadas; geometría proyectada que sigue a la pieza | Proyecte aristas circulares rectas y paralelas, luego acótelas |
| Cotas conducidas (de referencia) | Lea las medidas desde el panel o los datos de la pieza |
| Relaciones colineales | Paralelas con distancia 0 |
| Pegar en otro programa (el portapapeles del sistema) | Exporte DXF, STEP, STL o 3MF |
| Escribir arcos, coordenadas relativas o polares | Escriba líneas y círculos; dibuje arcos con la herramienta Arco |
| Seleccionar geometría sin puntero | Requiere un clic o un toque |

## Parámetros y unidades

| Aún no disponible | En su lugar, hoy |
|---|---|
| Configuraciones que cambian materiales; una tabla de diseño CSV que desactiva operaciones | Las configuraciones fijan parámetros y activan o desactivan operaciones: véase [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` construye configuraciones guardadas por nombre, con las operaciones desactivadas incluidas: véase [Crear un paquete de variantes desde sus configuraciones](topic:variant-pack) |
| Ecuaciones en los números de los paneles propios de las operaciones más nuevas (plano, barrido, ángulo de salida y similares) | Escríbalas en un script o con `partcraft set` ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Una pieza mostrada en pulgadas | Las medidas se muestran en milímetros; escriba `2in` en un cuadro numérico o en una expresión y se convierte en 50.8 |

## Archivos

| Aún no disponible | En su lugar, hoy |
|---|---|
| Editar las operaciones propias de un sólido STEP importado (llega sin historial) | Agregue o corte material con sus propias operaciones |
| Leer colores, nombres, estructura de ensamblaje y PMI desde STEP | No disponible |
| Exportar glTF, OBJ, IGES, Parasolid; DWG de una pieza 3D (solo el paquete de variantes escribe un DWG: la hoja de dibujo) | STL o 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF u otros archivos propios de otros programas (los archivos `.3dm` se abren como un cuerpo: [Abrir un modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | Pida STEP, o una malla STL, OBJ o 3MF cerrada: [Abrir un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de ensamblaje (un árbol con nombres de pieza) en STEP exportado | El STEP de ensamblaje es un compuesto de los sólidos colocados |
| Guardar en una carpeta de su elección sin la descarga del navegador | Active «preguntar dónde guardar» en la configuración de descargas del navegador |

## Dibujos

| Aún no disponible | En su lugar, hoy |
|---|---|
| Cotas más allá de las tres medidas generales (tamaños de agujeros, posiciones, tolerancias en medidas) | Marque el PDF, o exporte DXF y acótelo en un programa CAD 2D |
| Más de una sección o un detalle; vistas alineadas, interrumpidas y auxiliares | Una sección y un detalle por dibujo |
| Texto libre, notas y tablas en la hoja (aparte de los bloques de título y de revisión) | La nota de acabado, o texto agregado en el PDF |
| Proyección de primer ángulo, vistas móviles, hojas en vertical | Tercer ángulo, distribución automática, hojas horizontales A4–A0 y ANSI A–E |
| Vista de sección en vivo: varios planos o una caja de sección a la vez, un contorno alrededor del corte, guardar la sección en el archivo | Un plano a la vez desde {{ui:Views}} › {{ui:Section view}}; véase [Mirar dentro con una vista de sección](topic:section-view) |
| Vistas de ensamblaje con más vistas, cotas o globos que pueda mover | Una vista isométrica (o explosionada) con globos automáticos y la lista de piezas |
| Copiar y pegar símbolos GD&T y de acabado | Coloque cada uno con Datum, Marco o Acabado |
| Manuales: archivos STEP en {{ui:From another file…}} de Illustrate, un modelo enviado directamente desde ModelCraft o BimCraft, imágenes con la calidad del trazador de rayos, 3D interactivo dentro de un PDF | Abra el STEP en Diseño e inicie el manual con {{ui:From the open part}}; guarde el modelo como glTF (.glb); imágenes PNG de la vista 3D; el archivo 3D interactivo: véase [Iniciar un manual en Illustrate](topic:illustrate) |

## Ensamblajes

| Aún no disponible | En su lugar, hoy |
|---|---|
| Juntas de engranaje, cremallera, leva y tornillo; junta de rótula limitada a un cono; juntas en caras curvas o entre puntos | Juntas rígidas, de revolución, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura, en caras planas, cada valor con sus propios límites: véase [Construir un ensamblaje](topic:build-assembly) |
| Pasos de explosión que giran piezas, y arrastrar piezas que las juntas colocan | Pasos de explosión rectos; quite una junta para mover una pieza a mano |
| Subensamblajes | Un solo nivel de piezas |
| Engranajes, levas, contacto | No disponible |

## Manufactura

| Aún no disponible | En su lugar, hoy |
|---|---|
| Desbaste 3D de caras curvas, desbaste adaptativo 3D, mecanizado de remanentes; acabado por línea de agua, lápiz, radial y espiral; pasadas adaptativas escritas como arcos | Cara, cavidad, adaptativo 2D, contorno, taladro y chaflán de 2.5 ejes: véase [Crear trayectorias y G-code](topic:manufacture); acabado Paralelo y Escamado de todo el modelo: véase [Acabado 3D](topic:finish-3d) |
| Trayectorias de 4 y 5 ejes, torneado, palpado | Configure un lado a la vez con el eje de herramienta en la pestaña Configuración |
| Verificación de colisiones de portaherramientas y de vástago | Observe las advertencias de longitud de ranura y verifique en el simulador de su control |
| Palpado, ciclos de vida de herramienta y subprogramas, códigos de eje 4 y 5 y de torno en un postprocesador; cargar archivos de postprocesador de otros programas | Escriba o cambie un postprocesador en el formato propio de PartCraft: véase [Postprocesadores que puede editar](topic:post-processors) |
| G-code en pulgadas (G20) | Solo milímetros (G21) |

## Simulación y diseño generativo

| Aún no disponible | En su lugar, hoy |
|---|---|
| Estudios no lineales: fluencia, grandes deflexiones, contacto entre piezas, fatiga | Estática lineal y frecuencias naturales: véase [Verificar esfuerzo y deflexión](topic:simulation); mantenga el factor de seguridad bien por encima de 1 |
| Pandeo no lineal (imperfecciones, pospandeo, salto brusco) | Factores de carga de pandeo lineal con un margen generoso: véase [Calor, esfuerzo térmico y pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiales que dependen de la temperatura, inercia en el esfuerzo térmico (ondas de choque térmico) | Radiación hacia el entorno, esfuerzo térmico estático o cuasiestático a lo largo del tiempo, propiedades constantes: véase [Calor, esfuerzo térmico y pandeo](topic:thermal-and-buckling) |
| Refinamiento automático para calor transitorio y para estudios con carga térmica; hacer la malla más gruesa donde el error es pequeño; un objetivo sobre una cantidad local (el esfuerzo máximo en un punto) | **Refinar automáticamente** para estudios estáticos, de pandeo, de frecuencias naturales y térmicos estacionarios, sobre el error de toda la pieza: véase [Verificar esfuerzo y deflexión](topic:simulation); en otros casos, reduzca el tamaño del elemento |
| Cargas de cojinetes y pernos, fuerzas remotas, momentos, resortes, desplazamientos prescritos | Fuerzas y presiones en caras, gravedad; caras fijas y sin fricción |
| Simulación de ensamblajes; materiales que cambian según la dirección (capas impresas, compuestos) | Una pieza, un material isótropo |
| Varios hilos del solver para estudios tetraédricos, transferencia de calor y diseño generativo; cualquier hilo en una página que no esté aislada de origen cruzado | Los estudios por vóxeles, el pandeo, el esfuerzo a lo largo del tiempo y el flujo laminar usan los hilos donde la página lo permite: véase [Configuración de PartCraft](topic:settings) |
| Flujo turbulento con precisión de diseño (el modelo Spalart–Allmaras está incluido como experimental: fricción en tubería 30 a 34 % alta, reenganche tras escalón 21 a 39 % corto; previsto: celdas más finas junto a las paredes), calor en el flujo, flujo no estacionario (con precisión temporal), superficies libres, fluidos no newtonianos, piezas giratorias | Flujo laminar, estacionario e isotérmico de un fluido newtoniano, o el modelo turbulento experimental para patrones cualitativos: véase [Simular el flujo de fluidos](topic:flow-simulation); el panel advierte cuando el número de Reynolds supera el régimen laminar |
| Límites de esfuerzo y reglas de fabricación (voladizos, direcciones de fresado) en diseño generativo; varios materiales en una forma | Forma más rígida para un volumen; revise el resultado en Simulación: véase [Hacer crecer una forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido editable (suave, paramétrico) | STL, STEP facetado o una pieza con el resultado como sólido importado facetado |
| Máquina eléctrica: un rotor que gira en un estator, par frente a ángulo, acero que se satura, imanes que pierden fuerza más allá de su codo, corrientes parásitas y pérdidas de hierro y cobre; campos magnéticos en 3D o en mallas curvas | Magnetostática 2D lineal en una rejilla, en la biblioteca de análisis: bobinas, hierro, imanes permanentes en su línea de retroceso, entrehierros, inductancia y atracción: véase [Campos magnéticos en 2D](topic:magnetic-fields-2d) |

## Scripts

| Aún no disponible | En su lugar, hoy |
|---|---|
| Ayuda al pasar el cursor, puntos de interrupción y paso a paso en el editor de scripts | Buscar, plegar y completar ya están (véase [Escribir y ejecutar scripts](topic:craftscript)); para lo demás, su propio editor: {{ui:Save}} y {{ui:Open}} en el grupo Script mueven scripts hacia dentro y hacia fuera; las funciones integradas figuran en [El lenguaje CraftScript](topic:craftscript-language) |
| Puntos de interrupción y ejecución paso a paso | `disp` y `fprintf` en el camino; {{key:Mod+Enter}} ejecuta unas pocas líneas seleccionadas a la vez |
| Campos y gráficos que un script muestra, dibujados en el espacio de trabajo Diseño; scripts que cambian los parámetros de la pieza | Se muestran en el espacio de trabajo Script; los scripts leen parámetros con `param` (véase [Escribir y ejecutar scripts](topic:craftscript)) y los cambian en la pestaña {{ui:Parameters}} |
| Imágenes y tablas junto a gráficos; editar un gráfico (zoom, límites de ejes) antes de guardarlo | Lado a lado muestra los gráficos; guarde un gráfico como PNG, SVG o CSV y termínelo en otro lugar |
| numpy y otros paquetes de Python; Python sin conexión; plegar Python en el editor; Pascal Script | La biblioteca estándar de Python, CraftScript y Lua: véase [Scripts en Python](topic:craftscript-python) |
| Pasar funciones de Lua a funciones integradas; llamar una función de biblioteca desde Lua por un nombre construido mientras se ejecuta el script | Escriba el nombre de la función de biblioteca en el script (`cs.static_tet(…)`), o llámela desde un script de CraftScript |

## La aplicación

| Aún no disponible | En su lugar, hoy |
|---|---|
| Guardado en la nube, compartir e historial de versiones | No disponible todavía. Guarde los archivos en su computadora y conserve las versiones por nombre |
| PartCraft como aplicación instalada en iPad e iPhone | Use PartCraft en el navegador del dispositivo; en Android y en escritorio también funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuales (clic derecho) | Barra de herramientas y panel derecho |
| Trabajar por completo sin conexión desde un inicio limpio | Solo cuando la aplicación se ha guardado para uso sin conexión: véase [Trabajar sin conexión](common:offline) |

Informe lo que más extrañe a través de la página de soporte del sitio: define lo que sigue.

## Engineer (generadores y campos)

| Aún no disponible | En su lugar, hoy |
|---|---|
| Cabezales, conexiones y accesorios en el intercambiador de calor generado; curvas de temperatura para la resistencia del material; pérdidas en tee en el colector | Los generadores construyen el núcleo y los tubos; agregue accesorios en Diseño; use las cifras de temperatura ambiente del material con un factor de seguridad |
| Agregar generadores desde el directorio de complementos con un clic | {{ui:Open}} en el espacio de trabajo Engineer agrega un generador desde un archivo |
| Un archivo de campo más fino que el tamaño de vóxel propio del generador; leer archivos `.vdb` | Guarde un campo más fino desde un script; `.vdb` se escribe, no se lee |
| Cálculos de recipientes a presión por código | Las fórmulas clásicas de pared delgada y de pared gruesa, con el factor de seguridad que usted elija; no es un margen de código |
| Generadores para las otras aplicaciones | Solo PartCraft en esta versión |
