---
title: Porta peces a i des d'altres modeladors de peces
summary: Envieu una peça a un altre modelador de peces com una macro que la reconstrueix amb un arbre d'operacions viu. El STEP amb nom i l'obertura de la llista d'operacions que un altre modelador ha escrit encara no estan implementats en aquesta versió.
keywords: macro, no implementat, swb, vba, arbre d'operacions, anada i tornada, exporta macro, cadcraft-sw.json, step amb nom, ap214, variables globals, equacions, peça nativa
from: 97ca61da
---

PartCraft intercanvia peces amb SolidWorks en totes dues direccions, sense un format de fitxer que ningú més pugui llegir:

- **Cap a fora:** una macro (`.swb`, text pla) que SolidWorks executa per construir la peça ella mateixa, operació a operació, amb els seus croquis, relacions, cotes, variables globals i equacions. Obteniu una peça nativa amb un arbre d'operacions viu, no un sòlid mort.
- **Cap a dins:** una macro que executeu dins de SolidWorks escriu les operacions i les equacions de la peça en un fitxer `.cadcraft-sw.json`. Obrir aquest fitxer a PartCraft encara no està implementat en aquesta versió (necessita un nucli exacte).

:::warning
Res d'això no s'ha provat encara a SolidWorks. SolidWorks només funciona a Windows i amb llicència, i PartCraft mai no ha executat aquestes macros allà. Les macros s'han escrit a partir de la documentació de l'API de SolidWorks i només s'ha comprovat l'estructura aquí. Cal esperar problemes; el registre que escriu la macro indica quin pas ha fallat.
:::

PartCraft no pot escriure un fitxer `.sldprt`: aquest format és tancat. La macro és la manera d'obtenir una peça nativa.

## Envia una peça com a macro

1. Obriu la peça.
2. Trieu {{ui:Exporta}} i després {{ui:Macro per a SolidWorks (.swb)}}. PartCraft baixa `<part>.swb`; la barra d'estat indica que s'ha escrit "sense el nucli exacte".
3. Un diàleg indica quantes operacions, variables globals i equacions construeix la macro, i enumera tot el que deixa fora. Cap STEP no hi va al costat en aquesta versió: useu {{ui:Exporta}} i després {{ui:STEP (facetat, nucli de malla)}} si en necessiteu un.
4. A SolidWorks, trieu **Tools > Macro > Run**, trieu el fitxer `.swb` i espereu. Crea una peça nova a partir de la vostra plantilla de peça per defecte, configura els mil·límetres i construeix totes les operacions.
5. Al final, un missatge indica quants passos s'han fet, quants han fallat i quants coincideixen amb el cos de PartCraft. El registre complet, `<part> macro log.txt`, s'escriu al costat de la macro.

Què construeix la macro:

| PartCraft | A la peça nova |
|---|---|
| Croquis sobre el pla Davanter, Superior o Dret | Un croquis sobre aquell pla, amb les seves línies, arcs, cercles, punts, relacions i cotes (amb els noms de PartCraft, com `k7`) |
| Croquis sobre una cara | Un croquis sobre la mateixa cara, triada per un punt que hi és |
| Croquis sobre un pla fix | Un pla de referència per tres punts, i el croquis sobre ell |
| Extrusió, retall (cec, passant, pla mig, dues direccions, conicitat) | Boss-extrude o cut-extrude |
| Revolució, retall per revolució | Revolve sobre la mateixa línia de centre |
| Forat (simple, escarit, avellanat, roscat) | Un o dos retalls amb els seus propis croquis (un forat roscat és el seu forat de broca; sense rosca) |
| Matriu lineal i circular, simetria | Linear pattern, circular pattern, mirror (operacions o el cos) |
| Arrodoniment, xamfrà i buida | Fillet, chamfer i shell sobre les mateixes arestes i cares, triades per punts |
| Paràmetres i equacions | Variables globals i equacions sobre les cotes reanomenades |
| Operacions suprimides, la barra de retrocés | Suprimides de la mateixa manera; la barra de retrocés al mateix lloc |

Després de cada operació de sòlid, la macro compara el volum i la mida del cos amb els de PartCraft. Quan difereixen, gira una vegada la direcció d'aquella operació i ho torna a comprovar; si no millora, la torna a girar i escriu "Check" al registre.

### Què queda fora

El diàleg i la part superior de la macro enumeren tot el que no s'ha traslladat, amb el motiu. Avui són: sòlids importats (inseriu el STEP), escombrats, lofts, desmotllaments, eixos i punts de referència, condicions de final "fins a", extrusió només d'alguns contorns, i tot el que en depengui. Les splines es converteixen en corbes que passen pels seus punts. Aquesta versió no té un nucli exacte, de manera que també queden fora els croquis sobre cares i les operacions que trien arestes o cares.

## Envia un STEP amb nom

Encara no implementat en aquesta versió: {{ui:STEP per a SolidWorks (amb nom, AP214)}} necessita un nucli exacte, i triar-lo diu "STEP per a SolidWorks: encara no implementat. …". Amb un nucli exacte, el fitxer porta el nom de la peça, els mil·límetres i el color de la peça, i posa l'eix Y vertical, com mostra SolidWorks les peces (l'exportació {{ui:STEP AP214 (sòlid exacte)}} normal posa l'eix Z vertical). Les lletres amb accent perden l'accent al nom, i els altres caràcters fora de l'ASCII senzill es converteixen en `_`.

## Torna una peça

Obrir el fitxer a PartCraft (pas 3) encara no està implementat en aquesta versió: diu "Obrir una exportació de SolidWorks: encara no implementat. …". L'aplicació de delineació CadCraft encara obre el fitxer i n'agafa els croquis.

1. Trieu {{ui:Fitxer}} > {{ui:Exporta}} > {{ui:Exporta una macro per tornar peces (.swb)}} per baixar `CadCraftExport.swb`, i poseu-lo al costat de les vostres peces.
2. A SolidWorks, obriu la peça, trieu **Tools > Macro > Run** i trieu `CadCraftExport.swb`. Escriu `<part>.cadcraft-sw.json` al costat de la peça i no hi canvia res.
3. A PartCraft, trieu {{ui:Obre}} i trieu aquest fitxer, o deixeu-lo anar a la vista 3D.
4. Amb un nucli exacte, PartCraft reconstrueix la peça operació a operació i mostra què ha fet: per exemple "5 de 5 operacions traslladades de SolidWorks (Flange.SLDPRT)", cada operació que no ha pogut traslladar ("No traslladada: Sweep1 (Sweep).") i si el volum coincideix amb el que va escriure SolidWorks.
5. Deseu-la com a peça de PartCraft amb {{ui:Desa}}.

Els croquis es col·loquen sobre un pla de base quan n'hi ha un, sobre la cara plana corresponent de la peça quan n'hi ha una (de manera que segueixen les edicions posteriors), i sobre un pla fix en cas contrari. Les arestes i les cares d'arrodoniments, xamfrans i buides es troben a partir de punts i es mantenen com a referències amb nom. Les variables globals esdevenen paràmetres (els noms amb espais reben guions baixos: "Bolt count" esdevé `Bolt_count`) i les equacions esdevenen equacions sobre les mateixes cotes. No s'endevina res: tot el que no té correspondència es llista.

L'aplicació de delineació CadCraft obre el mateix fitxer i n'agafa els croquis.

:::note
El format és `cadcraft-sw-export` versió 1, JSON pla en mil·límetres i graus. Un fitxer d'una macro més nova, o que no és vàlid, es rebutja indicant-ne el motiu.
:::
