---
title: Pós-processadores que você pode editar
summary: Um pós-processador é um arquivo de texto curto que transforma a trajetória em G-code para o seu comando. Copie um dos pós-processadores prontos, altere as linhas que precisar (números de linha, troca de ferramenta, movimentos de referência, código de fim), veja o G-code que ele escreve enquanto você digita e mantenha-o com a peça.
keywords: pós-processador, pós, G-code, NC, GRBL, LinuxCNC, editar pós-processador, pós-processador personalizado, cpost, troca de ferramenta, M6, G43, ciclo fixo, números de linha, modal, evento, variável
from: c78d0cae
---

A mesma trajetória precisa ser escrita de forma diferente para cada comando: números de linha ou nenhum, `M6` ou uma pausa, `G28` ou `G53`, `M30` ou `M2`. Um **pós-processador** é o pequeno texto que diz como. Os três pós-processadores prontos do PartCraft (estilo Fanuc, GRBL e LinuxCNC) são escritos nesse formato, então um pós-processador seu pode começar como cópia de um deles.

Verifique a saída no simulador da sua máquina antes de usinar, e execute-a no ar, acima do material bruto, primeiro. Os pós-processadores prontos gravam exatamente o que gravavam antes deste formato existir (os testes comparam a saída deles byte a byte em centenas de programas), mas nada aqui foi comprovado na sua máquina, e um pós-processador que você altera é de sua responsabilidade comprovar.

## Criar um

Em Manufatura, em **{{ui:Pós-processador}}**:

- {{ui:Editar pós-processador…}} num comando pronto abre **a sua própria cópia** dele. Num dos seus próprios pós-processadores, abre esse pós-processador.
- {{ui:Novo pós-processador…}} começa com um pequeno pós-processador em branco, com todos os eventos.
- {{ui:Importar arquivo de pós-processador…}} lê um arquivo de texto `.cpost` (o arquivo que você obtém em **Salvar como arquivo…** no editor).

O editor mostra o texto, uma linha que informa se ele é lido (e qual linha está errada) e o G-code que o pós-processador escreve, enquanto você digita. **Visualizar com** escolhe um pequeno programa de exemplo que executa todos os eventos, ou o próprio programa desta peça. {{ui:Salvar}} guarda o pós-processador no arquivo da peça (até 20 pós-processadores) e o escolhe como comando. Os pós-processadores acompanham a peça; para usar um em outra peça, salve-o como arquivo e importe-o lá.

## Como é um pós-processador

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
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

Linhas que começam com `//` e linhas em branco são ignoradas. No topo vêm as configurações; depois, um bloco `on <evento>` para cada evento, fechado com `end`. Um evento que você deixar de fora não escreve nada.

| Configuração | Significado |
|---|---|
| `post <id>` | O id do pós-processador: letras, dígitos, `-` e `_` |
| `name <texto>` | O que a lista de comandos mostra |
| `extension <ext>` | A extensão do arquivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … em cada linha `emit`, ou nenhum |
| `decimal-point yes` / `no` | `10.` em vez de `10` (comentários nunca levam o ponto) |
| `canned-cycles yes` / `no` | `no`: os furos são escritos como os movimentos G0/G1 que representam |
| `modal <grupo> <palavras>` | Palavras de um grupo (`modal motion G0 G1 G2 G3`) escritas somente quando mudam |

## Eventos

Eles rodam nesta ordem para um programa: `start`; depois, para cada operação, `operation`, `tool-change` (quando a ferramenta muda), `spindle` (quando a rotação muda), `approach` (o movimento até o primeiro ponto, antes do primeiro avanço rápido), `coolant-on`, e então os seus movimentos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, um `cycle-hole` por furo e `cycle-end`; por último, `end`.

Há mais eventos, para o que vai além de três eixos (um pós-processador sem o evento recusa esse programa e informa o evento que lhe falta):

