---
title: Värme, termisk spänning och knäckning
summary: Ta reda på temperaturerna i en del från fasta temperaturer, värmeflöde, värmeeffekt, konvektion och strålning (stationärt eller över tid), belasta en spänningsstudie med en temperaturökning, och ta reda på lasten vid vilken en slank del knäcker, med vad varje metod kan och inte kan säga dig.
keywords: termisk, värmeöverföring, värme, temperatur, ledning, konvektion, värmeövergångstal, strålning, emissivitet, värmeflöde, värmeeffekt, värmealstring, kylfläns, transient, tid, kylning, uppvärmning, Crank-Nicolson, implicit Euler, värmebalans, termisk spänning, termisk spänning över tid, transient termisk spänning, släckning, termisk chock, spänningshistorik, värsta tid, termisk utvidgning, utvidgningskoefficient, knäckning, Eulerknäckning, lastfaktor, kritisk last, pelare, slank, egenvärde
from: 1a1b7545
---

Dessa studier finns i simuleringsarbetsytan bredvid statisk spänning och egenfrekvenser (se [Kontrollera spänning och nedböjning](topic:simulation)). Välj dem i panelens ruta **Typ**. De använder samma nät av små kuber och samma materiallista; varje bibliotecksmaterial har en värmeledningsförmåga, en specifik värmekapacitet och en utvidgningskoefficient (typiska handboksvärden, visade under **Egenskaper**).

## Termisk: vart tar värmen vägen?

1. Välj **Termisk (värmeöverföring)** som **Typ**.
2. Lägg till termiska villkor från panelens lista **Lägg till**, klicka sedan på deras ytor (som för stöd och laster):
   - **Fast temperatur**: ytan hålls vid en temperatur, i °C.
   - **Värmeflöde**: W/m² som flyter in i ytan (negativt flyter ut). Det verkar på ytans verkliga area, även där kuberna gör en trappstege.
   - **Värmeeffekt**: en total i watt, fördelad över de valda ytorna efter area. Använd den för en värmare eller ett chip med känd effekt.
   - **Konvektion**: luft eller vätska vid en temperatur bär bort värme med h W/(m²·K). Typiska h: stillastående luft 5–10, en fläkt 25–100, vatten 500–10,000. PartCraft beräknar inte h: det finns inget vätskeflöde i den här studien.
   - **Strålning**: ytan strålar mot omgivningen vid en temperatur, med en emissivitet från 0 till 1. Den är **linjäriserad** (strålningen skrivs som en koefficient som beror på temperaturen och löses om tills den stabiliseras) och går bara till omgivningen: ytor utbyter inte värme med varandra.
3. **Värmealstring** (W/m³) värmer hela delen inifrån, till exempel en resistiv del.
4. Tryck på **Lös**. Delen färgas efter temperatur; välj **Värmeflöde** i **Visa** för att se var värmen flyter. Peka på delen för att läsa båda.

Stationärt värmeflöde behöver något att leda värmen till: åtminstone en fast temperatur, konvektion eller strålning. En del som bara tar emot värme har inget stationärt tillstånd; gör den transient i stället.

Tabellen visar lägsta och högsta temperatur och var de finns, största värmeflödet och **värmebalansen**: värmen in i eller ut från varje villkor (en fast temperatur räknar vad den måste leverera eller ta emot), den alstrade värmen, summorna in och ut, och **obalansen**. Obalansen bör vara en liten bråkdel av värmen in; en stor betyder att resultatet inte kan litas på.

### Över tid (transient)

Bocka för **Transient** och ange en **Starttemperatur** (hela delen börjar där), ett **Tidsspann** och ett antal **Tidssteg**. **Implicit Euler** är robust; **Crank–Nicolson** är noggrannare för samma steg men kan rippla efter en plötslig ändring. Efter lösning, dra i reglaget **Tid** för att se temperaturerna vid varje ögonblick (färgskalan är densamma för varje ögonblick). Värmebalansen inkluderar då värmen som lagras.

## Termisk spänning: vad gör en temperaturändring med delen?

I en studie av **Statisk spänning** (eller **Knäckning**) anger du **Termisk last**:

