---
title: Maak gereedskappaaie en G-kode (Vervaardiging)
summary: Stel voorraad en 'n werksoorsprong op, kies gereedskap, voeg vlak-, holte-, kontoer-, boor- en chamfer-bewerkings by deur vlakke te kies, werk die hele model in 3D af (parallel, scallop), simuleer die voorraad teen die model vir versnydings en siklustyd, en laai G-kode af vanaf een van die drie ingeboude postprosesse of een wat jy self wysig.
keywords: presiese step, step vir die werkswinkel, werkkoördinate, cam-oorhandiging, parallel, scallop, 3d-afwerking, afwerking, balneus, gereedskapbiblioteek, wysig post, pasgemaakte post, postredigeerder, adaptief, adaptiewe skoonmaak, konstante ingryping, trochoïdaal, hsm, hoëspoed-masjinering, vervaardiging, CAM, gereedskappad, G-kode, NC, CNC, frees, holte, kontoer, profiel, vlakmaak, boor, peck, G83, G81, G73, chamfer, voorraad, werkverskuiwing, G54, postprosessor, GRBL, LinuxCNC, voeding en spoed, simulasie, versnyding, siklustyd
from: beeb29aa
---

Die Vervaardiging-werkruimte draai die onderdeel om in gereedskappaaie vir 'n 3-as-freesmasjien en skryf dit as G-kode. Die meeste bewerkings is **2,5-as**: die gereedskap bly vertikaal, mure word reguit afgesny en vloere plat. **Parallel** en **Scallop** werk kromme vlakke in 3D af (sien [3D-afwerking](topic:finish-3d)); die gereedskap bly steeds vertikaal (drie asse, geen kantel nie). Dit werk op die benoemde vlakke wat die maaskern vir die onderdeel gee (sien [Die maaskern](topic:solid-kernels)).

Laboratoriumbou: kontroleer elke program in jou beheerder se eie simulator, en loop dit eers in die lug bo die voorraad.

## Stel op

1. Kies **Vervaardiging** in die werkruimte-wisselaar, dan {{ui:Nuwe opstelling}}.
2. Op die **Opstelling**-oortjie kies:
   - **Gereedskapas (+Z)**: in watter rigting die gereedskap in die onderdeel wys. Wêreld +Y (PartCraft se op) is die verstek; masjien-X is dan wêreld-X en masjien-Y is wêreld −Z.
   - **Werksoorsprong (G54)**: 'n voorraadhoek of -middelpunt, bo of onder, die model se boonste middelpunt, of die modeloorsprong.
   - **Voorraad**: 'n boks of 'n silinder, óf die model plus afwykings (kante, bo, onder) óf 'n vaste grootte.
   - **Materiaal** (stel die beginvoeding en -spoed), die **postprosessor** (beheerder), die masjien se maksimum spilspoed, vinnige spoed en gereedskapwisseltyd, koelmiddel en die programnommer.

## Gereedskap

Die **Gereedskap**-oortjie hou die biblioteek: plat, bal- en stomp-neus eindfrese, boors, chamferfrese en vlakfrese, elk met 'n T-nommer, deursnee, groewe en groeflengte (plus hoekradius, punt- of chamferhoek waar dit van toepassing is).

My gereedskap kan in die blaaier gestoor word en as 'n lêer tussen rekenaars geskuif word: sien [Die gereedskapbiblioteek](topic:tool-library).

Spilspoed en voeding kom van die materiaal: n = 1000 × snyspoed / (π × deursnee), voeding = n × groewe × spaanlading (boors: n × voeding per omwenteling). Die getalle is konserwatiewe beginwaardes uit gepubliseerde reekse, nie vir jou masjien getref nie; tik jou gereedskapvervaardiger se snyspoed, spaanlading, rpm of voeding in om hulle te vervang. Wanneer die spoed die masjien se maksimum oorskry, word dit daar gehou en volg die voeding, sodat die spaanlading behoue bly.

## Voeg bewerkings by

Elke gereedskapbalkknoppie voeg 'n bewerking by en, waar dit meetkunde benodig, begin dit kies: klik vlakke of rande in die aansig (klik weer om een te laat val), dan {{ui:Klaar kies}} of {{key:Esc}}.

