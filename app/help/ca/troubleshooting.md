---
title: Resolució de problemes
summary: Problemes que podeu trobar a PartCraft, des que l'aplicació no arrenca fins a funcions que fallen, croquis que no es resolen, fitxers que no s'obren i unions que es comporten malament, amb el missatge que veieu i la solució.
keywords: problema, error, ajuda, no funciona, falla, fallant, fallada, en blanc, webgl, webassembly, nucli, no implementat, sobredefinit, perfil obert, no es pot obrir, no passa res, direcció equivocada, lent
from: 7728542c
---

Quan alguna cosa no funciona, llegiu primer la **barra d'estat**, a la part inferior: PartCraft hi diu per què ha rebutjat l'acció o què espera a continuació. Una funció que falla mostra també el seu missatge a la part superior del seu tauler de la dreta, i quan passeu el punter sobre la seva fila a l'historial.

## L'aplicació no arrenca

### "Aquest navegador no pot mostrar 3D (WebGL està desactivat o no hi és), així que PartCraft no pot funcionar aquí."

**Causa:** el navegador té desactivats, bloquejats o no admet els gràfics 3D (WebGL), o el controlador gràfic no ho admet.

**Solució:**

:::chromium
Obriu `chrome://settings/system` (o `edge://settings/system` a Edge) i activeu "Usa l'acceleració gràfica quan estigui disponible", després reinicieu el navegador. Si ja hi és activada, mireu `chrome://gpu` per veure l'estat de WebGL, i actualitzeu el controlador gràfic.
:::

:::firefox
Obriu `about:support` i mireu Gràfics, WebGL. Si està bloquejat, actualitzeu el controlador gràfic. A `about:config`, `webgl.disabled` ha de ser `false`.
:::

