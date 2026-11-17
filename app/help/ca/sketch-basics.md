---
title: Dibuixar el primer croquis
summary: Obrir un croquis en un pla o en una cara plana, dibuixar línies, rectangles, cercles, arcs, punts i línies de centre, arrodonir una cantonada, seleccionar, arrossegar i suprimir.
keywords: croquis, dibuix, línia, rectangle, cercle, arc, punt, línia de centre, construcció, arrodoniment, arrodoniment de croquis, arrodonir cantonada, referència a objectes, seleccionar, finestra, arrossegar, perfil
from: 28be7436
---

Cada sòlid comença com un croquis: un dibuix pla sobre un pla. Aquest recorregut cobreix les eines de dibuix. Per fixar el croquis amb relacions i cotes, vegeu [Definir completament un croquis](topic:relations-dimensions).

## Iniciar un croquis

Podeu fer un croquis sobre un pla de base o sobre qualsevol cara plana de la peça.

1. Trieu on fer el croquis:
   - un pla de base: feu clic a **Pla davanter**, **Pla superior** o **Pla dret** a l'historial, o feu clic al pla a la vista;
   - una cara plana: feu clic a la cara a la vista. Tota la cara es ressalta.
2. Trieu {{ui:Croquis}} a la barra d'eines o premeu {{key:S}}. (Amb una cara triada també podeu triar {{ui:Croquis en aquesta cara}} al tauler de la dreta; amb un pla, {{ui:Croquis sobre ell}}.)

La vista es gira perpendicular al pla, les eines de croquis apareixen a la barra d'eines i l'eina Línia queda preparada. Si premeu {{ui:Croquis}} sense cap element triat, es mostren els plans de base i la barra d'estat diu "Feu clic en un pla o una cara plana per fer-hi un croquis. Esc atura."

:::note
Una cara corba no pot tenir un croquis: "Aquesta cara és corba. Trieu una cara plana o un pla per fer-hi un croquis."
:::

**Un croquis sobre una cara segueix aquesta cara.** Si la cara es va crear amb una aresta d'un croquis o amb el final d'una extrusió, el croquis es mou quan canvia l'operació (una butxaca més profunda s'emporta amb ella el croquis del seu fons). Si el tauler diu que la cara és "Fixa on s'ha triat", el croquis es queda on és ara la cara.

## Les eines de dibuix

Cada eina té un botó a la barra d'eines i una tecla. Trieu el mateix botó de nou, premeu {{key:S}} o premeu {{key:Esc}} per tornar a Selecciona.

