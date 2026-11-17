---
title: Kopiera, klistra in och duplicera
summary: Kopiera skissgeometri, funktioner och sammanställningsdelar. Klistra in där du klickar eller på samma plats, duplicera i ett steg, och se vad som följer med en kopia och vad som inte gör det.
keywords: kopiera, klistra in, klipp ut, duplicera, urklipp, klistra in på plats, markera allt, avmarkera, ta bort, ctrl c, ctrl v, ctrl d, instans, komponent, kopiera skiss, kopiera funktion, kopiera del
from: 611307d7
---

Gruppen {{ui:Redigera}} i verktygsfältet innehåller {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}} och en menyn {{ui:Mer}} med {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}, var och en med sin tangent. Vad de kopierar beror på var du är: geometri i en öppen skiss, en funktion i historiken, eller en del i en sammanställning.

En nedtonad post kan inte göra något just nu. Håll muspekaren över den: dess verktygstips säger varför, till exempel "Markera skissgeometri först" eller "Urklippet innehåller Sketch2 och Extrude2: funktioner klistras in i historiken, så avsluta skissen först".

| Åtgärd | Tangent | I en skiss | I historiken | I en sammanställning |
|---|---|---|---|---|
| Kopiera | {{key:Mod+C}} | De markerade punkterna och kurvorna | Den markerade skissen, extrudering, revolvering eller hål (med sin skiss) | Den markerade delen |
| Klipp ut | {{key:Mod+X}} | Kopiera, sedan ta bort dem | Kopiera, sedan ta bort funktionen | Kopiera, sedan ta bort delen |
| Klistra in | {{key:Mod+V}} | Kopian följer pekaren. Klicka där den ska. | Lägger till kopian i slutet av historiken | En ny kopia bredvid de andra delarna |
| Klistra in på plats | {{key:Mod+Shift+V}} | På samma koordinater | Samma som Klistra in | På samma plats som den kopierade delen |
| Duplicera | {{key:Mod+D}} | Kopierar och flyttar i ett svep. Urklippet lämnas orört. | En andra kopia direkt efter dig | En andra kopia bredvid de andra delarna |
| Ta bort | {{key:Delete}} | Markeringen | Funktionen (frågar om andra använder den) | Delen eller ledet |
| Markera allt | {{key:Mod+A}} | Allt i skissen | Inte tillgängligt | Inte tillgängligt |
| Avmarkera | {{key:Esc}} | Rensar markeringen | Rensar markeringen och valen | Rensar markeringen |

Varje inklistring, duplicering och urklipp är ett steg i ångra-listan. {{key:Mod+Z}} tar tillbaka det, {{key:Mod+Y}} lägger tillbaka det.

## I en skiss

1. Markera det du vill kopiera: klicka på det, {{key:Shift}}+klicka för fler, dra en ruta, eller tryck på {{key:Mod+A}} för allt.
2. Tryck på {{key:Mod+C}} eller välj {{ui:Kopiera}}. Statusfältet säger vad som kopierades.
3. Tryck på {{key:Mod+V}} eller välj {{ui:Klistra in}}. En streckad kopia följer pekaren, hållen vid dess mitt. Den snäpper till punkter: placera en kopierad cirkels centrum på en punkt genom att klicka på den punkten.
4. Klicka där den ska. Den inklistrade geometrin förblir markerad, så du kan dra i den eller lägga till relationer direkt. {{key:Esc}} avbryter inklistringen.

Vad som följer med:

- En kopierad linje, cirkel eller båge tar med sina egna ändpunkter och centrum.
- Relationer och mått **mellan kopierade objekt** följer med. En kopierad rektangel är fortfarande en rektangel, med sina storlekar.
- Relationer **till geometri du inte kopierade**, och till origo, tas bort. Statusfältet räknar dem: "2 relationer till geometri utanför kopian följer inte med". En inklistrad kopia är alltså fri att flyttas tills du binder fast den med relationer eller mått.
- En fast punkt förblir fast, på sin nya position.

