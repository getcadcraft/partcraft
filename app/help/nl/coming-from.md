---
title: Vanuit een andere parametrische modeler
summary: Hoe de gewoonten van parametrische onderdeelmodelleerprogramma's voor op de desktop zich verhouden tot PartCraft, en de verschillen die ervaren gebruikers in het eerste uur struikelen.
keywords: overstappen, migreren, vertrouwd, featurebeheer, ontwerpboom, slimme maat, toevoegende extrusie, uitsnijdende extrusie, gatenwizard, koppelingen, interferentiedetectie, terugrolbalk, eigenschappenbeheer, muis, verschillen
from: fbacaee1
---

Als u onderdelen in SolidWorks ontwerpt, zullen de meeste ideeën van PartCraft u bekend voorkomen: schetsen op de vlakken Voor, Boven en Rechts, relaties en slimme maten, een featuregeschiedenis met een terugrolbalk, en samenstellingen die met koppelingen zijn geplaatst. De manier waarop u er komt verschilt op een paar plekken, en deze eerste build doet minder. Deze pagina koppelt uw gewoonten aan PartCraft en somt de verrassingen op.

## Gewoonten, in kaart gebracht

| U bent gewend aan | In PartCraft |
|---|---|
| De ontwerpboom links | De geschiedenis links: vlakken, dan features, schetsen ingesprongen onder de feature die ze gebruikt |
| Voor-, Boven- en Rechtervlak | Dezelfde drie, door de oorsprong. Voor is het XY-vlak, Boven is XZ, Rechts is YZ; Y wijst omhoog |
| Schets op een vlak of oppervlak, dan de bevestigingshoek om af te sluiten | {{ui:Schets}} ({{key:S}}) op een geselecteerd vlak of plat vlak; {{ui:Afsluiten}} of {{key:Esc}} tot hij sluit |
| Slimme maat | {{ui:Maatvoering}} ({{key:D}}). Klik op één of twee items, en dan waar het getal komt. Waar u het plaatst, kiest u horizontaal, verticaal of uitgelijnd |
| Relaties toevoegen in het eigenschappenpaneel | Selecteer items, en dan de relatieknoppen in het rechterpaneel (Samenvallend, Horizontaal, Evenwijdig, Raaklijn, Gelijk enzovoort) |
| Automatische relaties tijdens het schetsen | Snaps voegen samenvallende, punt-op-kromme-, horizontale en verticale relaties toe |
| Blauw / zwart / rood schetskleuren | Hetzelfde idee: blauw onvolledig bepaald, zwart volledig bepaald, rood overbepaald. Het chipje toont de nog resterende vrijheidsgraden |
| Hartlijn voor omwentelingen | {{ui:Hartlijn}} ({{key:N}}); {{ui:Omwentelen}} gebruikt de eerste hartlijn, tenzij u een andere as kiest |
| Schetsafronding | {{ui:Afronden}} ({{key:F}}) in een schets: klik op de hoek, typ de straal |
| Schakelaar hulpgeometrie | {{ui:Hulpgeometrie}} ({{key:Q}}) |
| Geëxtrudeerde opbouw | {{ui:Extruderen}}: Blind, Middenvlak, Tot vlak / volgende / hoekpunt, Offset vanaf vlak, tweede richting, taps, één contour (Gebieden kiezen) |
| Geëxtrudeerde uitsnijding | {{ui:Uitsnijden}}: begint als **Door alles**; schakel naar Blind voor een holte |
| Omwentelde opbouw / uitsnijding | {{ui:Omwentelen}} / {{ui:Meer}} › {{ui:Omwentelend uitsnijden}} |
| Referentievlak / as / punt | {{ui:Meer}} › {{ui:Vlak}}, {{ui:As}}, {{ui:Punt}} (zie [Referentievlakken, assen en punten](topic:reference-geometry)) |
| Uitgeveegde / geloftde opbouw of uitsnijding, trekhoek | {{ui:Meer}} › {{ui:Trekhoek}} op platte vlakken (zie [Uitvegen, loft en trekhoek](topic:sweep-loft-draft)). {{ui:Uitvegen}} en {{ui:Loft}} zijn in deze versie nog niet beschikbaar (ze hebben een exacte kernel nodig) |
| Gatenwizard | {{ui:Gat}} op elk los schetspunt: eenvoudig, verzonken boring, verzinking (90° / 82°) of getapt ISO-metrisch M2–M24, door of blind |
| Lineair / cirkelvormig patroon, spiegelen | {{ui:Lineair}}, {{ui:Cirkelvormig}}, {{ui:Spiegelen}} (features of het hele lichaam) |
| Afronding en afschuining op randen | {{ui:Afronden}} / {{ui:Afschuinen}}: klik op een rand, {{key:Shift}}+klik voor meer, en dan de knop. Eén straal; gelijke, twee-afstands- of afstand-hoek-afschuiningen. In deze versie alleen rechte randen tussen twee platte vlakken; afrondingen die in een hoek samenkomen, worden in verstek gezet. Rond of schuin gebogen randen af in de schets ({{ui:Afronden}} in een schets, {{key:F}}) |
| Uitholling | {{ui:Uitholling}}: klik op de platte vlakken om te openen, en dan de knop. Eén wanddikte |
| Een STEP-bestand openen | {{ui:Openen}}: wordt als driehoeken gelezen, een volumelichaam om op te bouwen ([Een STEP-bestand openen](topic:import-step)) |
| Feature bewerken, dan OK | Klik op de feature; wijzig de getallen rechts; hij wordt opnieuw opgebouwd terwijl u typt. Geen OK, geen Annuleren: gebruik {{key:Mod+Z}} |
| Schets bewerken | Dubbelklik op de schets in de geschiedenis |
| Opnieuw opbouwen | Automatisch na elke wijziging. Er is geen sneltoets voor opnieuw opbouwen |
| Onderdrukken / onderdrukking opheffen | {{ui:Onderdrukken}} / {{ui:Onderdrukking opheffen}} in het rechterpaneel |
| De terugrolbalk slepen | {{ui:Terugrollen naar hier}} op een feature; klik op "Terugrolbalk · vooruit rollen" om terug te keren |
| Een feature in de boom slepen om te herordenen | {{ui:Omhoog verplaatsen}} / {{ui:Omlaag verplaatsen}} of {{key:Alt+Up}} / {{key:Alt+Down}}; geweigerd met de reden als het een afhankelijkheid zou breken |
| Maten bewerken door op het model te dubbelklikken | Selecteer de feature: de maten van zijn schets staan in het rechterpaneel |
| Koppelingen: samenvallend, concentrisch, afstand, hoek | {{ui:Verbinding}} ({{key:J}}): kies een plat vlak op elk onderdeel; de verbinding zet ze vlak tegen vlak. **Centreer op** een as werkt als concentrisch; **Offset** als afstand; **Hoek** als hoek |
| Vast onderdeel | Het eerste onderdeel is vast; {{ui:Maak het het vaste onderdeel}} verandert dat |
| Component invoegen | {{ui:Kopie toevoegen}} of {{ui:Dupliceren}} (nog een kopie) of {{ui:Invoegen}} (uit een onderdeelbestand) |
| Onderdeel in de samenstelling bewerken | {{ui:Onderdeel bewerken}}, dan {{ui:Terug}} |
| Interferentiedetectie | {{ui:Clash}} |
| Een component verplaatsen om de beweging te zien | Sleep de schuifregelaar voor hoek of offset van een scharnierende of schuivende verbinding; {{ui:Controleer de beweging op botsingen}} doorloopt hem. Een onderdeel zonder verbinding: **Met de hand verplaatsen** (pijlen om te slepen, of getypte waarden) |
| Meten / inspecteren | {{ui:Weergaven}}, dan {{ui:Meten}} ({{key:M}}): afstanden, hoeken, stralen, oppervlakten; {{ui:Massa-eigenschappen}} |
| Explosieweergave, stuklijst | In een samenstelling zonder selectie: **Explosieweergaven** en **Stuklijst** in het rechterpaneel |
| Massa-eigenschappen | Het vak **Onderdeel**: volume, oppervlakte, afmeting, van het gefacetteerde volume (bij ronde onderdelen iets laag). Geen massa: er zijn nog geen materialen |
| Opslaan, opslaan als STEP | {{ui:Opslaan}} downloadt een `.partcraft.json`; {{ui:Exporteren}} heeft STL, 3MF, exacte STEP (AP242 of AP214), gefacetteerde STEP, DXF en een PDF-tekening |
| Een tekening maken van het onderdeel | {{ui:Tekening}}: een automatisch A3-blad met drie aanzichten, isometrisch, één doorsnede, één detail, referenties, tolerantiekaders en oppervlaktesymbolen. Alleen de totale afmetingen krijgen een maat |
| Middelknop slepen om te draaien | **Links slepen** draait hier. Middel- of rechts slepen verschuift. Het wiel zoomt bij de aanwijzer |
| Weergaveoriëntatie, Normaal op | Menu {{ui:Weergaven}}; {{ui:Normaal op}} voor een gekozen vlak, referentievlak of schets |
| Passend maken (F) | {{key:F}}, of {{ui:Passend maken}} (in een schets is {{key:F}} het gereedschap Afronden) |
| Rechtermuisknopmenu's | Geen. Rechts slepen verschuift; in een schets beëindigt rechtsklikken een lijnketen |

