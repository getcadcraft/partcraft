---
title: Visandi seosed ja mõõdud
summary: Iga PartCraft-visandi seosed ja mõõdud, mida igaühe jaoks valida, nende sümbol ning käitumine lahendamisel.
keywords: seosed, piirangud, ühtelangev, horisontaalne, vertikaalne, paralleelne, risti, puutuja, võrdne, ühise keskpunktiga, keskpunkt, lukusta, kaugus, horisontaalne kaugus, vertikaalne kaugus, raadius, läbimõõt, nurk, sümbolid, glüfid
from: 9831e7be
---

Seosed määravad, kuidas geomeetria asetseb teise geomeetria suhtes. Mõõdud määravad suurused. Seose lisamiseks vali esemed valimistööriistaga ({{key:S}}) ja vajuta selle nuppu paremal paneelil; mõõdu lisamiseks kasuta mõõtmistööriista ({{key:D}}) või mõõdunuppe paremal paneelil. Kuidas nendega töötada: [Visandi täielik määramine](topic:relations-dimensions).

„Kõver“ allpool tähendab ringjoont või kaart. Päritolu loetakse punktiks.

## Seosed

| Nupp | Sümbol | Vali | Mõju |
|---|---|---|---|
| {{ui:• Ühtelangev}} | • (näidatakse ainult valituna või probleemi korral) | Kaks punkti | Punktid kohtuvad |
| {{ui:• Ühtelangev}} | • | Punkt ja joon | Punkt asub joonel (või selle pikendusel) |
| {{ui:• Ühtelangev}} | • | Punkt ja kõver | Punkt asub ringjoonel või kaarel |
| {{ui:H Horisontaalne}} | H | Joon või kaks punkti | Joon on tasane või kaks punkti on samal kõrgusel |
| {{ui:V Vertikaalne}} | V | Joon või kaks punkti | Joon on püstine või punktid on üks teise kohal |
| {{ui:∥ Paralleelne}} | ∥ | Kaks joont | Jooned kulgevad samas suunas |
| {{ui:⊥ Risti}} | ⊥ | Kaks joont | Jooned kohtuvad täisnurga all |
| {{ui:T Puutuja}} | T | Joon ja kõver | Joon puudutab kõverat, seda läbimata |
| {{ui:T Puutuja}} | T | Kaks kõverat | Need puudutavad, väljaspool või seespool, nagu joonistatud |
| {{ui:T Puutuja}} | T | Splain ja joon, kaar või splain, mis kohtub selle ühe otsaga | Splain väljub sellest otsast teise kõvera suunas |
| {{ui:= Võrdne}} | = | Kaks joont | Sama pikkus |
| {{ui:= Võrdne}} | = | Kaks kõverat | Sama raadius |
| {{ui:◎ Ühise keskpunktiga}} | ◎ | Kaks kõverat | Sama keskpunkt |
| {{ui:◎ Ühise keskpunktiga}} | ◎ | Punkt ja kõver | Punkt asub kõvera keskpunktis |
| {{ui:M Keskpunkt}} | M | Punkt ja joon | Punkt asub joone keskel |
| {{ui:↔ Sümmeetriline}} | ↔ | Kaks punkti ja joon | Punktid on joone suhtes peegelpildid ({{ui:Peegeldus}} lisab need) |
| {{ui:⚓ Lukusta}} | ⚓ | Punkt, joon, kõver või splain | Hoiab selle täpselt sealt, kus see praegu on (splain: selle punktid) |

Siin on joonte hulka arvatud telgjooned. Joonistamine lisab mõned seosed automaatselt: punkti haakumine teeb selle ühtelangevaks, kõvera haakumine paneb punkti sellele, peaaegu tasased või püstised jooned saavad H või V ja ristkülik tuleb nelja nurgaga ühendatuna, kaks H-d ja kaks V-d.

**{{ui:⚓ Lukusta}}** on kiire viis takistada midagi liikumast, kuid siis ei saa detail järgida mõõdu muutust mujal. Eelista mõõte alguspunkti suhtes.

## Mõõdud

