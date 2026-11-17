---
title: Dokumentai ir revizijos (saugykla)
summary: Žingsnis po žingsnio apžvalga apie vieną tikrą darbą: projekto aplanko detales ir surinkimus įdėti po kontrole, paimti detalę, ją pakeisti, grąžinti su pastaba, paskelbti, pamatyti, kas ją naudoja, ir medžiagų sąrašą, ką mato antras asmuo, kol failas užrakintas, ir kaip tai veikia su debesies aplankais.
keywords: saugykla, dokumentai, instrukcija, mokymas, paimti, grąžinti, revizija, paskelbti, patvirtinti, užrakinti, istorija, kur naudojama, medžiagų sąrašas, bom, surinkimas, debesies aplankas, projekto aplankas, du asmenys, bendras aplankas
from: 0a5e6983
---

## Ką darysite

Jūs esate Ana, dirbate su Riverside Clinic projektu kartu su kolega Ben. Projekto detalės ir surinkimai laikomi viename aplanke, kurį abu pasiekiate (bendras diskas, sinchronizuojamas aplankas arba debesies aplankas). Pabaigoje vienas failas bus nuėjęs nuo pirmos kopijos iki paskelbtos revizijos **A**, vėliau pakeistas kaip **B.1**, matysite, kas ką padarė, ir matysite, ką mato Ben, kai jūs laikote failą.

Viskas laikoma paslėptame aplanke `.ccvault` šalia jūsų failų: be serverio, nieko neįkeliama (išimtis – debesies aplankas, žr. paskutinį žingsnį). Visus mygtukus ir taisykles vienoje vietoje rasite temoje *Dokumentai: paėmimas, revizijos ir paskelbimas*, jei ji yra jūsų programoje.

## 1. Nustatykite projekto aplanką

1. Juostos grupėje **Failas** pasirinkite {{ui:Documents…}}.
2. Pasirinkite {{ui:Choose the project folder}} ir nurodykite aplanką, kuriame yra projekto detalės ir surinkimai. (Projekto aplankai veikia programoje „Studio“ ir naršyklėse, kurios gali atverti aplanką, pavyzdžiui, Chrome ir Edge. Kitose naršyklėse skydelyje tai nurodoma.)
3. Šalia **Jūs:** pasirinkite {{ui:Change}} ir įrašykite savo vardą `Ana` (jei paklaus, ir šio kompiuterio pavadinimą). Skydelyje dabar rašoma *Jūs: Ana on* ir jūsų kompiuteris. Jūsų vardas bus prie visko, ką darote.
4. Pasirinkite {{ui:Start a vault in this folder}} ir įrašykite projekto pavadinimą `Riverside clinic`. Skydelyje rašoma *Saugykla pradėta projektui Riverside clinic.*

## 2. Įdėkite failą po kontrole

1. Atverkite **Failai ne saugykloje** ir pasirinkite {{ui:Add}} šalia `plates/Bracket.partcraft.json`.
2. Jis pasirodys **Failai saugykloje** su revizija **A.1**, būsena **Darbas vyksta**. A.1 yra pirmoji jo kopija; saugykla saugo kiekvienos revizijos kopiją.

## 3. Paimkite, pakeiskite, grąžinkite

1. Pasirinkite {{ui:Open}} šalia `plates/Bracket.partcraft.json`. Detalė atsidaro PartCraft, o skydelis užsidaro, kad matytumėte detalę. Skydelį vėl atverkite iš {{ui:Documents…}}.
2. Vėl atverkite skydelį ir pasirinkite {{ui:Check out}}. Eilutėje dabar rašoma **Paimta jums**. Aplanke `.ccvault/locks` sukurtas užrakto failas; niekas kitas negali paimti šio failo, kol jūs jo negrąžinsite.
3. Pakeiskite detalę: pakeiskite matmenį, pridėkite skylę. Įrašyti neleidžiama, kol failas nepaimtas jums, ir nurodoma priežastis; {{ui:Įrašyti kaip}} visada veikia savo kopijai.
4. Atverkite skydelį, pasirinkite {{ui:Check in}} ir įrašykite, kas pakeista (`Moved the door`). Skydelyje rašoma *grąžinta kaip A.2*. Projekto aplanke dabar yra atidaryta detalė, o užraktas pašalintas. Grąžinus be pakeitimų, revizija išlieka.

Jei apsigalvojote, {{ui:Undo check-out}} grąžina failą be naujos revizijos.

## 4. Peržiūra ir paskelbimas

1. Pasirinkite {{ui:Send for review}}. Būsena tampa **Peržiūroje**, o failas tik skaitomas.
2. Prieš patvirtinant pasirinkite {{ui:Project settings}} ir surašykite, kas gali patvirtinti (po vieną vardą eilutėje), pavyzdžiui, `Ben` ir `Carla`, bei pažymėkite taisyklę, kad patvirtinantis asmuo turi būti kitas nei autorius. Pasirinkite {{ui:Save settings}}. Dabar pati saugykla neleidžia kitiems.
3. Ben (arba Carla) pasirenka {{ui:Approve}} ir įrašo patvirtinančiojo vardą. Būsena tampa **Išleista**, o revizija – **A**, su *patvirtino* ir vardu. Išleistas failas tik skaitomas. {{ui:Send back}} būtų grąžinęs jį į būseną **Darbas vyksta**, nurodant priežastį.

