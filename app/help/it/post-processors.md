---
title: Post-processori modificabili
summary: Un post è un breve file di testo che trasforma il percorso utensile in G-code per il controllo. Copiare un post integrato, modificare le righe necessarie (numeri di riga, cambio utensile, movimenti di home, codice finale), vedere il G-code che scrive mentre si digita e conservarlo con il pezzo.
keywords: post, post-processore, postprocessor, G-code, NC, GRBL, LinuxCNC, modifica post, post personalizzato, cpost, cambio utensile, M6, G43, ciclo fisso, numeri di riga, modale, evento, variabile
from: 36ab8a38
---

Lo stesso percorso utensile va scritto in modo diverso per controlli diversi: con o senza numeri di riga, `M6` oppure una pausa, `G28` oppure `G53`, `M30` oppure `M2`. Un **post** è il breve testo che stabilisce come. I tre post integrati di PartCraft (in stile Fanuc, GRBL e LinuxCNC) sono scritti in questo formato, quindi un post proprio può partire da una copia di uno di essi.

Verificare l'output nel simulatore della propria macchina prima di tagliare, ed eseguirlo prima a vuoto sopra il grezzo. I post integrati scrivono esattamente ciò che scrivevano prima che esistesse questo formato (i test confrontano il loro output byte per byte su centinaia di programmi), ma nulla qui è stato provato sulla propria macchina, e un post modificato va verificato da chi lo cambia.

## Crearne uno

In Produzione, sotto **Post**:

- {{ui:Modifica post…}} su un controllo integrato apre **una propria copia** di quel post. Su un post proprio, apre quel post.
- {{ui:Nuovo post…}} parte da un piccolo post vuoto con tutti gli eventi.
- {{ui:Importa file di post…}} legge un file di testo `.cpost` (il file che si ottiene con **Salva come file…** nell'editor).

L'editor mostra il testo, una riga che indica se viene letto (e quale riga è errata), e il G-code che il post scrive mentre si digita. **Anteprima con** sceglie un piccolo programma di esempio che esegue ogni evento, oppure il programma di questo pezzo. {{ui:Salva}} conserva il post nel file del pezzo (fino a 20 post) e lo sceglie come controllo. I post viaggiano con il pezzo; per usarne uno in un altro pezzo, salvarlo come file e importarlo lì.

## Com'è un post

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

Le righe che iniziano con `//` e le righe vuote vengono ignorate. In cima ci sono le impostazioni; poi un blocco `on <event>` per ogni evento, chiuso con `end`. Un evento che si omette non scrive nulla.

| Impostazione | Significato |
|---|---|
| `post <id>` | L'id del post: lettere, cifre, `-` e `_` |
| `name <text>` | Ciò che mostra l'elenco dei controlli |
| `extension <ext>` | L'estensione del file: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … su ogni riga `emit`, oppure nessuno |
| `decimal-point yes` / `no` | `10.` invece di `10` (i commenti non riportano mai il punto) |
| `canned-cycles yes` / `no` | `no`: i fori sono scritti come i movimenti G0/G1 che rappresentano |
| `modal <group> <words>` | Parole di un gruppo (`modal motion G0 G1 G2 G3`) scritte solo quando cambiano |

## Eventi

Vengono eseguiti in quest'ordine per un programma: `start`; poi, per ogni operazione, `operation`, `tool-change` (quando cambia l'utensile), `spindle` (quando cambia la velocità), `approach` (il movimento fino al primo punto, prima del primo rapido), `coolant-on`, poi i suoi movimenti come `rapid`, `feed` e `arc`, e ogni ciclo fisso come `cycle-start`, un `cycle-hole` per foro e `cycle-end`; infine `end`.

Ogni evento può usare le variabili del proprio tipo di movimento, scritte `{name}`: il programma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), il grezzo (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'utensile (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'operazione (`op.name`, `op.type`), `rpm`, il punto di un movimento (`x`, `y`, `z`, `f`, e `moved`: vero quando un asse è cambiato), gli archi (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) e i fori (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Eventi e variabili** dell'editor mostra quale evento vede quali variabili. Stato che si può leggere e impostare: `cool`, `offset`, e `at.x`, `at.y`, `at.z`, `at.f` (gli ultimi valori scritti).

## Istruzioni

| Istruzione | Cosa fa |
|---|---|
| `raw TEXT` | Una riga esattamente come digitata (senza numero di riga) |
| `comment TEXT` | `(TEXT)` con i caratteri non ASCII e le parentesi rimossi |
| `emit WORD WORD …` | Una riga di parole; le parole che risultano vuote vengono omesse; nessuna parola, nessuna riga |
| `word WORD …` | Aggiunge parole alla riga in costruzione; un `emit` senza parole la chiude |
| `if EXPR` … `else` … `end` | Condizioni: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, altrimenti b) |
| `for tool in tools` … `end` | Una volta per ogni utensile usato dal programma |
| `set NAME EXPR` | Ricorda un valore (`set offset tool.number`) |
| `reset NAME …` | Dimentica le parole modali (un gruppo, una lettera di indirizzo come `Z`, oppure `at.z`) |
| `do rapid X Y Z` | Esegue l'evento `rapid` per un punto |

Una parola è testo digitato con gli spazi `{variable|filter}`. I filtri sono `upper`, `lower`, `pad:N` (riempimento con zeri), `cut:N` (primi N caratteri), `safe` (ASCII sicuro per i commenti) e `int`. Una parola che termina con `~` è **modale**: viene scritta solo quando è diversa da quella scritta per ultima (`G1~`, `X{x}~`). Una parola che termina con `~!` viene scritta ogni volta ed è comunque ricordata. Un nome che non è una variabile è testo semplice (`G81`, `mist`). I numeri sono arrotondati a 0.001 mm e scritti senza zeri finali.

## Cosa non può fare un post

Decide soltanto come vengono scritti i movimenti, nient'altro. Non può cambiare un percorso utensile, ordinare le operazioni, dividere un arco, aggiungere un asse, conoscere le corse o la cinematica della macchina, né fare aritmetica sulle coordinate (non c'è `+`). La tastatura (probing), i cicli di vita utensile e i cicli con sottoprogrammi, l'output per il 4° e il 5° asse e i codici di tornitura non sono implementati. Un file di post in stile `.cps` di un altro programma non può essere caricato: questo è un formato diverso, più semplice.
