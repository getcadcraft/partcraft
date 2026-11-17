---
title: Relacions i cotes del croquis
summary: Totes les relacions i cotes que pot tenir un croquis de PartCraft, què cal seleccionar per a cadascuna, el seu símbol i com es comporta en resoldre.
keywords: relacions, restriccions, coincident, horitzontal, vertical, paral·lel, perpendicular, tangent, igual, concèntric, punt mitjà, fixa, distància, distància horitzontal, distància vertical, radi, diàmetre, angle, símbols, glifs
from: 9831e7be
---

Les relacions fixen com es col·loca una geometria respecte a una altra. Les cotes fixen mides. Per afegir una relació, seleccioneu elements amb l'eina Selecciona ({{key:S}}) i trieu-ne el botó al tauler de la dreta; per afegir una cota, useu l'eina Cota ({{key:D}}) o els botons de cota del tauler de la dreta. Com treballar-hi: [Definir completament un croquis](topic:relations-dimensions).

Amb "corba" es vol dir, més avall, un cercle o un arc. L'origen compta com un punt.

## Relacions

| Botó | Símbol | Seleccioneu | Efecte |
|---|---|---|---|
| {{ui:• Coincident}} | • (només es mostra quan està seleccionat o quan hi ha un problema) | Dos punts | Els punts coincideixen |
| {{ui:• Coincident}} | • | Un punt i una línia | El punt queda sobre la línia (o sobre la seva prolongació) |
| {{ui:• Coincident}} | • | Un punt i una corba | El punt queda sobre el cercle o l'arc |
| {{ui:H Horitzontal}} | H | Una línia, o dos punts | La línia és horitzontal, o els dos punts són a la mateixa altura |
| {{ui:V Vertical}} | V | Una línia, o dos punts | La línia és vertical, o els punts són un sobre l'altre |
| {{ui:∥ Paral·lel}} | ∥ | Dues línies | Les línies van en el mateix sentit |
| {{ui:⊥ Perpendicular}} | ⊥ | Dues línies | Les línies es troben en angle recte |
| {{ui:T Tangent}} | T | Una línia i una corba | La línia toca la corba sense creuar-la |
| {{ui:T Tangent}} | T | Dues corbes | Es toquen, per fora o per dins, tal com s'ha dibuixat |
| {{ui:T Tangent}} | T | Una spline i una línia, un arc o una spline que toca un dels seus extrems | La spline surt d'aquell extrem en la direcció de l'altra corba |
| {{ui:= Igual}} | = | Dues línies | Mateixa longitud |
| {{ui:= Igual}} | = | Dues corbes | Mateix radi |
| {{ui:◎ Concèntric}} | ◎ | Dues corbes | Mateix centre |
| {{ui:◎ Concèntric}} | ◎ | Un punt i una corba | El punt és al centre de la corba |
| {{ui:M Punt mitjà}} | M | Un punt i una línia | El punt és al mig de la línia |
| {{ui:↔ Simètric}} | ↔ | Dos punts i una línia | Els punts són imatges especulars respecte a la línia (Simetria n'afegeix) |
| {{ui:⚓ Fixa}} | ⚓ | Un punt, una línia, una corba o una spline | La manté exactament on és ara (una spline: els seus punts) |

Les línies aquí inclouen les línies de centre. En dibuixar s'afegeixen algunes relacions: quan la referència a objectes s'ajusta a un punt, el fa coincident; quan s'ajusta a una corba, posa el punt sobre ella; les línies gairebé horitzontals o verticals reben H o V, i un rectangle arriba amb les quatre cantonades unides, dues H i dues V.

**Fixa** és una manera ràpida d'aturar un element, però després la peça no pot seguir un canvi de cota en un altre lloc. Preferiu les cotes respecte a l'origen.

## Cotes

| Botó | Seleccioneu | Mesura | Es mostra com |
|---|---|---|---|
| {{ui:Distància}} | Una línia | La seva longitud | Distància 40 |
| {{ui:Distància}} | Dos punts | La distància en línia recta entre ells | Distància 40 |
| {{ui:Distància}} | Un punt i una línia | La distància del punt a la línia, perpendicular a ella | Distància 40 |
| {{ui:Distància}} | Dues línies paral·leles | La separació entre elles | Distància 40 |
| {{ui:Distància horitzontal}} | Dos punts, o una línia | Només la distància esquerra-dreta | Distància horitzontal 40 |
| {{ui:Distància vertical}} | Dos punts, o una línia | Només la distància amunt-avall | Distància vertical 40 |
| {{ui:Radi}} | Un cercle o un arc | El seu radi | Radi R10 |
| {{ui:Diàmetre}} | Un cercle o un arc | El seu diàmetre | Diàmetre ⌀20 |
| {{ui:Angle}} | Dues línies que no són paral·leles | L'angle entre elles, de 0 a 180 graus | Angle 30° |

Amb l'eina Cota, PartCraft tria el tipus segons el que feu clic i on col·loqueu el número:

| Feu clic a | Obteniu |
|---|---|
| Una línia | La seva longitud; per a una línia inclinada, horitzontal si el número va per sobre o per sota, i vertical si va al costat |
| Un cercle | Diàmetre |
| Un arc | Radi |
| Dos punts | Distància; horitzontal o vertical com en una línia inclinada |
| Un punt i una línia | Distància del punt a la línia |
| Dues línies | Angle, o la distància si són paral·leles |
| Un punt i un cercle | Res: "Aquests elements no es poden acotar junts." Acoteu al punt central del cercle |

El **desfasament** (mostrat com a distància) el fa l'eina {{ui:Desfasa}}: manté una línia copiada paral·lela a aquella distància, o un arc o un cercle copiat concèntric amb un radi tant més gran o més petit. Els altres trossos del mateix desfasament porten una relació **O** i segueixen l'única cota de desfasament. Vegeu [Splines, retalla, desfasa i altres eines de croquis](topic:sketch-tools).

Els valors de cota són en mil·límetres (o graus), mai negatius. El radi i el diàmetre han de ser més grans que zero. Per a distàncies es permet un valor de 0: dos punts a distància 0 són coincidents.

## Com es comporta la resolució

- **Mínim moviment.** Quan canvia un valor, el solucionador mou la geometria el mínim possible. Una línia que canvia de longitud creix igualment pels dos extrems si no n'hi ha cap de fixat.
- **Sense girs.** Les distàncies d'un punt a una línia, les distàncies horitzontals i verticals, els angles i les tangències recorden per quin costat es van fer. Canviar un valor mai no gira la geometria cap a l'altre costat.
- **Els conflictes no toquen res.** Si les relacions es contradiuen, el croquis queda exactament com estava i les relacions en conflicte es tornen vermelles.
- **Les relacions redundants** (implicades per altres) s'anomenen a la barra d'estat ("ja està implicada. Suprimiu-la.") i la operació es crea igualment, amb un avís.
- **Unions tangents.** Quan un arc d'arrodoniment toca les seves línies en un punt final compartit, la tangència es resol d'una manera que queda ben definida allà, de manera que els arrodoniments de croquis no es llegeixen com a sobredefinits.

## Encara no disponible

Relacions col·lineal, coradial i de perforació; un punt sobre una spline; cotes de referència (impulsades); cotes ordenades i de longitud d'arc; equacions entre cotes. Useu Paral·lel més una distància de 0 per a les línies col·lineals.
