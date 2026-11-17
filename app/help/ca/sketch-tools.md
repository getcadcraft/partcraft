---
title: Splines, retalla, desfasa i altres eines de croquis
summary: Dibuixar splines de punts de pas i de punts de control, retallar i estendre corbes, desfasar una cadena, fer simetria respecte a una línia de centre, afegir polígons i ranures, fer patrons de geometria de croquis i projectar arestes del model.
keywords: spline, punt de pas, punt de control, b-spline, nurbs, corba, retalla, estén, desfasa, simetria, simètric, polígon, hexàgon, ranura, patró, matriu lineal, matriu circular, projecta, projecta aresta, inclou, converteix entitats
from: 3ecb166a
---

Aquestes eines funcionen en un croquis obert. {{ui:Spline}} i {{ui:Retalla}} són a la barra d'eines. Les altres són sota {{ui:Més}}, al final de les eines de croquis. Cada eina és un sol pas de desfer, i {{key:Esc}} l'atura. Per a les eines bàsiques de dibuix vegeu [Dibuixar el primer croquis](topic:sketch-basics).

## Splines

Una spline és una corba suau. Hi ha dos tipus.

| Eina | Tecla | Com dibuixar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Feu clic als punts per on passa la corba. Acabeu amb {{key:Enter}}, {{key:Esc}}, un clic amb el botó dret o un doble clic. Torneu a fer clic al primer punt per tancar la spline |
| {{ui:Spline de punts de control}} (sota {{ui:Més}}) | | Feu clic als punts de control. La corba és atreta cap a ells però només toca el primer i l'últim. El polígon de control discontinu es mostra mentre dibuixeu i després |

- **Els punts són punts de croquis.** Arrossegueu-los, o doneu-los relacions i cotes com a qualsevol altre punt. El primer punt d'una spline es pot enganxar a l'extrem d'una línia, cosa que les uneix amb una relació coincident.
- **Tangent en un extrem.** Seleccioneu una línia, un arc o una spline que toqui un extrem d'una spline, i després la spline, i trieu {{ui:T Tangent}}. La direcció de l'extrem de la spline segueix aleshores la línia. Una tangent fora dels extrems de la spline es rebutja: "Una tangent a una spline necessita que la línia, l'arc o la spline toquin un dels seus extrems."
- **Extrems.** Sense relació de tangent, els extrems d'una spline de punts de pas són naturals (sense curvatura just a l'extrem). La corba és cúbica i passa per tots els punts, amb l'espaiat definit per les distàncies entre els punts.
- **Les splines tancades** formen un perfil per si soles. Les splines obertes uneixen línies i arcs en un bucle tancat, com qualsevol altra corba.
- Suprimir un punt dins d'una spline elimina aquell punt i manté la spline, mentre en tingui almenys dos (tres si és tancada).

L'extrusió i la revolució construeixen la spline amb el nucli de malla, a partir de trossos rectes curts (les corbes veritables necessiten un nucli exacte: encara no implementat en aquesta versió). L'exportació DXF escriu una spline com una polilínia que es manté dins de 0.01 mm de la corba, perquè DXF R12 no té entitat spline.

## Retalla i estén

| Eina | Tecla | Com |
|---|---|---|
| {{ui:Retalla}} | {{key:T}} | Assenyaleu una corba: el tros que sortiria es mostra en vermell, fins als encreuaments més propers. Feu clic per eliminar-lo. Una corba que no encreua res s'elimina sencera |
| {{ui:Estén}} (sota {{ui:Més}}) | {{key:E}} | Feu clic en una línia o un arc a prop de l'extrem per estendre'l. Creix fins a la següent corba que trobi. "No hi ha res on arribi aquest extrem." quan no hi ha cap obstacle |

Retalla i Estén funcionen amb línies, arcs, cercles i splines (Estén: només línies i arcs).

