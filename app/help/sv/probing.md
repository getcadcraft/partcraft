---
title: Probning: hitta delen och ställ in arbetsförskjutningen
summary: Tangera en överyta, en sida, ett hål eller en upphöjning med en mätsond och låt styrningen flytta arbetsförskjutningen till där delen verkligen står, eller bara mäta. Vad varje styrning kan göra och vad som inte är bevisat.
keywords: sond, probning, mätsond, touch probe, nollställning, arbetsförskjutning, G54, G31, G38.2, hoppa över, referens, hitta centrum, borrning, upphöjning, kant, nollställ, mät, besiktning, G10
from: 1f718b82
---

{{ui:Probe}} i Tillverkning skriver en probningscykel i programmet: sonden tangerar delen, och styrningen flyttar arbetsförskjutningen (G54) med skillnaden mellan där ytan hittades och där modellen säger att den finns. Senare operationer skär då där delen verkligen står.

**Inget här har körts på en maskin.** Rörelserna före en tangering är vanliga rörelser: sonden övervakas inte förrän själva probningsrörelsen. Kör den långsamt, i luften först, med handen på matningsstoppet.

## Så används den

1. På fliken **Verktyg** lägger den första probningsoperationen till en **mätsond**: dess kulas diameter och probningsmatningen (100 mm/min om du inte anger en).
2. Tryck {{ui:More}} i verktygsfältet i Tillverkning, sedan {{ui:Probe}}, och klicka på det du ska tangera. Varje val är en cykel, i den ordning du klickar:

| Val | Cykeln | Vad som sätts |
|---|---|---|
| En plan yta som tittar upp längs verktygsaxeln | En tangering nedåt | Z |
| En plan sidoyta vinkelrät mot X eller Y | En tangering mot ytan, en bit under dess överkant | X eller Y |
| Ett hål eller en upphöjning längs verktygsaxeln | Fyra tangeringar (+X, −X, +Y, −Y) | X och Y för dess centrum |

3. **Med resultatet**: {{ui:Set the work offset}} eller {{ui:Measure only}}.
4. **Starta detta långt bort** och **Sök så långt förbi** är hur långt från den förväntade ytan probningsrörelsen börjar, och hur långt utöver den sonden får gå innan styrningen ger upp. **Djup** är hur långt under överkanten av ett hål, en upphöjning eller en sidoyta kulan går.

Lägg probningsoperationen först, före allt som skär.

## Vad varje styrning skriver

| Styrning | Tangering | Resultat |
|---|---|---|
| Fanuc-liknande | `G31`, positionen sparad i `#101` till `#104` | Förskjutningsvariablerna (`#5221` till `#5223`) flyttas med hittat − förväntat. Endast mätning: skillnaden lämnas i `#110` (och `#111`). |
| LinuxCNC | `G38.2`, positionen sparad i namngivna parametrar | `G10 L2 P1` med den nya förskjutningen. Endast mätning: ett `(DEBUG, …)`-meddelande. |
| GRBL | `G38.2` | En tangering sätter axeln med `G10 L20 P1`. GRBL har inga variabler, så den **kan inte räkna ut ett centrum**: filen säger det i en kommentar och sätter ingenting. |

Beräkningen är postprocessorns, så du kan ändra den: händelserna är `probe-move` och `probe-set` ([Redigerbara postprocessorer](topic:post-processors)).

## Begränsningar

- En arbetsförskjutning (G54). Endast ytor som är vinkelräta mot axlarna: ingen vinkel, ingen hörncykel, ingen rotation av arbetet.
- Ingen verktygsmätare, ingen kontroll av brutet verktyg, ingen jämförelse av ett mått mot en tolerans, ingen rapport.
- Spindeln startas inte för en sond och kylvätskan förblir av; ingenting kontrollerar att verktyget i spindeln är en sond.
- Materialsimuleringen kör inte en probningsbana.
- Sondens egen kalibrering (kulförskjutning, styftets nedböjning, utlösningsriktning) är styrningens.
