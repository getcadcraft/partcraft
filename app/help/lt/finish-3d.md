---
title: 3D apdaila: lygiagreti ir lankinė
summary: Apdorokite visą modelio lenktą paviršių rutuliniu, pusapvaliu ar plokščiu galandiniu, lygiagrečiomis linijomis bet kokiu kampu arba praėjimais, nutolusiais per nustatytą atstumą, kad tarp jų esančios briaunos išlaikytų jūsų nurodytą aukštį. Ką trajektorijos garantuoja ir ko ne.
keywords: 3d apdaila, apdaila, lygiagrečiai, rastras, lankinė, pastovi lankinė, briauna, viršūnė, rutulinis galandinis, pusapvalis galandinis, paviršius, tolerancija, žingsnis, nuolydis, paliekama medžiaga, nuleidimo frezą, įpjova
from: e1587d0a
---

Dvi Gamybos (Manufacture) operacijos frezuoja **visą modelio paviršių**, įrankį laikydamos vertikaliai (trys ašys). Jos nereikalauja pasirinkimų: veikia su visa modelio dalimi, kurią matyti iš viršaus. Pirmiausia atlikite šiurkštųjį apdirbimą (adaptyviai arba kišenėmis); apdailos praėjimas per neišpjautą medžiagą įspės, kad pjautų giliai.

## Lygiagrečiai

Tiesios linijos per visą modelį nustatytu **kampu**, **žingsniu** atstumu viena nuo kitos (dalis nuo frezos skersmens). Kiekviena linija seka paviršių: frezos galas yra tiek aukštai, kiek būtina, kad nė viena frezos dalis nenusileistų žemiau modelio, o linija pjaunama smulkiau, kur paviršius lenkiasi. Įjungus **Zigzagas**, frezos galas lieka nuleistas tarp linijų ten, kur tai saugu (patikrinama palei judėjimą); kitu atveju jis pakyla.

- **Tolerancija**: kiek tiesi linijos dalis gali nukrypti nuo tikro galo aukščio (vidurio taškuose naudojama pusė jos kaip riba). Numatyta 0.01 mm.
- **Tik ten, kur paviršius bent … ir daugiausia … (°)**: apdirbkite tik lėkščias sritis arba tik stačias. Kur paviršius už ribų, linija praleidžiama, o frezos galas pakyla.
- **Paliekama medžiaga**: modelis, poslinkintas tuo atstumu (frezos dydis padidinamas juo: tiksliai rutuliniams ir pusapvaliams įrankiams; plokščias įrankis palieka bent tiek).
- **Dugnas**: nieko nepjaunama žemiau šio z.

## Lankinė

Praėjimai, išlaikantys pastovų atstumą paviršiuje vienas nuo kito, todėl tarp dviejų gretimų praėjimų likusi briauna (lankas) turi nurodytą **aukštį**. Atstumas išplaukia iš aukščio ir rutulio spindulio: s = 2·√(2·R·h − h²), pavyzdžiui apie 0.69 mm tarp praėjimų Ø6 rutuliui ir 0.02 mm lankui. Pusapvalis įrankis naudoja savo kampo spindulį. Plokščias galandinis atmetamas: jis neturi lanko, kurio dydį reikėtų nustatyti.

Praėjimai prasideda **nuo modelio krašto, eidami į vidų**, arba **nuo jo viršaus, eidami žemyn**. Tai atstumo kontūrai paviršiuje (ne aukščio), todėl ant nuolydžio jie plane arti vienas kito, o ant lygumos plačiai išsidėstę. Atstumas matuojamas paviršiaus tinklelyje ir yra tikslus iki maždaug 1 %; lankų aukštis tikslus ten, kur paviršius plokščias ar lėtai lenktas, ir apytikslis ten, kur jis greitai lenkiasi. **Climb** palieka aukštesnę paviršiaus pusę frezos dešinėje.

## Kaip geros trajektorijos

Ką tikrina testai, naudojant uždaras formules ar nepriklausomą visos frezos pėdsakos paiešką:

- Galo aukštis po įrankiu tikslus rutuliniam, pusapvaliam ir plokščiam įrankiui ant paviršių, briaunų ir kampų tinklo, ir niekada neviršija tikro aukščio; lygiagrečioms linijoms trajektorija lieka tolerancijos ribose, o įpjova nėra gilesnė už ją.
- Trajektorijų ilgiai ant pasvirusios plokštumos sutampa su uždara formule; lankinių praėjimų atstumas plokštumoje yra prašomas, o lankas tarp jų išeina prašomo aukščio.
- Medžiagos modeliavimas po praėjimo neparodo įpjovos ir parodo likusius lankus.

Ko šios trajektorijos nėra: tai pagrindiniai apdailos praėjimai, o ne viskas, ką siūlo gamybinė sistema.

- Neįdiegta: vandens linija (pastovus z), pieštuko ir kampų valymas, spinduliniai ir spiraliniai praėjimai, kreivės projektavimas ant paviršiaus, plokščių sričių aptikimas, poilsio apdirbimas, laikiklio ir kotelio susidūrimų tikrinimas bei bet koks įrankio pasvirimas.
- Frezos centras lieka virš modelio: trajektorijos sustoja ties modelio kraštu, o ne tęsiasi už jo, todėl vertikali siena tiesiai ties kraštu nėra apdirbta iki savo pagrindo.
- Įpjovos nematomos (matomas yra paviršius, kurį freza sutinka iš viršaus).
- Modelis yra branduolio tinklas, todėl trajektorijos seka tinklą (jo chord tolerancija maždaug 0.0002 detalės įstrižainės), o ne tikrą paviršių.
- Didelio modelio apdaila smulkia tolerancija sudaro ilgą programą su daugybe trumpų judesių. Prieš frezuodami patikrinkite išvestį savo mašinos simuliatoriuje.
