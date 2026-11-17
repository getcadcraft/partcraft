---
title: Copia, enganxa i duplica
summary: Copia geometria de croquis, operacions i peces de conjunt; enganxa on fas clic o al mateix lloc; duplica en un sol pas; i què ve amb una còpia i què no.
keywords: copia, enganxa, retalla, duplica, porta-retalls, enganxa al mateix lloc, selecciona-ho tot, neteja la selecció, suprimeix, ctrl c, ctrl v, ctrl d, instància, component, copia croquis, copia operació, copia peça
from: 611307d7
---

El grup {{ui:Edita}} de la barra d'eines conté {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}} i un menú {{ui:Més}} amb {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}} i {{ui:Neteja la selecció}}, cadascun amb la seva tecla. Què es copia depèn d'on siguis: geometria en un croquis obert, una operació a l'historial, o una peça en un conjunt.

Un element en gris no pot actuar ara mateix. Posa-hi el punter a sobre: el seu consell emergent diu el motiu, per exemple "Selecciona primer la geometria del croquis" o "El porta-retalls conté Sketch2 i Extrude2: les operacions s'enganxen a l'historial, així que primer surt del croquis".

| Acció | Tecla | En un croquis | A l'historial | En un conjunt |
|---|---|---|---|---|
| Copia | {{key:Mod+C}} | Els punts i corbes seleccionats | El croquis, extrusió, revolució o forat seleccionat (amb el seu croquis) | La peça seleccionada |
| Retalla | {{key:Mod+X}} | Copia i després suprimeix-los | Copia i després suprimeix l'operació | Copia i després treu la peça |
| Enganxa | {{key:Mod+V}} | La còpia segueix el punter; fes clic on ha d'anar | Afegeix la còpia al final de l'historial | Una còpia nova al costat de les altres peces |
| Enganxa al mateix lloc | {{key:Mod+Shift+V}} | A les mateixes coordenades | Igual que Enganxa | Al mateix lloc que la peça copiada |
| Duplica | {{key:Mod+D}} | Copia i mou en un sol gest; el porta-retalls no es toca | Una segona còpia just després de tu | Una segona còpia al costat de les altres peces |
| Suprimeix | {{key:Delete}} | La selecció | L'operació (pregunta si altres en fan servir) | La peça o la unió |
| Selecciona-ho tot | {{key:Mod+A}} | Tot el croquis | No disponible | No disponible |
| Neteja la selecció | {{key:Esc}} | Esborra la selecció | Esborra la selecció i les tries | Esborra la selecció |

Cada enganxada, duplicació i retall és un pas de la llista de desfer: {{key:Mod+Z}} la desfà, {{key:Mod+Y}} la refà.

## En un croquis

1. Selecciona el que vols copiar: fes clic, {{key:Shift}}+clic per a més, arrossega una finestra, o prem {{key:Mod+A}} per a tot.
2. Prem {{key:Mod+C}} o tria {{ui:Copia}}. La barra d'estat diu què s'ha copiat.
3. Prem {{key:Mod+V}} o tria {{ui:Enganxa}}. Una còpia discontínua segueix el punter, subjectada pel seu centre. S'ajusta als punts: posa el centre d'un cercle copiat sobre un punt fent clic en aquest punt.
4. Fes clic on ha d'anar. La geometria enganxada queda seleccionada, així que la pots arrossegar o afegir-hi relacions de seguida. {{key:Esc}} cancel·la l'enganxada.

Què ve amb la còpia:

- Una línia, cercle o arc copiat porta els seus propis punts finals i centre.
- Les relacions i cotes **entre elements copiats** vénen: un rectangle copiat és encara un rectangle, amb les seves mides.
- Les relacions **a geometria que no has copiat**, i a l'origen, es perden. La barra d'estat les compta: "2 relacions a geometria fora de la còpia no vindran". Així que una còpia enganxada es pot moure lliurement fins que la lliguis amb relacions o cotes.
- Un punt fix es queda fix, a la seva nova posició.

