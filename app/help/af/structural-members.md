---
title: Rame van staalprofiele
summary: Sit staalprofiele langs die lyne van een of meer skette om 'n gelaste raam te maak: gekapte of stomp hoeke, lede wat gesny word om te pas waar hulle ontmoet, eindkappe, gussets en 'n snylys met lengtes en eindhoeke.
keywords: sweissamestelling, strukturele lid, raam, staalraam, buis, vierkantige buis, hss, rhs, shs, pyp, chs, breë flens, i-balk, w-balk, ipe, hea, heb, kanaal, upn, hoekstaal, gekap, kap, stomp verbinding, eindkap, gusset, snylys
from: 59071e5a
---

'n **Strukturele lid** sit 'n staalprofiel langs elke lyn van die skette wat jy kies. Teken die raam as lyne (elke lyn is een lid), kies dan die profiel: die lede word gebou, hul hoeke word getrim en verleng, en 'n snylys sê hoe lank elke stuk gesny moet word en teen watter hoek.

## Maak 'n raam

1. Teken die raam as lyne in 'n skets, byvoorbeeld 'n reghoek op die bovlak. Lyne wat as konstruksie gemerk is, word uitgelaat.
2. Met die skets gekies, kies {{ui:Meer}} › {{ui:Strukturele lid}}. Elke lyn van die skets kry 'n lid.
3. Kies in die paneel die **Familie** en **Grootte** van die profiel. Die families is die AISC-tabelle (W, S, C, L, HSS-buise, Pyp) en EN 10365 (IPE, HEA, HEB, UPN).

### 'n Raam in 3D

Lyne uit verskeie skette maak een raam: 'n boonste reghoek wat op 'n vlak bo geskets is, en die bene wat op regop vlakke geskets is, ontmoet by hul eindpunte in 3D. Onder **Langs die lyne van** in die paneel, merk elke skets aan waarvan die lyne die lede volg. Eindpunte wat binne 'n mikrometer ontmoet, word verbind.

## Stel die profiel op sy lyn

- **Draai (°)** draai die profiel om sy lyn. 'n Balk staan met sy diepte regop (op 'n vertikale lid wys sy diepte na voor).
- **Op die lyn** kies watter punt van die profiel op die lyn sit: die middelpunt, of 'n hoek, of die middel van 'n sy van die profiel se omtrek. "Onder-middel" plaas 'n raam bo-op die skets-vlak in plaas van daardeur.

## Hoeke en verbindings

| Waar lede ontmoet | Wat gebeur |
|---|---|
| Twee lede end tot end, **Hoeke: Gekap** | Albei word op die vlak halfpad tussen hulle gesny, soos 'n prentraam |
| Twee lede end tot end, **Hoeke: Stomp** | Die eerste lid loop voort tot by die verre vlak van die tweede; die tweede word reg gesny by die eerste se nabye vlak |
| 'n Lid eindig op die middel van 'n ander ('n T) | Dit word gesny om teen die ander lid se buitekant te pas |
| Drie of meer eindig by een punt | Die eerste loop reg verby die ander; die ander word gesny om teen dit te pas |

Die eerste lid is die een wie se lyn eerste kom: lyne behou die volgorde waarin hulle geteken is, skets vir skets in die volgorde waarin die skette gemerk is.

## Eindkappe en gussets

- **Eindkappe** sluit elke vrye einde met 'n plaat van die profiel se omtrek, die dikte wat jy stel, buite die einde.
- **Gussets** plaas 'n driehoekige plaat in elke hoek waar twee lede teen 'n hoek ontmoet: **Gusset-grootte** langs elke lid vanaf die hoek, **Gusset-dikte** dwars, gesentreer op die hoek se vlak.

## Die snylys

Die paneel lys elke stuk, met identiese stukke gegroepeer: die profiel, die lengte (lang punt tot lang punt, soos jy dit vir die saag sou merk), hoe elke einde gesny word (reg, 'n hoek vanaf reg, of gesny om te pas), en watter lede hulle is. Eindkappe en gussets word met hul groottes gelys. {{ui:Stoor die snylys (CSV)}} stoor dit vir 'n sigblad.

'n Lid wat om te pas gesny is teen 'n ronde-hoek-buis, reik 'n bietjie in die hoekradius van daardie buis in, so sy lang-punt-lengte is 'n paar millimeter meer as die gaping tussen die vlakke.

## Beperkings

- Lede volg slegs reguit lyne; boë en splines in die skets word uitgelaat.
- Die verbindings is gesny, nie gesweis nie: geen sweisrante word geteken nie, en die raam is een soliede liggaam.
- Die profiele word uit die tabel se afmetings geteken: W-vorms met hul wortelfillet, S en kanale met parallelle flense, buise met hoekradiusse; gate, eindvoorbereidings en sweisgapings word nie vir jou gemaak nie.
- Strukturele lede word deur die maaskern gebou. Met die presiese kern aan (slegs ontwikkelaars), sê hulle dit en word hulle nie gebou nie.
