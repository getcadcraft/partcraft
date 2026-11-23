---
title: Què encara no està implementat
summary: Tot el que aquesta versió del PartCraft encara no fa, des dels escombrats amb torsió fins a la visualització en polzades, l'acotació de plànols i els subconjunts, i què cal fer avui en lloc d'això.
keywords: que falta, encara no, límits, limitacions, full de ruta, nucli exacte, arrodoniment, xamfrà, buida, escombrat, loft, importació step, simulació, fabricació, escombrat amb torsió, tangència final del loft, arrodoniment de cara, equacions, polzades, acotació de plànols, subconjunts, núvol, tauleta, telèfon
from: 97b10a29
---

El PartCraft és una versió inicial. Aquesta pàgina enumera el que encara no fa, perquè no hi busqueu, i què cal fer avui en lloc d'això. Aquí no hi ha cap data prevista.

## Necessita un nucli exacte

Aquesta versió construeix totes les peces amb el nucli de malla (vegeu [El nucli de malla](topic:solid-kernels)). Tot el que hi ha a continuació necessita un nucli de geometria exacta, que aquesta versió encara no té. Les peces desades amb aquestes operacions s'obren igualment: les operacions es mantenen a l'historial, marcades com a no implementades, i es conserven en desar.

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| {{ui:Arrodoniment}} i {{ui:Xamfrà}} en arestes rodones; arrodoniments amb radi que canvia al llarg de l'aresta; arrodoniments barrejats suaument on es troben (el nucli de malla els talla a inglet) | Arrodoniment i Xamfrà funcionen en arestes rectes entre cares planes; arrodoniu les altres cantonades al croquis abans d'extruir ({{ui:Arrodoniment}} en un croquis, {{key:F}}) |
| {{ui:Buida}} que obre cares corbes; parets de gruixos diferents | Obriu cares planes; afegiu material amb extrusions on una paret ha de ser més gruixuda |
| {{ui:Escombrat}}, {{ui:Loft}}, {{ui:Desmotllament}} sobre cares corbes; extrusió fins a una cara, la següent cara o un vèrtex; extrusions amb conicitat | Extruïu o gireu, per passos si cal; extruïu fins a una profunditat que mesureu |
| {{ui:Nervadura}}, {{ui:Pestanya base}}, {{ui:Pestanya d'aresta}} i patrons plans | Extruïu la placa o el perfil de la nervadura |
| Superfícies: acabar una {{ui:Forma}} dins de la peça, {{ui:Pegat}}, {{ui:Loft de superfície}}, {{ui:Superfície de Gordon}}, {{ui:Cosit}}, {{ui:Engrossa}}, {{ui:Superfície desfasada}}, {{ui:Estén la superfície}}, {{ui:Retalla la superfície}} | No disponible |
| Diversos cossos: {{ui:Combina}}, {{ui:Mou el cos}}, {{ui:Escala el cos}}, {{ui:Matriu de camí}}, operacions que creen un cos nou | Un sòlid; les matrius i la simetria copien operacions |
| Croquis, plans, eixos i punts sobre cares que només un nucli exacte pot trobar (una cara feta per un arrodoniment, la paret d'un forat, una cara d'un sòlid importat) | Croquis sobre plans base, plans de referència i les cares planes d'extrusions i revolucions |
| Un resultat de disseny generatiu obert com a peça o afegit a una peça (es converteix en un sòlid importat) | Baixeu el resultat com a STL o STEP |
| Editar les cares corbes d'un fitxer STEP obert com a superfícies exactes; STEP exacte de cares de splines, d'escombrat i de revolució d'un fitxer STEP, costats de spline, rosques modelades, cossos STL / OBJ / 3MF i conjunts; STEP per a altres modeladors de peces | {{ui:Obre}} llegeix STEP com a triangles i manté les cares planes, els cilindres, cons, esferes i tors del fitxer per a l'exportació ([Obre un fitxer STEP](topic:import-step)); {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} escriu exactament cada cara analítica i manté aquestes com a facetes ([Exporta](topic:export-files#for-other-cad-programs-step)); la macro per a un altre modelador de peces encara escriu |
| Arcs veritables a les vistes de plànol | Les vistes i les vistes de secció es dibuixen a partir de les facetes |
| Volums, àrees i distàncies exactes | {{ui:Mesura}} dona els números del sòlid facetat, una mica baixos en peces rodones; un ajust més fi de **Corbes** els acosta |

Algunes files de les taules següents suggereixen una d'aquestes operacions com a manera de resoldre una altra cosa. Aquests suggeriments s'aplicaran quan torni un nucli exacte.

## Operacions

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Arrodoniments de cara, arrodoniments de rodó complet, arrodoniments amb radis fixats en punts d'una aresta | {{ui:Arrodoniment}} constant o variable lineal; diverses operacions d'arrodoniment |
| Buides amb gruixos de paret diferents | Un únic gruix de {{ui:Buida}}; afegiu material amb extrusions on una paret ha de ser més gruixuda |
| Desmotllament en cares lliures (splines) | {{ui:Desmotllament}} funciona en cares planes, cilíndriques i còniques |
| Escombrats amb torsió, escombrats de paret fina i de superfície; tangència final a l'operació Loft; un loft amb una sola guia; trajectòries splines | {{ui:Escombrat}} amb orientació fixa o escala final; un loft amb dues o més guies: vegeu [Escombrat, loft i desmotllament](topic:sweep-loft-draft) |
| Nervadures a partir d'arcs o splines; nervadures crescudes a escaire amb el croquis (des d'una vista superior); desmotllament en nervadures; diverses nervadures d'un mateix croquis | {{ui:Nervadura}} a partir d'una cadena de línies al pla propi de la nervadura: vegeu [Nervadures i cartel·les](topic:rib) |
| "Fins a" una superfície corba, "fins a la següent" que s'atura en una cara corba | Fins a una cara plana o un pla de referència |
| Forats contrafonats, rosques en polzades i de canonada, rosques còniques, sortides de rosca i inicis de rosca xamfrana | Comptaforat amb una profunditat petita; rosques mètriques ISO i trapezials, decoratives o modelades: vegeu [Rosques en eixos i forats, dibuixades o modelades](topic:threads) |
| Extrusions de característica fina | Dibuixeu les dues parets del perfil |
| Còpies de matriu saltades una a una, matrius de farciment | Useu operacions separades; matrius al llarg d'una corba: {{ui:Matriu de camí}} |
| Matrius de còpia, simetries, arrodoniments, xamfrans, buides i sòlids importats | Copieu el croquis o l'operació en què es basen, o feu-ne una matriu |
| Tangència exacta (G1) als punts extraordinaris d'una forma; fusió dels pegats d'una forma en cares més grans | Augmenteu el Nivell de la forma: els pegats aproximats es fan més petits; vegeu [Formes lliures amb Forma](topic:form-surfaces) |
| Una forma feta de diverses peces tancades separades en una sola operació; ponts entre formes | Una peça tancada per operació Forma; uniu-les amb Uneix |
| Seleccionar cossos de superfície a la vista (excepte els punts de retallada i de pegat); arrodoniments de superfície; desretallar; pegats G2; superfícies de Gordon tangents a veïnes corbes (la tangència a plans i cares planes sí que està implementada) | Trieu-los pel nom al tauler de l'operació; engrossiu primer i després arrodoniu el sòlid |
| Una llista de cossos a l'historial; deixar els cossos ocults fora de les exportacions | Reanomeneu i oculteu els cossos a la llista de cossos del tauler de la peça; suprimiu o desactiveu l'operació que va fer un cos per deixar-lo fora |
| Una escala no uniforme que manté els cilindres i els cons analítics; escala no uniforme de superfícies desfasades | {{ui:Escala el cos}} fa que les cares corbes siguin B-splines tancades (dins de 0.0000004 mm); una escala uniforme es manté exacta |
| Combinar cossos de superfície; sumes de Minkowski | {{ui:Cosit}} o {{ui:Engrossa}} primer, i després {{ui:Combina}} |
| Anàlisi de toleràncies: acumulacions que giren cantonades (bucles vectorials 2D i 3D), sensibilitats calculades des de la geometria, Monte Carlo amb altres distribucions, toleràncies de mida a les cotes del croquis, tolerància addicional segons la condició del material | {{ui:Acumulació de toleràncies}} en un conjunt: una direcció, pitjor cas i RSS, toleràncies escrites a mà, a partir de la tolerància general del caixetí o dels marcs GD&T: vegeu [Acumulacions de toleràncies](topic:tolerance-stackup) |
| Imbricació: ordre de tall i entrades, tall de les arestes compartides una sola vegada, peces que han de quedar juntes; retalls de rotlles, material compartit entre projectes | {{ui:Imbrica les peces planes en fulls…}} amb espaiat, marges, girs i direcció de fibra: vegeu [Imbrica peces planes en fulls](topic:nest-flat-parts); les plaques sobrants es guarden i s'usen primer: vegeu [Guarda i reutilitza els retalls](topic:nest-offcuts); planifiqueu el tall al programari propi de la vostra talladora |
| Xapa: replecs, desplaçaments, pestanyes a inglet i de contorn; pestanyes en vores corbes o en cares d'una pestanya base doblegada; doblecs dibuixats; tancaments de cantonades; eines de conformat; conversió d'un sòlid a xapa; el pla d'una pestanya base doblegada amb talls; taules de doblegat | {{ui:Pestanya base}} (una placa o un perfil doblegat), {{ui:Pestanya d'aresta}} sobre les vores rectes d'una placa amb alleujaments de doblec, i el patró pla amb un factor K: vegeu [Xapa](topic:sheet-metal) |
| {{ui:Anàlisi de desmotllament}} en conjunts; trobar la línia de partició; anàlisi del gruix de paret | {{ui:Anàlisi de desmotllament}} sobre la peça a Disseny: vegeu [Comproveu el desmotllament per a emmotllament i fosa](topic:draft-analysis); obriu cada peça d'un conjunt per comprovar-la |

## Croquis

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| El·lipses, arcs tangents, còniques, splines amb grau o pesos fixats (NURBS) | Splines (cúbiques), arcs i cercles amb relacions de Tangència |
| Un punt sobre una spline (una relació), relacions de curvatura (G2) | Poseu el punt propi de la spline on ha de passar |
| Còpies desplaçades de splines que segueixen canvis posteriors; desplaçaments de cadenes amb cantonades agudes de spline | Desplaceu-les de nou després del canvi; arrodoniu primer la cantonada |
| Còpies de matriu que segueixen enllaçades a l'original; matrius al llarg d'una corba | Torneu a fer la matriu després d'un canvi |
| Projecció d'arestes circulars lliures o inclinades; geometria projectada que segueix la peça | Projecteu arestes circulars rectes i paral·leles, i després acoteu |
| Cotes dirigides (de referència) | Llegiu les mides del tauler o de les dades de la peça |
| Relacions colineals | Paral·lel amb una distància de 0 |
| Enganxar en un altre programa (el porta-retalls del sistema) | Exporteu DXF, STEP, STL o 3MF |
| Escriure arcs, coordenades relatives o polars | Escriviu línies i cercles; dibuixeu arcs amb l'eina Arc |
| Seleccionar geometria sense punter | Cal un clic o un toc |

## Paràmetres i unitats

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Configuracions que canvien materials; una taula de disseny CSV que desactiva operacions | Les configuracions fixen paràmetres i activen i desactiven operacions: vegeu [Configuracions i taules de disseny](topic:design-tables); `partcraft variants` construeix configuracions desades pel nom, també amb operacions desactivades: vegeu [Creeu un paquet de variants a partir de les vostres configuracions](topic:variant-pack) |
| Equacions als números dels taulers propis de les operacions més noves (pla, escombrat, desmotllament i similars) | Escriviu-les en un script o amb `partcraft set` ([Scripts i línia d'ordres](topic:scripts-and-cli)) |
| Una peça mostrada en polzades | Les mides es mostren en mil·límetres; escriviu `2in` en una caixa numèrica o en una expressió i es convertirà en 50.8 |

## Fitxers

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Editar les operacions pròpies d'un sòlid STEP importat (arriba sense historial) | Afegiu o traieu material amb les vostres pròpies operacions |
| Llegir colors, noms, estructura de conjunt i PMI d'un STEP | No disponible |
| Exportació a glTF, OBJ, IGES, Parasolid; DWG d'una peça 3D (només el paquet de variants escriu un DWG: el full de plànol) | STL o 3MF per a malles; STEP per a sòlids; DXF per a 2D |
| Obrir IGES, DXF o fitxers propis d'altres programes (els fitxers `.3dm` s'obren com un sol cos: [Obre un model .3dm com a cos sòlid](topic:open-3dm-files)) | Demaneu STEP, o una malla STL, OBJ o 3MF tancada: [Obre un STL, OBJ o 3MF](topic:open-meshes) |
| Estructura de conjunt (un arbre amb noms de peces) en STEP exportat | El STEP de conjunt és un sol compost de les peces col·locades |
| Desar en una carpeta a elecció sense la descàrrega del navegador | Activeu «pregunta on desar» a la configuració de descàrregues del navegador |

## Plànols

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Cotes més enllà de les tres mides generals (mides de forats, posicions, toleràncies de mides) | Marqueu el PDF, o exporteu DXF i acoteu-lo en un programa CAD 2D |
| Més d'una secció o detall; vistes alineades, trencades i auxiliars | Una secció i un detall per plànol |
| Text lliure, notes i taules al full (a part dels caixetins de títol i de revisió) | La nota d'acabat, o text afegit al PDF |
| Projecció de primer angle, vistes mòbils, fulls en vertical | Tercer angle, disposició automàtica, fulls horitzontals A4–A0 i ANSI A–E |
| Vista de secció en directe: diversos plans o una caixa de secció alhora, un contorn al voltant del tall, desar la secció al fitxer | Un pla cada vegada des de {{ui:Vistes}} › {{ui:Vista de secció}}; vegeu [Mireu a dins amb una vista de secció](topic:section-view) |
| Plànols de conjunt amb més vistes, cotes o bales que es puguin moure | Una vista isomètrica (o explosionada) amb bales automàtiques i la llista de peces |
| Copiar i enganxar símbols GD&T i d'acabat | Col·loqueu cadascun amb Referència, Marc o Acabat |
| Manuals: fitxers STEP al {{ui:Des d'un altre fitxer…}} d'Illustrate, un model lliurat directament des de ModelCraft o BimCraft, imatges amb la qualitat del traçador de camins, 3D interactiu dins d'un PDF | Obriu el STEP a Disseny i inicieu el manual {{ui:Des de la peça oberta}}; desfeu el model com a glTF (.glb); imatges PNG de la vista 3D; el fitxer 3D interactiu: vegeu [Inicieu un manual a Illustrate](topic:illustrate) |

## Conjunts

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Unions d'engranatge, de cremallera, de lleva i de cargol; una unió de bola limitada a un con; unions en cares corbes o entre punts | Unions rígides, de revolució, lliscants, cilíndriques, planes, de bola i de passador en ranura en cares planes, cadascuna amb els seus límits: vegeu [Construeix un conjunt](topic:build-assembly) |
| Passos d'explosió que giren peces, i arrossegar peces que les unions col·loquen | Passos d'explosió rectes; traieu una unió per moure una peça a mà |
| Subconjunts | Només un nivell de peces |
| Engranatges, lleves, contacte | No disponible |

## Fabricació

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Neteja adaptativa 3D i desbast desplaçat en 3D; acabat per línia d'aigua, a llapis, radial i en espiral; passades adaptatives escrites com a arcs | Desbast 3D en files rectes i mecanitzat de resta: vegeu [Desbast 3D i mecanitzat de resta](topic:rough-3d); acabat Paral·lel i Festó: vegeu [Acabat 3D](topic:finish-3d); cara, buidatge, neteja adaptativa 2D, contorn, perforació i xamfrà de 2.5 eixos: vegeu [Fer trajectòries i G-code](topic:manufacture) |
| Tall amb el flanc de l'eina, trajectòries de línies de flux i de desbast multieix, codis de pla de treball inclinat (G68.2), comprovacions de col·lisió del portaeines i de la màquina; una simulació de talls de 5 eixos i rotatius | Una eina inclinada per a qualsevol operació, acabat de 5 eixos amb una fresa de punta esfèrica i acabat rotatiu de 4t eix: vegeu [Mecanitzat de 4 i 5 eixos](topic:multi-axis) |
| Escariat i rosques interiors en un torn, cicles G71/G76, arcs en trajectòries de torneig, eines vives, un subhusos | Tornejat exterior: refrentar, desbastar, acabar, ranurar, separar, roscar, perforar al centre: vegeu [Tornejat en un torn](topic:turning) |
| Palpar un angle o una cantonada, un preajustador d'eines, mesurar una mida contra una tolerància | Palpar una cara, un costat, un forat o un cap per fixar el desplaçament de treball: vegeu [Palpació](topic:probing) |
| Comprovacions de col·lisió del portaeines i del mànec | Mireu els avisos de longitud de ranura i comproveu al simulador del control |
| Vida útil de l'eina i cicles de subprograma en un postprocessador; carregar fitxers de postprocessador d'altres programes | Escriviu o canvieu un postprocessador en el format propi del PartCraft: vegeu [Postprocessadors que podeu editar](topic:post-processors) |
| G-code en polzades (G20) | Només mil·límetres (G21) |

## Simulació i disseny generatiu

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Estudis no lineals: plastificació, deformacions grans, contacte entre peces, fatiga | Estàtica lineal i freqüències naturals: vegeu [Comprova l'esforç i la deformació](topic:simulation); manteniu el factor de seguretat ben per sobre de 1 |
| Vinclament no lineal (imperfeccions, postvinclament, salt brusc) | Factors de càrrega de vinclament lineals amb un marge generós: vegeu [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling) |
| Radiació entre cares (factors de visió), resistència de contacte, materials dependents de la temperatura, inèrcia en la tensió tèrmica (ones de xoc tèrmic) | Radiació cap a l'entorn, tensió tèrmica estàtica o quasiestàtica al llarg del temps, propietats constants: vegeu [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling) |
| Refinament automàtic per a calor transitòria i estudis amb càrrega tèrmica; fer la malla més grollera on l'error és petit; un objectiu sobre una quantitat local (la tensió màxima en un punt) | **Refina automàticament** per a estudis estàtics, de vinclament, de freqüència natural i tèrmics estacionaris, sobre l'error de tota la peça: vegeu [Comprova l'esforç i la deformació](topic:simulation); altrament, reduïu la mida dels elements |
| Càrregues de coixinet i de cargol, forces remotes, moments, molles, desplaçaments prescrits | Forces i pressions sobre cares, gravetat; cares fixes i sense fricció |
| Simulació de conjunts; materials que difereixen segons la direcció (capes impreses, compòsits) | Una peça, un material isòtrop |
| Diversos fils del solucionador per a estudis tetraèdrics, transferència de calor i disseny generatiu; qualsevol fil en una pàgina que no està aïllada entre orígens | Els estudis voxel, el vinclament, la tensió al llarg del temps i el flux laminar usen els fils on la pàgina ho permet: vegeu [Configuració del PartCraft](topic:settings) |
| Flux turbulent amb precisió de disseny (el model Spalart–Allmaras hi és com a experimental: fricció en tuberia 30 a 34 % més alta, re-enganxament després d'un graó 21 a 39 % més curt; previst: cel·les més fines a prop de les parets), calor en el flux, flux no estacionari (amb precisió temporal), superfícies lliures, fluids no newtonians, peces rotatives | Flux laminar, estacionari i isoterm d'un fluid newtonià, o el model turbulent experimental per a patrons qualitatius: vegeu [Simula el flux de fluids](topic:flow-simulation); el tauler avisa quan el nombre de Reynolds supera el règim laminar |
| Límits d'esforç i regles de fabricació (voladissos, direccions de fresat) en disseny generatiu; diversos materials en una forma | La forma més rígida per a un volum; comproveu el resultat a Simulació: vegeu [Fer créixer una forma a partir de càrregues](topic:generative-design) |
| Un resultat com a sòlid editable (suau, paramètric) | STL, STEP facetat o una peça amb el resultat com a sòlid facetat importat |
| Disseny de màquines elèctriques: un rotor que gira en un estator, parell respecte de l'angle, acer en saturació, imants que perden força després del genoll, corrents de Foucault i pèrdues de ferro i coure; camps magnètics en 3D o sobre malles corbes | Magnetostàtica 2D lineal sobre una graella a la biblioteca d'anàlisi: bobines, ferro, imants permanents a la seva recta de retrocés, entreferros, inductància i força d'atracció: vegeu [Camps magnètics en 2D](topic:magnetic-fields-2d) |

## Scripts

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Ajuda en passar el ratolí, punts de ruptura i pas a pas a l'editor de scripts | Cerca, plegat i completat hi són (vegeu [Escriviu i executeu scripts](topic:craftscript)); per a la resta, el vostre propi editor: {{ui:Desa}} i {{ui:Obre}} al grup Script mouen els scripts dins i fora; les funcions integrades es llisten a [El llenguatge CraftScript](topic:craftscript-language) |
| Punts de ruptura i pas a pas per un script | `disp` i `fprintf` pel camí; {{key:Mod+Enter}} executa unes poques línies seleccionades cada vegada |
| Camps i gràfics que un script mostra dibuixats a l'espai de treball Disseny; scripts que canvien els paràmetres de la peça | Es mostren a l'espai de treball Script; els scripts llegeixen paràmetres amb `param` (vegeu [Escriviu i executeu scripts](topic:craftscript)), els canvien a la pestanya {{ui:Paràmetres}} |
| Imatges i taules al costat dels gràfics; editar un gràfic (zoom, límits d'eixos) abans de desar-lo | Costat a costat mostra els gràfics; deseu un gràfic com a PNG, SVG o CSV i acabeu-lo en un altre lloc |
| numpy i altres paquets de Python; Python fora de línia; plegat de Python a l'editor; Pascal Script | La biblioteca estàndard de Python, CraftScript i Lua: vegeu [Scripts en Python](topic:craftscript-python) |
| Passar funcions Lua a funcions integrades; cridar una funció de biblioteca des de Lua amb un nom construït mentre s'executa el script | Escriviu el nom de la funció de biblioteca al script (`cs.static_tet(…)`), o crideu-la des d'un script CraftScript |

## L'aplicació

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Desar al núvol, compartir i historial de versions | No disponible encara. Deseu els fitxers al vostre ordinador i guardeu les versions pel nom |
| El PartCraft com a aplicació instal·lada a iPad i iPhone | Useu el PartCraft al navegador del dispositiu; a Android i a l'escriptori també funciona a CadCraft Studio (getcadcraft.com/download) |
| Menús contextuals (clic dret) | Barra d'eines i panell dret |
| Treballar del tot fora de línia des d'un inici net | Només quan l'aplicació s'ha desat per a ús fora de línia: vegeu [Treballar fora de línia](common:offline) |

Informeu del que més trobeu a faltar a la pàgina de suport del lloc: determina què ve després.

## Enginyer (generadors i camps)

| Encara no implementat | Avui, en lloc d'això |
|---|---|
| Capçaleres, boques i accessoris a l'intercanviador de calor generat; corbes de temperatura per a la resistència del material; pèrdues de te al col·lector | Els generadors construeixen el nucli i els tubs; afegiu accessoris a Disseny; useu les xifres del material a temperatura ambient amb un factor de seguretat |
| Afegir generadors del directori de complements amb un clic | {{ui:Obre}} a l'espai de treball Enginyer afegeix un generador des d'un fitxer |
| Un fitxer de camp més fi que la mida de vòxel del generador; llegir fitxers `.vdb` | Deseu un camp més fi des d'un script; `.vdb` s'escriu, no es llegeix |
| Càlculs de codi per a recipients a pressió | Les fórmules de paret fina i de paret gruixuda dels llibres de text, amb el factor de seguretat que trieu; no és un marge de codi |
| Generadors per a les altres aplicacions | Només el PartCraft en aquesta versió |
