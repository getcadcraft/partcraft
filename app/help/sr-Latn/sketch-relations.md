---
title: Relacije i kote skice
summary: Svaka relacija i kota koju skica PartCraft-a ima, šta izabrati za svaku, njen simbol i ponašanje pri rešavanju.
keywords: relacije, ograničenja, poklapanje, horizontalno, vertikalno, paralelno, normalno, tangenta, jednako, koncentrično, središte, fiksiranje, rastojanje, horizontalno rastojanje, vertikalno rastojanje, poluprečnik, prečnik, ugao, simboli, glifovi
from: 9831e7be
---

Relacije fiksiraju kako geometrija stoji u odnosu na drugu geometriju. Kote fiksiraju veličine. Da dodaš relaciju, izaberi stavke alatom Izbor ({{key:S}}) i izaberi njeno dugme u desnom panelu; da dodaš kotu, koristi alat Kota ({{key:D}}) ili dugmad za kote u desnom panelu. Kako raditi sa njima: [Potpuno definiši skicu](topic:relations-dimensions).

„Kriva“ u nastavku znači krug ili luk. Koordinatni početak se računa kao tačka.

## Relacije

| Dugme | Simbol | Izaberi | Efekat |
|---|---|---|---|
| {{ui:• Poklapanje}} | • (prikazuje se samo kad je izabrano ili kad ima problema) | Dve tačke | Tačke se spajaju |
| {{ui:• Poklapanje}} | • | Tačka i linija | Tačka leži na liniji (ili na njenom produžetku) |
| {{ui:• Poklapanje}} | • | Tačka i kriva | Tačka leži na krugu ili luku |
| {{ui:H Horizontalno}} | H | Linija ili dve tačke | Linija je horizontalna, ili su dve tačke na istoj visini |
| {{ui:V Vertikalno}} | V | Linija ili dve tačke | Linija je uspravna, ili su tačke jedna iznad druge |
| {{ui:∥ Paralelno}} | ∥ | Dve linije | Linije idu istim smerom |
| {{ui:⊥ Normalno}} | ⊥ | Dve linije | Linije se sastaju pod pravim uglom |
| {{ui:T Tangenta}} | T | Linija i kriva | Linija dodiruje krivu bez preseka |
| {{ui:T Tangenta}} | T | Dve krive | Dodiruju se, spolja ili iznutra, kako su nacrtane |
| {{ui:T Tangenta}} | T | Splajn i linija, luk ili splajn koji dodiruje jedan od njegovih krajeva | Splajn izlazi iz tog kraja u smeru druge krive |
| {{ui:= Jednako}} | = | Dve linije | Ista dužina |
| {{ui:= Jednako}} | = | Dve krive | Isti poluprečnik |
| {{ui:◎ Koncentrično}} | ◎ | Dve krive | Isti centar |
| {{ui:◎ Koncentrično}} | ◎ | Tačka i kriva | Tačka je u centru krive |
| {{ui:M Središte}} | M | Tačka i linija | Tačka je na sredini linije |
| {{ui:↔ Simetrično}} | ↔ | Dve tačke i linija | Tačke su zrcalne slike u odnosu na liniju (Simetrija ih dodaje) |
| {{ui:⚓ Fiksiraj}} | ⚓ | Tačka, linija, kriva ili splajn | Drži je tačno tamo gde je sada (splajn: njegove tačke) |

Linije ovde uključuju osne linije. Crtanje dodaje neke relacije umesto tebe: hvatanje za tačku je čini poklopljenom, hvatanje za krivu stavlja tačku na nju, skoro horizontalne ili uspravne linije dobijaju H ili V, a pravougaonik dolazi sa svoja četiri ugla spojena, dva H i dva V.

**Fiksiraj** je brz način da nešto prestane da se pomera, ali tada deo ne može da prati promenu kote na drugom mestu. Radije koristi kote u odnosu na koordinatni početak.

## Kote

