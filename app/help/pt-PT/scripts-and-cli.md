---
title: Scripts e linha de comandos
summary: O formato de script do PartCraft (.pcscript), que escreve uma peça inteira como texto legível, e a ferramenta de linha de comandos partcraft, que constrói, altera, recua e verifica peças sem ecrã.
keywords: script, pcscript, texto, linha de comandos, cli, terminal, lote, automatizar, verificar, lint, construir, exportar, controlo de versões, diff, script paramétrico
from: c56df222
---

A modelação cuidada depende mais de disciplina do que de botões. Uma peça escrita como texto pode ser lida, revista, comparada linha a linha e reconstruída por um script. O PartCraft funciona nos dois sentidos: qualquer peça pode ser escrita como script, e um script constrói a peça.

## Na aplicação

No separador {{ui:Parâmetros}}, em **Script**:

- {{ui:Guardar como script}} transfere a peça aberta como `<nome>.pcscript`.
- {{ui:Abrir script}} constrói uma peça a partir de um ficheiro `.pcscript`. Um erro é indicado com o número da linha, e nada é substituído.

## O formato do script

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

As regras:

- Uma linha encostada à margem esquerda inicia uma instrução: `pcscript`, `part`, `param`, um tipo de operação (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` e os tipos mais recentes), seguido do seu nome, ou `rollback <feature>`.
- As linhas indentadas são as definições da instrução acima. Uma definição sozinha (`through`, `reverse`, `suppressed`) significa sim.
- Uma definição numérica é um número, ou `=` e uma expressão, que cria uma equação: `depth = thick`.
- Num esboço: `on` indica o plano (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); a geometria é `point <nome> x, y`, `line <nome> <ponto> <ponto>`, `circle <nome> <centro> <raio>`, `arc <nome> <centro> <início> <fim>` (no sentido anti-horário) ou `spline <nome> fit|control <pontos>`; as relações são o seu tipo e os nomes que ligam (`O` é a origem); uma cota termina com o valor ou com `= expressão`.
- As definições opcionais de uma linha de geometria ou de relação vão entre parênteses retos no fim, separadas por `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` inicia um comentário (no início de uma linha ou depois de um espaço). Os nomes com espaços vão entre aspas duplas.
- Os números das operações contam a partir de f1, pela ordem escrita. As referências a arestas e faces usam-nos, por exemplo `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- As definições que o formato não tem palavras para são escritas `json` e um valor; são lidas de volta tal como estão.

Guardado a partir da aplicação, o script inclui todas as definições, por isso abre-se como a mesma peça. Um sólido STEP importado é escrito dentro do script a partir da aplicação, e como ficheiro `.step` separado, indicado por `step-file`, a partir da linha de comandos.

## A ferramenta de linha de comandos

A ferramenta corre num computador com Node.js 24, a partir de uma cópia do código-fonte do CadCraft: `node tools/partcraft-cli/partcraft.mjs <comando>`. É uma ferramenta para programadores e usa os mesmos módulos da aplicação. As peças são ficheiros `.partcraft.json` ou scripts `.pcscript`.

| Comando | O que faz |
|---|---|
| `info <part>` | Operações, parâmetros, barra de recuo, volume e tamanho do sólido construído |
| `params <part>` | Cada parâmetro e equação, com o respetivo valor |
| `set <part> width=150 Base.depth==thick` | Para a frente: altera parâmetros, liga números (`==` ou uma expressão), define números simples |
| `drive <part> Base.depth=12` | Para trás: resolve o parâmetro por trás de um número conduzido (`--prefer width` escolhe um) |
| `build <part> --out x.step` | Escreve `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ou uma macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Um ficheiro por linha da tabela de desenho |
| `variants <part> --out-dir d` ou `--zip f.zip` | Cada configuração como STEP, IFC, DWG e uma pré-visualização, uma tabela de variantes e um item da biblioteca (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); veja [Criar um pacote de variantes](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script para peça |
| `to-script <part> -o part.pcscript` | Peça para script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Move a barra de recuo no ficheiro |
| `check <part> [--strict]` | A verificação de disciplina (abaixo) |

`build` também aceita `--set name=value` (só para esta construção) e `--upto <feature>`. Todos os comandos aceitam `--json`. Códigos de saída: 0 tudo correto, 1 foi encontrado um problema, 2 o comando foi escrito mal. Um script nunca é reescrito no próprio lugar: indique `-o` para guardar uma cópia alterada.

## A verificação

`check` indica o que torna uma peça difícil de alterar mais tarde:

| Constatação | Conta como |
|---|---|
| Um esboço sobredefinido (relações em conflito ou repetidas) | erro |
| Uma operação que não constrói | erro |
| Um parâmetro ou equação com erro, ou parâmetros que se usam uns aos outros | erro |
| Um esboço subdefinido, com os seus graus de liberdade | aviso |
| Números escritos diretamente em operações e cotas que nenhum parâmetro conduz | aviso |
| Um parâmetro que nada usa | aviso |
| Uma operação suprimida; a barra de recuo não está no fim | aviso |

`--strict` transforma cada aviso num erro, para que um script de construção possa recusar uma peça que não esteja totalmente conduzida.

:::note
A saída em macro `.swb` destina-se ao modelador de peças que a maioria das oficinas usa: executada dentro desse programa, constrói a peça aí. Não foi executada nesse programa aqui (não está disponível nos nossos servidores), por isso considere-a não testada.
:::
