---
title: La libreria degli utensili
summary: Salva nel browser gli utensili che usi, così ogni parte può averli, e sposta le librerie di utensili tra computer come file JSON.
keywords: libreria utensili, utensili, esporta, importa, JSON, salva utensili, numero T, fresa a candela, utensili di officina
from: 8b9f2483
---

La scheda **Utensili** di Produzione elenca gli utensili della parte. Sotto **Libreria utensili** è possibile conservare i propri utensili oltre una sola parte:

- {{ui:Salva questo utensile}} aggiunge l'utensile selezionato a **I miei utensili salvati**; {{ui:Salva tutti gli utensili di questa parte}} li aggiunge tutti. I miei utensili salvati sono conservati in questo browser e sono disponibili per ogni parte. Un utensile già salvato (stesso tipo, dimensione, taglienti e sovrascritture) non viene salvato due volte.
- {{ui:Aggiungi a questo pezzo}} inserisce nella parte l'utensile salvato scelto. Se il suo numero T è già usato da un altro utensile della parte, riceve il successivo numero libero e il pannello lo segnala. {{ui:Rimuovi dalla mia libreria}} lo elimina dall'elenco salvato (non dalle parti che lo hanno già).
- {{ui:Esporta utensili…}} scrive gli utensili della parte come file `.json`; {{ui:Importa utensili…}} aggiunge alla parte gli utensili di un file del genere, con le stesse regole (un utensile già presente viene saltato, un numero T occupato viene spostato). Il file contiene dimensioni, taglienti, materiali e le sovrascritture di avanzamento e velocità digitate; non contiene id. Usarlo per spostare gli utensili di un'officina su un altro computer o per darli a un collega.

Se il browser non riesce a conservare la libreria (archiviazione disattivata o piena), il salvataggio lo segnala e **Esporta utensili** è il modo per conservare un file. Un file deve essere una libreria utensili di PartCraft di questa versione o precedente, con al massimo 500 utensili di dimensioni valide; tutto il resto viene rifiutato con il motivo.

Le velocità di taglio e i carichi per dente che accompagnano un utensile sono valori di partenza; vedi [Creare percorsi utensile e G-code](topic:manufacture).
