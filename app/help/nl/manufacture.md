---
title: Freespaden en G-code maken (Fabricage)
summary: Stel ruwdeel en een werknulpunt in, kies gereedschappen, voeg vlak-, holte-, contour-, boor- en afschuinbewerkingen toe door vlakken te kiezen, werk het hele model in 3D af (evenwijdig, scallop), simuleer het ruwdeel tegen het model op inkepingen en cyclustijd, en download G-code van een van de drie ingebouwde postprocessors of een die u zelf bewerkt.
keywords: exacte step, step voor de werkplaats, werkcoördinaten, cam-overdracht, evenwijdig, scallop, 3d-afwerking, afwerking, bolfrees, gereedschapsbibliotheek, postprocessor bewerken, eigen postprocessor, postprocessor-editor, adaptief, adaptief ruimen, constante ingrijping, trochoïdaal, hsm, hogesnelheidsbewerking, fabricage, CAM, freespad, G-code, NC, CNC, frees, frezen, holte, contour, profiel, vlakfrezen, boren, peck, G83, G81, G73, afschuinen, ruwdeel, werknulpunt, G54, postprocessor, GRBL, LinuxCNC, aanzet en toerental, simulatie, inkeping, cyclustijd
from: f8a03be8
---

De werkomgeving Fabricage zet het onderdeel om in freespaden en schrijft die als G-code. De meeste bewerkingen zijn **2.5-assig** frezen: het gereedschap blijft verticaal, wanden worden recht naar beneden gefreesd en vloeren vlak. **3D ruwen** en **Rest** frezen gebogen onderdelen in 3D ([3D ruwen en restbewerking](topic:rough-3d)); **Evenwijdig** en **Scallop** werken ze af ([3D-afwerking](topic:finish-3d)). Op een machine met roteerassen kan elke bewerking een gekanteld gereedschap hebben, en twee bewerkingen verplaatsen de roteerassen tijdens het frezen ([4- en 5-assige bewerking](topic:multi-axis)). Er zijn bewerkingen voor een draaibank ([Draaien op een draaibank](topic:turning)) en voor een tastkop ([Tasten](topic:probing)). Het werkt op de benoemde vlakken die de mesh-kernel van het onderdeel geeft (zie [De mesh-kernel](topic:solid-kernels)).

Labversie: controleer elk programma in de eigen simulator van uw besturing en laat het eerst in de lucht boven het ruwdeel lopen.

## Instellen

1. Kies **Fabricage** in de werkomgeving-schakelaar, en dan {{ui:Nieuwe opstelling}}.
2. Kies op het tabblad **Opstelling**:
   - **Gereedschapsas (+Z)**: welke kant het gereedschap op het onderdeel in wijst. Wereld +Y (het omhoog van PartCraft) is de standaard; dan is machine-X wereld-X en machine-Y wereld −Z.
   - **Werknulpunt (G54)**: een hoek of het midden van het ruwdeel, boven of onder, het bovenmidden van het model, of de oorsprong van het model.
   - **Ruwdeel**: een blok of een cilinder, hetzij het model plus toeslagen (zijden, boven, onder) hetzij een vaste maat.
   - **Materiaal** (stelt de startaanzet en het toerental in), de **postprocessor** (besturing), het maximale spiltoerental van de machine, de snelgang en de gereedschapswisseltijd, koelmiddel en het programmanummer.

## Gereedschappen

Het tabblad **Gereedschap** bevat de bibliotheek: vlakfrezen, bolfrezen en radiusfrezen, boren, afschuinfrezen en schijffrezen, elk met een T-nummer, diameter, aantal snijkanten en snijkantlengte (plus hoekradius, puntpunthoek of afschuinhoek waar die van toepassing zijn).

Mijn gereedschappen kunnen in de browser worden opgeslagen en als bestand tussen computers worden verplaatst: zie [De gereedschapsbibliotheek](topic:tool-library).

Toerental en aanzet komen uit het materiaal: n = 1000 × snijsnelheid / (π × diameter), aanzet = n × snijkanten × spaanbelasting (boren: n × aanzet per omwenteling). De getallen zijn conservatieve startwaarden uit gepubliceerde bereiken, niet afgestemd op uw machine; typ de snijsnelheid, spaanbelasting, omwentelingen of aanzet van uw gereedschapsfabrikant om ze te overschrijven. Als het toerental de maximale waarde van de machine overschrijdt, wordt het daar vastgehouden en volgt de aanzet, zodat de spaanbelasting gelijk blijft.

## Bewerkingen toevoegen

Elke knop op de werkbalk voegt een bewerking toe en, waar geometrie nodig is, begint het kiezen: klik op vlakken of randen in het beeld (klik opnieuw om er een te verwijderen), en dan {{ui:Kiezen gereed}} of {{key:Esc}}.