| Eina | Tecla | Com dibuixar |
|---|---|---|
| {{ui:Línia}} | {{key:L}} | Feu clic al punt inicial i després a cada punt següent. Les línies s'encadenen d'extrem a extrem. Acabeu la cadena amb {{key:Esc}}, {{key:Enter}}, un clic amb el botó dret o un doble clic. Fer clic en un punt existent també l'acaba |
| {{ui:Rectangle}} | {{key:R}} | Feu clic en una cantonada i després en la cantonada oposada. Obteniu quatre línies unides a les cantonades, dues horitzontals i dues verticals |
| {{ui:Cercle}} | {{key:C}} | Feu clic al centre i després en un punt de la circumferència |
| {{ui:Arc}} | {{key:A}} | Feu clic al centre, després a l'inici i després al final. L'arc segueix el sentit en què moveu el punter al voltant del centre |
| {{ui:Punt}} | {{key:P}} | Feu clic. Un punt sol marca un centre de forat per a {{ui:Forat}} |
| {{ui:Línia de centre}} | {{key:N}} | Com una línia, un segment a la vegada. Es dibuixa en traç discontinu; és geometria de construcció, que es fa servir com a eix de revolució o com a referència |
| {{ui:Arrodoniment}} | {{key:F}} | Feu clic en una cantonada on es troben dues línies, escriviu el radi i premeu {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Feu clic als punts per on passa la corba; {{key:Enter}} acaba, i un clic al primer punt la tanca. Vegeu [Splines, retalla, desfasa i altres eines de croquis](topic:sketch-tools) |
| {{ui:Retalla}} | {{key:T}} | Feu clic al tros d'una corba que cal eliminar, fins als encreuaments més propers |
| {{ui:Cota}} | {{key:D}} | Vegeu [Definir completament un croquis](topic:relations-dimensions) |

Mentre dibuixeu, una petita caixa al costat del punter mostra la longitud, la mida, el diàmetre o el radi.

### Escriviu la mida mentre dibuixeu

Després del primer clic d'una línia, rectangle, cercle o arc, podeu escriure la mida en lloc de fer-hi clic. En escriure un número s'obre la caixa al costat del punter amb aquest número:

| Eina | Caixes ({{key:Tab}} passa a la següent) | Què passa amb {{key:Enter}} |
|---|---|---|
| {{ui:Línia}}, {{ui:Línia de centre}} | Longitud, després Angle (°) respecte a l'eix X del croquis | La línia es dibuixa d'aquesta longitud, cap al punter o amb l'angle escrit; la cadena continua des del seu extrem |
| {{ui:Rectangle}} | Amplada, després Alçada | El rectangle es dibuixa des de la primera cantonada cap al punter; una mida que no heu escrit surt del punter |
| {{ui:Cercle}} | Diàmetre | El cercle es dibuixa amb aquest diàmetre |
| {{ui:Arc}} | Radi després del centre, després Angle de l'arc (°) després de l'inici | L'inici se situa a aquesta distància del centre; després l'arc recorre aquesta distància en el sentit en què heu mogut el punter |

Cada mida que escriviu es converteix en una **cota impulsora** en el mateix pas, de manera que el croquis surt ja acotat: {{key:Mod+Z}} elimina alhora la forma i les seves cotes. Fer clic en lloc de premer {{key:Enter}} manté el que heu escrit i pren la resta del clic. {{key:Esc}} tanca la caixa i torna al punter.

Desactiveu-ho a {{ui:Configuració}} › {{ui:PartCraft}} › **Cota mentre dibuixeu** si només voleu dibuixar amb clics. Vegeu [Configuració de PartCraft](topic:settings).

{{ui:Més}}, al final de les eines de croquis, conté la spline de punts de control, {{ui:Estén}}, {{ui:Desfasa}}, {{ui:Simetria}}, {{ui:Polígon}}, {{ui:Ranura}}, els patrons de croquis i {{ui:Projecta aresta}}: vegeu [Splines, retalla, desfasa i altres eines de croquis](topic:sketch-tools).

### Referències a objectes

Les referències a objectes afegeixen relacions per vosaltres, perquè el croquis es mantingui unit quan es mou:

- En un **punt final o l'origen**, es mostra un petit quadrat. El punt nou queda coincident amb ell.
- En una **línia, cercle o arc**, es mostra una petita creu. El punt nou es col·loca sobre aquella corba.
- Una línia a menys de 3 graus de l'horitzontal o de la vertical s'hi ajusta i rep una relació horitzontal o vertical. L'etiqueta mostra "H" o "V".

Per evitar una referència, feu zoom perquè feu clic més lluny del punt o de la corba.

## Arrodonir una cantonada

1. Premeu {{key:F}} o trieu {{ui:Arrodoniment}}.
2. Feu clic en el punt de cantonada on es troben dues línies.
3. S'obre una caixa amb un radi suggerit. Escriviu el radi i premeu {{key:Enter}}.

Les dues línies es retallen i s'uneixen amb un arc tangent amb una cota de radi. Missatges que podeu veure: "Un arrodoniment necessita una cantonada on es troben exactament dues línies." i "Aquest radi és massa gran per a aquestes línies."

:::tip
Un arrodoniment de croquis arrodoneix una cantonada del perfil, de manera que l'extrusió té arestes verticals arrodonides. Per arrodonir les arestes del sòlid mateix (per exemple les arestes superiors d'una placa), useu l'operació {{ui:Arrodoniment}} a la peça: vegeu [Arrodonir, xamfrar i buidar](topic:fillet-chamfer-shell). Al croquis, l'{{ui:Arrodoniment}} de la barra d'eines és l'eina de croquis; a la peça, és l'operació.
:::

