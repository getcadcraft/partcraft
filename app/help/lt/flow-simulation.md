---
title: Skysčio tekėjimo modeliavimas (tekėjimo tyrimas)
summary: Tekėjimas per detalės kanalus viduje arba aplink ją dėžėje: įleidimai, išleidimai, oras, vanduo ar jūsų skystis; tuomet greitis ir slėgis perkeliamoje pjūvio plokštumoje, srovės linijos, paviršiaus slėgis, slėgio kritimas, masės balansas, pasipriešinimas ir kėlimo jėga, bei ką laminarinis metodas gali ir ko negali pasakyti.
keywords: tekėjimas, CFD, skystis, skysčių dinamika, tekėjimo modeliavimas, oras, vanduo, klampa, tankis, Reinoldso skaičius, laminarinis, turbulentinis, slėgio kritimas, slėgio nuostoliai, įleidimas, išleidimas, dangtis, kamštis, greitis, debitas, tūrinis debitas, litrai per minutę, statinis slėgis, srovės linijos, pjūvio plokštuma, pasipriešinimas, kėlimo jėga, pasipriešinimo koeficientas, kėlimo koeficientas, priekinis plotas, išorinis tekėjimas, vidinis tekėjimas, vamzdis, kanalas, kolektorius, antgalis, Boltzmanno gardelė, liekamasis dydis, konvergencija
from: 7dc75f29
---

**Tekėjimo** tyrimas parodo, kaip skystis juda per detalės kanalus viduje (**vidinis**) arba aplink ją (**išorinis**). Pagal numatytuosius nustatymus jis yra **laminarinis, nespūdus, izoterminis ir Niutono**: sklandus skysčio, kurio tankis ir klampa išlieka pastovūs, tekėjimas be šilumos, turbulencijos ir gravitacijos. Taip pat yra **eksperimentinis** turbulentinis modelis, skirtas tik kokybiniams vaizdams (žr. žemiau). Jis veikia su įvardytais paviršiais, kuriuos tinklo branduolys suteikia detalei (žr. [Tinklo branduolys](topic:solid-kernels)).

Darbo srities sąraše pasirinkite **Simuliacija**, jei nėra tyrimo, spauskite **Naujas tyrimas**, o **Tipas** nustatykite į **Tekėjimas (CFD)**. **Tekėjimo modelis** yra **Laminarinis** (numatytasis) arba **Turbulentinis (Spalart–Allmaras, eksperimentinis)**: žr. toliau **Turbulentinis tekėjimas (eksperimentinis)**. Konstrukciniai tyrimo nustatymai išsaugomi, todėl galite grįžti atgal. Tekėjimo nustatymai įrašomi į detalės failą, o kiekvieną pakeitimą galima anuliuoti.

## Pasirinkite skystį ir ląsteles

- **Skystis**: oras arba vanduo 20 °C temperatūroje, arba **Pasirinktinis** su jūsų tankiu (kg/m³) ir dinamine klampa (Pa·s). Orui taikomas idealiųjų dujų dėsnis ir Sutherlando dėsnis (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); vandeniui – IAPWS vertės (998.21 kg/m³, 1.0016 mPa·s).
- **Ląstelės dydis**: skysčio erdvė užpildoma vienodais kubeliais. Palikite tuščią lauką automatiniam dydžiui; skydelyje rodomas tinklelis. Kiekviena anga ir kanalas turėtų būti **bent 8–10 ląstelių per plotį**, kad skaičiai būtų naudingi; smulkesnės ląstelės tikslesnės, bet lėtesnės (dvigubai smulkesnės – apie 16 kartų daugiau darbo).
- **Sienelės**: **Interpoliuota** seka lenktas sieneles tarp ląstelių (numatytasis); **Atšokimas** laiko sieneles kubinių laiptelių pakopomis.

## Tekėjimas detalės viduje

Skysčio erdvė turi būti uždara. Skydelyje pridėkite **Įleidimą** ir **Išleidimą**, tuomet spustelėkite jų paviršius vaizde:

