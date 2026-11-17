---
title: Il linguaggio CraftScript
summary: CraftScript in una pagina: matrici, intervalli e indicizzazione, operatori, flusso di controllo, funzioni, struct e celle, commenti, echo, errori e limite di passi, e differenze rispetto a MATLAB.
keywords: CraftScript, linguaggio, sintassi, matrice, array, vettore, tensore, indice, end, due punti, intervallo, operatore, elemento per elemento, trasposta, if, for, while, switch, try, catch, funzione, funzione anonima, struct, cella, commento, echo, punto e virgola, MATLAB, Octave, porting
from: d072b7d5
---

CraftScript è un linguaggio a matrici scritto per essere letto come MATLAB, quindi la maggior parte dei codici numerici classici (per esempio il codice di ottimizzazione topologica da 88 righe) gira con piccole modifiche. Viene eseguito nell'[area di lavoro Script](topic:craftscript) e dalla riga di comando.

## Valori

| Tipo | Esempio | Note |
|---|---|---|
| Numero, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Ogni numero è un array (un 1×1). Gli array sono memorizzati colonna per colonna, fino a 8 dimensioni |
| Logico | `A > 2`, `true` | Array di vero/falso; utilizzabili come indici |
| Testo | `'beam'`, `"beam"` | |
| Matrice sparsa | `sparse(i, j, v, n, n)` | Per matrici di rigidezza |
| Mesh, campo, modello | `hexGrid(…)`, `part()`, `load('part.stl')` | Ciò che disegna `show` |
| Struct | `s.E = 210e3` | Campi con nome |
| Cella | `c = {1, 'two', [3 4]}` | Un elenco di valori qualsiasi |
| Handle di funzione | `f = @(x) x.^2` | |

## Array e indicizzazione

- Intervalli: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- L'indicizzazione parte da 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (un'intera colonna), `A(:)` (tutto come un'unica colonna), `v(v > 0)` (indicizzazione logica).
- Assegnare oltre la fine fa crescere l'array, come in MATLAB: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` sono operazioni matriciali (`A \ b` risolve); `.* ./ .^` lavorano elemento per elemento. `'` calcola la trasposta.
- Confronti `== ~= < <= > >=`; logica `& | ~` (elemento per elemento) e `&& ||` (cortocircuito).

## Flusso di controllo e funzioni

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Le funzioni vanno in uno script dopo i suoi comandi, oppure nella propria scheda di script con il nome della funzione:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nome viene cercato in quest'ordine: una variabile, uno script di questa parte con quel nome, una funzione della libreria, una funzione integrata.

## Echo, commenti, output

- Un'istruzione senza `;` stampa il suo valore; `;` la mantiene silenziosa.
- `%` avvia un commento; `%{` e `%}` su righe proprie commentano le righe comprese tra loro.
- `disp(x)`, `fprintf('%g\n', x)` e `display(x)` stampano sulla console.

## Errori e limiti

- Gli errori dicono in parole semplici cosa non ha funzionato e indicano la riga (e la catena delle chiamate di funzione).
- Ogni esecuzione ha un limite di passi (Opzioni di esecuzione nel pannello); un ciclo infinito si ferma con un messaggio, oppure premere {{ui:Ferma}}.
- Gli array contengono fino a 134 milioni di valori ciascuno.

## Non come MATLAB

- I comandi di grafico mettono le opzioni nella chiamata: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` e simili sono accettati e non fanno nulla.
- `input` e `keyboard` non sono supportati: uno script non può fermarsi per fare una domanda.
- Non ci sono toolbox; ciò che c'è sono la [libreria di analisi](topic:craftscript-library) e le funzioni integrate.
