---
title: Saglabāšana, atkārtota atvēršana un darba turpināšana
summary: Saglabājiet detaļas un mezglus datorā, dodiet tiem nosaukumus, atveriet tos ar pogu, taustiņu vai velkot, saglabājiet versijas un nezaudējiet darbu pārlūkprogrammas cilnē.
keywords: saglabāt, atvērt, atkārtoti atvērt, ielādēt, lejupielādēt, versijas, dublēšana, pārdēvēt, faila nosaukums, zaudēts darbs, aiziet no vietnes, partcraft.json, partcraft-asm.json, jauna detaļa
from: c18a5abc
---

PartCraft starp apmeklējumiem neko neglabā. Jūsu detaļa atrodas pārlūkprogrammas cilnē, līdz to saglabājat kā failu, un atgriežas, kad šo failu atverat.

## Detaļas saglabāšana

1. Piešķiriet detaļai nosaukumu: noklikšķiniet tukšā vietā skatā, lai nekas nav atlasīts, tad labajā panelī ierakstiet **Nosaukums** un nospiediet {{key:Enter}}. Vēstures virsraksts mainās, lai sakristu.
2. Nospiediet {{key:Mod+S}} vai izvēlieties {{ui:Saglabāt}}.
3. Pārlūkprogramma lejupielādē `<name>.partcraft.json`. Statusa joslā rakstīts: "Fails Bracket.partcraft.json ir saglabāts (pilna vēsture; atveriet to šeit, lai turpinātu rediģēt)."

Ja skice ir atvērta, saglabāšana vispirms to aizver.

Failā ir katra skice, sakarība, izmērs un elements, kā arī izslēgtie elementi, atgriešanās joslas pozīcija, rasējuma lapas iestatījumi un GD&T piezīmes, un importētās STEP cietvielas pilns teksts. Jūsu atsaukšanas saraksts netiek saglabāts.

## Mezgla saglabāšana

Mezglā tas pats {{ui:Saglabāt}} vai {{key:Mod+S}} lejupielādē `<assembly name>.partcraft-asm.json`. Katra detaļa tiek glabāta tā iekšpusē: lai to atvērtu atkārtoti, atsevišķi detaļu faili nav vajadzīgi.

Kamēr rediģējat detaļu mezglā, {{key:Mod+S}} saglabā tikai šo detaļu kā `.partcraft.json`. Lai saglabātu visu mezglu, vispirms izvēlieties {{ui:Atpakaļ}}, tad saglabājiet.

## Atkārtota atvēršana

Jebkuru no šiem:

- izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}}, tad izvēlieties failu;
- velciet failu no {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieks}} uz 3D skatu (parādās "Nometiet PartCraft detaļu, lai to atvērtu").

PartCraft atšķir detaļas no mezgliem pēc satura, tāpēc abi tiek atvērti vienādi. Fails `.step` vai `.stp` tiek atvērts kā importēta cietviela: skatiet [Atvērt STEP failu un veidot tālāk](topic:import-step). Statusa josla apstiprina: "Atvērts Bracket.partcraft.json: 7 elementi." vai "Atvērts Hinge.partcraft-asm.json: 3 detaļas, 2 savienojumi."

Ja ekrānā redzamajai detaļai ir nesaglabātas izmaiņas, PartCraft vispirms jautā: {{ui:Atcelt}}, {{ui:Atmest izmaiņas}} vai {{ui:Vispirms saglabāt}}.

:::warning
Pirms detaļas faila atvēršanas aizveriet mezglu ({{ui:Aizvērt}}). Ja detaļu atverat, kamēr ekrānā ir mezgls, detaļa ielādējas aiz mezgla, un to redzēsiet tikai pēc mezgla aizvēršanas. Mezgla faila atvēršana arī aizstāj nesaglabātu mezglu bez jautājuma, tāpēc vispirms to saglabājiet.
:::

## Sākt no jauna

{{ui:Jauns}} sāk tukšu "Part1". Ja ir nesaglabātas izmaiņas, vispirms jautā, un aizver atvērtu mezglu (jautājot, ja tas nav saglabāts).

## Versiju glabāšana

Katra saglabāšana ir jauna lejupielāde, tāpēc versijas var glabāt vienkārši, paturot failus:

- Pirms saglabāšanas nosaukumā ievietojiet versiju vai datumu: "Bracket rev B".
- Ja lejupielāžu mapē jau ir fails ar tādu pašu nosaukumu, pārlūkprogramma var pievienot " (1)", " (2)". Jaunākais ir fails ar lielāko numuru, vai pārbaudiet datumu {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieks}}.
- Pārvietojiet pabeigtos failus no lejupielāžu mapes uz projekta mapi.

Skatiet [Kur atrodas jūsu faili](common:your-files), lai uzzinātu, kur katrā sistēmā nonāk lejupielādes.

## Nezaudējiet darbu

- Saglabājiet pirms cilnes aizvēršanas, lapas pārlādēšanas vai ilgas datora miega režīma. Pārlūkprogramma jautā "Atstāt vietni?", ja mēģināt aizvērt ar nesaglabātām izmaiņām, bet avārija vai aizvērts klēpjdators brīdinājumu nedod.
- Privātie vai inkognito logi darbojas, taču nekas cits nemainās: fails joprojām ir vienīgā kopija.
- Mākoņglabāšana un versiju vēsture vēl nav pieejamas.
