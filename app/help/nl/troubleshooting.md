---
title: Problemen oplossen
summary: Problemen die u in PartCraft kunt tegenkomen, van de app die niet start tot features die mislukken, schetsen die niet oplossen, bestanden die niet openen en verbindingen die zich vreemd gedragen, met de melding die u ziet en de oplossing.
keywords: probleem, fout, help, werkt niet, faalt, mislukt, vastlopen, leeg, webgl, webassembly, kernel, nog niet beschikbaar, overgedefinieerd, open profiel, kan niet openen, er gebeurt niets, verkeerde richting, traag
from: 7728542c
---

Als iets niet werkt, lees dan eerst de **statusbalk** onderaan: PartCraft zegt daar waarom het iets heeft geweigerd of wat het hierna verwacht. Een feature die mislukt, toont zijn melding ook bovenaan zijn rechterpaneel en wanneer u over zijn rij in de geschiedenis beweegt.

## De app start niet

### "Deze browser kan geen 3D tonen (WebGL is uit of ontbreekt), dus PartCraft kan hier niet draaien."

**Oorzaak:** de browser heeft 3D-graphics (WebGL) uitgeschakeld, geblokkeerd of niet ondersteund door het grafische stuurprogramma.

**Oplossing:**

:::chromium
Open `chrome://settings/system` (of `edge://settings/system` in Edge) en schakel "Hardwareversnelling gebruiken indien beschikbaar" in, en start daarna de browser opnieuw. Staat het al aan, controleer dan `chrome://gpu` op de WebGL-status, en werk uw grafische stuurprogramma bij.
:::

:::firefox
Open `about:support` en kijk bij Graphics, WebGL. Als het is geblokkeerd, werk dan het grafische stuurprogramma bij. In `about:config` moet `webgl.disabled` op `false` staan.
:::

:::safari
WebGL staat altijd aan in de actuele Safari. Werk macOS bij (Safari wordt daarmee bijgewerkt). Als het nog steeds faalt, probeer dan Chrome of Firefox op dezelfde Mac om de grafische hardware uit te sluiten.
:::

Externe bureaubladen en sommige virtuele machines hebben geen WebGL. Probeer het op de computer zelf.

### "De volumekernel is niet geladen: …"

**Oorzaak:** de geometriekernel (een WebAssembly-programma) kon niet worden opgehaald of gestart. Meestal viel de verbinding weg terwijl de app laadde, is WebAssembly uitgeschakeld door een bedrijfsbeleid of een beveiligingsinstelling van de browser, of is de browser erg oud.

**Oplossing:** laad de pagina opnieuw terwijl u online bent. Blijft het falen, probeer dan een andere actuele browser. In Firefox moet `javascript.options.wasm` in `about:config` op `true` staan. Offline laden de app en de kernel alleen als de appbalk **Klaar voor offline gebruik** zei voordat u de verbinding verloor ({{ui:Opslaan voor offline gebruik}} terwijl u online bent; zie [Offline werken](common:offline)).

### De offlineknop zegt "Kon niet opslaan" of "Offline niet beschikbaar"

**Kon niet opslaan**: sommige bestanden zijn niet gedownload. Klik erop om het opnieuw te proberen terwijl u online bent; een trage of databeperkte verbinding heeft misschien een tweede poging nodig. **Offline niet beschikbaar**: dit browservenster kan geen offlinekopie bewaren (privévensters en sommige beheerde computers blokkeren dat). Gebruik een gewoon venster, of houd het tabblad open.

### PartCraft is offline maar verouderd

Klik terwijl u online bent op **Klaar voor offline gebruik** en kies {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}}.

### "Uitvegen: nog niet beschikbaar. Er is een exacte kernel nodig, …"

