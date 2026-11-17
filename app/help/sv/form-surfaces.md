---
title: Fria former med Form och ytfunktioner
summary: Tryck och dra i ett jämnt kontrollnät i arbetsytan Form, gör skarpa kanter, använd symmetri, kontrollera och färdigställ till en exakt solid eller ytmodell, och lappa, lofta, sy ihop, förtjocka, förskjut, förläng och trimma ytor i Konstruktion. Vad som är exakt och vad som approximeras.
keywords: form, fri form, t-spline, underdelning, catmull-clark, kontrollbur, quadball, skarp kant, symmetri, zebra, krökning, yta, lapp, fyll, loftad yta, sy ihop, förtjocka, förskjut yta, förläng, trimma
from: 0d326ef4
---

:::note
**Finns inte ännu i den här versionen.** Att färdigställa en form i delen, och ytfunktionerna, kräver en exakt geometrikärna, som den här versionen av PartCraft inte har: den bygger varje del med nätkärnan. [Vad som inte finns ännu](topic:not-built-yet) beskriver vad du ska göra i stället. Resten av sidan beskriver dem så som de fungerar med en exakt kärna.
:::

Arbetsytan **Form** skapar organiska former. Du redigerar en **kontrollbur**, ett grovt nät av hörn, kanter och ytor. Formen är den jämna yta som kontrollburen styr (dess Catmull–Clark-gränsyta), så att flytt av ett hörn böjer ytan mjukt runt det. När det ser rätt ut lägger **Ytbehandling** till den i delens historik som en *Form*-funktion, och den exakta kärnan gör den till verkliga B-spline-ytor. Du kan sedan runda av den, skära den, foga ihop den med andra funktioner och exportera den som STEP.

Välj **Form** i listan **Arbetsyta** till vänster i verktygsfältet.

## Starta en kontrollbur

1. Ställ in **Storlek** och **Underdelningar** i den högra panelen. Underdelningar är hur många ytor varje sida får.
2. Klicka på {{ui:Block}}, {{ui:Quadball}} eller {{ui:Plan}} i verktygsfältet. Panelen har också **Cylinder**, **Torus** och **Ytor med klick**.

- En **quadball** är en kontrollbur i låda anpassad så att dess hörnpunkter ligger på en sfär. Mellan dessa punkter ligger ytan en bit innanför sfären: cirka 0.4 % mindre volym vid 2 underdelningar.
- Ett **plan** är öppet, så det blir en ytmodell (se ”Ytfunktioner i Konstruktion” nedan).
- **Ytor med klick**: klicka på 4 punkter på det övre (mark)planet eller på kontrollburens hörn för att skapa en yta. Ytor som delar hörn sluts ihop. Tryck på {{key:Enter}} efter 3 punkter för en triangel, eller {{key:Esc}} för att avsluta.

Din ofärdiga kontrollbur sparas med delfilen, så du kan stänga filen och fortsätta senare.

## Välj och flytta

- Klicka på ett hörn, en kant eller en yta på kontrollburen. {{key:Shift}}+klick lägger till eller tar bort objekt. {{key:Esc}} rensar markeringen.
- En gizmo visas mitt i markeringen. Dra en pil för att flytta längs den, eller en kvadrat för att flytta i det planet. Tryck på {{key:W}} för att flytta, {{key:E}} för att rotera och {{key:R}} för att skala, eller använd knapparna i panelen. {{ui:Gizmo}} i verktygsfältet går igenom dem.
- **Mjuk avtagning** (mm) drar också hörnen inom det avståndet och tonar jämnt bort till noll vid gränsen för avståndet.
- Varje dragning är ett ångra-steg: {{key:Ctrl+Z}} och {{key:Ctrl+Y}} fungerar som vanligt.

## Ändra kontrollburen

Knapparna **Ändra** i panelen verkar på markeringen:

| Knapp | Vad den gör |
|---|---|
| {{ui:Extrude}} | Valda ytor flyttas ut med **Extruderingsavstånd**, längs sina normaler, med nya sidoytor. Valda öppna kanter växer nya ytor utåt. |
| {{ui:Kantslinga}} / Infoga kantslinga | Delar ringen av fyrsidiga ytor som korsar den valda kanten, halvvägs längs den. Fler slingor ger snävare kurvor. |
| Infoga punkt | Lägger till ett hörn mitt på den valda kanten. |
| Underdela | Delar varje vald yta i fyrsidiga ytor runt dess mitt. |
| Bro | Förbinder två valda ytor, eller två öppningar (välj en öppen kant på vardera), med ett rör av ytor. Båda behöver lika många kanter. |
| Fyll hål | Stänger öppningen genom den valda öppna kanten med en yta. |
| Svetsa | Slår ihop de valda hörnen till ett, mitt emellan dem. |
| Platta till | Flyttar de valda hörnen till det plan som passar dem bäst. |
| Ta bort | Tar bort de valda ytorna, kanterna (två ytor slås ihop) eller hörnen. |

