---
title: PartCraft-inställningar
summary: Välj vilken musknapp som vrider vyn, låt ett svep på styrplattan vrida och panorera delen, slå på eller av automatiska relationer när du skissar, och ange hur många trådar simuleringslösarna använder.
keywords: inställningar, inställningar, alternativ, mus, mittenknapp, hjulknapp, kretsa, rotera, vrid, styrplatta, touchpad, rulla, svep, nypa, relationer, villkor, automatiska relationer, fångst, sammanfallande, trådar, lösartrådar, kärnor, processorer, flertrådad, snabbare lösning, parallell
from: 759edcaf
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller med {{key:Mod+,}}. Den första fliken, {{ui:PartCraft}}, innehåller inställningarna som hör till den här appen; {{ui:Allmänt}} innehåller de som alla CadCraft-appar delar (tema, verktygsfält, paneler). PartCraft-inställningarna finns bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem. {{ui:Återställ PartCraft-inställningar}} återställer allt till startläget.

## Vrida vyn

- **Vänster knapp** (startläget): dra med vänster knapp för att vrida delen; dra med höger eller mittenknappen för att panorera.
- **Mittenknapp**: tryck på hjulet och dra för att vrida delen; håll {{key:Shift}} (eller {{key:Ctrl}}, eller ⌘) med mittenknappen, eller dra med höger knapp, för att panorera. Vänster knapp väljer bara ytor, kanter och plan, så ett klick som rör sig lite vrider aldrig delen. Många CAD-program fungerar på det sättet.

Hjulet zoomar mot pekaren i båda fallen. I en skiss panorerar höger och mittenknapp som tidigare.

## Rullning: musens hjul eller styrplatta

- **Låt programmet avgöra** (startläget): PartCraft följer rullningen. Sidledes eller finkornig rullning, som en styrplatta skickar, vrider delen; hela hjulsteg zoomar.
- **Musens hjul**: rullning zoomar alltid mot pekaren.
- **Styrplatta**: svep med två fingrar för att vrida delen, håll {{key:Shift}} och svep för att panorera, nyp för att zooma. I en skiss panorerar ett tvåfingersvep skissen.

En nypning zoomar i alla val. Om "Låt programmet avgöra" gissar fel för din mus eller styrplatta, välj den du har. Mer i [Styrplatta, touch och små skärmar](topic:trackpad-and-touch).

## Skissa: lägg till relationer medan du ritar

**Lägg till relationer medan du ritar** (på från start): ett klick som fångar en punkt gör den nya punkten sammanfallande med den, ett klick på en kurva lägger punkten på kurvan, och en linje som ritas nästan vågrät eller lodrät blir vågrät eller lodrät. Se [Relationer och mått](topic:relations-dimensions).

Stäng av den när du vill placera geometri nära annan geometri utan att binda den till den. Pekaren fångar fortfarande punkter och kurvor, men inget kopplas: linjer som ritas i en kedja delar inte sina ändar, så ett drag kan dra isär dem. Lägg till de relationer du vill ha själv från högerpanelen. En sluten profil extruderas fortfarande när dess ändar möts.

:::note
Inställningen ändrar bara vad ny ritning lägger till. Relationer som redan finns i en skiss står kvar, och verktyget Avrunda skapar fortfarande sin tangentbåge och radie.
:::

## Skissa: ange mått medan du ritar

**Ange mått medan du ritar** (på från start): medan en linje, rektangel, cirkel eller båge ritas fyller du i ett tal i rutan för storleken bredvid pekaren ({{key:Tab}} går till nästa ruta), och {{key:Enter}} ritar formen i den storleken, med ett styrande mått för varje storlek du skrev. Av: att skriva ett tal medan du ritar gör ingenting, och former ritas bara med klick. Se [Skriv in storleken medan du ritar](topic:sketch-basics#type-the-size-as-you-draw).

## Hörnindikator

Det som visas i hörnet på 3D-vyn: **ViewCube** (startläget; uppe till höger — klicka på en yta, kant eller hörn för att titta därifrån, dra den för att kretsa, dra dess kompassring för att vrida modellen), **Axelikon** (en liten X-, Y-, Z-markör nere till vänster som vrids med vyn: X röd, Y grön, Z blå) eller **Ingen**. Ingen av dem visas när du skissar eller på ritningsbladet. Se [ViewCube](topic:view-cube).

## Lösartrådar

Hur många trådar simuleringslösarna får använda. **Automatiskt** (startläget) tar en färre än datorns logiska processorer (högst 16), så att sidan förblir responsiv medan en studie löser; eller välj ett tal. Stora voxelstudier, knäckning, spänning över tid och flöde löses snabbare på flera trådar (ungefär 2× på 4 trådar för 80 000 kuber i våra tider, mer på en ledig dator). Modeller under cirka 20 000 obekanta stannar på en tråd, eftersom att starta trådarna kostar mer än de sparar. En flertrådad lösning ger samma svar som en tråd (upp till avrundning: summorna adderas i en annan ordning). Varje studies resultat listar **N trådar** eller **1 tråd** med skälet under **Lösare**.

Trådar kräver att sidan är **korsursprungsisolerad** (webbläsaren låter arbetare dela minne först då). Labbsidan är det; där den inte är det säger inställningen det ("Den här sidan är inte korsursprungsisolerad, så lösare körs på en tråd oavsett vad som väljs här.") och varje lösning använder en tråd. Allt annat fungerar på samma sätt, och svaren är desamma.

Laminära flödesstudier använder trådarna också (ungefär 2,5× på 4 trådar för 54 000 vätskeceller, samma svar till sista siffran). Lösaren för kvadratiska tetraedrar och värmeöverföring körs på en tråd: att trådas där mättes långsammare på vår testdator (deras lösare begränsas av minneshastighet och av ett steg som inte kan delas).

### På din egen webbserver

Om du kör PartCraft från din egen server fungerar det som det serveras. För lösartrådarna, låt servern skicka två rubriker med PartCraft-sidan:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

På Apache, i mappens `.htaccess` (kräver mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

På nginx, i `location` som serverar PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ladda om sidan: Inställningar › Lösartrådar erbjuder då **Automatiskt** med datorns antal. Den andra rubriken gör att webbläsaren vägrar allt som sidan laddar från en annan webbplats som inte tillåter det, vilket är helt i sin ordning för PartCraft på egen hand (den laddar allt från sin egen mapp).
