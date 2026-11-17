---
title: Vytvoření výkresu s pohledy, řezem a GD&T
summary: Otevřete výkresový list, přidejte řez a detailní pohled, umístěte vztažné body, rámečky tolerancí a značky drsnosti povrchu, zvolte formát listu, vyplňte razítko a revize a exportujte list jako PDF.
keywords: tabulka děr, tabulka otvorů, polohy děr, značky, výkres, 2D výkres, list, formát listu, a4, a3, a2, a1, a0, ansi, razítko, revize, blok revizí, číslo výkresu, materiál, pdf, pohledy, ortogonální, třetí úhel, izometrie, řez, detail, gd&t, vztažný bod, rámeček tolerance, tolerance, poloha, rovinnost, drsnost povrchu, drsnost, tisk
from: 39e944c0
---

PartCraft vytvoří výkresový list z dílu: pohled zepředu, shora a zprava v promítání třetím úhlem, izometrický pohled, celkové rozměry a razítko na listu formátu A4 až A0 nebo ANSI A až E. Navíc můžete přidat řez, detailní pohled a symboly GD&T. List se aktualizuje, když se díl změní, a jeho nastavení se ukládají v souboru dílu.

## Otevřete výkresový list

1. Sestavte díl. (Pokud nic není sestaveno: "Nejprve vytvořte těleso, pak jeho výkres.")
2. Vyberte {{ui:Výkres}} na panelu nástrojů.

3D pohled je nahrazen listem. Panel nástrojů zobrazuje {{ui:Vztažný bod}}, {{ui:Rámeček}}, {{ui:Povrch}}, {{ui:Detail}}, {{ui:PDF}} a {{ui:Zpět}} a pravý panel má nadpis **Výkres**. Stavový řádek říká, jak byly pohledy vytvořeny: "Výkres (křivky jsou kresleny jako facety). Vztažný bod, Rámeček a Povrch umisťují GD&T na pohled; panel nastavuje řez a detailní pohled." Pohledy se kreslí z facet jádra sítí, takže zaoblené hrany jsou krátké rovné úseky; skutečné oblouky vyžadují přesné jádro, které tato verze nemá.

Pohybujte se po listu: otáčením kolečka přibližujete, tažením pravým nebo prostředním tlačítkem posouváte, stiskem {{key:F}} list přizpůsobíte. Když je list zaměřen, {{key:Plus}} a {{key:Minus}} přibližují a {{key:Shift}} se šipkami posouvá.

Vyberte {{ui:Zpět}}, {{ui:Zpět na model}} nebo stiskněte {{key:Esc}} (když nic není vybráno a není aktivní žádný nástroj) pro návrat k 3D modelu.

## Co je na listu

- **List, který zvolíte**, na šířku (A3, pokud nevyberete jiný), s rámečkem a **razítkem**: název, firma, číslo výkresu, revize, materiál, nakreslil / zkontroloval / schválil, datum, měřítko, formát listu, "Jednotky: milimetry · promítání třetím úhlem" a zda jsou pohledy přesné, nebo facetové.
- **Blok revizí** v pravém horním rohu, jakmile přidáte revizi.
- **Pohled zepředu, shora a zprava**: pohled shora nad pohledem zepředu, pohled zprava vpravo od něj. Skryté hrany čárkovaně.
- **Izometrický pohled**, kde je na to místo.
- **Celkové rozměry**: šířka a výška na pohledu zepředu, hloubka na pohledu shora.
- Jedno **měřítko** pro hlavní pohledy z řady ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), vybrané tak, aby se vešly.

## Zvolte formát listu

Na výkresovém listu, když nic není vybráno, vyberte {{ui:List}} v pravém panelu: **A4, A3, A2, A1, A0** (ISO 216) nebo **ANSI A, B, C, D, E** (11 × 8.5 až 44 × 34 palců). Pohledy se rozmístí znovu v největším ISO měřítku, které se vejde, takže větší list může ukázat díl větší.

## Vyplňte razítko

