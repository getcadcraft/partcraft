---
title: Scripts i línia d'ordres
summary: El format de script de PartCraft (.pcscript) que escriu una peça sencera com a text llegible, i l'eina de línia d'ordres partcraft que construeix, canvia, retrocedeix i comprova peces sense la pantalla.
keywords: script, pcscript, text, línia d'ordres, cli, terminal, lots, automatitza, comprova, lint, construeix, exporta, control de versions, diff, script paramètric
from: c56df222
---

Modelar amb cura és més qüestió de disciplina que de botons. Una peça escrita com a text es pot llegir, revisar, comparar línia per línia i reconstruir amb un script. PartCraft funciona en tots dos sentits: qualsevol peça es pot escriure com a script, i un script construeix la peça.

## A l'aplicació

A la pestanya {{ui:Paràmetres}}, sota **Script**:

- {{ui:Desa com a script}} baixa la peça oberta com a `<nom>.pcscript`.
- {{ui:Obre un script}} construeix una peça des d'un fitxer `.pcscript`. Un error s'informa amb el seu número de línia i no es reemplaça res.

## El format del script

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Les regles:

- Una línia a la vora esquerra comença una instrucció: `pcscript`, `part`, `param`, un tipus d'operació (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` i els tipus més nous) seguit del seu nom, o `rollback <feature>`.
- Les línies indentades són la configuració de la instrucció de sobre. Una configuració sola (`through`, `reverse`, `suppressed`) vol dir que sí.
- Una configuració numèrica és un nombre, o `=` i una expressió, que fa una equació: `depth = thick`.
- En un croquis: `on` indica el pla (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); la geometria és `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (en sentit antihorari) o `spline <name> fit|control <points>`; les relacions són el seu tipus i els noms que uneixen (`O` és l'origen); una cota acaba amb el seu valor o amb `= expressió`.
- Les opcions opcionals d'una línia de geometria o de relació van entre claudàtors al final, separades per `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` comença un comentari (a l'inici d'una línia o després d'un espai). Els noms amb espais van entre "cometes dobles".
- Els identificadors d'operació compten des de f1 en l'ordre en què s'escriuen. Les referències d'aresta i de cara els fan servir, per exemple `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Les opcions per a les quals el format no té paraules s'escriuen `json` i un valor; es tornen a llegir tal com són.

Desat des de l'aplicació, el script inclou totes les opcions, així que s'obre com la mateixa peça. Un sòlid STEP importat s'escriu dins del script des de l'aplicació, i com a fitxer `.step` separat amb el nom indicat per `step-file` des de la línia d'ordres.

## L'eina de línia d'ordres

L'eina s'executa en un ordinador amb Node.js 24, des d'una còpia del codi font de CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. És una eina per a desenvolupadors i fa servir els mateixos mòduls que l'aplicació. Les peces són fitxers `.partcraft.json` o scripts `.pcscript`.

| Ordre | Què fa |
|---|---|
| `info <part>` | Operacions, paràmetres, barra de retrocés, el volum i la mida del sòlid construït |
| `params <part>` | Cada paràmetre i equació amb el seu valor |
| `set <part> width=150 Base.depth==thick` | Endavant: canvia paràmetres, enllaça números (`==` o una expressió), defineix números simples |
| `drive <part> Base.depth=12` | Enrere: resol el paràmetre darrere d'un número controlat (`--prefer width` en tria un) |
| `build <part> --out x.step` | Escriu `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` o una macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Un fitxer per cada fila de la taula de disseny |
| `variants <part> --out-dir d` o `--zip f.zip` | Cada configuració com a STEP, IFC, DWG i una vista prèvia, una taula de variants i un element de biblioteca (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vegeu [Crea un paquet de variants](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script a peça |
| `to-script <part> -o part.pcscript` | Peça a script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Mou la barra de retrocés del fitxer |
| `check <part> [--strict]` | La comprovació de disciplina (a continuació) |

`build` també accepta `--set name=value` (només per a aquesta construcció) i `--upto <feature>`. Totes les ordres accepten `--json`. Codis de sortida: 0 correcte, 1 s'ha trobat un problema, 2 l'ordre s'ha escrit malament. Mai no es reescriu un script al mateix lloc: useu `-o` per desar una còpia canviada.

## La comprovació

`check` informa del que fa que una peça sigui difícil de canviar després:

| Resultat | Compta com a |
|---|---|
| Un croquis sobredefinit (relacions en conflicte o repetides) | error |
| Una operació que no es construeix | error |
| Un paràmetre o una equació amb error, o paràmetres que es fan servir mutuament | error |
| Un croquis infradefinit, amb els seus graus de llibertat | avís |
| Números escrits directament a operacions i cotes que cap paràmetre controla | avís |
| Un paràmetre que no fa servir ningú | avís |
| Una operació suprimida; la barra de retrocés no és al final | avís |

`--strict` converteix cada avís en error, així que un script de construcció pot rebutjar una peça que no està completament controlada.

:::note
La sortida de macro `.swb` és per al modelador de peces que fa servir la majoria de tallers: executada dins d'aquest programa, construeix la peça allà. No s'ha executat en aquest programa aquí (no està disponible als nostres servidors), així que tracteu-la com a no provada.
:::