{{ui:Enganxa al mateix lloc}} posa la còpia exactament sobre les coordenades de l'original, en aquest croquis o en un altre: útil per portar un perfil d'un croquis a un altre. Al mateix croquis la còpia queda just sobre l'original; arrossega-la lluny.

{{ui:Duplica}} ({{key:Mod+D}}) copia la selecció i comença a col·locar-la de seguida, sense tocar el que hi ha al porta-retalls.

:::tip
Per repetir un centre de forat o una ranura diverses vegades, copia'l una vegada i enganxa'l diverses: cada {{key:Mod+V}} comença una còpia nova que segueix el punter.
:::

## A l'historial

1. Fes clic a un croquis, una extrusió, una revolució o un forat a l'historial.
2. {{key:Mod+C}} el copia. Una operació basada en un croquis es copia junt amb el seu croquis.
3. {{key:Mod+V}} afegeix la còpia al final de l'historial (a la barra de retorn quan hagis retrocedit), amb noms nous com Sketch3 i Extrude2.

La còpia queda sobre el mateix pla o cara que l'original, així que es construeix sobre ell i la peça es veu igual. Selecciona el croquis nou i canvia'n el pla al tauler dret, o obre'l i arrossega o torna a acotar el perfil, per moure la còpia.

- Enganxar en **una altra peça**: obre aquesta peça i prem {{key:Mod+V}}. Quan el croquis de la còpia estava sobre una cara que aquella peça no té, va al pla Front, i la barra d'estat ho diu.
- {{ui:Duplica}} fa copia i enganxa en un sol pas, dins de la mateixa peça.
- {{ui:Retalla}} copia l'operació i després l'esborra (preguntant primer si altres operacions en fan servir).

Les matrius, simetries, arrodoniments, xamfrans, buides i sòlids importats no es poden copiar: depenen d'arestes, cares o operacions triades en aquesta peça. Copia el croquis o l'operació en què es basen, o fes-ne una matriu amb {{ui:Lineal}} o {{ui:Circular}}.

## En un conjunt

1. Fes clic a una peça de la vista o a la llista de l'esquerra.
2. Tria {{ui:Duplica}} ({{key:Mod+D}}), o {{key:Mod+C}} i després {{key:Mod+V}}.

La còpia nova és la **mateixa peça**: edita'n una i totes les còpies canvien. Apareix a 20 mm a la dreta de tot el que ja és al conjunt, girada igual que la còpia, i es queda allà fins que una unió la col·loca. {{ui:Enganxa al mateix lloc}} ({{key:Mod+Shift+V}}) la posa exactament on és la peça copiada; uneix-la per moure-la (el desplaçament d'una unió lliscant la fa avançar).

Enganxar una peça copiada d'un altre conjunt porta la peça amb ella, igual que {{ui:Insereix}} des del seu fitxer. {{ui:Afegeix còpia}} al grup Conjunt fa el mateix que {{ui:Duplica}}, i funciona amb res seleccionat (copia l'última peça).

## El porta-retalls

- És el porta-retalls propi de PartCraft, no el de l'ordinador: no pots enganxar geometria de PartCraft en un altre programa, ni text a les vistes de PartCraft.
- Es guarda en aquest navegador, de manera que una altra pestanya de PartCraft pot enganxar el que has copiat. Es llegeix i es comprova com un fitxer obert; qualsevol cosa malmesa o d'una altra versió es rebutja.
- Una peça amb un fitxer STEP importat molt gran pot ser massa gran perquè el navegador la guardi: aleshores només s'enganxa en aquesta pestanya.
- En un camp numèric o a la cerca d'ajuda, {{key:Mod+C}} i {{key:Mod+V}} copien i enganxen text com de costum.

Al full del plànol, copiar i enganxar encara no estan disponibles; {{ui:Suprimeix}} i {{ui:Neteja la selecció}} funcionen sobre el símbol seleccionat. Vegeu [Encara no implementat](topic:not-built-yet).
