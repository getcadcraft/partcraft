---
title: Vens d'un altre modelador paramètric
summary: Com els hàbits dels modeladors paramètrics de peces d'escriptori es corresponen amb PartCraft, i les diferències que confonen els usuaris experimentats durant la primera hora.
keywords: canvi, migra, familiar, gestor d'operacions, arbre de disseny, cota intel·ligent, extrusió de cos, extrusió de retall, assistent de forats, unions, detecció d'interferències, barra de retorn, gestor de propietats, ratolí, diferències
from: fbacaee1
---

Si dissenyes peces a SolidWorks, la majoria de les idees de PartCraft et seran familiars: croquis sobre els plans Front, Top i Right, relacions i cotes intel·ligents, un historial d'operacions amb una barra de retorn, i conjunts col·locats amb acoblaments. La manera d'arribar-hi és diferent en alguns punts, i aquesta primera versió fa menys. Aquesta pàgina relaciona els teus hàbits i enumera les sorpreses.

## Hàbits, relacionats

| Estàs acostumat a | A PartCraft |
|---|---|
| L'arbre de disseny a l'esquerra | L'historial a l'esquerra: plans, després operacions, amb els croquis sagnats sota l'operació que els fa servir |
| Plans Front, Top i Right | Els mateixos tres, per l'origen. Front és el pla XY, Top és XZ, Right és YZ; Y apunta cap amunt |
| Croquis sobre un pla o cara, després l'angle de confirmació per sortir | {{ui:Croquis}} ({{key:S}}) sobre un pla o una cara plana seleccionats; {{ui:Surt}} o {{key:Esc}} fins que es tanca |
| Cota intel·ligent | {{ui:Cota}} ({{key:D}}). Fes clic a un o dos elements, després on va el número. Segons on el col·loquis, tria horitzontal, vertical o alineada |
| Afegeix relacions al tauler de propietats | Selecciona elements, després els botons de relació al tauler dret (Coincident, Horitzontal, Paral·lela, Tangent, Igual i així successivament) |
| Relacions automàtiques mentre dibuixes | Els ajustos afegeixen relacions de coincidència, punt sobre corba, horitzontal i vertical |
| Colors del croquis blau / negre / vermell | La mateixa idea: blau subdefinit, negre totalment definit, vermell sobredefinit. El xip mostra els graus de llibertat que queden |
| Línia de centre per a revolucions | {{ui:Línia de centre}} ({{key:N}}); {{ui:Revolució}} fa servir la primera línia de centre tret que triïs un altre eix |
| Arrodoniment de croquis | {{ui:Arrodoniment}} ({{key:F}}) en un croquis: fes clic a la cantonada i escriu el radi |
| Commutador de geometria de construcció | {{ui:Construcció}} ({{key:Q}}) |
| Cos extruït | {{ui:Extrudeix}}: Cega, Pla central, Fins a cara / següent / vèrtex, Desplaçament des de la cara, segona direcció, conicitat, un contorn (Tria regions) |
| Retall extruït | {{ui:Retall}}: comença com a Travessa-ho tot; canvia a Cega per fer una cavitat |
| Cos de revolució / retall | {{ui:Revolució}} / {{ui:Més}} › {{ui:Tall de revolució}} |
| Pla, eix o punt de referència | {{ui:Més}} › {{ui:Pla}}, {{ui:Eix}}, {{ui:Punt}} (vegeu [Plans, eixos i punts de referència](topic:reference-geometry)) |
| Cos escombrat o de loft, retall, desmotllament | {{ui:Més}} › {{ui:Desmotllament}} sobre cares planes (vegeu [Escombrat, loft i desmotllament](topic:sweep-loft-draft)). {{ui:Escombrat}} i {{ui:Loft}} encara no estan implementats en aquesta versió (necessiten un nucli exacte) |
| Assistent de forats | {{ui:Forat}} en cada punt de croquis solt: simple, avellanat, avellanat cònic (90° / 82°) o roscat ISO mètric M2–M24, passant o cec |
| Matriu lineal o circular, simetria | {{ui:Lineal}}, {{ui:Circular}}, {{ui:Simetria}} (operacions o el cos sencer) |
| Arrodoniment i xamfrà en arestes | {{ui:Arrodoniment}} / {{ui:Xamfrà}}: fes clic a una aresta, {{key:Shift}}+clic per a més, després el botó. Un radi; xamfrans iguals, de dues distàncies o distància-angle. En aquesta versió només arestes rectes entre dues cares planes, i els arrodoniments que es troben en una cantonada s'acaben en bisell. Arrodoneix o bisella arestes corbes al croquis ({{ui:Arrodoniment}} en un croquis, {{key:F}}) |
| Buida | {{ui:Buida}}: fes clic a les cares planes per obrir, després el botó. Un gruix de paret |
| Obre un fitxer STEP | {{ui:Obre}}: es llegeix com a triangles, un cos sòlid sobre el qual construir ([Obre un fitxer STEP](topic:import-step)) |
| Edita l'operació, després D'acord | Fes clic a l'operació; canvia els números a la dreta; es reconstrueix mentre escrius. Sense D'acord ni Cancel·la: fes servir {{key:Mod+Z}} |
| Edita el croquis | Fes doble clic al croquis a l'historial |
| Reconstrueix | Automàtic després de cada canvi. No hi ha cap tecla de reconstruir |
| Suprimeix / reactiva | {{ui:Desactiva}} / {{ui:Reactiva}} al tauler dret |
| Arrossega la barra de retorn | {{ui:Retrocedeix fins aquí}} sobre una operació; fes clic a "Barra de retorn · avança" per tornar |
| Arrossega una operació a l'arbre per reordenar | {{ui:Mou amunt}} / {{ui:Mou avall}} o {{key:Alt+Up}} / {{key:Alt+Down}}; es rebutja amb el motiu quan trencaria una dependència |
| Edita cotes fent doble clic al model | Selecciona l'operació: les cotes del seu croquis es llisten al tauler dret |
| Acoblaments: coincident, concèntric, distància, angle | {{ui:Unió}} ({{key:J}}): tria una cara plana a cada peça; la unió les posa cara a cara. **Centra a** un eix actua com a concèntric; **Desplaçament** com a distància; **Angle** com a angle |
| Component fix | La primera peça és fixada; {{ui:Fes-la la peça fixada}} la canvia |
| Insereix component | {{ui:Afegeix còpia}} o {{ui:Duplica}} (una altra còpia) o {{ui:Insereix}} (des d'un fitxer de peça) |
| Edita la peça dins del conjunt | {{ui:Edita la peça}}, després {{ui:Enrere}} |
| Detecció d'interferències | {{ui:Col·lisió}} |
| Moure un component per veure el moviment | Arrossega el control lliscant d'angle o de desplaçament d'una unió de revolució o lliscant; {{ui:Comprova si el moviment provoca col·lisions}} el recorre. Una peça sense unió: **Mou a mà** (fletxes per arrossegar, o valors escrits) |
| Mesura / inspecciona | {{ui:Vistes}}, després {{ui:Mesura}} ({{key:M}}): distàncies, angles, radis, àrees; {{ui:Propietats de massa}} |
| Vista explosionada, llista de materials | En un conjunt amb res seleccionat: **Vistes explosionades** i **Llista de materials** al tauler dret |
| Propietats de massa | El quadre **Peça**: volum, àrea superficial i mida, del sòlid facetat (una mica baix en peces rodones). Sense massa: encara no hi ha materials |
| Desa, Desa com a STEP | {{ui:Desa}} baixa un `.partcraft.json`; {{ui:Exporta}} té STL, 3MF, STEP exacte (AP242 o AP214), STEP facetat, DXF i un plànol en PDF |
| Fes un plànol de la peça | {{ui:Dibuix}}: un full A3 automàtic amb tres vistes, isomètrica, una secció, un detall, datums, marcs de control de característiques i símbols d'acabat. Només es cota la mida general |
| Gira amb el botó del mig | **Arrossegar amb el botó esquerre** gira aquí. Arrossegar amb el botó del mig o el dret desplaça. La roda fa zoom al punter |
| Orientació de la vista, Normal a | Menú {{ui:Vistes}}; {{ui:Normal a}} per a una cara, pla o croquis triat |
| Zoom per ajustar (F) | {{key:F}}, o {{ui:Ajusta}} (en un croquis, {{key:F}} és l'eina d'arrodoniment) |
| Menús contextuals del botó dret | Cap. Arrossegar amb el botó dret desplaça; en un croquis, el botó dret acaba una cadena de línies |

:::tip
Si les mans et van bé amb SolidWorks, tria l'estil de menú {{ui:Arbre d'operacions}} a {{ui:Configuració}} › {{ui:PartCraft}} › {{ui:Menús, tecles i ratolí}}: una cinta amb les pestanyes Operacions, Croquis, Superfícies, Avaluació, {{ui:Dibuix}}, {{ui:Conjunt}} i Vista; el botó del mig orbita, {{key:Shift}} i el botó del mig desplacen, i el botó esquerre només tria. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).
:::

