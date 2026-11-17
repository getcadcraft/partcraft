---
title: Tecles i ratolí
summary: Cada drecera de teclat i cada acció del ratolí a PartCraft, agrupades segons on funcionen: a tot arreu, copiar i enganxar, a la peça, a la vista 3D, en un croquis, a l'historial i en un conjunt.
keywords: teclat, dreceres, tecles de drecera, tecles, ratolí, òrbita, girar, desplaça, zoom, roda, clic dret, desfés, refés, desa, obre, Esc, suprimeix, Alt fletxa, copia, enganxa, retalla, duplica, selecciona-ho tot, botó central
from: 3a59c3a3
---

Les tecles no fan res mentre escriviu en un quadre d'un tauler, excepte {{key:Mod+S}} i {{key:Mod+O}}, que sempre funcionen. Les tecles de lletra funcionen sense modificador.

Notes generals sobre les tecles al navegador, i en teclats sense tecles de funció: [Tecles, ratolins i panells tàctils](common:keys).

## A tot arreu

| Tecla | Acció |
|---|---|
| {{key:Mod+S}} | Desa la peça (en un conjunt: el conjunt). Abans tanca el croquis obert |
| {{key:Mod+O}} | Obre un fitxer de peça o de conjunt (demana abans si hi ha canvis sense desar) |
| {{key:Mod+Z}} | Desfés |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refés |
| {{key:F1}} | Obre o tanca aquesta ajuda (també {{ui:Ajuda}} a la barra de l'aplicació). {{key:Esc}} també la tanca. En molts portàtils i teclats de Mac, manteniu premuda la tecla Fn |
| {{key:Ctrl+Shift+F}} | Mode de pantalla: normal, pantalla completa, pantalla completa amb les barres amagades. També Control en un Mac, no ⌘ |
| {{key:Esc}} | Surt de la pantalla completa (quan hi sou) |
| {{key:Mod+,}} | {{ui:Configuració}}, inclosa la pestanya PartCraft (vegeu [Configuració de PartCraft](topic:settings)) |

Al quadre numèric d'un tauler, {{key:Mod+Z}} és el desfer de text propi del navegador. Al quadre numèric sobre una cota d'un croquis, desfà a PartCraft.

## Copia, enganxa i duplica

Actuen sobre el que esteu treballant: la geometria seleccionada en un croquis obert, l'operació seleccionada a l'historial o la peça seleccionada en un conjunt. Detalls a [Copia, enganxa i duplica](topic:copy-paste).

| Tecla | Acció |
|---|---|
| {{key:Mod+C}} | Copia la selecció |
| {{key:Mod+X}} | Retalla: copia i després suprimeix |
| {{key:Mod+V}} | Enganxa. En un croquis, la còpia segueix el punter: feu clic on ha d'anar |
| {{key:Mod+Shift+V}} | Enganxa al mateix lloc: mateixes coordenades (en un conjunt, el mateix lloc) |
| {{key:Mod+D}} | Duplica: copia i enganxa en un sol pas, sense tocar el porta-retalls |
| {{key:Mod+A}} | Selecciona-ho tot (en un croquis) |
| {{key:Esc}} | Neteja la selecció (i cancel·la una enganxada que segueix el punter) |

En un quadre numèric, aquestes tecles copien i enganxen text com de costum. El text seleccionat en un tauler el copia el navegador.

## A la peça (sense croquis obert)

| Tecla | Acció |
|---|---|
| {{key:S}} | Croquis sobre el pla o la cara plana seleccionats; sense res triat, trieu on fer-lo amb un clic |
| {{key:F}} | Ajusta la peça a la vista |
| {{key:M}} | Mesura, en tots els espais de treball i en un conjunt; {{key:Esc}} neteja les tries, i {{key:Esc}} de nou la tanca (vegeu [Mesura distàncies, angles i massa](topic:measure)) |
| {{key:X}} | Vista de secció activada o desactivada, en tots els espais de treball i en un conjunt; {{key:Esc}} la tanca (vegeu [Mira a l'interior amb una vista de secció](topic:section-view)) |
| {{key:Delete}} | Suprimeix l'operació seleccionada (pregunta si n'hi ha d'altres que la fan servir) |
| {{key:0}} … {{key:9}}, {{key:.}} | Amb una operació seleccionada: escriviu-ne el número principal (la profunditat d'una Extrusió, el diàmetre d'un Forat, el nombre d'una matriu, el radi d'un arrodoniment …) i després {{key:Enter}}. {{key:Esc}} manté el valor anterior |
| {{key:Backspace}} | Suprimeix l'operació seleccionada, quan n'hi ha cap de seleccionada |
| {{key:Esc}} | Atura la tria d'un pla de croquis, o neteja la selecció (inclosos les arestes o les cares triades amb {{key:Shift}}) |

## A la vista 3D

Feu primer clic a la vista perquè tingui el focus del teclat.

| Tecla | Acció |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Gira la vista 15 graus |
| {{key:Shift+Left}} i les altres fletxes | Desplaça |
| {{key:Plus}} o {{key:=}} | Zoom: amplia |
| {{key:Minus}} | Zoom: redueix |

| Ratolí | Acció |
|---|---|
| Arrossega amb el botó esquerre | Gira (orbita) la vista |
| Arrossega amb el botó dret o central | Desplaça |
| {{key:Shift}}, {{key:Ctrl}} o ⌘ premuts mentre arrossegueu amb el botó esquerre | Desplaça |
| Gireu la roda | Zoom al punter (allunyar-ho de vosaltres amplia) |
| Lliscament amb dos dits al panell tàctil | Gira la vista; amb {{key:Shift}}, desplaça. Pinça: zoom. Es defineix amb **Desplaçament** a [Configuració de PartCraft](topic:settings) |

Amb **Gira la vista: botó central** a [Configuració de PartCraft](topic:settings), el botó central gira la vista, {{key:Shift}} amb el botó central o el botó dret desplaça, i el botó esquerre només tria.
| Clic | Tria una cara (es ressalta sencera), una aresta o un pla |
| {{key:Shift}}+clic en una aresta o cara | Recull diverses arestes o cares |
| Clic en un espai buit | Neteja la tria |

## Mentre tries arestes o cares per a un arrodoniment, un xamfrà o un buidatge

| Tecla o ratolí | Acció |
|---|---|
| Clic en una aresta o cara | L'afegeix, o la lleva si ja hi és |
| {{key:Esc}} o {{key:Enter}} | Acaba la tria (igual que {{ui:Fet}}) |
| {{key:F}} | Ajusta |
| Fletxes, amb la vista amb focus | Gira; amb {{key:Shift}}, desplaça |

## Sobre el full de dibuix

| Tecla | Acció |
|---|---|
| {{key:F}} | Ajusta el full |
| {{key:Plus}} / {{key:Minus}} | Zoom (amb el full amb focus) |
| {{key:Shift+Left}} i les altres fletxes | Desplaça (amb el full amb focus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Mou 1 mm el símbol GD&T seleccionat |
| {{key:Delete}} o {{key:Backspace}} | Suprimeix el símbol seleccionat |
| {{key:Esc}} | Atura la col·locació d'un símbol; si no, deselecciona; si no, torna al model |

| Ratolí | Acció |
|---|---|
| Clic en una vista, amb Referència, Marc, Acabat o Detall triat | Hi col·loca (s'ajusta a la línia més propera) |
| Clic en un símbol | El selecciona |
| Arrossega un símbol | El mou (la línia de crida es manté al seu punt) |
| Gireu la roda | Zoom al punter |
| Arrossega amb el botó dret o central | Desplaça |

## En un croquis

| Tecla | Acció |
|---|---|
| {{key:L}} | Línia |
| {{key:R}} | Rectangle |
| {{key:C}} | Cercle |
| {{key:A}} | Arc (centre, inici, final) |
| {{key:P}} | Punt |
| {{key:N}} | Línia de centres |
| {{key:F}} | Empalma un cantó |
| {{key:D}} | Cota |
| {{key:B}} | Spline (punts d'ajust) |
| {{key:T}} | Retalla |
| {{key:E}} | Allarga |
| {{key:O}} | Desfasament ({{key:B}} mentre desfasa: els dos costats) |
| {{key:M}} | Simetria |
| {{key:S}} | Selecciona |
| {{key:Q}} | Canvia les corbes seleccionades a construcció, i a l'inrevés |
| {{key:Enter}} | Acaba una cadena de línies o un spline |
| {{key:Delete}} o {{key:Backspace}} | Suprimeix la selecció |
| {{key:Mod+A}} | Selecciona-ho tot al croquis |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copia, retalla, enganxa la geometria (l'enganxada segueix el punter) |
| {{key:Mod+Shift+V}} | Enganxa a les mateixes coordenades |
| {{key:Mod+D}} | Duplica la selecció i col·loca-la amb un clic |
| {{key:Esc}} | Pas enrere: cancel·la el quadre numèric o una enganxada, acaba la cadena de línies, torna a Selecciona, neteja la selecció i després tanca el croquis |

| Ratolí | Acció |
|---|---|
| Clic | Col·loca punts amb una eina de dibuix; selecciona amb Selecciona |
| {{key:Shift}}+clic | Afegeix a la selecció o en lleva ({{key:Ctrl}}+clic a Windows i Linux, i ⌘+clic en un Mac, fan el mateix) |
| Arrossega en un espai buit (Selecciona) | Finestra: selecciona tot el que queda totalment dins |
| Arrossega un punt, una línia o la vora d'un cercle (Selecciona) | El mou; les relacions es mantenen |
| Arrossega el número d'una cota (Selecciona) | Mou l'etiqueta |
| Doble clic en una cota | Canvia'n el valor |
| Doble clic o clic dret mentre dibuixeu línies | Acaba la cadena |
| Arrossega amb el botó dret o central | Desplaça |
| Gireu la roda | Zoom al punter |

### Al quadre numèric

| Tecla | Acció |
|---|---|
| {{key:Enter}} | Aplica el valor |
| {{key:Esc}} | Tanca sense canviar res |

Fer clic fora també aplica el valor.

## A la llista d'historial

| Tecla | Acció |
|---|---|
| {{key:Tab}} | Arriba a la llista |
| {{key:Up}} / {{key:Down}} | Mou entre files |
| {{key:Enter}} o {{key:Space}} | Selecciona la fila |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Mou l'operació seleccionada amunt o avall, quan l'historial ho permet |
| {{key:F2}} | Canvia el número principal de l'operació a la seva fila; {{key:Enter}} l'estableix, {{key:Esc}} manté l'anterior |

| Ratolí | Acció |
|---|---|
| Clic | Selecciona un pla o una operació |
| Doble clic en un croquis | L'obre |
| Doble clic en el número d'una operació | Canvia'l a la fila |

## En un conjunt

| Tecla | Acció |
|---|---|
| {{key:J}} | Comença una unió: després feu clic en una cara plana de cadascuna de dues peces |
| {{key:F}} | Ajusta |
| {{key:Esc}} | Cancel·la la unió que heu començat, o neteja la selecció |
| {{key:Delete}} | Elimina la peça o la unió seleccionada |
| {{key:Backspace}} | Elimina la peça o la unió seleccionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Desfés i refés a la llista pròpia del conjunt |
| {{key:Mod+D}} | Duplica la peça seleccionada (la mateixa peça, al costat de les altres) |
| {{key:Mod+C}}, i després {{key:Mod+V}} o {{key:Mod+Shift+V}} | Copia una peça i enganxa-la al costat de les altres o al mateix lloc |

Ratolí a la vista: com a la vista 3D de més amunt. Feu clic en una peça per seleccionar-la. Feu doble clic en una peça de la llista per editar-la.

## A l'espai de treball Script

| Tecla | Acció |
|---|---|
| {{key:F5}} | Executa el script (a l'editor, al tauler o a la vista) |
| {{key:Mod+Enter}} | Executa les línies seleccionades, o la línia on és el cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Sagna / lleva sagnat a les línies seleccionades. Per sortir de l'editor amb el teclat, premeu {{key:Esc}} i després {{key:Tab}} |
| {{key:Mod+/}} | Comenta o descomenta les línies seleccionades |
| {{key:Mod+F}} / {{key:Mod+H}} | Cerca / cerca i substitueix al script; {{key:Enter}} o {{key:F3}} per a la següent coincidència, {{key:Shift+Enter}} o {{key:Shift+F3}} per a l'anterior, {{key:Esc}} tanca |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Plega / desplega el bloc on és el cursor (una funció, if, for, while … end) |
| {{key:Mod+Space}} | Mostra els suggeriments del nom que escriviu (també s'obre després de dues lletres); {{key:Up}} / {{key:Down}} trien, {{key:Enter}} o {{key:Tab}} n'agafa un, {{key:Esc}} tanca |
| {{key:Enter}} a la línia sota la consola | Executa aquesta instrucció; {{key:Up}} i {{key:Down}} recuperen les anteriors |
| {{key:F}} | Ajusta la vista a allò que mostren els scripts |

Vegeu [Escriu i executa scripts](topic:craftscript).

## Dreceres que el navegador pot prendre

- {{key:Mod+Y}} a Safari pot obrir l'historial: useu {{key:Mod+Shift+Z}} per refer.
- {{key:Mod+D}} és la tecla de marcadors del navegador: PartCraft la pren mentre l'aplicació té el focus, i la deixa en pau mentre escriviu en un quadre.
- {{key:F11}} i {{key:Mod+Plus}} / {{key:Mod+Minus}} són la pantalla completa i el zoom de pàgina del navegador, no els de PartCraft. Useu {{key:Ctrl+Shift+F}} per a la pantalla completa i la roda per al model.
- Les tecles de funció en molts portàtils i Macs necessiten la tecla Fn: premeu Fn+{{key:F1}} per a l'ajuda, o useu el botó Ajuda.

Gestos tàctils i de panell tàctil: [Panell tàctil, pantalla tàctil i pantalles petites](topic:trackpad-and-touch).

## On és Mou

Mou es troba al menú {{ui:Més}} del grup Operacions com a {{ui:Mou el cos}}, al quadre {{ui:Mou}} on escriviu ΔX, ΔY i ΔZ, i com a fletxes {{ui:Arrossega per moure}} a la peça.
