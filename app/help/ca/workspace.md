---
title: La pantalla de PartCraft
summary: Un recorregut per totes les barres i tots els taulers: la barra d'eines i com canvia, l'historial, les dades de la peça, la vista 3D, el tauler de propietats i la barra d'estat.
keywords: pantalla, disposició, barra d'eines, historial, arbre d'operacions, propietats, tauler, barra d'estat, interfície, ui, recorregut, pantalla completa
from: 5b5bb843
---

La pantalla té cinc parts: la barra d'eines a la part superior, l'historial a l'esquerra, la vista 3D al centre, el tauler de propietats a la dreta i la barra d'estat a sota. Per sobre de tot hi ha la barra d'aplicació de CadCraft.

## La barra d'aplicació

La barra fina de dalt de tot pertany al lloc de CadCraft, no a PartCraft mateix. Mostra el nom de l'aplicació i on s'executa, un menú de versions, **Quant a PartCraft**, el botó de mode de pantalla i el commutador de tema Paper / Model.

- **Paper** són línies fosques sobre un full clar. **Model** són línies clares sobre un fons fosc. Els colors dels croquis segueixen el tema.
- {{ui:Configuració}} (l'engranatge, o {{key:Mod+,}}) té una pestanya {{ui:PartCraft}}: quin botó del ratolí gira la vista, la roda del ratolí o el ratolí tàctil, i les relacions mentre dibuixeu el croquis. Vegeu [Configuració de PartCraft](topic:settings).
- El botó de mode de pantalla, o {{key:Ctrl+Shift+F}}, passa per la pantalla normal, la pantalla completa i la pantalla completa amb les barres amagades. Amb les barres amagades, moveu el punter fins a la vora superior (o toqueu-hi) per fer-les tornar. {{key:Esc}} torna a la normalitat. Aquesta tecla és {{key:Ctrl+Shift+F}} també en un Mac, no ⌘.

## La barra d'eines

La barra d'eines està agrupada. Canvia segons el que feu, de manera que hi cap en una sola fila:

| Grup | Botons | Es mostra |
|---|---|---|
| Fitxer | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Export}} (un menú) | Sempre |
| Croquis | {{ui:Sketch}} | Quan no hi ha cap croquis obert |
| Croquis | {{ui:Exit}}, {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Només mentre hi ha un croquis obert |
| Operacions | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:More}} (un menú: Retall per revolució, Pla, Eix, Punt, Escombrat, Loft, Desmotllament) | A la peça, no mentre hi ha un croquis o el dibuix obert. Arrodoniment i Xamfrà funcionen en arestes rectes entre dues cares planes; Buida i Desmotllament en cares planes. Escombrat i Loft encara no estan implementats en aquesta versió (necessiten un nucli exacte); en fer-hi clic, l'aplicació ho diu |
| Operacions | {{ui:Done}} | Només mentre trieu arestes o cares per a un arrodoniment, xamfrà, buida o desmotllament |
| Dibuix | {{ui:Drawing}} | A la peça (utilitzable quan la peça té un sòlid) |
| Dibuix | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Back}} | Només al full de dibuix |
| Conjunt | {{ui:Conjunt}} | A la peça (utilitzable quan la peça té un sòlid) |
| Conjunt | {{ui:Add copy}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:Edit part}}, {{ui:Close}} | Només en un conjunt |
| Conjunt | {{ui:Back}} | Mentre editeu una peça des d'un conjunt |
| Edita | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} (un menú: Retalla, Copia, Enganxa, Enganxa al mateix lloc, Duplica, Suprimeix, Selecciona-ho tot, Neteja la selecció) | Sempre; cada element actua sobre el croquis, l'historial o el conjunt on sou |
| Vista | {{ui:Fit}}, {{ui:Normal to}}, {{ui:Views}} (un menú: Mesura, Propietats de massa, Secció, Desmotllament, Zebra, Curvatura, {{ui:Base planes}}, i després Isomètrica, Davant, Enrere, Dalt, Baix, Dreta, Esquerra) | Sempre |

Passeu el punter per sobre d'un botó per veure què fa i quina tecla té. Un botó en gris no es pot utilitzar ara: per exemple, els botons d'operació mentre hi ha un croquis obert, o {{ui:Joint}} abans que el conjunt tingui dues peces.

El menú {{ui:More}} del grup Edita llista cada acció d'edició amb la seva tecla. Sobre què actuen copiar i enganxar depèn d'on sigueu; vegeu [Copia, enganxa i duplica](topic:copy-paste). El consell d'un element en gris indica per què no pot actuar ara.

El menú {{ui:Export}} conté {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} i {{ui:Drawing (PDF): views, section, detail, GD&T}}. Els elements de STEP exacte escriuen les cares rodones amb les seves superfícies reals; els facetats les escriuen com a cares planes.

