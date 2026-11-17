---
title: Superfícies a través d'una xarxa de corbes (superfície de Gordon)
summary: Feu una sola superfície suau a través d'una graella de corbes de perfil i de guia dibuixades en croquis o agafades d'arestes de model, tanqueu-la fins a un sòlid quan els perfils siguin tancats, i què és exacte, què és ajustat, i els missatges quan una xarxa no encaixa.
keywords: tangent, g1, tangència, continuïtat tangent, pla de simetria, superfície de Gordon, xarxa de corbes, superfície de contorn, superfície de xarxa, perfils, guies, corbes guia, loft amb guies, rails guia, pell, transfinit, coons, superfície B-spline, superfície de forma lliure
from: ada3cb8b
---

:::note
**Encara no implementat en aquesta versió.** La superfície de Gordon necessita un nucli de geometria exacte, que aquesta versió de PartCraft no té: construeix totes les peces amb el nucli de malla. [Què encara no està implementat](topic:not-built-yet) explica què fer en lloc d'això. La resta d'aquesta pàgina la descriu tal com funciona amb un nucli exacte.
:::

Una **superfície de Gordon** és una sola superfície que passa per cada corba d'una xarxa: un conjunt de **perfils** que van en una direcció i un conjunt de **guies** que van en l'altra, creuant-se com els fils d'una xarxa. Serveix per donar forma a un casc, un guardabarros o una nansa a partir de pocs perfils de secció que controleu directament. Necessita el **nucli exacte** (vegeu [El nucli de malla](topic:solid-kernels)).

## Dibuixeu la xarxa

1. Dibuixeu els **perfils**: dues o més corbes que van una al costat de l'altra, per exemple seccions en plans paral·lels. Les línies, els arcs, els cercles i les splines funcionen totes, i una cadena de corbes unides d'extrem a extrem compta com una sola corba.
2. Dibuixeu les **guies**: dues o més corbes que creuen els perfils. Cada guia ha de creuar cada perfil una vegada, i cada perfil cada guia una vegada.
3. Feu que les corbes es trobin de veritat. Dibuixeu el croquis d'una guia de manera que la seva corba passi pels punts dels perfils (ajusteu-la als punts projectats, o escriviu les coordenades). La xarxa accepta buits fins a la **Tolerància** (0.01 mm per començar).

Un sol croquis pot contenir diverses corbes: cada cadena separada és una corba pròpia. Així podeu dibuixar totes les guies en un sol croquis al pla superior, per exemple.

## Feu la superfície

1. Trieu {{ui:More}} al grup de Característiques, després {{ui:Gordon surface}}.
2. PartCraft agafa els croquis que ningú fa servir encara: els que estan en plans paral·lels al primer esdevenen **perfils**, els altres **guies**. Reviseu la llista de la dreta i definiu cada croquis com a **Perfils**, **Guies** o **No utilitzat**.
3. Per fer servir arestes de la peça, feu clic a **Trieu arestes com a perfils** (o **com a guies**), feu clic a les arestes de la vista i després premeu Esc.

El resultat és un **cos de superfície**. {{ui:Thicken}} el converteix en un sòlid, {{ui:Stitch}} el cus a altres superfícies, i {{ui:Trim surface}} el talla.

### Tanqueu-la fins a un sòlid

Quan els perfils són corbes tancades (cercles, splines tancades, cadenes tancades) i el primer i l'últim perfil es troben cadascun en un pla, marqueu **Tanca fins a un sòlid**. Els extrems es tapen amb cares planes i la forma tancada s'uneix, es talla, s'interseca o esdevé un cos nou com qualsevol altra característica. Així és com feu un loft que segueix corbes guia. Funciona igual amb guies tancades.

## Tangent a un pla al llarg d'una aresta

Una superfície de Gordon passa per les seves corbes, però per si sola no coincideix amb la pendent d'allò amb què es troba. Per fer que surti d'una aresta **tangent** a un pla (G1), com ara un pla de simetria, de manera que la còpia emmirallada s'uneixi sense plec, o una cara plana de la qual creix:

