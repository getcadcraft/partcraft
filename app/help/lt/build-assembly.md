---
title: Surinkimo kūrimas su jungtimis
summary: Pradėkite surinkimą nuo detalės, įterpkite kopijas ir kitas detalių bylas, sujunkite jas standžiomis, sukamosiomis, slankiosiomis, cilindrinėmis, plokštuminėmis, rutulinėmis ir kaiščio tarpe jungtimis plokščiais paviršiais, centruokite jungtis ant ašių, redaguokite detalę vietoje ir įrašykite surinkimą.
keywords: surinkimas, sąsaja, sąsajos, jungtis, kilpa, uždara kilpa, mechanizmas, keturnaris mechanizmas, standus, sukamasis, slankusis, cilindrinis, plokštuminis, rutulinis, rutulinė jungtis, sferinis, kaištis tarpe, įterpti komponentą, įtvirtintas, fiksuotas, koncentriškas, sutapimas, redaguoti detalę, kontekste, partcraft-asm
from: a53bbfef
---

Surinkimas sudeda detales kartu. PartCraft **jungtys** išdėsto detales: kiekviena jungtis sėdi ant plokščio dviejų detalių paviršiaus ir sujungia jas paviršius prie paviršiaus. Sukamoji jungtis leidžia vienai detalei sukiotis, slankioji – slysti, standi jungtis ją fiksuoja.

## Surinkimo pradžia

1. Sukurkite detalę su kietuoju kūnu (tuščios detalės negalima įtraukti į surinkimą: „Pirmiausia sukurkite kietąjį kūną, tada įdėkite jį į surinkimą.“).
2. Įrankių juostoje pasirinkite {{ui:Surinkimas}}.

Būsenos juostoje rodoma „Surinkimas pradėtas, Part1 yra įtvirtinta detalė. Įdėkite daugiau detalių („Pridėti kopiją“, „Įterpti“ arba „Redaguoti › Dubliuoti“), tada sujunkite jas jungtimis.“ Kairiajame skydelyje dabar rodomos **Detalės** ir **Jungtys**, o įrankių juostoje – surinkimo įrankiai. Eskizo ir elementų įrankiai paslepiami.

Pirmoji detalė yra **įtvirtinta**: ji niekada nejuda, o visa kita išdėstoma jos atžvilgiu.

## Detalių įterpimas

- {{ui:Pridėti kopiją}} įterpia dar vieną pasirinktos detalės kopiją (arba paskutinės). Kopijos naudoja vieną detalę: pakeiskite ją, ir pasikeičia kiekviena kopija.
- {{ui:Dubliuoti}} ({{key:Mod+D}}) Redagavimo grupėje daro tą patį su pasirinkta detale. {{key:Mod+C}} ir {{key:Mod+V}} nukopijuoja detalę ir įklijuoja ją šalia kitų, šiame ar kitame surinkime; {{key:Mod+Shift+V}} įklijuoja ją į tą pačią vietą. Žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).
- {{ui:Įterpti}} įterpia detalę iš `.partcraft.json` failo jūsų kompiuteryje. Detalė nukopijuojama į surinkimą.

Naujos detalės atsiranda 20 mm į dešinę nuo visko, kas jau yra, ir ten lieka, kol jungtis jų nepadėjo. Detalę be jungties taip pat galima perkelti ranka: įvedant reikšmes arba tempiant rodykles (žr. [Detalių sąrašas, išskleistos peržiūros ir judančios detalės](topic:assembly-bom-explode)).

## Dviejų detalių sujungimas

1. Pasirinkite {{ui:Jungtis}} arba paspauskite {{key:J}}. Dešiniajame skydelyje rodoma **Nauja jungtis**.
2. Spustelėkite plokščią paviršių pirmoje detalėje. Jis paryškinamas.
3. Spustelėkite plokščią paviršių antroje detalėje.

Antroji detalė peršoka taip, kad jos paviršius gulėtų prie pirmosios detalės paviršiaus, nukreiptas į jį. Jungtis atsiranda po **Jungtys**, pavyzdžiui „Revolute1“, o dešiniajame skydelyje rodomi jos nustatymai.

- Jei abu paviršiai sukurti sukimo elementais, jungtis pradedama kaip **sukamoji**; kitaip – **standi**. Vėliau pakeiskite.
- Išlenkti paviršiai negali būti pasirenkami: „Šis paviršius išlenktas. Pasirinkite plokščią paviršių (norėdami sukti apie skylę ar sukimo ašį, vėliau pasirinkite ją jungties nustatymuose).“
- {{key:Esc}} atšaukia pradėtą jungtį (arba spustelėkite detalę kairiajame sąraše).

### Jungties nustatymai