## Diferències que fan ensopegar la gent

**El croquis sencer és el perfil.** L'extrusió i la revolució fan servir tots els bucles tancats del croquis. No pots triar una regió ni un contorn d'un croquis per a una operació. Fes servir un croquis per operació.

**Quin croquis pren una operació.** Una operació fa servir el croquis que acabes de tancar o el seleccionat a l'historial. Sense res seleccionat, pren el croquis més recent que cap operació no fa servir encara. Si agafa el croquis equivocat, selecciona el correcte i torna a triar l'operació.

**Els canvis s'apliquen mentre escrius.** No hi ha un diàleg d'operació amb D'acord i Cancel·la. Cada número es reconstrueix a l'instant, i {{key:Mod+Z}} és el camí de tornada. La llista de desfer cobreix els canvis de croquis, operacions i ajustos igual.

**La sobredefinició mai no es tolera en silenci.** No hi ha cotes de referència (no de control). Una cota que les altres relacions ja fixen es reporta com a sobredefinida ("ja està implicada. Suprimeix-la."). Una cota en conflicte deixa la geometria intacta i es torna vermella. Suprimeix-ne una, o desfés.

**Els escombrats i els lofts encara no estan implementats; els arrodoniments, xamfrans, buides i desmotllaments tenen límits.** Aquesta versió de PartCraft construeix totes les peces amb un nucli de malla; el xip de la barra d'estat sempre diu "Nucli de malla". Els arrodoniments i xamfrans funcionen en arestes rectes entre dues cares planes, i on es troben arrodoniments en una cantonada s'acaben en bisell, no es fonen. Les buides s'obren, i els desmotllaments inclinen només cares planes. Les operacions que necessiten un nucli exacte segueixen sent clicables, però diuen "encara no implementat" quan les tries. Vegeu [El nucli de malla](topic:solid-kernels) i [Què encara no està implementat](topic:not-built-yet).