## L'historial (a l'esquerra)

El tauler de l'esquerra és l'historial d'operacions de la peça, la llista que PartCraft reconstrueix de dalt a baix.

- El títol és el nom de la peça ("Part1" fins que el canvieu).
- **Pla Davant**, **Pla Dalt** i **Pla Dreta** van primers. Feu clic a un per seleccionar-lo; es ressalta a la vista.
- Sota d'ells hi ha les vostres operacions en l'ordre en què es van fer. Un croquis que fa servir una operació apareix sagnat sota aquesta operació.
- Una marca a l'extrem dret d'una fila us indica el seu estat:

| Marca | Significat |
|---|---|
| (res) | Construïda, i el croquis està totalment definit |
| − | Un croquis que està infradefinit (encara es pot moure) |
| + | Un croquis que està sobredefinit |
| ⚠ | Construïda, amb un avís (passeu el punter per llegir-lo) |
| ⚠ error | L'operació ha fallat. Passeu el punter per llegir-ne el motiu, o feu-hi clic |
| ⚠ no construïda | L'operació necessita una altra que ha fallat o està desactivada |
| off | Desactivada |

- Cada operació mostra el seu número principal després del nom, com "25 mm" per a una extrusió o "Ø6.6 thru" per a un forat. Feu doble clic al número, o premeu {{key:F2}} a la fila, per canviar-lo allà mateix. Vegeu [Canvia mides](topic:change-sizes).
- Feu clic a una operació per editar-la a la dreta. Feu doble clic en un croquis per obrir-lo.
- Quan retrocediu, una fila **Barra de retrocés · avança** apareix a la llista. Les operacions que hi ha sota estan en gris i no construïdes.
- Amb una fila enfocada, {{key:Up}} i {{key:Down}} es mouen entre files, i {{key:Alt+Up}} / {{key:Alt+Down}} mouen la pròpia operació, quan l'historial ho permet.

En un conjunt, el mateix tauler llista en lloc d'això **Peces** (la primera està marcada com "fixada") i **Unions**.

### Dades de la peça

Sota l'historial, el quadre **Peça** llista el **Volum**, l'**Àrea de superfície**, la **Mida (X × Y × Z)**, els **Forats passants**, els **Cossos**, els **Triangles**, el nombre d'**Operacions** i quantes estan **Fallant**. Els volums i les àrees són del sòlid facetat construït pel nucli de malla, una mica per sota del valor real per a formes rodones (vegeu [Operacions i les seves opcions](topic:features#curves-resolution)).

En un conjunt, el quadre es titula **Conjunt**: Peces, Instàncies, Unions, Sense unir i Interferència.

## La vista 3D (al centre)

La vista mostra el sòlid, els plans base i qualsevol croquis que encara no fa servir cap operació.

Els plans base es dibuixen completament mentre la peça és buida. Quan ja té un sòlid, passen a segon pla: dibuixats amb poca intensitat, perquè no tapin la peça, i els clics els travessen i arriben a la peça. Tornen a sortir completament mentre trieu on dibuixar el croquis ({{ui:Croquis}} sense res triat) i quan en seleccioneu un a l'historial. {{ui:Vistes}} › {{ui:Plans base}} els amaga del tot; continuen veient-se mentre trieu on dibuixar el croquis. PartCraft recorda aquesta elecció.

- Arrossegueu per girar la peça, arrossegueu amb el botó dret o amb el del mig per desplaçar, i gireu la roda per fer zoom al punter. Detalls a [Tecles i ratolí](topic:keyboard).
- Passeu el punter per sobre d'una cara, aresta o pla per veure'l il·luminat. Feu clic per triar-lo. Les cares es ressalten senceres, i les arestes es dibuixen i es trien senceres. {{key:Shift}}+clic reuneix diverses arestes o cares. Es queden marcades.
- El cub de vista de la cantonada superior dreta gira amb la peça: feu clic a una cara, aresta o cantonada per mirar des d'allà, arrossegueu-lo per girar, i el botó de casa torna a l'inici. Vegeu [El cub de vista](topic:view-cube).
- Una extrusió seleccionada mostra una fletxa taronja a la seva cara final, i una revolució una fletxa corba al final del seu gir: arrossegueu-la per canviar la profunditat o l'angle, o escriviu al quadre que hi ha al costat. Vegeu [Canvia mides](topic:change-sizes#drag-it-in-the-view).
- Quan una peça és buida, un quadre amb el títol **Comença una peça** llista els primers passos.
- Deixeu un fitxer `.partcraft.json` o `.partcraft-asm.json` en qualsevol lloc de la vista per obrir-lo. Un fitxer `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` deixat allà s'obre com un cos sòlid.

### Mentre trieu arestes o cares