| Nustatymas | Ką daro |
|---|---|
| **Tipas** | Viena iš žemiau esančioje lentelėje nurodytų jungčių |
| **Kampas (°)** | Pasuka antrąją detalę apie jungties ašį (statmenai paviršiams) |
| **Poslinkis (mm)** | Perkelia antrąją detalę išilgai ašies, nuo paviršiaus (neigiamos reikšmės stumia į jį) |
| **Išilgai X**, **Išilgai Y**, **Posvyris apie X**, **Posvyris apie Y**, **Išilgai tarpo**, **Tarpo kryptis** | Kitos reikšmės, rodomos jungtims, kurios jas naudoja |
| **Centras** (kiekvienai pusei) | Kur jungties ašis kerta paviršių: „Paties paviršiaus pradžios taškas“, sukimo ašis („Axis of Revolve1“) arba vienos skylės ašis („Hole1, hole 2“) |

Kiekviena jungties judama reikšmė turi tempimo slankiklį po laukeliu; kitos nustatomos vieną kartą.

| Jungtis | Kas juda | Nustatoma vieną kartą |
|---|---|---|
| **Standi** | nieko | Kampas, Poslinkis |
| **Sukamoji** | Kampas (vyris) | Poslinkis |
| **Slankioji** | Poslinkis (stalčius) | Kampas |
| **Cilindrinė** | Kampas ir Poslinkis (velenas paprastame guolyje) | |
| **Plokštuminė** | Išilgai X, Išilgai Y per paviršių ir Kampas (detalė slysta stalu) | |
| **Rutulinė** | Kampas (sukimasis) ir Posvyris apie X ir Y, apie jungties centrą (rutulinis šarnyras) | |
| **Kaištis tarpe** | Išilgai tarpo ir Kampas (kaištis tiesiame tarpe) | Tarpo kryptis: tarpo kampas nuo paviršiaus X |

Paviršiaus X ir Y yra pirmosios detalės paviršiaus X ir Y; jungties centras nustatomas su **Centras**.

„Paties paviršiaus pradžios taškas“ yra detalės pradžios taškas, projektuojamas ant paviršiaus; dažnai tai nėra vieta, kur norėtumėte suderinti detales. Apvaliosioms detalėms ir kaiščiams nustatykite **Centras** į sukimo ašį arba skylės ašį abiejose pusėse: ašys tada sutampa, kaip koncentriška sąsaja.

### Pavyzdys: dvi flanšos, sujungtos varžtais paviršius prie paviršiaus

1. Atidarykite flanšo detalę (sukimas su apskritiminiu skylių masyvu) ir pasirinkite {{ui:Surinkimas}}.
2. Pasirinkite {{ui:Pridėti kopiją}}.
3. Paspauskite {{key:J}}, spustelėkite pirmos flanšos disko plokščią paviršių (paviršių, nuo kurio prasideda varžtų skylės), tada tą patį paviršių antroje flanšoje. Paviršiai sukurti sukimu, todėl jungtis yra sukamoji.
4. Nustatykite **Centras** į „Axis of Revolve1“ abiejose pusėse. Dabar flanšos turi bendrą ašį.
5. Įveskite `22.5` lauke **Kampas (°)**, kad suderintumėte varžtų skyles, arba tempkite slankiklį.

## Uždarosios kilpos: mechanizmai

Detalės, sujungtos žiedu (keturnarį mechanizmą, alkūninį ir slankiklio mechanizmą, rėmą sutvirtintą iš abiejų pusių), sudaro **kilpą**. PartCraft išsprendžia kiekvieną kilpą, kad ji užsidarytų: joje esančios jungtys įgyja reikšmes, kurios sujungia žiedą, ir juda kuo mažiau nuo buvusios vietos.

- **Nustatykite arba tempkite** kilpos jungties reikšmę, ir likusi kilpos dalis seka paskui. Keturnariam mechanizmui tempkite alkūnės **Kampą**, ir jungiamasis strypas bei svirtis juda kartu. Jūsų nustatyta reikšmė išlieka; kitos apskaičiuojamos iš jos.
- Sąraše kilpos jungtis, kuri dar gali judėti, rodoma **mėlynai**: galima nustatyti dar kitą reikšmę. Kilpa, kuri negali judėti (sutvirtintas rėmas), lieka juoda. Kilpa, kuri negali užsidaryti, rodoma **raudonai**.
- Laukelyje **Detalė** rodoma **Kilpos**: kiek jų uždarytos ir kiek reikšmių dar gali judėti, pavyzdžiui „1 uždaryta; 1 reikšmė dar gali judėti“.
- {{ui:Patikrinti judesį dėl susikirtimų}} žingsnis po žingsnio perbraukia kilpos jungtį, o kilpa seka paskui (žr. [Surinkimo patikrinimas dėl susikirtimų ir judesio](topic:check-assembly)).