## Geometria de construcció

Les línies, cercles i arcs de construcció són discontinus i grisos. Serveixen de guia al croquis però no formen part del perfil que s'extrudeix o es revoluciona.

1. Seleccioneu les línies, cercles o arcs.
2. Premeu {{key:Q}} o trieu {{ui:Construcció}}. Premeu-ho de nou per tornar-los a canviar.

## Seleccionar, arrossegar i suprimir

Premeu {{key:S}} (o {{key:Esc}} fins que cap eina estigui activa) per a Selecciona.

- Feu clic en un punt, línia, cercle, arc, símbol de relació o cota per seleccionar-lo. {{key:Shift}}+clic afegeix a la selecció o en treu. A Windows i Linux, {{key:Ctrl}}+clic fa el mateix; en un Mac, ⌘+clic.
- Arrossegueu sobre un espai buit per dibuixar una finestra: tot el que queda completament dins es selecciona.
- Arrossegueu un punt o una línia per moure'l. El solucionador manté totes les relacions i cotes mentre es mou, de manera que només es mou la geometria lliure. Arrossegueu la vora d'un cercle per canviar-ne el radi.
- Arrossegueu el número d'una cota per moure l'etiqueta.
- Premeu {{key:Delete}} o {{key:Backspace}}, o trieu {{ui:Suprimeix}} al tauler de la dreta, per suprimir la selecció. Suprimir geometria suprimeix les relacions que hi són.

## Zoom i desplaçament al croquis

- Gireu la roda per fer zoom al punter.
- Arrossegueu amb el botó central o el dret per desplaçar.
- {{ui:Ajusta}} a la barra d'eines o al tauler de la dreta ajusta el croquis a la vista. En un croquis, la tecla {{key:F}} és l'eina Arrodoniment, no Ajusta.

## Tancar el croquis

Trieu {{ui:Surt}} a la barra d'eines o {{ui:Surt del croquis}} al tauler de la dreta, o premeu {{key:Esc}} fins que el croquis es tanqui. Cada {{key:Esc}} primer cancel·la el que està en curs, després torna a Selecciona, després neteja la selecció, i el següent tanca el croquis.

El croquis queda seleccionat, de manera que la següent {{ui:Extrudeix}} o {{ui:Revolució}} l'usa.

## Quina és una bona forma de perfil

{{ui:Extrudeix}} i {{ui:Revolució}} usen **cada bucle tancat** de les línies, cercles, arcs i splines del sòlid del croquis (els que no són de construcció). Els bucles dins de bucles es converteixen en forats.

- Cada extrem ha de tocar exactament un altre extrem. "El perfil és obert: un extrem a (12.5, 40) no està unit a res." indica el lloc.
- Cap tres extrems no poden trobar-se en un mateix punt: "El perfil es bifurca a (0, 20): més de dos extrems es troben allà."
- Els punts i la geometria de construcció s'ignoren en el perfil.

Següent: [Definiu completament un croquis amb relacions i cotes](topic:relations-dimensions).

## Un croquis a partir d'una foto

**Operacions › Més › Croquis a partir d'una foto…** (o el grup Croquis de la cinta de l'arbre d'operacions) tradueix una imatge d'una peça plana sobre un fons senzill (el contorn i els forats) o un dibuix a llapis en un croquis de línies, arcs i cercles. Indiqueu una longitud (l'amplada, l'alçada o el costat més llarg) perquè el croquis tingui la mida correcta, comproveu el que ha trobat a la vista prèvia i trieu **Fes el croquis**; també pot extrudir-lo, en el mateix pas de desfer. Es tradueix en aquest ordinador. Els radis de cantonada surten amb una precisió d'uns 5 %; es perden detalls d'un o dos píxels, i una foto presa inclinada o amb ombres sobre la peça no es redreça: fotografieu la peça de cara, amb llum uniforme.
