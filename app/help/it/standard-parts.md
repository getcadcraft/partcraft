---
title: Aprire un pezzo standard
summary: Avviare un pezzo da una vite, bullone, dado, rondella, spina, cuscinetto o chiavetta dimensionati secondo la sua norma, con ogni misura della tabella della norma come configurazione.
keywords: pezzo standard, pezzi standard, bullone, vite, esagonale, dado, rondella, spina, copiglia, cuscinetto, cuscinetto a sfere, chiavetta, chiavetta parallela, elemento di fissaggio, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, modello, libreria
from: b9e2811f
---

PartCraft apre pronti i comuni pezzi meccanici: le dimensioni provengono dalle tabelle delle norme, e ogni misura della tabella è una configurazione a cui si può passare.

## Aprirne uno

1. Fare clic su {{ui:Parte standard}} nel gruppo File.
2. In {{ui:Pezzo}}, scegliere il tipo, ad esempio {{ui:Vite a testa esagonale (ISO 4017)}}.
3. In {{ui:Formato}}, scegliere la misura, ad esempio `M10 × 40`.
4. Fare clic su {{ui:Apri}}.

Il pezzo si apre come nuovo pezzo non salvato. Salvarlo per conservarlo ({{key:Mod+S}}).

| Pezzo | Norma | Parametri |
|---|---|---|
| Vite a testa esagonale, bullone esagonale | ISO 4017, ISO 4014, ASME B18.2.1 (pollici) | `d` diametro filettatura, `s` distanza tra i piani, `k` altezza della testa, `l` lunghezza |
| Dado esagonale | ISO 4032, ASME B18.2.2 (pollici) | `d`, `s`, `height` |
| Rondella piana | ISO 7089 | `d1` interno, `d2` esterno, `h` spessore |
| Spina cilindrica | ISO 2338 | `d`, `l` |
| Cuscinetto radiale a sfere | ISO 15 | `d` alesaggio, `D` esterno, `B` larghezza |
| Chiavetta parallela | DIN 6885-1, forma A | `b` larghezza, `h` altezza, `l` lunghezza |

## Cambiare la misura

Ogni misura è una configurazione (vedere [Configurazioni e tabelle di progetto](topic:design-tables)): aprire {{ui:Parametri}} e sceglierne un'altra, oppure cambiare un parametro, come `l` per una vite più lunga, e salvarlo come configurazione propria.

## Che cosa è modellato

- Viti e bulloni: la testa esagonale e un gambo liscio. Dadi: l'esagono con un foro del diametro nominale della filettatura. Le filettature non sono modellate; per aggiungerne una usare {{ui:Filettatura}} se serve (vedere [Filettature](topic:threads)).
- Spine: un cilindro semplice; le smussature alle estremità sono omesse.
- Cuscinetti: solo l'ingombro esterno (un anello dell'alesaggio, il diametro esterno e la larghezza), che è ciò che serve per posizionarne uno.
- Chiavette: la chiavetta a estremità arrotondate.

Il materiale del pezzo è acciaio, quindi il pannello della massa mostra il suo peso. Gli ingranaggi non sono ancora disponibili: PartCraft non ha una feature di dentatura, e un disco non è un ingranaggio. CadCraft disegna gli ingranaggi secondo la convenzione di disegno, e la libreria li contiene come disegni.
