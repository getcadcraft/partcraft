---
title: Simulera vätskeflöde (flödesstudie)
summary: Flöde genom kanalerna inne i en del eller runt den i en låda: inlopp, utlopp, luft, vatten eller egen vätska, sedan hastighet och tryck på ett rörligt skärplan, strömlinjer, ytryck, tryckfall, massbalans, luftmotstånd och lyft, med vad den laminära metoden kan och inte kan säga dig.
keywords: flöde, CFD, vätska, beräkningsströmningsdynamik, flödessimulering, luft, vatten, viskositet, densitet, Reynoldstal, laminärt, turbulent, tryckfall, tryckförlust, inlopp, utlopp, lock, propp, hastighet, volymflöde, liter per minut, statiskt tryck, strömlinjer, skärplan, sektionsplan, luftmotstånd, lyft, luftmotståndskoefficient, lyftkoefficient, frontarea, yttre flöde, inre flöde, rör, kanal, grenrör, munstycke, gitter-Boltzmann, residual, konvergens
from: 7dc75f29
---

En **Flöde**studie tar reda på hur en vätska rör sig genom kanalerna inne i din del (**inre**) eller runt den (**yttre**). Som standard är den **laminär, inkompressibel, isoterm och newtonsk**: jämn strömning av en vätska vars densitet och viskositet hålls konstanta, utan värme, turbulens eller tyngdkraft. En **experimentell** turbulent modell finns också, endast för kvalitativa mönster (se nedan). Den arbetar på de namngivna ytorna som nätkärnan ger delen (se [Nätkärnan](topic:solid-kernels)).

Välj **Simulering** i rutan **Arbetsyta**, tryck på **Ny studie** om det inte finns någon, och ställ in **Typ** på **Flöde (CFD)**. **Flödesmodell** är **Laminär** (standard) eller **Turbulent (Spalart–Allmaras, experimentell)**: se avsnittet **Turbulent flöde (experimentellt)** nedan. Studiens strukturella inställningar behålls, så du kan växla tillbaka. Flödesinställningarna sparas i delfilen och varje ändring kan ångras.

## Välj vätska och celler

- **Vätska**: luft eller vatten vid 20 °C, eller **Anpassad** med egen densitet (kg/m³) och dynamisk viskositet (Pa·s). Luft använder den ideala gaslagen och Sutherlands lag (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); vatten använder IAPWS-värdena (998.21 kg/m³, 1.0016 mPa·s).
- **Cellstorlek**: vätskeutrymmet fylls med lika stora kuber. Lämna tomt för en automatisk storlek; panelen visar nätet. Varje öppning och kanal bör vara **minst 8 till 10 celler över** för användbara värden; mindre celler är noggrannare men långsammare (dubbelt så fin ger cirka 16 gånger så mycket arbete).
- **Väggar**: **Interpolerad** följer krökta väggar mellan celler (standard); **Studsning** behandlar väggarna som kubernas trappsteg.

## Flöde inne i delen

Vätskeutrymmet måste vara slutet. Lägg till ett **Inlopp** och ett **Utlopp** i panelen och klicka sedan på deras ytor i vyn:

1. **Den plana ytan runt en öppning** — kanten vid ett rörs ände, en anslutningsyta. PartCraft täcker där öppningens hål med ett lock. Varje hål i den ytan hör till den öppningen, så när ett inlopp och ett utlopp öppnar sig på samma yta modellerar du i stället ett tunt lock över ett av dem.
2. **Lockets inneryta** — som i andra CAD-verktyg: modellera en tunn platta (en extrudering) över öppningen och välj dess yta som vidrör vätskan.

För ett inlopp ställer du in en **hastighet** (m/s, jämn över öppningen, in i delen) eller ett **volymflöde** (L/min). För ett utlopp ställer du in det **statiska trycket** (Pa, övertryck). Om en öppning lämnas öppen, eller en vägg är tunnare än en cell, ansluts insidan till utsidan och beräkningen stoppas med ”Inget slutet vätskeutrymme”.

## Flöde runt delen

Ställ in **Flöde** på **Yttre**, **Hastighet**, riktningen flödet går mot, och hur långt lådan når uppströms, nedströms och åt sidorna (tomt: 1, 3 och 1 gånger delens största mått). Lådans yta som flödet kommer in genom är ett inflöde, ytan det lämnar genom ett utflöde vid 0 Pa, och ytorna längs flödet är glidytor. En för liten låda pressar flödet förbi delen och ökar luftmotståndet. **Referensarea** är arean som luftmotstånds- och lyftkoefficienterna använder (tomt: delens frontarea sett längs flödet); lyftet mäts längs +Y om du inte väljer en annan riktning.

## Lös och läs resultaten

Tryck på **Lös**. Beräkningen körs i bakgrunden med antalet steg, residualen och en residualkurva; **Stopp** avslutar den. Den stannar när residualen (hur mycket hastighetsfältet fortfarande ändras per steg) är under målet och tryckfallet eller luftmotståndet har stabiliserats. Om den når stegsgränsen först visar panelen **Inte konvergerad** i rött: siffrorna är det sista tillståndet, inte ett stationärt svar.