## Skarpa kanter, symmetri och visning

- {{ui:Skarp kant}} gör de valda kanterna skarpa. **Viktning för skarp kant** 10 är helt skarp. En lägre vikt förblir skarp under så många förfiningssteg och mjuknar sedan, vilket ger en tät rundning i stället för en hård veck. **Ta bort skarp kant** gör dem jämna igen. **Skarpt hörn** fäster ett hörn så att ytan passerar genom det med en punkt.
- **Symmetri** speglar kontrollburen över X, Y eller Z = 0. Den behåller den positiva sidan, speglar den och sammanfogar de två halvorna. Därefter sker en redigering på endera sidan på båda. Hörn på spegelplanet ligger kvar på det.
- {{ui:Visning}} växlar mellan **Jämn** (ytan funktionen blir) och **Block** (kontrollburens ytor själva).
- **Analys**: **Zebrarandiga** speglar ett randigt ljus från den aktuella vyn. De böjs jämnt över en jämn yta och bryts vid en skarp kant. **Medelkrökning** färgar konvexa områden röda, konkava områden blå och plana områden vita. Den mäts på det visade nätet med cotangensformeln, så det är en vägledning, inte en mätning.

## Kontrollera och färdigställ

- **Kontrollera exakt** konverterar kontrollburen i den exakta kärnan utan att ändra din del. Den rapporterar hur många B-spline-lappar kontrollburen gör, hur många som är exakta, och om resultatet är en sluten, giltig solid och dess volym.
- {{ui:Ytbehandling}} lägger till en *Form*-funktion i historiken, eller uppdaterar formen du redigerade, och tar dig tillbaka till Konstruktion. En sluten kontrollbur blir en solid. Dess **Åtgärd** i Konstruktionspanelen kan vara Ny kropp, Foga samman, Skär eller Skärning. En öppen kontrollbur blir en ytmodell.
- För att ändra en form senare, markera den i historiken och klicka på **Redigera i Form**. Den byggda kroppen döljs medan du redigerar dess kontrollbur.
- **Kassera** kastar bort kontrollburen utan att röra historiken.

## Vad som är exakt och vad som approximeras

Varje fyrsidig yta på kontrollburen blir, förfinad vid behov, en bikubisk B-spline-lapp.

- Där varje hörn på en yta är *regelbundet* (fyra kanter möts inne i ytan, eller tre på en öppen kant eller längs en skarp kant), är lappen **exakt** underdelningsytan. Testerna kontrollerar detta till 1e-9 mm.
- Runt en **extraordinär punkt** (tre, fem eller fler kanter som möts, ett hörn på en tre- eller femsidig yta, eller änden på en skarp kant) finns ingen exakt polynomlapp. Där tar lappen den exakta punkten och tangentplanet vid hörnet och grannarnas kantkurvor, så lapparna möts fortfarande utan glapp. Tangentkontinuiteten över kanterna som möts i punkten är approximativ. Formpanelen och funktionspanelen anger den största vinkeln, vanligtvis under 2°. En högre **Nivå** i funktionspanelen gör dessa lappar mindre och tätare.
- Skarpa kanter är riktiga kanter på solidet, så du kan runda av dem.
- Varje lapp är en egen yta, så en form har många ytor och linjer ritas mellan dem.

## Ytfunktioner i Konstruktion

Ytkommandona finns i Konstruktions {{ui:Mer}}-meny, under funktionerna. De kräver den exakta kärnan. Ytmodeller ritas genomskinliga i blått. De är inte en del av solidet förrän du förtjockar eller syr ihop dem.

| Kommando | Vad den gör |
|---|---|
| Lapp | Fyller en sluten slinga av kanter. {{key:Shift}}+klicka först på solidets kanter, eller markera en ytmodell för att fylla dess öppning. **Tangent (G1)** får lappen att mötas med den ytan jämnt. |
| Loftad yta | En yta genom en kedja av kurvor per skiss (öppen eller sluten), i historikordning. |
| Sy ihop | Syr ihop ytmodeller längs sina gemensamma kanter. Om de sluts blir resultatet en solid, med en Åtgärd som andra funktioner. |
| Förtjocka | Ger en ytmodell en tjocklek: längs sin normal, mot den, eller hälften åt vardera hållet. Resultatet är en solid. |
| Förskjut yta | En kopia av en ytmodell flyttad längs sina normaler. Originalet finns kvar. |
| Förläng yta | Låter en ytmodell med en yta växa förbi de kanter du väljer. |
| Trimma yta | Skär en ytmodell där en annan ytmodell, eller solidet, korsar den. Klicka på **Välj en punkt på biten** för att välja vilken bit du vill behålla, eller behåll allt annat. |

Sy ihop, Förtjocka, Förläng och Trimma förbrukar den ytmodell de startar från. Senare funktioner använder den nya.

Begränsningar i dag: former med flera separata slutna delar blir inte en solid; regelbundna områden slås inte ihop till större ytor; och se [Vad som inte finns ännu](topic:not-built-yet).
