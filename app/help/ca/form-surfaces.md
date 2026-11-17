---
title: Formes lliures amb Forma, i característiques de superfície
summary: Empenyeu i estireu una gàbia de control suau a l'espai de treball Forma, plegueu arestes, feu servir la simetria, comproveu-ho i acabeu-ho en un sòlid o una superfície exactes, i després feu pegats, lofts, cosiu, engrosseu, desplaceu, estengueu i retalleu superfícies a Disseny. Què és exacte i què és aproximat.
keywords: forma, forma lliure, t-spline, subdivisió, catmull-clark, gàbia, quadesfera, plec, simetria, zebra, curvatura, superfície, pegat, emplenament, superfície loft, cosit, cosir, engrossa, superfície de desplaçament, estén, retalla
from: 0d326ef4
---

:::note
**Encara no implementat en aquesta versió.** Acabar una forma dins de la peça, i les característiques de superfície, necessiten un nucli de geometria exacte, que aquesta versió de PartCraft no té: construeix totes les peces amb el nucli de malla. [Què encara no està implementat](topic:not-built-yet) explica què fer en lloc d'això. La resta d'aquesta pàgina descriu com funcionen amb un nucli exacte.
:::

L'espai de treball **Forma** fa formes orgàniques. Editeu una **gàbia**, una malla gruixuda de cantonades, arestes i cares. La forma és la superfície suau que controla la gàbia (la seva superfície límit de Catmull–Clark), de manera que moure una cantonada doblega la superfície suaument al seu voltant. Quan sembla bé, {{ui:Finish}} l'afegeix a l'historial de la peça com a característica *Forma*, i el nucli exacte la converteix en superfícies B-spline reals. Després la podeu arrodonir, tallar, unir amb altres característiques i exportar com a STEP.

Trieu **Forma** a la llista **Espai de treball**, a l'esquerra de la barra d'eines.

## Comença una gàbia

1. Definiu **Mida** i **Divisions** al panell de la dreta. Divisions és quantes cares té cada costat.
2. Feu clic a {{ui:Box}}, {{ui:Quadball}} o {{ui:Plane}} a la barra d'eines. El panell també té **Cilindre**, **Tor** i **Cares per clics**.

- Una **quadesfera** és una gàbia de caixa ajustada perquè els seus punts de cantonada estiguin sobre una esfera. Entre aquests punts la superfície queda una mica dins de l'esfera: uns 0.4 % menys de volum amb 2 divisions.
- Un **pla** és obert, de manera que esdevé un cos de superfície (vegeu "Característiques de superfície a Disseny" més avall).
- **Cares per clics**: feu clic a 4 punts del pla superior (de terra) o a cantonades de la gàbia per fer una cara. Les cares que comparteixen cantonades s'uneixen. Premeu {{key:Enter}} després de 3 punts per a un triangle, o {{key:Esc}} per aturar.

La vostra gàbia sense acabar es desa amb el fitxer de la peça, de manera que podeu tancar el fitxer i continuar més tard.

## Triar i moure

- Feu clic a una cantonada, una aresta o una cara de la gàbia. {{key:Shift}}+clic afegeix o treu elements. {{key:Esc}} buida la selecció.
- Un giny apareix al mig de la selecció. Arrossegueu una fletxa per moure's al llarg d'ella, o un quadrat per moure's en aquell pla. Premeu {{key:W}} per moure, {{key:E}} per girar i {{key:R}} per escalar, o feu servir els botons del panell. {{ui:Gizmo}} a la barra d'eines recorre aquests modes.
- **Caiguda suau** (mm) també desplaça les cantonades que hi ha dins d'aquella distància, esvaint-se suaument fins a zero a la vora d'aquella distància.
- Cada arrossegament és un sol pas de desfer: {{key:Ctrl+Z}} i {{key:Ctrl+Y}} funcionen com sempre.

## Canviar la gàbia

Els botons **Modifica** del panell actuen sobre la selecció:

| Botó | Què fa |
|---|---|
| {{ui:Extrude}} | Les cares triades es desplacen **Distància d'extrusió**, al llarg de les seves normals, amb cares laterals noves. Les arestes obertes triades fan créixer cares noves cap a fora. |
| {{ui:Edge loop}} / Insereix un bucle d'arestes | Divideix l'anell de cares de quatre costats que creua l'aresta triada, a mig camí. Més bucles donen corbes més ajustades. |
| Insereix un punt | Afegeix una cantonada al mig de l'aresta triada. |
| Subdivideix | Divideix cada cara triada en cares de quatre costats al voltant del seu centre. |
| Pont | Uneix dues cares triades, o dues obertures (trieu una aresta oberta a cadascuna), amb un tub de cares. Tots dos necessiten el mateix nombre d'arestes. |
| Omple el forat | Tanca l'obertura a través de l'aresta oberta triada amb una sola cara. |
| Solda | Fon les cantonades triades en una, al seu mig. |
| Aplana | Mou les cantonades triades sobre el pla que millor les ajusta. |
| Suprimeix | Treu les cares triades, les arestes (dues cares es fonen) o les cantonades. |

## Arestes vives, simetria i visualització

