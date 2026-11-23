---
title: Zondēšana: detaļas atrašana un darba nobīdes iestatīšana
summary: Pieskarieties augšējai virsmai, malai, caurumam vai izciļnim ar zondi un ļaujiet vadībai pārvietot darba nobīdi uz to vietu, kur detaļa patiesībā atrodas, vai tikai izmēriet. Ko katra vadība var, un kas nav pārbaudīts.
keywords: zondēšana, zonde, skārienzonde, pieskaršanās nulle, darba nobīde, g54, g31, g38.2, izlaišana, atsauce, atrast centru, urbums, izciļnis, mala, iestatīt nulli, mērīt, pārbaude, g10
from: 1f718b82
---

{{ui:Zondēšana}} sadaļā Ražošana ieraksta zondēšanas ciklu programmā: zonde pieskaras detaļai, un vadība pārvieto darba nobīdi (G54) par starpību starp vietu, kur virsma atrasta, un vietu, kur modelis to ievieto. Vēlākas operācijas tad griež tur, kur detaļa patiesībā atrodas.

**Nekas šeit nav izmēģināts uz iekārtas.** Kustības pirms pieskāriena ir parastas kustības: zonde netiek vērota līdz pašai zondēšanas kustībai. Palaidiet to lēni, vispirms gaisā, ar roku uz padeves apturēšanas.

## Lietošana

1. Cilnē **Instrumenti** pirmā zondēšanas operācija pievieno **skārienzondi**: tās lodītes diametru un zondēšanas padevi (100 mm/min, ja nenorādāt citu).
2. Nospiediet {{ui:Vairāk}} Ražošanas rīkjoslā, tad {{ui:Zondēšana}}, un noklikšķiniet, ko pieskarties. Katra atlase ir viens cikls, pēc kārtas, kādā klikšķināt:

| Atlase | Cikls | Ko iestata |
|---|---|---|
| Plakana virsma, kas skatās uz augšu pa instrumenta asi | Viens pieskāriens, virzoties lejup | Z |
| Plakana sāna virsma, taisni pret X vai Y | Viens pieskāriens, virzoties pret virsmu, mazliet zem tās augšas | X vai Y |
| Caurums vai izciļnis gar instrumenta asi | Četri pieskārieni (+X, −X, +Y, −Y) | X un Y tā centram |

3. **Ar rezultātu**: {{ui:Iestatīt darba nobīdi}} vai {{ui:Tikai mērīt}}.
4. **Sākt šādā attālumā** un **Meklēt šādā attālumā aiz** ir attālums no gaidītās virsmas, no kura zondēšanas kustība sākas, un cik tālu aiz tās zonde drīkst iet, pirms vadība padodas. **Dziļums** ir cik zem caurums, izciļņa vai sānu virsmas augšas lodīte iet.

Novietojiet zondēšanas operāciju pirmo, pirms kaut kas griež.

## Ko katra vadība raksta

| Vadība | Pieskāriens | Rezultāts |
|---|---|---|
| Fanuc tipa | `G31`, pozīcija tiek glabāta `#101` līdz `#104` | Nobīdes mainīgie (`#5221` līdz `#5223`) tiek pārvietoti par atrasto − gaidīto. Tikai mērīt: starpība paliek `#110` (un `#111`). |
| LinuxCNC | `G38.2`, pozīcija glabāta nosauktos parametros | `G10 L2 P1` ar jauno nobīdi. Tikai mērīt: `(DEBUG, …)` ziņojums. |
| GRBL | `G38.2` | Viens pieskāriens iestata asi ar `G10 L20 P1`. GRBL nav mainīgo, tāpēc tas **nevar aprēķināt centru**: fails to saka komentārā un neiestata neko. |

Aprēķini ir postprocesora, tāpēc tos varat mainīt: notikumi ir `probe-move` un `probe-set` ([Rediģējami postprocesori](topic:post-processors)).

## Ierobežojumi

- Viena darba nobīde (G54). Tikai sejas, kas taisnas pret asīm: nav leņķa, nav stūra cikla, nav darba pagriešanas.
- Nav instrumentu iestatītāja, nav salauzta instrumenta pārbaudes, nav izmēra salīdzināšanas ar pielaidi, nav pārskata.
- Vārpsta zondēšanai nav ieslēgta, un dzesēšanas šķidrums paliek izslēgts; nekas nepārbauda, vai instruments vārpstā ir zonde.
- Zagataves simulācija neizpilda zondēšanas trajektoriju.
- Pašas zondes kalibrēšana (lodītes nobīde, kāta novirze, izraisīšanas virziens) ir vadības.
