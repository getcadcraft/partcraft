---
title: Bou 'n samestelling met verbindings
summary: Begin 'n samestelling vanaf 'n onderdeel, voeg kopieë en ander onderdeellêers in, verbind hulle met starre, draai-, skuif-, silindriese, vlak-, bal- en pen-in-gleuf-verbindings op plat vlakke, sentreer verbindings op asse, wysig 'n onderdeel op sy plek en stoor die samestelling.
keywords: samestelling, koppeling, verbinding, lus, geslote lus, skakeling, viertak, meganisme, star, draai, skuif, silindries, vlak, bal, balverbinding, sferies, pen in gleuf, komponent invoeg, vasgemaak, vas, konsentries, samevallend, wysig onderdeel, in konteks, partcraft-asm
from: a53bbfef
---

'n Samestelling plaas onderdele saam. In PartCraft plaas **verbindings** die onderdele: elke verbinding sit op 'n plat vlak van elk van twee onderdele en plaas hulle vlak teen vlak. 'n Draaiverbinding laat een onderdeel draai, 'n skuifverbinding laat dit skuif, en 'n starre verbinding hou dit vas.

## Begin 'n samestelling

1. Bou 'n onderdeel met 'n soliede ('n leë onderdeel kan nie in 'n samestelling gaan nie: "Bou eers 'n soliede, plaas dit dan in 'n samestelling.").
2. Kies {{ui:Samestelling}} in die werkbalk.

Die statusbalk sê "Samestelling begin met Part1 as die vasgemaakte onderdeel. Voeg meer onderdele in (Voeg kopie by, Voeg in, of Wysig › Dupliseer), verbind hulle dan." Die linkerpaneel lys nou **Onderdele** en **Verbindings**, en die werkbalk wys die samestellinggereedskap. Die skets- en kenmerkgereedskap verdwyn.

Die eerste onderdeel is **vasgemaak**: dit beweeg nooit nie, en alles anders word relatief daartoe geplaas.

## Voeg onderdele in

- {{ui:Voeg kopie by}} voeg nog 'n kopie van die gekose onderdeel in (of van die laaste een). Kopieë deel een onderdeel: wysig dit en elke kopie verander.
- {{ui:Dupliseer}} ({{key:Mod+D}}) in die {{ui:Wysig}}-groep doen dieselfde vir die gekose onderdeel. {{key:Mod+C}} en {{key:Mod+V}} kopieer 'n onderdeel en plak dit langs die ander, in hierdie samestelling of 'n ander een; {{key:Mod+Shift+V}} plak dit op dieselfde plek. Sien [Kopieer, plak en dupliseer](topic:copy-paste).
- {{ui:Voeg in}} voeg 'n onderdeel in vanaf 'n `.partcraft.json`-lêer op jou rekenaar. Die onderdeel word in die samestelling gekopieer.

Nuwe onderdele verskyn 20 mm regs van alles wat reeds daar is, en bly daar totdat 'n verbinding hulle plaas. 'n Onderdeel sonder 'n verbinding kan ook met die hand geskuif word: getikte waardes of pyltjies wat jy sleep (sien [Onderdeellys, ontplooide aansigte en onderdele met die hand beweeg](topic:assembly-bom-explode)).

## Verbind twee onderdele

1. Kies {{ui:Verbinding}} of druk {{key:J}}. Die regterpaneel sê **Nuwe verbinding**.
2. Klik op 'n plat vlak op die eerste onderdeel. Dit lig op.
3. Klik op 'n plat vlak op die tweede onderdeel.

Die tweede onderdeel spring sodat sy vlak teen die eerste onderdeel se vlak lê, na dit gekeer. Die verbinding verskyn onder **Verbindings**, byvoorbeeld "Revolute1", en die regterpaneel wys sy instellings.

- As albei vlakke deur omwentelings gemaak is, begin die verbinding as **draaiend**; andersins **star**. Verander dit daarna.
- Geboë vlakke kan nie gekies word nie: "Daardie vlak is geboë. Kies 'n plat vlak (om om 'n gat of 'n omwenteling se as te draai, kies dit daarna in die verbinding)."
- {{key:Esc}} kanselleer 'n verbinding wat jy begin het (of klik 'n onderdeel in die lys aan die linkerkant).

### Verbindingsinstellings

