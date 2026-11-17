---
title: Een genormeerd onderdeel openen
summary: Start een onderdeel van een bout, schroef, moer, sluitring, pen, lager of spie, met de maten uit de norm, en met elke maat uit de tabel van de norm als configuratie.
keywords: genormeerd onderdeel, genormeerde onderdelen, bout, schroef, zeskant, moer, sluitring, pen, speciale pen, lager, kogellager, spie, parallelle spie, bevestiging, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, sjabloon, bibliotheek
from: b9e2811f
---

PartCraft opent veelgebruikte mechanische onderdelen kant-en-klaar: de maten komen uit de tabellen van de normen, en elke maat in de tabel is een configuratie waarnaar u kunt overschakelen.

## Er een openen

1. Klik {{ui:Genormeerd onderdeel}} in de groep Bestand.
2. Kies in {{ui:Onderdeel}} het soort, bijvoorbeeld {{ui:Zeskantkopschroef (ISO 4017)}}.
3. Kies in {{ui:Formaat}} de maat, bijvoorbeeld `M10 × 40`.
4. Klik op {{ui:Openen}}.

Het onderdeel opent als een nieuw, niet-opgeslagen onderdeel. Sla het op om het te bewaren ({{key:Mod+S}}).

| Onderdeel | Norm | Parameters |
|---|---|---|
| Zeskantkopschroef, zeskantbout | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` schroefdraadmaat, `s` sleutelwijdte, `k` kophoogte, `l` lengte |
| Zeskantmoer | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Vlakke sluitring | ISO 7089 | `d1` binnenmaat, `d2` buitenmaat, `h` dikte |
| Parallelle pen | ISO 2338 | `d`, `l` |
| Groefkogellager | ISO 15 | `d` boring, `D` buitenmaat, `B` breedte |
| Parallelle spie | DIN 6885-1, vorm A | `b` breedte, `h` hoogte, `l` lengte |

## De maat wijzigen

Elke maat is een configuratie (zie [Configuraties en ontwerptabellen](topic:design-tables)): open {{ui:Parameters}} en kies een andere, of wijzig een parameter, zoals `l` voor een langere schroef, en sla dat op als een eigen configuratie.

## Wat is gemodelleerd

- Schroeven en bouten: de zeskante kop en een gewone schacht. Moeren: het zeskant met een gat van de nominale maat van de schroefdraad. Schroefdraad is niet gemodelleerd; voeg er een toe met {{ui:Schroefdraad}} als u die nodig heeft (zie [Schroefdraad](topic:threads)).
- Pennen: een gewone cilinder; de afgeschuinde uiteinden zijn weggelaten.
- Lagers: alleen de buitenomhulling (een ring van de boring, de buitendiameter en de breedte), wat u nodig heeft om er een te plaatsen.
- Spieën: de spie met ronde uiteinden.

Het materiaal van het onderdeel is staal, zodat het massapaneel het gewicht ervan toont. Tandwielen zijn hier nog niet beschikbaar: PartCraft heeft geen tandfunctie, en een schijf is geen tandwiel. CadCraft tekent tandwielen volgens de tekenconventie, en de bibliotheek heeft ze als tekeningen.
