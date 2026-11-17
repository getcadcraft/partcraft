---
title: Jednačine u oba smjera
summary: Promijenite parametar i dio slijedi; upišite novu veličinu u zavisnu brojku i PartCraft izračuna parametar iza nje, pitajući koji kada se više njih može promijeniti.
keywords: jednačine, rješavanje unazad, zavisna dimenzija, dvosmjerno, obrnuto, traženje cilja, parametri, povezane vrijednosti, koji parametar
from: 82dc0269
---

Jednačina poput **Extrude1 depth = thick + extra** radi u oba smjera.

## Naprijed: promijenite parametar

Na kartici {{ui:Parametri}} promijenite `thick` sa 20 na 30. Dubina Extrude1 postaje 30 + extra, i dio se ponovo gradi.

## Unazad: promijenite zavisnu brojku

1. Kliknite "Extrude1" u historiji. Njeno polje **Dubina (mm)** pokazuje **ƒ**: jednačina ga pokreće.
2. Upišite veličinu koju želite, na primjer `40`, i pritisnite {{key:Enter}}.

PartCraft rješava parametar iza jednačine, kroz onoliko koraka koliko treba (`depth = hub_h`, `hub_h = disc_t + 50`: upisivanje visine mijenja `disc_t`). Statusna traka kaže šta je promijenjeno, na primjer da je extra promijenjen sa 5 na 15.

Kada dva ili više parametara pokreću broj, okvir pita **Koji parametar treba promijeniti?** i navodi ih. Kliknite jedan; ostali zadržavaju svoje vrijednosti. {{ui:Otkaži}} ne mijenja ništa.

Isto radi u skici: dvaput kliknite zavisnu dimenziju, upišite vrijednost i pritisnite {{key:Enter}}. Radi i u koloni **Vrijednost** tabele parametara, za parametar koji je sam izraz.

## Kada ne može

- Broj koji mora biti cijeli (broj ponavljanja uzorka) ili ostati u opsegu (ugao do 360°) odbija se prije nego što se bilo šta promijeni.
- Jednačina samo sa fiksnim brojevima (`=40`) nema parametar za promjenu: broj koji upišete zamjenjuje je.
- Ako nijedna vrijednost parametra ne daje veličinu koju ste upisali, statusna traka to kaže i ništa se ne mijenja.
- Skica koja se ne može riješiti sa novom vrijednošću zadržava svoje prethodne vrijednosti, a statusna traka imenuje skicu.

Svaka promjena, bilo kojim smjerom, je jedan korak za {{key:Mod+Z}} i {{key:Mod+Y}}.
