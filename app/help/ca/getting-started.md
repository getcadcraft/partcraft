---
title: Comença amb PartCraft
summary: Què fa PartCraft avui, què necessita el navegador, i una primera peça en deu minuts, des del croquis fins al fitxer desat.
keywords: començar, primera execució, inici ràpid, introducció, tutorial, primera peça, placa, paramètric, modelador de peces
from: 5f0a668d
---

PartCraft és l'aplicació de peces i conjunts paramètrics de la família CadCraft. Dibuixeu un croquis 2D, el lligueu amb relacions i cotes, el convertiu en un sòlid amb operacions com extrudeix, revolució i forat, i podeu canviar qualsevol número més tard: la peça es reconstrueix a partir del seu historial. Després, les peces van a conjunts, on les unions les col·loquen i us deixen comprovar el moviment.

Aquesta versió fa:

| Tasca | Què obteniu |
|---|---|
| Croquis | Línies, rectangles, cercles, arcs, punts i línies de centre, amb relacions i cotes, i un estat en directe: subdefinit, totalment definit o sobredefinit |
| Operacions sòlides | Extrudeix, retalla, revolució, revolució retallada, forats simples i escarits, patrons lineals i circulars, simetria, arrodoniments i xamfrans sobre arestes rectes entre cares planes, i buidats i desmotllaments sobre cares planes. Els escombrats, els lofts i les altres operacions que necessiten un nucli exacte encara no estan implementats en aquesta versió: vegeu [Què encara no està implementat](topic:not-built-yet) |
| Historial | Editeu els números de qualsevol operació, desactiveu-la, retrocediu, reordeneu-la i esborreu-la, amb desfer |
| Conjunts | Peces unides amb unions rígides, de revolució i de lliscament, una comprovació de col·lisions i una comprovació de moviment |
| Dibuixos | Una fulla A3 amb tres vistes, una isomètrica, una secció, una vista de detall, mides generals, datums, marcs de control d'elements i símbols d'acabat superficial, exportats com a PDF |
| Fitxers | Els seus propis fitxers de peça i de conjunt; sortida en STL, 3MF, STEP facetat, DXF i PDF |

Tot funciona al navegador, al vostre ordinador. **No es puja res.** Vegeu [Fitxers: obre, desa i exporta](topic:files) per saber on van els fitxers.

## Què necessiteu

- Un Chrome, Edge, Firefox o Safari actualitzat amb **WebGL** (gràfics 3D) i **WebAssembly** activats. Els dos ho estan per defecte. La geometria sòlida la construeix un nucli de malla WebAssembly que es carrega amb l'aplicació: vegeu [El nucli de malla](topic:solid-kernels).
- Un ratolí és el més fàcil. El trackpad funciona, i les pantalles tàctils serveixen per veure i fer croquis senzills: vegeu [Trackpad, tàctil i pantalles petites](topic:trackpad-and-touch).
- Una pantalla d'almenys 1280 píxels d'amplada mostra tota la barra d'eines en una fila. Les finestres més estretes fan desplaçar la barra d'eines de costat; en un telèfon, els taulers s'obren com a fulls des d'una barra a baix.

Més sobre navegadors: [Navegadors i ordinadors](common:browsers).

:::note
PartCraft funciona al navegador, i a l'escriptori dins de CadCraft Studio. El desament al núvol encara no està disponible: obriu les peces des del vostre ordinador i les torneu a desar com a fitxers.
:::

## Obriu PartCraft

1. Obriu PartCraft.
2. Espereu mentre la pantalla diu "Carregant el nucli de sòlids…". La primera vegada triga una mica.
3. Veureu una vista 3D buida amb tres plans base, l'historial a l'esquerra ("Part1", i després Pla davanter, Pla superior, Pla dret) i una caixa a la vista amb el títol "Comença una peça".
4. El xip de la part dreta de la barra d'estat diu "Nucli de malla": PartCraft construeix cada peça amb el nucli de malla en aquesta versió, de manera que les cares arrodonides són facetes planes. Podeu començar a modelar de seguida.

Si la vista diu que el navegador no pot mostrar 3D, o que el nucli no s'ha carregat, vegeu [Solució de problemes](topic:troubleshooting#the-app-does-not-start).

## La vostra primera peça: una placa amb un forat

Farem una placa de 60 × 40 mm, de 10 mm de gruix, amb un forat de 6 mm que la travessa. Les unitats són mil·límetres.

