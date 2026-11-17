---
title: Dokument och revisioner (valvet)
summary: En steg-för-steg-genomgång av ett riktigt jobb: sätt en projektmapp med delar och sammanställningar under kontroll, checka ut en del, ändra den, checka in den med en anteckning, frisläpp den, se vad som använder den och stycklistan, vad en andra person ser medan den är låst och hur det fungerar med molnmappar.
keywords: valv, dokument, guidad genomgång, handledning, checka ut, checka in, revision, frisläppning, godkänn, lås, historik, var den används, stycklista, bom, sammanställning, molnmapp, projektmapp, två personer, delad mapp
from: 0a5e6983
---

## Vad du ska göra

Du är Ana och arbetar på Riverside Clinic tillsammans med en kollega, Ben. Projektets delar och sammanställningar finns i en mapp som ni båda når (en delad enhet, en synkad mapp eller en molnmapp). I slutet har en fil gått från sin första kopia till en frisläppt revision **A**, ändrats igen som **B.1**, du har sett vem som gjorde vad, och du har sett vad Ben ser när du håller filen.

Allt sparas i en dold mapp `.ccvault` bredvid dina filer: ingen server, inget laddas upp (en molnmapp är undantaget, se sista steget). För alla knappar och regler på ett ställe, se ämnet *Dokument: checka ut, revisioner och frisläppning* där din app har det.

## 1. Sätt upp projektmappen

1. Välj {{ui:Dokument…}} i gruppen **Fil** på verktygsfältet.
2. Välj {{ui:Välj projektmappen}} och välj mappen som innehåller projektets delar och sammanställningar. (Projektmappar fungerar i Studio och i webbläsare som kan öppna en mapp, till exempel Chrome och Edge. I andra webbläsare säger panelen det.)
3. Välj {{ui:Ändra}} bredvid **Du:** och skriv ditt namn, `Ana` (om den frågar, även datorns namn). Panelen visar nu *Du: Ana på* och din dator. Ditt namn följer med allt du gör.
4. Välj {{ui:Starta ett valv i den här mappen}} och skriv projektets namn, `Riverside clinic`. Panelen visar *Valvet startades för Riverside clinic.*

## 2. Ta en fil under kontroll

1. Öppna **Filer som inte finns i valvet** och välj {{ui:Lägg till}} bredvid `plates/Bracket.partcraft.json`.
2. Den visas under **Filer i valvet** som revision **A.1**, status **Pågående arbete**. A.1 är dess första kopia; valvet sparar en kopia av varje revision.

## 3. Checka ut, ändra, checka in

1. Välj {{ui:Öppna}} bredvid `plates/Bracket.partcraft.json`. Delen öppnas i PartCraft och panelen stängs så att du ser den. Öppna panelen igen från {{ui:Dokument…}}.
2. Öppna panelen igen och välj {{ui:Checka ut}}. Raden säger nu **Utcheckad till dig**. En låsfil har skapats i `.ccvault/locks`; ingen annan kan checka ut filen förrän du checkar in den.
3. Ändra delen: redigera ett mått, lägg till ett hål. Spara nekas om filen inte är utcheckad till dig, och det står varför; Spara som fungerar alltid för en kopia av din egen.
4. Öppna panelen, välj {{ui:Checka in}} och skriv vad som ändrades (`Flyttade dörren`). Panelen säger *incheckad som A.2*. Filen i projektmappen är nu den del du hade öppen, och låset är borta. Incheckning utan ändring behåller revisionen.

Om du ändrar dig ger {{ui:Ångra utcheckning}} tillbaka filen utan en ny revision.

## 4. Granska och frisläpp

1. Välj {{ui:Skicka på granskning}}. Statusen blir **För granskning** och filen blir skrivskyddad.
2. Innan du godkänner, välj {{ui:Projektinställningar}} och skriv vilka som får godkänna (ett namn per rad), till exempel `Ben` och `Carla`, och bocka för regeln att godkännaren måste vara någon annan än författaren. Välj {{ui:Spara inställningar}}. Nu nekar valvet själv alla andra.
3. Ben (eller Carla) väljer {{ui:Godkänn}} och skriver godkännarens namn. Statusen blir **Frisläppt** och revisionen blir **A**, med *godkänd av* och namnet. En frisläppt fil är skrivskyddad. {{ui:Skicka tillbaka}} hade skickat tillbaka den till Pågående arbete, med en anledning.