Després de {{ui:Fillet}}, {{ui:Chamfer}} o {{ui:Shell}} sense res triat (o {{ui:Pick edges}} en una operació així), la peça es mostra tal com era abans d'aquella operació. Feu clic a arestes o cares per afegir-les o treure-les; les seves marques indiquen què hi ha. {{ui:Done}} o {{key:Esc}} acaba. Vegeu [Arrodoniment, xamfrà i buidatge](topic:fillet-chamfer-shell).

### Al full de dibuix

{{ui:Drawing}} substitueix la vista 3D pel full de dibuix A3. La roda fa zoom, arrossegar amb el botó dret o el del mig desplaça, i {{key:F}} ajusta. Vegeu [Fer un dibuix](topic:drawing-pdf).

### Mentre hi ha un croquis obert

La vista es gira per mirar directament el pla del croquis, i apareix una capa de croquis 2D a sobre. La peça només mostra les operacions fetes abans d'aquest croquis. Una franja a la cantonada superior esquerra mostra l'etiqueta d'estat del croquis ("Totalment definit", "Infradefinit · 3 graus de llibertat" i així successivament) i el seu nom, com "Croquis2 sobre una cara de Extrude1".

## El tauler de propietats (a la dreta)

El tauler de la dreta mostra el que sigui seleccionat, i el seu títol el nomena:

- **Peça** (res seleccionat): el **Nom** de la peça i l'ajust de **Corbes**.
- Un pla: un botó {{ui:Croquis sobre ell}}.
- Una **Cara**: quin tipus és (cara plana, cilindre amb el seu radi i eix, con, esfera o tor), la seva àrea, quina operació la va fer, i per a una cara plana {{ui:Croquis en aquesta cara}}, {{ui:Normal a}}, {{ui:Exporta la cara com a DXF}}, {{ui:Extrudeix des de la cara}}, {{ui:Retalla-la}} i {{ui:Forat aquí}} (vegeu [Estira o empeny una cara sencera](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Una **Aresta**: el seu tipus (recta, un cercle amb el seu centre i radi, o una corba), la seva longitud i les dues cares entre les quals es troba (com "Cara final d'Extrude1 i costat d'Extrude1"), amb els botons {{ui:Arrodoniment}} i {{ui:Xamfrà}}.
- Diverses arestes o cares triades amb {{key:Shift}}: quantes, amb {{ui:Arrodoniment}} i {{ui:Xamfrà}} per a les arestes, i {{ui:Neteja}}.
- Una operació: els seus números i opcions, les dimensions del seu croquis, i després {{ui:Desactiva}}, {{ui:Retrocedeix fins aquí}}, {{ui:Mou amunt}}, {{ui:Mou avall}}, {{ui:Suprimeix}} i el seu **Nom**.
- Un croquis obert: el seu estat, les relacions que podeu afegir a la selecció, la llista de relacions i cotes, **Afegeix per coordenades**, i {{ui:Surt del croquis}}, {{ui:Ajusta}} i {{ui:Exporta com a DXF}}.
- Al full de dibuix: els ajustos de secció i detall, o el símbol GD&T seleccionat.
- En un conjunt: el conjunt, la peça seleccionada, o la unió seleccionada.

Cada quadre de número té efecte en prémer {{key:Enter}} o {{key:Tab}}, o en fer clic fora. La peça es reconstrueix a l'instant; no hi ha botó D'acord. Useu {{key:Mod+Z}} per tornar enrere.

## La barra d'estat (a sota)

- A l'esquerra, les coordenades del punter dins del croquis (només mentre hi ha un croquis obert).
- Al mig, els missatges: què fer tot seguit, i per què alguna cosa s'ha rebutjat. Llegiu-lo quan sembli que no passa res.
- Cap a la dreta, la fitxa del nucli: sempre "Nucli de malla" en aquesta versió. Passeu-hi el punter per saber què vol dir. Vegeu [El nucli de malla](topic:solid-kernels).
- A la dreta, una fitxa: "Reconstruint…" mentre la peça es reconstrueix, després "Reconstruïda en … ms" quan tot va bé, o "1 operació que falla". En un conjunt diu "Col·locat en … ms" o compta els problemes d'unions.

Vegeu també [Comença un manual a Il·lustra](topic:illustrate): l'espai de treball que fa manuals de conjunt a partir de les vostres peces i conjunts.

## En una pantalla estreta

Fins a 760 píxels d'amplada, com en un telèfon, la vista conserva la pantalla: la barra d'eines és una fila que es desplaça lateralment, i els taulers s'obren com a fulls des d'una barra a sota. {{ui:Eines}} amaga la barra d'eines i {{ui:Mou}} la posa a sota. Vegeu [Ratolí tàctil, pantalla tàctil i pantalles petites](topic:trackpad-and-touch).
