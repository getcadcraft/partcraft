---
title: Mbaʼe ndojapói kuri
summary: Opa mbaʼe ko PartCraft versión ndojapói kuri, torsión barrido-gui pulgada ohechaukávape, dibujo cota ha subconjunto-kuéra peve, ha mbaʼépa ojapo ko'ẽ.
keywords: faltante, aún no, límites, limitaciones, hoja de ruta, kernel exacto, redondeo, chaflán, cáscara, barrido, loft, importar STEP, simulación, manufactura, barrido torsión, tangencia final loft, redondeo cara, ecuaciones, pulgadas, cotas de dibujo, subconjuntos, nube, tableta, teléfono
from: 9b868162
---

PartCraft ko'ã versión ha'e early. Ko página ohechauka mbaʼe ndojapói kuri, ha ndehekái hag̃ua mbaʼe ndojapóiva, ha mbaʼépa ojapo ko'ẽ. Ndaipóri fecha.

## Oikotevẽ kernel exacto

Ko versión opa pieza ojapo kernel malla rupi (ehecha [Kernel de malla](topic:solid-kernels)). Opa ko'ã ojeporúva kernel exacto ojeporu kuri, ndaipóri ko versión-pe. Ko feature-kuéra ndive pieza oñemboguejy ojeporu; feature oĩ historia-pe, marcado ndojapói kuri, ha oñangareko guardar rire.

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| {{ui:Fillet}} ha {{ui:Chamfer}} borde redondo-pe; redondeo radio mbovy borde ári; redondeo ojuntáva ... (malla kernel-pe mitra) | Fillet ha Chamfer ojapo borde recto cara plana-kuéra mbytépe; ótro esquina ... boceto-pe antes extrusión ({{ui:Fillet}} boceto-pe, {{key:F}}) |
| {{ui:Shell}} cara curva ojehepyme'ẽ; pared ambue grosor-pe | Cara plana ojehepyme'ẽ; material extrusión-gui pared hetaiterei ojapo |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} cara curva-pe; extrusión cara, cara sigiente térã vértice-pe; extrusión afilada | Extrusión térã revolución, pasos-pe ojehepyme'ẽ; extrusión profundidad ojehechava-pe |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} ha patrón plano | Extruí placa térã nervadura perfil |
| Superficies: {{ui:Form}} ojehepyme'ẽ pieza-pe, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Ndaipóri |
| Cuerpo-kuéra: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, feature ojapo cuerpo pyahu | Peteĩ sólido; patrón ha espejo copia feature-kuéra |
| Boceto, plano, eje ha punto cara-kuéra ojehechakuaa ... kernel exacto-pe (cara fillet-gui ojapo, agujero pared, sólido importado cara) | Boceto plano base, plano referencia ha cara plana extrusión ha revolución-gui |
| Resultado diseño generativo pieza-pe abrí térã agregado (sólido importado ojapo) | Eʼe resultado STL térã STEP-pe |
| Cara curva STEP archivo ... exacta spline, barrido ha revolución cara STEP-gui; spline lado; rosca modelada; cuerpo STL / OBJ / 3MF ha conjunto; STEP otro modelador pieza | {{ui:Open}} STEP-pe triángulo-pe ojeʼe, archivo cara plana, cilindro, cono, esfera ha toro ojeporu exportación-pe ([Abrí archivo STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} opa cara analítica exacta ojapo ha faceta-pe ([Exportar](topic:export-files#for-other-cad-programs-step)); otro modelador macro ojapo ojeʼe |
| Arco verdadero vista dibujo-pe | Vista ha vista corte faceta-gui ojapo |
| Volumen, área ha distancia exacta | {{ui:Measure}} faceta sólido número ohechauka, redondo pieza-pe apenas hasy; {{ui:Curves}} ajuste fino ohupytýva |

Tabla ryepýpe mbaʼe ojehechauka feature ojeporu ... ko ojeporu ojeikuaa kernel exacto oñemoĩ rire.

## Features

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Cara redondeo, redondeo completo, redondeo radio punto borde ári | Constante térã lineal variable {{ui:Fillet}}; feature redondeo hetaiterei |
| Cáscara pared grosor ojehepyme'ẽ | Peteĩ grosor {{ui:Shell}}; material extrusión-gui pared hetaiterei |
| Draft spline cara-pe | {{ui:Draft}} plana, cilíndrica ha cónica cara-pe |
| Barrido torsión, pared fina ha superficie barrido; tangencia final loft-pe; loft guía riel peteĩ; camino spline | {{ui:Sweep}} orientación fija térã escala final; loft riel mokõi térã hetaiterei: ehecha [Barrido, loft y draft](topic:sweep-loft-draft) |
| {{ui:Rib}} arco térã spline-gui; nervadura cuadrado boceto-pe (vista superior-gui); draft nervadura-pe; nervadura hetaiterei peteĩ boceto-gui | {{ui:Rib}} peteĩ línea cadena-gui nervadura plano-pe: ehecha [Nervaduras y gussets](topic:rib) |
| "Hasta" cara curva, "hasta siguiente" cara curva-pe | Cara plana térã plano referencia-pe |
| Agujero contrataladro, rosca pulgada térã caño, rosca cónica, final rosca, inicio rosca chaflán | Contrabarreno profundidad pequeña; ISO métrica ha trapezoidal rosca, cosmética térã modelada: ehecha [Roscas en ejes y agujeros](topic:threads) |
| Extrusión pared fina | Oñemoĩ ambos pared perfil |
| Patrón copia peteĩ-peteĩ omitida, patrón relleno | Feature separado ojeporu; patrón curva rupi: {{ui:Path pattern}} |
| Patrón copia, espejo, redondeo, chaflán, cáscara ha sólido importado | Boceto térã feature ojapo base-pe copia térã patrón |
| Tangencia exacta (G1) forma punto extraordinario-pe; forma parche-kuéra ojeikuaa cara hetave-pe | Forma Nivel ojapo: parche aproximado tuichave; ehecha [Formas libres con Form](topic:form-surfaces) |
| Forma peteĩ feature-pe ohóva mokõi térã hetaiterei cerrado pieza; puente forma-kuéra mbytépe | Forma feature peteĩ cerrado pieza; ojuntá Join-gui |
| Superficie cuerpo-kuéra vista-pe ojeporu (ndaʼéi trim ha parche punto) ; superficie redondeo; destrim; G2 parche; Gordon superficie tangente curva vecino-pe (plano ha cara plana tangente ojapo) | Nombre-pe ojeporu feature panel-pe; grosor primero, redondeo sólido |
| Cuerpo lista historia-pe; cuerpo oculto exportación-gui ojeʼe | Nombre cambia ha oculta cuerpo panel lista-pe; feature cuerpo ojapo ojeʼe térã suprimí |
| Escala no uniforme cilindro cono analítico oñangareko; superficie desplazada escala no uniforme | {{ui:Scale body}} cara curva B-spline ojapo (0.0000004 mm ryepýpe); escala uniforme exacta oñangareko |
| Superficie cuerpo combinar; suma Minkowski | {{ui:Stitch}} térã {{ui:Thicken}} primero, después {{ui:Combine}} |
| Análisis tolerancia: stack-up esquina (vector loop 2D ha 3D), sensibilidad geometría, Monte Carlo otra distribución, tolerancia tamaño boceto cota-pe, tolerancia bonus | {{ui:Stack-up}} conjunto-pe: una dirección, peor caso ha RSS, tolerancia escrita, cuadro bloque tolerancia general térã GD&T: ehecha [Acumulación de tolerancias](topic:tolerance-stackup) |
| Anidado: orden corte ha entrada, borde compartido peteĩ jey, pieza ojekuaaukáva juntos; retazo rollo-gui, stock proyecto mokõi-pe | {{ui:Nest flat parts on sheets…}} espacio, margen, vuelta ha grano-ndive: ehecha [Anidar piezas planas en hojas](topic:nest-flat-parts); sobra placa ñongatu ha ojeporu primero: ehecha [Guardar y reutilizar sobras](topic:nest-offcuts); planeá corte cortadora programa-pe |
| Chapa metálica: dobladillo, quiebre, bisel ha contorno pestaña; pestaña curva borde-pe térã base pestaña dobla cara-pe; doblez boceto-pe; cierre esquina; herramienta conformado; sólido convertido chapa; plano base pestaña doblado corte-ndive; tabla doblez | {{ui:Base flange}} (placa térã perfil doblado), {{ui:Edge flange}} placa borde recto-pe alivio doblez-ndive, ha patrón plano K-factor-ndive: ehecha [Chapa metálica](topic:sheet-metal) |
| Análisis draft conjunto-pe; búsqueda línea partición; análisis grosor pared | {{ui:Draft analysis}} pieza Diseño-pe: ehecha [Verificar draft para moldeo y fundición](topic:draft-analysis); cada pieza conjunto abrí revisa |

## Bocetos

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Elipse, arco tangente, cónica, spline grado fijo térã peso (NURBS) | Spline cúbico, arco y círculo relación Tangente-ndive |
| Punto spline-pe (relación), relación curvatura (G2) | Spline punto propio emoĩ pasa oporiva |
| Copia desplazada spline cambio posterior-pe ojeʼe; desplazamiento cadena esquina spline agudo-ndive | Desplazá de nuevo cambio rire; esquina primero redondeá |
| Copia patrón ojeikéva original-gui; patrón curva rupi | Patrón de nuevo cambio rire |
| Proyectar borde circular libre térã inclinado, geometría proyectada pieza cambio-pe | Proyectar borde circular recto y paralelo, después cota |
| Cota guiada (referencia) | Tamaño panel térã pieza datos-gui |
| Relación colineal | Paralelo distancia 0-ndive |
| Pegar otro programa-pe (portapapeles sistema) | Exportá DXF, STEP, STL térã 3MF |
| Escribir arco, coordenada relativa térã polar | Escribí línea ha círculo; arco herramienta Arco-ndive |
| Seleccionar geometría puntero-ndive | Clic térã toque ojeporu |

## Parámetros y unidades

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Configuración material ojehepyme'ẽ; tabla diseño CSV feature apaga | Configuración parámetro oñemoĩ ha feature apaga/prende: ehecha [Configuraciones y tablas de diseño](topic:design-tables); `partcraft variants` configuración guardada nombre-gui ojapo, feature apagado mboyve: ehecha [Hacer paquete de variantes](topic:variant-pack) |
| Ecuación feature panel mboyve ohóva-pe (plano, barrido, draft ha ambue) | Script-pe térã `partcraft set`-ndive ojapo ([Scripts y línea de comandos](topic:scripts-and-cli)) |
| Pieza pulgada-pe ohechauka | Tamaño milímetro-pe ohechauka; `2in` número caja-pe térã expresión-pe escribí, 50.8 ojeʼe |

## Archivos

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Sólido STEP importado feature propio ojehepyme'ẽ (historia ndaipóri ojeʼe) | Material ha agregá térã cortá feature propio-ndive |
| Color, nombre, estructura conjunto ha PMI STEP-gui ojeʼe | Ndaipóri |
| glTF, OBJ, IGES, Parasolid exportación; DWG pieza 3D (ojapo variante paquete DWG: hoja dibujo) | STL térã 3MF malla-pe; STEP sólido-pe; DXF 2D-pe |
| IGES, DXF térã otro programa archivo abrí (`.3dm` archivo cuerpo peteĩ-pe ojeʼe: [Abrí modelo .3dm como cuerpo sólido](topic:open-3dm-files)) | STEP pedí, térã STL, OBJ térã 3MF malla cerrado: [Abrí STL, OBJ o 3MF](topic:open-meshes) |
| Estructura conjunto (árbol nombre pieza-gui) STEP exportado-pe | STEP conjunto compuesto sólido colocados-gui |
| Guardar carpeta elegido navegador descarga ndive ndaipóri | Navegador descarga ajustes: "preguntá dónde guardar" emoĩ |

## Dibujos

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Cota mboyve oĩ tres tamaño ... (tamaño agujero, posición, tolerancia tamaño) | PDF marcá, térã DXF exportá ha 2D CAD programa-pe cota |
| Sección térã detalle hetave-pe; vista alineada, rota, auxiliar | Sección peteĩ ha detalle peteĩ dibujo-pe |
| Texto libre, nota ha tabla hoja-pe (título ha revisión bloque mboyve) | Acabado nota térã PDF-pe texto agregado |
| Proyección primer ángulo, vista móvil, hoja vertical | Tercer ángulo, diseño automático, hoja horizontal A4–A0 ha ANSI A–E |
| Vista sección vivo: plano hetave térã caja sección peteĩ jey; contorno corte alrededor; sección archivo-pe guardá | Peteĩ plano peteĩ jey {{ui:Views}} › {{ui:Section view}} ojeporu; ehecha [Mirá adentro con vista sección](topic:section-view) |
| Dibujo conjunto vista hetave, cota térã globo mbovymi ojeʼe | Isométrica (térã explosionada) peteĩ vista automático globo ha lista pieza-ndive |
| Copia y pegar símbolo GD&T y acabado | Peteĩ-peteĩ Datum, Frame térã Finish-ndive emoĩ |
| Manuales: STEP archivo Illustrate {{ui:From another file…}}, modelo ModelCraft térã BimCraft-gui directo, imagen trazador-rayos calidad, 3D interactivo PDF-pe | STEP Diseño-pe abrí ha manual {{ui:From the open part}} ojapo; modelo glTF (.glb)-pe guardá; 3D vista PNG imagen; 3D interactivo archivo: ehecha [Comenzar manual en Illustrate](topic:illustrate) |

## Conjuntos

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Engranaje, cremallera, leva ha tornillo junta; junta rótula cono-pe limitado; junta curva cara térã punto-pe | Rígida, revolución, corredera, cilíndrica, plana, rótula ha pasador-ranura junta cara plana-pe, valor peteĩ-peteĩ límite-ndive: ehecha [Armar un conjunto](topic:build-assembly) |
| Pieza gira explosión paso ha junta arrastra | Explosión recto paso; junta oipe'a pieza mano-pe ojeʼe |
| Subconjunto | Pieza nivel peteĩ-pe |
| Engranaje, leva, contacto | Ndaipóri |

## Manufactura

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Desbaste 3D cara curva, limpieza adaptativa 3D, mecanizado residual; acabado waterline, pencil, radial ha espiral; pasada adaptativa arco-pe escrito | 2.5-eje cara, bolsillo, 2D adaptativo, contorno, taladro ha chaflán: ehecha [Hacer trayectorias y G-code](topic:manufacture); Paralelo y Scallop acabado modelo entero: ehecha [Acabado 3D](topic:finish-3d) |
| 4 y 5 ejes trayectoria, torneado, sondeo | Lado peteĩ-peteĩ eje herramienta Configuración pestaña-pe |
| Chequeo colisión porta herramienta ha mango | Advertencia longitud estría ohecha ha chequea control simulador-pe |
| Sondeo, ciclo vida herramienta ha subprograma post-pe; cargar otro programa archivo post | Post PartCraft formato-pe escribí térã cambiá: ehecha [Post procesadores editables](topic:post-processors) |
| G-code pulgada (G20) | Milímetro (G21) peteĩ |

## Simulación y diseño generativo

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Estudio no lineal: fluencia, deflexión grande, contacto pieza-kuéra, fatiga | Lineal estático y frecuencias naturales: ehecha [Verificar tensión y deflexión](topic:simulation); factor seguridad 1 hasy rehe |
| Pandeo no lineal (imperfección, post-pandeo, snap-through) | Factor carga pandeo lineal margen generoso: ehecha [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Radiación cara-kuéra mbytépe (factor vista), resistencia contacto, material temperatura-dependiente, inercia tensión térmica (onda choque térmico) | Radiación entorno-pe, tensión térmica estacionaria o cuasi-estática tiempo-pe, propiedad constante: ehecha [Calor, tensión térmica y pandeo](topic:thermal-and-buckling) |
| Refinamiento automático calor transitorio ha carga térmica estudio-pe; malla gruesa error pequeño-pe; objetivo cantidad local (tensión pico peteĩ punto) | **Refinar automáticamente** estático, pandeo, frecuencia natural ha térmico estacionario, error total pieza-pe: ehecha [Verificar tensión y deflexión](topic:simulation); térã elemento tamaño achiquá |
| Carga rodamiento ha perno, fuerza remota, momento, resorte, desplazamiento prescrito | Fuerza ha presión cara-pe, gravedad; cara fija ha sin fricción |
| Simulación conjunto; material dirección-pe ojeʼeva diferente (capas impresas, compuestos) | Peteĩ pieza, peteĩ material isótropo |
| Hetaiterei hilo estudio tetraédrico, transferencia calor ha diseño generativo; cualquier hilo página origen-ojeaislado ndaʼéi | Estudio voxel, pandeo, tensión tiempo-pe ha flujo laminar hilo ojeporu página ohechapáicha: ehecha [Ajustes PartCraft](topic:settings) |
| Flujo turbulento diseño precisión (modelo Spalart–Allmaras experimental: fricción caño 30 a 34 % alto, reattachment paso 21 a 39 % corto; planeado: celdas finas pared-pe); calor en flujo; flujo no estacionario, superficie libre, fluido no newtoniano, pieza giratoria | Flujo laminar, estacionario, isotérmico fluido newtoniano, térã modelo turbulento experimental patrón cualitativo: ehecha [Simular flujo de fluidos](topic:flow-simulation); Reynolds laminar pasa, panel advierte |
| Límite tensión ha regla fabricación (voladizo, dirección fresado) diseño generativo-pe; hetave material peteĩ forma-pe | Forma más rígida volumen-pe; resultado Simulación-pe verificá: ehecha [Crecer forma gui cargas](topic:generative-design) |
| Resultado editable (liso, paramétrico) sólido-pe | STL, STEP facetado térã pieza resultado sólido facetado importado-pe |
| Diseño máquina eléctrica: rotor girando estator-pe, par contra ángulo, acero saturante, imanes perdiendo fuerza pasado codo, corrientes parásitas ha pérdidas hierro y cobre; campo magnético 3-D térã malla curva-pe | Magnetostática lineal 2-D cuadrícula-pe biblioteca análisis-pe: bobinas, hierro, imanes permanentes recoil línea-pe, espacios, inductancia y tracción: ehecha [Campos magnéticos en 2-D](topic:magnetic-fields-2d) |

## Scripts

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Ayuda al pasar mouse, puntos de quiebre y paso a paso en editor script | Buscar, plegar y completar ojeporu (ehecha [Escribir y ejecutar scripts](topic:craftscript)); lo demás, propio editor: {{ui:Save}} y {{ui:Open}} Script grupo-pe scripts ingresa ha egresa; funciones incorporadas [Lenguaje CraftScript](topic:craftscript-language) ohechauka |
| Puntos de quiebre y paso a paso script-pe | `disp` ha `fprintf` oñemoĩ; {{key:Mod+Enter}} peteĩ-mokõi línea selección ojecutá |
| Campos y gráficos script ohechauka Diseño workspace-pe; scripts cambia parámetros pieza | Script workspace-pe ohechauka; scripts parámetro `param`-ndive leé ([Escribir y ejecutar scripts](topic:craftscript)), {{ui:Parameters}} pestaña-pe cambia |
| Imágenes y tablas gráfico ndive; editar gráfico (zoom, límites eje) guardar rire | Lado a lado gráfico ohechauka; gráfico PNG, SVG térã CSV-pe guardá ha otro lado acabá |
| numpy ha otro paquete Python; Python sin conexión; Python editor-pe doblar; Pascal Script | Python biblioteca estándar, CraftScript ha Lua: ehecha [Scripts en Python](topic:craftscript-python) |
| Función Lua incorporada función-pe pasá; biblioteca función Lua-gui script ejecutando nombre-pe | Biblioteca función nombre script-pe escribí (`cs.static_tet(…)`), térã CraftScript script-gui ojecutá |

## La aplicación

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Guardado en nube, compartir ha historial versión | Ndaipóri kuri. Archivo computadora-pe guardá ha versiones nombre-gui ñongatu |
| PartCraft iPad ha iPhone instalada aplicación | Dispositivo navegador-pe PartCraft ojeporu; Android ha escritorio-pe CadCraft Studio-pe ojapo (getcadcraft.com/download) |
| Menú contexto (clic derecho) | Barra herramienta ha panel derecha |
| Trabajo completo sin conexión inicio fresco-gui | Aplicación sin conexión uso guardado rire: ehecha [Trabajar sin conexión](common:offline) |

Ehecha mbaʼe ndejeporúva página soporte-pe: ohechauka ojapo oĩ mboyve.

## Engineer (generadores y campos)

| Ndojapói kuri | Ko'ẽ, ko'ẽ-ndive |
|---|---|
| Cabezales, puertos ha accesorios intercambiador calor generado-pe; curvas temperatura material resistencia-pe; pérdida T colector-pe | Generadores núcleo ha tubo ojapo; Diseño-pe accesorio agregá; material temperatura ambiente cifra seguridad ndive ojeporu |
| Generador directorio complemento un clic-pe agregá | Workspace Engineer-pe {{ui:Open}} archivo-gui generador agregá |
| Campo archivo voxel tamaño generador propio-gui finura ... ; `.vdb` leé | Script-gui campo más fino guardá; `.vdb` escribe, leé ndaikatúi |
| Cálculo código recipiente presión | Fórmulas textbook pared delgada y gruesa, factor seguridad elegido; código margen ndaʼéi |
| Otro aplicación generadores | Esta versión PartCraft-pe peteĩ |
