---
title: Post-procesadores editables
summary: Un post é un ficheiro de texto curto que converte a traxectoria en G-code para o seu control. Copie un dos posts integrados, cambie as liñas que precise (números de liña, cambio de ferramenta, movementos de referencia, código de fin), vexa o G-code que escribe mentres escribe e consérvao coa peza.
keywords: post, post-procesador, G-code, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, cambio de ferramenta, M6, G43, ciclo fixo, números de liña, modal, evento, variable
from: c78d0cae
---

A mesma traxectoria ten que escribirse de xeito distinto para controis distintos: números de liña ou ningún, `M6` ou unha pausa, `G28` ou `G53`, `M30` ou `M2`. Un **post** é o texto curto que di como. Os tres posts integrados de PartCraft (estilo Fanuc, GRBL e LinuxCNC) están escritos neste formato, así que un post propio pode partir dunha copia de calquera deles.

Comprobe a saída no simulador da súa máquina antes de cortar, e execútea primeiro no aire, por riba do material. Os posts integrados escriben exactamente o que escribían antes de que existise este formato (as probas comparan a súa saída byte a byte en centos de programas), pero nada aquí foi probado na súa máquina, e un post que vostede cambie é cousa súa probalo.

## Crear un post

En Fabricación, baixo **Post-procesador**:

- {{ui:Editar post-procesador…}} nun control integrado abre **a súa propia copia** dese. Nun dos seus posts, abre ese post.
- {{ui:Novo post-procesador…}} comeza cun post en branco e pequeno, con todos os eventos.
- {{ui:Importar ficheiro de post-procesador…}} lee un ficheiro de texto `.cpost` (o que obtén con **Gardar como ficheiro…** no editor).

O editor amosa o texto, unha liña que indica se se pode ler (e cal liña é a incorrecta), e o G-code que escribe o post, a medida que escribe. **Vista previa con** escolle un programa de mostra pequeno que executa todos os eventos, ou o propio programa desta peza. {{ui:Gardar}} conserva o post no ficheiro da peza (ata 20 posts) e elíxeo como control. Os posts viaxan coa peza; para usalo noutra peza, gárdeo como ficheiro e impórteo alí.

## Así é un post

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

As liñas que comezan con `//` e as liñas en branco ignóranse. Arriba van os axustes; logo un bloque `on <evento>` por cada evento, pechado con `end`. Un evento que omita non escribe nada.

| Axuste | Significado |
|---|---|
| `post <id>` | O identificador do post: letras, díxitos, `-` e `_` |
| `name <texto>` | O que mostra a lista de Controis |
| `extension <ext>` | A extensión do ficheiro: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada liña `emit`, ou ningún |
| `decimal-point yes` / `no` | `10.` en vez de `10` (os comentarios nunca levan punto) |
| `canned-cycles yes` / `no` | `no`: os buratos escríbense como os movementos G0/G1 que representan |
| `modal <grupo> <palabras>` | Palabras dun grupo (`modal motion G0 G1 G2 G3`) que só se escriben cando cambian |

## Eventos

Execútanse nesta orde para un programa: `start`; logo, para cada operación, `operation`, `tool-change` (cando cambia a ferramenta), `spindle` (cando cambia a velocidade), `approach` (o movemento ata o primeiro punto, antes do primeiro rápido), `coolant-on`, e despois os seus movementos como `rapid`, `feed` e `arc`, e cada ciclo fixo como `cycle-start`, un `cycle-hole` por burato e `cycle-end`; por último, `end`.

Máis eventos, para o que vai máis aló de tres eixos (un post sen o evento rexeita ese programa e nomea o evento que lle falta):