- {{ui:Crease}} fa vives les arestes triades. **Pes del plec** 10 és totalment viu. Un pes més petit es manté viu durant aquest nombre de passos d'afinament i després s'suavitza, cosa que dona un arrodoniment ajustat en lloc d'un plec dur. **Desfés el plec** les torna suaus. **Vèrtex viu** fixa una cantonada perquè la superfície hi passi amb un punt.
- **Simetria** emmiralla la gàbia respecte de X, Y o Z = 0. Manté el costat positiu, el reflecteix i uneix les dues meitats. Després, una edició en un costat es fa en tots dos. Les cantonades sobre el pla de simetria s'hi queden.
- {{ui:Display}} canvia entre **Suau** (la superfície que serà la característica) i **Caixa** (les mateixes cares de la gàbia).
- **Anàlisi**: les **Ratlles zebra** reflecteixen una llum amb ratlles des de la vista actual. Es doblegen suaument sobre una superfície suau i es trenquen en un plec. La **Curvatura mitjana** ombreja les àrees convexes en vermell, les còncaves en blau i les planes en blanc. Es mesura a la malla mostrada amb la fórmula de la cotangent, de manera que és una guia, no pas una mesura.

## Comprova i acaba

- **Comprova exacte** converteix la gàbia al nucli exacte sense canviar la vostra peça. Informa de quants pegats B-spline fa la gàbia, quants són exactes, i si el resultat és un sòlid tancat i vàlid, i quin és el seu volum.
- {{ui:Finish}} afegeix una característica *Forma* a l'historial, o actualitza la forma que editàveu, i us porta de nou a Disseny. Una gàbia tancada esdevé un sòlid. La seva **Operació** al panell de Disseny pot ser Cos nou, Uneix, Talla o Interseca. Una gàbia oberta esdevé un cos de superfície.
- Per canviar una forma més tard, seleccioneu-la a l'historial i feu clic a **Edita a Forma**. El cos construït s'amaga mentre editeu la seva gàbia.
- {{ui:Discard}} llença la gàbia sense tocar l'historial.

## Què és exacte i què és aproximat

Cada cara de quatre costats de la gàbia, refinada quan cal, esdevé un pegat bicúbic B-spline.

- Quan cada cantonada d'una cara és *regular* (quatre arestes es troben dins de la superfície, o tres en una aresta oberta o al llarg d'un plec), el pegat és **exactament** la superfície de subdivisió. Les proves ho comproven fins a 1e-9 mm.
- Al voltant d'un **punt extraordinari** (tres, cinc o més arestes que es troben, una cantonada d'una cara de tres o cinc costats, o l'extrem d'un plec) no hi ha cap pegat polinòmic exacte. Allà el pegat pren el punt exacte i el pla tangent en aquella cantonada i les corbes d'aresta dels veïns, de manera que els pegats encara es toquen sense buits. La continuïtat tangent a través de les arestes que es troben en el punt és aproximada. El panell Forma i el de la característica donen l'angle més gran, normalment per sota de 2°. Un **Nivell** més alt al panell de la característica fa aquests pegats més petits i més propers.
- Els plecs vius són arestes reals del sòlid, de manera que es poden arrodonir.
- Cada pegat és la seva pròpia cara, de manera que una forma té moltes cares i es dibuixen línies entre elles.

## Característiques de superfície a Disseny

Les ordres de superfície són al menú {{ui:More}} de Disseny, sota les característiques. Necessiten el nucli exacte. Els cossos de superfície es dibuixen transparents en blau. No formen part del sòlid fins que els engrosseu o els cosiu.

| Ordre | Què fa |
|---|---|
| Pegat | Omple un bucle tancat d'arestes. Premeu {{key:Shift}}+clic a les arestes del sòlid abans, o seleccioneu un cos de superfície per omplir-ne l'obertura. **Tangent (G1)** fa que el pegat coincideixi suaument amb aquella superfície. |
| Superfície loft | Una superfície que passa per una cadena de corbes per croquis (oberta o tancada), en ordre d'historial. |
| {{ui:Stitch}} | Cus cossos de superfície al llarg de les seves arestes compartides. Si es tanquen, el resultat és un sòlid, amb una Operació com les altres característiques. |
| {{ui:Thicken}} | Dona a un cos de superfície un gruix: al llarg de la seva normal, en contra d'ella, o la meitat a cada banda. El resultat és un sòlid. |
| Superfície de desplaçament | Una còpia d'un cos de superfície desplaçada al llarg de les seves normals. L'original es manté. |
| Estén superfície | Fa créixer una superfície d'una sola cara més enllà de les arestes que trieu. |
| {{ui:Trim surface}} | Talla un cos de superfície on un altre cos de superfície, o el sòlid, el travessa. Feu clic a **Trieu un punt a la peça** per triar quina peça conservar, o conserveu-ho tot la resta. |

{{ui:Stitch}}, {{ui:Thicken}}, Estén superfície i {{ui:Trim surface}} consumeixen el cos de superfície del qual parteixen. Les característiques posteriors fan servir el nou.

Límits d'avui: les formes amb diverses peces tancades separades no es converteixen en un sol sòlid; les àrees regulars no es fonen en superfícies més grans; i vegeu [Què encara no està implementat](topic:not-built-yet).
