---
title: La pantalla de PartCraft
summary: Un recorregut per cada barra i tauler: la barra d'eines i com canvia, l'historial, les dades de la peça, la vista 3D, el tauler de propietats i la barra d'estat.
keywords: pantalla, disposició, barra d'eines, historial, arbre de funcions, propietats, tauler, barra d'estat, interfície, ui, recorregut, pantalla completa
from: 7394fc49
---

La pantalla té cinc parts: la barra d'eines a dalt, l'historial a l'esquerra, la vista 3D al centre, el tauler de propietats a la dreta i la barra d'estat a baix. Per sobre de totes hi ha la barra de l'aplicació de CadCraft.

## La barra de l'aplicació

La barra fina de dalt de tot pertany al lloc de CadCraft, no pas a PartCraft. Mostra el nom de l'aplicació i on s'executa, un menú de versió, **Sobre PartCraft**, el botó del mode de pantalla i el selector de tema Paper / Model.

- **Paper** són línies fosques sobre un full clar. **Model** són línies clares sobre un fons fosc. Els colors del croquis segueixen el tema.
- {{ui:Configuració}} (la roda dentada, o {{key:Mod+,}}) té una pestanya {{ui:PartCraft}}: quin botó del ratolí gira la vista, la roda del ratolí o el trackpad, i les relacions mentre es fa un croquis. Vegeu [Configuració de PartCraft](topic:settings).
- El botó del mode de pantalla, o {{key:Ctrl+Shift+F}}, passa entre normal, pantalla completa i pantalla completa amb les barres amagades. Amb les barres amagades, mogueu el punter cap a la vora de dalt (o toqueu-hi) per fer-les tornar. {{key:Esc}} torna al mode normal. Aquesta tecla és {{key:Ctrl+Shift+F}} també al Mac, no ⌘.

## La barra d'eines

La barra d'eines està agrupada. Canvia segons el que feu, perquè càpiga en una sola fila:

| Grup | Botons | Es mostra |
|---|---|---|
| Fitxer | {{ui:Nou}}, {{ui:Obre}}, {{ui:Desa}}, {{ui:Exporta}} (un menú) | Sempre |
| Croquis | {{ui:Croquis}} | Quan no hi ha cap croquis obert |
| Croquis | {{ui:Surt}}, {{ui:Línia}}, {{ui:Rectangle}}, {{ui:Cercle}}, {{ui:Arc}}, {{ui:Punt}}, {{ui:Línia de centre}}, {{ui:Arrodoniment}}, {{ui:Cota}}, {{ui:Construcció}} | Només mentre hi ha un croquis obert |
| Operacions | {{ui:Extrudeix}}, {{ui:Retalla}}, {{ui:Revolució}}, {{ui:Forat}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Simetria}}, {{ui:Arrodoniment}}, {{ui:Xamfrà}}, {{ui:Buida}}, {{ui:Més}} (un menú: Revolució retallada, Pla, Eix, Punt, Escombrat, Loft, Desmotllament) | A la peça, no mentre hi ha un croquis o el dibuix obert. Arrodoniment i Xamfrà funcionen sobre arestes rectes entre dues cares planes; Buida i Desmotllament sobre cares planes. L'Escombrat i el Loft encara no estan implementats en aquesta versió (necessiten un nucli exacte); en fer clic en un, ho indica |
| Operacions | {{ui:Fet}} | Només mentre trieu arestes o cares per a un arrodoniment, xamfrà, buidat o desmotllament |
| Dibuix | {{ui:Dibuix}} | A la peça (utilitzable quan la peça té un sòlid) |
| Dibuix | {{ui:Datum}}, {{ui:Marc}}, {{ui:Acabat}}, {{ui:Detall}}, {{ui:PDF}}, {{ui:Enrere}} | Només a la fulla de dibuix |
| Conjunt | {{ui:Conjunt}} | A la peça (utilitzable quan la peça té un sòlid) |
| Conjunt | {{ui:Afegeix còpia}}, {{ui:Insereix}}, {{ui:Unió}}, {{ui:Col·lisió}}, {{ui:Edita la peça}}, {{ui:Tanca}} | Només en un conjunt |
| Conjunt | {{ui:Enrere}} | Mentre editeu una peça des d'un conjunt |
| Edició | {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Més}} (un menú: Retalla, Copia, Enganxa, Enganxa al mateix lloc, Duplica, Suprimeix, Selecciona-ho tot, Neteja la selecció) | Sempre; cada element actua sobre el croquis, l'historial o el conjunt on sou |
| Visualització | {{ui:Ajusta}}, {{ui:Normal a}}, {{ui:Vistes}} (un menú: Mesura, Propietats de massa, Secció, Desmotllament, Zebra, Curvatura, {{ui:Plans base}}, i després Isomètrica, Davant, Darrere, Superior, Inferior, Dreta, Esquerra) | Sempre |

