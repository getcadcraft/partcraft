---
title: Novetats de la 0.9 (anterior)
summary: El PartCraft 0.9 afegeix arrodoniments entre cares i engrossiment en sòlids, conjunts de milers de peces, un magatzem de Documents amb revisions, un complement Solid FEM d'esforç, deu mètodes d'arc, mides d'acer del Regne Unit, una fase d'Impressió i complements d'impressió amb resina.
keywords: novetats 0.9, versió anterior, novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, arrodoniment entre cares, bola rodant, arrodoniment de diverses arestes, engrossa, sòlid des de superfícies, step, sòlid iges, arrodoniments d'escaneig, conjunt gran, visualització lleugera, 20000 peces, documents, magatzem, extreu, revisió, versió, enllaç rhino, grasshopper, 3dm, cursors, planta de fabricació, cua de treballs, solid fem, element finit, von mises, freqüència natural, mètodes d'arc, arc de 3 punts, seccions d'acer del regne unit, fase d'impressió, resina, goo, ctb, base, estén pla, canvis, 0.8, 0.8.1, nova funcionalitat, anàlisi en directe, actualitza mentre edites, què es trenca primer, factor de càrrega, no lineal, plastificació, deformació plàstica, contacte, calculix, estudi de moviment, llibertat, superfícies, nurbs, suavitza, casc, zebra, enginyer, generador, cos generat, croquis a partir d'una foto, escala per a impressió, divideix per a impressió, contracció, fulls imbricats, g-code, plànol, acota els forats, assistent, mcp, idiomes, files de la barra d'eines
from: 1dafd7c8
---

Això és el que ha canviat al PartCraft 0.9, comparat amb la 0.8.1. Les superfícies lliures ara es tanquen en sòlids, els conjunts de milers de peces continuen sent utilitzables, un magatzem de Documents conserva les revisions, i un complement Solid FEM comprova l'esforç en una peça. Cada element indica on trobar-lo.

## Novetats de la 0.9.1

- **Exportació STEP exacta.** {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} i {{ui:STEP AP214 (sòlid exacte)}} ja funcionen. Els forats, les protuberàncies, els arrodoniments, els cons, les esferes i els tors s'escriuen sobre les seves superfícies veritables, amb cercles veritables com a arestes, de manera que un altre programa CAD o CAM pot reconèixer un forat com a forat. Els costats de spline, les rosques modelades i les malles importades es mantenen com a facetes planes dins del mateix sòlid. Vegeu [Exportació per a impressió, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP d'entrada, STEP exacte de sortida.** Un fitxer STEP que obriu manté les seves pròpies cares planes, cilindres, cons, esferes i tors, de manera que {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} les torna a escriure com a superfícies veritables en lloc de facetes: una biga d'un proveïdor amb forats per a cargols surt amb les mateixes cares amb què va entrar, més tot el que hi hàgiu tallat. Les cares de spline, d'escombrat i de revolució del fitxer es mantenen com a facetes, i també els cossos d'STL, OBJ i 3MF. Torneu a obrir el fitxer STEP per a una peça desada abans. Vegeu [Obre un fitxer STEP i construeix-hi a sobre](topic:import-step).
- **Cercles veritables al DXF de cara.** {{ui:Exporta}} › {{ui:DXF del croquis o de la cara plana}} amb una cara plana seleccionada ara escriu els forats rodons com a cercles, amb el centre i el radi propis del forat, per a una taula de làser, plasma o raig d'aigua. Les altres arestes rodones encara són facetes.
- **STEP exacte per al taller.** A {{ui:Fabricació}}, {{ui:STEP exacte (coordenades de treball)}} escriu la peça amb el seu origen a l'origen de treball de la preparació i la Z al llarg de l'eix de l'eina, les coordenades que usa el G-code. Vegeu [Fer trajectòries i G-code](topic:manufacture#exact-step-for-the-shop).

## Novetats

### Superfícies i sòlids

