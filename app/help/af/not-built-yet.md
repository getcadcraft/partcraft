---
title: Wat nog nie gebou is nie
summary: Alles wat hierdie PartCraft-bou nog nie doen nie, van draaiende sweeps tot duimvertoning, tekeningmaatte en subsamestellings, met wat jy vandag in plaas daarvan doen.
keywords: ontbrekend, nog nie, beperkings, padkaart, presiese kern, fillet, chamfer, shell, sweep, loft, STEP-invoer, simulasie, vervaardiging, draaiende sweep, eindraaklyn, vlakfillet, vergelykings, duim, tekeningmaatte, subsamestellings, wolk, tablet, foon
from: 9b868162
---

PartCraft is 'n vroeë bou. Hierdie bladsy lys wat dit nog nie doen nie, sodat jy nie daarvoor soek nie, en wat om vandag in plaas daarvan te doen. Niks hier het 'n datum nie.

## Benodig 'n presiese kern

Hierdie weergawe bou elke onderdeel met die maaskern (sien [Die maaskern](topic:solid-kernels)). Alles hieronder benodig 'n presiese meetkunde-kern, wat hierdie weergawe nog nie het nie. Onderdele wat met hierdie kenmerke gestoor is, maak steeds oop: die kenmerke bly in die geskiedenis, gemerk as nie gebou nie, en word behou wanneer jy stoor.