:::tip
Als uw handen SolidWorks kennen, kies dan de menustijl {{ui:Featureboom}} in {{ui:Instellingen}} › {{ui:PartCraft}} › {{ui:Menu's, toetsen en muis}}: een lint met de tabbladen Features, Schets, Oppervlakken, Evalueren, Tekening, Samenstelling en Weergave; de middelste knop draait om het model, {{key:Shift}} en de middelste knop verschuiven, en de linkerknop kiest alleen. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).
:::

## Verschillen waar mensen over struikelen

**De hele schets is het profiel.** Extrusie en omwenteling gebruiken elke gesloten lus in de schets. U kunt voor een feature niet één gebied of één contour van een schets kiezen. Gebruik één schets per feature.

**Welke schets een feature neemt.** Een feature gebruikt de schets die u net hebt afgesloten, of de schets die in de geschiedenis is geselecteerd. Zonder selectie neemt hij de nieuwste schets die nog door geen feature wordt gebruikt. Krijgt u de verkeerde, selecteer dan de juiste schets en kies de feature opnieuw.

**Wijzigingen worden direct toegepast.** Er is geen featuredialoog met OK en Annuleren. Elk getal bouwt meteen opnieuw op, en {{key:Mod+Z}} is de weg terug. De lijst voor ongedaan maken dekt schetsbewerkingen, features en instellingen even goed.

**Overbepaald wordt nooit stilzwijgend toegestaan.** Er zijn geen aangestuurde (referentie)maten. Een maat die de andere relaties al vastleggen, wordt gemeld als overbepaald ("is al impliciet bepaald. Verwijder hem."). Een conflicterende maat laat de geometrie ongemoeid en wordt rood. Verwijder er één, of maak ongedaan.

**Uitvegen en loft zijn nog niet beschikbaar; afrondingen, afschuiningen, uitholling en trekhoeken hebben beperkingen.** Deze versie van PartCraft bouwt elk onderdeel met een mesh-kernel; het chipje in de statusbalk zegt altijd "Mesh-kernel". Afrondingen en afschuiningen werken op rechte randen tussen twee platte vlakken, en waar afrondingen in een hoek samenkomen, worden ze in verstek gezet, niet vloeiend verbonden. Uitholling opent, en trekhoeken kantelen, alleen platte vlakken. Features die een exacte kernel nodig hebben blijven klikbaar, maar zeggen "nog niet beschikbaar" als ze worden gekozen. Zie [De mesh-kernel](topic:solid-kernels) en [Wat nog niet beschikbaar is](topic:not-built-yet).

**Twee knoppen die Afronden heten.** In een schets rondt {{ui:Afronden}} ({{key:F}}) een schetshoek af. Op het onderdeel rondt de {{ui:Afronden}} in de groep Features volumeranden af (in deze versie rechte randen tussen platte vlakken). Er is in deze versie geen uitvegen of loft: zie [Wat nog niet beschikbaar is](topic:not-built-yet).

**Gaten hebben losse punten nodig.** {{ui:Gat}} boort op punten die met het gereedschap Punt zijn gemaakt. Middelpunten van cirkels en lijneindpunten tellen niet mee.

**Door alles is alleen voor uitsnijdingen.** Een opbouw heeft een diepte nodig. Er zijn nog geen eindcondities "tot hoekpunt / oppervlak / volgende".

**Het volume is gefacetteerd.** De mesh-kernel bouwt ronde vlakken uit platte facetten, dus de weergave, volumes, STL- en 3MF-exports bestaan er allemaal uit: **Curven** in het paneel van het onderdeel maakt ze fijner. De exacte STEP-export niet: die schrijft ronde vlakken op hun echte oppervlakken.

**Alleen millimeters.** Er is nog geen inch-instelling. Vermenigvuldig inchmaten met 25.4 wanneer u ze typt.

**Y wijst omhoog.** Het Voorvlak kijkt naar u en Boven kijkt op het onderdeel neer, zoals u verwacht, maar de omhoogas van de wereld is Y. STL-, 3MF- en exacte STEP-exports worden met Z omhoog gedraaid; de gefacetteerde STEP houdt Y omhoog.

**Koppelingen zijn vlakken, geen geometriepaaren.** Een verbinding begint altijd met twee platte vlakken die vlak tegen vlak liggen. Voor een pen in een gat kiest u het platte vlak rond het gat en de schouder van de pen, en zet u daarna **Centreer op** op de as van het gat en de as van de omwenteling van de pen. Onderdelen die niet door verbindingen worden bereikt, blijven waar ze zijn ingevoegd; u kunt ze niet slepen. Verbindingen in een lus worden niet opgelost.

**Opslaan is een download.** Er is geen bestand dat u steeds overschrijft. Elke keer dat u opslaat, is er een nieuw bestand in uw downloadmap. Geef het onderdeel eerst een naam en houd uw bestanden in een projectmap.

**Geen contextmenu's, geen tabbladen voor commandobeheer.** Alles staat op de werkbalk en in het rechterpaneel, en de werkbalk verandert met wat u doet: de schetshulpmiddelen verschijnen alleen in een schets, de samenstellingshulpmiddelen alleen in een samenstelling.

**Sneltoetsen zijn losse letters in een schets.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} en {{key:S}} kiezen gereedschappen zonder modificatietoets. Zie [Toetsen en muis](topic:keyboard).
