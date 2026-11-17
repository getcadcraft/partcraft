---
title: Fes les trajectòries d'eina i el codi G (Fabricació)
summary: Definiu el material en brut i un origen de treball, trieu les eines, afegiu operacions de cara, buidatge, contorn, perforació i xamfrà triant cares, acabeu tot el model en 3D (paral·lel, festó), simuleu el material en brut contra el model per detectar ensorrades i el temps de cicle, i baixeu el codi G d'un dels tres postprocessadors integrats o d'un que editeu vosaltres.
keywords: step exacte, step per al taller, coordenades de treball, traspàs a CAM, paral·lel, festó, acabat 3D, acabat, punta esfèrica, biblioteca d'eines, edita el post, postprocessador personalitzat, editor de postprocessadors, adaptatiu, buidatge adaptatiu, compromís constant, trocoidal, hsm, mecanitzat d'alta velocitat, fabricació, CAM, trajectòria d'eina, G-code, NC, CNC, fresadora, fresatge, buidatge, contorn, perfil, refrentat, perforació, picotejos, G83, G81, G73, xamfrà, material en brut, desplaçament de treball, G54, postprocessador, GRBL, LinuxCNC, avanços i velocitats, simulació, ensorrada, temps de cicle
from: beeb29aa
---

L'espai de treball Fabricació converteix la peça en trajectòries per a una fresadora de 3 eixos i les escriu com a codi G. La majoria d'operacions són de **2.5 eixos**: l'eina es manté vertical, les parets es tallen rectes cap avall i els fons plans. **Paral·lel** i **Festó** acaben superfícies corbes en 3D (vegeu [Acabat 3D](topic:finish-3d)); l'eina continua vertical (tres eixos, sense inclinació). Treballa sobre les cares amb nom que el nucli de malla dóna a la peça (vegeu [El nucli de malla](topic:solid-kernels)).

Versió de laboratori: comproveu cada programa al simulador del vostre propi control, i executeu-lo primer a l'aire, per sobre del material en brut.

## Configuració

1. Trieu **Fabricació** al selector d'espais de treball, i després {{ui:Nova preparació}}.
2. A la pestanya **Preparació** trieu:
   - **Eix de l'eina (+Z)**: cap on apunta l'eina cap a la peça. El +Y del món (amunt a PartCraft) és el valor per defecte; llavors l'X de la màquina és l'X del món i la Y de la màquina és el −Z del món.
   - **Origen de treball (G54)**: una cantonada o el centre del material en brut, a dalt o a baix, el centre superior del model, o l'origen del model.
   - **Material en brut**: una caixa o un cilindre, sigui el model més els desplaçaments (laterals, dalt, baix) o una mida fixa.
   - **Material** (fixa les velocitats d'avanç i de rotació inicials), el **postprocessador** (control), la velocitat màxima del capçal de la màquina, la velocitat ràpida i el temps de canvi d'eina, el refrigerant i el número de programa.

## Eines

La pestanya **Eines** conté la biblioteca: fresadores de punta plana, esfèrica i de punta arrodonida, brocas, fresadores de xamfrà i fresadores de cara, cadascuna amb un número T, diàmetre, nombre de ranures i longitud de les ranures (més el radi del cantó, l'angle de punta o de xamfrà on s'apliquin).

Les meves eines es poden desar al navegador i moure's entre ordinadors com a fitxer: vegeu [La biblioteca d'eines](topic:tool-library).

La velocitat de rotació i l'avanç surten del material: n = 1000 × velocitat de tall / (π × diàmetre), avanç = n × ranures × càrrega per dent (brocas: n × avanç per volta). Els valors són punts de partida prudents d'intervals publicats, no ajustats a la vostra màquina; escriviu la velocitat de tall, la càrrega per dent, les rpm o l'avanç indicats pel fabricant de l'eina per substituir-los. Quan la velocitat supera el màxim de la màquina, es queda en aquest màxim i l'avanç la segueix, mantenint la càrrega per dent.

## Afegeix operacions

Cada botó de la barra d'eines afegeix una operació i, quan necessita geometria, comença la tria: feu clic a cares o arestes a la vista (torneu a fer clic per llevar-ne una), i després {{ui:Fet}} o {{key:Esc}}.