| Evento | Quando | Suas variáveis |
|---|---|---|
| `index` | Antes de uma operação cuja direção da ferramenta difere da última, e antes da primeira operação numa máquina com eixos rotativos | `rot.a`, `rot.b`, `rot.c` (as posições para onde ir; vazias para um eixo que a máquina não tem), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Os movimentos de uma operação cujos eixos rotativos se movem enquanto ela corta | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes quando o avanço deve ser em tempo inverso), `invf` (1/minutos) |
| `rotary-end` | Depois de tal operação | |
| `probe-move` | Um movimento que para quando o apalpador é acionado | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y ou z), `probe.k` (1, 2 ou 3) |
| `probe-set` | Depois dos toques de um ciclo de apalpação | `probe.kind` (`"z"`, `"x"`, `"y"` ou `centre`), `probe.action` (`set` ou `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Um movimento de rosca num torno | `x`, `z`, `thread.lead` |

Também para todo evento: `kin` (none, a, b, ac, bc), `rotary` e `tcp` (`yes` ou `no`, conforme a máquina na guia **Preparação**), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` e `op.turn` da operação e, num torno, `spin.mode` (css ou rpm), `spin.css`, `spin.max` e `tool.nose`. Uma palavra com letra cujo valor esteja vazio, como `A{rot.a}` numa máquina sem eixo A, fica de fora da linha. Compare como texto, entre aspas (`if probe.kind == "z"`); sem aspas, x, y e z são as coordenadas do movimento.

Duas linhas a mais no topo de um pós-processador o tornam um pós-processador de torno: `machine lathe` (ele então escreve somente X e Z e recusa trajetórias de fresamento, como um pós-processador de fresamento recusa trajetórias de torneamento) e `lathe-x diameter` ou `lathe-x radius`.

Cada evento pode usar as variáveis do seu próprio tipo de movimento, escritas como `{name}`: o programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), o material bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a operação (`op.name`, `op.type`), `rpm`, o ponto de um movimento (`x`, `y`, `z`, `f`, e `moved`: verdadeiro quando um eixo mudou), arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e furos (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variáveis** do editor mostra qual evento vê o quê. Estados que você pode ler e definir: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores gravados).

## Instruções

| Instrução | O que faz |
|---|---|
| `raw TEXT` | Uma linha exatamente como digitada (sem número de linha) |
| `comment TEXT` | `(TEXT)` com caracteres não ASCII e colchetes removidos |
| `emit WORD WORD …` | Uma linha de palavras; palavras que saem vazias ficam de fora; sem palavras, sem linha |
| `word WORD …` | Acrescenta palavras à linha em construção; um `emit` solto a encerra |
| `if EXPR` … `else` … `end` | Condições: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, senão b) |
| `for tool in tools` … `end` | Uma vez para cada ferramenta que o programa usa |
| `set NAME EXPR` | Lembra um valor (`set offset tool.number`) |
| `reset NAME …` | Esquece palavras modais (um grupo, uma letra de endereço como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para um ponto |

Uma palavra é texto digitado com campos `{variável|filtro}`. Os filtros são `upper`, `lower`, `pad:N` (preenchimento com zeros), `cut:N` (primeiros N caracteres), `safe` (ASCII seguro para comentário) e `int`. Uma palavra que termina em `~` é **modal**: só é escrita quando difere do que foi escrito por último (`G1~`, `X{x}~`). Uma palavra que termina em `~!` é escrita sempre e continua lembrada. Um nome que não é variável é texto simples (`G81`, `mist`). Os números são arredondados para 0.001 mm e escritos sem zeros à direita.

## O que um pós-processador não pode fazer

Ele decide apenas como os movimentos são escritos, nada mais. Não pode alterar uma trajetória, reordenar operações, dividir um arco, acrescentar um eixo, conhecer o curso ou a cinemática da sua máquina, nem fazer aritmética com coordenadas (não há `+`). As posições rotativas vêm da máquina descrita na Preparação, não do pós-processador: um pós-processador pode mudar o sinal delas ou as letras, não a cinemática. Ciclos de vida útil da ferramenta e de subprogramas não estão implementados. Um arquivo de pós-processador no estilo `.cps` de outro programa não pode ser carregado: este é um formato diferente, mais simples.
