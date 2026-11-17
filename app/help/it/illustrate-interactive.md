---
title: Il file 3D interattivo
summary: Esporta il manuale come un unico file HTML che si apre offline in qualsiasi browser, senza installazione, account o tracciamento: il modello, le viste, la distinta dei componenti (collegata nei due sensi), l'animazione e la lente d'ingrandimento.
keywords: illustrate, interattivo, file 3d, html, offline, visualizzatore, condivisione, cliente, officina
from: 4de4e074
---

{{ui:Export}}, poi scegliere {{ui:As}}: {{ui:Interactive 3D file (HTML, opens offline)}}. Viene salvato un solo file `.html`. Si può inviarlo per e-mail, copiarlo su una chiavetta USB o in una cartella condivisa: si apre in qualsiasi browser con WebGL 2, su computer, tablet o telefono.

Nel file:

- Trascinare per ruotare il modello, trascinare con il tasto destro o {{key:Shift}}+trascinamento per spostare la vista, rotella o gesto di pizzico per lo zoom.
- Fare clic su una vista nell'elenco: la telecamera si sposta lì e le parti assumono le posizioni, l'aspetto, il taglio e la lente di quella vista.
- Fare clic su una riga della {{ui:Parts list}} per evidenziarne le parti; fare clic su una parte per evidenziarne la riga.
- Se il manuale ha un'animazione, una barra sotto il modello la riproduce, la mette in pausa e permette di scorrerla avanti e indietro.

Il file contiene tutto ciò che gli serve (il modello, il visualizzatore e three.js, con licenza MIT) e blocca ogni richiesta di rete: non può raggiungere internet, non ha account né tracciamento.

Il 3D interattivo in un PDF non è previsto: i browser e la maggior parte dei lettori PDF non lo mostrano, e il lettore che può farlo lo tiene disattivato per impostazione predefinita. Il file HTML è la risposta interattiva.