De volledige melding is "<Naam>: nog niet beschikbaar. Er is een exacte kernel nodig, die deze versie van PartCraft niet heeft. Help › Wat nog niet beschikbaar is zegt wat u in plaats daarvan kunt doen." U ziet die wanneer u Uitvegen, Loft, Rib, een plaatwerkflens, een oppervlaktefeature, Combineren, Lichaam verplaatsen, Lichaam schalen of Padpatroon kiest, en voor de andere dingen waarvoor alleen een exacte kernel werkt. Er is niets mis met uw browser of uw onderdeel: deze versie van PartCraft bouwt elk onderdeel met de meshkernel. Zie [Wat nog niet beschikbaar is](topic:not-built-yet) voor wat u in plaats daarvan kunt doen, en [De meshkernel](topic:solid-kernels).

### "Volumekernel laden…" gaat nooit weg

Wacht even bij een trage verbinding: de kernel en de 3D-bibliotheek worden de eerste keer gedownload. Laad daarna opnieuw. Als de pagina zelf een fout toont, zie hierboven.

## Er gebeurt niets wanneer ik op een toets druk

- Toetsen werken niet terwijl de cursor in een vak in een paneel staat. Klik in de 3D-weergave of druk na het typen op {{key:Esc}} (of {{key:Tab}} om het vak te verlaten).
- De pijltjestoetsen en {{key:Plus}}/{{key:Minus}} draaien en zoomen de weergave pas nadat u in de weergave hebt geklikt.
- Er is een dialoogvenster geopend: beantwoord dat eerst.
- In een schets is {{key:F}} het gereedschap Afronden, niet Passend maken. Gebruik de knop {{ui:Passend maken}}.

## Een werkbalkknop is grijs

- Featureknoppen zijn grijs terwijl een schets open is. Sluit eerst de schets.
- Schetsgereedschappen werken alleen binnen een schets.
- {{ui:Ongedaan maken}} en {{ui:Opnieuw}} zijn grijs wanneer er niets is om ongedaan te maken of opnieuw te doen.
- {{ui:Samenstelling}} heeft een onderdeel met een volume nodig. {{ui:Verbinding}} heeft twee onderdelen in de samenstelling nodig. {{ui:Onderdeel bewerken}} heeft een geselecteerd onderdeel nodig.
- {{ui:STEP AP242 (exact volume)}} en {{ui:STEP AP214 (exact volume)}} zijn grijs in een samenstelling: exporteer elk onderdeel afzonderlijk. Een ander programma weigert het exacte bestand: probeer {{ui:STEP AP214 (exact volume)}}, en daarna {{ui:STEP (gefacetteerd, meshkernel)}}, en laat het ons weten via {{ui:Help}} › {{ui:Een probleem melden}}.
- {{ui:Uitvegen}}, {{ui:Loft}} en de andere features die een exacte kernel nodig hebben zijn niet grijs: ze blijven klikbaar, hun infoteksten eindigen met "nog niet beschikbaar (heeft een exacte kernel nodig)", en klikken erop zegt dat in de statusbalk. Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
- {{ui:Tekening}} heeft een onderdeel met een volume nodig, en is grijs terwijl een schets open is.
- {{ui:Exporteren}}-items zijn grijs in een samenstelling: samenstellingen kunnen nog niet worden geëxporteerd. Sluit deze, of bewerk een onderdeel, om te exporteren.

## Problemen met schetsen

### De schets staat het toevoegen van een relatie niet toe

"Geen relatie past bij deze selectie. Selecteer één of twee items (Shift+klik voegt toe)." De relatie heeft een andere selectie nodig. Zie [Schetsrelaties en maten](topic:sketch-relations) voor wat elke relatie nodig heeft.

### "Overgedefinieerd: … kunnen niet allemaal worden voldaan. Ongedaan maken, of verwijder er één."

**Oorzaak:** de nieuwe relatie of maat spreekt de bestaande tegen. De schets is niet verplaatst.

**Oplossing:** {{key:Mod+Z}}, of verwijder een van de rode items in de lijst van het rechterpaneel (kies **Verwijderen** ernaast).

### "Overgedefinieerd: … is al impliciet. Verwijder het."

