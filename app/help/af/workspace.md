---
title: Die PartCraft-skerm
summary: 'n Toer van elke balk en paneel: die nutsbalk en hoe dit verander, die geskiedenis, die onderdeelfeite, die 3D-aansig, die eienskappaneel en die statusbalk.
keywords: skerm, uitleg, nutsbalk, geskiedenis, kenmerkboom, eienskappe, paneel, statusbalk, koppelvlak, ui, toer, volskerm
from: 7394fc49
---

Die skerm het vyf dele: die nutsbalk bo-oor, die geskiedenis aan die linkerkant, die 3D-aansig in die middel, die eienskappaneel aan die regterkant en die statusbalk langs die onderkant. Bo hulle almal sit die CadCraft-programbalk.

## Die programbalk

Die dun balk heel bo hoort aan die CadCraft-webwerf, nie aan PartCraft self nie. Dit wys die programnaam en waar dit loop, 'n weergawe-kieslys, **Oor PartCraft**, die skermmodus-knoppie en die Papier / Model-temaskakelaar.

- **Papier** is donker lyne op 'n ligte blad. **Model** is ligte lyne op 'n donker agtergrond. Sketskleure volg die tema.
- {{ui:Instellings}} (die rat, of {{key:Mod+,}}) het 'n {{ui:PartCraft}}-oortjie: watter muisknoppie die aansig draai, muiswiel of snitblok, en verhoudings terwyl jy skets. Sien [PartCraft-instellings](topic:settings).
- Die skermmodus-knoppie, of {{key:Ctrl+Shift+F}}, wissel tussen normaal, volskerm, en volskerm met die balke versteek. Met die balke versteek, beweeg die wyser na die boonste rand (of tik daar) om hulle terug te bring. {{key:Esc}} keer terug na normaal. Dit is ook {{key:Ctrl+Shift+F}} op 'n Mac, nie ⌘ nie.

## Die nutsbalk

Die nutsbalk is in groepe verdeel. Dit verander met wat jy doen, sodat dit in een ry pas:

