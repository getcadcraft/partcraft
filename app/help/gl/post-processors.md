---
title: Post-procesadores que pode editar
summary: Un post é un ficheiro de texto curto que converte a traxectoria en código G para o seu control. Copie un dos posts integrados, cambie as liñas que necesite (números de liña, cambio de ferramenta, movementos de orixe, código final), vexa o código G que escribe mentres escribe e consérveo coa peza.
keywords: post, post-procesador, postprocesador, código G, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, cambio de ferramenta, M6, G43, ciclo fixo, números de liña, modal, evento, variable
from: 36ab8a38
---

As mesmas traxectorias deben escribirse de forma distinta para controis diferentes: números de liña ou ningún, `M6` ou unha pausa, `G28` ou `G53`, `M30` ou `M2`. Un **post** é o texto curto que indica como. Os tres posts integrados de PartCraft (de estilo Fanuc, GRBL e LinuxCNC) están escritos neste formato, así que un post propio pode comezar como copia dun deles.

Revise a saída no simulador da súa propia máquina antes de cortar, e execute o programa no aire, sobre o material, primeiro. Os posts integrados escriben exactamente o que escribían antes de existir este formato (as probas comparan a súa saída byte a byte en centenas de programas), pero nada aquí foi probado na súa máquina, e un post que cambie é responsabilidade súa de probalo.

## Crear un

En Fabricación, baixo **Post**:

- {{ui:Editar post-procesador…}} nun control integrado abre **a súa propia copia**. Nun dos seus posts, abre ese post.
- {{ui:Novo post-procesador…}} comeza cun post baleiro pequeno con todos os eventos.
- {{ui:Importar ficheiro de post-procesador…}} le un ficheiro de texto `.cpost` (o ficheiro que obtén con **Gardar como ficheiro…** no editor).

O editor mostra o texto, unha liña que indica se se pode ler (e cal liña é incorrecta), e o código G que escribe o post, mentres escribe. **Vista previa con** escolle un programa de mostra pequeno que executa todos os eventos, ou o programa propio desta peza. {{ui:Gardar}} conserva o post no ficheiro da peza (ata 20 posts) e elíxeo como control. Os posts viaxan coa peza; para usar un noutra peza, grárdeo como ficheiro e impórtao alí.

## Como é un post

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

As liñas que comezan por `//` e as liñas baleiras ignóranse. Na parte superior veñen os axustes; despois, un bloque `on <evento>` por cada evento, pechado con `end`. Un evento que omita non escribe nada.

| Axuste | Significado |
|---|---|
| `post <id>` | O identificador do post: letras, díxitos, `-` e `_` |
| `name <text>` | O que mostra a lista de Controis |
| `extension <ext>` | A extensión do ficheiro: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada liña `emit`, ou ningún |
| `decimal-point yes` / `no` | `10.` en vez de `10` (os comentarios nunca levan o punto) |
| `canned-cycles yes` / `no` | `no`: os furados escríbense como os movementos G0/G1 que representan |
| `modal <grupo> <palabras>` | Palabras dun grupo (`modal motion G0 G1 G2 G3`) que se escriben só cando cambian |

## Eventos

Execútanse nesta orde para un programa: `start`; despois, para cada operación, `operation`, `tool-change` (cando cambia a ferramenta), `spindle` (cando cambia a velocidade), `approach` (o movemento ata o primeiro punto, antes do primeiro rápido), `coolant-on`, e despois os seus movementos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, un `cycle-hole` por cada furado e `cycle-end`; por último, `end`.

Cada evento pode usar as variables do seu propio tipo de movemento, escritas `{nome}`: as do programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), as do material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), as da ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), as da operación (`op.name`, `op.type`), `rpm`, as do punto dun movemento (`x`, `y`, `z`, `f`, e `moved`: verdadeiro cando cambiou un eixe), as dos arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e as dos furados (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variables** do editor mostra que evento ve cada cousa. Estado que se pode ler e fixar: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores escritos).

## Instrucións

| Instrución | Función |
|---|---|
| `raw TEXT` | Unha liña tal cal se escribe (sen número de liña) |
| `comment TEXT` | `(TEXT)`, con caracteres non ASCII e corchetes eliminados |
| `emit WORD WORD …` | Unha liña de palabras; as palabras que quedan baleiras omítense; sen palabras, non hai liña |
| `word WORD …` | Engade palabras á liña en construción; un `emit` sen palabras remata a liña |
| `if EXPR` … `else` … `end` | Condicións: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, se non b) |
| `for tool in tools` … `end` | Unha vez para cada ferramenta que usa o programa |
| `set NAME EXPR` | Lembra un valor (`set offset tool.number`) |
| `reset NAME …` | Esquece palabras modais (un grupo, unha letra de dirección como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para un punto |

Unha palabra é texto escrito con furados `{variable|filtro}`. Os filtros son `upper`, `lower`, `pad:N` (recheo con ceros), `cut:N` (os primeiros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Unha palabra que remata en `~` é **modal**: escríbese só cando difire do último valor escrito (`G1~`, `X{x}~`). Unha palabra que remata en `~!` escríbese sempre e tamén se recorda. Un nome que non é variable é texto simple (`G81`, `mist`). Os números redondéanse a 0,001 mm e escríbense sen ceros finais.

## Que non pode facer un post

Só decide como se escriben os movementos, nada máis. Non pode cambiar unha traxectoria, ordenar operacións, dividir un arco, engadir un eixe, coñecer o recorrido ou a cinemática da súa máquina, nin facer aritmética con coordenadas (non hai `+`). Non están construídos os palpados, os ciclos de vida da ferramenta e de subprogramas, a saída do 4.º e do 5.º eixe, nin os códigos de torno. Un ficheiro de post de estilo `.cps` doutro programa non se pode cargar: este é un formato distinto e máis simple.
