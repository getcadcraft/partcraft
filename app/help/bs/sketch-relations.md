---
title: Relacije i kote skice
summary: Svaka relacija i kota koju skica u PartCraft-u može imati, šta odabrati za svaku, njen simbol i kako se ponaša pri rješavanju.
keywords: relacije, ograničenja, poklapanje, horizontalno, vertikalno, paralelno, normalno, tangenta, jednako, koncentrično, središnja tačka, fiksiraj, udaljenost, horizontalna udaljenost, vertikalna udaljenost, poluprečnik, prečnik, ugao, simboli, glifovi
from: 9831e7be
---

Relacije fiksiraju kako geometrija stoji u odnosu na drugu geometriju. Kote fiksiraju veličine. Da dodate relaciju, odaberite stavke alatom Odaberi ({{key:S}}) i kliknite njeno dugme u desnom panelu; da dodate kotu, koristite alat {{ui:Kota}} ({{key:D}}) ili dugmad za kote u desnom panelu. Kako raditi s njima: [Potpuno definiši skicu](topic:relations-dimensions).

Pod pojmom „kriva“ ispod se podrazumijeva krug ili luk. Početak koordinata se računa kao tačka.

## Relacije

| Dugme | Simbol | Odaberi | Efekat |
|---|---|---|---|
| {{ui:• Poklapanje}} | • (prikazuje se samo kad je odabrano ili kad ima problema) | Dvije tačke | Tačke se spajaju |
| {{ui:• Poklapanje}} | • | Tačka i linija | Tačka leži na liniji (ili njenom produžetku) |
| {{ui:• Poklapanje}} | • | Tačka i kriva | Tačka leži na krugu ili luku |
| {{ui:H Horizontalno}} | H | Linija, ili dvije tačke | Linija je vodoravna, ili su dvije tačke na istoj visini |
| {{ui:V Vertikalno}} | V | Linija, ili dvije tačke | Linija je uspravna, ili su tačke jedna iznad druge |
| {{ui:∥ Paralelno}} | ∥ | Dvije linije | Linije idu istim pravcem |
| {{ui:⊥ Normalno}} | ⊥ | Dvije linije | Linije se sastaju pod pravim uglom |
| {{ui:T Tangenta}} | T | Linija i kriva | Linija dodiruje krivu bez presijecanja |
| {{ui:T Tangenta}} | T | Dvije krive | Dodiruju se, spolja ili iznutra, kako su nacrtane |
| {{ui:T Tangenta}} | T | Splajn i linija, luk ili splajn koji se sastaje s jednim od njegovih krajeva | Splajn izlazi iz tog kraja u smjeru druge krive |
| {{ui:= Jednako}} | = | Dvije linije | Ista dužina |
| {{ui:= Jednako}} | = | Dvije krive | Isti poluprečnik |
| {{ui:◎ Koncentrično}} | ◎ | Dvije krive | Isti centar |
| {{ui:◎ Koncentrično}} | ◎ | Tačka i kriva | Tačka je u centru krive |
| {{ui:M Središnja tačka}} | M | Tačka i linija | Tačka je na sredini linije |
| {{ui:↔ Simetrično}} | ↔ | Dvije tačke i linija | Tačke su zrcalne slike u odnosu na liniju ({{ui:Zrcaljenje}} dodaje ove) |
| {{ui:⚓ Fiksiraj}} | ⚓ | Tačka, linija, kriva ili splajn | Drži je tačno tamo gdje je sada (splajn: njegove tačke) |

Linije ovdje uključuju i osne linije. Crtanje automatski dodaje neke relacije: hvatanje za tačku čini je poklopljenom, hvatanje za krivu postavlja tačku na nju, gotovo vodoravne ili uspravne linije dobijaju H ili V, a pravougaonik dolazi sa spojena sva četiri ugla, dva H i dva V.

**Fiksiraj** brzo zaustavlja pomjeranje nečega, ali dio tada ne može pratiti promjenu kote na drugom mjestu. Radije koristite kote u odnosu na početak koordinata.

## Kote