Plokščias mechanizmas iš plokščių juostų turi sutapti gyliu: dvi detalės, sujungtos paviršius prie paviršiaus abiejose žiedo pusėse, turi abiem kryptimis turėti tą pačią krūvos aukštį. Naudokite jungties **Poslinkį**, kad pakeltumėte detalę ten, kur krūvos aukštis nesutampa, kitaip kilpa negali užsidaryti.

## Darbas su detalėmis

Spustelėkite detalę vaizde arba sąraše, kad ją pasirinktumėte. Dešiniajame skydelyje rodomas jos pavadinimas, kiek yra kopijų, tūris, jungtys ir ar ji įtvirtinta, nustatyta jungtimis, ar „Nesujungta: lieka ten, kur buvo padėta“. Mygtukai:

- {{ui:Redaguoti šią detalę}} (arba {{ui:Redaguoti detalę}} įrankių juostoje, arba dukart spustelėkite detalę sąraše): atveria detalę redagavimui;
- {{ui:Įterpti kopiją}};
- {{ui:Padaryti įtvirtinta detale}};
- {{ui:Pašalinti}}: taip pat pašalina jos jungtis, po patvirtinimo.

Surinkimas išlaiko bent vieną detalę: „Surinkimas turi bent vieną detalę. Vietoj to uždarykite jį.“

### Detalės redagavimas vietoje

1. Pasirinkite detalę ir pasirinkite {{ui:Redaguoti detalę}}. Detalė atsiveria su savo istorija; antraštėje rašoma „Bracket (in Bracket assembly)“.
2. Pakeiskite ją kaip bet kurią kitą detalę.
3. Įrankių juostoje pasirinkite {{ui:Atgal}}. Surinkimas atsinaujina: pasikeičia kiekviena tos detalės kopija, o jungtys ant eskizo briaunomis sukurtų paviršių seka pakeitimus.

Pakeitimo grąžinimas yra vienas žingsnis surinkimo anuliavimo sąraše.

## Anuliavimas, įrašymas ir uždarymas

- Surinkimas turi savo anuliavimo sąrašą: {{key:Mod+Z}} ir {{key:Mod+Y}} veikia jungtims, įterpimams ir nustatymams.
- {{ui:Įrašyti}} arba {{key:Mod+S}} atsisiunčia `<assembly name>.partcraft-asm.json` su visomis joje esančiomis detalėmis. Vėliau atverkite jį su {{ui:Atidaryti}}.
- {{ui:Uždaryti}} uždaro surinkimą ir grąžina į detalę, iš kurios pradėjote. Jei surinkimas neįrašytas, klausiama: {{ui:Atšaukti}}, {{ui:Atmesti surinkimą}} arba {{ui:Pirmiausia įrašyti}}.
- Norėdami pervadinti surinkimą, spustelėkite tuščią vietą, kad nieko nebūtų pasirinkta, ir dešiniajame skydelyje pakeiskite **Pavadinimą**.

## Dideli surinkimai

Surinkime gali būti tūkstančiai kelių detalių kopijų. Vienos detalės kopijos piešiamos kartu, pasukta jungtis išdėsto tik už jos esančias detales, o detalių sąrašas rodo pirmąsias eilutes su mygtuku „Rodyti daugiau“ po jomis (pasirinkta detalė visada rodoma).

- Kol sukate ar keičiate vaizdo mastelį, surinkimas, turintis daugiau nei apie 300,000 trikampių, piešiamas kaip viena dėžutė kiekvienai detalei, o po trumpo sustojimo – visas.
- {{ui:Vaizdai}} › {{ui:Supaprastintas rodymas}} dėžutes rodo visada. Detalių ir jungčių pasirinkimas vis tiek naudoja tikras detales.
- Sukimosi greitis priklauso ir nuo jūsų vaizdo plokštės. PartCraft išmatuoti skaičiai pateikti išleidimo pastabose kartu su įrenginiu, kuriuo jie buvo matuoti.

## Jungčių problemos

- Detalė, kurios nepasiekia jokia jungtis, sąraše nurodoma kaip **laisva**, o skydelyje rašoma „Bracket2 nesujungta su įtvirtinta detale, todėl lieka ten, kur buvo padėta.“
- Kilpa, kuri negali užsidaryti (ilgiai nepasiekia, riba sustabdo jungtį, paviršiai nesutampa gyliu): „Revolute3 sudaro kilpą, kuri negali užsidaryti: nukrypimas 2.000 mm. Patikrinkite kilpos jungčių paviršius, poslinkius ir ribas.“ Jos jungtys tampa raudonos.
- Jei paviršius ar ašis, kurią naudoja jungtis, dingsta redaguojant detalę: „Šios jungties naudojamas paviršius dingo iš Bracket.“ Pašalinkite jungtį ir sukurkite ją iš naujo.

Toliau: [Surinkimo patikrinimas dėl susikirtimų ir judesio](topic:check-assembly).
