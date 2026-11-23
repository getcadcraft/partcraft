---
title: Proveri ovaj ram
summary: Uzmite čelične elemente zavarenog sklopa (postolje, stalak, ram od cevi i profila), postavite opremu na noge i oslonce na pod, pa vidite koliko je svaki element i svaki var iskorišćen po AISC 360-16 ili EN 1993. Pomoćno sredstvo dok inženjer ne pregleda.
keywords: ram, zavareni sklop, postolje, postolje pumpe, konstrukcijski element, var, varovi, provera, AISC 360, EN 1993, iskorišćenost, oslonac, oprema, opterećenje, šuplji profil, HSS, RHS, CHS, inženjer
from: 032e34ee
---

{{ui:Proveri ovaj ram}} uzima prave čelične elemente zavarenog sklopa, pravi ram od njih, rešava ga pod težinom čelika i opreme koju stavite na njega, i proverava svaki element i svaki var gde se elementi spajaju. Jedno pokretanje, jedna tabela.

:::warning
To je **pomoćno sredstvo dok inženjer ne pregleda**. Nije žig, a prolazna provera nije projekat. Koristi središnje linije elemenata kako su nacrtane, svaki spoj tretira kao zavaren sa svih strana preseka, uzima krak ugaonog vara iz zida preseka (do 8 mm) osim ako ga ne podesite, i ne proverava zavrtnje, ploče, osnovne ploče, sidra, ležanje, smicanje bloka, zamor ili podizanje.
:::

## Pokretanje

1. Nacrtajte elemente sa {{ui:Konstrukcijski element}} (preseci dolaze iz tabele preseka).
2. Otvorite {{ui:Pogledi}} › {{ui:Proveri ovaj ram}}. Recite gde ram stoji (**oslonac** na svakom stopalu: zglobni, učvršćeni ili valjkasti; {{ui:Zglobni oslonci na nogama}} stavlja jedan na svaki najniži kraj elementa) i šta na njemu stoji (**oprema**: masa, težište, tačke na kojima je pričvršćena zavrtnjima, i opcioni vodoravni potisak).
3. Izaberite standard: **ASCE 7 + AISC 360-16** ili **EN 1990 + EN 1993**. Podesite klasu čelika i, za AISC, čvrstoću metala vara (482.6 MPa je E70).
4. Pritisnite {{ui:Proveri}}. {{ui:Sačuvaj izveštaj kao CSV}} upisuje svaku tabelu, sa redom o neproverenom izveštaju na vrhu.

Ram se čita u milimetrima sa vertikalnom osom dela prema gore. Tačke oslonaca i opreme unose se kao x y z u istom sistemu, pri čemu je z visina.

Kraj elementa koji padne na sredinu drugog elementa deli ga tamo, kao i stopalo ili tačka pričvršćena zavrtnjima na liniji elementa. Težina se deli na tačke pričvršćene zavrtnjima kao kruto telo; težište van stopala, ili sila podizanja na stopalu, kaže se, nikad se ne skriva.

## Šta dobijate

- Najviše iskorišćena stavka i da li išta otkazuje. Stavke koje provera ne može da oceni (presek koji nije u tabeli, čelik bez faktora u standardu) se broje i imenuju, nikad se ne broje kao prolazne.
- Jedan red po elementu i po grupi varova: koliko je iskorišćeno, merodavna provera i član, i kombinacija opterećenja koja je bila merodavna.
- Iste tabele u izveštaju.

## Šta se proverava

Šuplji preseci (RHS, SHS, CHS, cev) i I-preseci za zatezanje, pritisak, savijanje, smicanje i njihovu interakciju; ugaoni varovi i varovi punog provarivanja metodom elastičnih vektora. Kompaktni zidovi se proveravaju na savijanje samo kod šupljih preseka; vitki zidovi se navode kao neprovereni. Neke konstante su napisane iz standarda i još nisu upoređene sa štampanim primerkom; izveštaj navodi svaki izvor.

Vidi [Ramovi od čeličnih preseka](topic:structural-members) za crtanje elemenata i njihovu listu za sečenje.