**Oorzaak:** de relatie voegt niets toe: andere leggen die al vast (bijvoorbeeld Evenwijdig op twee zijden van een rechthoek, of een maat die al vastligt). Er zijn in deze build geen gestuurde maten.

**Oplossing:** verwijder het. De feature wordt toch gebouwd, met een waarschuwing.

### "Die items kunnen niet samen van een maat worden voorzien."

U klikte bijvoorbeeld op een punt en een cirkel. Geef in plaats daarvan een maat op het middelpunt van de cirkel.

### "Een afronding heeft een hoek nodig waar precies twee lijnen samenkomen." / "Die straal is te groot voor deze lijnen."

Klik precies op het hoekpunt van twee volle lijnen. Gebruik een kleinere straal dan de kortere lijn toelaat.

### De geometrie springt terug wanneer u die sleept

De sleep zou een relatie of maat breken, dus PartCraft zet het terug. Alleen blauwe (onderbepaalde) geometrie kan bewegen.

### "Deze schets kan niet openen: vereist Extrude2, dat faalt."

De schets ligt op een vlak van een feature die niet is gebouwd. Los eerst die feature op, of hef de onderdrukking op, of ga vooruit in de geschiedenis.

## Problemen met features

| Melding | Oorzaak | Oplossing |
|---|---|---|
| "Maak eerst een schets: kies een vlak, Schets, teken een gesloten profiel, Schets verlaten." | Geen ongebruikte schets met krommen, en er is er geen geselecteerd | Teken een schets, of selecteer de schets om te gebruiken in de geschiedenis |
| "De schets heeft geen gesloten profiel om te extruderen." (of "om te omwentelen") | Geen gesloten lus van volle lijnen | Sluit de gaten; zet hulplijnen terug met {{key:Q}} |
| "Het profiel is open: een uiteinde bij (x, y) is aan niets verbonden." | Een opening op dat punt | Open de schets, sleep het uiteinde op zijn buur zodat het snapt |
| "Het profiel vertakt zich bij (x, y): er komen meer dan twee uiteinden samen." | Drie of meer lijnen komen samen in één punt | Verwijder de extra lijn, of zet die om naar hulplijn |
| "Een gesloten lus heeft minstens drie zijden of een kromme nodig." | Twee lijnen heen en weer | Teken de lus opnieuw |
| "Door alles is voor uitsnijdingen. Gebruik een diepte voor een uitsteeksel." | Een uitsteeksel ingesteld op Door alles | Zet Einde op Blind of Middenvlak |
| "Er valt aan die kant van de schets niets te snijden. Probeer de andere richting." | De uitsnijding wijst weg van het materiaal | Vink Richting omkeren aan |
| "Er valt nog niets te snijden." / "Er valt nog niets te boren." | Geen volume vóór deze feature | Maak eerst een uitsteeksel, of verplaats de feature omlaag |
| "Teken een middellijn (een hulplijn) in de schets om omheen te wentelen." | Omwentelen zonder as | Voeg een middellijn toe, of kies een lijn bij As |
| "Het profiel kruist de as. Houd het aan één kant van de middellijn." | Profiel aan beide kanten van de as | Teken de helft van het profiel opnieuw |
| "Plaats schetspunten waar de gaten komen (gereedschap Punt), maak daarna het gat." | Geen losse punten in de schets | Voeg punten toe met {{key:P}} |
| "De verzinking moet breder zijn dan het gat." | Verzinking-⌀ niet groter dan Diameter | Maak de verzinking breder |
| "De verzinking moet ondieper zijn dan het gat." | Verzinking dieper dan een blind gat | Maak die ondieper, of het gat dieper |
| "Kies de features om te kopiëren." | Een patroon of spiegeling zonder aangevinkte items | Vink een feature aan onder Features om te kopiëren |
| "Extrude2 heeft geen volume om te kopiëren." | De gekopieerde feature is mislukt of uit | Los hem op of hef de onderdrukking op |
| "Vereist Sketch3, dat faalt." | Een feature waarvan het afhangt is niet gebouwd | Los de feature op die het noemt |
| "Het vlak waarop het ligt is weg (Extrude1 is niet gebouwd)." | Het vlak van de schets bestaat niet meer | Los die feature op, of verwijder de schets en teken opnieuw |
| "Er blijft niets over van het onderdeel hierna." | Een uitsnijding heeft al het materiaal verwijderd | Controleer de maat en richting van de uitsnijding |
| "De volumekernel kon dit niet bouwen (…)." of "De volumekernel kon dit niet combineren met het lichaam." | De kernel weigerde de geometrie | Ongedaan maken, of verander de maten iets; vlakken die elkaar precies raken kunnen dit veroorzaken |
| "Uitvegen: nog niet beschikbaar. Er is een exacte kernel nodig, die deze versie van PartCraft niet heeft." (ook Loft, Rib en de andere) | Een feature gemaakt in een eerdere build die alleen een exacte kernel kan bouwen. Ze blijft in de geschiedenis en wordt ongewijzigd teruggeschreven | Onderdruk of verwijder die; zie [Wat nog niet beschikbaar is](topic:not-built-yet) voor wat u in plaats daarvan kunt doen |
| "Een afronding van 5 mm past hier niet (…)." / "Een afschuining van 2 mm …" | De maat is te groot voor een vlak naast de rand, of de hoek kan niet vloeiend worden afgerond | Kleinere maat, of minder randen per feature |
| "Afronding: in deze versie alleen rechte randen tussen twee vlakke vlakken (de meshkernel bouwt ze). Rond gebogen randen af of schuin ze af in de schets." (ook Afschuining) | Een gekozen rand is rond, zoals de rand van een gat, of ligt op een gebogen vlak | {{ui:Randen kiezen}} en verwijder die; rond die hoek af of schuin hem af in de schets |
| "Een afronding waarvan de straal langs de rand verandert: nog niet beschikbaar (er is een exacte kernel voor nodig). Geef er één straal aan." | **Variabele straal** is aangevinkt | Vink die uit en geef één straal op |
| "Afronding door de meshkernel: waar afgeronde randen samenkomen, worden ze geverstekt, niet vloeiend overgaand." (⚠, een waarschuwing) | Gekozen randen komen samen in een hoek; de ronding komt daar samen in een scherpe knik | Niets te repareren: het onderdeel is gebouwd. Rond minder randen af als de knik belangrijk is |
| "Een rand die het afrondt is weg: de rand tussen Extrude1 en Cut2." | Een eerdere wijziging heeft de rand verwijderd | {{ui:Randen kiezen}}, verwijder de rode rand, kies de nieuwe |
| "Kies de randen in de weergave en voeg ze daarna toe." | De afronding of afschuining heeft geen randen | {{ui:Randen kiezen}} |
| "Kies de vlakken om te verwijderen (open), en maak daarna een uitholling." | De uitholling heeft geen open vlakken | {{ui:Vlakken kiezen}} |
| "De uitholling kon niet worden gemaakt met deze dikte (…)." | De wand is dikker dan een dun deel van het model of een afrondingsstraal | Een dunnere wand, of grotere afrondingen |
| "Uitholling: in deze versie opent het alleen vlakke vlakken (de meshkernel bouwt het)." | Een open vlak is gekromd | {{ui:Vlakken kiezen}} en verwijder het; open alleen vlakke vlakken |
| "Trekhoek: in deze versie alleen vlakke vlakken (de meshkernel bouwt het)." | Een getrokken vlak is een cilinder, kegel of vrij vlak | Verwijder het; trek alleen vlakke vlakken |
| "Een vlak dat het opent is weg (…)." | Een eerdere wijziging heeft het vlak verwijderd | {{ui:Vlakken kiezen}} opnieuw |
| "Fillet1 wijzigt de randen of wanden van het lichaam; het kan niet worden gekopieerd. …" | Een patroon of spiegeling kopieert een afronding, afschuining of uitholling | Vink die uit; maak eerst de patronen van de uitsnijdingen, daarna de afronding |
| "Het ligt op een vlak dat alleen een exacte kernel kan vinden: nog niet beschikbaar in deze versie." | Een schets op een vlak dat de meshkernel niet kan vinden, zoals een gemaakt in een eerdere build | Schets op een basisvlak of een vlak van een extrusie, en plaats hem met maten |
| "Het gebruikt een vlak of rand van het volume, die alleen een exacte kernel kan vinden: nog niet beschikbaar in deze versie." | Een referentievlak, as of punt op een vlak of rand van het volume | Maak het vanaf basisvlakken, schetspunten of coördinaten |
| "Extruderen tot een vlak, het volgende vlak of een hoekpunt: nog niet beschikbaar (er is een exacte kernel voor nodig)." / "Een taps toelopend: nog niet beschikbaar (er is een exacte kernel voor nodig)." | Een eindvoorwaarde of taps toelopend die alleen een exacte kernel bouwt | Gebruik een Blind- of Middenvlak-diepte die u meet; laat Taps toelopend op 0 staan |