- **Arrodoniment entre cares.** Trieu {{ui:Superfícies}} al quadre {{ui:Espai de treball}} i després {{ui:Arrodoniment entre cares}}. Seleccioneu les dues cares d'un sol sòlid, escriviu el radi (i {{ui:Radi a l'extrem (mm, 0 = el mateix)}} per a un radi que canviï al llarg de l'aresta). La línia de resultat indica a quina distància és l'arrodoniment de la bola rodant ideal, i un radi que no encaixa es rebutja i s'indica la cara. {{ui:Arrodoniment de diverses arestes}} arrodoneix moltes arestes en un sol pas; marqueu {{ui:Cantonades (pedaç esfèric on es troben tres)}} per a una cantonada esfèrica on es troben tres arestes arrodonides de cares planes. Vegeu [Superfícies lliures (NURBS)](topic:nurbs-surfaces).
- **Engrossa fins a un sòlid.** {{ui:Dona gruix i converteix en sòlid}} al mateix espai de treball dona gruix a una superfície; {{ui:L'altre costat}} la fa créixer cap a l'altra banda. Un plec o un autocreuament es rebutja i s'indica la superfície i el lloc.
- **Sòlids a partir de superfícies.** Les superfícies retallades es poden unir amb unió, resta i intersecció i incorporar a la peça com un sol pas de desfer. STEP escriu un sòlid com una sola closca tancada i IGES com un sol sòlid; tots dos es llegeixen de nou com a sòlid. Si les cares no es corresponen aresta per aresta, el fitxer rep cares separades i la línia d'estat ho indica. Els sòlids també es poden fer a l'editor de nodes; vegeu [Editor de nodes](topic:nodes).
- **Arrodoniments de vora i variables en escanejos.** Quan ajusteu superfícies a un escaneig, també es busquen arrodoniments de vora (tors) i arrodoniments de radi variable al llarg d'una aresta força recta, i es llisten amb el seu radi. Només s'ha provat amb escaneigs inventats.

### Conjunts, documents i enllaços

- **Conjunts grans.** Les peces que són còpies comparteixen una malla, i {{ui:Vistes}} › {{ui:Visualització lleugera}} dibuixa caixes perquè la vista continuï movent-se (s'activa sola en conjunts molt grans; la selecció i les unions continuen usant les peces reals). L'arbre de peces mostra les primeres files i un botó {{ui:Mostra 700 més}} per a la resta. Els fitxers de conjunt poden contenir fins a 50.000 instàncies i 100.000 unions. Vegeu [Construeix un conjunt](topic:build-assembly).
- **Documents.** {{ui:Documents…}} al grup **Fitxer** obre un diàleg sobre una carpeta de projecte: extreure i retornar, lletres de revisió, estats (en curs, per revisar, publicat, obsolet), historial, on s'utilitza i llista de materials. Vegeu [Documents i revisions (el magatzem)](topic:documents-walkthrough).
- **Enllaç Rhino en directe.** Un sol script, `cadcraft_link.py`, vigila un document de Rhino o de Grasshopper i envia al PartCraft només el que ha canviat, on una operació importada es reconstrueix amb la nova forma. És en un sol sentit i necessita Studio. Vegeu [Enllaç .3dm en directe](topic:live-3dm-link).
- **Veure els cursors dels altres.** En una sessió compartida, el cursor de cada persona es mostra amb el seu nom i l'operació que ha seleccionat. Vegeu [Treballeu en directe amb altres](topic:work-live).
- **Planta de fabricació.** Activeu el complement Planta de fabricació a {{ui:Configuració}} › {{ui:Complements}}. Després de postprocessar un programa a {{ui:Fabricació}}, la seva pestanya pot {{ui:Afegeix a la cua de treballs de la fàbrica}} o {{ui:Desa com a fitxer de treball}}. Mai no envia ni inicia una màquina.

### Anàlisi i peces

- **Complement Solid FEM.** Activeu {{ui:Solid FEM}} a {{ui:Configuració}} › {{ui:Complements}} (està desactivat fins que ho feu) i apareix una pestanya {{ui:Solid FEM}} al tauler dret. {{ui:Malla la peça}}, seleccioneu cares fixes i càrregues a la vista 3D, {{ui:Resol}}, i dibuixeu el desplaçament, l'esforç de von Mises o una forma modal amb {{ui:Mostra sobre el model}}. Vegeu [Solid FEM: comprovació d'esforç](topic:solid-fem-check).
- **Arc als croquis, de deu maneres.** La fletxa al costat de {{ui:Arc}} a la barra d'eines del croquis llista 3 punts, Inici Centre Final, Inici Centre Angle, Inici Centre Longitud, Inici Final Angle, Inici Final Direcció, Inici Final Radi, Centre Inici Final, Centre Inici Angle, Centre Inici Longitud i Continua. Vegeu [Dibuixa un arc amb deu mètodes](topic:sketch-arc-methods).
- **Mides d'acer del Regne Unit.** Els conjunts soldats poden usar 976 seccions UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriviu una mida com `305x165x40 UB`. Vegeu [Barres estructurals](topic:structural-members).

### Impressió

- **Fase d'impressió.** El botó {{ui:Fase d'impressió}} de la barra d'eines (complement 3D Print, activat per defecte) posa els cossos de la vostra peça en una base de línies discontínues: {{ui:Estén pla}}, {{ui:Gira 90°}}, {{ui:Disposa a la base}}, {{ui:Encaixa tot a la base}}, {{ui:Previsualitza les capes}}, i després {{ui:Envia a la impressora 3D}} per USB, Klipper (Moonraker), OctoPrint o PrusaLink. No s'envia res fins que ho confirmeu, i la vostra peça mai no es modifica. Per a un fitxer STL o 3MF, vegeu [Prepara una peça per a la impressió 3D](topic:print-3d).
- **Impressió en resina.** Complements a {{ui:Configuració}} › {{ui:Complements}}, tots desactivats fins que els activeu: un laminador per a resina, una prova d'exposició, i formats de fitxer Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. El laminat s'executa en un fil de treball, de manera que la pàgina continua responent.

