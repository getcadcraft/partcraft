---
title: Skapa verktygsbanor och G-kod (Tillverkning)
summary: Ställ in råmaterial och en arbetsnollpunkt, välj verktyg, lägg till yt-, fick-, kontur-, borr- och fasoperationer genom att markera ytor, finbearbeta hela modellen i 3D (parallell, kammusslor), simulera råmaterialet mot modellen för överskärningar och cykeltid, och ladda ner G-kod från en av de tre inbyggda postprocessorerna eller en du redigerar själv.
keywords: exakt step, step för verkstaden, arbetskoordinater, cam-överlämning, parallell, kammusslor, 3D-finbearbetning, finbearbetning, kulfräs, verktygsbibliotek, redigera postprocessor, anpassad postprocessor, postprocessoreditor, adaptiv, adaptiv rensning, konstant ingrepp, trokoidal, hsm, höghastighetsbearbetning, tillverkning, CAM, verktygsbana, G-kod, NC, CNC, fräs, fräsning, ficka, kontur, profil, planfräsning, borrning, peck, G83, G81, G73, fas, råmaterial, arbetsförskjutning, G54, postprocessor, GRBL, LinuxCNC, matning och varvtal, simulering, överskärning, cykeltid
from: f8a03be8
---

Arbetsytan Tillverkning gör om delen till verktygsbanor och skriver dem som G-kod. De flesta operationer är **2.5-axlig** fräsning: verktyget står lodrätt, väggar skärs rakt nedåt och golv blir plana. **3D-grov** och **Rest** grovbearbetar krökta delar i 3D ([3D-grovbearbetning och restbearbetning](topic:rough-3d)); **Parallell** och **Kammusslor** finbearbetar dem ([3D-finbearbetning](topic:finish-3d)). På en maskin med roterande axlar kan vilken operation som helst ha ett lutande verktyg, och två operationer flyttar de roterande axlarna under skärning ([4- och 5-axlig bearbetning](topic:multi-axis)). Det finns operationer för en svarv ([Svarvning](topic:turning)) och för en mätsond ([Probning](topic:probing)). Den arbetar på de namngivna ytor som nätkärnan ger delen (se [Nätkärnan](topic:solid-kernels)).

Labbversion: kontrollera varje program i styrningens egen simulator, och kör det i luften över materialet först.

## Ställ in

1. Välj **Tillverkning** i arbetsytans växlare, och sedan {{ui:New setup}}.
2. På fliken **Uppställning** väljs:
   - **Verktygsaxel (+Z)**: åt vilket håll verktyget pekar in i delen. Värld +Y (upp i PartCraft) är standard; maskinens X är då Värld X och maskinens Y är Värld −Z.
   - **Arbetsnollpunkt (G54)**: ett hörn eller mitten av råmaterialet, överkant eller underkant, modellens överkantsmitt eller modellens nollpunkt.
   - **Råmaterial**: en låda eller en cylinder, antingen modellen plus förskjutningar (sidor, överkant, botten) eller en fast storlek.
   - **Material** (sätter startmatning och varvtal), **postprocessorn** (styrningen), maskinens högsta spindelvarvtal, snabbgångshastighet och verktygsbytestid, kylvätska och programnummer.

## Verktyg

Fliken **Verktyg** innehåller biblioteket: plan-, kul- och hörnradiefräsar, borrar, fasfräsar och planfräsar, var och en med ett T-nummer, diameter, spiraler och spiralängd (plus hörnradie, spets- eller fasvinkel där de gäller).

Mina verktyg kan sparas i webbläsaren och flyttas mellan datorer som en fil: se [Verktygsbiblioteket](topic:tool-library).

Spindelvarv och matning kommer från materialet: n = 1000 × skärhastighet / (π × diameter), matning = n × spiraler × spånbelastning (borrar: n × matning per varv). Siffrorna är försiktiga startvärden från publicerade intervall, inte inställda för din maskin; skriv din verktygstillverkares skärhastighet, spånbelastning, varv/min eller matning för att åsidosätta dem. När varvtalet överskrider maskinens högsta hålls det där och matningen följer, så att spånbelastningen bibehålls.

## Lägg till operationer

Varje knapp i verktygsfältet lägger till en operation och, där den behöver geometri, startar val: klicka på ytor eller kanter i vyn (klicka igen för att ta bort en), och sedan {{ui:Done picking}} eller {{key:Esc}}.

