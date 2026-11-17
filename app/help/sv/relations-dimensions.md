---
title: Fullständigt definiera en skiss med relationer och mått
summary: Lägg till relationer från den högra panelen och mått med måttverktyget, läs färgerna för under, fullt och över definierad och åtgärda en skiss som är över definierad.
keywords: relationer, villkor, mått, smart mått, fullt definierad, under definierad, över definierad, frihetsgrader, sammanfallande, horisontell, vertikal, parallell, vinkelrät, tangent, lika, koncentrisk, mittpunkt, fixera, konflikt, redundant
from: e76d047a
---

En skiss är **fullt definierad** när varje punkt och varje storlek är fixerad av relationer och mått. En fullt definierad skiss ändras bara när du ändrar ett tal, så delen beter sig förutsägbart när du redigerar den senare. PartCraft tvingar dig inte att fullt definiera en skiss, men den visar alltid hur nära du är.

## Läs skissens tillstånd

Tillståndet visas på tre ställen: chipet högst upp till vänster i vyn, meddelandet överst i den högra panelen och flaggan i historiken.

| Tillstånd | Chip | Geometrifärg | Vad det betyder |
|---|---|---|---|
| Under definierad | "Under definierad · 3 frihetsgrader" | Blå | Viss geometri kan fortfarande röra sig. Dra i blå geometri för att se åt vilket håll |
| Fullt definierad | "Fullt definierad" | Tusch (svart på Papper, ljus på Modell) | Varje punkt och storlek är fixerad |
| Över definierad | "Över definierad" | Röd på de inblandade relationerna | Vissa relationer motsäger varandra, eller så är en redan given av andra |

Konstruktionsgeometri är grå och streckad oavsett tillstånd. Markerade objekt är orange. En ”frihetsgrad” är ett sätt något fortfarande kan röra sig på: en fri punkt har två (vänster–höger och upp–ned), en fri cirkel har tre (dess mittpunkt och dess radie).

Förklaringen under meddelandet i den högra panelen upprepar färgerna.

## Lägg till ett mått

1. Tryck på {{key:D}} eller välj {{ui:Mått}}.
2. Klicka på det du vill mäta:
   - **en linje**: dess längd;
   - **en cirkel**: dess diameter; **en båge**: dess radie;
   - **två punkter** (en ändpunkt, ett centrum, en lös punkt eller origo): avståndet mellan dem;
   - **en punkt och en linje**: avståndet från punkten till linjen;
   - **två parallella linjer**: avståndet mellan dem; **två linjer i en vinkel**: vinkeln mellan dem.
3. Efter ett objekt säger statusfältet ”Klicka på ett andra objekt, eller klicka där måttet ska ligga.” Klicka på ett andra objekt, eller klicka i tomt utrymme där du vill ha talet.
4. En sifferruta öppnas med det aktuella värdet. Skriv storleken och tryck på {{key:Enter}}. {{key:Esc}} behåller det uppmätta värdet.

**Var du placerar talet avgör typen** för en lutande linje eller två punkter: placera det ovanför eller nedanför för ett horisontellt avstånd, till vänster eller höger för ett vertikalt avstånd och på annan plats för det verkliga (justerade) avståndet.

Rutan tar emot vanliga tal i millimeter eller grader, till exempel `25`, `12.5` eller `1e3`. Ett inledande `⌀`, `Ø` eller `R`, eller ett avslutande `mm` eller `°`, ignoreras. Vinklar är 0 till 180 grader. Räkneoperationer som `20+5` tas inte emot; för att koppla en storlek till en variabel eller formel, börja med `=`.

Om du vill ändra ett mått senare dubbelklickar du på dess tal i skissen, eller väljer **Redigera** bredvid det i listan i den högra panelen.

:::tip
Du kan också markera geometri först (markeringsverktyget) och välja en måttknapp i den högra panelen: {{ui:Avstånd}}, {{ui:Horisontellt avstånd}}, {{ui:Vertikalt avstånd}}, {{ui:Radie}}, {{ui:Diameter}} eller {{ui:Vinkel}}. Bara de som passar markeringen visas. Så ger du en cirkel en radie i stället för en diameter.
:::

## Lägg till en relation

Relationer läggs till från den högra panelen, inte med ett verktyg.

1. Tryck på {{key:S}} för Markera.
2. Klicka på ett objekt, och sedan {{key:Shift}}+klick på ett andra om relationen behöver två. Origo kan också markeras.
3. Den högra panelen säger ”Markerat: linje l3, punkt p1” och visar en knapp för varje relation som passar, till exempel {{ui:∥ Parallell}} eller {{ui:• Sammanfallande}}.
4. Välj knappen. Skissen löses direkt.