| Evento | Cando | As súas variables |
|---|---|---|
| `index` | Antes dunha operación cuxa dirección da ferramenta difire da anterior, e antes da primeira operación nunha máquina con eixos rotativos | `rot.a`, `rot.b`, `rot.c` (as posicións ás que ir; baleiras para un eixo que a máquina non ten), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Os movementos dunha operación cuxos eixos rotativos se moven mentres corta | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (sí cando o avance debe ser de tempo inverso), `invf` (1/minutos) |
| `rotary-end` | Despois dunha operación así | |
| `probe-move` | Un movemento que para cando salta a sonda | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y ou z), `probe.k` (1, 2 ou 3) |
| `probe-set` | Despois dos toques dun ciclo de sondaxe | `probe.kind` (`"z"`, `"x"`, `"y"` ou `centre`), `probe.action` (`set` ou `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un movemento de roscado nun torno | `x`, `z`, `thread.lead` |

Tamén para todos os eventos: `kin` (none, a, b, ac, bc), `rotary` e `tcp` (yes ou no, desde a máquina en Preparación), `pivot.x`, `pivot.y`, `pivot.z`, o `op.tilt` e o `op.turn` da operación, e nun torno `spin.mode` (css ou rpm), `spin.css`, `spin.max` e `tool.nose`. Unha palabra con letra cuxo valor está baleiro, como `A{rot.a}` nunha máquina sen eixo A, omítese da liña. Compare con x, y e z como texto entre comiñas (`if probe.kind == "z"`): sen comiñas, son as coordenadas do movemento.

Dúas liñas máis ao principio dun post fano un post de torno: `machine lathe` (entón só escribe X e Z, e rexeita as traxectorias de fresado como un post de fresado rexeita as de torno) e `lathe-x diameter` ou `lathe-x radius`.

Cada evento pode usar as variables do seu propio tipo de movemento, escritas `{nome}`: o programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), o material en bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a ferramenta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a operación (`op.name`, `op.type`), `rpm`, o punto dun movemento (`x`, `y`, `z`, `f`, e `moved`: sí cando cambiou algún eixo), os arcos (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e os buratos (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A lista **Eventos e variables** do editor amosa que evento ve cada cousa. Estado que se pode ler e fixar: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (os últimos valores escritos).

## Instrucións

| Instrución | Que fai |
|---|---|
| `raw TEXTO` | Unha liña exactamente como se escribe (sen número de liña) |
| `comment TEXTO` | `(TEXTO)` co non ASCII e os parénteses retirados |
| `emit PALABRA PALABRA …` | Unha liña de palabras; as palabras que quedan baleiras omítense; sen palabras, sen liña |
| `word PALABRA …` | Engade palabras á liña que se está a construír; un `emit` baleiro remata a liña |
| `if EXPR` … `else` … `end` | Condicións: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, senón b) |
| `for tool in tools` … `end` | Unha vez para cada ferramenta que usa o programa |
| `set NOME EXPR` | Recorda un valor (`set offset tool.number`) |
| `reset NOME …` | Esquece as palabras modais (un grupo, unha letra de dirección como `Z`, ou `at.z`) |
| `do rapid X Y Z` | Executa o evento `rapid` para un punto |

Unha palabra é texto escrito con buratos `{variable|filtro}`. Os filtros son `upper`, `lower`, `pad:N` (enche con ceros), `cut:N` (os primeiros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Unha palabra que remata en `~` é **modal**: escríbese só cando difire do que se escribiu por última vez (`G1~`, `X{x}~`). Unha palabra que remata en `~!` escríbese sempre e tamén se recorda. Un nome que non é variable é texto plano (`G81`, `mist`). Os números redondéanse a 0,001 mm e escríbense sen ceros finais.

## O que un post non pode facer

Só decide como se escriben os movementos, nada máis. Non pode cambiar unha traxectoria, ordenar as operacións, dividir un arco, engadir un eixo, coñecer o percorrido ou a cinemática da súa máquina, nin facer aritmética con coordenadas (non hai `+`). As posicións rotativas veñen da máquina descrita en Preparación, non do post: un post pode cambiar o seu signo ou as súas letras, pero non a cinemática. Os ciclos de vida útil da ferramenta e de subprogramas non están construídos. Un ficheiro de post `.cps` doutro programa non se pode cargar: este é outro formato, máis simple.
