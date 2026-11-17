---
title: Extrudera en upphöjning och skär igenom den
summary: Gör en solid av en skiss med Extrudera, ställ in blinda, mittplan, upp till eller dubbelriktade djup, en avsmalning eller en kontur av skissen, skissa sedan på en yta och Klipp ut en ficka eller ett genomgående spår.
keywords: extrudera, upphöjning, extruderad upphöjning, klipp ut, extruderat urtag, ficka, genom alla, blind, mittplan, vänd, djup, klipp-extrudera, upphöjning-extrudera, pad, upp till yta, upp till nästa, upp till hörn, förskjutning från yta, riktning 2, två riktningar, släppvinkel vid extrudering, avsmalning, kontur, område, valda konturer
from: 3b13ff10
---

{{ui:Extrude}} pressar en skiss slutna profil rakt ut ur sitt plan för att skapa material. {{ui:Cut}} gör detsamma men tar bort material. Båda är samma funktion under ytan; du kan byta den ena till den andra senare.

## Extrudera en upphöjning

1. Rita en sluten profil och stäng skissen (se [Rita din första skiss](topic:sketch-basics)). Den förblir markerad.
2. Välj {{ui:Extrude}}.

En solid på 10 mm visas, "Extrude1" läggs till i historiken med sin skiss indragen under sig, och statusfältet visar "Extrude1 tillagd. Ändra dess värden till höger."

**Vilken skiss som används:** skissen du just stängde, eller skissen som är markerad i historiken. Om inget är markerat tar PartCraft den senaste skissen som ingen funktion använder ännu. Om det inte finns någon: "Gör en skiss först: välj ett plan, Skiss, rita en sluten profil, Avsluta."

### Ställ in djup och riktning

I högra panelen:

| Inställning | Val | Standard |
|---|---|---|
| **Åtgärd** | Upphöjning (lägg till material), Klipp ut (ta bort material), Skärning (behåll överlappet), Ny kropp (finns inte ännu i den här versionen: den kräver en exakt kärna) | Upphöjning |
| **Slut** | Blind (ett djup), Mittplan (åt båda hållen), Genom alla, Upp till yta eller plan, Upp till nästa yta, Upp till hörn, Förskjutning från yta | Blind (ett djup) |
| **Djup (mm)** | Valfri storlek över noll (visas för Blind och Mittplan) | 10 |
| **Vänd riktning** | Växer åt andra sidan av skissplanet (visas inte för Mittplan) | Av |

Skriv ett tal och tryck på {{key:Enter}} eller {{key:Tab}}: delen byggs om direkt. **Mittplan** lägger halva djupet på varje sida om skissen.

### Upp till en yta, nästa yta eller ett hörn

Finns inte ännu i den här versionen: varje "upp till"-slut kräver en exakt kärna, och funktionen säger "Extrudering upp till en yta, nästa yta eller ett hörn: finns inte ännu (den kräver en exakt kärna)." Använd ett blindt djup som du mäter. Med en exakt kärna fungerar slutet så här:

- **Upp till yta eller plan**: **Upp till** tar en plan yta (Välj, klicka sedan på den) eller ett referensplan. En yta parallell med skissen ger ett exakt djup; en sned yta skär slutet längs lutningen. Om ytan ligger bakom skissen: "… Prova Vänd riktning."
- **Upp till nästa yta**: stannar vid den första plana ytan på kroppen som extruderingen möter (krökta ytor stöds inte här, och det säger funktionen).
- **Upp till hörn**: stannar i nivå med ett hörn (klicka nära änden på en kant) eller en punktfunktion.
- **Förskjutning från yta**: som Upp till yta, men stannar **Förskjutning (mm)** före den (mätt vinkelrätt mot ytan).

### Två riktningar, avsmalning, en kontur

- **Andra riktningen** (Blind): extruderar också **Andra djupet (mm)** åt andra sidan av skissen.
- **Avsmalning (°)**: sidorna lutar inåt när de går (negativt: utåt), som en släppvinkel; endast en riktning. Finns inte ännu i den här versionen (den kräver en exakt kärna): lämna den på 0.
- **Områden**: **Välj områden**, klicka sedan inuti de slingor du vill extrudera; endast de områdena används (en cirkel inuti en kvadrat: klicka inuti cirkeln för en cylinder, mellan dem för en platta med ett hål). **Alla** går tillbaka till varje slinga.