1. **Plokščias paviršius aplink angą** – vamzdžio galo kraštas, jungties paviršius. PartCraft ten uždaro angos skylę dangčiu. Kiekviena to paviršiaus skylė priklauso tai angai, todėl, kai įleidimas ir išleidimas atsiveria tame pačiame paviršiuje, vienai iš jų vietoj to sumodeliuokite ploną dangtelį.
2. **Dangtelio vidinis paviršius** – kaip kituose CAD įrankiuose: sumodeliuokite ploną plokštelę (ištempimą) virš angos ir pasirinkite jos paviršių, liečiantį skystį.

Įleidimui nustatykite **greitį** (m/s, vienodą visoje angoje, nukreiptą į detalę) arba **tūrinį debitą** (L/min). Išleidimui nustatykite **statinį slėgį** (Pa, manometrinį). Jei anga lieka atvira arba sienelė plonesnė už ląstelę, vidus susijungia su išore ir skaičiavimas sustoja su pranešimu „Nėra uždaros skysčio erdvės“.

## Tekėjimas aplink detalę

Nustatykite **Tekėjimas** į **Išorinis**, **Greitį**, kryptį, į kurią teka skystis, ir kiek dėžė siekia prieš srautą, pagal srautą ir į šonus (tuščia: 1, 3 ir 1 karto didžiausio detalės matmens). Dėžės paviršius, per kurį srautas įteka, yra įtekėjimo paviršius; paviršius, per kurį jis išteka – 0 Pa ištekėjimo paviršius; o paviršiai palei srautą – slydimo paviršiai. Per maža dėžė suspaudžia srautą aplink detalę ir padidina pasipriešinimą. **Nuorodinis plotas** – plotas, kurį naudoja pasipriešinimo ir kėlimo koeficientai (tuščia: detalės priekinis plotas, matomas palei srautą); kėlimo jėga matuojama išilgai +Y, nebent pasirinksite kitą kryptį.

## Skaičiavimas ir rezultatų skaitymas

Spauskite **Skaičiuoti**. Skaičiavimas vyksta fone, rodomas žingsnių skaičius, liekamasis dydis ir liekamojo dydžio grafikas; **Sustabdyti** jį nutraukia. Skaičiavimas baigiasi, kai liekamasis dydis (kiek greičių laukas dar keičiasi per žingsnį) tampa mažesnis už tikslą ir kai slėgio kritimas ar pasipriešinimas nusistovi. Jei pirmiausia pasiekiamas žingsnių limitas, skydelyje raudonai rodoma **Nesukonvergavo**: skaičiai yra paskutinė būsena, o ne pastovus atsakymas.

- **Pjūvio plokštuma**: greitis arba statinis slėgis plokštumoje per modelį; pasirinkite jos normalę (X, Y arba Z) ir vilkite slankiklį ją perkelti. Užveskite pelę, kad perskaitytumėte reikšmes.
- **Srovės linijos**: iš įleidimų (vidinis) arba iš grėbliuko per įtekėjimo dėžės galą pjūvio plokštumoje (išorinis).
- **Detalė**: vientisa, permatoma (kad matytumėte plokštumą viduje), paviršiaus slėgis arba paslėpta.
- **Lentelė**: Reinoldso skaičius, slėgio kritimas (vidutinis statinis slėgis įleidimuose minus išleidimuose), kiekvienos angos debitas ir vidutinis slėgis, jėga detalei, pasipriešinimas ir kėlimo jėga su koeficientais bei nuorodiniu plotu (išorinis), masės balansas (įtekėjimas lyginamas su ištekėjimu), tinklelis ir sprendiklis.

## Turbulentinis tekėjimas (eksperimentinis)

**Tekėjimo modelis › Turbulentinis (Spalart–Allmaras, eksperimentinis)** sprendžia laiko atžvilgiu vidurkintą turbulentinį tekėjimą (pastovus RANS): Spalart–Allmaras modelis kiekvienoje ląstelėje duoda sūkurinę klampą, o ląstelės šalia sienelių naudoja Spaldingo sienelės dėsnį, vietoj to kad išspręstų ten esantį ploną sluoksnį. Tekėjimas visur visiškai turbulentinis (laminarinių zonų ir perėjimo nėra).

**Jis neišlaikė tikslumo patikrinimų.** Skydelis, rezultatai ir lentelė tai nurodo kiekviename turbulentiniame tyrime, o įspėjimo uždaryti negalima. Naudokite jį **kokybiniams tekėjimo vaizdams** – kur srautas atsiskiria, cirkuliuoja ar greitėja – **ne projektavimo skaičiams**.

