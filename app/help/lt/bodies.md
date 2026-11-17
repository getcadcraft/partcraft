---
title: Kūnų jungimas, perkėlimas ir mastelio keitimas; kelio masyvai
summary: Kurkite atskirus kūnus, tada juos po to sujunkite, iškirpkite arba susikirtimo būdu suraskite bendrą dalį, perkelkite, pasukite, lygiuokite ar kopijuokite, keiskite mastelį vienodai arba pagal X, Y ir Z, bei kopijuokite elementus ar kūnus išilgai kreivės.
keywords: kūnas, kūnai, daugiakūnis, naujas kūnas, sujungti, logine operacija, jungti, iškirpti, sankirta, atimti, sąjunga, išlaikyti įrankius, perkelti kūną, kopijuoti kūną, sukti kūną, lygiuoti, slinkti, mastelis, nevienodas mastelis, tempti, afininis, kelio masyvas, masyvas išilgai kreivės, kreivės valdomas masyvas
from: 6b1ea820
---

:::note
**Šioje versijoje dar nesukurta.** Darbui su keliais kūnais reikalingas tikslusis geometrijos branduolys, kurio šioje PartCraft versijoje nėra: visos detalės kuriamos su tinklelio branduoliu. [Kas dar nesukurta](topic:not-built-yet) nurodo, ką daryti vietoj to. Likusioje šio puslapio dalyje aprašoma, kaip tai veikia su tiksliuoju branduoliu.
:::

Detalė gali turėti daugiau nei vieną kietąjį kūną. Kiekvienas atskiras kietasis kūnas yra **kūnas**. Daugelis elementų prideda prie visų kūnų, kuriuos liečia, arba iš jų atima; šiame puslapyje aprašytos priemonės veikia visus pasirinktus kūnus. Jos yra elementų grupės meniu {{ui:Daugiau}}: {{ui:Sujungti}}, {{ui:Perkelti kūną}}, {{ui:Keisti kūno mastelį}} ir {{ui:Kelio masyvas}}. Visoms joms reikalingas tikslusis branduolys (OpenCascade).

## Atskiro kūno sukūrimas

Ištempimo ar sukimo dešiniajame skydelyje nustatykite **Operaciją** į **Naujas kūnas** (ir perstūmimai bei sujungimai ją turi). Naujas kietasis kūnas lieka atskiras net ten, kur persidengia su kitais. **Sankirta** palieka tik naujos figūros ir esamo turinio persidengimo dalį.

Kūnai pavadinami pagal elementą, kuris juos sukūrė: „Extrude2“. Kopija pavadinama pagal originalą ir elementą, kuris ją nukopijavo: „Extrude2, copy 1 of Move1“. Pavadinimai išlieka tokie patys, kai keičiate dydžius aukščiau esančiuose elementuose, todėl elementai, naudojantys kūną, jį ir toliau randa. Kai yra du ar daugiau kūnų, detalės skydelyje (spustelėkite tuščią vietą) jie išvardijami su savo tūriais.

## Kūno pervadinimas arba paslėpimas

Spustelėkite tuščią vietą vaizde, kad pamatytumėte detalės skydelį. Jo kūnų sąraše (rodomas, kai detalė turi du ar daugiau kūnų) kiekvienoje eilutėje yra pavadinimo laukelis ir mygtukas {{ui:Slėpti}}.

- **Pervadinti:** laukelyje įveskite naują pavadinimą ir paspauskite {{key:Enter}} arba spustelėkite kitur. Tada jį naudoja visi skydeliai: Sujungti, Perkelti kūną, masyvai. Išvalykite laukelį, kad grįžtumėte prie elemento, sukūrusio kūną, pavadinimo.
- **Paslėpti:** spustelėkite {{ui:Slėpti}} jo eilutėje. Kūnas išnyksta iš vaizdo, o spustelėjimai pereina per jį, todėl galite pasirinkti už jo esančius paviršius. {{ui:Rodyti}} jį grąžina; {{ui:Rodyti visus}} grąžina visus paslėptus kūnus.

Paslėpimas keičia tik vaizdą. Paslėptas kūnas vis tiek sukuriamas, įskaičiuojamas į tūrį ir matavimus bei įrašomas STL, 3MF ir STEP eksportuose. Pavadinimai ir paslėpti kūnai įrašomi detalės byloje, o kiekvienas pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis.

## Kūnų sujungimas

1. Shift+spustelėkite **tikslinio** kūno paviršių, tada kiekvieno **įrankio** kūno paviršių.
2. Pasirinkite {{ui:Daugiau}}, tada {{ui:Sujungti}}.
3. Dešiniajame skydelyje pasirinkite **Operaciją**:

| Operacija | Rezultatas |
|---|---|
| Jungti | Tikslinis kūnas ir įrankiai tampa vienu kūnu |
| Iškirpti | Įrankiai atimami iš tikslinio kūno |
| Sankirta | Lieka tik tai, ką bendrai turi tikslinis kūnas ir visi įrankiai |

