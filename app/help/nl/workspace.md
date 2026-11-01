---
title: Het PartCraft-scherm
summary: Een rondleiding door elke balk en elk paneel: de werkbalk en hoe die verandert, de geschiedenis, de onderdeelgegevens, de 3D-weergave, het eigenschappenpaneel en de statusbalk.
keywords: scherm, indeling, werkbalk, geschiedenis, featureboom, eigenschappen, paneel, statusbalk, interface, ui, rondleiding, volledig scherm
from: 7394fc49
---

Het scherm heeft vijf delen: de werkbalk bovenaan, de geschiedenis links, de 3D-weergave in het midden, het eigenschappenpaneel rechts en de statusbalk onderaan. Boven alles zit de CadCraft-appbalk.

## De appbalk

De smalle balk helemaal bovenaan hoort bij de CadCraft-site, niet bij PartCraft zelf. Hij toont de naam van de app en waar die draait, een versiemenu, **Over PartCraft**, de knop voor de schermmodus en de themaschakelaar Papier / Model.

- **Papier** is donkere lijnen op een licht blad. **Model** is lichte lijnen op een donkere achtergrond. De kleuren van schetsen volgen het thema.
- {{ui:Instellingen}} (het tandwiel, of {{key:Mod+,}}) heeft een tabblad {{ui:PartCraft}}: welke muisknop de weergave draait, muiswiel of trackpad, en relaties tijdens het schetsen. Zie [PartCraft-instellingen](topic:settings).
- De knop voor de schermmodus, of {{key:Ctrl+Shift+F}}, loopt door normaal, volledig scherm en volledig scherm met verborgen balken. Zijn de balken verborgen, beweeg dan de aanwijzer naar de bovenrand (of tik daar) om ze terug te halen. {{key:Esc}} keert terug naar normaal. Deze toets is ook op een Mac {{key:Ctrl+Shift+F}}, niet ⌘.

## De werkbalk

De werkbalk is gegroepeerd. Hij verandert met wat u doet, zodat hij op één rij past:

| Groep | Knoppen | Getoond |
|---|---|---|
| Bestand | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}}, {{ui:Exporteren}} (een menu) | Altijd |
| Schets | {{ui:Schets}} | Als er geen schets open is |
| Schets | {{ui:Afsluiten}}, {{ui:Lijn}}, {{ui:Rechthoek}}, {{ui:Cirkel}}, {{ui:Boog}}, {{ui:Punt}}, {{ui:Hartlijn}}, {{ui:Afronding}}, {{ui:Maatvoering}}, {{ui:Hulpgeometrie}} | Alleen terwijl een schets open is |
| Features | {{ui:Extruderen}}, {{ui:Uitsnijden}}, {{ui:Omwentelen}}, {{ui:Gat}}, {{ui:Lineair}}, {{ui:Cirkelvormig}}, {{ui:Spiegelen}}, {{ui:Afronden}}, {{ui:Afschuinen}}, {{ui:Uitholling}}, {{ui:Meer}} (een menu: Omwentelend uitsnijden, Referentievlak, Referentie-as, Referentiepunt, Uitvegen, Loft, Trekhoek) | Op het onderdeel, niet terwijl een schets of de tekening open is. Afronden en Afschuinen werken op rechte randen tussen twee platte vlakken; Uitholling en Trekhoek op platte vlakken. Uitvegen en Loft zijn in deze versie nog niet beschikbaar (ze hebben een exacte kernel nodig); een klik erop zegt dat |
| Features | {{ui:Gereed}} | Alleen terwijl u randen of vlakken kiest voor een afronding, afschuining, uitholling of trekhoek |
| Tekening | {{ui:Tekening}} | Op het onderdeel (bruikbaar zodra het onderdeel een volume heeft) |
| Tekening | {{ui:Datum}}, {{ui:Tolerantie}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Terug}} | Alleen op het tekenblad |
| Samenstelling | {{ui:Samenstelling}} | Op het onderdeel (bruikbaar zodra het onderdeel een volume heeft) |
| Samenstelling | {{ui:Kopie toevoegen}}, {{ui:Invoegen}}, {{ui:Verbinding}}, {{ui:Clash}}, {{ui:Onderdeel bewerken}}, {{ui:Sluiten}} | Alleen in een samenstelling |
| Samenstelling | {{ui:Terug}} | Terwijl u een onderdeel bewerkt vanuit een samenstelling |
| Bewerken | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Meer}} (een menu: Knippen, Kopiëren, Plakken, Op dezelfde plaats plakken, Dupliceren, Verwijderen, Alles selecteren, Selectie opheffen) | Altijd; elk item werkt op de schets, de geschiedenis of de samenstelling waarin u zit |
| Weergave | {{ui:Passend maken}}, {{ui:Loodrecht op}}, {{ui:Weergaven}} (een menu: Meten, Massa-eigenschappen, Doorsnede, Trekhoek, Zebra, Kromming, {{ui:Basisvlakken}}, daarna Isometrisch, Voor, Achter, Boven, Onder, Rechts, Links) | Altijd |

