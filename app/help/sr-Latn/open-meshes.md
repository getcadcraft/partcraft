---
title: Otvaranje STL, OBJ ili 3MF kao čvrstog tela
summary: Pretvorite mrežu sa skenera, sajta za 3D štampu ili drugog programa u čvrsto telo koje možete seći, dodavati i skicirati na njemu; šta PartCraft popravlja i šta ne može.
keywords: stl, obj, 3mf, mreža, mreža u čvrsto telo, pretvaranje mreže, sken, vodonepropusno, popravka, rupe, praznine, jedinice, osa gore, uvezeno telo, ravne površi
from: 7b948471
---

PartCraft otvara STL, OBJ i 3MF mreže kao **čvrsta tela**. Telo radi kao svako drugo čvrsto telo: seče se, dodaje mu se, buši se, pravi niz od njega, koristi se u sklopu ili za obradu, i skicira se na njegovim ravnim površima. Nema sopstvenu istoriju: mreža je samo trouglovi, pa se njene mere ne mogu menjati, samo dodavati ili seći.

## Otvaranje mreže

1. Izaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, pa izaberite `.stl`, `.obj` ili `.3mf` datoteku. Ili je prevucite u 3D prikaz.
2. PartCraft je čita, popravlja šta bezbedno može i prikazuje šta je našao: koliko trouglova i tačaka, svaku popravku, i da li mreža sada **zatvara** telo.
3. Proverite **Jedinice u datoteci** i **Gore u datoteci**. STL i OBJ ne navode svoje jedinice, pa je pretpostavka milimetri; 3MF datoteka navodi svoje. Red **Veličina ovde** prikazuje veličinu tela sa vašim izborom, pa je deo koji dođe 25.4 puta premali lako uočljiv (bio je u inčima).
4. Ako je deo na ekranu prazan, izaberite {{ui:Otvori kao telo}}. Ako već ima elemente, izaberite **Koristi za** (dodaj delu, izreži iz njega ili zadrži samo preklapanje), pa {{ui:Dodaj u ovaj deo}}, ili {{ui:Novi deo}} da počnete ponovo sa mrežom.

Element **Imported1** se pojavljuje u istoriji. Statusna traka kaže, na primer: „bracket.stl je čvrsto telo: 15200.512 mm³, 14 ravnih površi za skiciranje.“

## Šta PartCraft popravlja

| Popravka | Šta znači |
|---|---|
| Dvostruki uglovi spojeni | STL ponavlja svaki ugao za svaki od svojih trouglova; spajaju se u jednu tačku |
| Trouglovi bez površine uklonjeni | Tanki trouglovi čiji uglovi leže na jednoj liniji |
| Dvostruki trouglovi uklonjeni | Trougao upisan dva puta zadržava se jednom; dva okrenuta u suprotnim smerovima (unutrašnji zid) uklanjaju se oba |
| Male praznine zatvorene | Ivice koje se skoro sastaju (u okviru hiljaditog dela veličine dela) se spajaju |
| Rupe popunjene | Otvor čija ivica leži ravno popunjava se, ma kolike bio; iskrivljen samo kad je mali |
| Trouglovi okrenuti ka spolja | Trouglovi okrenuti na pogrešnu stranu se okreću da se slože sa susedima, a cela površ da gleda spolja |

## Kad mreža ne zatvara telo

Čvrsto telo treba površ bez otvora. Kad PartCraft ne može da je zatvori, dijalog kaže koliko otvora i otvorenih ivica ostaje, i nema tela za dodavanje. Zatvorite otvore u programu koji je napravio mrežu, ili je ponovo izvezite kao zatvorenu (vodonepropusnu) mrežu, pa je ponovo otvorite.

PartCraft ostavlja otvor netaknut kad bi popunjavanje moglo da pogodi pogrešno: veliku iskrivljenu rupu, ili dva otvora u istoj ravni (prstenasta površ koja nedostaje, gde bi popunjavanje svake ivice pokrilo rupu u sredini). Ivica koju deli više od dva trougla se takođe prijavljuje: takva površ nema jednu jasnu unutrašnjost.

## Skiciranje na ravnim površima

Ravne oblasti od mnogo trouglova spajaju se svaka u jednu **ravnu površ**, pa na njima može da stoji skica: kliknite površ i izaberite {{ui:Skica na ovoj površi}}. Površ koja se kasnije seče ili joj se nešto dodaje ostaje površ. Okrugle oblasti (rupa, zaobljenje) ostaju trouglovi: nisu površi koje možete izabrati, a prikaz crta njihovu konturu prema uglu između trouglova.

## Kasnija izmena

Izaberite **Imported1** da vidite datoteku iz koje potiče, koliko trouglova ima i šta je popravljeno. **Jedinice u datoteci**, **Gore u datoteci** i **Koristi za** mogu se menjati tamo; svaka izmena je jedan korak za Opozovi.

## Gde se čuva

Popravljena mreža se čuva **unutar** datoteke `.partcraft.json`, pa vam ne treba ponovo datoteka mreže. Datoteka dela sa telom od mreže je verzija 5: stariji PartCraft je odbija po verziji. Mreža od 200,000 trouglova dodaje oko 1.2 MB.

## Ograničenja

- Najviše 3 miliona trouglova i 200 MB u jednoj datoteci.
- Telo napravljeno od mreže pravi mrežni kernel. Sa uključenim tačnim kernelom (samo za programere), to se kaže i telo se ne pravi.
- OBJ materijali, koordinate teksture i krive slobodne forme se izostavljaju; 3MF boje, materijali i potporni objekti se izostavljaju (dijalog kaže koliko je objekata preskočeno).
- Telo je onoliko fino koliko i mreža: grub STL daje grubo okrugle površi. Rupe koje u njega bušite su onoliko okrugle koliko i vaši sopstveni elementi.
