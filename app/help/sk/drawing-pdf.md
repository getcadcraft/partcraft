---
title: Vytvorte výkres s pohľadmi, rezom a GD&T
summary: Otvorte list výkresu, pridajte rez a pohľad detailu, umiestnite základne, rámčeky riadenia prvkov a značky povrchovej úpravy, vyberte formát listu, vyplňte popisové pole a revízie a exportujte list ako PDF.
keywords: tabuľka otvorov, tabuľka dier, polohy otvorov, značky, výkres, 2D výkres, list, formát listu, a4, a3, a2, a1, a0, ansi, popisové pole, revízia, blok revízií, číslo výkresu, materiál, pdf, pohľady, ortogonálny, tretí uhol, izometria, rez, detail, gd&t, základňa, rámček riadenia prvku, tolerancia, poloha, rovinnosť, povrchová úprava, drsnosť, popisové pole, tlač
from: 39e944c0
---

PartCraft z súčiastky vytvorí list výkresu: pohľad spredu, zhora a sprava v premietaní v treťom uhle, izometrický pohľad, celkové rozmery a popisové pole na liste od A4 po A0 alebo ANSI A až E. Navyše môžete pridať rez, pohľad detailu a symboly GD&T. List sa aktualizuje pri zmene súčiastky a jeho nastavenia sa uložia v súbore súčiastky.

## Otvorenie listu výkresu

1. Zostavte súčiastku. (Ak nič nie je zostavené: „Najprv vytvorte teleso, potom jeho výkres.“)
2. Na paneli nástrojov vyberte {{ui:Výkres}}.

3D zobrazenie je nahradené listom. Panel nástrojov zobrazuje {{ui:Základňa}}, {{ui:Rámček}}, {{ui:Povrchová úprava}}, {{ui:Detail}}, {{ui:PDF}} a {{ui:Späť}}, a pravý panel má nadpis **Výkres**. Stavový riadok hovorí, ako boli pohľady vytvorené: „Výkres (krivky sú kreslené ako fazety). Základňa, Rámček a Povrchová úprava umiestňujú GD&T na pohľad; panel nastavuje rez a pohľad detailu.“ Pohľady sa kreslia z fazetov siete, takže zaoblené hrany sú krátke rovné úseky; skutočné oblúky vyžadujú presné jadro, ktoré táto verzia nemá.

Pohybujte sa po liste: otáčaním kolieska priblížite, ťahaním pravým alebo prostredným tlačidlom posúvate, stlačením {{key:F}} list prispôsobíte oknu. Keď je list aktívny, {{key:Plus}} a {{key:Minus}} priblížia a oddialia a {{key:Shift}} so šípkovými klávesmi posúva.

Vyberte {{ui:Späť}}, {{ui:Späť na model}} alebo stlačte {{key:Esc}} (keď nič nie je vybraté a nie je aktívny žiadny nástroj), aby ste sa vrátili k 3D modelu.

## Čo je na liste

- **List, ktorý vyberiete**, na šírku (predvolene A3, ak nevyberiete iný), s rámikom a **popisovým poľom**: názov, spoločnosť, číslo výkresu, revízia, materiál, nakreslil / skontroloval / schválil, dátum, mierka, formát listu, „Jednotky: milimetre · Premietanie v treťom uhle“ a či sú pohľady presné alebo z fazetov.
- **Blok revízií** v pravom hornom rohu, keď pridáte revíziu.
- **Pohľad spredu, zhora a sprava**: pohľad zhora nad pohľadom spredu, pohľad sprava vpravo od neho. Skryté hrany čiarkované.
- **Izometrický pohľad**, kde je na to miesto.
- **Celkové rozmery**: šírka a výška na pohľade spredu, hĺbka na pohľade zhora.
- Jedna **mierka** pre hlavné pohľady z radu ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), vybraná tak, aby sa zmestili.

## Výber formátu listu

Na liste výkresu, keď nič nie je vybraté, v pravom paneli vyberte {{ui:List}}: **A4, A3, A2, A1, A0** (ISO 216) alebo **ANSI A, B, C, D, E** (11 × 8,5 až 44 × 34 palcov). Pohľady sa znovu rozložia v najväčšej mierke ISO, ktorá sa zmestí, takže väčší list môže zobraziť súčiastku väčšiu.

## Vyplnenie popisového poľa

