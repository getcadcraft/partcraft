---
title: Maak gereedskapbane en G-kode (Vervaardiging)
summary: Stel voorraad en 'n werkoorsprong op, kies gereedskap, voeg vlak-, holte-, kontoer-, boor- en skuinsbewerkings by deur vlakke te kies, werk die hele model in 3D af (parallel, scallop), simuleer die voorraad teen die model vir gouges en siklustyd, en laai G-kode af van een van die drie ingeboude posts of een wat jy self wysig.
keywords: presiese step, step vir die werkplek, werkkoördinate, cam-oorhandiging, parallel, scallop, 3D-afwerking, afwerking, kogelneus, gereedskapbiblioteek, wysig post, eie post, postredigeerder, aanpassend, aanpassende verwydering, konstante ingryping, trochoïdaal, hsm, hoëspoed-bewerking, vervaardiging, CAM, gereedskapbaan, G-kode, NC, CNC, frees, freswerk, holte, kontoer, profiel, vlakfrees, boor, peck, G83, G81, G73, skuins, voorraad, werkverskuiwing, G54, postprosessor, GRBL, LinuxCNC, voere en spoed, simulasie, gouge, siklustyd
from: f8a03be8
---

Die Vervaardiging-werkruimte verander die onderdeel in gereedskapbane en skryf dit as G-kode. Die meeste bewerkings is **2,5-as**-freswerk: die gereedskap bly regop, mure word reguit af gesny en vloere plat. **3D-growwe** en **Rus** sny geboë onderdele in 3D skoon ([3D-growwe en rusbewerking](topic:rough-3d)); **Parallel** en **Scallop** werk hulle af ([3D-afwerking](topic:finish-3d)). Op 'n masjien met roterende asse kan enige bewerking 'n geskuinsde gereedskap hê, en twee bewerkings beweeg die roterende asse terwyl hulle sny ([4- en 5-asbewerking](topic:multi-axis)). Daar is bewerkings vir 'n draaibank ([Draaiwerk](topic:turning)) en vir 'n tasteris ([Toetsing](topic:probing)). Dit werk op die genoemde vlakke wat die mesh-kern vir die onderdeel gee (sien [Die mesh-kern](topic:solid-kernels)).

Laboratoriumbou: kontroleer elke program in jou beheerder se eie simulator, en laat dit eers in die lug bo die voorraad loop.

## Opstel

1. Kies **Vervaardiging** in die werkruimte-skakelaar, dan {{ui:Nuwe opstelling}}.
2. Op die **Opstelling**-oortjie kies:
   - **Gereedskapas (+Z)**: die rigting waarin die gereedskap die onderdeel ingaan. Wêreld +Y (PartCraft se op) is die standaard; masjien-X is dan wêreld-X en masjien-Y is wêreld −Z.
   - **Werkoorsprong (G54)**: 'n voorraadhoek of -middelpunt, bo of onder, die model se boonste middelpunt, of die modeloorsprong.
   - **Voorraad**: 'n blok of 'n silinder, óf die model plus afstande (sye, bo, onder) óf 'n vaste grootte.
   - **Materiaal** (stel die beginvoere en -spoed), die **pos** (beheerder), die masjien se maksimum spilspoed, snelgangtempo en gereedskapwisseltyd, koelmiddel en die programnommer.

## Gereedskap

Die **Gereedskap**-oortjie hou die biblioteek: plat, kogel- en stompneus-eindfrese, boorpunte, skuinsfrese en vlakfrese, elk met 'n T-nommer, deursnee, vlerke en vlerklengte (plus hoekradius, punt- of skuinshoek waar dit van toepassing is).

Eie gereedskap kan in die blaaier gestoor en as 'n lêer tussen rekenaars geskuif word: sien [Die gereedskapbiblioteek](topic:tool-library).

Spilspoed en voer kom uit die materiaal: n = 1000 × snyspoed / (π × deursnee), voer = n × vlerke × spaanlading (boor: n × voer per omwenteling). Die getalle is konserwatiewe beginwaardes uit gepubliseerde reekse, nie vir jou masjien ingestel nie; tik jou gereedskapvervaardiger se snyspoed, spaanlading, rpm of voer om dit te oorskryf. Wanneer die spoed die masjien se maksimum oorskry, word dit daar gehou en volg die voer, sodat die spaanlading behou word.

## Bewerkings byvoeg

Elke knoppie op die werkbalk voeg 'n bewerking by en, waar dit meetkunde nodig het, begin dit kies: klik vlakke of rande in die aansig (klik weer om een te laat val), dan {{ui:Klaar kies}} of {{key:Esc}}.

