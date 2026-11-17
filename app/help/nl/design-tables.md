---
title: Configuraties en ontwerptabellen
summary: Bewaar meerdere maten en versies van één onderdeel als benoemde configuraties die in het onderdeelbestand worden opgeslagen, met features per configuratie aan of uit; wissel met één klik, haal ze binnen of exporteer ze als CSV-ontwerptabel, of bouw ze allemaal vanaf de opdrachtregel.
keywords: ontwerptabel, configuraties, configuratie, maten, familie van onderdelen, csv, spreadsheet, varianten, tabelgestuurd, onderdeelfamilie, onderdrukken, onderdrukt, feature uitschakelen, opties, met of zonder, configurator
from: 17249afb
---

Een **configuratie** is één maat van het onderdeel: een benoemde set waarden voor zijn parameters. Het onderdeel bewaart zijn configuraties in zijn eigen bestand, dus ze reizen mee. Een **ontwerptabel** is hetzelfde als een CSV-bestand, met één rij per configuratie.

Configuraties stellen **parameters** in, dus voeg die eerst toe (zie [Een onderdeel aansturen met parameters](topic:parameters)). Een configuratie slaat de parameters op die gewone getallen zijn; parameters die uit andere worden berekend (zoals `area = w * d`) volgen vanzelf.

## Een configuratie opslaan

1. Stel op het tabblad {{ui:Parameters}} de parameters in voor één maat van het onderdeel.
2. Typ onder **Configuraties** een naam (bijvoorbeeld `Groot`) en druk op {{ui:Huidige waarden opslaan}} of {{key:Enter}}.

De nieuwe configuratie wordt gemarkeerd als **actief**. Wijzigt u daarna een parameter, dan staat er **actief, gewijzigd sinds**, zodat u weet dat het onderdeel er niet meer mee overeenkomt.

## Wisselen, bijwerken, hernoemen, verwijderen

- {{ui:Toepassen}} zet de parameters op de waarden van die configuratie en bouwt het onderdeel opnieuw op.
- {{ui:Bijwerken}} slaat de huidige waarden op in die configuratie.
- Om er een te hernoemen, typt u de nieuwe naam in het vak ervan en drukt u op {{key:Enter}}.
- {{ui:Verwijderen}} verwijdert de configuratie. De parameters behouden hun waarden.

Elk hiervan is één stap: {{key:Mod+Z}} gaat terug. Als u een parameter hernoemt, volgt elke configuratie de nieuwe naam; als u er een verwijdert, valt die uit de configuraties weg.

## Features aan- en uitzetten in een configuratie

Een configuratie bewaart ook welke features uit staan, zodat één onderdeel versies **met** en **zonder** iets kan hebben: montagegaten, een afschuining, een boss.

1. Zet de feature uit: klik erop in de geschiedenis, en klik daarna op {{ui:Onderdrukken}} in {{ui:Eigenschappen}}.
2. Sla de configuratie op zoals gewoonlijk, bijvoorbeeld `Zonder gaten`. De rij toont wat hij uitzet.
3. Zet de feature weer aan ({{ui:Onderdrukking opheffen}}) en sla een andere configuratie op, bijvoorbeeld `Met gaten`.

Zodra een configuratie een feature uitzet, zet het toepassen van een configuratie zijn features uit en **elke andere feature aan**, samen met zijn parameterwaarden, in één stap. Een configuratie die is opgeslagen voordat features in een ervan waren uitgezet, telt als "alles aan". {{ui:Bijwerken}} slaat de features op zoals ze nu zijn, met de waarden.

Een onderdeel waarvan de configuraties features uitzetten, wordt opgeslagen als een nieuwere bestandsversie: een oudere PartCraft meldt dat het bestand van een nieuwere versie is in plaats van het zonder die features te openen.

:::note
De CSV-ontwerptabel bevat alleen parameterwaarden. Een tabel importeren over een configuratie wijzigt de waarden en behoudt de features die hij uitzet; `--table` op de opdrachtregel bouwt alleen de waarden.
:::

Het onderdeelbestand wordt opgeslagen met de configuraties en met degene die actief was. Het onderdeel opent met de waarden waarmee het is opgeslagen.

## Een ontwerptabel binnenhalen of exporteren

Een ontwerptabel is een CSV-bestand met een kolom voor elke parameter en een rij voor elke configuratie:

```
name,width,thick,bolt
klein,100,6,6.6
middel,140,8,8.5
groot,200,12,13
```

De eerste kolom mag `name`, `config` of `configuration` heten; elke andere kolom moet de naam van een parameter van het onderdeel zijn. Cellen zijn getallen, desgewenst met eenheden (`8in`). Een lege cel laat die parameter buiten de rij.

- {{ui:CSV importeren}} voegt elke rij toe als configuratie. Een rij met de naam van een bestaande configuratie vervangt die. Importeren is één stap.
- {{ui:CSV exporteren}} schrijft de configuraties weg. Zijn er nog geen, dan schrijft het één rij met de huidige waarden, als startpunt voor een spreadsheet.

Een configuratienaam die een spreadsheet als formule zou lezen (beginnend met `=`, `+`, `-` of `@`) wordt geschreven met een voorafgaande `'`.

## Alle maten tegelijk

{{ui:Variantenpakket…}} onder **Configuraties** bouwt elke configuratie, of een gekozen paar, als STEP, IFC, DWG en een voorbeeld in één zip, met een tabel van hun parameters: zie [Een variantenpakket maken van uw configuraties](topic:variant-pack).

Het opdrachtregelprogramma bouwt één bestand per rij van een CSV-ontwerptabel:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporteer de configuraties eerst als CSV en geef dat bestand daarna mee met `--table`. Zie [Scripts en de opdrachtregel](topic:scripts-and-cli). Een onderdeel dat als script is opgeslagen, bewaart zijn configuraties in een regel `configs json …`.