Patvirtinančiojo vardas yra įrašas, kas patvirtino, o ne tapatybės patvirtinimas: jis įrašomas skydelyje.

## 5. Nauja revizija

1. Išleistame faile pasirinkite {{ui:New revision}}. Jį laikote kitai raidei.
2. Pakeiskite ir tada pasirinkite {{ui:Check in}}. Revizija bus **B.1**, darbas vyksta. Paskelbkite taip pat, ir ji taps **B**. {{ui:Undo check-out}} prieš pirmą grąžinimą palieka **A**.

Raidės eina A, B … Z, AA, AB. Jei jūsų standartas kai kurias raides praleidžia, projekto parametras *Naudoti ASME Y14.35 seką* kitoms revizijoms praleidžia I, O, Q, S, X ir Z.

## 6. Pažiūrėkite, kas įvyko

Pasirinkite failo pavadinimą, kad atvertumėte jo išsamią informaciją:

- **{{ui:History}}**: visi įvykiai, naujausi pirmi, su tuo, kas, kuriame kompiuteryje ir kada: *grąžinta kaip A.2* – Ana, *Išleista* – Ben ir t. t.
- **{{ui:Revisions}}**: revizijų lentelė: visos išsaugotos revizijos su data, kas grąžino, pastaba ir kas patvirtino. Saugykla kiekvienos revizijos kopiją laiko `.ccvault/revs`.
- **{{ui:Uses}}**: surinkimo detalės.
- **{{ui:Used by}}**: sąraše pateikiami visi saugykloje esantys surinkimai, kuriuose yra ši detalė: pakeitę laikiklį žinosite, kuriuos surinkimus patikrinti.

## Surinkimai: ką jie naudoja ir medžiagų sąrašas

Įdėkite į aplanką surinkimą (`.partcraft.json`, įrašytą iš Surinkimo režimo) ir pridėkite jį. Pasirinkite jo pavadinimą: **Uses** išvardija jame esančias detales su kiekvienos detalės revizija ir būsena; **Used by** prie detalės išvardija visus surinkimus, kuriuose ji yra. {{ui:Bill of materials (CSV)}} įrašo visą detalių sąrašą lygis po lygio, su kiekiais, revizijomis ir būsenomis, skaičiuoklei. Pakeiskite laikiklį, ir **Used by** parodys, kuriuos surinkimus peržiūrėti.

## 7. Ką mato Ben, kol jūs laikote failą

Dabar vėl paimkite failą, o Ben paprašykite atverti tą patį projekto aplanką savo kompiuteryje ir atverti skydelį. Failo eilutėje jis matys **Paėmė Ana** (jūsų kompiuteris) **nuo** laiko ir nebus {{ui:Check out}} mygtuko. Jei jis vis tiek bandys, saugykla neleis: užrakto failas yra toks, kurio sistema neleis sukurti du kartus, todėl du asmenys negali abu laikyti failo net tą pačią akimirką, kai aplankas yra diske programoje „Studio“. (Naršyklėje aplankas leidžia tik maksimalų bandymą, ir skydelyje **Folder** tai nurodoma.)

Jei Ana išvykusi, o Benui reikia failo, {{ui:Break check-out}} jį atlaisvina. Jis turi įvesti priežastį; ji įrašoma žurnale kartu su tuo, kieno buvo paėmimas. Kai projekte nurodyti administratoriai, tik jie gali tai padaryti. Paėmimas, senesnis nei senumo riba (pagal numatytuosius nustatymus 14 dienų), pažymimas *a long time* (ilgai). Po nutraukimo Anos vėlyvas grąžinimas atmetamas, todėl vienas kito negalite perrašyti.

## 8. Debesies aplankai

Debesies aplankas – tai projekto aplankas, laikomas jūsų komandos debesies saugykloje, todėl komandai nereikia bendro disko. Programoje „Studio“, prisijungus prie savo CadCraft paskyros, skydelyje šalia {{ui:Choose the project folder}} rodomas {{ui:Open a cloud folder}}. Pasirinkite jį ir nurodykite aplanką, kuris išvardytas kaip darbo sritis / aplankas. Darbo srities savininkas pirmiausia sukuria aplanką, o komandos debesies saugykla turi būti aktyvi. Viskas aukščiau veikia taip pat; užraktą sukuria serveris, ir jis griežtai saugo nuo kelių asmenų. Jei nesate prisijungę, skydelyje prašoma prisijungti. Įprastame naršyklės skirtuke debesies mygtukas nesiūlomas; naudokite „Studio“.

## Išbandykite

Atlikite aukščiau nurodytus aštuonis žingsnius su realaus failo kopija. Dviejų asmenų žingsniams reikia kito asmens arba dviejų langų su dviem vardais. Jei išbandysite su tikru bendru aplanku, Bendruomenės testavimo puslapyje yra patikrinimas, kuris klausia būtent to, ir priima rezultatus.
