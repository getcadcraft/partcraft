---
title: 3D-afwerking: parallel en scallop
summary: Werk die geboë oppervlak van die hele model af met 'n kogel-, stompneus- of plat eindfrees, in parallelle lyne teen enige hoek of in passe wat 'n ingestelde afstand uitmekaar is, sodat die riwwe tussen hulle die hoogte behou wat jy vra. Wat die bane waarborg, en wat nie.
keywords: 3D-afwerking, afwerking, parallel, raster, scallop, konstante scallop, rif, kogelneus, stompneus, oppervlak, toleransie, staponderbreking, helling, materiaal om te laat staan, drop cutter, gouge
from: 942d2341
---

Twee bewerkings in Vervaardiging snyl die **hele model se oppervlak** met die gereedskap regop gehou (drie asse). Hulle neem geen keuses nie: hulle werk op al die model wat van bo af sigbaar is. Ruw die onderdeel eers (aanpassend of holte); 'n afwerkingspas oor onge­sneden voorraad waarsku dat dit diep sou sny.

## Parallel

Reguit lyne oor die model teen die **hoek** wat jy stel, **staponderbreking** uitmekaar (&#8217;n breukdeel van die gereedskapdeursnee). Elke lyn volg die oppervlak: die gereedskapspits is so hoog as wat dit moet wees sodat geen deel van die snyer onder die model gaan nie, en die lyn word fyner gesny waar die oppervlak buig. Met **Zig-zag** aan, bly die gereedskap tussen lyne af waar dit veilig kan (langs die beweging nagegaan); anders lig dit op.

- **Toleransie**: hoe ver 'n reguit stuk van 'n lyn van die ware spitshoogte mag wees (die helfte daarvan word as grens by die middel van elke stuk gebruik). Standaard 0,01 mm.
- **Slegs waar die oppervlak ten minste … en ten meeste … (°) is**: sny slegs vlak gebiede of slegs steil gebiede. Waar die oppervlak buite die reeks is, word die lyn uitgelaat en lig die gereedskap op.
- **Materiaal om te laat staan**: die model versit met daardie afstand (die snyer word daarmee groter: presies vir kogel- en stompneusgereedskap; 'n plat gereedskap laat ten minste so veel staan).
- **Onderkant**: niks word onder hierdie z gesny nie.

## Scallop

Passe wat 'n konstante afstand oor die oppervlak van mekaar hou, sodat die rif (die scallop) wat tussen twee naburige passe oorbly, die **hoogte** het wat jy vra. Die afstand volg uit die hoogte en die kogel se radius: s = 2·√(2·R·h − h²), byvoorbeeld ongeveer 0,69 mm tussen passe vir 'n Ø6-kogel en 'n rif van 0,02 mm. 'n Stompneusgereedskap gebruik sy hoekradius. 'n Plat eindfrees word geweier: dit het geen rif om te dimensioneer nie.

Die passe begin **vanaf die model se rand, innetoe** of **vanaf sy bo, afwaarts**. Hulle is kontoere van die afstand oor die oppervlak (nie van hoogte nie), so op 'n helling lê hulle naby in plan en op 'n vlak wyd uitmekaar. Die afstand word op 'n rooster oor die oppervlak gemeet en is tot ongeveer 1 % akkuraat; die rifhoogte is presies waar die oppervlak plat of sag geboë is en benaderd waar dit vinnig buig. **Opklim** hou die hoër kant van die oppervlak aan die snyer se regterkant.

## Hoe goed die bane is

Wat die toetse nagaan, met geslotevorm-formules of 'n onafhanklike brute-krag-soektog van die snyer se voetspoor:

- Die spitshoogte onder die gereedskap is presies vir 'n kogel-, stompneus- en plat gereedskap op vlakke, rande en hoeke van die mesh, en is nooit bo die ware hoogte nie; vir parallelle lyne bly die pad binne die toleransie daarvan, met geen gouge dieper as dit nie.
- Padlengtes op 'n geneigde vlak stem ooreen met die geslotevorm-formule; scallop-passe op 'n vlak is die gevraagde afstand uitmekaar en die rif tussen hulle kom uit op die gevraagde hoogte.
- Die voorraadsimulasie wys geen gouge ná 'n pas nie en wys die riwwe wat oorbly.

Wat hierdie bane nie is nie: dit is basiese afwerkingspasse, nie die geheel van wat 'n produksiestelsel bied nie.

- **Nie gebou nie**: waterlyn-afwerking (konstante z), potlood- en hoekskoonmaak, radiale en spiraalpasse, 'n kromme op die oppervlak projekteer, opsporing van plat gebiede, houer- en skagbotsingkontroles. Growwe en rusbewerking is hul eie bewerkings ([3D-growwe en rusbewerking](topic:rough-3d)); 'n gereedskap wat leun, is [5-as-afwerking](topic:multi-axis#5-axis-finishing).
- Die gereedskapsentrum bly oor die model: die bane hou op by die model se rand in plaas daarvan om daarlangs te loop, so 'n vertikale muur reg aan die rand word nie tot by sy voet afgewerk nie.
- Ondersnyings word nie gesien nie (die oppervlak is wat die gereedskap van bo ontmoet).
- Die model is die mesh uit die kern, so die bane volg die mesh (sy koordtoleransie is ongeveer 0,0002 van die onderdeel se diagonaal), nie die presiese oppervlak nie.
- Afwerking van 'n groot model teen 'n fyn toleransie maak 'n lang program met baie kort bewegings. Kontroleer die uitset in jou masjien se eie simulator voordat jy sny.
