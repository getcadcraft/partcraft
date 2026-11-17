---
title: 3D-afwerking: parallel en skulp
summary: Werk die hele model se geboë oppervlak af met 'n bal-, klokneus- of plat eindfrees, in parallelle lyne teen enige hoek of in gange 'n vaste afstand uitmekaar sodat die riwwe tussen hulle die hoogte behou wat jy vra. Wat die bane waarborg, en wat nie.
keywords: 3d-afwerking, afwerking, parallel, raster, skulp, konstante skulp, rif, balneus, klokneus, oppervlak, toleransie, stapgrootte, helling, materiaal om te laat, valfrees, inkeping
from: e1587d0a
---

Twee bewerkings in Vervaardiging sny die **hele model se oppervlak** met die gereedskap vertikaal gehou (drie asse). Hulle neem geen keuses nie: hulle werk op al die model wat van bo af gesien kan word. Rof die onderdeel eers (aanpasbaar of sak); 'n afwerkingspas oor onsnyde voorraad waarsku dat dit diep sal sny.

## Parallel

Reguit lyne oor die model teen die **hoek** wat jy stel, **stapgrootte** uitmekaar (’n breuk van die gereedskapdeursnee). Elke lyn volg die oppervlak: die gereedskapspits is so hoog as wat dit moet wees sodat geen deel van die snyer onder die model gaan nie, en die lyn word fyner gesny waar die oppervlak buig. Met **Zig-zag** aan, bly die gereedskap tussen lyne onder waar dit veilig kan (dit word langs die beweging nagegaan); anders lig dit.

- **Tolerance**: hoe ver 'n reguit stuk van 'n lyn van die ware spitshoogte mag wees (die helfte daarvan word as limiet by die middel van elke stuk gebruik). Verstek 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: werk net vlak gebiede of net steil gebiede af. Waar die oppervlak buite die reeks is, word die lyn weggelaat en lig die gereedskap.
- **Stock to leave**: die model verskuif met daardie afstand (die snyer word daarmee vergroot: presies vir bal- en klokneus-gereedskap; 'n plat gereedskap laat ten minste soveel).
- **Bottom**: niks word onder hierdie z gesny nie.

## Skulp

Gange wat 'n konstante afstand oor die oppervlak van mekaar hou, sodat die rif (die skulp) wat tussen twee naburige gange oorbly, die **hoogte** het wat jy vra. Die afstand volg uit die hoogte en die bal se radius: s = 2·√(2·R·h − h²), byvoorbeeld ongeveer 0.69 mm tussen gange vir 'n Ø6-bal en 'n 0.02 mm-rif. 'n Klokneus-gereedskap gebruik sy hoekradius. 'n Plat eindfrees word geweier: dit het geen rif om te dimensioneer nie.

Die gange begin **vanaf die model se rand, na binne**, of **vanaf sy bo, na onder**. Hulle is kontoere van die afstand oor die oppervlak (nie van hoogte nie), so op 'n helling is hulle naby in plan en op 'n plat is hulle wyd uitmekaar. Die afstand word op 'n rooster oor die oppervlak gemeet en is binne ongeveer 1 % akkuraat; die riftoogte is presies waar die oppervlak plat of effens geboë is, en benaderd waar dit vinnig buig. **Klim** hou die hoër kant van die oppervlak aan die snyer se regterkant.

## Hoe goed die bane is

Wat die toetse nagaan, met geslotenvorm-formules of 'n onafhanklike brute-krag-soektog van die snyer se voetspoor:

- Die spitshoogte onder die gereedskap is presies vir 'n bal-, klokneus- en plat gereedskap op vlakke, rande en hoeke van die maas, en nooit bo die ware hoogte nie; vir parallelle lyne bly die pad binne die toleransie daarvan, sonder 'n inkeping dieper as dit.
- Padlengtes op 'n geneigde vlak stem ooreen met die geslotenvorm-formule; skulpgange op 'n vlak is die gevraagde afstand uitmekaar, en die rif tussen hulle kom uit op die gevraagde hoogte.
- Die voorraadsimulasie wys geen inkeping na 'n pas nie en wys die riwwe wat oorbly.

Wat hierdie bane nie is nie: hulle is basiese afwerkingsgange, nie die geheel van wat 'n produksiestelsel bied nie.

- Nog nie gebou nie: waterlyn (konstante z), potlood- en hoekskoonmaak, radiale en spiraalgange, 'n kromme op die oppervlak projekteer, plat-gebied-opsporing, rustbewerking, houer- en skagbotsingstoetse, en enige kantel van die gereedskap.
- Die gereedskapsentrum bly oor die model: die bane hou op by die model se rand in plaas daarvan om daarlangs te loop, so 'n vertikale muur reg by die rand word nie tot aan sy voet afgewerk nie.
- Ondersnedes word nie gesien nie (die oppervlak is wat die gereedskap van bo af ontmoet).
- Die model is die maas van die kern, so die bane volg die maas (sy koordtoleransie is ongeveer 0.0002 van die onderdeel se diagonaal), nie die presiese oppervlak nie.
- Afwerking van 'n groot model op 'n fyn toleransie maak 'n lang program met baie kort bewegings. Kontroleer die uitvoer in jou masjien se eie simulator voordat jy sny.