**Dos botons anomenats Arrodoniment.** En un croquis, {{ui:Arrodoniment}} ({{key:F}}) arrodoneix una cantonada del croquis. A la peça, l'{{ui:Arrodoniment}} del grup Operacions arrodoneix arestes sòlides (arestes rectes entre cares planes en aquesta versió). No hi ha escombrat ni loft en aquesta versió: vegeu [Què encara no està implementat](topic:not-built-yet).

**Els forats necessiten punts solts.** {{ui:Forat}} perfora en punts creats amb l'eina {{ui:Punt}}. Els centres de cercle i els extrems de línia no compten.

**Travessa-ho tot és només per als retalls.** Un cos necessita una profunditat. Encara no hi ha condicions finals del tipus "fins al vèrtex / superfície / següent".

**El sòlid és facetat.** El nucli de malla construeix les cares rodones a partir de facetes planes, així que la vista, els volums, les exportacions STL i 3MF es fan d'elles: **Corbes** al tauler de la peça les fa més fines. L'exportació STEP exacta no ho és: escriu les cares rodones amb les seves superfícies reals.

**Només mil·límetres.** Encara no hi ha cap ajust en polzades. Multiplica les mides en polzades per 25.4 quan les escriguis.

**Y apunta cap amunt.** El pla Front et mira i Top mira la peça des de dalt, com esperes, però l'eix de dalt del món és Y. Les exportacions STL, 3MF i STEP exacte es giren amb Z cap amunt; el STEP facetat es queda amb Y cap amunt.

**Els acoblaments són cares, no parells de geometria.** Una unió sempre comença des de dues cares planes posades cara a cara. Per a un passador en un forat, tria la cara plana al voltant del forat i l'espatlla del passador, després posa **Centra a** a l'eix del forat i a l'eix de revolució del passador. Les peces que les unions no arriben a tocar es queden on van ser inserides; no pots arrossegar-les. Les unions d'un bucle no es resolen.

**Desar és una baixada.** No hi ha cap fitxer que sobreescriguis una i altra vegada. Cada desament és un fitxer nou a la teva carpeta de baixades. Posa primer nom a la peça i guarda els fitxers en una carpeta de projecte.

**Sense menús contextuals ni pestanyes de gestor d'ordres.** Tot és a la barra d'eines i al tauler dret, i la barra d'eines canvia segons el que facis: les eines de croquis només apareixen en un croquis, i les eines de conjunt només en un conjunt.

**Dins d'un croquis, les tecles són lletres soles.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} i {{key:S}} trien eines sense modificador. Vegeu [Tecles i ratolí](topic:keyboard).