| Operació | Tria | Què fa |
|---|---|---|
| {{ui:Cara}} | res | Passades en zigzag sobre tot el material en brut, més enllà de les seves vores, fins a la part superior del model |
| {{ui:Buidatge}} | una cara plana de fons, un forat rodó, o una cadena tancada d'arestes | Buida la zona amb passades desfasades de dins cap a fora, a cada descens; els illots (cares que sobresurten dins del fons) es deixen; un fons obert per tot el voltant (res més alt fora d'ell) es buida fins a la vora del material en brut |
| {{ui:Adaptatiu}} | el mateix que Buidatge | Buida la mateixa zona amb passades que tallen cadascuna una amplada fixa (**Engagement**, una fracció del diàmetre), de manera que la fresa mai no fa una ranura d'amplada completa, ni tan sols als cantons; entra en hèlix i acaba les parets a cada nivell. Els talls estrets permeten un descens més profund i un avanç més alt |
| {{ui:Contorn}} | una cara plana (el seu contorn), una cara rodona, o arestes | Segueix el contorn desfasat pel radi de l'eina, cap a fora o cap a dins, amb arcs d'entrada i de sortida i subjeccions opcionals |
| {{ui:Perforació}} | forats (feu clic a la paret o a la vora d'un forat) | Perfora cada forat amb un cicle fix: amb picotejos (G83), perforació (G81) o trencament de verinada (G73); o doneu un diàmetre per perforar tots els forats d'aquesta mida |
| {{ui:Xamfrà}} | el contorn o les arestes d'una cara | Fa passar una fresa de xamfrà al llarg de l'aresta perquè talli l'amplada que indiqueu |
| {{ui:Paral·lel}} | res (tot el model) | Acabat 3D en línies paral·leles a qualsevol angle, seguint la superfície amb una fresa esfèrica, de punta arrodonida o plana. Vegeu [Acabat 3D](topic:finish-3d) |
| {{ui:Festó}} | res (tot el model) | Acabat 3D amb passades a una distància fixa sobre la superfície, de manera que la cresta entre elles té l'alçada que demaneu |

Trieu una operació a la llista per canviar-ne l'eina, les alçades (llibertat, retrocés, alçada d'avanç, superior, inferior), el descens, el pas lateral, el material a deixar, la passada d'acabat, l'entrada (hèlix, rampa o immersió), el fresatge en concordança, les subjeccions o el cicle. {{ui:Amunt}} i {{ui:Avall}} reordenen, {{ui:Desactiva}} la deixa fora, {{ui:Suprimeix}} l'elimina. Tot és a l'historial de desfer i es desa al fitxer de la peça.

El pas lateral d'un Buidatge és com a màxim la meitat del diàmetre de l'eina, així que cada punt del seu fons queda a menys d'un radi d'eina d'una passada. Als cantons interiors es manté el radi de l'eina.

**El buidatge adaptatiu** manté la penetració de la fresa a prop d'un valor. Una penetració de 0.15 del diàmetre és un angle de penetració d'uns 46°: l'arc de la vora de la fresa dins del material. Un buidatge desfasat, en canvi, talla tota l'amplada en la primera passada i s'enrotlla més a cada cantó interior. Entre passades, l'eina es manté baixa on es mou per aire de tall, i s'aixeca i baixa de nou en aire de tall en altres llocs. Les passades es calculen sobre una quadrícula fina sobre la zona (cel·les d'aproximadament una dotzena part del radi de l'eina), de manera que la penetració pot arribar a ser fins a una cel·la més ampla que l'establerta; les parets s'acaben amb exactitud. Una zona oberta gran fa un programa llarg amb molts moviments curts.

## Simula

Les trajectòries es tornen a generar després de cada canvi (també les de la peça). {{ui:Simula}} mostra a més el material en brut que queda després de tot el programa. El tauler mostra:

- **Temps de cicle**: els moviments d'avanç a la seva velocitat d'avanç, els ràpids com a línies rectes a la velocitat ràpida de la preparació, més el temps de canvi d'eina. Les màquines reals accelereixen, així que triguen més.
- **Ensorrades**: llocs on l'eina va baixar més de 0.02 mm per sota de la superfície de la peça. Les marques vermelles les mostren a la vista.
- **Material en brut que queda a la peça**.

