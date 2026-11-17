---
title: Gör verktygsbanor och G-kod (Tillverkning)
summary: Ställ in råemne och arbetsnollpunkt, välj verktyg, lägg till yt-, ficko-, kontur-, borr- och fasoperationer genom att välja ytor, slutbearbeta hela modellen i 3D (parallell, kammusslor), simulera råemnet mot modellen för urgröpningar och cykeltid, och ladda ner G-kod från en av de tre inbyggda postprocessorerna eller en du redigerar själv.
keywords: exakt step, step för verkstaden, arbetskoordinater, cam-överlämning, parallell, kammusslor, 3D-slutbearbetning, slutbearbetning, kulfräs, verktygsbibliotek, redigera postprocessor, anpassad postprocessor, postredigerare, adaptiv, adaptiv bearbetning, konstant ingrepp, trokoidal, hsm, höghastighetsbearbetning, tillverkning, CAM, verktygsbana, G-kod, NC, CNC, fräs, fräsning, ficka, kontur, profil, planfräsning, borr, peck, G83, G81, G73, fas, råemne, arbetsförskjutning, G54, postprocessor, GRBL, LinuxCNC, matning och skärhastighet, simulering, urgröpning, cykeltid
from: beeb29aa
---

Arbetsytan Tillverkning gör delen till verktygsbanor för en 3-axlig fräsmaskin och skriver dem som G-kod. De flesta operationer är **2,5-axliga**: verktyget står lodrätt, väggar skärs rakt ned och golv plant. **Parallell** och **Kammusslor** slutbearbetar krökta ytor i 3D (se [3D-slutbearbetning](topic:finish-3d)); verktyget står fortfarande lodrätt (tre axlar, ingen lutning). Den arbetar på de namngivna ytorna som nätkärnan ger delen (se [Nätkärnan](topic:solid-kernels)).

Labbversion: kontrollera varje program i din styrenhets egna simulator, och kör det i luften över råemnet först.

## Ställ in

1. Välj **Tillverkning** i arbetsytsväxlaren, och sedan {{ui:Ny uppställning}}.
2. På fliken **Uppställning** väljer du:
   - **Verktygsaxel (+Z)**: vilket håll verktyget pekar in i delen. Världens +Y (PartCraft:s upp) är standard; maskinens X är då världens X och maskinens Y är världens −Z.
   - **Arbetsnollpunkt (G54)**: ett hörn eller en mitt på råemnet, överst eller underst, modellens mittpunkt upptill, eller modellens origo.
   - **Råemne**: en låda eller en cylinder, antingen modellen plus förskjutningar (sidor, topp, botten) eller en fast storlek.
   - **Material** (sätter startmatning och skärhastighet), **postprocessorn** (styrenheten), maskinens högsta spindelvarvtal, snabbgångshastighet och verktygsbytestid, kylvätska och programnumret.

## Verktyg

Fliken **Verktyg** innehåller biblioteket: plana fräsar, kulfräsar och bullnosefräsar, borrar, fasfräsar och planfräsar, var och en med ett T-nummer, diameter, spår och spårlängd (plus hörnradie, spets- eller fasvinkel där de gäller).

Mina verktyg kan sparas i webbläsaren och flyttas mellan datorer som en fil: se [Verktygsbiblioteket](topic:tool-library).

Spindelvarvtal och matning kommer från materialet: n = 1000 × skärhastighet / (π × diameter), matning = n × spår × spånbelastning (borrar: n × matning per varv). Siffrorna är försiktiga startvärden från publicerade intervall, inte inställda för din maskin; skriv din verktygstillverkares skärhastighet, spånbelastning, varvtal eller matning för att åsidosätta dem. När varvtalet passerar maskinens maximum hålls det där och matningen följer och behåller spånbelastningen.

## Lägg till operationer

Varje knapp i verktygsfältet lägger till en operation och, där den behöver geometri, börjar välja: klicka på ytor eller kanter i vyn (klicka igen för att ta bort en), och sedan {{ui:Klar med val}} eller {{key:Esc}}.