Om ingen relation passar säger panelen ”Ingen relation passar den här markeringen. Markera ett eller två objekt (Shift+klick lägger till).”

Hela listan över relationer, vad var och en behöver och vad den gör finns i [Skissrelationer och mått](topic:sketch-relations).

Relationer visas i skissen som små symboler bredvid geometrin (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Sammanfallande prickar döljs om inte geometrin är markerad eller relationen har problem. Klicka på en symbol för att markera relationen.

## Ett exempel: en L-formad konsolprofil

1. Skissa på **Frontplan**. Med linjeverktyget börjar du i origo och klickar på sex hörn på ett L och avslutar i origo igen. Kedjan avslutas av sig själv när du klickar på den första punkten.
2. Linjer som ritas nära horisontella eller vertikala har redan H- och V-relationer, utom den sista: en linje som slutar i en befintlig punkt får ingen automatisk relation. Tryck på {{key:S}}, klicka på den sista linjen och välj {{ui:V Vertikal}} i den högra panelen. Chipet säger ”Under definierad · 4 frihetsgrader”.
3. Tryck på {{key:D}}. Klicka på den nedre linjen, klicka under den, skriv `80` och tryck på {{key:Enter}}.
4. Klicka på den vänstra linjen, klicka till vänster om den, skriv `60` och tryck på {{key:Enter}}.
5. Sätt måttet på den övre korta linjen till `20` och den inre vertikala linjen till `45` på samma sätt.
6. Chipet säger nu **Fullt definierad** och hela L:et blir tusch.

## Åtgärda en över definierad skiss

När en ny relation eller ett nytt mått motsäger de andra flyttar PartCraft ingenting. Geometrin förblir exakt som den var, de inblandade relationerna blir röda, och statusfältet namnger dem:

- ”Över definierad: Horisontell, Avstånd 40 kan inte uppfyllas alla. Ångra, eller ta bort en av dem.” Relationerna står i konflikt.
- ”Över definierad: Parallell är redan given. Ta bort den.” Relationen tillför inget: de andra tvingar redan fram den. (Till exempel är en rektangels sidor redan parallella.)

Så här åtgärdar du det:

1. Tryck på {{key:Mod+Z}} för att ångra den senaste ändringen, eller
2. Hitta det röda objektet i listan **Relationer och mått** i den högra panelen (en grupp som innehåller det är öppen och röd) och välj **Ta bort** bredvid det. Du kan också klicka på dess symbol eller tal i skissen och trycka på {{key:Delete}}.

:::note
I den här versionen finns inga ”drivna” (referens)mått. Ett mått som bara skulle redovisa en storlek som de andra relationerna redan fixerar behandlas som över definierat. Läs storlekar i panelen i stället: markera en linje och titta på måttknapparna, eller kontrollera delens fakta efter att du extruderat.
:::

En över definierad skiss med en verklig konflikt gör att funktionen som använder den misslyckas (”Över definierad: 1 relation kan inte uppfyllas alla.”), och historiken markerar den med **⚠ fel**. En skiss som bara är redundant byggs ändå, med en ⚠-varning.

## Dra för att hitta vad som är fritt

I Markera drar du i en blå punkt eller linje. Lösaren flyttar den så lite som möjligt samtidigt som varje relation behålls. Om ett drag skulle bryta en relation hoppar geometrin tillbaka. Det här är det snabbaste sättet att se vilket mått som fortfarande saknas.

## Listan över relationer

När inget är markerat listar den högra panelen **Relationer och mått**. Varje rad har:

- **Redigera** (endast mått): öppnar sifferrutan;
- **Markera**: markerar den i skissen;
- **Ta bort**: tar bort den.

Relationer av samma slag som förekommer mer än en gång delar en rad, till exempel ”Sammanfallande × 5” för en rektangel som är knuten till origo. Klicka på raden för att öppna den: varje relation listas efter vad den binder ihop (”punkt p2, punkt p4”) med sin egen **Markera** och **Ta bort**. Själva raden har:

- **Markera**: markerar alla i skissen;
- **Ta bort alla**: tar bort alla i ett steg ({{key:Mod+Z}} tar tillbaka dem).

En grupp som innehåller en över definierad relation öppnas av sig själv, med sitt namn i rött. Mått listas alltid ett per rad, med sina värden.

När geometri är markerad visar listan bara **Relationer på markeringen**.
