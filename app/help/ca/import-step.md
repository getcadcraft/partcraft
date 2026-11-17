---
title: Obre un fitxer STEP i construeix-hi a sobre
summary: Porta un model STEP d'un proveïdor o d'un altre programa CAD a PartCraft com a cos sòlid, com a peça nova o afegit a la peça actual, defineix cap a on és amunt i afegeix croquis i operacions.
keywords: step, stp, importa, obre step, ap203, ap214, ap242, model de proveïdor, sòlid sense historial, sòlid importat, eix amunt, z amunt, y amunt, triangles, amb facetes, step de conjunt
from: ca0eca5f
---

PartCraft obre fitxers STEP (`.step` o `.stp`, AP203, AP214 i AP242) com a **cossos sòlids** sobre els quals podeu fer croquis, tallar, perforar i combinar amb les vostres pròpies operacions. El cos no té historial propi: no podeu canviar les dimensions amb què es va fer, només afegir-hi material o tallar-ne.

Aquesta versió construeix totes les peces amb el nucli de malla, de manera que un fitxer STEP es **llegeix com a triangles**: les cares planes es mantenen planes, i les cares corbes (cilindres, cons, esferes, tors, superfícies B-spline) es converteixen en moltes cares planes petites. El seu volum és a una fracció per cent de l'exacte. Per conservar exactament les cares corbes cal un nucli exacte, que no hi ha en aquesta versió.

## Obre un fitxer STEP

1. Trieu {{ui:Obre}} o premeu {{key:Mod+O}}, i seleccioneu el fitxer `.step` o `.stp`. O bé arrossegueu-lo a la vista 3D.
2. PartCraft llegeix el fitxer i mostra el que hi ha trobat, per exemple: "Fitxer AP214: 1 sòlid, 10 cares, llegit com a triangles." A sota hi ha el recompte de triangles, qualsevol cosa que s'hagi hagut de deixar fora o unir, i si el resultat es tanca.
3. Comproveu **Amunt en el fitxer**. Un fitxer STEP indica la seva pròpia unitat (mil·límetres, polzades, metres…); PartCraft la converteix a mil·límetres, de manera que **Unitats del fitxer** mostra Mil·límetres, "el fitxer ho indica". **Mida aquí** mostra la mida que tindrà.
4. Trieu {{ui:Obre com a cos}} per a una peça buida, o bé {{ui:Afegeix-la a aquesta peça}} / {{ui:Peça nova}} quan la peça ja té operacions. En afegir-la se us pregunta què cal fer amb **Fes servir-la per a**: afegir, tallar o conservar només el solapament.

Apareix una operació **Imported1** a l'historial, i la barra d'estat diu, per exemple, "plate.step és un cos sòlid: 57995.937 mm³, 6 cares planes on fer croquis."

## Un STEP de conjunt

Un conjunt arriba com a **un sol cos**, amb cada peça on la situa el fitxer ("3 peces col·locades al fitxer arriben on estan"). Una peça usada dues vegades arriba dues vegades. Els noms de les peces i l'arbre del conjunt no es conserven.

## Defineix cap a on és amunt

La majoria de programes CAD fan servir Z cap amunt; PartCraft fa servir Y cap amunt. Per defecte, PartCraft gira el fitxer perquè la seva Z apunti amunt aquí. Si la peça arriba estirada de costat, seleccioneu **Imported1** i definiu **Amunt en el fitxer** com a **Y cap amunt**. **Unitats del fitxer** i **Fes servir-la per a** també es poden canviar des d'allà; cada canvi és un pas de desfer.

## Construeix-hi a sobre

- Feu clic en una cara plana del cos i trieu {{ui:Croquis en aquesta cara}}. Les cares planes del model STEP mantenen el seu lloc quan el cos es reconstrueix.
- Afegiu talls, forats, protuberàncies, matrius i simetries com en qualsevol peça.
- Comproveu la mida a la caixa **Peça**: volum, àrea superficial, mida.

Els arrodoniments, els xamfrans i els buidatges necessiten el nucli exacte, com en qualsevol peça d'aquesta versió ([El nucli de malla](topic:solid-kernels)).

## On es guarda

Els triangles es desen **dins** del fitxer `.partcraft.json`, de manera que el fitxer de la peça és autosuficient: no cal tornar a tenir el fitxer STEP.

## Missatges

| Missatge | Què vol dir |
|---|---|
| '"part.stp" no és un fitxer STEP (no comença amb ISO-10303-21).' | El fitxer no és text STEP pla. Demaneu al remitent un fitxer STEP AP203, AP214 o AP242 |
| "No s'ha pogut llegir el fitxer STEP: falta o està malmesa la seva secció de dades." | El fitxer està tallat o malmès. Torneu a copiar-lo |
| "El fitxer STEP no conté cap cos sòlid ni de superfície: no hi ha res per importar." | El fitxer només conté dibuixos, punts o dades. Demaneu un sòlid |
| "Aquest fitxer STEP és massa gran (més de 60 MB) per importar-lo aquí." i els altres límits del lector (entrades, cares, triangles) | Simplifiqueu el model a l'origen, o envieu les peces una a una |
| "… es van saltar les línies malmeses del fitxer." | No s'han pogut llegir algunes línies; la resta sí. Comproveu el cos |
| "… no s'han pogut convertir cares en triangles i s'han deixat fora." | Aquestes cares deixen forats, que PartCraft intenta omplir; si el cos no es tanca, no s'afegeix |
| "… s'han saltat cares d'un tipus que no es llegeix (…)." | Un tipus de superfície poc habitual. Demaneu el model amb superfícies planes o B-spline |
| "No es tanca …" | Les cares no formen un sòlid tancat (un model de superfície, o cares deixades fora). PartCraft mostra les obertures i no n'afegeix cap |

## Límits

- Les cares corbes es dibuixen i es mesuren com a facetes planes, com en totes les peces que construeix aquesta versió. PartCraft conserva amb el cos les cares planes, cilindres, cons, esferes i tors del propi fitxer, de manera que {{ui:Exporta}} › {{ui:STEP AP242 (sòlid exacte)}} els torna a escriure com a superfícies reals, els forats com a forats, juntament amb les operacions que afegiu. Les cares que el fitxer dona com a splines, escombrats o superfícies de revolució segueixen sent facetes a l'exportació. Una peça desada abans de la 0.9.1 no té superfícies conservades: torneu a obrir el fitxer STEP per obtenir-les.
- {{ui:Exporta}} › {{ui:DXF del croquis o de la cara plana}} amb una cara plana seleccionada escriu un forat rodó del fitxer com a cercle real.
- No es llegeixen els colors, els noms dels cossos, l'estructura del conjunt ni el PMI (les toleràncies del fitxer).
- A més de STEP, PartCraft obre malles STL, OBJ i 3MF ([Obre un fitxer STL, OBJ o 3MF](topic:open-meshes)) i fitxers `.3dm` ([Obre un model .3dm](topic:open-3dm-files)) com a cossos sòlids. No s'admeten fitxers IGES ni fitxers nadius d'altres programes.
- Una peça amb un sòlid STEP importat per una compilació que tenia el nucli exacte conserva el text STEP; aquesta versió salta aquesta operació ("encara no implementat"). Torneu a obrir el fitxer STEP per incorporar-lo com a triangles.
