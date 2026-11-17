---
title: Gem, åbn igen og fortsæt arbejdet
summary: Gem dele og samlinger på din computer, giv dem navne, åbn dem igen med knap, tast eller træk, behold versioner, og undgå at miste arbejde i en browserfane.
keywords: gem, åbn, åbn igen, indlæs, download, versioner, backup, omdøb, filnavn, tabt arbejde, forlad side, partcraft.json, partcraft-asm.json, ny del
from: c18a5abc
---

PartCraft gemmer intet mellem besøg. Din del ligger i browserfanen, indtil du gemmer den som en fil, og den kommer tilbage, når du åbner filen.

## Gem en del

1. Navngiv delen: klik på et tomt rum i visningen, så intet er valgt, skriv **Navn** i det højre panel, og tryk {{key:Enter}}. Overskriften for historikken ændrer sig, så den passer.
2. Tryk {{key:Mod+S}} eller vælg {{ui:Gem}}.
3. Browseren downloader `<navn>.partcraft.json`. Statuslinjen siger: Gemt: Bracket.partcraft.json (hele historikken; åbn den her igen for at fortsætte redigeringen).

Er en skitse åben, lukker gemning den først.

Filen indeholder alle skitser, relationer, mål og features, samt undertrykte features, rollback-positionen, indstillingerne for tegningsarket og GD&T-noterne og hele teksten for ethvert importeret STEP-massivt legeme. Din fortrydelsesliste gemmes ikke.

## Gem en samling

I en samling downloader den samme {{ui:Gem}} eller {{key:Mod+S}} `<samlingens navn>.partcraft-asm.json`. Hver del er gemt inde i den, så du ikke behøver de separate delfiler for at åbne den igen.

Mens du redigerer en del inde fra en samling, gemmer {{key:Mod+S}} den del alene som en `.partcraft.json`. Vælg først {{ui:Tilbage}} og gem derefter for at gemme hele samlingen.

## Åbn igen

Gør et af følgende:

- vælg {{ui:Åbn}} eller tryk {{key:Mod+O}}, og vælg derefter filen;
- træk filen fra {{pick:mac=Finder|windows=Stifinder|linux=din filhåndtering}} hen over 3D-visningen («Slip en PartCraft-del for at åbne den» vises).

PartCraft kan skelne dele fra samlinger ud fra indholdet, så begge åbnes på samme måde. En `.step`- eller `.stp`-fil åbnes som et importeret massivt legeme: se [Åbn en STEP-fil og byg videre på den](topic:import-step). Statuslinjen bekræfter: Åbnet: Bracket.partcraft.json, 7 features. eller Åbnet: Hinge.partcraft-asm.json, 3 dele, 2 led.

Har delen på skærmen ikke-gemte ændringer, spørger PartCraft først: {{ui:Annuller}}, {{ui:Kassér ændringer}} eller {{ui:Gem først}}.

:::warning
Luk en samling ({{ui:Luk}}), før du åbner en delfil. Åbner du en del, mens en samling er på skærmen, indlæses delen bag samlingen, og du ser den først, når samlingen er lukket. Åbner du en samlingsfil, erstattes en ikke-gemt samling uden at spørge, så gem den først.
:::

## Start forfra

{{ui:Ny}} starter en tom »Part1«. Den spørger først, hvis der er ikke-gemte ændringer, og den lukker en åben samling (og spørger, hvis samlingen ikke er gemt).

## Behold versioner

Hver gemning er en ny download, så du kan beholde versioner blot ved at beholde filerne:

- Sæt en version eller dato i navnet, før du gemmer: »Bracket rev B«.
- Din browser kan tilføje " (1)" eller " (2)", når en fil med samme navn allerede findes i downloadmappen. Den nyeste er den med det højeste nummer, eller du tjekker datoen i {{pick:mac=Finder|windows=Stifinder|linux=din filhåndtering}}.
- Flyt færdige filer ud af downloadmappen og over i din projektmappe.

Se [Hvor dine filer ender](common:your-files) for, hvor downloads ligger på hvert system.

## Mist ikke arbejde

- Gem, før du lukker fanen, genindlæser siden eller lader computeren gå i dvale i længere tid. Browseren spørger »Forlad siden?«, hvis du prøver at lukke med ikke-gemte ændringer, men et nedbrud eller en lukket bærbar giver ingen advarsel.
- Private vinduer eller inkognito-vinduer virker, men ellers er der ingen forskel: filen er stadig den eneste kopi.
- Gemning i skyen og versionshistorik er endnu ikke tilgængelig.
