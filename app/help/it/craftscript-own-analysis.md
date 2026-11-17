---
title: Scrivere un'analisi propria
summary: Costruire un'analisi come script nell'area di lavoro Script: creare la mesh della parte, assemblare e risolvere, mostrare il campo e un grafico di convergenza, verificare il risultato con un calcolo a mano, e tenere i passaggi come script separati che condividono variabili.
keywords: analisi propria, analisi personalizzata, script FEA, elementi finiti, assemblaggio, rigidezza, condizioni al contorno, risoluzione, pcg, sparsa, campo, post-elaborazione, convergenza, verifica, calcolo a mano, controllo, flusso di lavoro
from: 0f471a8e
---

Un'analisi nell'area di lavoro Script è composta da alcuni script brevi che si passano le variabili a vicenda. Partire da una funzione della [libreria](topic:craftscript-library) vicina a ciò che serve, creare una copia e modificarla; oppure costruirne una da zero come sotto.

## 1. Una mesh

```
model = part();                  % la parte che si sta modellando, come modello
m = tetmesh(model, 4);           % tetraedri di circa 4 mm di lato
show(m)
```

Verificare la mesh nella vista prima di proseguire: {{key:F}} adatta la vista, l'{{ui:occhio}} in **Mostrati** nasconde la parte.

## 2. Assemblare e risolvere

Scrivere il ciclo sugli elementi nello script (si legge come il manuale), e lasciare le parti pesanti alle funzioni integrate: matrici degli elementi, assemblaggio sparso da triplette, e il solutore del gradiente coniugato con un precondizionatore. Una funzione della libreria come `static_tet` (quando la libreria la include) è un esempio completo da cui copiare.

## 3. Mostrare il risultato

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % un valore per nodo
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- L'intervallo della legenda può essere digitato o riportato a {{ui:Auto}}.
- Fare clic sulla mesh per leggere i valori in un nodo.
- Un grafico che mantiene lo stesso `'id'` viene aggiornato sul posto: stampare e tracciare dentro il ciclo per seguire la convergenza.

## 4. Verificarlo

Confrontare con qualcosa che si conosce: la freccia della punta di una mensola rispetto a PL³/3EI, una piastra con foro rispetto al suo fattore di concentrazione delle tensioni, le reazioni rispetto ai carichi. Scrivere la verifica come script a sé, così viene rieseguita dopo ogni modifica:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Conservarlo

- Ogni passaggio può essere una propria scheda di script: condividono le variabili, quindi si eseguono uno dopo l'altro.
- Gli script sono salvati nella parte. Selezionare **Salva le variabili con la parte** nella scheda Variabili per conservare anche i risultati (fino a 32 MB).
- {{ui:Salva}} nel gruppo Script scarica uno script per condividerlo; {{ui:Apri}} lo importa.