| Operation | Välj | Vad den gör |
|---|---|---|
| {{ui:Face}} | inget | Sicksack-gångar över hela råmaterialet, förbi dess kanter, ner till modellens överkant |
| {{ui:Pocket}} | en plan golvyta, ett rundt hål eller en sluten kedja av kanter | Rensar området i förskjutna gångar inifrån och ut, vid varje nedsteg; öar (ytor som står upp inne i golvet) lämnas kvar; ett golv som är öppet runt om (inget högre utanför) rensas ut till råmaterialets kant |
| {{ui:Adaptive}} | samma som Pocket | Rensar samma område i gångar som var och en skär en bestämd bredd (**Ingrepp**, en bråkdel av diametern), så att fräsen aldrig tar ett spår i full bredd, inte ens i hörn; den går in med en helix och finbearbetar väggarna på varje nivå. Smala skär tillåter ett djupare nedsteg och en högre matning |
| {{ui:Contour}} | en plan yta (dess kontur), en rund yta eller kanter | Följer konturen förskjuten med verktygsradien, utåt eller inåt, med in- och utgångsbågar och valfria flikar |
| {{ui:Drill}} | hål (klicka på ett hålväggs eller dess kant) | Borrar varje hål med en fast cykel: peck (G83), borrning (G81) eller spånbrytning (G73); eller ange en diameter för att borra varje hål av den storleken |
| {{ui:Chamfer}} | en yta's kontur eller kanter | Kör en fasfräs längs kanten så att den skär den bredd du anger |
| {{ui:Parallel}} | inget (hela modellen) | 3D-finbearbetning i parallella linjer i valfri vinkel, följer ytan med en kul-, hörnradie- eller planfräs. Se [3D-finbearbetning](topic:finish-3d) |
| {{ui:Scallop}} | inget (hela modellen) | 3D-finbearbetning i gångar med ett bestämt avstånd över ytan, så att krönet mellan dem får den höjd du anger |

Välj en operation i listan för att ändra dess verktyg, höjder (frigång, retrakt, matningshöjd, överkant, botten), nedsteg, stegavstånd, material att lämna, finbearbetningsgång, inlopp (helix, ramp eller stick), medfräsning, flikar eller cykel. {{ui:Up}} och {{ui:Down}} ordnar om, {{ui:Suppress}} lämnar ut den och {{ui:Delete}} tar bort den. Allt finns i ångringshistoriken och sparas i delfilen.

Ett stegavstånd för en ficka är högst halva verktygsdiametern, så varje punkt på dess golv ligger inom en verktygsradie från en gång. Inre hörn behåller verktygets radie.

**Adaptiv rensning** håller fräsens ingrepp nära ett värde. Ett ingrepp på 0.15 av diametern är en ingreppsvinkel på ungefär 46°: bågen av fräsens egg i materialet. En förskjuten ficka skär däremot full bredd på sin första gång och lindar sig längre runt i varje inre hörn. Mellan gångarna står verktyget kvar där det rör sig genom skuren luft, och lyfter och sänks i skuren luft annars. Gångarna räknas ut på ett fint rutnät över området (celler på ungefär en tolftedel av verktygsradien), så ingreppet kan bli upp till en cell bredare än inställt; väggarna finbearbetas exakt. Ett stort öppet område ger ett långt program med många korta förflyttningar.

## Simulera

Verktygsbanor görs om efter varje ändring (delens också). {{ui:Simulate}} visar också råmaterialet som är kvar efter hela programmet. Panelen visar:

- **Cykeltid**: matningsrörelser med sin matning, snabbgångar som räta linjer med inställningens snabbgångshastighet, plus verktygsbytestiden. Riktiga maskiner accelererar och tar därför längre tid.
- **Överskärningar**: platser där verktyget gick mer än 0.02 mm under delens yta. Röda markeringar visar dem i vyn.
- **Material kvar på delen**.

Råmaterialet är en höjdkarta över överkanten (en Z-karta), så den kan inte visa underskärningar. Dra **Uppspelning** för att flytta verktyget längs programmet. I vyn är matningsrörelser fasta och snabbgångar streckade, en färg per operation.

