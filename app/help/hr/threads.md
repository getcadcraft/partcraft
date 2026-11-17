---
title: Navoji na osovinama i provrtima, nacrtani ili modelirani
summary: Stavite ISO metrički ili trapezni navoj na bilo koju okruglu plohu, osovinu ili provrt. Držite ga kozmetičkim za crteže ili modelirajte pravi spiralni navoj za 3D ispis, sa zazorom da se ispisani dijelovi slažu.
keywords: navoj, navoji, modelirani navoj, spiralni, uzvojnica, vijak, zavrtanj, matica, osovina, provrt, vanjski navoj, unutarnji navoj, kozmetički navoj, metrički navoj, trapezni, acme, vodeći vijak, Tr16x4, M10, 3D ispis, ispis, zazor, dosjed, lijevi smjer, urezan
from: 4f6401cc
---

{{ui:Navoj}} stavlja navoj na okrugle plohe: vanjsku stranu osovine (vanjski navoj) ili unutrašnjost provrta (unutarnji navoj). PartCraft prepoznaje koji je iz plohe.

Navoj je na početku **kozmetički**: ploha ostaje glatka, pogled crta navoj isprekidanim kružnicama, a list crteža ga bilježi, na primjer „M10×1.5 - 6g, navoj duljine 20“. Označite **Modelirano** da se pravi spiralni navoj urezan u dio, za 3D ispis ili model koji mora izgledati ispravno.

## Navoj na osovini ili provrtu

1. Izradite osovinu ili provrt u veličini navoja: osovinu Ø10 za vijak M10 ili provrt Ø8.5 (svrdlo za urezivanje) za maticu M10.
2. Kliknite okruglu plohu, zatim odaberite {{ui:Više}} › {{ui:Navoj}}. Ako nijedna okrugla ploha nije odabrana, PartCraft traži da kliknete plohe, zatim {{ui:Gotovo}}.
3. U desnoj ploči provjerite **Veličinu**. **Prilagodi plohi** sam bira veličinu: za osovinu onu čiji je vanjski promjer jednak promjeru osovine; za provrt onu čiji mu unutarnji promjer pristaje.

Navoj počinje na otvorenom kraju plohe, gdje se dio ne nastavlja duž osi: slobodni kraj osovine, usta provrta. **Počni na drugom kraju** to okreće.

## Postavke

| Postavka | Mogućnosti | Zadano |
|---|---|---|
| **Oblik** | ISO metrički (60°), M1.6 do M64 grubi; trapezni (Tr, 30°), Tr8×1.5 do Tr60×9 | ISO metrički |
| **Veličina** | Prilagodi plohi, ili jedna veličina s popisa | Prilagodi plohi |
| **Cijela ploha** | Isključite je da zadate **Duljinu (mm)**, mjerenu od početka | Označeno |
| **Počni na drugom kraju** | Navoj ide od drugog kraja plohe | Isključeno |
| **Smjer** | Desni ili lijevi smjer | Desni smjer |
| **Modelirano** | Urezuje pravi spiralni navoj | Isključeno |
| **Zazor (mm)** | Prikazan kad je označeno Modelirano: koliko je manji navoj osovine, a koliko veći navoj provrta, sa svih strana | 0.1 |

Veličina koja ne odgovara plohi svejedno se izrađuje, izrezana prema plohi, a ploča to kaže, na primjer „Osovina Ø12 mm nije Ø10 mm kao kod M10“. Više ploha može dijeliti jednu značajku Navoj; s **Prilagodi plohi** svaka dobiva svoju veličinu.

## Modelirani navoji za 3D ispis

Modelirani navoj slijedi standardni osnovni profil: ISO 68-1 za metričke navoje (ravni vrhovi i dna, bokovi pod 60°), ISO 2901 za trapezne (bokovi pod 30°). **Zazor** pomiče cijeli profil unutra (osovina) ili van (provrt) da se ispisani dijelovi spajaju:

- **0.1 do 0.2 mm** odgovara većini pisača. Najprije ispišite probni vijak i maticu.
- **0** je standardni profil, za dijelove koji se obrađuju strojno ili za provjeru dosjeda.

Vijak i matica s istim zazorom nikad se ne dodiruju duž bokova: razmak između njih je dvostruki zazor, sa svih strana.

:::tip
Fini koraci loše se ispisuju: M3 i manji, ili korak ispod 0.5 mm, blizu je onome što mlaznica od 0.4 mm može nacrtati. Modelirajte veće navoje, a za male koristite umetak za toplo učvršćenje ili urezanu rupu.
:::

Modelirani navoj dio je tijela: izvozi STL, 3MF i STEP ga nose, a alat Mjeri ga mjeri. Čini ponovno izračunavanje dijela težim: navoj M10 duljine 20 ima oko 150,000 trokuta.

## Urezane rupe

Rupa **Urezana (ISO metrička)** također ima prekidač **Modelirano**, sa istim **Zazorom**. Vidi [Bušenje rupa i upuštanja na točkama skice](topic:holes).

## Kad navoj ne izgradi

- „Navoj ide na okruglu plohu (valjak): osovinu ili provrt.“ Odabrana ploha je ravna ili zakrivljena na neki drugi način.
- „Nijedna standardna veličina ne pristaje okrugloj plohi Ø0.6 mm: odaberite veličinu.“ Prilagodi plohi nije našao ništa unutar 12 % plohe. Odaberite **Veličinu** ili promijenite plohu.
- „Ploha na kojoj je bio ovaj navoj nestala je (…). Odaberite je ponovno.“ Ranija promjena uklonila je plohu. Kliknite {{ui:Odaberi plohe}} i ponovno kliknite plohu.

:::note
Navoji u palcima (UNC, UNF), cijevni navoji, konični navoji, izlazi navoja i skošeni početci navoja još nisu izrađeni. Egzaktna jezgra prikazuje modelirani navoj kao kozmetički.
:::