{{ui:Klistra in på plats}} placerar kopian exakt på originalets koordinater, i den här skissen eller i en annan. Det är praktiskt för att föra en profil från en skiss till en annan. I samma skiss ligger kopian ovanpå originalet. Dra bort den.

{{ui:Duplicera}} ({{key:Mod+D}}) kopierar markeringen och börjar placera den direkt, utan att röra det som finns på urklippet.

:::tip
För att upprepa en hålcentrum eller ett spår flera gånger, kopiera det en gång och klistra in det flera gånger. Varje {{key:Mod+V}} startar en ny kopia som följer pekaren.
:::

## I historiken

1. Klicka på en skiss, en extrudering, en revolvering eller ett hål i historiken.
2. {{key:Mod+C}} kopierar den. En skissbaserad funktion kopieras tillsammans med sin skiss.
3. {{key:Mod+V}} lägger till kopian i slutet av historiken (vid återrullningsfältet om du har rullat tillbaka), med nya namn som Sketch3 och Extrude2.

Kopian ligger på samma plan eller yta som originalet, så den bygger ovanpå det och delen ser likadan ut. Markera den nya skissen och ändra dess plan i den högra panelen. Eller öppna den och dra eller sätt om mått på profilen för att flytta kopian.

- Klistra in i **en annan del**: öppna den delen och tryck på {{key:Mod+V}}. Om kopians skiss låg på en yta som den delen inte har, hamnar den på framplanet, och statusfältet säger det.
- {{ui:Duplicera}} gör kopiera och klistra in i ett steg, inne i samma del.
- {{ui:Klipp ut}} kopierar funktionen och tar sedan bort den. Den frågar först om andra funktioner använder den.

Mönster, speglingar, rundningar, fasningar, skal och importerade solider kan inte kopieras. De hänger på kanter, ytor eller funktioner som valts i den här delen. Kopiera skissen eller funktionen de bygger på i stället, eller mönstra den med {{ui:Linjärt}} eller {{ui:Cirkulärt}}.

## I en sammanställning

1. Klicka på en del i vyn eller i listan till vänster.
2. Välj {{ui:Duplicera}} ({{key:Mod+D}}), eller {{key:Mod+C}} och sedan {{key:Mod+V}}.

Den nya kopian är **samma del**: redigerar du en ändras varje kopia. Den visas 20 mm till höger om allt som redan finns i sammanställningen, vänd på samma sätt som kopian, och stannar där tills ett led placerar den. {{ui:Klistra in på plats}} ({{key:Mod+Shift+V}}) placerar den exakt där den kopierade delen är. Koppla den för att flytta den. Ett glidleds förskjutning skjuter den längs.

Att klistra in en del som kopierats från en annan sammanställning tar med delen, på samma sätt som {{ui:Infoga}} från dess fil. {{ui:Lägg till kopia}} i gruppen Sammanställning gör detsamma som {{ui:Duplicera}}. Den fungerar med inget markerat och kopierar då den sista delen.

## Urklippet

- Det är PartCraft's eget urklipp, inte datorns. Du kan inte klistra in PartCraft-geometri i ett annat program, eller text i PartCraft's vyer.
- Det hålls kvar i den här webbläsaren, så en annan PartCraft-flik kan klistra in det du kopierade. Det läses tillbaka och kontrolleras som en öppnad fil. Något skadat eller från en annan version nekas.
- En del med en stor importerad STEP-fil kan vara för stor för webbläsaren att hålla. Då klistras den bara in i den här fliken.
- I en sifferruta eller hjälpsökningen kopierar och klistrar {{key:Mod+C}} och {{key:Mod+V}} text som vanligt.

På ritningsbladet finns kopiera och klistra in inte ännu. {{ui:Ta bort}} och {{ui:Avmarkera}} fungerar på den markerade symbolen. Se [Finns inte ännu](topic:not-built-yet).
