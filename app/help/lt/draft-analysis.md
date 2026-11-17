---
title: Patikrinti nuolydį formavimui ir liejimui
summary: Nuspalvinkite detalę pagal jos nuolydžio kampą formos traukimo krypties atžvilgiu, matykite, kurie paviršiai išsilaisvina, kuriems reikia daugiau nuolydžio ir kurie išsilaisvina iš kitos pusės, su kiekvieno dalimi nuo ploto.
keywords: nuolydžio analizė, nuolydis, konusas, forma, liejimas į formą, slėginis liejimas, įpurškimo liejimas, traukimo kryptis, skyrimo linija, įpjova, išlaisvinimas, patikrinti nuolydį
from: 6a106f83
---

Detalės, gaminamos formoje, slėginiu liejimu ar smėlio liejimu, reikalauja **nuolydžio**: sienelės šiek tiek pasvirusios, kad detalė lengvai išslystų. **Nuolydžio analizė** nuspalvina kiekvieną paviršių pagal tai, kiek jis pasviręs nuo krypties, kuria forma atsidaro (**traukimas**).

## Įjunkite

1. Dizaino darbo srityje atverkite {{ui:Views}} ir pasirinkite {{ui:Draft analysis}}.
2. Nustatykite **Traukimas**: formos atsidarymo kryptį išilgai X, Y arba Z bet kuria kryptimi, arba **Statmenai pasirinktam paviršiui**: paspauskite {{ui:Pick a face}} ir spustelėkite plokščią detalės paviršių.
3. Nustatykite **Mažiausias nuolydis** laipsniais: mažiausią pasvirimą, kurio reikia jūsų procesui (dažnai 1° iki 3°).

Detalė nuspalvinama:

| Spalva | Reiškia |
|---|---|
| Žalia: **Teigiamas nuolydis** | Pasvirusi link traukimo bent mažiausiu kampu: išsilaisvina iš šios formos pusės |
| Okra: **Reikia nuolydžio** | Mažiausio kampo ribose bet kuria kryptimi, pavyzdžiui, vertikali sienelė: čia pridėkite nuolydį |
| Raudona: **Neigiamas nuolydis** | Pasvirusi nuo traukimo bent mažiausiu kampu: išsilaisvina iš kitos formos pusės arba yra įpjova, jei detalė turi išeiti iš vienos pusės |

Kiekvienos klasės dalis nuo detalės paviršiaus ploto rodoma šalia jos. **Apversti traukimą** žiūri iš kitos formos pusės: žalia ir raudona keičiasi vietomis.

Kreivi paviršiai vertinami taškas po taško, todėl cilindras, einantis skersai traukimo krypties, rodo juostą, kuriai reikia nuolydžio palei šonus.

Spalvos seka detalę, kai ją keičiate. {{key:Esc}} arba {{ui:Close}} išjungia analizę; detalėje nieko neįrašoma.

:::tip
Nuolydžiui pridėti naudokite {{ui:Draft}} elementą ochros spalvos paviršiuose (žr. [Sweep, loft and draft](topic:sweep-loft-draft)), tada patikrinkite dar kartą.
:::
