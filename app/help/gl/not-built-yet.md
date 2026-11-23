---
title: O que aínda non está construído
summary: Todo o que esta versión de PartCraft aínda non fai, desde barridos con torsión ata a visualización en polgadas, cotas de debuxo e subconxuntos, con indicación do que facer hoxe no seu lugar.
keywords: que falta, aínda non, límites, limitacións, plan de desenvolvemento, kernel exacto, redondeo, chaflán, casca, barrido, unión de perfís, importar STEP, simulación, fabricación, barrido con torsión, tanxencia no extremo da unión, redondeo de cara, ecuacións, polgadas, cotas de debuxo, subconxuntos, nube, tableta, teléfono
from: 97b10a29
---

PartCraft é unha versión inicial. Esta páxina lista o que aínda non fai, para que non o busque, e o que facer hoxe no seu lugar. Nada desta lista ten data.

## Precisa un kernel exacto

Esta versión constrúe todas as pezas co kernel de malla (vexa [O kernel de malla](topic:solid-kernels)). Todo o que segue precisa un kernel de xeometría exacto, que esta versión aínda non ten. As pezas gardadas con estas funcións ábrense igual: as funcións quedan no historial, marcadas como non construídas, e consérvanse ao gardar.

| Aínda non construído | En vez diso, hoxe |
|---|---|
| {{ui:Redondeo}} e {{ui:Chaflán}} en arestas redondas; redondeos cuxo raio cambia ao longo da aresta; redondeos mesturados suavemente onde se xuntan (o kernel de malla os corta a inglete) | Redondeo e chaflán funcionan en arestas rectas entre caras planas; redondee as outras esquinas no esbozo antes de extruír ({{ui:Redondeo}} nun esbozo, {{key:F}}) |
| {{ui:Casca}} que abre caras curvas; paredes de grosores diferentes | Abra caras planas; engada material con extrusións onde unha parede deba ser máis grosa |
| {{ui:Barrido}}, {{ui:Unión de perfís}}, {{ui:Desmoldeo}} en caras curvas; extruír ata unha cara, a seguinte cara ou un vértice; extrusións cónicas | Extruír ou xirar, en pasos onde faga falta; extruír a unha profundidade que medise |
| {{ui:Nervadura}}, {{ui:Aba base}}, {{ui:Aba de aresta}} e patróns planos | Extruír a placa ou o perfil da nervadura |
| Superficies: rematar un {{ui:Forma}} na peza, {{ui:Parche}}, {{ui:Loft de superficie}}, {{ui:Superficie de Gordon}}, {{ui:Coser}}, {{ui:Engrosar}}, {{ui:Superficie desprazada}}, {{ui:Estender superficie}}, {{ui:Recortar superficie}} | Non dispoñible |
| Varios corpos: {{ui:Combinar}}, {{ui:Mover corpo}}, {{ui:Escalar corpo}}, {{ui:Patrón de traxectoria}}, funcións que crean un corpo novo | Un só sólido; os patróns e os espellos copian funcións |
| Esbozos, planos, eixos e puntos en caras que só un kernel exacto pode atopar (unha cara feita por un redondeo, a parede dun burato, unha cara dun sólido importado) | Esbozar en planos base, planos de referencia e nas caras planas de extrusións e revolucións |
| Un resultado de deseño xenerativo aberto como peza ou engadido a ela (convértese nun sólido importado) | Descargue o resultado como STL ou STEP |
| Editar as caras curvas dun ficheiro STEP aberto como superficies exactas; STEP exacto de caras de spline, barridas e revolucións dun ficheiro STEP, lados de spline, roscas modeladas, corpos STL / OBJ / 3MF e conxuntos; STEP para outros modeladores de pezas | {{ui:Abrir}} lee o STEP como triángulos e conserva as caras planas, cilindros, conos, esferas e toros do ficheiro para a exportación ([Abrir un ficheiro STEP](topic:import-step)); {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe cada cara analítica de forma exacta e conserva esas como facetas ([Exportar](topic:export-files#for-other-cad-programs-step)); a macro para outro modelador de pezas segue escribindo |
| Arcos verdadeiros nas vistas de debuxo | As vistas e as vistas de sección debúxanse a partir das facetas |
| Volumes, áreas e distancias exactas | {{ui:Medir}} dá os números do sólido facetado, algo baixos en pezas redondas; un axuste máis fino de **Curvas** achégaos |

Algunhas filas das táboas seguintes suxiren unha destas funcións como forma de resolver outra cousa. Esas suxestións aplícanse cando volva un kernel exacto.

## Funcións

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Redondeos de cara, redondeos completos, redondeos con raios fixados en puntos dunha aresta | {{ui:Redondeo}} constante ou variable lineal; varias funcións de redondeo |
| Cascas con grosores de parede diferentes | Un só grosor de {{ui:Casca}}; engada material con extrusións onde unha parede deba ser máis grosa |
| Desmoldeo en caras de forma libre (spline) | {{ui:Desmoldeo}} funciona en caras planas, cilíndricas e cónicas |
| Barridos con torsión, barridos de paredes finas e de superficie; tanxencia no extremo da función Unión de perfís; unha unión con un só carril-guía; trazados de spline | {{ui:Barrido}} con orientación fixa ou escala no extremo; unha unión con dous ou máis carrís-guía: vexa [Barrido, unión de perfís e desmoldeo](topic:sweep-loft-draft) |
| Nervaduras feitas con arcos ou splines; nervaduras crecidas en cadrado respecto do esbozo (desde unha vista superior); desmoldeo en nervaduras; varias nervaduras dun mesmo esbozo | {{ui:Nervadura}} a partir dunha cadea de liñas no plano propio da nervadura: vexa [Nervaduras e cartabóns](topic:rib) |
| «Ata» unha superficie curva, «ata o seguinte» que se detén nunha cara curva | Ata unha cara plana ou un plano de referencia |
| Buratos contrabarrenados, roscas en polgadas ou de tubo, roscas cónicas, saídas de rosca e inicios de rosca chanfrados | Contrabarrenado cunha profundidade pequena; roscas métricas ISO e trapezoidais, cosméticas ou modeladas: vexa [Roscas en eixos e furos, debuxadas ou modeladas](topic:threads) |
| Extrusións de funcións de paredes finas | Debuxe os dous lados do perfil |
| Copias de patróns saltadas unha a unha, patróns de recheo | Use funcións separadas; patróns ao longo dunha curva: {{ui:Patrón de traxectoria}} |
| Copias de patróns, espellos, redondeos, chafláns, cascas e sólidos importados | Copie o esbozo ou a función sobre a que están construídos, ou fágalles un patrón |
| Tanxencia exacta (G1) nos puntos extraordinarios dunha forma; unir os parches dunha forma en caras máis grandes | Suba o Nivel da forma: os parches aproximados fanse máis pequenos; vexa [Formas libres con Forma](topic:form-surfaces) |
| Unha forma formada por varias pezas pechadas separadas nunha mesma función; pontes entre formas | Unha peza pechada por función Forma; únaas con Unir |
| Seleccionar corpos de superficie na vista (salvo os puntos de recorte e de parche); redondeos de superficie; desrecortar; parches G2; superficies de Gordon tanxentes a veciños curvos (tanxentes a planos e caras planas están construídas) | Escóllaos polo nome no panel da función; engrosar primeiro e logo redondear o sólido |
| Unha lista de corpos no historial; deixar fóra da exportación os corpos ocultos | Cambie o nome e oculte os corpos no panel de corpos da peza; borre ou suprima a función que fixo un corpo para deixalo fóra |
| Unha escala non uniforme que manteña cilindros e conos analíticos; escala non uniforme de superficies desprazadas | {{ui:Escalar corpo}} fai que as caras curvas sexan B-splines pechadas (dentro de 0,0000004 mm); unha escala uniforme sigue sendo exacta |
| Combinar corpos de superficie; sumas de Minkowski | Primeiro {{ui:Coser}} ou {{ui:Engrosar}}, despois {{ui:Combinar}} |
| Análise de tolerancias: cadeas de tolerancias que dan voltas (bucles vectoriais 2D e 3D), sensibilidades calculadas a partir da xeometría, Monte Carlo con outras distribucións, tolerancias de tamaño en cotas do esbozo, tolerancia de bonificación por condición do material | {{ui:Cadea de tolerancias}} nun conxunto: unha dirección, peor caso e RSS, tolerancias escritas, desde a tolerancia xeral do cartouche ou desde os marcos GD&T: vexa [Cadeas de tolerancias](topic:tolerance-stackup) |
| Aniñado: orde de corte e entradas, corte de arestas compartidas unha vez, pezas que deben manterse xuntas; restos de rolos, material compartido entre proxectos | {{ui:Encaixar pezas planas en follas…}} con espazamento, marxes, xiros e fibra: vexa [Encaixar pezas planas en follas](topic:nest-flat-parts); as placas sobrantes gárdanse e úsanse primeiro: vexa [Gardar e reutilizar sobras](topic:nest-offcuts); planifique o corte no software do seu cortador |
| Chapa metálica: dobras, quebras, flanxes en meia inglete e de contorno; flanxes en arestas curvas ou nas caras dunha aba base dobrada; dobras esbozadas; pechamentos de esquina; ferramentas de conformado; converter un sólido en chapa; o desenvolvemento dunha aba base dobrada con cortes; táboas de dobra | {{ui:Aba base}} (unha placa ou un perfil dobrado), {{ui:Aba de aresta}} nas arestas rectas dunha placa con alivios de dobra, e o patrón plano cun factor K: vexa [Chapa metálica](topic:sheet-metal) |
| Análise de desmoldeo en conxuntos; busca da liña de partición; análise do grosor de parede | {{ui:Análise de desmoldeo}} na peza en Deseño: vexa [Comprobar o desmoldeo para moldeo e fundición](topic:draft-analysis); abra cada peza dun conxunto para a comprobar |

## Esbozos

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Elipses, arcos tanxentes, cónicas, splines con grao ou pesos fixados (NURBS) | Splines (cúbicas), arcos e círculos con relacións de Tanxente |
| Un punto sobre unha spline (unha relación), relacións de curvatura (G2) | Ponga o punto propio da spline onde debe pasar |
| Copias desprazadas de splines que sigan cambios posteriores; desprazamentos de cadeas con esquinas agudas de spline | Desprace de novo despois do cambio; redondee antes a esquina |
| Copias de patróns que sigan ligadas ao orixinal; patróns ao longo dunha curva | Faga de novo o patrón despois dun cambio |
| Proxectar curvas de forma libre ou circulares inclinadas, xeometría proxectada que siga á peza | Proxecte arestas circulares rectas e paralelas, e logo acote |
| Cotas conducidas (de referencia) | Lea os tamaños no panel ou nos datos da peza |
| Relacións de colinealidade | Paralela con distancia 0 |
| Pegar noutro programa (o portapapeis do sistema) | Exporte DXF, STEP, STL ou 3MF |
| Escribir arcos, coordenadas relativas ou polares | Escriba liñas e círculos; debuxe os arcos coa ferramenta Arco |
| Seleccionar xeometría sen punteiro | Precisa un clic ou un toque |

## Parámetros e unidades

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Configuracións que cambian materiais; unha táboa de deseño en CSV que apaga funcións | As configuracións fixan parámetros e activan e desactivan funcións: vexa [Configuracións e táboas de deseño](topic:design-tables); `partcraft variants` crea configuracións gardadas por nome, con funcións apagadas incluídas: vexa [Facer un paquete de variantes das súas configuracións](topic:variant-pack) |
| Ecuacións nos números dos paneis das funcións máis novas (plano, barrido, desmoldeo e similares) | Escríbaas nun script ou con `partcraft set` ([Scripts e liña de comandos](topic:scripts-and-cli)) |
| Unha peza amosada en polgadas | Os tamaños amósanse en milímetros; escriba `2in` nunha caixa numérica ou nunha expresión e pasa a 50,8 |

## Ficheiros

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Editar as funcións propias dun sólido STEP importado (chega sen historial) | Engada ou corte material con funcións propias |
| Ler cores, nomes, estrutura de conxunto e PMI desde STEP | Non dispoñible |
| Exportar glTF, OBJ, IGES, Parasolid; DWG dunha peza 3D (só o paquete de variantes escribe un DWG: a folla de debuxo) | STL ou 3MF para mallas; STEP para sólidos; DXF para 2D |
| Abrir IGES, DXF ou ficheiros propios doutros programas (os ficheiros `.3dm` ábrense como un corpo: [Abrir un modelo .3dm como corpo sólido](topic:open-3dm-files)) | Pida STEP, ou unha malla STL, OBJ ou 3MF pechada: [Abrir un STL, OBJ ou 3MF](topic:open-meshes) |
| Estrutura de conxunto (unha árbore cos nomes das pezas) no STEP exportado | O STEP de conxunto é un composto dos sólidos colocados |
| Gardar nunha cartafol de escolla propia sen a descarga do navegador | Active «preguntar onde gardar» nos axustes de descarga do navegador |

## Debuxos

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Cotas alén das tres dimensións globais (tamaños de buratos, posicións, tolerancias de tamaños) | Anote o PDF, ou exporte DXF e acote nun programa CAD 2D |
| Máis dunha sección ou dun detalle; vistas alineadas, rotas ou auxiliares | Unha sección e un detalle por debuxo |
| Texto libre, notas e táboas na folla (salvo os cartuchos de título e de revisión) | A nota de acabado, ou texto engadido no PDF |
| Proxección de primeiro diedro, vistas móbiles, follas en vertical | Terceiro diedro, disposición automática, follas horizontais A4–A0 e ANSI A–E |
| Vista de sección en directo: varios planos ou unha caixa de sección á vez, contorno arredor do corte, gardar a sección no ficheiro | Un plano de cada vez desde {{ui:Vistas}} › {{ui:Vista de sección}}; vexa [Mirar dentro cunha vista de sección](topic:section-view) |
| Debuxos de conxunto con máis vistas, cotas ou globos que poida mover; vista isométrica (ou explosionada) única con globos automáticos e lista de pezas | Unha vista isométrica (ou explosionada) con globos automáticos e a lista de pezas |
| Copiar e pegar símbolos GD&T e de acabado | Coloque cada un con Datum, Marco ou Acabado |
| Manuais: ficheiros STEP en {{ui:Desde outro ficheiro…}} de Illustrate, un modelo enviado directamente desde ModelCraft ou BimCraft, imaxes á calidade do trazador de camiños, 3D interactivo dentro dun PDF | Abra o STEP en Deseño e inicie o manual con {{ui:Desde a peza aberta}}; garde o modelo como glTF (.glb); imaxes PNG da vista 3D; o ficheiro 3D interactivo: vexa [Iniciar un manual en Illustrate](topic:illustrate) |

## Conxuntos

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Xuntas de engrenaxe, cremalleira, leva e parafuso; unha xunta esférica limitada a un cono; xuntas en caras curvas ou entre puntos | Xuntas rixas, de revolución, de corredeira, cilíndricas, planas, esféricas e de pasador en ranura, en caras planas, cada valor cos seus propios límites: vexa [Construír un conxunto](topic:build-assembly) |
| Pasos de explosión que xiran pezas, e arrastrar pezas que as xuntas sitúan | Pasos de explosión rectos; quite unha xunta para mover unha peza a man |
| Subconxuntos | Só un nivel de pezas |
| Engrenaxes, levas, contacto | Non dispoñible |

## Fabricación

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Limpeza adaptativa 3D e desbaste desprazado en 3D; acabado de nivel de auga, de lapis, radial e en espiral; pasadas adaptativas escritas como arcos | Desbaste 3D en filas rectas e mecanizado de restos: vexa [Desbaste 3D e mecanizado de restos](topic:rough-3d); acabado {{ui:Paralela}} e {{ui:Scallop}}: vexa [Acabado 3D](topic:finish-3d); cara, cavidade, adaptativo 2D, contorno, taladrado e chaflán de 2,5 eixos: vexa [Crear traxectorias e G-code](topic:manufacture) |
| Corte de swarf, traxectorias de fluxo e desbaste de varios eixos, códigos de plano de traballo inclinado (G68.2), comprobacións de colisión do portaferramentas e da máquina; simulación de cortes de 5 eixos e rotativos | Unha ferramenta inclinada para calquera operación, acabado de 5 eixos con fresa de punta esférica e acabado rotativo de 4º eixo: vexa [Mecanizado de 4 e 5 eixos](topic:multi-axis) |
| Mandrinado e roscas interiores nun torno, ciclos G71/G76, arcos nas traxectorias de torneado, ferramentas vivas, subhusillo | Torneado exterior: cara, desbaste, acabado, ranura, separación, rosca, taladrado no centro: vexa [Torneado nun torno](topic:turning) |
| Sondar un ángulo ou unha esquina, un axustador de ferramenta, medir un tamaño contra unha tolerancia | Sondar unha cara, un lado, un burato ou un saínte para fixar o desprazamento de orixe: vexa [Sondaxe](topic:probing) |
| Comprobacións de colisión do portaferramentas e do vástago | Vixíe os avisos de lonxitude de canle e comprobe no simulador do seu control |
| Vida útil da ferramenta e ciclos de subprogramas nun post; cargar ficheiros de post doutros programas | Escriba ou cambie un post no formato propio de PartCraft: vexa [Post-procesadores editables](topic:post-processors) |
| G-code en polgadas (G20) | Só milímetros (G21) |

## Simulación e deseño xenerativo

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Estudos non lineais: fluencia, grandes deformacións, contacto entre pezas, fatiga | Estática lineal e frecuencias naturais: vexa [Comprobar tensión e deformación](topic:simulation); manteña o factor de seguridade ben por riba de 1 |
| Pandeo non lineal (imperfeccións, pospandeo, salto brusco) | Factores lineais de carga de pandeo cunha marxe ampla: vexa [Calor, tensión térmica e pandeo](topic:thermal-and-buckling) |
| Radiación entre caras (factores de forma), resistencia de contacto, materiais que dependen da temperatura, inercia na tensión térmica (ondas de choque térmico) | Radiación ao entorno, tensión térmica estacionaria ou cuasi estática no tempo, propiedades constantes: vexa [Calor, tensión térmica e pandeo](topic:thermal-and-buckling) |
| Refinamento automático para calor transitorio e estudos con carga térmica; facer a malla máis grosa onde o erro é pequeno; un obxectivo sobre unha cantidade local (a tensión máxima nun punto) | **Refinar automaticamente** para estudos estáticos, de pandeo, de frecuencias naturais e térmicos estacionarios, sobre o erro en toda a peza: vexa [Comprobar tensión e deformación](topic:simulation); se non, baixe o tamaño do elemento |
| Cargas en parafusos e rolamentos, forzas remotas, momentos, molas, desprazamentos prescritos | Forzas e presións sobre caras, gravidade; caras fixas e sen fricción |
| Simulación de conxuntos; materiais que varían segundo a dirección (capas impresas, compostos) | Unha peza, un material isótropo |
| Varias fíos de cálculo para estudos tetraédricos, transferencia de calor e deseño xenerativo; calquera fío nunha páxina que non está illada de orixe cruzada | Os estudos voxel, o pandeo, a tensión no tempo e o fluxo laminar usan os fíos onde a páxina o permite: vexa [Axustes de PartCraft](topic:settings) |
| Fluxo turbulento con precisión de deseño (o modelo Spalart–Allmaras está incluído como experimental: fricción en tubos 30 a 34 % alta, reatamento tras escalón 21 a 39 % curto; previsto: celas máis finas preto das paredes), calor no fluxo, fluxo non estacionario (de tempo exacto), superficies libres, fluídos non newtonianos, pezas xiratorias | Fluxo laminar, estacionario, isotermo dun fluído newtoniano, ou o modelo turbulento experimental para patróns cualitativos: vexa [Simular fluxo de fluídos](topic:flow-simulation); o panel avisa cando o número de Reynolds supera o laminar |
| Límites de tensión e regras de fabricación (voados, sentidos de fresado) no deseño xenerativo; varios materiais nunha forma | A forma máis rixida para un volume; comprobe o resultado en Simulación: vexa [Facer crecer unha forma a partir de cargas](topic:generative-design) |
| Un resultado como sólido editable (suave, paramétrico) | STL, STEP facetado ou unha peza co resultado como sólido importado facetado |
| Deseño de máquinas eléctricas: un rotor que xira nun estator, par en función do ángulo, aceiro en saturación, imáns que perden forza pasado o xeonllo, correntes de Foucault e perdas de ferro e cobre; campos magnéticos en 3D ou en mallas curvas | Magnetostática 2D lineal nunha malla na biblioteca de análise: bobinas, ferro, imáns permanentes na súa recta de retroceso, entrehierros, indutancia e forza de atracción: vexa [Campos magnéticos en 2D](topic:magnetic-fields-2d) |

## Scripts

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Axuda ao pasar o punteiro, puntos de ruptura e avance paso a paso no editor de scripts | Buscar, pregar e completar xa están (vexa [Escribir e executar scripts](topic:craftscript)); o resto, no seu propio editor: {{ui:Gardar}} e {{ui:Abrir}} no grupo Script move os scripts dentro e fóra; as funcións integradas listanse en [A linguaxe CraftScript](topic:craftscript-language) |
| Puntos de ruptura e avance paso a paso por un script | `disp` e `fprintf` polo camiño; {{key:Mod+Enter}} executa unhas poucas liñas seleccionadas por vez |
| Campos e gráficos que un script amosa debuxados no espazo de traballo Deseño; scripts que cambian os parámetros da peza | Amósanse no espazo de traballo Script; os scripts len parámetros con `param` (vexa [Escribir e executar scripts](topic:craftscript)) e cámbianos na lapela {{ui:Parámetros}} |
| Imaxes e táboas ao lado de gráficos; editar un gráfico (zoom, límites de eixos) antes de gardalo | Ao lado amosa os gráficos; garde un gráfico como PNG, SVG ou CSV e acábeo noutro lugar |
| numpy e outros paquetes de Python; Python sen conexión; plegar Python no editor; Pascal Script | A biblioteca estándar de Python, CraftScript e Lua: vexa [Scripts en Python](topic:craftscript-python) |
| Pasar funcións de Lua ás funcións integradas; chamar unha función de biblioteca desde Lua por un nome construído durante a execución do script | Escriba o nome da función de biblioteca no script (`cs.static_tet(…)`), ou chámea desde un script CraftScript |

## A aplicación

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Gardado na nube, compartición e historial de versións | Non dispoñible por agora. Garde os ficheiros no seu ordenador e conserve as versións polo nome |
| PartCraft como aplicación instalada en iPad e iPhone | Use PartCraft no navegador do dispositivo; en Android e no escritorio funciona tamén en CadCraft Studio (getcadcraft.com/download) |
| Menús contextuais (botón dereito) | Barra de ferramentas e panel dereito |
| Traballar totalmente sen conexión desde un inicio limpo | Só cando a aplicación se gardou para uso sen conexión: vexa [Traballar sen conexión](common:offline) |

Informe do que máis lle falte a través da páxina de asistencia do sitio: iso decide o que vén despois.

## Engineer (xeradores e campos)

| Aínda non construído | En vez diso, hoxe |
|---|---|
| Colectores, portos e accesorios no intercambiador de calor xerado; curvas de temperatura para a resistencia do material; perdas en T no colector | Os xeradores constrúen o núcleo e os tubos; engada os accesorios en Deseño; use os datos do material a temperatura ambiente cun factor de seguridade |
| Engadir xeradores desde o directorio de complementos cun só clic | {{ui:Abrir}} no espazo de traballo Engineer engade un xerador desde un ficheiro |
| Un ficheiro de campo máis fino que o tamaño de vóxel propio do xerador; ler ficheiros `.vdb` | Garde un campo máis fino desde un script; `.vdb` escríbese, non se le |
| Cálculos de recipientes a presión segundo código | As fórmulas clásicas de parede fina e de parede grosa, co factor de seguridade que escolla; non é unha marxe de código |
| Xeradores para as outras aplicacións | Só PartCraft nesta versión |
