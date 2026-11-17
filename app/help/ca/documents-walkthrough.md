---
title: Documents i revisions (la caixa forta)
summary: Un recorregut pas a pas per una feina real: posa una carpeta de projecte de peces i conjunts sota control, extreu una peça, canvia-la, retorna-la amb una nota, allibera-la, veu què la fa servir i la llista de materials, què veu una segona persona mentre és bloquejada, i com funciona amb carpetes del núvol.
keywords: caixa forta, documents, recorregut, tutorial, extreu, retorna, revisió, allibera, aprova, bloqueig, historial, on s'usa, llista de materials, bom, conjunt, carpeta del núvol, carpeta de projecte, dues persones, carpeta compartida
from: 0a5e6983
---

## Què faràs

Ets l'Ana, treballes al projecte Riverside Clinic amb un company, en Ben. Les peces i els conjunts del projecte són en una carpeta a la qual accediu tots dos (una unitat compartida, una carpeta sincronitzada o una carpeta del núvol). Al final, un fitxer haurà passat de la primera còpia a la revisió alliberada **A**, s'haurà canviat de nou com a **B.1**, hauràs vist qui ha fet cada cosa, i hauràs vist què veu en Ben quan tu tens el fitxer.

Tot es guarda en una carpeta oculta `.ccvault` al costat dels fitxers: no hi ha servidor i no es puja res (la carpeta del núvol n'és l'excepció, vegeu l'últim pas). Per a tots els botons i totes les regles en un sol lloc, vegeu el tema *Documents: extracció, revisions i alliberament* on el tingui la vostra aplicació.

## 1. Prepara la carpeta del projecte

1. Trieu {{ui:Documents…}} al grup **Fitxer** de la barra d'eines.
2. Trieu {{ui:Seleccioneu la carpeta del projecte}} i seleccioneu la carpeta que conté les peces i els conjunts del projecte. (Les carpetes de projecte funcionen a Studio i en navegadors que poden obrir una carpeta, com Chrome i Edge. En altres navegadors, el tauler ho indica.)
3. Trieu {{ui:Canvia}} al costat de **Usuari:** i escriviu el vostre nom, `Ana` (si ho demana, també el nom d'aquest ordinador). El tauler ara diu *Usuari: Ana a* i el vostre ordinador. El vostre nom apareix en tot el que feu.
4. Trieu {{ui:Inicieu una caixa forta en aquesta carpeta}} i escriviu el nom del projecte, `Riverside clinic`. El tauler diu *Caixa forta iniciada per a Riverside clinic.*

## 2. Posa un fitxer sota control

1. Obriu **Fitxers fora de la caixa forta** i trieu {{ui:Afegeix}} al costat de `plates/Bracket.partcraft.json`.
2. Apareix sota **Fitxers a la caixa forta** amb la revisió **A.1** i l'estat **En curs**. A.1 és la primera còpia; la caixa forta guarda una còpia de cada revisió.

## 3. Extreu, canvia, retorna

1. Trieu {{ui:Obre}} al costat de `plates/Bracket.partcraft.json`. La peça s'obre a PartCraft i el tauler es tanca perquè la pugueu veure. Torneu a obrir el tauler des de {{ui:Documents…}}.
2. Torneu a obrir el tauler i trieu {{ui:Extreu}}. La fila ara diu **Extret a nom vostre**. S'ha creat un fitxer de bloqueig a `.ccvault/locks`; ningú més no pot extreure aquest fitxer fins que el retorneu.
3. Canvieu la peça: editeu una cota, afegiu un forat. Desar es rebutja tret que el fitxer estigui extret a nom vostre, i ho indica; Anomena i desa sempre funciona per a una còpia pròpia.
4. Obriu el tauler, trieu {{ui:Retorna}} i escriviu què ha canviat (`Va moure la porta`). El tauler diu *retornat com a A.2*. El fitxer de la carpeta del projecte és ara la peça que teníeu oberta, i el bloqueig ha desaparegut. Retornar sense cap canvi manté la revisió.

Si canvieu d'opinió, {{ui:Desfés l'extracció}} torna el fitxer sense crear una revisió nova.

## 4. Revisió i alliberament

1. Trieu {{ui:Envia per revisar}}. L'estat passa a **Per revisar** i el fitxer és només de lectura.
2. Abans d'aprovar, trieu {{ui:Configuració del projecte}} i escriviu qui pot aprovar (un nom per línia), per exemple `Ben` i `Carla`, i marqueu la regla que l'aprovador ha de ser algú diferent de l'autor. Trieu {{ui:Desa la configuració}}. Ara la mateixa caixa forta rebutja qualsevol altra persona.
3. En Ben (o la Carla) trieu {{ui:Aprova}} i escriviu el nom de l'aprovador. L'estat passa a **Alliberat** i la revisió a **A**, amb *aprovat per* i el nom. Un fitxer alliberat és només de lectura. {{ui:Torna enrere}} l'hauria retornat a En curs, amb un motiu.

