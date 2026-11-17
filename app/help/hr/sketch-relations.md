---
title: Ograničenja i kote skice
summary: Svako ograničenje i kota koje skica u programu PartCraft može imati, što odabrati za svako, njegov simbol i kako se ponaša pri rješavanju.
keywords: ograničenja, relacije, podudarno, horizontalno, vertikalno, paralelno, okomito, tangentno, jednako, koncentrično, polovište, učvrsti, udaljenost, horizontalna udaljenost, vertikalna udaljenost, radijus, promjer, kut, simboli, glifovi
from: 9831e7be
---

Ograničenja određuju kako geometrija stoji u odnosu na drugu geometriju. Kote određuju veličine. Za dodavanje ograničenja odaberite elemente alatom Odabir ({{key:S}}) i odaberite njegov gumb na desnoj ploči; za dodavanje kote koristite alat Kota ({{key:D}}) ili gumbe kota na desnoj ploči. Kako raditi s njima: [Potpuno definiranje skice](topic:relations-dimensions).

„Krivulja“ u nastavku znači kružnicu ili luk. Ishodište se računa kao točka.

## Ograničenja

| Gumb | Simbol | Odaberite | Učinak |
|---|---|---|---|
| {{ui:• Podudarno}} | • (prikazan samo kad je odabran ili u problemu) | Dvije točke | Točke se sastaju |
| {{ui:• Podudarno}} | • | Točku i liniju | Točka leži na liniji (ili njezinu produžetku) |
| {{ui:• Podudarno}} | • | Točku i krivulju | Točka leži na kružnici ili luku |
| {{ui:H Horizontalno}} | H | Liniju ili dvije točke | Linija je vodoravna, ili su dvije točke na istoj visini |
| {{ui:V Vertikalno}} | V | Liniju ili dvije točke | Linija je uspravna, ili su točke jedna iznad druge |
| {{ui:∥ Paralelno}} | ∥ | Dvije linije | Linije idu istim smjerom |
| {{ui:⊥ Okomito}} | ⊥ | Dvije linije | Linije se sastaju pod pravim kutom |
| {{ui:T Tangentno}} | T | Liniju i krivulju | Linija dodiruje krivulju bez presijecanja |
| {{ui:T Tangentno}} | T | Dvije krivulje | Dodiruju se, izvana ili iznutra, kako su nacrtane |
| {{ui:T Tangentno}} | T | Spline i liniju, luk ili spline koji se spaja s jednim od njegovih krajeva | Spline izlazi iz tog kraja u smjeru druge krivulje |
| {{ui:= Jednako}} | = | Dvije linije | Jednaka duljina |
| {{ui:= Jednako}} | = | Dvije krivulje | Jednak radijus |
| {{ui:◎ Koncentrično}} | ◎ | Dvije krivulje | Isto središte |
| {{ui:◎ Koncentrično}} | ◎ | Točku i krivulju | Točka je u središtu krivulje |
| {{ui:M Polovište}} | M | Točku i liniju | Točka je na sredini linije |
| {{ui:↔ Simetrično}} | ↔ | Dvije točke i liniju | Točke su zrcalne slike s obzirom na liniju (Zrcali ih dodaje) |
| {{ui:⚓ Učvrsti}} | ⚓ | Točku, liniju, krivulju ili spline | Drži je točno tamo gdje je sada (spline: njegove točke) |

Linije ovdje uključuju i osi. Crtanje dodaje neka ograničenja umjesto vas: hvatanje na točku čini je podudarnom, hvatanje na krivulju stavlja točku na nju, gotovo vodoravne ili uspravne linije dobivaju H ili V, a pravokutnik dolazi sa svoja četiri kuta spojena, dva H i dva V.

**Učvrsti** je brz način da se nešto zaustavi, ali dio tada ne može pratiti promjenu kote negdje drugdje. Radije koristite kote prema ishodištu.

## Kote