| Operation | Välj | Vad den gör |
|---|---|---|
| {{ui:Yta}} | ingenting | Sicksack-banor över hela råemnet, förbi dess kanter, ned till modellens topp |
| {{ui:Ficka}} | en plan golvyta, ett runt hål, eller en sluten kedja av kanter | Rensar området i förskjutna banor inifrån och ut, vid varje nedstegning; öar (ytor som står upp inne i golvet) lämnas kvar; ett golv som är öppet runt om (inget högre utanför det) rensas ut till råemnets kant |
| {{ui:Adaptiv}} | samma som Ficka | Rensar samma område i banor som var och en skär en bestämd bredd (**Ingrepp**, en bråkdel av diametern), så att fräsen aldrig tar ett helbreddat spår, även i hörn; den går in med en helix och slutbearbetar väggarna på varje nivå. Smala snitt tillåter ett djupare steg och en högre matning |
| {{ui:Kontur}} | en plan yta (dess kontur), en rund yta, eller kanter | Följer konturen förskjuten med verktygsradien, utanför eller innanför, med in- och utkörningsbågar och valfria bryggor |
| {{ui:Borrning}} | hål (klicka på ett hålväggs eller dess kant) | Borrar varje hål med en fast cykel: peck (G83), borra (G81) eller spånbrytning (G73); eller ange en diameter för att borra varje hål av den storleken |
| {{ui:Fas}} | en ytas kontur eller kanter | Kör en fasfräs längs kanten så att den skär den bredd du ställt in |
| {{ui:Parallell}} | ingenting (hela modellen) | 3D-slutbearbetning i parallella linjer i valfri vinkel, som följer ytan med en kul-, bullnose- eller planfräs. Se [3D-slutbearbetning](topic:finish-3d) |
| {{ui:Kammusslor}} | ingenting (hela modellen) | 3D-slutbearbetning i banor på ett inställt avstånd över ytan, så att åsen mellan dem får den höjd du begär |

Välj en operation i listan för att ändra dess verktyg, höjder (frigång, retraktion, matningshöjd, topp, botten), nedstegning, sidoförskjutning, material att lämna kvar, slutgång, inträde (helix, rampa eller stötning), medfräsning, bryggor eller cykel. {{ui:Upp}} och {{ui:Ner}} ändrar ordningen, {{ui:Undertryck}} lämnar ut den, {{ui:Ta bort}} tar bort den. Allt finns i ångringshistoriken och sparas i delfilen.

En fickas sidoförskjutning är högst hälften av verktygsdiametern, så varje punkt på dess golv ligger inom en verktygsradie från en bana. Inre hörn behåller verktygets radie.

**Adaptiv bearbetning** håller fräsens ingrepp nära ett värde. Ett ingrepp på 0,15 av diametern är en ingreppsvinkel på ungefär 46°: bågen av fräsens egg i materialet. En förskjuten ficka skär däremot full bredd på sitt första pass och lindar sig längre runt i varje inre hörn. Mellan passen står verktyget nere där det rör sig genom skuren luft, och lyfter och sänker sig i skuren luft på andra ställen. Passen beräknas på ett fint rutnät över området (celler på ungefär en tolftedel av verktygsradien), så ingreppet kan bli upp till ungefär en cell bredare än inställt; väggarna slutbearbetas exakt. Ett stort öppet område ger ett långt program med många korta rörelser.

## Simulera

Verktygsbanor görs om efter varje ändring (delens också). {{ui:Simulera}} visar också råemnet som återstår efter hela programmet. Panelen visar:

- **Cykeltid**: matningsrörelser med sin matning, snabbgångar som raka linjer med uppställningens snabbgångshastighet, plus verktygsbytestiden. Riktiga maskiner accelererar, så de tar längre tid.
- **Urgröpningar**: ställen där verktyget gick mer än 0,02 mm under delens yta. Röda märken visar dem i vyn.
- **Material kvar på delen**.

Råemnet är en höjdkarta över toppen (en Z-karta), så det kan inte visa undersnitt. Dra **Uppspelning** för att flytta verktyget längs programmet. I vyn är matningsrörelser fasta och snabbgångar streckade, med en färg per operation.

