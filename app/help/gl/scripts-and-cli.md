---
title: Scripts e liña de comandos
summary: O formato de script de PartCraft (.pcscript), que escribe unha peza completa como texto lexible, e a ferramenta de liña de comandos partcraft, que constrúe, cambia, retrocede e comproba pezas sen a pantalla.
keywords: script, pcscript, texto, liña de comandos, cli, terminal, lote, automatizar, comprobar, lint, construír, exportar, control de versións, diff, script paramétrico
from: c56df222
---

Modelar con coidado depende máis da disciplina que dos botóns. Unha peza escrita como texto pode lerse, revisarse, compararse liña a liña e reconstruírse cun script. PartCraft funciona nos dous sentidos: calquera peza pode escribirse como script, e un script constrúe a peza.

## Na aplicación

Na lapela {{ui:Parámetros}}, baixo **Script**:

- {{ui:Gardar como script}} descarga a peza aberta como `<nome>.pcscript`.
- {{ui:Abrir script}} constrúe unha peza desde un ficheiro `.pcscript`. Un erro infórmase co número de liña e non se substitúe nada.

## O formato do script

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Largura da placa
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

As regras:

- Unha liña no bordo esquerdo inicia unha instrución: `pcscript`, `part`, `param`, un tipo de elemento (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` e os tipos máis novos) seguido do seu nome, ou `rollback <elemento>`.
- As liñas con sangría son os axustes da instrución de enriba. Un axuste sen valor (`through`, `reverse`, `suppressed`) significa sí.
- Un axuste numérico é un número, ou `=` e unha expresión, que fai unha ecuación: `depth = thick`.
- Nun esbozo: `on` indica o plano (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); a xeometría é `point <nome> x, y`, `line <nome> <punto> <punto>`, `circle <nome> <centro> <radio>`, `arc <nome> <centro> <inicio> <fin>` (en sentido antihorario) ou `spline <nome> fit|control <puntos>`; as relacións son o seu tipo e os nomes que unen (`O` é a orixe); unha cota remata co seu valor ou con `= expresión`.
- Os axustes opcionais dunha liña de xeometría ou relación van entre corchetes ao final, separados por `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` inicia un comentario (ao principio dunha liña ou despois dun espazo). Os nomes con espazos van entre "dobres comiñas".
- Os identificadores dos elementos contan desde f1 na orde en que se escriben. As referencias a arestas e caras usan eles, por exemplo `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Os axustes que o formato non ten palabras para escribir escríbense `json` seguido dun valor; léense tal cal.

Gardado desde a aplicación, o script inclúe todos os axustes, así que se abre como a mesma peza. Un sólido STEP importado escríbese dentro do script desde a aplicación, e como un ficheiro `.step` separado co nome indicado por `step-file` desde a liña de comandos.

## A ferramenta de liña de comandos

A ferramenta funciona nun ordenador con Node.js 24, desde unha copia do código fonte de CadCraft: `node tools/partcraft-cli/partcraft.mjs <comando>`. É unha ferramenta para desenvolvedores e usa os mesmos módulos que a aplicación. As pezas son ficheiros `.partcraft.json` ou scripts `.pcscript`.

| Comando | Que fai |
|---|---|
| `info <part>` | Elementos, parámetros, barra de retroceso, volume e tamaño do sólido construído |
| `params <part>` | Cada parámetro e ecuación co seu valor |
| `set <part> width=150 Base.depth==thick` | Cara adiante: cambia parámetros, enlaza números (`==` ou unha expresión), fixa números sinxelos |
| `drive <part> Base.depth=12` | Cara atrás: resolve o parámetro que move un número dirixido (`--prefer width` escolle un) |
| `build <part> --out x.step` | Escribe `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ou unha macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Un ficheiro por cada fila da táboa de deseño |
| `variants <part> --out-dir d` ou `--zip f.zip` | Cada configuración como STEP, IFC, DWG e unha vista previa, unha táboa de variantes e un elemento de biblioteca (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); ver [Crear un paquete de variantes](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script a peza |
| `to-script <part> -o part.pcscript` | Peza a script |
| `rollback <part> [<elemento>]`, `forward <part> [--end]` | Move a barra de retroceso no ficheiro |
| `check <part> [--strict]` | A comprobación de disciplina (abaixo) |

`build` tamén acepta `--set name=value` (só para esta construción) e `--upto <elemento>`. Todos os comandos admiten `--json`. Códigos de saída: 0 correcto, 1 atopouse un problema, 2 o comando escribiuse mal. Un script nunca se reescribe no seu lugar: usa `-o` para gardar unha copia cambiada.

## A comprobación

`check` informa do que dificulta cambiar unha peza máis tarde:

| Achado | Conta como |
|---|---|
| Un esbozo sobredefinido (relacións contraditorias ou repetidas) | erro |
| Un elemento que non se constrúe | erro |
| Un parámetro ou ecuación con erro, ou parámetros que se usan entre si | erro |
| Un esbozo infradefinido, cos seus graos de liberdade | aviso |
| Números escritos directamente en elementos e cotas que nengún parámetro controla | aviso |
| Un parámetro que non usa nada | aviso |
| Un elemento suprimido; a barra de retroceso non está ao final | aviso |

`--strict` converte cada aviso en erro, para que un script de construción poida rexeitar unha peza que non está totalmente controlada.

:::note
A saída macro `.swb` é para o modelador de pezas que usa a maioría dos talleres: executada dentro dese programa, constrúe a peza alí. Non se executou nese programa aquí (non está dispoñible nos nosos servidores), así que trátaa como sen probar.
:::