## Problemen met kiezen

- "Dat vlak is gekromd. Kies een vlak of een basisvlak om op te schetsen." Schetsen hebben een vlak oppervlak nodig. Schets in plaats daarvan op een basisvlak en plaats de schets met maten.
- Een vlak zegt "Vast waar gekozen": het is niet gemaakt door een schetsrand (bijvoorbeeld een vlak van een patroonkopie), dus een schets erop blijft op zijn plaats wanneer het onderdeel verandert.
- Randen zijn moeilijk te raken: zoom in. Een rand wint het van het vlak ernaast wanneer de aanwijzer er precies op staat.

## Problemen met bestanden

| Melding | Oplossing |
|---|---|
| 'PartCraft opent zijn eigen .partcraft.json-bestanden, exports van de CadCraft-macro voor SolidWorks (.cadcraft-sw.json) en STEP-bestanden. "bracket.igs" is geen van deze.' | Alleen die bestanden worden herkend (en STL-, OBJ- en 3MF-meshes en `.3dm`-bestanden) |
| '"part.stp" is geen STEP-bestand (het begint niet met ISO-10303-21).' | Het bestand is geen STEP-tekst |
| "Dat STEP-bestand is te groot (meer dan 60 MB) om hier te importeren." | Vereenvoudig het aan de bron |
| "Dat bestand is te groot om een PartCraft-onderdeel te zijn." bij uw eigen opgeslagen onderdeel | Een groot STEP-volume dat in een eerdere build is geïmporteerd, maakte het onderdeelbestand groter dan 50 MB. Gebruik een eerdere kopie zonder dat volume |
| "Dat bestand is te groot om een PartCraft-onderdeel te zijn." | Het bestand is groter dan 50 MB; het is geen PartCraft-bestand |
| "Dit is geen PartCraft-bestand (het is geen JSON)." / "Dit is geen PartCraft-bestand." | Het bestand is beschadigd of van een ander programma |
| "Dit bestand is opgeslagen door een nieuwere PartCraft (bestandsversie …); deze leest versie …" | Open het in de nieuwere PartCraft |
| "Extrude2: de diepte is ongeldig." (of een andere waarde) | Het bestand is met de hand bewerkt of beschadigd. Gebruik een eerdere kopie |
| Invoegen in een samenstelling zegt "Part1.partcraft.json heeft geen volume om in te voegen." | Het onderdeelbestand heeft geen volume. Open het, bouw een volume, sla op, en voeg opnieuw in |

