---
title: Pós-processadores editáveis
summary: Um pós-processador é um ficheiro de texto curto que transforma o percurso da ferramenta em G-code para o controlo da máquina. Copie um dos incluídos, altere as linhas que precisa (números de linha, mudança de ferramenta, movimentos de origem, código final), veja o G-code que escreve à medida que escreve, e guarde-o com a peça.
keywords: pós-processador, postprocessor, G-code, NC, GRBL, LinuxCNC, editar pós-processador, pós-processador personalizado, cpost, mudança de ferramenta, M6, G43, ciclo fixo, números de linha, modal, evento, variável
from: 36ab8a38
---

O mesmo percurso da ferramenta tem de ser escrito de forma diferente para cada controlo: com ou sem números de linha, `M6` ou uma pausa, `G28` ou `G53`, `M30` ou `M2`. Um **pós-processador** é o pequeno texto que indica como. Os três pós-processadores incluídos no PartCraft (estilo Fanuc, GRBL e LinuxCNC) estão escritos neste formato, por isso um pós-processador próprio pode começar como cópia de um deles.

Verifique o resultado no simulador da própria máquina antes de maquinar, e execute-o primeiro no ar, acima do bruto. Os pós-processadores incluídos escrevem exatamente o que escreviam antes de este formato existir (os testes comparam o resultado byte a byte em centenas de programas), mas nada aqui foi provado na sua máquina, e um pós-processador que altere terá de ser validado por si.

## Criar um

No Fabrico, em **Pós-processador**:

- {{ui:Editar pós-processador…}} num controlo incluído abre **uma cópia sua** desse controlo. Num dos seus próprios, abre esse pós-processador.
- {{ui:Novo pós-processador…}} começa com um pequeno pós-processador em branco, com todos os eventos.
- {{ui:Importar ficheiro de pós-processador…}} lê um ficheiro de texto `.cpost` (o ficheiro que obtém com **Guardar como ficheiro…** no editor).

O editor mostra o texto, uma linha que indica se é lido (e qual linha está errada), e o G-code que o pós-processador escreve, à medida que escreve. **Pré-visualizar com** escolhe um pequeno programa de exemplo que executa todos os eventos, ou o programa desta peça. {{ui:Guardar}} guarda o pós-processador no ficheiro da peça (até 20 pós-processadores) e escolhe-o como controlo. Os pós-processadores acompanham a peça; para usar um noutra peça, guarde-o como ficheiro e importe-o lá.

## Como é um pós-processador

```
post mymill
name Minha fresadora (.nc)
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

As linhas que começam por `//` e as linhas em branco são ignoradas. No topo ficam as definições; depois, um bloco `on <evento>` para cada evento, fechado com `end`. Um evento que não se inclua não escreve nada.

| Definição | Significado |
|---|---|
| `post <id>` | O identificador do pós-processador: letras, dígitos, `-` e `_` |
| `name <texto>` | O que mostra a lista de controlos |
| `extension <ext>` | A extensão do ficheiro: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … em cada linha de `emit`, ou nenhum |
| `decimal-point yes` / `no` | `10.` em vez de `10` (os comentários nunca levam o ponto) |
| `canned-cycles yes` / `no` | `no`: os furos são escritos como os movimentos G0/G1 que representam |
| `modal <grupo> <palavras>` | Palavras de um grupo (`modal motion G0 G1 G2 G3`) que só são escritas quando mudam |

## Eventos

Correm por esta ordem num programa: `start`; depois, para cada operação, `operation`, `tool-change` (quando a ferramenta muda), `spindle` (quando a velocidade muda), `approach` (o movimento até ao primeiro ponto, antes do primeiro rápido), `coolant-on`, depois os seus movimentos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, um `cycle-hole` por furo e `cycle-end`; por fim, `end`.

Cada evento pode usar as variáveis do seu tipo de movimento, escritas `{name}`: o programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), o bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a operação (`op.name`, `op.type`), `rpm`, o ponto de um movimento (`x`, `y`, `z`, `f`, e `moved`: verdadeiro quando um eixo mudou), arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e furos (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variáveis** do editor mostra que evento vê cada uma. Estado que pode ler e definir: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores escritos).

## Instruções

| Instrução | O que faz |
|---|---|
| `raw TEXTO` | Uma linha exatamente como escrita (sem número de linha) |
| `comment TEXTO` | `(TEXTO)` sem caracteres não ASCII nem parênteses |
| `emit PALAVRA PALAVRA …` | Uma linha de palavras; as palavras que saem vazias são omitidas; sem palavras, não há linha |
| `word PALAVRA …` | Acrescenta palavras à linha em construção; um `emit` sem palavras termina-a |
| `if EXPR` … `else` … `end` | Condições: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, senão b) |
| `for tool in tools` … `end` | Uma vez para cada ferramenta que o programa usa |
| `set NOME EXPR` | Memoriza um valor (`set offset tool.number`) |
| `reset NOME …` | Esquece palavras modais (um grupo, uma letra de endereço como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para um ponto |

Uma palavra é texto escrito com espaços reservados `{variável|filtro}`. Os filtros são `upper`, `lower`, `pad:N` (preenchimento com zeros), `cut:N` (primeiros N caracteres), `safe` (ASCII seguro para comentários) e `int`. Uma palavra que termina em `~` é **modal**: só é escrita quando difere do que foi escrito por último (`G1~`, `X{x}~`). Uma palavra que termina em `~!` é escrita sempre e continua memorizada. Um nome que não é variável é texto simples (`G81`, `mist`). Os números são arredondados a 0.001 mm e escritos sem zeros finais.

## O que um pós-processador não pode fazer

Decide apenas como são escritos os movimentos, nada mais. Não pode alterar um percurso da ferramenta, ordenar operações, dividir um arco, acrescentar um eixo, conhecer os cursos ou a cinemática da sua máquina, nem fazer cálculos com coordenadas (não existe `+`). A sondagem, a vida útil da ferramenta e os ciclos de subprogramas, as saídas de 4.º e 5.º eixo e os códigos de torno não estão implementados. Um ficheiro de pós-processador no formato `.cps` de outro programa não pode ser carregado: este é um formato diferente e mais simples.