| Nupp | Vali | Mõõdab | Kuvatakse |
|---|---|---|---|
| {{ui:Kaugus}} | Joon | Selle pikkus | Kaugus 40 |
| {{ui:Kaugus}} | Kaks punkti | Nendevaheline sirgjooneline kaugus | Kaugus 40 |
| {{ui:Kaugus}} | Punkt ja joon | Kaugus punktist joonele, sellega risti | Kaugus 40 |
| {{ui:Kaugus}} | Kaks paralleelset joont | Nendevaheline vahe | Kaugus 40 |
| {{ui:Horisontaalne kaugus}} | Kaks punkti või joon | Ainult vasak-parem kaugus | Horisontaalne kaugus 40 |
| {{ui:Vertikaalne kaugus}} | Kaks punkti või joon | Ainult üles-alla kaugus | Vertikaalne kaugus 40 |
| {{ui:Raadius}} | Ringjoon või kaar | Selle raadius | Raadius R10 |
| {{ui:Läbimõõt}} | Ringjoon või kaar | Selle läbimõõt | Läbimõõt ⌀20 |
| {{ui:Nurk}} | Kaks mittparalleelset joont | Nendevaheline nurk, 0 kuni 180 kraadi | Nurk 30° |

Mõõtetööriistaga valib PartCraft tüübi selle järgi, mida klõpsad ja kuhu paigutad numbri:

| Klõpsad | Saad |
|---|---|
| Üks joon | Selle pikkus; kaldjoone puhul horisontaalne, kui number jääb sellest kohe üle või alla, vertikaalne, kui see on külje peal |
| Üks ringjoon | Läbimõõt |
| Üks kaar | Raadius |
| Kaks punkti | Kaugus; horisontaalne või vertikaalne nagu kaldjoone puhul |
| Punkt ja joon | Kaugus punktist joonele |
| Kaks joont | Nurk, või kaugus, kui need on paralleelsed |
| Punkt ja ringjoon | Mitte midagi: „Neid esemeid ei saa koos mõõta.“ Mõõda selle asemel ringjoone keskpunkti |

**Nihuta** (kuvatakse kaugusena) teeb nihutamistööriist: see hoiab kopeeritud joont paralleelsena sellel kaugusel või kopeeritud kaare või ringjoone konsentrilisena, raadiusega, mis on samavõrra suurem või väiksem. Sama nihke teised osad saavad seose **O** ja järgivad ühte nihkemõõtu. Vaata [Splainid, lõikamine, nihutamine ja muud visandi tööriistad](topic:sketch-tools).

Mõõtude väärtused on millimeetrites (või kraadides), mitte kunagi negatiivsed. Raadius ja läbimõõt peavad olema suuremad kui null. Kauguste puhul on lubatud väärtus 0: kaks punkti 0 kaugusel on ühtelangevad.

## Kuidas lahendamine käitub

- **Vähim liikumine.** Kui väärtus muutub, liigutab lahendaja geomeetriat võimalikult vähe. Joon, mille pikkus muutub ja mille ükski ots pole kinni hoitud, kasvab mõlemast otsast võrdselt.
- **Ei pöörata.** Kaugused punktist joonele, horisontaalsed ja vertikaalsed kaugused, nurgad ja puutuvus mäletavad, millisel küljel nad tehti. Väärtuse muutmine ei pööra geomeetriat teisele poolele.
- **Konfliktid jätavad asjad rahule.** Kui seosed on vastuolus, jääb visand täpselt sellisele, nagu see oli, ja vastuolulised muutuvad punaseks.
- **Üleliigsed seosed** (teistest tulenevad) nimetatakse olekuribal („on juba tuletatud. Kustuta see.“) ja detail valmib siiski hoiatusega.
- **Puutuvad liitekohad.** Kus ümardusekaar kohtub oma joontega jagatud alguspunktis, lahendatakse puutuvus sellisel kujul, mis seal jääb hästi määratletuks, nii et visandi ümardused ei tundu üle määratletuna.

## Pole veel saadaval

Kollineaarsed, koradiaalsed ja läbistavad seosed; punkt splainil; juhitavad (viite-) mõõdud; ordinaat- ja kaarepikkuse mõõdud; mõõtude vahelised võrrandid. Kollineaarsete joonte jaoks kasuta paralleelset seost ja 0 kaugust.
