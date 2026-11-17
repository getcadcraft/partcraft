---
title: Åpne en standarddel
summary: Start en del fra en bolt, skrue, mutter, skive, pinne, lager eller kile, dimensjonert etter standarden, med hver størrelse fra standardens tabell som en konfigurasjon.
keywords: standarddel, standarddeler, bolt, skrue, sekskant, mutter, skive, pinne, dor, lager, kulelager, kile, parallellkile, festemiddel, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, mal, bibliotek
from: b9e2811f
---

PartCraft åpner vanlige maskindeler ferdige: dimensjonene kommer fra standardenes tabeller, og hver størrelse i tabellen er en konfigurasjon du kan bytte til.

## Åpne en

1. Klikk {{ui:Standarddel}} i Fil-gruppen.
2. I {{ui:Del}} velg typen, for eksempel {{ui:Sekskanthodeskrue (ISO 4017)}}.
3. I {{ui:Format}} velg størrelsen, for eksempel `M10 × 40`.
4. Klikk {{ui:Åpne}}.

Delen åpnes som en ny, ulagret del. Lagre den for å beholde den ({{key:Mod+S}}).

| Del | Standard | Parametere |
|---|---|---|
| Sekskanthodeskrue, sekskantbolt | ISO 4017, ISO 4014, ASME B18.2.1 (tommer) | `d` gjengestørrelse, `s` nøkkelvidde, `k` hodehøyde, `l` lengde |
| Sekskantmutter | ISO 4032, ASME B18.2.2 (tommer) | `d`, `s`, `height` |
| Flat skive | ISO 7089 | `d1` innvendig, `d2` utvendig, `h` tykkelse |
| Parallell pinne | ISO 2338 | `d`, `l` |
| Rillekulelager | ISO 15 | `d` boring, `D` utvendig, `B` bredde |
| Parallell kile | DIN 6885-1, form A | `b` bredde, `h` høyde, `l` lengde |

## Endre størrelsen

Hver størrelse er en konfigurasjon (se [Konfigurasjoner og designtabeller](topic:design-tables)): åpne {{ui:Parametere}} og velg en annen, eller endre en parameter, for eksempel `l` for en lengre skrue, og lagre den som en egen konfigurasjon.

## Hva som er modellert

- Skruer og bolter: sekskanthodet og en glatt skaft. Muttere: sekskanten med et hull av gjengens nominelle størrelse. Gjenger er ikke modellert; legg til en med {{ui:Gjenge}} hvis den trengs (se [Gjenger](topic:threads)).
- Pinner: en glatt sylinder; kantfasene er utelatt.
- Lagre: bare den ytre omhyllingen (en ring med boringen, utvendig diameter og bredde), som er det som trengs for å plassere ett.
- Kiler: den rundendede kilen.

Delens materiale er stål, så masse-panelet viser vekten. Tannhjul finnes ikke her ennå: PartCraft har ingen tannfunksjon, og en skive er ikke et tannhjul. CadCraft tegner tannhjul etter tegningskonvensjonen, og biblioteket har dem som tegninger.
