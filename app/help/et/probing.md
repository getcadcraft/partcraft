---
title: Sondimine: detaili leidmine ja töönihke seadmine
summary: Puuduta sondiga ülemist tahku, külge, auku või tappi ja lase juhtseadmel viia töönihe sinna, kus detail tegelikult asub, või ainult mõõda. Mida iga juhtseade suudab ja mis pole tõestatud.
keywords: sond, sondimine, puutesond, puutumisega nullimine, töönihe, g54, g31, g38.2, vahele jätmine, lähtepunkt, keskpunkti leidmine, puur, tapp, serv, nulli seadmine, mõõda, kontroll, g10
from: 1f718b82
---

{{ui:Puutemõõtmine}} Valmistamises kirjutab programmi sondimistsükli: sond puudutab detaili ja juhtseade nihutab töönihet (G54) võrra, mis on vahe selle vahel, kus pind leiti, ja sellest, kus mudel ütleb, et see peaks olema. Hilisemad toimingud lõikavad siis sealt, kus detail tegelikult on.

**Siin ei ole midagi masinal käivitatud.** Liigutused enne puudutust on tavalised liigutused: sondi ei jälgita enne puutumisliikumist ennast. Käivita aeglaselt, esmalt õhus, käsi söötmise peatamise nupul.

## Kasutamine

1. Vahekaardil **Tööriistad** lisab esimene sondimistoiming **puutesondi**: selle kuuli läbimõõdu ja sondimise söötmise (100 mm/min, kui ei seadista teist).
2. Vajuta Valmistamise tööriistaribal {{ui:Veel}}, seejärel {{ui:Puutemõõtmine}}, ja klõpsa, mida puudutada. Iga valik on üks tsükkel, klõpsamise järjekorras:

| Valik | Tsükkel | Mis seatakse |
|---|---|---|
| Tasane tahk, mis vaatab tööriista telge | Üks puutumine allapoole | Z |
| Tasane külg, mis on risti X-i või Y-ga | Üks puutumine külje suunas, veidi allapoole ülaosast | X või Y |
| Auk või tapp mööda tööriista telge | Neli puutumist (+X, −X, +Y, −Y) | X ja Y selle keskpunktist |

3. **Tulemusega**: {{ui:Määra töönihe}} või {{ui:Ainult mõõda}}.
4. **Alusta nii kaugelt** ja **Otsi nii kaugele üle** on, kui kaugel oodatud pinnast sondimisliikumine algab ja kui kaugele sellest võib sond liikuda enne, kui juhtseade loobub. **Sügavus** on, kui kaugele augu, tapi või külje ülaosast allapoole kuul läheb.

Aseta sondimistoiming esimeseks, enne et miski lõikab.

## Mida iga juhtseade kirjutab

| Juhtseade | Puudutus | Tulemus |
|---|---|---|
| Fanuc-tüüpi | `G31`, asukoht hoitakse `#101` kuni `#104` | Nihke muutujad (`#5221` kuni `#5223`) liigutatakse leitud − oodatud võrra. Ainult mõõda: vahe jäetakse `#110`-sse (ja `#111`-sse). |
| LinuxCNC | `G38.2`, asukoht hoitakse nimega parameetrites | `G10 L2 P1` uue nihkega. Ainult mõõda: `(DEBUG, …)` teade. |
| GRBL | `G38.2` | Üks puutumine seab telje `G10 L20 P1`-ga. GRBL-il ei ole muutujaid, seega **ei saa ta keskpunkti välja arvutada**: fail ütleb seda kommentaaris ega seadista midagi. |

Arvutus on postprotsessori oma, nii et sa saad seda muuta: sündmused on `probe-move` ja `probe-set` ([Muudetavad postprotsessorid](topic:post-processors)).

## Piirangud

- Üks töönihe (G54). Ainult tahud, mis on telgedega risti: ei nurki, ei nurgatsükleid ega töö pööramist.
- Tööriista seadjat ei ole, katkise tööriista kontrolli ei ole, suuruse mõõtmist tolerantsi vastu ei ole, aruannet ei ole.
- Spindlit ei käivitata sondimise jaoks ja jahutusvedelik jääb välja; ei kontrollita, kas spindlis olev tööriist on sond.
- Toorikusimulatsioon ei käivita sondimisteed.
- Sondi enda kalibreerimine (kuuli nihe, varre paindumine, käivitussuund) on juhtseadme oma.
