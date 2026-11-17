---
title: Scrivere un generatore
summary: Un generatore è uno script CraftScript, Lua o Python con righe di commento che dichiarano i suoi input. Come gli input diventano un modulo, cosa deve lasciare lo script (corpo, foglio dati, problemi), un piccolo esempio completo e come aprire lo script come generatore.
keywords: generatore, scrivere, script, craftscript, intestazione, input, @input, @generator, corpo, foglio dati, problemi, to_body, mfg_check, esempio, reticolo, campo
from: ed8a5ed8
---

Un generatore è uno script normale ([CraftScript](topic:craftscript), Lua o Python) con alcune righe di commento in cima. PartCraft legge i commenti e crea il modulo; lo script legge gli input come variabili già impostate.

## L'intestazione

Inserire queste righe come commenti (`%` in CraftScript, `--` in Lua, `#` in Python):

```
% @generator Scambiatore di calore
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Portata massica"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superficie"
% @input solid: = true
% @input note: = "testo"
```

Un input è `nome: unità = valore predefinito`, poi facoltativamente un intervallo `[min .. max]` (i numeri restano compresi), un elenco di scelte `{a, b, c}` e un'etichetta tra virgolette. L'unità è solo un'etichetta per il modulo: **il valore arriva in quella unità**, quindi uno script che vuole il SI lo converte, e `to_si(value, 'kg/s', 'kg/s')` verifica anche che l'unità significhi ciò che si pensa. Un nome è composto da lettere, cifre e underscore; `body`, `sheet` e `problems` sono riservati.

## Cosa lascia lo script

| Variabile | Contenuto |
|---|---|
| `body` | **Obbligatoria.** Una mesh di superficie, di solito da `[body, info] = to_body(field, h)`. Viene riparata e verificata al termine dell'esecuzione. |
| `sheet` | Facoltativa. Una struct: ogni campo è un numero o un testo, oppure una struct con `value`, `unit`, `ref` e `note`. Diventa il foglio dati. |
| `problems` | Facoltativa. La cella `problems` di `mfg_check(field, 'sls', struct(), h)`, oppure voci proprie. Vanno ai controlli e all'elenco Problemi. |

## Un piccolo esempio completo

```
% Un cubo cavo con una parete.
% @generator Cubo cavo
% @input side: mm = 12 [4 .. 40] "Lato"
% @input wall: mm = 1.5 [0.5 .. 5] "Parete"
% @input h: mm = 0.5 [0.25 .. 2] "Dimensione del voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'della mesh');
```

Crea un cubo chiuso, e il controllo segnala la cavità interna sigillata come errore per un processo a polvere. Impostare la dimensione del voxel `h` al massimo a un terzo della parete più sottile desiderata: sotto circa tre voxel una parete non è affidabile.

## Campi

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un solido di rotazione da un profilo), `tpms` (superfici gyroid, Schwarz P e diamond, con una dimensione di cella e uno spessore che possono variare lungo il pezzo), `lattice` e `lattice_beams`, `along` (un canale circolare lungo un percorso), le booleane `field_union`, `field_intersect`, `field_subtract`, la `field_blend` morbida, e `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dà la distanza con segno nei punti (negativa all'interno), `field_voxel` fornisce i voxel ai solutori. [Campi](topic:fields) spiega di cosa si tratta.

Limiti da conoscere: una parete a foglio più spessa di circa un quarto della cella chiude i canali; un elemento più sottile di circa tre voxel può strozzarsi; `along` unisce coni circolari, quindi un raggio che cambia rapidamente lascia un rigonfiamento (usare `field_revolve` per un profilo).

## Aprire lo script come generatore

Nello spazio di lavoro {{ui:Engineer}} fare clic su {{ui:Open}} e scegliere il file. Uno script senza una riga `@generator` o `@input` viene rifiutato: non ci sarebbe nulla da impostare. Il generatore viene conservato in questo browser (fino a 20) e {{ui:Remove}} lo elimina. Un corpo avviato da esso contiene una copia dello script, quindi il pezzo non dipende da quest'ultimo.

Un file può anche contenere più generatori: un bundle JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
