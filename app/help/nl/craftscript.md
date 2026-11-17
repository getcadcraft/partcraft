---
title: Scripts schrijven en uitvoeren (Script-werkomgeving)
summary: De Script-werkomgeving stap voor stap: een CraftScript- of Lua-script schrijven, het uitvoeren met F5, de console lezen, resultaten in de variabelen bewaren voor het volgende script, meshes, velden en grafieken tonen, een uitvoering stoppen, en scripts met het onderdeel opslaan.
keywords: script, scripten, scripten tijdens het modelleren, losmaken, tweede scherm, tweede monitor, param, params, parameters in scripts, CraftScript, Lua, code, programma, editor, console, REPL, opdrachtregel, uitvoeren, F5, selectie uitvoeren, stoppen, variabelen, werkomgeving, grafiek, veld, mesh, legenda, subweergave, analyse, automatisering, matrix, numeriek
from: d0003e89
---

**Voorbeeld.** Scripten is nieuw in PartCraft 0.3 en is een voorbeeldversie: de taal, de bibliotheek en de manier waarop scripts worden opgeslagen kunnen nog veranderen, en scripts die nu worden geschreven kunnen later kleine aanpassingen nodig hebben. Laat ons weten wat er misgaat.

De Script-werkomgeving voert uw eigen berekeningen uit naast het onderdeel: kleine sommen, hele analyses, of de scripts uit de [analysebibliotheek](topic:craftscript-library). Scripts worden geschreven in **CraftScript** (een matrixtaal die sterk lijkt op MATLAB, zie [De CraftScript-taal](topic:craftscript-language)) of in **Lua** (zie [Scripts in Lua](topic:craftscript-lua)) of **Python** (zie [Scripts in Python](topic:craftscript-python)).

Kies **Script** in het vak **Werkomgeving** links op de werkbalk. Het onderdeel wordt niet gewijzigd. Het rechterpaneel wordt het scriptpaneel (breder dan gewoonlijk; sleep aan de rand om het te wijzigen, of verplaats het naar een tweede scherm met het menu {{ui:⋯}}, zie [Panelen indelen](common:arrange-panels)).

## Scripten tijdens het modelleren

U hoeft de werkomgeving Ontwerp niet te verlaten om een script te schrijven. In Ontwerp bevat het tabblad {{ui:Script}} van het rechterpaneel dezelfde editor, console, variabelen en bibliotheek, met dezelfde scripts. De featureboom en de weergave blijven werken: klik op een feature om die te selecteren, dubbelklik op een schets om die te bewerken, draai de weergave, ga dan terug naar het tabblad {{ui:Script}} en druk op {{key:F5}}.

Wat een script **toont** (meshes, velden, grafieken, tabellen) wordt in Ontwerp niet over uw model getekend: de console zegt dat, en de Script-werkomgeving heeft alles wanneer u erheen schakelt.

{{ui:Losmaken}}, naast {{ui:Uitvoeren}}, verplaatst het hele paneel naar een eigen venster, bijvoorbeeld op een tweede scherm, zodat de editor en de volledige weergave naast elkaar staan. {{ui:Terugzetten}} zet het weer vast. Zie [Panelen indelen](common:arrange-panels).

## Uw eerste script uitvoeren