| Dugme | Odaberi | Mjeri | Prikazuje se kao |
|---|---|---|---|
| {{ui:Udaljenost}} | Linija | Njenu dužinu | Udaljenost 40 |
| {{ui:Udaljenost}} | Dvije tačke | Pravu udaljenost među njima | Udaljenost 40 |
| {{ui:Udaljenost}} | Tačka i linija | Udaljenost od tačke do linije, okomito na nju | Udaljenost 40 |
| {{ui:Udaljenost}} | Dvije paralelne linije | Razmak među njima | Udaljenost 40 |
| {{ui:Horizontalna udaljenost}} | Dvije tačke, ili linija | Samo udaljenost lijevo-desno | Horizontalna udaljenost 40 |
| {{ui:Vertikalna udaljenost}} | Dvije tačke, ili linija | Samo udaljenost gore-dolje | Vertikalna udaljenost 40 |
| {{ui:Poluprečnik}} | Krug ili luk | Njegov poluprečnik | Poluprečnik R10 |
| {{ui:Prečnik}} | Krug ili luk | Njegov prečnik | Prečnik ⌀20 |
| {{ui:Ugao}} | Dvije linije koje nisu paralelne | Ugao među njima, 0 do 180 stepeni | Ugao 30° |

Alatom {{ui:Kota}}, PartCraft bira vrstu prema onome što kliknete i gdje postavite broj:

| Kliknete | Dobijate |
|---|---|
| Jednu liniju | Njenu dužinu; za kosu liniju, horizontalnu ako broj ide iznad ili ispod nje, vertikalnu ako je sa strane |
| Jedan krug | Prečnik |
| Jedan luk | Poluprečnik |
| Dvije tačke | Udaljenost; horizontalna ili vertikalna kao za kosu liniju |
| Tačku i liniju | Udaljenost od tačke do linije |
| Dvije linije | Ugao, ili udaljenost ako su paralelne |
| Tačku i krug | Ništa: "Te stavke se ne mogu zajedno kotirati." Umjesto toga kotirajte do centralne tačke kruga |

**Pomak** (prikazan kao udaljenost) pravi alat {{ui:Pomak}}: održava kopiranu liniju paralelnom na toj udaljenosti, ili kopirani luk ili krug koncentrično, s poluprečnikom za toliko većim ili manjim. Ostali dijelovi istog pomaka nose relaciju **O** i prate jednu kotu pomaka. Pogledajte [Splajnovi, odsijecanje, pomak i drugi alati za skicu](topic:sketch-tools).

Vrijednosti kota su u milimetrima (ili stepenima), nikad negativne. Poluprečnik i prečnik moraju biti veći od nule. Vrijednost 0 dozvoljena je za udaljenosti: dvije tačke na udaljenosti 0 poklapaju se.

## Kako se rješavanje ponaša

- **Najmanje pomjeranja.** Kad se vrijednost promijeni, rješavač pomjera geometriju što je manje moguće. Linija čija se dužina mijenja raste jednako na oba kraja, ako ništa ne drži nijedan kraj.
- **Bez okretanja.** Udaljenosti od tačke do linije, horizontalne i vertikalne udaljenosti, uglovi i tangentnost pamte s koje strane su napravljeni. Promjena vrijednosti nikad ne okreće geometriju na drugu stranu.
- **Sukobi ostavljaju stvari na miru.** Ako se relacije međusobno kose, skica ostaje tačno kakva je bila, a sukobljene relacije postaju crvene.
- **Suvišne relacije** (koje već proizilaze iz drugih) navode se u statusnoj traci ("je već implicirana. Izbrišite je.") i element se i dalje gradi, uz upozorenje.
- **Tangentni spojevi.** Tamo gdje se luk zaobljenja sastaje sa svojim linijama u zajedničkoj krajnjoj tački, tangentnost se rješava u obliku koji tu ostaje dobro definisan, pa zaobljenja u skici ne izgledaju kao prekomjerno definisana.

## Još nije dostupno

Kolinearne, koradijalne i probodne relacije; tačka na splajnu; upravljane (referentne) kote; koordinatne kote i kote dužine luka; jednačine među kotama. Za kolinearne linije koristite Paralelno i udaljenost 0.
