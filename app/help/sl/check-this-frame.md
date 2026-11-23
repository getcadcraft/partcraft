---
title: Preverite ta okvir
summary: Vzemite jeklene elemente varjenca (saně, stojalo, okvir iz cevi in profilov), postavite opremo na noge in podpore na tla ter preverite, kolikšen del vsakega elementa in vsakega vara je porabljen po AISC 360-16 ali EN 1993. Pripomoček, dokler ga ne pregleda inženir.
keywords: okvir, varjenec, saně, saně za črpalko, konstrukcijski element, var, vari, preverjanje, AISC 360, EN 1993, izkoriščenost, podpora, oprema, obremenitev, votli profil, HSS, RHS, CHS, inženir
from: 032e34ee
---

{{ui:Preveri ta okvir}} vzame ravne jeklene elemente varjenca, zgradi iz njih okvir, ga reši pod težo jekla in opreme, ki ste jo nanj postavili, ter preveri vsak element in vsak var, kjer se elementi stikajo. En zagon, ena tabela.

:::warning
Je **pripomoček, dokler ga ne pregleda inženir**. Ni potrdilo, in prehod ni zasnova. Uporablja središčne črte elementov, kot so narisane, obravnava vsak spoj kot varjen po celotnem preseku, vzame kateto kotnega vara iz stene preseka (do 8 mm), če je ne nastavite, in ne preverja vijakov, plošč, podnožnih plošč, sider, ležajev, bločnega striga, utrujanja ali dviganja.
:::

## Zagon

1. Narišite elemente z {{ui:Konstrukcijski element}} (profili pridejo iz tabele profilov).
2. Odprite {{ui:Pogledi}} › {{ui:Preveri ta okvir}}. Povejte, kje okvir stoji (**podpora** na vsaki nogi: členkasta, vpeta ali valjčna; {{ui:Členkaste podpore na nogah}} postavi eno na vsak najnižji konec elementa) in kaj na njem stoji (**oprema**: masa, težišče, točke, kjer je privijačena, in neobvezen vodoraven potisk).
3. Izberite predpis: **ASCE 7 + AISC 360-16** ali **EN 1990 + EN 1993**. Nastavite kakovost jekla in pri AISC trdnost varilne kovine (482.6 MPa je E70).
4. Pritisnite {{ui:Preveri}}. {{ui:Shrani poročilo kot CSV}} zapiše vsako tabelo, pri čemer je vrstica o nepregledanosti prva.

Okvir je prebran v milimetrih z navpično osjo dela navzgor. Točke podpor in opreme se vpisujejo kot x y z v istem okvirju, z je višina.

Konec elementa, ki pade na sredino drugega elementa, ga tam razdeli, prav tako noga ali točka privijanja na črti elementa. Teža se deli med točkami privijanja kot togo telo; težišče zunaj nog ali dvižna sila v nogi je povedana, nikoli skrita.

## Kaj dobite

- Najbolj obremenjen element in ali kaj odpove. Postavke, ki jih preverjanje ne more oceniti (profil, ki ni v tabeli, jeklo brez faktorja v predpisu), so prešteta in imenovana, nikoli ne štejejo kot uspešne.
- Ena vrstica na element in na skupino varov: koliko je porabljeno, merodajen preverjanje in točka ter kombinacija obremenitev, ki je bila merodajna.
- Enake tabele v poročilu.

## Kaj se preverja

Votli profili (RHS, SHS, CHS, cev) in I-profili za natezanje, tlak, upogib, strig in njihovo medsebojno delovanje; kotni in polno prevarjeni vari po metodi elastičnega vektorja. Kompaktne stene pri upogibu samo za votle profile; vitke stene so navedene kot nepreverjene. Nekatere konstante so bile zapisane po standardih in še niso primerjane s tiskano izdajo; poročilo navaja vsak vir.

Glejte [Okviri iz jeklenih profilov](topic:structural-members) za risanje elementov in njihov seznam rezanja.
