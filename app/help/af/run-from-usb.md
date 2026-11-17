---
title: Laat loop vanaf 'n USB-stokkie
summary: Wat die ingenieursgereedskap skryf en waar, sodat CadCraft Studio vanaf 'n USB-stokkie of enige vouer kan loop sonder 'n installeerder en sonder administrateursregte: instellings, generators, kasgeheue en onderdeellêers, en wat op die stokkie bly.
keywords: usb, draagbaar, geen installeerder, administrateur, admin, instellings, datavouer, generators, waar lêers geskryf word, vanlyn, privaatheid, gasheertoegang
from: 263efc79
---

Die ingenieursgereedskap (generators, die ingenieursbiblioteek, die kontroles en die datalêers) benodig **geen administrateursregte** nie en **geen installeerder** nie. Hulle skryf net wat hier gelys word, en niks anders nie.

| Wat | Waar dit gehou word |
|---|---|
| Jou onderdele, met hul gegenereerde liggame, datablaaie en kontroles | Die onderdeellêer wat jy stoor (`.partcraft.json`), op die plek waar jy dit stoor. |
| Generators wat jy uit lêers oopgemaak het | In die toepassing se eie berging: die blaaier se plaaslike berging in 'n webblad, en die `data`-vouer naas die program in die draagbare Studio. Hoogstens 20. |
| Instellings (voksel-groottes wat jy stel, oplosserdrade, die uitleg) | Dieselfde toepassingsberging. |
| Datablaaie, velde, mazas | Slegs waar jy dit stoor: die aflaai gaan waarheen jy kies. |

Die gereedskap maak **geen eie netwerkoproepe nie**: die generators wat saam gestuur word, is lêers in die toepassing se eie vouer, die biblioteek en die kontroles loop op jou rekenaar in 'n werker wat nie die netwerk kan bereik nie, en die ingenieursdata (water- en lugeienskappe, materiale) is binne die toepassing. 'n Generator wat jy uit 'n lêer oopmaak, word op jou rekenaar gelees en gaan nêrens heen nie.

## Die draagbare Windows-zip en Linux

Die draagbare Studio vir Windows hou sy instellings, kasgeheue en byvoegings in 'n `data`-vouer naas die program. Die Linux AppImage hou dit naas homself wanneer 'n lêer met die naam `portable` daarnaas staan; sonder daardie lêer gebruik dit jou tuisvouer. Daar is geen draagbare Mac-vorm nie: die stelsel verhoed dat 'n toepassing wat afgelaai is, naas homself skryf. Die draagbare notas van die skil (`Studio`-hulp) lys wat die program skryf.

## Gasheertoegang

Niks hier vra vir gasheertoegang nie. Drukkers, seriële masjiene en USB-toestelle is afsonderlik: hulle vra wanneer 'n taak hulle nodig het, een keer per toestel, en niks in die generators of die kontroles raak hulle aan nie.
