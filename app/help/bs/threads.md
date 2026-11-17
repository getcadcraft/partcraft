---
title: Navoji na vratilima i provrtima, nacrtani ili modelirani
summary: Stavite ISO metrički ili trapezni navoj na bilo koju okruglu površ, vratilo ili provrt. Držite ga kozmetičkim za crteže ili modelirajte pravi spiralni navoj za 3D štampu, sa zazorom da štampani dijelovi stanu.
keywords: navoj, navoji, modelirani navoj, spiralni, spirala, zavrtanj, vijak, matica, vratilo, provrt, vanjski navoj, unutrašnji navoj, kozmetički navoj, metrički navoj, trapezni, acme, vodeći vijak, 3D štampa, štampanje, zazor, uklapanje, lijevi smjer, navojena rupa
from: 4f6401cc
---

{{ui:Navoj}} stavlja navoj na okrugle površi: vanjsku stranu vratila (vanjski navoj) ili unutrašnju stranu provrta (unutrašnji navoj). PartCraft prepoznaje koji je iz površi.

Navoj je na početku **kozmetički**: površ ostaje gola, prikaz crta navoj isprekidanim krugovima, a list crteža ga bilježi, na primjer „M10×1.5 - 6g, navoj dug 20“. Označite **Modelirano** da u dio urežete pravi spiralni navoj, za 3D štampu ili model koji mora dobro izgledati.

## Navoj na vratilu ili provrtu

1. Napravite vratilo ili provrt na veličinu navoja: vratilo Ø10 za vijak M10, ili provrt Ø8.5 (prečnik burgije za navoj) za maticu M10.
2. Kliknite okruglu površ, zatim izaberite {{ui:Više}} › {{ui:Navoj}}. Ako nijedna okrugla površ nije izabrana, PartCraft traži da kliknete površi, zatim {{ui:Gotovo}}.
3. U desnom panelu provjerite **Veličinu**. **{{ui:Uklopi}} u površ** sam bira veličinu: za vratilo, onu čiji je vanjski prečnik kao prečnik vratila; za provrt, onu čijem unutrašnjem prečniku odgovara.

Navoj počinje na otvorenom kraju površi, gdje dio ne ide dalje duž ose: slobodni kraj vratila, ušće provrta. **Počni s drugog kraja** to okreće.

## Postavke

| Postavka | Izbor | Zadano |
|---|---|---|
| **Oblik** | ISO metrički (60°), M1.6 do M64 grubi; trapezni (Tr, 30°), Tr8×1.5 do Tr60×9 | ISO metrički |
| **Veličina** | Uklopi u površ, ili jedna veličina sa liste | Uklopi u površ |
| **Cijela površ** | Isključite je da zadate **Dužinu (mm)**, mjerenu od početka | Označeno |
| **Počni s drugog kraja** | Navoj ide od drugog kraja površi | Isključeno |
| **Smjer** | Desni ili lijevi | Desni |
| **Modelirano** | Urezuje pravi spiralni navoj | Isključeno |
| **Zazor (mm)** | Prikazuje se kad je Modelirano označeno: koliko je navoj vratila manji, a provrta veći, sa svih strana | 0.1 |

Veličina koja ne odgovara površi se ipak pravi, sječe se na površ, a panel to kaže, na primjer „Vratilo Ø12 mm nije Ø10 mm kao kod M10“. Više površi može dijeliti jedan element Navoj; sa **Uklopi u površ** svaka dobija svoju veličinu.

## Modelirani navoji za 3D štampu

Modelirani navoj prati standardni osnovni profil: ISO 68-1 za metričke navoje (ravni vrhovi i dna, bokovi od 60°), ISO 2901 za trapezne (bokovi od 30°). **Zazor** pomjera cijeli profil unutra (vratilo) ili van (provrt), da se štampani dijelovi zavrnu jedan u drugi:

- **0.1 do 0.2 mm** odgovara većini štampača. Prvo odštampajte probni vijak i maticu.
- **0** je standardni profil, za dijelove koji se obrađuju ili za provjeru uklapanja.

Vijak i matica sa istim zazorom se nikad ne dodiruju duž bokova: razmak između njih je dvostruki zazor, sa svih strana.

:::tip
Fini koraci se loše štampaju: M3 i manji, ili korak ispod 0.5 mm, blizu su onome što mlaznica od 0.4 mm može nacrtati. Modelirajte veće navoje, a za male koristite umetak za toplo utiskivanje ili navojenu rupu.
:::

Modelirani navoj je dio čvrstog tijela: STL, 3MF i STEP izvozi ga nose, a alat Mjerenje ga mjeri. Čini ponovno računanje dijela težim: navoj M10 dug 20 je oko 150,000 trouglova.

## Navojene rupe

**Navojena (ISO metrička)** rupa također ima prekidač **Modelirano**, sa istim **Zazorom**. Vidi [Bušenje rupa i upuštanja u tačkama skice](topic:holes).

## Kad navoj ne uspije

- „Navoj ide na okruglu površ (cilindar): vratilo ili provrt.“ Izabrana površ je ravna ili zakrivljena na neki drugi način.
- „Nijedna standardna veličina ne odgovara okrugloj površi Ø0.6 mm: izaberite veličinu.“ Uklopi u površ nije našao ništa unutar 12 % površi. Izaberite **Veličinu** ili promijenite površ.
- „Površ na kojoj je ovaj navoj bio je nestala (…). Izaberite je ponovo.“ Ranija promjena je uklonila površ. Kliknite {{ui:Odaberi površi}} i ponovo kliknite površ.

:::note
Inčni navoji (UNC, UNF), cijevni navoji, konični navoji, izlazni hodovi navoja i skošeni početci navoja još nisu napravljeni. Tačna jezgra prikazuje modelirani navoj kao kozmetički.
:::