El nom de l'aprovador és el nom escrit al tauler; és un registre de qui ha donat el vistiplau, no una prova d'identitat.

## 5. Una revisió nova

1. Al fitxer alliberat, trieu {{ui:Revisió nova}}. Us la reserveu per a la lletra següent.
2. Canvieu-lo i després trieu {{ui:Retorna}}. La revisió és **B.1**, en curs. Allibereu-la de la mateixa manera i passa a ser **B**. {{ui:Desfés l'extracció}} abans del primer retorn la deixa a **A**.

Les lletres de revisió van A, B … Z, AA, AB. Si el vostre estàndard en deixa algunes, l'ajust del projecte *Usa la seqüència ASME Y14.35* salta I, O, Q, S, X i Z per a les revisions següents.

## 6. Veure què ha passat

Trieu el nom del fitxer per obrir-ne els detalls:

- {{ui:Historial}}: cada esdeveniment, el més nou primer, amb qui, quin ordinador i quan: *Retornat A.2* per l'Ana, *Alliberat* pel Ben, i així successivament.
- {{ui:Revisions}}: la taula de revisions: totes les revisions guardades, amb la data, qui les ha retornat, la nota i qui les ha aprovat. La caixa forta guarda una còpia de cadascuna a `.ccvault/revs`.
- {{ui:Usa}}: les peces d'un conjunt.
- {{ui:Usat per}}: llista tots els conjunts de la caixa forta que contenen aquesta peça: si canvieu un suport, sabeu quins conjunts cal revisar.

## Conjunts: què usen i la llista de materials

Poseu un conjunt (`.partcraft.json`, desat des del mode Conjunt) a la carpeta i afegiu-lo. Trieu-ne el nom: **Usa** llista les peces que conté, amb la revisió i l'estat de cada una; **Usat per** en una peça llista tots els conjunts que la contenen. {{ui:Llista de materials (CSV)}} desa tota la llista de peces, nivell per nivell, amb quantitats, revisions i estats, per a un full de càlcul. Si canvieu un suport, **Usat per** us indica quins conjunts cal revisar.

## 7. Què veu en Ben mentre tens el fitxer

Ara extraieu de nou el fitxer, i demaneu a en Ben que obri la mateixa carpeta de projecte al seu ordinador i que obri el tauler. A la fila del fitxer veu **Extret per l'Ana des de** el vostre ordinador **des de** l'hora, i no hi veu cap botó {{ui:Extreu}}. Si ho intenta igualment, la caixa forta ho rebutja: el bloqueig és un fitxer que el sistema no crearà dues vegades, de manera que dues persones no poden tenir el fitxer alhora, ni tan sols en el mateix instant, quan la carpeta és al disc a Studio. (En un navegador la carpeta només permet un intent de bon cor, i el tauler ho indica sota **Carpeta**.)

Si l'Ana no hi és i en Ben necessita el fitxer, {{ui:Trenca l'extracció}} l'allibera. Ha d'escriure un motiu; es desa al registre, amb de qui era l'extracció. Quan el projecte enumera administradors, només ells poden fer-ho. Una extracció més antiga que el límit d'obsolescència (14 dies per defecte) es marca com *fa molt de temps*. Després del trencament, el retorn tardà de l'Ana es rebutja, de manera que no us podeu sobreescriure mútuament.

## 8. Carpetes del núvol

Una carpeta del núvol és una carpeta de projecte guardada a l'emmagatzematge al núvol del vostre equip, de manera que l'equip no necessita una unitat compartida. A Studio, amb la sessió iniciada al vostre compte de CadCraft, el tauler mostra {{ui:Obre una carpeta del núvol}} al costat de {{ui:Seleccioneu la carpeta del projecte}}. Trieu-la i seleccioneu la carpeta, que apareix com a espai de treball / carpeta. El propietari de l'espai de treball n'ha de crear primer la carpeta, i l'emmagatzematge al núvol de l'equip ha d'estar en vigor. Tot l'anterior funciona igual; el servidor fa el bloqueig, que és estricte entre persones. Si no heu iniciat la sessió, el tauler ho indica. En una pestanya normal del navegador no s'ofereix el botó del núvol; useu Studio.

## Proveu-ho

Feu els vuit passos anteriors amb una còpia d'un fitxer real. Per als passos de dues persones cal una altra persona, o bé dues finestres amb dos noms. Si ho proveu amb una carpeta compartida real, la pàgina de proves de la comunitat té una comprovació que demana exactament això, i accepta resultats.
