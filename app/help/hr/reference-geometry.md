---
title: Referentne ravnine, osi i točke
summary: Izradite ravnine pomaknute od plohe, pod kutom, kroz tri točke, na sredini, tangentne na valjak, okomite na brid ili kroz brid i točku; osi; točke na sredinama bridova, sjecištima i kutovima ravnina; skicirajte na njima i upotrijebite ih kao osi rotiranja, smjerove uzorka i ravnine zrcaljenja.
keywords: referenca, između objekata, polovište, točka sjecišta, ravnina kroz brid i točku, referentna ravnina, radna ravnina, konstrukcijska ravnina, pomaknuta ravnina, ravnina pod kutom, srednja ravnina, tangentna ravnina, referentna os, konstrukcijska os, referentna točka, radna točka, skica na ravnini
from: e7eb6fc1
---

Referentna geometrija je oslonac na kojem gradite značajke: **ravnina** za skiciranje tamo gdje nema plohe, **os** oko koje se rotira ili uzorkuje, **točka** na kojoj se izvlačenje zaustavlja. Nema vlastiti materijal. Ravnine se u prikazu vide kao blijedi kvadrati, osi kao isprekidane linije, točke kao mali križići; sva tri ulaze u povijest i prate ono od čega su nastala kad promijenite veličinu ranije u povijesti.

Nalaze se u izborniku {{ui:Više}} grupe Značajke: {{ui:Ravnina}}, {{ui:Os}}, {{ui:Točka}}.

## Izrada ravnine

1. Kliknite ravnu plohu ili osnovnu ravninu u povijesti da krenete od nje (nije obavezno).
2. Odaberite {{ui:Više}}, zatim {{ui:Ravnina}}. Počinje kao pomaknuta ravnina udaljena 20 % veličine dijela od onoga što ste odabrali (ili od gornje ravnine).
3. U desnoj ploči odaberite **Vrstu** i njezine reference:

| Vrsta | Reference | Brojevi |
|---|---|---|
| Pomaknuta od ravnine ili plohe | **Iz ravnine** | **Udaljenost (mm)**, negativna za drugu stranu |
| Pod kutom, kroz brid ili os | **Iz ravnine**, **Zakreni oko** (svjetska os, značajka osi ili odabrani ravni brid) | **Kut (°)** |
| Kroz tri točke | **Točka 1**, **Točka 2**, **Točka 3** | — |
| Srednja ravnina između dviju | **Prva ravnina**, **Druga ravnina** (paralelne: na pola puta; sastaju se: ravnina koja raspolavlja kut) | — |
| Tangentna na valjak | **Valjak** (valjkasta ploha), **Bliska točka** (koja strana) | — |
| Okomita na brid, u točki | **Brid**, **U točki** (ravnina prolazi kroz točku brida najbližu njoj i kroz točku) | — |
| Kroz brid i točku | **Ravni brid** (ili os), **Kroz točku** | — |
| Okomita na brid na njegovoj sredini | **Brid** (na pola njegove duljine, okomito na njega ondje), ili bez brida **Točka 1** i **Točka 2** (ravnina na pola puta između njih) | — |

Svaka referenca ima gumb **Odaberi**: odaberite ga, zatim kliknite u prikazu. Polje ravnine prima osnovnu ravninu, referentnu ravninu ili ravnu plohu; polje točke prima kraj brida (kliknite blizu tog kraja), značajku točke ili mjesto na plohi; polje brida prima brid. {{key:Esc}} otkazuje odabir. **Preokreni normalu** okreće ravninu (u kojem smjeru je okrenuta skica na njoj).

U ovoj verziji polje koje traži brid ili valjkastu plohu (Tangentna na valjak i polja Brid) odgovara „još nije izrađeno“: umjesto toga upotrijebite točke ili os.

## Skica na ravnini

Odaberite ravninu (u povijesti ili klikom na njezin kvadrat u prikazu) i odaberite {{ui:Skica}} ili **Skiciraj na njoj** u njezinoj ploči. Skica prati ravninu: promijenite udaljenost ravnine i skica te svaka značajka na njoj također se pomiče.

## Osi i točke

- {{ui:Os}}: kroz dvije točke, os valjka ili stošca, mjesto na kojem se sijeku dvije ravnine, duž ravnog brida (ili os kružnog brida), ili okomito na plohu kroz točku.
- {{ui:Točka}}: na koordinatama, u vrhu ili točki skice, ili u središtu kružnog brida, te točke „između objekata“:

| Vrsta točke | Reference |
|---|---|
| Sredina brida (ili između dviju točaka) | **Brid** (na pola njegove duljine, vrijedi i za lukove i krivulje), ili bez brida **Točka 1** i **Točka 2** |
| Gdje brid ili os susreće plohu ili ravninu | **Brid** (ravni ili zakrivljeni) ili os, i **Susreće ravninu** (ravnina ili ravna ploha) ili **Ili plohu** (ravna ploha ili valjak). Kružnica siječe ravninu dvaput, a pravac prolazi kroz valjak dvaput: **Drugo sjecište** uzima drugo |
| Gdje se sijeku tri ravnine | **Prva**, **Druga** i **Treća ravnina** (ravnine ili ravne plohe) |

Svaka od njih ne uspijeva s jednostavnom porukom kad reference ne odgovaraju: pravac paralelan s ravninom, pravac koji promašuje valjak, brid koji ne doseže ravninu, tri ravnine koje se ne sastaju u jednoj točki, točka na pravcu pomoću kojeg bi trebala učvrstiti ravninu.

Upotrijebite ih u drugim značajkama:

| Gdje | Kako |
|---|---|
| Rotiraj | **Os**: odaberite značajku osi s popisa (mora ležati u ravnini skice) |
| Kružni uzorak | **Os**: značajka osi |
| Linearni uzorak | **Smjer**: značajka osi ili ravnina (njezina normala) |
| Zrcaljenje | **Ravnina zrcaljenja**: referentna ravnina |
| Izvuci | **Kraj**: Do plohe ili ravnine, Do vrha (značajka točke). Još nije izrađeno u ovoj verziji (treba mu točna jezgra) |
| Nagib izvlačenja | **Neutralna ravnina** |

## Kad referenca nestane

Ravnina napravljena od plohe koja više ne postoji ne uspijeva s porukom koja je imenuje, na primjer: „Ploha na kojoj leži nestala je iz Extrude1.“ Nikad se ne premješta na drugu plohu. Skice i značajke na njoj označene su „nije izgrađeno“ dok ne odaberete novu referencu; ostatak dijela ostaje kakav je bio.

:::note
Ova verzija gradi svaki dio mrežnom jezgrom, koja izrađuje ravnine, osi i točke iz osnovnih ravnina, ravnih ploha nastalih značajkama Izvuci ili Rotiraj, točaka skice, koordinata i drugih referentnih značajki. Sve što treba brid, kraj brida ili zakrivljenu plohu treba točnu jezgru: još nije izrađeno u ovoj verziji („Koristi plohu ili brid tijela, koje može pronaći samo točna jezgra: još nije izrađeno u ovoj verziji.“).
:::
