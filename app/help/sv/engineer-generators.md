---
title: Delar från fysik: generatorer
summary: Arbetsytan Engineer och funktionen Genererad kropp: välj en generator, ange dess indata (flöde, tryck, temperaturer, material, skrivare) och få en del dimensionerad med lärobokformler, med dess datablad, dess tillverkningskontroller och filer för analysverktyg. Samma indata ger alltid samma del.
keywords: engineer, generator, genererad kropp, fysik, regler, värmeväxlare, grenrör, munstycke, gitter, gyroid, datablad, indata, deterministisk, samma indata samma del, tillverkningskontroller, 3D-utskrift, pulverbädd
from: 5a387dc0
---

En **generator** är ett skript som dimensionerar en del efter dina krav och bygger den. En generator för värmeväxlare tar den värme som ska flyttas, de två flödena och deras temperaturer, trycket och materialet; den räknar ut hur stor kärnan måste vara och hur tjock dess vägg ska vara, bygger den och berättar vilka tal den använde och varifrån varje tal kommer. Ändrar du en indata följer delen med.

Resultatet är en vanlig kropp i delen: den finns i funktionslistan, den skrivs ut, den exporteras. Generatorn själv sparas också i delen, så en fil öppnas på vilken dator som helst utan att generatorn är installerad, och **att öppna en del kör aldrig ett skript**.

## Skapa en kropp

1. Välj arbetsytan {{ui:Engineer}} i växlaren.
2. Välj en generator i listan (de som följer med PartCraft, sedan de du öppnat från en fil) och klicka på {{ui:Ny}}.
3. Skriptet körs. När det är klart visas kroppen i vyn och panelen visar dess indata, dess **datablad** och dess **kontroller**.

Du kan också lägga till en från Design: {{ui:Funktioner}} › {{ui:Mer}} › {{ui:Genererad kropp}}.

## Ändra den

Ändrar du en indata görs kroppen om strax efter att du slutat skriva. Panelen säger vilket av tre som gäller:

- **Uppdaterad**: kroppen stämmer med skriptet och dess indata.
- **Indata har ändrats**: kroppen i delen är från de tidigare indata; den görs om nu, eller tryck {{ui:Kör}}.
- **Ännu inte körd** eller **Senaste körningen misslyckades**: ett skriptfel visas med sin rad.

{{ui:Stopp}} avslutar en körning som tar för lång tid. Ångra går tillbaka ett steg i taget: en körning är ett steg, en indata är ett steg.

## Databladet

Varje tal som generatorn räknat ut listas med sin **enhet** och **varifrån det kommer** (en lärobokformel, en standard, ett datablad). Inget är en dold konstant. Bladet är en del av filen, så det är detsamma på nästa dator. [Dataexport](topic:data-out) beskriver hur du sparar det som JSON eller PDF.

## Kontrollerna

En generator kan kontrollera sin egen del mot en utskriftsprocess: väggar och glapp tunnare än processen klarar, lösa delar, håligheter som fångar pulver eller harts, hål för smala för att rensas, och överhäng som behöver stöd. Resultaten finns i panelen och i listan {{ui:Problem}} (⚠-knappen), och de sparas med delen.

Processvärdena är de runda tal som offentliga designguider ger för processen i allmänhet (FDM, SLA, SLS, metallpulverbädd). De är **inte din maskins specifikation**: ersätt dem med din verkstads värden innan du litar på en kontroll. Kontrollen arbetar på ett rutnät av voxlar, så den är exakt inom ungefär en voxel: en vägg rapporteras bara när den är tunnare än gränsen med mer än en voxel.

## Det som följer med

| Generator | Vad den gör |
|---|---|
| Gyroidblock | Ett block fyllt med en gyroid-, Schwarz P- eller diamantyta: det enklaste gitteret |
| Gyroidvärmeväxlare | Kärnan i en växlare för två vätskor, dimensionerad efter effekten med metoden effektivitet-NTU, väggen efter trycket; kan kontrollera tryckfallet med en flödesstudie på en cell |
| Fördelningsgrenrör | Ett huvudrör och grenar, varje rör dimensionerat efter flödet det för |
| Graderad gitterbalk | Ett gitter vars vägg blir tjockare där en topologioptimering visar att material behövs |

Alla är första uppskattningar byggda på lärobokformler. [Ingenjörsbiblioteket](topic:engineering-library) listar formlerna och deras begränsningar. Kör Simulering, Termisk eller Flöde på resultatet innan du litar på det.

## Exportkontroller

Engineers generatorer och datablad bär ett meddelande om exportkontroller och sanktioner. Läs det i [Engineer och exportkontroll](topic:engineer-export-notice); det finns också längst ned på varje datablad.

## Finns inte ännu

- Anslutningar, portar och kopplingar på värmeväxlarens kärna: det är enbart kärnan.
- Temperaturkurvor för materialhållfasthet: materialen är vid rumstemperatur.
- Förluster i T-stycken och fördelning av flödet mellan utloppen i grenröret.
- Att lägga till generatorer från tilläggskatalogen med ett klick; när du öppnar en fil läggs en till i den här webbläsaren.
- Generatorer för de andra apparna.
