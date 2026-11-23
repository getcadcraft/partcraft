---
title: Fer trajectòries i G-code (Fabricació)
summary: Definiu el material en brut i un origen de treball, trieu les eines, afegiu operacions de cara, buidatge, contorn, perforació i xamfrà seleccionant cares, acabeu tot el model en 3D (paral·lel, festó), simuleu el material contra el model per detectar rascades i temps de cicle, i baixeu el G-code d'un dels tres postprocessadors integrats o d'un que editeu vosaltres.
keywords: step exacte, step per al taller, coordenades de treball, traspàs cam, paral·lel, festó, acabat 3d, acabat, punta esfèrica, biblioteca d'eines, edita postprocessador, postprocessador personalitzat, editor de postprocessadors, adaptatiu, neteja adaptativa, engatge constant, trocoidal, hsm, mecanitzat d'alta velocitat, fabricació, CAM, trajectòria d'eina, G-code, NC, CNC, fresa, fresatge, buidatge, contorn, perfil, refrentat, perforació, picotejat, G83, G81, G73, xamfrà, material en brut, desplaçament de treball, G54, postprocessador, GRBL, LinuxCNC, avanços i velocitats, simulació, rascada, temps de cicle
from: f8a03be8
---

L'espai de treball Fabricació converteix la peça en trajectòries d'eina i les escriu com a G-code. La majoria d'operacions són fresatge de **2.5 eixos**: l'eina es manté en vertical, les parets es tallen rectes cap avall i els fons, plans. **Desbast 3D** i **Resta** netegen peces corbes en 3D ([Desbast 3D i mecanitzat de resta](topic:rough-3d)); **Paral·lel** i **Festó** les acaben ([Acabat 3D](topic:finish-3d)). En una màquina amb eixos rotatius, qualsevol operació pot tenir una eina inclinada, i dues operacions mouen els eixos rotatius mentre tallen ([Mecanitzat de 4 i 5 eixos](topic:multi-axis)). Hi ha operacions per a un torn ([Tornejat en un torn](topic:turning)) i per a un palpador de contacte ([Palpació](topic:probing)). Treballa sobre les cares amb nom que el nucli de malla dona a la peça (vegeu [El nucli de malla](topic:solid-kernels)).

Versió de laboratori: comproveu cada programa amb el simulador del control de la vostra màquina i executeu-lo primer a l'aire, per sobre del material en brut.

## Preparació

1. Trieu **Fabricació** al selector d'espai de treball i després {{ui:Nova preparació}}.
2. A la pestanya **Preparació** trieu:
   - **Eix de l'eina (+Z)**: cap a on apunta l'eina dins la peça. El valor per defecte és +Y del món (amunt de PartCraft); aleshores l'X de la màquina és l'X del món i la Y de la màquina és −Z del món.
   - **Origen de treball (G54)**: una cantonada o el centre del material en brut, a dalt o a baix, el centre superior del model o l'origen del model.
   - **Material en brut**: una caixa o un cilindre, o bé el model més els marges (costats, dalt, baix), o bé una mida fixa.
   - **Material de la peça** (fixa els avanços i velocitats inicials), el **postprocessador** (control), la velocitat màxima del husos de la màquina, la velocitat d'avanç ràpid i el temps de canvi d'eina, el refrigerant i el número de programa.

## Eines

La pestanya **Eines** conté la biblioteca: fresa de punta plana, esfèrica i arrodonida, brocs, fresa de xamfrà i fresa de refrentat, cadascuna amb un número T, diàmetre, nombre de ranures i longitud de les ranures (i també el radi de cantonada, l'angle de la punta o del xamfrà on s'apliquin).

