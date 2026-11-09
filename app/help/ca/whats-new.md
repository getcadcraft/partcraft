---
title: Novetats de la 0.8 i la 0.8.1
summary: PartCraft 0.8 afegeix anàlisi en directe mentre editeu, una comprovació Què es trenca primer, estudis de cedència i de contacte amb fitxers de paquet per a un solver extern, estudis de moviment per a conjunts, un espai de treball Superfícies per a superfícies lliures, peces dimensionades amb la física a l'espai de treball Enginyer, croquis a partir d'una foto, exportacions per a impressió, fulls imbricats a G-code i dibuixos que acoten els seus forats. La 0.8.1 corregeix un bloqueig del cursor a pantalla completa.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, anàlisi en directe, actualitza mentre s'edita, trenca-ho, què es trenca primer, factor de càrrega, no lineal, cedència, deformació plàstica, contacte, calculix, estudi de moviment, folgança, superfícies, nurbs, suavitza, casc, zebra, enginyer, generador, cos generat, croquis a partir d'una foto, escala per a impressió, divideix per a impressió, contracció, fulls imbricats, g-code, dibuix, acota forats, assistent, mcp, idiomes, files de la barra d'eines
from: 62e4dce2
---

Això és el que ha canviat a PartCraft 0.8 i 0.8.1, comparat amb la 0.7. La simulació respon mentre editeu i indica què es trenca primer, els conjunts tenen estudis de moviment, i els espais de treball nous fan superfícies lliures i peces dimensionades a partir de la física. La 0.8.1 és una petita versió de correccions.

## Novetats

### Simulació

- **Actualitza mentre edito.** Marqueu {{ui:Actualitza mentre edito}} al bloc Resol i les respostes seguiran les vostres edicions. Canvieu una cota, una càrrega o el material i una resposta ràpida, feta amb elements quatre vegades més grans, apareix de seguida; quan us atureu durant un segon aproximadament, la resposta refinada de l'estudi substitueix l'anterior. Els resultats indiquen quina de les dues esteu veient. En una mènsula d'acer, la resposta ràpida estava dins de l'1 % en la deformació i a uns 4 % en la tensió de la refinada. Vegeu [Comprova la tensió i la deformació](topic:simulation#update-while-you-edit-live).
- **Què es trenca primer.** En un estudi estàtic o de vinclament, {{ui:Què es trenca primer?}} al bloc **Trenca-ho** escala les càrregues fins que la peça cedeix. Enumera, del pitjor al millor, el factor de càrrega fins a la primera cedència (amb un marcador vermell on la tensió arriba al pic) i el factor de càrrega fins al vinclament. Un factor per sota de 1 vol dir que la peça ja cedeix tal com està carregada, i el tauler Problemes mostra un error. Els factors surten d'un estudi lineal, de manera que són tan bons com ho és aquest. Vegeu [Comprova la tensió i la deformació](topic:simulation#find-out-what-breaks-first-break-it).
- **Cedència i contacte.** Dos tipus d'estudi més: un no lineal, on el material segueix la seva recta fins a la tensió de cedència i després una pendent més plana, amb la deformació plàstica representada, i un de contacte, on peces separades s'empenyen (sense fricció) o es queden enganxades (unides). Un pas de càrrega que no es pot estabilitzar, o peces que s'enfonsen massa les unes en les altres, es mostren al tauler Problemes. No es resolen la fricció, el lliscament gran, les rotacions grans, les deformacions grans ni la fatiga. Vegeu [Comprova la tensió i la deformació](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Paquets per a CalculiX.** {{ui:Exporta}} › {{ui:Paquet CalculiX (.inp)}} desa l'estudi per a CalculiX, un programa separat que instal·leu i executeu vosaltres mateixos; {{ui:Exporta}} › {{ui:Resultats de CalculiX (.frd)}} torna a llegir el seu fitxer de resultats sobre la mateixa malla. PartCraft mai no inicia aquest programa, i ho indica si la peça ha canviat des que es va desar el paquet.

### Conjunts

- **Estudis de moviment.** {{ui:Conjunt}} › {{ui:Moviment}} fa variar el valor d'una articulació durant un temps que indiqueu (velocitat constant, suavitzada, sinusoidal o d'anada i tornada), col·loca el conjunt a cada pas amb les seves articulacions i bucles tancats, i informa de quines col·lisions hi ha i de quina és la proximitat de les peces. {{ui:Afegeix un punt}} representa la posició, la velocitat i l'acceleració d'un punt, el valor de l'articulació i la folgança en funció del temps; {{ui:Desa CSV}} i {{ui:Desa el gràfic}} els escriuen en fitxer. Després de {{ui:Executa}}, la barra de pas a pas de l'execució mou el conjunt a qualsevol pas. La configuració de l'estudi es desa al fitxer del conjunt. La velocitat i l'acceleració surten de les posicions registrades, de manera que useu més passos si un pic pronunciat surt baix. Vegeu [Comprova un conjunt per detectar col·lisions i moviment](topic:check-assembly#a-motion-study).

### Superfícies i peces a partir de la física

- **Un espai de treball Superfícies.** Trieu {{ui:Superfícies}} a la caixa de {{ui:Espai de treball}} per a corbes i superfícies NURBS al costat de la peça: {{ui:Corba}}, {{ui:Loft}}, {{ui:Escombrat}}, {{ui:Iguala}} i {{ui:Zebra}}, amb la continuïtat (G0, G1 o G2) mesurada sobre les superfícies exactes i una vora que és pitjor del que heu demanat, llistada a Problemes amb una correcció d'Iguala. {{ui:Suavitza}} mesura les línies de casc per trobar inflexions i salts de curvatura, i reconstrueix les que no són suaus dins de la vostra tolerància. Les superfícies es desen al fitxer de la peça i no canvien les operacions de la peça. Vegeu [Superfícies lliures (NURBS)](topic:nurbs-surfaces).
- **L'espai de treball Enginyer.** Trieu {{ui:Enginyer}} al selector d'espai de treball, escolliu un generador i feu clic a {{ui:Nou}}: un script dimensiona una peça segons el que ha de fer (escalfar per moure, fluxos, pressió, material, procés d'impressió) amb fórmules de llibre de text i la construeix; després retorna els números que ha fet servir amb les seves fonts, les seves comprovacions de fabricació i fitxers per a eines d'anàlisi. Les mateixes dades donen la mateixa peça en qualsevol ordinador. El generador es guarda a la peça, i obrir una peça mai no executa un script. Vegeu [Peces a partir de la física: generadors](topic:engineer-generators) i [Escriu un generador](topic:write-a-generator).

### Croquis, dibuixos i fabricació

- **Un croquis a partir d'una foto.** {{ui:Operacions}} › {{ui:Més}} › {{ui:Croquis a partir d'una foto…}} traça una imatge d'una peça plana sobre un fons llis (contorn i forats) o un dibuix a llapis en línies, arcs i cercles. Doneu una longitud, comproveu la previsualització i feu el croquis. Vegeu [Nocions bàsiques del croquis](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala i divisió per a impressió.** {{ui:Exporta}} › {{ui:Escala per a impressió (STL o 3MF)…}} escala per eixos sense canviar la peça, per exemple amb una tolerància de contracció. {{ui:Exporta}} › {{ui:Divideix per a impressió (un zip de peces)…}} talla una peça massa gran per a la base d'impressió en peces numerades unides amb tacs, claus, cues d'oreneta, forats per a tacs o butxaques per a imants. Vegeu [Imprimeix en 3D](topic:print-3d).
- **Fulls imbricats a G-code.** {{ui:Exporta}} › {{ui:Fulls imbricats a G-code}} llegeix un DXF imbricat i fa un programa per full amb el postprocessador que trieu: primer els forats i les retallades, després els contorns. No planifica les entrades, l'ordre de tall ni les vores compartides. Vegeu [Imbricar peces planes en fulls](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Dibuixos que fan més per si mateixos.** {{ui:Full}} › {{ui:Automàtic}} tria el full de mida A més petit que conté les vistes a l'escala estàndard més gran fins a 1:1. {{ui:Acota els forats}} posa una marca de centre a cada forat, una anotació per mida i les posicions des de la cantonada inferior esquerra de la vista. Vegeu [Fer un dibuix](topic:drawing-pdf).