Godkännarens namn är namnet som skrivs i panelen; det är en uppgift om vem som skrev under, inte ett bevis på identitet.

## 5. En ny revision

1. På den frisläppta filen, välj {{ui:Ny revision}}. Du håller den för nästa bokstav.
2. Ändra den och välj {{ui:Checka in}}. Revisionen är **B.1**, pågående arbete. Frisläpp den på samma sätt så blir den **B**. {{ui:Ångra utcheckning}} före första incheckningen lämnar den på **A**.

Revisionsbokstäverna går A, B … Z, AA, AB. Om din standard hoppar över vissa bokstäver, hoppar projektinställningen *Använd ASME Y14.35-sekvensen* över I, O, Q, S, X och Z för nästa revisioner.

## 6. Se vad som hände

Välj filens namn för att öppna dess detaljer:

- **{{ui:Historik}}**: alla händelser, nyast först, med vem, vilken dator och när: *Incheckad A.2* av Ana, *Frisläppt* av Ben, och så vidare.
- **{{ui:Revisioner}}**: revisionstabellen: varje sparad revision, med datum, vem som checkade in den, anteckningen och vem som godkände den. Valvet sparar en kopia av varje i `.ccvault/revs`.
- **{{ui:Använder}}**: delarna i en sammanställning.
- **{{ui:Används av}}**: Används av listar varje sammanställning i valvet som innehåller den här delen: ändrar du en vinkel vet du vilka sammanställningar som ska kontrolleras.

## Sammanställningar: vad de använder och stycklistan

Lägg en sammanställning (`.partcraft.json`, sparad från läget Sammanställning) i mappen och lägg till den. Välj dess namn: **Använder** listar delarna den innehåller, med varje dels revision och status; **Används av** på en del listar varje sammanställning som innehåller den. {{ui:Stycklista (CSV)}} sparar hela delslistan, nivå för nivå, med antal, revisioner och statusar, för ett kalkylblad. Ändrar du en vinkel talar **Används av** om vilka sammanställningar du ska titta på.

## 7. Vad Ben ser medan du håller filen

Checka nu ut filen igen och be Ben öppna samma projektmapp på sin dator och öppna panelen. På filens rad ser han **Utcheckad av Ana på** din dator **sedan** tiden, och ingen {{ui:Checka ut}}-knapp. Om han ändå försöker nekar valvet: låset är en fil som systemet inte skapar två gånger, så två personer kan inte båda hålla filen, inte ens i samma bråkdel av en sekund, när mappen ligger på disk i Studio. (I en webbläsare kan mappen bara ge ett bästa-försök, och panelen säger det under **Mapp**.)

Om Ana är borta och Ben behöver filen, frigör {{ui:Bryt utcheckning}} den. Han måste skriva en anledning; den går in i loggen tillsammans med vems utcheckning det var. När projektet listar administratörer kan bara de göra det. En utcheckning som är äldre än gränsen för inaktuell utcheckning (14 dagar som standard) markeras som *lång tid*. Efter avbrottet nekas Anas sena incheckning, så ni två kan inte skriva över varandra.

## 8. Molnmappar

En molnmapp är en projektmapp som ligger i ditt teams molnlagring, så teamet behöver ingen delad enhet. I Studio, inloggad på ditt CadCraft-konto, visar panelen {{ui:Öppna en molnmapp}} bredvid {{ui:Välj projektmappen}}. Välj den och välj mappen, som listas som arbetsyta / mapp. En arbetsytsägare skapar mappen först, och teamets molnlagring måste vara aktiverad. Allt ovan fungerar likadant; servern skapar låset, som är strikt över personer. Om du inte är inloggad säger panelen att du ska logga in. I en vanlig webbläsarflik erbjuds inte molnknappen; använd Studio.

## Prova det

Gör de åtta stegen ovan med en kopia av en riktig fil. För de tvåpersonsstegen behöver du en annan person, eller två fönster med två namn. Om du provar med en riktig delad mapp listar Community-testsidan en kontroll som frågar just detta, och tar emot resultat.
