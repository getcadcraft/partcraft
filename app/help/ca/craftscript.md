---
title: Escriure i executar scripts (espai de treball Script)
summary: L'espai de treball Script pas a pas: escriure un script de CraftScript o Lua, executar-lo amb F5, llegir la consola, guardar resultats a les variables per al següent script, mostrar malles, camps i gràfics, aturar una execució i desar els scripts amb la peça.
keywords: script, scripts, escriure scripts mentre es modela, separa, segona pantalla, segon monitor, param, params, paràmetres en scripts, CraftScript, Lua, codi, programa, editor, consola, REPL, línia d'ordres, executa, F5, executa la selecció, atura, variables, espai de treball, gràfic, camp, malla, llegenda, subfinestra, anàlisi, automatització, matriu, numèric
from: d0003e89
---

**Versió preliminar.** El scripting és nou a PartCraft 0.3 i és una versió preliminar: el llenguatge, la biblioteca i la forma de desar els scripts encara poden canviar, i els scripts que escriviu ara potser necessiten petites modificacions més endavant. Expliqueu-nos què es trenca.

L'espai de treball Script executa els vostres propis càlculs al costat de la peça: sumes petites, anàlisis senceres o els scripts de la [biblioteca d'anàlisi](topic:craftscript-library). Els scripts s'escriuen en **CraftScript** (un llenguatge de matrius molt semblant a MATLAB, vegeu [El llenguatge CraftScript](topic:craftscript-language)), en **Lua** (vegeu [Scripts en Lua](topic:craftscript-lua)) o en **Python** (vegeu [Scripts en Python](topic:craftscript-python)).

Trieu **Script** a la caixa **Espai de treball**, a l'esquerra de la barra d'eines. La peça no es modifica. El panell de la dreta es converteix en el panell de scripts (més ampli del normal; arrossegueu-ne la vora per canviar-ne la mida, o mogueu-lo a una segona pantalla amb el seu menú {{ui:⋯}}, vegeu [Disposició dels panells](common:arrange-panels)).

## Escriure scripts mentre modeleu

No cal sortir de l'espai de treball Disseny per escriure un script. A Disseny, la pestanya {{ui:Script}} del panell de la dreta conté el mateix editor, la consola, les variables i la biblioteca, amb els mateixos scripts. L'arbre d'operacions i la vista continuen funcionant: feu clic en una operació per seleccionar-la, feu doble clic en un croquis per editar-lo, gireu la vista, i després torneu a la pestanya {{ui:Script}} i premeu {{key:F5}}.

Allò que un script **mostra** (malles, camps, gràfics, taules) no es dibuixa sobre el vostre model a Disseny: la consola ho indica, i l'espai de treball Script ho té tot quan hi canvieu.

{{ui:Separa}}, al costat de {{ui:Executa}}, mou tot el panell a una finestra pròpia, per exemple en una segona pantalla, de manera que l'editor i la vista completa quedin un al costat de l'altre. {{ui:Torna-ho al lloc}} el torna a acoblar. Vegeu [Disposició dels panells](common:arrange-panels).

## Executeu el vostre primer script

1. Escriviu a l'editor, per exemple:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Premeu {{key:F5}} (o {{ui:Executa}}). La consola sota l'editor mostra el que ha escrit el script i "Fet en … s". El gràfic apareix a les **subfinestres** al llarg de la part inferior de la vista 3D.
3. Una línia sense punt i coma mostra el seu valor, com a MATLAB: `a = 3` mostra `a = 3`; `a = 3;` no mostra res.
4. Per executar només una part d'un script, seleccioneu les línies i premeu {{key:Mod+Enter}} ({{ui:Selecció}}). Sense res seleccionat, executa la línia on és el cursor.
5. La línia de sota de la consola (després de `>>`) executa una sentència en prémer {{key:Enter}}. {{key:Up}} i {{key:Down}} recuperen línies anteriors.

## Cerca, plegat i completat

- **Cerca i substitució.** Premeu {{key:Mod+F}} (o {{key:Mod+H}} per substituir també). S'obre una barra sobre el codi: escriviu el que cal cercar; les coincidències s'il·luminen i el recompte indica on sou. Els botons al costat de la caixa coincideixen amb majúscules i minúscules (**Aa**), cerquen només paraules senceres (**W**) i usen una expressió regular (**.\***; en la substitució, `$1` torna el que va capturar el primer grup). {{ui:Substitueix}} substitueix la coincidència actual, i {{ui:Totes}} substitueix totes les coincidències com a un sol pas de {{key:Mod+Z}}.
- **Plegat.** Feu clic al ▾ al costat d'un número de línia, o premeu {{key:Mod+Shift+[}} amb el cursor en una línia `function`, `if`, `for`, `while`, `switch` o `try` (Lua: `function`, `do`, `if`, `repeat`), per amagar-ne les línies interiors; la línia indica quantes n'hi ha. ▸ o {{key:Mod+Shift+]}} la torna a obrir. El plegat només amaga línies: Executa, Desa, copiar i els números de línia encara ho compten tot, i escriure en una línia plegada l'obre primer.
- **Completat.** Escriviu dues lletres d'un nom, o premeu {{key:Mod+Space}}: una llista mostra les variables que teniu, les funcions del llenguatge (amb els seus arguments), les paraules clau i els noms ja usats al script. Trieu amb les fletxes i premeu {{key:Enter}} o {{key:Tab}}.

## Quan alguna cosa falla

