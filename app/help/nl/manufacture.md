---
title: Freespaden en G-code maken (Fabricage)
summary: Voorraad en werknulpunt instellen, gereedschap kiezen, bewerkingen toevoegen (vlak, holte, contour, boren en afschuinen) door vlakken aan te wijzen, het hele model in 3D afwerken (evenwijdig, scallop), de voorraad tegen het model simuleren op beschadigingen en cyclustijd, en G-code downloaden van een van de drie ingebouwde postprocessors of een die u zelf bewerkt.
keywords: exacte step, step voor de werkplaats, werkcoördinaten, cam-overdracht, evenwijdig, scallop, 3d-afwerking, afwerking, kogelfrees, gereedschapsbibliotheek, postprocessor bewerken, eigen postprocessor, postprocessor-editor, adaptief, adaptief ruimen, constante ingrijping, trochoïdaal, hsm, hogesnelheidsbewerking, fabricage, CAM, freespad, G-code, NC, CNC, frezen, holte, contour, profiel, vlakfrezen, boren, peck, G83, G81, G73, afschuinen, voorraad, werknulverschuiving, G54, postprocessor, GRBL, LinuxCNC, voeding en snelheden, simulatie, beschadiging, cyclustijd
from: beeb29aa
---

De werkomgeving Fabricage zet het onderdeel om in freespaden voor een 3-assige freesmachine en schrijft die als G-code. De meeste bewerkingen zijn **2.5-as**: het gereedschap blijft verticaal, wanden worden recht naar beneden gefreesd en bodems vlak. **Evenwijdig** en **Scallop** werken gebogen oppervlakken in 3D af (zie [3D-afwerking](topic:finish-3d)); het gereedschap blijft ook dan verticaal (drie assen, zonder kantelen). Het werkt op de benoemde vlakken die de meshkernel van het onderdeel geeft (zie [De meshkernel](topic:solid-kernels)).

Labversie: controleer elk programma in de eigen simulator van uw besturing, en voer het eerst in de lucht boven de voorraad uit.

## Instellen

1. Kies **Fabricage** in de werkomgevingschakelaar, en klik dan op {{ui:Nieuwe opstelling}}.
2. Kies op het tabblad **Opstelling**:
   - **Gereedschapsas (+Z)**: welke kant het gereedschap op het onderdeel wijst. Wereld +Y (omhoog in PartCraft) is de standaard; machine-X is dan wereld-X en machine-Y is wereld −Z.
   - **Werknulpunt (G54)**: een hoek of het midden van de voorraad, boven of onder, het bovenmidden van het model, of de oorsprong van het model.
   - **Voorraad**: een blok of een cilinder, hetzij het model plus marges (zijkanten, boven, onder), hetzij een vaste maat.
   - **Materiaal** (stelt de startvoeding en -snelheden in), de **Postprocessor** (besturing), het maximale spiltoerental van de machine, de snelle verplaatsingssnelheid en de gereedschapswisseltijd, het koelmiddel en het programmanummer.

## Gereedschap

Het tabblad **Gereedschap** bevat de bibliotheek: vingerfrezen, kogelfrezen, bull-nose-frezen, boren, afschuinfrezen en vlakfrezen, elk met een T-nummer, diameter, aantal spiraalgroeven en lengte van de spiraalgroeven (plus hoekradius, puntof afschuinhoek waar die van toepassing zijn).

Mijn gereedschap kan in de browser worden opgeslagen en als bestand tussen computers worden verplaatst: zie [De gereedschapsbibliotheek](topic:tool-library).

Spiltoerental en voeding komen uit het materiaal: n = 1000 × snijsnelheid / (π × diameter), voeding = n × aantal snijkanten × spaanbelasting (boren: n × voeding per omwenteling). De getallen zijn voorzichtige startwaarden uit gepubliceerde bereiken, niet afgestemd op uw machine; typ de snijsnelheid, spaanbelasting, rpm of voeding van uw gereedschapsfabrikant om ze te overschrijven. Gaat het toerental boven het maximum van de machine, dan blijft het daarop en volgt de voeding, zodat de spaanbelasting gelijk blijft.

## Bewerkingen toevoegen

Elke knop op de werkbalk voegt een bewerking toe en, waar die geometrie nodig heeft, begint met aanwijzen: klik op vlakken of randen in de weergave (klik opnieuw om er een te laten vallen), en daarna op {{ui:Kiezen gereed}} of {{key:Esc}}.

