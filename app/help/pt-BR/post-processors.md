---
title: Pós-processadores que você pode editar
summary: Um pós-processador é um arquivo de texto curto que transforma a trajetória da ferramenta em G-code para o seu controle. Copie um dos pós-processadores integrados, altere as linhas de que precisar (números de linha, troca de ferramenta, movimentos de origem, código de fim), veja o G-code que ele gera conforme você digita e guarde-o junto com a peça.
keywords: pós-processador, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, troca de ferramenta, M6, G43, ciclo fixo, números de linha, modal, evento, variável
from: 36ab8a38
---

A mesma trajetória da ferramenta precisa ser escrita de forma diferente para controles diferentes: com ou sem números de linha, `M6` ou uma pausa, `G28` ou `G53`, `M30` ou `M2`. Um **pós-processador** é o pequeno texto que diz como. Os três pós-processadores integrados do PartCraft (estilo Fanuc, GRBL e LinuxCNC) são escritos nesse formato, então um post seu pode começar como uma cópia de um deles.

Verifique a saída no simulador da sua máquina antes de usinar, e rode o programa em vazio, acima do material bruto, primeiro. Os pós-processadores integrados escrevem exatamente o que escreviam antes deste formato existir (os testes comparam a saída deles byte a byte em centenas de programas), mas nada aqui foi comprovado na sua máquina, e um post que você altera é de sua responsabilidade comprovar.

## Criar um

Em Fabricação, em **Pós-processador**:

- {{ui:Editar pós-processador…}} em um controle integrado abre **a sua própria cópia** dele. Em um dos seus pós-processadores, abre esse pós-processador.
- {{ui:Novo pós-processador…}} começa com um pequeno pós-processador em branco, com todos os eventos.
- {{ui:Importar arquivo de pós-processador…}} lê um arquivo de texto `.cpost` (o arquivo que você obtém em **Salvar como arquivo…** no editor).

O editor mostra o texto, uma linha que informa se ele é lido (e qual linha está errada) e o G-code que o pós-processador escreve, conforme você digita. **Pré-visualizar com** escolhe um pequeno programa de exemplo que executa todos os eventos, ou o programa desta peça. {{ui:Salvar}} guarda o pós-processador no arquivo da peça (até 20 pós-processadores) e o escolhe como controle. Os pós-processadores acompanham a peça; para usar um em outra peça, salve-o como arquivo e importe-o lá.

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

Linhas que começam com `//` e linhas em branco são ignoradas. No topo ficam as configurações; depois, um bloco `on <event>` para cada evento, fechado com `end`. Um evento que você deixar de fora não escreve nada.

| Configuração | Significado |
|---|---|
| `post <id>` | O id do pós-processador: letras, dígitos, `-` e `_` |
| `name <text>` | O que a lista de Controle mostra |
| `extension <ext>` | A extensão do arquivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … em cada linha `emit`, ou nenhum |
| `decimal-point yes` / `no` | `10.` em vez de `10` (comentários nunca têm o ponto) |
| `canned-cycles yes` / `no` | `no`: os furos são escritos como os movimentos G0/G1 que eles representam |
| `modal <group> <words>` | Palavras de um grupo (`modal motion G0 G1 G2 G3`) que só são escritas quando mudam |

## Eventos

Eles rodam nesta ordem para um programa: `start`; depois, para cada operação, `operation`, `tool-change` (quando a ferramenta muda), `spindle` (quando a velocidade muda), `approach` (o movimento até o primeiro ponto, antes do primeiro rápido), `coolant-on`, depois os movimentos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, um `cycle-hole` por furo e `cycle-end`; por último, `end`.

Cada evento pode usar as variáveis do seu próprio tipo de movimento, escritas como `{name}`: o programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), o material bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a operação (`op.name`, `op.type`), `rpm`, o ponto de um movimento (`x`, `y`, `z`, `f`, e `moved`: verdadeiro quando um eixo mudou), arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e furos (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variáveis** do editor mostra qual evento vê qual. Estado que você pode ler e definir: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores escritos).

## Instruções

| Instrução | O que faz |
|---|---|
| `raw TEXT` | Uma linha exatamente como digitada (sem número de linha) |
| `comment TEXT` | `(TEXT)` com caracteres não ASCII e colchetes removidos |
| `emit WORD WORD …` | Uma linha de palavras; palavras que saem vazias ficam de fora; sem palavras, sem linha |
| `word WORD …` | Adiciona palavras à linha em construção; um `emit` sem palavras a encerra |
| `if EXPR` … `else` … `end` | Condições: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, senão b) |
| `for tool in tools` … `end` | Uma vez para cada ferramenta que o programa usa |
| `set NAME EXPR` | Guarda um valor (`set offset tool.number`) |
| `reset NAME …` | Esquece palavras modais (um grupo, uma letra de endereço como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para um ponto |

Uma palavra é um texto digitado com lacunas `{variable|filter}`. Os filtros são `upper`, `lower`, `pad:N` (preenchimento com zeros), `cut:N` (primeiros N caracteres), `safe` (ASCII seguro para comentários) e `int`. Uma palavra que termina em `~` é **modal**: ela só é escrita quando difere do que foi escrito por último (`G1~`, `X{x}~`). Uma palavra que termina em `~!` é escrita sempre e continua lembrada. Um nome que não é variável é texto simples (`G81`, `mist`). Os números são arredondados para 0.001 mm e escritos sem zeros à direita.

## O que um pós-processador não pode fazer

Ele decide apenas como os movimentos são escritos, nada além disso. Não pode alterar uma trajetória da ferramenta, ordenar operações, dividir um arco, adicionar um eixo, conhecer o curso ou a cinemática da sua máquina, nem fazer contas com coordenadas (não existe `+`). Apalpação, ciclos de vida da ferramenta e de subprogramas, saída de 4.º e 5.º eixos e códigos de torno ainda não estão implementados. Um arquivo de pós-processador no estilo `.cps` de outro programa não pode ser carregado: este é um formato diferente, mais simples.
