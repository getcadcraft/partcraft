---
title: Kopiranje, lepljenje i dupliranje
summary: Kopiraj geometriju skice, elemente i delove sklopa; nalepi tamo gde klikneš ili na istom mestu; dupliraj u jednom koraku; i šta ide sa kopijom a šta ne.
keywords: kopiraj, nalepi, iseci, dupliraj, međuspremnik, nalepi na mestu, izaberi sve, poništi izbor, izbriši, ctrl c, ctrl v, ctrl d, instanca, komponenta, kopiraj skicu, kopiraj element, kopiraj deo
from: 611307d7
---

Grupa {{ui:Uredi}} na traci sa alatima sadrži {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}} i meni {{ui:Više}} sa {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Poništi izbor}}, svaki sa svojim tasterom. Šta kopiraju zavisi od toga gde si: geometrija u otvorenoj skici, element u istoriji, ili deo u sklopu.

Stavka prikazana sivo ne može da radi sada. Pređi mišem preko nje: njen opis kaže zašto, na primer „Prvo izaberi geometriju skice“ ili „Međuspremnik sadrži Sketch2 i Extrude2: elementi se lepe u istoriju, pa prvo izađi iz skice“.

| Radnja | Taster | U skici | U istoriji | U sklopu |
|---|---|---|---|---|
| Kopiraj | {{key:Mod+C}} | Izabrane tačke i krive | Izabrana skica, izvlačenje, rotiranje ili rupa (sa svojom skicom) | Izabrani deo |
| Iseci | {{key:Mod+X}} | Kopiraj, pa izbriši | Kopiraj, pa izbriši element | Kopiraj, pa ukloni deo |
| Nalepi | {{key:Mod+V}} | Kopija prati pokazivač; klikni gde ide | Dodaje kopiju na kraj istorije | Nova kopija pored ostalih delova |
| Nalepi na mestu | {{key:Mod+Shift+V}} | Na istim koordinatama | Isto kao Nalepi | Na istom mestu kao kopirani deo |
| Dupliraj | {{key:Mod+D}} | Kopiraj i pomeri u jednom koraku; međuspremnik ostaje netaknut | Druga kopija odmah posle tebe | Druga kopija pored ostalih delova |
| Izbriši | {{key:Delete}} | Izbor | Element (pita ako ga drugi koriste) | Deo ili spoj |
| Izaberi sve | {{key:Mod+A}} | Sve u skici | Nije dostupno | Nije dostupno |
| Poništi izbor | {{key:Esc}} | Briše izbor | Briše izbor i izbor površi | Briše izbor |

Svako lepljenje, dupliranje i sečenje je jedan korak u listi za poništavanje: {{key:Mod+Z}} ga vraća, {{key:Mod+Y}} ga vraća ponovo.

## U skici

1. Izaberi šta da kopiraš: klikni, {{key:Shift}}+klik za više, prevuci prozor, ili pritisni {{key:Mod+A}} za sve.
2. Pritisni {{key:Mod+C}} ili izaberi {{ui:Kopiraj}}. Statusna traka kaže šta je kopirano.
3. Pritisni {{key:Mod+V}} ili izaberi {{ui:Nalepi}}. Isprekidana kopija prati pokazivač, uhvaćena za sredinu. Hvata se za tačke: stavi centar kopiranog kruga na tačku tako što klikneš tu tačku.
4. Klikni gde ide. Nalepljena geometrija ostaje izabrana, pa je možeš odmah prevući ili dodati joj relacije. {{key:Esc}} otkazuje lepljenje.

Šta ide sa kopijom:

- Kopirana linija, krug ili luk donosi svoje krajnje tačke i centar.
- Relacije i kote **između kopiranih stavki** idu sa njom: kopiran pravougaonik je i dalje pravougaonik, sa svojim dimenzijama.
- Relacije **prema geometriji koju nisi kopirao**, i prema početnoj tački, otpadaju. Statusna traka ih broji: „2 relacije prema geometriji van kopije neće ići sa njom“. Tako je nalepljena kopija slobodna za pomeranje dok je ne vežeš relacijama ili kotama.
- Fiksna tačka ostaje fiksna, na svom novom položaju.

