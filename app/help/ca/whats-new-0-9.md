---
title: Novetats de la 0.9
summary: PartCraft 0.9 afegeix arrodoniments entre cares i engruiximent en sòlids, conjunts de milers de peces, una caixa de documents amb revisions, un complement Solid FEM de comprovació de tensions, deu mètodes d'arc, mides d'acer del Regne Unit, una etapa d'impressió i complements d'impressió en resina.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, arrodoniment entre cares, bola rodant, arrodoniment de diverses arestes, engruiximent, sòlid a partir de superfícies, closca step, sòlid iges, arrodoniments d'escaneigs, conjunt gran, visualització lleugera, 20000 peces, documents, caixa, extreu, revisió, versió, on s'usa, enllaç rhino, grasshopper, 3dm, cursors, planta de fàbrica, cua de treballs, solid fem, element finit, von mises, freqüència natural, mètodes d'arc, arc de 3 punts, mides d'acer del Regne Unit, llibre blau, etapa d'impressió, resina, goo, ctb, llit, estén pla, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, anàlisi en viu, actualitza mentre edites, què es trenca primer, factor de càrrega, no lineal, límit elàstic, deformació plàstica, contacte, calculix, estudi de moviment, espai lliure, superfícies, nurbs, suavitza, casc, zebra, enginyer, generador, cos generat, croquis a partir d'una foto, escala per a impressió, divisió per a impressió, contracció, fulls imbricats, codi G, dibuix, acotar forats, assistent, mcp, idiomes, barres d'eines
from: 96d9fbfa
---

Això és el que ha canviat a PartCraft 0.9, respecte de la 0.8.1. Les superfícies lliures ara es tanquen en sòlids, els conjunts de milers de peces continuen sent utilitzables, una caixa de documents guarda les revisions, i un complement Solid FEM comprova la tensió en una peça. Cada element indica on trobar-lo.

## Novetats de la 0.9.1

- **Exportació de STEP exacte.** {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} i {{ui:STEP AP214 (sòlid exacte)}} ja funcionen. Els forats, les protuberàncies, els arrodoniments, els cons, les esferes i els tors s'escriuen amb les seves superfícies reals, amb cercles reals com a arestes, de manera que un altre programa CAD o CAM pot reconèixer un forat com a forat. Els costats de spline, els fils modelats i les malles importades continuen sent cares facetades dins del mateix sòlid. Vegeu [Exporta per a impressió, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dins, STEP exacte fora.** Un fitxer STEP que obriu conserva les seves pròpies cares planes, cilindres, cons, esferes i tors, de manera que {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} les torna a escriure com a superfícies reals en lloc de facetes: una biga d'un proveïdor amb forats per a cargols surt amb les mateixes cares amb què va entrar, més el que hi hàgiu tallat. Les cares de spline i les cares d'escombrat i de revolució del fitxer continuen sent facetes, i també ho són els cossos d'STL, OBJ i 3MF. Torneu a obrir el fitxer STEP per a una peça desada abans. Vegeu [Obriu un fitxer STEP i construïu-hi a sobre](topic:import-step).
- **Cercles reals al DXF de la cara.** {{ui:Exporta}} › {{ui:DXF del croquis o de la cara plana}} amb una cara plana triada ara escriu els forats rodons com a cercles, amb el centre i el radi propis del forat, per a una taula de làser, de plasma o d'aigua a alta pressió. Les altres arestes rodones continuen sent facetes.
- **STEP exacte per al taller.** A {{ui:Fabricació}}, {{ui:STEP exacte (coordenades de treball)}} escriu la peça amb el seu origen a l'origen de treball de la preparació i Z seguint l'eix de l'eina, les coordenades que fa servir el codi G. Vegeu [Fes trajectòries i codi G](topic:manufacture#exact-step-for-the-shop).

## Novetats

### Superfícies i sòlids