## En totes les aplicacions

- Cada indicació en passar el ratolí és un globus de Bootstrap.
- El consell d'inici té un botó per tancar-lo; es manté tancat.
- La fila de pestanyes d'un tauler que no hi cap es desplaça lateralment en lloc de tallar-se.
- La pestanya del navegador mostra el nom del document obert abans de PartCraft | CadCraft.
- {{ui:Configuració}} mostra la {{ui:Disposició}} de l'espai de treball com una llista desplegable d'opcions, i el quadre d'idioma enumera tots els idiomes de la versió.
- El pes i la temperatura són tipus d'unitat a la configuració d'Unitats.

## Corregit

- El menú d'Arc del croquis ara enumera tots els mètodes.
- La barra d'eines de complements i el títol de la pestanya del navegador es van corregir el 2026-11-09.

## Límits reals

- El STEP exacte es va rellegir a OpenCascade (sòlids vàlids, volums iguals als calculats a mà). Encara no s'ha obert en tots els programes CAD o CAM, i un conjunt no s'escriu com a STEP exacte.
- Res no s'ha imprès en una impressora real. El laminat, el G-code i els fitxers de resina es van rellegir amb els nostres propis programes o amb una impressora substitutiva; cap dels formats de resina no s'ha carregat en una impressora, i les mides i les exposicions de les impressores són punts de partida.
- Solid FEM és lineal, isòtrop i elàstic, amb un material per peça, sense contacte, plastificació ni vinclament. L'esforç a les cares fixes i a les cantonades agudes depèn de la malla. És una ajuda de comprovació, no revisada per un enginyer.
- Els temps de conjunts grans provenen d'un servidor sense GPU; un fotograma de detall complet de 20.000 peces encara triga segons allà.
- Els arrodoniments funcionen per parells de cares; no hi ha una barreja general de vèrtexs ni arrodoniments entre cares que no es toquen.
- L'enllaç de Rhino mai no s'ha executat dins de Rhino o Grasshopper reals. Documents s'ha provat amb dos programes sobre una carpeta, no amb dues persones en una carpeta de xarxa.
- L'ajust de superfícies a un escaneig real encara no ha tingut una revisió manual. Els idiomes diferents de l'anglès són esborranys automàtics.
- Els instal·ladors de Windows no estan signats digitalment, i la imatge de disc de macOS no està notaritzada. Vegeu [Resolució de problemes](topic:troubleshooting).

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).

## Anteriors: 0.8 i 0.8.1

Això és el que va canviar al PartCraft 0.8 i 0.8.1, comparat amb la 0.7. La simulació respon mentre editeu i us diu què es trenca primer, els conjunts tenen estudis de moviment, i els nous espais de treball fan superfícies lliures i peces dimensionades a partir de la física. La 0.8.1 és una petita versió de correcció.

### Novetats

**Simulació**