**Tikslinis kūnas** yra tas, kuris išlaiko savo pavadinimą. Pažymėkite arba panaikinkite **Įrankių kūnus** pažymėjimą arba naudokite **Pasirinkti vaizde** ir spustelėkite jų paviršius. **Išlaikyti įrankių kūnus** palieka įrankius vietoje (patogu liejimo formai ir jos šerdžiai). Jei įrankio kūnas jau buvo panaudotas ankstesniame Sujungimo veiksme, skydelyje tai nurodoma, o kitas kūnas nepasirenkamas.

## Kūno perkėlimas arba kopijavimas

1. Pasirinkite {{ui:Daugiau}}, tada {{ui:Perkelti kūną}}. Naujausias kūnas pažymėtas; pažymėkite tuos, kuriuos norite perkelti.
2. Pasirinkite **Perkėlimo** tipą:

| Perkėlimas | Ką nustatote |
|---|---|
| Poslinkis | **ΔX**, **ΔY**, **ΔZ** milimetrais |
| Taškas į tašką | **Iš** ir **Į**: spustelėkite šalia briaunos galo, taško elemento arba paviršiaus vietos |
| Sukimas apie ašį | **Ašis** (X, Y, Z, ašies elementas arba **Pasirinkti**: tiesi briauna, apskritimas ar cilindras) ir **Kampas (°)** |
| Paviršiaus lygiavimas prie paviršiaus ar plokštumos | **Paviršius perkėlimui** (plokščias kūno paviršius), **Prie** (plokščias paviršius arba plokštuma) |

Lygiavimas pasuka kūną taip, kad jo paviršius gulėtų ant kito paviršiaus, paviršius prie paviršiaus, tada slenka tik išilgai to paviršiaus normalės. **Ta pati kryptis** pasuka jį priešinga kryptimi. **Kopijuoti** palieka originalą ir prideda perkeltą kopiją kaip naują kūną.

## Kūno mastelio keitimas

1. Pasirinkite {{ui:Daugiau}}, tada {{ui:Keisti kūno mastelį}}, ir pažymėkite kūnus.
2. Įveskite **Mastelį**, arba panaikinkite **Vienodą** pažymėjimą ir įveskite **Mastelį X**, **Mastelį Y** ir **Mastelį Z** (pagal pasaulio ašis).
3. **Apie** yra taškas, kuris lieka vietoje: kūnų dėžės centras arba jūsų pasirinktas taškas.

Vienodas mastelis yra tikslus. Nevienodas mastelis apskritimus paverčia elipsėmis: cilindras tampa elipsiniu cilindru, kurio joks analitinis paviršius neišlaiko, todėl išlenkti paviršiai tampa B-splaino paviršiais, nukrypstančiais ne daugiau kaip 0.0000004 mm nuo tikslios formos; plokšti paviršiai ir tiesios briaunos lieka tikslios. Skydelyje nurodoma, kas įvyko. Mastelio koeficientai turi būti didesni už nulį (veidrodiniam atspindžiui naudokite {{ui:Veidrodis}}).

## Kopijavimas išilgai kelio

1. Istorijoje pasirinkite elementą, kurį norite kopijuoti, arba nieko nepasirinkite, kad nukopijuotumėte naujausią kūną.
2. Pasirinkite {{ui:Daugiau}}, tada {{ui:Kelio masyvas}}. Kaip kelias imamas naujausias nenaudotas eskizas.
3. Dešiniajame skydelyje nustatykite:

| Nustatymas | Ką daro |
|---|---|
| **Kopijuoti** | Kūnai (kiekviena kopija – naujas kūnas) arba Elementai (sujungiami ar iškerpami kaip originalas) |
| **Kelias** | Pažymėkite eskizus arba **Pasirinkti modelio briaunas**; dalys turi sujungti galas į galą |
| **Kiekis** | Bendras skaičius, įskaitant originalą |
| **Tarpas** | Vienodas (paskirstoma iki atviro kelio galo arba aplink uždarą kelią) arba nustatytas atstumas |
| **Orientacija** | Sekti kelią (kiekviena kopija sukasi kartu su juo) arba Fiksuota (kopijos išlieka lygiagrečios) |
| **Atvirkštinė kryptis** | Eiti priešinga kryptimi išilgai kelio |

Kopijos prasideda ten, kur kelias eina arčiausiai originalo, ir išdėstomos pagal ilgį išilgai kreivės.

Tiesiniai ir apskritiminiai masyvai taip pat gali kopijuoti kūnus: jų skydelyje pažymėkite **Kopijuoti kūnus** ir pasirinkite kūnus; kiekviena kopija yra naujas kūnas.

## Ribos

- Kūnams reikalingas tikslusis branduolys; tinklelio branduolys palieka vieną kietąjį kūną ir apie tai praneša.
- Nevienodas mastelis išlenktus paviršius paverčia artimais B-splaino apytiksliais (žr. aukščiau), o ne tiksliais cilindrais ar kūgiais; poslinkio paviršių kol kas taip keisti negalima.
- Sekant kelią išilgai susisukančios 3D kreivės, kopija nusineša be sukimo; plokščiuose keliuose posūkis tikslus.
- Sujungimas veikia tik kietuosius kūnus. Paviršių kūnai sujungiami su {{ui:Siūti}}.

Taip pat žr. [Pagalbinės plokštumos, ašys ir taškai](topic:reference-geometry) – taškams ir plokštumoms „tarp objektų“, ir [Masyvų ir veidrodinių elementų](topic:patterns-mirror).
