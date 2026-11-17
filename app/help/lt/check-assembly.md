---
title: Surinkimo tikrinimas dėl susikirtimų ir judesio
summary: Raskite persidengiančias detales naudodami Susikirtimai, tempkite bet kurios jungties reikšmes, kad matytumėte judesį, ir perbraukite jungtį per jos ribas, kad rastumėte, kur detalės susiduria.
keywords: persidengimas, persidengimų aptikimas, susikirtimas, susidūrimas, sutapimas, sriegio tinkamumas, sriegio gylio neatitikimas, liečiantys paviršiai, slėpti, filtras, judesys, judesio tyrimas, perbraukimas, judesio diapazonas, tikrinti
from: 9c98db46
---

Dvi patikros atliekamos detalėms, kai jos jau išdėstytos: **Susikirtimai** tikrina, ar dabar nėra persidengiančios medžiagos, o **judesio patikra** perkelia vieną jungtį per jos diapazoną ir ieško persidengimų visame kelyje.

## Persidengimų tikrinimas

1. Atidarykite arba sukurkite surinkimą (žr. [Surinkimo kūrimas](topic:build-assembly)).
2. Pasirinkite {{ui:Susikirtimai}}.

Būsenos juostoje pranešamas rezultatas:

- „Tarp 3 detalių persidengimų nėra (… ms).“ Nieko nepersidengia.
- „Persidengimai: Flange1 ir Flange2: Persiklojimas, 2.5 mm³.“ Kiekviena pora, koks rezultato tipas ir bendras tūris.

Kairiajame laukelyje **Surinkimas** rodoma **Persidengimai**: „Nėra“, „2 rezultatai“ (rodomi), arba „Netikrinta“. Kai nieko nepasirinkta, dešiniajame skydelyje kiekvienas rezultatas išvardijamas skiltyje **Persidengimai**.

Rezultatas išvalomas, kai tik pasikeičia surinkimas. Po jungties perkėlimo paleiskite {{ui:Susikirtimai}} dar kartą. Kiekviena detalių pora tikrinama su kiekviena kita, todėl dideliems surinkimams prireiks daugiau laiko.

### Rezultatų tipai

| Tipas | Reiškia |
|---|---|
| **Persiklojimas** | Detalės turi bendrą tūrį: tikras susikirtimas. |
| **Sriegio gylio neatitikimas** | Bendras tūris yra vienos detalės sriege, bet už kitos: varžtas, sriegtas giliau nei jo skylė, arba paprastas kotas išsriegtoje skylėje. |
| **Sriegio tinkamumas (kosmetiniai sriegiai)** | Bendras tūris yra abiejų detalių sriegiuose: varžtas išsriegtoje skylėje. Kosmetiniai sriegiai piešiami pilnu sriegio dydžiu, todėl visada šiek tiek persidengia. |
| **Liečiantys paviršiai** | Bendro tūrio nėra, bet paviršiai liečiasi (0.001 mm tikslumu). |

Modeliuoti sriegiai (žr. [Sriegiai velenuose ir angose, nubraižyti ar modeliuoti](topic:threads)) yra tikra geometrija: tai, ką jie turi bendro, yra **Persiklojimas**.

### Paslėpkite tai, ko nereikia matyti

Skiltyje **Persidengimai** **Rodyti** turi laukelį kiekvienam tipui: panaikinkite **Sriegio tinkamumą** ir **Liečiančius paviršius**, kad matytumėte tik svarbius susikirtimus. **Slėpti šią porą** šalia rezultato paslepia tą detalių porą, nepriklausomai nuo tipo. Paslėpti rezultatai suskaičiuojami („2 rezultatai paslėpti pagal šiuos filtrus“), o **Vėl rodyti paslėptas poras** grąžina poras. Būsenos juostoje paslėpti rezultatai taip pat skaičiuojami.

Filtrai įrašomi kartu su surinkimu, o kiekvienas pakeitimas yra vienas {{key:Mod+Z}} žingsnis. **Perbraukti jungtį dėl susikirtimų** (žemiau) naudoja juos taip pat. Surinkimas su filtrais įrašomas kaip 4 versija; ankstesnės PartCraft versijos jo atidaryti atsisako, o ne praranda filtrus.

## Judesio stebėjimas

1. Kairiajame sąraše pasirinkite judančią jungtį (bet kurią, išskyrus standžią).
2. Tempkite slankiklį po viena iš jos reikšmių, pavyzdžiui **Kampas (°)** arba **Poslinkis (mm)**. Detalė juda kartu su jūsų tempimu.
3. Paleiskite. Nauja padėtis išsaugoma ir ją galima anuliuoti su {{key:Mod+Z}}.

Taip pat galite įvesti kampą ar poslinkį laukelyje ir paspausti {{key:Enter}}.