1. Seleccioneu la característica Gordon. Sota **Tangent a**, trieu un pla a {{ui:Add a plane…}} (Davant, Superior, Dret o un pla de referència), o trieu una cara plana a la vista i premeu {{ui:Add the picked flat face}}.
2. PartCraft troba la corba de frontera de la xarxa que es troba en aquell pla, i la superfície en surt tangent al pla.

Si un pla conté dues corbes de frontera (un terra sota els dos extrems), afegiu-lo dues vegades: cada còpia pren la següent. Fins a quatre plans, un per aresta.

L'informe diu al llarg de quina corba ha fet tangent cada pla i la pendent més forta amb què la superfície es trobava amb aquell pla abans. Les guies que ja surten tangents a aquell pla des d'aquella corba se segueixen exactament. Les guies que s'enfilen lluny d'ella es dobleguen en una banda estreta a prop de l'aresta, i la xifra "segueix cada corba dins de" de l'informe indica en quant: dibuixeu les guies que surten de l'aresta planes per a un ajust exacte.

## Què és exacte i què és ajustat

El tauler indica quina d'aquestes regles s'aplica, i fins a quin punt la superfície s'allunya de les vostres corbes.

- **Exacte**: quan cada corba és polinòmica (línies, splines i cadenes d'elles) i les guies creuen tots els perfils als mateixos paràmetres, la superfície és exactament la superfície de Gordon d'aquelles corbes. Una xarxa de corbes iso tallades d'una superfície bicúbica retorna aquella superfície, i quatre línies rectes donen un pegat pla o retorçat (bilineal).
- **Ajustat**: els arcs, els cercles i les arestes de la peça no són polinòmics, i les corbes que es creuen a paràmetres diferents s'han de reajustar en el temps perquè els creuaments coincideixin. Aquestes corbes s'ajusten amb B-splines cúbiques dins d'una deu-milionèsima part de la mida de la xarxa (uns 0.00001 mm per a una peça de 100 mm). Un pegat de cilindre fet d'arcs i línies es manté dins de 0.00001 mm del cilindre real.

Entre les corbes, la superfície és el que dona el mètode: els perfils barrejats al llarg, més les guies barrejades al llarg, menys la barreja dels seus punts de creuament. És suau a tot arreu excepte on una corba té una cantonada aguda. On dues superfícies de Gordon comparteixen una corba de frontera, s'uneixen aresta amb aresta (G0), no pas tangents.

## Quan una xarxa no encaixa

| Missatge | Què fer |
|---|---|
| "… no es toquen: passen a 0.4 mm de distància" | Feu que aquell perfil i aquella guia es creuin, o pugeu la Tolerància |
| "… es troba … 2 vegades" | Una guia només pot creuar cada perfil una vegada: partiu una corba que faci bucles, o useu menys perfils |
| "… en un ordre diferent" o "es plega sobre si mateix" | Dues guies es creuen entre elles (o dos perfils). Les famílies han d'anar una al costat de l'altra |
| "almenys dos perfils i dues guies" | Afegiu corbes, o definiu més croquis com a Perfils o Guies |
| "barregen corbes obertes i tancades" | Feu tots els perfils oberts o tots tancats (el mateix per a les guies) |
| "Un extrem … no és pla, així que no es pot tapar" | Dibuixeu el primer i l'últim perfil tancat en un sol pla cadascun, o deixeu Tanca fins a un sòlid desactivat |

## Límits

- Una cara B-spline per xarxa: no hi ha tangència G1 ni G2 amb les superfícies veïnes.
- La costura d'una xarxa tancada, a la primera guia, està unida aresta amb aresta però no és tangent.
- La pròpia característica Loft no té rails guia; feu servir una superfície de Gordon tancada fins a un sòlid.
- Corbes molt ondulades, o creuaments distribuïts de manera molt irregular al llarg d'una corba comparada amb una altra, poden necessitar massa punts per ajustar-se; la característica ho indica llavors.