| Groep | Knoppe | Wys |
|---|---|---|
| Lêer | {{ui:Nuut}}, {{ui:Maak oop}}, {{ui:Stoor}}, {{ui:Uitvoer}} ('n kieslys) | Altyd |
| Skets | {{ui:Skets}} | Wanneer geen skets oop is nie |
| Skets | {{ui:Verlaat}}, {{ui:Lyn}}, {{ui:Reghoek}}, {{ui:Sirkel}}, {{ui:Boog}}, {{ui:Punt}}, {{ui:Middellyn}}, {{ui:Fillet}}, {{ui:Maat}}, {{ui:Konstruksie}} | Net terwyl 'n skets oop is |
| Kenmerke | {{ui:Ekstrudeer}}, {{ui:Knip}}, {{ui:Draai om}}, {{ui:Gat}}, {{ui:Lineêr}}, {{ui:Sirkulêr}}, {{ui:Spieël}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Meer}} ('n kieslys: Gedraaide snit, Vlak, As, Punt, Sweep, Loft, Konsep) | Op die onderdeel, nie terwyl 'n skets of die tekening oop is nie. Fillet en Chamfer werk op reguit rande tussen twee plat vlakke; Shell en Konsep op plat vlakke. Sweep en Loft is nog nie in hierdie weergawe gebou nie (hulle benodig 'n presiese kern); as jy een kies, sê die program so |
| Kenmerke | {{ui:Klaar}} | Net terwyl jy rande of vlakke vir 'n fillet, chamfer, shell of konsep kies |
| Tekening | {{ui:Tekening}} | Op die onderdeel (bruikbaar sodra die onderdeel 'n soliede het) |
| Tekening | {{ui:Datum}}, {{ui:Raam}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Terug}} | Net op die tekenblad |
| Samestelling | {{ui:Samestelling}} | Op die onderdeel (bruikbaar sodra die onderdeel 'n soliede het) |
| Samestelling | {{ui:Voeg kopie by}}, {{ui:Voeg in}}, {{ui:Verbinding}}, {{ui:Botsing}}, {{ui:Wysig onderdeel}}, {{ui:Maak toe}} | Net in 'n samestelling |
| Samestelling | {{ui:Terug}} | Terwyl jy 'n onderdeel vanuit 'n samestelling wysig |
| Wysig | {{ui:Ontdoen}}, {{ui:Herdoen}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Meer}} ('n kieslys: Knip, Kopieer, Plak, Plak op plek, Dupliseer, Skrap, Kies alles, Kies niks) | Altyd; elke item werk op die skets, die geskiedenis of die samestelling waarin jy is |
| Aansig | {{ui:Pas pas}}, {{ui:Normaal na}}, {{ui:Aansigte}} ('n kieslys: Meet, Massa-eienskappe, Snit, Konsep, Zebra, Kromming, {{ui:Basisvlakke}}, dan Isometries, Voor, Agter, Bo, Onder, Regs, Links) | Altyd |

Hou die wyser oor 'n knoppie om te sien wat dit doen en sy sleutel. 'n Grys knoppie kan nou nie gebruik word nie: byvoorbeeld die kenmerkknoppies terwyl 'n skets oop is, of {{ui:Verbinding}} voordat die samestelling twee onderdele het.

Die {{ui:Meer}}-kieslys in die Wysig-groep lys elke redigeringsaksie met sy sleutel. Waarop kopieer en plak werk, volg waar jy is; sien [Kopieer, plak en dupliseer](topic:copy-paste). 'n Grys item se tooltip sê waarom dit nou nie kan werk nie.

Die {{ui:Uitvoer}}-kieslys bevat {{ui:STL, vir 3D-druk}}, {{ui:3MF, vir 3D-druk}}, {{ui:STEP AP242 (presiese soliede)}}, {{ui:STEP AP214 (presiese soliede)}}, {{ui:STEP (gefasetteer, maaskern)}}, {{ui:STEP AP214 (gefasetteer, maaskern)}}, {{ui:DXF van die skets of plat vlak}} en {{ui:Tekening (PDF): aansigte, snit, detail, GD&T}}. Die twee presiese STEP-items is grys: hulle is nog nie in hierdie weergawe gebou nie, so gebruik {{ui:STEP (gefasetteer, maaskern)}}.

## Die geskiedenis (links)

Die paneel aan die linkerkant is die onderdeel se kenmerkgeskiedenis, die lys wat PartCraft van bo na onder herbou.

- Die opskrif is die onderdeel se naam ("Part1" totdat jy dit hernoem).
- **Voorvlak**, **Bo-vlak** en **Regtervlak** kom eerste. Klik een om dit te kies; dit word in die aansig uitgelig.
- Onder hulle is jou kenmerke in die volgorde waarin hulle gemaak is. 'n Skets wat 'n kenmerk gebruik, word onder daardie kenmerk ingesny.
- 'n Vlag aan die regterkant van 'n ry sê wat die toestand is:

| Vlag | Betekenis |
|---|---|
| (geen) | Gebou, en 'n skets is volledig gedefinieer |
| − | 'n Skets wat onder gedefinieer is (dit kan nog beweeg) |
| + | 'n Skets wat oor gedefinieer is |
| ⚠ | Gebou, met 'n waarskuwing (hou die wyser oor om dit te lees) |
| ⚠ fout | Die kenmerk het misluk. Hou die wyser oor om te lees waarom, of klik dit |
| ⚠ nie gebou nie | Die kenmerk benodig 'n ander een wat misluk het of af is |
| af | Onderdruk |

- Elke kenmerk wys sy hoofgetal ná sy naam, soos "25 mm" vir 'n Ekstrudeer of "Ø6.6 deur" vir 'n gat. Dubbelklik die getal, of druk {{key:F2}} op die ry, om dit daar te verander. Sien [Verander groottes](topic:change-sizes).
- Klik 'n kenmerk om dit aan die regterkant te wysig. Dubbelklik 'n skets om dit oop te maak.
- Wanneer jy terugrol, verskyn 'n **Terugrolbalk · rol vorentoe**-ry in die lys. Kenmerke onder dit is grys en nie gebou nie.
- Met 'n ry in fokus, beweeg {{key:Up}} en {{key:Down}} tussen rye, en {{key:Alt+Up}} / {{key:Alt+Down}} skuif die kenmerk self, waar die geskiedenis dit toelaat.

In 'n samestelling wys dieselfde paneel **Onderdele** (die eerste is gemerk "gegrond") en **Verbindings** in plaas daarvan.

### Onderdeelfeite

Onder die geskiedenis lys die **Onderdeel**-boks die soliede se **Volume**, **Oppervlakte**, **Grootte (X × Y × Z)**, **Deurgaande gate**, **Liggame**, **Driehoeke**, die aantal **Kenmerke** en hoeveel **Misluk**. Volumes en oppervlaktes is van die gefasetteerde soliede wat deur die maaskern gebou is, 'n bietjie onder die ware waarde vir ronde vorms (sien [Kenmerke en hul opsies](topic:features#curves-resolution)).

In 'n samestelling het die boks die opskrif **Samestelling**: Onderdele, Instansies, Verbindings, Nie verbind nie en Interferensie.

## Die 3D-aansig (middel)

Die aansig wys die soliede, die basisvlakke en enige skets wat nog nie deur 'n kenmerk gebruik word nie.

Die basisvlakke word volledig geteken terwyl die onderdeel leeg is. Sodra dit 'n soliede het, trek hulle terug: flou geteken, sodat hulle nie die onderdeel bedek nie, en klikke gaan deur hulle na die onderdeel. Hulle kom volledig terug terwyl jy kies waar om te skets ({{ui:Skets}} met niks gekies nie) en wanneer jy een in die geskiedenis kies. {{ui:Aansigte}} › {{ui:Basisvlakke}} versteek hulle heeltemal; hulle wys steeds terwyl jy kies waar om te skets. PartCraft onthou daardie keuse.

- Sleep om die onderdeel te draai, regs-sleep of middel-sleep om te skuif, en rol die wiel om te zoem by die wyser. Besonderhede in [Sleutels en muis](topic:keyboard).
- Hou 'n oppervlak, rand of vlak aan om dit te sien oplig. Klik om dit te kies. Oppervlakke word heel uitgelig en rande word heel geteken en gekies. {{key:Shift}}+klik versamel verskeie rande of oppervlakke. Hulle bly gemerk.
- Die aansigkubus bo-regs draai saam met die onderdeel: klik 'n vlak, rand of hoek om vanaf daar te kyk, sleep dit om te draai, die huisknoppie gaan terug na die begin. Sien [Die aansigkubus](topic:view-cube).
- 'n Gekose Ekstrudeer wys 'n oranje pyltjie op sy eindvlak, 'n Draai om 'n geboë pyltjie aan die einde van sy draai: sleep dit om die diepte of hoek te verander, of tik in die boks langs dit. Sien [Verander groottes](topic:change-sizes#drag-it-in-the-view).
- Wanneer 'n onderdeel leeg is, lys 'n boks met die opskrif **Begin 'n onderdeel** die eerste stappe.
- Sleep 'n `.partcraft.json`- of `.partcraft-asm.json`-lêer enige plek op die aansig om dit oop te maak. 'n `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- of `.3dm`-lêer wat daar gesleep word, maak as 'n soliede liggaam oop.

### Terwyl jy rande of vlakke kies

Ná {{ui:Fillet}}, {{ui:Chamfer}} of {{ui:Shell}} met niks gekies nie (of {{ui:Kies rande}} op so 'n kenmerk), wys die onderdeel soos dit voor daardie kenmerk was. Klik rande of vlakke om hulle by te voeg of weg te haal; hul merke wys wat ingesluit is. {{ui:Klaar}} of {{key:Esc}} rond af. Sien [Rond af, skuins af en hol uit](topic:fillet-chamfer-shell).

### Op die tekenblad

{{ui:Tekening}} vervang die 3D-aansig met die A3-tekenblad. Die wiel zoem, regs- of middel-sleep skuif, en {{key:F}} pas. Sien [Maak 'n tekening](topic:drawing-pdf).

### Terwyl 'n skets oop is

Die aansig draai om reguit na die sketsvlak te kyk, en 'n 2D-sketslaag verskyn bo-op. Die onderdeel wys net die kenmerke wat voor hierdie skets gemaak is. 'n Strook bo-links wys die skets se toestand-kaartjie ("Volledig gedefinieer", "Onder gedefinieer · 3 grade van vryheid" en so aan) en sy naam, soos "Sketch2 op 'n vlak van Extrude1".

## Die eienskappaneel (regs)

Die paneel aan die regterkant wys wat ook al gekies is, en sy opskrif noem dit:

- **Onderdeel** (niks gekies nie): die onderdeel se **Naam** en die **Krommes**-instelling.
- 'n Vlak: 'n {{ui:Skets daarop}}-knoppie.
- 'n **Vlak**: watter soort dit is (Plat vlak, Silinder met sy radius en as, Keël, Sfeer of Torus), sy oppervlakte, watter kenmerk dit gemaak het, en vir 'n plat vlak {{ui:Skets op hierdie vlak}}, {{ui:Normaal na}}, {{ui:Voer vlak uit as DXF}}, {{ui:Ekstrudeer daaruit}}, {{ui:Sny daarin}} en {{ui:Gat hier}} (sien [Trek of stoot 'n hele vlak](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- 'n **Rand**: sy soort (reguit, 'n sirkel met sy middelpunt en radius, of 'n kromme), sy lengte en die twee vlakke waartussen dit lê (soos "Extrude1 eindvlak en Extrude1 kant"), met {{ui:Fillet}}- en {{ui:Chamfer}}-knoppies.
- Verskeie rande of vlakke gekies met {{key:Shift}}: hoeveel, met {{ui:Fillet}} en {{ui:Chamfer}} vir rande, en {{ui:Maak skoon}}.
- 'n Kenmerk: sy getalle en opsies, die afmetings van sy skets, dan {{ui:Onderdruk}}, {{ui:Rol terug na hier}}, {{ui:Skuif op}}, {{ui:Skuif af}}, {{ui:Skrap}} en sy **Naam**.
- 'n Oop skets: sy toestand, die verhoudings wat jy by die keuse kan voeg, die lys van verhoudings en afmetings, **Voeg by volgens koördinate**, en {{ui:Verlaat skets}}, {{ui:Pas pas}} en {{ui:Voer uit as DXF}}.
- Op die tekenblad: die snit- en detailinstellings, of die gekose GD&T-simbool.
- In 'n samestelling: die samestelling, die gekose onderdeel, of die gekose verbinding.

Elke getalboks werk wanneer jy {{key:Enter}} of {{key:Tab}} druk, of wegklik. Die onderdeel bou dadelik weer; daar is geen OK-knoppie nie. Gebruik {{key:Mod+Z}} om terug te gaan.

## Die statusbalk (onder)

- Aan die linkerkant, die wyser se koördinate in die skets (net terwyl 'n skets oop is).
- In die middel, boodskappe: wat om volgende te doen, en waarom iets geweier is. Lees dit wanneer niks lyk of gebeur nie.
- Naby die regterkant, die kernkaartjie: altyd "Mesh kernel" in hierdie weergawe. Hou die wyser daaroor vir wat dit beteken. Sien [Die maaskern](topic:solid-kernels).
- Aan die regterkant, 'n kaartjie: "Herbou…" terwyl die onderdeel herbou, dan "Herbou in … ms" wanneer alles goed is, of "1 kenmerk misluk". In 'n samestelling sê dit "Geplaas in … ms" of tel verbindingsprobleme.

Sien ook [Begin 'n handleiding in Illustreer](topic:illustrate): die werkruimte wat samestellingshandleidings uit jou onderdele en samestellings maak.

## Op 'n smal skerm

Tot 760 pixels breed, soos op 'n foon, hou die aansig die skerm: die nutsbalk is een ry wat sywaarts rol, en die paneels maak as blaaie oop vanaf 'n balk onderaan. {{ui:Gereedskap}} versteek die nutsbalk, en {{ui:Beweging}} sit dit onderaan. Sien [Snitblok, raak en klein skerms](topic:trackpad-and-touch).