Passeu el punter per sobre d'un botó per veure què fa i quina tecla té. Un botó en gris no es pot fer servir ara: per exemple, els botons d'operacions mentre hi ha un croquis obert, o {{ui:Unió}} abans que el conjunt tingui dues peces.

El menú {{ui:Més}} del grup Edició enumera cada acció d'edició amb la seva tecla. Sobre què actuen copiar i enganxar depèn d'on sou; vegeu [Copia, enganxa i duplica](topic:copy-paste). El consell d'un element en gris diu per què no pot actuar ara.

El menú {{ui:Exporta}} conté {{ui:STL, per a impressió 3D}}, {{ui:3MF, per a impressió 3D}}, {{ui:STEP AP242 (sòlid exacte)}}, {{ui:STEP AP214 (sòlid exacte)}}, {{ui:STEP (facetat, nucli de malla)}}, {{ui:STEP AP214 (facetat, nucli de malla)}}, {{ui:DXF del croquis o de la cara plana}} i {{ui:Dibuix (PDF): vistes, secció, detall, GD&T}}. Els dos elements STEP exactes estan en gris: encara no estan implementats en aquesta versió, de manera que useu {{ui:STEP (facetat, nucli de malla)}}.

## L'historial (esquerra)

El tauler de l'esquerra és l'historial d'operacions de la peça: la llista que PartCraft reconstrueix de dalt a baix.

- El títol és el nom de la peça ("Part1" fins que la reanomeneu).
- **Pla davanter**, **Pla superior** i **Pla dret** van primer. Feu clic a un per seleccionar-lo; es ressalta a la vista.
- Sota hi ha les vostres operacions, en l'ordre en què les heu fetes. Un croquis que fa servir una operació apareix sagnat sota aquesta operació.
- Una marca a l'extrem dret d'una fila indica el seu estat:

| Marca | Significat |
|---|---|
| (cap) | Construïda, i un croquis totalment definit |
| − | Un croquis subdefinit (encara es pot moure) |
| + | Un croquis sobredefinit |
| ⚠ | Construïda, amb un avís (passeu el punter per llegir-lo) |
| ⚠ error | L'operació ha fallat. Passeu el punter per veure per què, o feu-hi clic |
| ⚠ no implementat | L'operació necessita una altra que ha fallat o que està desactivada |
| off | Desactivada |

- Cada operació mostra el seu número principal després del nom, com "25 mm" per a una extrusió o "Ø6.6 passant" per a un forat. Feu doble clic al número, o premeu {{key:F2}} a la fila, per canviar-lo allà mateix. Vegeu [Canvia mides](topic:change-sizes).
- Feu clic a una operació per editar-la a la dreta. Feu doble clic a un croquis per obrir-lo.
- Quan feu retrocés, una fila **Barra de retrocés · avança** apareix a la llista. Les operacions que hi ha per sota estan en gris i no construïdes.
- Amb una fila enfocada, {{key:Up}} i {{key:Down}} es mouen entre files, i {{key:Alt+Up}} / {{key:Alt+Down}} mouen la pròpia operació, quan l'historial ho permet.

