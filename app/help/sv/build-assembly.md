---
title: Bygg en sammanställning med leder
summary: Starta en sammanställning från en del, lägg in kopior och andra delfiler, koppla dem med stela, vridbara, glid-, cylindriska, plana, kul- och stift-i-spår-leder på plana ytor, centrera leder på axlar, redigera en del på plats och spara sammanställningen.
keywords: sammanställning, passning, passningar, led, slinga, stängd slinga, länkage, fyrstångslänk, mekanism, stel, vridbar, glid, cylindrisk, plan, kula, sfärisk, stift i spår, infoga komponent, jordad, fast, koncentrisk, sammanfallande, redigera del, i kontext, partcraft-asm
from: a53bbfef
---

En sammanställning sätter ihop delar. I PartCraft placerar **leder** delarna: varje led sitter på en plan yta på var och en av två delar och lägger dem yta mot yta. Ett vridled låter en del vrida sig, ett glidled låter den glida, och ett stelt led håller den på plats.

## Starta en sammanställning

1. Bygg en del med en solid. En tom del kan inte läggas i en sammanställning: "Bygg en solid först och lägg sedan in den i en sammanställning."
2. Välj {{ui:Sammanställning}} i verktygsfältet.

Statusfältet säger "Sammanställning startad med Part1 som jordad del. Lägg in fler delar (Lägg till kopia, Infoga eller Redigera › Duplicera) och koppla sedan dem med Led." Den vänstra panelen listar nu **Delar** och **Leder**, och verktygsfältet visar sammanställningsverktygen. Skiss- och funktionsverktygen döljs.

Den första delen är **jordad**: den rör sig aldrig, och allt annat placeras i förhållande till den.

## Lägg in delar

- {{ui:Lägg till kopia}} lägger in ytterligare en kopia av den markerade delen (eller av den sista). Kopior delar en del: redigerar du den ändras varje kopia.
- {{ui:Duplicera}} ({{key:Mod+D}}) i gruppen Redigera gör detsamma för den markerade delen. {{key:Mod+C}} och {{key:Mod+V}} kopierar en del och klistrar in den bredvid de andra, i den här sammanställningen eller en annan. {{key:Mod+Shift+V}} klistrar in den på samma plats. Se [Kopiera, klistra in och duplicera](topic:copy-paste).
- {{ui:Infoga}} lägger in en del från en `.partcraft.json`-fil på datorn. Delen kopieras in i sammanställningen.

Nya delar visas 20 mm till höger om allt som redan finns, och stannar där tills ett led placerar dem. En del utan led kan också flyttas för hand: inmatade värden eller pilar du drar (se [Delförteckning, sprängvyer och flytt av delar](topic:assembly-bom-explode)).

## Koppla två delar

1. Välj {{ui:Led}} eller tryck på {{key:J}}. Den högra panelen säger **Nytt led**.
2. Klicka på en plan yta på den första delen. Den markeras.
3. Klicka på en plan yta på den andra delen.

Den andra delen hoppar så att dess yta ligger mot den första delens yta, vänd mot den. Ledet visas under **Leder**, till exempel "Revolute1", och den högra panelen visar dess inställningar.

- Om båda ytorna skapades av revolveringar startar ledet som **vridbart**. Annars blir det **stelt**. Ändra det efteråt.
- Krökta ytor kan inte väljas: "Den ytan är krökt. Välj en plan yta (för att vrida kring ett hål eller en revolveringsaxel väljer du den i ledet efteråt)."
- {{key:Esc}} avbryter ett led du har påbörjat (eller klicka på en del i listan till vänster).

### Ledinställningar

| Inställning | Vad den gör |
|---|---|
| **Typ** | En av leden i tabellen nedan |
| **Vinkel (°)** | Vrider den andra delen kring ledets axel (vinkelrät mot ytorna) |
| **Förskjutning (mm)** | Flyttar den andra delen längs axeln, bort från ytan (negativa värden trycker in i den) |
| **Längs X**, **Längs Y**, **Luta kring X**, **Luta kring Y**, **Längs spåret**, **Spårriktning** | De övriga värdena, visas för de leder som använder dem |
| **Centrera på** (för varje sida) | Var ledets axel korsar ytan: "The face's own origin" (ytans egen origo), axeln för en revolvering ("Axis of Revolve1") eller ett hålets axel ("Hole1, hål 2") |

Varje värde som ett led låter röra sig har ett dragreglage under sin ruta. De övriga ställs in en gång.

| Led | Vad som rör sig | Ställs in en gång |
|---|---|---|
| **Stelt** | ingenting | Vinkel, Förskjutning |
| **Vridbart** | Vinkel (ett gångjärn) | Förskjutning |
| **Glid** | Förskjutning (en låda) | Vinkel |
| **Cylindriskt** | Vinkel och Förskjutning (en axel i ett glidlager) | |
| **Plan** | Längs X, Längs Y över ytan och Vinkel (en del som glider på ett bord) | |
| **Kula** | Vinkel (snurr) och Luta kring X och Y, kring ledets centrum (en kulled) | |
| **Stift i spår** | Längs spåret och Vinkel (en stift i ett rakt spår) | Spårriktning: spårets vinkel från ytans X |

Ytans X och Y är de för den första delens yta. Ledets centrum sätts av **Centrera på**.

"The face's own origin" är delens origo projicerad på ytan, vilket ofta inte är där du vill att delarna ska linjera. För runda delar och stift sätter du **Centrera på** till revolveringens eller hålets axel på båda sidor. Axlarna linjerar då, som en koncentrisk passning.

### Exempel: två flänsar bultade yta mot yta

