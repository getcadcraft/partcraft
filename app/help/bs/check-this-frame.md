---
title: Provjeri ovaj okvir
summary: Uzmi čelične nosače zavarene konstrukcije (saonice, postolje, okvir od cijevi i profila), postavi opremu na noge a oslonce na pod, i vidi koliko je iskorišten svaki nosač i svaki zavar prema AISC 360-16 ili EN 1993. Pomoć dok inženjer ne pregleda.
keywords: okvir, zavarena konstrukcija, saonice, saonice za pumpu, konstruktivni element, zavar, zavari, provjera, AISC 360, EN 1993, iskorištenost, oslonac, oprema, opterećenje, šuplji profil, HSS, RHS, CHS, inženjer
from: 032e34ee
---

{{ui:Provjeri ovaj okvir}} uzima prave čelične nosače zavarene konstrukcije, gradi od njih okvir, rješava ga pod težinom čelika i opreme koju na njega stavite, i provjerava svaki nosač i svaki zavar gdje se nosači spajaju. Jedno pokretanje, jedna tabela.

:::warning
To je **pomoć dok inženjer ne pregleda**. Nije ovjera, a prolaz nije projekat. Koristi središnje linije nosača kako su nacrtane, svaki spoj tretira kao zavaren po cijelom presjeku, uzima katetu zavara iz zida presjeka (do 8 mm) osim ako je ne postavite, i ne provjerava vijke, ploče, temeljne ploče, sidra, pritisak na oslonac, smicanje bloka, zamor ili podizanje.
:::

## Pokretanje

1. Nacrtajte nosače s {{ui:Konstruktivni element}} (presjeci dolaze iz tabele presjeka).
2. Otvorite {{ui:Prikazi}} › {{ui:Provjeri ovaj okvir}}. Recite gdje okvir stoji (**oslonac** na svakoj nozi: zglobni, ukliješteni ili valjkasti; {{ui:Zglobni oslonci na nogama}} stavlja jedan na svaki najniži kraj nosača) i šta na njemu stoji (**oprema**: masa, težište, tačke na kojima je pričvršćena za pod, i opcionalni vodoravni pritisak).
3. Izaberite propis: **ASCE 7 + AISC 360-16** ili **EN 1990 + EN 1993**. Postavite kvalitet čelika i, za AISC, čvrstoću metala zavara (482,6 MPa je E70).
4. Pritisnite {{ui:Provjeri}}. {{ui:Spasi izvještaj kao CSV}} zapisuje svaku tabelu, s redom neprovjerenog izvještaja na vrhu.

Okvir se čita u milimetrima s vertikalnom osom dijela prema gore. Oslonci i tačke opreme upisuju se kao x y z u istom koordinatnom sistemu, gdje je z visina.

Kraj nosača koji padne na sredinu drugog nosača dijeli ga tamo, kao i noga ili tačka pričvršćenja na liniji nosača. Težina se raspodjeljuje na tačke pričvršćenja kao kruto tijelo; težište izvan nogu, ili podižuća sila na nozi, se navodi, nikad se ne skriva.

## Šta dobijate

- Najviše iskorištena stavka i da li nešto ne prolazi. Stavke koje provjera ne može ocijeniti (presjek koji nije u tabeli, čelik bez faktora u propisu) se broje i imenuju, nikad se ne broje kao prolazne.
- Jedan red po nosaču i po grupi zavara: koliko je iskorišten, glavna provjera i klauzula, i kombinacija opterećenja koja je odlučivala.
- Iste tabele u izvještaju.

## Šta se provjerava

Šuplji presjeci (RHS, SHS, CHS, cijev) i I-presjeci na zatezanje, pritisak, savijanje, smicanje i njihovu međusobnu interakciju; ugaoni i potpuno provareni zavari metodom elastičnog vektora. Kompaktni zidovi samo na savijanje, samo za šuplje presjeke; vitki zidovi se navode kao neprovjereni. Neke konstante su preuzete iz standarda i još nisu upoređene sa štampanim primjerkom; izvještaj navodi svaki izvor.

Pogledajte [Okviri od čeličnih presjeka](topic:structural-members) za crtanje nosača i njihovu listu rezanja.
