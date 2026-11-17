---
title: Võrrandid mõlemas suunas
summary: Muuda parameetrit ja detail järgib; sisesta uus suurus sõltuvasse numbrisse ja PartCraft arvutab välja parameetri, mis selle taga on, küsides, milline neist, kui mitu võiks muutuda.
keywords: võrrandid, lahenda tagurpidi, sõltuv mõõt, kahesuunaline, vastupidi, eesmärgi otsing, parameetrid, seotud väärtused, milline parameeter
from: 82dc0269
---

Võrrand nagu **Extrude1 sügavus = thick + extra** töötab mõlemas suunas.

## Ettepoole: muuda parameetrit

Vahekaardil {{ui:Parameetrid}} muuda `thick` 20-lt 30-le. Extrude1 sügavus muutub 30 + extra-ks ja detail ehitatakse uuesti.

## Tagasi: muuda sõltuvat numbrit

1. Klõpsa ajaloos „Extrude1“. Selle kast **Sügavus (mm)** näitab **ƒ**: võrrand juhib seda.
2. Sisesta soovitud suurus, näiteks `40`, ja vajuta {{key:Enter}}.

PartCraft lahendab parameetri, mis on võrrandi taga, nii mitme sammuga kui vaja (`depth = hub_h`, `hub_h = disc_t + 50`: kõrguse sisestamine muudab `disc_t`). Olekuriba ütleb, mis muutus, näiteks et extra läks 5-lt 15-le.

Kui kaks või enam parameetrit juhivad numbrit, küsib kast **Milline parameeter peaks muutuma?** ja loetleb need. Klõpsa ühel; teised jäävad oma väärtustele. {{ui:Loobu}} ei muuda midagi.

Sama töötab visandis: topeltklõpsa sõltuval mõõdul, sisesta väärtus ja vajuta {{key:Enter}}. See töötab ka parameetritabeli veerus **Väärtus** parameetri jaoks, mis on ise avaldis.

## Kui see ei saa

- Number, mis peab olema täisarv (mustri loendur) või jääma vahemikku (nurk kuni 360°), lükatakse tagasi, enne kui midagi muutub.
- Ainult fikseeritud arvudest koosnev võrrand (`=40`) ei oma parameetrit, mida muuta: sisestatud number asendab selle.
- Kui ükski parameetri väärtus ei anna sisestatud suurust, ütleb olekuriba seda ja midagi ei muutu.
- Visand, mida ei saa uue väärtusega lahendada, jätab oma eelmised väärtused ja olekuriba nimetab visandi.

Iga muudatus mõlemal viisil on üks samm {{key:Mod+Z}} ja {{key:Mod+Y}} jaoks.
