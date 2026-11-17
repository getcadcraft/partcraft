---
title: Kontrollera en sammanställning för kollisioner och rörelse
summary: Hitta delar som överlappar med Kollision, dra i ett leds värden för att se rörelsen, och svep ett led genom dess intervall för att hitta var delar kolliderar.
keywords: interferens, interferensdetektering, kollision, överlappning, gängpassning, gängdjupavvikelse, vidrörande ytor, dölj, filter, rörelse, rörelsestudie, svep, rörelseomfång, kontroll
from: 9c98db46
---

Två kontroller körs på delarna när de är placerade. **Kollision** letar efter överlappande material just nu, och **rörelsekontrollen** flyttar ett led genom dess intervall och letar efter överlapp längs vägen.

## Kontrollera interferens

1. Öppna eller bygg en sammanställning (se [Bygg en sammanställning](topic:build-assembly)).
2. Välj {{ui:Kollision}}.

Statusfältet redovisar resultatet:

- "Ingen interferens mellan 3 delar (… ms)." Inget överlappar.
- "Interferens: Flange1 och Flange2: Överlappning, 2.5 mm³." Varje par, vilken typ av resultat det är och volymen de delar.

Rutan **Sammanställning** till vänster visar **Interferens**: "Ingen", "2 resultat" (de som visas) eller "Inte kontrollerad". Med inget markerat listar den högra panelen varje resultat under **Interferens**.

Resultatet rensas när sammanställningen ändras. Kör {{ui:Kollision}} igen efter att du flyttat ett led. Varje par delar kontrolleras mot varje annat, så stora sammanställningar tar längre tid.

### Typer av resultat

| Typ | Betyder |
|---|---|
| **Överlappning** | Delarna delar volym: en verklig kollision. |
| **Gängdjupavvikelse** | Den delade volymen ligger inne i den ena delens gänga men bortom den andras: en bult gängad djupare än sitt hål, eller en slät skaft i ett gängat hål. |
| **Gängpassning (kosmetiska gängor)** | Den delade volymen ligger inne i båda delarnas gängor: en bult i ett gängat hål. Kosmetiska gängor ritas i gängans fulla storlek, så de överlappar alltid lite. |
| **Vidrörande ytor** | Ingen delad volym, men ytor i kontakt (inom 0.001 mm). |

Modellerade gängor (se [Gängor på axlar och borrningar, ritade eller modellerade](topic:threads)) är verklig geometri. Det de delar är en **Överlappning**.

### Dölj det du inte behöver se

Under **Interferens** har **Visa** en ruta för varje typ. Avmarkera **Gängpassning** och **Vidrörande ytor** för att bara se de kollisioner som spelar roll. **Dölj det här paret** bredvid ett resultat döljer det paret av delar oavsett typ. Dolda resultat räknas ("2 resultat dolda av dessa filter"), och **Visa de dolda paren igen** tar fram paren igen. Statusfältet räknar också dolda resultat.

Filtren sparas med sammanställningen, och varje ändring är ett steg i {{key:Mod+Z}}. **Svep ett led för kollisioner** (nedan) använder dem också. En sammanställning med filter sparas som version 4. Tidigare PartCraft-versioner vägrar öppna den i stället för att förlora filtren.

## Titta på rörelsen

1. Markera ett led som rör sig (alla utom stelt) i listan till vänster.
2. Dra reglaget under ett av dess värden, till exempel **Vinkel (°)** eller **Förskjutning (mm)**. Delen rör sig när du drar.
3. Släpp. Den nya positionen behålls och kan ångras med {{key:Mod+Z}}.

Du kan också skriva in en vinkel eller förskjutning i rutan och trycka på {{key:Enter}}.

