---
title: Telai da profilati in acciaio
summary: Disporre profilati in acciaio lungo le linee di uno o più schizzi per creare un telaio saldato: angoli a 45° o di testa, elementi tagliati su misura dove si incontrano, tappi di estremità, cartelle di irrigidimento e un elenco di taglio con lunghezze e angoli di estremità.
keywords: carpenteria, elemento strutturale, telaio, telaio in acciaio, tubo, tubo quadrato, hss, rhs, shs, tubo tondo, chs, trave a doppio T, trave ad ali larghe, i-beam, trave w, ipe, hea, heb, profilato a C, upn, angolare, angolo a 45°, giunto di testa, scasso, tappo di estremità, cartella, elenco di taglio
from: 59071e5a
---

Un **Elemento strutturale** dispone un profilato in acciaio lungo ogni linea degli schizzi scelti. Disegnare il telaio come linee (ogni linea è un elemento), poi scegliere il profilato: gli elementi vengono costruiti, i loro angoli rifilati ed estesi, e un elenco di taglio indica quanto tagliare ogni pezzo e con quale angolo.

## Creare un telaio

1. Disegnare il telaio come linee in uno schizzo, ad esempio un rettangolo sul piano superiore. Le linee contrassegnate come costruzione sono omesse.
2. Con lo schizzo selezionato, scegliere {{ui:Altro}} › {{ui:Elemento strutturale}}. Ogni linea dello schizzo riceve un elemento.
3. Nel pannello, scegliere la **Famiglia** e il **Formato** del profilato. Le famiglie sono le tabelle AISC (W, S, C, L, tubi HSS, Tubo) e EN 10365 (IPE, HEA, HEB, UPN).

### Un telaio in 3D

Le linee di più schizzi formano un solo telaio: un rettangolo superiore disegnato su un piano sopra, e i montanti disegnati su piani verticali, si incontrano alle loro estremità in 3D. Sotto **Lungo le linee di** nel pannello, spuntare ogni schizzo le cui linee devono essere seguite dagli elementi. Le estremità che si incontrano entro un micrometro vengono unite.

## Impostare il profilato sulla sua linea

- **Ruota (°)** ruota il profilato attorno alla sua linea. Una trave sta con l'altezza in verticale (su un elemento verticale, la sua altezza punta verso il fronte).
- **Sulla linea** sceglie quale punto del profilo giace sulla linea: il centro, oppure un angolo o il punto medio di un lato del contorno del profilo. "Centro in basso" posiziona un telaio sopra il piano dello schizzo invece che attraverso di esso.

## Angoli e giunzioni

| Dove si incontrano gli elementi | Cosa succede |
|---|---|
| Due elementi testa a testa, **Angoli: A 45°** | Entrambi vengono tagliati sul piano che sta a metà tra loro, come una cornice |
| Due elementi testa a testa, **Angoli: Di testa** | Il primo prosegue fino alla faccia lontana del secondo; il secondo viene tagliato a squadra sulla faccia vicina del primo |
| Un elemento termina sul centro di un altro (una T) | Viene tagliato per aderire all'esterno dell'altro elemento |
| Tre o più terminano in un punto | Il primo prosegue a squadra oltre gli altri; gli altri vengono tagliati per aderire ad esso |

Il primo elemento è quello la cui linea viene per prima: le linee mantengono l'ordine in cui sono state disegnate, schizzo per schizzo, nell'ordine in cui gli schizzi sono stati spuntati.

## Tappi di estremità e cartelle

- I **tappi di estremità** chiudono ogni estremità libera con una piastra del contorno del profilo, dello spessore impostato, all'esterno dell'estremità.
- Le **cartelle** inseriscono una piastra triangolare in ogni angolo in cui due elementi si incontrano con un'inclinazione: **Dimensione cartella** lungo ciascun elemento a partire dall'angolo, **Spessore cartella** attraverso, centrata sul piano dell'angolo.

## L'elenco di taglio

Il pannello elenca ogni pezzo, con i pezzi identici raggruppati: il profilato, la lunghezza (da punto lungo a punto lungo, come si segnerebbe per la sega), come è tagliata ciascuna estremità (a squadra, con un angolo rispetto alla squadra, oppure tagliata per aderire), e a quali elementi appartengono. Tappi di estremità e cartelle sono elencati con le loro dimensioni. {{ui:Salva l'elenco di taglio (CSV)}} lo salva per un foglio di calcolo.

Un elemento tagliato per aderire a un tubo con angoli arrotondati entra un poco nel raggio d'angolo di quel tubo, quindi la sua lunghezza da punto lungo a punto lungo è di alcuni millimetri in più rispetto allo spazio tra le facce.

## Limiti

- Gli elementi seguono solo linee rette; archi e spline nello schizzo sono omessi.
- Le giunzioni sono tagliate, non saldate: non vengono disegnati cordoni di saldatura, e il telaio è un solo solido.
- I profilati sono disegnati dalle dimensioni della tabella: profili a W con il raccordo di radice, profili S e canali con ali parallele, tubi con raggi d'angolo; fori, preparazioni delle estremità e spazi di saldatura non vengono creati automaticamente.
- Gli elementi strutturali sono costruiti dal kernel a mesh. Con il kernel esatto attivo (solo sviluppatori), lo indicano e non vengono costruiti.