Polia **Popisové pole** v pravom paneli idú priamo na list: {{ui:Názov}}, {{ui:Kód výkresu}}, {{ui:Revízia}}, {{ui:Spoločnosť}}, {{ui:Nakreslil}}, {{ui:Skontroloval}}, {{ui:Schválil}}, {{ui:Dátum}} (rok-mesiac-deň), {{ui:Všeobecná tolerancia}} a {{ui:Povrchová úprava}} (posledné dve sa vytlačia tesne nad popisovým poľom). Napíšte do políčka a stlačte {{key:Enter}} alebo kliknite mimo. Prázdne políčko nechá bunku prázdnu, okrem týchto prípadov:

- **Názov** zobrazuje názov súčiastky, kým nenapíšete vlastný.
- **Dátum** zobrazuje dnešný dátum, kým nenapíšete vlastný.
- **Revízia** zobrazuje najnovšiu revíziu v zozname, kým nenapíšete vlastnú.

**Materiál** sa berie zo súčiastky: kliknite na prázdne miesto v modeli a potom vyberte {{ui:Materiál}} v paneli Súčiastka. Ten istý materiál dá vlastnostiam hmotnosti z Meranie hustotu.

## Pridanie revízií

V časti **Revízie** kliknite na {{ui:Pridať revíziu}}. Každý nový riadok dostane ďalšie písmeno (A, B, C …, po Z nasleduje AA) a dnešný dátum. Napíšte, čo sa zmenilo, a kto zmenu urobil. {{ui:Zmazať}} odstráni riadok. Blok revízií v pravom hornom rohu listu ich uvádza, najstaršie prvé, až do 20.

Formát listu, popisové pole, revízie a materiál sa uložia v súbore súčiastky a každá zmena je jeden krok {{ui:Späť}}.

## Pridanie rezu

Súčiastka je pretnutá rovinou a rez je šrafovaný. Rovnako ako ostatné pohľady, aj rez sa kreslí z fazetov, takže zaoblené hrany sú krátke rovné úseky.

1. V pravom paneli nastavte **Rez A-A** na **Z predného pohľadu**, **Z pohľadu zhora** alebo **Z pravého pohľadu**.
2. Rez sa objaví na liste, šrafovaný tam, kde rezná rovina prechádza materiálom, s rezovou čiarou a šípkami „A“ na pohľade, z ktorého sa berie.
3. Nastavte **Rez v (mm)**, aby ste posunuli reznú rovinu. Na začiatku prechádza stredom súčiastky.

Ak chcete rez odstrániť, nastavte **Rez A-A** späť na **Žiadny**.

## Pridanie pohľadu detailu

1. Nastavte **Detail B** na pohľad, ktorý chcete zväčšiť (alebo vyberte {{ui:Detail}} na paneli nástrojov).
2. Kliknite na stred oblasti, ktorú chcete zväčšiť, na tomto pohľade. Kruh označený „B“ ju označí a zväčšený „Detail B“ sa objaví na liste s vlastnou mierkou, napríklad „Detail B (2:1)“.
3. Nastavte **Polomer detailu (mm)** pre veľkosť kruhu a **Mierka detailu** pre zväčšenie: 2, 4, 5 alebo 10 × list.

Detail sa dá vziať z pohľadu spredu, zhora, sprava alebo z rezu, nie z izometrie. Ak na liste nie je miesto pre všetky pohľady, panel zobrazí „Na liste nie je miesto pre: detail. Zmenšite detail alebo vynechajte pohľad.“

## Pridanie tabuľky otvorov

Tabuľka otvorov uvádza otvory súčiastky s ich polohami, pre vŕtanie alebo CNC: na paneli vyberte **Tabuľka otvorov** › **Z pohľadu zhora** (alebo spredu, alebo sprava).

- Každý otvor vidný v tomto pohľade kolmo dostane značku vedľa seba: **A1**, **A2** … pre prvú veľkosť, **B1** … pre ďalšiu.
- Tabuľka uvádza každú značku, jej **X** a **Y** v milimetroch a jej veľkosť: „Ø14 PREBIJANÝ“, „Ø6,6 × 10 SLEPÝ“, zápustný alebo protiotvor, alebo označenie závitu pri závitovom otvore.
- X a Y sa merajú od ľavého dolného rohu obrysu pohľadu, označeného **X0 Y0** na liste.
- Otvory vytvorené vzormi sú zahrnuté. Otvory, ktoré nie sú kolmé na pohľad, sa spočítajú v paneli a z tabuľky sa vynechajú.

Tabuľka sa umiestni do voľnej oblasti listu a do PDF.

## Umiestnenie symbolov GD&T a povrchovej úpravy

1. Vyberte {{ui:Základňa}}, {{ui:Rámček}} (rámček riadenia prvku) alebo {{ui:Povrchová úprava}} (symbol povrchovej úpravy).
2. Kliknite na bod na pohľade, kde sa pripája. Prichytí sa k najbližšej nakreslenej čiare do 2,5 mm.
3. Symbol sa objaví s vynášacou čiarou, vybratý, a pravý panel zobrazuje jeho nastavenia.