| Patikrinimas | Nuoroda | Rezultatas |
|---|---|---|
| Plokščio kanalo trintis, pirmoji ląstelė y⁺ 49 / 98 | Dean's correlation | +3.3 % / +4.7 % |
| Kanalas su išspręstomis sienelėmis (y⁺ ≈ 3), Re_τ 180: vidutinis greitis | Moser, Kim & Mansour DNS | −1 % |
| Plokščias kanalas, y⁺ 7–15 arba 190–380 | Dean's correlation | +9 iki +22 % |
| Vamzdžio trintis per kubines ląsteles, visiškai išsivysčiusi, 10–30 ląstelių per plotį | Colebrook | 30–34 % per dideli |
| Srauto prisijungimas už atgalinio laiptelio, 6–14 ląstelių per laiptelio aukštį | Driver & Seegmiller, 6.26 laiptelio aukščio | 21–39 % per trumpi |

Rezultatai smulkesnėmis ląstelėmis gerėja tik lėtai. Po skaičiavimo lentelėje rodomas **pirmosios ląstelės y⁺** (mažiausias, vidutinis ir didžiausias pagal sienelių ląsteles) ir įspėjama, jei reikšmė už patikrinto 1–400 intervalo ribų; siekite maždaug 30–300. **Skaičiavimo trukmė:** automatinės ląstelės parinktos taip, kad skaičiavimas trunka kelias minutes vienu nešiojamojo kompiuterio branduoliu daugiausia (skydelyje rodomas blogiausias tinklelio ir žingsnių limito atvejis; mažas vamzdis nusistovi per 20 sekundžių). Ląstelės dydžio perpus sumažinimas pailgina trukmę apie 16 kartų. Jėgos detalei gaunamos iš impulso balanso per angas arba dėžę.

**Kas padaryta iki šiol:** sienelių ląstelės dabar suderina savo šlyties įtempį su sienelės dėsniu, o tai sumažino vamzdžio ir laiptelio paklaidas iki aukščiau nurodytų verčių, nepakeitus plokščio kanalo rezultatų. To nepakako projektavimo skaičiams. Kitas žingsnis – smulkesnės ląstelės prie sienelių.

## Ką jis gali ir ko negali pasakyti

- **Laminarinis modelis** yra tik laminarinis. Vamzdžiuose tekėjimas tampa turbulentiniu, kai Reinoldso skaičius viršija maždaug nuo 2,000 iki 4,000; už bukų kūnų sūkuriai pradeda atsiskirti, kai reikšmė viršija maždaug 50. Skydelis įspėja šiose vietose. Laminarinis rezultatas turbulentiniam tekėjimui nuvertina slėgio kritimą ir neteisingai apskaičiuoja pasipriešinimą. Eksperimentinis turbulentinis modelis (aukščiau) kokybiškai apima turbulentinį tekėjimą; jo skaičiai dar nėra patikimi.
- **Metodas:** Boltzmanno gardelės metodas (D3Q19, dviejų relaksacijos laikų susidūrimas), vykdomas iki pastovios būsenos. Viduje jis šiek tiek suspaudžiamas; PartCraft tankio pokyčius laiko keliais procentais. Jei tekėjimas per greitas ląstelėms, skaičiavimas nepradedamas ir nurodoma, kiek ląstelės turi būti mažesnės.
- **Palyginta su:** Hagen–Poiseuille tekėjimu vamzdyje per detalę (slėgio gradientas per 1 % esant 20 ląstelių per plotį), Ghia et al. dangčio varoma ertmė (per 0.75 % dangčio greičio) ir Schäfer–Turek cilindro etalonu (pasipriešinimas per 1 % esant 10 ląstelių per skersmenį).
- Nemodeliuojama: šilumos perdavimas, turbulencija su projektavimo tikslumu (turbulentinis modelis yra eksperimentinis), laisvieji paviršiai, kavitacija, gravitacija, judančios dalys, ne Niutono skysčiai, šiurkščios sienelės. Laboratorinė versija: svarbius rezultatus patikrinkite kitu būdu.