- **Skärplan**: hastighet eller statiskt tryck på ett plan genom modellen; välj dess normal (X, Y eller Z) och dra reglaget för att flytta det. Peka på det för att läsa värdena.
- **Strömlinjer**: från inloppen (inre) eller från en rad över lådans inflödesända i skärplanet (yttre).
- **Del**: solid, genomskinlig (för att se planet inuti), ytryck eller dold.
- **Tabell**: Reynoldstal, tryckfall (medelvärdet av det statiska trycket vid inloppen minus vid utloppen), flödet och medeltrycket för varje öppning, kraften på delen, luftmotstånd och lyft med deras koefficienter och referensarea (yttre), massbalansen (inflöde mot utflöde), nätet och lösaren.

## Turbulent flöde (experimentellt)

**Flödesmodell › Turbulent (Spalart–Allmaras, experimentell)** löser det tidsmedlade turbulenta flödet (stationär RANS): Spalart–Allmaras-modellen ger en virvelviskositet i varje cell, och cellerna intill väggar använder Spaldings väggfunktion i stället för att lösa det tunna lagret där. Flödet är helt turbulent överallt (inga laminära områden, ingen övergång).

**Den klarade inte sina noggrannhetskontroller.** Panelen, resultaten och tabellen säger det i varje turbulent studie, och varningen kan inte stängas. Använd den för **kvalitativa flödesmönster** — där flödet separeras, cirkulerar eller accelererar — **inte för konstruktionsvärden**.

| Kontroll | Referens | Resultat |
|---|---|---|
| Friktion i plan kanal, första cell vid y⁺ 49 / 98 | Dean's correlation | +3.3 % / +4.7 % |
| Kanal med upplöst vägg (y⁺ ≈ 3), Re_τ 180: medelhastighet | Moser, Kim & Mansour DNS | −1 % |
| Plan kanal, y⁺ 7–15 eller 190–380 | Dean's correlation | +9 till +22 % |
| Rörfriktion genom kubcellerna, fullt utvecklad, 10–30 celler över | Colebrook | 30 till 34 % för högt |
| Återfästning bakom ett bakåtvänt steg, 6–14 celler per stegshöjd | Driver & Seegmiller, 6.26 stegshöjder | 21 till 39 % för kort |

Resultaten förbättras bara långsamt med finare celler. Efter beräkningen visar tabellen **första cellens y⁺** (min, medel och max över väggcellerna) och varnar utanför det kontrollerade intervallet 1 till 400; sikta på cirka 30 till 300. **Körtid:** de automatiska cellerna dimensioneras för högst några minuter på en processorkärna i en bärbar dator (panelen visar värsta fallet för nätet och stegsgränsen; ett litet rör stabiliseras på under 20 sekunder). Att halvera cellstorleken kostar cirka 16 gånger så lång tid. Krafterna på delen kommer från en rörelsemängdsbalans över öppningarna eller lådan.

**Arbetet hittills:** väggcellerna matchar nu sin egen skjuvspänning mot väggfunktionen, vilket förde rör- och stegfelen ned till siffrorna ovan utan att ändra resultaten för den plana kanalen. Det räckte inte för konstruktionsvärden. Nästa steg är finare celler nära väggarna.

## Vad den kan och inte kan berätta

- **Den laminära modellen** är bara laminär. I rör blir flödet turbulent över ett Reynoldstal på cirka 2,000 till 4,000; bakom trubbiga kroppar börjar vakan släppa virvlar över cirka 50. Panelen varnar vid dessa punkter. Ett laminärt resultat för turbulent flöde underskattar tryckfallet och ger fel luftmotstånd. Den experimentella turbulenta modellen (ovan) täcker turbulent flöde kvalitativt; dess siffror är ännu inte tillförlitliga.
- **Metod:** gitter-Boltzmann-metoden (D3Q19, kollision med två relaxationstider) körd till ett stationärt tillstånd. Den är något kompressibel inuti; PartCraft håller densitetsförändringarna till några procent. Om flödet är för snabbt för cellerna vägrar den starta och anger hur mycket mindre cellerna måste vara.
- **Kontrollerat mot:** Hagen–Poiseuille-flöde i ett rör genom en del (tryckgradient inom 1 % vid 20 celler över), den lockdrivna kaviteten hos Ghia et al. (inom 0.75 % av lockets hastighet) och Schäfer–Turek-cylinderreferensen (luftmotstånd inom 1 % vid 10 celler per diameter).
- Inte modellerat: värmeöverföring, turbulens med konstruktionsnoggrannhet (den turbulenta modellen är experimentell), fria ytor, kavitation, tyngdkraft, rörliga delar, icke-newtonska vätskor, skrovliga väggar. Labbversion: kontrollera viktiga resultat på annat sätt.