### Dibuixeu el contorn

1. Feu clic a **Pla davanter** a l'historial de l'esquerra. El pla es ressalta a la vista.
2. Trieu {{ui:Croquis}} a la barra d'eines, o premeu {{key:S}}. La vista es gira per mirar el pla de cara, i l'eina Línia queda activa.
3. Premeu {{key:R}} per a l'eina Rectangle.
4. Moveu el punter sobre l'origen (el petit cercle vermell amb una creu). Un petit quadrat indica que s'ajusta. Feu clic.
5. Mogueu-vos amunt i a la dreta i torneu a fer clic. Teniu un rectangle. Les seves línies són blaves: el blau vol dir que encara es poden moure.

### Doneu-li mides

1. Premeu {{key:D}} per a l'eina Cota.
2. Feu clic a la línia superior, i després una mica per sobre. S'obre una caixa de número amb la longitud actual.
3. Escriviu `60` i premeu {{key:Enter}}. El rectangle passa a tenir 60 mm d'amplada.
4. Feu clic a la línia esquerra, i després una mica a l'esquerra. Escriviu `40` i premeu {{key:Enter}}.

El xip de dalt a l'esquerra de la vista ara diu **Totalment definit** i les línies es tornen tinta (negre al tema Paper, clar al tema Model). Cada punt i cada mida estan fixats.

:::tip
Si heu començat el rectangle lluny de l'origen, el xip segueix dient "Subdefinit · 2 graus de llibertat". Premeu {{key:S}} per a Selecciona, feu clic a una cantonada, després {{key:Shift}}+clic a l'origen, i trieu {{ui:• Coincident}} al tauler de la dreta.
:::

### Extrudiu-la

1. Trieu {{ui:Surt}} a la barra d'eines, o premeu {{key:Esc}} fins que el croquis es tanqui (normalment, dues vegades).
2. Trieu {{ui:Extrudeix}}. Apareix un sòlid de 10 mm. "Extrude1" s'afegeix a l'historial, amb "Sketch1" sagnat a sota.
3. El tauler de la dreta mostra la configuració de l'extrusió. Per canviar el gruix, escriviu un número nou a **Profunditat (mm)** i premeu {{key:Enter}} o {{key:Tab}}. La peça es reconstrueix de seguida.

### Afegiu el forat

1. Feu clic a la cara plana gran de davant de la placa (el final de l'extrusió). Tota la cara es ressalta i el tauler de la dreta diu **Cara**.
2. Trieu {{ui:Croquis en aquesta cara}} al tauler de la dreta.
3. Premeu {{key:P}} per a l'eina Punt i feu clic prop del centre de la cara.
4. Trieu {{ui:Surt}}.
5. Trieu {{ui:Forat}}. Un forat de 6 mm travessa la placa. Canvieu **Diàmetre (mm)** al tauler de la dreta si voleu.

La caixa **Peça**, a baix a l'esquerra, ara mostra un volum, una àrea superficial, la mida (60 × 40 × 10 mm) i "Forats passants: 1".

### Deseu-la

1. Premeu {{key:Mod+S}} o trieu {{ui:Desa}}.
2. El navegador baixa `Part1.partcraft.json` a la carpeta de baixades. El fitxer conté tot l'historial: obriu-lo de nou amb {{ui:Obre}} per continuar editant.

Per canviar primer el nom de la peça, feu clic a un espai buit de la vista perquè no hi hagi res seleccionat, i escriviu un **Nom** nou al tauler de la dreta.

## Per on continuar

- [Dibuixeu el primer croquis](topic:sketch-basics) i [Definiu totalment un croquis](topic:relations-dimensions) expliquen bé el croquisador.
- [Canvieu una peça a través del seu historial](topic:edit-history) mostra com editar el que heu construït.
- [Arrodoniu, bisellau i buideu](topic:fillet-chamfer-shell) i [Feu un dibuix](topic:drawing-pdf) acaben la peça. [Què encara no està implementat](topic:not-built-yet) enumera el que aquesta versió no fa, com ara els escombrats i els lofts.
- [Veniu d'un altre modelador paramètric](topic:coming-from) enumera els hàbits que aquí funcionen d'una altra manera.
- [Tecles i ratolí](topic:keyboard) és la llista completa de dreceres.
- [Com fer servir aquesta ajuda](common:help).