| Bewerking | Kiezen | Wat het doet |
|---|---|---|
| {{ui:Vlak}} | niets | Zigzaggangen over het hele ruwdeel, voorbij de randen, tot de bovenkant van het model |
| {{ui:Holte}} | een vlakke vloer, een rond gat, of een gesloten keten van randen | Ruimt het gebied in offsetgangen van binnen naar buiten, bij elke diepte-stap; eilanden (vlakken die omhoog staan binnen de vloer) blijven staan; een vloer die overal open is (niets hoger daarbuiten) wordt tot de rand van het ruwdeel geruimd |
| {{ui:Adaptief}} | hetzelfde als Holte | Ruimt hetzelfde gebied in gangen die elk een vaste breedte snijden (**Ingrijping**, een deel van de diameter), zodat de frees nooit een volle-breedte-gleuf neemt, ook niet in hoeken; het gaat in met een helix en werkt de wanden op elk niveau af. Smalle sneden staan een diepere stap en een hogere aanzet toe |
| {{ui:Contour}} | een vlak (de omtrek), een rond vlak, of randen | Volgt de omtrek, geoffset met de gereedschapsradius, buiten of binnen, met in- en uitloopbogen en optionele lipjes |
| {{ui:Boren}} | gaten (klik op de wand of de rand van een gat) | Boort elk gat met een vaste cyclus: peck (G83), boren (G81) of spaanbreken (G73); of geef een diameter op om elk gat van die maat te boren |
| {{ui:Afschuinen}} | de omtrek of randen van een vlak | Laat een afschuinfrees langs de rand lopen, zodat die de breedte snijdt die u instelt |
| {{ui:Evenwijdig}} | niets (het hele model) | 3D-afwerking in evenwijdige lijnen onder elke hoek, het oppervlak volgend met een bol-, radius- of vlakfrees. Zie [3D-afwerking](topic:finish-3d) |
| {{ui:Scallop}} | niets (het hele model) | 3D-afwerking in banen op een vaste afstand over het oppervlak, zodat de kam ertussen de hoogte heeft die u vraagt |

Selecteer een bewerking in de lijst om het gereedschap, de hoogtes (vrijloop, terugtrekking, aanzethoogte, boven, onder), de stapdiepte, de stapafstand, het over te laten materiaal, de afwerkgang, de instap (helix, helling of insteken), meefrezen, lipjes of de cyclus te wijzigen. {{ui:Omhoog}} en {{ui:Omlaag}} ordenen opnieuw, {{ui:Onderdrukken}} laat ze weg, {{ui:Verwijderen}} verwijdert ze. Alles staat in de geschiedenis van ongedaan maken en wordt in het onderdeelbestand bewaard.

De stapafstand van een holte is hoogstens de helft van de gereedschapsdiameter, zodat elk punt van de vloer binnen één gereedschapsradius van een gang ligt. Binnenhoeken behouden de radius van het gereedschap.

**Adaptief ruimen** houdt de ingrijping van de frees dicht bij één waarde. Een ingrijping van 0.15 van de diameter is een ingrijpingshoek van ongeveer 46°: de boog van de snijkant van de frees in het materiaal. Een offsetholte snijdt daarentegen op zijn eerste gang de volle breedte en draait verder rond in elke binnenhoek. Tussen gangen blijft het gereedschap neer waar het door snijlucht gaat, en komt het omhoog en gaat het weer neer in snijlucht elders. De gangen worden berekend op een fijn raster over het gebied (cellen van ongeveer een twaalfde van de gereedschapsradius), dus de ingrijping kan tot ongeveer één cel breder oplopen dan ingesteld; de wanden worden exact afgewerkt. Een groot open gebied geeft een lang programma met veel korte bewegingen.

## Simuleren

Freespaden worden na elke wijziging opnieuw berekend (dat geldt ook voor het onderdeel). {{ui:Simuleren}} toont ook het ruwdeel dat na het hele programma overblijft. Het paneel toont:

- **Cyclustijd**: aanzetbewegingen met hun aanzet, snelgangen als rechte lijnen tegen de snelgangsnelheid van de opstelling, plus de gereedschapswisseltijd. Echte machines versnellen, dus die doen er langer over.
- **Inkepingen**: plaatsen waar het gereedschap meer dan 0.02 mm onder het oppervlak van het onderdeel is gegaan. Rode markeringen tonen ze in het beeld.
- **Ruwdeel dat op het onderdeel overblijft**.

Het ruwdeel is een hoogtekaart van de bovenkant (een Z-kaart), dus het kan geen ondersnijdingen tonen. Sleep **Afspelen** om het gereedschap langs het programma te bewegen. In het beeld zijn aanzetbewegingen vol en snelgangen gestreept, in één kleur per bewerking.