| Dugme | Izaberi | Meri | Prikazano kao |
|---|---|---|---|
| {{ui:Rastojanje}} | Linija | Njenu dužinu | Rastojanje 40 |
| {{ui:Rastojanje}} | Dve tačke | Pravo rastojanje između njih | Rastojanje 40 |
| {{ui:Rastojanje}} | Tačka i linija | Rastojanje od tačke do linije, normalno na nju | Rastojanje 40 |
| {{ui:Rastojanje}} | Dve paralelne linije | Razmak između njih | Rastojanje 40 |
| {{ui:Horizontalno rastojanje}} | Dve tačke ili linija | Samo rastojanje levo-desno | Horizontalno rastojanje 40 |
| {{ui:Vertikalno rastojanje}} | Dve tačke ili linija | Samo rastojanje gore-dole | Vertikalno rastojanje 40 |
| {{ui:Poluprečnik}} | Krug ili luk | Njegov poluprečnik | Poluprečnik R10 |
| {{ui:Prečnik}} | Krug ili luk | Njegov prečnik | Prečnik ⌀20 |
| {{ui:Ugao}} | Dve linije koje nisu paralelne | Ugao između njih, od 0 do 180 stepeni | Ugao 30° |

Alatom Kota, PartCraft bira vrstu prema onome što klikneš i gde postaviš broj:

| Klikneš | Dobijaš |
|---|---|
| Jednu liniju | Njenu dužinu; za kosu liniju, horizontalnu ako je broj iznad ili ispod nje, vertikalnu ako je sa strane |
| Jedan krug | Prečnik |
| Jedan luk | Poluprečnik |
| Dve tačke | Rastojanje; horizontalno ili vertikalno kao za kosu liniju |
| Tačku i liniju | Rastojanje od tačke do linije |
| Dve linije | Ugao, ili rastojanje ako su paralelne |
| Tačku i krug | Ništa: „Te stavke ne mogu zajedno da se kotiraju.“ Umesto toga kotiraj do centralne tačke kruga |

**Pomak** (prikazan kao rastojanje) pravi alat Pomak: održava kopiranu liniju paralelno na tom rastojanju, ili kopirani luk ili krug koncentrično, sa poluprečnikom većim ili manjim za toliko. Ostali delovi istog pomaka nose relaciju **O** i prate jednu kotu Pomak. Vidi [Splajnovi, skraćivanje, pomak i drugi alati za skicu](topic:sketch-tools).

Vrednosti kota su milimetri (ili stepeni), nikad negativne. Poluprečnik i prečnik moraju biti veći od nule. Vrednost 0 je dozvoljena za rastojanja: dve tačke na rastojanju 0 se poklapaju.

## Kako se ponaša rešavanje

- **Najmanje pomeranja.** Kad se vrednost promeni, rešavač pomera geometriju što je manje moguće. Linija čija se dužina menja raste podjednako na oba kraja ako ih ništa ne drži.
- **Bez preokretanja.** Rastojanja od tačke do linije, horizontalna i vertikalna rastojanja, uglovi i tangentnost pamte sa koje su strane napravljeni. Promena vrednosti nikad ne preokreće geometriju na drugu stranu.
- **Sukobi ostavljaju stvari na miru.** Ako se relacije međusobno protive, skica ostaje tačno kakva je bila, a sukobljene relacije postaju crvene.
- **Suvišne relacije** (koje već slede iz drugih) navedene su u statusnoj traci („je već implicirana. Izbriši je.“), a funkcija se i dalje gradi, uz upozorenje.
- **Tangentni spojevi.** Tamo gde se luk zaobljenja sastaje sa linijama u zajedničkoj krajnjoj tački, tangentnost se rešava u obliku koji tu ostaje dobro definisan, pa zaobljenja skice ne izgledaju kao previše definisana.

## Još nije dostupno

Kolinearne, koradijalne i presečne relacije; tačka na splajnu; vođene (referentne) kote; ordinatne kote i kote dužine luka; jednačine između kota. Za kolinearne linije koristi Paralelno i rastojanje 0.
