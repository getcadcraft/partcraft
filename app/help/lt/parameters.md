---
title: Detalės valdymas parametrais
summary: Pavadinkite svarbius dydžius (plotį, storį, varžto dydį), susiekite bet kurį elemento numerį ar eskizo matmenį su jais naudodami =, ir pakeiskite visą detalę iš vienos lentelės.
keywords: parametrai, kur naudojama, naudoja, globalūs kintamieji, kintamieji, lygtys, projekto paskirtis, valdantys matmenys, susiejimas, išraiška, formulė, pavadinti matmenį, susieti reikšmės
from: 58c646ea
---

Parametras yra pavadintas skaičius, pavyzdžiui `width = 120` arba `margin = bolt * 1.5`. Susiekite gylį, skylės skersmenį, šablono skaičių ar eskizo matmenį su juo, ir pakeitus parametrą viskas pasikeičia vienu žingsniu. Taip projekto paskirtį laikote detalėje, o ne galvoje.

## Pridėti parametrus

1. Dešiniajame skydelyje spustelėkite skirtuką {{ui:Parametrai}}.
2. Grupėje **Kintamieji** įveskite pavadinimą lauke „pavadinimas“, pavyzdžiui `width`.
3. Kitame lauke įveskite jo reikšmę, pavyzdžiui `120`, ir paspauskite {{key:Enter}} (arba spustelėkite {{ui:Pridėti}}).

Reikšmė gali būti skaičius arba kitų parametrų išraiška: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Stulpelis **Reikšmė** rodo, kiek ji išeina. Pavadinimas prasideda raide arba `_` ir turi tik raides, skaitmenis ir `_`; funkcijų ir vienetų pavadinimai (`sin`, `mm`, `pi`) atmetami, taip pat ciklas, pavyzdžiui `a = b` su `b = a`.

## Susieti skaičių su parametru

1. Spustelėkite elementą istorijoje, pavyzdžiui „Extrude1“. Jo nustatymai rodomi skirtuke {{ui:Savybės}}.
2. Skaičiaus langelyje, pavyzdžiui **Gylis (mm)**, įveskite `=` ir išraišką: `=thick` arba `=width / 4`.
3. Paspauskite {{key:Enter}}.

Langelyje dabar rodomas rezultatas, o šalia jo pavadinimo atsiranda mygtukas **ƒ**. Užveskite pelę, kad pamatytumėte lygtį. Eskizo matmenys veikia taip pat — tiek elemento sąraše **Eskizo matmenys**, tiek atidaryto eskizo matmenų langelyje (dukart spustelėkite matmenį, įveskite `=width`, paspauskite {{key:Enter}}).

Skaičiai, kuriuos galite susieti: ištraukimo gylis, sukimo kampas, skylės skersmuo, gylis ir įleidimo dydžiai, šablono skaičius, tarpas ir kampas, suapvalinimo spindulys, nuožulnos atstumas, kevalo sienelės storis, kiekvienas eskizo matmuo ir naujesnių elementų dydžiai (antrasis gylis, nuolydis, įleidimas, atstumas iki pagalbinės plokštumos, nuolydžio kampas ir kiti).

## Pakeisti parametrą

Skirtuke {{ui:Parametrai}} stulpelyje **Išraiška** įveskite naują reikšmę ar išraišką ir paspauskite {{key:Enter}}. Viskas, kas su juo susieta, pasikeičia, o detalė perkuriama kaip vienas žingsnis: {{key:Mod+Z}} tai atšaukia.

Kaip pakeisti skaičių iš kito galo, žr. [Lygtys abiem kryptimis](topic:equations-two-way).

## Pamatyti, kur parametras naudojamas

Po kiekvienu parametru skirtuke {{ui:Parametrai}} eilutė nurodo, kas jį naudoja:

- skaičius, kuriuos jis valdo, pavyzdžiui **Extrude1 gylis** arba **Sketch1 D2 (atstumas)**. Spustelėkite vieną, kad pažymėtumėte jo elementą ir parodytumėte savybes;
- skaičius, kuriuos jis valdo **per** kitus parametrus, pavyzdžiui **Hole1 skersmuo (per h, d)**, kai `d = h + 2` ir `h = w / 2`;
- **parametrus**, kurių išraiškose jis naudojamas, **konfigūracijas**, kurios jį nustato, ir **scenarijus**, kurie jį nuskaito (žr. [Rašykite ir vykdykite scenarijus](topic:craftscript)).

„Dar nenaudojama.“ reiškia, kad jo niekas nenaudoja: galite jį ištrinti be klausimo.

## Atsieti, pervadinti, ištrinti

- **Atsieti skaičių:** spustelėkite jo mygtuką **ƒ** arba {{ui:Atsieti}} sąraše **Lygtys**. Jis išlaiko dabartinę reikšmę, ir nieks jo nebekeičia.
- **Pervadinti parametrą:** įveskite naują pavadinimą jo langelyje **Pavadinimas**. Kiekviena išraiška, kuri jį naudoja, perrašoma.
- **Ištrinti parametrą:** spustelėkite × jo eilutėje. Jei kas nors jį naudoja, PartCraft klausia, ar pirma įrašyti jo dabartinę reikšmę į tas išraiškas.
- **Ištrinant elementą** pašalinamos jo skaičių lygtys; būsenos juostoje nurodoma, kurios.

:::note
Parametrai įrašomi `.partcraft.json` faile (failo versija 3). Detalė be parametrų įrašoma lygiai kaip anksčiau.
:::

## Išraiškos

| Rašoma | Reiškia |
|---|---|
| `120`, `12.5`, `1e3` | skaičius (milimetrais arba laipsniais, kai tai kampas) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | ilgis kitais vienetais, paverstas milimetrais |
| `30deg`, `0.5rad` | kampas, paverstas laipsniais |
| `+ - * / %` ir `^` | aritmetika; `^` yra laipsnis, `-2^2` yra −4 |
| `sin cos tan asin acos atan atan2` | trigonometrija laipsniais |
| `sqrt pow exp ln log abs sign` | kitos funkcijos |
| `ceil floor int round(x, digits) min max` | apvalinimas ir ribos |
| `if(test, a, b)` su `< <= > >= == !=` | pasirinkimas: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Pavadinimai skiriasi pagal raidžių dydį: `Width` ir `width` yra du skirtingi parametrai.

Taip pat žr. [Konfigūracijos ir projektavimo lentelės](topic:design-tables) ir [Scenarijai ir komandinė eilutė](topic:scripts-and-cli).