En un conjunt, el mateix tauler llista **Peces** (la primera està marcada com a "fixada a terra") i **Unions**.

### Dades de la peça

Sota l'historial, el quadre **Peça** llista el **Volum**, l'**Àrea superficial**, la **Mida (X × Y × Z)**, els **Forats passants**, els **Cossos**, els **Triangles**, el nombre d'**Operacions** i quantes estan **Fallant**. Els volums i les àrees són del sòlid facetat construït pel nucli de malla, una mica per sota del valor real en formes arrodonides (vegeu [Operacions i les seves opcions](topic:features#curves-resolution)).

En un conjunt, el quadre s'encapçala com a **Conjunt**: Peces, Instàncies, Unions, No unides i Interferència.

## La vista 3D (al centre)

La vista mostra el sòlid, els plans base i qualsevol croquis que encara no fa servir cap operació.

Els plans base es dibuixen sencers mentre la peça és buida. Quan té un sòlid, es retiren: es dibuixen tènuement, perquè no tapin la peça, i els clics els travessen fins a la peça. Tornen a sortir sencers mentre trieu on fer un croquis ({{ui:Croquis}} sense cap selecció) i quan en seleccioneu un a l'historial. {{ui:Vistes}} › {{ui:Plans base}} els amaga del tot; continuen mostrant-se mentre trieu on fer el croquis. PartCraft recorda aquesta elecció.