| Instelling | Wat dit doen |
|---|---|
| **Tipe** | Een van die verbindings in die tabel hieronder |
| **Hoek (°)** | Draai die tweede onderdeel om die verbinding se as (vierkant op die vlakke) |
| **Verskuiwing (mm)** | Skuif die tweede onderdeel langs die as, weg van die vlak (negatiewe waardes stoot dit daarin) |
| **Langs X**, **Langs Y**, **Kantel om X**, **Kantel om Y**, **Langs die gleuf**, **Gleufrigting** | Die ander waardes, wat gewys word vir die verbindings wat hulle gebruik |
| **Sentreer op** (vir elke kant) | Waar die verbinding se as die vlak kruis: "Die vlak se eie oorsprong", die as van 'n omwenteling ("Axis of Revolve1") of een gat se as ("Hole1, hole 2") |

Elke waarde wat 'n verbinding laat beweeg, het 'n sleurskuifbalk onder sy blokkie; die ander word een keer gestel.

| Verbinding | Wat beweeg | Eenmaal gestel |
|---|---|---|
| **Star** | niks | Hoek, Verskuiwing |
| **Draaiend** | Hoek ('n skarnier) | Verskuiwing |
| **Skuif** | Verskuiwing ('n laai) | Hoek |
| **Silindries** | Hoek en Verskuiwing ('n as in 'n gewone laer) | |
| **Plat** | Langs X, Langs Y oor die vlak, en Hoek ('n onderdeel wat op 'n tafel skuif) | |
| **Bal** | Hoek (draai) en Kantel om X en Y, om die verbinding se middelpunt ('n balverbinding) | |
| **Pen in gleuf** | Langs die gleuf en Hoek ('n pen in 'n reguit gleuf) | Gleufrigting: die gleuf se hoek vanaf die vlak se X |

Die X en Y van 'n vlak is dié van die eerste onderdeel se vlak; die verbinding se middelpunt word gestel deur **Sentreer op**.

"Die vlak se eie oorsprong" is die onderdeel se oorsprong geprojekteer op die vlak, wat dikwels nie waar jy die onderdele wil laat belyn nie. Vir ronde onderdele en penne, stel **Sentreer op** op die omwenteling of gat se as aan albei kante: die asse belyn dan, soos 'n konsentriese koppeling.

### Voorbeeld: twee flense met bout vlak teen vlak

1. Maak die flensonderdeel oop (' n omwenteling met 'n sirkulêre patroon van gate) en kies {{ui:Samestelling}}.
2. Kies {{ui:Voeg kopie by}}.
3. Druk {{key:J}}, klik die plat vlak van die eerste flens se skyf (die vlak waar die boutgate begin), dan dieselfde vlak op die tweede flens. Die vlakke is deur die omwenteling gemaak, so die verbinding is draaiend.
4. Stel **Sentreer op** op "Axis of Revolve1" aan albei kante. Die flense deel nou 'n as.
5. Tik `22.5` in **Hoek (°)** om die boutgate te belyn, of sleep die skuifbalk.

## Geslote lusse: skakelings

Onderdele wat in 'n ring verbind is ('n viertak-skakeling, 'n kruk en skuif, 'n raam wat aan albei kante vasgemaak is) vorm 'n **lus**. PartCraft los elke lus op sodat dit sluit: die verbindings daarop neem die waardes wat die ring saamsluit, en beweeg so min as moontlik vanaf waar hulle was.

- **Stel of sleep** 'n waarde van 'n verbinding op 'n lus, en die res van die lus volg. Vir 'n viertak-skakeling, sleep die kruk se **Hoek** en die koppelstuk en wieg beweeg daarmee. Die waarde wat jy stel, word behou; die ander word uit daardie waarde bereken.
- In die lys is 'n verbinding op 'n lus wat nog kan beweeg, **blou**: 'n ander waarde kan nog gestel word. 'n Lus wat nie kan beweeg nie (' n vasgebinde raam) bly swart. 'n Lus wat nie kan sluit nie, is **rooi**.
- Die **Onderdeel**-blokkie wys **Lusse**: hoeveel gesluit is en hoeveel waardes nog kan beweeg, byvoorbeeld "1 gesluit; 1 waarde kan nog beweeg".
- {{ui:Toets die beweging vir botsings}} vee 'n verbinding op 'n lus met die lus wat dit volg, stap vir stap (sien [Toets 'n samestelling vir botsings en beweging](topic:check-assembly)).

'n Plat skakeling wat uit plat stawe gestapel is, moet in diepte ooreenstem: twee onderdele wat vlak teen vlak aan albei kante van 'n ring verbind is, het in albei rigtings dieselfde stapelhoogte nodig. Gebruik 'n verbinding se **Verskuiwing** om 'n onderdeel op te lig waar die stapel nie optel nie, anders kan die lus nie sluit nie.

## Werk met die onderdele

Klik op 'n onderdeel in die aansig of in die lys om dit te kies. Die regterpaneel wys sy onderdeelnaam, hoeveel kopieë daar is, sy volume, sy verbindings, en of dit vasgemaak is, deur sy verbindings gestel is, of "Nie verbind nie: bly waar dit geplaas is". Knoppies:

- {{ui:Wysig hierdie onderdeel}} (of {{ui:Wysig onderdeel}} in die werkbalk, of dubbelklik die onderdeel in die lys): maak die onderdeel oop om te wysig;
- {{ui:Voeg 'n kopie in}};
- {{ui:Maak dit die vasgemaakte onderdeel}};
- {{ui:Verwyder}}: verwyder ook sy verbindings, nadat dit vra.

'n Samestelling hou ten minste een onderdeel: "'n Samestelling hou ten minste een onderdeel. Maak dit eerder toe."

### Wysig 'n onderdeel op sy plek

1. Kies 'n onderdeel en kies {{ui:Wysig onderdeel}}. Die onderdeel maak oop met sy geskiedenis; die kop sê "Bracket (in Bracket-samestelling)".
2. Verander dit soos enige onderdeel.
3. Kies {{ui:Terug}} in die werkbalk. Die samestelling werk by: elke kopie van daardie onderdeel verander, en verbindings op vlakke wat deur skets-rande gemaak is, volg.

Om die verandering terug te bring, is een stap in die samestelling se ontdoenlys.

## Ontdoen, stoor en sluit

- Die samestelling het sy eie ontdoenlys: {{key:Mod+Z}} en {{key:Mod+Y}} werk op verbindings, invoegings en instellings.
- {{ui:Stoor}} of {{key:Mod+S}} laai `<assembly name>.partcraft-asm.json` af, met elke onderdeel binne-in. Maak dit later oop met {{ui:Maak oop}}.
- {{ui:Maak toe}} sluit die samestelling en keer terug na die onderdeel waarmee jy begin het. As die samestelling nie gestoor is nie, vra dit: {{ui:Kanselleer}}, {{ui:Skrap die samestelling}} of {{ui:Stoor eers}}.
- Om die samestelling te hernoem, klik op leë ruimte sodat niks gekies is nie, en verander **Naam** in die regterpaneel.

## Groot samestellings

'n Samestelling kan duisende kopieë van 'n paar onderdele hou. Kopieë van een onderdeel word saam geteken, 'n verbinding wat jy draai, plaas net die onderdele agter dit, en die onderdeellys wys sy eerste rye met 'n "Wys meer"-knoppie onder hulle (die gekose onderdeel word altyd gelys).

- Terwyl jy die aansig draai of zoem, word 'n samestelling van meer as ongeveer 300 000 driehoeke as een boks per onderdeel geteken, en dan volledig 'n oomblik nadat jy stop.
- {{ui:Aansigte}} › {{ui:Ligte vertoning}} hou die bokse die hele tyd aan. Kies van onderdele en verbindings gebruik steeds die werklike onderdele.
- Hoe vinnig dit draai, hang ook af van jou grafiese kaart. Die getalle wat PartCraft gemeet het, is in die vrystellingsnotas saam met die masjien waarvandaan hulle kom.

## Verbindingsprobleme

- 'n Onderdeel wat geen verbinding bereik nie, word as **vry** gelys, en die paneel sê "Bracket2 is nie aan die vasgemaakte onderdeel verbind nie, so dit bly waar dit geplaas is."
- 'n Lus wat nie kan sluit nie (die lengtes bereik nie, 'n perk stop 'n verbinding, die vlakke stem nie in diepte ooreen nie): "Revolute3 sluit 'n lus wat nie kan sluit nie: dit is 2.000 mm af. Kontroleer die vlakke, verskuiwings en perke van die lus se verbindings." Sy verbindings word rooi.
- As 'n vlak of as wat 'n verbinding gebruik weg is ná die wysiging van 'n onderdeel: "Die vlak wat hierdie verbinding gebruik, is weg uit Bracket." Verwyder die verbinding en maak dit weer.

Volgende: [Toets 'n samestelling vir botsings en beweging](topic:check-assembly).
