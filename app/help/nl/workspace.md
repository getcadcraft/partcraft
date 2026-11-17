---
title: Het PartCraft-scherm
summary: Een rondleiding langs elke balk en elk paneel: de werkbalk en hoe die verandert, de geschiedenis, de onderdeelfeiten, de 3D-weergave, het eigenschappenpaneel en de statusbalk.
keywords: scherm, indeling, werkbalk, geschiedenis, kenmerkenboom, eigenschappen, paneel, statusbalk, interface, ui, rondleiding, volledig scherm
from: 5b5bb843
---

Het scherm heeft vijf delen: de werkbalk bovenaan, de geschiedenis links, de 3D-weergave in het midden, het eigenschappenpaneel rechts en de statusbalk onderaan. Boven alles staat de CadCraft-app-balk.

## De app-balk

De dunne balk helemaal bovenaan hoort bij de CadCraft-site, niet bij PartCraft zelf. Hij toont de naam van de app en waar die draait, een versiemenu, **Over PartCraft**, de knop voor de schermmodus en de schakelaar Papier / Model.

- **Papier** is donkere lijnen op een licht blad. **Model** is lichte lijnen op een donkere achtergrond. Schetskleuren volgen het thema.
- {{ui:Instellingen}} (het tandwiel, of {{key:Mod+,}}) heeft een tabblad {{ui:PartCraft}}: welke muisknop de weergave draait, muiswiel of touchpad, en relaties tijdens het schetsen. Zie [PartCraft-instellingen](topic:settings).
- De knop voor de schermmodus, of {{key:Ctrl+Shift+F}}, wisselt tussen normaal, volledig scherm en volledig scherm met verborgen balken. Met verborgen balken brengt u de aanwijzer naar de bovenrand (of tikt u daar) om ze terug te halen. {{key:Esc}} keert terug naar normaal. Deze toets is ook op een Mac {{key:Ctrl+Shift+F}}, niet ⌘.

## De werkbalk

De werkbalk is in groepen verdeeld. Hij verandert met wat u doet, zodat hij op één rij past:

| Groep | Knoppen | Getoond |
|---|---|---|
| Bestand | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}}, {{ui:Exporteren}} (een menu) | Altijd |
| Schets | {{ui:Schets}} | Wanneer geen schets open is |
| Schets | {{ui:Afsluiten}}, {{ui:Lijn}}, {{ui:Rechthoek}}, {{ui:Cirkel}}, {{ui:Boog}}, {{ui:Punt}}, {{ui:Hartlijn}}, {{ui:Afronden}}, {{ui:Maatvoering}}, {{ui:Hulpgeometrie}} | Alleen terwijl een schets open is |
| Kenmerken | {{ui:Extruderen}}, {{ui:Knippen}}, {{ui:Omwentelen}}, {{ui:Gat}}, {{ui:Lineair}}, {{ui:Cirkelvormig}}, {{ui:Spiegelen}}, {{ui:Afronden}}, {{ui:Afschuinen}}, {{ui:Uitholling}}, {{ui:Meer}} (een menu: Omwentelsnede, Vlak, As, Punt, {{ui:Uitvegen}}, {{ui:Loft}}, Trekhoek) | Op het onderdeel, niet terwijl een schets of de tekening open is. Afronden en Afschuinen werken op rechte randen tussen twee platte vlakken; Uitholling en Trekhoek op platte vlakken. Uitvegen en Loft zijn in deze versie nog niet gebouwd (ze hebben een exacte kernel nodig); klikken op een van beide zegt dat |
| Kenmerken | {{ui:Gereed}} | Alleen terwijl u randen of vlakken kiest voor een afronding, afschuining, uitholling of trekhoek |
| Tekening | {{ui:Tekening}} | Op het onderdeel (bruikbaar zodra het onderdeel een volume heeft) |
| Tekening | {{ui:Datum}}, {{ui:Tolerantie}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Terug}} | Alleen op het tekenblad |
| Samenstelling | {{ui:Samenstelling}} | Op het onderdeel (bruikbaar zodra het onderdeel een volume heeft) |
| Samenstelling | {{ui:Kopie toevoegen}}, {{ui:Invoegen}}, {{ui:Verbinding}}, {{ui:Clash}}, {{ui:Onderdeel bewerken}}, {{ui:Sluiten}} | Alleen in een samenstelling |
| Samenstelling | {{ui:Terug}} | Terwijl u een onderdeel bewerkt vanuit een samenstelling |
| Bewerken | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Meer}} (een menu: Knippen, Kopiëren, Plakken, Plakken op dezelfde plaats, Dupliceren, Verwijderen, Alles selecteren, Selectie opheffen) | Altijd; elk onderdeel werkt op de schets, de geschiedenis of de samenstelling waarin u zit |
| Weergave | {{ui:Passend maken}}, {{ui:Normaal op}}, {{ui:Weergaven}} (een menu: Meten, Massa-eigenschappen, Doorsnede, Trekhoek, Zebra, Kromming, {{ui:Basisvlakken}}, daarna Isometrisch, Voor, Terug, Boven, Onder, Rechts, Links) | Altijd |