- Un **cercle** retallat es converteix en un arc. La seva cota de radi o de diàmetre passa a l'arc.
- Retallar el mig d'una línia deixa dues línies que queden sobre la mateixa recta. Retallar el mig d'un arc deixa dos arcs amb el mateix centre i una relació Igual.
- Una **spline** retallada es converteix en una spline de punts de control que segueix exactament la corba antiga. Una relació de tangent en un extrem que es conserva, es manté.
- El nou extrem es col·loca sobre la corba que el va tallar (sobre la línia, l'arc o el cercle, o coincident amb el seu extrem). Les splines no poden tenir un punt, de manera que una spline que talla no afegeix cap relació.

**Les relacions que ja no encaixen s'eliminen**, i la barra d'estat diu quantes. Per exemple, una cota de longitud en una línia retallada s'elimina, però les relacions horitzontal o paral·lela es mantenen.

## Desfasament

1. Trieu {{ui:Desfasa}} sota {{ui:Més}} o premeu {{key:O}}.
2. Feu clic en una línia, un arc, un cercle o una spline. Tota la seva cadena es ressalta: totes les corbes unides d'extrem a extrem, fins a un punt on es troben tres o més. Per desfasar només una part d'una cadena, seleccioneu primer aquelles corbes, després trieu Desfasa i feu clic en una d'elles.
3. Moveu el punter cap al costat on va la còpia. Una previsualització discontínua el segueix. Premeu {{key:B}} per als dos costats.
4. Feu clic, escriviu la distància i premeu {{key:Enter}}.

Les línies i els arcs es desfasen exactament. Les cantonades s'estenen o es retallen fins que es troben. La còpia té una cota de **Desfasa** i la resta de trossos la segueixen: feu doble clic a la cota per canviar tota la còpia. Una distància massa gran per a la cadena es rebutja, per exemple "Aquesta distància és massa gran per a aquesta cadena: un costat es giraria cap a dins."

Una **spline** es desfasa amb una nova spline de punts de pas dins de 0.001 mm del desfasament veritable. Aquesta còpia queda fixa: no segueix canvis posteriors i no té cota de desfasament. Una spline en una cadena necessita unions suaves (tangents) als seus extrems.

## Simetria

1. Amb Selecciona, trieu el que voleu simetritzar.
2. Trieu {{ui:Simetria}} sota {{ui:Més}} o premeu {{key:M}}.
3. Feu clic a la línia o a la línia de centre respecte a la qual es fa la simetria.

Cada punt simetritzat rep una relació **Simètric** amb el seu original, de manera que la còpia segueix els canvis de l'original. Els punts que són sobre la línia de simetria es comparteixen, i els cercles simetritzats reben una relació Igual. Si no hi havia res seleccionat, feu clic als elements a simetritzar, premeu {{key:Enter}} i després feu clic a la línia de simetria.

## Polígons i ranures

| Eina | Com |
|---|---|
| {{ui:Polígon}} | Feu clic al centre, després a una cantonada, i escriviu el nombre de costats (de 3 a 64). Els costats són iguals i les cantonades són sobre un cercle de construcció. Acoteu el cercle per dimensionar el polígon |
| {{ui:Ranura}} | Feu clic al centre d'un extrem, després al centre de l'altre extrem, i després feu clic per definir l'amplada. Dues línies, tangents a dos semicercles iguals |

## Patrons de croquis

Seleccioneu primer la geometria, després:

- {{ui:Matriu lineal}}: feu clic a un punt inicial, després on va la primera còpia, i escriviu el nombre de còpies (incloent-hi l'original).
- {{ui:Matriu circular}}: feu clic al centre, després escriviu el nombre de còpies, repartides de manera uniforme en una volta completa.

Les còpies porten amb elles les relacions entre la geometria seleccionada (una matriu circular deixa fora les horitzontals i les verticals). Les còpies no estan enllaçades amb l'original: si canvieu una, les altres es queden tal com estan.

## Projectar arestes de la peça

1. Trieu {{ui:Projecta aresta}} sota {{ui:Més}}.
2. Feu clic en una aresta recta o circular de la peça que hi ha darrere del croquis.

L'aresta es copia exactament sobre el pla del croquis i queda fixa (relació Fixa). No segueix canvis posteriors de la peça. Premeu {{key:Q}} per convertir-la en geometria de construcció. Un cercle inclinat respecte al pla del croquis es projectaria com una el·lipse, de manera que es rebutja. També es rebutgen les arestes de forma lliure i les arestes que apunten recte fora del croquis. Projectar necessita un nucli exacte: encara no està implementat en aquesta versió.
