---
title: Otvaranje STL, OBJ ili 3MF kao čvrstog tijela
summary: Pretvori mrežu iz skenera, sajta za 3D štampu ili drugog programa u tijelo koje možeš rezati, dodavati mu i crtati na njemu; šta PartCraft popravlja u toku i šta ne može.
keywords: stl, obj, 3mf, mreža, mreža u tijelo, pretvaranje mreže, sken, vodonepropusna, popravka, rupe, procjepi, jedinice, osa gore, uvezeno tijelo, ravne površine
from: 7b948471
---

PartCraft otvara STL, OBJ i 3MF mreže kao **čvrsta tijela**. Tijelo radi kao bilo koje drugo tijelo: izrezuj ga, dodaj mu, buši, pravi uzorke, koristi ga u sklopu ili za obradu, i skiciraj na njegovim ravnim površinama. Nema sopstvenu istoriju: mreža su samo trouglovi, pa se njene veličine ne mogu mijenjati, samo dodavati ili odsijecati.

## Otvaranje mreže

1. Izaberi {{ui:Open}} ili pritisni {{key:Mod+O}}, i izaberi datoteku `.stl`, `.obj` ili `.3mf`. Ili je prevuci na 3D prikaz.
2. PartCraft je čita, popravlja šta može sigurno i prikazuje šta je našao: koliko ima trouglova i tačaka, svaku popravku, i da li se mreža sada **zatvara**.
3. Provjeri **Jedinice u datoteci** i **Gore u datoteci**. STL i OBJ ne kažu svoje jedinice, pa su milimetri pretpostavka; 3MF datoteka kaže svoje. Red **Veličina ovdje** pokazuje veličinu tijela s tvojim izborom, pa je dio koji dođe 25.4 puta premal lako uočiti (bio je u inčima).
4. Ako je dio na ekranu prazan, izaberi {{ui:Open as a body}}. Ako već ima elemente, izaberi **Koristi za** (dodaj u dio, odsijeci iz njega, ili zadrži samo preklapanje), zatim {{ui:Add to this part}}, ili {{ui:New part}} da počneš ispočetka s mrežom.

U istoriji se pojavljuje element **Imported1**. Statusna traka kaže, na primjer: "bracket.stl je čvrsto tijelo: 15200.512 mm³, 14 ravnih površina za skiciranje."

## Šta PartCraft popravlja

| Popravka | Šta znači |
|---|---|
| Spojeni udvojeni uglovi | STL ponavlja svaki ugao za svaki od svojih trouglova; spajaju se u jednu tačku |
| Uklonjeni trouglovi bez površine | Tanki trouglovi čiji uglovi leže na jednoj liniji |
| Uklonjeni dvostruki trouglovi | Trougao upisan dvaput zadržava se jednom; dva okrenuta suprotno (unutrašnji zid) uklanjaju se oba |
| Zatvoreni mali procjepi | Ivice koje se skoro spajaju (unutar hiljaditog dijela veličine dijela) se spajaju |
| Popunjene rupe | Otvor čija je granica ravna popunjava se bez obzira na veličinu; iskrivljen samo kad je mali |
| Trouglovi okrenuti prema van | Trouglovi okrenuti na pogrešnu stranu okreću se da se slože sa susjedima, a cijela površina gleda prema van |

## Kad se mreža ne zatvara

Tijelu je potrebna površina bez otvora. Kad PartCraft ne može zatvoriti jednu, dijalog kaže koliko je otvora i otvorenih ivica ostalo, i nema tijela za dodavanje. Zatvori otvore u programu koji je napravio mrežu, ili je ponovo izvezi kao zatvorenu (vodonepropusnu) mrežu, pa je ponovo otvori.

PartCraft ostavlja otvor netaknut kad bi popunjavanje moglo pogriješiti: veliku iskrivljenu rupu, ili dva otvora u istoj ravni (prstenasta površina koja nedostaje, gdje bi popunjavanje svake granice prekrilo rupu u sredini). Ivica koju dijeli više od dva trougla se također prijavljuje: takva površina nema jednu jasnu unutrašnjost.

## Skiciranje na ravnim površinama

Ravna područja od mnogo trouglova spajaju se u po jednu **ravnu površinu**, pa skica može sjesti na njih: klikni površinu i izaberi {{ui:Sketch on this face}}. Površina koja se kasnije odsijeca ili joj se dodaje ostaje površina. Okrugla područja (rupa, zaobljenje) ostaju trouglovi: nisu površine koje možeš izabrati, a prikaz crta njihovu konturu iz ugla između trouglova.

## Izmjena kasnije

Izaberi **Imported1** da vidiš datoteku iz koje dolazi, koliko trouglova ima i šta je popravljeno. **Jedinice u datoteci**, **Gore u datoteci** i **Koristi za** mogu se tamo promijeniti; svaka izmjena je jedan korak poništavanja.

## Gdje se čuva

Popravljena mreža se čuva **unutar** datoteke `.partcraft.json`, pa ti ne treba ponovo datoteka mreže. Datoteka dijela s tijelom mreže je verzija 5: stariji PartCraft je odbija po verziji. Mreža od 200,000 trouglova dodaje oko 1.2 MB.

## Ograničenja

- Najviše 3 miliona trouglova i 200 MB u jednoj datoteci.
- Tijelo napravljeno od mreže gradi mrežno jezgro. Kad je tačno jezgro uključeno (samo programeri), to se kaže i tijelo se ne gradi.
- OBJ materijali, koordinate teksture i slobodne krive se izostavljaju; 3MF boje, materijali i potporni objekti se izostavljaju (dijalog kaže koliko je objekata preskočeno).
- Tijelo je onoliko fino koliko i mreža: grub STL daje grube okrugle površine. Rupe koje bušiš u njemu su onoliko okrugle koliko i tvoji sopstveni elementi.