Beweeg de aanwijzer over een knop om te zien wat hij doet en welke toets erbij hoort. Een grijze knop kan nu niet worden gebruikt: bijvoorbeeld de kenmerkknoppen terwijl een schets open is, of {{ui:Verbinding}} voordat de samenstelling twee onderdelen heeft.

Het menu {{ui:Meer}} in de groep Bewerken somt elke bewerkingsactie met zijn toets op. Waarop kopiëren en plakken werken, hangt af van waar u bent; zie [Kopiëren, plakken en dupliceren](topic:copy-paste). De infotekst van een grijs item zegt waarom het nu niet kan werken.

Het menu {{ui:Exporteren}} bevat {{ui:STL, voor 3D-printen}}, {{ui:3MF, voor 3D-printen}}, {{ui:STEP AP242 (exact volume)}}, {{ui:STEP AP214 (exact volume)}}, {{ui:STEP (gefacetteerd, meshkernel)}}, {{ui:STEP AP214 (gefacetteerd, mesh-kernel)}}, {{ui:DXF van de schets of het platte vlak}} en {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}}. De exacte STEP-items schrijven ronde vlakken op hun ware oppervlakken; de gefacetteerde schrijven ze als platte facetten.

## De geschiedenis (links)

Het paneel links is de kenmerkgeschiedenis van het onderdeel, de lijst die PartCraft van boven naar beneden opnieuw opbouwt.

- De kop is de naam van het onderdeel ("Part1" totdat u het hernoemt).
- **Voorvlak**, **Bovenvlak** en **Rechtervlak** staan eerst. Klik er een aan om hem te selecteren; hij licht op in de weergave.
- Daaronder staan uw kenmerken in de volgorde waarin ze zijn gemaakt. Een schets die een kenmerk gebruikt, staat ingesprongen onder dat kenmerk.
- Een vlaggetje aan het rechteruiteinde van een rij vertelt de status:

| Vlag | Betekenis |
|---|---|
| (geen) | Gebouwd, en een schets is volledig gedefinieerd |
| − | Een schets die onvolledig gedefinieerd is (hij kan nog bewegen) |
| + | Een schets die overgedefinieerd is |
| ⚠ | Gebouwd, met een waarschuwing (wijs aan om te lezen) |
| ⚠ fout | Het kenmerk is mislukt. Wijs aan om te lezen waarom, of klik erop |
| ⚠ niet gebouwd | Het kenmerk heeft een ander nodig dat mislukt of uit staat |
| uit | Onderdrukt |

- Elk kenmerk toont zijn belangrijkste getal na zijn naam, zoals "25 mm" bij een extrusie of "Ø6.6 thru" bij een gat. Dubbelklik op het getal, of druk op {{key:F2}} op de rij, om het daar te wijzigen. Zie [Maten wijzigen](topic:change-sizes).
- Klik op een kenmerk om het rechts te bewerken. Dubbelklik op een schets om hem te openen.
- Wanneer u terugdraait, staat een rij **Terugrolbalk · vooruit rollen** in de lijst. Kenmerken eronder zijn grijs en niet gebouwd.
- Met een rij gefocust verplaatsen {{key:Up}} en {{key:Down}} tussen rijen, en verplaatsen {{key:Alt+Up}} / {{key:Alt+Down}} het kenmerk zelf, waar de geschiedenis dat toelaat.