**Uw opgeslagen bestand staat niet waar u verwachtte.** Opslaan is een download: kijk in de downloadmap van uw browser, of open de lijst met downloads via de werkbalk van de browser. Zie [Waar uw bestanden terechtkomen](common:your-files).

**U hebt een onderdeel geopend, maar de samenstelling staat nog op het scherm.** Het onderdeel is achter de samenstelling geladen. Kies {{ui:Sluiten}} om de samenstelling te sluiten en het onderdeel te zien. Sluit samenstellingen voordat u onderdeelbestanden opent.

## Problemen met tekeningen

| Melding | Oplossing |
|---|---|
| "Bouw eerst een volume, maak daarna de tekening ervan." | Bouw eerst het onderdeel |
| "Geen ruimte op het blad voor: detail. Maak het detail kleiner of laat een aanzicht weg." | Kleinere **Detailstraal** of **Detailschaal**, of verwijder de doorsnede |
| "Een detail wordt genomen uit het voor-, boven-, rechter- of doorsnede-aanzicht." | Klik op een van die aanzichten |
| "Klik op een van de aanzichten." | De klik was op leeg papier |
| "Positie heeft minstens één datumverwijzing nodig." en andere meldingen van het kader | Stel de datums in die het paneel vraagt, of kies een ander kenmerk |
| "De tekeningaanzichten konden niet worden gemaakt: …" | Maak de laatste wijziging ongedaan. Als het blijft gebeuren, sla op, laad opnieuw en open het onderdeel opnieuw |