- Un error indica el problema i la seva línia: la línia es marca en vermell a l'editor, i **Línia n** a la consola us hi porta.
- Un bucle que no acaba mai: premeu {{ui:Atura}} (barra d'eines o panell). El script s'atura de seguida; les variables conserven els valors que tenien abans d'aquella execució.
- Cada execució també té un pressupost de passos (2 mil milions de passos per defecte; canvieu-lo a **Opcions d'execució** del panell). Una execució que el superi s'atura amb un missatge.

## Les variables passen d'un script a un altre

Cada variable de nivell superior que fa un script arriba a la pestanya **Variables** (nom, tipus, mida, valor més petit i més gran) i s'hi queda per al següent script, en qualsevol dels llenguatges. Així, un script fa la malla, el següent la resol i un tercer la dibuixa.

- Feu clic en una variable per mostrar-la: malles, camps i models a la vista 3D, matrius en forma de taula (més un gràfic de línia per a un vector o un mapa de colors per a una matriu) a les subfinestres.
- {{ui:Desa com a JSON}}, {{ui:Desa com a CSV}} (una taula de nombres) i {{ui:Desa com a HDF5}} les baixen; {{ui:Suprimeix}} n'elimina una; {{ui:Neteja-ho tot}} buida l'espai de treball.
- Marqueu **Desa les variables amb la peça** per conservar-les al fitxer de la peça (fins a 32 MB; les més grans es queden només per a aquesta visita). Quan obriu una peça així, el panell ofereix carregar-les.

## Malles, camps i gràfics

- `show(m)` dibuixa una malla; `show(f)` acoloreix un camp sobre la seva malla amb una llegenda. La llista **Mostrats** a la part superior esquerra de la vista amaga ({{ui:ull}}) o treu cada element, i amaga o mostra la peça mateixa. Sota la llegenda, escriviu un rang (**Des de**, **fins a**) o premeu {{ui:Auto}}; un camp vectorial o de tensions també ofereix quin component mostrar.
- `show(f, 'deform', u, 'scale', 50)` dibuixa la malla desplaçada per un camp de desplaçaments `u`, ampliada 50 vegades (sense `scale`, uns 8 % de la mida del model).
- Feu clic en una malla mostrada: el node més proper, l'element i els valors del camp allà apareixen a les subfinestres (**Seleccionat**).
- `plot`, `imagesc` i `table` posen un gràfic de línia, un mapa de colors d'una matriu 2-D o una taula a les subfinestres. Un gràfic amb el mateix `'id'` (o títol) que un d'anterior el reemplaça, així que un bucle pot actualitzar un únic gràfic de convergència; `'append', true` hi afegeix una corba. {{ui:Neteja}} buida les subfinestres; la fletxa les replega.
- Amb dos o més gràfics, {{ui:Un al costat de l'altre}} els mostra tots alhora (els sis més recents); en fer clic a la pestanya d'una taula o d'una imatge, es torna a mostrar només aquella.
- Cada gràfic té sota {{ui:PNG}}, {{ui:SVG}} i {{ui:CSV}}. PNG i SVG l'imprimeixen sobre blanc amb els colors del paper, independentment del tema (PNG 1600 × 1000 píxels; SVG escala sense perdre nitidesa); CSV conté els seus nombres amb tots els dígits: una columna de x i una columna per corba quan les corbes comparteixen x, o bé una fila per punt amb el nom de la corba.
- {{key:F}} o {{ui:Ajusta}} ajusta la vista a allò que es mostra.

## Fitxers

- {{ui:Obre}} al grup Script (o deixeu fitxers sobre la vista o el panell): els fitxers `.craft`, `.lua` i `.py` s'obren com a nous scripts (no s'executen); els fitxers de dades (STL, OBJ, CSV, JSON, NPY, HDF5) es carreguen a les variables amb el nom del fitxer.
- {{ui:Desa}} al grup Script baixa el script actual com a fitxer.
- {{ui:Nou}} al grup Script (o {{ui:+}} al costat de les pestanyes) inicia un altre script. Feu doble clic en una pestanya per reanomenar-la; el seu {{ui:×}} l'elimina (podeu desfer-ho).

## Llegiu els paràmetres de la peça

Un script llegeix els paràmetres de la peça (vegeu [Controla una peça amb paràmetres](topic:parameters)) pel nom:

```
w = param('width');     % el valor d'un paràmetre, en mm (o en graus, o un nombre simple)
p = params();           % tots ells, com a estructura: p.width, p.height
```

A Lua i Python són `cs.param('width')` i `cs.params()`. Els scripts només llegeixen paràmetres: canvieu-los a la pestanya {{ui:Paràmetres}}. Sota la pestanya del script, una línia enumera els paràmetres que llegeix amb `param('…')`, i marca els que la peça no té; la pestanya {{ui:Paràmetres}} llista el script sota cadascun. Un nom que es construeix mentre s'executa el script, com `param(name)`, no apareix a la llista.

## Els scripts es desen amb la peça

Cada script de les pestanyes es guarda dins de la peça, de manera que {{ui:Desa}} al grup Fitxer els desa amb ella, i els canvis en ells es poden desfer. Obrir una peça **mai no executa els seus scripts**: la consola indica quants en porta, i només s'executen quan premeu {{ui:Executa}}. Una peça d'una altra persona pot contenir qualsevol script: llegiu-lo abans d'executar-lo. Els scripts s'executen en segon pla en aquest ordinador, sense accés a la xarxa, i no poden tocar la pàgina.

## Relacionat

- [El llenguatge CraftScript](topic:craftscript-language)
- [Scripts en Lua](topic:craftscript-lua)
- [Scripts en Python](topic:craftscript-python)
- [La biblioteca d'anàlisi](topic:craftscript-library)
- [Escriure la vostra pròpia anàlisi](topic:craftscript-own-analysis)
