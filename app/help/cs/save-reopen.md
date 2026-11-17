---
title: Uložení, opětovné otevření a pokračování v práci
summary: Uložte díly a sestavy do počítače, pojmenujte je, znovu je otevřete tlačítkem, klávesou nebo přetažením, uchovejte verze a nepřijdete o práci v záložce prohlížeče.
keywords: uložit, otevřít, znovu otevřít, načíst, stáhnout, verze, záloha, přejmenovat, název souboru, ztráta práce, opustit web, partcraft.json, partcraft-asm.json, nový díl
from: c18a5abc
---

PartCraft nic nepamatuje mezi návštěvami. Váš díl existuje v záložce prohlížeče, dokud ho neuložíte jako soubor, a vrátí se, až tento soubor otevřete.

## Uložení dílu

1. Pojmenujte díl: klikněte do prázdného místa v zobrazení, aby nic nebylo vybráno, potom v pravém panelu zadejte **Název** a stiskněte {{key:Enter}}. Nadpis historie se podle něj změní.
2. Stiskněte {{key:Mod+S}} nebo zvolte {{ui:Uložit}}.
3. Prohlížeč stáhne `<název>.partcraft.json`. Stavový řádek hlásí: "Soubor Bracket.partcraft.json byl uložen (úplná historie; znovu ji otevřete zde a pokračujte v úpravách)."

Je-li otevřená skica, uložení ji nejdřív zavře.

Soubor obsahuje každou skicu, vazbu, kótu a prvek, dále potlačené prvky, polohu lišty návratu, nastavení listu výkresu a poznámky GD&T a úplný text každého importovaného tělesa STEP. Seznam kroků zpět se neukládá.

## Uložení sestavy

V sestavě stejné {{ui:Uložit}} nebo {{key:Mod+S}} stáhne soubor `<název sestavy>.partcraft-asm.json`. Každý díl je uložen uvnitř něj: k opětovnému otevření nepotřebujete samostatné soubory dílů.

Když upravujete díl přímo v sestavě, uloží {{key:Mod+S}} tento díl samostatně jako `.partcraft.json`. Pro uložení celé sestavy nejdřív zvolte {{ui:Zpět}}, potom uložte.

## Opětovné otevření

Lze použít kterýkoli z těchto postupů:

- zvolte {{ui:Otevřít}} nebo stiskněte {{key:Mod+O}}, potom vyberte soubor;
- přetáhněte soubor z {{pick:mac=Finder|windows=Průzkumník souborů|linux=váš správce souborů}} do 3D zobrazení (zobrazí se "Přetáhněte sem díl PartCraft, aby se otevřel").

PartCraft pozná díly od sestav podle obsahu, takže se oba otevírají stejně. Soubor `.step` nebo `.stp` se otevře jako importované těleso: viz [Otevření souboru STEP a navázání na něj](topic:import-step). Stavový řádek potvrdí: "Soubor Bracket.partcraft.json byl otevřen: 7 prvků." nebo "Soubor Hinge.partcraft-asm.json byl otevřen: 3 díly, 2 spoje."

Pokud má díl na obrazovce neuložené změny, PartCraft nejdřív zeptá: {{ui:Zrušit}}, {{ui:Zahodit změny}} nebo {{ui:Nejdřív uložit}}.

:::warning
Před otevřením souboru dílu zavřete sestavu ({{ui:Zavřít}}). Pokud otevřete díl, zatímco je na obrazovce sestava, načte se díl za sestavou a uvidíte jej až po jejím zavření. Otevření souboru sestavy také nahradí neuloženou sestavu bez dotazu, proto ji nejdřív uložte.
:::

## Začít znovu

{{ui:Nový}} vytvoří prázdný "Part1". Pokud existují neuložené změny, nejdřív se zeptá; otevřenou sestavu zavře (a zeptá se, pokud je neuložená).

## Uchování verzí

Každé uložení je nové stažení, takže verze můžete uchovat jednoduše tím, že si soubory necháte:

- Před uložením dejte do názvu verzi nebo datum: "Bracket rev B".
- Pokud soubor se stejným názvem už je ve složce pro stahování, může prohlížeč přidat " (1)", " (2)". Nejnovější je ten s nejvyšším číslem, nebo zkontrolujte datum v {{pick:mac=Finder|windows=Průzkumník souborů|linux=váš správce souborů}}.
- Hotové soubory přesuňte ze složky pro stahování do složky projektu.

Kde se stahování ukládá v jednotlivých systémech, viz [Kde jsou vaše soubory](common:your-files).

## Neztraťte práci

- Uložte, než zavřete záložku, obnovíte stránku nebo necháte počítač dlouho spát. Prohlížeč se zeptá "Opustit web?", pokud se pokusíte zavřít s neuloženými změnami, ale pád nebo zavřený notebook žádné varování nedá.
- Soukromá nebo anonymní okna fungují, ale nic jiného se neliší: soubor je pořád jediná kopie.
- Ukládání do cloudu a historie verzí zatím nejsou k dispozici.