- **Jämn temperaturändring**: hela delen värms (eller kyls, med ett negativt tal) med så många kelvin.
- **Temperaturer från termiska villkor**: lägg till termiska villkor i samma studie; de stationära temperaturerna löses först på samma nät, sedan expanderar delen med α·(T − den **spänningsfria temperaturen**).
- **Temperaturer över tid (transient körning)**: lägg till termiska villkor, ange sedan en **Starttemperatur**, ett **Tidsspann**, **Tidssteg** och **Tidsstegning** som för en transient termisk studie. Temperaturerna löses över tid på samma nät (kuber eller tetraedrar), och en statisk lösning på varje ögonblicks temperaturer ger det ögonblickets spänning. **Spänning vid**:
  - **Den värsta tiden** (starten): **Spänningslösningar** löser ögonblick jämnt fördelade över körningen, starten inräknad (21 om du inte ändrar det, högst 51). Resultaten öppnas vid ögonblicket med största von Mises-spänning; tabellen anger det, ett litet diagram visar topspänningen mot tiden, och reglaget **Tid** visar spänningen vid varje löst ögonblick (färgskalan är den för det värsta ögonblicket).
  - **En vald tid**: ett ögonblick, tidssteget närmast den **Tid (s)** du anger. En knäckningsstudie tar alltid en vald tid (slutet av körningen om du inte anger en).

En del som släcks (doppas från varm i kall) eller plötsligt värms är mest belastad medan insidan och ytan skiljer sig mest: ofta precis i början. En hållen temperatur verkar från första ögonblicket, som en plötslig ändring, så spänningen i allra första början beror på elementstorleken (bara några element ser ändringen). Läs det som "mycket hög", och titta på reglagets nästa ögonblick för värden som nätet kan upplösa. Spänningen är kvasistatisk: ingen tröghet, ingen vibration från den plötsliga ändringen.

En del som fritt kan växa har ingen termisk spänning: håll den precis så mycket att den inte rör sig (till exempel tre friktionsfria ytor i räta vinklar). Inklämd mellan två väggar pressas den: en stålstång som värms 50 K mellan stela väggar bär cirka 117 MPa. Termiska laster balanserar sig själva, så reaktionerna balanserar ändå bara de mekaniska lasterna.

## Knäckning: när ger en slank del vika sig?

1. Välj **Knäckning (linjär)** som **Typ**, och lägg till stöd och laster som för en statisk studie.
2. Ange **Lastfaktorer att hitta** (hur många knäckningsmoder).
3. Tryck på **Lös**. Varje mod har en **lastfaktor**: multipeln av dina laster vid vilken den ideala delen knäcker. En lastfaktor på 3 betyder tre gånger dina laster; **en lastfaktor under 1 betyder att den knäcker under lasterna du angav**. Tabellen anger också den totala lasten vid varje faktor. Modformen visar hur den knäcker (dess storlek betyder ingenting).

**Linjär knäckning överskattar den verkliga knäcklasten.** Den förutsätter en perfekt del: helt rak, utan restspänning och elastisk. Verkliga delar har små imperfektioner och kan flyta först, och tunnväggiga skal kan knäcka vid en bråkdel av det linjära värdet. Använd en generös marginal, och betrakta en lastfaktor nära eller under 3 för ett tunt skal som en varning.

## Hur mycket kan du lita på den?

PartCraft kontrollerar dessa lösare mot handformler: en stång mellan två temperaturer (exakt), en kylfläns (inom 0.3 K), en platta som värmer sig själv (exakt), en kub som kyls över tid (inom 0.1 % med Crank–Nicolson), en stång som plötsligt värms i ena änden, en fri stång som värms (ingen spänning, ΔL = αLΔT), en stång inklämd mellan väggar (σ = −EαΔT), en släckt platta över tid mot den klassiska serielösningen (inom 1 % på kuber, 2.1 % på tetraedrar i plattans mitt; 0.5 % vid ytan), en lång körnings sista ögonblick mot den stationära termiska spänningen (samma till en miljondel), och Eulerpelare (inom 1 % fast–fri, 1.5 % led–led). Tänk på följande:

- **Konstanta materialvärden.** Ledningsförmåga, specifik värmekapacitet och utvidgning ändras inte med temperaturen här; vid några hundra grader kan de ändras med 10–30 %. Styvheten ändras inte heller.
- **Spänning över tid är kvasistatisk och elastisk**: varje ögonblick är en statisk lösning (ingen tröghet), och ingen flytning, så en släckning som skulle få ytan att flyta visar i stället en spänning över flytgränsen.
- **Konvektionskoefficienter är din indata**, inte beräknade från ett luft- eller vattenflöde.
- **Ingen kontaktresistans**: delen är ett enda solid.
- **Endast linjär knäckning**: inga imperfektioner, ingen flytning, inget beteende efter knäckning.
- Kubtrappstegen och skarpa inre hörn påverkar termiska spänningar på samma sätt som andra spänningar (se [Kontrollera spänning och nedböjning](topic:simulation)).
- Detta är en labbversion: kontrollera delar som spelar roll på ett annat sätt.

## Relaterat

- [Kontrollera spänning och nedböjning (Simulering)](topic:simulation)
- [Vad som inte finns ännu](topic:not-built-yet)