1. Typ in de editor, bijvoorbeeld:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Een sinus')
   disp(max(y))
   ```

2. Druk op {{key:F5}} (of {{ui:Uitvoeren}}). De console onder de editor toont wat het script heeft afgedrukt, en "Klaar in … s". De grafiek verschijnt in de **subweergaven** langs de onderkant van de 3D-weergave.
3. Een regel zonder puntkomma drukt zijn waarde af, zoals in MATLAB: `a = 3` drukt `a = 3` af; `a = 3;` drukt niets af.
4. Om alleen een deel van een script uit te voeren, selecteert u de regels en drukt u op {{key:Mod+Enter}} ({{ui:Selectie}}). Als niets is geselecteerd, wordt de regel uitgevoerd waarop de cursor staat.
5. De regel onderaan de console (na `>>`) voert één instructie uit wanneer u op {{key:Enter}} drukt. {{key:Up}} en {{key:Down}} halen eerdere regels terug.

## Zoeken, vouwen en aanvullen

- **Zoeken en vervangen.** Druk op {{key:Mod+F}} (of {{key:Mod+H}} om ook te vervangen). Er opent een balk boven de code: typ wat u zoekt; de treffers worden gemarkeerd en de teller zegt waar u bent. De knoppen naast het vak letten op hoofdlettergebruik (**Aa**), zoeken alleen op hele woorden (**W**) en gebruiken een reguliere expressie (**.\***; in de vervanging zet `$1` terug wat de eerste groep ving). {{ui:Vervangen}} vervangt de huidige treffer, {{ui:Alles}} vervangt elke treffer als één stap van {{key:Mod+Z}}.
- **Vouwen.** Klik op de ▾ naast een regelnummer, of druk op {{key:Mod+Shift+[}} met de cursor op een regel `function`, `if`, `for`, `while`, `switch` of `try` (Lua: `function`, `do`, `if`, `repeat`), om de binnenste regels weg te vouwen; de regel zegt hoeveel. ▸ of {{key:Mod+Shift+]}} klapt hem weer open. Vouwen verbergt alleen regels: uitvoeren, opslaan, kopiëren en de regelnummers tellen nog steeds elke regel mee, en typen op een gevouwen regel klapt hem eerst open.
- **Aanvullen.** Typ twee letters van een naam, of druk op {{key:Mod+Space}}: een lijst toont de variabelen die u heeft, de functies van de taal (met hun argumenten), trefwoorden en namen die al in het script staan. Kies met de pijltjes en druk op {{key:Enter}} of {{key:Tab}}.

## Als er iets misgaat

- Een fout noemt het probleem en zijn regel: de regel is rood gemarkeerd in de editor, en **Regel n** in de console brengt u er naartoe.
- Een lus die nooit eindigt: druk op {{ui:Stoppen}} (werkbalk of paneel). Het script stopt meteen; de variabelen behouden de waarden die ze hadden voor die uitvoering.
- Elke uitvoering heeft ook een stappenbudget (standaard 2 miljard stappen; wijzig het onder **Uitvoeropties** in het paneel). Een uitvoering die het overschrijdt, stopt met een melding.

## Variabelen gaan mee van script naar script

Elke variabele op het hoogste niveau die een script maakt, komt op het tabblad **Variabelen** terecht (naam, type, grootte, kleinste en grootste waarde) en blijft daar voor het volgende script, in beide talen. Zo mesht het ene script, lost het volgende op, en plot een derde.

- Klik op een variabele om die te tonen: meshes, velden en modellen in de 3D-weergave, arrays als tabel (plus een lijngrafiek voor een vector of een kleurenkaart voor een matrix) in de subweergaven.
- {{ui:Opslaan als JSON}}, {{ui:Opslaan als CSV}} (een tabel met getallen) en {{ui:Opslaan als HDF5}} downloaden hem; {{ui:Verwijderen}} verwijdert hem; {{ui:Alles leegmaken}} leegt de werkomgeving.
- Vink **Variabelen met het onderdeel opslaan** aan om ze in het onderdeelbestand te bewaren (tot 32 MB; grotere blijven alleen voor dit bezoek). Wanneer u zo'n onderdeel opent, biedt het paneel aan ze te laden.

## Meshes, velden en grafieken

- `show(m)` tekent een mesh; `show(f)` kleurt een veld op zijn mesh met een legenda. De lijst **Getoond** linksboven in de weergave verbergt ({{ui:oog}}) of verwijdert elk item, en verbergt of toont het onderdeel zelf. Typ onder de legenda een bereik (**Van**, **tot**) of druk op {{ui:Auto}}; een vector- of spanningsveld biedt ook aan welke component wordt getoond.
- `show(f, 'deform', u, 'scale', 50)` tekent de mesh verplaatst door een verplaatsingsveld `u`, 50 keer vergroot (zonder `scale` ongeveer 8 % van de grootte van het model).
- Klik op een getoonde mesh: de dichtstbijzijnde knoop, het element en de veldwaarden daar verschijnen in de subweergaven (**Aangewezen**).
- `plot`, `imagesc` en `table` zetten een lijngrafiek, een kleurenkaart van een 2D-array of een tabel in de subweergaven. Een grafiek met dezelfde `'id'` (of titel) als een eerdere vervangt die, zodat een lus één convergentiegrafiek kan bijwerken; `'append', true` voegt een curve eraan toe. {{ui:Wissen}} leegt de subweergaven; de pijl klapt ze weg.
- Bij twee of meer grafieken toont {{ui:Naast elkaar}} ze allemaal tegelijk (de nieuwste zes); klikken op het tabblad van een tabel of afbeelding toont dat ene weer alleen.
- Elke grafiek heeft onder zich {{ui:PNG}}, {{ui:SVG}} en {{ui:CSV}}. PNG en SVG drukken hem af op wit in de papierkleuren, ongeacht het thema (PNG 1600 × 1000 pixels; SVG schaalt zonder wazig te worden); CSV bevat zijn getallen met alle cijfers: één kolom x en een kolom per curve wanneer de curves dezelfde x delen, anders één rij per punt met de naam van de curve.
- {{key:F}} of {{ui:Passend maken}} past de weergave aan op wat wordt getoond.

## Bestanden

- {{ui:Openen}} in de groep Script (of zet bestanden op de weergave of het paneel): `.craft`-, `.lua`- en `.py`-bestanden openen als nieuwe scripts (ze draaien niet); gegevensbestanden (STL, OBJ, CSV, JSON, NPY, HDF5) laden in de variabelen onder hun bestandsnaam.
- {{ui:Opslaan}} in de groep Script downloadt het huidige script als bestand.
- {{ui:Nieuw}} in de groep Script (of {{ui:+}} naast de tabbladen) start een ander script. Dubbelklik op een tabblad om het te hernoemen; met de {{ui:×}} verwijdert u het (dat kunt u ongedaan maken).

## De parameters van het onderdeel lezen

Een script leest de parameters van het onderdeel (zie [Een onderdeel aansturen met parameters](topic:parameters)) op naam:

```
w = param('width');     % de waarde van één parameter, in mm (of graden, of een gewoon getal)
p = params();           % alle, als struct: p.width, p.height
```

In Lua en Python zijn dat `cs.param('width')` en `cs.params()`. Scripts lezen alleen parameters: wijzig ze op het tabblad {{ui:Parameters}}. Onder het tabblad van het script staat een regel met de parameters die het leest met `param('…')`, en die markeert elke parameter die het onderdeel niet heeft; het tabblad {{ui:Parameters}} toont het script onder elke parameter. Een naam die tijdens het draaien van het script wordt opgebouwd, zoals `param(name)`, wordt niet vermeld.

## Scripts worden in het onderdeel opgeslagen

Elk script op de tabbladen wordt in het onderdeel bewaard, dus {{ui:Opslaan}} in de groep Bestand slaat ze mee op, en wijzigingen daarin kunnen ongedaan worden gemaakt. Het openen van een onderdeel **voert zijn scripts nooit uit**: de console zegt hoeveel er in zitten, en ze draaien pas wanneer u op Uitvoeren drukt. Een onderdeel van iemand anders kan elk script bevatten: lees het voordat u het uitvoert. Scripts draaien op de achtergrond op deze computer zonder netwerktoegang en kunnen de pagina niet aanraken.

## Gerelateerd

- [De CraftScript-taal](topic:craftscript-language)
- [Scripts in Lua](topic:craftscript-lua)
- [Scripts in Python](topic:craftscript-python)
- [De analysebibliotheek](topic:craftscript-library)
- [Een eigen analyse schrijven](topic:craftscript-own-analysis)
