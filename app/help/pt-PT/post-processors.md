---
title: Pós-processadores editáveis
summary: Um pós-processador é um ficheiro de texto curto que transforma o percurso da ferramenta em G-code para o seu comando. Copie um dos pós-processadores incorporados, altere as linhas de que precisa (números de linha, troca de ferramenta, movimentos de referência, código final), veja o G-code que escreve à medida que escreve e guarde-o com a peça.
keywords: pós-processador, pós processador, postprocessor, G-code, NC, GRBL, LinuxCNC, editar pós-processador, pós-processador personalizado, cpost, troca de ferramenta, M6, G43, ciclo fixo, números de linha, modal, evento, variável
from: c78d0cae
---

O mesmo percurso tem de ser escrito de forma diferente para comandos diferentes: números de linha ou nenhum, `M6` ou uma pausa, `G28` ou `G53`, `M30` ou `M2`. Um **pós-processador** é o texto curto que diz como. Os três pós-processadores incorporados do PartCraft (estilo Fanuc, GRBL e LinuxCNC) estão escritos neste formato, por isso um pós-processador próprio pode começar como cópia de um deles.

Verifique o resultado no simulador da sua máquina antes de cortar, e execute-o primeiro no ar, acima do bruto. Os pós-processadores incorporados escrevem exatamente o que escreviam antes deste formato existir (os testes comparam o seu resultado byte a byte em centenas de programas), mas nada disto foi comprovado na sua máquina, e cabe a quem alterar um pós-processador comprová-lo.

## Criar um

Em Fabrico, em **Pós-processador**:

- {{ui:Editar pós-processador…}} num comando incorporado abre **uma cópia sua** dele. Num pós-processador próprio, abre esse pós-processador.
- {{ui:Novo pós-processador…}} começa de um pequeno pós-processador em branco, com todos os eventos.
- {{ui:Importar ficheiro de pós-processador…}} lê um ficheiro de texto `.cpost` (o ficheiro obtido em **Guardar como ficheiro…** no editor).

O editor mostra o texto, uma linha que indica se é lido (e qual linha está errada), e o G-code que o pós-processador escreve, à medida que escreve. **Pré-visualizar com** escolhe um pequeno programa de exemplo que executa todos os eventos, ou o próprio programa desta peça. {{ui:Guardar}} mantém o pós-processador no ficheiro da peça (até 20 pós-processadores) e escolhe-o como comando. Os pós-processadores acompanham a peça; para o usar noutra peça, guarde-o como ficheiro e importe-o lá.

## Como é um pós-processador

```
post mymill
name A minha fresadora (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Programa {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

As linhas que começam por `//` e as linhas em branco são ignoradas. No topo vêm as definições; depois, um bloco `on <evento>` para cada evento, fechado com `end`. Um evento que se omita não escreve nada.

| Definição | Significado |
|---|---|
| `post <id>` | O id do pós-processador: letras, dígitos, `-` e `_` |
| `name <texto>` | O que mostra a lista de comandos |
| `extension <ext>` | A extensão do ficheiro: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … em cada linha de `emit`, ou nenhum |
| `decimal-point yes` / `no` | `10.` em vez de `10` (os comentários nunca levam o ponto) |
| `canned-cycles yes` / `no` | `no`: os furos são escritos como os movimentos G0/G1 que representam |
| `modal <grupo> <palavras>` | Palavras de um grupo (`modal motion G0 G1 G2 G3`) que só são escritas quando mudam |

## Eventos

Correm nesta ordem para um programa: `start`; depois, para cada operação, `operation`, `tool-change` (quando a ferramenta muda), `spindle` (quando a velocidade muda), `approach` (o movimento até ao primeiro ponto, antes do primeiro rápido), `coolant-on`, depois os seus movimentos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, um `cycle-hole` por furo e `cycle-end`; por fim, `end`.

Mais eventos, para o que vai além de três eixos (um pós-processador sem o evento recusa esse programa e indica o evento que lhe falta):

