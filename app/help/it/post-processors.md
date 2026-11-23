---
title: Post-processori modificabili
summary: Un post è un breve file di testo che trasforma il percorso utensile in G-code per il proprio controllo. Copiare uno dei post integrati, cambiare le righe necessarie (numeri di riga, cambio utensile, movimenti di riferimento, codice di fine), vedere il G-code che scrive mentre si digita, e conservarlo con il pezzo.
keywords: post, post-processore, postprocessore, G-code, NC, GRBL, LinuxCNC, modifica post, post personalizzato, cpost, cambio utensile, M6, G43, ciclo fisso, numeri di riga, modale, evento, variabile
from: c78d0cae
---

Lo stesso percorso utensile deve essere scritto in modo diverso per controlli diversi: numeri di riga o nessuno, `M6` oppure una pausa, `G28` oppure `G53`, `M30` oppure `M2`. Un **post** è il breve testo che dice come. I tre post integrati di PartCraft (stile Fanuc, GRBL e LinuxCNC) sono scritti in questo formato, quindi un post proprio può partire come copia di uno di essi.

Controllare l'output nel simulatore della propria macchina prima di tagliare, e farlo girare prima a vuoto sopra il grezzo. I post integrati scrivono esattamente ciò che scrivevano prima che esistesse questo formato (i test confrontano il loro output byte per byte su centinaia di programmi), ma nulla qui è stato provato sulla propria macchina, e un post modificato va provato da chi lo modifica.

## Crearne uno

In Produzione, sotto **Post**:

- {{ui:Modifica post…}} su un controllo integrato apre **una propria copia** di esso. Su un post proprio apre quel post.
- {{ui:Nuovo post…}} parte da un piccolo post vuoto con tutti gli eventi.
- {{ui:Importa file di post…}} legge un file di testo `.cpost` (il file che si ottiene con **Salva come file…** nell'editor).

L'editor mostra il testo, una riga che dice se viene letto (e quale riga è sbagliata) e il G-code che il post scrive mentre si digita. **Anteprima con** sceglie un piccolo programma di esempio che esegue tutti gli eventi, oppure il programma proprio di questo pezzo. {{ui:Salva}} conserva il post nel file del pezzo (fino a 20 post) e lo sceglie come controllo. I post viaggiano con il pezzo; per usarne uno in un altro pezzo, salvarlo come file e importarlo lì.

## Com'è fatto un post

```
post mymill
name Mia fresatrice (.nc)
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

Le righe che iniziano con `//` e le righe vuote sono ignorate. In alto vengono le impostazioni; poi un blocco `on <event>` per ogni evento, chiuso con `end`. Un evento omesso non scrive nulla.

| Impostazione | Significato |
|---|---|
| `post <id>` | L'id del post: lettere, cifre, `-` e `_` |
| `name <text>` | Ciò che mostra l'elenco Controllo |
| `extension <ext>` | L'estensione del file: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … su ogni riga `emit`, oppure nessuno |
| `decimal-point yes` / `no` | `10.` invece di `10` (i commenti non portano mai il punto) |
| `canned-cycles yes` / `no` | `no`: i fori sono scritti come i movimenti G0/G1 che rappresentano |
| `modal <group> <words>` | Parole di un gruppo (`modal motion G0 G1 G2 G3`) scritte solo quando cambiano |

## Eventi

Per un programma vengono eseguiti in quest'ordine: `start`; poi per ogni operazione `operation`, `tool-change` (quando cambia l'utensile), `spindle` (quando cambia la velocità), `approach` (il movimento fino al primo punto, prima del primo rapido), `coolant-on`, poi i suoi movimenti come `rapid`, `feed` e `arc`, e ogni ciclo fisso come `cycle-start`, un `cycle-hole` per foro e `cycle-end`; alla fine `end`.

Altri eventi, per ciò che va oltre i tre assi (un post senza l'evento rifiuta tale programma e indica l'evento che gli manca):