| Nog nie gebou nie | Instead, today |
|---|---|
| {{ui:Fillet}} en {{ui:Chamfer}} op ronde rande; afrondings wat langs die rand verander; afrondings wat glad saamvloei waar hulle ontmoet (die maaskern sny hulle skuins af) | Fillet en Chamfer werk op reguit rande tussen plat vlakke; rond ander hoeke in die skets af voordat jy uitstoot ({{ui:Fillet}} in 'n skets, {{key:F}}) |
| {{ui:Shell}} wat geboë vlakke oopmaak; mure van verskillende dikte | Oopmaak van plat vlakke; voeg materiaal by met uitstotings waar 'n muur dikker moet wees |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} op geboë vlakke; uitstoot tot 'n vlak, die volgende vlak of 'n hoekpunt; taps toelopende uitstotings | Stoot uit of roteer, in stappe waar nodig; stoot tot 'n diepte wat jy meet |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} en platpatrone | Stoot die plaat of die rib se profiel uit |
| Oppervlaktes: die afwerking van 'n {{ui:Form}} in die onderdeel, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Nie beskikbaar nie |
| Verskeie liggame: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, kenmerke wat 'n nuwe liggaam maak | Een soliede; patrone en spieëlkopieë-kenmerke |
| Skette, vlakke, asse en punte op vlakke wat net 'n presiese kern kan vind (’n vlak wat deur 'n afronding gemaak is, 'n gatwand, 'n vlak van 'n ingevoerde soliede) | Skets op basisvlakke, verwysingsvlakke en die plat vlakke van uitstotings en roteerings |
| 'n Generatiewe ontwerpuitkoms wat as 'n onderdeel oopgemaak of daarby gevoeg word (dit word 'n ingevoerde soliede) | Laai die uitkoms af as STL of STEP |
| Redigeer 'n oopgemaakte STEP-lêer se geboë vlakke as presiese oppervlaktes; presiese STEP van spline-, geswaaide en geroteerde vlakke uit 'n STEP-lêer, spline-sye, gemodelleerde drade, STL-, OBJ- en 3MF-liggame en samestellings; STEP vir ander onderdeelmodelleerders | {{ui:Open}} lees STEP as driehoeke en behou die lêer se plat vlakke, silinders, keëls, sfere en torusse vir die uitvoer ([Maak 'n STEP-lêer oop](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (presiese soliede)}} skryf elke analitiese vlak presies en hou daardie as fasette ([Uitvoer](topic:export-files#for-other-cad-programs-step)); die makro vir 'n ander onderdeelmodelleerder skryf steeds |
| Ware boë in tekeningaansigte | Aansigte en snitaansigte word uit die fasette geteken |
| Presiese volumes, oppervlaktes en afstande | {{ui:Measure}} gee die gefasette soliede se getalle, 'n bietjie laag op ronde dele; 'n fyner **Krommes**-instelling bring hulle nader |

Sommige rye in die tabelle hieronder stel een van hierdie kenmerke voor as die manier om iets anders te omseil. Daardie voorstelle geld sodra 'n presiese kern terug is.

## Kenmerke

| Nog nie gebou nie | Instead, today |
|---|---|
| Gesigafrondings, volronde afrondings, afrondings met radiusse wat by punte langs 'n rand gestel is | Konstante of lineêre veranderlike {{ui:Fillet}}; verskeie fillet-kenmerke |
| Skille met verskillende muurdikte | Een {{ui:Shell}}-dikte; voeg materiaal by met uitstotings waar 'n muur dikker moet wees |
| Draft op vrye-vorm- (spline-)vlakke | {{ui:Draft}} werk op plat, silindriese en keëlvlakke |
| Draaiende sweeps, dunwand- en oppervlaksweeps; eindraaklyn op die Loft-kenmerk; 'n loft met een geleirail; spline-paaie | {{ui:Sweep}} met 'n vaste oriëntasie of 'n eindskaal; 'n loft met twee of meer geleirails: sien [Sweep, loft en draft](topic:sweep-loft-draft) |
| Ribbes uit boë of splines; ribbes wat vierkant na die skets gegroei word (uit 'n bo-aansig); draft op ribbes; verskeie ribbes uit een skets | {{ui:Rib}} uit een ketting lyne in die rib se eie vlak: sien [Ribbes en gussets](topic:rib) |
| "Tot" 'n geboë oppervlak, "tot volgende" wat by 'n geboë vlak stop | Tot 'n plat vlak of 'n verwysingsvlak |
| Teenboorde gate, duim- en pyp-drade, taps toelopende drade, draadafloop en afgeskuinste drabegin | Verlaagde kontrabore met 'n klein diepte; ISO-metriese en trapesvormige drade, kosmeties of gemodelleer: sien [Drade op asse en gate, geteken of gemodelleer](topic:threads) |
| Dun-kenmerk-uitstotings | Teken albei mure van die profiel |
| Patroonkopieë een vir een oorgeslaan, vulpatrone | Gebruik aparte kenmerke; patrone langs 'n kromme: {{ui:Path pattern}} |
| Kopieerpatrone, spieëls, afrondings, skuinssnitte, skille en ingevoerde soliede | Kopieer die skets of kenmerk waarop hulle gebou is, of patroon dit |
| Presiese (G1) raaklyn by 'n vorm se buitengewone punte; samesmelting van 'n vorm se lappe in groter vlakke | Verhoog die vorm se **Vlak**: die benaderde lappe word kleiner; sien [Vrye-vorm-vorms met Vorm](topic:form-surfaces) |
| 'n Vorm van verskeie afsonderlike geslote stukke in een kenmerk; brue tussen vorms | Een geslote stuk per Vorm-kenmerk; voeg hulle met Voeg by saam |
| Oppervlakliggame in die aansig kies (behalwe snit- en lappunte); oppervlakafrondings; ontlap; G2-lappe; Gordon-oppervlaktes wat aan geboë bure raak (raak aan vlakke en plat vlakke is gebou) | Kies hulle volgens naam in die kenmerk se paneel; verdik eers, rond dan die soliede af |
| 'n Liggaamlys in die geskiedenis; versteekte liggame uit uitvoere laat | Hernoem en versteek liggame in die onderdeelpaneel se liggaamlys; skrap of onderdruk die kenmerk wat 'n liggaam gemaak het om dit uit te laat |
| 'n Nie-eenvormige skaal wat silinders en keëls analities hou; nie-eenvormige skaling van verskuifde oppervlaktes | {{ui:Scale body}} maak geboë vlakke sluitende B-splines (binne 0,0000004 mm); 'n eenvormige skaal bly presies |
| Kombineer oppervlakliggame; Minkowski-somme | {{ui:Stitch}} of {{ui:Thicken}} eerste, dan {{ui:Combine}} |
| Toleransie-analise: stapels wat hoeke draai (2D- en 3D-vektorlusse), gevoeligheid uit die meetkunde bereken, Monte Carlo met ander verdelings, groottoleransies op sketsmaatte, bonustoleransie uit materiaaltoestand | {{ui:Stack-up}} in 'n samestelling: een rigting, slegste geval en RSS, toleransies getik, uit die titelblok se algemene toleransie of uit GD&T-rame: sien [Toleransiestapels](topic:tolerance-stackup) |
| Rangskikking: snyvolgorde en insnyding, gedeelde rande een keer sny, onderdele wat saam gehou moet word; restante van rolle, voorraad gedeel tussen projekte | {{ui:Nest flat parts on sheets…}} met spasiëring, marges, draaiings en korrel: sien [Rangskik plat onderdele op velle](topic:nest-flat-parts); oorblywende plate word behou en eerste gebruik: sien [Hou en hergebruik afsnitte](topic:nest-offcuts); beplan die snit in jou snywerk se eie sagteware |
| Plaatwerk: omslae, verspringings, gemiterde en kontoerflense; flense op geboë rande of op 'n gebuigde basisflens se vlakke; gesketste buigings; hoekafsluitings; vormgereedskap; omskakeling van 'n soliede na plaatwerk; die plat van 'n gebuigde basisflens met snitte daarin; buigtabelle | {{ui:Base flange}} (’n plaat of 'n gebuigde profiel), {{ui:Edge flange}} op 'n plaat se reguit rande met buigverligting, en die platpatroon met 'n K-faktor: sien [Plaatwerk](topic:sheet-metal) |
| Draft-analise op samestellings; die skeidingslyn vind; wanddikte-analise | {{ui:Draft analysis}} op die onderdeel in Design: sien [Kontroleer draft vir gietwerk](topic:draft-analysis); maak elke onderdeel van 'n samestelling oop om dit na te gaan |

## Skette

| Nog nie gebou nie | Instead, today |
|---|---|
| Ellipse, raakboë, keëlsnitte, splines met 'n vaste graad of gewigte (NURBS) | Splines (kubiek), boë en sirkels met Raaklyn-verhoudings |
| 'n Punt op 'n spline (’n verhouding), krommingsverhoudings (G2) | Plaas 'n spline se eie punt waar dit moet deurgaan |
| Verskuifde kopieë van splines wat latere veranderinge volg; verskuiwings van kettings met skerp spline-hoeke | Verskuif weer ná die verandering; rond die hoek eers af |
| Patroonkopieë wat aan die oorspronklike gekoppel bly; patrone langs 'n kromme | Patroon weer ná 'n verandering |
| Projekteer vrye-vorm- of skewe sirkelrande, geprojekteerde meetkunde wat die onderdeel volg | Projekteer reguit en parallelle sirkelrande, dan meet |
| Aangedrewe (verwysings-)maatte | Lees groottes van die paneel of die onderdeelfeite |
| Kollinêre verhoudings | Parallel met 'n afstand van 0 |
| Plak in 'n ander program (die stelselklembord) | Voer DXF, STEP, STL of 3MF uit |
| Boë met die hand tik, relatiewe of poolkoördinate | Tik lyne en sirkels; teken boë met die Boog-gereedskap |
| Meetkunde kies sonder 'n wyser | Benodig 'n klik of tik |

## Parameters en eenhede

| Nog nie gebou nie | Instead, today |
|---|---|
| Konfigurasies wat materiale verander; 'n CSV-ontwerptabel wat kenmerke afskakel | Konfigurasies stel parameters en skakel kenmerke aan en af: sien [Konfigurasies en ontwerptabelle](topic:design-tables); `partcraft variants` bou gestoorde konfigurasies volgens naam, ook met afgeskakelde kenmerke: sien [Maak 'n variantpakket uit jou konfigurasies](topic:variant-pack) |
| Vergelykings op die getalle van die nuutste kenmerke se eie panele (vlak, sweep, draft en soortgelyk) | Skryf hulle in 'n skrip of met `partcraft set` ([Skrifte en die opdragreël](topic:scripts-and-cli)) |
| 'n Onderdeel in duim gewys | Groottes wys in millimeter; tik `2in` in 'n getalkassie of 'n uitdrukking en dit word 50.8 |

## Lêers

| Nog nie gebou nie | Instead, today |
|---|---|
| Redigeer 'n ingevoerde STEP-soliede se eie kenmerke (dit kom sonder geskiedenis) | Voeg materiaal by of sny dit uit met jou eie kenmerke |
| Lees kleure, name, samestellingstruktuur en PMI uit STEP | Nie beskikbaar nie |
| glTF-, OBJ-, IGES- en Parasolid-uitvoer; DWG van 'n 3D-onderdeel (slegs die variantpakket skryf 'n DWG: die tekenblad) | STL of 3MF vir maas; STEP vir soliede; DXF vir 2D |
| IGES-, DXF- of ander programme se eie lêers oopmaak (`.3dm`-lêers maak oop as een liggaam: [Maak 'n .3dm-model oop as 'n soliede liggaam](topic:open-3dm-files)) | Vra vir STEP, of 'n geslote STL-, OBJ- of 3MF-maas: [Maak 'n STL, OBJ of 3MF oop](topic:open-meshes) |
| Samestellingstruktuur (’n boom met onderdeelname) in uitgevoerde STEP | Samestelling-STEP is een saamgestelde van die geplaaste soliede |
| Stoor na 'n gids van jou keuse sonder die blaaier se aflaai | Skakel "vra waar om te stoor" aan in die blaaier se aflaaiinstellings |

