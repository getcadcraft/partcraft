---
title: Script e riga di comando
summary: Il formato script di PartCraft (.pcscript) che scrive un'intera parte come testo leggibile, e lo strumento a riga di comando partcraft che costruisce, modifica, sposta la barra di rollback e verifica le parti senza schermo.
keywords: script, pcscript, testo, riga di comando, cli, terminale, batch, automatizzare, verifica, lint, costruire, esportare, controllo di versione, diff, script parametrico
from: c56df222
---

Modellare con cura dipende più dalla disciplina che dai pulsanti. Una parte scritta come testo può essere letta, revisionata, confrontata riga per riga e ricostruita da uno script. PartCraft funziona in entrambe le direzioni: qualsiasi parte può essere scritta come script, e uno script costruisce la parte.

## Nell'app

Nella scheda {{ui:Parametri}}, sotto **Script**:

- {{ui:Salva come script}} scarica la parte aperta come `<nome>.pcscript`.
- {{ui:Apri script}} costruisce una parte da un file `.pcscript`. Un errore viene segnalato con il numero di riga e nulla viene sostituito.

## Il formato script

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

Le regole:

- Una riga a margine sinistro avvia un'istruzione: `pcscript`, `part`, `param`, un tipo di feature (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` e i tipi più recenti) seguito dal suo nome, oppure `rollback <feature>`.
- Le righe rientrate sono le impostazioni dell'istruzione sopra. Un'impostazione da sola (`through`, `reverse`, `suppressed`) significa sì.
- Un'impostazione numerica è un numero, oppure `=` seguito da un'espressione, che forma un'equazione: `depth = thick`.
- In uno schizzo: `on` indica il piano (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); la geometria è `point <nome> x, y`, `line <nome> <punto> <punto>`, `circle <nome> <centro> <raggio>`, `arc <nome> <centro> <inizio> <fine>` (antiorario) oppure `spline <nome> fit|control <punti>`; le relazioni sono il loro tipo e i nomi che collegano (`O` è l'origine); una quota termina con il suo valore o con `= espressione`.
- Le impostazioni facoltative di una riga di geometria o di relazione vanno tra parentesi quadre alla fine, separate da `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` avvia un commento (all'inizio di una riga o dopo uno spazio). I nomi con spazi vanno tra "virgolette doppie".
- Gli id delle feature partono da f1 nell'ordine in cui sono scritti. I riferimenti a spigoli e facce li usano, per esempio `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Le impostazioni per cui il formato non ha parole vengono scritte `json` seguito da un valore; vengono rilette così come sono.

Salvato dall'app, lo script include ogni impostazione, quindi si apre come la stessa parte. Un solido STEP importato viene scritto dentro lo script dall'app e, dalla riga di comando, come file `.step` separato indicato da `step-file`.

## Lo strumento a riga di comando

Lo strumento funziona su un computer con Node.js 24, a partire da una copia del sorgente di CadCraft: `node tools/partcraft-cli/partcraft.mjs <comando>`. È uno strumento per sviluppatori e usa gli stessi moduli dell'app. Le parti sono file `.partcraft.json` oppure script `.pcscript`.

| Comando | Cosa fa |
|---|---|
| `info <part>` | Feature, parametri, barra di rollback, volume e dimensioni del solido costruito |
| `params <part>` | Ogni parametro ed equazione con il suo valore |
| `set <part> width=150 Base.depth==thick` | In avanti: modifica i parametri, collega numeri (`==` o un'espressione), imposta numeri semplici |
| `drive <part> Base.depth=12` | All'indietro: risolve il parametro dietro un numero guidato (`--prefer width` ne sceglie uno) |
| `build <part> --out x.step` | Scrive `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` oppure una macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Un file per ogni riga della tabella di progetto |
| `variants <part> --out-dir d` oppure `--zip f.zip` | Ogni configurazione come STEP, IFC, DWG e un'anteprima, una tabella delle varianti e un elemento della libreria (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vedi [Creare un pacchetto di varianti](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Da script a parte |
| `to-script <part> -o part.pcscript` | Da parte a script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Sposta la barra di rollback nel file |
| `check <part> [--strict]` | La verifica di disciplina (sotto) |

`build` accetta anche `--set nome=valore` (solo per questa costruzione) e `--upto <feature>`. Ogni comando accetta `--json`. Codici di uscita: 0 tutto a posto, 1 problema trovato, 2 comando digitato male. Uno script non viene mai riscritto sul posto: usare `-o` per salvare una copia modificata.

## La verifica

`check` segnala ciò che rende una parte difficile da modificare in seguito:

| Rilievo | Conta come |
|---|---|
| Uno schizzo sovradefinito (relazioni in conflitto o ripetute) | errore |
| Una feature che non si costruisce | errore |
| Un parametro o un'equazione con errore, oppure parametri che si usano a vicenda | errore |
| Uno schizzo sottodefinito, con i suoi gradi di libertà | avviso |
| Numeri digitati direttamente in feature e quote che nessun parametro guida | avviso |
| Un parametro che nessuno usa | avviso |
| Una feature soppressa; la barra di rollback non è alla fine | avviso |

`--strict` trasforma ogni avviso in errore, così uno script di costruzione può rifiutare una parte che non è completamente guidata.

:::note
La macro di output `.swb` è pensata per il modellatore di parti usato dalla maggior parte delle officine: eseguita dentro quel programma, costruisce lì la parte. Qui non è stata eseguita in quel programma (non è disponibile sui nostri server), quindi va considerata non testata.
:::