- Arrossegueu per girar la peça, feu clic dret o amb el botó central per desplaçar, i gireu la roda per fer zoom al punter. Detalls a [Tecles i ratolí](topic:keyboard).
- Passeu el punter per sobre d'una cara, d'una aresta o d'un pla per veure'l il·luminat. Feu clic per escollir-lo. Les cares es ressalten senceres i les arestes es dibuixen i se seleccionen senceres. {{key:Shift}}+clic recull diverses arestes o cares. Queden marcades.
- El cub de vista, a dalt a la dreta, gira amb la peça: feu clic a una cara, aresta o cantonada per mirar des d'allà, arrossegueu-lo per girar-lo, i el botó de casa torna a l'inici. Vegeu [El cub de vista](topic:view-cube).
- Una extrusió seleccionada mostra una fletxa taronja a la seva cara final, i una revolució, una fletxa corbada a l'extrem del seu gir: arrossegueu-la per canviar la profunditat o l'angle, o escriviu al quadre del costat. Vegeu [Canvia mides](topic:change-sizes#drag-it-in-the-view).
- Quan una peça és buida, un quadre amb el títol **Comença una peça** enumera els primers passos.
- Deixeu anar un fitxer `.partcraft.json` o `.partcraft-asm.json` en qualsevol lloc de la vista per obrir-lo. Un fitxer `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` deixat allà s'obre com a cos sòlid.

### Mentre trieu arestes o cares

Després d'{{ui:Arrodoniment}}, {{ui:Xamfrà}} o {{ui:Buida}} sense cap selecció (o {{ui:Selecciona arestes}} en una operació així), la peça es mostra com era abans d'aquella operació. Feu clic a arestes o cares per afegir-les o treure-les; les seves marques indiquen què hi ha. {{ui:Fet}} o {{key:Esc}} acaba. Vegeu [Arrodoneix, bisella i buida](topic:fillet-chamfer-shell).

### A la fulla de dibuix

{{ui:Dibuix}} substitueix la vista 3D per la fulla de dibuix A3. La roda fa zoom, arrossegar amb el botó dret o el central desplaça, i {{key:F}} ajusta. Vegeu [Feu un dibuix](topic:drawing-pdf).

### Mentre hi ha un croquis obert

La vista es gira per mirar de cara el pla del croquis, i apareix una capa de croquis 2D a sobre. La peça només mostra les operacions fetes abans d'aquest croquis. Una franja a dalt a l'esquerra mostra el xip d'estat del croquis ("Totalment definit", "Subdefinit · 3 graus de llibertat" i similars) i el seu nom, com "Sketch2 a una cara de Extrude1".

## El tauler de propietats (dreta)

El tauler de la dreta mostra el que hi ha seleccionat, i el seu títol n'indica el nom:

- **Peça** (sense res seleccionat): el **Nom** de la peça i la configuració de **Corbes**.
- Un pla: un botó {{ui:Croquis sobre ell}}.
- Una **Cara**: quin tipus és (cara plana, cilindre amb el seu radi i eix, con, esfera o tor), la seva àrea, quina operació la va fer, i, per a una cara plana, {{ui:Croquis en aquesta cara}}, {{ui:Normal a}}, {{ui:Exporta la cara com a DXF}}, {{ui:Extrudeix des de la cara}}, {{ui:Retalla-la}} i {{ui:Forat aquí}} (vegeu [Estira o empeny una cara sencera](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Una **Aresta**: el seu tipus (recta, un cercle amb el seu centre i radi, o una corba), la seva longitud i les dues cares entre les quals es troba (com "cara final d'Extrude1 i costat d'Extrude1"), amb els botons {{ui:Arrodoniment}} i {{ui:Xamfrà}}.
- Diverses arestes o cares seleccionades amb {{key:Shift}}: quantes, amb {{ui:Arrodoniment}} i {{ui:Xamfrà}} per a les arestes, i {{ui:Neteja}}.
- Una operació: els seus números i opcions, les dimensions del seu croquis, i després {{ui:Desactiva}}, {{ui:Retrocedeix fins aquí}}, {{ui:Mou amunt}}, {{ui:Mou avall}}, {{ui:Suprimeix}} i el seu **Nom**.
- Un croquis obert: el seu estat, les relacions que podeu afegir a la selecció, la llista de relacions i cotes, **Afegeix per coordenades**, i {{ui:Surt del croquis}}, {{ui:Ajusta}} i {{ui:Exporta com a DXF}}.
- A la fulla de dibuix: la configuració de secció i de detall, o el símbol GD&T seleccionat.
- En un conjunt: el conjunt, la peça seleccionada o la unió seleccionada.

Cada caixa de número té efecte quan premeu {{key:Enter}} o {{key:Tab}}, o quan feu clic fora. La peça es reconstrueix de seguida; no hi ha cap botó D'acord. Useu {{key:Mod+Z}} per tornar enrere.

## La barra d'estat (a baix)

- A l'esquerra, les coordenades del punter dins del croquis (només mentre hi ha un croquis obert).
- Al mig, els missatges: què fer a continuació, i per què s'ha rebutjat alguna cosa. Llegiu-lo quan sembli que no passa res.
- A la dreta, el xip del nucli: sempre "Nucli de malla" en aquesta versió. Passeu-hi el punter per saber què vol dir. Vegeu [El nucli de malla](topic:solid-kernels).
- A la part dreta, un xip: "Reconstruint…" mentre la peça es reconstrueix, i després "Reconstruïda en … ms" quan tot va bé, o "1 operació fallant". En un conjunt diu "Col·locat en … ms" o compta els problemes d'unions.

Vegeu també [Comença un manual a Il·lustra](topic:illustrate): l'espai de treball que fa manuals de conjunts a partir de les vostres peces i conjunts.

## En una pantalla estreta

Fins a 760 píxels d'amplada, com en un telèfon, la vista s'adapta a la pantalla: la barra d'eines és una fila que es desplaça de costat, i els taulers s'obren com a fulls des d'una barra a baix. {{ui:Eines}} amaga la barra d'eines, i {{ui:Mou}} la posa a baix. Vegeu [Trackpad, tàctil i pantalles petites](topic:trackpad-and-touch).
