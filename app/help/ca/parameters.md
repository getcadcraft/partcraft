---
title: Controla una peça amb paràmetres
summary: Donar nom a les mides que importen (amplada, gruix, mida del cargol), enllaçar qualsevol número d'operació o de croquis amb = i canviar tota la peça des d'una sola taula.
keywords: paràmetres, on s'usa, usat per, variables globals, variables, equacions, intenció de disseny, cotes que controlen, enllaç, expressió, fórmula, posar nom a una cota, valors enllaçats
from: 58c646ea
---

Un paràmetre és un número amb nom, com ara `width = 120` o `margin = bolt * 1.5`. Enllaceu una profunditat, un diàmetre de forat, el nombre d'una matriu o una cota de croquis a ell, i canviar el paràmetre canvia tots de cop en un sol pas. Així la intenció de disseny queda a la peça i no només al vostre cap.

## Afegeix paràmetres

1. Al tauler de la dreta, feu clic a la pestanya {{ui:Paràmetres}}.
2. Sota **Variables**, escriviu un nom a la caixa "nom", per exemple `width`.
3. Escriviu-ne el valor a la caixa següent, per exemple `120`, i premeu {{key:Enter}} (o feu clic a {{ui:Afegeix}}).

Un valor pot ser un número o una expressió d'altres paràmetres: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. La columna **Valor** mostra el resultat del càlcul. Un nom comença per una lletra o `_` i només té lletres, xifres i `_`; els noms de funcions i unitats (`sin`, `mm`, `pi`) es rebutgen, i també un bucle com `a = b` amb `b = a`.

## Enllaça un número a un paràmetre

1. Feu clic a una operació de l'historial, per exemple "Extrude1". La seva configuració es mostra a la pestanya {{ui:Propietats}}.
2. A una caixa de número, com **Profunditat (mm)**, escriviu `=` i una expressió: `=thick` o `=width / 4`.
3. Premeu {{key:Enter}}.

La caixa ara mostra el resultat, i apareix un botó **ƒ** al costat de l'etiqueta. Passeu-hi el punter per veure l'equació. Les cotes de croquis funcionen de la mateixa manera, tant a la llista **Cotes del croquis** d'una operació com a la caixa de cota d'un croquis obert (feu doble clic a una cota, escriviu `=width`, i premeu {{key:Enter}}).

Números que podeu enllaçar: profunditat d'extrusió, angle de revolució, diàmetre de forat, profunditat i mides d'escairat, nombre de la matriu, espaiat i angle, radi d'arrodoniment, distància de xamfrà, gruix de paret del buidat, cada cota de croquis, i les mides de les operacions més noves (segona profunditat, conicitat, avellanat, distància del pla de referència, angle de desmotllament i altres).

## Canvia un paràmetre

A la pestanya {{ui:Paràmetres}}, escriviu un valor nou o una expressió a la columna **Expressió** i premeu {{key:Enter}}. Tot el que hi és enllaçat canvia i la peça es reconstrueix, en un sol pas: {{key:Mod+Z}} ho desfà.

Per canviar un número des de l'altre extrem, vegeu [Equacions en els dos sentits](topic:equations-two-way).

## Veure on s'usa un paràmetre

Sota cada paràmetre de la pestanya {{ui:Paràmetres}}, una línia indica què l'usa:

- els números que controla, com ara **Extrude1 depth** o **Sketch1 D2 (distance)**. Feu clic a un per seleccionar-ne l'operació i mostrar-ne les propietats;
- els números que controla **a través** d'altres paràmetres, com ara **Hole1 diameter (through h, d)** quan `d = h + 2` i `h = w / 2`;
- els **paràmetres** les expressions dels quals l'usen, les **configuracions** que l'estableixen, i els **scripts** que el llegeixen (vegeu [Escriviu i executeu scripts](topic:craftscript)).

"Encara no s'usa." vol dir que res no l'usa: el podeu suprimir sense confirmació.

## Desenllaça, reanomena, suprimeix

- **Desenllaça un número:** feu clic al seu botó **ƒ**, o a {{ui:Desenllaça}} a la llista **Equacions**. Conserva el valor actual i cap paràmetre ja no el canvia.
- **Reanomena un paràmetre:** escriviu un nom nou a la seva caixa **Nom**. Cada expressió que l'usa es reescriu.
- **Suprimeix un paràmetre:** feu clic a × a la seva fila. Si alguna cosa l'usa, PartCraft pregunta si abans cal escriure'n el valor actual a aquelles expressions.
- **Suprimir una operació** elimina les equacions dels seus números; la barra d'estat indica quines.

:::note
Els paràmetres es desen al fitxer `.partcraft.json` (com a versió 3 del fitxer). Una peça sense paràmetres es desa exactament com abans.
:::

## Expressions

| Escriviu | Significa |
|---|---|
| `120`, `12.5`, `1e3` | un número (mil·límetres, o graus per a un angle) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | una longitud en altres unitats, convertida en mil·límetres |
| `30deg`, `0.5rad` | un angle, convertit en graus |
| `+ - * / %` i `^` | aritmètica; `^` és una potència, `-2^2` és −4 |
| `sin cos tan asin acos atan atan2` | trigonometria en graus |
| `sqrt pow exp ln log abs sign` | altres funcions |
| `ceil floor int round(x, digits) min max` | arrodoniment i límits |
| `if(test, a, b)` amb `< <= > >= == !=` | una elecció: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Els noms distingeixen entre majúscules i minúscules: `Width` i `width` són dos paràmetres.

Vegeu també [Configuracions i taules de disseny](topic:design-tables) i [Scripts i línia d'ordres](topic:scripts-and-cli).
