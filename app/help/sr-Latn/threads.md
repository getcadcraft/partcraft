---
title: Navoji na vratilima i otvorima, nacrtani ili modelovani
summary: Postavite ISO metrički ili trapezni navoj na bilo koju okruglu površinu, vratilo ili otvor. Ostavite ga prikaznim za crteže ili modelujte pravi spiralni navoj za 3D štampu, sa zazorom da se štampani delovi slažu.
keywords: navoj, navoji, modelovan navoj, spiralni, spirala, zavrtanj, vijak, matica, vratilo, otvor, spoljašnji navoj, unutrašnji navoj, prikazni navoj, metrički navoj, trapezni, acme, vodeći zavrtanj, Tr16x4, M10, 3D štampa, štampa, zazor, naleganje, leva ruka, urezan
from: 4f6401cc
---

{{ui:Navoj}} postavlja navoj na okrugle površine: spoljašnost vratila (spoljašnji navoj) ili unutrašnjost otvora (unutrašnji navoj). PartCraft prepoznaje koji je iz površine.

Navoj je na početku **prikazan**: površina ostaje glatka, prikaz crta navoj isprekidanim krugovima, a list crteža ga beleži, na primer „M10×1.5 - 6g, navoj dužine 20“. Označite **Modelovano** da biste u deo isekli pravi spiralni navoj, za 3D štampu ili model koji mora da izgleda ispravno.

## Navojite vratilo ili otvor

1. Napravite vratilo ili otvor u veličini navoja: vratilo Ø10 za M10 zavrtanj, ili otvor Ø8.5 (bušenje za urezivanje) za M10 maticu.
2. Kliknite okruglu površinu, pa izaberite {{ui:Više}} › {{ui:Navoj}}. Ako nije izabrana okrugla površina, PartCraft traži da kliknete površine, pa {{ui:Gotovo}}.
3. U desnom panelu proverite **Veličinu**. **Uklopi u površinu** sam bira veličinu: za vratilo, onu čiji je spoljašnji prečnik kao prečnik vratila; za otvor, onu čiji unutrašnji prečnik odgovara.

Navoj počinje na otvorenom kraju površine, tamo gde deo ne ide dalje duž ose: slobodni kraj vratila, ulaz u otvor. **Počni sa drugog kraja** to okreće.

## Podešavanja

| Podešavanje | Izbori | Podrazumevano |
|---|---|---|
| **Oblik** | ISO metrički (60°), M1.6 do M64 grubi; trapezni (Tr, 30°), Tr8×1.5 do Tr60×9 | ISO metrički |
| **Veličina** | Uklopi u površinu, ili jedna veličina sa spiska | Uklopi u površinu |
| **Cela površina** | Isključite da zadate **Dužinu (mm)**, merenu od početka | Uključeno |
| **Počni sa drugog kraja** | Navoj ide od drugog kraja površine | Isključeno |
| **Smer uvijanja** | Desna ruka ili leva ruka | Desna ruka |
| **Modelovano** | Isecite pravi spiralni navoj | Isključeno |
| **Zazor (mm)** | Prikazuje se kad je Modelovano uključeno: koliko je navoj vratila manji, a navoj otvora veći, sa svih strana | 0.1 |

Veličina koja ne odgovara površini se ipak pravi, sečena do površine, a panel to kaže, na primer „Vratilo Ø12 mm nije Ø10 mm kao kod M10“. Više površina može deliti jednu funkciju Navoj; uz **Uklopi u površinu**, svaka dobija svoju veličinu.

## Modelovani navoji za 3D štampu

Modelovani navoj prati standardni osnovni profil: ISO 68-1 za metričke navoje (ravni vrhovi i dna, bokovi od 60°), ISO 2901 za trapezne (bokovi od 30°). **Zazor** pomera ceo profil unutra (vratilo) ili napolje (otvor) da se štampani delovi zavrtnju jedan u drugi:

- **0.1 do 0.2 mm** odgovara većini štampača. Prvo odštampajte probni zavrtanj i maticu.
- **0** je standardni profil, za delove koji se obrađuju mašinom ili za proveru naleganja.

Zavrtanj i matica sa istim zazorom nikad se ne dodiruju duž bokova: razmak između njih je dvostruki zazor, sa svih strana.

:::tip
Fini koraci se loše štampaju: M3 i manji, ili korak ispod 0.5 mm, blizu su onome što mlaznica od 0.4 mm može da iscrta. Modelujte veće navoje, a za male koristite umetak za toplo utiskivanje ili urezanu rupu.
:::

Modelovani navoj je deo čvrstog tela: STL, 3MF i STEP izvozi ga nose, a Merenje ga meri. Usporava ponovno izračunavanje dela: M10 navoj dužine 20 ima oko 150,000 trouglova.

## Urezane rupe

**Urezana (ISO metrička)** rupa ima prekidač **Modelovano** takođe, sa istim **Zazorom**. Pogledajte [Bušenje rupa i upuštanja u tačkama skice](topic:holes).

## Kada navoj ne uspe da se izgradi

- „Navoj ide na okruglu površinu (cilindar): vratilo ili otvor.“ Izabrana površina je ravna ili zakrivljena na neki drugi način.
- „Nijedna standardna veličina ne odgovara okruglој površini Ø0.6 mm: izaberite veličinu.“ Uklopi u površinu nije našao ništa u okviru 12 % od površine. Izaberite **Veličinu** ili promenite površinu.
- „Površina na kojoj je bio ovaj navoj nestala je (…). Izaberite je ponovo.“ Ranija izmena je uklonila površinu. Kliknite {{ui:Izaberi površine}} i ponovo kliknite površinu.

:::note
Palčani navoji (UNC, UNF), cevni navoji, konusni navoji, izlazni završeci navoja i skošeni početci navoja još nisu izgrađeni. Tačni kernel prikazuje modelovani navoj kao prikazni.
:::