| Bewerking | Kies | Wat dit doen |
|---|---|---|
| {{ui:Vlak}} | niks | Zigzag-passe oor die hele voorraad, verby sy rande, af tot by die model se bo |
| {{ui:Holte}} | 'n plat vloervlak, 'n ronde gat, of 'n geslote ketting van rande | Ruim die gebied uit in verskuiwde passe van binne-uit, by elke afsnystap; eilande (vlakke wat binne die vloer opstaan) word gelaat; 'n vloer wat rondom oop is (niks hoër buite dit nie) word tot by die voorraadrand uitgeruim |
| {{ui:Aanpassend}} | dieselfde as Holte | Ruim dieselfde gebied uit in passe wat elk 'n vaste breedte sny (**Ingryping**, 'n breukdeel van die deursnee), sodat die snyer nooit 'n volle-breedte-gleuf neem nie, selfs in hoeke; dit gaan in met 'n heliks en werk die mure op elke vlak af. Smal snitte laat 'n dieper afsnystap en 'n hoër voer toe |
| {{ui:Kontoer}} | 'n plat vlak (sy omtrek), 'n ronde vlak, of rande | Volg die omtrek versit met die gereedskapradius, buite of binne, met inloop- en uitloopboë en opsionele lipies |
| {{ui:Boor}} | gate (klik op 'n gat se wand of sy rand) | Boor elke gat met 'n vaste siklus: peck (G83), boor (G81) of spaanbreek (G73); of gee 'n deursnee om elke gat van daardie grootte te boor |
| {{ui:Chamfer}} | 'n vlak se omtrek of rande | Laat 'n skuinsfrees langs die rand loop sodat dit die breedte sny wat jy stel |
| {{ui:Parallel}} | niks (die hele model) | 3D-afwerking in parallelle lyne teen enige hoek, wat die oppervlak volg met 'n kogel-, stompneus- of plat eindfrees. Sien [3D-afwerking](topic:finish-3d) |
| {{ui:Scallop}} | niks (die hele model) | 3D-afwerking in passe 'n ingestelde afstand uitmekaar oor die oppervlak, sodat die rif tussen hulle die hoogte het wat jy vra |

Kies 'n bewerking in die lys om sy gereedskap, hoogtes (speling, intrek, voerhoogte, bo, onder), afsnystap, staponderbreking, materiaal om te laat staan, afwerkingspas, ingang (heliks, helling of indompeling), klimfrees, lipies of siklus te verander. {{ui:Op}} en {{ui:Af}} herrangskik, {{ui:Onderdruk}} laat dit uit, {{ui:Skrap}} verwyder dit. Alles is in die ontdoen-geskiedenis en word in die onderdeellêer gestoor.

'n Holte se staponderbreking is hoogstens die helfte van die gereedskapdeursnee, sodat elke punt van sy vloer binne een gereedskapradius van 'n pas lê. Binnehoeke behou die gereedskap se radius.

**Aanpassende verwydering** hou die snyer se ingryping naby aan een waarde. 'n Ingryping van 0,15 van die deursnee is 'n ingrypingshoek van ongeveer 46°: die boog van die snyer se rand in die materiaal. 'n Verskuifde holte sny daarteenoor volle breedte op sy eerste pas en wikkel verder om in elke binnehoek. Tussen passe bly die gereedskap af waar dit deur gesnyde lug beweeg, en lig en daal op in gesnyde lug elders. Die passe word op 'n fyn rooster oor die gebied uitgewerk (selle ongeveer 'n twaalfde van die gereedskapradius), sodat die ingryping tot ongeveer een sel wyer kan word as ingestel; die mure word presies afgewerk. 'n Groot oop gebied maak 'n lang program met baie kort bewegings.

## Simuleer

Gereedskapbane word weer gemaak ná elke verandering (die onderdeel s'n ook). {{ui:Simuleer}} wys ook die voorraad wat ná die hele program oorbly. Die paneel wys:

- **Siklustyd**: voerbewegings teen hul voer, snelgange as reguit lyne teen die opstelling se snelgangtempo, plus die gereedskapwisseltyd. Werklike masjiene versnel, so dit neem langer.
- **Gouges**: plekke waar die gereedskap meer as 0,02 mm onder die onderdeel se oppervlak gegaan het. Rooi merke wys dit in die aansig.
- **Voorraad wat op die onderdeel oorbly**.

Die voorraad is 'n hoogtekaart van die bo (&#8217;n Z-kaart), so dit kan geen ondersnyings wys nie. Sleep **Afspeel** om die gereedskap langs die program te beweeg. In die aansig is voerbewegings soliede lyne en snelgange gestippelde lyne, een kleur per bewerking.

Met **Wys die gesimuleerde voorraad** aan, word die voorraad sel vir sel teen die model gekleur: **groen** waar dit op die model is (binne 0,02 mm), **rooi** waar die gereedskap in die model gesny het, en **geel** waar voorraad op die model oorbly as 'n dun vel, **oranje** vir meer, wat verdof na die **grys** van ongesnyde voorraad by 1 mm of meer. Die kleure word met elke verandering weer gemaak, uit dieselfde hoogtekaart as die getalle in die paneel, sodat groen en rooi ooreenstem met die Gouges-reël. 'n Skuinsfrees sny met opset in die model in en wys rooi langs sy rand.

## Pos die G-kode

Kies die beheerder onder **Pos** en druk {{ui:Laai G-kode af}} (of {{ui:Pos}} op die werkbalk):

| Beheerder | Lêer | Aantekeninge |
|---|---|---|
| Fanuc-styl ISO | .nc | %, O-nommer, reëlnommers, T M6 met G43 H, vaste siklusse |
| GRBL | .nc | Geen gereedskapwisselaar of vaste siklusse nie: 'n gereedskapwissel pouseer met M0, boor word as gewone bewegings geskryf |
| LinuxCNC | .ngc | T M6 met G43 H, vaste siklusse, M2 |
| Fanuc-styl draaibank | .nc | Vir draaiprogramme: X as 'n deursnee, voer per omwenteling, G96 onder 'n G50-limiet, G32-draad |
| LinuxCNC-draaibank | .ngc | Vir draaiprogramme: G7-deursnee, G95, G96, G33-draad; skryf geen tuisbeweging nie |
| Jou eie | enige | 'n Post wat jy geskryf of verander het: {{ui:Wysig postprosessor…}}, {{ui:Nuwe postprosessor…}}, {{ui:Voer postprosessorlêer in…}} |

Elke lêer begin met kommentaar vir die program, voorraad, werkverskuiwing en gereedskap. Koördinate is in millimeter met 3 desimale. {{ui:Gereedskappad-CSV}} en {{ui:Gereedskappad-JSON}} voer die bewegings self uit.

**Kontroleer die uitset in jou masjien se eie simulator voordat jy sny, en laat dit eers in die lug bo die voorraad loop.** Die drie ingeboude posts is beginpunte wat die beheerders se gedokumenteerde gedrag volg; hulle is nie op enige besondere masjien bewys nie. 'n Post wat jy verander, is joune om te bewys. Hoe om een te skryf: [Postprosessors](topic:post-processors).

## Presiese STEP vir die werkplek

Onder die G-kodeknoppies op die **Bewerkings**-oortjie laai {{ui:Presiese STEP (werkskoördinate)}} `<part>-work.step` af: die onderdeel as 'n presiese soliede liggaam (ware silinders vir gate en uitsteeksels, ware sirkels vir hul rande) met sy oorsprong by hierdie opstelling se werkoorsprong en Z langs die gereedskapas. Dit is die koördinate wat die G-kode gebruik, sodat 'n werkplek se eie CAM-program of -kontroleerder die model op een lyn met die program bring sonder om dit te skuif. Die lêer bevat net die onderdeel, nie die voorraad of die gereedskapbane nie.

{{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} skryf dieselfde soliede liggaam in die onderdeel se eie posisie (Z op): sien [Uitvoer vir druk, STEP en DXF](topic:export-files#for-other-cad-programs-step).

## Beperkings

- Holtes, kontoere, boor en skuinses is 2,5-as. Geboë onderdele word growwe en afgewerk in 3D deur hul eie bewerkings ([3D-growwe en rusbewerking](topic:rough-3d), [3D-afwerking](topic:finish-3d)). Aanpassende verwydering is 2D (plat vloere).
- Geskuinsde gereedskap, 5-as- en 4de-as-afwerking, draaiwerk en toetsing is daar, elk met sy eie beperkings, en **nie een daarvan is op 'n masjien uitgevoer nie**: sien [4- en 5-asbewerking](topic:multi-axis), [Draaiwerk](topic:turning) en [Toetsing](topic:probing).
- Houers en skagte word nie vir botsings nagegaan nie; 'n waarskuwing verskyn wanneer 'n snit dieper is as die vlerklengte.
- Voere en spoed is beginwaardes. 'n Post is teks wat jy kan wysig, maar dit bepaal net hoe die bewegings geskryf word; dit kan die gereedskapbaan nie verander nie, asse nie byvoeg nie, en nie jou masjien ken nie ([Postprosessors](topic:post-processors) lys wat dit nie kan doen nie).

## Stuur die program na 'n masjien

In CadCraft Studio op die rekenaar, met 'n masjien wat in Studio opgestel is, verskyn **Stuur na 'n masjien…** langs **Laai G-kode af** en laai dieselfde program op na die masjien op jou netwerk. Dit word nooit vanaf PartCraft begin nie: begin dit by die masjien wanneer dit duidelik is. In 'n blaaier word die knoppie nie gewys nie ('n webblad kan nie 'n masjien op jou netwerk bereik nie): laai die program eerder af.
