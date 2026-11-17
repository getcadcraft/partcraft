---
title: Detalės iš fizikos: generatoriai
summary: Inžinerijos darbo sritis ir elementas Sugeneruotas kūnas: pasirinkite generatorių, nustatykite jo įvestis (srautą, slėgį, temperatūras, medžiagą, spausdintuvą) ir gaukite detalę, apskaičiuotą pagal vadovėlių formules, su jos duomenų lapu, gamybos patikrinimais ir failais analizės įrankiams. Tos pačios įvestys visada duoda tą pačią detalę.
keywords: engineer, generatorius, sugeneruotas kūnas, fizika, taisyklės, šilumokaitis, kolektorius, antgalis, gardelė, giroidas, duomenų lapas, įvestys, deterministinis, tos pačios įvestys – ta pati detalė, gamybos patikrinimai, 3D spausdinimas, miltelių lova
from: 5a387dc0
---

**Generatorius** – tai scenarijus, kuris pagal jūsų reikalavimus apskaičiuoja detalės dydį ir ją sukuria. Šilumokaičio generatorius priima perduodamą šilumą, du srautus ir jų temperatūras, slėgį ir medžiagą; jis apskaičiuoja, koks turi būti branduolys ir kokia jo sienelė, sukuria jį, pateikia naudotus skaičius ir nurodo, iš kur paimtas kiekvienas. Pakeitus įvestį, detalė seka paskui.

Rezultatas yra įprastas kūnas detalėje: jis yra elementų sąraše, spausdinamas, eksportuojamas. Generatorius taip pat laikomas detalėje, todėl failas atsidaro bet kuriame kompiuteryje, kuriame generatorius neįdiegtas, o **detalės atidarymas niekada nevykdo scenarijaus**.

## Sukurti kūną

1. Perjungiklyje pasirinkite {{ui:Engineer}} darbo sritį.
2. Sąraše pasirinkite generatorių (tuos, kurie pateikiami su PartCraft, tada bet kurį atverstą iš failo) ir spustelėkite {{ui:New}}.
3. Scenarijus vykdomas. Kai jis baigiasi, kūnas rodomas vaizde, o skydelyje matyti jo įvestys, jo **duomenų lapas** ir **patikrinimai**.

Taip pat galite pridėti jį iš Dizaino darbo srities: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Keisti

Pakeitus bet kurią įvestį, kūnas vėl sukuriamas netrukus po to, kai nebenustatote rašymo. Skydelyje nurodoma, kuris iš trijų dalykų teisingas:

- **Atnaujinta**: kūnas atitinka scenarijų ir jo įvestis.
- **Įvestys pakeistos**: kūnas detalėje yra iš ankstesnių įvesčių; jis kuriamas iš naujo, arba paspauskite {{ui:Run}}.
- **Dar nepaleista** arba **Paskutinis paleidimas nepavyko**: rodoma scenarijaus klaida su jos eilute.

{{ui:Stop}} nutraukia paleidimą, kuris užtrunka per ilgai. Anuliavimas grįžta po vieną žingsnį: paleidimas yra vienas žingsnis, įvestis – vienas žingsnis.

## Duomenų lapas

Kiekvienas generatoriaus apskaičiuotas skaičius išvardijamas su savo **vienetu** ir **iš kur jis paimtas** (vadovėlio formulė, standartas, duomenų lapas). Nieko nėra paslėpta kaip pastovi reikšmė. Lapas yra failo dalis, todėl kitame kompiuteryje jis toks pat. [Duomenų išvestis](topic:data-out) aprašo, kaip jį įrašyti kaip JSON ar PDF.

## Patikrinimai

Generatorius gali patikrinti savo detalę pagal spausdinimo procesą: sienelės ir tarpai, plonesni nei proceso riba, laisvos dalys, ertmės, kurios įstrigdina miltelius ar dervą, skylės, per siauros, kad jas būtų galima išvalyti, ir nuolydžiai, kuriems reikia atramos. Rezultatai pateikiami skydelyje ir sąraše **Problemos** (⚠ mygtukas) ir įrašomi kartu su detale.

Procesų skaičiai yra apvalūs skaičiai, kuriuos viešieji projektavimo vadovai pateikia procesui apskritai (FDM, SLA, SLS, metalo miltelių lova). Jie **nėra jūsų mašinos specifikacija**: prieš pasikliaudami patikrinimu, pakeiskite juos savo dirbtuvių skaičiais. Patikrinimas dirba voksellių tinkle, todėl jis tikslus iki maždaug vokselio: sienelė pranešama tik tada, kai ji plonesnė už ribą daugiau nei vokseliu.

## Ką pateikiame

| Generatorius | Ką sukuria |
|---|---|
| Gyroid block | Blokas, užpildytas giroidu, Schwarz P ar deimanto lakštu: paprasčiausia gardelė |
| Gyroid heat exchanger | Dviejų skysčių šilumokaičio branduolys, apskaičiuotas pagal apkrovą efektyvumo-NTU metodu, jo sienelė – pagal slėgį; gali patikrinti slėgio kritimą srauto tyrimu vienoje ląstelėje |
| Distribution manifold | Kolektorius ir šakos, kiekvienas vamzdis apskaičiuotas pagal jame tekantį srautą |
| Graded lattice beam | Gardelė, kurios sienelė storėja ten, kur topologijos optimizavimas rodo, kad reikia medžiagos |

Visi jie yra pirminiai įvertinimai, paremti vadovėlių formulėmis. [Inžinerijos biblioteka](topic:engineering-library) išvardija formules ir jų ribas. Prieš pasikliaudami rezultatu, paleiskite ant jo Simulation, Thermal ar Flow.

## Eksporto kontrolė

Engineer generatoriai ir duomenų lapai turi pranešimą apie eksporto kontrolę ir sankcijas. Perskaitykite jį [Engineer ir eksporto kontrolė](topic:engineer-export-notice); jis taip pat yra kiekvieno duomenų lapo apačioje.

## Dar neįgyvendinta

- Kolektoriai, jungtys ir fitingai šilumokaičio branduolyje: tai tik branduolys.
- Temperatūrų kreivės medžiagų stiprumui: medžiagos paimtos kambario temperatūroje.
- Trišakių nuostoliai ir srauto pasidalijimas tarp išėjimų kolektoriuje.
- Generatorių pridėjimas iš priedų katalogo vienu spustelėjimu; atidarius failą, vienas pridedamas į šią naršyklę.
- Generatoriai kitoms programoms.