- **Arrodoniment entre cares.** Trieu {{ui:Superfícies}} al selector d'espai de treball, i després {{ui:Arrodoniment entre cares}}. Trieu les dues cares d'un sol sòlid i escriviu el radi (i {{ui:Radi a l'extrem (mm, 0 = el mateix)}} per a un radi que canvia al llarg de l'aresta). La línia de resultat indica quant s'allunya l'arrodoniment de la bola rodant ideal, i un radi que no encaixa es rebutja indicant la cara. {{ui:Arrodoniment de diverses arestes}} arrodoneix moltes arestes en un sol pas; marqueu {{ui:Cantonades (pedaç esfèric on es troben tres)}} per a una cantonada esfèrica on es troben tres arestes arrodonides de cares planes. Vegeu [Superfícies lliures (NURBS)](topic:nurbs-surfaces).
- **Engruiximent en sòlid.** {{ui:Dona gruix i converteix en sòlid}} a aquest mateix espai de treball dona gruix a una superfície; {{ui:L'altre costat}} el fa créixer en l'altre sentit. Un plec o un creuament de si mateixa es rebutja indicant la superfície i el lloc.
- **Sòlids a partir de superfícies.** Les superfícies retallades es poden unir amb unió, resta i intersecció, i incorporar a la peça com un sol pas de desfer. El STEP escriu un sòlid com una sola closca tancada i l'IGES com un sol sòlid; tots dos es tornen a llegir com a sòlid. Si les cares no coincideixen aresta per aresta, el fitxer rep cares separades i la línia d'estat ho indica. També es poden fer sòlids a l'editor de nodes; vegeu [Editor de nodes](topic:nodes).
- **Arrodoniments de vora i de radi variable en escaneigs.** Quan ajusteu superfícies a un escaneig, també es busquen arrodoniments de vora (tors) i arrodoniments de radi variable al llarg d'una aresta bastant recta, i es llisten amb el seu radi. Només s'ha provat amb escaneigs inventats.

### Conjunts, documents i enllaços

- **Conjunts grans.** Les peces que són còpies comparteixen una malla, i {{ui:Vistes}} › {{ui:Visualització lleugera}} dibuixa caixes perquè la vista continuï movent-se (s'activa sola per als conjunts molt grans; la selecció i les unions continuen fent servir les peces reals). L'arbre de peces mostra les primeres files i un botó {{ui:Mostra 700 més}} per a la resta. Els fitxers de conjunt poden tenir fins a 50.000 instàncies i 100.000 unions. Vegeu [Construeix un conjunt](topic:build-assembly).
- **Documents.** {{ui:Documents…}} a la secció **Fitxer** obre un diàleg sobre una carpeta de projecte: Extreu i Retorna, lletres de revisió, estats (en curs, per revisar, publicat, obsolet), historial, on s'usa i llista de materials. Vegeu [Documents i revisions (la caixa forta)](topic:documents-walkthrough).
- **Enllaç en viu amb Rhino.** Un script, `cadcraft_link.py`, vigila un document de Rhino o Grasshopper i envia a PartCraft només el que ha canviat, on una operació importada es reconstrueix amb la nova forma. És d'una sola direcció i necessita Studio. Vegeu [Enllaç en viu .3dm](topic:live-3dm-link).
- **Veure els cursors dels altres.** En una sessió compartida, el cursor de cada persona es mostra amb el seu nom i l'operació que ha seleccionat. Vegeu [Modelar una peça junts amb Live TeamWork](topic:work-live).
- **Planta de fàbrica.** Activeu el complement Planta de fàbrica a {{ui:Configuració}} › {{ui:Complements}}. Després de generar un programa amb el post a {{ui:Fabricació}}, la seva pestanya pot {{ui:Afegeix a la cua de treballs de la fàbrica}} o {{ui:Desa com a fitxer de treball}}. Mai no envia ni posa en marxa una màquina.

### Anàlisi i peces

- **Complement Solid FEM.** Activeu {{ui:Solid FEM}} a {{ui:Configuració}} › {{ui:Complements}} (està desactivat fins que ho feu) i apareix una pestanya {{ui:Solid FEM}} al tauler dret. {{ui:Fes la malla de la peça}}, trieu cares fixes i càrregues a la vista 3D, {{ui:Resol}}, i dibuixeu el desplaçament, la tensió de von Mises o una forma modal amb {{ui:Mostra al model}}. Vegeu [Solid FEM: una comprovació de tensió](topic:solid-fem-check).
- **Arc en croquis, de deu maneres.** La fletxa al costat de {{ui:Arc}} a la barra d'eines del croquis llista 3 punts, Inici Centre Final, Inici Centre Angle, Inici Centre Longitud, Inici Final Angle, Inici Final Direcció, Inici Final Radi, Centre Inici Final, Centre Inici Angle, Centre Inici Longitud i Continua. Vegeu [Dibuixa un arc amb deu mètodes](topic:sketch-arc-methods).
- **Mides d'acer del Regne Unit.** Els conjunts soldats poden fer servir 976 perfils del Regne Unit (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriviu una mida com `305x165x40 UB`. Vegeu [Barres estructurals](topic:structural-members).

### Impressió

- **Etapa d'impressió.** El botó {{ui:Etapa d'impressió}} de la barra d'eines (complement Impressió 3D, activat per defecte) posa els cossos de la peça sobre un llit amb línies de guió: {{ui:Estén pla}}, {{ui:Gira 90°}}, {{ui:Disposa al llit}}, {{ui:Ajusta-ho tot al llit}}, {{ui:Previsualitza capes}}, i després {{ui:Envia a la impressora 3D}} per USB, Klipper (Moonraker), OctoPrint o PrusaLink. No s'envia res fins que confirmeu, i la vostra peça mai no canvia. Per a un fitxer STL o 3MF, vegeu [Prepara una peça per a la impressió 3D](topic:print-3d).
- **Impressió en resina.** Complements a {{ui:Configuració}} › {{ui:Complements}}, tots desactivats fins que els activeu: un laminador de resina, una prova d'exposició, i els formats de fitxer Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. El laminat s'executa en un fil de treball, de manera que la pàgina continua responent.

## En totes les aplicacions

- Cada consell en passar el punter és un tooltip de Bootstrap.
- El consell d'inici té un botó per tancar-lo; es queda tancat.
- La fila de pestanyes d'un tauler que no hi cap es desplaça lateralment en lloc de quedar tallada.
- La pestanya del navegador mostra el nom del document obert abans de PartCraft | CadCraft.
- {{ui:Configuració}} mostra la {{ui:Disposició}} de l'espai de treball com un desplegable d'opcions, i la caixa d'idioma llista tots els idiomes que té la versió.
- El pes i la temperatura són tipus d'unitat a la configuració d'unitats.

## Corregit

- El menú d'Arc del croquis ara llista tots els mètodes.
- La barra d'eines de complements i el títol de la pestanya del navegador es van corregir el 2026-11-09.

## Límits honestos

- El STEP exacte s'ha llegit de nou a OpenCascade (sòlids vàlids, volums iguals als calculats a mà). Encara no s'ha obert en tots els programes CAD o CAM, i un conjunt no s'escriu com a STEP exacte.
- Encara no s'ha imprès res en una impressora real. El laminat, el codi G i els fitxers de resina els han llegit els nostres propis programes o una impressora substituta; cap dels formats de resina no s'ha carregat en una impressora, i les mides de les impressores i les exposicions són punts de partida.
- Solid FEM és lineal, isòtrop i elàstic, amb un material per peça, sense contacte, cedència ni vinclament. La tensió a les cares fixes i a les cantonades agudes depèn de la malla. És una ajuda de comprovació, no revisada per un enginyer.
- Els temps dels conjunts grans surten d'un servidor sense GPU; un fotograma amb tot el detall de 20.000 peces encara triga segons allà.
- Els arrodoniments funcionen sobre parells de cares; no hi ha barreja general de vèrtexs ni arrodoniment entre cares que no es toquen.
- L'enllaç amb Rhino mai no s'ha executat dins de Rhino o Grasshopper reals. Documents s'ha provat amb dos programes sobre una carpeta, no amb dues persones en una compartició de xarxa.
- L'ajust de superfícies a un escaneig real no ha tingut la revisió manual. Els idiomes diferents de l'anglès són esborranys automàtics.
- Els instal·ladors de Windows no estan signats digitalment, i la imatge de disc de macOS no està notaritzada. Vegeu [Resolució de problemes](topic:troubleshooting).

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a PartCraft 0.8 i 0.8.1, respecte de la 0.7. La simulació respon mentre editeu i diu què es trenca primer, els conjunts tenen estudis de moviment, i els espais de treball nous fan superfícies lliures i peces dimensionades a partir de la física. La 0.8.1 és una petita versió de correcció.

### Novetats

**Simulació**

- **Actualitza mentre edito.** Marqueu {{ui:Actualitza mentre edito}} al bloc {{ui:Resol}} i les respostes segueixen les vostres edicions. Canvieu una dimensió, una càrrega o el material i apareix a l'instant una resposta ràpida, feta amb elements quatre vegades més grans; quan us atureu uns segons, la resposta refinada de l'estudi la substitueix. Els resultats indiquen quina de les dues esteu veient. En una biga en voladís d'acer, la resposta ràpida estava dins de l'1 % en la deformació i a uns 4 % en la tensió de la refinada. Vegeu [Comprova tensió i deformació](topic:simulation#update-while-you-edit-live).
- **Què es trenca primer.** En un estudi estàtic o de vinclament, {{ui:Què es trenca primer?}} al bloc **Trenca-ho** escala les càrregues fins que la peça cedeix. Llista, de pitjor a millor, el factor de càrrega fins al primer límit elàstic (amb un marcador vermell on arriba el pic de tensió) i el factor de càrrega fins al vinclament. Un factor inferior a 1 vol dir que la peça ja cedeix amb la càrrega aplicada, i {{ui:Problemes}} mostra un error. Els factors surten d'un estudi lineal, de manera que només són tan bons com ho és aquest. Vegeu [Comprova tensió i deformació](topic:simulation#find-out-what-breaks-first-break-it).
- **Cedència i contacte.** Dos tipus d'estudi més: un no lineal, on el material segueix la seva recta fins a la tensió de cedència i després un pendent més pla, amb la deformació plàstica representada; i un de contacte, on peces separades s'empenyen (sense fricció) o es queden enganxades (unides). Un pas de càrrega que no es pot estabilitzar, o peces que s'enfonsen massa les unes a les altres, es mostren al tauler de Problemes. La fricció, el lliscament gran, les grans rotacions, les grans deformacions i la fatiga no es resolen. Vegeu [Comprova tensió i deformació](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fitxers d'entrada per a CalculiX.** {{ui:Exporta}} › {{ui:Fitxer d'entrada de CalculiX (.inp)}} desa l'estudi per a CalculiX, un programa separat que instal·leu i executeu vosaltres; {{ui:Exporta}} › {{ui:Resultats de CalculiX (.frd)}} llegeix el seu fitxer de resultats de tornada a la mateixa malla. PartCraft mai no inicia aquest programa, i ho indica si la peça ha canviat des que es va desar el fitxer d'entrada.

**Conjunts**

- **Estudis de moviment.** {{ui:Conjunt}} › {{ui:Moviment}} mou el valor d'una unió al llarg d'un temps que doneu (velocitat constant, suavitzada, sinus, o d'anada i tornada), col·loca el conjunt a cada pas amb les seves unions i bucles tancats, i informa de quines col·lisions hi ha i de quina distància s'acosten les peces. {{ui:Afegeix un punt}} representa la posició, la velocitat i l'acceleració d'un punt, el valor de la unió i l'espai lliure respecte del temps; {{ui:Desa CSV}} i {{ui:Desa el gràfic}} els escriuen. Després de {{ui:Executa}}, el control per passos de la barra d'execució mou el conjunt a qualsevol pas. Els paràmetres de l'estudi es desen al fitxer del conjunt. La velocitat i l'acceleració surten de les posicions registrades, de manera que useu més passos si un pic agut surt baix. Vegeu [Comprova un conjunt per col·lisions i moviment](topic:check-assembly#a-motion-study).

**Superfícies i peces a partir de la física**

- **Un espai de treball de superfícies.** Trieu {{ui:Superfícies}} al selector d'espai de treball per a corbes i superfícies NURBS al costat de la peça: {{ui:Corba}}, {{ui:Loft}}, {{ui:Escombrat}}, {{ui:Iguala}} i {{ui:Zebra}}, amb continuïtat (G0, G1 o G2) mesurada sobre les superfícies exactes, i una aresta pitjor del que heu demanat llistada a Problemes amb una correcció d'Iguala. {{ui:Suavitza}} mesura les línies d'casc per trobar inflexions i salts de curvatura, i reconstrueix les que no són suaus dins de la vostra tolerància. Les superfícies es desen al fitxer de la peça i no canvien les seves operacions. Vegeu [Superfícies lliures (NURBS)](topic:nurbs-surfaces).
- **L'espai de treball Enginyer.** Trieu {{ui:Enginyer}} al selector d'espai de treball, escolliu un generador i feu clic a {{ui:Nou}}: un script dimensiona una peça a partir del que ha de fer (escalfar per moure, cabals, pressió, material, procés d'impressió) amb fórmules de llibre de text, i la construeix; després torna els números que ha fet servir amb les seves fonts, les seves comprovacions de fabricació i fitxers per a eines d'anàlisi. Les mateixes dades donen la mateixa peça en qualsevol ordinador. El generador es guarda a la peça, i obrir una peça mai no executa un script. Vegeu [Peces a partir de la física: generadors](topic:engineer-generators) i [Escriure un generador](topic:write-a-generator).

**Croquis, dibuixos i fabricació**

- **Un croquis a partir d'una foto.** {{ui:Operacions}} › {{ui:Més}} › {{ui:Croquis a partir d'una foto…}} tradueix una imatge d'una peça plana sobre un fons senzill (contorn i forats) o un dibuix a llapis en línies, arcs i cercles. Doneu una sola longitud, comproveu la previsualització i feu el croquis. Vegeu [Nocions bàsiques de croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala i divisió per a la impressió.** {{ui:Exporta}} › {{ui:Escala per a impressió (STL o 3MF)…}} escala per eixos sense canviar la peça, per exemple amb una tolerància de contracció. {{ui:Exporta}} › {{ui:Divideix per a impressió (un zip de peces)…}} talla una peça massa gran per al llit en peces numerades unides amb clavilles, claus, cua d'oronella, forats per a passadors o butxaques per a imants. Vegeu [Imprimeix en 3D](topic:print-3d).
- **Fulls imbricats a codi G.** {{ui:Exporta}} › {{ui:Fulls imbricats a G-code}} llegeix un DXF imbricat i fa un programa per full amb el post que trieu: primer els forats i les retallades, després els contorns. No planifica les entrades, l'ordre de tall ni les arestes compartides. Vegeu [Imbrica peces planes en fulls](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibuixos que fan més per si mateixos.** {{ui:Full}} › {{ui:Automàtic}} tria el full A més petit que contingui les vistes a l'escala estàndard més gran fins a 1:1. {{ui:Acota els forats}} posa una marca de centre a cada forat, una crida per mida i les posicions des de la cantonada inferior esquerra de la vista. Vegeu [Fer un dibuix](topic:drawing-pdf).

**En totes les aplicacions**

- **Idiomes.** Les aplicacions arriben en 54 idiomes. Els que no són l'anglès són esborranys automàtics fins que una persona parlant nadiua els llegeixi.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria Ajusta (com abans), 2 files o 1 fila; una barra que no hi cap es desplaça lateralment. La cinta d'operacions de PartCraft mostra l'eina més usada en gran i amaga les variants darrere d'un botó dividit.
- **Connecteu el vostre IA.** Studio és el centre per connectar un assistent propi a les vuit aplicacions, amb permís només de lectura, de suggeriment o d'edició per a cada aplicació. Un assistent connectat pot dimensionar una peça a partir d'una frase com un suport per a una càrrega, mostrar el seu raonament i totes les comprovacions, i construir-la; informa del que no ha comprovat (concentració de tensions, fatiga, fluència en plàstics). Vegeu [Utilitzar PartCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Congelació del cursor a pantalla completa.** La selecció en passar el punter ara té límit de velocitat. La causa és la nostra millor lectura i no es va confirmar amb la persona que ho va informar.
- **Idioma en execució.** Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans només eren en anglès. Encara no està provat en totes les plataformes: digueu-nos si l'idioma no canvia.

### Encara no en aquesta versió

- Connectar la IA encara no està acabat: la connexió en un clic dins de Studio, el connector allotjat per a la IA del navegador, la vostra pròpia clau d'API dins de Studio i el paquet MCP publicat no es prometen. Studio no té cap IA pròpia.
- Studio no està signat digitalment: Windows pot avisar, i macOS demana clic dret i després Obre. Vegeu [Resolució de problemes](topic:troubleshooting).
- Els encadenaments de tolerància segueixen en una sola direcció: vegeu [Encadenaments de tolerància](topic:tolerance-stackup).
- La resta és a [Què encara no està implementat](topic:not-built-yet).

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
