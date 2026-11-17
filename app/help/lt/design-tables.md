---
title: Konfigūracijos ir projektavimo lentelės
summary: Saugokite kelis detalės dydžius ir versijas kaip pavadintas konfigūracijas, įrašytas detalės faile, su įjungtomis ar išjungtomis funkcijomis kiekvienoje; perjunkite jas vienu paspaudimu, įkelkite ar išveskite kaip CSV projektavimo lentelę arba sukurkite visas komandinėje eilutėje.
keywords: projektavimo lentelė, konfigūracijos, konfigūracija, dydžiai, detalių šeima, csv, skaičiuoklė, variantai, lentele valdomas, blokuoti, blokuota, išjungti funkciją, parinktys, su ar be, konfiguratorius
from: 17249afb
---

**Konfigūracija** – tai vienas detalės dydis: pavadintas parametrų reikšmių rinkinys. Detalė savo konfigūracijas saugo savo faile, todėl jos keliauja kartu su ja. **Projektavimo lentelė** – tas pats, bet CSV faile, po vieną eilutę kiekvienai konfigūracijai.

Konfigūracijos nustato **parametrus**, todėl pirmiausia pridėkite juos (žr. [Detalės valdymas parametrais](topic:parameters)). Konfigūracija saugo parametrus, kurie yra paprasti skaičiai; parametrai, apskaičiuojami iš kitų (pavyzdžiui, `area = w * d`), seka automatiškai.

## Įrašykite konfigūraciją

1. Skirtuke {{ui:Parametrai}} nustatykite parametrus vienam detalės dydžiui.
2. Skiltyje **Konfigūracijos** įveskite pavadinimą (pavyzdžiui, `Didelė`) ir paspauskite {{ui:Įrašyti dabartines reikšmes}} arba {{key:Enter}}.

Nauja konfigūracija pažymima **aktyvi**. Jei vėliau pakeisite parametrą, ji rodys **aktyvi, pakeista nuo tada**, kad žinotumėte, jog detalė jos nebeatitinka.

## Perjunkite, atnaujinkite, pervardinkite, ištrinkite

- {{ui:Taikyti}} nustato parametrus į tos konfigūracijos reikšmes ir perstato detalę.
- {{ui:Atnaujinti}} įrašo dabartines reikšmes į tą konfigūraciją.
- Norėdami ją pervardinti, įveskite naują pavadinimą jos laukelyje ir paspauskite {{key:Enter}}.
- {{ui:Naikinti}} pašalina konfigūraciją. Parametrai išlaiko savo reikšmes.

Kiekvienas iš šių veiksmų yra vienas žingsnis: {{key:Mod+Z}} grąžina atgal. Jei pervardinate parametrą, visos konfigūracijos seka naują vardą; jei ištrinate parametrą, jis iš konfigūracijų išnyksta.

## Įjunkite ir išjunkite funkcijas konfigūracijoje

Konfigūracija taip pat saugo, kurios funkcijos išjungtos, todėl viena detalė gali turėti versijas **su** ir **be** kažko: montavimo skylių, nuožulnos, išsikišimo.

1. Išjunkite funkciją: spustelėkite ją istorijoje, tada {{ui:Blokuoti}} skiltyje {{ui:Savybės}}.
2. Įrašykite konfigūraciją kaip įprastai, pavyzdžiui, `Be skylių`. Jos eilutėje išvardijama, ką ji išjungia.
3. Vėl įjunkite funkciją ({{ui:Atkurti}}) ir įrašykite kitą konfigūraciją, pavyzdžiui, `Su skylėmis`.

Kai bet kuri konfigūracija išjungia funkciją, konfigūracijos taikymas išjungia jos funkcijas ir **įjungia visas kitas funkcijas** kartu su parametrų reikšmėmis, vienu žingsniu. Konfigūracija, įrašyta prieš tai, kai kurios funkcijos buvo išjungtos, laikoma „viskas įjungta“. {{ui:Atnaujinti}} įrašo funkcijas tokias, kokios jos yra dabar, kartu su reikšmėmis.

Detalė, kurios konfigūracijos išjungia funkcijas, įrašoma kaip naujesnė failo versija: senesnis PartCraft praneša, kad failas yra iš naujesnės versijos, vietoj to, kad atidarytų jį be tų funkcijų.

:::note
CSV projektavimo lentelė perneša tik parametrų reikšmes. Lentelės importas į konfigūraciją pakeičia jos reikšmes ir palieka funkcijas, kurias ji išjungia; komandinės eilutės `--table` sukuria tik reikšmes.
:::

Detalės failas įrašomas su konfigūracijomis ir su ta, kuri buvo aktyvi. Detalė atsidaro su reikšmėmis, su kuriomis buvo įrašyta.

## Įkelkite arba išveskite projektavimo lentelę

Projektavimo lentelė yra CSV failas su stulpeliu kiekvienam parametrui ir eilute kiekvienai konfigūracijai:

```
name,width,thick,bolt
mažas,100,6,6.6
vidutinis,140,8,8.5
didelis,200,12,13
```

Pirmasis stulpelis gali būti vadinamas `name`, `config` arba `configuration`; kiekvienas kitas stulpelis turi būti detalės parametro vardas. Langeliai yra skaičiai, su vienetais, jei norite (`8in`). Tuščias langelis palieka tą parametrą iš eilutės.

- {{ui:Importuoti CSV}} prideda kiekvieną eilutę kaip konfigūraciją. Eilutė su jau esančios konfigūracijos vardu ją pakeičia. Importavimas yra vienas žingsnis.
- {{ui:Eksportuoti CSV}} išveda konfigūracijas. Kol jų nėra, išveda vieną eilutę su dabartinėmis reikšmėmis – pradžios tašką skaičiuoklei.

Konfigūracijos vardas, kurį skaičiuoklė perskaitytų kaip formulę (prasidedantį `=`, `+`, `-` ar `@`), įrašomas su pradiniu `'`.

## Visi dydžiai iš karto

{{ui:Variantų paketas…}} skiltyje **Konfigūracijos** sukuria visas konfigūracijas arba pasirinktas kelias kaip STEP, IFC, DWG ir peržiūrą viename zip faile, su jų parametrų lentele: žr. [Sukurkite variantų paketą iš savo konfigūracijų](topic:variant-pack).

Komandinės eilutės įrankis sukuria po vieną failą kiekvienai CSV projektavimo lentelės eilutei:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Pirmiausia eksportuokite konfigūracijas kaip CSV, tada perduokite tą failą per `--table`. Žr. [Scenarijai ir komandinė eilutė](topic:scripts-and-cli). Detalė, įrašyta kaip scenarijus, savo konfigūracijas laiko eilutėje `configs json …`.
