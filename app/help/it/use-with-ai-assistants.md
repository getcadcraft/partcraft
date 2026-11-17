---
title: Usare PartCraft con un assistente AI
summary: Lasciare che il proprio assistente AI o script lavori con la parte aperta: leggere le sue feature, i parametri e la massa, cambiare un parametro e ricostruire, eseguire uno script, esportare e salvare. Disattivato finché non lo si attiva.
keywords: ai, assistente, agente, mcp, model context protocol, script, automazione, parametri, proprietà di massa, stl, step, 3mf, permessi, disconnetti, attività, cartelle
from: e66d3470
---

## Cosa imparerai

Come lasciare che un assistente AI (o uno script scritto da te) osservi la parte aperta, ne cambi i parametri, ne esegua uno script ed esporti, e come decidere cosa può toccare.

PartCraft **non ha un'AI propria** e non invia nulla a nessuno. Porti tu il tuo assistente: qualunque programma che parla il Model Context Protocol (MCP). PartCraft gli fornisce solo degli strumenti, e sei tu a scegliere quali.

## Attivarlo

1. Aprire {{ui:Impostazioni}} (l'ingranaggio nella barra dell'app, o {{key:Mod+,}}) e andare alla scheda {{ui:PartCraft}}.
2. Sotto {{ui:Assistenti}}, spuntare **Consenti agli assistenti AI e agli script di usare PartCraft**. È disattivato finché non lo si fa.
3. Scegliere cosa può fare. **Lettura** è spuntata all'inizio; spuntare le altre solo quando servono.
4. Per consentirgli di esportare e salvare in una cartella, scegliere {{ui:Aggiungi una cartella…}} sotto **Cartelle che può usare** e selezionare la cartella nella finestra di dialogo di Studio.

Gli assistenti si collegano tramite **CadCraft Studio** sul proprio computer: Studio mostra l'indirizzo e il token da incollare nell'assistente. Una scheda del browser non può aprire una connessione per un assistente.

## Cosa può chiedere un assistente

| Strumento | Permesso | Cosa fa |
|---|---|---|
| `part_describe`, `features_list` | Lettura | Le feature in ordine con ciò che è stato costruito e ciò che è fallito, il materiale, il volume e le dimensioni del solido |
| `params_list` | Lettura | I parametri e ogni numero che un'equazione può pilotare, con i loro valori |
| `mass_properties` | Lettura | Volume, area, centro di massa, l'inerzia rispetto ad esso; la massa quando la parte ha un materiale |
| `param_set` | Modifica | Imposta un parametro o il numero di una feature e ricostruisce. Un solo passo che si può annullare |
| `script_run` | Modifica | Esegue uno script CraftScript, Lua o Python nel modo in cui lo fa l'area di lavoro {{ui:Script}}: isolato, senza file e senza rete. La parte non cambia |
| `part_export` | Esporta | STL, 3MF, STEP o OpenUSD (.usdz, .usda, .usdc), come li scrivono {{ui:File}} › {{ui:Esporta}} |
| `link_push` | Modifica | Aggiorna un modello collegato da un altro programma (vedi [Mantenere attivo un modello .3dm](topic:live-3dm-link)) |
| `link_status` | Lettura | Dice se un modello collegato è ancora presente e quando è stato aggiornato l'ultima volta |
| `part_save` | Salva | Il {{ui:Salva}} di PartCraft |
| `illustrate_export` | Esporta | Un manuale dall'area di lavoro {{ui:Illustrate}} come PDF o disegno a linee SVG delle sue viste, come file 3D interattivo, oppure le sue istruzioni come PDF o pagina web, come li scrivono i menu {{ui:Esporta}} e {{ui:Istruzioni}} dell'area di lavoro ([Manuali](topic:illustrate)) |

:::note
Questa build usa il kernel a mesh: i volumi derivano dai triangoli (un po' meno di un solido curvo reale), e lo STEP è scritto a facce, con triangoli invece di superfici esatte.
:::

## Si resta in controllo

- **Ogni modifica è un solo passo di annullamento**, etichettato per l'assistente, per esempio "Assistente: imposta l = 45". Premere {{key:Mod+Z}} per annullarla.
- **Si sa quando uno è collegato.** Un pulsante nella barra dell'app indica l'assistente mentre è collegato. Cliccarlo per vedere cosa può fare, oppure per **Disconnetti**.
- **Attività.** {{ui:Impostazioni}} › {{ui:PartCraft}} › {{ui:Assistenti}} › {{ui:Attività}} elenca ogni chiamata; {{ui:Salva il registro}} ne conserva una copia.
- **Cartelle.** Legge e scrive file solo nelle cartelle aggiunte; {{ui:Rimuovi}} toglie subito una cartella.

## Senza aprire PartCraft

Il server file di CadCraft per gli assistenti (`npx @getcadcraft/mcp`) e la riga di comando `cadcraft` aprono le parti `.partcraft.json` con il codice e il kernel a mesh di PartCraft, senza finestra: gli stessi strumenti di lettura, l'impostazione dei parametri, gli script CraftScript, le esportazioni (anche OpenUSD) e il salvataggio. `cadcraft convert bracket.partcraft.json bracket.stl` costruisce una parte e la scrive dalla riga di comando. Anche i manuali (`.partcraft-manual.json`) si esportano lì: `illustrate_export`, oppure `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (aggiungere `--instructions` per le istruzioni).

## Se qualcosa non funziona

- **"needs the edit permission":** spuntare **Modifica** sotto {{ui:Assistenti}}, poi chiedere di nuovo.
- **"driven by the equation":** quel numero segue un parametro; chiedere all'assistente di impostare il parametro.
- **La sua modifica era sbagliata:** premere {{key:Mod+Z}}.

## Vedi anche

- [Ricette per assistenti AI](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che chiama.