Jungtis uždaroje kilpoje (mechanizme) perkelia visą kilpą: vilkta reikšmė išlieka, o kitos kilpos jungtys seka paskui (žr. [Uždarosios kilpos](topic:build-assembly#closed-loops-linkages)).

## Jungties perbraukimas dėl susikirtimų

1. Pasirinkite judančią jungtį.
2. Jungčiai su keliomis reikšmėmis (cilindrinė, plokštuminė, rutulinė, kaištis tarpe) pasirinkite, kurią perbraukti, skiltyje **Tikrinti judesius**.
3. Pasirinkite {{ui:Patikrinti judesį dėl susikirtimų}}.

PartCraft perkelia tą reikšmę per 25 padėtis 24 vienodais žingsniais, kitos lieka nepakitusios: kampas nuo −180° iki 180° (posvyris nuo −90° iki 90°), ilgis nuo minus iki pliuso didžiausios detalės dydžio. Ji praneša:

- „Susikirtimų nerasta visame diapazone Kampas (°) nuo -180 iki 180 (patikrinta 25 padėtys).“
- „6 iš 25 padėčių susikerta, pirmą kartą prie Kampas (°) 45 (12.4 mm³).“ Pirmoji susikertanti padėtis ir persidengimas joje.

Mygtukas pilkas standžioms jungtims, kurios nejuda. Perbraukimas tikrina tik padėtis, o ne kelią tarp jų: plona detalė galėtų praeiti pro kitą tarp dviejų žingsnių.

:::note
Kontaktas ir gravitacija dar nesukurti. Be ribų perbraukimas apima visą diapazoną; nustatykite reikšmei **Ribas** (žr. [Detalių sąrašas, išskleistos peržiūros ir judančios detalės](topic:assembly-bom-explode)), ir perbraukimas apima tik jas, taigi lankas, kuris atsiveria 90°, tikrinamas 90° ribose.
:::

## Judesio tyrimas

**Surinkimas › Judesys** per jūsų nurodytą laiką perkelia vienos jungties reikšmę nuo pradžios iki pabaigos (pastovus greitis, sušvelninimas, sinusas arba pirmyn ir atgal), kiekviename žingsnyje išdėsto surinkimą su jo jungtimis ir uždarosiomis kilpomis bei praneša, kas susikerta ir kaip arti priartėja detalės. **Pridėti tašką** seka detalės vidurį arba jūsų spustelėtą tašką, o kortelėje braižoma jo padėtis, greitis ir pagreitis, jungties reikšmė ir tarpas laiko atžvilgiu; **Įrašyti CSV** ir **Įrašyti grafiką** įrašo juos. Greitis ir pagreitis apskaičiuojami iš įrašytų padėčių, todėl aštri viršūnė tarp žingsnių rodoma žemai: naudokite daugiau žingsnių.

Po **Paleisti** juosta **Eiti per paleidimą** perkelia surinkimą į bet kurį žingsnį (šalia jos rodomas laikas, reikšmė ir ar detalės ten susikerta); jungtis išlaiko savo reikšmę, o **Grįžti į modelį** grąžina surinkimą į vietą. Tyrimo nustatymai įrašomi surinkimo byloje; jo rezultatai vėl sukuriami **Paleisti**.

## Kontakto tyrimas

**Surinkimas › Kontaktas** rodo, kaip surinkimas perduoda apkrovas ten, kur detalės spaudžiasi viena į kitą. Kiekviena detalė atneša savo atramas, apkrovas ir medžiagą iš savo **Modeliavimo** tyrimo (viename fiksuotas paviršius, kitame – jėga); čia pasirenkate poras. **Pridėti porą**, tada **Pasirinkti pusę A** ir spustelėkite vienos detalės paviršius, **Pasirinkti pusę B** ir spustelėkite kitos detalės paviršius (pasirinkto paviršiaus spustelėjimas jį pašalina; Esc arba Atlikta baigia pasirinkimą). Pora yra **Be trinties** (detalės spaudžiasi, bet slysta) arba **Sujungta** (jos lieka kartu); standumo koeficientas nustato, kaip stipriai kontaktas priešinasi įsispaudimui (20 – geras pradžios taškas, 1000 – standiam plieno krūviui).

**Spręsti** vykdo apkrovą žingsniais ir rodo kontakto jėgą, giliausią įsispaudimą, didžiausią poslinkį ir didžiausią įtempį. Detalė be poros paliekama, ir apie tai kortelėje nurodoma. Kontaktas be trinties nelaiko detalės šonine kryptimi: kiekvienai detalei suteikite atramą savo Modeliavimo tyrime arba ją sujunkite, kitaip žingsniai gali neįsivyrauti. Poros ir nustatymai įrašomi surinkimo byloje.

**Eksportuoti CalculiX failą** įrašo tą patį modelį kaip CalculiX įvesties failą (.inp). CalculiX yra atskira programa, kurią įdiegiate ir paleidžiate patys; tada **Skaityti CalculiX rezultatus (.frd)** nuskaito poslinkius atgal šio surinkimo tinklelyje ir atsisako failo, sukurto kitam tinklelio. Čia esantis sprendiklis palaiko plastiškumą, bet ne išreikštinę dinamiką, o čia pateikta analizė nėra sertifikuota: kas svarbu, turi patikrinti inžinierius.
