---
title: Escombrat, loft i desmotllament
summary: Escombreu un perfil tancat al llarg d'un camí de corbes de croquis o arestes del model, feu un loft per seccions en plans diferents, i afegiu desmotllament a les cares; amb les opcions, els resultats exactes i els missatges.
keywords: escombrat, protuberància escombrada, tall escombrat, tub, camí, loft, protuberància amb loft, barreja de seccions, reglat, desmotllament, angle de desmotllament, cares cròniques, pla neutre, direcció d'extracció, emmotllament
from: 9d637981
---

:::note
**En aquesta versió** l'escombrat i el loft encara no estan implementats: necessiten un nucli geomètric exacte, que aquesta versió de PartCraft no té. [Què encara no està implementat](topic:not-built-yet) explica què fer en lloc seu; les seccions Escombrat i Loft descriuen com funcionen amb un nucli exacte. **El desmotllament funciona** sobre cares planes: el nucli de malla el construeix, amb el mateix resultat que dona un nucli exacte.
:::

Totes tres són al menú {{ui:Més}} del grup Operacions (vegeu [El nucli de malla](topic:solid-kernels)). Cadascuna pot afegir material, retallar-lo, mantenir només la intersecció (**Interseca**) o fer un **Cos nou** (escombrat i loft: **Operació** al tauler).

## Escombrat

Un escombrat mou un perfil tancat al llarg d'un camí: canonades, mànecs, molles de filferro, rails.

1. Dibuixeu el **camí** en un croquis: línies i arcs units d'extrem a extrem (o useu arestes del model, més avall).
2. Dibuixeu el **perfil** en un altre croquis el pla del qual passa per un extrem del camí, per exemple un cercle al pla superior a l'inici d'un camí dibuixat al pla frontal.
3. Seleccioneu el croquis del perfil i trieu {{ui:Més}}, després {{ui:Escombrat}}. El croquis diferent més recent esdevé el camí.

Al tauler:

| Paràmetre | Què fa |
|---|---|
| **Path** | Marqueu els croquis que formen el camí (diversos croquis s'uneixen d'extrem a extrem en un sol camí 3D); **Selecciona arestes del model** afegeix arestes de la peça |
| **Orientation** | Segueix el camí (per defecte), Frenet, Fixa (les seccions es mantenen paral·leles al perfil), Manté una direcció, Al llarg d'una corba guia |
| **End scale** | El perfil creix o es redueix linealment fins a aquesta mida al final (1 = constant) |

Els cantons vius del camí es tallen a inglet. Un cercle de radi 5 escombrat al llarg d'una línia de 100 mm és un cilindre de exactament 2500π mm³; al llarg d'un quart d'arc de radi 50, un quart de tor de 625π² mm³.

## Loft

Un loft barreja a través de dues o més seccions en plans diferents.

1. Dibuixeu cada secció en el seu propi croquis (un bucle tancat cadascun), sobre plans de base, plans de referència (vegeu [Plans de referència, eixos i punts](topic:reference-geometry)) o cares.
2. Trieu {{ui:Més}}, després {{ui:Loft}}. Cada croquis d'un sol bucle no utilitzat esdevé una secció, en ordre d'historial.

El tauler enumera les seccions en ordre (**Amunt** reordena, **Elimina** n'elimina una); **Afegeix un croquis** n'afegeix un altre, **Selecciona una cara** afegeix una cara plana de la peça. **Reglat** fa cares planes entre seccions en lloc d'una barreja suau. Entre dos quadrats, el resultat és un tronc de piràmide: un quadrat de 40 mm a un de 20 mm sobre 30 mm dona exactament 28000 mm³.

Les seccions amb un nombre diferent de costats (un quadrat a un triangle) les aparella OpenCascade, que pot torçar les cares laterals; la funció n'avisa. Dibuixeu les seccions amb el mateix nombre de costats, començant per cantons corresponents, per obtenir el resultat més net.

### Guies

Les guies són corbes que els costats del loft han de seguir de la primera secció a l'última, per a un abombament, una cintura o un eixamplament que dibuixeu vosaltres.

1. Dibuixeu dues o més guies: corbes obertes (línies, arcs, splines) que van de la primera secció a l'última i creuen cada secció una vegada. Un sol croquis pot contenir diverses guies: cada cadena separada és una guia pròpia. Dibuixeu una guia de manera que realment toqui cada secció: ajusteu-ne els extrems als punts de les seccions.
2. Al tauler del Loft, sota **Guies**, marqueu els croquis que les contenen, o feu clic a {{ui:Tria arestes del model com a guies}} i feu clic a arestes de la peça ({{key:Esc}} acaba).

Amb guies, el loft és una superfície Gordon que passa per les seccions i les guies (vegeu [Superfícies a través d'una xarxa de corbes](topic:gordon-surfaces)), tancada plana als dos extrems per fer un sòlid. El tauler indica quant de prop les segueix. Cada secció ha de ser llavors un croquis (un punt o una cara no poden prendre una guia), i **Reglat** no s'aplica. Una guia que no toca una secció per més de 0.01 mm es rebutja, amb la distància.

Comprovat: dos cercles (de 20 mm i 10 mm de diàmetre separats 40 mm) amb quatre guies rectes donen el volum del tronc de con amb un error inferior a 0.000002 %; arcs que s'abomben 5 mm donen un barril que segueix cada guia dins de 0.00001 mm.

## Desmotllament

El desmotllament inclina les cares perquè una peça pugui sortir d'un motlle.

1. Trieu {{ui:Més}}, després {{ui:Desmotllament}} (o premeu {{key:Shift}} i feu clic a cares primer). Sense res seleccionat esteu en mode de selecció: feu clic a cada cara que vulgueu inclinar, i després a {{ui:Fet}}.
2. Definiu **Angle (°)**, el **Pla neutre** (on les cares mantenen la mida) i la **Direcció d'extracció** (per defecte, la normal del pla neutre).

Un angle positiu inclina la cara cap a dins al llarg de l'extracció i treu material; un de negatiu n'afegeix. El pla neutre comença com el pla superior. En aquesta versió només es poden desmotllar cares planes: un cilindre, un con o una cara de forma lliure diu "Desmotllament: en aquesta versió només cares planes (el nucli de malla el construeix)." Els quatre costats d'un bloc de 100 × 100 × 50 desmotllat 5° al voltant de la seva base esdevenen un tronc de piràmide d'exactament h/3·(a² + b² + ab), amb b = a − 2h·tan 5°.

## Missatges

| Missatge | Què cal fer |
|---|---|
| "El pla del perfil ha de passar per un extrem del camí …" | Mogueu el croquis del perfil a l'inici (o al final) del camí |
| "El camí té una interrupció: les seves corbes no s'uneixen d'extrem a extrem …" | Uniu les corbes del camí; en croquis separats els seus extrems han de coincidir exactament |
| "Una secció del loft necessita exactament un bucle tancat" | Partiu el croquis, o elimineu el bucle sobrant |
| "… no es pot desmotllar respecte a aquest pla neutre …" | La cara és paral·lela al pla neutre o no el toca |
| "Desmotllament: en aquesta versió només cares planes (el nucli de malla el construeix)." | Una cara seleccionada és corba. Elimineu-la; desmotlleu només cares planes |

:::note
Encara no implementat: escombrats amb torsió, escombrats de paret prima i de superfície, guies del loft i tangència als extrems, desmotllament de cilindres, cons i cares de forma lliure.
:::
