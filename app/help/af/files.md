---
title: Lêers: maak oop, stoor en uitvoer
summary: Die onderdeel- en samestellinglêers wat PartCraft oopmaak en stoor, elke uitvoerformaat en wat dit behou, waar lêers heen gaan, en wat verander vanlyn of tussen blaaiers.
keywords: maak oop, stoor, uitvoer, aflaai, lêer, partcraft.json, samestellinglêer, stl, 3mf, step, dxf, pdf, waar is my lêers, vanlyn, stoor as
from: e5fbc7e3
---

PartCraft werk met lêers op jou rekenaar. Dit laai nooit 'n onderdeel op nie, en daar is geen rekening of wolkberging betrokke nie. Wolkstoring is nog nie beskikbaar nie.

## Wat PartCraft oopmaak

| Lêer | Uitbreiding | Hoe |
|---|---|---|
| 'n PartCraft-onderdeel | `.partcraft.json` | {{ui:Maak oop}}, {{key:Mod+O}}, of sleep dit op die 3D-aansig |
| 'n PartCraft-samestelling | `.partcraft-asm.json` | Dieselfde: PartCraft sien watter soort dit is |
| 'n STEP-soliede | `.step`, `.stp` | 'n Soliede liggaam wat as driehoeke gelees word: [Maak 'n STEP-lêer oop en bou daarop voort](topic:import-step) |

STL-, OBJ- en 3MF-maaslêers open ook as soliede liggame ([Maak 'n STL, OBJ of 3MF oop](topic:open-meshes)), en so ook `.3dm`-lêers ([Maak 'n .3dm-model oop](topic:open-3dm-files)). DXF, IGES en ander programme se eie onderdeellêers kan nie oopgemaak word nie (sien [Wat nog nie gebou is nie](topic:not-built-yet)).

Reëls wanneer oopgemaak word:

- 'n Onderdeel- of samestellinglêernaam moet op `.json` eindig, en die lêer moet onder 50 MB wees.
- Lêers word nagegaan voordat iets gewys word. 'n Beskadigde of gewysigde lêer word geweier met 'n eenvoudige rede, byvoorbeeld "Dit is nie 'n PartCraft-lêer nie."
- 'n Lêer wat deur 'n nuwer PartCraft gestoor is, word geweier: "Hierdie lêer is deur 'n nuwer PartCraft gestoor (lêerweergawe 3); hierdie een lees weergawe 2." Ouer lêers maak oop.
- As die onderdeel op die skerm nie-gestoorde veranderinge het, vra PartCraft eers: {{ui:Kanselleer}}, {{ui:Skrap veranderinge}} of {{ui:Stoor eers}}.

## Stoor

{{ui:Stoor}} of {{key:Mod+S}} stoor wat op die skerm is:

- Op 'n onderdeel: `<part name>.partcraft.json`, die volledige geskiedenis (sketse, verwantskappe, afmetings, kenmerke, die terugrolposisie), die tekenblad se snit-, detail- en GD&T-notas, en die volledige teks van enige STEP-soliede wat in 'n vroeër bou ingevoer is. Kenmerke wat hierdie weergawe nie kan bou nie, word onveranderd teruggestoor. Die soliede self word nie gestoor nie; PartCraft bou dit weer uit die geskiedenis op wanneer die lêer oopmaak.
- In 'n samestelling: `<assembly name>.partcraft-asm.json`, met **elke onderdeel daarin**. Een lêer dra die hele samestelling, so jy kan dit op sy eie stuur.

Stoor is 'n **aflaai**. Jou blaaier sit die lêer in sy aflaaivouer, of vra waar dit geplaas moet word as jy dit so ingestel het. Weer stoor maak 'n nuwe aflaai; die blaaier noem dit dalk `Part1 (1).partcraft.json` in plaas van om die ou een te vervang. Hernoem of skuif lêers in {{pick:mac=Finder|windows=Lêerverkenner|linux=jou lêerbestuurder}} soos jy wil.

Karakters behalwe letters, syfers, spasies, `_`, `.` en `-` in die onderdeelnaam word `_` in die lêernaam.

:::tip
Die meeste blaaiers het 'n instelling wat vra waar elke aflaai gestoor word. Skakel dit aan as jy elke keer 'n "Stoor as"-keuse wil hê: in Chrome en Edge is dit onder Aflaaie in die instellings; in Firefox onder Algemeen, Lêers en toepassings; in Safari onder Algemeen, Lêeraflaailokasie.
:::

Meer oor waar aflaaie heen gaan en hoe om lêers veilig te hou: [Waar jou lêers heen gaan](common:your-files).

## Uitvoer

Die {{ui:Uitvoer}}-kieslys skryf ander formate. Elkeen is 'n aflaai, genoem na die onderdeel.

| Kieslysitem | Lêer | Wat daarin is |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | Binêre STL van die soliede se driehoeke, in millimeter, **Z op** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF met die soliede as een objek, in millimeter, **Z op** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Een presiese soliede, in millimeter, Z op: ronde vlakke as ware silinders, keëls, sfere en torusse. Die STEP om vir ander CAD- en CAM-programme te gebruik |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Dieselfde presiese soliede in die ouer AP214-skema |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | 'n Soliede gemaak van plat vlakke uit die maas: **ronde oppervlaktes is baie klein plat fasette**. In millimeter, in PartCraft se eie asse (Y op). Vir 'n program wat die presiese lêer weier |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` of `<name> - face.dxf` | DXF R12. 'n Skets: lyne, boë, sirkels en punte in die skets se eie koördinate, op lae PROFILE, CONSTRUCTION en POINTS. 'n Gekose plat vlak: sy omtrekke as geslote polilyne (ronde rande as hul fasette) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | Die A3-tekenblad: drie aansigte, isometries, snit en detail indien ingestel, algemene groottes, GD&T-simbole, titelblok |

:::note
{{ui:STEP AP242 (exact solid)}} skryf gate, verhogings, afrondings, keëls, sfere en torusse op hul ware oppervlaktes, sodat 'n ander program 'n gat as 'n silinder kan kies; **Curves** verander dit nie. Spline-sye, gemodelleerde drade en ingevoerde maas het nie 'n presiese oppervlak nie en bly plat fasette in dieselfde soliede; die statusbalk sê hoeveel. {{ui:STEP (faceted, mesh kernel)}} skryf elke ronde vlak as fasette.
:::

- Uitvoere is van die onderdeel op die skerm. Uitvoer is afgeskakel in 'n samestelling; daar is nog geen samestellinguitvoer nie.
- STL, 3MF, die gefasetteerde STEP en die vlak-DXF is altyd van fasette gemaak. Die **Kurwes**-instelling (in die regterpaneel met niks gekies nie) bepaal hoe fyn hulle is, van 32 tot 256 fasette per omwenteling. Kies Fyn of Baie fyn voordat jy STL of 3MF uitvoer vir 'n gladde druk.
- Die PDF-tekening gebruik die leser se ingeboude Helvetica-lettertipe. Karakters wat dit nie kan wys nie, word as "?" gedruk.

Stap vir stap: [Uitvoer vir druk, STEP en DXF](topic:export-files) en [Maak 'n tekenblad](topic:drawing-pdf).

## Nie-gestoorde werk

- PartCraft hou 'n herstelkopie van die oop onderdeel of samestelling in hierdie blaaier 'n oomblik na elke verandering, sodat 'n ineenstorting of 'n toe oortjie dit nie verloor nie: die volgende keer as jy PartCraft oopmaak, vra dit "Herstel jou werk?". Dit is nie 'n stoor nie: stoor na 'n lêer om jou werk te behou. Sien [Herstel nie-gestoorde werk](common:recover).
- As jy die oortjie probeer toemaak of herlaai met nie-gestoorde veranderinge, vra die blaaier "Verlaat webwerf?". Dit is die blaaier se eie blokkie; PartCraft kan die bewoording nie verander nie.
- {{ui:Nuut}}, {{ui:Maak oop}} en die toemaak van 'n samestelling vra voordat nie-gestoorde veranderinge weggegooi word.

## Aanlyn en vanlyn

Alles gebeur op jou rekenaar: die maaskern ('n WebAssembly-program) word saam met die toepassing afgelaai en bou meetkunde plaaslik, en lêers word van jou skyf gelees en daarheen geskryf. Geen onderdeeldata gaan oor die netwerk nie. Sien [Die maaskern](topic:solid-kernels).

Om sonder enige verbinding te werk, stoor PartCraft vir vanlyn-gebruik terwyl jy aanlyn is: kies {{ui:Stoor vir vanlyn}} in die programbalk en wag terwyl dit tel ("Stoor 40 van 212") totdat dit **Gereed vir vanlyn** sê. Die gestoorde kopie sluit die 3D-biblioteek en die maaskern in, so daarna werk modelleer, stoor, elke uitvoer en tekeninge almal vanlyn. As dit **Kon nie stoor nie** sê, klik daarop om weer te probeer terwyl jy aanlyn is; **Vanlyn nie beskikbaar nie** beteken hierdie blaaiervenster kan nie 'n kopie hou nie (privaatvensters en sommige bestuurde rekenaars). Met die kopie gestoor, bied 'n klik op **Gereed vir vanlyn** {{ui:Stoor weer (kry die nuutste weergawe)}} en {{ui:Verwyder die vanlyn-kopie}} aan. Besonderhede: [Werk vanlyn](common:offline).

:::online
Jy is aanlyn. Selfs sonder om vir vanlyn-gebruik te stoor, kan jy voortwerk as die verbinding wegval, sodra PartCraft gelaai het en die statusbalk-kaartjie "Maaskern" sê. Moenie net die bladsy herlaai totdat jy weer aanlyn is nie.
:::

:::offline
Jy is vanlyn. As PartCraft reeds oop is, hou aan werk; stoor en uitvoer werk steeds. As die programbalk **Gereed vir vanlyn** sê, maak PartCraft ook van voor af oop sonder 'n verbinding; anders moenie hierdie tab herlaai nie.
:::

## Verskille tussen blaaiers

- **Aflaaie.** Elke blaaier het sy eie aflaaivouer en sy eie manier om te vra. As 'n blaaier vra of hierdie webwerf lêers mag aflaai, laat dit toe, anders kan stoor en uitvoer nie werk nie.
- **Sleep en los** van 'n lêer op die aansig werk in Chrome, Edge, Firefox en Safari.
- **Lêers van 'n foon of tablet.** Op iPhone en iPad wys Maak oop die Lêers-program; gestoorde lêers gaan na Lêers, Aflaaie. Op Android gaan hulle na die Aflaaie-vouer.

Daar is geen verskil in wat die lêers bevat tussen blaaiers of bedryfstelsels nie.