## Problemen met samenstellingen

| Melding | Oplossing |
|---|---|
| "Bouw eerst een volume, plaats het daarna in een samenstelling." | Het onderdeel heeft nog geen volume |
| "Voeg eerst een tweede onderdeel in (Kopie toevoegen, Invoegen, of Bewerken › Dupliceren)." | Een verbinding heeft twee onderdelen nodig |
| "Kies een vlak op een ander onderdeel." | Beide vlakken van een verbinding moeten op verschillende onderdelen liggen |
| "Dat vlak is gekromd. Kies een vlak …" | Verbindingen beginnen bij vlakke vlakken. Gebruik daarna **Centreren op** voor een gat- of omwentelingsas |
| "Bracket2 is niet verbonden met het vastgezette onderdeel, dus het blijft waar het is geplaatst." | Voeg een verbinding toe van dat onderdeel naar een onderdeel dat is geplaatst |
| "Revolute3 sluit een lus die niet kan sluiten: hij is 2.000 mm uit. Controleer de vlakken, offsets en grenzen van de verbindingen van de lus." | De onderdelen kunnen niet allemaal samenkomen: controleer de lengtes, de vlakken die elke verbinding gebruikt, offsets (onderdelen die vlak op vlak zijn gestapeld moeten in diepte overeenkomen) en grenzen; of verwijder één verbinding van de lus |
| "Het vlak dat deze verbinding gebruikt is verdwenen uit Bracket." / "De as die deze verbinding gebruikt is verdwenen uit Bracket." | Het onderdeel is bewerkt. Verwijder de verbinding en maak hem opnieuw |
| "De as loopt langs het vlak, dus die kan het middelpunt van de verbinding niet bepalen." | Kies een as die het vlak kruist, of "De eigen oorsprong van het vlak" |
| "Een samenstelling houdt minstens één onderdeel. Sluit hem in plaats daarvan." | Gebruik {{ui:Sluiten}} |

**De onderdelen zijn verbonden maar op de verkeerde plek.** Stel **Centreren op** voor beide kanten van de verbinding in op de gaten of omwentelingsassen die op elkaar moeten liggen, en pas daarna **Hoek (°)** en **Offset (mm)** aan.

## Het is traag

- Zet **Curves** op Normaal of Grof terwijl u modelleert; schakel over op Fijn voor u exporteert.
- Grote aantallen in een patroon (honderden kopieën) kosten tijd om bij elke wijziging opnieuw te bouwen. Onderdruk het patroon terwijl u aan andere features werkt.
- Clash en de bewegingscontrole vergelijken elk paar onderdelen; grote samenstellingen duren langer.
- Sluit andere zware tabbladen. PartCraft draait op de processor en de grafische kaart van uw eigen computer.

## Nog steeds vast

Sla eerst uw bestand op ({{key:Mod+S}}), laad daarna de pagina opnieuw en open het opnieuw. Faalt een feature nog steeds, selecteer het, lees de melding, en probeer met {{key:Mod+Z}} terug te gaan naar de laatste goede toestand.
