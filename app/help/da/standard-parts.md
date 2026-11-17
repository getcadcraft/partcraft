---
title: Åbn en standarddel
summary: Start en del fra en bolt, skrue, møtrik, skive, stift, leje eller fjeder dimensioneret efter dens standard, med hver størrelse i standardens tabel som en konfiguration.
keywords: standarddel, standarddele, bolt, skrue, sekskant, møtrik, skive, stift, dyvel, leje, rillekuglelleje, fjeder, parallelfjeder, befæstelse, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, skabelon, bibliotek
from: b9e2811f
---

PartCraft åbner almindelige maskindele færdiglavet: dimensionerne kommer fra standardernes tabeller, og hver størrelse i tabellen er en konfiguration, du kan skifte til.

## Åbn en

1. Klik på {{ui:Standarddel}} i gruppen {{ui:Fil}}.
2. I {{ui:Del}} vælg typen, for eksempel {{ui:Sekskantskrue (ISO 4017)}}.
3. I {{ui:Størrelse}} vælg størrelsen, for eksempel `M10 × 40`.
4. Klik på {{ui:Åbn}}.

Delen åbnes som en ny, ikke-gemt del. Gem den for at beholde den ({{key:Mod+S}}).

| Del | Standard | Parametre |
|---|---|---|
| Sekskantskrue, sekskantbolt | ISO 4017, ISO 4014, ASME B18.2.1 (tomme) | `d` gevindstørrelse, `s` nøglevidde, `k` hovedhøjde, `l` længde |
| Sekskantmøtrik | ISO 4032, ASME B18.2.2 (tomme) | `d`, `s`, `height` |
| Almindelig skive | ISO 7089 | `d1` indvendig, `d2` udvendig, `h` tykkelse |
| Parallelstift | ISO 2338 | `d`, `l` |
| Rillekuglelleje | ISO 15 | `d` boring, `D` udvendig, `B` bredde |
| Parallelfjeder | DIN 6885-1, form A | `b` bredde, `h` højde, `l` længde |

## Ændr størrelsen

Hver størrelse er en konfiguration (se [Konfigurationer og designtabeller](topic:design-tables)): åbn {{ui:Parametre}} og vælg en anden, eller ændr en parameter, for eksempel `l` for en længere skrue, og gem den som din egen konfiguration.

## Hvad der er modelleret

- Skruer og bolte: sekskanthovedet og en glat skaft. Møtrikker: sekskanten med et hul i gevindets nominelle størrelse. Gevind er ikke modelleret; tilføj et med {{ui:Gevind}}, hvis du har brug for det (se [Gevind](topic:threads)).
- Stifter: en glat cylinder; endeaffasningerne er udeladt.
- Lejer: kun det ydre hylster (en ring med boringen, den udvendige diameter og bredden), hvilket er det, du skal bruge for at placere et.
- Fjedre: den rundendede fjeder.

Delens materiale er stål, så masse-panelet viser dens vægt. Tandhjul er ikke her endnu: PartCraft har ingen tandfeature, og en skive er ikke et tandhjul. CadCraft tegner tandhjul efter tegnekonventionen, og biblioteket har dem som tegninger.
