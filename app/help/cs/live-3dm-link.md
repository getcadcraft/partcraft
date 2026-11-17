---
title: Udržet model .3dm živý
summary: Měňte model v programu, který jej vytvořil, a sledujte, jak se těleso v PartCraftu mění, z Rhino 8 nebo z definice Grasshopper, s prvky přestavěnými na nový tvar.
keywords: rhino, grasshopper, živé propojení, živé připojení, 3dm, nurbs, parametrický, odkaz, synchronizace, skript, odeslání, importované těleso
from: cf4dc9b2
---

Model dál tvarujte tam, kde ho modelujete, a zde ho obrábějte, kontrolujte a dokumentujte. Každá změna v druhém programu nahradí jedno importované těleso v PartCraftu a prvky za ním se přestaví na nový tvar.

:::note
Propojení potřebuje **CadCraft Studio** na stejném počítači. Připojení nemůže převzít karta prohlížeče. Nic neputuje přes internet: skript komunikuje se Studiem na adrese tohoto počítače, s tokenem.
:::

:::warning
Toto propojení bylo vyzkoušeno se zápisem souborů skriptem a s náhradou druhého programu, zatím ne uvnitř samotného Rhino nebo Grasshopperu. Pokud tam něco selže, napište nám, co hlásilo.
:::

## Nastavení

1. Ve Studiu otevřete PartCraft. V {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}} zaškrtněte **Povolit AI asistentům a skriptům používat PartCraft** a pak klikněte na **Upravit**.
2. Ve Studiu zvolte {{ui:Připojit asistenta}}. Zobrazí adresu a token, který vložíte níže.
3. Stáhněte skript: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## V Rhino

1. Spusťte `cadcraft_link.py` v editoru skriptů Rhino (Python 3 v Rhino 8).
2. Poprvé vložte adresu a token. Uloží se do `.cadcraft-link.json` ve vaší domovské složce, nikdy v modelu. Studio při každém spuštění vytvoří nový token, takže se skript zeptá znovu.

Chcete-li zastavit, spusťte skript znovu.

## V Grasshopper

Nejprve spusťte skript jednou v Rhino, aby se uložily adresa a token.

1. Přidejte komponentu Script (Python 3) a vložte do ní celý `cadcraft_link.py`.
2. Nastavte tyto vstupy: `G` (geometrie, s přístupem k seznamu), `N` (název, volitelný), `On` (logický přepínač) a `Target` (volitelný: `model` nebo `part`, když jsou otevřeny obě aplikace).
3. Nastavte `On` na true.

Každý výpočet odešle `G` a nahradí to, co komponenta odeslala naposledy.

## Jak to funguje

- **Jedno těleso.** Vše viditelné v modelu se stane jedním importovaným prvkem, jako když [otevřete soubor .3dm](topic:open-3dm-files).
- **Musí být uzavřené.** PartCraft vyplní malé díry a ploché otvory a druhý program se dozví, kolik jich bylo. Pokud model stále není uzavřený, PartCraft si ponechá dosavadní těleso a stavový řádek to oznámí. Další změna, která model uzavře, ho aktualizuje.
- **Dokončete, co děláte.** Ve skice nebo výkresu se aktualizace odmítnou a zkusí znovu; dorazí, až se vrátíte do modelu.
- **Zpět.** Aktualizace, které jsou od sebe do dvou sekund, sdílejí jeden krok zpět.
- **Uložení.** Soubor dílu odkaz uchovává. Po novém otevření spusťte skript znovu a stejný prvek se aktualizuje.

**Jen jedním směrem.** Změny zde se do druhého programu nevracejí.

## Když něco selže

- **"Žádné okno ModelCraft nebo PartCraft to nedovoluje":** udělejte krok 1 nastavení.
- **"Studio odmítlo token":** Studio se restartovalo. Zkopírujte nový token a spusťte skript znovu. Pro Grasshopper ho nejprve spusťte v Rhino.
- **"Nelze se připojit k CadCraft Studio":** Studio neběží, nebo se adresa změnila.