{{ui:Nalepi na mestu}} stavlja kopiju tačno na originalne koordinate, u ovoj skici ili u drugoj: zgodno za prenos profila iz jedne skice u drugu. U istoj skici kopija leži preko originala; prevuci je.

{{ui:Dupliraj}} ({{key:Mod+D}}) kopira izbor i odmah počinje da ga postavlja, bez diranja onoga što je u međuspremniku.

:::tip
Da ponoviš središte rupe ili prorez nekoliko puta, kopiraj ga jednom i nalepi više puta: svako {{key:Mod+V}} započinje novu kopiju koja prati pokazivač.
:::

## U istoriji

1. Klikni skicu, izvlačenje, rotiranje ili rupu u istoriji.
2. {{key:Mod+C}} je kopira. Element zasnovan na skici kopira se zajedno sa svojom skicom.
3. {{key:Mod+V}} dodaje kopiju na kraj istorije (na traci za vraćanje kad si se vratio), sa novim imenima kao Sketch3 i Extrude2.

Kopija stoji na istoj ravni ili površi kao original, pa se gradi preko njega i deo izgleda isto. Izaberi novu skicu i promeni njenu ravan u desnom panelu, ili je otvori i prevuci ili ponovo kotiraj profil, da pomeriš kopiju.

- Nalepi u **drugi deo**: otvori taj deo i pritisni {{key:Mod+V}}. Kad skica kopije bila na površi koju taj deo nema, ide na ravan Front, a statusna traka to kaže.
- {{ui:Dupliraj}} radi kopiranje i lepljenje u jednom koraku, unutar istog dela.
- {{ui:Iseci}} kopira element, pa ga briše (pitajući prvo ako ga drugi elementi koriste).

Obrasci, simetrije, zaobljenja, obaranja, ljuske i uvezena čvrsta tela ne mogu da se kopiraju: zavise od ivica, površi ili elemenata izabranih u ovom delu. Kopiraj skicu ili element na kojem su zasnovani, ili ih umnoži sa {{ui:Linearno}} ili {{ui:Kružno}}.

## U sklopu

1. Klikni deo u prikazu ili na listi levo.
2. Izaberi {{ui:Dupliraj}} ({{key:Mod+D}}), ili {{key:Mod+C}} pa {{key:Mod+V}}.

Nova kopija je **isti deo**: izmeni jedan i svaka kopija se menja. Pojavljuje se 20 mm desno od svega što je već u sklopu, okrenuta isto kao kopija, i tu ostaje dok je spoj ne postavi. {{ui:Nalepi na mestu}} ({{key:Mod+Shift+V}}) stavlja je tačno gde je kopirani deo; spoji je da je pomeriš (pomak kliznog spoja je gura duž ose).

Lepljenje dela kopiranog iz drugog sklopa donosi deo sa sobom, isto kao {{ui:Umetni}} iz njegovog fajla. {{ui:Dodaj kopiju}} u grupi Sklop radi isto što i {{ui:Dupliraj}}, i radi bez ičega izabranog (kopira poslednji deo).

## Međuspremnik

- To je PartCraft-ov sopstveni međuspremnik, a ne međuspremnik računara: ne možeš da nalepiš PartCraft geometriju u drugi program, ni tekst u prikaze PartCraft-a.
- Čuva se u ovom pregledaču, pa drugi PartCraft tab može da nalepi ono što si kopirao. Čita se i proverava kao otvoren fajl; oštećeno ili iz druge verzije se odbija.
- Deo sa velikim uvezenim STEP fajlom možda je prevelik da pregledač ga zadrži: tada se lepi samo u ovom tabu.
- U polju za broj ili u pretrazi pomoći, {{key:Mod+C}} i {{key:Mod+V}} kopiraju i lepe tekst kao obično.

Na listu crteža kopiranje i lepljenje još nisu dostupni; {{ui:Izbriši}} i {{ui:Poništi izbor}} rade na izabranom simbolu. Vidi [Šta još nije napravljeno](topic:not-built-yet).
