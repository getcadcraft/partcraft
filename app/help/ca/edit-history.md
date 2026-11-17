---
title: Modifica una peça a través del seu historial
summary: Edita funcions i croquis a posteriori, desactiva, retrocedeix fins a un punt, insereix funcions abans, reordena, reanomena i suprimeix, i desfer-ne qualsevol canvi.
keywords: historial, arbre de funcions, arbre de disseny, edita funció, edita croquis, desactiva, reactiva, retrocés, retrocedeix, avança, reordena, mou funció, suprimeix, reanomena, desfer, refer, reconstrueix, regenera, pare fill, peça gran, moltes funcions, reconstrucció lenta, 750 funcions
from: 6f75aef4
---

Una peça de PartCraft és el seu historial: la llista de plans, croquis i funcions de l'esquerra. PartCraft reconstrueix el sòlid des de la part superior d'aquesta llista cada vegada que canvia alguna cosa. Si canvieu un número al principi de la llista, canvia tot el que s'hi ha construït a sobre.

## Edita una funció

1. Feu clic a la funció de l'historial (o al croquis sagnat sota seu).
2. Canvieu-ne la configuració al panell de la dreta. Cada canvi es reconstrueix de seguida.

No hi ha botons D'acord ni Cancel·la: cada canvi s'aplica. Si no us agrada, premeu {{key:Mod+Z}}.

## Canvia quines arestes o cares usa un arrodoniment, un xamfrà o una buidada

Feu doble clic a la funció de l'historial, o seleccioneu-la i trieu {{ui:Selecciona arestes}} (o {{ui:Selecciona cares}}). Feu clic a arestes o cares per afegir-les o treure-les, i després a {{ui:Fet}} o {{key:Esc}}. Vegeu [Arrodoniment, xamfrà i buidatge](topic:fillet-chamfer-shell).

## Edita un croquis

1. Feu doble clic al croquis de l'historial, o seleccioneu-lo i trieu {{ui:Edita el croquis}} al panell de la dreta (o {{ui:Croquis}} a la barra d'eines).
2. La peça torna a l'estat que tenia quan es va fer el croquis: les funcions posteriors queden ocultes mentre editeu.
3. Canvieu la geometria, les relacions o les cotes.
4. Tanqueu el croquis. Tota la peça es reconstrueix amb el canvi.

Per canviar només una mida, no cal obrir el croquis. Seleccioneu la funció o el croquis i canvieu el número sota **Cotes del croquis** (o **Cotes motrius**) al panell de la dreta. Vegeu [Canvia les mides sense obrir el croquis](topic:change-sizes).

## Quan una funció falla

Si un canvi fa impossible una funció, PartCraft construeix tota la resta i marca el problema:

- la funció mostra **⚠ error** a l'historial, i el seu missatge és a dalt del panell de la dreta (passeu el ratolí per la fila per llegir-lo també);
- les funcions que la necessiten mostren **⚠ no construïda**, amb "Necessita Extrude2, que falla.";
- el distintiu de la barra d'estat diu "1 operació amb error".

Corregiu la causa (o desferu el canvi), i la peça es torna a construir. Els missatges habituals i què fer-ne són a [Resolució de problemes](topic:troubleshooting).

## Desactiva una funció

Desactivar apaga una funció sense suprimir-la: és útil per provar una peça sense un forat o un patró.

1. Seleccioneu la funció.
2. Trieu {{ui:Desactiva}}. La seva fila mostra **desactivada**. Les funcions que la necessiten tampoc es construeixen.
3. Trieu {{ui:Reactiva}} per tornar-la a activar.

## Retrocedeix

Retrocedir construeix la peça només fins a un punt, de manera que la podeu veure com era, o afegir-hi una funció abans a l'historial.

1. Seleccioneu una funció i trieu {{ui:Retrocedeix fins aquí}}. Aquesta funció i totes les de sota queden en gris i no es construeixen. Una fila **Barra de retrocés · torna a avançar** marca el lloc.
2. Qualsevol funció que afegiu ara va **a la barra**, abans de les grises.
3. Feu clic a **Barra de retrocés · torna a avançar** per tornar a construir tot.

La posició de retrocés es desa al fitxer.

## Reordena les funcions

1. Seleccioneu la funció.
2. Trieu {{ui:Mou amunt}} o {{ui:Mou avall}}, o, amb la fila de l'historial enfocada, premeu {{key:Alt+Up}} o {{key:Alt+Down}}.

Una funció mai no es pot moure per sobre d'alguna cosa que usa. El botó queda en gris, i en passar-hi el ratolí (o provar la tecla) apareix el motiu, per exemple "Extrude2 usa Sketch2, per tant Sketch2 ha d'anar primer."

Una funció usa: el seu croquis; la cara on es troba el seu croquis; les funcions que copia un patró o una simetria; una línia de croquis o una revolució usades com a direcció o eix.

## Suprimeix una funció

1. Seleccioneu la funció i trieu {{ui:Suprimeix}} al panell de la dreta o a la barra d'eines, o premeu {{key:Delete}}.
2. Si altres funcions l'usen, PartCraft pregunta: "Extrude3, Hole1 usen Extrude1 i també se suprimiran." Trieu {{ui:Suprimeix-ho tot}} o {{ui:Cancel·la}}.

Suprimir una funció no suprimeix el seu croquis: el croquis torna a aparèixer a la vista com a croquis sense usar, a punt per a una altra funció. Suprimiu el croquis per separat si no el necessiteu.

## Reanomena

Seleccioneu la funció i escriviu un **Nom** nou a la part inferior del panell de la dreta (fins a 60 caràcters). El nom de la peça és al panell de la dreta quan no hi ha res seleccionat.

## Peces amb centenars de funcions

Una peça amb centenars de funcions es prova amb 750. PartCraft conserva el sòlid que tenia a mig historial, de manera que un canvi al final de l'historial només reconstrueix les funcions posteriors; un canvi a prop de dalt reconstrueix tot el que s'hi ha construït a sobre, cosa que triga més. Desfer i refer només reconstrueixen des del punt on els dos estats són diferents. Per treballar més de pressa amb una peça gran, retrocediu fins al punt on treballeu (vegeu Retrocedeix més amunt) o desactiveu el que no necessiteu de moment. Diverses retallades i protuberàncies que no es toquen s'apliquen juntes, de manera que una peça formada per molts forats i protuberàncies separats es construeix més de pressa del que suggereix el nombre de funcions.

Una peça gran es reconstrueix en segon pla: el distintiu de construcció de la part inferior diu **Reconstruint…** amb el progrés que du, i la vista, els panells i els menús continuen funcionant mentre s'executa. La peça que es veu a la pantalla és l'última que es va construir fins que la nova és a punt. Si torneu a canviar alguna cosa mentre es reconstrueix, PartCraft construeix la versió més recent i descarta la que estava en curs. Una peça petita es reconstrueix de seguida.

## Desfer i refer

- {{key:Mod+Z}} o {{ui:Desfés}} desfà l'últim canvi: una funció, una configuració, una edició de croquis, un arrossegament. La barra d'estat diu què, per exemple "S'ha desfet el canvi de cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} o {{ui:Refés}} el refan.
- PartCraft conserva els últims 200 passos (una peça tan gran que 200 còpies ocuparien molta memòria en conserva menys, però mai menys dels 20 més recents). Els canvis al full de dibuix (una secció, un símbol GD&T mogut) són a la mateixa llista. Obrir un fitxer o començar una peça nova la buiden.

:::mac
En un Mac, useu ⇧⌘Z per refer. A Safari, ⌘Y pot obrir l'historial del navegador en lloc d'això.
:::
