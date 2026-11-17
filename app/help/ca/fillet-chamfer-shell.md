---
title: Arrodoneix, bisela i buida amb Arrodoniment, Xamfrà i Buida
summary: Selecciona arestes i afegeix arrodoniments de radi constant o variable, i xamfrans d'igual distància, de dues distàncies o de distància i angle; buida una peça amb Buida triant les cares a obrir, canvia quines arestes o cares usa una operació, i corregeix les fallades habituals.
keywords: arrodoniment, arrodoneix, mescla, xamfrà, bisell, buida, buidat, gruix de paret, arestes, cares, selecciona arestes, Shift+clic, cara oberta, nucli exacte, nucli de malla, no implementat
from: e41c1c12
---

:::note
**En aquesta versió** PartCraft construeix els arrodoniments i xamfrans amb el nucli de malla, només sobre **arestes rectes entre dues cares planes**: les arestes d'una caixa i les arestes rectes d'extrusions i talls, en cantonades exteriors o interiors (una cantonada interior rep material afegit). Les arestes rodones, com les vores dels forats, i un radi que canvia al llarg de l'aresta encara no estan implementats. Quan dues arestes arrodonides es troben en una cantonada, els arrodoniments s'ajunten a inglet (es troben en una cresta viva), no es fonen. **Buida** també funciona, construïda pel nucli de malla: només obre cares planes, les buides amb gruixos de paret diferents encara no estan implementades, i és lenta en peces amb moltes cares rodones. Vegeu [Què encara no està implementat](topic:not-built-yet).
:::

