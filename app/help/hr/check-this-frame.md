---
title: Provjeri ovaj okvir
summary: Uzmite čelične elemente zavarenog sklopa (sanjke, stalak, okvir od cijevi i profila), postavite opremu na noge a oslonce na pod i pogledajte koliko se iskoristi svaki element i svaki zavar prema AISC 360-16 ili EN 1993. Pomoćno sredstvo dok ga inženjer ne pregleda.
keywords: okvir, zavareni sklop, sanjke, sanjke za pumpu, konstrukcijski element, zavar, zavari, provjera, AISC 360, EN 1993, iskorištenost, oslonac, oprema, opterećenje, šuplji profil, HSS, RHS, CHS, inženjer
from: 032e34ee
---

{{ui:Provjeri ovaj okvir}} uzima ravne čelične elemente zavarenog sklopa, gradi okvir od njih, rješava ga pod težinom čelika i opreme koju na njega stavite te provjerava svaki element i svaki zavar na mjestima gdje se elementi spajaju. Jedno pokretanje, jedna tablica.

:::warning
To je **pomoćno sredstvo dok ga inženjer ne pregleda**. Nije to ovjera, a prolazna ocjena nije projekt. Koristi središnje linije elemenata kako su nacrtane, svaki spoj tretira kao zavaren po cijelom obodu presjeka, uzima krak kutnog zavara iz stijenke presjeka (do 8 mm) osim ako ga ne postavite, i ne provjerava vijke, ploče, podložne ploče, sidra, naleganje, smik bloka, zamor ili podizanje.
:::

## Pokretanje

1. Nacrtajte elemente s {{ui:Konstrukcijski element}} (presjeci dolaze iz tablice presjeka).
2. Otvorite {{ui:Pogledi}} › {{ui:Provjeri ovaj okvir}}. Navedite gdje okvir stoji (**oslonac** na svakoj nozi: zglobni, ukliješteni ili valjkasti; {{ui:Zglobni oslonci na nogama}} postavlja jedan na svaki najniži kraj elementa) i što na njemu stoji (**oprema**: masa, težište, točke na kojima je pričvršćena i neobavezni vodoravni potisak).
3. Odaberite normu: **ASCE 7 + AISC 360-16** ili **EN 1990 + EN 1993**. Postavite kvalitetu čelika i, za AISC, čvrstoću metala zavara (482.6 MPa je E70).
4. Pritisnite {{ui:Provjeri}}. {{ui:Spremi izvještaj kao CSV}} zapisuje svaku tablicu, s retkom o nepregledanosti na vrhu.

Okvir se čita u milimetrima s vertikalnom osi dijela prema gore. Točke oslonaca i opreme upisuju se kao x y z u istom okviru, pri čemu je z visina.

Kraj elementa koji padne na sredinu drugog elementa dijeli ga na tom mjestu, kao i noga ili točka pričvršćenja na liniji elementa. Težina se raspodjeljuje po točkama pričvršćenja kao kruto tijelo; težište izvan nogu ili sila podizanja na nozi navodi se, nikad se ne skriva.

## Što dobivate

- Najviše iskorišteni stavak i je li išta pukao. Stavke koje provjera ne može ocijeniti (presjek koji nije u tablici, čelik bez faktora u normi) broje se i imenuju, nikad se ne broje kao prolazne.
- Jedan redak po elementu i po skupini zavara: koliko se iskorištava, merodavna provjera i klauzula te kombinacija opterećenja koja je bila merodavna.
- Iste tablice u izvještaju.

## Što se provjerava

Šuplji presjeci (RHS, SHS, CHS, cijev) i I-presjeci na vlačno, tlačno, savijanje, smik i njihovu interakciju; kutni i punopropusni zavari elastičnom vektorskom metodom. Kompaktne stijenke u savijanju samo za šuplje presjeke; vitke stijenke navode se kao neprovjerene. Neke konstante zapisane su iz normi i još nisu uspoređene s tiskanim primjerkom; izvještaj navodi svaki izvor.

Vidi [Okviri od čeličnih presjeka](topic:structural-members) za crtanje elemenata i njihov popis za rezanje.