Symbol potiahnite a presuniete; jeho vynášacia čiara zostane na bode. Keď je symbol vybratý, šípkové klávesy ho posunú o 1 mm. {{key:Delete}} alebo {{key:Backspace}} (alebo {{ui:Zmazať}} na paneli) ho odstráni; {{ui:Hotovo}} alebo {{key:Esc}} ho zruší výber. Každá zmena je v zozname späť.

### Základňa

**Písmeno**: A až Z, bez I, O a Q (vyzerajú ako 1, 0 a O). Každá nová základňa dostane ďalšie voľné písmeno.

### Rámček riadenia prvku

| Nastavenie | Voľby |
|---|---|
| **Tolerancia** | Priamosť, Rovinnosť, Kruhovitosť, Valcovitosť, Profil čiary, Profil plochy, Kolmosť, Uhlová odchýlka, Rovnobežnosť, Poloha, Súosovosť a Súmernosť (obe odstránené v Y14.5-2018 a označené ako také), Kruhové házanie, Celkové házanie |
| **Pásmo (mm)** | Hodnota tolerancie, predvolene 0,1 |
| **Priemerové pásmo (⌀)** | Pre charakteristiky s valcovým pásmom; predvolene zapnuté pre Polohu |
| **Materiál** | RFS (žiadny), MMC (Ⓜ), LMC (Ⓛ), tam, kde to charakteristika dovoľuje |
| **Primárna / sekundárna / terciárna základňa** | Až tri písmená základní, každé s **modifikátorom …** (MMB, LMB), kde je to povolené |

PartCraft kontroluje rámček podľa pravidiel ASME Y14.5 a v hornej časti panela uvedie, čo je zle, napríklad „Rovinnosť je tolerancia tvaru: nemá odkazy na základne.“ alebo „Poloha potrebuje aspoň jeden odkaz na základňu.“ Riadok **Číta sa** rozpisuje rámček.

### Povrchová úprava

| Nastavenie | Voľby | Predvolená hodnota |
|---|---|---|
| **Ra (µm)** | Priemerná drsnosť | 1,6 |
| **Proces** | ľubovoľný proces, obrábaný, bez odobratia materiálu | obrábaný |
| **Poznámka** | Až 40 znakov, napríklad smer rýh alebo proces | |

Keď nič nie je vybraté, panel uvádza **Poznámky na liste**, každú s **Vybrať**.

## Export PDF

Vyberte {{ui:PDF}} na paneli nástrojov, {{ui:Export PDF}} v paneli alebo {{ui:Export}} a potom {{ui:Výkres (PDF): pohľady, rez, detail, GD&T}} z modelu. PDF sa stiahne ako `<názov súčiastky> - drawing.pdf` a stavový riadok uvádza, čo je na ňom.

Vytlačte ho v „Skutočnej veľkosti“ na papier formátu listu, aby mierka zostala správna.

## Obmedzenia

| Ešte nie je hotové | Čo urobiť teraz |
|---|---|
| Iné rozmery ako tri celkové rozmery | Pridajte ich do PDF v aplikácii na značkovanie alebo exportujte náčrt alebo plochu ako DXF a okótujte ju v 2D CAD programe |
| Viac ako jeden rez alebo detail; vylomené, pomocné a premietnuté pohľady | Nie je k dispozícii |
| Premietanie v prvom uhle, pohyblivé pohľady, zvislé listy | Tretí uhol, automatické rozloženie, na šírku |
| Voľné poznámky a tabuľky na liste (okrem popisového poľa a blokov revízií) | Použite poznámku k povrchovej úprave alebo pridajte text do PDF |
| Výkresy zostáv | Nie je k dispozícii |

Znaky mimo západoeurópskej sady sa vytlačia ako „?“ (PDF používa vstavané písmo Helvetica čítačky). Symboly GD&T sú kreslené ako čiary, takže sa vytlačia v ktoromkoľvek čítačke.

## Nechajte list urobiť prácu

- **List › Automaticky** vyberie papier za vás: najväčšia štandardná mierka do 1:1, na najmenší list formátu A, ktorý pohľady v tej mierke pojme (zoznam ukazuje, ktorý použil).
- **Okótovať otvory** okótuje otvory na pohľade, ktorý ich vidí najviac kolmo: stredová značka pri každom, jedna kóta na každú veľkosť („2× Ø6 PREBIJANÝ“ s vynášacou čiarou) a ich polohy merané od ľavého dolného rohu pohľadu. Celková šírka, výška a hĺbka sú vždy tam.
