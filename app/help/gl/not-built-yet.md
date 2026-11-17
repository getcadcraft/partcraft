---
title: O que aínda non está feito
summary: Todo o que esta versión de PartCraft aínda non fai, desde barridos con torsión ata a visualización en polgadas, cotas de debuxo e subconxuntos, con indicación do que facer hoxe no seu lugar.
keywords: ausente, aínda non, límites, limitacións, plan de desenvolvemento, núcleo exacto, redondeo, chaflán, casca, barrido, unión de perfís, importación STEP, simulación, manufacture, barrido con torsión, tanxencia no extremo, redondeo de cara, ecuacións, polgadas, cotas de debuxo, subconxuntos, nube, tableta, teléfono
from: 9b868162
---

PartCraft é unha versión temperá. Esta páxina indica o que aínda non fai, para que non o busque, e o que facer hoxe no seu lugar. Ningunha destas funcións ten data.

## Precisa un núcleo exacto

Esta versión constrúe todas as pezas co núcleo de malla (ver [O núcleo de malla](topic:solid-kernels)). Todo o que segue precisa un núcleo xeométrico exacto, que esta versión aínda non ten. As pezas gardadas con estas funcións ábrense igualmente: as funcións quedan no historial, marcadas como non construídas, e consérvanse ao gardar.

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| {{ui:Redondeo}} e {{ui:Chaflán}} en bordos redondos; redondeos cuxo raio cambia ao longo do bordo; redondeos mesturados suavemente onde se atopan (o núcleo de malla os corta en inglete) | Redondeo e chaflán funcionan en bordos rectos entre caras planas; redondee as outras esquinas no esbozo antes de extruír ({{ui:Redondeo}} nun esbozo, {{key:F}}) |
| {{ui:Casca}} abrindo caras curvas; paredes de grosores distintos | Caras planas abertas; engada material con extrusións onde unha parede deba ser máis grosa |
| {{ui:Barrido}}, {{ui:Unión de perfís}}, {{ui:Desmoldeo}} sobre caras curvas; extruír ata unha cara, a seguinte cara ou un vértice; extrusións cónicas | Extruír ou revolucionar, en pasos onde faga falta; extruír a unha profundidade que mida |
| {{ui:Nervadura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e superficies planas | Extruír a placa ou o perfil da nervadura |
| Superficies: rematar unha {{ui:Forma}} na peza, {{ui:Parche}}, {{ui:Loft de superficie}}, {{ui:Superficie de Gordon}}, {{ui:Coser}}, {{ui:Engrosar}}, {{ui:Superficie desprazada}}, {{ui:Estender superficie}}, {{ui:Recortar superficie}} | Non dispoñible |
| Varios corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Patrón de traxectoria}}, elementos que crean un corpo novo | Un só sólido; os patróns e as copias por simetría son elementos de copia |
| Esbozos, planos, eixos e puntos en caras que só un núcleo exacto pode localizar (unha cara feita por un redondeo, a parede dun furado, unha cara dun sólido importado) | Esbozar en planos base, planos de referencia e nas caras planas de extrusións e revolucións |
| Un resultado de deseño xerativo aberto como peza ou engadido a unha (convértese nun sólido importado) | Descargar o resultado como STL ou STEP |
| Editar as caras curvas dun ficheiro STEP aberto como superficies exactas; STEP exacto de caras spline, barridas e de revolución dun ficheiro STEP; lados spline; roscas modeladas; corpos e conxuntos STL / OBJ / 3MF; STEP para outros modeladores de pezas | {{ui:Abrir}} lee STEP como triángulos e conserva as caras planas, cilindros, conos, esferas e toros do ficheiro para a exportación ([Abrir un ficheiro STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe exactamente cada cara analítica e mantén esas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de pezas segue escribindo |
| Arcos verdadeiros nas vistas de debuxo | As vistas e as vistas de sección debúxanse a partir das facetas |
| Volumes, áreas e distancias exactos | {{ui:Medir}} dá os números do sólido facetado, algo baixos en pezas redondas; un axuste de **Curvas** máis fino achégaos |

Algunhas filas das táboas seguintes propoñen un destes elementos como xeito de resolver outra cousa. Esas propostas aplícanse cando volva o núcleo exacto.

## Elementos

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Redondeos de cara, redondeos completos, redondeos con raios fixados en puntos ao longo dun bordo | {{ui:Redondeo}} constante ou de variación lineal; varios elementos de redondeo |
| Cascas con grosores de parede distintos | Un só grosor de {{ui:Casca}}; engada material con extrusións onde unha parede deba ser máis grosa |
| Desmoldeo en caras de forma libre (spline) | {{ui:Desmoldeo}} funciona en caras planas, cilíndricas e cónicas |
| Barridos con torsión, barridos de paredes finas e de superficie; tanxencia no extremo do elemento Loft; un loft cun só carril guía; trazados spline | {{ui:Barrido}} con orientación fixa ou escala no extremo; un loft con dous ou máis carrís guía: ver [Barrido, loft e desmoldeo](topic:sweep-loft-draft) |
| Nervaduras a partir de arcos ou splines; nervaduras crecidas en cadrado co esbozo (desde unha vista superior); desmoldeo en nervaduras; varias nervaduras dun mesmo esbozo | {{ui:Nervadura}} a partir dunha cadea de liñas no plano propio da nervadura: ver [Nervaduras e cartabóns](topic:rib) |
| «Ata» unha superficie curva, «ata o seguinte» que se detén nunha cara curva | Ata unha cara plana ou un plano de referencia |
| Furados contraescariados, roscas en polgadas e de tubo, roscas cónicas, saídas de rosca e inicios de rosca chanfrados | Escariado con pouca profundidade; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: ver [Roscas en eixos e furos, debuxadas ou modeladas](topic:threads) |
| Extrusións de elemento fino | Debuxe as dúas paredes do perfil |
| Copias de patrón saltadas unha a unha; patróns de recheo | Use elementos separados; patróns ao longo dunha curva: {{ui:Patrón de traxectoria}} |
| Copias de patrón, simetrías, redondeos, chaflanes, cascas e sólidos importados | Copie o esbozo ou o elemento sobre o que se constrúen, ou fágalles un patrón |
| Tanxencia exacta (G1) nos puntos extraordinarios dunha forma; unir os parches dunha forma en caras máis grandes | Suba o Nivel da forma: os parches aproximados fanse máis pequenos; ver [Formas libres con Forma](topic:form-surfaces) |
| Unha forma feita por varias pezas pechadas separadas nun mesmo elemento; pontes entre formas | Unha peza pechada por elemento Forma; únaas con Unir |
| Escoller corpos de superficie na vista (salvo os puntos de recorte e de parche); redondeos de superficie; desrecortar; parches G2; superficies de Gordon tanxentes a veciñas curvas (tanxentes a planos e caras planas están feitas) | Escóllaos polo nome no panel do elemento; engrose primeiro e despois faga o redondeo do sólido |
| Unha lista de corpos no historial; deixar os corpos ocultos fóra das exportacións | Cambie o nome e oculte corpos no panel de corpos da peza; elimine ou suprima o elemento que creou un corpo para deixalo fóra |
| Escala non uniforme que conserve cilindros e conos analíticos; escala non uniforme de superficies desprazadas | {{ui:Escalar corpo}} fai que as caras curvas sexan B-splines pechados (dentro de 0,0000004 mm); unha escala uniforme sigue sendo exacta |
| Combinar corpos de superficie; sumas de Minkowski | {{ui:Coser}} ou {{ui:Engrosar}} primeiro, despois {{ui:Combinar}} |
| Análise de tolerancias: cadeas que dan voltas (bucles vectoriais 2D e 3D), sensibilidades calculadas desde a xeometría, Monte Carlo con outras distribucións, tolerancias de tamaño en cotas do esbozo, tolerancia de bonificación pola condición do material | {{ui:Cadea de tolerancias}} nun conxunto: unha dirección, peor caso e RSS, tolerancias escritas, desde a tolerancia xeral do cadro de rótulos ou desde marcos GD&T: ver [Cadeas de tolerancias](topic:tolerance-stackup) |
| Encaixe: orde de corte e entradas, corte de bordos compartidos unha soa vez, pezas que deben ir xuntas; retallos de rolos, stock compartido entre proxectos | {{ui:Encaixar pezas planas en follas…}} con separación, marxes, xiros e fibra: ver [Encaixar pezas planas en follas](topic:nest-flat-parts); as placas sobrantes consérvanse e úsanse primeiro: ver [Gardar e reutilizar sobrantes](topic:nest-offcuts); planifique o corte no software da súa máquina |
| Chapa metálica: dobras de bordo, desprazamentos, abas en inglete e de contorno; abas en bordos curvos ou nas caras dunha aba base dobrada; dobras esbozadas; pechamentos de esquina; ferramentas de conformado; converter un sólido en chapa; a planta dunha aba base dobrada con cortes; táboas de dobra | {{ui:Aba base}} (unha placa ou un perfil dobrado), {{ui:Aba de aresta}} nos bordos rectos dunha placa con alivios de dobra, e a superficie plana cun factor K: ver [Chapa metálica](topic:sheet-metal) |
| Análise de desmoldeo en conxuntos; localizar a liña de partición; análise do grosor de parede | {{ui:Análise de desmoldeo}} na peza en Deseño: ver [Comprobar o desmoldeo para moldeado e fundición](topic:draft-analysis); abra cada peza dun conxunto para comprobala |

## Esbozos

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Elipses, arcos tanxentes, cónicas, splines con grao ou pesos fixados (NURBS) | Splines (cúbicos), arcos e círculos con relacións de tanxencia |
| Un punto nun spline (unha relación), relacións de curvatura (G2) | Poña o punto propio do spline onde deba pasar |
| Copias en desvío de splines que sigan cambios posteriores; desvíos de cadeas con esquinas agudas de spline | Desvíe de novo despois do cambio; redondee antes a esquina |
| Copias de patrón que sigan ligadas ao orixinal; patróns ao longo dunha curva | Volva facer o patrón despois dun cambio |
| Proxectar bordos circulares libres ou inclinados, xeometría proxectada que siga a peza | Proxectar bordos circulares rectos e paralelos, e despois acotar |
| Cotas conducidas (de referencia) | Ler os tamaños do panel ou dos datos da peza |
| Relacións colineais | Paralelo cunha distancia 0 |
| Pegar noutro programa (o portapapeis do sistema) | Exportar DXF, STEP, STL ou 3MF |
| Escribir arcos, coordenadas relativas ou polares | Escriba liñas e círculos; debuxe arcos coa ferramenta Arco |
| Seleccionar xeometría sen punteiro | Fai falta un clic ou un toque |

## Parámetros e unidades

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Configuracións que cambian materiais; unha táboa de deseño CSV que apaga elementos | As configuracións fixan parámetros e activan e desactivan elementos: ver [Configuracións e táboas de deseño](topic:design-tables); `partcraft variants` crea paquetes de variantes a partir de configuracións gardadas por nome, incluídos os elementos desactivados: ver [Crear un paquete de variantes desde as configuracións](topic:variant-pack) |
| Ecuacións nos números dos paneis dos elementos máis novos (plano, barrido, desmoldeo e similares) | Escríbaas nun script ou con `partcraft set` ([Scripts e liña de comandos](topic:scripts-and-cli)) |
| Unha peza mostrada en polgadas | Os tamaños móstranse en milímetros; escriba `2in` nunha caixa de número ou nunha expresión e convértese en 50,8 |

## Ficheiros

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Editar os elementos propios dun sólido STEP importado (chega sen historial) | Engada ou corte material cos seus propios elementos |
| Ler cores, nomes, estrutura do conxunto e PMI desde STEP | Non dispoñible |
| Exportación glTF, OBJ, IGES, Parasolid; DWG dunha peza 3D (só o paquete de variantes escribe DWG: a folla de debuxo) | STL ou 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou ficheiros propios doutros programas (os ficheiros `.3dm` ábrense como un corpo: [Abrir un modelo .3dm como corpo sólido](topic:open-3dm-files)) | Pida STEP, ou unha malla STL, OBJ ou 3MF pechada: [Abrir unha malla STL, OBJ ou 3MF como corpo sólido](topic:open-meshes) |
| Estrutura do conxunto (unha árbore cos nomes das pezas) no STEP exportado | O STEP de conxunto é un composto dos sólidos colocados |
| Gardar nunha carpeta de súa elección sen a descarga do navegador | Active «preguntar onde gardar» nos axustes de descarga do navegador |

## Debuxos

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Cotas máis alá dos tres tamaños xerais (tamaños de furos, posicións, tolerancias nos tamaños) | Anote o PDF, ou exporte DXF e acote nun programa CAD 2D |
| Máis dunha sección ou detalle; vistas alineadas, rotas e auxiliares | Unha sección e un detalle por debuxo |
| Texto libre, notas e táboas na folla (salvo os bloques de título e revisión) | A nota de acabado, ou texto engadido no PDF |
| Proxección no primeiro diedro, vistas móbiles, follas en vertical | Terceiro diedro, disposición automática, follas horizontais A4–A0 e ANSI A–E |
| Vista de sección en directo: varios planos ou unha caixa de sección á vez, un contorno ao redor do corte, gardar a sección no ficheiro | Un plano de cada vez desde {{ui:Vistas}} › {{ui:Vista de sección}}; ver [Mirar dentro cunha vista de sección](topic:section-view) |
| Debuxos de conxunto con máis vistas, cotas ou globos que poida mover | Unha vista isométrica (ou explosionada) con globos automáticos e a lista de pezas |
| Copiar e pegar símbolos GD&T e de acabado | Coloque cada un con Datum, Marco ou Acabado |
| Manuais: ficheiros STEP en {{ui:Desde outro ficheiro…}} de Illustrate, un modelo enviado directamente desde ModelCraft ou BimCraft, imaxes á calidade do trazador de camiños, 3D interactivo dentro dun PDF | Abra o STEP en Deseño e inicie o manual con {{ui:Desde a peza aberta}}; garde o modelo como glTF (.glb); imaxes PNG da vista 3D; o ficheiro 3D interactivo: ver [Iniciar un manual en Illustrate](topic:illustrate) |

## Conxuntos

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Xuntas de engrenaxe, cremalleira, leva e parafuso; unha xunta de rótula limitada a un cono; xuntas en caras curvas ou entre puntos | Xuntas ríxidas, de rotación, deslizantes, cilíndricas, planas, de rótula e de pasador en ranura en caras planas, cada valor cos seus límites: ver [Construír un conxunto](topic:build-assembly) |
| Pasos de explosión que xiran pezas, e arrastrar pezas que as xuntas colocan | Pasos de explosión rectos; elimine unha xunta para mover unha peza á man |
| Subconxuntos | Un só nivel de pezas |
| Engrenaxes, levas, contacto | Non dispoñible |

## Manufacture

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Desbaste 3D de caras curvas, mecanizado 3D adaptativo, mecanizado de resto; acabado por liña de nivel, lapis, radial e espiral; pasadas adaptativas escritas como arcos | Cara, cavidade, adaptativo 2D, contorno, broca e chaflán de 2,5 eixes: ver [Facer traxectorias e G-code](topic:manufacture); acabado Paralelo e Escama de todo o modelo: ver [Acabado 3D](topic:finish-3d) |
| Traxectorias de 4 e 5 eixes, torneado, sondaxe | Prepare un lado de cada vez co eixe da ferramenta na lapela Preparación |
| Comprobacións de colisión do portaferramentas e do mango | Vixíe os avisos de lonxitude de estría e comprobe no simulador do control |
| Sondaxe, ciclos de vida da ferramenta e de subprogramas, códigos de 4.º e 5.º eixe e de torno nun posprocesador; cargar ficheiros de posprocesador doutros programas | Escriba ou cambie un posprocesador no formato propio de PartCraft: ver [Posprocesadores editables](topic:post-processors) |
| G-code en polgadas (G20) | Só milímetros (G21) |

## Simulación e deseño xerativo

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Estudos non lineais: fluencia, grandes deflexións, contacto entre pezas, fatiga | Estática lineal e frecuencias naturais: ver [Comprobar tensión e deflexión](topic:simulation); manteña o factor de seguridade ben por riba de 1 |
| Pandeo non lineal (imperfeccións, pospandeo, salto brusco) | Factores de carga de pandeo lineais cunha marxe ampla: ver [Calor, tensión térmica e pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiais que dependen da temperatura, inercia na tensión térmica (ondas de choque térmico) | Radiación ao contorno, tensión térmica estacionaria ou cuasiestática no tempo, propiedades constantes: ver [Calor, tensión térmica e pandeo](topic:thermal-and-buckling) |
| Refinamento automático para calor transitorio e estudos con carga térmica; facer a malla máis groseira onde o erro é pequeno; un obxectivo sobre unha magnitude local (a tensión máxima nun punto) | **Refinar automaticamente** para estudos estáticos, de pandeo, de frecuencia natural e térmicos estacionarios, sobre o erro en toda a peza: ver [Comprobar tensión e deflexión](topic:simulation); se non, baixe o tamaño do elemento |
| Cargas en rolamentos e parafusos, forzas remotas, momentos, moles, desprazamentos prescritos | Forzas e presións en caras, gravidade; caras fixas e sen fricción |
| Simulación de conxuntos; materiais que varían segundo a dirección (capas impresas, composites) | Unha peza, un material isótropo |
| Varios fíos de solver para estudos tetraédricos, transferencia de calor e deseño xerativo; calquera fío nunha páxina que non está illada de orixe cruzada | Os estudos voxel, o pandeo, a tensión no tempo e o fluxo laminar usan os fíos onde a páxina o permite: ver [Axustes de PartCraft](topic:settings) |
| Fluxo turbulento con precisión de deseño (o modelo Spalart–Allmaras entra como experimental: fricción de tubo 30 a 34 % alta, reancoraxe tras escalón 21 a 39 % curta; previsto: celdas máis finas preto das paredes), calor no fluxo, fluxo non estacionario con precisión temporal, superficies libres, fluídos non newtonianos, pezas xirando | Fluxo laminar, estacionario e isotermo dun fluído newtoniano, ou o modelo turbulento experimental para patróns cualitativos: ver [Simular fluxo de fluídos](topic:flow-simulation); o panel avisa cando o número de Reynolds supera o laminar |
| Límites de tensión e regras de fabricación (voados, direccións de fresado) no deseño xerativo; varios materiais nunha forma | A forma máis rixida para un volume; comprobe o resultado en Simulación: ver [Facer crecer unha forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido paramétrico editable (suave) | STL, STEP facetado, ou unha peza co resultado como sólido importado facetado |
| Deseño de máquinas eléctricas: un rotor xirando nun estator, par fronte ao ángulo, aceiro en saturación, imáns que perden forza pasado o seu xeonllo, correntes de Foucault e perdas no ferro e no cobre; campos magnéticos en 3D ou en mallas curvas | Magnetostática 2D lineal nunha cuadrícula da biblioteca de análise: bobinas, ferro, imáns permanentes na súa recta de retroceso, entrehierros, indutancia e forza de atracción: ver [Campos magnéticos en 2D](topic:magnetic-fields-2d) |

## Scripts

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Axuda ao pasar o cursor, puntos de ruptura e paso a paso no editor de scripts | Buscar, contraer e completar xa están (ver [Escribir e executar scripts](topic:craftscript)); para o resto, o seu propio editor: {{ui:Gardar}} e {{ui:Abrir}} no grupo Script mover scripts dentro e fóra; as funcións integradas listanse en [A linguaxe CraftScript](topic:craftscript-language) |
| Puntos de ruptura e paso a paso por un script | `disp` e `fprintf` polo camiño; {{key:Mod+Enter}} executa algunhas liñas seleccionadas de cada vez |
| Campos e gráficos que un script mostra debuxados no espazo de traballo de Deseño; scripts que cambian os parámetros da peza | Mostranse no espazo de traballo Script; os scripts len parámetros con `param` (ver [Escribir e executar scripts](topic:craftscript)), e cámbianos na lapela {{ui:Parámetros}} |
| Imaxes e táboas xunto a gráficos; editar un gráfico (zoom, límites de eixe) antes de gardalo | Lado a lado mostra os gráficos; garde un gráfico como PNG, SVG ou CSV e remátao noutro sitio |
| numpy e outros paquetes de Python; Python sen conexión; contraer Python no editor; Pascal Script | A biblioteca estándar de Python, CraftScript e Lua: ver [Scripts en Python](topic:craftscript-python) |
| Pasar funcións de Lua ás funcións integradas; chamar unha función de biblioteca desde Lua por un nome creado durante a execución do script | Escriba o nome da función de biblioteca no script (`cs.static_tet(…)`), ou chámea desde un script CraftScript |

## A aplicación

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Gardado na nube, compartir e historial de versións | Non dispoñible aínda. Garde os ficheiros no seu ordenador e conserve as versións por nome |
| PartCraft como aplicación instalada en iPad e iPhone | Use PartCraft no navegador do dispositivo; en Android e no escritorio tamén funciona en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuais (botón dereito) | Barra de ferramentas e panel dereito |
| Traballar totalmente sen conexión desde un inicio limpo | Só cando a aplicación se gardou para uso sen conexión: ver [Traballar sen conexión](common:offline) |

Comunique o que máis lle falta pola páxina de asistencia do sitio: iso decide o que vén despois.

## Engineer (xeradores e campos)

| Aínda non dispoñible | En cambio, hoxe |
|---|---|
| Cabezais, portos e accesorios no intercambiador de calor xerado; curvas de temperatura para a resistencia do material; perdas en T no colector | Os xeradores constrúen o núcleo e os tubos; engada os accesorios en Deseño; use as cifras do material a temperatura ambiente cun factor de seguridade |
| Engadir xeradores desde o directorio de complementos cun clic | {{ui:Abrir}} no espazo de traballo Engineer engade un xerador desde un ficheiro |
| Un ficheiro de campo máis fino que o tamaño de voxel do propio xerador; ler ficheiros `.vdb` | Garde un campo máis fino desde un script; `.vdb` escríbese, non se le |
| Cálculos de códigos de recipientes a presión | As fórmulas de parede fina e de parede grosa do libro, co factor de seguridade que escolla; non é unha marxe de código |
| Xeradores para as outras aplicacións | Só PartCraft nesta versión |
