---
title: Què encara no està implementat
summary: Tot el que aquesta versió de PartCraft encara no fa, des dels escombrats amb torsió fins a la visualització en polzades, les cotes de dibuix i els subconjunts, i què fer en lloc d'això avui.
keywords: pendent, encara no, límits, limitacions, full de ruta, nucli exacte, arrodoniment, xamfrà, buidat, escombrat, importació STEP, simulació, fabricació, escombrat amb torsió, tangència final del loft, arrodoniment de cara, equacions, polzades, cotes de dibuix, subconjunts, núvol, tauleta, telèfon
from: 9b868162
---

PartCraft és una versió inicial. Aquesta pàgina enumera el que encara no fa, perquè no us hi perdeu a buscar-ho, i el que cal fer en lloc d'això avui. Cap d'aquestes coses no té data.

## Necessita un nucli exacte

Aquesta versió construeix totes les peces amb el nucli de malla (vegeu [El nucli de malla](topic:solid-kernels)). Tot el que hi ha a continuació necessita un nucli de geometria exacta, que aquesta versió encara no té. Les peces desades amb aquestes operacions s'obren igualment: les operacions es queden a l'historial, marcades com a no implementades, i es conserven en desar.

| Encara no implementat | En lloc d'això, avui |
|---|---|
| {{ui:Arrodoniment}} i {{ui:Xamfrà}} sobre arestes arrodonides; arrodoniments amb el radi variable al llarg de l'aresta; arrodoniments que s'uneixen suaument on es troben (el nucli de malla els fa a inglet) | Arrodoniment i Xamfrà funcionen sobre arestes rectes entre cares planes; arrodoniu les altres cantonades al croquis abans d'extrudir ({{ui:Arrodoniment}} en un croquis, {{key:F}}) |
| {{ui:Buida}} que obre cares corbes; parets de gruixos diferents | Obriu cares planes; afegiu material amb extrusions on una paret hagi de ser més gruixuda |
| {{ui:Escombrat}}, {{ui:Loft}}, {{ui:Desmotllament}} sobre cares corbes; extrusió fins a una cara, la cara següent o un vèrtex; extrusions amb conicitat | Extrudiu o feu una revolució, per passos quan calgui; extrudiu fins a una profunditat que hàgiu mesurat |
| {{ui:Nervadura}}, {{ui:Pestanya base}}, {{ui:Pestanya d'aresta}} i patrons plans | Extrudiu la placa o el perfil de la nervadura |
| Superfícies: acabar una {{ui:Forma}} dins de la peça, {{ui:Pegat}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Cosit}}, {{ui:Engrossa}}, {{ui:Superfície desfasada}}, {{ui:Estén la superfície}}, {{ui:Retalla la superfície}} | No disponible |
| Diversos cossos: {{ui:Combina}}, {{ui:Mou el cos}}, {{ui:Escala el cos}}, {{ui:Matriu de camí}}, operacions que en fan un de nou | Un sòlid; les matrius i la simetria copien operacions |
| Croquis, plans, eixos i punts sobre cares que només un nucli exacte pot trobar (una cara feta per un arrodoniment, la paret d'un forat, una cara d'un sòlid importat) | Feu croquis sobre els plans base, els plans de referència i les cares planes d'extrusions i revolucions |
| Un resultat de disseny generatiu obert com a peça o afegit a una (esdevé un sòlid importat) | Baixeu el resultat en STL o STEP |
| Editar les cares corbes d'un fitxer STEP obert com a superfícies exactes; STEP exacte de cares de spline, escombrades i revolucionades d'un fitxer STEP, costats de spline, rosques modelades, cossos i conjunts STL / OBJ / 3MF; STEP per a altres modeladors de peces | {{ui:Obre}} llegeix el STEP com a triangles i conserva per a l'exportació les cares planes, cilindres, cons, esferes i tors del fitxer ([Obre un fitxer STEP](topic:import-step)); {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} escriu exactament cada cara analítica i les conserva com a facetes ([Exportació](topic:export-files#for-other-cad-programs-step)); la macro per a un altre modelador de peces encara escriu |
| Arcs reals a les vistes de dibuix | Les vistes i les vistes de secció es dibuixen a partir de les facetes |
| Volums, àrees i distàncies exactes | {{ui:Mesura}} dóna els números del sòlid facetat, una mica baixos a les peces rodones; un ajust més fi de **Corbes** els acosta més |

Algunes files de les taules següents suggereixen una d'aquestes operacions com a manera de resoldre una altra cosa. Aquests suggeriments s'apliquen quan hi hagi de nou un nucli exacte.

## Operacions

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Arrodoniments de cara, arrodoniments de rodó complet, arrodoniments amb radis fixats en punts al llarg d'una aresta | {{ui:Arrodoniment}} de radi constant o variable lineal; diverses operacions d'arrodoniment |
| Buidats amb gruixos de paret diferents | Un sol gruix de {{ui:Buida}}; afegiu material amb extrusions on una paret hagi de ser més gruixuda |
| Desmotllament en cares de forma lliure (spline) | {{ui:Desmotllament}} funciona en cares planes, cilíndriques i còniques |
| Escombrats amb torsió, escombrats de paret fina i de superfície; tangència final en l'operació Loft; un loft amb una sola guia; camins de spline | {{ui:Escombrat}} amb una orientació fixa o una escala final; un loft amb dues o més guies: vegeu [Escombrat, loft i desmotllament](topic:sweep-loft-draft) |
| Nervadures d'arcs o de splines; nervadures crescudes en escaire respecte del croquis (des d'una vista superior); desmotllament en nervadures; diverses nervadures d'un sol croquis | {{ui:Nervadura}} a partir d'una cadena de línies al pla propi de la nervadura: vegeu [Nervadures i cartel·les](topic:rib) |
| "Fins a" una superfície corba, "fins al següent" que s'aturi en una cara corba | Fins a una cara plana o un pla de referència |
| Forats contraperforats, rosques en polzada i de tub, rosques còniques, sortides de rosca i inicis de rosca xamfranats | Escairat amb una profunditat petita; rosques mètriques ISO i trapezoïdals, cosmètiques o modelades: vegeu [Rosques en eixos i forats, dibuixades o modelades](topic:threads) |
| Extrusions de característica fina | Dibuixeu les dues parets del perfil |
| Còpies de matriu saltades una a una, matrius d'emplenament | Useu operacions separades; matrius al llarg d'una corba: {{ui:Matriu de camí}} |
| Còpies de matrius, simetries, arrodoniments, xamfrans, buidats i sòlids importats | Copieu el croquis o l'operació sobre la qual es construeixen, o feu-ne una matriu |
| Tangència exacta (G1) als punts extraordinaris d'una forma; fusió dels pegats d'una forma en cares més grans | Augmenteu el Nivell de la forma: els pegats aproximats es fan més petits; vegeu [Formes lliures amb Forma](topic:form-surfaces) |
| Una forma feta de diverses peces tancades separades en una sola operació; ponts entre formes | Una peça tancada per operació de Forma; uniu-les amb l'ordre Uneix |
| Triar cossos de superfície a la vista (excepte els punts de retallada i de pegat); arrodoniments de superfície; desretallar; pegats G2; superfícies de Gordon tangents a veïns corbes (la tangència a plans i cares planes sí que està implementada) | Trieu-los pel nom al tauler de l'operació; engrosseu primer i després arrodoniu el sòlid |
| Una llista de cossos a l'historial; deixar els cossos ocults fora de les exportacions | Canvieu el nom i amagueu els cossos a la llista de cossos del tauler de la peça; suprimiu o desactiveu l'operació que va crear un cos per deixar-lo fora |
| Una escala no uniforme que manté els cilindres i els cons analítics; escala no uniforme de superfícies desfasades | {{ui:Escala el cos}} fa que les cares corbes es tanquin en B-splines (dins de 0.0000004 mm); una escala uniforme es manté exacta |
| Combinar cossos de superfície; sumes de Minkowski | Primer {{ui:Cosit}} o {{ui:Engrossa}}, i després {{ui:Combina}} |
| Anàlisi de toleràncies: acumulacions que giren cantonades (bucles vectorials 2D i 3D), sensibilitats calculades a partir de la geometria, Monte Carlo amb altres distribucions, toleràncies de mida en cotes de croquis, tolerància de bonificació per la condició del material | {{ui:Acumulació de toleràncies}} en un conjunt: una direcció, pitjor cas i RSS, toleràncies escrites, des de la tolerància general del caixetí o des de marcs GD&T: vegeu [Acumulacions de tolerància](topic:tolerance-stackup) |
| Imbricació: ordre de tall i entrades de tall, tallar les vores compartides una sola vegada, peces que han d'anar juntes; retalls de rotlles, estoc compartit entre projectes | {{ui:Imbrica les peces planes en fulls…}} amb espaiat, marges, girs i fil: vegeu [Imbrica les peces planes en fulls](topic:nest-flat-parts); les plaques sobrants es conserven i s'usen primer: vegeu [Conserva i reutilitza els sobrants](topic:nest-offcuts); planifiqueu el tall al programari propi de la vostra màquina |
| Xapa: dobles, dobladillos, desplaçaments, pestanyes a inglet i de contorn; pestanyes sobre vores corbes o sobre cares d'una pestanya base doblegada; doblecs dibuixats; tancaments de cantonada; eines de conformat; convertir un sòlid en xapa; el pla d'una pestanya base doblegada amb talls; taules de doblegat | {{ui:Pestanya base}} (una placa o un perfil doblegat), {{ui:Pestanya d'aresta}} a les vores rectes d'una placa amb alleujaments de doblegat, i el patró pla amb un factor K: vegeu [Xapa](topic:sheet-metal) |
| Anàlisi de desmotllament en conjunts; trobar la línia de separació; anàlisi del gruix de paret | {{ui:Anàlisi de desmotllament}} sobre la peça a Disseny: vegeu [Comproveu el desmotllament per a emmotllament i fosa](topic:draft-analysis); obriu cada peça d'un conjunt per comprovar-la |

## Croquis

| Encara no implementat | En lloc d'això, avui |
|---|---|
| El·lipses, arcs tangents, còniques, splines amb grau o pesos fixats (NURBS) | Splines (cúbiques), arcs i cercles amb relacions de tangència |
| Un punt sobre una spline (una relació), relacions de curvatura (G2) | Poseu un punt propi de la spline on ha de passar |
| Còpies desfasades de splines que segueixin els canvis posteriors; desfasaments de cadenes amb cantonades agudes de spline | Torneu a desfasar després del canvi; arrodoniu primer la cantonada |
| Còpies de matriu que segueixin enllaçades a l'original; matrius al llarg d'una corba | Torneu a fer la matriu després d'un canvi |
| Projectar arestes circulars de forma lliure o inclinades, geometria projectada que segueixi la peça | Projecteu arestes circulars rectes i paral·leles, i després acoteu-les |
| Cotes conduïdes (de referència) | Llegiu les mides del tauler o de les dades de la peça |
| Relacions colineals | Paral·lela amb una distància de 0 |
| Enganxar en un altre programa (el porta-retalls del sistema) | Exporteu DXF, STEP, STL o 3MF |
| Escriure arcs, coordenades relatives o polars | Escriviu línies i cercles; dibuixeu arcs amb l'eina Arc |
| Seleccionar geometria sense punter | Cal un clic o un toc |

## Paràmetres i unitats

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Configuracions que canvien materials; una taula de disseny en CSV que desactiva operacions | Les configuracions fixen paràmetres i activen i desactiven operacions: vegeu [Configuracions i taules de disseny](topic:design-tables); `partcraft variants` construeix configuracions desades pel nom, incloses les operacions desactivades: vegeu [Creeu un paquet de variants amb les vostres configuracions](topic:variant-pack) |
| Equacions sobre els números dels taulers propis de les operacions més noves (pla, escombrat, desmotllament i similars) | Escriviu-les en un script o amb `partcraft set` ([Scripts i línia d'ordres](topic:scripts-and-cli)) |
| Una peça mostrada en polzades | Les mides es mostren en mil·límetres; escriviu `2in` en una caixa de número o en una expressió i es convertirà en 50.8 |

## Fitxers

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Editar les operacions pròpies d'un sòlid STEP importat (arriba sense historial) | Afegiu o traieu material amb les vostres pròpies operacions |
| Llegir colors, noms, estructura de conjunt i PMI d'un STEP | No disponible |
| Exportació a glTF, OBJ, IGES, Parasolid; DWG d'una peça 3D (només el paquet de variants escriu un DWG: el full de dibuix) | STL o 3MF per a malles; STEP per a sòlids; DXF per a 2D |
| Obrir IGES, DXF o fitxers propis d'altres programes (els fitxers `.3dm` s'obren com un sol cos: [Obre un model .3dm com a cos sòlid](topic:open-3dm-files)) | Demaneu un STEP, o una malla STL, OBJ o 3MF tancada: [Obre un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de conjunt (un arbre amb els noms de les peces) en el STEP exportat | El STEP de conjunt és un compost de tots els sòlids col·locats |
| Desar en una carpeta que trieu sense la baixada del navegador | Activeu l'opció "preguntar on desar" a la configuració de baixades del navegador |

## Dibuixos

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Cotes més enllà de les tres mides generals (mides dels forats, posicions, toleràncies de mides) | Anoteu el PDF, o exporteu DXF i acoteu-lo en un programa CAD 2D |
| Més d'una secció o detall; vistes alineades, trencades i auxiliars | Una secció i un detall per dibuix |
| Text lliure, notes i taules al full (a part del caixetí i dels blocs de revisió) | La nota d'acabat, o text afegit al PDF |
| Projecció de primer diedre, vistes mòbils, fulls en vertical | Tercer diedre, disposició automàtica, fulls horitzontals A4–A0 i ANSI A–E |
| Vista de secció en directe: diversos plans o una caixa de secció alhora, un contorn al voltant del tall, desar la secció al fitxer | Un pla cada vegada des de {{ui:Vistes}} › {{ui:Vista de secció}}; vegeu [Mireu l'interior amb una vista de secció](topic:section-view) |
| Dibuixos de conjunt amb més vistes, cotes o globus que es puguin moure | Una vista isomètrica (o explosionada) amb globus automàtics i la llista de peces |
| Copiar i enganxar símbols GD&T i d'acabat | Col·loqueu cadascun amb Datum, Marc o Acabat |
| Manuals: fitxers STEP a {{ui:Des d'un altre fitxer…}} d'Illustrate, un model passat directament des de ModelCraft o BimCraft, imatges amb la qualitat del traçador de camins, 3D interactiu dins d'un PDF | Obriu el STEP a Disseny i inicieu el manual {{ui:Des de la peça oberta}}; deseu el model com a glTF (.glb); imatges PNG de la vista 3D; el fitxer 3D interactiu: vegeu [Inicieu un manual a Illustrate](topic:illustrate) |

## Conjunts

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Unions d'engranatge, de cremallera, de lleva i de cargol; una unió de bola limitada a un con; unions sobre cares corbes o entre punts | Unions rígides, de revolució, de lliscament, cilíndriques, planes, de bola i de passador en ranura sobre cares planes, cadascuna amb els seus límits: vegeu [Creeu un conjunt](topic:build-assembly) |
| Passos d'explosió que giren peces, i arrossegar peces que col·loquen les unions | Passos d'explosió rectes; suprimiu una unió per moure una peça a mà |
| Subconjunts | Només un nivell de peces |
| Engranatges, lleves, contacte | No disponible |

## Fabricació

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Desbast 3D de cares corbes, buidatge adaptatiu 3D, mecanitzat de restes; acabat per línia d'aigua, a llapis, radial i en espiral; passades adaptatives escrites com a arcs | Cara, butxaca, adaptatiu 2D, contorn, perforació i xamfrà de 2.5 eixos: vegeu [Creeu trajectòries i G-code](topic:manufacture); acabat Paral·lel i Escama (Scallop) de tot el model: vegeu [Acabat 3D](topic:finish-3d) |
| Trajectòries de 4 i 5 eixos, torn, palpat | Configureu una cara cada vegada amb l'eix de l'eina a la pestanya Configuració |
| Comprovacions de col·lisió del portaeines i del mànec | Vigileu els avisos de longitud de les estries i comproveu-ho al simulador del vostre control |
| Palpat, cicles de vida de l'eina i de subprogrames, codis de 4.º i 5.º eix i de torn en un postprocessador; carregar fitxers de postprocessador d'altres programes | Escriviu o canvieu un postprocessador en el format propi de PartCraft: vegeu [Postprocessadors que podeu editar](topic:post-processors) |
| G-code en polzades (G20) | Només mil·límetres (G21) |

## Simulació i disseny generatiu

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Estudis no lineals: fluència, grans deformacions, contacte entre peces, fatiga | Estàtica lineal i freqüències pròpies: vegeu [Comproveu la tensió i la deformació](topic:simulation); manteniu el factor de seguretat ben per sobre de 1 |
| Vinclament no lineal (imperfeccions, postvinclament, salt brusc) | Factors de càrrega de vinclament lineals amb un marge generós: vegeu [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling) |
| Radiació entre cares (factors de visió), resistència de contacte, materials que depenen de la temperatura, inèrcia en la tensió tèrmica (ones de xoc tèrmic) | Radiació cap a l'entorn, tensió tèrmica estacionària o quasiestàtica al llarg del temps, propietats constants: vegeu [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling) |
| Refinament automàtic per a calor transitòria i estudis amb càrrega tèrmica; fer la malla més grossa on l'error és petit; un objectiu sobre una quantitat local (la tensió màxima en un punt) | **Refina automàticament** per a estudis estàtics, de vinclament, de freqüències pròpies i tèrmics estacionaris, sobre l'error de tota la peça: vegeu [Comproveu la tensió i la deformació](topic:simulation); en cas contrari, reduïu la mida de l'element |
| Càrregues de coixinet i de cargol, forces remotes, moments, molles, desplaçaments prescrits | Forces i pressions sobre cares, gravetat; cares fixes i sense fricció |
| Simulació de conjunts; materials que varien segons la direcció (capes impreses, compòsits) | Una peça, un material isòtrop |
| Diversos fils del resolutor per a estudis tetraèdrics, transmissió de calor i disseny generatiu; qualsevol fil en una pàgina que no està aïllada d'origen creuat | Els estudis de vòxels, el vinclament, la tensió al llarg del temps i el flux laminar usen els fils on la pàgina ho permet: vegeu [Configuració de PartCraft](topic:settings) |
| Flux turbulent amb precisió de disseny (el model Spalart–Allmaras hi és com a experimental: fricció de tub un 30 a 34 % més alta, reenganxament després d'un graó enrere un 21 a 39 % més curt; previst: cel·les més fines a prop de les parets), calor en el flux, flux no estacionari (amb precisió temporal), superfícies lliures, fluids no newtonians, peces en rotació | Flux laminar, estacionari i isotermal d'un fluid newtonià, o el model turbulent experimental per a patrons qualitatius: vegeu [Simuleu el flux de fluids](topic:flow-simulation); el tauler avisa quan el nombre de Reynolds supera el règim laminar |
| Límits de tensió i regles de fabricació (voladissos, direccions de fresat) en disseny generatiu; diversos materials en una forma | La forma més rígida per a un volum; comproveu el resultat a Simulació: vegeu [Feu créixer una forma a partir de càrregues](topic:generative-design) |
| Un resultat com a sòlid editable (llis, paramètric) | STL, STEP facetat o una peça amb el resultat com a sòlid importat facetat |
| Disseny de màquines elèctriques: un rotor que gira en un estator, parell respecte de l'angle, acer en saturació, imants que perden força després del genoll de la corba, corrents de Foucault i pèrdues de ferro i de coure; camps magnètics en 3-D o sobre malles corbes | Magnetostàtica lineal 2-D sobre una quadrícula a la biblioteca d'anàlisi: bobines, ferro, imants permanents a la seva recta de recuperació, entreferros, inductància i força d'atracció: vegeu [Camps magnètics en 2-D](topic:magnetic-fields-2d) |

## Scripts

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Ajuda en passar el punter, punts d'interrupció i pas a pas a l'editor de scripts | Cercar, plegar i completar hi són (vegeu [Escriviu i executeu scripts](topic:craftscript)); per a la resta, el vostre propi editor: {{ui:Desa}} i {{ui:Obre}} al grup Script mouen els scripts cap a dins i cap a fora; les funcions integrades són a [El llenguatge CraftScript](topic:craftscript-language) |
| Punts d'interrupció i pas a pas per un script | `disp` i `fprintf` pel camí; {{key:Mod+Enter}} executa unes quantes línies seleccionades cada vegada |
| Camps i gràfics que mostra un script dibuixats a l'espai de treball Disseny; scripts que canvien els paràmetres de la peça | Es mostren a l'espai de treball Script; els scripts llegeixen paràmetres amb `param` (vegeu [Escriviu i executeu scripts](topic:craftscript)), els canvien a la pestanya {{ui:Paràmetres}} |
| Imatges i taules al costat de gràfics; editar un gràfic (zoom, límits d'eixos) abans de desar-lo | El mode Costat a costat mostra els gràfics; deseu un gràfic com a PNG, SVG o CSV i acabeu-lo en un altre lloc |
| numpy i altres paquets de Python; Python fora de línia; plegar Python a l'editor; Pascal Script | La biblioteca estàndard de Python, CraftScript i Lua: vegeu [Scripts en Python](topic:craftscript-python) |
| Passar funcions de Lua a funcions integrades; cridar una funció de biblioteca des de Lua pel nom construït mentre s'executa el script | Escriviu el nom de la funció de biblioteca al script (`cs.static_tet(…)`), o crideu-la des d'un script de CraftScript |

## L'aplicació

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Desament al núvol, compartició i historial de versions | Encara no disponible. Deseu els fitxers a l'ordinador i guardeu les versions pel nom |
| PartCraft com a aplicació instal·lada a iPad i iPhone | Useu PartCraft al navegador del dispositiu; a Android i a l'escriptori també funciona a CadCraft Studio (getcadcraft.com/download) |
| Menús contextuals (clic dret) | Barra d'eines i tauler dret |
| Treballar del tot fora de línia des d'un inici net | Només quan l'aplicació s'ha desat per a l'ús fora de línia: vegeu [Treball fora de línia](common:offline) |

Informeu del que més trobeu a faltar a través de la pàgina de suport del lloc: ajuda a decidir què ve després.

## Engineer (generadors i camps)

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Col·lectors, ports i accessoris a l'intercanviador de calor generat; corbes de temperatura per a la resistència del material; pèrdues de te al col·lector | Els generadors construeixen el nucli i els tubs; afegiu els accessoris a Disseny; useu les xifres del material a temperatura ambient amb un factor de seguretat |
| Afegir generadors des del directori de complements amb un sol clic | {{ui:Obre}} a l'espai de treball Engineer afegeix un generador des d'un fitxer |
| Un fitxer de camp més fi que la mida de vòxel del propi generador; llegir fitxers `.vdb` | Deseu un camp més fi des d'un script; `.vdb` s'escriu, no es llegeix |
| Càlculs segons la normativa de recipients a pressió | Les fórmules clàssiques de paret fina i de paret gruixuda, amb el factor de seguretat que trieu; no és un marge de normativa |
| Generadors per a les altres aplicacions | Només PartCraft en aquesta versió |