## Tekeninge

| Nog nie gebou nie | Instead, today |
|---|---|
| Afmetings behalwe die drie algehele groottes (gatgroottes, posisies, toleransies op groottes) | Merk die PDF aan, of voer DXF uit en meet dit in 'n 2D-CAD-program |
| Meer as een snit of een detail; uitgelynde, uitgebreekte en hulpaansigte | Een snit en een detail per tekening |
| Vrye teks, notas en tabelle op die blad (behalwe die titel- en hersieningsblokke) | Die afwerknota, of teks wat op die PDF bygevoeg is |
| Eerste-hoek-projeksie, bewegende aansigte, staande blaaie | Derde hoek, outomatiese uitleg, liggende blaaie A4–A0 en ANSI A–E |
| Lewendige snitaansig: verskeie vlakke of 'n snitkassie op een slag, 'n omtrek rondom die snit, die snit in die lêer stoor | Een vlak op 'n slag vanaf {{ui:Views}} › {{ui:Section view}}; sien [Kyk binne met 'n snitaansig](topic:section-view) |
| Samestellingstekeninge met meer aansigte, afmetings of balonne wat jy kan skuif | Een isometriese (of uiteengehaalde) aansig met outomatiese balonne en die onderdeellys |
| Kopieer en plak van GD&T- en afwerksimbole | Plaas elk met Datum, Raam of Afwerking |
| Handleidings: STEP-lêers in Illustrate se {{ui:From another file…}}, 'n model wat direk van ModelCraft of BimCraft oorgedra word, prente op die padspoorder se kwaliteit, interaktiewe 3D binne 'n PDF | Maak die STEP in Design oop en begin die handleiding {{ui:From the open part}}; stoor die model as glTF (.glb); PNG-prente van die 3D-aansig; die interaktiewe 3D-lêer: sien [Begin 'n handleiding in Illustrate](topic:illustrate) |

## Samestellings

| Nog nie gebou nie | Instead, today |
|---|---|
| Tandwiel-, rak-, nok- en skroefverbindings; 'n balverbinding beperk tot 'n kegel; verbindings op geboë vlakke of tussen punte | Starre, draaibare, skuiwe, silindriese, plat, bal- en penin-gleuf-verbindings op plat vlakke, elke waarde met sy eie grense: sien [Bou 'n samestelling](topic:build-assembly) |
| Uiteengehaalde stappe wat dele draai, en sleep van dele wat verbindings plaas | Reguit uiteenhaal-stappe; verwyder 'n verbinding om 'n onderdeel met die hand te skuif |
| Subsamestellings | Een vlak van onderdele net |
| Tandwiele, nokke, kontak | Nie beskikbaar nie |

## Vervaardiging

| Nog nie gebou nie | Instead, today |
|---|---|
| 3D-growwe bewerking van geboë vlakke, 3D-aanpasbare uitruiming, restbewerking; waterlyn-, potlood-, radiale en spiraalafwerking; aanpasbare passe geskryf as boë | 2,5-as-vlak-, holte-, 2D-aanpasbare, kontoer-, boor- en skuinssnit: sien [Maak gereedskapbane en G-kode](topic:manufacture); Parallel- en Scallop-afwerking van die hele model: sien [3D-afwerking](topic:finish-3d) |
| 4- en 5-as-gereedskapbane, draai, sondering | Stel een kant op 'n slag op met die gereedskapas op die Opstel-oortjie |
| Houer- en skagtbotsingskontroles | Let op die fluitlengte-waarskuwings en kontroleer in jou beheer se simulator |
| Sondering, gereedskaplewe- en subprogramsiklusse, 4de- en 5de-as- en draaibankkodes in 'n nabewerker; laai ander programme se nabewerkerlêers | Skryf of verander 'n nabewerker in PartCraft se eie formaat: sien [Nabewerkers wat jy kan wysig](topic:post-processors) |
| Duim-G-kode (G20) | Millimeter (G21) alleen |

## Simulasie en ontwerpgenerering

| Nog nie gebou nie | Instead, today |
|---|---|
| Nielineêre studies: swig, groot defleksies, kontak tussen dele, moegheid | Lineêre statiese en natuurlike frekwensies: sien [Kontroleer spanning en defleksie](topic:simulation); hou die veiligheidsfaktor ver bo 1 |
| Nielineêre knik (onvolmaakthede, na-knik, snap-through) | Lineêre knaplaslaaste met 'n ruim marge: sien [Hitte, termiese spanning en knik](topic:thermal-and-buckling) |
| Straling tussen vlakke (aansigfaktore), kontakweerstand, temperatuurafhanklike materiale, traagheid in termiese spanning (termiese skokgolwe) | Straling na die omgewing, bestendige of kwasi-statiese termiese spanning oor tyd, konstante eienskappe: sien [Hitte, termiese spanning en knik](topic:thermal-and-buckling) |
| Outomatiese verfyning vir oorgangshitte en studies met 'n termiese lading; die maas growwer maak waar die fout klein is; 'n teiken op 'n plaaslike hoeveelheid (die piekspanning op een plek) | **Verfyn outomaties** vir statiese, knik-, natuurlike-frekwensie- en bestendige termiese studies, op die fout oor die hele onderdeel: sien [Kontroleer spanning en defleksie](topic:simulation); anders verlaag die elementgrootte |
| Lager- en boutlaste, afstandskragte, momente, vere, voorgeskrewe verplasings | Kragte en drukke op vlakke, swaartekrag; vaste en wrywinglose vlakke |
| Simulasie van samestellings; materiale wat volgens rigting verskil (gedrukte lae, komposiete) | Een onderdeel, een isotropiese materiaal |
| Verskeie oplosdrade vir tetraëdriese studies, hitteoordrag en ontwerpgenerering; enige drade op 'n bladsy wat nie kruisoorsprong-geïsoleer is nie | Voksel-studies, knik, spanning oor tyd en laminêre vloei gebruik die drade waar die bladsy dit toelaat: sien [PartCraft-instellings](topic:settings) |
| Turbulente vloei met ontwerpakkuraatheid (die Spalart–Allmaras-model is as eksperimenteel ingesluit: pyp-wrywing 30 tot 34 % hoog, agterstap-herverbinding 21 tot 39 % kort; beplan: fyner selle naby die mure), hitte in vloei, onstabiele (tydakkurate) vloei, vrye oppervlaktes, nie-Newtoniese vloeistowwe, roterende dele | Laminêre, bestendige, isotermiese vloei van 'n Newtoniese vloeistof, of die eksperimentele turbulente model vir kwalitatiewe patrone: sien [Simuleer vloeistofvloei](topic:flow-simulation); die paneel waarsku wanneer die Reynolds-getal voorbij laminêr is |
| Spanningsgrense en vervaardigingsreëls (oorhange, freesrigtings) in ontwerpgenerering; verskeie materiale in een vorm | Stywste vorm vir 'n volume; kontroleer die uitkoms in Simulasie: sien [Laat 'n vorm groei uit laste](topic:generative-design) |
| 'n Uitkoms as 'n redigeerbare (gladde, parametriese) soliede | STL, gefasette STEP of 'n onderdeel met die uitkoms as 'n ingevoerde gefasette soliede |
| Elektriese masjienontwerp: 'n rotor wat in 'n stator draai, draaimoment teenoor hoek, versadigende staal, magnete wat sterkte verloor verby hul knie, werwelstrome en yster- en koperverliese; magnetiese velde in 3-D of op geboë maas | Lineêre 2-D-magnetostatika op 'n rooster in die analise-biblioteek: spoele, yster, permanente magnete op hul terugvoerlyn, gapings, induktansie en trek: sien [Magnetiese velde in 2-D](topic:magnetic-fields-2d) |

## Skrifte

| Nog nie gebou nie | Instead, today |
|---|---|
| Sweef-hulp, breekpunte en stap in die skripredigeerder | Vind, vou en voltooi is in (sien [Skryf en laat skrifte loop](topic:craftscript)); vir die res, jou eie redigeerder: {{ui:Save}} en {{ui:Open}} in die Skrip-groep skuif skrifte in en uit; ingeboude funksies word gelys in [Die CraftScript-taal](topic:craftscript-language) |
| Breekpunte en stap deur 'n skrip | `disp` en `fprintf` langs die pad; {{key:Mod+Enter}} laat 'n paar gekose reëls per slag loop |
| Velde en grafieke wat 'n skrip wys, geteken in die Design-werkruimte; skrifte wat die onderdeel se parameters verander | Hulle wys in die Script-werkruimte; skrifte lees parameters met `param` (sien [Skryf en laat skrifte loop](topic:craftscript)), verander hulle op die {{ui:Parameters}}-oortjie |
| Prente en tabelle langs grafieke; 'n grafiek wysig (zoem, asgrense) voordat jy dit stoor | Langs mekaar wys die grafieke; stoor 'n grafiek as PNG, SVG of CSV en voltooi dit elders |
| numpy en ander Python-pakkette; Python vanlyn; Python in die redigeerder vou; Pascal Script | Python se standaardbiblioteek, CraftScript en Lua: sien [Skrifte in Python](topic:craftscript-python) |
| Lua-funksies aan ingeboude funksies oorhandig; 'n biblioteekfunksie vanuit Lua roep met 'n naam wat terwyl die skrip loop gebou is | Skryf die biblioteekfunksie se naam in die skrip (`cs.static_tet(…)`), of roep dit vanuit 'n CraftScript-skrip |

## Die app

| Nog nie gebou nie | Instead, today |
|---|---|
| Wolkberging, deel en weergawegeskiedenis | Nog nie beskikbaar nie. Stoor lêers na jou rekenaar en hou weergawes volgens naam |
| PartCraft as 'n geïnstalleerde app op iPad en iPhone | Gebruik PartCraft in die toestel se blaaier; op Android en op die lessenaar loop dit ook in CadCraft Studio (getcadcraft.com/download) |
| Konteksmenu's (regsklik) | Nutsbalk en regterpaneel |
| Heeltemal vanlyn werk vanaf 'n vars begin | Net wanneer die app vir vanlynwerk gestoor is: sien [Werk vanlyn](common:offline) |

Meld wat jy die meeste mis deur die webwerf se ondersteuningsbladsy: dit bepaal wat volgende kom.

## Engineer (generators en velde)

| Nog nie gebou nie | Instead, today |
|---|---|
| Koppe, poorte en passtukke op die gegenereerde warmtewisselaar; temperatuurkrommes vir materiaalsterkte; T-stuk-verliese in die verdeelstuk | Die generators bou die kern en die buise; voeg passtukke in Design by; gebruik die materiaal se kamertemperatuurgetalle met 'n veiligheidsfaktor |
| Generators met een klik uit die byvoegingsgids byvoeg | {{ui:Open}} in die Engineer-werkruimte voeg 'n generator uit 'n lêer by |
| 'n Veldlêer fyner as die generator se eie voksel-grootte; `.vdb`-lêers inlees | Stoor 'n fyner veld uit 'n skrip; `.vdb` word geskryf, nie gelees nie |
| Drukvatkode-berekeninge | Die handboekformules vir dun en dik wande, met die veiligheidsfaktor wat jy kies; nie 'n kodemarge nie |
| Generators vir die ander programme | Slegs PartCraft in hierdie weergawe |