| Gumb | Odaberite | Mjeri | Prikazano kao |
|---|---|---|---|
| {{ui:Udaljenost}} | Liniju | Njezinu duljinu | Udaljenost 40 |
| {{ui:Udaljenost}} | Dvije točke | Ravnu udaljenost među njima | Udaljenost 40 |
| {{ui:Udaljenost}} | Točku i liniju | Udaljenost od točke do linije, okomito na nju | Udaljenost 40 |
| {{ui:Udaljenost}} | Dvije paralelne linije | Razmak među njima | Udaljenost 40 |
| {{ui:Horizontalna udaljenost}} | Dvije točke ili liniju | Samo udaljenost lijevo-desno | Horizontalna udaljenost 40 |
| {{ui:Vertikalna udaljenost}} | Dvije točke ili liniju | Samo udaljenost gore-dolje | Vertikalna udaljenost 40 |
| {{ui:Radijus}} | Kružnicu ili luk | Njezin radijus | Radijus R10 |
| {{ui:Promjer}} | Kružnicu ili luk | Njezin promjer | Promjer ⌀20 |
| {{ui:Kut}} | Dvije linije koje nisu paralelne | Kut među njima, 0 do 180 stupnjeva | Kut 30° |

Alatom Kota PartCraft bira vrstu prema onome što kliknete i gdje postavite broj:

| Kliknete | Dobijete |
|---|---|
| Jednu liniju | Njezinu duljinu; za kosu liniju, vodoravnu ako je broj iznad ili ispod nje, okomitu ako je sa strane |
| Jednu kružnicu | Promjer |
| Jedan luk | Radijus |
| Dvije točke | Udaljenost; vodoravnu ili okomitu kao za kosu liniju |
| Točku i liniju | Udaljenost od točke do linije |
| Dvije linije | Kut, ili udaljenost ako su paralelne |
| Točku i kružnicu | Ništa: „Te stavke ne mogu se zajedno dimenzionirati.“ Umjesto toga dimenzionirajte do točke središta kružnice |

**Odmak** (prikazan kao udaljenost) izrađuje alat Odmakni: drži kopiranu liniju paralelnom na toj udaljenosti, ili kopirani luk ili kružnicu koncentrično s radijusom većim ili manjim za tu vrijednost. Ostali dijelovi istog odmaka nose oznaku **O** i prate jednu kotu Odmaka. Vidi [Splineovi, skraćivanje, odmak i ostali alati skice](topic:sketch-tools).

Vrijednosti kota su u milimetrima (ili stupnjevima), nikad negativne. Radijus i promjer moraju biti veći od nule. Vrijednost 0 dopuštena je za udaljenosti: dvije točke na udaljenosti 0 su podudarne.

## Ponašanje rješavanja

- **Najmanje pomicanja.** Kad se vrijednost promijeni, rješavač pomiče geometriju što je manje moguće. Linija čija se duljina mijenja raste jednako na oba kraja ako ništa ne drži nijedan kraj.
- **Bez preokretanja.** Udaljenosti od točke do linije, vodoravne i okomite udaljenosti, kutovi i tangentnost pamte s koje su strane nastali. Promjena vrijednosti nikad ne preokreće geometriju na drugu stranu.
- **Sukobi ostavljaju stvari na miru.** Ako se ograničenja međusobno proturječe, skica ostaje točno kakva je bila, a sukobljena ograničenja postaju crvena.
- **Suvišna ograničenja** (koja su već podrazumijevana drugima) imenuju se u statusnoj traci („je već podrazumijevano. Izbrišite ga.“) i značajka se i dalje izrađuje, uz upozorenje.
- **Tangentni spojevi.** Kad luk zaobljenja susreće svoje linije u zajedničkoj krajnjoj točki, tangentnost se rješava u obliku koji je tamo dobro definiran, pa zaobljenja skice ne izgledaju kao prekomjerno definirana.

## Još nije dostupno

Kolinearna, koradijalna i probadajuća ograničenja; točka na splineu; vođene (referentne) kote; ordinatne kote i kote duljine luka; jednadžbe među kotama. Za kolinearne linije koristite Paralelno i udaljenost 0.
