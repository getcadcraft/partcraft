---
title: Combina, mou i escala cossos; matrius de camí
summary: Crea cossos separats i després uneix-los, retalla'ls o interseca'ls, mou-los, gira'ls, alinea'ls o copia'ls, escala'ls de manera uniforme o per X, Y i Z, i copia operacions o cossos al llarg d'una corba.
keywords: cos, cossos, multicos, cos nou, combina, booleà, uneix, retalla, interseca, resta, unió, manté les eines, mou el cos, copia el cos, gira el cos, alinea, translada, escala, escala no uniforme, estira, afí, matriu de camí, patró al llarg d'una corba, matriu guiada per corba
from: 6b1ea820
---

:::note
**Encara no implementat en aquesta versió.** Treballar amb diversos cossos necessita un nucli de geometria exacte, que aquesta versió de PartCraft no té: construeix totes les peces amb el nucli de malla. [Què encara no està implementat](topic:not-built-yet) explica què fer en lloc d'això. La resta de la pàgina descriu com funciona amb un nucli exacte.
:::

Una peça pot tenir més d'un sòlid. Cada sòlid separat és un **cos**. La majoria d'operacions afegeixen o retallen de tots els cossos que toquen; les eines d'aquesta pàgina treballen sobre cossos sencers que tries. Són al menú {{ui:Més}} del grup Operacions: {{ui:Combina}}, {{ui:Mou el cos}}, {{ui:Escala el cos}} i {{ui:Matriu de camí}}. Totes necessiten el nucli exacte (OpenCascade).

## Fes un cos separat

Posa l'**Operació** d'una extrusió o d'una revolució a **Cos nou** al seu tauler dret (els escombrats i els lofts també la tenen). El nou sòlid es manté separat fins i tot allà on se solapa amb els altres. **Interseca** només manté la superposició de la forma nova amb el que hi ha.

Els cossos es nomenen segons l'operació que els va crear: "Extrude2". Una còpia es nomena segons l'original i l'operació que la va copiar: "Extrude2, còpia 1 de Move1". Els noms es mantenen quan canvies les mides aigües amunt, de manera que les operacions que fan servir un cos continuen trobant-lo. Amb dos o més cossos, el tauler de la peça (fes clic a l'espai buit) els llista amb els seus volums.

## Canvia el nom o amaga un cos

Fes clic a l'espai buit de la vista per veure el tauler de la peça. La seva llista de cossos (es mostra quan la peça té dos o més cossos) té un camp de nom i un botó {{ui:Amaga}} a cada fila.

- **Canvia el nom:** escriu un nom nou al camp i prem {{key:Enter}} o fes clic fora. Tots els taulers l'usen aleshores: Combina, Mou el cos, les matrius. Buida el camp per tornar al nom de l'operació que va fer el cos.
- **Amaga:** fes clic a {{ui:Amaga}} a la seva fila. El cos surt de la vista i els clics el travessen, de manera que pots triar cares que hi ha darrere. {{ui:Mostra}} el torna a mostrar; {{ui:Mostra-ho tot}} torna a mostrar tots els cossos amagats.

Amagar només canvia la vista. Un cos amagat encara es construeix, es compta en el volum i en les mesures, i es desa en les exportacions STL, 3MF i STEP. Els noms i els cossos amagats es desen al fitxer de la peça, i cada canvi és un pas de {{ui:Desfés}}.

## Combina cossos

1. Shift+clic a una cara del cos **objectiu**, i després a una cara de cada cos **eina**.
2. Tria {{ui:Més}} i després {{ui:Combina}}.
3. Al tauler dret tria l'**Operació**:

| Operació | Resultat |
|---|---|
| Uneix | L'objectiu i les eines esdevenen un sol cos |
| Retalla | Les eines es treuen de l'objectiu |
| Interseca | Només es manté el que comparteixen l'objectiu i totes les eines |

El **cos objectiu** és el que manté el seu nom. Marca o desmarca **Cossos eina**, o fes servir **Tria a la vista** i fes clic a les seves cares. **Manté els cossos eina** deixa també les eines al seu lloc (útil per a un motlle i el seu nucli). Si un cos eina ja s'ha gastat en un Combina anterior, el tauler ho diu en lloc de triar un altre cos.