Houd de aanwijzer boven een knop om te zien wat hij doet en welke toets erbij hoort. Een grijze knop kan nu niet worden gebruikt: bijvoorbeeld de featureknoppen terwijl een schets open is, of {{ui:Verbinding}} voordat de samenstelling twee onderdelen heeft.

Het menu {{ui:Meer}} in de groep Bewerken toont elke bewerkingsactie met haar toets. Waarop kopiëren en plakken werken, hangt af van waar u bent; zie [Kopiëren, plakken en dupliceren](topic:copy-paste). De tooltip van een grijs item zegt waarom het nu niet kan.

Het menu {{ui:Exporteren}} bevat {{ui:STL, voor 3D-printen}}, {{ui:3MF, voor 3D-printen}}, {{ui:STEP AP242 (exact volume)}}, {{ui:STEP AP214 (exact volume)}}, {{ui:STEP (gefacetteerd, meshkernel)}}, {{ui:STEP AP214 (gefacetteerd, mesh-kernel)}}, {{ui:DXF van de schets of het platte vlak}} en {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}}. De twee exacte STEP-items zijn grijs: ze zijn in deze versie nog niet beschikbaar, gebruik dus {{ui:STEP (gefacetteerd, meshkernel)}}.

## De geschiedenis (links)

Het paneel links is de featuregeschiedenis van het onderdeel, de lijst die PartCraft van boven naar beneden opnieuw opbouwt.

- De kop is de naam van het onderdeel ("Onderdeel1" totdat u het hernoemt).
- **Voorvlak**, **Bovenvlak** en **Rechtervlak** komen eerst. Klik op een vlak om het te selecteren; het licht op in de weergave.
- Daaronder staan uw features in de volgorde waarin ze zijn gemaakt. Een schets die door een feature wordt gebruikt, staat ingesprongen onder die feature.
- Een vlag aan het eind van een rij vertelt de toestand ervan:

| Vlag | Betekenis |
|---|---|
| (geen) | Opgebouwd, en een schets is volledig gedefinieerd |
| − | Een schets die onvolledig gedefinieerd is (hij kan nog bewegen) |
| + | Een schets die overgedefinieerd is |
| ⚠ | Opgebouwd, met een waarschuwing (houd de aanwijzer erboven om die te lezen) |
| ⚠ fout | De feature is mislukt. Houd de aanwijzer erboven om de reden te lezen, of klik erop |
| ⚠ niet opgebouwd | De feature heeft een andere nodig die is mislukt of uit staat |
| uit | Onderdrukt |

- Elke feature toont zijn hoofdgetal achter zijn naam, zoals "25 mm" bij een Extrusie of "Ø6.6 thru" bij een gat. Dubbelklik op het getal, of druk op {{key:F2}} op de rij, om het ter plekke te wijzigen. Zie [Maten wijzigen](topic:change-sizes).
- Klik op een feature om die rechts te bewerken. Dubbelklik op een schets om hem te openen.
- Als u terugrolt, staat er een rij **Terugrolbalk · vooruit rollen** in de lijst. Features eronder zijn grijs en niet opgebouwd.
- Met een rij in focus verplaatsen {{key:Up}} en {{key:Down}} tussen rijen, en {{key:Alt+Up}} / {{key:Alt+Down}} verplaatsen de feature zelf, waar de geschiedenis dat toelaat.

