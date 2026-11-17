---
title: Instellingen van PartCraft
summary: Kies welke muisknop het beeld draait, zorg dat een swipe op het trackpad het beeld draait en verschuift, zet automatische beperkingen tijdens het schetsen aan of uit, en stel in hoeveel threads de simulatiesolvers gebruiken.
keywords: instellingen, voorkeuren, opties, muis, middelste knop, wielknop, draaien, roteren, trackpad, touchpad, scrollen, vegen, knijpen, beperkingen, automatisch beperken, automatische beperkingen, snap, samenvallend, threads, solver-threads, cores, processors, multi-threaded, sneller oplossen, parallel
from: 759edcaf
---

Open {{ui:Instellingen}} met het tandwiel in de app-balk of met {{key:Mod+,}}. Het eerste tabblad, {{ui:PartCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat de instellingen die elke CadCraft-app gedeeld heeft (thema, werkbalk, paneelen). De instellingen van PartCraft gelden alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze. {{ui:Instellingen van PartCraft opnieuw instellen}} zet alles terug op het begin.

## Het beeld draaien

- **Linkerknop** (de start): sleep met de linkerknop om het onderdeel te draaien; sleep met de rechter- of middelste knop om te verschuiven.
- **Middelste knop**: druk op het wiel en sleep om het onderdeel te draaien; houd {{key:Shift}} (of {{key:Ctrl}}, of ⌘) ingedrukt met de middelste knop, of sleep met de rechterknop, om te verschuiven. De linkerknop kiest alleen vlakken, randen en vlakken, dus een klik die een beetje beweegt draait het onderdeel nooit. Veel CAD-programma's werken zo.

Het wiel zoomt in beide gevallen naar de aanwijzer. In een schets verschuiven de rechter- en middelste knop zoals voorheen.

## Scrollen: muiswiel of trackpad

- **Zelf bepalen** (de start): PartCraft let op het scrollen. Zijdelings of fijn scrollen, zoals een trackpad stuurt, draait het onderdeel; hele wieltikken zoomen.
- **Muiswiel**: scrollen zoomt altijd naar de aanwijzer.
- **Trackpad**: veeg met twee vingers om het onderdeel te draaien, houd {{key:Shift}} ingedrukt en veeg om te verschuiven, knijp om te zoomen. In een schets verschuift een veeg met twee vingers de schets.

Knijpen zoomt bij elke keuze. Als "Zelf bepalen" verkeerd gokt voor uw muis of trackpad, kies dan de juiste. Meer in [Trackpad, aanraken en kleine schermen](topic:trackpad-and-touch).

## Schetsen: beperkingen toevoegen tijdens het tekenen

**Beperkingen toevoegen tijdens het tekenen** (aan bij de start): een klik die vastklikt op een punt maakt het nieuwe punt samenvallend ermee, een klik op een kromme zet het punt op die kromme, en een lijn die bijna horizontaal of verticaal is getekend, wordt horizontaal of verticaal. Zie [Beperkingen en maatvoering](topic:relations-dimensions).

Zet dit uit als u geometrie dicht bij andere geometrie wilt plaatsen zonder die eraan vast te koppelen. De aanwijzer klikt nog steeds vast op punten en krommen, maar er wordt niets verbonden: lijnen die in een keten getekend zijn, delen hun uiteinden niet, dus een sleep kan ze uit elkaar trekken. Voeg zelf de beperkingen toe die u wilt vanuit het rechterpaneel. Een gesloten profiel wordt nog steeds geëxtrudeerd als de uiteinden elkaar raken.

:::note
De instelling verandert alleen wat nieuwe tekening toevoegt. Beperkingen die al in een schets staan, blijven, en het hulpmiddel Afronden maakt nog steeds zijn raakboog en straal.
:::

## Schetsen: maatvoering tijdens het tekenen

**Maatvoering tijdens het tekenen** (aan bij de start): terwijl een lijn, rechthoek, cirkel of boog wordt getekend, vult het typen van een getal het maatvak naast de aanwijzer ({{key:Tab}} gaat naar het volgende vak), en {{key:Enter}} tekent de vorm op dat formaat, met een aansturende maatvoering voor elk formaat dat u typte. Uit: typen van een getal terwijl u tekent doet niets, en vormen worden alleen met klikken getekend. Zie [Het formaat typen terwijl u tekent](topic:sketch-basics#type-the-size-as-you-draw).

## Hoekindicator

Wat in de hoek van het 3D-beeld wordt getoond: **Kubus (weergave)** (de start; rechtsboven — klik op een vlak, rand of hoekpunt om vanaf daar te kijken, sleep hem om te draaien, sleep de kompasring om het model te draaien), **Assenpictogram** (een kleine X-, Y-, Z-markering linksonder die meedraait met het beeld: X rood, Y groen, Z blauw) of **Geen**. Geen van beide wordt getoond terwijl u schetst of op het tekenblad. Zie [De kubus (weergave)](topic:view-cube).

## Solver-threads

Hoeveel threads de simulatiesolvers mogen gebruiken. **Automatisch** (de start) neemt één minder dan het aantal logische processors van de computer (maximaal 16), zodat de pagina reageert terwijl een studie oplost; of kies een getal. Grote voxelstudies, knik, spanning in de tijd en stroming lossen sneller op met meerdere threads (ongeveer 2× op 4 threads voor 80.000 kubussen volgens onze metingen, meer op een rustige computer); modellen met minder dan ongeveer 20.000 onbekenden blijven op één thread, omdat het starten van de threads meer kost dan het oplevert. Een oplossing met threads geeft hetzelfde antwoord als één thread (op afrondingsfouten na: de sommen worden in een andere volgorde opgeteld). De resultaten van elke studie tonen **N threads** of **1 thread** met de reden onder **Solver**.

Threads vereisen dat de pagina **cross-origin isolated** is (de browser laat workers dan pas geheugen delen). De labpagina is dat; waar niet, zegt de instelling dat ("Deze pagina is niet cross-origin isolated, dus solvers draaien op één thread, wat hier ook is gekozen.") en elke oplossing gebruikt één thread. Al het andere werkt hetzelfde, en de antwoorden zijn gelijk.

Laminaire stromingsstudies gebruiken de threads ook (ongeveer 2,5× op 4 threads voor 54.000 vloeistofcellen, hetzelfde antwoord tot het laatste cijfer). De kwadratische-tetraëdersolver en warmteoverdracht draaien op één thread: threading ervan bleek op onze testcomputer langzamer (hun solvers worden beperkt door de geheugensnelheid en door een stap die niet gesplitst kan worden).

### Op uw eigen webserver

Als u PartCraft vanaf uw eigen server draait, werkt het zoals het wordt aangeboden. Voor de solver-threads moet de server twee headers sturen bij de pagina van PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Op Apache, in het `.htaccess`-bestand van de map (vereist mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Op nginx, in het `location`-blok dat PartCraft serveert:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Laad de pagina opnieuw: Instellingen › Solver-threads biedt dan **Automatisch** aan met het aantal van uw computer. De tweede header zorgt dat de browser alles weigert wat de pagina laadt van een andere site die dat niet toestaat, wat prima is voor PartCraft op zichzelf (het laadt alles uit de eigen map).
