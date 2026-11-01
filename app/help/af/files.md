---
title: Lêers: maak oop, stoor en voer uit
summary: Die onderdeel- en samestellingslêers wat PartCraft oopmaak en stoor, elke uitvoerformaat en wat dit behou, waar lêers gaan, en wat verander vir vanlyn-werk of tussen blaaiers.
keywords: maak oop, stoor, voer uit, aflaai, lêer, partcraft.json, samestellingslêer, stl, 3mf, step, dxf, pdf, waar is my lêers, vanlyn, stoor as
from: c15c2c48
---

PartCraft werk op lêers op jou rekenaar. Dit laai nooit 'n onderdeel op nie, en daar is geen rekening of wolkberging betrokke nie. Wolkstoring is nog nie beskikbaar nie.

## Wat PartCraft oopmaak

| Lêer | Uitbreiding | Hoe |
|---|---|---|
| 'n PartCraft-onderdeel | `.partcraft.json` | {{ui:Maak oop}}, {{key:Mod+O}}, of sleep dit op die 3D-aansig |
| 'n PartCraft-samestelling | `.partcraft-asm.json` | Dieselfde: PartCraft sien watter soort dit is |
| 'n STEP-soliede | `.step`, `.stp` | 'n Soliede liggaam wat as driehoeke gelees word: [Maak 'n STEP-lêer oop en bou daarop voort](topic:import-step) |

STL-, OBJ- en 3MF-nette maak ook as soliede liggame oop ([Maak 'n STL, OBJ of 3MF oop](topic:open-meshes)), en so ook `.3dm`-lêers ([Maak 'n .3dm-model oop](topic:open-3dm-files)). DXF, IGES en ander programme se eie onderdeellêers kan nie oopgemaak word nie (sien [Wat nog nie gebou is nie](topic:not-built-yet)).

Reëls wanneer jy oopmaak:

- 'n Onderdeel- of samestellingslêer se naam moet op `.json` eindig, en die lêer moet onder 50 MB wees.
- Lêers word nagegaan voordat iets gewys word. 'n Beskadigde of gewysigde lêer word met 'n eenvoudige rede geweier, byvoorbeeld "Dit is nie 'n PartCraft-lêer nie."
- 'n Lêer wat deur 'n nuwer PartCraft gestoor is, word geweier: "Hierdie lêer is deur 'n nuwer PartCraft gestoor (lêerweergawe 3); hierdie een lees weergawe 2." Ouer lêers maak oop.
- As die onderdeel op die skerm ongestoorde veranderinge het, vra PartCraft eers: {{ui:Kanselleer}}, {{ui:Skrap veranderinge}} of {{ui:Stoor eers}}.

## Stoor

{{ui:Stoor}} of {{key:Mod+S}} stoor wat op die skerm is:

- By 'n onderdeel: `<part name>.partcraft.json`, die volledige geskiedenis (skets, verhoudings, afmetings, kenmerke, die terugrolposisie), die snit-, detail- en GD&T-notas van die tekenblad, en die volle teks van enige STEP-soliede wat in 'n vroeëre bou ingevoer is. Kenmerke wat hierdie weergawe nie kan bou nie, word onveranderd teruggestoor. Die soliede self word nie gestoor nie; PartCraft bou dit weer uit die geskiedenis wanneer die lêer oopmaak.
- In 'n samestelling: `<assembly name>.partcraft-asm.json`, met **elke onderdeel binne dit**. Een lêer dra die hele samestelling, sodat jy dit op sy eie kan stuur.

Stoor is 'n **aflaai**. Jou blaaier sit die lêer in sy aflaaivouer, of vra waar dit moet gaan as jy dit so ingestel het. Stoor weer maak 'n nuwe aflaai; die blaaier noem dit dalk `Part1 (1).partcraft.json` in plaas van om die ou een te vervang. Hernoem of skuif lêers in {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} soos jy wil.

Letters, syfers, spasies, `_`, `.` en `-` in die onderdeelnaam word `_` in die lêernaam; ander karakters word ook so vervang.

:::tip
Die meeste blaaiers het 'n instelling wat vra waar elke aflaai moet gaan. Skakel dit aan as jy elke keer 'n "Stoor as"-keuse wil hê: in Chrome en Edge is dit onder Aflaaie in die instellings; in Firefox onder Algemeen, Lêers en Toepassings; in Safari onder Algemeen, Lêeraflaailokasie.
:::

Meer oor waar aflaaie gaan en hoe om lêers veilig te hou: [Waar jou lêers gaan](common:your-files).

## Voer uit

Die {{ui:Uitvoer}}-kieslys skryf ander formate. Elkeen is 'n aflaai, genoem na die onderdeel.

| Kieslysitem | Lêer | Wat daarin is |
|---|---|---|
| {{ui:STL, vir 3D-druk}} | `<name>.stl` | Binêre STL van die soliede se driehoeke, millimeter, **Z op** |
| {{ui:3MF, vir 3D-druk}} | `<name>.3mf` | 3MF met die soliede as een voorwerp, millimeter, **Z op** |
| {{ui:STEP AP242 (presiese soliede)}} | `<name>.step` | Nog nie in hierdie weergawe gebou nie (grys): dit benodig 'n presiese kern |
| {{ui:STEP AP214 (presiese soliede)}} | `<name>.step` | Nog nie gebou nie (grys) |
| {{ui:STEP (gefasetteer, maaskern)}} | `<name>.step` | 'n Soliede van plat vlakke uit die maas: **ronde oppervlaktes is baie klein plat fasette**. Millimeter, in PartCraft se eie asse (Y op). Die STEP om in hierdie weergawe vir ander CAD-programme te gebruik |
| {{ui:DXF van die skets of plat vlak}} | `<name> - <sketch>.dxf` of `<name> - face.dxf` | DXF R12. 'n Skets: lyne, boë, sirkels en punte in die skets se eie koördinate, op die lae PROFILE, CONSTRUCTION en POINTS. 'n Gekose plat vlak: sy omtrekke as geslote polilyne (ronde rande as hul fasette) |
| {{ui:Tekening (PDF): aansigte, snit, detail, GD&T}} | `<name> - drawing.pdf` | Die A3-tekenblad: drie aansigte, isometries, snit en detail indien ingestel, algehele groottes, GD&T-simbole, titelblok |

:::note
{{ui:STEP AP242 (presiese soliede)}} en {{ui:STEP AP214 (presiese soliede)}} is nog nie in hierdie weergawe gebou nie: gebruik {{ui:STEP (gefasetteer, maaskern)}}. Dit het die regte vorm en volume, maar elke ronde vlak is baie plat fasette, so ander programme kan nie 'n gat as silinder kies nie. Stel eers **Krommes** fyner as dit saak maak.
:::

- Uitvoere is van die onderdeel op die skerm. Uitvoer is afgeskakel in 'n samestelling; daar is nog geen samestellingsuitvoer nie.
- STL, 3MF, die gefasetteerde STEP en die vlak-DXF is altyd van fasette gemaak. Die **Krommes**-instelling (in die regterpaneel met niks gekies nie) bepaal hoe fyn hulle is, van 32 tot 256 fasette per omwenteling. Kies Fyn of Baie fyn voor jy STL of 3MF uitvoer vir 'n gladde druk.
- Die PDF-tekening gebruik die leser se ingeboude Helvetica-lettertipe. Karakters wat dit nie kan wys nie, druk as "?".

Stap-vir-stap: [Voer uit vir druk, STEP en DXF](topic:export-files) en [Maak 'n tekenblad](topic:drawing-pdf).

## Ongestoorde werk

- PartCraft hou 'n herstelkopie van die oop onderdeel of samestelling in hierdie blaaier 'n oomblik ná elke verandering, sodat 'n ineenstorting of 'n gesluite oortjie nie dit verloor nie: die volgende keer wat jy PartCraft oopmaak, vra dit "Herstel jou werk?". Dit is nie 'n stoor nie: stoor na 'n lêer om jou werk te behou. Sien [Herstel ongestoorde werk](common:recover).
- As jy die oortjie wil toemaak of herlaai met ongestoorde veranderinge, vra die blaaier "Verlaat webwerf?". Dit is die blaaier se eie boks; PartCraft kan die woorde daarvan nie verander nie.
- {{ui:Nuut}}, {{ui:Maak oop}} en die sluiting van 'n samestelling vra voordat ongestoorde veranderinge weggegooi word.

## Aanlyn en vanlyn

Alles gebeur op jou rekenaar: die maaskern ('n WebAssembly-program) word saam met die program afgelaai en bou meetkunde plaaslik, en lêers word van jou skyf gelees en daarheen geskryf. Geen onderdeeldata gaan oor die netwerk nie. Sien [Die maaskern](topic:solid-kernels).

Om sonder enige verbinding te werk, stoor PartCraft vir vanlyngebruik terwyl jy aanlyn is: kies {{ui:Stoor vir vanlyn}} in die programbalk en wag terwyl dit tel ("Stoor 40 van 212") totdat dit **Gereed vir vanlyn** sê. Die gestoorde kopie sluit die 3D-biblioteek en die maaskern in, so daarna werk modelleer, stoor, elke uitvoer en tekeninge almal vanlyn. As dit **Kon nie stoor nie** sê, klik daarop om weer te probeer terwyl jy aanlyn is; **Vanlyn nie beskikbaar nie** beteken hierdie blaaiervenster kan nie 'n kopie hou nie (privaatvensters en sommige bestuurde rekenaars). Met die kopie gestoor, bied **Gereed vir vanlyn** klik {{ui:Stoor weer (kry die nuutste weergawe)}} en {{ui:Verwyder die vanlyn-kopie}} aan. Besonderhede: [Werk vanlyn](common:offline).

:::online
Jy is aanlyn. Selfs sonder om vir vanlyngebruik te stoor, kan jy voortgaan met werk as die verbinding wegval, sodra PartCraft gelaai het en die statusbalk-kaartjie "Mesh kernel" sê. Moenie net die bladsy herlaai totdat jy weer aanlyn is nie.
:::

:::offline
Jy is vanlyn. As PartCraft reeds oop is, hou aan werk; stoor en uitvoer werk steeds. As die programbalk **Gereed vir vanlyn** sê, maak PartCraft ook van nuuts af oop sonder verbinding; anders moenie hierdie oortjie herlaai nie.
:::

## Verskille tussen blaaiers

- **Aflaaie.** Elke blaaier het sy eie aflaaivouer en sy eie manier om te vra. As 'n blaaier vra of hierdie webwerf lêers mag aflaai, laat dit toe, anders kan stoor en uitvoer nie werk nie.
- **Sleep en los** van 'n lêer op die aansig werk in Chrome, Edge, Firefox en Safari.
- **Lêers van 'n foon of tablet.** Op iPhone en iPad wys Maak oop die Lêers-program; gestoorde lêers gaan na Lêers, Aflaai. Op Android gaan hulle na die Aflaai-vouer.

Daar is geen verskil in wat die lêers bevat tussen blaaiers of bedryfstelsels nie.