Met **Het gesimuleerde ruwdeel tonen** aan, wordt het ruwdeel cel voor cel tegen het model gekleurd: **groen** waar het op het model zit (binnen 0.02 mm), **rood** waar het gereedschap in het model is gesneden, en waar nog ruwdeel op het model staat: **geel** voor een dunne laag, **oranje** voor meer, en overgaand naar het **grijs** van onbewerkt ruwdeel bij 1 mm of meer. De kleuren worden bij elke wijziging opnieuw berekend, uit dezelfde hoogtekaart als de getallen in het paneel, dus groen en rood komen overeen met de regel Inkepingen. Een afschuining snijdt bewust in het model en toont rood langs zijn rand.

## De G-code postprocessen

Kies de besturing onder **Postprocessor** en druk op {{ui:G-code downloaden}} (of {{ui:Postprocessor}} op de werkbalk):

| Besturing | Bestand | Opmerkingen |
|---|---|---|
| Fanuc-stijl ISO | .nc | %, O-nummer, regelnummers, T M6 met G43 H, vaste cycli |
| GRBL | .nc | Geen gereedschapswisselaar of vaste cycli: een gereedschapswissel pauzeert met M0, boren wordt als gewone bewegingen geschreven |
| LinuxCNC | .ngc | T M6 met G43 H, vaste cycli, M2 |
| Fanuc-stijl draaibank | .nc | Voor draaiprogramma's: X als diameter, aanzet per omwenteling, G96 onder een G50-limiet, G32 draadsnijden |
| LinuxCNC-draaibank | .ngc | Voor draaiprogramma's: G7-diameters, G95, G96, G33 draadsnijden; schrijft geen referentiebeweging |
| Eigen | elk | Een postprocessor die u zelf schreef of wijzigde: {{ui:Post bewerken…}}, {{ui:Nieuwe post…}}, {{ui:Postbestand importeren…}} |

Elk bestand begint met opmerkingen over het programma, het ruwdeel, het werknulpunt en de gereedschappen. Coördinaten staan in millimeters met 3 decimalen. {{ui:Freespad-CSV}} en {{ui:Freespad-JSON}} exporteren de bewegingen zelf.

**Controleer de uitvoer in de eigen simulator van uw machine voordat u snijdt, en laat het eerst in de lucht boven het ruwdeel lopen.** De drie ingebouwde postprocessors zijn startpunten die het gedocumenteerde gedrag van de besturingen volgen; ze zijn op geen enkele specifieke machine bewezen. Een postprocessor die u wijzigt is van u om te bewijzen. Hoe u er een schrijft: [Postprocessoren die u kunt bewerken](topic:post-processors).

## Exacte STEP voor de werkplaats

Onder de G-code-knoppen op het tabblad **Bewerkingen** downloadt {{ui:Exacte STEP (werkcoördinaten)}} `<part>-work.step`: het onderdeel als exact volume (echte cilinders voor gaten en bossen, echte cirkels als randen) met zijn oorsprong in het werknulpunt van deze opstelling en Z langs de gereedschapsas. Dat zijn de coördinaten die de G-code gebruikt, dus het eigen CAM-programma of de controle van een werkplaats lijnt het model uit op het programma zonder het te verplaatsen. Het bestand bevat alleen het onderdeel, niet het ruwdeel of de freespaden.

{{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} schrijft hetzelfde volume in de eigen positie van het onderdeel (Z omhoog): zie [Exporteren voor printen, STEP en DXF](topic:export-files#for-other-cad-programs-step).

## Beperkingen

- Holten, contouren, boren en afschuiningen zijn 2.5-assig. Gebogen onderdelen worden in 3D geruwd en afgewerkt door hun eigen bewerkingen ([3D ruwen en restbewerking](topic:rough-3d), [3D-afwerking](topic:finish-3d)). Adaptief ruimen is 2D (vlakke vloeren).
- Gekantelde gereedschappen, 5-assige en 4e-as-afwerking, draaien en tasten zijn er, elk met eigen beperkingen, en **geen daarvan is op een machine uitgevoerd**: zie [4- en 5-assige bewerking](topic:multi-axis), [Draaien op een draaibank](topic:turning) en [Tasten](topic:probing).
- Houders en schachten worden niet op botsingen gecontroleerd; er verschijnt een waarschuwing wanneer een snede dieper is dan de snijkantlengte.
- Aanzet en toerental zijn startwaarden. Een postprocessor is tekst die u kunt bewerken, maar ze bepaalt alleen hoe de bewegingen worden geschreven; ze kan het freespad niet wijzigen, geen assen toevoegen en uw machine niet kennen ([Postprocessoren die u kunt bewerken](topic:post-processors) somt op wat ze niet kan).

## Het programma naar een machine sturen

In CadCraft Studio op de desktop, met een machine ingesteld in Studio, verschijnt **Naar een machine sturen…** naast **G-code downloaden** en uploadt hetzelfde programma naar de machine op uw netwerk. Het wordt nooit vanuit PartCraft gestart: start het bij de machine wanneer het duidelijk is. In een browser wordt de knop niet getoond (een webpagina kan geen machine op uw netwerk bereiken): download het programma in plaats daarvan.
