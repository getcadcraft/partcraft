---
title: Configuració de PartCraft
summary: Trieu quin botó del ratolí gira la vista, feu que el lliscament del trackpad giri i desplaci la peça, activeu o desactiveu les relacions automàtiques en dibuixar croquis, i definiu quants fils fan servir els resolutors de simulació.
keywords: configuració, preferències, opcions, ratolí, botó central, botó de la roda, òrbita, girar, rotar, trackpad, touchpad, desplaçament, lliscament, pinçament, relacions, restriccions, relacions automàtiques, referència, coincident, fils, fils del resolutor, nuclis, processadors, multifil, resolució més ràpida, paral·lel
from: 759edcaf
---

Obriu {{ui:Configuració}} amb l'engranatge de la barra d'aplicació o amb {{key:Mod+,}}. La primera pestanya, {{ui:PartCraft}}, conté la configuració pròpia d'aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de CadCraft (tema, barra d'eines, panells). La configuració de PartCraft només existeix a l'aplicació: la canvieu aquí, i aquest navegador la recorda. {{ui:Restableix la configuració de PartCraft}} torna tot al punt inicial.

## Girar la vista

- **Botó esquerre** (per defecte): arrossegueu amb el botó esquerre per girar la peça; arrossegueu amb el botó dret o el central per desplaçar.
- **Botó central**: premeu la roda i arrossegueu per girar la peça; mantingueu {{key:Shift}} (o {{key:Ctrl}}, o ⌘) amb el botó central, o arrossegueu amb el botó dret, per desplaçar. El botó esquerre només tria cares, arestes i plans, així que un clic que es mou una mica mai no gira la peça. Molts programes CAD funcionen així.

La roda fa zoom cap al punter en tots dos casos. En un croquis, els botons dret i central continuen desplaçant com abans.

## Desplaçament: roda del ratolí o trackpad

- **Ho detecta** (per defecte): PartCraft observa el desplaçament. El desplaçament lateral o de gra fi, com el que envia un trackpad, gira la peça; les muescades completes de la roda fan zoom.
- **Roda del ratolí**: el desplaçament sempre fa zoom cap al punter.
- **Trackpad**: lliseu amb dos dits per girar la peça, mantingueu {{key:Shift}} i lliseu per desplaçar, pinceu per fer zoom. En un croquis, lliscar amb dos dits desplaça el croquis.

Un pinçament fa zoom en totes les opcions. Si «Ho detecta» endevina malament per al vostre ratolí o trackpad, trieu el que teniu. Més a [Trackpad, tàctil i pantalles petites](topic:trackpad-and-touch).

## Croquis: afegeix relacions en dibuixar

**Afegeix relacions en dibuixar** (activat per defecte): un clic que s'enganxa a un punt fa que el punt nou sigui coincident amb ell, un clic sobre una corba posa el punt sobre aquella corba, i una línia dibuixada gairebé horitzontal o vertical es converteix en horitzontal o vertical. Vegeu [Relacions i cotes](topic:relations-dimensions).

Desactiveu-ho quan vulgueu col·locar geometria a prop d'una altra sense lligar-la. El punter encara s'enganxa a punts i corbes, però no s'uneix res: les línies dibuixades en cadena no comparteixen els extrems, així que un arrossegament pot separar-les. Afegiu vosaltres les relacions que vulgueu des del panell de la dreta. Un perfil tancat encara s'extrueix quan els seus extrems es toquen.

:::note
El canvi només afecta el que afegeix el nou dibuix. Les relacions que ja hi ha en un croquis es mantenen, i l'eina Empalma encara fa el seu arc tangent i el seu radi.
:::

## Croquis: acota mentre dibuixes

**Acota mentre dibuixes** (activat per defecte): mentre es dibuixa una línia, un rectangle, un cercle o un arc, escriure un número omple la caixa de mida al costat del punter ({{key:Tab}} va a la caixa següent) i {{key:Enter}} dibuixa la forma a aquella mida, amb una cota controladora per a cada mida que heu escrit. Desactivat: escriure un número mentre dibuixeu no fa res, i les formes es dibuixen només amb clics. Vegeu [Escriviu la mida mentre dibuixeu](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de cantonada

Què es mostra a la cantonada de la vista 3D: **Cub de vista** (per defecte; a dalt a la dreta: feu clic a una cara, una aresta o un vèrtex per mirar des d'allà, arrossegueu-lo per orbitar, arrossegueu-ne l'anell de la brúixola per girar el model), **Icona d'eixos** (un petit marcador X, Y, Z a la part inferior esquerra que gira amb la vista: X vermell, Y verd, Z blau) o **Cap**. Cap dels dos no es mostra mentre dibuixeu un croquis ni a la fulla de dibuix. Vegeu [El cub de vista](topic:view-cube).

## Fils del resolutor

Quants fils poden fer servir els resolutors de simulació. **Automàtic** (per defecte) en pren un menys que els processadors lògics de l'ordinador (com a màxim 16), perquè la pàgina continuï responent mentre resol un estudi; o trieu un nombre. Els estudis de voxels grans, el vinclament, la tensió en el temps i el flux es resolen més ràpid amb diversos fils (uns 2× amb 4 fils per a 80,000 cubs segons els nostres temps, més en un ordinador inactiu); els models per sota de unes 20,000 incògnites es queden en un fil, perquè iniciar els fils costa més del que estalvien. Una resolució amb fils dóna la mateixa resposta que amb un fil (fins a l'arrodoniment: les sumes s'afegeixen en un ordre diferent). Els resultats de cada estudi mostren **N fils** o **1 fil** amb el motiu sota **Resolutor**.

Els fils necessiten que la pàgina sigui **aïllada d'orígens creuats** (el navegador només deixa que els treballadors comparteixin memòria llavors). La pàgina de laboratori ho és; si no ho és, la configuració ho diu ("Aquesta pàgina no està aïllada d'orígens creuats, així que els resolutors funcionen en un fil, sigui el que sigui que hi trieu aquí.") i cada resolució fa servir un fil. Tota la resta funciona igual, i les respostes són les mateixes.

Els estudis de flux laminar també fan servir els fils (uns 2.5× amb 4 fils per a 54,000 cel·les de fluid, la mateixa resposta fins a l'últim dígit). El resolutor de tetraedres quadràtics i la transferència de calor funcionen en un fil: en el nostre ordinador de prova, fer-los multifil va resultar més lent (els seus resolutors estan limitats per la velocitat de la memòria i per un pas que no es pot dividir).

### Al vostre propi servidor web

Si executeu PartCraft des del vostre propi servidor, funciona tal com es serveix. Per als fils del resolutor, feu que el servidor enviï dues capçaleres amb la pàgina de PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

A Apache, al `.htaccess` de la carpeta (necessita mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

A nginx, a la `location` que serveix PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Torneu a carregar la pàgina: Configuració › Fils del resolutor ofereix llavors **Automàtic** amb el recompte de processadors del vostre ordinador. La segona capçalera fa que el navegador rebutgi tot el que la pàgina carregui d'un altre lloc que no ho permeti, cosa que està bé per a PartCraft sol (carrega tot des de la seva pròpia carpeta).
