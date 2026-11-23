---
title: Wat nog nie gebou is nie
summary: Alles wat hierdie PartCraft-bou nog nie doen nie, van draaiende sweeps tot duimvertoning, tekeninge se afmetings en subsamestellings, met wat om vandag in plaas daarvan te doen.
keywords: ontbrekend, nog nie, beperkings, limiete, padkaart, presiese kern, fillet, chamfer, shell, sweep, loft, step-invoer, simulasie, vervaardiging, draaiende sweep, loft-eindtangensie, vlakfillet, vergelykings, duim, tekeningafmetings, subsamestellings, wolk, tablet, foon
from: 97b10a29
---

PartCraft is 'n vroeë bou. Hierdie bladsy lys wat dit nog nie doen nie, sodat jy nie daarvoor soek nie, en wat om vandag in plaas daarvan te doen. Niks hier het 'n datum nie.

## Benodig 'n presiese kern

Hierdie weergawe bou elke onderdeel met die mesh-kern (sien [Die mesh-kern](topic:solid-kernels)). Alles hieronder benodig 'n presiese meetkundekern, wat hierdie weergawe nog nie het nie. Onderdele wat met hierdie kenmerke gestoor is, open steeds: die kenmerke bly in die geskiedenis, gemerk as nie gebou nie, en word behou wanneer jy stoor.

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| {{ui:Fillet}} en {{ui:Chamfer}} op ronde rande; filets waarvan die radius langs die rand verander; afrondings wat glad saamvloei waar hulle ontmoet (die mesh-kern sny dit af) | Fillet en Chamfer werk op reguit rande tussen plat vlakke; rond ander hoeke in die skets af voordat jy uitdruk ({{ui:Fillet}} in 'n skets, {{key:F}}) |
| {{ui:Shell}} wat geboë vlakke oopmaak; mure van verskillende dikte | Oop plat vlakke; voeg materiaal by met uitdrukkings waar 'n muur dikker moet wees |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} op geboë vlakke; uitdruk tot 'n vlak, die volgende vlak of 'n hoekpunt; taps toelopende uitdrukkings | Druk uit of draai, in stappe waar nodig; druk uit tot 'n diepte wat jy meet |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} en plat patrone | Druk die plaat of die rib se profiel uit |
| Oppervlakke: 'n {{ui:Form}} afwerk in die onderdeel, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Nie beskikbaar nie |
| Verskeie liggame: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, kenmerke wat 'n nuwe liggaam maak | Een soliede liggaam; patrone en spieëlkopieë kenmerke |
| Skets, vlakke, asse en punte op vlakke wat net 'n presiese kern kan vind ('n vlak wat deur 'n fillet gemaak is, 'n gatmuur, 'n vlak van 'n ingevoerde soliede liggaam) | Skets op basisvlakke, verwysingsvlakke en die plat vlakke van uitdrukkings en omwentelings |
| 'n Generatiewe ontwerpuitkoms wat as 'n onderdeel oopgemaak of daarby gevoeg word (dit word 'n ingevoerde soliede liggaam) | Laai die uitkoms af as STL of STEP |
| Redigeer die geboë vlakke van 'n oopgemaakte STEP-lêer as presiese oppervlakke; presiese STEP van spline-, geswaaide en omwentelde vlakke uit 'n STEP-lêer, spline-sye, gemodelleerde drade, STL-/OBJ-/3MF-liggame en samestellings; STEP vir ander onderdeelmodelleerders | {{ui:Maak oop}} lees STEP as driehoeke en behou die lêer se plat vlakke, silinders, keëls, sfere en torusse vir die uitvoer ([Maak 'n STEP-lêer oop](topic:import-step)); {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} skryf elke analitiese vlak presies en hou dié as fasette ([Uitvoer](topic:export-files#for-other-cad-programs-step)); die makro vir 'n ander onderdeelmodelleerder skryf steeds |
| Ware boë in tekeningaansigte | Aansigte en snitaansigte word uit die fasette geteken |
| Presiese volumes, oppervlaktes en afstande | {{ui:Meet}} gee die gefasetteerde soliede liggaam se getalle, 'n bietjie laag op ronde dele; 'n fyner **Krommes**-instelling bring hulle nader |

Sommige rye in die tabelle hieronder stel een van hierdie kenmerke voor as die manier om iets anders te omseil. Daardie voorstelle geld sodra 'n presiese kern terug is.

## Kenmerke

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Vlakfillets, volrondfillets, filets met radiusse wat by punte langs 'n rand gestel word | Konstante of lineêr veranderlike {{ui:Fillet}}; verskeie fillet-kenmerke |
| Skulpe met verskillende muurdiktes | Een {{ui:Shell}}-dikte; voeg materiaal by met uitdrukkings waar 'n muur dikker moet wees |
| Konsep op vrye (spline-)vlakke | {{ui:Draft}} werk op plat, silindriese en koniese vlakke |
| Draaiende sweeps, dunwand- en oppervlaksweeps; eindtangensie op die Loft-kenmerk; 'n loft met een leidrail; spline-paaie | {{ui:Sweep}} met 'n vaste oriëntasie of 'n eindskaal; 'n loft met twee of meer leidrails: sien [Sweep, loft en konsep](topic:sweep-loft-draft) |
| Ribbes uit boë of splines; ribbes wat vierkant met die skets gegroei word (uit 'n bo-aansig); konsep op ribbes; verskeie ribbes uit een skets | {{ui:Rib}} uit een ketting lyne in die rib se eie vlak: sien [Ribbes en gussets](topic:rib) |
| "Tot" 'n geboë oppervlak, "tot volgende" wat by 'n geboë vlak stop | Tot 'n plat vlak of 'n verwysingsvlak |
| Teen-gebore gate, duim- en pypdrade, taps toelopende drade, draadafloop en afgeskuinste drabegin | Verseëing met 'n klein diepte; ISO-metriese en trapesvormige drade, kosmeties of gemodelleer: sien [Drade op asse en gate, geteken of gemodelleer](topic:threads) |
| Dun-kenmerk-uitdrukkings | Teken albei wande van die profiel |
| Patroonkopieë een vir een oorgeslaan, vulpatrone | Gebruik aparte kenmerke; patrone langs 'n kromme: {{ui:Padpatroon}} |
| Kopieer patrone, spieëls, filets, skuinses, skulpe en ingevoerde soliede liggame | Kopieer die skets of kenmerk waarop hulle gebou is, of patroon dit |
| Presiese (G1) tangensie by 'n vorm se buitengewone punte; samesmelting van 'n vorm se lappe in groter vlakke | Verhoog die vorm se **Vlak**: die benaderde lappe word kleiner; sien [Vrye vorms met Vorm](topic:form-surfaces) |
| 'n Vorm van verskeie afsonderlike geslotte stukke in een kenmerk; brue tussen vorms | Een geslote stuk per Vorm-kenmerk; voeg hulle met Verbind saam |
| Oppervlakliggame in die aansig kies (behalwe snyde- en lappunte); oppervlakfillets; ontsny; G2-lappe; Gordon-oppervlakke wat aan geboë bure raak (raak aan vlakke en plat vlakke is gebou) | Kies hulle volgens naam in die kenmerk se paneel; verdik eers, en fillet dan die soliede liggaam |
| 'n Liggaamlys in die geskiedenis; verborge liggame uit uitvoere uitlaat | Hernoem en verberg liggame in die onderdeelpaneel se liggaamlys; skrap of onderdruk die kenmerk wat 'n liggaam gemaak het om dit uit te laat |
| 'n Nie-eenvormige skaal wat silinders en keëls analities hou; nie-eenvormige skaal van versette oppervlakke | {{ui:Skaal liggaam}} maak geboë vlakke B-splines wat sluit (binne 0,0000004 mm); 'n eenvormige skaal bly presies |
| Kombineer oppervlakliggame; Minkowski-somme | Eers {{ui:Steek}} of {{ui:Verdik}}, dan {{ui:Kombineer}} |
| 'n Liggaamlys in die geskiedenis; verborge liggame uit uitvoere laat | Hernoem en verberg liggame in die onderdeelpaneel se liggaamlys |
| Toleransie-analise: toleransiestapels wat hoeke draai (2D- en 3D-vektorlusse), sensitiwiteite uit die meetkunde uitgewerk, Monte Carlo met ander verdelings, groottoleransies op sketsafmetings, bonus-toleransie uit materiaaltoestand | {{ui:Toleransiestapel}} in 'n samestelling: een rigting, ergste geval en RSS, toleransies getik, uit die titelblok se algemene toleransie of uit GD&T-rame: sien [Toleransiestapels](topic:tolerance-stackup) |
| Nesting: snyvolgorde en inlope, gedeelde rande een keer sny, dele wat saam gehou moet word; reste van rolle, voorraad wat tussen projekte gedeel word | {{ui:Rangskik plat onderdele op velle…}} met spasiëring, kantlyne, draaie en korrel: sien [Rangskik plat onderdele op velle](topic:nest-flat-parts); oorblywende plate word bewaar en eerste gebruik: sien [Hou en hergebruik afvalstukke](topic:nest-offcuts); beplan die sny in jou snyer se eie sagteware |
| Plaatmetaal: soomrande, sprong, skuins- en kontoerflense; flense op geboë rande of op 'n gebuigde basisflens se vlakke; gesketste buigings; hoekafsluitings; vormgereedskap; omskakeling van 'n soliede liggaam na plaatmetaal; die plat van 'n gebuigde basisflens met snitte daarin; buigtabelle | {{ui:Basisflens}} (plaat of 'n gebuigde profiel), {{ui:Randflens}} op 'n plaat se reguit rande met buigontlastings, en die plat patroon met 'n K-faktor: sien [Plaatmetaal](topic:sheet-metal) |
| Konseptanalise op samestellings; die skeidingslyn vind; wanddiktanalise | {{ui:Trekhoek-ontleding}} op die onderdeel in Ontwerp: sien [Kontroleer trek vir giet en vorm](topic:draft-analysis); maak elke onderdeel van 'n samestelling oop om dit te kontroleer |

## Sketse

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Ellipse, raakboë, konieke, splines met 'n vaste graad of gewigte (NURBS) | Splines (kubies), boë en sirkels met Raak-verhoudings |
| 'n Punt op 'n spline ('n verhouding), krommingsverhoudings (G2) | Plaas 'n spline se eie punt waar dit moet deurgaan |
| Versette kopieë van splines wat latere veranderinge volg; versettings van kettings met skerp spline-hoeke | Versit weer ná die verandering; rond die hoek eers af |
| Patroonkopieë wat aan die oorspronklike gekoppel bly; patrone langs 'n kromme | Patroon weer ná 'n verandering |
| Vrye of geskuinsde sirkelvormige rande projekteer; geprojekteerde meetkunde wat die onderdeel volg | Projekteer reguit en parallelle sirkelvormige rande, en dimensioneer dan |
| Aangedrewe (verwysings-)afmetings | Lees groottes uit die paneel of die onderdeelfeite |
| Kollineêre verhoudings | Parallel met 'n afstand van 0 |
| Plak in 'n ander program (die stelselklipbord) | Voer DXF, STEP, STL of 3MF uit |
| Boë tik, relatiewe of poolkoördinate | Tik lyne en sirkels; teken boë met die Boog-gereedskap |
| Geometrie kies sonder 'n wyser | Benodig 'n klik of tik |

## Parameters en eenhede

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Konfigurasies wat materiale verander; 'n CSV-ontwerptabel wat kenmerke afskakel | Konfigurasies stel parameters in en skakel kenmerke aan en af: sien [Konfigurasies en ontwerptabelle](topic:design-tables); `partcraft variants` bou gestoorde konfigurasies volgens naam, met afgeskakelde kenmerke ingesluit: sien [Maak 'n variantpak uit jou konfigurasies](topic:variant-pack) |
| Vergelykings op die getalle in die nuutste kenmerke se eie paneels (vlak, sweep, konsep en soortgelyke) | Skryf dit in 'n skrip of met `partcraft set` ([Skripte en die opdragreël](topic:scripts-and-cli)) |
| 'n Onderdeel wat in duim gewys word | Groottes word in millimeter gewys; tik `2in` in 'n getalblokkie of 'n uitdrukking en dit word 50,8 |

## Lêers

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Redigeer 'n ingevoerde STEP-soliede liggaam se eie kenmerke (dit kom sonder geskiedenis aan) | Voeg materiaal by of sny dit met jou eie kenmerke |
| Lees kleure, name, samestellingstruktuur en PMI uit STEP | Nie beskikbaar nie |
| glTF-, OBJ-, IGES- en Parasolid-uitvoer; DWG van 'n 3D-onderdeel (slegs die variantpak skryf 'n DWG: die tekenblad) | STL of 3MF vir meshes; STEP vir soliede liggame; DXF vir 2D |
| Maak IGES-, DXF- of ander programme se eie lêers oop (`.3dm`-lêers open as een liggaam: [Maak 'n .3dm-model oop as 'n soliede liggaam](topic:open-3dm-files)) | Vra vir STEP, of 'n geslote STL-, OBJ- of 3MF-mesh: [Maak 'n STL, OBJ of 3MF oop](topic:open-meshes) |
| Samestellingstruktuur ('n boom met onderdeelnaam) in uitgevoerde STEP | Samestelling-STEP is een saamgestelde voorwerp van die geplaaste soliede liggame |
| Stoor na 'n gids van jou keuse sonder die blaaier se aflaai | Skakel "vra waar om te stoor" aan in die blaaier se aflaaiinstellings |

## Tekeninge

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Afmetings buiten die drie algehele groottes (gatgroottes, posisies, toleransies op groottes) | Merk die PDF aan, of voer DXF uit en dimensioneer dit in 'n 2D-CAD-program |
| Meer as een snit of een detail; uitgelynde, uitgebreekte en hulpaansigte | Een snit en een detail per tekening |
| Vrye teks, notas en tabelle op die blad (behalwe die titel- en hersieningsblokke) | Die afwerkingsnota, of teks wat op die PDF bygevoeg is |
| Eerste-hoek-projeksie, bewegende aansigte, portretbladsye | Derde hoek, outomatiese uitleg, landskapbladsye A4–A0 en ANSI A–E |
| Lewendige snitaansig: verskeie vlakke of 'n snitkassie terselfdertyd, 'n omtrek rondom die snit, die snit in die lêer stoor | Een vlak op 'n slag uit {{ui:Aansigte}} › {{ui:Snitaansig}}; sien [Kyk binne met 'n snitaansig](topic:section-view) |
| Samestellingstekeninge met meer aansigte, afmetings of balonne wat jy kan skuif | Een isometriese (of uiteengetrekte) aansig met outomatiese balonne en die onderdelelys |
| Kopieer en plak van GD&T- en afwerkingsimbole | Plaas elk met Datum, Raam of Afwerking |
| Handleidings: STEP-lêers in Illustrate se {{ui:Vanaf 'n ander lêer…}}, 'n model wat direk van ModelCraft of BimCraft kom, foto's teen die padspoorder se kwaliteit, interaktiewe 3D binne 'n PDF | Maak die STEP in Ontwerp oop en begin die handleiding {{ui:Vanaf die oop onderdeel}}; stoor die model as glTF (.glb); PNG-foto's van die 3D-aansig; die interaktiewe 3D-lêer: sien [Begin 'n handleiding in Illustrate](topic:illustrate) |

## Samestellings

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Rat-, rak-, nok- en skroefverbindings; 'n balverbinding beperk tot 'n keël; verbindings op geboë vlakke of tussen punte | Starre, draaibare, skuif-, silindriese, plat, bal- en pen-in-gleuf-verbindings op plat vlakke, elk met sy eie waardes en limiete: sien [Bou 'n samestelling](topic:build-assembly) |
| Uiteengetrekte stappe wat dele draai, en sleep van dele wat verbindings plaas | Reguit uiteentrek-stappe; verwyder 'n verbinding om 'n deel met die hand te beweeg |
| Subsamestellings | Een vlak van dele alleen |
| Ratte, nokke, kontak | Nie beskikbaar nie |

## Vervaardiging

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| 3D-aanpassende verwydering en versette growwe bewerking in 3D; waterlyn-, potlood-, radiale en spiraalafwerking; aanpassende passe wat as boë geskryf word | 3D-growwe in reguit rye en rusbewerking: sien [3D-growwe en rusbewerking](topic:rough-3d); Parallel- en Scallop-afwerking: sien [3D-afwerking](topic:finish-3d); 2,5-as-vlak, holte, 2D-aanpassend, kontoer, boor en skuins: sien [Maak gereedskapbane en G-kode](topic:manufacture) |
| Swarf-snyding, vloeilyn- en meervoudige-as-growwe bane, geskuinsde werkvlakkodes (G68.2), botsingkontroles van die houer en die masjien; 'n simulasie van 5-as- en roterende snitte | 'n Geskuinsde gereedskap vir enige bewerking, 5-as-afwerking met 'n kogel-eindfrees en 4de-as roterende afwerking: sien [4- en 5-asbewerking](topic:multi-axis) |
| Boor en binnedrade op 'n draaibank, G71/G76-siklusse, boë in draaibane, lewendige gereedskap, 'n subspil | Buitedraaiwerk: vlak, growwe, afwerking, groef, sny deel af, draad, boor op middelpunt: sien [Draaiwerk op 'n draaibank](topic:turning) |
| Toets 'n hoek of 'n hoek, 'n gereedskapsetter, 'n grootte teen 'n toleransie meet | Toets 'n vlak, 'n sy, 'n gat of 'n uitsteeksel om die werkverskuiwing te stel: sien [Toetsing](topic:probing) |
| Botsingkontroles van houer en skag | Let op die vlerklengte-waarskuwings en kontroleer in jou beheerder se simulator |
| Gereedskaplewe- en subprogramsiklusse in 'n pos; laai van ander programme se postlêers | Skryf of verander 'n pos in PartCraft se eie formaat: sien [Postprosessors wat jy kan wysig](topic:post-processors) |
| Duim-G-kode (G20) | Slegs millimeter (G21) |

## Simulasie en generatiewe ontwerp

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Nie-lineêre studies: swigting, groot defleksies, kontak tussen dele, vermoeidheid | Lineêre statiese en natuurlike frekwensies: sien [Kontroleer spanning en defleksie](topic:simulation); hou die veiligheidsfaktor ruim bo 1 |
| Nie-lineêre knak (onvolmaakthede, na-knak, snap-through) | Lineêre knaklaswaarde-faktore met 'n ruim marge: sien [Hitte, termiese spanning en knak](topic:thermal-and-buckling) |
| Straling tussen vlakke (aansigfaktore), kontakweerstand, temperatuurafhanklike materiale, traagheid in termiese spanning (termiese skokgolwe) | Straling na die omgewing, bestendige of kwasi-statiese termiese spanning oor tyd, konstante eienskappe: sien [Hitte, termiese spanning en knak](topic:thermal-and-buckling) |
| Outomatiese verfyning vir oorgangshitte en studies met 'n termiese belasting; die rooster growwer maak waar die fout klein is; 'n teiken op 'n plaaslike hoeveelheid (die piekspanning op een plek) | **Verfyn outomaties** vir statiese, knak-, natuurlike-frekwensie- en bestendige termiese studies, op die fout oor die hele onderdeel: sien [Kontroleer spanning en defleksie](topic:simulation); andersins verlaag die elementgrootte |
| Lagers- en boutbelastings, verwyderde kragte, momente, vere, voorgeskrewe verplasings | Kragte en drukke op vlakke, swaartekrag; vaste en wrywinglose vlakke |
| Simulasie van samestellings; materiale wat volgens rigting verskil (gedrukte lae, komposiete) | Een onderdeel, een isotropiese materiaal |
| Verskeie oplosdrade vir tetraëderstudies, hitteoordrag en generatiewe ontwerp; enige drade op 'n bladsy wat nie kruis-oorsprong-geïsoleer is nie | Voksel-studies, knak, spanning oor tyd en laminêre vloei gebruik die drade waar die bladsy dit toelaat: sien [PartCraft-instellings](topic:settings) |
| Turbulente vloei met ontwerpakkuraatheid (die Spalart–Allmaras-model is as eksperimenteel ingesluit: pyfwrywing 30 tot 34 % hoog, terugstap-herverbinding 21 tot 39 % kort; beplan: fyner selle naby die wande), hitte in vloei, ongestadige (tydakkurate) vloei, vrye oppervlaktes, nie-Newtoniese vloeistowwe, roterende dele | Laminêre, stadige, isotermiese vloei van 'n Newtoniese vloeistof, of die eksperimentele turbulente model vir kwalitatiewe patrone: sien [Simuleer vloeistofvloei](topic:flow-simulation); die paneel waarsku wanneer die Reynolds-getal voorbij laminêr is |
| Spanningslimiete en vervaardigingsreëls (oorhange, freesrigtings) in generatiewe ontwerp; verskeie materiale in een vorm | Stywste vorm vir 'n volume; kontroleer die uitkoms in Simulasie: sien [Laat 'n vorm groei uit belastings](topic:generative-design) |
| 'n Uitkoms as 'n redigeerbare (gladde, parametriese) soliede liggaam | STL, gefasetteerde STEP, of 'n onderdeel met die uitkoms as 'n ingevoerde gefasetteerde soliede liggaam |
| Elektriese masjienontwerp: 'n rotor wat in 'n stator draai, draaimoment teenoor hoek, versadigende staal, magnete wat sterkte verloor verby hul knie, werwelstrome en yster- en koperverliese; magnetiese velde in 3D of op geboë meshes | Lineêre 2D-magnetostatika op 'n rooster in die analisebiblioteek: spoele, yster, permanente magnete op hul terugspoorlyn, gapings, induktansie en trek: sien [Magnetiese velde in 2D](topic:magnetic-fields-2d) |

## Skripte

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Sweef-hulp, breekpunte en stap deur 'n skrip in die skripredigeerder | Vind, vou en voltooi is in (sien [Skryf en voer skripte uit](topic:craftscript)); vir die res, jou eie redigeerder: {{ui:Stoor}} en {{ui:Maak oop}} in die Skrip-groep skuif skripte in en uit; ingeboude funksies word gelys in [Die CraftScript-taal](topic:craftscript-language) |
| Breekpunte en stap deur 'n skrip | `disp` en `fprintf` langs die pad; {{key:Mod+Enter}} voer 'n paar gekose reëls op 'n slag uit |
| Velde en grafieke wat 'n skrip wys, getekend in die Ontwerp-werkruimte; skripte wat die onderdeel se parameters verander | Hulle wys in die Skrip-werkruimte; skripte lees parameters met `param` (sien [Skryf en voer skripte uit](topic:craftscript)), verander hulle op die {{ui:Parameters}}-oortjie |
| Prente en tabelle langs grafieke; 'n grafiek wysig (zoem, asgrense) voor jy dit stoor | Langs mekaar wys die grafieke; stoor 'n grafiek as PNG, SVG of CSV en voltooi dit elders |
| numpy en ander Python-pakkette; Python vanlyn; Python in die redigeerder vou; Pascal Script | Python se standaardbiblioteek, CraftScript en Lua: sien [Skripte in Python](topic:craftscript-python) |
| Lua-funksies aan ingeboude funksies oorgee; 'n biblioteekfunksie vanuit Lua roep met 'n naam wat terwyl die skrip loop gebou is | Skryf die biblioteekfunksie se naam in die skrip (`cs.static_tet(…)`), of roep dit vanuit 'n CraftScript-skrip |

## Die app

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Wolkberging, deel en weergawegeskiedenis | Nog nie beskikbaar nie. Stoor lêers op jou rekenaar en hou weergawes volgens naam |
| PartCraft as 'n geïnstalleerde app op iPad en iPhone | Gebruik PartCraft in die toestel se blaaier; op Android en op die rekenaar loop dit ook in CadCraft Studio (getcadcraft.com/download) |
| Kontekskieslyste (regsklik) | Werkbalk en regterpaneel |
| Volledig vanlyn werk vanaf 'n vars begin | Net wanneer die app vir vanlyn gebruik gestoor is: sien [Werk vanlyn](common:offline) |

Rapporteer wat jy die meeste mis deur die webwerf se ondersteuningsbladsy: dit vorm wat volgende kom.

## Ingenieur (generators en velde)

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Koppe, poorte en passtukke op die gegenereerde hitteruiler; temperatuurkrommes vir materiaalsterkte; buisverliese in die spruitstuk | Die generators bou die kern en die buise; voeg passtukke by in Ontwerp; gebruik die materiaal se kamertemperatuurgetalle met 'n veiligheidsfaktor |
| Generators byvoeg uit die byvoegingsgids met een klik | {{ui:Maak oop}} in die Ingenieur-werkruimte voeg 'n generator uit 'n lêer by |
| 'n Veldlêer fyner as die generator se eie voksel-grootte; `.vdb`-lêers lees | Stoor 'n fyner veld uit 'n skrip; `.vdb` word geskryf, nie gelees nie |
| Drukvatkode-berekeninge | Die handboek-dunwand- en dikwandformules, met die veiligheidsfaktor wat jy kies; nie 'n kodemarge nie |
| Generators vir die ander apps | Slegs PartCraft in hierdie weergawe |
