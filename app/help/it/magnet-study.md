---
title: Studio magnetico di uno schizzo
summary: Trasformare i profili chiusi dei propri schizzi in un modello magnetico piano (ferro, magneti, bobine), vedere il campo e leggere la forza e la coppia su un corpo.
keywords: magnete, magnetico, magnetostatico, campo, densità di flusso, forza, coppia, bobina, giogo, ferro, curva B-H, magnete permanente, attuatore, motore, solenoide, maxwell
from: 604efc3b
---

Usare {{ui:Altro}} nella barra degli strumenti Feature › {{ui:Studio magnetico degli schizzi…}} su una parte che ha degli schizzi. Ogni forma chiusa negli schizzi selezionati è una regione di un modello piano; lo studio calcola il campo magnetico B, la forza e la coppia su un corpo scelto.

## Passaggi

1. Disegnare i corpi come forme chiuse negli schizzi: un giogo di ferro, un magnete, una bobina. I corpi che si toccano condividono uno spigolo, quindi vanno in schizzi diversi; i corpi separati, o uno dentro l'altro (una finestra in un giogo), possono stare nello stesso schizzo. Tenere gli schizzi sullo stesso piano.
2. Aprire lo studio e spuntare gli schizzi da usare. Ogni profilo chiuso ottiene una riga, numerata. Indicare cosa è: {{ui:Aria}}, {{ui:Ferro}} (una permeabilità, oppure una curva B–H inserita come coppie di B in tesla e H in A/m), un {{ui:Magnete permanente}} (Br in tesla, la sua direzione come angolo rispetto all'asse x dello schizzo, e la sua permeabilità di rinculo) oppure una {{ui:Bobina}} (la corrente totale attraverso il suo profilo, spire per ampere; il segno indica il verso di percorrenza).
3. Spuntare {{ui:Forza e coppia su questo corpo}} per i corpi su cui si vuole. Indicare la profondità della parte fuori dallo schizzo.
4. Scegliere la mesh e l'aria intorno al modello, poi {{ui:Esegui}}.

## Cosa si dovrebbe vedere

- La densità di flusso |B| sul modello, dal blu scuro (basso) al rosso (alto), con i profili numerati.
- Il campo più intenso e dove si trova, il numero di triangoli e, per ogni corpo spuntato, la forza lungo x e y e la coppia attorno al suo centro, per la profondità indicata.
- {{ui:Salva i risultati (CSV)}} scrive i numeri.

## Da sapere

- È un modello piano e stazionario: tutto è riferito a metro di profondità, senza correnti parassite né isteresi, e un magnete è una retta di rinculo (non può essere smagnetizzato).
- Il modello sta in una scatola d'aria il cui bordo è una parete. Confrontare due dimensioni della scatola d'aria e le mesh Normale e Fine: una forza ricavata dal campo intorno a un corpo è buona solo quanto la mesh in quel punto.
- Il ferro con la sola permeabilità non va mai in saturazione. Quando il campo supera 2 T lo studio mostra un ⚠ nell'elenco dei problemi: assegnare al ferro una curva B–H. I numeri di una nuova riga sono esempi (ferro μr 2000, un magnete da 1.2 T), non i dati di un materiale reale.
- Un corpo ha bisogno di spazio intorno per subire la forza: se un altro corpo è troppo vicino, lo studio lo segnala.
- Uno strumento di supporto al disegno, non un'approvazione ingegneristica.

## Passo successivo

- [Campi magnetici in 2D (esercitazione)](topic:magnetic-fields-2d)
