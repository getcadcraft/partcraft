---
title: Tauleta tàctil, pantalla tàctil i pantalles petites
summary: Com girar, desplaçar i fer zoom amb una tauleta tàctil de Mac o d'un ordinador portàtil, què funciona en una pantalla tàctil i què encara necessita teclat, i com s'ordena la pantalla en un telèfon o una finestra estreta.
keywords: tauleta tàctil, touchpad, magic mouse, mac, tàctil, tauleta, iPad, telèfon, pinça, dos dits, clic dret, clic secundari, gestos, pantalla petita, mòbil
from: 0e764fd8
---

PartCraft està fet per a un ratolí amb roda i botó central, però una tauleta tàctil funciona bé quan coneixeu els gestos, i una pantalla tàctil serveix per mirar peces i fer croquis senzills.

## Tauleta tàctil

:::mac
| Per a | Feu això |
|---|---|
| Girar la peça (3D) | Feu clic i arrossegueu amb un dit (o arrossegueu amb tres dits, si heu activat l'arrossegament amb tres dits) |
| Desplaçar (3D) | Mantingueu {{key:Shift}} (o ⌘) i feu clic i arrossegueu, o feu clic i arrossegueu amb dos dits premuts (un arrossegament de clic secundari) |
| Girar la peça, amb lliscament | Lliscar amb dos dits; amb {{key:Shift}}, el lliscament desplaça. Cal que **Desplaçament** estigui en "Detecció automàtica" (l'inici) o "Tauleta tàctil" |
| Zoom (3D i croquis) | Pinça. El zoom va cap al punter. Amb **Desplaçament** en "Roda del ratolí", un desplaçament amb dos dits també fa zoom |
| Clic dret | Feu clic amb dos dits, o {{key:Ctrl}}+clic |
| Desplaçar en un croquis | Lliscar amb dos dits ("Detecció automàtica" o "Tauleta tàctil"), o feu clic i arrossegueu amb dos dits premuts. {{key:Shift}}+arrossegar no desplaça en un croquis (dibuixa una finestra de selecció) |
| Afegir a una selecció en un croquis | {{key:Shift}}+clic o ⌘+clic |

Activeu el clic secundari a **Configuració del sistema**, **Trackpad**, **Apunta i fes clic** si el clic amb dos dits no fa res.
:::

:::windows linux
| Per a | Feu això |
|---|---|
| Girar la peça (3D) | Premeu la tauleta (o toqueu i manteniu) i arrossegueu |
| Desplaçar (3D) | Mantingueu {{key:Shift}} o {{key:Ctrl}} i arrossegueu, o arrossegueu amb l'àrea del botó dret premuda |
| Girar la peça, amb lliscament | Lliscar amb dos dits; amb {{key:Shift}}, el lliscament desplaça. Cal que **Desplaçament** estigui en "Detecció automàtica" (l'inici) o "Tauleta tàctil" |
| Zoom (3D i croquis) | Pinça on la tauleta ho admet. El zoom va cap al punter. Amb **Desplaçament** en "Roda del ratolí", un desplaçament amb dos dits fa zoom |
| Clic dret | Toc amb dos dits, o la cantonada inferior dreta de la tauleta |
| Desplaçar en un croquis | Lliscar amb dos dits ("Detecció automàtica" o "Tauleta tàctil"), o arrossegueu amb l'àrea del botó dret premuda. {{key:Shift}}+arrossegar no desplaça en un croquis |
| Afegir a una selecció en un croquis | {{key:Shift}}+clic o {{key:Ctrl}}+clic |
:::

**Desplaçament** és a [Configuració de PartCraft](topic:settings): "Detecció automàtica" (l'inici) tracta el desplaçament lateral o fi com si fos una tauleta, "Tauleta tàctil" sempre ho fa, i "Roda del ratolí" mai. Una pinça fa zoom en les tres.

Les tecles de fletxa giren la vista 3D, i {{key:Shift}} amb les fletxes desplaça, un cop heu fet clic a la vista: pràctic en una tauleta. {{key:Plus}} i {{key:Minus}} fan zoom.

## Pantalles tàctils

PartCraft llegeix l'entrada tàctil, així que les tauletes, els ordinadors portàtils tàctils i els telèfons funcionen, amb límits.

:::touch
**Tecles tàctils**

Quan toqueu la pantalla, apareix una petita barra a la part inferior dreta de la vista amb les tecles que un dit no té. Desapareix quan useu un ratolí.

- {{ui:Esc}}: la tecla Esc. Cancel·la el que heu començat o retrocedeix, exactament com la tecla.
- {{ui:Afegeix}} (en un croquis, amb Selecciona): mentre està activat, cada toc afegeix un element a la selecció o el treu, com {{key:Shift}}+clic. Torneu-lo a tocar per tornar a seleccionar un element cada vegada.
- {{ui:Fet}} (mentre dibuixeu una cadena de línies, un spline o un polígon): l'acaba, com un clic dret.

Mantenir el dit quiet durant uns mig segon equival a un sol toc: amb una eina de dibuix acaba el que dibuixeu, i amb Selecciona afegeix a la selecció l'element sota el dit o el treu. Els punts i les línies són més fàcils de tocar amb un dit: PartCraft mira unes dues vegades més lluny del toc que del clic.

**A la vista 3D**

- Un dit: gira la peça.
- Dos dits: pinça per fer zoom, mou-los junts per desplaçar.
- Toc: selecciona una cara, una aresta o un pla. No hi ha ressaltat amb el punter abans de tocar.

**En un croquis**

- Toqueu amb una eina de dibuix per col·locar cada punt: toqueu l'inici, després el final. L'ajust es fa on aixequeu el dit.
- Dos dits fan pinça i desplacen. Posar un segon dit cancel·la un arrossegament que havia començat el primer dit.
- Per acabar una cadena de línies, toqueu {{ui:Fet}}, manteniu el dit quiet, o toqueu {{ui:Línia}} de nou (o una altra eina) a la barra d'eines.
- Amb Selecciona, toqueu per seleccionar; arrossegueu un punt o una línia per moure'l; arrossegueu sobre un espai buit per fer una finestra. Un segon toc substitueix la selecció tret que {{ui:Afegeix}} estigui activat (o que mantingueu el dit quiet sobre el segon element).
- Per canviar una cota, useu **Edita** al costat d'ella al tauler de la dreta.

**El full del plànol**

Toqueu per col·locar i seleccionar símbols, i arrossegueu un símbol per moure'l. Feu pinça per fer zoom, mou dos dits per desplaçar, o arrossegueu un dit sobre paper buit. Un segon dit atura un símbol que arrossegàveu, i aquest torna enrere.

**Què encara necessita teclat**

- Escriure números: el teclat de pantalla apareix als quadres de números i als camps de cotes.
- Dreceres de teclat per a les eines: useu la barra d'eines.
:::

## Pantalles petites i telèfons

- A 1280 píxels o més, la barra d'eines cap en una sola fila.
- Entre uns 760 i 1100 píxels, els panells laterals s'estrenyen.
- Per sota d'uns 760 píxels (un telèfon, o una finestra estreta), la pantalla s'apila: barra d'eines (lliscar-la de costat per veure més botons), la vista 3D, la barra d'estat, després el tauler de propietats i l'historial. Desplaceu la pàgina per arribar als panells.
- Els menús ({{ui:Exporta}}, {{ui:Vistes}}) s'obren a tota l'amplada de la pantalla.

:::note
A l'iPhone no hi ha mode de pantalla completa al navegador; {{key:Ctrl+Shift+F}} i el botó de mode de pantalla només canvien entre normal i amb les barres amagades.
:::

Un telèfon serveix per obrir una peça, girar-la i comprovar-ne les dades. Modelar de veritat necessita una pantalla més gran i un ratolí o una tauleta tàctil.

## Navegadors

Els navegadors actuals Chrome, Edge, Firefox i Safari executen PartCraft a Windows, macOS i Linux, i a tauletes i telèfons, sempre que WebGL i WebAssembly siguin disponibles. Vegeu [Navegadors i ordinadors](common:browsers).
