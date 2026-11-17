---
title: Skicka en ritning till en laser
summary: Välj vad varje lager gör (skär, repa, gravera, fyll, bild), förhandsgranska huvudets rörelser, spara GRBL-laserläge G-kod, eller skicka den från webbläsaren efter att du ramat in jobbet.
keywords: laser, laserskärare, lasergravör, GRBL, G-kod, gravera, fyll, dithering, bildgravering, repa, skär, Web Serial, Linux, rama in jobbet, effekt, hastighet, pass
from: 327b3c46
---

Panelen {{ui:Laser}} gör om lagren i en ritning till ett program för en laser som kör GRBL (de flesta hobby- och småverkstadsstyrningar för diod- och CO2-lasrar). I PartCraft väljer du {{ui:Exportera}} › {{ui:Laserprogram…}}, och sedan {{ui:Lägg till konturer från en DXF…}}: konturerna och hålen kommer in på lagret CUT. Platta mönster för plåtdelar (med sina böjlinjer på lagret BEND) kräver den exakta kärnan, som den här versionen inte har. Inställningarna sparas i del- eller sammanställningsfilen.

:::warning
Testa varje inställning på skrot först, använd skyddsglasögon som passar din laser, håll locket stängt där det finns ett, och lämna aldrig en igångkörd laser utan tillsyn. Värdena som ett lager börjar med är platshållare, inte rekommendationer för något material.
:::

## Välj vad varje lager gör

Varje lager i ritningen är en rad. {{ui:Gör}} sätter den till **Skär**, **Repa**, **Gravera linjer**, **Fyll former**, **Gravera bild** eller **Skickas inte**, med en {{ui:Effekt %}}, en {{ui:Hastighet mm/min}} och ett antal {{ui:Pass}}.

- **Fyll** bränner insidan av slutna former i linjer, {{ui:Linjeavstånd}} från varandra, i en {{ui:Vinkel}}, åt båda håll eller ett, med överkörning så att huvudet har fart när lasern tänds; korsfyllning lägger till ett andra pass vid 90°. En form med ett hål förblir öppen vid hålet.
- **Gravera bild** gör om en bild till prickar (Floyd–Steinberg, Atkinson, ordnad, eller ren svartvit vid en tröskel) eller, med *Gråskalor*, till varierande effekt.
- Ordning: bilder och fyllningar först, sedan linjegravering, sedan repor, sedan skärningar, så att en utskuren del inte flyttar sig medan den graveras. Inom ett lager går banorna **inifrån-först** (ett hål före plattan det sitter i), och alltid till närmaste nästa.

## Förhandsgranska, spara sedan

Förhandsgranskningen visar vad huvudet gör: brännande linjer i färg, snabba rörelser i grått, och en grön ruta runt allt som bränns. Under den visas storleken, brännlängden och en tidsuppskattning (utan acceleration; en riktig maskin tar längre tid). {{ui:Spara G-kod…}} skriver GRBL-laserläge G-kod: `$32=1`, `M4` (eller `M3`) med S-värden, `G0` och `G1`-rörelser, `M5` i slutet. X0 Y0 är jobbets nedre vänstra hörn om du inte väljer ritningens origo: ställ maskinens arbetsnollpunkt dit. G-koden följer GRBL:s dokumenterade laserläge; den har ännu inte prövats på en riktig laser.

## Skicka från webbläsaren

I Chrome och Edge frågar {{ui:Anslut…}} efter laserns USB-port. Ingenting ansluter eller skickas förrän du trycker på en knapp. Tryck först på {{ui:Rama in jobbet}}: huvudet följer jobbets ram med lasern **av** (eller på den låga effekt du ställt in för en pekare) så att du ser var den kommer att bränna. Först då blir {{ui:Skicka jobb}} aktiv, och den stängs av igen om du ändrar något. {{ui:Pausa}} håller huvudet, {{ui:Stopp}} stoppar det, återställer styrenheten (lasern släcks) och skickar `M5`. Där Web Serial saknas (Firefox, Safari och CadCraft Studio, vars webbvy ännu saknar det) sparar du G-koden och skickar den med din lasers egna program.

## Inte byggt ännu

Andra styrenheters format (Ruida, Marlin-lasrar, leverantörsfiler), flikar och inledningar, kerf-förskjutning, materialbibliotek, rotations- och Z-axlar, kamerajustering.
