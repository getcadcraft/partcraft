---
title: Udržiavať model .3dm naživo
summary: Upravujte model v programe, ktorý ho vytvoril, a sledujte, ako sa teleso v PartCraft mení, z Rhino 8 alebo z definície Grasshopper, s prvkami prebudovanými na novom tvare.
keywords: rhino, grasshopper, živé prepojenie, živé spojenie, 3dm, NURBS, parametrický, prepojenie, synchronizácia, skript, odoslanie, importované teleso
from: cf4dc9b2
---

Tvarujte model tam, kde ho modelujete, a obrábajte, kontrolujte a dokumentujte ho tu. Každá zmena v druhom programe nahradí jedno importované teleso v PartCraft a nasledujúce prvky sa prebudujú na novom tvare.

:::note
Prepojenie potrebuje **CadCraft Studio** na tom istom počítači. Karta prehliadača nemôže vytvoriť spojenie. Nič nejde cez internet: skript komunikuje so Studiom na adrese tohto počítača, s tokenom.
:::

:::warning
Toto prepojenie bolo otestované so zapisovačom súborov zo skriptu a s náhradou za druhý program, zatiaľ nie priamo v Rhino ani Grasshopper. Ak tam niečo zlyhá, napíšte nám, čo hlásilo.
:::

## Nastavenie

1. V Studiu otvorte PartCraft. V {{ui:Nastavenia}} › {{ui:PartCraft}} › {{ui:Asistenti}} zaškrtnite **Povoliť AI asistentom a skriptom používať PartCraft**, potom **Upraviť**.
2. V Studiu zvoľte {{ui:Pripojiť asistenta}}. Zobrazí sa adresa a token, ktoré vložíte nižšie.
3. Stiahnite skript: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Z Rhino

1. Spustite `cadcraft_link.py` v editore skriptov Rhino (Python 3 v Rhino 8).
2. Pri prvom spustení vložte adresu a token. Uložia sa do `.cadcraft-link.json` vo vašom domovskom priečinku, nikdy v modeli. Studio pri každom spustení vytvorí nový token, takže sa skript vtedy opýta znova.

Skript spustite znova, aby sa zastavil.

## Z Grasshopper

Najprv spustite skript raz v Rhino, aby sa adresa a token uložili.

1. Pridajte komponent Script (Python 3) a vložte doň celý `cadcraft_link.py`.
2. Nastavte tieto vstupy: `G` (geometria, so zoznamovým prístupom), `N` (názov, voliteľný), `On` (booleovský prepínač) a `Target` (voliteľný: `model` alebo `part`, ak sú otvorené obe aplikácie).
3. Prepínač `On` nastavte na true.

Každý prepočet pošle `G` a nahradí to, čo komponent poslal naposledy.

## Ako to funguje tu

- **Jedno teleso.** Všetko viditeľné v modeli sa stane jedným importovaným prvkom, ako pri [otvorení súboru .3dm](topic:open-3dm-files).
- **Musí sa uzavrieť.** PartCraft vyplní malé diery a ploché otvory a druhý program o tom dostane počet. Ak sa model stále neuzavrie, PartCraft ponechá teleso, ktoré mal, a stavový riadok to oznámi. Ďalšia zmena, ktorá sa uzavrie, ho aktualizuje.
- **Dokončite, čo robíte.** V náčrte alebo na výkrese sa aktualizácie odmietnu a skúsia znova; prídu, keď sa vrátite do modelu.
- **Späť.** Aktualizácie, ktoré sú od seba do dvoch sekúnd, zdieľajú jeden krok späť.
- **Uloženie.** Súbor súčiastky si prepojenie uchová. Po opätovnom otvorení spustite skript znova a rovnaký prvok sa aktualizuje.

**Len jedným smerom.** Zmeny sa tu nevracajú druhému programu.

## Ak niečo zlyhá

- **„No ModelCraft or PartCraft window allows it“:** urobte krok 1 nastavenia.
- **„Studio refused the token“:** Studio sa reštartovalo. Skopírujte nový token a skript spustite znova. Pre Grasshopper ho najprv spustite v Rhino.
- **„Cannot reach CadCraft Studio“:** Studio nebeží, alebo sa adresa zmenila.
