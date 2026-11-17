---
title: De engineeringbibliotheek
summary: Leerboekformules als leesbare scripts, in SI-eenheden, elk resultaat met zijn bron: stroming in buizen en kanalen, warmteoverdracht en warmtewisselaars, drukonderdelen, gasdynamica, eigenschappen van water en lucht, materialen, en eenheden die worden gecontroleerd. Wat elk goed is voor en waar het ophoudt.
keywords: engineering, bibliotheek, eenheden, Darcy-Weisbach, Colebrook, Reynolds, wrijvingsfactor, Dittus-Boelter, Gnielinski, NTU, effectiviteit, LMTD, ribbe, Barlow, Lamé, mondstuk, isentropisch, Mach, kritische stroming, water, lucht, eigenschappen, materiaal, bronnen
from: 786ef967
---

De engineeringbibliotheek is een set scripts in de bibliotheek van de werkomgeving Script (`craftlib/eng`). Elk is een functie die u van boven naar beneden kunt lezen, met een kop die zijn **methode**, zijn **eenheden**, zijn **grenzen**, zijn **referenties** en een **controle** met een uitgewerkt getal geeft. Ze gebruiken overal SI-eenheden en geven grootheden terug met een **eenheid** en een **bron**, zodat een gegevensblad kan afdrukken waar elk getal vandaan komt.

## Eenheden die worden gecontroleerd

`to_si(10, 'bar', 'Pa')` zet een waarde om en weigert een eenheid die iets anders meet (een lengte waar een druk wordt verwacht). `from_si`, `unit_convert(1, 'bar', 'psi')` en `unit_kind('W/(m K)')` ("thermische geleidbaarheid") werken op dezelfde manier. `temp_k(25, 'C')` en `temp_from_k` zetten temperaturen om, die een verschuiving hebben.

## Eigenschappen

- `fluid('water', T)` en `fluid('air', T, p)`: dichtheid, viscositeit, geleidbaarheid, soortelijke warmte, Prandtl-getal. Water 0 tot 100 °C, lucht 250 tot 600 K; daarbuiten stopt het in plaats van te extrapoleren.
- `material('ss304')`: elasticiteitsmodulus (Young), dwarscontractiecoëfficiënt (Poisson), dichtheid, vloeigrens, geleidbaarheid, soortelijke warmte, uitzetting: waarden bij kamertemperatuur uit dezelfde gegevensbladen als Simulatie. Een echt ontwerp gebruikt de gecertificeerde cijfers van de leverancier. Temperatuurcurves zijn nog niet beschikbaar.

## Stroming in buizen en kanalen

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminair, daarna de Colebrook-vergelijking voor turbulente stroming; het bereik 2300 tot 4000 heeft geen betrouwbare formule en zegt dat), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ronde buis, alles tegelijk) en `rect_channel` (laminaire rechthoekige kanalen volgens de Shah- en London-fit).

## Warmteoverdracht

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (kiest laminair of turbulent en noemt de correlatie), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` en `ntu_for` (de effectiviteit-NTU-relaties voor tegenstroom, meestroom, schaal-en-buis, kruisstroom en een enkele veranderende stroom) en `hx_size` (de grootte UA die een belasting nodig heeft; het zegt hoeveel mogelijk is als de belasting niet kan worden gehaald).

## Drukonderdelen

`allowable_stress` (vloeigrens gedeeld door een veiligheidsfactor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, op het ringspannings- of het schuifcriterium) en `wall_sphere`. Dit zijn leerboekmarges, **geen berekening volgens een drukvatcode**: geen corrosietoeslag, lasrendement of codefactoren.

## Gasdynamica

`isentropic` (de verhoudingen bij een Machgetal), `mach_from_area`, `choked_flow`, `throat_area` en `exit_mach`, voor een ideaal gas zonder wrijving, warmte of schokken.

## Het resultaat controleren

`check_stress`, `check_thermal` en `check_flow` draaien de eigen spannings-, geleidings- en stromingsoplossers van PartCraft op een gegenereerd onderdeel vanuit het script, en lezen de maximale spanning en verplaatsing, de temperaturen en warmtestroom, en de doorlaatbaarheid van een kanalennetwerk terug. Ze veranderen niets aan de oplossers. De spannings- en temperatuurcontroles gebruiken voxels, dus een gekromd vlak is een trapje, en de spanning bij een scherpe binnenhoek of onder een puntlast hangt af van de voxelgrootte.
