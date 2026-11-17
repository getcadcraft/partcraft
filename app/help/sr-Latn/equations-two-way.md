---
title: Jednačine u oba smera
summary: Promenite parametar i deo prati; upišite novu veličinu u upravljanu brojku i PartCraft izračunava parametar iza nje, pitajući koji se menja kada se može promeniti više njih.
keywords: jednačine, rešavanje unazad, upravljana dimenzija, dvosmerno, obrnuto, traženje cilja, parametri, povezane vrednosti, koji parametar
from: 82dc0269
---

Jednačina kao **Extrude1 dubina = thick + extra** radi u oba smera.

## Unapred: promena parametra

Na kartici {{ui:Parametri}} promenite `thick` sa 20 na 30. Dubina Extrude1 postaje 30 + extra, i deo se ponovo gradi.

## Unazad: promena upravljane brojke

1. Kliknite „Extrude1“ u istoriji. Njeno polje **Dubina (mm)** pokazuje **ƒ**: jednačina ga upravlja.
2. Upišite veličinu koju želite, na primer `40`, i pritisnite {{key:Enter}}.

PartCraft rešava parametar iza jednačine, kroz onoliko koraka koliko treba (`depth = hub_h`, `hub_h = disc_t + 50`: upisivanje visine menja `disc_t`). Statusna traka kaže šta je promenjeno, na primer da je extra promenjen sa 5 na 15.

Kada dva ili više parametara upravljaju brojem, polje pita **Koji parametar treba da se promeni?** i izlistava ih. Kliknite jedan; ostali zadržavaju svoje vrednosti. {{ui:Otkaži}} ne menja ništa.

Isto važi i u skici: dvaput kliknite upravljanu dimenziju, upišite vrednost, pritisnite {{key:Enter}}. Radi i u koloni **Vrednost** tabele parametara, za parametar koji je sam izraz.

## Kada ne može

- Broj koji mora biti ceo (broj ponavljanja u obrascu) ili ostati u opsegu (ugao do 360°) odbija se pre nego što išta promeni.
- Jednačina samo sa fiksnim brojevima (`=40`) nema parametar za promenu: broj koji upišete zamenjuje je.
- Ako nijedna vrednost parametra ne daje veličinu koju ste upisali, statusna traka to kaže i ništa se ne menja.
- Skica koja se ne može rešiti sa novom vrednošću zadržava svoje prethodne vrednosti, a statusna traka imenuje skicu.

Svaka promena, u oba smera, je jedan korak za {{key:Mod+Z}} i {{key:Mod+Y}}.
