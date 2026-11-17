---
title: Comença amb PartCraft
summary: Què fa PartCraft avui, què necessita el navegador, i una primera peça en deu minuts, des del croquis fins al fitxer desat.
keywords: començar, primera execució, inici ràpid, introducció, tutorial, primera peça, placa, paramètric, modelador de peces
from: 7d43283f
---

PartCraft és l'aplicació de peces paramètriques i de conjunts de la família CadCraft. Dibuixeu un croquis 2D, el fixeu amb relacions i cotes, el convertiu en un sòlid amb característiques com extrudir, revolució i forat, i canvieu qualsevol número més tard: la peça es reconstrueix a partir del seu historial. Les peces després passen a conjunts, on les unions les situen i us deixen comprovar el moviment.

Què fa aquesta versió:

| Tasca | Què obteniu |
|---|---|
| Croquis | Línies, rectangles, cercles, arcs, punts i línies de centre, amb relacions i cotes, i un estat en directe: sota definit, totalment definit o sobredefinit |
| Característiques sòlides | Extrudir, retallar, revolució, retall per revolució, forats simples i amb rebaix, patrons lineals i circulars, simetria, arrodoniments i xamfrans a arestes rectes entre cares planes, i buidats i desmotllaments a cares planes. Els escombrats, els lofts i les altres característiques que necessiten un nucli exacte encara no estan implementats en aquesta versió: vegeu [Què encara no està implementat](topic:not-built-yet) |
| Historial | Editeu els números de qualsevol característica, suprimiu-la, torneu enrere, reordeneu-la i esborreu-la, amb desfer |
| Conjunts | Peces unides per unions rígides, de revolució i de lliscament, una comprovació de col·lisions i una comprovació de moviment |
| Dibuixos | Un full A3 amb tres vistes, una isomètrica, una secció, una vista de detall, mides globals, datums, marcs de control de geometria i símbols d'acabat superficial, exportat com a PDF |
| Fitxers | Els seus propis fitxers de peça i de conjunt; sortida STL, 3MF, STEP exacte, DXF i PDF |

Tot funciona al vostre navegador, al vostre ordinador. **No es puja res.** Vegeu [Fitxers: obrir, desar i exportar](topic:files) per saber on van els fitxers.

## Què necessiteu

- Un Chrome, Edge, Firefox o Safari actual amb **WebGL** (gràfics 3D) i **WebAssembly** activats. Tots dos estan activats per defecte. La geometria sòlida la construeix un nucli de malla WebAssembly que es carrega amb l'aplicació: vegeu [El nucli de malla](topic:solid-kernels).
- El ratolí és el més fàcil. El trackpad funciona, i les pantalles tàctils funcionen per visualitzar i per a croquis senzills: vegeu [Trackpad, tàctil i pantalles petites](topic:trackpad-and-touch).
- Una pantalla d'almenys 1280 píxels d'amplada mostra tota la barra d'eines en una fila. Les finestres més estretes fan desplaçar la barra d'eines lateralment; en un telèfon, els panells s'obren com a fulls des d'una barra a la part inferior.

Més sobre navegadors: [Navegadors i ordinadors](common:browsers).

:::note
PartCraft funciona al navegador, i a l'escriptori dins de CadCraft Studio. Encara no hi ha desament al núvol: obriu les peces des del vostre ordinador i les torneu a desar com a fitxers.
:::

## Obriu PartCraft

1. Obriu PartCraft.
2. Espereu mentre la pantalla diu "Carregant el nucli sòlid…". La primera vegada triga una mica.
3. Veureu una vista 3D buida amb tres plans base, l'historial a l'esquerra ("Part1", després Pla davant, Pla superior, Pla dret) i una caixa a la vista amb el títol "Comença una peça".
4. El distintiu prop de l'extrem dret de la barra d'estat diu "Nucli de malla": PartCraft construeix cada peça amb el nucli de malla en aquesta versió, de manera que les superfícies rodones són facetes planes. Podeu començar a modelar de seguida.

Si la vista diu que el navegador no pot mostrar 3D, o que el nucli no s'ha carregat, vegeu [Resolució de problemes](topic:troubleshooting#the-app-does-not-start).

## La vostra primera peça: una placa amb un forat

Farem una placa de 60 × 40 mm, de 10 mm de gruix, amb un forat de 6 mm que la travessa. Les unitats són mil·límetres.