{{ui:Arrodoniment}} arrodoneix les arestes, {{ui:Xamfrà}} les bisela i {{ui:Buida}} buida la peça. Les tres funcionen sobre les arestes i cares del sòlid i les construeix el nucli de malla. Els seus arrodoniments són facetats com qualsevol cara rodona (**Corbes** n'indica la finesa); les cares rodones són cilindres que podeu seleccionar i mesurar (vegeu [El nucli de malla](topic:solid-kernels)).

## Arrodoneix o xamfreu arestes

### Selecciona primer les arestes

1. Feu clic en una aresta de la peça. Tota l'aresta es ressalta, i el tauler de la dreta diu **Aresta**: el seu tipus (Recta, Cercle o arc, Corba), la longitud i les cares entre les quals es troba.
2. Per afegir més arestes, feu {{key:Shift}}+clic a sobre. Cada una queda marcada; feu {{key:Shift}}+clic en una aresta marcada per treure-la. La capçalera del tauler les compta ("4 arestes") i la barra d'estat diu "4 arestes seleccionades. Arrodoniment o Xamfrà les arrodoneix; Shift+clic en selecciona més, Esc les neteja."
3. Trieu {{ui:Arrodoniment}} o {{ui:Xamfrà}} a la barra d'eines, o els mateixos botons al tauler de la dreta.

L'operació s'afegeix amb totes les arestes seleccionades: un arrodoniment de 2 mm, o un xamfrà d'1 mm. La barra d'estat diu, per exemple, "Fillet1 afegit (4 arestes). Canvieu-ne la mida a la dreta; Selecciona arestes canvia quines són."

### O afegeix primer l'operació

1. Sense res seleccionat, trieu {{ui:Arrodoniment}} o {{ui:Xamfrà}}.
2. PartCraft passa a la selecció: la capçalera del tauler diu "Fillet1: seleccionant", la peça es mostra tal com era abans de l'arrodoniment (el tauler ho indica), i la barra d'eines mostra {{ui:Fet}}.
3. Feu clic a cada aresta per afegir-la; torneu-hi a fer clic per treure-la. La barra d'estat les compta.
4. Trieu {{ui:Fet}} (o {{ui:Fet}} al tauler), o premeu {{key:Esc}} o {{key:Enter}}.

### Ajustos

| Ajust | Arrodoniment | Xamfrà |
|---|---|---|
| Mida | **Radi (mm)**, per defecte 2 | **Distància (mm)** enrere des de l'aresta a les dues cares, per defecte 1 |
| **Arestes** | Quantes | Quantes |

La llista següent anomena cada aresta per les dues cares que uneix, com "Aresta 1: Extrude1 end face × Extrude1 side". **Elimina** en treu una. {{ui:Selecciona arestes}} torna a la selecció. Fer doble clic a l'operació a l'historial fa el mateix.

Les arestes es recorden per les dues cares que uneixen, de manera que es mantenen a l'aresta correcta quan canvieu una cota anterior a l'historial.

### Arrodoniments variables i tipus de xamfrà

- **Radi variable** (arrodoniment): encara no implementat en aquesta versió ("Un arrodoniment el radi del qual canvia al llarg de l'aresta: encara no implementat (necessita un nucli exacte). Doneu-li un únic radi."). Amb un nucli exacte: marqueu-lo i definiu **Radi final (mm)**. El radi canvia linealment des de **Radi** a un extrem de cada aresta fins a **Radi final** a l'altre; **Inverteix els extrems** ho gira.
- **Tipus** (xamfrà): **Distància igual**, **Dues distàncies** (una **Segona distància** a l'altra cara) o **Distància i angle** (la distància en una cara, el bisell a **Angle (°)** respecte a aquesta cara). **Inverteix els costats** posa la primera distància a l'altra cara.

## Buida una peça

1. Feu clic a la cara plana que voleu deixar oberta, per exemple la part superior d'una caixa. O feu {{key:Shift}}+clic a diverses cares.
2. Trieu {{ui:Buida}} a la barra d'eines, o {{ui:Buida, obrint aquesta cara}} al tauler de la cara.

La peça esdevé una paret de 2 mm amb les cares seleccionades obertes. Ajustos:

| Ajust | Què fa | Per defecte |
|---|---|---|
| **Mur (mm)** | El gruix de la paret | 2 |
| **Els murs creixen cap a fora (les cares es queden a dins)** | Marcat: els murs s'afegeixen per fora, de manera que l'interior manté la mida de la peça | Desactivat: els murs van cap a dins i l'exterior manté la seva mida |
| **Cares obertes** | Quantes cares s'eliminen | |

Cap a dins, els murs tenen exactament el gruix de la paret: les cantonades exteriors es mantenen vives, les cantonades interiors surten arrodonides (radi = el mur), i un forat que travessa la peça rep al seu voltant un tub de paret. Cap a fora, els murs s'afegeixen per fora de la superfície original, que esdevé el buit, i les arestes exteriors surten arrodonides. Les cares interiors reben el nom de les cares de les quals es desplacen, de manera que les podeu seleccionar.

Només es poden obrir cares planes: seleccionar-ne una de corba mostra "Buida: en aquesta versió només obre cares planes (la construeix el nucli de malla)." Una buida és lenta en peces amb moltes cares rodones (diversos segons per cada mil triangles): useu un ajust de **Corbes** més gruixut mentre dissenyeu.

{{ui:Selecciona cares}} canvia quines cares estan obertes, de la mateixa manera que en seleccionar arestes. La llista n'anomena cada una, com "Cara 1: Extrude1 end face". No es permet una buida sense cap cara oberta: "Seleccioneu les cares a eliminar (obertes) i després buideu."

## L'ordre importa

Les operacions es construeixen de dalt a baix. Un arrodoniment abans d'una buida es buida amb la peça, de manera que l'interior també rep cantonades arrodonides. Un arrodoniment després d'una buida només arrodoneix les arestes que seleccioneu. Moveu les operacions amb {{ui:Mou amunt}} i {{ui:Mou avall}} (vegeu [Canvia una peça a través del seu historial](topic:edit-history)).

Els patrons i les simetries no poden copiar un arrodoniment, un xamfrà ni una buida: "Fillet1 canvia les arestes o els murs del cos; no es pot copiar. Copieu les operacions que fan sòlids (extrusions, revolucions, forats, importacions)." Feu primer el patró dels forats o talls, i després arrodoniu en un sol arrodoniment totes les arestes de les còpies.

## Quan falla

| Missatge | Què cal fer |
|---|---|
| "Un arrodoniment de 5 mm no hi cap (és massa gran per a una cara al costat d'una de les arestes, o les arestes es troben en una cantonada que el nucli no pot fondre)." | Useu un radi més petit, o arrodoniu menys arestes cada cop (diverses operacions d'arrodoniment, la més petita al final) |
| "Ha desaparegut una aresta que arrodoneix: l'aresta entre Extrude1 i Cut2." | Un canvi anterior ha eliminat aquella aresta. Trieu {{ui:Selecciona arestes}}, elimineu l'aresta en vermell i seleccioneu-ne la nova |
| "La buida no s'ha pogut fer amb aquest gruix (…)." | El mur és més gruixut que una part estreta del model, o que el radi d'un arrodoniment. Feu el mur més prim, o els arrodoniments més grans que el mur |
| "Aquella cara no té un nom que l'historial pugui seguir; seleccioneu-ne una altra." | Seleccioneu una cara feta per una operació (la majoria ho són) |
| "Arrodoniment: en aquesta versió només arestes rectes entre dues cares planes (les construeix el nucli de malla). Arrodoniu o bisel·leu les arestes corbes al croquis." (també Xamfrà) | Una aresta seleccionada és rodona, com la vora d'un forat, o es troba en una cara corba. Elimineu-la amb {{ui:Selecciona arestes}}, i arrodoneix o bisel·la aquella cantonada al croquis |
| "Un arrodoniment el radi del qual canvia al llarg de l'aresta: encara no implementat (necessita un nucli exacte). Doneu-li un únic radi." | Desmarqueu **Radi variable** |
| "Arrodoniment pel nucli de malla: on es troben les arestes arrodonides, s'ajunten a inglet, no es fonen." (⚠ a l'historial) | Un avís, no un error: la peça està construïda. Les arestes seleccionades es troben en una cantonada, i els arrodoniments s'hi troben en una cresta viva. Arrodoniu menys arestes, o accepteu la cresta |
| "Buida: en aquesta versió només obre cares planes (la construeix el nucli de malla)." | Una cara oberta és corba. {{ui:Selecciona cares}} i elimineu-la; obriu només cares planes |

## Límits

En aquesta versió els arrodoniments i xamfrans només funcionen sobre arestes rectes entre dues cares planes, amb un sol radi, i els arrodoniments que es troben en una cantonada s'ajunten a inglet. Les buides només obren cares planes. Amb un nucli exacte, un arrodoniment variable canvia linealment al llarg de cada aresta (una llei per operació; cap radi definit en punts al llarg d'ella). Els arrodoniments de cara, els arrodoniments de rodó complet i les buides amb gruixos de paret diferents encara no estan implementats.