Les meves eines es poden desar al navegador i passar entre ordinadors com a fitxer: vegeu [La biblioteca d'eines](topic:tool-library).

La velocitat del husos i l'avanç surten del material: n = 1000 × velocitat de tall / (π × diàmetre), avanç = n × ranures × càrrega de verinada (brocs: n × avanç per volta). Els valors són punts de partida conservadors, a partir de rangs publicats, i no estan ajustats a la vostra màquina; escriviu la velocitat de tall, la càrrega de verinada, les rpm o l'avanç del fabricant de l'eina per substituir-los. Quan la velocitat supera el màxim de la màquina, es manté en aquest màxim i l'avanç la segueix, de manera que la càrrega de verinada es conserva.

## Afegir operacions

Cada botó de la barra d'eines afegeix una operació i, quan necessita geometria, comença la selecció: feu clic a les cares o arestes de la vista (torneu a fer clic per llevar-ne una) i després {{ui:Fet}} o {{key:Esc}}.

| Operació | Selecció | Què fa |
|---|---|---|
| {{ui:Cara}} | res | Passades en zig-zag sobre tot el material en brut, més enllà de les seves vores, fins a la part superior del model |
| {{ui:Buidatge}} | una cara de fons plana, un forat rodó o una cadena tancada d'arestes | Buida la regió amb passades de desplaçament, de dins cap a fora, a cada descens en profunditat; les illes (cares que s'aixequen dins del fons) es deixen; un fons obert per tot el voltant (res més alt fora) es buida fins a la vora del material en brut |
| {{ui:Adaptatiu}} | el mateix que Buidatge | Buida la mateixa regió amb passades que tallen cadascuna una amplada fixada (**Engatge**, una fracció del diàmetre), de manera que el tallador mai no fa una ranura d'amplada completa, ni tan sols en cantonades; entra per una hèlix i acaba les parets a cada nivell. Els talls estrets permeten una profunditat de passada més gran i un avanç més alt |
| {{ui:Contorn}} | una cara plana (el seu contorn), una cara rodona o arestes | Segueix el contorn desplaçat pel radi de l'eina, cap a fora o cap a dins, amb arcs d'entrada i de sortida i pestanyes opcionals |
| {{ui:Perforació}} | forats (feu clic a la paret o a la vora d'un forat) | Perfora cada forat amb un cicle fix: per picotejat (G83), perforació (G81) o trencament de verinada (G73); o indiqueu un diàmetre per perforar tots els forats d'aquesta mida |
| {{ui:Xamfrà}} | el contorn o les arestes d'una cara | Fa passar una fresa de xamfrà per l'aresta de manera que talla l'amplada que definiu |
| {{ui:Paral·lel}} | res (tot el model) | Acabat 3D en línies paral·leles a qualsevol angle, seguint la superfície amb una fresa de punta esfèrica, arrodonida o plana. Vegeu [Acabat 3D](topic:finish-3d) |
| {{ui:Festó}} | res (tot el model) | Acabat 3D en passades separades una distància fixada sobre la superfície, de manera que la cresta entre elles té l'altura que demaneu |

Seleccioneu una operació a la llista per canviar-ne l'eina, les alçades (altura de seguretat, retirada, alçada d'avanç, superior, inferior), el pas de profunditat, el pas lateral, el material a deixar, la passada d'acabat, l'entrada (hèlix, rampa o entrada en vertical), el fresatge en concordança, les pestanyes o el cicle. {{ui:Amunt}} i {{ui:Avall}} reordenen, {{ui:Desactiva}} la deixa fora i {{ui:Suprimeix}} l'elimina. Tot queda a l'historial de desfer i es desa al fitxer de la peça.

El pas lateral d'un buidatge és com a màxim la meitat del diàmetre de l'eina, de manera que cada punt del seu fons queda a menys d'un radi d'eina d'una passada. Les cantonades interiors conserven el radi de l'eina.

La **neteja adaptativa** manté l'engatge del tallador al voltant d'un sol valor. Un engatge de 0.15 del diàmetre equival a un angle d'engatge d'uns 46°: l'arc de la vora del tallador dins del material. En canvi, un buidatge desplaçat talla tota l'amplada en la primera passada i s'enrotlla més en cada cantonada interior. Entre passades, l'eina es manté baixada quan es mou per aire de tall, i s'aixeca i baixa en aire de tall en la resta de casos. Les passades es calculen sobre una graella fina de la regió (cel·les d'una dotzena part del radi de l'eina), de manera que l'engatge pot arribar a ser fins a una cel·la més ample del que s'ha fixat; les parets s'acaben exactament. Una regió oberta i gran fa un programa llarg amb molts moviments curts.

## Simular

Les trajectòries es tornen a calcular després de cada canvi (també les de la peça). {{ui:Simula}} mostra també el material que queda després de tot el programa. El tauler mostra:

- **Temps de cicle**: els moviments d'avanç a la seva velocitat d'avanç, els moviments ràpids com a línies rectes a la velocitat ràpida de la preparació, més el temps de canvi d'eina. Les màquines reals s'accelereixen, de manera que triguen més.
- **Rascades**: llocs on l'eina va baixar més de 0.02 mm per sota de la superfície de la peça. Les marques vermelles les mostren a la vista.
- **Material que queda a la peça**.

El material és un mapa d'altures de la part superior (un mapa Z), de manera que no pot mostrar contrasalts. Arrossegueu **Reproducció** per moure l'eina al llarg del programa. A la vista, els moviments d'avanç són continus i els ràpids, discontinus, amb un color per operació.