| Evento | Quando | Sue variabili |
|---|---|---|
| `index` | Prima di un'operazione la cui direzione dell'utensile differisce dalla precedente, e prima della prima operazione su una macchina con assi rotativi | `rot.a`, `rot.b`, `rot.c` (le posizioni da raggiungere; vuote per un asse che la macchina non ha), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | I movimenti di un'operazione i cui assi rotativi si muovono mentre taglia | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (sì quando l'avanzamento deve essere a tempo inverso), `invf` (1/minuti) |
| `rotary-end` | Dopo tale operazione | |
| `probe-move` | Un movimento che si ferma quando il tastatore scatta | `x`, `y`, `z`, `f`, `probe.n` (da 1 a 4), `probe.axis` (x, y o z), `probe.k` (1, 2 o 3) |
| `probe-set` | Dopo i tocchi di un ciclo di tastatura | `probe.kind` (`"z"`, `"x"`, `"y"` o `centre`), `probe.action` (`set` o `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un movimento di filettatura su un tornio | `x`, `z`, `thread.lead` |

Per ogni evento: `kin` (none, a, b, ac, bc), `rotary` e `tcp` (yes o no, dalla macchina in Impostazione), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` e `op.turn` dell'operazione, e su un tornio `spin.mode` (css o rpm), `spin.css`, `spin.max` e `tool.nose`. Una parola con lettera il cui valore è vuoto, come `A{rot.a}` su una macchina senza asse A, viene omessa dalla riga. Confrontare x, y e z come testo tra virgolette (`if probe.kind == "z"`): senza virgolette sono le coordinate del movimento.

Altre due righe in alto rendono il post un post per tornio: `machine lathe` (scrive allora solo X e Z, e rifiuta i percorsi di fresatura come un post di fresatura rifiuta i percorsi di tornitura) e `lathe-x diameter` oppure `lathe-x radius`.

Ogni evento può usare le variabili del proprio tipo di movimento, scritte `{name}`: il programma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), il grezzo (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'utensile (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'operazione (`op.name`, `op.type`), `rpm`, il punto di un movimento (`x`, `y`, `z`, `f`, e `moved`: vero quando un asse è cambiato), archi (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e fori (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). L'elenco **Eventi e variabili** dell'editor mostra quale evento vede quali. Stato che si può leggere e impostare: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (gli ultimi valori scritti).

## Istruzioni

| Istruzione | Cosa fa |
|---|---|
| `raw TEXT` | Una riga esattamente come digitata (senza numero di riga) |
| `comment TEXT` | `(TEXT)` senza caratteri non ASCII e senza parentesi |
| `emit WORD WORD …` | Una riga di parole; le parole che risultano vuote sono omesse; senza parole, nessuna riga |
| `word WORD …` | Aggiunge parole alla riga in costruzione; un `emit` senza parole la chiude |
| `if EXPR` … `else` … `end` | Condizioni: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, altrimenti b) |
| `for tool in tools` … `end` | Una volta per ogni utensile usato dal programma |
| `set NAME EXPR` | Ricorda un valore (`set offset tool.number`) |
| `reset NAME …` | Dimentica le parole modali (un gruppo, una lettera d'indirizzo come `Z`, oppure `at.z`) |
| `do rapid X Y Z` | Esegue l'evento `rapid` per un punto |

Una parola è testo digitato con dei buchi `{variabile|filtro}`. I filtri sono `upper`, `lower`, `pad:N` (riempimento con zeri), `cut:N` (primi N caratteri), `safe` (ASCII sicuro per i commenti) e `int`. Una parola che termina con `~` è **modale**: viene scritta solo quando differisce da ciò che è stato scritto per ultimo (`G1~`, `X{x}~`). Una parola che termina con `~!` viene scritta ogni volta e viene comunque ricordata. Un nome che non è una variabile è testo semplice (`G81`, `mist`). I numeri sono arrotondati a 0.001 mm e scritti senza zeri finali.

## Ciò che un post non può fare

Decide solo come vengono scritti i movimenti, nient'altro. Non può cambiare un percorso utensile, ordinare le operazioni, spezzare un arco, aggiungere un asse, conoscere la corsa o la cinematica della propria macchina, né fare calcoli sulle coordinate (non esiste `+`). Le posizioni rotative vengono dalla macchina descritta in Impostazione, non dal post: un post può cambiarne il segno o le lettere, non la cinematica. I cicli di durata utensile e di sottoprogramma non sono implementati. Un file di post in stile `.cps` di un altro programma non può essere caricato: questo è un formato diverso, più semplice.