Med **Visa simulerat råmaterial** på färgas råmaterialet mot modellen, cell för cell: **grönt** där det ligger på modellen (inom 0.02 mm), **rött** där verktyget skar in i modellen, och där material finns kvar på modellen **gult** för ett tunt skal, **orange** för mer, och övergår till **grått** för oskuret råmaterial vid 1 mm eller mer. Färgerna räknas om vid varje ändring, från samma höjdkarta som siffrorna i panelen, så grönt och rött stämmer med raden Överskärningar. En fas skär medvetet in i modellen och visar rött längs sin kant.

## Skriv G-koden

Välj styrningen under **Postprocessor** och tryck {{ui:Download G-code}} (eller {{ui:Post}} på verktygsfältet):

| Styrning | Fil | Anmärkningar |
|---|---|---|
| Fanuc-liknande ISO | .nc | %, O-nummer, radnummer, T M6 med G43 H, fasta cykler |
| GRBL | .nc | Ingen verktygsväxlare eller fasta cykler: ett verktygsbyte pausar med M0, borrning skrivs som vanliga rörelser |
| LinuxCNC | .ngc | T M6 med G43 H, fasta cykler, M2 |
| Fanuc-liknande svarv | .nc | För svarvprogram: X som diameter, matning per varv, G96 under en G50-gräns, G32-gängning |
| LinuxCNC-svarv | .ngc | För svarvprogram: G7-diametrar, G95, G96, G33-gängning; skriver ingen referensrörelse |
| Din egen | valfri | En postprocessor du skrev eller ändrade: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Varje fil börjar med kommentarer för programmet, råmaterialet, arbetsförskjutningen och verktygen. Koordinaterna är i millimeter med 3 decimaler. {{ui:Toolpath CSV}} och {{ui:Toolpath JSON}} exporterar själva rörelserna.

**Kontrollera utdata i din maskins egna simulator före skärning, och kör den i luften över materialet först.** De tre inbyggda postprocessorerna är utgångspunkter som följer styrningarnas dokumenterade beteende; de är inte bevisade på någon särskild maskin. En postprocessor du ändrar är din att bevisa. Så skriver du en: [Redigerbara postprocessorer](topic:post-processors).

## Exakt STEP för verkstaden

Under G-kodknapparna på fliken **Operationer** laddar {{ui:Exact STEP (work coordinates)}} ner `<part>-work.step`: delen som en exakt solid (äkta cylindrar för hål och upphöjningar, äkta cirklar för deras kanter) med sin nollpunkt i denna uppställnings arbetsnollpunkt och Z längs verktygsaxeln. Det är de koordinater G-koden använder, så en verkstads eget CAM-program eller kontrollprogram linjerar modellen med programmet utan att flytta den. Filen innehåller bara delen, inte råmaterialet eller verktygsbanorna.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver samma solid i delens egna läge (Z upp): se [Exportera för utskrift, STEP och DXF](topic:export-files#for-other-cad-programs-step).

## Begränsningar

- Fickor, konturer, borrning och fasningar är 2.5-axliga. Krökta delar grovbearbetas och finbearbetas i 3D av sina egna operationer ([3D-grovbearbetning och restbearbetning](topic:rough-3d), [3D-finbearbetning](topic:finish-3d)). Adaptiv rensning är 2D (plana golv).
- Lutande verktyg, 5-axlig och 4:e-axelns finbearbetning, svarvning och probning finns, var och en med egna begränsningar, och **ingen av dem har körts på en maskin**: se [4- och 5-axlig bearbetning](topic:multi-axis), [Svarvning](topic:turning) och [Probning](topic:probing).
- Hållare och skaft kontrolleras inte för kollisioner; en varning visas när ett skär är djupare än spiralängden.
- Matningar och varvtal är startvärden. En postprocessor är text du kan redigera, men den avgör bara hur rörelserna skrivs; den kan inte ändra verktygsbanan, lägga till axlar eller känna till din maskin ([Postprocessorer](topic:post-processors) listar vad den inte kan göra).

## Skicka programmet till en maskin

I CadCraft Studio på skrivbordet, med en maskin inställd i Studio, visas **Skicka till en maskin…** bredvid **Ladda ner G-kod** och laddar upp samma program till maskinen i ditt nätverk. Det startas aldrig från PartCraft: starta det vid maskinen när det är klart. I en webbläsare visas inte knappen (en webbsida når inte en maskin i ditt nätverk): ladda ner programmet i stället.
