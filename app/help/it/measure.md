---
title: Misurare distanze, angoli e massa
summary: Cliccare due elementi nella vista per la distanza minima, l'angolo e ΔX ΔY ΔZ; leggere la lunghezza di uno spigolo, il diametro di un foro, l'area di una faccia o le coordinate di un punto; ottenere volume, massa, centro di massa e inerzia di una parte o di un assieme.
keywords: misura, distanza, distanza minima, angolo, lunghezza, raggio, diametro, area, coordinate, delta, ispezione, proprietà di massa, massa, peso, centro di massa, inerzia, momento d'inerzia, densità, materiale
from: 20bda0b7
---

**Misura** funziona sul modello in ogni area di lavoro (Progettazione, Forma, Simulazione, Generativa, Produzione) e in un assieme. Si trova nel menu {{ui:Viste}} del gruppo {{ui:Vista}}, oppure premere {{key:M}}. Una scheda si apre in alto a sinistra della vista.

## Misurare un elemento

Fare clic su un vertice, uno spigolo o una faccia. Il pannello mostra:

- **Un punto** (un vertice, il punto medio di uno spigolo o il centro di un cerchio): le sue X, Y, Z.
- **Uno spigolo**: retto, circolare o curvo, e la sua lunghezza; per un cerchio anche il raggio, il diametro e il centro.
- **Una faccia**: piana, cilindro, cono e così via, e la sua area; la normale di una faccia piana; il raggio e il diametro di un cilindro (la misura di un foro). Le aree sono quelle delle facce della mesh costruita dal kernel a mesh.
- **Il corpo intero**: tenere premuto {{key:Shift}} e fare clic sulla parte. Si ottengono volume, area, massa e inerzia (vedi sotto).

Il puntatore aggancia vertici, punti medi degli spigoli e centri dei cerchi entro 10 pixel; un piccolo punto blu mostra l'aggancio prima del clic. Per selezionare il centro di un foro, puntare al centro del foro; per selezionarne il bordo (il cerchio), puntare sul bordo.

## Misurare tra due elementi

Fare clic su un secondo elemento. Il pannello aggiunge:

- **Distanza minima** e i due punti più vicini, disegnati nella vista con una linea fra di essi.
- **ΔX, ΔY, ΔZ** dal primo punto più vicino al secondo.
- **Angolo** tra due facce piane (tra le loro normali, 0–180°), tra due spigoli retti o assi (0–90°), oppure tra uno spigolo e una faccia.
- **Distanza tra i piani** per due facce piane parallele, **Centro a centro** per due cerchi o fori, **Asse ad asse** per due fori o cilindri paralleli.

Un terzo clic avvia una nuova coppia. {{key:Esc}} cancella le selezioni; un altro {{key:Esc}} (o {{ui:Chiudi}}) chiude Misura. {{ui:Copia}} mette i risultati negli Appunti come testo separato da tabulazioni, pronto da incollare in un foglio di calcolo.

### Quanto è preciso

PartCraft costruisce la parte con il kernel a mesh, quindi le distanze sono calcolate sulle facce della mesh e il pannello indica **approssimata: sulle facce**: corrette per facce piane e tra vertici, leggermente imprecise per quelle curve. Un'impostazione **Curve** più fine le avvicina. La misura esatta sulle superfici vere richiede un kernel esatto: non ancora implementato in questa versione.

## Proprietà di massa

Scegliere {{ui:Proprietà di massa}} nel pannello o nel menu {{ui:Viste}}. Su una parte, scegliere un **Materiale** nel pannello (acciaio, alluminio, plastiche e altri con le loro densità abituali). In un assieme ogni parte usa il materiale impostato nelle sue proprietà (selezionare la parte, poi **Materiale**), e il risultato vale per tutte le parti insieme.

Il pannello mostra massa, volume, area, centro di massa, il tensore d'inerzia (Ixx, Iyy, Izz e i prodotti Ixy, Iyz, Ixz, in kg·mm², rispetto al centro di massa lungo gli assi del mondo) e i momenti principali. Senza materiale mostra gli stessi valori per unità di densità (mm⁵) e nessuna massa.

I valori sono esatti per il solido tassellato costruito dal kernel a mesh (le facce curve come facce piane), quindi una parte tonda risulta un po' bassa, e il pannello lo dice. Le densità dei materiali sono valori tipici dei manuali; una lega o un grado reale può differire di qualche per cento.

## Limiti

- L'aggancio può trovare un punto nascosto dietro altra geometria; verificare nel pannello che dica ciò che si intendeva.
- Misura si chiude quando si apre uno schizzo o la tavola del disegno, o si cambia area di lavoro.