Pole **Razítko** v pravém panelu jdou přímo na list: {{ui:Název}}, {{ui:Číslo výkresu}}, {{ui:Revize}}, {{ui:Firma}}, {{ui:Nakreslil}}, {{ui:Zkontroloval}}, {{ui:Schválil}}, {{ui:Datum}} (rok-měsíc-den), {{ui:Obecná tolerance}} a {{ui:Povrch}} (poslední dvě se vytisknou těsně nad razítkem). Napište do pole a stiskněte {{key:Enter}} nebo klikněte jinam. Prázdné pole nechá buňku prázdnou, kromě:

- **Název** ukazuje název dílu, dokud nenapíšete vlastní.
- **Datum** ukazuje dnešek, dokud nenapíšete vlastní.
- **Revize** ukazuje nejnovější revizi v seznamu, dokud nenapíšete vlastní.

**Materiál** pochází z dílu: klikněte na prázdné místo v modelu a pak vyberte {{ui:Materiál}} v panelu Díl. Stejný materiál dá vlastnostem hmotnosti z Měření jejich hustotu.

## Přidejte revize

V části **Revize** klikněte na {{ui:Přidat revizi}}. Každý nový řádek dostane další písmeno (A, B, C … a po Z následuje AA) a dnešní datum. Napište, co se změnilo, a kdo změnu provedl. {{ui:Smazat}} odstraní řádek. Blok revizí v pravém horním rohu listu je vypíše, nejstarší nahoře, až 20.

Formát listu, razítko, revize a materiál se ukládají v souboru dílu a každá změna je jeden krok {{ui:Zpět}}.

## Přidejte řezový pohled

Díl je protnut rovinou a řez je šrafován. Stejně jako ostatní pohledy je řez kreslen z facet, takže zaoblené hrany jsou krátké rovné úseky.

1. V pravém panelu nastavte **Řez A-A** na **Z předního pohledu**, **Z pohledu shora** nebo **Z pravého pohledu**.
2. Řez se objeví na listu, šrafovaný tam, kde řez prochází materiálem, s řezovou čárou a jejími šipkami "A" na pohledu, ze kterého je vzat.
3. Nastavte **Řez v (mm)** pro posun řezné roviny. Začíná uprostřed dílu.

Nastavte **Řez A-A** zpět na **Žádný**, aby se odstranil.

## Přidejte detailní pohled

1. Nastavte **Detail B** na pohled, který chcete zvětšit (nebo vyberte {{ui:Detail}} na panelu nástrojů).
2. Klikněte do středu oblasti, kterou chcete zvětšit, na tom pohledu. Kružnice označená "B" ji vyznačí a zvětšený "Detail B" se objeví na listu se svým měřítkem, například "Detail B (2:1)".
3. Nastavte **Poloměr detailu (mm)** pro velikost kružnice a **Měřítko detailu** pro zvětšení: 2, 4, 5 nebo 10 × proti listu.

Detail lze vzít z pohledu zepředu, shora, zprava nebo z řezu, ne z izometrie. Pokud na listu není místo pro všechny pohledy, panel říká "Na listu není místo pro: detail. Zmenšete detail nebo vynechte pohled."

## Přidejte tabulku děr

Tabulka děr vypisuje díry dílu s jejich polohami, pro vrtání nebo CNC: v panelu vyberte **Tabulka děr** › **Z pohledu shora** (nebo zepředu, nebo zprava).

- Každá díra vidět kolmo v tomto pohledu dostane značku vedle sebe: **A1**, **A2** … pro první velikost, **B1** … pro další.
- Tabulka vypisuje každou značku, její **X** a **Y** v milimetrech a její velikost: "Ø14 THRU", "Ø6.6 × 10 DEEP", zápich nebo záhlubu, nebo popis závitu u závitové díry.
- X a Y se měří od levého dolního rohu obrysu pohledu, označeného na listu **X0 Y0**.
- Díry vytvořené vzory jsou zahrnuty. Díry, které nejsou kolmé k pohledu, jsou v panelu spočítány a z tabulky vynechány.

Tabulka se umístí do volné oblasti listu a do PDF.

## Umístěte symboly GD&T a drsnosti povrchu

1. Vyberte {{ui:Vztažný bod}}, {{ui:Rámeček}} (rámeček řízení tolerance) nebo {{ui:Povrch}} (symbol drsnosti povrchu).
2. Klikněte na bod na pohledu, kam se připojí. Přichytí se k nejbližší nakreslené čáře do 2.5 mm.
3. Symbol se objeví s odkazovou čárou, vybraný, a pravý panel ukazuje jeho nastavení.