Amb **Mostra el material simulat** activat, el material es pinta en relació amb el model, cel·la per cel·la: **verd** on coincideix amb el model (dins de 0.02 mm), **vermell** on l'eina ha entrat al model, i on queda material sobre el model, **groc** per a una capa fina, **taronja** per a més, fins al **gris** del material sense tallar a 1 mm o més. Els colors es tornen a calcular amb cada canvi, a partir del mateix mapa d'altures que els números del tauler, de manera que el verd i el vermell coincideixen amb la línia de Rascades. Un xamfrà talla el model a propòsit i mostra vermell al llarg de la seva vora.

## Postprocessar el G-code

Trieu el control sota **Postprocessador** i premeu {{ui:Baixa el G-code}} (o {{ui:Postprocessador}} a la barra d'eines):

| Control | Fitxer | Observacions |
|---|---|---|
| ISO estil Fanuc | .nc | %, número O, números de línia, T M6 amb G43 H, cicles fixos |
| GRBL | .nc | Sense canviador d'eines ni cicles fixos: un canvi d'eina es atura amb M0, i la perforació s'escriu com a moviments simples |
| LinuxCNC | .ngc | T M6 amb G43 H, cicles fixos, M2 |
| Torn estil Fanuc | .nc | Per a programes de torn: X com a diàmetre, avanç per volta, G96 amb un límit G50, roscat G32 |
| Torn de LinuxCNC | .ngc | Per a programes de torn: diàmetres G7, G95, G96, roscat G33; no escriu cap moviment de referenciació |
| Un de propi | qualsevol | Un postprocessador que heu escrit o canviat: {{ui:Edita el post…}}, {{ui:Post nou…}}, {{ui:Importa un fitxer de post…}} |

Cada fitxer comença amb comentaris del programa, el material en brut, el desplaçament de treball i les eines. Les coordenades són en mil·límetres amb 3 decimals. {{ui:CSV de trajectòries}} i {{ui:JSON de trajectòries}} exporten els mateixos moviments.

**Comproveu la sortida amb el simulador de la vostra màquina abans de tallar, i executeu-la primer a l'aire, per sobre del material en brut.** Els tres postprocessadors integrats són punts de partida que segueixen el comportament documentat dels controls; no s'han provat en cap màquina concreta. Un postprocessador que canvieu és responsabilitat vostra de provar. Com escriure'n un: [Postprocessadors](topic:post-processors).

## STEP exacte per al taller

Sota els botons de G-code a la pestanya **Operacions**, {{ui:STEP exacte (coordenades de treball)}} baixa `<part>-work.step`: la peça com a sòlid exacte (cilindres veritables per als forats i les protuberàncies, cercles veritables per a les seves arestes), amb el seu origen a l'origen de treball d'aquesta preparació i la Z al llarg de l'eix de l'eina. Aquestes són les coordenades que usa el G-code, de manera que el programa CAM o el verificador propi d'un taller alinea el model amb el programa sense moure'l. El fitxer conté només la peça, no el material en brut ni les trajectòries.

{{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} escriu el mateix sòlid a la posició pròpia de la peça (Z cap amunt): vegeu [Exportació per a impressió, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Límits

- Els buidatges, els contorns, la perforació i els xamfrans són de 2.5 eixos. Les peces corbes es desbasten i s'acaben en 3D amb les seves pròpies operacions ([Desbast 3D i mecanitzat de resta](topic:rough-3d), [Acabat 3D](topic:finish-3d)). La neteja adaptativa és 2D (fons plans).
- Hi ha eines inclinades, acabat de 5 eixos i de 4t eix, tornejat i palpació, cadascun amb els seus propis límits, i **cap d'ells no s'ha executat en una màquina**: vegeu [Mecanitzat de 4 i 5 eixos](topic:multi-axis), [Tornejat en un torn](topic:turning) i [Palpació](topic:probing).
- Els portaeines i els mànecs no es comproven per col·lisions; apareix un avís quan un tall és més profund que la longitud de les ranures.
- Els avanços i les velocitats són valors de partida. Un postprocessador és un text que podeu editar, però només decideix com s'escriuen els moviments; no pot canviar la trajectòria, afegir eixos ni conèixer la vostra màquina ([Postprocessadors](topic:post-processors) enumera el que no pot fer).

## Enviar el programa a una màquina

A CadCraft Studio a l'escriptori, amb una màquina configurada a Studio, **Envia a una màquina…** apareix al costat de **Baixa el G-code** i puja el mateix programa a la màquina de la vostra xarxa. Mai no s'inicia des de PartCraft: inicieu-lo a la màquina quan estigui clar. En un navegador no es mostra el botó (una pàgina web no pot arribar a una màquina de la vostra xarxa): baixeu el programa en lloc d'això.