| Bewerking | Aanwijzen | Wat het doet |
|---|---|---|
| {{ui:Vlak}} | niets | Zigzaggende gangen over de hele voorraad, voorbij de randen, tot aan de bovenkant van het model |
| {{ui:Holte}} | een vlakke bodemvlak, een rond gat, of een gesloten keten van randen | Ruimt het gebied op in offsetgangen van binnen naar buiten, bij elke diepte-stap; eilanden (vlakken die binnen de bodem omhoog staan) blijven staan; een bodem die rondom open is (niets hoger buiten) wordt tot de rand van de voorraad uitgefreesd |
| {{ui:Adaptief}} | hetzelfde als Holte | Ruimt hetzelfde gebied op in gangen die elk een vaste breedte snijden (**Ingrijping**, een breuk van de diameter), zodat de frees nooit een sleuf over de volle breedte neemt, ook niet in hoeken; ze gaat in met een helix en werkt de wanden af op elk niveau. Smalle sneden staan een diepere stap en een hogere voeding toe |
| {{ui:Contour}} | een vlak (zijn contour), een rond vlak, of randen | Volgt de contour, verschoven met de gereedschapsstraal, naar buiten of binnen, met instap- en uitstapbogen en optionele lipjes |
| {{ui:Boren}} | gaten (klik op de wand of de rand van een gat) | Boort elk gat met een vaste cyclus: peck (G83), boren (G81) of spaanbreuk (G73); of geef een diameter op om elk gat van die maat te boren |
| {{ui:Afschuinen}} | de contour of randen van een vlak | Laat een afschuinfrees langs de rand lopen, zodat die de breedte snijdt die u instelt |
| {{ui:Evenwijdig}} | niets (het hele model) | 3D-afwerking in evenwijdige lijnen onder elke hoek, die het oppervlak volgen met een kogel-, bull-nose- of vingerfrees. Zie [3D-afwerking](topic:finish-3d) |
| {{ui:Scallop}} | niets (het hele model) | 3D-afwerking in gangen op een vaste afstand over het oppervlak, zodat de rand ertussen de hoogte heeft die u vraagt |

Selecteer een bewerking in de lijst om het gereedschap, de hoogtes (vrijloop, terugtrekken, aanzethoogte, boven, onder), de stap per diepte, de overlap, de voorraad die u laat staan, de afwerkgang, de instap (helix, helling of insteken), meefrezen, lipjes of cyclus te wijzigen. {{ui:Omhoog}} en {{ui:Omlaag}} ordenen opnieuw, {{ui:Onderdrukken}} laat de bewerking weg, {{ui:Verwijderen}} verwijdert ze. Alles staat in de geschiedenis van ongedaan maken en wordt in het onderdeelbestand opgeslagen.

De overlap van een holte is hooguit de helft van de gereedschapsdiameter, zodat elk punt van de bodem binnen één gereedschapsstraal van een gang ligt. Binnenhoeken houden de straal van het gereedschap.

**Adaptief ruimen** houdt de ingrijping van de frees dicht bij één waarde. Een ingrijping van 0.15 van de diameter is een ingrijphoek van ongeveer 46°: de boog van de rand van de frees in het materiaal. Een offsetholte snijdt daarentegen op de eerste gang de volle breedte en draait in elke binnenhoek verder rond. Tussen de gangen blijft het gereedschap neer waar het door snijlucht beweegt, en gaat het omhoog en omlaag in snijlucht elders. De gangen worden berekend op een fijn raster over het gebied (cellen van ongeveer een twaalfde van de gereedschapsstraal), dus de ingrijping kan tot ongeveer één cel breder worden dan ingesteld; de wanden worden exact afgewerkt. Een groot open gebied levert een lang programma met veel korte bewegingen op.

## Simuleren

Freespaden worden na elke wijziging opnieuw gemaakt (het onderdeel ook). {{ui:Simulate}} toont ook de voorraad die na het hele programma overblijft. Het paneel toont:

- **Cyclustijd**: voedingsbewegingen met hun voeding, snelle bewegingen als rechte lijnen tegen de snelle verplaatsingssnelheid van de opstelling, plus de gereedschapswisseltijd. Echte machines versnellen, dus zij doen er langer over.
- **Beschadigingen**: plekken waar het gereedschap meer dan 0.02 mm onder het oppervlak van het onderdeel ging. Rode markeringen tonen ze in de weergave.
- **Voorraad die op het onderdeel blijft**.

De voorraad is een hoogtekaart van de bovenkant (een Z-map), dus die kan geen ondersnijdingen tonen. Sleep {{ui:Afspelen}} om het gereedschap langs het programma te bewegen. In de weergave zijn voedingsbewegingen doorgetrokken en snelle bewegingen gestippeld, met één kleur per bewerking.

