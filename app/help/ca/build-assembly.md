---
title: Construeix un conjunt amb unions
summary: Inicia un conjunt a partir d'una peça, insereix còpies i altres fitxers de peces, uneix-los amb unions rígides, de revolució, lliscants, cilíndriques, planes, de ròtula i de passador en ranura sobre cares planes, centra les unions sobre eixos, edita una peça in situ i desa el conjunt.
keywords: conjunt, acoblament, acoblaments, unió, bucle, bucle tancat, mecanisme, quatre barres, mecanisme articulat, rígida, revolució, lliscant, cilíndrica, plana, ròtula, unió de ròtula, passador en ranura, inserir component, fixada, fixa, concèntrica, coincident, edita la peça, en context, partcraft-asm
from: a53bbfef
---

Un conjunt reuneix peces. A PartCraft, les **unions** col·loquen les peces: cada unió es posa sobre una cara plana de cadascuna de dues peces i les posa cara a cara. Una unió de revolució permet que una peça giri, una de lliscant la fa lliscar, una unió rígida la subjecta.

## Inicia un conjunt

1. Construeix una peça amb un sòlid (una peça buida no pot entrar en un conjunt: "Construeix primer un sòlid i després posa'l en un conjunt.").
2. Tria {{ui:Conjunt}} a la barra d'eines.

La barra d'estat diu "Conjunt iniciat amb Part1 com a peça fixada. Insereix més peces (Afegeix còpia, Insereix o Edita › Duplica) i després uneix-les." El tauler de l'esquerra ara llista **Peces** i **Unions**, i la barra d'eines mostra les eines del conjunt. Les eines de croquis i d'operacions s'amaguen.

La primera peça és **fixada**: mai no es mou, i tota la resta es col·loca en relació amb ella.

## Insereix peces