Ett led på en sluten slinga (en länkage) flyttar hela slingan. Värdet du drar behålls och de andra lederna i slingan följer (se [Slutna slingor](topic:build-assembly#closed-loops-linkages)).

## Svep ett led för kollisioner

1. Markera ett led som rör sig.
2. För ett led med flera värden (cylindriskt, plant, kul, stift i spår) väljer du vilket som ska sveps under **Kontrollera rörelser**.
3. Välj {{ui:Kontrollera rörelsen med avseende på kollisioner}}.

PartCraft flyttar det värdet genom 25 lägen i 24 lika steg, och de andra står kvar: en vinkel från −180° till 180° (en lutning från −90° till 90°), en längd från minus till plus storleken på den största delen. Den rapporterar:

- "Ingen kollision alls för Vinkel (°) från -180 till 180 (25 lägen kontrollerade)."
- "6 av 25 lägen kolliderar, första vid Vinkel (°) 45 (12.4 mm³)." Det första läget som kolliderar, och överlappningen där.

Knappen är gråad för stela leder, som inte rör sig. Svepet kontrollerar bara lägena, inte vägen mellan dem. En tunn del kan passera genom en annan mellan två steg.

:::note
Kontakt och gravitation finns inte ännu. Utan gränser täcker svepet hela intervallet. Ge värdet **Gränser** (se [Delförteckning, sprängvyer och flytt av delar](topic:assembly-bom-explode)) så täcker svepet bara dem. Ett gångjärn som öppnas 90° kontrolleras då över 90°.
:::

## En rörelsestudie

**Sammanställning › Rörelse** driver ett leds värde från en start till ett slut över en tid du anger (konstant hastighet, mjuk, sinus eller ut och tillbaka). Den placerar sammanställningen vid varje steg med dess leder och slutna slingor, och redovisar vilka kollisioner som sker och hur nära delarna kommer. **Lägg till en punkt** följer mitten av en del eller en punkt du klickar på den. Kortet plottar dess position, hastighet, acceleration, ledets värde och spelet mot tiden. **Spara CSV** och **Spara diagram** skriver ut dem. Hastighet och acceleration räknas från de inspelade positionerna, så en skarp topp mellan steg blir låg. Använd fler steg.

Efter **Kör** flyttar balken **Stega genom körningen** sammanställningen till valfritt steg. Tiden, värdet och om delar kolliderar där visas bredvid den. Leden behåller sitt eget värde, och **Tillbaka till modellen** sätter tillbaka sammanställningen. Studiens inställningar sparas i sammanställningsfilen. Dess resultat görs om av **Kör**.

## En kontaktstudie

**Sammanställning › Kontakt** visar hur en sammanställning bär sina laster där delar trycker mot varandra. Varje del tar med sina egna stöd, laster och material från sin egen **Simulering**-studie (en fast yta på en del, en kraft på en annan). Här väljer du paren. **Lägg till ett par**, sedan **Välj sida A** och klicka på ytor på en del, och **Välj sida B** och klicka på ytor på en annan del. Ett klick på en vald yta tar bort den. Esc eller Klar avslutar valet. Ett par är **Friktionsfri** (delarna trycker men glider) eller **Bunden** (de sitter ihop). Styvhetsfaktorn anger hur hårt kontakten motstår att sjunka in. 20 är en rimlig start, 1000 för en styv stålstapel.

**Lös** kör lasten i steg och visar kontaktkraften, det djupaste insjunkandet, den största rörelsen och den största spänningen. En del utan par lämnas ut, och kortet säger det. Friktionsfri kontakt håller inte en del åt sidan. Ge varje del ett stöd i sin egen Simulering-studie, eller bind den, annars kanske stegen inte sätter sig. Paren och inställningarna sparas i sammanställningsfilen.

**Exportera CalculiX-indata** skriver samma modell som en CalculiX-indatafil (.inp). CalculiX är ett separat program som du installerar och kör själv. **Läs CalculiX-resultat (.frd)** läser sedan förskjutningarna tillbaka på den här sammanställningens nät och vägrar en fil gjord för ett annat nät. Lösaren här klarar plasticitet men inte explicit dynamik, och ingenting här är en certifierad analys. Låt en ingenjör kontrollera allt som spelar roll.
