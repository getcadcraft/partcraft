---
title: Creare un pacchetto di varianti dalle configurazioni
summary: Costruire ogni configurazione di una parte, o alcune scelte, in un colpo solo come STEP, IFC, DWG e un'anteprima ciascuna, con una tabella dei loro parametri e la parte come un elemento della libreria con le sue varianti.
keywords: pacchetto di varianti, varianti, configurazioni, famiglia di parti, esportazione in serie, ogni misura, step, ifc, dwg, anteprima, tabella, csv, json, libreria, configuratore, configuratore di prodotto, catalogo, item json
from: 9a6db99f
---

## Cosa si farà

Consegnare **ogni misura di una parte in una sola volta**: un file STEP, IFC e DWG e un'immagine per ogni configurazione, una tabella che dice cos'è ciascuna, e un elemento della libreria che le mette tutte su una pagina.

Serve prima una parte con **configurazioni** (vedi [Configurazioni e tabelle di progetto](topic:design-tables)). Una configurazione che disattiva una feature, come una piastra con e senza fori, diventa una variante a sé.

## Passi

1. Aprire la parte. Nella scheda {{ui:Parametri}}, trovare **Configurazioni**.
2. Cliccare {{ui:Pacchetto di varianti…}}.
3. Spuntare le configurazioni da costruire (sono tutte spuntate) e i file da scrivere: STEP, IFC, DWG, un'anteprima e l'elemento della libreria.
4. Cliccare {{ui:Crea il pacchetto}}. La riga di stato conta le varianti man mano che vengono costruite; la parte non viene modificata.
5. Viene scaricato un unico zip: `<part> variants.zip`.

## Cosa contiene lo zip

| File | Cos'è |
|---|---|
| `<name>.step` | La configurazione come solido STEP. |
| `<name>.ifc` | IFC4, un elemento con il corpo costruito e i parametri della parte come proprietà; il valore è quello proprio di quella configurazione. |
| `<name>.dwg` | Le viste anteriore, superiore, destra e isometrica come tavola di disegno a grandezza reale. |
| `<name>.svg` | Un disegno a linee isometrico della configurazione. |
| `variants.csv`, `variants.json` | La tabella dei parametri: id, nome e valore di ogni parametro per ogni variante, le feature che disattiva, i suoi file, il suo volume e le sue dimensioni. |
| `<part>.item.json` | La parte come un elemento della libreria con le sue varianti (vedi sotto). |
| `README.txt` | Cosa è stato creato, le note qui sotto e ciò che non è stato costruito. |

I file prendono il nome dalla configurazione. Una configurazione che non si costruisce (una feature che non può essere realizzata con quei valori) viene esclusa dai file e dalla tabella, elencata nel README e in un messaggio dopo il salvataggio dello zip; le altre vengono comunque scritte.

## Da sapere

- **STEP** è esatto quando il kernel esatto è attivo nella propria build. Altrimenti lo STEP è a facce (triangoli piatti), e il README lo dice.
- **DWG** è la tavola di disegno, non un modello 3D. Le sue linee derivano dalla mesh, quindi uno spigolo curvo è fatto di molte linee corte.
- **L'elemento della libreria** contiene un corpo e un'impronta per variante, negli assi della libreria: Z verso l'alto, il fronte verso −Y, e il punto di inserimento al centro del retro in basso. La pianta è il rettangolo di ingombro di ogni variante. Un elemento è limitato a 8 MB, quindi una variante molto pesante diventa un box della sua dimensione, e il README dice quante sono.
- La configurazione attiva della parte è la variante predefinita dell'elemento.
- Le porte (punti di collegamento per tubazioni e canali) non si impostano da PartCraft.

## Mettere le varianti su una pagina della libreria

Caricare `<part>.item.json` in **Libreria › Carica** sul sito. Scegliere la sua categoria, la licenza e la propria riga di attribuzione, e diventa un elemento della Libreria con le sue varianti. In BimCraft, quando lo si posiziona chiede quale variante, e Scambia propone le altre. La pagina dove i visitatori scelgono le opzioni, vedono il 3D e scaricano una variante è per ora un'**anteprima riservata allo staff**: non è ancora aperta al pubblico.

## Dalla riga di comando

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` indica le configurazioni, `--formats` accetta una qualunque di `step`, `ifc`, `dwg`, `preview`, `--no-item` esclude l'elemento della libreria. Scrive una cartella, uno zip o entrambi, ed esce con 1 quando una variante non può essere costruita. Vedi [Script e riga di comando](topic:scripts-and-cli).
