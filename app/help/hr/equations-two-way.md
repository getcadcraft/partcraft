---
title: Jednadžbe u oba smjera
summary: Promijenite parametar i dio slijedi; upišite novu veličinu u vođeni broj i PartCraft izračunava parametar iza njega, pitajući koji kada se može promijeniti više njih.
keywords: jednadžbe, rješavanje unatrag, vođena kota, dvosmjerno, obrnuto, traženje cilja, parametri, povezane vrijednosti, koji parametar
from: 82dc0269
---

Jednadžba poput **Extrude1 dubina = thick + extra** radi u oba smjera.

## Unaprijed: promijenite parametar

Na kartici {{ui:Parametri}} promijenite `thick` s 20 na 30. Dubina Extrude1 postaje 30 + extra, a dio se ponovno gradi.

## Unatrag: promijenite vođeni broj

1. Kliknite „Extrude1“ u povijesti. Njezin okvir **Dubina (mm)** prikazuje **ƒ**: jednadžba ga vodi.
2. Upišite željenu veličinu, na primjer `40`, i pritisnite {{key:Enter}}.

PartCraft izračunava parametar iza jednadžbe, kroz onoliko koraka koliko treba (`depth = hub_h`, `hub_h = disc_t + 50`: upisivanje visine mijenja `disc_t`). Statusna traka kaže što je promijenjeno, na primjer da se extra promijenio s 5 na 15.

Kada dva ili više parametara vode broj, okvir pita **Koji parametar treba promijeniti?** i navodi ih. Kliknite jedan; ostali zadržavaju svoje vrijednosti. {{ui:Odustani}} ne mijenja ništa.

Isto vrijedi za skicu: dvaput kliknite vođenu kotu, upišite vrijednost i pritisnite {{key:Enter}}. Radi i u stupcu **Vrijednost** tablice parametara, za parametar koji je sam izraz.

## Kada ne može

- Broj koji mora biti cijeli (broj ponavljanja uzorka) ili ostati u rasponu (kut do 360°) odbija se prije nego se bilo što promijeni.
- Jednadžba samo fiksnih brojeva (`=40`) nema parametar za promjenu: broj koji upišete zamjenjuje je.
- Ako nijedna vrijednost parametra ne daje veličinu koju ste upisali, statusna traka to kaže i ništa se ne mijenja.
- Skica koju nije moguće riješiti s novom vrijednošću zadržava prethodne vrijednosti, a statusna traka navodi skicu.

Svaka promjena, u oba smjera, jedan je korak za {{key:Mod+Z}} i {{key:Mod+Y}}.