| Evento | Quando | As suas variáveis |
|---|---|---|
| `index` | Antes de uma operação cuja direção da ferramenta difere da anterior, e antes da primeira operação numa máquina com eixos rotativos | `rot.a`, `rot.b`, `rot.c` (as posições a atingir; vazias para um eixo que a máquina não tem), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Os movimentos de uma operação cujos eixos rotativos se movem durante o corte | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (sim quando o avanço tem de ser em tempo inverso), `invf` (1/minutos) |
| `rotary-end` | Depois de uma operação dessas | |
| `probe-move` | Um movimento que para quando o apalpador toca | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y ou z), `probe.k` (1, 2 ou 3) |
| `probe-set` | Depois dos toques de um ciclo de apalpação | `probe.kind` (`"z"`, `"x"`, `"y"` ou `centre`), `probe.action` (`set` ou `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Um movimento de roscagem num torno | `x`, `z`, `thread.lead` |

Também para todos os eventos: `kin` (none, a, b, ac, bc), `rotary` e `tcp` (yes ou no, da máquina em Preparação), `pivot.x`, `pivot.y`, `pivot.z`, o `op.tilt` e o `op.turn` da operação, e, num torno, `spin.mode` (css ou rpm), `spin.css`, `spin.max` e `tool.nose`. Uma palavra com letra cujo valor esteja vazio, como `A{rot.a}` numa máquina sem eixo A, é omitida da linha. Compare x, y e z como texto entre aspas (`if probe.kind == "z"`): sem aspas, são as coordenadas do movimento.

Duas linhas no topo de um pós-processador fazem dele um pós-processador de torno: `machine lathe` (passa a escrever apenas X e Z e recusa trajetos de fresagem, tal como um pós-processador de fresagem recusa trajetos de torneamento) e `lathe-x diameter` ou `lathe-x radius`.

Cada evento pode usar as variáveis do seu próprio tipo de movimento, escritas `{nome}`: o programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), o bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a operação (`op.name`, `op.type`), `rpm`, o ponto de um movimento (`x`, `y`, `z`, `f`, e `moved`: verdadeiro quando um eixo mudou), os arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e os furos (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variáveis** do editor mostra que evento vê cada coisa. Estado que pode ler e definir: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores escritos).

## Instruções

| Instrução | O que faz |
|---|---|
| `raw TEXTO` | Uma linha exatamente como escrita (sem número de linha) |
| `comment TEXTO` | `(TEXTO)` com os caracteres não ASCII e os parênteses retirados |
| `emit PALAVRA PALAVRA …` | Uma linha de palavras; as palavras que saem vazias são omitidas; sem palavras, sem linha |
| `word PALAVRA …` | Acrescenta palavras à linha em construção; um `emit` sem palavras termina-a |
| `if EXPR` … `else` … `end` | Condições: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, senão b) |
| `for tool in tools` … `end` | Uma vez para cada ferramenta que o programa usa |
| `set NOME EXPR` | Memoriza um valor (`set offset tool.number`) |
| `reset NOME …` | Esquece palavras modais (um grupo, uma letra de endereço como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para um ponto |

Uma palavra é texto escrito com buracos `{variável|filtro}`. Os filtros são `upper`, `lower`, `pad:N` (preenchimento com zeros), `cut:N` (primeiros N caracteres), `safe` (ASCII seguro para comentários) e `int`. Uma palavra que termina em `~` é **modal**: só é escrita quando difere do que foi escrito por último (`G1~`, `X{x}~`). Uma palavra que termina em `~!` é escrita sempre e continua memorizada. Um nome que não é variável é texto simples (`G81`, `mist`). Os números são arredondados a 0,001 mm e escritos sem zeros finais.

## O que um pós-processador não pode fazer

Decide apenas como os movimentos são escritos, nada mais. Não pode alterar um percurso, ordenar operações, dividir um arco, acrescentar um eixo, conhecer os cursos ou a cinemática da sua máquina, nem fazer aritmética com coordenadas (não há `+`). As posições rotativas vêm da máquina descrita em Preparação, e não do pós-processador: um pós-processador pode mudar o sinal ou as letras delas, mas não a cinemática. Ciclos de vida útil da ferramenta e de subprogramas não estão implementados. Um ficheiro de pós-processador no estilo `.cps` de outro programa não pode ser carregado: este é um formato diferente, mais simples.