Přetažením symbolu jej přesunete; jeho odkazová čára zůstává na bodě. Když je symbol vybrán, šipky jej posouvají o 1 mm. {{key:Delete}} nebo {{key:Backspace}} (nebo {{ui:Smazat}} v panelu) jej odstraní; {{ui:Hotovo}} nebo {{key:Esc}} výběr zruší. Každá změna je v seznamu zpět.

### Vztažný bod

**Písmeno**: A až Z, bez I, O a Q (vypadají jako 1, 0 a O). Každý nový vztažný bod dostane další volné písmeno.

### Rámeček řízení tolerance

| Nastavení | Volby |
|---|---|
| **Tolerance** | Přímost, Rovinnost, Kruhovitost, Válcovitost, Profil čáry, Profil plochy, Kolmost, Úhlovitost, Rovnoběžnost, Poloha, Souosost a Symetrie (obě odstraněny v Y14.5-2018 a označeny jako takové), Kruhové házení, Celkové házení |
| **Zóna (mm)** | Hodnota tolerance, výchozí 0.1 |
| **Průměrová zóna (⌀)** | Pro charakteristiky s válcovou zónou; ve výchozím stavu zapnuto pro Polohu |
| **Materiál** | RFS (žádný), MMC (Ⓜ), LMC (Ⓛ), kde to charakteristika dovoluje |
| **Hlavní / Vedlejší / Třetí vztažný bod** | Až tři písmena vztažných bodů, každé s **modifikátorem …** (MMB, LMB), kde je dovoleno |

PartCraft kontroluje rámeček podle pravidel ASME Y14.5 a v horní části panelu říká, co je špatně, například "Rovinnost je tvarová tolerance: nemá vztažné reference." nebo "Poloha potřebuje alespoň jednu vztažnou referenci." Řádek **Čtení** rozepíše rámeček slovy.

### Povrch

| Nastavení | Volby | Výchozí |
|---|---|---|
| **Ra (µm)** | Střední drsnost | 1.6 |
| **Proces** | libovolný proces, obrobeno, bez odebrání materiálu | obrobeno |
| **Poznámka** | Až 40 znaků, například směr rýh nebo proces | |

Pokud nic není vybráno, panel vypisuje **Poznámky na listu**, každou s **Vybrat**.

## Exportujte PDF

Vyberte {{ui:PDF}} na panelu nástrojů, {{ui:Exportovat PDF}} v panelu, nebo {{ui:Export}} a pak {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}} z modelu. PDF se stáhne jako `<part name> - drawing.pdf` a stavový řádek vypíše, co je v něm.

Vytiskněte jej v režimu "Skutečná velikost" na papír formátu listu, aby měřítko zůstalo správné.

## Omezení

| Ještě není hotovo | Co udělat dnes |
|---|---|
| Kóty jiné než tři celkové rozměry | Doplňte je do PDF pomocí aplikace pro značení, nebo exportujte skicu či plochu jako DXF a okótujte ji v 2D CAD programu |
| Více než jeden řez nebo detail; vylomené, pomocné a promítané pohledy | Nejsou k dispozici |
| Promítání prvním úhlem, pohyblivé pohledy, výškově orientované listy | Třetí úhel, automatické rozložení, na šířku |
| Volné textové poznámky a tabulky na listu (kromě bloků názvu a revizí) | Použijte poznámku k povrchu, nebo přidejte text v PDF |
| Výkresy sestav | Nejsou k dispozici |

Znaky mimo západoevropskou sadu se vytisknou jako "?" (PDF používá vestavěné písmo Helvetica čtečky). Symboly GD&T jsou kresleny jako čáry, takže se vytisknou v libovolné čtečce.

## Nechte list to udělat

- **List › Automaticky** vybere papír za vás: největší standardní měřítko až do 1:1, na nejmenším formátu řady A, který pohledy v tomto měřítku pojme (seznam ukáže, který zvolil).
- **Okótovat díry** okótuje díry na pohledu, který jich vidí nejvíce kolmo: značka středu u každé, jeden popisek na velikost ("2× Ø6 THRU" s odkazovou čárou) a jejich polohy měřené od levého dolního rohu pohledu. Celková šířka, výška a hloubka jsou vždy přítomny.