- {{ui:Afegeix còpia}} insereix una altra còpia de la peça seleccionada (o de l'última). Les còpies comparteixen una peça: edita-la i canvien totes les còpies.
- {{ui:Duplica}} ({{key:Mod+D}}) al grup **Edita** fa el mateix per a la peça seleccionada. {{key:Mod+C}} i {{key:Mod+V}} copien una peça i l'enganxen al costat de les altres, en aquest conjunt o en un altre; {{key:Mod+Shift+V}} l'enganxa al mateix lloc. Vegeu [Copia, enganxa i duplica](topic:copy-paste).
- {{ui:Insereix}} insereix una peça des d'un fitxer `.partcraft.json` de l'ordinador. La peça es copia dins del conjunt.

Les peces noves apareixen a 20 mm a la dreta de tot el que ja hi ha, i es queden allà fins que una unió les col·loca. Una peça sense unió també es pot moure a mà: valors escrits o fletxes que arrossegues (vegeu [Llista de peces, vistes explosionades i peces mòbils](topic:assembly-bom-explode)).

## Uneix dues peces

1. Tria {{ui:Unió}} o prem {{key:J}}. El tauler dret diu **Nova unió**.
2. Fes clic a una cara plana de la primera peça. Es ressalta.
3. Fes clic a una cara plana de la segona peça.

La segona peça salta de manera que la seva cara queda contra la cara de la primera, enfrontada. La unió apareix sota **Unions**, per exemple "Revolute1", i el tauler dret mostra la seva configuració.

- Si totes dues cares les ha fet una revolució, la unió comença sent **de revolució**; si no, **rígida**. Canvia-la després.
- Les cares corbes no es poden triar: "Aquesta cara és corba. Tria una cara plana (per girar al voltant d'un forat o de l'eix d'una revolució, tria-ho després a la unió)."
- {{key:Esc}} cancel·la una unió que has començat (o fes clic a una peça de la llista de l'esquerra).

### Configuració de la unió

| Ajust | Què fa |
|---|---|
| **Tipus** | Una de les unions de la taula de sota |
| **Angle (°)** | Gira la segona peça al voltant de l'eix de la unió (perpendicular a les cares) |
| **Desplaçament (mm)** | Mou la segona peça al llarg de l'eix, allunyant-la de la cara (els valors negatius la fan entrar) |
| **Al llarg de X**, **Al llarg de Y**, **Inclinació al voltant de X**, **Inclinació al voltant de Y**, **Al llarg de la ranura**, **Direcció de la ranura** | Els altres valors, que es mostren per a les unions que els fan servir |
| **Centra a** (per a cada costat) | On creua l'eix de la unió la cara: "L'origen propi de la cara", l'eix d'una revolució ("Eix de Revolve1") o l'eix d'un forat ("Hole1, forat 2") |

Cada valor que una unió deixa moure té un control lliscant d'arrossegament sota el seu camp; la resta es defineixen només una vegada.

| Unió | Què es mou | Es defineix una vegada |
|---|---|---|
| **Rígida** | res | Angle, Desplaçament |
| **De revolució** | Angle (una frontissa) | Desplaçament |
| **Lliscant** | Desplaçament (un calaix) | Angle |
| **Cilíndrica** | Angle i Desplaçament (un eix en un coixinet llis) | |
| **Plana** | Al llarg de X, Al llarg de Y a través de la cara, i Angle (una peça que llisca sobre una taula) | |
| **Ròtula** | Angle (gir) i Inclinació al voltant de X i Y, al voltant del centre de la unió (una unió de ròtula) | |
| **Passador en ranura** | Al llarg de la ranura i Angle (un passador en una ranura recta) | Direcció de la ranura: l'angle de la ranura respecte a X de la cara |

Els eixos X i Y d'una cara són els de la cara de la primera peça; el centre de la unió es defineix amb **Centra a**.

"L'origen propi de la cara" és l'origen de la peça projectat sobre la cara, que sovint no és on vols alinear les peces. Per a peces rodones i passadors, posa **Centra a** a l'eix de la revolució o del forat a tots dos costats: els eixos s'alinearan, com un acoblament concèntric.

### Exemple: dues brides cargolades cara a cara

1. Obre la peça de la brida (una revolució amb una matriu circular de forats) i tria {{ui:Conjunt}}.
2. Tria {{ui:Afegeix còpia}}.
3. Prem {{key:J}}, fes clic a la cara plana del disc de la primera brida (la cara d'on comencen els forats dels cargols), i després a la mateixa cara de la segona brida. Les cares les ha fet la revolució, així que la unió és de revolució.
4. Posa **Centra a** a "Eix de Revolve1" a tots dos costats. Les brides ara comparteixen un eix.
5. Escriu `22.5` a **Angle (°)** per alinear els forats dels cargols, o arrossega el control lliscant.

## Bucles tancats: mecanismes articulats

Les peces unides en un anell (un mecanisme de quatre barres, una manivella i un lliscador, un bastidor reforçat per tots dos costats) formen un **bucle**. PartCraft resol cada bucle perquè es tanqui: les unions que hi ha prenen els valors que tanquen l'anell, movent-se el mínim possible des d'on estaven.

- **Defineix o arrossega** un valor d'una unió d'un bucle i la resta del bucle el segueix. En un mecanisme de quatre barres, arrossega l'**Angle** de la manivella i la biela i el balancí es mouen amb ell. El valor que defineixes es manté; els altres es calculen a partir d'aquest.
- A la llista, una unió d'un bucle que encara pot moure's és **blava**: encara es podria definir un altre valor. Un bucle que no es pot moure (un bastidor reforçat) es queda negre. Un bucle que no es pot tancar és **vermell**.
- El camp **Peça** mostra **Bucles**: quants estan tancats i quants valors encara es poden moure, per exemple "1 tancat; 1 valor encara es pot moure".
- {{ui:Comprova si el moviment provoca col·lisions}} fa recórrer una unió d'un bucle amb el bucle seguint-la, pas a pas (vegeu [Comprova un conjunt per col·lisions i moviment](topic:check-assembly)).

Un mecanisme pla fet amb barres planes ha de coincidir en profunditat: dues peces unides cara a cara als dos costats d'un anell necessiten la mateixa alçada d'apilament en els dos sentits. Fes servir el **Desplaçament** d'una unió per aixecar una peça quan l'apilament no quadra, perquè altrament el bucle no es pot tancar.

## Treballa amb les peces

Fes clic a una peça de la vista o de la llista per seleccionar-la. El tauler dret mostra el seu nom de peça, quantes còpies hi ha, el seu volum, les seves unions, i si és fixada, definida per les seves unions, o "No unida: es queda on es va posar". Botons:

- {{ui:Edita aquesta peça}} (o {{ui:Edita la peça}} a la barra d'eines, o fes doble clic a la peça de la llista): obre la peça per editar-la;
- {{ui:Insereix una còpia}};
- {{ui:Fes-la la peça fixada}};
- {{ui:Treu}}: també elimina les seves unions, després de demanar confirmació.

Un conjunt conserva almenys una peça: "Un conjunt ha de tenir almenys una peça. Tanca'l en lloc d'això."

### Edita una peça in situ

1. Selecciona una peça i tria {{ui:Edita la peça}}. La peça s'obre amb el seu historial; el títol diu "Bracket (en el conjunt Bracket)".
2. Canvia-la com qualsevol altra peça.
3. Tria {{ui:Enrere}} a la barra d'eines. El conjunt s'actualitza: totes les còpies d'aquella peça canvien, i les unions de cares fetes amb arestes de croquis les segueixen.

Tornar el canvi al conjunt és un pas de la llista de desfer del conjunt.

## Desfer, desar i tancar

- El conjunt té la seva pròpia llista de desfer: {{key:Mod+Z}} i {{key:Mod+Y}} actuen sobre les unions, les insercions i els ajustos.
- {{ui:Desa}} o {{key:Mod+S}} baixa `<nom del conjunt>.partcraft-asm.json`, amb totes les peces dins. Obre'l més tard amb {{ui:Obre}}.
- {{ui:Tanca}} tanca el conjunt i torna a la peça des d'on vas començar. Si el conjunt no està desat, pregunta: {{ui:Cancel·la}}, {{ui:Descarta el conjunt}} o {{ui:Desa primer}}.
- Per canviar el nom del conjunt, fes clic a l'espai buit perquè no hi hagi res seleccionat i canvia **Nom** al tauler dret.

## Conjunts grans

Un conjunt pot tenir milers de còpies d'unes poques peces. Les còpies d'una peça es dibuixen juntes, una unió que gires només col·loca les peces que hi ha darrere, i la llista de peces mostra les primeres files amb un botó "Mostra'n més" a sota (la peça seleccionada sempre apareix).

- Mentre gires o fas zoom a la vista, un conjunt de més de uns 300,000 triangles es dibuixa com una caixa per peça, i després completament un moment després d'aturar-te.
- {{ui:Vistes}} › {{ui:Visualització lleugera}} manté les caixes activades sempre. Triar una peça i les unions encara fan servir les peces reals.
- La velocitat de gir també depèn de la teva targeta gràfica. Les xifres que PartCraft ha mesurat són a les notes de la versió, amb la màquina d'on venen.

## Problemes d'unió

- Una peça que cap unió no arriba a tocar es llista com a **lliure** i el tauler diu "Bracket2 no està unida a la peça fixada, així que es queda on es va posar."
- Un bucle que no es pot tancar (les longituds no arriben, un límit atura una unió, les cares no concorden en profunditat): "Revolute3 tanca un bucle que no es pot tancar: està desviat en 2.000 mm. Revisa les cares, els desplaçaments i els límits de les unions del bucle." Les seves unions es tornen vermelles.
- Si una cara o un eix que usa una unió desapareix després d'editar una peça: "La cara que fa servir aquesta unió ja no és a Bracket." Elimina la unió i torna-la a fer.

Següent: [Comprova un conjunt per col·lisions i moviment](topic:check-assembly).
