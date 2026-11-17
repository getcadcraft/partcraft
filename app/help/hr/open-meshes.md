---
title: Otvaranje STL, OBJ ili 3MF kao punog tijela
summary: Pretvorite mrežu iz skenera, stranice za 3D ispis ili drugog programa u puno tijelo koje možete rezati, dodavati i na koje možete skicirati; što PartCraft popravlja na putu, a što ne može.
keywords: stl, obj, 3mf, mreža, mreža u puno tijelo, pretvori mrežu, skeniranje, vodonepropusna, popravak, rupe, razmaci, jedinice, gore, uvezeno tijelo, ravne plohe
from: 7b948471
---

PartCraft otvara STL, OBJ i 3MF mreže kao **puna tijela**. Tijelo radi kao svako drugo puno tijelo: možete ga rezati, dodavati mu, bušiti, ponavljati uzorak, koristiti ga u sklopu ili za obradu te skicirati na njegove ravne plohe. Nema vlastitu povijest: mreža je samo trokuti, pa se njezine veličine ne mogu mijenjati, samo dodavati ili od nje rezati.

## Otvaranje mreže

1. Odaberite {{ui:Open}} ili pritisnite {{key:Mod+O}} i odaberite datoteku `.stl`, `.obj` ili `.3mf`. Ili je ispustite u 3D prikaz.
2. PartCraft je čita, popravlja što sigurno može i pokazuje što je našao: koliko trokuta i točaka, svaku popravku i je li mreža sada **zatvorena**.
3. Provjerite **Jedinice u datoteci** i **Gore u datoteci**. STL i OBJ ne navode svoje jedinice, pa su milimetri pretpostavka; 3MF datoteka kaže svoje. Redak **Veličina ovdje** pokazuje veličinu tijela uz vaš izbor, pa je dio koji dođe 25.4 puta premalen lako uočiti (bio je u inčima).
4. Ako je dio na ekranu prazan, odaberite {{ui:Open as a body}}. Ako već ima značajke, odaberite **Upotrijebi za** (dodaj dijelu, izreži iz njega ili zadrži samo preklapanje), zatim {{ui:Add to this part}}, ili {{ui:New part}} da počnete ispočetka s mrežom.

U povijesti se pojavljuje značajka **Imported1**. Statusna traka kaže, na primjer: „bracket.stl je puno tijelo: 15200.512 mm³, 14 ravnih ploha za skiciranje.“

## Što PartCraft popravlja

| Popravak | Što znači |
|---|---|
| Dvostruki kutovi spojeni | STL ponavlja svaki kut za svaki svoj trokut; spajaju se u jednu točku |
| Trokuti bez površine uklonjeni | Sitnice čiji kutovi leže na istoj liniji |
| Dvostruki trokuti uklonjeni | Trokut zapisan dvaput zadržava se jednom; dva okrenuta u suprotne strane (unutarnja stijenka) uklanjaju se oba |
| Male praznine zatvorene | Bridovi koji se gotovo spajaju (unutar tisućinke veličine dijela) se spajaju |
| Rupe ispunjene | Otvor čiji rub leži ravno popuni se bez obzira na veličinu; iskrivljen samo kad je mali |
| Trokuti okrenuti prema van | Trokuti okrenuti krivo okreću se da se slože sa susjedima, a cijela ploha okreće se prema van |

## Kad se mreža ne zatvara

Puno tijelo treba površinu bez otvora. Kad PartCraft ne može zatvoriti jednu, dijalog kaže koliko je otvora i otvorenih bridova ostalo i nema tijela za dodavanje. Zatvorite otvore u programu koji je napravio mrežu ili je ponovno izvezite kao zatvorenu (vodonepropusnu) mrežu, pa je otvorite ponovno.

PartCraft ostavlja otvor netaknutim kad bi ga popunjavanje moglo pogrešno pogoditi: velika iskrivljena rupa ili dva otvora u istoj ravnini (nedostaje prstenasta ploha, pa bi popunjavanje svakog ruba pokrilo rupu u sredini). Brid koji dijele više od dva trokuta također se prijavljuje: takva površina nema jasnu unutrašnjost.

## Skiciranje na ravnim plohama

Ravna područja sastavljena od mnogo trokuta spajaju se u jednu **ravnu plohu** svako, pa se na njih može staviti skica: kliknite plohu i odaberite {{ui:Sketch on this face}}. Ploha koja se kasnije reže ili na nju se dodaje ostaje ploha. Okrugla područja (rupa, zaobljenje) ostaju trokuti: nisu plohe koje možete odabrati, a prikaz crta njihov obris iz kuta između trokuta.

## Naknadna promjena

Odaberite **Imported1** da vidite datoteku iz koje dolazi, koliko ima trokuta i što je popravljeno. **Jedinice u datoteci**, **Gore u datoteci** i **Upotrijebi za** mogu se ovdje promijeniti; svaka promjena je jedan korak poništavanja.

## Gdje se čuva

Popravljena mreža pohranjena je **unutar** datoteke `.partcraft.json`, pa vam datoteka mreže nije potrebna ponovno. Datoteka dijela s mrežnim tijelom je verzija 5: stariji PartCraft je odbija po verziji. Mreža s 200.000 trokuta dodaje oko 1,2 MB.

## Ograničenja

- Najviše 3 milijuna trokuta i 200 MB u jednoj datoteci.
- Tijelo napravljeno od mreže izrađuje jezgra mreže. S uključenom egzaktnom jezgrom (samo za razvojne programere) to se kaže i tijelo se ne izrađuje.
- OBJ materijali, koordinate teksture i slobodne krivulje se izostavljaju; 3MF boje, materijali i potporni objekti se izostavljaju (dijalog kaže koliko je objekata preskočeno).
- Tijelo je onoliko fino koliko je mreža: gruba STL mreža daje grube okrugle plohe. Rupe koje bušite u njoj jednako su okrugle kao i vaše vlastite značajke.