| Bewerking | Kies | Wat dit doen |
|---|---|---|
| {{ui:Vlak}} | niks | Zigsag-paaie oor die hele voorraad, verby sy rande, tot by die model se bo |
| {{ui:Holte}} | 'n plat vloervlak, 'n ronde gat, of 'n geslote ketting van rande | Maak die streek skoon in verskuiwde paaie van binne-uit, by elke afstap; eilande (vlakke wat binne-in die vloer opstaan) word gelaat; 'n vloer wat oral oop is (niks hoër buite dit nie) word tot by die voorraadrand uitgeskoon |
| {{ui:Aanpassend}} | dieselfde as Holte | Maak dieselfde streek skoon in paaie wat elk 'n vaste breedte sny (**Ingryping**, 'n breukdeel van die deursnee), sodat die snyer nooit 'n volle-breedte gleuf neem nie, selfs nie in hoeke nie; dit gaan in met 'n heliks en werk die mure by elke vlak af. Smal snitte laat 'n dieper afstap en 'n hoër voeding toe |
| {{ui:Kontoer}} | 'n plat vlak (sy omtrek), 'n ronde vlak, of rande | Volg die omtrek wat met die gereedskapradius verskuif is, buite of binne, met inloop- en uitloopbôë en opsionele lipies |
| {{ui:Boor}} | gate (klik op 'n gat se wand of sy rand) | Boor elke gat met 'n vaste siklus: peck (G83), boor (G81) of spaanbreuk (G73); of gee 'n deursnee om elke gat van daardie grootte te boor |
| {{ui:Chamfer}} | 'n vlak se omtrek of rande | Laat 'n chamferfrees langs die rand loop sodat dit die breedte sny wat jy stel |
| {{ui:Parallel}} | niks (die hele model) | 3D-afwerking in parallelle lyne teen enige hoek, wat die oppervlak volg met 'n bal-, stomp-neus- of plat eindfrees. Sien [3D-afwerking](topic:finish-3d) |
| {{ui:Scallop}} | niks (die hele model) | 3D-afwerking in paaie wat 'n vasgestelde afstand uitmekaar oor die oppervlak lê, sodat die rif tussen hulle die hoogte het wat jy vra |

Kies 'n bewerking in die lys om sy gereedskap, hoogtes (vryspeling, intrek, voervlak, bo, onder), stapdiepte, stapoorlap, voorraad om te laat, afwerkpas, ingang (heliks, helling of indruk), medefrees, lipies of siklus te verander. {{ui:Op}} en {{ui:Af}} herrangskik, {{ui:Onderdruk}} laat dit weg, {{ui:Skrap}} verwyder dit. Alles is in die ontdoengeskiedenis en word in die onderdeellêer gestoor.

'n Holte se stapoorlap is hoogstens die helfte van die gereedskapdeursnee, sodat elke punt op sy vloer binne een gereedskapradius van 'n pad lê. Binnehoeke behou die gereedskap se radius.

**Adaptiewe skoonmaak** hou die snyer se ingryping naby een waarde. 'n Ingryping van 0,15 van die deursnee is 'n ingrypingshoek van ongeveer 46°: die boog van die snyer se rand in die materiaal. 'n Verskuiwde holte, daarteenoor, sny volle breedte op sy eerste pad en draai verder rondom in elke binnehoek. Tussen paaie bly die gereedskap af waar dit deur gesnyde lug beweeg, en lig en daal waar dit elders in gesnyde lug is. Die paaie word op 'n fyn rooster oor die streek bereken (selle van ongeveer 'n twaalfde van die gereedskapradius), so die ingryping kan tot ongeveer een sel breër loop as ingestel; die mure word presies afgewerk. 'n Groot oop streek maak 'n lang program met baie kort bewegings.

## Simuleer

Gereedskappaaie word weer gemaak na elke verandering (die onderdeel s'n ook). {{ui:Simuleer}} wys ook die voorraad wat oorbly ná die hele program. Die paneel wys:

- **Siklustyd**: voerbewegings teen hul voeding, vinnige bewegings as reguit lyne teen die opstelling se vinnige spoed, plus die gereedskapwisseltyd. Regte masjiene versnel, so hulle neem langer.
- **Versnydings**: plekke waar die gereedskap meer as 0,02 mm onder die onderdeel se oppervlak gegaan het. Rooi merke wys hulle in die aansig.
- **Voorraad wat op die onderdeel oorbly**.

Die voorraad is 'n hoogtekaart van die bo ('n Z-kaart), so dit kan geen ondersnydings wys nie. Sleep **Terugspeel** om die gereedskap langs die program te beweeg. In die aansig is voerbewegings massief en vinnige bewegings gestippel, een kleur per bewerking.

Met **Wys die gesimuleerde voorraad** aan, word die voorraad teen die model gekleur, sel vir sel: **groen** waar dit op die model is (binne 0,02 mm), **rooi** waar die gereedskap in die model gesny het, en waar voorraad op die model oorbly, **geel** vir 'n dun vel, **oranje** vir meer, wat verdof tot die **grys** van ongesnyde voorraad by 1 mm of meer. Die kleure word met elke verandering weer gemaak, uit dieselfde hoogtekaart as die getalle in die paneel, sodat groen en rooi ooreenstem met die Versnydings-reël. 'n Chamfer sny met opset in die model in en wys rooi langs sy rand.

## Postprosesseer die G-kode

Kies die beheerder onder {{ui:Pos}} en druk {{ui:Laai G-kode af}} (of {{ui:Pos}} op die gereedskapbalk):

| Beheerder | Lêer | Notas |
|---|---|---|
| Fanuc-styl ISO | .nc | %, O-nommer, reëlnommers, T M6 met G43 H, vaste siklusse |
| GRBL | .nc | Geen gereedskapwisselaar of vaste siklusse nie: 'n gereedskapwissel pouseer met M0, boor word as gewone bewegings geskryf |
| LinuxCNC | .ngc | T M6 met G43 H, vaste siklusse, M2 |
| Joune eie | enige | 'n Post wat jy geskryf of verander het: {{ui:Wysig postprosessor…}}, {{ui:Nuwe postprosessor…}}, {{ui:Voer postprosessorlêer in…}} |

Elke lêer begin met kommentaar vir die program, voorraad, werkverskuiwing en gereedskap. Koördinate is in millimeter met 3 desimale. {{ui:Gereedskappad-CSV}} en {{ui:Gereedskappad-JSON}} voer die bewegings self uit.

**Kontroleer die uitset in jou masjien se eie simulator voordat jy sny, en loop dit eers in die lug bo die voorraad.** Die drie ingeboude postprosesse is beginpunte wat die beheerders se gedokumenteerde gedrag volg; hulle is nie op 'n bepaalde masjien bewys nie. 'n Post wat jy verander, is joune om te bewys. Hoe om een te skryf: [Postprosessors](topic:post-processors).

## Presiese STEP vir die werkswinkel

Onder die G-kode-knoppies op die **Bewerkings**-oortjie laai {{ui:Presiese STEP (werkskoördinate)}} `<onderdeel>-work.step` af: die onderdeel as 'n presiese soliede (ware silinders vir gate en uitsteeksels, ware sirkels vir hul rande) met sy oorsprong by hierdie opstelling se werksoorsprong en Z langs die gereedskapas. Dit is die koördinate wat die G-kode gebruik, so 'n werkswinkel se eie CAM-program of kontroleerder skik die model met die program sonder om dit te skuif. Die lêer bevat net die onderdeel, nie die voorraad of die gereedskappaaie nie.

{{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} skryf dieselfde soliede in die onderdeel se eie posisie (Z op): sien [Uitvoer vir druk, STEP en DXF](topic:export-files#for-other-cad-programs-step).

## Beperkings

- Holtes, kontoere, boor en chamfers is 2,5-as. Krom vlakke kan in 3D afgewerk word ([parallel en scallop](topic:finish-3d)) maar nie in 3D growwe gesny word nie ('n kegel bly as trappe tot jy dit afwerk), en daar is geen res-bewerking nie. Adaptiewe skoonmaak is 2-D (plat vloere).
- Drie asse net: geen kantel nie, geen draai nie, geen inspeksie nie.
- Houers en skagte word nie vir botsings gekontroleer nie; 'n waarskuwing verskyn wanneer 'n snit dieper is as die groeflengte.
- Voeding en spoed is beginwaardes. 'n Post is teks wat jy kan wysig, maar dit bepaal net hoe die bewegings geskryf word; dit kan nie die gereedskappad verander, asse byvoeg of jou masjien ken nie ([Postprosessors](topic:post-processors) lys wat dit nie kan doen nie).

## Stuur die program na 'n masjien

In CadCraft Studio op die lessenaar, met 'n masjien wat in Studio opgestel is, verskyn **Stuur na 'n masjien…** langs **Laai G-kode af** en laai dieselfde program op na die masjien op jou netwerk. Dit word nooit vanaf PartCraft begin nie: begin dit by die masjien wanneer dit duidelik is. In 'n blaaier word die knoppie nie gewys nie ('n webblad kan nie 'n masjien op jou netwerk bereik nie): laai die program eerder af.