In een samenstelling toont hetzelfde paneel **Onderdelen** (het eerste is gemarkeerd als "vastgezet") en **Verbindingen**.

### Onderdeelfeiten

Onder de geschiedenis toont het vak **Onderdeel** het **Volume**, de **Oppervlakte**, de **Grootte (X × Y × Z)**, de **Doorlopende gaten**, de **Lichamen**, de **Driehoeken**, het aantal **Kenmerken** en hoeveel er **Mislukt** zijn. Volumes en oppervlakken zijn van het gefacetteerde massief dat de meshkernel bouwt, iets minder dan de werkelijke waarde voor ronde vormen (zie [Kenmerken en hun opties](topic:features#curves-resolution)).

In een samenstelling heet het vak **Samenstelling**: Onderdelen, Instanties, Verbindingen, Niet verbonden en Interferentie.

## De 3D-weergave (midden)

De weergave toont het volume, de basisvlakken en elke schets die nog niet door een kenmerk is gebruikt.

De basisvlakken worden volledig getekend zolang het onderdeel leeg is. Zodra het een volume heeft, gaan ze naar achteren: zwak getekend, zodat ze het onderdeel niet bedekken, en klikken gaan er doorheen naar het onderdeel. Ze komen weer volledig terug terwijl u kiest waar u wilt schetsen ({{ui:Schets}} zonder iets gekozen) en wanneer u er een selecteert in de geschiedenis. {{ui:Weergaven}} › {{ui:Basisvlakken}} verbergt ze helemaal; ze blijven zichtbaar terwijl u kiest waar u wilt schetsen. PartCraft onthoudt die keuze.

- Sleep om het onderdeel te draaien, rechts- of middelslepen om te verschuiven, het wiel rollen om in te zoomen op de aanwijzer. Details in [Toetsen en muis](topic:keyboard).
- Wijs een vlak, rand of basisvlak aan om het te zien oplichten. Klik om het te kiezen. Vlakken worden in hun geheel gemarkeerd, en randen worden in hun geheel getekend en gekozen. {{key:Shift}}+klik verzamelt meerdere randen of vlakken. Ze blijven gemarkeerd.
- De weergavekubus rechtsboven draait mee met het onderdeel: klik op een vlak, rand of hoek om vanaf daar te kijken, sleep om te draaien; de huisknop gaat terug naar het begin. Zie [De weergavekubus](topic:view-cube).
- Een geselecteerde extrusie toont een oranje pijl op zijn eindvlak, een omwenteling een gebogen pijl aan het eind van zijn draai: sleep die om de diepte of de hoek te wijzigen, of typ in het vakje ernaast. Zie [Maten wijzigen](topic:change-sizes#drag-it-in-the-view).
- Wanneer een onderdeel leeg is, toont een vak met de kop **Een onderdeel beginnen** de eerste stappen.
- Zet een `.partcraft.json`- of `.partcraft-asm.json`-bestand ergens op de weergave om het te openen. Een `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- of `.3dm`-bestand dat daar wordt neergezet, opent als volumelichaam.

### Terwijl u randen of vlakken kiest

Na {{ui:Afronden}}, {{ui:Afschuinen}} of {{ui:Uitholling}} zonder iets gekozen (of {{ui:Randen kiezen}} op zo'n kenmerk), toont het onderdeel zoals het was vóór dat kenmerk. Klik op randen of vlakken om ze toe te voegen of weg te halen; hun markeringen tonen wat erin zit. {{ui:Gereed}} of {{key:Esc}} rondt af. Zie [Afronden, afschuinen en uitholling](topic:fillet-chamfer-shell).

### Op het tekenblad

{{ui:Tekening}} vervangt de 3D-weergave door het A3-tekenblad. Het wiel zoomt, rechts- of middelslepen verschuift, {{key:F}} past het in het scherm. Zie [Een tekening maken](topic:drawing-pdf).

### Terwijl een schets open is

De weergave kijkt recht naar het schetsvlak en er verschijnt een 2D-schetslaag bovenop. Het onderdeel toont alleen de kenmerken die vóór deze schets zijn gemaakt. Een strook linksboven toont het statusblokje van de schets ("Volledig gedefinieerd", "Onvolledig gedefinieerd · 3 vrijheidsgraden" en zo verder) en zijn naam, zoals "Schets2 op een vlak van Extrude1".

## Het eigenschappenpaneel (rechts)

Het paneel rechts toont wat is geselecteerd, en de kop ervan noemt het:

- **Onderdeel** (niets geselecteerd): de **Naam** van het onderdeel en de instelling **Krommen**.
- Een vlak: een knop {{ui:Schets erop}}.
- Een **Vlak**: welk soort het is (Plat vlak, Cilinder met zijn straal en as, Kegel, Bol of Torus), zijn oppervlakte, welk kenmerk het maakte, en voor een plat vlak {{ui:Schets op dit vlak}}, {{ui:Normaal op}}, {{ui:Vlak exporteren als DXF}}, {{ui:Extruderen vanaf dit}}, {{ui:Snijden in dit}} en {{ui:Gat hier}} (zie [Een heel vlak trekken of duwen](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Een **Rand**: zijn soort (recht, een cirkel met zijn middelpunt en straal, of een kromme), zijn lengte en de twee vlakken waartussen hij ligt (zoals "Extrude1 eindvlak en Extrude1 zijvlak"), met de knoppen {{ui:Afronden}} en {{ui:Afschuinen}}.
- Meerdere randen of vlakken gekozen met {{key:Shift}}: hoeveel, met {{ui:Afronden}} en {{ui:Afschuinen}} voor randen, en {{ui:Wissen}}.
- Een kenmerk: zijn getallen en opties, de maten van zijn schets, dan {{ui:Onderdrukken}}, {{ui:Terugrollen naar hier}}, {{ui:Omhoog verplaatsen}}, {{ui:Omlaag verplaatsen}}, {{ui:Verwijderen}} en zijn **Naam**.
- Een open schets: zijn status, de relaties die u aan de selectie kunt toevoegen, de lijst van relaties en maten, **Toevoegen op coördinaten**, en {{ui:Schets afsluiten}}, {{ui:Passend maken}} en {{ui:Exporteren als DXF}}.
- Op het tekenblad: de instellingen voor doorsnede en detail, of het gekozen GD&T-symbool.
- In een samenstelling: de samenstelling, het gekozen onderdeel of de gekozen verbinding.

Elk getalvak wordt van kracht wanneer u op {{key:Enter}} of {{key:Tab}} drukt, of ergens anders klikt. Het onderdeel wordt meteen opnieuw opgebouwd; er is geen knop OK. Gebruik {{key:Mod+Z}} om terug te gaan.

## De statusbalk (onderaan)

- Links de coördinaten van de aanwijzer in de schets (alleen terwijl een schets open is).
- In het midden berichten: wat u hierna kunt doen, en waarom iets is geweigerd. Lees het wanneer er niets lijkt te gebeuren.
- Dicht bij het rechteruiteinde de kernelmarkering: in deze versie altijd "Meshkernel". Wijs erop voor wat dat betekent. Zie [De meshkernel](topic:solid-kernels).
- Rechts een markering: "Opnieuw opbouwen…" terwijl het onderdeel opnieuw wordt opgebouwd, dan "Opnieuw opgebouwd in … ms" wanneer alles goed is, of "1 kenmerk mislukt". In een samenstelling staat er "Geplaatst in … ms", of het telt verbindingsproblemen.

Zie ook [Een handleiding starten in Illustrate](topic:illustrate): de werkomgeving die samenstellingshandleidingen maakt van uw onderdelen en samenstellingen.

## Op een smal scherm

Tot 760 pixels breed, zoals op een telefoon, past de weergave zich aan het scherm aan: de werkbalk is één rij die zijwaarts scrolt, en de panelen openen als vellen vanuit een balk onderaan. {{ui:Gereedschappen}} verbergt de werkbalk en {{ui:Verplaatsen}} zet hem onderaan. Zie [Trackpad, aanraking en kleine schermen](topic:trackpad-and-touch).
