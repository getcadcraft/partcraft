---
title: Zondavimas: detalės paieška ir darbinio poslinkio nustatymas
summary: Palieskite viršutinį paviršių, šoną, skylę arba išsikišimą zondu ir leiskite valdikliui perkelti darbinį poslinkį ten, kur detalė iš tikrųjų yra, arba tik išmatuoti. Ką gali kiekvienas valdiklis ir kas nėra įrodyta.
keywords: zondas, zondavimas, lietimo zondas, nustatymas lietimu, darbinis poslinkis, g54, g31, g38.2, praleidimas, atskaitos taškas, centro radimas, ertmė, išsikišimas, kraštas, nulio nustatymas, matavimas, patikra, g10
from: 1f718b82
---

{{ui:Zondas}} Gamyboje įrašo zondavimo ciklą į programą: zondas palietžia detalę, o valdiklis perkelia darbinį poslinkį (G54) per skirtumą tarp to, kur paviršius buvo rastas, ir to, kur modelis sako, kad jis yra. Vėlesnės operacijos pjauna ten, kur detalė iš tikrųjų yra.

**Čia niekas nebuvo paleista staklėse.** Judesiai prieš lietimą yra įprasti judesiai: zondas nestebimas, kol neprasideda pats zondavimo judesys. Paleiskite lėtai, pirmiausia ore, su ranka ant padavimo sustabdymo.

## Naudojimas

1. Skirtuke **Įrankiai** pirmoji zondavimo operacija prideda **lietimo zondą**: jo rutulio skersmuo ir zondavimo padavimas (100 mm/min, nebent nustatote kitaip).
2. Spauskite {{ui:Daugiau}} Gamybos įrankių juostoje, tada {{ui:Zondas}}, ir spustelėkite, ką liesti. Kiekvienas pasirinkimas yra vienas ciklas, eilės tvarka pagal jūsų paspaudimus:

| Pasirinkimas | Ciklas | Kas nustatoma |
|---|---|---|
| Plokščias paviršius, žiūrintis į įrankio ašį | Vienas lietimas, judant žemyn | Z |
| Plokščias šoninis paviršius, statmenas X arba Y | Vienas lietimas, judant į paviršių, šiek tiek žemiau jo viršaus | X arba Y |
| Skylė arba išsikišimas išilgai įrankio ašies | Keturi lietimai (+X, −X, +Y, −Y) | X ir Y jo centro |

3. **Su rezultatu**: {{ui:Nustatyti darbinį poslinkį}} arba {{ui:Tik matuoti}}.
4. **Pradėti tiek toli** ir **Ieškoti tiek toliau už** – kiek toli nuo tikėtino paviršiaus prasideda zondavimo judesys ir kiek toliau už jo zondas gali keliauti, kol valdiklis atsisako. **Gylis** – kiek žemiau skylės, išsikišimo arba šoninio paviršiaus viršaus nurimsta rutulys.

Zondavimo operaciją įdėkite pirmą, prieš bet kokį pjovimą.

## Ką rašo kiekvienas valdiklis

| Valdiklis | Lietimas | Rezultatas |
|---|---|---|
| Fanuc tipo | `G31`, padėtis saugoma `#101` iki `#104` | Poslinkio kintamieji (`#5221` iki `#5223`) perkeliami pagal rasta − tikėtina. Tik matuoti: skirtumas paliekamas `#110` (ir `#111`). |
| LinuxCNC | `G38.2`, padėtis saugoma pavadintuose parametruose | `G10 L2 P1` su nauju poslinkiu. Tik matuoti: pranešimas `(DEBUG, …)`. |
| GRBL | `G38.2` | Vienas lietimas nustato ašį su `G10 L20 P1`. GRBL neturi kintamųjų, todėl **negali apskaičiuoti centro**: failas tai nurodo komentare ir nieko nenustato. |

Aritmetika yra postprocesoriaus, todėl ją galite pakeisti: įvykiai yra `probe-move` ir `probe-set` ([Redaguojami postprocesoriai](topic:post-processors)).

## Apribojimai

- Vienas darbinis poslinkis (G54). Tik paviršiai, statmeni ašims: nėra kampo, nėra kampinio ciklo, nėra darbo pasukimo.
- Nėra įrankio nustatymo prietaiso, nėra sulūžusio įrankio patikros, nėra dydžio matavimo pagal toleranciją, nėra ataskaitos.
- Zondavimui veleno nepaleidžiama, o aušalas lieka išjungtas; niekas nepatikrina, ar veleno įrankis yra zondas.
- Ruošinio imitavimas nepaleidžia zondavimo takų.
- Zondo paties kalibravimas (rutulio poslinkis, kočiukas, suveikimo kryptis) priklauso valdikliui.
