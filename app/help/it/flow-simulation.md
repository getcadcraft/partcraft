---
title: Simula il flusso dei fluidi (studio Flow)
summary: Flusso attraverso i canali interni a una parte o intorno a essa in un box: ingressi, uscite, aria, acqua o un fluido personalizzato, poi velocità e pressione su un piano di sezione mobile, linee di flusso, pressione superficiale, perdita di pressione, bilancio di massa, resistenza e portanza, con ciò che il metodo laminare può e non può dire.
keywords: flusso, CFD, fluido, fluidodinamica computazionale, simulazione di flusso, aria, acqua, viscosità, densità, numero di Reynolds, laminare, turbolento, perdita di pressione, perdita di carico, ingresso, uscita, coperchio, tappo, velocità, portata, portata volumetrica, litri al minuto, pressione statica, linee di flusso, piano di sezione, resistenza aerodinamica, portanza, coefficiente di resistenza, coefficiente di portanza, area frontale, flusso esterno, flusso interno, tubo, canale, collettore, ugello, Lattice Boltzmann, residuo, convergenza
from: 7dc75f29
---

Uno studio **Flow** calcola come un fluido si muove attraverso i canali interni alla parte (**interno**) o intorno a essa (**esterno**). Per impostazione predefinita è **laminare, incomprimibile, isotermo e newtoniano**: flusso regolare di un fluido la cui densità e viscosità restano costanti, senza calore, senza turbolenza e senza gravità. È disponibile anche un modello turbolento **sperimentale**, utile solo per gli schemi qualitativi (vedi sotto). Lavora sulle facce con nome che il kernel mesh assegna alla parte (vedi [Il kernel mesh](topic:solid-kernels)).

Scegliere **Simulazione** nella casella **Area di lavoro**, premere **Nuovo studio** se non ce n'è uno, e impostare **Tipo** su **Flow (CFD)**. **Modello di flusso** è **Laminare** (predefinito) oppure **Turbolento (Spalart–Allmaras, sperimentale)**: vedi **Flusso turbolento (sperimentale)** più sotto. Le impostazioni strutturali dello studio vengono mantenute, quindi è possibile tornare indietro. Le impostazioni del flusso sono salvate nel file della parte e ogni modifica può essere annullata.

## Scegliere il fluido e le celle

- **Fluido**: aria o acqua a 20 °C, oppure **Personalizzato** con una densità (kg/m³) e una viscosità dinamica (Pa·s) a scelta. L'aria usa la legge dei gas ideali e la legge di Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); l'acqua usa i valori IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Dimensione cella**: lo spazio del fluido è riempito di cubi uguali. Lasciare vuoto per una dimensione automatica; il pannello mostra la griglia. Ogni apertura e ogni canale dovrebbero essere **larghi almeno da 8 a 10 celle** per avere valori utili; celle più piccole sono più accurate ma più lente (il doppio di fine significa circa 16 volte il lavoro).
- **Pareti**: **Interpolata** segue le pareti curve tra le celle (predefinito); **Rimbalzo** tratta le pareti come la scala dei cubi.

## Flusso all'interno della parte

Lo spazio del fluido deve essere chiuso. Aggiungere un **Ingresso** e un'**Uscita** nel pannello, poi fare clic sulle loro facce nella vista:

1. **La faccia piana attorno a un'apertura**: il bordo all'estremità di un tubo, la faccia di una bocchetta. PartCraft chiude lì il foro dell'apertura con un coperchio. Ogni foro su quella faccia appartiene a quell'apertura, quindi quando un ingresso e un'uscita si aprono sulla stessa faccia, modellare invece un tappo sottile su uno dei due.
2. **La faccia interna di un tappo**: come in altri strumenti CAD, modellare una lastra sottile (un'estrusione) sopra l'apertura e selezionare la sua faccia che tocca il fluido.

Per un ingresso impostare una **velocità** (m/s, uniforme sull'apertura, entrante nella parte) oppure una **portata volumetrica** (L/min). Per un'uscita impostare la **pressione statica** (Pa, relativa). Se un'apertura è lasciata aperta, oppure una parete è più sottile di una cella, l'interno si unisce all'esterno e il calcolo si arresta con il messaggio "Nessuno spazio fluido chiuso".

## Flusso intorno alla parte

Impostare **Flusso** su **Esterno**, la **Velocità**, la direzione verso cui scorre, e quanto il box si estende a monte, a valle e lateralmente (vuoto: 1, 3 e 1 volte la dimensione maggiore della parte). La faccia del box da cui entra il flusso è un ingresso, quella da cui esce è un'uscita a 0 Pa, e le facce lungo il flusso sono a scorrimento libero. Un box troppo piccolo comprime il flusso intorno alla parte e aumenta la resistenza. **Area di riferimento** è l'area usata dai coefficienti di resistenza e portanza (vuoto: l'area frontale della parte vista lungo il flusso); la portanza è misurata lungo +Y, a meno che non si scelga un'altra direzione.

## Calcolo e lettura dei risultati

Premere **Calcola**. Il calcolo gira in background con il numero di passi, il residuo e un grafico del residuo; **Ferma** lo termina. Si arresta quando il residuo (quanto il campo di velocità cambia a ogni passo) è sotto il target e la perdita di pressione o la resistenza si sono stabilizzate. Se raggiunge prima il limite di passi, il pannello indica **Non convergente** in rosso: i valori sono l'ultimo stato, non una soluzione stazionaria.

- **Piano di sezione**: velocità o pressione statica su un piano attraverso il modello; scegliere la sua normale (X, Y o Z) e trascinare il cursore per spostarlo. Passare sopra con il puntatore per leggere i valori.
- **Linee di flusso**: dagli ingressi (interno) oppure da un rastrello lungo l'estremità d'ingresso del box nel piano di sezione (esterno).
- **Parte**: solida, trasparente (per vedere il piano all'interno), pressione superficiale oppure nascosta.
- **Tabella**: numero di Reynolds, perdita di pressione (pressione statica media agli ingressi meno quella alle uscite), portata e pressione media di ogni apertura, forza sulla parte, resistenza e portanza con i rispettivi coefficienti e area di riferimento (esterno), bilancio di massa (flusso in ingresso contro flusso in uscita), mesh e solutore.

## Flusso turbolento (sperimentale)

**Modello di flusso › Turbolento (Spalart–Allmaras, sperimentale)** risolve il flusso turbolento mediato nel tempo (RANS stazionario): il modello Spalart–Allmaras fornisce una viscosità turbolenta in ogni cella, e le celle vicino alle pareti usano la legge di Spalding per la parete invece di risolvere lo strato sottile. È completamente turbolento ovunque (nessuna regione laminare, nessuna transizione).

**Non ha superato i suoi controlli di accuratezza.** Il pannello, i risultati e la tabella lo indicano per ogni studio turbolento, e l'avviso non può essere chiuso. Usarlo per **schemi di flusso qualitativi** (dove il flusso si separa, ricircola o accelera), **non per numeri di progetto**.

| Verifica | Riferimento | Risultato |
|---|---|---|
| Attrito di un canale piano, prima cella a y⁺ 49 / 98 | correlazione di Dean | +3.3 % / +4.7 % |
| Canale con parete risolta (y⁺ ≈ 3), Re_τ 180: velocità di massa | DNS di Moser, Kim & Mansour | −1 % |
| Canale piano, y⁺ 7–15 oppure 190–380 | correlazione di Dean | da +9 a +22 % |
| Attrito in un tubo attraverso le celle del cubo, pienamente sviluppato, 10–30 celle di diametro | Colebrook | 30–34 % troppo alto |
| Riattacco dietro un gradino rivolto all'indietro, 6–14 celle per altezza del gradino | Driver & Seegmiller, 6.26 altezze del gradino | 21–39 % troppo corto |

I risultati migliorano solo lentamente con celle più fini. Dopo il calcolo la tabella mostra la **y⁺ della prima cella** (minimo, medio e massimo sulle celle di parete) e avvisa al di fuori dell'intervallo verificato da 1 a 400; mirare a circa 30–300. **Tempo di calcolo:** le celle automatiche sono dimensionate per alcuni minuti su un core di laptop al massimo (il pannello mostra il caso peggiore per la griglia e il limite di passi; un tubo piccolo si stabilizza in meno di 20 secondi). Dimezzare la dimensione della cella costa circa 16 volte tanto. Le forze sulla parte derivano da un bilancio della quantità di moto sulle aperture o sul box.

**Lavoro svolto finora:** le celle di parete ora fanno corrispondere il proprio sforzo di taglio alla legge di parete, il che ha ridotto gli errori del tubo e del gradino ai valori sopra indicati senza modificare i risultati del canale piano. Non è bastato per numeri di progetto. Il passo successivo è avere celle più fini vicino alle pareti.

## Che cosa può e non può dire

- **Il modello laminare** è solo laminare. Nei tubi il flusso diventa turbolento sopra un numero di Reynolds di circa 2,000–4,000; dietro corpi tozzi la scia inizia a generare vortici sopra circa 50. Il pannello avvisa in questi punti. Un risultato laminare per un flusso turbolento sottostima la perdita di pressione e sbaglia la resistenza. Il modello turbolento sperimentale (sopra) copre il flusso turbolento in modo qualitativo; i suoi numeri non sono ancora affidabili.
- **Metodo:** il metodo Lattice Boltzmann (D3Q19, collisione a due tempi di rilassamento) portato a uno stato stazionario. All'interno è leggermente comprimibile; PartCraft mantiene le variazioni di densità entro pochi punti percentuali. Se il flusso è troppo veloce per le celle, il calcolo non parte e indica di quanto le celle devono essere più piccole.
- **Verificato contro:** flusso di Hagen–Poiseuille in un tubo attraverso una parte (gradiente di pressione entro l'1 % con 20 celle di diametro), la cavità guidata dal coperchio di Ghia et al. (entro lo 0.75 % della velocità del coperchio) e il benchmark del cilindro di Schäfer–Turek (resistenza entro l'1 % con 10 celle per diametro).
- Non modellato: trasferimento di calore, turbolenza con precisione di progetto (il modello turbolento è sperimentale), superfici libere, cavitazione, gravità, parti in movimento, fluidi non newtoniani, pareti scabre. Versione di laboratorio: verificare i risultati importanti in altro modo.