- **Actualitza mentre edito.** Marqueu {{ui:Actualitza mentre edito}} al bloc Resol i les respostes segueixen les vostres edicions. Canvieu una cota, una càrrega o el material i una resposta ràpida, feta amb elements quatre vegades més grans, apareix de seguida; quan us atureu uns segons, la resposta refinada del propi estudi la substitueix. Els resultats indiquen quina de les dues esteu mirant. En una biga en voladís d'acer, la resposta ràpida estava dins de l'1 % en la deformació i a uns 4 % en l'esforç de la refinada. Vegeu [Comprova l'esforç i la deformació](topic:simulation#update-while-you-edit-live).
- **Què es trenca primer.** Per a un estudi estàtic o de vinclament, {{ui:Què es trenca primer?}} al bloc **Trenca-ho** escala les càrregues fins que la peça cedeix. Llista, de pitjor a millor, el factor de càrrega fins a la primera plastificació (amb una marca vermella on l'esforç arriba al màxim) i el factor de càrrega fins al vinclament. Un factor per sota de 1 vol dir que la peça ja cedeix amb la càrrega aplicada, i Problemes mostra un error. Els factors surten d'un estudi lineal, de manera que només són tan bons com ho és aquest. Vegeu [Comprova l'esforç i la deformació](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastificació i contacte.** Dos tipus d'estudi més: un de no lineal, on el material segueix la seva recta fins a la tensió de plastificació i després una pendent més plana, amb la deformació plàstica representada; i un de contacte, on peces separades s'empenyen entre si (sense fricció) o es mantenen enganxades (lligades). Un pas de càrrega que no es pot estabilitzar, o peces que s'enfonsen massa unes dins de les altres, es mostren al tauler de Problemes. La fricció, els grans lliscaments, les grans rotacions, les grans deformacions i la fatiga no es resolen. Vegeu [Comprova l'esforç i la deformació](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fitxers per a CalculiX.** {{ui:Exporta}} › {{ui:Fitxer de CalculiX (.inp)}} desa l'estudi per a CalculiX, un programa separat que instal·leu i executeu vosaltres; {{ui:Exporta}} › {{ui:Resultats de CalculiX (.frd)}} torna a llegir el seu fitxer de resultats sobre la mateixa malla. El PartCraft mai no inicia aquest programa, i ho indica si la peça ha canviat des que es va desar el fitxer.

**Conjunts**

- **Estudis de moviment.** {{ui:Conjunt}} › {{ui:Moviment}} mou el valor d'una unió durant un temps que indiqueu (velocitat constant, suavitzada, sinusoïdal, o d'anada i tornada), col·loca el conjunt a cada pas amb les seves unions i els bucles tancats, i informa de les col·lisions i de la proximitat entre peces. {{ui:Afegeix un punt}} representa la posició, la velocitat i l'acceleració d'un punt, el valor de la unió i la llibertat respecte del temps; {{ui:Desa CSV}} i {{ui:Desa el gràfic}} els escriuen. Després de {{ui:Executa}}, la barra Pas a pas de l'execució mou el conjunt a qualsevol pas. Els paràmetres de l'estudi es desen al fitxer del conjunt. La velocitat i l'acceleració surten de les posicions registrades, de manera que useu més passos si un pic agut surt baix. Vegeu [Comprova un conjunt per col·lisions i moviment](topic:check-assembly#a-motion-study).

**Superfícies i peces a partir de la física**

- **Un espai de treball de Superfícies.** Trieu {{ui:Superfícies}} al quadre {{ui:Espai de treball}} per a corbes i superfícies NURBS al costat de la peça: {{ui:Corba}}, {{ui:Loft}}, {{ui:Escombrat}}, {{ui:Iguala}} i {{ui:Zebra}}, amb la continuïtat (G0, G1 o G2) mesurada sobre les superfícies exactes i una aresta pitjor del que heu demanat indicada a Problemes amb una correcció d'Iguala. {{ui:Suavitza}} mesura les línies de casc per trobar punts d'inflexió i salts de curvatura, i reconstrueix les que no compleixen dins de la vostra tolerància. Les superfícies es desen al fitxer de la peça i no canvien les operacions de la peça. Vegeu [Superfícies lliures (NURBS)](topic:nurbs-surfaces).
- **L'espai de treball Enginyer.** Trieu {{ui:Enginyer}} al selector d'espai de treball, escolliu un generador i feu clic a {{ui:Nou}}: un script dimensiona una peça segons el que ha de fer (calor a transmetre, cabals, pressió, material, procés d'impressió) amb fórmules de llibre de text i la construeix, i després retorna els números que ha usat amb les seves fonts, les seves comprovacions de fabricació i fitxers per a eines d'anàlisi. Les mateixes dades donen la mateixa peça en qualsevol ordinador. El generador es conserva a la peça, i obrir una peça mai no executa un script. Vegeu [Peces a partir de la física: generadors](topic:engineer-generators) i [Escriviu un generador](topic:write-a-generator).

**Croquis, plànols i fabricació**

- **Un croquis a partir d'una foto.** {{ui:Operacions}} › {{ui:Més}} › {{ui:Croquis a partir d'una foto…}} tradueix una imatge d'una peça plana sobre un fons llis (contorn i forats) o un dibuix a llapis en línies, arcs i cercles. Doneu una sola longitud, comproveu la previsualització i feu el croquis. Vegeu [Conceptes bàsics del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala i divisió per a la impressió.** {{ui:Exporta}} › {{ui:Escala per a impressió (STL o 3MF)…}} escala per eixos sense canviar la peça, per exemple amb una previsió de contracció. {{ui:Exporta}} › {{ui:Divideix per a impressió (un zip de peces)…}} talla una peça massa gran per al llit en peces numerades unides amb clavilles, claus, cua d'oreneta, forats de tascons o allotjaments d'imants. Vegeu [Imprimeix en 3D](topic:print-3d).
- **Fulls imbricats a G-code.** {{ui:Exporta}} › {{ui:Fulls imbricats a G-code}} llegeix un DXF imbricat i fa un programa per full amb el postprocessador que trieu: primer els forats i les retallades, després els contorns. No planifica les entrades, l'ordre de tall ni les arestes compartides. Vegeu [Imbrica peces planes en fulls](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Plànols que fan més coses per si mateixos.** {{ui:Full}} › {{ui:Automàtic}} tria el full de mida A més petit que conté les vistes a l'escala estàndard més gran fins a 1:1. {{ui:Acota els forats}} posa una marca de centre a cada forat, una anotació per mida i les posicions des de la cantonada inferior esquerra de la vista. Vegeu [Fer un plànol](topic:drawing-pdf).

**En totes les aplicacions**

- **Idiomes.** Les aplicacions es presenten en 54 idiomes. Els que van més enllà de l'anglès són esborranys automàtics fins que els llegeix una persona nativa.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria Ajustar (com abans), 2 files o 1 fila; una barra que no hi cap es desplaça lateralment. La cinta d'operacions del PartCraft mostra l'eina més usada en gran i amaga les variants darrere d'un botó dividit.
- **Connecteu la vostra IA.** Studio és el centre per connectar un assistent propi a totes les vuit aplicacions, amb permís només de lectura, de suggerir o d'editar per a cada aplicació. Un assistent connectat pot dimensionar una peça a partir d'una frase, com un suport per a una càrrega, mostrar el seu procés i totes les comprovacions, i construir-la; informa del que no ha comprovat (concentració d'esforç, fatiga, fluència en plàstics). Vegeu [Useu el PartCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Bloqueig del cursor a pantalla completa.** La selecció en passar el ratolí ara té un límit de velocitat. La causa és la nostra millor interpretació i no es va confirmar amb la persona que ho va informar.
- **Idioma en executar.** Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans només eren en anglès. Encara no s'ha provat en totes les plataformes: digueu-nos si l'idioma no canvia.

### Encara no en aquesta versió

- La connexió d'IA no està acabada: no es garanteix la connexió d'un clic dins de Studio, el connector allotjat per a la IA del navegador, la vostra pròpia clau d'API dins de Studio ni el paquet MCP publicat. Studio no té cap IA pròpia.
- Studio no està signat digitalment: Windows pot avisar, i macOS demana clic dret i després Obre. Vegeu [Resolució de problemes](topic:troubleshooting).
- Les acumulacions encara són en una sola direcció: vegeu [Acumulacions de toleràncies](topic:tolerance-stackup).
- La resta figura a [Què encara no està implementat](topic:not-built-yet).

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
