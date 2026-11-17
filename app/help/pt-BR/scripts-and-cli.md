---
title: Scripts e a linha de comando
summary: O formato de script do PartCraft (.pcscript), que grava uma peça inteira como texto legível, e a ferramenta de linha de comando partcraft, que cria, altera, faz rollback e verifica peças sem a tela.
keywords: script, pcscript, texto, linha de comando, cli, terminal, lote, automatizar, verificar, lint, criar, exportar, controle de versão, diff, script paramétrico
from: c56df222
---

Modelagem cuidadosa é mais uma questão de disciplina do que de botões. Uma peça escrita como texto pode ser lida, revisada, comparada linha a linha e recriada por um script. O PartCraft funciona nos dois sentidos: qualquer peça pode ser escrita como script, e um script cria a peça.

## No aplicativo

Na aba {{ui:Parâmetros}}, em **Script**:

- {{ui:Salvar como script}} baixa a peça aberta como `<nome>.pcscript`.
- {{ui:Abrir script}} cria uma peça a partir de um arquivo `.pcscript`. Um erro é informado com o número da linha, e nada é substituído.

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

- Uma linha na margem esquerda inicia uma instrução: `pcscript`, `part`, `param`, um tipo de recurso (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` e os tipos mais novos) seguido do seu nome, ou `rollback <recurso>`.
- Linhas recuadas são as configurações da instrução acima. Uma configuração sozinha (`through`, `reverse`, `suppressed`) significa sim.
- Uma configuração numérica é um número, ou `=` e uma expressão, que forma uma equação: `depth = thick`.
- Em um esboço: `on` indica o plano (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); a geometria é `point <nome> x, y`, `line <nome> <ponto> <ponto>`, `circle <nome> <centro> <raio>`, `arc <nome> <centro> <início> <fim>` (anti-horário) ou `spline <nome> fit|control <pontos>`; as relações são seu tipo e os nomes que elas ligam (`O` é a origem); uma cota termina com seu valor ou com `= expressão`.
- Configurações opcionais de uma linha de geometria ou de relação vão entre colchetes no fim, separadas por `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` inicia um comentário (no início de uma linha ou depois de um espaço). Nomes com espaços vão entre "aspas duplas".
- Os ids dos recursos contam a partir de f1, na ordem em que são escritos. As referências de aresta e face os usam, por exemplo `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Configurações para as quais o formato não tem palavras são escritas como `json` seguido de um valor; elas são lidas de volta exatamente como estão.

Salvo pelo aplicativo, o script inclui todas as configurações, então ele abre como a mesma peça. Um sólido STEP importado é gravado dentro do script pelo aplicativo, e, na linha de comando, como um arquivo `.step` separado, nomeado por `step-file`.

## A ferramenta de linha de comando

A ferramenta roda em um computador com Node.js 24, a partir de uma cópia do código-fonte do CadCraft: `node tools/partcraft-cli/partcraft.mjs <comando>`. É uma ferramenta para desenvolvedores e usa os mesmos módulos do aplicativo. As peças são arquivos `.partcraft.json` ou scripts `.pcscript`.

| Comando | O que faz |
|---|---|
| `info <peça>` | Recursos, parâmetros, barra de rollback, volume e tamanho do sólido construído |
| `params <peça>` | Cada parâmetro e equação com seu valor |
| `set <peça> width=150 Base.depth==thick` | Direto: altera parâmetros, liga números (`==` ou uma expressão), define números simples |
| `drive <peça> Base.depth=12` | Inverso: resolve o parâmetro por trás de um número controlado (`--prefer width` escolhe um) |
| `build <peça> --out x.step` | Grava `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ou uma macro (`.swb`) |
| `build <peça> --table sizes.csv --out-dir sizes` | Um arquivo por linha da tabela de projeto |
| `variants <peça> --out-dir d` ou `--zip f.zip` | Cada configuração como STEP, IFC, DWG e uma prévia, uma tabela de variantes e um item de biblioteca (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); veja [Criar um pacote de variantes](topic:variant-pack) |
| `script <entrada.pcscript> -o part.json` | Script para peça |
| `to-script <peça> -o part.pcscript` | Peça para script |
| `rollback <peça> [<recurso>]`, `forward <peça> [--end]` | Move a barra de rollback no arquivo |
| `check <peça> [--strict]` | A verificação de disciplina (abaixo) |

`build` também aceita `--set name=value` (só para esta criação) e `--upto <recurso>`. Todo comando aceita `--json`. Códigos de saída: 0 tudo certo, 1 um problema foi encontrado, 2 o comando foi digitado errado. Um script nunca é reescrito no lugar: use `-o` para salvar uma cópia alterada.

## A verificação

`check` informa o que dificulta alterar uma peça depois:

| Achado | Conta como |
|---|---|
| Um esboço sobredefinido (relações conflitantes ou repetidas) | erro |
| Um recurso que não pode ser construído | erro |
| Um parâmetro ou equação com erro, ou parâmetros que dependem uns dos outros | erro |
| Um esboço subdefinido, com seus graus de liberdade | aviso |
| Números digitados diretamente em recursos e cotas que nenhum parâmetro controla | aviso |
| Um parâmetro que ninguém usa | aviso |
| Um recurso suprimido; a barra de rollback não está no fim | aviso |

`--strict` transforma cada aviso em erro, para que um script de criação possa recusar uma peça que não esteja totalmente controlada por parâmetros.

:::note
A saída de macro `.swb` é para o modelador de peças que a maioria das oficinas usa: executada dentro desse programa, ela constrói a peça lá. Ela não foi executada nesse programa aqui (ele não está disponível em nossos servidores), então trate-a como não testada.
:::
