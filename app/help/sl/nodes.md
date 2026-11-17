---
title: Vozlišča: gradite model z povezovanjem
summary: Povežite števila v točke, točke v krivulje, krivulje v površine. Spremenite število in vse nižje se obnovi. Vsako vozlišče je tudi vrstica skripta CraftScript, graf pa je shranjen v datoteki.
keywords: vozlišča, urejevalnik vozlišč, vizualno skriptiranje, parametrično, graf, žice, vrata, prosta oblika, freeform, nurbs, prehod, izvlečenje, zavrtitev, krožnica, krivulja, površina, zaporedje, obseg, naključno, seznam, skript, craftscript, grasshopper
from: 3a4625de
---

**Urejevalnik vozlišč** gradi geometrijo tako, da povezuje škatlice. Vsaka škatlica (vozlišče) opravi en majhen posel: ustvari število, točko, krožnico, prehod. Izhod enega povežete z vhodom naslednjega, model pa sledi, ko spremenite število na začetku.

Odprite ga iz seznama delovnih okolij: {{ui:Vozlišča}}. Odpre se okno urejevalnika. Del, ki že ima graf, ga prikaže, ko odprete delovno okolje. Gre za okno nad 3D pogledom: za premik povlecite naslovno vrstico, za spremembo velikosti povlecite kot.

## Povezovanje

1. Izberite vozlišče s seznama na levi (v iskalno polje vpišite, da zožite izbor; <kbd>Enter</kbd> doda prvi zadetek). Pojavi se na sredini platna.
2. Povlecite od okrogle **izhodne** pike na desni strani enega vozlišča do okrogle **vhodne** pike na levi strani drugega. Pika postane zelena, če se ujema, in rdeča, če ne; kazalec nad njo pokaže razlog.
3. Vhod brez povezave prikaže polje za vpisano vrednost. Vpišite število in pritisnite <kbd>Tab</kbd>: rezultat se obnovi.
4. Majhen krogec v naslovni vrstici vozlišča je njegovo **oko**. Vozlišče z vklopljenim očesom je narisano v 3D pogledu: krivulje kot črte, površine osenčene, točke kot pike.

Povlecite vozlišče za naslovno vrstico. Povlecite ozadje za pomik, kolesce miške za povečavo. <kbd>Delete</kbd> odstrani izbrano vozlišče. {{ui:Uredi}} razporedi vozlišča v stolpce, {{ui:Prilagodi}} jih vse prilagodi pogledu, {{ui:Razveljavi}} in {{ui:Uveljavi}} premikata po vaših urejanjih.

## Vrste in enote

Vrata imajo vrsto: število, da/ne, točka, vektor, krivulja, površina, mreža, telo ali "geometrija" za katero koli od teh. Točka lahko napaja vhod vektorja in obratno. Števila nosijo enoto: **dolžina** je v milimetrih, **kot** v stopinjah. Dolžina ne more napajati kota, dolžina krat dolžina (površina) pa je zavrnjena, zato je napačna žica ustavljena že ob njenem vlečenju.

Kvadratna pika je **seznam**. Ko seznam doseže vhod za eno vrednost, vozlišče teče enkrat za vsak element, njegov rezultat pa postane seznam. Krajši seznam ponavlja svoj zadnji element. Na primer, **Zaporedje** višin v **Premakni** naredi kup kopij.

## Telesa in Booleove operacije kot vozlišča

Skupina **Telesa** naredi zaprta telesa iz istih natančnih površin kot plošča **Površine**: **Telo kvadra**, **Telo valja** in **Telo krogle** (velikosti v mm), **Unija**, **Odštej** in **Presek** (drugo telo se vzame iz prvega; toleranca pove, koliko lahko trikotniki motorja teles odstopajo od natančnih površin), **Zaobljenje med ploskvami** (ploskve po njihovi številki v telesu, 1 za prvo; polmer in, če je večji od 0, polmer na koncu), **Prostornina telesa** (mm³) in **Telo v mrežo** (da ga vidite ali zapečete). Telo ima svojo vrsto vrat: točke ali števila ni mogoče povezati z vhodom telesa, pika pa ostane rdeča. Vozlišči Booleove operacije in zaobljenja uporabljata lastni motor teles programa, ki se naloži, ko se urejevalnik prvič odpre.

## Napake

Vozlišče, ki ne more opraviti svojega dela, pove razlog pod svojim imenom, z rdečo („Polmer mora biti večji od nič.“), vozlišča za njim pa čakajo. Enako sporočilo je **Težava** na plošči Težave, zato ga lahko najdete tam.

## Vsako vozlišče je vrstica skripta

Pritisnite {{ui:Skript}}, da vidite graf kot CraftScript: ena vrstica na vozlišče, na primer `n3 = nd_circle(n2, n1, [0 0 1]);`. Uredite besedilo in pritisnite {{ui:Naredi graf iz tega skripta}}, da se vrne kot graf. Enake funkcije `nd_` delujejo v CraftScript v PartCraft, zato graf lahko tam zaženete, zanke ali preizkusite. Naključna števila vedno zahtevajo **seme**, zato isti graf da isti rezultat na vsakem računalniku.

## Shranjeno z datoteko

Graf je shranjen v datoteki dela (ne v zgodovini, zato je Razveljavi v urejevalniku svoje). Vozlišča naredijo krivulje, površine in mreže poleg telesa: ne spreminjajo značilk dela.