### Dibuixeu el contorn

1. Feu clic a **Pla davant** a l'historial de l'esquerra. El pla es ressalta a la vista.
2. Trieu {{ui:Sketch}} a la barra d'eines, o premeu {{key:S}}. La vista es gira per mirar de cara al pla, i l'eina Línia queda activa.
3. Premeu {{key:R}} per a l'eina Rectangle.
4. Mogueu el punter sobre l'origen (el petit cercle vermell amb una creu). Un quadrat petit mostra que s'ajusta. Feu clic.
5. Mogueu-vos amunt i a la dreta i feu clic de nou. Teniu un rectangle. Les seves línies són blaves: blau vol dir que encara es poden moure.

### Doneu-li mides

1. Premeu {{key:D}} per a l'eina Cota.
2. Feu clic a la línia de dalt, després feu clic una mica per sobre. S'obre una caixa de número amb la longitud actual.
3. Escriviu `60` i premeu {{key:Enter}}. El rectangle passa a tenir 60 mm d'amplada.
4. Feu clic a la línia de l'esquerra, després feu clic una mica a l'esquerra. Escriviu `40` i premeu {{key:Enter}}.

El distintiu a la cantonada superior esquerra de la vista ara diu **Totalment definit** i les línies es tornen tinta (negre al tema Paper, clar al tema Model). Tots els punts i totes les mides estan fixats.

:::tip
Si heu començat el rectangle lluny de l'origen, el distintiu encara diu "Sota definit · 2 graus de llibertat". Premeu {{key:S}} per a Selecciona, feu clic a una cantonada, {{key:Shift}}+clic a l'origen, i després trieu {{ui:• Coincident}} al panell de la dreta.
:::

### Extrudiu-la

1. Trieu {{ui:Exit}} a la barra d'eines, o premeu {{key:Esc}} fins que el croquis es tanqui (normalment dues vegades).
2. Trieu {{ui:Extrude}}. Apareix un sòlid de 10 mm. "Extrude1" s'afegeix a l'historial, amb "Sketch1" sagnat a sota.
3. El panell de la dreta mostra la configuració de l'extrusió. Per canviar el gruix, escriviu un número nou a **Profunditat (mm)** i premeu {{key:Enter}} o {{key:Tab}}. La peça es reconstrueix de seguida.

### Afegiu el forat

1. Feu clic a la gran cara plana de davant de la placa (l'extrem de l'extrusió). Tota la cara es ressalta i el panell de la dreta diu **Cara**.
2. Trieu {{ui:Sketch on this face}} al panell de la dreta.
3. Premeu {{key:P}} per a l'eina Punt i feu clic a prop del centre de la cara.
4. Trieu {{ui:Exit}}.
5. Trieu {{ui:Hole}}. Un forat de 6 mm travessa la placa. Canvieu **Diàmetre (mm)** al panell de la dreta si voleu.

El quadre **Peça** a la part inferior esquerra ara mostra un volum, una àrea superficial, la mida (60 × 40 × 10 mm) i "Forats passants: 1".

### Deseu-la

1. Premeu {{key:Mod+S}} o trieu {{ui:Save}}.
2. El navegador baixa `Part1.partcraft.json` a la carpeta de baixades. El fitxer conté tot l'historial: obriu-lo de nou amb {{ui:Open}} per continuar editant.

Per canviar primer el nom de la peça, feu clic a un espai buit de la vista perquè no hi hagi res seleccionat, i escriviu un **Nom** nou al panell de la dreta.

## On anar després

- [Dibuixeu el vostre primer croquis](topic:sketch-basics) i [Definiu totalment un croquis](topic:relations-dimensions) expliquen bé el croquisador.
- [Canvieu una peça a través del seu historial](topic:edit-history) mostra com editar el que heu construït.
- [Arrodoniu, xamfraneu i buideu](topic:fillet-chamfer-shell) i [Feu un dibuix](topic:drawing-pdf) acaben la peça. [Què encara no està implementat](topic:not-built-yet) enumera el que aquesta versió no fa, com ara els escombrats i els lofts.
- [Si veniu d'un altre modelador paramètric](topic:coming-from) enumera els hàbits que funcionen de manera diferent aquí.
- [Tecles i ratolí](topic:keyboard) és la llista completa de dreceres.
- [Com utilitzar aquesta ajuda](common:help).
