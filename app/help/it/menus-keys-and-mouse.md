---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu che corrisponda al modo di lavorare già usato, assegnare a ogni comando un proprio tasto, spostare i comandi tra le schede della barra multifunzione e impostare cosa fanno la rotella e ciascun pulsante del mouse nella vista 3D.
keywords: stile menu, menu, barra multifunzione, barra degli strumenti, albero degli elementi, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, mouse, rotella, inverti, direzione zoom, pulsante centrale, orbita, pan, esporta, importa, passaggio, familiare
from: 8445b06c
---

I comandi di PartCraft sono gli stessi qualunque sia il modo in cui vi si arriva. Uno **stile dei menu** decide solo dove si trovano sullo schermo, come si chiamano e quali tasti li eseguono. Sceglierlo in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menu, tasti e mouse}}; la modifica è immediata e questo browser la ricorda.

## I due stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:PartCraft}} | La barra degli strumenti di PartCraft: il selettore delle aree di lavoro, File, Schizzo, Feature, Disegno, Assieme, Modifica e Vista. Tasti {{key:S}} schizzo, {{key:F}} adatta, {{key:M}} misura, {{key:X}} vista in sezione. Lo stile di partenza. |
| {{ui:Albero degli elementi}} | Una barra multifunzione disposta come quelle dei programmi CAD meccanici basati su feature: un menu {{ui:File}} (con tutte le esportazioni), pulsanti rapidi e le schede {{ui:Feature}}, {{ui:Schizzo}}, {{ui:Superfici}}, {{ui:Valuta}}, {{ui:Disegno}}, {{ui:Assieme}}, {{ui:Studi}} (le aree di lavoro e i loro strumenti), {{ui:Illustrate}} (gli strumenti manuali dell'area Illustrate; i suoi strumenti passano prima a Illustrate) e {{ui:Vista}}. {{ui:Feature}} inizia con {{ui:Schizzo}}, poiché una parte inizia da uno schizzo. Tasti extra: {{key:E}} estrusione, {{key:H}} foro, e {{key:V}} seguito da una lettera per una vista: {{key:V}} {{key:F}} anteriore, {{key:V}} {{key:B}} posteriore, {{key:V}} {{key:T}} superiore, {{key:V}} {{key:O}} inferiore, {{key:V}} {{key:R}} destra, {{key:V}} {{key:L}} sinistra, {{key:V}} {{key:I}} isometrica, {{key:V}} {{key:N}} normale a. Nella vista 3D il pulsante centrale ruota (orbita), {{key:Shift}} con il pulsante centrale fa pan, il pulsante destro fa pan e il pulsante sinistro serve solo a selezionare. |

Ogni stile mantiene {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} e {{key:Mod+A}}.

Uno strumento di un'altra area di lavoro passa prima a quell'area; uno strumento Progettazione scelto in un'altra area torna prima a Progettazione. Gli strumenti di schizzo attendono uno schizzo, quelli di disegno la tavola del disegno, quelli di assieme un assieme: la barra di stato indica cosa fare prima.

:::tip
In uno schizzo, sulla tavola del disegno, in un assieme e nelle altre aree di lavoro, le lettere mantengono lì il loro significato ({{key:L}} linea, {{key:R}} rettangolo, {{key:J}} giunto …) in ogni stile. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il proprio. Un tasto del layout di PartCraft che lo stile ha assegnato a un altro comando non fa nulla, e la barra di stato indica dove è finito il suo comando.
:::

## Personalizzare

1. Scegliere lo stile più vicino a ciò che si vuole, poi cliccare {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). {{ui:Aggiungi un tasto}} e premere il tasto, oppure due tasti in sequenza. Cliccare su un tasto per rimuoverlo.
3. Con la barra multifunzione, {{ui:Dove si trova}} sposta il comando in un'altra scheda e gruppo, nel menu {{ui:File}}, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella, i pulsanti che fanno pan su uno schizzo e cosa fa ciascun pulsante nella vista 3D.
5. Dargli un nome e cliccare {{ui:Salva}}.

Salvare uno stile integrato crea una propria copia ("Il mio albero degli elementi"); quello integrato non cambia mai. Un tasto assegnato a due comandi, o uno che verrebbe eseguito prima che si possa digitare un tasto a due lettere, appare in rosso e va corretto prima di salvare.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (l'impostazione iniziale) oppure {{ui:Scorrere in avanti riduce}}, e la velocità. Il pizzico su un trackpad fa sempre zoom nel verso in cui si muovono le dita.
- **Fare pan sullo schizzo con**: il pulsante centrale, il pulsante destro, o entrambi. Un clic destro in uno schizzo termina comunque il passo dello strumento.
- **Trascinamento nella vista 3D**: {{ui:Di ogni vista}} mantiene l'impostazione di PartCraft ({{ui:Impostazioni}} › {{ui:PartCraft}}: sinistro ruota, oppure centrale ruota). Oppure impostare ogni pulsante su orbita, pan, zoom o nessuno; {{key:Shift}} con il pulsante di orbita fa pan. Un clic senza trascinamento seleziona comunque.

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di PartCraft: tutto il resto viene escluso e conteggiato nella barra di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto le schede degli stili fa aprire ogni app nello stile corrispondente (la propria barra degli strumenti, oppure una barra multifunzione), con le modifiche fatte in ciascuna app. Scegliere un altro stile in un'app cambia solo quell'app.
:::

Correlati: [Tasti e mouse](topic:keyboard) · [Impostazioni di PartCraft](topic:settings) · [Passare da un altro modellatore parametrico](topic:coming-from)
