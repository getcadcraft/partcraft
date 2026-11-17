---
title: Solid FEM: verifica delle tensioni di un pezzo
summary: Attivare il componente aggiuntivo Solid FEM, creare la mesh di un pezzo, selezionare facce vincolate e un carico nella vista 3D, risolvere e leggere lo spostamento e la tensione di von Mises sul modello.
keywords: solid fem, elementi finiti, fea, tensione, von mises, spostamento, faccia vincolata, carico, pressione, gravità, frequenza naturale, forma modale, mesh, add-on
from: 8b7e6ba2
---

## Cosa si farà

Verificare un solido sotto un carico: dove si sposta e dove la tensione è più alta. Lo studio è lineare ed elastico, quindi è un ausilio alla verifica; l'ingegnere incaricato esamina i risultati.

## Passaggi

1. Scegliere {{ui:Impostazioni}} › {{ui:Add-on}} e attivare {{ui:Solid FEM}} (è disattivato finché non lo si attiva). Aprire la scheda {{ui:Solid FEM}} nel pannello di destra.
2. In {{ui:Materiale}} sceglierne uno, oppure {{ui:Personalizzato}} e digitare coefficiente di Poisson, densità e tensione di snervamento.
3. Premere {{ui:Aggiungi facce vincolate}}, fare clic sulle facce che sono trattenute nella vista 3D, quindi premere {{ui:Fine selezione}}.
4. Aggiungere un carico con {{ui:Aggiungi forza}}, {{ui:Aggiungi pressione}} oppure {{ui:Aggiungi gravità}} e selezionarne le facce nello stesso modo.
5. Premere {{ui:Crea mesh del pezzo}}, poi {{ui:Risolvi}}. Scegliere prima {{ui:Frequenze naturali}} sotto {{ui:Studio}} se si desiderano le frequenze.
6. Leggere {{ui:Risultati}} e {{ui:Avvisi}}, poi premere {{ui:Mostra sul modello}} per disegnare la tensione di von Mises, lo spostamento o una forma modale; {{ui:Rimuovi il grafico}} lo elimina.

## Note

- La pagina risolve fino a un numero fisso di elementi; la riga di stato indica quando la dimensione dell'elemento è troppo fine.
- La tensione nelle facce vincolate, nei punti di carico e negli spigoli vivi cresce man mano che la mesh viene affinata. Affinare e confrontare prima di fidarsi di un valore massimo.
- Ogni modifica è un passaggio di annullamento, e le impostazioni vengono salvate nel file del pezzo.
- Per gli studi di snervamento e di contatto vedere [Verificare tensione e deformazione](topic:simulation).