Med **Visa det simulerade råemnet** på färgas råemnet mot modellen, cell för cell: **grönt** där det är på modellen (inom 0,02 mm), **rött** där verktyget skurit in i modellen, och där material finns kvar på modellen **gult** för ett tunt skikt, **orange** för mer, som övergår till **grått** för orört råemne vid 1 mm eller mer. Färgerna görs om med varje ändring, från samma höjdkarta som siffrorna i panelen, så grönt och rött stämmer med raden Urgröpningar. En fas skär medvetet in i modellen och visar rött längs sin kant.

## Posta G-koden

Välj styrenheten under **Postprocessor** och tryck på {{ui:Ladda ner G-kod}} (eller {{ui:Postprocessor}} i verktygsfältet):

| Styrenhet | Fil | Anteckningar |
|---|---|---|
| Fanuc-liknande ISO | .nc | %, O-nummer, radnummer, T M6 med G43 H, fasta cykler |
| GRBL | .nc | Ingen verktygsväxlare eller fasta cykler: en verktygsbyte pausar med M0, borrning skrivs som vanliga rörelser |
| LinuxCNC | .ngc | T M6 med G43 H, fasta cykler, M2 |
| Din egen | valfri | En postprocessor du skrev eller ändrade: {{ui:Redigera postprocessor…}}, {{ui:Ny postprocessor…}}, {{ui:Importera postprocessorfil…}} |

Varje fil börjar med kommentarer för programmet, råemnet, arbetsförskjutningen och verktygen. Koordinaterna är i millimeter med 3 decimaler. {{ui:Verktygsbana som CSV}} och {{ui:Verktygsbana som JSON}} exporterar själva rörelserna.

**Kontrollera utdata i din maskins egna simulator innan du skär, och kör den i luften över råemnet först.** De tre inbyggda postprocessorerna är utgångspunkter som följer styrenheternas dokumenterade beteende; de har inte bevisats på någon viss maskin. En postprocessor som du ändrar är din att bevisa. Hur man skriver en: [Postprocessorer](topic:post-processors).

## Exakt STEP för verkstaden

Under G-kodknapparna på fliken **Operationer** laddar {{ui:Exakt STEP (arbetskoordinater)}} ned `<part>-work.step`: delen som en exakt solid (riktiga cylindrar för hål och upphöjningar, riktiga cirklar för deras kanter) med sitt origo i uppställningens arbetsnollpunkt och Z längs verktygsaxeln. Det är de koordinater som G-koden använder, så en verkstads egna CAM-program eller kontrollprogram linjerar modellen med programmet utan att flytta den. Filen innehåller bara delen, inte råemnet eller verktygsbanorna.

{{ui:Exportera}} › {{ui:STEP AP242 (exakt solid)}} skriver samma solid i delens egen position (Z upp): se [Exportera för utskrift, STEP och DXF](topic:export-files#for-other-cad-programs-step).

## Begränsningar

- Fickor, konturer, borrning och fasningar är 2,5-axliga. Krökta ytor kan slutbearbetas i 3D ([parallell och kammusslor](topic:finish-3d)) men inte grovbearbetas i 3D (en kon lämnas som trappsteg tills du slutbearbetar den), och det finns ingen restbearbetning. Adaptiv bearbetning är 2D (plana golv).
- Bara tre axlar: ingen lutning, ingen svarvning, ingen inspektion.
- Hållare och skaft kontrolleras inte för kollisioner; en varning visas när ett snitt är djupare än spårlängden.
- Matningar och varvtal är startvärden. En postprocessor är text som du kan redigera, men den avgör bara hur rörelserna skrivs; den kan inte ändra verktygsbanan, lägga till axlar eller känna din maskin ([Postprocessorer](topic:post-processors) listar vad den inte kan göra).

## Skicka programmet till en maskin

I CadCraft Studio på skrivbordet, med en maskin inställd i Studio, visas **Skicka till en maskin…** bredvid **Ladda ner G-kod** och laddar upp samma program till maskinen på ditt nätverk. Det startas aldrig från PartCraft: starta det vid maskinen när det är klart. I en webbläsare visas inte knappen (en webbsida kan inte nå en maskin på ditt nätverk): ladda ner programmet i stället.
