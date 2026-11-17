---
title: La libreria di ingegneria
summary: Formule dei testi come script leggibili, in unità SI, ogni risultato con la sua fonte: flusso in tubi e canali, trasmissione del calore e scambiatori, parti in pressione, dinamica dei gas, proprietà di acqua e aria, materiali e unità verificate. Cosa serve ciascuno e dove si ferma.
keywords: ingegneria, libreria, unità, Darcy-Weisbach, Colebrook, Reynolds, fattore d'attrito, Dittus-Boelter, Gnielinski, NTU, efficacia, LMTD, aletta, Barlow, Lamé, bocchello, isentropico, Mach, flusso bloccato, acqua, aria, proprietà, materiale, fonti
from: 786ef967
---

La libreria di ingegneria è un insieme di script nella libreria dello spazio di lavoro Script (`craftlib/eng`). Ogni script è una funzione che si può leggere dall'alto in basso, con un'intestazione che indica il suo **metodo**, le sue **unità**, i suoi **limiti**, i suoi **riferimenti** e una **verifica** con un numero svolto. Usano unità SI in tutto e restituiscono grandezze che portano un'**unità** e una **fonte**, così una scheda dati può indicare da dove proviene ogni valore.

## Unità verificate

`to_si(10, 'bar', 'Pa')` converte un valore e rifiuta un'unità che misura altro (una lunghezza dove è attesa una pressione). `from_si`, `unit_convert(1, 'bar', 'psi')` e `unit_kind('W/(m K)')` ("conducibilità termica") funzionano allo stesso modo. `temp_k(25, 'C')` e `temp_from_k` convertono le temperature, che hanno un offset.

## Proprietà

- `fluid('water', T)` e `fluid('air', T, p)`: densità, viscosità, conducibilità, calore specifico, numero di Prandtl. Acqua da 0 a 100 °C, aria da 250 a 600 K; fuori da quel campo si ferma invece di estrapolare.
- `material('ss304')`: modulo di Young, coefficiente di Poisson, densità, snervamento, conducibilità, calore specifico, dilatazione: valori a temperatura ambiente dalle stesse schede tecniche di Simulazione. Un progetto reale usa i valori certificati del fornitore. Le curve in funzione della temperatura non sono ancora implementate.

## Flusso in tubi e canali

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminare, poi l'equazione di Colebrook per il flusso turbolento; l'intervallo da 2300 a 4000 non ha una formula affidabile e lo dichiara), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tubo circolare, tutto in una volta) e `rect_channel` (condotti rettangolari in laminare, con l'interpolazione di Shah e London).

## Trasmissione del calore

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (sceglie laminare o turbolento e indica la correlazione), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` e `ntu_for` (le relazioni efficacia-NTU per controcorrente, equicorrente, a fascio tubiero, a flussi incrociati e per un singolo flusso variabile) e `hx_size` (la dimensione UA che serve a un carico; indica quanto è possibile quando il carico non può essere soddisfatto).

## Parti in pressione

`allowable_stress` (snervamento diviso un coefficiente di sicurezza), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, sul criterio circonferenziale o di taglio) e `wall_sphere`. Sono margini da testo, **non un calcolo secondo un codice per recipienti in pressione**: nessun margine per la corrosione, nessun coefficiente di giunzione o di codice.

## Dinamica dei gas

`isentropic` (i rapporti a un numero di Mach), `mach_from_area`, `choked_flow`, `throat_area` e `exit_mach`, per un gas perfetto senza attrito, calore o urti.

## Verificare il risultato

`check_stress`, `check_thermal` e `check_flow` eseguono i risolutori di PartCraft per tensioni, conduzione e flusso su una parte generata dallo script, e leggono la tensione e lo spostamento massimi, le temperature e il flusso di calore, e la permeabilità di una rete di canali. Non modificano i risolutori. Le verifiche di tensione e temperatura usano i voxel, quindi una faccia curva è a gradini, e la tensione in uno spigolo interno vivo o sotto un carico puntuale dipende dalla dimensione del voxel.