### En totes les aplicacions

- **Idiomes.** Les aplicacions estan disponibles en 54 idiomes. Els que no són l'anglès són esborranys automàtics fins que una persona nativa els revisi.
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria Ajusta (com abans), 2 files o 1 fila; una barra que no hi cap es desplaça lateralment. La cinta de funcions de PartCraft mostra l'eina més usada en gran i amaga les variants darrere d'un botó dividit.
- **Connecteu la vostra IA.** Studio és el centre per connectar un assistent propi amb les vuit aplicacions, amb permís de només lectura, de suggeriment o d'edició per aplicació. Un assistent connectat pot dimensionar una peça a partir d'una frase, com un suport per a una càrrega, mostrar el seu procés i totes les comprovacions, i construir-la; indica el que no ha comprovat (concentració de tensions, fatiga, fluència en plàstics). Vegeu [Feu servir PartCraft amb un assistent d'IA](topic:use-with-ai-assistants).

## Corregit a la 0.8.1

- **Bloqueig del cursor a pantalla completa.** El senyalament en passar el ratolí ara està limitat en freqüència. La causa és la nostra millor interpretació i no s'ha confirmat amb la persona que ho va informar.
- **Idioma en execució.** Studio i les edicions empaquetades poden canviar d'idioma mentre s'executen; abans només eren en anglès. Això encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.

## Encara no implementat en aquesta versió

- Connecteu la vostra IA no està acabat: la connexió d'un clic dins de Studio, el connector allotjat per a la IA del navegador, la vostra pròpia clau d'API dins de Studio i el paquet MCP publicat no estan garantits. Studio no té IA pròpia.
- Studio no està signat digitalment: Windows pot avisar, i macOS demana fer clic dret i després Obre. Vegeu [Resolució de problemes](topic:troubleshooting).
- Les cadenes de toleràncies encara són en una sola direcció: vegeu [Cadenes de toleràncies](topic:tolerance-stackup).
- La resta és a [Què no està implementat encara](topic:not-built-yet).

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