In een samenstelling toont hetzelfde paneel in plaats daarvan **Onderdelen** (het eerste is gemarkeerd als "vast") en **Verbindingen**.

### Onderdeelgegevens

Onder de geschiedenis toont het vak **Onderdeel** het **Volume**, de **Oppervlakte**, het **Formaat (X × Y × Z)**, de **Doorgaande gaten**, de **Lichamen**, de **Driehoeken**, het aantal **Features** en hoeveel er **Mislukt** zijn. Volumes en oppervlakten gelden voor het gefacetteerde volume dat de meshkernel opbouwt, bij ronde vormen een beetje onder de ware waarde (zie [Features en hun opties](topic:features#curves-resolution)).

In een samenstelling heeft het vak de kop **Samenstelling**: Onderdelen, Exemplaren, Verbindingen, Niet verbonden en Interferentie.

## De 3D-weergave (midden)

De weergave toont het volume, de basisvlakken en elke schets die nog niet door een feature is gebruikt.

De basisvlakken worden volledig getekend zolang het onderdeel leeg is. Zodra het een volume heeft, treden ze terug: ze worden vaag getekend, zodat ze het onderdeel niet bedekken, en klikken gaan er dwars doorheen naar het onderdeel. Ze komen volledig terug terwijl u kiest waar u schetst ({{ui:Schets}} met niets gekozen) en wanneer u er een selecteert in de geschiedenis. {{ui:Weergaven}} › {{ui:Basisvlakken}} verbergt ze helemaal; ze worden nog getoond terwijl u kiest waar u schetst. PartCraft onthoudt die keuze.

- Sleep om het onderdeel te draaien, sleep met rechts of midden om te verschuiven, rol aan het wiel om te zoomen bij de aanwijzer. Details in [Toetsen en muis](topic:keyboard).
- Houd de aanwijzer boven een vlak, rand of referentievlak om het te zien oplichten. Klik om het te kiezen. Vlakken lichten als geheel op en randen worden als geheel getekend en gekozen. {{key:Shift}}+klik verzamelt meerdere randen of vlakken. Ze blijven gemarkeerd.
- De weergavekubus rechtsboven draait met het onderdeel mee: klik op een vlak, rand of hoek om vanaf daar te kijken, sleep hem om te draaien, de huisknop gaat terug naar het begin. Zie [De weergavekubus](topic:view-cube).
- Een geselecteerde Extrusie toont een oranje pijl op zijn eindvlak, een Omwenteling een gebogen pijl aan het eind van zijn draaiing: sleep hem om de diepte of de hoek te wijzigen, of typ in het vak ernaast. Zie [Maten wijzigen](topic:change-sizes#drag-it-in-the-view).
- Als een onderdeel leeg is, noemt een kader met de kop **Een onderdeel beginnen** de eerste stappen.
- Zet een bestand `.partcraft.json` of `.partcraft-asm.json` ergens op de weergave neer om het te openen. Een bestand `.step`, `.stp`, `.stl`, `.obj`, `.3mf` of `.3dm` dat daar wordt neergezet, opent als volumelichaam.

### Terwijl u randen of vlakken kiest

Na {{ui:Afronden}}, {{ui:Afschuinen}} of {{ui:Uitholling}} met niets gekozen (of {{ui:Randen kiezen}} bij zo'n feature) toont het onderdeel zich zoals het was vóór die feature. Klik op randen of vlakken om ze toe te voegen of te laten vallen; hun markeringen tonen wat erbij hoort. {{ui:Gereed}} of {{key:Esc}} maakt af. Zie [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell).

### Op het tekenblad

{{ui:Tekening}} vervangt de 3D-weergave door het A3-tekenblad. Het wiel zoomt, slepen met rechts of midden verschuift, {{key:F}} maakt passend. Zie [Een tekening maken](topic:drawing-pdf).

### Terwijl een schets open is

De weergave draait zodat u recht op het schetsvlak kijkt en een 2D-schetslaag verschijnt erbovenop. Het onderdeel toont alleen de features die vóór deze schets zijn gemaakt. Een strook linksboven toont de toestandschip van de schets ("Volledig gedefinieerd", "Onvolledig gedefinieerd · 3 vrijheidsgraden" enzovoort) en zijn naam, zoals "Schets2 op een vlak van Extrusie1".

## Het eigenschappenpaneel (rechts)

Het paneel rechts toont wat geselecteerd is en de kop ervan noemt het:

- **Onderdeel** (niets geselecteerd): de **Naam** van het onderdeel en de instelling **Krommen**.
- Een vlak: een knop {{ui:Erop schetsen}}.
- Een **Vlak**: wat voor soort het is (Plat vlak, Cilinder met zijn straal en as, Kegel, Bol of Torus), de oppervlakte, welke feature het heeft gemaakt, en bij een plat vlak {{ui:Schets op dit vlak}}, {{ui:Loodrecht op}}, {{ui:Vlak exporteren als DXF}}, {{ui:Extruderen vanaf dit}}, {{ui:Snijden in dit}} en {{ui:Gat hier}} (zie [Een heel vlak trekken of duwen](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Een **Rand**: de soort (recht, een cirkel met zijn middelpunt en straal, of een kromme), de lengte en de twee vlakken waartussen hij ligt (zoals "Extrusie1 eindvlak en Extrusie1 zijkant"), met knoppen {{ui:Afronden}} en {{ui:Afschuinen}}.
- Meerdere randen of vlakken gekozen met {{key:Shift}}: hoeveel, met {{ui:Afronden}} en {{ui:Afschuinen}} voor randen, en {{ui:Wissen}}.
- Een feature: zijn getallen en opties, de maten van zijn schets, daarna {{ui:Onderdrukken}}, {{ui:Terugrollen naar hier}}, {{ui:Omhoog verplaatsen}}, {{ui:Omlaag verplaatsen}}, {{ui:Verwijderen}} en zijn **Naam**.
- Een open schets: zijn toestand, de relaties die u aan de selectie kunt toevoegen, de lijst met relaties en maten, **Toevoegen op coördinaten**, en {{ui:Schets afsluiten}}, {{ui:Passend maken}} en {{ui:Exporteren als DXF}}.
- Op het tekenblad: de instellingen voor doorsnede en detail, of het geselecteerde GD&T-symbool.
- In een samenstelling: de samenstelling, het geselecteerde onderdeel of de geselecteerde verbinding.

Elk getalvak werkt zodra u op {{key:Enter}} of {{key:Tab}} drukt, of wegklikt. Het onderdeel wordt meteen opnieuw opgebouwd; er is geen OK-knop. Gebruik {{key:Mod+Z}} om terug te gaan.

## De statusbalk (onderaan)

- Links de coördinaten van de aanwijzer in de schets (alleen terwijl een schets open is).
- In het midden berichten: wat u hierna moet doen en waarom iets is geweigerd. Lees dit als er niets lijkt te gebeuren.
- Rechts in de buurt de kernelchip: in deze versie altijd "Meshkern". Houd de aanwijzer erboven voor wat dat betekent. Zie [De meshkernel](topic:solid-kernels).
- Rechts een chip: "Opnieuw bouwen…" terwijl het onderdeel opnieuw wordt opgebouwd, daarna "Opnieuw gebouwd in … ms" als alles goed is, of "1 feature mislukt". In een samenstelling staat er "Geplaatst in … ms" of telt hij verbindingsproblemen.

Zie ook [Een handleiding beginnen in Illustrate](topic:illustrate): de werkomgeving die uit uw onderdelen en samenstellingen handleidingen voor samenstellingen maakt.

## Op een smal scherm

Tot 760 pixels breed, zoals op een telefoon, behoudt de weergave het scherm: de werkbalk is één rij die opzij schuift en de panelen openen als bladen vanaf een balk onderaan. {{ui:Gereedschap}} verbergt de werkbalk en {{ui:Verplaats}} zet hem onderaan. Zie [Trackpad, aanraking en kleine schermen](topic:trackpad-and-touch).