1. Öppna flänsdelen (en revolvering med ett cirkulärt mönster av hål) och välj {{ui:Sammanställning}}.
2. Välj {{ui:Lägg till kopia}}.
3. Tryck på {{key:J}}, klicka på den plana ytan på den första flänsens skiva (ytan som bulthålen börjar från), och sedan samma yta på den andra flänsen. Ytorna skapades av revolveringen, så ledet är vridbart.
4. Ställ in **Centrera på** till "Axis of Revolve1" på båda sidor. Flänsarna delar nu en axel.
5. Skriv `22.5` i **Vinkel (°)** för att linjera bulthålen, eller dra reglaget.

## Slutna slingor: länkage

Delar som kopplas i en ring (en fyrstångslänk, en vev och glid, en ram avstyvad på båda sidor) bildar en **slinga**. PartCraft löser varje slinga så att den sluter sig. Lederna på den tar de värden som sluter ringen, och rör sig så lite de kan från där de var.

- **Ställ in eller dra** ett värde på ett led i en slinga, och resten av slingan följer. För en fyrstångslänk drar du vevens **Vinkel**, så rör sig kopplingsstången och vipparmen med den. Värdet du ställer in behålls. De andra räknas ut från det.
- I listan är ett led i en slinga som fortfarande kan röra sig **blått**: ett annat värde kan fortfarande ställas in. En slinga som inte kan röra sig (en avstyvad ram) förblir svart. En slinga som inte kan slutas är **röd**.
- Rutan **Del** visar **Slingor**: hur många som är slutna och hur många värden som fortfarande kan röra sig, till exempel "1 sluten; 1 värde kan fortfarande röra sig".
- {{ui:Kontrollera rörelsen med avseende på kollisioner}} sveper ett led i en slinga med slingan efter sig, steg för steg (se [Kontrollera en sammanställning för kollisioner och rörelse](topic:check-assembly)).

En plan länk staplad av plana stänger måste stämma i djup: två delar sammanfogade yta mot yta på båda sidorna av en ring behöver samma stapelhöjd åt båda håll. Använd ett ledets **Förskjutning** för att lyfta en del där stapeln inte stämmer, annars kan slingan inte slutas.

## Arbeta med delarna

Klicka på en del i vyn eller i listan för att markera den. Den högra panelen visar dess delnamn, hur många kopior det finns, dess volym, dess leder, och om den är jordad, satt av sina leder, eller "Inte kopplad: står kvar där den placerades." Knappar:

- {{ui:Redigera denna del}} (eller {{ui:Redigera del}} i verktygsfältet, eller dubbelklicka på delen i listan): öppnar delen för redigering.
- {{ui:Infoga en kopia}}.
- {{ui:Gör den till den jordade delen}}.
- {{ui:Ta bort}}: tar också bort dess leder, efter en fråga.

En sammanställning behåller minst en del: "En sammanställning behåller minst en del. Stäng den i stället."

### Redigera en del på plats

1. Markera en del och välj {{ui:Redigera del}}. Delen öppnas med sin historik. Rubriken säger "Bracket (i sammanställningen Bracket)".
2. Ändra den som vilken del som helst.
3. Välj {{ui:Tillbaka}} i verktygsfältet. Sammanställningen uppdateras: varje kopia av den delen ändras, och leder på ytor som skapats av skisskanter följer med.

Att föra tillbaka ändringen är ett steg i sammanställningens ångra-lista.

## Ångra, spara och stäng

- Sammanställningen har en egen ångra-lista: {{key:Mod+Z}} och {{key:Mod+Y}} fungerar på leder, inlägg och inställningar.
- {{ui:Spara}} eller {{key:Mod+S}} laddar ner `<assembly name>.partcraft-asm.json`, med varje del i den. Öppna den senare med {{ui:Öppna}}.
- {{ui:Stäng}} stänger sammanställningen och återgår till delen du började från. Om sammanställningen inte är sparad frågar den: {{ui:Avbryt}}, {{ui:Kasta sammanställningen}} eller {{ui:Spara först}}.
- För att byta namn på sammanställningen klickar du på tomt utrymme så att inget är markerat och ändrar **Namn** i den högra panelen.

## Stora sammanställningar

En sammanställning kan innehålla tusentals kopior av några få delar. Kopior av samma del ritas tillsammans. Ett led du vrider placerar bara de delar som sitter bakom det. Delförteckningen visar sina första rader, med en knapp "Visa fler" under dem (den markerade delen listas alltid).

- Medan du vrider eller zoomar vyn ritas en sammanställning med fler än cirka 300 000 trianglar som en låda per del. Sedan ritas den i full detalj en stund efter att du slutat.
- {{ui:Vyer}} › {{ui:Lättviktsvisning}} håller lådorna på hela tiden. Att välja delar och leder använder fortfarande de verkliga delarna.
- Hur snabbt den vrids beror också på ditt grafikkort. Siffrorna PartCraft har mätt finns i versionsanteckningarna tillsammans med den maskin de kommer från.

## Ledproblem

- En del som inget led når listas som **fri**, och panelen säger "Bracket2 är inte kopplad till den jordade delen, så den står kvar där den placerades."
- En slinga som inte kan slutas (längderna räcker inte, en gräns stoppar ett led, ytorna stämmer inte i djup): "Revolute3 sluter en slinga som inte kan slutas: den är 2.000 mm fel. Kontrollera ytorna, förskjutningarna och gränserna för slingans leder." Dess leder blir röda.
- Om en yta eller axel som ett led använder försvinner efter att du redigerat en del: "Ytan som det här ledet använder finns inte längre i Bracket." Ta bort ledet och gör det igen.

Nästa: [Kontrollera en sammanställning för kollisioner och rörelse](topic:check-assembly).
