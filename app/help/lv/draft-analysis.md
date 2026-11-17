---
title: Pārbaudiet slīpumu liešanai un formēšanai
summary: Iekrāsojiet detaļu pēc tās slīpuma leņķa attiecībā pret veidnes izvilkšanas virzienu, redziet, kuras virsmas atbrīvojas, kurām vajag vairāk slīpuma un kuras atbrīvojas no otrās puses, un katras daļu no virsmas laukuma.
keywords: slīpuma analīze, slīpums, konuss, veidne, liešana matricā, injekcijas liešana, smilšu liešana, izvilkšanas virziens, dalīšanas līnija, atkāpe, atbrīvošana, pārbaudīt slīpumu
from: 6a106f83
---

Detaļām, kas izgatavotas veidnē, matricā vai smilšu liešanā, vajag **slīpumu**: nedaudz noliektas sienas, lai detaļa viegli izslīd. **Lējuma slīpuma analīze** iekrāso katru virsmu atkarībā no tā, cik stipri tā noliecas prom no virziena, kurā veidne atveras (**izvilkšanas** virziens).

## Ieslēdziet

1. Dizaina darbvietā atveriet {{ui:Views}} un izvēlieties {{ui:Draft analysis}}.
2. Iestatiet **Izvilkšanas virziens**: virzienu, kurā veidne atveras, pa X, Y vai Z jebkurā virzienā, vai **Perpendikulāri atlasītajai virsmai**: nospiediet {{ui:Pick a face}} un noklikšķiniet uz detaļas plakanas virsmas.
3. Iestatiet **Minimālais slīpums** grādos: mazāko noliekumu, ko jūsu process prasa (bieži 1° līdz 3°).

Detaļa tiek iekrāsota:

| Krāsa | Nozīmē |
|---|---|
| Zaļa: **Pozitīvs slīpums** | Noliekta uz izvilkšanas virzienu vismaz par minimumu: atbrīvojas no šīs veidnes puses |
| Okera: **Nepieciešams slīpums** | Minimuma robežās jebkurā virzienā, piemēram, vertikāla siena: pievienojiet šeit slīpumu |
| Sarkana: **Negatīvs slīpums** | Noliekta prom no izvilkšanas virziena vismaz par minimumu: atbrīvojas no otras veidnes puses, vai ir atkāpe, ja detaļai jāiziet no vienas puses |

Katras klases daļa no detaļas virsmas laukuma ir parādīta blakus. **Apgriezt izvilkšanu** skatās no otras veidnes puses: zaļā un sarkanā mainās vietām.

Izliektās virsmas tiek vērtētas punktu pa punktam, tāpēc cilindrs, kas novietots šķērsām izvilkšanas virzienam, parāda joslu, kurai sānos vajag slīpumu.

Krāsas seko detaļai, kad to maināt. {{key:Esc}} vai {{ui:Close}} izslēdz analīzi; detaļā nekas netiek saglabāts.

:::tip
Lai pievienotu slīpumu, izmantojiet elementu {{ui:Draft}} okera virsmām (skatiet [Vilkšana, loft un slīpums](topic:sweep-loft-draft)), pēc tam pārbaudiet vēlreiz.
:::
