---
title: Använd PartCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript arbeta med den öppna delen: läsa dess funktioner, parametrar och massa, ändra en parameter och bygga om, köra ett skript, exportera och spara. Av tills du slår på det.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, parametrar, massegenskaper, stl, step, 3mf, behörigheter, koppla från, aktivitet, mappar
from: e66d3470
---

## Vad du lär dig

Hur du låter en AI-assistent (eller ett skript du skrivit) titta på delen du har öppen, ändra dess parametrar, köra ett skript och exportera den, och hur du bestämmer vad den får använda.

PartCraft har **ingen egen AI** och skickar inget någonstans. Du tar med assistenten: vilket program som helst som talar Model Context Protocol (MCP). PartCraft ger den bara verktyg, och du väljer vilka.

## Slå på det

1. Öppna {{ui:Inställningar}} (kugghjulet i appfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:PartCraft}}.
2. Under {{ui:Assistenter}}, bocka i **Låt AI-assistenter och skript använda PartCraft**. Den är av tills du gör det.
3. Välj vad den får göra. **Läs** är ibockad från början; bocka i de andra bara när du behöver dem.
4. För att låta den exportera och spara i en mapp, välj {{ui:Lägg till en mapp…}} under **Mappar den får använda** och välj mappen i Studios dialogruta.

Assistenter ansluter via **CadCraft Studio** på din dator: Studio visar adressen och token som du klistrar in i assistenten. En webbläsarflik kan inte öppna en anslutning för en assistent.

## Vad en assistent kan begära

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `part_describe`, `features_list` | Läs | Funktionerna i ordning med vad som byggdes och vad som misslyckades, materialet, solidens volym och storlek |
| `params_list` | Läs | Parametrarna och varje tal som en ekvation kan styra, med deras värden |
| `mass_properties` | Läs | Volym, area, tyngdpunkt, trögheten kring den; massan när delen har ett material |
| `param_set` | Redigera | Sätter en parameter eller en funktions tal och bygger om. Ett steg som du kan ångra |
| `script_run` | Redigera | Kör ett CraftScript-, Lua- eller Python-skript på samma sätt som arbetsytan {{ui:Skript}} gör: isolerat, inga filer och inget nätverk. Delen ändras inte |
| `part_export` | Exportera | STL, 3MF, STEP eller OpenUSD (.usdz, .usda, .usdc), så som {{ui:Fil}} › {{ui:Exportera}} skriver dem |
| `link_push` | Redigera | Uppdaterar en modell som är länkad från ett annat program (se [Håll en .3dm-modell levande](topic:live-3dm-link)) |
| `link_status` | Läs | Anger om en länkad modell finns kvar och när den senast uppdaterades |
| `part_save` | Spara | PartCraft:s egen {{ui:Spara}} |
| `illustrate_export` | Exportera | En manual från arbetsytan {{ui:Illustrera}} som PDF eller SVG-linjeteckning av dess vyer, som den interaktiva 3D-filen, eller dess instruktioner som PDF eller en webbsida, så som arbetsytans menyer {{ui:Exportera}} och {{ui:Instruktioner}} skriver dem ([Manualer](topic:illustrate)) |

:::note
Den här versionen använder nätkärnan: volymer kommer från trianglarna (något under en verklig böjd solid), och STEP skrivs facetterat, med trianglar i stället för exakta ytor.
:::

## Du har kontrollen

- **Varje ändring är ett ångra-steg**, märkt för assistenten, till exempel "Assistent: sätt l = 45". Tryck på {{key:Mod+Z}} för att ta tillbaka den.
- **Du ser när en är ansluten.** En knapp i appfältet visar assistenten medan den är ansluten. Klicka på den för att se vad den får göra, eller för att **Koppla från** den.
- **Aktivitet.** {{ui:Inställningar}} › {{ui:PartCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} listar varje anrop; {{ui:Spara loggen}} sparar en kopia.
- **Mappar.** Den läser och skriver bara filer i de mappar du har lagt till; {{ui:Ta bort}} tar tillbaka en mapp direkt.

## Utan att öppna PartCraft

Filservern för assistenter i CadCraft (`npx @getcadcraft/mcp`) och kommandoraden `cadcraft` öppnar `.partcraft.json`-delar med PartCraft:s egen kod och nätkärna, utan något fönster: samma läsverktyg, att sätta parametrar, CraftScript-skript, exporter (även OpenUSD) och sparande. `cadcraft convert bracket.partcraft.json bracket.stl` bygger en del och skriver den från kommandoraden. Manualer (`.partcraft-manual.json`) exporteras där också: `illustrate_export`, eller `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (lägg till `--instructions` för instruktionerna).

## Om något inte fungerar

- **"kräver behörigheten Redigera":** bocka i **Redigera** under {{ui:Assistenter}} och fråga igen.
- **"styrs av ekvationen":** det talet följer en parameter; be assistenten att sätta parametern i stället.
- **Ändringen blev fel:** tryck på {{key:Mod+Z}}.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): genomarbetade exempel, var och en med verktygen den anropar.
