---
title: Spara, öppna igen och fortsätt arbeta
summary: Spara delar och sammanställningar på din dator, namnge dem, öppna dem igen med knapp, tangent eller dra-och-släpp, behåll versioner och undvik att förlora arbete i en webbflik.
keywords: spara, öppna, öppna igen, läs in, ladda ner, versioner, säkerhetskopia, byt namn, filnamn, förlorat arbete, lämna sidan, partcraft.json, partcraft-asm.json, ny del
from: c18a5abc
---

PartCraft behåller ingenting mellan besöken. Din del finns i webbfliken tills du sparar den som en fil, och den kommer tillbaka när du öppnar filen.

## Spara en del

1. Namnge delen: klicka på tomt utrymme i vyn så att inget är markerat, skriv **Namn** i högerpanelen och tryck på {{key:Enter}}. Historikrubriken ändras så att den matchar.
2. Tryck på {{key:Mod+S}} eller välj {{ui:Spara}}.
3. Webbläsaren laddar ner `<namn>.partcraft.json`. Statusfältet visar "Bracket.partcraft.json sparades (hela historiken; öppna den här för att fortsätta redigera)."

Om en skiss är öppen stänger sparandet den först.

Filen innehåller varje skiss, relation, mått och funktion, plus undertryckta funktioner, återrullningspositionen, ritningsbladets inställningar och GD&T-noteringar, och hela texten för varje importerad STEP-solid. Din ångringslista sparas inte.

## Spara en sammanställning

I en sammanställning laddar samma {{ui:Spara}} eller {{key:Mod+S}} ner `<sammanställningens namn>.partcraft-asm.json`. Varje del lagras inuti den: du behöver inte de separata delfilerna för att öppna den igen.

Medan du redigerar en del inifrån en sammanställning sparar {{key:Mod+S}} den delen för sig själv som en `.partcraft.json`. Välj först {{ui:Tillbaka}} och spara sedan för att spara hela sammanställningen.

## Öppna igen

Något av följande:

- välj {{ui:Öppna}} eller tryck på {{key:Mod+O}} och välj filen;
- dra filen från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} till 3D-vyn ("Släpp en PartCraft-del för att öppna den" visas).

PartCraft skiljer delar från sammanställningar på vad som finns inuti, så båda öppnas på samma sätt. En `.step`- eller `.stp`-fil öppnas som en importerad solid: se [Öppna en STEP-fil och bygg vidare](topic:import-step). Statusfältet bekräftar: "Bracket.partcraft.json öppnades: 7 funktioner." eller "Hinge.partcraft-asm.json öppnades: 3 delar, 2 leder."

Om delen på skärmen har osparade ändringar frågar PartCraft först: {{ui:Avbryt}}, {{ui:Kasta bort ändringar}} eller {{ui:Spara först}}.

:::warning
Stäng en sammanställning ({{ui:Stäng}}) innan du öppnar en delfil. Om du öppnar en del medan en sammanställning visas laddas delen bakom sammanställningen, och du ser den först när du stängt sammanställningen. Om du öppnar en sammanställningsfil ersätts även en osparad sammanställning utan att fråga, så spara den först.
:::

## Börja om

{{ui:Ny}} startar en tom "Part1". Den frågar först om det finns osparade ändringar, och stänger en öppen sammanställning (och frågar om den inte är sparad).

## Behåll versioner

Varje sparning är en ny nedladdning, så du kan behålla versioner helt enkelt genom att behålla filerna:

- Lägg in en version eller ett datum i namnet innan du sparar: "Bracket rev B".
- Webbläsaren kan lägga till " (1)", " (2)" när en fil med samma namn redan finns i nedladdningsmappen. Den senaste är den med högst nummer, eller kontrollera datumet i {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}}.
- Flytta färdiga filer från nedladdningsmappen till din projektmapp.

Se [Var dina filer hamnar](common:your-files) för var nedladdningar hamnar på varje system.

## Förlora inte arbete

- Spara innan du stänger fliken, laddar om sidan eller låter datorn gå i viloläge under lång tid. Webbläsaren frågar "Lämna sidan?" om du försöker stänga med osparade ändringar, men en krasch eller en stängd bärbar dator ger ingen varning.
- Privata fönster eller inkognitofönster fungerar, men inget annat skiljer: filen är fortfarande den enda kopian.
- Molnlagring och versionshistorik finns inte ännu.