Met **Gesimuleerde voorraad tonen** aan, wordt de voorraad per cel tegen het model gekleurd: **groen** waar die op het model zit (binnen 0.02 mm), **rood** waar het gereedschap in het model sneed, en waar voorraad op het model blijft: **geel** voor een dunne laag, **oranje** voor meer, verlopend naar het **grijs** van ongefreesde voorraad bij 1 mm of meer. De kleuren worden bij elke wijziging opnieuw gemaakt, uit dezelfde hoogtekaart als de getallen in het paneel, dus groen en rood komen overeen met de regel Beschadigingen. Een afschuining snijdt bewust in het model en toont rood langs haar rand.

## G-code via de postprocessor

Kies de besturing onder **Postprocessor** en druk op {{ui:Download G-code}} (of {{ui:Postprocessor}} op de werkbalk):

| Besturing | Bestand | Opmerkingen |
|---|---|---|
| Fanuc-stijl ISO | .nc | %, O-nummer, regelnummers, T M6 met G43 H, vaste cycli |
| GRBL | .nc | Geen gereedschapswisselaar of vaste cycli: een gereedschapswissel pauzeert met M0, boren wordt als gewone bewegingen geschreven |
| LinuxCNC | .ngc | T M6 met G43 H, vaste cycli, M2 |
| Eigen | elk | Een postprocessor die u zelf schreef of wijzigde: {{ui:Post bewerken…}}, {{ui:Nieuwe post…}}, {{ui:Postbestand importeren…}} |

Elk bestand begint met opmerkingen over het programma, de voorraad, de werknulverschuiving en het gereedschap. Coördinaten staan in millimeters met 3 decimalen. {{ui:Freespad-CSV}} en {{ui:Freespad-JSON}} exporteren de bewegingen zelf.

**Controleer de uitvoer in de eigen simulator van uw machine voordat u snijdt, en voer het eerst in de lucht boven de voorraad uit.** De drie ingebouwde postprocessors zijn startpunten die het gedocumenteerde gedrag van de besturingen volgen; ze zijn op geen enkele machine bewezen. Een postprocessor die u wijzigt, moet u zelf bewijzen. Hoe u er een schrijft: [Postprocessors](topic:post-processors).

## Exacte STEP voor de werkplaats

Onder de G-code-knoppen op het tabblad **Bewerkingen** downloadt {{ui:Exacte STEP (werkcoördinaten)}} `<onderdeel>-work.step`: het onderdeel als exact volume (echte cilinders voor gaten en bossen, echte cirkels voor hun randen), met zijn oorsprong op het werknulpunt van deze opstelling en Z langs de gereedschapsas. Dat zijn de coördinaten die de G-code gebruikt, dus het eigen CAM-programma of de controle van een werkplaats lijnt het model op het programma uit zonder het te verplaatsen. Het bestand bevat alleen het onderdeel, niet de voorraad of de freespaden.

{{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} schrijft hetzelfde volume op de eigen positie van het onderdeel (Z omhoog): zie [Exporteren voor printen, STEP en DXF](topic:export-files#for-other-cad-programs-step).

## Beperkingen

- Holten, contouren, boren en afschuinen zijn 2.5-as. Gebogen vlakken kunnen in 3D worden afgewerkt ([evenwijdig en scallop](topic:finish-3d)), maar niet in 3D voorgefreesd (een kegel blijft als trappen staan tot u hem afwerkt), en er is geen restbewerking. Adaptief ruimen is 2D (vlakke bodems).
- Alleen drie assen: geen kantelen, geen draaien, geen inspectie.
- Houders en schachten worden niet op botsingen gecontroleerd; er verschijnt een waarschuwing als een snede dieper is dan de lengte van de spiraalgroeven.
- Voedingen en snelheden zijn startwaarden. Een postprocessor is tekst die u kunt bewerken, maar die bepaalt alleen hoe de bewegingen worden geschreven; hij kan het freespad niet wijzigen, geen assen toevoegen of uw machine kennen ([Postprocessors](topic:post-processors) somt op wat hij niet kan).

## Het programma naar een machine sturen

In CadCraft Studio op de desktop, met een in Studio ingestelde machine, verschijnt **Naar een machine sturen…** naast **Download G-code** en uploadt hetzelfde programma naar de machine op uw netwerk. Het wordt nooit vanuit PartCraft gestart: start het bij de machine als de opstelling duidelijk is. In een browser wordt de knop niet getoond (een webpagina kan geen machine op uw netwerk bereiken): download het programma in plaats daarvan.
