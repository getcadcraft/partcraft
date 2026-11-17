---
title: Die PartCraft-skerm
summary: 'n Rondleiding deur elke balk en paneel: die werkbalk en hoe dit verander, die geskiedenis, die onderdeelfeite, die 3D-aansig, die eienskappepaneel en die statusbalk.
keywords: skerm, uitleg, werkbalk, geskiedenis, kenmerkboom, eienskappe, paneel, statusbalk, koppelvlak, ui, rondleiding, volskerm
from: 5b5bb843
---

Die skerm het vyf dele: die werkbalk bo-oor, die geskiedenis aan die linkerkant, die 3D-aansig in die middel, die eienskappaneel aan die regterkant en die statusbalk langs onder. Bo hulle almal sit die CadCraft-programbalk.

## Die programbalk

Die dun balk heel bo behoort aan die CadCraft-webwerf, nie aan PartCraft self nie. Dit wys die programnaam en waar dit loop, 'n weergawe-kieslys, **Oor PartCraft**, die skermmodusknoppie en die Papier / Model-temaskakelaar.

- **Papier** is donker lyne op 'n ligte vel. **Model** is ligte lyne op 'n donker agtergrond. Skets-kleure volg die tema.
- {{ui:Instellings}} (die rat, of {{key:Mod+,}}) het 'n {{ui:PartCraft}}-oortjie: watter muisknoppie die aansig draai, muiswiel of trackpad, en verwantskappe tydens skets. Sien [PartCraft-instellings](topic:settings).
- Die skermmodusknoppie, of {{key:Ctrl+Shift+F}}, wissel tussen normaal, volskerm, en volskerm met die balke weggesteek. Met die balke weggesteek, beweeg die aanwyser na die boonste rand (of tik daar) om hulle terug te bring. {{key:Esc}} keer terug na normaal. Hierdie sleutel is {{key:Ctrl+Shift+F}} ook op 'n Mac, nie ⌘ nie.

## Die werkbalk

Die werkbalk is gegroepeer. Dit verander met wat jy doen, sodat dit in een ry pas:

| Groep | Knoppe | Wys |
|---|---|---|
| Lêer | {{ui:Nuut}}, {{ui:Maak oop}}, {{ui:Stoor}}, {{ui:Uitvoer}} ('n kieslys) | Altyd |
| Skets | {{ui:Skets}} | Wanneer geen skets oop is nie |
| Skets | {{ui:Verlaat}}, {{ui:Lyn}}, {{ui:Reghoek}}, {{ui:Sirkel}}, {{ui:Boog}}, {{ui:Punt}}, {{ui:Middellyn}}, {{ui:Fillet}}, {{ui:Maat}}, {{ui:Konstruksie}} | Net terwyl 'n skets oop is |
| Kenmerke | {{ui:Ekstrudeer}}, {{ui:Knip}}, {{ui:Draai om}}, {{ui:Gat}}, {{ui:Lineêr}}, {{ui:Sirkulêr}}, {{ui:Spieël}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Meer}} ('n kieslys: Omgedraaide sny, Vlak, As, Punt, Sweep, Loft, Draft) | Op die onderdeel, nie terwyl 'n skets of die tekening oop is nie. Fillet en Chamfer werk op reguit rande tussen twee plat vlakke; Shell en Draft op plat vlakke. Sweep en Loft is nog nie in hierdie weergawe gebou nie (hulle benodig 'n presiese kern); klik op een en dit sê so |
| Kenmerke | {{ui:Klaar}} | Net terwyl jy rande of vlakke vir 'n fillet, chamfer, shell of draft kies |
| Tekening | {{ui:Tekening}} | Op die onderdeel (bruikbaar sodra die onderdeel 'n soliede het) |
| Tekening | {{ui:Datum}}, {{ui:Raam}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Terug}} | Net op die tekenblad |
| Samestelling | {{ui:Samestelling}} | Op die onderdeel (bruikbaar sodra die onderdeel 'n soliede het) |
| Samestelling | {{ui:Voeg kopie by}}, {{ui:Voeg in}}, {{ui:Verbinding}}, {{ui:Botsing}}, {{ui:Wysig onderdeel}}, {{ui:Sluit}} | Net in 'n samestelling |
| Samestelling | {{ui:Terug}} | Terwyl jy 'n onderdeel vanuit 'n samestelling wysig |
| Wysig | {{ui:Ontdoen}}, {{ui:Herdoen}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Meer}} ('n kieslys: Knip, Kopieer, Plak, Plak op plek, Dupliseer, Skrap, Kies alles, Kies niks) | Altyd; elke item werk op die skets, die geskiedenis of die samestelling waarin jy is |
| Aansig | {{ui:Pas pas}}, {{ui:Normaal na}}, {{ui:Aansigte}} ('n kieslys: Meet, Massa-eienskappe, Snit, Draft, Zebra, Kromming, {{ui:Basisvlakke}}, dan Isometries, Voor, Agter, Bo, Onder, Regs, Links) | Altyd |

Hou oor 'n knoppie om te sien wat dit doen en sy sleutel. 'n Grys knoppie kan nie nou gebruik word nie: byvoorbeeld die kenmerkknoppies terwyl 'n skets oop is, of {{ui:Verbinding}} voordat die samestelling twee onderdele het.

Die {{ui:Meer}}-kieslys in die Wysig-groep lys elke redigeringsaksie met sy sleutel. Waarop kopieer en plak werk, volg waar jy is; sien [Kopieer, plak en dupliseer](topic:copy-paste). 'n Grys item se wenkbalkbeskrywing sê waarom dit nou nie kan werk nie.

Die {{ui:Uitvoer}}-kieslys hou {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} en {{ui:Drawing (PDF): views, section, detail, GD&T}}. Die presiese STEP-items skryf ronde vlakke op hul ware oppervlaktes; die gefasetteerde skryf hulle as plat fasette.

## Die geskiedenis (links)

Die paneel aan die linkerkant is die onderdeel se kenmerkgeskiedenis, die lys wat PartCraft van bo na onder herbou.

- Die opskrif is die onderdeel se naam ("Part1" totdat jy dit hernoem).
- **Voorvlak**, **Bo-vlak** en **Regtervlak** kom eerste. Klik een om dit te kies; dit lig op in die aansig.
- Onder hulle is jou kenmerke in die volgorde waarin hulle gemaak is. 'n Skets wat 'n kenmerk gebruik, is ingesien onder daardie kenmerk.
- 'n Vlaggie aan die regterkant van 'n ry vertel jou sy toestand:

| Vlag | Beteken |
|---|---|
| (geen) | Gebou, en 'n skets is volledig gedefinieer |
| − | 'n Skets wat onder gedefinieer is (dit kan nog beweeg) |
| + | 'n Skets wat oor gedefinieer is |
| ⚠ | Gebou, met 'n waarskuwing (hou aan om te lees) |
| ⚠ fout | Die kenmerk het misluk. Hou aan om te lees hoekom, of klik daarop |
| ⚠ nie gebou nie | Die kenmerk benodig 'n ander een wat misluk het of afgeskakel is |
| af | Onderdruk |

- Elke kenmerk wys sy hoofgetal na sy naam, soos "25 mm" vir 'n Ekstrudeer of "Ø6.6 thru" vir 'n gat. Dubbelklik die getal, of druk {{key:F2}} op die ry, om dit daar te verander. Sien [Verander groottes](topic:change-sizes).
- Klik 'n kenmerk om dit aan die regterkant te wysig. Dubbelklik 'n skets om dit oop te maak.
- Wanneer jy terugrol, verskyn 'n **Terugrolbalk · rol vorentoe**-ry in die lys. Kenmerke onder dit is grys en nie gebou nie.
- Met 'n ry gefokus, beweeg {{key:Up}} en {{key:Down}} tussen rye, en {{key:Alt+Up}} / {{key:Alt+Down}} beweeg die kenmerk self, waar die geskiedenis dit toelaat.

In 'n samestelling lys dieselfde paneel eerder **Onderdele** (die eerste is gemerk "gegrond") en **Verbindings**.

### Onderdeelfeite

Onder die geskiedenis lys die **Onderdeel**-blokkie die soliede se **Volume**, **Oppervlakte**, **Grootte (X × Y × Z)**, **Deurgaande gate**, **Liggame**, **Driehoeke**, die aantal **Kenmerke** en hoeveel **Misluk**. Volumes en oppervlaktes is van die gefasetteerde soliede wat deur die maaskern gebou is, 'n bietjie onder die ware waarde vir ronde vorms (sien [Kenmerke en hul opsies](topic:features#curves-resolution)).

In 'n samestelling is die blokkie met die opskrif **Samestelling**: Onderdele, Instansies, Verbindings, Nie verbind nie en Inmenging.

## Die 3D-aansig (middel)

Die aansig wys die soliede, die basisvlakke en enige skets wat nog nie deur 'n kenmerk gebruik word nie.

Die basisvlakke word volledig geteken terwyl die onderdeel leeg is. Sodra dit 'n soliede het, trek hulle terug: vaag geteken, sodat hulle nie die onderdeel bedek nie, en klikke gaan deur hulle na die onderdeel. Hulle kom weer volledig terug terwyl jy kies waar om te skets ({{ui:Skets}} met niks gekies nie) en wanneer jy een in die geskiedenis kies. {{ui:Aansigte}} › {{ui:Basisvlakke}} verberg hulle heeltemal; hulle wys steeds terwyl jy kies waar om te skets. PartCraft onthou daardie keuse.

- Sleep om die onderdeel te draai, regs-sleep of middel-sleep om te verskuif, rol die wiel om by die aanwyser te zoem. Besonderhede in [Sleutels en muis](topic:keyboard).
- Swewe oor 'n vlak, rand of vlak om dit te sien oplig. Klik om dit te kies. Vlakke lig heel op en rande word heel geteken en gekies. {{key:Shift}}+klik versamel verskeie rande of vlakke. Hulle bly gemerk.
- Die aansigkubus regs bo draai met die onderdeel: klik 'n vlak, rand of hoek om vanaf daar te kyk, sleep om te draai, die huisknoppie gaan terug na die begin. Sien [Die aansigkubus](topic:view-cube).
- 'n Gekose Ekstrudeer wys 'n oranje pyltjie op sy eindvlak, en 'n Draai om 'n geboë pyltjie aan die einde van sy draai: sleep dit om die diepte of hoek te verander, of tik in die blokkie daarnaast. Sien [Verander groottes](topic:change-sizes#drag-it-in-the-view).
- Wanneer 'n onderdeel leeg is, lys 'n blokkie met die opskrif **Begin 'n onderdeel** die eerste stappe.
- Sleep 'n `.partcraft.json`- of `.partcraft-asm.json`-lêer enige plek op die aansig om dit oop te maak. 'n `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- of `.3dm`-lêer wat daar gesleep word, maak oop as 'n soliede liggaam.

### Terwyl jy rande of vlakke kies

Na {{ui:Fillet}}, {{ui:Chamfer}} of {{ui:Shell}} met niks gekies nie (of {{ui:Kies rande}} op so 'n kenmerk), wys die onderdeel soos dit voor daardie kenmerk was. Klik rande of vlakke om hulle by te voeg of te laat val; hulle merke wys wat in is. {{ui:Klaar}} of {{key:Esc}} voltooi. Sien [Rond af, skuins en hol uit](topic:fillet-chamfer-shell).

### Op die tekenblad

{{ui:Tekening}} vervang die 3D-aansig met die A3-tekenblad. Die wiel zoem, regs- of middelsleep verskuif, {{key:F}} pas. Sien [Maak 'n tekening](topic:drawing-pdf).

### Terwyl 'n skets oop is

Die aansig draai om reguit na die skets se vlak te kyk, en 'n 2D-skets-laag verskyn bo-op. Die onderdeel wys net die kenmerke wat voor hierdie skets gemaak is. 'n Strook bo links wys die skets se toestand-kaartjie ("Volledig gedefinieer", "Onder gedefinieer · 3 vrywheidsgrade" en so aan) en sy naam, soos "Sketch2 op 'n vlak van Extrude1".

## Die eienskappaneel (regs)

Die paneel aan die regterkant wys wat ook al gekies is, en sy opskrif noem dit:

- **Onderdeel** (niks gekies nie): die onderdeel se **Naam** en die **Kurwes**-instelling.
- 'n Vlak: 'n {{ui:Skets daarop}}-knoppie.
- 'n **Vlak**: wat dit vir soort is (Plat vlak, Silinder met sy radius en as, Keël, Sfeer of Torus), sy oppervlakte, watter kenmerk dit gemaak het, en vir 'n plat vlak {{ui:Skets op hierdie vlak}}, {{ui:Normaal na}}, {{ui:Voer vlak uit as DXF}}, {{ui:Ekstrudeer daaruit}}, {{ui:Sny daarin}} en {{ui:Gat hier}} (sien [Trek of stoot 'n hele vlak](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- 'n **Rand**: sy soort (reguit, 'n sirkel met sy middelpunt en radius, of 'n kromme), sy lengte en die twee vlakke waartussen dit lê (soos "Extrude1 eindvlak en Extrude1 sy"), met {{ui:Fillet}}- en {{ui:Chamfer}}-knoppies.
- Verskeie rande of vlakke gekies met {{key:Shift}}: hoeveel, met {{ui:Fillet}} en {{ui:Chamfer}} vir rande, en {{ui:Maak skoon}}.
- 'n Kenmerk: sy getalle en opsies, die dimensies van sy skets, dan {{ui:Onderdruk}}, {{ui:Rol terug na hier}}, {{ui:Skuif op}}, {{ui:Skuif af}}, {{ui:Skrap}} en sy **Naam**.
- 'n Oop skets: sy toestand, die verwantskappe wat jy by die keuse kan voeg, die lys verwantskappe en dimensies, **Voeg by koördinate**, en {{ui:Verlaat skets}}, {{ui:Pas pas}} en {{ui:Voer uit as DXF}}.
- Op die tekenblad: die snit- en detailinstellings, of die gekose GD&T-simbool.
- In 'n samestelling: die samestelling, die gekose onderdeel, of die gekose verbinding.

Elke getalblokkie werk wanneer jy {{key:Enter}} of {{key:Tab}} druk, of wegklik. Die onderdeel bou dadelik weer op; daar is geen OK-knoppie nie. Gebruik {{key:Mod+Z}} om terug te gaan.

## Die statusbalk (onder)

- Links, die aanwyser se koördinate in die skets (net terwyl 'n skets oop is).
- In die middel, boodskappe: wat om volgende te doen, en waarom iets geweier is. Lees dit wanneer niks lyk of dit gebeur nie.
- Naby die regterkant, die kernkaartjie: altyd "Maaskern" in hierdie weergawe. Hou daaroor vir wat dit beteken. Sien [Die maaskern](topic:solid-kernels).
- Aan die regterkant, 'n kaartjie: "Herbou…" terwyl die onderdeel herbou, dan "Herbou in … ms" wanneer alles goed is, of "1 kenmerk misluk". In 'n samestelling sê dit "Geplaas in … ms" of tel verbindingsprobleme.

Sien ook [Begin 'n handleiding in Illustrate](topic:illustrate): die werkruimte wat samestellingshandleidings maak uit jou onderdele en samestellings.

## Op 'n smal skerm

Tot 760 pixels breed, soos op 'n foon, hou die aansig die skerm: die werkbalk is een ry wat sywaarts rol, en die panele maak oop as blaaie vanaf 'n balk onderaan. {{ui:Gereedskap}} verberg die werkbalk en {{ui:Beweging}} sit dit onderaan. Sien [Trackpad, aanraking en klein skerms](topic:trackpad-and-touch).