Under dessa visar **Skissmått** skissens drivande mått, så att du kan ändra profilens storlekar utan att öppna skissen.

:::note
**Genom alla är endast för urtag.** En upphöjning inställd på Genom alla misslyckas med "Genom alla är för urtag. Använd ett djup för en upphöjning." Om du byter en funktion från Klipp ut tillbaka till Upphöjning ändras Genom alla till Blind åt dig.
:::

## Klipp ut en ficka

1. Klicka på den plana yta du vill skära in i. Den markeras, och högra panelen visar **Yta**.
2. Välj {{ui:Skiss på denna yta}} (eller {{ui:Skiss}} i verktygsfältet).
3. Rita fickans kontur, till exempel en rektangel, och sätt mått på den.
4. Välj {{ui:Avsluta}}.
5. Välj {{ui:Klipp ut}}. Den börjar som **Genom alla**: den tar bort material rakt igenom delen.
6. För en ficka, ställ in **Slut** till **Blind (ett djup)** och skriv in **Djup (mm)**.

Ett urtag går in i materialet, bort från ytan du skissade på. Om statusfältet säger "Det finns inget att skära på den sidan av skissen. Prova den andra riktningen.", markera **Vänd riktning**.

En skiss på fickans botten följer botten: ändrar du fickans djup flyttar sig skissen med.

## Dra eller tryck en hel yta

För att få en yta att sticka ut längre eller sjunka in behöver du inte rita dess kontur. Klicka på den plana ytan och använd sedan i högra panelen:

- {{ui:Extrudera från den}} drar ut ytan: PartCraft lägger till en skiss på ytan med dess kontur (hål i ytan förblir hål) och en Extrudering på 10 mm.
- {{ui:Skär in i den}} trycker in ytan: samma skiss och ett Klipp ut halvvägs in i delen.

Båda är ett steg: {{key:Mod+Z}} tar bort skissen och funktionen tillsammans. Den nya funktionen är markerad, så skriv ett tal direkt och tryck på {{key:Enter}} för dess djup. Konturen kopieras som fasta linjer och bågar: den följer inte senare ändringar av ytan. Om en del av konturen inte kan kopieras (en fri kurva) öppnas skissen i stället med det som gick att kopiera. Slutför den, välj sedan {{ui:Avsluta}} och {{ui:Extrude}} eller {{ui:Cut}}.

## Profiler med öar

En skiss kan innehålla flera slutna slingor. Slingor bredvid varandra blir separata upphöjningar (eller urtag); en slinga inuti en annan blir ett hål genom upphöjningen. Till exempel extruderas en rektangel med två cirklar inuti som en platta med två hål.

För att använda bara vissa slingor, välj dem med **Områden** (ovan); en annan funktion kan använda de övriga slingorna i samma skiss.

## Redigera senare

- Klicka på "Extrude1" i historiken för att hämta tillbaka dess inställningar.
- Dubbelklicka på dess skiss (indragen under den) för att öppna skissen; stäng den för att bygga om.
- Se [Ändra en del via dess historik](topic:edit-history) för att undertrycka, rulla tillbaka, ordna om och ta bort.

## Vanliga meddelanden

| Meddelande | Vad du gör |
|---|---|
| "Skissen har ingen sluten profil att extrudera." | Skissen har ingen sluten slinga av heldragna linjer. Stäng luckorna, eller växla tillbaka konstruktionslinjer med {{key:Q}} |
| "Profilen är öppen: en ände vid (x, y) är inte ansluten till något." | Öppna skissen och anslut den änden till nästa linje |
| "Det finns inget att skära ännu." | Ett urtag behöver en solid att skära i. Gör först en upphöjning |
| "Inget av delen finns kvar efter detta." | Urtaget tog bort allt. Kontrollera dess storlek och riktning |

Mer i [Felsökning](topic:troubleshooting).