El material en brut és un mapa d'altures de la part superior (un mapa Z), així que no pot mostrar socavacions. Arrossegueu **Reproducció** per moure l'eina al llarg del programa. A la vista, els moviments d'avanç són contínus i els ràpids a traços, amb un color per operació.

Amb **Mostra el material simulat** activat, el material en brut es acoloreix respecte al model, cel·la a cel·la: **verd** on és sobre el model (dins de 0.02 mm), **vermell** on l'eina ha tallat dins del model, i on queda material sobre el model **groc** per a una capa fina, **taronja** per a més, i es desvaneix fins al **gris** del material sense tallar a partir de 1 mm. Els colors es tornen a generar amb cada canvi, a partir del mateix mapa d'altures que els valors del tauler, de manera que el verd i el vermell coincideixen amb la línia Ensorrades. Un xamfrà talla dins del model a propòsit i mostra vermell a la seva vora.

## Postprocessa el codi G

Trieu el control a **Postprocessador** i premeu {{ui:Baixa el G-code}} (o {{ui:Postprocessador}} a la barra d'eines):

| Control | Fitxer | Notes |
|---|---|---|
| ISO estil Fanuc | .nc | %, número O, números de línia, T M6 amb G43 H, cicles fixos |
| GRBL | .nc | Sense canviador d'eines ni cicles fixos: un canvi d'eina es pausa amb M0, la perforació s'escriu com a moviments simples |
| LinuxCNC | .ngc | T M6 amb G43 H, cicles fixos, M2 |
| El vostre propi | qualsevol | Un postprocessador que heu escrit o canviat: {{ui:Edita el post…}}, {{ui:Post nou…}}, {{ui:Importa un fitxer de post…}} |

Cada fitxer comença amb comentaris del programa, el material en brut, el desplaçament de treball i les eines. Les coordenades són en mil·límetres amb 3 decimals. {{ui:CSV de trajectòries}} i {{ui:JSON de trajectòries}} exporten els mateixos moviments.

**Comproveu la sortida al simulador propi de la vostra màquina abans de tallar, i executeu-la primer a l'aire, per sobre del material en brut.** Els tres postprocessadors integrats són punts de partida que segueixen el comportament documentat dels controls; no s'han provat en cap màquina concreta. Un postprocessador que modifiqueu és responsabilitat vostra de provar. Com escriure'n un: [Postprocessadors](topic:post-processors).

## STEP exacte per al taller

Sota els botons de codi G de la pestanya **Operacions**, {{ui:STEP exacte (coordenades de treball)}} baixa `<part>-work.step`: la peça com a sòlid exacte (cilindres reals per als forats i els cilindres sortints, cercles reals per a les seves arestes) amb l'origen a l'origen de treball d'aquesta preparació i Z al llarg de l'eix de l'eina. Són les coordenades que usa el codi G, així que el programa CAM propi del taller o el seu verificador alinea el model amb el programa sense moure'l. El fitxer només conté la peça, no el material en brut ni les trajectòries.

{{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} escriu el mateix sòlid a la posició pròpia de la peça (Z amunt): vegeu [Exporta per imprimir, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Límits

- Els buidatges, contorns, perforacions i xamfrans són de 2.5 eixos. Les cares corbes es poden acabar en 3D ([paral·lel i festó](topic:finish-3d)) però no desbastar en 3D (un con queda com a esglaons fins que l'acabeu), i no hi ha mecanitzat de restes. El buidatge adaptatiu és 2D (fons plans).
- Només tres eixos: sense inclinació, sense torn, sense inspecció.
- Els portaeines i les cues no es comproven per col·lisions; apareix un avís quan un tall és més profund que la longitud de les ranures.
- Els avanços i les velocitats són valors inicials. Un postprocessador és text que podeu editar, però només decideix com s'escriuen els moviments; no pot canviar la trajectòria, afegir eixos ni conèixer la vostra màquina ([Postprocessadors](topic:post-processors) enumera el que no pot fer).

## Envia el programa a una màquina

A CadCraft Studio d'escriptori, amb una màquina configurada a Studio, **Envia a una màquina…** apareix al costat de **Baixa el G-code** i puja el mateix programa a la màquina de la vostra xarxa. Mai no s'inicia des de PartCraft: inicieu-lo a la màquina quan estigui clar. En un navegador el botó no es mostra (una pàgina web no pot accedir a una màquina de la vostra xarxa): baixeu el programa.