## Mou o copia un cos

1. Tria {{ui:Més}} i després {{ui:Mou el cos}}. El cos més recent està marcat; marca els que vols moure.
2. Tria el tipus de **Mou**:

| Mou | Què defineixes |
|---|---|
| Translada | **ΔX**, **ΔY**, **ΔZ** en mil·límetres |
| Punt a punt | **Des de** i **Fins a**: fes clic a prop del final d'una aresta, a un punt, o a un lloc d'una cara |
| Gira al voltant d'un eix | **Eix** (X, Y, Z, una operació d'eix, o **Tria**: una aresta recta, un cercle o un cilindre) i **Angle (°)** |
| Alinea una cara amb una cara o un pla | **Cara a moure** (una cara plana del cos), **Sobre** (una cara plana o un pla) |

Alinea gira el cos perquè la seva cara quedi sobre l'altra cara, cara a cara, i després només el fa lliscar al llarg de la normal d'aquella cara. **Mateixa direcció** el gira a l'altra banda. **Copia** manté l'original i afegeix el cos mogut com a cos nou.

## Escala un cos

1. Tria {{ui:Més}}, després {{ui:Escala el cos}}, i marca els cossos.
2. Escriu una **Escala**, o desmarca **Uniforme** i escriu **Escala X**, **Escala Y** i **Escala Z** (al llarg dels eixos del món).
3. **Al voltant de** és el punt que es queda quiet: el centre de la caixa dels cossos, o un punt que triïs.

L'escala uniforme és exacta. Una escala no uniforme converteix els cercles en el·lipses: un cilindre es converteix en un cilindre el·líptic, cosa que cap superfície analítica no pot contenir, així que les cares corbes esdevenen superfícies B-spline que es mantenen dins de 0.0000004 mm de la forma exacta; les cares planes i les arestes rectes es mantenen exactes. El tauler diu què ha passat. Els factors d'escala han de ser més grans que zero (per reflectir-ho usa {{ui:Simetria}}).

## Copia al llarg d'un camí

1. Selecciona a l'historial l'operació que vols copiar, o no seleccionis res per copiar el cos més recent.
2. Tria {{ui:Més}} i després {{ui:Matriu de camí}}. El croquis no utilitzat més recent es pren com a camí.
3. Al tauler dret defineix:

| Ajust | Què fa |
|---|---|
| **Copia** | Cossos (cada còpia un cos nou) o Operacions (unides o retallades com l'original) |
| **Camí** | Marca croquis, o **Tria arestes del model**; les peces han d'unir-se d'extrem a extrem |
| **Nombre** | Total, incloent l'original |
| **Espaiat** | Igual (repartit fins al final d'un camí obert, o tot al voltant d'un de tancat) o una distància fixa |
| **Orientació** | Segueix el camí (cada còpia gira amb ell) o Fixa (les còpies queden paral·leles) |
| **Inverteix la direcció** | Recorre el camí en sentit contrari |

Les còpies comencen on el camí passa més a prop de l'original i se separen per longitud al llarg de la corba.

Les matrius lineals i circulars també poden copiar cossos: marca **Copia cossos** al seu tauler i tria els cossos; cada còpia és un cos nou.

## Límits

- Els cossos necessiten el nucli exacte; el nucli de malla manté un sòlid i ho indica.
- Una escala no uniforme converteix les cares corbes en aproximacions B-spline properes (vegeu més amunt), no en cilindres o cons exactes; les superfícies desplaçades encara no es poden escalar així.
- Seguir el camí en una corba 3D que es torça transporta la còpia sense torçar-la; en camins plans el gir és exacte.
- Combina només funciona amb sòlids. Els cossos de superfície s'uneixen amb {{ui:Cosit}}.

Vegeu també [Plans, eixos i punts de referència](topic:reference-geometry) per als punts i plans "entre objectes", i [Operacions de matriu i simetria](topic:patterns-mirror).