:::safari
WebGL sempre és activat al Safari actual. Actualitzeu macOS (el Safari s'actualitza amb ell). Si encara falla, proveu Chrome o Firefox al mateix Mac per descartar el maquinari gràfic.
:::

Els escriptoris remots i algunes màquines virtuals no tenen WebGL. Proveu-ho a l'ordinador mateix.

### "El nucli sòlid no s'ha carregat: …"

**Causa:** el nucli de geometria (un programa WebAssembly) no s'ha pogut obtenir ni iniciar. Normalment la connexió s'ha interromput mentre es carregava l'aplicació, WebAssembly està desactivat per una política de l'empresa o per un ajust de seguretat del navegador, o el navegador és molt antic.

**Solució:** torneu a carregar la pàgina amb connexió. Si continua fallant, proveu un altre navegador actual. A Firefox, `javascript.options.wasm` a `about:config` ha de ser `true`. Sense connexió, l'aplicació i el seu nucli només es carreguen si la barra d'aplicació deia **Preparat sense connexió** abans de perdre la connexió ({{ui:Desa per fer-lo servir sense connexió}} amb connexió; vegeu [Treballar sense connexió](common:offline)).

### El botó sense connexió diu "No s'ha pogut desar" o "Mode sense connexió no disponible"

**No s'ha pogut desar**: alguns fitxers no s'han baixat. Feu-hi clic per tornar-ho a provar amb connexió; una connexió lenta o limitada pot necessitar un segon intent. **Mode sense connexió no disponible**: aquesta finestra del navegador no pot conservar una còpia sense connexió (les finestres privades i alguns ordinadors gestionats ho bloquegen). Useu una finestra normal, o deixeu la pestanya oberta.

### PartCraft està sense connexió però desactualitzat

Feu clic a **Preparat sense connexió** amb connexió i trieu {{ui:Torna a desar (obté la versió més recent)}}.

### "Escombrat: encara no implementat. Necessita un nucli exacte, …"

El missatge complet és "<Nom>: encara no implementat. Necessita un nucli exacte, que aquesta versió de PartCraft no té. Ajuda › Què encara no està implementat diu què fer en lloc seu." El veieu en triar Escombrat, Loft, Nervi (Rib), una pestanya de xapa, una funció de superfície, Combina, Mou cos, Escala cos o Matriu de camí, i per a les altres coses que només fa un nucli exacte. No hi ha res de malament amb el navegador ni amb la peça: aquesta versió de PartCraft construeix totes les peces amb el nucli de malla. Vegeu [Què encara no està implementat](topic:not-built-yet) per saber què fer en lloc seu, i [El nucli de malla](topic:solid-kernels).

### "S'està carregant el nucli sòlid…" no desapareix mai

Espereu una mica en una connexió lenta: el nucli i la biblioteca 3D es baixen la primera vegada. Després torneu a carregar la pàgina. Si la pàgina mateixa mostra un error, vegeu més amunt.

## No passa res quan premo una tecla

- Les tecles no funcionen mentre el cursor és dins d'un quadre d'un tauler. Feu clic a la vista 3D o premeu {{key:Esc}} després d'escriure (o {{key:Tab}} per sortir).
- Les tecles de fletxa i {{key:Plus}}/{{key:Minus}} giren i fan zoom a la vista només després de fer clic a la vista.
- Hi ha un diàleg obert: contesteu-lo primer.
- En un croquis, {{key:F}} és l'eina d'arrodoniment, no Ajusta. Useu el botó {{ui:Ajusta}}.

## Un botó de la barra d'eines està en gris

- Els botons de funció estan en gris mentre hi ha un croquis obert. Tanqueu-lo primer.
- Les eines de croquis només funcionen dins d'un croquis.
- {{ui:Desfés}} i {{ui:Refés}} estan en gris quan no hi ha res per desfer o refer.
- {{ui:Conjunt}} necessita una peça amb un sòlid. {{ui:Unió}} necessita dues peces al conjunt. {{ui:Edita la peça}} necessita una peça seleccionada.
- {{ui:STEP AP242 (sòlid exacte)}} i {{ui:STEP AP214 (sòlid exacte)}} estan en gris en un conjunt: exporteu cada peça per separat. Si un altre programa refusa el fitxer exacte, proveu {{ui:STEP AP214 (sòlid exacte)}}, després {{ui:STEP (facetat, nucli de malla)}}, i expliqueu-nos-ho a {{ui:Ajuda}} › {{ui:Informa d'un problema}}.
- {{ui:Escombrat}}, {{ui:Loft}} i les altres funcions que necessiten un nucli exacte no estan en gris: continuen clicables, les seves indicacions acaben amb "encara no implementat (necessita un nucli exacte)", i en fer-hi clic ho diu la barra d'estat. Vegeu [Què encara no està implementat](topic:not-built-yet).
- {{ui:Dibuix}} necessita una peça amb un sòlid, i està en gris mentre hi ha un croquis obert.
- Els elements de {{ui:Exporta}} estan en gris en un conjunt: els conjunts encara no es poden exportar. Tanqueu-lo, o editeu una peça, per exportar.

## Problemes de croquis

### El croquis no em deixa afegir una relació

"No hi ha cap relació que encaixi amb aquesta selecció. Seleccioneu un o dos elements (Shift+clic afegeix)." La relació necessita una selecció diferent. Vegeu [Relacions i cotes de croquis](topic:sketch-relations) per saber què necessita cadascuna.

### "Sobredefinit: … no es poden complir totes alhora. Desfeu, o suprimiu-ne una."

**Causa:** la nova relació o cota contradiu les que ja hi ha. El croquis no s'ha mogut.

**Solució:** {{key:Mod+Z}}, o suprimiu un dels elements vermells de la llista del tauler de la dreta (trieu **Suprimeix** al costat).

### "Sobredefinit: … ja està implicat. Suprimiu-lo."

**Causa:** la relació no aporta res: d'altres ja la forcen (per exemple, Paral·lel en dos costats d'un rectangle, o una cota que ja és fixa). En aquesta versió no hi ha cotes conduïdes.

**Solució:** suprimiu-la. La peça es construeix igualment, amb un avís.

### "Aquests elements no es poden acotar junts."

Heu fet clic, per exemple, en un punt i en un cercle. Acoteu al punt central del cercle.

### "Un arrodoniment necessita un cantó on es trobin exactament dues línies." / "Aquest radi és massa gran per a aquestes línies."

Feu clic exactament al punt del cantó de dues línies sòlides. Useu un radi més petit que el que permeti la línia més curta.

### La geometria torna enrere quan l'arrossego

L'arrossegament trencaria una relació o una cota, així que PartCraft la torna al lloc. Només la geometria blava (subdefinida) es pot moure.

### "Aquest croquis no pot obrir-se: Necessita Extrude2, que falla."

El croquis és sobre una cara d'una funció que no està construïda. Arregleu primer aquesta funció, o reactiveu-la, o avanceu l'historial.

## Problemes de funcions

| Missatge | Causa | Solució |
|---|---|---|
| "Feu un croquis primer: trieu un pla, Croquis, dibuixeu un perfil tancat, Surt." | No hi ha cap croquis sense usar amb corbes, i cap no és seleccionat | Dibuixeu un croquis, o seleccioneu a l'historial el croquis a usar |
| "El croquis no té cap perfil tancat per extruir." (o "per revolucionar") | No hi ha cap bucle tancat de línies sòlides | Tanqueu els forats; torneu les línies de construcció a l'estat normal amb {{key:Q}} |
| "El perfil és obert: un extrem a (x, y) no està unit a res." | Un forat en aquest punt | Obriu el croquis i arrossegueu l'extrem sobre el seu veí perquè s'ajusti |
| "El perfil es bifurca a (x, y): hi conflueixen més de dos extrems." | Tres o més línies es troben en un punt | Suprimiu la línia sobrant, o canvieu-la a construcció |
| "Un bucle tancat necessita almenys tres costats o una corba." | Dues línies d'anada i tornada | Torneu a dibuixar el bucle |
| "Passant per tot és per a talls. Useu una profunditat per a una protuberància." | Una protuberància amb Passant per tot | Poseu Final a Cec o Pla mitjà |
| "No hi ha res per tallar en aquest costat del croquis. Proveu l'altra direcció." | El tall apunta lluny del material | Marqueu Inverteix la direcció |
| "Encara no hi ha res per tallar." / "Encara no hi ha res per perforar." | No hi ha cap sòlid abans d'aquesta funció | Feu primer una protuberància, o baixeu la funció |
| "Dibuixeu una línia central (una línia de construcció) al croquis per revolucionar-lo entorn." | Revolució sense eix | Afegiu una línia central, o trieu una línia a Eix |
| "El perfil creua l'eix. Mantingueu-lo a un costat de la línia central." | Perfil a banda i banda de l'eix | Torneu a dibuixar la meitat del perfil |
| "Poseu punts de croquis on van els forats (eina Punt), i després feu el forat." | No hi ha punts solts al croquis | Afegiu punts amb {{key:P}} |
| "L'avellanat ha de ser més ample que el forat." | El ⌀ de l'avellanat no és més gran que el Diàmetre | Feu l'avellanat més ample |
| "L'avellanat ha de ser menys profund que el forat." | L'avellanat és més profund que un forat cec | Feu-lo menys profund, o el forat més profund |
| "Trieu les funcions a copiar." | Un patró o una simetria sense res marcat | Marqueu una funció sota Funcions a copiar |
| "Extrude2 no té cap sòlid per copiar." | La funció copiada ha fallat o està desactivada | Arregleu-la o reactiveu-la |
| "Necessita Sketch3, que falla." | Una funció de la qual depèn no està construïda | Arregleu la funció que indica |
| "La cara on es troba ha desaparegut (Extrude1 no està construïda)." | La cara del croquis ja no existeix | Arregleu aquesta funció, o suprimiu el croquis i torneu a dibuixar-lo |
| "Després d'això no queda res de la peça." | Un tall ha eliminat tot el material | Comproveu la mida i la direcció del tall |
| "El nucli sòlid no ha pogut construir això (…)." o "El nucli sòlid no ha pogut combinar això amb el cos." | El nucli ha refusat la geometria | Desfeu, o canvieu una mica les mides; les cares que es toquen exactament ho poden causar |
| "Escombrat: encara no implementat. Necessita un nucli exacte, que aquesta versió de PartCraft no té." (també Loft, Nervi i les altres) | Una funció feta en una versió anterior que només un nucli exacte pot construir. Es manté a l'historial i es desa sense canvis | Desactiveu-la o suprimiu-la; vegeu [Què encara no està implementat](topic:not-built-yet) per saber què fer en lloc seu |
| "Un arrodoniment de 5 mm no hi cap (…)." / "Un xamfrà de 2 mm …" | La mida és massa gran per a una cara propera a la vora, o el cantó no es pot arrodonir | Mida més petita, o menys arestes per funció |
| "Arrodoniment: en aquesta versió només arestes rectes entre dues cares planes (el nucli de malla les construeix). Arrodoniu o bisellat les arestes corbes al croquis." (també Xamfrà) | Una aresta triada és rodona, com la vora d'un forat, o està sobre una cara corba | {{ui:Selecciona arestes}} i traieu-la; arrodoniu o bisellat aquest cantó al croquis |
| "Un arrodoniment amb radi variable al llarg de l'aresta: encara no implementat (necessita un nucli exacte). Doneu-li un sol radi." | **Radi variable** està marcat | Desmarqueu-lo i doneu un sol radi |
| "Arrodoniment amb el nucli de malla: on es troben les vores arrodonides, s'inglet, no es barregen." (⚠, un avís) | Les arestes triades es troben en un cantó; els arrodoniments hi fan un plec viu | Res a arreglar: la peça està construïda. Arrodoniu menys arestes si el plec importa |
| "Una aresta que arrodoneix ha desaparegut: l'aresta entre Extrude1 i Cut2." | Un canvi anterior ha eliminat l'aresta | {{ui:Selecciona arestes}}, traieu l'aresta vermella i trieu la nova |
| "Trieu les arestes a la vista, i després afegiu-les." | L'arrodoniment o el xamfrà no té arestes | {{ui:Selecciona arestes}} |
| "Trieu les cares a eliminar (obertes), i després buidatge." | El buidatge no té cares obertes | {{ui:Selecciona cares}} |
| "El buidatge no ha pogut fer-se amb aquest gruix (…)." | La paret és més gruixuda que una part prima del model o que un radi d'arrodoniment | Una paret més prima, o arrodoniments més grans |
| "Buidatge: en aquesta versió només obre cares planes (el nucli de malla el construeix)." | Una cara oberta és corba | {{ui:Selecciona cares}} i traieu-la; obriu només cares planes |
| "Desmotllament: en aquesta versió només cares planes (el nucli de malla el construeix)." | Una cara desmotllada és un cilindre, un con o una cara de forma lliure | Traieu-la; desmotlleu només cares planes |
| "Una cara que obre ha desaparegut (…)." | Un canvi anterior ha eliminat la cara | {{ui:Selecciona cares}} de nou |
| "Arrodoniment1 canvia les arestes o les parets del cos; no es pot copiar. …" | Un patró o una simetria copia un arrodoniment, un xamfrà o un buidatge | Desmarqueu-lo; feu primer el patró dels talls, i després l'arrodoniment |
| "Es posa sobre una cara que només un nucli exacte pot trobar: encara no implementat en aquesta versió." | Un croquis sobre una cara que el nucli de malla no troba, com una feta en una versió anterior | Dibuixeu sobre un pla de base o una cara plana d'una extrusió, i poseu-lo amb cotes |
| "Fa servir una cara o aresta del sòlid, que només un nucli exacte pot trobar: encara no implementat en aquesta versió." | Un pla, eix o punt de referència sobre una cara o aresta del sòlid | Feu-lo a partir de plans de base, punts de croquis o coordenades |
| "Extrudir fins a una cara, la següent cara o un vèrtex: encara no implementat (necessita un nucli exacte)." / "Una inclinació (taper): encara no implementada (necessita un nucli exacte)." | Una condició final o inclinació que només un nucli exacte construeix | Useu una profunditat Cec o Pla mitjà que mesureu; deixeu la Inclinació a 0 |

## Problemes de selecció

- "Aquesta cara és corba. Trieu una cara plana o un pla per dibuixar-hi." Els croquis necessiten una cara plana. Dibuixeu sobre un pla de base i poseu el croquis amb cotes.
- Una cara diu "Fixa on s'ha triat": no la va fer una aresta de croquis (per exemple, una cara d'una còpia de patró), així que un croquis sobre ella no es mou quan la peça canvia.
- Les arestes costen de tocar: feu zoom. Una aresta guanya a la cara del costat quan el punter hi és just a sobre.

## Problemes de fitxers

| Missatge | Solució |
|---|---|
| 'PartCraft obre els seus propis fitxers .partcraft.json, exporta des de la macro CadCraft per a SolidWorks (.cadcraft-sw.json) i fitxers STEP. "bracket.igs" no és cap d'aquests.' | Només es reconeixen aquests fitxers (i les malles STL, OBJ i 3MF, i els fitxers `.3dm`) |
| '"part.stp" no és un fitxer STEP (no comença per ISO-10303-21).' | El fitxer no és text STEP |
| "Aquest fitxer STEP és massa gran (de més de 60 MB) per importar-lo aquí." | Simplifiqueu-lo a l'origen |
| "Aquest fitxer és massa gran per ser una peça de PartCraft." en la vostra pròpia peça desada | Un sòlid STEP gran importat en una versió anterior ha fet que el fitxer superés els 50 MB. Useu una còpia anterior sense ell |
| "Aquest fitxer és massa gran per ser una peça de PartCraft." | El fitxer supera els 50 MB; no és un fitxer de PartCraft |
| "Aquest no és un fitxer de PartCraft (no és JSON)." / "Aquest no és un fitxer de PartCraft." | El fitxer està malmès o és d'un altre programa |
| "Aquest fitxer l'ha desat un PartCraft més nou (versió de fitxer …); aquest llegeix la versió …" | Obriu-lo amb el PartCraft més nou |
| "Extrude2: la profunditat no és vàlida." (o un altre valor) | El fitxer s'ha editat a mà o s'ha malmès. Useu una còpia anterior |
| Inserir en un conjunt diu "Part1.partcraft.json no té cap sòlid per inserir." | El fitxer de la peça no té cap sòlid. Obriu-lo, construïu un sòlid, deseu i torneu a inserir |

**El fitxer desat no és on esperava.** Desar és una descàrrega: mireu a la carpeta de descàrregues del navegador, o obriu la llista de descàrregues des de la barra d'eines del navegador. Vegeu [On van els vostres fitxers](common:your-files).

**He obert una peça però el conjunt encara és a la pantalla.** La peça s'ha carregat darrere del conjunt. Trieu {{ui:Tanca}} per tancar el conjunt i veure la peça. Tanqueu els conjunts abans d'obrir fitxers de peça.

## Problemes de dibuix

| Missatge | Solució |
|---|---|
| "Construïu primer un sòlid, i després feu-ne el plànol." | Construïu primer la peça |
| "No hi ha espai al full per a: detall. Feu el detall més petit o elimineu una vista." | **Radi del detall** o **Escala del detall** més petits, o suprimiu la secció |
| "Un detall es pren de la vista frontal, superior, dreta o de secció." | Feu clic a una d'aquestes vistes |
| "Feu clic a una de les vistes." | El clic era en paper buit |
| "La posició necessita almenys una referència (datum)." i altres missatges de marcs | Poseu les referències que demana el tauler, o trieu una altra característica |
| "No s'han pogut fer les vistes del plànol: …" | Desfeu l'últim canvi. Si continua passant, deseu, torneu a carregar i torneu a obrir la peça |

## Problemes de conjunts

| Missatge | Solució |
|---|---|
| "Construïu primer un sòlid, i després poseu-lo en un conjunt." | La peça encara no té sòlid |
| "Inseriu primer una segona peça (Afegeix una còpia, Insereix, o Edita › Duplica)." | Una unió necessita dues peces |
| "Trieu una cara en una altra peça." | Les dues cares d'una unió han de ser en peces diferents |
| "Aquesta cara és corba. Trieu una cara plana …" | Les unions parteixen de cares planes. Després useu **Centra sobre** per a un forat o un eix de revolució |
| "Bracket2 no està unida a la peça fixa, així que es queda on es va posar." | Afegiu una unió des d'ella a una peça ja col·locada |
| "Revolute3 tanca un bucle que no es pot tancar: està desviat 2.000 mm. Comproveu les cares, desplaçaments i límits de les unions del bucle." | Les peces no poden trobar-se totes: comproveu les longituds, les cares que usa cada unió, els desplaçaments (les peces apilades cara a cara han de coincidir en profunditat) i els límits; o suprimiu una unió del bucle |
| "La cara que usa aquesta unió ha desaparegut de Bracket." / "L'eix que usa aquesta unió ha desaparegut de Bracket." | La peça s'ha editat. Suprimiu la unió i torneu-la a fer |
| "L'eix va al llarg de la cara, així que no pot fixar el centre de la unió." | Trieu un eix que creui la cara, o "L'origen propi de la cara" |
| "Un conjunt conserva almenys una peça. Tanqueu-lo en lloc d'això." | Useu {{ui:Tanca}} |

**Les peces estan unides però en un lloc equivocat.** Definiu **Centra sobre** per als dos costats de la unió amb els forats o eixos de revolució que han de coincidir, després ajusteu **Angle (°)** i **Desplaçament (mm)**.

## Va lent

- Definiu **Corbes** a Normal o Grossa mentre modeleu; canvieu a Fina abans d'exportar.
- Els recomptes de patró grans (centenars de còpies) triguen a reconstruir-se a cada canvi. Desactiveu el patró mentre treballeu en altres funcions.
- La comprovació de col·lisions i la de moviment comparen cada parell de peces; els conjunts grans triguen més.
- Tanqueu altres pestanyes pesades. PartCraft funciona amb el processador i els gràfics del vostre ordinador.

## Encara no ho aconsegueixo

Deseu primer el fitxer ({{key:Mod+S}}), després torneu a carregar la pàgina i obriu-lo de nou. Si una funció encara falla, seleccioneu-la, llegiu el seu missatge i proveu {{key:Mod+Z}} per tornar a l'últim estat bo.
